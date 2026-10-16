/**
 * =========================================================================
 * MOROCCAN MATE — CANONICAL FOOD (EAT) MASTER TEMPLATE & OPTIONS BIBLE
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file serves as the SINGLE SOURCE OF TRUTH for all food & dining listings.
 * Any new array or allowed option MUST be added here first.
 *
 * Use this file as the master reference when feeding data to external AI models
 * or human contributors for web research and listing creation.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-al_hoceima-1' or 'eat-al_hoceima-club-nautique')
 * - lifestyle:          'lean' | 'balanced' | 'premium'
 * - groupTypes:         'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors' | 'business-friendly' | 'nature-lover'
 * - mealTypes:          'breakfast' | 'lunch' | 'dinner' | 'late-night' | 'snack' | 'brunch' | 'drinks' | 'afternoon-tea' | 'flexible'
 * - experienceTypes:    'street-food' | 'fine-dining' | 'casual' | 'cafes-tea' | 'hidden-gem' | 'rooftop' | 'traditional' | 'market-stall'
 * - foodStyles:         'Moroccan' | 'Seafood' | 'Berber' | 'Tagine & Couscous' | 'French-Moroccan' | 'Italian' | 'Mediterranean' | 'Middle Eastern' | 'Cafe & Pastry' | 'Grill & BBQ' | 'Vegetarian/Vegan' | 'International'
 * - cuisineTags:        'moroccan-traditional' | 'international' | 'cafe-pastry' | 'seafood'
 * - paymentMethods:     'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay'
 * - reservationMethod:  'whatsapp' | 'phone' | 'website' | 'walk-in' | 'email'
 * - closedDays:         'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
 * - seatingTypes:       'indoor' | 'outdoor' | 'rooftop' | 'terrace' | 'courtyard' | 'street-side'
 * - alcoholPolicy:      'serves-alcohol' | 'dry'
 * - halalStatus:        'likely-halal-food' | 'halal-certified' | 'unknown' | 'non-halal'
 * - verificationStatus: 'verified' | 'unverified' | 'possibly-closed' | 'wrong-city'
 * - isTemporarilyHidden: boolean (true when temporarily closed or under renovation)
 * - ramadanFriendly:    'serves-lunch' | 'special-ftour' | 'closed'
 * - crowdLevel:         'quiet' | 'balanced' | 'bustling'
 * - badge:              'local' | 'splurge' | 'hidden-gem' | 'local-favorite' | 'tourist-trap'
 * - archetypeAffinity:  'luxury' | 'first-timer' | 'culture' | 'nomad' | 'adventure' | 'budget'
 *
 * 3-SECTION COPY-PASTE TEMPLATE (QUIZ, FILTER, UI):
 * {
 *   id: 'e-[city]-[id]',
 *   city: '[city]',
 *
 *   // ── 1. QUIZ (personalization, mood & matching) ──
 *   quiz: {
 *     lifestyle: 'balanced',
 *     groupTypes: ['solo', 'couple', 'family', 'friends'],
 *     mealTypes: ['lunch', 'dinner'],
 *     experienceTypes: ['casual', 'traditional'],
 *     foodStyles: ['Moroccan'],
 *     cuisineTags: ['moroccan-traditional'],
 *     archetypeAffinity: ['first-timer'],
 *     vibeTags: ['authentic'],
 *     crowdLevel: 'balanced'
 *   },
 *
 *   // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
 *   filter: {
 *     pricePerPerson: 15,
 *     isHalal: true,
 *     halalStatus: 'likely-halal-food',
 *     isVegetarianFriendly: false,
 *     servesAlcohol: false,
 *     alcoholPolicy: 'dry',
 *     hasDelivery: false,
 *     hasParking: false,
 *     nearMedina: true,
 *     nearBeach: false,
 *     nearCenter: true,
 *     hasEnglishStaff: true,
 *     hasFrenchStaff: true,
 *     ramadanFriendly: 'serves-lunch',
 *     closedDays: [],
 *     seatingTypes: ['indoor'],
 *     paymentMethods: ['cash'],
 *     tags: ['moroccan', 'halal', 'lunch', 'dinner'],
 *     isHiddenGem: false,
 *     isTemporarilyHidden: false,
 *     verificationStatus: 'verified'
 *   },
 *
 *   // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
 *   ui: {
 *     name: '',
 *     neighborhood: '',
 *     description: '',
 *     tip: '',
 *     badge: 'local-favorite',
 *     bestDishes: [],
 *     pros: [],
 *     cons: [],
 *     googleRating: 4.5,
 *     googleReviewCount: 100,
 *     tripadvisorRating: 4.5,
 *     tripadvisorReviewCount: 100,
 *     theforkRating: 4.5,
 *     theforkReviewCount: 50,
 *     restaurantguruRating: 4.5,
 *     restaurantguruReviewCount: 100,
 *     openTime: '11:00',
 *     closeTime: '23:00',
 *     googleMapsUrl: 'https://maps.google.com/?q=',
 *     reservationMethod: ['walk-in'],
 *     reservationContact: '',
 *     bookingUrl: '',
 *     whatsappNumber: '',
 *     website: 'not-available',
 *     instagram: 'not-available'
 *   }
 * }
 * =========================================================================
 */

