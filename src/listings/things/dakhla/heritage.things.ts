/**
 * =========================================================================
 * [DAKHLA] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/dakhla/index.ts
 *
 * DATA: real collected listings (never AI-generated). Optional operational
 * arrays carry ["not available"] until real data is collected.
 *
 * ──────────────────────────────────────────────────────────────────────
 * MASTER TEMPLATE & ALLOWED VALUES BIBLE (for web-research agents)
 * ──────────────────────────────────────────────────────────────────────
 * RULES FOR DATA AGENTS:
 *  1. Use ONLY the values listed in this bible. Never invent random values.
 *  2. If a genuinely new value is needed, add it to the canonical bible
 *     (src/listings/things/shared/thingsBible.ts) FIRST, then use it here.
 *  3. Replace ["not available"] markers with real, source-verified values only.
 *  4. The values you SEE in this file are NOT the full vocabulary — the
 *     lists below are. Example: lifestyle also has 'premium' even if this
 *     file only uses 'lean' and 'balanced'.
 *
 * FIXED ENUMS (exhaustive — from src/listings/types.ts):
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
 * - sportIntent:      'practical' | 'experience'   (sport listings only)
 * - facilityType:     'gym-fitness' | 'running-outdoor' | 'swimming-pool' |
 *                     'yoga-movement' | 'combat-sports' | 'team-sports'
 * - experienceType:   'surf-kitesurf' | 'hiking-trek' | 'climbing-adventure' |
 *                     'desert-sport' | 'water-sport'
 * - skillLevel:       'beginner' | 'intermediate' | 'advanced'
 * - ticketTypes:      [{ name, price, currency: 'MAD', category?, conditions? }]
 * - nearbyCombos:     [{ name, type: 'eat'|'visit'|'shop'|'sleep', id?, distanceKm?,
 *                      recommendedTransition? }]
 * - visitorQuotes:    [{ quote, author, type, rating: 1-5 }]
 * - faq:              [{ q, a }]
 * - coordinates:      { lat, lng }
 * - openingHoursStructured: [{ dayOfWeek: 0-6 (0=Sunday), open: 'HH:MM', close: 'HH:MM' }]
 *
 * ALLOWED NEIGHBORHOODS (Dakhla only):
 * - Touristic:     'Corniche Oued Ed-Dahab' | 'Boulevard Mohammed V' | 'Centre-Ville' | 'Lagoon Kitesurf Strip'
 * - Mid-Touristic: 'Port de Dakhla' | 'Al Massira'
 * - Low-Touristic: 'Hay Oum Tounsi' | 'Al Wahda' | 'Hay Al Qods' | 'Hay El Hassani' |
 *                  'Hay Salam' | 'Quartier Industriel' | 'Cité Militaire' | 'Hay Al Amal'
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const dakhlaHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-oyster-farms",
    city: "dakhla",
    name: "Dakhla Oyster Farms",
    neighborhood: "Lagoon Kitesurf Strip",
    // ── 1. QUIZ ──
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["foodie", "culture", "sensory-seeker"],
    vibeTags: ["scenic", "sensory", "tranquil", "authentic"],
    tags: ["authentic", "coastal", "foodie", "lagoon", "local-life", "private", "relaxed", "sunset", "walk-in"],
    badges: ["foodie-paradise", "panoramic-view", "sunset-spot"],
    // ── 2. FILTER ──
    price: 120,
    pricePerPerson: 120,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 26.0,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "10:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "19:00" },
      { dayOfWeek: 1, open: "10:00", close: "19:00" },
      { dayOfWeek: 2, open: "10:00", close: "19:00" },
      { dayOfWeek: 3, open: "10:00", close: "19:00" },
      { dayOfWeek: 4, open: "10:00", close: "19:00" },
      { dayOfWeek: 5, open: "10:00", close: "19:00" },
      { dayOfWeek: 6, open: "10:00", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "traditional_restaurant", "restrooms", "panoramic_viewpoint"],
    restrictions: ["Payment in cash only; cards rarely accepted at lagoon shacks"],
    healthContraindications: ["Seafood or shellfish allergies"],
    // ── 3. UI ──
    description: "The artisanal oyster parks along the Dakhla lagoon—notably around PK 25 and Boutalha—showcase how the sheltered coastal ecosystem sustains local aquaculture. Visitors can taste fresh oysters shucked directly on the water's edge alongside grilled croaker, octopus salad, and tajines.",
    shortValueProp: "Taste fresh Atlantic oysters shucked directly at the edge of the desert lagoon.",
    images: [],
    googleRating: 4.6,
    reviewCount: 720,
    googleReviewCount: 720,
    badge: "top-pick",
    tip: "Arrive around midday for freshly landed seafood and combine with a calm lagoon view before afternoon winds pick up.",
    tips: [
      "Bring cash in MAD as credit card terminals often fail due to remote mobile coverage.",
      "Ask for a platter combining raw oysters with fresh lemon and grilled razor clams or octopus."
    ],
    highlights: [
      "Fresh cupped oysters harvested straight from lagoon oyster beds",
      "Panoramic views of kitesurfers and tidal flats from rustic wooden waterside decks"
    ],
    emotionalBenefits: ["Sensory", "Curious", "Satisfied"],
    bestTimeToVisit: "Lunch or early afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Admission (Pay per seafood dish)", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free access; a dozen fresh oysters typically costs between 60 and 90 MAD.",
    includedServices: ["Table seating with lagoon view", "Fresh seafood shucking on order"],
    excludedServices: ["Private transfers", "Alcoholic beverages"],
    hiddenCostsInfo: "A typical full seafood meal runs 100 to 180 MAD per person.",
    address: "Route de la Lagune PK 25, Dakhla 73000, Morocco",
    coordinates: { lat: 23.8967, lng: -15.8012 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=oyster+farms+Dakhla",
    parkingInfo: "Dedicated dirt parking lot in front of each oyster park.",
    publicTransportInfo: "Accessible by grand taxi, hired private driver, or rental car along the main lagoon road.",
    dressCode: "Casual beachwear or comfortable travel clothing; bring a light windbreaker.",
    equipmentNeeded: ["Cash in MAD", "Sunglasses and sun protection"],
    fitnessLevel: "Relaxed (Short flat walk from parking to dining terrace)",
    ageRestrictions: "Suitable for all ages; children must be supervised near tidal water.",
    safetyNotes: "Those with known shellfish sensitivities should opt for grilled white fish tagines.",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [
      {
        quote: "Eating fresh oysters right on the water with desert hills in the background is unforgettable.",
        author: "Laurent D.",
        type: "Food Explorer",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Dakhla Kitesurf Lagoon", type: "visit", distanceKm: 4.5 },
      { name: "Dune Blanche", type: "visit", distanceKm: 18.0 }
    ],
    storyTitle: "Oasis of the Atlantic Lagoon",
    history: "Modern aquaculture took root in Dakhla's bay in the early 2000s when maritime biologists realized that its nutrient-rich, clean Atlantic currents and steady water temperature offered ideal conditions for cupped oysters.",
    culturalImportance: "The oyster farms represent an eco-friendly diversification of Dakhla's maritime economy, balancing deep-sea fishing with sustainable lagoon stewardship.",
    localLegend: "Locals consider the lagoon oysters to carry the pure essence of both ocean spray and desert sun.",
    funFact: "Dakhla Bay produces a significant share of Morocco's high-grade oysters, supplying premier seafood tables in Casablanca and Paris.",
    faq: [
      { q: "Can I visit without eating oysters?", a: "Yes, restaurants serve grilled fish, calamari, salads, and tea." },
      { q: "Is pre-booking required?", a: "No, walk-ins are standard, though large groups should call ahead during peak holidays." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-corniche",
    city: "dakhla",
    name: "Dakhla Corniche (Corniche Oued Ed-Dahab)",
    neighborhood: "Corniche Oued Ed-Dahab",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "seniors", "relaxation"],
    vibeTags: ["scenic", "peaceful", "tranquil", "serene"],
    tags: ["coastal", "local-life", "relaxed", "sunset", "sunset-view", "walk", "walk-in", "waterfront"],
    badges: ["peaceful-escape", "panoramic-view", "sunset-spot", "budget-friendly"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "wide_flat_walkways", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["walking_paths", "perimeter_benches", "street_parking", "panoramic_viewpoint"],
    restrictions: ["Public pedestrian promenade; no motorized vehicles on footpaths"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "The Corniche Oued Ed-Dahab stretches along the eastern shoreline of Dakhla's peninsula facing the sheltered bay. Broad, paved, and lined with benches, it provides a quiet promenade where locals gather at sunset to enjoy ocean breezes, view wading seabirds, and escape the desert heat.",
    shortValueProp: "A tranquil seaside promenade offering sweeping views across Dakhla Bay.",
    images: [],
    googleRating: 4.4,
    reviewCount: 510,
    googleReviewCount: 510,
    badge: "popular",
    tip: "Stroll in the late afternoon just before sunset when the wind softens and the bay water mirrors pastel sky tones.",
    tips: [
      "Carry a light windbreaker as ocean breezes pick up after dusk.",
      "Stop at one of the seaside cafés across the avenue for traditional Moroccan mint tea."
    ],
    highlights: [
      "Wide, step-free pedestrian walkway right along the bay water",
      "Prime viewing point for flamingos and migratory shorebirds during low tide"
    ],
    emotionalBenefits: ["Calm", "Grounded", "Breezy"],
    bestTimeToVisit: "Sunset and early evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Public promenade; completely free of charge.",
    includedServices: ["Public promenade access", "Benches and viewpoints"],
    excludedServices: ["Food and beverage services"],
    hiddenCostsInfo: "No hidden costs; optional tea or snacks at nearby kiosks cost 10-25 MAD.",
    address: "Boulevard de la Corniche, Corniche Oued Ed-Dahab, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7160, lng: -15.9285 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Corniche",
    parkingInfo: "Abundant free street parking alongside Boulevard de la Corniche.",
    publicTransportInfo: "Easily walkable on foot from downtown hotels and Place Hassan II.",
    dressCode: "Casual modest attire suited for seaside walking.",
    equipmentNeeded: ["Comfortable walking shoes", "Light jacket or sweater"],
    fitnessLevel: "Relaxed (Completely flat paved promenade)",
    ageRestrictions: "Suitable for all ages and strollers.",
    safetyNotes: "Very safe and family-friendly; well-lit during evening hours.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "The best spot in town to watch the lights shimmer over the bay after sunset.",
        author: "Karim B.",
        type: "Evening Walker",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Place Hassan II", type: "visit", distanceKm: 0.4 },
      { name: "Dakhla Old Town", type: "visit", distanceKm: 0.6 }
    ],
    storyTitle: "Balcony on the Rio de Oro",
    history: "Developed as part of Dakhla's modern urban waterfront regeneration, the corniche turned what was once a desolate tidal shoreline into the central civic leisure strip of the city.",
    culturalImportance: "The corniche acts as Dakhla's community living room, where Sahrawi families, visitors, and expatriates mingle during the cherished evening stroll.",
    localLegend: "Locals say breathing the evening bay air after a desert sandstorm resets your mind and clears your thoughts.",
    funFact: "On exceptionally clear mornings, you can spot the distant sandy shores of the mainland peninsula across the bay.",
    faq: [
      { q: "Is the corniche wheelchair accessible?", a: "Yes, the promenade is flat with step-free dropped curbs throughout." },
      { q: "Are there restrooms available?", a: "Public restrooms are scarce; most visitors use adjacent beachfront cafés." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-marche-municipal-el-massira",
    city: "dakhla",
    name: "Marché Municipal El Massira",
    neighborhood: "Al Massira",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "foodie", "sensory-seeker"],
    vibeTags: ["chaotic", "sensory", "vibrant", "authentic"],
    tags: ["authentic", "foodie", "local-life", "market", "morning", "shopping", "walk-in"],
    badges: ["market-experience", "cultural-immersion", "foodie-paradise", "budget-friendly"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "07:30 AM - 02:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:30", close: "14:00" },
      { dayOfWeek: 1, open: "07:30", close: "14:00" },
      { dayOfWeek: 2, open: "07:30", close: "14:00" },
      { dayOfWeek: 3, open: "07:30", close: "14:00" },
      { dayOfWeek: 4, open: "07:30", close: "14:00" },
      { dayOfWeek: 5, open: "07:30", close: "14:00" },
      { dayOfWeek: 6, open: "07:30", close: "14:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "public_toilets_nearby", "street_parking"],
    restrictions: ["Always ask permission before photographing market stallholders"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Marché Couvert Municipal El Massira is Dakhla's primary municipal market hall, serving as the daily pantry of the peninsula. Sheltered indoors, the market features stalls piled high with fresh Atlantic catches (sea bass, courbine, octopus), camel meat, dates from southern oases, spices, olives, and colorful desert fabrics.",
    shortValueProp: "The vibrant heart of Dakhla's daily food trade and regional produce.",
    images: [],
    googleRating: 4.1,
    reviewCount: 320,
    googleReviewCount: 320,
    badge: "top-pick",
    tip: "Visit around 9:00 AM when the morning's fresh fish arrives from the port and the spice vendors are fully set up.",
    tips: [
      "Bring small denomination cash bills; merchants cannot make change for 200 MAD notes easily.",
      "Check out the olive and pickled lemon stalls near the back corner for exceptional regional varieties."
    ],
    highlights: [
      "Lively fish hall displaying king-sized croaker (courbine) and fresh octopus",
      "Authentic stalls selling Sahrawi desert tea blends, dates, and fragrant incense"
    ],
    emotionalBenefits: ["Authentic", "Curious", "Grounded"],
    bestTimeToVisit: "Morning between 8:30 AM and 11:00 AM",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Entry", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public access; groceries and spices priced per weight.",
    includedServices: ["Self-guided indoor market browsing"],
    excludedServices: ["Guided tours", "Porterage"],
    hiddenCostsInfo: "Spices and teas cost 20-50 MAD per sachet.",
    address: "Marché Couvert El Massira, Avenue Al Massira, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7198, lng: -15.9380 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marche+Municipal+El+Massira+Dakhla",
    parkingInfo: "Street parking on surrounding streets around the market complex.",
    publicTransportInfo: "Short 10 MAD petit taxi ride from anywhere in central Dakhla.",
    dressCode: "Respectful everyday attire covering shoulders and knees.",
    equipmentNeeded: ["Cash in MAD", "Reusable tote bag"],
    fitnessLevel: "Relaxed (Short indoor walk through narrow aisles)",
    ageRestrictions: "Suitable for all ages; floor can be damp near fish stalls.",
    safetyNotes: "Keep wallet and personal belongings in front pockets as aisles can get crowded.",
    languages: ["Arabic (Darija)", "French", "Hassaniya"],
    visitorQuotes: [
      {
        quote: "Real local life away from the kite camps; the fishmongers are friendly and proud of their daily catch.",
        author: "Sarah W.",
        type: "Cultural Traveler",
        rating: 4,
      }
    ],
    nearbyCombos: [
      { name: "Ensemble Artisanal de Dakhla", type: "shop", distanceKm: 0.6 },
      { name: "Dakhla Old Town", type: "visit", distanceKm: 0.7 }
    ],
    storyTitle: "Pantry of the Southern Ocean",
    history: "Built following Morocco's administrative recovery of the province in 1979, Marché El Massira was designed to centralize municipal food provisioning and anchor the growing civic quarters of the expanding city.",
    culturalImportance: "The market bridges Sahrawi nomadic dietary traditions (camel meat, dates, concentrated tea herbs) with deep-ocean Atlantic marine bounty.",
    localLegend: "Elders claim that true Sahrawi tea tastes best when brewed with rock sugar bought specifically from the southern market traders.",
    funFact: "Courbine (meagre), the prized giant fish of Dakhla Bay, can weigh over 30 kilograms and is cut into steaks directly in front of buyers.",
    faq: [
      { q: "Is the market open in the afternoon?", a: "Most stalls wind down by 2:00 PM; morning is the best time to visit." },
      { q: "Can I pay with credit card?", a: "No, the market operates strictly on cash in Moroccan Dirhams." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-fishing-port",
    city: "dakhla",
    name: "Dakhla Fishing Port (Port Dakhla-Ville)",
    neighborhood: "Port de Dakhla",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "sensory-seeker"],
    vibeTags: ["sensory", "energetic", "authentic"],
    tags: ["atlantic", "authentic", "coastal", "foodie", "local-life", "morning", "walk-in", "working-port"],
    badges: ["cultural-immersion", "historic-landmark"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: false,
    },
    openingHours: "07:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:00", close: "17:00" },
      { dayOfWeek: 1, open: "07:00", close: "17:00" },
      { dayOfWeek: 2, open: "07:00", close: "17:00" },
      { dayOfWeek: 3, open: "07:00", close: "17:00" },
      { dayOfWeek: 4, open: "07:00", close: "17:00" },
      { dayOfWeek: 5, open: "07:00", close: "17:00" },
      { dayOfWeek: 6, open: "07:00", close: "17:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "historical_documentation"],
    restrictions: ["Operational port perimeter; obey safety signs and do not obstruct moving machinery"],
    healthContraindications: ["Strong maritime odors; may affect sensitive stomachs"],
    // ── 3. UI ──
    description: "The historic city port of Dakhla is the maritime economic powerhouse of the southern provinces. From early dawn, hundreds of wooden artisanal longline boats and coastal trawlers return with massive hauls of sardine, cephalopods (octopus and squid), and prized white fish, creating a vibrant, raw spectacle of traditional seafaring life.",
    shortValueProp: "Witness the raw maritime engine that drives Dakhla's renowned fishing industry.",
    images: [],
    googleRating: 4.2,
    reviewCount: 180,
    googleReviewCount: 180,
    badge: "hidden-gem",
    tip: "Visit between 8:00 AM and 10:00 AM to see longliners unloading wooden crates of fish on the quay.",
    tips: [
      "Wear sturdy closed-toe shoes with good grip; quay cobblestones and concrete can be slippery from seawater.",
      "Security checkpoints may restrict access to heavy commercial cargo wharves, but the public artisanal basin is easily observed."
    ],
    highlights: [
      "Fleet of traditional brightly painted wooden coastal fishing boats",
      "Vibrant activity of net mending, ice hauling, and dockside fish sorting"
    ],
    emotionalBenefits: ["Grounded", "Sensory", "Authentic"],
    bestTimeToVisit: "Morning between 7:30 AM and 10:30 AM",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Observation", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Public working port; access to perimeter viewpoints is free.",
    includedServices: ["Self-guided harbor viewing from public perimeter"],
    excludedServices: ["Access to industrial trawler wharves", "Boat boarding"],
    hiddenCostsInfo: "None.",
    address: "Port de Pêche de Dakhla, Port de Dakhla, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7025, lng: -15.9360 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Fishing+Port",
    parkingInfo: "Parking available outside the port security entrance.",
    publicTransportInfo: "Short petit taxi ride (approx. 10-15 MAD) from downtown Dakhla.",
    dressCode: "Practical casual clothing; avoid long dragging garments and open sandals.",
    equipmentNeeded: ["Closed sturdy shoes", "Camera"],
    fitnessLevel: "Relaxed (Short strolls along dockside paved areas)",
    ageRestrictions: "Not recommended for unsupervised young children due to heavy machinery.",
    safetyNotes: "Stay well clear of forklift trucks, crane arms, and slick quayside drop-offs.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "A gritty, honest reminder that Dakhla is first and foremost a great Atlantic fishing town.",
        author: "Mathieu P.",
        type: "Documentary Traveler",
        rating: 4,
      }
    ],
    nearbyCombos: [
      { name: "Corniche Oued Ed-Dahab", type: "visit", distanceKm: 1.5 },
      { name: "Marché Municipal El Massira", type: "visit", distanceKm: 2.1 }
    ],
    storyTitle: "Capital of the Cold Current",
    history: "Established during Spanish colonial administration and substantially modernized after 1979, Port de Dakhla capitalizes on the nutrient-dense Canary Current, transforming the region into Morocco's foremost octopus and pelagic fishing harbor.",
    culturalImportance: "Fishing provides livelihoods for thousands of families in Dakhla and defines the identity of both native Sahrawi seafarers and fishermen from northern Morocco.",
    localLegend: "Fishermen say a flock of gannets circling low over the harbor mouth heralds a bountiful night of sardines.",
    funFact: "Dakhla's waters host one of the most prolific octopus fisheries in the Atlantic, celebrated in Mediterranean cuisine worldwide.",
    faq: [
      { q: "Can tourists enter the port?", a: "Public observation of the artisanal fishing basin is permitted; commercial container docks require security clearance." },
      { q: "Can I buy fish directly from fishermen?", a: "Wholesale transactions happen at the fish auction hall, but small retail purchases can sometimes be made directly from dockside fishermen." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-old-town-cathedral",
    city: "dakhla",
    name: "Dakhla Colonial Quarter & Church of Our Lady of Mount Carmel",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver", "first-timer", "nomad"],
    vibeTags: ["historical", "architectural", "nostalgic", "peaceful"],
    tags: ["architectural", "authentic", "cultural-tour", "historical", "photography", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["historic-landmark", "architectural-gem", "peaceful-escape"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access", "wide_flat_walkways", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (street district); church hours vary according to weekly mass",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "19:00" },
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "shaded_benches", "street_parking"],
    restrictions: ["Church interior access is reserved for religious services and caretaker opening hours"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Stroll the compact street grid of Dakhla's colonial core, where pastel-toned Spanish architecture, quiet plazas, and traditional Sahrawi cafés recall the town's history as Villa Cisneros. The centerpiece is the Church of Our Lady of Mount Carmel (Nuestra Señora del Carmen), a modernist Catholic church built in 1946 by Spanish engineers.",
    shortValueProp: "A peaceful walking circuit through Spanish-era colonial history in central Dakhla.",
    images: [],
    googleRating: 4.2,
    reviewCount: 330,
    googleReviewCount: 210,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 120,
    badge: "historical",
    tip: "Sit at an open-air café on the corner near Place Hassan II for a glass of sweet Sahrawi green tea with foam.",
    tips: [
      "The church's interior is regularly open during Sunday morning services (around 11:00 AM).",
      "Look for the distinct Spanish modernist barrel-vaulted roof and clean functionalist facade."
    ],
    highlights: [
      "Church of Our Lady of Mount Carmel, built in 1946 during the Spanish protectorate",
      "Colonial low-rise arcades and pastel-painted street facades along Rue Tiris"
    ],
    emotionalBenefits: ["Peaceful", "Grounded", "Curious"],
    bestTimeToVisit: "Late morning or early evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Self-Guided Walk", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Completely free self-guided public walk.",
    includedServices: ["Public neighborhood access", "Exterior church viewing"],
    excludedServices: ["Guided tour services"],
    hiddenCostsInfo: "Local tea and pastries at sidewalk cafés cost 10-25 MAD.",
    address: "Rue Tiris, Centre-Ville, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7145, lng: -15.9345 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Old+Town+Cathedral+Dakhla+Morocco",
    parkingInfo: "Street parking available throughout the surrounding grid streets.",
    publicTransportInfo: "Located directly in downtown Dakhla; easily reached on foot from central accommodations.",
    dressCode: "Modest casual attire respectful of local community norms.",
    equipmentNeeded: ["Comfortable walking shoes", "Sun hat"],
    fitnessLevel: "Relaxed (Flat streets, shaded cafés)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Very safe and well-patrolled; always ask permission before taking portrait photos of locals.",
    languages: ["Arabic (Darija)", "Spanish", "French", "Hassaniya"],
    visitorQuotes: [
      {
        quote: "The old colonial core gives Dakhla unexpected historical character beyond its kitesurf identity.",
        author: "Marie C.",
        type: "Cultural Travel",
        rating: 4,
      }
    ],
    nearbyCombos: [
      { name: "Place Hassan II", type: "visit", distanceKm: 0.2 },
      { name: "Ensemble Artisanal de Dakhla", type: "shop", distanceKm: 0.4 }
    ],
    storyTitle: "Echoes of Villa Cisneros",
    history: "Villa Cisneros was founded in December 1884 by the Spanish naturalist Emilio Bonelli as a maritime trading post on the peninsula. The Church of Our Lady of Mount Carmel was constructed in 1946. Following the tripartite agreement, the area was administered by Mauritania from 1976 until August 1979, when Morocco formally integrated the province of Oued Ed-Dahab into the Kingdom.",
    culturalImportance: "The surviving Spanish architecture and Sahrawi street life illustrate Dakhla's unique historical transition from a military outpost into a modern Moroccan coastal city.",
    localLegend: "Residents recall that local community protests in 2004 successfully preserved the historic Catholic church from planned municipal demolition.",
    funFact: "While commonly referred to by visitors as a 'cathedral', the building is canonically a parish church under the Roman Catholic Apostolic Prefecture of Western Sahara, whose cathedral sits in Laâyoune.",
    faq: [
      { q: "Is the church open to non-Catholics?", a: "Yes, visitors are welcomed respectfully during open hours and Sunday mass." },
      { q: "Does Dakhla have a traditional medieval medina?", a: "No, Dakhla was founded in 1884 as a colonial settlement, so its oldest core consists of early 20th-century Spanish-era blocks." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-complexe-artisanal",
    city: "dakhla",
    name: "Ensemble Artisanal de Dakhla",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "art-and-culture", "history-weaver"],
    vibeTags: ["artistic", "intricate", "authentic", "peaceful"],
    tags: ["authentic", "cultural-tour", "culture", "local-life", "shopping", "step-free", "walk-in", "workshop"],
    badges: ["artisan-village", "cultural-immersion", "shopping-hub"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground", "step_free_access", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 07:00 PM (Monday to Saturday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "19:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "restrooms", "gift_shop", "street_parking"],
    restrictions: ["Closed on Sundays"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "The Complexe Artisanal de Dakhla is the official government-sponsored handicraft center showcasing the craftsmanship of the Oued Ed-Dahab region. Spanning 26 dedicated workshops, it provides a direct window into master Sahrawi artisans hand-engraving silver jewelry, tooling camel leather cushions, tailoring traditional Melhfa tunics, and assembling desert tea wares at certified fixed prices.",
    shortValueProp: "Watch master Sahrawi silversmiths and leather artisans create traditional desert crafts.",
    images: [],
    googleRating: 4.3,
    reviewCount: 95,
    googleReviewCount: 95,
    badge: "top-pick",
    tip: "Look for the silversmith workshops in the morning when master jewelers hammer and chisel authentic Sahrawi filigree rings and silver khol vials.",
    tips: [
      "Prices are fixed and verified by the artisan guild, making it a stress-free alternative to haggling.",
      "Custom leather engravings and tailored garments can be ordered with a few days' advance notice."
    ],
    highlights: [
      "Active silver jewelry ateliers producing Sahrawi fibulae, rings, and talismans",
      "Hand-tooled camel leather cushions (ousada) and traditional nomadic leather goods"
    ],
    emotionalBenefits: ["Curious", "Authentic", "Peaceful"],
    bestTimeToVisit: "Morning or mid-afternoon on weekdays",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Admission", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free entry for all visitors; craft purchases paid directly to individual artisan workshops.",
    includedServices: ["Self-guided workshop walkthrough", "Direct artisan interaction"],
    excludedServices: ["Shipping services"],
    hiddenCostsInfo: "Handcrafted silver jewelry ranges from 150 to 900 MAD depending on weight and silver purity.",
    address: "Boulevard Mohammed V / Avenue Abdelkhalek Torres, Centre-Ville, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7185, lng: -15.9350 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Complexe+Artisanal+Dakhla",
    parkingInfo: "Street parking available along Avenue Abdelkhalek Torres.",
    publicTransportInfo: "Easily walkable from central Dakhla; 5 minutes on foot from Boulevard Mohammed V.",
    dressCode: "Casual modest attire.",
    equipmentNeeded: ["Cash in MAD"],
    fitnessLevel: "Relaxed (Level ground, single-floor indoor corridors)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Watch children around silver-soldering torches and leather-cutting blades.",
    languages: ["Arabic (Darija)", "French", "Hassaniya"],
    visitorQuotes: [
      {
        quote: "You see the real heritage of the Sahara being crafted right before your eyes, with zero high-pressure sales.",
        author: "Sophie M.",
        type: "Craft Enthusiast",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Marché Municipal El Massira", type: "visit", distanceKm: 0.6 },
      { name: "Place Hassan II", type: "visit", distanceKm: 0.5 }
    ],
    storyTitle: "Hands of the Sahara",
    history: "Constructed under the Regional Craft Development Plan (PDRA) in partnership with the Southern Provinces Development Agency, the complex was established to protect and pass down nomadic Sahrawi craft traditions to new generations.",
    culturalImportance: "The complex serves as a vital sanctuary for Sahrawi material culture, preserving ancient jewelry motifs and leatherworking techniques that nomads once carried across the Sahara.",
    localLegend: "Sahrawi artisans say each engraved silver geometric knot serves as a protective symbol, wishing safe desert travels to the wearer.",
    funFact: "Traditional Sahrawi silver jewelry is often alloyed with trace copper to give it the durability needed to withstand rugged nomad life.",
    faq: [
      { q: "Can I buy directly from the artisans?", a: "Yes, you purchase directly from the craftsmen in their individual workshops." },
      { q: "Are credit cards accepted?", a: "Some individual artisans accept cards, but cash in MAD is strongly recommended." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-petit-musee-saharien",
    city: "dakhla",
    name: "Le Petit Musée du Maroc Saharien",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver", "art-and-culture", "quiet-mystic"],
    vibeTags: ["historical", "spiritual", "solemn", "peaceful"],
    tags: ["authentic", "cultural-tour", "culture", "historical", "modern", "photo-spot", "self-guided", "urban", "walk-in"],
    badges: ["cultural-immersion", "educational", "hidden-gem", "historic-memorial"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:00 PM (Monday to Friday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "information_desk", "restrooms", "shaded_benches"],
    restrictions: ["Closed on Saturdays, Sundays, and national holidays"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Located within the Médiathèque de Dakhla on Boulevard Alwalaa, Le Petit Musée du Maroc Saharien is the premier cultural repository of Hassani heritage in the region. The museum exhibits prehistoric rock carvings and fossils from the 'Green Sahara' era, nomadic tent lifestyle displays (khaima), antique manuscripts, desert survival tools, and historic archives of the Aéropostale airmail route.",
    shortValueProp: "A museum tracing Sahrawi nomad culture and prehistoric desert archaeology.",
    images: [],
    googleRating: 4.4,
    reviewCount: 45,
    googleReviewCount: 45,
    badge: "hidden-gem",
    tip: "Take time to study the Aéropostale section, which details when famous French aviator Antoine de Saint-Exupéry landed his biplane in Villa Cisneros.",
    tips: [
      "Combine your museum tour with a quiet look at the adjacent regional library and media collection.",
      "Explanatory panels are presented in French and Arabic; ask staff for additional historical details."
    ],
    highlights: [
      "Full-scale traditional nomadic wool tent (khaima) furnished with historic desert utensils",
      "Archaeological artifacts including prehistoric grindstones, arrowheads, and fossilized flora"
    ],
    emotionalBenefits: ["Educational", "Curious", "Grounded"],
    bestTimeToVisit: "Weekday mornings",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Educational Admission", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free admission for students, tourists, and researchers.",
    includedServices: ["Access to permanent collection", "Bilingual exhibition guide panels"],
    excludedServices: ["Audio guides"],
    hiddenCostsInfo: "None.",
    address: "Médiathèque de Dakhla, Boulevard Alwalaa, Centre-Ville, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7170, lng: -15.9320 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mediatheque+de+Dakhla",
    parkingInfo: "Street parking available directly along Boulevard Alwalaa.",
    publicTransportInfo: "Centrally located downtown; walking distance from Place Hassan II.",
    dressCode: "Casual respectful attire suited for a cultural library and museum.",
    equipmentNeeded: ["Notebook or camera (without flash)"],
    fitnessLevel: "Relaxed (Single-level air-conditioned exhibition space)",
    ageRestrictions: "Suitable and educational for all ages.",
    safetyNotes: "Do not touch antique manuscripts or delicate wool textiles.",
    languages: ["Arabic (Darija)", "French", "Hassaniya"],
    visitorQuotes: [
      {
        quote: "An eye-opening museum that explains the deep nomadic roots and history of the Sahara that most tourists miss.",
        author: "Nadia T.",
        type: "Heritage Traveler",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Place Hassan II", type: "visit", distanceKm: 0.2 },
      { name: "Corniche Oued Ed-Dahab", type: "visit", distanceKm: 0.3 }
    ],
    storyTitle: "Memory of the Sands",
    history: "Inaugurated in 2011 to celebrate and safeguard the Hassani culture of Morocco's southern provinces, the museum documents the transition of Sahrawi nomadic tribes from antiquity to modern civic society.",
    culturalImportance: "The museum fulfills a vital educational role for schools, university scholars, and international travelers seeking to understand Hassani traditions, spoken dialects, and desert adaptations.",
    localLegend: "Sahrawi desert lore holds that the ancient prehistoric 'Green Sahara' will one day bloom again with lakes and acacia groves.",
    funFact: "During the 1920s, pioneering Aéropostale pilots—including Antoine de Saint-Exupéry and Jean Mermoz—frequently stopped at Dakhla's colonial airstrip during harrowing mail flights between Toulouse and Dakar.",
    faq: [
      { q: "Is admission really free?", a: "Yes, access to the museum and the Médiathèque is completely free of charge." },
      { q: "Is flash photography permitted?", a: "No, photography is allowed but flashes must be disabled to protect antique textiles." }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-place-hassan-ii",
    city: "dakhla",
    name: "Place Hassan II",
    neighborhood: "Boulevard Mohammed V",
    // ── 1. QUIZ ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "nomad", "social-collector"],
    vibeTags: ["vibrant", "energetic", "scenic", "iconic"],
    tags: ["authentic", "coastal", "festival", "iconic-landmark", "local-life", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["cultural-icon", "must-see", "family-friendly", "sunset-spot"],
    // ── 2. FILTER ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
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
    accessibilityFeatures: ["flat_ground", "step_free_access", "wide_flat_walkways", "flat_courtyard"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" },
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["fountains", "perimeter_benches", "street_parking", "panoramic_viewpoint", "walking_paths"],
    restrictions: ["Open public pedestrian plaza"],
    healthContraindications: ["not available"],
    // ── 3. UI ──
    description: "Place Hassan II is the vibrant civic epicenter of Dakhla, situated where Boulevard Mohammed V opens toward the sparkling bay. Redesigned with palm-lined walkways, illuminated water fountains, and open seating, this broad plaza serves as the city's premier public gathering space for evening walks, cultural festivals, and community celebrations.",
    shortValueProp: "The lively public square and civic beating heart of downtown Dakhla.",
    images: [],
    googleRating: 4.3,
    reviewCount: 380,
    googleReviewCount: 380,
    badge: "essential",
    tip: "Visit between 6:30 PM and 9:00 PM when local families gather, fountain lights turn on, and the square fills with vibrant social energy.",
    tips: [
      "Grab a fresh orange juice or mint tea at one of the sidewalk cafés flanking the boulevard.",
      "The square offers direct pedestrian access right down to the Corniche Oued Ed-Dahab waterfront."
    ],
    highlights: [
      "Spacious palm-shaded civic esplanade facing the ocean bay",
      "Central venue for national celebrations, live music stages, and cultural festivals"
    ],
    emotionalBenefits: ["Connected", "Vibrant", "Relaxed"],
    bestTimeToVisit: "Sunset and evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open public square; free of charge.",
    includedServices: ["Public plaza access", "Bench seating and viewpoint promenade"],
    excludedServices: ["Food and beverage services"],
    hiddenCostsInfo: "None.",
    address: "Place Hassan II, Boulevard Mohammed V, Centre-Ville, Dakhla 73000, Morocco",
    coordinates: { lat: 23.7155, lng: -15.9330 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Place+Hassan+II+Dakhla",
    parkingInfo: "Street parking available around the square perimeter and along Boulevard Mohammed V.",
    publicTransportInfo: "Centrally located downtown; walking distance from all major central hotels.",
    dressCode: "Casual modest attire suitable for an evening city stroll.",
    equipmentNeeded: ["Camera", "Light jacket for windy evenings"],
    fitnessLevel: "Relaxed (Completely flat paved pedestrian plaza)",
    ageRestrictions: "Suitable for all ages; very family and toddler friendly.",
    safetyNotes: "Safe, illuminated, and actively frequented by local families late into the evening.",
    languages: ["Arabic (Darija)", "French", "Hassaniya"],
    visitorQuotes: [
      {
        quote: "The square comes alive after sundown. Watching kids play and families stroll gives you a true feel for modern Dakhla.",
        author: "Yassine K.",
        type: "City Explorer",
        rating: 5,
      }
    ],
    nearbyCombos: [
      { name: "Corniche Oued Ed-Dahab", type: "visit", distanceKm: 0.2 },
      { name: "Dakhla Old Town", type: "visit", distanceKm: 0.2 }
    ],
    storyTitle: "Heart of the Peninsula",
    history: "Serving historically as the main Spanish plaza de armas during the colonial era, Place Hassan II was redeveloped into a modern maritime-facing civic square celebrating Dakhla's vibrant regional role in the Moroccan Sahara.",
    culturalImportance: "The square serves as Dakhla's political and social hub, hosting public cultural gatherings, Green March anniversary festivities, and sports fan celebrations.",
    localLegend: "Locals say anyone who stops to drink tea at sunset facing the bay on Place Hassan II is bound to return to Dakhla.",
    funFact: "During major regional festivals and soccer victories, the square transforms into an open-air celebration with traditional Sahrawi drum music and fireworks.",
    faq: [
      { q: "Are there cafés surrounding the square?", a: "Yes, numerous cafés, ice cream shops, and bakeries line the boulevard facing the plaza." },
      { q: "Is the plaza stroller and wheelchair friendly?", a: "Yes, it features wide, step-free paved surfaces with ramped curb cuts." }
    ],
  }
];