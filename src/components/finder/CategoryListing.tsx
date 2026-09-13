import { useState, useMemo, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { SlidersHorizontal, Navigation, ChevronDown, MapPin, ExternalLink, Utensils, Home, ShoppingBag } from 'lucide-react';
import { useExploreStore } from '../../state/exploreStore';
import { useParameterStore } from '../../state/parameterStore';
import { getListings } from '../../listings';
import { useNavigate } from 'react-router-dom';
import FilterPanel from './modals/FilterPanel';
import { SavvyScoreEngine } from '../../engine/savvyScoreEngine';
import SavvyBadge from '../savvy/SavvyBadge';
import { getShopStatus } from '../../utils/timeEngine';
import { resolveListingImages, handleListingImageError } from '../../utils/imageResolver';
import { getAreasByCityBase } from '../../data/tourismAreas';

export default function CategoryListing() {
  const { filters, setFilters, activeCategory } = useExploreStore();
  const { city } = useParameterStore();
  const navigate = useNavigate();
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
            const hasGoodIntel = item.id === 'sh-mar-1' || item.id === 'sh-mar-2';
            return item.pricingModel === 'fixed' || hasGoodIntel;
          });
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
          listings = listings.filter(item => !!item.hasPool);
        }
        if (filters.hasAC) {
          listings = listings.filter(item => !!item.hasAC);
        }
      }
      if (filters.vibes && filters.vibes.length > 0) {
        listings = listings.filter(item => {
          const itemTags = [...(item.tags || []), ...(item.vibeTags || []), ...(item.productCategories || [])].map(t => t.toLowerCase());
          return filters.vibes.every((v: string) => itemTags.includes(v.toLowerCase()));
        });
      }
    }
    
    return listings;
  }, [city, activeCategory, filters, nonTouristicAreas]);

  return (
    <div className="py-4 px-6 max-w-4xl mx-auto relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-4xl text-stone-800 capitalize">
            {activeCategory?.replace('-', ' ')} in {city}
          </h2>
          <p className="text-stone-500 text-sm mt-1 font-medium">
            {items.length} results
          </p>
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

      <div className="grid grid-cols-1 gap-6">
        {items.slice(0, visibleCount).map((item) => {
          const hasIntel = SavvyScoreEngine.getPlaceIntel(item.id) !== undefined;
          const isShopping = activeCategory === 'shopping';
          const resolvedImg = resolveListingImages({
            id: item.id,
            googlePlaceId: item.googlePlaceId,
            images: item.images,
            nonCopyrightImage: item.nonCopyrightImage,
            category: (activeCategory || 'things') as any
          });
          
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

          return (
            <div 
              key={item.id} 
              onClick={() => navigate(`/finder/${item.city || city || 'marrakech'}/${item.id}`)}
              className="p-4 md:p-6 bg-white border border-stone-100 rounded-[32px] text-left flex flex-col sm:flex-row gap-5 hover:shadow-md transition-all cursor-pointer hover:border-[#C9A84C]/30 items-stretch sm:items-center"
            >
              {/* Image thumbnail */}
              <div className="w-full sm:w-40 h-36 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-stone-100 relative">
                {activeCategory !== 'things-to-do' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center relative overflow-hidden bg-gradient-to-br from-stone-200/90 via-stone-100/95 to-stone-200/80 backdrop-blur-md border border-stone-200/60 select-none">
                    {/* Subtle geometric pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#8C7A6B_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
                    
                    <div className="relative z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 flex items-center justify-center text-stone-500 shadow-2xs mb-2">
                      {activeCategory === 'food' ? (
                        <Utensils className="w-3.5 h-3.5 text-[#C2613C]" />
                      ) : activeCategory === 'sleep' ? (
                        <Home className="w-3.5 h-3.5 text-[#D99A30]" />
                      ) : (
                        <ShoppingBag className="w-3.5 h-3.5 text-[#C9A84C]" />
                      )}
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name || item.title} ${item.city || city || ''} Morocco`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-10 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-stone-900 text-stone-800 hover:text-white text-[10px] font-bold shadow-xs hover:shadow-md border border-stone-300 hover:border-stone-900 transition-all duration-200 cursor-pointer group/btn"
                    >
                      <MapPin className="w-2.5 h-2.5 text-[#C2613C] group-hover/btn:text-[#E0A96D]" />
                      <span>Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5 text-stone-400 group-hover/btn:text-white/80" />
                    </a>
                  </div>
                ) : (
                  <>
                    {resolvedImg.url ? (
                      <img
                        src={resolvedImg.url}
                        alt={item.name || item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-fallbacks={JSON.stringify(resolvedImg.fallbackUrls)}
                        onError={(e) => handleListingImageError(e, resolvedImg.fallbackUrls, activeCategory as any)}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs uppercase font-bold">Photo</div>
                    )}
                  </>
                )}
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
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const placeCity = item.city || city || 'marrakech';
                    const placeName = item.name || item.title || '';
                    navigate(`/transport/go?city=${encodeURIComponent(placeCity)}&dest=${encodeURIComponent(placeName)}`);
                  }}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-[#C9A84C]/10 text-stone-700 hover:text-[#96700A] border border-stone-200 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Get Directions & Transport Options"
                >
                  <Navigation className="w-3 h-3 text-[#C9A84C]" /> Get Directions
                </button>
                <button 
                  onClick={() => navigate(`/finder/${item.city || city || 'marrakech'}/${item.id}`)}
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
