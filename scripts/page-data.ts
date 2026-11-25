/**
 * =========================================================================
 * SHARED SEO PAGE DATA — used by generate-sitemap.ts and prerender-places.ts
 * =========================================================================
 * Collects title / description / image / structured data for EVERY
 * indexable page across all 5 languages, using the unified seoEngine.
 * No content is generated here — real listing data only.
 */
import {
  getAllPlacePages,
  getBrowseCities,
  getPlaceIndex,
  PLACE_CATEGORY_LABEL,
  type PlaceUrlCategory,
} from '../src/listings/placeRoutes';
import { getAllActivities } from '../src/things-to-do';
import { getListingRating } from '../src/listings/utils';
import { cityMap } from '../src/data/cities';
import { getStayOwnerAnswer } from '../src/engine/stayAdapter';
import { CITY_SEARCH_INTENTS, getSearchIntent, doesListingMatchIntent } from '../src/data/seo/searchIntents';
import { SUPPORTED_LANGS, localizePath, type AppLanguage } from '../src/utils/localeRouting';
import { CATEGORY_LABELS_I18N, type BrowseSegment } from '../src/data/seo/i18nSeo';
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  buildBlogArticleSeo,
  buildBlogIndexSeo,
  buildBrowseSeo,
  buildFinderHubSeo,
  buildHomeSeo,
  buildMenuSeo,
  buildPlaceSeo,
  buildSearchIntentSeo,
  buildThingsSeo,
  buildTrustPageSeo,
  extractListingReviewsData,
  type BreadcrumbItem,
  type FaqItem,
  type TrustPageKey,
} from '../src/data/seo/seoEngine';
import { getAllBlogArticles, getLocalizedArticleContent } from '../src/data/blog';
import { getEatPriceMetrics } from '../src/utils/eatPrice';
import { getWalkingDistancePlaces, formatNearbyTravelLabel } from '../src/engine/proximityEngine';
import {
  getLocalizedSectionTitle,
  getLocalizedSectionDescription,
  getDishDisplayName,
  getDishSecondaryText,
} from '../src/data/menuTranslations';
import {
  hasListingTranslations,
  localizeListing,
} from '../src/listings/translations';

export { BASE_URL, DEFAULT_OG_IMAGE };

export interface IndexablePage {
  path: string;          // URL path, no trailing slash
  basePath: string;      // Canonical unprefixed base path (e.g. "/", "/finder/marrakech/food")
  lang: AppLanguage;     // Language code for this page
  hasLocalizedRoutes?: boolean; // Whether 5-lang localized versions exist in sitemap/prerender
  priority: number;
  title: string;         // Final <= 60 char title ready for <title>
  description: string;   // Final <= 155 char description
  image: string;         // Absolute image URL for social previews
  jsonLd: Record<string, any> | null;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FaqItem[];
  h1: string;            // Main heading for the prerendered fallback content
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
  meta?: {
    city?: string;
    category?: string;
    neighborhood?: string;
    price?: number;
    priceRangeText?: string;
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
    seasonalHoursNote?: string;
    specialties?: string[];
    lifestyle?: string;
    fullDescription?: string;
    editorialGuide?: Array<{ heading: string; body: string }>;
    knowBeforeYouGo?: string[];
    nearbyDistances?: Array<{ name: string; travelLabel: string; distanceText?: string }>;
    sampleReviews?: Array<{ author: string; rating: number; text: string }>;
    durationMinutes?: number;
    highlights?: string[];
    includedServices?: string[];
    excludedServices?: string[];
    requirements?: string[];
    citySlug?: string;
    hasMenu?: boolean;
    menuUrl?: string;
    placeUrl?: string;
    menuSections?: Array<{
      title: string;
      description?: string;
      items: Array<{ name: string; description?: string; price: number }>;
    }>;
    menuPhotos?: Array<{
      url: string;
      alt: string;
      title?: string;
      caption?: string;
      width?: number;
      height?: number;
    }>;
    matchedPlaces?: Array<{ name: string; url: string; rating?: number; price?: number; neighborhood?: string }>;
  };
}

