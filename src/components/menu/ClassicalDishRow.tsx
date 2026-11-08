import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, Flame, HelpCircle } from 'lucide-react';
import { useTastingStore, formatPrice } from '../../state/tastingStore';
import { findGlossaryEntryForDish, type MoroccanDishGlossaryEntry } from '../../data/culinaryGlossary';
import { getDishTranslation } from '../../data/menuTranslations';
import type { MenuItem } from '../../listings/types';

interface ClassicalDishRowProps {
  dish: MenuItem;
  placeId: string;
  placeName: string;
  city: string;
  onOpenGlossary: (entry: MoroccanDishGlossaryEntry) => void;
}

export default function ClassicalDishRow({
  dish,
  placeId,
  placeName,
  city,
  onOpenGlossary,
}: ClassicalDishRowProps) {
  const {
    isDishSelected,
    getDishQuantity,
    toggleDish,
    incrementDish,
    decrementDish,
    currency,
    menuLanguage,
  } = useTastingStore();

  const selected = isDishSelected(dish.id);
  const quantity = getDishQuantity(dish.id);
  const glossaryEntry = findGlossaryEntryForDish(dish.name);
  const translationText = getDishTranslation(dish, menuLanguage);

  return (
    <div
      className={`group py-2.5 transition-colors ${
        selected ? 'bg-amber-500/5 -mx-2 px-2 rounded-lg' : ''
      }`}
    >
      {/* Top line: Dish Name + Dotted Leader + Price + (+) Button */}
      <div className="flex items-baseline gap-2">
        {/* Dish Name */}
        <div className="flex items-baseline gap-1.5 shrink-0 max-w-[70%] sm:max-w-[75%]">
          <h4 className="font-serif text-[14px] sm:text-[15px] font-bold text-stone-900 tracking-tight leading-snug">
            {dish.name}
          </h4>
          {dish.isSignature && (
            <span className="text-[9px] font-black uppercase tracking-wider text-[#C2613C] shrink-0">
              ★
            </span>
          )}
          {dish.isSpicy && (
            <Flame className="w-2.5 h-2.5 text-rose-600 inline shrink-0 self-center" />
          )}
          {glossaryEntry && (
            <button
              type="button"
              onClick={() => onOpenGlossary(glossaryEntry)}
              title={`Learn about ${glossaryEntry.term}`}
              className="text-[#D4863A] hover:text-[#b56e29] transition-colors cursor-pointer inline-flex self-center"
            >
              <HelpCircle className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Dotted Leader Line */}
        <div
          className="flex-1 border-b border-dotted border-stone-300 self-baseline mb-1 min-w-[16px]"
          aria-hidden="true"
        />

        {/* Price & Add Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-mono text-[13px] sm:text-[14px] font-bold text-stone-900 tabular-nums">
            {formatPrice(dish.price, currency)}
          </span>

          {selected ? (
            <div className="flex items-center gap-0.5 bg-white border border-[#D4863A]/40 rounded-full px-1 py-0.2 shadow-2xs ml-1">
              <button
                type="button"
                onClick={() => decrementDish(dish.id)}
                aria-label={`Decrease ${dish.name}`}
                className="w-4 h-4 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="w-4 text-center text-[10px] font-black text-stone-900 tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => incrementDish(dish, placeId, placeName, city)}
                aria-label={`Increase ${dish.name}`}
                className="w-4 h-4 rounded-full bg-[#D4863A] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => toggleDish(dish, placeId, placeName, city)}
              aria-label={`Add ${dish.name}`}
              className="w-5 h-5 rounded-full border border-stone-300 hover:border-[#D4863A] hover:bg-[#D4863A] text-stone-400 hover:text-white flex items-center justify-center transition-all cursor-pointer ml-1"
            >
              <Plus className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Multilingual Translation Subtext in Red & Bold */}
      {translationText && (
        <p
          className={`text-[11px] sm:text-xs font-semibold text-rose-700 mt-0.5 leading-snug tracking-wide ${
            menuLanguage === 'ar' ? 'font-arabic text-xs' : 'font-sans'
          }`}
          dir={menuLanguage === 'ar' ? 'rtl' : 'ltr'}
        >
          {translationText}
        </p>
      )}

      {/* Description / Portion notes */}
      {(dish.description || dish.portionNotes) && (
        <div className="mt-0.5 space-y-0.5">
          {dish.description && (
            <p className="text-[11px] text-stone-500 font-serif italic leading-relaxed line-clamp-2">
              {dish.description}
            </p>
          )}
          {dish.portionNotes && (
            <span className="inline-block text-[10px] text-stone-400 font-mono">
              ※ {dish.portionNotes}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
