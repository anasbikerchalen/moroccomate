/**
 * =========================================================================
 * MOROCCAN MATE — CANONICAL SHOPPING & ARTISANS MASTER TEMPLATE & OPTIONS BIBLE
 * =========================================================================
 *
 * This file serves as the SINGLE SOURCE OF TRUTH for all shopping & artisan craft listings.
 * Any new array or allowed option MUST be added here first.
 *
 * Use this file as the master reference when feeding data to external AI models
 * or human contributors for web research and listing creation.
 */

import type { ShopListing, CityId, ShopType, PriceLevel, PricingModel, AuthenticitySeal, PaymentMethod } from '../../shop/types';

/**
 * THE BIBLE OF ALLOWED VALUES & ARRAY OPTIONS FOR SHOPPING & ARTISANS
 */
export const SHOP_ALLOWED_OPTIONS = {
  types: [
    'souk_stall',
    'boutique',
    'cooperative',
    'mall_store',
    'pharmacy',
    'supermarket',
    'designer_atelier',
    'concept_store'
  ] as const,
  priceLevels: ['budget', 'mid-range', 'premium', 'luxury'] as const,
  pricingModels: ['fixed', 'negotiable', 'mixed', 'market_price'] as const,
  authenticitySeals: [
    'label_artisanat',
    'wfto',
    'zellige_de_fes',
    'anou',
    'maalem_certified'
  ] as const,
  paymentMethods: [
    'cash',
    'visa',
    'mastercard',
    'apple_pay',
    'google_pay',
    'amex'
  ] as const,
  productCategories: [
    'Berber Rugs & Carpets',
    'Leather Goods & Babouches',
    'Ceramics & Pottery',
    'Spices & Apothecary',
    'Argan Oil & Cosmetics',
    'Jewelry & Silver',
    'Brass & Metal Lanterns',
    'Woodwork & Thuya Wood',
    'Textiles & Caftans',
    'Artisan Crafts'
  ] as const,
  languagesSpoken: [
    'Arabic',
    'French',
    'English',
    'Spanish',
    'German',
    'Italian',
    'Berber / Tamazight'
  ] as const,
  shippingPartners: ['dhl', 'fedex', 'la_poste', 'shop_arranges'] as const,
  storeSize: ['boutique', 'medium', 'large', 'department-store'] as const,
  crowdLevel: ['quiet', 'moderate', 'busy'] as const,
};

/**
 * COPY-PASTE BLANK TEMPLATE FOR SHOPPING & ARTISANS
 */
export const EMPTY_SHOP_TEMPLATE: ShopListing = {
  id: 'sh-[city]-[slug]',
  city: 'marrakech', // Valid CityId
  name: '',
  type: 'boutique', // Options from SHOP_ALLOWED_OPTIONS.types
  category: 'Artisan Crafts', // Primary category
  neighborhood: 'Medina', // District or quarter
  description: '', // Factual summary of craftsmanship, specialty, and pricing transparency
  priceLevel: 'mid-range', // Options: 'budget' | 'mid-range' | 'premium' | 'luxury'
  pricingModel: 'fixed', // Options: 'fixed' | 'negotiable' | 'mixed' | 'market_price'
  isVerified: true, // Boolean
  isWheelchairAccessible: false, // Boolean
  hasDelivery: false, // Boolean

  // Geolocation & Directions
  googleMapsUrl: 'https://maps.google.com/?q=',
  address: '',
  landmark: '', // e.g. "Near Medersa Ben Youssef"
  what3words: '', // Optional
  coordinates: {
    lat: 31.6295,
    lng: -7.9811
  },
  distanceText: '', // e.g. "3-min walk from Jemaa el-Fna"
  navSteps: [], // e.g. ["Enter Bab Agnaou", "Turn left past the olive souk"]

  // Badges & Arrays
  tags: ['artisan', 'fixed-price', 'leather', 'authentic'],
  authenticitySeals: ['label_artisanat'], // Options from SHOP_ALLOWED_OPTIONS.authenticitySeals
  paymentMethods: ['cash', 'visa', 'mastercard'], // Options from SHOP_ALLOWED_OPTIONS.paymentMethods
  productCategories: ['Leather Goods & Babouches'], // Options from SHOP_ALLOWED_OPTIONS.productCategories
  languagesSpoken: ['Arabic', 'French', 'English'], // Options from SHOP_ALLOWED_OPTIONS.languagesSpoken

  // Contact & Hours
  phoneNumber: '',
  website: '',
  instagram: '',
  openingHours: [
    { day: 'Monday', hours: '09:00 - 19:00' },
    { day: 'Tuesday', hours: '09:00 - 19:00' },
    { day: 'Wednesday', hours: '09:00 - 19:00' },
    { day: 'Thursday', hours: '09:00 - 19:00' },
    { day: 'Friday', hours: '09:00 - 19:00' },
    { day: 'Saturday', hours: '09:00 - 19:00' },
    { day: 'Sunday', hours: '10:00 - 18:00' }
  ],
  fridayHours: 'Break for Friday prayer between 12:30 and 14:30',

  // Shipping & Workshop
  shipping: {
    available: false,
    partner: 'shop_arranges',
    details: ''
  },
  workshopVisitable: false, // Boolean (true if travelers can watch artisans working)
  returnPolicy: '',
  bestTimeToVisit: 'Morning around 10:00 when craftsmen begin work',
  atmosphere: 'Relaxed, non-pressured browsing environment',
  storeSize: 'boutique',
  crowdLevel: 'moderate',

  // Benchmark Pricing for Typical Items
  whatTheySell: [
    { item: 'Handmade Leather Babouches', range: '120 - 180 MAD', priceEstimate: '150 MAD' }
  ],

  // Trust & Ratings
  googleRating: 4.6,
  googleReviewCount: 180,
  reviewSummary: 'Travelers praise the unpressured atmosphere and reliable fixed pricing.'
};

