/**
 * =========================================================================
 * MOROCCO FINDER - OFFICIAL ACTIVITY SPECIFICATION & TEMPLATE
 * =========================================================================
 *
 * This module defines the canonical specification for activity listings in
 * Morocco. It contains field-by-field guidelines, default schemas, validation
 * rules, and copy-pasteable templates for human editors and AI data crawlers.
 *
 * === SCHEMA FIELD SPECIFICATION ===
 * 1.  id: string -> Format 'td-[city]-[num]' (e.g., 'td-mar-1', 'td-fes-4')
 * 2.  name: string -> Full official name of the activity
 * 3.  slug: string -> URL-friendly slug (auto-generated from name)
 * 4.  category: string -> Category group (e.g., 'Gastronomy', 'Nature', 'Sport')
 * 5.  activity_type: string -> Type from ACTIVITY_TYPE_LIBRARY (e.g., 'Cooking Class')
 * 6.  short_description: string -> 1-2 sentence teaser (3-4 lines max in UI)
 * 7.  description: string -> Full informative, non-hype description
 * 8.  city: CityId -> City key in snake_case (e.g., 'marrakech')
 * 9.  neighborhood: string (optional) -> District or quarter (e.g., 'Medina')
 * 10. location_descriptor: string (optional) -> Context (e.g., 'Near Jemaa el-Fna')
 * 11. meeting_point: string (optional) -> Where guests meet (e.g., 'Koutoubia Mosque')
 * 12. address: string (optional) -> Full street address
 * 13. latitude / longitude: number (optional) -> GPS coordinates
 * 14. directions_url: string -> Valid Google Maps link
 * 15. coordinates: { lat, lng } (optional) -> For distance computation
 * 16. duration_minutes: number (optional) -> e.g. 180 -> "3 hours" in UI
 * 17. experiences: ActivityExperience[] (optional) -> "What you'll experience"
 * 18. highlights: ActivityHighlight[] (optional) -> "Why visit?" sidebar
 * 19. pricing: { pricing_type, price, currency, price_unit } (optional)
 * 20. payment: { cash_currency, cards_accepted, methods } (optional)
 * 21. capacity: { min_guests, max_guests, group_type } (optional)
 * 22. languages: Language[] (optional) -> e.g. ['Arabic', 'English', 'French']
 * 23. included_items: IncludedItem[] (optional) -> "What's included"
 * 24. excluded_items: ExcludedItem[] (optional) -> "What's not included"
 * 25. requirements: RequirementItem[] (optional) -> "What to bring"
 * 26. suitability: { minimum_age, children_allowed, fitness_level } (optional)
 * 27. accessibility: { wheelchair_accessible, ... } (optional, conditional)
 * 28. meeting_type: MeetingOptionId (optional) -> e.g. 'meeting_point', 'hotel_pickup'
 * 29. schedule: { slots, note } (optional) -> days + time slots
 * 30. schedule_text: string (optional) -> free-text hours from real data
 * 31. conditions: { seasonal, weather_dependent, best_months } (optional)
 * 32. booking: { booking_required, instant_booking, reservation_required, ... } (optional)
 * 33. cancellation: { free_cancellation, deadline_hours, ... } (optional)
 * 34. nearby_places: NearbyPlace[] (optional) -> "Around the experience"
 * 35. media: ActivityMedia[] (optional) -> hero + gallery photos
 * 36. reviews: ActivityReview[] (optional) -> visitor quotes
 */

import type { ActivityListing, CityId } from './types';

/**
 * Standard blank template for generating new activity entries
 */
