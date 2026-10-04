import React from 'react';
import type { ExcludedItem } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityExcludedSectionProps {
  title?: string;
  excludedItems?: ExcludedItem[];
}

/**
 * "What's not included" — only displays when there are excluded items.
 * Important exclusions are never hidden inside a long description.
 */
export const ActivityExcludedSection: React.FC<ActivityExcludedSectionProps> = ({
  title = "What's not included",
  excludedItems,
}) => {
  if (!excludedItems || excludedItems.length === 0) return null;

  return (
    <ActivityCard icon="minus" title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {excludedItems.map(item => (
          <div key={item.id} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-500/10 text-stone-500">
              <ActivityIcon name="minus" className="w-3 h-3" />
            </span>
            <span className="text-sm font-medium text-[#173042]">{item.name}</span>
          </div>
        ))}
      </div>
    </ActivityCard>
  );
};