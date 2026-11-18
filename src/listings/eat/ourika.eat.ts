/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: OURIKA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-ourika-1' or 'eat-ourika-restaurant')
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
 *   id: 'e-ourika-[id]',
 *   city: 'ourika',
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

export const ourikaEat: EatListing[] = [
  {
    id: 'e-ourika-1',
    city: 'ourika',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'balanced',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner'],
      experienceTypes: ['traditional', 'casual', 'hidden-gem'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Grill & BBQ'],
      cuisineTags: ['moroccan-traditional'],
      archetypeAffinity: ['culture', 'first-timer', 'adventure'],
      vibeTags: ['mountain', 'tranquil', 'authentic'],
      crowdLevel: 'balanced'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 15,
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
        'breakfast',
        'lunch',
        'dinner',
        'terrace',
        'parking',
        'family',
        'couple',
        'hidden-gem',
        'local-favorite',
        'wifi'
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: 'verified',
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: 'Auberge Le Maquis',
      neighborhood: 'Aghbalou / Km 45',
      description:
        "Mountain auberge and restaurant along the Ourika Valley at Km 45, known for slow-cooked Berber tagines, lamb with prunes or seasonal quinces, couscous, and shaded terrace views over the High Atlas slopes.",
      tip: 'Call ahead to reserve a garden terrace table on weekends when Marrakech day-trippers fill the valley.',
      badge: 'local-favorite',
      bestDishes: [
        'Lamb Tagine with Prunes & Almonds',
        'Seasonal Quince Beef Tagine',
        'Seven-Vegetable Couscous',
        'Moroccan Salads & Fresh Crêpes'
      ],
      pros: [
        'Peaceful mountain garden setting away from the busiest Setti Fatma crowds',
        'Freshly prepared traditional Berber tagines and grilled meats',
        'On-site parking along Route de l’Ourika'
      ],
      cons: [
        'Cash preferred for meal settlement',
        'Slow-cooked dishes can take 30–40 minutes if not ordered ahead'
      ],
      googleRating: 4.6,
      googleReviewCount: 300,
      openTime: '08:30',
      closeTime: '22:00',
      exactAddressAndCoordinates: {
        address: "Km 45, Route de l'Ourika, Aghbalou 42452, Morocco",
        lat: 31.2580,
        lng: -7.7720
      },
      googleMapsUrl: 'https://maps.google.com/?q=Auberge+Le+Maquis+Ourika',
      reservationMethod: ['phone', 'website', 'walk-in'],
      reservationContact: '+212 661 347 841',
      bookingUrl: 'https://www.auberge-lemaquis.com',
      whatsappNumber: '+212661347841',
      website: 'https://www.auberge-lemaquis.com',
      instagram: 'not-available',
      viewType: 'mountain',
      bestTimeToVisit: 'Midday lunch on the shaded terrace',
      averageWaitMinutes: 25
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: '~80–140 MAD Mains (Cash)',
        tagColor: 'money',
        tone: 'good',
        description:
          'Individual tagines average ~80–140 MAD (~98–240 MAD full multi-course meal); carry Moroccan Dirhams in cash as rural auberges prefer cash.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Spotless & Bottled Water',
        tagColor: 'water',
        tone: 'good',
        description:
          'Established boutique inn routinely described as spotless; sealed bottled mineral water (Sidi Ali or Oulmès) is served instead of rural tap water.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Fresh Berber Tagines',
        tagColor: 'food',
        tone: 'good',
        description:
          'Traditional slow-cooked lamb with prunes, seasonal quince tagines, and Friday house-made couscous prepared with local valley produce.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Peaceful 5,000 m² Garden',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Quiet hillside garden, poolside terrace, and winter fireplace sheltered from the busy roadside stalls further up toward Setti Fatma.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: '30–40 Min Fresh Prep',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Warm, attentive hospitality, though freshly cooked tagines take 30–40 minutes unless ordered ahead by phone.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: 'e-ourika-2',
    city: 'ourika',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'balanced',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'large-groups', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'drinks'],
      experienceTypes: ['casual', 'traditional'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous'],
      cuisineTags: ['moroccan-traditional'],
      archetypeAffinity: ['first-timer', 'culture'],
      vibeTags: ['riverside', 'garden', 'authentic'],
      crowdLevel: 'balanced'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 14,
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
      paymentMethods: ['cash'],
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
      name: 'Chez Larbi Ourika',
      neighborhood: 'Aghbalou / Km 46',
      description:
        "Long-standing Ourika Valley restaurant and maison d'hôtes in Aghbalou with tree-shaded riverside garden tables, serving family-style Berber tagines, pastillas, tangia, and local wines.",
      tip: 'Ask for a garden table under the trees beside the stream for the coolest afternoon seating.',
      badge: 'local-favorite',
      bestDishes: [
        'Beef Tagine with Quinces',
        'Chicken & Almond Pastilla',
        'Berber Kefta & Tangia',
        'Artisan Moroccan Salad Spread'
      ],
      pros: [
        'Shaded riverside garden setting ideal for warm-weather lunches',
        'Licensed bar serving Moroccan wines and cold beer',
        'Ingredients sourced directly from nearby Aghbalou farms and souks'
      ],
      cons: [
        'Closes relatively early at 21:00 compared to Marrakech city restaurants',
        'Busy on sunny weekend afternoons'
      ],
      googleRating: 4.6,
      googleReviewCount: 200,
      openTime: '10:00',
      closeTime: '21:00',
      exactAddressAndCoordinates: {
        address: "Km 46, Village Aghbalou, Route de l'Ourika 42452, Morocco",
        lat: 31.2535,
        lng: -7.7665
      },
      googleMapsUrl: 'https://maps.google.com/?q=Chez+Larbi+Ourika+Aghbalou',
      reservationMethod: ['phone', 'website', 'walk-in'],
      reservationContact: '+212 661 342 392',
      bookingUrl: 'https://chezlarbiourika.com',
      whatsappNumber: '+212661342392',
      website: 'https://chezlarbiourika.com',
      instagram: 'not-available',
      viewType: 'garden',
      bestTimeToVisit: 'Lunch between 12:30 and 15:00 in the garden',
      averageWaitMinutes: 20
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: '~90–140 MAD Mains',
        tagColor: 'money',
        tone: 'good',
        description:
          'Mid-range Ourika Valley pricing (~90–140 MAD mains; ~100–200 MAD full meal); wine and beer from the licensed bar add to the final bill.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Clean Inn & Bottled Water',
        tagColor: 'water',
        tone: 'good',
        description:
          "Long-standing maison d'hôtes noted for clean dining areas and kitchen care; sealed bottled mineral water is provided for table use.",
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Generational Family Recipes',
        tagColor: 'food',
        tone: 'good',
        description:
          'Authentic Berber tagines (beef with quinces or prunes), pastilla, and tangia made with ingredients sourced from Aghbalou farms and local souks.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Cool Shaded River Garden',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Tree-shaded riverside garden tables that stay naturally cool in summer; sunny weekend afternoons attract more Marrakech day-trippers.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Friendly Hosts, Closes 21:00',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Gracious hospitality led by the family hosts; closes around 21:00 so it is best suited for lunch or an early dinner.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