/** Pretty city label with graceful fallback for every data city id */
function cityLabel(city: string): string {
  const key = String(city || '').toLowerCase();
  if (cityMap[key]?.name) return cityMap[key].name;
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
}

/** Eat / Sleep / Shopping place pages + /menu pages across all 5 languages */
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
    const isSleep = category === 'sleep';
    const isEat = category === 'food';
    const eatMetrics = isEat ? getEatPriceMetrics(listing) : null;
    const price = isSleep
      ? Number(listing.pricePerNight ?? 0)
      : isEat
        ? (eatMetrics?.avgPersonMad ?? 0)
        : Number(listing.pricePerPerson ?? listing.filter?.pricePerPerson ?? 0);
    const rating = getListingRating(listing);
    const ownerAnswer = isSleep ? getStayOwnerAnswer(listing) : undefined;
    const basePlacePath = `/place/${city}/${category}/${slug}`;
    const menuData = isEat || isSleep ? (listing.ui?.menu || listing.menu) : undefined;
    const hasMenu = Boolean(
      menuData &&
        ((Array.isArray(menuData.sections) && menuData.sections.length > 0) ||
          (Array.isArray(menuData.menuPhotos) && menuData.menuPhotos.length > 0) ||
          (Array.isArray(menuData.scannedMenuPhotos) && menuData.scannedMenuPhotos.length > 0))
    );
    const rawMenuPhotos = (isEat || isSleep) && menuData
      ? (Array.isArray(menuData.menuPhotos) && menuData.menuPhotos.length > 0
          ? menuData.menuPhotos
          : Array.isArray(menuData.scannedMenuPhotos)
            ? menuData.scannedMenuPhotos.map((url: string, idx: number) => ({
                url,
                alt: `${listing.ui?.name || listing.name || 'Restaurant'} menu page ${idx + 1}`,
                title: `${listing.ui?.name || listing.name || 'Restaurant'} Menu Page ${idx + 1}`,
                caption: `Menu page ${idx + 1}`,
              }))
            : [])
      : [];
    const normalizedMenuPhotos = rawMenuPhotos.map((p: any) => ({
      url: String(p.url),
      alt: String(p.alt || ''),
      title: p.title ? String(p.title) : undefined,
      caption: p.caption ? String(p.caption) : undefined,
      width: typeof p.width === 'number' ? p.width : undefined,
      height: typeof p.height === 'number' ? p.height : undefined,
    }));
    const sitemapImages = normalizedMenuPhotos.map((p: any) => ({
      loc: p.url.startsWith('http') ? p.url : `${BASE_URL}${p.url.startsWith('/') ? '' : '/'}${p.url}`,
      title: p.title,
      caption: p.caption || p.alt,
    }));
    const openingHoursStr =
      (listing.ui?.openTime || listing.openTime) && (listing.ui?.closeTime || listing.closeTime)
        ? `${listing.ui?.openTime || listing.openTime} – ${listing.ui?.closeTime || listing.closeTime}`
        : undefined;

    const rawNearby = isEat || isSleep ? getWalkingDistancePlaces(listing) : [];
    const nearbyDistances =
      rawNearby.length > 0
        ? rawNearby.slice(0, 6).map((p) => ({
            name: p.name,
            travelLabel: formatNearbyTravelLabel(p),
            distanceText: typeof p.distance_km === 'number' ? `${p.distance_km} km` : undefined,
          }))
        : undefined;

    const rawReviewsList = extractListingReviewsData(listing)?.reviews || [];
    const sampleReviews = Array.isArray(rawReviewsList)
      ? rawReviewsList
          .filter((r: any) => r?.text && String(r.text).trim().length >= 30)
          .slice(0, 5)
          .map((r: any) => ({
            author: String(r.author || 'Traveler'),
            rating: Number(r.rating || 5),
            text: String(r.text).trim(),
          }))
      : undefined;

    const isFullyTranslated = hasListingTranslations(listing.id);
    const langsForListing = isFullyTranslated ? SUPPORTED_LANGS : (['en'] as const);

    for (const lang of langsForListing) {
      const localizedListing = localizeListing(listing, lang);
      const seasonalHoursNote: string | undefined =
        localizedListing.ui?.seasonalHoursNote || localizedListing.seasonalHoursNote;
      const rawEditorial =
        localizedListing.ui?.editorialGuide || localizedListing.editorialGuide;
      const editorialGuide: Array<{ heading: string; body: string }> | undefined = Array.isArray(
        rawEditorial
      )
        ? rawEditorial.map((part: any) => ({
            heading: String(part?.heading || part?.title || ''),
            body: String(part?.body || ''),
          }))
        : undefined;
      const knowBeforeYouGo: string[] | undefined = Array.isArray(
        localizedListing.ui?.knowBeforeYouGo || localizedListing.knowBeforeYouGo
      )
        ? (localizedListing.ui?.knowBeforeYouGo || localizedListing.knowBeforeYouGo)
        : undefined;
      const localizedOwnerAnswer = isSleep
        ? (localizedListing.ownerAnswer || ownerAnswer)
        : undefined;

      const seo = buildPlaceSeo({
        listing: localizedListing,
        category,
        cityKey: city,
        cityLabel: label,
        slug,
        lang,
        ownerAnswer: localizedOwnerAnswer,
      });

      const catLabel = CATEGORY_LABELS_I18N[lang]?.[category] || PLACE_CATEGORY_LABEL[category];
      const fullMenuSections = hasMenu
        ? (menuData?.sections || []).map((sec: any) => ({
            title: getLocalizedSectionTitle(sec, lang),
            description: getLocalizedSectionDescription(sec, lang),
            items: (sec.items || []).map((it: any) => ({
              name: getDishDisplayName(it, lang),
              description: getDishSecondaryText(it, lang),
              price: Number(it.price || 0),
            })),
          }))
        : undefined;

      pages.push({
        path: localizePath(basePlacePath, lang),
        basePath: basePlacePath,
        lang,
        hasLocalizedRoutes: isFullyTranslated,
        priority: 0.7,
        title: seo.title,
        description: seo.description,
        image: seo.image,
        jsonLd: seo.jsonLd,
        breadcrumbs: seo.breadcrumbs,
        faq: seo.faq,
        h1: seo.h1,
        ...(sitemapImages.length > 0 ? { images: sitemapImages } : {}),
        meta: {
          city: label,
          citySlug: city,
          category: catLabel,
          neighborhood: localizedListing.ui?.neighborhood || localizedListing.neighborhood,
          price: price > 0 ? price : undefined,
          priceRangeText: isEat && eatMetrics?.perPersonRangeText
            ? `${eatMetrics.perPersonRangeText} / person`
            : undefined,
          rating: rating?.averageRating,
          reviewCount: rating?.totalReviews,
          address:
            localizedListing.ui?.exactAddressAndCoordinates?.address ||
            localizedListing.ui?.address ||
            localizedListing.address,
          amenities: Array.isArray(localizedListing.amenities) ? localizedListing.amenities : undefined,
          cuisines: Array.isArray(localizedListing.foodStyles)
            ? localizedListing.foodStyles
            : Array.isArray(localizedListing.quiz?.foodStyles)
              ? localizedListing.quiz.foodStyles
              : undefined,
          bestDishes: Array.isArray(localizedListing.bestDishes)
            ? localizedListing.bestDishes
            : Array.isArray(localizedListing.ui?.bestDishes)
              ? localizedListing.ui.bestDishes
              : undefined,
          tip: localizedListing.tip || localizedListing.ui?.tip,
          pros: Array.isArray(localizedListing.pros) ? localizedListing.pros : undefined,
          cons: Array.isArray(localizedListing.cons) ? localizedListing.cons : undefined,
          fullDescription:
            localizedListing.description ||
            localizedListing.ui?.description ||
            localizedListing.short_description,
          openingHours: openingHoursStr,
          seasonalHoursNote,
          editorialGuide,
          knowBeforeYouGo,
          nearbyDistances,
          sampleReviews,
          hasMenu,
          menuUrl: hasMenu ? localizePath(`${basePlacePath}/menu`, lang) : undefined,
          menuSections: fullMenuSections,
          ...(normalizedMenuPhotos.length > 0 ? { menuPhotos: normalizedMenuPhotos } : {}),
        },
      });

      if (hasMenu) {
        const baseMenuPath = `${basePlacePath}/menu`;
        const menuSeo = buildMenuSeo({
          listing: localizedListing,
          category: isSleep ? 'sleep' : 'food',
          cityKey: city,
          cityLabel: label,
          slug,
          lang,
        });

        pages.push({
          path: localizePath(baseMenuPath, lang),
          basePath: baseMenuPath,
          lang,
          hasLocalizedRoutes: isFullyTranslated,
          priority: 0.8,
          title: menuSeo.title,
          description: menuSeo.description,
          image: menuSeo.image,
          jsonLd: menuSeo.jsonLd,
          breadcrumbs: menuSeo.breadcrumbs,
          faq: menuSeo.faq,
          h1: menuSeo.h1,
          ...(sitemapImages.length > 0 ? { images: sitemapImages } : {}),
          meta: {
            city: label,
            citySlug: city,
            category: catLabel,
            neighborhood: localizedListing.ui?.neighborhood || localizedListing.neighborhood,
            price: price > 0 ? price : undefined,
            priceRangeText: menuSeo.priceRangeText,
            rating: rating?.averageRating,
            reviewCount: rating?.totalReviews,
            address:
              localizedListing.ui?.exactAddressAndCoordinates?.address ||
              localizedListing.ui?.address ||
              localizedListing.address,
            cuisines: Array.isArray(localizedListing.foodStyles)
              ? localizedListing.foodStyles
              : Array.isArray(localizedListing.quiz?.foodStyles)
                ? localizedListing.quiz.foodStyles
                : undefined,
            bestDishes: Array.isArray(localizedListing.bestDishes)
              ? localizedListing.bestDishes
              : Array.isArray(localizedListing.ui?.bestDishes)
                ? localizedListing.ui.bestDishes
                : undefined,
            openingHours: openingHoursStr,
            seasonalHoursNote,
            placeUrl: localizePath(basePlacePath, lang),
            menuSections: fullMenuSections,
            ...(normalizedMenuPhotos.length > 0 ? { menuPhotos: normalizedMenuPhotos } : {}),
          },
        });
      }
    }
  }
  return pages;
}

