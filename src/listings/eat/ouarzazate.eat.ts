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

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "French-Moroccan", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture", "first-timer"],
      vibeTags: ["romantic", "candlelit", "upscale", "palace"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Kasbah des Sables",
      neighborhood: "Kasbah Taourirt",
      description: "An extraordinary gourmet destination located in Ouarzazate's historic Ait Kdif quarter beside Kasbah Taourirt. Built like an opulent desert palace, it features distinct dining salons, a central plunge pool, and intricate Amazigh craftsmanship.",
      tip: "Sit around the central pool in the evening. Note that it closes on Sundays and pauses between lunch (12:00–14:30) and dinner (19:00–23:30).",
      badge: "splurge",
      bestDishes: [
        "Lamb Chops with Potato Purée",
        "Argan-infused Lamb Tagine",
        "Pastilla with Almond Milk"
      ],
      pros: [
        "Atmospheric lantern-lit courtyard and plunge pool setting",
        "Polished, attentive multilingual service",
        "Wide mix of Moroccan classics, prime steaks, and wine"
      ],
      cons: [
        "Closed on Sundays and split lunch/dinner service hours",
        "Higher price point than central Ouarzazate eateries",
        "Surrounding residential streets are dimly lit at night"
      ],
      googleRating: 4.5,
      googleReviewCount: 488,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 579,
      theforkRating: 4.5,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1070,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Kasbah+des+Sables+Ouarzazate",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212524885428",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://www.instagram.com/kasbah_des_sables",
      viewType: "garden",
      bestTimeToVisit: "Evening from 19:00 for candlelit courtyard ambiance",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Upscale & Card OK",
        description: "Printed menu pricing is clear and credit cards are accepted, though mains and wine place it among Ouarzazate's pricier splurge venues.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High Hygiene",
        description: "Well-maintained gourmet kitchen with strong traveler feedback on freshness, clean restrooms, and properly chilled drinks.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "French-Moroccan Fusion",
        description: "Combines traditional Moroccan tagines and pastillas with French steaks and seafood; likely halal food with alcohol served separately.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Candlelit Oasis",
        description: "Quiet, intimate lantern-lit courtyard inside with AC; can get lively when full, and the exterior alley is unassuming—arrive by taxi at night.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Polished & Unhurried",
        description: "Gracious, unhurried hospitality where staff speak French and English well. Book ahead for poolside tables and avoid Sundays when it is closed.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-2",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Mediterranean", "French-Moroccan", "Moroccan", "Italian"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["historic", "cinema-heritage", "bustling"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 13,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["alcohol", "dinner", "late-night", "tagine", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Chez Dimitri",
      neighborhood: "Centre-Ville",
      description: "Ouarzazate's oldest and most legendary restaurant, operating since 1928. Originally a Foreign Legion post, it is decorated with decades of signed movie star photos, from Orson Welles and Ridley Scott to Michael Douglas.",
      tip: "Status Alert: Multiple 2026 directories report the historic property was put up for sale and marked permanently closed. Confirm locally before heading there.",
      badge: "local-favorite",
      bestDishes: [
        "Classic French Steak Frites",
        "Lamb Tagine with Prunes",
        "Handmade Thin Crust Pizza"
      ],
      pros: [
        "Iconic 1928 film-history decor and central Avenue Mohammed V address",
        "Broad European-Moroccan menu with licensed bar",
        "Shaded terrace and air-conditioned indoor dining room"
      ],
      cons: [
        "Reported permanently closed / property up for sale in 2026",
        "Mixed late-era reviews regarding service consistency",
        "Can feel tourist-oriented during peak tour bus hours"
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
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://www.restaurantchezdimitri.com",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Verify current opening status before visiting",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Mid-Range / Verify",
        description: "Historically offered printed menus and card payment, though mid-range pricing reflected its landmark film-history status.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Standard Bistro",
        description: "Long-running established kitchen with indoor AC, though due to 2026 closure reports, verify active operations before dining.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Old-School Franco-Moroccan",
        description: "Known more for classic French bistro plates, pizzas, and nostalgia than cutting-edge local home cooking.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Vintage Film Museum",
        description: "Walls covered in signed celebrity portraits create a lively museum vibe, with both AC dining and street-side terrace seating.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Check Closure Status",
        description: "Currently flagged as possibly permanently closed in 2026; call ahead or verify on site before planning a meal here.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-3",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["Moroccan", "French-Moroccan", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["refined", "romantic", "upscale"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 21,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "pastilla",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Jardin des Arômes",
      neighborhood: "Centre-Ville",
      description: "A stylish and refined French-Moroccan fusion restaurant. It offers an upscale dining experience with beautifully presented stews and modern steaks inside a chic Moroccan salon and fragrant garden.",
      tip: "Status Alert: Travel guides in late 2026 note reports of temporary closure and inconsistent hours (traditionally closed Mondays). Call +212 524 88 88 02 to confirm before going.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Chicken Pastilla",
        "Slow-cooked Beef Tagine",
        "Chocolate Fondant"
      ],
      pros: [
        "Delicate French-Moroccan fusion that feels lighter than typical tourist menus",
        "Chic salon and peaceful garden ambiance in the city center",
        "Good wine pairings and attentive plating"
      ],
      cons: [
        "Reports of temporary closure and unpredictable hours in late 2026",
        "Traditionally closed on Mondays",
        "Premium pricing by Ouarzazate standards"
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
      reservationMethod: ["phone"],
      reservationContact: "+212524888802",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Verify open status first; evenings around 19:30",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fine Dining Value",
        description: "Higher prices than casual Ouarzazate spots, yet consistently praised as good value compared with European fine dining; cards accepted.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High Kitchen Standards",
        description: "Refined preparation using fresh seasonal produce in a clean, air-conditioned salon environment.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Refined Fusion",
        description: "Elevates Moroccan classics with French culinary technique rather than rustic street-style cooking; serves wine and beer.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Peaceful & Romantic",
        description: "Quiet, tasteful garden and salon setting well-suited for couples, families, and business dinners away from street noise.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Confirm Hours First",
        description: "Normally closed Mondays and flagged for possible temporary closure in late 2026—call +212 524 88 88 02 before visiting.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-4",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["French-Moroccan", "Mediterranean", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["intimate", "bistro", "nostalgic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["alcohol", "dinner", "fine", "sunset", "wifi"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Relais de Saint-Exupéry",
      neighborhood: "Centre-Ville",
      description: "A cozy French bistro celebrating the writer-aviator Antoine de Saint-Exupéry. Managed by a Bordeaux chef, it serves classic French delicacies and dromedary steak using fresh local products.",
      tip: "Located at 13 Boulevard Moulay Abdellah. Restaurant Guru currently flags it as temporarily closed despite mid-2026 traveler reviews—call ahead to verify.",
      badge: "hidden-gem",
      bestDishes: [
        "Dromedary Meat with Mashed Vegetables",
        "Duck Confit",
        "Warm Apple Tarte Tatin"
      ],
      pros: [
        "Intimate French aviation decor and curated Moroccan wine list",
        "Distinctive menu featuring duck confit, seafood pasta, and camel steak",
        "Quiet central location with indoor climate control"
      ],
      cons: [
        "Conflicting open status—flagged as temporarily closed on some platforms",
        "Limited capacity and no outdoor terrace seating",
        "Not wheelchair accessible"
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
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Confirm status first; evenings after 20:00",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fair Bistro Pricing",
        description: "Transparent menu pricing in the mid-to-upper bracket with card payment accepted; wine adds noticeably to the final bill.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Chef-Run Kitchen",
        description: "French-managed kitchen focused on fresh market ingredients and made-to-order plates.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "French Bistro Focus",
        description: "Ideal when you want authentic French cuisine rather than traditional Moroccan tagines; serves alcohol.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cozy & Nostalgic",
        description: "Small, quiet aviation-themed dining room with AC; no outdoor terrace and limited accessibility for wheelchairs.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Verify Open Status",
        description: "Conflicting 2026 status (marked temporarily closed on Restaurant Guru)—call +212 524 88 77 79 before making the trip.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-5",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "street-food", "traditional"],
      foodStyles: ["Moroccan", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "adventure", "first-timer"],
      vibeTags: ["authentic", "no-frills", "local-canteen"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 4.5,
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
      ramadanFriendly: "closed",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "street-side"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "grill"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "El Bahja",
      neighborhood: "Centre-Ville",
      description: "A classic, no-frills local canteen in the Douar Cheums edge of Centre-Ville on Avenue Moulay Tahar Ben Abdelkarim. Always humming with locals and desert drivers, it serves charcoal-grilled meats, rotisserie chicken, and spiced bean stews.",
      tip: "Order their famous 'loubia' (spiced white beans) alongside a mixed charcoal grill. Note: there is also a newer 'Snack Spécial Grillades El Bahja' on Av. Mohammed V; this listing is the traditional Douar Cheums canteen.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Charcoal Grill Platter",
        "Spiced Loubia (White Beans)",
        "Rotisserie Chicken with Olives"
      ],
      pros: [
        "Unbeatable local prices (~40–50 MAD per person)",
        "Fast turnover so grilled meats and stews are piping hot",
        "Genuine neighborhood atmosphere favored by locals"
      ],
      cons: [
        "Very basic decor with no AC, Wi-Fi, or English menus",
        "Cash only",
        "Often closed during Ramadan daytime hours"
      ],
      googleRating: 4,
      googleReviewCount: 816,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 210,
      theforkRating: 4,
      theforkReviewCount: 50,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 826,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bahja+Ouarzazate",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 or early dinner around 19:30",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Ultra-Budget Cash",
        description: "Local canteen prices around 40–60 MAD per meal; bring small Moroccan dirham bills as it is strictly cash only.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High-Turnover Grill",
        description: "Very high local foot traffic keeps charcoal meats and stews moving fast; stick to freshly cooked hot dishes and bottled water.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "100% Local Canteen",
        description: "Everyday Moroccan working-class food—charcoal brochettes, rotisserie chicken, and loubia—cooked for locals rather than tourists.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "No-Frills & Bustling",
        description: "Simple plastic/laminate seating with street noise and no air conditioning; best enjoyed for quick, casual meals.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fast & French/Darija",
        description: "Walk-in only with brisk service. English is limited, so pointing at the grill or ordering in basic French/Darija works best.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-6",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional", "rooftop"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["rooftop", "traditional", "scenic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 9.5,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "pastilla",
        "rooftop",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Douyria",
      neighborhood: "Kasbah Taourirt",
      description: "A cozy traditional Moroccan restaurant on Avenue Mohammed V featuring Berber carpets and a scenic rooftop terrace overlooking Kasbah Taourirt. Trusted for Friday couscous, pigeon pastilla, and camel or goat tagines.",
      tip: "Licensed to serve beer and Moroccan wine. Grab a rooftop table around sunset for views over Kasbah Taourirt; note split service hours (11:30–15:00 and 18:45–22:30).",
      badge: "local-favorite",
      bestDishes: [
        "Dromedary Meat Tagine",
        "Pigeon Pastilla with Almonds",
        "Friday Seven-Vegetable Couscous"
      ],
      pros: [
        "Rooftop terrace with direct sunset views of Kasbah Taourirt",
        "English-speaking staff and licensed alcohol service",
        "Adventurous regional dishes like camel tagine and marinated liver"
      ],
      cons: [
        "Service can slow down considerably during busy dinner rushes",
        "Recent mixed feedback on occasional dry chicken tagine or abrupt billing",
        "No AC and rooftop requires climbing stairs"
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
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Sunset around 18:45 for rooftop seating",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Tourist-Priced / Clarify Bill",
        description: "Higher than neighborhood canteens due to its Kasbah view; cards are accepted, though a few diners note brisk payment handling—check your bill.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Reliable Kitchen",
        description: "Clean, well-kept traditional dining room popular with international travelers; tagines arrive piping hot in clay pots.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Regional Specialties",
        description: "Strong showcase of southern Moroccan dishes including camel, baby goat, and pigeon pastilla, though chicken tagines occasionally run dry.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Scenic Rooftop",
        description: "Beautiful Moroccan carpet decor and breezy rooftop views over Kasbah Taourirt; no AC indoors and stairs required for the terrace.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Unhurried at Peak",
        description: "Friendly, English-speaking waiters, though kitchen wait times stretch when tour groups arrive. Arrive right at 18:45 for a rooftop table.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-7",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "flexible"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Mediterranean", "Italian", "Moroccan", "Cafe & Pastry"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "nomad", "budget"],
      vibeTags: ["clean", "modern", "family-friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "cafe-pastry",
        "dinner",
        "dry",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "The Full Sun",
      neighborhood: "Kasbah Taourirt",
      description: "A contemporary, spotless restaurant and cafe at N° 706 Avenue Moulay Rachid near the Ibis Hotel. Celebrated for fresh salads, burgers, homemade pizzas, fruit-and-nut tagines, and attentive hospitality.",
      tip: "Accepts credit cards and features indoor AC plus outdoor cooling mist sprays in summer. Open daily from 09:30 to 23:30.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Tagine with Preserved Lemon",
        "Build-your-own Fresh Salad",
        "Homemade Beef Burger"
      ],
      pros: [
        "Ouarzazate's highest review volume and consistency (4.7+ across 2,300+ reviews)",
        "Spotless facilities, full wheelchair accessibility, AC, and cooling patio misters",
        "Accepts credit cards with multilingual staff"
      ],
      cons: [
        "Alcohol-free venue",
        "Located in the hotel corridor slightly east of the central square",
        "Popular with tour groups at dinner"
      ],
      googleRating: 4.7,
      googleReviewCount: 2358,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 685,
      theforkRating: 4.7,
      theforkReviewCount: 110,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2876,
      openTime: "09:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+The+Full+Sun+Ouarzazate",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212808588562",
      bookingUrl: "https://www.the-fullsun.com",
      whatsappNumber: "",
      website: "https://www.the-fullsun.com",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late morning or dinner around 19:30",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Transparent & Card OK",
        description: "Clear printed menus, generous portions, and reliable credit card acceptance with no hidden tourist markups.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Spotless Hygiene",
        description: "Frequently singled out by travelers as one of the cleanest kitchens and restrooms in Ouarzazate, even for raw salads and smoothies.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Modern Crowd-Pleaser",
        description: "Blends well-executed Moroccan tagines and harira with burgers, tacos, and Italian plates; 100% halal and alcohol-free.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cool & Accessible",
        description: "Indoor AC, shaded terrace with summer water-mist cooling, wheelchair access, and reliable Wi-Fi make it effortless in any weather.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Proactive Hospitality",
        description: "Hands-on owner and fluent English/French/Arabic staff known for adjusting blinds at sunset and keeping wait times short.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-8",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["breakfast", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["Moroccan", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture", "adventure"],
      vibeTags: ["serene", "poolside", "palm-grove", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "alcohol",
        "breakfast",
        "dinner",
        "fine",
        "mountain",
        "quiet",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Chamaa Restaurant",
      neighborhood: "Tabount",
      description: "A peaceful boutique riad restaurant offering poolside dining surrounded by olive and palm trees in Tajda (Tarmigt/Tabount area). Known for romantic evening set menus under the stars with Atlas views.",
      tip: "About 3 km south of Centre-Ville in the palm grove. Reserve ahead for non-staying dinner guests and enjoy their Moroccan wine and beer selection by the pool.",
      badge: "hidden-gem",
      bestDishes: [
        "Beef Tagine with Caramelized Prunes",
        "Vegetable Medley & Cheese Feuilleté",
        "Crème Brûlée"
      ],
      pros: [
        "Tranquil poolside palm-grove ambiance away from town traffic",
        "Accommodating kitchen happy to prepare vegetarian or kid-friendly plates",
        "Accepts Visa/Mastercard and serves wine and beer"
      ],
      cons: [
        "Requires a short taxi or car ride outside Centre-Ville",
        "Evening dining typically follows a fixed set menu rather than vast à la carte",
        "Walk-in availability can be limited when the riad is full"
      ],
      googleRating: 4.6,
      googleReviewCount: 736,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 935,
      theforkRating: 4.5,
      theforkReviewCount: 60,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 520,
      openTime: "08:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Chamaa+Ouarzazate",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212524854954",
      bookingUrl: "https://www.darchamaa.com",
      whatsappNumber: "",
      website: "https://www.darchamaa.com",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Sunset around 18:30 for poolside dinner",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Set Menu & Cards OK",
        description: "Set-menu pricing is transparent and Visa/Mastercard are accepted, with free on-site parking if driving.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Impeccable Riad Hygiene",
        description: "Consistently top-scored by hotel and dining guests (9.3 cleanliness ratings) for fresh, freshly plated evening meals.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Refined Home-Style",
        description: "Blends homemade Moroccan dishes with European classics; very accommodating for vegetarian or custom requests, with alcohol available.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet Palm Grove",
        description: "Serene poolside and olive-garden setting with Atlas Mountain backdrops, far from the bustle of main avenues.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Warm & Multilingual",
        description: "Staff speak English, French, Spanish, and Arabic; call ahead if you are not an overnight guest so they can set a table.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-9",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "budget", "culture"],
      vibeTags: ["authentic", "convenient", "cozy"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "dinner",
        "dry",
        "pastilla",
        "riad",
        "sunset",
        "tagine",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant 3 Thés",
      neighborhood: "Centre-Ville",
      description: "A charming Moroccan riad-style restaurant and cafe at 1 Avenue Moulay Rachid near the CTM bus station. Features wrought-iron sidewalk seating, cozy Moroccan salons, affordable tagines, and fragrant teas.",
      tip: "Right behind the CTM terminal—ideal for a relaxed meal or mint tea while waiting for your bus. Confirm card terminal availability before ordering as cash is preferred.",
      badge: "local-favorite",
      bestDishes: [
        "Berber Tagine with Vegetables",
        "Meat Tagine with Figs & Prunes",
        "Chicken Pastilla"
      ],
      pros: [
        "Very convenient location beside the CTM bus terminal",
        "Affordable mains (often 35–65 MAD) and welcoming tea service",
        "Cozy indoor salon plus shaded street-side terrace"
      ],
      cons: [
        "No air conditioning or dedicated Wi-Fi",
        "Smaller scale and modest amenities compared with modern bistros",
        "Sidewalk tables face regular city-center traffic"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212524886363",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch or early evening before 20:00",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Budget-Friendly",
        description: "Reasonable set menus and main dishes with upfront prices; carry cash as backup in case the card machine is offline.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Traditional Kitchen",
        description: "Long-established central eatery serving freshly simmered tagines and hot mint tea; choose cooked dishes over raw sides.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Classic Moroccan",
        description: "Straightforward, comforting Moroccan tagines, pastilla, and salads with a couple of casual burger/snack options; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cozy Cafe Vibe",
        description: "Artistic, relaxed interior and Parisian-style sidewalk chairs; lacks AC during peak summer afternoons.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Relaxed Pace",
        description: "Friendly, unhurried service; let staff know if you have a CTM bus departure so they prioritize your order.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-10",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "flexible"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Moroccan", "Cafe & Pastry", "Italian"],
      cuisineTags: ["cafe-pastry", "international", "moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["central", "casual", "street-side"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Kasbah Tafarnout",
      neighborhood: "Centre-Ville",
      description: "A large three-level café-restaurant at 74 Avenue Mohammed V serving quick Moroccan breakfasts, tagines, grills, pizzas, and juices in the heart of town.",
      tip: "Best treated as a convenient coffee, juice, or quick breakfast stop on Avenue Mohammed V; recent traveler ratings for full meals are mixed.",
      badge: "local",
      bestDishes: [
        "Moroccan Breakfast Board",
        "Chicken Tagine",
        "Fresh Orange Juice"
      ],
      pros: [
        "Long daily hours (07:00–00:00) on central Avenue Mohammed V",
        "Spacious multi-level seating with AC",
        "Wide selection from morning coffee to late-evening meals"
      ],
      cons: [
        "Low recent visitor scores on Restaurant Guru (1.8/5) and mixed feedback on food quality",
        "Cash only",
        "Can feel impersonal during busy tourist periods"
      ],
      googleRating: 3.8,
      googleReviewCount: 370,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 180,
      theforkRating: 3.9,
      theforkReviewCount: 40,
      restaurantguruRating: 1.8,
      restaurantguruReviewCount: 135,
      openTime: "07:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Kasbah+Tafarnout+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524883416",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Morning coffee or juice stop",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Check Menu Prices",
        description: "Cash-only central venue; check the printed menu prices before ordering as value perception among recent diners is mixed.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Stick to Hot Basics",
        description: "Given uneven recent reviews, stick to hot coffee, tea, freshly squeezed juices, or freshly baked items rather than complex dishes.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Standard Tourist Menu",
        description: "Broad multi-cuisine menu covering Moroccan staples, grills, and pizza rather than standout regional home cooking.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Spacious & Central",
        description: "Three floors right on busy Avenue Mohammed V with air conditioning indoors; bustling street-level vibe.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Mixed Recent Reviews",
        description: "Easy walk-in access all day, though service attentiveness and food consistency receive frequent criticism online.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-11",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "traditional", "rooftop"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer", "culture"],
      vibeTags: ["family-run", "authentic", "kasbah-view"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7.5,
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
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["budget", "couscous", "dinner", "dry", "tagine", "terrace"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Sabrine",
      neighborhood: "Kasbah Taourirt",
      description: "A beloved family-run cafe and restaurant directly opposite Kasbah Taourirt on Avenue Mohammed V. Known for rooftop/terrace views of the kasbah walls, slow-cooked Berber tagines, fluffy couscous, and warm hospitality.",
      tip: "Ask for a seat on the upper terrace overlooking Kasbah Taourirt. Great budget value—just remember to bring cash and ask for the bill a bit early when busy.",
      badge: "local",
      bestDishes: [
        "Tender Lamb Couscous",
        "Kefta Egg Tagine",
        "Berber Omelette"
      ],
      pros: [
        "Direct views of Kasbah Taourirt from the terrace",
        "Generous portions and slow-cooked flavor at very fair prices",
        "Warm, attentive family hospitality and vegan/halal options"
      ],
      cons: [
        "Cash only",
        "Getting the bill can take a few extra minutes",
        "No Wi-Fi"
      ],
      googleRating: 4.7,
      googleReviewCount: 488,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 84,
      theforkRating: 4.6,
      theforkReviewCount: 50,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 584,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Sabrine+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212661948640",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "landmark",
      bestTimeToVisit: "Lunch or late afternoon overlooking the kasbah",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Honest Budget Value",
        description: "Very fair prices (typically 40–80 MAD per person) with generous portions; cash only, so carry small dirham notes.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Freshly Simmered",
        description: "High 4.7/5 traveler ratings highlight fresh Berber omelettes, hot slow-cooked tagines, and clean terrace dining.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Home-Style Berber",
        description: "Authentic family cooking—tender meat couscous, kefta tagine, and eggplant salad—100% halal and dry.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Peaceful Kasbah View",
        description: "Relaxed, unhurried terrace overlooking Kasbah Taourirt and street life, with indoor AC seating below.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Warm & Laid-Back",
        description: "Friendly staff who let you linger over tea; bringing the check can be slow, so request it slightly ahead of time.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-12",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["casual", "cafes-tea", "rooftop"],
      foodStyles: ["Mediterranean", "Italian", "Cafe & Pastry", "Moroccan"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "budget", "first-timer"],
      vibeTags: ["breezy", "modern-cafe", "people-watching"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Terrasse Café & Restaurant",
      neighborhood: "Centre-Ville",
      description: "A lively cafe and restaurant on Avenue Mohammed V known for its breezy terrace, cozy fireplace corner, diverse healthy/Moroccan breakfasts, mocktails, and light Italian dishes.",
      tip: "Great morning stop for varied breakfast boards and fresh avocado-almond shakes, or evening hangout for mocktails and espresso.",
      badge: "local",
      bestDishes: [
        "Moroccan & Healthy Breakfast Boards",
        "Fresh Avocado Almond Shake",
        "Alfredo Penne Pasta"
      ],
      pros: [
        "Consistently high ratings (4.3 Google / 4.8 Restaurant Guru)",
        "Great coffee, mocktails, and diverse breakfast menus",
        "Open early until late with Wi-Fi"
      ],
      cons: [
        "No dedicated AC and stairs to upper seating",
        "Can be bustling and noisy along Avenue Mohammed V",
        "Limited parking right outside"
      ],
      googleRating: 4.3,
      googleReviewCount: 423,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 458,
      openTime: "07:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Terrasse+Cafe+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524883361",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early morning (08:30–10:30) for breakfast",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Affordable Cafe",
        description: "Well-priced breakfasts, coffees, and mains clearly printed on menus; bring cash backup if card terminals are busy.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh Ingredients",
        description: "Praised by visitors for fresh juices, clean coffee bar prep, and well-presented breakfast plates.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Moroccan-Cafe Mix",
        description: "Combines traditional Moroccan breakfast spreads with European cafe staples, pastas, and non-alcoholic mocktails.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Lively Terrace",
        description: "Breezy terrace and fireplace indoor seating with Wi-Fi; vibrant street energy means it is livelier than a quiet riad.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Easy Walk-In",
        description: "Quick, accommodating service for solo travelers and groups from early morning through late evening.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-13",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Moroccan", "Italian", "Grill & BBQ", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["budget", "nomad"],
      vibeTags: ["local-hangout", "casual", "street-side"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Afoulki Café Restaurant",
      neighborhood: "Centre-Ville",
      description: "A casual neighborhood cafe-restaurant at 356 Avenue Al Maghrib Al Arabi with shaded terrace seating, indoor fireplace, coffee, desserts, grilled meats, pizzas, and paninis.",
      tip: "Located on Avenue Al Maghrib Al Arabi (not Avenue Mohammed V). Best suited for coffee, tea, or simple snacks; recent meal ratings are low.",
      badge: "local",
      bestDishes: [
        "Msemen with Honey & Mint Tea",
        "Spiced Charcoal Mixed Grill",
        "Margherita Pizza"
      ],
      pros: [
        "Low prices and long opening hours for casual tea or snacks",
        "Shaded street terrace plus indoor fireplace in winter",
        "Convenient neighborhood spot near central avenues"
      ],
      cons: [
        "Low recent Restaurant Guru rating (2.9/5 across 449 reviews)",
        "Cash only, no AC, and no Wi-Fi",
        "Food and service consistency varies noticeably"
      ],
      googleRating: 3.6,
      googleReviewCount: 310,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 90,
      theforkRating: 3.8,
      theforkReviewCount: 20,
      restaurantguruRating: 2.9,
      restaurantguruReviewCount: 449,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Afoulki+Cafe+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524890019",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Evening tea or coffee",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Low-Cost Cash Only",
        description: "Inexpensive local cafe pricing; bring cash and verify totals on simple handwritten checks.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Basic Cafe Standards",
        description: "With uneven 2.9/5 visitor reviews, stick to hot tea, coffee, bottled drinks, and well-cooked grilled items.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Everyday Snack Menu",
        description: "Standard Moroccan cafe fare (msemen, paninis, pizzas, grills) catering primarily to neighborhood regulars; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Street-Side & Smokers",
        description: "Lively local cafe with street noise, outdoor terrace seating, and a cozy indoor fireplace on cool nights, but no AC.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Variable Pacing",
        description: "Walk-in friendly; service can be slow or inattentive at peak hours, so keep expectations simple.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-14",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea", "flexible"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Moroccan", "Cafe & Pastry", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer", "culture"],
      vibeTags: ["square-view", "bustling", "bakery"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 5.5,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastilla",
        "pastry",
        "tagine",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Habous",
      neighborhood: "Al Mouahidine",
      description: "A landmark bakery, pastry shop, and multi-level restaurant on Place Al-Mouahidine. Famous for Moroccan pastries, chicken pastilla, zaalouk, and prime square-facing terraces.",
      tip: "You can pick pastries directly at the bakery counter and enjoy them on the terrace with mint tea. Come early for the freshest baked goods; service slows down when the square fills up.",
      badge: "local",
      bestDishes: [
        "Chicken Pastilla",
        "Almond Ghriba & Moroccan Pastries",
        "Zaalouk & Kefta Tagine"
      ],
      pros: [
        "Unbeatable people-watching location right on Place Al-Mouahidine",
        "Wheelchair-accessible ground level and very affordable prices",
        "Huge selection from morning pastries to evening pastilla and tagines"
      ],
      cons: [
        "Slow, sometimes disorganized service during busy evening rushes",
        "Indoor cooling/AC is often weak or off on hot days",
        "Cash only, and occasional complaints about day-old counter pastries"
      ],
      googleRating: 4,
      googleReviewCount: 1098,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 380,
      theforkRating: 4.1,
      theforkReviewCount: 60,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1105,
      openTime: "07:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Cafe+Habous+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212661394402",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Morning for fresh pastries or evening for square atmosphere",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Affordable Square Spot",
        description: "Budget-friendly pastry and bistro prices despite its prime Place Al-Mouahidine address; bring cash as cards aren't supported.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Pick Fresh Batches",
        description: "Busy high-volume bakery and kitchen; pick fast-moving morning pastries or freshly cooked hot pastillas and tagines.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Classic Pastries & Pastilla",
        description: "Popular for Moroccan almond cookies, zaalouk, and chicken pastilla alongside fast-food pizzas and shawarma; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Vibrant Main Square",
        description: "Calm by day and lively after dusk on Place Al-Mouahidine; wheelchair accessible downstairs, though indoor cooling can lag in heat.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Can Be Slow & Chaotic",
        description: "High customer volume frequently causes delays and communication hiccups between bakery and terrace waiters—avoid if in a rush.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-15",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Mediterranean", "Italian", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "budget"],
      vibeTags: ["calm", "modern", "non-smoking-area"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8,
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
      paymentMethods: ["cash", "credit_card"],
      tags: ["breakfast", "budget", "cafe-pastry", "dinner", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant César",
      neighborhood: "Centre-Ville",
      description: "A calm, contemporary cafe and bistro on Boulevard Moulay Abdellah. Serves budget-friendly breakfasts (20–30 MAD), espresso, teas, burgers, and Italian-inspired pasta with a dedicated non-smoking zone.",
      tip: "One of the few modern cafes in Centre-Ville with a designated non-smoking section, reliable AC, and Wi-Fi for remote work.",
      badge: "local",
      bestDishes: [
        "Full Morning Breakfast Set",
        "Italian Double Espresso",
        "Chicken Alfredo Pasta"
      ],
      pros: [
        "Clean, calm interior with AC, Wi-Fi, and dedicated non-smoking area",
        "Very affordable morning breakfast sets (20–30 MAD)",
        "Wheelchair accessible with parking nearby"
      ],
      cons: [
        "Occasional stockouts that can cause 15–20 minute waits",
        "Indoor-only vibe lacks scenic views",
        "Modest review volume compared with older landmarks"
      ],
      googleRating: 4,
      googleReviewCount: 130,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 40,
      theforkRating: 4,
      theforkReviewCount: 15,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 125,
      openTime: "07:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cesar+Cafe+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524884129",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Morning from 08:00 for quiet breakfast",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Great Breakfast Value",
        description: "Full breakfast menus with drinks run roughly 20–30 MAD; printed menu prices and credit cards accepted.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Modern Cafe",
        description: "Tidy modern kitchen and clean restrooms; food is cooked fresh to order.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Modern Bistro Fare",
        description: "Focuses on espresso, tea selections, burgers, and pastas rather than traditional clay-pot Moroccan cuisine; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Calm & Smoke-Free Option",
        description: "Quiet, family-friendly modern room with air conditioning, Wi-Fi, wheelchair access, and a dedicated non-smoking section.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Polite / Occasional Delay",
        description: "Friendly staff, though missing breakfast items can occasionally mean a 15–20 minute wait while they restock.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-16",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["traditional", "group-friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 12,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "couscous",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Oasis",
      neighborhood: "Kasbah Taourirt",
      description: "Listed as a traditional Moroccan dining room near Taourirt Kasbah serving classic tagines, pastillas, and couscous for families and groups.",
      tip: "Verification Alert: Could not be confirmed at an active Ait Kdif / Kasbah Taourirt address in 2026 searches (most 'Oasis' restaurants are in Fint Oasis or Aït Benhaddou). Hidden until verified.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Couscous with Seven Vegetables",
        "Beef Tagine with Almonds",
        "Traditional Harira Soup"
      ],
      pros: [
        "Designed for group and family Moroccan meals near Taourirt",
        "Alcohol-free traditional menu"
      ],
      cons: [
        "Unverified active status and missing contact phone number",
        "Easy to confuse with Oasis de Fint (20 km away)"
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
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Verify active location before visiting",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Unverified Listing",
        description: "Listed around mid-range group menu prices, though current menu pricing and card acceptance remain unverified.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Pending Verification",
        description: "Hygiene and active kitchen operations could not be independently confirmed in 2026 checks.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Group Moroccan Staples",
        description: "Traditional couscous, harira, and tagines aimed at visiting families and tour groups; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Indoor Salon",
        description: "Traditional zellige and arched indoor dining room suited for groups, without verified outdoor seating.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Confirm Locally First",
        description: "No verified phone contact on file and possible confusion with Oasis de Fint—confirm locally before heading over.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-17",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Italian", "Moroccan", "Mediterranean"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["homemade-pasta", "garden-terrace", "relaxed"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 14,
      isHalal: false,
      halalStatus: "unknown",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "italian",
        "pasta",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Phoenix",
      neighborhood: "Centre-Ville",
      description: "A welcoming Italian-Moroccan restaurant run by Nordine on Rue de l'ONEP behind Ouarzazate's City Hall (Hôtel de Ville). Loved by travelers needing a break from tagines for its fresh house-made ravioli, pesto gnocchi, roast lamb chops, and licensed wine.",
      tip: "Located behind City Hall in Centre-Ville (not at Atlas Studios). Halal caution: a 2026 diner review noted ham served in a starter salad—halal-strict diners should confirm ingredients before ordering.",
      badge: "local-favorite",
      bestDishes: [
        "House-Made Ravioli",
        "Fresh Garden Basil Pesto Pasta",
        "Roasted Lamb Chops"
      ],
      pros: [
        "Fresh house-made pasta, gnocchi, and basil picked from their garden",
        "Warm, accommodating host (Nordine) and prompt service even off-peak",
        "Plenty of parking, terrace views, and wine/beer available"
      ],
      cons: [
        "Not strictly halal (a recent review reported ham in a starter salad)",
        "Tucked behind City Hall, away from the main pedestrian avenue",
        "Mixed scores across directories (4.6 Google vs 3.9 Restaurant Guru legacy)"
      ],
      googleRating: 4.6,
      googleReviewCount: 165,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 60,
      theforkRating: 4.1,
      theforkReviewCount: 20,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 165,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Phoenix+Ouarzazate",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212524888313",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://restaurant-phoenix.jimdo.com",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch or dinner when craving handmade Italian food",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fair Value / Wine Extra",
        description: "Reasonably priced pastas and mains with plenty of parking; note that wine or multi-course dinners can run 300–400 MAD.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Freshly Prepared",
        description: "Known for made-to-order pasta and herbs harvested from their small garden; clean terrace and indoor dining.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Italian & Alcohol / Halal Check",
        description: "Authentic house-made Italian pasta alongside Moroccan plates. Serves wine/beer, and a 2026 guest noted ham in a starter—verify if strict halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cozy & Quiet Street",
        description: "Relaxed valley/river-facing terrace on a quiet street behind City Hall with easy parking and wheelchair access.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Generous Hospitality",
        description: "Prompt, creative staff; travelers praise Nordine for warmly welcoming guests even between peak meal hours.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-18",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["caidal-tent", "traditional", "historic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["alcohol", "couscous", "dinner", "tagine"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant L'Étoile du Sud",
      neighborhood: "Centre-Ville",
      description: "A long-standing traditional Moroccan restaurant historically operating in Centre-Ville (dating back to 1968), decorated with caidal velvet tents and Berber carpets and serving classic couscous, tagines, and Moroccan wines.",
      tip: "Verification Alert: Only appears in legacy directories with no active 2025–2026 Ouarzazate reviews (modern results point to Tafraoute or Tinghir). Temporarily hidden pending verification.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Lamb Couscous",
        "Spiced Berber Beef Tagine",
        "Warm Harira with Dates"
      ],
      pros: [
        "Traditional caidal tent decor and licensed Moroccan wine selection",
        "Classic central Moroccan banquet-style dishes"
      ],
      cons: [
        "Unverified current operating status in Ouarzazate (no recent reviews)",
        "No verified phone contact, Wi-Fi, or AC listed"
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
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Verify open status locally before visiting",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Unverified Status",
        description: "Legacy mid-range pricing; current menu prices and card acceptance cannot be verified without recent 2025–2026 reviews.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Pending Verification",
        description: "Active operations in Ouarzazate are currently unconfirmed, so hygiene cannot be recently benchmarked.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Classic Caidal Dining",
        description: "Historically focused on ceremonial Moroccan couscous, harira, and tagines with licensed local wine.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Traditional Tent Decor",
        description: "Indoor velvet caidal salon atmosphere; no verified AC, outdoor terrace, or step-free access.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Check Before Going",
        description: "No confirmed phone number and no recent traveler feedback in Ouarzazate—verify on the ground before planning a meal.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-19",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["casual", "rooftop"],
      foodStyles: ["Moroccan", "Mediterranean", "Berber"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["adventure", "first-timer", "culture"],
      vibeTags: ["film-retro", "poolside", "kasbah-daytrip"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 14,
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
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "breakfast",
        "cafe-pastry",
        "dinner",
        "mountain",
        "sunset",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: true, // Wrong city: ~32 km NW in Aït Benhaddou
      verificationStatus: "wrong-city",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Bagdad Café",
      neighborhood: "Ait Benhaddou", // Outside Ouarzazate (~32 km NW); move to Aït Benhaddou dataset
      description: "A popular guesthouse restaurant located 200 meters from the famous Ksar of Aït Benhaddou (~32 km from Ouarzazate). Celebrated for film-inspired retro decor, poolside courtyard seating, rooftop terrace, and Berber dishes.",
      tip: "Location Note: Located in Aït Benhaddou (a 30–35 min drive from Ouarzazate), so it is hidden from city-center Ouarzazate results. Ideal lunch or sunset dinner stop when visiting the Ksar.",
      badge: "local-favorite",
      bestDishes: [
        "Spiced Berber Egg Tagine",
        "Traditional Chicken Tagine with Almonds",
        "Fresh Melon Salad"
      ],
      pros: [
        "200m walk from Aït Benhaddou Ksar with rooftop, garden, and pool views",
        "Outstanding guest ratings (4.8 Tripadvisor / 9.5–9.6 hotel platforms)",
        "Licensed bar/lounge, free on-site parking, and warm staff"
      ],
      cons: [
        "32 km outside Ouarzazate—not reachable without a car/taxi/tour",
        "Busy midday when Aït Benhaddou day-trippers arrive",
        "Slightly higher than roadside village cafés"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212662771218",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Sunset or post-Ksar lunch around 14:00",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fair Day-Trip Value",
        description: "Praised for exceptional value near a UNESCO site; free parking on site and clear pricing, though carry cash as backup.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Guesthouse Kitchen",
        description: "Well-maintained boutique guesthouse kitchen with strong cleanliness reviews and freshly prepared meals.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Berber & Bar Options",
        description: "Serves authentic Berber tagines, couscous, and breakfasts alongside a licensed bar/lounge for cold beer or wine.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "32 km Out / Pool & Roof",
        description: "Charming film-themed decor with pool, garden, and rooftop terrace—just note it is in Aït Benhaddou, 30+ minutes from Ouarzazate.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Friendly Multilingual Team",
        description: "Warm, multilingual hospitality with wheelchair-accessible parking; call ahead if arriving with a larger group.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-20",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["fortress-kasbah", "panoramic", "upscale", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "alcohol",
        "breakfast",
        "dinner",
        "fine",
        "mountain",
        "quiet",
        "riad",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: true, // Wrong city: ~25–30 km NW in Douar Asfalou, Aït Benhaddou
      verificationStatus: "wrong-city",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Riad Ksar Ighnda",
      neighborhood: "Ait Benhaddou", // Outside Ouarzazate (~28 km NW); move to Aït Benhaddou dataset
      description: "An opulent, fortress-style riad restaurant in Douar Asfalou on the edge of the Aït Benhaddou desert valley (~28 km from Ouarzazate). Serves chef-elevated Moroccan stews, international dishes, and cocktails overlooking the High Atlas.",
      tip: "Location Note: Located in Douar Asfalou near Aït Benhaddou, not inside Ouarzazate city. Ideal luxury dinner or sunset drink stop after touring the UNESCO Ksar.",
      badge: "splurge",
      bestDishes: [
        "Slow-Cooked Lamb Shoulder",
        "Saffron Braised Chicken",
        "Traditional Moroccan Salad Medley"
      ],
      pros: [
        "Dramatic kasbah-fortress architecture and High Atlas valley vistas",
        "Full cocktail bar, Moroccan wine list, pool courtyard, and spa amenities",
        "Warm front-of-house staff and refined plating"
      ],
      cons: [
        "Located ~28 km outside Ouarzazate in Douar Asfalou (requires transport)",
        "High splurge pricing compared with local Aït Benhaddou eateries",
        "Some 2026 guests note minor property maintenance/pool-heating gaps"
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
      reservationMethod: ["phone", "website"],
      reservationContact: "+212641114555",
      bookingUrl: "https://www.ksarighnda.com",
      whatsappNumber: "",
      website: "https://www.ksarighnda.com",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Sunset cocktails and dinner from 18:30",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Luxury Resort Pricing",
        description: "Resort-level pricing (~$35–40+ per person plus cocktails/wine); credit cards accepted and free private parking provided.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High Resort Standards",
        description: "Professional hotel kitchen using fresh local produce, though a few recent 2026 visitors noted general grounds maintenance could be sharper.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Elevated Moroccan-Fusion",
        description: "Chef-plated Moroccan lamb, saffron chicken, and international dishes alongside a full cocktail and wine bar.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "28 km Out / Quiet Oasis",
        description: "Serene desert fortress terrace with Atlas views, AC, and Wi-Fi—just remember it sits near Aït Benhaddou rather than Ouarzazate town.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Reserve Ahead",
        description: "Attentive, polite dining staff; non-staying guests should book via +212 641 114 555 or ksarighnda.com beforehand.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-21",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["breakfast", "lunch", "dinner", "drinks"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Moroccan", "International", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture", "adventure"],
      vibeTags: ["cinema-themed", "poolside", "studios"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "outdoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "alcohol",
        "breakfast",
        "cinema",
        "dinner",
        "parking",
        "tagine",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Wall of Fame (Oscar Hotel by Atlas Studios)",
      neighborhood: "Cinema Studios",
      description: "Located inside the 4-star Oscar Hotel right beside Atlas Film Studios on Km 5 Route de Marrakech. Pairs cinema-set decor with a shaded poolside terrace, Red Carpet bar, Moroccan tagines, and international brasserie dishes.",
      tip: "Ideal lunch or evening drink stop right after touring Atlas Studios. Free private parking and full credit card acceptance on site.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Prunes",
        "Grilled Chicken Brochettes",
        "Breakfast Buffet Spread"
      ],
      pros: [
        "100m walk from Atlas Film Studios with ample free private parking",
        "Shaded poolside terrace, air-conditioned dining hall, and licensed bar",
        "Accepts Visa, Mastercard, and cash with multilingual hotel staff"
      ],
      cons: [
        "Hotel restaurant pricing is higher than central Ouarzazate eateries",
        "5 km west of Centre-Ville (requires taxi or car)",
        "Menu leans toward standardized hotel fare when tour groups arrive"
      ],
      googleRating: 4,
      googleReviewCount: 555,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 320,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 240,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Oscar+Hotel+by+Atlas+Studios+Ouarzazate",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212524882212",
      bookingUrl: "https://oscarhotelbyatlasstudios.com",
      whatsappNumber: "",
      website: "https://oscarhotelbyatlasstudios.com",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 after an Atlas Studios tour",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "4-Star Hotel Pricing",
        description: "Printed hotel pricing with Visa/Mastercard accepted and free on-site parking, though pricier than downtown cafes.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Hotel Kitchen",
        description: "International 4-star hotel food-safety standards, clean restrooms, and bottled drinks.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Moroccan-International",
        description: "Reliable Moroccan classics alongside burgers, salads, and pastas; likely halal food with alcohol served at the Red Carpet bar.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cinema Decor & Pool",
        description: "Film memorabilia inside, breezy shaded poolside patio outside, AC, Wi-Fi, and easy studio proximity.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Professional Staff",
        description: "English- and French-speaking reception and restaurant staff used to studio crews and international tour schedules.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-22",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["dinner", "afternoon-tea"],
      experienceTypes: ["traditional", "rooftop", "hidden-gem"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "adventure"],
      vibeTags: ["farm-to-table", "amazigh", "sunset-rooftop"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "berber",
        "couscous",
        "dinner",
        "dry",
        "pastilla",
        "rooftop",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Table du Berbère (Riad Chay)",
      neighborhood: "Cinema Studios",
      description: "An acclaimed Amazigh home-cooking table inside Riad Chay near Tifoultoute, five minutes from Atlas Studios. Ranked #1 in local 2026 culinary guides for garden-grown vegetables, hand-rolled couscous, rfissa, and slow-cooked clay-pot tagines.",
      tip: "Dinner (18:00–22:00) is by reservation only via WhatsApp (+212 661 70 38 86) or website, priced around 150–200 MAD for a 3-course set menu. The rooftop tea terrace is open from 08:00 to 22:00.",
      badge: "hidden-gem",
      bestDishes: [
        "Hand-Rolled Seven-Vegetable Couscous",
        "Traditional Berber Chicken Rfissa",
        "Sweet & Savory Chicken Pastilla"
      ],
      pros: [
        "Authentic small-batch farm-to-table Berber dishes cooked fresh to order",
        "Great value 3-course regional menu (150–200 MAD)",
        "Warm family-style hospitality and quiet rooftop views near Tifoultoute"
      ],
      cons: [
        "Dinner requires advance reservation (walk-ins rarely accommodated)",
        "Cash only and about 5–10 minutes west of Centre-Ville",
        "Dinner service starts at 18:00 only"
      ],
      googleRating: 4.9,
      googleReviewCount: 185,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 95,
      theforkRating: 4.8,
      theforkReviewCount: 25,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 160,
      openTime: "18:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Table+du+Berbere+Riad+Chay+Ouarzazate",
      reservationMethod: ["whatsapp", "phone", "website", "email"],
      reservationContact: "+212661703886",
      bookingUrl: "https://latableduberbere.com",
      whatsappNumber: "+212661703886",
      website: "https://latableduberbere.com",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Sunset tea at 17:30 followed by reserved 18:30 dinner",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fixed 150–200 MAD Set",
        description: "Clear 3-course menu pricing confirmed upon WhatsApp booking; carry Moroccan dirhams in cash for payment.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh Garden Ingredients",
        description: "Meals are cooked fresh per reservation using local produce and garden herbs in a spotless boutique riad kitchen.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Genuine Amazigh Kitchen",
        description: "Rare chance to taste authentic rfissa, hand-rolled couscous, and slow clay-pot tagines rather than tourist-strip repeats; 100% halal and dry.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet Riad & Rooftop",
        description: "Peaceful rural-edge riad atmosphere with panoramic terrace views, away from city traffic.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Reservation Required",
        description: "Message via WhatsApp (+212 661 70 38 86) earlier in the day or the day before so they prepare your dishes fresh.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-23",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner", "drinks"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["palace", "zouaque-ceilings", "upscale"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "fine",
        "palace",
        "pastilla",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Maison Arabe (Le Berbère Palace)",
      neighborhood: "Hay Al Mansour",
      description: "The flagship à la carte Moroccan dining salon inside Ouarzazate's historic 5-star Berbère Palace in Quartier Mansour Eddahbi. Features hand-painted zouaque ceilings, refined Moroccan classics, and access to the hotel's piano bar.",
      tip: "Best for travelers seeking 5-star hotel comfort, licensed cocktails/wine, and wheelchair accessibility; note that hotel dining prices are steep compared to town.",
      badge: "splurge",
      bestDishes: [
        "Royal Lamb & Vegetable Couscous",
        "Almond Chicken Pastilla",
        "Saffron Beef Tagine"
      ],
      pros: [
        "Grand 5-star Moroccan salon with AC, Wi-Fi, valet/free parking, and wheelchair access",
        "Licensed wine and cocktail service (plus poolside Italian restaurant and piano bar on site)",
        "Convenient split hours for lunch (11:00–15:00) and dinner (19:00–23:00)"
      ],
      cons: [
        "5-star luxury pricing with occasional guest critiques on value-for-money",
        "Can feel formal or quiet outside peak tour season",
        "Better suited to relaxed luxury evenings than quick meals"
      ],
      googleRating: 4.2,
      googleReviewCount: 380,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 290,
      theforkRating: 4.2,
      theforkReviewCount: 35,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 210,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Berbere+Palace+Ouarzazate",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212524883105",
      bookingUrl: "https://www.berberepalace.com",
      whatsappNumber: "",
      website: "https://www.berberepalace.com",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Dinner from 19:30 with a pre-dinner drink at the piano bar",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "5-Star Splurge Pricing",
        description: "Expect 5-star hotel rates and wine markups; credit cards are accepted and billing is itemized.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "5-Star Hygiene",
        description: "Large luxury resort kitchen operating under strict hygiene protocols with spotless facilities.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Classic Hotel Moroccan",
        description: "Refined Moroccan standards (pastilla, tagines, couscous) tailored for international luxury travelers; serves alcohol.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Ornate & Accessible",
        description: "Plush air-conditioned salon with painted cedarwood ceilings, Wi-Fi, wheelchair access, and serene palm-courtyard grounds.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Formal & Polished",
        description: "Multilingual hotel dining service; call +212 524 88 31 05 if arriving as non-staying dinner guests.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-24",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner", "drinks"],
      experienceTypes: ["fine-dining", "hidden-gem", "rooftop"],
      foodStyles: ["Moroccan", "International", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["cinema-art", "boutique-oasis", "poolside"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 26,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "alcohol",
        "breakfast",
        "dinner",
        "fine",
        "quiet",
        "rooftop",
        "sunset",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Out of Africa (Le Temple des Arts)",
      neighborhood: "Al Wahda",
      description: "The gastronomic restaurant inside boutique cinema-hotel Le Temple des Arts at 173–174 Rue Al Bouhayra in Hay Al Wahda. Built by renowned film-set artisans, it offers Moroccan-international fusion beside a Hollywood-style pool and rooftop terrace.",
      tip: "Reserve ahead for dinner as the property is an intimate 7-suite boutique retreat. Great replacement if you wanted upscale cinema-themed dining with wine.",
      badge: "hidden-gem",
      bestDishes: [
        "Chef's Saffron Lamb Tagine",
        "Moroccan Salad Trio",
        "Grilled Sea Bass with Herbs"
      ],
      pros: [
        "Extraordinary cinema-set craftsmanship and tranquil pool courtyard",
        "Consistently high guest satisfaction (8.8–8.9/10 across platforms)",
        "Licensed bar/lounge, rooftop terrace, AC, Wi-Fi, and airport proximity"
      ],
      cons: [
        "Intimate 7-suite boutique property—advance booking recommended for non-guests",
        "Residential Hay Al Wahda setting requires a short taxi from Kasbah Taourirt",
        "Upscale boutique pricing"
      ],
      googleRating: 4.6,
      googleReviewCount: 210,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 165,
      theforkRating: 4.5,
      theforkReviewCount: 25,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 190,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Temple+des+Arts+Ouarzazate",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212524888831",
      bookingUrl: "https://www.templedesarts-ouarzazate.com",
      whatsappNumber: "+212661330804",
      website: "https://www.templedesarts-ouarzazate.com",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Evening from 19:00 for poolside dining",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Boutique Upscale",
        description: "Transparent luxury boutique pricing with credit cards accepted; confirm set-dinner rates when booking by phone or WhatsApp.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Spotless Boutique Kitchen",
        description: "Consistently praised in 2026 verified stays for impeccable cleanliness, fresh plating, and calm standards.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Chef Fusion & Wine",
        description: "Blends refined Moroccan dishes with international plates curated by a Moroccan chef; serves wine and cocktails.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Serene Film-Set Oasis",
        description: "Birdsong by the pool, rooftop terrace, AC indoors, Wi-Fi, and accessible ground-floor layout far from street noise.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Personal & Attentive",
        description: "Because it is a small 7-suite luxury house, call +212 524 88 88 31 or WhatsApp +212 661 33 08 04 before arriving.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-25",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "solo", "seniors"],
      mealTypes: ["breakfast", "dinner"],
      experienceTypes: ["traditional", "hidden-gem", "rooftop"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["mud-brick-kasbah", "home-cooked", "serene"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "couscous",
        "dinner",
        "dry",
        "riad",
        "rooftop",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Riad Dar Rita Restaurant",
      neighborhood: "Tassoumaat",
      description: "An intimate, warmly run guesthouse table tucked inside the historic mud-brick quarter of Tassoumaat (39 Rue de la Mosquée). Known for homemade Moroccan 3-course dinners, vegetarian tagines, and peaceful rooftop views over the oasis.",
      tip: "Dinner is prepared fresh daily—message +212 654 16 47 26 by early afternoon if you are not staying overnight.",
      badge: "hidden-gem",
      bestDishes: [
        "Home-Cooked Vegetarian & Lamb Tagines",
        "Traditional Moroccan Pastilla",
        "Fresh Terrace Breakfast Spread"
      ],
      pros: [
        "Exceptional 9.3/10 guest review consensus across 1,500+ reviews",
        "Authentic Tassoumaat mud-brick neighborhood atmosphere away from tourist crowds",
        "Warm, bilingual hosts happy to tailor vegetarian or dietary meals"
      ],
      cons: [
        "Advance booking needed for outside dinner guests",
        "Tucked inside narrow Tassoumaat lanes (save host phone for easy drop-off)",
        "Alcohol-free venue"
      ],
      googleRating: 4.8,
      googleReviewCount: 310,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 420,
      theforkRating: 4.7,
      theforkReviewCount: 25,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 290,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Riad+Dar+Rita+Ouarzazate",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212654164726",
      bookingUrl: "https://www.darrita.com",
      whatsappNumber: "+212654164726",
      website: "https://www.darrita.com",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Sunset rooftop drinks (tea) and 19:30 home-cooked dinner",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Honest Riad Set Menu",
        description: "Fixed 3-course dinner pricing is clear upfront when booking; carry cash as backup though cards are often supported.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Top Cleanliness Scores",
        description: "Maintains 9.5+ cleanliness ratings in a freshly cooked family-run kitchen.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "True Home Cooking",
        description: "Homemade Moroccan dinners cooked slowly for small numbers rather than mass-catered menus; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet Tassoumaat Oasis",
        description: "Peaceful patio and rooftop terrace overlooking traditional earthen roofs; stairs required for the terrace.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Book Ahead for Dinner",
        description: "Warm hosts who gladly share local tips; book ahead via WhatsApp +212 654 16 47 26 so ingredients are shopped fresh.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-26",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer", "culture"],
      vibeTags: ["authentic", "local-gem", "hospitable"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "tagine",
        "vegetarian"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Toudgha",
      neighborhood: "Tabount",
      description: "An unassuming, ultra-popular neighborhood eatery at 506 Oued Eddahab (Tabount / Kasbah border) run by friendly owner Rashid. Celebrated for comforting home-cooked Moroccan lentils, white beans, couscous, chicken tagines, and crisp salads.",
      tip: "Look for the simple entrance at 506 Oued Eddahab—this is where locals and savvy travelers go for generous 50–100 MAD meals with fluent English service.",
      badge: "hidden-gem",
      bestDishes: [
        "Traditional Couscous",
        "Spiced Lentils & White Beans (Loubia)",
        "Chicken with Rice & Fresh Salad"
      ],
      pros: [
        "Remarkable 4.9/5 rating across nearly 700 reviews",
        "Honest local prices (50–150 MAD) with generous home-style portions",
        "Fluent English-speaking host (Rashid) who welcomes solo travelers and vegetarians"
      ],
      cons: [
        "Very modest, simple dining room with no AC or Wi-Fi",
        "Cash only",
        "Fills up quickly during lunch and dinner hours"
      ],
      googleRating: 4.9,
      googleReviewCount: 695,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 240,
      theforkRating: 4.8,
      theforkReviewCount: 30,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 632,
      openTime: "11:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Toudgha+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212670887995",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 or early dinner around 19:00",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Rock-Solid Local Value",
        description: "Consistently praised for honest 50–150 MAD pricing with zero tourist markups; bring Moroccan cash.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Home Kitchen",
        description: "600+ glowing reviews emphasize how clean the kitchen and fresh salads are compared with typical budget spots.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Pure Everyday Moroccan",
        description: "Homemade lentils, beans, tagines, and couscous cooked daily without shortcuts; halal, dry, and great for vegetarians.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Simple & Welcoming",
        description: "Modest, no-frills neighborhood dining room without AC, made warm by friendly conversation.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fluent English Host",
        description: "Rashid explains every dish clearly in English and keeps service prompt and personal.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-27",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Seafood", "Mediterranean", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "adventure"],
      vibeTags: ["seafood", "clean", "modern-casual"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 15,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "dinner",
        "dry",
        "late-night",
        "seafood",
        "terrace"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Plateau de Mer",
      neighborhood: "Tabount",
      description: "Ouarzazate's dedicated seafood destination near Hay Elmassira / Tabount, run by a Moroccan-Dutch host. Serves grilled fresh fish platters, calamari, prawns, and fried seafood far in the desert interior.",
      tip: "If ordering fresh whole fish sold by weight, confirm the exact price per kilo with the waiter before grilling. Open very late until 01:00.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Fried & Grilled Seafood Platter",
        "Grilled Sea Bream with Salad",
        "Garlic Prawns"
      ],
      pros: [
        "Rare dedicated seafood menu in desert Ouarzazate",
        "Praised for spotless cleanliness and hospitable Moroccan-Dutch owner",
        "Long daily hours (08:00–01:00)"
      ],
      cons: [
        "Fresh fish sold by weight can surprise diners if prices aren't confirmed first",
        "Located slightly south of the main tourist avenues",
        "Alcohol-free venue"
      ],
      googleRating: 4.3,
      googleReviewCount: 275,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 45,
      theforkRating: 4.2,
      theforkReviewCount: 15,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 275,
      openTime: "08:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Plateau+de+Mer+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212808682492",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Dinner from 19:30 onward",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Confirm Fish Weight Price",
        description: "Set seafood platters are fairly priced, but confirm the exact total beforehand if picking whole fish sold by weight.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Very Clean Seafood Prep",
        description: "Frequently complimented for tidy kitchen standards, crisp frying oil, and fresh-tasting fish deliveries.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Moroccan Coastal Style",
        description: "Delivers coastal Moroccan fried and grilled fish platters plus fries and salads in a dry, halal setting.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Clean & Air-Conditioned",
        description: "Comfortable, bright indoor room and terrace tables with AC; relaxed neighborhood atmosphere.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Attentive Owner",
        description: "Friendly service with Dutch/French/English/Arabic spoken by the management; open late until 01:00.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-28",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "snack"],
      experienceTypes: ["cafes-tea", "hidden-gem", "casual"],
      foodStyles: ["Cafe & Pastry", "Vegetarian/Vegan", "Moroccan"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["nomad", "budget", "first-timer"],
      vibeTags: ["specialty-coffee", "cozy", "plant-based-milk", "laptop-friendly"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
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
        "brunch",
        "budget",
        "cafe-pastry",
        "coffee",
        "dry",
        "vegan",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Anwal Coffee Kitchen",
      neighborhood: "Centre-Ville",
      description: "Ouarzazate's #1 specialty coffee house on Rue Figuig, blending industrial-chic decor with cozy corners. Famed for iced oat-milk lattes, seed-packed smoothie bowls, avocado toast, ginger shots, and msemen with eggs.",
      tip: "Best spot in town for plant-based milk (oat milk) coffees, healthy brunch bowls, and charging your phone in a calm space. Small kitchen—allow an extra few minutes during morning rush.",
      badge: "hidden-gem",
      bestDishes: [
        "Iced Oat Milk Latte",
        "Fruit & Seed Smoothie Bowl",
        "Avocado Toast & Msemen with Eggs"
      ],
      pros: [
        "5.0/5 Google rating across 230+ reviews (#1 coffee shop in Ouarzazate)",
        "Rare oat milk, specialty iced coffee, and fresh smoothie bowls",
        "Quiet nooks, phone charging outlets, and friendly English-speaking baristas"
      ],
      cons: [
        "Small kitchen means brunch items can take a few extra minutes when busy",
        "Cash only",
        "Focused on brunch/coffee rather than heavy dinner meals"
      ],
      googleRating: 5,
      googleReviewCount: 230,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 35,
      theforkRating: 4.9,
      theforkReviewCount: 15,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 243,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Anwal+Coffee+Kitchen+Ouarzazate",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Morning 08:30–11:00 for brunch or afternoon iced coffee",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fair Specialty Cafe",
        description: "Reasonable cafe prices for specialty coffees, juices, and brunch bowls; carry cash as payment is cash-only.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh & Health-Conscious",
        description: "Travelers rave about fresh fruit smoothie bowls, ginger shots, and clean espresso equipment—great for sensitive stomachs.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Third-Wave & Msemen",
        description: "Pairs modern international cafe staples (oat lattes, avocado toast) with Moroccan msemen and mint tea; dry and vegan-friendly.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Calm, Cozy & Plugs",
        description: "Spacious yet quiet industrial-cozy corners with AC, Wi-Fi, and power outlets for charging phones or working.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Kind & Made-to-Order",
        description: "Warm, welcoming baristas; everything is prepared fresh, so expect a gentle 10–15 minute wait during peak brunch.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-29",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "snack"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["wood-fired", "pizza", "lively-square"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7.5,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "italian",
        "pizza",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pasto Four à Bois",
      neighborhood: "Al Mouahidine",
      description: "Ouarzazate's favorite wood-fired pizzeria right on Place Al-Mouahidine. Serves crisp, thin-crust pizzas baked in a traditional wood oven alongside pasticcio, pastas, tacos, and smoothies.",
      tip: "Closed on Mondays. Best stop in central Ouarzazate when you need a crisp, non-tagine dinner right off the main square.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-Fired Napoli Pizza",
        "Chicken Pasticcio Gratin",
        "Fresh Fruit Smoothies"
      ],
      pros: [
        "Real wood-fired pizza oven with 4.6–4.8/5 traveler consensus",
        "Fast-casual prices right on Place Al-Mouahidine",
        "Great non-tagine option for families, kids, and vegetarians"
      ],
      cons: [
        "Closed on Mondays",
        "Cash only and busy during evening peak hours",
        "Compact seating when large groups arrive"
      ],
      googleRating: 4.6,
      googleReviewCount: 313,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 45,
      theforkRating: 4.6,
      theforkReviewCount: 20,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 320,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Pasto+Four+a+Bois+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212696484281",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Dinner from 19:30 onward (Tuesday–Sunday)",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fast-Casual Prices",
        description: "Clear menu board pricing (~40–75 MAD per pizza/dish); carry cash as cards are not accepted.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Blistering Wood Oven",
        description: "Pizzas are stretched fresh and baked to order at high heat in the visible wood oven.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Wood-Fired Pizza",
        description: "Crisp wood-oven crusts, Italian-style pastas, and Moroccan-French pasticcio; 100% halal and dry.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Lively Square Side",
        description: "Casual, energetic spot on Place Al-Mouahidine with indoor AC and easy pedestrian access.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fast Oven Turnaround",
        description: "Pizzas bake quickly, though evening queues happen around 20:30. Remember it is closed on Mondays.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-30",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["casual", "rooftop"],
      foodStyles: ["Grill & BBQ", "Moroccan", "Cafe & Pastry", "Italian"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["sunset-terrace", "trendy", "mocktails"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "visa"],
      tags: [
        "breakfast",
        "cafe-pastry",
        "dinner",
        "dry",
        "grill",
        "rooftop",
        "sunset",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Grilla : Café, Restaurant, Grillade",
      neighborhood: "Al Wahda",
      description: "A trendy café, patisserie, and grill at 13 Avenue Al-Maghreb Al-Arabi featuring a golden-hour terrace overlooking the rooftops. Serves grilled fillet steaks, fresh salmon salads, harira, pastilla, mocktails, and tiramisu.",
      tip: "Visit at golden hour for the rooftop terrace light, and check your itemized bill carefully at checkout; Visa cards and cash are accepted.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Beef Fillet Steak",
        "Fresh Salmon Salad",
        "Blue Mojito Mocktail & Tiramisu"
      ],
      pros: [
        "Calm golden-hour rooftop terrace over the neighborhood",
        "Halal modern menu covering salads, steaks, tacos, harira, and pastries",
        "Wheelchair accessible with parking and high chairs for families"
      ],
      cons: [
        "Wait times can stretch at peak dinner hours",
        "A few guests report occasional billing errors or modest burger portions",
        "Seafood pastilla can occasionally run dry"
      ],
      googleRating: 4.2,
      googleReviewCount: 272,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 35,
      theforkRating: 4.2,
      theforkReviewCount: 15,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 310,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Grilla+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524887373",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Golden hour around 18:30 on the upper terrace",
      averageWaitMinutes: 15
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Check Itemized Bill",
        description: "Fair mid-range prices with Visa and cash accepted, though a few travelers mention occasional billing mix-ups—double-check your receipt.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Modern Kitchen",
        description: "Well-regarded for fresh salmon salads, carrot juices, and clean dining areas.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Trendy Grill & Cafe",
        description: "Modern Moroccan-Western menu (steaks, skewers, salads, tiramisu, mocktails) rather than rustic traditional dining; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Golden-Hour Terrace",
        description: "Stylish, family-friendly seating with calm rooftop sunset views, wheelchair access, and parking.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Visit Off-Peak",
        description: "Friendly waitstaff for groups, though kitchen pacing slows noticeably during peak dinner hours.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-31",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual", "hidden-gem"],
      foodStyles: ["Moroccan", "French-Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture", "first-timer", "budget"],
      vibeTags: ["unpretentious", "authentic", "french-speaking-host"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "couscous",
        "dinner",
        "dry",
        "pastilla",
        "tagine"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Gironde",
      neighborhood: "Centre-Ville",
      description: "An unassuming yet deeply beloved restaurant at 83 Rue des FAR near the Marché Couvert. Run by a warm, talkative French-speaking owner with ties to Gironde, it delights travelers with intensely flavorful Moroccan and Franco-Moroccan cooking.",
      tip: "Don't judge it by its simple storefront—this is a genuine local-meets-bistro favorite and a top replacement for closed central French-Moroccan classics.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Simmered Oriental Tagine",
        "Traditional Moroccan Couscous",
        "Spiced Kefta & Salads"
      ],
      pros: [
        "Outstanding 4.6–4.8/5 rating across 400–560+ reviews",
        "Passionate, welcoming owner happy to share regional stories in fluent French",
        "Rich, authentic flavors at honest mid-range prices"
      ],
      cons: [
        "Simple, modest interior decor",
        "Cash only and limited English compared with French",
        "No Wi-Fi or dedicated AC listed"
      ],
      googleRating: 4.6,
      googleReviewCount: 410,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 145,
      theforkRating: 4.5,
      theforkReviewCount: 20,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 564,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+La+Gironde+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524883372",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 or dinner around 19:30",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Honest Bistro Value",
        description: "Very good quality-to-price ratio off the main tourist strip; bring cash for payment.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Trusted Longtime Kitchen",
        description: "Long-established Rue des FAR favorite with 400+ positive diner reviews praising fresh ingredients.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Flavor-First Cooking",
        description: "Rich Moroccan spices and French-inspired attention to sauces and preparation; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Modest & Warm",
        description: "Sober, simple dining room without fancy decor, elevated by genuine warmth from the host.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Personal Host Service",
        description: "Unrushed hospitality led by the owner himself; French speakers in particular will enjoy chatting about Ouarzazate.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-32",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "International", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["welcoming", "group-friendly", "friday-couscous"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "couscous",
        "dinner",
        "dry",
        "grill",
        "tagine",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Chez Nabil",
      neighborhood: "Tabount",
      description: "A highly rated Moroccan and international restaurant on Avenue Moulay Rachid (Tabount / Kasbah corridor). Praised for its fast, all-female kitchen and service team, generous Friday couscous, tagines, pastas, and grills.",
      tip: "Visit on Friday for their celebrated traditional couscous, or book via restaurantcheznabil.com if traveling with a larger group.",
      badge: "local-favorite",
      bestDishes: [
        "Friday Traditional Couscous",
        "Chicken & Lemon Tagine",
        "Mixed Grill Plate"
      ],
      pros: [
        "Stellar 4.9/5 rating across 128–240+ reviews",
        "Fast, attentive service and group-friendly seating",
        "Blends authentic Friday couscous with pastas and grills for mixed groups"
      ],
      cons: [
        "Alcohol-free venue",
        "Cash preferred",
        "Slightly east of the central Place Al-Mouahidine square"
      ],
      googleRating: 4.9,
      googleReviewCount: 128,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 65,
      theforkRating: 4.7,
      theforkReviewCount: 20,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 241,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Chez+Nabil+Ouarzazate",
      reservationMethod: ["phone", "website", "walk-in"],
      reservationContact: "+212662304525",
      bookingUrl: "https://www.restaurantcheznabil.com",
      whatsappNumber: "",
      website: "https://www.restaurantcheznabil.com",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Friday lunch for traditional couscous or dinner around 19:30",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Moderate & Transparent",
        description: "Clear menu pricing in the moderate mid-range bracket; bring cash as backup.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Very Clean Kitchen",
        description: "4.9/5 traveler consensus praises fresh, well-cooked plates and clean dining conditions.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Authentic & Group-Safe",
        description: "Standout Moroccan tagines and Friday couscous alongside pastas and sandwiches for picky eaters; dry and halal.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Warm & Group-Friendly",
        description: "Relaxed, welcoming dining room and outdoor seating suitable for both couples and larger tour groups.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Prompt & Gracious",
        description: "Frequently singled out for unusually fast, warm hospitality without feeling rushed.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-ouarzazate-33",
    city: "ouarzazate",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["late-night", "family-run", "crispy-pizza"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 5.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
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
        "budget",
        "delivery",
        "dinner",
        "dry",
        "italian",
        "late-night",
        "pizza"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Il Postino Ouarzazate",
      neighborhood: "Centre-Ville",
      description: "A friendly, budget-priced pizzeria on Avenue Annasr near Kasbah Taourirt. Open exclusively from late afternoon until 01:00, making it Ouarzazate's go-to spot for late-night crispy thin-crust pizzas and Glovo delivery.",
      tip: "Pizzas average around 40 MAD with abundant street parking outside. Also delivers late via Glovo or +212 524 88 69 69.",
      badge: "local",
      bestDishes: [
        "Pizza Quattro Formaggi",
        "Pizza Diavolo",
        "Pizza Pescatore (Tuna & Olives)"
      ],
      pros: [
        "Open until 01:00—fills the late-night dinner gap in Ouarzazate",
        "Very affordable (~40 MAD pizzas) with crispy crust and Glovo delivery",
        "Easy street parking and attentive, kind family service"
      ],
      cons: [
        "Not open for lunch (opens at 17:00)",
        "Occasional people outside asking for leftovers after meals",
        "Cash only at the restaurant; no AC or Wi-Fi"
      ],
      googleRating: 4.3,
      googleReviewCount: 274,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 40,
      theforkRating: 4.2,
      theforkReviewCount: 10,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 284,
      openTime: "17:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Il+Postino+Ouarzazate",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212524886969",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening from 21:00 to 00:30",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "~40 MAD Pizzas",
        description: "Super transparent budget pricing (around 40 MAD per pizza); bring cash when dining in or order via Glovo.",
        state: "ready"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Owner-Run Shop",
        description: "Owner takes visible pride in keeping tables and the prep counter clean and fresh.",
        state: "ready"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Moroccan-Style Pizzeria",
        description: "Freshly baked thin-crust pizzas made with local halal meats and cheeses rather than imported Italian deli cuts; dry.",
        state: "ready"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Simple & Easy Parking",
        description: "Casual, unpretentious dining room with easy parking near Taourirt; note occasional panhandling outside street tables.",
        state: "ready"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Evening & Late Night Only",
        description: "Polite, sincere service from 17:00 to 01:00; visit outside the 20:30–21:30 rush for fastest oven times.",
        state: "ready"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];