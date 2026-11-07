/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: MERZOUGA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-merzouga-1' or 'eat-merzouga-restaurant')
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
 *   id: 'e-merzouga-[id]',
 *   city: 'merzouga',
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

export const merzougaEat: EatListing[] = [
  {
    id: "e-merzouga-1",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Live Music Terrace"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "live-music",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Cafe Nora",
      neighborhood: "Khamlia Village",
      description: "An iconic cultural stop in the Gnawa village of Khamlia. Renowned for serving the most authentic, slow-baked Medfouna (Berber pizza) while local Gnawa musicians play hypnotic traditional rhythms.",
      tip: "Everything is baked strictly to order in their traditional clay ovens, so expect a 30-40 minute wait. Relax and enjoy the complimentary mint tea and live Gnawa percussion while it bakes.",
      badge: "local-favorite",
      bestDishes: [
        "Medfouna (Berber Pizza)",
        "Vegetarian Medfouna",
        "Spiced Berber Mint Tea"
      ],
      googleRating: 4.6,
      googleReviewCount: 1156,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 450,
      theforkRating: 4.6,
      theforkReviewCount: 60,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 1200,
      openTime: "09:00",
      closeTime: "20:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Nora+Khamlia+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "+212667612191",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 30
    }
  },

  {
    id: "e-merzouga-2",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Traditional Dining", "Sunset Views"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7.5,
      isHalal: true,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "mountain",
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
      name: "Café Restaurant Chez Ibrahim",
      neighborhood: "Khamlia Village",
      description: "An authentic roadside restaurant situated at Kser El Khamlia on the Taouz road. Offers a sun-drenched terrace overlooking the desert plains, serving rich aubergine tagines, charcoal brochettes, and freshly baked medfouna.",
      tip: "Their set lunch menu includes cooked Moroccan vegetable salads, an aubergine tajine, freshly baked medfouna, and fresh fruit for dessert.",
      badge: "local-favorite",
      bestDishes: [
        "Eggplant and Cheese Tagine",
        "Berber Pizza (Medfouna)",
        "Charcoal Kefta Brochettes"
      ],
      googleRating: 4.7,
      googleReviewCount: 289,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 85,
      theforkRating: 4.7,
      theforkReviewCount: 25,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 290,
      openTime: "10:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Chez+Ibrahim+Khamlia",
      reservationMethod: ["phone"],
      reservationContact: "+212666147161",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-merzouga-3",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Romantic Sunset",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "mountain",
        "sunset",
        "tagine"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Restaurant SaharaTime",
      neighborhood: "Hassi Labied",
      description: "A desert dining oasis set under traditional nomad tenting directly at the edge of the Erg Chebbi sand dunes. Managed by Youssef, welcoming guests to savor wood-fired slow-simmered Moroccan stews with dune views.",
      tip: "Book a sunset dinner to watch the dunes change colors from golden to deep red, followed by campfire tea under the starry desert sky.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Cooked Lemon Chicken Tagine",
        "Smoky Meat Tagine on Wood Embers",
        "Traditional Harira Soup"
      ],
      googleRating: 4.9,
      googleReviewCount: 313,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 90,
      theforkRating: 4.8,
      theforkReviewCount: 20,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 313,
      openTime: "09:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Sahara+Time+Hassi+Labied",
      reservationMethod: ["phone"],
      reservationContact: "+212673239229",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-merzouga-4",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Fast Food"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "street-food",
        "tagine"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Mustapha",
      neighborhood: "Merzouga Center",
      description: "The go-to local budget counter in Merzouga village. Unpretentious and bustling, Snack Mustapha serves quick, freshly seared meat sandwiches, loaded fries, and simple tagines to hungry travelers and desert guides.",
      tip: "Order the spiced kefta sandwich with frites tucked inside the crusty khobz—an authentic local staple that costs next to nothing.",
      badge: "local",
      bestDishes: [
        "Spiced Kefta Sandwich with Fries",
        "Grilled Merguez Brochettes",
        "Berber Omelet"
      ],
      googleRating: 4.7,
      googleReviewCount: 121,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 30,
      theforkRating: 4.5,
      theforkReviewCount: 15,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 121,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Mustapha+Merzouga",
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
    id: "e-merzouga-5",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Sunset Views"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "couscous",
        "dinner",
        "dry",
        "mountain",
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
      name: "Restaurant Cafe Fatima",
      neighborhood: "Hassi Labied",
      description: "A family-owned culinary landmark operating for years in quiet Hassi Labied village. Famed for exceptionally rich, homestyle tagines simmered slowly over clay coal burners and served on a scenic roof terrace.",
      tip: "Head upstairs to the roof terrace for lovely dune views while eating. The set menu includes complimentary harira soup, olives, and mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Prunes & Boiled Eggs",
        "Tajine Galia",
        "Friday Seven-Vegetable Couscous"
      ],
      googleRating: 4.7,
      googleReviewCount: 278,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 263,
      theforkRating: 4.6,
      theforkReviewCount: 40,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 581,
      openTime: "11:30",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Cafe+Fatima+Hassi+Labied",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-merzouga-6",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Casual Dining"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Restaurant Alla",
      neighborhood: "Khamlia Village",
      description: "A welcoming culinary stop in Khamlia village. Alla and his family greet travelers into a lovely shaded desert courtyard for fresh Moroccan salads, authentic stone-baked Berber pizza, and tea ceremonies.",
      tip: "Located just off the main road down a sandy track. Medfouna is baked completely fresh to order (takes ~45 mins) and easily feeds two hungry adults.",
      badge: "local-favorite",
      bestDishes: [
        "Authentic Medfouna (Berber Pizza)",
        "Cooked Moroccan Tomato & Pepper Salad",
        "Fresh Mint Tea"
      ],
      googleRating: 4.9,
      googleReviewCount: 172,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 45,
      theforkRating: 4.8,
      theforkReviewCount: 15,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 175,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Alla+Khamlia",
      reservationMethod: ["none"],
      reservationContact: "+212611094484",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 20
    }
  },

  {
    id: "e-merzouga-7",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "quiet", "tagine"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Zafa",
      neighborhood: "Merzouga / Taouz Road",
      description: "Operating since 2007, Zaid and his wife Fatima invite guests to dine directly inside their decorated roadside family home. Offers deeply personal Berber hospitality and slow-simmered desert recipes.",
      tip: "Since every meal is made from scratch in their family kitchen, calling ahead or dropping in earlier in the day to place your order ensures minimal waiting.",
      badge: "hidden-gem",
      bestDishes: [
        "Fatima’s Spiced Chicken Tagine",
        "Zaza Fruit Dessert with Avocado",
        "Saffron Beef Tajine"
      ],
      googleRating: 4.8,
      googleReviewCount: 110,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 40,
      theforkRating: 4.7,
      theforkReviewCount: 10,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 110,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Zafa+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-merzouga-8",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: [
        "Casual Dining",
        "Cozy casual family-run Moroccan eatery",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan", "Fast Food", "Berber"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "street-food",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Snack Restaurant Hamid",
      neighborhood: "Hassi Labied",
      description: "An overwhelmingly popular culinary institution in Hassi Labied. Renowned for its extraordinarily kind owner Hamid, huge portions of fresh market salads, grilled brochettes, tacos, and slow-cooked tagines.",
      tip: "One of the highest-rated eateries in the region. Hamid speaks multiple languages and often prepares takeout meals early in the morning for travelers departing toward Fes.",
      badge: "local-favorite",
      bestDishes: [
        "Kefta Tagine with Egg and Cheese",
        "House Spiced Chicken Tacos",
        "Fresh Moroccan Salad Platter"
      ],
      googleRating: 4.9,
      googleReviewCount: 1471,
      tripadvisorRating: 5,
      tripadvisorReviewCount: 420,
      theforkRating: 4.9,
      theforkReviewCount: 80,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1500,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Hamid+Hassi+Labied",
      reservationMethod: ["none"],
      reservationContact: "+212667069078",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-9",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Sunset Views", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
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
        "couscous",
        "dinner",
        "fine",
        "mountain",
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
      name: "Kanz Erremal Restaurant",
      neighborhood: "Erg Chebbi Dunes",
      description: "An elegant hotel dining room housed in a traditional Kasbah structure built right against the foot of the Erg Chebbi dunes. Features panoramic pool and dune views, offering refined Moroccan cuisine and wine.",
      tip: "One of the few dining rooms right on the dunes that serves wine and cold beer. Relax on the terrace beside the pool overlooking Erg Chebbi.",
      badge: "splurge",
      bestDishes: [
        "Slow-Braised Saffron Lamb Shank",
        "Assorted Couscous with Vegetables",
        "Moroccan Pastry Assortment"
      ],
      googleRating: 4.3,
      googleReviewCount: 450,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 280,
      theforkRating: 4.2,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 450,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Kanz+Erremal+Hotel+Merzouga",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212535578482",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-10",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "cafe-pastry", "dinner", "dry", "tagine", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Restaurant Chez Youssef",
      neighborhood: "Merzouga Center",
      description: "Located in the heart of Merzouga village, this welcoming family eatery is favored by local desert guides and independent travelers for its crispy wood-fired medfouna and hearty tagines.",
      tip: "Youssef is an attentive host. His stuffed Berber flatbread is filled with minced meat, hard-boiled eggs, almonds, and traditional Saharan spices.",
      badge: "local-favorite",
      bestDishes: [
        "Youssef’s Classic Medfouna",
        "Chicken and Green Olive Tagine",
        "Berber Omelet with Cumin"
      ],
      googleRating: 4.7,
      googleReviewCount: 157,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 220,
      theforkRating: 4.7,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 180,
      openTime: "11:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Chez+Youssef+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "+212666367174",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-merzouga-11",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Traditional Dining", "Casual Dining"],
      foodStyles: ["Moroccan", "Cafe"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "tagine"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Chez Marrakesh",
      neighborhood: "Merzouga Village",
      description: "A cozy local cafe-restaurant featuring traditional earthen decor. Known for its slow-cooked tagines, Moroccan breakfast sets, and relaxed village setting.",
      tip: "A great morning spot for a classic Moroccan breakfast with warm flatbread, olive oil, honey, and mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Berber Breakfast Board",
        "Lemon Chicken Tagine",
        "Fresh Squeezed Orange Juice"
      ],
      googleRating: 4.6,
      googleReviewCount: 110,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 40,
      theforkRating: 4.5,
      theforkReviewCount: 15,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 110,
      openTime: "08:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Chez+Marrakesh+Merzouga",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-12",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Sunset Views", "Traditional Dining"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "mountain",
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
      name: "Restaurant Tifawt",
      neighborhood: "Merzouga Village",
      description: "Featuring a raised terrace with direct sightlines to the dunes, Tifawt serves generous clay-pot tagines, skewers, and vibrant cooked Moroccan salads at very reasonable prices.",
      tip: "Take a table on the upper terrace around sunset to take in the desert colors while waiting for your tagine.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Prunes & Almonds",
        "Spiced Kefta Tagine",
        "Moroccan Salad Medley"
      ],
      googleRating: 4.4,
      googleReviewCount: 180,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 35,
      theforkRating: 4.2,
      theforkReviewCount: 15,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 180,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Tifawt+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-13",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Family Friendly"
      ],
      foodStyles: ["Moroccan", "Mediterranean"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "dinner", "dry", "tagine", "terrace", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Hassilabiad Appart Chez Toupie",
      neighborhood: "Hassi Labied",
      description: "A top-rated dining retreat in Hassi Labied run by a welcoming family. Serves generous, freshly cooked Berber feasts, tagines, and salads in modern indoor salons or beside their courtyard pool.",
      tip: "A hidden gem in Hassi Labied. The family also operates the adjacent Depot Nomad carpet gallery. Excellent service in fluent English.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Lemon Chicken",
        "Traditional Beef Tajine",
        "Fresh Fruit Parfait"
      ],
      googleRating: 4.9,
      googleReviewCount: 591,
      tripadvisorRating: 5,
      tripadvisorReviewCount: 157,
      theforkRating: 4.9,
      theforkReviewCount: 50,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 736,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Hassilabiad+Appart+Chez+Toupie",
      reservationMethod: ["phone"],
      reservationContact: "+212624422542",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-14",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["breakfast", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 35,
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
        "tagine"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Sahara Stars Camp Restaurant",
      neighborhood: "Erg Chebbi Dunes",
      description: "A luxury camp dining experience deep in the dunes of Erg Chebbi. Guests dine on multi-course Moroccan cuisine under a canopy of Saharan stars, accompanied by campfire Gnawa drumming.",
      tip: "Advance booking is required. Packages typically include 4x4 dune transit, candlelit tables under the stars, and campfire music.",
      badge: "splurge",
      bestDishes: [
        "Slow-Roasted Lamb Mechoui",
        "Saffron Chicken Tagine",
        "Pistachio Baklava"
      ],
      googleRating: 4.9,
      googleReviewCount: 95,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 40,
      theforkRating: 4.8,
      theforkReviewCount: 10,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 95,
      openTime: "18:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Sahara+Stars+Camp+Merzouga",
      reservationMethod: ["phone", "online"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 0
    }
  },

  {
    id: "e-merzouga-15",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "mountain", "quiet", "terrace"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Aytma Restaurant",
      neighborhood: "Khamlia Village",
      description: "A traditional Kasbah restaurant in Khamlia celebrated for preserving ancient clay-pot techniques and pre-Saharan recipes with local dates, nuts, and farm-fresh ingredients.",
      tip: "Try their slow-baked chicken with dates and almonds—a rare authentic Saharan specialty prepared with local palm grove produce.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Baked Chicken with Desert Dates",
        "Berber Pizza (Medfouna)",
        "Handmade Harissa Salad"
      ],
      googleRating: 4.9,
      googleReviewCount: 282,
      tripadvisorRating: 5,
      tripadvisorReviewCount: 58,
      theforkRating: 4.9,
      theforkReviewCount: 20,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 282,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Aytma+Restaurant+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-16",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["Casual Dining", "Tranquil Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Pizza"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
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
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Restaurant Tenere",
      neighborhood: "Hassi Labied",
      description: "A relaxed desert cafe and pizzeria featuring an open terrace with views of the palm groves. Serves freshly-pressed juices, pizzas, kebabs, and Italian coffees.",
      tip: "Great rooftop and terrace seating to relax with cold juice and pizza after camel riding through the dunes.",
      badge: "local-favorite",
      bestDishes: [
        "Thin-Crust Wood Pizza",
        "Kefta Sandwich with Fries",
        "Fresh Pomegranate Juice"
      ],
      googleRating: 4.2,
      googleReviewCount: 110,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 30,
      theforkRating: 4,
      theforkReviewCount: 10,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 110,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Tenere+Hassi+Labied",
      reservationMethod: ["none"],
      reservationContact: "+212646037818",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-merzouga-17",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
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
      tags: ["budget", "cafe-pastry", "dry", "medina", "pastry"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Faran B'Lal",
      neighborhood: "Rissani",
      description: "A historic communal mud-brick bakery (\"faran\") in the ancient trading post of Rissani (birthplace of Medfouna). Visitors stop here during day tours to observe Berber pizzas baked on wood embers.",
      tip: "Located inside Rissani souk. Best visited on market days (Sunday, Tuesday, Thursday). Watch the baker shovel flatbreads directly into the wood-fired hearth.",
      badge: "hidden-gem",
      bestDishes: [
        "Traditional Stuffed Medfouna with Almonds & Eggs",
        "Wood-Fired Khobz",
        "Local Mint Tea"
      ],
      googleRating: 4.8,
      googleReviewCount: 95,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 30,
      theforkRating: 4.7,
      theforkReviewCount: 10,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 95,
      openTime: "08:00",
      closeTime: "15:00",
      googleMapsUrl: "https://maps.google.com/?q=Faran+BLal+Rissani",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-18",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["Casual Dining", "Sunset Views", "Family Friendly"],
      foodStyles: ["Moroccan", "Mediterranean", "Healthy"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 12,
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
        "juice",
        "mountain",
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
      name: "Auberge Haven La Chance Restaurant",
      neighborhood: "Hassi Labied",
      description: "Located inside Haven La Chance at the base of the dunes, this hotel restaurant offers relaxed poolside dining, Moroccan salads, juicy brochettes, and cold beer facing Erg Chebbi.",
      tip: "A licensed desert hotel where you can enjoy an evening beer or wine on the terrace while looking directly up at the sand dunes.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Lamb Skewers",
        "Mixed Moroccan Mezze Plate",
        "Fresh Squeezed Orange Juice"
      ],
      googleRating: 4.3,
      googleReviewCount: 320,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 25,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 320,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Haven+La+Chance+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "+212535577299",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-merzouga-19",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Upscale Lounge"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 14,
      isHalal: true,
      isVegetarianFriendly: true,
      servesAlcohol: false,
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
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "pastilla",
        "quiet",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ksar Bicha Restaurant",
      neighborhood: "Merzouga Village",
      description: "A traditional dining room and poolside lounge set inside the adobe-walled Ksar Bicha. Offers slow-cooked Saharan tagines, Moroccan salads, and licensed bar drinks in a mud-brick Kasbah lounge.",
      tip: "Features an outdoor pool and licensed bar/lounge. Ideal for a relaxing dinner with Moroccan wine away from the dust of the dunes.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Cooked Beef Tagine with Figs",
        "Chicken Pastilla with Almonds",
        "Spiced Harira"
      ],
      googleRating: 4.4,
      googleReviewCount: 77,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 45,
      theforkRating: 4.3,
      theforkReviewCount: 15,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 77,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Ksar+Bicha+Merzouga",
      reservationMethod: ["phone"],
      reservationContact: "+212535577113",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-merzouga-20",
    city: "merzouga",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Italian", "Fast Food"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3.5,
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
      tags: ["budget", "dinner", "dry", "late-night", "street-food"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Milano",
      neighborhood: "Merzouga Center",
      description: "A budget-friendly village counter right in Merzouga center. Serves quick personal-sized pizzas, toasted paninis, and sweet mint tea to budget backpackers and locals.",
      tip: "Unpretentious and very fast. Great spot for a quick late-night panini or pizza after returning from a desert excursion.",
      badge: "local",
      bestDishes: [
        "Beef & Cheese Pizza",
        "Merguez Panini",
        "Fresh French Fries"
      ],
      googleRating: 4.5,
      googleReviewCount: 35,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 15,
      theforkRating: 4.4,
      theforkReviewCount: 5,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 35,
      openTime: "11:00",
      closeTime: "01:30",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Milano+Merzouga",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    }
  }
];
