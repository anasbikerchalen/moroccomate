/**
 * =========================================================================
 * PLACE URL SYSTEM — name-based, shareable, indexable place pages
 * =========================================================================
 *
 * Gives every Eat / Sleep / Shopping listing its own URL built from the
 * REAL place name (never a random id), so pages can be shared, refreshed
 * and indexed by search engines:
 *
 *     /place/:city/food/le-jardin
 *     /place/:city/sleep/riad-dar-baraka
 *     /place/:city/shopping/bazaar-mohamed
 *
 * Things To Do already has its own named pages (/things/:city/:slug) and
 * keeps that pattern — this module only adds a small helper for it.
 *
 * Notes:
 * - The RAW collected data files are never modified. Slugs are computed
 *   at read time from the listing name.
 * - If two places share the same name in the same city + category, a
 *   short numeric suffix (-2, -3, ...) is added so no page collides.
 * - Using the place name in the URL has NO security impact: place names,
 *   cities and categories are public curated data. Internal ids stay in
 *   the data files.
 */
import { listingsRegistry } from './index';
import { enrichListingTags } from '../data/controllers';
import { slugify } from '../utils/slugify';
import { getActivityById } from '../things-to-do';

/** URL categories for place pages (URL segment names) */
export type PlaceUrlCategory = 'food' | 'sleep' | 'shopping';

export const PLACE_URL_CATEGORIES: PlaceUrlCategory[] = ['food', 'sleep', 'shopping'];

/** URL segment -> underlying data category */
const DATA_CATEGORY: Record<PlaceUrlCategory, string> = {
  food: 'eat',
  sleep: 'sleep',
  shopping: 'shop',
};

/** Human labels used in page titles */
export const PLACE_CATEGORY_LABEL: Record<PlaceUrlCategory, string> = {
  food: 'Where to Eat',
  sleep: 'Where to Sleep',
  shopping: 'Shopping',
};

/** Schema.org type for structured data */
export const PLACE_SCHEMA_TYPE: Record<PlaceUrlCategory, string> = {
  food: 'Restaurant',
  sleep: 'Hotel',
  shopping: 'Store',
};

/** Accept 'eat'/'food', 'sleep'/'stay', 'shop'/'shopping' and return the URL category */
export function normalizePlaceCategory(input: string | null | undefined): PlaceUrlCategory | null {
  const lower = String(input || '').toLowerCase();
  if (lower === 'food' || lower === 'eat') return 'food';
  if (lower === 'sleep' || lower === 'stay') return 'sleep';
  if (lower === 'shopping' || lower === 'shop') return 'shopping';
  return null;
}

// ---------------------------------------------------------------------------
// Slug index (per city + category, built lazily and cached)
// ---------------------------------------------------------------------------

interface PlaceIndex {
  bySlug: Map<string, any>;
  idToSlug: Map<string, string>;
}

const indexCache = new Map<string, PlaceIndex>();

export function getPlaceIndex(city: string, category: PlaceUrlCategory): PlaceIndex {
  const cityKey = String(city || '').toLowerCase();
  const cacheKey = `${cityKey}::${category}`;
  const cached = indexCache.get(cacheKey);
  if (cached) return cached;

  const bySlug = new Map<string, any>();
  const idToSlug = new Map<string, string>();
  const used = new Set<string>();

  // The city's OWN listings. Registry bucket names can differ from the
  // listing's own city field (e.g. shops filed under the "oualidia" bucket
  // carry city: "el_jadida"), so we scan every bucket instead of guessing
  // the bucket name — every real listing gets exactly one page.
  const listings = getAllRawListings(DATA_CATEGORY[category])
    .filter((l: any) => String(l.city || '').toLowerCase() === cityKey)
    .map((item: any) => enrichListingTags({ ...item, title: item.title || item.name }));

  for (const l of listings) {
    const base = slugify(l.name || l.title || '') || slugify(String(l.id || 'place'));
    let slug = base;
    let n = 2;
    while (used.has(slug)) slug = `${base}-${n++}`;
    used.add(slug);
    bySlug.set(slug, l);
    if (l.id) idToSlug.set(String(l.id), slug);
  }

  const index: PlaceIndex = { bySlug, idToSlug };
  indexCache.set(cacheKey, index);
  return index;
}

/** Find a listing by its URL city + category + slug */
export function getPlaceBySlug(city: string, category: PlaceUrlCategory, slug: string): any | undefined {
  const index = getPlaceIndex(city, category);
  const normalized = String(slug || '').toLowerCase().trim();
  return index.bySlug.get(normalized) || index.bySlug.get(slugify(normalized));
}

/** Get the name-based slug for a listing id (within a known city + category) */
export function getPlaceSlugById(city: string, category: PlaceUrlCategory, id: string): string | undefined {
  return getPlaceIndex(city, category).idToSlug.get(String(id || ''));
}

/** Build the place page URL for a known city + category + slug */
export function buildPlaceUrl(city: string, category: PlaceUrlCategory, slug: string): string {
  return `/place/${String(city || '').toLowerCase()}/${category}/${slug}`;
}

// ---------------------------------------------------------------------------
// Global id -> URL map (id is NOT exposed in the URL — only used internally)
// ---------------------------------------------------------------------------

const globalIdUrlCache = new Map<PlaceUrlCategory, Map<string, string>>();

