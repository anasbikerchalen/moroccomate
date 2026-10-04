/**
 * SHOP TEMPLATE ADAPTER — Bridge between collected shop listings and the
 * modular ShopTemplateView schema (Finder website).
 * ---------------------------------------------------------------
 * Converts every existing ShopListing (hand-collected, real data — never
 * regenerated) into the template's ShopListing shape:
 *   shop_type, media (2-tier image system), product_categories,
 *   highlights, nearby_places (proximity engine minimap), pricing,
 *   payment, opening_hours schedule, languages, shipping, visibility.
 */
import type { ShopListing, ShopType, ProductCategory, ShopHighlight, ShopNearbyPlace, ShopMedia, ShopPayment, ShopPricing, ShopOpeningHours, Language, ShopShipping, ShopSectionVisibility } from '../types/shop';
import { computePoiNearbyPlaces } from './proximityEngine';
import { cityMap } from '../data/cities';

// ---------------------------------------------------------------
// Shop type mapping (old type string → template shop_type object)
// ---------------------------------------------------------------
const SHOP_TYPE_MAP: Record<string, ShopType> = {
  souk_stall: { id: 'souk_stall', name: 'Souk Stall', icon: 'souk' },
  boutique: { id: 'boutique', name: 'Boutique', icon: 'shopping-bag' },
  cooperative: { id: 'cooperative', name: 'Cooperative', icon: 'artisan-hands' },
  mall_store: { id: 'mall_store', name: 'Mall Store', icon: 'shopping-bag' },
  pharmacy: { id: 'pharmacy', name: 'Pharmacy', icon: 'shopping-bag' },
  supermarket: { id: 'supermarket', name: 'Supermarket', icon: 'shopping-bag' },
  designer_atelier: { id: 'designer_atelier', name: 'Designer Atelier', icon: 'traditional-craft' },
  concept_store: { id: 'concept_store', name: 'Concept Store', icon: 'handmade' }
};

function mapShopType(type?: string): ShopType {
  return SHOP_TYPE_MAP[(type || '').toLowerCase()] || {
    id: 'boutique', name: 'Artisan Shop', icon: 'traditional-craft'
  };
}

/** City display name from the site's own city registry. */
export function getShopCityName(cityId?: string): string {
  const city = cityId ? cityMap[cityId] : null;
  if (city?.name) return String(city.name);
  if (!cityId) return 'Morocco';
  return cityId.charAt(0).toUpperCase() + cityId.slice(1).replace(/_/g, ' ');
}

/** City center coordinates from the site's own city registry. */
export function getShopCityCenter(cityId?: string): { lat: number; lng: number } {
  const city = cityId ? cityMap[cityId] : null;
  if (city && typeof city.lat === 'number' && typeof city.lon === 'number') {
    return { lat: city.lat, lng: city.lon };
  }
  return { lat: 31.6295, lng: -7.9811 };
}

// ---------------------------------------------------------------
// Media — no hosted images: the shop hero is a decorative gradient
// panel with a "View photos on Google Maps" link (ShopHeader).
// ---------------------------------------------------------------
function deriveMedia(_listing: any): ShopMedia[] {
  return [];
}

// ---------------------------------------------------------------
// Product categories — from collected strings, icons from the library
// ---------------------------------------------------------------
const PRODUCT_ICON_MAP: [RegExp, string][] = [
  [/leather|babouche|slipper|shoe|wallet|belt|bag/i, 'leather'],
  [/rug|carpet/i, 'rug'],
  [/ceramic|pottery|tagine|zellige/i, 'pottery'],
  [/spice|herb|ras el hanout/i, 'spices'],
  [/argan|oil|cosmetic/i, 'argan-oil'],
  [/jewel/i, 'jewelry'],
  [/souvenir|gift/i, 'souvenirs'],
  [/wood|cedar|thuya/i, 'traditional-craft'],
  [/textile|fabric|wool/i, 'rug'],
  [/lantern|lamp|brass|metal/i, 'traditional-craft']
];

function deriveProductCategories(listing: any): ProductCategory[] {
  const cats: string[] = listing?.productCategories || [];
  return cats.slice(0, 10).map((name, i) => {
    const matched = PRODUCT_ICON_MAP.find(([re]) => re.test(name));
    return {
      id: `pc-${i}`,
      name: String(name),
      icon: matched ? matched[1] : 'handmade',
      display_order: i + 1
    };
  });
}

