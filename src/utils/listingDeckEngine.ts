import {
  getPlaceIndex,
  buildPlaceUrl,
  type PlaceUrlCategory,
} from '../listings/placeRoutes';
import { getListingRating } from '../listings/utils';
import {
  getActivitiesByCity,
  formatPrice,
  formatDuration,
  getCityLabel,
} from '../things-to-do';
import { getEatPriceMetrics } from './eatPrice';
import { getStayPrice } from '../engine/stayAdapter';
import type { ListingPlayCategory } from '../state/passportStore';
import type { AppLanguage } from './localeRouting';
import { localizeListing } from '../listings/translations';
import { getPlaceUiCopy, localizeCityName } from '../data/placeUiI18n';

export interface DeckPlaceItem {
  id: string;
  slug: string;
  city: string;
  cityLabel: string;
  category: ListingPlayCategory;
  categoryLabel: string;
  name: string;
  neighborhood?: string;
  rating?: number;
  reviewCount?: number;
  priceLabel?: string;
  description?: string;
  tip?: string;
  badge?: string;
  highlights?: string[];
  googleMapsUrl?: string;
  url: string;
  reasonTag: string;
}

function getCategoryLabels(lang: AppLanguage): Record<ListingPlayCategory, string> {
  const ui = getPlaceUiCopy(lang);
  return {
    food: ui.play.catFood,
    sleep: ui.play.catSleep,
    shopping: ui.play.catShopping,
    things: ui.play.catThings,
  };
}

function formatBadgeReason(raw: any, lang: AppLanguage): string {
  const ui = getPlaceUiCopy(lang);
  const badge = String(raw?.badge || '').toLowerCase();
  if (badge === 'hidden-gem' || raw?.isHiddenGem) return ui.play.reasonHiddenGem;
  if (badge === 'local-favorite' || raw?.isLocalFavorite) return ui.play.reasonLocalFavorite;
  if (badge === 'splurge') return ui.play.reasonSpecialTreat;
  if (raw?.isVerified) return ui.play.reasonVerifiedPick;
  const r = getListingRating(raw);
  if (r?.averageRating && r.averageRating >= 4.6) return ui.play.reasonTopRated;
  return ui.play.reasonCityDiscovery;
}

const SLEEP_NIGHT_SUFFIX: Record<AppLanguage, string> = {
  en: 'MAD / night',
  fr: 'MAD / nuit',
  es: 'MAD / noche',
  de: 'MAD / Nacht',
  ar: 'درهم / ليلة',
};

const SHOP_PRICING_LABELS: Record<AppLanguage, { fixed: string; mixed: string }> = {
  en: { fixed: 'Fixed Prices', mixed: 'Mixed Pricing' },
  fr: { fixed: 'Prix fixes', mixed: 'Prix mixtes' },
  es: { fixed: 'Precios fijos', mixed: 'Precios mixtos' },
  de: { fixed: 'Festpreise', mixed: 'Gemischte Preise' },
  ar: { fixed: 'أسعار ثابتة', mixed: 'أسعار متنوعة' },
};

