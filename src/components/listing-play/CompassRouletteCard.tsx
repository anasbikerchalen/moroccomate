import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Eye, ArrowRight, Star, MapPin, RotateCw } from 'lucide-react';
import { cn } from '../../utils/cn';
import { LocalizedLink } from '../ui/LocalizedLink';
import { useAppLanguage } from '../../utils/localeRouting';
import { getPlaceUiCopy } from '../../data/placeUiI18n';
import {
  getDeckPlaceBySlug,
  pickCompassSuggestion,
  type DeckPlaceItem,
} from '../../utils/listingDeckEngine';
import {
  usePassportStore,
  type ListingPlayCategory,
} from '../../state/passportStore';
import {
  playTactileSound,
  prefersReducedMotion,
  spawnSaffronSparks,
} from '../../utils/playfulFeedback';

interface CompassRouletteCardProps {
  cityKey: string;
  cityLabel: string;
  currentCategory: ListingPlayCategory;
  currentSlug: string;
  onQuickPeek: (place: DeckPlaceItem) => void;
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

export const CompassRouletteCard: React.FC<CompassRouletteCardProps> = ({
  cityKey,
  cityLabel,
  currentCategory,
  currentSlug,
  onQuickPeek,
  sectionRef,
}) => {
  const lang = useAppLanguage();
  const ui = getPlaceUiCopy(lang);
  const filterTabs: Array<{ id: 'all' | ListingPlayCategory; label: string }> = [
    { id: 'all', label: ui.play.tabAll },
    { id: 'food', label: ui.play.tabFood },
    { id: 'sleep', label: ui.play.tabSleep },
    { id: 'things', label: ui.play.tabThings },
    { id: 'shopping', label: ui.play.tabShopping },
  ];

  const entries = usePassportStore((s) => s.entries);
  const visitedKeys = useMemo(() => new Set(Object.keys(entries)), [entries]);

  const [filterCat, setFilterCat] = useState<'all' | ListingPlayCategory>('all');
  const [needleAngle, setNeedleAngle] = useState<number>(36);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<DeckPlaceItem | null>(() =>
    pickCompassSuggestion({
      cityKey,
      filterCategory: 'all',
      excludeSlug: currentSlug,
      excludeCategory: currentCategory,
      visitedKeys,
      lang,
    })
  );

  // Re-localize active suggestion immediately when route language changes
  useEffect(() => {
    if (!suggestion) return;
    const relocalized = getDeckPlaceBySlug(cityKey, suggestion.category, suggestion.slug, lang);
    if (relocalized) {
      setSuggestion(relocalized);
    }
  }, [lang, cityKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const dialRef = useRef<HTMLButtonElement | null>(null);

  const spinCompass = useCallback(
    (nextFilter: 'all' | ListingPlayCategory = filterCat, withBurst = true) => {
      const picked = pickCompassSuggestion({
        cityKey,
        filterCategory: nextFilter,
        excludeSlug: currentSlug,
        excludeCategory: currentCategory,
        lastPickedSlug: suggestion?.slug,
        visitedKeys,
        lang,
      });

      const spinDelta = prefersReducedMotion()
        ? 0
        : 540 + Math.floor(Math.random() * 480);

      setIsSpinning(true);
      setNeedleAngle((prev) => prev + spinDelta);
      playTactileSound('compass');

      if (withBurst && dialRef.current) {
        spawnSaffronSparks(dialRef.current, 10);
      }

      const revealDelay = prefersReducedMotion() ? 20 : 280;
      window.setTimeout(() => {
        setSuggestion(picked);
        setIsSpinning(false);
      }, revealDelay);
    },
    [cityKey, currentCategory, currentSlug, filterCat, suggestion?.slug, visitedKeys, lang]
  );

  const handleSelectFilter = (cat: 'all' | ListingPlayCategory) => {
    setFilterCat(cat);
    spinCompass(cat, false);
  };

  if (!suggestion) {
    return null;
  }

  return (
    <div
      ref={sectionRef}
      id="compass-roulette-hub"
      className="rounded-3xl bg-gradient-to-br from-[#FFFDF8] via-[#FAF3E6] to-[#F3E7D2] border border-[#E5D5BA] p-5 sm:p-6 shadow-xs overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left: Interactive Brass Compass Dial */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 text-center sm:text-left lg:text-center xl:text-left">
          <button
            ref={dialRef}
            type="button"
            onClick={() => spinCompass(filterCat, true)}
            aria-label={ui.play.spinCompassAria(cityLabel)}
            className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#173042] to-[#0E202E] border-4 border-[#C9A84C] shadow-md flex items-center justify-center shrink-0 cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A32] active:scale-95 transition-transform"
          >
            {/* Outer compass ring ticks */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#C9A84C"
                strokeOpacity="0.35"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <text x="50" y="15" textAnchor="middle" fill="#F5D782" fontSize="8" fontWeight="700">
                N
              </text>
              <text x="50" y="91" textAnchor="middle" fill="#C9A84C" fontSize="7" fontWeight="700">
                S
              </text>
              <text x="88" y="53" textAnchor="middle" fill="#C9A84C" fontSize="7" fontWeight="700">
                E
              </text>
              <text x="12" y="53" textAnchor="middle" fill="#C9A84C" fontSize="7" fontWeight="700">
                W
              </text>
            </svg>

            {/* Animated Needle */}
            <motion.div
              animate={{ rotate: needleAngle }}
              transition={
                prefersReducedMotion()
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 90, damping: 12, mass: 0.9 }
              }
              className="relative w-14 h-14 flex items-center justify-center pointer-events-none"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* North (terracotta) pointer */}
                <polygon points="20,3 24,20 16,20" fill="#C85A32" />
                {/* South (gold) pointer */}
                <polygon points="20,37 24,20 16,20" fill="#F5D782" />
                <circle cx="20" cy="20" r="3.2" fill="#FFFDF8" stroke="#C9A84C" strokeWidth="1.2" />
              </svg>
            </motion.div>
          </button>

          <div className="space-y-2 min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#9A4722] flex items-center justify-center sm:justify-start lg:justify-center xl:justify-start gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>{ui.play.medinaCompass}</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#142333] leading-snug">
              {ui.play.whereNextIn(cityLabel)}
            </h3>
            <p className="text-xs text-[#5E5448] leading-relaxed max-w-xs">
              {ui.play.compassDesc}
            </p>
            <button
              type="button"
              onClick={() => spinCompass(filterCat, true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#173042] hover:bg-[#0E202E] text-white text-xs font-bold shadow-2xs transition-all cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <RotateCw className={cn('w-3.5 h-3.5 text-[#F5D782]', isSpinning && 'animate-spin')} />
              <span>{ui.play.spinCompass}</span>
            </button>
          </div>
        </div>

        {/* Right: Category Tabs + Revealed Destination Card */}
        <div className="lg:col-span-7 space-y-3">
          {/* Category switcher */}
          <div className="flex flex-wrap items-center gap-1.5">
            {filterTabs.map((tab) => {
              const active = filterCat === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectFilter(tab.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0',
                    active
                      ? 'bg-[#C85A32] text-white shadow-2xs'
                      : 'bg-white/85 hover:bg-white text-[#3F372E] border border-[#E5D5BA]'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Destination Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${suggestion.category}:${suggestion.slug}`}
              initial={prefersReducedMotion() ? false : { opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion() ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white border border-[#E5D5BA] p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="min-w-0 space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#9A4722] font-semibold">
                  <span>{suggestion.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{suggestion.reasonTag}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#142333] truncate">
                  {suggestion.name}
                </h4>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#5E5448]">
                  {suggestion.neighborhood && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C85A32]" />
                      <span>{suggestion.neighborhood}</span>
                    </span>
                  )}
                  {suggestion.rating && (
                    <>
                      {suggestion.neighborhood && <span aria-hidden="true">·</span>}
                      <span className="inline-flex items-center gap-1 font-bold text-[#142333] tabular-nums">
                        <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" />
                        {suggestion.rating.toFixed(1)}
                      </span>
                    </>
                  )}
                  {suggestion.priceLabel && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-[#1F4B34]">
                        {suggestion.priceLabel}
                      </span>
                    </>
                  )}
                </div>
                {suggestion.description && (
                  <p className="text-xs text-[#6B6156] line-clamp-2 pt-0.5 leading-relaxed">
                    {suggestion.description}
                  </p>
                )}
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    playTactileSound('tick');
                    onQuickPeek(suggestion);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF8F4] hover:bg-[#F3ECE2] text-[#173042] border border-[#E5D5BA] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap w-full sm:w-auto"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{ui.play.quickPeekBtn}</span>
                </button>
                <LocalizedLink
                  to={suggestion.url}
                  onClick={() => playTactileSound('tick')}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B24B26] text-white text-xs font-bold shadow-2xs transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  <span>{ui.play.goThere}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </LocalizedLink>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CompassRouletteCard;
