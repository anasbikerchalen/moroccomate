import { buildPlaceUrl, getPlaceBySlug } from '../../listings/placeRoutes';
import { getListingRating } from '../../listings/utils';
import { localizeListing } from '../../listings/translations';
import { getAllActivities } from '../../things-to-do';
import { cityMap } from '../cities';
import { CATEGORY_LABELS_I18N, type BrowseSegment } from '../seo/i18nSeo';
import type { AppLanguage } from '../../utils/localeRouting';
import type { PlaceRef } from './types';

export interface ResolvedBlogPlace {
  key: string;
  url: string;
  name: string;
  cityId: string;
  cityName: string;
  neighborhood: string;
  categoryLabel: string;
  rating: number | null;
  priceText: string | null;
  isFallback: boolean;
}

const CATEGORY_TO_BROWSE: Record<'food' | 'sleep' | 'shopping', BrowseSegment> = {
  food: 'food',
  sleep: 'sleep',
  shopping: 'shopping',
};

function formatCityName(cityId: string): string {
  const key = String(cityId || '').toLowerCase();
  if (cityMap[key]?.name) return cityMap[key].name;
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
}

/**
 * Resolves a typed PlaceRef against Moroccan Mate's live listing and activity registries.
 * Never returns a dead link: gracefully falls back to the city's category finder page.
 */
export function resolveBlogPlace(ref: PlaceRef, lang: AppLanguage): ResolvedBlogPlace {
  const cityId = String(ref.city || '').toLowerCase();
  const cityName = formatCityName(cityId);

  if (ref.kind === 'place') {
    const rawListing = getPlaceBySlug(cityId, ref.category, ref.slug);
    const browseSegment = CATEGORY_TO_BROWSE[ref.category];
    const categoryLabel = CATEGORY_LABELS_I18N[lang][browseSegment];

    if (rawListing && !rawListing.isTemporarilyHidden) {
      const localized = localizeListing(rawListing, lang);
      const name = String(localized.ui?.name || localized.name || rawListing.name || ref.slug);
      const neighborhood = String(
        localized.ui?.neighborhood ||
          localized.neighborhood ||
          rawListing.neighborhood ||
          cityName
      );
      const ratingVal = getListingRating(rawListing)?.averageRating ?? 0;
      const rating = ratingVal > 0 ? Math.round(ratingVal * 10) / 10 : null;

      let priceText: string | null = null;
      if (ref.category === 'sleep' && Number(rawListing.pricePerNight) > 0) {
        priceText = `~€${Math.round(Number(rawListing.pricePerNight))}`;
      } else if (ref.category === 'food') {
        const pp = Number(rawListing.filter?.pricePerPerson ?? rawListing.pricePerPerson ?? 0);
        if (pp > 0) priceText = `~€${Math.round(pp)}`;
      }

      return {
        key: `place:${cityId}:${ref.category}:${ref.slug}`,
        url: buildPlaceUrl(cityId, ref.category, ref.slug),
        name,
        cityId,
        cityName,
        neighborhood,
        categoryLabel,
        rating,
        priceText,
        isFallback: false,
      };
    }

    return {
      key: `place:${cityId}:${ref.category}:${ref.slug}`,
      url: `/finder/${cityId}/${browseSegment}`,
      name: ref.slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
      cityId,
      cityName,
      neighborhood: cityName,
      categoryLabel,
      rating: null,
      priceText: null,
      isFallback: true,
    };
  }

  // Things To Do activity reference
  const activities = getAllActivities();
  const activity = activities.find(
    (a) => String(a.city || '').toLowerCase() === cityId && String(a.slug || '').toLowerCase() === ref.slug.toLowerCase()
  );
  const categoryLabel = CATEGORY_LABELS_I18N[lang]['things-to-do'];

  if (activity) {
    const ratingVal = Number(activity.google_rating ?? 0);
    const rating = ratingVal > 0 ? Math.round(ratingVal * 10) / 10 : null;
    const priceText =
      activity.pricing && activity.pricing.price > 0
        ? `${activity.pricing.price} ${activity.pricing.currency || 'MAD'}`
        : null;

    return {
      key: `things:${cityId}:${ref.slug}`,
      url: `/things/${cityId}/${activity.slug}`,
      name: activity.name || ref.slug,
      cityId,
      cityName,
      neighborhood: activity.neighborhood || activity.location_descriptor || activity.address || cityName,
      categoryLabel,
      rating,
      priceText,
      isFallback: false,
    };
  }

  return {
    key: `things:${cityId}:${ref.slug}`,
    url: `/finder/${cityId}/things-to-do`,
    name: ref.slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    cityId,
    cityName,
    neighborhood: cityName,
    categoryLabel,
    rating: null,
    priceText: null,
    isFallback: true,
  };
}
