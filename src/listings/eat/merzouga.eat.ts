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

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["authentic", "live-music", "cultural"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Cafe Nora",
      neighborhood: "Khamlia",
      description: "An iconic cultural stop in the Gnawa village of Khamlia. Renowned for serving the most authentic, slow-baked Medfouna (Berber pizza) while local Gnawa musicians play hypnotic traditional rhythms.",
      tip: "Everything is baked strictly to order in their traditional clay ovens, so expect a 30-40 minute wait. Relax and enjoy the complimentary mint tea and live Gnawa percussion while it bakes.",
      badge: "local-favorite",
      bestDishes: [
        "Medfouna (Berber Pizza)",
        "Vegetarian Medfouna",
        "Spiced Berber Mint Tea"
      ],
      pros: [
        "Authentic clay-oven Medfouna made fresh to order",
        "Live Gnawa music atmosphere and terrace seating",
        "On-site parking available"
      ],
      cons: [
        "30-40 minute wait while bread bakes",
        "Cash only and no Wi-Fi",
        "Can get busy with tour groups at midday"
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
      closeTime: "19:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Nora+Khamlia+Merzouga",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212667612191",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 30
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Cash Only, Fair Value",
        description: "Set menus and whole Medfouna portions are fairly priced (~85 MAD/person) and large enough to share, though bring cash (MAD) as cards are not accepted.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Baked Fresh to Order",
        description: "Every Medfouna and cooked vegetable salad is prepared fresh to order in high-heat clay ovens, with vegetarian options accommodated carefully.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Signature Berber Pizza",
        description: "Widely regarded as Khamlia's flagship spot for traditional stuffed Medfouna, spiced Berber coffee, and live local Gnawa percussion.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Lively Tour Hub",
        description: "Cozy traditional decor with shaded terrace seating, though it gets bustling around midday when excursion groups arrive and has no A/C or Wi-Fi.",
        state: "caution"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "30–40 Min Bake Time",
        description: "Because dough is stuffed and baked from scratch, expect a 30–40 minute wait—or call ahead to pre-order while mint tea is served.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-2",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "culture", "first-timer"],
      vibeTags: ["authentic", "relaxed", "scenic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Restaurant Chez Ibrahim",
      neighborhood: "Khamlia",
      description: "An authentic roadside restaurant situated at Kser El Khamlia on the Taouz road. Offers a sun-drenched terrace overlooking the desert plains, serving rich aubergine tagines, charcoal brochettes, and freshly baked medfouna.",
      tip: "Their set lunch menu includes cooked Moroccan vegetable salads, an aubergine tajine, freshly baked medfouna, and fresh fruit for dessert.",
      badge: "local-favorite",
      bestDishes: [
        "Eggplant and Cheese Tagine",
        "Berber Pizza (Medfouna)",
        "Charcoal Kefta Brochettes"
      ],
      pros: [
        "Generous, affordable set lunch menus",
        "Air-conditioned indoor dining plus desert terrace with Wi-Fi",
        "Wheelchair accessible with parking"
      ],
      cons: [
        "Closes early at 17:30 on most days",
        "Cash only"
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
      closeTime: "17:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Chez+Ibrahim+Khamlia",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212666147161",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "@restaurant_chez_ibrahim",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Budget Set Menus",
        description: "Known for low, straightforward prices (~75–150 MAD) and generous multi-course lunch sets; cash only, so carry small dirham bills.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Facilities",
        description: "Travelers consistently highlight spotless restrooms, clean indoor dining spaces, and freshly prepared tagines and cooked salads.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Home-Style Berber Fare",
        description: "Serves traditional Khamlia staples including eggplant tagine, charcoal brochettes, and crisp Medfouna with solid vegetarian options.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "A/C & Accessible",
        description: "Offers rare air-conditioned indoor seating alongside a breezy desert-view terrace, free Wi-Fi, and wheelchair-accessible facilities.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Lunch-Only Hours",
        description: "Friendly, attentive staff with ~15-minute waits, but note it operates primarily as a daytime stop and closes around 17:30.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-3",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["adventure", "culture", "first-timer"],
      vibeTags: ["authentic", "romantic", "dune-views"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "mountain",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Restaurant SaharaTime",
      neighborhood: "Hassilabied",
      description: "A desert dining oasis set under traditional nomad tenting directly at the edge of the Erg Chebbi sand dunes. Managed by Youssef, welcoming guests to savor wood-fired slow-simmered Moroccan stews with dune views.",
      tip: "Book a sunset dinner to watch the dunes change colors from golden to deep red, followed by campfire tea under the starry desert sky.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Cooked Lemon Chicken Tagine",
        "Smoky Meat Tagine on Wood Embers",
        "Traditional Harira Soup"
      ],
      pros: [
        "Direct Erg Chebbi sand dune setting under nomad tents",
        "Wood-fired tagines and warm personal hospitality",
        "Free Wi-Fi and parking available"
      ],
      cons: [
        "Cash only",
        "Open-air desert setting means no air conditioning",
        "Occasional slow service and small portions reported during busy shifts"
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
      reservationMethod: ["phone", "website"],
      reservationContact: "+212673239229",
      bookingUrl: "https://restaurantsaharatime.com",
      whatsappNumber: "",
      website: "https://restaurantsaharatime.com",
      instagram: "@restaurantsaharatime",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 15
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Confirm Portions & Price",
        description: "Moderately priced (~110 MAD/person, cash only), though a few recent diners felt salads and tagines ran small for the price—confirm set details upfront.",
        state: "caution"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh Hot Tagines",
        description: "Stews and harira soup are served piping hot from wood embers; stick to bottled water and freshly cooked items in the desert-edge setting.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Wood-Fired Classics",
        description: "Offers traditional slow-cooked tagines and harira in a nomad camp style, though coffee served is typically instant rather than espresso.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Dune-Edge Nomad Tent",
        description: "Stunning location right on the dunes with free Wi-Fi and camper parking, though no A/C and occasional friendly desert cats wander near outdoor tables.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Variable Wait Times",
        description: "Most guests praise Youssef's hospitality, though a few recent reviews note 45–60 minute waits and order mix-ups at peak times—reserve ahead.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-4",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Moroccan", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["budget", "adventure"],
      vibeTags: ["authentic", "quick-bite", "late-night"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
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
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Snack Mustapha",
      neighborhood: "Hassilabied",
      description: "A long-running local budget counter on the main square in Hassilabied. Unpretentious and bustling, Snack Mustapha built its reputation serving quick, freshly seared meat sandwiches, loaded fries, omelets, and simple tagines.",
      tip: "Currently flagged as possibly closed on Google Maps—check locally in Hassilabied before making a special trip. If open, try the kefta sandwich with fries.",
      badge: "local",
      bestDishes: [
        "Spiced Kefta Sandwich with Fries",
        "Grilled Merguez Brochettes",
        "Berber Omelet"
      ],
      pros: [
        "Ultra-low prices popular with locals and desert guides",
        "Historically open late with fast counter service"
      ],
      cons: [
        "Currently marked permanently closed on Google Maps (needs verification)",
        "Basic no-frills snack counter setup, cash only",
        "Limited English spoken"
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
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Rock-Bottom Local Prices",
        description: "Local street-food pricing (~40 MAD/person) with no tourist markup; cash only with no card terminal.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Cooked Fresh on Griddle",
        description: "Simple high-turnover snack fare (kefta, omelets, bean soup, fries) cooked hot to order; basic street-side hygiene standards.",
        state: "caution"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Real Local Snack Bar",
        description: "Genuine everyday Moroccan village snack joint frequented by desert drivers and Hassilabied locals rather than tour buses.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Verify Operating Status",
        description: "Tiny, bare-bones indoor counter with no A/C or Wi-Fi; note that Google Maps has flagged this spot as permanently closed.",
        state: "caution"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fast Counter Service",
        description: "Walk-in only with ~5-minute turnaround when open; minimal English spoken, so simple French or pointing works best.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-5",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "rooftop", "casual"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["authentic", "family-run", "rooftop-views"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 8,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "rooftop"],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Cafe Fatima",
      neighborhood: "Hassilabied",
      description: "A family-owned culinary landmark operating for years in quiet Hassilabied village. Famed for exceptionally rich, homestyle tagines simmered slowly over clay coal burners and served on a scenic roof terrace.",
      tip: "Head upstairs to the roof terrace for lovely dune views while eating. The set menu includes complimentary harira soup, olives, and mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Prunes & Boiled Eggs",
        "Tajine Galia",
        "Friday Seven-Vegetable Couscous"
      ],
      pros: [
        "Homestyle clay-burner tagines and generous set menus",
        "Scenic rooftop terrace overlooking the dunes",
        "Free parking on-site"
      ],
      cons: [
        "Cash only and no Wi-Fi",
        "Stairs required for rooftop seating",
        "No air conditioning"
      ],
      googleRating: 4.7,
      googleReviewCount: 278,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 263,
      theforkRating: 4.6,
      theforkReviewCount: 40,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 581,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Cafe+Fatima+Hassi+Labied",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212670181034",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Honest Value + Extras",
        description: "Reasonable prices (~80–95 MAD) with complimentary harira soup, olives, and mint tea commonly included; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Piping-Hot Clay Pots",
        description: "Dishes like Tajine Galia arrive still bubbling straight from charcoal burners, ensuring thoroughly cooked, freshly prepared food.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Traditional Family Kitchen",
        description: "Long-standing Hassilabied family kitchen praised for authentic slow-cooked beef-and-prune tagines and Friday couscous.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Breezy Roof Terrace",
        description: "Quiet village setting with a scenic rooftop terrace facing the dunes; step-access only, no Wi-Fi, and relies on natural breeze instead of A/C.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Warm, ~15 Min Wait",
        description: "Welcoming owner offering local travel tips and smooth service (~15-minute typical wait) in English and French.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-6",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "brunch"],
      experienceTypes: ["traditional", "casual", "cafes-tea"],
      foodStyles: ["Moroccan", "Berber", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "culture", "first-timer"],
      vibeTags: ["authentic", "family-run", "courtyard"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "courtyard"],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Restaurant Alla",
      neighborhood: "Khamlia",
      description: "A welcoming culinary stop in Khamlia village. Alla and his family greet travelers into a lovely shaded desert courtyard for fresh Moroccan salads, authentic stone-baked Berber pizza, and tea ceremonies.",
      tip: "Located just off the main road down a sandy track. Medfouna is baked completely fresh to order (takes ~45 mins) and easily feeds two hungry adults.",
      badge: "local-favorite",
      bestDishes: [
        "Authentic Medfouna (Berber Pizza)",
        "Cooked Moroccan Tomato & Pepper Salad",
        "Fresh Mint Tea"
      ],
      pros: [
        "Peaceful shaded desert courtyard with Wi-Fi",
        "Huge freshly baked Medfouna easily shared by two",
        "Long opening hours (08:00–23:00) and parking"
      ],
      cons: [
        "45-minute wait for made-to-order Medfouna",
        "Cash only",
        "Located down a short sandy track off the main road"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212611094484",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 20
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Great Sharing Value",
        description: "Affordable pricing (~70 MAD/person) with giant Medfouna loaves that easily feed two adults; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Open Kitchen Transparency",
        description: "Guests are often welcomed to see how the Berber pizza and cooked salads are prepared fresh from scratch in the family kitchen.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Stone-Baked Tradition",
        description: "Celebrated for crisp stone-baked Medfouna, warm Moroccan tomato-pepper salads, and ceremonial mint tea.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet Shaded Courtyard",
        description: "Calm, photogenic desert courtyard with free Wi-Fi and parking; located down a short sandy track with no A/C indoors.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Unhurried 20–45 Min Pace",
        description: "Exceptionally warm family hosts, though Medfouna takes up to 45 minutes to bake fresh—call ahead if you are on a tight schedule.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-7",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["authentic", "home-cooked", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 9,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "quiet", "tagine"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Zafa",
      neighborhood: "Khamlia",
      description: "Operating since 2007 across from Dar Gnaoua in Khamlia, Zaid and his wife Fatima invite guests to dine inside their decorated family home. Offers deeply personal Berber hospitality and slow-simmered desert recipes.",
      tip: "Since every meal is made from scratch in their family kitchen, calling ahead or dropping in earlier in the day to place your order ensures minimal waiting.",
      badge: "hidden-gem",
      bestDishes: [
        "Fatima’s Spiced Chicken Tagine",
        "Zaza Fruit Dessert with Avocado",
        "Saffron Beef Tajine"
      ],
      pros: [
        "Intimate home-cooked Berber dining experience",
        "Quiet setting away from busier tour restaurants",
        "Conveniently opposite Dar Gnaoua with parking"
      ],
      cons: [
        "Scratch cooking means long waits if not ordered ahead",
        "Indoor seating only and no Wi-Fi",
        "Cash only"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fair Family-Home Pricing",
        description: "Mid-budget home dining (~90 MAD/person) with transparent pricing set directly by the hosts; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Home-Kitchen Freshness",
        description: "Small-batch meals cooked to order in Fatima's family kitchen rather than kept warm in tourist buffets.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Since 2007 Home Recipes",
        description: "Deeply authentic Saharan home cooking inside the family's own residence, featuring saffron beef tagine and local Zaza fruit desserts.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet Intimate Living Room",
        description: "Peaceful indoor home salon free from tour-bus crowds, though there is no outdoor terrace, A/C, or Wi-Fi.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Pre-Order Recommended",
        description: "Very short wait if you stop by earlier in the day to place your order; spontaneous walk-ins may wait longer for scratch tagines.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-8",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["casual", "street-food", "traditional"],
      foodStyles: ["Moroccan", "Berber", "Grill & BBQ"],
      cuisineTags: ["cafe-pastry", "moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer", "nomad"],
      vibeTags: ["authentic", "friendly-host", "great-value"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Cafe Snack Restaurant Hamid",
      neighborhood: "Hassilabied",
      description: "An overwhelmingly popular culinary institution in Hassilabied. Renowned for its extraordinarily kind owner Hamid, huge portions of fresh market salads, grilled brochettes, tacos, and slow-cooked tagines.",
      tip: "One of the highest-rated eateries in the region. Hamid speaks multiple languages and often prepares takeout meals early in the morning for travelers departing toward Fes.",
      badge: "local-favorite",
      bestDishes: [
        "Kefta Tagine with Egg and Cheese",
        "House Spiced Chicken Tacos",
        "Fresh Moroccan Salad Platter"
      ],
      pros: [
        "Huge portions at budget-friendly prices",
        "Multilingual hospitality, Wi-Fi, and local delivery",
        "Highly consistent food quality across snacks and tagines"
      ],
      cons: [
        "Can get busy and lively during peak dinner hours",
        "Cash only and no dedicated parking",
        "Indoor seating only without air conditioning"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212667069078",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Unbeatable Portion Value",
        description: "Overwhelmingly praised for honest budget prices (~50 MAD) and massive servings—frequently cited as the best value in Hassilabied; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Market-Fresh High Turnover",
        description: "High daily turnover keeps salads, meats, and tagines ultra-fresh and piping hot; vegan and spice preferences are carefully accommodated.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Beloved Local Favorite",
        description: "Balances authentic kofta tagines and Moroccan salads with popular local-style French tacos and sandwiches.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cozy & Bustling",
        description: "Casual, friendly indoor room with free Wi-Fi; gets lively in the evenings and lacks A/C or dedicated parking.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fast & Multilingual",
        description: "Owner Hamid speaks fluent English and accommodates custom requests or next-day travel takeaways (~10-minute average wait; limited Friday afternoon hours).",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-9",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["upscale", "poolside", "dune-views"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: [
        "alcohol",
        "breakfast",
        "couscous",
        "dinner",
        "fine",
        "mountain",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Kanz Erremal Restaurant",
      neighborhood: "Hassilabied",
      description: "An elegant hotel dining room housed in a traditional Kasbah structure built right against the foot of the Erg Chebbi dunes near Hassilabied. Features panoramic pool and dune views, offering refined Moroccan cuisine and wine.",
      tip: "One of the few dining rooms right on the dunes that serves wine and cold beer. Relax on the terrace beside the pool overlooking Erg Chebbi.",
      badge: "splurge",
      bestDishes: [
        "Slow-Braised Saffron Lamb Shank",
        "Assorted Couscous with Vegetables",
        "Moroccan Pastry Assortment"
      ],
      pros: [
        "Licensed venue serving wine and beer with dune views",
        "Air-conditioned dining room, Wi-Fi, and wheelchair access",
        "Accepts credit cards and offers on-site parking"
      ],
      cons: [
        "Higher hotel pricing compared to village eateries",
        "Less intimate than family-run village restaurants"
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
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212535578482",
      bookingUrl: "https://www.kanzerremal.com",
      whatsappNumber: "+212661827066",
      website: "https://www.kanzerremal.com",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Cards Accepted, Hotel Rates",
        description: "Accepts Visa, Mastercard, and cash with clear hotel menu pricing (~150–220 MAD/person), plus alcoholic drinks billed extra.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Hotel Kitchen Standards",
        description: "Maintains formal hotel hygiene protocols, special-diet menu options, and filtered/bottled beverage service.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Refined Moroccan Dining",
        description: "Polished hotel take on Moroccan classics—tasty saffron lamb, couscous, and pastries, though slightly toned for international guests.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Poolside, A/C & Accessible",
        description: "One of the most comfortable stops on the dunes with A/C, Wi-Fi, wheelchair access, and panoramic poolside terrace views.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Smooth Hotel Pacing",
        description: "Consistent ~10-minute wait and multilingual staff; easy to reserve in advance via phone or WhatsApp.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-10",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer", "culture"],
      vibeTags: ["authentic", "family-run", "central"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 7.5,
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
      paymentMethods: ["cash"],
      tags: ["budget", "cafe-pastry", "dinner", "dry", "tagine", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Cafe Restaurant Chez Youssef",
      neighborhood: "Merzouga Centre",
      description: "Located in the heart of Merzouga village, this welcoming family eatery is favored by local desert guides and independent travelers for its crispy wood-fired medfouna and hearty tagines.",
      tip: "Youssef is an attentive host. His stuffed Berber flatbread is filled with minced meat, hard-boiled eggs, almonds, and traditional Saharan spices.",
      badge: "local-favorite",
      bestDishes: [
        "Youssef’s Classic Medfouna",
        "Chicken and Green Olive Tagine",
        "Berber Omelet with Cumin"
      ],
      pros: [
        "Central location with air conditioning and Wi-Fi",
        "Famous wood-fired Medfouna and hearty tagines",
        "Delivery and parking available"
      ],
      cons: [
        "Indoor seating only (no dune terrace)",
        "Cash only"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212666367174",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Honest Village Pricing",
        description: "Consistent budget-friendly prices (~75 MAD/person) beloved by independent travelers and local guides alike; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean & Continuously Swept",
        description: "Frequently commended for cleanliness—staff constantly sweep away desert sand and serve freshly cooked soups, omelets, and tagines.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Authentic Saharan Spices",
        description: "Renowned for wood-fired Medfouna stuffed with almonds, eggs, and Saharan spices, plus hearty traditional lentil and bean dishes.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "A/C Indoor Calm",
        description: "Simple, quiet central village room with air conditioning and parking; Wi-Fi is available though speed can be slow in the desert.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Attentive ~15 Min Wait",
        description: "Discreet, multilingual hospitality from Youssef and team (~15-minute typical wait) with local delivery also offered.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-11",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "flexible"],
      experienceTypes: ["traditional", "casual", "cafes-tea"],
      foodStyles: ["Moroccan", "Cafe & Pastry"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["authentic", "morning-spot", "relaxed"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6.5,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Cafe Chez Marrakesh",
      neighborhood: "Merzouga Centre",
      description: "A cozy local cafe-restaurant featuring traditional earthen decor. Known for its slow-cooked tagines, Moroccan breakfast sets, and relaxed village setting.",
      tip: "A great morning spot for a classic Moroccan breakfast with warm flatbread, olive oil, honey, and mint tea.",
      badge: "local-favorite",
      bestDishes: [
        "Berber Breakfast Board",
        "Lemon Chicken Tagine",
        "Fresh Squeezed Orange Juice"
      ],
      pros: [
        "Opens early at 08:00 for traditional Moroccan breakfasts",
        "Budget-friendly prices right in the village center",
        "On-site parking available"
      ],
      cons: [
        "Cash only",
        "No Wi-Fi or air conditioning",
        "Indoor seating only"
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
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Low Breakfast & Lunch Costs",
        description: "Inexpensive village cafe pricing (~65 MAD/person) with simple Moroccan breakfast boards and tagines; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh-Pressed Juice & Bread",
        description: "Freshly squeezed orange juice and warm flatbreads served daily alongside fully cooked hot tagines.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Classic Village Cafe",
        description: "Authentic everyday Moroccan morning spread (honey, olive oil, warm bread, mint tea) and home-style lemon chicken tagine.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Cozy Earthen Interior",
        description: "Relaxed traditional earthen salon with parking nearby, though it lacks Wi-Fi, A/C, and outdoor terrace seating.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Easy Walk-In Morning Spot",
        description: "Walk-in friendly with quick ~10-minute breakfast service starting at 08:00 and English/French spoken.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-12",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional", "rooftop"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["authentic", "sunset", "terrace"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      isHiddenGem: false,
      isTemporarilyHidden: true,
      verificationStatus: "unverified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Tifawt",
      neighborhood: "Merzouga Centre",
      description: "Featuring a raised terrace with direct sightlines to the dunes, Tifawt serves generous clay-pot tagines, skewers, and vibrant cooked Moroccan salads at very reasonable prices.",
      tip: "Take a table on the upper terrace around sunset to take in the desert colors while waiting for your tagine. Verify current opening hours locally before visiting.",
      badge: "local-favorite",
      bestDishes: [
        "Beef Tagine with Prunes & Almonds",
        "Spiced Kefta Tagine",
        "Moroccan Salad Medley"
      ],
      pros: [
        "Upper terrace with direct dune sightlines",
        "Reasonably priced tagines and skewers",
        "Central location with parking"
      ],
      cons: [
        "Operating hours need on-site verification",
        "Cash only and no Wi-Fi",
        "No air conditioning"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212662191673",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Budget-Friendly Plates",
        description: "Guidebook listings historically note simple, inexpensive mains (~40–80 MAD/person); cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Cooked Tagines & Salads",
        description: "Focuses on freshly grilled skewers and simmered clay-pot tagines; stick to cooked salads and bottled drinks.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Simple Traditional Staples",
        description: "Straightforward Moroccan village cooking—beef-prune tagine, kefta tagine, and couscous without tourist theatrics.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Sunset Terrace, Unverified",
        description: "Raised terrace facing the dunes with no A/C or Wi-Fi; currently lacks recent 2025–2026 online reviews so confirm status locally.",
        state: "caution"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Call Ahead to Confirm",
        description: "Historically warm welcome from host Lahcen (~10-minute wait), though calling ahead is advised to confirm current hours.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-13",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Mediterranean", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "nomad"],
      vibeTags: ["authentic", "family-friendly", "poolside"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 10,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card"],
      tags: ["budget", "dinner", "dry", "tagine", "terrace", "wifi"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Hassilabiad Appart Chez Toupie",
      neighborhood: "Hassilabied",
      description: "A top-rated dining retreat in Hassilabied run by a welcoming family. Serves generous, freshly cooked Berber feasts, tagines, and salads in modern indoor salons or beside their courtyard pool.",
      tip: "A favorite in Hassilabied. The family also operates the adjacent Depot Nomad carpet gallery. Excellent service in fluent English.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Lemon Chicken",
        "Traditional Beef Tajine",
        "Fresh Fruit Parfait"
      ],
      pros: [
        "Modern air-conditioned salons plus poolside courtyard terrace",
        "Fluent English service, Wi-Fi, and wheelchair accessibility",
        "Accepts credit cards and has parking"
      ],
      cons: [
        "Located slightly outside Merzouga Centre in Hassilabied",
        "Dry venue (no alcohol served)"
      ],
      googleRating: 4.9,
      googleReviewCount: 591,
      tripadvisorRating: 5,
      tripadvisorReviewCount: 157,
      theforkRating: 4.9,
      theforkReviewCount: 50,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 736,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Hassilabiad+Appart+Chez+Toupie",
      reservationMethod: ["phone", "email", "walk-in"],
      reservationContact: "+212624422542",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Fair Prices & Cards",
        description: "Praised for fair, transparent pricing (~100 MAD/person) and generous portions, with credit card payment accepted alongside cash.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Spotless Modern Kitchen",
        description: "Reviewers consistently single out this newly renovated venue as impeccably clean ('très propre') with everything cooked fresh to order.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Generous Homemade Feasts",
        description: "Authentic home-cooked tagines, chicken brochettes, and creative local touches like date-syrup and fig-jam spreads.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet, A/C & Poolside",
        description: "Calm retreat free from loud tour groups, offering A/C, free Wi-Fi, wheelchair access, parking, and poolside seating.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Honest Wait Communication",
        description: "Fluent English-speaking hosts honestly advise upfront if a fresh dish needs ~40 minutes to prepare, with quick ~10-minute service on lighter plates.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-14",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["breakfast", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "adventure"],
      vibeTags: ["stargazing", "romantic", "live-music"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor"],
      paymentMethods: ["cash", "credit_card"],
      tags: [
        "alcohol",
        "breakfast",
        "dinner",
        "fine",
        "live-music",
        "mountain",
        "quiet",
        "sunset",
        "tagine"
      ],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Sahara Stars Camp Restaurant",
      neighborhood: "Erg Chebbi (Desert Camps)",
      description: "A luxury camp dining experience deep in the dunes of Erg Chebbi. Guests dine on multi-course Moroccan cuisine under a canopy of Saharan stars, accompanied by campfire Gnawa drumming.",
      tip: "Advance booking is required. Packages typically include 4x4 dune transit, candlelit tables under the stars, and campfire music.",
      badge: "splurge",
      bestDishes: [
        "Slow-Roasted Lamb Mechoui",
        "Saffron Chicken Tagine",
        "Pistachio Baklava"
      ],
      pros: [
        "Unforgettable candlelit desert dining inside Erg Chebbi dunes",
        "Campfire Gnawa music and alcoholic beverages available",
        "Accepts credit cards"
      ],
      cons: [
        "Requires advance reservation and 4x4 dune transfer",
        "Highest price tier in the area",
        "No walk-in lunch service"
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
      reservationMethod: ["phone", "website"],
      reservationContact: "not-available",
      bookingUrl: "https://saharastarscamp.com",
      whatsappNumber: "",
      website: "https://saharastarscamp.com",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 0
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "All-In Package Pricing",
        description: "Usually bundled into camp stays or pre-booked dinner/transfer packages (~350 MAD+); confirm whether 4x4 transit and drinks are included before booking.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Boutique Camp Kitchen",
        description: "Multi-course hot meals cooked on-site in a dedicated camp restaurant tent, with vegetarian meals prepared on advance request.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Amazigh Fireside Tradition",
        description: "Traditional Moroccan feasts (mechoui, saffron tagine) followed by authentic live Amazigh fireside drumming rather than an over-scripted show.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Remote Stargazing Dunes",
        description: "Intimate 16-tent luxury camp far from city lights with unmatched Milky Way views; dress warmly for cool desert nights after sunset.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Advance Booking Mandatory",
        description: "Zero wait on arrival once booked, but walk-ins are not possible—coordinate 4x4 pickup and arrival details at least 24–72 hours ahead.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-15",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Berber", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["authentic", "heritage-recipes", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 13,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "mountain", "quiet", "terrace"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Aytma Restaurant",
      neighborhood: "Khamlia",
      description: "A traditional Kasbah restaurant in Khamlia celebrated for preserving ancient clay-pot techniques and pre-Saharan recipes with local dates, nuts, and farm-fresh ingredients.",
      tip: "Try their slow-baked chicken with dates and almonds—a rare authentic Saharan specialty prepared with local palm grove produce.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Baked Chicken with Desert Dates",
        "Berber Pizza (Medfouna)",
        "Handmade Harissa Salad"
      ],
      pros: [
        "Rare pre-Saharan dishes using local dates and clay pots",
        "Quiet Kasbah atmosphere with terrace views",
        "On-site parking available"
      ],
      cons: [
        "Cash only and no Wi-Fi",
        "Slightly higher price than basic village snacks",
        "No air conditioning"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212708480413",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "@dar_aytma_khamlia",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Specialty Pricing (~130 MAD)",
        description: "Slightly higher than basic Khamlia cafes (~130 MAD/person), reflecting slow-cooked specialty ingredients and Kasbah setting; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Wholesome Farm Produce",
        description: "Focuses on clean, wholesome Berber home cooking using local palm-grove dates, nuts, and thoroughly slow-baked clay-pot dishes.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Heritage Amazigh Kitchen",
        description: "Exceptionally authentic Amazigh & pre-Saharan specialties—also offers hands-on Berber cooking classes alongside its acclaimed Medfouna.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Serene Kasbah Setting",
        description: "Quiet, soulful traditional Kasbah with terrace dining and parking; note there is no A/C or Wi-Fi.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Family-Like Hospitality",
        description: "Small family team offering warm personal attention (~10-minute wait, longer for specialty clay-pot orders if not called ahead).",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-16",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "brunch", "flexible"],
      experienceTypes: ["casual", "cafes-tea", "rooftop"],
      foodStyles: ["Moroccan", "Mediterranean", "Italian"],
      cuisineTags: ["moroccan-traditional", "international", "cafe-pastry"],
      archetypeAffinity: ["budget", "nomad", "first-timer"],
      vibeTags: ["relaxed", "rooftop", "cafe"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 6.5,
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
      seatingTypes: ["indoor", "terrace", "rooftop"],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Restaurant Tenere",
      neighborhood: "Merzouga Centre",
      description: "A relaxed desert cafe and pizzeria in central Merzouga featuring an open terrace with views of the palm groves. Serves freshly-pressed juices, pizzas, kebabs, and Italian coffees.",
      tip: "Great rooftop and terrace seating to relax with cold juice and pizza after camel riding through the dunes.",
      badge: "local-favorite",
      bestDishes: [
        "Thin-Crust Wood Pizza",
        "Kefta Sandwich with Fries",
        "Fresh Pomegranate Juice"
      ],
      pros: [
        "Central location with rooftop terrace, Wi-Fi, and parking",
        "Mix of quick Western comfort food and Moroccan classics",
        "Local delivery available"
      ],
      cons: [
        "Cash only",
        "No air conditioning indoors"
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
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Restaurant+Tenere+Merzouga",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212646037818",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Affordable Cafe Menu",
        description: "Budget-friendly pricing (~65 MAD/person) across pizzas, sandwiches, and juices; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Fresh Juices & Hot Pizza",
        description: "Juices are pressed fresh and pizzas/kefta sandwiches are cooked hot to order in a busy central cafe.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Casual Moroccan-Italian Mix",
        description: "More of a laid-back traveler cafe serving pizzas, kebabs, and espresso than a traditional heritage tagine house.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Breezy Palm-View Terrace",
        description: "Easygoing central hangout with open rooftop terrace, Wi-Fi, and parking, though indoor dining has no A/C.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fast & Flexible Hours",
        description: "Quick ~5-minute turnaround on coffee, juices, and sandwiches all day from 08:00 until late evening.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-17",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["lunch"],
      experienceTypes: ["traditional", "hidden-gem", "street-food"],
      foodStyles: ["Moroccan", "Berber"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget", "culture", "adventure"],
      vibeTags: ["authentic", "souk-bakery"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "cafe-pastry", "dry", "medina", "pastry"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "wrong-city",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Faran B'Lal",
      neighborhood: "Rissani",
      description: "A historic communal mud-brick bakery (\"faran\") in the ancient trading post of Rissani (birthplace of Medfouna). Visitors stop here during day tours to observe Berber pizzas baked on wood embers.",
      tip: "Note: Located in Rissani (~35 km from Merzouga) rather than Merzouga itself. Best visited on market days (Sunday, Tuesday, Thursday).",
      badge: "hidden-gem",
      bestDishes: [
        "Traditional Stuffed Medfouna with Almonds & Eggs",
        "Wood-Fired Khobz",
        "Local Mint Tea"
      ],
      pros: [
        "Authentic wood-fired oven experience in Rissani souk",
        "Very inexpensive local specialty"
      ],
      cons: [
        "Located in Rissani (~35 km outside Merzouga)",
        "Not verified as an active sit-down restaurant listing",
        "Cash only and closes by 15:00"
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
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Souk Bakery Prices",
        description: "Traditional communal bakery pricing (~40 MAD/person); agree on the price of stuffed Medfouna before baking if brought by a souk guide; cash only.",
        state: "caution"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "High-Heat Wood Hearth",
        description: "Bread and stuffed flatbreads are baked directly inside a roaring wood-fired mud oven; strictly rustic communal bakery hygiene.",
        state: "caution"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Birthplace of Medfouna",
        description: "Deeply traditional Rissani souk oven experience where locals bake daily khobz and stuffed Medfouna on live embers.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Wrong City (Rissani, 35 km)",
        description: "Located in bustling Rissani souk (~35 km away, not Merzouga) with minimal rustic seating, no A/C, and no Wi-Fi.",
        state: "caution"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Daytime Market Hours Only",
        description: "Walk-in bakery counter open roughly 08:00–15:00 (best on Tue/Thu/Sun souk days); unverified as a named sit-down restaurant.",
        state: "caution"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-18",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Moroccan", "Mediterranean", "Vegetarian/Vegan"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "nomad", "adventure"],
      vibeTags: ["poolside", "dune-views", "relaxed"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 12,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card"],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Auberge Haven La Chance Restaurant",
      neighborhood: "Hassilabied",
      description: "Located inside Haven La Chance at the base of the dunes in Hassilabied, this hotel restaurant offers relaxed poolside dining, Moroccan salads, juicy brochettes, and cold beer facing Erg Chebbi.",
      tip: "A licensed desert hotel where you can enjoy an evening beer or wine on the terrace while looking directly up at the sand dunes.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Lamb Skewers",
        "Mixed Moroccan Mezze Plate",
        "Fresh Squeezed Orange Juice"
      ],
      pros: [
        "Licensed terrace serving beer and wine facing the dunes",
        "Air conditioning, Wi-Fi, parking, and wheelchair access",
        "Accepts credit cards and opens early at 07:30"
      ],
      cons: [
        "Hotel restaurant atmosphere rather than local street eatery",
        "Mid-range pricing above village snacks"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212535577299",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "mountain",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Cards Accepted, Mid-Range",
        description: "Clear hotel dining rates (~120 MAD/person); cashless/credit card payments are accepted, though keep some cash for small extras.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Clean Hotel Standards",
        description: "Cleanliness is frequently praised by guests, with gluten-free and vegetarian breakfast/lunch options available alongside grilled meats.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Hotel Moroccan & Mezze",
        description: "Abundant portions of classic Moroccan mezze, grilled lamb skewers, and continental-Moroccan plates tailored for resort guests.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Calm Poolside & Accessible",
        description: "Peaceful poolside terrace right at the foot of the dunes with A/C, free Wi-Fi, private parking, and wheelchair accessibility.",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Attentive All-Day Service",
        description: "Multilingual, non-intrusive staff serving smoothly from 07:30 to 23:00 with ~10-minute average wait times.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-19",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "French-Moroccan"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["luxury", "first-timer", "culture"],
      vibeTags: ["kasbah-lounge", "quiet", "poolside"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 14,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
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
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Ksar Bicha Restaurant",
      neighborhood: "Takoujt",
      description: "A traditional dining room and poolside lounge set inside the adobe-walled Ksar Bicha in Takoujt, just outside Merzouga Centre. Offers slow-cooked Saharan tagines, Moroccan salads, and licensed bar drinks in a mud-brick Kasbah lounge.",
      tip: "Features an outdoor pool and licensed bar/lounge. Ideal for a relaxing dinner with Moroccan wine away from the dust of the dunes.",
      badge: "local-favorite",
      bestDishes: [
        "Slow-Cooked Beef Tagine with Figs",
        "Chicken Pastilla with Almonds",
        "Spiced Harira"
      ],
      pros: [
        "Licensed bar/lounge serving Moroccan wine in a mud-brick Kasbah",
        "Air-conditioned dining, Wi-Fi, and credit cards accepted",
        "Quiet setting just 850m from Merzouga Centre with parking"
      ],
      cons: [
        "Not wheelchair accessible",
        "Less bustling local street feel than village snacks"
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
      reservationMethod: ["phone", "website"],
      reservationContact: "+212535577113",
      bookingUrl: "https://www.ksarbicha.com",
      whatsappNumber: "",
      website: "https://www.ksarbicha.com",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Cards & Cash Accepted",
        description: "Reasonably priced for a boutique Kasbah (~140 MAD/person); Visa/Mastercard are supported though some guests note on-site extras may prefer cash.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Spotless Kasbah Kitchen",
        description: "Praised by Tripadvisor guests for spotless cleanliness ('nikel'), with vegetarian, halal, and special-request meals prepared cleanly.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Nomad-Heritage Hospitality",
        description: "Run by the local Oubassidi family, serving refined versions of authentic Saharan tagines, chicken pastilla, and spiced harira.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "Quiet Adobe Courtyard & A/C",
        description: "Peaceful adobe-walled lounge and poolside courtyard sheltered from desert wind, with A/C, fast Wi-Fi, and parking (not wheelchair accessible).",
        state: "verified"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Polished, ~5 Min Wait",
        description: "Multilingual staff (English, French, Spanish, Italian) and quick ~5-minute table service; easy to book via phone or website.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  },

  {
    id: "e-merzouga-20",
    city: "merzouga",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Moroccan", "Italian", "Grill & BBQ"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["budget", "adventure"],
      vibeTags: ["quick-bite", "late-night", "central"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 3.5,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "late-night", "street-food"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Snack Milano",
      neighborhood: "Merzouga Centre",
      description: "A budget-friendly village counter right in Merzouga Centre. Serves quick personal-sized pizzas, toasted paninis, and sweet mint tea to budget backpackers and locals.",
      tip: "Unpretentious and very fast. Great spot for a quick late-night panini or pizza after returning from a desert excursion.",
      badge: "local",
      bestDishes: [
        "Beef & Cheese Pizza",
        "Merguez Panini",
        "Fresh French Fries"
      ],
      pros: [
        "Lowest prices in central Merzouga",
        "Open late until 01:30 with fast counter service",
        "Delivery available"
      ],
      cons: [
        "Basic snack counter seating with no Wi-Fi or AC",
        "Cash only and no dedicated parking"
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
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212703598766",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5
    },

    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      {
        id: "financial-trust",
        title: "Financial Trust",
        icon: "receipt",
        tag: "Lowest Village Prices",
        description: "Backpackers' favorite budget stop (~35 MAD/person) with simple, transparent counter prices for paninis and personal pizzas; cash only.",
        state: "verified"
      },
      {
        id: "health-safety",
        title: "Health & Safety",
        icon: "droplets",
        tag: "Hot Pressed Sandwiches",
        description: "Paninis, merguez, fries, and pizzas are pressed or baked hot to order; straightforward street-snack kitchen standards.",
        state: "verified"
      },
      {
        id: "culinary-authenticity",
        title: "Culinary Authenticity",
        icon: "chef",
        tag: "Moroccan Fast-Food Counter",
        description: "Authentic everyday Moroccan-style snack bar (paninis, pizzas, fries) rather than traditional tagine or Berber cuisine.",
        state: "verified"
      },
      {
        id: "comfort-environment",
        title: "Comfort & Atmosphere",
        icon: "megaphone",
        tag: "No-Frills Central Counter",
        description: "Compact, lively indoor counter right in Merzouga Centre; no A/C, no Wi-Fi, and no dedicated parking.",
        state: "caution"
      },
      {
        id: "service-expectations",
        title: "Service Expectations",
        icon: "clock",
        tag: "Fast & Open Until 01:30",
        description: "Walk-in friendly with ~5-minute turnaround and one of the latest closing times in town (01:30) after desert excursions.",
        state: "verified"
      }
    ],
    reviewsData: { sources: [], reviews: [] }
  }
];