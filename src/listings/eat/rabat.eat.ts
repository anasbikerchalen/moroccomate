/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: RABAT
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-rabat-1' or 'eat-rabat-restaurant')
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
 *   id: 'e-rabat-[id]',
 *   city: 'rabat',
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

export const rabatEat: EatListing[] = [
  {
    id: "e-rabat-1",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "foodie", "first-timer"],
      vibeTags: ["authentic", "traditional", "bustling", "family-friendly"],
      crowdLevel: "bustling"
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
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Naji",
      neighborhood: "Bab El Had / Centre Ville",
      description: "A beloved traditional restaurant designed to mimic a classic Moroccan home. It is immensely popular for serving generous portions of authentic classics such as chicken tride, lamb tagines, and couscous.",
      tip: "Famous for its high-altitude mint tea pouring show. Friday couscous is exceptional but gets crowded.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Tride",
        "Beef Tagine with Prunes",
        "Friday Seven-Vegetable Couscous"
      ],
      pros: [
        "Generous portion sizes of classic Moroccan tagines, couscous, and rfissa/tride.",
        "Energetic, cheerful traditional ambiance with staff in traditional attire.",
        "Great value for money right next to the medina gates."
      ],
      cons: [
        "Peak hours (especially Friday lunch and weekend evenings) bring long queues.",
        "The dining room can be loud and bustling during rush hours."
      ],
      googleRating: 4.4,
      googleReviewCount: 4650,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 1150,
      theforkRating: 4.2,
      theforkReviewCount: 320,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 4650,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II, Bab El Had, Rabat 10000, Morocco",
        lat: 34.01918,
        lng: -6.83758
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+Naji+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537262626",
      website: "not-available",
      instagram: "not-available",
      customStory: "Dar Naji was created as an ode to classic Moroccan home hospitality. Styled with colorful zellige tiles, carved cedar woodwork, and comfortable banquette seating, it is beloved by local families and visitors alike for authentic feasting and dramatic high-pour mint tea.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-rabat-2",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Waterfront Dining", "Romantic Sunset"],
      foodStyles: ["French", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["scenic-lover", "romantic", "nightlife"],
      vibeTags: ["scenic", "romantic", "riverfront", "chic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 32,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "medina",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Dhow",
      neighborhood: "Bouregreg Marina",
      description: "A distinctive floating restaurant and lounge on a three-masted wooden boat docked near the historic Kasbah of the Udayas. Specializes in French-Mediterranean bistro dishes and fresh seafood.",
      tip: "Try to book an outdoor deck table at sunset for stunning, unhindered views of the ancient Kasbah.",
      badge: "splurge",
      bestDishes: [
        "Grilled Atlantic Sea Bass",
        "Fillet Mignon",
        "Chocolate Lava Cake"
      ],
      pros: [
        "Unbeatable vantage point facing the historic ramparts of Kasbah des Oudayas.",
        "Romantic upper-deck sunset lounge with gentle river breezes.",
        "Full bar service with cocktails and live lounge music."
      ],
      cons: [
        "Prices reflect the prime location rather than culinary boundary-pushing.",
        "Deck seating can be chilly on breezy river evenings."
      ],
      googleRating: 4.2,
      googleReviewCount: 2850,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 980,
      theforkRating: 4.1,
      theforkReviewCount: 410,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 2850,
      openTime: "12:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Quai de la Douane, Avenue Al Marsa, Rabat 10000, Morocco",
        lat: 34.02985,
        lng: -6.83478
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Dhow+Rabat",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212537702302",
      website: "not-available",
      instagram: "not-available",
      customStory: "A hand-crafted wooden merchant boat permanently moored along the Bouregreg riverbank right beneath the monumental Kasbah of the Udayas. Le Dhow blends nautical elegance with sunset views over the river and the Salé skyline, serving French-Mediterranean bistro cuisine and evening cocktails.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 15,
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-rabat-3",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Garden restaurant with live music"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "foodie", "slow-traveler"],
      vibeTags: ["charming", "peaceful", "riad", "intimate"],
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
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
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
        "riad",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar El Medina",
      neighborhood: "Médina Ancienne",
      description: "A charming, peaceful restaurant inside a beautifully restored riad patio in the old medina. It offers an escape from the busy market streets with delicious homestyle Moroccan cuisine.",
      tip: "A great respite after shopping in the Medina. Try their amazing lemon chicken tagine.",
      badge: "local-favorite",
      bestDishes: [
        "Lemon Chicken Tagine",
        "Kefta Meatball Tagine",
        "Moroccan Cooked Salads"
      ],
      pros: [
        "Peaceful courtyard garden respite away from the lively souk commotion.",
        "Genuinely warm, homestyle cooking with fresh market produce.",
        "Intimate, ornate riad architecture with authentic plasterwork and fountain."
      ],
      cons: [
        "Tucked inside a pedestrian medina alleyway that can be tricky to spot on first visit.",
        "Cash only payments."
      ],
      googleRating: 4.5,
      googleReviewCount: 920,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 610,
      theforkRating: 4.5,
      theforkReviewCount: 180,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 920,
      openTime: "12:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "3 Rue Benjelloun, Souk Sebbat, Medina, Rabat 10030, Morocco",
        lat: 34.02534,
        lng: -6.83682
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+El+Medina+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537706339",
      website: "not-available",
      instagram: "not-available",
      customStory: "Set inside an authentic, tranquil medina riad patio just off the bustling leather and textile souks, Dar El Medina offers a sanctuary of calm. Guests dine around tiled fountain courtyards on delicate family recipes including sweet-and-savory tagines and traditional pastilla.",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-rabat-4",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Traditional Dining", "Romantic Sunset", "Fine Dining"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "foodie", "romantic"],
      vibeTags: ["historic", "intimate", "cozy", "traditional"],
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
        "budget",
        "dinner",
        "dry",
        "fine",
        "medina",
        "pastilla",
        "riad",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Zaki",
      neighborhood: "Médina Ancienne",
      description: "Tucked deep within a quiet alley of Rabat's bustling medina, Dar Zaki is a beautifully designed, historic riad restaurant serving excellent Moroccan specialties with powdered-sugar pastillas and tagines.",
      tip: "Difficult to find on foot, so look out for the signages or ask locals for directions to the alleyway.",
      badge: "local-favorite",
      bestDishes: [
        "Pigeon Pastilla",
        "Lamb Tagine with Caramelized Figs",
        "Mint Tea and Moroccan Pastries"
      ],
      pros: [
        "Exquisite pastilla with crisp pastry layers and rich filling.",
        "Intimate salon ambiance with personal hospitality from the hosts.",
        "Quiet, authentic residential quarter within the old walled city."
      ],
      cons: [
        "Advance booking is strongly recommended due to limited table capacity.",
        "No alcohol served."
      ],
      googleRating: 4.6,
      googleReviewCount: 850,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 680,
      theforkRating: 4.6,
      theforkReviewCount: 150,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 850,
      openTime: "12:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "23 Rue Moulay Brahim, Medina, Rabat 10000, Morocco",
        lat: 34.02641,
        lng: -6.83725
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+Zaki+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537707692",
      website: "not-available",
      instagram: "not-available",
      customStory: "Named after owner Zaki, this historic riad home within the northern Medina alleys has been lovingly turned into one of Rabat's most hospitable traditional eateries. Celebrated for slow-simmered lamb with figs and tender pigeon pastilla prepared with old-world finesse.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-rabat-5",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Fine Seafood", "Romantic Sunset"],
      foodStyles: ["Seafood", "French", "Mediterranean", "Gourmet"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "foodie", "business-friendly"],
      vibeTags: ["luxurious", "refined", "garden-view", "tranquil"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 49,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      tags: ["alcohol", "dinner", "fine", "sunset", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Golden Fish",
      neighborhood: "Souissi",
      description: "A sophisticated seafood-centric fine dining restaurant situated in the lush park-like gardens of the five-star Sofitel Rabat Jardin des Roses. Merges premium Atlantic catches with exquisite French culinary techniques.",
      tip: "Highly recommended to reserve an outdoor patio seat overlooking the eucalyptus gardens for a quiet lunch.",
      badge: "splurge",
      bestDishes: [
        "Atlantic Grilled Sea Bass",
        "Seafood Risotto",
        "Saint-Jacques Scallops"
      ],
      pros: [
        "Fresh Atlantic seafood prepared with high-level French culinary craftsmanship.",
        "Lush garden terrace setting surrounded by eucalyptus and rose gardens.",
        "Impeccable five-star hotel service and curated wine selection."
      ],
      cons: [
        "Higher price point typical of luxury hotel fine dining.",
        "Located in suburban Souissi, requiring a taxi ride from the Medina center."
      ],
      googleRating: 4.5,
      googleReviewCount: 420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 290,
      theforkRating: 4.6,
      theforkReviewCount: 180,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 420,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Sofitel Rabat Jardin des Roses, Impasse Souissi, Rabat 10000, Morocco",
        lat: 34.00412,
        lng: -6.82855
      },
      googleMapsUrl: "https://maps.google.com/?q=Golden+Fish+Sofitel+Rabat",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212537675656",
      website: "not-available",
      instagram: "not-available",
      customStory: "Located in the tranquil 17-acre botanical park of Sofitel Jardin des Roses in the prestigious Souissi diplomatic district, Golden Fish is an upscale seafood haven. Executive chefs pair pristine Atlantic fish with contemporary French gourmet techniques.",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-6",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Garden restaurant with live music",
        "Cafe"
      ],
      foodStyles: ["Mediterranean", "French", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture-seeker", "nightlife", "business-friendly"],
      vibeTags: ["jazz-lounge", "lively", "garden-patio", "urban"],
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
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
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
        "live-music",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Bistrot du Pietri",
      neighborhood: "Hassan",
      description: "A vibrant urban bistro operating within the boutique Pietri Urban Hotel. Celebrated for its fresh world/international menu, green garden courtyard seating, and bi-weekly live jazz and acoustic music performances.",
      tip: "A true local favorite for jazz lovers. Check their schedule in advance to book a table for live music evenings.",
      badge: "local-favorite",
      bestDishes: [
        "Duck Breast with Fig Sauce",
        "Tapas Sharing Board",
        "Daily Bistro Chef Special"
      ],
      pros: [
        "Renowned live jazz and blues sessions on Tuesday and Friday nights.",
        "Charming shaded garden terrace in the heart of the Hassan quarter.",
        "Solid bistro menu with duck breast, charcuterie boards, and full bar service."
      ],
      cons: [
        "Music nights require early reservations as tables fill fast.",
        "Indoor section can get crowded and warm on performance evenings."
      ],
      googleRating: 4.3,
      googleReviewCount: 1380,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 520,
      theforkRating: 4.3,
      theforkReviewCount: 210,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1380,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "4 Rue Tobrouk, Place Pietri, Hassan, Rabat 10000, Morocco",
        lat: 34.01752,
        lng: -6.83271
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Bistrot+du+Pietri+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537207474",
      website: "not-available",
      instagram: "not-available",
      customStory: "Located in the courtyard of the boutique Hôtel Pietri Urban, Le Bistrot du Pietri is a celebrated cultural and gastronomic institution in central Rabat. Renowned for bi-weekly live jazz concerts, an expansive leafy terrace, and a cosmopolitan French-Mediterranean bistro menu with fine wines.",
      viewType: "garden",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-7",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "couple"],
      mealTypes: ["breakfast", "lunch", "brunch"],
      experienceTypes: ["Cafe", "Casual Dining", "Modern Fusion Dining"],
      foodStyles: ["Mediterranean", "Healthy", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["foodie", "first-timer", "digital-nomad"],
      vibeTags: ["trendy", "tropical", "brunch", "stylish"],
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
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "juice", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Tropic",
      neighborhood: "Agdal",
      description: "A hip, trendy, tropical-inspired bistro in Rabat's modern Agdal district. Widely loved for healthy brunch plates, organic bowls, and outstanding specialty coffee in an Instagram-ready setting.",
      tip: "Owned by Pepe, the owner of Sa Caleta. Their weekend breakfast and pancakes draw large, stylish local crowds.",
      badge: "local-favorite",
      bestDishes: [
        "Eggs Benedict on Brioche",
        "Matcha Latte",
        "Açai Smoothie Bowl"
      ],
      pros: [
        "Superb weekend brunch spread featuring avocado toasts, pancakes, and açai bowls.",
        "Bright, cheerful botanical interior design ideal for casual meetings.",
        "Quality specialty coffee and freshly pressed juices."
      ],
      cons: [
        "Popularity on weekends leads to 15-20 minute waits for a table.",
        "No reservations accepted; walk-in only."
      ],
      googleRating: 4.4,
      googleReviewCount: 1450,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 220,
      theforkRating: 4.2,
      theforkReviewCount: 110,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1450,
      openTime: "08:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "Angle Avenue Fal Ould Oumeir et Rue Oukaimeden, Agdal, Rabat 10090, Morocco",
        lat: 33.99981,
        lng: -6.85042
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Tropic+Rabat",
      reservationMethod: ["none"],
      reservationContact: "+212537674067",
      website: "not-available",
      instagram: "not-available",
      customStory: "Founded by the culinary team behind Sa Caleta, El Tropic brought modern international cafe culture and tropical design aesthetics to Agdal. Filled with lush greenery and bamboo accents, it serves creative brunch plates, artisan coffee, and wholesome grain bowls to Rabat's stylish crowd.",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 15,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-8",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Middle Eastern", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["foodie", "culture-seeker", "budget-conscious"],
      vibeTags: ["authentic", "generous", "bustling", "levantine"],
      crowdLevel: "bustling"
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "dinner", "dry", "late-night", "street-food", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Yamal Acham",
      neighborhood: "Agdal",
      description: "Regarded as Rabat's absolute best Syrian restaurant. Extremely popular with locals for its incredibly authentic mezes, massive portions of shawarma, and flawlessly spiced Levantine mixed grills.",
      tip: "It gets very crowded. Booking is highly advised, and make sure to start your feast with their incredible meze platters.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Syrian Shawarma",
        "Creamy Hummus with Spiced Beef",
        "Levantine Mixed Grill Skewers"
      ],
      pros: [
        "Exceptional value for money with large, hearty Levantine portions.",
        "Authentic mezes including muhammara, smooth hummus, and freshly baked pita.",
        "Consistent culinary quality and friendly, rapid service."
      ],
      cons: [
        "Highly sought-after during lunch and dinner; table turnaround is fast-paced.",
        "Strictly dry restaurant (no alcohol served)."
      ],
      googleRating: 4.5,
      googleReviewCount: 3800,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 820,
      theforkRating: 4.4,
      theforkReviewCount: 390,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 3800,
      openTime: "11:30",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "7 Avenue Al Abtal, Agdal, Rabat 10090, Morocco",
        lat: 33.99824,
        lng: -6.85215
      },
      googleMapsUrl: "https://maps.google.com/?q=Yamal+Acham+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537775555",
      website: "not-available",
      instagram: "not-available",
      customStory: "Widely praised as the quintessential Levantine dining address in Rabat, Yamal Acham is staffed by Syrian chefs crafting authentic Damascus and Aleppo culinary heritage. From hot and cold meze spreads to rotisserie shawarma and charcoal-grilled kofta, portions are massive and prices accessible.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15,
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-rabat-9",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["breakfast"],
      experienceTypes: [
        "Cozy casual family-run Moroccan eatery",
        "Casual Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan", "Bakery"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget-conscious", "culture-seeker", "foodie"],
      vibeTags: ["street-food", "traditional", "unpretentious", "authentic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 2.5,
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
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "pastry",
        "street-food"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Bouchra",
      neighborhood: "Médina Ancienne",
      description: "A highly famous, beloved street food stall in the heart of the Old Medina. Serving freshly-made authentic Moroccan griddle flatbreads, round batbouts, and comforting grain specialities.",
      tip: "Order the rghaif (stuffed msemen with cheese or herbs) and a hot batbout spread with kiri and honey.",
      badge: "hidden-gem",
      bestDishes: [
        "Rghaif (Stuffed Msemen)",
        "Batbout with Kiri & Honey",
        "Belboula (Barley Harcha)"
      ],
      pros: [
        "Incredible, freshly made traditional Moroccan griddle pastries at pocket change prices.",
        "Watch the master breadmakers knead, stretch, and pan-fry msemen and batbout.",
        "The most authentic Moroccan breakfast experience in the ancient medina."
      ],
      cons: [
        "Very small stall with minimal casual bench seating; primarily takeaway or quick standing bite.",
        "No air conditioning, no card payments."
      ],
      googleRating: 4.7,
      googleReviewCount: 240,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 95,
      theforkRating: 4.6,
      theforkReviewCount: 45,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 240,
      openTime: "07:30",
      closeTime: "21:00",
      exactAddressAndCoordinates: {
        address: "Rue Souika, Medina, Rabat 10030, Morocco",
        lat: 34.02415,
        lng: -6.83612
      },
      googleMapsUrl: "https://maps.google.com/?q=Chez+Bouchra+Rabat+Medina",
      reservationMethod: ["none"],
      reservationContact: "+212661000000",
      website: "not-available",
      instagram: "not-available",
      customStory: "A legendary street food counter located along the vibrant Rue Souika in the heart of Rabat's historic medina. Chez Bouchra is celebrated across the capital for griddle-cooked savory rghaif (stuffed msemen with spiced herbs or cheese), hot semolina harcha, and sweet mint tea prepared right before your eyes.",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-rabat-10",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "lunch"],
      experienceTypes: ["Cafe", "Casual Dining", "Tranquil Dining"],
      foodStyles: ["Mediterranean", "Healthy", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["digital-nomad", "foodie", "slow-traveler"],
      vibeTags: ["boho-chic", "calm", "work-friendly", "healthy"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "medina", "wifi"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Boho Café",
      neighborhood: "Centre-Ville",
      description: "A brightly-lit, highly popular bohemian café and eatery in Rabat's city center. Renowned for its mix of healthy Western brunch staples and classic Moroccan breakfast options with great Wi-Fi.",
      tip: "A phenomenal, quiet work-spot for digital nomads with plenty of power plugs and excellent acai bowls.",
      badge: "hidden-gem",
      bestDishes: [
        "Avocado Toast with Poached Eggs",
        "Organic Açai Bowls",
        "Waffles with Nutella"
      ],
      pros: [
        "Digital-nomad friendly with plentiful power outlets and high-speed Wi-Fi.",
        "Wholesome, health-conscious menu with avocado sourdough, chia puddings, and matcha.",
        "Relaxed, non-rushed environment ideal for reading or quiet work sessions."
      ],
      cons: [
        "Seating is cozy and can fill up by late morning with laptop users.",
        "Prices are slightly higher than typical downtown Moroccan tea salons."
      ],
      googleRating: 4.5,
      googleReviewCount: 680,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 190,
      theforkRating: 4.4,
      theforkReviewCount: 85,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 680,
      openTime: "08:30",
      closeTime: "20:30",
      exactAddressAndCoordinates: {
        address: "5 Rue Patrice Lumumba, Hassan / Centre Ville, Rabat 10000, Morocco",
        lat: 34.01828,
        lng: -6.83389
      },
      googleMapsUrl: "https://maps.google.com/?q=Boho+Cafe+Rabat",
      reservationMethod: ["none"],
      reservationContact: "+212537202357",
      website: "not-available",
      instagram: "not-available",
      customStory: "Located in the heritage center along Rue Patrice Lumumba, Boho Café is a light-filled haven for remote creatives, students, and travelers. With natural wood tables, macramé details, reliable high-speed fiber Wi-Fi, and an artisanal menu of sourdough toasts and smoothie bowls, it brings a contemporary community spirit to the downtown grid.",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-11",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["couple", "friends", "solo", "family"],
      mealTypes: ["afternoon-tea"],
      experienceTypes: ["Cafe", "Traditional Dining", "Sunset Views"],
      foodStyles: ["Cafe", "Moroccan", "Bakery"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "scenic-lover", "culture-seeker"],
      vibeTags: ["historic", "panoramic", "traditional", "iconic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4.5,
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
      seatingTypes: ["terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "pastry",
        "sunset",
        "terrace"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Maure",
      neighborhood: "Kasbah of the Udayas",
      description: "Nestled beautifully within the historic stone fortress walls of the Kasbah, this famous open-air terrace café features blue and white tiled seating, traditional mint tea, and almond pastries with river views.",
      tip: "Order your traditional pastries from the small cookie cart at the entrance before getting seated.",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Mint Tea",
        "Kaab el Ghazal (Gazelle Horns)",
        "Traditional Almond Ghriba"
      ],
      pros: [
        "Iconic river and sea panoramas from the ancient Kasbah fortress walls.",
        "Classic mint tea poured from silver teapots paired with fresh artisanal pastries.",
        "Enchanting Andalusian Garden pathway approach filled with flowers and orange trees."
      ],
      cons: [
        "Payment is strictly cash with no printed receipts.",
        "Can get congested during mid-afternoon tourist tour groups."
      ],
      googleRating: 4.3,
      googleReviewCount: 3600,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 1450,
      theforkRating: 4.1,
      theforkReviewCount: 280,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 3600,
      openTime: "09:00",
      closeTime: "20:00",
      exactAddressAndCoordinates: {
        address: "Kasbah des Oudayas, Rue Bahr, Rabat 10000, Morocco",
        lat: 34.03225,
        lng: -6.83592
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Maure+Kasbah+Udayas+Rabat",
      reservationMethod: ["none"],
      reservationContact: "+212537730000",
      website: "not-available",
      instagram: "not-available",
      customStory: "Perched on the cliffside battlements within the 12th-century Almohad Kasbah of the Udayas, Café Maure is Rabat's most legendary open-air tea salon. With blue and white mosaic banquettes looking out over the Bouregreg estuary and the Salé ramparts, it serves steaming mint tea and a mobile brass tray of almond gazelle horns.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-rabat-12",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Traditional Dining"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "foodie", "family"],
      vibeTags: ["authentic", "traditional", "unrushed", "refined"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "couscous", "dinner", "dry", "tagine", "wifi"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Kasr Al Assil",
      neighborhood: "Hassan",
      description: "An elegant, highly-rated traditional restaurant in the Hassan district. It focuses strictly on serving perfectly prepared, authentic Moroccan staples like slow-simmered lamb tagines and Friday couscous.",
      tip: "Loved by locals for its small, focused menu which guarantees the utmost quality in every single tagine.",
      badge: "local",
      bestDishes: [
        "Chicken Tagine with Olives & Lemon",
        "Friday Beef Couscous",
        "Moroccan Mixed Skewers"
      ],
      pros: [
        "Authentic home-style flavors cooked without commercial shortcuts.",
        "Clean, family-friendly traditional interior with attentive hospitality.",
        "Excellent Friday couscous with seven vegetables and caramelized tfaya."
      ],
      cons: [
        "Relatively discreet facade that is easy to miss without GPS.",
        "Limited dessert selection beyond seasonal fruit and traditional pastries."
      ],
      googleRating: 4.4,
      googleReviewCount: 490,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 180,
      theforkRating: 4.3,
      theforkReviewCount: 95,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 490,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "22 Avenue Moulay Hassan, Hassan, Rabat 10000, Morocco",
        lat: 34.01614,
        lng: -6.83108
      },
      googleMapsUrl: "https://maps.google.com/?q=Kasr+Al+Assil+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537721818",
      website: "not-available",
      instagram: "not-available",
      customStory: "Located in the quiet administrative quarter of Hassan, Kasr Al Assil is revered for pure, unpretentious Moroccan culinary heritage. Specializing in time-honored slow-cooking, the restaurant draws local civil servants and diplomatic staff for Friday couscous and fork-tender lamb tagines.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-rabat-13",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Fine Seafood", "Waterfront Dining"],
      foodStyles: ["Seafood", "Spanish", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["seafood-lover", "scenic-lover", "romantic"],
      vibeTags: ["waterfront", "seafood", "marina", "stylish"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 36,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "fine", "terrace", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Al Marsa",
      neighborhood: "Bouregreg Marina",
      description: "A highly sophisticated marina restaurant divided into two concepts sharing one name: one half serves outstanding Spanish seafood and paellas, and the other specializes in refined Japanese sushi.",
      tip: "Run by seafood wholesalers, guaranteeing exceptionally fresh ingredients. Grab outdoor terrace seating.",
      badge: "splurge",
      bestDishes: [
        "Seafood Paella",
        "Fresh Sushi & Sashimi Boat",
        "Salt-Baked Whole Fish"
      ],
      pros: [
        "Exceptional seafood freshness directly sourced from top Atlantic docks.",
        "Spacious dockside terrace with unobstructed yachts and marina vistas.",
        "Dual menu combining Spanish paellas and Japanese sushi rolls."
      ],
      cons: [
        "Premium pricing reflects the upscale marina location.",
        "Terrace can become breezy in the late afternoon."
      ],
      googleRating: 4.3,
      googleReviewCount: 1620,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 580,
      theforkRating: 4.2,
      theforkReviewCount: 310,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1620,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Marina Bouregreg, Quai des Createurs, Rabat-Salé 10000, Morocco",
        lat: 34.02912,
        lng: -6.82745
      },
      googleMapsUrl: "https://maps.google.com/?q=Al+Marsa+Marina+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537845858",
      website: "not-available",
      instagram: "not-available",
      customStory: "Commanding prime real estate on the Bouregreg Marina quayside, Al Marsa is operated by veteran fish purveyors. Split into dual culinary wings, guests can indulge in authentic Spanish seafood paellas and salt-crusted sea bass on one side, or pristine nigiri and sashimi on the other.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "Spanish", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-14",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Traditional Dining", "Upscale Lounge"],
      foodStyles: ["Moroccan", "French", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture-seeker", "foodie", "romantic"],
      vibeTags: ["classic", "vintage", "traditional", "atmospheric"],
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
      hasParking: false,
      nearMedina: true,
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
        "medina",
        "pastilla",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Petit Beur",
      neighborhood: "Centre-Ville",
      description: "Also known as Dar Tagine, this classic downtown institution marries authentic Moroccan gastronomy with French bistro details. Features pretty tiled walls, painted ceilings, and a long zellige bar.",
      tip: "Their Seafood Pastilla is legendary in Rabat. Order it with a bowl of comforting Harira soup.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Pastilla",
        "Harira Soup",
        "Plum and Almond Lamb Tagine"
      ],
      pros: [
        "Superb pastilla with delicate, flaky warka pastry and authentic spice balance.",
        "Full wine list featuring fine Moroccan vineyard labels.",
        "Atmospheric dining room with traditional zellige tiles and warm ambient lighting."
      ],
      cons: [
        "Service can slow down when the room is packed at peak dinner hour.",
        "Tables are closely spaced in the historic room."
      ],
      googleRating: 4.4,
      googleReviewCount: 980,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 420,
      theforkRating: 4.3,
      theforkReviewCount: 190,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 980,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "8 Rue de Damas, Centre Ville, Rabat 10000, Morocco",
        lat: 34.01791,
        lng: -6.83542
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Petit+Beur+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537731322",
      website: "not-available",
      instagram: "not-available",
      customStory: "Also widely known among locals as Dar Tagine, Le Petit Beur is an enduring downtown institution located just off Avenue Allal Ben Abdallah. Adorned with ornate woodwork, green zellige tiles, and vintage Moroccan posters, it pairs classic Moroccan feast dishes with a curated wine list in a cozy Parisian bistro ambiance.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-15",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Bakery-Patisserie", "Traditional Breakfast Ritual"],
      foodStyles: ["Bakery", "Moroccan", "Patisserie"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["foodie", "culture-seeker", "budget-conscious"],
      vibeTags: ["heritage", "artisanal", "pastry", "legendary"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "pastry"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Maison Sekouri",
      neighborhood: "Médina Ancienne",
      description: "A highly famous traditional Moroccan pastry shop founded in 1974, currently run by two sisters. Known for offering Rabat's absolute finest hand-baked chebakia, tartlets, and classic almond treats.",
      tip: "An absolute must-visit during Ramadan or before leaving the country to buy gift boxes of handmade pastries.",
      badge: "hidden-gem",
      bestDishes: [
        "Handmade Chebakia",
        "Savoury and Sweet Tartlets",
        "Assorted Almond Pastries"
      ],
      pros: [
        "Rabat's gold standard for handmade traditional Moroccan pastries.",
        "Real honey and premium almond paste used without cheap sugar syrups.",
        "Beautiful gift boxes packaged for travel or celebratory occasions."
      ],
      cons: [
        "No sit-down dine-in service; strictly boutique counter takeaway.",
        "Expect lengthy lines right before Ramadan and major festive holidays."
      ],
      googleRating: 4.7,
      googleReviewCount: 280,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 85,
      theforkRating: 4.6,
      theforkReviewCount: 40,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 280,
      openTime: "08:00",
      closeTime: "20:00",
      exactAddressAndCoordinates: {
        address: "Marché Central, Boulevard Hassan II, Rabat 10000, Morocco",
        lat: 34.02075,
        lng: -6.83788
      },
      googleMapsUrl: "https://maps.google.com/?q=Maison+Sekouri+Rabat",
      reservationMethod: ["none"],
      reservationContact: "+212537731212",
      website: "not-available",
      instagram: "not-available",
      customStory: "Established in 1974 right by the Marché Central, Maison Sekouri is an institution of traditional Moroccan confectionery. Maintained with devotion by the Sekouri family, it is revered by generations of Rabatis for pure almond chebakia, briouats soaked in natural orange blossom honey, and delicate gazelle horns.",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-rabat-16",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "family"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: [
        "Cafe",
        "Casual Dining",
        "Garden restaurant with live music"
      ],
      foodStyles: ["French", "European"],
      cuisineTags: ["international"],
      archetypeAffinity: ["foodie", "first-timer", "culture-seeker"],
      vibeTags: ["creperie", "garden-patio", "french-bistro", "cozy"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
      isHalal: false,
      halalStatus: "non-halal",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
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
        "live-music",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ty Potes",
      neighborhood: "Hassan",
      description: "A lovely, French-style garden café and restaurant located in the Hassan district. Highly regarded for its sweet crepes, buckwheat galettes, Sunday brunch, and an excellent European delicatessen.",
      tip: "The garden setting is extremely cozy. Perfect for a long, lazy Sunday brunch with friends.",
      badge: "local-favorite",
      bestDishes: [
        "Salted Caramel Sweet Crepe",
        "Savoyard Buckwheat Galette",
        "European Cheese Board"
      ],
      pros: [
        "Authentic Breton buckwheat galettes and sweet salted butter caramel crêpes.",
        "Peaceful, verdant garden courtyard with lush foliage and relaxed seating.",
        "Fine French epicerie counter with imported cheeses, charcuterie, and gourmet jams."
      ],
      cons: [
        "Non-halal items on menu (pork charcuterie served alongside halal-friendly options).",
        "Weekend brunch fills up rapidly; booking in advance is advised."
      ],
      googleRating: 4.4,
      googleReviewCount: 1120,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 340,
      theforkRating: 4.2,
      theforkReviewCount: 160,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1120,
      openTime: "12:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "11 Rue Ghafiki, Hassan, Rabat 10000, Morocco",
        lat: 34.01525,
        lng: -6.83295
      },
      googleMapsUrl: "https://maps.google.com/?q=Ty+Potes+Rabat",
      reservationMethod: ["phone"],
      reservationContact: "+212537707965",
      website: "not-available",
      instagram: "not-available",
      customStory: "A tranquil culinary oasis tucked behind a leafy courtyard in the upscale Hassan residential district. Ty Potes is celebrated for authentic Breton crêpes and savory buckwheat galettes crafted from imported French flour, along with artisanal cheese boards, cider, and European delicatessen offerings.",
      viewType: "garden",
      bestTimeToVisit: "Sunday morning for brunch peak",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-17",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "foodie", "romantic"],
      vibeTags: ["palatial", "haute-cuisine", "refined", "opulent"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 48,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "late-night",
        "pastilla",
        "sunset",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Al Warda",
      neighborhood: "Souissi",
      description: "The grand Moroccan fine-dining restaurant situated in the five-star Sofitel Rabat Jardin des Roses. Offers an inventive, refined take on classic Moroccan gastronomy in an opulent zellige-adorned dining room.",
      tip: "Excellent service overseen by Chef Fatima Zohra. Ideal for a celebratory, candle-lit traditional Moroccan dinner.",
      badge: "splurge",
      bestDishes: [
        "Marrakesh Lamb Tanjia",
        "Royal Pigeon Pastilla",
        "Fine Moroccan Salads"
      ],
      pros: [
        "Haute Moroccan gastronomy executed with imperial palace grandeur.",
        "Lyrical live acoustic lute (Oud) and soft violin accompaniment in the evenings.",
        "Immaculate presentation of heritage pastillas and slow-simmered regional tagines."
      ],
      cons: [
        "Prestige pricing fitting for a 5-star palace hotel.",
        "Formal dress code expected in the evening."
      ],
      googleRating: 4.6,
      googleReviewCount: 480,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 310,
      theforkRating: 4.6,
      theforkReviewCount: 220,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 480,
      openTime: "19:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Sofitel Rabat Jardin des Roses, Impasse Souissi, Rabat 10000, Morocco",
        lat: 34.00412,
        lng: -6.82855
      },
      googleMapsUrl: "https://maps.google.com/?q=Al+Warda+Sofitel+Rabat",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212537675656",
      website: "not-available",
      instagram: "not-available",
      customStory: "The grand Moroccan gastronomic crown jewel of the Sofitel Jardin des Roses. Al Warda pays homage to imperial palace dining with ornate zellige mosaics, sculpted plaster cupolas, and soft traditional Andalusian lute music. Master chefs elevate heritage recipes into sophisticated contemporary courses.",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 0,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-18",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Romantic Sunset"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["romantic", "culture-seeker", "luxury"],
      vibeTags: ["historic-riad", "intimate", "refined", "fireplace"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 30,
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
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "fine",
        "medina",
        "riad",
        "sunset",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar El Kebira",
      neighborhood: "Médina Ancienne",
      description: "A highly luxurious riad dining experience inside a masterfully restored Medina residence. Patrons enjoy traditional Moroccan dishes prepared with premium ingredients around a monumental fireplace.",
      tip: "Located near Rue des Consuls. An exceptional place to experience luxury homestyle cooking like lamb Rfissa.",
      badge: "splurge",
      bestDishes: [
        "Chicken Rfissa with Tride",
        "Royal Lamb Couscous",
        "Sweet Almond Knafa"
      ],
      pros: [
        "Stunning historic riad architecture with intricate zellige tilework and roaring fireplace in winter.",
        "Superb culinary execution of signature dishes like Pigeon Pastilla and Tride Rfissa.",
        "Attentive, discreet butler-level hospitality in a private setting."
      ],
      cons: [
        "Reservations are mandatory given the boutique size of the dining courtyard.",
        "Located in a pedestrian-only medina lane; requires a brief walk from car drop-off."
      ],
      googleRating: 4.6,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 240,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "1 Rue Riad Souissi, Rue des Consuls, Medina, Rabat 10030, Morocco",
        lat: 34.02781,
        lng: -6.83445
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+El+Kebira+Rabat",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212537723883",
      website: "not-available",
      instagram: "not-available",
      customStory: "Set within a noble residence on the edge of historic Rue des Consuls, Dar El Kebira is a refined luxury riad table. Guests dine around carved cedar archways and a monumental stone fireplace, enjoying meticulously prepared traditional Moroccan tasting menus that celebrate the finest seasonal regional produce.",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-19",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["romantic", "culture-seeker", "foodie"],
      vibeTags: ["historic", "patio-pool", "andalusian", "tranquil"],
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
      nearBeach: true,
      nearCenter: true,
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
        "pastilla",
        "riad",
        "sunset",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Riad Kalaa Restaurant",
      neighborhood: "Médina Ancienne",
      description: "Operating within a stunning arabo-andalusian noble riad built in 1815. It combines generous Moroccan hospitality with a refined selection of Moroccan-Mediterranean fusion dishes.",
      tip: "Book a table in their beautiful orange tree patio or poolside courtyard to enjoy their creative dinner menu.",
      badge: "splurge",
      bestDishes: [
        "Saffron Lamb Shank",
        "Seafood Pastilla",
        "Orange Cinnamon Salad"
      ],
      pros: [
        "Enchanting 19th-century Arab-Andalusian riad patio framed by fruit trees and pool.",
        "Well-curated Moroccan and Mediterranean fusion menu with fresh market seafood.",
        "Quiet, romantic dinner atmosphere away from the bustling city bustle."
      ],
      cons: [
        "Finding the entrance requires navigating through a maze of narrow medina passageways.",
        "Service operates at an unhurried, relaxed riad tempo."
      ],
      googleRating: 4.5,
      googleReviewCount: 260,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 190,
      theforkRating: 4.5,
      theforkReviewCount: 110,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 260,
      openTime: "12:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "26 Rue Benzina, Medina, Rabat 10000, Morocco",
        lat: 34.02891,
        lng: -6.83515
      },
      googleMapsUrl: "https://maps.google.com/?q=Riad+Kalaa+Rabat",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212537202028",
      website: "not-available",
      instagram: "not-available",
      customStory: "Built in 1815 within the upper medina close to the Bouregreg ramparts, Riad Kalaa is a sprawling Arab-Andalusian palace featuring twin courtyards, banana palms, and a central plunge pool. The kitchen combines centuries-old Moroccan cooking with Mediterranean lightness, complemented by fine Moroccan wines.",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Spanish", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-rabat-20",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget-conscious", "culture-seeker", "solo"],
      vibeTags: ["authentic", "unpretentious", "hearty", "street-eats"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3.5,
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
      tags: ["budget", "dinner", "dry", "medina", "tagine"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant La Libération",
      neighborhood: "Médina Ancienne",
      description: "A long-running, highly authentic local diner in the old Medina. It does not offer complex decor, but it is highly trusted by locals for serving hot, fresh, and cheap bowls of harira, loubia (white beans), and tagines.",
      tip: "An absolute favorite for travelers looking for a completely honest, cheap homestyle meal. Harira is excellent.",
      badge: "local",
      bestDishes: [
        "Moroccan Harira",
        "Loubia (White Beans in Sauce)",
        "Kefta Tagine"
      ],
      pros: [
        "Rock-bottom prices for piping hot, authentic Moroccan everyday comfort food.",
        "Thick, rich harira soup served with hard-boiled eggs and sweet chebakia.",
        "No-nonsense, fast service right in the middle of the medina hustle."
      ],
      cons: [
        "Basic utilitarian diner setting with simple formica tables and no frills.",
        "Cash only; can be very busy during lunch rush."
      ],
      googleRating: 4.3,
      googleReviewCount: 380,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 140,
      theforkRating: 4.1,
      theforkReviewCount: 60,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 380,
      openTime: "11:00",
      closeTime: "21:30",
      exactAddressAndCoordinates: {
        address: "12 Rue Souika, Medina, Rabat 10030, Morocco",
        lat: 34.02325,
        lng: -6.83688
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+la+Liberation+Rabat",
      reservationMethod: ["none"],
      reservationContact: "+212537700000",
      website: "not-available",
      instagram: "not-available",
      customStory: "A venerable medina institution that has fed working-class Rabatis, artisans, and savvy budget travelers for decades. Situated right off Rue Souika, La Libération is celebrated for steaming bowls of hearty harira soup, spiced white bean stew (loubia), freshly griddled kefta, and sizzling sardines at unbeatable prices.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-rabat-mcdonalds-agdal",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Terrace", "Casual Dining"],
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
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
      name: "McDonald's Agdal",
      neighborhood: "Agdal",
      district: "Avenue Fal Ould Oumeir",
      description: "The premier student and family McDonald's hotspot on Avenue Fal Ould Oumeir in Agdal with a lively outdoor terrace, McCafé, and late hours.",
      badge: "local-favorite",
      googleRating: 4.1,
      googleReviewCount: 6500,
      openTime: "07:30",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Avenue Fal Ould Oumeir, Agdal, Rabat",
        lat: 33.9998,
        lng: -6.8492
      },
      googleMapsUrl: "https://maps.google.com/?cid=5610293847561928374",
      reservationContact: "not-available",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-rabat-kfc-arribat",
    city: "rabat",

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
      name: "KFC Arribat Center",
      neighborhood: "Agdal",
      district: "Arribat Center",
      description: "Located in the mega food court of Arribat Center in Agdal, offering spicy fried chicken tenders, burgers, and family bucket options.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 2100,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Arribat Center, Avenue des Nations Unies, Agdal, Rabat",
        lat: 33.9984,
        lng: -6.8523
      },
      googleMapsUrl: "https://maps.google.com/?cid=8910293847561928374",
      reservationContact: "not-available",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-rabat-burger-king-agdal",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Casual Dining"],
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
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
      name: "Burger King Agdal",
      neighborhood: "Agdal",
      district: "Avenue Fal Ould Oumeir",
      description: "Spacious multi-level Burger King on Avenue Fal Ould Oumeir with digital self-ordering screens, flame-grilled Whoppers, and soft-serve ice cream.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 2300,
      openTime: "11:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Avenue Fal Ould Oumeir, Agdal, Rabat",
        lat: 34.0012,
        lng: -6.8482
      },
      googleMapsUrl: "https://maps.google.com/?cid=1928374650192837465",
      reservationContact: "not-available",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-rabat-pizza-hut-agdal",
    city: "rabat",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
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
      name: "Pizza Hut Agdal",
      neighborhood: "Agdal",
      district: "Avenue Fal Ould Oumeir",
      description: "Classic Pizza Hut dining room on Avenue Fal Ould Oumeir serving deep-dish pan pizzas, pasta bakes, and garlic bread.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1950,
      openTime: "11:30",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "18 Avenue Fal Ould Oumeir, Agdal, Rabat",
        lat: 34.0021,
        lng: -6.8475
      },
      googleMapsUrl: "https://maps.google.com/?cid=2837465019283746519",
      reservationContact: "not-available",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "e-rabat-dominos-agdal",
    city: "rabat",

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
      name: "Domino's Pizza Agdal",
      neighborhood: "Agdal",
      district: "Avenue de France",
      description: "Popular takeaway and delivery branch on Avenue de France serving fresh hot pizzas with tracking and rapid counter pickup.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1250,
      openTime: "11:30",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Avenue de France, Agdal, Rabat",
        lat: 33.9965,
        lng: -6.8542
      },
      googleMapsUrl: "https://maps.google.com/?cid=3847561928374650192",
      reservationContact: "not-available",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  }
];
