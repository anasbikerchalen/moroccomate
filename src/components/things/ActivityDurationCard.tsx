import React from 'react';
import { formatDuration } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';

interface ActivityDurationCardProps {
  durationMinutes?: number;
  title?: string;
}

/**
 * "Duration" — the backend stores duration_minutes; the frontend
 * converts it automatically (180 -> "3 hours", 90 -> "1h 30m").
 */
export const ActivityDurationCard: React.FC<ActivityDurationCardProps> = ({ durationMinutes, title = 'Duration' }) => {
  if (!durationMinutes || durationMinutes <= 0) return null;

  return (
    <ActivityCard icon="clock" title={title}>
      <div className="flex flex-col gap-1">
        <span className="font-display text-2xl sm:text-3xl font-bold text-[#173042]">
          {formatDuration(durationMinutes)}
        </span>
        <span className="text-xs text-[#66757D]">(approx.)</span>
      </div>
    </ActivityCard>
  );
};