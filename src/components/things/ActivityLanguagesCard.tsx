import React from 'react';
import type { Language } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';

interface ActivityLanguagesCardProps {
  languages?: Language[];
  title?: string;
  note?: string;
}

/**
 * "Languages" — uses the global language library.
 * Only displays when languages exist for the activity.
 */
export const ActivityLanguagesCard: React.FC<ActivityLanguagesCardProps> = ({
  languages,
  title = 'Languages',
  note,
}) => {
  if (!languages || languages.length === 0) return null;

  return (
    <ActivityCard icon="languages" title={title}>
      <div className="flex flex-col gap-1">
        <span className="font-display text-xl sm:text-2xl font-bold text-[#173042]">
          {languages.map(l => l.name).join(' · ')}
        </span>
        {note && <span className="text-xs text-[#66757D]">({note})</span>}
      </div>
    </ActivityCard>
  );
};