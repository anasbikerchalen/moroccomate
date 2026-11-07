/**
 * =========================================================================
 * LISTING HEADERS STANDARDIZER
 * =========================================================================
 *
 * Prepends/updates the canonical Master Template Header & Options Bible
 * across every city listing file in src/listings/{eat, sleep, things, shop}/*.ts.
 *
 * This ensures that whenever a user uploads any city listing file to an external AI:
 * 1. The external AI immediately reads the Master Schema.
 * 2. The external AI sees all permissible array options (the Bible).
 * 3. The external AI has a clean, copy-pasteable blank template to follow.
 *
 * Run: tsx scripts/standardize-listing-headers.ts
 */

import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

// --------------------------------------------------------------------------
// 1. EAT (FOOD) HEADER GENERATOR
// --------------------------------------------------------------------------
function getEatHeader(cityName: string): string {
  return `/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: ${cityName.toUpperCase()}
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * When updating or generating new food entries with external AI or web search,
 * you MUST strictly adhere to the following allowed array values:
 *
 * ALLOWED OPTIONS BIBLE:
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors'
 * - mealTypes:        'breakfast' | 'lunch' | 'dinner' | 'late-night' | 'snack' | 'brunch' | 'drinks'
 * - experienceTypes:  'street-food' | 'fine-dining' | 'casual' | 'cafes-tea' | 'hidden-gem' | 'rooftop' | 'traditional' | 'market-stall'
 * - foodStyles:       'Moroccan' | 'Seafood' | 'Berber' | 'Tagine & Couscous' | 'French-Moroccan' | 'Italian' | 'Mediterranean' | 'Middle Eastern' | 'Cafe & Pastry' | 'Grill & BBQ' | 'Vegetarian/Vegan' | 'International'
 * - paymentMethods:   'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay'
 * - reservationMethod:'whatsapp' | 'phone' | 'website' | 'walk-in' | 'email'
 * - closedDays:       'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
 * - seatingTypes:     'indoor' | 'outdoor' | 'rooftop' | 'terrace' | 'courtyard' | 'street-side'
 * - alcoholPolicy:    'serves-alcohol' | 'dry'
 * - crowdLevel:       'quiet' | 'balanced' | 'bustling'
 * - badge:            'local' | 'splurge' | 'hidden-gem' | 'local-favorite' | 'tourist-trap'
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW ENTRIES:
 * {
 *   id: 'eat-[city]-[slug]',
 *   city: '${cityName.toLowerCase()}',
 *   name: '',
 *   neighborhood: '',
 *   description: '',
 *   pricePerPerson: 15,
 *   lifestyle: 'balanced',
 *   groupTypes: ['solo', 'couple', 'family', 'friends'],
 *   mealTypes: ['lunch', 'dinner'],
 *   experienceTypes: ['casual', 'traditional'],
 *   foodStyles: ['Moroccan'],
 *   bestDishes: [],
 *   isHalal: true,
 *   isVegetarianFriendly: false,
 *   servesAlcohol: false,
 *   alcoholPolicy: 'dry',
 *   hasDelivery: false,
 *   nearMedina: true,
 *   nearBeach: false,
 *   nearCenter: true,
 *   hasEnglishStaff: true,
 *   hasFrenchStaff: true,
 *   hasParking: false,
 *   crowdLevel: 'balanced',
 *   openTime: '11:00',
 *   closeTime: '23:00',
 *   closedDays: [],
 *   paymentMethods: ['cash'],
 *   reservationMethod: ['walk-in'],
 *   reservationContact: '',
 *   bookingUrl: '',
 *   whatsappNumber: '',
 *   googleRating: 4.5,
 *   googleReviewCount: 100,
 *   googleMapsUrl: 'https://maps.google.com/?q=',
 *   seatingTypes: ['indoor'],
 *   tags: ['moroccan', 'halal', 'lunch'],
 *   vibeTags: ['authentic'],
 *   pros: [],
 *   cons: [],
 *   tip: '',
 *   badge: 'local-favorite'
 * }
 * =========================================================================
 */
`;
}

