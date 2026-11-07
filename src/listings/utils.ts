import type { ActivityListing, VisitListing, ThingToDoListing } from './types'

export function mapToThingToDo(listing: ActivityListing | VisitListing): ThingToDoListing {
  return listing as ThingToDoListing;
}

export interface ConsolidatedRating {
  averageRating: number;
  totalReviews: number;
  googleRating?: number;
  googleReviewCount?: number;
  tripadvisorRating?: number;
  tripadvisorReviewCount?: number;
  bookingRating?: number;
  bookingReviewCount?: number;
}

/**
 * LI-05: Consolidated rating computation across multiple rating sources.
 * Computes a weighted average rating and total review count across Google, TripAdvisor, and Booking.
 */
export function getListingRating(listing: any): ConsolidatedRating {
  if (!listing) {
    return { averageRating: 4.5, totalReviews: 0 };
  }

  let totalWeightedScore = 0;
  let totalReviews = 0;

  if (typeof listing.googleRating === 'number' && listing.googleRating > 0) {
    const count = listing.googleReviewCount || 1;
    totalWeightedScore += listing.googleRating * count;
    totalReviews += count;
  }

  if (typeof listing.tripadvisorRating === 'number' && listing.tripadvisorRating > 0) {
    const count = listing.tripadvisorReviewCount || 1;
    totalWeightedScore += listing.tripadvisorRating * count;
    totalReviews += count;
  }

  if (typeof listing.bookingRating === 'number' && listing.bookingRating > 0) {
    const count = listing.bookingReviewCount || 1;
    totalWeightedScore += listing.bookingRating * count;
    totalReviews += count;
  }

  const averageRating = totalReviews > 0
    ? Number((totalWeightedScore / totalReviews).toFixed(1))
    : (listing.rating || listing.googleRating || 4.5);

  const finalReviewCount = totalReviews > 0 ? totalReviews : (listing.reviewCount || listing.googleReviewCount || 0);

  return {
    averageRating,
    totalReviews: finalReviewCount,
    googleRating: listing.googleRating,
    googleReviewCount: listing.googleReviewCount,
    tripadvisorRating: listing.tripadvisorRating,
    tripadvisorReviewCount: listing.tripadvisorReviewCount,
    bookingRating: listing.bookingRating,
    bookingReviewCount: listing.bookingReviewCount,
  };
}

const DEFAULT_FALLBACK_IMAGE = '/assets/home/backgrounds/homepage_default_image.png';

/**
 * LI-06: Localize external image URLs or fallback gracefully to local static assets.
 */
export function getSafeListingImage(imageSrc?: string, fallbackType: string = 'general'): string {
  if (!imageSrc || typeof imageSrc !== 'string' || imageSrc.trim() === '') {
    return DEFAULT_FALLBACK_IMAGE;
  }

  // If image URL is valid local path or standard HTTPS URL, return as-is
  if (imageSrc.startsWith('/') || imageSrc.startsWith('http://') || imageSrc.startsWith('https://')) {
    return imageSrc;
  }

  return DEFAULT_FALLBACK_IMAGE;
}
