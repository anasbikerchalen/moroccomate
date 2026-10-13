import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, Search, X, Compass, Map, Sparkles } from 'lucide-react';
import { useParameterStore } from '../../state/parameterStore';
import { cities, cityMap } from '../../data/cities';
import { getAreasForTool, getCityBasesForCityId, getPrimaryCitiesWithTouristicAreas } from '../../data/cityAreaMapping';
import { NON_TOURISTIC_AREAS } from '../../data/tourismAreas';
import { getListings } from '../../listings';
import { useExploreStore } from '../../state/exploreStore';
import { cn } from '../../utils/cn';

import { getCityProfile, isCityTouristicOrMid, isNeighborhoodAllowed } from '../../data/touristicHierarchy';

// Major Touristic hubs from touristic_organization.md
const MAJOR_TOURISTIC_NAMES = ['Marrakech', 'Essaouira', 'Tangier', 'Tanger', 'Chefchaouen', 'Fes', 'Rabat', 'Casablanca', 'Agadir', 'Taghazout', 'Dakhla', 'Merzouga'];

interface LocationPickerProps {
  onCitySelect?: (cityId: string) => void;
  onAreaSelect?: (areaName: string | null) => void;
}

export default function LocationPicker({ onCitySelect, onAreaSelect }: LocationPickerProps = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { city, neighborhood, setCity, setNeighborhood } = useParameterStore();
  const { activeCategory } = useExploreStore();
  
  const [isOpen, setIsOpen] = useState<'hub' | 'spoke' | null>(null);
  const [citySearch, setCitySearch] = useState('');
  const [areaSearch, setAreaSearch] = useState('');
  const [showMoreCities, setShowMoreCities] = useState(false);

  // Filter only Touristic and Mid-Touristic cities (Strictly exclude Low-Touristic)
  const availableCities = useMemo(() => {
    return cities.filter(c => {
      // Must be Touristic or Mid-Touristic in the organization guide
      if (!isCityTouristicOrMid(c.id)) return false;
      // Must have actual listings
      const count = getListings(c.id).length;
      return count > 0 || c.isPrimary;
    });
  }, []);

  const filteredCities = useMemo(() => {
    const query = citySearch.trim().toLowerCase();
    if (!query) return availableCities;
    return availableCities.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.id.toLowerCase().includes(query)
    );
  }, [availableCities, citySearch]);

  const currentCityData = useMemo(() => city ? cityMap[city] : null, [city]);

  // Extract ONLY neighborhoods that exist in real listings and are Touristic/Mid in touristic_organization.md
  const areas = useMemo(() => {
    if (!city || !cityMap[city]) return { neighborhoods: [], satellites: [] };
    const cityData = cityMap[city];
    
    // 1. Satellite regions
    const satellites = (cityData.subRegions || [])
      .map((id: string) => cityMap[id]?.name)
      .filter(Boolean)
      .filter((sName: string) => isCityTouristicOrMid(sName.toLowerCase()));

    // 2. Scan actual listings for this category/city
    const focusMap: Record<string, string> = {
      'food': 'eat', 'things-to-do': 'things', 'experiences': 'things', 
      'sleep': 'sleep', 'shopping': 'shopping'
    };
    const categoriesToScan = activeCategory ? [focusMap[activeCategory] || 'things'] : ['eat', 'sleep', 'things', 'shopping'];
    
    // Count listings per neighborhood
    const counts: Record<string, number> = {};
    categoriesToScan.forEach(focus => {
      const list = getListings(city, focus);
      list.forEach(item => {
        const n = item?.neighborhood;
        if (n && typeof n === 'string' && n.trim() && !satellites.includes(n)) {
          // Check against low-touristic exclusions
          if (isNeighborhoodAllowed(city, n)) {
            counts[n] = (counts[n] || 0) + 1;
          }
        }
      });
    });

    const validNeighborhoods = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

    const q = areaSearch.trim().toLowerCase();
    const finalNeighborhoods = q 
      ? validNeighborhoods.filter(n => n.toLowerCase().includes(q))
      : validNeighborhoods;
    const finalSatellites = q 
      ? satellites.filter((s: string) => s.toLowerCase().includes(q)) 
      : satellites;
    
    return { 
      neighborhoods: finalNeighborhoods.map(n => ({ name: n, count: counts[n] || 0 })), 
      satellites: finalSatellites.sort() 
    };
  }, [city, activeCategory, areaSearch]);

  const handleCitySelect = (cityId: string) => {
    setCity(cityId);
    setNeighborhood(null);
    setCitySearch('');
    setAreaSearch('');
    setIsOpen('spoke'); // Automatically prompt for area

    if (onCitySelect) {
      onCitySelect(cityId);
    }

    // If currently on a /finder/:city/:category route, update the URL
    if (location.pathname.startsWith('/finder/')) {
      const segments = location.pathname.split('/').filter(Boolean); // e.g. ['finder', 'marrakech', 'sleep']
      if (segments.length >= 2 && segments[0] === 'finder' && cityMap[segments[1].toLowerCase()]) {
        const categorySegment = segments[2] || activeCategory || 'sleep';
        navigate(`/finder/${cityId.toLowerCase()}/${categorySegment}${location.search}`);
      }
    }
  };

  const handleAreaSelect = (areaName: string | null) => {
    setNeighborhood(areaName);
    setAreaSearch('');
    setIsOpen(null);
    if (onAreaSelect) {
      onAreaSelect(areaName);
    }
  };

  const getCityIcon = (id: string) => {
    switch (id) {
      case 'marrakech': return '🕌';
      case 'casablanca': return '🏢';
      case 'chefchaouen': return '💠';
      case 'fes': return '🏺';
      case 'tangier': return '🌊';
      case 'essaouira': return '🌬️';
      case 'agadir': return '🏖️';
      case 'merzouga': return '🐪';
      case 'rabat': return '🏛️';
      case 'dakhla': return '🪁';
      default: return '📍';
    }
  };

  // Organized city groups based on touristic hierarchy
  const majorTouristicCities = useMemo(() => {
    return filteredCities.filter(c => {
      const prof = getCityProfile(c.id);
      return (prof && prof.tier === 'touristic') || MAJOR_TOURISTIC_NAMES.includes(c.name);
    });
  }, [filteredCities]);

  const midTouristicCities = useMemo(() => {
    return filteredCities.filter(c => {
      const prof = getCityProfile(c.id);
      return prof?.tier === 'mid' || (!majorTouristicCities.includes(c));
    });
  }, [filteredCities, majorTouristicCities]);

  const renderCityCard = (h: any, compact = false) => {
    const count = getListings(h.id).length;
    const isSelected = city === h.id;
    if (compact) {
      // Simple compact card — no emoji icon, just the city name + count
      return (
        <button
          key={h.id}
          onClick={() => handleCitySelect(h.id)}
          className={cn(
            "flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border transition-all text-left cursor-pointer",
            isSelected
              ? "bg-stone-900 border-stone-900 text-white"
              : "bg-white border-stone-200/70 hover:border-[#C9A84C] hover:bg-stone-50/50"
          )}
        >
          <span className="text-xs font-bold tracking-tight truncate">{h.name}</span>
          <span className={cn("text-[9px] font-medium shrink-0", isSelected ? "text-stone-300" : "text-stone-400")}>
            {count} {count === 1 ? 'place' : 'places'}
          </span>
        </button>
      );
    }
    return (
      <button
        key={h.id}
        onClick={() => handleCitySelect(h.id)}
        className={cn(
          "flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all text-center gap-1.5 group cursor-pointer relative",
          isSelected 
            ? "bg-stone-900 border-stone-900 text-white shadow-lg shadow-stone-900/15" 
            : "bg-white border-stone-200/70 hover:border-[#C9A84C] hover:bg-stone-50/50 hover:shadow-xs"
        )}
      >
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform group-hover:scale-110",
          isSelected ? "bg-white/10" : "bg-stone-100/70"
        )}>
          {getCityIcon(h.id)}
        </div>
        <div>
          <div className="text-xs font-bold tracking-tight line-clamp-1">{h.name}</div>
          <div className={cn("text-[9px] font-medium mt-0.5", isSelected ? "text-stone-300" : "text-stone-400")}>
            {count} {count === 1 ? 'place' : 'places'}
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="relative w-full">
      {/* Outer Container with harmonized border radius (Outer 28px - Padding 6px = Inner 22px) */}
      <div className="bg-stone-50/80 rounded-[28px] p-1.5 border border-stone-200/60 shadow-xs flex flex-col md:flex-row items-stretch gap-1">
        
        {/* Hub Selection Zone */}
        <button
          onClick={() => {
            setCitySearch('');
            setIsOpen(isOpen === 'hub' ? null : 'hub');
          }}
          className={cn(
            "flex-1 flex items-center gap-3 px-4 py-3 rounded-[22px] transition-all text-left group cursor-pointer",
            isOpen === 'hub' ? "bg-white shadow-md ring-1 ring-stone-200" : "hover:bg-white/70"
          )}
        >
          <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-[#C9A84C] shadow-sm">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 group-hover:text-[#C9A84C] transition-colors">Base Hub</div>
            <div className="font-display text-lg text-stone-900 truncate">
              {currentCityData?.name || 'Select City'}
            </div>
          </div>
          <ChevronDown className={cn("w-4 h-4 text-stone-400 transition-transform duration-300", isOpen === 'hub' && "rotate-180")} />
        </button>

        <div className="hidden md:block w-px bg-stone-200/60 my-2" />

        {/* Spoke Selection Zone */}
        <button
          disabled={!city}
          onClick={() => {
            setAreaSearch('');
            setIsOpen(isOpen === 'spoke' ? null : 'spoke');
          }}
          className={cn(
            "flex-1 flex items-center gap-3 px-4 py-3 rounded-[22px] transition-all text-left group cursor-pointer",
            isOpen === 'spoke' ? "bg-white shadow-md ring-1 ring-stone-200" : "hover:bg-white/70",
            !city && "opacity-40 grayscale cursor-not-allowed"
          )}
        >
          <div className="w-10 h-10 bg-white border border-stone-200/60 rounded-xl flex items-center justify-center text-stone-500 group-hover:text-stone-900 transition-colors shadow-2xs">
            <Compass className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-900 transition-colors">Narrow Area</div>
            <div className="font-display text-lg text-stone-900 truncate">
              {neighborhood || 'All Areas'}
            </div>
          </div>
          <ChevronDown className={cn("w-4 h-4 text-stone-400 transition-transform duration-300", isOpen === 'spoke' && "rotate-180")} />
        </button>
      </div>

      <AnimatePresence>
        {/* Hub Dropdown */}
        {isOpen === 'hub' && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            className="mt-3 bg-white rounded-[28px] shadow-2xl border border-stone-200/80 overflow-hidden"
          >
            {/* Header with Inline Search Box */}
            <div className="p-4 bg-stone-50/80 border-b border-stone-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">Choose Base City</span>
                </div>
                <button 
                  onClick={() => setIsOpen(null)} 
                  className="p-1 text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Inline Search Box */}
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top.1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  placeholder="Search cities (Marrakech, Fes, Tangier...)"
                  className="w-full pl-9 pr-8 py-2.5 bg-white border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition-all"
                  autoFocus
                />
                {citySearch && (
                  <button 
                    onClick={() => setCitySearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
            
            {/* City List — always fits the screen, scrolls inside with a visible scrollbar */}
            <div className="p-4 pt-3 space-y-4 max-h-[50vh] overflow-y-auto">
              {filteredCities.length === 0 ? (
                <div className="py-8 text-center text-stone-400 text-xs italic">
                  No cities found matching "{citySearch}"
                </div>
              ) : (
                <>
                  {/* Major Touristic Cities */}
                  {majorTouristicCities.length > 0 && (
                    <div>
                      <div className="pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#C2613C] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Major Touristic Destinations</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                        {majorTouristicCities.map((h) => renderCityCard(h))}
                      </div>
                    </div>
                  )}

                  {/* Mid-Touristic / Regional Gems */}
                  {midTouristicCities.length > 0 && (
                    <div>
                      <button
                        onClick={() => setShowMoreCities(!showMoreCities)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all group cursor-pointer",
                          (showMoreCities || citySearch.trim() !== '')
                            ? "bg-stone-50 border-stone-200 text-stone-800"
                            : "bg-[#FAF3EA] border-[#EADBCE] text-stone-700 hover:bg-[#F3E5D4]"
                        )}
                        aria-expanded={showMoreCities || citySearch.trim() !== ''}
                      >
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#C2613C]" />
                          <span className="text-[11px] font-bold uppercase tracking-wider">
                            Regional & Hidden Gems ({midTouristicCities.length})
                          </span>
                        </div>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform text-stone-500",
                          (showMoreCities || citySearch.trim() !== '') && "rotate-180"
                        )} />
                      </button>

                      {(showMoreCities || citySearch.trim() !== '') && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2.5">
                          {midTouristicCities.map((h) => renderCityCard(h, true))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Spoke Dropdown (Neighborhoods with Listings) */}
        {isOpen === 'spoke' && city && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            className="mt-3 bg-white rounded-[28px] shadow-2xl border border-stone-200/80 overflow-hidden flex flex-col max-h-[480px]"
          >
            {/* Header with Neighborhood Search */}
            <div className="p-4 bg-stone-50/80 border-b border-stone-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C2613C]" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-stone-900">
                    Neighborhoods in {currentCityData?.name}
                  </span>
                </div>
                <button onClick={() => setIsOpen(null)} className="p-1 text-stone-400 hover:text-stone-900 rounded-lg transition-colors cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Area Search Box */}
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={areaSearch}
                  onChange={(e) => setAreaSearch(e.target.value)}
                  placeholder={`Search neighborhoods in ${currentCityData?.name || 'city'}...`}
                  className="w-full pl-9 pr-8 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2613C] transition-all"
                />
                {areaSearch && (
                  <button 
                    onClick={() => setAreaSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="overflow-y-auto p-3 space-y-2">
              <button
                onClick={() => handleAreaSelect(null)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-xl transition-all text-left cursor-pointer border",
                  !neighborhood 
                    ? "bg-[#FAF3EA] border-[#C2613C] text-stone-900 font-bold shadow-2xs" 
                    : "border-stone-200/70 hover:bg-stone-50 text-stone-700"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-xs">🇲🇦</div>
                  <div>
                    <div className="text-xs font-bold">All Neighborhoods</div>
                    <div className="text-[10px] text-stone-400">Show places across whole {currentCityData?.name}</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#C2613C] uppercase tracking-wider">All Places</span>
              </button>

              {areas.neighborhoods.length > 0 && (
                <div className="mt-2">
                  <div className="px-1 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    Active Touristic Neighborhoods
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {areas.neighborhoods.map(n => (
                      <button
                        key={n.name}
                        onClick={() => handleAreaSelect(n.name)}
                        className={cn(
                          "flex items-center justify-between p-2.5 rounded-xl transition-all text-left cursor-pointer border",
                          neighborhood === n.name 
                            ? "bg-[#FAF3EA] border-[#C2613C] text-stone-900 font-bold shadow-2xs" 
                            : "border-stone-200/60 hover:bg-stone-50 hover:border-stone-300 text-stone-700"
                        )}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className={cn(
                            "w-2 h-2 rounded-full shrink-0",
                            neighborhood === n.name ? "bg-[#C2613C]" : "bg-stone-300"
                          )} />
                          <span className="text-xs truncate font-medium">{n.name}</span>
                        </div>
                        <span className="text-[10px] font-bold text-stone-400 ml-2 px-1.5 py-0.5 bg-stone-100 rounded-md shrink-0">
                          {n.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {areas.satellites.length > 0 && (
                <div className="mt-2 pt-2 border-t border-stone-100">
                  <div className="px-1 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                    Nearby Excursions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {areas.satellites.map((sName: any) => (
                      <button
                        key={sName}
                        onClick={() => handleAreaSelect(sName)}
                        className={cn(
                          "flex items-center justify-between p-2.5 rounded-xl transition-all text-left cursor-pointer border",
                          neighborhood === sName 
                            ? "bg-stone-900 text-white font-bold" 
                            : "border-stone-200/60 hover:bg-stone-50 text-stone-700"
                        )}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-xs">🏜️</span>
                          <span className="text-xs truncate font-medium">{sName}</span>
                        </div>
                        <Sparkles className="w-3 h-3 text-[#C2613C]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {areas.neighborhoods.length === 0 && areas.satellites.length === 0 && (
                <div className="py-6 text-center text-stone-400 text-xs italic">
                  No areas found matching "{areaSearch}"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}