// ---------------------------------------------------------------
// Highlights — derived from what the shop really has
// ---------------------------------------------------------------
function deriveHighlights(listing: any): ShopHighlight[] {
  const highlights: ShopHighlight[] = [];
  if (listing?.isLocalFavorite) {
    highlights.push({ id: 'hl-local', name: 'Local favorite', icon: 'traditional-craft', description: 'Frequented by the local community, not just tourists.', display_order: 1 });
  }
  if (listing?.workshopVisitable) {
    highlights.push({ id: 'hl-workshop', name: 'Live workshop', icon: 'artisan-hands', description: 'Watch artisans craft their products by hand.', display_order: 2 });
  }
  if (listing?.isVerified) {
    highlights.push({ id: 'hl-verified', name: 'Verified shop', icon: 'payment', description: 'Physically verified with real-world details.', display_order: 3 });
  }
  (listing?.bestTimeToVisit ? [listing.bestTimeToVisit] : []).forEach((t: string) => {
    highlights.push({ id: 'hl-besttime', name: 'Best time to visit', icon: 'clock', description: String(t), display_order: 4 });
  });
  return highlights.slice(0, 4);
}

// ---------------------------------------------------------------
// Nearby places — the minimap, computed by the proximity engine
// from the shop's real coordinates + the verified city spot database
// ---------------------------------------------------------------
const NEARBY_CATEGORY_MAP: Record<string, 'landmark' | 'square' | 'souk' | 'transport' | 'attraction'> = {
  Landmark: 'landmark',
  Square: 'square',
  Museum: 'landmark',
  Attraction: 'attraction',
  'Souk / Market': 'souk',
  'Train Station': 'transport',
  'Bus Station': 'transport',
  Airport: 'transport',
  Taxi: 'transport'
};

const NEARBY_ICON_MAP: Record<string, string> = {
  square: 'square',
  minaret: 'landmark',
  landmark: 'landmark',
  souk: 'souk',
  train: 'train',
  garden: 'garden',
  museum: 'landmark',
  plane: 'airport-shuttle',
  beach: 'beach'
};

function deriveNearbyPlaces(listing: any): ShopNearbyPlace[] {
  const hasCoords =
    listing?.coordinates &&
    typeof listing.coordinates.lat === 'number' &&
    typeof listing.coordinates.lng === 'number';
  if (!hasCoords) return [];

  const computed = computePoiNearbyPlaces(String(listing.city), listing.coordinates, 4);
  return computed.map((poi, i) => ({
    id: poi.id,
    name: poi.name,
    category: NEARBY_CATEGORY_MAP[poi.category] || 'landmark',
    icon: NEARBY_ICON_MAP[poi.icon || 'landmark'] || 'landmark',
    latitude: poi.latitude ?? listing.coordinates.lat,
    longitude: poi.longitude ?? listing.coordinates.lng,
    walking_minutes: poi.walking_time_minutes,
    display_order: i + 1
  }));
}

// ---------------------------------------------------------------
// Pricing & payment
// ---------------------------------------------------------------
function derivePricing(listing: any): ShopPricing {
  const model = String(listing?.pricingModel || 'fixed').toLowerCase();
  const pricingType = (model === 'negotiable' ? 'negotiable' : model === 'mixed' ? 'mixed' : 'fixed') as 'fixed' | 'negotiable' | 'mixed';
  const notes: Record<string, string> = {
    fixed: 'Fair, fixed prices — no haggling needed.',
    negotiable: 'Friendly haggling is expected here.',
    mixed: 'Some items are fixed price, others negotiable.',
    market_price: 'Market prices apply — compare before buying.'
  };
  return {
    pricing_type: pricingType,
    title: undefined,
    note: notes[model] || notes.fixed
  };
}

function derivePayment(listing: any): ShopPayment {
  const methods: string[] = listing?.paymentMethods || ['cash'];
  const cardLike = methods.some((m) => ['visa', 'mastercard', 'amex', 'credit_card', 'card', 'apple_pay', 'google_pay'].includes(m.toLowerCase()));
  const mapped = methods.slice(0, 4).map((m) => {
    const pm = m.toLowerCase();
    if (pm === 'visa') return { id: 'visa', name: 'Visa', icon: 'visa' as const };
    if (pm === 'mastercard') return { id: 'mastercard', name: 'Mastercard', icon: 'mastercard' as const };
    if (pm === 'apple_pay' || pm === 'google_pay') return { id: 'contactless', name: 'Contactless', icon: 'contactless' as const };
    if (pm === 'cash') return { id: 'cash', name: 'Cash', icon: 'cash' as const };
    return { id: 'credit-card', name: 'Credit card', icon: 'credit-card' as const };
  });
  return {
    cash_currency: 'MAD',
    cards_accepted: cardLike,
    methods: mapped.length ? mapped : [{ id: 'cash', name: 'Cash', icon: 'cash' as const }]
  };
}