import type { EatListing, CityId, GroupType } from '../types';

/**
 * THE BIBLE OF ALLOWED VALUES & ARRAY OPTIONS FOR FOOD (EAT)
 * Every string in listing arrays MUST be one of these valid values.
 */
export const EAT_ALLOWED_OPTIONS = {
  lifestyle: ['lean', 'balanced', 'premium'] as const,
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
  mealTypes: [
    'breakfast',
    'lunch',
    'dinner',
    'late-night',
    'snack',
    'brunch',
    'drinks',
    'afternoon-tea',
    'flexible'
  ] as const,
  experienceTypes: [
    'street-food',
    'fine-dining',
    'casual',
    'cafes-tea',
    'hidden-gem',
    'rooftop',
    'traditional',
    'market-stall'
  ] as const,
  foodStyles: [
    'Moroccan',
    'Seafood',
    'Berber',
    'Tagine & Couscous',
    'French-Moroccan',
    'Italian',
    'Mediterranean',
    'Middle Eastern',
    'Cafe & Pastry',
    'Grill & BBQ',
    'Vegetarian/Vegan',
    'International'
  ] as const,
  cuisineTags: [
    'moroccan-traditional',
    'international',
    'cafe-pastry',
    'seafood'
  ] as const,
  paymentMethods: [
    'cash',
    'credit_card',
    'visa',
    'mastercard',
    'apple_pay',
    'google_pay'
  ] as const,
  reservationMethod: [
    'whatsapp',
    'phone',
    'website',
    'walk-in',
    'email'
  ] as const,
  closedDays: [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ] as const,
  seatingTypes: [
    'indoor',
    'outdoor',
    'rooftop',
    'terrace',
    'courtyard',
    'street-side'
  ] as const,
  alcoholPolicy: ['serves-alcohol', 'dry'] as const,
  halalStatus: [
    'likely-halal-food',
    'halal-certified',
    'unknown',
    'non-halal'
  ] as const,
  verificationStatus: [
    'verified',
    'unverified',
    'possibly-closed',
    'wrong-city'
  ] as const,
  ramadanFriendly: [
    'serves-lunch',
    'special-ftour',
    'closed'
  ] as const,
  crowdLevel: ['quiet', 'balanced', 'bustling'] as const,
  badges: ['local', 'splurge', 'hidden-gem', 'local-favorite', 'tourist-trap'] as const,
  archetypeAffinity: [
    'luxury',
    'first-timer',
    'culture',
    'nomad',
    'adventure',
    'budget'
  ] as const,
};

