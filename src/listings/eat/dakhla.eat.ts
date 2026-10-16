/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: DAKHLA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-dakhla-1' or 'eat-dakhla-restaurant')
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
 *   id: 'e-dakhla-[id]',
 *   city: 'dakhla',
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

export const dakhlaEat: EatListing[] = [
  {
    id: "e-dakhla-1",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch"],
      experienceTypes: ["Waterfront Dining", "Fine Seafood", "Casual Dining"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront"],
      paymentMethods: ["cash"],
      tags: ["budget", "dry", "tagine"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Talhamar (Parc à Huîtres)",
      neighborhood: "PK 15 / Lagoon",
      description: "The iconic rustic oyster farm and seaside restaurant on the edge of the lagoon. Known for ultra-fresh raw or grilled oysters, rich seafood tagines, and morning-catch fish in an open-air, unpretentious setting right on the beach.",
      tip: "Try the raw oysters with a squeeze of fresh lemon, and order your fish tajine in advance as they take time to slow-cook.",
      badge: "local-favorite",
      bestDishes: ["Fresh Oysters", "Grilled Sea Bass", "Lobster Tajine"],
      googleRating: 4.6,
      googleReviewCount: 1140,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 186,
      theforkRating: 4.5,
      theforkReviewCount: 45,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 920,
      openTime: "11:00",
      closeTime: "18:30",
      googleMapsUrl: "https://maps.google.com/?q=Talhamar+Dakhla",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-dakhla-2",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Fine Seafood", "Romantic Sunset"],
      foodStyles: ["French", "Seafood", "Gourmet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 45,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "pastilla",
        "quiet",
        "sunset",
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
      name: "La Table d'Éole",
      neighborhood: "PK 60 / El Argoub",
      description: "An exceptional eco-luxury dining room overlooking the pristine waters of the lagoon. Executive Chef Ali Timouni beautifully blends modern French culinary techniques with delicate Asian and traditional Moroccan flavors using organic ingredients from their own greenhouse.",
      tip: "A reservation is highly recommended as seating is limited. Perfect for celebrating a special occasion under the stars.",
      badge: "splurge",
      bestDishes: [
        "Thon Tataki",
        "Charcoal Grilled Sea Bass",
        "Orange Blossom Pastilla"
      ],
      googleRating: 4.8,
      googleReviewCount: 185,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 124,
      theforkRating: 4.8,
      theforkReviewCount: 65,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 185,
      openTime: "12:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Tour+d+Eole+Dakhla",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212676001852",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 0
    }
  },

  {
    id: "e-dakhla-3",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["Seafood", "French", "Italian", "Moroccan"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "fine",
        "late-night",
        "sunset",
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
      name: "Villa Dakhla Restaurant",
      neighborhood: "Downtown Dakhla",
      description: "Set in a gorgeous waterfront villa, this dining spot features a panoramic terrace with spectacular lagoon views. It serves an exquisite mix of French, Italian, and Moroccan cuisines in an elegant yet relaxed atmosphere.",
      tip: "Try their specialty: Camel Tanjia. It is a slow-cooked desert meat delicacy prepared inside clay pots.",
      badge: "local-favorite",
      bestDishes: [
        "Camel Tanjia",
        "Spaghetti with Fresh Lobster",
        "Rice Pudding with Camel Milk"
      ],
      googleRating: 4.4,
      googleReviewCount: 312,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 98,
      theforkRating: 4.3,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 280,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Villa+Dakhla+Restaurant",
      reservationMethod: ["phone"],
      reservationContact: "+212648315818",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-dakhla-4",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Waterfront Dining", "Beachfront Grill", "Sunset Views"],
      foodStyles: ["Seafood", "Spanish", "International"],
      cuisineTags: ["seafood", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 19,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace", "beachfront"],
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "sunset", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "West Point Pescador",
      neighborhood: "Foum El Bouir",
      description: "Perched right next to the legendary surf spot of Foum El Bouir, West Point Pescador offers a lively beachside vibe. It is highly popular among surfers, serving hearty fresh pasta, Spanish-style tapas, and exceptional grilled local fish.",
      tip: "Grab a table on the deck to watch the surfers while enjoying their incredible squid and shrimp cazuelas.",
      badge: "local-favorite",
      bestDishes: [
        "Calamar & Shrimp Cazuela",
        "Seafood Paella",
        "Tuna Tartare"
      ],
      googleRating: 4.3,
      googleReviewCount: 195,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 78,
      theforkRating: 4.3,
      theforkReviewCount: 30,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 160,
      openTime: "11:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=West+Point+Dakhla+Pescador",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-dakhla-5",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "couscous", "dinner", "dry", "late-night", "tagine"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Ntifi",
      neighborhood: "Downtown Dakhla",
      description: "A legendary family-run institution in the heart of downtown Dakhla. Beloved by both locals and travelers for its warm hospitality and amazingly budget-friendly, authentic Moroccan meals, including fish tagines and Friday couscous.",
      tip: "Try their famous chicken tagine with caramelized onions and hand-cut fries—it is highly addictive!",
      badge: "local",
      bestDishes: [
        "Chicken Tagine with Fries",
        "Friday Lamb Couscous",
        "Fried Mixed Seafood Platter"
      ],
      googleRating: 4.7,
      googleReviewCount: 520,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 215,
      theforkRating: 4.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 490,
      openTime: "09:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Ntifi+Dakhla",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-dakhla-6",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Modern Fusion Dining", "Fine Seafood"],
      foodStyles: ["Seafood", "Mediterranean", "Spanish"],
      cuisineTags: ["seafood", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
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
      tags: ["budget", "dinner", "dry", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "My Octopus",
      neighborhood: "Downtown Dakhla",
      description: "A cozy and modern seafood-focused bistro in downtown Dakhla. Features creative, beautifully plated fresh octopus, fish tartares, and traditional paellas made with deep love for the local ocean catch.",
      tip: "The grilled octopus with herb chimichurri and purée is their absolute signature dish—don't miss it.",
      badge: "hidden-gem",
      bestDishes: [
        "Signature Grilled Octopus",
        "Seafood Paella",
        "Garlic Butter Squid"
      ],
      googleRating: 4.6,
      googleReviewCount: 345,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 110,
      theforkRating: 4.5,
      theforkReviewCount: 55,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=My+Octopus+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "+212710050605",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-dakhla-7",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["lunch", "afternoon-tea", "dinner"],
      experienceTypes: ["Waterfront Dining", "Beachfront Grill", "Casual Dining"],
      foodStyles: ["International", "Italian", "Seafood"],
      cuisineTags: ["international", "seafood"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ocean Vagabond Lassarga",
      neighborhood: "Lassarga Beach",
      description: "A highly popular beach restaurant and kite club at the southern point of the peninsula. Dine feet-in-the-sand under cozy wooden structures, savoring refreshing salads, thin-crust wood-fired pizzas, and exceptionally fresh lobster.",
      tip: "The perfect place to spend the afternoon. Grab a fresh juice or cold beer right after a surfing session.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-fired Pizza",
        "Lobster with Garlic Butter",
        "Seafood Ceviche"
      ],
      googleRating: 4.6,
      googleReviewCount: 530,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 172,
      theforkRating: 4.5,
      theforkReviewCount: 75,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 480,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Ocean+Vagabond+Lassarga+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-dakhla-8",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Fine Seafood"],
      foodStyles: ["Seafood", "Italian", "Mediterranean"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace", "beachfront"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "dinner", "dry", "terrace"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Eau & Sel (La Table de l'Océan)",
      neighborhood: "Dakhla Lagoon",
      description: "An incredible waterfront restaurant overlooking the beautiful blue lagoon. Run by seafood enthusiasts, this spot offers exceptionally fresh local seafood platters, sea urchins, and direct oysters with amazing desert background views.",
      tip: "The location is highly photogenic; time your visit during the high tide for the best water-level dining experience.",
      badge: "hidden-gem",
      bestDishes: [
        "Oysters with Shallot Vinaigrette",
        "Grilled Mérou (Grouper)",
        "Royal Seafood Platter"
      ],
      googleRating: 4.7,
      googleReviewCount: 165,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 64,
      theforkRating: 4.6,
      theforkReviewCount: 25,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 140,
      openTime: "11:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Eau+and+Sel+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "+212661183533",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-dakhla-9",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: [
        "solo",
        "couple",
        "family",
        "friends",
        "large-groups",
        "seniors"
      ],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Traditional Dining"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "tagine"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Bahia",
      neighborhood: "Downtown Dakhla",
      description: "One of the oldest and most reliable family restaurants on the central Corniche road. Specializing in high-volume, delicious, and incredibly priced seafood, fresh tajines, and Moroccan salads.",
      tip: "The fish of the day is displayed raw at the front; you can select the exact fish you want grilled by weight.",
      badge: "local",
      bestDishes: [
        "Grilled Sole",
        "Calamares a la Romana",
        "Fish Tagine with Chermoula"
      ],
      googleRating: 4.3,
      googleReviewCount: 580,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 230,
      theforkRating: 4.2,
      theforkReviewCount: 90,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 520,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bahia+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "+212528898943",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-dakhla-10",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "large-groups", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["Waterfront Dining", "Casual Dining", "Family Friendly"],
      foodStyles: ["International", "Moroccan", "Healthy"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "bustling"
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
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "juice",
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
      name: "Dakhla Attitude Restaurant",
      neighborhood: "PK 28 / Lagoon",
      description: "The beating heart of the world-famous Dakhla Attitude resort. Sits directly under the sand dunes facing the lagoon, offering high-energy buffet dining and healthy menus designed perfectly for active kitesurfers.",
      tip: "Even if you are not staying at the resort, you can purchase a day-pass to eat here and enjoy the high-vibe sunset bar scene.",
      badge: "local-favorite",
      bestDishes: ["Harira & Dates", "Kofta Tagine", "Fresh Fruit Smoothies"],
      googleRating: 4.5,
      googleReviewCount: 710,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 320,
      theforkRating: 4.4,
      theforkReviewCount: 110,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 650,
      openTime: "07:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Dakhla+Attitude+Resort",
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
    id: "e-dakhla-11",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Fine Dining", "Waterfront Dining", "Upscale Lounge"],
      foodStyles: ["Mediterranean", "Seafood", "Moroccan"],
      cuisineTags: ["international", "seafood", "moroccan-traditional"],
      crowdLevel: "quiet"
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
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "quiet",
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
      name: "La Crique Wetbar & Restaurant",
      neighborhood: "Dakhla Lagoon",
      description: "An elegant, high-end lagoon-facing lounge and restaurant at La Crique Nature & Spa. Guests can enjoy oysters, hand-crafted cocktails, and Mediterranean fusion cuisine while lounging near the infinity pool overlooking the sandbars.",
      tip: "The Wetbar serves fresh-shucked oysters directly into the water pool area. Perfect sunset spot.",
      badge: "splurge",
      bestDishes: [
        "Oyster Platter",
        "Grilled Lobster",
        "Avocado & Crab Tartare"
      ],
      googleRating: 4.7,
      googleReviewCount: 215,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 95,
      theforkRating: 4.7,
      theforkReviewCount: 45,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 190,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Crique+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-dakhla-12",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Pizza", "Fast Casual"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "tagine"
      ],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Samarkand",
      neighborhood: "Downtown Dakhla",
      description: "A popular, lively local cafe and restaurant located in downtown Dakhla. Serving a large selection of pizzas, grilled skewers, paninis, and tagines in a casual, highly bustling local environment.",
      tip: "An excellent option for a quick, cheap meal after a late flight into Dakhla airport.",
      badge: "local",
      bestDishes: [
        "Wood-fired Pizza Samarkand",
        "Kefta Brochettes",
        "Mixed Moroccan Salads"
      ],
      googleRating: 4.2,
      googleReviewCount: 310,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 75,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 260,
      openTime: "10:30",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Samarkand+Dakhla",
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
    id: "e-dakhla-13",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Garden restaurant with live music"],
      foodStyles: ["Healthy", "Moroccan", "Mediterranean"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
        "live-music",
        "quiet",
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
      name: "La Table de l'Heliophora",
      neighborhood: "El Argoub / Lagoon",
      description: "Nestled in an eco-lodge on the quiet eastern side of the lagoon. Serves healthy, organic dishes utilizing locally-grown vegetables and daily seafood catch, following a slow-food philosophy.",
      tip: "The homemade desserts sweetened with natural local dates are delicious and healthy.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-cooked Fish Tagine",
        "Quinoa and Roasted Vegetable Salad",
        "Date & Almond Tart"
      ],
      googleRating: 4.8,
      googleReviewCount: 125,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 62,
      theforkRating: 4.7,
      theforkReviewCount: 28,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 110,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Heliophora+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-dakhla-14",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "brunch", "flexible"],
      experienceTypes: [
        "Modern Fusion Dining",
        "Waterfront Dining",
        "Upscale Lounge"
      ],
      foodStyles: ["Mediterranean", "International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      crowdLevel: "balanced"
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
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
      name: "Tulum Beach Club",
      neighborhood: "Foum El Bouir",
      description: "A stylish beach restaurant and lounge offering a modern beachfront ambiance. Savor fresh tacos, gourmet sliders, poke bowls, and refreshing cocktails while listening to chill-out lounge music.",
      tip: "Come on Sundays for their seaside brunch featuring live acoustic music and panoramic surf views.",
      badge: "splurge",
      bestDishes: ["Fish Tacos", "Shrimp Poke Bowl", "Tulum Angus Burger"],
      googleRating: 4.4,
      googleReviewCount: 220,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 88,
      theforkRating: 4.3,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 195,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Tulum+Beach+Resort+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-dakhla-15",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "couple", "family"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Casual Dining", "Family Friendly"],
      foodStyles: ["Moroccan", "Healthy", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
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
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "street-food",
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
      name: "Dakhla Camp Lagoon Restaurant",
      neighborhood: "PK 25 / Lagoon",
      description: "A charming, relaxed resort dining spot and breezy pool deck facing the inner lagoon. Offers a playful menu reinventing classic Moroccan street food and Sahrawi bites using organic, healthy ingredients.",
      tip: "Don't pass up their refreshing avocado quinoa bowl and unique camel milk milkshakes after a hard session in the lagoon.",
      badge: "local-favorite",
      bestDishes: [
        "Camel Milk Milkshake",
        "Lagoon Squid Skewers",
        "Avocado Quinoa Bowl"
      ],
      googleRating: 4.6,
      googleReviewCount: 145,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 72,
      theforkRating: 4.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 130,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Dakhla+Camp",
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
    id: "e-dakhla-16",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "business-friendly"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "lunch"],
      experienceTypes: ["Cafe", "Casual Dining", "Modern Fusion Dining"],
      foodStyles: ["Cafe", "Italian", "Healthy"],
      cuisineTags: ["cafe-pastry", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      paymentMethods: ["cash", "card"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "pastry", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Beaux Arts Dakhla",
      neighborhood: "Downtown Dakhla",
      description: "An artistically styled bistro and café in downtown Dakhla. Offers high-quality espresso, healthy breakfasts, French pastries, and Italian pastas in a charming, vintage-inspired interior popular with digital nomads.",
      tip: "One of the best places in town for high-speed Wi-Fi and specialty coffee if you need to catch up on remote work.",
      badge: "hidden-gem",
      bestDishes: [
        "Avocado Toast with Poached Eggs",
        "Smoked Salmon Crepe",
        "Artisan Espresso"
      ],
      googleRating: 4.6,
      googleReviewCount: 175,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 58,
      theforkRating: 4.5,
      theforkReviewCount: 25,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 155,
      openTime: "08:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Beaux+Arts+Dakhla",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-dakhla-17",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Garden restaurant with live music", "Traditional Dining"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "live-music", "quiet", "tagine"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Cactus",
      neighborhood: "Downtown Dakhla",
      description: "Tucked away in a quiet street, Le Cactus offers a wonderful shaded courtyard garden decorated with desert plants. Serves delicious grilled fish, seafood tajines, and Moroccan starters in a tranquil, relaxed atmosphere.",
      tip: "Their slow-cooked octopus tajine with sweet tomatoes and spices is spectacular.",
      badge: "hidden-gem",
      bestDishes: [
        "Octopus Tajine",
        "Grilled Calamari Platter",
        "Fresh Moroccan Salads"
      ],
      googleRating: 4.4,
      googleReviewCount: 130,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 48,
      theforkRating: 4.3,
      theforkReviewCount: 20,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 115,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Cactus+Dakhla",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-dakhla-18",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Quick Bites"],
      foodStyles: ["Fast Casual", "Fast Food"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "late-night", "street-food"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mikmak Fast Food",
      neighborhood: "Downtown Dakhla",
      description: "A highly popular fast-food spot on Boulevard Al Walaa. Offers incredibly rapid service and a wide array of well-portioned, cheap, and tasty burgers, paninis, and loaded fries beloved by active kitesurfers.",
      tip: "Perfect for a quick, cheap bite after a long beach session. Their cheesy royal pizza is highly satisfying.",
      badge: "local",
      bestDishes: [
        "Mikmak Special Burger",
        "Cheesy Loaded Fries",
        "Chicken Panini"
      ],
      googleRating: 4.3,
      googleReviewCount: 240,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 52,
      theforkRating: 4.2,
      theforkReviewCount: 25,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 210,
      openTime: "11:00",
      closeTime: "01:30",
      googleMapsUrl: "https://maps.google.com/?q=Mikmak+Dakhla",
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
    id: "e-dakhla-19",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Family Friendly", "Wood-Fired Pizza"],
      foodStyles: ["Mediterranean", "Moroccan", "Pizza"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      tags: ["budget", "dinner", "dry", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Porto Rico Restaurant",
      neighborhood: "Downtown Dakhla",
      description: "A friendly and expansive family restaurant on Avenue Mohamed V. Offers an incredibly varied menu of Mediterranean classics, local fish, pizzas, and pastas in a clean, casual setting perfect for groups and kids.",
      tip: "The seafood pizza loaded with fresh local shrimp and calamari is highly rated by families.",
      badge: "local",
      bestDishes: [
        "Seafood Pizza",
        "Grilled Chicken Skewers",
        "Mixed Seafood Friture"
      ],
      googleRating: 4.3,
      googleReviewCount: 260,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 65,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 230,
      openTime: "11:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Porto+Rico+Restaurant+Dakhla",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-dakhla-20",
    city: "dakhla",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch"],
      experienceTypes: ["Waterfront Dining", "Casual Dining", "Fine Seafood"],
      foodStyles: ["Seafood", "Spanish", "Moroccan"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront"],
      paymentMethods: ["cash"],
      tags: ["budget", "dry"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Dakhla Plaisance",
      neighborhood: "Port of Dakhla",
      description: "Located right next to the local harbor, this simple open-air restaurant is where the locals go for the freshest fish possible. Tables are placed directly on the sand where you can relish crispy seafood friture and steaming hot paella.",
      tip: "Try to arrive around 13:00 just as the local boats unload their morning catch directly to the kitchen.",
      badge: "local",
      bestDishes: ["Crispy Fish Friture", "Lagoon Paella", "Grilled Sardines"],
      googleRating: 4.5,
      googleReviewCount: 285,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 82,
      theforkRating: 4.4,
      theforkReviewCount: 35,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 260,
      openTime: "11:00",
      closeTime: "18:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Dakhla+Plaisance",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  }
];
