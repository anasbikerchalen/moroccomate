/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: EL JADIDA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-el_jadida-1' or 'eat-el_jadida-restaurant')
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
 *   id: 'e-el_jadida-[id]',
 *   city: 'el_jadida',
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

export const el_jadidaEat: EatListing[] = [
  {
    id: "e-el_jadida-la-portugaise",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Historical Ambience",
        "Seafood Feast",
        "Local Gathering Spot"
      ],
      foodStyles: ["Seafood", "Moroccan", "Mediterranean"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "medina",
        "pastilla",
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
      name: "Restaurant La Portugaise",
      neighborhood: "Cité Portugaise",
      description: "A charming, authentic seafood and Moroccan eatery nestled inside the historic ramparts of the Portuguese City (Mazagan). Famous for freshly caught sea bass, sizzling grilled sardine platters, rich seafood pastillas, and warm local hospitality.",
      tip: "Book ahead or arrive right at 12:30 for lunch as tables inside the historic stone interior fill up quickly.",
      badge: "local-favorite",
      bestDishes: [
        "Seafood Pastilla",
        "Grilled Sea Bass",
        "Tajine de Poisson du Jour"
      ],
      googleRating: 4.8,
      googleReviewCount: 1399,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 420,
      theforkRating: 4.7,
      theforkReviewCount: 85,
      restaurantguruRating: 4.9,
      restaurantguruReviewCount: 1399,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+La+Portugaise+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Lunch around 13:00 after exploring the Manueline Cistern",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-le-lokal",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["Rooftop Dining", "Sunset Views", "Cultural Cafe"],
      foodStyles: ["Moroccan", "Cafe", "Healthy"],
      cuisineTags: ["moroccan-traditional", "cafe-pastry", "international"],
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
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "pastry",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Lokal",
      neighborhood: "Cité Portugaise",
      description: "A vibrant cultural café and rooftop restaurant perched atop the ancient ramparts of Mazagan. Serving homemade Moroccan dishes, artisan pastries, fresh fruit smoothies, and specialty coffees alongside panoramic views of the Atlantic Ocean and port.",
      tip: "Head up to the top rooftop terrace around 18:30 for one of the finest sunset ocean views in El Jadida.",
      badge: "hidden-gem",
      bestDishes: [
        "Berber Omelette Breakfast",
        "Homemade Moroccan Lemon Cake",
        "Avocado Seafood Salad"
      ],
      googleRating: 4.7,
      googleReviewCount: 520,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 210,
      theforkRating: 4.7,
      theforkReviewCount: 65,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 520,
      openTime: "09:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Lokal+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late afternoon coffee and cake at 17:30 before sunset",
      averageWaitMinutes: 5
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-la-capitainerie",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fine Dining",
        "Historical Ambience",
        "Upscale Romantic Dining"
      ],
      foodStyles: ["French", "Seafood", "Moroccan"],
      cuisineTags: ["international", "seafood", "moroccan-traditional"],
      crowdLevel: "quiet"
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
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "medina",
        "quiet",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Capitainerie",
      neighborhood: "Cité Portugaise",
      description: "An atmospheric fine-dining seafood restaurant set inside a historic 16th-century Portuguese fortress building. Renowned for upscale French-Moroccan culinary creations, whole grilled turbot, spider crab, and elegant candlelit dining.",
      tip: "Ideal for romantic dinners; reserve a table in advance for weekend evenings.",
      badge: "splurge",
      bestDishes: [
        "Grilled Spider Crab",
        "Filet de Saint-Pierre",
        "Seafood Soup Royal"
      ],
      googleRating: 4.6,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 180,
      theforkRating: 4.5,
      theforkReviewCount: 50,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 310,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Capitainerie+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 20:00 for a romantic atmosphere",
      averageWaitMinutes: 5,
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-entrees",
            title: "Entrées & Moroccan Salads",
            titleEn: "Starters & Moroccan Salads",
            description: "French-Moroccan starters served inside the 16th-century Cité Portugaise walls.",
            items: [
              { id: "capitainerie-seafood-soup", name: "Seafood Soup Royal", nameEn: "Seafood Soup Royal", translations: { ar: "شوربة ثمار البحر الملكية", en: "Seafood Soup Royal", es: "Sopa Real de Mariscos", de: "Königliche Meeresfrüchtesuppe" }, description: "Rich coastal fisherman's bisque enriched with Atlantic shellfish, saffron, and garlic croutons.", price: 110, isSignature: true, dietary: ["halal"] },
              { id: "capitainerie-parmesan-fondue", name: "Fondus au Parmesan Maison", nameEn: "Homemade Warm Parmesan Fondue", translations: { ar: "فوندو البارميزان المنزلي", en: "Homemade Warm Parmesan Fondue", es: "Fondue Casera de Parmesano", de: "Hausgemachtes Parmesan-Fondue" }, description: "Velvety aged parmesan cream served with crisp artisanal toast.", price: 95, dietary: ["halal", "vegetarian"] },
              { id: "capitainerie-beef-carpaccio", name: "Carpaccio de Bœuf", nameEn: "Thinly Sliced Beef Carpaccio", translations: { ar: "كارباتشيو اللحم البقري", en: "Thinly Sliced Beef Carpaccio", es: "Carpaccio de Ternera", de: "Rindercarpaccio" }, description: "Chilled beef tenderloin ribbons dressed with olive oil, capers, and parmesan shavings.", price: 120, dietary: ["halal", "gluten-free"] },
              { id: "capitainerie-briouats-salads", name: "Briouats & Trio of Moroccan Salads", nameEn: "Goat Cheese Cigars, Meat Briouats & Zaalouk", translations: { ar: "بريوات وسيجار بجبن الماعز مع زعلوك", en: "Goat Cheese Cigars, Meat Briouats & Zaalouk", es: "Briouats y Trío de Ensaladas Marroquíes", de: "Briouats & Marokkanische Salate" }, description: "Crisp goat-cheese-mint cigars, spiced meat briouats, smoky zaalouk, and roasted peppers.", price: 105, dietary: ["halal"] }
            ]
          },
          {
            id: "seafood-mains",
            title: "Catch of the Day & Seafood Specialties",
            titleEn: "Catch of the Day & Seafood Specialties",
            description: "Fresh El Jadida harbor seafood, whole turbot, and signature John Dory pastilla.",
            items: [
              { id: "capitainerie-spider-crab", name: "Grilled Spider Crab", nameEn: "Grilled Atlantic Spider Crab", localName: "Araignée de Mer", translations: { ar: "سلطعون البحر الأطلسي المشوي", en: "Grilled Atlantic Spider Crab", es: "Centollo a la Parrilla", de: "Gegrillte Atlantik-Seespinne" }, description: "Fresh local spider crab split and grilled with garlic parsley butter.", price: 290, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "capitainerie-saint-pierre", name: "Filet de Saint-Pierre", nameEn: "Pan-Roasted John Dory Fillet", translations: { ar: "فيليه سمك سان بيير", en: "Pan-Roasted John Dory Fillet", es: "Filete de Gallo San Pedro", de: "Gebratenes Petersfischfilet" }, description: "Local John Dory fillet sautéed in citrus butter with market vegetables.", price: 250, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "capitainerie-john-dory-pastilla", name: "Pastilla de Saint-Pierre", nameEn: "John Dory & Baby Vegetable Pastilla", translations: { ar: "بسطيلة سمك سان بيير", en: "John Dory & Baby Vegetable Pastilla", es: "Pastela de San Pedro y Verduritas", de: "Petersfisch-Pastilla mit Junggemüse" }, description: "Crispy warqa pastry filled with saffron-spiced John Dory and tender garden vegetables.", price: 220, dietary: ["halal"] },
              { id: "capitainerie-whole-turbot", name: "Whole Grilled Turbot", nameEn: "Whole Charcoal-Grilled Atlantic Turbot", translations: { ar: "سمك التوربو الكامل المشوي", en: "Whole Charcoal-Grilled Atlantic Turbot", es: "Rodaballo Entero a la Brasa", de: "Ganzer Gegrillter Steinbutt" }, description: "Daily catch whole turbot grilled with olive oil, lemon, and sea salt.", price: 320, dietary: ["halal", "gluten-free"] },
              { id: "capitainerie-calamari-plancha", name: "Calamars à la Plancha", nameEn: "Seared Atlantic Calamari a la Plancha", translations: { ar: "كالمار مشوي على البلانشا", en: "Seared Atlantic Calamari a la Plancha", es: "Calamares a la Plancha", de: "Gegrillter Tintenfisch a la Plancha" }, description: "Tender local squid seared on the hot plancha with garlic and lemon.", price: 185, dietary: ["halal", "gluten-free"] }
            ]
          },
          {
            id: "moroccan-classics-desserts",
            title: "Moroccan Mains & Desserts",
            titleEn: "Moroccan Mains & Desserts",
            description: "Slow-braised tagines, imperial couscous, and traditional sweets.",
            items: [
              { id: "capitainerie-madfoun", name: "Madfoun Impérial (Veiled Quail Couscous)", nameEn: "Imperial Quail & Almond Couscous", translations: { ar: "مدفون السمان بالكسكس واللوز", en: "Imperial Quail & Almond Couscous", es: "Cuscús Imperial de Codorniz", de: "Kaiserlicher Wachtel-Couscous" }, description: "Fine couscous concealing roasted boneless quail, caramelized onions, and saffron cinnamon jus.", price: 240, dietary: ["halal"] },
              { id: "capitainerie-beef-fennel-tagine", name: "Beef Tagine with Fennel & Preserved Lemon", nameEn: "Beef & Fennel Lemon Tagine", translations: { ar: "طاجين اللحم بالشمر والحامض", en: "Beef & Fennel Lemon Tagine", es: "Tajín de Ternera con Hinojo", de: "Rindfleisch-Tajine mit Fenchel" }, description: "Slow-simmered beef chuck with wild fennel bulbs and lightly lemony Moroccan broth.", price: 195, dietary: ["halal", "gluten-free"] },
              { id: "capitainerie-pastry-assortment", name: "Moroccan Pastries & Mint Tea or Seasonal Fruit", nameEn: "Assorted Moroccan Pastries & Tea", translations: { ar: "حلويات مغربية تقليدية مع الشاي", en: "Assorted Moroccan Pastries & Tea", es: "Pasteles Marroquíes y Té", de: "Marokkanisches Gebäck & Tee" }, description: "Selection of handmade almond gazelle horns and honey pastries served with fresh mint tea.", price: 85, dietary: ["halal", "vegetarian"] }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-cafe-do-mar",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "snack"],
      experienceTypes: ["Waterfront Dining", "Sunset Views", "People Watching"],
      foodStyles: ["Mediterranean", "Seafood", "Italian"],
      cuisineTags: ["international", "seafood", "cafe-pastry"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 18,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "rooftop"],
      paymentMethods: ["cash", "card"],
      tags: [
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "juice",
        "medina",
        "rooftop",
        "sunset",
        "terrace",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Café do Mar",
      neighborhood: "Cité Portugaise Ramparts",
      description: "A relaxed oceanfront bistro perched right on the fortified sea wall. Offers fresh calamari, grilled gambas, Italian pastas, and chilled juices while Atlantic waves crash against the ramparts below.",
      tip: "Sit at the outer balcony edge for dramatic Atlantic wave views.",
      badge: "local-favorite",
      bestDishes: [
        "Fried Calamari Platter",
        "Seafood Spaghetti",
        "Fresh Mango Juice"
      ],
      googleRating: 4.5,
      googleReviewCount: 480,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 290,
      theforkRating: 4.4,
      theforkReviewCount: 60,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 480,
      openTime: "10:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+do+Mar+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Sunset around 18:30",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-puccini",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Wood-Fired Pizza",
        "Family Friendly",
        "Casual Italian Dining"
      ],
      foodStyles: ["Italian", "Pizza", "European"],
      cuisineTags: ["international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Puccini El Jadida",
      neighborhood: "Centre-Ville",
      description: "A stylish, family-friendly Italian restaurant and pizzeria in downtown El Jadida. Celebrated for authentic wood-fired Neapolitan pizzas, creamy truffle pastas, fresh risottos, and artisan gelato desserts.",
      tip: "Great spot for families with children looking for high-quality Italian food after a beach day.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Puccini Four Cheese",
        "Truffle Tagliatelle",
        "Tiramisu House Special"
      ],
      googleRating: 4.8,
      googleReviewCount: 288,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 110,
      theforkRating: 4.6,
      theforkReviewCount: 45,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 288,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Puccini+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner at 20:00 for a lively family atmosphere",
      averageWaitMinutes: 15
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-snack-aymane-marina",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fishing Harbor Dining", "Gourmet Seafood", "Casual Dining"],
      foodStyles: ["Seafood", "Moroccan", "Fast Food"],
      cuisineTags: ["seafood", "moroccan-traditional", "international"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 8,
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
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "street-food", "terrace"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Snack Aymane Marina",
      neighborhood: "Fishing Harbor & Beach Promenade",
      description: "A famous budget-friendly seafood joint near the fishing port where locals go for generous, ultra-fresh fried and grilled fish platters accompanied by zaalouk, fries, and spicy harissa sauce.",
      tip: "Order the mixed seafood plate for two—generous portions at unbeatable local market prices.",
      badge: "local",
      bestDishes: [
        "Mixed Seafood Grill Platter",
        "Fried Sole & Whiting",
        "Moroccan Tomato Salad"
      ],
      googleRating: 4.8,
      googleReviewCount: 400,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 95,
      theforkRating: 4.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 400,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Snack+Aymane+Marina+El+Jadida",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Lunch around 13:30 right after fish boats land",
      averageWaitMinutes: 10,
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "seafood-platters",
            title: "Fresh Harbor Fish & Seafood Platters",
            titleEn: "Fresh Harbor Fish & Seafood Platters",
            description: "Sourced steps from the El Jadida fishing port and served with fries, zaalouk, and spicy harissa.",
            items: [
              { id: "aymane-mixed-grill", name: "Mixed Seafood Grill Platter", nameEn: "Mixed Harbor Seafood Grill Platter", translations: { ar: "طبق مشاوي ثمار البحر المشكل", en: "Mixed Harbor Seafood Grill Platter", es: "Parrillada Mixta de Mariscos", de: "Gemischte Meeresfrüchte-Grillplatte" }, description: "Char-grilled prawns, calamari, whiting, and sole served with fries, zaalouk, and harissa.", price: 110, isSignature: true, dietary: ["halal"] },
              { id: "aymane-fried-sole", name: "Fried Sole & Whiting", nameEn: "Crispy Fried Atlantic Sole & Whiting", localName: "Friture de Sole & Merlan", translations: { ar: "سمك الصول والميرلان المقلي المقرمش", en: "Crispy Fried Atlantic Sole & Whiting", es: "Lenguado y Pescadilla Frita", de: "Knusprig Gebratene Seezunge & Wittling" }, description: "Golden-fried daily catch sole and merlan fillets with fresh lemon wedges and crusty bread.", price: 85, isSignature: true, dietary: ["halal"] },
              { id: "aymane-calamari-plate", name: "Fried or Grilled Calamari Plate", nameEn: "Fresh Atlantic Calamari Plate", translations: { ar: "طبق الكالمار المقلي أو المشوي", en: "Fresh Atlantic Calamari Plate", es: "Calamares Fritos o a la Plancha", de: "Gebratener oder Frittierter Tintenfisch" }, description: "Tender harbor squid rings served with crispy chips and roasted pepper salad.", price: 90, dietary: ["halal"] }
            ]
          },
          {
            id: "salads-pizzas-pastas",
            title: "Moroccan Salads, Pizzas & Pastas",
            titleEn: "Moroccan Salads, Pizzas & Pastas",
            description: "Fresh starter salads alongside seafood pizzas and calamari pasta.",
            items: [
              { id: "aymane-tomato-salad", name: "Moroccan Tomato Salad & Zaalouk", nameEn: "Moroccan Tomato & Onion Salad", localName: "Salade Marocaine", translations: { ar: "سلطة مغربية بالطماطم وزعلوك", en: "Moroccan Tomato & Onion Salad", es: "Ensalada Marroquí de Tomate", de: "Marokkanischer Tomatensalat" }, description: "Finely diced tomatoes, green peppers, red onion, olive oil, and cumin served with warm bread.", price: 25, isSignature: true, dietary: ["halal", "vegan", "gluten-free"] },
              { id: "aymane-seafood-pizza", name: "Seafood Pizza", nameEn: "Harbor Seafood Pizza", translations: { ar: "بيتزا فواكه البحر", en: "Harbor Seafood Pizza", es: "Pizza de Mariscos", de: "Meeresfrüchte-Pizza" }, description: "Oven-baked pizza topped with tomato sauce, mozzarella, shrimp, and calamari.", price: 65, dietary: ["halal"] },
              { id: "aymane-calamari-pasta", name: "Calamari & Prawn Pasta", nameEn: "Seafood Tomato & Garlic Pasta", translations: { ar: "باستا الكالمار والجمبري", en: "Seafood Tomato & Garlic Pasta", es: "Pasta con Calamares y Gambas", de: "Pasta mit Tintenfisch & Garnelen" }, description: "Penne or spaghetti sautéed with fresh harbor calamari, prawns, and herb tomato sauce.", price: 75, dietary: ["halal"] }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-restaurant-du-port",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fishing Harbor Dining",
        "Waterfront Dining",
        "Seafood Feast"
      ],
      foodStyles: ["Seafood", "Mediterranean", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 22,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "medina", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant du Port",
      neighborhood: "Port de Pêche",
      description: "An iconic seafood landmark sitting right at the edge of the historic fishing harbor. Renowned for its daily catch brought straight from the docks, grilled sardines, whole sea bass, seafood paella, and wide harbor terrace view.",
      tip: "Request an outdoor harbor table to watch the traditional blue wooden fishing boats navigate in and out.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Atlantic Sardines",
        "Royal Seafood Paella",
        "Catch of the Day Plancha"
      ],
      googleRating: 4.2,
      googleReviewCount: 420,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 165,
      theforkRating: 4.2,
      theforkReviewCount: 40,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 380,
      openTime: "11:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+du+Port+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 to catch the busiest dockside action",
      averageWaitMinutes: 15
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-ali-baba",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Live Music Terrace", "Upscale Lounge", "Waterfront Dining"],
      foodStyles: ["French", "Mediterranean", "International"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 25,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "live-music",
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
      name: "Ali Baba (Au Clair de Lune)",
      neighborhood: "Corniche / Boulevard de Suez",
      description: "A long-standing waterfront restaurant and jazz lounge overlooking the El Jadida coastline. Celebrated for French-Mediterranean cuisine, grilled bluefin tuna, tender entrecôte, and evening live musical performances.",
      tip: "Book a table upstairs on the glass-fronted terrace for late dinner with live music and night ocean views.",
      badge: "splurge",
      bestDishes: [
        "Grilled Bluefin Tuna Steak",
        "Classic French Entrecôte",
        "Seafood Cocktail Royale"
      ],
      googleRating: 4.1,
      googleReviewCount: 514,
      tripadvisorRating: 4,
      tripadvisorReviewCount: 168,
      theforkRating: 4.1,
      theforkReviewCount: 55,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 460,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Ali+Baba+Au+Clair+de+Lune+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Dinner around 21:00 when live acoustic musicians perform",
      averageWaitMinutes: 10,
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "starters-seafood",
            title: "Starters & Atlantic Seafood",
            titleEn: "Starters & Atlantic Seafood",
            description: "Classic French-Mediterranean seafood starters and fresh coastal catches.",
            items: [
              { id: "alibaba-seafood-cocktail", name: "Seafood Cocktail Royale", nameEn: "Chilled Seafood Cocktail Royale", translations: { ar: "كوكتيل ثمار البحر الملكي", en: "Chilled Seafood Cocktail Royale", es: "Cóctel Real de Mariscos", de: "Meeresfrüchte-Cocktail Royale" }, description: "Atlantic prawns, poached fish, and shellfish served chilled with classic cognac-rose sauce.", price: 140, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "alibaba-tuna-steak", name: "Grilled Bluefin Tuna Steak", nameEn: "Char-Grilled Atlantic Bluefin Tuna Steak", translations: { ar: "ستيك التونة الزرقاء المشوية", en: "Char-Grilled Atlantic Bluefin Tuna Steak", es: "Filete de Atún Rojo a la Parrilla", de: "Gegrilltes Blauflossen-Thunfischsteak" }, description: "Thick-cut local bluefin tuna seared medium-rare with caper-lemon butter and seasonal vegetables.", price: 240, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "alibaba-fish-soup", name: "Soupe de Poissons du Littoral", nameEn: "Traditional Coastal Fish Soup", translations: { ar: "شوربة السمك الساحلية", en: "Traditional Coastal Fish Soup", es: "Sopa de Pescado del Litoral", de: "Traditionelle Fischsuppe" }, description: "Simmered rockfish soup served with gruyère, rouille, and toasted garlic bread.", price: 95, dietary: ["halal"] }
            ]
          },
          {
            id: "french-mains",
            title: "French Brasserie Mains & Grills",
            titleEn: "French Brasserie Mains & Grills",
            description: "Long-standing brasserie cuts and classic French sauces.",
            items: [
              { id: "alibaba-entrecote", name: "Classic French Entrecôte", nameEn: "Grilled French Entrecôte Steak", translations: { ar: "ستيك أنتريكوت فرنسي مشوي", en: "Grilled French Entrecôte Steak", es: "Entrecot Clásico Francés", de: "Klassisches Französisches Entrecôte" }, description: "Char-grilled prime ribeye with green peppercorn or maître d'hôtel butter and crisp pommes frites.", price: 260, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "alibaba-pepper-beef", name: "Filet de Bœuf Sauce Poivre", nameEn: "Beef Tenderloin in Peppercorn Sauce", translations: { ar: "فيليه اللحم بصلصة الفلفل", en: "Beef Tenderloin in Peppercorn Sauce", es: "Solomillo a la Pimienta", de: "Rinderfilet in Pfeffersauce" }, description: "Tender beef fillet seared to order with creamy Madagascar peppercorn reduction.", price: 290, dietary: ["halal"] },
              { id: "alibaba-paella", name: "Paella Royale aux Fruits de Mer", nameEn: "Atlantic Seafood Paella", translations: { ar: "بايلا فواكه البحر الأطلسية", en: "Atlantic Seafood Paella", es: "Paella Real de Mariscos", de: "Meeresfrüchte-Paella" }, description: "Saffron rice baked with prawns, mussels, calamari, and coastal fish.", price: 220, dietary: ["halal", "gluten-free"] }
            ]
          },
          {
            id: "desserts-lounge",
            title: "Desserts & Jazz Lounge Drinks",
            titleEn: "Desserts & Jazz Lounge Drinks",
            description: "Classic French desserts and licensed lounge cocktails.",
            items: [
              { id: "alibaba-chocolate-mousse", name: "Mousse au Chocolat Maison", nameEn: "Homemade Dark Chocolate Mousse", translations: { ar: "موس الشوكولاتة الداكنة", en: "Homemade Dark Chocolate Mousse", es: "Mousse Casera de Chocolate", de: "Hausgemachte Schokoladenmousse" }, description: "Airy whipped dark chocolate mousse topped with Chantilly cream.", price: 75, dietary: ["halal", "vegetarian", "gluten-free"] },
              { id: "alibaba-creme-caramel", name: "Crème Caramel / Tarte Tatin", nameEn: "Classic French Crème Caramel", translations: { ar: "كريم كراميل فرنسي", en: "Classic French Crème Caramel", es: "Flan Francés al Caramelo", de: "Klassische Crème Caramel" }, description: "Silky baked vanilla custard glazed with amber caramel.", price: 70, dietary: ["halal", "vegetarian", "gluten-free"] }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-le-prive",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Fine Dining",
        "Upscale Romantic Dining",
        "Modern Fusion Dining"
      ],
      foodStyles: ["French", "Mediterranean", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 26,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "alcohol",
        "budget",
        "dinner",
        "fine",
        "late-night",
        "quiet",
        "wifi"
      ],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Le Privé Lounge House",
      neighborhood: "Centre-Ville",
      description: "An intimate, high-end French and Mediterranean dining retreat in downtown El Jadida. Acclaimed for its welcoming host, convivial ambiance, refined meat cuts, seafood tapas, and warm chocolate soufflés.",
      tip: "Reservations are essential on Friday and Saturday nights due to limited seating and intimate dining.",
      badge: "hidden-gem",
      bestDishes: [
        "Fillet de Bœuf Rossini",
        "Gambas Pil-Pil Tapas",
        "Warm Chocolate Soufflé"
      ],
      googleRating: 4.4,
      googleReviewCount: 207,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 88,
      theforkRating: 4.4,
      theforkReviewCount: 35,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 195,
      openTime: "18:30",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Le+Prive+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "none",
      bestTimeToVisit: "Dinner around 20:30 for a tranquil candlelit experience",
      averageWaitMinutes: 5
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-tchoupa-fish",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Fishing Harbor Dining",
        "Casual Dining",
        "Local Gathering Spot"
      ],
      foodStyles: ["Seafood", "Moroccan", "Fast Food"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 7,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: false,
      nearMedina: true,
      nearBeach: true,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor"],
      paymentMethods: ["cash"],
      tags: ["budget", "dinner", "dry", "medina", "street-food"],
      verificationStatus: "verified",
      wiFi: false,
      airConditioning: false,
      wheelchairAccessible: false
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Tchoupa (Tchikito Fish)",
      neighborhood: "Medina Gates / Rue Mohamed Smiha",
      description: "A legendary no-frills fish shack near the medina walls where fresh Atlantic catch is fried to order in golden crispy batter. Renowned across the province for bountiful mixed fish plates with spicy tomato dip and warm bread.",
      tip: "Dine in around 12:30 PM to get the very first batch of fresh fish straight out of the morning fryers.",
      badge: "local",
      bestDishes: [
        "Fried Calamari Rings",
        "Golden Whiting & Sole",
        "Spicy Moroccan Fish Sauce"
      ],
      googleRating: 4.3,
      googleReviewCount: 350,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 65,
      theforkRating: 4,
      theforkReviewCount: 20,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 310,
      openTime: "11:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Tchiquito+Fish+El+Jadida",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Early lunch around 12:15 to avoid long lines",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-logo-sidi-bouzid",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["Beachfront Dining", "Sunset Views", "Waterfront Dining"],
      foodStyles: ["Mediterranean", "Moroccan", "Cafe"],
      cuisineTags: ["cafe-pastry"],
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
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["card", "cash"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "sunset",
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
      name: "Logo : Café & Restaurant",
      neighborhood: "Sidi Bouzid Beach",
      description: "A beloved clifftop cafe-restaurant overlooking Sidi Bouzid bay. Renowned for its sweeping Atlantic views, hearty Moroccan breakfasts, fresh seafood tagines, and sunset coffee rituals on the open-air deck.",
      tip: "Secure a front-row balcony table by 18:00 to witness the vibrant sunset over Sidi Bouzid beach.",
      badge: "local-favorite",
      bestDishes: [
        "Moroccan Beldi Breakfast Platter",
        "Grilled Seabream with Herbs",
        "Fresh Avocado Milkshake"
      ],
      googleRating: 4.7,
      googleReviewCount: 1768,
      tripadvisorRating: 4.6,
      tripadvisorReviewCount: 380,
      theforkRating: 4.5,
      theforkReviewCount: 90,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 1768,
      openTime: "07:30",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Logo+Cafe+Restaurant+Sidi+Bouzid",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Sunset around 18:30 or morning breakfast at 09:30",
      averageWaitMinutes: 15
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-la-plage-experience",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "friends", "family"],
      mealTypes: ["lunch", "dinner", "snack"],
      experienceTypes: ["Beachfront Dining", "Sunset Views", "Waterfront Dining"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 17,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "juice", "sunset", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "La Plage Expérience",
      neighborhood: "Sidi Bouzid Cliff",
      description: "An elevated seaside lounge and restaurant perched upon the coastal cliffs of Sidi Bouzid. Features contemporary Mediterranean seafood cuisine, fruit smoothies, paellas, and panoramic ocean vistas.",
      tip: "The outdoor cliffside sofa seating is perfect for enjoying sea breezes during golden hour.",
      badge: "local-favorite",
      bestDishes: [
        "Mediterranean Paella Marinera",
        "Grilled Calamari & Tiger Prawns",
        "Red Berry Mojito Mocktail"
      ],
      googleRating: 4.6,
      googleReviewCount: 1170,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 260,
      theforkRating: 4.5,
      theforkReviewCount: 75,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 1170,
      openTime: "08:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=La+Plage+Experience+Sidi+Bouzid",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Late afternoon around 17:00 leading into sunset",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-requin-bleu",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Fine Seafood", "Casual Dining"],
      foodStyles: ["Seafood", "French", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 20,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: false,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["alcohol", "budget", "dinner", "tagine", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: false,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Restaurant Le Requin Bleu",
      neighborhood: "Sidi Bouzid Plage",
      description: "A historic seaside institution in Sidi Bouzid established in 1967. Famous for traditional seafood cooking, fresh oysters from nearby lagoons, grilled swordfish, and relaxed sea-view dining.",
      tip: "Try the fresh oysters accompanied by fresh lemon and vinaigrette, delivered daily from neighboring oyster beds.",
      badge: "local-favorite",
      bestDishes: [
        "Fresh Oualidia Oysters",
        "Swordfish Steak Plancha",
        "Seafood Tagine with Lemon"
      ],
      googleRating: 4.2,
      googleReviewCount: 290,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 95,
      theforkRating: 4,
      theforkReviewCount: 30,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 260,
      openTime: "11:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Requin+Bleu+Sidi+Bouzid",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch around 13:00 for optimal ocean daylight views",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-sel-de-mer-mazagan",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["dinner"],
      experienceTypes: ["Fine Dining", "Fine Seafood", "Upscale Romantic Dining"],
      foodStyles: ["Seafood", "French", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
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
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card"],
      tags: ["alcohol", "dinner", "fine", "quiet", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Sel de Mer (Mazagan)",
      neighborhood: "Mazagan Beach & Golf Resort",
      description: "An upscale seafood dining experience situated inside the five-star Mazagan Beach Resort. Guests select their fish directly from an iced display before master chefs grill it over coals or bake it in sea salt crust.",
      tip: "Smart casual dress code applies. Reserve at least 24 hours in advance for prime weekend dining slots.",
      badge: "splurge",
      bestDishes: [
        "Sea Salt Crusted Loup de Mer",
        "Grilled Atlantic Lobster",
        "Osetra Caviar and Blinis"
      ],
      googleRating: 4.7,
      googleReviewCount: 340,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 190,
      theforkRating: 4.7,
      theforkReviewCount: 80,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 310,
      openTime: "19:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Sel+de+Mer+Mazagan+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Dinner around 20:00 for the refined oceanfront ambiance",
      averageWaitMinutes: 0,
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "raw-bar-starters",
            title: "Oualidia Raw Bar & Caviar Starters",
            titleEn: "Oualidia Raw Bar & Caviar Starters",
            description: "Fine shellfish, lagoon oysters, and caviar appetizers at Mazagan Beach & Golf Resort.",
            items: [
              { id: "seldemer-caviar-blinis", name: "Osetra Caviar and Blinis", nameEn: "Osetra Caviar & Warm Buckwheat Blinis", translations: { ar: "كافيار أوسيترا مع البيليني", en: "Osetra Caviar & Warm Buckwheat Blinis", es: "Caviar Osetra con Blinis", de: "Osetra-Kaviar mit Blinis" }, description: "Chilled Osetra caviar served over ice with warm blinis, crème fraîche, and traditional garnishes.", price: 950, isSignature: true, dietary: ["halal"] },
              { id: "seldemer-oualidia-oysters", name: "Oualidia Lagoon Oysters (6 pcs)", nameEn: "Fresh Oualidia Lagoon Oysters (6 pcs)", translations: { ar: "محار بحيرة الوليدية الطازج (6 قطع)", en: "Fresh Oualidia Lagoon Oysters (6 pcs)", es: "Ostras Frescas de Oualidia (6 uds)", de: "Frische Austern aus Oualidia (6 Stk.)" }, description: "Harvested from Oualidia's Atlantic lagoon, served over crushed ice with shallot mignonette and lemon.", price: 220, dietary: ["halal", "gluten-free"] },
              { id: "seldemer-lobster-tartlet", name: "Oualidia Lobster & Citrus Tartlet", nameEn: "Poached Oualidia Lobster Tartlet", translations: { ar: "تارتليت كركند الوليدية بالحمضيات", en: "Poached Oualidia Lobster Tartlet", es: "Tartaleta de Bogavante y Cítricos", de: "Hummer-Törtchen mit Zitrusnote" }, description: "Delicate crisp pastry filled with sweet Atlantic lobster, avocado purée, and citrus emulsion.", price: 280, dietary: ["halal"] }
            ]
          },
          {
            id: "iced-catch-mains",
            title: "Iced Display Catch & Fine Seafood Mains",
            titleEn: "Iced Display Catch & Fine Seafood Mains",
            description: "Whole Atlantic fish baked in sea salt crust or coal-grilled lobster.",
            items: [
              { id: "seldemer-salt-crusted-bass", name: "Sea Salt Crusted Loup de Mer", nameEn: "Sea Salt Crusted Atlantic Sea Bass", translations: { ar: "سمك الدرعي في قشرة الملح البحري", en: "Sea Salt Crusted Atlantic Sea Bass", es: "Lubina a la Costra de Sal Marina", de: "Wolfsbarsch in der Meersalzkruste" }, description: "Whole wild sea bass baked in coarse sea salt crust, carved tableside with seaweed butter and seasonal greens.", price: 480, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "seldemer-grilled-lobster", name: "Grilled Atlantic Lobster", nameEn: "Char-Grilled Whole Atlantic Lobster", translations: { ar: "كركند أطلسي مشوي على الفحم", en: "Char-Grilled Whole Atlantic Lobster", es: "Bogavante Atlántico a la Brasa", de: "Gegrillter Atlantik-Hummer" }, description: "Live Atlantic lobster split and coal-grilled with herb garlic butter and saffron risotto.", price: 690, isSignature: true, dietary: ["halal", "gluten-free"] },
              { id: "seldemer-plancha-catch", name: "Catch of the Day à la Plancha", nameEn: "Fresh Catch of the Day a la Plancha", translations: { ar: "صيد اليوم المشوي على البلانشا", en: "Fresh Catch of the Day a la Plancha", es: "Pescado del Día a la Plancha", de: "Tagesfang a la Plancha" }, description: "Daily El Jadida fillet seared on the plancha with confit tomatoes, capers, and olive oil.", price: 390, dietary: ["halal", "gluten-free"] }
            ]
          },
          {
            id: "desserts",
            title: "Fine Pastry Desserts",
            titleEn: "Fine Pastry Desserts",
            description: "Artisanal plated desserts crafted by Mazagan's pastry kitchen.",
            items: [
              { id: "seldemer-citrus-pavlova", name: "Moroccan Citrus Pavlova", nameEn: "Crisp Meringue & Moroccan Citrus Pavlova", translations: { ar: "بافلوفا الحمضيات المغربية", en: "Crisp Meringue & Moroccan Citrus Pavlova", es: "Pavlova de Cítricos Marroquíes", de: "Zitrus-Pavlova" }, description: "Light meringue layered with vanilla chantilly, blood orange segments, and passionfruit coulis.", price: 140, dietary: ["halal", "vegetarian", "gluten-free"] }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-al-firma-mazagan",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["dinner"],
      experienceTypes: [
        "Authentic Berber Feast",
        "Traditional Dining",
        "Fountain courtyard"
      ],
      foodStyles: ["Moroccan", "Berber", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 50,
      isHalal: true,
      halalStatus: "halal-certified",
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
      seatingTypes: ["indoor", "garden"],
      paymentMethods: ["card"],
      tags: [
        "alcohol",
        "couscous",
        "dinner",
        "fine",
        "pastilla",
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
      name: "Al Firma (Mazagan)",
      neighborhood: "Mazagan Beach & Golf Resort",
      description: "An enchanting Moroccan dining sanctuary housed within a lavish Berber tent surrounded by organic gardens and olive groves. Features traditional wood-fired tagines, tender mechoui lamb, and live Oud music.",
      tip: "Dine under the starry sky outside the tent in summer for an unforgettable Moroccan Arabian nights setting.",
      badge: "splurge",
      bestDishes: [
        "Slow-Roasted Mechoui Lamb",
        "Organic Garden Vegetable Couscous",
        "Pigeon & Almond Pastilla"
      ],
      googleRating: 4.6,
      googleReviewCount: 280,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 140,
      theforkRating: 4.6,
      theforkReviewCount: 65,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 260,
      openTime: "19:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Al+Firma+Mazagan+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Dinner around 20:30 when the Andalusian musicians begin playing",
      averageWaitMinutes: 5
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-bushra-buddha-bar",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["dinner"],
      experienceTypes: ["Upscale Lounge", "Modern Fusion Dining", "Fine Dining"],
      foodStyles: ["Middle Eastern", "Mediterranean", "Gourmet"],
      cuisineTags: ["international", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 48,
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
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card"],
      tags: ["alcohol", "dinner", "fine", "late-night", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Bushra by Buddha-Bar",
      neighborhood: "Mazagan Beach & Golf Resort",
      description: "A glamorous Middle Eastern and Levantine fusion concept created by Buddha-Bar. Offers mezze spreads, spiced grilled meats, creative cocktails, and ambient DJ-curated oriental soundtracks.",
      tip: "Perfect for groups wanting to share cold and hot mezze platters with vibrant weekend lounge music.",
      badge: "splurge",
      bestDishes: [
        "Truffle Hummus & Warm Pita",
        "Spiced Lamb Kofta with Tahini",
        "Pistachio Baklava Fusion"
      ],
      googleRating: 4.6,
      googleReviewCount: 210,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 115,
      theforkRating: 4.5,
      theforkReviewCount: 45,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 195,
      openTime: "19:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Bushra+by+Buddha+Bar+Mazagan",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "garden",
      bestTimeToVisit: "Dinner around 21:00 for the best evening vibe",
      averageWaitMinutes: 5
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-dar-lhout",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Seafood Feast", "Waterfront Dining", "Casual Dining"],
      foodStyles: ["Seafood", "Spanish", "Moroccan"],
      cuisineTags: ["seafood", "moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 16,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: ["budget", "dinner", "dry", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Dar Lhout",
      neighborhood: "Boulevard Al Mouhit / Corniche",
      description: "A popular seaside restaurant blending Moroccan seafood traditions with Spanish coastal culinary touches. Famous for its generous seafood paellas, grilled swordfish, fried squid, and lively oceanfront terrace.",
      tip: "Order the paella for the table; they cook it fresh in traditional wide iron pans with generous shellfish.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Seafood Paella",
        "Grilled Swordfish Steak",
        "Gambas a la Plancha"
      ],
      googleRating: 4.3,
      googleReviewCount: 380,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 110,
      theforkRating: 4.2,
      theforkReviewCount: 35,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 340,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Lhout+El+Jadida",
      reservationMethod: ["phone"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Lunch at 13:30 after a morning walk on the beach promenade",
      averageWaitMinutes: 15
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-pizzeria-ragazzi",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: [
        "Family Pizza Night",
        "Casual Italian Dining",
        "Family Friendly"
      ],
      foodStyles: ["Italian", "Pizza", "European"],
      cuisineTags: ["international"],
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
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "card"],
      tags: ["budget", "dinner", "dry", "terrace", "wifi"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizzeria Ragazzi",
      neighborhood: "Avenue Mohamed V",
      description: "A cozy and clean Italian trattoria located on Avenue Mohamed V. Well-known among locals and travelers for artisanal thin-crust pizzas, Italian piadinas, classic pasta dishes, and friendly table service.",
      tip: "Try their freshly folded Italian piadinas for a quick, delicious lunch in downtown El Jadida.",
      badge: "local-favorite",
      bestDishes: [
        "Pizza Diavola",
        "Penne al Pesto Genovese",
        "Italian Piadina with Prosciutto & Mozzarella"
      ],
      googleRating: 4.3,
      googleReviewCount: 392,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 85,
      theforkRating: 4.2,
      theforkReviewCount: 30,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 360,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Pizzeria+Ragazzi+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 19:30 for prompt seating and fresh baked dough",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-restaurant-l-ocean",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "couple", "family", "friends"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["Waterfront Dining", "Sunset Views", "Casual Dining"],
      foodStyles: ["Moroccan", "Mediterranean", "Cafe"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 11,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: true,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: false,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      seatingTypes: ["terrace", "indoor"],
      paymentMethods: ["cash", "card"],
      tags: [
        "breakfast",
        "budget",
        "cafe-pastry",
        "dinner",
        "dry",
        "late-night",
        "sunset",
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
      name: "L'Océan Café & Restaurant",
      neighborhood: "Route de Sidi Bouzid",
      description: "A welcoming cliffside roadside restaurant perched between El Jadida and Sidi Bouzid with expansive views over the Atlantic. Renowned for morning pancake breakfasts, grilled fish, and refreshing seaside coffee.",
      tip: "An ideal pit-stop for breakfast or mint tea while driving along the scenic coastal road to Sidi Bouzid.",
      badge: "hidden-gem",
      bestDishes: [
        "Fresh Moroccan Crepes & Honey",
        "Grilled Whiting with Charmoula",
        "Moroccan Mint Tea Pot"
      ],
      googleRating: 4.3,
      googleReviewCount: 310,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 70,
      theforkRating: 4.1,
      theforkReviewCount: 25,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 280,
      openTime: "06:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=L+Ocean+Route+Sidi+Bouzid+El+Jadida",
      reservationMethod: ["none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "beach",
      bestTimeToVisit: "Early morning at 08:00 for peace and sunrise hues over the ocean",
      averageWaitMinutes: 5
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-la-grillardiere",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Family Friendly", "Casual Dining", "Local Gathering Spot"],
      foodStyles: ["Barbecue", "Moroccan", "Fast Food"],
      cuisineTags: ["moroccan-traditional"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules & flags) ──
    filter: {
      pricePerPerson: 15,
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
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["card", "cash"],
      tags: [
        "budget",
        "dinner",
        "dry",
        "late-night",
        "street-food",
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
      name: "La Grillardière El Jadida",
      neighborhood: "Boulevard de Suez / Corniche",
      description: "A popular family steakhouse and grill restaurant located along the city corniche. Specializes in charcoal-grilled beef brochettes, juicy burgers, fresh salads, and a dedicated seafood menu in a modern setting.",
      tip: "Great choice when traveling with children who crave grilled meats, burgers, and crispy fries.",
      badge: "local-favorite",
      bestDishes: [
        "Mixed Meat Grill Brochette Platter",
        "Gourmet Beef Burger with Wedges",
        "Chevre Chaud Salad"
      ],
      googleRating: 4.2,
      googleReviewCount: 650,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 130,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 590,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Grillardiere+El+Jadida",
      reservationMethod: ["phone", "none"],
      reservationContact: "not-available",
      website: "not-available",
      instagram: "not-available",
      viewType: "city",
      bestTimeToVisit: "Dinner around 19:30 before peak local family dinner rush",
      averageWaitMinutes: 10
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-mcdonalds-corniche",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Beachfront Dining", "Terrace"],
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
      tags: ["street-food", "late-night", "breakfast", "budget", "terrace"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "McDonald's Corniche",
      neighborhood: "Front de Mer",
      district: "Boulevard de Suez",
      description: "Beachside McDonald's on the El Jadida waterfront with ocean terrace views, McCafé counter, drive-thru, and late-night opening.",
      badge: "local-favorite",
      googleRating: 4.1,
      googleReviewCount: 3900,
      openTime: "08:00",
      closeTime: "02:00",
      exactAddressAndCoordinates: {
        address: "Boulevard de Suez, Front de Mer, El Jadida",
        lat: 33.2542,
        lng: -8.5028
      },
      googleMapsUrl: "https://maps.google.com/?cid=9605142374859605142",
      reservationContact: "not-available",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc",
      languagesSpoken: ["Arabic", "French", "English"],
      menu: {
        currency: "MAD",
        lastUpdated: "2026-11",
        serviceChargeIncluded: true,
        sections: [
          {
            id: "menus-best-of",
            title: "Best Of™ Meals (Burger + Fries + Drink)",
            description: "Indicative McDonald's Morocco combo pricing in MAD (counter and delivery app rates vary slightly by ~2–5 MAD).",
            items: [
              { id: "mcd-bo-bigtasty", name: "Menu Best Of™ Big Tasty", description: "Grilled 100% halal beef patty, Emmental cheese, lettuce, tomato, onions, and smoky Tasty sauce with medium fries and drink.", price: 83, isSignature: true, dietary: ["halal"] },
              { id: "mcd-bo-bigtastychicken", name: "Menu Best Of™ Big Tasty Chicken", description: "Crispy breaded halal chicken breast with Emmental cheese and smoky Tasty sauce, fries, and drink.", price: 81, dietary: ["halal"] },
              { id: "mcd-bo-mythic", name: "Menu Best Of™ Chicken Mythic®", description: "Crunchy chicken fillet with cheddar, crispy onions, and savory sauce in a toasted bun, served with fries and drink.", price: 81, dietary: ["halal"] },
              { id: "mcd-bo-mccrispy", name: "Menu Best Of™ McCrispy®", description: "Golden crispy chicken breast fillet with lettuce and creamy sauce on a brioche-style bun, plus fries and drink.", price: 73, dietary: ["halal"] },
              { id: "mcd-bo-bigmac", name: "Menu Best Of™ Big Mac®", description: "Double 100% halal beef patties, iconic Big Mac® sauce, lettuce, cheddar, pickles, and onions with fries and drink.", price: 68, isSignature: true, dietary: ["halal"] },
              { id: "mcd-bo-triplecheese", name: "Menu Best Of™ Triple Cheese", description: "Three halal beef patties layered with melted cheddar, pickles, onions, ketchup, and mustard with fries and drink.", price: 68, dietary: ["halal"] },
              { id: "mcd-bo-grandmcwrap", name: "Menu Best Of™ Grand McWrap®", description: "Grilled tortilla wrap with chicken or beef, crisp greens, tomato, and signature sauce, plus fries and drink.", price: 68, dietary: ["halal"], portionNotes: "Choice of Beef Tasty Sauce or Chicken (Honey Mustard / Algerian)" },
              { id: "mcd-bo-mcchicken", name: "Menu Best Of™ McChicken®", description: "Breaded halal chicken patty, shredded lettuce, and classic McChicken® sauce with fries and drink.", price: 66, dietary: ["halal"] },
              { id: "mcd-bo-royalcheese", name: "Menu Best Of™ Royal Cheese", description: "Quarter-pound halal beef patty with double cheddar, pickles, onions, ketchup, and mustard with fries and drink.", price: 65, dietary: ["halal"] },
              { id: "mcd-bo-doublecheese", name: "Menu Best Of™ Double Cheeseburger", description: "Two halal beef patties with double melted cheddar, pickles, and onions, served with fries and drink.", price: 63, dietary: ["halal"] },
              { id: "mcd-bo-filetofish", name: "Menu Best Of™ Filet-O-Fish®", description: "Crispy white fish fillet with cheddar and tartar sauce on a steamed bun, served with fries and drink.", price: 62, dietary: ["halal"] },
              { id: "mcd-bo-nuggets6", name: "Menu Best Of™ Chicken McNuggets® (6 pcs)", description: "Six golden halal chicken breast McNuggets with dipping sauce, medium fries, and drink.", price: 62, dietary: ["halal"] }
            ]
          },
          {
            id: "burgers-wraps",
            title: "Burgers & Wraps (À la Carte)",
            description: "Single halal-certified burgers and wraps available without the combo.",
            items: [
              { id: "mcd-alacarte-bigtasty", name: "Big Tasty", description: "Single Big Tasty beef burger with smoky sauce and Emmental cheese.", price: 71, dietary: ["halal"] },
              { id: "mcd-alacarte-grandwrap", name: "Grand McWrap®", description: "Full-size toasted tortilla wrap with beef or chicken and fresh vegetables.", price: 58, dietary: ["halal"] },
              { id: "mcd-alacarte-bigmac", name: "Big Mac®", description: "Classic double-patty halal Big Mac® burger.", price: 55, isSignature: true, dietary: ["halal"] },
              { id: "mcd-alacarte-mcchicken", name: "McChicken®", description: "Crispy breaded halal chicken burger with lettuce and mayo.", price: 54, dietary: ["halal"] },
              { id: "mcd-alacarte-royalcheese", name: "Royal Cheese", description: "Single halal beef patty with double cheddar cheese.", price: 53, dietary: ["halal"] },
              { id: "mcd-alacarte-doublecheese", name: "Double Cheeseburger", description: "Two halal beef patties and two slices of melted cheddar.", price: 50, dietary: ["halal"] },
              { id: "mcd-alacarte-ptitwrap", name: "P'tit Wrap", description: "Snack-sized chicken wrap with honey mustard sauce and lettuce.", price: 30, dietary: ["halal"] },
              { id: "mcd-alacarte-chickenburger", name: "Chickenburger", description: "Classic value crispy chicken sandwich.", price: 23, dietary: ["halal"] },
              { id: "mcd-alacarte-cheeseburger", name: "Cheeseburger", description: "Halal beef patty with cheddar, pickles, ketchup, and mustard.", price: 22, dietary: ["halal"] },
              { id: "mcd-alacarte-hamburger", name: "Hamburger", description: "Classic single halal beef patty burger.", price: 19, dietary: ["halal"] }
            ]
          },
          {
            id: "nuggets-sides-kids",
            title: "McNuggets®, Fries & Happy Meal®",
            description: "Crispy chicken bites, share boxes, fries, and kids meals.",
            items: [
              { id: "mcd-side-chickenbox21", name: "Chicken Box (21 pcs)", description: "Large sharing box of crispy halal chicken pieces and nuggets.", price: 116, dietary: ["halal"] },
              { id: "mcd-side-nuggets9", name: "Chicken McNuggets® (9 pcs)", description: "Nine halal chicken McNuggets served with two dipping sauces.", price: 57, dietary: ["halal"] },
              { id: "mcd-side-nuggets6", name: "Chicken McNuggets® (6 pcs)", description: "Six halal chicken McNuggets served with dipping sauce.", price: 49, dietary: ["halal"] },
              { id: "mcd-side-nuggets4", name: "Chicken McNuggets® (4 pcs)", description: "Four halal chicken McNuggets served with dipping sauce.", price: 35, dietary: ["halal"] },
              { id: "mcd-kids-happymeal", name: "Happy Meal®", description: "Kids meal with choice of burger or 4 McNuggets, small fries or fruit, drink, and toy.", price: 36, dietary: ["halal"] },
              { id: "mcd-side-mcflavorfries", name: "McFlavor Fries", description: "Loaded fries topped with melted cheddar and crispy onions or Algerian sauce.", price: 27, dietary: ["halal", "vegetarian"] },
              { id: "mcd-side-mediumfries", name: "Medium Fries / Crinkle Fries", description: "Medium portion of golden salted fries or crinkle-cut potatoes.", price: 20, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "mcd-side-smallfries", name: "Small Fries", description: "Classic small golden French fries.", price: 16, dietary: ["halal", "vegan", "vegetarian"] }
            ]
          },
          {
            id: "desserts-drinks",
            title: "McFlurry®, Drinks & Cold Treats",
            description: "Soft-serve ice cream cups and chilled soft drinks.",
            items: [
              { id: "mcd-dessert-mcflurry-special", name: "Golden / Special Edition McFlurry®", description: "Creamy vanilla soft serve swirled with seasonal toppings.", price: 32, dietary: ["halal", "vegetarian"] },
              { id: "mcd-dessert-mcflurry", name: "McFlurry® (Oreo, KitKat, or M&M's)", description: "Vanilla soft-serve ice cream blended with classic chocolate or cookie mix-ins.", price: 30, isSignature: true, dietary: ["halal", "vegetarian"] },
              { id: "mcd-drink-mcfizz", name: "McFizz®", description: "Sparkling fruit refresher available in Passion Fruit or Mojito flavor.", price: 22, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "mcd-drink-hawaii", name: "Small Hawaii™", description: "Iconic Moroccan tropical soda served ice-cold.", price: 18, dietary: ["halal", "vegan", "vegetarian"] },
              { id: "mcd-drink-soda", name: "Small Coca-Cola® / Zero / Fanta / Sprite", description: "Chilled 25cl fountain soft drink.", price: 16, dietary: ["halal", "vegan", "vegetarian"] }
            ]
          }
        ]
      }
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "Fixed Digital Kiosk Pricing", tagColor: "money", tone: "good", description: "Transparent menu-board and digital kiosk pricing in MAD (Best Of combos ~62–83 MAD); pricier than local Moroccan street snacks, card and contactless accepted.", state: "verified" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "Standardized, Busy Rush Cleanups", tagColor: "water", tone: "caution", description: "Global chain food-safety standards, though high corniche foot traffic during peak evenings and weekends can temporarily strain table and restroom upkeep.", state: "verified" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "100% Halal Certified Chain", tagColor: "food", tone: "good", description: "All beef and chicken served at McDonald's Morocco is 100% halal-certified; international fast-food menu rather than Moroccan dishes, completely dry.", state: "verified" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "Bustling Beachside Terrace", tagColor: "alert", tone: "caution", description: "Air-conditioned dining room, drive-thru, and waterfront terrace; expect lively crowds on sunny weekends and summer evenings.", state: "verified" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "Kiosks Speed Up Ordering", tagColor: "safety", tone: "good", description: "Self-order touchscreen kiosks streamline queues; peak-hour waits and occasional takeaway bag mix-ups can occur during rush periods.", state: "verified" }
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-kfc-sela-park",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["Fast Food", "Retail Park Dining"],
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
      nearBeach: false,
      nearCenter: false,
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
      name: "KFC Sela Park",
      neighborhood: "Sela Park",
      district: "Route de Casablanca",
      description: "Modern branch inside Sela Park shopping retail park in El Jadida serving crispy fried chicken, Zinger burgers, and family meal boxes.",
      badge: "local-favorite",
      googleRating: 3.9,
      googleReviewCount: 1300,
      openTime: "11:00",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Sela Park El Jadida, Route de Casablanca, El Jadida",
        lat: 33.2425,
        lng: -8.4795
      },
      googleMapsUrl: "https://maps.google.com/?cid=1716253485961716253",
      reservationContact: "not-available",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-burger-king-sela-park",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["Fast Food", "Drive-Thru", "Family Friendly"],
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
      nearBeach: false,
      nearCenter: false,
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
      name: "Burger King Sela Park",
      neighborhood: "Sela Park",
      district: "Route de Casablanca",
      description: "Flame-broiled burgers and drive-thru service at the Sela Park commercial park in El Jadida, offering Whoppers, King fries, and sundaes.",
      badge: "local-favorite",
      googleRating: 4,
      googleReviewCount: 1550,
      openTime: "11:00",
      closeTime: "00:00",
      exactAddressAndCoordinates: {
        address: "Sela Park El Jadida, Route de Casablanca, El Jadida",
        lat: 33.2425,
        lng: -8.4795
      },
      googleMapsUrl: "https://maps.google.com/?cid=2827364596072827364",
      reservationContact: "not-available",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },

  {
    id: "e-el_jadida-pizza-hut-centre-ville",
    city: "el_jadida",

    // ── 1. QUIZ (personalization & recommendation matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends"],
      mealTypes: ["lunch", "dinner"],
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
      tags: ["budget", "medina"],
      verificationStatus: "verified",
      wiFi: true,
      airConditioning: true,
      wheelchairAccessible: true
    },

    // ── 3. UI (presentation, reviews, dishes & contacts) ──
    ui: {
      name: "Pizza Hut Centre Ville",
      neighborhood: "Centre Ville",
      district: "Boulevard de Suez",
      description: "Centrally positioned Pizza Hut on Boulevard de Suez in El Jadida serving pan pizzas, garlic bread, and takeout specials.",
      badge: "local-favorite",
      googleRating: 3.8,
      googleReviewCount: 1150,
      openTime: "11:30",
      closeTime: "23:30",
      exactAddressAndCoordinates: {
        address: "Boulevard de Suez, Centre Ville, El Jadida",
        lat: 33.253,
        lng: -8.5035
      },
      googleMapsUrl: "https://maps.google.com/?cid=3938475607183938475",
      reservationContact: "not-available",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc",
      languagesSpoken: ["Arabic", "French", "English"]
    }
  ,
    // ── 4. WORRIES ("Things You're Worried About!") ──
    worries: [
      { id: "financial-trust", title: "Financial Trust", icon: "receipt", tag: "not available", description: "not available", state: "pending" },
      { id: "health-safety", title: "Health & Safety", icon: "droplets", tag: "not available", description: "not available", state: "pending" },
      { id: "culinary-authenticity", title: "Culinary Authenticity", icon: "chef", tag: "not available", description: "not available", state: "pending" },
      { id: "comfort-environment", title: "Comfort & Atmosphere", icon: "megaphone", tag: "not available", description: "not available", state: "pending" },
      { id: "service-expectations", title: "Service Expectations", icon: "clock", tag: "not available", description: "not available", state: "pending" },
    ],
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  }
];