/**
 * COPY-PASTE BLANK TEMPLATE FOR FOOD (EAT)
 * External AIs and contributors should copy this exact structure when generating new entries.
 */
export const EMPTY_EAT_TEMPLATE: EatListing = {
  id: 'e-[city]-[id]',
  city: 'marrakech', // Valid CityId (e.g. 'marrakech', 'fes', 'tangier', 'agadir', 'al_hoceima')
  name: '',
  neighborhood: '', // e.g. 'Medina', 'Guéliz', 'Marina'
  description: '', // Informative, factual description (no promotional hype)
  pricePerPerson: 15, // In USD equivalent or approx EUR
  lifestyle: 'balanced', // Options: 'lean' | 'balanced' | 'premium'
  groupTypes: ['solo', 'couple', 'family', 'friends'], // Options from EAT_ALLOWED_OPTIONS.groupTypes
  mealTypes: ['lunch', 'dinner'], // Options from EAT_ALLOWED_OPTIONS.mealTypes
  experienceTypes: ['casual', 'traditional'], // Options from EAT_ALLOWED_OPTIONS.experienceTypes
  foodStyles: ['Moroccan'], // Options from EAT_ALLOWED_OPTIONS.foodStyles
  cuisineTags: ['moroccan-traditional'], // Options from EAT_ALLOWED_OPTIONS.cuisineTags
  bestDishes: [], // 2-4 verified authentic dish names
  isHalal: true, // Boolean (default true for Moroccan food)
  halalStatus: 'likely-halal-food', // Options: 'likely-halal-food' | 'halal-certified' | 'unknown' | 'non-halal'
  isVegetarianFriendly: false, // Boolean
  servesAlcohol: false, // Boolean
  alcoholPolicy: 'dry', // Options: 'serves-alcohol' | 'dry'
  hasDelivery: false, // Boolean
  nearMedina: true, // Boolean
  nearBeach: false, // Boolean
  nearCenter: true, // Boolean
  hasEnglishStaff: true, // Boolean
  hasFrenchStaff: true, // Boolean
  hasParking: false, // Boolean
  crowdLevel: 'balanced', // Options: 'quiet' | 'balanced' | 'bustling'
  openTime: '11:00', // "HH:MM" 24h format
  closeTime: '23:00', // "HH:MM" 24h format
  closedDays: [], // e.g. ['monday'] or empty if open 7 days
  ramadanFriendly: 'serves-lunch', // Options: 'serves-lunch' | 'special-ftour' | 'closed'
  seatingTypes: ['indoor'], // Options: 'indoor' | 'outdoor' | 'rooftop' | 'terrace' | 'courtyard' | 'street-side'
  paymentMethods: ['cash'], // Options: 'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay'
  reservationMethod: ['walk-in'], // Options: 'whatsapp' | 'phone' | 'website' | 'walk-in' | 'email'
  reservationContact: '', // Phone or WhatsApp formatted with country code (e.g. '+212 524 000000')
  bookingUrl: '', // Direct website booking link if verified
  whatsappNumber: '', // WhatsApp number without spaces/symbols
  googleRating: 4.5, // 1.0 to 5.0
  googleReviewCount: 100, // Total number of reviews on Google
  tripadvisorRating: 4.5, // Total rating on TripAdvisor
  tripadvisorReviewCount: 100, // Total review count on TripAdvisor
  theforkRating: 4.5, // TheFork rating
  theforkReviewCount: 50, // TheFork review count
  restaurantguruRating: 4.5, // Restaurant Guru rating
  restaurantguruReviewCount: 100, // Restaurant Guru review count
  googleMapsUrl: 'https://maps.google.com/?q=', // Valid Google Maps search/place link
  website: 'not-available', // Official website URL or 'not-available'
  instagram: 'not-available', // Instagram profile URL or 'not-available'
  tags: ['moroccan', 'halal', 'lunch', 'dinner'], // Tags for search & quiz filters
  vibeTags: ['authentic'], // Descriptive ambiance tags
  archetypeAffinity: ['first-timer'], // Options from EAT_ALLOWED_OPTIONS.archetypeAffinity
  isHiddenGem: false, // Boolean
  isTemporarilyHidden: false, // Boolean
  pros: [], // 2-3 verified highlights
  cons: [], // 1-2 honest drawbacks
  tip: '', // Factual insider tip for travelers
  badge: 'local-favorite', // Options: 'local' | 'splurge' | 'hidden-gem' | 'local-favorite' | 'tourist-trap'
  verificationStatus: 'verified' // Options: 'verified' | 'unverified' | 'possibly-closed' | 'wrong-city'
};

