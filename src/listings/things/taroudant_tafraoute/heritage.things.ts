/**
 * =========================================================================
 * [TAROUDANT_TAFRAOUTE] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/taroudant_tafraoute/index.ts
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
 *               hiddenCostsInfo, worries, address, coordinates, googleMapsUrl, parkingInfo,
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
 *   // ── 4. WORRIES ("Things You're Worried About!") — one entry per traveler
 *   // worry. Keep tag/description "not available" until verified web research.
 *   // tag = 1-2 words max, an adjective naming the worry's state (e.g. "Clean",
 *   // "Filtered") — never just good/bad. description = max 2 lines.
 *   worries: [
 *     { id: "activity-safety", title: "Safety", icon: "shield", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-scams", title: "Scams", icon: "warning", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "not available", description: "not available", state: "pending" },
 *     { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "not available", description: "not available", state: "pending" },
 *   ],
 *   address: "",
 *   coordinates: { lat: 0, lng: 0 },
 *   googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=",
 * }
 * =========================================================================
 */
/**
 * =========================================================================
 * [TAROUDANT] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file: Heritage & Culture for Taroudant ("Little Marrakech")
 * Authorized Neighborhoods:
 *   - Touristic:     Médina (Derb Jdid, Kasbah), Bab Zorgan, Bab Targhount
 *   - Low-Touristic: Lasstah, Ouled Bounouna, Hay Al Mohammadi
 * =========================================================================
 */

import type { ThingToDoListing } from '../../types';

