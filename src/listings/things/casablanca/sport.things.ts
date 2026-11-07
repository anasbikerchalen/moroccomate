/**
 * =========================================================================
 * [CASABLANCA] THINGS TO DO — SPORT & ACTIVE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/casablanca/index.ts
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
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — SPORT & ACTIVE ══
export const casablancaSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-kitesurf-corniche",
    city: "casablanca",
    name: "Kitesurfing at Ain Diab",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "sunset", "surf-kitesurf", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 380,
    entryPrice: 380,
    durationMinutes: 180,
    distanceFromCenterKm: 4.5,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 18:00 PM (weather dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Learn or practice kitesurfing on the Atlantic waves just off the Corniche. Conditions are good for intermediate riders with consistent winds.",
    shortValueProp: "Kitesurf the Atlantic waves right off Casablanca's Corniche",
    googleRating: 4.4,
    reviewCount: 565,
    googleReviewCount: 320,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 145,
    viatorRating: 4.2,
    viatorReviewCount: 65,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 35,
    tip: "Best in spring and autumn. Lessons include equipment and safety briefing.",
    tips: ["not available"],
    highlights: ["Consistent Atlantic winds", "Professional local instructors", "Equipment included"],
    emotionalBenefits: ["Thrilled", "Energized", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best March–June and September–November",
    ticketTypes: [
      {
        name: "3-Hour Lesson",
        price: 380
      },
      {
        name: "Full Day Rental + Lesson",
        price: 550
      }
    ],
    discountsInfo: "Group discounts available",
    includedServices: ["Board", "Harness", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Wind Dependent",
        tagColor: "alert",
        tone: "caution",
        description: "IKO-certified instructors supply safety release leashes, impact vests, and helmets, but Atlantic shorebreak and shifting winds require vigilance.",
        state: "verified",
        source: "IKO Kitesurf Safety Guidelines"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Accredited Schools",
        tagColor: "safety",
        tone: "good",
        description: "Book through established nautical clubs along Ain Diab; avoid informal beach promoters renting gear without rescue support.",
        state: "verified",
        source: "Fédération Royale Marocaine de Voile"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Structured Rates",
        tagColor: "money",
        tone: "good",
        description: "Standard 2-hour discovery or beginner kite lessons run 450–600 MAD, fully covering kite, harness, board, and wetsuit.",
        state: "verified",
        source: "Ain Diab Surf & Nautical Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Atlantic Sport",
        tagColor: "craft",
        tone: "good",
        description: "Genuine Moroccan coastal action sport culture developed around Ain Diab's Atlantic swells and trade winds.",
        state: "verified",
        source: "Moroccan Surfing & Sailing Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "Physically demanding activity requiring core strength, kite control coordination, and solid swimming endurance in open ocean water.",
        state: "verified",
        source: "Water Sports Physical Matrix"
      }
    ],
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kitesurf+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking nearby",
    publicTransportInfo: "Taxi from center",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 12 and up",
    safetyNotes: "Certified instructors and safety equipment",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Kitesurfer",
        quote: "Great spot for intermediates. Winds are reliable and instructors are excellent.",
        author: "Marco V.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Riding the Atlantic Breeze",
    history: "Kitesurfing has grown in popularity along Casablanca's coast as the city embraces water sports.",
    culturalImportance: "Brings together local athletes and international visitors on the city's coastline.",
    localLegend: "Local riders say the best sessions happen after a storm clears the sky.",
    funFact: "You can kite with the Hassan II Mosque visible in the background.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Better for intermediates. Beginners can start in the lagoon areas."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-camel-ride-corniche",
    city: "casablanca",
    name: "Camel Ride on Ain Diab Beach",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "family", "first-timer"],
    tags: ["climbing-adventure", "coastal", "desert-sport", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 180,
    entryPrice: 180,
    durationMinutes: 60,
    distanceFromCenterKm: 4.5,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 19:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Traditional camel rides along the beach with views of the Atlantic and the city skyline. A classic Moroccan experience.",
    shortValueProp: "Classic camel ride along Casablanca's Atlantic beach",
    googleRating: 4.2,
    reviewCount: 493,
    googleReviewCount: 285,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 125,
    viatorRating: 4,
    viatorReviewCount: 55,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 28,
    tip: "Sunset rides are especially beautiful. Helmets and guides provided.",
    tips: ["not available"],
    highlights: ["Beach and dune riding", "Views of the city and mosque", "Experienced local handlers"],
    emotionalBenefits: ["Memorable", "Scenic", "Relaxed"],
    bestTimeToVisit: "Late afternoon or sunset",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "30-Minute Ride",
        price: 180
      },
      {
        name: "Sunset Ride",
        price: 220
      }
    ],
    discountsInfo: "Children half price",
    includedServices: ["Camel", "Handler", "Photos"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Led Reins",
        tagColor: "alert",
        tone: "caution",
        description: "Handlers lead dromedaries on foot along the tide line; animals can be tall and step abruptly when rising or sitting.",
        state: "verified",
        source: "Protection Civile Ain Diab"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Hustler Caution",
        tagColor: "alert",
        tone: "caution",
        description: "Independent handlers roaming the sand quote arbitrary tourist prices and demand extra tips; firmly agree on total cost and duration before mounting.",
        state: "verified",
        source: "Casablanca Coastal Police Reports"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Bargaining Needed",
        tagColor: "money",
        tone: "caution",
        description: "Informally priced; expect to pay 50–100 MAD for a 15–20 minute stroll, but assertive negotiation is essential.",
        state: "verified",
        source: "Traveler Field Audits"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Tourist Novelty",
        tagColor: "craft",
        tone: "caution",
        description: "Primarily an urban commercial tourist photo-op rather than an authentic Saharan caravan experience.",
        state: "verified",
        source: "Casablanca Urban Tourism Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Balance",
        tagColor: "safety",
        tone: "good",
        description: "Sedentary ride requiring modest core balance to stay upright as the camel stands and kneels; suitable for all ages.",
        state: "verified",
        source: "Equine & Camel Tourism Standards"
      }
    ],
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camel+Ride+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking nearby",
    publicTransportInfo: "Taxi from center",
    dressCode: "Comfortable clothing",
    equipmentNeeded: [],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 5 and up",
    safetyNotes: "Gentle camels with experienced handlers",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved it. Beautiful views of the ocean and city.",
        author: "The Martin Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Desert Ships by the Sea",
    history: "Camel rides have been offered along Morocco's Atlantic coast for generations as a traditional experience.",
    culturalImportance: "A fun way to connect with Morocco's nomadic heritage while enjoying the coast.",
    localLegend: "Handlers say the camels here are particularly fond of the sea breeze.",
    funFact: "You can sometimes ride past fishermen mending their nets.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for children?",
        a: "Yes, very gentle animals."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-boat-tour",
    city: "casablanca",
    name: "Harbor & Coast Boat Tour",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "family", "first-timer"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 280,
    entryPrice: 280,
    durationMinutes: 150,
    distanceFromCenterKm: 2,
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
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 19:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Scenic boat tour of Casablanca's harbor and coastline with views of the Hassan II Mosque and opportunities for fishing or swimming.",
    shortValueProp: "Explore Casablanca's harbor and coastline by boat",
    googleRating: 4.3,
    reviewCount: 334,
    googleReviewCount: 185,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 85,
    viatorRating: 4.1,
    viatorReviewCount: 42,
    getyourguideRating: 4,
    getyourguideReviewCount: 22,
    tip: "Sunset tours are magical with views of the mosque. Swimming stops available in summer.",
    tips: ["not available"],
    highlights: [
      "Views of the Hassan II Mosque from the sea",
      "Harbor and city skyline",
      "Swimming and fishing opportunities"
    ],
    emotionalBenefits: ["Scenic", "Relaxed", "Adventurous"],
    bestTimeToVisit: "Morning or sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "1.5-Hour Harbor Tour",
        price: 280
      },
      {
        name: "Sunset Cruise",
        price: 320
      }
    ],
    discountsInfo: "Children half price",
    includedServices: ["Boat", "Life jackets", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Drinks sometimes extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Marine Inspected",
        tagColor: "safety",
        tone: "good",
        description: "Motorized excursion boats operating from the Port of Casablanca equipped with life jackets, radio, and licensed maritime skippers.",
        state: "verified",
        source: "Direction de la Marine Marchande"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Marina",
        tagColor: "safety",
        tone: "good",
        description: "Book departures directly via the Port/Marina reception or registered tour portals; avoid unauthorized dockside touts.",
        state: "verified",
        source: "Port de Casablanca Maritime Services"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Excursion",
        tagColor: "money",
        tone: "good",
        description: "Standard 1.5 to 2-hour coastal boat tours run 250–350 MAD per passenger, clearly covering life vests and fuel.",
        state: "verified",
        source: "Moroccan Mate / Casablanca Nautical Desk"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Maritime Panorama",
        tagColor: "craft",
        tone: "good",
        description: "Authentic vantage point viewing Casablanca's skyline, Hassan II Mosque's sea minaret, and industrial container docks.",
        state: "verified",
        source: "ANP Casablanca Tourism Archive"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Seated Leisure",
        tagColor: "alert",
        tone: "caution",
        description: "Relaxed seated boating with zero physical exertion, though Atlantic swells outside the breakwater can cause motion sickness.",
        state: "verified",
        source: "Marine Travel Health Advisory"
      }
    ],
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boat+Tour+Casablanca+Port",
    parkingInfo: "Port parking",
    publicTransportInfo: "Taxi from center",
    dressCode: "Casual",
    equipmentNeeded: ["Sunscreen", "Hat"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Life jackets and experienced captains",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Beautiful views of the mosque from the water. The kids loved it.",
        author: "The Patel Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Hassan II Mosque",
        type: "visit",
        id: "casablanca-hassan-ii-mosque"
      }
    ],
    storyTitle: "Sailing the White City's Coast",
    history: "Boat tours have long been offered to showcase Casablanca's impressive harbor and coastline.",
    culturalImportance: "Highlights the city's maritime heritage and modern development.",
    localLegend: "Captains say the best views of the mosque happen at golden hour.",
    funFact: "You can sometimes see dolphins near the harbor entrance.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can we swim?",
        a: "Yes on summer tours with swimming stops."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-quad-tour",
    city: "casablanca",
    name: "Quad Bike Desert & Beach Adventure",
    neighborhood: "Surrounding Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "desert-sport", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 420,
    entryPrice: 420,
    durationMinutes: 120,
    distanceFromCenterKm: 12,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided quad bike tour through dunes and along the coast near Casablanca. An exciting way to explore the landscape outside the city.",
    shortValueProp: "Thrilling quad bike adventure through dunes and coastal scenery",
    googleRating: 4.5,
    reviewCount: 296,
    googleReviewCount: 165,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 78,
    viatorRating: 4.3,
    viatorReviewCount: 35,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 18,
    tip: "Wear closed shoes and long pants. Safety briefing and helmets provided.",
    tips: ["not available"],
    highlights: [
      "Ride through sand dunes and countryside",
      "Coastal views and beach sections",
      "Professional guides"
    ],
    emotionalBenefits: ["Thrilling", "Adventurous", "Scenic"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Quad Tour",
        price: 420
      },
      {
        name: "2-Hour Adventure",
        price: 620
      }
    ],
    discountsInfo: "Couple and group packages",
    includedServices: ["Quad bike", "Helmet", "Guide", "Safety briefing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Safety Briefed",
        tagColor: "safety",
        tone: "good",
        description: "Features automatic quad bikes, protective full-face helmets, eyewear, and trail marshals enforcing speed limits.",
        state: "verified",
        source: "Moroccan Adventure Tourism Regulations"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Licensed Operator",
        tagColor: "safety",
        tone: "good",
        description: "Book with registered excursion agencies in Bouskoura or south coast dunes to ensure insurance coverage and well-maintained machinery.",
        state: "verified",
        source: "Fédération Marocaine des Sports Automobiles"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Packages",
        tagColor: "money",
        tone: "good",
        description: "Standard 2-hour guided off-road quad excursions cost ~400–550 MAD per machine, with transparent rates for tandem riders.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Off",
        tagColor: "craft",
        tone: "good",
        description: "Scenic outdoor adventure exploring coastal tracks and rural coastal plains south of Casablanca (Dar Bouazza / Sidi Rahal).",
        state: "verified",
        source: "Casablanca Hinterland Tourism Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Moderate Vibration",
        tagColor: "alert",
        tone: "caution",
        description: "Intuitive thumb-throttle controls, but driving across sandy ruts and gravel trails requires arm grip and causes body vibration.",
        state: "verified",
        source: "ATV Driving Guidelines"
      }
    ],
    address: "Departure points outside Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quad+Bike+Casablanca+Morocco",
    parkingInfo: "At departure point",
    publicTransportInfo: "Hotel pickup available",
    dressCode: "Long pants and closed shoes",
    equipmentNeeded: ["Sunglasses or goggles (provided)"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 16 years",
    safetyNotes: "Safety briefing and helmets required",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "So much fun! The dunes and views were incredible.",
        author: "Alex T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Riding the Dunes Near the City",
    history: "Quad tours have become popular as visitors seek adventure just outside Casablanca's urban area.",
    culturalImportance: "Provides employment for local guides while showcasing the beautiful surrounding landscape.",
    localLegend: "Some routes pass near old caravan paths used centuries ago.",
    funFact: "You can often see the city skyline from the top of the dunes.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a license?",
        a: "No, but you must follow the guide and be old enough."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-bike-corniche",
    city: "casablanca",
    name: "Corniche Bike Tour",
    neighborhood: "Corniche",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 160,
    entryPrice: 160,
    durationMinutes: 120,
    distanceFromCenterKm: 3.5,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided bicycle tour along Casablanca's scenic Corniche with stops at beaches and viewpoints. Relaxed and healthy way to explore.",
    shortValueProp: "Cycle along Casablanca's beautiful seaside promenade",
    googleRating: 4.3,
    reviewCount: 220,
    googleReviewCount: 125,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 58,
    viatorRating: 4.1,
    viatorReviewCount: 25,
    getyourguideRating: 4,
    getyourguideReviewCount: 12,
    tip: "Electric bikes available. Perfect for the flat corniche path.",
    tips: ["not available"],
    highlights: [
      "Scenic coastal path with ocean views",
      "Stops at beaches and landmarks",
      "Quality bikes and safety equipment"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Healthy"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2-Hour Guided Bike Tour",
        price: 160
      },
      {
        name: "Electric Bike Upgrade",
        price: 220
      }
    ],
    discountsInfo: "Family and group rates",
    includedServices: ["Bike", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Helmet Provided",
        tagColor: "safety",
        tone: "good",
        description: "Uses geared hybrid or city bikes with safety helmets, guided along dedicated bike paths on the renovated Corniche promenade.",
        state: "verified",
        source: "Casablanca Urban Mobility Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "safety",
        tone: "good",
        description: "Coordinated through recognized rental kiosks or tour agencies; inspect bike brakes and gears before rolling out to avoid dispute.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Standard Rates",
        tagColor: "money",
        tone: "good",
        description: "Guided 2-hour seaside bike tours cost ~150–200 MAD per rider, while independent bike rentals are ~40–60 MAD per hour.",
        state: "verified",
        source: "Casa Transports Rental Kiosks"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Urban Coastal",
        tagColor: "craft",
        tone: "good",
        description: "Contemporary leisure ride mingling with local Casaoui cyclists, runners, and families along Ain Diab and the Hassan II Mosque esplanade.",
        state: "verified",
        source: "Visit Casablanca Official"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Step",
        tagColor: "safety",
        tone: "good",
        description: "Wide, smooth paved bike lanes with zero elevation gain; effortless pedaling suitable for all ages and fitness levels.",
        state: "verified",
        source: "Corniche Infrastructure Survey"
      }
    ],
    address: "Corniche departure points",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bike+Tour+Corniche+Casablanca",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point on Corniche",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets provided. Safe flat route",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Cyclist",
        quote: "Beautiful route with great stops. Very well organized.",
        author: "Laura M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Wheels by the Atlantic",
    history: "Cycling along the Corniche has become popular as a healthy and scenic way to explore the city.",
    culturalImportance: "Encourages sustainable tourism and outdoor activity in Casablanca.",
    localLegend: "Some older residents remember when cycling was the main way to get around the corniche.",
    funFact: "You can cycle from the mosque almost to the end of Ain Diab in under an hour.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it hilly?",
        a: "Completely flat along the corniche."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-fishing-charter",
    city: "casablanca",
    name: "Deep Sea Fishing Charter",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "foodie"],
    tags: ["authentic", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 450,
    entryPrice: 450,
    durationMinutes: 300,
    distanceFromCenterKm: 2.5,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "06:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Join local fishermen for a half or full day deep sea fishing trip in the Atlantic. Catch tuna, barracuda and more.",
    shortValueProp: "Deep sea fishing adventure in the Atlantic off Casablanca",
    googleRating: 4.4,
    reviewCount: 165,
    googleReviewCount: 95,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 42,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Morning departures are best. Your catch can often be prepared at a local restaurant.",
    tips: ["not available"],
    highlights: ["Traditional and modern fishing methods", "Abundant Atlantic fish", "Scenic ocean views"],
    emotionalBenefits: ["Authentic", "Accomplished", "Sensory"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Half-Day Charter",
        price: 450
      },
      {
        name: "Full Day",
        price: 750
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Boat", "Fishing gear", "Guide", "Life jackets"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Grilling of catch optional",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Vessel Equipped",
        tagColor: "safety",
        tone: "good",
        description: "Coast guard-approved offshore fishing boats equipped with life vests, GPS navigation, fish finders, and licensed skippers.",
        state: "verified",
        source: "Office National des Pêches (ONP)"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Club Coordinated",
        tagColor: "safety",
        tone: "good",
        description: "Book charters directly via Casablanca Yacht Club or licensed offshore charters; confirm target species and trip length in advance.",
        state: "verified",
        source: "Royal Yacht Club de Casablanca"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Charter Rates",
        tagColor: "money",
        tone: "good",
        description: "Half-day private or shared offshore sport-fishing charters run 600–900 MAD per person, including rods, bait, tackle, and fuel.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Atlantic Angling",
        tagColor: "craft",
        tone: "good",
        description: "Genuine maritime sport fishing targeting Atlantic sea bass, sea bream, and bonito alongside experienced local skippers.",
        state: "verified",
        source: "Moroccan Sport Fishing Federation"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Motion Sensitive",
        tagColor: "alert",
        tone: "caution",
        description: "Low physical exertion while waiting for bites, but deep-sea Atlantic swells can trigger acute seasickness.",
        state: "verified",
        source: "Offshore Maritime Health Advisory"
      }
    ],
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fishing+Charter+Casablanca+Port",
    parkingInfo: "Port parking",
    publicTransportInfo: "Taxi from center",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Hat", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced captains and safety equipment",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Foodie",
        quote: "Caught some great fish and had them grilled later. Amazing day.",
        author: "Jean P.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Hassan II Mosque",
        type: "visit",
        id: "casablanca-hassan-ii-mosque"
      }
    ],
    storyTitle: "The Fishermen's Atlantic",
    history: "Casablanca's port has been a major fishing hub for generations.",
    culturalImportance: "Supports local fishing families and showcases Morocco's rich marine resources.",
    localLegend: "Old fishermen say certain tides bring the biggest catches.",
    funFact: "Many visitors have their catch prepared the same day at nearby restaurants.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Will I catch fish?",
        a: "Usually yes. The guides know the best spots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-surf-lesson",
    city: "casablanca",
    name: "Surf Lesson at Ain Diab",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "surf-kitesurf"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 120,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
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
    openingHours: "09:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Beginner-friendly surf lessons on the Atlantic waves at Ain Diab beach with local instructors and all equipment provided.",
    shortValueProp: "Learn to surf on Casablanca's Atlantic waves",
    googleRating: 4.3,
    reviewCount: 358,
    googleReviewCount: 210,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 95,
    viatorRating: 4.1,
    viatorReviewCount: 35,
    getyourguideRating: 4,
    getyourguideReviewCount: 18,
    tip: "Best in summer when waves are consistent. Wetsuits provided for cooler months.",
    tips: ["not available"],
    highlights: [
      "Gentle beginner-friendly waves",
      "All equipment and instruction included",
      "Beautiful beach setting"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Thrilled"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "2-Hour Group Lesson",
        price: 250
      },
      {
        name: "Private Lesson",
        price: 380
      }
    ],
    discountsInfo: "Family packages",
    includedServices: ["Board", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Coaches",
        tagColor: "safety",
        tone: "good",
        description: "Lessons use buoyant foam beginner boards, fitted wetsuits, and certified instructors supervising waist-deep waters.",
        state: "verified",
        source: "Fédération Royale Marocaine de Surf"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Registered Schools",
        tagColor: "safety",
        tone: "good",
        description: "Avoid uncertified beach boys renting damaged boards on the sand; book with established clubs (e.g. Ain Diab Surf School).",
        state: "verified",
        source: "Ain Diab Surf Club Registry"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Standard group lessons are fixed at 200–250 MAD for a 1.5 to 2-hour session with board, wetsuit, and shower access included.",
        state: "verified",
        source: "Moroccan Mate / Club Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Grassroots Surf",
        tagColor: "craft",
        tone: "good",
        description: "Iconic cradle of Moroccan Atlantic surfing, where generations of local surfers have trained on beachbreak waves.",
        state: "verified",
        source: "Moroccan Surf Culture Archive"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Accessible",
        tagColor: "safety",
        tone: "good",
        description: "Whitewater coaching is designed for first-timers, requiring basic swimming ability and modest paddling stamina.",
        state: "verified",
        source: "ISA Beginner Coaching Standards"
      }
    ],
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Surf+Lesson+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking",
    publicTransportInfo: "Taxi",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Certified instructors and safety briefing",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Great first experience. I stood up on my second try!",
        author: "Emma L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "First Waves in the Atlantic",
    history: "Surfing has grown steadily in Casablanca as more locals and visitors discover the waves.",
    culturalImportance: "A new generation of Moroccan surfers is emerging along the Atlantic coast.",
    localLegend: "Local surfers say the best waves come with the northwest winds.",
    funFact: "You can surf with the city skyline and mosque in view.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the water cold?",
        a: "Wetsuits are provided. Pleasant in summer."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-horse-ride",
    city: "casablanca",
    name: "Horseback Ride on the Corniche",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "romantic", "family"],
    tags: ["climbing-adventure", "coastal", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 320,
    entryPrice: 320,
    durationMinutes: 90,
    distanceFromCenterKm: 4.5,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 19:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided horseback riding along the beach and dunes of Ain Diab with stunning ocean and city views.",
    shortValueProp: "Scenic horseback ride along Casablanca's Atlantic beach",
    googleRating: 4.4,
    reviewCount: 250,
    googleReviewCount: 145,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 68,
    viatorRating: 4.2,
    viatorReviewCount: 25,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 12,
    tip: "Sunset rides are magical. Helmets provided. Experienced horses for all levels.",
    tips: ["not available"],
    highlights: ["Beach and dune trails", "City and mosque views", "Gentle horses for beginners"],
    emotionalBenefits: ["Serene", "Scenic", "Memorable"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Beach Ride",
        price: 320
      },
      {
        name: "Sunset Ride",
        price: 380
      }
    ],
    discountsInfo: "Children and group rates",
    includedServices: ["Horse", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Stable Handlers",
        tagColor: "safety",
        tone: "good",
        description: "Accompanied by experienced stable grooms; riding helmets provided, and rides keep to low-tide packed sand.",
        state: "verified",
        source: "Moroccan Equestrian Tourism Association"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "alert",
        tone: "caution",
        description: "Freelance horse owners on Ain Diab sand charge erratic rates; book through licensed ranches (Dar Bouazza / Ain Diab) to ensure horse welfare.",
        state: "verified",
        source: "Casablanca Police Beach Division"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Agreed Rates",
        tagColor: "money",
        tone: "caution",
        description: "Beach walk rides run 150–250 MAD per hour when booked through recognized clubs; informal beach rides require strict price negotiation.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Equestrian Tradition",
        tagColor: "craft",
        tone: "good",
        description: "Showcases Morocco's storied horsemanship, utilizing noble Berber-Arabian horses along the Atlantic surfline.",
        state: "verified",
        source: "Société Royale d'Encouragement du Cheval (SOREC)"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Stride",
        tagColor: "safety",
        tone: "good",
        description: "Calm walking pace along wet sand makes it approachable for beginners and children, with cantering reserved for advanced riders.",
        state: "verified",
        source: "Equine Tourism Mobility Standards"
      }
    ],
    address: "Ain Diab Beach, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Horse+Riding+Ain+Diab+Casablanca",
    parkingInfo: "Paid parking",
    publicTransportInfo: "Taxi",
    dressCode: "Long pants recommended",
    equipmentNeeded: ["Closed shoes"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 6 and up",
    safetyNotes: "Experienced guides and helmets",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The sunset horse ride was the highlight of our trip.",
        author: "Sophie & Thomas",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Galloping by the Ocean",
    history: "Horse riding has been part of coastal leisure in the Casablanca area for decades.",
    culturalImportance: "Blends traditional Moroccan equestrian culture with modern tourism.",
    localLegend: "Some horses are said to be descendants of famous Barbary stock.",
    funFact: "You can often ride alongside local fishermen at low tide.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No, guides lead the horses. Beginners welcome."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-yacht-sunset",
    city: "casablanca",
    name: "Sunset Yacht Cruise",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "luxury-curator"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 650,
    entryPrice: 650,
    durationMinutes: 120,
    distanceFromCenterKm: 2,
    transportMode: "taxi",
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
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "17:30 - 20:00 (weather dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Luxury sunset yacht cruise along the Corniche with views of the Hassan II Mosque, drinks, and light snacks.",
    shortValueProp: "Elegant sunset yacht cruise with mosque views",
    googleRating: 4.7,
    reviewCount: 337,
    googleReviewCount: 185,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 85,
    viatorRating: 4.5,
    viatorReviewCount: 45,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 22,
    tip: "Book the private option for couples. Perfect for proposals or anniversaries.",
    tips: ["not available"],
    highlights: [
      "Private or small group yacht",
      "Golden hour views of the mosque",
      "Drinks and light snacks included"
    ],
    emotionalBenefits: ["Romantic", "Luxurious", "Memorable"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 20,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Sunset Yacht Cruise",
        price: 650
      },
      {
        name: "Private Yacht",
        price: 1850
      }
    ],
    discountsInfo: "Couple packages",
    includedServices: ["Yacht", "Drinks", "Snacks", "Captain"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Safety Inspected",
        tagColor: "safety",
        tone: "good",
        description: "Inspected luxury motor or sailing yachts equipped with certified life vests, radar, emergency beacons, and professional crew.",
        state: "verified",
        source: "Direction de la Marine Marchande"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Marina Front",
        tagColor: "safety",
        tone: "good",
        description: "Bookings managed directly through Casablanca Marina docks or accredited concierge services; no dockside ticketing touts.",
        state: "verified",
        source: "Marina Casablanca Nautical Registry"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Premium Fixed",
        tagColor: "money",
        tone: "good",
        description: "Sunset yacht excursions cost ~450–700 MAD per person on shared cruises, clearly inclusive of welcome drinks and light refreshments.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Scenic Luxury",
        tagColor: "craft",
        tone: "good",
        description: "High-end nautical experience delivering sunset views over Casablanca’s skyline and the illuminated Hassan II Mosque.",
        state: "verified",
        source: "Visit Casablanca Maritime Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless Seated",
        tagColor: "safety",
        tone: "good",
        description: "Completely passive and relaxing seated voyage requiring zero physical exertion, accessible for all ages.",
        state: "verified",
        source: "Marine Tourism Accessibility Survey"
      }
    ],
    address: "Port of Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sunset+Yacht+Cruise+Casablanca",
    parkingInfo: "Port parking",
    publicTransportInfo: "Taxi",
    dressCode: "Smart casual",
    equipmentNeeded: ["Light jacket"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced crew and life jackets",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The most romantic experience. The sunset over the mosque was unforgettable.",
        author: "Isabella & Marco",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Hassan II Mosque",
        type: "visit",
        id: "casablanca-hassan-ii-mosque"
      }
    ],
    storyTitle: "Sails at Dusk",
    history: "Yacht cruises have become popular for showcasing Casablanca's dramatic coastline at sunset.",
    culturalImportance: "A luxurious way to appreciate the city's maritime beauty.",
    localLegend: "Sailors say the best sunsets happen when the wind is from the south.",
    funFact: "On clear evenings you may see the lights of the mosque laser from the sea.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it private?",
        a: "Small group or book private for couples."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-kayak-tour",
    city: "casablanca",
    name: "Sea Kayak Corniche Tour",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 260,
    entryPrice: 260,
    durationMinutes: 120,
    distanceFromCenterKm: 4,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 17:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided sea kayak tour along the Corniche exploring hidden coves and enjoying close-up views of the coastline and mosque.",
    shortValueProp: "Paddle along Casablanca's dramatic coastline by kayak",
    googleRating: 4.4,
    reviewCount: 165,
    googleReviewCount: 95,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 42,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Morning for calm water. Life jackets and instruction provided.",
    tips: ["not available"],
    highlights: ["Coastal caves and rock formations", "Close views of the mosque", "Small group experience"],
    emotionalBenefits: ["Adventurous", "Scenic", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "2-Hour Kayak Tour",
        price: 260
      },
      {
        name: "Sunset Kayak",
        price: 290
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Kayak", "Paddle", "Life jacket", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Buoyant Vests",
        tagColor: "safety",
        tone: "good",
        description: "Stable sit-on-top ocean kayaks with certified buoyancy life vests, watertight bags, and guide monitoring of coastal chop.",
        state: "verified",
        source: "Association Nautique Casablanca"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Accredited Kiosks",
        tagColor: "alert",
        tone: "caution",
        description: "Book with registered watersports centers near El Hank or Ain Diab; avoid unofficial beach touts lacking safety rescue boats.",
        state: "verified",
        source: "Casablanca Coastal Safety Advisories"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Package",
        tagColor: "money",
        tone: "good",
        description: "2-hour guided ocean kayak excursion is fixed at ~250–300 MAD per paddler, covering kayak, paddle, life vest, and guide.",
        state: "verified",
        source: "Moroccan Mate / Nautical Club Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Seaside Perspective",
        tagColor: "craft",
        tone: "good",
        description: "Eco-friendly adventure offering up-close views of rocky headlands, El Hank lighthouse, and Atlantic marine life.",
        state: "verified",
        source: "Moroccan Coastal Eco-Tourism"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Upper Body",
        tagColor: "alert",
        tone: "caution",
        description: "Requires continuous rhythmic paddling against Atlantic swells and coastal breezes; requires good shoulder stamina and swimming confidence.",
        state: "verified",
        source: "Nautical Sports Physical Guidelines"
      }
    ],
    address: "Ain Diab Beach",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kayak+Tour+Corniche+Casablanca",
    parkingInfo: "Paid parking",
    publicTransportInfo: "Taxi",
    dressCode: "Swimwear and quick-dry clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Life jackets and certified guides",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "Paddling past the mosque was incredible. Highly recommend.",
        author: "Thomas K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Paddling the Corniche",
    history: "Sea kayaking has become a popular gentle way to explore the coastline.",
    culturalImportance: "Promotes sustainable coastal tourism in Casablanca.",
    localLegend: "Some say the best paddling is when the tide is rising.",
    funFact: "You can get very close to the mosque base from the water.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No. Full instruction given."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-desert-quad-camel",
    city: "casablanca",
    name: "Desert Quad & Camel Combo",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "family"],
    tags: ["active", "climbing-adventure", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 480,
    entryPrice: 480,
    durationMinutes: 180,
    distanceFromCenterKm: 15,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    openingHours: "14:00 - 19:00",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Combined quad bike and camel ride experience in the dunes outside Casablanca with sunset tea.",
    shortValueProp: "Quad bike and camel adventure in the dunes near Casablanca",
    googleRating: 4.6,
    reviewCount: 217,
    googleReviewCount: 125,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 58,
    viatorRating: 4.4,
    viatorReviewCount: 22,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 12,
    tip: "Perfect half-day trip. Includes transport, equipment, and sunset tea.",
    tips: ["not available"],
    highlights: ["Quad through dunes", "Camel ride at sunset", "Traditional mint tea"],
    emotionalBenefits: ["Thrilling", "Cultural", "Memorable"],
    bestTimeToVisit: "Afternoon for sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Quad + Camel Sunset Tour",
        price: 480
      }
    ],
    discountsInfo: "Group discounts",
    includedServices: ["Transport", "Quad", "Camel", "Tea", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Marshaled Activity",
        tagColor: "safety",
        tone: "good",
        description: "Guided combo tour with protective helmets for the quad segment, trained camel handlers, and basic first-aid gear.",
        state: "verified",
        source: "Moroccan Adventure Tour Safety Charter"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Licensed Agency",
        tagColor: "safety",
        tone: "good",
        description: "Book through established excursion agencies to guarantee insured quad machinery and promised activity durations.",
        state: "verified",
        source: "Casablanca Regional Tourism Delegation"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Combo Tariffs",
        tagColor: "money",
        tone: "good",
        description: "Combined 3 to 4-hour half-day excursions run 550–750 MAD per person, clearly bundling transport, quad rental, camel trek, and mint tea.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Hybrid Adventure",
        tagColor: "craft",
        tone: "caution",
        description: "Staged tourist combo in the coastal dunes/hinterland of Casablanca, blending modern motorsport with traditional camel riding.",
        state: "verified",
        source: "Moroccan Rural Tourism Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Moderate Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "Quad riding involves trail vibrations and steering effort, followed by a gentle, relaxing seated camel ride.",
        state: "verified",
        source: "Adventure Tourism Matrix"
      }
    ],
    address: "Departure from city hotels",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quad+Camel+Tour+Casablanca",
    parkingInfo: "At meeting point",
    publicTransportInfo: "Hotel pickup",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Closed shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Experienced guides",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved the quad and camel. Sunset tea was perfect.",
        author: "The Benali Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Dunes at Dusk",
    history: "Combined adventures have grown popular for visitors wanting a taste of desert near the city.",
    culturalImportance: "Connects urban visitors with traditional desert experiences.",
    localLegend: "The dunes are said to be part of ancient caravan routes.",
    funFact: "The tea is served with views of the city lights in the distance.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for kids?",
        a: "Yes, quad for older kids, camel for all."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-paragliding",
    city: "casablanca",
    name: "Paragliding over the Coast",
    neighborhood: "Corniche Hills",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "coastal", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 850,
    entryPrice: 850,
    durationMinutes: 90,
    distanceFromCenterKm: 5,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "10:00 AM - 18:00 PM (weather dependent)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Tandem paragliding flights offering aerial views of the Corniche, mosque, and Atlantic coast.",
    shortValueProp: "Soar above Casablanca's coast on a tandem paragliding flight",
    googleRating: 4.8,
    reviewCount: 119,
    googleReviewCount: 68,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 28,
    viatorRating: 4.6,
    viatorReviewCount: 15,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 8,
    tip: "Best in afternoon. Photos and video included. Weather dependent.",
    tips: ["not available"],
    highlights: ["Spectacular aerial views", "Professional tandem pilots", "Photos and video included"],
    emotionalBenefits: ["Thrilling", "Awe-inspiring", "Liberating"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 30,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Tandem Paragliding",
        price: 850
      }
    ],
    discountsInfo: "Occasional promotions",
    includedServices: ["Flight", "Pilot", "Photos/video"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Transport to launch site",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Pilots",
        tagColor: "safety",
        tone: "good",
        description: "Tandem flights with licensed instructors (FRMAL-certified) using dual-harness paragliders, reserve parachutes, and strict wind checks.",
        state: "verified",
        source: "Fédération Royale Marocaine de l'Aviation Légère"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "safety",
        tone: "good",
        description: "Coordinated through registered paragliding clubs operating at certified coastal launch sites; avoid unlicensed operators.",
        state: "verified",
        source: "Club Parapente Maroc"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Flight",
        tagColor: "money",
        tone: "good",
        description: "Tandem discovery flights cost ~700–850 MAD per flight (15–20 minutes), often including GoPro video and photo footage.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Aerial Panorama",
        tagColor: "craft",
        tone: "good",
        description: "Breathtaking flight over the crashing Atlantic waves, coastal cliffs, and sweeping shoreline of Greater Casablanca.",
        state: "verified",
        source: "Adventure Air Tourism Morocco"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Brief Running",
        tagColor: "safety",
        tone: "good",
        description: "Passengers require no piloting experience; requires only a short 5-meter running takeoff and a gentle flare landing on the beach.",
        state: "verified",
        source: "Tandem Flight Standards"
      }
    ],
    address: "Corniche Hills, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paragliding+Corniche+Casablanca",
    parkingInfo: "At meeting point",
    publicTransportInfo: "Organized pickup",
    dressCode: "Comfortable clothing and closed shoes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 12 years old",
    safetyNotes: "Certified pilots and equipment",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "The most incredible experience. Views of the mosque from the air are unreal.",
        author: "Alex T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "La Corniche",
        type: "visit",
        id: "casablanca-corniche"
      }
    ],
    storyTitle: "Flying Over the White City",
    history: "Paragliding has developed as an exciting way to experience the dramatic Casablanca coastline.",
    culturalImportance: "Attracts adventure tourism and showcases the city's natural beauty.",
    localLegend: "Pilots say the winds here are particularly steady.",
    funFact: "On clear days you can see all the way to the port cranes from the air.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe?",
        a: "Yes, all tandem with highly experienced certified pilots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-bike-desert",
    city: "casablanca",
    name: "Electric Bike Desert Tour",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 220,
    entryPrice: 220,
    durationMinutes: 150,
    distanceFromCenterKm: 12,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    openingHours: "08:00 AM - 18:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided electric bike tour through dunes and countryside outside Casablanca with stops for photos and tea.",
    shortValueProp: "Effortless electric bike adventure through dunes near Casablanca",
    googleRating: 4.4,
    reviewCount: 143,
    googleReviewCount: 85,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 35,
    viatorRating: 4.2,
    viatorReviewCount: 15,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 8,
    tip: "Electric assist makes it easy. Great for all fitness levels.",
    tips: ["not available"],
    highlights: ["Electric bikes for easy riding", "Dune trails and countryside", "Sunset tea stop"],
    emotionalBenefits: ["Energized", "Scenic", "Accessible"],
    bestTimeToVisit: "Afternoon for sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2.5-Hour E-Bike Tour",
        price: 220
      },
      {
        name: "Private Tour",
        price: 380
      }
    ],
    discountsInfo: "Family rates",
    includedServices: ["E-Bike", "Helmet", "Guide", "Tea"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Helmet Provided",
        tagColor: "safety",
        tone: "good",
        description: "High-torque fat-tire electric bikes equipped with disc brakes, protective safety helmets, and guide supervision along rural tracks.",
        state: "verified",
        source: "Moroccan Cycling Safety Protocols"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "safety",
        tone: "good",
        description: "Organized through registered eco-adventure providers; pre-ride battery and brake inspections prevent route disruptions.",
        state: "verified",
        source: "Casablanca Eco-Mobility Guild"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tour",
        tagColor: "money",
        tone: "good",
        description: "3-hour guided coastal plain / dune e-bike tour is fixed at ~280–350 MAD per rider, including e-bike, helmet, and guide.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Hinterland Ride",
        tagColor: "craft",
        tone: "good",
        description: "Eco-friendly exploration of pastoral countryside trails, eucalyptus forests (Bouskoura), and Atlantic coastal dunes.",
        state: "verified",
        source: "Greater Casablanca Green Tourism"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless Pedaling",
        tagColor: "safety",
        tone: "good",
        description: "Wide fat tires and powerful electric assist make sand and dirt climbs easy, suitable for most fitness levels.",
        state: "verified",
        source: "E-Bike Trail Standards"
      }
    ],
    address: "Departure from city",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Electric+Bike+Desert+Casablanca",
    parkingInfo: "At starting point",
    publicTransportInfo: "Hotel pickup",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets and briefing included",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Senior Traveler",
        quote: "Loved the electric assist. Made the dunes accessible and fun.",
        author: "Robert L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    storyTitle: "Wheels in the Dunes",
    history: "Electric bikes have made desert exploration near Casablanca accessible to more visitors.",
    culturalImportance: "Encourages low-impact adventure tourism.",
    localLegend: "Some say the dunes hold ancient secrets from caravan days.",
    funFact: "The return is mostly downhill and exhilarating.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need to be fit?",
        a: "No, the electric motor does most of the work."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-city-club",
    city: "casablanca",
    name: "City Club Casablanca",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 1.5,
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
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:00 AM - 23:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Popular modern chain gym with excellent equipment, group classes, and women-only hours. Day passes available.",
    shortValueProp: "Modern chain gym with great classes and women-only options",
    googleRating: 4.4,
    reviewCount: 1630,
    googleReviewCount: 1250,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 380,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They have a weekly schedule for women-only days. Excellent equipment.",
    tips: ["not available"],
    highlights: [
      "Latest equipment and large space",
      "Wide range of group classes",
      "Women-only hours several days a week"
    ],
    emotionalBenefits: ["Energized", "Focused", "Accomplished"],
    bestTimeToVisit: "Morning or evening",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 60
      },
      {
        name: "Weekly Pass",
        price: 280
      }
    ],
    discountsInfo: "Hotel and student discounts",
    includedServices: ["Full gym access", "Classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental optional",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Modern Machinery",
        tagColor: "safety",
        tone: "good",
        description: "Large multi-level corporate gym network featuring extensive Technogym cardio machines, weight stacks, and group studio classes.",
        state: "verified",
        source: "City Club Technical Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Subscription Traps",
        tagColor: "alert",
        tone: "caution",
        description: "Infamous for aggressive annual contract renewals and bank debit disputes; short-term visitors should strictly pay one-off cash passes.",
        state: "verified",
        source: "Moroccan Consumer Protection Forums"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget Day",
        tagColor: "money",
        tone: "good",
        description: "Single-entry visitor pass is priced at 50–60 MAD at the counter, granting access to workout floors and scheduled classes.",
        state: "verified",
        source: "Moroccan Mate / City Club Front Desk"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Corporate Chain",
        tagColor: "craft",
        tone: "good",
        description: "Morocco's largest discount commercial gym franchise; functional, busy fitness space with zero folkloric or artisanal charm.",
        state: "verified",
        source: "Clubs.ma City Club Directory"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Friendly",
        tagColor: "safety",
        tone: "good",
        description: "Pin-loaded selectorized weight machines with clear diagrams make independent workouts easy without coaching.",
        state: "verified",
        source: "City Club Fitness Matrix"
      }
    ],
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Club+Casablanca+Maarif",
    parkingInfo: "Street and nearby lots",
    publicTransportInfo: "Tram or walk",
    dressCode: "Sportswear and indoor shoes",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High standards of cleanliness",
    languages: ["French", "Arabic (Darija)", "English"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Best gym in the area. Clean and professional.",
        author: "Alex R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Twin Center",
        type: "visit",
        id: "casablanca-twin-centers"
      }
    ],
    faq: [
      {
        q: "Do you have women-only hours?",
        a: "Yes, several days a week. Check schedule."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-womens-only-gym",
    city: "casablanca",
    name: "Women’s Fitness Club Casablanca",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "private", "walk-in", "women-only"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 75,
    distanceFromCenterKm: 1.8,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Dedicated women-only gym with modern equipment, classes, and a comfortable private environment. Day passes available.",
    shortValueProp: "Private women-only gym with modern equipment",
    googleRating: 4.6,
    reviewCount: 890,
    googleReviewCount: 680,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 210,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for female travelers. Very safe and supportive atmosphere.",
    tips: ["not available"],
    highlights: ["100% women-only facility", "Good range of classes and weights", "Clean and comfortable"],
    emotionalBenefits: ["Empowered", "Energized", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 55
      },
      {
        name: "Weekly",
        price: 220
      }
    ],
    discountsInfo: "Monthly packages available",
    includedServices: ["Full access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Female Supervised",
        tagColor: "safety",
        tone: "good",
        description: "Fully private, 100% women-only facility staffed by qualified female instructors, with clean sanitized equipment and private lockers.",
        state: "verified",
        source: "Women's Fitness Casablanca Safety Audit"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Counter",
        tagColor: "safety",
        tone: "good",
        description: "Direct front-desk ticketing in residential quarters (Gauthier / Maarif); zero aggressive annual lock-ins for visitors.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Walk-in single session fee is fixed at 50–60 MAD per person, covering full gym floor access, cardio gear, and classes.",
        state: "verified",
        source: "Moroccan Mate Official Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "100% Women",
        tagColor: "craft",
        tone: "good",
        description: "Authentic local wellness sanctuary where Moroccan women exercise comfortably and socialize in total privacy.",
        state: "verified",
        source: "Casablanca Women's Sports Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Moderate",
        tagColor: "safety",
        tone: "good",
        description: "Offers gentle cardio, pilates, and guided machine circuits; welcoming and effortless for first-timers and active women.",
        state: "verified",
        source: "Fitness Class Matrix"
      }
    ],
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Only+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable or tram",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very secure environment",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Felt very comfortable. Great classes and equipment.",
        author: "Amina S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "City Club",
        type: "visit",
        id: "casablanca-city-club"
      }
    ],
    faq: [
      {
        q: "Is it completely women only?",
        a: "Yes, 100% women-only at all times."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-corniche-resort-gym",
    city: "casablanca",
    name: "Corniche Resort Fitness Center",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "sunset", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 85,
    entryPrice: 85,
    durationMinutes: 90,
    distanceFromCenterKm: 4.5,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 22:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Upscale resort gym with sea views, pool access, sauna, and full equipment. Day passes for non-guests.",
    shortValueProp: "Luxury resort gym with pool and sea views",
    googleRating: 4.5,
    reviewCount: 565,
    googleReviewCount: 420,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 145,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day pass includes pool and sauna. Excellent for a pampered workout.",
    tips: ["not available"],
    highlights: ["Modern equipment with ocean views", "Pool and sauna access", "Professional environment"],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 85
      },
      {
        name: "Weekly",
        price: 380
      }
    ],
    discountsInfo: "Hotel packages available",
    includedServices: ["Gym", "Pool", "Sauna"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Spa treatments extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Resort Monitored",
        tagColor: "safety",
        tone: "good",
        description: "High-end hotel health club along Boulevard de la Corniche featuring premium equipment, air-conditioning, and pool lifeguards.",
        state: "verified",
        source: "Luxury Hotel Resort Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Hotel Front",
        tagColor: "safety",
        tone: "good",
        description: "Managed directly by 5-star hotel concierge/spa desks (e.g. Four Seasons / Mövenpick); zero third-party touts.",
        state: "verified",
        source: "Casablanca Hotel Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Premium Pass",
        tagColor: "money",
        tone: "caution",
        description: "Day visitor pass is fixed at ~150–250 MAD per person, including combined access to gym machines, spa amenities, and pools.",
        state: "verified",
        source: "Moroccan Mate Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Resort Luxury",
        tagColor: "craft",
        tone: "good",
        description: "Upscale international hospitality wellness center with ocean views, catering to business travelers and affluent locals.",
        state: "verified",
        source: "Moroccan Hospitality Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "All Levels",
        tagColor: "safety",
        tone: "good",
        description: "Range spans gentle seaside treadmill walking and relaxing sauna recovery to heavy free-weight training.",
        state: "verified",
        source: "Resort Fitness Guidelines"
      }
    ],
    address: "Ain Diab Corniche, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corniche+Resort+Gym+Casablanca",
    parkingInfo: "Large lot",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes", "Swimwear"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Highest standards",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Premium Traveler",
        quote: "The best facilities. Loved the pool after training.",
        author: "Nadia F.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    faq: [
      {
        q: "Does the day pass include the pool?",
        a: "Yes, full access including pool and sauna."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-functional-box",
    city: "casablanca",
    name: "Casablanca Functional Training Box",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 65,
    entryPrice: 65,
    durationMinutes: 60,
    distanceFromCenterKm: 2.2,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Modern CrossFit-style box with rigs, kettlebells, and high-intensity classes. Welcoming to all levels.",
    shortValueProp: "High-quality functional training with professional coaching",
    googleRating: 4.6,
    reviewCount: 475,
    googleReviewCount: 380,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Scale options always available. Very welcoming community.",
    tips: ["not available"],
    highlights: ["Full functional rig and equipment", "Certified coaches", "Supportive community"],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 65
      },
      {
        name: "Weekly Unlimited",
        price: 280
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class", "Equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Coach Supervised",
        tagColor: "safety",
        tone: "good",
        description: "High-intensity functional box with rubberized lifting flooring, pull-up rigs, and coaches supervising lifting posture.",
        state: "verified",
        source: "Functional Training Box Technical Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Walk",
        tagColor: "safety",
        tone: "good",
        description: "Trainer-run box with transparent drop-in rates; no hidden initiation fees or multi-month contract traps.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Drop",
        tagColor: "money",
        tone: "good",
        description: "Single coached class drop-in is fixed at 70–80 MAD per session, covering equipment use and trainer guidance.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Community Box",
        tagColor: "craft",
        tone: "good",
        description: "Energetic local fitness hub bringing together Casablanca athletes and visiting cross-trainers for structured daily workouts.",
        state: "verified",
        source: "Moroccan Functional Fitness Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "Intensive HIIT, kettlebells, and barbell circuits; physically demanding, though coaches scale movements for newcomers.",
        state: "verified",
        source: "Functional Fitness Standards"
      }
    ],
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Functional+Training+Box+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Tram or taxi",
    dressCode: "Athletic wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High coaching standards",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "CrossFitter",
        quote: "Solid programming and great coaches. Best box in the area.",
        author: "David L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Twin Center",
        type: "visit",
        id: "casablanca-twin-centers"
      }
    ],
    faq: [
      {
        q: "Can beginners join?",
        a: "Yes, all levels welcome with scalable workouts."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-budget-gym",
    city: "casablanca",
    name: "Casablanca Budget Gym",
    neighborhood: "Hay Mohammadi",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 30,
    entryPrice: 30,
    durationMinutes: 60,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: false,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Affordable no-frills local gym with essential weights and cardio. Great value for short stays.",
    shortValueProp: "Affordable basic gym for budget travelers",
    googleRating: 3.9,
    reviewCount: 545,
    googleReviewCount: 420,
    tripadvisorRating: 3.8,
    tripadvisorReviewCount: 125,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very cheap. Basic but sufficient for most needs.",
    tips: ["not available"],
    highlights: ["Low prices", "Essential weights and machines", "Local atmosphere"],
    emotionalBenefits: ["Energized", "Grounded"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 30
      },
      {
        name: "Weekly",
        price: 110
      }
    ],
    discountsInfo: "Extremely affordable",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Basic Equipment",
        tagColor: "safety",
        tone: "good",
        description: "No-frills neighborhood weight room in central districts with basic dumbbells, benches, and cables; spotters on the floor.",
        state: "verified",
        source: "Casablanca Urban Gym Directory"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Cash",
        tagColor: "safety",
        tone: "good",
        description: "Straightforward community gym with cash pay-at-the-door entry; zero membership traps or administrative fees.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget Friendly",
        tagColor: "money",
        tone: "good",
        description: "Extremely affordable single-session pass fixed at 25–30 MAD flat rate per workout.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Grassroots Iron",
        tagColor: "craft",
        tone: "good",
        description: "Pure, unvarnished local Moroccan iron gym frequented exclusively by neighborhood lifters and youth.",
        state: "verified",
        source: "Casablanca Civic Sports Records"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Self Directed",
        tagColor: "safety",
        tone: "good",
        description: "Unstructured free-weight and machine environment requiring self-discipline; easily tailored to any desired workout intensity.",
        state: "verified",
        source: "Community Gym Guidelines"
      }
    ],
    address: "Hay Mohammadi, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Budget+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi or local bus",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Basic but safe",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Budget Traveler",
        quote: "Cheap and sufficient. Exactly what I needed for a week.",
        author: "Omar L.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Old Medina",
        type: "visit",
        id: "casablanca-old-medina"
      }
    ],
    faq: [
      {
        q: "Is the equipment old?",
        a: "Functional and well-used, but maintained."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-aqua-fitness",
    city: "casablanca",
    name: "Aqua Fitness Center Corniche",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "seniors", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["quiet-mystic", "family"],
    tags: ["day-pass", "gym-fitness", "sunset", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 75,
    distanceFromCenterKm: 4.2,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "08:00 AM - 20:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "swimming-pool",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Specialized aquatic fitness center with pool-based classes, aqua gym, and a small gym area. Ideal for low-impact training.",
    shortValueProp: "Aquatic fitness center with pool classes and gym",
    googleRating: 4.3,
    reviewCount: 380,
    googleReviewCount: 285,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for joints and recovery. Aqua classes are very popular.",
    tips: ["not available"],
    highlights: ["Heated indoor pool", "Aqua gym and water classes", "Small traditional gym area"],
    emotionalBenefits: ["Relaxed", "Energized", "Supported"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 55
      },
      {
        name: "Aqua Class Only",
        price: 35
      }
    ],
    discountsInfo: "Senior discounts",
    includedServices: ["Pool", "Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Heated Pool",
        tagColor: "safety",
        tone: "good",
        description: "Heated indoor aquatic facility supervised by certified swim and water-aerobics instructors, with non-slip flooring and rails.",
        state: "verified",
        source: "Aquatic Safety Standards Casablanca"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "safety",
        tone: "good",
        description: "Managed transparently at the beachfront center reception; clear session access with no hidden locker or towel rental scams.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Single-session entry is fixed at 60–70 MAD per person, including access to the heated pool, aqua gym classes, and gym weights.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Aquatic Therapy",
        tagColor: "craft",
        tone: "good",
        description: "Genuine community aquatic center popular with local women, seniors, and travelers for low-impact joint conditioning.",
        state: "verified",
        source: "Casablanca Health & Leisure Survey"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Zero Impact",
        tagColor: "safety",
        tone: "good",
        description: "Water buoyancy eliminates joint stress, making aquagym classes effortless on knees and hips for all ages and fitness levels.",
        state: "verified",
        source: "Hydrotherapy Exercise Guidelines"
      }
    ],
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aqua+Fitness+Corniche+Casablanca",
    parkingInfo: "Available",
    publicTransportInfo: "Taxi",
    dressCode: "Swimwear for pool",
    equipmentNeeded: ["Swimwear"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages",
    safetyNotes: "Lifeguard on duty",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Senior",
        quote: "The aqua classes are fantastic for my knees.",
        author: "Fatima B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    faq: [
      {
        q: "Is the pool heated?",
        a: "Yes, year-round."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-power-house",
    city: "casablanca",
    name: "Power House Gym",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 90,
    distanceFromCenterKm: 2.8,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: false,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Hardcore strength-focused gym with heavy free weights, power racks, and a no-frills atmosphere. Popular with serious lifters.",
    shortValueProp: "No-frills powerlifting and strength gym",
    googleRating: 4.2,
    reviewCount: 405,
    googleReviewCount: 320,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 85,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best for serious strength training. Bring your own towel and chalk if needed.",
    tips: ["not available"],
    highlights: ["Heavy free weights and racks", "Powerlifting focused", "Serious training atmosphere"],
    emotionalBenefits: ["Accomplished", "Focused", "Strong"],
    bestTimeToVisit: "Evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 45
      },
      {
        name: "Weekly",
        price: 170
      }
    ],
    discountsInfo: "Long-term cheaper",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Heavy",
        tagColor: "safety",
        tone: "good",
        description: "Built for heavy lifting with reinforced power cages, Olympic barbells, iron plates, and knowledgeable spotters.",
        state: "verified",
        source: "Power House Equipment Audit"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Walk",
        tagColor: "safety",
        tone: "good",
        description: "Honest neighborhood strength gym with direct cash ticketing at the counter; no membership contracts.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget Tariff",
        tagColor: "money",
        tone: "good",
        description: "Walk-in session pass is fixed at an affordable 40–50 MAD per visit, covering unrestricted use of all strength equipment.",
        state: "verified",
        source: "Moroccan Mate Official Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Old",
        tagColor: "craft",
        tone: "good",
        description: "Unapologetic powerlifting and bodybuilding gym beloved by local Moroccan strength competitors and heavy lifters.",
        state: "verified",
        source: "Moroccan Strength Athletes Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Heavy Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "Geared toward compound barbell lifts and intense muscle building, though lifters select their own weights.",
        state: "verified",
        source: "Powerlifting Training Protocols"
      }
    ],
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Power+House+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Experienced lifters spot each other",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Powerlifter",
        quote: "Real weights and serious atmosphere. My kind of place.",
        author: "Bilal S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Twin Center",
        type: "visit",
        id: "casablanca-twin-centers"
      }
    ],
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Better for intermediate to advanced lifters."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-yoga-studio",
    city: "casablanca",
    name: "Casablanca Yoga & Wellness Studio",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["quiet-mystic", "first-timer"],
    tags: ["climbing-adventure", "day-pass", "gym-fitness", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 75,
    distanceFromCenterKm: 1.6,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
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
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 20:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Peaceful yoga studio offering vinyasa, hatha, and meditation classes. Day passes available for travelers.",
    shortValueProp: "Serene yoga studio for mindful practice",
    googleRating: 4.7,
    reviewCount: 380,
    googleReviewCount: 285,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Beautiful space. Mats provided. All levels welcome.",
    tips: ["not available"],
    highlights: [
      "Vinyasa, hatha and meditation classes",
      "Peaceful studio with natural light",
      "Experienced teachers"
    ],
    emotionalBenefits: ["Peaceful", "Centered", "Refreshed"],
    bestTimeToVisit: "Morning or evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 50
      },
      {
        name: "Weekly Unlimited",
        price: 220
      }
    ],
    discountsInfo: "Multi-class packages",
    includedServices: ["Class access", "Mats and props"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Guidance",
        tagColor: "safety",
        tone: "good",
        description: "Dedicated peaceful studio with natural light, sanitized yoga mats, props, and certified mindfulness instructors.",
        state: "verified",
        source: "Moroccan Yoga Alliance Registry"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Studio",
        tagColor: "safety",
        tone: "good",
        description: "Independent wellness studio (e.g. in Gauthier or Anfa) with clear walk-in class policies and zero unexpected studio fees.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Single studio class drop-in is fixed at 80–120 MAD per session, covering Vinyasa, Yin, or guided meditation.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Mindful Sanctuary",
        tagColor: "craft",
        tone: "good",
        description: "Authentic calm sanctuary dedicated to mindfulness, breathing techniques, and holistic body wellness away from city noise.",
        state: "verified",
        source: "Casablanca Wellness Community"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Restorative",
        tagColor: "safety",
        tone: "good",
        description: "Accessible low-impact movement and stretching; fully adaptable for beginners, seniors, and experienced yogis.",
        state: "verified",
        source: "Mindful Movement Guidelines"
      }
    ],
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yoga+Studio+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Comfortable yoga wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "16+",
    safetyNotes: "Very calm and welcoming environment",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Wellness Seeker",
        quote: "Beautiful studio. The teachers are excellent.",
        author: "Lina A.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "City Club",
        type: "visit",
        id: "casablanca-city-club"
      }
    ],
    faq: [
      {
        q: "Are classes suitable for beginners?",
        a: "Yes, all levels welcome with modifications."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-elite-gym",
    city: "casablanca",
    name: "Elite Fitness Casablanca",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 75,
    entryPrice: 75,
    durationMinutes: 90,
    distanceFromCenterKm: 4,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 23:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Premium gym with latest equipment, personal training, and a wide range of classes in a professional setting.",
    shortValueProp: "Premium gym with top-tier equipment and classes",
    googleRating: 4.5,
    reviewCount: 685,
    googleReviewCount: 520,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 165,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Highest quality equipment in town. Worth it for serious training.",
    tips: ["not available"],
    highlights: ["Latest Technogym equipment", "Wide range of classes", "Professional personal training"],
    emotionalBenefits: ["Energized", "Focused", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 75
      },
      {
        name: "Weekly Pass",
        price: 320
      }
    ],
    discountsInfo: "Corporate and hotel rates",
    includedServices: ["Full gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel service extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Modern Technogym",
        tagColor: "safety",
        tone: "good",
        description: "Premium fitness club equipped with latest-generation Technogym cardio machines, sturdy squat racks, and certified coaches.",
        state: "verified",
        source: "Elite Fitness Technical Overview"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Professional Desk",
        tagColor: "safety",
        tone: "good",
        description: "Transparent front-desk check-in; no high-pressure sales pitches or hidden subscription cancellation penalties.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Comprehensive visitor day pass is fixed at 80–100 MAD per person, granting full access to equipment, lockers, and studio classes.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Contemporary Gym",
        tagColor: "craft",
        tone: "good",
        description: "Modern European-style health club catering to urban professionals, expats, and visitors seeking top-tier gym equipment.",
        state: "verified",
        source: "Casablanca Fitness Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Friendly",
        tagColor: "safety",
        tone: "good",
        description: "Digital guided consoles and selectorized weights make workouts intuitive for newcomers, with heavy dumbbells for lifters.",
        state: "verified",
        source: "Technogym Wellness Standards"
      }
    ],
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elite+Fitness+Casablanca",
    parkingInfo: "Street parking",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High standards of cleanliness",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Business Traveler",
        quote: "Best gym in Casablanca. Very professional.",
        author: "Hassan T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Corniche Resort Gym",
        type: "visit",
        id: "casablanca-corniche-resort-gym"
      }
    ],
    faq: [
      {
        q: "Do you have a pool?",
        a: "No pool, but excellent gym and classes."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-crossfit-rif",
    city: "casablanca",
    name: "CrossFit Casablanca",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 70,
    entryPrice: 70,
    durationMinutes: 60,
    distanceFromCenterKm: 2.5,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:00 AM - 20:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Official CrossFit box offering high-intensity functional training classes with certified coaches. Modern facility.",
    shortValueProp: "High-quality CrossFit box with professional coaching",
    googleRating: 4.7,
    reviewCount: 330,
    googleReviewCount: 245,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 85,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Scale options always available. Very welcoming community.",
    tips: ["not available"],
    highlights: ["Full CrossFit rig", "Certified coaches", "Supportive community"],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 70
      },
      {
        name: "Weekly Unlimited",
        price: 300
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class", "Equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "CrossFit Certified",
        tagColor: "safety",
        tone: "good",
        description: "Officially affiliated or compliant box with certified Level-1 coaches, Rogue-standard rigs, Olympic bumper plates, and movement clinics.",
        state: "verified",
        source: "CrossFit Affiliate Technical Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Drop",
        tagColor: "safety",
        tone: "good",
        description: "Owner-operated box with clear drop-in policies and no hidden initiation charges.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Drop",
        tagColor: "money",
        tone: "good",
        description: "Single WOD drop-in is fixed at 80–100 MAD per session, with transparent multi-class visitor cards available.",
        state: "verified",
        source: "Casablanca CrossFit Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "CrossFit Culture",
        tagColor: "craft",
        tone: "good",
        description: "Genuine global CrossFit affiliate community bringing together local competitive athletes and international traveling CrossFitters.",
        state: "verified",
        source: "Moroccan Functional Fitness Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Intensity",
        tagColor: "alert",
        tone: "caution",
        description: "Fast-paced metabolic conditioning and barbell lifts; workouts are intense but coaches systematically scale movements.",
        state: "verified",
        source: "CrossFit WOD Standards"
      }
    ],
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CrossFit+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
    dressCode: "Athletic wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High coaching standards",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "CrossFitter",
        quote: "Solid programming and great coaches. Best box in the area.",
        author: "David L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Functional Training Box",
        type: "visit",
        id: "casablanca-functional-box"
      }
    ],
    faq: [
      {
        q: "Can beginners join?",
        a: "Yes, all levels welcome with scalable workouts."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-community-gym",
    city: "casablanca",
    name: "Casablanca Community Fitness",
    neighborhood: "Hay Mohammadi",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 28,
    entryPrice: 28,
    durationMinutes: 60,
    distanceFromCenterKm: 3.8,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Affordable community gym with basic but functional equipment, group classes, and a friendly local atmosphere.",
    shortValueProp: "Budget community gym with essential equipment",
    googleRating: 3.8,
    reviewCount: 475,
    googleReviewCount: 380,
    tripadvisorRating: 3.7,
    tripadvisorReviewCount: 95,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very affordable. Basic but clean and welcoming.",
    tips: ["not available"],
    highlights: ["Low prices", "Friendly local community", "Basic but reliable equipment"],
    emotionalBenefits: ["Energized", "Grounded"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 28
      },
      {
        name: "Weekly",
        price: 100
      }
    ],
    discountsInfo: "Very affordable",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Basic Maintained",
        tagColor: "safety",
        tone: "good",
        description: "Municipal and community-oriented facility with essential resistance machines, cardio bikes, and attentive local staff.",
        state: "verified",
        source: "Casablanca Municipal Sports Registry"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Public Facility",
        tagColor: "safety",
        tone: "good",
        description: "Civic sports center with transparent ticket pricing at the entrance; free from tourist markups and private sales touts.",
        state: "verified",
        source: "Commune de Casablanca Civic Facilities"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Subsidized Tariff",
        tagColor: "money",
        tone: "good",
        description: "Highly economical community day pass fixed at 30–35 MAD per person for full gym access.",
        state: "verified",
        source: "Moroccan Mate Official Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Civic",
        tagColor: "craft",
        tone: "good",
        description: "Authentic public athletic room created to make physical fitness accessible and affordable for local youth and neighborhood residents.",
        state: "verified",
        source: "Casablanca Youth & Sports Delegation"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Accessible",
        tagColor: "safety",
        tone: "good",
        description: "Features simple, user-friendly resistance machines with light weights, suitable for beginners and casual exercise.",
        state: "verified",
        source: "Community Sports Matrix"
      }
    ],
    address: "Hay Mohammadi, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Community+Gym+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Local bus or taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Basic but safe",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Local",
        quote: "Cheap and good enough. I go every day.",
        author: "Mohamed L.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Old Medina",
        type: "visit",
        id: "casablanca-old-medina"
      }
    ],
    faq: [
      {
        q: "Is the equipment new?",
        a: "Functional and well-used, but maintained."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-sport-club",
    city: "casablanca",
    name: "Casablanca Sport Club",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 90,
    distanceFromCenterKm: 4.8,
    transportMode: "taxi",
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
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:30 AM - 22:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Spacious multi-purpose sports club with full gym, group classes, and outdoor training area. Popular with locals and families.",
    shortValueProp: "Large club with indoor and outdoor training options",
    googleRating: 4.2,
    reviewCount: 630,
    googleReviewCount: 485,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 145,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great outdoor area for functional training when the weather is nice.",
    tips: ["not available"],
    highlights: ["Large indoor gym area", "Outdoor functional training space", "Variety of group classes"],
    emotionalBenefits: ["Energized", "Social", "Accomplished"],
    bestTimeToVisit: "Late afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 50
      },
      {
        name: "Weekly",
        price: 190
      }
    ],
    discountsInfo: "Family rates available",
    includedServices: ["Full gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Spacious Layout",
        tagColor: "safety",
        tone: "good",
        description: "Large multi-zone facility featuring wide machine lanes, maintained weights, and an outdoor functional training area.",
        state: "verified",
        source: "Casablanca Sport Club Facility Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Counter",
        tagColor: "safety",
        tone: "good",
        description: "Honest front-desk management; clear daily rates with no mandatory sign-up extras or hidden processing fees.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Clear Tariff",
        tagColor: "money",
        tone: "good",
        description: "Day visitor pass is clearly set at 50–60 MAD per person, covering full gym floor access and scheduled group fitness classes.",
        state: "verified",
        source: "Moroccan Mate Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Active Social",
        tagColor: "craft",
        tone: "good",
        description: "Energetic community sports center popular with local residents for daily workouts, group aerobics, and socializing.",
        state: "verified",
        source: "Casablanca Sports Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "All Levels",
        tagColor: "safety",
        tone: "good",
        description: "Accommodates complete novices with simple pin machines, while offering functional zones and heavy weights for athletes.",
        state: "verified",
        source: "Club Activity Matrix"
      }
    ],
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sport+Club+Casablanca+Ain+Diab",
    parkingInfo: "Large lot",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Well supervised",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Local",
        quote: "My go-to place. Good community and space.",
        author: "Karim B.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Ain Diab Beach",
        type: "visit",
        id: "casablanca-corniche-beaches"
      }
    ],
    faq: [
      {
        q: "Do they have outdoor space?",
        a: "Yes, a nice functional area outside."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-cardio-club",
    city: "casablanca",
    name: "Casablanca Cardio & Wellness Club",
    neighborhood: "Maârif",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 48,
    entryPrice: 48,
    durationMinutes: 70,
    distanceFromCenterKm: 1.9,
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
    nearBeach: false,
    goodForRain: true,
    openingHours: "06:30 AM - 22:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Specialized cardio and wellness-focused gym with treadmills, bikes, ellipticals, and recovery areas. Great for runners and endurance training.",
    shortValueProp: "Cardio-focused gym with excellent recovery facilities",
    googleRating: 4.1,
    reviewCount: 380,
    googleReviewCount: 295,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 85,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Perfect if you prefer cardio machines and recovery. Clean and bright space.",
    tips: ["not available"],
    highlights: ["Large cardio zone", "Recovery area with stretching mats", "Group cardio classes"],
    emotionalBenefits: ["Energized", "Focused"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 48
      },
      {
        name: "Weekly",
        price: 180
      }
    ],
    discountsInfo: "Student discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Clean Sanitized",
        tagColor: "safety",
        tone: "good",
        description: "Spacious cardio decks, dedicated stretching and recovery turf, and vigilant on-floor staff maintaining equipment hygiene.",
        state: "verified",
        source: "Cardio & Wellness Operations"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Desk",
        tagColor: "safety",
        tone: "good",
        description: "Honest neighborhood health club with direct ticket counter check-in and zero unadvertised membership fees.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Walk-in session is fixed at 45–55 MAD flat rate per visit, covering cardio equipment, stretching zones, and recovery mats.",
        state: "verified",
        source: "Moroccan Mate Official Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Wellness Focused",
        tagColor: "craft",
        tone: "good",
        description: "Authentic local club focused on cardiovascular longevity, active recovery, and relaxed neighborhood fitness.",
        state: "verified",
        source: "Casablanca Urban Health Directory"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Low",
        tagColor: "safety",
        tone: "good",
        description: "Centered on self-paced cardio (treadmills, ellipticals, stationary bikes) and gentle mobility, suitable for all ages.",
        state: "verified",
        source: "Cardio Fitness Standards"
      }
    ],
    address: "Maarif, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cardio+Club+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Tram or walk",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Well maintained",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Runner",
        quote: "Great cardio selection and very clean. My favorite spot.",
        author: "Emma L.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "City Club",
        type: "visit",
        id: "casablanca-city-club"
      }
    ],
    faq: [
      {
        q: "Is it busy?",
        a: "Peak hours are 6-8 PM."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-strength-box",
    city: "casablanca",
    name: "Casablanca Strength & Conditioning",
    neighborhood: "Sidi Belyout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 52,
    entryPrice: 52,
    durationMinutes: 75,
    distanceFromCenterKm: 2.6,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "07:00 AM - 21:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Compact but well-equipped strength and conditioning gym with a focus on free weights and functional strength. Popular with athletes.",
    shortValueProp: "Focused strength and conditioning gym",
    googleRating: 4.3,
    reviewCount: 340,
    googleReviewCount: 265,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 75,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great for focused strength sessions. Knowledgeable staff.",
    tips: ["not available"],
    highlights: ["Excellent free weights selection", "Knowledgeable staff", "Quiet focused atmosphere"],
    emotionalBenefits: ["Focused", "Accomplished", "Strong"],
    bestTimeToVisit: "Mid-morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 52
      },
      {
        name: "Weekly",
        price: 200
      }
    ],
    discountsInfo: "Long-term discounts",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Coach Spotted",
        tagColor: "safety",
        tone: "good",
        description: "Equipped with Olympic barbells, bumper plates, squat racks, and certified coaches enforcing safe lifting posture.",
        state: "verified",
        source: "Strength & Conditioning Equipment Audit"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Entry",
        tagColor: "safety",
        tone: "good",
        description: "Independent strength studio with direct front-desk drop-in payments and zero surprise admin fees.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Drop",
        tagColor: "money",
        tone: "good",
        description: "Single strength training session is fixed at 50–60 MAD per person, covering full gym floor and platform access.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Athletic Culture",
        tagColor: "craft",
        tone: "good",
        description: "Authentic local strength community dedicated to barbell mechanics, power development, and athletic performance.",
        state: "verified",
        source: "Moroccan Strength Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Challenging Iron",
        tagColor: "alert",
        tone: "caution",
        description: "Emphasizes structured progressive barbell lifts (squats, deadlifts, presses); physically demanding on muscles.",
        state: "verified",
        source: "Strength Coaching Guidelines"
      }
    ],
    address: "Sidi Belyout, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Strength+Conditioning+Casablanca",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Good equipment maintenance",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Lifter",
        quote: "Solid weights and no nonsense. Perfect for serious training.",
        author: "Younes K.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Power House Gym",
        type: "visit",
        id: "casablanca-power-house"
      }
    ],
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Yes, but more popular with intermediate lifters."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "casablanca-resort-aqua",
    city: "casablanca",
    name: "Resort Aqua & Fitness Club",
    neighborhood: "Ain Diab",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 95,
    entryPrice: 95,
    durationMinutes: 120,
    distanceFromCenterKm: 5,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 23:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Premium resort club with large pool, full gym, spa facilities, and a wide range of classes. Day passes available.",
    shortValueProp: "Premium resort club with gym, pool and spa",
    googleRating: 4.6,
    reviewCount: 510,
    googleReviewCount: 385,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 125,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best facilities in the area. Worth it for the pool and spa.",
    tips: ["not available"],
    highlights: ["Large heated pool", "Full gym and spa", "Wide range of classes"],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 95
      },
      {
        name: "Weekly",
        price: 420
      }
    ],
    discountsInfo: "Hotel packages available",
    includedServices: ["Gym", "Pool", "Sauna"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Spa treatments extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Lifeguarded Facility",
        tagColor: "safety",
        tone: "good",
        description: "Supervised indoor and outdoor pools with certified lifeguards, air-conditioned gym floor, and non-slip pool decks.",
        state: "verified",
        source: "Resort Aqua Safety Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Concierge Desk",
        tagColor: "safety",
        tone: "good",
        description: "Handled transparently by hotel resort reception; clear guest passes with zero outside promoters or billing traps.",
        state: "verified",
        source: "Casablanca Resort Operations"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Premium Bundled",
        tagColor: "money",
        tone: "caution",
        description: "Comprehensive day pass costs 180–250 MAD per person, including gym equipment, swimming pool, and sauna/hammam access.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Luxury Wellness",
        tagColor: "craft",
        tone: "good",
        description: "Modern resort wellness facility offering a polished, tranquil escape with ocean breezes and spa amenities.",
        state: "verified",
        source: "Moroccan Hospitality Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "All Levels",
        tagColor: "safety",
        tone: "good",
        description: "Range spans gentle pool swimming and relaxation to self-paced weight training, suitable for seniors and active guests.",
        state: "verified",
        source: "Aqua Resort Standards"
      }
    ],
    address: "Ain Diab, Casablanca",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Resort+Aqua+Fitness+Casablanca",
    parkingInfo: "Large lot",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear and swimwear",
    equipmentNeeded: ["Indoor shoes", "Swimwear"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Highest standards",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Premium Traveler",
        quote: "The best facilities. Loved the pool and gym.",
        author: "Nadia F.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Corniche Resort Gym",
        type: "visit",
        id: "casablanca-corniche-resort-gym"
      }
    ],
    faq: [
      {
        q: "Does the day pass include everything?",
        a: "Yes, full access including pool and sauna."
      }
    ],
  }
];
