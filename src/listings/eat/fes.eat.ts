/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: FES
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-fes-1' or 'eat-fes-restaurant')
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
 *   id: 'e-fes-[id]',
 *   city: 'fes',
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

export const fesEat: EatListing[] = [
  {
    id: "fes-eat-1",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Fine Dining",
        "Traditional Dining",
        "Garden restaurant with live music"
      ],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 30,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "live-music",
        "medina",
        "quiet",
        "riad",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Roumana",
      neighborhood: "Fès El Bali",
      description: "Gourmet Moroccan-Mediterranean fusion dining in a breathtakingly restored riad courtyard led by Chef Younes Idriss.",
      tip: "Reserve several weeks in advance since there are very few courtyard tables.",
      badge: "splurge",
      bestDishes: [
        "Rabbit with Potato Puree",
        "Almond Lemon Cake with Lemon Sorbet",
        "Roasted Beetroot Salad"
      ],
      googleRating: 4.6,
      googleReviewCount: 554,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 390,
      theforkRating: 4.5,
      theforkReviewCount: 80,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 520,
      openTime: "19:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Roumana+Fes",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212535741637",
      website: "https://darroumana.com",
      instagram: "https://instagram.com/darroumana",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 0
    }
  },

  {
    id: "fes-eat-2",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Garden restaurant with live music",
        "Modern Fusion Dining",
        "Casual Dining"
      ],
      foodStyles: ["Moroccan", "Healthy", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["garden", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "live-music",
        "medina",
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
      name: "The Ruined Garden",
      neighborhood: "Fès El Bali",
      description: "Relaxed al fresco dining nestled among romantic crumbling ruins and lush green botanical pathways in the medina.",
      tip: "Order the slow-cooked Lamb Mechoui at least 24 hours prior to your visit.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-cooked Lamb Mechoui",
        "Fassi Fried Sardines",
        "Vegetarian Mezze Platter"
      ],
      googleRating: 4.3,
      googleReviewCount: 2526,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 1850,
      theforkRating: 4.2,
      theforkReviewCount: 581,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 2400,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=The+Ruined+Garden+Fes",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212649191410",
      website: "https://ruinedgarden.com",
      instagram: "https://instagram.com/riadandgarden",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-3",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["Cafe", "Sunset Views", "Modern Fusion Dining"],
      foodStyles: ["Moroccan", "International", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "rooftop",
        "sunset",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Clock",
      neighborhood: "Fès El Bali",
      description: "An eclectic cross-cultural hub famous for camel burgers, traditional storytelling nights, and scenic medina rooftop views.",
      tip: "Check their bulletin board for local workshops, calligraphy classes, and hikayat storytelling nights.",
      badge: "local-favorite",
      bestDishes: ["Camel Burger", "Berber Omelet", "Almond Date Milkshake"],
      googleRating: 4.5,
      googleReviewCount: 2100,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1820,
      theforkRating: 4.3,
      theforkReviewCount: 210,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1950,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Clock+Fes",
      reservationMethod: ["none"],
      reservationContact: "+212535637855",
      website: "https://cafeclock.com",
      instagram: "https://instagram.com/cafeclock",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-4",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Modern Fusion Dining", "Upscale Lounge"],
      foodStyles: ["Gourmet", "Moroccan", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional", "seafood"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card"],
      tags: ["alcohol", "dinner", "fine", "medina", "quiet", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "NUR",
      neighborhood: "Fès El Bali",
      description: "Avant-garde fine tasting menu by celebrity Chef Najat Kaanache highlighting innovative Moroccan culinary artistry.",
      tip: "Go without looking at the menu; it changes daily depending on what Najat finds in the souk.",
      badge: "splurge",
      bestDishes: [
        "Fried Octopus with Zaalouk",
        "Seaweed Tacos",
        "Moroccan Halba Cake"
      ],
      googleRating: 4.6,
      googleReviewCount: 220,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 180,
      theforkRating: 4.6,
      theforkReviewCount: 45,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 210,
      openTime: "19:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Nur+Restaurant+Fes",
      reservationMethod: ["phone"],
      reservationContact: "+212694277849",
      website: "https://nurfez.com",
      instagram: "https://instagram.com/nur_restaurant",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 0
    }
  },

  {
    id: "fes-eat-5",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Sunset Views", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 40,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L'Amandier",
      neighborhood: "Fès El Bali",
      description: "Royal dining perched on the rooftop of Palais Faraj, delivering imperial Fassi recipes and panoramic medina views.",
      tip: "Request a table right on the balcony edge just before sunset to watch the medina light up.",
      badge: "splurge",
      bestDishes: [
        "Fassi Pigeon Pastilla",
        "Royal Lamb Tagine",
        "Trio of Moroccan Salads"
      ],
      googleRating: 4.7,
      googleReviewCount: 1237,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 499,
      theforkRating: 4.7,
      theforkReviewCount: 190,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1180,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=L%27Amandier+Palais+Faraj+Fes",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212535635356",
      website: "https://palaisfaraj.com/restaurant-lamandier",
      instagram: "https://instagram.com/palaisfarajsuitesetspa",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-6",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: [
        "Fine Dining",
        "Garden restaurant with live music",
        "Traditional Dining"
      ],
      foodStyles: ["Moroccan", "Healthy", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 35,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
        "live-music",
        "medina",
        "palace",
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
      name: "Eden at Palais Amani",
      neighborhood: "Fès El Bali",
      description: "Tranquil botanical garden restaurant inside a majestic palace, specializing in refined, market-to-table Fassi delicacies.",
      tip: "Combine your reservation with a private cooking class held at their rooftop Fez Cooking School.",
      badge: "splurge",
      bestDishes: [
        "Chicken Tagine with Preserved Lemons",
        "Slow-Roasted Lamb Shoulder",
        "Seasonal Citrus Sorbet"
      ],
      googleRating: 4.6,
      googleReviewCount: 420,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 310,
      theforkRating: 4.5,
      theforkReviewCount: 95,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 390,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Palais+Amani+Fes",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212535639090",
      website: "https://palaisamani.com/eat",
      instagram: "https://instagram.com/palaisamani",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-7",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["Traditional Dining", "Sunset Views", "Casual Dining"],
      foodStyles: ["Mediterranean", "Moroccan", "Healthy"],
      cuisineTags: ["international", "moroccan-traditional"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "medina",
        "riad",
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
      name: "Bistro Laaroussa",
      neighborhood: "Fès El Bali",
      description: "Warm, cozy riad bistro serving seasonal Mediterranean home cooking on a sweeping panoramic roof terrace.",
      tip: "On colder winter nights, request to dine by the crackling open fireplace in their indoor lounge.",
      badge: "local-favorite",
      bestDishes: [
        "Pan-seared Fresh Fish",
        "Moroccan Orange Salad",
        "Grilled Lamb Skewers"
      ],
      googleRating: 4.6,
      googleReviewCount: 340,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 280,
      theforkRating: 4.5,
      theforkReviewCount: 60,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 320,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Riad+Laaroussa+Fes",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212674477464",
      website: "https://riadlaaroussa.com/restaurant",
      instagram: "https://instagram.com/riadlaaroussa",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-8",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Traditional Dining",
        "Garden restaurant with live music"
      ],
      foodStyles: ["Moroccan", "French", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 45,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "late-night",
        "live-music",
        "medina",
        "pastilla",
        "quiet",
        "riad",
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
      name: "Restaurant Gayza",
      neighborhood: "Fès El Bali",
      description: "Enchanting Riad Relais & Châteaux restaurant presenting authentic traditional Fassi culinary secrets by Chef Lalla Abida.",
      tip: "Arrive early to sip a local Moroccan wine poolside in their exquisitely designed orange tree courtyard.",
      badge: "splurge",
      bestDishes: [
        "Lamb Tagine with Prunes",
        "Beef Pastilla",
        "Gourmet Fassi Eggplant Zaalouk"
      ],
      googleRating: 4.3,
      googleReviewCount: 154,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 145,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Gayza+Riad+Fes",
      reservationMethod: ["phone"],
      reservationContact: "+212535741012",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-9",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Modern Fusion Dining", "Casual Dining", "Cafe"],
      foodStyles: ["Moroccan", "International", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
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
      name: "Restaurant Ishq",
      neighborhood: "Fès El Bali",
      description: "A vibrant, artistically decorated bistronomic space matching contemporary flair with rich traditional Moroccan flavors.",
      tip: "The restaurant features stunning wall murals that make it an exceptionally photogenic backdrop.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Braised Lamb Shank",
        "Avocado-Date Smoothie",
        "Seasonal Vegetable Tagine"
      ],
      googleRating: 4.8,
      googleReviewCount: 350,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 45,
      theforkRating: 4.6,
      theforkReviewCount: 30,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Ishq+Fes",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212660564505",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-10",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "tagine",
        "terrace"
      ],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café-restaurant Moulay Idriss",
      neighborhood: "Fès El Bali",
      description: "Bustling medina favorite near the mausoleum, delivering outstandingly comforting, authentic Moroccan stews and friendly hospitality.",
      tip: "Grab one of the limited second-story balcony seats for stellar people-watching over the medina walkway.",
      badge: "local",
      bestDishes: [
        "Sizzling Kefta Tagine",
        "Friday Couscous",
        "Moroccan Harira Soup"
      ],
      googleRating: 4.3,
      googleReviewCount: 500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 140,
      theforkRating: 4,
      theforkReviewCount: 35,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 470,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Moulay+Idriss+Fes",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-11",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Modern Fusion Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le Tarbouche",
      neighborhood: "Fès El Bali",
      description: "A colorful, vibrant medina cafe creatively blending Moroccan, Mediterranean, and light Tex-Mex fusion dishes.",
      tip: "Their air-conditioned indoor seating is a sanctuary during scorching hot summer afternoons in Fes.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Kefta Wraps",
        "Fresh Avocado Salad",
        "Beef Pastilla"
      ],
      googleRating: 4.6,
      googleReviewCount: 2211,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 601,
      theforkRating: 4.5,
      theforkReviewCount: 180,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 2100,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Tarbouche+Fes",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212624556434",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-12",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Garden restaurant with live music"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "live-music",
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
      name: "La Morille",
      neighborhood: "Fès El Bali",
      description: "Outstanding traditional home-style Moroccan plates cooked with immense care in a cozy, hidden alleyway courtyard.",
      tip: "Look out carefully for their sign in the alley; the courtyard entrance is extremely easy to miss.",
      badge: "hidden-gem",
      bestDishes: [
        "Beef Tagine with Sweet Plums",
        "Lemon Chicken Olives",
        "Homemade Flaky Pastilla"
      ],
      googleRating: 4.8,
      googleReviewCount: 414,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 180,
      theforkRating: 4.6,
      theforkReviewCount: 50,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 390,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Morille+Fes",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212613345543",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-13",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Live Music Terrace"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 50,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "live-music",
        "medina",
        "palace",
        "pastilla",
        "quiet",
        "riad",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Maison Bleue",
      neighborhood: "Batha",
      description: "One of Fes' oldest, most prestigious riad restaurants serving multi-course palace banquets paired with live Gnaoua music.",
      tip: "This is a fixed-price multi-course dining experience; make sure to arrive with a very healthy appetite.",
      badge: "splurge",
      bestDishes: [
        "Royal Chicken Pastilla",
        "Slow-cooked Beef M'rouzia",
        "Traditional Fassi Salads"
      ],
      googleRating: 4.6,
      googleReviewCount: 400,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 310,
      theforkRating: 4.5,
      theforkReviewCount: 80,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 370,
      openTime: "19:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Maison+Bleue+Fes",
      reservationMethod: ["phone"],
      reservationContact: "+212535741843",
      website: "https://maisonbleue.com/dining",
      instagram: "https://instagram.com/lamaisonbleuefes",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 0
    }
  },

  {
    id: "fes-eat-14",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Traditional Dining", "Sunset Views", "Fine Dining"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 32,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "rooftop",
        "sunset",
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
      name: "Palais de Fes Dar Tazi",
      neighborhood: "Fès El Bali",
      description: "Classic palace-style rooftop restaurant legendary for sweet-and-savory pigeon pastilla and exceptional medina skyline views.",
      tip: "Plan a lunch visit to capture the most brilliant, unshadowed photos of the sprawling medina alleys below.",
      badge: "splurge",
      bestDishes: [
        "Authentic Pigeon Pastilla",
        "Chicken Tagine with Almonds",
        "Couscous Royal"
      ],
      googleRating: 4.4,
      googleReviewCount: 600,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 380,
      theforkRating: 4.2,
      theforkReviewCount: 98,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 560,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Palais+de+Fes+Dar+Tazi",
      reservationMethod: ["phone"],
      reservationContact: "+212535761590",
      website: "https://palaisdefes.com",
      instagram: "https://instagram.com/palaisdefesdartazi",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-15",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Upscale Lounge", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 42,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "medina",
        "pastilla",
        "quiet",
        "riad",
        "rooftop",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L'Ambre at Riad Fes",
      neighborhood: "Fès El Bali",
      description: "Chic, highly sophisticated dining inside a luxurious boutique Riad, blending imperial Fassi classics with contemporary artistry.",
      tip: "Dress in smart-casual attire and enjoy a signature cocktail at their rooftop bar before dining.",
      badge: "splurge",
      bestDishes: [
        "Sea Bass with Argan Oil",
        "Slow-cooked Beef Cheek",
        "Modern Crisp Pastilla"
      ],
      googleRating: 4.6,
      googleReviewCount: 300,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 220,
      theforkRating: 4.5,
      theforkReviewCount: 70,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 280,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=L%27Ambre+Riad+Fes",
      reservationMethod: ["phone"],
      reservationContact: "+212535947610",
      website: "https://riadfes.com/dining",
      instagram: "https://instagram.com/riadfes",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-16",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Upscale Lounge", "Modern Fusion Dining"],
      foodStyles: ["French", "Mediterranean", "European"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 38,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "fine", "tagine", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Maison Blanche",
      neighborhood: "Ville Nouvelle",
      description: "Sleek, exceptionally chic French fine-dining escape in the new city, providing respite from typical Moroccan tagines.",
      tip: "This is hands-down the premier venue in Fes for selecting premium imported French wines.",
      badge: "splurge",
      bestDishes: [
        "Linguini Foie Gras",
        "Crispy Vegetable Tempura",
        "Entrecote Steak with French Fries"
      ],
      googleRating: 4.3,
      googleReviewCount: 250,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 120,
      theforkRating: 4.1,
      theforkReviewCount: 45,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 81,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Maison+Blanche+Hotel+Sahrai+Fes",
      reservationMethod: ["phone"],
      reservationContact: "+212535940332",
      website: "https://hotel-sahrai.com/dining",
      instagram: "https://instagram.com/hotelsahrai",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-17",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Modern Fusion Dining"],
      foodStyles: ["International", "Healthy", "Mediterranean"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "cafe-pastry", "dinner", "dry", "medina", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Culture Box",
      neighborhood: "Fès El Bali",
      description: "Hip and healthy medina hangout serving plant-forward fusion bowls, fresh camel burgers, and colorful beetroot hummus.",
      tip: "Their fresh, cold-pressed vegetable juices are pressed on-demand and make for a perfect afternoon pick-me-up.",
      badge: "local-favorite",
      bestDishes: [
        "Healthy Falafel Bowl",
        "Spiced Camel Burger",
        "Creamy Beetroot Hummus"
      ],
      googleRating: 4.7,
      googleReviewCount: 1366,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 386,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1300,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Culture+Box+Fes",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212613148762",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-18",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "late-night"],
      experienceTypes: ["Cafe", "Casual Dining", "Family Friendly"],
      foodStyles: ["International", "Italian", "Healthy"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cinema Cafe",
      neighborhood: "Batha",
      description: "Vibrant, traveler-friendly lounge near the Blue Gate offering top-tier pizzas, camel burgers, and weekly movie screenings.",
      tip: "Stay tuned to their social media pages to catch their cozy evening cinema and film screenings.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-fired Pizza",
        "Vegetarian Lasagna",
        "Fez Camel Burger"
      ],
      googleRating: 4.4,
      googleReviewCount: 400,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 210,
      theforkRating: 4.2,
      theforkReviewCount: 55,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 380,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cinema+Cafe+Fes",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212535741406",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-19",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Garden restaurant with live music",
        "Traditional Dining"
      ],
      foodStyles: ["French", "Mediterranean", "Moroccan"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      crowdLevel: "balanced"
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "cafe-pastry",
        "dinner",
        "fine",
        "live-music",
        "medina",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Fez Café",
      neighborhood: "Fès El Bali",
      description: "Art-filled French-Moroccan bistronomy situated inside the tranquil, sprawling historic gardens of Le Jardin des Biehn.",
      tip: "Give yourself thirty minutes before your meal to stroll through their gorgeous Andalusian garden oasis.",
      badge: "local-favorite",
      bestDishes: [
        "Filet de Boeuf",
        "Herb-Crusted Lamb",
        "Organic Vegetable Soup"
      ],
      googleRating: 4.2,
      googleReviewCount: 402,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 260,
      theforkRating: 4.2,
      theforkReviewCount: 75,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 380,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Fez+Cafe+Jardin+des+Biehn",
      reservationMethod: ["phone"],
      reservationContact: "+212535741008",
      website: "https://le-jardin-des-biehn.com/restaurant",
      instagram: "https://instagram.com/jardindesbiehn",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "fes-eat-20",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["Cafe", "Casual Dining", "Modern Fusion Dining"],
      foodStyles: ["Healthy", "Mediterranean", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
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
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
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
      name: "Veggie Pause",
      neighborhood: "Fès El Bali",
      description: "A cozy, highly-rated vegetarian sanctuary offering outstandingly creative vegan and gluten-free Mediterranean fusion bowls.",
      tip: "Ask their lovely staff about daily off-menu vegan cakes and organic bakery treats.",
      badge: "hidden-gem",
      bestDishes: [
        "Vegan Kefta Tajine",
        "Fresh Avocado Toast",
        "Lentil Quinoa Salad"
      ],
      googleRating: 4.9,
      googleReviewCount: 1040,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 1664,
      theforkRating: 4.8,
      theforkReviewCount: 110,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 980,
      openTime: "11:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Veggie+Pause+Fes",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212700867997",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "fes-eat-mcdonalds-borj-fez",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["Fast Food", "Mall Dining", "Terrace"],
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
      tags: ["street-food", "breakfast", "budget", "terrace"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Borj Fez",
      neighborhood: "Ville Nouvelle",
      district: "Borj Fez Mall",
      description: "Modern McDonald's in the Borj Fez shopping complex, offering digital kiosks, McCafé beverages, Happy Meals, and outdoor terrace seating overlooking the city.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 4200,
      openTime: "08:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Borj Fez, Boulevard Allal Ben Abdellah, Fes",
        lat: 34.0392,
        lng: -4.9968
      },
      googleMapsUrl: "https://maps.google.com/?cid=9203847261508362517",
      reservationContact: "not-available",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "fes-eat-kfc-borj-fez",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Mall Dining"],
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
      hasParking: true,
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
      name: "KFC Borj Fez",
      neighborhood: "Ville Nouvelle",
      district: "Borj Fez Mall",
      description: "Top-floor food court KFC in Borj Fez serving crispy fried chicken pieces, strips, fries, and soft drinks.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1550,
      openTime: "11:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Borj Fez, Boulevard Allal Ben Abdellah, Fes",
        lat: 34.0392,
        lng: -4.9968
      },
      googleMapsUrl: "https://maps.google.com/?cid=1039485736251948263",
      reservationContact: "not-available",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "fes-eat-burger-king-borj-fez",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Mall Dining"],
      foodStyles: ["Burgers", "Fast Food", "American"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "halal-certified",
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
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["street-food", "budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Burger King Borj Fez",
      neighborhood: "Ville Nouvelle",
      district: "Borj Fez Mall",
      description: "Food court Burger King in Borj Fez Mall offering signature flame-broiled Whoppers, chicken royal, and onion rings.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1800,
      openTime: "11:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Borj Fez, Boulevard Allal Ben Abdellah, Fes",
        lat: 34.0392,
        lng: -4.9968
      },
      googleMapsUrl: "https://maps.google.com/?cid=2140596847362059374",
      reservationContact: "not-available",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "fes-eat-pizza-hut-borj-fez",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Mall Dining", "Pizza"],
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
      hasParking: true,
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
      name: "Pizza Hut Borj Fez",
      neighborhood: "Ville Nouvelle",
      district: "Borj Fez Mall",
      description: "Convenient Pizza Hut in the Borj Fez food court serving hot pan pizzas, garlic breadsticks, and family combo meals.",
      badge: "local-favorite",
      googleRating: 3.7,
      googleReviewCount: 1200,
      openTime: "11:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Borj Fez, Boulevard Allal Ben Abdellah, Fes",
        lat: 34.0392,
        lng: -4.9968
      },
      googleMapsUrl: "https://maps.google.com/?cid=3251607958473160485",
      reservationContact: "not-available",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "fes-eat-dominos-atlas",
    city: "fes",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Takeaway", "Delivery", "Pizza"],
      foodStyles: ["Pizza", "Fast Food", "American"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 60,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
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
      tags: ["late-night", "budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Domino's Pizza Atlas",
      neighborhood: "Atlas",
      district: "Avenue des FAR",
      description: "Fast carry-out and delivery branch located on Avenue des FAR in the Atlas neighborhood of Fes.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 950,
      openTime: "11:30",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Avenue des FAR, Atlas, Fes",
        lat: 34.0315,
        lng: -5.0052
      },
      googleMapsUrl: "https://maps.google.com/?cid=4362718069584271596",
      reservationContact: "not-available",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  }
];
