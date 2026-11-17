import { cities, cityMap } from '../data/cities';
import { getSearchIntent } from '../data/seo/searchIntents';
import { getAllPlacePages, buildPlaceUrl } from '../listings/placeRoutes';
import { getAllActivities } from '../things-to-do';
import {
  RECOMMENDED_CITY_IDS,
  POPULAR_GUIDE_LINKS,
  normalizeSearchText,
  orderTouristicCitiesByRecommendedId,
  getPopularGuidesLocalized,
} from './homeGuides';

export {
  RECOMMENDED_CITY_IDS,
  POPULAR_GUIDE_LINKS,
  normalizeSearchText,
  orderTouristicCitiesByRecommendedId,
  getPopularGuidesLocalized,
};

export type HomeSearchKind = 'city' | 'food' | 'sleep' | 'shopping' | 'things' | 'guide';

export interface HomeSearchResult {
  id: string;
  kind: HomeSearchKind;
  title: string;
  subtitle: string;
  url: string;
  cityId: string;
}

interface IndexedHomeEntry extends HomeSearchResult {
  normalizedTitle: string;
  normalizedSearch: string;
  weight: number;
}

let cachedCatalog: IndexedHomeEntry[] | null = null;

function buildSearchCatalog(): IndexedHomeEntry[] {
  if (cachedCatalog) return cachedCatalog;

  const entries: IndexedHomeEntry[] = [];
  const seenUrls = new Set<string>();

  // 1. Touristic cities (31 destinations)
  for (const city of cities) {
    if (city.tier !== 'touristic') continue;
    const url = `/finder/${city.id.toLowerCase()}/food`;
    seenUrls.add(url);
    entries.push({
      id: `city:${city.id}`,
      kind: 'city',
      title: city.name,
      subtitle: `${city.region} · City Destination`,
      url,
      cityId: city.id,
      normalizedTitle: normalizeSearchText(city.name),
      normalizedSearch: normalizeSearchText(`${city.name} ${city.id} ${city.region}`),
      weight: RECOMMENDED_CITY_IDS.includes(city.id as any) ? 95 : 80,
    });
  }

  // 2. Popular travel guides
  for (const guide of POPULAR_GUIDE_LINKS) {
    const cityName = cityMap[guide.cityId]?.name || guide.cityId;
    const intent = getSearchIntent('sleep', guide.slug, 'en');
    const title = intent ? intent.headerTitle(cityName) : guide.fallback;
    const url = `/finder/${guide.cityId}/sleep/${guide.slug}`;
    if (seenUrls.has(url)) continue;
    seenUrls.add(url);
    entries.push({
      id: `guide:${guide.cityId}:${guide.slug}`,
      kind: 'guide',
      title,
      subtitle: `${cityName} · Curated Stay Guide`,
      url,
      cityId: guide.cityId,
      normalizedTitle: normalizeSearchText(title),
      normalizedSearch: normalizeSearchText(`${title} ${guide.slug.replace(/-/g, ' ')} ${cityName}`),
      weight: 70,
    });
  }

  // 3. Verified places (Food, Sleep, Shopping)
  for (const page of getAllPlacePages()) {
    const listing = page.listing || {};
    const title = String(listing.name || listing.title || '').trim();
    if (!title) continue;
    const url = buildPlaceUrl(page.city, page.category, page.slug);
    if (seenUrls.has(url)) continue;
    seenUrls.add(url);

    const cityName = cityMap[page.city]?.name || page.city;
    const neighborhood = listing.neighborhood ? `${listing.neighborhood}, ` : '';
    const extraTags = [
      ...(Array.isArray(listing.foodStyles) ? listing.foodStyles : []),
      ...(Array.isArray(listing.cuisineTags) ? listing.cuisineTags : []),
      listing.type || '',
      listing.category || '',
    ].join(' ');

    entries.push({
      id: `place:${page.category}:${page.city}:${page.slug}`,
      kind: page.category,
      title,
      subtitle: `${neighborhood}${cityName}`,
      url,
      cityId: page.city,
      normalizedTitle: normalizeSearchText(title),
      normalizedSearch: normalizeSearchText(`${title} ${cityName} ${listing.neighborhood || ''} ${extraTags}`),
      weight: listing.isVerified || listing.menu?.sections?.length ? 65 : 55,
    });
  }

  // 4. Things to Do activities
  for (const act of getAllActivities()) {
    const title = String(act.name || '').trim();
    if (!title || !act.city || !act.slug) continue;
    const url = `/things/${act.city.toLowerCase()}/${act.slug}`;
    if (seenUrls.has(url)) continue;
    seenUrls.add(url);

    const cityName = cityMap[act.city.toLowerCase()]?.name || act.city;
    const neighborhood = act.neighborhood ? `${act.neighborhood}, ` : '';
    entries.push({
      id: `things:${act.id}`,
      kind: 'things',
      title,
      subtitle: `${neighborhood}${cityName}`,
      url,
      cityId: act.city.toLowerCase(),
      normalizedTitle: normalizeSearchText(title),
      normalizedSearch: normalizeSearchText(
        `${title} ${cityName} ${act.neighborhood || ''} ${act.activity_type || ''} ${act.short_description || ''}`
      ),
      weight: 60,
    });
  }

  cachedCatalog = entries;
  return entries;
}

/**
 * Searches verified places, 31 cities, and popular stay guides with deterministic ranking.
 */
export function searchHomeCatalog(query: string, limit = 8): HomeSearchResult[] {
  const q = normalizeSearchText(query);
  if (!q) return [];

  const catalog = buildSearchCatalog();
  const terms = q.split(/\s+/).filter(Boolean);
  const scored: { entry: IndexedHomeEntry; score: number }[] = [];

  for (const entry of catalog) {
    let matchesAll = true;
    for (const term of terms) {
      if (!entry.normalizedSearch.includes(term)) {
        matchesAll = false;
        break;
      }
    }
    if (!matchesAll) continue;

    let score = entry.weight;
    if (entry.normalizedTitle === q) {
      score += 300;
    } else if (entry.normalizedTitle.startsWith(q)) {
      score += 180;
    } else if (entry.normalizedTitle.includes(q)) {
      score += 90;
    }

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  return scored.slice(0, limit).map(({ entry }) => ({
    id: entry.id,
    kind: entry.kind,
    title: entry.title,
    subtitle: entry.subtitle,
    url: entry.url,
    cityId: entry.cityId,
  }));
}
