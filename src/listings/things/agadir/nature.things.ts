/**
 * =========================================================================
 * [AGADIR] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/agadir/index.ts
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
export const agadirNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-cable-car",
    city: "agadir",
    name: "Agadir Cable Car",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "adventure"],
    tags: ["climbing-adventure", "coastal", "instagrammable", "mountain", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 12,
    pricePerPerson: 120,
    entryPrice: 120,
    durationMinutes: 20,
    distanceFromCenterKm: 1.5,
    transportMode: "transit",
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
    goodForRain: false,
    openingHours: "09:00 AM - 08:30 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Morocco's first urban cable car system, connecting the Tildi bridge base station to the ancient hilltop ruins of Agadir Oufella in a scenic 6-minute ride.",
    shortValueProp: "Fly over Agadir on a state-of-the-art panoramic cable car",
    googleRating: 4.4,
    reviewCount: 6769,
    googleReviewCount: 4359,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 1550,
    viatorRating: 4.4,
    viatorReviewCount: 480,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 380,
    tip: "Choose a one-way ticket up to enjoy the views, and stroll down the historical walking trail at your own pace.",
    tips: ["not available"],
    highlights: [
      "Scenic 6-minute aerial journey over the old bridge and Tildi ravine",
      "Spectacular 360-degree views of the ocean, harbor, and beach crescent",
      "Seamless and fast connection from central Talborjt to the Kasbah"
    ],
    emotionalBenefits: ["Scenic", "Thrilling", "Convenient"],
    bestTimeToVisit: "Golden hour (05:30 PM - 07:00 PM)",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Adult Round Trip",
        price: 120
      },
      {
        name: "Child Round Trip",
        price: 80
      },
      {
        name: "Adult One-Way",
        price: 80
      }
    ],
    discountsInfo: "Discounts available for groups and residents.",
    includedServices: ["Cable car cabin access", "Security support at stations"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None; standard tickets cover full cabin flight",
    address: "Base Station Tildi Bridge, Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Telepherique+Agadir",
    parkingInfo: "Dedicated parking lot at the base station (5 MAD fee)",
    publicTransportInfo: "Petit taxis from beach zone take 5 minutes (approx. 15 MAD)",
    dressCode: "Casual; hold on to hats and loose items when boarding",
    equipmentNeeded: ["Camera or smartphone", "Sunglasses"],
    fitnessLevel: "Relaxed (Fully automated boarding)",
    ageRestrictions: "All ages welcome; toddlers must be held",
    safetyNotes: "Double locked doors with automatic stop mechanism; highly safe",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Family Adventure",
        quote: "The easiest and most beautiful way to reach the Oufella ruins. Perfect for families!",
        author: "Sophie L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Agadir Oufella Ruins",
        type: "visit",
        id: "agadir-oufella-ruins"
      }
    ],
    storyTitle: "Bridging the Ravine",
    history: "Opened in 2022, this modern aerial tramway is part of Agadir's massive urban renewal plan, marking the first urban cable car project in North Africa.",
    culturalImportance: "It bridges the historical gap between the modern rebuilt city of Agadir and its tragic ancient origins on the hilltop fortress of Oufella.",
    localLegend: "Local children love to wave at the cabins from the mountain paths, calling them 'floating colorful eggs' sailing in the sky.",
    funFact: "Each cabin is painted in a distinctive shade of royal blue or ocean indigo, reflecting Agadir's coastal personality.",
    officialWebsite: "https://www.danialand.ma",
    ticketWebsite: "https://www.danialand.ma/tickets",
    faq: [
      {
        q: "Is it wheelchair accessible?",
        a: "Yes, cabins are designed with wide sliding doors to easily accommodate wheelchairs and strollers."
      }
    ],
    contactPhone: "+212 528-282828",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-crocoparc",
    city: "agadir",
    name: "Crocoparc Agadir",
    neighborhood: "Drarga",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "first-timer"],
    tags: ["authentic", "climbing-adventure", "coastal", "nature", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 10,
    pricePerPerson: 80,
    entryPrice: 80,
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
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: false,
    openingHours: "10:00 AM - 07:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A world-class crocodile conservation park and lush botanical garden that is home to over 300 Nile crocodiles, giant tortoises, and green iguanas. The park features walking paths surrounded by exotic plants and educational displays.",
    shortValueProp: "Explore Morocco's premier crocodile conservation reserve and botanical sanctuary",
    googleRating: 4.8,
    reviewCount: 2951,
    googleReviewCount: 1501,
    tripadvisorRating: 5,
    tripadvisorReviewCount: 820,
    viatorRating: 4.8,
    viatorReviewCount: 350,
    getyourguideRating: 4.7,
    getyourguideReviewCount: 280,
    tip: "Plan your visit to coincide with the crocodile feeding sessions to watch the reptiles feed from hanging platforms.",
    tips: ["not available"],
    highlights: [
      "Observe over 300 giant Nile crocodiles in their natural habitat",
      "Stroll five themed botanical gardens featuring rare cacti and lilies",
      "Interact safely with giant aldabra tortoises and iguanas"
    ],
    emotionalBenefits: ["Educational", "Adventurous", "Captivating"],
    bestTimeToVisit: "Mid-day around feeding time (02:00 PM)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Adult Entry Ticket",
        price: 80
      },
      {
        name: "Child (3-12 years)",
        price: 50
      }
    ],
    discountsInfo: "Free for children under 3 years of age.",
    includedServices: ["Access to all botanical and reptile exhibits", "Daily feeding show presentations"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional shuttle service fee or snacks inside",
    address: "National Road 8, Drarga, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Crocoparc+Agadir",
    parkingInfo: "Large secure free parking lot directly outside",
    publicTransportInfo: "Crocoparc shuttle bus from beach zone or local bus route 5",
    dressCode: "Comfortable casual clothing; flat walking shoes are ideal",
    equipmentNeeded: ["Sunscreen", "Comfortable walking shoes", "Camera"],
    fitnessLevel: "Moderate (Gentle walking over paved pathways)",
    ageRestrictions: "Perfect for all ages; heavily stroller accessible",
    safetyNotes: "Double-walled security fences and heavily guarded viewing spots",
    languages: ["Arabic (Darija)", "French", "English", "German"],
    visitorQuotes: [
      {
        type: "Family Holiday",
        quote: "A wonderful park! The gardens are as stunning as the crocodiles. Highly educational for kids.",
        author: "Markus V.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Souss-Massa National Park",
        type: "visit",
        id: "agadir-souss-massa-park"
      }
    ],
    storyTitle: "The Rebirth of Nile Giants",
    history: "Crocodiles were once native to Morocco, thriving in rivers until overhunting wiped them out in the early 20th century. Crocoparc was founded to reintroduce these magnificent reptiles to the region.",
    culturalImportance: "Provides local school children with essential ecological education, boosting local biodiversity and environmental awareness.",
    localLegend: "Locals speak of ancient desert Nomads who believed that looking into the eyes of a sleeping giant reptile brings lifetime patience.",
    funFact: "The giant metal crocodile mouth that serves as the park entrance is over 4 meters wide and is a massive favorite for family photos.",
    officialWebsite: "https://www.crocoparc.com",
    ticketWebsite: "https://www.crocoparc.com/booking",
    faq: [
      {
        q: "When is the best time to see crocodile feeding?",
        a: "Feeding sessions are usually held mid-day around 2:00 PM when the crocodiles are most active in the sun."
      }
    ],
    contactPhone: "+212 528-297070",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-beach-main",
    city: "agadir",
    name: "Agadir Beach",
    neighborhood: "Secteur Touristique",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["authentic", "coastal", "instagrammable", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
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
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "Open 24/7 (Lifeguards active 08:00 AM - 06:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A wide, crescent-shaped golden sand beach spanning 9 kilometers along the Atlantic coast, bordered by a lively pedestrian promenade. It is highly popular for sunbathing, beach football, and walking.",
    shortValueProp: "9 kilometers of sheltered golden sands and vibrant seaside life",
    googleRating: 4.5,
    reviewCount: 21100,
    googleReviewCount: 12450,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 6500,
    viatorRating: 4.6,
    viatorReviewCount: 1200,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 950,
    tip: "Walk past the central tourist strip toward the northern section near the marina to find cleaner sand and a quieter atmosphere.",
    tips: ["not available"],
    highlights: [
      "9 kilometers of wide golden sand beach sheltered from strong winds",
      "Paved pedestrian beach promenade lined with local cafes and restaurants",
      "Excellent, safe bay waters perfect for beach volleyball and swimming"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Social"],
    bestTimeToVisit: "Morning for quiet walks, or late afternoon for sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best for swimming June to October)",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0
      }
    ],
    discountsInfo: "No fees required for beach entry.",
    includedServices: ["Public beach access", "Showers and lifeguard patrol zones during summer"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Expect 20-50 MAD for renting a beach umbrella or lounger",
    address: "Boulevard du 20 Aout, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+d%27Agadir",
    parkingInfo: "Paid street parking along Boulevard du 20 Aout (5-10 MAD)",
    publicTransportInfo: "Easily walkable from all major central beach resorts and hotels",
    dressCode: "Swimwear is normal on the sand; cover up when returning to the promenade",
    equipmentNeeded: ["Beach towel", "Swimwear", "Sunscreen"],
    fitnessLevel: "Relaxed (Flat sandy terrain)",
    ageRestrictions: "All ages welcome; stroller friendly promenade",
    safetyNotes: "Well-patrolled by municipal tourist police; very safe at night",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Solo Traveler",
        quote: "The promenade is beautiful for a morning jog or sunset stroll. Safe, clean, and spacious.",
        author: "Yassine B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Marina d'Agadir",
        type: "visit",
        id: "agadir-marina"
      }
    ],
    storyTitle: "The Crescent Bay of the Souss",
    history: "Agadir's beach has always been its lifeline. Sheltered by the natural curvature of the mountains, it was once a busy anchorage for European traders before becoming a modern tourist haven.",
    culturalImportance: "The promenade is the ultimate social gathering ground for local families, especially during warm summer nights.",
    localLegend: "Moroccan fishermen believe that the morning ocean mist over Agadir bay carries blessings from the Atlas Mountains down to the fish trawlers.",
    funFact: "Because the bay is sheltered from major ocean swells, it is one of the safest swimming beaches in all of southern Morocco.",
    officialWebsite: "https://www.agadir.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe to swim?",
        a: "Yes, the beach has lifeguards on duty during high season and the bay is sheltered, but always watch out for local current warnings."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-marina",
    city: "agadir",
    name: "Marina d'Agadir",
    neighborhood: "Port Sector",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["coastal", "instagrammable", "relaxed", "shopping", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1,
    transportMode: "walkable",
    transportModes: ["not available"],
    safetyLevel: 5,
    walkInOkay: false,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: false,
    openingHours: "Open 24/7 (Shops usually active 10:00 AM - 10:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A modern seafront marina featuring luxury yachts, high-end residential apartments, and shopping boutiques. The marina dock is lined with local cafes and upscale dining spots facing the water.",
    shortValueProp: "Unwind at Agadir's modern maritime hub of dining, shopping, and yachts",
    googleRating: 4.2,
    reviewCount: 5490,
    googleReviewCount: 3500,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 1450,
    viatorRating: 4.1,
    viatorReviewCount: 320,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 220,
    tip: "Stop by a dockside coffee shop in the morning when the water is perfectly still for the best views of the boats and the surrounding mountains.",
    tips: ["not available"],
    highlights: [
      "Stroll the elegant waterfront dock lined with luxury sailboats and yachts",
      "Shop at high-end boutiques and sit at fashionable open-air cafes",
      "Capture beautiful views of the ancient Kasbah on the mountain above"
    ],
    emotionalBenefits: ["Sophisticated", "Scenic", "Vibrant"],
    bestTimeToVisit: "Morning for calm waters or evening for coastal dining",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0
      }
    ],
    discountsInfo: "No fees required for entry.",
    includedServices: ["Boardwalk pedestrian access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Expect standard resort-level pricing at dockside cafes",
    address: "Port de Plaisance, Marina, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marina+d%27Agadir",
    parkingInfo: "Paid underground and street parking (10-20 MAD fee)",
    publicTransportInfo: "Easily reachable on foot from the northern end of Agadir Beach",
    dressCode: "Smart-casual clothing is highly recommended for evening cafes",
    equipmentNeeded: ["Sunglasses", "Comfortable sandals"],
    fitnessLevel: "Relaxed (Perfectly flat paved harbor docks)",
    ageRestrictions: "All ages welcome; kid and stroller friendly",
    safetyNotes: "Private security guards patrol the docks 24/7; exceptionally safe",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Luxury Curator",
        quote: "Great spot for an evening coffee. It feels very modern and is a wonderful place to watch yachts sail in.",
        author: "Amélie D.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Agadir Cable Car",
        type: "visit",
        id: "agadir-cable-car"
      }
    ],
    storyTitle: "Modern Maritime Luxury",
    history: "Constructed in the early 2000s as part of Agadir's modernization push, the Marina provides an elegant international port of call for yachts crossing the Atlantic.",
    culturalImportance: "Showcases Morocco's modern, cosmopolitan coastal lifestyle, blending local hospitality with international standards.",
    localLegend: "Sailors say that the waters in this specific basin are protected by ancient blessings, ensuring calm anchorage during storms.",
    funFact: "Many luxury sailing yachts make this marina their final African harbor stop before setting off across the Atlantic Ocean toward the Caribbean.",
    officialWebsite: "https://www.marinaagadir.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I book boat tours from here?",
        a: "Yes, several companies operate catamaran trips and fishing excursions directly from the marina docks."
      }
    ],
    contactPhone: "+212 528-844444",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-souss-massa-park",
    city: "agadir",
    name: "Souss-Massa National Park",
    neighborhood: "Sidi R'bat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["climbing-adventure", "coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 15,
    pricePerPerson: 15,
    entryPrice: 15,
    durationMinutes: 240,
    distanceFromCenterKm: 35,
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
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A protected nature reserve encompassing sandy beaches, estuary wetlands, and forests. It is renowned as one of the last wild breeding grounds for the critically endangered Northern Bald Ibis.",
    shortValueProp: "Discover wild dunes and endangered bird habitats at Agadir's legendary estuary reserve",
    googleRating: 4.6,
    reviewCount: 1705,
    googleReviewCount: 995,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 450,
    viatorRating: 4.6,
    viatorReviewCount: 150,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 110,
    tip: "Hire an official park ranger at the park entrance to guide you directly to the Souss River estuary, where you have the highest chance of spotting wild flamingos.",
    tips: ["not available"],
    highlights: [
      "Spot the critically endangered Northern Bald Ibis nesting in ocean cliffs",
      "Walk the vast river estuary to photograph wild pink flamingos",
      "Explore wild golden coastal dunes crashing straight into Atlantic rollers"
    ],
    emotionalBenefits: ["Adventurous", "Wild", "Scenic"],
    bestTimeToVisit: "Early morning around 08:30 AM for active bird activity",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best bird migratory views in autumn/winter)",
    ticketTypes: [
      {
        name: "Standard Park Access",
        price: 15
      },
      {
        name: "National Citizens",
        price: 5
      }
    ],
    discountsInfo: "Slight discounts available for large pre-booked group tours.",
    includedServices: ["Entry to national reserve trails", "Information panel access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Highly recommended to tip local park rangers (100-150 MAD)",
    address: "Route de Sidi R'bat, Massa Valley, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Souss-Massa+National+Park",
    parkingInfo: "Secure dirt parking lot at the visitor station (10 MAD)",
    publicTransportInfo: "Best reached via hired Grand Taxi (approx. 200-300 MAD round trip)",
    dressCode: "Outdoor activewear; sturdy walking shoes and sun hat are vital",
    equipmentNeeded: ["Binoculars", "Sun hat", "Sturdy walking shoes", "Plenty of water"],
    fitnessLevel: "Moderate (A lot of walking over soft sand and dirt tracks)",
    ageRestrictions: "Suitable for all active ages; can be tiring for very small toddlers",
    safetyNotes: "Strictly stick to marked trail boundaries to protect fragile ibis nests",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Nature Enthusiast",
        quote: "An absolute paradise for birdwatchers. Seeing the Bald Ibis and wild flamingos was a lifetime highlight.",
        author: "Elena R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Tifnit Fishing Village",
        type: "visit",
        id: "agadir-tifnit"
      }
    ],
    storyTitle: "The Sanctuary of the Ibis",
    history: "Created in 1991, this park is the ultimate defense barrier protecting southern Morocco's unique river mouth ecosystems from coastal real estate expansion.",
    culturalImportance: "Protects ancient Berber farming and fishing rights within the reserve, honoring regional community roots.",
    localLegend: "Local legends speak of the 'Ibis Guardians', magical ancient birds that fly up to predict winter rains.",
    funFact: "This park is home to over 95% of the entire wild population of the endangered Northern Bald Ibis in the world.",
    officialWebsite: "https://www.parcsnationauxdumaroc.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a 4x4 to visit?",
        a: "While a 4x4 is helpful to reach remote dunes and Sidi R'bat, the main park entrance is accessible by standard taxi and walking."
      }
    ],
    contactPhone: "+212 528-820505",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-paradise-valley",
    city: "agadir",
    name: "Paradise Valley",
    neighborhood: "Imouzzer Road",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "mountain", "nature", "off-the-beaten-path", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 32,
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "Open 24/7 (Best visited in daylight 08:00 AM - 05:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A natural canyon oasis nestled in the foothills of the Atlas Mountains, featuring palm groves, rock formations, and clear emerald-green swimming pools.",
    shortValueProp: "Hike deep canyons to swim in the cool, emerald pools of the Honey Route",
    googleRating: 4.6,
    reviewCount: 2431,
    googleReviewCount: 1291,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 650,
    viatorRating: 4.6,
    viatorReviewCount: 280,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 210,
    tip: "Check with locals before driving out, as the water levels in the pools fluctuate significantly depending on the season and rainfall.",
    tips: ["not available"],
    highlights: [
      "Stunning deep canyon walks surrounded by native argan and date palms",
      "Plunge into refreshing emerald-green natural freshwater mountain pools",
      "Stroll past rustic riverside cafes serving local tagines directly on the water"
    ],
    emotionalBenefits: ["Reinvigorating", "Adventurous", "Scenic"],
    bestTimeToVisit: "Morning around 09:30 AM before tourist buses arrive",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best in late winter and spring when mountain water runs full",
    ticketTypes: [
      {
        name: "Free Natural Access",
        price: 0
      }
    ],
    discountsInfo: "No national park tickets needed; open public canyon.",
    includedServices: ["Access to canyon pools and trails"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Expect 10 MAD for parking, and optional guide tips (50-100 MAD)",
    address: "Imouzzer Ida Outanane Road, Foothills of Atlas, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paradise+Valley+Agadir",
    parkingInfo: "Dirt parking spaces along the main canyon road (10 MAD fee)",
    publicTransportInfo: "Best reached by renting a car or booking a half-day tour from Agadir",
    dressCode: "Outdoor hiking clothes; swimsuits underneath are essential",
    equipmentNeeded: ["Swimwear", "Water shoes", "Sunscreen", "Cash for local tagines"],
    fitnessLevel: "Active (Involves a 20-30 minute hike over steep, uneven rocks)",
    ageRestrictions: "All ages welcome; paths are rock-bound, not stroller friendly",
    safetyNotes: "Always check water depth before diving; rock ledges can be slippery",
    languages: ["Arabic (Darija)", "French", "Tachelhit"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "The hike is absolutely gorgeous. Swimming in the cool rock pools surrounded by palms feels like a dream.",
        author: "Oliver T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Agadir Beach",
        type: "visit",
        id: "agadir-beach-main"
      }
    ],
    storyTitle: "The Valley of the Hippies",
    history: "In the late 1960s, this natural canyon was popularized by music legends and backpackers traveling the famous hippy trail through Morocco.",
    culturalImportance: "Maintains traditional Berber Ida Outanane honey harvesting practices, celebrating southern mountain trade.",
    localLegend: "Berbers say that these cool springs are fed by tears of ancient mountain giants wishing to meet the Atlantic.",
    funFact: "Rock music icon Jimi Hendrix visited these specific pools in the late 1960s and loved their acoustic properties.",
    officialWebsite: "https://www.visitmorocco.com/en/travel-destination/agadir/paradise-valley",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there water in the pools year-round?",
        a: "Water levels drop significantly during summer. It is best to visit after winter or spring rainfall for full emerald pools."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-anza-dinosaur-footprints",
    city: "agadir",
    name: "Dinosaur Footprints at Anza Beach",
    neighborhood: "Anza",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "culture"],
    tags: ["authentic", "coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 8,
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
    goodForRain: false,
    openingHours: "Visible only during low tide (Consult local tide charts daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A coastal geological site where fossilized dinosaur footprints dating back to the Late Cretaceous period are preserved on a rocky ledge right by the sea.",
    shortValueProp: "Walk beside prehistoric Cretaceous fossil footprints preserved on a coastal rock ledge",
    googleRating: 4.2,
    reviewCount: 245,
    googleReviewCount: 150,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 60,
    viatorRating: 4,
    viatorReviewCount: 20,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 15,
    tip: "Check the local tide charts online; the prehistoric footprints are completely covered by water and invisible during high tide.",
    tips: ["not available"],
    highlights: [
      "Over 300 fossilized dinosaur footprints preserved on a flat rocky shore",
      "Observe tracks from Theropods and prehistoric Pterosaurs",
      "Beautiful coastal location right beside active local fishing and surfing reefs"
    ],
    emotionalBenefits: ["Awe-inspiring", "Educational", "Off-beat"],
    bestTimeToVisit: "Precisely 1 hour before lowest tide of the day",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Beach Access",
        price: 0
      }
    ],
    discountsInfo: "Absolutely free; no entrance tickets required.",
    includedServices: ["Self-guided viewing access on rock ledge"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None; entirely free natural geologic reserve",
    address: "Rocky Shore, Anza Beach Front, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Anza+Dinosaur+Footprints+Agadir",
    parkingInfo: "Paid street parking along Anza Beach Promenade (5 MAD)",
    publicTransportInfo: "Easily reached by petit taxi or local bus route 12 (approx. 10 MAD from center)",
    dressCode: "Outdoor active clothing; shoes with excellent grip are a must",
    equipmentNeeded: ["Sturdy shoes with good grip", "Camera", "Tide schedule info"],
    fitnessLevel: "Moderate (Walking over slippery and wet rock ledges)",
    ageRestrictions: "All ages welcome; keep kids close as waves crash nearby",
    safetyNotes: "Rocks can be extremely slippery when wet; watch for sudden waves",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Curious Explorer",
        quote: "It's amazing to stand where dinosaurs actually walked. Make sure to check the tide table or you won't see anything!",
        author: "Dr. Arthur S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Taghazout Surf Lesson",
        type: "visit",
        id: "agadir-taghazout-surf"
      }
    ],
    storyTitle: "Prehistoric Shorelines",
    history: "Discovered accidentally by local geologists in 2013 after heavy winter storm swells stripped away layers of sand and shells, exposing these incredibly clear Cretaceous layers.",
    culturalImportance: "Serves as an important scientific and archaeological heritage site for Moroccan researchers.",
    localLegend: "Older fishermen say they always knew about the 'giant bird markings' in the rocks, believing they were left by ancient legendary eagles.",
    funFact: "These footprints are the only ones of their kind in North Africa that were printed directly onto an ancient tidal flat.",
    officialWebsite: "https://www.anza-geopark.org",
    ticketWebsite: "",
    faq: [
      {
        q: "How do I find the tracks on the rocks?",
        a: "They are located on the flat rocky slabs just north of Anza beach. Look for circular and three-toed impressions in the rock."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-port",
    city: "agadir",
    name: "Le Port d'Agadir",
    neighborhood: "Port Industrial Sector",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "coastal", "cultural-tour", "morning", "off-the-beaten-path", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 2,
    transportMode: "taxi",
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "Open daily (Port most active 06:00 AM - 02:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A lively, sensory-rich commercial fishing harbor where you can observe wooden trawlers unloading their morning catches.",
    shortValueProp: "Immerse in a bustling traditional fishing port and feast on fresh ocean sardines",
    googleRating: 4.1,
    reviewCount: 1385,
    googleReviewCount: 850,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 380,
    viatorRating: 4.1,
    viatorReviewCount: 95,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 60,
    tip: "Visit between 7:30 AM and 9:00 AM to see the fast-paced local fish auction, then stop by the nearby stalls for fresh grilled sardines.",
    tips: ["not available"],
    highlights: [
      "Watch local blue wooden trawlers unload massive nets of ocean sardines",
      "Witness the traditional fast-paced morning fish bidding auctions",
      "Dine on incredibly fresh seafood grilled right in front of your eyes"
    ],
    emotionalBenefits: ["Authentic", "Bustling", "Sensory"],
    bestTimeToVisit: "Morning around 08:00 AM to see boats unload",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Entrance",
        price: 0
      }
    ],
    discountsInfo: "No fees required for public harbor walking.",
    includedServices: ["Access to public harbor walkways and grill areas"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Expect 50-100 MAD for a feast at the local fish grill shacks",
    address: "Port de Peche, Avenue du Port, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Port+de+peche+Agadir",
    parkingInfo: "Paid street spaces around the port entrance (5 MAD fee)",
    publicTransportInfo: "Best reached by a short petit taxi ride from Marina or beach",
    dressCode: "Casual; shoes with thick soles are recommended (ground can be wet)",
    equipmentNeeded: ["Closed-toe shoes (ground can be wet and slippery)", "Camera"],
    fitnessLevel: "Moderate (Walking over wet concrete harbor docks)",
    ageRestrictions: "All ages welcome; watch kids around dock edges",
    safetyNotes: "Active industrial zone; stay alert for local forklifts and trucks",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Culinary Adventurer",
        quote: "An absolute must-visit for foodies. You choose your raw fish from the morning catch and they grill it for you on charcoal.",
        author: "Sven G.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Marina d'Agadir",
        type: "visit",
        id: "agadir-marina"
      }
    ],
    storyTitle: "The Blue Fleet",
    history: "Agadir is Morocco's primary industrial sardine port. For generations, these classic blue wooden boats have sailed into the Atlantic, feeding the Souss region.",
    culturalImportance: "Underpins the culinary identity of Agadir, representing the humble and hardworking fishermen of the Atlantic coast.",
    localLegend: "Souss fishermen say that throwing a small piece of bread back to sea keeps the morning coastal fog away.",
    funFact: "Morocco is the world's largest exporter of canned sardines, and the vast majority are processed right here in Agadir's harbor complexes.",
    officialWebsite: "https://www.anp.org.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "When is the fish market active?",
        a: "The fishing boats unload starting at 6:00 AM, and the grill stalls are most active for lunch from 11:30 AM to 3:00 PM."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-golf-soleil",
    city: "agadir",
    name: "Golf du Soleil",
    neighborhood: "Chemin des Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator"],
    tags: ["active", "climbing-adventure", "instagrammable", "nature", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 65,
    pricePerPerson: 750,
    entryPrice: 750,
    durationMinutes: 240,
    distanceFromCenterKm: 6.5,
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
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: false,
    openingHours: "07:30 AM - 07:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A well-maintained 36-hole resort golf course set between the Atlantic breeze and the foothills, surrounded by dense eucalyptus and palm trees.",
    shortValueProp: "Play 36 holes of premium championship golf between the ocean breeze and native dunes",
    googleRating: 4.4,
    reviewCount: 776,
    googleReviewCount: 466,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 210,
    viatorRating: 4.3,
    viatorReviewCount: 60,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 40,
    tip: "Opt to walk the course instead of using a golf cart if you enjoy birdwatching; the resort's lakes are frequented by wild waterfowl.",
    tips: ["not available"],
    highlights: [
      "Superbly maintained 36-hole complex with professional practice academy",
      "Surrounded by beautiful eucalyptus groves, native palms, and large scenic lakes",
      "Upscale club house with panoramic restaurant overlooking the final green"
    ],
    emotionalBenefits: ["Relaxed", "Focused", "Aesthetic"],
    bestTimeToVisit: "Morning around 08:30 AM before the sun gets too intense",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "9-Hole Green Fee",
        price: 450
      },
      {
        name: "18-Hole Green Fee",
        price: 750
      }
    ],
    discountsInfo: "Discounts available for resident hotel guests and package deals.",
    includedServices: ["Locker room access", "Range balls during practice sessions"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Club rental and caddy tips are paid extra at pro shop",
    address: "Chemin des Dunes, Secteur Touristique, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Golf+du+Soleil+Agadir",
    parkingInfo: "Large secure private parking lot at clubhouse (Free)",
    publicTransportInfo: "Best reached by a direct hotel shuttle or pre-booked taxi",
    dressCode: "Standard golf attire (collared shirts, tailored shorts/trousers, soft spikes)",
    equipmentNeeded: ["Golf clubs (available for rent)", "Collared shirt and golf shoes"],
    fitnessLevel: "Active (Involves several hours of walking on turf)",
    ageRestrictions: "Mainly adults; kids allowed when accompanied by golf card holder",
    safetyNotes: "Follow standard golf etiquette; watch for flying golf balls",
    languages: ["Arabic (Darija)", "French", "English", "German"],
    visitorQuotes: [
      {
        type: "Seniors & Comfort",
        quote: "An exceptionally manicured course. The trees and water hazards are beautiful, and the staff is wonderful.",
        author: "Robert K.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Sunset Camel Ride at Oued Souss",
        type: "visit",
        id: "agadir-oued-souss-camel"
      }
    ],
    storyTitle: "Oasis of the Fairways",
    history: "Designed by master architects, Golf du Soleil was built to integrate with the surrounding Souss landscape, utilizing natural dunes, lakes, and eucalyptus forests to create a challenging yet beautiful championship course.",
    culturalImportance: "A premier destination showcasing Morocco's luxury sports infrastructure and high-end tourism development in the Souss-Massa region.",
    localLegend: "It is said that the waters of the course's large lakes are guarded by wild herons that bring luck to those who play a perfect round.",
    funFact: "The course is designed with multiple teeing options, making it equally enjoyable for casual holiday players and seasoned professional golfers.",
    officialWebsite: "https://www.golfdusoleil.com",
    ticketWebsite: "https://www.golfdusoleil.com/reservations",
    faq: [
      {
        q: "Can I rent clubs and a cart?",
        a: "Yes, full rental sets, pull carts, and electric golf carts are available at the pro shop."
      }
    ],
    contactPhone: "+212 528-833333",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-devils-rock",
    city: "agadir",
    name: "Devil's Rock",
    neighborhood: "Tamraght",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "adventure"],
    tags: ["coastal", "instagrammable", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 14,
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
    goodForRain: false,
    openingHours: "Open 24/7 (Visits best during daylight and sunset)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A striking rocky outcrop extending into the ocean, popular with local surfers and sunset watchers. The beach surrounding it is lined with low-key seafood shacks.",
    shortValueProp: "Watch brave surfers and brilliant Atlantic sunsets from a legendary coastal outcrop",
    googleRating: 4.5,
    reviewCount: 1875,
    googleReviewCount: 1120,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 520,
    viatorRating: 4.4,
    viatorReviewCount: 140,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 95,
    tip: "Climb up the rock path during low tide for a dramatic 360-degree sunset view of the entire coastline.",
    tips: ["not available"],
    highlights: [
      "Stunning geological rock landmark projecting directly into active surf reefs",
      "Epic 360-degree panoramic views of the ocean coastline and Tamraght",
      "Surrounded by charming rustic seafood cafes serving grilled catches"
    ],
    emotionalBenefits: ["Scenic", "Wild", "Vibrant"],
    bestTimeToVisit: "Sunset (05:45 PM - 07:15 PM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Access",
        price: 0
      }
    ],
    discountsInfo: "Free public natural reserve.",
    includedServices: ["Public beach and cliff path access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional cost for umbrella rentals (30 MAD) or grilled fish (60 MAD)",
    address: "Tamraght Beach Road, Tamraght, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Devils+Rock+Tamraght",
    parkingInfo: "Paid dirt parking lot overseen by guardians (5 MAD fee)",
    publicTransportInfo: "collective shared taxi from center or local bus route 32",
    dressCode: "Beachwear casual; bring flat sandals with grip for the rocks",
    equipmentNeeded: ["Good sandals or shoes for the rocks", "Swimwear"],
    fitnessLevel: "Relaxed (A short, slightly steep walking path up the rock)",
    ageRestrictions: "Suitable for all ages; hold hands of small children on the rock",
    safetyNotes: "Watch your footing on wet rock edges; never swim alone in heavy swells",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Budget Backpacker",
        quote: "Perfect spot to sit with a cheap mint tea, watch the surfers, and enjoy a spectacular sunset over the water.",
        author: "Nadia F.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Taghazout Surf Lesson",
        type: "visit",
        id: "agadir-taghazout-surf"
      }
    ],
    storyTitle: "The Legend of the Rock",
    history: "Known locally as Imouran, Devil's Rock has served as a prominent coastal landmark for centuries. It marks the geographic boundary between the sandy beaches of Tamraght and the rocky surf zones of Taghazout.",
    culturalImportance: "Host of the ancient annual Imouran festival, where local communities gathered to celebrate maritime traditions and Souss heritage.",
    localLegend: "Local folklore tells of a legendary maiden who cast a spell on the rock to protect the village from ocean storms and pirate ships.",
    funFact: "During very low tides, the base of the rock reveals small natural tidal pools teeming with sea anemones and tiny crabs.",
    officialWebsite: "https://www.visitmorocco.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Can you climb to the top of the rock?",
        a: "Yes, there is a small rugged foot path leading to the top, but be careful of strong winds and wet spray near the edges."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-tifnit",
    city: "agadir",
    name: "Tifnit Fishing Village",
    neighborhood: "Tifnit",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "coastal", "nature", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 30,
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
    goodForRain: false,
    openingHours: "Open 24/7 (Best visited 09:00 AM - 06:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A picturesque, off-the-beaten-path troglodyte fishing village with simple blue-and-white houses carved into the cliffs. It features wild dunes and rugged waves crashing onto an uncrowded beach.",
    shortValueProp: "Step back in time at Morocco's last authentic cliff-carved troglodyte fishing outpost",
    googleRating: 4.4,
    reviewCount: 775,
    googleReviewCount: 520,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 180,
    viatorRating: 4.3,
    viatorReviewCount: 45,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 30,
    tip: "You can buy fresh fish directly from local fishermen on the sand and pay a small fee to have it grilled immediately at one of the rustic clifftop shacks.",
    tips: ["not available"],
    highlights: [
      "Historic blue-and-white troglodyte houses carved directly into seaside cliffs",
      "Watch local wooden rowboats struggle through dramatic shorebreaks onto the beach",
      "Surrounded by vast, pristine dunes where the Sahara meets the Atlantic ocean"
    ],
    emotionalBenefits: ["Adventurous", "Nostalgic", "Unplugged"],
    bestTimeToVisit: "Late morning around 11:00 AM to see boats arrive with fresh fish",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best on clear warm days)",
    ticketTypes: [
      {
        name: "Free Village Access",
        price: 0
      }
    ],
    discountsInfo: "Free public access.",
    includedServices: ["Public beach access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None; bring cash (MAD) for any fish purchases (no card accepted)",
    address: "Coastal Cliff Road, Tifnit Village, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tifnit+Beach",
    parkingInfo: "Secure dirt parking lot near the village entrance (5 MAD fee)",
    publicTransportInfo: "No direct public buses; best reached by renting a car or booking private transport",
    dressCode: "Comfortable beachwear or casual activewear",
    equipmentNeeded: ["Cash Dirhams (no ATMs nearby)", "Camera", "Sun protection"],
    fitnessLevel: "Moderate (Walking over steep dirt slopes and soft beach sand)",
    ageRestrictions: "All ages welcome; not stroller friendly",
    safetyNotes: "Wild coastline with strong rip currents; swimming is not advised for children",
    languages: ["Arabic (Darija)", "Tachelhit"],
    visitorQuotes: [
      {
        type: "Culture Seeker",
        quote: "Feels like stepping back in time. Having the fresh catch grilled over charcoal on the clifftop is unforgettable.",
        author: "Guillaume L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Souss-Massa National Park",
        type: "visit",
        id: "agadir-souss-massa-park"
      }
    ],
    storyTitle: "The Cliff Dwellers of Souss",
    history: "Tifnit is a historic troglodyte village where fishermen have carved shelters directly into the limestone cliffs for generations, maintaining an ancient way of life that predates modern coastal developments.",
    culturalImportance: "One of the last remaining examples of traditional cliffside maritime communities in southwestern Morocco, preserving rare regional heritage.",
    localLegend: "Old fishermen tell stories of hidden treasure chests buried deep within the coastal caves by ancient Atlantic navigators.",
    funFact: "The village is completely off-grid, relying on traditional fishing skills and the natural cooling properties of the cliffside caves.",
    officialWebsite: "https://www.visitmorocco.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there cell service or restaurants?",
        a: "Cell coverage is weak, and there are no standard restaurants, only tiny rustic grill shacks on the cliff edge."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-oued-souss-camel",
    city: "agadir",
    name: "Sunset Camel Ride at Oued Souss",
    neighborhood: "Bensergaou",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["authentic", "coastal", "instagrammable", "nature", "private", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 15,
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 90,
    distanceFromCenterKm: 6,
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
    goodForRain: false,
    openingHours: "Sunset treks start at 05:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A peaceful guided camel journey that winds through fragrant eucalyptus forests and scenic river banks down to the Oued Souss estuary.",
    shortValueProp: "Ride majestic camels through eucalyptus woods to see river estuary flamingos at sunset",
    googleRating: 4.6,
    reviewCount: 585,
    googleReviewCount: 280,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 140,
    viatorRating: 4.7,
    viatorReviewCount: 95,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 70,
    tip: "Bring a pair of binoculars if you enjoy nature, as the Oued Souss river mouth is a sanctuary where migratory pink flamingos gather during sunset.",
    tips: ["not available"],
    highlights: [
      "Guided camel trek through peaceful eucalyptus forests",
      "Ride along the beautiful dunes of the Souss river mouth estuary",
      "Observe wild migratory pink flamingos feeding at golden hour"
    ],
    emotionalBenefits: ["Serene", "Scenic", "Memorable"],
    bestTimeToVisit: "Golden hour (05:15 PM - 06:45 PM)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Flamingos most visible autumn/winter)",
    ticketTypes: [
      {
        name: "90-Minute Camel Ride",
        price: 150
      }
    ],
    discountsInfo: "Child rates are half price when sharing a camel with parents.",
    includedServices: ["Guided camel trek", "Traditional mint tea at the ranch after the ride"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minor tip for the camel handler is customary (20-50 MAD)",
    address: "Avenue Oued Souss, Bensergaou, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oued+Souss+Agadir",
    parkingInfo: "Secure free parking lot at the ranch headquarters",
    publicTransportInfo: "Best reached by taking a short petit taxi from the main beach area (approx. 20 MAD)",
    dressCode: "Long comfortable trousers to prevent skin chafing from camel saddles",
    equipmentNeeded: ["Long pants (highly recommended for camel riding)", "Camera"],
    fitnessLevel: "Relaxed (Easy guided riding; handlers hold the reins)",
    ageRestrictions: "All ages welcome; toddlers ride safely with parents",
    safetyNotes: "Gentle, heavily trained camels; always hold on to the metal handle when boarding",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Romantic Couple",
        quote: "Riding through the forest and seeing the pink flamingos at the river mouth as the sun set was pure magic.",
        author: "Isabella V.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Golf du Soleil",
        type: "visit",
        id: "agadir-golf-soleil"
      }
    ],
    storyTitle: "The Estuary Pathways",
    history: "Camel caravans have crossed the Souss river valley for hundreds of years. This sunset trail preserves the historical transport methods, guiding visitors through the natural boundary of the Souss-Massa wetlands.",
    culturalImportance: "Supports traditional local camel handling and agricultural communities, keeping regional heritage active in modern tourism.",
    localLegend: "Local guides say that camels can sense the ocean's shift before the tide turns, navigating the riverbanks with ancient wisdom.",
    funFact: "The eucalyptus forest was planted in the 20th century to stabilize the sand dunes around Agadir and protect the city from Atlantic winds.",
    officialWebsite: "https://www.agadir-ranch.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is this suitable for children?",
        a: "Yes, children can ride safely behind a guide or together with their parents on the double saddles."
      }
    ],
    contactPhone: "+212 661-556677",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-vallee-des-oiseaux",
    city: "agadir",
    name: "Vallée des Oiseaux",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "family"],
    tags: ["cultural-tour", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 60,
    distanceFromCenterKm: 0.9,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    openingHours: "09:00 AM - 06:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A peaceful public park and small urban zoo tucked into a dry riverbed in the heart of the city. It features a walk-through aviary filled with colorful exotic birds, small animal enclosures, and lush tropical gardens with waterfalls and banana trees.",
    shortValueProp: "A hidden urban oasis with exotic birds, tropical gardens, and family-friendly animal encounters",
    googleRating: 4.3,
    reviewCount: 800,
    googleReviewCount: 480,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 210,
    viatorRating: 4,
    viatorReviewCount: 65,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 45,
    tip: "Go early in the morning when birds are most active and the park feels cooler and quieter. Bring a few coins for optional bird feed.",
    tips: ["not available"],
    highlights: [
      "Walk-through aviary with parrots, peacocks, flamingos and ibises",
      "Small enclosures for Barbary sheep, goats and other animals",
      "Lush banana trees, bougainvillea and a soothing man-made waterfall"
    ],
    emotionalBenefits: ["Peaceful", "Educational", "Relaxed"],
    bestTimeToVisit: "Morning (09:00 AM - 11:00 AM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Adult Entry",
        price: 10
      },
      {
        name: "Child (under 12)",
        price: 5
      }
    ],
    discountsInfo: "Free entry for children under 5 years old.",
    includedServices: ["Full access to aviary, gardens and animal areas"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional small coins for feeding birds or buying snacks.",
    address: "Vallée des Oiseaux, Avenue du 20 Août, Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vall%C3%A9e+des+Oiseaux+Agadir",
    parkingInfo: "Street parking available nearby (approx. 5 MAD/hour)",
    publicTransportInfo: "Easily walkable from the beach promenade and Talborjt neighborhood.",
    dressCode: "Casual comfortable clothing and flat shoes",
    equipmentNeeded: ["Camera or smartphone", "Sunscreen"],
    fitnessLevel: "Relaxed (Completely flat paved and dirt paths)",
    ageRestrictions: "Suitable for all ages; stroller-friendly",
    safetyNotes: "Very safe and family-oriented park with staff present.",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Family Holiday",
        quote: "Perfect little spot for kids to see birds and animals up close. Quiet and beautiful gardens.",
        author: "Sophie M. from France",
        rating: 5
      },
      {
        type: "Solo Traveler",
        quote: "A calm escape from the beach crowds. Loved watching the peacocks and the waterfall.",
        author: "James K.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Grande Mosquée Mohammed V",
        type: "visit",
        id: "agadir-grande-mosquee"
      },
      {
        name: "Jardin d'Olhão",
        type: "visit",
        id: "agadir-jardin-olhao"
      }
    ],
    storyTitle: "The City’s Hidden Bird Sanctuary",
    history: "Built as a public green space in the post-earthquake redevelopment of Agadir, Vallée des Oiseaux serves as an urban refuge showcasing local and exotic wildlife in a lush tropical setting.",
    culturalImportance: "Acts as an accessible educational hub for local families and schools, promoting appreciation for Morocco's biodiversity and nature in the city.",
    localLegend: "Locals say that the peacocks here are descendants of birds brought from the royal gardens decades ago.",
    funFact: "The park features a small artificial waterfall and tropical plants like banana trees that thrive in the sheltered riverbed.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the park free?",
        a: "No, there is a small entry fee of about 10 MAD for adults. Children are discounted."
      },
      {
        q: "Are the animals in cages?",
        a: "Most birds are in a large open aviary where you can walk among them. Other animals are in small safe enclosures."
      }
    ],
    contactPhone: "",
  }
];
