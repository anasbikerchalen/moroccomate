/**
 * =========================================================================
 * SHARED SEO PAGE DATA — used by generate-sitemap.ts and prerender-places.ts
 * =========================================================================
 * Collects title / description / image / structured data for EVERY
 * indexable page, straight from the REAL collected listing data.
 * No content is generated here — real data only.
 */
import {
  getAllPlacePages,
  getBrowseCities,
  PLACE_CATEGORY_LABEL,
  PLACE_SCHEMA_TYPE,
} from '../src/listings/placeRoutes';
import { getAllActivities } from '../src/things-to-do';
import { getListingRating } from '../src/listings/utils';
import { cityMap } from '../src/data/cities';

export const BASE_URL = 'https://moroccomate.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/home/backgrounds/homepage_default_image.jpg`;

export interface IndexablePage {
  path: string;          // URL path, no trailing slash
  priority: number;
  title: string;         // page title WITHOUT the "| Morocco Finder" suffix
  description: string;
  image: string;         // absolute image URL for social previews
  jsonLd: Record<string, any> | null;
  h1: string;            // main heading for the noscript fallback content
}

/** Pretty city label with graceful fallback for every data city id */
function cityLabel(city: string): string {
  const key = String(city || '').toLowerCase();
  if (cityMap[key]?.name) return cityMap[key].name;
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
}

/** Eat / Sleep / Shopping place pages (/place/:city/:category/:place-name) */
export function collectPlacePages(): IndexablePage[] {
  const pages: IndexablePage[] = [];
  for (const { city, category, slug, listing } of getAllPlacePages()) {
    const label = cityLabel(city);
    const name = listing.name || listing.title || 'Place';
    const categoryLabel = PLACE_CATEGORY_LABEL[category];
    const description = String(listing.description || '').slice(0, 155);
    const rating = getListingRating(listing);
    const image = listing.nonCopyrightImage
      || (Array.isArray(listing.images) && listing.images[0])
      || DEFAULT_OG_IMAGE;
    const path = `/place/${city}/${category}/${slug}`;

    const jsonLd: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': PLACE_SCHEMA_TYPE[category],
      name,
      description,
      url: `${BASE_URL}${path}`,
      image,
      address: {
        '@type': 'PostalAddress',
        ...(listing.address ? { streetAddress: listing.address } : {}),
        addressLocality: label,
        addressCountry: 'MA',
      },
    };
    if (listing.coordinates) {
      jsonLd.geo = {
        '@type': 'GeoCoordinates',
        latitude: listing.coordinates.lat,
        longitude: listing.coordinates.lng,
      };
    }
    if (rating && rating.averageRating > 0 && rating.totalReviews > 0) {
      jsonLd.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: rating.averageRating,
        reviewCount: rating.totalReviews,
      };
    }

    pages.push({
      path,
      priority: 0.7,
      title: `${name} — ${categoryLabel} in ${label}`,
      description,
      image,
      jsonLd,
      h1: name,
    });
  }
  return pages;
}

/** Things To Do pages (/things/:city/:name-slug) */
export function collectThingsPages(): IndexablePage[] {
  const pages: IndexablePage[] = [];
  const seen = new Set<string>();
  for (const activity of getAllActivities()) {
    if (!activity.slug || !activity.city) continue;
    const key = `${activity.city}::${activity.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const label = cityLabel(activity.city);
    const name = activity.name || 'Experience';
    const description = String(activity.short_description || activity.description || '').slice(0, 155);
    const hero = activity.media?.find((m: any) => m.media_type === 'hero') || activity.media?.[0];
    const image = (hero && (hero as any).url) || DEFAULT_OG_IMAGE;
    const path = `/things/${activity.city}/${activity.slug}`;

    const jsonLd: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name,
      description,
      url: `${BASE_URL}${path}`,
      image,
      address: { '@type': 'PostalAddress', addressLocality: label, addressCountry: 'MA' },
    };
    if (activity.coordinates) {
      jsonLd.geo = {
        '@type': 'GeoCoordinates',
        latitude: activity.coordinates.lat,
        longitude: activity.coordinates.lng,
      };
    }

    pages.push({
      path,
      priority: 0.7,
      title: `${name} — Things to Do in ${label}`,
      description,
      image,
      jsonLd,
      h1: name,
    });
  }
  return pages;
}

/** Homepage, finder hub and city/category browse pages */
export function collectStaticPages(): IndexablePage[] {
  const segments: Array<'food' | 'sleep' | 'things-to-do' | 'shopping'> = ['food', 'sleep', 'things-to-do', 'shopping'];
  const prettyLabel: Record<string, string> = {
    'food': 'Food & Restaurants',
    'sleep': 'Stays',
    'things-to-do': 'Things To Do',
    'shopping': 'Shopping',
  };

  const pages: IndexablePage[] = [
    {
      path: '/',
      priority: 1.0,
      title: 'Morocco Finder | Eat, Sleep, Things & Shopping — Like a Local',
      description: 'Pick your city, answer a short quiz, and get personalized local recommendations for food, stays, things to do, and shopping in Morocco.',
      image: DEFAULT_OG_IMAGE,
      jsonLd: null,
      h1: 'Morocco Finder',
    },
    {
      path: '/finder',
      priority: 0.9,
      title: 'Finder — Personalized Recommendations',
      description: 'Choose a city and category, answer a short quiz, and get personalized local recommendations for Morocco.',
      image: DEFAULT_OG_IMAGE,
      jsonLd: null,
      h1: 'Finder',
    },
  ];

  for (const segment of segments) {
    for (const city of getBrowseCities(segment)) {
      const label = cityLabel(city);
      const pretty = prettyLabel[segment];
      pages.push({
        path: `/finder/${city}/${segment}`,
        priority: 0.8,
        title: `${pretty} in ${label}, Morocco`,
        description: `Find the best ${pretty.toLowerCase()} in ${label}, Morocco with our personalized finder.`,
        image: DEFAULT_OG_IMAGE,
        jsonLd: null,
        h1: `${pretty} in ${label}`,
      });
    }
  }
  return pages;
}

/** Every indexable page on the website */
export function collectAllPages(): IndexablePage[] {
  return [...collectStaticPages(), ...collectPlacePages(), ...collectThingsPages()];
}
