/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: CHEFCHAOUEN
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-chefchaouen-1' or 'eat-chefchaouen-restaurant')
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
 *   id: 'e-chefchaouen-[id]',
 *   city: 'chefchaouen',
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

export const chefchaouenEat: EatListing[] = [
  {
    id: "e-chefchaouen-1",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual", "rooftop"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer", "culture"],
      vibeTags: ["authentic", "homestyle", "mountain-views"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: ["monday"],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "lunch", "tagine", "rooftop", "medina", "halal"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Beldi Bab Ssour",
      neighborhood: "Medina",
      description: "Authentic multi-story mountain eatery famed for tender goat tagines, rich fava bean bissara, and genuine Rif home cooking.",
      tip: "Arrive slightly before standard dining hours; their famous goat tagine sells out quickly.",
      badge: "local",
      bestDishes: ["Goat Tagine", "Bissara Soup", "Kefta in Tomato Sauce"],
      pros: ["Exceptional authentic mountain flavors", "Unbeatable budget pricing", "Cozy multi-floor medina atmosphere"],
      cons: ["Signature goat tagine sells out quickly", "Steep stairs between floors"],
      googleRating: 4.5,
      googleReviewCount: 1951,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 1529,
      theforkRating: 4.4,
      theforkReviewCount: 300,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1681,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Bab+Ssour+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212660261128",
      bookingUrl: "",
      whatsappNumber: "+212660261128",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-2",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "culture", "first-timer"],
      vibeTags: ["women-owned", "homestyle", "cozy"],
      crowdLevel: "balanced"
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
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["monday"],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "lunch", "tagine", "terrace", "vegetarian"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Sofia",
      neighborhood: "Medina",
      description: "Cozy, women-run gem tucked off the main square, serving comforting homemade tagines, fresh vegetables, and warm hospitality.",
      tip: "Ask Sofia about her daily vegetable sides and her homemade refreshing iced lemon-mint drink.",
      badge: "local-favorite",
      bestDishes: ["Vegetable Tagine", "Chicken Couscous", "Harira Soup"],
      pros: ["Wholesome home cooking cooked by local women", "Warm personal service", "Excellent vegetarian and vegan choices"],
      cons: ["Very limited outdoor seating", "Closed on Mondays"],
      googleRating: 4.5,
      googleReviewCount: 1200,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 1042,
      theforkRating: 4.5,
      theforkReviewCount: 250,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 2141,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Sofia+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212671286649",
      bookingUrl: "",
      whatsappNumber: "+212671286649",
      website: "not-available",
      instagram: "https://instagram.com/restaurantsofia_chaouen"
    }
  },

  {
    id: "e-chefchaouen-3",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "rooftop", "casual"],
      foodStyles: ["Moroccan", "International", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "nomad", "culture"],
      vibeTags: ["cultural-hub", "panoramic-views", "artistic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["breakfast", "brunch", "rooftop", "cafe", "wifi", "views"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Clock Chefchaouen",
      neighborhood: "Medina",
      description: "Vibrant cultural hub across four blue-washed riad floors, famous for camel burgers, date shakes, storytelling sessions, and 360-degree mountain views.",
      tip: "Check their weekly schedule for live Riffian musical sessions and traditional storytelling nights.",
      badge: "local-favorite",
      bestDishes: ["Spiced Camel Burger", "Avocado Date Milkshake", "Shakshuka"],
      pros: ["Stunning 360-degree mountain terrace view", "Active cultural activities and live concerts", "Broad vegetarian/vegan options"],
      cons: ["Can get crowded around sunset", "Prices slightly higher than standard local diners"],
      googleRating: 4.5,
      googleReviewCount: 2176,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 481,
      theforkRating: 4.5,
      theforkReviewCount: 220,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 2176,
      openTime: "09:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Clock+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539988788",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://cafeclock.com",
      instagram: "https://instagram.com/cafeclock"
    }
  },

  {
    id: "e-chefchaouen-4",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["intimate", "slow-food", "heritage"],
      crowdLevel: "quiet"
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
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["pastilla", "couscous", "tagine", "traditional", "quiet", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Lala Mesouda",
      neighborhood: "Medina",
      description: "Domestic-style sanctuary in the upper medina celebrating slow-braised mountain meats, wild Rif herbs, and generational Fassi recipes.",
      tip: "Their kitchen prepares rare regional wild herb starters; ask for the chef's seasonal recommendations.",
      badge: "hidden-gem",
      bestDishes: ["Lamb Tagine with Prunes", "Chicken Pastilla", "Tfaya Couscous"],
      pros: ["Peaceful ambiance away from busy squares", "Generous portions of slow-simmered dishes", "Generational Moroccan recipes"],
      cons: ["No rooftop or outdoor terrace", "Dishes are made to order and can take a little time"],
      googleRating: 4.2,
      googleReviewCount: 563,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 495,
      theforkRating: 4.3,
      theforkReviewCount: 120,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 563,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Lala+Mesouda+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212660261128",
      bookingUrl: "",
      whatsappNumber: "+212660261128",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-5",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "friends"],
      mealTypes: ["lunch", "dinner", "drinks", "flexible"],
      experienceTypes: ["fine-dining", "rooftop"],
      foodStyles: ["Mediterranean", "Moroccan", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["romantic", "sunset-views", "cocktails-wine"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: false,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["alcohol", "wine", "rooftop", "sunset", "paella", "seafood", "fine-dining"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Triana Café & Restaurant",
      neighborhood: "Medina",
      description: "Upscale rooftop restaurant blending Spanish-Andalusian culinary heritage with local mountain ingredients, cocktails, Moroccan wine, and sweeping sunset panoramas.",
      tip: "Book a table on the upper rooftop deck at sunset for one of the most stunning mountain vistas paired with chilled Moroccan wine.",
      badge: "splurge",
      bestDishes: ["Hot Goat Cheese with Honey & Walnuts", "Seafood Paella", "Grilled Sea Bass"],
      pros: ["One of the rare licensed spots in the medina serving wine and cocktails", "Exceptional panoramic sunset views", "Refined Mediterranean-Andalusian menu"],
      cons: ["Higher price tag than most medina establishments", "Can get chilly on the terrace in cooler evenings"],
      googleRating: 3.8,
      googleReviewCount: 1605,
      tripadvisorRating: 3.6,
      tripadvisorReviewCount: 264,
      theforkRating: 3.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1837,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Triana+Chefchaouen",
      reservationMethod: ["phone", "website", "walk-in"],
      reservationContact: "+212665700504",
      bookingUrl: "https://triana.ma",
      whatsappNumber: "+212665700504",
      website: "https://triana.ma",
      instagram: "https://instagram.com/trianarestaurant"
    }
  },

  {
    id: "e-chefchaouen-6",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "rooftop"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Mediterranean"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["scenic", "kasbah-views", "fireplace"],
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pastilla", "tagine", "rooftop", "kasbah", "fireplace", "medina"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Aladdin",
      neighborhood: "Medina",
      description: "Charming multi-level landmark on the main square with an Arabian Nights feel, spectacular Kasbah views, and sweet pastillas.",
      tip: "Sit by the roaring fireplace on the middle floors during chilly mountain winter evenings.",
      badge: "local",
      bestDishes: ["Chicken Pastilla", "Lamb Tagine with Almonds", "Eggplant Zaalouk"],
      pros: ["Direct views of the Kasbah minaret and square", "Cozy fireplaces for cold mountain days", "Quick and dependable service"],
      cons: ["Can feel touristy due to central square location", "Terrace fills quickly at sunset"],
      googleRating: 3.9,
      googleReviewCount: 916,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 1540,
      theforkRating: 4.0,
      theforkReviewCount: 300,
      restaurantguruRating: 4.0,
      restaurantguruReviewCount: 916,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Aladdin+Restaurant+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539989071",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-7",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["historic", "fireplace", "traditional-decor"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 9.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["couscous", "tagine", "medina", "fireplace", "historic"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Casa Hassan",
      neighborhood: "Medina",
      description: "Cozy, textile-decorated institution with a roaring open fireplace, highly regarded for its fresh Friday-only traditional beef couscous.",
      tip: "They only serve their legendary, slow-steamed traditional couscous on Fridays—plan your visit accordingly.",
      badge: "local",
      bestDishes: ["Friday Beef Couscous", "Preserved Lemon Chicken Tagine", "Goat Cheese Salad"],
      pros: ["Longstanding medina institution with warm hospitality", "Atmospheric interior around open hearths", "Excellent Friday couscous"],
      cons: ["Can get warm inside during summer afternoons", "Limited seating during peak Friday lunch hours"],
      googleRating: 4.3,
      googleReviewCount: 850,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 1180,
      theforkRating: 4.3,
      theforkReviewCount: 320,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 850,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Casa+Hassan+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539986153",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-8",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly", "nature-lover"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Berber", "Mediterranean", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["luxury", "adventure", "culture"],
      vibeTags: ["farm-to-table", "nature", "rural-retreat"],
      crowdLevel: "balanced"
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
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["farm-to-table", "wine", "alcohol", "trout", "mountain", "organic"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Auberge Dardara",
      neighborhood: "Derdara",
      description: "Rustic farm-to-table mountain retreat 10 km outside the medina, celebrating wild Rif herbs, fresh river trout, artisanal goat cheeses, and Moroccan wine.",
      tip: "This licensed spot outside town is the premier choice for pairing wild-caught trout with cold Moroccan wine in a tranquil garden.",
      badge: "splurge",
      bestDishes: ["Pan-Fried Mountain Trout", "Wild Herb Goat Tagine", "Fresh Mountain Salads"],
      pros: ["Authentic farm-to-table dining with home-grown ingredients", "Fully licensed wine list", "Peaceful countryside mountain garden setting"],
      cons: ["Located 10 km outside Chefchaouen medina (requires taxi/car)", "Booking recommended on weekends"],
      googleRating: 4.2,
      googleReviewCount: 240,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 193,
      theforkRating: 4.2,
      theforkReviewCount: 60,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 240,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Auberge+Dardara+Chefchaouen",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212539981155",
      bookingUrl: "",
      whatsappNumber: "+212661384074",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-9",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International", "Vegetarian/Vegan"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["pizza", "cozy", "comfort-food"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["monday"],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pizza", "pasta", "italian", "delivery", "terrace", "vegetarian"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizzeria Mandala",
      neighborhood: "Medina Edge",
      description: "Charming, welcoming Italian favorite steps from the medina, offering wood-fired pizzas, delicious pasta, and great vegan options.",
      tip: "You can order online through their website for fast pickup or riad delivery across Chefchaouen.",
      badge: "local",
      bestDishes: ["Four-Cheese Pizza", "Wood-Fired Margherita", "Truffle Pasta"],
      pros: ["Dough made fresh daily and baked to order", "Online ordering available for riad delivery", "Great change of pace from tagines"],
      cons: ["Small dining room with limited tables", "Closed on Mondays"],
      googleRating: 4.4,
      googleReviewCount: 1450,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 784,
      theforkRating: 4.2,
      theforkReviewCount: 180,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1450,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Pizzeria+Mandala+Chefchaouen",
      reservationMethod: ["phone", "website", "walk-in"],
      reservationContact: "+212539882808",
      bookingUrl: "https://mandalapizzeria.com",
      whatsappNumber: "",
      website: "https://mandalapizzeria.com",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-10",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "solo", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "rooftop"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["plant-filled", "rooftop-views", "healthy"],
      crowdLevel: "quiet"
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["vegetarian", "couscous", "salads", "rooftop", "medina", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Com",
      neighborhood: "Medina",
      description: "Beautiful, plant-filled riad providing healthy Moroccan salads, hearty vegetarian couscous, and peaceful, romantic multi-level terrace seating.",
      tip: "This place is a dream for vegetarians; order their comprehensive multi-plate Moroccan salad tasting sampler.",
      badge: "local",
      bestDishes: ["Seven-Vegetable Couscous", "Moroccan Salad Tasting Platter", "Sliced Oranges with Cinnamon"],
      pros: ["Abundant vegetarian and plant-forward dishes", "Peaceful tiered terrace away from square crowds", "Beautiful lush greenery"],
      cons: ["Food is made fresh to order and can take time", "Strictly non-alcoholic"],
      googleRating: 4.4,
      googleReviewCount: 133,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 85,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 133,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Com+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212661705570",
      bookingUrl: "",
      whatsappNumber: "+212661705570",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-11",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "solo", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Mediterranean", "Middle Eastern", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad", "culture"],
      vibeTags: ["botanical-garden", "romantic", "peaceful"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["garden", "mezze", "falafel", "romantic", "peaceful", "breakfast"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Cielo",
      neighborhood: "Medina Edge",
      description: "Charming garden oasis at Molino Garden Hotel offering organic Arabic-Mediterranean fusion dishes, lush mountain views, and romantic atmosphere.",
      tip: "Perfect for a serene, romantic dinner surrounded by lush gardens, koi ponds, and towering bamboo.",
      badge: "splurge",
      bestDishes: ["Falafel Mezze Platter", "Moroccan-Style Lamb", "Chicken Tandoori Pita"],
      pros: ["Serene garden setting with running water and bamboo", "High-quality Middle Eastern mezze spread", "Romantic quiet atmosphere"],
      cons: ["Higher prices than standard medina eateries", "Reservations strongly recommended for dinner"],
      googleRating: 4.7,
      googleReviewCount: 1200,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 160,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1200,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Molino+Garden+El+Cielo+Chefchaouen",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212539989245",
      bookingUrl: "https://molinogarden.com",
      whatsappNumber: "+212666573565",
      website: "https://molinogarden.com",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-12",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Moroccan", "International", "Grill & BBQ", "Italian"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["people-watching", "central-square", "lively"],
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
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "steak", "pizza", "tagine", "people-watching", "square"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Twins Restaurant",
      neighborhood: "Medina",
      description: "Lively square-side hotspot featuring sizzling steaks, hearty pizzas, and traditional tagines with prime, front-row outdoor people-watching seats.",
      tip: "Their outdoor patio tables face Outa el-Hammam square directly, making it the perfect spot for evening people-watching.",
      badge: "local",
      bestDishes: ["Sizzling Beef Steak", "Vegetarian Pizza", "White Bean Soup"],
      pros: ["Front-row views of central square life", "Open late with extensive varied menu", "Generous portions"],
      cons: ["Can get loud during peak evening hours", "Plaza touts often wander nearby"],
      googleRating: 4.3,
      googleReviewCount: 1526,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 137,
      theforkRating: 4.3,
      theforkReviewCount: 80,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1526,
      openTime: "11:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Twins+Restaurant+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212654730577",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-13",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "solo", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["family-run", "friendly", "authentic"],
      crowdLevel: "balanced"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "couscous", "tagine", "family-run", "medina"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Jbaria",
      neighborhood: "Medina",
      description: "Charming family-run diner right down the street from Bab Ssour, praised for highly affordable, generously portioned Moroccan stews.",
      tip: "If you love extra broth with your Friday couscous, ask the staff politely and they will gladly bring extra.",
      badge: "local",
      bestDishes: ["Chicken Tagine with Olives", "Beef Couscous", "Tomato Kefta"],
      pros: ["Exceptional value for money", "Warm, caring family service", "Hearty homestyle portions"],
      cons: ["Simple indoor dining room with no views", "Cash only"],
      googleRating: 4.7,
      googleReviewCount: 436,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 65,
      theforkRating: 4.7,
      theforkReviewCount: 45,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 436,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Jbaria+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212664316007",
      bookingUrl: "",
      whatsappNumber: "+212664316007",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-14",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["plaza-terrace", "breakfast-spot", "people-watching"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "street-side"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["breakfast", "mint-tea", "ftour", "plaza", "terrace"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Morisco",
      neighborhood: "Medina",
      description: "Lively plaza terrace restaurant famous for its traditional Ftour Beldi breakfast of fresh mountain goat cheese and olives.",
      tip: "Enjoying their traditional mountain breakfast while watching the medina wake up is highly recommended.",
      badge: "local",
      bestDishes: ["Ftour Beldi Breakfast", "Lamb Tagine", "Fresh Mint Tea"],
      pros: ["Front-row morning view of Place Outa el Hammam", "Delicious mountain goat cheese breakfast platter", "Fast service"],
      cons: ["Can get crowded with tour groups at midday", "Terrace tables fill up quickly"],
      googleRating: 4.1,
      googleReviewCount: 1365,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 462,
      theforkRating: 4.0,
      theforkReviewCount: 180,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1365,
      openTime: "08:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Morisco+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212539987114",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-15",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["street-food", "casual"],
      foodStyles: ["Moroccan", "Grill & BBQ", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget"],
      vibeTags: ["local-favorite", "quick-bite", "comfort-food"],
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "chicken", "beans", "fast", "local", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Assaada",
      neighborhood: "Medina Edge",
      description: "Generous, ultra-budget local diner serving quick, piping-hot roasted chicken, comforting lentil soups, and robust, slow-cooked meat tagines.",
      tip: "This is a great spot to try traditional bean soups (loubia) with freshly baked local flatbread.",
      badge: "local",
      bestDishes: ["Roasted Chicken with Fries", "Lamb Kefta", "White Beans (Loubia)"],
      pros: ["Rock-bottom local prices", "Hot and fresh food with fast turnover", "Hearty staple stews"],
      cons: ["Utilitarian dining area with no view", "Cash only"],
      googleRating: 4.5,
      googleReviewCount: 1764,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 209,
      theforkRating: 4.2,
      theforkReviewCount: 95,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1764,
      openTime: "09:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Assaada+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212619569778",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-16",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["cafes-tea", "rooftop"],
      foodStyles: ["Moroccan", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "nomad", "first-timer"],
      vibeTags: ["panoramic-views", "laid-back", "sunset-spot"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["tea", "sunset", "rooftop", "views", "budget", "cafe"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Sindibad",
      neighborhood: "Medina",
      description: "Spacious, relaxed cafe tucked behind the historic Kasbah, offering cheap Moroccan mint tea and unbeatable panoramic medina views.",
      tip: "Sit on the upper panoramic deck for some of the best sunset photo angles over the blue rooftops.",
      badge: "local",
      bestDishes: ["Moroccan Mint Tea", "Harira Soup", "Simple Kefta Panini"],
      pros: ["Magnificent high panoramic photo views of the medina", "Extremely budget-friendly mint tea", "Relaxed atmosphere"],
      cons: ["Food menu is limited to basic quick bites", "Multiple steep flights of stairs"],
      googleRating: 4.1,
      googleReviewCount: 887,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 415,
      theforkRating: 4.0,
      theforkReviewCount: 150,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 887,
      openTime: "08:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Sindibad+Chefchaouen",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-17",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "brunch"],
      experienceTypes: ["cafes-tea", "hidden-gem"],
      foodStyles: ["Moroccan", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "culture"],
      vibeTags: ["traditional-breakfast", "tiny-spot", "amlou"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["breakfast", "msemen", "amlou", "budget", "hidden-gem"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Lecheria Venezia",
      neighborhood: "Medina",
      description: "Tiny, four-chair medina gem known for authentic traditional Moroccan breakfast platters, amlou, and fresh warm msemen.",
      tip: "Operational hours can be seasonal or erratic; verify in person before planning a special breakfast visit.",
      badge: "hidden-gem",
      bestDishes: ["Moroccan Breakfast Platter", "Msemen with Honey", "Avocado Smoothie"],
      pros: ["Authentic artisanal amlou and mountain honey", "Charming traditional dairy bar vibe", "Very affordable"],
      cons: ["Subject to erratic opening hours or seasonal closure", "Extremely limited seating space"],
      googleRating: 4.8,
      googleReviewCount: 188,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 45,
      theforkRating: 4.7,
      theforkReviewCount: 20,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 188,
      openTime: "07:00",
      closeTime: "18:00",
      googleMapsUrl: "https://maps.google.com/?q=Lecheria+Venezia+Chefchaouen",
      reservationMethod: ["walk-in"],
      reservationContact: "",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-18",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "rooftop"],
      foodStyles: ["Mediterranean", "Vegetarian/Vegan", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["specialty-coffee", "bohemian", "rooftop"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["specialty-coffee", "rooftop", "healthy", "hummus", "vegetarian", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Hamsa",
      neighborhood: "Medina",
      description: "Trendy, bohemian rooftop cafe serving fresh organic salads, healthy bowls, craft specialty coffee, and modern Mediterranean bites.",
      tip: "It's the premier spot in Chefchaouen's medina for getting a proper flat white and a healthy beetroot hummus bowl.",
      badge: "local-favorite",
      bestDishes: ["Healthy Quinoa Salad", "Beetroot Hummus", "Specialty Flat White"],
      pros: ["Best specialty espresso coffee in the medina", "Vibrant healthy vegan and vegetarian bowls", "Relaxed rooftop above the square"],
      cons: ["Terrace tables can fill up quickly around lunch", "Higher prices than traditional tea shops"],
      googleRating: 4.5,
      googleReviewCount: 450,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 247,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 450,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Hamsa+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212660305373",
      bookingUrl: "",
      whatsappNumber: "+212660305373",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-19",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["lively", "central-medina", "pastilla"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop"],
      paymentMethods: ["cash"],
      tags: ["pastilla", "tagine", "medina", "rooftop", "dinner", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Paloma",
      neighborhood: "Medina",
      description: "High-volume, lively medina staple situated right near the central plaza, offering dependable pastillas, chicken tagines, and mint tea.",
      tip: "Request a table on the rooftop terrace for a slightly calmer dining experience away from square foot traffic.",
      badge: "local",
      bestDishes: ["Lemon Chicken Tagine", "Beef Pastilla", "Moroccan Salads"],
      pros: ["Prime central location right off Place Outa el Hammam", "Fast service with generous portion sizes", "Crisp, flavorful pastillas"],
      cons: ["High tourist foot traffic during peak hours", "Ground level can feel busy"],
      googleRating: 4.4,
      googleReviewCount: 375,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 180,
      theforkRating: 4.4,
      theforkReviewCount: 70,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 375,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Paloma+Chefchaouen",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212610987654",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-chefchaouen-20",
    city: "chefchaouen",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "snack"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "International"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "culture", "first-timer"],
      vibeTags: ["vintage-industrial", "healthy-brunch", "concept-store"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["brunch", "healthy", "breakfast", "specialty-coffee", "avocado-toast"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Fornaccio",
      neighborhood: "Medina Edge",
      description: "Stylish vintage-industrial coffee shop and concept kitchen at Bab Souk, serving healthy brunch formulas, avocado toasts, and organic juices.",
      tip: "Try the Fornaccio Formula breakfast with local jebli goat cheese, tapenade, mkila eggs, and honey-almond yogurt.",
      badge: "local-favorite",
      bestDishes: ["Fornaccio Formula Breakfast", "Avocado & Poached Egg Toast", "Fresh Fruit Smoothie"],
      pros: ["Atmospheric vintage-industrial decor with art displays", "Organic, health-conscious ingredients", "Excellent specialty coffee and calm workspace"],
      cons: ["Located on the Bab Souk medina edge rather than main plaza", "Closes earlier in the evening than dinner spots"],
      googleRating: 4.2,
      googleReviewCount: 390,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 80,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 390,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Fornaccio+Chefchaouen",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212661150503",
      bookingUrl: "https://fornaccio.ma",
      whatsappNumber: "+212661150503",
      website: "https://fornaccio.ma",
      instagram: "https://instagram.com/fornaccio.coffeeshop"
    }
  }
];