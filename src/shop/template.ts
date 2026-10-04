/**
 * =========================================================================
 * MOROCCO FINDER - OFFICIAL SHOP SPECIFICATION & TEMPLATE
 * =========================================================================
 *
 * This module defines the canonical specification for shop listings in Morocco.
 * It contains field-by-field guidelines, default schemas, validation rules,
 * and copy-pasteable templates for human editors and AI data crawlers.
 *
 * === SCHEMA FIELD SPECIFICATION ===
 * 1.  id: string -> Format 'sh-[city]-[num]' (e.g., 'sh-mar-1', 'sh-asi-5')
 * 2.  city: CityId -> City key in snake_case (e.g., 'marrakech', 'asilah', 'al_hoceima')
 * 3.  name: string -> Full official name of establishment
 * 4.  type: ShopType -> 'souk_stall' | 'boutique' | 'cooperative' | 'mall_store' | 'pharmacy' | 'supermarket' | 'designer_atelier' | 'concept_store'
 * 5.  category: string -> Primary goods category (e.g., 'Artisan Crafts', 'Leather & Footwear', 'Spices & Apothecary')
 * 6.  neighborhood: string -> Medina district or town quarter (e.g., 'Medina', 'Gueliz', 'Habous')
 * 7.  description: string -> Informative, non-hype description of history, craft, and specialty
 * 8.  googlePlaceId: string (optional) -> Google Place ID for photo API retrieval
 * 9.  googleRating: number (optional) -> Aggregate rating (1.0 to 5.0)
 * 10. googleReviewCount: number (optional) -> Total number of reviews on Google Maps
 * 11. priceLevel: PriceLevel -> 'budget' | 'mid-range' | 'premium' | 'luxury'
 * 12. pricingModel: PricingModel -> 'fixed' | 'negotiable' | 'mixed' | 'market_price'
 * 13. isVerified: boolean -> Physical verification or certified status
 * 14. googleMapsUrl: string -> Valid Google Maps link
 * 15. address: string -> Full street address
 * 16. landmark: string (optional) -> Nearby landmark for navigation
 * 17. what3words: string (optional) -> Precision 3-word location (critical for medina mazes)
 * 18. coordinates: { lat, lng } (optional) -> GPS coordinates
 * 19. distanceText: string (optional) -> Walking distance from main entrance/gate
 * 20. navSteps: string[] (optional) -> Step-by-step walking directions
 * 21. tags: string[] -> Key tags for filtering
 * 22. authenticitySeals: AuthenticitySeal[] (optional) -> 'label_artisanat' | 'wfto' | 'zellige_de_fes' | 'anou' | 'maalem_certified'
 * 23. paymentMethods: PaymentMethod[] -> Accepted payments: 'cash', 'visa', 'mastercard', etc.
 * 24. productCategories: string[] -> Products sold (e.g., ['Berber Rugs', 'Ceramics'])
 * 25. languagesSpoken: string[] -> Spoken languages (e.g., ['Arabic', 'French', 'English'])
 * 26. phoneNumber: string (optional) -> Verified phone contact
 * 27. website: string (optional) -> Official website URL
 * 28. instagram: string (optional) -> Instagram handle including '@'
 * 29. openingHours: { day, hours }[] -> Weekly schedules
 * 30. shipping: { available, partner, details } (optional) -> International or domestic courier
 * 31. workshopVisitable: boolean (optional) -> Whether visitors can watch artisans craft live
 * 32. whatTheySell: { item, range, priceEstimate }[] (optional) -> Typical price benchmarks
 * 33. isLocalFavorite: boolean (optional) -> True if frequented by local community
 */

import { ShopListing, CityId } from './types';

/**
 * Standard blank template for generating new shop entries
 */
export const EMPTY_SHOP_TEMPLATE: ShopListing = {
  id: 'sh-[city]-0',
  city: 'marrakech',
  name: '',
  type: 'boutique',
  category: 'Artisan Crafts',
  neighborhood: 'Medina',
  description: '',
  googleRating: 4.5,
  googleReviewCount: 100,
  priceLevel: 'mid-range',
  pricingModel: 'fixed',
  isVerified: false,
  googleMapsUrl: 'https://maps.google.com/?q=',
  address: '',
  landmark: '',
  what3words: '',
  coordinates: {
    lat: 31.6295,
    lng: -7.9811
  },
  distanceText: '',
  navSteps: [],
  tags: [],
  authenticitySeals: [],
  paymentMethods: ['cash'],
  productCategories: [],
  languagesSpoken: ['Arabic', 'French'],
  phoneNumber: '',
  website: '',
  instagram: '',
  openingHours: [
    { day: 'Mon-Sat', hours: '09:00 - 19:00' },
    { day: 'Sun', hours: '10:00 - 18:00' }
  ],
  fridayHours: '09:00 - 12:30, 15:00 - 19:00',
  shipping: {
    available: false,
    partner: 'dhl',
    details: ''
  },
  workshopVisitable: false,
  whatTheySell: [],
  isLocalFavorite: false
};

/**
 * Fully populated high-fidelity sample template for demonstration
 */
