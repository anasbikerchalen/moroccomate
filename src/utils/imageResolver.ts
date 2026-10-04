// src/utils/imageResolver.ts

/**
 * IMAGE RESOLVER — NO-IMAGE MODE
 *
 * The Finder website no longer hosts, fetches, or displays any external
 * listing images (no Google Places API photos, no Unsplash stock fallbacks).
 * Listing cards and detail heroes use styled decorative panels instead,
 * with a "See photos on Google Maps" link for real photos.
 *
 * The collected place data files keep every stored image URL untouched —
 * only the rendering of hosted images has been removed.
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

/**
 * No-image resolver — kept for backwards compatibility with existing imports.
 * Always returns an empty URL so no external image is ever fetched.
 */
export function resolveListingImages(_listing: ListingImageTarget): ResolvedImageResult {
  return { url: '', tier: 'tier2_fallback', fallbackUrls: [] };
}

/**
 * No-op image error handler — kept for backwards compatibility with existing imports.
 */
export function handleListingImageError(): void {
  // no-op: no hosted images are rendered anymore
}
