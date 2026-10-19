/**
 * =========================================================================
 * [DAKHLA] THINGS TO DO — NATURE & ADVENTURE
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

// ══ LISTINGS — NATURE & ADVENTURE ══
export const dakhlaNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-lagoon",
    city: "dakhla",
    name: "Dakhla Lagoon",
    neighborhood: "Lagoon Peninsula",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "photographer"],
    tags: ["coastal", "first-timer", "lagoon", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 120,
    transportMode: "taxi",
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The lagoon is the defining landscape of Dakhla: shallow turquoise water, constant wind, and a meeting of desert and sea that feels unlike anywhere else in Morocco. Even if you never touch a board, it is the region's essential experience.",
    shortValueProp: "The desert-meets-sea landscape that makes Dakhla unforgettable.",
    googleRating: 4.8,
    reviewCount: 1250,
    googleReviewCount: 1250,
    tip: "Do not think of it as a normal beach; the changing light, wind, and water texture are the real attraction.",
    tips: ["not available"],
    highlights: [
      "Shallow turquoise water framed by desert edges",
      "The visual and emotional core of the Dakhla experience"
    ],
    emotionalBenefits: ["Expansive", "Scenic", "Freeing"],
    bestTimeToVisit: "Morning for light activities or sunset for pure scenery",
    seasonality: "Year-round; especially popular in windy sports seasons",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Lagoon",
    publicTransportInfo: "Most visitors reach lagoon access points by taxi, hotel shuttle, or organized transfer.",
    equipmentNeeded: ["Sun protection", "Wind layer", "Camera"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Conditions can look gentle but remain windy and exposed; plan with sun and wind in mind.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-white-dune",
    city: "dakhla",
    name: "White Dune",
    neighborhood: "Lagoon South",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "first-timer"],
    tags: ["day-trip", "instagrammable", "lagoon", "nature", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 120,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The White Dune is one of Dakhla's signature natural images: a crescent of white sand rising inside the lagoon landscape. It is part viewpoint, part photo stop, and part surreal desert-water encounter.",
    shortValueProp: "Dakhla's most iconic surreal landscape.",
    googleRating: 4.7,
    reviewCount: 620,
    googleReviewCount: 620,
    tip: "Combine it with a half-day excursion instead of trying to arrange it piecemeal from the city.",
    tips: ["not available"],
    highlights: [
      "White sand formation surrounded by bright lagoon water",
      "One of the best visual payoffs in the region"
    ],
    emotionalBenefits: ["Awed", "Playful", "Scenic"],
    bestTimeToVisit: "Morning or golden hour",
    seasonality: "Year-round, weather and tide permitting",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=White+Dune+Dakhla",
    publicTransportInfo: "Usually reached by organized excursion, 4x4, or private driver.",
    equipmentNeeded: ["Sun protection", "Water", "Sand-friendly footwear"],
    fitnessLevel: "Easy to moderate",
    safetyNotes: "Wind and glare are strong; protect eyes, skin, and electronics.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-dragon-island",
    city: "dakhla",
    name: "Dragon Island (L'île Herné)",
    neighborhood: "Lagoon",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "photographer"],
    tags: ["boat-tour", "lagoon", "nature", "photography", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 150,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
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
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Dragon Island is one of Dakhla's best-known lagoon excursions, loved for its unusual shape, tidal atmosphere, and panoramic look back across the water. It captures the region's adventurous but still meditative side.",
    shortValueProp: "A classic lagoon excursion with distinct Dakhla character.",
    googleRating: 4.6,
    reviewCount: 340,
    googleReviewCount: 340,
    tip: "Ask whether the trip is tide-dependent, because timing can shape the whole experience.",
    tips: ["not available"],
    highlights: [
      "Named island excursion with broad lagoon views",
      "Strong sense of space, wind, and changing waterlines"
    ],
    emotionalBenefits: ["Freeing", "Curious", "Scenic"],
    bestTimeToVisit: "Morning or stable-weather half day",
    seasonality: "Year-round with weather considerations",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dragon+Island+Dakhla",
    publicTransportInfo: "Typically reached through excursion operators or resort arrangements.",
    equipmentNeeded: ["Wind layer", "Sun protection", "Water"],
    fitnessLevel: "Easy to moderate",
    safetyNotes: "Confirm sea conditions and tide logistics before departure.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-foum-el-bouir",
    city: "dakhla",
    name: "Foum El Bouir",
    neighborhood: "Atlantic Side",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "adventure"],
    tags: ["atlantic", "coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 90,
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Foum El Bouir is one of the easiest Atlantic-facing escapes from Dakhla and is known for stronger ocean energy than the lagoon side. It is good for walking, surf atmosphere, and feeling the peninsula's double maritime identity.",
    shortValueProp: "The simplest way to feel Dakhla's wilder Atlantic side.",
    googleRating: 4.5,
    reviewCount: 280,
    googleReviewCount: 280,
    tip: "Treat it as an ocean-side walk or surf stop rather than a swimming beach.",
    tips: ["not available"],
    highlights: [
      "Open Atlantic atmosphere beyond the lagoon resorts",
      "Good contrast to the calmer water-sports zones"
    ],
    emotionalBenefits: ["Wild", "Breezy", "Expansive"],
    bestTimeToVisit: "Late afternoon or sunset",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Foum+El+Bouir+Dakhla",
    publicTransportInfo: "Usually reached by taxi or self-drive from the city.",
    equipmentNeeded: ["Wind layer", "Camera"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Ocean conditions can be powerful; use caution near surf and edges.",
    languages: ["Arabic (Darija)", "French", "English"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-portorico-beach",
    city: "dakhla",
    name: "Portorico Beach",
    neighborhood: "South of Dakhla",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "photographer"],
    tags: ["coastal", "day-trip", "desert", "nature", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 180,
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Portorico is one of the well-known southern beach excursions from Dakhla, valued for its broad sands and strong desert-coast mood. It suits travelers who want a more remote-feeling shoreline than the city edge offers.",
    shortValueProp: "A remote-feeling beach that amplifies Dakhla's desert-coast identity.",
    googleRating: 4.6,
    reviewCount: 390,
    googleReviewCount: 390,
    tip: "This works best as part of a longer southern excursion with multiple landscape stops.",
    tips: ["not available"],
    highlights: [
      "Wide beach scenery far from city density",
      "Strong fit for photography and unhurried landscape time"
    ],
    emotionalBenefits: ["Open", "Quiet", "Scenic"],
    bestTimeToVisit: "Late morning to sunset",
    seasonality: "Best in stable weather",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Portorico+Beach+Dakhla",
    publicTransportInfo: "Usually reached via private excursion or taxi arrangement.",
    equipmentNeeded: ["Water", "Sun protection", "Snacks"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Remote-feeling routes require transport planning; do not rely on casual return transport.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-puertito-beach",
    city: "dakhla",
    name: "Puertito Beach",
    neighborhood: "Southern Coast",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["couple", "nomad"],
    tags: ["coastal", "day-trip", "desert", "nature", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 180,
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Puertito is another of the region's attractive southern beach stretches, often appreciated for its white-sand feel and excursion potential. It is best for travelers who enjoy open landscapes more than dense activity schedules.",
    shortValueProp: "A wide-open coastal excursion for travelers chasing emptier scenery.",
    googleRating: 4.5,
    reviewCount: 150,
    googleReviewCount: 150,
    tip: "Pack more water than you think you need; the open sun and wind can dehydrate you fast.",
    tips: ["not available"],
    highlights: [
      "White-sand and desert-toned shoreline mood",
      "Good companion stop to a broader southbound road trip"
    ],
    emotionalBenefits: ["Freeing", "Quiet", "Expansive"],
    bestTimeToVisit: "Late morning to afternoon",
    seasonality: "Year-round with stable weather",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Puertito+Beach+Dakhla",
    publicTransportInfo: "Best with a private driver, 4x4, or organized excursion.",
    equipmentNeeded: ["Water", "Sun protection", "Snacks"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Remote coastal conditions require good planning and respect for wind exposure.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-asmaa-hot-spring",
    city: "dakhla",
    name: "Asmaa Hot Spring",
    neighborhood: "Desert Route",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "couple"],
    tags: ["day-trip", "desert", "off-the-beaten-path", "private", "relaxed", "walk-in", "wellness"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 60,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Asmaa Hot Spring adds a wellness-and-desert dimension to Dakhla that many first-timers do not expect. It is most interesting as part of a multi-stop inland excursion.",
    shortValueProp: "A surprising desert wellness stop in a destination mostly known for wind and water.",
    googleRating: 4.2,
    reviewCount: 480,
    googleReviewCount: 480,
    tip: "Do it with the White Dune or Imlili rather than making a single-stop outing.",
    tips: ["not available"],
    highlights: ["Hot spring atmosphere in a stark landscape", "Adds variety to a lagoon-heavy trip"],
    emotionalBenefits: ["Rested", "Curious", "Grounded"],
    bestTimeToVisit: "During a daytime desert excursion",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asmaa+Hot+Spring+Dakhla",
    publicTransportInfo: "Normally reached by excursion vehicle or private driver.",
    equipmentNeeded: ["Towel", "Water", "Sandals"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Confirm conditions and hygiene setup locally before bathing.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-sebkha-imlili",
    city: "dakhla",
    name: "Sebkha Imlili",
    neighborhood: "South Desert Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "photographer"],
    tags: ["day-trip", "desert", "nature", "off-the-beaten-path", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 300,
    transportMode: "taxi",
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
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Sebkha Imlili is one of the strangest and most fascinating landscapes in the wider Dakhla region, known for its saltwater ponds embedded in desert surroundings. It feels more like a natural curiosity expedition than a normal sightseeing stop.",
    shortValueProp: "One of the region's most unusual natural experiences.",
    googleRating: 4.5,
    reviewCount: 210,
    googleReviewCount: 210,
    tip: "This is best as a guided or well-planned excursion because it is far more about context than about a single obvious monument.",
    tips: ["not available"],
    highlights: [
      "Saltwater pond ecosystem inside a desert setting",
      "A true curiosity stop for travelers who have already seen the postcard icons"
    ],
    emotionalBenefits: ["Awed", "Curious", "Remote"],
    bestTimeToVisit: "Morning start on a full excursion day",
    seasonality: "Best in stable weather",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sebkha+Imlili+Dakhla",
    publicTransportInfo: "Requires excursion planning or a committed private driver.",
    equipmentNeeded: ["Water", "Sun protection", "Snacks"],
    fitnessLevel: "Moderate",
    safetyNotes: "Remote conditions require good planning, supplies, and realistic timing.",
    languages: ["Arabic (Darija)", "French", "English"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-ocean-vagabond",
    city: "dakhla",
    name: "Ocean Vagabond Lagoon",
    neighborhood: "Lagoon Camp Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "adventure"],
    tags: ["active", "camp", "climbing-adventure", "lagoon", "sunset", "walk-in", "wellness"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    durationMinutes: 180,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Ocean Vagabond is one of the recognized names in Dakhla's active-travel scene, associated with lagoon life, water sports, and a polished camp-style atmosphere. It is a good choice for travelers who want an organized and sociable base.",
    shortValueProp: "A polished lagoon camp experience built around Dakhla's outdoor lifestyle.",
    googleRating: 4.6,
    reviewCount: 650,
    googleReviewCount: 650,
    tip: "This is a strong base if you want to mix active sessions with an easy social environment.",
    tips: ["not available"],
    highlights: ["Recognized active-travel base on the lagoon", "Combines scenery, sports, and social energy"],
    emotionalBenefits: ["Social", "Freeing", "Energized"],
    bestTimeToVisit: "Daylight and sunset",
    seasonality: "Strongest in sports seasons, but viable year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ocean+Vagabond+Lagoon+Dakhla",
    publicTransportInfo: "Access usually arranged by transfer or taxi.",
    equipmentNeeded: ["Sportswear if participating", "Wind layer"],
    fitnessLevel: "Moderate to active",
    safetyNotes: "Follow instructor advice closely for all water sessions.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-sahara-sailing",
    city: "dakhla",
    name: "Sahara Sailing Catamaran Cruise",
    neighborhood: "Lagoon",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["couple", "photographer"],
    tags: ["boat-tour", "lagoon", "premium", "private", "relaxed", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    durationMinutes: 150,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A sailing excursion is one of the gentlest ways to absorb Dakhla's scale and light. It suits couples, photographers, and travelers who want a calmer relationship to the lagoon than the wind-sports scene offers.",
    shortValueProp: "A slower, more elegant way to experience the lagoon.",
    googleRating: 4.8,
    reviewCount: 190,
    googleReviewCount: 190,
    tip: "Choose this if you want Dakhla's beauty without committing to a board-sport identity.",
    tips: ["not available"],
    highlights: [
      "Calm scenic cruise across Dakhla waters",
      "Strong fit for couples and soft-adventure travelers"
    ],
    emotionalBenefits: ["Calm", "Scenic", "Freeing"],
    bestTimeToVisit: "Late afternoon or sunset departures",
    seasonality: "Year-round with weather considerations",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sahara+Sailing+Dakhla",
    publicTransportInfo: "Operator pickup or taxi is usually simplest.",
    equipmentNeeded: ["Light jacket", "Sun protection"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Confirm sea and wind conditions before departure.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-ranch-des-dunes",
    city: "dakhla",
    name: "Ranch Des Dunes Horse Riding",
    neighborhood: "Dune Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["couple", "adventure"],
    tags: ["adventure", "coastal", "desert", "horse-riding", "private", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 120,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Horse riding through dune and coastal landscapes is one of Dakhla's more atmospheric low-tech adventures. It offers a timeless desert-sea feeling that contrasts nicely with the modern kitesurf image.",
    shortValueProp: "A cinematic desert-coast ride far removed from standard resort experiences.",
    googleRating: 4.9,
    reviewCount: 140,
    googleReviewCount: 140,
    tip: "Sunset rides are especially memorable, but ask for a pace that matches your actual riding level.",
    tips: ["not available"],
    highlights: [
      "Horseback movement through dunes and open landscapes",
      "Strong romantic or soft-adventure appeal"
    ],
    emotionalBenefits: ["Freeing", "Scenic", "Memorable"],
    bestTimeToVisit: "Golden hour",
    seasonality: "Year-round in comfortable weather",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ranch+Des+Dunes+Dakhla",
    publicTransportInfo: "Usually booked directly with transfer or reached by taxi.",
    equipmentNeeded: ["Closed shoes", "Sun protection"],
    fitnessLevel: "Moderate",
    safetyNotes: "Choose a horse and route suitable to your experience level.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-lassarga-beach",
    city: "dakhla",
    name: "Lassarga Beach",
    neighborhood: "Outer Coast",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "photographer"],
    tags: ["atlantic", "coastal", "nature", "sunset", "surf-culture", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 150,
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Lassarga is associated with the region's more ocean-driven sports and coastal scenery and is often mentioned among Dakhla's must-see outer beaches. It is best for travelers chasing bigger Atlantic mood than the lagoon can offer.",
    shortValueProp: "A wilder outer-coast stop for travelers who want the full force of Dakhla's ocean mood.",
    googleRating: 4.7,
    reviewCount: 350,
    googleReviewCount: 350,
    tip: "Expect it to feel more exposed and elemental than the gentler lagoon side.",
    tips: ["not available"],
    highlights: ["Big-sky Atlantic scenery", "Useful contrast to lagoon calm and camp culture"],
    emotionalBenefits: ["Wild", "Expansive", "Scenic"],
    bestTimeToVisit: "Late afternoon",
    seasonality: "Year-round with weather awareness",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lassarga+Beach+Dakhla",
    publicTransportInfo: "Best with a private driver or organized route.",
    equipmentNeeded: ["Wind layer", "Water", "Sun protection"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Outer-coast conditions can be rough; treat it as a scenic stop unless you are with experienced operators.",
    languages: ["Arabic (Darija)", "French", "English"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-lighthouse",
    city: "dakhla",
    name: "Dakhla Lighthouse (Phare de Dakhla)",
    neighborhood: "Cap de Dakhla",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history-weaver", "photographer", "first-timer"],
    tags: [
      "authentic",
      "coastal",
      "historical",
      "off-the-beaten-path",
      "photography",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 90,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 06:00 PM (Daily, caretaker dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A 19th-century Spanish colonial lighthouse perched on the rocky cape at the entrance to Dakhla Bay. Climb 240 cast-iron steps spiralling upward through sea-salt air to a lantern room that reveals a 360-degree panorama of the Atlantic, the fishing fleet, and the Saharan coastline stretching south toward Mauritania.",
    shortValueProp: "A short climb rewards you with the most commanding ocean-and-desert viewpoint in Dakhla.",
    googleRating: 4.3,
    reviewCount: 275,
    googleReviewCount: 180,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 95,
    tip: "Bring a small tip for the caretaker who unlocks the tower; late afternoon offers the best light for photos.",
    tips: ["not available"],
    highlights: [
      "360-degree Atlantic and desert views from the lantern room",
      "Well-preserved 19th-century Spanish iron staircase"
    ],
    emotionalBenefits: ["Scenic", "Reflective", "Accomplished"],
    bestTimeToVisit: "Late afternoon for golden-hour views over the Atlantic",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round; strongest winds in spring can make the balcony chilly",
    ticketTypes: [
      {
        name: "Caretaker donation",
        price: 20
      }
    ],
    discountsInfo: "No formal ticketing; access is by voluntary donation to the lighthouse keeper.",
    includedServices: ["Self-guided tower climb", "Panoramic viewing balcony"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Petit taxi from the center will expect 40-60 MAD return fare to be negotiated.",
    address: "Cap de Dakhla, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Lighthouse+Dakhla+Morocco",
    parkingInfo: "Limited roadside parking near the cape; arrive by taxi or on foot.",
    publicTransportInfo: "No public transit reaches the cape; hire a petit taxi from the town center.",
    dressCode: "Sturdy shoes for the iron staircase and a windbreaker for the exposed lantern balcony.",
    equipmentNeeded: ["Closed-toe shoes", "Windbreaker", "Sunscreen"],
    fitnessLevel: "Moderate (240 steep steps, narrow staircase)",
    ageRestrictions: "Suitable for most ages; children must be accompanied and infants are not allowed on the balcony.",
    safetyNotes: "Hold the handrail; the balcony is open and can be very windy. Avoid during rough seas.",
    languages: ["Arabic (Darija)", "Spanish"],
    visitorQuotes: [
      {
        quote: "The climb is short but the view from the top is unforgettable.",
        author: "Pierre L.",
        type: "Solo Travel",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Dakhla Fish Market",
        type: "visit"
      },
      {
        name: "Cafés on Boulevard Mohammed V",
        type: "eat"
      }
    ],
    storyTitle: "The Spanish Sentinel of the Sahara",
    history: "Built during the Spanish colonial period when Villa Cisneros was the administrative capital of the Rio de Oro, the lighthouse guided ships carrying phosphate, fish and mail along the dangerous Atlantic coast of Western Sahara.",
    culturalImportance: "The lighthouse remains one of the most visible symbols of Dakhla's layered history and its enduring relationship with the sea.",
    localLegend: "Fishermen say that on calm nights the beam still calls home every boat that has ever sailed from Dakhla Bay.",
    funFact: "The cape is one of the westernmost points of mainland Morocco and a prime spot for spotting migratory seabirds.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the lighthouse always open?",
        a: "Opening depends on the caretaker; visit during daylight hours and bring a small tip."
      },
      {
        q: "Can I climb with children?",
        a: "Yes, but the staircase is steep and narrow; hold hands tightly."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-lagoon-flamingos",
    city: "dakhla",
    name: "Dakhla Lagoon Flamingo & Birdwatching",
    neighborhood: "PK25 Lagoon",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["photographer", "quiet-mystic", "nature", "nomad"],
    tags: [
      "coastal",
      "morning",
      "nature",
      "off-the-beaten-path",
      "photography",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 28,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24 hours (best at dawn and dusk)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The Dakhla Lagoon is one of North Africa's most important wetlands, sheltering tens of thousands of migratory birds including flamingos, herons, spoonbills, cormorants and rare gulls. A dawn or dusk stop along the shallows offers a hushed natural spectacle framed by white dunes and mirror-still water.",
    shortValueProp: "Watch thousands of flamingos glow pink against the white dunes of the lagoon.",
    googleRating: 4.5,
    reviewCount: 430,
    googleReviewCount: 320,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 110,
    tip: "A 200 mm lens or better brings out the pink feather detail without disturbing the flock.",
    tips: ["not available"],
    highlights: [
      "Flocks of flamingos reflected in the shallow lagoon",
      "Dawn silence broken only by bird calls and wind"
    ],
    emotionalBenefits: ["Peaceful", "Scenic", "Grounded"],
    bestTimeToVisit: "Sunrise or the hour before sunset when birds feed in the shallows",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round; greatest concentrations of migratory birds from November to March",
    ticketTypes: [
      {
        name: "Free shoreline viewing",
        price: 0
      }
    ],
    discountsInfo: "Free from the shoreline; boat excursions may charge a fee.",
    includedServices: ["Wildlife viewing from public shore"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "A taxi to PK25 and back should be negotiated at 400-600 MAD including waiting time.",
    address: "Dakhla Lagoon, PK25 area, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Lagoon+Flamingos+Dakhla+Morocco",
    parkingInfo: "Unpaved pull-offs along the lagoon road; avoid driving onto soft salt flats.",
    publicTransportInfo: "Hire a private taxi; no scheduled buses serve the lagoon area.",
    dressCode: "Neutral-colored clothing, sun hat and binoculars for quiet observation.",
    equipmentNeeded: ["Binoculars", "Camera with zoom lens", "Sunscreen"],
    fitnessLevel: "Relaxed (Short walks along the shore)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "Stay on firm ground; salt mud can be deceptively soft. Keep a respectful distance from birds.",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        quote: "We stopped at sunrise and had the flamingos completely to ourselves.",
        author: "Elena R.",
        type: "Nature Lover",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "PK25 Kite Beach",
        type: "visit"
      },
      {
        name: "Lagoon-side café",
        type: "eat"
      }
    ],
    storyTitle: "The Pink Convoys",
    history: "The lagoon's protected status and rich algae blooms have made it a critical stopover on the East Atlantic Flyway for migratory waterbirds.",
    culturalImportance: "Local fishermen and herders have coexisted with the lagoon's birdlife for centuries, viewing the flamingos as a sign of clean water and good fortune.",
    localLegend: "Sahrawi herders believe that flamingos carry the souls of lost sailors and should never be disturbed at sunset.",
    funFact: "Dakhla's coastline is sometimes called 'The Coast of Seals' because of the rare Mediterranean monk seal that historically bred here.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a guide to see flamingos?",
        a: "No, they are visible from the roadside at PK25, but a local guide helps locate the best spots."
      },
      {
        q: "Can I get close for photos?",
        a: "Use a zoom lens; approaching the birds disturbs feeding and is discouraged."
      }
    ],
    contactPhone: "",
  }
];
