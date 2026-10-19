/**
 * =========================================================================
 * [MARRAKECH] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/marrakech/index.ts
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
export const marrakechHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-bahia-palace",
    city: "marrakech",
    name: "Bahia Palace",
    neighborhood: "Mellah",
    cluster: "Medina Cluster",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    vibeTags: ["historical", "regal", "artistic", "geometric"],
    tags: [
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "step-free",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    isHiddenGem: false,
    // ── 2. FILTER — result-page filters & logistics —
    price: 9,
    durationMinutes: 90,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 3,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A mesmerizing, expansive late 19th-century palace showcasing the peak of Moroccan-Andalusian palatial design. Wander through its sun-drenched marble courtyards, intricately carved cedarwood ceilings, and colorful zellij tilework.",
    images: [
      "https://images.unsplash.com/photo-1599859725763-4a16c9468890?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1716460206118-4a77ad005eaf?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 22374,
    badge: "top-pick",
    tip: "Arrive right at 9:00 AM to explore the spectacular Grand Courtyard in peace before the large tour groups arrive.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Avenue Imam El Ghazali, Mellah, Marrakech 40000",
    coordinates: {
      lat: 31.621592,
      lng: -7.982231
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.621592,-7.982231",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-ben-youssef-madrasa",
    city: "marrakech",
    name: "Ben Youssef Madrasa",
    neighborhood: "Medina",
    cluster: "Medina Cluster",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    vibeTags: ["architectural", "historical", "serene", "spiritual"],
    tags: [
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "sunset",
      "tripod-allowed",
      "walk-in"
    ],
    badges: ["not available"],
    isHiddenGem: false,
    // ── 2. FILTER — result-page filters & logistics —
    price: 5,
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A brilliant architectural masterpiece, this former 14th-century Islamic college is renowned for its spectacular central courtyard. Marvel at the stunning symmetry of its zellij mosaics, delicate stucco carvings, and historic student dormitory cells.",
    images: [
      "https://images.unsplash.com/photo-1531230689007-0b32d7a7c33e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1548018560-4cb48a8837c1?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.7,
    reviewCount: 11525,
    badge: "architectural-gem",
    tip: "Climb up to the tiny, dark student rooms on the second floor to peer down through the wooden screens for a beautiful overhead view of the courtyard.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Rue Assouel, Medina, Marrakech 40000",
    coordinates: {
      lat: 31.63194,
      lng: -7.986194
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.63194,-7.986194",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-jemaa-el-fnaa",
    city: "marrakech",
    name: "Jemaa el-Fnaa",
    neighborhood: "Medina",
    cluster: "Medina Cluster",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["first-timer", "adventure"],
    vibeTags: ["chaotic", "vibrant", "sensory", "energetic"],
    tags: [
      "active",
      "authentic",
      "cultural-tour",
      "festival",
      "golden-hour",
      "medina",
      "morning",
      "photo-spot",
      "private",
      "street-food",
      "sunset",
      "sunset-view",
      "walk-in"
    ],
    badges: ["not available"],
    isHiddenGem: false,
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 120,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 3,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 4,
      touristCrowd: 5,
      noiseLevel: 5,
      scamRisk: 4,
      physicalIntensity: 3,
      kidSuitable: true
    },
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The beating, chaotic heart of Marrakech, this UNESCO-listed public square transforms from a daytime market to an open-air theater at night. Experience a captivating carnival of street musicians, storytellers, snake charmers, and sizzling food stalls.",
    images: [
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1569440703456-29b9c31765ca?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 49648,
    badge: "essential",
    tip: "Head up to the terrace of Café de France around 5:30 PM, order a mint tea, and secure a spot to watch the night market setup as the sun sets.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Place Jemaa el-Fnaa, Medina, Marrakech 40000",
    coordinates: {
      lat: 31.625502,
      lng: -7.988936
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.625502,-7.988936",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-saadian-tombs",
    city: "marrakech",
    name: "Saadian Tombs",
    neighborhood: "Kasbah",
    cluster: "Medina Cluster",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    vibeTags: ["solemn", "historical", "intricate", "ornate"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["not available"],
    isHiddenGem: false,
    // ── 2. FILTER — result-page filters & logistics —
    price: 9,
    durationMinutes: 60,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A remarkably preserved royal burial ground dating back to the late 16th century, rediscovered only in 1917. The mausoleums house members of the Saadian dynasty, with the jaw-dropping Chamber of the Twelve Columns standing as its crowning jewel.",
    images: [
      "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570133435536-7ececf000ef6?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 3.9,
    reviewCount: 14777,
    badge: "historical",
    tip: "The single-file line to view the Chamber of the Twelve Columns can move very slowly. Visit in the hot midday hours when the crowd thins out slightly.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Rue de la Kasbah, Kasbah, Marrakech 40000",
    coordinates: {
      lat: 31.6173,
      lng: -7.9887
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6173,-7.9887",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-koutoubia-mosque",
    city: "marrakech",
    name: "Koutoubia Mosque",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["cultural-tour", "medina", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Dominating Marrakech's skyline since the 12th century, this majestic sandstone mosque features a legendary 77-meter-tall minaret. Non-Muslims cannot enter, but its grand exterior and surrounding gardens are open to visitors.",
    images: [
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.5,
    reviewCount: 17678,
    tip: "The rose-filled park behind the mosque, Parc Lalla Hasna, is one of the best spots to grab a peaceful photo of the minaret away from traffic.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Medina, Marrakech 40000",
    coordinates: {
      lat: 31.624124,
      lng: -7.993541
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.624124,-7.993541",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-el-badi-palace",
    city: "marrakech",
    name: "El Badi Palace",
    neighborhood: "Kasbah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 7,
    durationMinutes: 60,
    transportMode: "walkable",
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The grand sandstone ruins of a once-magnificent 16th-century palace, constructed with gold, onyx, and marble. Today, its massive empty pools, orange orchards, and crumbling walls play host to storks that build their massive nests on the battlements.",
    images: [
      "https://images.unsplash.com/photo-1592343361402-d4509fb85b36?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1672753298258-704b142b2e17?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 10556,
    tip: "Follow the signs to climb the modern metal staircase on the ramparts for a spectacular panoramic view of the entire palace footprint and the Atlas Mountains.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Ksibat Nhass, Kasbah, Marrakech 40000",
    coordinates: {
      lat: 31.6183,
      lng: -7.9858
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.6183,-7.9858",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-maison-de-la-photographie",
    city: "marrakech",
    name: "Maison de la Photographie",
    neighborhood: "Kaat Benahid",
    cluster: "Medina Cluster",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    vibeTags: ["nostalgic", "artistic", "cosy", "scenic"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    isHiddenGem: true,
    // ── 2. FILTER — result-page filters & logistics —
    price: 4.5,
    durationMinutes: 75,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    bookingRequired: false,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A peaceful, multi-story riad housing an incredible private collection of historic photographs of Morocco spanning from 1870 to 1960. Gain a fascinating look into old nomadic life and Berber culture.",
    images: [
      "https://images.unsplash.com/photo-1570133435536-7ececf000ef6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570133435807-5feefeb2d196?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.5,
    reviewCount: 2425,
    badge: "hidden-gem",
    tip: "Keep your entrance ticket! It is valid for multiple entries during your stay in Marrakech, making it perfect for return visits to their rooftop café.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "46 Rue Bin Lafnadek, Kaat Benahid, Marrakech 40030",
    coordinates: {
      lat: 31.632,
      lng: -7.98424
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.632,-7.98424",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-dar-si-said-museum",
    city: "marrakech",
    name: "Dar Si Said Museum",
    neighborhood: "Riad Zitoun Jdid",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 60,
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    accessibilityFeatures: ["not available"],
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Housed in an opulent late 19th-century palatial residence, this museum showcases the rich history of Moroccan carpet-making and traditional weaving. Wander its quiet, tile-heavy courtyards and enjoy the masterfully painted domed ceilings.",
    images: [
      "https://images.unsplash.com/photo-1576673192796-73876467569e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621460253850-4909b6de9021?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.3,
    reviewCount: 1323,
    tip: "This palace is rarely crowded, making it a highly tranquil and budget-friendly alternative to the Bahia Palace.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "8 Rue de la Bahia, Riad Zitoun Jdid, Marrakech 40000",
    coordinates: {
      lat: 31.62331,
      lng: -7.98409
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.62331,-7.98409",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "marrakech-souk-semmarine",
    city: "marrakech",
    name: "Souk Semmarine",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["first-timer", "adventure"],
    tags: ["active", "authentic", "medina", "morning", "shopping", "walk-in", "workshop"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 120,
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The grand, covered central avenue of Marrakech's legendary markets, overflowing with color, texture, and energy. Discover a dense wonderland of soft leather slippers, hand-woven carpets, glowing brass lanterns, and aromatic spices.",
    images: [
      "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1569440703456-29b9c31765ca?auto=format&fit=crop&q=80&w=800"
    ],
    googleRating: 4.4,
    reviewCount: 2503,
    tip: "To get the best bargains, veer off the main tourist drag of Semmarine into the side alleys where artisans actually hammer out metal and carve wood.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Souk Semmarine, Medina, Marrakech 40000",
    coordinates: {
      lat: 31.62783,
      lng: -7.98811
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=31.62783,-7.98811",
  }
];
