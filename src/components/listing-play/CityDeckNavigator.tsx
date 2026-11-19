import React, { useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, BookOpen, Eye } from 'lucide-react';
import { LocalizedLink } from '../ui/LocalizedLink';
import { useLangPath } from '../../utils/localeRouting';
import {
  getDeckNeighbors,
  type DeckPlaceItem,
} from '../../utils/listingDeckEngine';
import type { ListingPlayCategory } from '../../state/passportStore';
import { playTactileSound, prefersReducedMotion } from '../../utils/playfulFeedback';

interface CityDeckNavigatorProps {
  cityKey: string;
  cityLabel: string;
  category: ListingPlayCategory;
  categoryLabel: string;
  currentSlug: string;
  onQuickPeek?: (place: DeckPlaceItem) => void;
}

/**
 * Booklet-style Prev / Next city deck bar with horizontal swipe gesture
 * and keyboard arrow shortcuts (Alt+ArrowLeft / Alt+ArrowRight).
 */
export const CityDeckNavigator: React.FC<CityDeckNavigatorProps> = ({
  cityKey,
  cityLabel,
  category,
  categoryLabel,
  currentSlug,
  onQuickPeek,
}) => {
  const { navigateLang } = useLangPath();

  const deck = useMemo(
    () => getDeckNeighbors(cityKey, category, currentSlug),
    [cityKey, category, currentSlug]
  );

  // Keyboard deck flip (Alt + Left / Right arrows)
  useEffect(() => {
    if (!deck.prev && !deck.next) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key === 'ArrowLeft' && deck.prev) {
        e.preventDefault();
        playTactileSound('tick');
        navigateLang(deck.prev.url);
      } else if (e.key === 'ArrowRight' && deck.next) {
        e.preventDefault();
        playTactileSound('tick');
        navigateLang(deck.next.url);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [deck.prev, deck.next, navigateLang]);

  if (deck.total < 2 || (!deck.prev && !deck.next)) {
    return null;
  }

  return (
    <motion.div
      drag={prefersReducedMotion() ? false : 'x'}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      onDragEnd={(_, info) => {
        if (info.offset.x > 75 && deck.prev) {
          playTactileSound('tick');
          navigateLang(deck.prev.url);
        } else if (info.offset.x < -75 && deck.next) {
          playTactileSound('tick');
          navigateLang(deck.next.url);
        }
      }}
      className="rounded-2xl bg-white border border-[#E5D9C5] p-3.5 sm:p-4 shadow-2xs select-none cursor-grab active:cursor-grabbing"
    >
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Previous Place */}
        {deck.prev ? (
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <LocalizedLink
              to={deck.prev.url}
              onClick={() => playTactileSound('tick')}
              className="flex-1 min-w-0 flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#F3ECE2] border border-[#EAE2D5] hover:border-[#C9A84C] transition-all group"
            >
              <span className="w-8 h-8 rounded-lg bg-white border border-[#E5D9C5] flex items-center justify-center shrink-0 text-[#173042] group-hover:-translate-x-0.5 transition-transform">
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B6156]">
                  Previous
                </span>
                <span className="block text-xs sm:text-sm font-serif font-bold text-[#142333] group-hover:text-[#C85A32] truncate">
                  {deck.prev.name}
                </span>
              </span>
            </LocalizedLink>
            {onQuickPeek && (
              <button
                type="button"
                onClick={() => {
                  playTactileSound('tick');
                  onQuickPeek(deck.prev!);
                }}
                title={`Quick peek ${deck.prev.name}`}
                aria-label={`Quick peek ${deck.prev.name}`}
                className="p-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#173042] text-[#5E5448] hover:text-white border border-[#EAE2D5] transition-colors cursor-pointer shrink-0"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          <div className="flex-1" />
        )}

        {/* Center Deck Indicator */}
        <div className="flex sm:flex-col items-center justify-center gap-1.5 px-2 text-center shrink-0">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#173042] tabular-nums">
            <BookOpen className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>
              {deck.index + 1} of {deck.total}
            </span>
          </span>
          <span className="text-[10px] text-[#6B6156] whitespace-nowrap">
            {categoryLabel} · {cityLabel}
          </span>
          <span className="hidden md:inline text-[10px] text-[#8E8274]">
            Swipe or Alt + ← / →
          </span>
        </div>

        {/* Next Place */}
        {deck.next ? (
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {onQuickPeek && (
              <button
                type="button"
                onClick={() => {
                  playTactileSound('tick');
                  onQuickPeek(deck.next!);
                }}
                title={`Quick peek ${deck.next.name}`}
                aria-label={`Quick peek ${deck.next.name}`}
                className="p-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#173042] text-[#5E5448] hover:text-white border border-[#EAE2D5] transition-colors cursor-pointer shrink-0"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
            <LocalizedLink
              to={deck.next.url}
              onClick={() => playTactileSound('tick')}
              className="flex-1 min-w-0 flex items-center justify-end gap-2.5 p-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#F3ECE2] border border-[#EAE2D5] hover:border-[#C9A84C] transition-all group text-right"
            >
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B6156]">
                  Next Gem
                </span>
                <span className="block text-xs sm:text-sm font-serif font-bold text-[#142333] group-hover:text-[#C85A32] truncate">
                  {deck.next.name}
                </span>
              </span>
              <span className="w-8 h-8 rounded-lg bg-white border border-[#E5D9C5] flex items-center justify-center shrink-0 text-[#173042] group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </span>
            </LocalizedLink>
          </div>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </motion.div>
  );
};

export default CityDeckNavigator;
