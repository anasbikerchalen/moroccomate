/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: TODRA DADES
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-todra_dades-1' or 'eat-todra_dades-restaurant')
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
 *   id: 'e-todra_dades-[id]',
 *   city: 'todra_dades',
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

export const todra_dadesEat: EatListing[] = [
  {
    id: 'e-todra_dades-1',
    city: 'todra_dades',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'lean',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'afternoon-tea'],
      experienceTypes: ['casual', 'traditional', 'cafes-tea'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Grill & BBQ'],
      cuisineTags: ['moroccan-traditional', 'cafe-pastry'],
      archetypeAffinity: ['budget', 'adventure', 'culture'],
      vibeTags: ['oasis', 'authentic', 'scenic'],
      crowdLevel: 'balanced'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: 'likely-halal-food',
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: 'dry',
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
      paymentMethods: ['cash'],
      tags: [
        'moroccan',
        'halal',
        'vegetarian',
        'dry',
        'budget',
        'breakfast',
        'lunch',
        'dinner',
        'afternoon-tea',
        'terrace',
        'parking',
        'family',
        'couple',
        'local-favorite'
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: 'verified',
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: 'Café Restaurant Source des Poissons Sacrés',
      neighborhood: 'Toudgha El Oulia / Tinghir',
      description:
        "Shaded oasis cafe and restaurant right beside the Sacred Fish Spring along the R703 road toward Todgha Gorge, serving freshly grilled skewers, clay-pot tagines, breakfast, date juice, and mint tea by the palm grove.",
      tip: 'Pair lunch or mint tea with a walk straight from the spring into the shaded Tinghir palmery paths.',
      badge: 'local-favorite',
      bestDishes: [
        'Traditional Moroccan Tagines',
        'Grilled Lamb & Chicken Skewers',
        'Berber Breakfast & Fresh Khobz',
        'Mint Tea & Local Date Juice'
      ],
      pros: [
        'Unique oasis setting right next to the historic Sacred Fish Spring',
        'Very affordable pricing and early 08:00 opening for Todgha Gorge visitors',
        'Roadside parking access along the R703 palmery edge'
      ],
      cons: [
        'Cash only and no Wi-Fi',
        'Simple outdoor/terrace setup without air conditioning'
      ],
      googleRating: 4.9,
      googleReviewCount: 600,
      openTime: '08:00',
      closeTime: '22:00',
      exactAddressAndCoordinates: {
        address: 'R703, Toudgha El Oulia, Tinghir, Morocco',
        lat: 31.55458,
        lng: -5.58513
      },
      googleMapsUrl: 'https://maps.google.com/?q=31.55458,-5.58513',
      reservationMethod: ['phone', 'walk-in'],
      reservationContact: '+212 667 465 790',
      bookingUrl: '',
      whatsappNumber: '+212667465790',
      website: 'not-available',
      instagram: 'not-available',
      viewType: 'garden',
      bestTimeToVisit: 'Morning coffee or relaxed midday lunch before entering Todgha Gorge',
      averageWaitMinutes: 15
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: '~70–120 MAD, Great Value',
        tagColor: 'money',
        tone: 'good',
        description:
          'Low-cost ~70–120 MAD tagines and skewers with generous portions and often complimentary bread, olives, dates, and mint tea; cash only.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Cooked Fresh, Bottled Water',
        tagColor: 'water',
        tone: 'good',
        description:
          'Rustic open-air oasis café where meals are cooked fresh to order; stick to sealed bottled water or tea rather than natural spring water.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Home-Style Oasis Kitchen',
        tagColor: 'food',
        tone: 'good',
        description:
          'Authentic southern Moroccan tagines, Berber omelettes, brochettes, and local date juice served right beside the Tinghir palm grove.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Shaded Palm Pond Tables',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Peaceful, rustic tables shaded by palms beside the sacred fish pond without tout pressure (open-air setting with no A/C).',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Warm, Non-Pushy Host',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Host Abdell is widely praised for kind, attentive, unhurried hospitality without any sales pressure.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: 'e-todra_dades-2',
    city: 'todra_dades',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'balanced',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'afternoon-tea'],
      experienceTypes: ['rooftop', 'casual', 'traditional'],
      foodStyles: ['Moroccan', 'Tagine & Couscous', 'Cafe & Pastry'],
      cuisineTags: ['moroccan-traditional', 'cafe-pastry'],
      archetypeAffinity: ['first-timer', 'adventure', 'culture'],
      vibeTags: ['panoramic', 'rooftop', 'scenic'],
      crowdLevel: 'balanced'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 10,
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
      seatingTypes: ['indoor', 'rooftop', 'terrace'],
      paymentMethods: ['cash'],
      tags: [
        'moroccan',
        'halal',
        'vegetarian',
        'dry',
        'breakfast',
        'lunch',
        'dinner',
        'afternoon-tea',
        'rooftop',
        'terrace',
        'parking',
        'family',
        'couple',
        'local-favorite',
        'wifi'
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: 'verified',
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: 'Restaurant Rooftop Atlas Dades',
      neighborhood: 'Boumalne Dadès / N10',
      description:
        "Panoramic rooftop cafe and restaurant along Avenue Mohammed V (N10) in Boumalne Dadès, offering sweeping views across the Dades Valley and High Atlas peaks alongside Moroccan tagines, couscous, soups, and light café fare.",
      tip: 'Head up to the upper rooftop terrace in the late afternoon for clear valley light and sunset views.',
      badge: 'local-favorite',
      bestDishes: [
        'Slow-Cooked Moroccan Tagine',
        'Vegetable & Meat Couscous',
        'Traditional Moroccan Harira Soup',
        'Fresh Mint Tea & Crêpes'
      ],
      pros: [
        'Wide panoramic rooftop views over Boumalne Dadès and the valley',
        'Long daily hours from 06:00 to 23:30 for early road-trip departures',
        'Convenient central stop right on the N10 route'
      ],
      cons: [
        'Service can slow down during midday tour stops',
        'Rooftop stairs mean limited accessibility'
      ],
      googleRating: 4.6,
      googleReviewCount: 800,
      openTime: '06:00',
      closeTime: '23:30',
      exactAddressAndCoordinates: {
        address: 'Avenue Mohammed V (N10), Boumalne Dadès 45150, Morocco',
        lat: 31.3620,
        lng: -5.9890
      },
      googleMapsUrl: 'https://maps.google.com/?q=Restaurant+Rooftop+Atlas+Dades+Boumalne+Dades',
      reservationMethod: ['phone', 'walk-in'],
      reservationContact: '+212 658 669 292',
      bookingUrl: '',
      whatsappNumber: '+212658669292',
      website: 'not-available',
      instagram: 'not-available',
      viewType: 'mountain',
      bestTimeToVisit: 'Late afternoon for rooftop sunset views over the Dades Valley',
      averageWaitMinutes: 20
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: 'Budget Regional Stop (Cash)',
        tagColor: 'money',
        tone: 'good',
        description:
          'Affordable Boumalne Dadès pricing for Moroccan mains and café snacks; carry cash (MAD) since card terminals can be unavailable.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Clean Spaces, Bottled Water',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Terrace and guesthouse spaces score well for cleanliness, though a few diners note rushed peak-time prep; drink bottled water rather than tap.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Tagines & Roadside Café',
        tagColor: 'food',
        tone: 'good',
        description:
          'Serves classic Moroccan tagines, couscous, and harira soup alongside quick traveler snacks like paninis, fries, and crêpes.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Panoramic N10 Rooftop',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Wide Dades Valley views from the open rooftop above Avenue Mohammed V; rooftop stair access limits accessibility.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Can Slow at Peak/Early Hours',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Friendly multilingual staff, though group stops or early-morning breakfasts before CTM bus departures can bring slight waits.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
