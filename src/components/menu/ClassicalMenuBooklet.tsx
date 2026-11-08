import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import ClassicalDishRow from './ClassicalDishRow';
import type { MenuSection } from '../../listings/types';
import type { MoroccanDishGlossaryEntry } from '../../data/culinaryGlossary';

/* ─────────────── Ornamental SVG decorations ─────────────── */

/** Tiny corner flourish for the vintage double-frame */
const CornerFlourish = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 30 C2 14 14 2 30 2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M6 30 C6 18 18 6 30 6"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

/** Horizontal ornamental divider between header and dishes */
const OrnamentalDivider = () => (
  <div className="flex items-center gap-3 py-2" aria-hidden="true">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-400/60 to-transparent" />
    <svg viewBox="0 0 20 8" className="w-5 h-2 text-stone-500/70" fill="currentColor">
      <path d="M10 0 L13 4 L10 8 L7 4 Z" />
      <circle cx="3" cy="4" r="1.2" />
      <circle cx="17" cy="4" r="1.2" />
    </svg>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-400/60 to-transparent" />
  </div>
);

/* ─────────────── Types ─────────────── */

interface ClassicalMenuBookletProps {
  sections: MenuSection[];
  restaurantName: string;
  restaurantId: string;
  city: string;
  highlightedDishes?: string[];
  onOpenGlossary: (entry: MoroccanDishGlossaryEntry) => void;
}

/* ─────────────── Component ─────────────── */

