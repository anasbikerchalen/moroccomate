import React from 'react';
import type { IncludedItem } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityIncludedSectionProps {
  title?: string;
  includedItems?: IncludedItem[];
}

/**
 * "What's included" — check-icon list from the structured
 * included items library (never a manually typed paragraph).
 */
export const ActivityIncludedSection: React.FC<ActivityIncludedSectionProps> = ({
  title = "What's included",
  includedItems,
}) => {
  if (!includedItems || includedItems.length === 0) return null;

  return (
    <ActivityCard icon="check" title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {includedItems.map(item => (
          <div key={item.id} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#607B5D]/10 text-[#607B5D]">
              <ActivityIcon name="check" className="w-3 h-3" />
            </span>
            <span className="text-sm font-medium text-[#173042]">{item.name}</span>
          </div>
        ))}
      </div>
    </ActivityCard>
  );
};