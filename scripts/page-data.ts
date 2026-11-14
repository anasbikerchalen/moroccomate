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
import { SUPPORTED_LANGS, localizePath, type AppLanguage } from '../src/utils/localeRouting';
import { HOME_SEO_I18N, FINDER_SEO_I18N, getBrowseSeoI18n, type BrowseSegment } from '../src/data/seo/i18nSeo';

export const BASE_URL = 'https://www.moroccanmate.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/home/backgrounds/homepage_default_image.jpg`;

export interface IndexablePage {
  path: string;          // URL path, no trailing slash
  basePath: string;      // Canonical unprefixed base path (e.g. "/", "/finder/marrakech/food")
  lang: AppLanguage;     // Language code for this page
  hasLocalizedRoutes?: boolean; // Whether 5-lang localized versions exist in sitemap/prerender
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
    fullDescription?: string;
    durationMinutes?: number;
    highlights?: string[];
    includedServices?: string[];
    excludedServices?: string[];
    requirements?: string[];
    citySlug?: string;
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
    // Exclude global fast food & commodity supermarkets from indexable sitemap
    const lowerSlug = slug.toLowerCase();
    const isCommodityChain =
      lowerSlug.includes('dominos') ||
      lowerSlug.includes('kfc-') ||
      lowerSlug.includes('mcdonald') ||
      lowerSlug.includes('burger-king') ||
      lowerSlug.includes('pizza-hut') ||
      lowerSlug.includes('bim-') ||
      lowerSlug.includes('decathlon-');
    if (isCommodityChain) continue;

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
      basePath: path,
      lang: 'en',
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

    // If restaurant has verified digital menu, index its dedicated /menu SEO page
    if (isEat && (listing.menu || listing.ui?.menu)) {
      const menuPath = `${path}/menu`;
      pages.push({
        path: menuPath,
        basePath: menuPath,
        lang: 'en',
        priority: 0.8,
        title: `${name} Menu & Prices (${label})`,
        description: `Verified menu and prices (MAD) for ${name} in ${listing.neighborhood || 'Morocco'}, ${label}.`,
        image,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Menu',
          name: `${name} Menu`,
          url: `${BASE_URL}${menuPath}`,
          inLanguage: 'en',
        },
        h1: `${name} Menu`,
        meta: {
          city: label,
          category: 'Restaurant Menu',
          neighborhood: listing.neighborhood,
          price: price > 0 ? price : undefined,
          rating: rating?.averageRating,
        },
      });
    }
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

    const hlStrings = Array.isArray(activity.highlights)
      ? activity.highlights.map(h => (typeof h === 'string' ? h : h.name || '')).filter(Boolean)
      : [];

    const includedStrings = Array.isArray(activity.included_items)
      ? activity.included_items.map(inc => (typeof inc === 'string' ? inc : inc.title || '')).filter(Boolean)
      : [];

    const reqStrings = Array.isArray(activity.requirements)
      ? activity.requirements.map(r => (typeof r === 'string' ? r : r.item || '')).filter(Boolean)
      : [];

    const rawFullDesc = activity.description || activity.short_description || '';

    pages.push({
      path,
      basePath: path,
      lang: 'en',
      priority: 0.7,
      title: `${name} — Things to Do in ${label}`,
      description,
      image,
      jsonLd,
      h1: name,
      meta: {
        city: label,
        citySlug: activity.city,
        category: 'Things to Do',
        neighborhood: activity.neighborhood,
        address: activity.address,
        price: activity.pricing?.price,
        durationMinutes: activity.duration_minutes,
        openingHours: activity.schedule_text,
        fullDescription: rawFullDesc,
        highlights: hlStrings,
        includedServices: includedStrings,
        requirements: reqStrings,
      },
    });
  }
  return pages;
}

