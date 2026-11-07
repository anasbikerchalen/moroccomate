/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: EL JADIDA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-el_jadida-1' or 'eat-el_jadida-restaurant')
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
 *   id: 'e-el_jadida-[id]',
 *   city: 'el_jadida',
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

export const el_jadidaEat: EatListing[] = [
  {
    id: "e-el_jadida-la-portugaise",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Historical Ambience",
        "Seafood Feast",
        "Local Gathering Spot"
      ],
      foodStyles: ["Seafood", "Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      crowdLevel: "bustling"
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
      nearBeach: true,
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
        "medina",
        "pastilla",
        "tagine",
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
      name: "Restaurant La Portugaise",
      neighborhood: "Cité Portugaise",
      description: "A charming, authentic seafood and Moroccan eatery nestled inside the historic ramparts of the Portuguese City (Mazagan). Famous for freshly caught sea bass, sizzling grilled sardine platters, rich seafood pastillas, and warm local hospitality.",
      tip: "Book ahead or arrive right at 12:30 for lunch as tables inside the historic stone interior fill up quickly.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Pastilla",
        "Grilled Sea Bass",
        "Tajine de Poisson du Jour"
      ],
      googleRating: 4.8,
      googleReviewCount: 1399,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 420,
      theforkRating: 4.7,
      theforkReviewCount: 85,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1399,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+La+Portugaise+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 after exploring the Manueline Cistern",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-le-lokal",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["Rooftop Dining", "Sunset Views", "Cultural Cafe"],
      foodStyles: ["Moroccan", "Cafe", "Healthy"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
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
      seatingTypes: ["terrace", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "pastry",
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
      name: "Le Lokal",
      neighborhood: "Cité Portugaise",
      description: "A vibrant cultural café and rooftop restaurant perched atop the ancient ramparts of Mazagan. Serving homemade Moroccan dishes, artisan pastries, fresh fruit smoothies, and specialty coffees alongside panoramic views of the Atlantic Ocean and port.",
      tip: "Head up to the top rooftop terrace around 18:30 for one of the finest sunset ocean views in El Jadida.",
      badge: "hidden-gem",
      bestDishes: [
        "Berber Omelette Breakfast",
        "Homemade Moroccan Lemon Cake",
        "Avocado Seafood Salad"
      ],
      googleRating: 4.7,
      googleReviewCount: 520,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 210,
      theforkRating: 4.7,
      theforkReviewCount: 65,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 520,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Lokal+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late afternoon coffee and cake at 17:30 before sunset",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-el_jadida-la-capitainerie",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Historical Ambience",
        "Upscale Romantic Dining"
      ],
      foodStyles: ["French", "Seafood", "Moroccan"],
      cuisineTags: ["international", "seafood", "moroccan-traditional"],
      crowdLevel: "quiet"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "medina",
        "quiet",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Capitainerie",
      neighborhood: "Cité Portugaise",
      description: "An atmospheric fine-dining seafood restaurant set inside a historic 16th-century Portuguese fortress building. Renowned for upscale French-Moroccan culinary creations, whole grilled turbot, spider crab, and elegant candlelit dining.",
      tip: "Ideal for romantic dinners; reserve a table in advance for weekend evenings.",
      badge: "splurge",
      bestDishes: [
        "Grilled Spider Crab",
        "Filet de Saint-Pierre",
        "Seafood Soup Royal"
      ],
      googleRating: 4.6,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 180,
      theforkRating: 4.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 310,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Capitainerie+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 20:00 for a romantic atmosphere",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-el_jadida-cafe-do-mar",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "snack"],
      experienceTypes: ["Waterfront Dining", "Sunset Views", "People Watching"],
      foodStyles: ["Mediterranean", "Seafood", "Italian"],
      cuisineTags: ["international", "seafood", "cafe-pastry"],
      crowdLevel: "bustling"
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
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
      name: "Café do Mar",
      neighborhood: "Cité Portugaise Ramparts",
      description: "A relaxed oceanfront bistro perched right on the fortified sea wall. Offers fresh calamari, grilled gambas, Italian pastas, and chilled juices while Atlantic waves crash against the ramparts below.",
      tip: "Sit at the outer balcony edge for dramatic Atlantic wave views.",
      badge: "local-favorite",
      bestDishes: [
        "Fried Calamari Platter",
        "Seafood Spaghetti",
        "Fresh Mango Juice"
      ],
      googleRating: 4.5,
      googleReviewCount: 480,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 290,
      theforkRating: 4.4,
      theforkReviewCount: 60,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 480,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+do+Mar+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Sunset around 18:30",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-puccini",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Wood-Fired Pizza",
        "Family Friendly",
        "Casual Italian Dining"
      ],
      foodStyles: ["Italian", "Pizza", "European"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Puccini El Jadida",
      neighborhood: "Centre-Ville",
      description: "A stylish, family-friendly Italian restaurant and pizzeria in downtown El Jadida. Celebrated for authentic wood-fired Neapolitan pizzas, creamy truffle pastas, fresh risottos, and artisan gelato desserts.",
      tip: "Great spot for families with children looking for high-quality Italian food after a beach day.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Puccini Four Cheese",
        "Truffle Tagliatelle",
        "Tiramisu House Special"
      ],
      googleRating: 4.8,
      googleReviewCount: 288,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 110,
      theforkRating: 4.6,
      theforkReviewCount: 45,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 288,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Puccini+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner at 20:00 for a lively family atmosphere",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-el_jadida-snack-aymane-marina",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fishing Harbor Dining", "Gourmet Seafood", "Casual Dining"],
      foodStyles: ["Seafood", "Moroccan", "Fast Food"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "street-food", "terrace"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Aymane Marina",
      neighborhood: "Fishing Harbor & Beach Promenade",
      description: "A famous budget-friendly seafood joint near the fishing port where locals go for generous, ultra-fresh fried and grilled fish platters accompanied by zaalouk, fries, and spicy harissa sauce.",
      tip: "Order the mixed seafood plate for two—generous portions at unbeatable local market prices.",
      badge: "local",
      bestDishes: [
        "Mixed Seafood Grill Platter",
        "Fried Sole & Whiting",
        "Moroccan Tomato Salad"
      ],
      googleRating: 4.8,
      googleReviewCount: 400,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 95,
      theforkRating: 4.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 400,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Aymane+Marina+El+Jadida",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:30 right after fish boats land",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-restaurant-du-port",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fishing Harbor Dining",
        "Waterfront Dining",
        "Seafood Feast"
      ],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
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
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "medina", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant du Port",
      neighborhood: "Port de Pêche",
      description: "An iconic seafood landmark sitting right at the edge of the historic fishing harbor. Renowned for its daily catch brought straight from the docks, grilled sardines, whole sea bass, seafood paella, and wide harbor terrace view.",
      tip: "Request an outdoor harbor table to watch the traditional blue wooden fishing boats navigate in and out.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Atlantic Sardines",
        "Royal Seafood Paella",
        "Catch of the Day Plancha"
      ],
      googleRating: 4.2,
      googleReviewCount: 420,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 165,
      theforkRating: 4.2,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 380,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+du+Port+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 to catch the busiest dockside action",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-el_jadida-ali-baba",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Live Music Terrace", "Upscale Lounge", "Waterfront Dining"],
      foodStyles: ["French", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
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
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "live-music",
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
      name: "Ali Baba (Au Clair de Lune)",
      neighborhood: "Corniche / Boulevard de Suez",
      description: "A long-standing waterfront restaurant and jazz lounge overlooking the El Jadida coastline. Celebrated for French-Mediterranean cuisine, grilled bluefin tuna, tender entrecôte, and evening live musical performances.",
      tip: "Book a table upstairs on the glass-fronted terrace for late dinner with live music and night ocean views.",
      badge: "splurge",
      bestDishes: [
        "Grilled Bluefin Tuna Steak",
        "Classic French Entrecôte",
        "Seafood Cocktail Royale"
      ],
      googleRating: 4.1,
      googleReviewCount: 514,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 168,
      theforkRating: 4.1,
      theforkReviewCount: 55,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 460,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Ali+Baba+Au+Clair+de+Lune+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Dinner around 21:00 when live acoustic musicians perform",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-le-prive",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Fine Dining",
        "Upscale Romantic Dining",
        "Modern Fusion Dining"
      ],
      foodStyles: ["French", "Mediterranean", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "quiet"
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
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "quiet",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Privé Lounge House",
      neighborhood: "Centre-Ville",
      description: "An intimate, high-end French and Mediterranean dining retreat in downtown El Jadida. Acclaimed for its welcoming host, convivial ambiance, refined meat cuts, seafood tapas, and warm chocolate soufflés.",
      tip: "Reservations are essential on Friday and Saturday nights due to limited seating and intimate dining.",
      badge: "hidden-gem",
      bestDishes: [
        "Fillet de Bœuf Rossini",
        "Gambas Pil-Pil Tapas",
        "Warm Chocolate Soufflé"
      ],
      googleRating: 4.4,
      googleReviewCount: 207,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 88,
      theforkRating: 4.4,
      theforkReviewCount: 35,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 195,
      openTime: "18:30",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Prive+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Dinner around 20:30 for a tranquil candlelit experience",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-el_jadida-tchoupa-fish",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fishing Harbor Dining",
        "Casual Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Seafood", "Moroccan", "Fast Food"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "street-food"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Tchoupa (Tchikito Fish)",
      neighborhood: "Medina Gates / Rue Mohamed Smiha",
      description: "A legendary no-frills fish shack near the medina walls where fresh Atlantic catch is fried to order in golden crispy batter. Renowned across the province for bountiful mixed fish plates with spicy tomato dip and warm bread.",
      tip: "Dine in around 12:30 PM to get the very first batch of fresh fish straight out of the morning fryers.",
      badge: "local",
      bestDishes: [
        "Fried Calamari Rings",
        "Golden Whiting & Sole",
        "Spicy Moroccan Fish Sauce"
      ],
      googleRating: 4.3,
      googleReviewCount: 350,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 65,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 310,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Tchiquito+Fish+El+Jadida",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early lunch around 12:15 to avoid long lines",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-logo-sidi-bouzid",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["Beachfront Dining", "Sunset Views", "Waterfront Dining"],
      foodStyles: ["Mediterranean", "Moroccan", "Cafe"],
      cuisineTags: ["cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "sunset",
        "tagine",
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
      name: "Logo : Café & Restaurant",
      neighborhood: "Sidi Bouzid Beach",
      description: "A beloved clifftop cafe-restaurant overlooking Sidi Bouzid bay. Renowned for its sweeping Atlantic views, hearty Moroccan breakfasts, fresh seafood tagines, and sunset coffee rituals on the open-air deck.",
      tip: "Secure a front-row balcony table by 18:00 to witness the vibrant sunset over Sidi Bouzid beach.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Beldi Breakfast Platter",
        "Grilled Seabream with Herbs",
        "Fresh Avocado Milkshake"
      ],
      googleRating: 4.7,
      googleReviewCount: 1768,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 380,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1768,
      openTime: "07:30",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Logo+Cafe+Restaurant+Sidi+Bouzid",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Sunset around 18:30 or morning breakfast at 09:30",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-el_jadida-la-plage-experience",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "snack"],
      experienceTypes: ["Beachfront Dining", "Sunset Views", "Waterfront Dining"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "juice", "sunset", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Plage Expérience",
      neighborhood: "Sidi Bouzid Cliff",
      description: "An elevated seaside lounge and restaurant perched upon the coastal cliffs of Sidi Bouzid. Features contemporary Mediterranean seafood cuisine, fruit smoothies, paellas, and panoramic ocean vistas.",
      tip: "The outdoor cliffside sofa seating is perfect for enjoying sea breezes during golden hour.",
      badge: "local-favorite",
      bestDishes: [
        "Mediterranean Paella Marinera",
        "Grilled Calamari & Tiger Prawns",
        "Red Berry Mojito Mocktail"
      ],
      googleRating: 4.6,
      googleReviewCount: 1170,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 260,
      theforkRating: 4.5,
      theforkReviewCount: 75,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1170,
      openTime: "08:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Plage+Experience+Sidi+Bouzid",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late afternoon around 17:00 leading into sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-requin-bleu",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Fine Seafood", "Casual Dining"],
      foodStyles: ["Seafood", "French", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
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
      tags: ["alcohol", "budget", "dinner", "tagine", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le Requin Bleu",
      neighborhood: "Sidi Bouzid Plage",
      description: "A historic seaside institution in Sidi Bouzid established in 1967. Famous for traditional seafood cooking, fresh oysters from nearby lagoons, grilled swordfish, and relaxed sea-view dining.",
      tip: "Try the fresh oysters accompanied by fresh lemon and vinaigrette, delivered daily from neighboring oyster beds.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Oualidia Oysters",
        "Swordfish Steak Plancha",
        "Seafood Tagine with Lemon"
      ],
      googleRating: 4.2,
      googleReviewCount: 290,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 95,
      theforkRating: 4,
      theforkReviewCount: 30,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 260,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Requin+Bleu+Sidi+Bouzid",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for optimal ocean daylight views",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-sel-de-mer-mazagan",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Fine Seafood", "Upscale Romantic Dining"],
      foodStyles: ["Seafood", "French", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 55,
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card"],
      tags: ["alcohol", "dinner", "fine", "quiet", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Sel de Mer (Mazagan)",
      neighborhood: "Mazagan Beach & Golf Resort",
      description: "An upscale seafood dining experience situated inside the five-star Mazagan Beach Resort. Guests select their fish directly from an iced display before master chefs grill it over coals or bake it in sea salt crust.",
      tip: "Smart casual dress code applies. Reserve at least 24 hours in advance for prime weekend dining slots.",
      badge: "splurge",
      bestDishes: [
        "Sea Salt Crusted Loup de Mer",
        "Grilled Atlantic Lobster",
        "Osetra Caviar and Blinis"
      ],
      googleRating: 4.7,
      googleReviewCount: 340,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 190,
      theforkRating: 4.7,
      theforkReviewCount: 80,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 310,
      openTime: "19:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Sel+de+Mer+Mazagan+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Dinner around 20:00 for the refined oceanfront ambiance",
      averageWaitMinutes: 0
    }
  },

  {
    id: "e-el_jadida-al-firma-mazagan",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Authentic Berber Feast",
        "Traditional Dining",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan", "Berber", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 50,
      isHalal: true,
      halalStatus: "halal-certified",
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
      paymentMethods: ["card"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "fine",
        "pastilla",
        "tagine",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Al Firma (Mazagan)",
      neighborhood: "Mazagan Beach & Golf Resort",
      description: "An enchanting Moroccan dining sanctuary housed within a lavish Berber tent surrounded by organic gardens and olive groves. Features traditional wood-fired tagines, tender mechoui lamb, and live Oud music.",
      tip: "Dine under the starry sky outside the tent in summer for an unforgettable Moroccan Arabian nights setting.",
      badge: "splurge",
      bestDishes: [
        "Slow-Roasted Mechoui Lamb",
        "Organic Garden Vegetable Couscous",
        "Pigeon & Almond Pastilla"
      ],
      googleRating: 4.6,
      googleReviewCount: 280,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 140,
      theforkRating: 4.6,
      theforkReviewCount: 65,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 260,
      openTime: "19:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Al+Firma+Mazagan+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Dinner around 20:30 when the Andalusian musicians begin playing",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-el_jadida-bushra-buddha-bar",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["dinner"],
      experienceTypes: ["Upscale Lounge", "Modern Fusion Dining", "Fine Dining"],
      foodStyles: ["Middle Eastern", "Mediterranean", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 48,
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card"],
      tags: ["alcohol", "dinner", "fine", "late-night", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Bushra by Buddha-Bar",
      neighborhood: "Mazagan Beach & Golf Resort",
      description: "A glamorous Middle Eastern and Levantine fusion concept created by Buddha-Bar. Offers mezze spreads, spiced grilled meats, creative cocktails, and ambient DJ-curated oriental soundtracks.",
      tip: "Perfect for groups wanting to share cold and hot mezze platters with vibrant weekend lounge music.",
      badge: "splurge",
      bestDishes: [
        "Truffle Hummus & Warm Pita",
        "Spiced Lamb Kofta with Tahini",
        "Pistachio Baklava Fusion"
      ],
      googleRating: 4.6,
      googleReviewCount: 210,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 115,
      theforkRating: 4.5,
      theforkReviewCount: 45,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 195,
      openTime: "19:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Bushra+by+Buddha+Bar+Mazagan",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Dinner around 21:00 for the best evening vibe",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-el_jadida-dar-lhout",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Seafood Feast", "Waterfront Dining", "Casual Dining"],
      foodStyles: ["Seafood", "Spanish", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Lhout",
      neighborhood: "Boulevard Al Mouhit / Corniche",
      description: "A popular seaside restaurant blending Moroccan seafood traditions with Spanish coastal culinary touches. Famous for its generous seafood paellas, grilled swordfish, fried squid, and lively oceanfront terrace.",
      tip: "Order the paella for the table; they cook it fresh in traditional wide iron pans with generous shellfish.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Seafood Paella",
        "Grilled Swordfish Steak",
        "Gambas a la Plancha"
      ],
      googleRating: 4.3,
      googleReviewCount: 380,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 35,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 340,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Lhout+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch at 13:30 after a morning walk on the beach promenade",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-el_jadida-pizzeria-ragazzi",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Family Pizza Night",
        "Casual Italian Dining",
        "Family Friendly"
      ],
      foodStyles: ["Italian", "Pizza", "European"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "dinner", "dry", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizzeria Ragazzi",
      neighborhood: "Avenue Mohamed V",
      description: "A cozy and clean Italian trattoria located on Avenue Mohamed V. Well-known among locals and travelers for artisanal thin-crust pizzas, Italian piadinas, classic pasta dishes, and friendly table service.",
      tip: "Try their freshly folded Italian piadinas for a quick, delicious lunch in downtown El Jadida.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Diavola",
        "Penne al Pesto Genovese",
        "Italian Piadina with Prosciutto & Mozzarella"
      ],
      googleRating: 4.3,
      googleReviewCount: 392,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 85,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 360,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Pizzeria+Ragazzi+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 19:30 for prompt seating and fresh baked dough",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-restaurant-l-ocean",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Sunset Views", "Casual Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "sunset",
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
      name: "L'Océan Café & Restaurant",
      neighborhood: "Route de Sidi Bouzid",
      description: "A welcoming cliffside roadside restaurant perched between El Jadida and Sidi Bouzid with expansive views over the Atlantic. Renowned for morning pancake breakfasts, grilled fish, and refreshing seaside coffee.",
      tip: "An ideal pit-stop for breakfast or mint tea while driving along the scenic coastal road to Sidi Bouzid.",
      badge: "hidden-gem",
      bestDishes: [
        "Fresh Moroccan Crepes & Honey",
        "Grilled Whiting with Charmoula",
        "Moroccan Mint Tea Pot"
      ],
      googleRating: 4.3,
      googleReviewCount: 310,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 70,
      theforkRating: 4.1,
      theforkReviewCount: 25,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 280,
      openTime: "06:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=L+Ocean+Route+Sidi+Bouzid+El+Jadida",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early morning at 08:00 for peace and sunrise hues over the ocean",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-el_jadida-la-grillardiere",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Family Friendly", "Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Barbecue", "Moroccan", "Fast Food"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
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
        "late-night",
        "street-food",
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
      name: "La Grillardière El Jadida",
      neighborhood: "Boulevard de Suez / Corniche",
      description: "A popular family steakhouse and grill restaurant located along the city corniche. Specializes in charcoal-grilled beef brochettes, juicy burgers, fresh salads, and a dedicated seafood menu in a modern setting.",
      tip: "Great choice when traveling with children who crave grilled meats, burgers, and crispy fries.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Meat Grill Brochette Platter",
        "Gourmet Beef Burger with Wedges",
        "Chevre Chaud Salad"
      ],
      googleRating: 4.2,
      googleReviewCount: 650,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 130,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 590,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Grillardiere+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 19:30 before peak local family dinner rush",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-el_jadida-mcdonalds-corniche",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Beachfront Dining", "Terrace"],
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["street-food", "late-night", "breakfast", "budget", "terrace"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Corniche",
      neighborhood: "Front de Mer",
      district: "Boulevard de Suez",
      description: "Beachside McDonald's on the El Jadida waterfront with ocean terrace views, McCafé counter, drive-thru, and late-night opening.",
      badge: "local-favorite",
      googleRating: 4.1,
      googleReviewCount: 3900,
      openTime: "08:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard de Suez, Front de Mer, El Jadida",
        lat: 33.2542,
        lng: -8.5028
      },
      googleMapsUrl: "https://maps.google.com/?cid=9605142374859605142",
      reservationContact: "not-available",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-el_jadida-kfc-sela-park",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Retail Park Dining"],
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
      nearCenter: false,
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
      name: "KFC Sela Park",
      neighborhood: "Sela Park",
      district: "Route de Casablanca",
      description: "Modern branch inside Sela Park shopping retail park in El Jadida serving crispy fried chicken, Zinger burgers, and family meal boxes.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1300,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Sela Park El Jadida, Route de Casablanca, El Jadida",
        lat: 33.2425,
        lng: -8.4795
      },
      googleMapsUrl: "https://maps.google.com/?cid=1716253485961716253",
      reservationContact: "not-available",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-el_jadida-burger-king-sela-park",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Drive-Thru", "Family Friendly"],
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
      nearCenter: false,
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
      name: "Burger King Sela Park",
      neighborhood: "Sela Park",
      district: "Route de Casablanca",
      description: "Flame-broiled burgers and drive-thru service at the Sela Park commercial park in El Jadida, offering Whoppers, King fries, and sundaes.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 1550,
      openTime: "11:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Sela Park El Jadida, Route de Casablanca, El Jadida",
        lat: 33.2425,
        lng: -8.4795
      },
      googleMapsUrl: "https://maps.google.com/?cid=2827364596072827364",
      reservationContact: "not-available",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-el_jadida-pizza-hut-centre-ville",
    city: "el_jadida",

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
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["budget", "medina"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Centre Ville",
      neighborhood: "Centre Ville",
      district: "Boulevard de Suez",
      description: "Centrally positioned Pizza Hut on Boulevard de Suez in El Jadida serving pan pizzas, garlic bread, and takeout specials.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1150,
      openTime: "11:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boulevard de Suez, Centre Ville, El Jadida",
        lat: 33.253,
        lng: -8.5035
      },
      googleMapsUrl: "https://maps.google.com/?cid=3938475607183938475",
      reservationContact: "not-available",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  }
];
