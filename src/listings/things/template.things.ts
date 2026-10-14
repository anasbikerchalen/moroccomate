/**
 * =========================================================================
 * MOROCCAN MATE — CANONICAL THINGS TO DO MASTER TEMPLATE & OPTIONS BIBLE
 * =========================================================================
 *
 * This file serves as the SINGLE SOURCE OF TRUTH for all activity & landmark listings.
 * Any new array or allowed option MUST be added here first.
 *
 * Use this file as the master reference when feeding data to external AI models
 * or human contributors for web research and listing creation.
 */

import type { ThingToDoListing, CityId, GroupType } from '../types';

/**
 * THE BIBLE OF ALLOWED VALUES & ARRAY OPTIONS FOR THINGS TO DO
 */
export const THINGS_ALLOWED_OPTIONS = {
  lifestyle: ['lean', 'balanced', 'premium'] as const,
  groupTypes: ['solo', 'couple', 'family', 'friends', 'large-groups', 'seniors'] as const,
  crowdLevel: ['quiet', 'balanced', 'bustling'] as const,
  energyLevel: ['relaxed', 'moderate', 'active', 'intense'] as const,
  transportMode: ['walkable', 'taxi', 'transit', 'mixed'] as const,
  safetyLevel: [1, 2, 3, 4, 5] as const,
  fitnessLevel: ['relaxed', 'moderate', 'active', 'intense'] as const,
  archetypeAffinity: [
    'first-timer',
    'culture',
    'adventure',
    'relaxed',
    'foodie',
    'budget',
    'luxury'
  ] as const,
  vibeTags: [
    'artistic',
    'botanical',
    'iconic',
    'vibrant',
    'historic',
    'panoramic',
    'serene',
    'authentic',
    'spiritual',
    'dramatic',
    'active'
  ] as const,
  standardTags: [
    'cultural-tour',
    'historical-tour',
    'monument',
    'museum',
    'garden',
    'nature',
    'photo-spot',
    'instagrammable',
    'hammam',
    'wellness',
    'cooking-class',
    'food-tour',
    'medina-walk',
    'souk-exploration',
    'desert-trip',
    'camel-ride',
    'hiking',
    'surfing',
    'water-sports',
    'boat-trip',
    'sunset-view',
    'tripod-allowed',
    'rainy-day-ok',
    'morning',
    'afternoon',
    'evening'
  ] as const,
  badges: ['popular', 'must-visit', 'hidden-gem', 'local-favorite'] as const,
};

/**
 * COPY-PASTE BLANK TEMPLATE FOR THINGS TO DO
 */
