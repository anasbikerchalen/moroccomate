// src/utils/imageResolver.ts

/**
 * 2-Tier Image Resolver Engine for Morocco Travel OS Finder Tool
 *
 * Priority Order:
 * 1. Layer 1 (Primary): Google Places API Photo (dynamic resolution via googlePlaceId)
 * 2. Layer 2 (Fallback): Contextual Unsplash Stock Fallback by Category
 */

export type ImageTier = 'tier1_google' | 'tier2_fallback' | 'tier1_real' | 'tier2_google' | 'tier3_fallback';

export interface ResolvedImageResult {
  url: string;
  tier: ImageTier;
  fallbackUrls: string[];
}

export interface ListingImageTarget {
  id?: string;
  googlePlaceId?: string;
  images?: string[];
  nonCopyrightImage?: string;
  category?: 'eat' | 'sleep' | 'things' | 'shop' | string;
  omitGooglePlaceApi?: boolean;
}

// Category Fallbacks - Authentic Moroccan Aesthetics
export const CATEGORY_TIER3_FALLBACKS: Record<string, string> = {
  eat: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80',
  food: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80',
  restaurant: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80',

  sleep: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',
  stay: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',
  hotel: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',
  riad: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',

  things: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  activities: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  activity: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  visit: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',

  shop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  shopping: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  market: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  souk: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',

  default: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
};

// Circuit Breaker State for Google Places API Quota Limit or Network Error
let isGooglePlacesQuotaExceeded = false;

export function setGooglePlacesQuotaExceeded(exceeded: boolean): void {
  isGooglePlacesQuotaExceeded = exceeded;
}

export function isGooglePlacesQuotaBlocked(): boolean {
  return isGooglePlacesQuotaExceeded;
}

export function resetImageResolverCircuitBreaker(): void {
  isGooglePlacesQuotaExceeded = false;
}

/**
 * Constructs a Google Places photo request URL for a given googlePlaceId
 */
export function getGooglePlacePhotoUrl(googlePlaceId: string, maxWidth = 800): string {
  const apiKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_MAPS_API_KEY) || '';
  if (apiKey) {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&place_id=${encodeURIComponent(googlePlaceId)}&key=${apiKey}`;
  }
  return `/api/google-places-photo?placeId=${encodeURIComponent(googlePlaceId)}&maxWidth=${maxWidth}`;
}

/**
 * Core 2-Layer Image Resolver
 * Evaluates listing metadata using Layer 1 (Google Places API) -> Layer 2 (Unsplash Fallback)
 */
export function resolveListingImages(listing: ListingImageTarget): ResolvedImageResult {
  const catKey = (listing.category || 'things').toLowerCase();
  const categoryFallback = CATEGORY_TIER3_FALLBACKS[catKey] || CATEGORY_TIER3_FALLBACKS.default;

  // Layer 1: Google Places API Photo (Primary)
  const googlePhotoUrl = (!listing.omitGooglePlaceApi && listing.googlePlaceId && listing.googlePlaceId.trim().length > 0 && !isGooglePlacesQuotaBlocked())
    ? getGooglePlacePhotoUrl(listing.googlePlaceId)
    : null;

  if (googlePhotoUrl) {
    return {
      url: googlePhotoUrl,
      tier: 'tier1_google',
      fallbackUrls: [categoryFallback],
    };
  }

  // Layer 2: Unsplash Category Fallback
  return {
    url: categoryFallback,
    tier: 'tier2_fallback',
    fallbackUrls: [],
  };
}

/**
 * Handles DOM img onError events to seamlessly transition down the fallback chain.
 */
export function handleListingImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrls?: string[],
  category = 'things'
): void {
  const target = event.currentTarget;
  const currentSrc = target.src;

  // Detect Google Places API quota limit or load failure
  if (currentSrc.includes('maps.googleapis.com') || currentSrc.includes('/api/google-places-photo') || currentSrc.includes('/api/places/photo')) {
    console.warn('Google Places photo request failed or hit free tier limit. Activating circuit breaker.');
    setGooglePlacesQuotaExceeded(true);
  }

  // Retrieve queued fallbacks
  const dataAttr = target.getAttribute('data-fallbacks');
  let queue: string[] = fallbackUrls ? [...fallbackUrls] : dataAttr ? JSON.parse(dataAttr) : [];

  // Filter out current failed URL to avoid infinite loops
  queue = queue.filter((url) => url !== currentSrc);

  if (queue.length > 0) {
    const nextUrl = queue.shift()!;
    target.setAttribute('data-fallbacks', JSON.stringify(queue));
    target.src = nextUrl;
  } else {
    // Ultimate fallback
    const ultimateFallback = CATEGORY_TIER3_FALLBACKS[category.toLowerCase()] || CATEGORY_TIER3_FALLBACKS.default;
    if (target.src !== ultimateFallback) {
      target.src = ultimateFallback;
    }
  }
}
