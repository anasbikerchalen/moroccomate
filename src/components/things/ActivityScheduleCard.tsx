import React from 'react';
import type { ActivitySchedule } from '../../things-to-do';
import { ActivityCard } from './ActivityCard';

interface ActivityScheduleCardProps {
  schedule?: ActivitySchedule;
  scheduleText?: string;
  title?: string;
}

/**
 * "Schedule" — supports multiple days, multiple time slots, closed days
 * and seasonal schedules. Never assumes every activity has the same
 * schedule; hides when no schedule data exists.
 */
export const ActivityScheduleCard: React.FC<ActivityScheduleCardProps> = ({
  schedule,
  scheduleText,
  title = 'Schedule',
}) => {
  const hasSlots = schedule && Array.isArray(schedule.slots) && schedule.slots.length > 0;
  if (!hasSlots && !scheduleText) return null;

  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayLabels: Record<string, string> = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  // Group slots by day -> "Monday  09:00 – 12:00"
  const rows = hasSlots
    ? dayOrder
        .map(day => {
          const daySlots = schedule!.slots.filter(s => s.day_of_week === day);
          if (daySlots.length === 0) return null;
          const times = daySlots.map(s => (s.end_time ? `${s.start_time} – ${s.end_time}` : s.start_time)).join('    |    ');
          return { day: dayLabels[day], times };
        })
        .filter((row): row is { day: string; times: string } => row !== null)
    : [];

  const everyDay = rows.length === 7;

  return (
    <ActivityCard icon="calendar" title={title}>
      <div className="flex flex-col gap-2">
        {everyDay && (
          <span className="inline-flex items-center self-start rounded-lg bg-[#607B5D]/10 px-2.5 py-1 text-xs font-bold text-[#607B5D]">
            Every day
          </span>
        )}
        {rows.length > 0 ? (
          <div className="flex flex-col gap-1.5">
            {rows.map(row => (
              <div key={row.day} className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-semibold text-[#173042]">{row.day}</span>
                <span className="text-[#66757D] font-medium whitespace-pre">{row.times}</span>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-sm font-medium text-[#173042]">{scheduleText}</span>
        )}
        {schedule?.note && <span className="text-xs text-[#66757D]">({schedule.note})</span>}
      </div>
    </ActivityCard>
  );
};