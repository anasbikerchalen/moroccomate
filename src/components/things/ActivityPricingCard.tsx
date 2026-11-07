import React from 'react';
import type { ActivityPricing } from '../../things-to-do';
import { formatPrice } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';

interface ActivityPricingCardProps {
  pricing?: ActivityPricing;
  title?: string;
}

/**
 * "Price" — renders "350 MAD / person", "From 1,200 MAD / group",
 * "Free" or "Contact for price" from the backend pricing structure.
 */
export const ActivityPricingCard: React.FC<ActivityPricingCardProps> = ({ pricing, title = 'Price' }) => {
  if (!pricing) return null;

  const typeNote: Record<string, string> = {
    fixed: 'fixed price',
    from: 'starting price',
    free: 'free experience',
    contact: 'price on request',
  };

  return (
    <ActivityCard icon="tag" title={title}>
      <div className="flex flex-col gap-1">
        <span className="font-display text-2xl sm:text-3xl font-bold text-[#173042]">
          {formatPrice(pricing)}
        </span>
        <span className="text-xs text-[#66757D]">({typeNote[pricing.pricing_type] || pricing.pricing_type})</span>
      </div>
    </ActivityCard>
  );
};