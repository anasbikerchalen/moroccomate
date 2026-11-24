import type { StayListing } from '../types/stay';
import type { ReviewSource } from '../types/reviews';

const OTA_BOOKING_HOSTS = [
  'booking.com',
  'expedia.com',
  'hotels.com',
  'agoda.com',
  'hostelworld.com',
  'vrbo.com',
  'stay22.com',
];

export function isOtaBookingUrl(url?: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  return OTA_BOOKING_HOSTS.some((host) => lower.includes(host));
}

export function isAffiliateReviewSource(source: ReviewSource): boolean {
  return (
    source === 'Booking.com' ||
    source === 'Expedia' ||
    source === 'Hotels.com' ||
    source === 'GetYourGuide' ||
    source === 'Viator'
  );
}

/**
 * Builds a valid Booking.com property search deep-link for a stay listing.
 * Stay22's Let Me Allez script automatically converts outgoing Booking.com
 * and other OTA URLs on the page into tracked Stay22 affiliate links.
 */
export function buildBookingComSearchUrl(stayName: string, cityName: string): string {
  const query = [stayName, cityName, 'Morocco'].filter(Boolean).join(', ');
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(query)}`;
}

/**
 * Resolves the best OTA partner booking URL for a stay listing:
 * 1. Explicit affiliateLinks.bookingCom / expedia / hotelsCom / hostelworld / agoda
 * 2. Direct OTA bookingUrl if already a partner domain (booking.com, expedia, etc.)
 * 3. Specific OTA property URL from reviewsData.sources (Booking.com / Hotels.com / Expedia)
 * 4. Clean Booking.com property + city search URL (automatically monetized by Stay22)
 */
export function getStayAffiliateBookingUrl(item: any, stay: StayListing): string {
  const explicitLinks = item?.affiliateLinks || stay.affiliate_links;
  if (explicitLinks) {
    const preferred =
      explicitLinks.bookingCom ||
      explicitLinks.hotelsCom ||
      explicitLinks.expedia ||
      explicitLinks.hostelworld ||
      explicitLinks.agoda;
    if (preferred && typeof preferred === 'string') {
      return preferred;
    }
  }

  if (isOtaBookingUrl(item?.bookingUrl)) {
    return item.bookingUrl;
  }

  const sources = stay.reviewsData?.sources || item?.reviewsData?.sources;
  if (Array.isArray(sources)) {
    const otaOrder: ReviewSource[] = ['Booking.com', 'Hotels.com', 'Expedia'];
    for (const targetSource of otaOrder) {
      const match = sources.find(
        (s: { source?: string; url?: string }) =>
          s?.source === targetSource && typeof s.url === 'string' && s.url.startsWith('http')
      );
      if (match?.url) {
        return match.url;
      }
    }
  }

  return buildBookingComSearchUrl(stay.name, stay.location.city);
}

/**
 * Builds a valid platform-specific search URL when a review source summary
 * lacks a direct property URL.
 */
export function getSourceSearchUrl(source: ReviewSource, placeName?: string): string {
  const query = [placeName && placeName !== 'this place' ? placeName : '', 'Morocco']
    .filter(Boolean)
    .join(' ');
  const encoded = encodeURIComponent(query);

  switch (source) {
    case 'Booking.com':
      return `https://www.booking.com/searchresults.html?ss=${encoded}`;
    case 'Expedia':
      return `https://www.expedia.com/Hotel-Search?destination=${encoded}`;
    case 'Hotels.com':
      return `https://www.hotels.com/Hotel-Search?destination=${encoded}`;
    case 'Tripadvisor':
      return `https://www.tripadvisor.com/Search?q=${encoded}`;
    case 'GetYourGuide':
      return `https://www.getyourguide.com/s/?q=${encoded}`;
    case 'Viator':
      return `https://www.viator.com/searchResults/all?text=${encoded}`;
    case 'Google Travel':
      return `https://www.google.com/travel/search?q=${encoded}`;
    case 'Google Maps':
      return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
    case 'TheFork':
      return `https://www.thefork.com/search?queryText=${encoded}`;
    case 'Restaurant Guru':
      return `https://restaurantguru.com/search?q=${encoded}`;
    case 'Wanderlog':
      return `https://wanderlog.com/search?q=${encoded}`;
    default:
      return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }
}

export function trackStayAffiliateClick(params: {
  stayId: string;
  stayName: string;
  city: string;
  placement: string;
  url: string;
}) {
  if (typeof window === 'undefined') return;
  const gtagFn = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtagFn === 'function') {
    gtagFn('event', 'affiliate_click', {
      partner: 'stay22',
      category: 'sleep',
      stay_id: params.stayId,
      stay_name: params.stayName,
      city: params.city,
      placement: params.placement,
      link_url: params.url,
    });
  }
}
