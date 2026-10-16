/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: MEKNES
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-meknes-1' or 'eat-meknes-restaurant')
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
 * - isTemporarilyHidden: boolean (true when temporarily closed or unverified/wrong-city)
 * - ramadanFriendly:    'serves-lunch' | 'special-ftour' | 'closed'
 * - crowdLevel:         'quiet' | 'balanced' | 'bustling'
 * - badge:              'local' | 'splurge' | 'hidden-gem' | 'local-favorite' | 'tourist-trap'
 * - archetypeAffinity:  'luxury' | 'first-timer' | 'culture' | 'nomad' | 'adventure' | 'budget'
 *
 * 3-SECTION COPY-PASTE TEMPLATE (QUIZ, FILTER, UI):
 * {
 *   id: 'e-meknes-[id]',
 *   city: 'meknes',
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

import type { EatListing } from '../types';

export const meknesEat: EatListing[] = [
  {
    id: "e-meknes-1",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Cozy casual family-run Moroccan eatery",
        "Casual Dining",
        "Traditional Dining"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "couscous", "dinner", "dry", "medina", "tagine"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Aisha",
      neighborhood: "Médina Ancienne",
      description: "A legendary, cupboard-sized diner nestled deep in the souks of the Medina. Extremely famous for its budget-friendly, authentic Moroccan cooking prepared fresh by Aisha and her family.",
      tip: "Located at Koubat Souk Kababine (Derb Lachkar N°4). It is a tiny, rustic room with few tables, so come early for lunch or be prepared to wait a few minutes.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Rfissa",
        "Vegetable Couscous",
        "Beef Tagine with Prunes",
        "Homemade Harira"
      ],
      googleRating: 4.6,
      googleReviewCount: 2137,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 1200,
      theforkRating: 4.6,
      theforkReviewCount: 150,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 3350,
      openTime: "10:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Aisha+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212535530925",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-2",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Sunset Views"],
      foodStyles: ["Moroccan", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "palace",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Collier de la Colombe",
      neighborhood: "Médina Ancienne",
      description: "Located in an elegant, palace-style building with a panoramic rooftop terrace overlooking the ancient Medina and valley. Serves refined traditional Moroccan recipes alongside selected international dishes.",
      tip: "Ask to sit on the panoramic upper terrace before sunset for sweeping valley views while tasting local Meknes wines.",
      badge: "local-favorite",
      bestDishes: [
        "Lemon Chicken Tagine",
        "Royal Couscous",
        "Moroccan Pastry Assortment"
      ],
      googleRating: 4.3,
      googleReviewCount: 464,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 212,
      theforkRating: 4.1,
      theforkReviewCount: 100,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 464,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Collier+de+la+Colombe+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535555041",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-3",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["French", "Mediterranean", "European"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 26,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "mountain",
        "sunset",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Relais de Paris",
      neighborhood: "Ville Nouvelle",
      description: "A French bistro in the modern Ville Nouvelle. Features a classic brasserie menu, a relaxing romantic atmosphere, views of Mt. Zerhoun, and a garden terrace.",
      tip: "The garden tables are perfect for couples. They offer a fixed-price menu alongside an extensive Moroccan and French wine selection.",
      badge: "splurge",
      bestDishes: [
        "Steak Frites with Signature Sauce",
        "Braised Lamb with Rosemary",
        "Chocolate Profiteroles"
      ],
      googleRating: 3.8,
      googleReviewCount: 216,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 90,
      theforkRating: 3.9,
      theforkReviewCount: 50,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 216,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Relais+de+Paris+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212619210210",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-4",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "quiet",
        "riad",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Sabre Wa Tourate",
      neighborhood: "Médina Ancienne",
      description: "Housed inside a restored medina riad at 2 Derb Khoah. Features traditional zellige mosaic tilework and vibrant banquette seating, serving slow-cooked homestyle Moroccan tagines and pastillas.",
      tip: "A peaceful lunch or dinner spot to escape the noisy medina alleys. Calling ahead is recommended as dishes are prepared to order.",
      badge: "hidden-gem",
      bestDishes: [
        "Chicken & Almond Pastilla",
        "Prune & Almond Lamb Tagine",
        "Assorted Moroccan Salads"
      ],
      googleRating: 4.4,
      googleReviewCount: 140,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 85,
      theforkRating: 4.4,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 140,
      openTime: "12:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Sabre+Wa+Tourate+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212664019914",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-5",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "quiet",
        "riad",
        "tagine",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Omnia",
      neighborhood: "Médina Ancienne",
      description: "A family-run riad dining room down an alley off Rue Rouamzine. Known for its genuine Moroccan hospitality and homestyle slow-cooked meat tagines, pastillas, and couscous.",
      tip: "Located at 8 Rue Aïn el-Fouki. Guests can dine in the cozy salon or up on the rooftop terrace for a private dining feel.",
      badge: "hidden-gem",
      bestDishes: [
        "Chicken Pastilla",
        "Beef Tagine with Almonds",
        "Homemade Harira Soup"
      ],
      googleRating: 4.2,
      googleReviewCount: 320,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 185,
      theforkRating: 4.2,
      theforkReviewCount: 60,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 320,
      openTime: "12:00",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Omnia+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535533938",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-6",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Traditional Dining",
        "Romantic Sunset",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 32,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "quiet",
        "riad",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Palais Didi",
      neighborhood: "Médina Ancienne",
      description: "A 17th-century palace riad next to the Mausoleum of Moulay Ismaïl. Offers traditional Moroccan dining set around an Andalusian courtyard patio with a central pool and historic stucco arches.",
      tip: "Located at 7 Dar Lakbira. Recommended for romantic ambiance beside the historic courtyard pool.",
      badge: "splurge",
      bestDishes: [
        "Royal Lamb Couscous",
        "Pigeon Pastilla with Almonds",
        "Tagine of Veal with Prunes"
      ],
      googleRating: 3.9,
      googleReviewCount: 97,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 78,
      theforkRating: 3.9,
      theforkReviewCount: 40,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 97,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Palais+Didi+Meknes",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212535558590",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-7",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Sunset Views", "People Watching"],
      foodStyles: ["Moroccan", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "sunset",
        "tagine",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pavillon des Idrissides",
      neighborhood: "El-Hedime",
      description: "Features a large second-floor panoramic terrace directly overlooking Place El-Hedime and the grand Bab Mansour. Ideal for mint tea, coffee, and light Moroccan meals while watching square performers.",
      tip: "The upper terrace offers arguably the best photography vantage point over El-Hedime Square at dusk. Service can be relaxed, so visit for drinks and the view.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Mint Tea with Pastries",
        "Chicken Brochettes",
        "Kefta Tagine"
      ],
      googleRating: 3.6,
      googleReviewCount: 380,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 120,
      theforkRating: 3.5,
      theforkReviewCount: 30,
      restaurantguruRating: 3.6,
      restaurantguruReviewCount: 380,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Pavillon+des+Idrissides+Meknes",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-8",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: [
        "family",
        "couple",
        "seniors",
        "large-groups",
        "business-friendly"
      ],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "fine",
        "palace",
        "pastilla",
        "tagine",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Palais Terrab",
      neighborhood: "Ville Nouvelle",
      description: "An opulent palace restaurant in the modern Ville Nouvelle decorated with ornate zellige, carved stucco, and cedarwood. Specializes in classic Moroccan royal banquets, tagines, and local wines.",
      tip: "Located at 18 Avenue Zerktouni. Licensed to serve local Guerrouane wine alongside hearty traditional set-menu courses.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Saffron Lamb Couscous",
        "Sweet & Savory Pastilla",
        "Slow-Cooked Beef Tanjia"
      ],
      googleRating: 4.1,
      googleReviewCount: 934,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 220,
      theforkRating: 4.1,
      theforkReviewCount: 80,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 934,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Palais+Terrab+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535526100",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-9",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "tagine",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Bab Mansour",
      neighborhood: "Médina Ancienne",
      description: "A traditional, no-frills budget eatery located at 16 Rue Dar Smen beside Place El-Hedime. Serves reliable Moroccan tagines, harira soup, and couscous.",
      tip: "Straightforward street diner facing the medina entrance. Great for a quick, filling lunch after visiting Bab Mansour.",
      badge: "local",
      bestDishes: [
        "Kefta Tagine with Egg",
        "Chicken Couscous",
        "Harira Soup with Dates"
      ],
      googleRating: 3.9,
      googleReviewCount: 240,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 110,
      theforkRating: 3.8,
      theforkReviewCount: 30,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 240,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bab+Mansour+Meknes",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-10",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Romantic Sunset",
        "Modern Fusion Dining",
        "Upscale Romantic Dining"
      ],
      foodStyles: ["French", "Moroccan", "European"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 28,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "medina",
        "sunset",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Bistrot Art & Le Wine Bar",
      neighborhood: "Ville Nouvelle / El Mariniyine",
      description: "Set inside the historic Hotel Transatlantique, this bistro and wine bar offers French-Moroccan fusion cuisine paired with a panoramic view of the ancient Medina across the valley.",
      tip: "Book a window table in advance to catch the evening lights shimmering across the old medina walls while sampling local wines.",
      badge: "splurge",
      bestDishes: [
        "Duck Breast with Caramelized Fruit",
        "Seafood Gratin",
        "Curated Moroccan Wine Flight"
      ],
      googleRating: 4.3,
      googleReviewCount: 110,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 87,
      theforkRating: 4.3,
      theforkReviewCount: 35,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 110,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Bistrot+Art+and+Wine+Bar+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212661799627",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-11",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Romantic Sunset",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "riad",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Riad Ritaj Restaurant",
      neighborhood: "Médina Ancienne",
      description: "Set inside a traditional riad patio at 13 Sidi Amar Bouaouada, right next to Place El-Hedime. Features soaring ceilings and zellige craftsmanship, serving traditional Meknassi tagines, royal pastillas, and orange salads.",
      tip: "Conveniently located 2 minutes on foot from Place El-Hedime. The courtyard dining room offers an intimate escape from square crowds.",
      badge: "local-favorite",
      bestDishes: [
        "Sweet Plum Lamb Tagine",
        "Almond Pigeon Pastilla",
        "Cinnamon Orange Salad"
      ],
      googleRating: 4.3,
      googleReviewCount: 200,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 150,
      theforkRating: 4.3,
      theforkReviewCount: 50,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 200,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Riad+Ritaj+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535534808",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-12",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["Traditional Dining", "Casual Dining", "Fountain courtyard"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "riad",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Riad Bahia Restaurant",
      neighborhood: "Médina Ancienne",
      description: "Positioned between El-Hedim Square and the Bou Inania Madrasa. Serves traditional Meknassi recipes in a tranquil, flower-filled riad courtyard with personal hospitality.",
      tip: "Located at Derb Benabbou. The riad also hosts traditional Moroccan cooking classes if booked in advance.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Cooked Beef Tanjia",
        "Royal Couscous",
        "Traditional Moroccan Harira"
      ],
      googleRating: 4.5,
      googleReviewCount: 145,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 367,
      theforkRating: 4.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 367,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Riad+Bahia+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535554541",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-13",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Family Friendly"],
      foodStyles: ["Italian", "Cafe", "Bakery"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Venezia Ice",
      neighborhood: "Hamria / Ville Nouvelle",
      description: "A popular modern cafe and ice-cream parlor on Avenue Idriss II in Hamria. Well-frequented by local families and youth for artisanal gelato, waffles, crepes, and coffees.",
      tip: "Located at 21 Avenue Idriss II. Great spot for families with children wanting ice cream and cold drinks on hot afternoons.",
      badge: "local",
      bestDishes: [
        "Pistachio & Nougat Gelato",
        "Nutella & Banana Crepe",
        "Italian Espresso"
      ],
      googleRating: 3.8,
      googleReviewCount: 950,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 120,
      theforkRating: 3.7,
      theforkReviewCount: 50,
      restaurantguruRating: 3.3,
      restaurantguruReviewCount: 177,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Venezia+Ice+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212693054152",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-14",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Family Friendly"],
      foodStyles: ["Mediterranean", "Cafe", "Bakery"],
      cuisineTags: ["cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Black Iris",
      neighborhood: "Marjane 2 / El Mansour",
      description: "A trendy, modern cafe on Avenue Mohammed VI in the Marjane 2 / El Mansour district. Popular for its generous continental breakfast platters, dessert waffles, and specialty coffee.",
      tip: "Located along Avenue Mohammed VI in Marjane 2. A favorite local spot for breakfast sets and afternoon coffee meetings.",
      badge: "local-favorite",
      bestDishes: [
        "Black Iris Breakfast Board",
        "Nutella & Strawberry Crepe",
        "Caramel Macchiato"
      ],
      googleRating: 4.1,
      googleReviewCount: 650,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 50,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 250,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Black+Iris+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212535464035",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-15",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Family Friendly"],
      foodStyles: ["Mediterranean", "Italian", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "terrace", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Cube Noir",
      neighborhood: "Marjane",
      description: "A fashionable, modern cafe and brunch space located at N° 37 Première Tranche Marjane. Offers generous breakfast portions, crepes, burgers, and artisanal iced drinks.",
      tip: "Located in the quiet Marjane neighborhood with ample street parking. Ideal for a relaxed brunch.",
      badge: "local-favorite",
      bestDishes: [
        "Cube Noir Special Breakfast",
        "Banana Chocolate Crepe",
        "Iced Mocha Frappé"
      ],
      googleRating: 4,
      googleReviewCount: 902,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 30,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 902,
      openTime: "07:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cube+Noir+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212661231875",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-16",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Family Friendly"],
      foodStyles: ["French", "Fast Food", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "street-food",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L’As D-Lys",
      neighborhood: "Hamria / Ville Nouvelle",
      description: "A cozy modern fast-casual bistro and creperie in Hamria. Celebrated for freshly prepared gourmet burgers, savory buckwheat crepes, tacos, and sweet crepes.",
      tip: "Comfortable casual spot in central Hamria for clean and quick European bistro food.",
      badge: "local-favorite",
      bestDishes: [
        "D-Lys House Burger",
        "Savory Cheese & Turkey Crepe",
        "Healthy Tuna Bowl"
      ],
      googleRating: 4.1,
      googleReviewCount: 363,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 80,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 667,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=L+As+D-Lys+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212535525402",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-17",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Fast Food", "Barbecue"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 2.5,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Bab Lekhmiss",
      neighborhood: "Médina Ancienne",
      description: "A high-traffic local street food and sandwich counter situated right beside the historic Bab El Khemis city gate. Specializes in charcoal-grilled spiced kefta, merguez, and roast chicken sandwiches.",
      tip: "Classic local street eatery. Order a kefta mixed sandwich with cumin, onions, and spicy harissa on freshly baked khobz.",
      badge: "local",
      bestDishes: [
        "Spiced Kefta & French Fries Sandwich",
        "Rotisserie Spiced Chicken",
        "Grilled Merguez Brochettes"
      ],
      googleRating: 4.2,
      googleReviewCount: 280,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 50,
      theforkRating: 4,
      theforkReviewCount: 15,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 280,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Bab+Lekhmiss+Meknes",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-18",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Traditional Breakfast Ritual", "Bakery-Patisserie"],
      foodStyles: ["Bakery", "Patisserie", "Moroccan", "Cafe"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
        "terrace"
      ],
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Maison du Blé",
      neighborhood: "Hamria / Ville Nouvelle",
      description: "An authentic Moroccan bakery, patisserie, and traditional salon de thé on Place Badr Al Kobra. Locals gather daily for warm harcha, msemen, baghrir, and fresh mint tea.",
      tip: "Located at Place Badr Al Kobra. The ideal spot in the new town for an authentic Moroccan breakfast.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Msemen with Honey & Cheese",
        "Warm Semolina Harcha",
        "Moroccan Mint Tea"
      ],
      googleRating: 4.2,
      googleReviewCount: 550,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 90,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 299,
      openTime: "06:30",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Maison+du+Ble+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212535512102",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-19",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Sunset Views", "Family Friendly"],
      foodStyles: ["Italian", "Cafe", "Pizza", "Mediterranean"],
      cuisineTags: ["cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "sunset",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Bella Citta",
      neighborhood: "Belle-Vue",
      description: "A modern, panoramic cafe and bistro located in the Belle Vue district. Celebrated for its sweeping views overlooking the ancient Medina walls and valley, alongside garden seating, coffee, and light meals.",
      tip: "Located at Rue 6, Janette Belle Vue. Head out to the outdoor garden terrace for panoramic vistas across the medina skyline.",
      badge: "local",
      bestDishes: [
        "Margherita Pizza",
        "Double Espresso",
        "Moroccan Mint Tea",
        "Breakfast Platter"
      ],
      googleRating: 4.1,
      googleReviewCount: 850,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 110,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1486,
      openTime: "07:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Bella+Citta+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212535403347",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-meknes-20",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Modern Fusion Dining"],
      foodStyles: ["Cafe", "Fast Food", "Italian"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7.5,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "street-food",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Stream",
      neighborhood: "Hamria / Ville Nouvelle",
      description: "An industrial-chic cafe and burger lounge on Rue Allal Ben Abdallah in Hamria. Popular among local youth and digital nomads for its craft burgers, sweet frappes, and reliable Wi-Fi.",
      tip: "Great laptop-friendly workspace with solid Wi-Fi during the morning and afternoon.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Stream Burger",
        "Choco-Fudge Frappuccino",
        "Truffle Mushroom Pasta"
      ],
      googleRating: 4,
      googleReviewCount: 256,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 40,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 256,
      openTime: "07:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Stream+Meknes",
      reservationMethod: ["none"],
      reservationContact: "+212535525402",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-meknes-mcdonalds-hamria",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Casual Dining"],
      foodStyles: ["Burgers", "Fast Food", "American"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["street-food", "late-night", "breakfast", "budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Hamria",
      neighborhood: "Hamria",
      district: "Place de la Gare",
      description: "Prime Hamria location right by the Meknes train station, offering a convenient stop for train travelers, McCafé, and drive-through.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 3800,
      openTime: "07:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Place de la Gare, Hamria, Meknes",
        lat: 33.8965,
        lng: -5.5482
      },
      googleMapsUrl: "https://maps.google.com/?cid=5473829170695382607",
      reservationContact: "not-available",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-meknes-kfc-hamria",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Casual Dining"],
      foodStyles: ["Fried Chicken", "Fast Food", "American"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 60,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["street-food", "budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "KFC Hamria",
      neighborhood: "Hamria",
      district: "Boulevard Allal Ben Abdallah",
      description: "Downtown Hamria restaurant serving crispy fried chicken tenders, buckets, and sandwiches in a modern dining space.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1400,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boulevard Allal Ben Abdallah, Hamria, Meknes",
        lat: 33.8988,
        lng: -5.5452
      },
      googleMapsUrl: "https://maps.google.com/?cid=6584930281706493718",
      reservationContact: "not-available",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-meknes-burger-king-agouray",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Drive-Thru", "Family Friendly"],
      foodStyles: ["Burgers", "Fast Food", "American"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["street-food", "late-night", "budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Burger King Marjane Route d'Agouray",
      neighborhood: "Route d'Agouray",
      district: "Marjane Shopping Complex",
      description: "Drive-through and spacious restaurant at the Marjane Agouray commercial center featuring flame-grilled Whoppers and kids play zone.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1650,
      openTime: "11:00",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Marjane, Route d'Agouray, Meknes",
        lat: 33.8745,
        lng: -5.5582
      },
      googleMapsUrl: "https://maps.google.com/?cid=7695041392817504829",
      reservationContact: "not-available",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-meknes-pizza-hut-hamria",
    city: "meknes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Pizza"],
      foodStyles: ["Pizza", "Italian-American", "Fast Food"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 70,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Hamria",
      neighborhood: "Hamria",
      district: "Place Administrative",
      description: "Well-established Pizza Hut near Place Administrative in Hamria with family booths, pan pizzas, and carryout options.",
      badge: "local-favorite",
      googleRating: 3.7,
      googleReviewCount: 1100,
      openTime: "11:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Place Administrative / Boulevard Mohammed V, Hamria, Meknes",
        lat: 33.8995,
        lng: -5.5475
      },
      googleMapsUrl: "https://maps.google.com/?cid=8706152403928615930",
      reservationContact: "not-available",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  }
];
