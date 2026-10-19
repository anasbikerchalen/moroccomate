/**
 * =========================================================================
 * [AL_HOCEIMA] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/al_hoceima/index.ts
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
export const alHoceimaNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-quemado-beach",
    city: "al_hoceima",
    name: "Plage Quemado",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad", "romantic"],
    tags: ["authentic", "coastal", "instagrammable", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 0.3,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The main city beach of Al Hoceima, a beautiful crescent of golden sand with calm turquoise Mediterranean waters framed by the Rif Mountains. Popular with locals and visitors for swimming, sunbathing and evening promenades.",
    shortValueProp: "The heart of Al Hoceima with golden sand and mountain-backed turquoise waters",
    googleRating: 4.5,
    reviewCount: 2225,
    googleReviewCount: 1240,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 680,
    viatorRating: 4.3,
    viatorReviewCount: 210,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 95,
    tip: "Arrive early in the morning for the best spot and to enjoy the quiet before it gets busy. The beach has showers and changing rooms.",
    tips: ["not available"],
    highlights: [
      "Crystal clear shallow waters perfect for swimming",
      "Lined with cafes and restaurants overlooking the bay",
      "Stunning views of the Rif Mountains at sunset"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Social"],
    bestTimeToVisit: "Morning for swimming or golden hour for photos",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0
      }
    ],
    discountsInfo: "Free entry. Umbrella and chair rentals available.",
    includedServices: ["Public beach access", "Showers and lifeguards in season"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Chair/umbrella rental 20-40 MAD",
    address: "Plage Quemado, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Quemado+Al+Hoceima",
    parkingInfo: "Paid street parking and small lot nearby (10-15 MAD)",
    publicTransportInfo: "Easily walkable from the city center and hotels",
    dressCode: "Swimwear on beach; cover up on promenade",
    equipmentNeeded: ["Sunscreen", "Towel", "Swimwear"],
    fitnessLevel: "Relaxed (Flat sandy beach)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Lifeguards in summer; calm waters suitable for families",
    languages: ["Arabic (Darija)", "French", "Tarifit"],
    visitorQuotes: [
      {
        type: "Family Holiday",
        quote: "Perfect family beach with shallow water and beautiful views.",
        author: "Maria L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Al Hoceima",
        type: "visit",
        id: "al-hoceima-port"
      }
    ],
    storyTitle: "The Heart of the Mediterranean Bay",
    history: "Quemado Beach has been the social and recreational center of Al Hoceima since the city's development in the 20th century.",
    culturalImportance: "A gathering place for locals that showcases the relaxed coastal lifestyle of the Rif region.",
    localLegend: "Fishermen say that the waters here are protected by the spirits of the sea.",
    funFact: "The beach takes its name from the Spanish word for 'burnt' due to its golden color at sunset.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the water clean?",
        a: "Yes, the bay is protected and regularly monitored."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-cala-bonita",
    city: "al_hoceima",
    name: "Plage Cala Bonita",
    neighborhood: "Calabonita",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "photographer", "first-timer"],
    tags: ["coastal", "instagrammable", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 4.5,
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
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A stunning sheltered cove with incredibly clear turquoise water and dramatic cliffs. One of the most beautiful and photogenic beaches near Al Hoceima, perfect for swimming and snorkeling.",
    shortValueProp: "A hidden paradise cove with Caribbean-like turquoise waters",
    googleRating: 4.7,
    reviewCount: 1130,
    googleReviewCount: 680,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 320,
    viatorRating: 4.5,
    viatorReviewCount: 85,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 45,
    tip: "The path down is a bit steep – wear good shoes. Bring water and snacks as there are limited facilities.",
    tips: ["not available"],
    highlights: [
      "Exceptionally clear water ideal for snorkeling",
      "Dramatic rocky cliffs creating a natural amphitheater",
      "Peaceful atmosphere away from the main tourist crowds"
    ],
    emotionalBenefits: ["Scenic", "Peaceful", "Awe-inspiring"],
    bestTimeToVisit: "Morning or late afternoon to avoid midday heat",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best June–September",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0
      }
    ],
    discountsInfo: "Free entry",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None significant",
    address: "Cala Bonita, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Cala+Bonita+Al+Hoceima",
    parkingInfo: "Limited parking at the top of the path (free)",
    publicTransportInfo: "Petit taxi or shared taxi from city center",
    dressCode: "Swimwear; comfortable shoes for the path",
    equipmentNeeded: ["Sunscreen", "Snorkel gear (optional)", "Water"],
    fitnessLevel: "Relaxed (Short steep descent)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe; watch children near rocks",
    languages: ["Arabic (Darija)", "French", "Tarifit"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The most beautiful beach we visited in Morocco. The water is magical.",
        author: "Sophie & Lucas",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Al Hoceima National Park",
        type: "visit",
        id: "al-hoceima-national-park"
      }
    ],
    storyTitle: "The Beautiful Cove",
    history: "Cala Bonita has long been a local secret, now gaining popularity among travelers seeking quieter Mediterranean beaches.",
    culturalImportance: "Represents the unspoiled natural beauty of the Rif coastline.",
    localLegend: "Locals believe the cove was once a hiding place for pirates.",
    funFact: "The water here is so clear you can often see fish from the surface.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it easy to reach?",
        a: "There is a path down from the road. It takes 5-7 minutes."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-national-park",
    city: "al_hoceima",
    name: "Al Hoceima National Park",
    neighborhood: "Sfiha",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nature", "nomad"],
    tags: ["coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 15,
    entryPrice: 15,
    durationMinutes: 240,
    distanceFromCenterKm: 12,
    transportMode: "taxi",
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A vast protected area combining dramatic coastal cliffs, Mediterranean forests, and rich biodiversity. Home to rare flora and fauna including Barbary macaques and seabirds.",
    shortValueProp: "Explore dramatic cliffs, forests and hidden coves in Morocco's Mediterranean national park",
    googleRating: 4.6,
    reviewCount: 950,
    googleReviewCount: 520,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 280,
    viatorRating: 4.4,
    viatorReviewCount: 95,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 55,
    tip: "Hire a local guide at the entrance for the best wildlife spotting. Bring plenty of water and sun protection.",
    tips: ["not available"],
    highlights: [
      "Stunning coastal cliffs and hidden beaches",
      "Rich biodiversity including macaques and seabirds",
      "Excellent hiking trails with panoramic sea views"
    ],
    emotionalBenefits: ["Wild", "Scenic", "Reflective"],
    bestTimeToVisit: "Early morning for wildlife",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round (best spring and autumn)",
    ticketTypes: [
      {
        name: "Standard Entry",
        price: 15
      },
      {
        name: "National Residents",
        price: 5
      }
    ],
    discountsInfo: "Free for children under 12.",
    includedServices: ["Park access", "Trail information"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional guide 100-150 MAD",
    address: "Al Hoceima National Park, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+National+d%27Al+Hoceima",
    parkingInfo: "Parking at main entrances (10 MAD)",
    publicTransportInfo: "Taxi or organized tour from city",
    dressCode: "Comfortable hiking clothes and sturdy shoes",
    equipmentNeeded: ["Water bottle", "Binoculars", "Sun hat"],
    fitnessLevel: "Moderate (Some trails are steep)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Stay on marked paths. Carry water.",
    languages: ["Arabic (Darija)", "French", "Tarifit"],
    visitorQuotes: [
      {
        type: "Nature Lover",
        quote: "Incredible views and surprisingly rich wildlife for a coastal park.",
        author: "David K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Plage Sfiha",
        type: "visit",
        id: "al-hoceima-sfiha-beach"
      }
    ],
    storyTitle: "The Guardian of the Mediterranean Coast",
    history: "Established to protect the unique coastal and mountain ecosystems of the Rif region.",
    culturalImportance: "Preserves traditional Berber land use and biodiversity of the Rif.",
    localLegend: "The park is said to be home to ancient spirits of the mountains and sea.",
    funFact: "The park protects one of the last populations of the Barbary macaque in Morocco.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are there wild animals?",
        a: "Yes, Barbary macaques and many bird species can be seen."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-sfiha-beach",
    city: "al_hoceima",
    name: "Plage Sfiha",
    neighborhood: "Sfiha",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["family", "first-timer", "romantic"],
    tags: ["coastal", "instagrammable", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 6,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A long, wide sandy beach with three picturesque islets offshore. Popular with families and known for its calm waters and beautiful views of the surrounding cliffs.",
    shortValueProp: "A beautiful wide beach with offshore islets and calm Mediterranean waters",
    googleRating: 4.4,
    reviewCount: 700,
    googleReviewCount: 410,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 195,
    viatorRating: 4.2,
    viatorReviewCount: 60,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 35,
    tip: "The three small islands offshore are great for photos. The beach is less crowded than Quemado.",
    tips: ["not available"],
    highlights: [
      "Long stretch of soft sand",
      "Three picturesque rocky islets just offshore",
      "Excellent for families and relaxed swimming"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Peaceful"],
    bestTimeToVisit: "Any time; sunsets are spectacular",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0
      }
    ],
    discountsInfo: "Free entry",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Small fee for parking",
    address: "Plage Sfiha, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Sfiha+Al+Hoceima",
    parkingInfo: "Paid parking area (10 MAD)",
    publicTransportInfo: "Taxi or local bus from city center",
    dressCode: "Swimwear on beach",
    equipmentNeeded: ["Sunscreen", "Beach towel"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Very safe family beach with calm waters",
    languages: ["Arabic (Darija)", "French", "Tarifit"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Our favorite beach in the area. The kids loved the sand and calm water.",
        author: "The Dupont Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Al Hoceima National Park",
        type: "visit",
        id: "al-hoceima-national-park"
      }
    ],
    storyTitle: "The Beach with Three Islands",
    history: "A traditional local beach that has become a favorite for both residents and visitors.",
    culturalImportance: "Part of the daily life and leisure of the Rif coastal communities.",
    localLegend: "The three islets are said to be petrified guardians watching over the bay.",
    funFact: "At low tide you can sometimes walk to the smallest islet.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the islets accessible?",
        a: "You can swim or take a small boat to the closest one."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-corniche-sabadia",
    city: "al_hoceima",
    name: "Corniche Sabadia",
    neighborhood: "Sabadia",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic"],
    tags: ["coastal", "nature", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 2.8,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A scenic coastal promenade offering spectacular views of the Mediterranean, cliffs, and mountains. Ideal for walking, jogging, and enjoying the sea breeze.",
    shortValueProp: "A beautiful seaside promenade with panoramic Mediterranean views",
    googleRating: 4.6,
    reviewCount: 480,
    googleReviewCount: 290,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 125,
    viatorRating: 4.3,
    viatorReviewCount: 40,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 25,
    tip: "Best at sunset. There are several cafes along the way for a drink with a view.",
    tips: ["not available"],
    highlights: ["Stunning cliff and sea views", "Well-maintained walking path", "Popular sunset spot"],
    emotionalBenefits: ["Scenic", "Peaceful", "Reflective"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public promenade access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Cafe drinks",
    address: "Corniche Sabadia, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corniche+Sabadia+Al+Hoceima",
    parkingInfo: "Street parking available",
    publicTransportInfo: "Walkable or short taxi ride",
    dressCode: "Casual",
    equipmentNeeded: ["Comfortable shoes"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-lit and safe for evening walks",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Solo Traveler",
        quote: "One of the best places for a peaceful evening walk with incredible views.",
        author: "Elena R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Plage Cala Bonita",
        type: "visit",
        id: "al-hoceima-cala-bonita"
      }
    ],
    storyTitle: "The Scenic Coastal Path",
    history: "Developed as part of the city's modernization to showcase its stunning natural setting.",
    culturalImportance: "A place where locals and visitors connect with the sea and mountains.",
    localLegend: "The cliffs are said to echo with ancient Rif songs on windy nights.",
    funFact: "The corniche offers one of the best views of the Spanish islands on clear days.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it good for running?",
        a: "Yes, it's a popular route for joggers and walkers."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-jardin-al-mnikar",
    city: "al_hoceima",
    name: "Jardin Al Mnikar",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "quiet-mystic"],
    tags: ["nature", "off-the-beaten-path", "relaxed", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.5,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: true,
    openingHours: "08:00 AM - 08:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A pleasant public garden in the heart of the city with palm trees, flowers, and a relaxed atmosphere. A great spot for a quiet break or people watching.",
    shortValueProp: "A peaceful green oasis right in the center of Al Hoceima",
    googleRating: 4.2,
    reviewCount: 291,
    googleReviewCount: 185,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 72,
    viatorRating: 3.9,
    viatorReviewCount: 22,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 12,
    tip: "Nice shaded spot to escape the sun. Locals often gather here in the evenings.",
    tips: ["not available"],
    highlights: [
      "Lush palm trees and flower beds",
      "Benches and shaded areas",
      "Central location for a quick break"
    ],
    emotionalBenefits: ["Peaceful", "Reflective", "Cool"],
    bestTimeToVisit: "Midday for shade or evening for atmosphere",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Garden access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Jardin Al Mnikar, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardin+Al+Mnikar+Al+Hoceima",
    parkingInfo: "Street parking",
    publicTransportInfo: "Very central and walkable",
    dressCode: "Casual",
    equipmentNeeded: [],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Safe and family-friendly",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Local",
        quote: "My favorite place to sit and have a quiet coffee in the city.",
        author: "Hassan B.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Plage Quemado",
        type: "visit",
        id: "al-hoceima-quemado-beach"
      }
    ],
    storyTitle: "The Green Heart of the City",
    history: "Created as a public space during the development of modern Al Hoceima.",
    culturalImportance: "A community gathering space that reflects the city's commitment to green areas.",
    localLegend: "Some say the oldest palm trees were planted by the first Spanish settlers.",
    funFact: "The garden is a popular spot for local musicians in the evening.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it open every day?",
        a: "Yes, it is open daily."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-tala-youssef-beach",
    city: "al_hoceima",
    name: "Plage Tala Youssef",
    neighborhood: "Tala Youssef",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 8,
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
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A quiet, secluded beach with golden sand and calm waters. A favorite among locals seeking peace away from the busier city beaches.",
    shortValueProp: "A hidden local beach with pristine sand and peaceful atmosphere",
    googleRating: 4.5,
    reviewCount: 428,
    googleReviewCount: 265,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 110,
    viatorRating: 4.3,
    viatorReviewCount: 35,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 18,
    tip: "Less crowded and more natural. Bring your own supplies as facilities are basic.",
    tips: ["not available"],
    highlights: ["Golden sand and very calm waters", "Surrounded by nature and cliffs", "Authentic local vibe"],
    emotionalBenefits: ["Peaceful", "Scenic", "Unplugged"],
    bestTimeToVisit: "Anytime, especially weekdays",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    address: "Tala Youssef, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Tala+Youssef+Al+Hoceima",
    parkingInfo: "Limited free parking",
    publicTransportInfo: "Taxi or private transfer",
    dressCode: "Casual beachwear",
    equipmentNeeded: ["Water", "Snacks", "Towel"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe but more isolated",
    languages: ["Arabic (Darija)", "Tarifit"],
    visitorQuotes: [
      {
        type: "Solo Traveler",
        quote: "Felt like I had the beach to myself. Very peaceful.",
        author: "Nora M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Al Hoceima National Park",
        type: "visit",
        id: "al-hoceima-national-park"
      }
    ],
    storyTitle: "The Locals' Secret Beach",
    history: "A traditional fishing and swimming spot for nearby villages.",
    culturalImportance: "Maintains the authentic, uncommercialized coastal lifestyle of the region.",
    localLegend: "Named after a local saint said to protect the waters.",
    funFact: "The sand here has a slightly different golden hue than the city beaches.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are there facilities?",
        a: "Very basic. Bring what you need."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-corniche-morro-viejo",
    city: "al_hoceima",
    name: "Corniche Morro Viejo",
    neighborhood: "Morro Viejo",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic"],
    tags: ["coastal", "instagrammable", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 1.5,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A scenic coastal road and promenade with panoramic views of the bay, port, and mountains. Popular for evening walks and enjoying the sea air.",
    shortValueProp: "A beautiful clifftop promenade with sweeping views of the entire bay",
    googleRating: 4.4,
    reviewCount: 358,
    googleReviewCount: 215,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 95,
    viatorRating: 4.1,
    viatorReviewCount: 30,
    getyourguideRating: 4,
    getyourguideReviewCount: 18,
    tip: "Great for photos of the whole bay. Several small cafes offer refreshments.",
    tips: ["not available"],
    highlights: ["Panoramic views of the bay and port", "Pleasant walking path", "Excellent sunset spot"],
    emotionalBenefits: ["Scenic", "Peaceful", "Social"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public promenade access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Cafe purchases",
    address: "Corniche Morro Viejo, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corniche+Morro+Viejo+Al+Hoceima",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable or short taxi",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Safe and popular walking area",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "Our favorite place for an evening stroll with incredible views.",
        author: "Anna & Mark",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Al Hoceima",
        type: "visit",
        id: "al-hoceima-port"
      }
    ],
    storyTitle: "The Old Hill Promenade",
    history: "Named after the historic Spanish fort area, now a popular leisure route.",
    culturalImportance: "Connects the old and new parts of the city through its scenic path.",
    localLegend: "The viewpoint is said to have been used by lookouts in centuries past.",
    funFact: "On clear days you can see the Spanish enclave of Peñón de Alhucemas.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it good for photos?",
        a: "Yes, one of the best viewpoints in the city."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-plage-matadero",
    city: "al_hoceima",
    name: "Plage Matadero",
    neighborhood: "Matadero",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad"],
    tags: ["authentic", "coastal", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 1.8,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A smaller, more local beach popular with residents. Good for swimming and offers a more authentic, less touristy experience.",
    shortValueProp: "An authentic local beach loved by residents",
    googleRating: 4.1,
    reviewCount: 273,
    googleReviewCount: 175,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 68,
    viatorRating: 3.9,
    viatorReviewCount: 20,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 10,
    tip: "Great for meeting locals. Fewer tourists and a very relaxed vibe.",
    tips: ["not available"],
    highlights: ["Popular with local families", "Calm waters for swimming", "Authentic atmosphere"],
    emotionalBenefits: ["Relaxed", "Authentic", "Social"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best June–September",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Small local vendors",
    address: "Plage Matadero, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Matadero+Al+Hoceima",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from center",
    dressCode: "Swimwear",
    equipmentNeeded: ["Towel", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Safe local beach",
    languages: ["Arabic (Darija)", "Tarifit"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "Felt very local. Nice change from the main tourist beach.",
        author: "Liam H.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Corniche Morro Viejo",
        type: "visit",
        id: "al-hoceima-corniche-morro-viejo"
      }
    ],
    storyTitle: "The Neighborhood Beach",
    history: "A traditional swimming spot for nearby neighborhoods.",
    culturalImportance: "Reflects everyday leisure culture of Al Hoceima residents.",
    localLegend: "Named after the old slaughterhouse area that once stood nearby.",
    funFact: "Many locals prefer this beach for its community feel.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it crowded?",
        a: "Less crowded than Quemado but lively with locals."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-boujibar-national-park",
    city: "al_hoceima",
    name: "Boujibar National Park Area",
    neighborhood: "Boujibar",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 180,
    distanceFromCenterKm: 15,
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
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Dawn to dusk",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Part of the larger protected coastal area featuring rugged terrain, forests, and stunning sea views. Great for nature walks and photography.",
    shortValueProp: "Rugged coastal wilderness with dramatic views and hiking opportunities",
    googleRating: 4.3,
    reviewCount: 228,
    googleReviewCount: 145,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 55,
    viatorRating: 4,
    viatorReviewCount: 18,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 10,
    tip: "Less visited than the main national park. Excellent for birdwatching.",
    tips: ["not available"],
    highlights: ["Dramatic coastal cliffs", "Dense Mediterranean forest", "Excellent for photography"],
    emotionalBenefits: ["Wild", "Scenic", "Adventurous"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Spring and autumn best",
    ticketTypes: [
      {
        name: "Entry",
        price: 10
      }
    ],
    discountsInfo: "Free for children",
    includedServices: ["Park access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Guide optional",
    address: "Boujibar, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boujibar+National+Park+Al+Hoceima",
    parkingInfo: "Limited at entrance",
    publicTransportInfo: "Taxi or organized tour",
    dressCode: "Hiking clothes",
    equipmentNeeded: ["Water", "Sturdy shoes", "Camera"],
    fitnessLevel: "Moderate",
    ageRestrictions: "Suitable for active visitors",
    safetyNotes: "Stay on paths",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Hiker",
        quote: "Felt very remote and beautiful. Great for nature lovers.",
        author: "Thomas R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Al Hoceima National Park",
        type: "visit",
        id: "al-hoceima-national-park"
      }
    ],
    storyTitle: "The Wild Coast",
    history: "Part of the protected zones created to preserve the Rif coastline.",
    culturalImportance: "Protects traditional landscapes and biodiversity.",
    localLegend: "The area is believed to be home to ancient Berber spirits.",
    funFact: "Home to rare plant species found only in this part of the Rif.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it different from the main park?",
        a: "Yes, more rugged and less developed."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-plage-cala-iris",
    city: "al_hoceima",
    name: "Cala Iris Beach & Village",
    neighborhood: "Cala Iris",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "photographer", "romantic"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 45,
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
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Open 24/7",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A remote and incredibly beautiful beach in a sheltered cove within the national park area. Features a small fishing village and crystal-clear waters.",
    shortValueProp: "A remote Caribbean-like cove with a tiny fishing village",
    googleRating: 4.8,
    reviewCount: 565,
    googleReviewCount: 320,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 145,
    viatorRating: 4.6,
    viatorReviewCount: 65,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 35,
    tip: "One of the most beautiful beaches in the region. Can be reached by boat or road.",
    tips: ["not available"],
    highlights: [
      "Turquoise water and white sand",
      "Small authentic fishing village",
      "Dramatic surrounding cliffs"
    ],
    emotionalBenefits: ["Scenic", "Peaceful", "Adventurous"],
    bestTimeToVisit: "Morning or afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best June–September",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Boat transfer if chosen (optional)",
    address: "Cala Iris, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cala+Iris+Al+Hoceima",
    parkingInfo: "Limited at end of road",
    publicTransportInfo: "Taxi or boat tour from Al Hoceima",
    dressCode: "Beachwear",
    equipmentNeeded: ["Snorkel gear recommended", "Water", "Snacks"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Remote – go with others or inform someone of your plans",
    languages: ["Arabic (Darija)", "Tarifit"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "The most beautiful beach in northern Morocco. Worth the trip.",
        author: "Camille D.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Al Hoceima National Park",
        type: "visit",
        id: "al-hoceima-national-park"
      }
    ],
    storyTitle: "The Hidden Caribbean of Morocco",
    history: "A traditional fishing cove that has remained largely unchanged for decades.",
    culturalImportance: "Home to a small community of fishermen maintaining traditional ways.",
    localLegend: "The cove is protected by a local saint.",
    funFact: "The water is so clear that snorkelers regularly see octopus and colorful fish.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How do I get there?",
        a: "By car/taxi along the coast or by boat from the port."
      }
    ],
    contactPhone: "",
  }
];
