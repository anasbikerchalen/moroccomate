import React, { useMemo } from 'react';
import { Clock } from 'lucide-react';
import { ShopOpeningHours, DayOfWeek } from '../../../types/shop';

interface ShopOpeningHoursCardProps {
  openingHours: ShopOpeningHours;
}

export const ShopOpeningHoursCard: React.FC<ShopOpeningHoursCardProps> = ({ openingHours }) => {
  if (!openingHours || !openingHours.schedule || openingHours.schedule.length === 0) return null;

  // Day of week mapping
  const daysMap: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  const now = new Date();
  const currentDayIndex = now.getDay();
  const currentDayName = daysMap[currentDayIndex];
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeNumber = currentHours * 60 + currentMinutes;

  // Find today's schedule
  const todaySchedule = useMemo(() => {
    return (
      openingHours.schedule.find((s) => s.day_of_week === currentDayName) ||
      openingHours.schedule[0]
    );
  }, [openingHours, currentDayName]);

  // Dynamic Open / Closed calculation
  const statusInfo = useMemo(() => {
    if (!todaySchedule || todaySchedule.is_closed) {
      return { isOpen: false, label: 'Closed today', color: 'bg-amber-100 text-amber-900' };
    }

    const parseTime = (timeStr: string) => {
      const [h, m] = (timeStr || '00:00').split(':').map(Number);
      return (h || 0) * 60 + (m || 0);
    };

    const openMin = parseTime(todaySchedule.open_time);
    const closeMin = parseTime(todaySchedule.close_time);

    if (currentTimeNumber >= openMin && currentTimeNumber < closeMin) {
      return {
        isOpen: true,
        label: 'Open now',
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
      const tomorrowSchedule = openingHours.schedule.find((s) => s.day_of_week === tomorrowDayName);
      const tomorrowTime = tomorrowSchedule && !tomorrowSchedule.is_closed ? tomorrowSchedule.open_time : 'morning';

      return {
        isOpen: false,
        label: `Closed · Opens tomorrow at ${tomorrowTime}`,
        color: 'bg-stone-100 text-stone-800 border-stone-300'
      };
    }
  }, [todaySchedule, currentTimeNumber, currentDayIndex, openingHours.schedule]);

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
            {openingHours.schedule.map((day) => {
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
