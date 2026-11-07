import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Utensils, History, Sparkles } from 'lucide-react';
import type { MoroccanDishGlossaryEntry } from '../../data/culinaryGlossary';

interface MoroccanGlossaryModalProps {
  entry: MoroccanDishGlossaryEntry | null;
  onClose: () => void;
}

export default function MoroccanGlossaryModal({ entry, onClose }: MoroccanGlossaryModalProps) {
  if (!entry) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 16 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-100 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle Moroccan background motif */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4863A]/10 to-transparent rounded-bl-full pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close culinary guide"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#D4863A] shrink-0 shadow-2xs">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Moroccan Culinary Heritage
                </span>
                {entry.pronunciation && (
                  <span className="text-xs text-stone-600 font-mono italic">
                    /{entry.pronunciation}/
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl font-black text-stone-900 mt-1">
                {entry.term}
              </h3>
              <p className="font-arabic text-xl text-[#C2613C] font-semibold mt-0.5" dir="rtl">
                {entry.moroccanName}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EBE3D5] mb-4">
            <p className="text-sm font-medium text-stone-800 leading-relaxed">
              {entry.summary}
            </p>
          </div>

          {/* Tasting & History Blocks */}
          <div className="space-y-3.5 text-xs">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <Sparkles className="w-4 h-4 text-[#D4863A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block mb-0.5">Tasting & Flavor Profile</span>
                <span className="text-stone-600 leading-relaxed">{entry.flavorProfile}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
              <History className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block mb-0.5">Cultural Backstory</span>
                <span className="text-stone-600 leading-relaxed">{entry.historicalContext}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 py-3 rounded-2xl bg-[#173042] hover:bg-[#122533] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Back to Menu
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