export const EMPTY_ACTIVITY_TEMPLATE: ActivityListing = {
  id: 'td-[city]-0',
  name: '',
  slug: '',
  category: 'Culture',
  activity_type: 'Medina Walk',
  short_description: '',
  description: '',
  city: 'marrakech',
  neighborhood: 'Medina',
  location_descriptor: '',
  meeting_point: '',
  address: '',
  latitude: undefined,
  longitude: undefined,
  directions_url: 'https://maps.google.com/?q=',
  coordinates: { lat: 31.6295, lng: -7.9811 },
  duration_minutes: undefined,
  experiences: [],
  highlights: [],
  pricing: {
    pricing_type: 'from',
    price: 0,
    currency: 'MAD',
    price_unit: 'per_person'
  },
  payment: {
    cash_currency: 'MAD',
    cards_accepted: false,
    methods: ['cash']
  },
  capacity: {
    min_guests: 1,
    max_guests: undefined,
    group_type: 'shared'
  },
  languages: [
    { id: 'arabic', name: 'Arabic' },
    { id: 'french', name: 'French' },
  ],
  included_items: [],
  excluded_items: [],
  requirements: [],
  suitability: {
    children_allowed: undefined,
    fitness_level: 'easy'
  },
  accessibility: {},
  meeting_type: 'meeting_point',
  schedule: { slots: [] },
  schedule_text: '',
  conditions: { seasonal: false, weather_dependent: false, best_months: [] },
  booking: { booking_required: false, instant_booking: false, reservation_required: false },
  cancellation: { free_cancellation: false, deadline_hours: undefined, non_refundable: false },
  nearby_places: [],
  media: [],
  reviews: [],
  visibility: {},
  is_published: false
};

/**
 * Sample reference template — Traditional Moroccan Cooking Class
 * (Template reference only. Real listings live in src/listings/things/
 * and are collected data — never replaced or regenerated.)
 */
export const SAMPLE_ACTIVITY_TEMPLATE: ActivityListing = {
  id: 'td-mar-sample',
  name: 'Traditional Moroccan Cooking Class',
  slug: 'traditional-moroccan-cooking-class',
  category: 'Gastronomy',
  activity_type: 'Cooking Class',
  short_description:
    'Learn how to prepare authentic Moroccan dishes with a local chef. Visit the market, discover traditional spices and enjoy your homemade meal.',
  description:
    'A hands-on cooking class led by a local chef. You will visit a local market, learn about Moroccan spices, prepare a traditional tagine from scratch and enjoy the meal you cooked, with mint tea and stories.',
  city: 'marrakech',
  neighborhood: 'Medina',
  location_descriptor: 'Near Jemaa el-Fna',
  meeting_point: 'Koutoubia Mosque',
  address: 'Koutoubia Mosque, Marrakech',
  latitude: 31.6258,
  longitude: -7.9891,
  directions_url: 'https://www.google.com/maps/search/?api=1&query=Koutoubia+Mosque%2C+Marrakech',
  coordinates: { lat: 31.6258, lng: -7.9891 },
  duration_minutes: 180,
  experiences: [
    { id: 'exp-market', name: 'Visit local market', icon: 'market' },
    { id: 'exp-spices', name: 'Learn Moroccan spices', icon: 'leaf' },
    { id: 'exp-tagine', name: 'Prepare tagine', icon: 'cooking' },
    { id: 'exp-meal', name: 'Enjoy your meal', icon: 'food' },
    { id: 'exp-tea', name: 'Mint tea & stories', icon: 'tea' }
  ],
  highlights: [
    { id: 'hl-authentic', name: 'Authentic Moroccan experience', icon: 'star', description: 'Made by local chefs' },
    { id: 'hl-small-group', name: 'Small group', icon: 'users', description: 'More personal and interactive' },
    { id: 'hl-recipes', name: 'Traditional recipes', icon: 'book', description: 'Passed down for generations' }
  ],
  pricing: {
    pricing_type: 'from',
    price: 350,
    currency: 'MAD',
    price_unit: 'per_person'
  },
  payment: {
    cash_currency: 'MAD',
    cards_accepted: true,
    methods: ['cash', 'visa', 'mastercard']
  },
  capacity: {
    min_guests: 1,
    max_guests: 8,
    group_type: 'shared'
  },
  languages: [
    { id: 'arabic', name: 'Arabic' },
    { id: 'english', name: 'English' },
    { id: 'french', name: 'French' }
  ],
  included_items: [
    { id: 'inc-guide', name: 'Local guide', icon: 'users' },
    { id: 'inc-ingredients', name: 'Cooking ingredients', icon: 'market' },
    { id: 'inc-meal', name: 'Meal (what you prepare)', icon: 'food' },
    { id: 'inc-tea', name: 'Mint tea', icon: 'tea' }
  ],
  excluded_items: [
    { id: 'exc-pickup', name: 'Hotel pickup' },
    { id: 'exc-drinks', name: 'Extra drinks' },
    { id: 'exc-personal', name: 'Personal expenses' }
  ],
  requirements: [
    { id: 'req-shoes', name: 'Comfortable clothes', icon: 'walking' },
    { id: 'req-sunscreen', name: 'Sunscreen', icon: 'sun' },
    { id: 'req-camera', name: 'Camera', icon: 'camera' }
  ],
  suitability: {
    minimum_age: 8,
    children_allowed: true,
    fitness_level: 'easy'
  },
  accessibility: {
    wheelchair_accessible: false
  },
  meeting_type: 'meeting_point',
  schedule: {
    slots: [
      { day_of_week: 'monday', start_time: '09:00', end_time: '12:00' },
      { day_of_week: 'tuesday', start_time: '09:00', end_time: '12:00' },
      { day_of_week: 'wednesday', start_time: '09:00', end_time: '12:00' },
      { day_of_week: 'thursday', start_time: '09:00', end_time: '12:00' },
      { day_of_week: 'friday', start_time: '14:00', end_time: '17:00' },
      { day_of_week: 'saturday', start_time: '09:00', end_time: '12:00' }
    ],
    note: 'Subject to availability'
  },
  conditions: {
    seasonal: false,
    weather_dependent: false,
    best_months: ['March', 'April', 'May', 'September', 'October', 'November']
  },
  booking: {
    booking_required: true,
    instant_booking: true,
    reservation_required: true
  },
  cancellation: {
    cancellation_type: 'free',
    free_cancellation: true,
    deadline_hours: 24,
    non_refundable: false
  },
  nearby_places: [
    { id: 'nb-jemaa', name: 'Jemaa el-Fna', category: 'square', icon: 'landmark', walking_minutes: 5, display_order: 1 },
    { id: 'nb-souks', name: 'Souks', category: 'souk', icon: 'souk', walking_minutes: 3, display_order: 2 },
    { id: 'nb-koutoubia', name: 'Koutoubia Mosque', category: 'landmark', icon: 'monument', walking_minutes: 7, display_order: 3 },
    { id: 'nb-taxi', name: 'Taxi station', category: 'transport', icon: 'taxi', walking_minutes: 8, display_order: 4 }
  ],
  media: [],
  reviews: [],
  visibility: {},
  is_published: true
};