export const SAMPLE_SHOP_TEMPLATE: ShopListing = {
  id: 'sh-mar-sample',
  city: 'marrakech',
  name: 'Dar Al Maalem Artisans',
  type: 'cooperative',
  category: 'Artisan Crafts & Leather',
  neighborhood: 'Medina - Bab Doukkala',
  description: 'A master craftsman cooperative dedicated to preserving ancestral Moroccan leather tanning and hand-tooling techniques with fixed, fair-trade pricing.',
  googleRating: 4.8,
  googleReviewCount: 420,
  priceLevel: 'mid-range',
  pricingModel: 'fixed',
  isVerified: true,
  googlePlaceId: 'ChIJDarAlMaalemMarrakech',
  googleMapsUrl: 'https://maps.google.com/?q=Dar+Al+Maalem+Marrakech',
  address: '24 Rue Bab Doukkala, Medina, Marrakech',
  landmark: 'Bab Doukkala Mosque',
  what3words: 'craft.artisan.courtyard',
  coordinates: {
    lat: 31.6341,
    lng: -7.9942
  },
  distanceText: '3 min walk from Bab Doukkala gate',
  navSteps: [
    'Enter through Bab Doukkala gate into the medina',
    'Follow Rue Bab Doukkala straight for 150 meters',
    'Look for the carved cedar wooden portal with brass emblem on your left'
  ],
  tags: ['Fair Trade', 'Maalem Certified', 'Live Workshop', 'Leather Goods'],
  authenticitySeals: ['label_artisanat', 'wfto', 'maalem_certified'],
  paymentMethods: ['cash', 'visa', 'mastercard', 'apple_pay'],
  productCategories: ['Natural Leather Bags', 'Embossed Journals', 'Handmade Babouche', 'Belt Craft'],
  languagesSpoken: ['Arabic', 'French', 'English', 'Spanish'],
  phoneNumber: '+212 5243-89012',
  website: 'https://daralmaalem.ma',
  instagram: '@daralmaalem_marrakech',
  openingHours: [
    { day: 'Mon-Sat', hours: '09:00 - 19:30' },
    { day: 'Sun', hours: '10:00 - 17:00' }
  ],
  fridayHours: '09:00 - 12:00, 15:00 - 19:30',
  shipping: {
    available: true,
    partner: 'dhl',
    details: 'Worldwide door-to-door express delivery with tracking and protective crate packaging.'
  },
  workshopVisitable: true,
  establishedYear: 1994,
  bestTimeToVisit: 'Morning between 10:00 and 12:00 when master craftsmen demonstrate saddle-stitching.',
  atmosphere: 'Calm, authentic workshop ambiance with the scent of natural cedar and vegetable-tanned leather.',
  storeSize: 'medium',
  crowdLevel: 'moderate',
  whatTheySell: [
    { item: 'Full-Grain Leather Duffel Bag', range: 'Medium (45L)', priceEstimate: '1,200 - 1,800 MAD' },
    { item: 'Hand-Stitched Yellow Babouche', range: 'Standard adult sizes', priceEstimate: '180 - 250 MAD' },
    { item: 'Embossed Leather Travel Journal', range: 'A5 handmade paper', priceEstimate: '120 - 180 MAD' }
  ],
  reviewSummary: 'Travelers consistently praise the calm zero-pressure shopping experience and authentic demonstration of genuine leathercraft.',
  recentReviews: [
    {
      author: 'Sophie Martin',
      text: 'Refreshing to find high quality leather craft with fixed prices and respectful artisans.',
      rating: 5,
      type: 'tourist'
    }
  ],
  isLocalFavorite: true,
  nearbyLandmarks: ['Bab Doukkala Mosque', 'Jardin Majorelle (12 min walk)'],
  history: 'Founded by Master Craftsman Abdelkader in 1994 to mentor young apprentices in vegetable tanning.',
  ownerName: 'Maalem Abdelkader Benjelloun',
  ownerBio: 'Third-generation leather craftsman recognized by the Moroccan Ministry of Handicrafts.'
};

/**
 * Creates a new shop template pre-populated for a specific city
 */
export function createShopTemplate(city: CityId, name: string = ''): ShopListing {
  return {
    ...EMPTY_SHOP_TEMPLATE,
    id: `sh-${city.substring(0, 3)}-new`,
    city,
    name
  };
}

/**
 * Validates whether a candidate shop object satisfies the required fields of the template
 */
export function validateShopListing(data: Partial<ShopListing>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.id || typeof data.id !== 'string') errors.push('Missing or invalid "id"');
  if (!data.city || typeof data.city !== 'string') errors.push('Missing or invalid "city"');
  if (!data.name || typeof data.name !== 'string') errors.push('Missing or invalid "name"');
  if (!data.type) errors.push('Missing "type" (ShopType)');
  if (!data.category) errors.push('Missing "category"');
  if (!data.neighborhood) errors.push('Missing "neighborhood"');
  if (!data.description) errors.push('Missing "description"');
  if (!data.priceLevel) errors.push('Missing "priceLevel"');
  if (!data.pricingModel) errors.push('Missing "pricingModel"');
  if (!data.googleMapsUrl) errors.push('Missing "googleMapsUrl"');
  if (!data.address) errors.push('Missing "address"');
  if (!Array.isArray(data.tags)) errors.push('"tags" must be an array');
  if (!Array.isArray(data.paymentMethods)) errors.push('"paymentMethods" must be an array');
  if (!Array.isArray(data.productCategories)) errors.push('"productCategories" must be an array');
  if (!Array.isArray(data.languagesSpoken)) errors.push('"languagesSpoken" must be an array');

  return {
    valid: errors.length === 0,
    errors
  };
}
