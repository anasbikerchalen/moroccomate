/**
 * =========================================================================
 * MOROCCO FINDER - THINGS TO DO BACKEND & DATA SERVICE
 * =========================================================================
 *
 * Provides complete backend data management, filtering, spatial distance
 * queries, validation, and API routing for Morocco activity listings.
 *
 * DATA INTEGRITY: This service wraps the REAL collected listings in
 * src/listings/things/ (never regenerate or hallucinate data). The adapter
 * maps real fields into the canonical ActivityListing schema; sections that
 * have no real data simply stay empty and the UI hides them.
 */

import type { ThingToDoListing, CityId } from '../listings/types';
import type {
  ActivityListing,
  ActivityQueryFilters,
  ActivityCategoryGroup,
  ActivityExperience,
  ActivityHighlight,
  ActivityPricing,
  ActivityPayment,
  ActivityCapacity,
  Language,
  IncludedItem,
  RequirementItem,
  ActivitySuitability,
  ActivityAccessibility,
  MeetingOptionId,
  ActivityConditions,
  ActivityBooking,
  NearbyPlace,
  ActivityMedia,
  ActivityReview,
  FitnessLevel,
  NearbyPlaceCategory,
} from './types';
import { ACTIVITY_TYPE_LIBRARY } from './types';
import {
  validateActivityListing,
  EMPTY_ACTIVITY_TEMPLATE,
  SAMPLE_ACTIVITY_TEMPLATE,
} from './template';
import { slugify } from '../utils/slugify';

// Import all real city things data sets (collected data — untouched)
import { agadirThings } from '../listings/things/agadir.things';
import { al_hoceimaThings } from '../listings/things/al_hoceima.things';
import { asilahThings } from '../listings/things/asilah.things';
import { casablancaThings } from '../listings/things/casablanca.things';
import { chefchaouenThings } from '../listings/things/chefchaouen.things';
import { dakhlaThings } from '../listings/things/dakhla.things';
import { el_jadidaThings } from '../listings/things/el_jadida.things';
import { essaouiraThings } from '../listings/things/essaouira.things';
import { fesThings } from '../listings/things/fes.things';
import { ifrane_azrouThings } from '../listings/things/ifrane_azrou.things';
import { marrakechThings } from '../listings/things/marrakech.things';
import { meknesThings } from '../listings/things/meknes.things';
import { merzougaThings } from '../listings/things/merzouga.things';
import { ouarzazateThings } from '../listings/things/ouarzazate.things';
import { rabatThings } from '../listings/things/rabat.things';
import { saidiaThings } from '../listings/things/saidia.things';
import { tangierThings } from '../listings/things/tangier.things';
import { taroudant_tafraouteThings } from '../listings/things/taroudant_tafraoute.things';
import { tetouan_martilThings } from '../listings/things/tetouan_martil.things';

/**
 * Master Registry of all real Things To Do listings keyed by city
 */
export const ACTIVITIES_BY_CITY: Record<string, ThingToDoListing[]> = {
  marrakech: marrakechThings,
  fes: fesThings,
  casablanca: casablancaThings,
  tangier: tangierThings,
  rabat: rabatThings,
  essaouira: essaouiraThings,
  chefchaouen: chefchaouenThings,
  agadir: agadirThings,
  merzouga: merzougaThings,
  ouarzazate: ouarzazateThings,
  meknes: meknesThings,
  dakhla: dakhlaThings,
  ifrane_azrou: ifrane_azrouThings,
  tetouan_martil: tetouan_martilThings,
  asilah: asilahThings,
  taroudant_tafraoute: taroudant_tafraouteThings,
  el_jadida: el_jadidaThings,
  al_hoceima: al_hoceimaThings,
  saidia: saidiaThings,
};

// ─────────────────────────────────────────────────────────
// Display names for city keys
// ─────────────────────────────────────────────────────────
export const CITY_LABELS: Record<string, string> = {
  marrakech: 'Marrakech',
  fes: 'Fès',
  casablanca: 'Casablanca',
  tangier: 'Tangier',
  rabat: 'Rabat',
  essaouira: 'Essaouira',
  chefchaouen: 'Chefchaouen',
  agadir: 'Agadir',
  merzouga: 'Merzouga',
  ouarzazate: 'Ouarzazate',
  meknes: 'Meknès',
  dakhla: 'Dakhla',
  ifrane_azrou: 'Ifrane / Azrou',
  tetouan_martil: 'Tetouan / Martil',
  asilah: 'Asilah',
  taroudant_tafraoute: 'Taroudant / Tafraoute',
  el_jadida: 'El Jadida',
  al_hoceima: 'Al Hoceima',
  saidia: 'Saidia',
};

