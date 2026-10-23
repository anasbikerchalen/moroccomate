/**
 * =========================================================================
 * [FES] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/fes/index.ts
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
export const fesHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-chouara-tannery",
    city: "fes",
    name: "Chouara Tannery",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "sensory-seeker", "photographer"],
    vibeTags: ["chaotic", "sensory", "historical", "iconic"],
    tags: [
      "authentic",
      "cultural-tour",
      "golden-hour",
      "guide-required",
      "instagrammable",
      "medina",
      "photo-spot",
      "sunset",
      "walk-in"
    ],
    badges: ["must-see", "cultural-immersion", "cultural-icon"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 4,
      touristCrowd: 4,
      noiseLevel: 4,
      scamRisk: 4,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "19:00" },
      { dayOfWeek: 1, open: "08:30", close: "19:00" },
      { dayOfWeek: 2, open: "08:30", close: "19:00" },
      { dayOfWeek: 3, open: "08:30", close: "19:00" },
      { dayOfWeek: 4, open: "08:30", close: "19:00" },
      { dayOfWeek: 5, open: "08:30", close: "19:00" },
      { dayOfWeek: 6, open: "08:30", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "gift_shop", "panoramic_viewpoint"],
    restrictions: ["Upper viewing terraces accessible only via leather goods stores"],
    healthContraindications: ["Respiratory sensitivities to pungent ammonia and pigeon droppings"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "must-see",
    description: "The oldest and largest traditional leather tannery in Fes, operating since the 11th century. Witness artisans working knee-deep in stone honeycomb vessels filled with natural dyes and pigeon guano to cure and pigment hides.",
    shortValueProp: "Watch ancient 11th-century medieval open-air leather dyeing from panoramic rooftop terraces.",
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
    ],
    googleRating: 4.2,
    reviewCount: 1075,
    tip: "Keep a handful of fresh mint leaves (offered at the terrace entrance) pressed to your nose to temper the pungent tanning smell.",
    tips: [
      "Visit in the morning when dye pits are most vibrant and artisans actively tread hides.",
      "The terraces are privately owned leather shops; tipping 10-20 MAD per person is customary if not purchasing goods."
    ],
    ticketTypes: [{ name: "Rooftop Terrace Viewing Tip", price: 20, currency: "MAD" }],
    includedServices: ["Terrace overlook view", "Sprig of fresh mint"],
    excludedServices: ["Personal guide fee", "Leather shop purchases"],
    address: "Hay Lablida, Chouara, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.066127,
      lng: -4.971014
    },
    googleMapsUrl: "https://maps.google.com/?q=34.066127,-4.971014",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-al-attarine-madrasa",
    city: "fes",
    name: "Al-Attarine Madrasa",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "history"],
    vibeTags: ["architectural", "intricate", "ornate", "serene", "spiritual"],
    tags: [
      "authentic",
      "cultural-tour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "relaxed",
      "tripod-allowed",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "ticket_booth", "traditional_fountains"],
    restrictions: ["Modest dress required; shoulders and knees must be covered"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "architectural-gem",
    description: "A jewel of 14th-century Marinid architecture completed under Sultan Abu Sa'id Uthman II. Celebrated for its intricate geometric zellige mosaic floor patterns, carved cedarwood screens, and stucco arabesques bordering a serene courtyard.",
    shortValueProp: "Fes's finest preserved Marinid madrasa with spectacular carved cedarwood and zellige.",
    images: [
      "https://images.unsplash.com/photo-1578912995204-7b7569e030ec",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    googleRating: 4.5,
    reviewCount: 2502,
    tip: "Climb to the upper floor and look through the carved wooden mashrabiya lattice windows of the student quarters for an aerial courtyard perspective.",
    tips: [
      "Visit during the early morning opening hour to capture pristine photographs before tour groups arrive.",
      "Look closely at the prayer niche (mihrab) to inspect the delicate Quranic calligraphy carved in alabaster and plaster."
    ],
    ticketTypes: [{ name: "Standard Admission", price: 20, currency: "MAD" }],
    includedServices: ["Self-guided access to central courtyard, prayer hall, and dormitory cells"],
    excludedServices: ["Licensed human tour guide"],
    address: "Rue Talaa Kebira, Souk el-Attarine, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.065083,
      lng: -4.973694
    },
    googleMapsUrl: "https://maps.google.com/?q=34.065083,-4.973694",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-bou-inania-madrasa",
    city: "fes",
    name: "Bou Inania Madrasa",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "history-weaver"],
    vibeTags: ["architectural", "ornate", "spiritual", "historical", "iconic"],
    tags: [
      "authentic",
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["architectural-landmark", "must-see", "cultural-icon"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "level_entry_doorway"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (Daily, except prayer pauses)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "traditional_fountains", "mosque_prayer_room"],
    restrictions: ["Non-Muslims cannot enter the inner prayer hall; closed during Friday prayers"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "Erected by Sultan Abu Inan Faris between 1350 and 1355, this is the grandest Marinid institution in Fes and the only medersa in the city that also operated as a congregational Friday mosque with a complete minaret.",
    shortValueProp: "The grandest 14th-century Marinid madrasa-mosque complex in Morocco.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9"
    ],
    googleRating: 4.4,
    reviewCount: 583,
    tip: "Arrive right at 9:00 AM to hear the murmuring water in the central ablution canal against complete silence before midday prayers.",
    tips: [
      "Dress respectfully with covered shoulders and knees to ensure seamless entry.",
      "Check out Dar al-Magana opposite the entrance to observe the remains of the mysterious 14th-century hydraulic water clock."
    ],
    ticketTypes: [{ name: "Monument Entry", price: 20, currency: "MAD" }],
    includedServices: ["Courtyard entry and historical viewing access"],
    excludedServices: ["Interior prayer hall entry for non-Muslim visitors"],
    address: "Rue Talaa Kebira, Bab Bou Jeloud, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06218,
      lng: -4.98272
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06218,-4.98272",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-bab-bou-jeloud",
    city: "fes",
    name: "Bab Bou Jeloud (The Blue Gate)",
    neighborhood: "Bab Bou Jeloud",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "photographer"],
    vibeTags: ["iconic", "vibrant", "energetic", "historical"],
    tags: [
      "authentic",
      "cultural-tour",
      "iconic-landmark",
      "instagrammable",
      "medina",
      "photo-spot",
      "walk-in"
    ],
    badges: ["cultural-icon", "must-see", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.0,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "wide_flat_walkways", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 5,
      noiseLevel: 4,
      scamRisk: 3,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 Hours (Daily)",
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
    amenities: ["atm_nearby", "cafe", "food_stalls", "fresh_juice_bars"],
    restrictions: ["Pedestrian zone; beware of incoming pack donkeys"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "The world-famous western entrance to Fès el-Bali, built in 1913. Its outer facade is adorned with vibrant cobalt-blue ceramic tiles honoring Fes craftsmanship, while the inner arch features green tiles symbolizing Islam.",
    shortValueProp: "The vibrant cobalt-and-green Moorish portal into the medieval medina.",
    images: [
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc"
    ],
    googleRating: 4.4,
    reviewCount: 12702,
    tip: "Snag a table on an upper rooftop terrace café facing the gate right at dusk to capture the glowing lantern light against the blue tiles.",
    tips: [
      "The plaza just outside the gate is the primary drop-off and meeting point for petits taxis.",
      "Notice the framing through the central arch, which perfectly aligns with the twin minarets in the distance."
    ],
    ticketTypes: [{ name: "Public Gate Access", price: 0, currency: "MAD" }],
    includedServices: ["Free public access"],
    excludedServices: ["Café purchases"],
    address: "Place Bab Bou Jeloud, Bab Bou Jeloud, Fes 30030",
    coordinates: {
      lat: 34.06167,
      lng: -4.98389
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06167,-4.98389",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-royal-palace",
    city: "fes",
    name: "Dar al-Makhzen (Royal Palace of Fes)",
    neighborhood: "Fès Jdid",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture", "photographer"],
    vibeTags: ["regal", "geometric", "ornate", "iconic"],
    tags: [
      "authentic",
      "cultural-tour",
      "iconic-landmark",
      "instagrammable",
      "morning",
      "photo-spot",
      "walk-in"
    ],
    badges: ["architectural-landmark", "cultural-icon", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 1.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_ground", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 4,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 Hours (Exterior viewing only)",
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
    amenities: ["parking_perimeter", "panoramic_viewpoint"],
    restrictions: ["Interior palace grounds closed to the public; do not photograph armed royal guards directly"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "top-pick",
    description: "The primary royal residence in northern Morocco spanning 80 hectares. Place des Alaouites showcases seven monumental handcrafted bronze doors framed by intricate carved cedarwood and geometric zellige tiling.",
    shortValueProp: "Seven dazzling golden bronze gates showcasing master Moroccan royal craftsmanship.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1528127269322-539801943592"
    ],
    googleRating: 4.3,
    reviewCount: 3150,
    tip: "Visit between 08:30 and 10:30 AM when the morning sun shines directly onto the bronze gates without cast shadows.",
    tips: [
      "Easily combined on foot with a tour through the adjacent historic Mellah district.",
      "The vast open esplanade provides level terrain that is exceptionally comfortable for strollers and wheelchairs."
    ],
    ticketTypes: [{ name: "Exterior Esplanade Viewing", price: 0, currency: "MAD" }],
    includedServices: ["Free public plaza access"],
    excludedServices: ["Interior palace entry"],
    address: "Place des Alaouites, Fès Jdid, Fes 30000",
    coordinates: {
      lat: 34.05318,
      lng: -4.99225
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05318,-4.99225",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-marinid-tombs",
    city: "fes",
    name: "Marinid Tombs",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure", "photographer"],
    vibeTags: ["scenic", "historical", "nostalgic", "solemn"],
    tags: [
      "authentic",
      "golden-hour",
      "historical",
      "instagrammable",
      "off-the-beaten-path",
      "photo-spot",
      "sunset",
      "walk-in"
    ],
    badges: ["panoramic-view", "sunset-spot", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.8,
    transportMode: "taxi",
    transportModes: ["taxi", "walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 5,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 2,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "Open 24 Hours (Best during daylight / sunset)",
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
    amenities: ["panoramic_viewpoint", "street_parking"],
    restrictions: ["Unlit hilltop ruins; exercise caution and do not walk down alone late at night"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "top-pick",
    description: "The dramatic stone skeletal ruins of 14th-century Marinid royal mausoleums perched high on a hill north of Bab Guissa. The site commands the single most expansive panoramic overlook of the entire medina basin.",
    shortValueProp: "The definitive sunset overlook with sweeping panoramas of ancient Fes.",
    images: [
      "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401"
    ],
    googleRating: 4.4,
    reviewCount: 2000,
    tip: "Take a red petit taxi up to the hilltop 45 minutes before sunset, and arrange for the driver to wait or walk down to the nearby Hotel Les Mérinides terrace.",
    tips: [
      "Listen as the call to prayer (Adhan) echoes simultaneously from hundreds of medina minarets across the valley.",
      "Bring a light jacket in autumn or spring as hilltop winds can get chilly once the sun sinks."
    ],
    ticketTypes: [{ name: "Open Ruins Access", price: 0, currency: "MAD" }],
    includedServices: ["Free open site access"],
    excludedServices: ["Taxi transport"],
    address: "Colline des Mérinides, Bab Guissa, Fès El Bali, Fes 30000",
    coordinates: {
      lat: 34.069815,
      lng: -4.979703
    },
    googleMapsUrl: "https://maps.google.com/?q=34.069815,-4.979703",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-ibn-danan-synagogue",
    city: "fes",
    name: "Ibn Danan Synagogue",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "history"],
    vibeTags: ["historical", "spiritual", "tranquil", "intricate"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["hidden-gem", "historic-landmark", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 30,
    pricePerPerson: 30,
    entryPrice: 30,
    durationMinutes: 45,
    distanceFromCenterKm: 1.6,
    transportMode: "taxi",
    transportModes: ["taxi", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
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
    openingHours: "09:00 AM - 05:30 PM (Sun - Thu, closed Sat & Jewish holidays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:30" },
      { dayOfWeek: 1, open: "09:00", close: "17:30" },
      { dayOfWeek: 2, open: "09:00", close: "17:30" },
      { dayOfWeek: 3, open: "09:00", close: "17:30" },
      { dayOfWeek: 4, open: "09:00", close: "17:30" },
      { dayOfWeek: 5, open: "09:00", close: "15:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation"],
    restrictions: ["Closed on the Jewish Sabbath (Saturday) and Yom Kippur/major holidays"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "hidden-gem",
    description: "A beautifully restored 17th-century Jewish sanctuary founded by prominent merchant Mimoun Ben Sidan. Features original green-and-white chevron Moroccan floor tiles, an intricately carved wooden bimah, and an underground ritual mikveh bath.",
    shortValueProp: "The oldest and most intimate preserved synagogue in the historic Fes Mellah.",
    images: [
      "https://images.unsplash.com/photo-1562136014-944f77c8629b",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427"
    ],
    googleRating: 4.1,
    reviewCount: 383,
    tip: "Ask the resident guardian to show you down the steep stairs into the basement mikveh, fed by pure natural spring water.",
    tips: [
      "Head to the upper rooftop terrace for an unobstructed look over the white gravestones of the neighboring Jewish Cemetery.",
      "The guardian provides heartfelt, historic personal narration; giving a 20-30 MAD entry contribution is standard practice."
    ],
    ticketTypes: [{ name: "Guardian Entry Donation", price: 30, currency: "MAD" }],
    includedServices: ["Synagogue sanctuary access", "Mikveh view", "Rooftop terrace view"],
    excludedServices: ["Personal donation tips"],
    address: "Derb Ibn Danan, Mellah, Fès Jdid, Fes 30000",
    coordinates: {
      lat: 34.05263,
      lng: -4.99252
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05263,-4.99252",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-nejjarine-museum",
    city: "fes",
    name: "Nejjarine Museum of Wooden Arts & Crafts",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "luxury", "history"],
    vibeTags: ["architectural", "intricate", "ornate", "serene", "historical"],
    tags: [
      "authentic",
      "culture",
      "medina",
      "photo-spot",
      "relaxed",
      "relaxed-energy",
      "self-guided",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
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
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "17:00" },
      { dayOfWeek: 1, open: "10:00", close: "17:00" },
      { dayOfWeek: 2, open: "10:00", close: "17:00" },
      { dayOfWeek: 3, open: "10:00", close: "17:00" },
      { dayOfWeek: 4, open: "10:00", close: "17:00" },
      { dayOfWeek: 5, open: "10:00", close: "17:00" },
      { dayOfWeek: 6, open: "10:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "exhibition_hall", "gift_shop", "restrooms", "ticket_booth", "traditional_fountains"],
    restrictions: ["Photography of delicate wooden artefacts in exhibit glass cases is prohibited"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "architectural-gem",
    description: "Housed inside Funduq al-Najjarin, a brilliantly restored 18th-century merchants' inn. Displays monumental carved wooden doors, wedding chests, musical instruments, and antique carpenter tools arrayed across three cedar-lined balcony levels.",
    shortValueProp: "A breathtaking 18th-century caravanserai showcasing traditional master Moroccan woodwork.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      "https://images.unsplash.com/photo-1527219522447-b5368754a66a"
    ],
    googleRating: 4.5,
    reviewCount: 1229,
    tip: "Take the elevator or stairs to the rooftop café for mint tea and a quiet view over the carpenter's souk below.",
    tips: [
      "Admire the monumental 18th-century public drinking fountain (Saqiyya) situated right outside in Place Nejjarine.",
      "The central interior courtyard with its cedar timbering is among the most photogenic interior spaces in the medina."
    ],
    ticketTypes: [{ name: "Museum General Entry", price: 20, currency: "MAD" }],
    includedServices: ["Permanent collection access", "Rooftop café terrace access"],
    excludedServices: ["Café beverages"],
    address: "Place Nejjarine, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06476,
      lng: -4.97595
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06476,-4.97595",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-zaouia-moulay-idriss",
    city: "fes",
    name: "Zaouia Moulay Idriss II",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "quiet-mystic", "history"],
    vibeTags: ["spiritual", "solemn", "serene", "historical"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["spiritual-hub", "historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 Hours (Exterior view; interior worship restricted)",
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
    amenities: ["ablution_facilities_worshippers", "traditional_fountains"],
    restrictions: ["Non-Muslims cannot cross beyond the threshold doorway into the shrine"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "The sacred burial shrine of Moulay Idriss II, founder and patron saint of Fes. Considered the spiritual epicenter of the medina. While the interior is reserved for Muslim pilgrims, visitors can marvel at the brass mail slots, cedar canopies, and ornate tiled portals.",
    shortValueProp: "The venerated spiritual heart and patron saint mausoleum of medieval Fes.",
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7",
      "https://images.unsplash.com/photo-1550584552-4b3510859363"
    ],
    googleRating: 4.6,
    reviewCount: 180,
    tip: "Spot the wooden barrier beam (horm) suspended across the alleyway, which historically marked the boundary where pack animals were banned and sanctuary seekers gained legal immunity.",
    tips: [
      "Breathe in the sweet aroma of incense and orange blossom water wafting through the ornate brass doors.",
      "Explore the surrounding alleyways, which specialize in prayer rugs, candles, and traditional religious items."
    ],
    ticketTypes: [{ name: "Exterior Viewing", price: 0, currency: "MAD" }],
    includedServices: ["Free street-level architectural viewing"],
    excludedServices: ["Interior shrine entry for non-Muslims"],
    address: "Place Moulay Idriss, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06455,
      lng: -4.97511
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06455,-4.97511",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-al-qarawiyyin",
    city: "fes",
    name: "University of al-Qarawiyyin (Exterior)",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer", "history"],
    vibeTags: ["spiritual", "solemn", "regal", "historical", "iconic"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "iconic-landmark",
      "medina",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["cultural-icon", "must-see", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
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
    accessibilityFeatures: ["some_steps", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24 Hours (Exterior door view; active worship inside)",
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
    amenities: ["historical_documentation", "mosque_prayer_room", "traditional_fountains"],
    restrictions: ["Non-Muslims are strictly prohibited from entering the mosque interior or courtyard"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "Founded in 859 AD by Fatima al-Fihri, Al-Qarawiyyin is recognized by UNESCO and Guinness World Records as the oldest continually operating university in the world. Non-Muslims cannot enter, but you can glimpse the majestic marble courtyards through open portals.",
    shortValueProp: "The oldest existing, continually operating university on earth.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      "https://images.unsplash.com/photo-1596422846543-75c6fc1f4f41"
    ],
    googleRating: 4.6,
    reviewCount: 1878,
    tip: "To see the vast green tile roofs and interior courtyards from above, climb up to the rooftop terrace of the nearby Al-Attarine Madrasa.",
    tips: [
      "Peer respectfully into the open doors along the northern and southern facades to view the marble fountains and forest of horseshoe arches.",
      "The prestigious Qarawiyyin Library next door holds invaluable Islamic manuscripts dating back to the 9th century."
    ],
    ticketTypes: [{ name: "Street Exterior View", price: 0, currency: "MAD" }],
    includedServices: ["Free exterior view"],
    excludedServices: ["Mosque and university interior access"],
    address: "Qaa ar-Rwash, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06444,
      lng: -4.97333
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06444,-4.97333",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-cafe-clock",
    city: "fes",
    name: "Traditional Moroccan Cooking Class at Cafe Clock",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["premium", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["foodie", "culture", "first-timer"],
    vibeTags: ["cosy", "artistic", "sensory", "vibrant"],
    tags: [
      "active",
      "authentic",
      "cooking-class",
      "cultural-tour",
      "foodie",
      "medina",
      "workshop"
    ],
    badges: ["foodie-paradise", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 600,
    pricePerPerson: 600,
    entryPrice: 600,
    durationMinutes: 240,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:30 AM - 02:00 PM (By reservation)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "14:00" },
      { dayOfWeek: 1, open: "09:30", close: "14:00" },
      { dayOfWeek: 2, open: "09:30", close: "14:00" },
      { dayOfWeek: 3, open: "09:30", close: "14:00" },
      { dayOfWeek: 4, open: "09:30", close: "14:00" },
      { dayOfWeek: 5, open: "09:30", close: "14:00" },
      { dayOfWeek: 6, open: "09:30", close: "14:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["cafe", "restrooms", "traditional_restaurant"],
    restrictions: ["Advance reservation required at least 24 hours prior"],
    healthContraindications: ["Notify chef of severe food allergies upon booking"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "top-pick",
    description: "An acclaimed four-hour culinary masterclass that begins by exploring neighborhood souks to purchase seasonal vegetables, fresh herbs, and spices, followed by hands-on cooking of pastilla, tajines, and Moroccan salads.",
    shortValueProp: "Guided medina souk food shopping followed by authentic multi-course tajine cooking.",
    images: [
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    ],
    googleRating: 4.5,
    reviewCount: 1850,
    tip: "Book 48 hours in advance; the kitchen happily adapts dishes to vegetarian or vegan preferences upon request.",
    tips: [
      "Come hungry as you will sit down to feast on the full multi-course lunch you prepared on the scenic rooftop.",
      "You receive the printed recipe book to recreate authentic Fassi meals back home."
    ],
    ticketTypes: [{ name: "Full Cooking Class & Market Tour", price: 600, currency: "MAD" }],
    includedServices: ["Guided market souk shopping", "All ingredients", "Full 3-course lunch", "Recipe booklet"],
    excludedServices: ["Additional specialty café beverages"],
    address: "7 Derb El Magana, Talaa Kebira, Fès El Bali, Fes 30000",
    coordinates: {
      lat: 34.06201,
      lng: -4.98254
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06201,-4.98254",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-place-seffarine",
    city: "fes",
    name: "Place Seffarine",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "sensory-seeker"],
    vibeTags: ["sensory", "energetic", "historical", "authentic"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "photo-spot",
      "relaxed",
      "shopping",
      "walk-in"
    ],
    badges: ["cultural-immersion", "artisan-village", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
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
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 5,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 06:30 PM (Daily, artisans rest Fridays)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:30" },
      { dayOfWeek: 1, open: "08:30", close: "18:30" },
      { dayOfWeek: 2, open: "08:30", close: "18:30" },
      { dayOfWeek: 3, open: "08:30", close: "18:30" },
      { dayOfWeek: 4, open: "08:30", close: "18:30" },
      { dayOfWeek: 6, open: "08:30", close: "18:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "cafe"],
    restrictions: ["Active metal hammering noise may be overwhelming for sound-sensitive visitors"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "A small, shaded historic square resonant with the rhythmic clinking of coppersmiths. Craftsmen here hand-hammer gigantic brass couscoussiers, tea trays, boiling cauldrons, and lanterns using centuries-old Marinid techniques.",
    shortValueProp: "The rhythmic sensory square where master coppersmiths hand-hammer brassware.",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d"
    ],
    googleRating: 4.6,
    reviewCount: 677,
    tip: "Grab a seat under the giant plane tree at the corner mint tea shop to watch the coppersmiths shape glowing heated sheets without getting in their workspace.",
    tips: [
      "The square backs directly onto the historic Seffarine Madrasa and the venerable Qarawiyyin Library.",
      "Most metalworkers take Friday afternoons off for congregational prayers."
    ],
    ticketTypes: [{ name: "Public Square Access", price: 0, currency: "MAD" }],
    includedServices: ["Free public access"],
    excludedServices: ["Artisan copperware purchases"],
    address: "Place Seffarine, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06415,
      lng: -4.97257
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06415,-4.97257",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-rainbow-street",
    city: "fes",
    name: "Rainbow Street",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "photographer", "culture"],
    vibeTags: ["artistic", "vibrant", "cosy"],
    tags: [
      "authentic",
      "instagrammable",
      "medina",
      "off-the-beaten-path",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["photography-spot", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 15,
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
    accessibilityFeatures: ["cobblestone_paths", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "19:00" },
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "gift_shop"],
    restrictions: ["Narrow passageway; be courteous to through pedestrian traffic"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "hidden-gem",
    description: "A short, vivid open-air art gallery alley connecting Talaa Kebira and Talaa Seghira. Conceived by artist Mohssine Naji, the passageway features brightly painted floor flagstones, hanging tapestries, and vibrant local canvas art.",
    shortValueProp: "The most vibrant, color-drenched open-air street-art lane in the ancient medina.",
    images: [
      "https://images.unsplash.com/photo-1561715276-a2d087060f1d",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
    ],
    googleRating: 4.4,
    reviewCount: 320,
    tip: "Leaving a small tip of 10 MAD or buying a miniature painted tile directly supports the local artists who maintain the alleyway.",
    tips: [
      "An ideal short shortcut when transitioning between Talaa Kebira and Talaa Seghira.",
      "The walls are packed with creative quotes, paintings, and handmade jewellery."
    ],
    ticketTypes: [{ name: "Public Street Access", price: 0, currency: "MAD" }],
    includedServices: ["Free public lane access"],
    excludedServices: ["Artwork purchases"],
    address: "Derb Sidi Safi, Talaa Kebira, Fès El Bali, Fes 30000",
    coordinates: {
      lat: 34.06282,
      lng: -4.97984
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06282,-4.97984",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-borj-nord",
    city: "fes",
    name: "Borj Nord Arms Museum",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure", "history"],
    vibeTags: ["historical", "scenic", "solemn", "regal"],
    tags: [
      "16th-century-ramparts",
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "photo-spot",
      "saadian-dynasty",
      "walk-in"
    ],
    badges: ["historic-landmark", "panoramic-view", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 60,
    distanceFromCenterKm: 1.5,
    transportMode: "taxi",
    transportModes: ["taxi", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 3,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Tue - Sun, closed Mon)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "panoramic_viewpoint", "parking", "restrooms", "ticket_booth"],
    restrictions: ["Closed on Mondays"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "historical",
    description: "An imposing Saadian bastion fortress constructed in 1582 by Sultan Ahmad al-Mansur, influenced by Renaissance Portuguese military architecture. Houses the National Museum of Arms, boasting thousands of antique muskets, jewelled daggers, and cannons.",
    shortValueProp: "Saadian artillery fortress housing Morocco's premier historical weaponry collection.",
    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
    ],
    googleRating: 4.2,
    reviewCount: 187,
    tip: "Climb up onto the open rooftop platform of the bastion for a complete 360-degree overlook with clear vistas of both the old and new cities.",
    tips: [
      "Inspect the enormous 12-ton bronze Saadian cannon used during the historic Battle of the Three Kings.",
      "A red petit taxi can take you right up the fortress driveway from Bab Bou Jeloud in under 7 minutes."
    ],
    ticketTypes: [{ name: "Arms Museum Admission", price: 20, currency: "MAD" }],
    includedServices: ["Full military fortress and indoor arms exhibition access"],
    excludedServices: ["Personal guide fee"],
    address: "Avenue des Mérinides, Fès El Bali, Fes 30000",
    coordinates: {
      lat: 34.06725,
      lng: -4.98514
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06725,-4.98514",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-jewish-cemetery",
    city: "fes",
    name: "Jewish Cemetery of Fes",
    neighborhood: "Mellah",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "quiet-mystic"],
    vibeTags: ["solemn", "tranquil", "historical", "serene"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "relaxed",
      "sunset",
      "walk-in"
    ],
    badges: ["historic-memorial", "moving-experience", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 1.7,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Sun - Fri afternoon, closed Saturday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "14:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "panoramic_viewpoint"],
    restrictions: ["Modest attire required; men should cover heads (kippahs available at gate); closed Saturdays"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "hidden-gem",
    description: "A stark and poignant burial ground defined by hundreds of dazzling whitewashed, curved barrel-shaped tombs stretching down a hillside. Houses the revered white-and-blue mausoleum shrine of Solica (Sol Hachuel), a Moroccan Jewish heroine.",
    shortValueProp: "The sea of blinding whitewashed tombs reflecting Morocco's ancient Jewish heritage.",
    images: [
      "https://images.unsplash.com/photo-1508849789987-4e5333c12b78",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    ],
    googleRating: 4.3,
    reviewCount: 129,
    tip: "A tip of 10 to 20 MAD to the elderly caretaker who unlocks the gate and guides you to the Tomb of Solica is customary.",
    tips: [
      "The hillside offers a serene, elevated perspective across the ramparts of southern Fès Jdid.",
      "Paths between tombs are uneven and stepped; wear sturdy walking shoes."
    ],
    ticketTypes: [{ name: "Guardian Tip / Free Entry", price: 0, currency: "MAD" }],
    includedServices: ["Cemetery grounds access"],
    excludedServices: ["Customary guardian tip"],
    address: "Boulevard Allal Ben Abdallah, Mellah, Fes 30000",
    coordinates: {
      lat: 34.05191,
      lng: -4.99172
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05191,-4.99172",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-palais-el-glaoui",
    city: "fes",
    name: "Palais El Glaoui",
    neighborhood: "Batha",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "photographer"],
    vibeTags: ["nostalgic", "historical", "ornate", "serene"],
    tags: [
      "authentic",
      "cultural-tour",
      "medina",
      "off-the-beaten-path",
      "photo-spot",
      "private",
      "walk-in"
    ],
    badges: ["hidden-gem", "architectural-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 25,
    pricePerPerson: 25,
    entryPrice: 25,
    durationMinutes: 90,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "18:00" },
      { dayOfWeek: 1, open: "09:00", close: "18:00" },
      { dayOfWeek: 2, open: "09:00", close: "18:00" },
      { dayOfWeek: 3, open: "09:00", close: "18:00" },
      { dayOfWeek: 4, open: "09:00", close: "18:00" },
      { dayOfWeek: 5, open: "09:00", close: "18:00" },
      { dayOfWeek: 6, open: "09:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_courtyards", "traditional_fountains"],
    restrictions: ["Private residence; knock firmly on large outer timber door to be admitted"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "hidden-gem",
    description: "A monumental 19th-century aristocratic palace complex constructed by Thami El Glaoui, the infamous Pasha of Marrakech. Preserved in a poetic state of fading grandeur, visitors can wander through crumbling courtyards, grand salons, and an overgrown Andalusian garden.",
    shortValueProp: "A decaying aristocratic 19th-century palace offering authentic romantic solitude.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    googleRating: 4.3,
    reviewCount: 389,
    tip: "If the wooden entrance gate is shut, do not hesitate to knock loudly on the knocker; the family descendants live on-site and happily welcome guests.",
    tips: [
      "Inspect the resident painter's art studio located in one of the central reception halls.",
      "Notice the contrasting styles: traditional Fassi zellige tilework sits beneath European Art Deco chandeliers imported in the 1920s."
    ],
    ticketTypes: [{ name: "Family Admission Fee", price: 25, currency: "MAD" }],
    includedServices: ["Self-guided access to courtyards, grand reception halls, and gardens"],
    excludedServices: ["Personal guide services"],
    address: "Derb El Pacha, Ziat / Batha, Fes 30000",
    coordinates: {
      lat: 34.05775,
      lng: -4.98042
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05775,-4.98042",
  },

  // ════════════════════════════════════════════════════════════
  // ── NEW TOP PLACES (Source-Verified & Template-Compliant) ──
  // ════════════════════════════════════════════════════════════
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-batha-museum",
    city: "fes",
    name: "Musée Al Batha des Arts de l'Islam",
    neighborhood: "Batha",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["botanical", "architectural", "peaceful", "serene", "ornate"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "medina",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 06:00 PM (Wed - Mon, closed Tuesday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["exhibition_hall", "garden_seating_access", "restrooms", "ticket_booth", "traditional_fountains"],
    restrictions: ["Closed on Tuesdays"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "must-see",
    description: "Reopened following a meticulous six-year restoration, this 19th-century royal palace commissioned by Sultan Moulay Hassan I now serves as Morocco's National Museum of Islamic Arts. Highlights include 14th-century astrolabes, a 10th-century carved minbar, and classic cobalt 'Fez Blue' ceramics surrounding a fragrant Andalusian sunken garden.",
    shortValueProp: "Morocco's premier Islamic art museum housed in an exquisite 19th-century royal palace.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f"
    ],
    googleRating: 4.6,
    reviewCount: 940,
    tip: "Spend unhurried time in the Andalusian central garden under the hundred-year-old holm oak tree, which offers one of the most serene retreats in Fes.",
    tips: [
      "Examine the 14th-century scientific astrolabes that Islamic astronomers used to calculate planetary positions and prayer times.",
      "The museum sits right on Place Batha, making it an easy starting point before entering the medina via Bab Bou Jeloud."
    ],
    ticketTypes: [
      { name: "Foreign Visitor Adult Entry", price: 60, currency: "MAD" },
      { name: "Moroccan Citizens", price: 30, currency: "MAD" }
    ],
    includedServices: ["All Islamic Art galleries", "Andalusian palace gardens access"],
    excludedServices: ["Audio guide rental"],
    address: "5 Place Batha, Batha, Fes 30000",
    coordinates: {
      lat: 34.06015,
      lng: -4.98352
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06015,-4.98352",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-sahrij-madrasa",
    city: "fes",
    name: "Sahrij Madrasa",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "photographer", "quiet-mystic"],
    vibeTags: ["architectural", "tranquil", "intricate", "serene", "historical"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "medina",
      "off-the-beaten-path",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["architectural-gem", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 0.9,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "traditional_fountains"],
    restrictions: ["Covered knees and shoulders required"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "hidden-gem",
    description: "Built in 1321–1323 by Sultan Abu al-Hasan during the Marinid golden age, this madrasa gets its name from the large stone water basin ('sahrij') dominating its quiet central courtyard. Situated beside the Andalusian Mosque, it sees a fraction of the crowds of Bou Inania.",
    shortValueProp: "A peaceful 14th-century Marinid water-basin courtyard far from the crowded main souks.",
    images: [
      "https://images.unsplash.com/photo-1578912995204-7b7569e030ec",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    googleRating: 4.5,
    reviewCount: 310,
    tip: "Look for the reflections of the carved cedarwood eaves and stucco arches dancing on the surface of the central water basin.",
    tips: [
      "Combine your visit with an exterior walk around the monumental green gates of the adjacent Mosque of the Andalusians.",
      "The surrounding Andalusian quarter has a distinctly slower, authentic residential rhythm compared to the busier western medina."
    ],
    ticketTypes: [{ name: "Monument Entry Ticket", price: 20, currency: "MAD" }],
    includedServices: ["Full access to courtyard, reflecting pool, and prayer bay"],
    excludedServices: ["Guided tour fee"],
    address: "Derb el Horra, Adwat al-Andalus, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06282,
      lng: -4.96971
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06282,-4.96971",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-jnan-sbil",
    city: "fes",
    name: "Jardin Jnan Sbil (Bou Jeloud Gardens)",
    neighborhood: "Bab Bou Jeloud",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nature", "relaxation", "family"],
    vibeTags: ["botanical", "peaceful", "lush", "tranquil", "scenic"],
    tags: [
      "authentic",
      "botanical",
      "family",
      "nature",
      "nature-walk",
      "photo-spot",
      "picnic-spot",
      "relaxed",
      "step-free",
      "traditional-irrigation",
      "walk-in"
    ],
    badges: ["green-oasis", "peaceful-escape", "family-friendly"],
    // ── 2. FILTER — result-page filters & logistics ──
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
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "wide_flat_walkways", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "08:00 AM - 07:00 PM (Tue - Sun, closed Monday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["fountains", "garden_seating_access", "perimeter_benches", "restrooms", "shaded_benches", "walking_paths"],
    restrictions: ["Closed on Mondays; cycling and pets prohibited"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "The oldest public botanical park in Fes, established in the 18th century by Sultan Moulay Abdallah and enlarged by Sultan Moulay Hassan I. Spanning 7.5 hectares between Fès Jdid and Fès El Bali, it boasts over 3,000 botanical species, grand palm-lined avenues, fountains, and ancient working waterwheels (norias).",
    shortValueProp: "The historic 7.5-hectare royal gardens featuring century-old palms, lakes, and noria waterwheels.",
    images: [
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62"
    ],
    googleRating: 4.5,
    reviewCount: 5460,
    tip: "Inspect the historic wooden noria (waterwheel) on the western perimeter along Oued Fes to see how the royal gardens were historically irrigated.",
    tips: [
      "A perfect resting pause between exploring the busy souks of Fès El Bali and the Mellah of Fès Jdid.",
      "The bamboo grove and Mexican succulent garden provide beautiful shade during midday heat."
    ],
    ticketTypes: [{ name: "Public Garden Entry", price: 0, currency: "MAD" }],
    includedServices: ["Free park and gardens access"],
    excludedServices: ["Food concessions"],
    address: "Avenue Moulay El Hassan, Bab Bou Jeloud, Fes 30000",
    coordinates: {
      lat: 34.05964,
      lng: -4.98826
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05964,-4.98826",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-cherratine-madrasa",
    city: "fes",
    name: "Cherratine Madrasa",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "nomad"],
    vibeTags: ["historical", "architectural", "solemn", "tranquil"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "medina",
      "off-the-beaten-path",
      "photo-spot",
      "relaxed",
      "walk-in"
    ],
    badges: ["hidden-gem", "educational", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
    distanceFromCenterKm: 0.5,
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
    hasPrivateOption: true,
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
    openingHours: "09:00 AM - 03:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "15:00" },
      { dayOfWeek: 1, open: "09:00", close: "15:00" },
      { dayOfWeek: 2, open: "09:00", close: "15:00" },
      { dayOfWeek: 3, open: "09:00", close: "15:00" },
      { dayOfWeek: 4, open: "09:00", close: "15:00" },
      { dayOfWeek: 5, open: "09:00", close: "15:00" },
      { dayOfWeek: 6, open: "09:00", close: "15:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "traditional_fountains"],
    restrictions: ["Upper floor staircases are narrow and poorly lit"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "hidden-gem",
    description: "Commissioned in 1670 under Sultan Moulay al-Rashid, this is the first great madrasa of the Alaouite dynasty. Diverging from Marinid intimacy, its functional architecture accommodated over 200 Islamic students across three upper floors of dormitories arranged around corner patios.",
    shortValueProp: "The largest residential medersa in Fes with 200 original student quarters to explore.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    googleRating: 4.3,
    reviewCount: 165,
    tip: "You can wander freely through the maze-like upper dormitory floors to see exactly how students from across North Africa lived in spartan monastic cells.",
    tips: [
      "Notice how the Alaouite architectural style favors clean, austere plaster and massive courtyards rather than dense Marinid surface carving.",
      "Located only 100 meters from Place Seffarine in the ropemakers' quarter."
    ],
    ticketTypes: [{ name: "Madrasa Entry Ticket", price: 20, currency: "MAD" }],
    includedServices: ["Ground courtyard access", "Multi-floor dormitory exploration"],
    excludedServices: ["Guided tour service"],
    address: "Derb Zaouia, Souk Cherratine, Fès El Bali, Fes 30030",
    coordinates: {
      lat: 34.06482,
      lng: -4.97291
    },
    googleMapsUrl: "https://maps.google.com/?q=34.06482,-4.97291",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-borj-sud",
    city: "fes",
    name: "Borj Sud (South Bastion)",
    neighborhood: "Fès El Bali",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "scenic", "adventure"],
    vibeTags: ["scenic", "historical", "peaceful", "solemn"],
    tags: [
      "16th-century-ramparts",
      "authentic",
      "golden-hour",
      "historical",
      "off-the-beaten-path",
      "photo-spot",
      "saadian-dynasty",
      "sunset",
      "sunset-view",
      "walk-in"
    ],
    badges: ["panoramic-view", "sunset-spot", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.9,
    transportMode: "taxi",
    transportModes: ["taxi", "walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24 Hours (Best during late afternoon / sunset)",
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
    amenities: ["panoramic_viewpoint", "street_parking"],
    restrictions: ["Remote hilltop; take a taxi rather than walking up alone after dark"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "top-pick",
    description: "The 16th-century southern sister fortress to Borj Nord, built in 1582 by Sultan Saadi Ahmad al-Mansur following Portuguese military fort models. Perched high on the southern slopes, it commands the classic wide-angle panoramic photo view looking down into the ancient heart of Fès el-Bali.",
    shortValueProp: "The southern Saadian fortress offering the most comprehensive bird's-eye panorama of Fes.",
    images: [
      "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401"
    ],
    googleRating: 4.4,
    reviewCount: 420,
    tip: "Bring a telephoto lens or binoculars to pick out individual medina landmarks like the green roof of the Qarawiyyin Mosque and the minaret of Bou Inania.",
    tips: [
      "Unlike the Marinid Tombs, Borj Sud looks northward, providing soft, front-lit illumination over the medina during late afternoon.",
      "Have your taxi driver wait for 20 minutes while you take photographs from the rampart esplanade."
    ],
    ticketTypes: [{ name: "Exterior Ramparts View", price: 0, currency: "MAD" }],
    includedServices: ["Free scenic overlook access"],
    excludedServices: ["Taxi fare"],
    address: "Avenue Borj Sud, Fès El Bali, Fes 30000",
    coordinates: {
      lat: 34.05397,
      lng: -4.97025
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05397,-4.97025",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-pottery-ain-nokbi",
    city: "fes",
    name: "Ain Nokbi Artisan Pottery & Zellige Village",
    neighborhood: "Bab Ftouh",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["art-and-culture", "culture", "first-timer"],
    vibeTags: ["artistic", "sensory", "authentic", "historical"],
    tags: [
      "authentic",
      "cultural-tour",
      "local-life",
      "photo-spot",
      "shopping",
      "walk-in",
      "workshop"
    ],
    badges: ["artisan-village", "cultural-immersion", "educational"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 2.2,
    transportMode: "taxi",
    transportModes: ["taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 06:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:30" },
      { dayOfWeek: 1, open: "08:30", close: "18:30" },
      { dayOfWeek: 2, open: "08:30", close: "18:30" },
      { dayOfWeek: 3, open: "08:30", close: "18:30" },
      { dayOfWeek: 4, open: "08:30", close: "18:30" },
      { dayOfWeek: 5, open: "08:30", close: "18:30" },
      { dayOfWeek: 6, open: "08:30", close: "18:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["artisan_workshops", "gift_shop", "parking", "restrooms"],
    restrictions: ["Kilns and firing ovens radiate high heat; stay on marked visitor paths"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof ───────────────
    badge: "essential",
    description: "The dedicated artisan quarter just east of Bab Ftouh where all of Fes's world-renowned ceramic pottery and handcrafted zellige mosaic tiles are produced. Visitors receive free guided walks through the full process: clay kneading, foot-wheel shaping, cobalt glazing, olive-pit kiln firing, and chiselling zellige tesserae by hand.",
    shortValueProp: "Watch master craftsmen throw clay and hand-chisel geometric Moroccan zellige tilework.",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d"
    ],
    googleRating: 4.5,
    reviewCount: 1450,
    tip: "Watch the 'kassabi' craftsmen chip individual mosaic tiles with heavy hammer chisels; the sheer speed and geometric precision of their handiwork is astonishing.",
    tips: [
      "Workshops offer free informative tours; tipping your craft guide 20-30 MAD is customary if you do not buy ceramics.",
      "The cooperatives can safely crate and ship large custom tile fountains and dining tables internationally."
    ],
    ticketTypes: [{ name: "Cooperative Workshop Tour", price: 0, currency: "MAD" }],
    includedServices: ["Free guided workshop demonstration of pottery and zellige making"],
    excludedServices: ["Custom ceramics purchases", "Shipping costs"],
    address: "Quartier Ain Nokbi, Route de Sidi Boujida, Bab Ftouh, Fes 30000",
    coordinates: {
      lat: 34.05381,
      lng: -4.95422
    },
    googleMapsUrl: "https://maps.google.com/?q=34.05381,-4.95422",
  }
];