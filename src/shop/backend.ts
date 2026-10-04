/**
 * =========================================================================
 * MOROCCO FINDER - SHOP BACKEND & DATA SERVICE
 * =========================================================================
 *
 * Provides complete backend data management, filtering, spatial distance queries,
 * validation, and API routing for Morocco shop listings.
 */

import { ShopListing, ShopQueryFilters, CityId } from './types';
import { validateShopListing, EMPTY_SHOP_TEMPLATE, SAMPLE_SHOP_TEMPLATE } from './template';

// Import all city shop data sets
import { marrakechShops } from '../listings/shop/marrakech.shop';
import { fesShopListings } from '../listings/shop/fes.shop';
import { casablancaShopListings } from '../listings/shop/casablanca.shop';
import { tangierShopListings } from '../listings/shop/tangier.shop';
import { rabatShopListings } from '../listings/shop/rabat.shop';
import { essaouiraShopListings } from '../listings/shop/essaouira.shop';
import { chefchaouenShopListings } from '../listings/shop/chefchaouen.shop';
import { agadirShopListings } from '../listings/shop/agadir.shop';
import { merzougaShops } from '../listings/shop/merzouga.shop';
import { ouarzazateShops } from '../listings/shop/ouarzazate.shop';
import { meknesShops } from '../listings/shop/meknes.shop';
import { dakhlaShops } from '../listings/shop/dakhla.shop';
import { ifraneShops } from '../listings/shop/ifrane.shop';
import { tetouanShops } from '../listings/shop/tetouan.shop';
import { asilahShops } from '../listings/shop/asilah.shop';
import { taroudantShops } from '../listings/shop/taroudant.shop';
import { elJadidaShops } from '../listings/shop/el_jadida.shop';
import { zagoraShops } from '../listings/shop/zagora.shop';
import { alHoceimaShops } from '../listings/shop/al_hoceima.shop';
import { oualidiaShops } from '../listings/shop/oualidia.shop';
import { saidiaShops } from '../listings/shop/saidia.shop';
import { taghazoutShops } from '../listings/shop/taghazout.shop';

/**
 * Master Registry of all Morocco shops keyed by city
 */
export const SHOPS_BY_CITY: Record<string, ShopListing[]> = {
  marrakech: marrakechShops,
  fes: fesShopListings,
  casablanca: casablancaShopListings,
  tangier: tangierShopListings,
  rabat: rabatShopListings,
  essaouira: essaouiraShopListings,
  chefchaouen: chefchaouenShopListings,
  agadir: agadirShopListings,
  merzouga: merzougaShops,
  ouarzazate: ouarzazateShops,
  meknes: meknesShops,
  dakhla: dakhlaShops,
  ifrane: ifraneShops,
  tetouan: tetouanShops,
  asilah: asilahShops,
  taroudant: taroudantShops,
  el_jadida: elJadidaShops,
  zagora: zagoraShops,
  al_hoceima: alHoceimaShops,
  oualidia: oualidiaShops,
  saidia: saidiaShops,
  taghazout: taghazoutShops
};

/**
 * Get all shop listings across all Morocco cities
 */
export function getAllShops(): ShopListing[] {
  return Object.values(SHOPS_BY_CITY).flat();
}

/**
 * Get all shop listings for a specific city
 */
export function getShopsByCity(city: string): ShopListing[] {
  const normalized = city.toLowerCase().trim().replace(/[\s-]/g, '_');
  return SHOPS_BY_CITY[normalized] || [];
}

/**
 * Find a specific shop by its unique ID
 */
export function getShopById(id: string): ShopListing | undefined {
  const all = getAllShops();
  return all.find(s => s.id === id);
}

/**
 * List all available cities with shop counts
 */
export function getShopCities(): { city: string; count: number }[] {
  return Object.entries(SHOPS_BY_CITY).map(([city, list]) => ({
    city,
    count: list.length
  }));
}

/**
 * Get all unique shop categories in the database
 */
export function getShopCategories(): string[] {
  const categories = new Set<string>();
  getAllShops().forEach(shop => {
    if (shop.category) categories.add(shop.category);
    if (Array.isArray(shop.productCategories)) {
      shop.productCategories.forEach(c => categories.add(c));
    }
  });
  return Array.from(categories).sort();
}

/**
 * Search and filter shop listings with rich criteria
 */
