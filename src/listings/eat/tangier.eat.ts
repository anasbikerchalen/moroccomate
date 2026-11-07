/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: TANGIER
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-tangier-1' or 'eat-tangier-restaurant')
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
 *   id: 'e-tangier-[id]',
 *   city: 'tangier',
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

export const tangierEat: EatListing[] = [
  {
    id: "e-tangier-1",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Traditional Dining", "Sunset Views"],
      foodStyles: ["Moroccan", "Cafe"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["culture-seeker", "sunset-seeker", "budget-conscious"],
      vibeTags: [
        "strait-views",
        "cliffside-terraces",
        "historic-cafe",
        "mint-tea-ritual"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "sunset",
        "terrace"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Hafa",
      neighborhood: "Marchan",
      description: "A legendary clifftop café operating since 1921. Built on stepped stone terraces overlooking the Strait of Gibraltar, this historic cultural institution has hosted the Beatles, the Rolling Stones, and Paul Bowles.",
      tip: "Find a seat on the lower terraces at sunset, order a glass of sweet Northern mint tea, and try their traditional fava bean bissara soup.",
      badge: "local-favorite",
      bestDishes: [
        "Maghrebi Mint Tea",
        "Northern Bissara Soup",
        "Harcha Bread with Honey"
      ],
      pros: [
        "Iconic multi-tiered outdoor terrace overlooking the Strait of Gibraltar to Tarifa.",
        "Extremely affordable tea, snacks, and traditional breakfast pastries.",
        "Unsurpassed century-old bohemian artistic atmosphere."
      ],
      cons: [
        "Cash only payment.",
        "Steep stone stairs and no wheelchair accessibility."
      ],
      googleRating: 4.4,
      googleReviewCount: 4800,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 1450,
      theforkRating: 4.4,
      theforkReviewCount: 4800,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 4800,
      openTime: "09:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Rue Hafa, Quartier Marchan, Tanger 90000, Morocco",
        lat: 35.79155,
        lng: -5.82365
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Hafa+Tangier",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "https://instagram.com/cafe_hafa_officiel",
      customStory: "Carved into the rugged cliffs of Marchan since 1921, Café Hafa looks out across the Strait of Gibraltar toward the Spanish coastline. Generation after generation of international beatniks, rock legends, writers, and local Tangerois have sat on its tiered blue-and-white stone steps, sipping steaming mint tea with fresh sprigs of pennyroyal.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French", "Spanish", "English"]
    }
  },

  {
    id: "e-tangier-2",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "seniors"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Traditional Dining", "People Watching"],
      foodStyles: ["Cafe", "French", "Bakery"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["culture-seeker", "solo-traveler", "history-buff"],
      vibeTags: [
        "art-deco",
        "literary-landmark",
        "people-watching",
        "parisian-grand-cafe"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "pastry",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Gran Café de Paris",
      neighborhood: "Place de France",
      description: "The ultimate literary coffeehouse in Tangier, situated right across from the French Consulate. Famous for its 1920s Art Deco interior, its status as a spy-gathering hub in WWII, and its cameo in The Bourne Ultimatum.",
      tip: "Sit on the leather banquettes indoors or get a street-facing window seat to experience classic \"people-watching,\" just as Paul Bowles and William S. Burroughs did.",
      badge: "local-favorite",
      bestDishes: ["Cafe au Lait", "Croissant aux Amandes", "Espresso Chamali"],
      pros: [
        "Unmatched historical pedigree and Art Deco preservation since the 1920s.",
        "Superb vantage point on Place de France for watching city life.",
        "Classic formal Moroccan-French waiter service in vests and bowties."
      ],
      cons: [
        "Smoking is permitted in indoor sections, which can be heavy at peak times.",
        "Cash only payment."
      ],
      googleRating: 4,
      googleReviewCount: 3100,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 880,
      theforkRating: 4,
      theforkReviewCount: 3100,
      restaurantguruRating: 4,
      restaurantguruReviewCount: 3100,
      openTime: "07:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Place de France, Boulevard Pasteur, Tanger 90000, Morocco",
        lat: 35.7828,
        lng: -5.81432
      },
      googleMapsUrl: "https://maps.google.com/?q=Gran+Cafe+de+Paris+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212539931086",
      website: "not-available",
      instagram: "https://instagram.com/grancafedeparis_tanger",
      customStory: "Opening in 1927 at the crossroads of French Boulevard Pasteur, Gran Café de Paris preserves the vintage grandeur of Tangier's International Zone era. Formica tables, amber-colored wood, and worn leather banquettes have witnessed wartime intrigue, international spy exchanges, and generations of literary salons hosted by expatriate icons.",
      viewType: "city",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Arabic/Darija", "Spanish", "English"]
    }
  },

  {
    id: "e-tangier-3",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Traditional Dining", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Cafe"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["bohemian", "music-lover", "culture-seeker"],
      vibeTags: [
        "rock-and-roll-history",
        "kasbah-den",
        "mint-tea",
        "nostalgic-hangout"
      ],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 2.5,
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["breakfast", "budget", "cafe-pastry", "dry", "medina"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Baba",
      neighborhood: "Kasbah",
      description: "An iconic, cozy, and proudly rough-around-the-edges café located just inside the Kasbah walls. Visited by rock-and-roll legends and literary figures, it remains a relaxed place for locals and travelers.",
      tip: "Look at the historic photos on the walls, including Keith Richards and Jimi Hendrix chilling right where you are sitting.",
      badge: "local-favorite",
      bestDishes: ["Maghrebi Mint Tea", "Cafe Noir", "Local Moroccan Pastries"],
      pros: [
        "Legendary rock-and-roll cultural history inside the Kasbah walls.",
        "Superb spiced mint tea served hot in vintage glassware.",
        "Warm, welcoming host who loves sharing tales of Tangier's bohemian golden age."
      ],
      cons: [
        "Cash only payment.",
        "Intimate space that allows indoor tobacco smoking."
      ],
      googleRating: 4.2,
      googleReviewCount: 1200,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 390,
      theforkRating: 4.2,
      theforkReviewCount: 1200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1200,
      openTime: "09:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "1 Rue Zaitouni, Kasbah, Tanger 90000, Morocco",
        lat: 35.7892,
        lng: -5.8126
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Baba+Tangier",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "https://instagram.com/cafebaba_tangier",
      customStory: "Deep within the steep winding whitewashed alleys of the Kasbah, Café Baba opened in 1943 and remains virtually frozen in time. The cozy, smoke-tinted interior is lined with framed newspaper clippings and candid black-and-white photos of Keith Richards, Kofi Annan, and international artists lounging on its velvet-cushioned benches.",
      viewType: "none",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-4",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Casual Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Seafood", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      archetypeAffinity: ["foodie", "culture-seeker", "seafood-lover"],
      vibeTags: [
        "set-menu-seafood",
        "rustic-tavern",
        "clay-pot-tagine",
        "herbal-nectar"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "juice", "medina", "tagine"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Saveur de Poisson",
      neighborhood: "Medina / Escalier Waller",
      description: "An iconic, highly rustic dining tavern renowned for its fixed-price seafood menu. Guests are treated to fresh fish cooked in clay pots, traditional wood-fired grilled skewers, and unique local herbal juices.",
      tip: "There is no written menu; you sit down and get served a multi-course meal starting with dynamic fish soup and ending with a special honey-nut dessert.",
      badge: "local-favorite",
      bestDishes: [
        "Herbal Fish Soup",
        "Skewered Shark & Tuna",
        "Clay-Pot Fish Tagine"
      ],
      pros: [
        "Renowned multi-course fixed feast celebrating North African fishing heritage.",
        "Unique homemade wildflower and wild berry nectar drink served alongside meals.",
        "Warm communal hospitality and wooden spoons carved by hand."
      ],
      cons: [
        "Fixed non-customizable menu: unsuitable for vegetarians or shellfish allergies.",
        "Cash only payment; queues form quickly at 12:30 and 19:30."
      ],
      googleRating: 4.5,
      googleReviewCount: 2200,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 840,
      theforkRating: 4.5,
      theforkReviewCount: 2200,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 2200,
      openTime: "12:30",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "2 Escalier Waller, Tanger 90000, Morocco",
        lat: 35.78415,
        lng: -5.81308
      },
      googleMapsUrl: "https://maps.google.com/?q=Saveur+de+Poisson+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212539336326",
      website: "not-available",
      instagram: "not-available",
      customStory: "Conceived by owner-chef Mohammed Belhadj who spent decades studying medicinal herbs and Atlantic marine catches, Saveur de Poisson offers a one-of-a-kind dining journey. Housed in a rustic stone tavern lined with hand-carved olive wood tools, every diner receives the same set feast of wild-herb fish broth, charred fish skewers over oak embers, and a slow-baked baby shark and sea bass tagine.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 15,
      languagesSpoken: ["French", "Arabic/Darija", "Spanish", "English"]
    }
  },

  {
    id: "e-tangier-5",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["French", "Mediterranean", "Moroccan", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["luxury-traveler", "romantic-getaway", "jazz-and-cocktails"],
      vibeTags: [
        "kasbah-palace",
        "piano-bar",
        "ficus-tree-terrace",
        "jazz-lounge"
      ],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 38,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "medina",
        "sunset",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Morocco Club",
      neighborhood: "Kasbah",
      description: "An upscale, elegant French-Moroccan bistro and piano bar in the historic Kasbah. Built around a beautiful centuries-old ficus tree, it offers a sophisticated menu, classy cocktails, and jazz music.",
      tip: "Book in advance for a dinner reservation upstairs, then head down to the cozy subterranean piano bar for a cocktail after 10 PM.",
      badge: "splurge",
      bestDishes: [
        "John Dory with Saffron Risotto",
        "Slow-Cooked Duck Confit",
        "Seared Octopus with Puree"
      ],
      pros: [
        "Exquisite Kasbah setting under the branches of an illuminated ancient ficus tree.",
        "Lively subterranean piano bar offering classic cocktails and live jazz.",
        "Refined French-Moroccan gastronomy with impeccable table service."
      ],
      cons: [
        "Premium pricing reflecting its high-end boutique status.",
        "Advanced reservations are mandatory for prime dinner slots."
      ],
      googleRating: 4.5,
      googleReviewCount: 1400,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 510,
      theforkRating: 4.5,
      theforkReviewCount: 1400,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1400,
      openTime: "12:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Place du Tabor, Kasbah, Tanger 90000, Morocco",
        lat: 35.78985,
        lng: -5.8138
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Morocco+Club+Tangier",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212666216822",
      website: "http://www.elmoroccoclub.ma",
      instagram: "not-available",
      customStory: "Framed by the monumental branches of a century-old ficus tree on Place du Tabor, El Morocco Club is the epicenter of Kasbah chic. Designed with tasteful velvet cushions, houndstooth banquettes, and dim candlelight, the upstairs restaurant marries French culinary precision with Moroccan spices before guests drift downstairs to the late-night jazz piano bar.",
      viewType: "garden",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 0,
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  },

  {
    id: "e-tangier-6",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "seniors", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Garden restaurant with live music",
        "Romantic Sunset"
      ],
      foodStyles: ["Italian", "Seafood", "Mediterranean", "European"],
      archetypeAffinity: ["italian-food-lover", "romantic-getaway", "heritage-seeker"],
      vibeTags: [
        "palace-courtyard",
        "italian-institution",
        "garden-dining",
        "historic-grounds"
      ],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: false,
      halalStatus: "unknown",
      isVegetarianFriendly: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "live-music",
        "palace",
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Casa d'Italia",
      neighborhood: "Marchan",
      description: "Located inside the magnificent Palace of Italian Institutions (Palais Moulay Hafid), this elegant restaurant features classical decor, a gorgeous private garden terrace, and top-tier Italian gastronomy.",
      tip: "Stroll around the palace grounds before sitting down. Their house-made pastas and fresh seafood salads are favored heavily by local elites.",
      badge: "splurge",
      bestDishes: [
        "Handmade Seafood Linguine",
        "Wood-Fired Pizza Margherita",
        "Classic Panna Cotta"
      ],
      pros: [
        "Stunning palace setting with soaring colonnades and secluded gardens.",
        "Authentic Italian ingredients with freshly hand-rolled pasta dishes.",
        "Peaceful, aristocratic escape from city street noise."
      ],
      cons: [
        "Dishes may include non-halal Italian cured meats (pork selections clearly noted).",
        "Advanced booking recommended during sunny weekend lunches."
      ],
      googleRating: 4.4,
      googleReviewCount: 780,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 290,
      theforkRating: 4.4,
      theforkReviewCount: 780,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 780,
      openTime: "12:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Palais Moulay Hafid, 23 Rue Mohammed Ben Abdelouhab, Tanger 90000, Morocco",
        lat: 35.7876,
        lng: -5.8198
      },
      googleMapsUrl: "https://maps.google.com/?q=Casa+d%27Italia+Tangier",
      reservationMethod: ["phone"],
      reservationContact: "+212539936336",
      website: "not-available",
      instagram: "https://instagram.com/casaditaliatanger",
      customStory: "Hidden inside the grandiose 1914 Palais Moulay Hafid (Palace of Italian Institutions) in Marchan, Casa d'Italia offers an enchanting Roman dining experience. Dining tables are scattered across towering marble porticos and leafy private courtyards, serving authentic regional pastas, delicate carpaccios, and Italian estate wines.",
      viewType: "garden",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["Italian", "French", "Arabic/Darija", "English"]
    }
  },

  {
    id: "e-tangier-7",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "family", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fine Dining", "Waterfront Dining", "Romantic Sunset"],
      foodStyles: ["French", "Mediterranean", "Seafood", "European"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury-traveler", "meat-enthusiast", "romantic-getaway"],
      vibeTags: [
        "bay-views",
        "steak-frites",
        "french-brasserie",
        "sunset-terrace"
      ],
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
        "sunset",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Relais de Paris",
      neighborhood: "Malabata / Beachfront",
      description: "A superb waterfront French brasserie located near the bay. Highly popular for its elegant outdoor deck, exceptional Atlantic breezes, and premium cuts of steak served with a secret herb sauce.",
      tip: "Book a table on the oceanfront terrace. Their signature beef tenderloin features an 18-herb secret brasserie sauce.",
      badge: "splurge",
      bestDishes: [
        "Steak Frites with Secret Herb Sauce",
        "Spiced Red Tuna Steak",
        "Warm Apple Tarte Tatin"
      ],
      pros: [
        "Expansive wooden deck terrace with sweeping panoramas of Tangier Bay.",
        "Signature secret-herb butter steak frites served on tabletop warmers.",
        "Comprehensive wine and cocktail list."
      ],
      cons: [
        "Premium pricing catering to business and upscale leisure clientele.",
        "Can get breezy on the terrace during brisk Atlantic evenings."
      ],
      googleRating: 4.3,
      googleReviewCount: 950,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 340,
      theforkRating: 4.3,
      theforkReviewCount: 950,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 950,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Complexe Dawliz, Rue de la Hollande, Tanger 90000, Morocco",
        lat: 35.7811,
        lng: -5.8078
      },
      googleMapsUrl: "https://maps.google.com/?q=Le+Relais+de+Paris+Tangier",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212539943434",
      website: "https://lerelaisdeparis.com",
      instagram: "https://instagram.com/lerelaisdeparistanger",
      customStory: "Overlooking the curved crescent of the Bay of Tangier and the glittering harbor lights, Le Relais de Paris transports the timeless French entrecôte brasserie ritual to the Strait. Premium aged beef cuts arrive sizzling on food-warmers blanketed in a rich butter-herb sauce, flanked by bottomless golden frites.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija", "Spanish"]
    }
  },

  {
    id: "e-tangier-8",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Local Gathering Spot",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["budget-conscious", "culture-seeker", "seafood-lover"],
      vibeTags: [
        "kasbah-gates",
        "charcoal-grill",
        "neighborhood-diner",
        "fresh-seafood"
      ],
      crowdLevel: "bustling"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "tagine"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Chez Hassan Bab Kasbah",
      neighborhood: "Kasbah Entrance",
      description: "An exceptionally popular, no-frills neighborhood diner right outside the Kasbah gates. Always packed with locals, it serves fresh grilled seafood, skewered brochettes, and typical Northern tagines.",
      tip: "They serve the finest complimentary house-marinated harissa olives in town. Don't miss the grilled calamari plate.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Calamari",
        "Mixed Seafood Brochette Platter",
        "Marinated Beef Skewers"
      ],
      pros: [
        "Genuinely authentic neighborhood prices right by the historic Kasbah gate.",
        "Sizzling charcoal grilled seafood and meats with legendary marinated olives.",
        "Enthusiastic, welcoming family hospitality."
      ],
      cons: [
        "Cash only payment.",
        "Compact dining space that fills quickly at lunch."
      ],
      googleRating: 4.6,
      googleReviewCount: 980,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 310,
      theforkRating: 4.6,
      theforkReviewCount: 980,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 980,
      openTime: "11:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "8 Rue de la Kasbah, Bab Kasbah, Tanger 90000, Morocco",
        lat: 35.7885,
        lng: -5.81395
      },
      googleMapsUrl: "https://maps.google.com/?q=Chez+Hassan+Bab+Kasbah+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212662057799",
      website: "not-available",
      instagram: "not-available",
      customStory: "Standing sentinel right beside the monumental horseshoe arch of Bab Kasbah, Chez Hassan is a beloved Tangerois institution. Locals and savvy travelers crowd the small tables as Hassan and his crew char succulent calamari, swordfish steaks, and spiced kefta over white-hot coals with boundless good humor.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French", "Spanish", "English"]
    }
  },

  {
    id: "e-tangier-9",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["Casual Dining", "Quick Bites", "Local Gathering Spot"],
      foodStyles: ["Middle Eastern", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget-conscious", "vegan-friendly", "solo-traveler"],
      vibeTags: [
        "authentic-syrian",
        "crisp-falafel",
        "warm-hummus",
        "student-favorite"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 4,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "street-food"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Abou Tayssir (The Syrian)",
      neighborhood: "Medina / Grand Socco",
      description: "A legendary, pocket-sized eatery beloved by both students and travelers. Run by a welcoming Syrian exile, it is celebrated for serving the best falafel, creamy dips, and shawarma in Tangier.",
      tip: "Order the mixed dip platter, which comes with freshly baked Lebanese flatbread, hummus, and two styles of baba ganoush.",
      badge: "local-favorite",
      bestDishes: [
        "Handmade Crispy Falafel",
        "Syrian Chicken Shawarma",
        "Mixed Dips with Lebanese Bread"
      ],
      pros: [
        "Widely regarded as the best, freshest falafel and creamy hummus in northern Morocco.",
        "Exceptional value for money with hearty portions.",
        "Heartfelt hospitality with complimentary Syrian tea."
      ],
      cons: [
        "Very limited indoor seating (only 4 small tables); takeout is popular.",
        "Cash only payment."
      ],
      googleRating: 4.8,
      googleReviewCount: 1600,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 420,
      theforkRating: 4.8,
      theforkReviewCount: 1600,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1600,
      openTime: "11:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "Rue d'Italie, Near Grand Socco, Tanger 90000, Morocco",
        lat: 35.7852,
        lng: -5.8131
      },
      googleMapsUrl: "https://maps.google.com/?q=Abou+Tayssir+Syrian+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212678912345",
      website: "not-available",
      instagram: "not-available",
      customStory: "Run with immense warmth by Abou Tayssir, this tiny hole-in-the-wall spot just off Grand Socco has achieved near-mythic status in Tangier. The golden falafel balls are dropped into hot oil to order, coming out shattering-crisp on the outside and bright herb-green inside, dressed with silky tahini and pomegranate molasses.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French", "English"]
    }
  },

  {
    id: "e-tangier-10",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Casual Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "family", "dietary-sensitive"],
      vibeTags: [
        "medina-retreat",
        "slow-cooked-tagines",
        "family-hospitality",
        "friday-couscous"
      ],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "couscous", "dinner", "dry", "medina", "tagine"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Rif Kebdani",
      neighborhood: "Medina",
      description: "A cozy and highly-rated traditional restaurant nestled in the streets of the medina. It is highly praised for serving wonderfully balanced tagines and incredible Friday couscous.",
      tip: "Perfect for travelers with dietary needs; they have excellent, carefully labeled gluten-free, vegetarian, and vegan options.",
      badge: "local-favorite",
      bestDishes: [
        "Swordfish Tagine",
        "Seven-Vegetable Couscous",
        "Traditional Harira Soup"
      ],
      pros: [
        "Very accommodating of vegetarian, vegan, and gluten-free diets.",
        "Card payments accepted inside the medina.",
        "Warm, calm ambiance away from the medina market hustle."
      ],
      cons: [
        "Slightly tucked away; navigation through winding alleys required.",
        "Can be busy on Friday lunch for the traditional couscous service."
      ],
      googleRating: 4.6,
      googleReviewCount: 950,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 390,
      theforkRating: 4.6,
      theforkReviewCount: 950,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 950,
      openTime: "12:00",
      closeTime: "22:30",
      exactAddressAndCoordinates: {
        address: "Rue Dar Dbagh, Medina, Tanger 90000, Morocco",
        lat: 35.7865,
        lng: -5.8108
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurante+Rif+Kebdani+Tangier",
      reservationMethod: ["phone"],
      reservationContact: "+212539933758",
      website: "not-available",
      instagram: "not-available",
      customStory: "Tucked down a quiet Medina alleyway decorated with blue tiles and handwoven Berber tapestries, Restaurant Rif Kebdani feels like dining in an authentic Moroccan home. The kitchen takes great pride in gentle, balanced seasoning, cooking tender swordfish steaks in tomato chermoula and steaming fragrant semolina couscous.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "English", "French", "Spanish"]
    }
  },

  {
    id: "e-tangier-11",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "seniors", "business-friendly"],
      mealTypes: ["breakfast", "dinner"],
      experienceTypes: ["Fine Dining", "Romantic Sunset", "Upscale Lounge"],
      foodStyles: ["French", "Italian", "Mediterranean", "Gourmet"],
      cuisineTags: ["international"],
      archetypeAffinity: [
        "luxury-traveler",
        "romantic-getaway",
        "architecture-enthusiast"
      ],
      vibeTags: [
        "ysl-heritage",
        "clifftop-estate",
        "fine-dining",
        "lush-botanical-gardens"
      ],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 55,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["cash", "card"],
      tags: [
        "alcohol",
        "breakfast",
        "dinner",
        "fine",
        "medina",
        "quiet",
        "sunset",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "The Dining Room at Villa Mabrouka",
      neighborhood: "Medina / Marchan",
      description: "A highly exclusive, premium restaurant set inside Yves Saint Laurent's former private clifftop villa. It features elegant, candle-lit, mirror-paneled dining spaces and serves exceptional French-Italian dishes.",
      tip: "Children under 5 are not permitted. Dress strictly elegant and reserve well in advance for a magical, candlelit dinner in their historic gardens.",
      badge: "splurge",
      bestDishes: [
        "John Dory Goujons with Tartar Sauce",
        "Risotto Primavera with Asparagus",
        "Towering Vanilla Meringue Cake"
      ],
      pros: [
        "Breathtaking Yves Saint Laurent historical estate with sweeping Strait views.",
        "Refined Riviera-inspired cuisine executed with delicate precision.",
        "Lush botanical garden setting with emerald swimming pool terrace."
      ],
      cons: [
        "Very high price tier; strictly reservation only.",
        "Age policy: children under 5 are not admitted."
      ],
      googleRating: 4.7,
      googleReviewCount: 120,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 65,
      theforkRating: 4.7,
      theforkReviewCount: 120,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 120,
      openTime: "19:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "1 Rue Sidi Bouknadel, Tanger 90000, Morocco",
        lat: 35.7901,
        lng: -5.8172
      },
      googleMapsUrl: "https://maps.google.com/?q=Villa+Mabrouka+Tangier",
      reservationMethod: ["phone", "online"],
      reservationContact: "+212539940404",
      website: "https://villamabrouka.com",
      instagram: "https://instagram.com/villamabrouka",
      customStory: "Once the private sanctuary of couturier Yves Saint Laurent and Pierre Bergé, Villa Mabrouka was lovingly restored by British designer Jasper Conran into a boutique hotel and restaurant. Set amidst lush subtropical clifftop gardens overlooking the Strait, dining here is an intimate, cinematic reverie.",
      viewType: "garden",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 0,
      languagesSpoken: ["French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-tangier-12",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Casual Dining",
        "Local Gathering Spot",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["budget-conscious", "culture-seeker", "solo-traveler"],
      vibeTags: [
        "rotisserie-chicken",
        "comfort-food",
        "bustling-local-diner",
        "tangier-staple"
      ],
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
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "tagine"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Bachir",
      neighborhood: "Centre Ville / Boulevard Pasteur",
      description: "A legendary local diner located just off Avenue Pasteur. Deeply loved by Tangier residents, it is packed at all hours and serves Northern Moroccan specialties, rotisserie chicken, and hot stews.",
      tip: "Perfect for an honest, extremely hearty local meal. Walk past the open cooking station at the entrance to see their famous spit-roasted chickens.",
      badge: "local",
      bestDishes: [
        "Spit-Roasted Rotisserie Chicken",
        "Loubia (White Beans in Spiced Tomato)",
        "Beef Tagine with Peas"
      ],
      pros: [
        "Sensational spit-roasted chicken with crispy skin and fragrant spices.",
        "Unbeatable low prices in the city center.",
        "Speedy, efficient table turnover."
      ],
      cons: [
        "Cash only payment.",
        "Can get loud and crowded during lunch rush hours."
      ],
      googleRating: 4.5,
      googleReviewCount: 3400,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 780,
      theforkRating: 4.5,
      theforkReviewCount: 3400,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 3400,
      openTime: "11:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Avenue Prince Moulay Abdallah, Tanger 90000, Morocco",
        lat: 35.78095,
        lng: -5.81185
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Bachir+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212539942088",
      website: "not-available",
      instagram: "not-available",
      customStory: "Since 1968, Restaurant Bachir has fed generations of Tangerois workers, families, and students. Just steps from Boulevard Pasteur, the aroma of crackling golden rotisserie chickens roasted over open flames draws perpetual queues for fast, steaming plates of chicken, fries, and slow-braised white bean loubia.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["Arabic/Darija", "French"]
    }
  },

  {
    id: "e-tangier-13",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends", "seniors"],
      mealTypes: ["breakfast", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Traditional Dining", "People Watching"],
      foodStyles: ["Moroccan", "Cafe", "Bakery"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry"],
      archetypeAffinity: ["culture-seeker", "solo-traveler", "history-buff"],
      vibeTags: [
        "petit-socco",
        "historic-square",
        "people-watching",
        "nos-nos-coffee"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3,
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "medina",
        "pastry",
        "terrace"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café Tingis",
      neighborhood: "Petit Socco",
      description: "A historic literary café set in the Petit Socco, the lively historic heart of the old medina. It remains a legendary location for sipping tea, writing, and watching the daily flow of medina life.",
      tip: "Try to secure a terrace seat facing the historic square. Order a \"café nos-nos\" (half milk, half coffee) and watch the vibrant daily life of the souks.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Cafe Nos-Nos",
        "Sweet Mint Tea",
        "Harcha Flatbread"
      ],
      pros: [
        "Prime people-watching hub in the historic heart of the Petit Socco.",
        "Rich literary heritage and authentic old-world café atmosphere.",
        "Cheap espresso, fresh mint tea, and Moroccan breakfast snacks."
      ],
      cons: [
        "Street performers and hawkers frequently pass by terrace tables.",
        "Cash only payment."
      ],
      googleRating: 4.1,
      googleReviewCount: 1500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 460,
      theforkRating: 4.1,
      theforkReviewCount: 1500,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1500,
      openTime: "06:00",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "Place du Petit Socco, Medina, Tanger 90000, Morocco",
        lat: 35.7858,
        lng: -5.8105
      },
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Tingis+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212539931880",
      website: "not-available",
      instagram: "not-available",
      customStory: "Overlooking the intimate crossroads of Petit Socco, Café Tingis was a favorite haunt of Tennessee Williams, Paul Bowles, and William Burroughs during the International Zone epoch. Its outdoor wicker chairs spill onto the cobblestones, granting front-row seats to street musicians, carpet merchants, and passing travelers.",
      viewType: "city",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French", "Spanish", "English"]
    }
  },

  {
    id: "e-tangier-14",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "friends"],
      mealTypes: ["breakfast", "lunch", "afternoon-tea", "flexible"],
      experienceTypes: ["Cafe", "Casual Dining", "People Watching"],
      foodStyles: ["Cafe", "Mediterranean", "Bakery"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["digital-nomad", "creative", "culture-seeker"],
      vibeTags: [
        "cinematheque",
        "art-deco",
        "grand-socco-terrace",
        "creative-community"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 5,
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
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dry",
        "juice",
        "medina",
        "pastry",
        "terrace",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Cinema Rif Café",
      neighborhood: "Grand Socco / Place du 9 Avril",
      description: "The cool artistic and cultural beating heart of Tangier. Located inside a beautifully restored 1930s Art Deco cinema, its café is a bustling hub for local artists, filmmakers, and digital nomads.",
      tip: "Extremely laptop-friendly inside, while the bustling outdoor plaza seats offer excellent views of the historic Grand Socco gates.",
      badge: "local-favorite",
      bestDishes: [
        "Freshly Squeezed Orange Juice",
        "Avocado Shake",
        "Msemen with Cream Cheese"
      ],
      pros: [
        "Inspiring cultural atmosphere inside the city's historic art-house cinematheque.",
        "Plaza terrace facing the animated palm trees and fountain of Grand Socco.",
        "Laptop-friendly work tables with dependable Wi-Fi inside."
      ],
      cons: [
        "Cash only payment at the counter.",
        "Terrace tables fill up rapidly on pleasant sunny afternoons."
      ],
      googleRating: 4.3,
      googleReviewCount: 2600,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 680,
      theforkRating: 4.3,
      theforkReviewCount: 2600,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 2600,
      openTime: "08:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Place du 9 Avril 1947 (Grand Socco), Tanger 90000, Morocco",
        lat: 35.7844,
        lng: -5.8139
      },
      googleMapsUrl: "https://maps.google.com/?q=Cinema+Rif+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212539934683",
      website: "https://cinematequetanger.com",
      instagram: "https://instagram.com/cinematequetanger",
      customStory: "Rescued and converted into the Cinémathèque de Tanger in the mid-2000s, this historic 1938 movie theatre anchors the Grand Socco. Its red-and-chrome retro café buzzes with young filmmakers, indie screenwriters, and local intellectuals debating cinema over fresh juices and espresso.",
      viewType: "city",
      bestTimeToVisit: "Early morning for fresh baked goods",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "Arabic/Darija", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-15",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Traditional Dining",
        "Cozy casual family-run Moroccan eatery"
      ],
      foodStyles: ["Moroccan", "Seafood"],
      cuisineTags: ["moroccan-traditional", "seafood"],
      archetypeAffinity: ["budget-conscious", "hidden-gem-hunter", "family-run-lover"],
      vibeTags: [
        "family-hospitality",
        "seafood-tagine",
        "quiet-medina-alley",
        "authentic-chamali"
      ],
      crowdLevel: "quiet"
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
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "quiet", "tagine"],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Ahlen",
      neighborhood: "Medina",
      description: "A cozy, highly-authentic hidden gem inside the Medina. Known for its extremely heartwarming family service, it specializes in serving fresh local seafood tajines and fish soup.",
      tip: "Tucked away in a quiet alley. The seafood tajine is loaded with fresh herbs, olives, and preserves, offering a lighter Northern taste.",
      badge: "hidden-gem",
      bestDishes: [
        "Northern Fish Soup",
        "Spiced Seafood Tajine",
        "Lamb Kefta with Tomatoes"
      ],
      pros: [
        "Genuinely heartfelt and attentive family-run service.",
        "Exceptional fresh seafood tagine packed with aromatic local herbs and lemon.",
        "Relaxed, intimate quiet dining without tourist hustle."
      ],
      cons: [
        "Small venue with only five tables; can fill up quickly.",
        "Cash only payment."
      ],
      googleRating: 4.7,
      googleReviewCount: 320,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 160,
      theforkRating: 4.7,
      theforkReviewCount: 320,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 320,
      openTime: "12:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "8 Rue des Postes, Medina, Tanger 90000, Morocco",
        lat: 35.7856,
        lng: -5.8117
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Ahlen+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212670845322",
      website: "not-available",
      instagram: "not-available",
      customStory: "Managed by a devoted husband-and-wife duo down a calm residential lane of the old medina, Restaurant Ahlen exemplifies northern Moroccan warmth (\"Ahlen\" means welcome). Diners are welcomed like relatives into a snug room with hand-embroidered tablecloths, savoring freshly simmered fish tagines that taste like home cooking.",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-16",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Waterfront Dining",
        "Casual Italian Dining",
        "Family Friendly"
      ],
      foodStyles: ["Italian", "Seafood", "Mediterranean", "Pizza"],
      archetypeAffinity: ["pizza-enthusiast", "beachfront-diner", "family"],
      vibeTags: [
        "beach-promenade",
        "wood-fired-pizza",
        "seafront-terrace",
        "family-italian"
      ],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "terrace", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dall'Italiano",
      neighborhood: "Boulevard Mohamed VI",
      description: "A highly-rated beachfront restaurant serving authentic Italian pizzas, fresh seafood risottos, and handmade pastas. Celebrated for its stylish contemporary space and beach views.",
      tip: "Perfect for families. Their wood-fired pizzas feature fresh buffalo mozzarella and authentic, imported Italian flour.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Risotto",
        "Prosciutto wood-fired Pizza",
        "Handmade Ravioli with Spinach"
      ],
      pros: [
        "Authentic wood-fired stone oven pizzas with premium cheeses.",
        "Prime beach promenade location with outdoor seaside terrace.",
        "Extensive menu accommodating kids and varied dietary preferences."
      ],
      cons: [
        "Busy on summer evenings with potential waits for outdoor tables.",
        "Corniche traffic can be lively during peak holiday seasons."
      ],
      googleRating: 4.4,
      googleReviewCount: 810,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 310,
      theforkRating: 4.4,
      theforkReviewCount: 810,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 810,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohamed VI, Corniche, Tanger 90000, Morocco",
        lat: 35.7761,
        lng: -5.7952
      },
      googleMapsUrl: "https://maps.google.com/?q=Dall+Italiano+Tangier",
      reservationMethod: ["phone"],
      reservationContact: "+212539343360",
      website: "not-available",
      instagram: "not-available",
      customStory: "Positioned right along the seaside promenade of Boulevard Mohamed VI, Dall'Italiano brings coastal Italian warmth to Tangier. The wood-fired brick oven churns out thin-crust Neapolitan-style pizzas alongside steaming bowls of squid-ink pasta and creamy saffron seafood risotto.",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for quiet",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "Italian", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-tangier-17",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Traditional Dining", "Live Music Terrace", "Fine Dining"],
      foodStyles: ["Moroccan"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture-seeker", "music-lover", "traditional-flavor"],
      vibeTags: [
        "andalusian-music",
        "palace-interiors",
        "pigeon-pastilla",
        "live-oud"
      ],
      crowdLevel: "balanced"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "fine",
        "live-music",
        "medina",
        "palace",
        "pastilla",
        "tagine",
        "wifi"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Hammadi",
      neighborhood: "Rue de la Kasbah",
      description: "An established traditional Moroccan palace-style restaurant. Decorated beautifully with detailed wood and mosaic work, it offers authentic cuisine and live classical Moroccan music.",
      tip: "Popular with tour groups but still highly valued by locals for the consistency of their sweet lamb tagines and the authentic Andalusian music played during dinner.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Pigeon Pastilla",
        "Lamb Tagine with Caramelized Apricots",
        "Harira Soup"
      ],
      pros: [
        "Atmospheric live Andalusian lute and violin music during evening service.",
        "Superb sweet-and-savory pigeon pastilla with flaky warka pastry.",
        "Elaborate Moorish zellige tilework and hand-painted wood ceilings."
      ],
      cons: [
        "Frequently hosts tour groups during peak travel seasons.",
        "Can feel more tourist-oriented than smaller neighborhood hidden gems."
      ],
      googleRating: 4.2,
      googleReviewCount: 1600,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 520,
      theforkRating: 4.2,
      theforkReviewCount: 1600,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1600,
      openTime: "11:30",
      closeTime: "23:00",
      exactAddressAndCoordinates: {
        address: "2 Rue de la Kasbah, Tanger 90000, Morocco",
        lat: 35.7879,
        lng: -5.8134
      },
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Hammadi+Tangier",
      reservationMethod: ["phone"],
      reservationContact: "+212539934514",
      website: "not-available",
      instagram: "not-available",
      customStory: "Stepping through the carved cedar doors of Restaurant Hammadi transports guests into an Andalusian-Moroccan palace setting. Musicians in traditional djellabas pluck the oud and violin while waiters present ornate silver tagines of fork-tender lamb studded with almonds and toasted sesame seeds.",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 10,
      languagesSpoken: ["French", "English", "Arabic/Darija", "Spanish"]
    }
  },

  {
    id: "e-tangier-18",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Fine Seafood", "Fine Dining"],
      foodStyles: ["Seafood", "Spanish", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["seafood-lover", "spanish-cuisine", "waterfront-diner"],
      vibeTags: [
        "spanish-paella",
        "atlantic-catch",
        "corniche-dining",
        "seafood-platter"
      ],
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
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["alcohol", "budget", "dinner", "fine", "terrace", "wifi"],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "El Tangerino",
      neighborhood: "Boulevard Mohamed VI",
      description: "One of the city's best-established Spanish-style seafood restaurants. Known for serving exceptional, ultra-fresh catches, tapas, and classic Spanish paella directly facing the beach.",
      tip: "Perfect for seafood lovers who appreciate Spanish cooking. Their grilled squid and baked sea bass are cooked to perfection.",
      badge: "local-favorite",
      bestDishes: [
        "Spanish Seafood Paella",
        "Grilled Calamari",
        "Salt-Baked Whole Sea Bass"
      ],
      pros: [
        "Outstanding seafood paella prepared with freshly harvested shellfish.",
        "Prime maritime views across the bay towards Cape Malabata.",
        "Extensive cellar of fine Spanish and Moroccan wines."
      ],
      cons: [
        "Upper-tier pricing compared to casual harbor eateries.",
        "Advance reservations recommended for ocean-facing window tables."
      ],
      googleRating: 4.3,
      googleReviewCount: 1100,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 410,
      theforkRating: 4.3,
      theforkReviewCount: 1100,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1100,
      openTime: "12:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "186 Boulevard Mohamed VI, Tanger 90000, Morocco",
        lat: 35.7745,
        lng: -5.7923
      },
      googleMapsUrl: "https://maps.google.com/?q=El+Tangerino+Tangier",
      reservationMethod: ["phone"],
      reservationContact: "+212539943973",
      website: "not-available",
      instagram: "https://instagram.com/eltangerino",
      customStory: "Honoring Tangier's deep historical connection to Andalusia and the Iberian coast, El Tangerino is a revered maritime institution on the bay. Crisp white linen tables face the sparkling Mediterranean as seasoned waiters serve steaming paelleras laden with jumbo prawns, clams, and freshly grilled whole wild turbot.",
      viewType: "beach",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 10,
      languagesSpoken: ["Spanish", "French", "English", "Arabic/Darija"]
    }
  },

  {
    id: "e-tangier-19",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "couple", "friends", "family"],
      mealTypes: ["breakfast", "lunch", "dinner", "brunch", "afternoon-tea"],
      experienceTypes: ["Sunset Views", "Scenic Views", "Cafe"],
      foodStyles: ["Mediterranean", "Moroccan", "Healthy"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["bohemian", "healthy-eater", "sunset-seeker"],
      vibeTags: [
        "kasbah-rooftop",
        "artisan-boutique",
        "panoramic-terrace",
        "organic-salads"
      ],
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
        "juice",
        "medina",
        "riad",
        "rooftop",
        "street-food",
        "sunset",
        "tagine",
        "wifi"
      ],
      isHiddenGem: true,
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Terrasse - Dar El Kasbah (Kasbart)",
      neighborhood: "Kasbah / Rue de la Kasbah",
      description: "A beautifully designed, highly artistic rooftop garden restaurant located inside an Andalusian riad. Serves fresh, organic Moroccan salads, healthy breakfast sandwiches, and fresh juices.",
      tip: "Check out their small artisanal shop selling handcrafted clothing and bags downstairs before heading up to the tranquil rooftop.",
      badge: "hidden-gem",
      bestDishes: [
        "Tangier Spiced Lamb Tagine",
        "Assorted Moroccan Dips",
        "Fresh Avocado Orange Juice"
      ],
      pros: [
        "Serene rooftop sanctuary with 360-degree Kasbah and bay panoramas.",
        "Clean, colorful presentation of healthy Mediterranean and Moroccan fare.",
        "Downstairs artisanal boutique showcasing local design and craftsmanship."
      ],
      cons: [
        "Stair access only to the rooftop; not wheelchair accessible.",
        "Limited seating can mean waiting during sunset golden hour."
      ],
      googleRating: 4.6,
      googleReviewCount: 290,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 110,
      theforkRating: 4.6,
      theforkReviewCount: 290,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 290,
      openTime: "10:00",
      closeTime: "22:00",
      exactAddressAndCoordinates: {
        address: "64 Rue de la Kasbah, Tanger 90000, Morocco",
        lat: 35.7891,
        lng: -5.8132
      },
      googleMapsUrl: "https://maps.google.com/?q=Dar+El+Kasbah+Kasbart+Tangier",
      reservationMethod: ["phone"],
      reservationContact: "+212539934764",
      website: "not-available",
      instagram: "not-available",
      customStory: "Perched in the highest aerie of the Kasbah inside the boutique hotel Dar El Kasbah, Kasbart combines contemporary Moroccan craftsmanship with rooftop dining tranquility. Guests relax under canvas umbrellas surrounded by potted succulents, gazing out over the whitewashed Medina rooftops to the blue waters of the Strait.",
      viewType: "city",
      bestTimeToVisit: "Early evening around 18:30 for sunset",
      averageWaitMinutes: 5,
      languagesSpoken: ["French", "English", "Spanish", "Arabic/Darija"]
    }
  },

  {
    id: "e-tangier-20",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends"],
      mealTypes: ["lunch", "dinner", "late-night", "flexible"],
      experienceTypes: ["Casual Dining", "Quick Bites", "Local Gathering Spot"],
      foodStyles: ["Moroccan", "Fast Food"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["budget-conscious", "street-food-lover", "late-night-eater"],
      vibeTags: [
        "tangier-bocadillo",
        "street-food-legend",
        "grand-socco",
        "late-night-bites"
      ],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 3,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: true,
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "medina",
        "street-food"
      ],
      isHiddenGem: false,
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Hassan",
      neighborhood: "Grand Socco",
      description: "A legendary and fast-paced Northern Moroccan street-food sandwich bar (bocadillo counter) located near the historic gates. Famed for serving rich, extremely cheap stuffed baguettes.",
      tip: "Perfect for a rapid, satisfying street bite. Order their custom tuna bocadillo with egg, olives, fries, and spicy northern harissa sauce stuffed inside.",
      badge: "local",
      bestDishes: [
        "Spicy Tuna Bocadillo",
        "Kefta and Fries Wrap",
        "Northern Harissa Chicken Sandwich"
      ],
      pros: [
        "Quintessential northern Moroccan bocadillo sandwich experience.",
        "Extremely economical price under 30-35 MAD for a loaded baguette.",
        "Open late into the night until 02:00 AM."
      ],
      cons: [
        "Standing room and counter only; minimal seating.",
        "Cash only payment."
      ],
      googleRating: 4.5,
      googleReviewCount: 850,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.5,
      theforkReviewCount: 850,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 850,
      openTime: "10:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Rue de la Liberté, Near Grand Socco, Tanger 90000, Morocco",
        lat: 35.7839,
        lng: -5.8136
      },
      googleMapsUrl: "https://maps.google.com/?q=Snack+Hassan+Grand+Socco+Tangier",
      reservationMethod: ["none"],
      reservationContact: "+212661559988",
      website: "not-available",
      instagram: "not-available",
      customStory: "Every Tangerois has a cherished memory of a midnight bocadillo from Snack Hassan. Anchoring the entry steps to Grand Socco, the cooks slice crisp French baguettes with lightning speed, loading them with flaked Atlantic tuna, soft-boiled eggs, golden French fries, and a fiery homemade harissa sauce.",
      viewType: "none",
      bestTimeToVisit: "Late evening after 20:00 for lively crowd",
      averageWaitMinutes: 5,
      languagesSpoken: ["Arabic/Darija", "French", "Spanish"]
    }
  },

  {
    id: "e-tangier-mcdonalds-city-mall",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Mall Dining", "Ocean Views"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["street-food", "late-night", "breakfast", "budget"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Tanger City Mall",
      neighborhood: "Malabata",
      district: "Place du Maghreb Arabe",
      description: "Bustling McDonald's branch inside the Tanger City Mall facing the Bay of Tangier, offering McCafé treats, burgers, and mall shopping convenience.",
      badge: "local-favorite",
      googleRating: 4.1,
      googleReviewCount: 5400,
      openTime: "08:00",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Tanger City Mall, Place du Maghreb Arabe, Malabata, Tangier",
        lat: 35.7765,
        lng: -5.7925
      },
      googleMapsUrl: "https://maps.google.com/?cid=4756192837465019283",
      reservationContact: "not-available",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-kfc-city-mall",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Mall Dining"],
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
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
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
      name: "KFC Tanger City Mall",
      neighborhood: "Malabata",
      district: "Tanger City Mall Food Court",
      description: "Second-floor food court KFC in Tanger City Mall serving hot crispy chicken wings, Colonel burgers, and coleslaw.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1980,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Tanger City Mall, Place du Maghreb Arabe, Malabata, Tangier",
        lat: 35.7765,
        lng: -5.7925
      },
      googleMapsUrl: "https://maps.google.com/?cid=5869403827164920193",
      reservationContact: "not-available",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-burger-king-city-mall",
    city: "tangier",

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
      nearBeach: true,
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
      name: "Burger King Tanger City Mall",
      neighborhood: "Malabata",
      district: "Tanger City Mall Food Court",
      description: "Flame-grilled burger hub located in Tanger City Mall food court, serving Whoppers, chicken nuggets, and onion rings.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 2200,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Tanger City Mall, Place du Maghreb Arabe, Malabata, Tangier",
        lat: 35.7765,
        lng: -5.7925
      },
      googleMapsUrl: "https://maps.google.com/?cid=6970514938275039284",
      reservationContact: "not-available",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-pizza-hut-pasteur",
    city: "tangier",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Casual Dining", "Pizza"],
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
      hasParking: false,
      nearMedina: true,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      paymentMethods: ["Cash", "Credit Card", "Contactless"],
      tags: ["late-night", "budget", "medina"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Boulevard Pasteur",
      neighborhood: "Centre-Ville",
      district: "Boulevard Pasteur",
      description: "Prime downtown Tangier Pizza Hut situated along Boulevard Pasteur, offering classic pan pizzas and quick takeaway.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1650,
      openTime: "11:30",
      closeTime: "00:30",
      exactAddressAndCoordinates: {
        address: "Boulevard Pasteur, Centre Ville, Tangier",
        lat: 35.7802,
        lng: -5.8112
      },
      googleMapsUrl: "https://maps.google.com/?cid=7081625049386140395",
      reservationContact: "not-available",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English", "Spanish"]
    }
  },

  {
    id: "e-tangier-dominos-mohammed-v",
    city: "tangier",

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
      name: "Domino's Pizza Boulevard Mohammed V",
      neighborhood: "Centre-Ville",
      district: "Boulevard Mohammed V",
      description: "Centrally positioned Domino's on Boulevard Mohammed V with counter service, carry-out specials, and fast delivery.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1300,
      openTime: "11:30",
      closeTime: "01:00",
      exactAddressAndCoordinates: {
        address: "Boulevard Mohammed V, Centre Ville, Tangier",
        lat: 35.7792,
        lng: -5.8085
      },
      googleMapsUrl: "https://maps.google.com/?cid=8192736150497251406",
      reservationContact: "not-available",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc",
      languagesSpoken: ["Arabic", "French", "English", "Spanish"]
    }
  }
];
