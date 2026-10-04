import React from 'react';
import { Star } from 'lucide-react';
import { ShopHighlight } from '../../../types/shop';
import { ShopIcon } from './ShopIcon';

interface ShopHighlightsSectionProps {
  highlights: ShopHighlight[];
  title?: string;
}

export const ShopHighlightsSection: React.FC<ShopHighlightsSectionProps> = ({
  highlights,
  title = 'Why visit?'
}) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs flex flex-col justify-between h-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-8 w-8 items-center justify-center text-[#1c1917]">
          <Star className="w-6 h-6 stroke-[1.75]" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917]">
          {title}
        </h2>
      </div>

      {/* Dynamic Highlights List */}
      <div className="flex flex-col gap-5">
        {highlights.map((item) => (
          <div key={item.id} className="flex items-start gap-3.5 group">
            {/* Hexagonal / Emblem Icon */}
            <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
              <ShopIcon name={item.icon || item.id} size={36} />
            </div>

            {/* Text content */}
            <div className="pt-0.5">
              <h3 className="text-sm sm:text-base font-bold text-[#1c1917]">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#6f6050] mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
