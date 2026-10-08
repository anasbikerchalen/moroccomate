import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, X, Check, Compass, ChevronRight, ChevronLeft } from 'lucide-react';
import { useExploreStore } from '../../state/exploreStore';
import { useProfileStore } from '../../state/profileStore';
import { cn } from '../../utils/cn';
import { getTravelModeConfig } from '../../types/modes';

export interface FilterChipOption {
  id: string;
  label: string;
  icon: string;
  tag: string;
  flagKey?: 'isVegetarian' | 'isHalal' | 'isWheelchairAccessible' | 'isFixedPrice' | 'isKidFriendly' | 'isWorkshop' | 'isLocalFav';
}

const CATEGORY_CHIPS: Record<string, FilterChipOption[]> = {
  sleep: [
    { id: 'family-rooms', label: 'Family Rooms', icon: '👨‍👩‍👧', tag: 'family-friendly', flagKey: 'isKidFriendly' },
    { id: 'luxury-riad', label: 'Luxury Riad', icon: '🏰', tag: 'luxury' },
    { id: 'desert-camp', label: 'Desert Camp', icon: '🎪', tag: 'desert' },
    { id: 'rooftop-terrace', label: 'Rooftop Terrace', icon: '🌅', tag: 'rooftop' },
    { id: 'garden-courtyard', label: 'Garden/Courtyard', icon: '🌿', tag: 'courtyard' },
    { id: 'coworking-wifi', label: 'Coworking Wi-Fi', icon: '💻', tag: 'wifi' },
    { id: 'step-free', label: 'Step-Free', icon: '♿', tag: 'step-free', flagKey: 'isWheelchairAccessible' }
  ],
  things: [
    { id: 'photo-spot', label: 'Photo Spot', icon: '📷', tag: 'photo-spot' },
    { id: 'golden-hour', label: 'Golden Hour', icon: '🌅', tag: 'golden-hour' },
    { id: 'surf-break', label: 'Surf Break', icon: '🏄', tag: 'surf' },
    { id: 'trekking', label: 'Trekking', icon: '🥾', tag: 'trekking' },
    { id: 'cultural-heritage', label: 'Cultural Heritage', icon: '🏛️', tag: 'heritage' },
    { id: 'wellness-spa', label: 'Wellness/Spa', icon: '🌿', tag: 'wellness' },
    { id: 'step-free', label: 'Accessible', icon: '♿', tag: 'step-free', flagKey: 'isWheelchairAccessible' }
  ],
  food: [
    { id: 'vegetarian', label: 'Vegetarian/Vegan', icon: '🥗', tag: 'vegetarian', flagKey: 'isVegetarian' },
    { id: 'halal', label: 'Halal Verified', icon: '🌙', tag: 'halal', flagKey: 'isHalal' },
    { id: 'seafood', label: 'Seafood', icon: '🐟', tag: 'seafood' },
    { id: 'fine-dining', label: 'Fine Dining', icon: '✨', tag: 'fine-dining' },
    { id: 'street-food', label: 'Street Food', icon: '🍢', tag: 'street-food' },
    { id: 'traditional-moroccan', label: 'Traditional Moroccan', icon: '🏠', tag: 'traditional' },
    { id: 'rooftop-views', label: 'Rooftop Views', icon: '🌇', tag: 'rooftop' },
    { id: 'kid-friendly', label: 'Kid Friendly', icon: '👶', tag: 'family-friendly', flagKey: 'isKidFriendly' }
  ],
  shopping: [
    { id: 'fixed-price', label: 'Fixed Price', icon: '🏷️', tag: 'fixed-price', flagKey: 'isFixedPrice' },
    { id: 'souk-stalls', label: 'Souk Stalls', icon: '🛍️', tag: 'souk' },
    { id: 'cooperatives', label: 'Cooperatives', icon: '🤝', tag: 'fair-trade' },
    { id: 'artisanal', label: 'Local Crafts', icon: '🎨', tag: 'artisanal' },
    { id: 'live-workshop', label: 'Live Workshop', icon: '🔨', tag: 'live-workshop', flagKey: 'isWorkshop' },
    { id: 'local-favorite', label: 'Local Favorite', icon: '❤️', tag: 'local-favorite', flagKey: 'isLocalFav' }
  ]
};

interface FilterChipBarProps {
  category?: string;
  className?: string;
  resultCounts?: Record<string, number>;
}

// Real-time "Open Now" chip - shown for every category
const OPEN_NOW_CHIP: FilterChipOption = { id: 'open-now', label: 'Open Now', icon: '🕐', tag: 'open-now' };

// All chips (Open Now + category specialties) for a normalized category -
// also used by the results page to compute live per-chip match counts
export const getAllChipsForCategory = (category: string): FilterChipOption[] => {
  const normalizedCategory =
    category === 'eat' || category === 'food' ? 'food' :
    category === 'sleep' ? 'sleep' :
    category === 'shopping' || category === 'shop' ? 'shopping' : 'things';
  return [OPEN_NOW_CHIP, ...(CATEGORY_CHIPS[normalizedCategory] || CATEGORY_CHIPS.things)];
};

