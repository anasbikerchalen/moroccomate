/**
 * timeEngine.ts — Morocco Shop Finder
 * 
 * Dynamic "Open Now" status calculator.
 * Handles: normal hours, Friday prayer pause, Ramadan shifts, Eid holidays.
 * 
 * Usage:
 *   const status = getShopStatus(shop.openingHours, shop.fridayHours, shop.ramadanHours);
 *   // → { status: 'open', label: 'Open Now · Closes 19:00', color: 'emerald' }
 */

export type ShopStatusValue =
  | 'open'
  | 'closes_soon'
  | 'closed'
  | 'friday_prayer'
  | 'ramadan_day'
  | 'ramadan_night'
  | 'holiday'
  | 'unknown';

export interface ShopStatus {
  status: ShopStatusValue;
  label: string;
  color: 'emerald' | 'amber' | 'blue' | 'purple' | 'red' | 'stone';
}

interface HoursEntry {
  day: string;
  hours: string;
}

/**
 * Parse a hours string like "09:00 - 19:00" into [openMin, closeMin]
 * Returns null if unparseable.
 */
function parseHoursRange(hoursStr: string): [number, number] | null {
  const parts = hoursStr.split('-').map(s => s.trim());
  if (parts.length !== 2) return null;
  
  const parse = (s: string): number | null => {
    const m = s.match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return null;
    return parseInt(m[1]) * 60 + parseInt(m[2]);
  };

  const open = parse(parts[0]);
  const close = parse(parts[1]);
  if (open === null || close === null) return null;
  return [open, close];
}

/**
 * Get today's day name in lowercase English (e.g., "monday").
 */
function getDayName(date: Date): string {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[date.getDay()];
}

/**
 * Check if today falls within Ramadan (approximate dates).
 * Stored as [startMonth, startDay, endMonth, endDay] for easy yearly updating.
 */
const RAMADAN_RANGES: [number, number, number, number][] = [
  [2, 18, 3, 19], // 2026 approximate
  [2, 7, 3, 8],   // 2027 approximate
];

function isRamadan(date: Date): boolean {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  for (const [sm, sd, em, ed] of RAMADAN_RANGES) {
    const start = new Date(date.getFullYear(), sm - 1, sd);
    const end = new Date(date.getFullYear(), em - 1, ed);
    if (date >= start && date <= end) return true;
  }
  return false;
}

// Major Moroccan holidays (fixed civil dates)
const HOLIDAYS: [number, number][] = [
  [1, 1],   // New Year
  [1, 11],  // Manifesto of Independence
  [5, 1],   // Labour Day
  [7, 30],  // Throne Day
  [8, 14],  // Oued Ed-Dahab Day
  [8, 20],  // Revolution Day
  [8, 21],  // Youth Day
  [11, 6],  // Green March
  [11, 18], // Independence Day
];

function isHoliday(date: Date): boolean {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return HOLIDAYS.some(([hm, hd]) => hm === m && hd === d);
}

/**
 * Compute the live status of a shop.
 *
 * @param openingHours  Array of { day, hours }
 * @param fridayHours   Optional Friday prayer split, e.g. "09:00 - 12:00, 15:00 - 19:00"
 * @param ramadanHours  Optional Ramadan hours, e.g. "09:00 - 15:00"
 * @param now           Current date/time (defaults to now, injectable for testing)
 */
