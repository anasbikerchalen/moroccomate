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
  if (!Array.isArray(languages) || languages.length === 0) return null;

  const validNames = languages
    .map(l => (typeof l === 'string' ? l : l?.name))
    .filter((n): n is string => typeof n === 'string' && n.trim().length > 0);

  if (validNames.length === 0) return null;

  return (
    <ActivityCard icon="languages" title={title}>
      <div className="flex flex-col gap-1">
        <span className="font-display text-xl sm:text-2xl font-bold text-[#173042]">
          {validNames.join(' · ')}
        </span>
        {note && <span className="text-xs text-[#66757D]">({note})</span>}
      </div>
    </ActivityCard>
  );
};