/** Homepage, finder hub and city/category browse pages across all 5 languages */
export function collectStaticPages(): IndexablePage[] {
  const segments: BrowseSegment[] = ['food', 'sleep', 'things-to-do', 'shopping'];
  const pages: IndexablePage[] = [];

  for (const lang of SUPPORTED_LANGS) {
    const homeSeo = HOME_SEO_I18N[lang];
    const homePath = localizePath('/', lang);
    pages.push({
      path: homePath,
      basePath: '/',
      lang,
      hasLocalizedRoutes: true,
      priority: lang === 'en' ? 1.0 : 0.9,
      title: homeSeo.title.replace(/\s*\|\s*Moroccan Mate$/i, ''),
      description: homeSeo.description,
      image: DEFAULT_OG_IMAGE,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Moroccan Mate',
        alternateName: ['MoroccanMate'],
        url: `${BASE_URL}${homePath === '/' ? '' : homePath}`,
        inLanguage: lang,
        description: homeSeo.description,
      },
      h1: homeSeo.h1,
    });

    const finderSeo = FINDER_SEO_I18N[lang];
    pages.push({
      path: localizePath('/finder', lang),
      basePath: '/finder',
      lang,
      hasLocalizedRoutes: true,
      priority: lang === 'en' ? 0.9 : 0.85,
      title: finderSeo.title,
      description: finderSeo.description,
      image: DEFAULT_OG_IMAGE,
      jsonLd: null,
      h1: finderSeo.h1,
    });
  }

  for (const segment of segments) {
    for (const city of getBrowseCities(segment)) {
      const label = cityLabel(city);
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

      // Only index category browse pages that have at least 3 curated items
      // Small empty categories (< 3) are soft 404s for Google
      if (matchedPlaces.length >= 3) {
        const basePath = `/finder/${city}/${segment}`;
        for (const lang of SUPPORTED_LANGS) {
          const browseSeo = getBrowseSeoI18n(label, segment, lang);
          pages.push({
            path: localizePath(basePath, lang),
            basePath,
            lang,
            hasLocalizedRoutes: true,
            priority: lang === 'en' ? 0.8 : 0.75,
            title: browseSeo.title,
            description: browseSeo.description,
            image: DEFAULT_OG_IMAGE,
            jsonLd: null,
            h1: browseSeo.h1,
            meta: {
              city: label,
              category: browseSeo.h1,
              matchedPlaces: matchedPlaces.map((p) => ({
                ...p,
                url: localizePath(p.url, lang),
              })),
            },
          });
        }
      }
    }
  }
  return pages;
}

/** Programmatic SEO / "People Also Search For" feature landing pages across all cities & 5 languages */
export function collectSearchIntentPages(): IndexablePage[] {
  const pages: IndexablePage[] = [];

  for (const [city, categories] of Object.entries(CITY_SEARCH_INTENTS)) {
    const label = cityLabel(city);
    for (const [category, slugs] of Object.entries(categories)) {
      for (const slug of slugs) {
        const enIntent = getSearchIntent(category, slug, 'en');
        if (!enIntent) continue;

        // Find top matching places in this city for this search intent
        const matchedPlaces: Array<{ name: string; url: string; rating?: number; price?: number; neighborhood?: string }> = [];
        try {
          const normCat = category === 'sleep' || category === 'stay' ? 'sleep' : category === 'food' || category === 'eat' ? 'food' : 'shopping';
          const index = getPlaceIndex(city.toLowerCase(), normCat as any);
          for (const [s, l] of index.bySlug.entries()) {
            if (doesListingMatchIntent(l, enIntent)) {
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

        // Only index search intent pages that have at least 3 matching places
        // Google flags intent pages with < 3 items as thin programmatic duplicates
        if (matchedPlaces.length >= 3) {
          const basePath = `/finder/${city.toLowerCase()}/${category}/${slug}`;
          for (const lang of SUPPORTED_LANGS) {
            const intent = getSearchIntent(category, slug, lang);
            if (!intent) continue;
            pages.push({
              path: localizePath(basePath, lang),
              basePath,
              lang,
              hasLocalizedRoutes: true,
              priority: lang === 'en' ? 0.85 : 0.8,
              title: intent.seoTitle(label).replace(/\s*\|\s*Moroccan Mate$/i, ''),
              description: intent.seoDescription(label),
              image: DEFAULT_OG_IMAGE,
              jsonLd: null,
              h1: intent.headerTitle(label),
              meta: {
                city: label,
                category: intent.category,
                matchedPlaces: matchedPlaces.map((p) => ({
                  ...p,
                  url: localizePath(p.url, lang),
                })),
              },
            });
          }
        }
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

