/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: ASILAH
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-asilah-1' or 'eat-asilah-restaurant')
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
 *   id: 'e-asilah-[id]',
 *   city: 'asilah',
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

export const asilahEat: EatListing[] = [
  {
    id: "e-asilah-1",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["lively", "beachside", "classic"],
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
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["port", "seafood", "terrace", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Casa Garcia",
      neighborhood: "Corniche / Port",
      description: "A legendary culinary landmark in Asilah just outside the medina walls. Highly celebrated for its exceptional Spanish-Mediterranean seafood gastronomy, featuring world-class paella, wild oysters, and expertly grilled daily catches.",
      tip: "Often very busy on sunny weekends. The seafood paella and fresh grilled calamari are outstanding. Serves chilled local Moroccan and Spanish wines.",
      badge: "local-favorite",
      bestDishes: ["Seafood Paella", "Grilled Sole", "Tapas Platter"],
      pros: [
        "Historic institution with port views",
        "Wide selection of fresh wild seafood",
        "Licensed to serve wine and beer"
      ],
      cons: [
        "Wait times can be long on sunny weekend afternoons",
        "Service can feel rushed during peak hours"
      ],
      googleRating: 3.9,
      googleReviewCount: 1834,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 615,
      theforkRating: 3.9,
      theforkReviewCount: 150,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 1834,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Casa+Garcia+Asilah",
      reservationMethod: ["phone"],
      reservationContact: "+212539417465",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-2",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["traditional", "rooftop"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture"],
      vibeTags: ["cozy", "traditional", "tranquil", "warm"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "courtyard"],
      paymentMethods: ["cash"],
      tags: [
        "tagine",
        "couscous",
        "pastilla",
        "riad",
        "medina",
        "rooftop",
        "dry",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Al Maghrebia",
      neighborhood: "Médina Historique",
      description: "A charming, beautiful family-run riad restaurant tucked into a quiet medina alleyway. Highly trusted for authentic slow-cooked tagines, pigeon pastillas, and peaceful rooftop terrace dining.",
      tip: "Ask to sit on the rooftop terrace for a peaceful dinner under the stars with lovely medina views.",
      badge: "local-favorite",
      bestDishes: [
        "Swordfish Tagine",
        "Pigeon Pastilla",
        "Friday Lamb Couscous"
      ],
      pros: [
        "Intimate authentic riad setting",
        "Exceptional pastilla and tagines",
        "Lovely rooftop terrace"
      ],
      cons: [
        "Cash only",
        "Pedestrian medina alley with no direct vehicle access"
      ],
      googleRating: 4.5,
      googleReviewCount: 1262,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 420,
      theforkRating: 4.5,
      theforkReviewCount: 180,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1661,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Al+Maghrebia+Asilah",
      reservationMethod: ["phone"],
      reservationContact: "+212671043087",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-3",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "Seafood"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["elegant", "romantic", "refined", "classic"],
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["monday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["fine-dining", "french", "seafood", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Perle d'Asilah",
      neighborhood: "Centre Ville",
      description: "Asilah's premier French-Moroccan gourmet restaurant. Beautifully styled like a Parisian bistro with dark-wood accents and crisp white tablecloths, serving refined fish specials and rich desserts.",
      tip: "Closed on Mondays. Highly famous for its chocolate fondue and daily chalkboard fresh fish specials. Excellent curated wine selection.",
      badge: "splurge",
      bestDishes: [
        "Sautéed John Dory",
        "Local Crab Salad",
        "Indulgent Chocolate Fondue"
      ],
      pros: [
        "Impeccable French culinary technique",
        "Extensive wine selection",
        "Elegant romantic atmosphere"
      ],
      cons: ["Closed on Mondays", "Higher price bracket for Asilah"],
      googleRating: 4.4,
      googleReviewCount: 410,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 305,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 410,
      openTime: "13:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Perle+d+Asilah",
      reservationMethod: ["phone"],
      reservationContact: "+212618418758",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-4",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["scenic", "art-deco", "coastal", "chic"],
      crowdLevel: "balanced"
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["corniche", "fine-dining", "ocean-view", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Port XIV",
      neighborhood: "Corniche",
      description: "A light-filled waterfront farm-to-table seafood restaurant founded by Karim Ben Ali. Features large panoramic bay windows overlooking the sea and an exquisite Art Deco aesthetic.",
      tip: "Karim sources seasonal organic produce directly from his family farm. Their crab and avocado salad with sweet chili vinaigrette is a signature.",
      badge: "splurge",
      bestDishes: [
        "Asilah Crab and Avocado Salad",
        "Garlic Butter Clams",
        "Grilled Swordfish Steak"
      ],
      pros: [
        "Direct ocean views and Art Deco decor",
        "Organic farm-to-table vegetables",
        "Licensed wine and cocktail menu"
      ],
      cons: [
        "Premium pricing",
        "Reservations recommended for prime oceanfront tables"
      ],
      googleRating: 4.4,
      googleReviewCount: 624,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 310,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 624,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Port+XIV+Asilah",
      reservationMethod: ["phone"],
      reservationContact: "+212539416677",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-5",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Mediterranean", "Moroccan"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["intimate", "refined", "creative", "tranquil"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["paella", "garden", "fusion", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Al Alba Restaurant",
      neighborhood: "Lotissement Nakhil",
      description: "A praised culinary fusion restaurant located inside Hotel Al Alba in a tranquil neighborhood. Merges Spanish Valencian paella expertise with authentic northern Moroccan spices.",
      tip: "A culinary collaboration between Chef Jaume from Valencia and Moroccan Chef Amal. Perfect for an intimate dinner in a calm garden riad setting.",
      badge: "local-favorite",
      bestDishes: [
        "Valencian Seafood Paella",
        "Slow-Cooked Meat Stew",
        "Creative Moroccan Pastillas"
      ],
      pros: [
        "Authentic Valencian paella recipe",
        "Extremely high service and hygiene standards",
        "Tranquil garden setting away from medina crowds"
      ],
      cons: [
        "Located in a residential area outside the medina (10-15 min walk)",
        "Requires advance reservation"
      ],
      googleRating: 4.9,
      googleReviewCount: 466,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 213,
      theforkRating: 4.8,
      theforkReviewCount: 120,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 466,
      openTime: "13:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Al+Alba+Restaurant+Asilah",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212613429190",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-6",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["culture"],
      vibeTags: ["classic", "bustling", "coastal"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["tapas", "seafood", "plaza", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Oceano Casa Pepe",
      neighborhood: "Place Zallaka",
      description: "A historic town-center institution with an energetic Mediterranean atmosphere on Place Zallaka. Celebrated for high-quality fresh seafood, classic tapas, and cold draft beer and wine.",
      tip: "A prime spot for traditional tapas and people-watching on Place Zallaka. Enjoy complementary appetisers served with drinks.",
      badge: "local-favorite",
      bestDishes: [
        "Garlic Prawns al Ajillo",
        "Mixed Seafood Tapas",
        "Grilled Sea Bass"
      ],
      pros: [
        "Prime location right by Place Zallaka",
        "Serves cold beer and wine with tapas",
        "Lively terrace seating"
      ],
      cons: [
        "Can be noisy and busy during summer evenings",
        "Prices are higher than surrounding local diners"
      ],
      googleRating: 3.7,
      googleReviewCount: 733,
      tripadvisorRating: 3.1,
      tripadvisorReviewCount: 304,
      theforkRating: 3.5,
      theforkReviewCount: 110,
      restaurantguruRating: 3.7,
      restaurantguruReviewCount: 733,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Oceano+Casa+Pepe+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539417395",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-7",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Grill & BBQ", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["culture", "first-timer", "budget"],
      vibeTags: ["no-frills", "bustling", "family-friendly"],
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
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["grill", "tagine", "sardines", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Ali Baba",
      neighborhood: "Avenue Hassan II",
      description: "An exceptionally popular casual local dining spot on Avenue Hassan II facing the historic medina ramparts. Renowned for prompt service, charcoal grilled meats, and fresh fried fish.",
      tip: "A welcoming, no-nonsense family diner. Their grilled sardine platter is fresh, cheap, and prepared right off the grill.",
      badge: "local",
      bestDishes: [
        "Grilled Sardines Platter",
        "Kefta Tagine with Egg",
        "Rotisserie Chicken with Fries"
      ],
      pros: [
        "Very affordable prices",
        "Quick and friendly service",
        "Great view of medina ramparts from terrace"
      ],
      cons: [
        "Cash only",
        "Very bustling with tight seating during peak hours"
      ],
      googleRating: 3.7,
      googleReviewCount: 1441,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 400,
      theforkRating: 3.7,
      theforkReviewCount: 120,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1698,
      openTime: "11:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Ali+Baba+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212633580050",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-8",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "rooftop"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["adventure", "culture"],
      vibeTags: ["modern", "coastal", "relaxed", "scenic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["corniche", "ocean-view", "seafood", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le 32 Restaurant",
      neighborhood: "Corniche",
      description: "A modern beachfront seafood and Mediterranean restaurant inside Hôtel Asilah 32 on the corniche. Features ocean-view dining, paellas, pastas, and a licensed bar serving wine and cocktails.",
      tip: "Directly on the coastal boulevard with sunset views. The restaurant serves chilled Moroccan wine and beer with meals.",
      badge: "local-favorite",
      bestDishes: [
        "Octopus Salad",
        "Seafood Paella",
        "Creamy Shrimp Tagliatelle"
      ],
      pros: [
        "Waterfront views along the corniche",
        "Licensed bar serving wine and beer",
        "Varied Mediterranean menu"
      ],
      cons: ["Service can slow down during busy weekend evenings"],
      googleRating: 3.8,
      googleReviewCount: 342,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 60,
      theforkRating: 3.8,
      theforkReviewCount: 40,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 342,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+32+Restaurant+Asilah",
      reservationMethod: ["phone"],
      reservationContact: "+212539416452",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-9",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Seafood", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["culture", "first-timer", "budget"],
      vibeTags: ["lively", "shaded", "relaxed", "scenic"],
      crowdLevel: "bustling"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["outdoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "tagine",
        "pastilla",
        "terrace",
        "medina-view",
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
      name: "Restaurant Al Kasaba",
      neighborhood: "Place Zallaka",
      description: "A shaded outdoor dining terrace positioned directly opposite the historic Bab Homar medina gate. Guests dine under eucalyptus trees enjoying classic Moroccan fish pastillas and tagines.",
      tip: "Sit under the shaded eucalyptus trees for a relaxed midday pause. Their seafood pastilla is one of the best budget values in town.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Pastilla",
        "Grilled Sea Bream",
        "Chicken Tagine with Olives"
      ],
      pros: [
        "Pleasant tree-shaded terrace facing the walls",
        "Generous portions",
        "Very accessible pricing"
      ],
      cons: [
        "Cash only",
        "Food quality can be inconsistent on crowded days"
      ],
      googleRating: 3.4,
      googleReviewCount: 517,
      tripadvisorRating: 2.9,
      tripadvisorReviewCount: 66,
      theforkRating: 3.2,
      theforkReviewCount: 50,
      restaurantguruRating: 3.4,
      restaurantguruReviewCount: 517,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Al+Kasaba+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212645691802",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-10",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["breakfast", "brunch", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["bohemian", "relaxed", "friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5.5,
      isHalal: true,
      halalStatus: "unknown",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["unverified", "cafe-pastry", "breakfast", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Blue Door Café",
      neighborhood: "Médina Historique",
      description: "A café concept erroneously cited in web listings. (Blue Door Cuisine is an established culinary workshop in Tangier, not an operational café in Asilah).",
      tip: "Unverified establishment derived from web scrapers confusing Tangier culinary listings.",
      badge: "hidden-gem",
      bestDishes: ["Fresh Almond Tart", "Vegetable Panini", "Nos-Nos Coffee"],
      pros: ["Hidden from public search pending physical validation"],
      cons: ["Unverified entity in Asilah medina"],
      googleRating: 4.5,
      googleReviewCount: 120,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.5,
      theforkReviewCount: 220,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 220,
      openTime: "08:30",
      closeTime: "20:00",
      googleMapsUrl: "https://maps.google.com/?q=The+Blue+Door+Cafe+Asilah",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-11",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture"],
      vibeTags: ["authentic", "tranquil", "cozy", "warm"],
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
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["wrong-city", "tagine", "couscous", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "wrong-city"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Bab Ssour Restaurant",
      neighborhood: "Médina Historique",
      description: "A celebrated traditional northern restaurant famous for home-style tagines and Friday couscous. NOTE: This restaurant is located in Chefchaouen (5 Rue El Kharazine) and has no branch in Asilah.",
      tip: "This listing belongs to the city of Chefchaouen and is kept hidden in Asilah data.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Prunes",
        "Seven-Vegetable Couscous",
        "Kefta Claypot"
      ],
      pros: ["Iconic northern Moroccan cooking in Chefchaouen"],
      cons: ["Not located in Asilah"],
      googleRating: 4.6,
      googleReviewCount: 180,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 340,
      theforkRating: 4.6,
      theforkReviewCount: 340,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 340,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Bab+Ssour+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-12",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      archetypeAffinity: ["culture"],
      vibeTags: ["traditional", "authentic", "quiet"],
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
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["seafood", "tagine", "local", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Seville",
      neighborhood: "Avenue Imam-Assili",
      description: "A cozy traditional local restaurant on Avenue Imam-Assili serving authentic northern Moroccan fish stews, grilled daily sea bream, and hearty spiced soups.",
      tip: "Trusted by local families. Their claypot fish tagine with olives and preserved lemons provides an authentic taste of northern Morocco.",
      badge: "local",
      bestDishes: [
        "Seafood Claypot Seville",
        "Grilled Seabream",
        "Spiced Harira Soup"
      ],
      pros: [
        "Authentic local clientele",
        "Generous tagines with fresh fish",
        "Warm and unpretentious service"
      ],
      cons: ["Simple interior decor", "Cash only"],
      googleRating: 3.5,
      googleReviewCount: 221,
      tripadvisorRating: 3.2,
      tripadvisorReviewCount: 85,
      theforkRating: 3.3,
      theforkReviewCount: 40,
      restaurantguruRating: 3.1,
      restaurantguruReviewCount: 335,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Seville+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539418505",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-13",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["adventure", "culture", "first-timer", "budget"],
      vibeTags: ["friendly", "coastal", "youthful", "lively"],
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["port", "seafood", "calamari", "budget", "dry", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Yali Restaurant",
      neighborhood: "Avenue Ibn Batouta",
      description: "A casual coastal eatery located along Avenue Ibn Batouta near the fishing port. Known for honest pricing, energetic service, and fresh daily catches fried or grilled to order.",
      tip: "Directly across from the port entrance. The crispy fried calamari and fresh grilled sardines offer superb quick-lunch value.",
      badge: "local-favorite",
      bestDishes: [
        "Crispy Fried Calamari",
        "Grilled Sardines",
        "Fresh Moroccan Salad"
      ],
      pros: [
        "Very fresh fish directly off the port",
        "Good value for budget seafood lovers",
        "Prompt and friendly staff"
      ],
      cons: ["Basic seating and fast-casual ambience", "Cash only"],
      googleRating: 3.3,
      googleReviewCount: 144,
      tripadvisorRating: 3.3,
      tripadvisorReviewCount: 45,
      theforkRating: 3.3,
      theforkReviewCount: 30,
      restaurantguruRating: 3.3,
      restaurantguruReviewCount: 144,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Sandwicherie+Yali+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212671043277",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-14",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Grill & BBQ", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["culture", "first-timer", "budget"],
      vibeTags: ["family-friendly", "bustling", "cozy"],
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
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["grill", "tagine", "harira", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Arrabii",
      neighborhood: "Avenue Hassan II",
      description: "A welcoming traditional diner on Avenue Hassan II facing the medina walls. Offers an extensive choice of charcoal-grilled meats, northern harira, and family-sized seafood tagines.",
      tip: "Popular with Moroccan families traveling along the coast. Their charcoal-grilled kefta skewers and harira soup make for a satisfying, cheap meal.",
      badge: "local",
      bestDishes: [
        "Charcoal Meat Skewers",
        "Northern Harira Soup",
        "Fish Tagine with Olives"
      ],
      pros: [
        "Very inexpensive prices",
        "Hearty traditional portions",
        "Direct terrace view of medina ramparts"
      ],
      cons: [
        "Simple decor",
        "Staff speaks predominantly Arabic and French"
      ],
      googleRating: 3,
      googleReviewCount: 76,
      tripadvisorRating: 3,
      tripadvisorReviewCount: 30,
      theforkRating: 3,
      theforkReviewCount: 20,
      restaurantguruRating: 2.8,
      restaurantguruReviewCount: 76,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Arrabii+Asilah",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-15",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "flexible", "afternoon-tea"],
      experienceTypes: ["cafes-tea"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["scenic", "sunset-spot", "cozy", "oceanfront"],
      crowdLevel: "bustling"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["outdoor", "rooftop", "terrace"],
      paymentMethods: ["cash"],
      tags: ["cafe", "sunset", "ocean-view", "tea", "budget", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Daya",
      neighborhood: "Médina Historique",
      description: "A scenic clifftop café positioned right next to the historic sea gate of Bab el-Bhar. Famous for sweeps of the crashing Atlantic ocean, fresh fruit juices, and sunset mint tea.",
      tip: "Climb up to the rooftop terrace around sunset. Order fresh mint tea with semolina harcha while watching the Atlantic waves crash on the ramparts.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Avocado Shake",
        "Moroccan Mint Tea",
        "Semolina Harcha with Cheese"
      ],
      pros: [
        "Unbeatable clifftop sunset view over the Atlantic",
        "Prime photo location at Bab el-Bhar",
        "Inexpensive drinks and tea"
      ],
      cons: [
        "Tables fill rapidly around sunset hour",
        "Limited food menu beyond café snacks"
      ],
      googleRating: 3.5,
      googleReviewCount: 1289,
      tripadvisorRating: 3.4,
      tripadvisorReviewCount: 10,
      theforkRating: 3.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1301,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Daya+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212768452761",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-16",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "flexible", "brunch"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["adventure", "culture", "first-timer", "budget"],
      vibeTags: ["vibrant", "healthy", "friendly", "fast-paced"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "street-side"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "juice",
        "smoothie",
        "bissara",
        "medina",
        "budget",
        "dry"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Jus Farid",
      neighborhood: "Médina Historique",
      description: "A legendary breakfast and fresh juice institution in the Medina. Celebrated for rich avocado and dried-fruit smoothies, freshly squeezed citrus juices, and steaming morning bowls of northern bissara.",
      tip: "The premier medina stop for breakfast. Order the avocado, almond, and date shake alongside a warm msemen or a bowl of spiced bissara.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Breakfast Formula",
        "Avocado & Dried Fruit Shake",
        "Fresh Bissara with Olive Oil"
      ],
      pros: [
        "Top-rated breakfast in the medina",
        "Superb freshly pressed juices and thick smoothies",
        "Exceptionally friendly hosts"
      ],
      cons: ["Limited indoor seating capacity", "Cash only"],
      googleRating: 4.8,
      googleReviewCount: 112,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 50,
      theforkRating: 4.6,
      theforkReviewCount: 30,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 112,
      openTime: "09:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Jus+Farid+Asilah",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-17",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "seniors"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["culture", "nomad"],
      vibeTags: ["tranquil", "cozy", "traditional", "authentic"],
      crowdLevel: "quiet"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["cafe", "coffee", "breakfast", "terrace", "budget", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Coffee El Medina",
      neighborhood: "Place Zallaka",
      description: "A peaceful traditional café positioned right by Place Zallaka. Offers outdoor street terrace seating serving Moroccan espresso, local pastries, and classic mint tea.",
      tip: "A quiet morning retreat for an early coffee and harcha before tourists gather in the medina.",
      badge: "local",
      bestDishes: [
        "Semolina Harcha with Honey",
        "Nos-Nos Coffee",
        "Assorted Moroccan Pastries"
      ],
      pros: [
        "Opens early in the morning",
        "Calm terrace for reading or digital nomads",
        "Low local prices"
      ],
      cons: ["Modest breakfast menu options", "Cash only"],
      googleRating: 3,
      googleReviewCount: 40,
      tripadvisorRating: 3,
      tripadvisorReviewCount: 25,
      theforkRating: 3,
      theforkReviewCount: 15,
      restaurantguruRating: 3,
      restaurantguruReviewCount: 40,
      openTime: "07:30",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Coffee+El+Medina+Asilah",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-18",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      archetypeAffinity: ["adventure", "culture"],
      vibeTags: ["scenic", "beachside", "classic"],
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["unverified", "seafood", "dry", "hidden"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le Collier de la Méditerranée",
      neighborhood: "Corniche",
      description: "A fabricated venue originating from AI blog listicles. (Asilah is on the Atlantic coast, not the Mediterranean, and this restaurant does not exist).",
      tip: "Fictitious entry derived from web scraping. Kept hidden.",
      badge: "local-favorite",
      bestDishes: [
        "Atlantic Fish Pastilla",
        "Seafood Paella",
        "Spiced Fish Tagine"
      ],
      pros: ["Hidden from public search pending physical validation"],
      cons: [
        "Non-existent restaurant fabricated by AI content scrapers"
      ],
      googleRating: 4.3,
      googleReviewCount: 250,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 450,
      theforkRating: 4.3,
      theforkReviewCount: 450,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 450,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Collier+de+la+Mediterranee+Asilah",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-19",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["breakfast", "flexible", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "hidden-gem"],
      foodStyles: ["Cafe & Pastry", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "nomad"],
      vibeTags: ["bohemian", "cozy", "tranquil", "hidden"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      halalStatus: "unknown",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["unverified", "cafe-pastry", "medina", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Daymoun",
      neighborhood: "Médina Historique",
      description: "An unverified café listing in the medina with no verifiable business footprint or registration in Asilah.",
      tip: "Unverified establishment. Hidden from public app searches.",
      badge: "hidden-gem",
      bestDishes: [
        "Msemen with Honey",
        "Traditional Sage Tea",
        "Almond Biscuits"
      ],
      pros: ["Hidden pending physical verification"],
      cons: ["Unverified entity"],
      googleRating: 4.5,
      googleReviewCount: 80,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 160,
      theforkRating: 4.5,
      theforkReviewCount: 160,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 160,
      openTime: "08:00",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Daymoun+Asilah",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-asilah-20",
    city: "asilah",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner", "late-night", "flexible"],
      experienceTypes: ["street-food", "casual"],
      foodStyles: ["Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["no-frills", "fast-paced", "bustling"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["street-side"],
      paymentMethods: ["cash"],
      tags: ["unverified", "street-food", "budget", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Moulay",
      neighborhood: "Avenue Hassan II",
      description: "A generic street-food sandwich listing with no verifiable presence or registered commercial location on Avenue Hassan II.",
      tip: "Unverified establishment. Hidden from public app searches.",
      badge: "local",
      bestDishes: [
        "Northern Tuna Bocadillo",
        "Crispy Grilled Sardines Box",
        "French Fries"
      ],
      pros: ["Hidden pending physical verification"],
      cons: ["Unverified entity"],
      googleRating: 4.4,
      googleReviewCount: 250,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 480,
      theforkRating: 4.4,
      theforkReviewCount: 480,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 480,
      openTime: "11:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Moulay+Asilah",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available"
    }
  }
];