/**
 * REALISTIC SAMPLE ENTRY FOR FOOD (EAT)
 */
export const SAMPLE_EAT_LISTING: EatListing = {
  id: 'eat-marrakech-le-jardin',
  city: 'marrakech',
  name: 'Le Jardin',
  neighborhood: 'Medina',
  description: 'An idyllic 1960s riad turned lush garden restaurant in the heart of Marrakech medina. Features shaded outdoor dining under orange trees, serving traditional tagines and light Mediterranean dishes.',
  pricePerPerson: 22,
  lifestyle: 'balanced',
  groupTypes: ['couple', 'family', 'friends'],
  mealTypes: ['lunch', 'dinner'],
  experienceTypes: ['casual', 'traditional', 'hidden-gem'],
  foodStyles: ['Moroccan', 'Mediterranean'],
  cuisineTags: ['moroccan-traditional'],
  bestDishes: ['Slow-Cooked Lamb Tagine with Prunes', 'Vegetarian Couscous', 'Moroccan Pastilla'],
  isHalal: true,
  halalStatus: 'likely-halal-food',
  isVegetarianFriendly: true,
  servesAlcohol: false,
  alcoholPolicy: 'dry',
  hasDelivery: false,
  nearMedina: true,
  nearBeach: false,
  nearCenter: true,
  hasEnglishStaff: true,
  hasFrenchStaff: true,
  hasParking: false,
  crowdLevel: 'bustling',
  openTime: '11:00',
  closeTime: '23:00',
  closedDays: [],
  ramadanFriendly: 'serves-lunch',
  seatingTypes: ['courtyard', 'terrace', 'rooftop'],
  paymentMethods: ['cash', 'credit_card', 'visa', 'mastercard'],
  reservationMethod: ['whatsapp', 'website', 'phone'],
  reservationContact: '+212 524 378295',
  bookingUrl: 'https://lejardinmarrakech.com',
  whatsappNumber: '+212661555555',
  googleRating: 4.3,
  googleReviewCount: 4850,
  tripadvisorRating: 4.5,
  tripadvisorReviewCount: 2100,
  theforkRating: 4.4,
  theforkReviewCount: 650,
  restaurantguruRating: 4.5,
  restaurantguruReviewCount: 4850,
  googleMapsUrl: 'https://maps.google.com/?q=31.6322,-7.9892',
  website: 'https://lejardinmarrakech.com',
  instagram: 'https://instagram.com/lejardinmarrakech',
  tags: ['moroccan', 'halal', 'vegetarian', 'lunch', 'dinner', 'courtyard', 'hidden-gem'],
  vibeTags: ['botanical', 'romantic', 'oasis', 'tranquil'],
  archetypeAffinity: ['first-timer', 'luxury'],
  isHiddenGem: false,
  isTemporarilyHidden: false,
  pros: [
    'Shaded peaceful garden courtyard sheltered from medina commotion',
    'Extensive vegetarian menu options made with fresh produce'
  ],
  cons: [
    'Dinner reservations are essential during high tourist season',
    'Does not serve alcohol'
  ],
  tip: 'Reserve a courtyard table on the ground floor during hot midday hours to enjoy the coolest shade.',
  badge: 'local-favorite',
  verificationStatus: 'verified'
};
