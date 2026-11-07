import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Search, X, Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { SearchIntent } from '../../data/seo/searchIntents';

interface PeopleSearchForBarProps {
  popularIntents: SearchIntent[];
  activeFeatureSlug: string | null;
  onSelectIntent: (slug: string | null) => void;
  className?: string;
}

export default function PeopleSearchForBar({
  popularIntents,
  activeFeatureSlug,
  onSelectIntent,
  className = ''
}: PeopleSearchForBarProps) {
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
  }, [checkScrollability, popularIntents]);

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

  const handleClickIntent = (slug: string, e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onSelectIntent(slug);
  };

  if (!popularIntents || popularIntents.length === 0) return null;

  return (
    <div className={`w-full relative mb-4 bg-white/85 dark:bg-stone-900/80 backdrop-blur-xs p-2.5 rounded-2xl border border-[#E7DFD3] dark:border-stone-800 shadow-2xs ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <div className="flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-[#C2613C]" />
          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 dark:text-stone-400">
            People Also Search For:
          </span>
          {activeFeatureSlug && (
            <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-[#C2613C] text-white">
              1 Active
            </span>
          )}
        </div>
        {activeFeatureSlug && (
          <button
            type="button"
            onClick={() => onSelectIntent(null)}
            className="text-[10px] font-bold text-stone-400 hover:text-[#C2613C] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Show All</span>
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Horizontal scrollable tags with touch & mouse drag */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onScroll={checkScrollability}
        onDragStart={(e) => e.preventDefault()}
        className={`flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 select-none touch-pan-x overscroll-x-contain ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {popularIntents.map((intent) => {
          const isSelected = activeFeatureSlug === intent.slug;
          return (
            <button
              key={intent.slug}
              type="button"
              onClick={(e) => handleClickIntent(intent.slug, e)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border",
                isDragging ? "pointer-events-none " : "cursor-pointer ",
                isSelected
                  ? "bg-[#C2613C] text-white border-[#C2613C] shadow-xs"
                  : "bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-[#E5DDD0] dark:border-stone-700 hover:border-[#C2613C] hover:bg-[#FAF3EA] dark:hover:bg-stone-700"
              )}
            >
              <span>{intent.icon}</span>
              <span>{intent.label}</span>
              {isSelected && <Check className="w-3 h-3 ml-0.5" />}
            </button>
          );
        })}
      </div>

      {/* Small arrow indicator on the right indicating more tags available */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => {
            scrollContainerRef.current?.scrollBy({ left: 180, behavior: 'smooth' });
          }}
          aria-label="More search topics on the right"
          title="More search topics"
          className="absolute right-1 bottom-3 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/95 dark:bg-stone-800/95 backdrop-blur-xs text-stone-700 dark:text-stone-200 shadow-md border border-stone-200/90 dark:border-stone-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
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
          aria-label="Previous search topics on the left"
          title="Previous search topics"
          className="absolute left-1 bottom-3 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/95 dark:bg-stone-800/95 backdrop-blur-xs text-stone-700 dark:text-stone-200 shadow-md border border-stone-200/90 dark:border-stone-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
