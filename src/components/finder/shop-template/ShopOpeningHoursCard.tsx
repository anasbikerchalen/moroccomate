import React, { useMemo } from 'react';
import { Clock } from 'lucide-react';
import { ShopOpeningHours, DayOfWeek } from '../../../types/shop';
import { getMoroccoTimeParts } from '../../../utils/timeEngine';

interface ShopOpeningHoursCardProps {
  openingHours: ShopOpeningHours;
}

const MINUTES_PER_DAY = 24 * 60;

export const ShopOpeningHoursCard: React.FC<ShopOpeningHoursCardProps> = ({ openingHours }) => {
  const daysMap: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  const moroccoNow = getMoroccoTimeParts();
  const currentDayIndex = moroccoNow.dayOfWeek;
  const currentDayName = daysMap[currentDayIndex];
  const currentTimeNumber = moroccoNow.currentMinutes;

  const scheduleList = Array.isArray(openingHours?.schedule) ? openingHours.schedule : [];

  // Find today's schedule
  const todaySchedule = useMemo(() => {
    if (scheduleList.length === 0) return undefined;
    return (
      scheduleList.find((s) => s.day_of_week === currentDayName) ||
      scheduleList[0]
    );
  }, [scheduleList, currentDayName]);

  // Dynamic Open / Closed calculation in Morocco time (with overnight spillover support)
  const statusInfo = useMemo(() => {
    if (!todaySchedule) {
      return { isOpen: false, label: 'Hours unconfirmed', color: 'bg-stone-100 text-stone-800 border-stone-300' };
    }

    const parseTime = (timeStr: string) => {
      const [h, m] = (timeStr || '00:00').split(':').map(Number);
      return (h || 0) * 60 + (m || 0);
    };

    // Check yesterday's overnight spillover (e.g. yesterday 07:00 - 02:00, now 00:30)
    if (currentTimeNumber < 8 * 60) {
      const yesterdayName = daysMap[(currentDayIndex + 6) % 7];
      const yesterdaySchedule = scheduleList.find((s) => s.day_of_week === yesterdayName);
      if (yesterdaySchedule && !yesterdaySchedule.is_closed) {
        const yOpen = parseTime(yesterdaySchedule.open_time);
        const yCloseRaw = parseTime(yesterdaySchedule.close_time);
        if (yCloseRaw <= yOpen) {
          const yEffectiveClose = yCloseRaw + MINUTES_PER_DAY;
          if (currentTimeNumber + MINUTES_PER_DAY < yEffectiveClose) {
            return {
              isOpen: true,
              label: `Open now · Closes ${yesterdaySchedule.close_time}`,
              color: 'bg-emerald-100 text-emerald-900 border-emerald-300'
            };
          }
        }
      }
    }

    if (todaySchedule.is_closed) {
      return { isOpen: false, label: 'Closed today', color: 'bg-amber-100 text-amber-900 border-amber-300' };
    }

    const openMin = parseTime(todaySchedule.open_time);
    const rawCloseMin = parseTime(todaySchedule.close_time);
    const effectiveCloseMin = rawCloseMin <= openMin ? rawCloseMin + MINUTES_PER_DAY : rawCloseMin;

    if (currentTimeNumber >= openMin && currentTimeNumber < effectiveCloseMin) {
      return {
        isOpen: true,
        label: `Open now · Closes ${todaySchedule.close_time}`,
        color: 'bg-emerald-100 text-emerald-900 border-emerald-300'
      };
    } else if (currentTimeNumber < openMin) {
      return {
        isOpen: false,
        label: `Closed · Opens at ${todaySchedule.open_time}`,
        color: 'bg-stone-100 text-stone-800 border-stone-300'
      };
    } else {
      // Look up tomorrow's opening time
      const tomorrowIndex = (currentDayIndex + 1) % 7;
      const tomorrowDayName = daysMap[tomorrowIndex];
      const tomorrowSchedule = scheduleList.find((s) => s.day_of_week === tomorrowDayName);
      const tomorrowTime = tomorrowSchedule && !tomorrowSchedule.is_closed ? tomorrowSchedule.open_time : 'morning';

      return {
        isOpen: false,
        label: `Closed · Opens tomorrow at ${tomorrowTime}`,
        color: 'bg-stone-100 text-stone-800 border-stone-300'
      };
    }
  }, [todaySchedule, currentTimeNumber, currentDayIndex, scheduleList]);

  if (!openingHours || scheduleList.length === 0 || !todaySchedule) return null;

  return (
    <div className="rounded-2xl border border-[#ece4d5] bg-white p-6 sm:p-7 shadow-2xs">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-8 w-8 items-center justify-center text-[#1c1917]">
          <Clock className="w-6 h-6 stroke-[1.75]" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917]">
          Opening hours
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Today Highlight & Open Status */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#ebdccb] pb-4 md:pb-0 md:pr-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#736453] uppercase tracking-wider">
              Today
            </span>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${statusInfo.color}`}
            >
              {statusInfo.label}
            </span>
          </div>

          <div className="mt-2 text-xl sm:text-2xl font-bold text-[#1c1917] tracking-tight">
            {todaySchedule.is_closed
              ? 'Closed'
              : `${todaySchedule.open_time} – ${todaySchedule.close_time}`}
          </div>

          {openingHours.note && (
            <p className="mt-2 text-[11px] text-[#867562] leading-normal">
              {openingHours.note}
            </p>
          )}
        </div>

        {/* Right: 7-Day Schedule Grid matching mockup */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3.5 gap-x-4 text-xs">
            {scheduleList.map((day) => {
              const isToday = day.day_of_week === currentDayName;
              return (
                <div
                  key={day.day_of_week}
                  className={`flex flex-col py-1 px-1.5 rounded-lg transition-colors ${
                    isToday ? 'bg-[#f7ede0] font-semibold' : ''
                  }`}
                >
                  <span className={`font-semibold ${isToday ? 'text-[#b45309]' : 'text-[#6b5c4d]'}`}>
                    {day.short_label || day.day_label.slice(0, 3)}
                  </span>
                  <span className={`text-[11px] sm:text-xs mt-0.5 ${isToday ? 'text-[#1c1917] font-bold' : 'text-[#2e261f]'}`}>
                    {day.is_closed ? 'Closed' : `${day.open_time} – ${day.close_time}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