export const taroudantTafraouteHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-remparts-caleche",
    city: "taroudant",
    name: "Remparts de Taroudant & Calèche Promenade",
    neighborhood: "Médina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "history", "photography"],
    vibeTags: ["historical", "scenic", "iconic", "nostalgic"],
    tags: [
      "16th-century-ramparts",
      "adobe-fortress",
      "authentic",
      "calèche-ride",
      "cultural-tour",
      "golden-hour",
      "iconic-landmark",
      "photo-spot",
      "relaxed",
      "saadian-dynasty",
      "sunset-view",
      "walk-in"
    ],
    badges: ["historic-landmark", "must-see", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 120, // 100-120 MAD standard negotiated carriage fare for the full perimeter loop
    pricePerPerson: 60,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.2,
    transportMode: "mixed",
    transportModes: ["drive", "taxi", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_ground", "perimeter_ramps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Best experienced 08:30 AM - 11:00 AM or 04:30 PM - 07:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "parking_perimeter"],
    restrictions: ["confirm the total calèche fare before boarding to avoid confusion"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Encircling the ancient city with 7.5 kilometers of continuous red-ochre rammed earth (pisé), the Saadian ramparts of Taroudant are among the best preserved defensive fortifications in Morocco. Punctuated by 130 fortified towers and 19 bastions, touring the perimeter in a traditional horse-drawn calèche at golden hour reveals sweeping views of the walls glowing against the snowcapped High Atlas peaks.",
    shortValueProp: "The quintessential 7.5-kilometer 16th-century Saadian fortress walls toured by traditional horse-drawn carriage.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 1840,
    badge: "essential",
    tip: "Board your carriage outside Place Assarag or Bab El Kasbah one hour before dusk; the low angle of the setting sun turns the mudbrick walls a rich copper-pink.",
    tips: [
      "The official calèche rate is around 100 to 120 MAD for the entire 1-hour circular ride; establish this upfront with the driver.",
      "Calèche drivers often offer to stop at Bab Zorgan and the tanneries; feel free to customize your photo stops along the circuit."
    ],
    highlights: [
      "Over 7.5 km of intact 16th-century Saadian rammed-earth ramparts built under Mohammed ash-Sheikh",
      "Panoramic views across the surrounding palm groves toward the Mount Toubkal Atlas chain",
      "Relaxing open-air calèche ride stopping at historic arched gates and watchtowers"
    ],
    emotionalBenefits: [
      "Sense the tranquility of southern Morocco far away from mass-market tourist hubs",
      "Watch local life unfold peacefully along the shade of centuries-old earthen bastions"
    ],
    ticketTypes: [
      { name: "Full Ramparts Calèche Carriage Tour (up to 4 pax)", price: 120, currency: "MAD" },
      { name: "Self-Guided Walking Tour", price: 0, currency: "MAD" }
    ],
    includedServices: ["1-hour horse-drawn carriage ride around the exterior rampart loop"],
    excludedServices: ["driver tip", "entrance to monuments inside the medina"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "The perimeter roadway has wide sidewalks and tranquil traffic; pleasant at all hours.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Negotiate First", description: "Agree on the complete carriage fare (100–120 MAD total, not per person) prior to departure.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fair Fare", description: "Extremely affordable compared to Marrakech calèche rentals.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "16th-Century Pisé", description: "Genuine Saadian mudbrick ramparts constructed in 1515–1528 still standing complete.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Completely relaxing carriage ride with zero climbing or exertion required.", state: "verified" },
    ],
    address: "Boulevard des Remparts, 83000 Taroudant",
    coordinates: { lat: 30.4705, lng: -8.8770 },
    googleMapsUrl: "https://www.google.com/maps/place/Remparts+de+Taroudant/@30.4705,-8.8770,16z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-bab-el-kasbah",
    city: "taroudant",
    name: "Bab El Kasbah & Ramparts Walkway",
    neighborhood: "Médina (Kasbah)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "photography", "first-timer"],
    vibeTags: ["regal", "historical", "architectural", "peaceful"],
    tags: [
      "16th-century-ramparts",
      "adobe-fortress",
      "authentic",
      "cultural-tour",
      "historical",
      "iconic-landmark",
      "photo-spot",
      "photography",
      "relaxed",
      "saadian-kasbah",
      "sunset-view",
      "walk-in"
    ],
    badges: ["historic-landmark", "must-see", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daylight recommended)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "shaded_benches"],
    restrictions: ["steep steps without guardrails on the battlement platform; supervise children"],
    healthContraindications: ["stairs required to reach the upper battlements"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The grandest of Taroudant's nine gates, Bab El Kasbah (also known as Bab Essalsla) serves as the formal entrance into the former Saadian and Alaouite government citadel. Approached via an avenue lined with sweet orange trees, its massive horseshoe arches lead to an internal stone staircase where travelers can climb directly onto the ramparts to admire the gardens of the Kasbah.",
    shortValueProp: "The most ornate gate in Taroudant with stone stairs leading directly onto the elevated Saadian battlements.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 420,
    badge: "historic-landmark",
    tip: "Climb the steps inside the gatehouse in the late afternoon to photograph the sun illuminating the palm groves stretching across the eastern plain.",
    tips: [
      "This is one of the rare points where visitors can walk along the upper walls of Taroudant.",
      "A quiet municipal garden sits right outside the gate, ideal for resting in the shade."
    ],
    highlights: [
      "Imposing triple-arched Moorish portal dating to the 16th and 17th centuries",
      "Direct staircase access to walk atop the battlements of the old Sultan's citadel",
      "Stunning views over the Pasha's palace gardens, date palms, and Atlas foothills"
    ],
    emotionalBenefits: [
      "Step into the defensive mindset of medieval Moroccan desert garrisons",
      "Enjoy an uncrowded vantage point over the city's red earthen rooftops"
    ],
    ticketTypes: [{ name: "Public Gate & Ramparts Access", price: 0, currency: "MAD" }],
    includedServices: ["free access to gatehouse and upper observation walkway"],
    excludedServices: ["guided commentary"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Watch Steps", description: "Stone steps to the ramparts can be uneven; hold on to the sidewalls when descending.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Completely open historic gate; no ticket touts or unauthorized fees.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Totally Free", description: "Public historical monument with free access year-round.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Authentic Gate", description: "Original defensive bastion guarding the royal Kasbah quarter since the 1500s.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Short Climb", description: "Around 25 ancient stone steps to access the elevated battlement platform.", state: "verified" },
    ],
    address: "Avenue Moulay Rachid, Quartier Kasbah, 83000 Taroudant",
    coordinates: { lat: 30.4725, lng: -8.8746 },
    googleMapsUrl: "https://www.google.com/maps/place/Bab+El+Kasbah/@30.4725,-8.8746,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-place-assarag",
    city: "taroudant",
    name: "Place Assarag (Place Al-Alaouiyine)",
    neighborhood: "Médina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad", "sensory-seeker"],
    vibeTags: ["vibrant", "energetic", "iconic", "sensory"],
    tags: [
      "authentic",
      "cultural-tour",
      "local-life",
      "market",
      "medina",
      "morning",
      "photo-spot",
      "relaxed",
      "street-food",
      "walk-in"
    ],
    badges: ["cultural-icon", "must-see", "market-experience"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_ground", "wide_flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Peak social atmosphere 05:00 PM - 10:30 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "shaded_benches", "atm_nearby", "fresh_juice_bars"],
    restrictions: ["respect local sensitivities when photographing entertainers and musicians"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The lively public forum of Taroudant, Place Assarag (officially Place Al-Alaouiyine) is the social nexus of the medina where daily life unfolds under shaded arcades. Surrounded by historic open-air cafes, juice stands, and the entrances to the covered souks, this square comes alive in the late afternoon with Berber storytellers, snake charmers, music performers, and families enjoying their evening paseo.",
    shortValueProp: "The vibrant beating heart of Taroudant's medina lined with lively terrace cafes and street performers.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1000&q=80"
    ],
    googleRating: 4.3,
    reviewCount: 1620,
    badge: "essential",
    tip: "Grab a seat on the terrace of Café de la Place or Café El Kasbah around 5:30 PM for a fresh mint tea or spiced spiced coffee and watch the square shift from daytime commerce to evening entertainment.",
    tips: [
      "A small tip (5–10 MAD) is polite if you photograph snake charmers or street musicians performing in the center.",
      "Direct entry point to the covered Souk Arabe and the pedestrian alleys leading toward Place Talmoklate."
    ],
    highlights: [
      "Relaxed local equivalent to Marrakech's Jemaa el-Fna without high-pressure touts",
      "Traditional arcaded terrace cafes serving freshly pressed Souss orange juice and mint tea",
      "Authentic hub for horse-drawn calèche departures and pedestrian medina strolls"
    ],
    emotionalBenefits: [
      "Experience genuine Moroccan community life where locals outnumber tourists ten-to-one",
      "Relax under the evening palm trees with zero aggressive sales tactics"
    ],
    ticketTypes: [{ name: "Open Public Square Access", price: 0, currency: "MAD" }],
    includedServices: ["public square access"],
    excludedServices: ["café orders", "musician tips"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Bustling family-friendly square with constant presence of local authorities and shopkeepers.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Pressure", description: "Far calmer than Marrakech; performers expect a small tip only if you stop to watch.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Local Rates", description: "Mint tea and fresh orange juice cost 10–15 MAD at any of the surrounding cafes.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Civic Soul", description: "True town square where Roudanis gather daily to talk politics, trade, and socialize.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Step Free", description: "Flat, paved plaza fully accessible for strollers and gentle walking.", state: "verified" },
    ],
    address: "Place Al-Alaouiyine (Place Assarag), Médina, 83000 Taroudant",
    coordinates: { lat: 30.4717, lng: -8.8787 },
    googleMapsUrl: "https://www.google.com/maps/place/Place+Assarag/@30.4717,-8.8787,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-souk-arabe",
    city: "taroudant",
    name: "Souk Arabe (Artisanal & Silversmith Souk)",
    neighborhood: "Médina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "sensory-seeker"],
    vibeTags: ["intricate", "sensory", "historical", "cosy"],
    tags: [
      "authentic",
      "cultural-tour",
      "market",
      "medina",
      "photo-spot",
      "relaxed",
      "shopping",
      "walk-in",
      "workshop"
    ],
    badges: ["cultural-immersion", "market-experience", "shopping-hub"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 08:30 PM (Daily, some stalls close briefly Friday midday)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "gift_shop", "shaded_courtyards"],
    restrictions: ["ask permission before photographing artisans working in their stalls"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Opening directly off Place Assarag along Rue Bin-Anzarane, the Souk Arabe is Taroudant's covered artisanal bazaar. Renowned throughout Morocco for its silversmiths and master woodcarvers, this unhurried labyrinth showcases heavy Berber fibulae, engraved brass teapots, hand-tooled leather ottomans, and fragrant cedar chests crafted right before your eyes without high-pressure sales pitches.",
    shortValueProp: "Taroudant's peaceful covered artisanal market famed for Berber silver jewelry, leatherwork, and carved cedar.",
    images: [
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 980,
    badge: "top-pick",
    tip: "Inspect the hallmarks and weight on silver jewelry; Taroudant is celebrated for antique Amazigh enamel pieces (niello) and filigree earrings at a fraction of major city prices.",
    tips: [
      "Bargaining is expected but conducted gently with polite conversation over tea.",
      "The craftsmen in the wood turning and copper alleys are happy to show their techniques to curious visitors."
    ],
    highlights: [
      "Authentic Amazigh silver jewelry workshops creating handcrafted fibulae and amber necklaces",
      "Traditional woodworkers turning fragrant cedar and walnut bowls and antique door panels",
      "Relaxed, uncrowded shopping environment where artisans welcome questions without hassle"
    ],
    emotionalBenefits: [
      "Delight in finding unique handmade heirlooms straight from the master craftsmen",
      "Enjoy conversations with multigen-generational artisans preserving ancestral trade secrets"
    ],
    ticketTypes: [{ name: "Free Market Admission", price: 0, currency: "MAD" }],
    includedServices: ["market exploration"],
    excludedServices: ["artisan purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Tight-knit artisan community where tourists are treated with high respect.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Low Hassle", description: "Unlike Marrakech souks, shopkeepers here will not follow you or coerce purchases.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Bargain", description: "Prices start considerably lower than in northern imperial cities; fair bargaining applies.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Real Silver", description: "Reputable family jewellers selling genuine high-grade silver stamped with regional marks.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy Stroll", description: "Paved, covered medina alleyways with gentle pedestrian foot traffic.", state: "verified" },
    ],
    address: "Rue Bin-Anzarane, Médina, 83000 Taroudant",
    coordinates: { lat: 30.4722, lng: -8.8775 },
    googleMapsUrl: "https://www.google.com/maps/place/Souk+Arabe+Taroudant/@30.4722,-8.8775,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-souk-berbere",
    city: "taroudant",
    name: "Souk Berbère Jnane El Jamaa (Place Talmoklate)",
    neighborhood: "Médina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["foodie", "culture", "sensory-seeker"],
    vibeTags: ["sensory", "vibrant", "authentic", "chaotic"],
    tags: [
      "anti-atlas",
      "authentic",
      "cultural-tour",
      "foodie",
      "local-life",
      "market",
      "medina",
      "morning",
      "photo-spot",
      "shopping",
      "street-food",
      "walk-in"
    ],
    badges: ["cultural-immersion", "foodie-paradise", "market-experience"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "ground_floor_access", "step_free_paved_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "08:30 AM - 08:00 PM (Daily, Thursday and Sunday weekly market peaks)",
    paymentMethods: ["cash_mad"],
    amenities: ["food_stalls", "fresh_juice_bars", "atm_nearby"],
    restrictions: ["watch for passing bicycles and motorbikes in the narrower aisles"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Centered around Place Talmoklate (Place An-Nasr) and the Jnane El Jamaa market hall, the Souk Berbère is the essential market where mountain Amazigh villagers trade with townspeople. Pyramids of fragrant cumin, wild mountain thyme, pure Taliouine saffron, freshly harvested Souss olives, and hand-pressed culinary argan oil fill the air with intoxicating southern aromas.",
    shortValueProp: "The vibrant everyday market for Souss valley produce, mountain saffron, pure argan oil, and terracotta cookware.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 1120,
    badge: "must-see",
    tip: "Look for certified cooperatives selling pure culinary argan oil (roasted, nutty flavor) and cosmetic argan oil (cold-pressed); sample with fresh bread and wildflower honey.",
    tips: [
      "Taliouine saffron is sold by the gram here; make sure to look for whole crimson threads rather than powders.",
      "Visit in the morning between 09:30 AM and 11:30 AM when produce arrivals from the Anti-Atlas foothills are freshest."
    ],
    highlights: [
      "Vivid herbalist stalls displaying regional dried medicinal roots, mint varieties, and mountain honey",
      "Piles of hand-thrown terracotta cooking tajines and traditional unglazed clay water vessels",
      "True community food market reflecting the bountiful agricultural valley of the Souss"
    ],
    emotionalBenefits: [
      "Immerse your senses in the authentic flavors and aromas of southern Moroccan cooking",
      "Support small regional farmers and family spice-traders directly"
    ],
    ticketTypes: [{ name: "Public Market Walk", price: 0, currency: "MAD" }],
    includedServices: ["free market access"],
    excludedServices: ["spices, honey, and produce purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure Market", description: "Bustling with local shoppers; watch your pockets during peak hours as in any market.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Authentic Goods", description: "Genuine herbs and spices; buy whole saffron threads rather than pre-ground powders.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "True Local", description: "Prices are marked or sold by honest weight; olives and spices cost local market rates.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Farmer Direct", description: "Producers travel directly from Anti-Atlas villages to sell honey, saffron, and almonds.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Level Paths", description: "Smooth walking surface inside the covered market stalls; easily accessible.", state: "verified" },
    ],
    address: "Place Talmoklate / Souk Jnane El Jamaa, Médina, 83000 Taroudant",
    coordinates: { lat: 30.4735, lng: -8.8765 },
    googleMapsUrl: "https://www.google.com/maps/place/Marche+Jnane+El+Jamaa/@30.4735,-8.8765,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-tanneries-bab-targhount",
    city: "taroudant",
    name: "Tanneries de Taroudant (Dar Dbagh de Bab Targhount)",
    neighborhood: "Bab Targhount",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "culture", "sensory-seeker"],
    vibeTags: ["historical", "sensory", "authentic", "chaotic"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "photo-spot",
      "relaxed",
      "walk-in",
      "workshop"
    ],
    badges: ["cultural-immersion", "historic-landmark", "artisan-village"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD voluntary guide/caretaker tip
    pricePerPerson: 20,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasLocalGuide: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "08:30 AM - 06:00 PM (Saturday to Thursday, lighter activity Fridays)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "gift_shop", "parking"],
    restrictions: ["strong organic odors from tanning vats; fresh mint sprigs provided"],
    healthContraindications: ["respiratory sensitivity to pungent organic aromas"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Located just outside the monumental Bab Targhount gate at the western edge of the ramparts, Taroudant's open-air tanneries operate exactly as they did in medieval times. Unlike the multi-tiered tourist lookouts of Fès, here visitors walk alongside master tanneurs working hides of goat, sheep, cow, and camel in stone vats using natural pigeon lime, mimosa bark, and pomegranate rind.",
    shortValueProp: "Authentic, ground-level leather tanneries operating with centuries-old manual methods outside Bab Targhount.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
    ],
    googleRating: 4.0,
    reviewCount: 310,
    badge: "hidden-gem",
    tip: "A local worker will hand you a sprig of fresh mint at the entrance to hold under your nose and walk you through the vats; give him a 20 MAD tip for an informative 20-minute tour.",
    tips: [
      "The small adjacent leather workshops offer camel leather sandals, poufs, and satchels at honest artisan prices.",
      "Wear sturdy shoes as the ground around the open washing basins can be damp and uneven."
    ],
    highlights: [
      "Intimate, ground-level view of manual hide tanning with zero automated machinery",
      "Natural organic coloring processes utilizing poppy petals, saffron, indigo, and cedar bark",
      "Small cooperative workshops making bespoke leather goods right next to the drying racks"
    ],
    emotionalBenefits: [
      "Appreciate the sheer physical labor and ancestral heritage behind every handmade leather piece",
      "Experience an untouched, tourist-free corner of working Moroccan craftsmanship"
    ],
    ticketTypes: [{ name: "Artisan Tanning Guided Stroll", price: 20, currency: "MAD" }],
    includedServices: ["entry to tanning yards", "mint sprig"],
    excludedServices: ["personal guide tip (20 MAD standard)", "shop goods"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Uneven Mud", description: "Wet stone pathways around the soaking vats; watch your step to avoid puddles.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Tip Expected", description: "The guiding tanner will guide you and expect 20 MAD; agree pleasantly upon entry.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Direct Source", description: "Bags, belts, and slippers in the on-site cooperative are significantly cheaper than in town.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "100% Manual", description: "Purely manual artisanal trade passed from father to son for five centuries.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Pungent Smell", description: "The organic smell of natural tanning is intense; keep your mint sprig close.", state: "verified" },
    ],
    address: "Extérieur Bab Targhount, 83000 Taroudant",
    coordinates: { lat: 30.4730, lng: -8.8890 },
    googleMapsUrl: "https://www.google.com/maps/place/Tannerie+Taroudant/@30.4730,-8.8890,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-bab-zorgan",
    city: "taroudant",
    name: "Bab Zorgan & Leather Craft Quarter",
    neighborhood: "Bab Zorgan",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["historical", "architectural", "authentic"],
    tags: [
      "16th-century-ramparts",
      "authentic",
      "cultural-tour",
      "historical",
      "local-life",
      "medina",
      "photo-spot",
      "relaxed",
      "shopping",
      "walk-in",
      "workshop"
    ],
    badges: ["historic-landmark", "artisan-village", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.7,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "ground_floor_access", "step_free_paved_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Craft workshops operate 09:00 AM - 07:00 PM)",
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "street_parking", "walking_paths"],
    restrictions: ["watch for local traffic passing through the ancient arched portal"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Piercing the southern curtain wall of Taroudant's fortifications, Bab Zorgan is one of the five original 16th-century gates designed with a classic defensive bent-axis (porte coudée). The vibrant neighborhood just inside the gate is the spiritual home of the city's leather artisans, lined with modest workshops stitching traditional yellow leather babouches and ceremonial saddlery.",
    shortValueProp: "Historic southern defensive gate anchoring Taroudant's traditional leather slipper cobblers and saddlers.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1000&q=80"
    ],
    googleRating: 4.3,
    reviewCount: 380,
    badge: "historical",
    tip: "Seek out the small cobbler shops inside the gate where artisans custom-fit genuine leather babouches with soft goat-skin lining and recycled tire-tread soles.",
    tips: [
      "The massive pointed horseshoe arch provides an ideal frame for architectural photography in the early morning light.",
      "Calèche drivers can drop you right at the gate for a quiet self-guided walk through the southern residential lanes."
    ],
    highlights: [
      "Monumental Saadian earthen gatehouse with preserved crenellations and defensive slits",
      "Working district of shoe craftsmen, cobblers, and saddle makers working on wooden lasts",
      "Authentic neighborhood atmosphere untouched by souvenir commercialization"
    ],
    emotionalBenefits: [
      "Discover the quiet dignity of Moroccan neighborhood craftsmanship",
      "Admire ingenious medieval military architecture designed to resist cavalry charges"
    ],
    ticketTypes: [{ name: "Public Gate & Workshop District", price: 0, currency: "MAD" }],
    includedServices: ["free public access"],
    excludedServices: ["custom shoe orders"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Peaceful residential quarter where families and artisans greet visitors warmly.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Hustle", description: "Cobblers are focused on their craft and do not employ touts or high-pressure tactics.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Artisan Direct", description: "Handmade leather babouches range between 60 and 90 MAD directly from the maker.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Hand Stitched", description: "Real leather slippers stitched by hand on site rather than mass-produced in factories.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Flat Walking", description: "Level roads and alleyways suitable for walking at an unhurried pace.", state: "verified" },
    ],
    address: "Boulevard Hassan II, Bab Zorgan, 83000 Taroudant",
    coordinates: { lat: 30.4682, lng: -8.8795 },
    googleMapsUrl: "https://www.google.com/maps/place/Bab+Zorgan/@30.4682,-8.8795,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-grande-mosquee",
    city: "taroudant",
    name: "Grande Mosquée de Taroudant (Al-Jami' al-Kabir)",
    neighborhood: "Médina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "art-and-culture"],
    vibeTags: ["spiritual", "regal", "historical", "geometric"],
    tags: [
      "architectural",
      "authentic",
      "cultural-tour",
      "culture",
      "historical",
      "iconic-landmark",
      "medina",
      "photo-spot",
      "relaxed",
      "saadian-dynasty",
      "walk-in"
    ],
    badges: ["historic-landmark", "spiritual-hub", "architectural-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_exterior_view", "flat_ground", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Exterior view open 24 hours (Interior reserved for Muslim worshippers)",
    paymentMethods: ["cash_mad"],
    amenities: ["mosque_prayer_room", "ablution_facilities_worshippers"],
    restrictions: ["non-Muslims cannot enter the prayer hall; exterior architecture viewable from the square"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The historical religious center of the Souss valley, the Grande Mosquée was enlarged in the mid-16th century by the Saadian Sultan Mohammed ash-Sheikh when Taroudant served as his imperial capital. Anchored by a stately 27-meter minaret adorned with classic geometric brickwork and Kufic calligraphy, this monumental house of worship remains the cultural soul of the old city.",
    shortValueProp: "The 16th-century Saadian Grand Mosque and 27-meter minaret commanding the medina's skyline.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 520,
    badge: "historic-landmark",
    tip: "Stand at the plaza corner on Rue Jamaa Lakbir just before the Maghrib prayer at dusk to hear the call to prayer echo against the ancient earthen ramparts.",
    tips: [
      "While the interior is reserved for religious worship, the majestic wooden doors and exterior carved stucco arches are openly viewable.",
      "The quiet residential streets radiating around the mosque contain some of the oldest preserved riad doorways in Taroudant."
    ],
    highlights: [
      "Impressive 27-meter square minaret inspired by Almohad proportions and Saadian ornamental brickwork",
      "Historical center of higher Islamic learning where scholars taught astronomy and Islamic jurisprudence",
      "Carefully reconstructed under royal patronage following a historic fire to preserve its original wood and plaster details"
    ],
    emotionalBenefits: [
      "Sense the serene spiritual aura that has anchored daily life in the Souss for half a millennium",
      "Appreciate the master woodcarvers and plaster artisans of Taroudant who restored its beauty"
    ],
    ticketTypes: [{ name: "Exterior Architectural Viewing", price: 0, currency: "MAD" }],
    includedServices: ["public exterior view"],
    excludedServices: ["interior entry for non-worshippers"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Peaceful", description: "Quiet religious precinct where local residents take pride in maintaining order.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Touts", description: "Zero commercial harassment; a respectful spiritual quarter.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "No Charge", description: "Free public viewing of exterior architecture and minaret.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Imperial Saadian", description: "Dating back to the Almohad and Saadian golden ages of Taroudant's statehood.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Level Approach", description: "Accessible via flat medina lanes directly connected to Place Assarag.", state: "verified" },
    ],
    address: "Rue de la Grande Mosquée (Jamaa Lakbir), Médina, 83000 Taroudant",
    coordinates: { lat: 30.4710, lng: -8.8735 },
    googleMapsUrl: "https://www.google.com/maps/place/Grande+Mosqu%C3%A9e+Taroudant/@30.4710,-8.8735,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-palais-salam-gardens",
    city: "taroudant",
    name: "Palais Salam & Historical Pasha Gardens",
    neighborhood: "Médina (Kasbah)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury", "history", "relaxation"],
    vibeTags: ["regal", "lush", "botanical", "peaceful"],
    tags: [
      "16th-century-ramparts",
      "authentic",
      "cultural-tour",
      "golden-hour",
      "historical",
      "medina",
      "nature",
      "photo-spot",
      "premium",
      "relaxed",
      "saadian-kasbah",
      "walk-in"
    ],
    badges: ["green-oasis", "peaceful-escape", "architectural-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 30, // 25-30 MAD customary tea/coffee at the garden patio
    pricePerPerson: 30,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.9,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "ground_floor_access", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 09:00 PM (Daily)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["traditional_restaurant", "cafe", "garden_seating_access", "shaded_courtyards", "fountains"],
    restrictions: ["respect hotel guest tranquility in residential corridors"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Built directly against the 16th-century Kasbah ramparts, this former palace of Pasha Haïda Ou Mouiss is an oasis of Andalusian serenity. Non-resident visitors can wander through courtyards filled with towering banana palms, climbing bougainvillea, marble fountains, and antique zellij tiles before enjoying a mint tea on the palace terrace.",
    shortValueProp: "Historic 19th-century Pasha's palace nestled inside the Kasbah ramparts with lush sub-tropical gardens.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80"
    ],
    googleRating: 4.1,
    reviewCount: 780,
    badge: "architectural-gem",
    tip: "You do not need to be an overnight hotel guest to enter; simply order a mint tea at the patio cafe and enjoy free access to the historic courtyards and rampart garden paths.",
    tips: [
      "Admire the thick Saadian fortress wall that forms the outer perimeter of the hotel swimming pool courtyard.",
      "The antique reception salons retain original painted cedarwood ceilings from the late 19th century."
    ],
    highlights: [
      "Exquisite Andalusian-Moorish palace architecture built for the southern governor of Taroudant",
      "Verdant sub-tropical gardens shaded by hundred-year-old palms, citrus trees, and hibiscus",
      "Tranquil refuge offering a serene retreat from the hot midday desert sun"
    ],
    emotionalBenefits: [
      "Indulge in the quiet luxury of southern Moroccan aristocratic living",
      "Find cool, shaded rest surrounded by birdsong and trickling fountains"
    ],
    ticketTypes: [{ name: "Garden Access with Tea Order", price: 30, currency: "MAD" }],
    includedServices: ["entry to palace courtyards and gardens"],
    excludedServices: ["restaurant meals", "alcoholic drinks"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Private Gates", description: "Enclosed luxury property with dedicated front-gate reception and security.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Transparent", description: "Established hospitality landmark; menu prices are fixed and clearly listed.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Affordable", description: "Garden entry is free with the purchase of a 25–30 MAD coffee or tea.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original Palace", description: "Authentic governor's residence integrated directly into the Saadian citadel walls.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Level tiled walkways and garden benches with zero steps to navigate.", state: "verified" },
    ],
    address: "Boulevard Moulay Rachid, Quartier Kasbah, 83000 Taroudant",
    coordinates: { lat: 30.4715, lng: -8.8752 },
    googleMapsUrl: "https://www.google.com/maps/place/Palais+Salam+Taroudant/@30.4715,-8.8752,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-mellah-synagogue",
    city: "taroudant",
    name: "Ancien Mellah & Historic Synagogue",
    neighborhood: "Médina (Derb Jdid)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture"],
    vibeTags: ["solemn", "nostalgic", "historical", "intricate"],
    tags: [
      "authentic",
      "cultural-tour",
      "historical",
      "medina",
      "off-the-beaten-path",
      "relaxed",
      "walk-in"
    ],
    badges: ["historic-landmark", "hidden-gem", "moving-experience"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20, // 20 MAD customary caretaker donation
    pricePerPerson: 20,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "10:00 AM - 06:00 PM (Sunday to Friday, Closed Saturdays)",
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation"],
    restrictions: ["modest dress requested; small donation customary for the guardian"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Located along Avenue Al Qods in the Derb Jdid quarter, the historic Mellah preserves the memory of Taroudant's once flourishing Judeo-Berber community who drove the Souss valley's silver and caravan trade. Within this enclave, a restored traditional adobe synagogue retains its wooden hechal (Torah ark), hanging oil lanterns, and historical artifacts.",
    shortValueProp: "The evocative Jewish quarter and restored adobe synagogue commemorating centuries of Judeo-Berber heritage.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0?w=1000&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 160,
    badge: "hidden-gem",
    tip: "The synagogue doorway is discreet; ask respectfully for the local guardian who holds the key and will explain the history of the Souss Jewish silversmiths.",
    tips: [
      "Leave a modest cash donation (20–30 MAD) for the caretaker who maintains the building.",
      "Combine with a visit to the nearby antique and curiosities shops along Derb Jdid that still trade regional silver amulets."
    ],
    highlights: [
      "Intact mudbrick synagogue featuring carved cedar beam work and traditional prayer niches",
      "Rich history of interfaith co-existence where Jewish craftsmen created Taroudant's famed silver jewellery",
      "Atmospheric, quiet alleys distinct from the commercial souks around Place Assarag"
    ],
    emotionalBenefits: [
      "Witness a poignant layer of southern Morocco's multicultural past",
      "Experience a peaceful historical sanctuary preserved by local community members"
    ],
    ticketTypes: [{ name: "Guardian Donation & Entry", price: 20, currency: "MAD" }],
    includedServices: ["interior synagogue visit"],
    excludedServices: ["caretaker gratuity"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Quiet Alley", description: "Derb Jdid is an extremely safe, welcoming, and calm residential medina quarter.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Honest Guardian", description: "No official ticket office; visitors simply give a small tip directly to the caretaker.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Donation Only", description: "No fixed admission; 20 MAD is the standard customary donation.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Living History", description: "Authentic communal site preserved through decades of Moroccan Jewish history.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Gentle Walk", description: "Flat pedestrian alleys with only two small doorstep steps to enter.", state: "verified" },
    ],
    address: "Avenue Al Qods (Avenue du Mellah), Derb Jdid, Médina, 83000 Taroudant",
    coordinates: { lat: 30.4700, lng: -8.8760 },
    googleMapsUrl: "https://www.google.com/maps/place/Mellah+Taroudant/@30.4700,-8.8760,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-bab-ouled-bounouna",
    city: "taroudant",
    name: "Bab Ouled Bounouna (Historic Northern City Gate)",
    neighborhood: "Ouled Bounouna",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "photography"],
    vibeTags: ["historical", "peaceful", "scenic", "architectural"],
    tags: [
      "16th-century-ramparts",
      "adobe-fortress",
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "photo-spot",
      "photography",
      "relaxed",
      "walk-in"
    ],
    badges: ["historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_ground", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "street_parking", "walking_paths"],
    restrictions: ["watch for occasional motorbikes passing beneath the archway"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Anchoring the northern section of Taroudant's ramparts, Bab Ouled Bounouna is one of the five primary historical gates that protected the city during the Saadian dynasty. Standing 8 meters tall with classic bent-axis fortified architecture, this gate opens directly toward the lush market gardens and olive groves of the northern Souss valley.",
    shortValueProp: "The preserved 16th-century northern rampart gate leading out toward palm orchards and rural foothills.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
    ],
    googleRating: 4.1,
    reviewCount: 140,
    badge: "hidden-gem",
    tip: "Walk 100 meters outside the gate into the Ouled Bounouna orchards at sunset to capture panoramic photos of the ramparts flanked by olive trees and date palms.",
    tips: [
      "Far fewer tourists visit this gate compared to Bab El Kasbah, allowing undisturbed photography.",
      "Makes an ideal turnaround point during an afternoon bicycle or calèche ride around the perimeter."
    ],
    highlights: [
      "Authentic Saadian crenellated gatehouse with intact mudbrick firing slits and heavy wooden portals",
      "Tranquil rural boundary where the fortified medina transitions into agrarian Souss groves",
      "Superb light for landscape and heritage photographers during early morning hours"
    ],
    emotionalBenefits: [
      "Feel the timeless boundary between fortified urban civilization and fertile oasis farming",
      "Enjoy a quiet, introspective historic walk far from commercial bustle"
    ],
    ticketTypes: [{ name: "Public Gate Access", price: 0, currency: "MAD" }],
    includedServices: ["free exterior gate viewing"],
    excludedServices: ["none"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Calm Area", description: "Quiet neighborhood gate with friendly local residents passing by on bicycles.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Completely public thoroughfare with no vendors or false guides.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "100% Free", description: "No admission charge or ticketing booths.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Saadian Adobe", description: "Original 16th-century pisé construction displaying weathered earthen texture.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Very Easy", description: "Level roadway approach suitable for casual walking or biking.", state: "verified" },
    ],
    address: "Boulevard Al Moukaouama, Ouled Bounouna, 83000 Taroudant",
    coordinates: { lat: 30.4772, lng: -8.8875 },
    googleMapsUrl: "https://www.google.com/maps/place/Bab+Ouled+Bounouna/@30.4772,-8.8875,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-jardin-dar-al-hossoun",
    city: "taroudant",
    name: "Jardin Botanique Dar Al Hossoun",
    neighborhood: "Lasstah",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nature", "luxury", "relaxation", "photography"],
    vibeTags: ["botanical", "peaceful", "elegant", "lush"],
    tags: [
      "authentic",
      "cultural-tour",
      "nature",
      "off-the-beaten-path",
      "photo-spot",
      "photography",
      "premium",
      "relaxed",
      "walk-in",
      "wellness"
    ],
    badges: ["green-oasis", "peaceful-escape", "architectural-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 150, // 150 MAD garden pass & tea / lunch set option
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 90,
    distanceFromCenterKm: 2.2,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_ground", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "10:00 AM - 07:00 PM (Daily, reservations recommended for non-hotel guests)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["traditional_restaurant", "cafe", "garden_seating_access", "fountains", "restrooms", "parking"],
    restrictions: ["prior reservation requested for garden visits and dining during peak seasons"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Conceived by celebrated French landscape architects Éric Ossart and Arnaud Maurières, Dar Al Hossoun is an internationally acclaimed ecological botanical garden and lodge tucked into the olive belt of Lasstah. Home to over 900 species of drought-resistant desert plants, agaves, rare cacti, and sunken reflection pools, this tranquil estate reinterprets traditional rammed-earth architecture.",
    shortValueProp: "An award-winning ecological desert botanical garden showcasing 900+ rare succulent species and pisé architecture.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1000&q=80"
    ],
    googleRating: 4.8,
    reviewCount: 320,
    badge: "top-pick",
    tip: "Combine your botanical garden stroll with lunch or afternoon tea; their kitchen serves seasonal vegetarian and Moroccan dishes made from organic produce grown directly on the property.",
    tips: [
      "Call or message ahead on WhatsApp to confirm your day-visit slot.",
      "The long reflection swimming pool inspired by the Alhambra's Generalife makes a breathtaking backdrop for design and nature photography."
    ],
    highlights: [
      "Over 900 species of desert flora and succulents curated by world-renowned landscape designers",
      "Masterful modern pisé (rammed-earth) architecture blending seamlessly into the Souss countryside",
      "Serene oasis of silence punctuated only by songbirds, flowing water, and garden fragrances"
    ],
    emotionalBenefits: [
      "Experience profound visual calm in an eco-conscious paradise of architectural elegance",
      "Learn how sustainable arid gardening can produce breathtaking beauty with minimal water"
    ],
    ticketTypes: [
      { name: "Garden Day Pass with Refreshment", price: 150, currency: "MAD" },
      { name: "Garden Pass & 3-Course Organic Lunch", price: 320, currency: "MAD" }
    ],
    includedServices: ["garden pass", "welcome tea and herbal infusion"],
    excludedServices: ["lunch menu unless booked", "spa treatments"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Private Haven", description: "Enclosed, gated eco-estate with professional on-site staff and private parking.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Prestigious eco-lodge with fully transparent pricing and card payment facilities.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Premium Value", description: "Day-pass price reflects garden maintenance and includes premium refreshments.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Landscape Art", description: "Featured in leading international architectural and gardening publications worldwide.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Smooth Paths", description: "Level gravel and paved garden walkways with abundant shaded seating.", state: "verified" },
    ],
    address: "Quartier Hossoun (Sidi Mbark), Lasstah, 83000 Taroudant",
    coordinates: { lat: 30.4780, lng: -8.8680 },
    googleMapsUrl: "https://www.google.com/maps/place/Dar+Al+Hossoun/@30.4780,-8.8680,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-palais-claudio-bravo",
    city: "taroudant",
    name: "Palais Musée Claudio Bravo (Palacio Claudio Bravo)",
    neighborhood: "Ouled Bounouna",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "luxury", "history", "photography"],
    vibeTags: ["regal", "artistic", "elegant", "scenic"],
    tags: [
      "anti-atlas",
      "authentic",
      "cultural-tour",
      "historical",
      "nature",
      "off-the-beaten-path",
      "photo-spot",
      "photography",
      "premium",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["architectural-gem", "must-see", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 200, // 200 MAD museum entrance fee
    pricePerPerson: 200,
    entryPrice: 200,
    durationMinutes: 120,
    distanceFromCenterKm: 7.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_courtyard", "flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: true,
    hasAC: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:30 AM - 06:00 PM (Daily)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["exhibition_hall", "historical_documentation", "garden_seating_access", "fountains", "parking", "restrooms"],
    restrictions: ["no touch policy on fragile historical ceramics and artwork"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The lavish estate and final sanctuary of the legendary Chilean hyperrealist painter Claudio Bravo (1936–2011), this palatial property spans 75 hectares at the foot of the High Atlas. Visitors explore the artist's preserved painting studio, his personal mausoleum, and salons packed with museum-grade collections of antique Moroccan ceramics, Roman statues, Syrian glass, and his own mesmerizing hyperrealist canvases.",
    shortValueProp: "The breathtaking 75-hectare palace museum and studio of master hyperrealist painter Claudio Bravo.",
    images: [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80"
    ],
    googleRating: 4.8,
    reviewCount: 940,
    badge: "must-see",
    tip: "Take the guided estate tour with on-site docents who worked personally alongside Claudio Bravo; their stories about his painting methods and palace construction bring the rooms alive.",
    tips: [
      "Located about 8 km north of the city walls; arrange a round-trip petit taxi or private driver from Place Assarag.",
      "The vast reflecting lake on the estate grounds mirrors the snow-dusted Atlas mountains on clear winter mornings."
    ],
    highlights: [
      "Claudio Bravo's original studio with unfinished easels, brushes, and color palettes preserved in situ",
      "One of North Africa's finest private collections of antique Moroccan Fassi and Safi ceramics",
      "Spectacular landscaped grounds with reflecting basins, exotic menagerie sculptures, and rose courtyards"
    ],
    emotionalBenefits: [
      "Be captivated by world-class fine art nestled in the tranquil desert foothills",
      "Feel the creative genius of an international master who found ultimate inspiration in Taroudant"
    ],
    ticketTypes: [
      { name: "Museum & Palace Estate Tour", price: 200, currency: "MAD" },
      { name: "Palace Tour with Traditional Tea Service", price: 250, currency: "MAD" }
    ],
    includedServices: ["entry to palace galleries, artist studio, mausoleum, and landscaped grounds"],
    excludedServices: ["transport to/from Taroudant center", "restaurant meals"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Private Estate", description: "Private gated museum with dedicated guardians, guides, and secure parking.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official Museum", description: "Recognized cultural foundation with fixed tickets and official receipts.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Worth Every Dirham", description: "200 MAD admission grants access to an estate of world-class international significance.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Master Studio", description: "The genuine home and working retreat where Bravo produced his renowned masterpieces.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Gentle Walk", description: "Comfortable paved courtyard strolling with ample benches and garden shade.", state: "verified" },
    ],
    address: "Route de Tamaloukt, Ouled Bounouna, 83000 Taroudant",
    coordinates: { lat: 30.5501, lng: -8.8771 },
    googleMapsUrl: "https://www.google.com/maps/place/Palais+Mus%C3%A9e+Claudio+Bravo/@30.5501,-8.8771,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-dar-el-baroud",
    city: "taroudant",
    name: "Dar El Baroud (Kasbah Royal Armory)",
    neighborhood: "Médina (Kasbah)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "photography"],
    vibeTags: ["solemn", "historical", "architectural"],
    tags: [
      "16th-century-ramparts",
      "adobe-fortress",
      "authentic",
      "cultural-tour",
      "historical",
      "off-the-beaten-path",
      "photo-spot",
      "relaxed",
      "saadian-kasbah",
      "walk-in"
    ],
    badges: ["historic-landmark", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_exterior_view", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    avoidAnimals: false,
    hasIndoorRest: false,
    hasWiFi: false,
    hasAC: false,
    nearMedina: true,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24 hours (Exterior viewing)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: ["interior currently closed for heritage conservation; exterior walls accessible"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Facing Bab Sedra across Avenue Moulay Rachid in the Kasbah, Dar El Baroud ('House of Gunpowder') was the formidable royal ammunition depot and garrison fortress of Taroudant. Constructed with thick, imposing pisé battlements and carved stone corners, its austere walls evoke centuries of military struggle when the Saadian and Alaouite rulers guarded the lucrative sugar and caravan routes.",
    shortValueProp: "The austere historic gunpowder arsenal and fortress garrison of Taroudant's royal Kasbah.",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0?w=1000&q=80"
    ],
    googleRating: 4.2,
    reviewCount: 95,
    badge: "historical",
    tip: "Stand on the sidewalk opposite Avenue Moulay Rachid to take in the full scale of the carved defensive battlements, then stroll through the adjacent Bab Sedra gate into the old Kasbah neighborhood.",
    tips: [
      "Local folklore attributes mysterious ghost stories to the fortified compound due to its long centuries as an isolated arms depot.",
      "A scenic, quiet promenade route in the late afternoon connecting directly to Bab El Kasbah."
    ],
    highlights: [
      "Monumental rammed-earth fortress structure purpose-built to safely store royal gunpowder stocks",
      "Delicate carved masonry cornices contrasting against thick earthen curtain walls",
      "Integral part of the Saadian Sultan's original 16th-century administrative citadel complex"
    ],
    emotionalBenefits: [
      "Sense the raw, defensive realities of early modern Moroccan frontier rule",
      "Enjoy a quiet architectural stroll away from market noise"
    ],
    ticketTypes: [{ name: "Exterior Historic Viewing", price: 0, currency: "MAD" }],
    includedServices: ["exterior viewing"],
    excludedServices: ["none"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe Walkway", description: "Paved boulevard sidewalk next to the provincial hospital with regular pedestrian presence.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Uncommercialized historic structure with no street touts.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "No Cost", description: "Public street viewing completely free of charge.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Military Relic", description: "Documented royal armory and military quarters dating back through Saadian rule.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Sidewalk Walk", description: "Completely flat sidewalk terrain accessible for all travelers.", state: "verified" },
    ],
    address: "Avenue Moulay Rachid (en face de Bab Sedra), Quartier Kasbah, 83000 Taroudant",
    coordinates: { lat: 30.4731, lng: -8.8741 },
    googleMapsUrl: "https://www.google.com/maps/place/Dar+Baroud+Taroudant/@30.4731,-8.8741,17z",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "taroudant-complexe-artisanal",
    city: "taroudant",
    name: "Complexe Artisanal & Coopératives de Taroudant",
    neighborhood: "Hay Al Mohammadi",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "sensory-seeker"],
    vibeTags: ["artistic", "tranquil", "authentic"],
    tags: [
      "authentic",
      "cultural-tour",
      "local-life",
      "off-the-beaten-path",
      "relaxed",
      "shopping",
      "walk-in",
      "workshop"
    ],
    badges: ["artisan-village", "cultural-immersion", "educational"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasLocalGuide: false,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_ground", "wide_flat_walkways", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    avoidAnimals: false,
    hasIndoorRest: true,
    hasWiFi: false,
    hasAC: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "09:00 AM - 06:30 PM (Monday to Saturday, Closed Sundays)",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["artisan_workshops", "gift_shop", "restrooms", "parking"],
    restrictions: ["fixed prices on cooperative goods; no aggressive bargaining expected"],
    healthContraindications: ["none"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Located in the Hay Al Mohammadi quarter, this municipal craft complex is dedicated to safeguarding the ancestral trades of the Souss-Massa province. Visitors can observe master artisans carving limestone and soapstone, weaving natural wool carpets, fashioning copperware, and processing certified organic argan oil with fixed, fair-trade pricing that directly benefits regional women's cooperatives.",
    shortValueProp: "A relaxed municipal artisan center showcasing stone carving, carpet weaving, and fair-trade argan cooperatives.",
    images: [
      "https://images.unsplash.com/photo-1509060464153-4466739f78d0?w=1000&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80"
    ],
    googleRating: 4.3,
    reviewCount: 210,
    badge: "educational",
    tip: "If you prefer shopping with transparent, fixed price tags without negotiating, this complex offers the most relaxed experience in Taroudant with government-guaranteed quality stamps.",
    tips: [
      "Ask to watch the stone carvers who carve traditional decorative oil lamps and fossilized limestone motifs.",
      "Credit cards are accepted at several of the larger cooperative boutiques inside the complex."
    ],
    highlights: [
      "Direct encounters with craftspeople specializing in stone carving, embroidery, and weaving",
      "Certified organic women's argan oil cooperative with transparent extraction demonstrations",
      "Fixed, government-regulated pricing ensuring fair living wages for rural artisans"
    ],
    emotionalBenefits: [
      "Shop with complete confidence knowing your money directly supports artisan families",
      "Enjoy a quiet, unhurried atmosphere away from medina motorcycle traffic"
    ],
    ticketTypes: [{ name: "Free Complex Entry", price: 0, currency: "MAD" }],
    includedServices: ["entry to craft workshops and showroom galleries"],
    excludedServices: ["artisan purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Secure", description: "Official municipal complex with reception and well-lit exhibition halls.", state: "verified" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Zero Scams", description: "Government-sanctioned complex with fixed price tags; zero hustle or touting.", state: "verified" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fixed Fair", description: "Every product is clearly marked with fixed fair-trade pricing.", state: "verified" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Certified Origin", description: "Authentic regional Souss craftsmanship certified by the Ministry of Handicrafts.", state: "verified" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Step Free", description: "Single-level ground floor building with smooth tiled pathways.", state: "verified" },
    ],
    address: "Avenue Moulay Youssef, Hay Al Mohammadi, 83000 Taroudant",
    coordinates: { lat: 30.4650, lng: -8.8650 },
    googleMapsUrl: "https://www.google.com/maps/place/Complexe+Artisanal+Taroudant/@30.4650,-8.8650,17z",
  }
];

export const taroudantHeritageThings = taroudantTafraouteHeritageThings;