function buildPlaceItemFromRaw(
  rawEntry: any,
  slug: string,
  cityKey: string,
  category: PlaceUrlCategory,
  lang: AppLanguage = 'en'
): DeckPlaceItem {
  const raw = localizeListing(rawEntry, lang);
  const ui = getPlaceUiCopy(lang);
  const catLabels = getCategoryLabels(lang);
  const r = getListingRating(raw);
  const name = raw.name || raw.title || 'Place';
  const fallbackCityLabel =
    cityKey.charAt(0).toUpperCase() + cityKey.slice(1).replace(/_/g, ' ');
  const cityLabel = localizeCityName(cityKey, fallbackCityLabel, lang);

  let priceLabel: string | undefined;
  if (category === 'food') {
    const metrics = getEatPriceMetrics(raw);
    priceLabel = metrics?.perPersonRangeText
      ? `${metrics.perPersonRangeText} ${ui.logistics.perPersonSuffix}`
      : undefined;
  } else if (category === 'sleep') {
    const p = getStayPrice(raw);
    if (p > 0) priceLabel = `${p} ${SLEEP_NIGHT_SUFFIX[lang] || SLEEP_NIGHT_SUFFIX.en}`;
  } else if (category === 'shopping') {
    const sp = SHOP_PRICING_LABELS[lang] || SHOP_PRICING_LABELS.en;
    if (raw.pricingModel === 'fixed') priceLabel = sp.fixed;
    else if (raw.pricingModel === 'mixed') priceLabel = sp.mixed;
    else if (raw.priceLevel) priceLabel = String(raw.priceLevel);
  }

  const highlights: string[] = [];
  if (Array.isArray(raw.bestDishes)) highlights.push(...raw.bestDishes.slice(0, 3));
  else if (Array.isArray(raw.highlights)) {
    highlights.push(
      ...raw.highlights
        .slice(0, 3)
        .map((h: any) => (typeof h === 'string' ? h : h?.title || h?.label))
        .filter(Boolean)
    );
  } else if (Array.isArray(raw.productCategories)) {
    highlights.push(...raw.productCategories.slice(0, 3));
  }

  return {
    id: String(raw.id || slug),
    slug,
    city: cityKey,
    cityLabel,
    category,
    categoryLabel: catLabels[category],
    name,
    neighborhood: raw.neighborhood,
    rating: r?.averageRating,
    reviewCount: r?.totalReviews,
    priceLabel,
    description: raw.description || raw.tagline,
    tip: raw.tip || raw.insiderTip,
    badge: raw.badge,
    highlights: highlights.slice(0, 3),
    googleMapsUrl:
      raw.googleMapsUrl ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${name} ${fallbackCityLabel} Morocco`
      )}`,
    url: buildPlaceUrl(cityKey, category, slug),
    reasonTag: formatBadgeReason(raw, lang),
  };
}

function buildThingItem(
  rawActivity: any,
  cityKey: string,
  lang: AppLanguage = 'en'
): DeckPlaceItem {
  const activity = localizeListing(rawActivity, lang);
  const ui = getPlaceUiCopy(lang);
  const catLabels = getCategoryLabels(lang);
  const cityLabel = localizeCityName(cityKey, getCityLabel(cityKey), lang);
  const dur = formatDuration(activity.duration_minutes);
  const pr = formatPrice(activity.pricing);
  const priceLabel = [pr, dur].filter(Boolean).join(' · ') || undefined;

  const highlights = Array.isArray(activity.highlights)
    ? activity.highlights
        .slice(0, 3)
        .map((h: any) => (typeof h === 'string' ? h : h?.title || h?.text))
        .filter(Boolean)
    : [];

  return {
    id: String(activity.id || activity.slug),
    slug: activity.slug,
    city: cityKey,
    cityLabel,
    category: 'things',
    categoryLabel: catLabels.things,
    name: activity.name,
    neighborhood: activity.neighborhood,
    rating: activity.google_rating || undefined,
    reviewCount: activity.review_count || undefined,
    priceLabel,
    description: activity.short_description || activity.description,
    tip: activity.tip,
    badge: activity.badge,
    highlights,
    googleMapsUrl: activity.directions_url,
    url: `/things/${cityKey}/${activity.slug}`,
    reasonTag: activity.badge
      ? formatBadgeReason(activity, lang)
      : activity.activity_type || ui.play.reasonCityDiscovery,
  };
}

export function getCityCategoryDeck(
  cityKey: string,
  category: ListingPlayCategory,
  lang: AppLanguage = 'en'
): DeckPlaceItem[] {
  const normalizedCity = String(cityKey || '').toLowerCase();
  if (!normalizedCity) return [];

  if (category === 'things') {
    try {
      return getActivitiesByCity(normalizedCity).map((act) =>
        buildThingItem(act, normalizedCity, lang)
      );
    } catch {
      return [];
    }
  }

  try {
    const index = getPlaceIndex(normalizedCity, category);
    const items: DeckPlaceItem[] = [];
    for (const [slug, raw] of index.bySlug.entries()) {
      items.push(buildPlaceItemFromRaw(raw, slug, normalizedCity, category, lang));
    }
    return items;
  } catch {
    return [];
  }
}