export function getShopStatus(
  openingHours: HoursEntry[] | string,
  fridayHours?: string,
  ramadanHours?: string,
  now: Date = new Date()
): ShopStatus {
  // Normalize openingHours if it's a string, or undefined/null, or not an array
  let normalizedHours: HoursEntry[] = [];
  if (Array.isArray(openingHours)) {
    normalizedHours = openingHours;
  } else if (typeof openingHours === 'string' && openingHours.trim() !== '') {
    let hoursStr = openingHours;
    
    // Helper to convert 12h formats (e.g., "08:00 AM") to 24h format (e.g., "08:00")
    const convert12to24 = (time12: string): string => {
      const cleaned = time12.trim();
      const match = cleaned.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
      if (!match) return cleaned;
      let hours = parseInt(match[1]);
      const minutes = match[2];
      const ampm = match[3].toUpperCase();
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      return `${hours.toString().padStart(2, '0')}:${minutes}`;
    };
    
    // Split on dash, convert each part, then join
    const parts = hoursStr.split('-');
    if (parts.length === 2) {
      const open = convert12to24(parts[0].replace(/\([^)]*\)/g, ''));
      const close = convert12to24(parts[1].replace(/\([^)]*\)/g, ''));
      hoursStr = `${open} - ${close}`;
    }

    normalizedHours = [{ day: 'Daily', hours: hoursStr }];
  } else {
    return {
      status: 'unknown',
      label: '⚪ Hours unconfirmed · Check WhatsApp',
      color: 'stone',
    };
  }

  const dayName = getDayName(now);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isFriday = dayName === 'friday';

  // --- RAMADAN CHECK ---
  if (isRamadan(now)) {
    if (ramadanHours) {
      const range = parseHoursRange(ramadanHours);
      if (range) {
        const [open, close] = range;
        if (currentMinutes >= open && currentMinutes < close) {
          return {
            status: 'ramadan_day',
            label: `🟣 Ramadan Hours · Open until ${formatMinutes(close)}`,
            color: 'purple',
          };
        }
        if (currentMinutes >= 20 * 60 && currentMinutes < 23 * 60) {
          return {
            status: 'ramadan_night',
            label: '🟣 Ramadan Night Market · Open 20:00–23:00',
            color: 'purple',
          };
        }
        return {
          status: 'closed',
          label: `🔴 Closed · Ramadan hours ${formatMinutes(open)}–${formatMinutes(close)}`,
          color: 'red',
        };
      }
    }
    if (currentMinutes < 20 * 60) {
      return {
        status: 'ramadan_day',
        label: '🟣 Ramadan · Likely closed until evening',
        color: 'purple',
      };
    }
    return {
      status: 'open',
      label: '🟢 Open · Evening hours',
      color: 'emerald',
    };
  }

  // --- HOLIDAY CHECK ---
  if (isHoliday(now)) {
    const hrs = findHoursForToday(normalizedHours, dayName);
    if (hrs) {
      const range = parseHoursRange(hrs);
      if (range) {
        const [open, close] = range;
        if (currentMinutes >= open && currentMinutes < close) {
          return {
            status: 'open',
            label: `🟢 Open (Holiday) · Closes ${formatMinutes(close)}`,
            color: 'emerald',
          };
        }
      }
    }
    return {
      status: 'holiday',
      label: '🔴 Holiday · Check back tomorrow',
      color: 'red',
    };
  }

  // --- FRIDAY PRAYER PAUSE (12:00–14:30) ---
  if (isFriday && fridayHours) {
    const parts = fridayHours.split(',').map(s => s.trim());
    for (const part of parts) {
      const range = parseHoursRange(part);
      if (range) {
        const [open, close] = range;
        if (currentMinutes >= open && currentMinutes < close) {
          if (close - currentMinutes <= 60) {
            return {
              status: 'closes_soon',
              label: `🟡 Open · Closes soon (${formatMinutes(close)})`,
              color: 'amber',
            };
          }
          return {
            status: 'open',
            label: `🟢 Open Now · Closes ${formatMinutes(close)}`,
            color: 'emerald',
          };
        }
      }
    }
    if (currentMinutes >= 12 * 60 && currentMinutes < 14 * 60 + 30) {
      const afternoonPart = parts.find(p => p.includes('15:00') || p.includes('14:30'));
      const reopenMatch = afternoonPart ? parseHoursRange(afternoonPart) : null;
      const reopenTime = reopenMatch ? reopenMatch[0] : 15 * 60;
      return {
        status: 'friday_prayer',
        label: `🔵 Friday Prayer · Reopens ${formatMinutes(reopenTime)}`,
        color: 'blue',
      };
    }
  }

  // --- NORMAL HOURS CHECK ---
  const hrs = findHoursForToday(normalizedHours, dayName);
  if (hrs) {
    const parts = hrs.split(',').map(s => s.trim());
    let nextOpenMinutes: number | null = null;
    
    for (const part of parts) {
      const range = parseHoursRange(part);
      if (range) {
        const [open, close] = range;
        if (currentMinutes >= open && currentMinutes < close) {
          if (close - currentMinutes <= 60) {
            return {
              status: 'closes_soon',
              label: `🟡 Open · Closes soon (${formatMinutes(close)})`,
              color: 'amber',
            };
          }
          return {
            status: 'open',
            label: `🟢 Open Now · Closes ${formatMinutes(close)}`,
            color: 'emerald',
          };
        }
        
        if (open > currentMinutes) {
          if (nextOpenMinutes === null || open < nextOpenMinutes) {
            nextOpenMinutes = open;
          }
        }
      }
    }
    
    if (nextOpenMinutes !== null) {
      return {
        status: 'closed',
        label: `🔴 Closed · Opens ${formatMinutes(nextOpenMinutes)}`,
        color: 'red',
      };
    }
    
    const firstRange = parseHoursRange(parts[0]);
    if (firstRange) {
      return {
        status: 'closed',
        label: `🔴 Closed · Opens ${formatMinutes(firstRange[0])}`,
        color: 'red',
      };
    }
  }

  return {
    status: 'unknown',
    label: '⚪ Hours unconfirmed · Check WhatsApp',
    color: 'stone',
  };
}

