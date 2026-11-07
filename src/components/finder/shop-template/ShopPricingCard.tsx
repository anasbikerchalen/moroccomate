import React from 'react';
import { Tag } from 'lucide-react';
import { ShopPricing } from '../../../types/shop';

interface ShopPricingCardProps {
  pricing: ShopPricing;
}

export const ShopPricingCard: React.FC<ShopPricingCardProps> = ({ pricing }) => {
  if (!pricing) return null;

  const defaultTitle =
    pricing.pricing_type === 'negotiable'
      ? 'Prices are negotiable'
      : pricing.pricing_type === 'fixed'
      ? 'Fixed prices'
      : 'Mixed pricing';

  return (
    <div className="rounded-2xl border border-[#ece4d5] bg-white p-6 shadow-2xs">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-7 w-7 items-center justify-center text-[#1c1917]">
          <Tag className="w-5 h-5 stroke-[1.75]" />
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917]">
          Pricing
        </h3>
      </div>

      <div className="pl-1">
        <p className="text-sm sm:text-base font-bold text-[#1c1917]">
          {pricing.title || defaultTitle}
        </p>
        {pricing.note && (
          <p className="text-xs sm:text-sm text-[#736453] mt-0.5">
            {pricing.note}
          </p>
        )}
      </div>
    </div>
  );
};
