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
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture"],
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
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 60,
    transportMode: "walkable",
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
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The oldest and largest traditional leather tannery in Fes, operating since the 11th century. Witness artisans working in stone vessels filled with natural dyes to process and color hides.",
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
    ],
    googleRating: 4.2,
    reviewCount: 1075,
    tip: "Keep a handful of fresh mint leaves (often offered at the terrace entrance) near your nose to help temper the strong smell of ammonia used in the leather tanning process.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Hay Lablida, Chouara, Fes el-Bali, Fes 30030",
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
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "authentic",
      "cultural-tour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "relaxed",
      "step-free",
      "tripod-allowed",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
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
    description: "A stunning 14th-century Islamic school featuring intricate zellige tilework, carved stucco, and cedarwood detailing. The structure showcases some of the finest surviving Marinid craftsmanship in Morocco.",
    images: [
      "https://images.unsplash.com/photo-1578912995204-7b7569e030ec",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    googleRating: 4.5,
    reviewCount: 2502,
    tip: "Climb to the upper floor and look through the small wooden mashrabiya screens of the student quarters for an aerial perspective of the central courtyard.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Rue Talaa Kebira, Souk el-Attarine, Fes el-Bali, Fes 30030",
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
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "authentic",
      "cultural-tour",
      "golden-hour",
      "instagrammable",
      "medina",
      "photo-spot",
      "private",
      "relaxed",
      "step-free",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
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
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Built in the mid-1300s, this is one of the few active religious buildings in Fes open to non-Muslim visitors. It is celebrated for its peaceful courtyard, marble flooring, and highly decorated minaret.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9"
    ],
    googleRating: 4.4,
    reviewCount: 583,
    tip: "Aim to visit early in the morning when it opens at 9:00 AM to avoid crowds and experience the architecture in relative silence.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Rue Talaa Kebira, Fes el-Bali, Fes 30030",
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
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["authentic", "cultural-tour", "instagrammable", "medina", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 30,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The monumental western gateway to the historic medina, decorated with beautiful blue majolica tiles on the outside and green tiles on the inside. It serves as a bustling entry point where the medina's two main roads meet.",
    images: [
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc"
    ],
    googleRating: 4.4,
    reviewCount: 12702,
    tip: "Snag a table on the rooftop terrace of a nearby café near dusk to watch the light change over the gate and observe local street life.",
    tips: ["not available"],
    excludedServices: ["not available"],
    address: "Bab Bou Jeloud, Fes el-Bali, Fes 30030",
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
    neighborhood: "Fes el-Jdid",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture"],
    tags: ["authentic", "cultural-tour", "instagrammable", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The official residence of the King of Morocco in Fes, showcasing seven massive bronze doors with intricate golden details. While travelers cannot enter the palace itself, the facade is a classic photo stop.",
    images: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43",
      "https://images.unsplash.com/photo-1528127269322-539801943592"
    ],
    googleRating: 4.3,
    reviewCount: 3150,
    tip: "The sun shines directly on the golden gates in the morning, making it the ideal window for bright, shadow-free photography.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Royal+Palace+of+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-marinid-tombs",
    city: "fes",
    name: "Marinid Tombs",
    neighborhood: "El Ouragli (Northern Hills)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure"],
    tags: ["authentic", "instagrammable", "nature", "off-the-beaten-path", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
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
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The stone ruins of 14th-century monumental mausoleums set on a hill overlooking the ancient valley of Fes al-Bali. This vantage point provides an expansive panoramic view of the entire medina landscape.",
    images: [
      "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401"
    ],
    googleRating: 4.4,
    reviewCount: 2000,
    tip: "Hire a registered taxi to take you up for sunset, as the road up the hill can be steep and remote to walk back down alone after dark.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Marinid+Tombs,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-ibn-danan-synagogue",
    city: "fes",
    name: "Ibn Danan Synagogue",
    neighborhood: "Mellah (Jewish Quarter)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    durationMinutes: 45,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A private, carefully restored 17th-century Jewish house of worship located in the historic Mellah. It holds a beautifully preserved interior, old Torah scrolls, and a ritual bath (mikveh) in the basement.",
    images: [
      "https://images.unsplash.com/photo-1562136014-944f77c8629b",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427"
    ],
    googleRating: 4.1,
    reviewCount: 383,
    tip: "The local guardian of the synagogue can offer a short historical explanation and will often allow you onto the roof for a clear view of the white gravestones of the adjacent Jewish cemetery.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Aben+Danan+Synagogue,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-nejjarine-museum",
    city: "fes",
    name: "Nejjarine Museum of Wooden Arts & Crafts",
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "luxury"],
    tags: [
      "authentic",
      "culture",
      "medina",
      "private",
      "relaxed",
      "relaxed-energy",
      "self-guided",
      "walk-in",
      "workshop"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    durationMinutes: 60,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Housed inside an exquisitely restored 18th-century traveler's inn (fondouk). The museum displays a collection of traditional Moroccan woodwork, structural arches, tools, and household items.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      "https://images.unsplash.com/photo-1527219522447-b5368754a66a"
    ],
    googleRating: 4.5,
    reviewCount: 1229,
    tip: "While photography of the fragile antique wooden items is restricted, you are free to photograph the grand open courtyard and the sweeping architecture of the building.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Nejjarine+Museum,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-zaouia-moulay-idriss",
    city: "fes",
    name: "Zaouia Moulay Idriss II",
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "medina", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    description: "The sacred shrine of Fes's second founder, Moulay Idriss II, which is considered a spiritual heart of the city. While the inner sanctuary is reserved for Muslims, the decorated entrance doors can be viewed from the surrounding street.",
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7",
      "https://images.unsplash.com/photo-1550584552-4b3510859363"
    ],
    googleRating: 4.6,
    reviewCount: 180,
    tip: "Look out for the wooden barrier beam placed across the street approaching the shrine, historically used to prevent animals from entering the sacred sanctuary zone.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Zaouia+Moulay+Idriss+II,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-al-qarawiyyin",
    city: "fes",
    name: "University of al-Qarawiyyin (Exterior)",
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "authentic",
      "cultural-tour",
      "culture",
      "medina",
      "relaxed",
      "relaxed-energy",
      "self-guided",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    description: "Founded in 859 AD by Fatima al-Fihri, this site is recognized as one of the oldest continually operating institutions of higher learning. Non-Muslims are not allowed inside, but you can peer through the open doorways to see the large tiled courtyards.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      "https://images.unsplash.com/photo-1596422846543-75c6fc1f4f41"
    ],
    googleRating: 4.6,
    reviewCount: 1878,
    tip: "To get a bird's-eye view of the signature green tiled roofs of this sprawling complex, seek out neighboring rooftop terraces or look down from the roof of Al-Attarine Madrasa.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Mosque+and+University+of+al-Qarawiyyin,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-cafe-clock",
    city: "fes",
    name: "Traditional Moroccan Cooking Class at Cafe Clock",
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["active", "authentic", "cultural-tour", "medina", "private", "workshop"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 60,
    durationMinutes: 240,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
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
    description: "A hands-on, multi-hour culinary class that begins in the bustling medina food souks to select fresh local produce. You'll then learn to prepare a traditional multi-course Fassi meal in a historic home kitchen.",
    images: [
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    ],
    googleRating: 4.5,
    reviewCount: 1850,
    tip: "Reserve your spot at least 48 hours in advance, and feel free to let the kitchen staff know if you have specific dietary choices, as they are highly accommodating with vegetarian and vegan adaptations.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Cafe+Clock,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-place-seffarine",
    city: "fes",
    name: "Place Seffarine",
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "medina", "relaxed", "shopping", "walk-in"],
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A small, historic square defined by the rhythmic metal clinking of copper- and brass-smiths. Artisans here continue to hammer out massive boilers, tea trays, and ornate lanterns using centuries-old techniques.",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d"
    ],
    googleRating: 4.6,
    reviewCount: 677,
    tip: "The square can get quite loud during working hours, so take a seat at the small local tea shop in the corner to comfortably watch the craftsmen shape the hot metal.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Place+Seffarine,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-rainbow-street",
    city: "fes",
    name: "Rainbow Street",
    neighborhood: "Fes el-Bali (Medina)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: [
      "authentic",
      "instagrammable",
      "medina",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
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
    hasPrivateOption: true,
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A short, extremely colorful alleyway linking the medina's two main pedestrian avenues. Decorated by local painter Mohssine Naji, it features brightly painted stone floors, hanging carpets, and local artwork.",
    images: [
      "https://images.unsplash.com/photo-1561715276-a2d087060f1d",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
    ],
    googleRating: 4.4,
    reviewCount: 320,
    tip: "The local artists are generally welcoming and open to conversation. Leaving a small tip or purchasing a small painted tile helps support this community street-art space.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Rainbow+Street+Art,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-borj-nord",
    city: "fes",
    name: "Borj Nord Arms Museum",
    neighborhood: "El Ouragli (Northern Hills)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "adventure"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "private", "walk-in"],
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
    description: "A monumental 16th-century fortress built by the Saadian dynasty to protect the old city below. Today, it acts as a military museum exhibiting rare antique swords, daggers, and historic muskets.",
    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
    ],
    googleRating: 4.2,
    reviewCount: 187,
    tip: "The flat rooftop of the fortress is open to visitors and offers a clean, 360-degree overlook of the entire medina with fewer crowds than the nearby ruins.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Borj+Nord,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-jewish-cemetery",
    city: "fes",
    name: "Jewish Cemetery of Fes",
    neighborhood: "Mellah (Jewish Quarter)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
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
    hasSunsetView: true,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A stark and historic burial ground characterized by sea-of-white rounded gravestones sprawling across a gentle hill. It includes the resting place of Solica, a young local Jewish folk heroine.",
    images: [
      "https://images.unsplash.com/photo-1508849789987-4e5333c12b78",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    ],
    googleRating: 4.3,
    reviewCount: 29,
    tip: "While admission is free, there is usually a local community guardian on-site who will unlock the gate for you. A tip of 10 to 20 dirhams for his time is custom.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Jewish+Cemetery,+Fes,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "fes-palais-el-glaoui",
    city: "fes",
    name: "Palais El Glaoui",
    neighborhood: "Fes el-Bali (Ziat)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "medina", "off-the-beaten-path", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2.5,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A sprawling, 19th-century palace left in a beautiful state of fading grandeur. Wander through crumbling courtyards, empty pools, and tiled rooms that showcase the monumental scale of old Moroccan architecture.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ],
    googleRating: 4.3,
    reviewCount: 389,
    tip: "The property is still privately kept by a local family. If the front gate is closed, knock firmly; they are happy to let visitors explore the rooms and courtyards for a small entry tip.",
    tips: ["not available"],
    excludedServices: ["not available"],
    googleMapsUrl: "https://maps.google.com/?q=Palais+El+Glaoui,+Fes,+Morocco",
  }
];
