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

// The most-visited cities, shown first in the picker
const RECOMMENDED_CITY_NAMES = ['Marrakech', 'Fes', 'Chefchaouen', 'Essaouira', 'Agadir'];

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
  // "More Cities" is collapsed behind a toggle until the visitor opens it
  const [showMoreCities, setShowMoreCities] = useState(false);

  const touristicCityIds = useMemo(() => getPrimaryCitiesWithTouristicAreas(), []);
  
  // All cities sorted with primary ones first
  const filteredCities = useMemo(() => {
    const query = citySearch.trim().toLowerCase();
    const available = cities.filter(c => touristicCityIds.includes(c.id) || c.isPrimary);
    
    if (!query) return available;
    return available.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.id.toLowerCase().includes(query)
    );
  }, [touristicCityIds, citySearch]);

  const currentCityData = useMemo(() => city ? cityMap[city] : null, [city]);

  const areas = useMemo(() => {
    if (!city || !cityMap[city]) return { neighborhoods: [], satellites: [] };
    const cityData = cityMap[city];
    
    // 1. Get satellite region names (subRegions)
    const satellites = (cityData.subRegions || []).map((id: string) => cityMap[id]?.name).filter(Boolean);

    // 2. Get Touristic areas from the master registry
    const touristicAreaNames = getAreasForTool(city, 'touristic');
    
    // 3. Extract from actual listing data for real-time relevance
    const focusMap: Record<string, string> = {
      'food': 'eat', 'things-to-do': 'things', 'experiences': 'things', 
      'sleep': 'sleep', 'shopping': 'shopping'
    };
    const categoriesToScan = activeCategory ? [focusMap[activeCategory] || 'things'] : ['eat', 'sleep', 'things'];
    
    const listingNeighborhoods = [...new Set(
      categoriesToScan.flatMap(focus => 
        getListings(city, focus).map(item => item?.neighborhood)
      ).filter((n): n is string => typeof n === 'string' && Boolean(n.trim()) && !satellites.includes(n))
    )].sort();
    
    // Merge: touristic areas from registry + listing neighborhoods, excluding non-touristic entries
    const nonTouristicNames = new Set(
      NON_TOURISTIC_AREAS
        .filter(a => a && typeof a.areaVillage === 'string')
        .map(a => a.areaVillage.toLowerCase())
    );
    const allNeighborhoods = [...new Set([...touristicAreaNames, ...listingNeighborhoods])]
      .filter((n): n is string => typeof n === 'string' && Boolean(n.trim()) && !nonTouristicNames.has(n.toLowerCase()))
      .sort();

    const q = areaSearch.trim().toLowerCase();
    const finalNeighborhoods = q ? allNeighborhoods.filter(n => n.toLowerCase().includes(q)) : allNeighborhoods;
    const finalSatellites = q ? satellites.filter((s: string) => s.toLowerCase().includes(q)) : satellites;
    
    return { neighborhoods: finalNeighborhoods, satellites: finalSatellites.sort() };
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

  // Organized city groups: most-visited first, then the rest
  const recommendedCities = useMemo(() => filteredCities.filter(c => RECOMMENDED_CITY_NAMES.includes(c.name)), [filteredCities]);
  const otherCities = useMemo(() => filteredCities.filter(c => !RECOMMENDED_CITY_NAMES.includes(c.name)), [filteredCities]);

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
                  {recommendedCities.length > 0 && (
                    <div>
                      <div className="pb-2 text-[9px] font-black uppercase tracking-[0.25em] text-stone-400">Most Visited</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                        {recommendedCities.map((h) => renderCityCard(h))}
                      </div>
                    </div>
                  )}
                  {otherCities.length > 0 && (
                    <div>
                      <button
                        onClick={() => setShowMoreCities(!showMoreCities)}
                        className={cn(
                          "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all group cursor-pointer",
                          (showMoreCities || citySearch.trim() !== '')
                            ? "bg-transparent border-transparent hover:bg-stone-50"
                            : "bg-[#C9A84C]/10 border-[#C9A84C]/40 hover:bg-[#C9A84C]/20 animate-[pulse-glow_2.5s_ease-in-out_infinite]"
                        )}
                        aria-expanded={showMoreCities || citySearch.trim() !== ''}
                      >
                        <Compass className={cn(
                          "w-3.5 h-3.5 shrink-0 transition-colors",
                          (showMoreCities || citySearch.trim() !== '') ? "text-stone-400" : "text-[#C9A84C]"
                        )} />
                        <span className={cn(
                          "text-[10px] font-black uppercase tracking-[0.2em] transition-colors",
                          (showMoreCities || citySearch.trim() !== '') ? "text-stone-400 group-hover:text-stone-600" : "text-[#C9A84C]"
                        )}>
                          {(showMoreCities || citySearch.trim() !== '')
                            ? 'More Cities'
                            : `Show ${otherCities.length} more cities`}
                        </span>
                        <ChevronDown className={cn(
                          "w-3.5 h-3.5 shrink-0 transition-transform",
                          (showMoreCities || citySearch.trim() !== '') ? "text-stone-400 group-hover:text-stone-600" : "text-[#C9A84C]",
                          (showMoreCities || citySearch.trim() !== '') && "rotate-180"
                        )} />
                      </button>
                      {(showMoreCities || citySearch.trim() !== '') && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {otherCities.map((h) => renderCityCard(h, true))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Spoke Dropdown */}
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
                  <Compass className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-900">Explore in {currentCityData?.name}</span>
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
                  placeholder={`Search areas in ${currentCityData?.name || 'city'}...`}
                  className="w-full pl-9 pr-8 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] transition-all"
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

            <div className="overflow-y-auto p-2">
              <button
                onClick={() => handleAreaSelect(null)}
                className={cn(
                  "w-full flex items-center gap-3.5 p-3 rounded-xl transition-all text-left cursor-pointer",
                  !neighborhood ? "bg-[#C9A84C]/10 text-[#C9A84C] font-bold" : "hover:bg-stone-50 text-stone-700"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-xs">🌍</div>
                <div>
                  <div className="text-xs font-bold">All Areas & Regions</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-60">Full {currentCityData?.name} Hub</div>
                </div>
              </button>

              {areas.neighborhoods.length > 0 && (
                <div className="mt-3">
                  <div className="px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-stone-400">Urban Neighborhoods</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {areas.neighborhoods.map(n => (
                      <button
                        key={n}
                        onClick={() => handleAreaSelect(n)}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl transition-all text-left cursor-pointer",
                          neighborhood === n ? "bg-[#C9A84C]/10 text-[#C9A84C] font-bold" : "hover:bg-stone-50 text-stone-700"
                        )}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#C9A84C] opacity-60 flex-shrink-0" />
                        <span className="text-xs truncate">{n}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {areas.satellites.length > 0 && (
                <div className="mt-3 mb-2">
                  <div className="px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-stone-400">Excursions & Day Trips</div>
                  <div className="grid grid-cols-1 gap-1">
                    {areas.satellites.map((n: any) => (
                      <button
                        key={n}
                        onClick={() => handleAreaSelect(n)}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl transition-all text-left cursor-pointer",
                          neighborhood === n ? "bg-stone-900 text-white font-bold" : "hover:bg-stone-50 text-stone-700"
                        )}
                      >
                        <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-xs text-stone-900 flex-shrink-0">🏜️</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold truncate">{n}</div>
                          <div className="text-[9px] uppercase tracking-widest opacity-60">Excursion Destination</div>
                        </div>
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0" />
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