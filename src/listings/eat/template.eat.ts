/**
 * =========================================================================
 * MOROCCAN MATE — CANONICAL FOOD (EAT) MASTER TEMPLATE & OPTIONS BIBLE
 * =========================================================================
 *
 * This file serves as the SINGLE SOURCE OF TRUTH for all food & dining listings.
 * Any new array or allowed option MUST be added here first.
 *
 * Use this file as the master reference when feeding data to external AI models
 * or human contributors for web research and listing creation.
 */

import type { EatListing, CityId, GroupType } from '../types';

/**
 * THE BIBLE OF ALLOWED VALUES & ARRAY OPTIONS FOR FOOD (EAT)
 * Every string in listing arrays MUST be one of these valid values.
 */
export const EAT_ALLOWED_OPTIONS = {
  lifestyle: ['lean', 'balanced', 'premium'] as const,
  groupTypes: ['solo', 'couple', 'family', 'friends', 'large-groups', 'seniors'] as const,
  mealTypes: [
    'breakfast',
    'lunch',
    'dinner',
    'late-night',
    'snack',
    'brunch',
    'drinks'
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
  crowdLevel: ['quiet', 'balanced', 'bustling'] as const,
  badges: ['local', 'splurge', 'hidden-gem', 'local-favorite', 'tourist-trap'] as const,
};

/**
 * COPY-PASTE BLANK TEMPLATE FOR FOOD (EAT)
 * External AIs and contributors should copy this exact structure when generating new entries.
 */
export const EMPTY_EAT_TEMPLATE: EatListing = {
  id: 'eat-[city]-[slug]',
  city: 'marrakech', // Valid CityId (e.g. 'marrakech', 'fes', 'tangier')
  name: '',
  neighborhood: '', // e.g. 'Medina', 'Guéliz', 'Kasbah'
  description: '', // Informative, factual description (no promotional hype)
  pricePerPerson: 15, // In USD equivalent or approx EUR
  lifestyle: 'balanced', // Options: 'lean' | 'balanced' | 'premium'
  groupTypes: ['solo', 'couple', 'family', 'friends'], // Options from EAT_ALLOWED_OPTIONS.groupTypes
  mealTypes: ['lunch', 'dinner'], // Options from EAT_ALLOWED_OPTIONS.mealTypes
  experienceTypes: ['casual', 'traditional'], // Options from EAT_ALLOWED_OPTIONS.experienceTypes
  foodStyles: ['Moroccan'], // Options from EAT_ALLOWED_OPTIONS.foodStyles
  bestDishes: [], // 2-4 verified authentic dish names
  isHalal: true, // Boolean (default true for Moroccan food)
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
  paymentMethods: ['cash'], // Options: 'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay'
  reservationMethod: ['walk-in'], // Options: 'whatsapp' | 'phone' | 'website' | 'walk-in' | 'email'
  reservationContact: '', // Phone or WhatsApp formatted with country code (e.g. '+212 524 000000')
  bookingUrl: '', // Direct website booking link if verified
  whatsappNumber: '', // WhatsApp number without spaces/symbols
  googleRating: 4.5, // 1.0 to 5.0
  googleReviewCount: 100, // Total number of reviews on Google
  googleMapsUrl: 'https://maps.google.com/?q=', // Valid Google Maps search/place link
  seatingTypes: ['indoor', 'courtyard'], // Options: 'indoor' | 'outdoor' | 'rooftop' | 'terrace' | 'courtyard' | 'street-side'
  tags: ['moroccan', 'halal', 'lunch', 'dinner'], // Tags for search & quiz filters
  vibeTags: ['authentic', 'welcoming'], // Descriptive ambiance tags
  pros: [], // 2-3 verified highlights (e.g. ["Sunny rooftop with medina views", "Generous vegetarian tagine options"])
  cons: [], // 1-2 honest drawbacks (e.g. ["Cash only — cards not accepted", "Peak dinner times require reservations"])
  tip: '', // Factual insider tip for travelers
  badge: 'local-favorite' // Options: 'local' | 'splurge' | 'hidden-gem' | 'local-favorite' | 'tourist-trap'
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
  bestDishes: ['Slow-Cooked Lamb Tagine with Prunes', 'Vegetarian Couscous', 'Moroccan Pastilla'],
  isHalal: true,
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
  paymentMethods: ['cash', 'credit_card', 'visa', 'mastercard'],
  reservationMethod: ['whatsapp', 'website', 'phone'],
  reservationContact: '+212 524 378295',
  bookingUrl: 'https://lejardinmarrakech.com',
  whatsappNumber: '+212661555555',
  googleRating: 4.3,
  googleReviewCount: 4850,
  googleMapsUrl: 'https://maps.google.com/?q=31.6322,-7.9892',
  seatingTypes: ['courtyard', 'terrace', 'rooftop'],
  tags: ['moroccan', 'halal', 'vegetarian', 'lunch', 'dinner', 'courtyard', 'hidden-gem'],
  vibeTags: ['botanical', 'romantic', 'oasis', 'tranquil'],
  pros: [
    'Shaded peaceful garden courtyard sheltered from medina commotion',
    'Extensive vegetarian menu options made with fresh produce'
  ],
  cons: [
    'Dinner reservations are essential during high tourist season',
    'Does not serve alcohol'
  ],
  tip: 'Reserve a courtyard table on the ground floor during hot midday hours to enjoy the coolest shade.',
  badge: 'local-favorite'
};
