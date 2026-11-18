/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: OUZOUD
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-ouzoud-1' or 'eat-ouzoud-restaurant')
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
 *   id: 'e-ouzoud-[id]',
 *   city: 'ouzoud',
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

export const ouzoudEat: EatListing[] = [
  {
    id: 'e-ouzoud-1',
    city: 'ouzoud',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'lean',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'large-groups', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'afternoon-tea'],
      experienceTypes: ['casual', 'traditional'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Grill & BBQ'],
      cuisineTags: ['moroccan-traditional'],
      archetypeAffinity: ['budget', 'first-timer', 'adventure'],
      vibeTags: ['authentic', 'relaxed', 'scenic'],
      crowdLevel: 'bustling'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: 'likely-halal-food',
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: 'dry',
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
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
      name: 'Chez Mounir',
      neighborhood: "Cascades d'Ouzoud",
      description:
        "Popular family-run restaurant tucked along the waterfall path in Ouzoud, known for affordable set menus featuring slow-simmered chicken and vegetable tagines, grilled brochettes, Moroccan salads, and fresh orange juice.",
      tip: 'Bring cash in Moroccan Dirhams (cards are not accepted) and confirm whether you want the ~80–100 MAD set lunch menu or à la carte.',
      badge: 'local-favorite',
      bestDishes: [
        'Chicken Tagine with Plums & Raisins',
        'Chicken Brochettes & Fries',
        'Vegetable Couscous',
        'Fresh Orange Juice & Mint Tea'
      ],
      pros: [
        'Transparent, budget-friendly Moroccan set menus (~80–100 MAD)',
        'Friendly service right along the waterfall walking route',
        'Welcoming for solo travelers and hiking groups'
      ],
      cons: [
        'Cash only — bring MAD before descending into the gorge',
        'Can feel lively during midday excursion hours'
      ],
      googleRating: 4.9,
      googleReviewCount: 700,
      openTime: '09:00',
      closeTime: '22:00',
      exactAddressAndCoordinates: {
        address: "Cascades d'Ouzoud, Tanaghmeilt, Azilal Province, Morocco",
        lat: 32.01387,
        lng: -6.71988
      },
      googleMapsUrl: 'https://maps.google.com/?q=32.01387,-6.71988',
      reservationMethod: ['phone', 'walk-in'],
      reservationContact: '+212 659 408 920',
      bookingUrl: '',
      whatsappNumber: '',
      website: 'not-available',
      instagram: 'not-available',
      viewType: 'waterfall',
      bestTimeToVisit: 'Early lunch before 12:30 or late afternoon after tour groups leave',
      averageWaitMinutes: 20,
      menu: {
        currency: 'MAD',
        lastUpdated: '2026-11',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'set-menus',
            title: 'Set Menus & Moroccan Mains',
            description: 'Published fixed-menu pricing reported by visitors (cash only in MAD)',
            items: [
              {
                id: 'mounir-m-1',
                name: 'Complete Set Lunch Menu',
                description:
                  'Moroccan salad starter, fresh local bread, choice of chicken/vegetable tagine, couscous, or skewers, bottled water, pastries, and mint tea.',
                price: 100,
                isSignature: true,
                dietary: ['halal'],
                portionNotes: 'Full multi-course set meal per person'
              },
              {
                id: 'mounir-m-2',
                name: 'Standard Tagine or Couscous Menu',
                description:
                  'Basic main selection such as chicken tagine with preserved lemon and olives, vegetable couscous, or grilled skewers with fresh bread.',
                price: 80,
                dietary: ['halal', 'vegetarian']
              }
            ]
          }
        ]
      }
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: '100 MAD Set Menu (Cash)',
        tagColor: 'money',
        tone: 'good',
        description:
          'Honest ~80–100 MAD pricing (100 MAD full set lunch with salad, main, bottled water, and tea) with zero guide commissions; bring cash.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Fresh Kitchen, Bottled Water',
        tagColor: 'water',
        tone: 'good',
        description:
          'Praised by travelers for fresh home-style prep and clean hygiene compared to high-turnover falls stalls; bottled water is included in the set menu.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Family-Cooked Classics',
        tagColor: 'food',
        tone: 'good',
        description:
          'Authentic homemade chicken/lamb tagines, couscous, brochettes, and fresh orange juice without tourist-trap shortcuts.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Calm Inside, Arrival Touts',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Zero pressure inside from Mounir and family, but use offline maps and politely decline fake guides on Ouzoud approach roads.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Warm Multilingual Hosts',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Friendly, multilingual family hospitality; allow extra time during lively midday tour rushes.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: 'e-ouzoud-2',
    city: 'ouzoud',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'balanced',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'seniors', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'afternoon-tea'],
      experienceTypes: ['casual', 'traditional'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Mediterranean'],
      cuisineTags: ['moroccan-traditional'],
      archetypeAffinity: ['first-timer', 'culture', 'adventure'],
      vibeTags: ['scenic', 'terrace', 'authentic'],
      crowdLevel: 'balanced'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: 'likely-halal-food',
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: 'dry',
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
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
        'afternoon-tea',
        'terrace',
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
      name: 'Restaurant Chez Rachid',
      neighborhood: "Douar Amazir / Cascades d'Ouzoud",
      description:
        "Terrace restaurant and guesthouse (Dar Rachid) overlooking the Ouzoud waterfall access paths, serving kefta and lamb tagines, Berber omelettes, mixed skewers, and traditional Moroccan breakfasts.",
      tip: 'Stop by in the morning for a peaceful Moroccan breakfast on the terrace before the midday waterfall crowds arrive.',
      badge: 'local-favorite',
      bestDishes: [
        'Kefta & Egg Tagine',
        'Lamb Tagine with Prunes & Almonds',
        'Mixed Meat Brochettes',
        'Traditional Moroccan Breakfast'
      ],
      pros: [
        'Open-air terrace seating overlooking the Ouzoud gorge paths',
        'Open early from 08:30 for hikers wanting breakfast before exploring',
        'Family-friendly portions with fresh salads and local bread'
      ],
      cons: [
        'Reached on foot along stepped waterfall paths (not accessible by car)',
        'Cash only and dry policy'
      ],
      googleRating: 4.6,
      googleReviewCount: 400,
      openTime: '08:30',
      closeTime: '21:30',
      exactAddressAndCoordinates: {
        address: "Chemin des Cascades, Douar Amazir, Ouzoud 22000, Morocco",
        lat: 32.0152,
        lng: -6.7189
      },
      googleMapsUrl: 'https://maps.google.com/?q=Dar+Rachid+Ouzoud',
      reservationMethod: ['phone', 'walk-in'],
      reservationContact: '+212 625 391 613',
      bookingUrl: '',
      whatsappNumber: '+212625391613',
      website: 'not-available',
      instagram: 'not-available',
      viewType: 'waterfall',
      bestTimeToVisit: 'Morning breakfast or sunset tea over the falls',
      averageWaitMinutes: 20
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: '~80–150 MAD Honest Bills',
        tagColor: 'money',
        tone: 'good',
        description:
          'Transparent ~80–150 MAD regional pricing free of unexpected bread or olive surcharges; confirm juice/water add-ons and pay in cash.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'Clean Kitchen Standards',
        tagColor: 'water',
        tone: 'good',
        description:
          'Strongly rated (~4.9/5 on Booking/dining directories) for tidy dining spaces and carefully prepared food away from crowded main pool stalls.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Fresh Khobz & Tagines',
        tagColor: 'food',
        tone: 'good',
        description:
          'Travelers frequently single out the homemade bread, kefta and lamb tagines, Berber omelettes, and complimentary welcome mint tea.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Quiet Terrace, Stepped Path',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Peaceful terrace away from the noisy waterfall strip, though walking in requires stepped footpaths and ignoring street touts near town.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Welcoming Host Rachid',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Warm, unhurried hospitality starting at 08:30 with welcome tea; allow a short wait while tagines simmer fresh to order.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