/** Resolve a place page URL from the listing id + URL category ('food' | 'sleep' | 'shopping') */
export function getPlaceUrlById(category: PlaceUrlCategory, id: string): string | null {
  let map = globalIdUrlCache.get(category);
  if (!map) {
    map = new Map<string, string>();
    for (const city of getPlaceCities(category)) {
      const index = getPlaceIndex(city, category);
      for (const [lid, slug] of index.idToSlug) {
        map.set(lid, buildPlaceUrl(city, category, slug));
      }
    }
    globalIdUrlCache.set(category, map);
  }
  return map.get(String(id || '')) || null;
}

// ---------------------------------------------------------------------------
// Category detection (mirrors DetailView's heuristics) + single URL helper
// ---------------------------------------------------------------------------

function detectPlaceCategory(item: any): PlaceUrlCategory | null {
  if (!item) return null;
  const id = String(item.id || '').toLowerCase();
  // Shop first — shop ids start with 'sh-' or the listing has shop fields
  if (id.startsWith('sh-') || item.productCategories?.length > 0 || item.category) return 'shopping';
  // Eat
  if (item.mealTypes?.length > 0 || item.foodStyles?.length > 0 || id.includes('eat') || id.startsWith('e-')) return 'food';
  // Sleep
  if (
    item.pricePerNight !== undefined ||
    id.includes('sleep') ||
    id.startsWith('s-') ||
    ['riad', 'dar', 'hotel', 'villa', 'hostel', 'apartment', 'kasbah', 'guesthouse', 'desert-camp'].includes(item.type)
  ) return 'sleep';
  return null;
}

/** Things To Do named page URL (always uses the place-name slug, id as fallback) */
export function getThingsUrlForItem(item: any): string | null {
  if (!item) return null;
  const city = String(item.city || '').toLowerCase();
  if (!city) return null;
  const activity = item.id ? getActivityById(String(item.id)) : undefined;
  const slug = activity?.slug || item.slug || slugify(item.name || item.title || '') || String(item.id || '');
  if (!slug) return null;
  return `/things/${city}/${slug}`;
}

/**
 * One helper for every entry point: returns the named public URL for a
 * listing (place page for eat/sleep/shop, things page for activities),
 * or null when no named URL can be built (caller can fall back).
 */
export function getListingUrl(item: any): string | null {
  if (!item) return null;
  const placeCategory = detectPlaceCategory(item);
  if (placeCategory) {
    const id = String(item.id || '');
    const url = id ? getPlaceUrlById(placeCategory, id) : null;
    if (url) return url;
    const city = String(item.city || '').toLowerCase();
    const slug = getPlaceSlugById(city, placeCategory, id);
    if (city && slug) return buildPlaceUrl(city, placeCategory, slug);
    return null;
  }
  return getThingsUrlForItem(item);
}

// ---------------------------------------------------------------------------
// Enumeration helpers (sitemap + prerender scripts)
// ---------------------------------------------------------------------------

/** Data city ids that have listings for a data category ('eat' | 'sleep' | 'shop' | 'things') */
function getDataCities(dataCategory: string): string[] {
  const cities = new Set<string>();
  const keyPattern = new RegExp(`^([a-z0-9_]+)-${dataCategory}$`);
  for (const key of Object.keys(listingsRegistry)) {
    const match = keyPattern.exec(key);
    if (match) cities.add(match[1]);
  }
  return [...cities];
}

/**
 * All raw listings for a data category, deduped by id. Registry buckets can
 * alias the SAME array under several city keys (e.g. 'tetouan-shop' and
 * 'tetouan_martil-shop'), so id-dedupe guarantees one page per real place.
 */
function getAllRawListings(dataCategory: string): any[] {
  const out: any[] = [];
  const seen = new Set<string>();
  for (const bucketCity of getDataCities(dataCategory)) {
    for (const l of (listingsRegistry as any)[`${bucketCity}-${dataCategory}`] || []) {
      if (!l) continue;
      const key = String(l.id || l.name || l.title || '');
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(l);
    }
  }
  return out;
}

/** All cities that own at least one place listing for the URL category */
export function getPlaceCities(category: PlaceUrlCategory): string[] {
  const cities = new Set<string>();
  for (const l of getAllRawListings(DATA_CATEGORY[category])) {
    cities.add(String(l.city || '').toLowerCase());
  }
  return [...cities].sort();
}

export interface PlacePageInfo {
  city: string;
  category: PlaceUrlCategory;
  slug: string;
  listing: any;
}

/** Every indexable place page (used by the sitemap + prerender scripts) */
export function getAllPlacePages(): PlacePageInfo[] {
  const pages: PlacePageInfo[] = [];
  for (const category of PLACE_URL_CATEGORIES) {
    for (const city of getPlaceCities(category)) {
      const index = getPlaceIndex(city, category);
      for (const [slug, listing] of index.bySlug) {
        pages.push({ city, category, slug, listing });
      }
    }
  }
  return pages;
}

/** Browse-page cities per URL category segment ('things-to-do' uses the things backend) */
export function getBrowseCities(urlSegment: 'food' | 'sleep' | 'things-to-do' | 'shopping'): string[] {
  if (urlSegment === 'things-to-do') {
    const cities = new Set<string>();
    for (const l of getAllRawListings('things')) {
      cities.add(String(l.city || '').toLowerCase());
    }
    return [...cities].sort();
  }
  return getPlaceCities(urlSegment);
}
