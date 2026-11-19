import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Stamp,
  Volume2,
  VolumeX,
  MapPin,
  ArrowRight,
  Trash2,
  Compass,
} from 'lucide-react';
import {
  usePassportStore,
  type PassportPlaceEntry,
} from '../../state/passportStore';
import { LocalizedLink } from '../ui/LocalizedLink';
import { cn } from '../../utils/cn';
import { playTactileSound } from '../../utils/playfulFeedback';

interface PassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCityKey?: string;
  currentCityLabel?: string;
  onSpinCompass?: () => void;
}

const CATEGORY_EMOJI: Record<PassportPlaceEntry['category'], string> = {
  food: '🍽️',
  sleep: '🛏️',
  things: '✨',
  shopping: '🛍️',
};

export const PassportModal: React.FC<PassportModalProps> = ({
  isOpen,
  onClose,
  currentCityKey,
  currentCityLabel,
  onSpinCompass,
}) => {
  const entries = usePassportStore((s) => s.entries);
  const soundEnabled = usePassportStore((s) => s.soundEnabled);
  const toggleSound = usePassportStore((s) => s.toggleSound);
  const clearPassport = usePassportStore((s) => s.clearPassport);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const allEntries = useMemo(
    () =>
      Object.values(entries).sort((a, b) => (b.stampedAt || b.visitedAt) - (a.stampedAt || a.visitedAt)),
    [entries]
  );

  const stampedEntries = useMemo(
    () => allEntries.filter((e) => e.stamped),
    [allEntries]
  );

  const groupedByCity = useMemo(() => {
    const map = new Map<string, { cityLabel: string; items: PassportPlaceEntry[] }>();
    for (const item of allEntries) {
      const group = map.get(item.city) || {
        cityLabel: item.cityLabel || item.city,
        items: [],
      };
      group.items.push(item);
      map.set(item.city, group);
    }
    return Array.from(map.entries());
  }, [allEntries]);

  const currentCityStamps = useMemo(() => {
    if (!currentCityKey) return 0;
    return stampedEntries.filter((e) => e.city === currentCityKey.toLowerCase()).length;
  }, [stampedEntries, currentCityKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="passport-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#173042]/50 backdrop-blur-[2px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="relative z-10 w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl bg-[#FAF8F4] border border-[#E5D9C5] shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#173042] via-[#1E3B50] to-[#173042] text-white flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 border border-[#C9A84C]/50 flex items-center justify-center shrink-0">
                  <Stamp className="w-5 h-5 text-[#F5D782]" />
                </div>
                <div className="min-w-0">
                  <h2 id="passport-modal-title" className="font-serif text-lg font-bold leading-tight">
                    Moroccan Mate Passport
                  </h2>
                  <p className="text-xs text-stone-300 tabular-nums">
                    {stampedEntries.length} {stampedEntries.length === 1 ? 'stamp' : 'stamps'} collected
                    {currentCityLabel && currentCityStamps > 0
                      ? ` · ${currentCityStamps} in ${currentCityLabel}`
                      : ''}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    toggleSound();
                    if (!soundEnabled) {
                      window.setTimeout(() => playTactileSound('tick'), 20);
                    }
                  }}
                  title={soundEnabled ? 'Mute tactile sounds' : 'Enable tactile sounds'}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  {soundEnabled ? (
                    <Volume2 className="w-3.5 h-3.5 text-[#F5D782]" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5 text-stone-300" />
                  )}
                  <span className="hidden sm:inline">{soundEnabled ? 'Sound On' : 'Muted'}</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close passport"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-5 overflow-y-auto flex-1">
              {/* Stamp Collection */}
              {groupedByCity.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[#D8CBB8] bg-white/60 p-8 text-center space-y-2">
                  <Stamp className="w-8 h-8 text-[#C85A32] mx-auto opacity-80" />
                  <p className="font-serif text-base font-bold text-[#142333]">
                    Your passport is ready for stamps
                  </p>
                  <p className="text-xs text-[#5E5448] max-w-xs mx-auto leading-relaxed">
                    Read through any place guide or save a spot to Favorites to unlock its Moroccan wax seal.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {groupedByCity.map(([cityKey, group]) => {
                    const cityStampedCount = group.items.filter((i) => i.stamped).length;
                    return (
                      <div key={cityKey} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-[#5E5448] flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                            <span>{group.cityLabel}</span>
                          </h3>
                          <span className="text-[11px] font-bold text-[#1F4B34] tabular-nums">
                            {cityStampedCount} stamped · {group.items.length} visited
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {group.items.map((item) => (
                            <LocalizedLink
                              key={item.key}
                              to={item.url}
                              onClick={() => {
                                playTactileSound('tick');
                                onClose();
                              }}
                              className={cn(
                                'p-3 rounded-xl border transition-all flex items-center justify-between gap-2.5 group',
                                item.stamped
                                  ? 'bg-white border-[#C9A84C]/60 hover:border-[#C85A32] shadow-2xs'
                                  : 'bg-[#FAF6EE]/80 border-[#E5D9C5] hover:border-[#C9A84C]'
                              )}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div
                                  className={cn(
                                    'w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm border',
                                    item.stamped
                                      ? 'bg-[#FDF4E3] border-[#C9A84C] shadow-2xs'
                                      : 'bg-white border-[#E5D9C5] opacity-75'
                                  )}
                                >
                                  {CATEGORY_EMOJI[item.category]}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold text-[#142333] truncate group-hover:text-[#C85A32] transition-colors">
                                    {item.name}
                                  </p>
                                  <p className="text-[11px] text-[#6B6156] truncate">
                                    {item.stamped ? 'Stamped' : 'Visited'}
                                    {item.neighborhood ? ` · ${item.neighborhood}` : ''}
                                  </p>
                                </div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#C85A32] group-hover:translate-x-0.5 transition-all shrink-0 rtl:rotate-180" />
                            </LocalizedLink>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3.5 bg-white border-t border-[#E5D9C5] flex items-center justify-between gap-2">
              {allEntries.length > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    playTactileSound('tick');
                    clearPassport();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B6156] hover:text-red-700 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset stamps</span>
                </button>
              ) : (
                <span className="text-xs text-[#6B6156]">Stored privately on your device</span>
              )}

              {onSpinCompass && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSpinCompass();
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C85A32] hover:bg-[#B24B26] text-white text-xs font-bold shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Spin Compass for Next Gem</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PassportModal;
