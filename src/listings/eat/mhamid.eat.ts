/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: MHAMID
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-mhamid-1' or 'eat-mhamid-restaurant')
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
 *   id: 'e-mhamid-[id]',
 *   city: 'mhamid',
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

export const mhamidEat: EatListing[] = [
  {
    id: 'e-mhamid-1',
    city: 'mhamid',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'balanced',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner'],
      experienceTypes: ['casual', 'traditional'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Grill & BBQ'],
      cuisineTags: ['moroccan-traditional'],
      archetypeAffinity: ['first-timer', 'culture', 'adventure'],
      vibeTags: ['authentic', 'tranquil', 'oasis'],
      crowdLevel: 'quiet'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 12,
      isHalal: true,
      halalStatus: 'likely-halal-food',
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: 'dry',
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: 'serves-lunch',
      closedDays: [],
      seatingTypes: ['indoor', 'terrace', 'courtyard'],
      paymentMethods: ['cash'],
      tags: [
        'moroccan',
        'halal',
        'vegetarian',
        'dry',
        'breakfast',
        'lunch',
        'dinner',
        'terrace',
        'courtyard',
        'parking',
        'family',
        'couple',
        'local-favorite',
        'wifi',
        'ac'
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: 'verified',
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: 'Restaurant Kasbah Riad Amnir',
      neighborhood: "Centre M'Hamid",
      description:
        "Family-run kasbah restaurant at the entrance of M'Hamid El Ghizlane, serving traditional Saharan and Moroccan fare in an indoor dining salon and garden terrace beside the pool.",
      tip: 'Call ahead if arriving for dinner as a non-resident so the kitchen can prepare slow-cooked tagines fresh for your arrival.',
      badge: 'local-favorite',
      bestDishes: [
        'Traditional Moroccan Tagines',
        'Friday Vegetable & Meat Couscous',
        'Grilled Brochettes with Fresh Bread',
        'Daily Moroccan Buffet Breakfast'
      ],
      pros: [
        'Calm garden terrace and poolside seating sheltered from desert heat',
        'Welcoming family-run hospitality at the edge of town',
        'On-site parking for travelers heading toward Erg Chigaga'
      ],
      cons: [
        'Located slightly off the main oasis road; reservation recommended for non-guests',
        'Does not serve alcohol'
      ],
      googleRating: 4.8,
      googleReviewCount: 37,
      tripadvisorRating: 5.0,
      tripadvisorReviewCount: 27,
      openTime: '07:30',
      closeTime: '22:00',
      exactAddressAndCoordinates: {
        address: "Centre M'Hamid El Ghizlane, Zagora 47402, Morocco",
        lat: 29.8275,
        lng: -5.7255
      },
      googleMapsUrl: 'https://maps.google.com/?q=Hotel+Kasbah+Riad+Amnir+Mhamid+El+Ghizlane',
      reservationMethod: ['phone', 'whatsapp', 'website'],
      reservationContact: '+212 614 488 901',
      bookingUrl: 'https://www.riadamnir.com',
      whatsappNumber: '+212614488901',
      website: 'https://www.riadamnir.com',
      instagram: 'not-available',
      viewType: 'courtyard',
      bestTimeToVisit: 'Evening around 19:30 for poolside dinner',
      averageWaitMinutes: 20
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: 'Set Menu ~100–200 MAD',
        tagColor: 'money',
        tone: 'good',
        description:
          'Traditional fixed lunches and dinners typically range from 100 to 200 MAD per person; confirm non-resident meal pricing when reserving ahead.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'High Cleanliness, Bottled Water',
        tagColor: 'water',
        tone: 'good',
        description:
          "Cleanliness scores average ~8.9/10 across guest platforms. Tap water in M'Hamid is not potable, so sealed bottled mineral water is provided on site.",
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Homemade Kasbah Kitchen',
        tagColor: 'food',
        tone: 'good',
        description:
          'Traditional Moroccan harira soup, slow-cooked tagines, couscous, and seasonal fruit prepared fresh in the family kasbah kitchen.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Quiet Poolside Kasbah',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Peaceful indoor dining salon and garden terrace beside the pool near the town entrance, completely free from street touts.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Warm Family Hospitality',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Family-run team praised for attentive, welcoming service; call ahead if dining as a non-resident so fresh tagines are ready on time.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: 'e-mhamid-2',
    city: 'mhamid',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'balanced',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'large-groups', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'drinks'],
      experienceTypes: ['traditional', 'casual'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Mediterranean'],
      cuisineTags: ['moroccan-traditional', 'international'],
      archetypeAffinity: ['culture', 'first-timer', 'adventure'],
      vibeTags: ['oasis', 'berber', 'authentic'],
      crowdLevel: 'balanced'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: 'likely-halal-food',
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: 'serves-alcohol',
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: 'serves-lunch',
      closedDays: [],
      seatingTypes: ['indoor', 'outdoor', 'terrace'],
      paymentMethods: ['cash', 'credit_card', 'visa', 'mastercard'],
      tags: [
        'moroccan',
        'halal',
        'vegetarian',
        'alcohol',
        'drinks',
        'breakfast',
        'lunch',
        'dinner',
        'terrace',
        'parking',
        'family',
        'couple',
        'local-favorite',
        'wifi',
        'ac'
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: 'verified',
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: 'Restaurant Chez Le Pacha',
      neighborhood: 'Palmeraie / Douar Bounou',
      description:
        "Set inside a 3-hectare palm grove near Ouled Driss, Chez Le Pacha offers dining in its Tidri salon, under caidal Berber tents at Tedmore, or by the pool, pairing Drâa Valley cuisine with local Moroccan wines.",
      tip: 'Ask for traditional desert bread baked in sand and palm fronds, and book ahead if visiting for dinner from a desert camp.',
      badge: 'local-favorite',
      bestDishes: [
        'Sand-Baked Nomad Bread with Tagine',
        'Drâa Valley Lamb & Vegetable Tagine',
        'Moroccan Couscous Royale',
        'Café Maur Mint Tea & Pastries'
      ],
      pros: [
        'Multiple distinct spaces including Tidri dining hall and Tedmore Berber tents',
        'Licensed to serve local Moroccan wines and beer alongside meals',
        'Spacious palm-grove setting with pool access and easy parking'
      ],
      cons: [
        'Located in the palm grove outside the village center (short drive from M’Hamid)',
        'Ratings reflect mixed feedback during peak group-tour lunches'
      ],
      googleRating: 4.2,
      googleReviewCount: 318,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 311,
      openTime: '07:30',
      closeTime: '22:30',
      exactAddressAndCoordinates: {
        address: "Palmeraie de M'Hamid, Douar Bounou / Ouled Driss, M'Hamid El Ghizlane, Morocco",
        lat: 29.8240,
        lng: -5.6680
      },
      googleMapsUrl: 'https://maps.google.com/?q=Chez+Le+Pacha+Mhamid+El+Ghizlane',
      reservationMethod: ['phone', 'website', 'walk-in'],
      reservationContact: '+212 524 848 207',
      bookingUrl: 'https://chezlepacha.com',
      whatsappNumber: '',
      website: 'https://chezlepacha.com',
      instagram: 'not-available',
      viewType: 'garden',
      bestTimeToVisit: 'Sunset into dinner in the palm grove',
      averageWaitMinutes: 20
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: '~120–250 MAD Sit-Down',
        tagColor: 'money',
        tone: 'good',
        description:
          'Sit-down meals typically average 120–250 MAD per person; local Moroccan wines and bar beverages are billed separately.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Bottled Water Essential',
        tagColor: 'water',
        tone: 'good',
        description:
          "Property cleanliness averages ~8.2–8.5/10. Local M'Hamid well/tap water is unsafe to drink, so stick to sealed bottled water stocked at the bar.",
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Drâa Valley Cuisine',
        tagColor: 'food',
        tone: 'good',
        description:
          'Serves traditional Moroccan tagines, sand-baked desert bread, and regional specialties across the Tidri hall and Tedmore Berber tents.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Spacious Palm Grove',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Relaxing 3-hectare palm oasis grounds away from town noise, though outdoor desert paths can get dusty in desert winds.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Relaxed Oasis Pace',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Friendly, laid-back staff experienced with desert travelers; tour-group lunch stops can occasionally extend wait times.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
