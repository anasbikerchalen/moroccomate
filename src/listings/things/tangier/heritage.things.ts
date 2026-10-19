/**
 * =========================================================================
 * [TANGIER] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/tangier/index.ts
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
export const tangierHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-kasbah-museum",
    city: "tangier",
    name: "Kasbah Museum (Dar el-Makhzen)",
    neighborhood: "Kasbah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: [
      "authentic",
      "cultural-tour",
      "instagrammable",
      "medina",
      "photo-spot",
      "port-express",
      "private",
      "relaxed",
      "step-free",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 90,
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
    description: "Housed inside the former 17th-century Sultan's palace, this museum showcases Tangier's history from prehistoric times through Roman, Phoenician, and Islamic eras. Don’t miss the serene Andalusian courtyard garden filled with free-roaming tortoises.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 2162,
    tip: "Your ticket also grants free entry to the nearby Contemporary Art Space, making it an excellent two-for-one deal.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Kasbah+Museum/@35.7891334,-5.8143962,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-legation-museum",
    city: "tangier",
    name: "Tangier American Legation Museum",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "cultural-tour", "instagrammable", "medina", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 5,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The first and only American National Historic Landmark located on foreign soil, gifted by the Sultan of Morocco in 1821. Discover beautifully restored, tiled rooms packed with regional art, historic maps, and a wing dedicated to expatriate author Paul Bowles.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.6,
    reviewCount: 1250,
    tip: "Ask the staff to show you the \"Moroccan Mona Lisa\" painting by James McBey—it is the crown jewel of the collection.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Tangier+American+Legation+Museum/@35.7836109,-5.8118029,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-grand-socco",
    city: "tangier",
    name: "Grand Socco (Place du 9 Avril 1947)",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["authentic", "instagrammable", "medina", "shopping", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The energetic and beating heart of Tangier that bridges the ancient, narrow streets of the Medina with the modern Ville Nouvelle. It features palm trees, a lively central fountain, and surrounding historic cafes perfect for people-watching.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.5,
    reviewCount: 10113,
    tip: "Take a seat on a cafe terrace on the square around dusk to experience the local transition from day to night.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Grand+Socco/@35.7853112,-5.814522,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-petit-socco",
    city: "tangier",
    name: "Petit Socco",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "morning",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Once a notorious hub for international spies, writers, and bohemians in the early 20th century, this cozy square is now a charming crossroads of medina life. Sip a coffee or mint tea at a historic cafe and watch the vibrant daily life of the old city walk by.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0"
    ],
    googleRating: 4.4,
    reviewCount: 819,
    tip: "Head to the iconic Gran Café Central directly on the square, which was once a favorite haunt of William S. Burroughs.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Petit+Socco/@35.7849684,-5.8115668,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-st-andrew",
    city: "tangier",
    name: "St. Andrew’s Anglican Church",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
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
    hasEnglishGuide: true,
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
    description: "A fascinating historical testament to interfaith harmony, this active Anglican church is constructed in a Moorish architectural style. Admire its intricate geometric carvings, zellij tiles, and the Lord's Prayer beautifully written in Arabic calligraphy inside.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.1,
    reviewCount: 325,
    tip: "Speak to the resident caretaker, who is a local Muslim maintaining this Christian church, and ask to see the historic gravestones in the lush backyard cemetery.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/St.+Andrew's+Church/@35.7845612,-5.815915,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-villa-harris",
    city: "tangier",
    name: "Villa Harris Museum (Musée Villa Harris)",
    neighborhood: "Malabata",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "luxury"],
    tags: [
      "cultural-tour",
      "instagrammable",
      "nature",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 60,
    transportMode: "taxi",
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
    description: "Once the grand 19th-century residence of British journalist Walter Burton Harris, this property is now a modern art museum. Explore two floors of vibrant Moroccan paintings, sculptures, and international orientalist art, surrounded by a peaceful botanical park.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 500,
    tip: "Placed in Malabata, this museum features trilingual informational placards (including English), making it highly accessible for international visitors.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Villa+Harris+Museum/@35.7766521,-5.7733475,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-dar-niaba",
    city: "tangier",
    name: "Dar Niaba Cultural Museum",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Housed inside a restored Portuguese-era mansion that served as the former French consulate and the office of the Sultan's diplomatic representative. It hosts a collection of 19th and 20th-century Orientalist portraits, diplomatic artifacts, and historical archives.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43"
    ],
    googleRating: 4.4,
    reviewCount: 180,
    tip: "Take a slow stroll through the peaceful central courtyard downstairs, which features a beautiful array of orange trees.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Mus%C3%A9e+Dar+Niaba/@35.7847125,-5.8130252,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-moshe-nahon",
    city: "tangier",
    name: "Moshe Nahon Synagogue",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
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
    description: "Built in the mid-19th century, this hidden synagogue is a tribute to Tangier's historical Jewish heritage. Wander through its restored interior featuring Andalusian arches, intricate stucco work, and a collection of old liturgical artifacts.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    ],
    googleRating: 4.5,
    reviewCount: 150,
    tip: "The synagogue is tucked deep inside an alleyway; look out for a local caretaker nearby who holds the key and will unlock it for a small tip.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Moshe+Nahon+Synagogue/@35.7851121,-5.8119123,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-mendoubia-gardens",
    city: "tangier",
    name: "Mendoubia Gardens (Parc de la Mendoubia)",
    neighborhood: "Marshan",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["authentic", "cultural-tour", "nature", "off-the-beaten-path", "private", "relaxed", "walk-in"],
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A historic green park located on the edge of the Medina, serving as a tranquil retreat from the city center's bustle. It is lined with colonial-era buildings, historic French cannons, and a legendary, giant banyan tree believed to be centuries old.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.1,
    reviewCount: 871,
    tip: "It's a peaceful place to relax on a bench in the late afternoon while children play football and friendly local street cats wander by.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Mendoubia+Garden/@35.7865123,-5.8159124,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-jewish-cemetery",
    city: "tangier",
    name: "Beit Hahayim (Old Jewish Cemetery of Tangier)",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Perched on a hillside just outside the old medina walls, this cemetery holds thousands of centuries-old tombstones with unique Hebrew inscriptions. It provides a peaceful, reflective look into the deep-rooted historical multicultural identity of Tangier.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0"
    ],
    googleRating: 4.6,
    reviewCount: 18,
    tip: "While the main iron gates on Rue Portugal are kept locked, knock gently and the friendly resident caretaker will let you in. A small tip of 20 MAD is customary.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://www.google.com/maps/place/Jewish+Cemetery+Tangier/@35.7855123,-5.8105124,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-ibn-battouta-tomb",
    city: "tangier",
    name: "Tomb of Ibn Battouta",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "adventure"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 15,
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
    description: "Pay your respects at the modest final resting place of history’s greatest pre-modern traveler, Ibn Battouta, who was born in Tangier in 1304. This humble, whitewashed mausoleum pays tribute to his epic 29-year, 75,000-mile journey across Africa, Europe, and Asia.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1542838132-92c53300491e"
    ],
    googleRating: 4.1,
    reviewCount: 196,
    tip: "The tomb is located inside a small maze of residential streets in the medina. Feel free to ask a local shopkeeper for \"Qabr Ibn Battouta\" if you lose your way.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Tomb+of+Ibn+Battouta/@35.7874125,-5.8149124,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tangier-darna-association",
    city: "tangier",
    name: "Darna Association Café & Restaurant",
    neighborhood: "Grand Socco",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "relaxed", "shopping", "walk-in", "wellness"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 6,
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
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A welcoming community space and restaurant operated by the Darna Association, which supports vulnerable local women and youth. Enjoy fresh, home-cooked traditional Moroccan tagines and pastries in a peaceful courtyard, knowing your money supports a noble social cause.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43"
    ],
    googleRating: 4.5,
    reviewCount: 151,
    tip: "Make sure to visit their small on-site artisan shop afterward, where they sell beautiful hand-woven textiles and crafts made directly by the women of the association.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Darna/@35.7844123,-5.8155124,17z",
  }
];
