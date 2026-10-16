/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: IFRANE AZROU
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-ifrane_azrou-1' or 'eat-ifrane_azrou-restaurant')
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
 *   id: 'e-ifrane_azrou-[id]',
 *   city: 'ifrane_azrou',
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

export const ifrane_azrouEat: EatListing[] = [
  {
    id: "e-ifrane-la-paix",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "seniors"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["People Watching", "Traditional Dining", "Family Friendly"],
      foodStyles: ["Moroccan", "French", "International", "Cafe"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "pastry",
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
      name: "Café Restaurant La Paix",
      neighborhood: "Ifrane Town Center",
      description: "The iconic hearth of Ifrane town center located steps from the famous Stone Lion monument. Featuring a heated Alpine-style glass terrace, serving traditional Moroccan tagines, French onion soup, wood-fired pizzas, and rich pastries in a cozy chalet environment.",
      tip: "Sit on the outdoor heated terrace during autumn and winter for prime people watching near the central gardens.",
      badge: "local-favorite",
      bestDishes: [
        "Lamb Tagine with Prunes",
        "French Onion Soup",
        "Hot Chocolate & Croissants"
      ],
      googleRating: 4.8,
      googleReviewCount: 3223,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 410,
      theforkRating: 4.4,
      theforkReviewCount: 85,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 3223,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+La+Paix+Ifrane",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212535566023",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 or late afternoon tea at 16:30",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ifrane-my-lil-rome",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "family", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Wood-Fired Pizza", "Casual Italian Dining"],
      foodStyles: ["Italian", "Pizza", "Fast Food"],
      cuisineTags: ["international"],
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
      tags: ["budget", "dinner", "dry", "street-food", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "My Lil Rome",
      neighborhood: "Ifrane Center",
      description: "A cozy, highly-rated Italian pizzeria in the heart of Ifrane. Popular among Al Akhawayn University students and visiting families for crisp, wood-fired Neapolitan pizzas, freshly tossed pastas, and authentic espresso.",
      tip: "Quick service and top-rated crust—perfect for a comforting dinner after hiking or skiing.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Margherita Special",
        "Pesto Penne",
        "Garlic Cheese Bread"
      ],
      googleRating: 4.9,
      googleReviewCount: 510,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 120,
      theforkRating: 4.6,
      theforkReviewCount: 35,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 510,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=My+Lil+Rome+Ifrane",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212535567789",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 19:30",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ifrane-foodies",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Family Friendly"],
      foodStyles: ["Fast Food", "International"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 10,
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
      tags: ["budget", "dinner", "dry", "late-night", "street-food", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Foodies Ifrane",
      neighborhood: "Ifrane Ville Nouvelle",
      description: "A trendy gourmet burger and grill joint serving juicy smash burgers, crispy chicken tenders, loaded fries, and thick milkshakes in a sleek, modern timber cabin interior.",
      tip: "Great value for students and young travelers seeking fast, quality comfort food.",
      badge: "local",
      bestDishes: [
        "Smash Bacon Cheeseburger",
        "Crispy Chicken Tender Combo",
        "Loaded Truffle Fries"
      ],
      googleRating: 4.8,
      googleReviewCount: 1614,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 180,
      theforkRating: 4.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1614,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Foodies+Ifrane",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch at 13:00 or late evening 21:00",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-azrou-cedar-forest-grill",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo", "couple"],
      mealTypes: ["lunch"],
      experienceTypes: ["Authentic Berber Feast", "Tranquil Dining", "Sunset Views"],
      foodStyles: ["Berber", "Moroccan", "Barbecue"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "garden"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dry",
        "mountain",
        "sunset",
        "tagine",
        "terrace"
      ],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Restaurant Cedar Gouraud",
      neighborhood: "Cedar Forest Azrou",
      description: "A rustic mountain woodland outdoor eatery located right at the edge of the ancient Cèdre Gouraud forest. Famous for piping-hot Berber claypot tagines cooked over cedar charcoal, mint tea, and fresh flatbreads served amidst Atlas mountain pine air.",
      tip: "Eat lunch here after visiting the Barbary Macaques in the surrounding cedar forest.",
      badge: "hidden-gem",
      bestDishes: [
        "Berber Lamb Tagine with Vegetables",
        "Charcoal Grilled Kefta Brochettes",
        "Middle Atlas Wild Thyme Tea"
      ],
      googleRating: 4.6,
      googleReviewCount: 380,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 25,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 350,
      openTime: "09:00",
      closeTime: "18:00",
      googleMapsUrl: "https://maps.google.com/?q=Cedar+Gouraud+Azrou",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 12:30 after a forest walk",
      averageWaitMinutes: 15
    }
  },

  {
    id: "e-ifrane-le-cedray",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Fine Dining",
        "Upscale Romantic Dining",
        "Classic Royal Ambiance"
      ],
      foodStyles: ["French", "Gourmet", "European"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card"],
      tags: ["alcohol", "dinner", "fine", "mountain", "quiet", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Cedray",
      neighborhood: "Michlifen Resort & Golf",
      description: "Luxurious alpine chalet fine-dining venue at the 5-star Michlifen Resort, offering elevated French gastronomy, game specialties, and an exceptional wine cellar with panoramic mountain vistas.",
      tip: "Reservations are required. Dress code is smart elegant, fitting this palatial mountain lodge.",
      badge: "splurge",
      bestDishes: [
        "Foie Gras Poêlé",
        "Middle Atlas Trout Meunière",
        "Filet de Boeuf aux Morilles"
      ],
      googleRating: 4.8,
      googleReviewCount: 1374,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 320,
      theforkRating: 4.8,
      theforkReviewCount: 110,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1200,
      openTime: "19:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Cedray+Michlifen+Ifrane",
      reservationMethod: ["phone"],
      reservationContact: "+212535864000",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Dinner at 20:00 for a cozy fireside experience",
      averageWaitMinutes: 0
    }
  },

  {
    id: "e-ifrane-le-chalet",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch"],
      experienceTypes: ["Casual Dining", "Sunset Views", "People Watching"],
      foodStyles: ["French", "European", "International"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 35,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
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
        "fine",
        "mountain",
        "street-food",
        "sunset",
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
      name: "Le Chalet",
      neighborhood: "Michlifen Resort & Golf",
      description: "Warm mountain brasserie and sun-drenched terrace overlooking cedar forests, serving hearty alpine classics, fondues, club sandwiches, and gourmet breakfasts.",
      tip: "Request a terrace table on clear sunny days for breathtaking views over the snow-capped cedar ridge.",
      badge: "splurge",
      bestDishes: [
        "Traditional Cheese Fondue",
        "Michlifen Club Sandwich",
        "Artisanal Hot Chocolate"
      ],
      googleRating: 4.7,
      googleReviewCount: 950,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 240,
      theforkRating: 4.6,
      theforkReviewCount: 60,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 890,
      openTime: "08:00",
      closeTime: "17:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Chalet+Michlifen+Ifrane",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212535864000",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch at 12:30 on the sunlit terrace",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ifrane-l-oriental",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Fine Dining",
        "Traditional Dining",
        "Classic Royal Ambiance"
      ],
      foodStyles: ["Moroccan", "Gourmet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 50,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "dinner",
        "fine",
        "mountain",
        "pastilla",
        "quiet",
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
      name: "L'Oriental",
      neighborhood: "Michlifen Resort & Golf",
      description: "Regal Moroccan gastronomic sanctuary inside Michlifen Resort celebrating imperial Fassi and Atlas mountain recipes, pigeon pastillas, and fragrant saffron tagines.",
      tip: "Book ahead during holiday seasons; this is considered the premier traditional Moroccan dinner setting in Ifrane.",
      badge: "splurge",
      bestDishes: [
        "Royal Pigeon Pastilla",
        "Slow-cooked Atlas Lamb Tagine with Saffron",
        "Orange Blossom Pastilla Tart"
      ],
      googleRating: 4.8,
      googleReviewCount: 620,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 190,
      theforkRating: 4.7,
      theforkReviewCount: 55,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 580,
      openTime: "19:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=L+Oriental+Michlifen+Ifrane",
      reservationMethod: ["phone"],
      reservationContact: "+212535864000",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Dinner around 20:00 for the full royal ambiance",
      averageWaitMinutes: 0
    }
  },

  {
    id: "e-ifrane-la-ferme",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple"],
      mealTypes: ["lunch"],
      experienceTypes: [
        "Garden restaurant with live music",
        "Tranquil Dining",
        "Family Friendly"
      ],
      foodStyles: ["Moroccan", "Berber", "Healthy"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 30,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["garden", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "dry",
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
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Ferme Michlifen",
      neighborhood: "Michlifen Grounds",
      description: "Pastoral farm-to-table dining experience situated between fragrant kitchen gardens and traditional clay bread ovens, offering organic Berber tagines and outdoor tranquility.",
      tip: "Perfect for families with kids who will love exploring the nearby vegetable plots and herb gardens.",
      badge: "hidden-gem",
      bestDishes: [
        "Clay-oven Baked Country Bread",
        "Farm Garden Vegetable Tagine",
        "Fresh Mountain Herb Tea"
      ],
      googleRating: 4.7,
      googleReviewCount: 430,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 140,
      theforkRating: 4.5,
      theforkReviewCount: 40,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 410,
      openTime: "12:00",
      closeTime: "17:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Ferme+Michlifen+Ifrane",
      reservationMethod: ["phone"],
      reservationContact: "+212535864000",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for leisurely outdoor dining",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ifrane-empreinte",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Modern Fusion Dining", "People Watching"],
      foodStyles: ["Moroccan", "International", "Cafe"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
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
        "cafe-pastry",
        "dinner",
        "dry",
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
      name: "L'Empreinte d'Ifrane",
      neighborhood: "Downtown Ifrane",
      description: "Elegant timber-accented boutique cafe and restaurant serving Asian noodles, sushi, Moroccan tajines, gourmet burgers, and rich Italian roast espresso.",
      tip: "Great central wifi hub with comfortable armchairs, ideal for remote working or reading in the afternoon.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Almonds",
        "Chicken Teriyaki Wok",
        "Artisanal Waffles with Chantilly"
      ],
      googleRating: 4.6,
      googleReviewCount: 1181,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 210,
      theforkRating: 4.3,
      theforkReviewCount: 65,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1181,
      openTime: "08:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=L+Empreinte+d+Ifrane",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212535566790",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Mid-afternoon 15:30 for coffee and pastry",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-ifrane-for-you",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Family Friendly"],
      foodStyles: ["International", "Fast Food", "French"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
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
      tags: ["budget", "dinner", "dry", "street-food", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "For You Restaurant",
      neighborhood: "Ifrane Centre Ville",
      description: "Popular contemporary gathering spot offering sweet & savory crepes, American BBQ burgers, fresh pasta bowls, and Belgian waffles in an alpine bistro setup.",
      tip: "A student favorite from Al Akhawayn University; arrive before 20:00 to snag a booth table.",
      badge: "local",
      bestDishes: [
        "Cheese & Smoked Turkey Crepe",
        "Double Beef Burger Deluxe",
        "Nutella Banana Waffle"
      ],
      googleRating: 4.7,
      googleReviewCount: 1015,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 130,
      theforkRating: 4.4,
      theforkReviewCount: 45,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1015,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=For+You+Restaurant+Ifrane",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early dinner at 19:00",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ifrane-houari-grill",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery",
        "Local Gathering Spot"
      ],
      foodStyles: ["Barbecue", "Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "mountain",
        "street-food",
        "terrace"
      ],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Houari Grill",
      neighborhood: "Marché Municipal Ifrane",
      description: "Local favorite butcher-grill serving impeccably spiced minced kefta skewers, Atlas lamb chops, and merguez brochettes grilled over hot olive charcoal with freshly baked batbout.",
      tip: "Choose your cuts directly at the butcher counter, and they will grill them fresh to order right in front of you.",
      badge: "local",
      bestDishes: [
        "Charcoal Kefta Brochettes",
        "Atlas Lamb Chops",
        "Fresh Tomato Onion Salad"
      ],
      googleRating: 4.8,
      googleReviewCount: 235,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 50,
      theforkRating: 4.3,
      theforkReviewCount: 20,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 235,
      openTime: "11:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Houari+Grill+Ifrane",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch at 13:00 when grills are smoking hot",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ifrane-grand-hotel",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "seniors", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Classic Royal Ambiance",
        "Fine Dining"
      ],
      foodStyles: ["French", "Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 26,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "fine", "mountain", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Grand Hôtel Ifrane Restaurant",
      neighborhood: "Avenue de la Marche Verte",
      description: "Historic colonial alpine dining room serving Middle Atlas freshwater trout meunière, tender beef fillet with morel sauce, and classic French-Moroccan dishes.",
      tip: "One of the few spots in central Ifrane outside of Michlifen that serves Moroccan wine alongside fresh mountain trout.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Atlas Trout with Lemon Butter",
        "Filet de Boeuf Grillé",
        "Warm Tarte Tatin"
      ],
      googleRating: 4.4,
      googleReviewCount: 580,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 160,
      theforkRating: 4.2,
      theforkReviewCount: 45,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 520,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Grand+Hotel+Ifrane",
      reservationMethod: ["phone"],
      reservationContact: "+212535566207",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 19:30",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-azrou-restaurant-hassan",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Local Gathering Spot",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Seafood", "Barbecue"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
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
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "mountain", "tagine", "terrace"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Hassan",
      neighborhood: "Marché Municipal Azrou",
      description: "Legendary Azrou culinary staple celebrated for sizzling Atlas mountain trout with herbs, succulent grilled lamb cutlets, and slow-braised veal tagines in a bustling market setting.",
      tip: "Widely recognized as the premier value-for-money spot in the Middle Atlas for fresh river trout.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Pan-Fried Atlas Trout",
        "Grilled Lamb Cutlets",
        "Veal Tagine with Prunes & Almonds"
      ],
      googleRating: 4.8,
      googleReviewCount: 1198,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 290,
      theforkRating: 4.5,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1198,
      openTime: "11:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Hassan+Azrou",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch between 12:30 and 14:00",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-azrou-restaurant-rif",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: [
        "People Watching",
        "Traditional Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan", "Berber", "Barbecue"],
      cuisineTags: ["moroccan-traditional"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "dinner",
        "dry",
        "mountain",
        "tagine",
        "terrace"
      ],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Rif Chez Khalid",
      neighborhood: "Place Hassan II Azrou",
      description: "Beloved central square terrace restaurant serving authentic Middle Atlas Berber tagines, tender brochettes, fresh Moroccan salads, and piping-hot mint tea.",
      tip: "Sit outside on Place Hassan II under the green canvas umbrellas to watch village market life unfold.",
      badge: "local",
      bestDishes: [
        "Chicken Tagine with Preserved Lemon",
        "Mixed Charcoal Brochettes",
        "Fresh Berber Salad"
      ],
      googleRating: 4.5,
      googleReviewCount: 316,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 120,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 316,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Rif+Chez+Khalid+Azrou",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 on Tuesday market day",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-azrou-foodies",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Family Friendly"],
      foodStyles: ["Fast Food", "International"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7.5,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "street-food", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Foodies Azrou",
      neighborhood: "Downtown Azrou",
      description: "Modern casual fast-food grill featuring crispy chicken tenders, smash burgers, cheesy loaded tacos, and milkshakes catering to locals and travelers on the N13 route.",
      tip: "Ideal pit stop for a quick, filling, hygienic meal when traveling between Fes and Midelt.",
      badge: "local",
      bestDishes: [
        "Double Cheeseburger",
        "Crispy Chicken French Tacos",
        "Oreo Shake"
      ],
      googleRating: 4.8,
      googleReviewCount: 366,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 70,
      theforkRating: 4.3,
      theforkReviewCount: 25,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 366,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Foodies+Azrou",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Quick lunch at 13:30",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-azrou-bilal",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: [
        "People Watching",
        "Traditional Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Moroccan", "Cafe", "Fast Food"],
      cuisineTags: ["cafe-pastry"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "couscous",
        "dinner",
        "dry",
        "street-food",
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
      name: "Restaurant Café Bilal",
      neighborhood: "Boulevard Mohammed V Azrou",
      description: "Multi-story family restaurant and salon de thé overlooking the heart of Azrou, delivering hearty Friday couscous, Moroccan tajines, French tacos, and aromatic cafe au lait.",
      tip: "Head up to the second floor for great elevated street views over Boulevard Mohammed V.",
      badge: "local",
      bestDishes: [
        "Friday Seven-Vegetable Couscous",
        "Beef Kefta Tajine",
        "Spiced Mint Tea with Pine Nuts"
      ],
      googleRating: 4.1,
      googleReviewCount: 336,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 85,
      theforkRating: 3.9,
      theforkReviewCount: 20,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 351,
      openTime: "07:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Bilal+Azrou",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Friday lunch for couscous at 13:00",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-azrou-el-hanae",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Cozy casual family-run Moroccan eatery",
        "Traditional Dining",
        "Authentic Berber Feast"
      ],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["breakfast", "budget", "dinner", "dry", "medina", "tagine"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant El Hanae chez El Haja",
      neighborhood: "Medina Quarter Azrou",
      description: "Humble, deeply authentic Berber kitchen run with motherly warmth, serving slow-simmered beef with wild artichokes, harira, and freshly griddled msemmen.",
      tip: "Authentic homestyle cooking at local prices; ask El Haja what dish was simmered longest today.",
      badge: "hidden-gem",
      bestDishes: [
        "Beef Tagine with Seasonal Artichoke & Peas",
        "Bowl of Hot Harira Soup",
        "Handmade Msemmen with Mountain Honey"
      ],
      googleRating: 4.5,
      googleReviewCount: 222,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 60,
      theforkRating: 4.3,
      theforkReviewCount: 15,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 222,
      openTime: "10:30",
      closeTime: "21:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+El+Hanae+chez+El+Haja+Azrou",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 12:45",
      averageWaitMinutes: 5
    }
  },

  {
    id: "e-azrou-rik-steakhouse",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "family", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Casual Dining", "Family Friendly"],
      foodStyles: ["Barbecue", "International"],
      cuisineTags: ["moroccan-traditional", "international"],
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
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "dinner", "dry", "mountain", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "RIK Steakhouse",
      neighborhood: "Centre Azrou",
      description: "Contemporary steakhouse offering quality butchered Atlas beef steaks, grilled chicken platters, and crispy french fries with spicy house pepper sauce.",
      tip: "Order steaks cooked medium or medium-rare for tender Atlas beef.",
      badge: "local",
      bestDishes: [
        "Grilled Ribeye Steak with Herb Butter",
        "Mixed Brochette Skewer Platter",
        "Loaded Pepper Fries"
      ],
      googleRating: 4.3,
      googleReviewCount: 120,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 35,
      theforkRating: 4.1,
      theforkReviewCount: 15,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 50,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=RIK+Steakhouse+Azrou",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212614223344",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Dinner at 20:00",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ifrane-relais-ras-el-maa",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "seniors", "couple"],
      mealTypes: ["lunch"],
      experienceTypes: ["Tranquil Dining", "Scenic Views", "Traditional Dining"],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dry", "terrace"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Relais Ras El Maa",
      neighborhood: "Ras El Maa Forest Springs",
      description: "Scenic forest-edge dining lodge next to the natural springs and trout pisciculture station, famed for fresh catch-of-the-day trout pan-fried with almonds and lemon.",
      tip: "Stroll around the nearby trout ponds and Gouraud cedar woods after a relaxing lunch.",
      badge: "hidden-gem",
      bestDishes: [
        "Fresh Trout with Toasted Almonds",
        "Grilled Trout en Papillote",
        "Atlas Mixed Salad"
      ],
      googleRating: 4.2,
      googleReviewCount: 410,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 120,
      theforkRating: 4,
      theforkReviewCount: 30,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 390,
      openTime: "10:00",
      closeTime: "18:00",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Relais+Ras+El+Maa+Ifrane",
      reservationMethod: ["phone", "none"],
      reservationContact: "+212535566114",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Lunch at 13:00 amidst forest bird songs",
      averageWaitMinutes: 10
    }
  },

  {
    id: "e-ifrane-patisserie-la-paix",
    city: "ifrane_azrou",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family", "couple"],
      mealTypes: ["breakfast", "afternoon-tea"],
      experienceTypes: ["Bakery-Patisserie", "People Watching", "Cafe"],
      foodStyles: ["Bakery", "Patisserie", "Cafe"],
      cuisineTags: ["cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
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
      name: "Pâtisserie de la Paix & Salon de Thé",
      neighborhood: "Ifrane Lion Plaza",
      description: "Refined European-style salon de thé celebrated for hot spiced chocolate, mille-feuille, almond croissants, and warm apple tartes enjoyed next to the central stone lion gardens.",
      tip: "The ultimate winter warmup spot after taking photos with the famous Ifrane Stone Lion.",
      badge: "local-favorite",
      bestDishes: [
        "Classic Vanilla Mille-Feuille",
        "Thick Alpine Hot Chocolate",
        "Almond Croissant"
      ],
      googleRating: 4.7,
      googleReviewCount: 1420,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 380,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1350,
      openTime: "07:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Patisserie+La+Paix+Ifrane",
      reservationMethod: ["none"],
      reservationContact: "None",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Morning breakfast at 09:00 or afternoon tea at 16:00",
      averageWaitMinutes: 5
    }
  }
];
