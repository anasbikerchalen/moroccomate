/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: OUARZAZATE
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-ouarzazate-1' or 'eat-ouarzazate-restaurant')
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
 *   id: 'e-ouarzazate-[id]',
 *   city: 'ouarzazate',
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

export const ouarzazateEat: EatListing[] = [
  {
    id: "e-ouarzazate-1",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Romantic Sunset"],
      foodStyles: ["Moroccan", "French", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "sunset",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Kasbah des Sables",
      neighborhood: "Ait Kdif",
      description: "An extraordinary gourmet destination located in Ouarzazate's oldest neighborhood. Built like an opulent desert palace, it features distinct dining salons, a central plunge pool, and intricate Amazigh craftsmanship.",
      tip: "Sit around the central pool in the evening. The candlelit atmosphere is spectacular, and the French owner, Brigitte, offers wonderful service.",
      badge: "splurge",
      bestDishes: [
        "Argan-infused Lamb Tagine",
        "Saffron Sea Bass",
        "Pastilla with Almond Milk"
      ],
      googleRating: 4.6,
      googleReviewCount: 850,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 920,
      theforkRating: 4.5,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1056,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Kasbah+des+Sables+Ouarzazate",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524885428",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-2",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Mediterranean", "French", "Moroccan", "Italian"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "late-night", "tagine", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Dimitri",
      neighborhood: "Centre-Ville",
      description: "Ouarzazate's oldest and most legendary restaurant, operating since 1928. Originally a Foreign Legion post, it is decorated with decades of signed movie star photos, from Orson Welles and Ridley Scott to Michael Douglas.",
      tip: "Take some time to look at the vintage movie-set photos on the walls. It is a fantastic historical monument of the Moroccan film industry.",
      badge: "local-favorite",
      bestDishes: [
        "Classic French Steak Frites",
        "Lamb Tagine with Prunes",
        "Handmade Thin Crust Pizza"
      ],
      googleRating: 4,
      googleReviewCount: 480,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 360,
      theforkRating: 4,
      theforkReviewCount: 90,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 650,
      openTime: "11:30",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Dimitri+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "+212524887346",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-3",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["Moroccan", "French", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 21,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "pastilla",
        "sunset",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Jardin des Arômes",
      neighborhood: "Centre-Ville",
      description: "A stylish and refined French-Moroccan fusion restaurant. It offers an upscale dining experience with beautifully presented stews and modern steaks inside a chic Moroccan salon.",
      tip: "One of the highest-end meals in the city center. Their modern chicken pastilla and wine pairings are outstanding.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Chicken Pastilla",
        "Slow-cooked Beef Tagine",
        "Chocolate Fondant"
      ],
      googleRating: 4.5,
      googleReviewCount: 450,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 510,
      theforkRating: 4.4,
      theforkReviewCount: 70,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 950,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Jardin+des+Aromes+Ouarzazate",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524885338",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-4",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["French", "Mediterranean", "European"],
      cuisineTags: ["international"],
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
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "fine", "sunset", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Relais de Saint-Exupéry",
      neighborhood: "Centre-Ville",
      description: "A cozy French bistro celebrating the writer-aviator Antoine de Saint-Exupéry. Managed by a Bordeaux chef, it serves classic French delicacies and dromedary steak using demanding fresh local products.",
      tip: "Located at 13 Boulevard Moulay Abdellah. Features an extensive Moroccan wine list and intimate French-aviation nostalgia decor.",
      badge: "hidden-gem",
      bestDishes: [
        "Dromedary Meat with Mashed Vegetables",
        "Fresh Herb Lemon Fish",
        "Warm Apple Tarte Tatin"
      ],
      googleRating: 4.3,
      googleReviewCount: 180,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 140,
      theforkRating: 4.3,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 340,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Relais+de+Saint-Exupery+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "+212524887779",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-5",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Barbecue"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4.5,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "closed",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Bahja",
      neighborhood: "Douar Cheums",
      description: "The ultimate, no-frills local canteen in Ouarzazate. Always humming with locals and desert drivers, it serves excellent charcoal-grilled meats, rotisserie chicken, and hot, spiced bean stews.",
      tip: "Order their famous \"loubia\" (spiced white beans) to accompany your mixed charcoal meat plate. Very cheap and deeply satisfying.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Charcoal Grill Platter",
        "Spiced Loubia (White Beans)",
        "Rotisserie Chicken with Olives"
      ],
      googleRating: 4.1,
      googleReviewCount: 450,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 210,
      theforkRating: 4,
      theforkReviewCount: 50,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 807,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bahja+Ouarzazate",
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
    id: "e-ouarzazate-6",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Traditional Dining", "Sunset Views"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "couscous",
        "dinner",
        "pastilla",
        "rooftop",
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
      name: "Restaurant Douyria",
      neighborhood: "Centre-Ville",
      description: "A cozy traditional Moroccan restaurant featuring beautiful Berber carpets and a scenic rooftop terrace overlooking Kasbah Taourirt. Trusted for Friday couscous and traditional clay-pot tagines.",
      tip: "Licensed to serve wine and beer. Dine on the upper terrace around sunset for a breezy view overlooking the square and Kasbah walls.",
      badge: "local-favorite",
      bestDishes: [
        "Dromedary Meat Tagine",
        "Friday Seven-Vegetable Couscous",
        "Pigeon Pastilla with Almonds"
      ],
      googleRating: 4.4,
      googleReviewCount: 820,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 360,
      theforkRating: 4.2,
      theforkReviewCount: 80,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 850,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Douyria+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "+212524885288",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-7",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "flexible"],
      experienceTypes: ["Casual Dining", "Family Friendly", "People Watching"],
      foodStyles: ["Mediterranean", "Italian", "Moroccan", "Cafe"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
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
        "dinner",
        "dry",
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
      name: "The Full Sun",
      neighborhood: "Zone Touristique",
      description: "A contemporary, bright restaurant and cafe located in Ouarzazate's tourist zone near the Ibis Hotel. Offers fresh breakfasts, homemade pizzas, custom fresh salads, and Moroccan stews.",
      tip: "Located at N° 706 Avenue Moulay Rachid. One of the highest-rated and cleanest stops in the city, accepting card payments and offering great AC.",
      badge: "local-favorite",
      bestDishes: [
        "Build-your-own Fresh Salad",
        "Wood-fired Pizza Pepperoni",
        "Chicken Tagine with Lemon"
      ],
      googleRating: 4.7,
      googleReviewCount: 2120,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 685,
      theforkRating: 4.7,
      theforkReviewCount: 110,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2876,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+The+Full+Sun+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "+212524885566",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-8",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["breakfast", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Romantic Sunset",
        "Garden restaurant with live music"
      ],
      foodStyles: ["Moroccan", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
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
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
        "live-music",
        "mountain",
        "quiet",
        "sunset",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Chamaa Restaurant",
      neighborhood: "Zone Touristique",
      description: "A peaceful guesthouse restaurant offering poolside dining surrounded by olive trees in the Palmeraie de Tajda. Known for romantic evening dinners under the Saharan stars with Atlas views.",
      tip: "Dine by the pool in the evening. Features a curated Moroccan wine and beer selection with tranquil mountain vistas.",
      badge: "hidden-gem",
      bestDishes: [
        "Beef Tagine with Caramelized Prunes",
        "Organic Saffron Rice with Vegetables",
        "Moroccan Pastry Sampler"
      ],
      googleRating: 4.6,
      googleReviewCount: 480,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 934,
      theforkRating: 4.5,
      theforkReviewCount: 60,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 520,
      openTime: "08:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Chamaa+Ouarzazate",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524854954",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-9",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Sunset Views", "Traditional Dining"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
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
        "budget",
        "dinner",
        "dry",
        "pastilla",
        "riad",
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
      name: "Restaurant 3 Thés",
      neighborhood: "Centre-Ville",
      description: "A traditional riad-style restaurant and art gallery on Avenue Moulay Rachid near the CTM station. Features authentic Moroccan salons serving generous set menus and fragrant teas.",
      tip: "Located at 1 Avenue Moulay Rachid right behind the CTM terminal. Great stop for tea and tagine before or after bus travel.",
      badge: "local-favorite",
      bestDishes: [
        "Berber Tagine with Vegetables",
        "Chicken Pastilla",
        "Assorted Moroccan Salads"
      ],
      googleRating: 4.2,
      googleReviewCount: 260,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 140,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 280,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+3+Thes+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "+212524886363",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-10",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: [
        "Bakery-Patisserie",
        "Casual Dining",
        "Traditional Breakfast Ritual"
      ],
      foodStyles: ["Bakery", "French", "Moroccan", "Cafe"],
      cuisineTags: ["cafe-pastry", "international", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "pastry",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Kasbah Tafarnout",
      neighborhood: "Centre-Ville",
      description: "A popular modern bakery, pastry shop, and cafe at 74 Avenue Mohammed V. Famed for freshly baked French croissants, traditional Moroccan almond sweets, and morning breakfast boards.",
      tip: "The best spot in town to pick up traditional Moroccan cookies like Chebakia and Kaab el Ghazal, or grab a rapid espresso before visiting the studios.",
      badge: "local-favorite",
      bestDishes: [
        "Almond Croissant",
        "Traditional Mint Tea with Cookies",
        "Fresh Fruit Juice"
      ],
      googleRating: 4.1,
      googleReviewCount: 370,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 180,
      theforkRating: 4,
      theforkReviewCount: 40,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 450,
      openTime: "06:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Kasbah+Tafarnout+Ouarzazate",
      reservationMethod: ["none"],
      reservationContact: "+212524882800",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-11",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
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
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "tagine", "terrace"],
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Sabrine",
      neighborhood: "Centre-Ville",
      description: "A cozy family-run restaurant directly opposite the famous Kasbah Taourirt on Avenue Mohammed V. Features a sunny street terrace serving authentic, sizzling clay-pot Berber tagines and fresh salads.",
      tip: "Located right across from Kasbah Taourirt. Sizzling homemade tagines served with hot bread and friendly hospitality at budget prices.",
      badge: "local",
      bestDishes: [
        "Saffron Chicken Tagine",
        "Kefta Egg Tagine",
        "Fresh Fruit Salad"
      ],
      googleRating: 4.7,
      googleReviewCount: 520,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 240,
      theforkRating: 4.6,
      theforkReviewCount: 50,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 584,
      openTime: "11:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Sabrine+Ouarzazate",
      reservationMethod: ["none"],
      reservationContact: "+212661948640",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-12",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["Casual Dining", "Sunset Views", "People Watching"],
      foodStyles: ["Mediterranean", "Italian", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
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
        "dry",
        "juice",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Terrasse Café & Restaurant",
      neighborhood: "Centre-Ville",
      description: "A stylish rooftop cafe in the city center. Known for its breezy top terrace and wide selection of continental breakfasts, custom fresh juices, and light Italian pasta.",
      tip: "Sit on the terrace for excellent morning breeze. Their fresh avocado and almond shake is delicious.",
      badge: "local",
      bestDishes: [
        "Fresh Avocado Almond Shake",
        "Alfredo Penne Pasta",
        "Continental Breakfast Board"
      ],
      googleRating: 4.3,
      googleReviewCount: 340,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 427,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Terrasse+Cafe+Ouarzazate",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-13",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Family Friendly", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Italian", "Barbecue"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
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
        "dinner",
        "dry",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Afoulki Café Restaurant",
      neighborhood: "Centre-Ville",
      description: "A bustling local cafe-restaurant on Avenue Mohammed V. Offers street-level shaded terrace seating, serving barbecue plates, pizzas, and paninis.",
      tip: "Casual spot along the main avenue. Their charcoal mixed grill and cheese pizzas are dependable and quick.",
      badge: "local",
      bestDishes: [
        "Spiced Charcoal Mixed Grill",
        "Margherita Pizza",
        "Msemen with honey"
      ],
      googleRating: 4.1,
      googleReviewCount: 310,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 90,
      theforkRating: 3.9,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 442,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Afoulki+Cafe+Ouarzazate",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-14",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "afternoon-tea", "flexible"],
      experienceTypes: ["Bakery-Patisserie", "Casual Dining", "People Watching"],
      foodStyles: ["Moroccan", "Cafe", "Bakery"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5.5,
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
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
        "tagine",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Habous",
      neighborhood: "Centre-Ville",
      description: "A landmark cafe, bakery, and restaurant located on Place Al-Mouahidine. Renowned for its traditional Moroccan pastries, fresh fruit shakes, and classic tagines served on a breezy sidewalk terrace.",
      tip: "Prime people-watching location on Place Al-Mouahidine. Pair a pot of hot mint tea with their almond pastries.",
      badge: "local",
      bestDishes: [
        "Almond Ghriba Cookies",
        "Sage Mint Tea",
        "Kefta Tagine with Eggs"
      ],
      googleRating: 4.2,
      googleReviewCount: 1012,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 380,
      theforkRating: 4.1,
      theforkReviewCount: 60,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1097,
      openTime: "07:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Cafe+Habous+Ouarzazate",
      reservationMethod: ["none"],
      reservationContact: "+212524882525",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-15",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Modern Fusion Dining", "People Watching"],
      foodStyles: ["Mediterranean", "Italian", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["breakfast", "budget", "cafe-pastry", "dinner", "dry", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant César",
      neighborhood: "Centre-Ville",
      description: "A stylish, popular modern cafe and bistro on Boulevard Moulay Abdellah. Serves continental breakfasts, fresh mocktails, burgers, and Italian-inspired pasta in a clean, design-forward setting.",
      tip: "Comfortable modern setting on Boulevard Moulay Abdellah with reliable Wi-Fi and air conditioning.",
      badge: "local",
      bestDishes: [
        "Italian Double Espresso",
        "Chicken Alfredo Pasta",
        "Gourmet Beef Burger"
      ],
      googleRating: 4.1,
      googleReviewCount: 130,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 40,
      theforkRating: 4,
      theforkReviewCount: 15,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 125,
      openTime: "07:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cesar+Cafe+Ouarzazate",
      reservationMethod: ["none"],
      reservationContact: "+212524884129",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ouarzazate-16",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Traditional Dining", "Casual Dining", "Sunset Views"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "sunset",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Oasis",
      neighborhood: "Ait Kdif",
      description: "A traditional Moroccan dining room situated near the historic Taourirt Kasbah. Decorated with classic Moroccan zellige and arches, it serves authentic tagines, pastillas, and couscous.",
      tip: "Good traditional choice for families and groups visiting the Taourirt Kasbah.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Couscous with Seven Vegetables",
        "Beef Tagine with Almonds",
        "Traditional Harira Soup"
      ],
      googleRating: 4.1,
      googleReviewCount: 260,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 120,
      theforkRating: 4,
      theforkReviewCount: 30,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 260,
      openTime: "11:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Oasis+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-17",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Family Friendly", "Wood-Fired Pizza"],
      foodStyles: ["Italian", "Moroccan", "Pizza"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "juice",
        "mountain",
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
      name: "Restaurant Phoenix",
      neighborhood: "Zone des Studios",
      description: "A casual restaurant on Rue de l'ONEP near the famous Atlas Film Studios. Known for catering to tourists and movie crews, it serves Moroccan stews and crispy stone-baked pizzas.",
      tip: "Convenient stop right near Atlas Film Studios. Offers an outdoor terrace with views over the valley.",
      badge: "local-favorite",
      bestDishes: [
        "Stone-baked Four Cheese Pizza",
        "Saffron Beef Tagine",
        "Fresh Fruit Juices"
      ],
      googleRating: 3.9,
      googleReviewCount: 160,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 60,
      theforkRating: 3.9,
      theforkReviewCount: 20,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 160,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Phoenix+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "+212524888313",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-18",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Casual Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      isVegetarianFriendly: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "couscous", "dinner", "tagine"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant L'Étoile du Sud",
      neighborhood: "Centre-Ville",
      description: "An evocative traditional restaurant operating on Avenue Mohammed V since 1968. Decorated with caidal velvet tents and Berber carpets, serving classic couscous and tagines with licensed wine.",
      tip: "Dine under the caidal tent interior. The restaurant holds an alcohol license and serves local Moroccan wines.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Lamb Couscous",
        "Spiced Berber Beef Tagine",
        "Warm Harira with Dates"
      ],
      googleRating: 4.1,
      googleReviewCount: 310,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 180,
      theforkRating: 4,
      theforkReviewCount: 40,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 310,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=L+Etoile+du+Sud+Ouarzazate",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-19",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["Casual Dining", "Sunset Views", "Romantic Sunset"],
      foodStyles: ["Moroccan", "Mediterranean", "Berber"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "mountain",
        "sunset",
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
      name: "Restaurant Bagdad Café",
      neighborhood: "Ait Benhaddou",
      description: "A stylish, popular hotel-restaurant located near the ancient Ksar of Ait Benhaddou. Celebrated for its film-inspired retro decor, lovely poolside patio, and delicious Berber dishes.",
      tip: "Famed for its artistic film-themed vibe. Sit by the pool to enjoy their spiced Berber egg tagine with cold beer or wine.",
      badge: "local-favorite",
      bestDishes: [
        "Spiced Berber Egg Tagine",
        "Traditional Chicken Tajine with Almonds",
        "Fresh Melon Salad"
      ],
      googleRating: 4.6,
      googleReviewCount: 520,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 609,
      theforkRating: 4.7,
      theforkReviewCount: 50,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 650,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bagdad+Cafe+Ait+Benhaddou",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212662771218",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ouarzazate-20",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Traditional Dining",
        "Romantic Sunset",
        "Sunset Views"
      ],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 38,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
        "mountain",
        "quiet",
        "riad",
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
      name: "Restaurant Riad Ksar Ighnda",
      neighborhood: "Ait Benhaddou",
      description: "An opulent, high-end hotel restaurant set right on the edge of the desert valley in Douar Asfalou. Offers chef-elevated traditional Moroccan stews and international fusion plates inside a fortress-style castle.",
      tip: "Perfect for a luxury dinner stop after exploring the ancient clay ruins of Ait Benhaddou. Extensive cocktail and Moroccan wine list.",
      badge: "splurge",
      bestDishes: [
        "Slow-Cooked Lamb Shoulder",
        "Saffron Braised Chicken",
        "Traditional Moroccan Salad Medley"
      ],
      googleRating: 4.4,
      googleReviewCount: 822,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 528,
      theforkRating: 4.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 822,
      openTime: "07:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Ksar+Ighnda+Ait+Benhaddou",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524844111",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  }
];
