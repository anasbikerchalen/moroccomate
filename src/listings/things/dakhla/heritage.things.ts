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
export const dakhlaHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-oyster-farms",
    city: "dakhla",
    name: "Dakhla Oyster Farms",
    neighborhood: "Lagoon Road",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["foodie", "culture"],
    tags: ["authentic", "foodie", "lagoon", "local-life", "private", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 75,
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The oyster farms are one of Dakhla's most distinctive food experiences and show how the lagoon shapes local livelihoods, not just sports tourism. They are a great stop for seafood lovers and curious eaters.",
    shortValueProp: "The tastiest way to understand Dakhla's lagoon economy.",
    googleRating: 4.6,
    reviewCount: 720,
    googleReviewCount: 720,
    tip: "Go hungry and ask what is freshest that day; the simple, direct experience is the point.",
    tips: ["not available"],
    highlights: [
      "Fresh oyster tasting close to the source",
      "Food experience strongly tied to place rather than generic dining"
    ],
    emotionalBenefits: ["Sensory", "Curious", "Satisfied"],
    bestTimeToVisit: "Lunch or early afternoon",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=oyster+farms+Dakhla",
    publicTransportInfo: "Usually done by taxi, driver, or as part of a lagoon road trip.",
    equipmentNeeded: ["Cash is useful"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Choose busy and reputable stops if you are sensitive to seafood freshness.",
    languages: ["Arabic (Darija)", "French", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-corniche",
    city: "dakhla",
    name: "Dakhla Corniche",
    neighborhood: "City Waterfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "seniors"],
    tags: ["local-life", "relaxed", "sunset", "walk", "walk-in", "waterfront"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 45,
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
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The corniche gives Dakhla a simpler everyday city face away from camps and excursions. It is good for a low-effort walk, sea air, and seeing local life without committing to a full half-day outing.",
    shortValueProp: "A simple city-waterfront walk that balances Dakhla's excursion-heavy rhythm.",
    googleRating: 4.4,
    reviewCount: 510,
    googleReviewCount: 510,
    tip: "Best as an evening decompression walk after a windier day out on the lagoon.",
    tips: ["not available"],
    highlights: ["Low-key urban sea-facing promenade", "Useful way to connect with everyday city life"],
    emotionalBenefits: ["Calm", "Grounded", "Breezy"],
    bestTimeToVisit: "Sunset and early evening",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Corniche",
    publicTransportInfo: "Walkable from many city accommodations.",
    equipmentNeeded: ["Light layer for wind"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Straightforward public promenade with normal city awareness.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-marche-municipal-el-massira",
    city: "dakhla",
    name: "Marché Municipal El Massira",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "foodie"],
    tags: ["authentic", "local-life", "market", "morning", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    durationMinutes: 30,
    transportMode: "walkable",
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
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    goodForRain: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The municipal market is a useful everyday stop if you want to see Dakhla beyond camps, sports, and scenery. It offers a more practical window into food, trade, and local pace.",
    shortValueProp: "A grounding local stop in a destination often seen only through excursion lenses.",
    googleRating: 4.1,
    reviewCount: 320,
    googleReviewCount: 320,
    tip: "Go with curiosity rather than a strict shopping list; it is more about atmosphere than souvenirs.",
    tips: ["not available"],
    highlights: ["Everyday produce and city commerce", "Useful cultural contrast to resort and camp life"],
    emotionalBenefits: ["Authentic", "Curious", "Grounded"],
    bestTimeToVisit: "Morning",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marche+Municipal+El+Massira+Dakhla",
    publicTransportInfo: "Walkable or short taxi ride from central Dakhla.",
    equipmentNeeded: ["Cash"],
    fitnessLevel: "Relaxed",
    safetyNotes: "As in any market, keep valuables secure in busier moments.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-fishing-port",
    city: "dakhla",
    name: "Dakhla Fishing Port",
    neighborhood: "Port District",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "foodie", "local-life", "sunset", "walk-in", "working-port"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The fishing port is one of the best places to understand Dakhla as a working maritime city rather than only a sports destination. It is sensory, practical, and tied to the region's seafood reputation.",
    shortValueProp: "A working-city stop that keeps Dakhla rooted in daily maritime life.",
    googleRating: 4.2,
    reviewCount: 180,
    googleReviewCount: 180,
    tip: "Visit in the morning if you want more activity rather than a static harbor scene.",
    tips: ["not available"],
    highlights: ["Fishing activity and port atmosphere", "Good context for the city's seafood culture"],
    emotionalBenefits: ["Grounded", "Sensory", "Authentic"],
    bestTimeToVisit: "Morning",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Fishing+Port",
    publicTransportInfo: "Usually easiest by taxi.",
    equipmentNeeded: ["Comfortable shoes"],
    fitnessLevel: "Relaxed",
    safetyNotes: "Stay clear of active work areas and slippery surfaces.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-old-town-cathedral",
    city: "dakhla",
    name: "Dakhla Old Town & Spanish Cathedral",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history-weaver", "first-timer", "nomad"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "photography",
      "relaxed",
      "sunset",
      "urban",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    openingHours: "Open 24 hours (public streets); cathedral mass times vary",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Wander the compact grid of Dakhla's old town where pastel-washed Spanish colonial buildings, a small Catholic cathedral and the slow rhythm of Sahrawi tea houses create a quiet cultural counterpoint to the wind-swept lagoon. It is the best place in the city to feel the everyday pulse of local life.",
    shortValueProp: "A peaceful stroll through Spanish-Sahrawi heritage in the heart of Dakhla.",
    googleRating: 4.2,
    reviewCount: 330,
    googleReviewCount: 210,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 120,
    tip: "Pause at a corner tea house for sweet Sahrawi tea and watch the afternoon market crowd thin out.",
    tips: ["not available"],
    highlights: [
      "Spanish colonial architecture and quiet cathedral",
      "Local tea houses serving traditional Sahrawi tea"
    ],
    emotionalBenefits: ["Peaceful", "Grounded", "Curious"],
    bestTimeToVisit: "Late morning or early evening when the streets are lively but not crowded",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round; best explored on cooler mornings in summer",
    ticketTypes: [
      {
        name: "Free self-guided walk",
        price: 0
      }
    ],
    discountsInfo: "Free public walk; cathedral entry is generally free outside service times.",
    includedServices: ["Public street access", "Cathedral exterior viewing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tea and pastries in local cafés cost 10-30 MAD.",
    address: "Old Town, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Old+Town+Cathedral+Dakhla+Morocco",
    parkingInfo: "Street parking around the old town; use paid guardians where available.",
    publicTransportInfo: "Easily explored on foot from any downtown hotel.",
    dressCode: "Modest casual clothing respectful of the local Muslim community.",
    equipmentNeeded: ["Comfortable walking shoes", "Sun hat"],
    fitnessLevel: "Relaxed (Flat streets, shaded cafés)",
    ageRestrictions: "Suitable for all age groups.",
    safetyNotes: "The old town is safe and well-patrolled; avoid photographing people without permission.",
    languages: ["Arabic (Darija)", "Spanish", "French"],
    visitorQuotes: [
      {
        quote: "The old town feels like a secret; no crowds, just real life.",
        author: "Marie C.",
        type: "Cultural Travel",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "El Massira Municipal Market",
        type: "visit"
      },
      {
        name: "Local tea house",
        type: "eat"
      }
    ],
    storyTitle: "Villa Cisneros",
    history: "Founded as Villa Cisneros by the Spanish in the early 20th century, Dakhla was a colonial outpost, prison camp and later a Mauritanian provincial capital before becoming part of Morocco in 1975.",
    culturalImportance: "The surviving Spanish architecture and Sahrawi street life illustrate the city's transition from colonial port to modern Moroccan coastal hub.",
    localLegend: "Locals say the cathedral bell only rings when a sailor returns safely from a long voyage.",
    funFact: "Dakhla is one of the few Moroccan cities where a historic Catholic church still stands in the old town center.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the cathedral open to visitors?",
        a: "The exterior is always visible; interior access depends on mass schedule and caretaker availability."
      },
      {
        q: "Is it safe to walk alone?",
        a: "Yes, the old town is considered very safe during the day and evening."
      }
    ],
    contactPhone: "",
  }
];
