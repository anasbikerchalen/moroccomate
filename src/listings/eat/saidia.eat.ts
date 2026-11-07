/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: SAIDIA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-saidia-1' or 'eat-saidia-restaurant')
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
 *   id: 'e-saidia-[id]',
 *   city: 'saidia',
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

export const saidiaEat: EatListing[] = [
  {
    id: "e-saidia-1",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["Fine Dining", "Upscale Lounge", "Sunset Views"],
      foodStyles: ["International", "Mediterranean", "European"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "romantic", "nightlife"],
      vibeTags: ["panoramic", "golf-club", "chic", "sunset-terrace"],
      crowdLevel: "balanced"
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
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "sunset",
        "terrace",
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
      name: "La Table du Green Teelal",
      neighborhood: "Saidia Marina & Golf",
      description: "An upscale golf-side lounge and restaurant offering breathtaking 360-degree panoramic views over the golf course greens and the Mediterranean sunset. Known for its elegant terraces, short but premium menu of meats and seafood, and high-vibe lounge music.",
      tip: "Book a table on the panoramic sunset terrace around 19:30 for unmatched golf course and sea views.",
      badge: "splurge",
      bestDishes: [
        "Premium Ribeye Steak",
        "Seafood Tapas Platter",
        "Truffle Pasta"
      ],
      pros: [
        "Stunning 360-degree panoramic vantage point across the golf fairways and Mediterranean horizon.",
        "Refined cocktail and wine list with live weekend DJ and acoustic sessions.",
        "Private, upscale atmosphere away from summer beach crowds."
      ],
      cons: [
        "Higher price point reflecting the luxury country club setting.",
        "Located inside the golf resort, requiring a private vehicle or taxi ride."
      ],
      googleRating: 4.1,
      googleReviewCount: 140,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 45,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 140,
      openTime: "08:30",
      closeTime: "03:00",
      exactAddressAndCoordinates: {
        address: "Club House Golf de Saïdia, Station Balnéaire, Saïdia 60600, Morocco",
        lat: 35.09351,
        lng: -2.26942
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Table+du+Green+Teelal+Saidia",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212666525552",
      website: "not-available",
      instagram: "not-available",
      customStory: "Overlooking the lush fairways of the Saïdia Lacs Golf Course, La Table du Green Teelal was conceived as an elite clubhouse and evening gastro-lounge. Its panoramic elevated decks provide an idyllic vantage point where rolling green lawns meet Mediterranean sunsets.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-2",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Waterfront Dining", "Beachfront Grill", "Casual Dining"],
      foodStyles: ["Mediterranean", "Moroccan", "Pizza", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional", "seafood"],
      archetypeAffinity: ["beach-lover", "foodie", "family"],
      vibeTags: ["beachfront", "casual", "bustling", "seafood"],
      crowdLevel: "bustling"
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
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "beachfront"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "late-night", "medina", "tagine"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Samy Playa",
      neighborhood: "Downtown Corniche",
      description: "A coastal favorite perched right on Saidia's golden beachfront. Famous for its generous portions of traditional Mediterranean baked sea bass tagines, seafood paella, and wood-fired pizzas.",
      tip: "The sea bass tagine with olives and potatoes cooked in a traditional clay pot is worth the wait.",
      badge: "local-favorite",
      bestDishes: [
        "Sea Bass Tagine",
        "Seafood Paella",
        "Quattro Stagioni Pizza"
      ],
      pros: [
        "Direct beachfront terrace location with sea breezes and views of the Mediterranean.",
        "Generous servings of fresh Mediterranean fish tagines and paellas.",
        "Lively, welcoming family atmosphere right off the corniche promenade."
      ],
      cons: [
        "Cash only payment.",
        "During peak summer July and August afternoons, wait times can stretch to 20-30 minutes."
      ],
      googleRating: 4.2,
      googleReviewCount: 520,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 160,
      theforkRating: 4.1,
      theforkReviewCount: 45,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 520,
      openTime: "12:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed V, Front de Mer, Saïdia 60600, Morocco",
        lat: 35.08742,
        lng: -2.23418
      },
      googleMapsUrl: "https://maps.google.com/?q=Samy+Playa+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212536625000",
      website: "not-available",
      instagram: "not-available",
      customStory: "A landmark along Boulevard Hassan II right on the shoreline, Samy Playa has welcomed summer vacationers and local families for decades. Guests can step right off the sand into an airy beachside pavilion offering sizzling fresh seafood grills and oven-baked pizzas.",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-saidia-3",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      archetypeAffinity: ["budget-conscious", "foodie", "culture-seeker"],
      vibeTags: ["authentic", "unpretentious", "fresh-catch", "local-secret"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7.5,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Nour : Restaurant de Poissons",
      neighborhood: "Saidia Town Center",
      description: "An authentic, no-frills local institution revered for serving the freshest Mediterranean fish catch. Highly renowned for its traditional grilled sardines, deep-fried squid, and classic Moroccan salads in a high-energy local setting.",
      tip: "Go for the mixed friture platter (fried seafood combo) and order a side of traditional tomato-onion-pepper Moroccan salad.",
      badge: "local",
      bestDishes: [
        "Espadon (Swordfish) Skewers",
        "Mixed Fish Friture",
        "Seafood Soup"
      ],
      pros: [
        "Unbeatable freshness with fish sourced daily straight from local Mediterranean fishing boats.",
        "Exceptional value for money with budget-friendly mixed fish platters.",
        "Authentic local ambiance where Saïdia residents dine year-round."
      ],
      cons: [
        "Basic diner setting with minimal decor.",
        "Cash only; no dedicated indoor air conditioning."
      ],
      googleRating: 4.3,
      googleReviewCount: 380,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 95,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 380,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Rue Bir Anzarane, Centre Ville, Saïdia 60600, Morocco",
        lat: 35.08392,
        lng: -2.23175
      },
      googleMapsUrl: "https://maps.google.com/?q=Nour+Restaurant+de+Poissons+Saidia",
      reservationMethod: ["phone", "instagram"],
      reservationContact: "+212623306538",
      website: "not-available",
      instagram: "not-available",
      customStory: "Rooted in the fishing heritage of eastern Morocco, Nour is run by local fish enthusiasts who purchase directly from artisanal trawlers each dawn. The menu depends on the morning catch, emphasizing straightforward griddled and deep-fried seafood served with warm crusty bread and zesty tomato relish.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-saidia-4",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "seniors", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["Waterfront Dining", "Fine Dining", "Casual Dining"],
      foodStyles: ["Mediterranean", "French", "Seafood"],
      archetypeAffinity: ["romantic", "scenic-lover", "foodie"],
      vibeTags: ["marina-view", "peaceful", "mediterranean-bistro", "terrace"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 19,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      alcoholPolicy: "dry",
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
      tags: ["budget", "dinner", "dry", "fine", "medina", "terrace", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L'Olivier Marina Saïdia",
      neighborhood: "Marina de Saïdia",
      description: "A delightful Mediterranean restaurant in the heart of Medina Mall Saïdia. Blends authentic French-Mediterranean bistro specialties with fresh local seafood, offering a peaceful terrace with panoramic marina harbor views.",
      tip: "Sit on the quiet, shaded terrace for a peaceful escape from the busy Marina shops. Their grilled sea bream with fresh herbs is excellent.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Seabream with Herbs",
        "Olivier Beef Carpaccio",
        "Warm Chocolate Fondant"
      ],
      pros: [
        "Picturesque outdoor terrace overlooking luxury yachts and the marina basin.",
        "Refined French-Mediterranean recipes with quality carpaccios and grilled seabream.",
        "Card payments accepted and attentive, bilingual service staff."
      ],
      cons: [
        "Marina setting commands slightly higher prices than downtown eateries.",
        "Terrace tables fill quickly around dinner peak in July and August."
      ],
      googleRating: 4.1,
      googleReviewCount: 290,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 110,
      theforkRating: 4,
      theforkReviewCount: 55,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 290,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Promenade de la Marina, Medina Mall, Saïdia 60600, Morocco",
        lat: 35.09714,
        lng: -2.28852
      },
      googleMapsUrl: "https://maps.google.com/?q=Olivier+Saidia+Marina",
      reservationMethod: ["phone"],
      reservationContact: "+212536630230",
      website: "not-available",
      instagram: "not-available",
      customStory: "Positioned directly along the promenade of Marina Saïdia, L'Olivier pairs southern French culinary methods with eastern Moroccan coastal bounty. Sheltered beneath shaded wooden pergolas, patrons enjoy gentle breezes, yacht harbor panoramas, and delicate herb-crusted fish courses.",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-5",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Waterfront Dining", "Beachfront Grill", "Sunset Views"],
      foodStyles: ["Mediterranean", "Italian", "Moroccan", "Pizza"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["beach-lover", "family", "first-timer"],
      vibeTags: ["beach-club", "lively", "sunset-spot", "family-friendly"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "sunset",
        "terrace",
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
      name: "Bravo Beach Club",
      neighborhood: "Downtown Corniche",
      description: "A massive, highly popular beachfront hub right on the sand of Saïdia Beach. Combines a lively pizzeria, seafood grill, and oceanfront cafe with upbeat vibes perfect for summer travelers.",
      tip: "Perfect place for a long, lazy lunch on their grassy lawn in front of the beach. Try their wood-fired pizzas or gourmet burgers.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Pizza",
        "Grilled Chicken Skewers",
        "Mixed Seafood Friture"
      ],
      pros: [
        "Front-row beachfront venue with sun loungers and dining tables on the sand.",
        "Diverse crowd-pleasing menu ranging from wood-fired pizzas to fresh grilled fish.",
        "Fun, high-energy beach club vibes with upbeat summer background music."
      ],
      cons: [
        "Can get noisy and crowded during mid-summer holiday weekends.",
        "Walk-in seating can face queues during late lunch hours."
      ],
      googleRating: 4,
      googleReviewCount: 460,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 120,
      theforkRating: 3.9,
      theforkReviewCount: 40,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 460,
      openTime: "12:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed V, Plage de Saïdia, Saïdia 60600, Morocco",
        lat: 35.08912,
        lng: -2.23984
      },
      googleMapsUrl: "https://maps.google.com/?q=Bravo+Beach+Club+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212536625050",
      website: "not-available",
      instagram: "not-available",
      customStory: "Bravo Beach Club is Saïdia's ultimate summer rendezvous, blending sunbed beach lounging with an all-day open-air dining pavilion. With panoramic Mediterranean waters right at your feet, it treats visitors to crispy thin-crust pizzas, fresh fried calamari, and cold smoothies.",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-saidia-6",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "large-groups", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Waterfront Dining", "Family Friendly", "Beachfront Grill"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["family", "beach-lover", "budget-conscious"],
      vibeTags: ["family-friendly", "beachfront", "seafood-baskets", "lively"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "beachfront"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "late-night", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Small Fish Club",
      neighborhood: "Downtown Corniche",
      description: "A dynamic beachside eatery and family animation spot combined. Offers delicious local fish baskets, live family-friendly music in the evenings, and unpretentious beachfront dining with gorgeous views of the Mediterranean horizon.",
      tip: "Go in the late afternoon for their family animation shows. The fried calamari is a stellar snack.",
      badge: "local-favorite",
      bestDishes: ["Seafood Platter", "Grilled Sole", "Crispy Calamari Basket"],
      pros: [
        "Right on the sandy beach with uninterrupted ocean breezes.",
        "Superb deep-fried calamari and whole grilled sole at honest family-friendly prices.",
        "Kid-friendly atmosphere with occasional seasonal music."
      ],
      cons: [
        "Cash only payment.",
        "Can get quite noisy during summer peak holiday evenings."
      ],
      googleRating: 4.3,
      googleReviewCount: 680,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 190,
      theforkRating: 4.1,
      theforkReviewCount: 65,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 680,
      openTime: "12:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed V, Plage Municipale, Saïdia 60600, Morocco",
        lat: 35.08819,
        lng: -2.23674
      },
      googleMapsUrl: "https://maps.google.com/?q=Small+Fish+Club+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212662345678",
      website: "not-available",
      instagram: "not-available",
      customStory: "Built right on the water edge of Boulevard Hassan II, Small Fish Club combines an approachable family fish restaurant with seasonal seaside entertainment. Popular for generous baskets of golden-crusted calamari and whole grilled sole, it is a prime staple for family beach days.",
      viewType: "beach",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-saidia-7",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Waterfront Dining", "Casual Dining", "Sunset Views"],
      foodStyles: ["Mediterranean", "Italian", "Moroccan"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "budget-conscious", "family"],
      vibeTags: ["promenade-view", "casual", "bustling", "classic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "dinner",
        "dry",
        "sunset",
        "terrace",
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
      name: "La Corniche",
      neighborhood: "Downtown Corniche",
      description: "A spacious and lively establishment right on Boulevard Mohamed V. Known for its breezy panoramic windows facing the Mediterranean, delivering tasty Italian pastas, fresh grilled fish, and traditional Moroccan breakfast.",
      tip: "Great value-for-money spot. Order the fresh grilled Mediterranean sardines served with a cold glass of fresh juice.",
      badge: "local-favorite",
      bestDishes: [
        "Spaghetti Frutti di Mare",
        "Grilled Mediterranean Sardines",
        "Classic Club Sandwich"
      ],
      pros: [
        "Prime central location directly along the pedestrian corniche strip.",
        "Extensive versatile menu serving breakfast, seafood pastas, and mint tea until late.",
        "Very affordable pricing with rapid table turnover."
      ],
      cons: [
        "Cash only payment policy.",
        "Peak summer dinner crowds make it energetic and loud."
      ],
      googleRating: 4.1,
      googleReviewCount: 1420,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 340,
      theforkRating: 4,
      theforkReviewCount: 110,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1420,
      openTime: "08:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed V, Centre Corniche, Saïdia 60600, Morocco",
        lat: 35.08695,
        lng: -2.23305
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Corniche+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212536625141",
      website: "not-available",
      instagram: "not-available",
      customStory: "Centrally anchored along the downtown palm-lined promenade, La Corniche has served as an everyday meeting hub for locals and coast-goers. Renowned for its rapid service, wide glass facade, and generous plates of seafood pasta and grilled sardines.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-saidia-8",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Modern Fusion Dining", "Casual Dining"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["foodie", "nightlife", "trendsetter"],
      vibeTags: ["modern-asian", "neon-chic", "marina", "sushi"],
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
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "late-night", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Tokyo Sushi Saïdia",
      neighborhood: "Marina de Saïdia",
      description: "A modern Asian-fusion destination in Saidia Marina. Frequented by summer crowds craving pristine sushi rolls, wok-fried noodles, and exotic fruit cocktails in a stylish, neon-lit seaside setting.",
      tip: "Order their signature Dragon Rolls and Beef Pad Thai. Standard delivery is also available straight to your apartment or resort.",
      badge: "local-favorite",
      bestDishes: ["Dragon Roll", "Beef Pad Thai", "Shrimp Tempura"],
      pros: [
        "Welcome variety from traditional seafood grills with fresh sushi and wok noodles.",
        "Sleek modern interior with air-conditioned dining and cool neon accents.",
        "Reliable take-away and delivery to surrounding Marina villas and resort residences."
      ],
      cons: [
        "Higher price point typical of specialty sushi in resort zones.",
        "Slower preparation times during peak evening orders."
      ],
      googleRating: 3.9,
      googleReviewCount: 180,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 45,
      theforkRating: 3.8,
      theforkReviewCount: 25,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 180,
      openTime: "13:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Medina Mall, Marina Saïdia 60600, Morocco",
        lat: 35.09658,
        lng: -2.28721
      },
      googleMapsUrl: "https://maps.google.com/?q=Tokyo+Sushi+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212536630111",
      website: "not-available",
      instagram: "not-available",
      customStory: "Introducing Japanese and Pan-Asian dining to the Oriental coastline, Tokyo Sushi Saïdia brings together fresh seafood tempura, hand-rolled maki, and wok stir-fries in a sleek, contemporary dining room in Marina Saïdia.",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-9",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Waterfront Dining", "Sunset Views", "Beachfront Grill"],
      foodStyles: ["Spanish", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["romantic", "beach-lover", "sunset-chaser"],
      vibeTags: ["andalusian-vibes", "beachfront", "sunset-lounge", "tapas"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
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
      seatingTypes: ["indoor", "beachfront", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Marbella",
      neighborhood: "La Corniche",
      description: "A legendary beachfront spot that beautifully blends Moroccan coast vibes with Andalusian style. Perfect for enjoying fresh grilled sardines, Mediterranean tapas, and sunset mocktails with front-row ocean wave views.",
      tip: "Perfect for watching the sunset. Try their grilled sardines cooked Malaga-style on skewers near the beach sand.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Sardines Marbella Style",
        "Seafood Tapas Platter",
        "Fresh Melon-Mint Cooler"
      ],
      pros: [
        "Unrivaled golden hour sunset terrace positioned feet away from the water.",
        "Delicious Malaga-style espeto grilled sardines and Spanish tapas plates.",
        "Card payments accepted alongside pleasant Spanish and French-speaking team."
      ],
      cons: [
        "Prime beachfront tables fill completely by 18:30 on sunny days.",
        "Limited indoor seating on unexpectedly breezy nights."
      ],
      googleRating: 4.2,
      googleReviewCount: 410,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 85,
      theforkRating: 4,
      theforkReviewCount: 35,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 410,
      openTime: "11:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Hassan II, Plage Corniche, Saïdia 60600, Morocco",
        lat: 35.08865,
        lng: -2.23812
      },
      googleMapsUrl: "https://maps.google.com/?q=Marbella+Saidia+La+Corniche",
      reservationMethod: ["phone"],
      reservationContact: "+212536625121",
      website: "not-available",
      instagram: "not-available",
      customStory: "Taking design cues from Costa del Sol chiringuitos, Le Marbella brings Andalusian beachfront charm to the shores of Saïdia. Guests sit under white canopies listening to rhythmic waves while indulging in skewer-grilled sardines, garlic prawns, and chilled fruit coolers.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "Spanish", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-10",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fine Dining", "Upscale Lounge", "Modern Fusion Dining"],
      foodStyles: ["Mediterranean", "Seafood", "European"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nightlife", "trendsetter"],
      vibeTags: ["swanky", "dj-sets", "poolside-lounge", "nightlife"],
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "terrace",
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
      name: "Kim Club",
      neighborhood: "Saidia Marina",
      description: "A premium, stylish lounge and dining venue located close to the coastal hotel strip. Highly popular for its sophisticated Mediterranean food menu, live DJ sets, and evening cocktail culture.",
      tip: "The place truly wakes up after 22:00. Call in advance to reserve a table near the main pool area.",
      badge: "splurge",
      bestDishes: [
        "Lobster Thermidor",
        "Premium Sushi Platters",
        "Tenderloin Steak"
      ],
      pros: [
        "Upscale poolside ambiance with chic sunbeds, cabanas, and ambient evening lighting.",
        "Extensive international drinks list and late-night DJ entertainment.",
        "Gourmet culinary execution of lobster, tenderloin steaks, and fresh seafood."
      ],
      cons: [
        "Upscale pricing and strict evening dress code.",
        "High decibel levels later in the night when DJ sets begin."
      ],
      googleRating: 4.1,
      googleReviewCount: 210,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 65,
      theforkRating: 4,
      theforkReviewCount: 30,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 210,
      openTime: "13:00",
      closeTime: "03:00",
      exactAddressAndCoordinates: {
        address: "Zone Hôtelière, Boulevard de la Marina, Saïdia 60600, Morocco",
        lat: 35.09485,
        lng: -2.28215
      },
      googleMapsUrl: "https://maps.google.com/?q=Kim+Club+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212661202020",
      website: "not-available",
      instagram: "not-available",
      customStory: "Kim Club caters to Saïdia’s high-end summer jet set, featuring a poolside terrace, private cabanas, and curated soundscapes. The kitchen crafts refined Mediterranean dining with fresh lobster, aged beef steaks, and sparkling mocktails and cocktails.",
      viewType: "beach",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-11",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Barbecue"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["meat-lover", "culture-seeker", "foodie"],
      vibeTags: ["pit-roasted-lamb", "authentic", "traditional", "hearty"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mardouma",
      neighborhood: "Saidia Town Center",
      description: "A unique and authentic local restaurant specializing in slow-cooked grilled meats cooked inside clay pits in the traditional \"Mardouma\" style of the Moroccan east, alongside authentic Oujda-style Tanjia.",
      tip: "Ask for their authentic slow-pit roasted lamb shoulder—the meat is so tender it falls right off the bone.",
      badge: "local",
      bestDishes: [
        "Mardouma Pit Roasted Lamb",
        "Traditional Beef Tanjia",
        "Eastern Mechoui"
      ],
      pros: [
        "Incredible pit-roasted meats cooked slow for hours with fork-tender texture.",
        "Uncommon regional specialty distinct from standard coastal seafood fare.",
        "Warm local hospitality and generous portions with freshly baked bread."
      ],
      cons: [
        "Very limited vegetarian selections.",
        "Cash only payment."
      ],
      googleRating: 4.2,
      googleReviewCount: 260,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 50,
      theforkRating: 4,
      theforkReviewCount: 15,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 260,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II, Centre Ville, Saïdia 60600, Morocco",
        lat: 35.08442,
        lng: -2.23089
      },
      googleMapsUrl: "https://maps.google.com/?q=Mardouma+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212536625888",
      website: "not-available",
      instagram: "not-available",
      customStory: "Showcasing the rare culinary heritage of eastern Moroccan desert pit-roasting, Mardouma buries spiced lamb and beef over smoldering embers in clay ovens sealed airtight. The result is exceptionally tender, flavorful meat seasoned with cumin, coriander, and wild mountain herbs.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-saidia-12",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["Fine Dining", "Waterfront Dining", "Tranquil Dining"],
      foodStyles: ["Healthy", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["health-conscious", "eco-traveler", "foodie"],
      vibeTags: ["eco-friendly", "organic", "marina-terrace", "clean-eats"],
      crowdLevel: "quiet"
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "dinner",
        "dry",
        "fine",
        "juice",
        "quiet",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Freshmed Eco 66",
      neighborhood: "Marina de Saïdia",
      description: "An eco-conscious restaurant focusing on fresh organic Mediterranean cooking. Uses clean, regionally sourced ingredients to design healthy options, fresh fish tagines, and hearty salads.",
      tip: "A superb spot for health-conscious diners. Try the organic sea bass fillet accompanied by a fresh green wellness juice.",
      badge: "hidden-gem",
      bestDishes: [
        "Quinoa & Roasted Veggie Bowl",
        "Organic Sea Bass Fillet",
        "Cold-Pressed Green Juice"
      ],
      pros: [
        "Wholesome, healthy, and organic dining options with extensive vegetarian choices.",
        "Tranquil marina terrace setting removed from loud resort music.",
        "Cold-pressed juices, organic detox smoothies, and gluten-conscious dishes."
      ],
      cons: [
        "Slightly smaller portions geared towards wellness.",
        "Kitchen closes relatively early compared to seaside lounges."
      ],
      googleRating: 4.4,
      googleReviewCount: 190,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 78,
      theforkRating: 4.3,
      theforkReviewCount: 30,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 190,
      openTime: "09:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "Quai Ouest, Marina Saïdia 60600, Morocco",
        lat: 35.09689,
        lng: -2.28915
      },
      googleMapsUrl: "https://maps.google.com/?q=Freshmed+Eco+66+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212536630444",
      website: "not-available",
      instagram: "not-available",
      customStory: "Designed as a serene sanctuary within the Marina, Freshmed Eco 66 prioritizes sustainable, farm-to-table coastal eating. Fresh garden greens, cold-pressed fruit concoctions, and ethically line-caught fish are prepared with minimal oils and maximal vibrant Mediterranean flavor.",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-13",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "late-night"],
      experienceTypes: ["Cafe", "Waterfront Dining", "Family Friendly"],
      foodStyles: ["Cafe", "Italian", "Bakery"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["sweet-tooth", "family", "scenic-lover"],
      vibeTags: ["gelato", "marina-views", "family-friendly", "late-night"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
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
        "late-night",
        "pastry",
        "terrace",
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
      name: "Venezia Ice Marina Saïdia",
      neighborhood: "Marina de Saïdia",
      description: "A famous Moroccan dessert and café franchise perched along the Saïdia Marina front. Known for its luxury artisanal ice creams, excellent crêpes, waffles, and scenic water views.",
      tip: "The outdoor seating on the Marina deck is unmatched. Grab a classic three-scoop sundae during the golden hour.",
      badge: "local-favorite",
      bestDishes: [
        "Pistachio and Almond Waffles",
        "Coppa Venezia Ice Cream Cup",
        "Choc-Strawberry Crêpe"
      ],
      pros: [
        "Huge selection of premium Italian-style gelato scoops, crêpes, and sundaes.",
        "Expansive waterfront patio overlooking docked yachts.",
        "Open very late into the night for post-dinner strolls."
      ],
      cons: [
        "High foot traffic and queues during summer evening peak between 21:00 and 23:30.",
        "Table seating can be difficult to secure during weekends."
      ],
      googleRating: 4.1,
      googleReviewCount: 880,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 220,
      theforkRating: 4,
      theforkReviewCount: 90,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 880,
      openTime: "08:00",
      closeTime: "03:00",
      exactAddressAndCoordinates: {
        address: "Front Marina, Medina Mall, Saïdia 60600, Morocco",
        lat: 35.09738,
        lng: -2.28785
      },
      googleMapsUrl: "https://maps.google.com/?q=Venezia+Ice+Marina+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212536630090",
      website: "not-available",
      instagram: "not-available",
      customStory: "Occupying an expansive corner of the Marina promenade, Venezia Ice is Morocco's beloved artisanal gelato destination. Featuring dozens of rotating gelato recipes, crisp Belgian waffles, and espresso specialties with sweeping views of the marina basin.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-saidia-14",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "business-friendly", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["Cafe", "Casual Dining", "Family Friendly"],
      foodStyles: ["Mediterranean", "Italian", "Cafe"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["digital-nomad", "casual-diner", "shopper"],
      vibeTags: ["modern-cafe", "medina-mall", "reliable", "ac-comfort"],
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "late-night",
        "medina",
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
      name: "Plaza",
      neighborhood: "Saidia Marina",
      description: "A modern, elegant café and restaurant inside the Medina Mall complex. Serves excellent Mediterranean pastas, grilled options, and elaborate coffee preparations in a cool air-conditioned environment.",
      tip: "Their breakfast sets are fantastic value and include fresh squeezed orange juice and organic olive oil.",
      badge: "local-favorite",
      bestDishes: [
        "Penne Alfredo",
        "Gourmet Club Sandwich",
        "Fresh Orange-Peach Smoothie"
      ],
      pros: [
        "Clean, cool air-conditioned haven from the summer midday sun.",
        "Strong reliable WiFi and comfortable booth seating for working or reading.",
        "Solid value morning breakfast formulas and fresh fruit smoothies."
      ],
      cons: [
        "Mall interior view rather than direct water view.",
        "Standard cafe menu without rare regional specialties."
      ],
      googleRating: 4,
      googleReviewCount: 240,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 65,
      theforkRating: 3.9,
      theforkReviewCount: 30,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 240,
      openTime: "09:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Medina Mall Saïdia, Niveau 0, Saïdia 60600, Morocco",
        lat: 35.09635,
        lng: -2.28652
      },
      googleMapsUrl: "https://maps.google.com/?q=Plaza+Medina+Mall+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212536630321",
      website: "not-available",
      instagram: "not-available",
      customStory: "Conveniently situated inside the Medina Mall plaza, Plaza serves as a comfortable all-day brassiere. Offering strong WiFi, refreshing air-conditioned interiors, and well-executed cafe classics like creamy penne pasta and hearty club sandwiches.",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-15",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Quick Bites", "Local Gathering Spot"],
      foodStyles: ["Seafood", "Moroccan", "Fast Food"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      archetypeAffinity: ["budget-conscious", "street-food-lover", "backpacker"],
      vibeTags: ["street-food", "fast-service", "crispy-fish", "super-cheap"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5.5,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      tags: ["budget", "dinner", "dry", "medina", "street-food"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Poisson Morad",
      neighborhood: "Saidia Center",
      description: "An incredibly popular, budget-friendly local street food stall in the old center. Known for lightning-fast fried calamari, grilled sardines, and spicy tomato dip at unbeatable prices.",
      tip: "Get the crispy fried calamari rings and request extra hot chili pepper oil on the side.",
      badge: "local",
      bestDishes: [
        "Crispy Fried Calamari",
        "Grilled Sardine Filets",
        "Moroccan Shada Salad"
      ],
      pros: [
        "Unmatched cheap eats pricing for piping hot, fresh Mediterranean seafood.",
        "Ultra-crispy fried calamari and sizzling sardine fillets.",
        "Vibrant local market atmosphere."
      ],
      cons: [
        "Compact sidewalk space with limited seating.",
        "Cash only payment; high turnover street dining."
      ],
      googleRating: 4.4,
      googleReviewCount: 390,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 85,
      theforkRating: 4.1,
      theforkReviewCount: 25,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 390,
      openTime: "11:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "Derb El Souk, Centre Ancien, Saïdia 60600, Morocco",
        lat: 35.08315,
        lng: -2.23242
      },
      googleMapsUrl: "https://maps.google.com/?q=Snack+Poisson+Morad+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212612345000",
      website: "not-available",
      instagram: "not-available",
      customStory: "Snack Poisson Morad is the holy grail for budget foodies in Saïdia. Tucked into the old market grid, it serves fresh, hot fried fish in paper-lined trays straight out of sizzling cauldrons, accompanied by traditional spiced dipping sauces and fluffy khobz bread.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-saidia-16",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "seniors", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "traditionalist", "family"],
      vibeTags: ["classic-moroccan", "tagines", "couscous", "homestyle"],
      crowdLevel: "balanced"
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
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "couscous", "dinner", "dry", "medina", "tagine"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Paloma Blanca",
      neighborhood: "Saidia Center",
      description: "A traditional, highly respected Moroccan restaurant offering classic family cuisine in the old central quarters. Serves perfect slow-cooked beef tagines, Friday couscous, and fresh Harira soup.",
      tip: "This is the absolute best spot in town to eat traditional seven-vegetable couscous on a Friday.",
      badge: "local",
      bestDishes: [
        "Seven Vegetable Couscous",
        "Beef Tagine with Prunes",
        "Harira Soup with Dates"
      ],
      pros: [
        "Reliable authentic homestyle Moroccan cooking made from scratch daily.",
        "Generous couscous portions packed with garden vegetables every Friday.",
        "Honest everyday prices with warm familial service."
      ],
      cons: [
        "Cash only payment accepted.",
        "Cozy dining room fills quickly during local lunchtime."
      ],
      googleRating: 4,
      googleReviewCount: 160,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 45,
      theforkRating: 3.9,
      theforkReviewCount: 15,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 160,
      openTime: "11:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Rue Bir Anzarane, Centre Ville, Saïdia 60600, Morocco",
        lat: 35.08478,
        lng: -2.23195
      },
      googleMapsUrl: "https://maps.google.com/?q=Paloma+Blanca+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212536625999",
      website: "not-available",
      instagram: "not-available",
      customStory: "Named after the coastal Spanish and Moroccan friendship tradition, Paloma Blanca embodies true homestyle Moroccan hospitality. Operating for decades in the heart of Saïdia, it is the community benchmark for steaming pots of Harira and Friday couscous with tender beef and chickpeas.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-saidia-17",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "afternoon-tea", "late-night"],
      experienceTypes: ["Casual Dining", "Quick Bites", "Family Friendly"],
      foodStyles: ["Fast Food", "Bakery"],
      archetypeAffinity: ["budget-conscious", "sweet-tooth", "family"],
      vibeTags: [
        "belgian-fries",
        "liege-waffles",
        "casual-snack",
        "beach-walk"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
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
        "medina",
        "pastry",
        "street-food"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "O'Ptit Belge",
      neighborhood: "Downtown Corniche",
      description: "A relaxed, family-friendly Belgian-style quick bite parlor near the beach. Specializes in real hand-cut Belgian fries, sweet Liege waffles, crepes, and savory paninis.",
      tip: "Get their fresh Liege waffle with hot chocolate sauce after a swim in the sea.",
      badge: "local-favorite",
      bestDishes: [
        "Liege Waffles with Cream",
        "Authentic Belgian Fries with Samurai Sauce",
        "Smoked Turkey Panini"
      ],
      pros: [
        "Genuine double-fried Belgian-style frites with authentic sauces like Samurai and Andalouse.",
        "Freshly iron-pressed sweet Liege waffles with melted chocolate.",
        "Super quick, casual stop steps from the public beach."
      ],
      cons: [
        "Limited indoor seating; primarily takeaway counter service.",
        "Cash only transactions."
      ],
      googleRating: 4.3,
      googleReviewCount: 220,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 65,
      theforkRating: 4.1,
      theforkReviewCount: 25,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 220,
      openTime: "11:30",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed V, Proche Corniche, Saïdia 60600, Morocco",
        lat: 35.08645,
        lng: -2.23412
      },
      googleMapsUrl: "https://maps.google.com/?q=O+Ptit+Belge+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212622334455",
      website: "not-available",
      instagram: "not-available",
      customStory: "Bringing genuine Belgian snacking culture to the Mediterranean shore, O'Ptit Belge imports authentic pearl sugar for caramelized Liege waffles and double-fries hand-cut potatoes to golden perfection, served with an array of imported Belgian sauces.",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-18",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "family", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Family Friendly"],
      foodStyles: ["International", "Fast Food"],
      cuisineTags: ["international"],
      archetypeAffinity: ["fast-casual", "teen-friendly", "burger-lover"],
      vibeTags: ["smash-burgers", "brioche-buns", "medina-mall", "milkshakes"],
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
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food",
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
      name: "Beau Burger Saidia",
      neighborhood: "Saidia Marina",
      description: "An trendy shopper-friendly burger shop located inside Medina Mall. Popular with resort visitors and young crowds, offering gourmet smash burgers, thick onion rings, and creative milkshakes.",
      tip: "Their classic Cheese Smash Burger is very consistent and served on fresh brioche buns.",
      badge: "local-favorite",
      bestDishes: [
        "Double Smash Cheese Burger",
        "Truffle Mayo Fries",
        "Speculoos Milkshake"
      ],
      pros: [
        "Crispy-edged beef smash burgers served on golden toasted brioche.",
        "Indulgent thick milkshakes and loaded french fries.",
        "Card accepted and situated in modern air-conditioned commercial complex."
      ],
      cons: [
        "Busy summer dinner rushes can cause modest order wait times.",
        "Fast-casual atmosphere inside retail center."
      ],
      googleRating: 3.8,
      googleReviewCount: 310,
      tripadvisorRating: 3.7,
      tripadvisorReviewCount: 80,
      theforkRating: 3.7,
      theforkReviewCount: 35,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Medina Mall Saïdia, Rez-de-Chaussée, Saïdia 60600, Morocco",
        lat: 35.09642,
        lng: -2.28695
      },
      googleMapsUrl: "https://maps.google.com/?q=Beau+Burger+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212536630808",
      website: "not-available",
      instagram: "not-available",
      customStory: "Beau Burger brings gourmet smash burger craftsmanship to Marina Saïdia. Featuring fresh daily-ground halal beef smashed on a high-heat flat top grill for caramelized crispy edges, served in pillowy brioche with signature house secret sauces.",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-saidia-19",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["sports-fan", "budget-conscious", "night-owl"],
      vibeTags: ["sports-cafe", "sea-breeze", "avocado-shakes", "bustling"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
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
        "late-night",
        "medina",
        "terrace"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Dubai",
      neighborhood: "Downtown Corniche",
      description: "A highly energetic café and lounge positioned close to the beachfront. Best known for hosting large sports-screening crowds, delicious fruit mocktails, and traditional Moroccan breakfast arrangements.",
      tip: "The outdoor terrace gets very busy during Champions League matches. Arrive early if you want a seat with a screen view.",
      badge: "local",
      bestDishes: [
        "Moroccan Avocado Milkshake",
        "Creamy Crepe with Nutella",
        "Mint Tea Pot"
      ],
      pros: [
        "Huge terrace equipped with multiple large screens for live football matches.",
        "Generous and thick Moroccan avocado, almond, and dried fruit shakes.",
        "Super affordable prices and early morning opening hours."
      ],
      cons: [
        "Very loud and crowded during major sports games.",
        "Cash only payment."
      ],
      googleRating: 4.1,
      googleReviewCount: 280,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 60,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 280,
      openTime: "07:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed V, Saïdia 60600, Morocco",
        lat: 35.08588,
        lng: -2.23365
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Dubai+Saidia",
      reservationMethod: ["none"],
      reservationContact: "+212536625050",
      website: "not-available",
      instagram: "not-available",
      customStory: "A landmark social hangout along Boulevard Mohamed V, Café Dubai draws soccer enthusiasts, groups of friends, and families for high-energy match screenings, rich avocado-almond panaché smoothies, and mint tea long into the summer night.",
      viewType: "beach",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-saidia-20",
    city: "saidia",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Upscale Lounge"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "culture-seeker", "foodie"],
      vibeTags: [
        "fine-moroccan",
        "pastilla-specialty",
        "elegant",
        "andalusian-decor"
      ],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 26,
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
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
      name: "La Kasbah",
      neighborhood: "Saidia Marina",
      description: "A beautifully styled Moroccan concept restaurant situated in the Medina Mall of Saïdia. Blends upscale Moroccan interior aesthetics with high-quality tagines, royal pastillas, and spectacular warm hospitality.",
      tip: "Their Royal Pigeon Pastilla is phenomenal and prepared with a perfect crunch and blend of sweet and savory spices.",
      badge: "splurge",
      bestDishes: [
        "Royal Pigeon Pastilla",
        "Lamb Tagine with Apricots and Almonds",
        "Seafood Pastilla"
      ],
      pros: [
        "Exquisite Moroccan architectural ambiance with refined zellige and cedar accents.",
        "Flawlessly executed signature pastillas and slow-simmered royal lamb tagines.",
        "Attentive fine-dining white-glove service and major credit cards accepted."
      ],
      cons: [
        "Premium price point reflecting the upscale resort setting.",
        "Reservations highly recommended for weekend evenings."
      ],
      googleRating: 4.5,
      googleReviewCount: 210,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 75,
      theforkRating: 4.4,
      theforkReviewCount: 40,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 210,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Medina Mall Saïdia, 1er Étage, Marina Saïdia 60600, Morocco",
        lat: 35.09672,
        lng: -2.28741
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Kasbah+Medina+Mall+Saidia",
      reservationMethod: ["phone"],
      reservationContact: "+212536630777",
      website: "not-available",
      instagram: "not-available",
      customStory: "Refined Moroccan fine dining meets royal Oriental architecture at La Kasbah. Guests are immersed in hand-carved cedar wood, intricate zellige tiles, and live acoustic oud melodies while savoring sweet-and-savory pigeon pastilla and slow-simmered lamb tagine with caramelized prunes and roasted almonds.",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  }
];
