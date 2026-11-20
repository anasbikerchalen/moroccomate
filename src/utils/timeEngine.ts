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

import type { AppLanguage } from './localeRouting';

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

export interface MoroccoTimeParts {
  year: number;
  month: number; // 1-12
  day: number; // 1-31
  dayOfWeek: number; // 0 = Sunday ... 6 = Saturday
  mondayIndex: number; // 0 = Monday ... 6 = Sunday
  dayName: string; // 'sunday' | 'monday' | ...
  hours: number; // 0-23
  minutes: number; // 0-59
  currentMinutes: number; // 0-1439
}

const SUNDAY_FIRST_DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

const WEEKDAY_SHORT_MAP: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

const MINUTES_PER_DAY = 24 * 60;

/**
 * Resolve any Date into Morocco local wall-clock parts (Africa/Casablanca).
 * Falls back to local Date getters only if Intl timezone resolution fails.
 */
export function getMoroccoTimeParts(date: Date = new Date()): MoroccoTimeParts {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Casablanca',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    });

    const parts = formatter.formatToParts(date);
    const map: Record<string, string> = {};
    for (const part of parts) {
      if (part.type !== 'literal') {
        map[part.type] = part.value;
      }
    }

    const year = Number(map.year);
    const month = Number(map.month);
    const day = Number(map.day);
    const rawHour = Number(map.hour);
    const minute = Number(map.minute);
    const weekdayKey = (map.weekday || '').slice(0, 3).toLowerCase();
    const dayOfWeek = WEEKDAY_SHORT_MAP[weekdayKey];

    if (
      !Number.isNaN(year) &&
      !Number.isNaN(month) &&
      !Number.isNaN(day) &&
      !Number.isNaN(rawHour) &&
      !Number.isNaN(minute) &&
      dayOfWeek !== undefined
    ) {
      const hours = rawHour % 24;
      const mondayIndex = (dayOfWeek + 6) % 7;
      return {
        year,
        month,
        day,
        dayOfWeek,
        mondayIndex,
        dayName: SUNDAY_FIRST_DAYS[dayOfWeek],
        hours,
        minutes: minute,
        currentMinutes: hours * 60 + minute,
      };
    }
  } catch {
    // Fallback below if Intl fails
  }

  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    dayOfWeek,
    mondayIndex: (dayOfWeek + 6) % 7,
    dayName: SUNDAY_FIRST_DAYS[dayOfWeek],
    hours,
    minutes,
    currentMinutes: hours * 60 + minutes,
  };
}

/**
 * Convert a single time token ("07:00", "7:30", "11:00 PM", "24:00") to minutes since 00:00.
 */
function parseTimeToken(raw: string): number | null {
  const cleaned = raw.replace(/\([^)]*\)/g, '').trim();
  const match12 = cleaned.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (match12) {
    let hours = parseInt(match12[1], 10);
    const minutes = parseInt(match12[2], 10);
    const ampm = match12[3].toUpperCase();
    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;
    if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59) return null;
    return hours * 60 + minutes;
  }

  const match24 = cleaned.match(/^(\d{1,2}):(\d{2})$/);
  if (!match24) return null;
  const hours = parseInt(match24[1], 10);
  const minutes = parseInt(match24[2], 10);
  if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59) return null;
  return hours * 60 + minutes;
}

/**
 * Parse an hours string like "09:00 - 19:00" or "07:00 – 00:00" into [openMin, effectiveCloseMin].
 * When close <= open (e.g. "07:00 - 00:00" or "19:00 - 02:00"), close wraps past midnight (+1440).
 * Returns null if unparseable.
 */
function parseHoursRange(hoursStr: string): [number, number] | null {
  const trimmed = hoursStr.trim().toLowerCase();
  if (trimmed === '24 hours' || trimmed === '24/7' || trimmed === 'open 24 hours') {
    return [0, MINUTES_PER_DAY];
  }

  const parts = hoursStr.split(/\s*[-–—]\s*/).map(s => s.trim());
  if (parts.length !== 2) return null;

  const open = parseTimeToken(parts[0]);
  const close = parseTimeToken(parts[1]);
  if (open === null || close === null) return null;

  const effectiveClose = close <= open ? close + MINUTES_PER_DAY : close;
  return [open, effectiveClose];
}

function isClosedHoursText(hoursStr: string | null | undefined): boolean {
  if (!hoursStr) return false;
  const trimmed = hoursStr.trim().toLowerCase();
  return trimmed === 'closed' || trimmed === 'fermé' || trimmed === 'ferme' || trimmed === 'off';
}