// ---------------------------------------------------------------
// Opening hours, languages, shipping
// ---------------------------------------------------------------
const DAY_MAP: Record<string, { dow: any; label: string; short: string }> = {
  mon: { dow: 'monday', label: 'Monday', short: 'Mon' },
  tue: { dow: 'tuesday', label: 'Tuesday', short: 'Tue' },
  wed: { dow: 'wednesday', label: 'Wednesday', short: 'Wed' },
  thu: { dow: 'thursday', label: 'Thursday', short: 'Thu' },
  fri: { dow: 'friday', label: 'Friday', short: 'Fri' },
  sat: { dow: 'saturday', label: 'Saturday', short: 'Sat' },
  sun: { dow: 'sunday', label: 'Sunday', short: 'Sun' }
};

function deriveOpeningHours(listing: any): ShopOpeningHours {
  const rows: { day: string; hours: string }[] = listing?.openingHours || [];
  const schedule = rows.map((row) => {
    const key = String(row.day || '').toLowerCase().slice(0, 3);
    const dayInfo = DAY_MAP[key] || { dow: 'monday', label: String(row.day || 'Day'), short: String(row.day || 'Day').slice(0, 3) };
    const times = String(row.hours || '').match(/(\d{1,2}:\d{2})/g) || [];
    return {
      day_of_week: dayInfo.dow,
      day_label: String(row.day || dayInfo.label),
      short_label: dayInfo.short,
      is_closed: /closed/i.test(String(row.hours || '')),
      open_time: times[0] || '09:00',
      close_time: times[1] || '19:00'
    };
  });
  return {
    schedule,
    note: listing?.fridayHours ? `Friday prayer pause: ${listing.fridayHours}` : undefined
  };
}

function deriveLanguages(listing: any): Language[] {
  const spoken: string[] = listing?.languagesSpoken || [];
  return spoken.map((name, i) => ({ id: `lang-${i}`, name: String(name) }));
}

function deriveShipping(listing: any): ShopShipping {
  const shipping = listing?.shipping;
  const partner = String(shipping?.partner || '').toLowerCase();
  const international = shipping?.available === true && (partner === 'dhl' || partner === 'fedex' || partner === 'international');
  return {
    available: shipping?.available === true,
    international,
    on_request: false,
    label: shipping?.details || (shipping?.available ? 'Shipping available' : 'No shipping')
  };
}

// ---------------------------------------------------------------
// Visibility flags — sections with no data hide cleanly
// ---------------------------------------------------------------
function deriveVisibility(listing: any, nearby: ShopNearbyPlace[], highlights: ShopHighlight[], products: ProductCategory[], languages: Language[]): ShopSectionVisibility {
  return {
    show_products: products.length > 0,
    show_highlights: highlights.length > 0,
    show_nearby: nearby.length > 0,
    show_pricing: true,
    show_payment: true,
    show_opening_hours: (listing?.openingHours || []).length > 0,
    show_languages: languages.length > 0,
    show_shipping: listing?.shipping?.available === true
  };
}

// ---------------------------------------------------------------
// MAIN ADAPTER — collected shop listing → template ShopListing
// ---------------------------------------------------------------
export function adaptToTemplateShop(listing: any): ShopListing {
  const shopType = mapShopType(listing?.type);
  const cityName = getShopCityName(listing?.city);
  const center = getShopCityCenter(listing?.city);
  const coordinates = listing?.coordinates
    ? { lat: listing.coordinates.lat, lng: listing.coordinates.lng }
    : center;

  const products = deriveProductCategories(listing);
  const highlights = deriveHighlights(listing);
  const nearby = deriveNearbyPlaces(listing);
  const languages = deriveLanguages(listing);
  const visibility = deriveVisibility(listing, nearby, highlights, products, languages);

  return {
    id: String(listing?.id || 'shop-unknown'),
    name: String(listing?.name || 'Moroccan Shop'),
    slug: String(listing?.id || 'shop-unknown'),
    shop_type: shopType,
    short_description: String(listing?.description || ''),
    city: cityName,
    neighborhood: String(listing?.neighborhood || 'Medina'),
    address: String(listing?.address || `${listing?.neighborhood || 'Medina'}, ${cityName}`),
    latitude: coordinates.lat,
    longitude: coordinates.lng,
    directions_url: String(listing?.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(`${listing?.name || ''} ${cityName}`)}`),
    media: deriveMedia(listing),
    product_categories: products,
    highlights,
    nearby_places: nearby,
    pricing: derivePricing(listing),
    payment: derivePayment(listing),
    opening_hours: deriveOpeningHours(listing),
    languages,
    shipping: deriveShipping(listing),
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    visibility
  };
}

