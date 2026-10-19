/**
 * =========================================================================
 * [MEKNES] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/meknes/index.ts
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
 *   (add ONLY with real verified hours — no placeholder fits this type)
 *
 * OPEN VOCABULARIES (every real value in the dataset — extend via the bible only):
 * - tags (106): '16th-century-ramparts' | 'active' | 'adobe-fortress' | 'adventure' | 'alpine-park'
 *     'ameln-valley' | 'anti-atlas' | 'anti-atlas-hiking' | 'architectural' | 'atlantic'
 *     'atlas-history' | 'authentic' | 'barbary-macaques' | 'birdwatching' | 'boat-tour'
 *     'calèche-ride' | 'camp' | 'cedar-forest' | 'climbing-adventure' | 'coastal'
 *     'combat-sports' | 'cooking-class' | 'cultural-tour' | 'culture' | 'day-pass'
 *     'day-trip' | 'desert' | 'desert-sport' | 'donkey-ride' | 'dramatic-gorges'
 *     'family' | 'festival' | 'first-timer' | 'foodie' | 'geological-wonder'
 *     'golden-hour' | 'granite-peaks' | 'guide-required' | 'gym-fitness' | 'hiking-trek'
 *     'historical' | 'horse-riding' | 'iconic-landmark' | 'instagrammable' | 'kitesurf'
 *     'lagoon' | 'land-art' | 'local-life' | 'market' | 'medina'
 *     'modern' | 'morning' | 'mountain' | 'mountain-biking' | 'mountain-lake'
 *     'napoleon-hat' | 'nature' | 'nature-walk' | 'off-the-beaten-path' | 'painted-rocks'
 *     'palm-canyon' | 'palm-oasis' | 'pedal-boating' | 'photo-spot' | 'photography'
 *     'photospot' | 'picnic-spot' | 'port-express' | 'premium' | 'private'
 *     'quad-bike' | 'relaxed' | 'relaxed-energy' | 'running-outdoor' | 'saadian-dynasty'
 *     'saadian-kasbah' | 'self-guided' | 'shopping' | 'ski-resort' | 'snow-sledding'
 *     'spring-water' | 'step-free' | 'street-food' | 'sunset' | 'sunset-view'
 *     'surf-culture' | 'surf-kitesurf' | 'surreal-landscape' | 'swimming-pool' | 'team-sports'
 *     'traditional-irrigation' | 'tripod-allowed' | 'urban' | 'volcanic-crater' | 'walk'
 *     'walk-in' | 'water-sport' | 'waterfall' | 'waterfront' | 'wellness'
 *     'wildlife-encounter' | 'wingfoil' | 'winter-sports' | 'women-only' | 'working-port'
 *     'workshop'
 * - vibeTags (23): 'architectural' | 'artistic' | 'botanical' | 'chaotic' | 'cosy' | 'elegant'
 *     'energetic' | 'geometric' | 'historical' | 'iconic' | 'intricate' | 'lush'
 *     'nostalgic' | 'ornate' | 'peaceful' | 'regal' | 'scenic' | 'sensory'
 *     'serene' | 'solemn' | 'spiritual' | 'tranquil' | 'vibrant'
 * - archetypeAffinity (23): 'adventure' | 'art-and-culture' | 'couple' | 'culture' | 'family'
 *     'first-timer' | 'foodie' | 'history' | 'history-weaver' | 'luxury'
 *     'luxury-curator' | 'modern-nomad' | 'nature' | 'nomad' | 'photographer'
 *     'photography' | 'quiet-mystic' | 'relaxation' | 'romantic' | 'seniors'
 *     'sensory-seeker' | 'social-collector' | 'wildlife'
 * - badges (array) (23): 'architectural-gem' | 'architectural-landmark' | 'artisan-village' | 'budget-friendly' | 'cultural-icon'
 *     'cultural-immersion' | 'educational' | 'family-friendly' | 'foodie-paradise' | 'green-oasis'
 *     'hidden-gem' | 'historic-landmark' | 'historic-memorial' | 'market-experience' | 'moving-experience'
 *     'must-see' | 'panoramic-view' | 'peaceful-escape' | 'photography-spot' | 'quiet-retreat'
 *     'shopping-hub' | 'spiritual-hub' | 'sunset-spot'
 * - badge (single string) (6): 'architectural-gem' | 'essential' | 'hidden-gem' | 'historical' | 'popular' | 'top-pick'
 * - transportModes (5): 'bus' | 'cable-car' | 'drive' | 'taxi' | 'walk'
 * - paymentMethods (2): 'cash_mad' | 'credit_card'
 * - accessibilityFeatures (17): 'cobblestone_paths' | 'flat_courtyard' | 'flat_ground' | 'flat_walkways'
 *     'ground_floor_access' | 'level_entry_doorway' | 'partial_wheelchair_access' | 'perimeter_ramps'
 *     'shaded_benches' | 'some_steps' | 'steep_exterior_approach' | 'step_free_access'
 *     'step_free_exterior_view' | 'step_free_interior_boardwalk' | 'step_free_paved_paths' | 'wide_flat_walkways'
 *     'wide_main_corridors'
 * - amenities (29): 'ablution_facilities_worshippers' | 'artisan_workshops' | 'atm_nearby' | 'audioguide_service'
 *     'cafe' | 'children_playground' | 'exhibition_hall' | 'food_stalls'
 *     'fountains' | 'fresh_juice_bars' | 'garden_seating_access' | 'gift_shop'
 *     'historical_documentation' | 'information_desk' | 'mosque_prayer_room' | 'panoramic_viewpoint'
 *     'parking' | 'parking_perimeter' | 'perimeter_benches' | 'public_toilets_nearby'
 *     'restrooms' | 'shaded_benches' | 'shaded_courtyards' | 'street_parking'
 *     'ticket_booth' | 'traditional_fountains' | 'traditional_restaurant' | 'walking_paths'
 *     'wooden_boardwalk'
 *
 * FREE-TEXT FIELDS (write clear, factual, source-verified strings):
 * - fitnessLevel:     starts with 'Relaxed' | 'Moderate' | 'Active' | 'Intense' + short detail
 * - openingHours:     human-readable, e.g. '10:00 AM - 07:00 PM (Daily)'
 * - sentence arrays:  restrictions, healthContraindications, tips, excludedServices,
 *                     highlights, emotionalBenefits, includedServices, equipmentNeeded,
 *                     languages, dressCode, ageRestrictions, safetyNotes
 *
 * LISTING SECTIONS (field grouping used in this file):
 *   CORE:       id, city, name, neighborhood, cluster
 *   1. QUIZ:    lifestyle, groupTypes, crowdLevel, energyLevel, timeOfDay,
 *               archetypeAffinity, vibeTags, tags, badges, isHiddenGem
 *   2. FILTER:  price, pricePerPerson, entryPrice, durationMinutes, distanceFromCenterKm,
 *               transportMode, transportModes, safetyLevel, bookingRequired, walkInOkay,
 *               hasLocalGuide, hasEnglishGuide, hasFrenchGuide, isKidFriendly,
 *               isFemaleFriendly, isWheelchairAccessible, accessibilityFeatures,
 *               isPhotographyFriendly, hasPrivateOption, hasSunsetView, avoidAnimals,
 *               hasIndoorRest, hasWiFi, hasAC, nearMedina, nearBeach, goodForRain,
 *               friction, openingHours, openingHoursStructured, paymentMethods, amenities,
 *               restrictions, healthContraindications, facilityType, experienceType,
 *               sportIntent, hasDayPass, hasWomenOnlyHours, hasGroupClasses, hasFullWeights,
 *               distanceFromUser, skillLevel, duration, equipmentIncluded, instructorAvailable
 *   3. UI:      description, shortValueProp, images, nonCopyrightImage, googlePlaceId,
 *               youtubeVideoId, googleRating, reviewCount, googleReviewCount,
 *               tripadvisorRating/ReviewCount, viatorRating/ReviewCount,
 *               getyourguideRating/ReviewCount, badge, tip, tips, highlights,
 *               emotionalBenefits, bestTimeToVisit, typicalWaitTimeMinutes, seasonality,
 *               ticketTypes, discountsInfo, includedServices, excludedServices,
 *               hiddenCostsInfo, address, coordinates, googleMapsUrl, parkingInfo,
 *               publicTransportInfo, dressCode, equipmentNeeded, fitnessLevel,
 *               ageRestrictions, safetyNotes, languages, visitorQuotes, nearbyCombos,
 *               storyTitle, history, culturalImportance, localLegend, funFact,
 *               seasonalInfo, officialWebsite, ticketWebsite, faq, contactPhone
 *
 * BLANK COPY-PASTE TEMPLATE FOR NEW LISTINGS:
 * {
 *   // ── CORE IDENTITY ──
 *   id: "[city]-[slug]",
 *   city: "[city]",
 *   name: "",
 *   neighborhood: "",
 *   // ── 1. QUIZ ──
 *   lifestyle: ["balanced"],
 *   groupTypes: ["solo", "couple", "family", "friends"],
 *   crowdLevel: "balanced",
 *   energyLevel: "moderate",
 *   archetypeAffinity: ["first-timer"],
 *   vibeTags: ["authentic"],
 *   tags: ["cultural-tour"],
 *   badges: ["must-see"],
 *   // ── 2. FILTER ──
 *   price: 0, pricePerPerson: 0, entryPrice: 0,
 *   durationMinutes: 90,
 *   distanceFromCenterKm: 1.0,
 *   transportMode: "walkable",
 *   transportModes: ["walk"],
 *   safetyLevel: 5,
 *   walkInOkay: true,
 *   hasEnglishGuide: false,
 *   hasFrenchGuide: false,
 *   isKidFriendly: true,
 *   isFemaleFriendly: true,
 *   isWheelchairAccessible: false,
 *   accessibilityFeatures: ["not available"],
 *   hasPrivateOption: false,
 *   hasSunsetView: false,
 *   nearMedina: false,
 *   goodForRain: false,
 *   friction: { walkingFatigue: 2, heatExposure: 2, touristCrowd: 3, noiseLevel: 2, scamRisk: 1, physicalIntensity: 2, kidSuitable: true },
 *   openingHours: "10:00 AM - 07:00 PM (Daily)",
 *   openingHoursStructured: [{ dayOfWeek: 0, open: "10:00", close: "19:00" }],
 *   paymentMethods: ["not available"],
 *   amenities: ["not available"],
 *   restrictions: ["not available"],
 *   healthContraindications: ["not available"],
 *   // ── 3. UI ──
 *   description: "",
 *   shortValueProp: "",
 *   images: [],
 *   googleRating: 4.5,
 *   reviewCount: 0,
 *   badge: "popular",
 *   tip: "",
 *   tips: ["not available"],
 *   highlights: ["", ""],
 *   emotionalBenefits: ["", ""],
 *   ticketTypes: [{ name: "General Entry", price: 20, currency: "MAD" }],
 *   includedServices: [""],
 *   excludedServices: ["not available"],
 *   address: "",
 *   coordinates: { lat: 0, lng: 0 },
 *   googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=",
 * }
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const meknesHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-bab-mansour",
    city: "meknes",
    name: "Bab Mansour",
    neighborhood: "Place El Hedim",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "instagrammable", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The city's most famous ceremonial gate is covered in elegant tilework and anchors Meknes's imperial core.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 3680,
    tip: "Photograph it from the square in late afternoon for the warmest colors.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bab+Mansour%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-place-el-hedim",
    city: "meknes",
    name: "Place El Hedim",
    neighborhood: "Place El Hedim",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["authentic", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 90,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Meknes's main square is ideal for people-watching, orange juice, and easy access to nearby monuments.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 4966,
    tip: "Come twice if you can: once by day and again after dusk.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Place+El+Hedim%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-mausoleum-of-moulay-ismail",
    city: "meknes",
    name: "Mausoleum of Moulay Ismail",
    neighborhood: "Imperial City",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["cultural-tour", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "One of the few Moroccan shrines open to non-Muslims, with peaceful courtyards and fine stucco work.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 5377,
    tip: "Dress modestly and keep your pace slow; it is still a living religious place.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mausoleum+of+Moulay+Ismail%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-dar-jamai-museum",
    city: "meknes",
    name: "Dar Jamai Museum",
    neighborhood: "Place El Hedim",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["cultural-tour", "private", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A former palace turned museum with regional crafts, woodwork, and a lovely Andalusian garden.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1483,
    tip: "Look for the carved wood ceilings before heading into the garden.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dar+Jamai+Museum%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-bou-inania-medersa",
    city: "meknes",
    name: "Bou Inania Medersa",
    neighborhood: "Old Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["cultural-tour", "instagrammable", "medina", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 75,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A smaller but beautifully detailed madrasa with carved plaster, cedar, and zellige.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 659,
    tip: "The detail is easy to miss; pause in the courtyard before climbing stairs.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bou+Inania+Medersa%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-heri-es-souani",
    city: "meknes",
    name: "Heri es-Souani",
    neighborhood: "Imperial Granaries",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "instagrammable", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 75,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The vaulted granaries and stables vividly show the scale of Moulay Ismail's imperial ambition.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 3820,
    tip: "Best paired with Sahrij Swani and the Royal Stables in one loop.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Heri+es-Souani%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-royal-stables",
    city: "meknes",
    name: "Royal Stables",
    neighborhood: "Imperial Granaries",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["cultural-tour", "instagrammable", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 75,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "These vast stone halls and arches are among Meknes's best spaces for dramatic architecture photos.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 567,
    tip: "Visit in cooler hours because the site is exposed.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Stables%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-qara-prison",
    city: "meknes",
    name: "Qara Prison",
    neighborhood: "Imperial City",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure"],
    tags: ["cultural-tour", "off-the-beaten-path", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "This storied underground space adds intrigue and local legend to a Meknes heritage day.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 1938,
    tip: "A local guide can help separate history from legend here.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Qara+Prison%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-meknes-medina-souk-walk",
    city: "meknes",
    name: "Meknes Medina Souk Walk",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "medina", "private", "shopping", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Less hectic than Fez, Meknes's medina is a strong place for pottery, spices, and daily-life street scenes.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 5019,
    tip: "Aim for morning if you prefer cooler temperatures and active workshops.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Meknes+Medina+Souk+Walk%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-bab-el-khemis",
    city: "meknes",
    name: "Bab el-Khemis",
    neighborhood: "Northern Medina Edge",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["cultural-tour", "off-the-beaten-path", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 75,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A grand city gate that rewards travelers who like seeing imperial Meknes beyond the main square.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 189,
    tip: "Combine it with a mellah walk for a quieter half-day.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bab+el-Khemis%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-lalla-aouda-and-royal-palace-gates",
    city: "meknes",
    name: "Lalla Aouda & Royal Palace Gates",
    neighborhood: "Imperial City",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "instagrammable", "private", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The public approaches to the palace reveal Meknes's monumental scale even without entering.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1630,
    tip: "Security zones shift, so keep plans flexible and stay in public areas.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lalla+Aouda+%26+Royal+Palace+Gates%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-agdal-basin",
    city: "meknes",
    name: "Agdal Basin",
    neighborhood: "Imperial City",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "culture"],
    tags: ["nature", "off-the-beaten-path", "private", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A broad historic reservoir near the palace walls, good for a slower detour and architecture context.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 357,
    tip: "Good stop between the imperial gates and Heri es-Souani.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Agdal+Basin%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-borj-belkari-pottery-museum",
    city: "meknes",
    name: "Borj Belkari Pottery Museum",
    neighborhood: "Borj Belkari",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["cultural-tour", "private", "relaxed", "urban", "walk-in", "workshop"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 60,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A compact museum in a historic tower focusing on Meknes's long ceramic and pottery tradition.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 443,
    tip: "It makes the most sense if you plan to shop for local ceramics later.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Borj+Belkari+Pottery+Museum%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-jewish-mellah-of-meknes",
    city: "meknes",
    name: "Jewish Mellah of Meknes",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 90,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "This quieter quarter preserves another layer of the city's social and architectural history.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.2,
    reviewCount: 495,
    tip: "Go with curiosity and a map; the experience is about noticing texture and history.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jewish+Mellah+of+Meknes%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-volubilis-day-trip",
    city: "meknes",
    name: "Volubilis Day Trip",
    neighborhood: "Volubilis",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "large-groups"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "instagrammable", "nature", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 6,
    durationMinutes: 300,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Roman ruins, mosaics, and countryside views make this the classic excursion from Meknes.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 1324,
    tip: "Start early if you also want to add Moulay Idriss without rushing.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Volubilis+Day+Trip%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-moulay-idriss-zerhoun-day-trip",
    city: "meknes",
    name: "Moulay Idriss Zerhoun Day Trip",
    neighborhood: "Moulay Idriss Zerhoun",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "large-groups"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "cultural-tour", "instagrammable", "mountain", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    durationMinutes: 300,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A holy hill town of white houses and viewpoints that complements Volubilis beautifully.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 1795,
    tip: "Wear shoes with grip; the lanes climb more than they first appear.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moulay+Idriss+Zerhoun+Day+Trip%2C+meknes%2C+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "meknes-imperial-walls-carriage-ride",
    city: "meknes",
    name: "Imperial Walls Carriage Ride",
    neighborhood: "Place El Hedim",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "luxury"],
    tags: ["authentic", "cultural-tour", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 12,
    durationMinutes: 45,
    transportMode: "mixed",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A horse-drawn circuit offers a slower, scenic introduction to Meknes's monumental walls and gates.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg/1280px-Entrada_a_Meknes%2C_Marruecos._-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bab_mansour_DSCF5811.jpg/1280px-Bab_mansour_DSCF5811.jpg"
    ],
    googleRating: 4.2,
    reviewCount: 482,
    tip: "Agree on route and price before setting off from the square.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Imperial+Walls+Carriage+Ride%2C+meknes%2C+Morocco",
  }
];