export function searchShops(filters: ShopQueryFilters): ShopListing[] {
  let results = filters.city ? getShopsByCity(filters.city) : getAllShops();

  if (filters.search && filters.search.trim()) {
    const q = filters.search.toLowerCase().trim();
    results = results.filter(shop => {
      const matchName = shop.name.toLowerCase().includes(q);
      const matchDesc = shop.description.toLowerCase().includes(q);
      const matchNeigh = (shop.neighborhood || '').toLowerCase().includes(q);
      const matchCat = (shop.category || '').toLowerCase().includes(q);
      const matchTags = (shop.tags || []).some(t => t.toLowerCase().includes(q));
      const matchAddress = (shop.address || '').toLowerCase().includes(q);
      return matchName || matchDesc || matchNeigh || matchCat || matchTags || matchAddress;
    });
  }

  if (filters.type) {
    results = results.filter(shop => shop.type === filters.type);
  }

  if (filters.category) {
    const catLower = filters.category.toLowerCase();
    results = results.filter(shop => 
      (shop.category || '').toLowerCase().includes(catLower) ||
      (shop.productCategories || []).some(pc => pc.toLowerCase().includes(catLower))
    );
  }

  if (filters.priceLevel) {
    results = results.filter(shop => shop.priceLevel === filters.priceLevel);
  }

  if (filters.pricingModel) {
    results = results.filter(shop => shop.pricingModel === filters.pricingModel);
  }

  if (filters.isVerified !== undefined) {
    results = results.filter(shop => shop.isVerified === filters.isVerified);
  }

  if (filters.workshopVisitable !== undefined) {
    results = results.filter(shop => shop.workshopVisitable === filters.workshopVisitable);
  }

  if (filters.isLocalFavorite !== undefined) {
    results = results.filter(shop => shop.isLocalFavorite === filters.isLocalFavorite);
  }

  if (filters.minRating) {
    results = results.filter(shop => (shop.googleRating || 0) >= (filters.minRating || 0));
  }

  return results;
}

/**
 * Haversine formula to compute distance in km
 */
function computeDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Query shops near given GPS coordinates
 */
export function getShopsNearby(
  lat: number,
  lng: number,
  radiusKm: number = 5
): (ShopListing & { distanceKm: number })[] {
  const all = getAllShops();
  const withDistance: (ShopListing & { distanceKm: number })[] = [];

  for (const shop of all) {
    if (shop.coordinates && shop.coordinates.lat && shop.coordinates.lng) {
      const dist = computeDistanceKm(lat, lng, shop.coordinates.lat, shop.coordinates.lng);
      if (dist <= radiusKm) {
        withDistance.push({
          ...shop,
          distanceKm: Math.round(dist * 100) / 100
        });
      }
    }
  }

  return withDistance.sort((a, b) => a.distanceKm - b.distanceKm);
}

/**
 * Validate and create a new shop object
 */
export function createOrValidateShop(input: Partial<ShopListing>): {
  success: boolean;
  data?: ShopListing;
  errors?: string[];
} {
  const validation = validateShopListing(input);
  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors
    };
  }

  return {
    success: true,
    data: input as ShopListing
  };
}

/**
 * REST API Request Handler helper that can be connected to Express or fetch handlers
 */
export function handleShopApiRequest(
  method: string,
  pathname: string,
  queryParams: Record<string, string>,
  body?: any
): { status: number; body: any } {
  // GET /api/shops/template
  if (method === 'GET' && pathname === '/template') {
    return {
      status: 200,
      body: {
        emptyTemplate: EMPTY_SHOP_TEMPLATE,
        sampleTemplate: SAMPLE_SHOP_TEMPLATE
      }
    };
  }

  // GET /api/shops/cities
  if (method === 'GET' && pathname === '/cities') {
    return {
      status: 200,
      body: getShopCities()
    };
  }

  // GET /api/shops/categories
  if (method === 'GET' && pathname === '/categories') {
    return {
      status: 200,
      body: getShopCategories()
    };
  }

  // POST /api/shops/validate
  if (method === 'POST' && pathname === '/validate') {
    const result = createOrValidateShop(body || {});
    return {
      status: result.success ? 200 : 400,
      body: result
    };
  }

  // GET /api/shops/:city/:id
  const parts = pathname.split('/').filter(Boolean);
  if (method === 'GET' && parts.length === 2) {
    const [city, id] = parts;
    const shop = getShopById(id) || getShopsByCity(city).find(s => s.id === id);
    if (!shop) {
      return { status: 404, body: { error: 'Shop not found' } };
    }
    return { status: 200, body: shop };
  }

  // GET /api/shops/:city
  if (method === 'GET' && parts.length === 1 && SHOPS_BY_CITY[parts[0]]) {
    return {
      status: 200,
      body: getShopsByCity(parts[0])
    };
  }

  // Default: search / list
  if (method === 'GET') {
    const filtered = searchShops({
      city: queryParams.city,
      search: queryParams.search,
      type: queryParams.type as any,
      category: queryParams.category,
      priceLevel: queryParams.priceLevel as any,
      pricingModel: queryParams.pricingModel as any,
      minRating: queryParams.minRating ? parseFloat(queryParams.minRating) : undefined
    });
    return {
      status: 200,
      body: {
        total: filtered.length,
        results: filtered
      }
    };
  }

  return { status: 404, body: { error: 'Not found' } };
}