export default function FilterChipBar({ category = 'things', className = '', resultCounts }: FilterChipBarProps) {
  const { filters, setFilter } = useExploreStore();
  const { travelMode } = useProfileStore();
  const activeModeConfig = getTravelModeConfig(travelMode);

  const normalizedCategory = 
    category === 'eat' || category === 'food' ? 'food' :
    category === 'sleep' ? 'sleep' :
    category === 'shopping' || category === 'shop' ? 'shopping' : 'things';

  const availableChips = getAllChipsForCategory(normalizedCategory);
  const activeVibes = filters.vibes || [];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const hasMoreRight = el.scrollWidth > el.clientWidth + el.scrollLeft + 6;
    const hasMoreLeft = el.scrollLeft > 6;
    setCanScrollRight(hasMoreRight);
    setCanScrollLeft(hasMoreLeft);
  }, []);

  useEffect(() => {
    checkScrollability();
    const el = scrollContainerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      checkScrollability();
    });
    ro.observe(el);

    window.addEventListener('resize', checkScrollability);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability, availableChips]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    isMouseDownRef.current = true;
    startXRef.current = e.pageX;
    scrollLeftRef.current = el.scrollLeft;
    hasMovedRef.current = false;
  };

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isMouseDownRef.current || !scrollContainerRef.current) return;
      const delta = e.pageX - startXRef.current;
      if (Math.abs(delta) > 4) {
        hasMovedRef.current = true;
        setIsDragging(true);
      }
      scrollContainerRef.current.scrollLeft = scrollLeftRef.current - delta;
      checkScrollability();
    };

    const handleWindowMouseUp = () => {
      if (isMouseDownRef.current) {
        isMouseDownRef.current = false;
        setIsDragging(false);
        setTimeout(() => {
          hasMovedRef.current = false;
        }, 60);
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [checkScrollability]);

  const handleToggleChip = (chip: FilterChipOption) => {
    // Open Now is a real-time flag, not a vibe tag
    if (chip.id === 'open-now') {
      setFilter('isOpenNow', !filters.isOpenNow);
      return;
    }
    const isCurrentlyActive = activeVibes.includes(chip.tag);
    let newVibes: string[];

    if (isCurrentlyActive) {
      newVibes = activeVibes.filter(v => v !== chip.tag);
    } else {
      newVibes = [...activeVibes, chip.tag];
    }

    setFilter('vibes', newVibes);

    // Toggle specific boolean flag if applicable
    if (chip.flagKey) {
      setFilter(chip.flagKey, !isCurrentlyActive);
    }
  };

  const handleChipClick = (chip: FilterChipOption, e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    handleToggleChip(chip);
  };

  const handleClearAll = () => {
    setFilter('isOpenNow', false);
    setFilter('vibes', []);
    setFilter('isVegetarian', false);
    setFilter('isHalal', false);
    setFilter('isWheelchairAccessible', false);
    setFilter('isFixedPrice', false);
    setFilter('isKidFriendly', false);
  };

  const activeCount = availableChips.filter(chip => chip.id === 'open-now' ? !!filters.isOpenNow : activeVibes.includes(chip.tag)).length;

  return (
    <div className={`w-full space-y-2 relative ${className}`}>
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Quick Filters
          </span>
          <span className="text-[9px] text-stone-400 font-medium hidden sm:inline">· 1-Tap Toggles</span>
          {activeCount > 0 && (
            <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-[#C9A84C] text-white">
              {activeCount}
            </span>
          )}
        </div>

        {activeModeConfig && (
          <div 
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white shadow-2xs"
            style={{ backgroundColor: activeModeConfig.color }}
          >
            <Sparkles className="w-3 h-3" />
            <span>Mode Auto-Filters Active</span>
          </div>
        )}

        {activeCount > 0 && (
          <button
            onClick={handleClearAll}
            className="text-[10px] font-bold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors flex items-center gap-1"
          >
            <span>Clear</span>
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Horizontal Scrollable Chips — scrollable via touch on mobile & mouse drag on desktop */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onScroll={checkScrollability}
        onDragStart={(e) => e.preventDefault()}
        className={`flex items-center gap-2 overflow-x-auto no-scrollbar py-1 touch-pan-x overscroll-x-contain select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {availableChips.map((chip) => {
          const isActive = chip.id === 'open-now' ? !!filters.isOpenNow : activeVibes.includes(chip.tag);
          const liveCount = resultCounts ? resultCounts[chip.id] : undefined;

          return (
            <motion.button
              key={chip.id}
              onClick={(e) => handleChipClick(chip, e)}
              whileHover={isDragging ? undefined : { scale: 1.03 }}
              whileTap={isDragging ? undefined : { scale: 0.97 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-[11px] font-bold transition-all duration-200 whitespace-nowrap border ${
                isDragging ? 'pointer-events-none ' : 'cursor-pointer '
              }${
                isActive
                  ? 'bg-stone-900 text-white border-stone-900 dark:bg-[#C9A84C] dark:text-stone-950 dark:border-[#C9A84C] shadow-md'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:border-stone-400'
              }`}
            >
              <span className="text-xs">{chip.icon}</span>
              <span>{chip.label}</span>
              {liveCount !== undefined && (
                <span className={cn("text-[9px] font-black px-1 rounded-full", isActive ? "bg-white/20" : "bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400")}>
                  {liveCount}
                </span>
              )}
              {isActive && <Check className="w-3 h-3 ml-0.5" />}
            </motion.button>
          );
        })}
      </div>

      {/* Small arrow indicator letting user know there are more tags on the right */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => {
            scrollContainerRef.current?.scrollBy({ left: 180, behavior: 'smooth' });
          }}
          aria-label="Scroll right to see more tags"
          title="More tags"
          className="absolute right-0 bottom-2.5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/95 dark:bg-stone-800/95 backdrop-blur-xs text-stone-700 dark:text-stone-200 shadow-md border border-stone-200/90 dark:border-stone-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Small arrow indicator on the left when scrolled */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => {
            scrollContainerRef.current?.scrollBy({ left: -180, behavior: 'smooth' });
          }}
          aria-label="Scroll left to see previous tags"
          title="Previous tags"
          className="absolute left-0 bottom-2.5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/95 dark:bg-stone-800/95 backdrop-blur-xs text-stone-700 dark:text-stone-200 shadow-md border border-stone-200/90 dark:border-stone-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