export function getDeckNeighbors(
  cityKey: string,
  category: ListingPlayCategory,
  currentSlug: string,
  lang: AppLanguage = 'en'
): {
  prev: DeckPlaceItem | null;
  next: DeckPlaceItem | null;
  index: number;
  total: number;
  items: DeckPlaceItem[];
} {
  const items = getCityCategoryDeck(cityKey, category, lang);
  if (items.length === 0) {
    return { prev: null, next: null, index: -1, total: 0, items: [] };
  }

  const normalizedSlug = String(currentSlug || '').toLowerCase();
  const idx = items.findIndex((i) => i.slug.toLowerCase() === normalizedSlug);
  if (idx === -1) {
    return {
      prev: items.length > 1 ? items[items.length - 1] : null,
      next: items.length > 0 ? items[0] : null,
      index: 0,
      total: items.length,
      items,
    };
  }

  if (items.length === 1) {
    return { prev: null, next: null, index: 0, total: 1, items };
  }

  const prev = items[(idx - 1 + items.length) % items.length];
  const next = items[(idx + 1) % items.length];
  return { prev, next, index: idx, total: items.length, items };
}

export function getDeckPlaceBySlug(
  cityKey: string,
  category: ListingPlayCategory,
  slug: string,
  lang: AppLanguage = 'en'
): DeckPlaceItem | null {
  const items = getCityCategoryDeck(cityKey, category, lang);
  return (
    items.find((i) => i.slug.toLowerCase() === String(slug || '').toLowerCase()) ||
    null
  );
}

export function pickCompassSuggestion(options: {
  cityKey: string;
  filterCategory: 'all' | ListingPlayCategory;
  excludeSlug?: string;
  excludeCategory?: ListingPlayCategory;
  lastPickedSlug?: string;
  visitedKeys?: Set<string>;
  lang?: AppLanguage;
}): DeckPlaceItem | null {
  const {
    cityKey,
    filterCategory,
    excludeSlug,
    excludeCategory,
    lastPickedSlug,
    visitedKeys,
    lang = 'en',
  } = options;

  const categoriesToScan: ListingPlayCategory[] =
    filterCategory === 'all'
      ? ['food', 'things', 'sleep', 'shopping']
      : [filterCategory];

  let pool: DeckPlaceItem[] = [];
  for (const cat of categoriesToScan) {
    pool = pool.concat(getCityCategoryDeck(cityKey, cat, lang));
  }

  // Exclude the current listing
  pool = pool.filter(
    (item) =>
      !(
        item.slug === excludeSlug &&
        (!excludeCategory || item.category === excludeCategory)
      )
  );

  if (pool.length === 0) return null;

  // Avoid immediately repeating the previous compass result when alternatives exist
  if (lastPickedSlug && pool.length > 1) {
    const withoutLast = pool.filter((item) => item.slug !== lastPickedSlug);
    if (withoutLast.length > 0) pool = withoutLast;
  }

  // Prefer unvisited gems first for maximum discovery dopamine
  if (visitedKeys && visitedKeys.size > 0) {
    const unvisited = pool.filter(
      (item) => !visitedKeys.has(`${item.category}:${item.city}:${item.slug}`)
    );
    if (unvisited.length > 0) pool = unvisited;
  }

  // Bias toward higher-rated / badged gems while preserving randomness
  const topSubset = [...pool]
    .sort((a, b) => (b.rating || 4.0) - (a.rating || 4.0))
    .slice(0, Math.min(pool.length, 14));

  const picked = topSubset[Math.floor(Math.random() * topSubset.length)];
  return picked || pool[0];
}
