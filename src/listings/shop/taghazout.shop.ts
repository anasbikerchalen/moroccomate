/**
 * =========================================================================
 * MOROCCAN MATE — SHOPPING & ARTISANS LISTINGS: TAGHAZOUT
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/shop/template.shop.ts
 *
 * When updating or generating new artisan shop entries with external AI or web search,
 * you MUST strictly adhere to the following allowed array values:
 *
 * ALLOWED OPTIONS BIBLE:
 * - type:              'souk_stall' | 'boutique' | 'cooperative' | 'mall_store' | 'pharmacy' | 'supermarket' | 'designer_atelier' | 'concept_store'
 * - priceLevel:        'budget' | 'mid-range' | 'premium' | 'luxury'
 * - pricingModel:      'fixed' | 'negotiable' | 'mixed' | 'market_price'
 * - authenticitySeals: 'label_artisanat' | 'wfto' | 'zellige_de_fes' | 'anou' | 'maalem_certified'
 * - paymentMethods:    'cash' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay' | 'amex'
 * - productCategories: 'Berber Rugs & Carpets' | 'Leather Goods & Babouches' | 'Ceramics & Pottery' | 'Spices & Apothecary' | 'Argan Oil & Cosmetics' | 'Jewelry & Silver' | 'Brass & Metal Lanterns' | 'Woodwork & Thuya Wood' | 'Textiles & Caftans' | 'Artisan Crafts'
 * - languagesSpoken:   'Arabic' | 'French' | 'English' | 'Spanish' | 'German' | 'Italian' | 'Berber / Tamazight'
 * - storeSize:         'boutique' | 'medium' | 'large' | 'department-store'
 * - crowdLevel:        'quiet' | 'moderate' | 'busy'
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW ENTRIES:
 * {
 *   id: 'sh-[city]-[slug]',
 *   city: 'taghazout',
 *   name: '',
 *   type: 'boutique',
 *   category: 'Artisan Crafts',
 *   neighborhood: 'Medina',
 *   description: '',
 *   priceLevel: 'mid-range',
 *   pricingModel: 'fixed',
 *   isVerified: true,
 *   isWheelchairAccessible: false,
 *   hasDelivery: false,
 *   googleMapsUrl: 'https://maps.google.com/?q=',
 *   address: '',
 *   landmark: '',
 *   coordinates: { lat: 31.6295, lng: -7.9811 },
 *   distanceText: '',
 *   navSteps: [],
 *   tags: ['artisan', 'fixed-price', 'authentic'],
 *   authenticitySeals: ['label_artisanat'],
 *   paymentMethods: ['cash', 'visa', 'mastercard'],
 *   productCategories: ['Leather Goods & Babouches'],
 *   languagesSpoken: ['Arabic', 'French', 'English'],
 *   phoneNumber: '',
 *   website: '',
 *   instagram: '',
 *   openingHours: [{ day: 'Monday', hours: '09:00 - 19:00' }],
 *   fridayHours: 'Friday prayer break 12:30 - 14:30',
 *   shipping: { available: false, partner: 'shop_arranges', details: '' },
 *   workshopVisitable: false,
 *   returnPolicy: '',
 *   bestTimeToVisit: '',
 *   atmosphere: 'Relaxed browsing environment',
 *   storeSize: 'boutique',
 *   crowdLevel: 'moderate',
 *   whatTheySell: [{ item: 'Handmade Babouches', range: '120 - 180 MAD', priceEstimate: '150 MAD' }],
 *   googleRating: 4.5,
 *   googleReviewCount: 100,
 *   reviewSummary: ''
 * }
 * =========================================================================
 */
import { ShopListing } from '../types'