// --------------------------------------------------------------------------
// 2. SLEEP (STAYS) HEADER GENERATOR
// --------------------------------------------------------------------------
function getSleepHeader(cityName: string): string {
  return `/**
 * =========================================================================
 * MOROCCAN MATE — ACCOMMODATIONS (SLEEP) LISTINGS: ${cityName.toUpperCase()}
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/sleep/template.sleep.ts
 *
 * When updating or generating new stay entries with external AI or web search,
 * you MUST strictly adhere to the following allowed array values:
 *
 * ALLOWED OPTIONS BIBLE:
 * - type:             'riad' | 'dar' | 'hotel' | 'kasbah' | 'desert-camp' | 'guesthouse' | 'hostel' | 'resort' | 'apartment' | 'villa' | 'lodge'
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - locationFeel:     'medina-heart' | 'ville-nouvelle' | 'countryside'
 * - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors'
 * - safetyLevel:      1 | 2 | 3 | 4 | 5
 * - paymentMethods:   'cash' | 'credit_card' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay' | 'bank_transfer'
 * - amenities:        'pool' | 'breakfast' | 'ac' | 'heating' | 'wifi' | 'rooftop' | 'ensuite' | 'restaurant' | 'bar' | 'gym' | 'elevator' | 'laundry' | 'room-service' | 'pet-friendly'
 * - roomFeatures:     'soundproof' | 'workspace' | 'balcony' | 'fireplace' | 'courtyard-view' | 'mountain-view' | 'sea-view' | 'patio-access'
 * - languagesSpoken:  'Arabic' | 'French' | 'English' | 'Spanish' | 'German' | 'Italian' | 'Berber / Tamazight'
 * - archetypeAffinity:'first-timer' | 'culture' | 'adventure' | 'relaxed' | 'foodie' | 'budget' | 'luxury'
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW ENTRIES:
 * {
 *   id: 'stay-[city]-[slug]',
 *   city: '${cityName.toLowerCase()}',
 *   name: '',
 *   neighborhood: 'Medina',
 *   description: '',
 *   price: 850,
 *   lifestyle: 'balanced',
 *   type: 'riad',
 *   locationFeel: 'medina-heart',
 *   safetyLevel: 5,
 *   groupTypes: ['solo', 'couple', 'friends'],
 *   hasPool: false,
 *   hasBreakfast: true,
 *   hasAC: true,
 *   hasHeating: true,
 *   hasRooftop: true,
 *   hasEnsuite: true,
 *   hasRestaurant: false,
 *   hasBar: false,
 *   hasGym: false,
 *   hasElevator: false,
 *   hasLaundryService: true,
 *   hasRoomService: false,
 *   petFriendly: false,
 *   taxesIncluded: true,
 *   freeCancellation: true,
 *   kidsStayFree: false,
 *   nearMedina: true,
 *   nearBeach: false,
 *   nearMosque: true,
 *   isHiddenGem: false,
 *   images: [],
 *   tip: '',
 *   archetypeAffinity: ['first-timer', 'culture'],
 *   vibeTags: ['historic', 'intimate', 'tranquil'],
 *   tags: ['riad', 'medina', 'breakfast', 'rooftop', 'ac', 'wifi'],
 *   locationSummary: 'Medina',
 *   googleMapsUrl: 'https://maps.google.com/?q=',
 *   contactWhatsApp: '',
 *   bookingUrl: '',
 *   paymentMethods: ['credit_card', 'cash'],
 *   languagesSpoken: ['Arabic', 'French', 'English'],
 *   logistics: {
 *     checkIn: '14:00',
 *     checkOut: '11:00',
 *     luggageStorage: 'Available free of charge',
 *     parking: 'Public parking available nearby',
 *     airportTransfer: 'Available upon request',
 *     contact: ''
 *   },
 *   roomFeatures: ['courtyard-view'],
 *   roomTypes: [{ name: 'Standard Double Room', view: 'Courtyard view', price: 850, beds: '1 Double bed', size: '20 sqm', available: true }],
 *   coordinates: { lat: 31.6295, lng: -7.9811 },
 *   googleRating: 4.7,
 *   googleReviewCount: 200
 * }
 * =========================================================================
 */
`;
}

