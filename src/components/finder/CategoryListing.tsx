import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { SlidersHorizontal, ChevronDown, ChevronRight, MapPin, ExternalLink, Utensils, Home, ShoppingBag, Star, Heart } from 'lucide-react';
import { useExploreStore } from '../../state/exploreStore';
import { cn } from '../../utils/cn';
import { useParameterStore } from '../../state/parameterStore';
import { getListings } from '../../listings';
import { getListingUrl } from '../../listings/placeRoutes';
import { useNavigate } from 'react-router-dom';
import FilterPanel from './modals/FilterPanel';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import SavvyBadge from '../savvy/SavvyBadge';
import { getShopStatus } from '../../utils/timeEngine';
import { stayHasPool, stayHasAC, getCityCenter } from '../../engine/stayAdapter';
import { haversineM, bearingDeg } from '../../engine/proximityEngine';
import { WalkingDistanceMap } from './stay/WalkingDistanceMap';
import type { NearbyPlace } from '../../types/stay';
import { getAreasByCityBase } from '../../data/tourismAreas';

export default function CategoryListing() {
  const { filters, setFilters, activeCategory } = useExploreStore();
  const { city } = useParameterStore();
  const navigate = useNavigate();

  // Open a listing on its own name-based page (/place/... or /things/...);
  // the legacy fallback keeps working if a URL cannot be resolved
  const openListing = (item: any) => {
    navigate(getListingUrl(item) || `/finder/${item.city || city || 'marrakech'}/${item.id}`);
  };
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  // Reset visible count when category or city changes
  useEffect(() => {
    setVisibleCount(5);
  }, [city, activeCategory, filters]);

  const nonTouristicAreas = useMemo(() => {
    return new Set(
      getAreasByCityBase(city || 'marrakech')
        .filter(a => a.tourismStatus === 'Non-touristic')
        .map(a => a.areaVillage.toLowerCase())
    );
  }, [city]);

  const items = useMemo(() => {
    let listings = getListings(city || 'marrakech', activeCategory || 'things');
    
    // Exclude non-touristic areas (Rule 7)
    listings = listings.filter(item => {
      if (item.neighborhood && nonTouristicAreas.has(item.neighborhood.toLowerCase())) {
        return false;
      }
      return true;
    });
    
    if (filters) {
      if (filters.rating) {
        listings = listings.filter(item => (item.googleRating || item.rating || 0) >= filters.rating);
      }
      if (activeCategory === 'shopping') {
        if (filters.isVerified) {
          listings = listings.filter(item => !!item.isVerified);
        }
        if (filters.isFixedPrice) {
          listings = listings.filter(item => item.pricingModel === 'fixed');
        }
        if (filters.isNoHassle) {
          listings = listings.filter(item => {
            // "No-hassle" = fixed pricing or a verified local favorite (structured schema field)
            return item.pricingModel === 'fixed' || !!item.isLocalFavorite;
          });
        }
        if (filters.isWorkshop) {
          listings = listings.filter(item => !!item.workshopVisitable || (item.tags || []).includes('live-workshop'));
        }
        if (filters.isLocalFav) {
          listings = listings.filter(item => !!item.isLocalFavorite || (item.tags || []).includes('local-favorite'));
        }
      }
      if (activeCategory === 'food') {
        if (filters.isVegetarian) {
          listings = listings.filter(item => !!item.isVegetarianFriendly);
        }
        if (filters.isHalal) {
          listings = listings.filter(item => !!item.isHalal);
        }
        if (filters.servesAlcohol) {
          listings = listings.filter(item => !!item.servesAlcohol);
        }
      }
      if (activeCategory === 'sleep') {
        if (filters.hasPool) {
          listings = listings.filter(item => stayHasPool(item));
        }
        if (filters.hasAC) {
          listings = listings.filter(item => stayHasAC(item));
        }
      }
      if (filters.vibes && filters.vibes.length > 0) {
        listings = listings.filter(item => {
          const itemTags = [...(item.tags || []), ...(item.vibeTags || []), ...(item.productCategories || [])].map(t => t.toLowerCase());
          if (activeCategory === 'shopping') {
            // Shops: price vibes map to the structured priceLevel (shops don't carry price tags)
            const priceVibes = filters.vibes.filter((v: string) => v.startsWith('price-'));
            const otherVibes = filters.vibes.filter((v: string) => !v.startsWith('price-'));
            if (priceVibes.length) {
              const priceLevel = String(item.priceLevel || '').toLowerCase();
              const levelMap: Record<string, string[]> = {
                'price-free': ['free'],
                'price-budget': ['budget'],
                'price-mid': ['mid-range'],
                'price-premium': ['premium', 'luxury']
              };
              const levelOk = priceVibes.every((v: string) => (levelMap[v] || []).includes(priceLevel));
              if (!levelOk) return false;
            }
            return otherVibes.every((v: string) => itemTags.includes(v.toLowerCase()));
          }
          return filters.vibes.every((v: string) => itemTags.includes(v.toLowerCase()));
        });
      }
    }
    
    return listings;
  }, [city, activeCategory, filters, nonTouristicAreas]);

  // Radar map: the city's verified shops positioned by their real coordinates
  const shopMapPlaces = useMemo<NearbyPlace[]>(() => {
    if (activeCategory !== 'shopping') return [];
    const center = getCityCenter(city || 'marrakech');
    const withCoords = items.filter((item: any) => item.coordinates);
    if (!withCoords.length) return [];
    const limited = withCoords.slice(0, 8);
    const maxRef = Math.max(1, ...limited.map((s: any) => haversineM(center, s.coordinates)));
    const typeMap: Record<string, string> = {
      souk_stall: 'Souk / Market',
      cooperative: 'Landmark',
      boutique: 'Landmark',
      mall_store: 'Landmark',
      pharmacy: 'Landmark',
      supermarket: 'Landmark',
      designer_atelier: 'Landmark',
      concept_store: 'Landmark'
    };
    return limited.map((s: any, i: number) => {
      const distanceM = haversineM(center, s.coordinates);
      const angle = ((bearingDeg(center, s.coordinates) % 360) + 360) % 360;
      return {
        id: s.id,
        name: s.name || s.title || `Shop ${i + 1}`,
        category: (typeMap[s.type] || 'Other') as any,
        walking_time_minutes: Math.max(1, Math.round(distanceM / 80)),
        icon: s.type === 'souk_stall' ? 'souk' : 'store',
        latitude: s.coordinates.lat,
        longitude: s.coordinates.lng,
        relative_angle: Math.round(angle),
        relative_distance: Number(Math.min(0.95, Math.max(0.3, distanceM / maxRef)).toFixed(2))
      };
    });
  }, [items, activeCategory, city]);

  const isShoppingPage = activeCategory === 'shopping';

  return (
    <div className={cn('py-4 px-6 mx-auto relative', isShoppingPage ? 'max-w-6xl' : 'max-w-4xl')}>
      <div className="flex justify-between items-end mb-8">
        <div>
          {isShoppingPage ? (
            <>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1510] capitalize tracking-tight">
                {city} Crafts & Shops
              </h2>
              <p className="text-sm text-[#7A6A55] mt-1 font-medium">
                Showing {items.length} verified listings with real-world ratings, contact info, and curated details.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-display text-4xl text-stone-800 capitalize">
                {activeCategory?.replace('-', ' ')} in {city}
              </h2>
              <p className="text-stone-500 text-sm mt-1 font-medium">
                {items.length} results
              </p>
            </>
          )}
        </div>
        <button 
          onClick={() => setShowFilters(true)}
          className="px-4 py-2 bg-white border border-stone-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-stone-600 hover:border-stone-400 transition-all flex items-center gap-2"
        >
          <SlidersHorizontal className="w-3 h-3" /> Filters
        </button>
      </div>
      
      <AnimatePresence>
        {showFilters && (
          <FilterPanel
            filters={filters}
            onChange={(newFilters) => setFilters(newFilters)}
            category={activeCategory || 'things'}
            onClose={() => setShowFilters(false)}
          />
        )}
      </AnimatePresence>

      {/* Shops on the map — radar minimap (real coordinates, like the stays page) */}
      {isShoppingPage && shopMapPlaces.length > 0 && (
        <section className="mb-8">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#b45309]/10 text-[#a14006]">
              <MapPin className="w-5 h-5 text-[#a14006]" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1C1510]">
                Shops on the map
              </h2>
              <p className="text-sm text-[#736554]">
                Where the verified shops sit around {city || 'the city'} — tap one to open it
              </p>
            </div>
          </div>
          <WalkingDistanceMap
            propertyName={String(city || 'Morocco')}
            nearbyPlaces={shopMapPlaces}
          />
        </section>
      )}

      <div className={isShoppingPage ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid grid-cols-1 gap-6'}>
        {items.slice(0, visibleCount).map((item) => {
          const hasIntel = SavvyScoreEngine.getPlaceIntel(item.id) !== undefined;
          const isShopping = activeCategory === 'shopping';

          let shopStatusText = '';
          let shopStatusColorClass = '';
          if (isShopping && item.openingHours) {
            const status = getShopStatus(item.openingHours, item.fridayHours, item.ramadanHours);
            shopStatusText = status.label;
            
            const colorMap: Record<string, string> = {
              emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
              amber: 'text-amber-600 bg-amber-50 border-amber-100',
              blue: 'text-blue-600 bg-blue-50 border-blue-100',
              purple: 'text-purple-600 bg-purple-50 border-purple-100',
              red: 'text-red-600 bg-red-50 border-red-100',
              stone: 'text-stone-600 bg-stone-50 border-stone-100'
            };
            shopStatusColorClass = colorMap[status.color] || 'text-stone-500 bg-stone-50 border-stone-100';
          }

          // Shop category: template-designed cards (sleep-shop-template design)
          if (isShopping) {
            return (
              <div
                key={item.id}
                onClick={() => openListing(item)}
                className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-md hover:border-[#C4973A] transition-all flex flex-col cursor-pointer group"
              >
                <div className="p-5 flex-1 flex flex-col">
                  {/* Header line: type badge + name */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      {item.type && (
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#FAF7F2] text-[#8C6218] border border-[#E8DDD0] inline-block mb-1">
                          {String(item.type).replace(/_/g, ' ')}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-lg text-[#1C1510] group-hover:text-[#8C6218] transition-colors leading-snug">
                        {item.name || item.title}
                      </h3>
                    </div>
                    {hasIntel && <SavvyBadge placeId={item.id} size="sm" showLabel={false} />}
                  </div>

                  {/* Neighborhood + open status */}
                  <div className="flex items-center gap-1.5 text-xs text-[#7A6A55] mb-3 flex-wrap">
                    <MapPin className="w-3.5 h-3.5 text-[#C4973A] shrink-0" />
                    <span className="truncate">{item.neighborhood || 'Medina'}</span>
                    {shopStatusText && (
                      <span className={cn('px-2 py-0.5 rounded-full text-[10px] font-bold border', shopStatusColorClass)}>
                        {shopStatusText}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs text-[#5C4A1E] line-clamp-3 mb-4 leading-relaxed flex-1">
                      {item.description}
                    </p>
                  )}

                  {/* Ratings */}
                  {item.googleRating && (
                    <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E8DDD0] mb-4 text-xs w-fit">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="font-bold text-[#1C1510]">{item.googleRating}</span>
                      <span className="text-[10px] text-[#A09880]">({item.googleReviewCount || 0} reviews)</span>
                    </div>
                  )}

                  {/* Footer: local favorite + details */}
                  <div className="mt-auto pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs">
                    {item.isLocalFavorite ? (
                      <span className="inline-flex items-center gap-1 text-[#8C6218] font-bold">
                        <Heart className="w-3.5 h-3.5" /> Local favorite
                      </span>
                    ) : (
                      <span className="text-[#A09880]">Verified listing</span>
                    )}
                    <span className="flex items-center gap-1 text-[#8C6218] font-semibold">
                      Details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => openListing(item)}
              className="p-4 md:p-6 bg-white border border-stone-100 rounded-[32px] text-left flex flex-col sm:flex-row gap-5 hover:shadow-md transition-all cursor-pointer hover:border-[#C9A84C]/30 items-stretch sm:items-center"
            >
              {/* No-Image Slot — category icon + Google Maps photos link */}
              <div className="w-full sm:w-40 h-36 sm:h-32 rounded-2xl overflow-hidden shrink-0 relative
                bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D0] border border-[#E2D4C2]
                flex flex-col items-center justify-center gap-2 p-3 text-center">
                {/* Subtle geometric texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#C9A84C_0.5px,transparent_0.5px)] [background-size:18px_18px] opacity-10 pointer-events-none" />

                {/* Category Icon */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/90 border border-[#D9C8B0] flex items-center justify-center text-stone-500 shadow-2xs">
                  {activeCategory === 'food' ? (
                    <Utensils className="w-4 h-4 text-[#C2613C]" />
                  ) : activeCategory === 'sleep' ? (
                    <Home className="w-4 h-4 text-[#D99A30]" />
                  ) : (
                    <ShoppingBag className="w-4 h-4 text-[#C9A84C]" />
                  )}
                </div>

                {/* See photos link */}
                <a
                  href={item.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name || item.title} ${item.city || city || ''} Morocco`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-stone-900 text-stone-800 hover:text-white text-[10px] font-bold shadow-xs hover:shadow-md border border-[#D9C8B0] hover:border-stone-900 transition-all duration-200 cursor-pointer group/btn"
                >
                  <MapPin className="w-2.5 h-2.5 text-[#C2613C] group-hover/btn:text-[#E0A96D]" />
                  <span>Photos on Maps</span>
                  <ExternalLink className="w-2.5 h-2.5 text-stone-400 group-hover/btn:text-white/80" />
                </a>
              </div>

              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-bold text-lg text-stone-850 flex items-center gap-1.5 truncate">
                    {isShopping && (item as any).isVerified && (
                      <span className="text-emerald-600 text-sm" title="Verified Authentic Shop">🛡️</span>
                    )}
                    {item.name || item.title}
                  </h3>
                  {hasIntel && (
                    <SavvyBadge placeId={item.id} size="sm" showLabel={false} />
                  )}
                  {isShopping && (item as any).pricingModel && (
                    <span className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-stone-200">
                      {(item as any).pricingModel}
                    </span>
                  )}
                  {isShopping && (item as any).priceLevel && (
                    <span className="px-2 py-0.5 bg-stone-50 text-stone-500 rounded-lg text-[9px] font-black uppercase tracking-widest border border-stone-100">
                      {(item as any).priceLevel}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3 text-stone-500 text-xs flex-wrap">
                  <span className="capitalize font-medium">{item.neighborhood || 'Medina'}</span>
                  {isShopping && shopStatusText && (
                    <>
                      <span className="text-stone-300">•</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${shopStatusColorClass}`}>
                        {shopStatusText}
                      </span>
                    </>
                  )}
                </div>

                {isShopping && (item as any).authenticitySeals && (item as any).authenticitySeals.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(item as any).authenticitySeals.map((seal: string) => (
                      <span key={seal} className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                        🏷️ {seal.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0 md:self-center">
                <button
                  onClick={() => openListing(item)}
                  className="text-[#C9A84C] hover:text-[#b49542] font-black tracking-wider text-xs uppercase transition-colors shrink-0"
                >
                  View Details →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More 5 Button */}
      {visibleCount < items.length && (
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => setVisibleCount(prev => prev + 5)}
            className="px-8 py-3.5 bg-white border border-stone-200 hover:border-[#C9A84C] text-stone-800 hover:text-[#96700A] rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2.5 cursor-pointer group"
          >
            <span>Show 5 More Places</span>
            <ChevronDown className="w-4 h-4 text-stone-500 group-hover:text-[#96700A] transition-transform group-hover:translate-y-0.5" />
          </button>
          <p className="text-xs text-stone-500 font-medium">
            Showing {Math.min(visibleCount, items.length)} of {items.length} places
          </p>
        </div>
      )}
    </div>
  );
}
