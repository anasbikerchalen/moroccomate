/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: IMLIL TOUBKAL
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-imlil_toubkal-1' or 'eat-imlil_toubkal-restaurant')
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

export const imlil_toubkalEat: EatListing[] = [
  {
    id: 'e-imlil_toubkal-1',
    city: 'imlil_toubkal',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'premium',
      groupTypes: ['couple', 'family', 'friends', 'seniors', 'nature-lover'],
      mealTypes: ['lunch', 'afternoon-tea'],
      experienceTypes: ['fine-dining', 'traditional', 'rooftop'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous'],
      cuisineTags: ['moroccan-traditional'],
      archetypeAffinity: ['luxury', 'culture', 'adventure'],
      vibeTags: ['panoramic', 'tranquil', 'authentic'],
      crowdLevel: 'quiet'
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 35,
      isHalal: true,
      halalStatus: 'likely-halal-food',
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: 'dry',
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: 'serves-lunch',
      closedDays: [],
      seatingTypes: ['indoor', 'outdoor', 'rooftop', 'terrace'],
      paymentMethods: ['cash', 'credit_card', 'visa', 'mastercard'],
      tags: [
        'moroccan',
        'halal',
        'vegetarian',
        'dry',
        'fine',
        'lunch',
        'afternoon-tea',
        'rooftop',
        'terrace',
        'family',
        'couple',
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
      name: 'Kasbah du Toubkal Restaurant',
      neighborhood: 'High Imlil / Toubkal Trail',
      description:
        'Perched above Imlil village at 1,820 meters inside the restored historic Kasbah du Toubkal eco-lodge, offering set multi-course Berber lunches with panoramic High Atlas terraces overlooking Jebel Toubkal.',
      tip: 'Non-residents must reserve lunch in advance (around 350 MAD per person); expect a steep 15-minute uphill walk from the Imlil village center.',
      badge: 'splurge',
      bestDishes: [
        'Slow-Cooked Lamb Tagine with Prunes',
        'Seven-Vegetable Berber Couscous',
        'Freshly Baked Clay-Oven Bread & Salads',
        'High Atlas Herbal Mint Tea'
      ],
      pros: [
        'Extraordinary 360-degree terrace views of Mount Toubkal and the Imlil valley',
        'Thoughtfully prepared set Berber lunch with vegetarian accommodations on notice',
        '5% community levy supports Education For All and local Amazigh village projects'
      ],
      cons: [
        'Advance reservation required for non-residents; steep uphill footpath from town',
        'No alcohol sold on site (BYOB allowed); set-menu price (~350 MAD) is premium for the valley'
      ],
      googleRating: 4.5,
      googleReviewCount: 450,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 820,
      openTime: '12:00',
      closeTime: '15:30',
      exactAddressAndCoordinates: {
        address: 'Kasbah du Toubkal, BP 31, Imlil, Asni 42152, Morocco',
        lat: 31.1375,
        lng: -7.9172
      },
      googleMapsUrl: 'https://maps.google.com/?q=Kasbah+du+Toubkal+Imlil',
      reservationMethod: ['phone', 'website', 'email'],
      reservationContact: '+212 524 485 611',
      bookingUrl: 'https://www.kasbahdutoubkal.com',
      whatsappNumber: '+212661918598',
      website: 'https://www.kasbahdutoubkal.com',
      instagram: 'https://instagram.com/kasbahdutoubkal',
      viewType: 'mountain',
      bestTimeToVisit: 'Clear sunny midday lunch on the upper terrace',
      averageWaitMinutes: 15,
      menu: {
        currency: 'MAD',
        lastUpdated: '2026-11',
        serviceChargeIncluded: true,
        sections: [
          {
            id: 'set-lunch',
            title: 'Non-Resident Fixed Berber Lunch',
            description: 'Set multi-course lunch format (advance reservation required for non-residents)',
            items: [
              {
                id: 'kasbah-toubkal-m-1',
                name: 'Set Multi-Course Berber Lunch',
                description:
                  'Multi-course traditional lunch featuring seasonal Moroccan salads, freshly baked bread, lamb/beef tagine or 7-vegetable Berber couscous, dessert, and mint tea (includes 5% community levy).',
                price: 350,
                isSignature: true,
                dietary: ['halal', 'vegetarian'],
                portionNotes: 'Fixed price per non-resident visitor'
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
        tag: '~350 MAD Fixed Lunch',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Transparent ~350 MAD per-person non-resident lunch rate (including 5% community levy), though noticeably higher than Imlil village cafés.',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: 'High Eco-Lodge Standards',
        tagColor: 'water',
        tone: 'good',
        description:
          'Maintains high kitchen hygiene and safe food/water handling standards expected of a flagship international mountain retreat.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Authentic Berber Set Menu',
        tagColor: 'food',
        tone: 'good',
        description:
          'Multi-course Berber meals including slow-cooked lamb tagines, seasonal vegetable couscous, fresh salads, and bread cooked fresh daily.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Tout-Free, Steep Uphill Walk',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Tranquil panoramic High Atlas terrace free of street touts, though arriving requires a steep 15-minute uphill walk from Imlil center.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Reservation Required',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Polished, welcoming Berber hospitality; non-residents must book lunch ahead (walk-in à la carte dining is not guaranteed).',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: 'e-imlil_toubkal-2',
    city: 'imlil_toubkal',

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: 'lean',
      groupTypes: ['solo', 'couple', 'family', 'friends', 'large-groups', 'nature-lover'],
      mealTypes: ['breakfast', 'lunch', 'dinner', 'afternoon-tea'],
      experienceTypes: ['casual', 'traditional', 'cafes-tea'],
      foodStyles: ['Moroccan', 'Berber', 'Tagine & Couscous', 'Grill & BBQ'],
      cuisineTags: ['moroccan-traditional', 'cafe-pastry'],
      archetypeAffinity: ['budget', 'adventure', 'first-timer'],
      vibeTags: ['riverside', 'casual', 'authentic'],
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
      name: 'Café Soleil Imlil',
      neighborhood: 'Centre Imlil',
      description:
        'Long-running riverside café and restaurant right beside Imlil’s main central parking area and trailhead, serving walk-in hikers and day-trippers with tagines, brochettes, couscous, and hearty breakfasts.',
      tip: 'Ideal first or last stop when arriving in Imlil by grand taxi; carry Moroccan Dirhams in cash and allow 30–40 minutes if ordering a fresh tagine.',
      badge: 'local-favorite',
      bestDishes: [
        'Berber Chicken & Vegetable Tagine',
        'Grilled Lamb & Chicken Brochettes',
        'Traditional Moroccan Couscous',
        'Hiker Buffet Breakfast & Mint Tea'
      ],
      pros: [
        'Fully walk-in friendly right in the heart of Imlil next to the main parking',
        'Riverside outdoor terrace convenient before or after Toubkal hikes',
        'Budget-friendly prices with tagines starting around 70 MAD'
      ],
      cons: [
        'Simple, rustic decor that can feel chilly during winter evenings',
        'Cash only for walk-in dining'
      ],
      googleRating: 4.3,
      googleReviewCount: 160,
      openTime: '07:30',
      closeTime: '22:00',
      exactAddressAndCoordinates: {
        address: 'Centre Imlil, Main Parking & Riverside, Asni 42152, Morocco',
        lat: 31.1360,
        lng: -7.9180
      },
      googleMapsUrl: 'https://maps.google.com/?q=Hotel+Cafe+Soleil+Imlil',
      reservationMethod: ['phone', 'walk-in'],
      reservationContact: '+212 524 485 622',
      bookingUrl: '',
      whatsappNumber: '',
      website: 'not-available',
      instagram: 'not-available',
      viewType: 'mountain',
      bestTimeToVisit: 'Morning before starting a valley trek or post-hike afternoon lunch',
      averageWaitMinutes: 25
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: 'financial-trust',
        title: 'Financial Trust',
        icon: 'receipt',
        tag: 'From ~70 MAD (Cash Only)',
        tagColor: 'money',
        tone: 'good',
        description:
          'Budget-friendly mountain prices with tagines starting around 70–130 MAD (~30 MAD for coffee & large water); carry cash (MAD).',
        state: 'verified'
      },
      {
        id: 'health-safety',
        title: 'Health & Safety',
        icon: 'droplets',
        tag: '8.3–8.5/10 Cleanliness',
        tagColor: 'water',
        tone: 'good',
        description:
          'Simple 2-star village lodge and café scoring ~8.3–8.5/10 for cleanliness on travel platforms, with sealed bottled water readily sold.',
        state: 'verified'
      },
      {
        id: 'culinary-authenticity',
        title: 'Culinary Authenticity',
        icon: 'chef',
        tag: 'Hearty Trekker Classics',
        tagColor: 'food',
        tone: 'good',
        description:
          'Straightforward Moroccan tagines, couscous, brochettes, harira soup, and breakfasts cooked for arriving hikers.',
        state: 'verified'
      },
      {
        id: 'comfort-environment',
        title: 'Comfort & Atmosphere',
        icon: 'megaphone',
        tag: 'Central Hub, Basic Decor',
        tagColor: 'alert',
        tone: 'caution',
        description:
          'Convenient riverside terrace right beside Imlil’s main parking square, though rustic interiors are no-frills and chilly on winter evenings.',
        state: 'verified'
      },
      {
        id: 'service-expectations',
        title: 'Service Expectations',
        icon: 'clock',
        tag: 'Walk-In Friendly, Fresh Prep',
        tagColor: 'safety',
        tone: 'good',
        description:
          'Casual, friendly service for walk-in trekkers; allow 30–40 minutes when ordering a freshly prepared tagine.',
        state: 'verified'
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];
