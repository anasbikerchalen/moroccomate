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
  getPlaceIndex,
  PLACE_CATEGORY_LABEL,
  PLACE_SCHEMA_TYPE,
  type PlaceUrlCategory,
} from '../src/listings/placeRoutes';
import { getAllActivities } from '../src/things-to-do';
import { getListingRating } from '../src/listings/utils';
import { cityMap } from '../src/data/cities';
import { getStayOwnerAnswer } from '../src/engine/stayAdapter';
import { CITY_SEARCH_INTENTS, getSearchIntent, doesListingMatchIntent } from '../src/data/seo/searchIntents';

export const BASE_URL = 'https://moroccanmate.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/home/backgrounds/homepage_default_image.jpg`;

export interface IndexablePage {
  path: string;          // URL path, no trailing slash
  priority: number;
  title: string;         // page title WITHOUT the "| Moroccan Mate" suffix
  description: string;
  image: string;         // absolute image URL for social previews
  jsonLd: Record<string, any> | null;
  faq?: { question: string; answer: string }[];
  h1: string;            // main heading for the noscript fallback content
  meta?: {
    city?: string;
    category?: string;
    neighborhood?: string;
    price?: number;
    rating?: number;
    reviewCount?: number;
    address?: string;
    amenities?: string[];
    cuisines?: string[];
    bestDishes?: string[];
    pros?: string[];
    cons?: string[];
    tip?: string;
    openingHours?: string;
    specialties?: string[];
    lifestyle?: string;
    matchedPlaces?: Array<{ name: string; url: string; rating?: number; price?: number; neighborhood?: string }>;
  };
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
    const isSleep = category === 'sleep';
    const isEat = category === 'food';
    const isShopping = category === 'shopping';
    const price = isSleep ? (listing.pricePerNight ?? 0) : (listing.pricePerPerson ?? (listing.filter?.pricePerPerson ?? 0));
    const rawDescription = String(listing.description || '').slice(0, 155);
    const description = isSleep && price > 0
      ? `Price from ${price} MAD/night. ${rawDescription.slice(0, 115)}`
      : isEat && price > 0
        ? `Avg ${price} MAD/person. ${rawDescription.slice(0, 120)}`
        : rawDescription;
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
    if (isSleep && price > 0) {
      jsonLd.priceRange = `${price} MAD`;
      jsonLd.offers = {
        '@type': 'Offer',
        price,
        priceCurrency: 'MAD',
        availability: 'https://schema.org/InStock',
      };
      if (Array.isArray(listing.amenities) && listing.amenities.length > 0) {
        jsonLd.amenityFeature = listing.amenities.slice(0, 10).map((a: string) => ({
          '@type': 'LocationFeatureSpecification',
          name: a,
          value: true,
        }));
      }
    }
    if (isEat) {
      if (price > 0) {
        jsonLd.priceRange = `${price} MAD`;
      }
      const styles = listing.foodStyles || (listing.quiz && listing.quiz.foodStyles) || listing.cuisineTags || [];
      if (Array.isArray(styles) && styles.length > 0) {
        jsonLd.servesCuisine = styles;
      }
      if (listing.reservationMethod && listing.reservationMethod.length > 0) {
        jsonLd.acceptsReservations = true;
      }
    }
    if (isShopping) {
      jsonLd.currenciesAccepted = 'MAD, EUR, USD';
      jsonLd.paymentAccepted = 'Cash, Credit Card';
    }

    const faq = isSleep
      ? [{ question: `Who is the owner of ${name}?`, answer: getStayOwnerAnswer(listing) }]
      : undefined;

    const openingHoursStr = listing.openTime && listing.closeTime
      ? `${listing.openTime} – ${listing.closeTime}`
      : undefined;