export const EMPTY_THINGS_TEMPLATE: ThingToDoListing = {
  id: 'things-[city]-[slug]',
  city: 'marrakech', // Valid CityId
  name: '',
  neighborhood: 'Medina', // District or quarter
  description: '', // 2-4 sentences describing history, sensory experience, and practical nature
  price: 70, // Entrance or ticket price in MAD (0 if free)
  lifestyle: ['balanced'], // Options from THINGS_ALLOWED_OPTIONS.lifestyle
  groupTypes: ['solo', 'couple', 'family', 'friends'], // Options from THINGS_ALLOWED_OPTIONS.groupTypes
  crowdLevel: 'balanced', // Options: 'quiet' | 'balanced' | 'bustling'
  durationMinutes: 90, // Estimated duration in minutes (e.g. 60, 90, 180, 480)
  hasEnglishGuide: true, // Boolean
  hasFrenchGuide: true, // Boolean
  images: [], // 1-3 verified high-res photo URLs
  googleRating: 4.6, // 1.0 to 5.0
  reviewCount: 1500, // Review count
  address: '', // Street address or gate access
  coordinates: {
    lat: 31.6295,
    lng: -7.9811
  },
  googleMapsUrl: 'https://maps.google.com/?q=',
  safetyLevel: 5, // 1 to 5
  energyLevel: 'moderate', // Options: 'relaxed' | 'moderate' | 'active' | 'intense'
  transportMode: 'walkable', // Options: 'walkable' | 'taxi' | 'transit' | 'mixed'
  isKidFriendly: true, // Boolean
  isFemaleFriendly: true, // Boolean
  isWheelchairAccessible: false, // Boolean
  isPhotographyFriendly: true, // Boolean
  hasPrivateOption: false, // Boolean
  hasSunsetView: false, // Boolean
  hasWiFi: false, // Boolean
  nearMedina: true, // Boolean
  goodForRain: false, // Boolean
  bookingRequired: false, // Boolean (true if advance online ticket is mandatory)
  walkInOkay: true, // Boolean
  hasIndoorRest: false, // Boolean
  hasAC: false, // Boolean
  nearBeach: false, // Boolean
  hasLocalGuide: false, // Boolean
  tags: ['cultural-tour', 'monument', 'historic', 'photo-spot'], // Options from THINGS_ALLOWED_OPTIONS.standardTags
  archetypeAffinity: ['first-timer', 'culture'], // Options from THINGS_ALLOWED_OPTIONS.archetypeAffinity
  vibeTags: ['historic', 'iconic', 'authentic'], // Options from THINGS_ALLOWED_OPTIONS.vibeTags
  isHiddenGem: false, // Boolean
  cluster: 'Medina Cluster',
  friction: {
    walkingFatigue: 2, // 1 (minimal) to 5 (extreme)
    heatExposure: 2,   // 1 to 5
    touristCrowd: 3,   // 1 to 5
    noiseLevel: 2,     // 1 to 5
    scamRisk: 1,       // 1 to 5
    physicalIntensity: 2, // 1 to 5
    kidSuitable: true  // Boolean
  },
  tip: '', // Essential traveler advice (e.g. best time to avoid lines or dress etiquette)
  badge: 'popular' // Options from THINGS_ALLOWED_OPTIONS.badges
};

/**
 * REALISTIC SAMPLE ENTRY FOR THINGS TO DO
 */
export const SAMPLE_THINGS_LISTING: ThingToDoListing = {
  id: 'things-marrakech-ben-youssef-madrasa',
  city: 'marrakech',
  name: 'Ben Youssef Madrasa',
  neighborhood: 'Medina',
  description: 'A 14th-century Islamic college showcasing the zenith of Marinid and Saadian architecture. The central courtyard dazzles with carved cedarwood, intricate stucco calligraphic bands, and multi-colored zellige mosaic tilework.',
  price: 50,
  lifestyle: ['balanced', 'premium'],
  groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors'],
  crowdLevel: 'bustling',
  durationMinutes: 75,
  hasEnglishGuide: false,
  hasFrenchGuide: true,
  images: [
    'https://images.unsplash.com/photo-1594911771140-5e3fc49df74a?auto=format&fit=crop&q=80&w=800'
  ],
  googleRating: 4.7,
  reviewCount: 14200,
  address: 'Rue Souk Ahl Fes, Medina, Marrakech 40000',
  coordinates: {
    lat: 31.6318,
    lng: -7.9866
  },
  googleMapsUrl: 'https://maps.google.com/?q=31.6318,-7.9866',
  safetyLevel: 5,
  energyLevel: 'relaxed',
  transportMode: 'walkable',
  isKidFriendly: true,
  isFemaleFriendly: true,
  isWheelchairAccessible: false,
  isPhotographyFriendly: true,
  hasPrivateOption: false,
  hasSunsetView: false,
  hasWiFi: false,
  nearMedina: true,
  goodForRain: true,
  bookingRequired: false,
  walkInOkay: true,
  hasIndoorRest: true,
  hasAC: false,
  nearBeach: false,
  hasLocalGuide: false,
  tags: ['cultural-tour', 'monument', 'historic', 'photo-spot', 'instagrammable', 'rainy-day-ok'],
  archetypeAffinity: ['first-timer', 'culture'],
  vibeTags: ['historic', 'iconic', 'artistic', 'serene'],
  isHiddenGem: false,
  cluster: 'Northern Medina Cluster',
  friction: {
    walkingFatigue: 2,
    heatExposure: 2,
    touristCrowd: 4,
    noiseLevel: 2,
    scamRisk: 1,
    physicalIntensity: 1,
    kidSuitable: true
  },
  tip: 'Arrive right at the 9:00 AM opening to photograph the reflecting pool and courtyard empty before tour groups arrive.',
  badge: 'must-visit'
};
