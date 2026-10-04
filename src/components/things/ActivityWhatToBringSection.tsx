import React from 'react';
import type { RequirementItem } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityWhatToBringSectionProps {
  title?: string;
  requirements?: RequirementItem[];
}

/**
 * "What to bring" — especially useful for outdoor activities.
 * Uses the reusable requirements library; the exact same component
 * adapts to hiking, hammam, surfing, etc.
 */
export const ActivityWhatToBringSection: React.FC<ActivityWhatToBringSectionProps> = ({
  title = 'What to bring',
  requirements,
}) => {
  if (!requirements || requirements.length === 0) return null;

  return (
    <ActivityCard icon="backpack" title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {requirements.map(item => (
          <div key={item.id} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFAF4F]/15 text-[#b98a2e]">
              <ActivityIcon name="check" className="w-3 h-3" />
            </span>
            <span className="text-sm font-medium text-[#173042]">{item.name}</span>
          </div>
        ))}
      </div>
    </ActivityCard>
  );
};