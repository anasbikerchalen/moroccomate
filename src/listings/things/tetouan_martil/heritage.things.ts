/**
 * =========================================================================
 * [TETOUAN_MARTIL] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/tetouan_martil/index.ts
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
 * [TETOUAN_MARTIL] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/tetouan_martil/index.ts
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const tetouanMartilHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-tetouan-medina",
    city: "tetouan_martil",
    name: "Tetouan Medina",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "nomad"],
    vibeTags: ["historical", "intricate", "vibrant"],
    tags: ["authentic", "cultural-tour", "instagrammable", "medina", "walk-in"],
    badges: ["cultural-icon", "must-see"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 2,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Artisan shops: 09:30 AM - 07:30 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:30", close: "19:30" },
      { dayOfWeek: 1, open: "09:30", close: "19:30" },
      { dayOfWeek: 2, open: "09:30", close: "19:30" },
      { dayOfWeek: 3, open: "09:30", close: "19:30" },
      { dayOfWeek: 4, open: "09:30", close: "19:30" },
      { dayOfWeek: 5, open: "09:30", close: "19:30" },
      { dayOfWeek: 6, open: "09:30", close: "19:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "food_stalls", "mosque_prayer_room", "traditional_restaurant", "walking_paths"],
    restrictions: ["No motorized vehicles allowed inside the narrow alleyways"],
    healthContraindications: ["Extensive stepped stairways may strain travelers with severe knee or mobility issues"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A UNESCO-listed medina of whitewashed facades, artisan quarters, and an unmistakable Andalusian architectural soul.",
    shortValueProp: "Morocco's most authentic Andalusian medina, uncommercialized and shaped by centuries of artisan guilds.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.8,
    reviewCount: 1930,
    badge: "essential",
    tip: "Start from Bab el-Okla or Place Hassan II to stay oriented along the primary uphill market arteries.",
    tips: [
      "Hire a licensed official guide from the regional tourist bureau if you want in-depth history of the guild quarters.",
      "Wear flat shoes with rubber grip; the historic stone paving can be slick on stepped inclines."
    ],
    highlights: [
      "Intact Andalusian architecture with wrought-iron grilles and carved cedar doorways",
      "Active specialized guild streets for leatherworkers, zellij masters, and jewelers"
    ],
    emotionalBenefits: [
      "Immerse yourself in authentic Moroccan daily life far from tourist souvenir crowds",
      "Sense the living heritage of 15th-century Andalusian refugees"
    ],
    ticketTypes: [
      { name: "Public Medina Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Self-guided walking access to all public residential and commercial quarters"],
    excludedServices: ["Private interior museum entry fees", "Licensed guide accompaniment"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Vibrant and monitored by local tourist police; main alleys remain populated until evening.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Low Risk", description: "Faux guides are significantly less aggressive here than in Fez or Marrakech; decline politely.", state: "verified", tone: "good", tagColor: "alert" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Local Rates", description: "Crafts and produce are priced primarily for local residents; gentle bargaining is standard.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Genuine", description: "Recognized by UNESCO for untouched street plans and real artisan workshop traditions.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Moderate", description: "Built on hillside slopes with many cobblestone steps; requires continuous walking.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5708, lng: -5.3688 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tetouan+Medina%2C+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-royal-palace-and-hassan-ii-square",
    city: "tetouan_martil",
    name: "Royal Palace & Hassan II Square",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture"],
    vibeTags: ["architectural", "regal", "historic"],
    tags: ["cultural-tour", "iconic-landmark", "instagrammable", "urban", "walk-in"],
    badges: ["historic-landmark", "must-see"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "flat_ground", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Palace exterior visible daily)",
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
    amenities: ["fountains", "perimeter_benches", "street_parking", "walking_paths"],
    restrictions: ["Interior of Royal Palace is closed to the public; photographing armed guards is prohibited"],
    healthContraindications: ["Open sun exposure during mid-afternoon hours"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "The 17th-century palace exterior and expansive Mechouar square form Tetouan's civic gateway between the medina and the colonial Ensanche.",
    shortValueProp: "The dramatic civic threshold between Spanish and Moroccan Tetouan, framed by Hispano-Moresque gates.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.7,
    reviewCount: 3078,
    badge: "must-see",
    tip: "Photograph the decorative minaret-style light towers and plaza arches, but keep camera lenses away from royal security staff.",
    tips: [
      "Visit in late afternoon when the square fills with local families and pleasant mountain breezes.",
      "Use the square as your main navigation benchmark when transitioning between the Ensanche and the medina."
    ],
    highlights: [
      "Elaborate 17th-century palace facade and Bab er-Rouah gate architecture",
      "Striking modernist spiral light towers designed during the Spanish Protectorate"
    ],
    emotionalBenefits: [
      "Appreciate the grandeur of royal Alaouite history",
      "Enjoy a wide open breathing space before entering dense medina lanes"
    ],
    ticketTypes: [
      { name: "Public Esplanade Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Access to public square and historic monument facades"],
    excludedServices: ["Palace interior access (strictly royal administrative residence)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Guarded", description: "Heavily protected by royal guards; extremely safe public zone at all hours.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Minimal", description: "Occasional unauthorized guides offer services near the gate; official guides have badges.", state: "verified", tone: "good", tagColor: "alert" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Entire square is a public municipal esplanade with zero admission charge.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original", description: "Authentic historical seat of the Khalifa during the northern protectorate period.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Paved, level plaza with completely flat walking surfaces and perimeter seating.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Place Hassan II, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5707, lng: -5.3670 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Palace+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-archaeological-museum-of-tetouan",
    city: "tetouan_martil",
    name: "Archaeological Museum of Tetouan",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history"],
    vibeTags: ["historical", "peaceful", "serene"],
    tags: ["cultural-tour", "historical", "relaxed", "urban", "walk-in"],
    badges: ["educational", "historic-landmark"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 10,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 06:00 PM (Wednesday to Monday, Closed Tuesday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "garden_seating_access", "historical_documentation", "restrooms", "ticket_booth"],
    restrictions: ["Flash photography and tripod use restricted inside the exhibition galleries"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Inaugurated in 1940, this compact museum displays prehistoric, Punic, and Roman antiquities excavated from Tamuda, Lixus, and M'Zora.",
    shortValueProp: "The key to understanding northern Morocco's classical history before the medieval Islamic founding of Tetouan.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 735,
    badge: "historical",
    tip: "Do not miss the peaceful Andalusian courtyard garden filled with Roman mosaics, funerary stelae, and resident garden tortoises.",
    tips: [
      "Examine the large 3D bronze figurine of the Three Graces from Lixus and the scale model of the Mzora cromlech.",
      "Pair this museum visit directly with a morning trip to the actual Tamuda ruins outside the city."
    ],
    highlights: [
      "Intricate Roman geometric and mythological mosaics excavated from coastal Tingitania",
      "Peaceful shaded Andalusian patio garden housing Latin, Hebrew, and Islamic stelae"
    ],
    emotionalBenefits: [
      "Deepen your historical appreciation for Morocco's pre-Islamic antiquity",
      "Enjoy a quiet, unhurried cultural respite from the bustling markets"
    ],
    ticketTypes: [
      { name: "Adult Admission", price: 10, currency: "MAD" },
      { name: "Child Admission", price: 3, currency: "MAD" }
    ],
    includedServices: ["Full access to interior archaeological galleries and courtyard garden"],
    excludedServices: ["Audio guide rental", "Private curator tour"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Quiet government museum managed by the FNM with attentive hall attendants.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Fixed Rate", description: "Official state museum tickets with nominal fixed pricing printed at the cash register.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Nominal", description: "Only 10 MAD per adult, making it one of Morocco's most accessible cultural sites.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Verified", description: "Authentic artifacts excavated directly from major northern Moroccan archaeological sites.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy", description: "Flat single-level interior galleries with minor low steps entering the courtyard.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "2 Rue Ben Hussain, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5714, lng: -5.3681 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Archaeological+Museum+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-ethnographic-museum",
    city: "tetouan_martil",
    name: "Ethnographic Museum",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history"],
    vibeTags: ["historical", "intricate", "ornate"],
    tags: ["authentic", "cultural-tour", "medina", "relaxed", "urban", "walk-in"],
    badges: ["cultural-immersion", "educational"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 60,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
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
    openingHours: "10:00 AM - 06:00 PM (Wednesday to Monday, Closed Tuesday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 1, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "panoramic_viewpoint", "restrooms", "ticket_booth"],
    restrictions: ["No touching delicate silk bridal vestments or historic musical instruments"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Housed in the 1830 Skala military bastion by Bab el-Okla, this FNM museum reveals Tetouani domestic arts, silk embroidery, and Arabo-Andalusian musical heritage.",
    shortValueProp: "An intimate look into Tetouan's refined domestic culture, historic bridal traditions, and ingenious Skundo gravity water system.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 1543,
    badge: "cultural-icon",
    tip: "Climb up to the rooftop terrace with historic bronze cannons for a panoramic view of the Rif mountain ridges and medina roofs.",
    tips: [
      "Study the room detailing the 16th-century 'Skundo' water distribution network that piped mountain spring water into medina homes.",
      "Inspect the intricate gold and silver thread work on the ceremonial Chedda bridal costume."
    ],
    highlights: [
      "Lavish antique Tetouani ceremonial costumes, silk brocades, and regional Jebala jewelry",
      "Historical bastion architecture with rooftop ramparts and defensive cannons"
    ],
    emotionalBenefits: [
      "Gain genuine cultural context into regional wedding customs and domestic rituals",
      "Experience peaceful panoramic medina vistas from historic fortress walls"
    ],
    ticketTypes: [
      { name: "Adult General Entry", price: 20, currency: "MAD" },
      { name: "Youth (12-18)", price: 10, currency: "MAD" },
      { name: "Child (<12)", price: 5, currency: "MAD" }
    ],
    includedServices: ["Admission to permanent ethnographic galleries and rooftop cannon terrace"],
    excludedServices: ["Personal guided tour service"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Controlled", description: "State-maintained facility with secure entry and well-lit exhibition halls.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Regulated", description: "National Museums Foundation (FNM) property with official posted fees and printed tickets.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Affordable", description: "Flat 20 MAD admission fee offers exceptional educational value.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Curated", description: "Displays real antique family heirlooms, musical instruments, and regional wedding relics.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Moderate", description: "Multi-level fortress requiring stair climbs to reach the upper battlements.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "68 Rue Skala, Bab el-Okla, Médina Ancienne, 93040 Tétouan",
    coordinates: { lat: 35.5703, lng: -5.3636 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bab+El+Okla+Museum+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-dar-sanaa-craft-school",
    city: "tetouan_martil",
    name: "Dar Sanaa Craft School",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["artistic", "intricate", "serene"],
    tags: ["authentic", "cultural-tour", "medina", "urban", "walk-in", "workshop"],
    badges: ["artisan-village", "cultural-immersion"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 60,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 0.7,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "ground_floor_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Monday to Saturday, Closed Sunday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["artisan_workshops", "gift_shop", "historical_documentation", "information_desk", "restrooms", "ticket_booth"],
    restrictions: ["Always request permission before taking close-up portraits of student apprentices at their workbenches"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Morocco's oldest national craft academy, founded in 1919 to preserve endangered Andalusian decorative arts like zellij chiseling, taracea woodwork, and plaster carving.",
    shortValueProp: "Witness living Moroccan master artisans training apprentices inside an Andalusian palace workshop complex.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 902,
    badge: "top-pick",
    tip: "Visit on weekday mornings during school terms (October to June) when all apprentice workbenches are actively buzzing.",
    tips: [
      "Check out the certified student sales room at the entrance for master-grade cedar boxes and zellij plates without middleman markups.",
      "Tipping a student or guide who demonstrates craft techniques for 15 minutes is respectful and warmly appreciated."
    ],
    highlights: [
      "Live observation of masters chiseling glazed zellij tiles with specialized deqsha hammers",
      "Stunning Neo-Mauresque architecture built around two Andalusian arcaded courtyards"
    ],
    emotionalBenefits: [
      "Appreciate the patience and multi-generational dedication behind traditional Islamic geometric crafts",
      "Understand the difference between mass-market tourist souvenirs and authentic artisanal masterworks"
    ],
    ticketTypes: [
      { name: "Foreign Visitor Ticket", price: 60, currency: "MAD" },
      { name: "Moroccan Citizen / Resident", price: 30, currency: "MAD" },
      { name: "Student / Child", price: 10, currency: "MAD" }
    ],
    includedServices: ["Self-guided workshop corridor walk and access to student demonstration courtyards"],
    excludedServices: ["Hands-on craft classes", "Private guild master tutorial"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Safe", description: "Official academic institution with clear paths, quiet halls, and professional instructors.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Pressure", description: "Unlike private medina craft bazaars, instructors do not pressure visitors to buy goods.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Official", description: "Fixed admission tickets managed by the Ministry of Culture; items in the exhibition shop are price-tagged.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Master-Grade", description: "The premier institution upholding the authentic Andalusian decorative arts canon in Morocco.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Ground-level arcaded courtyards with flat paved corridors and easy step-free movement.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Mohamed V, face à Bab el-Okla, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5700, lng: -5.3622 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dar+Sanaa+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-ensanche-spanish-quarter-walk",
    city: "tetouan_martil",
    name: "Ensanche Spanish Quarter Walk",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "culture", "art-and-culture"],
    vibeTags: ["architectural", "nostalgic", "elegant"],
    tags: ["cultural-tour", "historical", "instagrammable", "urban", "walk-in"],
    badges: ["architectural-landmark", "historic-landmark"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_walkways", "step_free_paved_paths", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Cafes & shops: 08:30 AM - 10:30 PM)",
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
    amenities: ["atm_nearby", "cafe", "perimeter_benches", "street_parking", "walking_paths"],
    restrictions: ["Standard urban street rules apply"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A planned colonial neighborhood constructed from 1913 onward, featuring Art Deco facades, circular plazas, and Spanish-era boulevards.",
    shortValueProp: "Experience the unique 20th-century Hispano-Moroccan architecture that earned Tetouan its title as northern Morocco's cultural bridge.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 516,
    badge: "architectural-gem",
    tip: "Stop for café con leche or fresh mint tea at one of the sidewalk terraces flanking Place Moulay El Mehdi.",
    tips: [
      "Look up at second-story facades along Avenue Mohamed V to spot curved Art Deco balconies and Neo-Moorish stuccowork.",
      "Walk the neighborhood around 6:00 PM to participate in the traditional evening paseo with local residents."
    ],
    highlights: [
      "Iglesia de Nuestra Señora de la Victoria on Place Moulay El Mehdi",
      "Pristine white and pastel green early 20th-century colonial residential facades"
    ],
    emotionalBenefits: [
      "Appreciate the graceful architectural fusion of Spanish urbanism and Moroccan detailing",
      "Enjoy a relaxed European-style café ambiance in a Moroccan mountain setting"
    ],
    ticketTypes: [
      { name: "Public Walking Tour", price: 0, currency: "MAD" }
    ],
    includedServices: ["Self-guided access to public boulevards and pedestrian promenades"],
    excludedServices: ["Guided architectural commentary"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Well-lit primary commercial avenues with steady police presence and family foot traffic.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "None", description: "A regular functioning urban business district with fixed-price cafés and modern shops.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Standard", description: "Cafés and snacks are sold at normal local prices with clear menus.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Pristine", description: "Remarkably preserved example of Spanish colonial urban planning and architecture in Africa.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy", description: "Broad, flat paved sidewalks with gentle curb ramps throughout the pedestrian zone.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Place Moulay El Mehdi & Av. Mohamed V, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5725, lng: -5.3715 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Place+Moulay+El+Mehdi+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-place-feddan",
    city: "tetouan_martil",
    name: "Place Feddan",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "nomad", "family"],
    vibeTags: ["scenic", "vibrant", "architectural"],
    tags: ["authentic", "instagrammable", "photo-spot", "urban", "walk-in"],
    badges: ["panoramic-view", "must-see"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Underground parking open 24/7)",
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
    amenities: ["cafe", "fountains", "panoramic_viewpoint", "parking", "perimeter_benches", "walking_paths"],
    restrictions: ["Skateboarding and bicycle racing are restricted during peak family evening hours"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "A vast two-hectare Andalusian-styled public esplanade built over underground parking, offering sweeping panoramic views across the white medina amphitheater.",
    shortValueProp: "Tetouan's prime scenic gathering plaza, ideal for golden-hour photography and family strolls overlooking the medina.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 1908,
    badge: "top-pick",
    tip: "Arrive at dusk to watch the whitewashed medina hillside glow against the silhouette of the Rif Mountains.",
    tips: [
      "Use the clean 500-vehicle underground parking garage beneath the square if driving to Tetouan by car.",
      "Grab an outdoor table at the esplanade terrace cafe for panoramic views with mint tea."
    ],
    highlights: [
      "Unobstructed panoramic viewpoint over the cascading white medina hillside",
      "Traditional Andalusian pavilion with central zellij fountains and white arches"
    ],
    emotionalBenefits: [
      "Feel the warm community pulse of Tetouani families enjoying open-air evening leisure",
      "Capture postcard-worthy wide-angle landscape photos of the White Dove city"
    ],
    ticketTypes: [
      { name: "Public Esplanade Entry", price: 0, currency: "MAD" }
    ],
    includedServices: ["Full access to the public plaza, viewpoints, and garden benches"],
    excludedServices: ["Underground parking fees (nominal hourly charge)"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Family-Friendly", description: "Open pedestrian zone filled with families and children; very safe into the evening.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "No Hassle", description: "A civic relaxation area with no touts or aggressive commercial vendors.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Completely free open public space; parking underneath costs ~3–5 MAD/hour.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Reimagined", description: "Modern architectural tribute reviving the historic pre-colonial Grand Feddan.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Entirely paved, wide, step-free esplanade with elevator access from the parking garage.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "9 Avenue Alger, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5717, lng: -5.3664 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+Feddan+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-bab-el-okla-gate-walk",
    city: "tetouan_martil",
    name: "Bab el-Okla Gate Walk",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "first-timer"],
    vibeTags: ["historical", "architectural", "sensory"],
    tags: ["cultural-tour", "medina", "photo-spot", "urban", "walk-in"],
    badges: ["historic-landmark"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
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
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Gate permanently open to pedestrians)",
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
    amenities: ["artisan_workshops", "food_stalls", "traditional_fountains", "walking_paths"],
    restrictions: ["Pedestrian entry only; narrow passageway shared with local porters and shoppers"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "The most famous of the medina's seven fortified gates, known historically as Puerta de la Reina, adjoining an ornate public zellij fountain.",
    shortValueProp: "The quintessential eastern portal into Tetouan's craft heritage, directly linking Dar Sanaa with the medina's artisan alleys.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.2,
    reviewCount: 589,
    badge: "historical",
    tip: "Admire the 18th-century zellij and carved cedar fountain just beside the gate archway.",
    tips: [
      "This gate provides the easiest access point for reaching both Dar Sanaa and the Ethnographic Museum.",
      "Taxis can drop you off directly on Avenue Hassan II right at the gate threshold."
    ],
    highlights: [
      "Fortified masonry archway framing daily medina life",
      "Historical public water fountain decorated with intricate geometric tiles"
    ],
    emotionalBenefits: [
      "Feel the timeless transition passing through a medieval fortified stone portal",
      "Gain an authentic visual introduction to Tetouan's artisanal quarter"
    ],
    ticketTypes: [
      { name: "Public Gate Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Public pedestrian access through historic rampart portal"],
    excludedServices: ["Museum entries inside adjoining bastions"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Constant pedestrian flow of neighborhood residents and shopkeepers day and night.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Low Risk", description: "Few unofficial guides gather near the gate; decline offers politely or hire certified guides.", state: "verified", tone: "good", tagColor: "alert" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "No entrance fee for walking through the gate into the old city.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original", description: "Original 16th-century fortified city gate with genuine historical masonry.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy Walk", description: "Gentle incline leading through the gate arch onto stone-paved alleys.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Lamfadal Afailal, Bab el-Okla, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5704, lng: -5.3632 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bab+el-Okla+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-tamuda-ruins",
    city: "tetouan_martil",
    name: "Tamuda Ruins",
    neighborhood: "Kitane",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "history"],
    vibeTags: ["historical", "peaceful", "serene"],
    tags: ["cultural-tour", "historical", "off-the-beaten-path", "walk-in"],
    badges: ["historic-landmark", "educational"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 30,
    pricePerPerson: 30,
    entryPrice: 30,
    durationMinutes: 75,
    distanceFromCenterKm: 5.2,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
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
    amenities: ["historical_documentation", "parking", "ticket_booth", "walking_paths"],
    restrictions: ["Do not climb on exposed ancient mudbrick or stone foundations"],
    healthContraindications: ["Full sun exposure across the entire unshaded site; carry water and sun protection"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "An ancient archaeological site preserving the stone foundations of a 3rd-century BC Mauretanian river town and a 1st-century AD Roman military castrum.",
    shortValueProp: "Walk the excavated grid of northern Morocco's premier pre-Roman civil center overlooking the Martil River valley.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.2,
    reviewCount: 276,
    badge: "hidden-gem",
    tip: "Arrange for your petit or grand taxi driver to wait for 60–75 minutes, as passing taxis along the N2 rural highway can be infrequent.",
    tips: [
      "Read the on-site bilingual interpretive panels explaining the layout of the Roman camp's fortified towers and gates.",
      "Combine this excursion with a prior morning visit to Tetouan's Archaeological Museum where the excavated pottery and bronzes are preserved."
    ],
    highlights: [
      "Visible stone street layout of the fortified Roman legionary castrum",
      "Picturesque, quiet mountain-valley backdrop along the south bank of the Martil River"
    ],
    emotionalBenefits: [
      "Feel the quiet contemplative atmosphere of ancient civilizations nestled between Rif mountain peaks",
      "Escape urban crowds to explore untouched open-air history"
    ],
    ticketTypes: [
      { name: "Standard Adult Entry", price: 30, currency: "MAD" },
      { name: "Child (<12) Entry", price: 10, currency: "MAD" }
    ],
    includedServices: ["Self-guided walking admission to the fenced archaeological park and conservation area"],
    excludedServices: ["Return taxi transportation", "Licensed private archaeologist guide"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Isolated", description: "Quiet fenced national site with on-site guardian; safe, but lacks nearby urban services.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official", description: "Official Ministry of Culture ticket booth; ensure taxi wait-time rate is settled in advance.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Fixed Fee", description: "Standard state monument tariff (30 MAD) payable in cash dirhams at the gate.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Genuine", description: "Authentic, scientifically excavated classical ruins recognized as a National Monument since 2005.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Uneven Ground", description: "Dirt paths, exposed stones, and unshaded outdoor walking; requires sun protection.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "Route de Chefchaouen (N2), Kitane, 93000 Tétouan",
    coordinates: { lat: 35.5594, lng: -5.4108 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tamuda+Archaeological+Site+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-tetouan-center-of-modern-art",
    city: "tetouan_martil",
    name: "Tetouan Center of Modern Art",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["artistic", "architectural", "peaceful"],
    tags: ["cultural-tour", "modern", "relaxed", "urban", "walk-in"],
    badges: ["architectural-gem", "cultural-icon"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "perimeter_ramps", "wide_flat_walkways", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 06:00 PM (Tuesday to Sunday, Closed Monday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "18:00" },
      { dayOfWeek: 2, open: "10:00", close: "18:00" },
      { dayOfWeek: 3, open: "10:00", close: "18:00" },
      { dayOfWeek: 4, open: "10:00", close: "18:00" },
      { dayOfWeek: 5, open: "10:00", close: "18:00" },
      { dayOfWeek: 6, open: "10:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "restrooms", "walking_paths"],
    restrictions: ["No flash photography or touching artworks"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Housed in the restored 1918 Neo-Moorish Spanish railway station, this center showcases eight decades of Moroccan contemporary painting, sculpture, and graphic arts.",
    shortValueProp: "A magnificent example of colonial station architecture repurposed as northern Morocco's premier modern art venue.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.3,
    reviewCount: 554,
    badge: "architectural-gem",
    tip: "Take time to admire the building's original railway architecture, including the Moorish keyhole windows and decorative clock tower.",
    tips: [
      "Explore works by renowned alumni and professors of Tetouan's famed National Institute of Fine Arts (INBA).",
      "Check the temporary exhibition hall on the lower level for rotating installations and Mediterranean design biennials."
    ],
    highlights: [
      "Iconic 1918 Neo-Moorish former railway station designed by Julio Rodríguez Roda",
      "Comprehensive permanent collection tracing the modern 'Tetouan School' of visual art"
    ],
    emotionalBenefits: [
      "Discover the sophisticated avant-garde creative spirit thriving alongside Tetouan's traditional crafts",
      "Enjoy a quiet, beautifully lit art sanctuary in a spacious historic building"
    ],
    ticketTypes: [
      { name: "General Admission", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free admission to permanent galleries and rotating art exhibitions"],
    excludedServices: ["Catalog purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Staffed public municipal art center located on a major thoroughfare with attentive security.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Free Entry", description: "Public cultural facility with completely free admission; zero commercial pressure.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Admission is 100% free for all national and international visitors.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Curated", description: "Direct visual chronicle of Morocco's celebrated National Institute of Fine Arts.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy", description: "Spacious, flat ground-floor galleries with broad ramps and smooth accessible walkways.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Al Massira Al Khadra, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5664, lng: -5.3670 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Centre+d'Art+Moderne+de+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-kasbah-of-tetouan",
    city: "tetouan_martil",
    name: "Kasbah of Tetouan",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "culture", "nomad"],
    vibeTags: ["historical", "scenic", "solemn"],
    tags: ["historical", "iconic-landmark", "medina", "photo-spot", "walk-in"],
    badges: ["historic-landmark", "panoramic-view"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.9,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["cobblestone_paths", "some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
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
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: ["Interior military garrison areas remain restricted; exterior battlements and lookouts are fully accessible"],
    healthContraindications: ["Steep uphill climb from lower medina; take resting breaks during hot midday hours"],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Perched atop the slopes of Jbel Dersa, this 13th-century Marinid fortress was reconstructed in 1493 by Sidi Ali Al-Mandri to defend against Portuguese incursions.",
    shortValueProp: "The commanding military summit of Tetouan, offering an unrivaled panoramic perspective over the entire UNESCO medina.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 382,
    badge: "historical",
    tip: "Walk up in late afternoon via the blue-and-white stepped stairways of the upper medina for sunset views over the valley.",
    tips: [
      "Combine the walk with a visit to the nearby historical Sidi El Mandri cemetery immediately adjacent to the ramparts.",
      "Wear trail-capable walking shoes as the stepped stone inclines near the summit can be worn and slippery."
    ],
    highlights: [
      "Square corner defense towers with intact crenellated parapets dating to 1493",
      "Spectacular bird's-eye panorama taking in the Martil River plain and the Mediterranean coast"
    ],
    emotionalBenefits: [
      "Feel the raw strategic presence of Tetouan's medieval guardians",
      "Enjoy crisp mountain air away from the dense souk alleys below"
    ],
    ticketTypes: [
      { name: "Public Lookout Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Access to exterior battlements, perimeter walls, and panoramic platform"],
    excludedServices: ["Interior military structure access"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Quiet", description: "Upper residential neighborhood is tranquil, though less trafficked after nightfall.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Low Risk", description: "Occasional local youths offer directions up the hill; a polite refusal is respected.", state: "verified", tone: "good", tagColor: "alert" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "No entrance fee to access the ramparts, upper gates, and viewpoint terraces.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Original", description: "Authentic 15th-century stone fortification that laid the defensive foundation of modern Tetouan.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Demanding", description: "Requires a steady uphill climb over uneven stone staircases; moderate physical stamina needed.", state: "verified", tone: "caution", tagColor: "safety" }
    ],
    address: "Rue Kasbah, Haut de la Médina, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5746, lng: -5.3708 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kasbah+of+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-isaac-ben-walid-synagogue",
    city: "tetouan_martil",
    name: "Isaac Ben Walid Synagogue",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "quiet-mystic"],
    vibeTags: ["spiritual", "historical", "serene"],
    tags: ["authentic", "cultural-tour", "historical", "medina", "walk-in"],
    badges: ["historic-landmark", "cultural-immersion"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 45,
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
    accessibilityFeatures: ["ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 05:00 PM (Sunday to Friday, Closed Saturday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "17:00" },
      { dayOfWeek: 1, open: "10:00", close: "17:00" },
      { dayOfWeek: 2, open: "10:00", close: "17:00" },
      { dayOfWeek: 3, open: "10:00", close: "17:00" },
      { dayOfWeek: 4, open: "10:00", close: "17:00" },
      { dayOfWeek: 5, open: "10:00", close: "14:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "restrooms"],
    restrictions: ["Closed on Saturdays for Shabbat; modest dress required inside the prayer sanctuary"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Built in 1889 and named after Rabbi Isaac Bengualid, this two-story Sephardic synagogue preserves the spiritual heart of Tetouan's historic Jewish Mellah.",
    shortValueProp: "The crown jewel of Sephardic heritage in northern Morocco, featuring intact Andalusian chandeliers, Hebrew scrolls, and a rabbinical court.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 164,
    badge: "hidden-gem",
    tip: "Ring the brass bell at the wooden entrance door; the resident caretaker provides entry and historical context.",
    tips: [
      "Look for the ground-floor rabbinical court (Bet Din) and the ritual bath (Mikveh) preserved in the lower level.",
      "A contribution of 20 MAD per visitor supports the preservation of the building and its archive of liturgical books."
    ],
    highlights: [
      "Hand-painted wooden Tebah (bimah) and carved cedar Aron Kodesh holding antique Torah mantles",
      "Hanging Venetian glass oil lamps and bilingual Judeo-Spanish commemorative plaques"
    ],
    emotionalBenefits: [
      "Connect with centuries of harmonious Jewish-Muslim coexistence in northern Morocco",
      "Experience an untouched, deeply moving historical prayer sanctuary"
    ],
    ticketTypes: [
      { name: "Suggested Caretaker Contribution", price: 20, currency: "MAD" }
    ],
    includedServices: ["Access to historic prayer hall, upper women's gallery, and rabbinical quarters"],
    excludedServices: ["Professional private heritage guide"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Located on a quiet, clean lane in the historic Mellah; very safe and well-respected.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Honest", description: "Caretaker welcomes visitors politely; customary modest tip/donation directly funds maintenance.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Modest Tip", description: "No commercial ticket desk; standard 20 MAD voluntary contribution is customary.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Untouched", description: "Authentic, functioning memorial synagogue recognized as a national historic treasure.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy", description: "Flat approach through the Mellah grid; single flight of narrow steps to the upper gallery.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Rue de la Synagogue, Mellah, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5700, lng: -5.3672 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Isaac+Ben+Walid+Synagogue+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-medersa-loukach",
    city: "tetouan_martil",
    name: "Medersa Loukach",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history"],
    vibeTags: ["intricate", "spiritual", "peaceful"],
    tags: ["authentic", "cultural-tour", "historical", "medina", "walk-in"],
    badges: ["educational", "architectural-gem"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 10,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 45,
    distanceFromCenterKm: 0.4,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_courtyard", "ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Tuesday to Sunday, Closed Monday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "restrooms", "ticket_booth", "traditional_fountains"],
    restrictions: ["Visitors must remove shoes before stepping onto carpeted prayer niches"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Built in 1758 by Caïd Omar Loukach under Sultan Mohammed ben Abdallah, this historic theology college now serves as a museum of religious heritage and calligraphy.",
    shortValueProp: "A tranquil 18th-century madrasa featuring authentic student dormitory cells, illuminated manuscripts, and classical Andalusian tilework.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 218,
    badge: "architectural-gem",
    tip: "Look closely at the carved plaster calligraphy bands encircling the central courtyard patio arches.",
    tips: [
      "Visit the upper floor to see how rural theology students lived in tiny individual alcoves while studying at the Great Mosque.",
      "Check out the display case of historic brass astrolabes and ink-making tools."
    ],
    highlights: [
      "Sunlit central Andalusian courtyard with green-and-white zellij tilework and central marble basin",
      "Curated exhibition of antique Quranic manuscripts on parchment and handmade paper"
    ],
    emotionalBenefits: [
      "Appreciate the scholarly depth of Morocco's classical religious education system",
      "Enjoy a quiet, meditative space right next to the busy market square of El Gherssa"
    ],
    ticketTypes: [
      { name: "General Admission", price: 10, currency: "MAD" }
    ],
    includedServices: ["Self-guided tour of central courtyard, upper student cells, and manuscript galleries"],
    excludedServices: ["Guided scholarly tour"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Protected", description: "Quiet government-managed museum with security staff and controlled entrance.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official", description: "Standard Ministry of Habous cultural site with fixed 10 MAD ticket pricing.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Affordable", description: "Only 10 MAD per visitor; exceptional cultural value.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Pristine", description: "Painstakingly restored in 2011 to its original 1758 Alaouite-era architectural state.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy", description: "Level ground-floor courtyard; narrow steep stairs lead to the upper dormitories.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Place El Gherssa El Kebira, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5714, lng: -5.3678 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Medersa+Loukach+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-great-mosque-of-tetouan",
    city: "tetouan_martil",
    name: "Great Mosque of Tetouan",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "history", "first-timer"],
    vibeTags: ["spiritual", "regal", "serene"],
    tags: ["authentic", "cultural-tour", "historical", "iconic-landmark", "medina", "walk-in"],
    badges: ["spiritual-hub", "historic-landmark"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["step_free_exterior_view", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "05:00 AM - 09:30 PM (Daily prayer schedule; exterior visible 24/7)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "05:00", close: "21:30" },
      { dayOfWeek: 1, open: "05:00", close: "21:30" },
      { dayOfWeek: 2, open: "05:00", close: "21:30" },
      { dayOfWeek: 3, open: "05:00", close: "21:30" },
      { dayOfWeek: 4, open: "05:00", close: "21:30" },
      { dayOfWeek: 5, open: "05:00", close: "21:30" },
      { dayOfWeek: 6, open: "05:00", close: "21:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ablution_facilities_worshippers", "mosque_prayer_room", "traditional_fountains"],
    restrictions: ["Mosque interior is reserved for practicing Muslims; non-Muslim visitors may view and photograph from exterior portals"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Commissioned in 1808 by Sultan Moulay Slimane, this monumental congregational mosque is the spiritual epicenter of the old city, flanked by carved cedar doors.",
    shortValueProp: "The grandest religious monument of the medina, featuring a striking emerald-tile minaret and historic mountain spring fountains.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.8,
    reviewCount: 940,
    badge: "historical",
    tip: "Stand at the corner of Rue Jamaa El Kebir during call to prayer (Adhan) to hear the acoustic resonance through the medina canyons.",
    tips: [
      "Observe the intricate exterior woodwork of the main entrance portal without obstructing worshipers entering for prayer.",
      "Dress respectfully with shoulders and knees covered when passing through the immediate mosque street."
    ],
    highlights: [
      "Magnificent square minaret decorated with green ceramic tile bands and polylobed stucco arches",
      "Historic street ablution fountains fed by Tetouan's ancient Skundo gravity aqueduct"
    ],
    emotionalBenefits: [
      "Sense the serene spiritual rhythm governing daily medina life",
      "Admire classical Alaouite imperial architecture adapted to northern mountain aesthetics"
    ],
    ticketTypes: [
      { name: "Public Monument View", price: 0, currency: "MAD" }
    ],
    includedServices: ["Self-guided exterior architectural viewing and surrounding heritage lane walk"],
    excludedServices: ["Interior prayer hall access for non-Muslim visitors"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Peaceful", description: "Respectful, solemn religious setting with constant neighborhood presence.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "None", description: "A sacred active community sanctuary free from commercial vendors or touts.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Completely free public civic and religious monument.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Venerable", description: "Tetouan's primary historic Friday mosque in continuous religious service since 1808.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Paved, level medina lane with easy, flat walking directly outside the portals.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Rue Jamaa El Kebir, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5709, lng: -5.3667 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Great+Mosque+of+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-dar-el-oddi-cultural-space",
    city: "tetouan_martil",
    name: "Dar El Oddi Cultural Space",
    neighborhood: "Médina Ancienne",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "history"],
    vibeTags: ["artistic", "intricate", "nostalgic"],
    tags: ["authentic", "cultural-tour", "medina", "photo-spot", "walk-in"],
    badges: ["cultural-immersion", "educational"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 25,
    pricePerPerson: 25,
    entryPrice: 25,
    durationMinutes: 60,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
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
    openingHours: "09:00 AM - 05:00 PM (Tuesday to Sunday, Closed Monday)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "restrooms", "ticket_booth"],
    restrictions: ["No food or beverages in the print exhibition rooms"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "An aristocratic 1920s townhouse restored into a private visual museum showcasing four centuries (1525–1955) of artistic views, historic maps, and rare engravings of Tetouan.",
    shortValueProp: "See how European and Moroccan artists depicted Tetouan over 400 years while exploring an authentic private medina riad.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.7,
    reviewCount: 142,
    badge: "top-pick",
    tip: "Visit this museum after your initial medina walk; it is fascinating to compare modern viewpoints with 17th-century European engravings.",
    tips: [
      "Take your time inspecting the detailed antique maps showing the seven city gates and the original walls.",
      "The building itself exemplifies the 1920s decorative transitional period, mixing Moroccan plasterwork with imported Spanish floor tiles."
    ],
    highlights: [
      "Over 100 historical engravings, lithographs, and vintage postcards tracing Tetouan's urban growth",
      "Authentic bourgeois medina patio with traditional wooden ceilings and private family chambers"
    ],
    emotionalBenefits: [
      "Deepen your historical imagination by seeing the city through the eyes of Renaissance travelers",
      "Relax in an intimate, quiet museum garden courtyard"
    ],
    ticketTypes: [
      { name: "Adult Admission", price: 25, currency: "MAD" },
      { name: "Student / Child", price: 10, currency: "MAD" }
    ],
    includedServices: ["Full access to permanent 'Visions of Tetouan' galleries and architectural house tour"],
    excludedServices: ["Catalog purchases"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Secure", description: "Private cultural foundation located in a quiet, safe alley of the El Blad quarter.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Reliable", description: "Professional cultural museum with transparent fixed entry fees and friendly curation.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Clear", description: "Flat 25 MAD admission fee clearly displayed at the entrance desk.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Exceptional", description: "Unique archive created by a local Tetouani family to document their city's visual legacy.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Easy", description: "Ground-floor rooms are easily navigated; two flights of stairs to the second gallery floor.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "5 Derb Oddi, Médina Ancienne, 93000 Tétouan",
    coordinates: { lat: 35.5721, lng: -5.3693 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dar+El+Oddi+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-church-of-our-lady-of-victories",
    city: "tetouan_martil",
    name: "Church of Our Lady of Victories",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "history", "culture"],
    vibeTags: ["architectural", "peaceful", "serene"],
    tags: ["architectural", "cultural-tour", "historical", "urban", "walk-in"],
    badges: ["architectural-gem", "historic-landmark"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "perimeter_ramps", "step_free_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 12:00 PM, 04:00 PM - 07:00 PM (Daily)",
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
    amenities: ["historical_documentation", "perimeter_benches", "street_parking"],
    restrictions: ["Visitors are requested to maintain quiet reflection during active church services"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Erected in 1925 by architect Carlos Óvilo Castelo, this Neo-Mudéjar Catholic church commands Place Moulay El Mehdi with its warm ochre bell tower and painted timber nave.",
    shortValueProp: "The architectural centerpiece of the Spanish colonial Ensanche and an active symbol of interfaith heritage in northern Morocco.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 149,
    badge: "architectural-gem",
    tip: "Step inside to see the carved Mudéjar-style coffered ceiling and the stained-glass windows filtering warm amber light.",
    tips: [
      "Sunday mass is held in Spanish at 11:00 AM, welcoming visitors and the local expatriate community.",
      "The side ramp on the south facade makes this site fully wheelchair accessible from the sidewalk."
    ],
    highlights: [
      "Neo-Mudéjar brick relief patterns and 35-meter clock bell tower",
      "Peaceful three-nave interior featuring carved cedar tie beams and stained glass"
    ],
    emotionalBenefits: [
      "Discover the open religious pluralism woven into Tetouan's twentieth-century identity",
      "Enjoy a quiet architectural sanctuary in the center of the bustling European quarter"
    ],
    ticketTypes: [
      { name: "Public Church Visit", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free access to sanctuary, side naves, and historical exhibits"],
    excludedServices: ["Tower climb access"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Very Safe", description: "Situated directly on the city's main roundabout; constant civic and police presence.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "None", description: "An active parish church with zero admission charge or commercial solicitation.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Free entrance; voluntary donations to the parish maintenance box are appreciated.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Registered", description: "Original 1925 Spanish Protectorate landmark maintaining active daily religious services.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Completely flat interior floor with accessibility ramp from the street.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Place Moulay El Mehdi, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5726, lng: -5.3718 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Iglesia+de+Nuestra+Señora+de+las+Victorias+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-teatro-cine-espanol",
    city: "tetouan_martil",
    name: "Teatro Cine Español",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "nomad"],
    vibeTags: ["nostalgic", "architectural", "vibrant"],
    tags: ["architectural", "cultural-tour", "historical", "urban", "walk-in"],
    badges: ["architectural-landmark", "cultural-icon"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 08:00 PM (Varies with scheduled screenings & cultural events)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "20:00" },
      { dayOfWeek: 1, open: "10:00", close: "20:00" },
      { dayOfWeek: 2, open: "10:00", close: "20:00" },
      { dayOfWeek: 3, open: "10:00", close: "20:00" },
      { dayOfWeek: 4, open: "10:00", close: "20:00" },
      { dayOfWeek: 5, open: "10:00", close: "20:00" },
      { dayOfWeek: 6, open: "10:00", close: "20:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["atm_nearby", "restrooms", "ticket_booth"],
    restrictions: ["Interior auditorium entry is subject to scheduled festival screenings, plays, or concert hours"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Inaugurated in 1923, this iconic white Art Deco and Neo-Moorish theater hosted legendary flamenco performers before becoming northern Morocco's premier cinema palace.",
    shortValueProp: "The beating cultural heart of 20th-century Tetouan and the prestigious host venue of the Mediterranean Film Festival.",
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.4,
    reviewCount: 389,
    badge: "popular",
    tip: "Admire the bilingual Spanish-Arabic illuminated signage on the exterior facade before stopping at the historic sidewalk cafes nearby.",
    tips: [
      "Check the lobby board for current screenings, classical Andalusian concerts, or comedy tour dates.",
      "If traveling during the spring, don't miss festival week when international cinema directors gather here."
    ],
    highlights: [
      "Striking 1923 facade combining Spanish rationalism, Art Deco curves, and horseshoe arches",
      "Grand historic auditorium preserving velvet seating, stage proscenium, and classic cinema acoustics"
    ],
    emotionalBenefits: [
      "Relive the golden age of northern Moroccan cinema and theater culture",
      "Experience the living bridge between Andalusian performing arts and Moroccan audiences"
    ],
    ticketTypes: [
      { name: "Facade & Lobby Walk", price: 0, currency: "MAD" },
      { name: "Cinema Screenings (Event-dependent)", price: 30, currency: "MAD" }
    ],
    includedServices: ["Self-guided exterior architectural view and lobby access during open box office hours"],
    excludedServices: ["Reserved cinema and concert tickets"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Central", description: "Positioned on a prime pedestrian avenue with bustling foot traffic day and evening.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Official", description: "Official municipal box office with printed, fixed ticket tariffs for all cultural events.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Affordable", description: "Viewing the building is free; event movie tickets range from 20 to 30 MAD.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Historic", description: "Over 100 years of continuous service as Tetouan's primary stage and movie theater.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Level street entrance with wide double doors and step-free main floor access.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Mohamed Ben Larbi Torres, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5710, lng: -5.3698 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Teatro+Cine+Espanol+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-general-library-and-archives",
    city: "tetouan_martil",
    name: "General Library and Archives of Tetouan",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["history", "culture", "quiet-mystic"],
    vibeTags: ["peaceful", "historical", "serene"],
    tags: ["cultural-tour", "historical", "relaxed", "urban", "walk-in"],
    badges: ["educational", "quiet-retreat"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "level_entry_doorway", "wide_main_corridors"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: true,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: false
    },
    openingHours: "09:00 AM - 04:30 PM (Monday to Friday, Closed Saturday & Sunday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "16:30" },
      { dayOfWeek: 2, open: "09:00", close: "16:30" },
      { dayOfWeek: 3, open: "09:00", close: "16:30" },
      { dayOfWeek: 4, open: "09:00", close: "16:30" },
      { dayOfWeek: 5, open: "09:00", close: "16:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["historical_documentation", "information_desk", "restrooms"],
    restrictions: ["Visitors must show photo ID at reception; strict silence enforced in reading halls"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Founded in 1939 during the Spanish Protectorate, this major research library holds over 60,000 volumes, rare Arabic and Hebrew manuscripts, and northern Morocco's historical photographic archives.",
    shortValueProp: "The intellectual treasury of northern Morocco, offering scholars and heritage lovers access to centuries of documentary history.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.5,
    reviewCount: 98,
    badge: "hidden-gem",
    tip: "Request to view the exhibition vitrines in the central hall displaying vintage black-and-white colonial photographs of Tetouan.",
    tips: [
      "Carry your passport or national ID card if you wish to obtain a temporary reader pass for manuscript consultation.",
      "The quiet interior reading rooms offer one of the most serene working and contemplation spaces in the city center."
    ],
    highlights: [
      "Invaluable collection of medieval Andalusian manuscripts, treaties, and lithographed presses",
      "Handsome 1930s colonial library architecture with hardwood reading tables and brass lamps"
    ],
    emotionalBenefits: [
      "Appreciate Tetouan's legacy as a capital of scholarship, diplomacy, and cross-cultural translation",
      "Enjoy a quiet, scholarly retreat from bustling downtown traffic"
    ],
    ticketTypes: [
      { name: "Public Reading Room Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Public access to exhibition lobby, general reading hall, and reference catalogs"],
    excludedServices: ["Rare manuscript reproduction permits", "Archival digitization services"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Quiet", description: "Quiet state academic institution with security check-in at the front desk.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "None", description: "Official national library under the Ministry of Culture with completely free public services.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Free admission and reading room consultation for researchers and visitors alike.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Priceless", description: "The definitive primary documentary archive of northern Moroccan history.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Ground-floor entry with flat wide corridors and elevator access to upper stacks.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "32 Avenue Mohammed V, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5720, lng: -5.3731 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bibliotheque+Generale+et+Archives+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-national-institute-of-fine-arts",
    city: "tetouan_martil",
    name: "National Institute of Fine Arts",
    neighborhood: "Ensanche",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "nomad"],
    vibeTags: ["artistic", "architectural", "peaceful"],
    tags: ["authentic", "cultural-tour", "modern", "relaxed", "urban", "walk-in", "workshop"],
    badges: ["cultural-icon", "educational"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_courtyard", "ground_floor_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 04:30 PM (Monday to Friday, Closed Saturday & Sunday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "16:30" },
      { dayOfWeek: 2, open: "09:00", close: "16:30" },
      { dayOfWeek: 3, open: "09:00", close: "16:30" },
      { dayOfWeek: 4, open: "09:00", close: "16:30" },
      { dayOfWeek: 5, open: "09:00", close: "16:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "historical_documentation", "information_desk", "restrooms"],
    restrictions: ["Do not touch ongoing student canvases or sculpture installations in working studios"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Founded in 1945 by painter Mariano Bertuchi, this legendary national academy is the cradle of contemporary Moroccan visual arts and comic illustration.",
    shortValueProp: "The birthplace of northern Morocco's fine arts renaissance, where modern visual artists and graphic novel pioneers are trained.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.6,
    reviewCount: 235,
    badge: "top-pick",
    tip: "Inquire at the reception to visit the public student exhibition gallery, which features cutting-edge contemporary Moroccan paintings.",
    tips: [
      "If visiting in May, catch the International Comic Strip Festival (Forum International de la BD) hosted on the institute grounds.",
      "The campus architecture features a tranquil arcaded courtyard that provides a peaceful contrast to the city avenues."
    ],
    highlights: [
      "Public exhibition gallery showing graduation works and rotating Mediterranean artist showcases",
      "Historical campus founded by Mariano Bertuchi that gave birth to the famous 'Tetouan School' of painting"
    ],
    emotionalBenefits: [
      "Feel the youthful creative energy shaping modern Moroccan art and visual storytelling",
      "Witness an essential bridge connecting European classical technique with Moroccan artistic identity"
    ],
    ticketTypes: [
      { name: "Public Gallery & Campus Visit", price: 0, currency: "MAD" }
    ],
    includedServices: ["Self-guided access to public exhibition gallery and central courtyard"],
    excludedServices: ["Master class participation"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Gated", description: "University campus with guarded gate entry and professional academic environment.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Academic", description: "State higher education institution; zero commercial sales or touts.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free", description: "Visiting the public art galleries and campus garden is completely free of charge.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Premier", description: "Morocco's foremost national fine arts institution and highest degree-granting art academy.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Flat walkways throughout the open courtyard with level entrance doorways.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "Avenue Mohammed V, Quartier Scolaire, Ensanche, 93000 Tétouan",
    coordinates: { lat: 35.5732, lng: -5.3775 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Institut+National+des+Beaux-Arts+Tetouan%2C+Morocco"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "tetouan-martil-galerie-el-fenn",
    city: "tetouan_martil",
    name: "Galerie d'Art El Fenn",
    neighborhood: "Wilaya",
    // ── 1. QUIZ ─────────────────────────────────────────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "luxury-curator"],
    vibeTags: ["artistic", "elegant", "serene"],
    tags: ["cultural-tour", "modern", "relaxed", "urban", "walk-in"],
    badges: ["cultural-immersion", "hidden-gem"],
    // ── 2. FILTER ───────────────────────────────────────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 1.8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["level_entry_doorway", "step_free_access", "wide_main_corridors"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 01:00 PM, 04:00 PM - 08:00 PM (Monday to Saturday, Closed Sunday)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "10:00", close: "20:00" },
      { dayOfWeek: 2, open: "10:00", close: "20:00" },
      { dayOfWeek: 3, open: "10:00", close: "20:00" },
      { dayOfWeek: 4, open: "10:00", close: "20:00" },
      { dayOfWeek: 5, open: "10:00", close: "20:00" },
      { dayOfWeek: 6, open: "10:00", close: "20:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["exhibition_hall", "gift_shop", "information_desk", "restrooms", "street_parking"],
    restrictions: ["No touching artwork surfaces"],
    healthContraindications: [],
    // ── 3. UI ───────────────────────────────────────────────
    description: "Located in the modern Wilaya district, this premier gallery hosts curated exhibitions of Arabic calligraphy, Moroccan modern painting, and Andalusian geometric design.",
    shortValueProp: "Discover the cutting-edge of northern Morocco's contemporary art scene in a spacious, professional gallery setting.",
    images: [
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80"
    ],
    googleRating: 4.8,
    reviewCount: 46,
    badge: "hidden-gem",
    tip: "Inquire about works by master calligrapher Mohammed Qarmad and original Andalusian 'Zakhrafa' modern interpretations.",
    tips: [
      "The gallery owner is an accomplished artist who regularly offers insightful bilingual commentary on current exhibitions.",
      "Easily reached via a 5-minute petit taxi ride from the Ensanche to Wilaya Center."
    ],
    highlights: [
      "Museum-quality Arabic calligraphy and modern Mediterranean visual art exhibitions",
      "Clean, modern gallery space in the upscale Wilaya administrative and cultural corridor"
    ],
    emotionalBenefits: [
      "Engage with the sophisticated contemporary artistic voice of modern Tetouan",
      "Enjoy a serene, climate-controlled fine art space with personalized curator insight"
    ],
    ticketTypes: [
      { name: "Gallery Exhibition Admission", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free admission to active exhibitions and artist catalogs"],
    excludedServices: ["Artwork purchases and private shipping arrangements"],
    worries: [
      { id: "activity-safety", title: "Safety", icon: "shield", tag: "Upscale", description: "Modern, well-monitored commercial building in Tetouan's calmest professional district.", state: "verified", tone: "good", tagColor: "safety" },
      { id: "activity-scams", title: "Scams", icon: "warning", tag: "Reputable", description: "Registered contemporary art gallery with established national reputation; no pressure to buy.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-pricing", title: "Pricing", icon: "tag", tag: "Free Entry", description: "Viewing all exhibitions is free; original artworks have documented gallery price tags.", state: "verified", tone: "good", tagColor: "money" },
      { id: "activity-authenticity", title: "Authenticity", icon: "gem", tag: "Certified", description: "Direct collaboration with renowned living Moroccan painters and calligraphy masters.", state: "verified", tone: "good", tagColor: "craft" },
      { id: "activity-difficulty", title: "Difficulty", icon: "mountain", tag: "Effortless", description: "Step-free street access with modern elevator into the gallery exhibition hall.", state: "verified", tone: "good", tagColor: "safety" }
    ],
    address: "94 Avenue Le Caire, N° 6, Wilaya Center, Wilaya, 93000 Tétouan",
    coordinates: { lat: 35.5755, lng: -5.3524 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Galerie+d'Art+El+Fenn+Tetouan%2C+Morocco"
  }
];

export const tetouanMartilAdditionalHeritageThings: ThingToDoListing[] = tetouanMartilHeritageThings;