/**
 * Match today's dayName against an openingHours entry.
 * Supports: "Mon-Fri", "Mon-Sat", "Daily", "Monday", "Weekdays", "Weekends", etc.
 */
function findHoursForToday(entries: HoursEntry[], dayName: string): string | null {
  if (!entries || !Array.isArray(entries)) return null;
  const dayAbbr = dayName.slice(0, 3);
  const dayAbbrCap = dayAbbr.charAt(0).toUpperCase() + dayAbbr.slice(1);

  for (const entry of entries) {
    if (!entry || typeof entry.day !== 'string') continue;
    const d = entry.day.toLowerCase();

    if (d === dayName || d === dayAbbr || d === dayAbbrCap) return entry.hours;
    if (d === 'daily') return entry.hours;
    if ((d === 'weekdays' || d === 'weekday') && dayName !== 'saturday' && dayName !== 'sunday') return entry.hours;
    if ((d === 'weekends' || d === 'weekend') && (dayName === 'saturday' || dayName === 'sunday')) return entry.hours;

    const rangeMatch = d.match(/^([a-z]{3})\s*-\s*([a-z]{3})$/i);
    if (rangeMatch) {
      const daysOrder = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const startIdx = daysOrder.indexOf(rangeMatch[1].toLowerCase());
      const endIdx = daysOrder.indexOf(rangeMatch[2].toLowerCase());
      const todayIdx = daysOrder.indexOf(dayAbbr);
      if (startIdx !== -1 && endIdx !== -1 && todayIdx !== -1) {
        if (startIdx <= endIdx) {
          if (todayIdx >= startIdx && todayIdx <= endIdx) return entry.hours;
        } else {
          if (todayIdx >= startIdx || todayIdx <= endIdx) return entry.hours;
        }
      }
    }
  }

  return null;
}

function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

/**
 * Trip Planner Calendar Engine Helpers
 * Calculates sequential weekdays and date labels given a tripStartDate (ISO "YYYY-MM-DD") and dayIndex (0-indexed).
 */
export function getFormattedDayDate(startDateStr: string | null | undefined, dayIndex: number): string | null {
  if (!startDateStr) return null;
  const parts = startDateStr.split('-').map(Number);
  if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return null;
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  if (isNaN(date.getTime())) return null;
  date.setDate(date.getDate() + dayIndex);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekday = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${weekday} • ${month} ${dayOfMonth}`;
}

/**
 * Checks whether a given dayIndex from a trip start date falls on a Friday.
 * Essential for Moroccan Medina and Friday prayer closure alerts.
 */
export function isFridayDay(startDateStr: string | null | undefined, dayIndex: number): boolean {
  if (!startDateStr) return false;
  const parts = startDateStr.split('-').map(Number);
  if (parts.length !== 3 || isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return false;
  const date = new Date(parts[0], parts[1] - 1, parts[2]);
  if (isNaN(date.getTime())) return false;
  date.setDate(date.getDate() + dayIndex);
  return date.getDay() === 5; // 5 is Friday
}