// --------------------------------------------------------------------------
// 3. THINGS TO DO HEADER GENERATOR
// --------------------------------------------------------------------------
function getThingsHeader(cityName: string): string {
  return `/**
 * =========================================================================
 * MOROCCAN MATE — THINGS TO DO LISTINGS: ${cityName.toUpperCase()}
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/things/template.things.ts
 *
 * When updating or generating new activity entries with external AI or web search,
 * you MUST strictly adhere to the following allowed array values:
 *
 * ALLOWED OPTIONS BIBLE:
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors'
 * - crowdLevel:       'quiet' | 'moderate' | 'bustling'
 * - energyLevel:      'easy' | 'moderate' | 'high'
 * - transportMode:    'walk' | 'taxi' | 'bus' | 'car' | '4x4'
 * - safetyLevel:      1 | 2 | 3 | 4 | 5
 * - fitnessLevel:     'relaxed' | 'moderate' | 'active' | 'intense'
 * - archetypeAffinity:'first-timer' | 'culture' | 'adventure' | 'relaxed' | 'foodie' | 'budget' | 'luxury'
 * - vibeTags:         'artistic' | 'botanical' | 'iconic' | 'vibrant' | 'historic' | 'panoramic' | 'serene' | 'authentic' | 'spiritual'
 * - standardTags:     'cultural-tour' | 'monument' | 'museum' | 'garden' | 'nature' | 'photo-spot' | 'instagrammable' | 'hammam' | 'wellness' | 'cooking-class' | 'food-tour' | 'medina-walk' | 'desert-trip' | 'camel-ride' | 'hiking' | 'surfing'
 * - badge:            'popular' | 'must-visit' | 'hidden-gem' | 'local-favorite'
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW ENTRIES:
 * {
 *   id: 'things-[city]-[slug]',
 *   city: '${cityName.toLowerCase()}',
 *   name: '',
 *   neighborhood: 'Medina',
 *   description: '',
 *   price: 50,
 *   lifestyle: ['balanced'],
 *   groupTypes: ['solo', 'couple', 'family', 'friends'],
 *   crowdLevel: 'moderate',
 *   durationMinutes: 90,
 *   hasEnglishGuide: true,
 *   hasFrenchGuide: true,
 *   images: [],
 *   googleRating: 4.6,
 *   reviewCount: 1000,
 *   address: '',
 *   coordinates: { lat: 31.6295, lng: -7.9811 },
 *   googleMapsUrl: 'https://maps.google.com/?q=',
 *   safetyLevel: 5,
 *   energyLevel: 'moderate',
 *   transportMode: 'walk',
 *   isKidFriendly: true,
 *   isFemaleFriendly: true,
 *   isWheelchairAccessible: false,
 *   isPhotographyFriendly: true,
 *   hasPrivateOption: false,
 *   hasSunsetView: false,
 *   hasWiFi: false,
 *   nearMedina: true,
 *   goodForRain: false,
 *   bookingRequired: false,
 *   walkInOkay: true,
 *   hasIndoorRest: false,
 *   hasAC: false,
 *   nearBeach: false,
 *   hasLocalGuide: false,
 *   tags: ['cultural-tour', 'monument', 'historic', 'photo-spot'],
 *   archetypeAffinity: ['first-timer', 'culture'],
 *   vibeTags: ['historic', 'iconic', 'authentic'],
 *   isHiddenGem: false,
 *   cluster: 'Medina Cluster',
 *   friction: {
 *     walkingFatigue: 2,
 *     heatExposure: 2,
 *     touristCrowd: 3,
 *     noiseLevel: 2,
 *     scamRisk: 1,
 *     physicalIntensity: 1,
 *     kidSuitable: true
 *   },
 *   tip: '',
 *   badge: 'popular'
 * }
 * =========================================================================
 */
`;
}

// --------------------------------------------------------------------------
// 4. SHOPPING HEADER GENERATOR
// --------------------------------------------------------------------------
function getShopHeader(cityName: string): string {
  return `/**
 * =========================================================================
 * MOROCCAN MATE — SHOPPING & ARTISANS LISTINGS: ${cityName.toUpperCase()}
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
 *   city: '${cityName.toLowerCase()}',
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
`;
}

// --------------------------------------------------------------------------
// PROCESS CATEGORY FOLDERS
// --------------------------------------------------------------------------
function processCategory(catName: 'eat' | 'sleep' | 'things' | 'shop', getHeader: (city: string) => string) {
  const dir = path.join(ROOT_DIR, 'src', 'listings', catName);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter(f => f.endsWith(`.${catName}.ts`));
  let updatedCount = 0;

  for (const f of files) {
    if (f.startsWith('template.')) continue;
    const filePath = path.join(dir, f);
    let content = fs.readFileSync(filePath, 'utf-8');

    const cityName = f.replace(`.${catName}.ts`, '');
    const masterHeader = getHeader(cityName);

    // If file already has the Master Template header, skip or update it
    if (content.includes('MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE')) {
      continue;
    }

    // Strip any old top-of-file comments if present before import
    const importIdx = content.indexOf('import ');
    if (importIdx !== -1) {
      content = masterHeader + content.slice(importIdx);
    } else {
      content = masterHeader + content;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    updatedCount++;
  }

  console.log(`[OK] Category "${catName}": updated ${updatedCount} city files with Master Bible Header.`);
}

console.log('Standardizing Master Template Headers across all city listing files...');
processCategory('eat', getEatHeader);
processCategory('sleep', getSleepHeader);
processCategory('things', getThingsHeader);
processCategory('shop', getShopHeader);
console.log('Done!');
