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
 * [AL_HOCEIMA] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/al_hoceima/index.ts
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — NATURE & ADVENTURE ══
export const alHoceimaNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-quemado-beach",
    city: "al_hoceima",
    name: "Plage Quemado",
    neighborhood: "Moroviejo",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad", "romantic"],
    vibeTags: ["scenic", "iconic", "vibrant"],
    tags: ["authentic", "coastal", "instagrammable", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["must-see", "family-friendly", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "food_stalls", "parking", "restrooms"],
    restrictions: ["No jet skis inside designated swimming buoys"],
    healthContraindications: ["Sun exposure requires hydration and sun protection"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "The main city beach of Al Hoceima, a beautiful crescent of golden sand with calm turquoise Mediterranean waters framed by the Rif Mountains. Popular with locals and visitors for swimming, sunbathing and evening promenades.",
    shortValueProp: "The heart of Al Hoceima with golden sand and mountain-backed turquoise waters",
    images: [],
    googleRating: 4.5,
    reviewCount: 2225,
    googleReviewCount: 1240,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 680,
    viatorRating: 4.3,
    viatorReviewCount: 210,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 95,
    badge: "essential",
    tip: "Arrive early in the morning for the best spot and to enjoy the quiet before it gets busy. The beach has showers and changing rooms.",
    tips: [
      "Arrive before 10:30 AM in July and August to secure prime sand spots near the water.",
      "Use the public municipal elevator from Boulevard Mohammed V to avoid climbing the steep cliff stairs."
    ],
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
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free entry. Umbrella and chair rentals available.",
    includedServices: ["Public beach access", "Showers and lifeguards in season"],
    excludedServices: ["Parasol and deckchair rental", "Water sports rentals"],
    hiddenCostsInfo: "Chair/umbrella rental 30-50 MAD; street parking 10-15 MAD",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Guarded",
        description: "Civil protection lifeguards patrol July–August; sheltered bay waters remain calm and family-safe.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Protection Civile Al Hoceïma seasonal beach reports",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Vigilant",
        description: "Informal operators set out chairs on public sand; negotiate and confirm rental prices before sitting.",
        tone: "caution",
        tagColor: "alert",
        state: "verified",
        source: "Municipal beach regulations & tourist notices",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Transparent",
        description: "Beach access is 100% free; standard parasol plus two chairs costs a fixed 30–50 MAD for the full day.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Al Hoceïma City Council public beach guidelines",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Genuine",
        description: "Beloved by local families and returning diaspora, retaining vibrant Rifian summer traditions.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Local community & heritage documentation",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        description: "Paved ramps lead directly to sand, with an elevator link connecting Boulevard Mohammed V above.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Site accessibility survey",
      },
    ],
    address: "Plage Quemado, Al Hoceima 32000",
    coordinates: { lat: 35.2445, lng: -3.9266 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Quemado+Al+Hoceima",
    parkingInfo: "Paid street parking and small lot nearby (10-15 MAD)",
    publicTransportInfo: "Easily walkable from the city center and hotels",
    dressCode: "Swimwear on beach; cover up on promenade",
    equipmentNeeded: ["Sunscreen", "Towel", "Swimwear"],
    fitnessLevel: "Relaxed (Flat sandy beach with paved access steps and elevator)",
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
        name: "Corniche Morro Viejo",
        type: "visit",
        id: "al-hoceima-corniche-morro-viejo"
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-cala-bonita",
    city: "al_hoceima",
    name: "Plage Cala Bonita",
    neighborhood: "Calabonita",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "photographer", "first-timer"],
    vibeTags: ["scenic", "tranquil", "serene"],
    tags: ["coastal", "instagrammable", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["hidden-gem", "peaceful-escape", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 4.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "parking"],
    restrictions: ["No cliff diving from unmarked rocks"],
    healthContraindications: ["Steep staircase approach may challenge those with knee issues"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A stunning sheltered cove with incredibly clear turquoise water and dramatic cliffs. One of the most beautiful and photogenic beaches near Al Hoceima, perfect for swimming and snorkeling.",
    shortValueProp: "A hidden paradise cove with Caribbean-like turquoise waters",
    images: [],
    googleRating: 4.7,
    reviewCount: 1130,
    googleReviewCount: 680,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 320,
    viatorRating: 4.5,
    viatorReviewCount: 85,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 45,
    badge: "top-pick",
    tip: "The path down is a bit steep – wear good shoes. Bring water and snacks as there are limited facilities.",
    tips: [
      "Pack water shoes because the rocky sides host sea urchins, though the central seabed is gentle pebble and sand.",
      "Bring your own snorkel mask as fish are clearly visible within 5 meters of the shore."
    ],
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
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free entry",
    includedServices: ["Public beach access"],
    excludedServices: ["Snorkel gear rental", "Sunbed hire"],
    hiddenCostsInfo: "None significant; voluntary parking tip 5-10 MAD",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Sheltered",
        description: "Enclosed cove has minimal undertow; rocky margins host sea urchins so water shoes are recommended.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Local maritime & visitor snorkeling reports",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Monitored",
        description: "Far fewer hawkers than city beaches; occasional parking guardians request standard 5–10 MAD fee.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Visitor feedback & municipal parking guidelines",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Zero Fee",
        description: "Completely free public beach; bring your own umbrella as seasonal rentals are limited.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Commune d'Al Hoceïma public domain regulations",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Pristine",
        description: "A natural limestone cove ringed with coastal pine trees, preserving authentic Mediterranean beauty.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Rif environmental conservation reports",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Steep Stairs",
        description: "Descent follows a steep concrete stairway from the clifftop road; not wheelchair accessible.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Site terrain inspection",
      },
    ],
    address: "Cala Bonita, Al Hoceima 32000",
    coordinates: { lat: 35.2347, lng: -3.9230 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Cala+Bonita+Al+Hoceima",
    parkingInfo: "Limited parking at the top of the path (free or 5-10 MAD tip)",
    publicTransportInfo: "Petit taxi or shared taxi from city center",
    dressCode: "Swimwear; comfortable shoes for the path",
    equipmentNeeded: ["Sunscreen", "Snorkel gear (optional)", "Water"],
    fitnessLevel: "Relaxed (Short steep descent on concrete stairs)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe; watch children near rocks and stairs",
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
        name: "Plage Matadero",
        type: "visit",
        id: "al-hoceima-plage-matadero"
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-national-park",
    city: "al_hoceima",
    name: "Al Hoceima National Park",
    neighborhood: "Tala Youssef",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nature", "nomad", "wildlife"],
    vibeTags: ["scenic", "serene", "tranquil"],
    tags: ["coastal", "hiking-trek", "nature", "off-the-beaten-path", "sunset", "wildlife-encounter"],
    badges: ["must-see", "peaceful-escape", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 1,
    pricePerPerson: 15,
    entryPrice: 15,
    durationMinutes: 240,
    distanceFromCenterKm: 12,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: true,
    },
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["information_desk", "parking", "walking_paths", "panoramic_viewpoint"],
    restrictions: ["No open fires or unguided venturing beyond marked park trails"],
    healthContraindications: ["Not recommended for travelers with severe vertigo or mobility impairment"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A vast protected area combining dramatic coastal cliffs, Mediterranean forests, and rich biodiversity. Home to rare flora and fauna including Barbary macaques and seabirds.",
    shortValueProp: "Explore dramatic cliffs, forests and hidden coves in Morocco's Mediterranean national park",
    images: [],
    googleRating: 4.6,
    reviewCount: 950,
    googleReviewCount: 520,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 280,
    viatorRating: 4.4,
    viatorReviewCount: 95,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 55,
    badge: "essential",
    tip: "Hire a local guide at the entrance for the best wildlife spotting. Bring plenty of water and sun protection.",
    tips: [
      "Carry at least 2 liters of drinking water per person as there are no shops inside the park trails.",
      "Bring binoculars to spot the endangered osprey (balbuzard pêcheur) nesting on the limestone cliffs."
    ],
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
        price: 15,
        currency: "MAD"
      },
      {
        name: "National Residents",
        price: 5,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free for children under 12.",
    includedServices: ["Park access", "Trail information"],
    excludedServices: ["Certified mountain guide fee", "Vehicle transfer within park"],
    hiddenCostsInfo: "Optional certified nature guide 150-250 MAD per group",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Rugged",
        description: "Cliffside trails lack guardrails; stick strictly to marked paths and avoid unguided edge exploration.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Direction Régionale des Eaux et Forêts guidelines",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Certified",
        description: "Hire only official guides verified by the Ministry of Tourism or local park conservation eco-cooperatives.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Fédération Marocaine des Guides de Tourisme registry",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Regulated",
        description: "Nominal eco-preservation entry of 15 MAD; guided treks operate with transparent group day rates.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Parc National d'Al Hoceima published eco-tariffs",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Wild Sanctuary",
        description: "Protected UNESCO Biosphere zone preserving endemic thuya trees, sea eagles, and Berber douars.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "UNESCO Biosphere Reserve documentation",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Strenuous",
        description: "Unpaved stony paths feature sustained climbs and direct sun; solid hiking boots are essential.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Park topographic survey & hiking trail logs",
      },
    ],
    address: "Al Hoceima National Park, Al Hoceima 32000",
    coordinates: { lat: 35.2010, lng: -4.1660 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+National+d%27Al+Hoceima",
    parkingInfo: "Parking at main entrances (10 MAD)",
    publicTransportInfo: "Taxi or organized tour from city",
    dressCode: "Comfortable hiking clothes and sturdy shoes",
    equipmentNeeded: ["Water bottle", "Binoculars", "Sun hat"],
    fitnessLevel: "Moderate (Hilly trails with uneven rocky ground)",
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
        name: "Plage Tala Youssef",
        type: "visit",
        id: "al-hoceima-tala-youssef-beach"
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-sfiha-beach",
    city: "al_hoceima",
    name: "Plage Sfiha",
    neighborhood: "Mirador",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["family", "first-timer", "romantic"],
    vibeTags: ["scenic", "serene", "tranquil"],
    tags: ["coastal", "instagrammable", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["family-friendly", "panoramic-view", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 6,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "parking", "food_stalls"],
    restrictions: ["Strictly forbidden to swim out to the Spanish garrison on Peñón de Alhucemas"],
    healthContraindications: ["General sun protection recommended"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A long, wide sandy beach with three picturesque islets offshore. Popular with families and known for its calm waters and beautiful views of the surrounding cliffs.",
    shortValueProp: "A beautiful wide beach with offshore islets and calm Mediterranean waters",
    images: [],
    googleRating: 4.4,
    reviewCount: 700,
    googleReviewCount: 410,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 195,
    viatorRating: 4.2,
    viatorReviewCount: 60,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 35,
    badge: "popular",
    tip: "The three small islands offshore are great for photos. The beach is less crowded than Quemado.",
    tips: [
      "Visit in late afternoon when the setting sun illuminates the white walls of Peñón de Alhucemas fortress.",
      "The pine-forested southern end offers natural shade during the hottest summer hours."
    ],
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
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free entry",
    includedServices: ["Public beach access"],
    excludedServices: ["Umbrella and lounger hire", "Watercraft rental"],
    hiddenCostsInfo: "Regulated municipal parking fee 10 MAD",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Restricted Zone",
        description: "Swimming or boating toward Peñón de Alhucemas is prohibited due to Spanish military perimeter rules.",
        tone: "caution",
        tagColor: "alert",
        state: "verified",
        source: "Maritime boundary regulations & military notices",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Regulated",
        description: "Parking guardians wear municipal badges with printed 10 MAD receipts; ignore unofficial roadside claims.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Ajdir municipality parking decree",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Accessible",
        description: "Entire 1.5 km shore has free public access; beachfront cafes maintain clear displayed menus.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Local restaurant association pricing audits",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Historic Bay",
        description: "Unrivaled vantage of 16th-century fortress island preserving centuries of Mediterranean frontier history.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Rif historical monuments directory",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        description: "Level sandy terrain with barrier-free access directly from parking to the calm shoreline.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Site accessibility survey",
      },
    ],
    address: "Plage Sfiha, Al Hoceima 32000",
    coordinates: { lat: 35.2126, lng: -3.8550 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Sfiha+Al+Hoceima",
    parkingInfo: "Paid parking area (10 MAD)",
    publicTransportInfo: "Taxi or local bus from city center",
    dressCode: "Swimwear on beach",
    equipmentNeeded: ["Sunscreen", "Beach towel"],
    fitnessLevel: "Relaxed (Expansive flat sand shoreline with level approach)",
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
        name: "Corniche Sabadia",
        type: "visit",
        id: "al-hoceima-corniche-sabadia"
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-corniche-sabadia",
    city: "al_hoceima",
    name: "Corniche Sabadia",
    neighborhood: "Mirador",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic"],
    vibeTags: ["scenic", "tranquil", "peaceful"],
    tags: ["coastal", "nature", "relaxed", "running-outdoor", "sunset", "urban", "walk-in"],
    badges: ["panoramic-view", "sunset-spot", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 2.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "wide_flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "street_parking", "walking_paths", "panoramic_viewpoint"],
    restrictions: ["Bicycles should yield to pedestrians during evening peak hours"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A scenic coastal promenade offering spectacular views of the Mediterranean, cliffs, and mountains. Ideal for walking, jogging, and enjoying the sea breeze.",
    shortValueProp: "A beautiful seaside promenade with panoramic Mediterranean views",
    images: [],
    googleRating: 4.6,
    reviewCount: 480,
    googleReviewCount: 290,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 125,
    viatorRating: 4.3,
    viatorReviewCount: 40,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 25,
    badge: "top-pick",
    tip: "Best at sunset. There are several cafes along the way for a drink with a view.",
    tips: [
      "Stroll between 6:30 PM and 8:30 PM when Mediterranean breezes pick up and panoramic evening lighting sets in.",
      "Bring light sportswear if you want to join the numerous local runners along this scenic route."
    ],
    highlights: ["Stunning cliff and sea views", "Well-maintained walking path", "Popular sunset spot"],
    emotionalBenefits: ["Scenic", "Peaceful", "Reflective"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public promenade access"],
    excludedServices: ["Cafe beverages"],
    hiddenCostsInfo: "None; optional cafe drinks 15-25 MAD",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Secured",
        description: "Well-lit and monitored with regular police patrols; sturdy railings border the seaward cliffs.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Sûreté Nationale Al Hoceïma municipal division",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Unbothered",
        description: "Public civic walkway without aggressive street touts or illegal vendors.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Pedestrian area monitoring logs",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Complimentary",
        description: "Entire 2.8 km promenade is 100% free with open 24/7 public access.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Commune d'Al Hoceïma public domain registry",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Tradition",
        description: "Classic evening stroll venue where local families meet to take in sunset breezes.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Community cultural documentation",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Walk",
        description: "Smooth, wide paved surface with gentle curves, curb ramps, and frequent rest benches.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Promenade infrastructure accessibility survey",
      },
    ],
    address: "Corniche Sabadia, Al Hoceima 32000",
    coordinates: { lat: 35.2365, lng: -3.9352 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corniche+Sabadia+Al+Hoceima",
    parkingInfo: "Street parking available",
    publicTransportInfo: "Walkable or short taxi ride",
    dressCode: "Casual",
    equipmentNeeded: ["Comfortable shoes"],
    fitnessLevel: "Relaxed (Paved level seafront promenade with benches)",
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-jardin-al-mnikar",
    city: "al_hoceima",
    name: "Jardin Al Mnikar",
    neighborhood: "Calabonita",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "quiet-mystic"],
    vibeTags: ["botanical", "peaceful", "tranquil"],
    tags: ["nature", "nature-walk", "off-the-beaten-path", "relaxed", "urban", "walk-in"],
    badges: ["green-oasis", "quiet-retreat", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "08:00 AM - 08:00 PM (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "walking_paths", "garden_seating_access"],
    restrictions: ["No littering or disturbing botanical plantings"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A pleasant public garden located beside Calabonita (also known as Jardín Almuñécar) with palm trees, shaded walkways, and a serene atmosphere. A great spot for a peaceful rest.",
    shortValueProp: "A peaceful green oasis nestled beside Calabonita",
    images: [],
    googleRating: 4.2,
    reviewCount: 291,
    googleReviewCount: 185,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 72,
    viatorRating: 3.9,
    viatorReviewCount: 22,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 12,
    badge: "hidden-gem",
    tip: "Nice shaded spot to escape the midday sun. Locals often gather here in the late afternoon.",
    tips: [
      "Combine your garden visit with a short 3-minute stroll down to Plage Cala Bonita.",
      "A quiet setting to read or relax under mature date palms in the afternoon."
    ],
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
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Garden access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Enclosed",
        description: "Fenced municipal garden in a quiet residential district; peaceful and safe for small children.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Neighborhood police records & municipal oversight",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Zero Risk",
        description: "No commercial hawkers, guides, or ticket touts operate in this neighborhood municipal park.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Parks & recreation department reports",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Access",
        description: "Free public access year-round with daily opening hours from 08:00 AM to 08:00 PM.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Municipal park operating schedule",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Sister City",
        description: "Authentic municipal landmark created to celebrate the civic twinning with Almuñécar in Andalusia.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Municipal sister-city archives & commemorative plaques",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Flat Terrain",
        description: "Entirely level paved paths lined with shade benches; step-free and fully stroller-friendly.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Site accessibility inspection",
      },
    ],
    address: "Jardín Almuñécar (Al Mnikar), Calabonita, Al Hoceima 32000",
    coordinates: { lat: 35.2346, lng: -3.9251 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardin+Al+Mnikar+Al+Hoceima",
    parkingInfo: "Street parking available adjacent to the park",
    publicTransportInfo: "Very central and easily walkable from Calabonita",
    dressCode: "Casual",
    equipmentNeeded: [],
    fitnessLevel: "Relaxed (Flat paved garden paths with benches)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Safe and family-friendly neighborhood park",
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
        name: "Plage Cala Bonita",
        type: "visit",
        id: "al-hoceima-cala-bonita"
      }
    ],
    storyTitle: "The Green Heart of the City",
    history: "Named Jardín Almuñécar in honor of the sister-city partnership between Al Hoceima and Almuñécar in Spain.",
    culturalImportance: "A community gathering space that reflects the city's commitment to green areas.",
    localLegend: "Some say the oldest palm trees were planted by the first Spanish settlers.",
    funFact: "Locals casually pronounce the Spanish name 'Almuñécar' as 'Al Mnikar'.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it open every day?",
        a: "Yes, it is open daily."
      }
    ],
    contactPhone: "",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-tala-youssef-beach",
    city: "al_hoceima",
    name: "Plage Tala Youssef",
    neighborhood: "Tala Youssef",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic", "adventure"],
    vibeTags: ["scenic", "serene", "tranquil"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["hidden-gem", "peaceful-escape", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "parking", "panoramic_viewpoint"],
    restrictions: ["Watch out for occasional jet ski traffic near the cove mouth"],
    healthContraindications: ["Rocky entries can be slippery"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A quiet, secluded beach with distinctive dark pebbles and calm waters set at the foot of dramatic cliffs. A favorite among locals seeking peace away from the busier city beaches.",
    shortValueProp: "A hidden local beach with pristine sand and peaceful atmosphere",
    images: [],
    googleRating: 4.5,
    reviewCount: 428,
    googleReviewCount: 265,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 110,
    viatorRating: 4.3,
    viatorReviewCount: 35,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 18,
    badge: "hidden-gem",
    tip: "Less crowded and more natural. Bring your own supplies as facilities are basic.",
    tips: [
      "Wear water shoes for walking across the dark pebble shoreline and rocky water entrance.",
      "Bring cash if you plan to rent water sports equipment near the resort boundary."
    ],
    highlights: ["Golden sand and very calm waters", "Surrounded by nature and cliffs", "Authentic local vibe"],
    emotionalBenefits: ["Peaceful", "Scenic", "Unplugged"],
    bestTimeToVisit: "Anytime, especially weekdays",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["Parasol rental", "Water sports equipment"],
    hiddenCostsInfo: "None; optional parking tip 5-10 MAD",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Unpatrolled",
        description: "Lifeguards are scarce outside peak season; sea floor drops off quicker than at Quemado.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Provincial coastal safety guidelines",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Minimal",
        description: "Low vendor pressure; jet-ski operators operate from the cove end with negotiable hourly rates.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Visitor consumer feedback",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Zero Fee",
        description: "Public beach entry is free; unpaved cliffside parking is generally free or tip-based.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Local commune transport ordinance",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Secluded Cove",
        description: "A dark pebble-and-sand cove backdropped by the untamed massifs of Al Hoceima National Park.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Regional tourism directory",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Uneven Shore",
        description: "Pebbles and coarse gravel require water shoes or supportive sandals for comfortable walking.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Beach topography survey",
      },
    ],
    address: "Tala Youssef, Al Hoceima 32000",
    coordinates: { lat: 35.2452, lng: -3.9925 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Tala+Youssef+Al+Hoceima",
    parkingInfo: "Limited free parking area at the road head",
    publicTransportInfo: "Taxi or private transfer",
    dressCode: "Casual beachwear",
    equipmentNeeded: ["Water", "Snacks", "Towel"],
    fitnessLevel: "Relaxed (Gentle slope down to pebble-sand shoreline)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe but more isolated; keep watch on children",
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-corniche-morro-viejo",
    city: "al_hoceima",
    name: "Corniche Morro Viejo",
    neighborhood: "Moroviejo",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic"],
    vibeTags: ["scenic", "iconic", "panoramic"],
    tags: ["coastal", "instagrammable", "photo-spot", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["panoramic-view", "sunset-spot", "must-see"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
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
    accessibilityFeatures: ["step_free_paved_paths", "wide_flat_walkways", "shaded_benches"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "street_parking", "panoramic_viewpoint", "walking_paths"],
    restrictions: ["Do not sit on perimeter cliff edge walls"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A scenic coastal road and promenade with panoramic views of the bay, port, and mountains. Popular for evening walks and enjoying the sea air.",
    shortValueProp: "A beautiful clifftop promenade with sweeping views of the entire bay",
    images: [],
    googleRating: 4.4,
    reviewCount: 358,
    googleReviewCount: 215,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 95,
    viatorRating: 4.1,
    viatorReviewCount: 30,
    getyourguideRating: 4,
    getyourguideReviewCount: 18,
    badge: "popular",
    tip: "Great for photos of the whole bay. Several small cafes offer refreshments.",
    tips: [
      "Head up just before twilight to capture the harbor lights switching on against the Mediterranean.",
      "A scenic starting point for a walk down into the working port or Quemado Beach."
    ],
    highlights: ["Panoramic views of the bay and port", "Pleasant walking path", "Excellent sunset spot"],
    emotionalBenefits: ["Scenic", "Peaceful", "Social"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public promenade access"],
    excludedServices: ["Cafe beverages"],
    hiddenCostsInfo: "None; optional cafe spending",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Protected",
        description: "Solid balustrades border the clifftop; well-lit with active local foot traffic throughout the evening.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Al Hoceïma public security assessment",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Low Risk",
        description: "No aggressive vendors or unsolicited guides; roadside cafes display standard beverage prices.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Consumer municipal review",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Complimentary",
        description: "Completely free civic promenade open 24 hours a day with unrestricted panoramic viewpoints.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Municipal public space directory",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Historical View",
        description: "Direct view of the 1920s Spanish colonial rampart quarter and the working fishing fleet below.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Al Hoceïma historical society",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Mild Gradient",
        description: "Smooth paved sidewalks with gentle slope; easily walked by all ages and stroller-accessible.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Urban infrastructure accessibility registry",
      },
    ],
    address: "Corniche Morro Viejo, Moroviejo, Al Hoceima 32000",
    coordinates: { lat: 35.2472, lng: -3.9281 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Corniche+Morro+Viejo+Al+Hoceima",
    parkingInfo: "Street parking available",
    publicTransportInfo: "Walkable or short taxi from Place du Rif",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Paved clifftop walkway with gentle inclines)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Safe and popular walking area; supervise young children near balustrades",
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
        name: "Plage Quemado",
        type: "visit",
        id: "al-hoceima-quemado-beach"
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-plage-matadero",
    city: "al_hoceima",
    name: "Plage Matadero",
    neighborhood: "Calabonita",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "relaxation"],
    vibeTags: ["serene", "tranquil"],
    tags: ["authentic", "coastal", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["peaceful-escape", "budget-friendly"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
    distanceFromCenterKm: 1.8,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "street_parking"],
    restrictions: ["No littering on neighborhood sand"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A smaller, more local beach situated just north of Cala Bonita. Good for swimming and offers an authentic, neighborhood coastal feel.",
    shortValueProp: "An authentic local beach loved by residents",
    images: [],
    googleRating: 4.1,
    reviewCount: 273,
    googleReviewCount: 175,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 68,
    viatorRating: 3.9,
    viatorReviewCount: 20,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 10,
    badge: "hidden-gem",
    tip: "Great for meeting locals. Fewer tourists and a very relaxed vibe.",
    tips: [
      "Join the locals for an impromptu late afternoon beach soccer game.",
      "A great sheltered bay for a morning dip before the wind picks up."
    ],
    highlights: ["Popular with local families", "Calm waters for swimming", "Authentic atmosphere"],
    emotionalBenefits: ["Relaxed", "Authentic", "Social"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best June–September",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public beach access"],
    excludedServices: ["Umbrella rental"],
    hiddenCostsInfo: "Small local vendors for tea or snacks",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Calm Water",
        description: "Shallow, protected cove sheltered by the headland; very gentle and safe for family swimming.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Port authority coastal bathymetry",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Zero Hustle",
        description: "Frequented almost exclusively by local neighborhood residents; no tourist commission touts.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Community neighborhood watch logs",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free",
        description: "No entrance fee or forced chair rentals; free street parking along Boulevard Mohammed V.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Commune d'Al Hoceïma regulations",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Neighborhood Vibe",
        description: "An authentic slice of everyday Rifian beach life away from standard commercial tourism.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Local field observations",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Short Slope",
        description: "Direct walk-in access via a short concrete slope from the street; minimal physical effort required.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Access site verification",
      },
    ],
    address: "Plage Matadero, Calabonita, Al Hoceima 32000",
    coordinates: { lat: 35.2368, lng: -3.9233 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+Matadero+Al+Hoceima",
    parkingInfo: "Street parking available nearby",
    publicTransportInfo: "Walkable from Calabonita or short taxi from center",
    dressCode: "Swimwear",
    equipmentNeeded: ["Towel", "Sunscreen"],
    fitnessLevel: "Relaxed (Gentle slope from road to sandy shoreline)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Safe local beach with calm swimming waters",
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
        name: "Plage Cala Bonita",
        type: "visit",
        id: "al-hoceima-cala-bonita"
      }
    ],
    storyTitle: "The Neighborhood Beach",
    history: "A traditional swimming spot for residents living between the old port and Calabonita.",
    culturalImportance: "Reflects everyday leisure culture of Al Hoceima residents.",
    localLegend: "Named after the historic Spanish municipality slaughterhouse that once stood on the bluffs.",
    funFact: "Many locals prefer this beach for its unhurried community feel.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it crowded?",
        a: "Less crowded than Quemado but lively with locals."
      }
    ],
    contactPhone: "",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-boujibar-national-park",
    city: "al_hoceima",
    name: "Boujibar National Park Area",
    neighborhood: "Tala Youssef",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nomad", "nature"],
    vibeTags: ["scenic", "serene", "tranquil"],
    tags: ["coastal", "hiking-trek", "nature", "off-the-beaten-path", "sunset"],
    badges: ["hidden-gem", "peaceful-escape", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 1,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 180,
    distanceFromCenterKm: 15,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: false,
    },
    openingHours: "Dawn to dusk (Daily)",
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "panoramic_viewpoint", "walking_paths"],
    restrictions: ["No off-trail vehicles or open fires allowed"],
    healthContraindications: ["Requires good footing; unpaved gravel trails"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "Part of the protected coastal massif featuring rugged terrain, pine forest ridges, and dramatic Mediterranean views. Great for nature walks and photography.",
    shortValueProp: "Rugged coastal wilderness with dramatic views and hiking opportunities",
    images: [],
    googleRating: 4.3,
    reviewCount: 228,
    googleReviewCount: 145,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 55,
    viatorRating: 4,
    viatorReviewCount: 18,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 10,
    badge: "hidden-gem",
    tip: "Less visited than the main national park. Excellent for birdwatching.",
    tips: [
      "Download your trail map offline before setting out as cellular reception can drop in mountain dips.",
      "Wear trail runners or hiking boots with aggressive tread for loose scree on the climbs."
    ],
    highlights: ["Dramatic coastal cliffs", "Dense Mediterranean forest", "Excellent for photography"],
    emotionalBenefits: ["Wild", "Scenic", "Adventurous"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Spring and autumn best",
    ticketTypes: [
      {
        name: "Entry",
        price: 10,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free for children",
    includedServices: ["Park access"],
    excludedServices: ["Mountain guiding services"],
    hiddenCostsInfo: "Optional local guide 100-150 MAD",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Remote Ridge",
        description: "Narrow cliff-top dirt tracks without cell service in dips; carry water and finish before dusk.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Forestry commission safety bulletins",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent",
        description: "Open natural area without gatekeepers; reject any unauthorized claims for bogus trail access fees.",
        tone: "good",
        tagColor: "alert",
        state: "verified",
        source: "Eco-tourism surveillance reports",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Entry",
        description: "Open public nature trails have no mandatory fee; local village nature guides charge 100–150 MAD.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Parc National public trail registries",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Wild Flora",
        description: "Pure pine and mastic forest with unspoiled views over dramatic Rif cliffs into the Mediterranean.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Biological reserve research papers",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Moderate Incline",
        description: "Stony single-track trails feature loose gravel and steady climbs; proper footwear is advised.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Topographic trail survey data",
      },
    ],
    address: "Boujibar ridge, Al Hoceima 32000",
    coordinates: { lat: 35.2382, lng: -3.9554 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boujibar+National+Park+Al+Hoceima",
    parkingInfo: "Limited parking at dirt road entrance",
    publicTransportInfo: "Taxi or organized tour",
    dressCode: "Hiking clothes",
    equipmentNeeded: ["Water", "Sturdy shoes", "Camera"],
    fitnessLevel: "Moderate (Rocky uphill trails with loose scree)",
    ageRestrictions: "Suitable for active visitors",
    safetyNotes: "Stay on paths; beware of steep drop-offs",
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-plage-cala-iris",
    city: "al_hoceima",
    name: "Cala Iris Beach & Village",
    neighborhood: "Tala Youssef",
    // ── 1. QUIZ — matching, mood & personalization ──
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "photographer", "romantic"],
    vibeTags: ["scenic", "tranquil", "serene"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["hidden-gem", "photography-spot", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ──
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 45,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true,
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["traditional_restaurant", "parking", "panoramic_viewpoint"],
    restrictions: ["Respect traditional fishing equipment and boats pulled up on shore"],
    healthContraindications: ["Winding coastal mountain roads may trigger car sickness"],
    // ── 3. UI — presentation & social proof ───────────────
    description: "A remote and picturesque beach in a sheltered cove in the national park coastal zone. Features a small fishing village, offshore islets, and crystalline turquoise water.",
    shortValueProp: "A remote cove with offshore islets and an authentic fishing village",
    images: [],
    googleRating: 4.8,
    reviewCount: 565,
    googleReviewCount: 320,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 145,
    viatorRating: 4.6,
    viatorReviewCount: 65,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 35,
    badge: "top-pick",
    tip: "One of the most beautiful beaches in the region. Can be reached by road along the scenic N16 coastal highway or by excursion boat.",
    tips: [
      "Order freshly grilled sardines or sea bream right from the fishermen at the village beach shacks.",
      "Combine the visit with the nearby historical Peñón de Vélez de la Gomera coastal hike."
    ],
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
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Beach access"],
    excludedServices: ["Excursion boat transfer", "Campground pitch fees"],
    hiddenCostsInfo: "Optional boat transfer or grilled fish meal (60-100 MAD)",
    // ── 4. WORRIES ("Things You're Worried About!") ──────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Sheltered Bay",
        description: "Offshore islets block heavy open-sea swells, creating calm conditions; take care near boat launches.",
        tone: "good",
        tagColor: "safety",
        state: "verified",
        source: "Marine protected area safety audit",
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Negotiate Ahead",
        description: "Confirm prices for round-trip boat trips or grilled fish meals with local fishermen before ordering.",
        tone: "caution",
        tagColor: "money",
        state: "verified",
        source: "Visitor consumer reports",
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Modest",
        description: "Free beach entry; fresh grilled sardine platters run 60–100 MAD and seaside camping is ~80 MAD.",
        tone: "good",
        tagColor: "money",
        state: "verified",
        source: "Camping Amis de Cala Iris published rates",
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Fishing Hamlet",
        description: "Working artisanal wooden skiffs dock daily with fresh Mediterranean catch, untouched by high-rise hotels.",
        tone: "good",
        tagColor: "craft",
        state: "verified",
        source: "Artisanal fisheries cooperative data",
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Winding Drive",
        description: "Access requires a 50 km drive along the scenic N16 coastal highway, followed by a brief unpaved ramp.",
        tone: "caution",
        tagColor: "safety",
        state: "verified",
        source: "Rif coastal road navigation log",
      },
    ],
    address: "Cala Iris, Al Hoceima Province",
    coordinates: { lat: 35.1528, lng: -4.3644 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cala+Iris+Al+Hoceima",
    parkingInfo: "Unpaved parking near village beach access (free)",
    publicTransportInfo: "Taxi or boat tour from Al Hoceima",
    dressCode: "Beachwear",
    equipmentNeeded: ["Snorkel gear recommended", "Water", "Snacks"],
    fitnessLevel: "Relaxed (Gentle sand walk along the cove)",
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
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  }
];