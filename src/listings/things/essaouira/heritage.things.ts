/**
 * =========================================================================
 * [ESSAOUIRA] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/essaouira/index.ts
 *
 * DATA: real collected listings (never AI-generated).
 *
 * ──────────────────────────────────────────────────────────────────────
 * MASTER TEMPLATE & ALLOWED VALUES BIBLE
 * ──────────────────────────────────────────────────────────────────────
 * FIXED ENUMS (from src/listings/types.ts):
 * - lifestyle:        'lean' | 'balanced' | 'premium'
 * - groupTypes:       'solo' | 'couple' | 'couples' | 'family' | 'families' | 'friends' |
 *                     'seniors' | 'kids-friendly' | 'large-groups' | 'business-friendly' |
 *                     'business' | 'nature-lover'
 * - crowdLevel:       'quiet' | 'balanced' | 'bustling'
 * - energyLevel:      'relaxed' | 'moderate' | 'active' | 'intense'
 * - transportMode:    'walkable' | 'taxi' | 'transit' | 'mixed'
 * - safetyLevel:      1 | 2 | 3 | 4 | 5
 * - friction:         { walkingFatigue: 1-5, heatExposure: 1-5, touristCrowd: 1-5,
 *                      noiseLevel: 1-5, scamRisk: 1-5, physicalIntensity: 1-5, kidSuitable: boolean }
 * - badge (single):   'architectural-gem' | 'essential' | 'hidden-gem' | 'historical' | 'popular' | 'top-pick'
 * - transportModes:   'bus' | 'cable-car' | 'drive' | 'taxi' | 'walk'
 * - paymentMethods:   'cash_mad' | 'credit_card'
 *
 * ALLOWED NEIGHBORHOODS (ESSAOUIRA):
 *  - Touristic:     'Médina Ancienne' | 'Mellah' | 'Bab Doukkala' | 'Skala' | 'Borj' | 'Dunes' | 'Diabat'
 *  - Mid-Touristic: 'Lagune' | 'Ghazoua'
 *  - Low-Touristic: 'Cité Al Mostaqbal'
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const essaouiraHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-sqala-ville",
    city: "essaouira",
    name: "Sqala de la Ville (Essaouira Ramparts)",
    neighborhood: "Skala",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "history", "photographer"],
    vibeTags: ["architectural", "historical", "iconic", "scenic"],
    tags: [
      "authentic",
      "coastal",
      "cultural-tour",
      "historical",
      "iconic-landmark",
      "instagrammable",
      "photo-spot",
      "relaxed",
      "sunset",
      "sunset-view",
      "walk-in"
    ],
    badges: [
      "architectural-landmark",
      "historic-landmark",
      "must-see",
      "panoramic-view",
      "photography-spot",
      "sunset-spot"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "some_steps", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 07:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "19:30" },
      { dayOfWeek: 1, open: "08:30", close: "19:30" },
      { dayOfWeek: 2, open: "08:30", close: "19:30" },
      { dayOfWeek: 3, open: "08:30", close: "19:30" },
      { dayOfWeek: 4, open: "08:30", close: "19:30" },
      { dayOfWeek: 5, open: "08:30", close: "19:30" },
      { dayOfWeek: 6, open: "08:30", close: "19:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "atm_nearby"],
    restrictions: [
      "Climbing onto outer stone parapets or sitting directly on historic bronze cannons is strictly prohibited for safety reasons."
    ],
    healthContraindications: [
      "High Atlantic winds and occasional sea spray can make stone walkways slippery; footwear with good traction is advised."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Walk along the 200-meter elevated stone artillery battery facing the Atlantic Ocean, lined with 18th-century European bronze cannons. Designed by French military architect Théodore Cornut in the 1760s for Sultan Mohammed ben Abdallah, this sea-facing rampart is Essaouira's defining historical landmark.",
    shortValueProp: "Historic Atlantic artillery platform lined with 18th-century Spanish brass cannons and dramatic sunset views.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Essaouira_skala_de_la_ville.jpg/1280px-Essaouira_skala_de_la_ville.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cannon_on_Skala_de_la_Ville%2C_Essaouira%2C_Morocco.jpg/1280px-Cannon_on_Skala_de_la_Ville%2C_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJu7S9_6Dyrw0R6OQJqT8-lTo",
    googleRating: 4.8,
    reviewCount: 4850,
    badge: "essential",
    tip: "Visit 45 minutes before sunset when the Atlantic light turns golden and illuminates the arched embrasures, famously featured in Game of Thrones as the fortifications of Astapor.",
    tips: [
      "Atlantic winds can be biting even in summer; bring a windbreaker jacket.",
      "Look closely at the brass cannons to spot royal Spanish and Dutch crests dating back to the 1700s."
    ],
    highlights: [
      "Collection of 18th-century ornate Spanish and Dutch naval bronze cannons",
      "Panoramic 180-degree views across the crashing Atlantic surf and Purpuraires islands",
      "Filming location for HBO's Game of Thrones (Astapor)"
    ],
    emotionalBenefits: [
      "Exhilaration from Atlantic ocean breezes and crashing waves against ancient stone walls",
      "Deep connection to Morocco's 18th-century maritime trade and defensive history"
    ],
    ticketTypes: [
      { name: "Public Ramparts Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free self-guided access to the upper battery ramparts"],
    excludedServices: ["Guided tours", "Interior fortress rooms"],
    address: "Rue de la Skala, Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5147, lng: -9.7732 },
    googleMapsUrl: "https://maps.google.com/?q=31.5147,-9.7732"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-sqala-port",
    city: "essaouira",
    name: "Sqala du Port (Port Bastion & Defensive Tower)",
    neighborhood: "Skala",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "photographer", "first-timer"],
    vibeTags: ["historical", "iconic", "scenic", "vibrant"],
    tags: [
      "authentic",
      "coastal",
      "cultural-tour",
      "historical",
      "iconic-landmark",
      "instagrammable",
      "photo-spot",
      "working-port",
      "walk-in"
    ],
    badges: [
      "architectural-gem",
      "historic-landmark",
      "must-see",
      "panoramic-view",
      "photography-spot"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 45,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:30" },
      { dayOfWeek: 1, open: "09:00", close: "17:30" },
      { dayOfWeek: 2, open: "09:00", close: "17:30" },
      { dayOfWeek: 3, open: "09:00", close: "17:30" },
      { dayOfWeek: 4, open: "09:00", close: "17:30" },
      { dayOfWeek: 5, open: "09:00", close: "17:30" },
      { dayOfWeek: 6, open: "09:00", close: "17:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "ticket_booth", "historical_documentation"],
    restrictions: [
      "Steep stone spiral stairs to the top battlements; watch your head through low stone archways."
    ],
    healthContraindications: [
      "Not accessible for visitors with severe mobility impairments due to steep stone staircases."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Climb the circular Borj el-Barmil defensive tower and walk the crenelated artillery platform guarding Essaouira's working harbor. Built in 1769 by Sultan Mohammed ben Abdallah at the entrance to Bab el-Marsa, it offers the quintessential postcard view framing the blue fishing fleet against the whitewashed medina skyline.",
    shortValueProp: "The classic vantage point overlooking the blue wooden fishing boats and whitewashed ramparts.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sqala_du_port_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sqala%2C_Essaouira.jpg/1280px-Sqala%2C_Essaouira.jpg"
    ],
    googlePlaceId: "ChIJVVVVVXDyrw0R4m4I2f8pPik",
    googleRating: 4.5,
    reviewCount: 3120,
    badge: "top-pick",
    tip: "Climb up during late morning when the fishing boats unload their catch, or in the golden afternoon hour for reflections over the harbor basin.",
    tips: [
      "Hold your camera securely when photographing through the circular stone embrasures above the water.",
      "Pair your visit with a stop at the nearby port fish stalls for freshly grilled sardines."
    ],
    highlights: [
      "Panoramic overlook of Essaouira's blue wooden boat armada and fish market",
      "The 1769 monumental Bab el-Marsa sea gate flanked by square towers",
      "Crenelated circular bastion Borj el-Barmil with open gun embrasures"
    ],
    emotionalBenefits: [
      "Nostalgic appreciation of timeless Atlantic maritime craftsmanship and seafaring life",
      "Awe-inspiring perspective of the fortified town emerging from the sea"
    ],
    ticketTypes: [
      { name: "Foreign Visitor Admission", price: 60, currency: "MAD", category: "Standard" },
      { name: "Moroccan Citizens & Residents", price: 30, currency: "MAD", category: "Resident" }
    ],
    includedServices: ["Admission to Borj el-Barmil and the crenelated port rampart platform"],
    excludedServices: ["Guided tour", "Food and beverage"],
    address: "Bab el-Marsa, Port d'Essaouira, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5097, lng: -9.7712 },
    googleMapsUrl: "https://maps.google.com/?q=31.5097,-9.7712"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-medina",
    city: "essaouira",
    name: "Medina of Essaouira (UNESCO World Heritage)",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["art-and-culture", "culture", "first-timer", "history-weaver"],
    vibeTags: ["architectural", "artistic", "historical", "iconic", "vibrant"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "first-timer",
      "historical",
      "iconic-landmark",
      "instagrammable",
      "local-life",
      "market",
      "medina",
      "shopping",
      "walk-in"
    ],
    badges: [
      "architectural-gem",
      "cultural-icon",
      "cultural-immersion",
      "historic-landmark",
      "must-see",
      "shopping-hub"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_walkways", "cobblestone_paths", "partial_wheelchair_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24 hours (Daily; Souks open 09:30 AM - 08:30 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: [
      "artisan_workshops",
      "atm_nearby",
      "cafe",
      "food_stalls",
      "public_toilets_nearby",
      "restrooms",
      "walking_paths"
    ],
    restrictions: ["Motor vehicles prohibited inside the pedestrian medina walls."],
    healthContraindications: [
      "Uneven cobblestones and open side gutters require sturdy walking shoes."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Stroll through the 18th-century fortified town formerly known as Mogador, inscribed by UNESCO in 2001. Built according to European military architecture principles combined with Moroccan urbanism by order of Sultan Mohammed ben Abdallah, the medina features straight, breezy avenues, whitewashed houses with blue trim, and fragrant Thuya wood workshops.",
    shortValueProp: "UNESCO-listed fortified coastal town characterized by blue shutters, straight avenues, and Thuya artisans.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJwXk532Pyrw0RvO8sW0_NfGA",
    googleRating: 4.7,
    reviewCount: 14200,
    badge: "essential",
    tip: "Essaouira's medina is planned on a grid, unlike the labyrinths of Fez or Marrakech; use Avenue Mohamed Zerktouni and Avenue Sidi Mohamed Ben Abdallah as your main north-south and east-west navigation axes.",
    tips: [
      "Bargaining is noticeably more relaxed and polite here than in Marrakech souks.",
      "Visit Thuya wood workshops under the Skala ramparts to watch craftsmen inlay mother-of-pearl and lemon wood."
    ],
    highlights: [
      "Grid-patterned alleys planned by European royal architect Théodore Cornut",
      "Renowned marquetry artisans carving fragrant native Thuya burl wood",
      "Breezy, unhurried coastal atmosphere with street art galleries and cafes"
    ],
    emotionalBenefits: [
      "Calm and relaxed immersion into historic Moroccan market life without aggressive hustling",
      "Sensory pleasure from aromatic cedar, Thuya wood, and fresh sea air"
    ],
    ticketTypes: [
      { name: "Public Medina Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free open public exploration of all medina thoroughfares"],
    excludedServices: ["Private walking guide", "Museum admissions"],
    address: "Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5138, lng: -9.7697 },
    googleMapsUrl: "https://maps.google.com/?q=31.5138,-9.7697"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-galerie-damgaard",
    city: "essaouira",
    name: "Galerie d'Art Damgaard",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "seniors", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "nomad", "culture"],
    vibeTags: ["artistic", "cosy", "historical", "serene"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "medina",
      "relaxed",
      "walk-in",
      "workshop"
    ],
    badges: ["architectural-gem", "cultural-immersion", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:30 AM - 01:00 PM, 03:00 PM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "13:00" },
      { dayOfWeek: 0, open: "15:00", close: "19:00" },
      { dayOfWeek: 1, open: "09:30", close: "13:00" },
      { dayOfWeek: 1, open: "15:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:30", close: "13:00" },
      { dayOfWeek: 2, open: "15:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:30", close: "13:00" },
      { dayOfWeek: 3, open: "15:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:30", close: "13:00" },
      { dayOfWeek: 4, open: "15:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:30", close: "13:00" },
      { dayOfWeek: 5, open: "15:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:30", close: "13:00" },
      { dayOfWeek: 6, open: "15:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["exhibition_hall", "historical_documentation"],
    restrictions: ["Flash photography of art pieces may be restricted."],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Founded in 1988 by Danish collector and art patron Frédéric Damgaard, this trailblazing gallery put Essaouira's self-taught painters and sculptors on the international art map. Displaying vivid, raw, and mystical works by local masters such as Mohamed Tabal and Ali Maimoun, the gallery celebrates Essaouira's unique Singulier Art and Gnaoua trance-inspired folk movements.",
    shortValueProp: "The pioneer gallery of Essaouira's vibrant, mystical self-taught art and Gnaoua painting traditions.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Essaouira_Morocco_streets.jpg/1280px-Essaouira_Morocco_streets.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Essaouira_Atlantic.jpg/1280px-Essaouira_Atlantic.jpg"
    ],
    googlePlaceId: "ChIJ8XJ5G_byrw0RbqDkZ4QZg7M",
    googleRating: 4.6,
    reviewCount: 195,
    badge: "hidden-gem",
    tip: "Ask the gallery staff about the symbolic meaning behind the painted fish, spirits (jnoun), and crescent moons commonly found in Essaouiran naive art.",
    tips: [
      "Original artworks can be shipped internationally with certificates of authenticity.",
      "Notice the massive sculptures carved directly from local cedar and wild olive wood."
    ],
    highlights: [
      "First established contemporary art gallery in Essaouira, operating since 1988",
      "Original works by acclaimed masters of Morocco's 'Singulier' and naive art movements",
      "Fascinating fusion of Gnaoua spiritual symbolism, Berber folklore, and modern expressionism"
    ],
    emotionalBenefits: [
      "Inspiration from raw, intuitive creativity untouched by academic convention",
      "A quiet, contemplative haven away from the bustling medina market alleys"
    ],
    ticketTypes: [
      { name: "Gallery Admission", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free admission to exhibition halls"],
    excludedServices: ["Art acquisitions and international shipping"],
    address: "Avenue Oqba Ibn Nafi, Place El Menzeh, Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5132, lng: -9.7708 },
    googleMapsUrl: "https://maps.google.com/?q=31.5132,-9.7708"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-slat-lkahal",
    city: "essaouira",
    name: "Slat Lkahal Synagogue (Synagogue Slat Lkahal Mogador)",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "seniors", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "history-weaver"],
    vibeTags: ["historical", "intricate", "solemn", "spiritual"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "medina",
      "off-the-beaten-path",
      "relaxed",
      "walk-in"
    ],
    badges: [
      "cultural-immersion",
      "hidden-gem",
      "historic-landmark",
      "moving-experience",
      "spiritual-hub"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 40,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Sunday to Friday; Closed Saturdays for Shabbat)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "14:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "exhibition_hall"],
    restrictions: ["Closed on Saturdays and major Jewish holidays for Shabbat."],
    healthContraindications: [
      "First-floor sanctuary accessible only via a steep stone flight of stairs."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Discover the lovingly restored 19th-century 'Synagogue of the Poor', built in 1850 in the heart of Essaouira's Mellah. Unlike the private merchant synagogues of the Kasbah, Slat Lkahal served the working-class Jewish community and was financed by communal donations. Restored through an international heritage initiative led by Haim Bitton, it houses historic wooden benches, prayer arks, and archival photographs.",
    shortValueProp: "The restored 1850 'Synagogue of the Poor' offering an intimate look at Mogador's working-class Jewish history.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Slat_Lkahal_Mogador_synagogue.jpg/1280px-Slat_Lkahal_Mogador_synagogue.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Slat_Lkahal_synagogue_exterior_01.jpg/1280px-Slat_Lkahal_synagogue_exterior_01.jpg"
    ],
    googlePlaceId: "ChIJbX7Q4Dzyrw0R8uS3X9H1rWk",
    googleRating: 4.6,
    reviewCount: 110,
    badge: "hidden-gem",
    tip: "Prepare a small cash donation (20 MAD) for the caretaker who maintains the sanctuary and unlocks the historic prayer rooms.",
    tips: [
      "Modest dress is appreciated out of respect for the consecrated house of worship.",
      "Look up at the painted wooden ceilings and carved Hebrew memorial plaques honoring 19th-century community members."
    ],
    highlights: [
      "Intimate 1850 sanctuary restored to its authentic 19th-century appearance",
      "Historical photo exhibits documenting daily life in Mogador's Mellah",
      "Carved wooden Tevah (bimah) and traditional blue and white prayer sanctuary"
    ],
    emotionalBenefits: [
      "Deeply touching glimpse into Morocco's multi-faith social history and heritage preservation",
      "Peaceful, solemn sanctuary in a weathered corner of the medina"
    ],
    ticketTypes: [
      { name: "General Admission", price: 0, currency: "MAD", conditions: "Voluntary donation to preservation fund encouraged" }
    ],
    includedServices: ["Self-guided visit of the prayer hall and exhibition room"],
    excludedServices: ["Dedicated guided tour"],
    address: "119 Rue du Mellah, Mellah, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5161, lng: -9.7675 },
    googleMapsUrl: "https://maps.google.com/?q=31.5161,-9.7675"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-mellah",
    city: "essaouira",
    name: "The Mellah (Historic Jewish Quarter)",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "history-weaver", "culture"],
    vibeTags: ["historical", "nostalgic", "solemn"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "medina",
      "off-the-beaten-path",
      "sunset",
      "walk",
      "walk-in"
    ],
    badges: [
      "cultural-immersion",
      "historic-landmark",
      "historic-memorial",
      "moving-experience"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24 hours (Daily; Daylight visits recommended)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "walking_paths"],
    restrictions: [
      "Do not enter abandoned or structurally shored-up buildings marked with scaffolding."
    ],
    healthContraindications: [
      "Pavements can be uneven with loose stones underfoot; wear sturdy closed-toe shoes."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Explore the poignant, weathered streets of Essaouira's Mellah, established in 1807 under Sultan Slimane to house the town's surging Jewish population, which once formed over half of the city. Though battered by decades of Atlantic salt winds and neglect, this historic quarter features grand Star of David lintels, carved Hebrew inscriptions, and significant ongoing urban restoration projects.",
    shortValueProp: "Atmospheric, wind-worn historical Jewish district echoing Essaouira's once-vibrant Judeo-Moroccan merchant era.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg/1280px-In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mellah_square_Essaouira.jpg/1280px-Mellah_square_Essaouira.jpg"
    ],
    googlePlaceId: "ChIJW1q2h_jyrw0RL9-wzH-hE1Q",
    googleRating: 4.1,
    reviewCount: 380,
    badge: "historical",
    tip: "Walk along the northern sea wall where the Mellah meets the Atlantic to see the power of the crashing waves against the historic coastal bastions.",
    tips: [
      "Visit during daylight hours for the best photographic light and easiest navigation.",
      "Look above doorway arches to find preserved stone carvings with Stars of David and names of former merchant families."
    ],
    highlights: [
      "Carved doorway keystones and masonry bearing Hebrew script and Star of David motifs",
      "Striking architectural contrast between sea-eroded limestone and whitewashed façades",
      "Direct insight into Essaouira's 19th-century status as Morocco's majority-Jewish trade capital"
    ],
    emotionalBenefits: [
      "Profound historical empathy for the multicultural diaspora that built coastal Morocco",
      "Photographic inspiration from dramatic textures, salt-aged stonework, and ocean light"
    ],
    ticketTypes: [
      { name: "Public Street Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free open walking access through the neighborhood streets"],
    excludedServices: ["Interior synagogue admissions", "Guided tours"],
    address: "Quartier Mellah, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5165, lng: -9.7667 },
    googleMapsUrl: "https://maps.google.com/?q=31.5165,-9.7667"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-bayt-dakira",
    city: "essaouira",
    name: "Bayt Dakira (The House of Memory & Simon Attias Synagogue)",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "seniors", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "history-weaver", "quiet-mystic"],
    vibeTags: ["architectural", "elegant", "historical", "serene", "spiritual"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "iconic-landmark",
      "medina",
      "off-the-beaten-path",
      "relaxed",
      "walk-in"
    ],
    badges: [
      "architectural-gem",
      "cultural-icon",
      "educational",
      "historic-landmark",
      "historic-memorial",
      "moving-experience",
      "spiritual-hub"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 05:00 PM (Sunday to Friday; Closed Saturdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "17:00" },
      { dayOfWeek: 1, open: "10:00", close: "17:00" },
      { dayOfWeek: 2, open: "10:00", close: "17:00" },
      { dayOfWeek: 3, open: "10:00", close: "17:00" },
      { dayOfWeek: 4, open: "10:00", close: "17:00" },
      { dayOfWeek: 5, open: "10:00", close: "14:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "shaded_courtyards"],
    restrictions: [
      "Closed Saturdays for Shabbat; respectful attire required inside the synagogue sanctuary."
    ],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Inaugurated in January 2020 by King Mohammed VI, Bayt Dakira ('The House of Memory') is a cutting-edge cultural and spiritual museum housed within the beautifully restored 19th-century Simon Attias Synagogue. Dedicated to the shared Judeo-Muslim heritage and peaceful coexistence that defined Mogador, it features multimedia exhibits, historic Torah scrolls, and the Haim & Celia Zafrani Research Center.",
    shortValueProp: "Royal-inaugurated memorial museum and restored 19th-century synagogue celebrating Moroccan Judeo-Muslim coexistence.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bayt_Dakira%2C_Simon_Attias_synagogue%2C_Essaouira.jpg/1280px-Bayt_Dakira%2C_Simon_Attias_synagogue%2C_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bayt_Dakira_Essaouira_06.jpg/1280px-Bayt_Dakira_Essaouira_06.jpg"
    ],
    googlePlaceId: "ChIJO3W9aPjyrw0RTn94-Xz1P68",
    googleRating: 4.8,
    reviewCount: 420,
    badge: "top-pick",
    tip: "Take time to watch the documentary videos on the ground floor, which feature oral histories from Essaouirans of Jewish and Muslim backgrounds recalling life in the 1940s and 1950s.",
    tips: [
      "Staff on site are exceptionally knowledgeable and often offer spontaneous bilingual English and French explanations.",
      "Don't miss the upper research library and balcony overlooking the restored carved wooden prayer gallery."
    ],
    highlights: [
      "Spectacularly restored 1881 Simon Attias Synagogue prayer hall with ornate woodwork",
      "Moving documentary exhibits on Moroccan royal protection and interfaith coexistence",
      "International research institute dedicated to Moroccan Jewish and Andalusian history"
    ],
    emotionalBenefits: [
      "Deep optimism inspired by authentic historical harmony and mutual respect across religions",
      "Aesthetic delight from immaculate Moroccan cedar craft, plasterwork, and historic archival photography"
    ],
    ticketTypes: [
      { name: "General Admission", price: 0, currency: "MAD", conditions: "Free admission; donations welcomed" }
    ],
    includedServices: ["Full access to synagogue hall, multimedia galleries, and research exhibits"],
    excludedServices: ["Academic archival research services (advance booking required)"],
    address: "Rue Ziry Ibn Atiyah, Mellah, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5156, lng: -9.7673 },
    googleMapsUrl: "https://maps.google.com/?q=31.5156,-9.7673"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-patisserie-driss",
    city: "essaouira",
    name: "Pâtisserie Driss (Since 1928)",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["foodie", "first-timer", "relaxation"],
    vibeTags: ["artistic", "cosy", "historical", "nostalgic"],
    tags: [
      "authentic",
      "culture",
      "foodie",
      "historical",
      "local-life",
      "medina",
      "relaxed",
      "walk-in"
    ],
    badges: ["cultural-icon", "foodie-paradise", "historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 25,
    pricePerPerson: 25,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "07:00 AM - 09:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:00", close: "21:00" },
      { dayOfWeek: 1, open: "07:00", close: "21:00" },
      { dayOfWeek: 2, open: "07:00", close: "21:00" },
      { dayOfWeek: 3, open: "07:00", close: "21:00" },
      { dayOfWeek: 4, open: "07:00", close: "21:00" },
      { dayOfWeek: 5, open: "07:00", close: "21:00" },
      { dayOfWeek: 6, open: "07:00", close: "21:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "shaded_courtyards", "garden_seating_access", "restrooms"],
    restrictions: ["Cash only for counter pastry and café orders."],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Unwind at Essaouira's legendary bakery and café, established in 1928 by Maalam Driss Ottmani. Tucked just behind Place Moulay Hassan, its unassuming front bakery counter opens into a tranquil, tree-shaded courtyard hung with modern paintings and black-and-white photos of historic Mogador, serving Moroccan almond pastries, buttery French croissants, and spiced mint tea.",
    shortValueProp: "Historic 1928 pastry institution featuring almond cornes de gazelle in an art-filled open courtyard patio.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Place_Moulay_Hassan_Essaouira.jpg/1280px-Place_Moulay_Hassan_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Essaouira_Morocco_streets.jpg/1280px-Essaouira_Morocco_streets.jpg"
    ],
    googlePlaceId: "ChIJ27d_D_byrw0RbV91Qv5Fm6A",
    googleRating: 4.4,
    reviewCount: 1560,
    badge: "popular",
    tip: "Select your pastries directly from the glass counter in the front shop before sitting down; the servers in the courtyard patio will take your beverage order and bring your pastry plate.",
    tips: [
      "Arrive before 10:00 AM for the freshest warm croissants, pain au chocolat, and almond briouates.",
      "Pair your treats with a traditional Moroccan 'nous-nous' (half espresso, half frothy steamed milk)."
    ],
    highlights: [
      "Essaouira's oldest continuous bakery, founded in 1928",
      "Charming interior patio shaded by bougainvillea and covered with works by local painters",
      "Authentic Moroccan cornes de gazelle (gazelle horns) made with pure almond paste and orange blossom water"
    ],
    emotionalBenefits: [
      "Cozy nostalgic comfort in a timeless, bohemian courtyard",
      "Culinary satisfaction from heritage baking traditions passed down through generations"
    ],
    ticketTypes: [
      { name: "Average Café & Pastry Spend", price: 25, currency: "MAD", conditions: "Pay as you consume" }
    ],
    includedServices: ["Table service in courtyard patio"],
    excludedServices: ["Takeaway packaging surcharge for large gift boxes"],
    address: "10 Rue El Hajjali, Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5126, lng: -9.7702 },
    googleMapsUrl: "https://maps.google.com/?q=31.5126,-9.7702"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-dar-souiri",
    city: "essaouira",
    name: "Dar Souiri Cultural Center",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "nomad", "history-weaver"],
    vibeTags: ["architectural", "artistic", "elegant", "peaceful", "serene"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "festival",
      "historical",
      "medina",
      "off-the-beaten-path",
      "relaxed",
      "walk-in"
    ],
    badges: [
      "architectural-gem",
      "cultural-icon",
      "cultural-immersion",
      "educational",
      "historic-landmark",
      "quiet-retreat"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_courtyard", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 01:00 PM, 03:00 PM - 07:00 PM (Monday to Saturday; Closed Sundays)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "13:00" },
      { dayOfWeek: 1, open: "15:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "13:00" },
      { dayOfWeek: 2, open: "15:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "13:00" },
      { dayOfWeek: 3, open: "15:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "13:00" },
      { dayOfWeek: 4, open: "15:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "13:00" },
      { dayOfWeek: 5, open: "15:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "13:00" },
      { dayOfWeek: 6, open: "15:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "shaded_courtyards"],
    restrictions: ["Closed on Sundays outside of major festival seasons."],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Step inside a palatial 19th-century merchant riad that serves as the headquarters of the Association Essaouira Mogador, the civic and cultural organization co-founded by André Azoulay that revitalized Essaouira's global artistic standing. Featuring soaring carved cedar columns, a glass-roofed patio, and rotating contemporary art exhibits, Dar Souiri is the beating intellectual heart of the city.",
    shortValueProp: "The vibrant 19th-century riad headquarters of the Association Essaouira Mogador hosting free art exhibits and music.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJ8XJ5G_byrw0RLz6e8h6zT6c",
    googleRating: 4.6,
    reviewCount: 175,
    badge: "architectural-gem",
    tip: "Check the bulletin board near the reception desk for upcoming chamber music concerts, poetry readings, and Gnaoua Lila evenings.",
    tips: [
      "Dar Souiri is the main indoor concert venue for the annual Festival des Andalousies Atlantiques and Printemps Musical des Alizés.",
      "The on-site public library features rare books and historical records documenting Mogador's maritime trade."
    ],
    highlights: [
      "Superbly preserved 19th-century patrician riad architecture with monumental stone arches and cedar balustrades",
      "Free public art galleries showcasing contemporary Moroccan and international artists",
      "The organizational epicenter behind the revival of Essaouira's world-famous music festivals"
    ],
    emotionalBenefits: [
      "Quiet respite in a dignified historic mansion filled with music and intellectual life",
      "Enriching contact with the civic leaders and artists shaping modern Moroccan culture"
    ],
    ticketTypes: [
      { name: "General Riad & Gallery Visit", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free admission to the patio, art galleries, and public reading spaces"],
    excludedServices: ["Ticketed festival evening performances"],
    address: "10 Avenue du Caire, Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5140, lng: -9.7686 },
    googleMapsUrl: "https://maps.google.com/?q=31.5140,-9.7686"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-musee-sidi-mohammed-ben-abdallah",
    city: "essaouira",
    name: "Sidi Mohammed ben Abdallah Museum",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "seniors", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history", "history-weaver"],
    vibeTags: ["architectural", "historical", "intricate", "peaceful", "serene"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "medina",
      "off-the-beaten-path",
      "relaxed",
      "walk-in"
    ],
    badges: [
      "architectural-gem",
      "cultural-icon",
      "educational",
      "historic-landmark",
      "must-see"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 70,
    pricePerPerson: 70,
    entryPrice: 70,
    durationMinutes: 60,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Wednesday to Monday; Closed Tuesdays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "ticket_booth", "restrooms"],
    restrictions: ["Closed on Tuesdays for weekly maintenance."],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Housed in a dignified 19th-century pasha's palace on Rue Derb Laâlouj, Essaouira's primary ethnographic and history museum is named after the city's royal founder, Sultan Mohammed ben Abdallah. The museum displays rich regional collections of Amazigh silver jewelry, traditional Gnaoua instruments (guembri, qraqeb), antique weaponry, Thuya woodcraft, and historical urban maps.",
    shortValueProp: "The premier regional museum showcasing Amazigh jewelry, antique Gnaoua musical instruments, and Mogador's history.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Essaouira_skala_de_la_ville.jpg/1280px-Essaouira_skala_de_la_ville.jpg"
    ],
    googlePlaceId: "ChIJbX7Q4Dzyrw0RN3pZ421033o",
    googleRating: 4.2,
    reviewCount: 450,
    badge: "historical",
    tip: "Don't miss the musical instruments wing on the upper level, which features rare ceremonial instruments used in Sufi rituals and Gnaoua Lila ceremonies.",
    tips: [
      "Most informational plaques are in French and Arabic, so use a translation app if you do not read French.",
      "The 19th-century riad building with its central patio and painted ceilings is as much of an exhibit as the artifacts inside."
    ],
    highlights: [
      "Extensive collection of Gnaoua, Amazigh, and Andalusian traditional musical instruments",
      "Historic 18th- and 19th-century silver filigree jewelry from the Sous and Anti-Atlas regions",
      "19th-century Moroccan palace architecture with carved cedar balustrades and zellige tiles"
    ],
    emotionalBenefits: [
      "Fascinating cultural context that enriches the rest of your walks through Essaouira's medina",
      "Appreciation for Morocco's living musical and tribal craft heritage"
    ],
    ticketTypes: [
      { name: "Foreign Adult Admission", price: 70, currency: "MAD", category: "Standard" },
      { name: "Moroccan Citizens & Residents", price: 30, currency: "MAD", category: "Resident" }
    ],
    includedServices: ["Admission to all ethnographic, musical, and historical exhibition rooms"],
    excludedServices: ["Guided tour service"],
    address: "Rue Derb Laâlouj, Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5135, lng: -9.7717 },
    googleMapsUrl: "https://maps.google.com/?q=31.5135,-9.7717"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-synagogue-chaim-pinto",
    city: "essaouira",
    name: "Rabbi Chaim Pinto Synagogue",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "history-weaver", "quiet-mystic"],
    vibeTags: ["historical", "intricate", "nostalgic", "solemn", "spiritual"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "medina",
      "off-the-beaten-path",
      "relaxed",
      "walk-in"
    ],
    badges: [
      "cultural-immersion",
      "historic-landmark",
      "historic-memorial",
      "moving-experience",
      "spiritual-hub"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Sunday to Friday; Closed Saturdays for Shabbat)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "14:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "exhibition_hall"],
    restrictions: [
      "Closed on Saturdays and Jewish high holidays; male visitors are asked to wear a kippah provided at the door."
    ],
    healthContraindications: [
      "Located on the upper floor of a courtyard residence with steep historic stairs."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Visit the revered historic synagogue and study of Rabbi Chaim Pinto (1748–1845), the leading spiritual authority and miracle-working sage of 19th-century Mogador. Situated inside the Mellah, this multi-story compound preserves Rabbi Pinto's personal prayer room, original blue wooden Torah ark, and study chambers that still welcome thousands of international pilgrims during the annual September Hiloula.",
    shortValueProp: "Revered 19th-century pilgrimage synagogue and private study of the miracle-working Kabbalist Rabbi Chaim Pinto.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chaim_Pinto_Synagogue.jpg/1280px-Chaim_Pinto_Synagogue.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Slat_Lkahal_Mogador_synagogue.jpg/1280px-Slat_Lkahal_Mogador_synagogue.jpg"
    ],
    googlePlaceId: "ChIJW5U4a_jyrw0Rkn21Q3-lE9c",
    googleRating: 4.7,
    reviewCount: 240,
    badge: "hidden-gem",
    tip: "The synagogue is maintained by a devoted Muslim family who have protected the holy site for generations; show your gratitude with a customary 20 MAD donation.",
    tips: [
      "During the annual Hiloula in September (26th of Elul), the street fills with lively song, prayer, and pilgrims from around the world.",
      "Ask to see Rabbi Pinto's personal stone bench where he received townspeople seeking blessings and counsel."
    ],
    highlights: [
      "Authentic 19th-century prayer hall featuring a sky-blue Torah ark and traditional bimah",
      "Personal prayer room and study of the venerated Kabbalist Rabbi Chaim Pinto",
      "Living testament to the peaceful intergenerational custodianship between Moroccan Jews and Muslims"
    ],
    emotionalBenefits: [
      "Spiritual reverence and a tangible feeling of sacred peace inside an ancient prayer room",
      "Deep connection to Morocco's profound tradition of saint veneration across religious lines"
    ],
    ticketTypes: [
      { name: "Synagogue Admission", price: 0, currency: "MAD", conditions: "Voluntary donation to preservation fund appreciated" }
    ],
    includedServices: ["Access to prayer hall, Rabbi Pinto's study room, and memorial sanctuary"],
    excludedServices: ["Formal rabbinical guide services"],
    address: "Rue du Mellah, Mellah, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5167, lng: -9.7672 },
    googleMapsUrl: "https://maps.google.com/?q=31.5167,-9.7672"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-borj-el-berod",
    city: "essaouira",
    name: "Borj El Berod (The Sunken Castle of Diabat)",
    neighborhood: "Diabat",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "history", "nature", "photographer"],
    vibeTags: ["historical", "nostalgic", "scenic", "solemn"],
    tags: [
      "active",
      "adventure",
      "atlantic",
      "authentic",
      "coastal",
      "historical",
      "nature",
      "nature-walk",
      "off-the-beaten-path",
      "photo-spot",
      "sunset",
      "sunset-view",
      "walk"
    ],
    badges: [
      "historic-landmark",
      "must-see",
      "panoramic-view",
      "peaceful-escape",
      "photography-spot",
      "sunset-spot"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 4.5,
    transportMode: "mixed",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "Open 24 hours (Daily; Accessible only at low to medium tide)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: [
      "Do not attempt to cross the mouth of Oued Ksob during spring high tides or after heavy winter rains."
    ],
    healthContraindications: [
      "Requires a 45-minute sand walk along the beach from Essaouira or from the village of Diabat."
    ],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Hike along the sweeping windswept dunes south of Essaouira to the romantic ruins of Borj El Berod (the 'Tower of Gunpowder'), an 18th-century watchtower fortress built by Sultan Mohammed ben Abdallah. Half-swallowed by moving sands and Atlantic waves at the mouth of the Ksob River, this haunting sea fortress famously inspired the countercultural legends surrounding Jimi Hendrix's 1969 stay in neighboring Diabat.",
    shortValueProp: "Romantic 18th-century royal sea fortress half-submerged in Atlantic sand dunes near the village of Diabat.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Essaouira_Atlantic.jpg/1280px-Essaouira_Atlantic.jpg"
    ],
    googlePlaceId: "ChIJWc4QdYPyzw0Rl0N4EwR5x-M",
    googleRating: 4.5,
    reviewCount: 650,
    badge: "hidden-gem",
    tip: "Check local tide tables before setting out; the fortress is surrounded by water at high tide, and the Oued Ksob riverbed can be waist-deep unless timed around low tide.",
    tips: [
      "Combine your visit with mint tea at the Jimi Hendrix-themed cafes in the sleepy Berber village of Diabat just inland.",
      "Walk barefoot at the water's edge where the sand is firmly packed for an easier trek."
    ],
    highlights: [
      "Photogenic 18th-century stone watchtower slowly being swallowed by coastal Atlantic dunes",
      "Sweeping views toward Mogador Island (Iles Purpuraires) and the crashing southern surf",
      "Iconic rock-and-roll folklore connecting Jimi Hendrix and 1960s bohemian travelers to Diabat"
    ],
    emotionalBenefits: [
      "Sense of wild coastal adventure and untamed Atlantic solitude",
      "Poetic reflection on the impermanence of fortresses against the ocean and wind"
    ],
    ticketTypes: [
      { name: "Public Beach Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free open exploration of beach ruins"],
    excludedServices: ["Horseback or camel riding rentals", "Vehicle transport"],
    address: "Plage de Diabat, Diabat, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.4883, lng: -9.7686 },
    googleMapsUrl: "https://maps.google.com/?q=31.4883,-9.7686"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-place-moulay-hassan",
    city: "essaouira",
    name: "Place Moulay Hassan (Moulay Hassan Square)",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "foodie", "relaxation", "social-collector"],
    vibeTags: ["artistic", "energetic", "iconic", "scenic", "vibrant"],
    tags: [
      "authentic",
      "coastal",
      "culture",
      "first-timer",
      "foodie",
      "historical",
      "iconic-landmark",
      "local-life",
      "medina",
      "photo-spot",
      "relaxed",
      "sunset",
      "sunset-view",
      "walk-in"
    ],
    badges: [
      "cultural-icon",
      "cultural-immersion",
      "family-friendly",
      "must-see",
      "photography-spot",
      "sunset-spot"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: [
      "flat_ground",
      "flat_walkways",
      "wide_flat_walkways",
      "step_free_access",
      "shaded_benches"
    ],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 hours (Daily; Cafes open 07:30 AM - 11:30 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: [
      "cafe",
      "fresh_juice_bars",
      "atm_nearby",
      "perimeter_benches",
      "walking_paths",
      "public_toilets_nearby"
    ],
    restrictions: [
      "Bicycles and skateboards must yield to pedestrians across the crowded main square."
    ],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Immerse yourself in the bustling open-air crossroads of Essaouira, situated at the dramatic junction between the UNESCO medina, the fishing harbour, and the ocean ramparts. Named after the 19th-century Alaouite Sultan Moulay Hassan I, this palm-fringed pedestrian plaza is filled with cafe terraces, street musicians, local families enjoying evening strolls, and soaring seagulls riding coastal sea breezes.",
    shortValueProp: "The vibrant main plaza connecting the medina and the fishing port, ideal for people-watching and mint tea.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Place_Moulay_Hassan_Essaouira.jpg/1280px-Place_Moulay_Hassan_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Essaouira_skala_de_la_ville.jpg/1280px-Essaouira_skala_de_la_ville.jpg"
    ],
    googlePlaceId: "ChIJk9202mPyrw0Rz7117w910wE",
    googleRating: 4.6,
    reviewCount: 5400,
    badge: "essential",
    tip: "Grab a front-row terrace table at Café de France or Taros near golden hour to watch the sun sink below the ramparts while street performers tune their instruments.",
    tips: [
      "Fresh orange and pomegranate juice stands on the harbor side offer fresh drinks for 10–15 MAD.",
      "During late June, this plaza transforms into the central open-air stage for the world-renowned Gnaoua and World Music Festival."
    ],
    highlights: [
      "The central social meeting point bridging the historic medina and active fishing port",
      "Open views of the 18th-century Bab el-Marsa gateway and stone sea walls",
      "Lively gathering hub for acoustic Gnaoua performers, artists, and evening promenaders"
    ],
    emotionalBenefits: [
      "Joyful, relaxed people-watching in a breezy, open maritime setting",
      "Effortless connection to the daily communal rhythm of Essaouiran life"
    ],
    ticketTypes: [
      { name: "Public Square Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free public access to the open square"],
    excludedServices: ["Café and restaurant orders"],
    address: "Place Moulay Hassan, Médina Ancienne, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5115, lng: -9.7710 },
    googleMapsUrl: "https://maps.google.com/?q=31.5115,-9.7710"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-bab-doukkala",
    city: "essaouira",
    name: "Bab Doukkala (Monumental Gate & Market Quarter)",
    neighborhood: "Bab Doukkala",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "history", "first-timer", "foodie"],
    vibeTags: ["architectural", "energetic", "historical", "sensory", "vibrant"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "local-life",
      "market",
      "medina",
      "street-food",
      "walk-in"
    ],
    badges: [
      "architectural-landmark",
      "cultural-immersion",
      "historic-landmark",
      "market-experience"
    ],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_walkways", "cobblestone_paths", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24 hours (Daily; Market stalls active 08:30 AM - 07:30 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "atm_nearby", "walking_paths", "street_parking"],
    restrictions: [
      "Heavy pedestrian and handcart traffic during peak market hours (10:00 AM - 01:00 PM)."
    ],
    healthContraindications: [],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Admire the monumental 18th-century northern stone gateway built during the reign of Sultan Mohammed ben Abdallah to control entry into the royal city from Marrakech and the Doukkala plains. Just inside the gate lies Essaouira's liveliest local market quarter, where local residents shop for fresh herbs, seasonal fruits, Atlantic olives, and regional spices far from the tourist souvenir stalls.",
    shortValueProp: "The monumental 18th-century northern gate opening into Essaouira's authentic daily local produce and spice market.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bab_Doukkala.jpg/1280px-Bab_Doukkala.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJW1q2h_jyrw0Rkn21Q3-lE9c",
    googleRating: 4.4,
    reviewCount: 890,
    badge: "historical",
    tip: "Walk just inside the archway in the morning to buy fresh mint, wild thyme, and dates from local country farmers who come in from the surrounding Chiadma region.",
    tips: [
      "This is one of the easiest pickup points for small petit taxis if you are heading outside the medina.",
      "Photograph the impressive horseshoe arch and fortified stone bastions from the exterior plaza."
    ],
    highlights: [
      "Monumental 18th-century stone archway framing northern approaches to the medina",
      "Authentic local food market with fresh citrus, mountain honey, argan oil, and olives",
      "Vibrant immersion in everyday Swiri life away from standard tourist paths"
    ],
    emotionalBenefits: [
      "Authentic sensory immersion into the genuine daily rhythm of Moroccan neighborhood life",
      "Visual appreciation of grand 18th-century defensive stone architecture"
    ],
    ticketTypes: [
      { name: "Public Gate & Market Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free open public access through the gate and market street"],
    excludedServices: ["Market stall purchases"],
    address: "Bab Doukkala, Avenue Mohamed Zerktouni, 44000 Essaouira, Morocco",
    coordinates: { lat: 31.5173, lng: -9.7661 },
    googleMapsUrl: "https://maps.google.com/?q=31.5173,-9.7661"
  }
];