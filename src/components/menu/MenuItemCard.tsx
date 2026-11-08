import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Flame, HelpCircle, ChevronDown } from 'lucide-react';
import { useTastingStore, formatPrice } from '../../state/tastingStore';
import { findGlossaryEntryForDish, type MoroccanDishGlossaryEntry } from '../../data/culinaryGlossary';
import { getDishTranslation } from '../../data/menuTranslations';
import type { MenuItem } from '../../listings/types';

interface MenuItemCardProps {
  dish: MenuItem;
  placeId: string;
  placeName: string;
  city: string;
  highlightedDishes?: string[];
  onOpenGlossary: (entry: MoroccanDishGlossaryEntry) => void;
}

export default function MenuItemCard({
  dish,
  placeId,
  placeName,
  city,
  highlightedDishes = [],
  onOpenGlossary,
}: MenuItemCardProps) {
  const {
    isDishSelected,
    getDishQuantity,
    toggleDish,
    incrementDish,
    decrementDish,
    currency,
    menuLanguage,
  } = useTastingStore();

  const [descOpen, setDescOpen] = useState(false);
  const selected = isDishSelected(dish.id);
  const quantity = getDishQuantity(dish.id);
  const glossaryEntry = findGlossaryEntryForDish(dish.name);
  const translationText = getDishTranslation(dish, menuLanguage);
  const hasDetail = !!(dish.description || dish.portionNotes);

  const isRecommended =
    dish.isSignature ||
    (highlightedDishes &&
      highlightedDishes.some((h) => {
        const hLow = h.toLowerCase().trim();
        const dLow = dish.name.toLowerCase().trim();
        return dLow.includes(hLow) || hLow.includes(dLow);
      }));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      {/* Main row */}
      <div
        className={`flex items-start gap-3 py-3 transition-colors ${
          selected
            ? 'opacity-100 bg-[#C2613C]/10 rounded-xl px-2.5'
            : isRecommended
            ? 'opacity-100 bg-amber-500/[0.07] rounded-xl px-2.5 border-l-2 border-amber-600/70'
            : 'opacity-90 hover:opacity-100'
        }`}
      >
        {/* Left: name + badges + description toggle */}
        <div className="flex-1 min-w-0">
          {/* Badges row */}
          {(isRecommended || dish.isSpicy || (dish.dietary && dish.dietary.length > 0)) && (
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {isRecommended && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-900 border border-amber-500/30">
                  ★ Highly Recommended
                </span>
              )}
              {dish.isSpicy && (
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-rose-600">
                  <Flame className="w-2.5 h-2.5" />
                  Spicy
                </span>
              )}
              {dish.dietary?.map((diet) => (
                <span
                  key={diet}
                  className="text-[10px] font-semibold text-emerald-700 capitalize"
                >
                  {diet === 'vegetarian' ? '🌱' : diet === 'vegan' ? '🌿' : ''} {diet}
                </span>
              ))}
            </div>
          )}

          {/* Dish name + glossary */}
          <div className="flex items-center gap-2 flex-wrap">
            <h4
              className={`font-serif text-[15px] sm:text-[16px] font-semibold leading-snug transition-colors ${
                selected ? 'text-[#C2613C]' : 'text-stone-900'
              }`}
            >
              {dish.name}
            </h4>
            {glossaryEntry && (
              <button
                type="button"
                onClick={() => onOpenGlossary(glossaryEntry)}
                title={`Learn about ${glossaryEntry.term}`}
                className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-[#D4863A] hover:text-[#c2762e] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3 h-3" />
                <span className="hidden sm:inline">What is this?</span>
              </button>
            )}
          </div>

          {/* Multilingual Translation: Arabic / English / Español / German (Red & Bold) */}
          {translationText && (
            <p
              className={`text-xs sm:text-[13px] font-semibold text-red-600 dark:text-red-500 mt-0.5 leading-snug tracking-wide ${
                menuLanguage === 'ar' ? 'font-arabic text-sm' : ''
              }`}
              dir={menuLanguage === 'ar' ? 'rtl' : 'ltr'}
            >
              {translationText}
            </p>
          )}

          {/* Expand description toggle */}
          {hasDetail && (
            <button
              type="button"
              onClick={() => setDescOpen((v) => !v)}
              className="mt-1.5 flex items-center gap-1 text-[11px] text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
              aria-expanded={descOpen}
            >
              <motion.span
                animate={{ rotate: descOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                <ChevronDown className="w-3 h-3" />
              </motion.span>
              <span>{descOpen ? 'Less' : 'Details'}</span>
            </button>
          )}

          <AnimatePresence>
            {descOpen && hasDetail && (
              <motion.div
                key="desc"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-2 space-y-1">
                  {dish.description && (
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {dish.description}
                    </p>
                  )}
                  {dish.portionNotes && (
                    <p className="text-[11px] italic text-stone-400">{dish.portionNotes}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: price + add button */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          {/* Price */}
          <div className="text-right">
            <span className="font-mono text-[15px] sm:text-[16px] font-bold text-stone-900 tabular-nums">
              {formatPrice(dish.price, currency)}
            </span>
            {currency !== 'MAD' && (
              <span className="block text-[10px] text-stone-400 font-mono tabular-nums">
                {dish.price} DH
              </span>
            )}
          </div>

          {/* Add / quantity controls */}
          {selected ? (
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1 bg-[#FAF4ED] border border-[#D4863A]/40 rounded-full px-1.5 py-0.5"
            >
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => decrementDish(dish.id)}
                aria-label={`Decrease ${dish.name}`}
                className="w-6 h-6 rounded-full flex items-center justify-center text-stone-700 hover:bg-white transition-colors cursor-pointer"
              >
                <Minus className="w-3 h-3" />
              </motion.button>
              <span className="w-5 text-center text-xs font-black text-stone-900 tabular-nums">
                {quantity}
              </span>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => incrementDish(dish, placeId, placeName, city)}
                aria-label={`Increase ${dish.name}`}
                className="w-6 h-6 rounded-full bg-[#D4863A] hover:bg-[#c2762e] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <Plus className="w-3 h-3" />
              </motion.button>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.88 }}
              onClick={() => toggleDish(dish, placeId, placeName, city)}
              aria-label={`Add ${dish.name} to tasting list`}
              className="w-7 h-7 rounded-full border-2 border-stone-300 hover:border-[#D4863A] hover:bg-[#D4863A] text-stone-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Dotted separator — printed menu aesthetic */}
      <div className="border-b border-dashed border-stone-200" aria-hidden="true" />
    </motion.div>
  );
}
