/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: MEKNES
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-meknes-1' or 'eat-meknes-restaurant')
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
 * =========================================================================
 */

import type { EatListing } from '../types';

export const meknesEat: EatListing[] = [
  {
    id: "e-meknes-1",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "culture", "first-timer"],
      vibeTags: ["authentic", "humble", "family-run"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "couscous", "dinner", "dry", "medina", "tagine"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Aisha",
      neighborhood: "Médina Ancienne",
      description: "A legendary, cupboard-sized diner nestled deep in the souks of the Medina. Extremely famous for its budget-friendly, authentic Moroccan cooking prepared fresh by Aisha and her family.",
      tip: "Located at Koubat Souk Kababine (Derb Lachkar N°4). It is a tiny, rustic room with few tables, so come early for lunch or be prepared to wait a few minutes.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken Rfissa",
        "Vegetable Couscous",
        "Beef Tagine with Prunes",
        "Homemade Harira"
      ],
      pros: [
        "Unbeatable budget prices for authentic home cooking",
        "Iconic medina reputation with warm family hospitality"
      ],
      cons: [
        "Very tiny dining room with few tables",
        "Cash only; can involve a short wait at peak lunch"
      ],
      googleRating: 4.6,
      googleReviewCount: 2137,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 1200,
      theforkRating: 4.6,
      theforkReviewCount: 150,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 3350,
      openTime: "10:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Aisha+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535530925",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-2",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional", "rooftop"],
      foodStyles: ["Moroccan", "Mediterranean", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture", "luxury"],
      vibeTags: ["palatial", "panoramic", "sunset-view"],
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
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "palace",
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
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Collier de la Colombe",
      neighborhood: "Médina Ancienne",
      description: "Located in an elegant, palace-style building with a panoramic rooftop terrace overlooking the ancient Medina and valley. Serves refined traditional Moroccan recipes alongside selected international dishes.",
      tip: "Ask to sit on the panoramic upper terrace before sunset for sweeping valley views while tasting local Meknes wines.",
      badge: "local-favorite",
      bestDishes: [
        "Lemon Chicken Tagine",
        "Royal Couscous",
        "Moroccan Pastry Assortment"
      ],
      pros: [
        "Sweeping panoramic terrace views over the Medina and valley",
        "Licensed to serve local Meknès wines alongside classic dishes"
      ],
      cons: [
        "Tour-group oriented at peak lunch hours",
        "Multiple stairs to reach the upper terrace"
      ],
      googleRating: 4.3,
      googleReviewCount: 464,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 212,
      theforkRating: 4.1,
      theforkReviewCount: 100,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 464,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Collier+de+la+Colombe+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535555041",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-3",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Mediterranean", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["romantic", "bistro", "garden-terrace"],
      crowdLevel: "balanced"
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "mountain",
        "sunset",
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
      name: "Le Relais de Paris",
      neighborhood: "Hamria",
      description: "A French bistro in the modern Ville Nouvelle (Hamria). Features a classic brasserie menu, a relaxing romantic atmosphere, views of Mt. Zerhoun, and a garden terrace.",
      tip: "The garden tables are perfect for couples. They offer a fixed-price menu alongside an extensive Moroccan and French wine selection.",
      badge: "splurge",
      bestDishes: [
        "Steak Frites with Signature Sauce",
        "Braised Lamb with Rosemary",
        "Chocolate Profiteroles"
      ],
      pros: [
        "Peaceful courtyard garden terrace with Mount Zerhoun views",
        "Extensive Moroccan and French wine list"
      ],
      cons: [
        "Mixed reviews on consistency and slower service",
        "Higher price point than nearby Hamria bistros"
      ],
      googleRating: 3.8,
      googleReviewCount: 216,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 90,
      theforkRating: 3.9,
      theforkReviewCount: 50,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 216,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Relais+de+Paris+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212619210210",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-4",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "adventure"],
      vibeTags: ["riad", "quiet", "zellige"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "quiet",
        "riad",
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
      name: "Dar Sabre Wa Tourate",
      neighborhood: "Médina Ancienne",
      description: "Housed inside a restored medina riad at 2 Derb Khoah. Features traditional zellige mosaic tilework and vibrant banquette seating, serving slow-cooked homestyle Moroccan tagines and pastillas.",
      tip: "A peaceful lunch or dinner spot to escape the noisy medina alleys. Calling ahead is recommended as dishes are prepared to order.",
      badge: "hidden-gem",
      bestDishes: [
        "Chicken & Almond Pastilla",
        "Prune & Almond Lamb Tagine",
        "Assorted Moroccan Salads"
      ],
      pros: [
        "Tranquil restored riad setting away from bustling souks",
        "Freshly prepared tagines and pastillas"
      ],
      cons: [
        "Calling ahead is recommended since food is cooked to order",
        "Cash only; no outdoor terrace"
      ],
      googleRating: 4.4,
      googleReviewCount: 140,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 85,
      theforkRating: 4.4,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 140,
      openTime: "12:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Sabre+Wa+Tourate+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212664019914",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-5",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "budget"],
      vibeTags: ["family-run", "quiet", "riad"],
      crowdLevel: "quiet"
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
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "quiet",
        "riad",
        "tagine",
        "terrace"
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
      name: "Restaurant Omnia",
      neighborhood: "Rouamzine",
      description: "A family-run riad dining room down an alley off Rue Rouamzine. Known for its genuine Moroccan hospitality and homestyle slow-cooked meat tagines, pastillas, and couscous.",
      tip: "Located at 8 Rue Aïn el-Fouki. Guests can dine in the cozy salon or up on the rooftop terrace for a private dining feel.",
      badge: "hidden-gem",
      bestDishes: [
        "Chicken Pastilla",
        "Beef Tagine with Almonds",
        "Homemade Harira Soup"
      ],
      pros: [
        "Intimate family-run riad hospitality with rooftop seating",
        "Good value traditional dishes away from tourist crowds"
      ],
      cons: [
        "Tucked in a quiet side alley off Rue Rouamzine",
        "Cash only; no Wi-Fi"
      ],
      googleRating: 4.2,
      googleReviewCount: 320,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 185,
      theforkRating: 4.2,
      theforkReviewCount: 60,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 320,
      openTime: "12:00",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Omnia+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535533938",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-6",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["historic-palace", "courtyard-pool", "romantic"],
      crowdLevel: "quiet"
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "quiet",
        "riad",
        "sunset",
        "tagine",
        "terrace",
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
      name: "Palais Didi",
      neighborhood: "Médina Ancienne",
      description: "A 17th-century palace riad next to the Mausoleum of Moulay Ismaïl. Offers traditional Moroccan dining set around an Andalusian courtyard patio with a central pool and historic stucco arches.",
      tip: "Located at 7 Dar Lakbira. Recommended for romantic ambiance beside the historic courtyard pool.",
      badge: "splurge",
      bestDishes: [
        "Royal Lamb Couscous",
        "Pigeon Pastilla with Almonds",
        "Tagine of Veal with Prunes"
      ],
      pros: [
        "Stunning 17th-century palace courtyard with pool and stucco arches",
        "Prime location right beside the Mausoleum of Moulay Ismaïl"
      ],
      cons: [
        "Expensive for Meknès (~$32/person)",
        "Reviews note uneven value relative to price"
      ],
      googleRating: 3.9,
      googleReviewCount: 97,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 78,
      theforkRating: 3.9,
      theforkReviewCount: 40,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 97,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Palais+Didi+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535558590",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-7",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "afternoon-tea", "drinks", "flexible"],
      experienceTypes: ["casual", "cafes-tea", "rooftop"],
      foodStyles: ["Moroccan", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["square-view", "people-watching", "sunset"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8,
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
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
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
      name: "Pavillon des Idrissides",
      neighborhood: "Médina Ancienne",
      description: "Features a large second-floor panoramic terrace directly overlooking Place El-Hedime and the grand Bab Mansour. Ideal for mint tea, coffee, and light snacks while watching square performers.",
      tip: "The upper terrace offers arguably the best photography vantage point over El-Hedime Square at dusk. Best visited for mint tea and views rather than full meals.",
      badge: "tourist-trap",
      bestDishes: [
        "Moroccan Mint Tea with Pastries",
        "Chicken Brochettes",
        "Kefta Tagine"
      ],
      pros: [
        "Unmatched panoramic vantage point over Place El-Hedime and Bab Mansour",
        "Open from 08:00 for morning coffee or evening sunset tea"
      ],
      cons: [
        "Food quality and service are frequently criticized by travelers",
        "Cash only; tourist-oriented pricing for full meals"
      ],
      googleRating: 3.6,
      googleReviewCount: 380,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 120,
      theforkRating: 3.5,
      theforkReviewCount: 30,
      restaurantguruRating: 3.6,
      restaurantguruReviewCount: 380,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Pavillon+des+Idrissides+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-8",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "seniors", "large-groups", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture", "first-timer", "luxury"],
      vibeTags: ["palatial", "ornate-zellige", "banquet"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 20,
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
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "fine",
        "palace",
        "pastilla",
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
      name: "Palais Terrab",
      neighborhood: "Hamria",
      description: "An opulent palace restaurant in the modern Ville Nouvelle (Hamria) decorated with ornate zellige, carved stucco, and cedarwood. Specializes in classic Moroccan royal banquets, tagines, and local wines.",
      tip: "Located at 18 Avenue Zerktouni. Licensed to serve local Guerrouane wine alongside hearty traditional set-menu courses.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Saffron Lamb Couscous",
        "Sweet & Savory Pastilla",
        "Slow-Cooked Beef Tanjia"
      ],
      pros: [
        "Grand Moroccan palace decor with wheelchair accessibility and parking",
        "Serves local Guerrouane wines alongside traditional Moroccan banquets"
      ],
      cons: [
        "Can feel busy when tour groups arrive",
        "Outside the old Medina walls (a short taxi ride from Bab Mansour)"
      ],
      googleRating: 4.1,
      googleReviewCount: 934,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 220,
      theforkRating: 4.1,
      theforkReviewCount: 80,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 934,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Palais+Terrab+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535526100",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-9",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["no-frills", "quick-stop", "local"],
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
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "couscous",
        "dinner",
        "dry",
        "medina",
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
      name: "Restaurant Bab Mansour",
      neighborhood: "Médina Ancienne",
      description: "A traditional, no-frills budget eatery located at 16 Rue Dar Smen beside Place El-Hedime. Serves reliable Moroccan tagines, harira soup, and couscous.",
      tip: "Straightforward street diner facing the medina entrance. Great for a quick, filling lunch after visiting Bab Mansour.",
      badge: "local",
      bestDishes: [
        "Kefta Tagine with Egg",
        "Chicken Couscous",
        "Harira Soup with Dates"
      ],
      pros: [
        "Very affordable and convenient right beside Bab Mansour",
        "Quick, reliable Moroccan staples"
      ],
      cons: [
        "Basic street-side decor",
        "Cash only; no Wi-Fi or AC"
      ],
      googleRating: 3.9,
      googleReviewCount: 240,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 110,
      theforkRating: 3.8,
      theforkReviewCount: 30,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 240,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bab+Mansour+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-10",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "drinks"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Moroccan", "International"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["wine-bar", "panoramic", "romantic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
        "fine",
        "medina",
        "sunset",
        "terrace",
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
      name: "Bistrot Art & Le Wine Bar",
      neighborhood: "Belle-Vue",
      description: "Set inside the historic Hotel Transatlantique on the Belle-Vue ridge, this bistro and wine bar offers French-Moroccan fusion cuisine paired with a panoramic view of the ancient Medina across the valley.",
      tip: "Book a window table in advance to catch the evening lights shimmering across the old medina walls while sampling local wines.",
      badge: "splurge",
      bestDishes: [
        "Duck Breast with Caramelized Fruit",
        "Seafood Gratin",
        "Curated Moroccan Wine Flight"
      ],
      pros: [
        "Panoramic valley views overlooking the illuminated Medina walls",
        "Curated regional wine pairings in a refined hotel bistro setting"
      ],
      cons: [
        "Premium pricing compared to downtown eateries",
        "Requires booking ahead for best window/terrace tables"
      ],
      googleRating: 4.3,
      googleReviewCount: 110,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 87,
      theforkRating: 4.3,
      theforkReviewCount: 35,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 110,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Bistrot+Art+and+Wine+Bar+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212661799627",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-11",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["riad", "courtyard", "intimate"],
      crowdLevel: "balanced"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "dinner",
        "dry",
        "medina",
        "pastilla",
        "riad",
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
      name: "Riad Ritaj Restaurant",
      neighborhood: "Médina Ancienne",
      description: "Set inside a traditional riad patio at 13 Sidi Amar Bouaouada, right next to Place El-Hedime. Features soaring ceilings and zellige craftsmanship, serving traditional Meknassi tagines, royal pastillas, and orange salads.",
      tip: "Conveniently located 2 minutes on foot from Place El-Hedime. The courtyard dining room offers an intimate escape from square crowds.",
      badge: "local-favorite",
      bestDishes: [
        "Sweet Plum Lamb Tagine",
        "Almond Pigeon Pastilla",
        "Cinnamon Orange Salad"
      ],
      pros: [
        "Just steps from Place El-Hedime yet peaceful inside",
        "Accepts cards and serves traditional Meknassi specialties"
      ],
      cons: [
        "No air conditioning in summer",
        "Limited parking due to Medina location"
      ],
      googleRating: 4.3,
      googleReviewCount: 200,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 150,
      theforkRating: 4.3,
      theforkReviewCount: 50,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 200,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Riad+Ritaj+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535534808",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-12",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["flower-courtyard", "riad", "cooking-class"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 15,
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
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "couscous",
        "dinner",
        "dry",
        "medina",
        "riad",
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
      name: "Riad Bahia Restaurant",
      neighborhood: "Médina Ancienne",
      description: "Positioned between El-Hedim Square and the Bou Inania Madrasa. Serves traditional Meknassi recipes in a tranquil, flower-filled riad courtyard with personal hospitality.",
      tip: "Located at Derb Benabbou. The riad also hosts traditional Moroccan cooking classes if booked in advance.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Cooked Beef Tanjia",
        "Royal Couscous",
        "Traditional Moroccan Harira"
      ],
      pros: [
        "Lush, serene riad courtyard between major medina sights",
        "High TripAdvisor ratings and cooking classes available"
      ],
      cons: [
        "Medina alley access (not wheelchair friendly)",
        "No alcohol served"
      ],
      googleRating: 4.5,
      googleReviewCount: 145,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 367,
      theforkRating: 4.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 367,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Riad+Bahia+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212535554541",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-13",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "snack", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Italian", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["gelato", "family-friendly", "modern-cafe"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 5,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
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
      name: "Venezia Ice",
      neighborhood: "Hamria",
      description: "A popular modern cafe and ice-cream parlor on Avenue Idriss II in Hamria. Well-frequented by local families and youth for artisanal gelato, waffles, crepes, and coffees.",
      tip: "Located at 21 Avenue Idriss II. Great spot for families with children wanting ice cream and cold drinks on hot afternoons.",
      badge: "local",
      bestDishes: [
        "Pistachio & Nougat Gelato",
        "Nutella & Banana Crepe",
        "Italian Espresso"
      ],
      pros: [
        "Wide selection of ice cream, crepes, and cold drinks",
        "Air-conditioned, wheelchair-accessible, and central in Hamria"
      ],
      cons: [
        "Service can feel rushed on busy summer evenings",
        "More of a chain dessert cafe than a quiet retreat"
      ],
      googleRating: 3.8,
      googleReviewCount: 950,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 120,
      theforkRating: 3.7,
      theforkReviewCount: 50,
      restaurantguruRating: 3.3,
      restaurantguruReviewCount: 177,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Venezia+Ice+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212693054152",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-14",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["cafe-pastry"],
      archetypeAffinity: ["nomad", "budget"],
      vibeTags: ["brunch-boards", "modern", "specialty-coffee"],
      crowdLevel: "balanced"
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
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
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
      name: "Café Black Iris",
      neighborhood: "Marjane",
      description: "A trendy, modern cafe on Avenue Mohammed VI in the Marjane 2 district. Popular for its generous continental breakfast platters, dessert waffles, and specialty coffee.",
      tip: "Located along Avenue Mohammed VI in Marjane 2. A favorite local spot for breakfast sets and afternoon coffee meetings.",
      badge: "local-favorite",
      bestDishes: [
        "Black Iris Breakfast Board",
        "Nutella & Strawberry Crepe",
        "Caramel Macchiato"
      ],
      pros: [
        "Generous morning breakfast boards at fair prices",
        "Easy parking, AC, Wi-Fi, and wheelchair access"
      ],
      cons: [
        "Located in Marjane, away from historical Medina sights",
        "Can get smoky on the outdoor terrace"
      ],
      googleRating: 4.1,
      googleReviewCount: 650,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 50,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 250,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Black+Iris+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535464035",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-15",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Mediterranean", "Italian", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "budget"],
      vibeTags: ["stylish-brunch", "iced-drinks", "relaxed"],
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
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "terrace", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Cube Noir",
      neighborhood: "Marjane",
      description: "A fashionable, modern cafe and brunch space located at N° 37 Première Tranche Marjane. Offers generous breakfast portions, crepes, burgers, and artisanal iced drinks.",
      tip: "Located in the quiet Marjane neighborhood with ample street parking. Ideal for a relaxed brunch.",
      badge: "local-favorite",
      bestDishes: [
        "Cube Noir Special Breakfast",
        "Banana Chocolate Crepe",
        "Iced Mocha Frappé"
      ],
      pros: [
        "Spacious modern brunch lounge with ample street parking",
        "Popular for iced coffees, crepes, and morning sets"
      ],
      cons: [
        "Residential Marjane location requires a taxi from central Meknès",
        "Can get busy on weekend mornings"
      ],
      googleRating: 4,
      googleReviewCount: 902,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 30,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 902,
      openTime: "07:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cube+Noir+Meknes",
      reservationMethod: ["phone"],
      reservationContact: "+212661231875",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-16",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["French-Moroccan", "Cafe & Pastry", "International"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["budget", "nomad"],
      vibeTags: ["creperie", "bistro", "central"],
      crowdLevel: "balanced"
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
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "terrace",
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
      name: "L’As D-Lys",
      neighborhood: "Hamria",
      description: "A cozy modern fast-casual bistro and creperie in Hamria. Celebrated for freshly prepared gourmet burgers, savory buckwheat crepes, tacos, and sweet crepes.",
      tip: "Comfortable casual spot in central Hamria for clean and quick European bistro food.",
      badge: "local-favorite",
      bestDishes: [
        "D-Lys House Burger",
        "Savory Cheese & Turkey Crepe",
        "Healthy Tuna Bowl"
      ],
      pros: [
        "Clean, quick casual menu with both savory and sweet crepes",
        "Central Hamria location with delivery available"
      ],
      cons: [
        "Street parking can be tight in central Hamria",
        "Not wheelchair accessible"
      ],
      googleRating: 4.1,
      googleReviewCount: 363,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 80,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 667,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=L+As+D-Lys+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535525402",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-17",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["street-food", "casual"],
      foodStyles: ["Moroccan", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "adventure"],
      vibeTags: ["charcoal-grill", "late-night", "street-counter"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 2.5,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food"
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
      name: "Snack Bab Lekhmiss",
      neighborhood: "Médina Ancienne",
      description: "A high-traffic local street food and sandwich counter situated right beside the historic Bab El Khemis city gate. Specializes in charcoal-grilled spiced kefta, merguez, and roast chicken sandwiches.",
      tip: "Classic local street eatery. Order a kefta mixed sandwich with cumin, onions, and spicy harissa on freshly baked khobz.",
      badge: "local",
      bestDishes: [
        "Spiced Kefta & French Fries Sandwich",
        "Rotisserie Spiced Chicken",
        "Grilled Merguez Brochettes"
      ],
      pros: [
        "Ultra-affordable charcoal-grilled sandwiches open until 01:00",
        "Authentic local street-food energy by Bab El Khemis"
      ],
      cons: [
        "Basic counter seating; limited English spoken",
        "Cash only; very bustling late evenings"
      ],
      googleRating: 4.2,
      googleReviewCount: 280,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 50,
      theforkRating: 4,
      theforkReviewCount: 15,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 280,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Bab+Lekhmiss+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-18",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "traditional"],
      foodStyles: ["Moroccan", "Cafe & Pastry"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["budget", "culture"],
      vibeTags: ["bakery", "morning-ritual", "traditional-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
        "pastry",
        "terrace"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed",
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Maison du Blé",
      neighborhood: "Hamria",
      description: "An authentic Moroccan bakery, patisserie, and traditional salon de thé on Place Badr Al Kobra. Locals gathered daily for warm harcha, msemen, baghrir, and fresh mint tea.",
      tip: "Check current operational status before heading here, as directory listings indicate this branch may have permanently closed.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Msemen with Honey & Cheese",
        "Warm Semolina Harcha",
        "Moroccan Mint Tea"
      ],
      pros: [
        "Authentic Moroccan morning pastries and msemen",
        "Very low breakfast pricing"
      ],
      cons: [
        "Flagged as permanently closed on Google Maps",
        "Cash only; no Wi-Fi"
      ],
      googleRating: 4.2,
      googleReviewCount: 550,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 90,
      theforkRating: 4.1,
      theforkReviewCount: 30,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 299,
      openTime: "06:30",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Maison+du+Ble+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535512102",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-19",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "brunch", "afternoon-tea", "flexible"],
      experienceTypes: ["cafes-tea", "casual", "rooftop"],
      foodStyles: ["Italian", "Cafe & Pastry", "Mediterranean"],
      cuisineTags: ["cafe-pastry"],
      archetypeAffinity: ["nomad", "first-timer", "budget"],
      vibeTags: ["scenic-terrace", "garden", "medina-view"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "outdoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "sunset",
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
      name: "Café Bella Citta",
      neighborhood: "Belle-Vue",
      description: "A modern, panoramic cafe and bistro located in the Belle-Vue district. Celebrated for its sweeping views overlooking the ancient Medina walls and valley, alongside outdoor terrace seating, coffee, and light meals.",
      tip: "Located at Rue 6, Janette Belle Vue. Head out to the outdoor terrace for panoramic vistas across the medina skyline.",
      badge: "local",
      bestDishes: [
        "Margherita Pizza",
        "Double Espresso",
        "Moroccan Mint Tea",
        "Breakfast Platter"
      ],
      pros: [
        "Sweeping skyline views toward the Medina walls from Belle-Vue",
        "Parking, Wi-Fi, AC, and wheelchair accessibility"
      ],
      cons: [
        "Very popular and busy around sunset",
        "A short drive or uphill walk from central Hamria"
      ],
      googleRating: 4.1,
      googleReviewCount: 850,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 110,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1486,
      openTime: "07:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Bella+Citta+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535403347",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-20",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night", "flexible"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Italian", "International"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "budget"],
      vibeTags: ["industrial-chic", "laptop-friendly", "late-night"],
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
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
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
      name: "Le Stream",
      neighborhood: "Hamria",
      description: "An industrial-chic cafe and burger lounge in central Hamria. Popular among local youth and digital nomads for its craft burgers, sweet frappes, pasta, and reliable Wi-Fi.",
      tip: "Great laptop-friendly workspace with solid Wi-Fi during the morning and afternoon.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Stream Burger",
        "Choco-Fudge Frappuccino",
        "Truffle Mushroom Pasta"
      ],
      pros: [
        "Laptop-friendly Wi-Fi and open late until 01:00",
        "Wheelchair accessible with AC and delivery"
      ],
      cons: [
        "Lively evening lounge vibe can be noisy for work calls",
        "Limited dedicated parking in central Hamria"
      ],
      googleRating: 4,
      googleReviewCount: 256,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 40,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 256,
      openTime: "07:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Stream+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535525402",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-mcdonalds-hamria",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["International", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["fast-food", "drive-thru", "kids-play-area"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6.5,
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
      closedDays: [],
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "breakfast", "budget", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "McDonald's Hamria",
      neighborhood: "Hamria",
      district: "Avenue Moulay Ismail / Avenue des FAR",
      description: "Central Hamria location at the corner of Avenue Moulay Ismail and Avenue des FAR, featuring McCafé, a kids' play area, free parking, and late-night drive-through service.",
      tip: "Open until 02:00 for late-night cravings, with free parking and outdoor seating next to Hotel Ibis.",
      badge: "local-favorite",
      bestDishes: [
        "Big Mac Meal",
        "McChicken",
        "Oreo McFlurry"
      ],
      pros: [
        "Free parking, drive-through, and open late until 02:00",
        "Kids' playground and familiar halal-certified menu"
      ],
      cons: [
        "Can get crowded with slow waits during peak hours",
        "Cleanliness and Wi-Fi speed receive mixed reviews"
      ],
      googleRating: 3.6,
      googleReviewCount: 2193,
      openTime: "10:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Angle Avenue Moulay Ismail et Avenue des FAR, Hamria, Meknes",
        lat: 33.8965,
        lng: -5.5482
      },
      googleMapsUrl: "https://maps.google.com/?q=McDonald's+Avenue+Moulay+Ismail+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "+212535404283",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-kfc-hamria",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["fast-food", "fried-chicken", "quick-bite"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "budget", "late-night", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "KFC Hamria",
      neighborhood: "Hamria",
      district: "Avenue Moulay Ismail",
      description: "Hamria branch on Avenue Moulay Ismail near Complexe Dawliz serving crispy halal-certified fried chicken tenders, buckets, and Zinger sandwiches in a modern dining space.",
      tip: "Best for takeaway or Glovo delivery; check your order before leaving during busy evening hours.",
      badge: "local-favorite",
      bestDishes: [
        "Zinger Sandwich",
        "Crispy Chicken Bucket",
        "Twister Wrap"
      ],
      pros: [
        "Halal-certified fried chicken and convenient delivery",
        "Central Avenue Moulay Ismail location with AC and outdoor seating"
      ],
      cons: [
        "Frequent customer complaints about wait times and order accuracy",
        "Very few vegetarian options"
      ],
      googleRating: 3.8,
      googleReviewCount: 1400,
      openTime: "11:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Avenue Moulay Ismail, Hamria, Meknes",
        lat: 33.8988,
        lng: -5.5452
      },
      googleMapsUrl: "https://maps.google.com/?q=KFC+Avenue+Moulay+Ismail+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-burger-king-agouray",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["International", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["drive-thru", "family-friendly", "flame-grilled"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6.5,
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
      closedDays: [],
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "budget", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Burger King Marjane Route d'Agouray",
      neighborhood: "Marjane",
      district: "Marjane Shopping Complex, Route d'Agouray",
      description: "Drive-through and spacious restaurant at the Marjane Route d'Agouray commercial center in Quartier Marjane, featuring flame-grilled Whoppers and a kids' play zone.",
      tip: "Convenient stop if shopping at Marjane hypermarket or traveling along Route d'Agouray, with ample private parking.",
      badge: "local-favorite",
      bestDishes: [
        "Flame-Grilled Whopper",
        "Chicken Royale",
        "King Fries & Onion Rings"
      ],
      pros: [
        "Spacious mall dining area with drive-through and kids' play zone",
        "Private parking, AC, and Glovo delivery"
      ],
      cons: [
        "Far from the Medina and historical attractions",
        "Peak shopping hours can mean short counter queues"
      ],
      googleRating: 3.9,
      googleReviewCount: 1650,
      openTime: "11:00",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Centre Commercial Marjane, Route d'Agouray, Marjane, Meknes",
        lat: 33.8745,
        lng: -5.5582
      },
      googleMapsUrl: "https://maps.google.com/?q=Burger+King+Marjane+Route+d'Agouray+Meknes",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-pizza-hut-hamria",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["family-booths", "pan-pizza", "carryout"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7,
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["budget", "dry", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pizza Hut Hamria",
      neighborhood: "Hamria",
      district: "Complexe Dawliz, Boulevard Moulay Ismail",
      description: "Well-established Pizza Hut at Complexe Dawliz in Hamria with family booths, pan pizzas, cheesy crusts, and carryout/delivery options.",
      tip: "Right next to the Dawliz cinema and McDonald's on Boulevard Moulay Ismail—handy for a quick pizza or delivery via Yassir/Glovo.",
      badge: "local-favorite",
      bestDishes: [
        "Super Supreme Pan Pizza",
        "Cheesy Crust Margherita",
        "Pepperoni Feast"
      ],
      pros: [
        "Central Complexe Dawliz location with booths, AC, and wheelchair access",
        "Halal-certified menu with delivery options"
      ],
      cons: [
        "Limited dedicated parking outside",
        "Standard chain pizza rather than artisanal Neapolitan style"
      ],
      googleRating: 4.2,
      googleReviewCount: 992,
      openTime: "11:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Complexe Dawliz, 1 Boulevard Moulay Ismail, Hamria, Meknes",
        lat: 33.8962,
        lng: -5.5478
      },
      googleMapsUrl: "https://maps.google.com/?q=Pizza+Hut+Complexe+Dawliz+Meknes",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212535521414",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-dar-baraka",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "traditional", "casual"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "adventure"],
      vibeTags: ["intimate", "authentic", "homestyle"],
      crowdLevel: "quiet"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["medina", "berber", "tagine", "pastilla", "couscous", "vegan-friendly", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Dar Baraka",
      neighborhood: "Médina Ancienne",
      description: "An intimate, family-run Berber dining room tucked inside a narrow medina alley at 5 Rue Moulay Abdellah Ben Ahmed. With only three or four tables, host Noureddine Latrache personally welcomes guests and prepares home-style Moroccan and Berber specialties.",
      tip: "Because seating is limited to a handful of tables and dishes are cooked fresh to order, knock on the door early or call ahead to reserve.",
      badge: "hidden-gem",
      bestDishes: [
        "Berber Camel Tagine",
        "Homemade Chicken Pastilla",
        "Vegetable Tagine & Zaalouk",
        "Friday Couscous"
      ],
      pros: [
        "Warm, personal hospitality from the owner",
        "Rare Berber specialties like camel tagine alongside vegan options",
        "Very high ratings across Google and Restaurant Guru"
      ],
      cons: [
        "Only 3 to 4 tables available",
        "Can be tricky to find in the medina alleys",
        "Cash only"
      ],
      googleRating: 4.8,
      googleReviewCount: 1206,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 120,
      theforkRating: 4.7,
      theforkReviewCount: 30,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 2214,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Dar+Baraka+5+Rue+My+Abdellah+ben+Ahmed+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212662187441",
      bookingUrl: "",
      whatsappNumber: "+212662187441",
      website: "not-available",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-lahboul-tafilalet",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["traditional", "rooftop", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "adventure"],
      vibeTags: ["authentic", "welcoming", "regional"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash"],
      tags: ["medina", "medfouna", "tafilalet", "rooftop", "tagine", "rfissa", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Lahboul Tafilalet",
      neighborhood: "Médina Ancienne",
      description: "Located at N° 55 Bis Avenue Lahboul in the Old Medina, this top-rated traditional restaurant brings Tafilalet desert heritage to Meknès. Famous for authentic Medfouna (Saharan stuffed bread), alongside rfissa, royal couscous, and rooftop seating with occasional live music.",
      tip: "Order the signature Tafilalet Medfouna or preserved lemon chicken tagine. Wheelchair accessible and multilingual staff (Arabic, English, French, Spanish, Italian).",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Tafilalet Medfouna",
        "Preserved Lemon Chicken Tagine",
        "Chicken Pastilla",
        "Meknassi Rfissa"
      ],
      pros: [
        "Rare chance to taste authentic Tafilalet Medfouna in Meknès",
        "Rooftop seating and wheelchair accessibility",
        "Multilingual hospitality and online/WhatsApp table booking"
      ],
      cons: [
        "Can get busy with culinary tour groups at lunch",
        "No alcohol served"
      ],
      googleRating: 4.9,
      googleReviewCount: 524,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 95,
      theforkRating: 4.8,
      theforkReviewCount: 25,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 418,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Lahboul+Tafilalet+55+Bis+Avenue+Lahboul+Meknes",
      reservationMethod: ["whatsapp", "phone", "website"],
      reservationContact: "+212535534702",
      bookingUrl: "https://restaurantlahboultafilalet.com/",
      whatsappNumber: "+212668290595",
      website: "https://restaurantlahboultafilalet.com/",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-gout-de-meknes",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["rooftop", "traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["scenic", "cozy", "mosque-view"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 10,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa"],
      tags: ["medina", "rooftop", "mosque-view", "tagine", "pastilla", "wifi", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Gout De Meknes",
      neighborhood: "Médina Ancienne",
      description: "Situated directly opposite the Grande Mosquée at 2 Rue Kerestoure, this warm Moroccan eatery pairs a cozy fireplace dining room with a scenic rooftop terrace looking right out over the mosque's minaret and medina rooftops.",
      tip: "Look carefully for the small entrance sign opposite the Great Mosque. Ask for the rooftop terrace at sunset and expect relaxed, cooked-to-order pacing.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken & Preserved Lemon Tagine",
        "Crispy Chicken Pastilla",
        "Beef Tagine & Zaalouk"
      ],
      pros: [
        "Direct rooftop views of the Grande Mosquée",
        "Accepts Visa/cards and offers free Wi-Fi",
        "Fair medina pricing and friendly family service"
      ],
      cons: [
        "Dishes are cooked fresh so service can be unhurried",
        "Entrance sign is easy to walk past"
      ],
      googleRating: 4.5,
      googleReviewCount: 805,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 110,
      theforkRating: 4.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1389,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Gout+De+Meknes+2+Rue+Kerestoure+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212660642995",
      bookingUrl: "",
      whatsappNumber: "+212660642995",
      website: "not-available",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-ya-hala",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "culture", "first-timer"],
      vibeTags: ["homestyle", "authentic", "family-run"],
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
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "medina", "couscous", "pastilla", "tagine", "family-run", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Ya Hala",
      neighborhood: "Médina Ancienne",
      description: "A modest-looking, family-run doorway at 10 Sidi Amar Bouaouada Sebaghine that opens into one of the Medina's warmest home-kitchen experiences. Beloved by locals and travelers alike for generous Friday couscous and mom-cooked Moroccan classics.",
      tip: "Do not be fooled by the humble entrance—step inside or knock. Arrive before 13:30 on Fridays for the homemade tfaya couscous, and allow ~35–45 minutes for fresh preparation.",
      badge: "hidden-gem",
      bestDishes: [
        "Friday Veal & Chicken Tfaya Couscous",
        "Homemade Chicken Pastilla",
        "Slow-Cooked Beef Tagine"
      ],
      pros: [
        "Genuinely home-cooked Moroccan food at budget prices",
        "Massive, generous portions",
        "Warm family atmosphere"
      ],
      cons: [
        "Wait times can reach 40+ minutes since dishes are cooked from scratch",
        "Simple, no-frills entrance"
      ],
      googleRating: 4.6,
      googleReviewCount: 385,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 45,
      theforkRating: 4.5,
      theforkReviewCount: 15,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 385,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Ya+Hala+10+Sidi+Amar+Bouaouada+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212649988816",
      bookingUrl: "",
      whatsappNumber: "+212649988816",
      website: "not-available",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-reference-garden",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual", "rooftop"],
      foodStyles: ["Moroccan", "Cafe & Pastry", "International", "Grill & BBQ", "Italian"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional", "international"],
      archetypeAffinity: ["nomad", "first-timer", "culture"],
      vibeTags: ["botanical", "modern", "laptop-friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 9,
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
      seatingTypes: ["indoor", "outdoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["hamria", "brunch", "breakfast", "rfissa", "couscous", "wifi", "laptop-friendly", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Reference Garden",
      neighborhood: "Hamria",
      description: "A lush, greenery-themed café and restaurant on Avenue Moulay Ismail in Hamria. Highly rated for generous morning breakfasts, specialty coffee, international plates, and traditional weekly specials like Wednesday Rfissa and Friday Couscous.",
      tip: "Visit on Wednesdays for their signature Prestige Rfissa or Fridays for Moroccan Couscous. Great daytime Wi-Fi spot with free parking nearby.",
      badge: "local-favorite",
      bestDishes: [
        "Gourmet Brunch Platter",
        "Wednesday Prestige Rfissa",
        "Avocado & Shrimp Salad",
        "Mixed Grill Brochettes"
      ],
      pros: [
        "Consistent 4.8 rating across more than 1,000 reviews",
        "Bright botanical decor with indoor, terrace, and rooftop areas",
        "Laptop-friendly Wi-Fi, free parking, and Glovo delivery"
      ],
      cons: [
        "Indoor area can feel chilly on winter evenings",
        "Popular weekend brunch hours fill up fast"
      ],
      googleRating: 4.8,
      googleReviewCount: 1099,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 25,
      theforkRating: 4.7,
      theforkReviewCount: 20,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 555,
      openTime: "07:00",
      closeTime: "22:45",
      googleMapsUrl: "https://maps.google.com/?q=Reference+Garden+Avenue+Moulay+Ismail+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212532500633",
      bookingUrl: "",
      whatsappNumber: "+212679783383",
      website: "not-available",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-black-pepper",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["International", "Italian", "Grill & BBQ", "Seafood", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad", "first-timer"],
      vibeTags: ["architectural", "upscale", "modern"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 18,
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
      seatingTypes: ["indoor", "terrace", "outdoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hamria", "steakhouse", "pizza", "sushi", "pasta", "upscale", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Black Pepper",
      neighborhood: "Hamria",
      description: "An acclaimed, design-forward restaurant on Avenue de la Gare crafted by Grégoire Maisondieu Architects. Features wood-fired steaks, 72-hour fermented Neapolitan pizzas, handmade pasta, a dedicated sushi bar, and creative non-alcoholic mocktails.",
      tip: "Book a table online in advance for Friday or Saturday evenings. Great option in Hamria for upscale dining without alcohol.",
      badge: "splurge",
      bestDishes: [
        "72-Hour Fermented Neapolitan Pizza",
        "Wood-Fired Beef Fillet",
        "Black Pepper Burrata & Pesto",
        "Salmon Tartare & Sushi Rolls"
      ],
      pros: [
        "Standout contemporary interior architecture and terrace",
        "Broad, high-quality menu covering steaks, handmade pasta, pizza, and sushi",
        "Easy online booking via their website"
      ],
      cons: [
        "Higher price bracket for Meknès (~140–220 MAD per person)",
        "No alcoholic beverages served"
      ],
      googleRating: 4.5,
      googleReviewCount: 920,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 75,
      theforkRating: 4.6,
      theforkReviewCount: 30,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1168,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Black+Pepper+Residence+Naim+Avenue+de+la+Gare+Meknes",
      reservationMethod: ["website", "phone", "whatsapp"],
      reservationContact: "+212535516832",
      bookingUrl: "https://blackpepper.ma/reservations",
      whatsappNumber: "",
      website: "https://blackpepper.ma/",
      instagram: "https://instagram.com/black.pepper.maroc"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-korsane",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Mediterranean", "Italian", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "first-timer", "culture"],
      vibeTags: ["contemporary", "quiet-zone", "stylish"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["hamria", "mediterranean", "pizza", "focaccina", "wifi", "non-smoking", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Korsane",
      neighborhood: "Hamria",
      description: "A chic contemporary Mediterranean café-restaurant on Place de Tunis in Hamria. Celebrated for artisanal sourdough pizzas (Al Tartufo, La Burrata), homemade focaccina sandwiches, gourmet burgers, and pastries in a refined setting with a dedicated quiet non-smoking area.",
      tip: "Great choice if you want a peaceful, smoke-free dining room in Hamria with reliable Wi-Fi and parking. Also available on Glovo.",
      badge: "local-favorite",
      bestDishes: [
        "Al Tartufo Truffle Pizza",
        "La Burrata & Pistachio Pizza",
        "Homemade Focaccina Italiano",
        "Korsane Double Burger"
      ],
      pros: [
        "Dedicated quiet, non-smoking dining area",
        "High-quality Italian ingredients (Mutti tomato, fior di latte, burrata)",
        "Open all day from breakfast until midnight"
      ],
      cons: [
        "Specialty pizzas sit in the 120–160 MAD range",
        "Busy on weekend evenings"
      ],
      googleRating: 4.7,
      googleReviewCount: 314,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 20,
      theforkRating: 4.6,
      theforkReviewCount: 15,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 280,
      openTime: "08:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Korsane+Place+de+Tunis+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212535500767",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://linktr.ee/restaurant.korsane",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-rs-villa",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["casual", "cafes-tea", "rooftop"],
      foodStyles: ["International", "Moroccan", "Italian", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "nomad"],
      vibeTags: ["family-friendly", "live-music", "panoramic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["hamria", "brunch", "terrace", "live-music", "family", "kids-area", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "RS Villa",
      neighborhood: "Hamria",
      description: "A lively, multi-level villa café-restaurant at Villa 8, Place Abdelkarim El Khatib. Boasts a panoramic terrace facing Mount Zerhoun, an indoor kids' playroom, and weekly Issaoui and Chaâbi live music nights alongside breakfasts, pizzas, pastas, and Moroccan dishes.",
      tip: "Visit Wednesday, Friday, Saturday, or Sunday evenings for free-entry live Issaoui & Chaâbi music on the 2nd floor, or head up early for brunch on the Zerhoun-facing terrace.",
      badge: "local-favorite",
      bestDishes: [
        "RS Villa Family Breakfast",
        "Wood-Fired Pizza & Pasta",
        "Artisanal Waffles & Crepes"
      ],
      pros: [
        "Panoramic terrace overlooking Mount Zerhoun",
        "Dedicated children's play area (-1 floor) makes it great for families",
        "Weekly live Moroccan music nights with no cover charge"
      ],
      cons: [
        "Very lively and loud during music nights",
        "Peak weekend evenings may require a phone reservation deposit"
      ],
      googleRating: 4.4,
      googleReviewCount: 1162,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 40,
      theforkRating: 4.4,
      theforkReviewCount: 25,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1087,
      openTime: "07:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=RS+Villa+Place+Abdelkarim+El+Khatib+Meknes",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212535401352",
      bookingUrl: "",
      whatsappNumber: "+212663308394",
      website: "https://rsvilla.ma/",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-escale-maritime",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "rooftop", "hidden-gem"],
      foodStyles: ["Seafood", "Mediterranean", "Grill & BBQ"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["refined", "seafood", "polished"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 17,
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
      closedDays: ["friday"],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["hamria", "seafood", "oysters", "paella", "fine-dining", "rooftop", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "L'Escale Maritime",
      neighborhood: "Hamria",
      description: "An elevated, dedicated seafood restaurant tucked onto Rue Abdelmoumen El Mouahadi in Hamria. Known across the region for fresh fish, seafood paella, fisherman's salads, mocktails, and custom chef dishes like oysters au gratin.",
      tip: "Note that L'Escale Maritime is closed on Fridays. Ask the chef about fresh daily catch specials and rooftop seating.",
      badge: "hidden-gem",
      bestDishes: [
        "Fresh Grilled Fish Platter",
        "Seafood Paella",
        "Salade Pêcheur",
        "Oysters au Gratin"
      ],
      pros: [
        "One of the rare polished, dedicated seafood restaurants in inland Meknès",
        "Attentive, accommodating kitchen and staff",
        "Available for dine-in and Glovo delivery"
      ],
      cons: [
        "Closed all day on Fridays",
        "Higher price range (150–200 MAD per person)"
      ],
      googleRating: 4.6,
      googleReviewCount: 248,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 30,
      theforkRating: 4.4,
      theforkReviewCount: 15,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 264,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=L+escale+Maritime+Rue+Abdelmoumen+El+Mouahadi+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212664641108",
      bookingUrl: "",
      whatsappNumber: "+212664641108",
      website: "not-available",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-meknes-sundays",
    city: "meknes",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Italian", "Mediterranean", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "nomad", "luxury"],
      vibeTags: ["spotless", "attentive", "cozy"],
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["hamria", "italian", "pasta", "european", "lunch", "dinner", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Sunday's",
      neighborhood: "Hamria",
      description: "A spotless, welcoming European and Italian bistro at Résidence Mamounia on Rue Ouazzane in Hamria. Praised by both locals and travelers for freshly prepared pasta, chicken émincé, crisp salads, and standout floor service.",
      tip: "A reliable change of pace from tagines near central Hamria, with clean facilities and solid lunch value (50–100 MAD per main).",
      badge: "local-favorite",
      bestDishes: [
        "Émincé de Poulet in Cream Sauce",
        "Fresh Italian Pasta",
        "Chef's Caesar & Gourmet Salads"
      ],
      pros: [
        "Consistently praised for cleanliness and warm, attentive staff",
        "Great value for European/Italian cuisine in Hamria",
        "Reliable 4.6 Google rating"
      ],
      cons: [
        "Smaller indoor bistro without a large garden terrace",
        "No alcohol served"
      ],
      googleRating: 4.6,
      googleReviewCount: 320,
      tripadvisorRating: 5.0,
      tripadvisorReviewCount: 6,
      theforkRating: 4.5,
      theforkReviewCount: 15,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 300,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Sundays+Restaurant+3+Rue+Ouazzane+Meknes",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212535520707",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    },
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
