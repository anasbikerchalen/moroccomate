/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: ESSAOUIRA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-essaouira-1' or 'eat-essaouira-restaurant')
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
 *   id: 'e-essaouira-[id]',
 *   city: 'essaouira',
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

export const essaouiraEat: EatListing[] = [
  {
    id: "e-essaouira-1",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Fine Seafood"],
      foodStyles: ["Seafood", "Moroccan", "French"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "sunset",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Table by Madada",
      neighborhood: "Médina Ancienne",
      description: "An exceptional fine-dining restaurant housed under magnificent historic stone arches near the port. Renowned for its refined Moroccan seafood gastronomy, including lobster couscous and spider crab gratin.",
      tip: "Be sure to reserve days in advance. The spider crab gratin and sea bass in salt crust are magnificent culinary showpieces.",
      badge: "splurge",
      bestDishes: [
        "Spider Crab Gratin",
        "Sea Bass in Salt Crust",
        "Lobster Couscous"
      ],
      googleRating: 4.6,
      googleReviewCount: 640,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 580,
      theforkRating: 4.5,
      theforkReviewCount: 120,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 620,
      openTime: "19:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Table+by+Madada+Essaouira",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524472106",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 19:30 for candlelit arches",
      averageWaitMinutes: 0
    }
  },

  {
    id: "e-essaouira-2",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["Sunset Views", "Scenic Views", "Romantic Sunset"],
      foodStyles: ["Moroccan", "Mediterranean", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
        "live-music",
        "medina",
        "pastilla",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Salut Maroc Rooftop",
      neighborhood: "Médina Ancienne",
      description: "A vibrant, extraordinarily colorful boutique hotel rooftop overlooking the Atlantic and historic ramparts. Serves creative Moroccan fusion dishes, seafood tagines, and custom mocktails with sunset live music.",
      tip: "Ideal for sunset drinks. They often have a live DJ or acoustic musicians playing while the sun dips below the ramparts.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Pastilla",
        "Slow-Cooked Lamb Tagine",
        "Octopus Carpaccio"
      ],
      googleRating: 3.9,
      googleReviewCount: 1904,
      tripadvisorRating: 3.6,
      tripadvisorReviewCount: 274,
      theforkRating: 4,
      theforkReviewCount: 95,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 1850,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Salut+Maroc+Essaouira",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524475512",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-3",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Modern Fusion Dining",
        "Sunset Views",
        "Live Music Terrace"
      ],
      foodStyles: ["Moroccan", "Mediterranean", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "live-music",
        "medina",
        "rooftop",
        "sunset",
        "tagine",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mega Loft",
      neighborhood: "Médina Ancienne",
      description: "An eclectic, multi-level restaurant and music lounge decorated with retro Moroccan furniture and pop-art. Offers a spectacular rooftop and a menu full of inventive fusion tagines, fish burgers, and live Gnawa sets.",
      tip: "Make sure to visit on evenings when live Gnawa fusion musicians play in the central atrium.",
      badge: "local-favorite",
      bestDishes: [
        "Fig and Goat Cheese Tagine",
        "Essaouira Fish Burger",
        "Spiced Pumpkin Hummus"
      ],
      googleRating: 4.1,
      googleReviewCount: 1437,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 474,
      theforkRating: 4.2,
      theforkReviewCount: 110,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1400,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Mega+Loft+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-essaouira-4",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["Mediterranean", "Italian", "Seafood"],
      cuisineTags: ["international", "seafood", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: false,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "medina",
        "sunset",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Baba",
      neighborhood: "Médina Ancienne",
      description: "A beautifully designed Mediterranean restaurant and tapas lounge inside a 19th-century Medina mansion. Features retro velvet seats, amazing signature cocktails, and vibrant contemporary Mediterranean dishes.",
      tip: "Try their signature Argan Sour cocktail alongside their slow-roasted octopus or fresh truffle gnocchi.",
      badge: "local-favorite",
      bestDishes: ["Octopus and Orzo", "Truffle Ravioli", "Beef Carpaccio"],
      googleRating: 4.7,
      googleReviewCount: 1719,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 459,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1650,
      openTime: "18:00",
      closeTime: "01:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Baba+Essaouira",
      reservationMethod: ["online", "phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-5",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["Waterfront Dining", "Beachfront Grill", "Casual Dining"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "juice",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ocean Vagabond",
      neighborhood: "Essaouira Beach",
      description: "An incredibly popular beachfront restaurant, surf club, and café tucked under palm trees on the main bay. Famous for its relaxed, sandy-toes atmosphere, ocean views, wood-fired pizzas, and salads.",
      tip: "The best spot on the beach to watch kitesurfers over lunch. Very child-friendly with dromedaries passing by.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-Fired Pizza Regina",
        "Crispy Calamari",
        "Fresh fruit smoothies"
      ],
      googleRating: 4.4,
      googleReviewCount: 1704,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 1156,
      theforkRating: 4.3,
      theforkReviewCount: 220,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1680,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Ocean+Vagabond+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for breezy beach vibes",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-essaouira-6",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Waterfront Dining", "Fine Seafood"],
      foodStyles: ["Seafood", "French", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 28,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
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
        "tagine",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Chalet de la Plage",
      neighborhood: "Essaouira Beach",
      description: "A historic beachfront restaurant operating since the 1960s. Known for its old-world marine decor, extensive terrace overlooking the ocean, fresh local oysters, and classic French-Moroccan seafood platters.",
      tip: "Order the fresh oysters from nearby Oualidia and the grilled sea bream with butter sauce. Ideal for sunset dining.",
      badge: "splurge",
      bestDishes: [
        "Oualidia Oysters",
        "Sardine Tagine",
        "Grilled Lobster Platter"
      ],
      googleRating: 4.1,
      googleReviewCount: 1050,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 580,
      theforkRating: 4.1,
      theforkReviewCount: 140,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1020,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Chalet+de+la+Plage+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-7",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fishing Harbor Dining", "Casual Dining", "Scenic Views"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "medina", "terrace"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Sam",
      neighborhood: "Essaouira Port",
      description: "A local legend positioned at the very end of the fishing port. Built like a rustic, cozy wooden ship, it serves exceptionally fresh daily catches directly overlooking the harbor and Mogador Island.",
      tip: "Walk right to the end of the harbor past the shipyard to find this gem. The service is friendly, and the fish is as fresh as it gets.",
      badge: "local-favorite",
      bestDishes: ["Grilled Sardines", "Fish Soup", "Mixed Seafood Platter"],
      googleRating: 4.1,
      googleReviewCount: 711,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 390,
      theforkRating: 3.9,
      theforkReviewCount: 65,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 680,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Sam+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-8",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      halalStatus: "halal-certified",
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
        "couscous",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "tagine"
      ],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Fatima",
      neighborhood: "Médina Ancienne",
      description: "A warm, family-run traditional diner hidden in the medina alleyways. Fatima prepares incredible home-cooked beef and plum tagines and incredible Friday couscous with motherly care.",
      tip: "Fatima prepares everything fresh. Ask for her legendary tagine of local sea fish or the beef pastilla.",
      badge: "hidden-gem",
      bestDishes: ["Lemon Chicken Tagine", "Beef Pastilla", "Friday Couscous"],
      googleRating: 4.7,
      googleReviewCount: 220,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 95,
      theforkRating: 4.5,
      theforkReviewCount: 25,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 210,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Fatima+Essaouira",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-essaouira-9",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fine Seafood", "Romantic Sunset", "Sunset Views"],
      foodStyles: ["Seafood", "Mediterranean", "French"],
      cuisineTags: ["seafood", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 21,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "medina",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Il Mare",
      neighborhood: "Médina Ancienne",
      description: "An iconic multi-level bar and dining venue facing the ancient ramparts of Essaouira. Features panoramic views of the stormy Atlantic waves, specializing in fresh Oualidia oysters and fish.",
      tip: "Climb to the top terrace for sunset. Sip on local wine or mint tea with raw oysters while listening to live acoustic sets.",
      badge: "local-favorite",
      bestDishes: [
        "Raw Oysters with Lemon",
        "Grilled Sea Bream Filet",
        "Seafood Pasta"
      ],
      googleRating: 4.1,
      googleReviewCount: 780,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 340,
      theforkRating: 4,
      theforkReviewCount: 80,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 750,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Il+Mare+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-essaouira-10",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family", "couple"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: [
        "Fishing Harbor Dining",
        "Casual Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Seafood"],
      cuisineTags: ["seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["beachfront"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "street-food"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Port Fish Grills (Stall #11)",
      neighborhood: "Essaouira Port",
      description: "The quintessential Essaouira street food experience. Sit at rough-and-ready outdoor benches right at the harbor entrance to select your fresh raw fish and have it grilled immediately on open coals.",
      tip: "Negotiate your plate price before sitting down. Always ask to include local sardines, giant prawns, and squid in your mix.",
      badge: "local",
      bestDishes: ["Coal-Grilled Sardines", "Grilled Prawns", "Squid Skewers"],
      googleRating: 4.1,
      googleReviewCount: 1500,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 520,
      theforkRating: 4,
      theforkReviewCount: 50,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1450,
      openTime: "11:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Port+Grills+Essaouira",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for lively dockside atmosphere",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-essaouira-11",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Modern Fusion Dining"],
      foodStyles: ["French", "Mediterranean", "Moroccan"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 26,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
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
        "cafe-pastry",
        "dinner",
        "fine",
        "live-music",
        "medina",
        "riad",
        "sunset",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Caravane Café",
      neighborhood: "Médina Ancienne",
      description: "An extraordinary fusion of art gallery, cocktail lounge, and dining room set in a beautiful riad. Hand-curated by artist Didier Spindler, offering live fire dancers, Gnawa shows, and world-class French-Moroccan cuisine.",
      tip: "Book ahead for a table in the courtyard to enjoy the magic tricks, fire dancers, and live Gnawa fusion musicians who move between dining salons.",
      badge: "local-favorite",
      bestDishes: [
        "Caramelized Lamb Shank",
        "Garlic Honey Prawns",
        "Gratinated Crab Shell"
      ],
      googleRating: 4.5,
      googleReviewCount: 1100,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 620,
      theforkRating: 4.5,
      theforkReviewCount: 130,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1050,
      openTime: "18:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Caravane+Cafe+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "+212808655441",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-12",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining"],
      foodStyles: ["Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "pastilla",
        "quiet",
        "tagine",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Licorne",
      neighborhood: "Médina Ancienne",
      description: "An upscale, atmospheric traditional restaurant tucked under majestic high stone arches in the old medina. Renowned for its superb Moroccan royal couscous, savory fish pastillas, and quiet sophistication.",
      tip: "The lamb tagine with almonds and pears is a remarkable dish that slow-cooks for hours.",
      badge: "splurge",
      bestDishes: [
        "Royal Couscous",
        "Fish Pastilla",
        "Lamb Tagine with Pears & Almonds"
      ],
      googleRating: 4.7,
      googleReviewCount: 321,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 635,
      theforkRating: 4.4,
      theforkReviewCount: 75,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Licorne+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-essaouira-13",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night", "flexible"],
      experienceTypes: ["Sunset Views", "Scenic Views", "Casual Dining"],
      foodStyles: ["Mediterranean", "Moroccan", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional", "seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["rooftop", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "late-night",
        "medina",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Taros",
      neighborhood: "Place Moulay Hassan",
      description: "A massive, multi-level open rooftop terrace right on the central Place Moulay Hassan. Highly popular for late afternoon drinks, harbor views, simple burgers, and standard Moroccan tagines.",
      tip: "The food is basic, but the rooftop cocktail terrace is unmatched for location. Grab a drink and enjoy the sunset wind over the port.",
      badge: "local-favorite",
      bestDishes: [
        "Essaouira Fish Burger",
        "Fritto Misto (Fried Fish Mix)",
        "Classic Tagine"
      ],
      googleRating: 3.9,
      googleReviewCount: 2200,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 1150,
      theforkRating: 3.9,
      theforkReviewCount: 180,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 2100,
      openTime: "11:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Taros+Essaouira",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-14",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Italian Dining",
        "Family Pizza Night",
        "Romantic Sunset"
      ],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
      isHalal: false,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "medina", "sunset", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Trattoria Silvestro",
      neighborhood: "Médina Ancienne",
      description: "A long-running, exceptionally authentic Italian trattoria in the heart of the Medina. Known for offering wood-fired pizzas, house-made ravioli, and fresh local seafood-based pastas.",
      tip: "If you need a break from traditional tagines, this is the best spot in the city for a perfect wood-fired pizza or seafood spaghetti.",
      badge: "local-favorite",
      bestDishes: ["Seafood Linguine", "Pizza Diavola", "House Tiramisu"],
      googleRating: 4.3,
      googleReviewCount: 561,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 602,
      theforkRating: 4.2,
      theforkReviewCount: 85,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 540,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Trattoria+Silvestro+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-15",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Quick Bites"],
      foodStyles: ["Mediterranean", "Fast Food"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7.5,
      isHalal: true,
      halalStatus: "halal-certified",
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Munchies",
      neighborhood: "Médina Ancienne",
      description: "A popular, modern hole-in-the-wall spot in the Medina offering top-notch fast casual street food. Celebrated for high-quality smash burgers, crispy chicken tenders, and gourmet wraps.",
      tip: "Perfect for a quick, delicious Western-style meal. Their homemade fries and spicy garlic sauce are brilliant.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Smash Burger",
        "Crispy Chicken Wrap",
        "Truffle Fries"
      ],
      googleRating: 4.6,
      googleReviewCount: 380,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 110,
      theforkRating: 4.4,
      theforkReviewCount: 35,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 360,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Munchies+Essaouira",
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
    id: "e-essaouira-16",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["Cafe", "Casual Dining", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Healthy"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
      halalStatus: "halal-certified",
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
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "pastilla",
        "tagine",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chaabi Chic",
      neighborhood: "Médina Ancienne",
      description: "A bright, charming little café inside the Medina offering a lovely aesthetic twist on traditional Moroccan fast casual. Focuses on healthy organic salads, light tagines, and custom fruit juices.",
      tip: "Sit by the window to watch the busy medina shoppers below. Excellent vegetarian couscous and ginger juices.",
      badge: "local-favorite",
      bestDishes: [
        "Vegetarian Tagine",
        "Chaabi Orange Juice",
        "Chicken pastilla"
      ],
      googleRating: 4.5,
      googleReviewCount: 510,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 190,
      theforkRating: 4.3,
      theforkReviewCount: 45,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 490,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Chaabi+Chic+Essaouira",
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
    id: "e-essaouira-17",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Cafe", "Casual Dining", "Traditional Dining"],
      foodStyles: ["Healthy", "Moroccan", "Mediterranean"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "halal-certified",
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
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "pastry",
        "quiet",
        "tagine",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Corail Vegan Food",
      neighborhood: "Médina Ancienne",
      description: "The absolute pioneer of purely vegan and vegetarian dining in Essaouira. Offers beautifully plated plant-based tagines, fresh-pressed organic power juices, and tasty raw vegan pastries.",
      tip: "An exceptionally friendly spot run by a dedicated local couple. The vegan almond cheese tagine is a unique culinary triumph.",
      badge: "hidden-gem",
      bestDishes: [
        "Vegan Cheese Tagine",
        "Organic Energy Juice",
        "Gluten-Free Chocolate Cake"
      ],
      googleRating: 4.7,
      googleReviewCount: 119,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 298,
      theforkRating: 4.7,
      theforkReviewCount: 40,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 115,
      openTime: "12:00",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Corail+Vegan+Food+Essaouira",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-essaouira-18",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Modern Fusion Dining"],
      foodStyles: ["Seafood", "French", "Moroccan"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      tags: ["budget", "dinner", "dry", "fine", "medina", "sunset", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Loft",
      neighborhood: "Médina Ancienne",
      description: "A modern, stylishly intimate restaurant featuring gorgeous warm wood paneled walls and eclectic vintage details. Specializes in incredibly refined French-Moroccan seafood and meats.",
      tip: "An intimate room, so booking is highly advised. The fish filet with saffron sauce is outstanding.",
      badge: "local-favorite",
      bestDishes: [
        "Saffron Seafood Filet",
        "Gourmet Lamb Shoulder",
        "Warm Apple Tarte Tatin"
      ],
      googleRating: 4.4,
      googleReviewCount: 850,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 380,
      theforkRating: 4.3,
      theforkReviewCount: 70,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 810,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=The+Loft+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-essaouira-19",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Traditional Dining"],
      foodStyles: ["French", "Moroccan", "Mediterranean"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      tags: ["budget", "dinner", "dry", "fine", "medina", "quiet", "sunset"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Clef de Voûte",
      neighborhood: "Médina Ancienne",
      description: "A stunningly cozy hidden gem with exposed stone walls in a quiet medina side-alley. Offers exceptionally creative French-Moroccan fusion dishes, fresh fish, and warm hospitality.",
      tip: "Their chocolate fondant is praised by travelers as the finest in Morocco. A beautiful, romantic escape.",
      badge: "hidden-gem",
      bestDishes: [
        "Grilled John Dory",
        "Slow-cooked Plum Lamb",
        "Signature Chocolate Fondant"
      ],
      googleRating: 4.7,
      googleReviewCount: 892,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 1221,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 890,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Clef+de+Voute+Essaouira",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-essaouira-20",
    city: "essaouira",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple", "family"],
      mealTypes: ["breakfast", "lunch", "brunch", "afternoon-tea"],
      experienceTypes: ["Cafe", "Casual Dining", "Beachfront Grill"],
      foodStyles: ["Healthy", "Mediterranean", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "One Love Cafe",
      neighborhood: "Essaouira Dunes",
      description: "A colorful surf-inspired café with a relaxed Rastafarian vibe located near the beach. Offers delicious organic acai bowls, vegan breakfast selections, and great smoothies for active travelers.",
      tip: "The ideal chill-out spot after camel riding or quad biking along the dunes. Great positive vibes.",
      badge: "local-favorite",
      bestDishes: [
        "Acai Berry Bowl",
        "Surfers Vegan Breakfast",
        "Avocado Shake"
      ],
      googleRating: 4.5,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 180,
      theforkRating: 4.4,
      theforkReviewCount: 30,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 290,
      openTime: "08:30",
      closeTime: "20:00",
      googleMapsUrl: "https://maps.google.com/?q=One+Love+Cafe+Essaouira",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  }
];