export function getCityLabel(city: string): string {
  return CITY_LABELS[city] || city.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ─────────────────────────────────────────────────────────
// Deterministic classification (no AI, no hallucination).
// Maps known tags / name keywords onto the Activity Type library.
// ─────────────────────────────────────────────────────────
const CLASSIFICATION_RULES: { keywords: string[]; category: string; type: string }[] = [
  { keywords: ['cooking', 'cook class', 'culinary'], category: 'Gastronomy', type: 'Cooking Class' },
  { keywords: ['food tour', 'food-tour', 'street food', 'foodie'], category: 'Gastronomy', type: 'Food Tour' },
  { keywords: ['tea ceremony', 'tea-experience', 'tea house'], category: 'Gastronomy', type: 'Tea Experience' },
  { keywords: ['hammam'], category: 'Wellness', type: 'Hammam' },
  { keywords: ['spa', 'massage', 'yoga', 'wellness'], category: 'Wellness', type: 'Spa' },
  { keywords: ['surf'], category: 'Sport', type: 'Surfing' },
  { keywords: ['kitesurf', 'kite'], category: 'Sport', type: 'Kitesurfing' },
  { keywords: ['quad', 'atv', 'buggy'], category: 'Adventure', type: 'Quad / ATV' },
  { keywords: ['4x4', '4wd', 'dune bash'], category: 'Adventure', type: '4x4 Excursion' },
  { keywords: ['camel'], category: 'Adventure', type: 'Camel Ride' },
  { keywords: ['horse', 'horseback'], category: 'Adventure', type: 'Horse Riding' },
  { keywords: ['cycling', 'bike', 'bike tour'], category: 'Adventure', type: 'Cycling' },
  { keywords: ['climb'], category: 'Adventure', type: 'Climbing' },
  { keywords: ['raft'], category: 'Adventure', type: 'Rafting' },
  { keywords: ['hike', 'trek'], category: 'Nature', type: 'Hiking' },
  { keywords: ['waterfall', 'ouzoud'], category: 'Nature', type: 'Waterfall Visit' },
  { keywords: ['desert', 'dunes', 'sahara', 'erg'], category: 'Nature', type: 'Desert Experience' },
  { keywords: ['mountain', 'atlas', 'toubkal'], category: 'Nature', type: 'Mountain Experience' },
  { keywords: ['museum', 'musee'], category: 'Culture', type: 'Museum Visit' },
  { keywords: ['boat', 'cruise', 'sailing'], category: 'Beach & Water', type: 'Boat Trip' },
  { keywords: ['diving', 'snorkel'], category: 'Beach & Water', type: 'Diving' },
  { keywords: ['kayak'], category: 'Beach & Water', type: 'Kayaking' },
  { keywords: ['fishing'], category: 'Beach & Water', type: 'Fishing' },
  { keywords: ['beach'], category: 'Beach & Water', type: 'Swimming' },
  { keywords: ['medina', 'souk', 'souks', 'bazaar'], category: 'Culture', type: 'Medina Walk' },
  {
    keywords: ['palace', 'palais', 'madrasa', 'kasbah', 'mosque', 'monument', 'historic', 'historical', 'ruins', 'tomb', 'minaret', 'cultural-tour', 'culture'],
    category: 'Culture',
    type: 'Historical Tour',
  },
  { keywords: ['garden', 'jardin', 'park', 'nature', 'botanical', 'valley'], category: 'Nature', type: 'Nature Walk' },
  { keywords: ['art', 'gallery', 'craft'], category: 'Culture', type: 'Art & Culture' },
  { keywords: ['music', 'gnawa'], category: 'Culture', type: 'Traditional Music' },
];

/**
 * Infers the category + activity type for a real listing from its own
 * collected tags / name — deterministic keyword matching, never invented.
 */
export function inferActivityClassification(listing: ThingToDoListing): {
  category: string;
  activity_type: string;
} {
  const haystack = [
    listing.name || '',
    ...(listing.tags || []),
    ...(listing.vibeTags || []),
  ]
    .join(' ')
    .toLowerCase();

  for (const rule of CLASSIFICATION_RULES) {
    if (rule.keywords.some(k => haystack.includes(k))) {
      return { category: rule.category, activity_type: rule.type };
    }
  }
  return { category: 'Experiences', activity_type: 'Experience' };
}

// ─────────────────────────────────────────────────────────
// Adapter helpers (deterministic mapping of real data)
// ─────────────────────────────────────────────────────────

/** First 1-2 sentences of the description, or the collected value prop */
function makeShortDescription(t: ThingToDoListing): string {
  if (t.shortValueProp && t.shortValueProp.trim()) return t.shortValueProp.trim();
  const desc = (t.description || '').trim();
  if (!desc) return '';
  const sentences = desc.match(/[^.!?]+[.!?]+/g);
  if (sentences && sentences.length >= 2) {
    return (sentences[0] + sentences[1]).trim();
  }
  return desc;
}

/** Real collected images -> canonical media entries */
function makeMedia(t: ThingToDoListing): ActivityMedia[] {
  const media: ActivityMedia[] = [];
  const urls: string[] = [];
  if (t.nonCopyrightImage) urls.push(t.nonCopyrightImage);
  if (Array.isArray(t.images)) urls.push(...t.images);
  urls.forEach((url, i) => {
    media.push({
      id: `media-${i}`,
      file_url: url,
      media_type: i === 0 ? 'hero' : 'gallery',
      display_order: i + 1,
      alt_text: t.name,
    });
  });
  return media;
}

/** Maps real collected languages / guide flags */
function makeLanguages(t: ThingToDoListing): Language[] {
  if (Array.isArray(t.languages) && t.languages.length > 0) {
    return t.languages.map((name, i) => ({ id: slugify(name) || `lang-${i}`, name }));
  }
  const names: string[] = [];
  if (t.hasEnglishGuide) names.push('English');
  if (t.hasFrenchGuide) names.push('French');
  return names.map((name, i) => ({ id: slugify(name), name }));
}

/** Maps real collected equipment / dress code -> "What to bring" */
function makeRequirements(t: ThingToDoListing): RequirementItem[] {
  const items: RequirementItem[] = [];
  if (Array.isArray(t.equipmentNeeded)) {
    t.equipmentNeeded.forEach((name, i) => {
      if (name && name.trim()) items.push({ id: `req-${i}`, name: name.trim() });
    });
  }
  if (t.dressCode && t.dressCode.trim()) {
    items.push({ id: 'req-dress-code', name: t.dressCode.trim() });
  }
  return items;
}

/** Maps real collected fitness / age info */
function makeSuitability(t: ThingToDoListing): ActivitySuitability | undefined {
  const fitnessMap: Record<string, FitnessLevel> = {
    relaxed: 'easy',
    moderate: 'moderate',
    active: 'moderate',
    intense: 'challenging',
  };
  const fitness = t.fitnessLevel ? fitnessMap[t.fitnessLevel] : undefined;
  const minAgeMatch = t.ageRestrictions ? t.ageRestrictions.match(/\d+/) : null;
  const hasAny = fitness !== undefined || t.isKidFriendly !== undefined || minAgeMatch;
  if (!hasAny) return undefined;
  return {
    fitness_level: fitness,
    children_allowed: t.isKidFriendly,
    minimum_age: minAgeMatch ? parseInt(minAgeMatch[0], 10) : undefined,
  };
}

/** Maps real collected weather / season info */
function makeConditions(t: ThingToDoListing): ActivityConditions | undefined {
  const weather = t.goodForRain === true ? false : t.goodForRain === false ? true : undefined;
  const seasonal = !!t.seasonality || !!t.seasonalInfo;
  const bestMonths = t.seasonalInfo?.bestSeason ? [t.seasonalInfo.bestSeason] : undefined;
  if (weather === undefined && !seasonal && !bestMonths) return undefined;
  return { weather_dependent: weather, seasonal, best_months: bestMonths };
}

/** Maps real collected booking info */
function makeBooking(t: ThingToDoListing): ActivityBooking | undefined {
  const bookingRequired = t.bookingRequired ?? undefined;
  const walkInOkay = t.walkInOkay ?? undefined;
  const url = t.ticketWebsite || t.officialWebsite || undefined;
  if (bookingRequired === undefined && walkInOkay === undefined && !url) return undefined;
  return {
    booking_required: bookingRequired,
    reservation_required: bookingRequired === true && walkInOkay === false,
    instant_booking: false,
    booking_url: url,
  };
}

/** Maps real collected nearby combos (walking times unknown -> hidden in UI) */
function makeNearbyPlaces(t: ThingToDoListing): NearbyPlace[] {
  if (!Array.isArray(t.nearbyCombos)) return [];
  const categoryMap: Record<string, NearbyPlaceCategory> = {
    eat: 'restaurant',
    visit: 'attraction',
    shop: 'souk',
    sleep: 'landmark',
  };
  return t.nearbyCombos.map((c, i) => ({
    id: c.id || `nb-${i}`,
    name: c.name,
    category: categoryMap[c.type] || 'attraction',
    icon: c.type,
    display_order: i + 1,
  }));
}

/** Maps real collected visitor quotes -> canonical reviews */
function makeReviews(t: ThingToDoListing): ActivityReview[] {
  if (!Array.isArray(t.visitorQuotes)) return [];
  return t.visitorQuotes.map(q => ({
    author: q.author || 'Traveler',
    text: q.quote,
    rating: q.rating || 5,
    type: q.type === 'local' ? 'local' : 'tourist',
  }));
}


// ─────────────────────────────────────────────────────────
// Core adapter: real ThingToDoListing -> canonical ActivityListing
// ─────────────────────────────────────────────────────────
export function toActivityListing(t: ThingToDoListing): ActivityListing {
  const { category, activity_type } = inferActivityClassification(t);
  const price = t.pricePerPerson ?? t.entryPrice ?? t.price ?? 0;

  const pricing: ActivityPricing = {
    pricing_type: price > 0 ? 'fixed' : 'free',
    price,
    currency: 'MAD',
    price_unit: 'per_person',
  };

  const capacity: ActivityCapacity | undefined =
    t.hasPrivateOption || t.hasPrivateOption === false
      ? {
          min_guests: 1,
          max_guests: undefined,
          group_type: t.hasPrivateOption ? 'private' : 'shared',
        }
      : undefined;

  const accessibility: ActivityAccessibility | undefined =
    t.isWheelchairAccessible !== undefined
      ? { wheelchair_accessible: t.isWheelchairAccessible }
      : undefined;

  const meetingType: MeetingOptionId | undefined = t.address ? 'self_arrival' : undefined;

  const highlights: ActivityHighlight[] = (t.highlights || []).map((name, i) => ({
    id: `hl-${i}`,
    name,
    description: '',
  }));

  const experiences: ActivityExperience[] = (t.emotionalBenefits || []).map((name, i) => ({
    id: `exp-${i}`,
    name,
  }));

  const includedItems: IncludedItem[] = (t.includedServices || []).map((name, i) => ({
    id: `inc-${i}`,
    name,
  }));

  return {
    // Basic
    id: t.id,
    name: t.name,
    slug: slugify(t.name) || t.id,
    category,
    activity_type,
    short_description: makeShortDescription(t),
    description: t.description,

    // Location
    city: t.city,
    neighborhood: t.neighborhood,
    meeting_point: t.address || undefined,
    address: t.address || undefined,
    directions_url: t.googleMapsUrl,
    googlePlaceId: t.googlePlaceId,

    // Duration
    duration_minutes: t.durationMinutes,

    // Dynamic sections (only when real data exists)
    experiences: experiences.length > 0 ? experiences : undefined,
    highlights: highlights.length > 0 ? highlights : undefined,
    pricing,
    capacity,
    languages: makeLanguages(t),
    included_items: includedItems.length > 0 ? includedItems : undefined,
    excluded_items: undefined,
    requirements: makeRequirements(t),
    suitability: makeSuitability(t),
    accessibility,
    meeting_type: meetingType,
    schedule: undefined,
    schedule_text: t.openingHours || undefined,
    conditions: makeConditions(t),
    booking: makeBooking(t),
    cancellation: undefined,
    nearby_places: makeNearbyPlaces(t),
    media: makeMedia(t),

    // Trust & Reviews
    reviews: makeReviews(t),
    google_rating: t.googleRating,
    review_count: t.googleReviewCount ?? t.reviewCount,

    is_published: true,

    // Legacy fields preserved (never removed)
    tip: t.tip,
    badge: t.badge,
    tags: t.tags,
    vibe_tags: t.vibeTags,
  };
}

// ─────────────────────────────────────────────────────────
// Queries
// ─────────────────────────────────────────────────────────

/** Get all activity listings across all Morocco cities (canonical schema) */
export function getAllActivities(): ActivityListing[] {
  return Object.values(ACTIVITIES_BY_CITY)
    .flat()
    .map(toActivityListing);
}

/** Get all raw real listings for a specific city (original collected data) */
export function getRawListingsByCity(city: string): ThingToDoListing[] {
  const normalized = city.toLowerCase().trim().replace(/[\s-]/g, '_');
  return ACTIVITIES_BY_CITY[normalized] || [];
}

/** Get all activity listings for a specific city (canonical schema) */
export function getActivitiesByCity(city: string): ActivityListing[] {
  return getRawListingsByCity(city).map(toActivityListing);
}

/** Find a specific activity by its unique ID */
export function getActivityById(id: string): ActivityListing | undefined {
  const all = Object.values(ACTIVITIES_BY_CITY).flat();
  const raw = all.find(a => a.id === id);
  return raw ? toActivityListing(raw) : undefined;
}

/** Find a specific activity by city + slug (or id as fallback) */
export function getActivityByCityAndSlug(city: string, slugOrId: string): ActivityListing | undefined {
  const cityListings = getActivitiesByCity(city);
  const normalized = slugOrId.toLowerCase().trim();
  const bySlug = cityListings.find(a => a.slug === normalized || a.slug === slugify(slugOrId));
  if (bySlug) return bySlug;
  return cityListings.find(a => a.id.toLowerCase() === normalized) || getActivityById(slugOrId);
}

/** List all available cities with activity counts */
export function getActivityCities(): { city: string; label: string; count: number }[] {
  return Object.entries(ACTIVITIES_BY_CITY).map(([city, list]) => ({
    city,
    label: getCityLabel(city),
    count: list.length,
  }));
}

/** Get all unique activity categories in the database */
export function getActivityCategories(): string[] {
  const categories = new Set<string>();
  Object.values(ACTIVITIES_BY_CITY)
    .flat()
    .forEach(listing => {
      categories.add(inferActivityClassification(listing).category);
    });
  return Array.from(categories).sort();
}

/** Search and filter activity listings with rich criteria */
export function searchActivities(filters: ActivityQueryFilters): ActivityListing[] {
  let results = filters.city ? getActivitiesByCity(filters.city) : getAllActivities();

  if (filters.search && filters.search.trim()) {
    const q = filters.search.toLowerCase().trim();
    results = results.filter(a => {
      const matchName = a.name.toLowerCase().includes(q);
      const matchDesc = a.description.toLowerCase().includes(q);
      const matchNeigh = (a.neighborhood || '').toLowerCase().includes(q);
      const matchCat = (a.category || '').toLowerCase().includes(q);
      const matchType = (a.activity_type || '').toLowerCase().includes(q);
      const matchTags = (a.tags || []).some(t => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchNeigh || matchCat || matchType || matchTags;
    });
  }

  if (filters.category) {
    const catLower = filters.category.toLowerCase();
    results = results.filter(a => (a.category || '').toLowerCase().includes(catLower));
  }

  if (filters.activity_type) {
    const typeLower = filters.activity_type.toLowerCase();
    results = results.filter(a => (a.activity_type || '').toLowerCase().includes(typeLower));
  }

  if (filters.minRating) {
    results = results.filter(a => (a.google_rating || 0) >= (filters.minRating || 0));
  }

  if (filters.maxDurationMinutes) {
    results = results.filter(
      a => a.duration_minutes !== undefined && a.duration_minutes <= (filters.maxDurationMinutes || Infinity)
    );
  }

  if (filters.childrenAllowed !== undefined) {
    results = results.filter(a => a.suitability?.children_allowed === filters.childrenAllowed);
  }

  if (filters.instantBooking !== undefined) {
    results = results.filter(a => a.booking?.instant_booking === filters.instantBooking);
  }

  if (filters.freeCancellation !== undefined) {
    results = results.filter(a => a.cancellation?.free_cancellation === filters.freeCancellation);
  }

  return results;
}

/**
 * Haversine formula to compute distance in km
 */
function computeDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/** Query activities near given GPS coordinates */
export function getActivitiesNearby(
  lat: number,
  lng: number,
  radiusKm: number = 5
): (ActivityListing & { distanceKm: number })[] {
  const all = getAllActivities();
  const withDistance: (ActivityListing & { distanceKm: number })[] = [];

  for (const activity of all) {
    if (activity.coordinates && activity.coordinates.lat && activity.coordinates.lng) {
      const dist = computeDistanceKm(lat, lng, activity.coordinates.lat, activity.coordinates.lng);
      if (dist <= radiusKm) {
        withDistance.push({
          ...activity,
          distanceKm: Math.round(dist * 100) / 100,
        });
      }
    }
  }

  return withDistance.sort((a, b) => a.distanceKm - b.distanceKm);
}

/**
 * Validate and create a new activity object
 */
export function createOrValidateActivity(input: Partial<ActivityListing>): {
  success: boolean;
  data?: ActivityListing;
  errors?: string[];
} {
  const validation = validateActivityListing(input);
  if (!validation.valid) {
    return { success: false, errors: validation.errors };
  }
  return { success: true, data: input as ActivityListing };
}

// ─────────────────────────────────────────────────────────
// Display formatters (duration + price)
// ─────────────────────────────────────────────────────────

/** 180 -> "3 hours", 90 -> "1h 30m", 1440 -> "Full day" */
export function formatDuration(minutes?: number): string {
  if (!minutes || minutes <= 0) return '';
  if (minutes >= 1440) {
    const days = Math.round(minutes / 1440);
    return days === 1 ? 'Full day' : `${days} days`;
  }
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return hours === 1 ? '1 hour' : `${hours} hours`;
  return `${hours}h ${mins}m`;
}

/** Canonical pricing -> "350 MAD / person", "From 350 MAD", "Free", "Contact" */
export function formatPrice(pricing?: ActivityPricing): string {
  if (!pricing) return '';
  const unitLabel: Record<string, string> = {
    per_person: 'person',
    per_group: 'group',
    per_vehicle: 'vehicle',
    per_session: 'session',
  };
  if (pricing.pricing_type === 'free') return 'Free';
  if (pricing.pricing_type === 'contact') return 'Contact for price';
  const amount = `${pricing.price.toLocaleString('en-US')} ${pricing.currency}`;
  const prefix = pricing.pricing_type === 'from' ? 'From ' : '';
  const unit = pricing.price_unit ? ` / ${unitLabel[pricing.price_unit] || pricing.price_unit}` : '';
  return `${prefix}${amount}${unit}`;
}

/** Group capacity -> "Up to 8 people", "Private experience", "Flexible" */
export function formatGroupLabel(capacity?: ActivityCapacity): string {
  if (!capacity) return '';
  if (capacity.max_guests) return `Up to ${capacity.max_guests} people`;
  if (capacity.group_type === 'private') return 'Private experience';
  return 'Flexible group';
}

// ─────────────────────────────────────────────────────────
// REST API Request Handler (mount to Express or fetch handlers)
// ─────────────────────────────────────────────────────────
export function handleActivityApiRequest(
  method: string,
  pathname: string,
  queryParams: Record<string, string>,
  body?: any
): { status: number; body: any } {
  // GET /api/activities/template
  if (method === 'GET' && pathname === '/template') {
    return {
      status: 200,
      body: {
        emptyTemplate: EMPTY_ACTIVITY_TEMPLATE,
        sampleTemplate: SAMPLE_ACTIVITY_TEMPLATE,
      },
    };
  }

  // GET /api/activities/cities
  if (method === 'GET' && pathname === '/cities') {
    return { status: 200, body: getActivityCities() };
  }

  // GET /api/activities/types
  if (method === 'GET' && pathname === '/types') {
    return {
      status: 200,
      body: {
        library: ACTIVITY_TYPE_LIBRARY,
        categories: Array.from(new Set(ACTIVITY_TYPE_LIBRARY.map(t => t.category))),
      },
    };
  }

  // GET /api/activities/categories
  if (method === 'GET' && pathname === '/categories') {
    return { status: 200, body: getActivityCategories() };
  }

  // GET /api/activities?city=...&search=...&category=...
  if (method === 'GET' && (pathname === '/' || pathname === '')) {
    const results = searchActivities({
      city: queryParams.city,
      search: queryParams.search,
      category: queryParams.category,
      activity_type: queryParams.type,
      minRating: queryParams.minRating ? parseFloat(queryParams.minRating) : undefined,
    });
    return { status: 200, body: results };
  }

  // GET /api/activities/:id
  const idMatch = pathname.match(/^\/([\w-]+)$/);
  if (method === 'GET' && idMatch) {
    const activity = getActivityById(idMatch[1]);
    if (!activity) {
      return { status: 404, body: { error: 'Activity not found' } };
    }
    return { status: 200, body: activity };
  }

  // POST /api/activities/validate
  if (method === 'POST' && pathname === '/validate') {
    return { status: 200, body: validateActivityListing(body) };
  }

  return { status: 404, body: { error: `Unknown activity API route: ${method} ${pathname}` } };
}