/**
 * Helper to initialize a template pre-filled with the target city
 */
export function createActivityTemplate(city: CityId | string, name: string): ActivityListing {
  const template = { ...EMPTY_ACTIVITY_TEMPLATE };
  template.city = (city || 'marrakech') as CityId;
  template.name = name || '';
  template.slug = (name || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
  template.id = `td-${String(template.city).split('_')[0]}-0`;
  return template;
}

/**
 * Validates a candidate activity entry against the required schema fields
 */
export function validateActivityListing(data: Partial<ActivityListing>): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!data.id || !data.id.trim()) errors.push('Missing required field: id');
  if (!data.name || !data.name.trim()) errors.push('Missing required field: name');
  if (!data.city) errors.push('Missing required field: city');
  if (!data.activity_type || !data.activity_type.trim()) errors.push('Missing required field: activity_type');
  if (!data.description || !data.description.trim()) errors.push('Missing required field: description');
  if (!data.directions_url || !data.directions_url.trim()) errors.push('Missing required field: directions_url');

  if (data.duration_minutes !== undefined && (typeof data.duration_minutes !== 'number' || data.duration_minutes <= 0)) {
    warnings.push('duration_minutes should be a positive number of minutes');
  }

  if (data.pricing && data.pricing.pricing_type !== 'free' && data.pricing.pricing_type !== 'contact') {
    if (typeof data.pricing.price !== 'number' || data.pricing.price < 0) {
      warnings.push('pricing.price should be a non-negative number for paid activities');
    }
  }

  if (data.capacity && data.capacity.group_type === 'shared' && !data.capacity.max_guests) {
    warnings.push('shared activities should define capacity.max_guests');
  }

  if (data.schedule && Array.isArray(data.schedule.slots)) {
    data.schedule.slots.forEach((slot, i) => {
      if (!slot.day_of_week || !slot.start_time) {
        warnings.push(`schedule slot ${i + 1} is missing day_of_week or start_time`);
      }
    });
  }

  return { valid: errors.length === 0, errors, warnings };
}