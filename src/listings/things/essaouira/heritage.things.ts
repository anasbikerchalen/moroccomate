/**
 * =========================================================================
 * [ESSAOUIRA] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/essaouira/index.ts
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
export const essaouiraHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-sqala-ville",
    city: "essaouira",
    name: "Sqala de la Ville (Essaouira Ramparts)",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "authentic",
      "coastal",
      "cultural-tour",
      "instagrammable",
      "medina",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 5,
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
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Walk along the majestic, honey-colored stone ramparts facing the Atlantic, framed by historic Spanish brass cannons. It is an iconic defensive bastion constructed in 1765 that offers dramatic views of the crashing waves.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Essaouira_skala_de_la_ville.jpg/1280px-Essaouira_skala_de_la_ville.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cannon_on_Skala_de_la_Ville%2C_Essaouira%2C_Morocco.jpg/1280px-Cannon_on_Skala_de_la_Ville%2C_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJu7S9_6Dyrw0R6OQJqT8-lTo",
    googleRating: 4.8,
    reviewCount: 135,
    tip: "Visit in the late afternoon to catch the sunset, and look for the circular stone openings which were featured as backdrops in the Game of Thrones series.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=12140685934522430154",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-sqala-port",
    city: "essaouira",
    name: "Sqala du Port (Port of Essaouira)",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "authentic",
      "coastal",
      "cultural-tour",
      "instagrammable",
      "medina",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 5,
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
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Immerse yourself in the bustling fishing port filled with iconic blue wooden boats and local fish auctions. Climb the old defensive tower for a panoramic view of the harbor and the nearby medina.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sqala_du_port_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sqala%2C_Essaouira.jpg/1280px-Sqala%2C_Essaouira.jpg"
    ],
    googlePlaceId: "ChIJVVVVVXDyrw0R4m4I2f8pPik",
    googleRating: 4.5,
    reviewCount: 2821,
    tip: "Watch your footing as the port is highly active with fresh catch preparations, but make sure to stop by the nearby stalls to try freshly grilled sardines.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=5672901344837583921",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-medina",
    city: "essaouira",
    name: "Medina of Essaouira",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "cultural-tour", "instagrammable", "medina", "private", "shopping", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 120,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Wander through this UNESCO World Heritage old town, famed for its grid layout, whitewashed walls, and blue-painted shutters. It is highly walkable and noticeably more relaxed than other major Moroccan souks.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJwXk532Pyrw0RvO8sW0_NfGA",
    googleRating: 4.7,
    reviewCount: 12500,
    tip: "Seek out the hidden workshops in the side alleys specializing in Thuya wood carving, a highly fragrant local wood native only to this region.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=1523456891011121314",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-galerie-damgaard",
    city: "essaouira",
    name: "Galerie d'Art Damgaard",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "medina", "relaxed", "walk-in", "workshop"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
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
    description: "Explore this landmark gallery displaying contemporary works from local, self-taught Essaouira artists. The style is uniquely bohemian, vivid, and deeply tied to regional folk traditions.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJa_2Y2GDyrw0RH3pZ421033o",
    googleRating: 4.6,
    reviewCount: 180,
    tip: "The resident curators are incredibly knowledgeable; ask them about the symbolic meaning behind the Gnaoua motifs integrated into the local canvases.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=1293847291038475628",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-slat-lkahal",
    city: "essaouira",
    name: "Slat Lkahal Synagogue",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 30,
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
    description: "Visit this restored 19th-century Jewish house of worship nestled inside the old Jewish quarter. This historic site is a testament to the rich multi-cultural history of Essaouira.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Slat_Lkahal_Mogador_synagogue.jpg/1280px-Slat_Lkahal_Mogador_synagogue.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Slat_Lkahal_synagogue_exterior_01.jpg/1280px-Slat_Lkahal_synagogue_exterior_01.jpg"
    ],
    googlePlaceId: "ChIJk9202mPyrw0R3920192348o",
    googleRating: 4.5,
    reviewCount: 95,
    tip: "The synagogue is closed during Shabbat, which lasts from Friday afternoon until Sunday morning.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=12140685934522430156",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-mellah",
    city: "essaouira",
    name: "Mellah (The Old Jewish Quarter)",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Take a walk through the raw, highly evocative streets of the Mellah. It is characterized by historic stone gates, sea salt-weathered structures, and a deep architectural history.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg/1280px-In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mellah_square_Essaouira.jpg/1280px-Mellah_square_Essaouira.jpg"
    ],
    googlePlaceId: "ChIJG5082mPyrw0R4029102938o",
    googleRating: 4,
    reviewCount: 150,
    tip: "Walking along the sea-facing edge of this district provides a prime viewing angle for the powerful waves crashing against the stone fortifications.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=3847291038475628102",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-bayt-dakira",
    city: "essaouira",
    name: "Bayt Dakira (The House of Memory)",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Step into a beautifully designed spiritual and historical museum inside a restored historic synagogue. It highlights the deep cultural ties and history of Judeo-Muslim coexistence in the region.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bayt_Dakira%2C_Simon_Attias_synagogue%2C_Essaouira.jpg/1280px-Bayt_Dakira%2C_Simon_Attias_synagogue%2C_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bayt_Dakira_Essaouira_06.jpg/1280px-Bayt_Dakira_Essaouira_06.jpg"
    ],
    googlePlaceId: "ChIJf9983mPyrw0R9019283746o",
    googleRating: 4.8,
    reviewCount: 210,
    tip: "Since most information boards are displayed in French or Arabic, use your smartphone's camera translation tool to fully appreciate the historic texts.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=11190467520194830174",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-patisserie-driss",
    city: "essaouira",
    name: "Coffee & Pastries at Pâtisserie Driss",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["authentic", "medina", "private", "relaxed", "shopping", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 45,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
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
    description: "Relax at Essaouira's oldest pastry shop, a beloved local spot serving the town since 1928. Sit in the hidden, art-filled courtyard patio to escape the busy medina.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg/1280px-In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg"
    ],
    googlePlaceId: "ChIJz9902GPyrw0R4132211120o",
    googleRating: 4,
    reviewCount: 964,
    tip: "Walk past the crowded front glass counters and head directly into the back garden courtyard to secure a peaceful table.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=11190467520194830179",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-dar-souiri",
    city: "essaouira",
    name: "Dar Souiri Cultural Center",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Tour a beautiful 19th-century merchant riad serving as the seat of the Association Essaouira Mogador. It hosts ongoing art galleries, public library spaces, and classical or Gnaoua musical performances.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg/1280px-Medina_Street_and_Fortified_Tower%2C_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg/1280px-Seaward_Walls_of_the_Medina_of_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJ11222GPyrw0R3121100012o",
    googleRating: 4.5,
    reviewCount: 55,
    tip: "Check the notice board near the entryway as they regularly update schedules for free, intimate evening acoustic performances in the central courtyard.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=11190467520194830180",
  }
];