/**
 * REALISTIC SAMPLE ENTRY FOR SHOPPING & ARTISANS
 */
export const SAMPLE_SHOP_LISTING: ShopListing = {
  id: 'sh-marrakech-ensemble-artisanal',
  city: 'marrakech',
  name: 'Ensemble Artisanal Marrakech',
  type: 'cooperative',
  category: 'Artisan Crafts',
  neighborhood: 'Medina Border',
  description: 'Government-sponsored artisan complex showcasing master craftsmen at work. Features fixed, government-regulated prices across wood carving, zellige, leatherwork, silver jewelry, and embroidery with zero aggressive haggling.',
  priceLevel: 'mid-range',
  pricingModel: 'fixed',
  isVerified: true,
  isWheelchairAccessible: true,
  hasDelivery: false,
  googleMapsUrl: 'https://maps.google.com/?q=31.6267,-7.9961',
  address: 'Avenue Mohammed V, Marrakech 40000',
  landmark: 'Near Koutoubia Mosque gardens',
  coordinates: {
    lat: 31.6267,
    lng: -7.9961
  },
  distanceText: '5-min walk west of Koutoubia Mosque',
  navSteps: [
    'Walk west from Jemaa el-Fna toward Avenue Mohammed V',
    'Pass Koutoubia gardens; entrance is on the left'
  ],
  tags: ['cooperative', 'fixed-price', 'workshop', 'authentic', 'wheelchair-accessible'],
  authenticitySeals: ['label_artisanat', 'maalem_certified'],
  paymentMethods: ['cash', 'visa', 'mastercard', 'apple_pay'],
  productCategories: [
    'Leather Goods & Babouches',
    'Ceramics & Pottery',
    'Brass & Metal Lanterns',
    'Woodwork & Thuya Wood',
    'Jewelry & Silver'
  ],
  languagesSpoken: ['Arabic', 'French', 'English'],
  phoneNumber: '+212 524 443422',
  openingHours: [
    { day: 'Monday', hours: '09:00 - 19:00' },
    { day: 'Tuesday', hours: '09:00 - 19:00' },
    { day: 'Wednesday', hours: '09:00 - 19:00' },
    { day: 'Thursday', hours: '09:00 - 19:00' },
    { day: 'Friday', hours: '09:00 - 19:00' },
    { day: 'Saturday', hours: '09:00 - 19:00' },
    { day: 'Sunday', hours: '09:00 - 18:00' }
  ],
  fridayHours: 'Friday prayer break 12:30 - 14:30',
  shipping: {
    available: true,
    partner: 'shop_arranges',
    details: 'International shipping available for large carpets and furniture'
  },
  workshopVisitable: true,
  bestTimeToVisit: 'Morning between 10:00 and 12:00 when craftsmen are actively carving and weaving',
  atmosphere: 'Quiet, garden-surrounded courtyard complex with zero pressure',
  storeSize: 'large',
  crowdLevel: 'moderate',
  whatTheySell: [
    { item: 'Inlaid Thuya Wood Jewelry Box', range: '150 - 300 MAD', priceEstimate: '200 MAD' },
    { item: 'Hand-hammered Brass Lantern', range: '250 - 600 MAD', priceEstimate: '380 MAD' },
    { item: 'Pure Leather Babouches', range: '100 - 160 MAD', priceEstimate: '130 MAD' }
  ],
  googleRating: 4.4,
  googleReviewCount: 2850,
  reviewSummary: 'Best spot for first-timers to gauge true artisan benchmark prices without pressure.'
};
