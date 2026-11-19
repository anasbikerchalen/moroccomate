import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  MapPin,
  Star,
  Heart,
  ArrowRight,
  Compass,
  Lightbulb,
  ExternalLink,
  Stamp,
  RefreshCw,
} from 'lucide-react';
import { LocalizedLink } from '../ui/LocalizedLink';
import { cn } from '../../utils/cn';
import type { DeckPlaceItem } from '../../utils/listingDeckEngine';
import { useSavedStore } from '../../state/savedStore';
import { buildPassportKey, usePassportStore } from '../../state/passportStore';
import { playTactileSound, spawnSaffronSparks } from '../../utils/playfulFeedback';

interface QuickPeekDrawerProps {
  place: DeckPlaceItem | null;
  onClose: () => void;
  onSpinAnother?: () => void;
}

export const QuickPeekDrawer: React.FC<QuickPeekDrawerProps> = ({
  place,
  onClose,
  onSpinAnother,
}) => {
  const { toggleBookmark, isBookmarked } = useSavedStore();
  const entries = usePassportStore((s) => s.entries);

  useEffect(() => {
    if (!place) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [place, onClose]);

  const saved = place ? isBookmarked(place.id) : false;
  const passportKey = place
    ? buildPassportKey(place.category, place.city, place.slug)
    : '';
  const isStamped = Boolean(passportKey && entries[passportKey]?.stamped);

  return (
    <AnimatePresence>
      {place && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-peek-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#173042]/45 backdrop-blur-[2px]"
          />

          {/* Sheet / Card */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            className="relative z-10 w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-[#FAF8F4] border border-[#E5D9C5] shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
          >
            {/* Top warm bar */}
            <div className="px-5 pt-5 pb-4 bg-gradient-to-b from-[#FFFDF8] to-[#F6EFE2] border-b border-[#E5D9C5] flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#9A4722]">
                  <span>{place.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{place.reasonTag}</span>
                  {isStamped && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 text-[#1F4B34] font-bold">
                        <Stamp className="w-3 h-3" />
                        Stamped
                      </span>
                    </>
                  )}
                </div>
                <h2
                  id="quick-peek-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-[#142333] mt-1 leading-snug"
                >
                  {place.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1.5 text-xs text-[#5E5448]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>
                      {place.neighborhood
                        ? `${place.neighborhood}, ${place.cityLabel}`
                        : place.cityLabel}
                    </span>
                  </span>
                  {place.rating && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 font-bold text-[#142333] tabular-nums">
                        <Star className="w-3.5 h-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                        {place.rating.toFixed(1)}
                        {place.reviewCount ? (
                          <span className="font-normal text-[#6B6156]">
                            ({place.reviewCount.toLocaleString()})
                          </span>
                        ) : null}
                      </span>
                    </>
                  )}
                  {place.priceLabel && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-[#1F4B34]">
                        {place.priceLabel}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close quick peek"
                className="p-2 rounded-full bg-white hover:bg-stone-100 border border-[#E5D9C5] text-[#5E5448] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 overflow-y-auto">
              {place.description && (
                <p className="text-sm text-[#3F372E] leading-relaxed line-clamp-4">
                  {place.description}
                </p>
              )}

              {place.highlights && place.highlights.length > 0 && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#6F6559] mb-2">
                    Highlights
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {place.highlights.map((h, i) => (
                      <span
                        key={`${h}-${i}`}
                        className="px-3 py-1 rounded-full bg-white border border-[#E5D9C5] text-xs font-medium text-[#2D261E]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {place.tip && (
                <div className="rounded-2xl bg-[#173042] text-white p-4 flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl bg-[#C9A84C] text-[#173042] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div className="text-xs leading-relaxed text-stone-100">
                    <span className="font-bold text-[#F5D782] block mb-0.5">
                      Insider Tip
                    </span>
                    {place.tip}
                  </div>
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div className="px-5 py-4 bg-white border-t border-[#E5D9C5] flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    const willSave = !saved;
                    toggleBookmark({
                      id: place.id,
                      type: place.category === 'food' ? 'eat' : place.category,
                      name: place.name,
                      city: place.city,
                      category: place.category,
                    });
                    if (willSave) {
                      playTactileSound('sparkle');
                      spawnSaffronSparks(e.currentTarget, 10);
                    } else {
                      playTactileSound('tick');
                    }
                  }}
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap shrink-0',
                    saved
                      ? 'bg-[#1F4B34] text-white border-[#1F4B34]'
                      : 'bg-[#FAF8F4] text-[#1F4B34] border-[#C2DAC6] hover:bg-emerald-50/70'
                  )}
                >
                  <Heart className={cn('w-3.5 h-3.5', saved && 'fill-current')} />
                  <span>{saved ? 'Saved' : 'Save'}</span>
                </button>

                {onSpinAnother && (
                  <button
                    type="button"
                    onClick={() => {
                      playTactileSound('compass');
                      onSpinAnother();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#FAF8F4] hover:bg-[#F3ECE2] text-[#2D261E] border border-[#E5D9C5] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Next Spin</span>
                  </button>
                )}

                {place.googleMapsUrl && (
                  <a
                    href={place.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open on Google Maps"
                    className="inline-flex items-center justify-center p-2 rounded-xl bg-[#FAF8F4] hover:bg-[#F3ECE2] text-[#5E5448] border border-[#E5D9C5] transition-colors shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <LocalizedLink
                to={place.url}
                onClick={() => {
                  playTactileSound('tick');
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B24B26] text-white text-xs font-bold shadow-xs transition-all whitespace-nowrap shrink-0"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Open Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </LocalizedLink>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickPeekDrawer;
