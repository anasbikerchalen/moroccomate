/**
 * =========================================================================
 * MOROCCAN MATE — CANONICAL ACCOMMODATIONS (SLEEP) MASTER TEMPLATE & OPTIONS BIBLE
 * =========================================================================
 *
 * This file serves as the SINGLE SOURCE OF TRUTH for all accommodation listings.
 * Any new array or allowed option MUST be added here first.
 *
 * Use this file as the master reference when feeding data to external AI models
 * or human contributors for web research and listing creation.
 */

import type { SleepListing, CityId, GroupType, AccommodationType } from '../types';

/**
 * THE BIBLE OF ALLOWED VALUES & ARRAY OPTIONS FOR SLEEP (STAYS)
 */
export const SLEEP_ALLOWED_OPTIONS = {
  types: [
    'riad',
    'dar',
    'hotel',
    'kasbah',
    'desert-camp',
    'guesthouse',
    'hostel',
    'resort',
    'apartment',
    'villa',
    'lodge'
  ] as const,
  lifestyle: ['lean', 'balanced', 'premium'] as const,
  locationFeel: ['medina-heart', 'ville-nouvelle', 'countryside'] as const,
  groupTypes: [
    'solo',
    'couple',
    'family',
    'friends',
    'large-groups',
    'seniors',
    'business-friendly',
    'nature-lover'
  ] as const,
  safetyLevel: [1, 2, 3, 4, 5] as const,
  paymentMethods: [
    'cash',
    'credit_card',
    'visa',
    'mastercard',
    'apple_pay',
    'google_pay',
    'bank_transfer'
  ] as const,
  amenities: [
    'pool',
    'breakfast',
    'ac',
    'heating',
    'wifi',
    'rooftop',
    'ensuite',
    'restaurant',
    'bar',
    'gym',
    'elevator',
    'laundry',
    'room-service',
    'pet-friendly'
  ] as const,
  roomFeatures: [
    'soundproof',
    'workspace',
    'balcony',
    'fireplace',
    'courtyard-view',
    'mountain-view',
    'sea-view',
    'patio-access'
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
  archetypeAffinity: [
    'first-timer',
    'culture',
    'adventure',
    'relaxed',
    'foodie',
    'budget',
    'luxury'
  ] as const,
};

/**
 * COPY-PASTE BLANK TEMPLATE FOR ACCOMMODATIONS (SLEEP)
 */
export const EMPTY_SLEEP_TEMPLATE: SleepListing = {
  id: 'stay-[city]-[slug]',
  city: 'marrakech', // Valid CityId
  name: '',
  neighborhood: 'Medina', // District / quarter
  description: '', // Factual, atmospheric overview
  pricePerNight: 850, // Price in MAD per night
  lifestyle: 'balanced', // Options: 'lean' | 'balanced' | 'premium'
  type: 'riad', // Options from SLEEP_ALLOWED_OPTIONS.types
  locationFeel: 'medina-heart', // Options: 'medina-heart' | 'ville-nouvelle' | 'countryside'
  safetyLevel: 5, // 1 to 5
  groupTypes: ['solo', 'couple', 'friends'], // Options from SLEEP_ALLOWED_OPTIONS.groupTypes
  amenities: ['breakfast', 'ac', 'heating', 'wifi', 'rooftop', 'ensuite'],
  
  // Structured Amenities Flags
  hasPool: false, // Boolean
  hasBreakfast: true, // Boolean
  hasAC: true, // Boolean
  hasHeating: true, // Boolean
  hasRooftop: true, // Boolean
  hasEnsuite: true, // Boolean
  hasRestaurant: false, // Boolean
  hasBar: false, // Boolean
  hasGym: false, // Boolean
  hasElevator: false, // Boolean
  hasLaundryService: true, // Boolean
  hasRoomService: false, // Boolean
  petFriendly: false, // Boolean
  taxesIncluded: true, // Boolean
  freeCancellation: true, // Boolean
  kidsStayFree: false, // Boolean
  nearMedina: true, // Boolean
  nearBeach: false, // Boolean
  nearMosque: true, // Boolean
  isHiddenGem: false, // Boolean

  // Media & Badges
  images: [], // 1-4 high-res photo URLs
  tip: '', // Insider advice on rooms, quiet floors, or rooftop breakfast
  archetypeAffinity: ['first-timer', 'culture'], // Options from SLEEP_ALLOWED_OPTIONS.archetypeAffinity
  vibeTags: ['historic', 'intimate', 'tranquil'], // Ambiance descriptors
  tags: ['riad', 'medina', 'breakfast', 'rooftop', 'ac', 'wifi'], // Search & filter tags
  
  // Detail View & Contact Integrations
  locationSummary: 'Heart of the historic Medina',
  googleMapsUrl: 'https://maps.google.com/?q=',
  contactWhatsApp: '', // Clean number format e.g. '+212 600 000000'
  bookingUrl: '', // Official direct booking URL
  paymentMethods: ['credit_card', 'cash'], // Options from SLEEP_ALLOWED_OPTIONS.paymentMethods
  languagesSpoken: ['Arabic', 'French', 'English'], // Options from SLEEP_ALLOWED_OPTIONS.languagesSpoken
  
  // Logistics & Check-In
  logistics: {
    checkIn: '14:00',
    checkOut: '11:00',
    luggageStorage: 'Available free of charge',
    parking: 'Public parking available near medina gate (30 MAD/day)',
    airportTransfer: 'Available upon request (200 MAD)',
    contact: '+212 524 000000'
  },
  
  // Room Configuration
  roomFeatures: ['courtyard-view', 'soundproof'],
  roomTypes: [
    {
      name: 'Standard Double Room',
      view: 'Courtyard view',
      price: 850,
      beds: '1 Double bed',
      size: '22 sqm',
      available: true
    }
  ],
  
  // Geolocation
  coordinates: {
    lat: 31.6295,
    lng: -7.9811
  },
  
  // Trust & Ratings
  googleRating: 4.7,
  googleReviewCount: 250
};

/**
 * REALISTIC SAMPLE ENTRY FOR ACCOMMODATIONS (SLEEP)
 */
export const SAMPLE_SLEEP_LISTING: SleepListing = {
  id: 'stay-marrakech-riad-yasmine',
  city: 'marrakech',
  name: 'Riad Yasmine',
  neighborhood: 'Medina',
  description: 'An iconic boutique riad famous for its teal-tiled patio plunge pool and lush potted palms. Offers seven private suites, panoramic Atlas mountain views from the sun-drenched rooftop terrace, and home-cooked breakfasts.',
  pricePerNight: 1400,
  lifestyle: 'premium',
  type: 'riad',
  locationFeel: 'medina-heart',
  safetyLevel: 5,
  groupTypes: ['couple', 'friends', 'solo'],
  amenities: ['pool', 'breakfast', 'ac', 'heating', 'rooftop', 'ensuite', 'restaurant'],
  hasPool: true,
  hasBreakfast: true,
  hasAC: true,
  hasHeating: true,
  hasRooftop: true,
  hasEnsuite: true,
  hasRestaurant: true,
  hasBar: false,
  hasGym: false,
  hasElevator: false,
  hasLaundryService: true,
  hasRoomService: true,
  petFriendly: false,
  taxesIncluded: true,
  freeCancellation: true,
  kidsStayFree: false,
  nearMedina: true,
  nearBeach: false,
  nearMosque: true,
  isHiddenGem: false,
  images: [
    'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=800'
  ],
  tip: 'Book 3-4 months ahead as its 7 rooms sell out rapidly. Ground-floor patio rooms offer direct pool access.',
  archetypeAffinity: ['culture', 'relaxed', 'luxury'],
  vibeTags: ['iconic', 'photogenic', 'peaceful', 'botanical'],
  tags: ['riad', 'pool', 'breakfast', 'rooftop', 'ac', 'wifi', 'medina'],
  locationSummary: 'Bab Doukkala area of Marrakech Medina',
  googleMapsUrl: 'https://maps.google.com/?q=31.6372,-7.9942',
  contactWhatsApp: '+212661223344',
  bookingUrl: 'https://riad-yasmine.com',
  paymentMethods: ['credit_card', 'visa', 'mastercard', 'cash'],
  languagesSpoken: ['Arabic', 'French', 'English'],
  logistics: {
    checkIn: '14:00 – 22:00',
    checkOut: '11:00',
    luggageStorage: 'Complimentary luggage hold before check-in and after check-out',
    parking: 'Paid guarded parking at Bab Doukkala gate (5-minute walk)',
    airportTransfer: 'Direct private airport pickup available for 200 MAD',
    contact: '+212 524 388012'
  },
  roomFeatures: ['courtyard-view', 'soundproof', 'fireplace'],
  roomTypes: [
    {
      name: 'Superior Patio Suite',
      view: 'Pool courtyard view',
      price: 1400,
      beds: '1 King bed',
      size: '28 sqm',
      available: true
    }
  ],
  coordinates: {
    lat: 31.6372,
    lng: -7.9942
  },
  googleRating: 4.8,
  googleReviewCount: 780
};
