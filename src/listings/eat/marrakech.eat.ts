/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: MARRAKECH
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-marrakech-1' or 'eat-marrakech-restaurant')
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
 *   id: 'e-marrakech-[id]',
 *   city: 'marrakech',
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

export const marrakechEat: EatListing[] = [
  {
    id: "m-eat-1",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "afternoon-tea"],
      experienceTypes: [
        "Casual Dining",
        "Romantic Sunset",
        "Garden restaurant with live music",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan", "Mediterranean", "European"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
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
      seatingTypes: ["indoor", "garden", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "live-music",
        "medina",
        "pastilla",
        "riad",
        "sunset",
        "tanjia",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Jardin",
      neighborhood: "Medina",
      description: "A beautifully restored 16th-century riad transformed into a lush green garden oasis. Serves a lovely mix of classic Moroccan dishes and light international fare in a serene, plant-filled courtyard.",
      tip: "Strictly dry (no alcohol served). Courtyard is completely shaded and cool, making it ideal to escape midday heat in the souks.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tanjia Marrakchia",
        "Chicken Pastilla with Cherries",
        "Saffron Crème Brûlée"
      ],
      pros: [
        "Shaded lush riad courtyard oasis with tranquil botanical plants.",
        "Authentic slow-cooked Beef Tanjia Marrakchia and Chicken Pastilla.",
        "Attentive multilingual staff and serene respite from the souk bustle."
      ],
      cons: [
        "Peak lunch and dinner rushes can result in short wait times without reservations.",
        "Strictly dry dining venue (no alcoholic beverages served)."
      ],
      googleRating: 4.1,
      googleReviewCount: 6480,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 2930,
      theforkRating: 4.1,
      theforkReviewCount: 450,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 10990,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+Marrakech",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212524378295",
      whatsappNumber: "+212524378295",
      bookingUrl: "https://lejardinmarrakech.com",
      website: "https://lejardinmarrakech.com",
      instagram: "lejardinmarrakech",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJ_1XbVGjurw0RHNXyrVPvcwc",
      nonCopyrightImage: "https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-2",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "brunch"],
      experienceTypes: ["Casual Dining", "Tranquil Dining", "Cafe"],
      foodStyles: ["Mediterranean", "Healthy"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["garden"],
      paymentMethods: ["cash"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "medina"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Famille",
      neighborhood: "Medina",
      description: "An incredibly popular, chic vegetarian garden lunch spot. Hidden away in a quiet alley, it offers daily-changing Mediterranean menus with fresh, organic ingredients under lemon trees.",
      tip: "Lunch service only, closed on Sundays, and 100% vegetarian. Book online several days in advance as seating is scarce.",
      badge: "hidden-gem",
      bestDishes: [
        "Fresh Fig and Goat Cheese Salad",
        "Daily Homemade Pasta",
        "Organic Orange Blossom Tart"
      ],
      googleRating: 4.3,
      googleReviewCount: 1650,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 550,
      theforkRating: 4.3,
      theforkReviewCount: 180,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 2200,
      openTime: "12:00",
      closeTime: "16:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Famille+Marrakech",
      reservationMethod: ["online"],
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 0,
      googlePlaceId: "ChIJy0qZVG3urw0RGH19bK-S8m4",
      nonCopyrightImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-3",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
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
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "rooftop", "tanjia"],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Lamine Hadj Mustapha",
      neighborhood: "Jemaa el-Fna",
      description: "The historic reference point for traditional, slow-roasted pit lamb (Méchoui) and authentic clay-pot Tanjia Marrakchia. Run by a legendary local master chef off Jemaa el-Fna.",
      tip: "Arrive between 12:00 and 13:30. The lamb méchoui is roasted underground in the morning and frequently sells out by mid-afternoon.",
      badge: "local-favorite",
      bestDishes: [
        "Mechoui (Pit-Roasted Lamb)",
        "Tanjia Marrakchia",
        "Traditional Khobz"
      ],
      googleRating: 3.7,
      googleReviewCount: 3420,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 1640,
      theforkRating: 3.7,
      theforkReviewCount: 300,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 3420,
      openTime: "11:30",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Lamine+Hadj+Mustapha+Marrakech",
      reservationMethod: ["none"],
      reservationContact: "+212662022080",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJc1eWcG3urw0RuX3f3qD3C9g",
      nonCopyrightImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-4",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Cafe", "Sunset Views", "Casual Dining", "People Watching"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
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
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "mountain",
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
      name: "Café des Épices",
      neighborhood: "Medina / Rahba Kedima",
      description: "The iconic multi-story rooftop cafe in the Medina, located right on the bustling Rahba Kedima (Spice Square). Perfect for market views, spice stalls, and Atlas Mountains panoramas.",
      tip: "Walk-ins only. Head up to the second or top rooftop terrace just before sunset for sweeping views over Rahba Kedima.",
      badge: "local-favorite",
      bestDishes: [
        "Kefta Egg Tagine",
        "Spice Square Juice (Ginger & Orange)",
        "Saffron Spiced Coffee"
      ],
      googleRating: 4.2,
      googleReviewCount: 7150,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 6680,
      theforkRating: 4.1,
      theforkReviewCount: 750,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 14000,
      openTime: "09:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+des+Epices+Marrakech",
      reservationMethod: ["none"],
      reservationContact: "+212662564134",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJuX4rVG3urw0RD8i8J7R2B6U",
      nonCopyrightImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-5",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Modern Fusion Dining", "Sunset Views", "Fine Dining"],
      foodStyles: ["Moroccan", "Mediterranean"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
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
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "fine",
        "medina",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Nomad",
      neighborhood: "Medina / Rahba Kedima",
      description: "A trendy, internationally acclaimed multi-level restaurant with chic modern-Moroccan design. Offers dual rooftop terraces overlooking Spice Square serving inventive Maghrebi-fusion plates.",
      tip: "Book 1-2 weeks in advance for top terrace tables at sunset. Completely dry; serves signature infused mocktails.",
      badge: "local-favorite",
      bestDishes: [
        "Lamb Burger with Harissa Mayo",
        "Spiced Calamari",
        "Saffron Scented Orange Cake"
      ],
      googleRating: 4,
      googleReviewCount: 7530,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 6670,
      theforkRating: 4.1,
      theforkReviewCount: 880,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 14500,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Nomad+Marrakech",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212524381609",
      bookingUrl: "https://nomadmarrakech.com",
      website: "https://nomadmarrakech.com",
      instagram: "nomadmarrakech",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 20,
      googlePlaceId: "ChIJuXAbl2Xurw0R9pfGiHPcnso",
      nonCopyrightImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-6",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Traditional Dining", "Upscale Lounge"],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 28,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "pastilla",
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
      name: "Al Fassia",
      neighborhood: "Guéliz",
      description: "One of Marrakech’s most respected dining institutions, operated entirely by women since 1987. Specializes in exquisite, slow-cooked tagines and stews preserving the authentic culinary heritage of Fes.",
      tip: "Closed on Tuesdays. Features a full licensed Moroccan wine list. Dishes like the shoulder of lamb for two require calling 24h ahead.",
      badge: "local-favorite",
      bestDishes: [
        "Lamb Tagine with Caramelized Onions",
        "Royal Pigeon Pastilla",
        "Assortment of 12 Moroccan Salads"
      ],
      googleRating: 4.5,
      googleReviewCount: 3410,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 2400,
      theforkRating: 4.5,
      theforkReviewCount: 520,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 3400,
      openTime: "17:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Al+Fassia+Gueliz",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524434060",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJlWv0_m3urw0R5D-k0eQZ1xA",
      nonCopyrightImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-7",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "flexible"],
      experienceTypes: [
        "Fine Dining",
        "24/7 Brasserie",
        "Upscale Lounge",
        "People Watching"
      ],
      foodStyles: ["French", "Mediterranean", "European"],
      cuisineTags: ["international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 26,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "fine",
        "late-night",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Grand Café de la Poste",
      neighborhood: "Guéliz",
      description: "A restored 1920s French colonial brasserie in Gueliz. Features deep leather armchairs, brass fans, and a leafy veranda, serving classic French bistro meals and Mediterranean plates.",
      tip: "The ground floor and mezzanine offer vintage atmosphere with jazz in the background. Excellent wine and cocktail selection.",
      badge: "splurge",
      bestDishes: [
        "Steak Frites",
        "Oysters from Oualidia",
        "Duck Confit Parmentier"
      ],
      googleRating: 4.3,
      googleReviewCount: 4500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 2800,
      theforkRating: 4.3,
      theforkReviewCount: 650,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 5500,
      openTime: "08:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Grand+Cafe+de+la+Poste+Marrakech",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524433038",
      bookingUrl: "https://legrandcafedelaposte.restaurant",
      website: "https://legrandcafedelaposte.restaurant",
      instagram: "legrandcafedelaposte",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJt1m_dm3urw0R6E9vG_BfX0Q",
      nonCopyrightImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-8",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "Traditional Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
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
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "rooftop",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Clock",
      neighborhood: "Kasbah",
      description: "A cross-cultural oasis in the historic Kasbah. Famous for camel burgers, traditional Moroccan storytelling nights (Hikayat), and calligraphy classes in a student-friendly, hybrid Moroccan setting.",
      tip: "Hosts live traditional Moroccan storytelling in English on Thursday evenings and Gnawa jams on Sundays.",
      badge: "local-favorite",
      bestDishes: [
        "Camel Burger with Spiced Wedges",
        "Spiced Date Shake",
        "Falafel & Hummus Bowl"
      ],
      googleRating: 4.4,
      googleReviewCount: 2500,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1800,
      theforkRating: 4.4,
      theforkReviewCount: 220,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 3000,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Clock+Marrakech",
      reservationMethod: ["none"],
      reservationContact: "+212524378367",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJwSg88mzurw0RDh5G3N6s_10",
      nonCopyrightImage: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-9",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner", "afternoon-tea"],
      experienceTypes: [
        "Cafe",
        "Traditional Dining",
        "Tranquil Dining",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan", "Cafe"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
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
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "medina",
        "quiet",
        "riad",
        "rooftop",
        "tagine",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Cherifa",
      neighborhood: "Medina",
      description: "One of the oldest, most beautifully preserved 15th-century riads in the Medina, operating as a quiet literary café and cultural space with museum-grade stucco and cedar woodwork.",
      tip: "One of the most tranquil architectural sanctuaries in the souks. Closes at 19:00 on Wednesdays.",
      badge: "hidden-gem",
      bestDishes: [
        "Saffron Lamb Tagine",
        "Msemen with Orange Blossom Honey",
        "Artisanal Mint Tea with Cornes de Gazelle"
      ],
      googleRating: 4.5,
      googleReviewCount: 2630,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 920,
      theforkRating: 4.5,
      theforkReviewCount: 150,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 2630,
      openTime: "10:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Cherifa+Marrakech",
      reservationMethod: ["phone"],
      reservationContact: "+212524426550",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 0,
      googlePlaceId: "ChIJs79A_m3urw0RwX1s6L7f3e8",
      nonCopyrightImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-10",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "afternoon-tea", "brunch", "flexible"],
      experienceTypes: ["Cafe", "Fine Dining", "Upscale Lounge"],
      foodStyles: ["Cafe", "French", "Patisserie"],
      cuisineTags: ["cafe-pastry", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "fine",
        "medina",
        "palace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Bacha Coffee",
      neighborhood: "Medina / Dar El Bacha",
      description: "An opulent coffee salon situated inside the grand Dar El Bacha Palace. Features zellige mosaic tiles, tailored liveried waiters, and an unmatched catalog of over 200 single-origin Arabica coffees.",
      tip: "Closed on Mondays. Requires paid entry to Dar El Bacha museum. No reservations taken—arrive at 10:00 AM sharp to put your name on the buzzer list.",
      badge: "local-favorite",
      bestDishes: [
        "100% Arabica Specialty Coffee Pot",
        "Fresh Chantilly Croissant",
        "Pistachio Lemon Brioche"
      ],
      googleRating: 4.4,
      googleReviewCount: 4250,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1250,
      theforkRating: 4.4,
      theforkReviewCount: 100,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 4500,
      openTime: "10:00",
      closeTime: "18:00",
      googleMapsUrl: "https://maps.google.com/?q=Bacha+Coffee+Marrakech",
      reservationMethod: ["none"],
      reservationContact: "+212524381293",
      viewType: "garden",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 60,
      googlePlaceId: "ChIJs2-X_23urw0Rt3e2S1x8D4Q",
      nonCopyrightImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-11",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["Modern Fusion Dining", "Casual Dining", "Upscale Lounge"],
      foodStyles: ["Mediterranean", "French", "International"],
      cuisineTags: ["international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 19,
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
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "dinner",
        "dry",
        "fine",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cantine Mouton Noir",
      neighborhood: "Guéliz",
      description: "A stylish, Montreal-inspired contemporary bistro in Gueliz. Renowned for innovative fusion cooking pairing French culinary technique with bold Moroccan and Mediterranean ingredients.",
      tip: "A favorite for weekend brunch in Gueliz. Features an open kitchen and inventive seasonal specials.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Roasted Lamb Tacos with Harissa",
        "Prawn Ravioli",
        "Gourmet French Toast"
      ],
      googleRating: 4.7,
      googleReviewCount: 420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 160,
      theforkRating: 4.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 420,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cantine+Mouton+Noir+Marrakech",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212669149054",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15,
      googlePlaceId: "ChIJ592LSmzurw0R8t5W4aB7L2k",
      nonCopyrightImage: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-12",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Modern Fusion Dining", "Casual Dining"],
      foodStyles: ["Mediterranean", "Seafood", "Healthy"],
      cuisineTags: ["international", "seafood"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 25,
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
      tags: ["alcohol", "budget", "dinner", "fine", "wifi"],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Plus61",
      neighborhood: "Guéliz",
      description: "An acclaimed Australian-inspired bistro featured on the 50 Best MENA list. Features minimalist styling and serves fresh, produce-forward plates blending Mediterranean, Middle Eastern, and Moroccan flavors.",
      tip: "Closed on Sundays. Superb natural wine selection and craft cocktails; counter seats along the kitchen pass are ideal for solo diners.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Cooked Lamb Shoulder with Flatbread",
        "Ricotta Gnocchi with Sage Butter",
        "Chargrilled Octopus with Chermoula"
      ],
      googleRating: 4.7,
      googleReviewCount: 940,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 340,
      theforkRating: 4.6,
      theforkReviewCount: 120,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1050,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Plus61+Marrakech",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212524207020",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJgU_fN2zurw0R7J05XF3o8pM",
      nonCopyrightImage: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-13",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Fast Food", "Barbecue"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5,
      isHalal: true,
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "street-food",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Bejgueni",
      neighborhood: "Guéliz",
      description: "A bustling, legendary local fast-casual grill spot in Gueliz. Packed with locals day and night for sizzling charcoal-grilled kefta skewers, merguez, and fresh frites.",
      tip: "Authentic Gueliz street-grill experience. Order the mixed grill plate with fresh khobz and extra grilled tomatoes.",
      badge: "local",
      bestDishes: [
        "Charcoal Kefta Brochettes",
        "Merguez Sausage Sandwich",
        "Fresh Moroccan Fries with Harissa"
      ],
      googleRating: 4.3,
      googleReviewCount: 2250,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 1800,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2000,
      openTime: "11:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Chez+Bejgueni+Marrakech",
      reservationMethod: ["none"],
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJg_3qL2zurw0R4vO7R6v7D1U",
      nonCopyrightImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-14",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Traditional Dining",
        "Romantic Sunset",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan", "Gourmet"],
      cuisineTags: ["moroccan-traditional", "international"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 52,
      isHalal: true,
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "medina",
        "palace",
        "pastilla",
        "sunset",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Moha",
      neighborhood: "Medina",
      description: "An opulent dining room set around the mosaic pool of the former palace of Pierre Balmain and Pasha el Glaoui’s secretary. Helmed by Chef Moha Fedal, it is a pioneer in refined nouvelle cuisine marocaine.",
      tip: "Multi-course set menu (~530–650 MAD) accompanied by acoustic lute/Andalusian musicians. Request a poolside courtyard table.",
      badge: "splurge",
      bestDishes: [
        "14-Salad Tasting Assortment",
        "Seafood Pastilla with Bisque",
        "Slow-Braised Lamb Shank with Sweet Fruits"
      ],
      googleRating: 4.4,
      googleReviewCount: 2500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 2100,
      theforkRating: 4.3,
      theforkReviewCount: 350,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 2600,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Moha+Marrakech",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212524386400",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJu_v52Gfurw0RTerhpHuxAp0",
      nonCopyrightImage: "https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-15",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["Cafe", "Sunset Views", "Casual Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "couscous",
        "dinner",
        "dry",
        "medina",
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
      name: "Atay Cafe",
      neighborhood: "Medina",
      description: "A rustic multi-tiered rooftop cafe in Bab Doukkala. Decorated with colorful Berber rugs and wicker lamps, it offers panoramic 360-degree views of the old city and budget-friendly Moroccan tagines.",
      tip: "Climb all the way to the top deck for sunset photos facing the Koutoubia minaret. Cash only.",
      badge: "local-favorite",
      bestDishes: [
        "Lemon Chicken Tagine with Olives",
        "Vegetarian Couscous",
        "Mint Cucumber Lemonade"
      ],
      googleRating: 4.3,
      googleReviewCount: 2850,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1520,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 3000,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Atay+Cafe+Marrakech",
      reservationMethod: ["none"],
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJ7eXqP2furw0R6pG1vN3z0bQ",
      nonCopyrightImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-16",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "seniors"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: [
        "Cafe",
        "Tranquil Dining",
        "Garden restaurant with live music"
      ],
      foodStyles: ["Cafe", "Moroccan", "Bakery"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
      isHalal: true,
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["garden", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "live-music",
        "medina",
        "palace",
        "pastry",
        "quiet",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Jardin Secret - Café",
      neighborhood: "Medina",
      description: "A serene garden café situated within the restored 19th-century palace grounds of Le Jardin Secret. Enjoy fresh juices, iced teas, and light pastries beside exotic botanical flora.",
      tip: "Requires purchasing standard admission to Le Jardin Secret. Perfect midday reading and cooling-off spot.",
      badge: "local-favorite",
      bestDishes: [
        "Iced Mint Tea with Fresh Lemon",
        "Almond Briouates",
        "Fresh Citrus Fruit Juice"
      ],
      googleRating: 4.5,
      googleReviewCount: 1350,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 850,
      theforkRating: 4.5,
      theforkReviewCount: 100,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1500,
      openTime: "09:30",
      closeTime: "18:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+Secret+Cafe+Marrakech",
      reservationMethod: ["none"],
      viewType: "garden",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJzWv6yGfurw0RQ4U4Q02T3oI",
      nonCopyrightImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-17",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Bakery-Patisserie", "Local Gathering Spot"],
      foodStyles: ["Patisserie", "Moroccan", "French", "Bakery"],
      cuisineTags: ["cafe-pastry"],
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
      nearMedina: true,
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
        "medina",
        "pastry",
        "terrace"
      ],
      wiFi: false,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pâtisserie des Princes",
      neighborhood: "Jemaa el-Fna",
      description: "Marrakech’s legendary pastry parlor operating since 1989 on Passage Prince Moulay Rachid, steps from Jemaa el-Fna. Renowned for authentic handmade almond sweets, cornets de gazelle, and ice creams.",
      tip: "Head upstairs to the air-conditioned salon for mint tea and pastries away from the street crowds. Pastries can be boxed by the kilo to take home.",
      badge: "local-favorite",
      bestDishes: [
        "Cornes de Gazelle",
        "Mhancha (Almond Serpent Cake)",
        "House Pistachio Gelato"
      ],
      googleRating: 4.2,
      googleReviewCount: 2520,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 1100,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 2600,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Patisserie+des+Princes+Marrakech",
      reservationMethod: ["none"],
      reservationContact: "+212524443033",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJ22xOumuurw0RzQ0N9v6u8-0",
      nonCopyrightImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-18",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: [
        "Fine Dining",
        "Sunset Views",
        "Modern Fusion Dining",
        "Upscale Lounge"
      ],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 28,
      isHalal: true,
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "medina",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Kabana",
      neighborhood: "Medina",
      description: "A vibrant, botanical rooftop cocktail lounge and restaurant overlooking the Koutoubia minaret. Features an eclectic menu of Mediterranean tapas, sushi, and DJ sets after dark.",
      tip: "One of the highest licensed rooftop bars in the Medina. Book a table at the railing for direct Koutoubia sunset views.",
      badge: "local-favorite",
      bestDishes: [
        "Kabana Signature Sushi Rolls",
        "Salmon Tartare with Avocado",
        "Craft Passion Fruit Cocktails"
      ],
      googleRating: 4.4,
      googleReviewCount: 5650,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1050,
      theforkRating: 4.4,
      theforkReviewCount: 350,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 6000,
      openTime: "11:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Kabana+Rooftop+Marrakech",
      reservationMethod: ["online", "phone"],
      reservationContact: "+212664464450",
      viewType: "city",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 15,
      googlePlaceId: "ChIJK0tXvWjurw0R1s72aP5zM7c",
      nonCopyrightImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-19",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Italian Dining",
        "Romantic Sunset",
        "Fountain courtyard"
      ],
      foodStyles: ["Italian", "Moroccan", "Mediterranean", "Pizza"],
      cuisineTags: ["international", "moroccan-traditional"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "medina",
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
      name: "Limoni",
      neighborhood: "Medina",
      description: "A charming Italian-Moroccan trattoria set in a quiet residential alley in Bab Taghzout. Guests dine on fresh handmade pasta and wood-fired pizza surrounded by lemon trees and zellige fountains.",
      tip: "Licensed to serve wine and beer. Located deeper in the northern medina, so drop a pin on your map beforehand.",
      badge: "local-favorite",
      bestDishes: [
        "Camel Burger with Rosemary Fries",
        "Homemade Tagliatelle with Lemon & Truffle",
        "Traditional Wood-Fired Pizza"
      ],
      googleRating: 4.6,
      googleReviewCount: 3950,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1500,
      theforkRating: 4.5,
      theforkReviewCount: 400,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 4200,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Limoni+Marrakech",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212524383030",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      googlePlaceId: "ChIJj7k_wWfurw0R8U6Q5c1s8s0",
      nonCopyrightImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-20",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: [
        "Local Gathering Spot",
        "Traditional Dining",
        "People Watching"
      ],
      foodStyles: ["Moroccan", "Fast Food"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
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
      seatingTypes: ["terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food",
        "terrace"
      ],
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Street Food Market (Jemaa el-Fna)",
      neighborhood: "Jemaa el-Fna",
      description: "The pulsating heart of Marrakech street food culture. A massive open-air nocturnal food market featuring numbered stalls serving snails, skewers, fried seafood, sheep heads, and spiced broths.",
      tip: "Bench seating directly on the open square. Always confirm prices before sitting down. Stall 14 is favored for fried fish and Stall 31 for grilled skewers.",
      badge: "local",
      bestDishes: [
        "Babbouche (Herbal Snail Broth)",
        "Grilled Merguez & Kefta Brochettes",
        "Fried Calamari & Whiting Plate"
      ],
      googleRating: 4.4,
      googleReviewCount: 5200,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 4500,
      theforkRating: 4.2,
      theforkReviewCount: 500,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 5500,
      openTime: "18:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Jemaa+el-Fna+Stalls+Marrakech",
      reservationMethod: ["none"],
      viewType: "city",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      googlePlaceId: "ChIJj7m9pWuurw0R1s4_1vQe0u8",
      nonCopyrightImage: "https://images.unsplash.com/photo-1509315811355-57bd3b7771b6?auto=format&fit=crop&w=800&q=80"
    }
  },

  {
    id: "m-eat-mcdonalds-gueliz",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Casual Dining", "Terrace Seating"],
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
      name: "McDonald's Gueliz",
      neighborhood: "Guéliz",
      district: "Centre Guéliz",
      description: "Iconic Guéliz branch on Avenue Mohammed V offering indoor air-conditioned seating, sidewalk café terrace, McCafé, and late-night burgers.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 7800,
      openTime: "07:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohammed V, Guéliz, Marrakech",
        lat: 31.6348,
        lng: -8.0125
      },
      googleMapsUrl: "https://maps.google.com/?cid=1209384756192837465",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "m-eat-kfc-gueliz",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Casual Dining"],
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
      name: "KFC Gueliz",
      neighborhood: "Guéliz",
      district: "Guéliz",
      description: "Centrally located on Avenue Mohammed V in Guéliz, serving original recipe fried chicken, hot wings, and family buckets.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 2900,
      openTime: "11:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohammed V, Guéliz, Marrakech",
        lat: 31.6335,
        lng: -8.0118
      },
      googleMapsUrl: "https://maps.google.com/?cid=8912304918273645123",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "m-eat-burger-king-carre-eden",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Mall Dining"],
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
      name: "Burger King Carré Eden",
      neighborhood: "Guéliz",
      district: "Carré Eden Shopping Center",
      description: "Modern food court Burger King inside the Carré Eden shopping mall in Guéliz, serving Whoppers, crispy fries, and milkshakes.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 2450,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Carré Eden, Boulevard Mohammed V, Guéliz, Marrakech",
        lat: 31.6362,
        lng: -8.0142
      },
      googleMapsUrl: "https://maps.google.com/?cid=1029384756192837465",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "m-eat-pizza-hut-menara-mall",
    city: "marrakech",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Mall Dining", "Terrace Views"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["budget", "terrace"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Menara Mall",
      neighborhood: "Hivernage",
      district: "Avenue Mohammed VI",
      description: "Family-friendly Pizza Hut on the top food court level of Menara Mall with views toward the Atlas Mountains and outdoor terrace seating.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1850,
      openTime: "11:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Menara Mall, Avenue Mohammed VI, Hivernage, Marrakech",
        lat: 31.6186,
        lng: -8.0162
      },
      googleMapsUrl: "https://maps.google.com/?cid=7819230491827364512",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  },

  {
    id: "m-eat-dominos-gueliz",
    city: "marrakech",

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
      name: "Domino's Pizza Gueliz",
      neighborhood: "Guéliz",
      district: "Guéliz",
      description: "Carry-out and express delivery branch serving freshly baked hand-tossed pizzas, stuffed cheesy bread, and lava cakes in central Marrakech.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1420,
      openTime: "11:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Allal El Fassi, Guéliz, Marrakech",
        lat: 31.6482,
        lng: -8.0094
      },
      googleMapsUrl: "https://maps.google.com/?cid=4918273645102938475",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  }
];
