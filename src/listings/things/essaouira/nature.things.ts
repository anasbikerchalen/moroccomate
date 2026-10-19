/**
 * =========================================================================
 * [ESSAOUIRA] THINGS TO DO — NATURE & ADVENTURE
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

// ══ LISTINGS — NATURE & ADVENTURE ══
export const essaouiraNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-sidi-kaouki",
    city: "essaouira",
    name: "Sidi Kaouki Beach (Plage de Sidi Kaouki)",
    neighborhood: "Sidi Kaouki",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: [
      "active",
      "climbing-adventure",
      "coastal",
      "nature",
      "off-the-beaten-path",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 240,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Head 25 km south of Essaouira to discover a wild, rugged beach where vast dunes meet the Atlantic Ocean. It is widely celebrated as a bohemian hub for surfing, windsurfing, and quiet beach life.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Sidi_Kaouki_beach_By_Soufiane_Bellahmar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Beach%2C_Sidi_Kaouki%2C_Morocco.jpg/1280px-Beach%2C_Sidi_Kaouki%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJH8K_1e3wrw0Rn93ZpM0YmTo",
    googleRating: 4.4,
    reviewCount: 305,
    tip: "Take the local Souiri bus from the main station for a low-cost, authentic transit experience, and check return bus schedules with the driver.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=12140685934522430155",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-beach",
    city: "essaouira",
    name: "Essaouira Beach (Plage d'Essaouira)",
    neighborhood: "Essaouira Beach",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["climbing-adventure", "coastal", "instagrammable", "nature", "sunset", "walk-in"],
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
    hasPrivateOption: false,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Stroll along the wide, sandy bay that hugs the city, a central spot for beach strolls, windsurfing, and horseback rides. The steady trade winds make this a world-class playground for watersport enthusiasts.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/03_-_Essaouira%2C_Atlantik.jpg/1280px-03_-_Essaouira%2C_Atlantik.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/02_-_Essaouira%2C_Atlantik.jpg/1280px-02_-_Essaouira%2C_Atlantik.jpg"
    ],
    googlePlaceId: "ChIJZ259O3Pyrw0R8P8a9s1kPSo",
    googleRating: 4.3,
    reviewCount: 4800,
    tip: "If you walk far enough south away from the crowds, you will find a quiet estuary where you can often spot migratory birds resting in the shallow waters.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=1456983726194830172",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-borj-el-baroud",
    city: "essaouira",
    name: "Borj El Baroud (Ruined Castle in the Sand)",
    neighborhood: "Diabat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "culture"],
    tags: [
      "active",
      "authentic",
      "coastal",
      "nature",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in"
    ],
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
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Trek to the haunting, half-buried ruins of an 18th-century fortress slowly reclaimed by coastal tides. This atmospheric site is famously tied to Jimi Hendrix's travels through Morocco.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bordj_el_Berod.jpg/1280px-Bordj_el_Berod.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/03_-_Essaouira%2C_Atlantik.jpg/1280px-03_-_Essaouira%2C_Atlantik.jpg"
    ],
    googlePlaceId: "ChIJm08S78vxrw0R3452ZmW3KTo",
    googleRating: 4.2,
    reviewCount: 560,
    tip: "Time your walk at low tide so you can cross the riverbed easily and walk directly up to the decaying stone battlements.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=1230495867382910475",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-horse-riding",
    city: "essaouira",
    name: "Horseback Riding with Ranch de Diabat",
    neighborhood: "Diabat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "luxury"],
    tags: [
      "active",
      "climbing-adventure",
      "coastal",
      "nature",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 35,
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
    hasPrivateOption: true,
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Ride beautifully trained Arabian horses across sprawling dunes, local forests, and along the dramatic Atlantic shores. Guided treks are tailored to all skill levels from beginner to advanced.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Horse_riding%2C_Essaouira%2C_Morocco.jpg/1280px-Horse_riding%2C_Essaouira%2C_Morocco.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Essaouira_690.JPG/1280px-Essaouira_690.JPG"
    ],
    googlePlaceId: "ChIJu38R8Mrxrw0R5102934812o",
    googleRating: 4.6,
    reviewCount: 215,
    tip: "Reserve a late afternoon ride to enjoy the tranquility of galloping along the shoreline while the sun dips below the ocean horizon.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=1756284903829102837",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-kitesurfing",
    city: "essaouira",
    name: "Kitesurfing at Explora Essaouira",
    neighborhood: "Essaouira Beach",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "nature", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 50,
    durationMinutes: 180,
    transportMode: "walkable",
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Take advantage of Essaouira's legendary coastal trade winds with professional windsurfing or kitesurfing guidance. Friendly, certified guides offer lessons that are perfectly suited for beginners and pros alike.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/KiteEssaouira%2C_Morocco_%282%29.jpg/1280px-KiteEssaouira%2C_Morocco_%282%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sunset_with_kite%2C_Essaouira%2C_Morocco.jpg/1280px-Sunset_with_kite%2C_Essaouira%2C_Morocco.jpg"
    ],
    googlePlaceId: "ChIJp0911_3xrw0R2910293810o",
    googleRating: 4.9,
    reviewCount: 420,
    tip: "Wind speeds generally peak in the mid-afternoon, making the morning hours the ideal window for beginners seeking calmer ocean waters.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=1293847291038475630",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-had-draa-souk",
    city: "essaouira",
    name: "Had Draa Souk (Sunday Market)",
    neighborhood: "Had Draa",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "culture"],
    tags: ["active", "authentic", "cultural-tour", "morning", "nature", "off-the-beaten-path", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Travel 30 km inland to witness one of Morocco's largest, most authentic rural Berber markets. Here, farmers arrive weekly to trade cattle, camels, fruits, and rustic handmade tools.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg/1280px-In_the_streets_of_Mellah%2C_Jewish_quarter_of_Essaouira.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Argan_Oil_Cooperative_02.jpg/1280px-Argan_Oil_Cooperative_02.jpg"
    ],
    googlePlaceId: "ChIJr112093wrw0R8172635412o",
    googleRating: 4.4,
    reviewCount: 95,
    tip: "Ensure you arrive before 10:00 AM if you want to observe the animal trading area, as livestock sales wrap up early in the morning.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=11190467520194830175",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-val-d-argan",
    city: "essaouira",
    name: "Wine Tasting at Domaine du Val d'Argan",
    neighborhood: "Ounara",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury", "nomad"],
    tags: ["authentic", "nature", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 25,
    durationMinutes: 120,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    description: "Discover the only organic wine estate in the southern reaches of Morocco, founded by a French winemaker. Tour the vineyards and sit under the olive trees to taste local red, white, and rosé varieties.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/03_-_Essaouira%2C_Atlantik.jpg/1280px-03_-_Essaouira%2C_Atlantik.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Argan_Oil_Cooperative_02.jpg/1280px-Argan_Oil_Cooperative_02.jpg"
    ],
    googlePlaceId: "ChIJv556093wrw0R6152433120o",
    googleRating: 4.1,
    reviewCount: 308,
    tip: "Book a vineyard lunch; they famously employ camels rather than machinery to gently till the soil surrounding the grapevines.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=11190467520194830177",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "essaouira-quad-attitude",
    city: "essaouira",
    name: "Quad Biking Dunes with Quad Attitude",
    neighborhood: "Diabat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "coastal", "nature", "private", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 50,
    durationMinutes: 120,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    description: "Experience a fast-paced off-road excursion over the dramatic sand dunes and open shorelines of Cap Sim. Guided trips are led by experienced professionals and include protective gear and safety trials.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/03_-_Essaouira%2C_Atlantik.jpg/1280px-03_-_Essaouira%2C_Atlantik.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Sidi_Kaouki_beach_By_Soufiane_Bellahmar.jpg"
    ],
    googlePlaceId: "ChIJx7788Mrxrw0R5142322120o",
    googleRating: 4.8,
    reviewCount: 203,
    tip: "Wear full pants and sturdy, closed shoes, as the combination of quad speed and coastal winds will whip sand against your legs.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?cid=11190467520194830178",
  }
];
