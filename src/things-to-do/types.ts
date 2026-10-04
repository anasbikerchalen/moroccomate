/**
 * =========================================================================
 * MOROCCO FINDER - THINGS TO DO MODULE (TYPES & REUSABLE LIBRARIES)
 * =========================================================================
 *
 * Canonical, data-driven activity architecture matching the Things To Do
 * backend specification (one activity listing system for every activity:
 * cooking class, desert excursion, surf lesson, medina walk, hammam, etc.).
 *
 * Reusable libraries (create once, use everywhere):
 *  - Activity Types      (ACTIVITY_TYPE_LIBRARY)
 *  - Meeting options     (MEETING_OPTIONS)
 *  - Fitness levels      (FITNESS_LEVELS)
 */

import type { CityId } from '../listings/types';

// Re-export so sibling modules (template.ts, components) can import CityId from here
export type { CityId };

// ─────────────────────────────────────────────────────────
// 1. Activity Category Groups (matching the national tourism
//    office areas: culture/medinas, nature, sport, beach,
//    gastronomy, wellness)
// ─────────────────────────────────────────────────────────
export type ActivityCategoryGroup =
  | 'culture'
  | 'food'
  | 'nature'
  | 'adventure'
  | 'wellness'
  | 'beach';

// ─────────────────────────────────────────────────────────
// 2. Activity Type (reusable library entry)
//    Category + Activity Type are intentionally separate:

export const ACTIVITY_TYPE_LIBRARY: ActivityType[] = [
  // Culture
  { id: 'medina-walk', name: 'Medina Walk', icon: 'medina', category: 'culture' },
  { id: 'historical-tour', name: 'Historical Tour', icon: 'landmark', category: 'culture' },
  { id: 'museum-visit', name: 'Museum Visit', icon: 'museum', category: 'culture' },
  { id: 'monument-visit', name: 'Monument Visit', icon: 'monument', category: 'culture' },
  { id: 'art-culture', name: 'Art & Culture', icon: 'palette', category: 'culture' },
  { id: 'traditional-music', name: 'Traditional Music', icon: 'music', category: 'culture' },

  // Food
  { id: 'cooking-class', name: 'Cooking Class', icon: 'cooking', category: 'food' },
  { id: 'food-tour', name: 'Food Tour', icon: 'food', category: 'food' },
  { id: 'market-food-experience', name: 'Market Food Experience', icon: 'market', category: 'food' },
  { id: 'tea-experience', name: 'Tea Experience', icon: 'tea', category: 'food' },

  // Nature
  { id: 'hiking', name: 'Hiking', icon: 'hiking', category: 'nature' },
  { id: 'nature-walk', name: 'Nature Walk', icon: 'leaf', category: 'nature' },
  { id: 'waterfall-visit', name: 'Waterfall Visit', icon: 'waterfall', category: 'nature' },
  { id: 'mountain-experience', name: 'Mountain Experience', icon: 'mountain', category: 'nature' },
  { id: 'desert-experience', name: 'Desert Experience', icon: 'tent', category: 'nature' },

  // Adventure / Sport
  { id: 'surfing', name: 'Surfing', icon: 'surf', category: 'adventure' },
  { id: 'kitesurfing', name: 'Kitesurfing', icon: 'surf', category: 'adventure' },
  { id: 'quad-atv', name: 'Quad / ATV', icon: 'atv', category: 'adventure' },
  { id: '4x4-excursion', name: '4x4 Excursion', icon: 'car', category: 'adventure' },
  { id: 'camel-ride', name: 'Camel Ride', icon: 'camel', category: 'adventure' },
  { id: 'horse-riding', name: 'Horse Riding', icon: 'horse', category: 'adventure' },
  { id: 'cycling', name: 'Cycling', icon: 'bike', category: 'adventure' },
  { id: 'climbing', name: 'Climbing', icon: 'mountain', category: 'adventure' },
  { id: 'rafting', name: 'Rafting', icon: 'raft', category: 'adventure' },

  // Wellness
  { id: 'hammam', name: 'Hammam', icon: 'hammam', category: 'wellness' },
  { id: 'spa', name: 'Spa', icon: 'spa', category: 'wellness' },
  { id: 'massage', name: 'Massage', icon: 'spa', category: 'wellness' },
  { id: 'wellness-experience', name: 'Wellness Experience', icon: 'leaf', category: 'wellness' },

  // Beach / Water
  { id: 'boat-trip', name: 'Boat Trip', icon: 'boat', category: 'beach' },
  { id: 'swimming', name: 'Swimming', icon: 'waves', category: 'beach' },
  { id: 'diving', name: 'Diving', icon: 'waves', category: 'beach' },
  { id: 'fishing', name: 'Fishing', icon: 'fish', category: 'beach' },
  { id: 'kayaking', name: 'Kayaking', icon: 'kayak', category: 'beach' },
  { id: 'water-sports', name: 'Water Sports', icon: 'waves', category: 'beach' },
];

