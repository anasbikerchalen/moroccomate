import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Bookmark, Sparkles } from 'lucide-react';
import ClassicalDishRow from './ClassicalDishRow';
import type { MenuSection } from '../../listings/types';
import type { MoroccanDishGlossaryEntry } from '../../data/culinaryGlossary';

interface ClassicalMenuBookletProps {
  sections: MenuSection[];
  restaurantName: string;
  restaurantId: string;
  city: string;
  onOpenGlossary: (entry: MoroccanDishGlossaryEntry) => void;
}

export default function ClassicalMenuBooklet({
  sections,
  restaurantName,
  restaurantId,
  city,
  onOpenGlossary,
}: ClassicalMenuBookletProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect desktop screen width for 2-page spread
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Filter out any sections that have no items
  const validSections = useMemo(() => {
    return sections.filter((s) => s.items && s.items.length > 0);
  }, [sections]);

  const totalPages = validSections.length;
  const pageSize = isDesktop ? 2 : 1;
  const maxPageIndex = Math.max(0, totalPages - pageSize);

  // Jump to next or previous spread
  const handlePrev = () => {
    setCurrentPage((p) => Math.max(0, p - pageSize));
  };

  const handleNext = () => {
    setCurrentPage((p) => Math.min(maxPageIndex, p + pageSize));
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxPageIndex, pageSize]);

  // Which sections to display on the current spread
  const leftSection = validSections[currentPage];
  const rightSection = isDesktop && currentPage + 1 < totalPages ? validSections[currentPage + 1] : null;

  if (validSections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 select-none" ref={containerRef}>
      {/* Category Bookmark Ribbon Tabs (Quick Jump) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none pt-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1 mr-1 shrink-0">
          <Bookmark className="w-3 h-3 text-[#C2613C]" />
          <span>Index:</span>
        </span>
        {validSections.map((sec, idx) => {
          const isActive = isDesktop
            ? idx === currentPage || idx === currentPage + 1
            : idx === currentPage;
          return (
            <button
              key={sec.id}
              onClick={() => {
                const target = isDesktop ? Math.floor(idx / 2) * 2 : idx;
                setCurrentPage(Math.min(maxPageIndex, target));
              }}
              className={`px-3 py-1 rounded-md text-xs font-serif font-bold shrink-0 transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#C2613C] text-white border-[#C2613C] shadow-2xs'
                  : 'bg-[#FAF6EF] text-stone-700 border-stone-300/80 hover:border-[#C2613C]/50 hover:bg-[#F5EFEB]'
              }`}
            >
              {sec.title.split('(')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* The Physical Paper Book Spread */}
      <div className="relative rounded-2xl shadow-md border border-stone-300/80 bg-[#FAF6EF] overflow-hidden">
        {/* Real Paper Texture Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: "url('/textures/paper-grain.svg')",
            backgroundRepeat: 'repeat',
          }}
          aria-hidden="true"
        />

        {/* Vintage Outer Edge Line Accent */}
        <div className="absolute inset-2 border border-stone-300/50 pointer-events-none rounded-xl" aria-hidden="true" />

        {/* Animated Page Spread Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -40 && currentPage < maxPageIndex) {
                handleNext();
              } else if (info.offset.x > 40 && currentPage > 0) {
                handlePrev();
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 relative z-10 min-h-[520px]"
          >
            {/* Left Page (or Single Page on Mobile) */}
            {leftSection && (
              <div className="p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/70 relative">
                <div>
                  {/* Page Header */}
                  <div className="text-center pb-4 mb-4 border-b border-stone-300/60">
                    <span className="text-[10px] font-mono tracking-widest text-stone-600 uppercase block mb-1">
                      {restaurantName} • Page {currentPage + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-900 uppercase tracking-wide">
                      {leftSection.title}
                    </h3>
                    {leftSection.description && (
                      <p className="text-xs font-serif italic text-stone-600 mt-1 max-w-sm mx-auto">
                        {leftSection.description}
                      </p>
                    )}
                  </div>

                  {/* Dish Rows */}
                  <div className="divide-y-0 space-y-1">
                    {leftSection.items.map((dish) => (
                      <ClassicalDishRow
                        key={dish.id}
                        dish={dish}
                        placeId={restaurantId}
                        placeName={restaurantName}
                        city={city}
                        onOpenGlossary={onOpenGlossary}
                      />
                    ))}
                  </div>
                </div>

                {/* Left Page Footer Indicator */}
                <div className="pt-4 text-center">
                  <span className="text-[10px] font-mono font-bold text-stone-600 tracking-wider">
                    — {currentPage + 1} —
                  </span>
                </div>
              </div>
            )}

            {/* Central Book Spine Crease & Shadow (Desktop only) */}
            <div
              className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.06), rgba(0,0,0,0.01) 30%, transparent 50%, rgba(0,0,0,0.01) 70%, rgba(0,0,0,0.06))',
              }}
              aria-hidden="true"
            />

            {/* Right Page (Desktop only) */}
            {rightSection ? (
              <div className="p-6 sm:p-8 flex flex-col justify-between relative bg-[#FAF6EF]">
                <div>
                  {/* Page Header */}
                  <div className="text-center pb-4 mb-4 border-b border-stone-300/60">
                    <span className="text-[10px] font-mono tracking-widest text-stone-600 uppercase block mb-1">
                      {restaurantName} • Page {currentPage + 2}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-900 uppercase tracking-wide">
                      {rightSection.title}
                    </h3>
                    {rightSection.description && (
                      <p className="text-xs font-serif italic text-stone-600 mt-1 max-w-sm mx-auto">
                        {rightSection.description}
                      </p>
                    )}
                  </div>

                  {/* Dish Rows */}
                  <div className="divide-y-0 space-y-1">
                    {rightSection.items.map((dish) => (
                      <ClassicalDishRow
                        key={dish.id}
                        dish={dish}
                        placeId={restaurantId}
                        placeName={restaurantName}
                        city={city}
                        onOpenGlossary={onOpenGlossary}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Page Footer Indicator */}
                <div className="pt-4 text-center">
                  <span className="text-[10px] font-mono font-bold text-stone-600 tracking-wider">
                    — {currentPage + 2} —
                  </span>
                </div>
              </div>
            ) : isDesktop ? (
              /* Blank Decorative Closing Page when total is odd */
              <div className="p-8 flex flex-col items-center justify-center text-center space-y-3 relative bg-[#FAF6EF]">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-600">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-800">
                  Bon Appétit
                </h4>
                <p className="text-xs font-serif italic text-stone-600 max-w-xs">
                  All selections freshly prepared to order with verified authentic Dirham pricing.
                </p>
                <span className="text-[10px] font-mono text-stone-600">
                  — Fin du Menu —
                </span>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Booklet Navigation Controls & Page Counter */}
      <div className="flex items-center justify-between px-2 pt-1">
        {/* Previous Page Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer ${
            currentPage === 0
              ? 'opacity-30 cursor-not-allowed text-stone-400'
              : 'bg-[#FAF6EF] hover:bg-[#F5EFEB] text-stone-800 border border-stone-300/80 shadow-2xs hover:shadow-xs'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédent</span>
        </button>

        {/* Page Spread Indicator */}
        <div className="text-center">
          <span className="text-xs font-mono font-bold text-stone-600">
            {isDesktop
              ? `Pages ${currentPage + 1}–${Math.min(totalPages, currentPage + 2)} of ${totalPages}`
              : `Page ${currentPage + 1} of ${totalPages}`}
          </span>
          <span className="hidden sm:inline text-[10px] text-stone-600 block">
            Swipe or use ◄ ► arrow keys
          </span>
        </div>

        {/* Next Page Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage >= maxPageIndex}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer ${
            currentPage >= maxPageIndex
              ? 'opacity-30 cursor-not-allowed text-stone-400'
              : 'bg-[#FAF6EF] hover:bg-[#F5EFEB] text-stone-800 border border-stone-300/80 shadow-2xs hover:shadow-xs'
          }`}
        >
          <span>Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
