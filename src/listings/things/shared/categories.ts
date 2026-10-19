/**
 * =========================================================================
 * THINGS TO DO — CATEGORY REGISTRY
 * =========================================================================
 * Every city stores its listings in 4 category files. This registry defines
 * them ONCE so every tool (quiz, city pages, contributor guides) reads the
 * same definitions.
 *
 * 'sport' has no quiz road: sport listings are reached through the dedicated
 * Sport flow (SportDualPath), not the 3-road decision-tree quiz.
 */

export type ThingsCategoryId = 'heritage' | 'nature' | 'wellness' | 'sport';

export interface ThingsCategoryDef {
  id: ThingsCategoryId;
  label: string;
  icon: string;
  /** Short description used in contributor guides */
  description: string;
  /** The category file name inside every city folder */
  file: string;
  /** The decision-tree quiz road this category feeds (null for sport) */
  quizRoad: 'road-heritage' | 'road-nature' | 'road-wellness' | null;
  /** Key fields that matter most for this category (all other fields stay available) */
  keyFields: string[];
}

export const THINGS_CATEGORIES: ThingsCategoryDef[] = [
  {
    id: 'heritage',
    label: 'Heritage & Culture',
    icon: '\u{1F3DB}\u{FE0F}',
    description: 'Monuments, ancient medinas, museums, kasbahs, souks, cultural tours, and historic sites.',
    file: 'heritage.things.ts',
    quizRoad: 'road-heritage',
    keyFields: ['walkInOkay', 'bookingRequired', 'hasLocalGuide', 'hasEnglishGuide', 'nearMedina', 'goodForRain', 'isWheelchairAccessible']
  },
  {
    id: 'nature',
    label: 'Nature & Adventure',
    icon: '\u{1F3DC}\u{FE0F}',
    description: 'Coast, mountains, canyons, oases, dunes, camel excursions, beaches, and outdoor landscapes.',
    file: 'nature.things.ts',
    quizRoad: 'road-nature',
    keyFields: ['energyLevel', 'distanceFromCenterKm', 'durationMinutes', 'fitnessLevel', 'hasSunsetView', 'transportMode']
  },
  {
    id: 'wellness',
    label: 'Wellness & Living Arts',
    icon: '\u{1F33F}',
    description: 'Hammams, spas, cooking classes, artisan workshops, and quiet botanical gardens.',
    file: 'wellness.things.ts',
    quizRoad: 'road-wellness',
    keyFields: ['hasPrivateOption', 'price', 'lifestyle', 'durationMinutes', 'isKidFriendly', 'goodForRain']
  },
  {
    id: 'sport',
    label: 'Sport & Active',
    icon: '\u{1F3BD}',
    description: 'Gyms, surf schools, kitesurf, quads, horse riding, and every practical or experience sport listing.',
    file: 'sport.things.ts',
    quizRoad: null,
    keyFields: ['sportIntent', 'facilityType', 'experienceType', 'skillLevel', 'hasDayPass', 'hasWomenOnlyHours', 'instructorAvailable']
  }
];

export const THINGS_CATEGORY_BY_ID: Record<ThingsCategoryId, ThingsCategoryDef> =
  THINGS_CATEGORIES.reduce((acc, c) => { acc[c.id] = c; return acc; }, {} as Record<ThingsCategoryId, ThingsCategoryDef>);