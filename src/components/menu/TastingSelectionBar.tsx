import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, CalendarCheck, ChevronRight, X } from 'lucide-react';
import { useTastingStore, formatPrice } from '../../state/tastingStore';

interface TastingSelectionBarProps {
  onOpenReservation: () => void;
  restaurantName: string;
}

export default function TastingSelectionBar({
  onOpenReservation,
  restaurantName,
}: TastingSelectionBarProps) {
  const {
    getTotalItemsCount,
    getTotalPriceMAD,
    currency,
    clearDishes,
  } = useTastingStore();

  const totalCount = getTotalItemsCount();
  const totalPriceMAD = getTotalPriceMAD();

  return (
    <AnimatePresence>
      {totalCount > 0 && (
        <motion.aside
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          aria-label="Tasting selection and reservation bar"
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl"
        >
          <div className="relative bg-[#173042]/95 backdrop-blur-md text-white px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/15 flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Dish count and Total badge */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-[#D4863A] flex items-center justify-center text-white shrink-0 shadow-sm">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-300">
                    {totalCount} {totalCount === 1 ? 'Dish Selected' : 'Dishes Selected'}
                  </span>
                  <button
                    onClick={clearDishes}
                    title="Clear selected dishes"
                    className="text-[10px] text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
                <div className="flex items-baseline gap-1.5 truncate">
                  <span className="text-sm sm:text-base font-black text-white font-mono">
                    {formatPrice(totalPriceMAD, currency)}
                  </span>
                  {currency !== 'MAD' && (
                    <span className="text-[11px] text-white/60">
                      (~{totalPriceMAD} DH)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#D4863A] to-[#C2613C] hover:from-[#c2762e] hover:to-[#b05330] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve Table</span>
                <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