// ─────────────────────────────────────────────────────────
// 3. "What you'll experience" (dynamic icon library)
// ─────────────────────────────────────────────────────────
export interface ActivityExperience {
  id: string;
  name: string;
  icon?: string;
  description?: string;
}

// ─────────────────────────────────────────────────────────
// 5. Meeting / Pickup type
// ─────────────────────────────────────────────────────────
export type MeetingOptionId =
  | 'meeting_point'
  | 'hotel_pickup'
  | 'airport_pickup'
  | 'pickup_available'
  | 'self_arrival'
  | 'multiple_pickup_points';

export interface MeetingOption {
  id: MeetingOptionId;
  name: string;
  icon: string;
}

export const MEETING_OPTIONS: MeetingOption[] = [
  { id: 'meeting_point', name: 'Meeting point', icon: 'map-pin' },
  { id: 'hotel_pickup', name: 'Hotel pickup', icon: 'hotel' },
  { id: 'airport_pickup', name: 'Airport pickup', icon: 'plane' },
  { id: 'pickup_available', name: 'Pickup available', icon: 'car' },
  { id: 'self_arrival', name: 'Self-arrival', icon: 'walking' },
  { id: 'multiple_pickup_points', name: 'Multiple pickup points', icon: 'map-pin' },
];

// ─────────────────────────────────────────────────────────
// 6. Pricing (structured)
// ─────────────────────────────────────────────────────────
export type ActivityPricingType = 'fixed' | 'from' | 'free' | 'contact';
export type ActivityPriceUnit = 'per_person' | 'per_group' | 'per_vehicle' | 'per_session';

export interface ActivityPricing {
  pricing_type: ActivityPricingType;
  price: number;
  currency: string; // 'MAD'
  price_unit: ActivityPriceUnit;
}

// ─────────────────────────────────────────────────────────
// 7. Payment
// ─────────────────────────────────────────────────────────
export type ActivityPaymentMethodId = 'cash' | 'visa' | 'mastercard' | 'contactless' | 'mobile_payment';

export interface ActivityPayment {
  cash_currency?: string;
  cards_accepted?: boolean;
  methods: ActivityPaymentMethodId[];
  custom_note?: string;
}


// ─────────────────────────────────────────────────────────
// 10. Included / Not included / What to bring (dynamic)
// ─────────────────────────────────────────────────────────
export interface IncludedItem {
  id: string;
  name: string;
  icon?: string;
}

export interface ExcludedItem {
  id: string;
  name: string;
}

export interface RequirementItem {
  id: string;
  name: string;
  icon?: string;
}

// ─────────────────────────────────────────────────────────
// 11. Suitability (age / children / fitness)
// ─────────────────────────────────────────────────────────
export type FitnessLevel = 'easy' | 'moderate' | 'challenging';

export interface ActivitySuitability {
  minimum_age?: number;
  maximum_age?: number;
  children_allowed?: boolean;
  infants_allowed?: boolean;
  fitness_level?: FitnessLevel;
}

export const FITNESS_LEVELS: { id: FitnessLevel; name: string }[] = [
  { id: 'easy', name: 'Easy' },
  { id: 'moderate', name: 'Moderate' },
  { id: 'challenging', name: 'Challenging' },
];

// ─────────────────────────────────────────────────────────
// 12. Accessibility (conditional — only shown when provided)
// ─────────────────────────────────────────────────────────
export interface ActivityAccessibility {
  wheelchair_accessible?: boolean;
  limited_mobility?: boolean;
  stroller_accessible?: boolean;
}

// ─────────────────────────────────────────────────────────
// 13. Schedule (days + time slots)
// ─────────────────────────────────────────────────────────
export type DayOfWeek =
  | 'monday' | 'tuesday' | 'wednesday' | 'thursday'
  | 'friday' | 'saturday' | 'sunday';

export interface ActivityScheduleSlot {
  day_of_week: DayOfWeek;
  start_time: string; // "09:00"
  end_time?: string;  // "12:00"
}

export interface ActivitySchedule {
  slots: ActivityScheduleSlot[];
  note?: string;
}

// ─────────────────────────────────────────────────────────
// 15. Cancellation (structured, not a giant paragraph)
// ─────────────────────────────────────────────────────────
export interface ActivityCancellation {
  cancellation_type?: 'free' | 'non_refundable' | 'partial';
  free_cancellation?: boolean;
  deadline_hours?: number;
  non_refundable?: boolean;
  policy_url?: string;
}

// ─────────────────────────────────────────────────────────
// 16. Nearby places (same reusable system as Shops & Stays)
// ─────────────────────────────────────────────────────────
export type NearbyPlaceCategory =
  | 'landmark' | 'square' | 'souk' | 'transport'
  | 'cafe' | 'restaurant' | 'attraction' | 'beach';

export interface NearbyPlace {
  id: string;
  name: string;
  category: NearbyPlaceCategory;
  icon?: string;
  latitude?: number;
  longitude?: number;
  walking_minutes?: number;
  display_order: number;
}