    pages.push({
      path,
      priority: 0.7,
      title: `${name} — ${categoryLabel} in ${label}`,
      description,
      image,
      jsonLd,
      faq,
      h1: name,
      meta: {
        city: label,
        category: categoryLabel,
        neighborhood: listing.neighborhood,
        price: price > 0 ? price : undefined,
        rating: rating?.averageRating,
        reviewCount: rating?.totalReviews,
        address: listing.address,
        amenities: Array.isArray(listing.amenities) ? listing.amenities : undefined,
        cuisines: Array.isArray(listing.foodStyles) ? listing.foodStyles : (Array.isArray(listing.quiz?.foodStyles) ? listing.quiz.foodStyles : undefined),
        bestDishes: Array.isArray(listing.bestDishes) ? listing.bestDishes : (Array.isArray(listing.ui?.bestDishes) ? listing.ui.bestDishes : undefined),
        pros: Array.isArray(listing.pros) ? listing.pros : (Array.isArray(listing.ui?.pros) ? listing.ui.pros : undefined),
        cons: Array.isArray(listing.cons) ? listing.cons : (Array.isArray(listing.ui?.cons) ? listing.ui.cons : undefined),
        tip: listing.tip || listing.ui?.tip,
        openingHours: openingHoursStr,
        specialties: Array.isArray(listing.specialties) ? listing.specialties : (Array.isArray(listing.products) ? listing.products : undefined),
        lifestyle: typeof listing.lifestyle === 'string' ? listing.lifestyle : (Array.isArray(listing.lifestyle) ? listing.lifestyle.join(', ') : undefined),
      },
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
      meta: {
        city: label,
        category: 'Things to Do',
        address: activity.address,
      },
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
      title: 'Moroccan Mate | Eat, Sleep, Things & Shopping — Like a Local',
      description: 'Pick your city, answer a short quiz, and get personalized local recommendations for food, stays, things to do, and shopping in Morocco.',
      image: DEFAULT_OG_IMAGE,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Moroccan Mate',
        alternateName: ['MoroccanMate'],
        url: BASE_URL,
        description: 'Pick your city, answer a short quiz, and get personalized local recommendations for food, stays, things to do, and shopping in Morocco.',
      },
      h1: 'Moroccan Mate',
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
      const cityKey = city.toLowerCase();

      const matchedPlaces: Array<{ name: string; url: string; rating?: number; price?: number; neighborhood?: string }> = [];
      try {
        if (segment === 'things-to-do') {
          for (const act of getAllActivities().filter((a: any) => String(a.city || '').toLowerCase() === cityKey)) {
            if (!act.slug) continue;
            matchedPlaces.push({
              name: act.name || 'Experience',
              url: `/things/${cityKey}/${act.slug}`,
              neighborhood: act.neighborhood,
            });
          }
        } else {
          const normCat = segment === 'food' ? 'food' : segment === 'sleep' ? 'sleep' : 'shopping';
          const index = getPlaceIndex(cityKey, normCat as any);
          for (const [s, l] of index.bySlug.entries()) {
            const r = getListingRating(l);
            const isSleep = normCat === 'sleep';
            const price = isSleep ? (l.pricePerNight ?? 0) : (l.pricePerPerson ?? (l.filter?.pricePerPerson ?? 0));
            matchedPlaces.push({
              name: l.name || l.title || 'Place',
              url: `/place/${cityKey}/${normCat}/${s}`,
              rating: r?.averageRating,
              price: price > 0 ? price : undefined,
              neighborhood: l.neighborhood,
            });
          }
        }
      } catch {
        // Graceful fallback
      }

      pages.push({
        path: `/finder/${city}/${segment}`,
        priority: 0.8,
        title: `${pretty} in ${label}, Morocco`,
        description: `Find the best ${pretty.toLowerCase()} in ${label}, Morocco with our personalized finder.`,
        image: DEFAULT_OG_IMAGE,
        jsonLd: null,
        h1: `${pretty} in ${label}`,
        meta: {
          city: label,
          category: pretty,
          matchedPlaces,
        },
      });
    }
  }
  return pages;
}

/** Programmatic SEO / "People Also Search For" feature landing pages across all cities */
export function collectSearchIntentPages(): IndexablePage[] {
  const pages: IndexablePage[] = [];

  for (const [city, categories] of Object.entries(CITY_SEARCH_INTENTS)) {
    const label = cityLabel(city);
    for (const [category, slugs] of Object.entries(categories)) {
      for (const slug of slugs) {
        const intent = getSearchIntent(category, slug);
        if (!intent) continue;

        const path = `/finder/${city.toLowerCase()}/${category}/${slug}`;
        const title = intent.seoTitle(label).replace(/\s*\|\s*Moroccan Mate$/i, '');
        const description = intent.seoDescription(label);
        const h1 = intent.headerTitle(label);

        // Find top matching places in this city for this search intent
        const matchedPlaces: Array<{ name: string; url: string; rating?: number; price?: number; neighborhood?: string }> = [];
        try {
          const normCat = category === 'sleep' || category === 'stay' ? 'sleep' : category === 'food' || category === 'eat' ? 'food' : 'shopping';
          const index = getPlaceIndex(city.toLowerCase(), normCat as any);
          for (const [s, l] of index.bySlug.entries()) {
            if (doesListingMatchIntent(l, intent)) {
              const r = getListingRating(l);
              matchedPlaces.push({
                name: l.name || l.title || 'Place',
                url: `/place/${city.toLowerCase()}/${normCat}/${s}`,
                rating: r?.averageRating,
                price: l.pricePerNight,
                neighborhood: l.neighborhood,
              });
              if (matchedPlaces.length >= 8) break;
            }
          }
        } catch {
          // Graceful fallback
        }

        pages.push({
          path,
          priority: 0.85,
          title,
          description,
          image: DEFAULT_OG_IMAGE,
          jsonLd: null,
          h1,
          meta: {
            city: label,
            category: intent.category,
            matchedPlaces,
          },
        });
      }
    }
  }

  return pages;
}

/** Every indexable page on the website */
export function collectAllPages(): IndexablePage[] {
  return [
    ...collectStaticPages(),
    ...collectSearchIntentPages(),
    ...collectPlacePages(),
    ...collectThingsPages(),
  ];
}