export const taghazoutShops: ShopListing[] = [
  {
    id: 'sh-taghazout-1',
    city: 'taghazout',
    name: 'Almugar & Surf Maroc Shop',
    type: 'boutique',
    category: 'Surf Gear & Apparel',
    neighborhood: 'Taghazout Main Street',
    description: 'Taghazout\'s legendary surf headquarters on the main village strip. Stocked with premium Firewire shortboards, Rip Curl wetsuits, organic surf wax, sunblock, and locally designed graphic tees and hoodies.',
    googleRating: 4.8,
    googleReviewCount: 340,
    priceLevel: 'mid-range',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJAlmugarSurfMarocShopTaghazout',
    googleMapsUrl: 'https://maps.google.com/?q=Almugar+Surf+Shop+Taghazout',
    address: 'Rue Principale, Village de Taghazout',
    landmark: 'Hash Point Beach entrance',
    coordinates: { lat: 30.5435, lng: -9.7090 },
    distanceText: '20 meters from Hash Point beach access',
    tags: ['Surfboards & Wetsuits', 'Rip Curl & Firewire', 'Taghazout Hoodies', 'Surf Accessories', 'fixed-price'],
    paymentMethods: ['cash', 'visa', 'mastercard', 'apple_pay'],
    productCategories: ['Shortboards & Longboards', 'Wetsuits & Rashguards', 'Surf Wax & Leashes', 'Custom Village Apparel'],
    languagesSpoken: ['English', 'French', 'Arabic', 'Berber'],
    phoneNumber: '+212 5282-00000',
    openingHours: [{ day: 'Mon-Sun', hours: '09:00 - 21:00' }]
  },
  {
    id: 'sh-taghazout-2',
    city: 'taghazout',
    name: 'Coopérative Talilt Argan & Targant',
    type: 'cooperative',
    category: 'Argan Oil & Organic Cosmetics',
    neighborhood: 'Taghazout Bay',
    description: 'A genuine fair-trade women\'s cooperative producing 100% pure cold-pressed culinary and cosmetic argan oil, organic amlou (argan, honey & toasted almond paste), wild thyme honey, and natural black soap.',
    googleRating: 4.9,
    googleReviewCount: 290,
    priceLevel: 'mid-range',
    pricingModel: 'fixed',
    isVerified: true,
    googlePlaceId: 'ChIJCooperativeTaliltArganTaghazout',
    googleMapsUrl: 'https://maps.google.com/?q=Cooperative+Argan+Taghazout',
    address: 'Route d\'Agadir N1, Taghazout Bay',
    landmark: 'Targant Argan Museum',
    coordinates: { lat: 30.5380, lng: -9.7020 },
    distanceText: '1 km south of Taghazout village center',
    tags: ['Pure Argan Oil', 'Organic Amlou', 'Women Cooperative', 'Natural Skincare', 'spices', 'fixed-price'],
    paymentMethods: ['cash', 'visa', 'mastercard'],
    productCategories: ['Cosmetic Argan Oil', 'Culinary Roasted Argan Oil', 'Wild Thyme Honey', 'Amlou Paste', 'Black Soap & Ghassoul'],
    languagesSpoken: ['Arabic', 'Berber', 'French', 'English'],
    authenticitySeals: ['label_artisanat', 'wfto'],
    openingHours: [{ day: 'Mon-Sun', hours: '08:30 - 20:00' }]
  },
  {
    id: 'sh-taghazout-3',
    city: 'taghazout',
    name: 'Taghazout Village Artisan Bazaar',
    type: 'souk_stall',
    category: 'Berber Rugs & Jewelry',
    neighborhood: 'Taghazout Central Plaza',
    description: 'An enchanting evening street bazaar in the heart of Taghazout village. Local artisans showcase handwoven Berber wool rugs, silver jewelry, leather sandals, ceramic bowls, and macramé wall hangings.',
    googleRating: 4.7,
    googleReviewCount: 210,
    priceLevel: 'budget',
    pricingModel: 'negotiable',
    isVerified: true,
    googlePlaceId: 'ChIJTaghazoutVillageArtisanBazaar',
    googleMapsUrl: 'https://maps.google.com/?q=Taghazout+Village+Square',
    address: 'Place Central, Village de Taghazout',
    landmark: 'Village Mosque Plaza',
    coordinates: { lat: 30.5440, lng: -9.7080 },
    distanceText: 'Center of Taghazout village pedestrian square',
    tags: ['Berber Rugs', 'Silver Jewelry', 'Macramé & Ceramics', 'Night Bazaar', 'leather', 'ceramics'],
    paymentMethods: ['cash'],
    productCategories: ['Vintage Berber Kilims', 'Handcrafted Silver Rings', 'Leather Sandals', 'Ceramic Dishes'],
    languagesSpoken: ['Arabic', 'Berber', 'English', 'French'],
    openingHours: [{ day: 'Mon-Sun', hours: '10:00 - 22:30' }]
  }
]
