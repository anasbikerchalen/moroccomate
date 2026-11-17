import { cities, cityMap } from '../data/cities';
import { getSearchIntent } from '../data/seo/searchIntents';
import type { AppLanguage } from './localeRouting';

export const RECOMMENDED_CITY_IDS = [
  'marrakech',
  'fes',
  'chefchaouen',
  'essaouira',
  'agadir',
  'casablanca',
  'tanger',
] as const;

export const POPULAR_GUIDE_LINKS = [
  { cityId: 'agadir', slug: 'heated-pools', fallback: 'Hotels with Heated Pools in Agadir' },
  { cityId: 'agadir', slug: '5-star', fallback: '5-Star Luxury Hotels in Agadir' },
  { cityId: 'essaouira', slug: 'on-the-beach', fallback: 'Beachfront Hotels in Essaouira' },
  { cityId: 'marrakech', slug: 'waterslides', fallback: 'Hotels with Waterslides in Marrakech' },
  { cityId: 'marrakech', slug: '5-star', fallback: '5-Star Luxury Riads in Marrakech' },
  { cityId: 'dakhla', slug: 'kitesurf-hotels', fallback: 'Kitesurf Hotels in Dakhla' },
  { cityId: 'agadir', slug: 'all-inclusive', fallback: 'All-Inclusive Resorts in Agadir' },
  { cityId: 'fes', slug: 'in-medina', fallback: 'Riads in Heart of Fes Medina' },
  { cityId: 'taghazout', slug: 'private-beach', fallback: 'Stays with Private Beach in Taghazout' },
  { cityId: 'marrakech', slug: 'swim-up-rooms', fallback: 'Hotels with Swim-Up Rooms in Marrakech' },
  { cityId: 'chefchaouen', slug: 'mountain-view', fallback: 'Hotels with Mountain Views in Chefchaouen' },
  { cityId: 'merzouga', slug: 'desert-camps', fallback: 'Desert Camps & Stays in Merzouga' },
] as const;

/**
 * Strips diacritics (e.g., "Fès" -> "fes", "Tétouan" -> "tetouan")
 * and lowercases for accent-tolerant matching.
 */
export function normalizeSearchText(value: string): string {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/**
 * Places canonical top 7 destinations first by exact city ID (so accented
 * names like "Fès" always match `id: 'fes'` reliably).
 */
export function orderTouristicCitiesByRecommendedId<T extends { id: string }>(list: T[]): T[] {
  const ordered: T[] = [];
  for (const id of RECOMMENDED_CITY_IDS) {
    const found = list.find((c) => String(c.id || '').toLowerCase() === id);
    if (found) ordered.push(found);
  }
  const rest = list.filter((c) => !ordered.some((o) => o.id === c.id));
  return [...ordered, ...rest];
}

export function getPopularGuidesLocalized(lang: AppLanguage) {
  return POPULAR_GUIDE_LINKS.map((item) => {
    const cityName =
      cityMap[item.cityId]?.name || item.cityId.charAt(0).toUpperCase() + item.cityId.slice(1);
    const intent = getSearchIntent('sleep', item.slug, lang);
    return {
      url: `/finder/${item.cityId}/sleep/${item.slug}`,
      title: intent ? intent.headerTitle(cityName) : item.fallback,
    };
  });
}

export { cities, cityMap };