/** Things To Do pages (/things/:city/:name-slug) across all 5 languages */
export function collectThingsPages(): IndexablePage[] {
  const pages: IndexablePage[] = [];
  const seen = new Set<string>();
  for (const activity of getAllActivities()) {
    if (!activity.slug || !activity.city) continue;
    const key = `${activity.city}::${activity.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const cityKey = String(activity.city).toLowerCase();
    const label = cityLabel(cityKey);
    const basePath = `/things/${cityKey}/${activity.slug}`;

    const hlStrings = Array.isArray(activity.highlights)
      ? activity.highlights.map((h: any) => (typeof h === 'string' ? h : h.name || '')).filter(Boolean)
      : [];
    const includedStrings = Array.isArray(activity.included_items)
      ? activity.included_items.map((inc: any) => (typeof inc === 'string' ? inc : inc.title || inc.name || '')).filter(Boolean)
      : [];
    const reqStrings = Array.isArray(activity.requirements)
      ? activity.requirements.map((r: any) => (typeof r === 'string' ? r : r.item || r.name || '')).filter(Boolean)
      : [];
    const rawFullDesc = activity.description || activity.short_description || '';

    const thingReviewsList = extractListingReviewsData(activity)?.reviews || [];
    const thingSampleReviews = Array.isArray(thingReviewsList)
      ? thingReviewsList
          .filter((r: any) => r?.text && String(r.text).trim().length >= 30)
          .slice(0, 5)
          .map((r: any) => ({
            author: String(r.author || 'Traveler'),
            rating: Number(r.rating || 5),
            text: String(r.text).trim(),
          }))
      : undefined;

    for (const lang of ['en'] as const) {
      const seo = buildThingsSeo({
        activity,
        cityKey,
        cityLabel: label,
        lang,
      });

      pages.push({
        path: localizePath(basePath, lang),
        basePath,
        lang,
        hasLocalizedRoutes: false,
        priority: 0.7,
        title: seo.title,
        description: seo.description,
        image: seo.image,
        jsonLd: seo.jsonLd,
        breadcrumbs: seo.breadcrumbs,
        faq: seo.faq,
        h1: seo.h1,
        meta: {
          city: label,
          citySlug: cityKey,
          category: CATEGORY_LABELS_I18N[lang]['things-to-do'],
          neighborhood: activity.neighborhood,
          address: activity.address,
          price: activity.pricing?.price,
          durationMinutes: activity.duration_minutes,
          openingHours: activity.schedule_text,
          fullDescription: rawFullDesc,
          highlights: hlStrings,
          includedServices: includedStrings,
          requirements: reqStrings,
          ...(thingSampleReviews && thingSampleReviews.length > 0 ? { sampleReviews: thingSampleReviews } : {}),
        },
      });
    }
  }
  return pages;
}

/** Homepage, finder hub and city/category browse pages across all 5 languages */
export function collectStaticPages(): IndexablePage[] {
  const segments: BrowseSegment[] = ['food', 'sleep', 'things-to-do', 'shopping'];
  const pages: IndexablePage[] = [];

  for (const lang of SUPPORTED_LANGS) {
    const home = buildHomeSeo(lang);
    pages.push({
      path: localizePath('/', lang),
      basePath: '/',
      lang,
      hasLocalizedRoutes: true,
      priority: lang === 'en' ? 1.0 : 0.9,
      title: home.title,
      description: home.description,
      image: home.image,
      jsonLd: home.jsonLd,
      h1: home.h1,
    });

    const finder = buildFinderHubSeo(lang);
    pages.push({
      path: localizePath('/finder', lang),
      basePath: '/finder',
      lang,
      hasLocalizedRoutes: true,
      priority: lang === 'en' ? 0.9 : 0.85,
      title: finder.title,
      description: finder.description,
      image: finder.image,
      jsonLd: finder.jsonLd,
      h1: finder.h1,
    });

    const trustKeys: TrustPageKey[] = ['about', 'contact', 'privacy', 'terms'];
    for (const key of trustKeys) {
      const trustSeo = buildTrustPageSeo(key, lang);
      pages.push({
        path: localizePath(`/${key}`, lang),
        basePath: `/${key}`,
        lang,
        hasLocalizedRoutes: true,
        priority: key === 'about' || key === 'contact' ? 0.7 : 0.5,
        title: trustSeo.title,
        description: trustSeo.description,
        image: trustSeo.image,
        jsonLd: trustSeo.jsonLd,
        breadcrumbs: trustSeo.breadcrumbs,
        h1: trustSeo.h1,
      });
    }
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
          const index = getPlaceIndex(cityKey, normCat as PlaceUrlCategory);
          for (const [s, l] of index.bySlug.entries()) {
            const r = getListingRating(l);
            const isSleep = normCat === 'sleep';
            const price = isSleep
              ? (l.pricePerNight ?? 0)
              : normCat === 'food'
                ? getEatPriceMetrics(l).avgPersonMad
                : 0;
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
      if (matchedPlaces.length >= 3) {
        const basePath = `/finder/${city}/${segment}`;
        for (const lang of SUPPORTED_LANGS) {
          const localizedMatched = matchedPlaces.map((p) => ({
            ...p,
            url: localizePath(p.url, lang),
          }));
          const browseSeo = buildBrowseSeo({
            cityLabel: label,
            cityKey,
            segment,
            lang,
            matchedPlaces: localizedMatched,
          });
          pages.push({
            path: localizePath(basePath, lang),
            basePath,
            lang,
            hasLocalizedRoutes: true,
            priority: lang === 'en' ? 0.8 : 0.75,
            title: browseSeo.title,
            description: browseSeo.description,
            image: browseSeo.image,
            jsonLd: browseSeo.jsonLd,
            h1: browseSeo.h1,
            meta: {
              city: label,
              citySlug: cityKey,
              category: browseSeo.h1,
              matchedPlaces: localizedMatched,
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
    const cityKey = city.toLowerCase();
    for (const [category, slugs] of Object.entries(categories)) {
      for (const slug of slugs) {
        const enIntent = getSearchIntent(category, slug, 'en');
        if (!enIntent) continue;

        const matchedPlaces: Array<{ name: string; url: string; rating?: number; price?: number; neighborhood?: string }> = [];
        try {
          const normCat = category === 'sleep' || category === 'stay' ? 'sleep' : category === 'food' || category === 'eat' ? 'food' : 'shopping';
          const index = getPlaceIndex(cityKey, normCat as PlaceUrlCategory);
          for (const [s, l] of index.bySlug.entries()) {
            if (doesListingMatchIntent(l, enIntent)) {
              const r = getListingRating(l);
              const price =
                normCat === 'sleep'
                  ? (l.pricePerNight ?? 0)
                  : normCat === 'food'
                    ? getEatPriceMetrics(l).avgPersonMad
                    : 0;
              matchedPlaces.push({
                name: l.name || l.title || 'Place',
                url: `/place/${cityKey}/${normCat}/${s}`,
                rating: r?.averageRating,
                price: price > 0 ? price : undefined,
                neighborhood: l.neighborhood,
              });
              if (matchedPlaces.length >= 8) break;
            }
          }
        } catch {
          // Graceful fallback
        }

        if (matchedPlaces.length >= 3) {
          const basePath = `/finder/${cityKey}/${category}/${slug}`;
          for (const lang of SUPPORTED_LANGS) {
            const intent = getSearchIntent(category, slug, lang);
            if (!intent) continue;
            const localizedMatched = matchedPlaces.map((p) => ({
              ...p,
              url: localizePath(p.url, lang),
            }));
            const intentSeo = buildSearchIntentSeo({
              intent,
              cityLabel: label,
              cityKey,
              category,
              lang,
              matchedPlaces: localizedMatched,
            });
            pages.push({
              path: localizePath(basePath, lang),
              basePath,
              lang,
              hasLocalizedRoutes: true,
              priority: lang === 'en' ? 0.85 : 0.8,
              title: intentSeo.title,
              description: intentSeo.description,
              image: intentSeo.image,
              jsonLd: intentSeo.jsonLd,
              h1: intentSeo.h1,
              meta: {
                city: label,
                citySlug: cityKey,
                category: intent.category,
                matchedPlaces: localizedMatched,
              },
            });
          }
        }
      }
    }
  }

  return pages;
}

export function collectBlogPages(): IndexablePage[] {
  const pages: IndexablePage[] = [];

  for (const lang of SUPPORTED_LANGS) {
    const indexSeo = buildBlogIndexSeo(lang);
    pages.push({
      path: localizePath('/blog', lang),
      basePath: '/blog',
      lang,
      hasLocalizedRoutes: true,
      priority: lang === 'en' ? 0.9 : 0.85,
      title: indexSeo.title,
      description: indexSeo.description,
      image: indexSeo.image,
      jsonLd: indexSeo.jsonLd,
      breadcrumbs: indexSeo.breadcrumbs,
      h1: indexSeo.h1,
    });
  }

  for (const article of getAllBlogArticles()) {
    const basePath = `/blog/${article.slug}`;
    for (const lang of SUPPORTED_LANGS) {
      const loc = getLocalizedArticleContent(article, lang);
      const artSeo = buildBlogArticleSeo({
        slug: article.slug,
        heroImageKey: article.heroImageKey,
        publishedAt: article.publishedAt,
        seoTitle: loc.seoTitle,
        seoDescription: loc.seoDescription,
        title: loc.title,
        authorName: loc.authorName,
        lang,
      });
      pages.push({
        path: localizePath(basePath, lang),
        basePath,
        lang,
        hasLocalizedRoutes: true,
        priority: lang === 'en' ? 0.85 : 0.8,
        title: artSeo.title,
        description: artSeo.description,
        image: artSeo.image,
        jsonLd: artSeo.jsonLd,
        breadcrumbs: artSeo.breadcrumbs,
        h1: artSeo.h1,
        meta: {
          city: loc.kickerCityLabel,
          citySlug: article.cityId,
          fullDescription: loc.deck,
        },
      });
    }
  }

  return pages;
}

/** Every indexable page on the website */
export function collectAllPages(): IndexablePage[] {
  return [
    ...collectStaticPages(),
    ...collectBlogPages(),
    ...collectSearchIntentPages(),
    ...collectPlacePages(),
    ...collectThingsPages(),
  ];
}
