/**
 * =========================================================================
 * MOROCCAN MATE — FOOD (EAT) LISTINGS: CASABLANCA
 * =========================================================================
 * MASTER TEMPLATE REFERENCE & ALLOWED ARRAY OPTIONS BIBLE
 * Canonical Bible File: src/listings/eat/template.eat.ts
 *
 * This file strictly adheres to the schema and values defined in template.eat.ts.
 * Any new option MUST first be added to the canonical Bible in template.eat.ts.
 *
 * ALLOWED OPTIONS BIBLE:
 * - id:                 'e-[city]-[id]' | 'eat-[city]-[slug]' (e.g., 'e-casablanca-1' or 'eat-casablanca-restaurant')
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
 *   id: 'e-casablanca-[id]',
 *   city: 'casablanca',
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

export const casablancaEat: EatListing[] = [
  {
    id: "e-casablanca-1",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["panoramic-views", "palatial", "romantic", "opulent"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 1800,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "visa", "mastercard"],
      tags: ["fine-dining", "pastilla", "royal-mansour", "ocean-view", "splurge"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Grande Table Marocaine",
      neighborhood: "Centre-Ville",
      description: "Signature 23rd-floor Moroccan gastronomic palace inside Royal Mansour Casablanca, celebrating historic royal recipes with 360-degree ocean views.",
      tip: "Reserve early for sunset and request a window table facing the Hassan II Mosque to watch the Atlantic horizon light up.",
      badge: "splurge",
      bestDishes: [
        "Pastilla royale de pigeon aux amandes",
        "Homard bleu de Oualidia cuit en carapace",
        "M'choui d'epaule d'agneau au beurre fume"
      ],
      pros: ["Exceptional 23rd-floor ocean panoramas", "Flawless palace-grade service", "Refined traditional terroir recipes"],
      cons: ["Very high price tier", "Dress code strictly enforced"],
      googleRating: 4.8,
      googleReviewCount: 140,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 95,
      theforkRating: 4.8,
      theforkReviewCount: 85,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 140,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Grande+Table+Marocaine+Royal+Mansour+Casablanca",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212529900500",
      bookingUrl: "https://www.royalmansour.com/casablanca/restauration/la-grande-table-marocaine/",
      whatsappNumber: "+212630004499",
      website: "https://www.royalmansour.com/casablanca/restauration/la-grande-table-marocaine/",
      instagram: "https://instagram.com/royalmansourcasablanca"
    }
  },

  {
    id: "e-casablanca-2",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Mediterranean", "Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["oceanfront", "sunset", "lively", "iconic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["oceanfront", "sunset-drinks", "seafood", "corniche", "nightlife"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Cabestan",
      neighborhood: "Phare El Hank",
      description: "Legendary oceanfront institution perched over the crashing Atlantic waves since 1926, offering prime seafood, steaks, and a lively late-night lounge.",
      tip: "Book an outdoor terrace table for 18:30 to catch golden hour over the ocean before the late-night DJ sets kick off.",
      badge: "splurge",
      bestDishes: [
        "Dakhla Oysters on Ice",
        "Wood-oven Caramelized Octopus",
        "Salt-crusted Wild Sea Bass"
      ],
      pros: ["Dramatic clifftop ocean panorama", "Vibrant evening lounge energy", "Extensive seafood raw bar"],
      cons: ["Can get noisy during weekend DJ sets", "Terrace requires advance booking in summer"],
      googleRating: 4.1,
      googleReviewCount: 3680,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 1860,
      theforkRating: 4.1,
      theforkReviewCount: 450,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 3680,
      openTime: "12:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Cabestan+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212522391190",
      bookingUrl: "https://cabestan.ma",
      whatsappNumber: "+212661448822",
      website: "https://cabestan.ma",
      instagram: "https://instagram.com/lecabestanoceanview"
    }
  },

  {
    id: "e-casablanca-3",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "seniors"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["French-Moroccan", "International", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["cinematic", "live-jazz", "historic", "nostalgic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 500,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: false,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["live-jazz", "casablanca-movie", "cocktails", "medina-ramparts"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Rick's Café",
      neighborhood: "Ancienne Médina",
      description: "Iconic cinematic dining salon and cocktail bar set inside a 1930s riad, recreating the timeless elegance and live acoustic piano jazz of the 1942 classic.",
      tip: "Book the second evening seating (21:00) to savor dinner while resident pianist Issam Chabaa performs 'As Time Goes By'.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Sea Bass with Saffron Cream",
        "Rick's Char-Grilled Ribeye",
        "Original Rick's Cheesecake"
      ],
      pros: ["Atmospheric live acoustic jazz every evening", "Faithful 1940s colonial-style decor", "Complimentary valet parking at the door"],
      cons: ["Strict smart-casual dress code strictly enforced", "Popular with tour groups during lunch"],
      googleRating: 4.2,
      googleReviewCount: 6500,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 3820,
      theforkRating: 4.1,
      theforkReviewCount: 650,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 6500,
      openTime: "12:00",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Rick%27s+Cafe+Casablanca",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212522274207",
      bookingUrl: "https://www.rickscafe.ma",
      whatsappNumber: "",
      website: "https://www.rickscafe.ma",
      instagram: "https://instagram.com/rickscafe_casablanca"
    }
  },

  {
    id: "e-casablanca-4",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "business-friendly"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["zen", "minimalist", "culinary-art", "sleek"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 850,
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
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["japanese", "omakase", "sushi", "robata", "gauthier"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Iloli",
      neighborhood: "Gauthier",
      description: "Morocco's premier Japanese culinary sanctuary pairing authentic omakase technique and Robata grill with pristine Atlantic seafood and local produce.",
      tip: "Request seating directly at the open kitchen sushi counter to watch the master chefs slice sashimi with surgical precision.",
      badge: "splurge",
      bestDishes: [
        "Dakhla Oysters with Yuzu Ponzu",
        "Truffled Robata Sea Bream",
        "Wagyu Beef Tataki"
      ],
      pros: ["Pinnacle of fine Asian dining in North Africa", "Exceptional Japanese sake and whisky cellar", "Serene patio retreat in Gauthier"],
      cons: ["High price point", "Closed on Sundays"],
      googleRating: 4.4,
      googleReviewCount: 750,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 460,
      theforkRating: 4.4,
      theforkReviewCount: 220,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 750,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Iloli+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212608866633",
      bookingUrl: "https://www.iloli-restaurant.com",
      whatsappNumber: "+212608866633",
      website: "https://www.iloli-restaurant.com",
      instagram: "https://instagram.com/iloli.casablanca"
    }
  },

  {
    id: "e-casablanca-5",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "solo", "seniors"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous", "Seafood"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["historic-fortress", "lush-garden", "family-friendly", "relaxed"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 180,
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
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["moroccan-breakfast", "garden-patio", "bastion", "dry-restaurant", "ftour"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Sqala",
      neighborhood: "Ancienne Médina",
      description: "Picturesque garden café situated inside an 18th-century fortified Portuguese bastion, famous for traditional Fassi breakfasts and courtyard tagines.",
      tip: "Arrive before 10:30 AM on weekends to secure an outdoor table by the fountains for their legendary Moroccan breakfast spread.",
      badge: "local-favorite",
      bestDishes: [
        "Ftour Sqala Traditional Breakfast Platter",
        "Tagine of Fresh Atlantic Sea Bass",
        "Sweet and Savory Pigeon Pastilla"
      ],
      pros: ["Stunning open-air garden courtyard surrounded by ancient cannons", "Generous breakfast platters", "Alcohol-free family environment"],
      cons: ["Can have weekend wait times", "No alcohol served"],
      googleRating: 4.2,
      googleReviewCount: 11600,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 3060,
      theforkRating: 4.4,
      theforkReviewCount: 1200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 11600,
      openTime: "08:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Sqala+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522260960",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://lasqala.com",
      instagram: "https://instagram.com/lasqala"
    }
  },

  {
    id: "e-casablanca-6",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["dinner"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["riad", "theatrical", "candlelit", "authentic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 450,
      isHalal: true,
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
      ramadanFriendly: "special-ftour",
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["riad-dining", "live-music", "tagines", "medina", "romantic"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar Dada",
      neighborhood: "Ancienne Médina",
      description: "Enchanting traditional riad hidden within the old medina walls, blending high-end Moroccan comfort food with theatrical hospitality.",
      tip: "Order the slow-cooked lamb shoulder; it is braised for eight hours until fork-tender and served with roasted almonds.",
      badge: "splurge",
      bestDishes: [
        "Slow-Cooked Lamb Shoulder Mechoui",
        "Zaalouk and Cooked Medina Salads",
        "Pastilla au Lait with Almonds"
      ],
      pros: ["Gorgeous zellige courtyard architecture", "Warm and attentive ceremonial service", "Excellent selection of Moroccan wines"],
      cons: ["Evening dinner service only", "Slightly tucked away inside the medina alleys"],
      googleRating: 4.1,
      googleReviewCount: 2400,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 850,
      theforkRating: 4.2,
      theforkReviewCount: 400,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 2400,
      openTime: "19:30",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Dar+Dada+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522262525",
      bookingUrl: "",
      whatsappNumber: "+212661332211",
      website: "https://gardencasa.com/dardada",
      instagram: "https://instagram.com/dardada_casa"
    }
  },

  {
    id: "e-casablanca-7",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["dinner", "brunch"],
      experienceTypes: ["fine-dining", "traditional"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["art-deco", "intimate", "refined", "quiet"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
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
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hotel-le-doge", "fassi-gastronomy", "art-deco", "romantic"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Jasmine",
      neighborhood: "Gauthier",
      description: "Intimate gourmet Moroccan dining room inside the Relais & Châteaux Hôtel Le Doge, serving heritage Fassi imperial recipes under stained-glass Art Deco ceilings.",
      tip: "Pair your dinner with an aperitif on Le Doge's rooftop bar before descending to the candlelit dining room.",
      badge: "splurge",
      bestDishes: [
        "Kebab Maghdour Tagine with Poached Quail Egg",
        "Imperial Fassi Lamb Couscous",
        "Traditional Harira with Zagora Dates"
      ],
      pros: ["Extremely quiet and discreet ambiance", "Refined table settings with handcrafted silver", "Exemplary Relais & Châteaux service"],
      cons: ["Limited indoor seating capacity", "Reservation mandatory well in advance"],
      googleRating: 4.8,
      googleReviewCount: 160,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 230,
      theforkRating: 4.6,
      theforkReviewCount: 125,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 160,
      openTime: "19:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Jasmine+Hotel+Le+Doge+Casablanca",
      reservationMethod: ["phone", "email", "website"],
      reservationContact: "+212522467800",
      bookingUrl: "https://www.hotelledoge.com",
      whatsappNumber: "",
      website: "https://www.hotelledoge.com",
      instagram: "https://instagram.com/hotelledogecasablanca"
    }
  },

  {
    id: "e-casablanca-8",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "solo", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Seafood", "Mediterranean"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["nostalgic", "bistro", "authentic", "vintage"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 260,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: false,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["historic-tavern", "fried-calamari", "paella", "fresh-fish"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Taverne du Dauphin",
      neighborhood: "Centre-Ville",
      description: "Endearing 1948 portside maritime tavern beloved by locals for no-nonsense fresh catches of the day, cold Casablanca beers, and Spanish paella.",
      tip: "Arrive right at 12:15 PM for lunch; this old-school tavern fills up almost instantaneously with neighborhood bankers and port captains.",
      badge: "local",
      bestDishes: [
        "Crispy Fried Squid Beignets",
        "Spanish Seafood Paella for Two",
        "Grilled Atlantic Sole Meuniere"
      ],
      pros: ["Ultra-fresh daily port catch", "Old Casablanca mid-century tavern charm", "Generous portions"],
      cons: ["Closed on Sundays", "No terrace or outdoor seating"],
      googleRating: 4.2,
      googleReviewCount: 1390,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 755,
      theforkRating: 4.2,
      theforkReviewCount: 300,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1390,
      openTime: "12:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Taverne+du+Dauphin+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522221200",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/latavernedudauphin"
    }
  },

  {
    id: "e-casablanca-9",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Middle Eastern", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["sunset-view", "trendy", "oceanfront", "dj-sets"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 520,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["levantine", "mezze", "ocean-terrace", "corniche", "sunset"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Umayya",
      neighborhood: "Phare El Hank",
      description: "Chic Levantine and Mediterranean oceanfront restaurant overlooking the Atlantic, known for stylish mezze spreads, cocktails, and sunset DJ sessions.",
      tip: "Order several cold and hot mezze to share among friends while enjoying the sea breeze from the outdoor deck.",
      badge: "local-favorite",
      bestDishes: [
        "Smoked Baba Ganoush with Pomegranate",
        "Shrimp and Herb Falafel",
        "Slow-Roasted Lamb Shank with Spiced Rice"
      ],
      pros: ["Prime sunset terrace facing the Atlantic", "Lively social crowd and music", "Exceptional shareable mezze"],
      cons: ["Valet queue can be busy on weekend evenings", "Music gets louder after 22:00"],
      googleRating: 4.1,
      googleReviewCount: 550,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 190,
      theforkRating: 4.0,
      theforkReviewCount: 120,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 550,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Umayya+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522363030",
      bookingUrl: "https://cabestan.ma/umayya",
      whatsappNumber: "+212661448822",
      website: "https://cabestan.ma/umayya",
      instagram: "https://instagram.com/umayyacasablanca"
    }
  },

  {
    id: "e-casablanca-10",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["International", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["pan-asian", "ocean-terrace", "stylish", "romantic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 580,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pan-asian", "sushi", "oceanfront", "cocktails", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Lily's",
      neighborhood: "Phare El Hank",
      description: "Sophisticated Pan-Asian dining pavilion set high on the cliffs of El Hank, featuring sushi, Thai curries, and floor-to-ceiling glass windows over the ocean.",
      tip: "Request an edge-of-terrace table for an unobstructed view of waves breaking against the rocky shore.",
      badge: "splurge",
      bestDishes: [
        "Tom Kha Gai Lobster Soup",
        "Crispy Duck with Steamed Pancakes",
        "Chef's Signature Dragon Maki Roll"
      ],
      pros: ["Dramatic clifftop Atlantic perspective", "Extensive pan-Asian menu variety", "Beautiful contemporary botanical interiors"],
      cons: ["Weekend dinner reservations are essential", "Premium pricing on cocktails"],
      googleRating: 4.2,
      googleReviewCount: 1220,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 460,
      theforkRating: 4.1,
      theforkReviewCount: 185,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1220,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Lily%27s+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522361212",
      bookingUrl: "https://lilys.ma",
      whatsappNumber: "",
      website: "https://lilys.ma",
      instagram: "https://instagram.com/lilys_casablanca"
    }
  },

  {
    id: "e-casablanca-11",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "business-friendly"],
      mealTypes: ["lunch", "dinner", "flexible"],
      experienceTypes: ["fine-dining", "rooftop"],
      foodStyles: ["Seafood", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["lighthouse", "wave-crashing", "historic-landmark", "rooftop"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor", "terrace", "rooftop"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["lighthouse", "seafood-bistro", "rooftop-bar", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Petit Rocher",
      neighborhood: "Phare El Hank",
      description: "Historic 1932 lighthouse-turned-seafood bistro directly touching the Atlantic rocks, complemented by a rooftop cocktail lounge with Hassan II Mosque views.",
      tip: "Head up to the top-floor rooftop bar before lunch for an ocean cocktail before sitting down for the seafood.",
      badge: "splurge",
      bestDishes: [
        "Sole Meuniere with Roasted Baby Potatoes",
        "Atlantic Lobster Gratine",
        "Citrus Tart Meringuee"
      ],
      pros: ["Direct shoreline location with ocean spray", "Rooftop terrace overlooking the mosque", "Valet service on arrival"],
      cons: ["Can get breezy on the terrace during high tide", "Higher-tier pricing"],
      googleRating: 4.3,
      googleReviewCount: 1530,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 525,
      theforkRating: 4.2,
      theforkReviewCount: 255,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1530,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Petit+Rocher+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522362626",
      bookingUrl: "http://lepetitrochercasa.com",
      whatsappNumber: "",
      website: "http://lepetitrochercasa.com",
      instagram: "https://instagram.com/lepetitrocher_casa"
    }
  },

  {
    id: "e-casablanca-12",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "solo", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["homestyle", "habous-arches", "welcoming", "cozy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 130,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["habous", "couscous", "rfissa", "homestyle", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Zayna Moroccan Taste",
      neighborhood: "Habous",
      description: "Heartwarming family-run eatery nestled beneath the stone arches of Habous, celebrating authentic home-style Rfissa, Friday couscous, and slow-braised tagines.",
      tip: "Pair your visit with an afternoon exploration of the Habous olive market and pastry shopping at Pâtisserie Bennis Habous.",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Chicken Rfissa with Fenugreek",
        "Friday Royal Couscous with Seven Vegetables",
        "Zaalouk and Taktouka Salad Sampler"
      ],
      pros: ["Authentic home-cooked flavors", "Very fair and accessible pricing", "Charming Habous neighborhood location"],
      cons: ["Small dining room that fills up quickly at peak lunch hours", "Alcohol-free"],
      googleRating: 4.2,
      googleReviewCount: 1330,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 710,
      theforkRating: 4.3,
      theforkReviewCount: 200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1330,
      openTime: "12:00",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Zayna+Moroccan+Taste+Casablanca",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212522452020",
      bookingUrl: "",
      whatsappNumber: "+212663877715",
      website: "not-available",
      instagram: "https://instagram.com/zaynamoroccantaste"
    }
  },

  {
    id: "e-casablanca-13",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "hidden-gem"],
      foodStyles: ["International", "Vegetarian/Vegan"],
      cuisineTags: ["international"],
      archetypeAffinity: ["nomad", "culture"],
      vibeTags: ["fusion", "artsy", "creative"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      ramadanFriendly: "closed",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["fusion", "african-fusion", "gauthier", "dry"],
      isHiddenGem: true,
      isTemporarilyHidden: true,
      verificationStatus: "possibly-closed"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "NKOA",
      neighborhood: "Gauthier",
      description: "Pioneering Afro-Asian-Latin fusion bistro in Gauthier that blended cross-continental street cuisines in an art-filled setting.",
      tip: "NOTE: This restaurant has permanently ceased operations. Preserved in database records for historical and routing reference.",
      badge: "hidden-gem",
      bestDishes: [
        "Korean Gochujang Glazed Wings",
        "Senegalese Dibi Spiced Beef",
        "Peruvian Corvina Ceviche"
      ],
      pros: ["Trailblazing cross-continental flavors", "Creative presentation", "Vibrant dining room art"],
      cons: ["Permanently closed", "Small space when active"],
      googleRating: 4.5,
      googleReviewCount: 530,
      tripadvisorRating: 4.8,
      tripadvisorReviewCount: 465,
      theforkRating: 4.6,
      theforkReviewCount: 180,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 530,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=NKOA+Casablanca",
      reservationMethod: ["phone"],
      reservationContact: "+212522255050",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/nkoarestaurant"
    }
  },

  {
    id: "e-casablanca-14",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "large-groups"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture", "luxury"],
      vibeTags: ["andalusian-palace", "oriental-show", "live-oud", "dinner-spectacle"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["dinner-show", "oriental-music", "pastilla", "ain-diab", "hotel-val-danfa"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Basmane",
      neighborhood: "Ain Diab",
      description: "Sumptuous Moroccan dinner salon inside Hôtel Val d'Anfa, featuring intricately carved cedarwood ceilings, live Andalusian musicians, and authentic imperial banquets.",
      tip: "Book for 20:30 to enjoy your pastilla and tagine right as the acoustic oud and traditional violin performance begins.",
      badge: "splurge",
      bestDishes: [
        "Crispy Seafood Pastilla with Calamari and Shrimp",
        "Slow-Braised Lamb Tagine with Prunes and Roasted Almonds",
        "Mechoui-Style Braised Shoulder of Lamb"
      ],
      pros: ["Authentic live Andalusian music performance", "Exquisite sculpted Arabo-Andalusian woodwork", "Free hotel valet parking"],
      cons: ["Evening dinner only", "Can feel formal and traditional for casual dining"],
      googleRating: 4.2,
      googleReviewCount: 1080,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 510,
      theforkRating: 4.2,
      theforkReviewCount: 200,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1080,
      openTime: "19:30",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Basmane+Hotel+Val+d+Anfa+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522797070",
      bookingUrl: "https://hotel-val-danfa.com/le-basmane",
      whatsappNumber: "",
      website: "https://hotel-val-danfa.com/le-basmane",
      instagram: "https://instagram.com/lebasmane_casa"
    }
  },

  {
    id: "e-casablanca-15",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Grill & BBQ", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["parisian-brasserie", "business-lunch", "aged-beef", "timeless"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: false,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: ["sunday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["parisian-bistro", "prime-steaks", "wine-cellar", "business-lunch"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Bavaroise",
      neighborhood: "Centre-Ville",
      description: "Historic 1968 Parisian brasserie and steakhouse institution in downtown Casablanca, revered for prime dry-aged steaks, fresh oysters, and elite business lunches.",
      tip: "Ask the head server for the day's dry-aged beef cuts display and pair it with their classic homemade gratin dauphinois.",
      badge: "splurge",
      bestDishes: [
        "Aged Charolais Ribeye with Homemade Béarnaise",
        "Classic Hand-Cut Beef Tartare",
        "Pan-Seared Atlantic Dover Sole Meuniere"
      ],
      pros: ["Premier steakhouse in downtown Casablanca", "Impeccable old-school French brasserie service", "Outstanding wine cellar selection"],
      cons: ["Closed on Sundays", "Meat-centric with very limited vegetarian options"],
      googleRating: 4.4,
      googleReviewCount: 840,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 715,
      theforkRating: 4.5,
      theforkReviewCount: 350,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 840,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Bavaroise+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522311760",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/labavaroise_casa"
    }
  },

  {
    id: "e-casablanca-16",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["couple", "family", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["lush-courtyard", "fountain", "fassi-heritage", "historic-villa"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 380,
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
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "outdoor", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["patio-garden", "fassi-pastilla", "downtown", "heritage-moroccan"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Al Mounia",
      neighborhood: "Centre-Ville",
      description: "Iconic downtown garden restaurant housed in an authentic Fassi-style villa, celebrated for authentic pastillas, tagines, and an enchanting tree-shaded courtyard.",
      tip: "Request an outdoor courtyard table under the ancient rubber tree beside the fountain for a serene, romantic garden meal.",
      badge: "local-favorite",
      bestDishes: [
        "Crisp Fassi Pigeon Pastilla with Cinnamon",
        "Friday Seven-Vegetable Couscous",
        "Slow-Cooked Beef Shank Tagine with Artichokes"
      ],
      pros: ["Enchanting leafy outdoor garden hidden in the city center", "Time-tested authentic Moroccan recipes", "Full alcohol and Moroccan wine menu"],
      cons: ["Service can slow down during busy peak hours", "Closed on Sundays"],
      googleRating: 4.1,
      googleReviewCount: 1620,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 1120,
      theforkRating: 4.1,
      theforkReviewCount: 350,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1620,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Al+Mounia+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522222669",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "e-casablanca-17",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["coastal-fine-dining", "ocean-terrace", "michelin-standard", "historic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 850,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["french-gastronomy", "lobster", "coastal-dining", "maitre-cuisinier"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "A Ma Bretagne",
      neighborhood: "Ain Diab",
      description: "Illustrious seafront gastronomic benchmark helmed by Maître Cuisinier de France André Halbert, renowned since 1957 for grand French seafood along the rocky coast.",
      tip: "Come for a long, relaxed lunch around 13:00 to watch waves crash directly below your table on the sunlit terrace.",
      badge: "splurge",
      bestDishes: [
        "Atlantic Blue Lobster Thermidor",
        "Oysters in Warm Champagne Sabayon",
        "Oven-Roasted Turbot with Beurre Blanc"
      ],
      pros: ["Unmatched fine-dining French culinary technique", "Front-row Atlantic Ocean panorama", "Extensive international grand cru wine cellar"],
      cons: ["High price tier", "Closed Mondays"],
      googleRating: 4.4,
      googleReviewCount: 390,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 335,
      theforkRating: 4.3,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 390,
      openTime: "12:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=A+Ma+Bretagne+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522362112",
      bookingUrl: "https://amabretagne.com",
      whatsappNumber: "",
      website: "https://amabretagne.com",
      instagram: "https://instagram.com/amabretagne_casa"
    }
  },

  {
    id: "e-casablanca-18",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "couple", "solo"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "hidden-gem"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer"],
      vibeTags: ["intimate", "family-run", "cozy", "comfort-food"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["authentic-tagine", "home-cooking", "gauthier", "dry-restaurant"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Cuistot Traditionnel",
      neighborhood: "Gauthier",
      description: "Warm, family-run Moroccan gem in Gauthier where Chef Aziz personally welcomes guests to savor slow-braised clay pot tagines and artisanal pastillas.",
      tip: "The caramelized fig and walnut lamb tagine is an extraordinary seasonal specialty—ask if it's cooking on the day of your visit.",
      badge: "hidden-gem",
      bestDishes: [
        "Slow-Cooked Lamb Tagine with Caramelized Figs and Walnuts",
        "Traditional Veau aux Pruneaux",
        "Crispy Seafood Pastilla"
      ],
      pros: ["Chef Aziz's personal and welcoming hospitality", "Deeply authentic home-style clay pot cooking", "Cozy, warm zellige decor"],
      cons: ["Compact dining room fills up fast", "No alcohol served"],
      googleRating: 4.4,
      googleReviewCount: 2120,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 650,
      theforkRating: 4.4,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 2120,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Cuistot+Traditionnel+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212522273911",
      bookingUrl: "https://lecuistot-traditionnel.com",
      whatsappNumber: "+212661624306",
      website: "https://lecuistot-traditionnel.com",
      instagram: "https://instagram.com/lecuistottraditionnel"
    }
  },

  {
    id: "e-casablanca-19",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "friends"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "International", "Seafood"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["hotel-brasserie", "business-hub", "refined", "wine-lounge"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hyatt-regency", "parisian-brasserie", "business-dinner", "hotel-dining"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café M",
      neighborhood: "Centre-Ville",
      description: "Sophisticated contemporary French brasserie inside the Hyatt Regency overlooking Place des Nations Unies, renowned for curated wine pairings and refined continental fare.",
      tip: "Ideal for discreet corporate lunches or private dinners; book one of the high-backed banquettes in the rear dining area.",
      badge: "splurge",
      bestDishes: [
        "Pan-Seared Duck Breast with Cherry Glaze",
        "Char-Grilled Tournedos with Truffled Jus",
        "Madagascar Bourbon Vanilla Crème Brûlée"
      ],
      pros: ["Quiet, soundproofed room ideal for meetings", "Prime central Hyatt Regency location", "Sommelier-guided international wine list"],
      cons: ["Hotel brasserie atmosphere can feel formal", "Premium luxury hotel pricing"],
      googleRating: 4.3,
      googleReviewCount: 230,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 180,
      theforkRating: 4.3,
      theforkReviewCount: 90,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 230,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+M+Hyatt+Regency+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522431234",
      bookingUrl: "https://www.hyatt.com/en-US/hotel/morocco/hyatt-regency-casablanca/casar/dining/cafe-m",
      whatsappNumber: "",
      website: "https://www.hyatt.com/en-US/hotel/morocco/hyatt-regency-casablanca/casar/dining/cafe-m",
      instagram: "https://instagram.com/hyattregencycasablanca"
    }
  },

  {
    id: "e-casablanca-20",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "hidden-gem", "casual"],
      foodStyles: ["Vegetarian/Vegan", "Cafe & Pastry"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "culture", "budget"],
      vibeTags: ["plant-based", "botanical", "used-book-cafe", "calm"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 130,
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
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["vegan", "plant-based", "specialty-coffee", "gluten-free", "gauthier"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Niya",
      neighborhood: "Gauthier",
      description: "Casablanca's leading 100% plant-based sanctuary and book café in Gauthier, crafting seasonal organic Moroccan dishes, vegan cheeses, and gluten-free pastries.",
      tip: "Try their Friday plant-based Couscous Vert or order their cold-pressed juice infusions made with fresh Moroccan herbs.",
      badge: "hidden-gem",
      bestDishes: [
        "Sprouted Lentil Falafel with Herbed Tahini",
        "Seasonal Quinoa and Charmoula Tofu Bowl",
        "Raw Chocolate and Almond Ganache Cake"
      ],
      pros: ["100% organic and vegan menu", "Peaceful book-filled atmosphere", "Free filtered mineral water carafe for every guest"],
      cons: ["Closed on Sundays", "No alcohol served"],
      googleRating: 4.7,
      googleReviewCount: 220,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 85,
      theforkRating: 4.6,
      theforkReviewCount: 50,
      restaurantguruRating: 4.7,
      restaurantguruReviewCount: 220,
      openTime: "10:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Niya+Casablanca+Gauthier",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212611189390",
      bookingUrl: "https://niya-casablanca.com",
      whatsappNumber: "+212611189390",
      website: "https://niya-casablanca.com",
      instagram: "https://instagram.com/niya_casablanca"
    }
  },

  {
    id: "eat-casablanca-mcdonalds-ain-diab",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo", "large-groups"],
      mealTypes: ["breakfast", "lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["beachfront", "fast-food", "ocean-terrace", "late-night"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
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
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["fast-food", "oceanfront", "late-night", "mccafe", "drive-thru"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "McDonald's Ain Diab",
      neighborhood: "Ain Diab",
      description: "Flagship beachfront McDonald's along the Ain Diab Corniche with an ocean-view terrace, McCafé, McDrive, play area, and late-night service.",
      tip: "Head up to the upper outdoor terrace to enjoy your coffee or burger with fresh sea air looking out over the Atlantic breakers.",
      badge: "local-favorite",
      bestDishes: [
        "Big Mac Combo Meal",
        "McSpicy Chicken Burger",
        "McCafé Salted Caramel Frappé"
      ],
      pros: ["Oceanfront seating with panoramic beach views", "Open extremely late with drive-thru", "Children's playground and McCafé"],
      cons: ["Massive crowds and long queues on sunny weekends", "Standard chain fast-food menu"],
      googleRating: 4.1,
      googleReviewCount: 8950,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 220,
      theforkRating: 3.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 8950,
      openTime: "07:00",
      closeTime: "03:00",
      googleMapsUrl: "https://maps.google.com/?q=McDonald%27s+Ain+Diab+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://mcdonalds.ma",
      instagram: "https://instagram.com/mcdonalds_maroc"
    }
  },

  {
    id: "eat-casablanca-kfc-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick-bite", "fried-chicken", "bustling-avenue"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["fast-food", "fried-chicken", "maarif", "late-night", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "KFC Maarif",
      neighborhood: "Maârif",
      description: "Centrally located KFC on Boulevard Al Massira Al Khadra serving original recipe chicken buckets, spicy Zinger burgers, and family combo boxes.",
      tip: "Use the self-service digital kiosks at the entrance during peak shopping hours to skip the front counter lines.",
      badge: "local-favorite",
      bestDishes: [
        "Spicy Zinger Burger Combo",
        "Original Recipe 12-Piece Chicken Bucket",
        "Crispy Chicken Tenders with BBQ Sauce"
      ],
      pros: ["Quick counter service in the heart of Maarif shopping district", "Certified halal chicken", "Reliable delivery via Glovo and web"],
      cons: ["Limited seating during lunch rush", "Parking in Maarif is notoriously tricky"],
      googleRating: 3.9,
      googleReviewCount: 3120,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 75,
      theforkRating: 3.5,
      theforkReviewCount: 20,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 3120,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=KFC+Al+Massira+Maarif+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://kfc.ma",
      instagram: "https://instagram.com/kfc_maroc"
    }
  },

  {
    id: "eat-casablanca-burger-king-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["flame-grilled", "quick-bite", "shopping-break"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["burgers", "whopper", "maarif", "flame-grilled", "late-night"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Burger King Maarif",
      neighborhood: "Maârif",
      description: "Flame-grilled Whopper hub on Boulevard Al Massira Al Khadra featuring two floors of modern air-conditioned dining and touch-screen ordering.",
      tip: "Head to the upstairs seating area which is significantly quieter and has power outlets for charging your phone.",
      badge: "local-favorite",
      bestDishes: [
        "Double Whopper with Cheese Meal",
        "Steakhouse Burger with Crispy Onions",
        "King Fries with Melted Cheddar"
      ],
      pros: ["Flame-grilled beef patties", "Touch-screen ordering kiosks", "Spacious two-level seating"],
      cons: ["Can get loud on weekend afternoons", "No dedicated parking lot"],
      googleRating: 4.0,
      googleReviewCount: 2870,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 60,
      theforkRating: 3.5,
      theforkReviewCount: 15,
      restaurantguruRating: 4.0,
      restaurantguruReviewCount: 2870,
      openTime: "11:00",
      closeTime: "01:30",
      googleMapsUrl: "https://maps.google.com/?q=Burger+King+Al+Massira+Maarif+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://burgerking.ma",
      instagram: "https://instagram.com/burgerkingmaroc"
    }
  },

  {
    id: "eat-casablanca-pizza-hut-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["family", "friends", "solo"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["pan-pizza", "comfort-food", "family-friendly"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 75,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pan-pizza", "cheesy-crust", "maarif", "delivery", "family-dining"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Pizza Hut Maarif",
      neighborhood: "Maârif",
      description: "Established pizza parlor in Maârif offering signature pan pizzas, Cheesy Crust specials, and appetizers for dine-in, takeaway, and delivery.",
      tip: "Check their weekday lunchtime promotions for bundled medium pizza and drink meal deals.",
      badge: "local-favorite",
      bestDishes: [
        "Super Supreme Pan Pizza with Cheesy Crust",
        "Barbecue Chicken Pizza",
        "Garlic Bread with Melted Mozzarella"
      ],
      pros: ["Consistent signature thick pan pizza crust", "Generous cheese-stuffed crust options", "Fast neighborhood delivery"],
      cons: ["Can take 20–25 minutes for freshly baked pan pizzas", "Interior decor is somewhat dated"],
      googleRating: 3.8,
      googleReviewCount: 2210,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 90,
      theforkRating: 3.5,
      theforkReviewCount: 25,
      restaurantguruRating: 3.8,
      restaurantguruReviewCount: 2210,
      openTime: "11:30",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Pizza+Hut+Maarif+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522989898",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://pizzahut.ma",
      instagram: "https://instagram.com/pizzahut_maroc"
    }
  },

  {
    id: "eat-casablanca-dominos-gauthier",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Italian", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget"],
      vibeTags: ["quick-delivery", "carry-out", "late-night-pizza"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 65,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["pizza-delivery", "carryout", "gauthier", "late-night", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Domino's Pizza Gauthier",
      neighborhood: "Gauthier",
      description: "High-turnover carry-out and delivery hub on Rue Jean Jaurès in Gauthier, serving freshly baked thin-crust and pan pizzas, cheesy bread, and chicken wings.",
      tip: "Order online through the Domino's Maroc app for carry-out specials which frequently offer buy-one-get-one-free promos.",
      badge: "local-favorite",
      bestDishes: [
        "Spicy Peppercorn Beef Pizza",
        "Stuffed Cheesy Bread with Jalapeños",
        "Buffalo Chicken Wings with Ranch"
      ],
      pros: ["Rapid 30-minute delivery dispatch across Gauthier/Maarif", "Great value on multi-pizza deals", "Consistently hot and prompt delivery"],
      cons: ["Very small dining area designed primarily for carry-out", "Street parking is tough on Rue Jean Jaurès"],
      googleRating: 3.9,
      googleReviewCount: 1670,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 45,
      theforkRating: 3.5,
      theforkReviewCount: 15,
      restaurantguruRating: 3.9,
      restaurantguruReviewCount: 1670,
      openTime: "11:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Domino%27s+Pizza+Gauthier+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522202020",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://dominos.ma",
      instagram: "https://instagram.com/dominos_maroc"
    }
  },

  {
    id: "eat-casablanca-table-iii",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly"],
      mealTypes: ["dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["michelin-standard", "gastronomic", "intimate", "tasting-menu"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 1400,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      closedDays: ["sunday", "monday"],
      seatingTypes: ["indoor"],
      paymentMethods: ["credit_card", "visa", "mastercard"],
      tags: ["michelin-chef", "degustation", "faycal-bettioui", "best-in-morocco", "fine-dining"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Table III",
      neighborhood: "Ain Diab",
      description: "Morocco's culinary masterpiece by Michelin-starred Chef Fayçal Bettioui, voted Best Restaurant in Morocco and ranked in MENA's 50 Best for its visionary seafood-driven tasting menus.",
      tip: "Reservations must be booked several weeks in advance; opt for the full multi-course carte blanche tasting menu with sommelier wine pairings.",
      badge: "splurge",
      bestDishes: [
        "Charcoal-Kissed Oualidia Langoustine",
        "Line-Caught Atlantic Turbot with Brown Butter Sabayon",
        "A5 Wagyu with Moroccan Truffle Reduction"
      ],
      pros: ["Culinary peak of Casablanca gastronomy", "Discreet and intimate confidential setting", "Chef Fayçal personally finishes dishes tableside"],
      cons: ["High price point", "Dinner only, closed Sundays and Mondays"],
      googleRating: 4.9,
      googleReviewCount: 270,
      tripadvisorRating: 4.9,
      tripadvisorReviewCount: 110,
      theforkRating: 4.9,
      theforkReviewCount: 80,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 270,
      openTime: "19:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Table+III+Casablanca+Ain+Diab",
      reservationMethod: ["phone", "website", "whatsapp"],
      reservationContact: "+212522797380",
      bookingUrl: "https://table3casablanca.com",
      whatsappNumber: "+212660112233",
      website: "https://table3casablanca.com",
      instagram: "https://instagram.com/table3casablanca"
    }
  },

  {
    id: "eat-casablanca-bleu-four-seasons",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "family", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["Seafood", "Mediterranean", "Grill & BBQ"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["palatial-hotel", "oceanfront", "shell-mural", "fire-pit"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 750,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["four-seasons", "ocean-terrace", "fine-seafood", "sunset-views", "luxury"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Bleu",
      neighborhood: "Ain Diab",
      description: "Signature oceanfront gastronomic pavilion at Four Seasons Hotel Casablanca, designed with nautical curved wood, an open charcoal grill, and an Atlantic-facing terrace.",
      tip: "Request an outdoor terrace table adjacent to the circular fire pit for sunset drinks followed by wood-fired Atlantic lobster.",
      badge: "splurge",
      bestDishes: [
        "Wood-Fired Atlantic Sea Bass with Local Citrus",
        "Chilled Dakhla Oysters with Chermoula Mignonette",
        "Charcoal-Grilled Prime Tomahawk"
      ],
      pros: ["Unobstructed panoramic Atlantic coastline vistas", "Five-star Four Seasons service standard", "Superb open-air terrace with fire pits"],
      cons: ["High price tier", "Reservations strongly recommended on weekends"],
      googleRating: 4.4,
      googleReviewCount: 420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 280,
      theforkRating: 4.4,
      theforkReviewCount: 110,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 420,
      openTime: "06:30",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Bleu+Four+Seasons+Hotel+Casablanca",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212529073700",
      bookingUrl: "https://www.fourseasons.com/casablanca/dining/restaurants/bleu/",
      whatsappNumber: "",
      website: "https://www.fourseasons.com/casablanca/dining/restaurants/bleu/",
      instagram: "https://instagram.com/fscasablanca"
    }
  },

  {
    id: "eat-casablanca-le-pilotis",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "friends", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Seafood", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["over-water", "crashing-waves", "tahiti-beach", "seafood-platter"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 480,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["tahiti-beach-club", "seafood-on-rocks", "ocean-terrace", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Pilotis",
      neighborhood: "Ain Diab",
      description: "Iconic oceanfront seafood institution within Tahiti Beach Club, built on pilings directly suspended over the crashing waves of the Atlantic.",
      tip: "Book an ocean-edge table during high tide for the unforgettable sensation of dining directly above the surging surf.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Seafood Plateau with Oysters, Crab, and Gambas",
        "Wood-Fired Whole Sea Bream with Sea Salt",
        "Spanish-Style Seafood Paella for Two"
      ],
      pros: ["Unbeatable proximity to crashing Atlantic waves", "Fresh catches selected right off the crushed-ice display", "Lively social ambiance"],
      cons: ["Sea spray can hit terrace tables on windy days", "Valet queue on sunny Sundays"],
      googleRating: 4.1,
      googleReviewCount: 980,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 420,
      theforkRating: 4.0,
      theforkReviewCount: 160,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 980,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Pilotis+Tahiti+Beach+Club+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522798025",
      bookingUrl: "",
      whatsappNumber: "+212661334455",
      website: "https://tahitibeachcasa.ma",
      instagram: "https://instagram.com/lepilotisbytbc"
    }
  },

  {
    id: "eat-casablanca-relais-de-paris-ain-diab",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "family"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["French-Moroccan", "Grill & BBQ"],
      cuisineTags: ["international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["parisian-brasserie", "secret-sauce", "villa-blanca", "classic"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 450,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: false,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["entrecote", "french-brasserie", "villa-blanca", "corniche", "steaks"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Relais de Paris",
      neighborhood: "Ain Diab",
      description: "Prestigious Parisian brasserie inside Villa Blanca Urban Hotel, renowned for its legendary sliced entrecôte served over a burner with secret herb butter sauce and frites.",
      tip: "The signature formula comes with an unlimited second serving of warm crispy shoestring fries—don't hesitate to ask for more.",
      badge: "local-favorite",
      bestDishes: [
        "Sliced Charolais Entrecôte with Signature Secret Sauce",
        "Burgundy Escargots in Parsley Garlic Butter",
        "Warm Molten Chocolate Fondant"
      ],
      pros: ["Iconic signature sauce recipe unchanged for decades", "Refined Parisian brasserie decor", "Located in the fashionable Villa Blanca complex"],
      cons: ["Menu is very focused on beef with minimal seafood", "Can feel crowded at peak dinner hours"],
      googleRating: 4.2,
      googleReviewCount: 1450,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 650,
      theforkRating: 4.2,
      theforkReviewCount: 280,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 1450,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Relais+de+Paris+Villa+Blanca+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522368796",
      bookingUrl: "https://www.villablanca.ma",
      whatsappNumber: "",
      website: "https://www.villablanca.ma",
      instagram: "https://instagram.com/relaisdepariscasablanca"
    }
  },

  {
    id: "eat-casablanca-le-loubnane",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple", "friends", "large-groups"],
      mealTypes: ["dinner", "late-night"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Middle Eastern", "Mediterranean"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["oriental-elegance", "mezze-spread", "villa-blanca", "live-music"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 420,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["lebanese", "mezze", "villa-blanca", "oriental", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Loubnane",
      neighborhood: "Ain Diab",
      description: "Casablanca's premier upscale Lebanese dining room inside Villa Blanca, serving authentic cold and warm Levantine mezzes, grilled skewers, and occasional evening oriental music.",
      tip: "Order the Mezze Dégustation platter for two to sample their creamy labneh, fresh tabbouleh, and hot sambousek.",
      badge: "local-favorite",
      bestDishes: [
        "Assorted Cold and Hot Mezze Platter",
        "Char-Grilled Lamb Mashawi Skewers",
        "Mouhalabieh with Crushed Pistachios and Orange Blossom"
      ],
      pros: ["Authentic Beirut chef recipes", "Generous shareable portions", "Sophisticated Moorish-Levantine interior design"],
      cons: ["Evening dinner only", "Atmosphere gets loud on weekend nights"],
      googleRating: 4.3,
      googleReviewCount: 890,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 380,
      theforkRating: 4.2,
      theforkReviewCount: 140,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 890,
      openTime: "19:30",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Loubnane+Villa+Blanca+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522368796",
      bookingUrl: "https://www.villablanca.ma",
      whatsappNumber: "",
      website: "https://www.villablanca.ma",
      instagram: "https://instagram.com/villablancacasablanca"
    }
  },

  {
    id: "eat-casablanca-cafe-bianca",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea", "dinner"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Italian", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["ocean-terrace", "fashionable", "sunlit", "all-day-dining"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
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
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["brunch", "italian", "sea-view-terrace", "corniche", "villa-blanca"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Café Bianca",
      neighborhood: "Ain Diab",
      description: "Fashionable all-day ocean-facing Italian bistro and terrace lounge at Villa Blanca, famous for scenic breakfasts, artisanal pastas, and sunset aperitifs.",
      tip: "Come between 09:00 and 11:30 for one of the most delightful coastal morning coffees and Italian breakfast platters on the Corniche.",
      badge: "local-favorite",
      bestDishes: [
        "Rigatoni all'Amatriciana with Fresh Burrata",
        "Thin-Crust Truffle Carpaccio Pizza",
        "Bianca Homemade Tiramisu"
      ],
      pros: ["Prime sun-drenched terrace overlooking the sea", "Open continuously from 07:00 to 23:00", "Lively, cosmopolitan Casablanca crowd"],
      cons: ["Peak weekend service can occasionally be slow", "Terrace fills up rapidly by noon"],
      googleRating: 4.1,
      googleReviewCount: 2350,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 890,
      theforkRating: 4.1,
      theforkReviewCount: 340,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 2350,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Cafe+Bianca+Villa+Blanca+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522392510",
      bookingUrl: "https://www.villablanca.ma",
      whatsappNumber: "",
      website: "https://www.villablanca.ma",
      instagram: "https://instagram.com/cafebiancacasablanca"
    }
  },

  {
    id: "eat-casablanca-la-paillote",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "street-food"],
      foodStyles: ["Mediterranean", "Seafood", "International"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["adventure", "nomad"],
      vibeTags: ["beach-club", "poolside", "festive", "sunset-cocktails"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 350,
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
      seatingTypes: ["outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["beach-club", "pool-dining", "cocktails", "dj-sets", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Paillote",
      neighborhood: "Ain Diab",
      description: "Bustling seaside beach-club restaurant inside Tahiti Beach Club, pairing fresh grilled catches, refreshing salads, and cocktails with outdoor saltwater pools.",
      tip: "Ideal for warm sunny afternoons; reserve a lunch sunbed by the adult pool to combine lunch with a swim.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled King Gambas with Garlic Butter",
        "Crispy Calamari Fritti with Tartar Dip",
        "Mediterranean Caesar Salad with Chicken"
      ],
      pros: ["Direct sandy beach and pool access", "Lively weekend DJ sets and beach vibes", "Open-air sea breeze setting"],
      cons: ["Seasonal daytime/evening venue", "Can get noisy when the weekend party kicks in"],
      googleRating: 4.1,
      googleReviewCount: 1250,
      tripadvisorRating: 3.9,
      tripadvisorReviewCount: 310,
      theforkRating: 3.9,
      theforkReviewCount: 95,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1250,
      openTime: "11:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Paillote+Tahiti+Beach+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522798364",
      bookingUrl: "",
      whatsappNumber: "+212682277536",
      website: "https://tahitibeachcasa.ma",
      instagram: "https://instagram.com/tahitibeachclub"
    }
  },

  {
    id: "eat-casablanca-anatolia-steakhouse",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "friends", "large-groups", "couple"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Grill & BBQ", "Middle Eastern"],
      cuisineTags: ["international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["dry-aged-steaks", "turkish-grill", "tableside-show", "oceanfront"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
      isHalal: true,
      halalStatus: "halal-certified",
      isVegetarianFriendly: false,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["halal-steakhouse", "tomahawk", "anfa-place", "corniche", "dry-aged"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Anatolia Premium Steakhouse",
      neighborhood: "Ain Diab",
      description: "High-end Turkish steakhouse at Anfa Place Living Resort on the Corniche, famed for premium dry-aged beef, table-side carving shows, and an alcohol-free beachfront terrace.",
      tip: "Order the signature Gold or Butter-Basted Tomahawk steak for an impressive theatrical tableside fire show.",
      badge: "local-favorite",
      bestDishes: [
        "Dry-Aged Tomahawk Steak with Herb Butter",
        "Traditional Turkish Lamb Köfte with Spiced Rice",
        "Pistachio Baklava with Maras Ice Cream"
      ],
      pros: ["Strictly 100% certified halal and family-friendly alcohol-free atmosphere", "Spectacular theatrical meat presentation", "Direct seafront terrace overlooking the beach"],
      cons: ["Strictly dry (no wine or beer served)", "Steak-focused with few vegetarian dishes"],
      googleRating: 4.2,
      googleReviewCount: 880,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 190,
      theforkRating: 4.1,
      theforkReviewCount: 75,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 880,
      openTime: "12:00",
      closeTime: "01:00",
      googleMapsUrl: "https://maps.google.com/?q=Anatolia+Premium+Steakhouse+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522796000",
      bookingUrl: "",
      whatsappNumber: "+212661556677",
      website: "https://anatoliasteakhouse.ma",
      instagram: "https://instagram.com/anatoliapremiumsteakhouse"
    }
  },

  {
    id: "eat-casablanca-homu-anfa-superieur",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["International", "Seafood", "Italian"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["minimalist-villa", "japanese-italian-fusion", "serene", "garden-terrace"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 550,
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
      tags: ["asian-fusion", "sushi", "villa-dining", "anfa-superieur", "fine-dining"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Homu",
      neighborhood: "Anfa Supérieur",
      description: "Sophisticated Japanese-Italian fusion restaurant set inside an architect-designed private villa on Avenue de Nice in Anfa Supérieur, celebrating inventive sushi, Robata, and truffle infusions.",
      tip: "Request an outdoor table in the landscaped bamboo garden and try the signature Wagyu stir-fried rice crafted by executive chef Sofia.",
      badge: "hidden-gem",
      bestDishes: [
        "Wagyu Beef Stir-Fried Rice with Asian Vegetables",
        "Salmon Tataki with Spicy Daikon and Chives",
        "Seared Scallops in Citrus Yuzu Ponzu"
      ],
      pros: ["Quiet residential villa setting in Anfa Supérieur", "Creative Japanese-Italian fusion flavors", "Minimalist marble and wood interior by Amine Mekouar"],
      cons: ["High price point", "Advance reservation required for dinner"],
      googleRating: 4.6,
      googleReviewCount: 220,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 45,
      theforkRating: 4.5,
      theforkReviewCount: 30,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 220,
      openTime: "12:30",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Homu+Casablanca+Avenue+de+Nice",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522943424",
      bookingUrl: "",
      whatsappNumber: "+212616981566",
      website: "not-available",
      instagram: "https://instagram.com/homu_casablancaofficial"
    }
  },

  {
    id: "eat-casablanca-la-pergola-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["art-deco-glasshouse", "glamorous", "hotel-palace", "romantic"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["le-casablanca-hotel", "art-deco", "fine-dining", "moulay-rachid", "wine-list"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Pergola",
      neighborhood: "Anfa",
      description: "Art Deco lifestyle glasshouse dining salon at Le Casablanca Hôtel, serving refined French-Mediterranean cuisine along tree-lined Boulevard Moulay Rachid.",
      tip: "Book an evening table along the glass facade for a candlelit dinner accompanied by soft jazz piano.",
      badge: "splurge",
      bestDishes: [
        "Wild Sea Bass Tartare with Yuzu",
        "Braised Veal Sweetbreads with Foie Gras Reduction",
        "House-Smoked Atlantic Salmon with Herb Blinis"
      ],
      pros: ["Atmospheric Art Deco glasshouse architecture", "Attentive 5-star hotel service standard", "Curated international wine cellar"],
      cons: ["High price point", "Closed on Sundays"],
      googleRating: 4.5,
      googleReviewCount: 310,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 160,
      theforkRating: 4.5,
      theforkReviewCount: 85,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 310,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=La+Pergola+Le+Casablanca+Hotel",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212522649797",
      bookingUrl: "https://www.lecasablanca-hotel.com",
      whatsappNumber: "",
      website: "https://www.lecasablanca-hotel.com",
      instagram: "https://instagram.com/lecasablancahotel"
    }
  },

  {
    id: "eat-casablanca-la-terrasse-jasmin-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple", "friends", "seniors"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Mediterranean", "Cafe & Pastry", "French-Moroccan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["palatial-garden", "poolside-terrace", "high-tea", "sunday-brunch"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 420,
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
      seatingTypes: ["outdoor", "terrace", "courtyard"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hotel-terrace", "brunch", "afternoon-tea", "pool-view", "anfa"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "La Terrasse Jasmin",
      neighborhood: "Anfa",
      description: "Picturesque garden and pool terrace at Le Casablanca Hôtel, renowned among Anfa residents for its lavish Sunday brunch, afternoon tea, and light Mediterranean dishes.",
      tip: "Reserve their Sunday brunch buffet ahead of time; it features over 30 hot and cold artisanal Moroccan and French delicacies.",
      badge: "local-favorite",
      bestDishes: [
        "Royal Sunday Brunch Buffet Spread",
        "High Tea with Fresh French Macarons",
        "Grilled Atlantic Salmon with Lemon Herb Butter"
      ],
      pros: ["Peaceful landscaped garden and pool setting", "Quiet respite from Casablanca traffic", "Complimentary valet parking at the hotel gate"],
      cons: ["Sunday brunch reservations book out quickly", "Outdoor seating is weather-dependent"],
      googleRating: 4.4,
      googleReviewCount: 280,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 130,
      theforkRating: 4.3,
      theforkReviewCount: 65,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 280,
      openTime: "07:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Terrasse+Jasmin+Le+Casablanca+Hotel",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522649797",
      bookingUrl: "https://www.lecasablanca-hotel.com",
      whatsappNumber: "",
      website: "https://www.lecasablanca-hotel.com",
      instagram: "https://instagram.com/lecasablancahotel"
    }
  },

  {
    id: "eat-casablanca-gapi-villa-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "French-Moroccan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["botanical-villa", "artisan-pastry", "garden-brunch", "chic-tea-room"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
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
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["patisserie", "villa-garden", "brunch", "moulay-rachid", "dry-restaurant"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Gapi Villa",
      neighborhood: "Anfa",
      description: "Celebrated tearoom, pastry laboratory, and garden restaurant set inside an elegant Anfa villa on Boulevard Moulay Rachid, famous for high-end pastries and brunch.",
      tip: "Try the poached Eggs Benedict on toasted brioche followed by Chef Anouar's signature choux pastry bar.",
      badge: "local-favorite",
      bestDishes: [
        "Brioche Eggs Benedict with Smoked Salmon",
        "Bar à Choux Gourmand",
        "Avocado and Burrata Garden Tartine"
      ],
      pros: ["Lush landscaped garden terrace nestled in an authentic villa", "Exceptional handcrafted French pastries", "Warm, family-friendly atmosphere"],
      cons: ["Fills up quickly on Saturday and Sunday mornings", "Alcohol-free venue"],
      googleRating: 4.1,
      googleReviewCount: 560,
      tripadvisorRating: 3.5,
      tripadvisorReviewCount: 40,
      theforkRating: 3.8,
      theforkReviewCount: 25,
      restaurantguruRating: 4.0,
      restaurantguruReviewCount: 560,
      openTime: "07:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=Gapi+Villa+Boulevard+Moulay+Rachid+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522941096",
      bookingUrl: "",
      whatsappNumber: "",
      website: "http://www.gapivilla.com",
      instagram: "https://instagram.com/gapivilla"
    }
  },

  {
    id: "eat-casablanca-le-marly-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "business-friendly", "solo", "couple"],
      mealTypes: ["breakfast", "lunch", "dinner", "afternoon-tea"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Cafe & Pastry"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["parisian-brasserie", "contemporary-chic", "all-day-dining", "bustling"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 240,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["bistronomy", "parisian-cafe", "breakfast", "moulay-rachid", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Marly",
      neighborhood: "Anfa",
      description: "Fashionable Parisian-style brasserie and café on Boulevard Moulay Rachid, featuring sleek contemporary interiors and dependable seasonal French bistronomy.",
      tip: "An ideal walk-in spot for a fast business lunch or an afternoon espresso with fresh French millefeuille on the covered terrace.",
      badge: "local-favorite",
      bestDishes: [
        "Char-Grilled Entrecôte with Homemade French Fries",
        "Pan-Seared Salmon with Sautéed Greens",
        "Crispy Traditional French Millefeuille"
      ],
      pros: ["Consistent all-day dining from breakfast to dinner", "Modern, comfortable street-side terrace", "Attentive and dynamic service team"],
      cons: ["Alcohol-free", "Street parking on Boulevard Moulay Rachid can be crowded"],
      googleRating: 4.2,
      googleReviewCount: 2260,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 210,
      theforkRating: 4.1,
      theforkReviewCount: 110,
      restaurantguruRating: 4.8,
      restaurantguruReviewCount: 2260,
      openTime: "07:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Marly+Boulevard+Moulay+Rachid+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522946676",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/lemarlycasa"
    }
  },

  {
    id: "eat-casablanca-roosevelt-cafe-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "lean",
      groupTypes: ["friends", "solo", "couple"],
      mealTypes: ["breakfast", "lunch", "snack", "afternoon-tea", "dinner"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "International"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["budget", "nomad"],
      vibeTags: ["neighborhood-cafe", "sunlit-terrace", "specialty-coffee", "relaxed"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 120,
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
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["cafe-terrace", "breakfast", "pastries", "roosevelt-boulevard", "budget"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Roosevelt Café",
      neighborhood: "Anfa",
      description: "Casual cosmopolitan café and bistro on Boulevard Franklin Roosevelt, drawing local residents for specialty espresso, morning breakfasts, and savory crepes.",
      tip: "Grab an outdoor terrace seat in the morning for Moroccan mint tea and their popular savory tuna and cheese crepe.",
      badge: "local",
      bestDishes: [
        "Savory Tuna and Emmental Crepe",
        "Classic Club Sandwich with Golden Fries",
        "Freshly Squeezed Citrus and Ginger Juice"
      ],
      pros: ["Pleasant sidewalk terrace shaded by trees", "Reliable Wi-Fi for working or reading", "Extremely affordable by Anfa neighborhood standards"],
      cons: ["Simple café menu rather than fine dining", "Gets lively and crowded in late afternoons"],
      googleRating: 4.2,
      googleReviewCount: 530,
      tripadvisorRating: 3.8,
      tripadvisorReviewCount: 30,
      theforkRating: 3.8,
      theforkReviewCount: 15,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1270,
      openTime: "07:00",
      closeTime: "00:30",
      googleMapsUrl: "https://maps.google.com/?q=Roosevelt+Cafe+Boulevard+Franklin+Roosevelt+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "not-available",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "not-available"
    }
  },

  {
    id: "eat-casablanca-koya-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["friends", "couple", "large-groups"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["International", "Seafood", "Grill & BBQ"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["asian-latin-fusion", "live-shows", "garden-party", "festive-lounge"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 580,
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
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["asian-fusion", "cocktail-lounge", "dj-sets", "driss-slaoui", "festive"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Kôya Restaurant Lounge",
      neighborhood: "Anfa",
      description: "High-energy Asian-Latin fusion dining destination and cocktail lounge on Boulevard Driss Slaoui in upper Anfa, showcasing Robata skewers, sushi art, and evening live entertainment.",
      tip: "Drop in for their late-afternoon Garden Party between 16:00 and 20:00 for signature cocktails and Asian tapas before the evening shows.",
      badge: "local-favorite",
      bestDishes: [
        "Black Cod with Saikyo Miso Glaze",
        "Red Tuna Tataki with Shaved Black Truffle",
        "Char-Grilled Robata Beef Skewers with Sweet Teriyaki"
      ],
      pros: ["Festive evening vibe with live artistic and musical performances", "Creative Asian-Latin fusion menu", "Spacious indoor dining room and lush garden lounge"],
      cons: ["Music volume turns up considerably after 22:00", "Dinner reservations are essential on weekends"],
      googleRating: 4.3,
      googleReviewCount: 1340,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 150,
      theforkRating: 4.1,
      theforkReviewCount: 80,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1340,
      openTime: "12:00",
      closeTime: "02:00",
      googleMapsUrl: "https://maps.google.com/?q=Koya+Casablanca+Boulevard+Driss+Slaoui",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212662327178",
      bookingUrl: "https://koyacasablanca.com",
      whatsappNumber: "+212662327178",
      website: "https://koyacasablanca.com",
      instagram: "https://instagram.com/koyacasaofficial"
    }
  },

  {
    id: "eat-casablanca-clubhouse-royal-golf-anfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "seniors", "family", "couple"],
      mealTypes: ["breakfast", "lunch", "afternoon-tea"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["French-Moroccan", "Seafood", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["culture", "luxury"],
      vibeTags: ["golf-course-views", "historic-club", "verdant", "colonial-patio"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 350,
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
      closedDays: ["monday"],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["royal-golf-anfa", "clubhouse", "hippodrome", "golf-view", "peaceful"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Club-House du Royal Golf d'Anfa",
      neighborhood: "Anfa",
      description: "Historic 1942 clubhouse restaurant overlooking the fairways of the Royal Golf and Hippodrome d'Anfa, serving classic French brasserie fare and Moroccan dishes in a green setting.",
      tip: "Book an outdoor terrace table on Friday around noon to combine lunch with a view of thoroughbreds training on the neighboring track.",
      badge: "hidden-gem",
      bestDishes: [
        "Friday Couscous aux Sept Légumes",
        "Pan-Fried Atlantic Sole Meuniere with Steamed Potatoes",
        "Char-Grilled Ribeye with Herb Butter"
      ],
      pros: ["Green open-space views in the heart of Anfa", "Peaceful terrace facing the 9-hole golf course", "Historic sporting club ambiance dating back to 1942"],
      cons: ["Closes earlier in the evening (no dinner service)", "Closed on Mondays"],
      googleRating: 4.2,
      googleReviewCount: 410,
      tripadvisorRating: 4.1,
      tripadvisorReviewCount: 95,
      theforkRating: 4.0,
      theforkReviewCount: 35,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 410,
      openTime: "08:00",
      closeTime: "19:00",
      googleMapsUrl: "https://maps.google.com/?q=Royal+Golf+d+Anfa+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522361026",
      bookingUrl: "",
      whatsappNumber: "",
      website: "https://www.rgam.ma",
      instagram: "not-available"
    }
  },

  // ── 1. SOUR JDID (HASSAN II MOSQUE) ──
  {
    id: "eat-casablanca-le-gatsby-sour-jdid",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Moroccan", "International", "Seafood"],
      cuisineTags: ["moroccan-traditional", "international"],
      archetypeAffinity: ["first-timer", "culture", "budget"],
      vibeTags: ["hassan-ii-mosque-view", "oceanfront", "front-row-terrace", "scenic"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 160,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: false,
      alcoholPolicy: "dry",
      hasDelivery: false,
      hasParking: true,
      nearMedina: true,
      nearBeach: true,
      nearCenter: false,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "special-ftour",
      closedDays: [],
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["hassan-ii-view", "sour-jdid", "ocean-terrace", "breakfast", "tagine"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Gatsby",
      neighborhood: "Sour Jdid",
      description: "Chic oceanfront bistro and café located directly across from the great Hassan II Mosque, offering an unparalleled panoramic view of the minaret and crashing waves.",
      tip: "Visit around 17:30 to sip Moroccan mint tea on the upper terrace while the sun sets behind the towering Hassan II Mosque.",
      badge: "local-favorite",
      bestDishes: [
        "Traditional Moroccan Tagine of Sea Bream",
        "Le Gatsby Breakfast Platter with Fresh Msemmen",
        "Gambas Pil-Pil with Garlic and Olive Oil"
      ],
      pros: ["Best unobstructed front-row view of Hassan II Mosque", "Family-friendly alcohol-free atmosphere", "Open all day from 08:00 to midnight"],
      cons: ["Terrace tables face high demand on weekend afternoons", "Tip pressure from busy terrace staff during peak hours"],
      googleRating: 4.1,
      googleReviewCount: 1680,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 190,
      theforkRating: 4.0,
      theforkReviewCount: 65,
      restaurantguruRating: 4.1,
      restaurantguruReviewCount: 1680,
      openTime: "08:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Gatsby+Sour+Jdid+Casablanca",
      reservationMethod: ["phone", "whatsapp", "walk-in"],
      reservationContact: "+212700110110",
      bookingUrl: "",
      whatsappNumber: "+212661338743",
      website: "not-available",
      instagram: "https://instagram.com/legatsbycasablanca"
    }
  },

  // ── 2. ANCIENNE MÉDINA ──
  {
    id: "eat-casablanca-dar-el-kaid-medina",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "family", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "fine-dining"],
      foodStyles: ["Moroccan", "Tagine & Couscous"],
      cuisineTags: ["moroccan-traditional"],
      archetypeAffinity: ["culture", "first-timer", "luxury"],
      vibeTags: ["historic-riad", "oriental-show", "thousand-and-one-nights", "zellige"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 420,
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
      seatingTypes: ["indoor", "courtyard", "rooftop"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["riad-dining", "oriental-show", "ancient-medina", "pastilla", "dry-restaurant"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Dar El Kaid",
      neighborhood: "Ancienne Médina",
      description: "Magnificent historic riad tucked deep within the alleys of the Ancienne Médina, presenting ceremonial Moroccan banquets, live Gnaoua rhythms, and oriental dance shows.",
      tip: "Book for their 20:00 dinner service to experience the full '1001 Nights' acoustic performance while dining in the carved zellige courtyard.",
      badge: "hidden-gem",
      bestDishes: [
        "Royal Seafood and Almond Pastilla",
        "Slow-Braised Lamb Shank Tagine with Caramelized Figs",
        "Medina Moroccan Salad Tasting (Zaalouk, Taktouka, Carrots)"
      ],
      pros: ["Stunning authentic riad architecture with rooftop terrace", "Live traditional Gnaoua and oriental musical performances", "Very welcoming family hospitality"],
      cons: ["Located inside narrow pedestrian medina alleyways", "No alcohol served"],
      googleRating: 4.6,
      googleReviewCount: 920,
      tripadvisorRating: 4.7,
      tripadvisorReviewCount: 340,
      theforkRating: 4.6,
      theforkReviewCount: 110,
      restaurantguruRating: 4.6,
      restaurantguruReviewCount: 920,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Dar+El+Kaid+Casablanca",
      reservationMethod: ["phone", "whatsapp", "website"],
      reservationContact: "+212522202384",
      bookingUrl: "https://www.darelkaid.ma",
      whatsappNumber: "+212662376930",
      website: "https://www.darelkaid.ma",
      instagram: "https://instagram.com/darelkaidcasablanca"
    }
  },

  // ── 3. CENTRE-VILLE (1 of 2) ──
  {
    id: "eat-casablanca-le-rouget-de-lisle",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "hidden-gem"],
      foodStyles: ["French-Moroccan", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "culture"],
      vibeTags: ["1930s-villa", "romantic-garden", "gastronomic", "lush-patio"],
      crowdLevel: "quiet"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 580,
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
      closedDays: ["sunday"],
      seatingTypes: ["indoor", "outdoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["colonial-villa", "french-gastronomy", "garden-terrace", "fine-dining", "romantic"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Le Rouget de l'Isle",
      neighborhood: "Centre-Ville",
      description: "Enchanting 1930s French villa (Villa Elise) tucked away behind ancient palm trees, famed for romantic garden dining, classical French technique, and fine wines.",
      tip: "Request an outdoor garden table under the jacaranda trees for a peaceful, secluded lunch sheltered from city noise.",
      badge: "hidden-gem",
      bestDishes: [
        "Pan-Seared Red Mullet (Rouget) with Saffron Emulsion",
        "Duck Confit with Sarladaise Potatoes",
        "Crispy Sea Bass Filet with Mediterranean Vegetables"
      ],
      pros: ["Peaceful botanical garden retreat in the city center", "Exceptional classical French culinary standards", "Private parking and intimate atmosphere"],
      cons: ["High price point", "Closed on Sundays"],
      googleRating: 4.4,
      googleReviewCount: 780,
      tripadvisorRating: 4.4,
      tripadvisorReviewCount: 390,
      theforkRating: 4.4,
      theforkReviewCount: 160,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 780,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Le+Rouget+de+l%27Isle+Casablanca",
      reservationMethod: ["phone", "email"],
      reservationContact: "+212522294740",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/lerougetdelisle"
    }
  },

  // ── 4. CENTRE-VILLE (2 of 2) ──
  {
    id: "eat-casablanca-brasserie-la-tour",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["business-friendly", "couple", "seniors"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining"],
      foodStyles: ["French-Moroccan", "International", "Seafood"],
      cuisineTags: ["international", "moroccan-traditional"],
      archetypeAffinity: ["luxury", "nomad"],
      vibeTags: ["hotel-palace", "sofitel", "business-hub", "refined"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 650,
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
      closedDays: [],
      seatingTypes: ["indoor"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["sofitel", "business-lunch", "fine-dining", "sidi-belyout", "wine-list"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Brasserie La Tour",
      neighborhood: "Centre-Ville",
      description: "Sophisticated French brasserie inside the 5-star Sofitel Casablanca Tour Blanche, celebrating gourmet rotisserie specialties and business lunches beside Place Sidi Belyout.",
      tip: "Their three-course executive business lunch formula is fast, dependable, and comes with valet parking right at the hotel entrance.",
      badge: "splurge",
      bestDishes: [
        "Spit-Roasted Free-Range Chicken with Truffle Butter",
        "Char-Grilled Tournedos Rossini",
        "Delicate Grand Marnier Soufflé"
      ],
      pros: ["Impeccable Sofitel five-star service", "Quiet, sound-insulated dining room perfect for corporate discussions", "Central location near Casa-Port railway station"],
      cons: ["Formal hotel ambiance", "Higher pricing on imported wines"],
      googleRating: 4.3,
      googleReviewCount: 360,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 180,
      theforkRating: 4.2,
      theforkReviewCount: 95,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 360,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Sofitel+Casablanca+Tour+Blanche",
      reservationMethod: ["phone", "website", "email"],
      reservationContact: "+212522456200",
      bookingUrl: "https://all.accor.com/hotel/7070/index.fr.shtml",
      whatsappNumber: "",
      website: "https://all.accor.com/hotel/7070/index.fr.shtml",
      instagram: "https://instagram.com/sofitelcasablanca"
    }
  },

  // ── 5. GAUTHIER (1 of 3) ──
  {
    id: "eat-casablanca-bondi-coffee-kitchen",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Vegetarian/Vegan", "International"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "culture", "budget"],
      vibeTags: ["aussie-cafe", "specialty-coffee", "co-working", "healthy-brunch"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 130,
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
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["specialty-coffee", "brunch", "avocado-toast", "gauthier", "flat-white"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Bondi Coffee Kitchen",
      neighborhood: "Gauthier",
      description: "Casablanca's original Australian specialty coffee shop and brunch kitchen on Rue Sebou, crafting flat whites, artisanal sourdough toast, and nutrient-dense power bowls.",
      tip: "Pair a double-shot flat white with their Ricotta Hotcakes served with seasonal figs and pure maple syrup.",
      badge: "local-favorite",
      bestDishes: [
        "Aussie Smashed Avocado with Poached Eggs and Feta",
        "Ricotta Hotcakes with Banana and Honey",
        "Specialty Single-Origin Flat White"
      ],
      pros: ["Top-tier third-wave specialty espresso roast", "Plenty of vegetarian and plant-based breakfast bowls", "Bustling creative digital nomad hub with English-fluent staff"],
      cons: ["No table reservations (walk-in only)", "Fills up quickly on weekend mornings"],
      googleRating: 4.5,
      googleReviewCount: 1420,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 220,
      theforkRating: 4.4,
      theforkReviewCount: 70,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1420,
      openTime: "09:00",
      closeTime: "21:00",
      googleMapsUrl: "https://maps.google.com/?q=Bondi+Coffee+Kitchen+Casablanca",
      reservationMethod: ["walk-in"],
      reservationContact: "+212522480484",
      bookingUrl: "",
      whatsappNumber: "+212651687707",
      website: "https://bondicoffeekitchen.com",
      instagram: "https://instagram.com/bondicoffeekitchen"
    }
  },

  // ── 6. GAUTHIER (2 of 3) ──
  {
    id: "eat-casablanca-blend-gourmet-burger",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "solo", "family"],
      mealTypes: ["lunch", "dinner", "late-night"],
      experienceTypes: ["casual"],
      foodStyles: ["Grill & BBQ", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["budget", "first-timer"],
      vibeTags: ["gourmet-burgers", "industrial-chic", "comfort-food", "trendy"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 140,
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
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["craft-burgers", "brioche-bun", "gauthier", "truffle-fries", "dry"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Blend Gourmet Burger",
      neighborhood: "Gauthier",
      description: "Casablanca's craft burger pioneer on Rue Théophile Gautier, praised for in-house butchered aged patties, brioche buns, and house-made truffle sauces.",
      tip: "Try the 'Magic Truffle' burger with crispy sweet potato fries and their homemade salted caramel milkshake.",
      badge: "local-favorite",
      bestDishes: [
        "The Magic Truffle Burger with Aged Gouda",
        "Crispy Buttermilk Chicken Brioche Burger",
        "Parmesan and Truffle Hand-Cut Fries"
      ],
      pros: ["Consistently the highest-rated craft burger in Casablanca", "Homemade brioche buns baked daily", "Generous gourmet portions"],
      cons: ["Can get loud during peak evening hours", "Street parking in Gauthier can take time"],
      googleRating: 4.4,
      googleReviewCount: 2850,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 460,
      theforkRating: 4.3,
      theforkReviewCount: 150,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 2850,
      openTime: "12:00",
      closeTime: "23:30",
      googleMapsUrl: "https://maps.google.com/?q=Blend+Gourmet+Burger+Gauthier+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522491313",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/blendgourmetburger"
    }
  },

  // ── 7. GAUTHIER (3 of 3) ──
  {
    id: "eat-casablanca-clay-oven-gauthier",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["traditional", "casual"],
      foodStyles: ["Middle Eastern", "International"],
      cuisineTags: ["international"],
      archetypeAffinity: ["culture", "nomad"],
      vibeTags: ["tandoori", "curry", "exotic-spices", "warm-hospitality"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
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
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["indian", "tandoori", "butter-chicken", "gauthier", "curry"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Clay Oven",
      neighborhood: "Gauthier",
      description: "Authentic North Indian culinary institution on Rue Taha Hussein in Gauthier, celebrated for clay-oven tandoori grills, rich butter chicken, and freshly baked garlic naans.",
      tip: "Pair the slow-simmered Lamb Rogan Josh with warm butter-brushed garlic naan directly from the tandoor.",
      badge: "hidden-gem",
      bestDishes: [
        "Creamy Murgh Makhani (Butter Chicken)",
        "Tandoori Mixed Grill Sizzler",
        "Garlic and Cheese Naan straight from the Clay Oven"
      ],
      pros: ["Authentic Indian spice blends and clay oven cooking", "Extensive vegetarian and lentil options", "Quiet and warm family ambiance"],
      cons: ["Cozy, compact dining room", "Alcohol-free venue"],
      googleRating: 4.4,
      googleReviewCount: 890,
      tripadvisorRating: 4.3,
      tripadvisorReviewCount: 270,
      theforkRating: 4.2,
      theforkReviewCount: 85,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 890,
      openTime: "12:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Clay+Oven+Casablanca",
      reservationMethod: ["phone", "whatsapp"],
      reservationContact: "+212522260620",
      bookingUrl: "",
      whatsappNumber: "+212661889922",
      website: "not-available",
      instagram: "https://instagram.com/clayovencasablanca"
    }
  },

  // ── 8. MAÂRIF (1 of 2) ──
  {
    id: "eat-casablanca-luigi-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["family", "friends", "large-groups", "couple"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["casual", "traditional"],
      foodStyles: ["Italian", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["first-timer", "culture"],
      vibeTags: ["classic-trattoria", "wood-fired-pizza", "maarif-history", "convivial"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 220,
      isHalal: true,
      halalStatus: "likely-halal-food",
      isVegetarianFriendly: true,
      servesAlcohol: true,
      alcoholPolicy: "serves-alcohol",
      hasDelivery: true,
      hasParking: false,
      nearMedina: false,
      nearBeach: false,
      nearCenter: true,
      hasEnglishStaff: true,
      hasFrenchStaff: true,
      ramadanFriendly: "serves-lunch",
      closedDays: [],
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["italian-heritage", "wood-oven-pizza", "pasta-fresca", "maarif", "wine"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Restaurant Luigi",
      neighborhood: "Maârif",
      description: "Historic Italian trattoria operating on Rue de Normandie in Maârif since the neighborhood's Italian days, revered for wood-fired pizzas, seafood risotto, and generous pasta.",
      tip: "Their Risotto aux Gambas is cooked to order with rich shellfish stock—a must-order staple of the house.",
      badge: "local-favorite",
      bestDishes: [
        "Creamy Risotto with Atlantic Gambas",
        "Wood-Fired Pizza Quattro Formaggi",
        "Classic Homemade Italian Tiramisu"
      ],
      pros: ["Authentic neighborhood Italian trattoria heritage", "Full selection of Moroccan and Italian wines", "Generous portions suited for families"],
      cons: ["Gets very crowded at weekend dinner peak", "Table turnover can feel brisk"],
      googleRating: 4.3,
      googleReviewCount: 1740,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 410,
      theforkRating: 4.2,
      theforkReviewCount: 130,
      restaurantguruRating: 4.3,
      restaurantguruReviewCount: 1740,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Restaurant+Luigi+Maarif+Casablanca",
      reservationMethod: ["phone", "walk-in"],
      reservationContact: "+212522254345",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/restaurant_luigi_officiel"
    }
  },

  // ── 9. MAÂRIF (2 of 2) ──
  {
    id: "eat-casablanca-the-secret-garden-maarif",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["friends", "couple", "solo"],
      mealTypes: ["breakfast", "brunch", "lunch", "afternoon-tea"],
      experienceTypes: ["hidden-gem", "cafes-tea", "casual"],
      foodStyles: ["Cafe & Pastry", "Mediterranean", "Vegetarian/Vegan"],
      cuisineTags: ["cafe-pastry", "international"],
      archetypeAffinity: ["nomad", "first-timer"],
      vibeTags: ["hidden-oasis", "lush-plants", "courtyard-cafe", "calm"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 160,
      isHalal: true,
      halalStatus: "likely-halal-food",
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
      seatingTypes: ["indoor", "courtyard", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["secret-garden", "maarif-oasis", "brunch", "coffee", "dry-restaurant"],
      isHiddenGem: true,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "The Secret Garden",
      neighborhood: "Maârif",
      description: "Lush botanical courtyard café hidden behind the bustling shopping avenues of Maârif, offering specialty coffees, healthy salads, and serene alfresco breakfasts.",
      tip: "Take a seat in the inner courtyard surrounded by tropical plants to escape the urban noise of Boulevard Al Massira.",
      badge: "hidden-gem",
      bestDishes: [
        "Goat Cheese and Fig Garden Salad",
        "Avocado Salmon Tartine on Multigrain Bread",
        "House Iced Matcha Latte"
      ],
      pros: ["Surprising tranquil green courtyard in dense central Maârif", "Healthy, photogenic menu", "Great laptop-friendly atmosphere on weekdays"],
      cons: ["Hard to spot from the street without GPS", "Alcohol-free venue"],
      googleRating: 4.4,
      googleReviewCount: 680,
      tripadvisorRating: 4.2,
      tripadvisorReviewCount: 90,
      theforkRating: 4.1,
      theforkReviewCount: 40,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 680,
      openTime: "08:30",
      closeTime: "22:00",
      googleMapsUrl: "https://maps.google.com/?q=The+Secret+Garden+Maarif+Casablanca",
      reservationMethod: ["walk-in", "phone"],
      reservationContact: "+212522986420",
      bookingUrl: "",
      whatsappNumber: "",
      website: "not-available",
      instagram: "https://instagram.com/thesecretgardencasa"
    }
  },

  // ── 10. RACINE (1 of 2) ──
  {
    id: "eat-casablanca-boccaccio-racine",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["couple", "business-friendly", "friends"],
      mealTypes: ["lunch", "dinner"],
      experienceTypes: ["fine-dining", "casual"],
      foodStyles: ["Italian", "Mediterranean", "Seafood"],
      cuisineTags: ["international", "seafood"],
      archetypeAffinity: ["luxury", "first-timer"],
      vibeTags: ["sicilian-elegance", "trattoria-chic", "racine-trend", "aperitivo"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 480,
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
      tags: ["italian-fine-dining", "pasta-fresca", "racine", "cocktails", "valet-parking"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Boccaccio",
      neighborhood: "Racine",
      description: "Fashionable, award-winning Italian trattoria in the heart of Racine, showcasing Sicilian chef-curated handmade pasta, burrata, and refined Mediterranean grills.",
      tip: "Start with an Italian Spritz on their chic terrace before ordering the Tagliolini with fresh black truffle.",
      badge: "local-favorite",
      bestDishes: [
        "Tagliolini al Tartufo Nero Fresco",
        "Pugliese Burrata with Heirloom Cherry Tomatoes",
        "Wood-Fired Lobster Linguine"
      ],
      pros: ["Ranked among Morocco's top Italian dining spots", "Stylish contemporary architecture with warm woodwork", "Valet parking available at the door"],
      cons: ["Reservations are required for dinner", "Music becomes energetic in the late evening"],
      googleRating: 4.4,
      googleReviewCount: 1650,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 520,
      theforkRating: 4.4,
      theforkReviewCount: 220,
      restaurantguruRating: 4.4,
      restaurantguruReviewCount: 1650,
      openTime: "12:00",
      closeTime: "00:00",
      googleMapsUrl: "https://maps.google.com/?q=Boccaccio+Casablanca+Racine",
      reservationMethod: ["phone", "website", "whatsapp"],
      reservationContact: "+212522398445",
      bookingUrl: "https://boccacciocasa.com",
      whatsappNumber: "+212661554433",
      website: "https://boccacciocasa.com",
      instagram: "https://instagram.com/boccacciocasa"
    }
  },

  // ── 11. RACINE (2 of 2) ──
  {
    id: "eat-casablanca-organic-kitchen-racine",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "balanced",
      groupTypes: ["solo", "friends", "couple", "family"],
      mealTypes: ["breakfast", "brunch", "lunch", "dinner"],
      experienceTypes: ["casual", "cafes-tea"],
      foodStyles: ["Vegetarian/Vegan", "Mediterranean", "International"],
      cuisineTags: ["international", "cafe-pastry"],
      archetypeAffinity: ["nomad", "culture"],
      vibeTags: ["organic-farm-to-table", "eco-chic", "wellness", "bright-natural-light"],
      crowdLevel: "bustling"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 180,
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
      seatingTypes: ["indoor", "street-side", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["organic", "healthy-food", "gluten-free", "racine", "farm-to-table"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Organic Kitchen",
      neighborhood: "Racine",
      description: "Casablanca's flagship organic and farm-to-table sanctuary on Rue Ahmed El Mokri in Racine, created by designer Abla Bichara with natural raw wood and a vibrant eco-grocer.",
      tip: "Their Asian-marinated Chicken Buddha Bowl with beet hummus and cactus vinaigrette is a long-standing local favorite.",
      badge: "local-favorite",
      bestDishes: [
        "Signature Buddha Bowl with Cactus Dressing",
        "Gluten-Free Sweet Potato & Avocado Waffles",
        "Super Veggie Green Goddess Bowl"
      ],
      pros: ["Transparent 100% organic and locally sourced ingredients", "Extensive gluten-free, dairy-free, and vegan labeling", "Luminous, calm natural-material architecture"],
      cons: ["Peak lunch service can have a brief wait", "No alcohol served"],
      googleRating: 4.5,
      googleReviewCount: 1380,
      tripadvisorRating: 4.5,
      tripadvisorReviewCount: 310,
      theforkRating: 4.4,
      theforkReviewCount: 90,
      restaurantguruRating: 4.5,
      restaurantguruReviewCount: 1380,
      openTime: "10:00",
      closeTime: "22:30",
      googleMapsUrl: "https://maps.google.com/?q=Organic+Kitchen+Casablanca+Racine",
      reservationMethod: ["phone", "website", "whatsapp"],
      reservationContact: "+212522943775",
      bookingUrl: "https://organickitchen.ma",
      whatsappNumber: "+212661943775",
      website: "https://organickitchen.ma",
      instagram: "https://instagram.com/organickitchenmaroc"
    }
  },

  // ── 12. VAL D'ANFA ──
  {
    id: "eat-casablanca-olive-terrasse-val-danfa",
    city: "casablanca",

    // ── 1. QUIZ (personalization, mood & matching) ──
    quiz: {
      lifestyle: "premium",
      groupTypes: ["family", "couple", "business-friendly", "seniors"],
      mealTypes: ["breakfast", "lunch", "dinner"],
      experienceTypes: ["casual", "fine-dining"],
      foodStyles: ["Mediterranean", "Seafood", "French-Moroccan"],
      cuisineTags: ["seafood", "international"],
      archetypeAffinity: ["first-timer", "luxury"],
      vibeTags: ["atlantic-panorama", "resort-dining", "garden-terrace", "coastal-breeze"],
      crowdLevel: "balanced"
    },

    // ── 2. FILTER (search criteria, dietary rules, logistics & flags) ──
    filter: {
      pricePerPerson: 380,
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
      seatingTypes: ["indoor", "outdoor", "terrace"],
      paymentMethods: ["cash", "credit_card", "visa", "mastercard"],
      tags: ["val-danfa", "ocean-terrace", "mediterranean", "buffet", "corniche"],
      isHiddenGem: false,
      isTemporarilyHidden: false,
      verificationStatus: "verified"
    },

    // ── 3. UI (presentation, stories, ratings, contacts & plates) ──
    ui: {
      name: "Olive Terrasse",
      neighborhood: "Val d'Anfa",
      description: "Sunlit garden-themed Mediterranean restaurant and ocean-facing terrace inside Hôtel Val d'Anfa, offering seafood buffets and coastal dining looking onto the Atlantic.",
      tip: "Ideal for a breezy seaside lunch after exploring the Corniche; sit out on the elevated deck to catch the ocean views.",
      badge: "local-favorite",
      bestDishes: [
        "Grilled Atlantic Sea Bream with Lemon Herb Butter",
        "Seafood Linguine with Fresh Calamari and Clams",
        "Val d'Anfa Mediterranean Mezze Platter"
      ],
      pros: ["Elevated Atlantic Ocean view from the garden terrace", "Full bar service and international wine menu", "Free hotel parking and resort grounds"],
      cons: ["Can get breezy on the terrace in late afternoon", "Can be busy when the hotel hosts corporate conferences"],
      googleRating: 4.2,
      googleReviewCount: 520,
      tripadvisorRating: 4.0,
      tripadvisorReviewCount: 160,
      theforkRating: 4.0,
      theforkReviewCount: 55,
      restaurantguruRating: 4.2,
      restaurantguruReviewCount: 520,
      openTime: "07:00",
      closeTime: "23:00",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Val+d+Anfa+Casablanca",
      reservationMethod: ["phone", "website"],
      reservationContact: "+212522797070",
      bookingUrl: "https://valdanfahotel.com",
      whatsappNumber: "",
      website: "https://valdanfahotel.com",
      instagram: "https://instagram.com/hotelclubval"
    }
  }
];
