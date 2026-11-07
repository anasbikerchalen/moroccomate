/**
 * MASTER TAG REGISTRY
 * Centralized dictionary for all content categorization.
 * This ensures consistency across cities for future ML filtering.
 */

export const CUISINES = [
  'Moroccan',
  'Fusion',
  'Traditional',
  'French',
  'International',
  'Seafood',
  'Mediterranean',
  'Standard',
  'Café'
] as const;

export type Cuisine = typeof CUISINES[number];

export const VIBES = [
  'Rooftop',
  'Chic',
  'Social',
  'Chaotic',
  'Authentic',
  'Luxury',
  'Quiet',
  'View',
  'Breezy',
  'Modern'
] as const;

export type Vibe = typeof VIBES[number];

export const BOOKING_STATUS = ['ahead', 'walk-in'] as const;
export type BookingStatus = typeof BOOKING_STATUS[number];

export const DIETARY = ['veggie', 'no-alcohol', 'halal'] as const;
export type Dietary = typeof DIETARY[number];
