import React from 'react';
import type { ActivityCapacity, ActivitySuitability } from '../../things-to-do';
import { formatGroupLabel } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';

interface ActivityGroupSizeCardProps {
  capacity?: ActivityCapacity;
  suitability?: ActivitySuitability;
  title?: string;
}

/**
 * "Group size" — private/shared + capacity, plus suitability context
 * (children allowed / fitness level) when the admin provided it.
 */
export const ActivityGroupSizeCard: React.FC<ActivityGroupSizeCardProps> = ({
  capacity,
  suitability,
  title = 'Group size',
}) => {
  if (!capacity && !suitability) return null;

  const mainLabel = capacity ? formatGroupLabel(capacity) : null;
  const note = capacity
    ? capacity.max_guests
      ? capacity.max_guests <= 8
        ? 'small group'
        : 'large group'
      : capacity.group_type === 'private'
        ? 'private option available'
        : 'groups welcome'
    : null;

  const suitabilityNotes = [
    suitability?.children_allowed === true ? 'Children allowed' : null,
    suitability?.fitness_level ? `Fitness: ${suitability.fitness_level.charAt(0).toUpperCase()}${suitability.fitness_level.slice(1)}` : null,
  ].filter(Boolean);

  return (
    <ActivityCard icon="users" title={title}>
      <div className="flex flex-col gap-1">
        {mainLabel && (
          <span className="font-display text-2xl sm:text-3xl font-bold text-[#173042]">{mainLabel}</span>
        )}
        {note && <span className="text-xs text-[#66757D]">({note})</span>}
        {suitabilityNotes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {suitabilityNotes.map(noteItem => (
              <span
                key={noteItem}
                className="inline-flex items-center rounded-lg border border-[#ece4d5] bg-[#faf6ee] px-2.5 py-1 text-xs font-semibold text-[#66757D]"
              >
                {noteItem}
              </span>
            ))}
          </div>
        )}
      </div>
    </ActivityCard>
  );
};