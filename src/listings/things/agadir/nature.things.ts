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
 * [AGADIR] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/agadir/index.ts
 *
 * DATA: real collected listings (never AI-generated). Operational arrays
 * populated with verified field data matching canonical bible allowed tokens.
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
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "adventure"],
    vibeTags: ["scenic", "iconic"],
    tags: ["coastal", "mountain", "modern", "photo-spot", "sunset-view", "walk-in"],
    badges: ["must-see", "panoramic-view"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 12,
    pricePerPerson: 120,
    entryPrice: 120,
    durationMinutes: 20,
    distanceFromCenterKm: 1.5,
    transportMode: "transit",
    transportModes: ["cable-car", "taxi", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "level_entry_doorway", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 08:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "20:30" },
      { dayOfWeek: 1, open: "09:00", close: "20:30" },
      { dayOfWeek: 2, open: "09:00", close: "20:30" },
      { dayOfWeek: 3, open: "09:00", close: "20:30" },
      { dayOfWeek: 4, open: "09:00", close: "20:30" },
      { dayOfWeek: 5, open: "09:00", close: "20:30" },
      { dayOfWeek: 6, open: "09:00", close: "20:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["parking", "ticket_booth", "panoramic_viewpoint", "cafe", "restrooms"],
    restrictions: ["No smoking in cabins", "Large bulky luggage not permitted in standard cabins"],
    healthContraindications: ["Severe acrophobia or extreme vertigo"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "Morocco's premier urban cable car system, connecting the Tildi bridge base station to the ancient hilltop ruins of Agadir Oufella in a scenic 6-minute aerial ride overlooking the Atlantic harbor.",
    shortValueProp: "Fly over Agadir on a state-of-the-art panoramic cable car",
    images: [],
    googlePlaceId: "ChIJRz_4s-63sw0RnZtWj8Z-y08",
    googleRating: 4.4,
    reviewCount: 6769,
    googleReviewCount: 4359,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 1550,
    viatorRating: 4.4,
    viatorReviewCount: 480,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 380,
    badge: "popular",
    tip: "Choose a one-way ticket up to enjoy sunset views over the Atlantic, then stroll down the historical walking trail at dusk.",
    tips: [
      "Purchase tickets directly at the base terminal electronic kiosks to bypass lines.",
      "Cabins slow down to a crawl at the platform, allowing easy roll-on access for wheelchairs and strollers."
    ],
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
      { name: "Adult Round Trip", price: 120, currency: "MAD" },
      { name: "Child Round Trip", price: 80, currency: "MAD" },
      { name: "Adult One-Way", price: 80, currency: "MAD" }
    ],
    discountsInfo: "Discounts available for registered Moroccan residents and school groups.",
    includedServices: ["Cable car cabin transit", "Station security and platform boarding assistance"],
    excludedServices: ["Entry to Kasbah interior heritage exhibition halls", "Refreshments"],
    hiddenCostsInfo: "None; standard tickets cover full cabin flight",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified",
        description: "Built by Doppelmayr with rigorous European cable transit safety standards and automatic wind monitoring.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Regulated",
        description: "Electronic ticketing system with fixed official prices posted visibly at both terminal counters.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Price",
        description: "120 MAD adult return; no hidden boarding fees or baggage surcharges for standard day bags.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Modern",
        description: "Modern municipal transport initiative restoring easy physical connectivity to historic Agadir Oufella.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        description: "Completely automated level boarding; requires zero physical climbing to conquer the 236-meter hilltop.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Base Station Tildi Bridge, Talborjt, Agadir 80000",
    coordinates: { lat: 30.4284, lng: -9.6105 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Telepherique+Agadir",
    parkingInfo: "Dedicated paved parking lot at the base station (5 MAD fee)",
    publicTransportInfo: "Petit taxis from the beach zone take 5 minutes (approx. 15 MAD)",
    dressCode: "Casual; hold on to hats and loose items when boarding",
    equipmentNeeded: ["Camera or smartphone", "Sunglasses"],
    fitnessLevel: "Relaxed (Fully automated boarding)",
    ageRestrictions: "All ages welcome; toddlers must be held by an adult",
    safetyNotes: "Double-locked magnetic doors with automatic safety sensor mechanisms",
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
    history: "Opened in 2022, this modern aerial tramway forms part of Agadir's urban development plan, re-establishing high-capacity transport to the hilltop ruined in the 1960 earthquake.",
    culturalImportance: "It bridges the historical gap between the modern rebuilt grid of Agadir and its original Saadian defensive acropolis.",
    localLegend: "Locals describe the illuminated blue cabins at night as floating blue fireflies guarding the mountain slope.",
    funFact: "Each cabin is painted in a distinctive shade of royal ocean blue, reflecting Agadir's Atlantic identity.",
    officialWebsite: "https://www.danialand.ma",
    ticketWebsite: "https://www.danialand.ma/tickets",
    faq: [
      {
        q: "Is it wheelchair accessible?",
        a: "Yes, cabins are designed with wide sliding doors to easily accommodate wheelchairs and baby strollers."
      }
    ],
    contactPhone: "+212 528-282828"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-crocoparc",
    city: "agadir",
    name: "Crocoparc Agadir",
    neighborhood: "Tikiouine",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "family", "wildlife"],
    vibeTags: ["botanical", "lush", "scenic"],
    tags: ["nature", "wildlife-encounter", "nature-walk", "family", "walk-in"],
    badges: ["family-friendly", "educational", "green-oasis"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 10,
    pricePerPerson: 80,
    entryPrice: 80,
    durationMinutes: 150,
    distanceFromCenterKm: 12,
    transportMode: "taxi",
    transportModes: ["bus", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "ground_floor_access", "shaded_benches", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
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
    openingHours: "10:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "19:00" },
      { dayOfWeek: 1, open: "10:00", close: "19:00" },
      { dayOfWeek: 2, open: "10:00", close: "19:00" },
      { dayOfWeek: 3, open: "10:00", close: "19:00" },
      { dayOfWeek: 4, open: "10:00", close: "19:00" },
      { dayOfWeek: 5, open: "10:00", close: "19:00" },
      { dayOfWeek: 6, open: "10:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["parking", "ticket_booth", "gift_shop", "cafe", "restrooms", "shaded_benches", "walking_paths", "children_playground"],
    restrictions: ["Do not feed the animals", "Do not cross protective wooden security barriers", "No pets allowed"],
    healthContraindications: ["None; gentle walking on shaded paved ramps"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A crocodile conservation sanctuary and world-class botanical garden home to over 300 Nile crocodiles, giant tortoises, and green iguanas among exotic cacti and water lilies.",
    shortValueProp: "Explore Morocco's premier crocodile conservation reserve and botanical sanctuary",
    images: [],
    googlePlaceId: "ChIJ_f9BwPazsw0R2p4b0E0o4lY",
    googleRating: 4.8,
    reviewCount: 2951,
    googleReviewCount: 1501,
    tripadvisorRating: 5,
    tripadvisorReviewCount: 820,
    viatorRating: 4.8,
    viatorReviewCount: 350,
    getyourguideRating: 4.7,
    getyourguideReviewCount: 280,
    badge: "top-pick",
    tip: "Plan your visit to coincide with the scheduled crocodile feeding sessions when the reptiles gather along the viewing platforms.",
    tips: [
      "Feeding times are generally around 12:00 PM and 03:00 PM; check the front desk timetable on arrival.",
      "The botanical sections feature rare specimens including water lilies from Victoria amazonica."
    ],
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
      { name: "Adult Entry Ticket", price: 80, currency: "MAD" },
      { name: "Child (3-12 years)", price: 50, currency: "MAD" }
    ],
    discountsInfo: "Free for children under 3 years of age. Family packs available online.",
    includedServices: ["Access to all botanical and reptile exhibits", "Daily feeding presentations"],
    excludedServices: ["Shuttle transfer from central Agadir", "Restaurant food and drinks"],
    hiddenCostsInfo: "Optional shuttle service fee (approx. 30 MAD return) if booked via hotel kiosks",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Secure",
        description: "Double-walled reinforced barriers and elevated viewing walkways keep visitors completely isolated from animals.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Official",
        description: "Official ticket counter at main gate with clear posted pricing; verified online booking available.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fair Value",
        description: "80 MAD for adults covers both the extensive botanical gardens and the entire crocodile sanctuary.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Scientific",
        description: "Legitimate zoological conservation and educational institution collaborating with global reptile researchers.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Walk",
        description: "Wide, smoothly paved pathways with gentle slopes suitable for all fitness levels and wheelchairs.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "National Road 8, Drarga / Tikiouine corridor, Agadir 80000",
    coordinates: { lat: 30.3772, lng: -9.5009 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Crocoparc+Agadir",
    parkingInfo: "Large secure free parking lot directly outside the entrance gates",
    publicTransportInfo: "Crocoparc shuttle bus from beach zone or local bus route 5 towards Drarga",
    dressCode: "Comfortable casual clothing; flat walking shoes and sun hat recommended",
    equipmentNeeded: ["Sunscreen", "Comfortable walking shoes", "Camera"],
    fitnessLevel: "Moderate (Gentle walking over paved pathways)",
    ageRestrictions: "Perfect for all ages; heavily stroller accessible",
    safetyNotes: "Keep children from climbing onto the wooden perimeter guard rails",
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
    history: "Nile crocodiles thrived across southern Morocco until overhunting and damming led to regional extinction in the early 20th century. Crocoparc was founded in 2015 to reintroduce the species for conservation education.",
    culturalImportance: "Provides local school children with essential ecological education, boosting local biodiversity and environmental awareness.",
    localLegend: "Ancient travelers in the Souss basin claimed that desert springs guarded by reptiles never dried up during summer droughts.",
    funFact: "The giant metal crocodile mouth that serves as the park entrance is over 4 meters wide and is a favorite for family photos.",
    officialWebsite: "https://www.crocoparc.com",
    ticketWebsite: "https://www.crocoparc.com/booking",
    faq: [
      {
        q: "When is the best time to see crocodile feeding?",
        a: "Feeding sessions are usually held mid-day around 2:00 PM when the crocodiles are most active in the sun."
      }
    ],
    contactPhone: "+212 528-297070"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-beach-main",
    city: "agadir",
    name: "Agadir Beach",
    neighborhood: "Secteur Balnéaire",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "relaxation"],
    vibeTags: ["vibrant", "scenic", "tranquil"],
    tags: ["atlantic", "coastal", "instagrammable", "nature", "relaxed", "sunset-view", "walk-in"],
    badges: ["must-see", "budget-friendly", "sunset-spot"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 120,
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
    accessibilityFeatures: ["step_free_paved_paths", "wide_flat_walkways", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 4,
      noiseLevel: 3,
      scamRisk: 2,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Lifeguards active 08:00 AM - 06:00 PM in summer)",
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
    amenities: ["street_parking", "food_stalls", "cafe", "walking_paths", "public_toilets_nearby"],
    restrictions: ["No motorized quad bikes on the pedestrian sand strip", "Alcohol consumption in public areas is restricted"],
    healthContraindications: ["Sunstroke risk during peak midsummer midday; stay hydrated"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A wide, crescent-shaped golden sand beach spanning 9 kilometers along the Atlantic coast, protected by natural bay topography and fronted by a palm-lined promenade.",
    shortValueProp: "9 kilometers of sheltered golden sands and vibrant seaside life",
    images: [],
    googlePlaceId: "ChIJ8yB9qPW3sw0R-qU9uWv44Z0",
    googleRating: 4.5,
    reviewCount: 21100,
    googleReviewCount: 12450,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 6500,
    viatorRating: 4.6,
    viatorReviewCount: 1200,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 950,
    badge: "essential",
    tip: "Walk past the busy central resort strip toward the northern sector near the marina for cleaner sand and calmer swimming conditions.",
    tips: [
      "Beach loungers and umbrellas rent for 30-50 MAD per day; agree on the price before settling in.",
      "Early mornings (07:00 AM - 09:00 AM) are peaceful and ideal for seaside running."
    ],
    highlights: [
      "9 kilometers of wide golden sand beach sheltered from strong ocean swells",
      "Paved pedestrian beach promenade lined with local cafes and restaurants",
      "Gentle bay waters suited for family paddling, beach football, and walking"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Social"],
    bestTimeToVisit: "Morning for quiet walks, or late afternoon for sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best for swimming June to October)",
    ticketTypes: [
      { name: "Free Public Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "No fees required for beach access.",
    includedServices: ["Public beach access", "Municipal lifeguard monitoring zones during summer"],
    excludedServices: ["Parasols and sun lounger rentals", "Water sports equipment"],
    hiddenCostsInfo: "Sun lounger rentals run 30-50 MAD; negotiate gently before sitting",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Patrolled",
        description: "Regular tourist police patrols along the promenade; seasonal lifeguards cover designated swimming zones.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Watch Touts",
        description: "Camel ride touts and camel vendors operate on the sand; politely decline with a firm 'La, Shukran'.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Access",
        description: "The sand and promenade are 100% free; private beach club concessions have clear day-pass rates.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Life",
        description: "A genuine hub of Moroccan family life at dusk, where locals gather for afternoon tea, strolls, and pickup soccer.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Flat Walk",
        description: "The promenade is entirely paved, flat, and step-free for miles, perfect for prams and gentle strolls.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Boulevard du 20 Août, Secteur Balnéaire, Agadir 80000",
    coordinates: { lat: 30.4168, lng: -9.6050 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plage+d%27Agadir",
    parkingInfo: "Paid street parking along Boulevard du 20 Août (5-10 MAD)",
    publicTransportInfo: "Easily walkable from all major central beach resorts and hotels",
    dressCode: "Swimwear is normal on the sand; cover up shoulders when entering promenade cafes",
    equipmentNeeded: ["Beach towel", "Swimwear", "Sunscreen"],
    fitnessLevel: "Relaxed (Flat sandy terrain and paved walkway)",
    ageRestrictions: "All ages welcome; stroller friendly promenade",
    safetyNotes: "Observe flag warnings for currents; green indicates safe swimming",
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
    history: "Sheltered by the Cape Ghir headland and the High Atlas spur, Agadir's natural bay has offered secure maritime anchorage since Portuguese mariners built Santa Cruz do Cabo de Gué in 1505.",
    culturalImportance: "The promenade represents the democratic social heart of post-earthquake Agadir, uniting holidaymakers and local citizens.",
    localLegend: "Souss fishermen say that the early morning coastal fog brings life-giving cool moisture to the coastal argan groves.",
    funFact: "Because the bay faces slightly south of west and is shielded by the mountain, wave heights here are significantly calmer than the open surf coast of Taghazout.",
    officialWebsite: "https://www.agadir.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe to swim?",
        a: "Yes, the bay is sheltered and relatively calm, but always respect posted lifeguard flags."
      }
    ],
    contactPhone: "+212 528-840040"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-marina",
    city: "agadir",
    name: "Marina d'Agadir",
    neighborhood: "Marina Agadir",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury-curator", "relaxation"],
    vibeTags: ["scenic", "elegant"],
    tags: ["coastal", "instagrammable", "relaxed", "shopping", "sunset-view", "waterfront"],
    badges: ["panoramic-view", "shopping-hub"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "step_free_interior_boardwalk", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Shops and dining 10:00 AM - 11:00 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "00:00", close: "23:59" },
      { dayOfWeek: 1, open: "00:00", close: "23:59" },
      { dayOfWeek: 2, open: "00:00", close: "23:59" },
      { dayOfWeek: 3, open: "00:00", close: "23:59" },
      { dayOfWeek: 4, open: "00:00", close: "23:59" },
      { dayOfWeek: 5, open: "00:00", close: "23:59" },
      { dayOfWeek: 6, open: "00:00", close: "23:59" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["parking", "cafe", "atm_nearby", "restrooms", "wooden_boardwalk", "panoramic_viewpoint"],
    restrictions: ["Private pontoon moorings restricted to yacht owners and authorized crew"],
    healthContraindications: ["None; completely flat paved promenades"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A modern leisure port complex lined with luxury yachts, open-air cafes, international apparel boutiques, and seaside restaurants facing the tranquil marina basin.",
    shortValueProp: "Unwind at Agadir's modern maritime hub of dining, shopping, and yachts",
    images: [],
    googlePlaceId: "ChIJ7_z_k-y3sw0RFw6O-f0a9oA",
    googleRating: 4.2,
    reviewCount: 5490,
    googleReviewCount: 3500,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 1450,
    viatorRating: 4.1,
    viatorReviewCount: 320,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 220,
    badge: "popular",
    tip: "Visit around 10:00 AM for calm water reflections of the mountain and quiet coffee terraces, or after sunset for harbor lights.",
    tips: [
      "Catamaran sailing and jet ski tours can be booked directly at the water sports desks along the inner basin.",
      "The marina provides an unobstructed vantage point looking up at the illuminated Agadir Oufella inscription at night."
    ],
    highlights: [
      "Stroll the elegant waterfront dock lined with luxury sailboats and yachts",
      "Shop at fashion boutiques and relax at fashionable open-air cafes",
      "Direct sightlines up to the historic Kasbah hill ramparts"
    ],
    emotionalBenefits: ["Sophisticated", "Scenic", "Vibrant"],
    bestTimeToVisit: "Morning for calm waters or evening for coastal dining",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Public Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public access to walkways and quays.",
    includedServices: ["Public dockside boardwalk access"],
    excludedServices: ["Marina berth services", "Boat excursions"],
    hiddenCostsInfo: "Cafe and restaurant prices carry international resort premiums",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Guarded",
        description: "24/7 dedicated private security personnel patrol the boardwalks and boat pontoons; exceptionally safe.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Reputable",
        description: "Established storefront shops and branded restaurants with standard menus and electronic billing.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Resort Rates",
        description: "Coffee and dining are approximately 25-40% higher than in central Talborjt or local city quarters.",
        tone: "caution",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Cosmopolitan",
        description: "Modern architectural development designed for leisure and yachting rather than traditional craft.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        description: "Entirely level boardwalk paving with no steps required to access the main cafes and stores.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Port de Plaisance, Marina Agadir, Agadir 80000",
    coordinates: { lat: 30.4218, lng: -9.6173 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Marina+d%27Agadir",
    parkingInfo: "Paid underground and surface parking lot at the marina entrance (10 MAD)",
    publicTransportInfo: "Easily reachable on foot from the northern end of Agadir Beach or via petit taxi",
    dressCode: "Smart-casual clothing is popular for evening dining",
    equipmentNeeded: ["Sunglasses", "Camera"],
    fitnessLevel: "Relaxed (Perfectly flat paved harbor docks)",
    ageRestrictions: "All ages welcome; stroller and wheelchair friendly",
    safetyNotes: "Supervise young children near open water edges without railings along the quays",
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
    history: "Inaugurated in the mid-2000s, Marina Agadir modernized the city's coastal tourism infrastructure, providing deep-water berths for transatlantic yachts.",
    culturalImportance: "Reflects Morocco's contemporary maritime orientation, bridging traditional fishing heritage with international marine tourism.",
    localLegend: "Local sailors maintain that the calm waters inside this harbor basin are sheltered from northern winter swells by the ancient Kasbah rock.",
    funFact: "Many European sailors use Agadir Marina as their final provisioning harbor before embarking on trade-wind crossings to the Canaries and the Caribbean.",
    officialWebsite: "https://www.marinaagadir.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I book boat tours from here?",
        a: "Yes, several authorized operators run catamaran outings, dolphin-watching cruises, and fishing trips from the marina docks."
      }
    ],
    contactPhone: "+212 528-844444"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-souss-massa-park",
    city: "agadir",
    name: "Souss-Massa National Park",
    neighborhood: "Bensergao",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["wildlife", "photographer", "nature"],
    vibeTags: ["serene", "tranquil", "scenic"],
    tags: ["birdwatching", "wildlife-encounter", "nature", "coastal", "off-the-beaten-path", "sunset-view"],
    badges: ["quiet-retreat", "peaceful-escape", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 15,
    pricePerPerson: 15,
    entryPrice: 15,
    durationMinutes: 240,
    distanceFromCenterKm: 35,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "partial_wheelchair_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "18:00" },
      { dayOfWeek: 1, open: "08:00", close: "18:00" },
      { dayOfWeek: 2, open: "08:00", close: "18:00" },
      { dayOfWeek: 3, open: "08:00", close: "18:00" },
      { dayOfWeek: 4, open: "08:00", close: "18:00" },
      { dayOfWeek: 5, open: "08:00", close: "18:00" },
      { dayOfWeek: 6, open: "08:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "information_desk", "walking_paths", "panoramic_viewpoint"],
    restrictions: ["Stay strictly on designated trails to safeguard endangered ground-nesting birds", "Drones strictly prohibited without royal reserve permits"],
    healthContraindications: ["Unshaded coastal walking; sun protection essential"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A 33,800-hectare coastal nature reserve encompassing sandy estuaries, salt marshes, and cliffs that host over 95% of the wild Moroccan breeding colonies of the critically endangered Northern Bald Ibis.",
    shortValueProp: "Discover wild dunes and endangered bird habitats at Agadir's legendary estuary reserve",
    images: [],
    googlePlaceId: "ChIJQwn5M6-2sw0RW-dO8hP28qU",
    googleRating: 4.6,
    reviewCount: 1705,
    googleReviewCount: 995,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 450,
    viatorRating: 4.6,
    viatorReviewCount: 150,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 110,
    badge: "top-pick",
    tip: "Hire an authorized local nature guide at the Sidi R'bat or Massa visitor kiosk; their spotting scopes make locating camouflaged ibises and flamingos effortless.",
    tips: [
      "Bring telephoto lenses or 10x42 binoculars; birds keep a 50-meter distance from the trails.",
      "Early morning (08:30 AM - 10:30 AM) offers optimal lighting and maximum bird feeding activity."
    ],
    highlights: [
      "Spot the critically endangered Northern Bald Ibis along ocean clifftops",
      "Walk the vast river estuary to photograph wild pink flamingos and storks",
      "Explore wild golden coastal dunes crashing straight into Atlantic rollers"
    ],
    emotionalBenefits: ["Adventurous", "Wild", "Scenic"],
    bestTimeToVisit: "Early morning around 08:30 AM for active bird activity",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Peak bird migratory sightings October to March)",
    ticketTypes: [
      { name: "Standard Park Access", price: 15, currency: "MAD" },
      { name: "National Citizens", price: 5, currency: "MAD" }
    ],
    discountsInfo: "Reduced entry rates for Moroccan students and scientific researchers.",
    includedServices: ["Reserve trail access", "Visitor center informational boards"],
    excludedServices: ["Local wildlife guide services (recommended 150 MAD per group)", "Vehicle transfers"],
    hiddenCostsInfo: "Official local guides charge roughly 100-150 MAD per party for a 2-hour guided trail",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Protected",
        description: "Official national park staffed by water and forestry rangers; marked trails with zero dangerous wildlife.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Hire Official",
        description: "Hire only badge-wearing park association guides at the visitor office rather than unlicensed roadside spotters.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Minimal Fee",
        description: "National park entry is just 15 MAD; guide fees are modest and paid directly upon tour completion.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Pristine",
        description: "A genuine Ramsar wetland reserve critical to global bird conservation; zero commercialized tourist traps.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Sandy Hike",
        description: "Involves 3-5 km of walking over soft coastal sand and packed dirt trails; wear supportive trail sneakers.",
        tone: "caution",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Route de Sidi R'bat, Massa Valley, Agadir 80000",
    coordinates: { lat: 30.0885, lng: -9.6749 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Souss-Massa+National+Park",
    parkingInfo: "Secure dirt parking lot at the visitor station (10 MAD)",
    publicTransportInfo: "Best reached via hired Grand Taxi from Bensergao or organized day excursion",
    dressCode: "Outdoor activewear; sturdy walking shoes, sun hat, and neutral colored clothing",
    equipmentNeeded: ["Binoculars", "Sun hat", "Sturdy walking shoes", "At least 1.5L drinking water"],
    fitnessLevel: "Moderate (3-5 km of walking over soft sand and dirt tracks)",
    ageRestrictions: "Suitable for all ages capable of trail walking; not stroller accessible",
    safetyNotes: "Stay clear of cliff edges; oceanic cliff faces can experience crumbly soil erosion",
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
    history: "Established in 1991, Souss-Massa National Park was created to safeguard the last remaining viable wild breeding colonies of the Northern Bald Ibis (Geronticus eremita) on planet Earth.",
    culturalImportance: "Integrates traditional Berber farming and artisanal fishing communities into the wetland's sustainable conservation charter.",
    localLegend: "Local Berber lore tells of the 'Clifftop Hermit Bird' whose morning calls remind fishermen when tides are safe.",
    funFact: "Over 95% of the truly wild breeding population of the Northern Bald Ibis lives and reproduces within this park's ocean bluffs.",
    officialWebsite: "https://www.parcsnationauxdumaroc.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a 4x4 to visit?",
        a: "The main visitor center and bird observatory trailheads can be accessed by regular taxi; remote coastal dune trails require an all-wheel-drive vehicle."
      }
    ],
    contactPhone: "+212 528-820505"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-paradise-valley",
    city: "agadir",
    name: "Paradise Valley",
    neighborhood: "Anza Plage",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nature"],
    vibeTags: ["scenic", "lush", "energetic"],
    tags: ["active", "hiking-trek", "mountain", "nature", "palm-oasis", "off-the-beaten-path", "spring-water"],
    badges: ["must-see", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 32,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 4,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 4,
      kidSuitable: false
    },
    openingHours: "Open 24/7 (Daylight visits recommended: 08:00 AM - 05:00 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "17:00" },
      { dayOfWeek: 1, open: "08:00", close: "17:00" },
      { dayOfWeek: 2, open: "08:00", close: "17:00" },
      { dayOfWeek: 3, open: "08:00", close: "17:00" },
      { dayOfWeek: 4, open: "08:00", close: "17:00" },
      { dayOfWeek: 5, open: "08:00", close: "17:00" },
      { dayOfWeek: 6, open: "08:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "food_stalls", "walking_paths", "panoramic_viewpoint"],
    restrictions: ["Cliff jumping from high ledges is dangerous due to submerged rock boulders", "Take all personal rubbish back out"],
    healthContraindications: ["Not suitable for travelers with reduced mobility, cardiac issues, or bad knees"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A palm-fringed mountain gorge in the High Atlas foothills featuring limestone river canyons, rock pools, and natural freshwater swimming holes along the historic Honey Route.",
    shortValueProp: "Hike deep canyons to swim in the cool, emerald pools of the Honey Route",
    images: [],
    googlePlaceId: "ChIJbSknfTf-sw0R4U3qB0aA13A",
    googleRating: 4.6,
    reviewCount: 2431,
    googleReviewCount: 1291,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 650,
    viatorRating: 4.6,
    viatorReviewCount: 280,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 210,
    badge: "essential",
    tip: "Wear sturdy trainers or strapped water shoes for the 25-minute hike down from the road; flip-flops cause slips on polished limestone.",
    tips: [
      "Check recent seasonal rainfall before departing; during dry summers water levels in upper pools can be low.",
      "Bring small change (MAD) for parking attendants (10 MAD) and fresh orange juice or tagines at riverbed cafes."
    ],
    highlights: [
      "Stunning deep canyon walks surrounded by native argan and date palms",
      "Plunge into refreshing emerald-green natural freshwater mountain pools",
      "Relax at rustic riverside cafes with plastic chairs set directly inside shallow streams"
    ],
    emotionalBenefits: ["Reinvigorating", "Adventurous", "Scenic"],
    bestTimeToVisit: "Morning around 09:30 AM before tour minivans arrive from Agadir",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best from November through May when mountain streams flow freely",
    ticketTypes: [
      { name: "Free Natural Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open natural canyon; no admission tickets required.",
    includedServices: ["Public access to canyon pools and hiking trails"],
    excludedServices: ["Parking guardian fee (10 MAD)", "Food and drinks"],
    hiddenCostsInfo: "Parking guardian charges 10 MAD; guide offers along trail charge roughly 50-100 MAD",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Slippery",
        description: "Polished river rocks are slick when wet; never jump into pools without verifying the depth from water level.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Self-Guided",
        description: "Unofficial self-appointed trail guides at the parking lot will claim you must hire them; trail is straightforward.",
        tone: "caution",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Gorge",
        description: "Natural parkland has zero entrance fees; pay only the nominal 10 MAD parking fee to the booth guardian.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Scenic Oasis",
        description: "A genuine High Atlas palm canyon, though weekends in midsummer see heavy crowds of day-trippers.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Uneven Hike",
        description: "Requires a 25-minute descent and ascent over steep, irregular stone steps and river boulders.",
        tone: "caution",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Imouzzer Ida Outanane Road, foothills of Atlas (Gateway via Anza Plage), Agadir 80000",
    coordinates: { lat: 30.5879, lng: -9.5319 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paradise+Valley+Agadir",
    parkingInfo: "Unpaved roadside parking area supervised by guardians (10 MAD cash)",
    publicTransportInfo: "Shared Grand Taxi from Agadir to Aourir, then local taxi towards Imouzzer; rental car or tour bus easiest",
    dressCode: "Outdoor trekking clothes with swimwear underneath; athletic footwear with good tread",
    equipmentNeeded: ["Swimwear", "Water shoes or grippy sneakers", "Sunscreen", "Cash Dirhams"],
    fitnessLevel: "Active (Involves a 25-35 minute hike over uneven, rocky gorge terrain)",
    ageRestrictions: "Not recommended for toddlers or travelers unable to navigate steep rocky trails",
    safetyNotes: "Flash floods can occur during heavy mountain rainfall; heed local weather warnings",
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
    history: "In the late 1960s, European travelers following the overland trail popularized this valley for its serene, bohemian swimming spots and fragrant mountain air.",
    culturalImportance: "Forms part of the Ida Outanane Berber territory, renowned across Morocco for mountain thyme, lavender, and artisanal honey production.",
    localLegend: "Locals recount that mountain nomads believed the clear waters had healing properties that restored weary desert travelers.",
    funFact: "Music legend Jimi Hendrix famously spent time relaxing by these exact freshwater pools during his travels through southern Morocco.",
    officialWebsite: "https://www.visitmorocco.com/en/travel-destination/agadir/paradise-valley",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there water in the pools year-round?",
        a: "Water levels fluctuate with rainfall; they are fullest from late autumn through spring. In late summer some lower pools may recede."
      }
    ],
    contactPhone: "+212 528-840040"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-anza-dinosaur-footprints",
    city: "agadir",
    name: "Dinosaur Footprints at Anza Beach",
    neighborhood: "Anza Plage",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "history"],
    vibeTags: ["historical", "scenic"],
    tags: ["authentic", "coastal", "geological-wonder", "nature", "off-the-beaten-path", "sunset-view", "walk-in"],
    badges: ["hidden-gem", "educational", "budget-friendly"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 30,
    distanceFromCenterKm: 8,
    transportMode: "taxi",
    transportModes: ["bus", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Visible only during low tide (Consult local ocean tide charts daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "06:00", close: "19:00" },
      { dayOfWeek: 1, open: "06:00", close: "19:00" },
      { dayOfWeek: 2, open: "06:00", close: "19:00" },
      { dayOfWeek: 3, open: "06:00", close: "19:00" },
      { dayOfWeek: 4, open: "06:00", close: "19:00" },
      { dayOfWeek: 5, open: "06:00", close: "19:00" },
      { dayOfWeek: 6, open: "06:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["street_parking", "panoramic_viewpoint"],
    restrictions: ["Do not attempt to chisel, hammer, or damage the fossilized bedrock", "Visits must strictly follow low tide"],
    healthContraindications: ["Slippery seaweed-covered rocks; caution needed for elderly or unsteady walkers"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A coastal paleontological site where more than 300 fossilized dinosaur footprints dating back 85 million years (Late Cretaceous) are preserved on an intertidal rocky ocean platform.",
    shortValueProp: "Walk beside prehistoric Cretaceous fossil footprints preserved on a coastal rock ledge",
    images: [],
    googlePlaceId: "ChIJF889c-a2sw0R2i4hN5p2u8E",
    googleRating: 4.2,
    reviewCount: 245,
    googleReviewCount: 150,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 60,
    viatorRating: 4,
    viatorReviewCount: 20,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 15,
    badge: "hidden-gem",
    tip: "Check the daily Agadir tide chart before setting off; the footprints are fully submerged and invisible under ocean water during high tide.",
    tips: [
      "Arrive roughly 45 minutes before peak low tide for dry rock access and best photographic lighting.",
      "Look for three-toed theropod footprints stamped deep into the grey-colored sandstone shelves."
    ],
    highlights: [
      "Over 300 fossilized dinosaur footprints preserved on a flat rocky tidal platform",
      "Observe tracks from Theropods and ancient pterosaur species",
      "Wild Atlantic coastline beside active local surfing reefs"
    ],
    emotionalBenefits: ["Awe-inspiring", "Educational", "Off-beat"],
    bestTimeToVisit: "Precisely 1 hour before lowest tide of the day",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Subject to daily Atlantic tide schedules)",
    ticketTypes: [
      { name: "Free Public Beach Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open geological site; free public access.",
    includedServices: ["Self-guided viewing on tidal rock ledge"],
    excludedServices: ["Guided paleontological tour"],
    hiddenCostsInfo: "None; free public rock shelf",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Tidal Waves",
        description: "Watch for incoming tide swells; rogue waves can sweep across the shelf as the tide changes.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Free Site",
        description: "No legitimate guides or tickets required; ignore any bystander demanding entry payments on the shore.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Zero Cost",
        description: "Completely free open-access geological formation exposed along the public coastline.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Authentic",
        description: "Scientific site cataloged and verified by Moroccan and international geological university faculties.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Slick Rocks",
        description: "Requires scrambling across uneven, algae-covered tidal rocks; shoes with strong rubber grip are mandatory.",
        tone: "caution",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Rocky Shore, Anza Beach Front, Anza Plage, Agadir 80000",
    coordinates: { lat: 30.4473, lng: -9.6576 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Anza+Dinosaur+Footprints+Agadir",
    parkingInfo: "Paid street parking along Anza Beach Promenade (5 MAD)",
    publicTransportInfo: "Easily reached by petit taxi or local bus route 12 from central Agadir (approx. 10 MAD)",
    dressCode: "Outdoor active clothing; shoes with non-slip rubber soles are essential",
    equipmentNeeded: ["Rubber-soled sneakers or hiking shoes", "Camera", "Tide schedule application"],
    fitnessLevel: "Moderate (Walking over slippery and wet rock ledges)",
    ageRestrictions: "All ages welcome; keep small children away from breaking wave zones",
    safetyNotes: "Always keep an eye on the ocean horizon for rising water; exit rocks immediately as tide returns",
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
    history: "Uncovered in 2013 following severe Atlantic storm swells that washed away tons of obscuring coastal sand, exposing the ancient Cretaceous mudstone layers underneath.",
    culturalImportance: "A prominent national paleontological landmark celebrated by local educational associations and environmental societies in the Souss region.",
    localLegend: "Before scientific excavation, local fishermen described the indentations as hoofprints of legendary sea steeds rising from the Atlantic.",
    funFact: "This is one of the only coastal sites in North Africa where pterosaur (flying reptile) tracks have been documented alongside dinosaur footprints.",
    officialWebsite: "https://www.anza-geopark.org",
    ticketWebsite: "",
    faq: [
      {
        q: "How do I find the tracks on the rocks?",
        a: "They are located on the flat rocky slabs just north of Anza beach promenade. Look for three-toed impressions embedded in the stone."
      }
    ],
    contactPhone: "+212 528-840040"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-port",
    city: "agadir",
    name: "Le Port d'Agadir",
    neighborhood: "Marina Agadir",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["foodie", "culture", "sensory-seeker"],
    vibeTags: ["chaotic", "sensory", "vibrant"],
    tags: ["authentic", "coastal", "working-port", "local-life", "street-food", "morning", "walk-in"],
    badges: ["cultural-immersion", "foodie-paradise"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 2,
    transportMode: "taxi",
    transportModes: ["taxi", "walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 4,
      noiseLevel: 4,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open daily (Port most active 06:00 AM - 02:00 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "06:00", close: "15:00" },
      { dayOfWeek: 1, open: "06:00", close: "15:00" },
      { dayOfWeek: 2, open: "06:00", close: "15:00" },
      { dayOfWeek: 3, open: "06:00", close: "15:00" },
      { dayOfWeek: 4, open: "06:00", close: "15:00" },
      { dayOfWeek: 5, open: "06:00", close: "15:00" },
      { dayOfWeek: 6, open: "06:00", close: "15:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["street_parking", "food_stalls", "fresh_juice_bars", "atm_nearby"],
    restrictions: ["Active industrial harbor; restricted access beyond security barriers to operational commercial shipyard dry docks"],
    healthContraindications: ["Strong fish odors and wet concrete floors; watch footing"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A commercial fishing harbor where blue wooden trawlers unload catches of Atlantic sardines and squid, adjacent to lively open-air charcoal fish barbecue shacks.",
    shortValueProp: "Immerse in a bustling traditional fishing port and feast on fresh ocean sardines",
    images: [],
    googlePlaceId: "ChIJj-Zf8ua3sw0Rz3L_QWjV978",
    googleRating: 4.1,
    reviewCount: 1385,
    googleReviewCount: 850,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 380,
    viatorRating: 4.1,
    viatorReviewCount: 95,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 60,
    badge: "essential",
    tip: "Head to the fish grill stalls at the port gate around 12:30 PM; choose your mixed platter of sardines, calamari, and sole priced directly by the weight.",
    tips: [
      "Confirm the total platter price and included salads/bread before the fish goes onto the grill to prevent misunderstandings.",
      "Morning visits (07:00 AM - 09:30 AM) let you watch the wooden trawlers auctioning crates of fish right off the boats."
    ],
    highlights: [
      "Watch local blue wooden trawlers unload nets overflowing with ocean sardines",
      "Witness traditional fast-paced morning fish bidding auctions in the market hall",
      "Dine on fresh seafood grilled over hot charcoal coals right before your eyes"
    ],
    emotionalBenefits: ["Authentic", "Bustling", "Sensory"],
    bestTimeToVisit: "Morning around 08:00 AM to see boats unload, or lunchtime for grills",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Entrance", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Free public access to port perimeter and fish restaurants.",
    includedServices: ["Public access to port perimeter and outdoor grill areas"],
    excludedServices: ["Fish dining and beverages", "Private boat berths"],
    hiddenCostsInfo: "A generous grilled fish lunch platter with bread and salad costs around 50-90 MAD per person",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Working Port",
        description: "Active industrial precinct; beware of moving forklift trucks, wet docking ramps, and coiled mooring ropes.",
        tone: "caution",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Agree Price",
        description: "Confirm your chosen fish assortment and total price in MAD before taking a seat at the grill tables.",
        tone: "caution",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Bargain Eats",
        description: "Exceptional value for fresh seafood; fresh grilled sardines cost as little as 30-40 MAD per plate.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "100% Real",
        description: "Unfiltered working-class maritime life; no polished tourist facades, just authentic Atlantic fishing culture.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Wet Ground",
        description: "Harbor ground is often wet and slippery from melting ice and seawater; closed-toe rubber shoes recommended.",
        tone: "caution",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Port de Pêche, Avenue du Port, Marina Agadir sector, Agadir 80000",
    coordinates: { lat: 30.4230, lng: -9.6250 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Port+de+peche+Agadir",
    parkingInfo: "Paid street spaces around the port gate entrance (5 MAD fee)",
    publicTransportInfo: "Short petit taxi ride from Agadir Beach or Marina (approx. 10-15 MAD)",
    dressCode: "Casual everyday wear; closed-toe footwear with sturdy non-slip soles",
    equipmentNeeded: ["Closed-toe shoes with non-slip soles", "Camera", "Cash Dirhams"],
    fitnessLevel: "Moderate (Walking over wet concrete harbor docks)",
    ageRestrictions: "All ages welcome; closely supervise children around the dock edges",
    safetyNotes: "Stay alert for working forklifts and ice trucks navigating between the docks",
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
    history: "Agadir stands as Morocco's primary sardine fishing port. For generations, traditional blue wooden trawlers have operated here, fueling both regional fish markets and national canning industries.",
    culturalImportance: "Represents the gritty, hardworking backbone of Souss maritime identity, connecting coastal families to ancestral fishing routines.",
    localLegend: "Old sailors say that a captain who refuses to share fresh sardines with the harbor cats on returning to dock will find empty nets on his next voyage.",
    funFact: "Morocco is the world's leading exporter of canned sardines, and the lion's share of that catch enters through this exact port basin.",
    officialWebsite: "https://www.anp.org.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "When is the fish market active?",
        a: "Boats unload beginning at 06:00 AM, and the grill stalls operate from 11:30 AM to 03:00 PM for lunch."
      }
    ],
    contactPhone: "+212 528-842222"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-golf-soleil",
    city: "agadir",
    name: "Golf du Soleil",
    neighborhood: "Bensergao",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "relaxation"],
    vibeTags: ["tranquil", "lush", "elegant"],
    tags: ["active", "nature", "premium", "walk-in"],
    badges: ["green-oasis", "quiet-retreat"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 65,
    pricePerPerson: 750,
    entryPrice: 750,
    durationMinutes: 240,
    distanceFromCenterKm: 6.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["ground_floor_access", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: false
    },
    openingHours: "07:30 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:30", close: "19:00" },
      { dayOfWeek: 1, open: "07:30", close: "19:00" },
      { dayOfWeek: 2, open: "07:30", close: "19:00" },
      { dayOfWeek: 3, open: "07:30", close: "19:00" },
      { dayOfWeek: 4, open: "07:30", close: "19:00" },
      { dayOfWeek: 5, open: "07:30", close: "19:00" },
      { dayOfWeek: 6, open: "07:30", close: "19:00" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["parking", "restrooms", "cafe", "traditional_restaurant"],
    restrictions: ["Collared shirts and soft-spike golf shoes required on course", "Handicap card or proven golf proficiency requested for championship 18-hole tee times"],
    healthContraindications: ["Moderate physical endurance required if walking 18 holes under the sun"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A championship 36-hole resort golf course landscaped with eucalyptus groves, lakes, and coastal dunes, nestled between the Atlantic breeze and the Souss plain.",
    shortValueProp: "Play 36 holes of premium championship golf between the ocean breeze and native dunes",
    images: [],
    googlePlaceId: "ChIJN-s9v-K2sw0RLzO504n3n_I",
    googleRating: 4.4,
    reviewCount: 776,
    googleReviewCount: 466,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 210,
    viatorRating: 4.3,
    viatorReviewCount: 60,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 40,
    badge: "top-pick",
    tip: "Walking with a local caddie is thoroughly enjoyable here; their club selections and knowledge of green breaks on the Tikida course are invaluable.",
    tips: [
      "Reserve morning tee times (08:00 AM - 10:00 AM) during summer months to avoid peak afternoon temperatures.",
      "The clubhouse terrace offers panoramic views over the 18th island green."
    ],
    highlights: [
      "Superbly maintained 36-hole complex with professional practice driving academy",
      "Surrounded by eucalyptus groves, native palms, and large scenic lakes",
      "Upscale clubhouse with panoramic restaurant overlooking the final green"
    ],
    emotionalBenefits: ["Relaxed", "Focused", "Aesthetic"],
    bestTimeToVisit: "Morning around 08:30 AM before midday sun",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round (Peak golf season October to April)",
    ticketTypes: [
      { name: "18-Hole Green Fee", price: 750, currency: "MAD" },
      { name: "9-Hole Green Fee", price: 450, currency: "MAD" }
    ],
    discountsInfo: "Preferential green fee rates for partner hotel guests and golf federation members.",
    includedServices: ["Locker room and shower access", "Practice putting green access"],
    excludedServices: ["Golf club rental", "Buggy or caddie fees", "Driving range balls"],
    hiddenCostsInfo: "Electric buggies rent for approx. 350-400 MAD; caddie tips customary at 150-200 MAD",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Secure",
        description: "Gated luxury resort with security checkpoints; well-maintained turf and first-aid provisions on site.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Licensed",
        description: "Fixed rates published by the Moroccan Royal Golf Federation; payments handled via professional pro-shop desk.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Standard",
        description: "750 MAD for 18 holes is competitive with top European winter golf resorts of similar standard.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Championship",
        description: "Internationally acclaimed golf facility designed by Fernando Mueller and Gerard Courbin.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Challenging",
        description: "Generous fairways for beginners with tricky water hazards and undulating greens for low-handicap golfers.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Chemin des Dunes, Bensergao, Agadir 80000",
    coordinates: { lat: 30.3648, lng: -9.5511 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Golf+du+Soleil+Agadir",
    parkingInfo: "Large secure private parking lot at the clubhouse (Free)",
    publicTransportInfo: "Best reached by hotel shuttle or pre-booked taxi from Secteur Balnéaire (approx. 30-40 MAD)",
    dressCode: "Standard golf attire (collared shirts, tailored shorts or trousers, soft-spikes)",
    equipmentNeeded: ["Golf clubs (rentals available at pro shop)", "Golf shoes and balls"],
    fitnessLevel: "Active (Involves 3-4 hours of walking on turf if not hiring a buggy)",
    ageRestrictions: "Golf course reserved for players; junior golfers welcome with adult supervision",
    safetyNotes: "Heed golf etiquette; shout 'Fore' if a ball heads towards other players",
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
    history: "Constructed in 1999 to establish Agadir as an international winter golf haven, Golf du Soleil transformed arid dunes into a championship greenbelt.",
    culturalImportance: "A flagship property supporting sustainable sports tourism and providing caddie and greenkeeping careers to local Souss communities.",
    localLegend: "Birdwatchers say that wild Moroccan herons nest around hole 8 specifically because the artificial lakes remain calm all year.",
    funFact: "The golf resort features 36 holes split across two distinctive 18-hole layouts: the Tikida Course and the Championship Course.",
    officialWebsite: "https://www.golfdusoleil.com",
    ticketWebsite: "https://www.golfdusoleil.com/reservations",
    faq: [
      {
        q: "Can I rent clubs and a cart?",
        a: "Yes, full premium rental sets (TaylorMade / Titleist), pull trolleys, and electric buggies are readily available at the pro shop."
      }
    ],
    contactPhone: "+212 528-833333"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-devils-rock",
    city: "agadir",
    name: "Devil's Rock",
    neighborhood: "Anza Plage",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "adventure"],
    vibeTags: ["scenic", "vibrant"],
    tags: ["coastal", "instagrammable", "nature", "off-the-beaten-path", "sunset-view", "walk-in"],
    badges: ["sunset-spot", "budget-friendly"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 14,
    transportMode: "taxi",
    transportModes: ["bus", "taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Visits best during daylight and sunset)",
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
    amenities: ["street_parking", "cafe", "food_stalls", "panoramic_viewpoint"],
    restrictions: ["Do not climb onto wet spray-splashed rocks during high tide swells"],
    healthContraindications: ["Short, steep climb on uneven dirt and limestone steps"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A rocky headland known locally as Imourane that extends out into Atlantic surf reefs, revered as a prime sunset viewpoint surrounded by beach shacks.",
    shortValueProp: "Watch brave surfers and brilliant Atlantic sunsets from a legendary coastal outcrop",
    images: [],
    googlePlaceId: "ChIJb_fP7ue2sw0RbN6W3P3c1mQ",
    googleRating: 4.5,
    reviewCount: 1875,
    googleReviewCount: 1120,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 520,
    viatorRating: 4.4,
    viatorReviewCount: 140,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 95,
    badge: "popular",
    tip: "Hike up the rocky trail 30 minutes before sundown with a takeaway mint tea from the beach shacks for an unforgettable 360-degree ocean view.",
    tips: [
      "The beach flanking the south side offers calmer waters for swimming; the north side has powerful surf breaks.",
      "Local cafes at the base serve freshly brewed spiced coffee and avocado smoothies for 15-20 MAD."
    ],
    highlights: [
      "Prominent geological outcrop projecting directly into active Atlantic surf reefs",
      "Panoramic 360-degree views of the Taghazout bay coastline",
      "Surrounded by rustic seaside cafes serving mint tea and grilled sardines"
    ],
    emotionalBenefits: ["Scenic", "Wild", "Vibrant"],
    bestTimeToVisit: "Sunset (05:45 PM - 07:15 PM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Free Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open natural landmark; free public access.",
    includedServices: ["Public beach and cliff path access"],
    excludedServices: ["Umbrella rentals", "Food and beverages"],
    hiddenCostsInfo: "Parking guardian charges 5 MAD; beach umbrellas rent for 30 MAD",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Wave Warning",
        description: "Stay well back from the seaward cliff edges; Atlantic swells can throw spray unpredictably across lower ledges.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Free Spot",
        description: "Zero entrance fees; pay only the nominal 5 MAD parking fee to the vest-wearing guardian.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Inexpensive",
        description: "Tea and grilled sardines at the base shacks are reasonably priced (mint tea roughly 10-15 MAD).",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Surf Culture",
        description: "Beloved local gathering spot mixing Moroccan beachgoers, local fishermen, and international surfers.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Short Climb",
        description: "5-minute uphill walk on dirt paths; wear sandals with heel straps or shoes rather than slippery flip-flops.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Tamraght coastal corridor (North gateway via Anza Plage), Agadir 80000",
    coordinates: { lat: 30.5068, lng: -9.6882 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Devils+Rock+Tamraght",
    parkingInfo: "Dirt parking lot overseen by authorized guardians (5 MAD fee)",
    publicTransportInfo: "Local bus route 32 or shared collective taxi heading north from central Agadir (approx. 7 MAD)",
    dressCode: "Beachwear casual; footwear with good traction for climbing the rock trail",
    equipmentNeeded: ["Sunglasses", "Sturdy sandals or sneakers", "Camera"],
    fitnessLevel: "Relaxed (A short, slightly steep walking path up the rock)",
    ageRestrictions: "Suitable for all ages; hold hands of small children near cliff boundaries",
    safetyNotes: "Never swim alone directly off the seaward rocks due to submerged reef currents",
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
    history: "Known in Berber as Imourane, this rock has anchored local coastal folklore for centuries, marking the geographical boundary between Tamraght and Taghazout.",
    culturalImportance: "Site of the ancient Moussem of Imourane, where unmarried women gathered annually in regional folklore to pray for fruitful marriage.",
    localLegend: "Legend tells of a sea cavern inside the rock where waves echo ancient blessings protecting sailors from oceanic tempests.",
    funFact: "During extreme low spring tides, natural tide pools at the base reveal colorful sea anemones and starfish.",
    officialWebsite: "https://www.visitmorocco.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Can you climb to the top of the rock?",
        a: "Yes, a clear dirt foot path leads to the top plateau, offering 360-degree views across the surf points."
      }
    ],
    contactPhone: "+212 528-840040"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-tifnit",
    city: "agadir",
    name: "Tifnit Fishing Village",
    neighborhood: "Bensergao",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "photographer"],
    vibeTags: ["nostalgic", "scenic", "serene"],
    tags: ["authentic", "coastal", "nature", "off-the-beaten-path", "sunset-view", "walk-in"],
    badges: ["hidden-gem", "cultural-immersion", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 30,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["steep_exterior_approach", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Best daylight hours: 09:00 AM - 06:00 PM)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "18:00" },
      { dayOfWeek: 1, open: "08:00", close: "18:00" },
      { dayOfWeek: 2, open: "08:00", close: "18:00" },
      { dayOfWeek: 3, open: "08:00", close: "18:00" },
      { dayOfWeek: 4, open: "08:00", close: "18:00" },
      { dayOfWeek: 5, open: "08:00", close: "18:00" },
      { dayOfWeek: 6, open: "08:00", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "food_stalls", "panoramic_viewpoint"],
    restrictions: ["Unpaved sand roads; drive carefully in standard low-clearance passenger cars", "Respect the privacy of local fishing families"],
    healthContraindications: ["Wild unpatrolled coastline with heavy shorebreak; do not swim in open surf"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A traditional troglodyte fishing village perched on ocean cliffs south of Agadir, where blue wooden boats beach on wild sand beside cave dwellings carved into sandstone.",
    shortValueProp: "Step back in time at Morocco's last authentic cliff-carved troglodyte fishing outpost",
    images: [],
    googlePlaceId: "ChIJO-jRdu23sw0RMbE_7Zz6_lY",
    googleRating: 4.4,
    reviewCount: 775,
    googleReviewCount: 520,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 180,
    viatorRating: 4.3,
    viatorReviewCount: 45,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 30,
    badge: "hidden-gem",
    tip: "You can buy fresh fish directly from fishermen hauling their wooden boats up the sand, then take it to a cliffside shack to have it grilled over charcoal for 20-30 MAD.",
    tips: [
      "Bring cash in small Dirham bills; there are no ATMs, card terminals, or commercial shops in the village.",
      "The drive from Bensergao passes through pristine coastal sand dunes framing dramatic Atlantic vistas."
    ],
    highlights: [
      "Historic blue-and-white troglodyte cave shelters carved directly into coastal cliffs",
      "Watch local wooden dories ride breaking surf swells directly onto the sandy shore",
      "Unspoiled sand dunes where the Atlantic meets coastal scrub"
    ],
    emotionalBenefits: ["Adventurous", "Nostalgic", "Unplugged"],
    bestTimeToVisit: "Late morning around 11:00 AM to see boats return with morning catches",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best on clear warm days)",
    ticketTypes: [
      { name: "Free Village Access", price: 0, currency: "MAD" }
    ],
    discountsInfo: "Open traditional coastal community; no entry fees.",
    includedServices: ["Public access to village paths and beach"],
    excludedServices: ["Food and beverage", "Private transportation"],
    hiddenCostsInfo: "None; bring cash for grilled fish or mint tea at local shacks",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Dangerous Surf",
        description: "Open wild ocean with ferocious rip currents and shorebreaks; strictly refrain from recreational swimming.",
        tone: "caution",
        tagColor: "alert",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Sale",
        description: "No organized tourist commercialization; buy fish directly from the boat crew at honest local prices.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Cash Only",
        description: "Everything operates on physical Dirham cash; fish grilling charges are modest and transparent.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Ancestral",
        description: "A genuine troglodyte fishing outpost operating exactly as it has for over a century without modern alterations.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Sandy Slopes",
        description: "Steep sandy slopes down to the beach require steady footing; not suitable for baby prams or wheelchairs.",
        tone: "caution",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Coastal Cliff Road, Tifnit Village (South corridor via Bensergao), Agadir 80000",
    coordinates: { lat: 30.1984, lng: -9.6380 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tifnit+Beach",
    parkingInfo: "Unpaved dirt parking area near village entrance (5 MAD guardian fee)",
    publicTransportInfo: "No direct city buses; reached via rental car or private Grand Taxi from Agadir (approx. 250 MAD return)",
    dressCode: "Casual beachwear or comfortable activewear; windbreaker jacket recommended",
    equipmentNeeded: ["Cash Dirhams (no ATMs)", "Camera", "Sun protection"],
    fitnessLevel: "Moderate (Walking over steep dirt slopes and soft beach sand)",
    ageRestrictions: "All ages welcome; not stroller accessible",
    safetyNotes: "Do not attempt swimming in the crashing surf",
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
    history: "For generations, local Berber fishermen carved living quarters directly out of the soft coastal sandstone cliffs to shelter from salt winds, preserving an ancestral off-grid marine lifestyle.",
    culturalImportance: "One of the last surviving examples of authentic troglodyte fishing communities in Atlantic North Africa.",
    localLegend: "Old fishermen recount tales of Phoenician navigators trading copper for salted fish along these exact cliffside coves.",
    funFact: "The village has no mains water or electricity grid, relying on solar battery banks and traditional artisanal boat hauling.",
    officialWebsite: "https://www.visitmorocco.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there cell service or restaurants?",
        a: "Mobile data coverage is weak, and there are no commercial restaurants—only small rustic clifftop shacks grilling the day's catch."
      }
    ],
    contactPhone: "+212 528-840040"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-oued-souss-camel",
    city: "agadir",
    name: "Sunset Camel Ride at Oued Souss",
    neighborhood: "Bensergao",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "family", "nature"],
    vibeTags: ["peaceful", "serene", "scenic"],
    tags: ["authentic", "coastal", "nature", "private", "relaxed", "sunset-view", "walk-in"],
    badges: ["sunset-spot", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 15,
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 90,
    distanceFromCenterKm: 6,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Sunset treks start at 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "16:30", close: "19:30" },
      { dayOfWeek: 1, open: "16:30", close: "19:30" },
      { dayOfWeek: 2, open: "16:30", close: "19:30" },
      { dayOfWeek: 3, open: "16:30", close: "19:30" },
      { dayOfWeek: 4, open: "16:30", close: "19:30" },
      { dayOfWeek: 5, open: "16:30", close: "19:30" },
      { dayOfWeek: 6, open: "16:30", close: "19:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["parking", "walking_paths", "panoramic_viewpoint"],
    restrictions: ["Weight limit of 110 kg per camel rider", "Children under 8 must ride accompanied by an adult"],
    healthContraindications: ["Severe chronic lower back pain or hip joint injuries"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "A guided camel ride winding through eucalyptus woodlands down to the mouth of the Oued Souss river, where pink flamingos gather on the wetlands at sunset.",
    shortValueProp: "Ride majestic camels through eucalyptus woods to see river estuary flamingos at sunset",
    images: [],
    googlePlaceId: "ChIJb_fP7ue2sw0RLzO504n3n_I",
    googleRating: 4.6,
    reviewCount: 585,
    googleReviewCount: 280,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 140,
    viatorRating: 4.7,
    viatorReviewCount: 95,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 70,
    badge: "popular",
    tip: "Wear long trousers to avoid saddle chafing against camel leather, and bring binoculars to observe migratory flamingos across the estuary sandbars.",
    tips: [
      "Arrive at the ranch 20 minutes before departure for saddle adjustment and mounting assistance.",
      "Handlers are happy to take excellent photos of you on your camel using your smartphone."
    ],
    highlights: [
      "Guided camel trek through peaceful eucalyptus forests",
      "Ride along the sand dunes of the Souss river mouth estuary",
      "Observe wild migratory pink flamingos feeding at golden hour"
    ],
    emotionalBenefits: ["Serene", "Scenic", "Memorable"],
    bestTimeToVisit: "Golden hour (05:15 PM - 06:45 PM)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Flamingos most visible autumn through spring)",
    ticketTypes: [
      { name: "90-Minute Camel Ride", price: 150, currency: "MAD" }
    ],
    discountsInfo: "Child rates are half price when sharing a double saddle with parents.",
    includedServices: ["Guided camel trek", "Traditional Moroccan mint tea at the ranch after the ride"],
    excludedServices: ["Gratuity for camel handlers", "Hotel transfer (unless booked as a package)"],
    hiddenCostsInfo: "Modest tip for your camel handler (20-30 MAD) is customary and appreciated",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Trained Animals",
        description: "Camels are well-trained and led by experienced local handlers holding lead ropes throughout the trek.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Clear Pricing",
        description: "Book directly through established Bensergao ranches to avoid middleman street tout commissions.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fair Rates",
        description: "Standard rate is 150-200 MAD per rider including 90 minutes of trekking and post-ride mint tea.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Authentic",
        description: "A genuine scenic trek bordering the Royal Palace grounds and Souss wetlands rather than an artificial show.",
        tone: "good",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle",
        description: "The camel handler assists with mounting; the swaying motion is gentle and easy to settle into.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Avenue Oued Souss, Bensergao, Agadir 80000",
    coordinates: { lat: 30.3650, lng: -9.5950 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oued+Souss+Agadir",
    parkingInfo: "Secure free parking lot at the ranch headquarters in Bensergao",
    publicTransportInfo: "Short petit taxi ride from Secteur Balnéaire (approx. 20 MAD)",
    dressCode: "Long pants to prevent chafing; flat closed shoes and sunglasses",
    equipmentNeeded: ["Long trousers", "Sunglasses", "Camera or smartphone"],
    fitnessLevel: "Relaxed (Easy guided riding; handlers lead the animals)",
    ageRestrictions: "All ages welcome; young children ride safely on tandem saddles with parents",
    safetyNotes: "Always hold both hands firmly on the saddle metal handle when the camel stands up or sits down",
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
    history: "For hundreds of years, camel caravans moved goods between the Souss Valley and the Atlantic coast along this natural river corridor, which now marks the boundary of the royal nature reserve.",
    culturalImportance: "Supports traditional pastoral animal-handling livelihoods in Bensergao while offering eco-friendly wetland viewing.",
    localLegend: "Local handlers believe camels possess an internal compass that always faces the Atlantic ocean breeze at sundown.",
    funFact: "The fragrant eucalyptus forest was planted in the mid-20th century to create a green shelterbelt stabilizing coastal dunes.",
    officialWebsite: "https://www.agadir-ranch.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is this suitable for children?",
        a: "Yes, children can ride comfortably in front of an adult on a double saddle, and handlers guide the camels on foot."
      }
    ],
    contactPhone: "+212 661-556677"
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-vallee-des-oiseaux",
    city: "agadir",
    name: "Vallée des Oiseaux",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization ──────────
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["family", "first-timer"],
    vibeTags: ["botanical", "peaceful"],
    tags: ["nature", "nature-walk", "family", "relaxed", "urban", "walk-in"],
    badges: ["green-oasis", "family-friendly"],
    // ── 2. FILTER — result-page filters & logistics ─────────
    price: 1,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 60,
    distanceFromCenterKm: 0.9,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_paved_paths", "shaded_benches", "flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
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
    openingHours: "09:00 AM - 06:00 PM (Daily; currently undergoing municipal revitalization)",
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
    amenities: ["street_parking", "walking_paths", "shaded_benches", "fountains", "children_playground"],
    restrictions: ["Currently undergoing site redevelopment under the Agadir Urban Development Programme; verify gate reopening status before visiting", "Do not feed animals unauthorized food"],
    healthContraindications: ["None; gentle flat garden pathways"],
    // ── 3. UI — presentation & social proof ─────────────────
    description: "An urban botanical garden and avian sanctuary set within a sheltered dry riverbed corridor connecting central Talborjt to the beach promenade, featuring exotic bird aviaries and cascading waterfalls.",
    shortValueProp: "A shaded urban green oasis with exotic aviaries, tropical flora, and quiet paths",
    images: [],
    googlePlaceId: "ChIJQ9x4N-u3sw0R7jJqQhR40n0",
    googleRating: 4.3,
    reviewCount: 800,
    googleReviewCount: 480,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 210,
    viatorRating: 4,
    viatorReviewCount: 65,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 45,
    badge: "hidden-gem",
    tip: "Notice: The park has undergone major redevelopment under the municipal PDU program; check local signs at Avenue Hassan II for public access areas.",
    tips: [
      "The sheltered dry riverbed microclimate is significantly cooler than the surrounding city streets during hot summer afternoons.",
      "The botanical path connects Avenue Hassan II directly down to Boulevard du 20 Août."
    ],
    highlights: [
      "Walk-through aviaries with exotic parrots, peacocks, and flamingos",
      "Sheltered botanical valley with banana trees, bougainvillea, and waterfalls",
      "Tranquil pedestrian walking corridor connecting city center to the beach"
    ],
    emotionalBenefits: ["Peaceful", "Educational", "Relaxed"],
    bestTimeToVisit: "Morning (09:00 AM - 11:00 AM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      { name: "Adult Entry", price: 10, currency: "MAD" },
      { name: "Child (under 12)", price: 5, currency: "MAD" }
    ],
    discountsInfo: "Free entry for children under 5 years old.",
    includedServices: ["Access to public garden paths and aviary enclosures"],
    excludedServices: ["Animal feeding workshops", "Snacks"],
    hiddenCostsInfo: "Nominal entry ticket of 10 MAD; free access for young children",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Municipal Park",
        description: "Enclosed municipal park with perimeter gates, security guards, and safe paved paths.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Regulated",
        description: "Municipal ticket pricing set at 10 MAD; no touts or unofficial ticket sellers.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget",
        description: "Nominal municipal entry cost provides an affordable green retreat for families in the city center.",
        tone: "good",
        tagColor: "money",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Under Works",
        description: "Upgraded modern immersion park transforming the historic 1980s zoo into an eco-friendly educational garden.",
        tone: "caution",
        tagColor: "craft",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Step-Free",
        description: "Ramped, gently sloping walkways follow the valley floor, easily accessible for prams and wheelchairs.",
        tone: "good",
        tagColor: "safety",
        state: "verified"
      }
    ],
    address: "Avenue du 20 Août / Avenue Hassan II, Talborjt, Agadir 80000",
    coordinates: { lat: 30.4196, lng: -9.6021 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vall%C3%A9e+des+Oiseaux+Agadir",
    parkingInfo: "Street parking available on Avenue Hassan II or Boulevard du 20 Août (5 MAD)",
    publicTransportInfo: "Easily walkable from beach promenade hotels and central Talborjt",
    dressCode: "Casual comfortable clothing and flat walking shoes",
    equipmentNeeded: ["Camera or smartphone", "Sun hat"],
    fitnessLevel: "Relaxed (Completely flat paved paths with gentle slope)",
    ageRestrictions: "Suitable for all ages; stroller and wheelchair friendly",
    safetyNotes: "Follow park guidelines regarding site renovations and animal enclosure boundaries",
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
    storyTitle: "The City's Hidden Bird Sanctuary",
    history: "Created during post-earthquake reconstruction as an urban green lung connecting the administrative city to the coastline along the natural Oued Tildi ravine.",
    culturalImportance: "A historic public leisure sanctuary for Agadir families, currently being elevated into a world-class educational wildlife park.",
    localLegend: "Gardeners say that migratory desert songbirds stop in this secluded valley to drink from the fresh mountain springs before crossing to Europe.",
    funFact: "Because the park sits sunken inside a dry river valley, it remains several degrees cooler than the adjacent sun-baked boulevards.",
    officialWebsite: "https://www.agadir.ma",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the park currently open?",
        a: "The site has been undergoing major multi-million dirham restructuring under the Agadir urban development plan; check current gate opening notices at the Avenue Hassan II entrance."
      }
    ],
    contactPhone: "+212 528-840040"
  }
];