function getEffectiveRanges(hoursStr: string): Array<[number, number]> {
  if (isClosedHoursText(hoursStr)) return [];
  const parts = hoursStr.split(',').map(s => s.trim()).filter(Boolean);
  const ranges: Array<[number, number]> = [];
  for (const part of parts) {
    const range = parseHoursRange(part);
    if (range) ranges.push(range);
  }
  return ranges;
}

/**
 * Check if Morocco date falls within Ramadan (approximate dates).
 * Stored as [startMonth, startDay, endMonth, endDay] for easy yearly updating.
 */
const RAMADAN_RANGES: [number, number, number, number][] = [
  [2, 18, 3, 19], // 2026 approximate
  [2, 7, 3, 8],   // 2027 approximate
];

function isRamadanParts(parts: MoroccoTimeParts): boolean {
  const currentMD = parts.month * 100 + parts.day;
  for (const [sm, sd, em, ed] of RAMADAN_RANGES) {
    const startMD = sm * 100 + sd;
    const endMD = em * 100 + ed;
    if (currentMD >= startMD && currentMD <= endMD) return true;
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

function isHolidayParts(parts: MoroccoTimeParts): boolean {
  return HOLIDAYS.some(([hm, hd]) => hm === parts.month && hd === parts.day);
}

const TIME_UI: Record<
  AppLanguage,
  {
    tomorrow: string;
    hoursUnconfirmed: string;
    ramadanUntil: (t: string) => string;
    ramadanNight: string;
    ramadanClosedHours: (a: string, b: string) => string;
    ramadanEveningWait: string;
    openEvening: string;
    openHoliday: (t: string) => string;
    holidayClosed: string;
    closesSoon: (t: string) => string;
    openNowCloses: (t: string) => string;
    fridayPrayer: (t: string) => string;
    closedTodayOpens: (day: string, t: string) => string;
    closedToday: string;
    open24h: string;
    closedOpens: (prefix: string, t: string) => string;
    openDaily: string;
    closedWord: string;
    fridayNote: string;
    openNowParen: (hrs: string) => string;
    opensFallback: (t: string) => string;
    regularHours: string;
    ramadanFtourSpecial: string;
    ramadanLunchSpecial: string;
    days: Record<string, string>;
  }
> = {
  en: {
    tomorrow: 'Tomorrow',
    hoursUnconfirmed: '⚪ Hours unconfirmed · Check WhatsApp',
    ramadanUntil: (t) => `🟣 Ramadan Hours · Open until ${t}`,
    ramadanNight: '🟣 Ramadan Night Market · Open 20:00–23:00',
    ramadanClosedHours: (a, b) => `🔴 Closed · Ramadan hours ${a}–${b}`,
    ramadanEveningWait: '🟣 Ramadan · Likely closed until evening',
    openEvening: '🟢 Open · Evening hours',
    openHoliday: (t) => `🟢 Open (Holiday) · Closes ${t}`,
    holidayClosed: '🔴 Holiday · Check back tomorrow',
    closesSoon: (t) => `🟡 Open · Closes soon (${t})`,
    openNowCloses: (t) => `🟢 Open Now · Closes ${t}`,
    fridayPrayer: (t) => `🔵 Friday Prayer · Reopens ${t}`,
    closedTodayOpens: (day, t) => `🔴 Closed Today · Opens ${day} ${t}`,
    closedToday: '🔴 Closed Today',
    open24h: '🟢 Open 24 Hours',
    closedOpens: (prefix, t) => `🔴 Closed · Opens ${prefix}${t}`,
    openDaily: 'Open Daily',
    closedWord: 'Closed',
    fridayNote: 'May pause for Friday prayer (12:30–14:30)',
    openNowParen: (hrs) => `Open Now (${hrs})`,
    opensFallback: (t) => `Opens ${t}`,
    regularHours: 'regular hours',
    ramadanFtourSpecial: 'Ramadan: Special Iftar/Ftour buffet & extended evening dining.',
    ramadanLunchSpecial: 'Open for normal lunch service during Ramadan.',
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
  },
  fr: {
    tomorrow: 'Demain',
    hoursUnconfirmed: '⚪ Horaires à confirmer · Voir WhatsApp',
    ramadanUntil: (t) => `🟣 Horaires Ramadan · Ouvert jusqu’à ${t}`,
    ramadanNight: '🟣 Soirée Ramadan · Ouvert 20:00–23:00',
    ramadanClosedHours: (a, b) => `🔴 Fermé · Horaires Ramadan ${a}–${b}`,
    ramadanEveningWait: '🟣 Ramadan · Probablement fermé jusqu’au soir',
    openEvening: '🟢 Ouvert · Horaires du soir',
    openHoliday: (t) => `🟢 Ouvert (Jour férié) · Ferme à ${t}`,
    holidayClosed: '🔴 Jour férié · Revenir demain',
    closesSoon: (t) => `🟡 Ouvert · Ferme bientôt (${t})`,
    openNowCloses: (t) => `🟢 Ouvert · Ferme à ${t}`,
    fridayPrayer: (t) => `🔵 Prière du vendredi · Réouvre à ${t}`,
    closedTodayOpens: (day, t) => `🔴 Fermé aujourd’hui · Ouvre ${day} à ${t}`,
    closedToday: '🔴 Fermé aujourd’hui',
    open24h: '🟢 Ouvert 24h/24',
    closedOpens: (prefix, t) => `🔴 Fermé · Ouvre ${prefix}à ${t}`,
    openDaily: 'Ouvert tous les jours',
    closedWord: 'Fermé',
    fridayNote: 'Pause possible pour la prière du vendredi (12:30–14:30)',
    openNowParen: (hrs) => `Ouvert (${hrs})`,
    opensFallback: (t) => `Ouvre à ${t}`,
    regularHours: 'horaires habituels',
    ramadanFtourSpecial: 'Ramadan : Buffet Ftour spécial et service prolongé en soirée.',
    ramadanLunchSpecial: 'Ouvert pour le déjeuner habituel pendant le Ramadan.',
    days: {
      monday: 'lundi',
      tuesday: 'mardi',
      wednesday: 'mercredi',
      thursday: 'jeudi',
      friday: 'vendredi',
      saturday: 'samedi',
      sunday: 'dimanche',
    },
  },
  es: {
    tomorrow: 'Mañana',
    hoursUnconfirmed: '⚪ Horario por confirmar · Consultar WhatsApp',
    ramadanUntil: (t) => `🟣 Horario de Ramadán · Abierto hasta las ${t}`,
    ramadanNight: '🟣 Noche de Ramadán · Abierto 20:00–23:00',
    ramadanClosedHours: (a, b) => `🔴 Cerrado · Horario Ramadán ${a}–${b}`,
    ramadanEveningWait: '🟣 Ramadán · Cerrado hasta la tarde',
    openEvening: '🟢 Abierto · Horario de tarde',
    openHoliday: (t) => `🟢 Abierto (Festivo) · Cierra a las ${t}`,
    holidayClosed: '🔴 Día festivo · Vuelve mañana',
    closesSoon: (t) => `🟡 Abierto · Cierra pronto (${t})`,
    openNowCloses: (t) => `🟢 Abierto ahora · Cierra ${t}`,
    fridayPrayer: (t) => `🔵 Rezo del viernes · Reabre ${t}`,
    closedTodayOpens: (day, t) => `🔴 Cerrado hoy · Abre ${day} a las ${t}`,
    closedToday: '🔴 Cerrado hoy',
    open24h: '🟢 Abierto 24 horas',
    closedOpens: (prefix, t) => `🔴 Cerrado · Abre ${prefix}${t}`,
    openDaily: 'Abierto todos los días',
    closedWord: 'Cerrado',
    fridayNote: 'Puede pausar por el rezo del viernes (12:30–14:30)',
    openNowParen: (hrs) => `Abierto (${hrs})`,
    opensFallback: (t) => `Abre ${t}`,
    regularHours: 'horario habitual',
    ramadanFtourSpecial: 'Ramadán: Buffet especial de Ftour y horario nocturno ampliado.',
    ramadanLunchSpecial: 'Abierto al mediodía para almuerzos durante Ramadán.',
    days: {
      monday: 'lunes',
      tuesday: 'martes',
      wednesday: 'miércoles',
      thursday: 'jueves',
      friday: 'viernes',
      saturday: 'sábado',
      sunday: 'domingo',
    },
  },
  de: {
    tomorrow: 'Morgen',
    hoursUnconfirmed: '⚪ Zeiten unbestätigt · WhatsApp prüfen',
    ramadanUntil: (t) => `🟣 Ramadan-Zeiten · Geöffnet bis ${t}`,
    ramadanNight: '🟣 Ramadan-Abend · Geöffnet 20:00–23:00',
    ramadanClosedHours: (a, b) => `🔴 Geschlossen · Ramadan ${a}–${b}`,
    ramadanEveningWait: '🟣 Ramadan · Vermutlich bis abends geschlossen',
    openEvening: '🟢 Geöffnet · Abendzeiten',
    openHoliday: (t) => `🟢 Geöffnet (Feiertag) · Schließt ${t}`,
    holidayClosed: '🔴 Feiertag · Morgen wieder geöffnet',
    closesSoon: (t) => `🟡 Geöffnet · Schließt bald (${t})`,
    openNowCloses: (t) => `🟢 Jetzt geöffnet · Schließt ${t}`,
    fridayPrayer: (t) => `🔵 Freitagsgebet · Öffnet wieder ${t}`,
    closedTodayOpens: (day, t) => `🔴 Heute geschlossen · Öffnet ${day} ${t}`,
    closedToday: '🔴 Heute geschlossen',
    open24h: '🟢 24 Stunden geöffnet',
    closedOpens: (prefix, t) => `🔴 Geschlossen · Öffnet ${prefix}${t}`,
    openDaily: 'Täglich geöffnet',
    closedWord: 'Geschlossen',
    fridayNote: 'Eventuelle Pause zum Freitagsgebet (12:30–14:30)',
    openNowParen: (hrs) => `Jetzt geöffnet (${hrs})`,
    opensFallback: (t) => `Öffnet ${t}`,
    regularHours: 'reguläre Zeiten',
    ramadanFtourSpecial: 'Ramadan: Spezielles Iftar/Ftour-Buffet & verlängerte Abendzeiten.',
    ramadanLunchSpecial: 'Während des Ramadan regulär zum Mittagessen geöffnet.',
    days: {
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
    },
  },
  ar: {
    tomorrow: 'غداً',
    hoursUnconfirmed: '⚪ الأوقات غير مؤكدة · تحقق عبر واتساب',
    ramadanUntil: (t) => `🟣 أوقات رمضان · مفتوح حتى ${t}`,
    ramadanNight: '🟣 ليالي رمضان · مفتوح 20:00–23:00',
    ramadanClosedHours: (a, b) => `🔴 مغلق · أوقات رمضان ${a}–${b}`,
    ramadanEveningWait: '🟣 رمضان · مغلق غالباً حتى المساء',
    openEvening: '🟢 مفتوح · أوقات مسائية',
    openHoliday: (t) => `🟢 مفتوح (عطلة) · يغلق ${t}`,
    holidayClosed: '🔴 عطلة رسمية · يفتح غداً',
    closesSoon: (t) => `🟡 مفتوح · يغلق قريباً (${t})`,
    openNowCloses: (t) => `🟢 مفتوح الآن · يغلق ${t}`,
    fridayPrayer: (t) => `🔵 صلاة الجمعة · يعيد الفتح ${t}`,
    closedTodayOpens: (day, t) => `🔴 مغلق اليوم · يفتح ${day} ${t}`,
    closedToday: '🔴 مغلق اليوم',
    open24h: '🟢 مفتوح 24 ساعة',
    closedOpens: (prefix, t) => `🔴 مغلق · يفتح ${prefix}${t}`,
    openDaily: 'مفتوح يومياً',
    closedWord: 'مغلق',
    fridayNote: 'قد يتوقف مؤقتاً وقت صلاة الجمعة (12:30–14:30)',
    openNowParen: (hrs) => `مفتوح الآن (${hrs})`,
    opensFallback: (t) => `يفتح ${t}`,
    regularHours: 'الأوقات المعتادة',
    ramadanFtourSpecial: 'رمضان: بوفيه إفطار خاص وساعات عمل ممتدة مساءً.',
    ramadanLunchSpecial: 'مفتوح لتقديم وجبة الغداء للزوار خلال رمضان.',
    days: {
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
      friday: 'الجمعة',
      saturday: 'السبت',
      sunday: 'الأحد',
    },
  },
};

function findNextOpenInfo(
  normalizedHours: HoursEntry[],
  currentDayOfWeek: number,
  lang: AppLanguage = 'en'
): { dayLabel: string; openMinutes: number; isTomorrow: boolean } | null {
  const ui = TIME_UI[lang] || TIME_UI.en;
  for (let offset = 1; offset <= 7; offset++) {
    const nextIdx = (currentDayOfWeek + offset) % 7;
    const nextDayName = SUNDAY_FIRST_DAYS[nextIdx];
    const hrs = findHoursForToday(normalizedHours, nextDayName);
    if (!hrs || isClosedHoursText(hrs)) continue;
    const ranges = getEffectiveRanges(hrs);
    if (ranges.length > 0) {
      const sorted = [...ranges].sort((a, b) => a[0] - b[0]);
      const dayLabel =
        offset === 1
          ? ui.tomorrow
          : ui.days[nextDayName] || nextDayName.charAt(0).toUpperCase() + nextDayName.slice(1);
      return { dayLabel, openMinutes: sorted[0][0], isTomorrow: offset === 1 };
    }
  }
  return null;
}

/**
 * Compute the live status of a place in Morocco time (Africa/Casablanca).
 *
 * @param openingHours  Array of { day, hours } or single range string
 * @param fridayHours   Optional Friday prayer split, e.g. "09:00 - 12:00, 15:00 - 19:00"
 * @param ramadanHours  Optional Ramadan hours, e.g. "09:00 - 15:00"
 * @param now           Current date/time (defaults to now, injectable for testing)
 */
export function getShopStatus(
  openingHours: HoursEntry[] | string,
  fridayHours?: string,
  ramadanHours?: string,
  now: Date = new Date(),
  lang: AppLanguage = 'en'
): ShopStatus {
  const ui = TIME_UI[lang] || TIME_UI.en;

  // Normalize openingHours if it's a string, or undefined/null, or not an array
  let normalizedHours: HoursEntry[] = [];
  if (Array.isArray(openingHours) && openingHours.length > 0) {
    normalizedHours = openingHours;
  } else if (typeof openingHours === 'string' && openingHours.trim() !== '') {
    let hoursStr = openingHours.trim();

    const convert12to24 = (time12: string): string => {
      const cleaned = time12.replace(/\([^)]*\)/g, '').trim();
      const match = cleaned.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
      if (!match) return cleaned;
      let hours = parseInt(match[1], 10);
      const minutes = match[2];
      const ampm = match[3].toUpperCase();
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      return `${hours.toString().padStart(2, '0')}:${minutes}`;
    };

    const parts = hoursStr.split(/\s*[-–—]\s*/);
    if (parts.length === 2) {
      const open = convert12to24(parts[0]);
      const close = convert12to24(parts[1]);
      hoursStr = `${open} - ${close}`;
    }

    normalizedHours = [{ day: 'Daily', hours: hoursStr }];
  } else {
    return {
      status: 'unknown',
      label: ui.hoursUnconfirmed,
      color: 'stone',
    };
  }

  const timeParts = getMoroccoTimeParts(now);
  const { dayName, dayOfWeek, currentMinutes } = timeParts;
  const isFriday = dayName === 'friday';
  const yesterdayName = SUNDAY_FIRST_DAYS[(dayOfWeek + 6) % 7];

  // --- RAMADAN CHECK ---
  if (isRamadanParts(timeParts)) {
    if (ramadanHours) {
      const ranges = getEffectiveRanges(ramadanHours);
      if (ranges.length > 0) {
        for (const [open, effectiveClose] of ranges) {
          if (currentMinutes >= open && currentMinutes < effectiveClose) {
            return {
              status: 'ramadan_day',
              label: ui.ramadanUntil(formatMinutes(effectiveClose)),
              color: 'purple',
            };
          }
          if (effectiveClose > MINUTES_PER_DAY && currentMinutes + MINUTES_PER_DAY < effectiveClose) {
            return {
              status: 'ramadan_day',
              label: ui.ramadanUntil(formatMinutes(effectiveClose)),
              color: 'purple',
            };
          }
        }
        if (currentMinutes >= 20 * 60 && currentMinutes < 23 * 60) {
          return {
            status: 'ramadan_night',
            label: ui.ramadanNight,
            color: 'purple',
          };
        }
        const [firstOpen, firstClose] = ranges[0];
        return {
          status: 'closed',
          label: ui.ramadanClosedHours(formatMinutes(firstOpen), formatMinutes(firstClose)),
          color: 'red',
        };
      }
    }
    if (currentMinutes < 20 * 60) {
      return {
        status: 'ramadan_day',
        label: ui.ramadanEveningWait,
        color: 'purple',
      };
    }
    return {
      status: 'open',
      label: ui.openEvening,
      color: 'emerald',
    };
  }

  // --- HOLIDAY CHECK ---
  if (isHolidayParts(timeParts)) {
    const hrs = findHoursForToday(normalizedHours, dayName);
    if (hrs && !isClosedHoursText(hrs)) {
      const ranges = getEffectiveRanges(hrs);
      for (const [open, effectiveClose] of ranges) {
        if (currentMinutes >= open && currentMinutes < effectiveClose) {
          return {
            status: 'open',
            label: ui.openHoliday(formatMinutes(effectiveClose)),
            color: 'emerald',
          };
        }
      }
    }
    return {
      status: 'holiday',
      label: ui.holidayClosed,
      color: 'red',
    };
  }

  // --- YESTERDAY OVERNIGHT SPILLOVER (00:00 - 07:59) ---
  if (currentMinutes < 8 * 60) {
    const yesterdayHrs =
      yesterdayName === 'friday' && fridayHours
        ? fridayHours
        : findHoursForToday(normalizedHours, yesterdayName);
    if (yesterdayHrs && !isClosedHoursText(yesterdayHrs)) {
      const yesterdayRanges = getEffectiveRanges(yesterdayHrs);
      for (const [open, effectiveClose] of yesterdayRanges) {
        if (effectiveClose > MINUTES_PER_DAY) {
          const shiftedNow = currentMinutes + MINUTES_PER_DAY;
          if (shiftedNow >= open && shiftedNow < effectiveClose) {
            if (effectiveClose - shiftedNow <= 60) {
              return {
                status: 'closes_soon',
                label: ui.closesSoon(formatMinutes(effectiveClose)),
                color: 'amber',
              };
            }
            return {
              status: 'open',
              label: ui.openNowCloses(formatMinutes(effectiveClose)),
              color: 'emerald',
            };
          }
        }
      }
    }
  }

  // --- FRIDAY PRAYER PAUSE (12:00–14:30) ---
  if (isFriday && fridayHours && !isClosedHoursText(fridayHours)) {
    const ranges = getEffectiveRanges(fridayHours);
    for (const [open, effectiveClose] of ranges) {
      if (currentMinutes >= open && currentMinutes < effectiveClose) {
        if (effectiveClose - currentMinutes <= 60) {
          return {
            status: 'closes_soon',
            label: ui.closesSoon(formatMinutes(effectiveClose)),
            color: 'amber',
          };
        }
        return {
          status: 'open',
          label: ui.openNowCloses(formatMinutes(effectiveClose)),
          color: 'emerald',
        };
      }
    }
    if (currentMinutes >= 12 * 60 && currentMinutes < 14 * 60 + 30) {
      const afternoonRange = ranges.find(([open]) => open >= 14 * 60);
      const reopenTime = afternoonRange ? afternoonRange[0] : 15 * 60;
      return {
        status: 'friday_prayer',
        label: ui.fridayPrayer(formatMinutes(reopenTime)),
        color: 'blue',
      };
    }
  }

  // --- NORMAL HOURS CHECK ---
  const hrs = findHoursForToday(normalizedHours, dayName);
  if (hrs) {
    if (isClosedHoursText(hrs)) {
      const nextOpen = findNextOpenInfo(normalizedHours, dayOfWeek, lang);
      return {
        status: 'closed',
        label: nextOpen
          ? ui.closedTodayOpens(nextOpen.dayLabel, formatMinutes(nextOpen.openMinutes))
          : ui.closedToday,
        color: 'red',
      };
    }

    const ranges = getEffectiveRanges(hrs);
    let nextOpenMinutes: number | null = null;

    for (const [open, effectiveClose] of ranges) {
      if (open === 0 && effectiveClose === MINUTES_PER_DAY) {
        return {
          status: 'open',
          label: ui.open24h,
          color: 'emerald',
        };
      }

      if (currentMinutes >= open && currentMinutes < effectiveClose) {
        if (effectiveClose - currentMinutes <= 60) {
          return {
            status: 'closes_soon',
            label: ui.closesSoon(formatMinutes(effectiveClose)),
            color: 'amber',
          };
        }
        return {
          status: 'open',
          label: ui.openNowCloses(formatMinutes(effectiveClose)),
          color: 'emerald',
        };
      }

      if (open > currentMinutes) {
        if (nextOpenMinutes === null || open < nextOpenMinutes) {
          nextOpenMinutes = open;
        }
      }
    }

    if (nextOpenMinutes !== null) {
      return {
        status: 'closed',
        label: ui.closedOpens('', formatMinutes(nextOpenMinutes)),
        color: 'red',
      };
    }

    if (ranges.length > 0) {
      const nextOpen = findNextOpenInfo(normalizedHours, dayOfWeek, lang);
      if (nextOpen) {
        const prefix = nextOpen.isTomorrow ? '' : `${nextOpen.dayLabel} `;
        return {
          status: 'closed',
          label: ui.closedOpens(prefix, formatMinutes(nextOpen.openMinutes)),
          color: 'red',
        };
      }

      return {
        status: 'closed',
        label: ui.closedOpens('', formatMinutes(ranges[0][0])),
        color: 'red',
      };
    }
  }

  return {
    status: 'unknown',
    label: ui.hoursUnconfirmed,
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
    const d = entry.day.toLowerCase().trim();

    if (d === dayName || d === dayAbbr || d === dayAbbrCap) return entry.hours;
    if (d === 'daily' || d === 'everyday' || d === 'every day') return entry.hours;
    if ((d === 'weekdays' || d === 'weekday') && dayName !== 'saturday' && dayName !== 'sunday') return entry.hours;
    if ((d === 'weekends' || d === 'weekend') && (dayName === 'saturday' || dayName === 'sunday')) return entry.hours;

    const rangeMatch = d.match(/^([a-z]{3})\s*[-–—]\s*([a-z]{3})$/i);
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
  const normalized = ((minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  const h = Math.floor(normalized / 60);
  const m = normalized % 60;
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

export interface DayScheduleItem {
  dayName: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  shortDay: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  hoursText: string;
  isToday: boolean;
  isClosed: boolean;
  note?: string;
}

export interface EatScheduleResult {
  schedule: DayScheduleItem[];
  statusLabel: string;
  statusBadgeColor: 'emerald' | 'amber' | 'blue' | 'purple' | 'red' | 'stone';
  isOpenNow: boolean;
  todayHours: string;
  specialNote?: string;
}

const WEEK_DAYS: Array<{
  name: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  short: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  key: string;
}> = [
  { name: 'Monday', short: 'Mon', key: 'monday' },
  { name: 'Tuesday', short: 'Tue', key: 'tuesday' },
  { name: 'Wednesday', short: 'Wed', key: 'wednesday' },
  { name: 'Thursday', short: 'Thu', key: 'thursday' },
  { name: 'Friday', short: 'Fri', key: 'friday' },
  { name: 'Saturday', short: 'Sat', key: 'saturday' },
  { name: 'Sunday', short: 'Sun', key: 'sunday' },
];

export interface EatWeeklyScheduleInput {
  openTime?: string;
  closeTime?: string;
  openingHours?: any;
  fridayHours?: any;
  ramadanHours?: any;
  weeklySchedule?: Array<{
    day: string;
    open?: string;
    close?: string;
    openTime?: string;
    closeTime?: string;
    isClosed?: boolean;
    note?: string;
  }>;
  closedDays?: string[];
  ramadanFriendly?: string;
}

export function getEatWeeklySchedule(
  listing: EatWeeklyScheduleInput,
  now: Date = new Date(),
  lang: AppLanguage = 'en'
): EatScheduleResult {
  const ui = TIME_UI[lang] || TIME_UI.en;
  const timeParts = getMoroccoTimeParts(now);
  const currentDayIndex = timeParts.mondayIndex; // Monday = 0, Sunday = 6

  const fHours = typeof listing.fridayHours === 'string' ? listing.fridayHours : undefined;
  const rHours = typeof listing.ramadanHours === 'string' ? listing.ramadanHours : undefined;

  const defaultHours =
    listing.openTime && listing.closeTime
      ? `${listing.openTime} – ${listing.closeTime}`
      : ui.openDaily;
  const closedDaysList = Array.isArray(listing.closedDays)
    ? listing.closedDays.map(d => String(d).toLowerCase().trim())
    : [];

  const resolvedDailyRanges: HoursEntry[] = [];

  const schedule: DayScheduleItem[] = WEEK_DAYS.map((dayObj, idx) => {
    const isToday = idx === currentDayIndex;
    let hoursText = defaultHours;
    let rawRangeForEngine =
      listing.openTime && listing.closeTime ? `${listing.openTime} - ${listing.closeTime}` : '';
    let isClosed = false;
    let note: string | undefined = undefined;

    // 1. Check custom weeklySchedule override (supports open/close & openTime/closeTime)
    if (Array.isArray(listing.weeklySchedule)) {
      const match = listing.weeklySchedule.find(s => {
        if (!s || typeof s.day !== 'string') return false;
        const d = s.day.toLowerCase().trim();
        return d === dayObj.key || d === dayObj.short.toLowerCase();
      });
      if (match) {
        const dayOpen = match.open || match.openTime || listing.openTime;
        const dayClose = match.close || match.closeTime || listing.closeTime;
        if (match.isClosed) {
          isClosed = true;
          hoursText = ui.closedWord;
          rawRangeForEngine = 'Closed';
        } else if (dayOpen && dayClose) {
          hoursText = `${dayOpen} – ${dayClose}`;
          rawRangeForEngine = `${dayOpen} - ${dayClose}`;
        }
        note = match.note;
      }
    }

    // 2. Check closedDays array (unless weeklySchedule explicitly set an open shift, union closed flags)
    if (!isClosed && (closedDaysList.includes(dayObj.key) || closedDaysList.includes(dayObj.short.toLowerCase()))) {
      isClosed = true;
      hoursText = ui.closedWord;
      rawRangeForEngine = 'Closed';
    }

    // 3. Preserve curated Friday note if present; otherwise apply Friday prayer guidance
    if (dayObj.key === 'friday' && !isClosed && !note) {
      note = ui.fridayNote;
    }

    if (rawRangeForEngine) {
      resolvedDailyRanges.push({ day: dayObj.name, hours: rawRangeForEngine });
    }

    return {
      dayName: dayObj.name,
      shortDay: dayObj.short,
      hoursText,
      isToday,
      isClosed,
      note,
    };
  });

  // Compute live status from explicit openingHours OR the resolved 7-day schedule
  let statusCalc: ShopStatus | null = null;
  if (
    listing.openingHours &&
    (typeof listing.openingHours === 'string'
      ? listing.openingHours.trim() !== ''
      : Array.isArray(listing.openingHours) && listing.openingHours.length > 0)
  ) {
    statusCalc = getShopStatus(listing.openingHours, fHours, rHours, now, lang);
  } else if (resolvedDailyRanges.length > 0) {
    statusCalc = getShopStatus(resolvedDailyRanges, fHours, rHours, now, lang);
  }

  const todayItem = schedule[currentDayIndex];
  const isOpenNow =
    statusCalc?.status === 'open' ||
    statusCalc?.status === 'closes_soon' ||
    statusCalc?.status === 'ramadan_day' ||
    statusCalc?.status === 'ramadan_night';

  const statusLabel =
    statusCalc?.label ||
    (isOpenNow
      ? ui.openNowParen(todayItem.hoursText)
      : todayItem.isClosed
        ? ui.closedToday.replace(/^🔴\s*/u, '')
        : ui.opensFallback(listing.openTime || ui.regularHours));
  const statusBadgeColor: EatScheduleResult['statusBadgeColor'] =
    statusCalc?.color || (isOpenNow ? 'emerald' : 'stone');

  let specialNote: string | undefined = undefined;
  if (listing.ramadanFriendly === 'special-ftour') {
    specialNote = ui.ramadanFtourSpecial;
  } else if (listing.ramadanFriendly === 'serves-lunch') {
    specialNote = ui.ramadanLunchSpecial;
  }

  return {
    schedule,
    statusLabel,
    statusBadgeColor,
    isOpenNow,
    todayHours: todayItem.hoursText,
    specialNote,
  };
}

/**
 * Unified live status resolver for cards/filters across all categories.
 * Respects openingHours, weeklySchedule, closedDays, openTime/closeTime, and Morocco time.
 */
export function getListingLiveStatus(item: any, now: Date = new Date()): ShopStatus | null {
  if (!item) return null;
  const rawOpeningHours = item.openingHours ?? item.ui?.openingHours;
  const fridayHours = typeof (item.fridayHours ?? item.ui?.fridayHours) === 'string'
    ? (item.fridayHours ?? item.ui?.fridayHours)
    : undefined;
  const ramadanHours = typeof (item.ramadanHours ?? item.ui?.ramadanHours) === 'string'
    ? (item.ramadanHours ?? item.ui?.ramadanHours)
    : undefined;

  if (
    rawOpeningHours &&
    (typeof rawOpeningHours === 'string'
      ? rawOpeningHours.trim() !== ''
      : Array.isArray(rawOpeningHours) && rawOpeningHours.length > 0)
  ) {
    return getShopStatus(rawOpeningHours, fridayHours, ramadanHours, now);
  }

  const weeklySchedule = item.weeklySchedule || item.ui?.weeklySchedule;
  const openTime = item.openTime || item.ui?.openTime;
  const closeTime = item.closeTime || item.ui?.closeTime;
  const closedDays = item.closedDays || item.filter?.closedDays;

  if ((openTime && closeTime) || (Array.isArray(weeklySchedule) && weeklySchedule.length > 0)) {
    const result = getEatWeeklySchedule(
      {
        openTime,
        closeTime,
        weeklySchedule,
        closedDays,
        fridayHours,
        ramadanHours,
      },
      now
    );
    const statusMap: Record<EatScheduleResult['statusBadgeColor'], ShopStatusValue> = {
      emerald: 'open',
      amber: 'closes_soon',
      blue: 'friday_prayer',
      purple: 'ramadan_day',
      red: 'closed',
      stone: 'unknown',
    };
    return {
      status: statusMap[result.statusBadgeColor] || (result.isOpenNow ? 'open' : 'closed'),
      label: result.statusLabel,
      color: result.statusBadgeColor,
    };
  }

  return null;
}
