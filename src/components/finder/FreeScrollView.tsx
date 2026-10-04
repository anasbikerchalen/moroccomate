import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, ChevronRight, X, Sparkles, Filter, 
  MapPin, Star, Eye, Compass, RotateCcw, Check, SlidersHorizontal, Camera
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getCityTheme } from '../../utils/cityPalette';
import { getListings } from '../../listings';
import { cityMap, cities } from '../../data/cities';
import { ExploreCategory } from '../../types';

interface FreeScrollViewProps {
  initialCategory?: string;
  initialCity?: string;
  onSelectListing: (listing: any) => void;
  onSwitchToQuiz: (category: string) => void;
  onClose: () => void;
}

const CATEGORY_TABS: Array<{
  id: string;
  label: string;
  exploreCat: ExploreCategory;
  focusKey: string;
  description: string;
}> = [
  { id: 'do', label: 'THINGS TO DO', exploreCat: 'things-to-do', focusKey: 'things', description: 'Monuments, Palaces & Attractions' },
];

export default function FreeScrollView({
  initialCategory = 'things-to-do',
  initialCity = 'marrakech',
  onSelectListing,
  onSwitchToQuiz,
  onClose,
}: FreeScrollViewProps) {
  // Normalize initial category - Free Scroll is strictly exclusive to Things to Do
  const getInitialTabId = (_cat: string) => {
    return 'do';
  };

  const [selectedTab, setSelectedTab] = useState<string>(getInitialTabId(initialCategory));
  const [selectedCity, setSelectedCity] = useState<string>(initialCity || 'marrakech');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // Filters
  const [lifestyleFilter, setLifestyleFilter] = useState<'all' | 'lean' | 'balanced' | 'premium'>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedAmenity, setSelectedAmenity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentTabConfig = CATEGORY_TABS.find((t) => t.id === selectedTab) || CATEGORY_TABS[1];

  // City-themed gradient palette — powers the no-image carousel card backgrounds
  const themeColors = useMemo(() => getCityTheme(selectedCity), [selectedCity]);

  // Fetch listings for selected city & category
  const rawListings = useMemo(() => {
    const list = getListings(selectedCity, currentTabConfig.focusKey);
    // If current city has few listings in this category, fall back or combine gracefully
    if (!list || list.length === 0) {
      const fallbackList = getListings('marrakech', currentTabConfig.focusKey);
      return fallbackList || [];
    }
    return list;
  }, [selectedCity, currentTabConfig.focusKey]);

  // Apply in-carousel filters
  const filteredListings = useMemo(() => {
    return rawListings.filter((item: any) => {
      // Lifestyle / Price filter
      if (lifestyleFilter !== 'all' && item.lifestyle) {
        if (Array.isArray(item.lifestyle)) {
          if (!item.lifestyle.map((l: any) => String(l).toLowerCase()).includes(lifestyleFilter.toLowerCase())) {
            return false;
          }
        } else if (typeof item.lifestyle === 'string') {
          if (item.lifestyle.toLowerCase() !== lifestyleFilter.toLowerCase()) {
            return false;
          }
        }
      }
      // Rating filter
      const rating = typeof item.rating === 'number' ? item.rating : typeof item.googleRating === 'number' ? item.googleRating : 4.5;
      if (minRating > 0 && rating < minRating) {
        return false;
      }
      // Amenity / Tag filter
      if (selectedAmenity === 'pool' && !item.hasPool) return false;
      if (selectedAmenity === 'ac' && !item.hasAC) return false;
      if (selectedAmenity === 'rooftop' && !item.hasRooftop) return false;
      if (selectedAmenity === 'breakfast' && !item.hasBreakfast) return false;
      if (selectedAmenity === 'halal' && !item.isHalal) return false;
      if (selectedAmenity === 'veg' && !item.isVegetarianFriendly) return false;

      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const title = String(item.title || item.name || '').toLowerCase();
        const desc = String(item.description || '').toLowerCase();
        const neighborhood = String(item.neighborhood || '').toLowerCase();
        if (!title.includes(query) && !desc.includes(query) && !neighborhood.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [rawListings, lifestyleFilter, minRating, selectedAmenity, searchQuery]);

  // Reset index when category or city changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedTab, selectedCity, filteredListings.length]);

  const total = filteredListings.length;

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFilterOpen) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (filteredListings[activeIndex]) {
          onSelectListing(filteredListings[activeIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, activeIndex, filteredListings, isFilterOpen, onSelectListing]);

  // Wheel listener with debounce
  const wheelLockRef = useRef<boolean>(false);
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (wheelLockRef.current) return;
    if (Math.abs(e.deltaX) > 20 || Math.abs(e.deltaY) > 20) {
      wheelLockRef.current = true;
      if (e.deltaX > 0 || e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 250);
    }
  }, [handleNext, handlePrev]);

  // Touch swipe support
  const touchStartXRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? 0;
    const diff = touchStartXRef.current - endX;
    touchStartXRef.current = null;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const activeListing = filteredListings[activeIndex] || null;

  const cityName = useMemo(() => {
    const c = cityMap[selectedCity.toLowerCase()];
    return c ? c.name : selectedCity.toUpperCase();
  }, [selectedCity]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (lifestyleFilter !== 'all') count++;
    if (minRating > 0) count++;
    if (selectedAmenity !== 'all') count++;
    if (searchQuery.trim()) count++;
    return count;
  }, [lifestyleFilter, minRating, selectedAmenity, searchQuery]);

  const content = (
    <div 
      className="fixed inset-0 z-[100] w-screen h-screen bg-[#18110D] text-white flex flex-col justify-between overflow-hidden select-none font-sans"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Moroccan Background Layer with Soft Depth Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 80% 15%, ${themeColors.secondary}22 0%, transparent 60%),
                       radial-gradient(circle at 15% 85%, ${themeColors.primary}18 0%, transparent 50%),
                       linear-gradient(165deg, #241611 0%, #18110D 60%, #120B08 100%)`
        }}
      />
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-[#18110D]/75 to-[#120B08] pointer-events-none" />

      {/* TOP HEADER SECTION */}
      <header className="relative z-30 w-full px-4 sm:px-8 pt-5 sm:pt-7 pb-2 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left: Round Filter Button */}
        <div className="flex items-center gap-3">
          <button
            id="finder-free-scroll-filter-btn"
            onClick={() => setIsFilterOpen(true)}
            className="relative h-11 px-4 sm:px-5 rounded-full bg-[#F5EDE4] hover:bg-white text-[#3B1F0E] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            <span>filter</span>
            <span className="w-2 h-2 rounded-full bg-[#A85834]" />
            {activeFilterCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 bg-[#A85834] text-white text-[10px] rounded-full font-black">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* City Selector Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2E1B13]/80 border border-[#6E3821]/50 backdrop-blur-md text-xs text-[#E7D6C4]">
            <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer text-xs"
            >
              {cities.map((c) => (
                <option key={c.id} value={c.id} className="bg-[#2E1B13] text-white">
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Center: Category Pill Bar (Exact styling from reference image) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center bg-[#522919]/90 border border-[#7C3F26]/70 rounded-full p-1 sm:p-1.5 shadow-xl backdrop-blur-md">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`free-scroll-tab-${tab.id}`}
                  onClick={() => setSelectedTab(tab.id)}
                  className={cn(
                    "px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-[#F5EDE4] text-[#3B1F0E] shadow-md scale-100"
                      : "text-[#E7D6C4]/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span className="hidden lg:inline-block text-[#D1B8A5] text-[11px] font-medium tracking-wide">
            category bar
          </span>
        </div>

        {/* Right: Mode Switch to Quiz & Close Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSwitchToQuiz(currentTabConfig.exploreCat)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2E1B13]/80 hover:bg-[#43271C] border border-[#6E3821]/50 text-xs font-semibold text-[#E7D6C4] hover:text-white transition-all cursor-pointer shadow-md"
            title="Switch to personalized matchmaker quiz"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Take Quiz</span>
          </button>

          <button
            id="finder-free-scroll-close-btn"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#2E1B13]/80 hover:bg-[#43271C] border border-[#6E3821]/50 text-[#E7D6C4] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            title="Exit Free Scroll"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* CATEGORY CONTEXT NOTATION (From Reference Image) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex justify-end -mt-1 pointer-events-none">
        <div className="flex items-center gap-1.5 text-xs text-[#E7D6C4]/90 font-medium">
          <span className="text-[#C9A84C]">↳</span>
          <span className="uppercase tracking-wider font-bold">
            {currentTabConfig.label}: {currentTabConfig.description}
          </span>
        </div>
      </div>

      {/* MAIN 3D HORIZONTAL CAROUSEL */}
      <main className="relative z-20 flex-1 w-full max-w-[1500px] mx-auto flex items-center justify-center px-4 sm:px-8 my-auto overflow-hidden">
        {/* Side Navigation Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous listing"
          className="absolute left-2 sm:left-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all active:scale-95 cursor-pointer hover:border-[#C9A84C]/60"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Side Navigation Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next listing"
          className="absolute right-2 sm:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all active:scale-95 cursor-pointer hover:border-[#C9A84C]/60"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Stage */}
        {filteredListings.length === 0 ? (
          <div className="text-center p-8 bg-[#2B170F]/80 rounded-3xl border border-[#5C3220] max-w-md mx-auto backdrop-blur-md">
            <Compass className="w-10 h-10 text-[#C9A84C] mx-auto mb-3 animate-pulse" />
            <h3 className="text-lg font-bold text-white mb-1">No listings found</h3>
            <p className="text-xs text-[#D1B8A5] mb-4">
              Try adjusting your active filters or change to another city.
            </p>
            <button
              onClick={() => {
                setLifestyleFilter('all');
                setMinRating(0);
                setSelectedAmenity('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#A85834] hover:bg-[#BD643C] text-white text-xs font-bold rounded-full transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="relative w-full h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center">
            {filteredListings.map((item: any, idx: number) => {
              // Calculate relative offset from activeIndex
              let offset = idx - activeIndex;
              // Wrap around for seamless circular reel
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              // Only render visible window (-2 to +2)
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              // Responsive translation step
              const stepX = typeof window !== 'undefined' && window.innerWidth < 640 ? 220 : 340;
              const translateX = offset * stepX;
              const scale = isCenter ? 1.05 : isAdjacent ? 0.84 : 0.70;
              const zIndex = isCenter ? 30 : isAdjacent ? 20 : 10;
              const opacity = isCenter ? 1 : isAdjacent ? 0.75 : 0.40;

              const displayName = item.title || item.name || 'Moroccan Gem';
              const locationText = item.neighborhood 
                ? `${item.neighborhood}, ${item.city || selectedCity}`
                : item.city || selectedCity;
              
              const ratingNum = typeof item.rating === 'number' ? item.rating : typeof item.googleRating === 'number' ? item.googleRating : 4.7;
              let lifestyle = 'CURATED';
              if (item.lifestyle) {
                if (Array.isArray(item.lifestyle) && item.lifestyle.length > 0) {
                  lifestyle = String(item.lifestyle[0]).toUpperCase();
                } else if (typeof item.lifestyle === 'string') {
                  lifestyle = item.lifestyle.toUpperCase();
                }
              }

              // Build informative subtitle tags based on category
              let subtitle = '';
              if (selectedTab === 'stay') {
                const amenities = [];
                if (item.hasPool) amenities.push('POOL');
                if (item.hasAC) amenities.push('AC');
                if (item.hasRooftop) amenities.push('ROOFTOP');
                subtitle = amenities.length > 0 ? `${lifestyle} • ${amenities.join(' & ')}` : `${lifestyle} RIAD / HOTEL`;
              } else if (selectedTab === 'eat') {
                const styles = Array.isArray(item.foodStyles) ? item.foodStyles.slice(0, 2).join(', ') : '';
                subtitle = styles || (typeof item.cuisine === 'string' ? item.cuisine : '') || `${lifestyle} DINING`;
              } else if (selectedTab === 'shop') {
                const specs = Array.isArray(item.specialties) ? item.specialties.slice(0, 2).join(', ') : '';
                subtitle = specs || (typeof item.specialty === 'string' ? item.specialty : '') || 'AUTHENTIC ARTISAN';
              } else {
                subtitle = typeof item.duration === 'string' ? item.duration : (item.durationMinutes ? `${item.durationMinutes} MINS` : `${lifestyle} EXPERIENCE`);
              }

              return (
                <motion.div
                  key={item.id || `${selectedCity}-${idx}`}
                  onClick={() => {
                    if (isCenter) {
                      onSelectListing(item);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  animate={{
                    x: translateX,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                  }}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-[270px] sm:w-[320px] md:w-[360px] h-[400px] sm:h-[460px] md:h-[500px] rounded-[28px] overflow-hidden cursor-pointer transition-shadow select-none",
                    isCenter 
                      ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-2 ring-white/30 hover:ring-[#C9A84C]/80" 
                      : "shadow-xl hover:opacity-90"
                  )}
                >
                  {/* No-Image Gradient Background — city-themed Moroccan palette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 75% 20%, ${themeColors.secondary}40 0%, transparent 55%),
                                   radial-gradient(circle at 20% 85%, ${themeColors.primary}30 0%, transparent 50%),
                                   linear-gradient(165deg, ${themeColors.primary}55 0%, #1a0f0a 60%, #120B08 100%)`
                    }}
                  />
                  {/* Subtle geometric texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(201,168,76,0.18)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                  {/* See Photos link — opens the place's Google Maps photos */}
                  <a
                    href={item.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${displayName} ${locationText} Morocco`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 z-20 pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold hover:bg-[#C9A84C] hover:text-stone-950 hover:border-[#C9A84C] transition-all cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Photos</span>
                  </a>

                  {/* Dark Gradient Overlay for Typography Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 pointer-events-none" />

                  {/* Top Badges (Only on Center or Adjacent) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white">
                      <Star className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                      <span>{ratingNum.toFixed(1)}</span>
                    </div>

                    {isCenter && (
                      <div className="px-3 py-1 rounded-full bg-[#C9A84C]/90 text-stone-900 text-[10px] font-black uppercase tracking-wider shadow-md">
                        Click to View Details
                      </div>
                    )}
                  </div>

                  {/* Bottom Information (Exact style matching reference image) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 text-left">
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#E7D6C4] mb-1">
                      {currentTabConfig.label}:
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white uppercase leading-tight line-clamp-2 mb-1.5">
                      {displayName}, {locationText}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#D1B8A5] uppercase tracking-wide line-clamp-1">
                      {subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      {/* FOOTER & STATUS BAR */}
      <footer className="relative z-30 w-full px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
        {/* Bottom Left: Free Scroll Active Status (From Reference) */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#D1B8A5]">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span>FREE SCROLL ACTIVE: USER-INITIATED</span>
        </div>

        {/* Center: Dynamic Category & City Title (From Reference) */}
        <div className="text-center">
          <h2 className="text-sm sm:text-lg md:text-xl font-display font-extrabold tracking-wider uppercase text-[#F5EDE4]">
            YOUR {currentTabConfig.label} CHOICES IN {cityName}
          </h2>
        </div>

        {/* Bottom Right: Scroll / Swipe Guidance Icon (From Reference) */}
        <div className="flex items-center gap-2 text-[#D1B8A5] text-[11px] font-medium tracking-wider">
          <span>↤</span>
          <span className="px-2 py-0.5 rounded-full bg-[#2E1B13]/80 border border-[#6E3821]/50 text-[10px] uppercase font-mono">
            {activeIndex + 1} / {total}
          </span>
          <span>↦</span>
        </div>
      </footer>

      {/* SLIDE-OVER FILTER MODAL */}
      <AnimatePresence>
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Filter Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-lg bg-[#24130C] border border-[#5E321E] rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-y-auto max-h-[85vh]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#4A2515]">
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal className="w-5 h-5 text-[#C9A84C]" />
                  <h3 className="text-lg font-bold font-display uppercase tracking-wide">
                    Filter {currentTabConfig.label} Listings
                  </h3>
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#3B1F13] hover:bg-[#522B1B] flex items-center justify-center text-[#D1B8A5] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* City Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D1B8A5] mb-2">
                  Destination City
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {cities.slice(0, 9).map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCity(c.id)}
                      className={cn(
                        "px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer",
                        selectedCity.toLowerCase() === c.id.toLowerCase()
                          ? "bg-[#F5EDE4] text-[#3B1F0E] shadow-md font-bold"
                          : "bg-[#331B10] hover:bg-[#452416] text-[#D1B8A5]"
                      )}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price / Lifestyle Tier */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D1B8A5] mb-2">
                  Comfort & Price Tier
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'lean', label: 'Budget' },
                    { id: 'balanced', label: 'Mid' },
                    { id: 'premium', label: 'Luxury' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setLifestyleFilter(tier.id as any)}
                      className={cn(
                        "px-2.5 py-2 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer",
                        lifestyleFilter === tier.id
                          ? "bg-[#C9A84C] text-stone-900 font-bold shadow-md"
                          : "bg-[#331B10] hover:bg-[#452416] text-[#D1B8A5]"
                      )}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D1B8A5] mb-2">
                  Minimum Rating
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { val: 0, label: 'Any' },
                    { val: 4.0, label: '4.0+' },
                    { val: 4.5, label: '4.5+' },
                    { val: 4.8, label: '4.8+' },
                  ].map((r) => (
                    <button
                      key={r.val}
                      onClick={() => setMinRating(r.val)}
                      className={cn(
                        "px-2.5 py-2 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer flex items-center justify-center gap-1",
                        minRating === r.val
                          ? "bg-[#C9A84C] text-stone-900 font-bold shadow-md"
                          : "bg-[#331B10] hover:bg-[#452416] text-[#D1B8A5]"
                      )}
                    >
                      {r.val > 0 && <Star className="w-3 h-3 fill-current" />}
                      <span>{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific Amenity Filter */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D1B8A5] mb-2">
                  Key Highlight / Feature
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'Show All' },
                    { id: 'pool', label: '🏊 Swimming Pool' },
                    { id: 'rooftop', label: '🌇 Rooftop View' },
                    { id: 'ac', label: '❄️ Air Conditioning' },
                    { id: 'breakfast', label: '🍳 Breakfast Included' },
                    { id: 'halal', label: '🥗 Halal Verified' },
                    { id: 'veg', label: '🥑 Vegetarian Friendly' },
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAmenity(a.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                        selectedAmenity === a.id
                          ? "bg-[#F5EDE4] text-[#3B1F0E] font-bold shadow-md"
                          : "bg-[#331B10] hover:bg-[#452416] text-[#D1B8A5]"
                      )}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#4A2515]">
                <button
                  onClick={() => {
                    setLifestyleFilter('all');
                    setMinRating(0);
                    setSelectedAmenity('all');
                    setSearchQuery('');
                  }}
                  className="flex-1 py-3 rounded-2xl bg-[#331B10] hover:bg-[#452416] text-[#D1B8A5] text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-3 rounded-2xl bg-[#C9A84C] hover:bg-[#D4B55C] text-stone-950 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Show ({filteredListings.length})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(content, document.body);
  }

  return content;
}
