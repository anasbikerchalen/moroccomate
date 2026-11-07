/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: AL HOCEIMA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-al_hoceima-1' or 'eat-al_hoceima-restaurant')
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
 *   id: 'e-al_hoceima-[id]',
 *   city: 'al_hoceima',
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

export const al_hoceimaEat: EatListing[] = [
  {
    id: "e-al_hoceima-1",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: [
        "solo",
        "couple",
        "family",
        "friends",
        "seniors",
        "large-groups"
      ],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer"],
      vibeTags: ["maritime", "scenic", "authentic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["tagine", "budget", "terrace", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Club Nautique Al Hoceima",
      neighborhood: "Port d'Al Hoceima",
      description: "Perched directly at the edge of Al Hoceima's vibrant fishing port, this legendary restaurant is renowned for serving some of the freshest Mediterranean seafood in Morocco. Watch the boats unload their morning catch as you dine on expertly grilled sardines, giant prawns, and rich seafood tagines on the waterfront terrace.",
      tip: "Ask for the catch of the day straight off the local boats. Guerrouane wine is also highly recommended if you wish to pair your meal.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Sardines",
        "Friture de Poisson (Mixed Fried Fish)",
        "Seafood Tagine"
      ],
      pros: [
        "Prime location directly on Al Hoceima fishing port with sea views",
        "Fresh daily Atlantic and Mediterranean seafood catches",
        "Licensed to serve wine and beer with meals"
      ],
      cons: [
        "Can get busy during summer lunch rush",
        "Service pace varies during peak hours"
      ],
      googleRating: 3.4,
      googleReviewCount: 380,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 165,
      theforkRating: 3.4,
      theforkReviewCount: 50,
      restaurantguruRating: 3.4,
      restaurantguruReviewCount: 380,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Club+Nautique+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212539981461",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-2",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining", "rooftop"],
      foodStyles: ["Mediterranean", "Seafood", "Moroccan"],
      cuisineTags: ["international", "seafood", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["chic", "scenic", "breathtaking"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 24,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "tagine",
        "sunset",
        "fine",
        "budget",
        "dry",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Espace Miramar",
      neighborhood: "Mirador",
      description: "A premium dining spot offering a dramatic, high-altitude panoramic view of the iconic Quemado Beach and the turquoise bay. The menu is a fine blend of Mediterranean classics, Spanish-style paella, and refined Moroccan Tagines, served in a sophisticated setting.",
      tip: "The outdoor terrace fills up quickly around sunset. Secure a reservation or arrive early for front-row views of Quemado Beach.",
      badge: "splurge",
      bestDishes: [
        "Arroz a la Marinera (Seafood Paella)",
        "Grilled Swordfish",
        "Lamb Tagine with Apricots"
      ],
      pros: [
        "Dramatic panoramic clifftop view of Quemado Bay",
        "Refined presentation and attentive multilingual service",
        "Broad menu spanning seafood paella and Moroccan tagines"
      ],
      cons: [
        "Terrace tables fill up rapidly around sunset",
        "Higher price bracket reflecting the clifftop location"
      ],
      googleRating: 3.8,
      googleReviewCount: 2540,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 320,
      theforkRating: 4.8,
      theforkReviewCount: 250,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2582,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Espace+Miramar+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212539984242",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-3",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Mediterranean", "Cafe & Pastry", "Italian"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["first-timer", "luxury", "nomad"],
      vibeTags: ["creative", "breezy", "trendy"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["cafe-pastry", "breakfast", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L'Artiste Café & Restaurant",
      neighborhood: "Port d'Al Hoceima",
      description: "A stunning, beautifully designed modern café-restaurant located on the port. Celebrated by locals and travelers alike for its artistic interiors, great espresso, elegant breakfasts, and sweeping harbor views.",
      tip: "Their Moroccan Beldi breakfast set paired with fresh fruit juices is considered one of the best breakfast deals in the city.",
      badge: "local-favorite",
      bestDishes: [
        "Beldi Breakfast Platter",
        "Seafood Pasta",
        "Artisanal Crepes"
      ],
      pros: [
        "Modern artistic decor with harbor and port outlook",
        "Generous Beldi breakfast platters and specialty coffee",
        "Fast Wi-Fi and pleasant ambiance for remote working"
      ],
      cons: [
        "Can get noisy during afternoon tea rush",
        "Port parking can be congested on weekends"
      ],
      googleRating: 2.8,
      googleReviewCount: 329,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 110,
      theforkRating: 3,
      theforkReviewCount: 45,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 329,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=L+Artiste+Cafe+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212665811765",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-4",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer"],
      vibeTags: ["modern", "lively", "family-friendly"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant JZA Fish Seafood",
      neighborhood: "City Center",
      description: "A sleek, modern seafood restaurant located in the bustling heart of the city at N° 10 Rue Essaouira. Known for its stylish presentation of deep-sea delicacies, including lobster, crabs, and customized family friture platters cooked to crispy perfection.",
      tip: "The mixed seafood platter with grilled shrimp and calamari is huge and easily serves 2-3 people.",
      badge: "local-favorite",
      bestDishes: [
        "Grand Seafood Friture Platter",
        "Garlic Butter Lobster",
        "Seafood Rice"
      ],
      pros: [
        "Generous mixed friture and seafood platters suitable for families",
        "Centrally located in downtown Al Hoceima",
        "Late-night service operating until 01:00"
      ],
      cons: [
        "No sea view from the city center dining room",
        "Alcohol-free venue"
      ],
      googleRating: 3.7,
      googleReviewCount: 172,
      tripadvisorRating: 2.8,
      tripadvisorReviewCount: 5,
      theforkRating: 3.7,
      theforkReviewCount: 40,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 166,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=JZA+Fish+Seafood+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212623306538",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-5",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["rustic", "industrial", "authentic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
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
      closedDays: [],
      seatingTypes: ["indoor", "street-side"],
      paymentMethods: ["cash"],
      tags: ["budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant du Port",
      neighborhood: "Port d'Al Hoceima",
      description: "A rustic, no-frills legendary seafood tavern right inside the harbor gates. This is where fishermen and true seafood purists come for the ultimate experience of charcoal-roasted sardines, red snapper, and sole straight off the incoming boats.",
      tip: "Pick your fish raw by weight from the ice display right inside the entrance, then tell them if you prefer it grilled or fried.",
      badge: "local",
      bestDishes: [
        "Grilled Sardines with Chermoula",
        "Crispy Squid Rings",
        "Fresh Tomato Salad"
      ],
      pros: [
        "Unbeatable authenticity right by the harbor gates",
        "Choose fresh fish by weight directly from the ice counter",
        "Honest, affordable pricing popular with local fishermen"
      ],
      cons: [
        "Simple, no-frills plastic seating atmosphere",
        "Cash only; cards not accepted"
      ],
      googleRating: 4.1,
      googleReviewCount: 180,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 95,
      theforkRating: 4,
      theforkReviewCount: 60,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 180,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+du+Port+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-6",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Italian", "International", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "luxury", "nomad"],
      vibeTags: ["scenic", "stylish", "comfy"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "pastry",
        "cafe-pastry",
        "late-night",
        "breakfast",
        "palace",
        "budget",
        "dry",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Buena Vista Café",
      neighborhood: "Mirador",
      description: "An elegant café-lounge associated with the DWO Mira Palace Hotel in the panoramic Mirador district. Offers comfortable modern seating, a wide variety of fresh Italian-style pizzas, rich pastas, French pastries, and superb ocean view seating.",
      tip: "Try their local Rif-inspired herbal teas and signature cheese-stuffed pizzas during the evening twilight.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-fired Pizza Margherita",
        "Tagliatelle Carbonara",
        "Espresso Macchiato with Harcha"
      ],
      pros: [
        "Stunning elevated vista overlooking the bay and coastline",
        "Quality wood-fired Italian pizzas and French pastries",
        "Quiet and comfortable seating suitable for families"
      ],
      cons: [
        "A short uphill drive or taxi ride from downtown",
        "Service can slow down during weekend evening crowds"
      ],
      googleRating: 3.8,
      googleReviewCount: 145,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 16,
      theforkRating: 3.8,
      theforkReviewCount: 40,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 211,
      openTime: "08:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Buena+Vista+Cafe+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212539840084",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-7",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Mediterranean", "Moroccan", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional", "seafood"],
      archetypeAffinity: ["culture"],
      vibeTags: ["colonial", "warm", "classic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "unknown",
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["tagine", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "wrong-city"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant El Pueblo",
      neighborhood: "City Center",
      description: "A Spanish-Moroccan restaurant historically cited for Spanish paellas and baked fish recipes in an old colonial-influenced lounge. Note: This venue is misattributed to Al Hoceima and is confirmed located in M’diq/Cabo Negro.",
      tip: "Flagged as wrong city in data audit; refer to Club Nautique or Niebla Marina for authentic paella in Al Hoceima.",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Seafood Paella",
        "Baked Sea Bass with Lemon",
        "Spanish Tortilla de Patatas"
      ],
      pros: [
        "Charming colonial-era ambiance",
        "Authentic baked sea bass and traditional Spanish-style tortilla",
        "Warm hospitality and peaceful dining atmosphere"
      ],
      cons: [
        "Misattributed to Al Hoceima (located in Mdiq/Cabo Negro)",
        "Temporarily hidden from production listings"
      ],
      googleRating: 4.2,
      googleReviewCount: 100,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 185,
      theforkRating: 4.2,
      theforkReviewCount: 185,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 185,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+El+Pueblo+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-8",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "traditional"],
      foodStyles: ["Moroccan", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["nostalgic", "historic", "lively"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["outdoor", "street-side"],
      paymentMethods: ["cash"],
      tags: ["cafe-pastry", "breakfast", "budget", "terrace", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Florido (Hotel Villa Florido)",
      neighborhood: "Plaza del Rif / Town Center",
      description: "Dating back to Al Hoceima's historical Spanish period, this legendary landmark café and hotel sits right on Place du Rif (Plaza del Rif 40). Serving classic Moroccan mint teas, strong espressos, local harcha, and simple breakfast spreads in an atmospheric street terrace.",
      tip: "Sit outside in the historic plaza to enjoy the afternoon sun and observe the rhythmic daily life of Al Hoceima.",
      badge: "local",
      bestDishes: [
        "Beldi Breakfast Set",
        "Moroccan Mint Tea",
        "Spanish Cafe con Leche"
      ],
      pros: [
        "Historic front-row location on Place du Rif plaza",
        "Classic Moroccan mint tea, espresso, and fresh harcha",
        "Vibrant atmosphere perfect for people-watching"
      ],
      cons: [
        "Can get bustling and lively during late afternoon",
        "Cash only payment"
      ],
      googleRating: 3.9,
      googleReviewCount: 110,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 45,
      theforkRating: 3.8,
      theforkReviewCount: 20,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 110,
      openTime: "06:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Villa+Florido+Plaza+del+Rif+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212539840847",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-9",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["panoramic", "breezy", "casual-chic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["juice", "cafe-pastry", "breakfast", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Belle Vue Café & Restaurant",
      neighborhood: "Mirador / Mohamed V",
      description: "Situated at N° 130, Avenue Mohamed V overlooking the Mediterranean, La Belle Vue features panoramic vistas of the bay. Popular for morning coffee, sweet crêpes, refreshing juices, pizzas, and seafood pasta overlooking the waves.",
      tip: "Come for breakfast, desserts, or afternoon mint tea on the outdoor terrace while gazing down at the turquoise Mediterranean currents.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Fruit Parfait",
        "Seafood Tagliatelle",
        "Crepes with Nutella"
      ],
      pros: [
        "Elevated terrace with uninterrupted panoramic sea views",
        "Fresh crêpes, waffles, and revitalizing fruit juices",
        "Relaxed spot for breakfast and sunset tea"
      ],
      cons: [
        "Service pace can vary during peak sunset hours",
        "Terrace tables in high demand in summer"
      ],
      googleRating: 3.6,
      googleReviewCount: 572,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 140,
      theforkRating: 3.6,
      theforkReviewCount: 80,
      restaurantguruRating: 2.6,
      restaurantguruReviewCount: 1245,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Belle+Vue+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-10",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["street-food", "hidden-gem"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer"],
      vibeTags: ["fast-paced", "savory", "authentic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["street-food", "late-night", "budget", "dry", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Snack Romesco",
      neighborhood: "City Center",
      description: "An informal city-center casual joint offering fresh seafood friture, baked fish, and garlic shrimp cazuelas.",
      tip: "Pending physical on-site verification; see Restaurant JZA or Snack Rif for verified downtown seafood.",
      badge: "local",
      bestDishes: [
        "Shrimp Romesco Cazuela",
        "Crispy Fish Friture",
        "Tuna Salad"
      ],
      pros: [
        "Sizzling garlic shrimp Romesco cazuelas cooked to order",
        "Very affordable pricing for genuine fresh seafood",
        "Beloved local hidden gem in downtown"
      ],
      cons: [
        "Unverified digital footprint in central registry",
        "Temporarily hidden from production listings"
      ],
      googleRating: 4.4,
      googleReviewCount: 100,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 190,
      theforkRating: 4.4,
      theforkReviewCount: 190,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 190,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Snack+Romesco+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-11",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family", "business-friendly"],
      mealTypes: ["lunch", "dinner", "brunch", "drinks"],
      experienceTypes: ["casual"],
      foodStyles: ["Mediterranean", "Seafood", "Moroccan"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["waterfront", "contemporary", "vibrant"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "alcohol", "budget", "terrace", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Niebla Marina Restaurant",
      neighborhood: "Port d'Al Hoceima",
      description: "A stylish Mediterranean and seafood restaurant located right on the marina waterfront. Known for scenic harbor views, seafood paella, mixed grilled fish, evening DJ sessions, and tapas with outdoor waterfront terrace seating.",
      tip: "The marina terrace is great for sunset vistas over the boats; pair your visit with fresh grilled calamari or seafood paella.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Paella",
        "Grilled Marina Calamari",
        "Mixed Tapas Platter"
      ],
      pros: [
        "Waterfront terrace overlooking the marina and moored boats",
        "Fresh grilled calamari, tapas, and shared seafood paellas",
        "Licensed to serve alcohol and evening cocktails"
      ],
      cons: [
        "Can get breezy on the waterfront terrace in evening",
        "Port entrance requires a short walk from parking"
      ],
      googleRating: 3.4,
      googleReviewCount: 171,
      tripadvisorRating: 3.3,
      tripadvisorReviewCount: 22,
      theforkRating: 3.4,
      theforkReviewCount: 30,
      restaurantguruRating: 2.1,
      restaurantguruReviewCount: 187,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Niebla+Marina+Restaurant+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212808646614",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-12",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["warm", "authentic", "traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
      isHalal: true,
      halalStatus: "unknown",
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "pastilla", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "wrong-city"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Marhaba",
      neighborhood: "City Center",
      description: "A homestyle restaurant recognized for traditional Moroccan culinary heritage. Note: Major northern establishment is situated in Nador/El Jebha rather than central Al Hoceima.",
      tip: "See Restaurant Sidi Bousaid or Mirazule for verified authentic Moroccan tagines in Al Hoceima.",
      badge: "local-favorite",
      bestDishes: [
        "Lamb Tagine with Prunes",
        "Rif-style Chicken Pastilla",
        "Friday Couscous"
      ],
      pros: [
        "Richly spiced slow-cooked lamb tagines with prunes",
        "Authentic Friday couscous and chicken pastilla",
        "Family-friendly and welcoming local hosts"
      ],
      cons: [
        "Misattributed to Al Hoceima center (primary venue in Nador)",
        "Temporarily hidden from production listings"
      ],
      googleRating: 4.3,
      googleReviewCount: 80,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 150,
      theforkRating: 4.3,
      theforkReviewCount: 150,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 150,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Marhaba+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-13",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["International", "Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["elegant", "coastal", "scenic"],
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
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["breakfast", "tagine", "fine", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Al Khozama (Mercure Quemado Resort)",
      neighborhood: "Quemado Beach / Sraghna",
      description: "The signature cliffside hotel restaurant inside the Mercure Quemado Resort at Place Mohamed V, overlooking Quemado Beach. Guests enjoy breathtaking panoramas of the bay, romantic candlelit dinners, fine Moroccan tagines, and fresh Mediterranean seafood.",
      tip: "Request a window or terrace seat overlooking the beach during twilight when the surrounding cliffs are illuminated.",
      badge: "splurge",
      bestDishes: [
        "Seafood Tagine",
        "Oven-roasted Seabream",
        "Mediterranean Salmon Steak"
      ],
      pros: [
        "Direct clifftop perspective over Quemado Beach bay",
        "Upscale hotel dining with full wine and cocktail list",
        "Complimentary resort parking and valet"
      ],
      cons: [
        "Higher price point reflecting 4-star resort standards",
        "Smart casual dress encouraged in the evening"
      ],
      googleRating: 3.7,
      googleReviewCount: 180,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 120,
      theforkRating: 3.7,
      theforkReviewCount: 50,
      restaurantguruRating: 3.7,
      restaurantguruReviewCount: 180,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Mercure+Quemado+Resort+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212539842200",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-14",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["street-food"],
      foodStyles: ["Grill & BBQ", "Moroccan"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["adventure", "first-timer"],
      vibeTags: ["fast-paced", "lively", "simple"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4.5,
      isHalal: true,
      halalStatus: "unknown",
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
      closedDays: [],
      seatingTypes: ["indoor", "street-side"],
      paymentMethods: ["cash"],
      tags: ["street-food", "late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Oualid",
      neighborhood: "City Center",
      description: "An informal street food and snack stall offering grilled kefta sandwiches, chicken shawarmas, and fries.",
      tip: "See Restaurant Snack Rif on Rue Alaouine for verified downtown charcoal grills and sandwiches.",
      badge: "local",
      bestDishes: [
        "Double Kefta Sandwich",
        "Spicy Chicken Shawarma",
        "Rif Seasoned Fries"
      ],
      pros: [
        "Generous double kefta sandwiches with signature house hot sauce",
        "Open until 02:30 AM for reliable late-night bites",
        "Very budget-friendly pricing"
      ],
      cons: [
        "Unverified digital footprint in commercial registry",
        "Temporarily hidden from production listings"
      ],
      googleRating: 4.5,
      googleReviewCount: 250,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 420,
      theforkRating: 4.5,
      theforkReviewCount: 420,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 420,
      openTime: "11:00",
      closeTime: "02:30",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Oualid+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-15",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Seafood", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "seafood", "international"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["warm", "panoramic", "casual"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Sidi Bousaid",
      neighborhood: "Mirador",
      description: "A scenic Moroccan and Mediterranean restaurant located in Al Hoceima offering Moroccan family dishes, tajines, and fresh Mediterranean fish.",
      tip: "The mixed grill meat platter and traditional seasoned salads are great for groups.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Grill Meat Platter",
        "Seafood Tagine",
        "Rif Tagine de Poisson"
      ],
      pros: [
        "Hearty Moroccan family platters and clay pot tagines",
        "Fresh grilled fish and homemade seasonal salads",
        "Quiet neighborhood setting with parking nearby"
      ],
      cons: ["Modest traditional decor", "Cash only"],
      googleRating: 4,
      googleReviewCount: 45,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 30,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 45,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Sidi+Bousaid+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-16",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer"],
      vibeTags: ["casual", "kid-friendly", "cozy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "unknown",
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizzeria La Mama",
      neighborhood: "City Center",
      description: "A historic pizzeria originally noted in 1990s guidebooks on Rue de Paris. It has no verified modern operational storefront and is preserved here for historical reference.",
      tip: "Flagged as possibly closed in data audit; visit Buena Vista Café or The Palms for verified wood-fired pizzas.",
      badge: "local-favorite",
      bestDishes: ["Seafood Pizza", "Lasagne al Forno", "Vegetarian Calzone"],
      pros: [
        "Historic mention in vintage travel guides",
        "Crispy crust pizza recipes",
        "Pocket-friendly pricing"
      ],
      cons: [
        "Ceased active commercial operations (defunct listing)",
        "Temporarily hidden from production listings"
      ],
      googleRating: 4,
      googleReviewCount: 80,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 160,
      theforkRating: 4,
      theforkReviewCount: 160,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 160,
      openTime: "11:30",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Pizzeria+La+Mama+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-17",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["international", "cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["adventure", "luxury", "nomad"],
      vibeTags: ["breathtaking", "breezy", "relaxed"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "juice",
        "cafe-pastry",
        "late-night",
        "breakfast",
        "budget",
        "dry"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Panorama",
      neighborhood: "Cala Bonita Overlook",
      description: "Perched above Cala Bonita Beach, this open-air café and fast food venue offers coastline views. Ideal for espressos, desserts, and fresh juices.",
      tip: "Come around sunset. The panoramic views of the sea crashing into the rocky cliffs under the pink sky are spectacular.",
      badge: "local-favorite",
      bestDishes: [
        "Avocado-Nut Milkshake",
        "Espresso Macchiato",
        "Traditional Harcha with Honey"
      ],
      pros: [
        "Dramatic clifftop perch overlooking Cala Bonita Beach",
        "Fresh fruit milkshakes and mint tea at sunset",
        "Open terrace with fresh Mediterranean sea breezes"
      ],
      cons: [
        "Gets very windy on the terrace during brisk weather",
        "Cash only"
      ],
      googleRating: 3.8,
      googleReviewCount: 85,
      tripadvisorRating: 3.7,
      tripadvisorReviewCount: 35,
      theforkRating: 3.7,
      theforkReviewCount: 20,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 85,
      openTime: "07:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Panorama+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-18",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["street-food", "traditional"],
      foodStyles: ["Grill & BBQ", "Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["rustic", "smoky", "simple"],
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
      closedDays: [],
      seatingTypes: ["indoor", "street-side"],
      paymentMethods: ["cash"],
      tags: ["street-food", "late-night", "budget", "dry", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Snack Rif",
      neighborhood: "Rue Alaouine / City Center",
      description: "A genuine local restaurant and snack located on Rue Alaouine specializing in fresh seafood, charcoal-grilled fish, and skewers in an authentic downtown setting.",
      tip: "Pick your fish fresh or order the grilled brochettes on open coals for a very authentic Rif flavor.",
      badge: "local",
      bestDishes: [
        "Grilled Fresh Sardines",
        "Minced Kefta Skewers",
        "Rif Spicy Salsa"
      ],
      pros: [
        "Charcoal-grilled kefta brochettes and fresh fish on open coals",
        "Authentic downtown Rue Alaouine street vibe",
        "Late hours running until 01:30 AM"
      ],
      cons: ["Small street-front shop with basic seating", "Cash only"],
      googleRating: 3.4,
      googleReviewCount: 48,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 25,
      theforkRating: 3.4,
      theforkReviewCount: 15,
      restaurantguruRating: 3,
      restaurantguruReviewCount: 48,
      openTime: "11:30",
      closeTime: "01:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Rif+Rue+Alaouine+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-19",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["International", "Italian"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["retro", "cheerful", "american"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Molly's Diner",
      neighborhood: "Mirador",
      description: "A fast-food American diner located at 63VF+M78 in Al Hoceima's Mirador area. Features burgers (Maxi Chicken Burger), tacos, crispy fries, pizza, and milkshakes with outdoor seating and scenic views.",
      tip: "Order the Maxi Chicken Burger or tacos with outdoor seating to enjoy the breeze.",
      badge: "local-favorite",
      bestDishes: ["Maxi Chicken Burger", "French Tacos", "Classic Milkshake"],
      pros: [
        "American-style burgers, tacos, and thick milkshakes",
        "Outdoor seating with pleasant views over Mirador area",
        "Card payment accepted"
      ],
      cons: [
        "Service can slow during peak evening burger runs",
        "Alcohol-free venue"
      ],
      googleRating: 3.3,
      googleReviewCount: 37,
      tripadvisorRating: 3,
      tripadvisorReviewCount: 15,
      theforkRating: 3,
      theforkReviewCount: 10,
      restaurantguruRating: 2.2,
      restaurantguruReviewCount: 37,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Mollys+Diner+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "+212666997356",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-20",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      archetypeAffinity: ["adventure", "first-timer"],
      vibeTags: ["coastal", "relaxed", "peaceful"],
      crowdLevel: "balanced"
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "outdoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "budget", "dry", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Beach Club Tala Youssef Restaurant",
      neighborhood: "Plage Tala Youssef",
      description: "A seaside beachfront dining venue and beach club located on Plage Tala Youssef, roughly 5 km west of central Al Hoceima. Enjoy dining right by the water with fresh Moroccan seafood, grilled sole, shrimp tagines, and jet ski views.",
      tip: "If you want to escape the crowded city center beaches in the summer, this tranquil spot is perfect.",
      badge: "hidden-gem",
      bestDishes: [
        "Tagine de Crevettes",
        "Grilled Local Red Snapper",
        "Friture de Poisson"
      ],
      pros: [
        "Direct beachfront dining right on the sands of Tala Youssef",
        "Fresh shrimp tagines and grilled Mediterranean fish",
        "Tranquil escape from city center crowds"
      ],
      cons: [
        "Located ~5 km outside central Al Hoceima (taxi required)",
        "Seasonal crowds during peak July-August weekends"
      ],
      googleRating: 4.1,
      googleReviewCount: 75,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 30,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 75,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Plage+Tala+Youssef+Al+Hoceima",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-21",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "snack"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["International", "Italian", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["coastal", "breezy", "lively"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
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
      closedDays: [],
      seatingTypes: ["outdoor", "terrace", "indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["beachfront", "pizza", "breakfast", "terrace", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Palms Calabonita",
      neighborhood: "Calabonita",
      description: "Situated right on the golden sands of Plage Cala Bonita, The Palms is a popular seaside café-restaurant offering front-row Mediterranean views. Features an extensive menu of stone-baked pizzas, loaded fries, pasta, burgers, and breakfast platters with a spacious beachfront terrace.",
      tip: "Grab an outdoor umbrella table in the morning for breakfast before the beach fills up with swimmers.",
      badge: "local-favorite",
      bestDishes: [
        "Loaded Cheesy Fries",
        "Pizza Margherita",
        "Avocado Toast with Poached Eggs"
      ],
      pros: [
        "Direct beachfront terrace on the sand of Cala Bonita",
        "Wide variety of casual meals, pizzas, and breakfasts",
        "Convenient beach parking on-site"
      ],
      cons: [
        "Can get very crowded during peak July and August summer afternoons",
        "Service pace can slow down when beach traffic surges"
      ],
      googleRating: 3.4,
      googleReviewCount: 383,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 40,
      theforkRating: 3.4,
      theforkReviewCount: 20,
      restaurantguruRating: 3.4,
      restaurantguruReviewCount: 380,
      openTime: "08:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=The+Palms+Calabonita+Al+Hoceima",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539841282",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/palms.alhoceima"
    }
  },

  {
    id: "e-al_hoceima-22",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo", "nature-lover"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional", "hidden-gem"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      archetypeAffinity: ["adventure", "budget"],
      vibeTags: ["rustic", "shaded", "authentic"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace", "indoor"],
      paymentMethods: ["cash"],
      tags: ["seafood", "camping", "budget", "outdoor", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Camping Calabonita",
      neighborhood: "Calabonita",
      description: "Located under the pine-shaded entrance of the historic Calabonita municipal campground right above the cove, this unpretentious local restaurant serves classic Rif-style grilled sardines, fried whiting, seasonal salads, and bubbling fish tagines at very budget-friendly prices.",
      tip: "Order the mixed fried fish platter with freshly baked bread and mint tea straight after a swim.",
      badge: "local",
      bestDishes: [
        "Charcoal Grilled Sardines",
        "Friture de Poisson Calabonita",
        "Moroccan Tomato & Pepper Salad"
      ],
      pros: [
        "Shaded outdoor tables just steps from the sand",
        "Honest local seafood pricing without tourist markups",
        "Relaxed camper-friendly atmosphere"
      ],
      cons: [
        "Simple plastic chairs and rustic decor",
        "Cash only with no card terminal"
      ],
      googleRating: 3.9,
      googleReviewCount: 65,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 18,
      theforkRating: 3.8,
      theforkReviewCount: 10,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 65,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Camping+Calabonita+Restaurant+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-23",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["snack", "afternoon-tea", "late-night"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry"],
      cuisineTags: ["cafe-pastry"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["sweet", "family-friendly", "refreshing"],
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
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace", "indoor"],
      paymentMethods: ["cash"],
      tags: ["ice-cream", "dessert", "late-night", "budget", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Tula Ice Calabonita",
      neighborhood: "Calabonita",
      description: "A refreshing artisanal gelato parlour and sweet cafe situated along the Calabonita beach access. Popular with families and evening strollers for its Italian-style ice creams, freshly made Belgian waffles, Nutella crepes, and cold pressed seasonal fruit juices.",
      tip: "Try the local roasted almond and pistachio gelato combination while walking down to the beach.",
      badge: "hidden-gem",
      bestDishes: [
        "Pistachio & Stracciatella Gelato",
        "Nutella & Banana Crepe",
        "Panache Fruit Smoothie"
      ],
      pros: [
        "High quality Italian-style gelato flavours made daily",
        "Warm crepes and waffles made on demand",
        "Open late until 01:00 AM for evening dessert runs"
      ],
      cons: [
        "Limited indoor seating during busy summer nights",
        "Cash only"
      ],
      googleRating: 4.8,
      googleReviewCount: 35,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 10,
      theforkRating: 4.5,
      theforkReviewCount: 5,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 35,
      openTime: "10:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Tula+Ice+Cala+Bonita+Al+Hoceima",
      reservationMethod: ["whatsapp", "walk-in"],
      reservationContact: "+212611972876",
      whatsappNumber: "+212611972876",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-24",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "snack", "afternoon-tea"],
      experienceTypes: ["street-food", "cafes-tea"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["budget", "nomad"],
      vibeTags: ["breezy", "scenic", "casual"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["panoramic", "tea", "sunset", "budget", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Kiosque Panoramique Calabonita",
      neighborhood: "Calabonita",
      description: "Perched along the scenic walkway overlooking Cala Bonita cove, this elevated kiosk-café (Kiosque 8) offers unobstructed panoramic sights of the Mediterranean waters. Serves freshly squeezed orange juice, Moroccan mint tea, paninis, and quick snacks with breezy outdoor cliff seating.",
      tip: "Stop here for a refreshing mint tea or espresso around 17:00 as the golden hour reflects off the cove.",
      badge: "local",
      bestDishes: [
        "Moroccan Mint Tea with Sheeba",
        "Toasted Cheese & Tuna Panini",
        "Fresh Orange Juice"
      ],
      pros: [
        "Elevated bird-eye perspective over the azure waters of Cala Bonita",
        "Affordable mint tea and quick snacks",
        "Gentle sea breezes on hot summer afternoons"
      ],
      cons: [
        "Outdoor seating only, vulnerable to windy conditions",
        "Limited menu restricted to light snacks and beverages"
      ],
      googleRating: 4.1,
      googleReviewCount: 45,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 12,
      theforkRating: 4,
      theforkReviewCount: 8,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 45,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Corniche+Calabonita+Kiosque+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-25",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["panoramic", "relaxing", "coastal"],
      crowdLevel: "balanced"
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["terrace", "indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["breakfast", "beldi", "terrace", "sea-view", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Restaurant Mirazule",
      neighborhood: "Moroviejo",
      description: "Anchored right on the coastal Corniche Morro Viejo promenade (63RG+4CV), Mirazule is celebrated for its sweeping panoramic ocean views, generous Moroccan Beldi breakfasts with golden msemmen and fluffy harcha, and relaxing sea-breeze lunches overlooking the Mediterranean.",
      tip: "Order their complete Beldi breakfast accompanied by freshly brewed spiced mint tea while watching morning boats on the bay.",
      badge: "local-favorite",
      bestDishes: [
        "Beldi Breakfast Platter with Msemmen & Amlou",
        "Khlii with Fried Eggs",
        "Seafood Rice & Grilled Calamari"
      ],
      pros: [
        "Direct sea views along the Corniche Morro Viejo promenade",
        "Renowned for authentic Moroccan breakfast spreads with fresh bread",
        "Friendly and prompt service"
      ],
      cons: [
        "Terrace seats face high demand on sunny weekend mornings",
        "Pastas are average; stick to traditional breakfasts and grills"
      ],
      googleRating: 4.3,
      googleReviewCount: 52,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 15,
      theforkRating: 4.2,
      theforkReviewCount: 10,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 52,
      openTime: "07:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Mirazule+Al+Hoceima",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-26",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["rooftop", "casual"],
      foodStyles: ["International", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["trendy", "vibrant", "youthful"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["rooftop", "terrace", "outdoor", "indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["rooftop", "burger", "late-night", "crispy-chicken", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Vicio Rooftop Al Hoceima",
      neighborhood: "Moroviejo",
      description: "A trendy, modern rooftop destination located high on Corniche Morro Viejo with panoramic views over Quemado Bay. Renowned among summer visitors and locals for crispy golden fried chicken, loaded smash burgers, french tacos, and craft mocktails.",
      tip: "Head up right before sunset to secure prime ledge seating for sunset photos overlooking the Mediterranean.",
      badge: "local-favorite",
      bestDishes: [
        "Crispy Tender Chicken Strips",
        "Vicio Smash Double Burger",
        "Cheese-Loaded Spicy Fries"
      ],
      pros: [
        "Rooftop terrace overlooking Corniche Morro Viejo and the bay",
        "Signature crispy chicken recipe cooked fresh to order",
        "Open until 02:00 AM for late-night cravings"
      ],
      cons: [
        "Can get very loud with energetic music during summer peak hours",
        "Service times can extend during evening dinner rushes"
      ],
      googleRating: 3.9,
      googleReviewCount: 88,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 20,
      theforkRating: 3.8,
      theforkReviewCount: 15,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 88,
      openTime: "13:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Vicio+Rooftop+Corniche+Morro+Viejo+Al+Hoceima",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-27",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "seniors"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["culture", "budget"],
      vibeTags: ["scenic", "laid-back", "authentic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4.5,
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
      closedDays: [],
      seatingTypes: ["terrace", "outdoor", "indoor"],
      paymentMethods: ["cash"],
      tags: ["terrace", "mint-tea", "sea-view", "budget", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Corniche Morro Viejo",
      neighborhood: "Moroviejo",
      description: "A quintessential coastal promenade café situated directly along the Morro Viejo Corniche. An essential local stop for hot espressos, Moroccan mint tea, fresh fruit juices, and light pastries while taking in uninterrupted cliff-edge vistas of the Mediterranean sea.",
      tip: "Combine a late-afternoon stroll along Corniche Morro Viejo with a pitstop here for tea and sunflower seeds.",
      badge: "local",
      bestDishes: [
        "Moroccan Mint Tea",
        "Café au Lait with Harcha",
        "Fresh Avocado & Almond Shake"
      ],
      pros: [
        "Direct cliffside perspective over the blue Mediterranean",
        "Great value mint tea and coffee along the walking trail",
        "Relaxing sea breezes and open terrace seating"
      ],
      cons: [
        "Cash only",
        "Food menu is limited to light breakfast pastries and simple snacks"
      ],
      googleRating: 4,
      googleReviewCount: 42,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 14,
      theforkRating: 4,
      theforkReviewCount: 8,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 42,
      openTime: "07:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Corniche+Morro+Viejo+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-al_hoceima-28",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family", "business-friendly"],
      mealTypes: ["lunch", "dinner", "brunch", "drinks"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["boho-chic", "coastal", "relaxed"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 19,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["terrace", "outdoor", "indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["beach-club", "seafood", "paella", "terrace", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "T-Beach Restaurant and Lounge",
      neighborhood: "Tala Youssef",
      description: "A chic beachfront restaurant and lounge located directly on Plage Tala Youssef in the Tafrasst Labhar sector. Featuring stylish boho-wooden decor, open-air beach cabanas, fresh Mediterranean grilled catches, seafood pastas, and refreshing craft mocktails steps from the waves.",
      tip: "Reserve a seafront cabana table for a late lunch around 14:00 and spend the afternoon swimming in the bay.",
      badge: "hidden-gem",
      bestDishes: [
        "Grilled Mediterranean Sea Bass",
        "Seafood Linguine with King Prawns",
        "T-Beach Paella Marinera"
      ],
      pros: [
        "Trendy barefoot-luxury ambiance directly on the beach",
        "Freshly caught sea bass and generous seafood paella",
        "Card payments accepted and private parking available"
      ],
      cons: [
        "Requires a taxi or car drive from central Al Hoceima (~5 km)",
        "Higher pricing compared to city-center snack stalls"
      ],
      googleRating: 4.2,
      googleReviewCount: 94,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 25,
      theforkRating: 4,
      theforkReviewCount: 15,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 94,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=T-Beach+Restaurant+Lounge+Tala+Youssef+Al+Hoceima",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212808605333",
      whatsappNumber: "+212808605333",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/t_beach_restaurant"
    }
  },

  {
    id: "e-al_hoceima-29",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "large-groups"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan", "International"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["resort", "festive", "scenic"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["terrace", "outdoor", "indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["poolside", "alcohol", "seafood", "live-music", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Chafarinas Beach Hotel",
      neighborhood: "Tala Youssef",
      description: "The signature waterfront restaurant of Chafarinas Beach Hotel situated directly on the shores of Tala Youssef. Providing a full resort dining experience with an outdoor swimming pool terrace, fresh Mediterranean fish tajines, paellas, evening cocktails, and live music dinners.",
      tip: "Check their Instagram for weekend live music dinners featuring Andalusian and Rif artists.",
      badge: "splurge",
      bestDishes: [
        "Royal Seafood Tagine",
        "Grilled Swordfish Steak",
        "Moroccan Pastilla au Poulet"
      ],
      pros: [
        "Idyllic bay views overlooking Tala Youssef and the sea",
        "Serves wine, beer, and evening cocktails with meals",
        "Regular summer live music performances and entertainment"
      ],
      cons: [
        "Access road from Al Hoceima has winding coastal curves",
        "Peak summer event nights can be energetic and loud"
      ],
      googleRating: 3.8,
      googleReviewCount: 148,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 32,
      theforkRating: 3.8,
      theforkReviewCount: 20,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 148,
      openTime: "08:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Chafarinas+Beach+Hotel+Tala+Youssef+Al+Hoceima",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212808518378",
      whatsappNumber: "+212702098484",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/chafarinasbeachhotel"
    }
  },

  {
    id: "e-al_hoceima-30",
    city: "al_hoceima",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "snack"],
      experienceTypes: ["casual", "traditional", "street-food"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      archetypeAffinity: ["adventure", "budget"],
      vibeTags: ["rustic", "sunny", "unpretentious"],
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
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["beach-shack", "sardines", "fresh-fish", "budget", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pavillon de Plage Thara Youssef",
      neighborhood: "Tala Youssef",
      description: "An authentic wooden beach pavilion and seaside snack shack (62QF+7W) on the sands of Plage Tala Youssef. Perfect for relaxed beachgoers craving hot grilled sardines, fried calamari rings, tomato chermoula salads, and hot mint tea served right at beachside umbrella tables.",
      tip: "Ask the grill master for the daily catch sardine plate seasoned with cumin and coarse sea salt.",
      badge: "local",
      bestDishes: [
        "Grilled Fresh Sardine Skewers",
        "Fried Calamari Plate",
        "Moroccan Beldi Salad with Olive Oil"
      ],
      pros: [
        "Feet-in-the-sand dining directly on Tala Youssef beach",
        "Super-fresh Mediterranean sardines roasted over charcoal",
        "Very budget-friendly pricing for beachfront seafood"
      ],
      cons: [
        "Simple beach hut setup with plastic seating",
        "Cash only; open mainly during swimming season and fair weather"
      ],
      googleRating: 4.3,
      googleReviewCount: 46,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 15,
      theforkRating: 4,
      theforkReviewCount: 8,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 46,
      openTime: "10:30",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Thara+Youssef+Beach+Pavillon+Al+Hoceima",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  }
];
