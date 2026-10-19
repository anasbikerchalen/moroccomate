/**
 * =========================================================================
 * [DAKHLA] THINGS TO DO — SPORT & ACTIVE
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

// ══ LISTINGS — SPORT & ACTIVE ══
export const dakhlaSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-pk25-kitesurf-spot",
    city: "dakhla",
    name: "PK25 Kitesurf Spot",
    neighborhood: "Lagoon",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "photographer"],
    tags: ["active", "climbing-adventure", "kitesurf", "lagoon", "photography", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
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
    hasSunsetView: false,
    hasWiFi: false,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "PK25 is one of the best-known wind-sports points in the Dakhla area and a key reference point in the destination's kitesurf culture. Whether you ride or just watch, it shows the region at full kinetic strength.",
    shortValueProp: "One of the purest snapshots of Dakhla as a wind-sports destination.",
    googleRating: 4.8,
    reviewCount: 850,
    googleReviewCount: 850,
    tip: "Even non-riders should stop here; the spectacle of boards and wind is part of Dakhla's identity.",
    tips: ["not available"],
    highlights: [
      "Strong visual culture of kites, boards, and wind",
      "Great people-watching for active-travel fans"
    ],
    emotionalBenefits: ["Energized", "Curious", "Inspired"],
    bestTimeToVisit: "Windy daylight hours",
    seasonality: "Most relevant in main wind seasons",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PK25+Dakhla",
    publicTransportInfo: "Usually reached through camp transfers, taxis, or self-drive.",
    equipmentNeeded: ["Wind layer", "Sun protection", "Camera"],
    fitnessLevel: "Moderate if observing, active if riding",
    safetyNotes: "Only experienced riders should self-manage; beginners should use instruction.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-dakhla-attitude",
    city: "dakhla",
    name: "Dakhla Attitude at Pointe du Dragon",
    neighborhood: "Lagoon Camp Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "first-timer"],
    tags: ["active", "camp", "climbing-adventure", "kitesurf", "lagoon", "private", "walk-in"],
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
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Dakhla Attitude is one of the best-known wind-sports bases in the region and is closely tied to the area's international reputation. It is a useful reference point whether you are riding or just understanding the local sports scene.",
    shortValueProp: "One of Dakhla's landmark wind-sports bases.",
    googleRating: 4.6,
    reviewCount: 980,
    googleReviewCount: 980,
    tip: "Even if you are not staying there, the area is worth understanding because it helped shape Dakhla's sports reputation.",
    tips: ["not available"],
    highlights: [
      "Strong sports atmosphere in a signature lagoon setting",
      "Useful entry point for the destination's active-travel culture"
    ],
    emotionalBenefits: ["Energized", "Inspired", "Scenic"],
    bestTimeToVisit: "Windy daylight hours or sunset",
    seasonality: "Peak relevance in wind seasons",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Attitude+Pointe+du+Dragon",
    publicTransportInfo: "Typically reached by arranged transfer, taxi, or camp vehicle.",
    equipmentNeeded: ["Sportswear if participating", "Wind layer"],
    fitnessLevel: "Moderate to active",
    safetyNotes: "Use instruction or supervision if you are new to wind sports.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-kbc-dakhla",
    city: "dakhla",
    name: "KBC Dakhla",
    neighborhood: "Lagoon Sports Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "kitesurf", "lagoon", "private", "walk-in", "wingfoil"],
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
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    goodForRain: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "KBC Dakhla is another real operator-linked stop for visitors looking at kitesurf or wingfoil culture in the region. It is particularly relevant for travelers who want structured lessons instead of ad-hoc experimentation.",
    shortValueProp: "A lesson-friendly gateway into Dakhla's wind-sport culture.",
    googleRating: 4.7,
    reviewCount: 310,
    googleReviewCount: 310,
    tip: "If you are a beginner, choose structured instruction and do not underestimate the wind even on flatter water.",
    tips: ["not available"],
    highlights: [
      "Access to instruction in a globally known wind-sports destination",
      "Good fit for travelers wanting more than just observation"
    ],
    emotionalBenefits: ["Energized", "Challenged", "Inspired"],
    bestTimeToVisit: "Wind-appropriate daylight sessions",
    seasonality: "Best in wind seasons",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KBC+Dakhla",
    publicTransportInfo: "Normally accessed by arranged transfer or taxi.",
    equipmentNeeded: ["Sportswear", "Sun protection"],
    fitnessLevel: "Active",
    safetyNotes: "Use school guidance rather than trying to self-launch if inexperienced.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-quad-and-events",
    city: "dakhla",
    name: "Dakhla Quad & Events Desert Ride",
    neighborhood: "City / Dune Access Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "desert", "private", "quad-bike", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 120,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    description: "A guided quad outing is one of the most direct ways to feel Dakhla's desert textures up close. It is ideal for travelers who want a dose of speed and dust alongside the lagoon's smoother moods.",
    shortValueProp: "A fast, sandy counterpoint to Dakhla's calmer lagoon experiences.",
    googleRating: 4.8,
    reviewCount: 220,
    googleReviewCount: 220,
    tip: "Wear clothing you do not mind getting dusty and protect your phone or camera from sand.",
    tips: ["not available"],
    highlights: [
      "Guided desert riding with strong sensory payoff",
      "Good for travelers who want more adrenaline than a scenic drive"
    ],
    emotionalBenefits: ["Adrenalized", "Playful", "Charged"],
    bestTimeToVisit: "Late afternoon in cooler light",
    seasonality: "Year-round in suitable weather",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Quad+and+Events",
    publicTransportInfo: "Usually starts from a city or pre-arranged meeting point.",
    equipmentNeeded: ["Closed shoes", "Eye protection", "Dust-tolerant clothing"],
    fitnessLevel: "Active",
    safetyNotes: "Follow guide spacing instructions and avoid overconfidence on unfamiliar terrain.",
    languages: ["Arabic (Darija)", "French", "English"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-fitness-gym",
    city: "dakhla",
    name: "Dakhla Fitness Gym",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 90,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A well-equipped modern fitness gym located in the downtown area of Dakhla. Highly popular among kitesurfers, expats, and active travelers for strength training, cardio, and active recovery.",
    shortValueProp: "The best local strength gym for kitesurfers and travelers in Dakhla city.",
    googleRating: 4.4,
    reviewCount: 95,
    googleReviewCount: 95,
    tip: "It has a solid setup of dumbbells, barbells, and pulley systems, making it the perfect strength-training complement to your windy kite sessions.",
    tips: ["not available"],
    highlights: [
      "Excellent set of free weights, benches, and squat racks",
      "Clean changing facilities and secure locker space",
      "Very budget-friendly daily rate with no advance booking required"
    ],
    emotionalBenefits: ["Energized", "Grounded", "Accomplished"],
    bestTimeToVisit: "12:00 PM - 4:00 PM (usually very quiet before evening rush)",
    seasonality: "Year-round",
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gym+Dakhla",
    publicTransportInfo: "A short walk from central Dakhla hotels or reachable by a brief petit taxi ride.",
    equipmentNeeded: ["Clean athletic footwear", "Workout towel", "Water bottle"],
    fitnessLevel: "Active",
    safetyNotes: "Daily entry fee is paid in cash at the reception desk.",
    languages: ["Arabic (Darija)", "French"],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-kitesurf-safari",
    city: "dakhla",
    name: "Dakhla Kitesurf Safari (Mirage Dakhla)",
    neighborhood: "Oued Chiaf",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "first-timer", "nomad"],
    tags: ["active", "climbing-adventure", "nature", "private", "sunset", "surf-kitesurf", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 1300,
    entryPrice: 1300,
    durationMinutes: 240,
    distanceFromCenterKm: 2.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "07:00 AM - 07:00 PM (Wind dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A mobile kitesurf school that picks you up and drives to the lagoon spot best matched to your level. With shallow training flats, steady side-shore wind and patient IKO-style instruction, Dakhla Kitesurf Safari turns complete beginners into independent riders and helps intermediates refine their first jumps.",
    shortValueProp: "Learn to kitesurf in one of the world's most forgiving flat-water lagoons.",
    googleRating: 4.8,
    reviewCount: 225,
    googleReviewCount: 150,
    tripadvisorRating: 4.9,
    tripadvisorReviewCount: 45,
    viatorRating: 4.7,
    viatorReviewCount: 30,
    tip: "Ask for the mobile pick-up option; instructors choose the flattest beginner spot based on the day's wind direction.",
    tips: ["not available"],
    highlights: [
      "Mobile instruction matched to daily wind conditions",
      "Shallow flat-water lagoon ideal for beginners"
    ],
    emotionalBenefits: ["Adventurous", "Accomplished", "Energized"],
    bestTimeToVisit: "Peak wind months are October through April; mornings are less gusty",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round wind; strongest and most consistent October to April",
    ticketTypes: [
      {
        name: "Private lesson (2 hours)",
        price: 1300
      },
      {
        name: "Semi-private lesson (2 hours)",
        price: 1100
      },
      {
        name: "Equipment rental (per day)",
        price: 800
      }
    ],
    discountsInfo: "Multi-day packages reduce the per-hour lesson price significantly.",
    includedServices: ["Kite and board", "Harness and wetsuit", "Licensed instructor", "Rescue boat support"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Equipment rental, rescue boat fees and transport may be billed separately depending on the package.",
    address: "Oued Chiaf number 109, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mirage+Dakhla+Kitesurf+School+Dakhla+Morocco",
    parkingInfo: "Mobile school provides pick-up; otherwise park near the lagoon launch.",
    publicTransportInfo: "Hotel pick-up included or taxi to Oued Chiaf meeting point.",
    dressCode: "Rash guard or swimwear, board shorts, sunscreen and booties recommended.",
    equipmentNeeded: ["Sunscreen", "Rash guard", "Towel", "Water"],
    fitnessLevel: "Active (Swimming, kite control, repeated water starts)",
    ageRestrictions: "Typically ages 10 and up; minors need parental consent.",
    safetyNotes: "Always follow instructor signals; wind can be strong and the lagoon is large.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "I was riding on my second day. The instructors were incredibly patient.",
        author: "Lars H.",
        type: "Beginner",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Dakhla Lagoon flamingo viewing",
        type: "visit"
      },
      {
        name: "Lagoon restaurant",
        type: "eat"
      }
    ],
    storyTitle: "The Wind That Never Stops",
    history: "Dakhla's lagoon has become one of the most famous kitesurf destinations on earth since the first wind-sport camps opened along its eastern shore in the early 2000s.",
    culturalImportance: "Kitesurfing transformed Dakhla from a remote fishing town into an international adventure-sports hub, bringing new livelihoods and global visitors.",
    localLegend: "Locals joke that Dakhla has only two seasons: windy and very windy.",
    funFact: "The Dakhla lagoon is so flat that it regularly hosts speed-record attempts and international freestyle competitions.",
    officialWebsite: "https://www.kitedakhla.com/",
    ticketWebsite: "https://www.kitedakhla.com/",
    faq: [
      {
        q: "Do I need to know how to swim?",
        a: "Basic swimming confidence is required; lessons include safety briefings."
      },
      {
        q: "What if there is no wind?",
        a: "Dakhla is windy year-round, but schools offer theory sessions or alternative activities on rare calm days."
      }
    ],
    contactPhone: "+212 767-372413",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-camp-kitesurf",
    city: "dakhla",
    name: "Dakhla Camp Kitesurf & Wingfoil School",
    neighborhood: "PK28 Lagoon",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "first-timer", "nomad"],
    tags: ["active", "climbing-adventure", "private", "sunset", "surf-kitesurf", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 1200,
    entryPrice: 1200,
    durationMinutes: 240,
    distanceFromCenterKm: 28,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "07:00 AM - 08:00 PM (Daily, wind dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "An established lagoon-side camp offering IKO-certified kitesurf lessons, wingfoil instruction, equipment rental and guided downwinders. The camp sits directly on the water, so students walk from breakfast to the launch zone in flip-flops, maximizing time on the water.",
    shortValueProp: "Sleep, eat and learn to ride within steps of the lagoon.",
    googleRating: 4.7,
    reviewCount: 547,
    googleReviewCount: 312,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 180,
    viatorRating: 4.6,
    viatorReviewCount: 55,
    tip: "Book the full-board package if you want to avoid daily transport logistics between town and the lagoon.",
    tips: ["not available"],
    highlights: [
      "IKO-certified instructors and on-site rescue boat",
      "Bungalow accommodation right on the lagoon"
    ],
    emotionalBenefits: ["Adventurous", "Accomplished", "Energized"],
    bestTimeToVisit: "October to April for consistent wind; June to August for warmer water",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round; peak wind October through April",
    ticketTypes: [
      {
        name: "Group lesson (2 hours)",
        price: 900
      },
      {
        name: "Private lesson (2 hours)",
        price: 1200
      },
      {
        name: "Wingfoil introduction (2 hours)",
        price: 1100
      }
    ],
    discountsInfo: "7-day packages often include one free yoga class and airport transfer.",
    includedServices: ["Equipment", "Instructor", "Rescue support", "Pool and restaurant access for guests"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Single room supplements, premium gear upgrades and downwinder trips cost extra.",
    address: "Dakhla Lagoon, PK28, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Camp+Kitesurf+Dakhla+Morocco",
    parkingInfo: "Free parking for guests and day visitors at the camp entrance.",
    publicTransportInfo: "Pre-booked camp shuttle or taxi from Dakhla town (approx. 300 MAD).",
    dressCode: "Beach and sportswear; bring a warm layer for windy afternoons.",
    equipmentNeeded: ["Rash guard", "Sunscreen", "Water bottle", "Sunglasses strap"],
    fitnessLevel: "Active (Kite control, swimming, walking on sand)",
    ageRestrictions: "Lessons from age 10; younger children can join family packages.",
    safetyNotes: "Follow the camp's wind-window rules and never kite outside designated zones without a buddy.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "Great vibe, professional instructors and the best spot on the lagoon.",
        author: "Sophie D.",
        type: "Intermediate Kiter",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Dragon Island",
        type: "visit"
      },
      {
        name: "Dakhla Camp restaurant",
        type: "eat"
      }
    ],
    storyTitle: "The Lagoon Classroom",
    history: "Dakhla Camp was among the pioneering schools that helped establish Dakhla as a world-class kitesurf destination, introducing IKO standards and rescue-boat operations to the lagoon.",
    culturalImportance: "The camp model blended Sahrawi hospitality with international wind-sport culture, creating a new tourism economy for the region.",
    localLegend: "Camp instructors say the lagoon gives each visitor exactly the wind lesson they need.",
    funFact: "The camp's pool overlooks the lagoon, so you can watch kitesurfers while swimming laps.",
    officialWebsite: "https://www.dakhlacamp.com/en",
    ticketWebsite: "https://www.dakhlacamp.com/en",
    faq: [
      {
        q: "Do I have to stay at the camp to take lessons?",
        a: "No, day lessons are available, but staying on-site is more convenient."
      },
      {
        q: "Is wingfoil easier than kitesurfing?",
        a: "Wingfoil has a different learning curve; the camp offers beginner-specific introductions."
      }
    ],
    contactPhone: "+212 6 61 49 60 76",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-ocean-vagabond-surf",
    city: "dakhla",
    name: "Ocean Vagabond Dakhla Lassarga - Surf & Free-Ride",
    neighborhood: "Lassarga",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "photographer", "nomad"],
    tags: ["active", "climbing-adventure", "nature", "sunset", "surf-kitesurf", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 1000,
    entryPrice: 1000,
    durationMinutes: 180,
    distanceFromCenterKm: 35,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "07:00 AM - 07:00 PM (Daily, conditions dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Set on the Atlantic side of the peninsula at Lassarga, Ocean Vagabond runs a surf and free-ride center where winter swells produce long point-break waves and the lagoon side offers flat water five minutes away. It is the best base for surfers who want both wave and freestyle conditions in one day.",
    shortValueProp: "Surf Atlantic point-breaks in the morning and kite flat water in the afternoon.",
    googleRating: 4.6,
    reviewCount: 305,
    googleReviewCount: 210,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 95,
    tip: "Winter (October-March) is the season for real waves; book a package that includes the daily zodiac transfer to the lagoon.",
    tips: ["not available"],
    highlights: ["Point-break surf at Lassarga", "Flat-water lagoon access by zodiac"],
    emotionalBenefits: ["Adventurous", "Accomplished", "Energized"],
    bestTimeToVisit: "October to March for surf; year-round for wind sports",
    typicalWaitTimeMinutes: 10,
    seasonality: "Surf season October-March; wind sports year-round",
    ticketTypes: [
      {
        name: "Surf lesson (2 hours)",
        price: 1000
      },
      {
        name: "Kitesurf downwinder",
        price: 1200
      },
      {
        name: "Board rental (half-day)",
        price: 400
      }
    ],
    discountsInfo: "Multi-day surf packages and family rates are available.",
    includedServices: ["Board and wetsuit", "Instructor", "Zodiac lagoon transfer", "Beach assistance"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Zodiac transfers to the lagoon and premium surfboard rentals may be extra.",
    address: "Lassarga, 73000 Dakhla, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ocean+Vagabond+Dakhla+Lassarga+Morocco",
    parkingInfo: "On-site parking for guests and day visitors.",
    publicTransportInfo: "Pre-arranged shuttle or taxi from Dakhla town.",
    dressCode: "Wetsuit or rash guard depending on season; bring a warm hoodie for between sessions.",
    equipmentNeeded: ["Sunscreen", "Rash guard", "Water", "Reef booties"],
    fitnessLevel: "Active (Paddling, wave reading, swimming)",
    ageRestrictions: "Surf lessons from age 8; younger children can join supervised beach activities.",
    safetyNotes: "Lassarga wave can be powerful; always surf within your ability and follow local advice.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "Lassarga has one of the longest waves I have ever ridden in Morocco.",
        author: "Diego M.",
        type: "Surfer",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Om Yoga Dakhla",
        type: "visit"
      },
      {
        name: "Ocean Vagabond restaurant",
        type: "eat"
      }
    ],
    storyTitle: "The Long Wave of Lassarga",
    history: "Lassarga has hosted stages of the GKA Kite-Surf World Tour and is considered one of Morocco's most technical wave spots.",
    culturalImportance: "The camp helped introduce surf culture to the remote Atlantic shore of Western Sahara, connecting local youth with international surf communities.",
    localLegend: "Local surfers say Lassarga only gives good waves to those who respect the ocean.",
    funFact: "The Lassarga wave can peel for hundreds of meters, giving rides long enough to tire your legs before the kick-out.",
    officialWebsite: "https://www.oceanvagabond.com/mobile/en/dakhla-morocco-2/dakhla-lassarga/",
    ticketWebsite: "https://www.oceanvagabond.com/mobile/en/dakhla-morocco-2/dakhla-lassarga/",
    faq: [
      {
        q: "Do I need my own wetsuit?",
        a: "The center provides wetsuits; water is warmest in summer."
      },
      {
        q: "Can beginners surf at Lassarga?",
        a: "Beginner lessons use gentler inside sections; the main point-break is for experienced surfers."
      }
    ],
    contactPhone: "+212 671 010 301",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-ride-adventures-quad",
    city: "dakhla",
    name: "Dakhla Ride Adventures - Quad & Buggy Tours",
    neighborhood: "PK28",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "photographer", "nomad"],
    tags: [
      "active",
      "climbing-adventure",
      "desert-sport",
      "nature",
      "photography",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 500,
    entryPrice: 500,
    durationMinutes: 180,
    distanceFromCenterKm: 28,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 08:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A specialist desert-activity operator offering guided quad, buggy, vintage safari, camel and horse excursions. Their signature quad route crosses dunes, desert tracks and coastal viewpoints, ending at the White Dune for an adrenaline-fuelled photo stop.",
    shortValueProp: "Tear across Sahara dunes on a 300cc quad with a local guide leading the way.",
    googleRating: 4.9,
    reviewCount: 1100,
    googleReviewCount: 550,
    tripadvisorRating: 5,
    tripadvisorReviewCount: 550,
    tip: "Book the late-afternoon quad tour to combine dune riding with a desert sunset.",
    tips: ["not available"],
    highlights: [
      "Guided quad route through dunes to the White Dune",
      "Options for buggy, vintage safari, camel and horseback"
    ],
    emotionalBenefits: ["Adventurous", "Energized", "Accomplished"],
    bestTimeToVisit: "Late afternoon for cooler temperatures and golden desert light",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round; summer tours depart earlier in the morning",
    ticketTypes: [
      {
        name: "Quad tour (2 hours)",
        price: 500
      },
      {
        name: "Quad + White Dune excursion (3 hours)",
        price: 700
      },
      {
        name: "Private guided quad experience",
        price: 900
      }
    ],
    discountsInfo: "Group rates available for 4 or more quads booked together.",
    includedServices: ["Quad or buggy", "Helmet", "Guide", "Fuel", "Safety briefing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "GoPro rental, flying-dress photo shoots and sandboarding can be added for a fee.",
    address: "PK 28, Dakhla 73000, Morocco (en face du Royal Golf Dakhla)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dakhla+Ride+Adventures+Dakhla+Morocco",
    parkingInfo: "Free parking at the operator base.",
    publicTransportInfo: "Taxi from Dakhla town; WhatsApp booking includes transfer options.",
    dressCode: "Long sleeves, closed shoes, sunglasses and a scarf to block dust.",
    equipmentNeeded: ["Closed-toe shoes", "Sunglasses", "Scarf or buff", "Water"],
    fitnessLevel: "Active (Quad handling, bumps, sand, heat)",
    ageRestrictions: "Driver's license or minimum age 16 for solo quads; younger passengers allowed with an adult.",
    safetyNotes: "Always follow the guide; never leave the marked route. Carry ID and water.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "The dune section was wild and the guides made us feel safe the whole time.",
        author: "Ahmed & Co.",
        type: "Friends Trip",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "White Dune",
        type: "visit"
      },
      {
        name: "Dakhla Camp",
        type: "visit"
      }
    ],
    storyTitle: "Dunes, Dust and Adrenaline",
    history: "Desert quad tourism began in Dakhla as an offshoot of fishing and wind-sport camps, quickly becoming one of the region's most popular land-based activities.",
    culturalImportance: "Quad and buggy tourism has given younger locals new guiding and mechanical skills, diversifying the economy beyond the sea.",
    localLegend: "Guides joke that the dunes shift every night so no two rides are ever the same.",
    funFact: "The operator also offers a 'flying dress' photo experience for dramatic desert shots.",
    officialWebsite: "https://dakhlarideadventures.com/en/",
    ticketWebsite: "https://dakhlarideadventures.com/en/",
    faq: [
      {
        q: "Do I need a driver's license?",
        a: "A license is recommended for solo quads; passengers can ride without one."
      },
      {
        q: "Is it safe for beginners?",
        a: "Yes, the guide adapts speed and terrain to the group's experience."
      }
    ],
    contactPhone: "+212 661-118174",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-white-dune-4x4",
    city: "dakhla",
    name: "White Dune 4x4 Desert Tour",
    neighborhood: "Southern Desert",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nature", "first-timer"],
    tags: ["active", "climbing-adventure", "desert-sport", "nature", "photography", "private", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 450,
    entryPrice: 450,
    durationMinutes: 360,
    distanceFromCenterKm: 30,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM (Tour departures)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A guided 4x4 expedition from Dakhla to the White Dune, weaving through Saharan tracks, salt flats and coastal viewpoints. The tour includes sandboarding, a lagoon swim and a traditional tea break, making it the easiest way to experience Dakhla's desert-and-sea duality in a single day.",
    shortValueProp: "Let a local driver handle the dunes while you focus on the views.",
    googleRating: 4.4,
    reviewCount: 503,
    googleReviewCount: 320,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 160,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 23,
    tip: "Confirm in advance whether lunch is included; some budget tours stop only for tea and photos.",
    tips: ["not available"],
    highlights: [
      "4x4 navigation through Saharan dunes and salt flats",
      "Sandboarding and swimming at the White Dune"
    ],
    emotionalBenefits: ["Adventurous", "Scenic", "Accomplished"],
    bestTimeToVisit: "October to April for mild temperatures and clear skies",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round; summer tours leave very early to beat the heat",
    ticketTypes: [
      {
        name: "Shared full-day tour",
        price: 450
      },
      {
        name: "Private full-day tour",
        price: 800
      }
    ],
    discountsInfo: "Children under 12 usually receive a 50% discount on shared tours.",
    includedServices: ["4x4 transport", "Driver-guide", "Sandboard", "Tea break"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional sandboard rental, lunch upgrades and tips for the driver are not always included.",
    address: "Departure from Dakhla town or PK28 camps, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=White+Dune+4x4+Tour+Dakhla+Morocco",
    parkingInfo: "Hotel pick-up included; no need to drive yourself.",
    publicTransportInfo: "All tours include round-trip 4x4 transport from Dakhla.",
    dressCode: "Light layers, swimwear underneath, closed shoes for climbing the dune.",
    equipmentNeeded: ["Sunscreen", "Swimwear", "Water", "Closed shoes", "Sunglasses"],
    fitnessLevel: "Active (Dune climbing, sandboarding, full-day sun exposure)",
    ageRestrictions: "Suitable for all ages; infants and seniors should consider shorter private options.",
    safetyNotes: "Licensed drivers know the shifting tracks and safe crossing points; do not self-drive without experience.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "Our kids loved the sandboarding and the driver was great at explaining the desert.",
        author: "Nadia F.",
        type: "Family Holiday",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Oyster farm lunch",
        type: "eat"
      },
      {
        name: "Dragon Island",
        type: "visit"
      }
    ],
    storyTitle: "Across the Salt and Sand",
    history: "Desert tourism routes to the White Dune were first pioneered by fishing guides and kite-camp owners who knew the safest tracks through the salt flats.",
    culturalImportance: "The tour reflects the Sahrawi skill of navigating featureless desert by sun, wind and memory.",
    localLegend: "Drivers often point out a dune that is said to whistle when the east wind blows.",
    funFact: "The White Dune appears to float because it is surrounded by shallow lagoon water on nearly all sides.",
    officialWebsite: "",
    ticketWebsite: "https://www.getyourguide.com/dakhla-l145733/",
    faq: [
      {
        q: "Is lunch included?",
        a: "Some tours include lunch; confirm when booking. Many stop at an oyster farm."
      },
      {
        q: "Can I request a private vehicle?",
        a: "Yes, private 4x4s can be arranged for families or photographers."
      }
    ],
    contactPhone: "+212 6 61 80 72 93",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "dakhla-imlili-oasis-tour",
    city: "dakhla",
    name: "Imlili Secret Oasis 4x4 Trek",
    neighborhood: "Imlili Desert",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nature", "photographer", "nomad"],
    tags: [
      "active",
      "desert-sport",
      "hiking-trek",
      "nature",
      "off-the-beaten-path",
      "photography",
      "private",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 600,
    entryPrice: 600,
    durationMinutes: 480,
    distanceFromCenterKm: 100,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    openingHours: "07:00 AM - 06:00 PM (Tour departures)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A full-day expedition deep into the Sahara to Sebkhet Imlili, where more than 160 saltwater pools create an unexpected oasis in the white desert. The trek includes off-road driving, a guided walk between the pools, a picnic lunch and time to float in the hypersaline water.",
    shortValueProp: "A full-day Saharan trek to one of Morocco's strangest natural wonders.",
    googleRating: 4.6,
    reviewCount: 280,
    googleReviewCount: 180,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 95,
    getyourguideRating: 4.8,
    getyourguideReviewCount: 5,
    tip: "Wear shoes you do not mind getting salty; the salt crust is sharp and the water is extremely buoyant.",
    tips: ["not available"],
    highlights: ["160+ hypersaline pools in a remote salt desert", "Off-road Saharan driving with picnic lunch"],
    emotionalBenefits: ["Adventurous", "Reflective", "Accomplished"],
    bestTimeToVisit: "October to April for comfortable desert temperatures",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round; summer departures leave at dawn to avoid extreme heat",
    ticketTypes: [
      {
        name: "Shared full-day trek",
        price: 600
      },
      {
        name: "Private full-day trek",
        price: 1100
      }
    ],
    discountsInfo: "Groups of 4 or more usually receive a per-person discount.",
    includedServices: ["4x4 transport", "Licensed guide", "Picnic lunch", "Water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Some operators charge extra for a picnic lunch or drinks; confirm inclusions.",
    address: "Sebkhet Imlili, ~100 km south of Dakhla, Dakhla 73000, Morocco",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Imlili+Secret+Oasis+Tour+Dakhla+Morocco",
    parkingInfo: "Remote desert tracks; parking only at the edge of the salt flat.",
    publicTransportInfo: "Tour includes 4x4 transport from Dakhla town.",
    dressCode: "Light long sleeves, swimwear, hat, sunglasses and closed shoes for salt flats.",
    equipmentNeeded: ["Swimwear", "Towel", "Closed shoes", "Sun protection", "Water"],
    fitnessLevel: "Active (Full-day heat, walking on uneven salt and sand)",
    ageRestrictions: "Suitable for most ages; not recommended for infants or travelers with heat sensitivity.",
    safetyNotes: "Travel with a licensed guide, carry extra water and avoid driving onto soft salt without experience.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        quote: "It is a long drive but the pools are like nothing we have ever seen.",
        author: "Ingrid & Paul",
        type: "Adventure Couple",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "White Dune",
        type: "visit"
      },
      {
        name: "Desert tea with local family",
        type: "eat"
      }
    ],
    storyTitle: "The Tears of the Sahara",
    history: "The Imlili pools were known only to local herders until recent years, when 4x4 tourism revealed them to adventurous travelers seeking Morocco's most surreal landscapes.",
    culturalImportance: "The pools are part of Sahrawi ecological knowledge, used historically as a seasonal watering point and a sign of underground water.",
    localLegend: "Herders say the pools are where the desert remembers the ocean it once was.",
    funFact: "The salt concentration can make swimmers float effortlessly, similar to the Dead Sea but on a much smaller scale.",
    officialWebsite: "",
    ticketWebsite: "https://www.getyourguide.com/dakhla-l145733/",
    faq: [
      {
        q: "How long is the drive?",
        a: "About 1.5 to 2 hours each way from Dakhla, depending on track conditions."
      },
      {
        q: "Can I swim?",
        a: "Yes, but rinse off with fresh water afterward and avoid shaving before the trip."
      }
    ],
    contactPhone: "+212 662 336 571",
  }
];
