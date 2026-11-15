import React from 'react';
import { Receipt } from 'lucide-react';
import type { ShopPriceGuideItem } from '../../../types/shop';

interface ShopPriceGuideSectionProps {
  items?: ShopPriceGuideItem[];
  title?: string;
  subtitle?: string;
}

export const ShopPriceGuideSection: React.FC<ShopPriceGuideSectionProps> = ({
  items,
  title = 'Price guide & typical items',
  subtitle = 'Verified typical items and Moroccan Dirham (MAD) estimates at this shop.',
}) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs">
      <div className="flex items-start gap-3.5 mb-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#1c1917]">
          <Receipt className="w-6 h-6 stroke-[1.75]" />
        </div>
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#786b5b] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {items.map((entry, idx) => (
          <div
            key={`${entry.item}-${idx}`}
            className="flex items-center justify-between gap-4 rounded-xl border border-[#ebdccb] bg-[#FAF7F2] px-4 py-3.5"
          >
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#1c1917] leading-snug">
                {entry.item}
              </p>
              {entry.range && (
                <p className="text-xs text-[#786b5b] mt-0.5">
                  {entry.range}
                </p>
              )}
            </div>
            {entry.priceEstimate && (
              <span className="shrink-0 rounded-lg border border-[#e0d1bb] bg-white px-3 py-1 text-xs font-bold text-[#8C6218] tabular-nums">
                {entry.priceEstimate}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
