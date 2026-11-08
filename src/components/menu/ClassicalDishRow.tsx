import React from 'react';
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
  highlightedDishes?: string[];
  onOpenGlossary: (entry: MoroccanDishGlossaryEntry) => void;
}

export default function ClassicalDishRow({
  dish,
  placeId,
  placeName,
  city,
  highlightedDishes = [],
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

  const isRecommended =
    dish.isSignature ||
    (highlightedDishes &&
      highlightedDishes.some((h) => {
        const hLow = h.toLowerCase().trim();
        const dLow = dish.name.toLowerCase().trim();
        return dLow.includes(hLow) || hLow.includes(dLow);
      }));

  return (
    <div
      className={`group py-2 transition-all ${
        selected
          ? 'bg-[#C2613C]/10 -mx-2 px-2 rounded-md'
          : isRecommended
          ? 'bg-amber-600/[0.08] -mx-2 px-2 rounded-md border-l-2 border-[#C2613C] shadow-2xs'
          : ''
      }`}
    >
      {/* ── Main line: Name ····· Price (+) ── */}
      <div className="flex items-baseline gap-1">
        {/* Dish name & badges */}
        <div className="flex items-baseline gap-1.5 shrink-0 max-w-[68%] sm:max-w-[72%] flex-wrap">
          <h4 className="font-serif text-[13px] sm:text-[14px] font-bold text-[#3D2B1F] leading-snug">
            {dish.name}
          </h4>
          {isRecommended && (
            <span
              className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-amber-600/15 text-amber-950 border border-amber-600/30 shrink-0 shadow-2xs"
              title="Chef's Highly Recommended Plate"
            >
              ★ Recommended
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
              className="text-[#B8A080] hover:text-[#8B6F4E] transition-colors cursor-pointer inline-flex self-center"
            >
              <HelpCircle className="w-2.5 h-2.5" />
            </button>
          )}
        </div>

        {/* Dotted leader line */}
        <div
          className="flex-1 self-baseline mb-[3px] min-w-[10px]"
          style={{
            borderBottom: '1.5px dotted #C9B99A',
          }}
          aria-hidden="true"
        />

        {/* Price & add button */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="font-serif text-[13px] sm:text-[14px] font-bold text-[#3D2B1F] tabular-nums">
            {formatPrice(dish.price, currency)}
          </span>

          {selected ? (
            <div className="flex items-center gap-0.5 bg-white/80 border border-[#C2613C]/30 rounded-full px-0.5 py-px shadow-2xs ml-0.5">
              <button
                type="button"
                onClick={() => decrementDish(dish.id)}
                aria-label={`Decrease ${dish.name}`}
                className="w-4 h-4 rounded-full flex items-center justify-center text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <span className="w-3.5 text-center text-[10px] font-black text-[#3D2B1F] tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => incrementDish(dish, placeId, placeName, city)}
                aria-label={`Increase ${dish.name}`}
                className="w-4 h-4 rounded-full bg-[#C2613C] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <Plus className="w-2.5 h-2.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => toggleDish(dish, placeId, placeName, city)}
              aria-label={`Add ${dish.name}`}
              className="w-4.5 h-4.5 rounded-full border border-[#C9B99A] hover:border-[#C2613C] hover:bg-[#C2613C] text-[#B8A080] hover:text-white flex items-center justify-center transition-all cursor-pointer ml-0.5 opacity-0 group-hover:opacity-100"
            >
              <Plus className="w-2.5 h-2.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Translation subtext (red, bold) ── */}
      {translationText && (
        <p
          className={`text-[10px] sm:text-[11px] font-semibold text-rose-700/90 mt-px leading-snug ${
            menuLanguage === 'ar' ? 'font-arabic text-[11px]' : 'font-serif italic'
          }`}
          dir={menuLanguage === 'ar' ? 'rtl' : 'ltr'}
        >
          {translationText}
        </p>
      )}

      {/* ── Description / portion notes ── */}
      {(dish.description || dish.portionNotes) && (
        <div className="mt-px space-y-px">
          {dish.description && (
            <p className="text-[10px] text-[#8B7D6B] font-serif italic leading-relaxed line-clamp-1">
              {dish.description}
            </p>
          )}
          {dish.portionNotes && (
            <span className="inline-block text-[9px] text-[#A0917B] font-mono">
              ※ {dish.portionNotes}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