// ─────────────────────────────────────────────────────────
// 17. Media / Photos
// ─────────────────────────────────────────────────────────
export interface ActivityMedia {
  id: string;
  file_url: string;
  media_type: 'hero' | 'gallery';
  display_order: number;
  alt_text?: string;
}

// ─────────────────────────────────────────────────────────
// 18. Reviews
// ─────────────────────────────────────────────────────────
export interface ActivityReview {
  author: string;
  text: string;
  rating: number;
  type: 'tourist' | 'local';
}

// ─────────────────────────────────────────────────────────
// 19. Booking (structured)
// ─────────────────────────────────────────────────────────
export interface ActivityBooking {
  booking_required?: boolean;
  instant_booking?: boolean;
  reservation_required?: boolean;
  booking_contact?: string;
  booking_url?: string;
}

// ─────────────────────────────────────────────────────────
// 20. Conditional Section Visibility Flags (CMS / Admin)
// ─────────────────────────────────────────────────────────
export interface ActivitySectionVisibility {
  show_experiences?: boolean;
  show_highlights?: boolean;
  show_nearby?: boolean;
  show_pricing?: boolean;
  show_payment?: boolean;
  show_duration?: boolean;
  show_group_size?: boolean;
  show_languages?: boolean;
  show_included?: boolean;
  show_excluded?: boolean;
  show_requirements?: boolean;
  show_schedule?: boolean;
  show_booking?: boolean;
  show_cancellation?: boolean;
  show_meeting_point?: boolean;
  show_reviews?: boolean;
}

// ─────────────────────────────────────────────────────────
// 21. The canonical Activity Listing
// ─────────────────────────────────────────────────────────
export interface ActivityListing {
  // Basic
  id: string;
  name: string;
  slug: string;
  category: string;                    // e.g. 'Gastronomy'
  activity_type: string;               // e.g. 'Cooking Class'
  short_description: string;
  description: string;

  // Location
  city: CityId;
  neighborhood?: string;
  location_descriptor?: string;        // e.g. 'Near Jemaa el-Fna'
  meeting_point?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  directions_url: string;
  coordinates?: { lat: number; lng: number };
  googlePlaceId?: string;              // Google Place ID — used for photo API retrieval

  // Duration
  duration_minutes?: number;

  // Dynamic sections
  experiences?: ActivityExperience[];
  highlights?: ActivityHighlight[];
  pricing?: ActivityPricing;
  payment?: ActivityPayment;
  capacity?: ActivityCapacity;
  languages?: Language[];
  included_items?: IncludedItem[];
  excluded_items?: ExcludedItem[];
  requirements?: RequirementItem[];
  suitability?: ActivitySuitability;
  accessibility?: ActivityAccessibility;
  meeting_type?: MeetingOptionId;
  schedule?: ActivitySchedule;
  schedule_text?: string;              // free-text hours from real data
  conditions?: ActivityConditions;
  booking?: ActivityBooking;
  cancellation?: ActivityCancellation;
  nearby_places?: NearbyPlace[];
  media?: ActivityMedia[];

  // Trust & Reviews
  reviews?: ActivityReview[];
  review_summary?: string;
  google_rating?: number;
  review_count?: number;

  // Section visibility
  visibility?: ActivitySectionVisibility;

  is_published?: boolean;
  created_at?: string;
  updated_at?: string;

  // Legacy fields preserved from real listings (never removed)
  tip?: string;
  badge?: string;
  tags?: string[];
  vibe_tags?: string[];
}

// ─────────────────────────────────────────────────────────
// 22. Query filters
// ─────────────────────────────────────────────────────────
export interface ActivityQueryFilters {
  city?: string;
  category?: string;
  activity_type?: string;
  search?: string;
  minRating?: number;
  maxDurationMinutes?: number;
  childrenAllowed?: boolean;
  instantBooking?: boolean;
  freeCancellation?: boolean;
}

// ─────────────────────────────────────────────────────────
// 14. Conditions (season / weather dependency)
// ─────────────────────────────────────────────────────────
export interface ActivityConditions {
  seasonal?: boolean;
  weather_dependent?: boolean;
  best_months?: string[];
}
// ─────────────────────────────────────────────────────────
// 8. Group size / capacity
// ─────────────────────────────────────────────────────────
export type ActivityGroupType = 'private' | 'shared';

export interface ActivityCapacity {
  min_guests?: number;
  max_guests?: number;
  group_type: ActivityGroupType;
}

// ─────────────────────────────────────────────────────────
// 9. Languages (same reusable system as Shops)
// ─────────────────────────────────────────────────────────
export interface Language {
  id: string;
  name: string;
}

// ─────────────────────────────────────────────────────────
// 4. Highlights — "Why visit?" (dynamic, reusable)
// ─────────────────────────────────────────────────────────
export interface ActivityHighlight {
  id: string;
  name: string;
  icon?: string;
  description: string;
}

// ─────────────────────────────────────────────────────────
// 2. Activity Type (reusable library entry)
// ─────────────────────────────────────────────────────────
export interface ActivityType {
  id: string;
  name: string;
  icon: string;
  category: ActivityCategoryGroup;
}