export default function ClassicalMenuBooklet({
  sections,
  restaurantName,
  restaurantId,
  city,
  highlightedDishes = [],
  onOpenGlossary,
}: ClassicalMenuBookletProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect desktop
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Dismiss swipe hint after 4 seconds or on first interaction
  useEffect(() => {
    const t = setTimeout(() => setShowSwipeHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const validSections = useMemo(
    () => sections.filter((s) => s.items && s.items.length > 0),
    [sections],
  );

  const totalPages = validSections.length;
  const pageSize = isDesktop ? 2 : 1;
  const maxPageIndex = Math.max(0, totalPages - pageSize);

  const handlePrev = useCallback(() => {
    setCurrentPage((p) => Math.max(0, p - pageSize));
    setShowSwipeHint(false);
  }, [pageSize]);

  const handleNext = useCallback(() => {
    setCurrentPage((p) => Math.min(maxPageIndex, p + pageSize));
    setShowSwipeHint(false);
  }, [maxPageIndex, pageSize]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlePrev, handleNext]);

  const leftSection = validSections[currentPage];
  const rightSection =
    isDesktop && currentPage + 1 < totalPages ? validSections[currentPage + 1] : null;

  if (validSections.length === 0) return null;

  /* ── Render a single page panel ── */
  const renderPage = (section: MenuSection, pageNumber: number, side: 'left' | 'right') => (
    <div
      className={`relative flex flex-col justify-between ${
        side === 'left'
          ? 'border-b lg:border-b-0 lg:border-r border-[#C9B99A]/40'
          : ''
      }`}
      style={{
        /* Slight inner shadow to mimic page gutter lighting difference */
        boxShadow:
          side === 'left'
            ? 'inset -12px 0 18px -12px rgba(0,0,0,0.06)'
            : 'inset 12px 0 18px -12px rgba(0,0,0,0.06)',
      }}
    >
      {/* ── Inner double-frame with corner flourishes ── */}
      <div className="absolute inset-4 sm:inset-5 border border-[#C9B99A]/50 pointer-events-none" aria-hidden="true">
        {/* Second inner line */}
        <div className="absolute inset-[3px] border border-[#C9B99A]/25" />
        {/* Corner flourishes */}
        <CornerFlourish className="absolute -top-0.5 -left-0.5 w-5 h-5 text-[#B8A080] rotate-0" />
        <CornerFlourish className="absolute -top-0.5 -right-0.5 w-5 h-5 text-[#B8A080] rotate-90" />
        <CornerFlourish className="absolute -bottom-0.5 -right-0.5 w-5 h-5 text-[#B8A080] rotate-180" />
        <CornerFlourish className="absolute -bottom-0.5 -left-0.5 w-5 h-5 text-[#B8A080] -rotate-90" />
      </div>

      {/* ── Content area ── */}
      <div className="relative z-10 px-8 sm:px-10 pt-8 sm:pt-10 pb-4">
        {/* Page header */}
        <div className="text-center mb-3">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#A0917B] uppercase block mb-2.5">
            ❧ {restaurantName} ❧
          </span>
          <h3
            className="font-serif text-lg sm:text-xl font-extrabold text-[#3D2B1F] uppercase tracking-wider leading-tight"
            style={{ fontVariant: 'small-caps' }}
          >
            {section.title}
          </h3>
          {section.description && (
            <p className="text-[10px] sm:text-[11px] font-serif italic text-[#8B7D6B] mt-1 max-w-xs mx-auto leading-relaxed">
              {section.description}
            </p>
          )}
        </div>

        <OrnamentalDivider />

        {/* Dish rows */}
        <div className="space-y-0.5">
          {section.items.map((dish) => (
            <ClassicalDishRow
              key={dish.id}
              dish={dish}
              placeId={restaurantId}
              placeName={restaurantName}
              city={city}
              highlightedDishes={highlightedDishes}
              onOpenGlossary={onOpenGlossary}
            />
          ))}
        </div>
      </div>

      {/* Page number at bottom */}
      <div className="relative z-10 pb-5 text-center">
        <span className="text-[10px] font-serif italic text-[#A0917B] tracking-wider">
          — {pageNumber} —
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-3 select-none" ref={containerRef}>
      {/* ── Category Bookmark Index ── */}
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
                setShowSwipeHint(false);
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

      {/* ── The Physical Book ── */}
      <div className="relative">
        {/* Stacked-pages underneath effect (3D depth illusion) */}
        <div
          className="absolute -bottom-1.5 left-2 right-2 h-3 rounded-b-lg bg-[#E8DFD0] border border-t-0 border-[#C9B99A]/30"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-3 left-4 right-4 h-3 rounded-b-lg bg-[#DDD4C5] border border-t-0 border-[#C9B99A]/20"
          aria-hidden="true"
        />

        {/* Main book body */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            boxShadow:
              '0 4px 6px -1px rgba(60,40,20,0.12), 0 12px 30px -4px rgba(60,40,20,0.18), 0 1px 3px rgba(60,40,20,0.08), inset 0 1px 0 rgba(255,255,255,0.3)',
            border: '1px solid #C9B99A',
          }}
        >
          {/* Leather-like top & bottom edge strip */}
          <div className="h-1.5 bg-gradient-to-b from-[#8B6F4E] via-[#A08060] to-[#C9B99A]/40" aria-hidden="true" />

          {/* Paper grain texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply z-30"
            style={{
              backgroundImage: "url('/textures/paper-grain.svg')",
              backgroundRepeat: 'repeat',
            }}
            aria-hidden="true"
          />

          {/* Animated page content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50 && currentPage < maxPageIndex) handleNext();
                else if (info.offset.x > 50 && currentPage > 0) handlePrev();
              }}
              className="grid grid-cols-1 lg:grid-cols-2 relative z-10 min-h-[540px] cursor-grab active:cursor-grabbing"
              style={{ background: 'linear-gradient(135deg, #FAF6EF 0%, #F5EFE4 40%, #F0E8DA 100%)' }}
            >
              {/* Left page */}
              {leftSection && renderPage(leftSection, currentPage + 1, 'left')}

              {/* Central spine fold shadow (Desktop) */}
              <div
                className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 pointer-events-none z-20"
                style={{
                  background:
                    'linear-gradient(to right, transparent 5%, rgba(80,60,30,0.08) 20%, rgba(80,60,30,0.12) 40%, rgba(0,0,0,0.04) 50%, rgba(80,60,30,0.12) 60%, rgba(80,60,30,0.08) 80%, transparent 95%)',
                }}
                aria-hidden="true"
              />

              {/* Right page */}
              {rightSection ? (
                renderPage(rightSection, currentPage + 2, 'right')
              ) : isDesktop ? (
                /* Decorative closing page */
                <div className="relative flex flex-col items-center justify-center text-center p-10">
                  {/* Inner frame */}
                  <div className="absolute inset-5 border border-[#C9B99A]/40 pointer-events-none" aria-hidden="true">
                    <div className="absolute inset-[3px] border border-[#C9B99A]/20" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="text-3xl text-[#B8A080]">❦</div>
                    <h4 className="font-serif text-xl font-bold text-[#3D2B1F] italic">
                      Bon Appétit
                    </h4>
                    <p className="text-xs font-serif italic text-[#8B7D6B] max-w-[200px] mx-auto leading-relaxed">
                      Prices verified in Moroccan Dirhams. Tap (+) to build your tasting selection.
                    </p>
                    <span className="block text-[10px] font-serif text-[#A0917B] tracking-widest">
                      — Fin du Menu —
                    </span>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          {/* Leather-like bottom edge strip */}
          <div className="h-1.5 bg-gradient-to-t from-[#8B6F4E] via-[#A08060] to-[#C9B99A]/40" aria-hidden="true" />

          {/* ── Swipe Hint Overlay (appears on first load) ── */}
          <AnimatePresence>
            {showSwipeHint && currentPage === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
              >
                {/* Dark scrim */}
                <div className="absolute inset-0 bg-black/25 rounded-sm" />
                {/* Animated hand + swipe indicator */}
                <motion.div
                  className="relative flex flex-col items-center gap-3"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: [40, -40, 0], opacity: [0, 1, 1] }}
                  transition={{ duration: 1.8, ease: 'easeInOut', times: [0, 0.6, 1] }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/50 flex items-center gap-3">
                    <motion.div
                      animate={{ x: [0, -12, 0] }}
                      transition={{ repeat: 2, duration: 0.8, ease: 'easeInOut' }}
                    >
                      <ChevronLeft className="w-5 h-5 text-[#8B6F4E]" />
                    </motion.div>
                    <span className="text-sm font-serif font-bold text-[#3D2B1F]">
                      Swipe to turn pages
                    </span>
                    <motion.div
                      animate={{ x: [0, 12, 0] }}
                      transition={{ repeat: 2, duration: 0.8, ease: 'easeInOut' }}
                    >
                      <ChevronRight className="w-5 h-5 text-[#8B6F4E]" />
                    </motion.div>
                  </div>
                  <span className="text-[11px] text-white/90 font-medium">
                    or use ◄ ► arrow keys
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation Controls ── */}
      <div className="flex items-center justify-between px-1 pt-1">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer ${
            currentPage === 0
              ? 'opacity-30 cursor-not-allowed text-stone-400'
              : 'bg-[#FAF6EF] hover:bg-[#F0E8DA] text-[#3D2B1F] border border-[#C9B99A]/60 shadow-xs hover:shadow-sm'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Précédent</span>
        </button>

        <div className="text-center">
          <span className="text-xs font-serif font-bold text-[#6B5D4F]">
            {isDesktop
              ? `Pages ${currentPage + 1}–${Math.min(totalPages, currentPage + 2)} of ${totalPages}`
              : `Page ${currentPage + 1} of ${totalPages}`}
          </span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage >= maxPageIndex}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer ${
            currentPage >= maxPageIndex
              ? 'opacity-30 cursor-not-allowed text-stone-400'
              : 'bg-[#FAF6EF] hover:bg-[#F0E8DA] text-[#3D2B1F] border border-[#C9B99A]/60 shadow-xs hover:shadow-sm'
          }`}
        >
          <span>Suivant</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
