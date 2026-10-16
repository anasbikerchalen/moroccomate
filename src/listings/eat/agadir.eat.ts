/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: AGADIR
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-agadir-1' or 'eat-agadir-restaurant')
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
 *   id: 'e-agadir-[id]',
 *   city: 'agadir',
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

export const agadirEat: EatListing[] = [
  {
    id: "e-agadir-1",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: [
        "French-Moroccan",
        "Seafood",
        "Mediterranean",
        "International"
      ],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["chic", "scenic", "polished", "cosmopolitan"],
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
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: [
        "late-night",
        "sunset",
        "fine",
        "budget",
        "terrace",
        "alcohol",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pure Passion Restaurant",
      neighborhood: "Marina Agadir",
      description: "An elegant waterfront fine-dining jewel overlooking the serene marina yachts. Celebrated for its exquisite French and international fusion, meticulous plating of local seafood, and a refined cosmopolitan terrace.",
      tip: "Book at least 1–2 days ahead. For sunset views without major crowds, arrive around 18:30–19:00.",
      badge: "splurge",
      bestDishes: [
        "Grilled Squid / Calamari",
        "Ribeye Steak",
        "Moroccan Lamb",
        "Sea Bass",
        "Prawns with Peanut Mayo",
        "Tiramisu"
      ],
      pros: [
        "Beautiful marina terrace with sunset views and polished presentation.",
        "Attentive, professional service and generous portions.",
        "Wide menu covering seafood, steaks and dietary options."
      ],
      cons: [
        "Premium prices and highly popular — reservations are essential.",
        "Some diners report inconsistent pacing on very busy nights."
      ],
      googleRating: 4.6,
      googleReviewCount: 2390,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 2823,
      theforkRating: 4.5,
      theforkReviewCount: 800,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 2823,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Résidence N°02 M1, Complexe Marina, Agadir 80010, Morocco",
        lat: 30.422686,
        lng: -9.618676
      },
      googleMapsUrl: "https://maps.google.com/?q=Pure+Passion+Restaurant+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528840120",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.purepassion.ma",
      instagram: "https://instagram.com/pure_passion_marina",
      customStory: "Pure Passion was founded around a 'love and passion for food' philosophy and has become one of Agadir Marina's most popular restaurants. It pairs a European-style fine-dining menu with Moroccan hospitality, beachfront views, and an extensive wine and cocktail list.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-2",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["chic", "scenic", "polished", "lively"],
      crowdLevel: "bustling"
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: [
        "late-night",
        "sunset",
        "live-music",
        "budget",
        "alcohol",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Les Blancs Agadir",
      neighborhood: "Marina Agadir",
      description: "A high-energy Spanish-Moroccan beachfront lounge at the marina entrance. Famous for authentic paella, white-on-white aesthetic, and a lively atmosphere with sunset views and sea breezes.",
      tip: "No reservation needed for lunch, but dinner fills quickly. Best at 18:30–19:30 for a sunset table.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood paella",
        "Spanish tapas",
        "Garlic prawns",
        "Fillet steak",
        "Sangria"
      ],
      pros: [
        "Prime beach-and-marina location with strong sunset atmosphere.",
        "Authentic Spanish menu (paella, tapas, sangria) in a tourist city.",
        "Live music and late-night lounge vibe."
      ],
      cons: [
        "Mixed reviews on service consistency during peak hours.",
        "Can be crowded, noisy, and windy on the open terrace."
      ],
      googleRating: 3.8,
      googleReviewCount: 1330,
      tripadvisorRating: 3.7,
      tripadvisorReviewCount: 463,
      theforkRating: 3.7,
      theforkReviewCount: 100,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 463,
      openTime: "10:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Marina d'Agadir, Route Marina, Agadir 80000, Morocco",
        lat: 30.42385,
        lng: -9.615373
      },
      googleMapsUrl: "https://maps.google.com/?q=Les+Blancs+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528828368",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lesblancsagadir.com",
      instagram: "https://instagram.com/lesblancsagadir",
      customStory: "Les Blancs has established itself as the go-to Spanish beachfront venue at the entrance of Agadir Marina, offering a feet-in-the-sand atmosphere with white-on-white decor, live music, and a menu built around Spanish tapas and seafood.",
      languagesSpoken: ["French", "Arabic/Darija", "English", "Spanish"]
    }
  },

  {
    id: "e-agadir-3",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "casual"],
      foodStyles: ["Seafood", "French-Moroccan", "Italian", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["authentic", "maritime", "polished"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 32,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "budget", "alcohol", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Yacht Club Agadir",
      neighborhood: "Fishing Port",
      description: "A refined seafood institution directly in Agadir's working fishing harbor. Celebrated for ultra-fresh fish sourced directly from the morning catch, prepared with French and Italian culinary expertise.",
      tip: "Reserve ahead for lunch to get the freshest catch of the day. The oysters gratinées are a standout specialty.",
      badge: "hidden-gem",
      bestDishes: [
        "Grilled or baked sea bream",
        "Oysters gratinées",
        "Fish soup",
        "Sole meunière"
      ],
      pros: [
        "Ultra-fresh seafood sourced directly from Agadir's fishing port.",
        "Authentic harbor atmosphere away from the main tourist promenade.",
        "Strong French and Italian seafood preparation."
      ],
      cons: [
        "The industrial port area can be intimidating for some visitors.",
        "Premium pricing for specific fish by weight; reservations are essential."
      ],
      googleRating: 4.2,
      googleReviewCount: 200,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 306,
      theforkRating: 4.2,
      theforkReviewCount: 306,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 306,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Port de Pêche, Yacht Club, Agadir 80000, Morocco",
        lat: 30.4240313,
        lng: -9.6199724
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Yacht+Club+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212525090528",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      customStory: "Restaurant Yacht Club Agadir — also known as Restaurant du Port de Pêche — sits inside the Agadir fishing harbor, one of the busiest in Africa. The venue is built around the daily catch: fishermen unload sardines and shellfish in the morning, which are then transformed into French- and Italian-influenced plates.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-4",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "traditional", "casual"],
      foodStyles: ["French-Moroccan", "Moroccan", "Cafe & Pastry"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["culture", "first-timer", "nomad"],
      vibeTags: ["traditional", "homestyle", "lively", "authentic"],
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
      tags: ["pastry", "cafe-pastry", "breakfast", "budget", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Tafarnout",
      neighborhood: "Ville Nouvelle",
      description: "An Agadir institution since 1984. This legendary bakery-patisserie, café, and breakfast room serves the city's finest viennoiseries, traditional breads, and Moroccan pastries.",
      tip: "Best between 07:00–09:00 for the freshest baked goods. Try the traditional Souss breakfast sets.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Croissants",
        "Lemon Tart",
        "Traditional Moroccan breakfast set",
        "Mint tea"
      ],
      pros: [
        "Excellent quality-to-price ratio for fresh pastries and breakfast.",
        "Long-established local institution with a central location.",
        "Wide selection of breads, cakes, and breakfast set menus."
      ],
      cons: [
        "Can be crowded and noisy during the morning rush.",
        "Service is efficient rather than leisurely."
      ],
      googleRating: 4.2,
      googleReviewCount: 400,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 672,
      theforkRating: 4.2,
      theforkReviewCount: 672,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 672,
      openTime: "06:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II, Agadir 80000, Morocco",
        lat: 30.417381,
        lng: -9.596071
      },
      googleMapsUrl: "https://maps.google.com/?q=Tafarnout+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "+212528844450",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      customStory: "Pâtisserie Tafarnout has been an Agadir institution since 1984, starting as a traditional bakery and evolving into a full-service patisserie, café, and breakfast room. It remains a morning ritual for locals and visitors seeking fresh baguettes, croissants, and Moroccan pastries.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-6",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: [
        "French-Moroccan",
        "Seafood",
        "International",
        "Mediterranean"
      ],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["elegant", "romantic", "refined", "upscale"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 40,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "fine", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Scala Restaurant Agadir",
      neighborhood: "Secteur Touristique",
      description: "An upscale romantic institution famous for its refined French-Mediterranean seafood. Features a live lobster tank and a polished, classic dining room perfect for special occasions.",
      tip: "Complimentary shuttle service is available for guests in nearby hotels. Perfect for a refined dinner with high-quality service.",
      badge: "splurge",
      bestDishes: [
        "Grilled Sole",
        "Lobster Thermidor",
        "Prime Rib",
        "Crème Brûlée"
      ],
      pros: [
        "Consistently refined French-Mediterranean seafood in a polished setting.",
        "Strong value for the tourist-zone quality and large portions.",
        "Free shuttle service and attentive staff."
      ],
      cons: [
        "Premium pricing compared to main streets.",
        "Music can become loud later in the evening."
      ],
      googleRating: 4.2,
      googleReviewCount: 946,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 1348,
      theforkRating: 4.1,
      theforkReviewCount: 1348,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1348,
      openTime: "12:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Rue de l'Oued Souss, Complexe Tamlalt, Agadir 80000, Morocco",
        lat: 30.40857,
        lng: -9.598747
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Scala+Restaurant+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528846773",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://lascalaagadir.com",
      instagram: "https://instagram.com/lascalaagadir",
      customStory: "La Scala has been a fixture of Agadir's tourist-zone dining scene for decades. It built its reputation on a French-influenced menu and a live lobster tank, attracting couples and families seeking a polished evening.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-7",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night", "flexible"],
      experienceTypes: ["casual"],
      foodStyles: ["International", "Moroccan", "Italian"],
      cuisineTags: ["international", "moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["adventure", "first-timer"],
      vibeTags: ["lively", "casual", "coastal"],
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
      nearBeach: true,
      nearCenter: true,
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
      name: "Café Jour et Nuit",
      neighborhood: "Corniche",
      description: "An iconic, sprawling beachfront café and brasserie operating until late night. Highly beloved by families and beachgoers for international comfort food, wood-fired pizzas, local pastries, and oceanfront people-watching.",
      tip: "Great stop for a late-night snack or a refreshing mint tea after walking along the beach promenade.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Jour et Nuit",
        "Beef Kefta Brochettes",
        "Traditional Harira Soup"
      ],
      pros: [
        "Central location in the Agadir tourist zone",
        "Wide selection of breakfast and coffee sets",
        "Generous terrace seating open late"
      ],
      cons: [
        "Service can be slow during peak evening rush",
        "Can get bustling and loud outdoors"
      ],
      googleRating: 4,
      googleReviewCount: 1050,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 305,
      theforkRating: 3.5,
      theforkReviewCount: 305,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 305,
      openTime: "06:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Jour+et+Nuit+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840610",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-8",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "casual", "traditional"],
      foodStyles: [
        "French-Moroccan",
        "Moroccan",
        "Seafood",
        "International",
        "Vegetarian/Vegan"
      ],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["charming", "relaxed", "melodic", "festive"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "live-music", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Jardin d'Eau",
      neighborhood: "Tourist Zone",
      description: "One of Agadir's oldest dining institutions, set in a lush garden complex on Boulevard du 20 Août. It is beloved for its French-Moroccan fusion cuisine, calming water fountains, and live acoustic music performances most evenings.",
      tip: "Reservations are highly recommended for dinner, particularly on live acoustic music and traditional Bodeguita theme nights.",
      badge: "local-favorite",
      bestDishes: [
        "7-hour slow-braised lamb",
        "Seafood / fish platter",
        "Lobster fricassee with king prawns",
        "Tiramisu",
        "Crème brûlée",
        "Chocolate moelleux"
      ],
      pros: [
        "Long-established Agadir institution with reliable French-Moroccan food.",
        "Live music and festive garden atmosphere.",
        "Good value for the location and generous portions."
      ],
      cons: [
        "Can get crowded and noisy during peak dinner / live-music hours.",
        "Service speed and English fluency vary during busy nights."
      ],
      googleRating: 4.3,
      googleReviewCount: 1124,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 1299,
      theforkRating: 4.3,
      theforkReviewCount: 1299,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1299,
      openTime: "10:00",
      closeTime: "01:30",
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Agadir 80000, Morocco",
        lat: 30.4139,
        lng: -9.600732
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Jardin+d+Eau+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840195",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lejardindeau.ma",
      instagram: "not-available",
      customStory: "Le Jardin d'Eau is one of Agadir's oldest dining institutions, set in a garden complex on Boulevard du 20 Août. It has long been a favorite for French-Moroccan fusion, live music, and a festive 'Bodeguita' atmosphere, pairing tagines and seafood with a lounge-style bar and cocktail program.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-11",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual"],
      foodStyles: ["International", "Grill & BBQ", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["adventure", "luxury"],
      vibeTags: ["breezy", "casual", "coastal"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "sunset", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mimi La Brochette",
      neighborhood: "Corniche",
      description: "An iconic beachfront culinary landmark in Agadir. Known for its breezy ocean views, historic Agadir connection, exceptional charcoal grills, and fantastic fresh squid.",
      tip: "Sit on the upper tier terrace to get the most majestic, uninterrupted breeze and coastal sunset views.",
      badge: "local-favorite",
      bestDishes: [
        "Charcoal Beef Fillet Skewers",
        "Fried Calamari Platter",
        "Chocolate Moelleux"
      ],
      pros: [
        "Direct seaside marina atmosphere and outdoor tables",
        "Fresh grilled brochettes and seafood skewers",
        "Friendly multilingual service staff"
      ],
      cons: [
        "Slightly higher marina tourist pricing",
        "Outdoor tables can get windy in late afternoon"
      ],
      googleRating: 4.3,
      googleReviewCount: 300,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 435,
      theforkRating: 4.3,
      theforkReviewCount: 435,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 435,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Rue La Plage, Agadir, Morocco",
        lat: 30.4218682,
        lng: -9.6098178
      },
      googleMapsUrl: "https://maps.google.com/?q=Mimi+La+Brochette+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212691339036",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-12",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["Moroccan", "International", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["luxury"],
      vibeTags: ["stylish", "chic", "oriental-chic"],
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "fine", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Mauresque",
      neighborhood: "Secteur Touristique",
      description: "A stylish Moroccan restaurant in Agadir's tourist zone, known for refined Moroccan dishes, attentive service, and an elegant evening lounge atmosphere.",
      tip: "The ocean fusion dishes like seafood tagine with modern saffron-infused risotto are highly unique.",
      badge: "splurge",
      bestDishes: [
        "Saffron Risotto with Tiger Prawns",
        "Slow-cooked Lamb Tanjia",
        "Traditional Souss Salad"
      ],
      pros: [
        "Refined Moroccan lounge ambiance with warm interior lighting",
        "Richly flavored lamb tagines and traditional pastilla",
        "Full bar and cocktail selection available"
      ],
      cons: [
        "Pricier than medina street dining",
        "Reservations strongly recommended on weekends"
      ],
      googleRating: 4.2,
      googleReviewCount: 670,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 402,
      theforkRating: 4,
      theforkReviewCount: 393,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 393,
      openTime: "18:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "12 Complexe Valtur - Chemin de Oued Souss, Agadir 80000, Morocco",
        lat: 30.406393,
        lng: -9.598389
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Mauresque+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528820444",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lemauresque.ma",
      instagram: "https://instagram.com/restaurant_lemauresque_agadir"
    }
  },

  {
    id: "e-agadir-15",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["cozy", "homestyle", "friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cafe Restaurant Ibtissam",
      neighborhood: "Talborjt",
      description: "An exceptional restaurant in historic Talborjt dedicated to authentic Berber and traditional Moroccan Souss-region culinary heritage. Celebrated for slow-simmered tajines inside real clay pots and rich couscous.",
      tip: "Their vegetable tagine cooked strictly in clay pots over embers is deeply flavorful and perfect for vegetarians.",
      badge: "local",
      bestDishes: [
        "Slow-cooked Vegetable Tagine",
        "Beef Tagine with Almonds",
        "Friday Souss Couscous"
      ],
      pros: [
        "Affordable local Moroccan dishes and mint tea",
        "Welcoming family-run atmosphere",
        "Popular spot for casual breakfast and quick lunches"
      ],
      cons: [
        "Modest indoor dining area with basic seating",
        "Cash-only payment preferred"
      ],
      googleRating: 4.2,
      googleReviewCount: 452,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 166,
      theforkRating: 4.3,
      theforkReviewCount: 166,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 166,
      openTime: "11:30",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "Place Tamri, Talborjt, Agadir, Morocco",
        lat: 30.4244,
        lng: -9.593001
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Ibtissam+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212670128435",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-16",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["casual", "lively", "festive"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
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
      tags: ["late-night", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mezzo Mezzo",
      neighborhood: "Ville Nouvelle",
      description: "A lively evening Italian restaurant and lounge bistro in the city center, famed for authentic wood-fired pizzas, creamy pastas, wine, and festive dinner Tarab music.",
      tip: "Try the Calzone or any pizza topped with local fresh-cured meats. Great choice for a late dinner with musical ambiance.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-Fired Pizza Regina",
        "Spaghetti Frutti di Mare",
        "Homemade Tiramisu"
      ],
      pros: [
        "Authentic wood-fired Italian pizzas and pasta dishes",
        "Pleasant terrace seating on Boulevard Hassan II",
        "Generous portions suitable for sharing"
      ],
      cons: [
        "Limited Moroccan food choices",
        "Busy during peak weekend dinner hours"
      ],
      googleRating: 4,
      googleReviewCount: 133,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 381,
      theforkRating: 4,
      theforkReviewCount: 381,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 381,
      openTime: "19:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "19 Avenue Hassan II, Agadir 80000, Morocco",
        lat: 30.415997,
        lng: -9.595236
      },
      googleMapsUrl: "https://maps.google.com/?q=Mezzo+Mezzo+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212666828055",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-17",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["hidden-gem"],
      foodStyles: ["Mediterranean", "French-Moroccan", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury", "nomad"],
      vibeTags: ["peaceful", "verdant", "refined"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17.5,
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
      paymentMethods: ["credit_card", "cash"],
      tags: ["budget", "alcohol", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Cote' Court",
      neighborhood: "City Center",
      description: "A peaceful, lush garden restaurant located inside the Agadir Royal Tennis Club. Offers a serene, shaded escape from the beach crowds, serving excellent Mediterranean, French-style, and Moroccan plates.",
      tip: "Perfect choice for a quiet business lunch or a relaxed Sunday afternoon brunch under the tall eucalyptus trees.",
      badge: "hidden-gem",
      bestDishes: ["Grilled Monkfish Brochette", "Steak Tartare", "Lemon Tart"],
      pros: [
        "Relaxed sports club setting amidst lush greenery",
        "High quality French-Mediterranean brasserie menu",
        "Spacious shaded terrace away from street noise"
      ],
      cons: [
        "Tucked away location inside the tennis club complex",
        "Car or taxi recommended for access"
      ],
      googleRating: 4.1,
      googleReviewCount: 370,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 270,
      theforkRating: 4.1,
      theforkReviewCount: 270,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 270,
      openTime: "11:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II, Royal Tennis Club Agadir, Agadir 80020, Morocco",
        lat: 30.417606,
        lng: -9.597778
      },
      googleMapsUrl: "https://maps.google.com/?q=Cote+Court+Agadir+Royal+Tennis+Club",
      reservationMethod: ["phone"],
      reservationContact: "+212616070760",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-19",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "Middle Eastern"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["warm", "lively", "traditional", "authentic"],
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Daffy",
      neighborhood: "Talborjt",
      description: "A legendary family-run diner tucked away in the authentic Talborjt quarter. Highly celebrated for over 45 years of home-style Moroccan cooking, offering rich tagines and fresh local salads in a warm, Amazigh-infused environment.",
      tip: "Famous for Friday couscous and their slow-cooked beef tagines. Pair it with their signature freshly-brewed hot mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Beef tagine",
        "Kefta tagine",
        "Chicken tagine",
        "Couscous",
        "Harira soup",
        "Grilled sardines",
        "Mint tea"
      ],
      pros: [
        "Authentic, affordable Moroccan home cooking in a friendly family setting.",
        "Consistently praised mint tea and traditional harira soup.",
        "Great value and central Talborjt location."
      ],
      cons: [
        "Small, simple decor and limited seating can mean waits at peak times.",
        "Service can be slow when busy; English menu/communication may be limited."
      ],
      googleRating: 4.3,
      googleReviewCount: 809,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 45,
      theforkRating: 4.5,
      theforkReviewCount: 45,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 45,
      openTime: "10:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "2 Rue des Orangers, Talborjt, Agadir 80000, Morocco",
        lat: 30.422903,
        lng: -9.601278
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Daffy+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212661091614",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/daffy_restaurant",
      customStory: "Restaurant Daffy is a family-run institution in the Talborjt quarter, celebrated for more than 45 years of home-style Moroccan cooking. The dining room features traditional Amazigh decor, and the menu changes with the market, focusing on fresh tagines, couscous, grilled meats and a justly famous mint tea.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-21",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["casual", "friendly", "cozy", "warm"],
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
      hasDelivery: true,
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
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Siciliana",
      neighborhood: "Ville Nouvelle",
      description: "A downtown Agadir fixture since 1996, operating a Moroccan-run Italian pizzeria built around a cozy wood-fired oven. Renowned for thin, crispy, and authentic wood-baked crusts paired with highly hospitable service.",
      tip: "Make sure to order pizza baked natively in the wood-fired brick oven. They are thin, crispy, and baked fresh on order.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-fired pizza",
        "Calzone",
        "Lasagna",
        "Tiramisu",
        "Crème brûlée"
      ],
      pros: [
        "Excellent value: authentic wood-fired pizzas at low prices.",
        "Friendly, welcoming staff and quick service.",
        "Halal and vegetarian-friendly Italian menu."
      ],
      cons: [
        "Menu and staff primarily in French; English communication may be basic.",
        "Alcohol-free, which may disappoint some tourists expecting wine with pizza."
      ],
      googleRating: 4.2,
      googleReviewCount: 850,
      tripadvisorRating: 3.7,
      tripadvisorReviewCount: 126,
      theforkRating: 3.7,
      theforkReviewCount: 126,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 126,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "65 bis & 67 Avenue Hassan II, Ville Nouvelle, Agadir 80020, Morocco",
        lat: 30.421875,
        lng: -9.601104
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Siciliana+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528820973",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.lasiciliana.ma",
      instagram: "https://instagram.com/lasicilianaagadir",
      customStory: "La Siciliana has been a downtown Agadir fixture since 1996, operating a Moroccan-run Italian pizzeria built around a wood-fired oven. It is known for thin, crispy pizzas, friendly service, and very reasonable prices, making it a reliable local favorite for casual lunches and dinners.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-darzitoune",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem", "traditional"],
      foodStyles: [
        "Moroccan",
        "French-Moroccan",
        "Mediterranean",
        "International"
      ],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["romantic", "peaceful", "verdant", "refined"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 40,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: [
        "couscous",
        "pastilla",
        "fine",
        "budget",
        "alcohol",
        "dinner",
        "quiet"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Zitoune",
      neighborhood: "Taroudant (Region Souss)",
      description: "Located in nearby Taroudant (around 80 km east of Agadir), Dar Zitoune is an exceptional garden riad restaurant set in a one-and-a-half-hectare garden with citrus, papaya, and olive trees. Celebrated as one of the Souss region's finest gourmet tables.",
      tip: "A beautiful gourmet stop on a day-excursion from Agadir. It is recommended to book in advance and request specialty dishes.",
      badge: "splurge",
      bestDishes: [
        "Charolais Beef Tartare",
        "Smoked Duck-Breast Tatin",
        "Traditional Mechoui Lamb",
        "Royal Couscous",
        "Moroccan Pastilla"
      ],
      pros: [
        "Stunning garden oasis and Riad-setting with organic estate fruit groves.",
        "High-end gastronomy marrying Moroccan traditional cooking with refined French classics.",
        "Impeccable multilingual hospitality and quiet, romantic ambiance."
      ],
      cons: [
        "Requires a 1-hour drive east from Agadir (not situated inside Agadir city).",
        "Dinner frequently shifts to a fixed-price set menu, offering less individual menu flexibility."
      ],
      googleRating: 4.5,
      googleReviewCount: 289,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 246,
      theforkRating: 4.5,
      theforkReviewCount: 246,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 246,
      openTime: "12:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boutarial El Berrania (N10), Taroudant 83000, Morocco",
        lat: 30.452158,
        lng: -8.880196
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+Zitoune+Taroudant",
      reservationMethod: ["phone"],
      reservationContact: "+212528551141",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://darzitoune.com",
      instagram: "not-available",
      customStory: "Dar Zitoune ('House of the Olives') opened as a 4-star boutique hotel in 2005, built in traditional Berber style on the edge of Taroudant. Its restaurant is set in a garden of olive, citrus and papaya trees, and is celebrated as one of the finest tables in the Souss region, blending refined European cuisine with Moroccan classics.",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-kounouz",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["traditional", "cozy", "authentic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["late-night", "budget", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Kounouz (Unverified)",
      neighborhood: "Talborjt",
      description: "Unverified entry: In Talborjt, Kounouz corresponds to an artisan and textile boutique, not a restaurant.",
      tip: "Call ahead to confirm operating hours and inquire about the daily slow-cooked tagine special.",
      badge: "local",
      bestDishes: [
        "Traditional Chicken Pastilla",
        "Slow-Cooked Beef Tagine with Prunes",
        "Seven Vegetables Couscous"
      ],
      pros: [
        "Authentic Moroccan home-style culinary recipes",
        "Charming traditional dining room decor"
      ],
      cons: [
        "Pending on-site verification",
        "Operating hours may vary seasonally"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Kounouz+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-obleu",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "budget"],
      vibeTags: ["breezy", "casual", "coastal"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["late-night", "budget", "dinner", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "O'Bleu (Unverified)",
      neighborhood: "Marina",
      description: "Unverified entry: O'Bleu is located in Essaouira (O'Bleu Mogador) rather than Agadir Marina.",
      tip: "A great casual stop for grilled Mediterranean fish platters after a walk along the promenade.",
      badge: "local",
      bestDishes: [
        "Grilled Sea Bass Fillet",
        "Seafood Paella",
        "Mediterranean Calamari Platter"
      ],
      pros: [
        "Fresh coastal seafood and Mediterranean specialties",
        "Pleasant relaxed dining environment"
      ],
      cons: [
        "Pending on-site verification",
        "Peak summer season waits possible"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=OBleu+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-snackfounty",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["budget"],
      vibeTags: ["fast", "casual", "local"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["street-food", "late-night", "budget", "dinner", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Founty (Unverified)",
      neighborhood: "Founty",
      description: "Unverified entry for Snack Founty. Operational status and location are currently unconfirmed.",
      tip: "Opt for the spiced kefta panini with homemade harissa and fresh avocado shake.",
      badge: "local",
      bestDishes: [
        "Moroccan Spiced Kefta Panini",
        "Chicken Tacos with Cheese Sauce",
        "Fresh Avocado Milkshake"
      ],
      pros: [
        "Quick and inexpensive casual fast-food bites",
        "Convenient neighborhood location in Founty"
      ],
      cons: [
        "Casual snack counter with limited indoor seating",
        "Pending on-site verification"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Founty+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-agadir-mcdonalds-corniche",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["lively", "familiar", "oceanfront"],
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "street-food",
        "late-night",
        "breakfast",
        "budget",
        "terrace",
        "dry",
        "dinner"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Front de Mer",
      neighborhood: "Secteur Touristique",
      description: "Agadir's premier beachfront McDonald's featuring an outdoor terrace facing the ocean promenade, McCafé, and late-night opening hours.",
      tip: "Grab a terrace seat on the upper level for elevated views across Agadir bay.",
      badge: "local-favorite",
      bestDishes: [
        "Big Mac Meal",
        "McFlurry with Speculoos",
        "Moroccan Mint Tea & Coffee"
      ],
      pros: [
        "Prime oceanfront location on Agadir corniche",
        "Reliable air conditioning and familiar global menu"
      ],
      cons: [
        "Standard international fast food rather than local cuisine",
        "Very crowded during holiday weekends"
      ],
      googleRating: 4.1,
      googleReviewCount: 6900,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 180,
      theforkRating: 3.5,
      theforkReviewCount: 180,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 6900,
      openTime: "07:00",
      closeTime: "03:00",
      exactAddressAndCoordinates: {
        address: "Passage Tawada, Boulevard du 20 Août, Secteur Touristique, Agadir",
        lat: 30.4182,
        lng: -9.6015
      },
      googleMapsUrl: "https://maps.google.com/?q=McDonalds+Front+de+Mer+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-agadir-kfc-corniche",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick", "bustling", "casual"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
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
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "KFC Boulevard du 20 Aout",
      neighborhood: "Secteur Balnéaire",
      description: "Beachside KFC restaurant near the Agadir seaside promenade offering spicy chicken buckets, crispy strips, and fries.",
      tip: "Convenient central location on Boulevard du 20 Août for a fast meal on the go.",
      badge: "local-favorite",
      bestDishes: [
        "Original Recipe Fried Chicken Bucket",
        "Zinger Burger",
        "Crispy Tenders with Dip"
      ],
      pros: [
        "Quick hot meals located right on Boulevard du 20 Août",
        "Familiar international chicken fast-food standards"
      ],
      cons: [
        "Not a local culinary experience",
        "Can get noisy with peak tourist foot traffic"
      ],
      googleRating: 3.9,
      googleReviewCount: 2200,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 80,
      theforkRating: 3.5,
      theforkReviewCount: 80,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 2200,
      openTime: "11:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir",
        lat: 30.4175,
        lng: -9.6022
      },
      googleMapsUrl: "https://maps.google.com/?q=KFC+Boulevard+du+20+Aout+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-agadir-burger-king-corniche",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["casual", "fast", "late-night"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 0,
      isHalal: true,
      halalStatus: "unknown",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: false,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["street-food", "late-night", "budget", "dinner", "quiet"],
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Burger King (Unverified)",
      neighborhood: "Secteur Touristique",
      description: "Unverified / Non-operational entry: Burger King does not currently operate a branch on the Agadir beachfront.",
      tip: "Standard flame-grilled options with convenient proximity to the beach hotels.",
      badge: "local",
      bestDishes: [
        "Whopper Burger Meal",
        "Crispy Chicken Sandwich",
        "Onion Rings with BBQ Sauce"
      ],
      pros: [
        "Flame-grilled burgers close to the corniche promenade",
        "Fast service for late-night quick bites"
      ],
      cons: [
        "International fast-food chain",
        "Pending on-site verification"
      ],
      googleRating: 0,
      googleReviewCount: 0,
      tripadvisorRating: 0,
      tripadvisorReviewCount: 0,
      theforkRating: 0,
      theforkReviewCount: 0,
      restaurantguruRating: 0,
      restaurantguruReviewCount: 0,
      openTime: "00:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Burger+King+Agadir",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://burgerkingmaroc.ma",
      instagram: "https://instagram.com/burgerkingmaroc"
    }
  },

  {
    id: "e-agadir-pizza-hut-ait-souss",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["family-friendly", "casual"],
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Complexe Aït Souss",
      neighborhood: "Centre Ville",
      description: "Centrally situated at Complexe Aït Souss by Place Al Amal in Agadir, offering classic Pan pizzas, stuffed crusts, and takeaway combos.",
      tip: "Family meal deals and takeout combos available in central Complexe Aït Souss.",
      badge: "local-favorite",
      bestDishes: [
        "Pan Pizza Supreme",
        "Pepperoni Pan Pizza",
        "Garlic Bread with Cheese"
      ],
      pros: [
        "Consistent pan pizzas and family-sized combo deals",
        "Convenient central location in Complexe Aït Souss"
      ],
      cons: [
        "Commercial pizza chain with little local identity",
        "Pending on-site verification"
      ],
      googleRating: 3.8,
      googleReviewCount: 1500,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 110,
      theforkRating: 3.5,
      theforkReviewCount: 110,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 1500,
      openTime: "11:30",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Place Al Amal, Complexe Aït Souss, Avenue Hassan II, Agadir",
        lat: 30.4215,
        lng: -9.5988
      },
      googleMapsUrl: "https://maps.google.com/?q=Pizza+Hut+Complexe+Ait+Souss+Agadir",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "not-available",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-agadir-dominos-talborjt",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick", "takeaway", "neighborhood"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 6,
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
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Domino's Pizza Talborjt",
      neighborhood: "Talborjt",
      description: "Takeaway, delivery, and casual dining counter in Les Galeries de Talborjt, serving freshly baked pizzas and chocolate lava cakes.",
      tip: "Fast takeaway and local delivery across the Talborjt neighborhood.",
      badge: "local-favorite",
      bestDishes: [
        "Classic Hand-Tossed Margherita",
        "Barbecue Chicken Pizza",
        "Cheesy Stuffed Cheesy Bread"
      ],
      pros: [
        "Speedy pizza takeaway and delivery in Talborjt",
        "Affordable value specials and combo deals"
      ],
      cons: [
        "Standard takeout pizza shop with limited dine-in charm",
        "Pending on-site verification"
      ],
      googleRating: 3.4,
      googleReviewCount: 200,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 20,
      theforkRating: 3.5,
      theforkReviewCount: 20,
      restaurantguruRating: 3.4,
      restaurantguruReviewCount: 200,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Les Galeries de Talborjt, Agadir 80000, Morocco",
        lat: 30.4225,
        lng: -9.5962
      },
      googleMapsUrl: "https://maps.google.com/?q=Dominos+Pizza+Talborjt+Agadir",
      reservationMethod: ["walk-in", "phone", "website"],
      reservationContact: "+212528842606",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-agadir-oplaya",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Seafood", "Moroccan", "Mediterranean", "International"],
      cuisineTags: ["seafood", "international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["coastal", "breezy", "scenic", "romantic"],
      crowdLevel: "bustling"
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["sunset", "terrace", "alcohol", "dinner", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ô Playa",
      neighborhood: "Secteur Balnéaire",
      description: "A vibrant seafront institution situated directly on the Agadir beach promenade. Known for panoramic bay views, fresh grilled fish, seafood pastas, and a relaxed, breezy terrace that transitions from sunny lunches to romantic candlelit dinners.",
      tip: "Book ahead for a frontline terrace table between 18:30 and 19:30 to catch the sunset directly across the bay.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Royal Sea Bass",
        "Seafood Paella",
        "Lamb Tagine with Prunes",
        "Grilled Calamari Platter"
      ],
      pros: [
        "Prime location directly facing the beach promenade.",
        "Extensive menu catering to both seafood lovers and traditional Moroccan cravings.",
        "Full wine and cocktail selection."
      ],
      cons: [
        "Can get very crowded during peak holiday sunsets, leading to slower service.",
        "Wind can be brisk on the outdoor terrace during early spring and late autumn."
      ],
      googleRating: 4.2,
      googleReviewCount: 2750,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 1430,
      theforkRating: 4.3,
      theforkReviewCount: 380,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1430,
      openTime: "09:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Front de Mer, Lot N°5 Plage d'Agadir, Agadir 80000, Morocco",
        lat: 30.4189,
        lng: -9.6026
      },
      googleMapsUrl: "https://maps.google.com/?q=O+Playa+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528845867",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-le20",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "French-Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international", "seafood"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["warm", "authentic", "hospitable", "classic"],
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["tagine", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le 20'",
      neighborhood: "Secteur Balnéaire",
      description: "Operating in the Tagadirt complex since 1982, Le 20' is one of the oldest and most dependable addresses on Boulevard du 20 Août. It is celebrated for honest, generous Moroccan cooking alongside Mediterranean fish specialties and French bistro classics.",
      tip: "The slow-braised lamb tagine is arguably the tenderest on the strip. Excellent local Moroccan wine pairings are available.",
      badge: "local-favorite",
      bestDishes: [
        "Tender Lamb Tagine",
        "Grilled Saint-Pierre with Saffron Sauce",
        "Beef Tagine with Almonds",
        "Chocolate Mousse"
      ],
      pros: [
        "Very consistent quality and generous portions for reasonable prices in the tourist zone.",
        "Decades of reliable family-friendly service.",
        "Extensive dual Moroccan and Mediterranean menu."
      ],
      cons: [
        "No sea view (located slightly back in the commercial complex arcade).",
        "Can feel bustling and compact during peak dinner rush."
      ],
      googleRating: 4.5,
      googleReviewCount: 865,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 320,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 865,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80012, Morocco",
        lat: 30.4146,
        lng: -9.6009
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Le+20+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840805",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://le20.ma",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija", "German"]
    }
  },

  {
    id: "e-agadir-le-sensya",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Italian", "International", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury"],
      vibeTags: ["elegant", "refined", "chic", "romantic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 42,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "alcohol", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Sensya",
      neighborhood: "Secteur Balnéaire",
      description: "An elite modern Italian fine-dining jewel inside the 5-star The View Hotel on Avenue du 20 Août. Signed by Michelin-starred chef Francesco Franzese, it showcases reinvented haute-cuisine pasta, seafood risottos, and world-class desserts.",
      tip: "Stick to the artisanal handmade pastas and signature truffle dishes, followed by their standout authentic Italian tiramisu.",
      badge: "splurge",
      bestDishes: [
        "Handmade Truffle Ravioli",
        "Acquerello Seafood Risotto",
        "Eggplant Parmigiana",
        "Deconstructed Tiramisu"
      ],
      pros: [
        "Highest standard of Italian gastronomy in Agadir.",
        "Impeccable hotel service and sophisticated coastal interior design.",
        "Sublime wine list with top Italian and international vintages."
      ],
      cons: [
        "High-end pricing reflecting luxury resort standards.",
        "Closed on Sundays; split hours (12:30–15:00, 19:30–23:00)."
      ],
      googleRating: 4.7,
      googleReviewCount: 200,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 45,
      theforkRating: 4.6,
      theforkReviewCount: 45,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 200,
      openTime: "12:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "The View Hotel, Avenue du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4158,
        lng: -9.6022
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Sensya+The+View+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212528294040",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://theviewhotels.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Italian", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-la-pastilla",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["traditional", "cozy", "homestyle", "authentic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
      isHalal: true,
      halalStatus: "halal-certified",
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["pastilla", "couscous", "budget", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant La Pastilla",
      neighborhood: "Secteur Balnéaire",
      description: "Tucked inside Complexe Tagadirt on Boulevard du 20 Août, this dedicated Moroccan dining room is renowned for mastering Morocco's most intricate culinary specialty: sweet and savory pastillas with delicate flaky pastry, roasted almonds, and spiced fillings.",
      tip: "Arrive before 21:30 for dinner; the house-made pastillas sell out quickly on high-traffic evenings.",
      badge: "local-favorite",
      bestDishes: [
        "Chicken & Almond Pastilla",
        "Seafood Pastilla",
        "Sweet Cinnamon Seffa",
        "Chicken Couscous"
      ],
      pros: [
        "Outstanding execution of sweet and savory pastillas rarely perfected in tourist zones.",
        "Warm traditional decor with complimentary Moroccan mint tea and pastries.",
        "Exceptional value for authentic home-style Moroccan recipes."
      ],
      cons: [
        "Popular items can run out late in the evening.",
        "Small dining room that can fill quickly."
      ],
      googleRating: 4.7,
      googleReviewCount: 1430,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 280,
      theforkRating: 4.5,
      theforkReviewCount: 120,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1430,
      openTime: "09:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Complexe Tagadirt, Boulevard du 20 Août, Agadir 80000, Morocco",
        lat: 30.4144,
        lng: -9.6008
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+la+Pastilla+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528820544",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-agadir-beldi-fusion",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["hidden-gem", "traditional", "casual"],
      foodStyles: [
        "Moroccan",
        "Vegetarian/Vegan",
        "International",
        "Cafe & Pastry"
      ],
      cuisineTags: ["moroccan-traditional", "cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer", "culture"],
      vibeTags: ["bohemian", "lively", "stylish", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 13,
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["breakfast", "terrace", "dry", "budget", "live-music"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Beldi Fusion Kitchen",
      neighborhood: "Secteur Balnéaire",
      description: "A trendy, high-energy dining concept and rooftop terrace on Boulevard du 20 Août. Famous for inventive Moroccan breakfast spreads, vibrant bowls, signature burgers, and evening Gnawa acoustic music in a chic bohemian atmosphere.",
      tip: "Head upstairs to the rooftop terrace for the Beldi breakfast spread in the morning, or during dinner for live Gnawa musical vibes.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Beldi Breakfast Platter",
        "Rfissa Fusion",
        "Tacos Fo9 Shwaya",
        "San Sebastian Cheesecake",
        "Fresh Detox Juices"
      ],
      pros: [
        "Sensational modern Moroccan breakfast and brunch options.",
        "Lively rooftop ambiance with Gnawa musicians in the evenings.",
        "Extensive mocktail and fresh juice menu."
      ],
      cons: [
        "Wait times can reach 15–25 minutes during Sunday morning brunch rush.",
        "Alcohol-free venue (may not fit visitors seeking wine with dinner)."
      ],
      googleRating: 4.6,
      googleReviewCount: 4080,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 65,
      theforkRating: 4.3,
      theforkReviewCount: 65,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 4080,
      openTime: "08:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4162,
        lng: -9.6014
      },
      googleMapsUrl: "https://maps.google.com/?q=Beldi+Fusion+Kitchen+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212648030390",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://beldifusionkitchen.ma",
      instagram: "https://instagram.com/beldifusionkitchen.ma",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-da-celsi",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["cozy", "homestyle", "charming", "relaxed"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Da Celsi Ristorante Italiano",
      neighborhood: "Secteur Balnéaire",
      description: "An intimate, highly regarded Italian trattoria tucked into Complexe Tawada on the beachfront corniche. Dedicated to homemade fresh pasta, coastal clam casseroles, and authentic sauces accompanied by generous Italian hospitality.",
      tip: "Ask for the daily homemade ravioli special and a glass of chilled Moroccan Vin Gris or Italian Pinot Grigio.",
      badge: "hidden-gem",
      bestDishes: [
        "Homemade Spinach & Ricotta Ravioli",
        "Fresh Clam Casserole",
        "Filetto di Pesce",
        "Classic Tiramisu"
      ],
      pros: [
        "Genuinely authentic fresh pasta prepared to order.",
        "Cozy, welcoming hospitality far removed from tourist-trap assembly lines.",
        "Direct walking distance from the beachfront hotels."
      ],
      cons: [
        "Closed on Mondays; small footprint requires booking on weekend nights.",
        "Split service hours (12:00–15:30 and 19:30–23:00)."
      ],
      googleRating: 4.6,
      googleReviewCount: 285,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.5,
      theforkReviewCount: 110,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 285,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "La Corniche - Front de Mer N°7, Complexe Commercial Tawada, Agadir 80000, Morocco",
        lat: 30.4223,
        lng: -9.6095
      },
      googleMapsUrl: "https://maps.google.com/?q=Da+Celsi+Ristorante+Italiano+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528848744",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-lez",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Mediterranean", "French-Moroccan", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["adventure", "nomad"],
      vibeTags: ["lively", "casual", "friendly", "festive"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17,
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
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "terrace", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Z Restaurant Bar Tapas",
      neighborhood: "Secteur Balnéaire",
      description: "A relaxed Spanish-style bistro and tapas terrace on Boulevard du 20 Août. A favorite hangout for drinks, savory tapas boards, juicy steaks, and watching football matches in a sociable, laid-back atmosphere.",
      tip: "Ideal for an informal late afternoon drink and tapas board on the patio before moving on to Agadir nightlife.",
      badge: "local-favorite",
      bestDishes: [
        "Gambas al Ajillo",
        "Charcuterie & Cheese Board",
        "Grilled Ribeye Steak",
        "Sangria Pitcher"
      ],
      pros: [
        "Generous tapas portions and reasonable drink prices for the tourist zone.",
        "Casual, unpretentious atmosphere with sports broadcasts.",
        "Continuous service from morning until late night."
      ],
      cons: [
        "Can get noisy on major football match nights.",
        "Smoking is permitted in open sections of the terrace."
      ],
      googleRating: 4.4,
      googleReviewCount: 985,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 350,
      theforkRating: 4.3,
      theforkReviewCount: 120,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 985,
      openTime: "10:00",
      closeTime: "01:30",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4141,
        lng: -9.6011
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Z+Restaurant+Bar+Tapas+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528828290",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-buddha-bar",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "business-friendly"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury"],
      vibeTags: ["glamorous", "chic", "cosmopolitan", "festive"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 65,
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
      ramadanFriendly: "closed",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "fine", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Buddha-Bar Agadir",
      neighborhood: "Secteur Balnéaire",
      description: "The world-famous luxury Asian-fusion lounge concept set on the seaside of Boulevard du 20 Août. Combines Pacific Rim culinary artistry, theatrical mixology, lavish decor, and high-energy dinner-show performances with resident DJs.",
      tip: "Dress code is strictly smart-chic. A minimum spend of 650 MAD (~€60) per person applies during weekends and special events.",
      badge: "splurge",
      bestDishes: [
        "Signature Black Cod Miso",
        "Crispy Duck Salad",
        "Dragon Roll Sushi Platter",
        "Buddha-Bar Signature Cocktails"
      ],
      pros: [
        "Top nightlife destination for international dinner-and-show entertainment.",
        "World-class Asian-fusion dishes and cocktail mixology.",
        "Lavish and immersive Pacific Rim decor."
      ],
      cons: [
        "Strict minimum spend policy (650 MAD / ~€60 per person).",
        "Age restricted (16+ accompanied for dinner, 21+ for bar area); music is loud late at night."
      ],
      googleRating: 4,
      googleReviewCount: 610,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 150,
      theforkRating: 4.2,
      theforkReviewCount: 100,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 610,
      openTime: "20:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4138,
        lng: -9.6006
      },
      googleMapsUrl: "https://maps.google.com/?q=Buddha+Bar+Agadir",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212661380208",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://buddhabaragadir.com",
      instagram: "https://instagram.com/buddhabar_agadir",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-mamma-caterina",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["authentic", "charming", "relaxed", "coastal"],
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
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Mamma Caterina",
      neighborhood: "Marina Agadir",
      description: "An authentic Italian trattoria and pizzeria positioned directly on the western quay of Agadir Marina. Known for handmade pastas, genuine Italian-style pizzas, and relaxed quayside dining overlooking the boats.",
      tip: "Order the seafood pasta (Frutti di Mare) and pair it with an Italian Pinot Grigio or chilled Moroccan rosé.",
      badge: "local-favorite",
      bestDishes: [
        "Pasta Frutti di Mare",
        "Authentic Spaghetti Carbonara",
        "Pizza 4 Formaggi",
        "Ossobuco",
        "Homemade Tiramisu"
      ],
      pros: [
        "Genuine Italian chef and authentic recipes rarely found on the coast.",
        "Lovely quayside seating away from heavy pedestrian congestion.",
        "Great wine and beer selection."
      ],
      cons: [
        "Service can be slow during busy summer evenings.",
        "Outdoor seating can be breezy later at night."
      ],
      googleRating: 4.3,
      googleReviewCount: 370,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 250,
      theforkRating: 4.4,
      theforkReviewCount: 80,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 370,
      openTime: "09:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Quai Ouest, Résidence 4 Local NM9, Complexe Marina, Agadir 80000, Morocco",
        lat: 30.4231,
        lng: -9.6175
      },
      googleMapsUrl: "https://maps.google.com/?q=Mamma+Caterina+Marina+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528847061",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/mamma.caterina",
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-ocomptoir-marina",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe & Pastry", "Italian"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["lively", "casual", "coastal", "scenic"],
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
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["breakfast", "late-night", "terrace", "dry", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "O'Comptoir Marina",
      neighborhood: "Marina Agadir",
      description: "A bustling, contemporary waterfront brasserie and café facing the moored luxury yachts. A popular gathering spot for hearty Moroccan breakfast sets, freshly blended fruit smoothies, and relaxed sunset coffee breaks.",
      tip: "Visit in the morning between 08:30 and 11:00 for the traditional Tamazirt breakfast platter directly facing the yachts.",
      badge: "local-favorite",
      bestDishes: [
        "Tamazirt Moroccan Breakfast Platter",
        "Gourmet Beef Burger",
        "Seafood Pizza",
        "Fresh Avocado Smoothie"
      ],
      pros: [
        "Prime waterfront location with broad yacht-basin views.",
        "Very generous and affordable traditional breakfast menus.",
        "Open continuous hours from early morning until 02:00."
      ],
      cons: [
        "Service can be slow during peak afternoon and brunch rushes.",
        "Strictly non-alcoholic venue."
      ],
      googleRating: 3.2,
      googleReviewCount: 310,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 110,
      theforkRating: 3.4,
      theforkReviewCount: 60,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 310,
      openTime: "07:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "N°4, Résidence 15, Route Marina, Complexe Marina, Agadir 80000, Morocco",
        lat: 30.4228,
        lng: -9.6171
      },
      googleMapsUrl: "https://maps.google.com/?q=O+Comptoir+Marina+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212808567024",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/ocomptoiragadir",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-ardoise-gourmande",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["French-Moroccan", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["romantic", "refined", "intimate", "charming"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 24,
      isHalal: false,
      halalStatus: "unknown",
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
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "alcohol", "dinner", "quiet"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "L'Ardoise Gourmande",
      neighborhood: "Secteur Résidentiel",
      description: "An acclaimed French bistronomic jewel operated by Sandrine and Fabrice near the Cité Suisse border. Celebrated for high-precision cooking of fresh Atlantic fish, Burgundy escargots, fine cheeses, and expertly paired French wines.",
      tip: "Book in advance for dinner. Allow Fabrice to select the wine pairing for your Saint-Pierre or beef tenderloin.",
      badge: "splurge",
      bestDishes: [
        "Saint-Pierre aux Noix de Saint-Jacques",
        "Filet de Bœuf Chimichurri",
        "Tartare Asiatique au Guacamole",
        "Escargots de Bourgogne"
      ],
      pros: [
        "Authentic French market-fresh cooking executed with great skill.",
        "Exceptional wine recommendations and hospitality by the hosts.",
        "Calm residential setting away from tourist noise."
      ],
      cons: [
        "Closed on Sundays and Wednesday evenings.",
        "Kitchen closes early (no orders after 22:00)."
      ],
      googleRating: 4.8,
      googleReviewCount: 575,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.7,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 575,
      openTime: "12:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "Immeuble Hasna, Boulevard Hassan II (Face Tribunal Administratif), Agadir 80000, Morocco",
        lat: 30.4229,
        lng: -9.6027
      },
      googleMapsUrl: "https://maps.google.com/?q=L+Ardoise+Gourmande+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528848855",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English"]
    }
  },

  {
    id: "e-agadir-ma-poele",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "couple", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Italian", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["casual", "warm", "lively", "friendly"],
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
      tags: ["late-night", "budget", "dry", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Ma Poêle Smoke House",
      neighborhood: "Secteur Résidentiel",
      description: "A popular wood-fired smokehouse tucked into a quiet square near Avenue des FAR. Famed for its house-smoked meats, tender grilled octopus, artisanal pizzas, and handmade pasta drizzled with herb-infused olive oil.",
      tip: "Try the smoked octopus or the mixed grill platter accompanied by their fragrant spiced rice.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Octopus",
        "Wood-Fired Pizza Ma Poêle",
        "Char-Grilled Kefta Skewers",
        "Herb Oil Pasta"
      ],
      pros: [
        "Unbeatable value for money on slow-smoked and grilled specialties.",
        "Friendly, hardworking staff and quick turnaround.",
        "Open until 01:00 AM daily."
      ],
      cons: [
        "Simple outdoor street terrace without luxury decor.",
        "Strictly non-alcoholic."
      ],
      googleRating: 4.8,
      googleReviewCount: 1190,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 180,
      theforkRating: 4.6,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1190,
      openTime: "11:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Local 18 Immeuble F, Rue de l'Hôtel de Ville, Agadir 80000, Morocco",
        lat: 30.4208,
        lng: -9.5992
      },
      googleMapsUrl: "https://maps.google.com/?q=Ma+Poele+Smoke+House+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212679523257",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://mapoelesmokehouse.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-the-blacksmith",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "family", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Italian", "Moroccan", "International"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["lively", "casual", "warm", "trendy"],
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "budget", "dry", "dinner", "couscous"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Blacksmith Agadir",
      neighborhood: "Talborjt",
      description: "A hugely popular modern grill house and smokehouse situated on Rue des Orangers in Talborjt. Celebrated for its \"Crafted by Fire\" ethos, offering wood-smoked ribs, juicy burgers, flame-baked pizzas, and traditional Friday royal couscous.",
      tip: "Try their signature smoked brisket burger or visit on Friday for their generous beef couscous.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Brisket Burger",
        "Ribeye Steak",
        "Wood-Fired Pizza",
        "Friday Royal Couscous"
      ],
      pros: [
        "Top-tier grill and wood-fired preparations with massive local following.",
        "Generous portion sizes for reasonable prices.",
        "Vibrant atmosphere and prompt kitchen turnaround."
      ],
      cons: [
        "Very busy on weekend evenings; short wait times are common.",
        "Strictly non-alcoholic venue."
      ],
      googleRating: 4.7,
      googleReviewCount: 3880,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 320,
      theforkRating: 4.6,
      theforkReviewCount: 140,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 3880,
      openTime: "12:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "2 Rue des Orangers / Avenue Hassan II, Talborjt, Agadir 80000, Morocco",
        lat: 30.4226,
        lng: -9.601
      },
      googleMapsUrl: "https://maps.google.com/?q=The+Blacksmith+Agadir+Talborjt",
      reservationMethod: ["phone"],
      reservationContact: "+212666540976",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/theblacksmi.th",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-saykouk-rooftop",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["rooftop", "traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["bohemian", "cozy", "melodic", "authentic"],
      crowdLevel: "balanced"
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
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "rooftop", "terrace"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "terrace",
        "budget",
        "dry",
        "dinner",
        "live-music",
        "tagine",
        "couscous"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Saykouk Rooftop",
      neighborhood: "Talborjt",
      description: "A charming bohemian-chic rooftop restaurant nestled in an authentic Talborjt townhouse. Famous for traditional Moroccan family recipes, sunset views toward the Agadir mountains, and acoustic live Gnawa evenings.",
      tip: "Book a rooftop table before sunset to enjoy the mountain view, and ask if a Gnawa acoustic session is scheduled for the night.",
      badge: "hidden-gem",
      bestDishes: [
        "Chicken Rfissa with Msemmen",
        "Lamb Tagine with Prunes",
        "Seafood Pastilla",
        "Friday Couscous"
      ],
      pros: [
        "One of the only authentic rooftop dining spaces inside historic Talborjt.",
        "Warm bohemian ambiance with regular Gnawa musical performances.",
        "Delicious home-cooked Moroccan recipes crafted with fresh spices."
      ],
      cons: [
        "Multi-story staircase climb required to reach the rooftop terrace.",
        "Alcohol-free venue."
      ],
      googleRating: 4.6,
      googleReviewCount: 450,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 80,
      theforkRating: 4.5,
      theforkReviewCount: 40,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 450,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "29 Rue Yacoub El Mansour, Talborjt, Agadir 80000, Morocco",
        lat: 30.4239,
        lng: -9.5947
      },
      googleMapsUrl: "https://maps.google.com/?q=Saykouk+Rooftop+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212660548273",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/saykouk_rooftop",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-yuzaki",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["hidden-gem", "casual"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["stylish", "chic", "trendy", "lively"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["sushi", "fusion", "dry", "dinner", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "YUZAKI",
      neighborhood: "Founty",
      description: "A contemporary Japanese sushi and Asian fusion destination in Agadir Bay. Celebrated for inventive sushi tacos, tempura rolls, and fresh sashimi served in a sleek, vibrant dining room.",
      tip: "Try their signature crispy salmon sushi tacos and rock shrimp tempura rolls.",
      badge: "local-favorite",
      bestDishes: [
        "Salmon Sushi Tacos",
        "Rock Shrimp Rolls",
        "Dragon Roll",
        "Tuna Tartare"
      ],
      pros: [
        "Fresh and innovative Japanese and Asian fusion options.",
        "Sleek, stylish atmosphere in Agadir Bay / Founty.",
        "Prompt service and good delivery coverage."
      ],
      cons: [
        "Can get crowded and noisy during weekend dinner hours.",
        "Alcohol-free establishment."
      ],
      googleRating: 4.3,
      googleReviewCount: 738,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 120,
      theforkRating: 4.4,
      theforkReviewCount: 80,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 738,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Agadir Bay, Founty, Agadir 80000, Morocco",
        lat: 30.4085,
        lng: -9.5682
      },
      googleMapsUrl: "https://maps.google.com/?q=YUZAKI+Agadir+Bay",
      reservationMethod: ["phone"],
      reservationContact: "+212528238389",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/yuzaki_restaurant",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-la-madrague",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Seafood", "French-Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["elegant", "maritime", "scenic", "romantic"],
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
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "fine", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Madrague",
      neighborhood: "Marina Agadir",
      description: "An upscale French and Mediterranean seafood landmark perched right on the northern quay of Agadir Marina. Renowned for its live lobster pool, ocean-facing terrace overlooking luxury yachts, and masterfully prepared fresh Atlantic fish.",
      tip: "Book a quayside terrace table around 19:00 for the sunset glow over the yachts, and ask for the catch of the day from the live seawater tanks.",
      badge: "splurge",
      bestDishes: [
        "Grilled Sea Bass in Herb Crust",
        "Live Atlantic Lobster from the Tank",
        "Sole Meunière",
        "Gratinated Oysters",
        "Classic Chocolate Fondant"
      ],
      pros: [
        "Unobstructed, tranquil view over the moored yachts and marina basin.",
        "Outstanding seafood freshness thanks to live lobster and shellfish tanks on-site.",
        "Refined French wine selection and attentive service."
      ],
      cons: [
        "Premium pricing reflecting its marina waterfront location.",
        "Can get breezy on the terrace during spring and late autumn evenings."
      ],
      googleRating: 4.4,
      googleReviewCount: 980,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 620,
      theforkRating: 4.3,
      theforkReviewCount: 210,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 980,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Quai Nord, Complexe Marina d'Agadir, Agadir 80000, Morocco",
        lat: 30.4233,
        lng: -9.6178
      },
      googleMapsUrl: "https://maps.google.com/?q=La+Madrague+Marina+Agadir",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212528842424",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/la_madrague_ag",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-nazka",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "drinks", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "adventure"],
      vibeTags: ["glamorous", "coastal", "chic", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 45,
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
      ramadanFriendly: "closed",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "sunset", "late-night"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Nazka by Buddha-Bar",
      neighborhood: "Secteur Balnéaire",
      description: "A luxurious Pan-Latin fine-dining beach lounge and private beach club at The View Hotel. Combines oceanfront cabanas, Nikkei ceviches, Wagyu skewers, craft mixology, and sunset DJ sessions.",
      tip: "Book ahead for sunset drinks on the oceanfront deck, or reserve a private beach cabana for day-long food and bottle service.",
      badge: "splurge",
      bestDishes: [
        "Tiradito de Saint-Pierre",
        "Nikkei Tuna Tartare",
        "Wagyu Beef Anticuchos",
        "Passion Fruit Vanilla Cocktail",
        "Churros with Dulce de Leche"
      ],
      pros: [
        "Direct private-beach access with sun loungers, cabanas, and towel service.",
        "Signature Buddha-Bar brand cocktail program and refined Pan-Latin cuisine.",
        "Complimentary valet parking at The View Hotel."
      ],
      cons: [
        "High price point aligned with 5-star palace beach lounges.",
        "Smart casual dress code strictly enforced in the evening."
      ],
      googleRating: 4.6,
      googleReviewCount: 280,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 95,
      theforkRating: 4.5,
      theforkReviewCount: 60,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 280,
      openTime: "10:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "The View Hotel, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4158,
        lng: -9.6022
      },
      googleMapsUrl: "https://maps.google.com/?q=Nazka+by+Buddha-Bar+The+View+Agadir",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212528294040",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://nazkaagadir.com",
      instagram: "https://instagram.com/nazkaagadir",
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-coup-de-foudre",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "drinks", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Seafood", "Mediterranean", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "adventure"],
      vibeTags: ["glamorous", "festive", "scenic", "chic"],
      crowdLevel: "bustling"
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
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "terrace", "alcohol", "dinner"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Coup de Foudre",
      neighborhood: "Secteur Balnéaire",
      description: "A stylish oceanfront restaurant and dinner-show lounge right on the Front de Mer. Blends Mediterranean seafood platters and French gastronomy with an energetic cabaret atmosphere, resident DJs, and late-night service until 02:00.",
      tip: "Book in advance on WhatsApp for the weekend cabaret dinner-show; save room for their creative house desserts.",
      badge: "splurge",
      bestDishes: [
        "Royal Atlantic Seafood Platter",
        "Grilled Tiger Prawns",
        "Slow-Braised Beef Ribs",
        "House Gourmet Pastries"
      ],
      pros: [
        "Vibrant dinner-show entertainment right on the Atlantic promenade.",
        "Open continuously from 11:00 AM until 02:00 AM.",
        "Attentive, guest-oriented floor team."
      ],
      cons: [
        "Music volume turns up significantly later in the evening.",
        "Higher pricing reflecting the dinner-show entertainment package."
      ],
      googleRating: 4.7,
      googleReviewCount: 440,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 180,
      theforkRating: 4.5,
      theforkReviewCount: 85,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 440,
      openTime: "11:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Front de Mer, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4172,
        lng: -9.6028
      },
      googleMapsUrl: "https://maps.google.com/?q=Coup+de+Foudre+Agadir",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212662575711",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://coupdefoudre.ma",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-tapis-rouge",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Seafood", "International"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["cosmopolitan", "refined", "warm", "romantic"],
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["fine", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Tapis Rouge by Little Norway",
      neighborhood: "Secteur Balnéaire",
      description: "A celebrated dining institution set within Complexe Tamlalt opposite Casino Mirage. Blends Nordic and French culinary precision with Moroccan flavors, serving monkfish in mango-coconut sauce, prime beef cuts, and delicate pastillas.",
      tip: "The monkfish in coconut-mango sauce is their signature standout. Make a dinner reservation as it fills up with hotel concierges recommendations.",
      badge: "splurge",
      bestDishes: [
        "Monkfish in Mango-Coconut Sauce",
        "Beef Fillet with Truffle Sauce",
        "Norwegian Trio of Seafood",
        "Seafood Pastilla"
      ],
      pros: [
        "Original fusion of Scandinavian culinary technique and Moroccan seafood.",
        "Consistently polite, long-tenured staff and welcoming owners.",
        "Extensive and thoughtful wine list."
      ],
      cons: [
        "Closed on Mondays.",
        "Located back within the complex arcade rather than having direct beach views."
      ],
      googleRating: 4.5,
      googleReviewCount: 800,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 560,
      theforkRating: 4.4,
      theforkReviewCount: 190,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 800,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Complexe Tamlalt, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4128,
        lng: -9.6002
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Tapis+Rouge+by+Little+Norway+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528840848",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-el-toro",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "adventure"],
      vibeTags: ["lively", "breezy", "casual", "coastal"],
      crowdLevel: "bustling"
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Toro",
      neighborhood: "Secteur Balnéaire",
      description: "A renowned Spanish and Mediterranean beachfront steakhouse on Lot N°7 Front de Mer. Celebrated for dry-aged beef cuts grilled over charcoal embers, genuine seafood paellas, and front-row Atlantic promenade seating.",
      tip: "Order the Valencian seafood paella (cooked fresh to order, takes ~25 mins) while sharing tapas on the terrace.",
      badge: "local-favorite",
      bestDishes: [
        "Dry-Aged T-Bone Steak",
        "Authentic Seafood Paella",
        "Crispy Calamari Platter",
        "Garlic Gambas"
      ],
      pros: [
        "Prime location directly facing the open sandy beach promenade.",
        "Exceptional meat-aging program rarely found in beachfront spots.",
        "Very generous portion sizes for hearty family dinners."
      ],
      cons: [
        "Service can slow down noticeably during peak summer sunset hours.",
        "Terrace can feel breezy when Atlantic winds pick up."
      ],
      googleRating: 4.3,
      googleReviewCount: 2200,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1100,
      theforkRating: 4.2,
      theforkReviewCount: 350,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 2200,
      openTime: "11:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Lot N°7, Front de Mer, Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.4184,
        lng: -9.6025
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Toro+Agadir+Front+de+Mer",
      reservationMethod: ["phone"],
      reservationContact: "+212626469374",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://eltoroagadir.com",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-le-flore",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual"],
      foodStyles: ["Seafood", "French-Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["friendly", "casual", "coastal", "warm"],
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
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le Flore",
      neighborhood: "Secteur Balnéaire",
      description: "A beloved, long-established seafood bistro positioned on Promenade Tawada facing the beach. Famed for its generous ocean platters, fresh Saint-Pierre, tender steaks, and attentive personal hospitality from the owner.",
      tip: "Request an outdoor table right on the promenade railings for prime people-watching and cool ocean breezes during lunch or sunset.",
      badge: "local-favorite",
      bestDishes: [
        "Atlantic Seafood Platter",
        "Grilled Saint-Pierre Fish",
        "Traditional Fish Soup with Rouille",
        "Pepper Steak"
      ],
      pros: [
        "Authentic seaside bistro feel with front-row view of the beach promenade.",
        "Fresh daily seafood catches cooked simply and cleanly.",
        "Full licensed bar serving cold beer and Moroccan wines."
      ],
      cons: [
        "Compact terrace with tables set fairly close together.",
        "Can get busy and bustling around lunch and dinner changeovers."
      ],
      googleRating: 4.4,
      googleReviewCount: 680,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 1350,
      theforkRating: 4.1,
      theforkReviewCount: 320,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 680,
      openTime: "11:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Promenade Tawada, Front de Mer, Secteur Balnéaire, Agadir 80000, Morocco",
        lat: 30.422,
        lng: -9.6085
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Le+Flore+Agadir",
      reservationMethod: ["phone"],
      reservationContact: "+212528848839",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-clay-oven",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["International", "Vegetarian/Vegan"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "nomad"],
      vibeTags: ["warm", "hospitable", "cozy", "flavorful"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["budget", "dry", "dinner", "lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Clay Oven Agadir",
      neighborhood: "Founty (Baie des Palmiers)",
      description: "Agadir's premier authentic Indian table, situated within the Atlantic Ocean View Hotel in Founty. Renowned for its genuine tandoor oven cooking, aromatic butter chicken, garlic cheese naans, and rich biryanis.",
      tip: "Portions are very generous and meant for sharing. The kitchen happily dials the spice heat up or down upon request, making it ideal for families.",
      badge: "local-favorite",
      bestDishes: [
        "Butter Chicken",
        "Chicken Tikka Masala",
        "Garlic Cheese Naan",
        "Lamb Biryani",
        "Tandoori Mixed Grill Platter"
      ],
      pros: [
        "Uncompromising authentic Indian flavors and tandoor-baked flatbreads.",
        "Extensive vegetarian menu options.",
        "Clean, tastefully decorated interior with friendly, attentive staff."
      ],
      cons: [
        "Strictly alcohol-free establishment.",
        "Located inside a hotel premises slightly back from the beachfront strip."
      ],
      googleRating: 4.8,
      googleReviewCount: 540,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 140,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 540,
      openTime: "12:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Hôtel Atlantic Ocean View, Boulevard de Oued Souss, Founty (Baie des Palmiers), Agadir 80000, Morocco",
        lat: 30.4042,
        lng: -9.5895
      },
      googleMapsUrl: "https://maps.google.com/?q=Clay+Oven+Agadir+Founty",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212642100010",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://clayoven.ma",
      instagram: "https://instagram.com/clayoven.agadir",
      languagesSpoken: ["English", "French", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-vanisca",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Seafood", "Italian", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["stylish", "chic", "romantic", "refined"],
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
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["late-night", "budget", "dry", "dinner", "seafood"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Vanisca",
      neighborhood: "Founty (Baie des Palmiers)",
      description: "A stylish and romantic culinary favorite located in the Sonaba sector of Agadir Bay / Founty. Celebrated for slow-braised lamb shank with orange glaze, fresh Saint-Pierre in bisque, seafood risotto, and an upscale contemporary decor.",
      tip: "The 7-hour confit lamb shank with orange sauce is the house signature. Open without break until 01:30 AM, making it great for late-night quality dinners.",
      badge: "local-favorite",
      bestDishes: [
        "Confit Lamb Shank with Orange Glaze",
        "Seafood Risotto",
        "Saint-Pierre Fillet in Prawn Bisque",
        "Gambas Pil-Pil",
        "San Sebastian Cheesecake"
      ],
      pros: [
        "Flawless culinary presentation and high-tier cooking technique.",
        "Warm and polite floor staff who take time to explain each dish.",
        "Late-night kitchen operating smoothly until 01:30 AM."
      ],
      cons: [
        "Alcohol-free venue.",
        "Popular with locals and tourists alike; peak dinner hours can require short waits."
      ],
      googleRating: 4.8,
      googleReviewCount: 2220,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 310,
      theforkRating: 4.6,
      theforkReviewCount: 150,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2220,
      openTime: "12:00",
      closeTime: "01:30",
      exactAddressAndCoordinates: {
        address: "Imm. Mimosas, Avenue El Houssine Achengli, Sonaba, Founty (Baie des Palmiers), Agadir 80000, Morocco",
        lat: 30.4068,
        lng: -9.5855
      },
      googleMapsUrl: "https://maps.google.com/?q=Vanisca+Agadir+Bay",
      reservationMethod: ["phone"],
      reservationContact: "+212528237777",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "not-available",
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-little-italy",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "Seafood", "Mediterranean"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["authentic", "charming", "relaxed", "friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["credit_card", "cash"],
      tags: ["terrace", "alcohol", "dinner", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Little Italy",
      neighborhood: "Secteur Résidentiel (Suisse)",
      description: "Agadir's reference Italian trattoria since 2004, situated on Avenue Hassan II facing Place Al Amal. Chef Fabrizio Anzini cooks authentic thin-crust wood-fired pizzas, handmade pastas, vitello tonnato, and an acclaimed pistachio tiramisu.",
      tip: "Save room for their signature pistachio tiramisu; pair your meal with a crisp Italian Pinot Grigio or chilled Moroccan gris wine.",
      badge: "local-favorite",
      bestDishes: [
        "Wood-Fired Pizza Regina",
        "Spaghetti alle Vongole",
        "Trio del Mare",
        "Vitello Tonnato",
        "Pistachio Tiramisu"
      ],
      pros: [
        "Genuinely authentic Italian cuisine supervised by Italian chef-owner Fabrizio Anzini.",
        "Thin, crispy crust pizzas baked in a true wood-fired brick oven.",
        "Full wine and beer license with pleasant indoor and shaded terrace seating."
      ],
      cons: [
        "Parking right along Avenue Hassan II can be tricky during rush hours.",
        "Split service rush during weekend evenings."
      ],
      googleRating: 4.3,
      googleReviewCount: 760,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 420,
      theforkRating: 4.3,
      theforkReviewCount: 180,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 760,
      openTime: "12:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Avenue Hassan II (En face de Place Al Amal), Secteur Résidentiel (Suisse), Agadir 80000, Morocco",
        lat: 30.4208,
        lng: -9.5998
      },
      googleMapsUrl: "https://maps.google.com/?q=Little+Italy+Agadir",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212528820039",
      whatsappNumber: "",
      bookingUrl: "",
      website: "https://www.littleitalyagadir.com",
      instagram: "https://instagram.com/littleitaly_agadir",
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-agadir-rafiq",
    city: "agadir",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "family", "friends", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Berber", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "nomad"],
      vibeTags: ["authentic", "homestyle", "bustling", "hospitable"],
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
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["tagine", "couscous", "budget", "dry", "dinner", "breakfast"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Rafiq",
      neighborhood: "Nouveau Talborjt",
      description: "A beloved local Moroccan culinary institution located in Immeuble Assoulil on Boulevard Hassan II. Cherished for honest, deeply authentic Souss cooking, sizzling kefta tagines with eggs, Friday royal couscous, and traditional rfissa.",
      tip: "Unmatched value for money in downtown Agadir. Visit on Friday for their famous couscous, or order the bubbling kefta tagine with a fresh pot of mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Kefta Tagine with Egg",
        "Chicken Rfissa with Trid",
        "Friday Souss Couscous",
        "Charcoal Kefta Brochettes",
        "Traditional Harira Soup"
      ],
      pros: [
        "Consistently authentic and affordable home-style Moroccan recipes.",
        "Welcoming, fast, and hardworking service staff with great local following.",
        "Open non-stop from 07:00 AM breakfast through late dinner."
      ],
      cons: [
        "Cash only; cards are not accepted.",
        "Dining room fills quickly at lunchtime during Friday couscous."
      ],
      googleRating: 4.5,
      googleReviewCount: 1960,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 380,
      theforkRating: 4.4,
      theforkReviewCount: 110,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1960,
      openTime: "07:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Immeuble Assoulil, Boulevard Hassan II, Nouveau Talborjt, Agadir 80000, Morocco",
        lat: 30.4221,
        lng: -9.5975
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Rafiq+Agadir",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212528842537",
      whatsappNumber: "",
      bookingUrl: "",
      website: "not-available",
      instagram: "https://instagram.com/restaurant_rafiq",
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  }
];
