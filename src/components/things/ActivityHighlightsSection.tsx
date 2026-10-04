import React from 'react';
import type { ActivityHighlight } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';
import { ActivityIcon } from './ActivityIcon';

interface ActivityHighlightsSectionProps {
  title?: string;
  highlights?: ActivityHighlight[];
}

/**
 * "Why visit?" — sidebar card with 3-4 vertically stacked highlights.
 * Uses the reusable highlights system (never hardcoded per activity).
 */
export const ActivityHighlightsSection: React.FC<ActivityHighlightsSectionProps> = ({
  title = 'Why visit?',
  highlights,
}) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <ActivityCard icon="star" title={title} className="h-full">
      <div className="flex flex-col gap-4">
        {highlights.map(hl => (
          <div key={hl.id} className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#faf6ee] border border-[#ece4d5] text-[#DFAF4F]">
              <ActivityIcon name={hl.icon || hl.name} className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-sm font-semibold text-[#173042] leading-snug">{hl.name}</span>
              {hl.description && (
                <span className="block text-xs text-[#66757D] leading-snug mt-0.5">{hl.description}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </ActivityCard>
  );
};