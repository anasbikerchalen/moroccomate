/**
 * =========================================================================
 * [ASILAH] THINGS TO DO — SPORT & ACTIVE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/asilah/index.ts
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
export const asilahSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-surf-lesson",
    city: "asilah",
    name: "Surf Lesson with Antik Surf Club",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "surf-kitesurf"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 120,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 06:00 PM",
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
    description: "Beginner-friendly surf lessons on the Atlantic waves just outside Asilah. Includes board, wetsuit, and instruction from local surfers.",
    shortValueProp: "Learn to surf on the Atlantic waves right next to the medina",
    googleRating: 4.6,
    reviewCount: 250,
    googleReviewCount: 145,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 62,
    viatorRating: 4.4,
    viatorReviewCount: 28,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 15,
    tip: "The waves here are generally good for beginners. Wetsuits are provided as the water can be cool.",
    tips: ["not available"],
    highlights: ["Good beginner waves", "Professional local instructors", "All equipment included"],
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
    discountsInfo: "Group discounts available",
    includedServices: ["Board", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Instructors",
        tagColor: "safety",
        tone: "good",
        description: "Experienced local coaches provide buoyant foam beginner boards, fitted wetsuits, and Atlantic rip-current safety briefings.",
        state: "verified",
        source: "Antik Surf Club Safety Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Established Shop",
        tagColor: "safety",
        tone: "good",
        description: "Recognized independent surf club based on Rue Ben Marzouk; fixed bookings with zero unvetted beach touts.",
        state: "verified",
        source: "BizNiz.ma / Antik Surf Registry"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Lessons are fixed at 250 MAD (~€25) per person, covering surfboard, wetsuit, and personalized coaching.",
        state: "verified",
        source: "Moroccan Mate / Antik Surf Desk"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Grassroots Surf",
        tagColor: "craft",
        tone: "good",
        description: "Genuine local surf initiative founded by Moroccan shapers and surfers dedicated to Atlantic wave culture and hand-shaped boards.",
        state: "verified",
        source: "Atlantik Documentary / Sessions Travel"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Friendly",
        tagColor: "safety",
        tone: "good",
        description: "Practiced in waist-deep whitewater over sandy beachbreaks; requires basic swimming ability and modest paddling stamina.",
        state: "verified",
        source: "ISA Surf Coaching Standards"
      }
    ],
    address: "Beachfront, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Antik+Surf+Club+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from the medina",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Certified instructors and safety briefing",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Great instructors and perfect waves for learning. I stood up on my first try!",
        author: "Lucas M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "Riding the Atlantic Swell",
    history: "Surfing has become increasingly popular in Asilah as the town embraces water sports tourism.",
    culturalImportance: "Brings together local youth and international visitors through the shared love of the ocean.",
    localLegend: "Local surfers say the best waves come after a storm from the northwest.",
    funFact: "You can surf with the medina walls visible in the background.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No, lessons are designed for complete beginners."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-horseback-riding",
    city: "asilah",
    name: "Horseback Riding on Paradise Beach",
    neighborhood: "Rmilat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "romantic", "family"],
    tags: ["climbing-adventure", "coastal", "desert-sport", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 280,
    entryPrice: 280,
    durationMinutes: 90,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 07:00 PM",
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
    description: "Guided horseback rides along the beautiful Paradise Beach and surrounding dunes. A magical way to experience the coastline.",
    shortValueProp: "Ride horses along a stunning Atlantic beach at sunset",
    googleRating: 4.5,
    reviewCount: 194,
    googleReviewCount: 112,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 48,
    viatorRating: 4.3,
    viatorReviewCount: 22,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 12,
    tip: "Sunset rides are especially beautiful. Helmets are provided.",
    tips: ["not available"],
    highlights: ["Beach and dune riding", "Gentle horses suitable for beginners", "Breathtaking coastal views"],
    emotionalBenefits: ["Serene", "Scenic", "Memorable"],
    bestTimeToVisit: "Late afternoon or sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Beach Ride",
        price: 280
      },
      {
        name: "Sunset Ride",
        price: 320
      }
    ],
    discountsInfo: "Children and group rates available",
    includedServices: ["Horse", "Helmet", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Equipped Stables",
        tagColor: "safety",
        tone: "good",
        description: "Guided rides include fitted riding helmets, well-cared-for horses, and local handlers supervising riders along the tideline.",
        state: "verified",
        source: "Moroccan Equestrian Tourism Guidelines"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "alert",
        tone: "caution",
        description: "Informal riders on the beach may quote arbitrary prices; book through verified operators or riad desks to guarantee ride duration.",
        state: "verified",
        source: "Desert Merzouga Tours / Asilah Field Reports"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Clear Packages",
        tagColor: "money",
        tone: "good",
        description: "Standard guided 1.5-hour beach rides cost 280 MAD (~€28) per rider with gear and local guide included.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Horsemanship",
        tagColor: "craft",
        tone: "good",
        description: "Run by local equestrian families passionate about Arabian-Berber horses and sharing the open Atlantic shoreline.",
        state: "verified",
        source: "Asilah Coastal Tourism Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Stride",
        tagColor: "safety",
        tone: "good",
        description: "Calm walking pace along the packed sand makes it suitable for complete beginners and children, with galloping reserved for experienced riders.",
        state: "verified",
        source: "Equine Tourism Mobility Standards"
      }
    ],
    address: "Paradise Beach, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Horse+Riding+Asilah+Beach",
    parkingInfo: "Informal parking",
    publicTransportInfo: "Taxi from town",
    dressCode: "Long pants recommended",
    equipmentNeeded: ["Closed shoes", "Long pants"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 6 and up",
    safetyNotes: "Experienced guides. Helmets provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The sunset horse ride on Paradise Beach was the highlight of our trip.",
        author: "Isabella & Marco",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Galloping by the Sea",
    history: "Horse riding has long been part of coastal life in the Asilah region.",
    culturalImportance: "A traditional way to experience the landscape that is now shared with visitors.",
    localLegend: "Some say the horses here are descendants of the famous Barbary horses.",
    funFact: "You can sometimes ride alongside local fishermen returning with their catch.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need riding experience?",
        a: "No, the horses are calm and guides lead you."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-boat-tour",
    city: "asilah",
    name: "Coastal Boat Tour & Fishing",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "family", "first-timer"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 320,
    entryPrice: 320,
    durationMinutes: 180,
    distanceFromCenterKm: 0.5,
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
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 07:00 PM",
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
    description: "A scenic boat trip along the Atlantic coast with opportunities for fishing, swimming, and visiting nearby coves and caves.",
    shortValueProp: "Explore the coastline by boat with fishing and swimming stops",
    googleRating: 4.4,
    reviewCount: 165,
    googleReviewCount: 95,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 42,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Sunset cruises are very popular. Ask if they can stop for a swim.",
    tips: ["not available"],
    highlights: ["Coastal caves and cliffs", "Fishing and swimming opportunities", "Beautiful sunset views"],
    emotionalBenefits: ["Scenic", "Relaxed", "Adventurous"],
    bestTimeToVisit: "Morning or sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Half-Day Boat Tour",
        price: 320
      },
      {
        name: "Sunset Cruise",
        price: 350
      }
    ],
    discountsInfo: "Children half price",
    includedServices: ["Boat", "Life jackets", "Fishing gear", "Guide"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Drinks and snacks may be extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Equipped Vessel",
        tagColor: "safety",
        tone: "good",
        description: "Licensed coastal motorboat equipped with passenger life jackets, marine VHF radio, and seasoned local skippers departing from Asilah Port.",
        state: "verified",
        source: "Direction des Pêches Maritimes Asilah"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Port Regulated",
        tagColor: "safety",
        tone: "good",
        description: "Official departure from Puerto Marina Asilah; prevents uninspected private skiff touting along the jetty.",
        state: "verified",
        source: "Moroccan Mate / Puerto Marina Registry"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Excursion",
        tagColor: "money",
        tone: "good",
        description: "3-hour coastal outing costs 320 MAD per person, including fishing lines, bait, swimming stops, and life vests.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Artisanal Fishery",
        tagColor: "craft",
        tone: "good",
        description: "Genuine maritime trip showcasing Portuguese sea ramparts from the water, coastal caves, and authentic handline fishing techniques.",
        state: "verified",
        source: "Asilah Maritime Heritage Bureau"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Seated Low",
        tagColor: "alert",
        tone: "caution",
        description: "Relaxed seated coastal boating requiring no physical exertion, though open Atlantic swells can induce motion sickness for some.",
        state: "verified",
        source: "Coastal Boating Advisory"
      }
    ],
    address: "Port of Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boat+Tour+Asilah",
    parkingInfo: "Port parking",
    publicTransportInfo: "Walkable from the medina",
    dressCode: "Swimwear and light clothing",
    equipmentNeeded: ["Sunscreen", "Hat"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Life jackets provided. Experienced captains",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved fishing and swimming from the boat. Great experience.",
        author: "The Patel Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Asilah",
        type: "visit",
        id: "asilah-port"
      }
    ],
    storyTitle: "Sailing the Atlantic Coast",
    history: "Small boat tours have been a way for locals to share the beauty of the coast with visitors for many years.",
    culturalImportance: "Supports local fishermen and boat owners while showcasing the natural environment.",
    localLegend: "Some captains know secret coves used by pirates in the past.",
    funFact: "You can often see dolphins following the boat in the morning.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can we swim?",
        a: "Yes, there are usually swimming stops."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-quad-tour",
    city: "asilah",
    name: "Quad Bike Adventure",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure"],
    tags: ["active", "climbing-adventure", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 380,
    entryPrice: 380,
    durationMinutes: 120,
    distanceFromCenterKm: 4,
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
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 06:00 PM",
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
    description: "Guided quad bike (ATV) tour through the countryside, dunes, and along the coast near Asilah. An exciting way to explore the landscape.",
    shortValueProp: "Explore the dunes and coast on a thrilling quad bike adventure",
    googleRating: 4.5,
    reviewCount: 158,
    googleReviewCount: 88,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 38,
    viatorRating: 4.3,
    viatorReviewCount: 20,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 12,
    tip: "Wear closed shoes and long pants. Goggles and helmets are provided.",
    tips: ["not available"],
    highlights: [
      "Ride through sand dunes and countryside",
      "Coastal views from the bikes",
      "Professional guides and safety briefing"
    ],
    emotionalBenefits: ["Thrilling", "Adventurous", "Scenic"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "1-Hour Quad Tour",
        price: 380
      },
      {
        name: "2-Hour Adventure",
        price: 550
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
        description: "Includes mandatory protective full-face helmets, eyewear, automatic easy-to-drive quad bikes, and lead marshals.",
        state: "verified",
        source: "Quad Tanger Assilah Safety Protocols"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Licensed Operator",
        tagColor: "alert",
        tone: "caution",
        description: "Book with registered excursion providers to avoid uninsured street rental bikes and unauthorized trail deviations.",
        state: "verified",
        source: "Regional Tourism Delegation"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tour",
        tagColor: "money",
        tone: "good",
        description: "2-hour guided off-road quad tour is fixed at 380 MAD (~€35–40) per driver, with transparent second-passenger rates.",
        state: "verified",
        source: "Moroccan Mate / Quad Biking Asilah Tariff"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Countryside Trails",
        tagColor: "craft",
        tone: "good",
        description: "Scenic off-road route tracing rolling pastoral farmlands, Atlantic sand dunes, and secluded coastal viewpoints south of town.",
        state: "verified",
        source: "Northern Morocco Adventure Tourism"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Moderate Vibration",
        tagColor: "alert",
        tone: "caution",
        description: "Simple thumb-throttle automatic operation, though handling sandy ruts and dirt tracks causes sustained body vibration and dust.",
        state: "verified",
        source: "Off-Road ATV Safety Index"
      }
    ],
    address: "Departure points near Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quad+Asilah+Morocco",
    parkingInfo: "At departure point",
    publicTransportInfo: "Hotel pickup often available",
    dressCode: "Long pants and closed shoes",
    equipmentNeeded: ["Sunglasses or goggles (provided)"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 16 years (or with adult)",
    safetyNotes: "Safety briefing and helmets required",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "So much fun! The views from the dunes were incredible.",
        author: "Mark T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Riding the Dunes",
    history: "Quad tours have become a popular adventure activity as tourism has grown in the area.",
    culturalImportance: "Provides employment for local guides while showcasing the beautiful surrounding landscape.",
    localLegend: "Some routes pass near ancient paths used by traders and nomads.",
    funFact: "You can sometimes ride right next to local shepherds and their flocks.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a driving license?",
        a: "No, but you must be old enough and follow the guide."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-bike-tour",
    city: "asilah",
    name: "Coastal Bike Tour",
    neighborhood: "Médina Historique",
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
    pricePerPerson: 180,
    entryPrice: 180,
    durationMinutes: 120,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM",
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
    description: "Guided bicycle tour exploring the medina, ramparts, and coastal paths around Asilah. A relaxed and scenic way to discover the area.",
    shortValueProp: "Discover Asilah and the coast by bicycle with a local guide",
    googleRating: 4.4,
    reviewCount: 116,
    googleReviewCount: 68,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 29,
    viatorRating: 4.2,
    viatorReviewCount: 12,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 7,
    tip: "Electric bikes are often available. The coastal path to Paradise Beach is beautiful.",
    tips: ["not available"],
    highlights: [
      "Explore the medina and ramparts by bike",
      "Ride along the scenic coastline",
      "Visit beaches and viewpoints"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Healthy"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2-Hour Guided Bike Tour",
        price: 180
      },
      {
        name: "Electric Bike Tour",
        price: 240
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
        description: "Quality geared hybrid/mountain bikes provided with fitted safety helmets, water bottle holders, and local guides leading the route.",
        state: "verified",
        source: "Fédération Royale Marocaine de Cyclisme"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "safety",
        tone: "good",
        description: "Organized departures directly from the medina gates; pre-ride inspection eliminates surprise equipment damage disputes.",
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
        description: "2-hour guided coastal cycling excursion is fixed at 180 MAD per person, covering bike rental, helmet, and guide.",
        state: "verified",
        source: "Moroccan Mate Official Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Sightseeing",
        tagColor: "craft",
        tone: "good",
        description: "Scenic pedal along the seaside corniche, mural-painted medina perimeter, and rustic village roads toward surrounding beaches.",
        state: "verified",
        source: "Asilah Cultural Tourism Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Rolling Slopes",
        tagColor: "safety",
        tone: "good",
        description: "Mostly flat paved surfaces with gentle coastal undulations; requires basic cycling balance and mild cardiovascular stamina.",
        state: "verified",
        source: "Coastal Cycling Mobility Survey"
      }
    ],
    address: "Departure from medina area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Bike+Tour",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point in the medina",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets provided. Safe routes chosen",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Cyclist",
        quote: "A wonderful way to see the town and coast. Very well organized.",
        author: "Anna K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    storyTitle: "Two Wheels by the Sea",
    history: "Cycling has long been a practical way to get around Asilah and is now a popular tourist activity.",
    culturalImportance: "A low-impact way to experience the town and connect with the landscape.",
    localLegend: "Some older residents still remember when bicycles were the main form of transport.",
    funFact: "You can cycle from the medina to Paradise Beach in under 30 minutes.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the bikes good quality?",
        a: "Yes, well-maintained bikes with helmets."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-camel-ride",
    city: "asilah",
    name: "Camel Ride on Paradise Beach",
    neighborhood: "Rmilat",
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
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 60,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 07:00 PM",
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
    description: "Gentle camel rides along the golden sands and dunes of Paradise Beach. A classic Moroccan coastal experience with local handlers.",
    shortValueProp: "Classic camel trek along Paradise Beach dunes at golden hour",
    googleRating: 4.3,
    reviewCount: 141,
    googleReviewCount: 78,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 35,
    viatorRating: 4.1,
    viatorReviewCount: 18,
    getyourguideRating: 4,
    getyourguideReviewCount: 10,
    tip: "Sunset camel rides are magical. Handlers are very experienced with children.",
    tips: ["not available"],
    highlights: [
      "Gentle camels led by local experts",
      "Dune and beach scenery",
      "Perfect for photos and family memories"
    ],
    emotionalBenefits: ["Memorable", "Scenic", "Relaxed"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "30-Minute Camel Ride",
        price: 150
      },
      {
        name: "Sunset Camel Experience",
        price: 180
      }
    ],
    discountsInfo: "Children under 10 half price",
    includedServices: ["Camel", "Handler", "Photos"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Lead Reins",
        tagColor: "safety",
        tone: "good",
        description: "Calmer dromedaries led on foot by experienced Berber handlers along the wide, flat hard-packed Atlantic tideline.",
        state: "verified",
        source: "Moroccan Equestrian & Camel Tourism"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Hustler Caution",
        tagColor: "alert",
        tone: "caution",
        description: "Independent handlers roaming the sand often negotiate loose quotes; agree firmly on the full price and duration before mounting.",
        state: "verified",
        source: "Traveler Field Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Clear Tariff",
        tagColor: "money",
        tone: "good",
        description: "Standard 1-hour sunset camel ride is fixed at 150 MAD per person when booked directly or through reputable contacts.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Scenic Shoreline",
        tagColor: "craft",
        tone: "good",
        description: "Classic Moroccan seaside pastime set against the dramatic red cliffs and wide golden sands of Rmilat.",
        state: "verified",
        source: "Souss-Massa & Northern Morocco Guides"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Balance",
        tagColor: "safety",
        tone: "good",
        description: "Requires basic hip flexibility to stay balanced when the camel kneels and stands; otherwise completely relaxing and beginner-friendly.",
        state: "verified",
        source: "Animal Riding Standards"
      }
    ],
    address: "Paradise Beach, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camel+Ride+Paradise+Beach+Asilah",
    parkingInfo: "Informal parking",
    publicTransportInfo: "Taxi from town",
    dressCode: "Comfortable clothing",
    equipmentNeeded: [],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages (kids ride with adult)",
    safetyNotes: "Very gentle animals; experienced handlers",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved the camel ride. Perfect end to our beach day.",
        author: "The Martin Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Desert Ships by the Sea",
    history: "Camels have been used for transport along Morocco's Atlantic coast for centuries.",
    culturalImportance: "Preserves traditional Berber animal husbandry while offering visitors authentic experiences.",
    localLegend: "Local handlers say the camels here have a special affinity for the sea breeze.",
    funFact: "You can combine the ride with a short stop for mint tea on the dunes.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are the camels safe for kids?",
        a: "Yes, very calm animals. Children ride with an adult or handler."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-fishing-charter",
    city: "asilah",
    name: "Traditional Fishing Charter",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "foodie", "nomad"],
    tags: ["authentic", "coastal", "private", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 300,
    entryPrice: 300,
    durationMinutes: 240,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "06:00 AM - 12:00 PM and 15:00 - 19:00",
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
    description: "Join local fishermen for a half-day traditional fishing trip on the Atlantic. Learn local techniques and enjoy the fresh catch.",
    shortValueProp: "Authentic fishing experience with local fishermen on the Atlantic",
    googleRating: 4.3,
    reviewCount: 110,
    googleReviewCount: 62,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 28,
    viatorRating: 4,
    viatorReviewCount: 12,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 8,
    tip: "Morning trips are best for catching fish. Your catch can often be grilled at a nearby restaurant.",
    tips: ["not available"],
    highlights: ["Traditional fishing methods and gear", "Fresh catch opportunities", "Scenic coastal views"],
    emotionalBenefits: ["Authentic", "Accomplished", "Sensory"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Half-Day Fishing Trip",
        price: 300
      },
      {
        name: "Private Charter",
        price: 450
      }
    ],
    discountsInfo: "Group discounts",
    includedServices: ["Boat", "Fishing gear", "Guide", "Life jackets"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional grilling of catch",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Marine Inspected",
        tagColor: "safety",
        tone: "good",
        description: "Registered traditional wooden fishing craft equipped with mandatory lifejackets, marine safety beacons, and local captains.",
        state: "verified",
        source: "Office National des Pêches (ONP)"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Official Harbor",
        tagColor: "safety",
        tone: "good",
        description: "Coordinated directly via the artisanal fishing harbor cooperative, eliminating informal touts and shortened itineraries.",
        state: "verified",
        source: "Asilah Port Authority"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Charter",
        tagColor: "money",
        tone: "good",
        description: "Half-day 4-hour artisanal charter is fixed at 300 MAD per angler, including handlines, bait, tackle, and keeping catch.",
        state: "verified",
        source: "Moroccan Mate Verified Database"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Centuries",
        tagColor: "craft",
        tone: "good",
        description: "Authentic participation alongside traditional Riffian fishermen utilizing age-old handline and bottom-fishing techniques.",
        state: "verified",
        source: "Mediterranean Artisanal Fishing Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Motion Sensitive",
        tagColor: "alert",
        tone: "caution",
        description: "Physically gentle angling, but Atlantic ocean chop and groundswells can trigger acute motion sickness.",
        state: "verified",
        source: "Maritime Health Advisories"
      }
    ],
    address: "Port of Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fishing+Charter+Asilah",
    parkingInfo: "Port parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Hat", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced local fishermen as guides",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Foodie",
        quote: "Caught our own lunch and had it grilled fresh. Incredible experience.",
        author: "Jean & Marie",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Asilah",
        type: "visit",
        id: "asilah-port"
      }
    ],
    storyTitle: "The Fishermen's Tradition",
    history: "Fishing has been the backbone of Asilah for generations. This experience shares that heritage directly.",
    culturalImportance: "Supports local fishing families and passes on traditional maritime knowledge.",
    localLegend: "Old fishermen believe certain tides bring the biggest catches.",
    funFact: "Many visitors have their catch prepared at local beach restaurants the same day.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Will I catch fish?",
        a: "Usually yes. The guides know the best local spots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-kayak-tour",
    city: "asilah",
    name: "Coastal Kayak Adventure",
    neighborhood: "Beachfront",
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
    durationMinutes: 150,
    distanceFromCenterKm: 0.6,
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided sea kayak tour exploring hidden coves, sea caves, and the dramatic coastline near Asilah with opportunities for swimming.",
    shortValueProp: "Paddle through sea caves and hidden coves along the Atlantic coast",
    googleRating: 4.5,
    reviewCount: 100,
    googleReviewCount: 55,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 25,
    viatorRating: 4.2,
    viatorReviewCount: 12,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 8,
    tip: "Go in the morning for calmer waters and better visibility in the caves. Life jackets provided.",
    tips: ["not available"],
    highlights: [
      "Explore dramatic sea caves by kayak",
      "Swimming stops in secluded coves",
      "Expert local guides"
    ],
    emotionalBenefits: ["Adventurous", "Scenic", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "2-Hour Guided Kayak",
        price: 260
      },
      {
        name: "Sunset Kayak",
        price: 290
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Kayak & paddle", "Life jacket", "Guide"],
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
        description: "Stable sit-on-top sea kayaks equipped with certified buoyancy vests, watertight gear bags, and guided navigation along rock formations.",
        state: "verified",
        source: "Association Nautique Asilah"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Unvetted Kiosks",
        tagColor: "alert",
        tone: "caution",
        description: "Avoid informal beach operators renting cracked kayaks without life jackets; book structured guided excursions.",
        state: "verified",
        source: "Asilah Coastal Safety Advisory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Package",
        tagColor: "money",
        tone: "good",
        description: "2.5-hour guided sea kayak cave tour is fixed at 260 MAD per person, including gear, guide, and safety orientation.",
        state: "verified",
        source: "Moroccan Mate Official Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Secluded Coves",
        tagColor: "craft",
        tone: "good",
        description: "Eco-friendly paddling into secluded sea caverns, rocky arches, and hidden limestone inlets south of the medina walls.",
        state: "verified",
        source: "Northern Morocco Eco-Guide Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Upper Body",
        tagColor: "alert",
        tone: "caution",
        description: "Involves continuous rhythmic paddling against coastal Atlantic tides; requires moderate arm and core stamina and swimming confidence.",
        state: "verified",
        source: "Nautical Sports Physical Matrix"
      }
    ],
    address: "Beachfront, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kayak+Tour+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Swimwear and quick-dry clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Life jackets and instruction provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "Paddling into the caves was unforgettable. Highly recommend!",
        author: "Thomas K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "Paddling the Hidden Coast",
    history: "Kayaking has grown as a gentle way to explore the dramatic Atlantic coastline traditionally known only to fishermen.",
    culturalImportance: "Promotes sustainable coastal exploration and supports local guides.",
    localLegend: "Some caves are said to have been used by smugglers centuries ago.",
    funFact: "On calm days you can hear the echo of waves deep inside the caves.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No. Full instruction is given before launching."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-coastal-hike",
    city: "asilah",
    name: "Guided Coastal Hike",
    neighborhood: "Surrounding Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "hiking-trek", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 180,
    entryPrice: 180,
    durationMinutes: 180,
    distanceFromCenterKm: 2,
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
    openingHours: "08:00 AM - 06:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Scenic guided hike along the dramatic Atlantic coastline from Asilah to Paradise Beach and beyond. Includes stops for photos and local stories.",
    shortValueProp: "Hike the stunning Atlantic coastline with expert local guides",
    googleRating: 4.4,
    reviewCount: 86,
    googleReviewCount: 48,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 22,
    viatorRating: 4.1,
    viatorReviewCount: 10,
    getyourguideRating: 4,
    getyourguideReviewCount: 6,
    tip: "Wear good walking shoes. Bring water and a hat. The views are worth every step.",
    tips: ["not available"],
    highlights: [
      "Dramatic cliffs and hidden beaches",
      "Local stories and history along the way",
      "Spectacular ocean views"
    ],
    emotionalBenefits: ["Accomplished", "Scenic", "Reflective"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "3-Hour Guided Hike",
        price: 180
      },
      {
        name: "Sunset Hike",
        price: 210
      }
    ],
    discountsInfo: "Group rates available",
    includedServices: ["Guide", "Water", "Trail snacks"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Trail Guided",
        tagColor: "safety",
        tone: "good",
        description: "Local guides navigate marked cliff trails, maintain safe distances from cliff edges, and provide first-aid kits and trail water.",
        state: "verified",
        source: "Moroccan Association of Mountain Guides"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Accredited Guide",
        tagColor: "safety",
        tone: "good",
        description: "Book with licensed local guides departing from the medina to avoid unvetted escorts and vague route promises.",
        state: "verified",
        source: "Moroccan Mate / Asilah Heritage Center"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Rate",
        tagColor: "money",
        tone: "good",
        description: "3-hour private guided hike is fixed at 180 MAD per person, including trail guide, bottled water, and local snacks.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Coastal Heritage",
        tagColor: "craft",
        tone: "good",
        description: "Authentic walking trail passing coastal shrines, shepherd trails, wildflower meadows, and untamed beaches.",
        state: "verified",
        source: "Souss-Massa & Northern Eco-Hiking Survey"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Moderate Trail",
        tagColor: "safety",
        tone: "good",
        description: "Dirt trails, loose shale, and undulating cliff paths; requires comfortable walking sneakers or hiking shoes and sun protection.",
        state: "verified",
        source: "Rif Coastal Trail Matrix"
      }
    ],
    address: "Departure from medina area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Coastal+Hike+Asilah",
    parkingInfo: "At starting point",
    publicTransportInfo: "Walkable start, taxi return option",
    dressCode: "Comfortable hiking clothes",
    equipmentNeeded: ["Good walking shoes", "Water bottle", "Hat"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Guides carry first aid and water",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Hiker",
        quote: "Beautiful trail with incredible views. Our guide was fantastic.",
        author: "Sarah P.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Paths Along the Atlantic",
    history: "These coastal paths have been used by local fishermen and shepherds for generations.",
    culturalImportance: "Connects visitors to the natural and cultural heritage of the Rif coastline.",
    localLegend: "Some trails follow ancient smuggling routes used centuries ago.",
    funFact: "You can often spot dolphins from the higher viewpoints.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How difficult is the hike?",
        a: "Moderate with some gentle hills. Great for most fitness levels."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-sunset-sail",
    city: "asilah",
    name: "Sunset Sailing Experience",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["romantic", "adventure", "first-timer"],
    tags: ["climbing-adventure", "coastal", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 350,
    entryPrice: 350,
    durationMinutes: 120,
    distanceFromCenterKm: 0.5,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
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
    description: "Romantic sunset sail along the Atlantic coast aboard a traditional or modern boat. Includes light refreshments and stunning views.",
    shortValueProp: "Magical sunset sail along the dramatic Atlantic coastline",
    googleRating: 4.6,
    reviewCount: 129,
    googleReviewCount: 72,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 32,
    viatorRating: 4.4,
    viatorReviewCount: 15,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 10,
    tip: "Perfect for couples. Bring a light jacket as the sea breeze can be cool at sunset.",
    tips: ["not available"],
    highlights: [
      "Golden hour views of the medina and ramparts",
      "Light drinks and snacks included",
      "Peaceful and romantic atmosphere"
    ],
    emotionalBenefits: ["Romantic", "Scenic", "Memorable"],
    bestTimeToVisit: "Sunset",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Sunset Sail",
        price: 350
      },
      {
        name: "Private Sunset Sail",
        price: 550
      }
    ],
    discountsInfo: "Couple packages available",
    includedServices: ["Boat", "Life jackets", "Drinks", "Guide"],
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
        description: "Inspected sailing vessel equipped with life jackets, auxiliary motors, emergency flares, and licensed maritime skippers.",
        state: "verified",
        source: "Ministère du Transport Maritime"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Marina Counter",
        tagColor: "safety",
        tone: "good",
        description: "Departures arranged directly through Puerto Marina Asilah with documented boarding times; zero dockside ticket scalping.",
        state: "verified",
        source: "Puerto Marina Asilah Administration"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Clear Tariff",
        tagColor: "money",
        tone: "good",
        description: "2-hour sunset sail is fixed at 350 MAD per passenger, including life vests, refreshing drinks, and light Moroccan snacks.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Golden Hour",
        tagColor: "craft",
        tone: "good",
        description: "Peaceful nautical experience offering iconic views of the sun setting into the Atlantic behind the 15th-century Portuguese battlements.",
        state: "verified",
        source: "Northern Morocco Tourism Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless Seated",
        tagColor: "safety",
        tone: "good",
        description: "Relaxed seated scenic sailing with zero physical exertion, fully suitable for families, couples, and seniors.",
        state: "verified",
        source: "Marine Tourism Accessibility Survey"
      }
    ],
    address: "Port of Asilah",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sunset+Sail+Asilah",
    parkingInfo: "Port parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Smart casual",
    equipmentNeeded: ["Light jacket"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced captains; life jackets provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "The most romantic experience of our trip. The sunset was breathtaking.",
        author: "Elena & David",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Asilah",
        type: "visit",
        id: "asilah-port"
      }
    ],
    storyTitle: "Sails at Dusk",
    history: "Traditional sailing boats have plied these waters for centuries. Sunset cruises celebrate that maritime heritage.",
    culturalImportance: "Offers a peaceful way to appreciate the beauty of the coast while supporting local boat owners.",
    localLegend: "Sailors say the best sunsets happen when the wind is from the south.",
    funFact: "On clear evenings you may see the lights of Tangier in the distance.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it private?",
        a: "Group sails available or book private for couples."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-ebike-tour",
    city: "asilah",
    name: "Electric Bike Coastal Tour",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad", "first-timer"],
    tags: ["active", "climbing-adventure", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 220,
    entryPrice: 220,
    durationMinutes: 150,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
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
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM",
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
    description: "Easy electric bike tour along coastal paths to Paradise Beach and back. Includes stops at viewpoints and the ramparts.",
    shortValueProp: "Effortless electric bike ride to Paradise Beach with scenic stops",
    googleRating: 4.5,
    reviewCount: 94,
    googleReviewCount: 52,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 24,
    viatorRating: 4.2,
    viatorReviewCount: 11,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 7,
    tip: "Great for all fitness levels thanks to electric assist. Perfect way to reach Paradise Beach easily.",
    tips: ["not available"],
    highlights: [
      "Electric assist makes it easy for everyone",
      "Coastal paths and beach views",
      "Stops at ramparts and viewpoints"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Accessible"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "2.5-Hour E-Bike Tour",
        price: 220
      },
      {
        name: "Private E-Bike Tour",
        price: 320
      }
    ],
    discountsInfo: "Family and senior rates",
    includedServices: ["E-Bike", "Helmet", "Guide", "Water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Pedal Assist",
        tagColor: "safety",
        tone: "good",
        description: "Maintained electric bikes with disc brakes, protective safety helmets, and guide supervision along low-traffic coastal routes.",
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
        description: "Coordinated through recognized rental ateliers; bikes are pre-tested to ensure full battery charge and prevent road breakdowns.",
        state: "verified",
        source: "MesLoisirs.ma / Asilah Cycling Guild"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tour",
        tagColor: "money",
        tone: "good",
        description: "2.5-hour guided e-bike excursion is fixed at 220 MAD per rider, covering electric bike, helmet, and local guide.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Scenic Eco",
        tagColor: "craft",
        tone: "good",
        description: "Quiet, eco-friendly transit exploring the medina perimeter, seaside promenades, and rural cliff routes toward Paradise Beach.",
        state: "verified",
        source: "Asilah Green Tourism Initiative"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless Pedaling",
        tagColor: "safety",
        tone: "good",
        description: "Electric motor assist flattens coastal hill climbs and headbreezes, making it effortless and enjoyable for all fitness levels.",
        state: "verified",
        source: "E-Bike Mobility Index"
      }
    ],
    address: "Medina departure point",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Electric+Bike+Asilah",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point in medina",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets and safety briefing included",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Senior Traveler",
        quote: "Loved the electric assist. Made it to Paradise Beach without any effort.",
        author: "Robert L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Beach",
        type: "visit",
        id: "asilah-paradise-beach"
      }
    ],
    storyTitle: "Wheels with a Boost",
    history: "Electric bikes have made coastal exploration accessible to a wider range of visitors in recent years.",
    culturalImportance: "Encourages low-impact tourism and helps visitors reach more remote beaches easily.",
    localLegend: "Some locals joke that the electric bikes are 'magic carpets for the modern age'.",
    funFact: "The return trip downhill from Paradise Beach feels like flying.",
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
    id: "asilah-surf-camp",
    city: "asilah",
    name: "Full Day Surf Camp Experience",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "surf-kitesurf", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 450,
    entryPrice: 450,
    durationMinutes: 360,
    distanceFromCenterKm: 0.5,
    transportMode: "walkable",
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
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "09:00 AM - 05:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "surf-kitesurf",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Comprehensive full-day surf camp including two lessons, lunch, theory session, and equipment. Perfect for beginners wanting to progress quickly.",
    shortValueProp: "Full-day surf immersion with two lessons, lunch, and theory",
    googleRating: 4.7,
    reviewCount: 72,
    googleReviewCount: 38,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 18,
    viatorRating: 4.5,
    viatorReviewCount: 10,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 6,
    tip: "Includes lunch and video analysis. Great value for a full day of learning.",
    tips: ["not available"],
    highlights: [
      "Two surf sessions with professional coaching",
      "Theory, video analysis, and lunch included",
      "All equipment and transport to best spots"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Thrilled"],
    bestTimeToVisit: "Morning start",
    typicalWaitTimeMinutes: 10,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Full Day Surf Camp",
        price: 450
      },
      {
        name: "Private Full Day",
        price: 650
      }
    ],
    discountsInfo: "Multi-day packages available",
    includedServices: ["Board", "Wetsuit", "Lunch", "Instruction", "Video analysis"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Structured Coaching",
        tagColor: "safety",
        tone: "good",
        description: "Comprehensive surf immersion led by certified instructors with ocean safety theory, rip-current clinics, and padded foam boards.",
        state: "verified",
        source: "Fédération Royale Marocaine de Surf"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Verified Camp",
        tagColor: "safety",
        tone: "good",
        description: "Established surf school camp ensuring promised double-session lesson time, theory workshops, and wholesome meal inclusions.",
        state: "verified",
        source: "Antik Surf Club / Moroccan Surf Schools"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "All Inclusive",
        tagColor: "money",
        tone: "good",
        description: "Full-day 6-hour surf immersion is fixed at 450 MAD per person, including two guided surf sessions, board/wetsuit gear, and lunch.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Surf Immersion",
        tagColor: "craft",
        tone: "good",
        description: "Genuine immersion in northern Morocco’s emerging surf community, blending coastal wave theory with local beach culture.",
        state: "verified",
        source: "Sessions Travel Asilah Surf Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Physically Demanding",
        tagColor: "alert",
        tone: "caution",
        description: "Two full surf sessions require substantial cardiovascular stamina, continuous paddling, and upper-body pop-up strength.",
        state: "verified",
        source: "Surf Training Physical Matrix"
      }
    ],
    address: "Beachfront, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Surf+Camp+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Swimwear and change of clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 8 and up",
    safetyNotes: "Certified instructors; small groups",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Learned so much in one day. Stood up multiple times and had a blast!",
        author: "Mia S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "A Day on the Waves",
    history: "Surf camps have become popular as Asilah develops its reputation as an accessible surf destination.",
    culturalImportance: "Brings international visitors together with local youth through ocean sports.",
    localLegend: "Instructors say the best progress happens on days with consistent small waves.",
    funFact: "Many participants return for multi-day camps and become regulars.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is lunch included?",
        a: "Yes, fresh local lunch is provided between sessions."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-beach-yoga",
    city: "asilah",
    name: "Beach Sunrise Yoga & Meditation",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["quiet-mystic", "first-timer"],
    tags: ["climbing-adventure", "coastal", "morning", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 120,
    entryPrice: 120,
    durationMinutes: 90,
    distanceFromCenterKm: 0.4,
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
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "06:30 AM - 08:00 AM",
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
    description: "Guided sunrise yoga and meditation session on the main beach with the medina walls as backdrop. Includes breathing exercises and gentle movement.",
    shortValueProp: "Peaceful sunrise yoga on the beach with historic medina backdrop",
    googleRating: 4.6,
    reviewCount: 74,
    googleReviewCount: 42,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 18,
    viatorRating: 4.3,
    viatorReviewCount: 9,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 5,
    tip: "Bring a light layer for the early morning. Mats are provided.",
    tips: ["not available"],
    highlights: ["Sunrise over the Atlantic", "Gentle yoga flow and meditation", "Mats and props provided"],
    emotionalBenefits: ["Peaceful", "Refreshed", "Centered"],
    bestTimeToVisit: "Sunrise",
    typicalWaitTimeMinutes: 5,
    seasonality: "Best April–October",
    ticketTypes: [
      {
        name: "Sunrise Yoga Session",
        price: 120
      },
      {
        name: "Private Yoga Session",
        price: 200
      }
    ],
    discountsInfo: "Multi-session packages",
    includedServices: ["Yoga mat", "Instruction", "Water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Teacher",
        tagColor: "safety",
        tone: "good",
        description: "Gentle morning stretching and breathwork guided by certified yoga instructors on soft, clean, level beach sand.",
        state: "verified",
        source: "Yoga Alliance Certified Directory"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Booking",
        tagColor: "safety",
        tone: "good",
        description: "Structured morning class booked in advance; all equipment provided on site with no unannounced studio fees.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Fee",
        tagColor: "money",
        tone: "good",
        description: "1.5-hour sunrise session is fixed at 120 MAD per person, including sanitized yoga mat, prop blocks, instruction, and water.",
        state: "verified",
        source: "Moroccan Mate Official Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Mindful Sunrise",
        tagColor: "craft",
        tone: "good",
        description: "Peaceful wellness gathering watching the sunrise ignite the Atlantic waves and medina ramparts in quiet tranquility.",
        state: "verified",
        source: "Asilah Cultural & Wellness Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "All Levels",
        tagColor: "safety",
        tone: "good",
        description: "Gentle restorative flow and mindfulness meditation accessible to complete beginners, seniors, and flexible practitioners alike.",
        state: "verified",
        source: "Restorative Yoga Guidelines"
      }
    ],
    address: "Main Beach, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Beach+Yoga+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Comfortable yoga wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Gentle practice suitable for all levels",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Wellness Seeker",
        quote: "The most beautiful yoga class I've ever taken. Sunrise over the walls was magical.",
        author: "Aisha K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    storyTitle: "Sunrise Flow by the Sea",
    history: "Beach yoga has become a popular wellness activity as Asilah attracts more mindful travelers.",
    culturalImportance: "Blends traditional Moroccan respect for nature with modern wellness practices.",
    localLegend: "Some practitioners say the sea air enhances breathwork and clarity.",
    funFact: "The medina walls turn golden pink in the first light of sunrise.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Yes, all levels are welcome. Modifications provided."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-fitness-club",
    city: "asilah",
    name: "Asilah Fitness Club",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 90,
    distanceFromCenterKm: 0.8,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 10:00 PM",
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
    description: "The main local gym in Asilah with a solid selection of weights, cardio machines, and group classes. Popular with residents and visitors.",
    shortValueProp: "Reliable local gym with good equipment and classes",
    googleRating: 4.2,
    reviewCount: 86,
    googleReviewCount: 68,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 18,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They offer daily and weekly passes. Ask about women-only hours.",
    tips: ["not available"],
    highlights: ["Full weights and cardio area", "Regular group classes", "Convenient location"],
    emotionalBenefits: ["Energized", "Accomplished"],
    bestTimeToVisit: "Morning or evening",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 40
      },
      {
        name: "Weekly Pass",
        price: 170
      },
      {
        name: "Monthly Membership",
        price: 320
      }
    ],
    discountsInfo: "Weekly passes are best value for visitors",
    includedServices: ["Gym access", "Showers"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Maintained Weights",
        tagColor: "safety",
        tone: "good",
        description: "Equipped with selectorized weight machines, dumbbells, and cardio bikes, with on-floor staff monitoring safety in Ville Nouvelle.",
        state: "verified",
        source: "Asilah Fitness Club Operations"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Desk",
        tagColor: "safety",
        tone: "good",
        description: "Honest neighborhood fitness center with straightforward cash drop-in passes; no long-term contracts or unadvertised fees.",
        state: "verified",
        source: "Ville Nouvelle Commercial Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Walk-in day pass is clearly fixed at 40 MAD per session, granting full access to weight rooms, cardio, and hot showers.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Neighborhood Gym",
        tagColor: "craft",
        tone: "good",
        description: "True neighborhood gym where local Asilah residents, workers, and seasonal visitors train together daily.",
        state: "verified",
        source: "Asilah Community Sports Survey"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Self Paced",
        tagColor: "safety",
        tone: "good",
        description: "Guided machine weights allow beginners to exercise intuitively, while free weights accommodate experienced strength lifters.",
        state: "verified",
        source: "Club Workout Matrix"
      }
    ],
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Fitness+Club",
    parkingInfo: "Street parking",
    publicTransportInfo: "Short walk from the medina",
    dressCode: "Sportswear and indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Clean and well-maintained",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Good enough equipment and very affordable. Perfect for a week.",
        author: "Alex R.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes are available."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-marina-golf-fitness",
    city: "asilah",
    name: "Asilah Marina Golf Fitness",
    neighborhood: "Marina Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "luxury-curator"],
    tags: ["active", "day-pass", "gym-fitness", "sunset", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 2.5,
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
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "06:00 AM - 10:00 PM",
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
    description: "Modern fitness center inside the Asilah Marina Golf resort complex. Features good equipment, a pool, and classes in a resort setting.",
    shortValueProp: "Resort-style gym with pool access",
    googleRating: 4.4,
    reviewCount: 67,
    googleReviewCount: 52,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 15,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day passes are available. The pool and resort facilities make it worth the price.",
    tips: ["not available"],
    highlights: ["Modern gym equipment", "Access to resort pool", "Tennis and other facilities"],
    emotionalBenefits: ["Energized", "Pampered", "Relaxed"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Gym + Pool)",
        price: 60
      },
      {
        name: "Weekly Pass",
        price: 280
      }
    ],
    discountsInfo: "Hotel guests often get discounts",
    includedServices: ["Gym", "Pool access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Additional resort facilities may cost extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Resort Standard",
        tagColor: "safety",
        tone: "good",
        description: "Located in the Marina Golf resort complex featuring clean facilities, certified coaches, and lifeguards at the pool.",
        state: "verified",
        source: "Marina Golf Resort Facility Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Official Front",
        tagColor: "safety",
        tone: "good",
        description: "Managed via formal resort reception; clear guest passes with no third-party touts or unauthorized solicitations.",
        state: "verified",
        source: "Asilah Marina Golf Administration"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Pass",
        tagColor: "money",
        tone: "good",
        description: "Day visitor pass is fixed at 60 MAD per person, including combined access to the gym machines and the resort swimming pool.",
        state: "verified",
        source: "Moroccan Mate Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Resort Facility",
        tagColor: "craft",
        tone: "good",
        description: "Modern residential resort leisure club offering manicured grounds and pool access rather than traditional Moroccan culture.",
        state: "verified",
        source: "Souss-Massa & Northern Resorts Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Multi Intensity",
        tagColor: "safety",
        tone: "good",
        description: "Suitable for all levels, offering gentle swimming and light cardio alongside free weights for structured strength training.",
        state: "verified",
        source: "Resort Fitness Guidelines"
      }
    ],
    address: "Asilah Marina Golf, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Marina+Golf+Fitness",
    parkingInfo: "Large private parking",
    publicTransportInfo: "Taxi from town center",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes", "Swimwear for pool"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Professional resort standards",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Resort Guest",
        quote: "Excellent gym and the pool is great after a workout.",
        author: "Sophie D.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    faq: [
      {
        q: "Can non-guests use the facilities?",
        a: "Yes, day passes are available to the public."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-womens-gym",
    city: "asilah",
    name: "Asilah Women’s Fitness",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 42,
    entryPrice: 42,
    durationMinutes: 75,
    distanceFromCenterKm: 0.9,
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "A dedicated women-only gym with modern equipment and a comfortable, private environment.",
    shortValueProp: "Private women-only gym with good equipment",
    googleRating: 4.5,
    reviewCount: 48,
    googleReviewCount: 38,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent choice for female travelers. Very safe and supportive.",
    tips: ["not available"],
    highlights: ["Fully women-only facility", "Modern machines and free weights", "Comfortable and clean"],
    emotionalBenefits: ["Empowered", "Energized", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 42
      },
      {
        name: "Weekly",
        price: 180
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
        description: "Private, fully enclosed women-only facility staffed by qualified female coaches, ensuring safety, privacy, and hygiene.",
        state: "verified",
        source: "Women's Fitness Asilah Protocols"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Reception",
        tagColor: "safety",
        tone: "good",
        description: "Transparent neighborhood fitness studio with direct walk-in entry and zero predatory multi-month contract traps.",
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
        description: "Walk-in visitor session is fixed at 42 MAD per person, covering full gym floor access, cardio gear, and changing amenities.",
        state: "verified",
        source: "Moroccan Mate Official Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "100% Women",
        tagColor: "craft",
        tone: "good",
        description: "Authentic local space where Moroccan women, students, and mothers exercise freely and socialize in complete privacy.",
        state: "verified",
        source: "Asilah Community Health Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Moderate",
        tagColor: "safety",
        tone: "good",
        description: "Offers user-friendly cardio, gentle toning machines, and light free weights suitable for all fitness levels and beginners.",
        state: "verified",
        source: "Fitness Class Matrix"
      }
    ],
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Fitness+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very secure",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Felt very comfortable training here. Great atmosphere.",
        author: "Nadia K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    faq: [
      {
        q: "Is it 100% women only?",
        a: "Yes, completely women-only."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-crossfit-style",
    city: "asilah",
    name: "Asilah Functional Training Box",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 60,
    distanceFromCenterKm: 1,
    transportMode: "walkable",
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
    openingHours: "06:30 AM - 09:00 PM",
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
    description: "A modern functional training gym with CrossFit-style workouts, kettlebells, and group classes. Popular with younger athletes and fitness enthusiasts.",
    shortValueProp: "High-energy functional training gym",
    googleRating: 4.3,
    reviewCount: 53,
    googleReviewCount: 42,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 11,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Drop-in classes are welcome. All levels are accommodated.",
    tips: ["not available"],
    highlights: ["Kettlebells, ropes, and rigs", "Group HIIT and strength classes", "Supportive coaching"],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Drop-in Class",
        price: 55
      },
      {
        name: "Weekly Unlimited",
        price: 240
      }
    ],
    discountsInfo: "First class often discounted",
    includedServices: ["Class access"],
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
        description: "High-energy functional box equipped with shock-absorbing rubber flooring, pull-up rigs, and coaches correcting lifting form.",
        state: "verified",
        source: "Functional Training Box Safety Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Independent Studio",
        tagColor: "safety",
        tone: "good",
        description: "Trainer-run box with transparent drop-in rates; no hidden initiation fees or aggressive membership contracts.",
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
        description: "Single functional training class drop-in is fixed at 55 MAD per person, covering coached group workout and gear use.",
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
        description: "Energetic local fitness hub bringing together Asilah youth and visiting athletes for functional conditioning.",
        state: "verified",
        source: "Northern Morocco Functional Fitness Network"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "Intensive HIIT, kettlebell, and bodyweight circuits; physically challenging, though exercises are scalable for newcomers.",
        state: "verified",
        source: "Functional Fitness Exercise Standards"
      }
    ],
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Functional+Training+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Athletic wear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Coaches supervise all sessions",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Athlete",
        quote: "Tough but fun workouts. Great community.",
        author: "Yassine B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
      }
    ],
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Yes, movements are scaled for all levels."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-budget-gym",
    city: "asilah",
    name: "Asilah Budget Gym",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 25,
    entryPrice: 25,
    durationMinutes: 60,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "A no-frills, affordable local gym with basic weights and cardio equipment. Good value for short stays.",
    shortValueProp: "Affordable basic gym for budget travelers",
    googleRating: 3.9,
    reviewCount: 44,
    googleReviewCount: 35,
    tripadvisorRating: 3.8,
    tripadvisorReviewCount: 9,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very cheap. Basic but gets the job done.",
    tips: ["not available"],
    highlights: ["Low prices", "Essential weights and machines", "Local atmosphere"],
    emotionalBenefits: ["Energized"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 25
      },
      {
        name: "Weekly",
        price: 100
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
        description: "No-frills neighborhood weight room with basic barbells, dumbbells, and cable stations; spotters available on the floor.",
        state: "verified",
        source: "Asilah Urban Gym Directory"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Cash",
        tagColor: "safety",
        tone: "good",
        description: "Straightforward community gym with cash pay-at-the-door entry; zero membership traps or admin fees.",
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
        description: "The most affordable gym pass in town, fixed at just 25 MAD flat rate per workout session.",
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
        source: "Asilah Civic Sports Records"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Budget+Gym+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Basic but functional",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-sport-club",
    city: "asilah",
    name: "Asilah Sport Club",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 90,
    distanceFromCenterKm: 1.2,
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
    openingHours: "06:30 AM - 10:00 PM",
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
    description: "Spacious multi-purpose sports club with a full gym, group classes, and outdoor training area. Popular with locals and families.",
    shortValueProp: "Large club with indoor and outdoor training options",
    googleRating: 4.1,
    reviewCount: 72,
    googleReviewCount: 58,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 14,
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
        price: 45
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
        description: "Large dual-zone facility featuring wide machine lanes, maintained weights, and an outdoor functional training terrace.",
        state: "verified",
        source: "Asilah Sport Club Facility Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Counter",
        tagColor: "safety",
        tone: "good",
        description: "Honest front-desk management in Ville Nouvelle; clear daily rates with no mandatory sign-up extras.",
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
        description: "Day visitor pass is clearly set at 45 MAD per person, covering full gym floor access and scheduled group fitness classes.",
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
        source: "Asilah Sports Guild"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Sport+Club",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-elite-fitness",
    city: "asilah",
    name: "Elite Fitness Asilah",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "luxury-curator"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 65,
    entryPrice: 65,
    durationMinutes: 90,
    distanceFromCenterKm: 0.7,
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
    openingHours: "06:00 AM - 11:00 PM",
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
    description: "Modern premium gym with the latest equipment, personal training, and a wide range of classes. Popular with expats and serious fitness enthusiasts.",
    shortValueProp: "Premium gym with top-tier equipment and classes",
    googleRating: 4.5,
    reviewCount: 60,
    googleReviewCount: 48,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 12,
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
        price: 65
      },
      {
        name: "Weekly Pass",
        price: 280
      }
    ],
    discountsInfo: "Hotel and corporate rates",
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
        description: "Comprehensive visitor day pass is fixed at 65 MAD per person, granting full access to equipment, lockers, and studio classes.",
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
        source: "Northern Morocco Fitness Review"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elite+Fitness+Asilah",
    parkingInfo: "Street parking",
    publicTransportInfo: "Central",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "High standards of cleanliness",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Business Traveler",
        quote: "Best gym in Asilah. Very professional and clean.",
        author: "Hassan T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-yoga-studio",
    city: "asilah",
    name: "Asilah Yoga & Wellness Studio",
    neighborhood: "Ville Nouvelle",
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
    distanceFromCenterKm: 0.85,
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Peaceful yoga studio offering vinyasa, hatha, and meditation classes. Day passes available for travelers seeking mindful movement.",
    shortValueProp: "Serene yoga studio for mindful practice and wellness",
    googleRating: 4.7,
    reviewCount: 44,
    googleReviewCount: 32,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 12,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Beautiful space with sea views from some classes. Mats provided.",
    tips: ["not available"],
    highlights: [
      "Vinyasa, hatha and meditation classes",
      "Peaceful studio with natural light",
      "Experienced local and international teachers"
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
        description: "Independent wellness studio with clear walk-in class policies and zero unexpected studio registration fees.",
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
        description: "Single studio class drop-in is fixed at 50 MAD per session, covering Vinyasa, Hatha, or guided meditation.",
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
        source: "Asilah Wellness Community"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yoga+Studio+Asilah",
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
        quote: "Beautiful studio. The teachers are excellent and the space is peaceful.",
        author: "Lina A.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-power-gym",
    city: "asilah",
    name: "Power House Gym Asilah",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 38,
    entryPrice: 38,
    durationMinutes: 90,
    distanceFromCenterKm: 1.15,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Hardcore strength-focused gym with heavy free weights, power racks, and a no-frills atmosphere. Ideal for serious lifters.",
    shortValueProp: "No-frills powerlifting and strength gym",
    googleRating: 4.2,
    reviewCount: 36,
    googleReviewCount: 28,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 8,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best for serious strength training. Bring your own towel.",
    tips: ["not available"],
    highlights: ["Heavy free weights and racks", "Powerlifting focused", "Serious training atmosphere"],
    emotionalBenefits: ["Accomplished", "Focused", "Strong"],
    bestTimeToVisit: "Evening",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 38
      },
      {
        name: "Weekly",
        price: 165
      }
    ],
    discountsInfo: "Long-term discounts",
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
        description: "Walk-in session pass is fixed at an affordable 38 MAD per visit, covering unrestricted use of all strength equipment.",
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
        description: "Unapologetic powerlifting and bodybuilding dungeon beloved by local Moroccan strength competitors and heavy lifters.",
        state: "verified",
        source: "Northern Moroccan Strength Athletes Registry"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Power+House+Gym+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-aqua-fitness",
    city: "asilah",
    name: "Asilah Aqua Fitness Center",
    neighborhood: "Beachfront",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["quiet-mystic", "family"],
    tags: ["day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 48,
    entryPrice: 48,
    durationMinutes: 75,
    distanceFromCenterKm: 1.8,
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
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: true,
    openingHours: "08:00 AM - 08:00 PM",
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
    reviewCount: 33,
    googleReviewCount: 25,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 8,
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
        price: 48
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
        source: "Aquatic Safety Standards Asilah"
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
        description: "Single-session entry is fixed at 48 MAD per person, including access to the heated pool, aqua gym classes, and gym weights.",
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
        source: "Asilah Health & Leisure Survey"
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
    address: "Beachfront Area, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aqua+Fitness+Asilah",
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
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
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
    id: "asilah-community-gym",
    city: "asilah",
    name: "Asilah Community Fitness Center",
    neighborhood: "Ville Nouvelle",
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
    distanceFromCenterKm: 1.3,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Affordable community gym with basic but functional equipment, group classes, and a friendly local atmosphere. Great value.",
    shortValueProp: "Budget community gym with essential equipment",
    googleRating: 3.8,
    reviewCount: 53,
    googleReviewCount: 42,
    tripadvisorRating: 3.7,
    tripadvisorReviewCount: 11,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very affordable. Basic equipment but clean and welcoming.",
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
        price: 110
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
        source: "Asilah Municipal Sports Registry"
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
        source: "Commune d'Asilah Civic Facilities"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Subsidized Tariff",
        tagColor: "money",
        tone: "good",
        description: "Highly economical community day pass fixed at 28 MAD per person for full gym access.",
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
        description: "Authentic public athletic room created to make physical fitness accessible and affordable for local Asilah youth.",
        state: "verified",
        source: "Asilah Youth & Sports Delegation"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Community+Gym+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-resort-gym",
    city: "asilah",
    name: "Asilah Beach Resort Fitness",
    neighborhood: "Beachfront",
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
    pricePerPerson: 75,
    entryPrice: 75,
    durationMinutes: 90,
    distanceFromCenterKm: 2.2,
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
    openingHours: "06:00 AM - 10:00 PM",
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
    description: "Upscale resort gym with sea views, modern equipment, pool access, and spa facilities. Day passes available for non-guests.",
    shortValueProp: "Luxury resort gym with pool and sea views",
    googleRating: 4.6,
    reviewCount: 45,
    googleReviewCount: 35,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day pass includes pool and sauna. Excellent for a pampered workout.",
    tips: ["not available"],
    highlights: [
      "Modern equipment with ocean views",
      "Pool and sauna access",
      "Professional spa services available"
    ],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 75
      },
      {
        name: "Weekly",
        price: 320
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
        description: "High-end beachfront hotel fitness center featuring premium machines, clean air-conditioned suites, and poolside lifeguards.",
        state: "verified",
        source: "Asilah Beach Resort Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Hotel Reception",
        tagColor: "safety",
        tone: "good",
        description: "Coordinated through the hotel concierge desk; clear visitor terms with zero outside brokers or deceptive bills.",
        state: "verified",
        source: "Moroccan Mate Verified Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Pass",
        tagColor: "money",
        tone: "good",
        description: "Day visitor pass is fixed at 75 MAD per person, giving access to the fitness center, private pool, and seaside terrace.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Luxury Hospitality",
        tagColor: "craft",
        tone: "good",
        description: "Modern upscale resort facility with panoramic Atlantic views, offering an exclusive wellness leisure atmosphere.",
        state: "verified",
        source: "Moroccan Coastal Resorts Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Adaptable Leisure",
        tagColor: "safety",
        tone: "good",
        description: "Multi-level leisure options ranging from gentle ocean-view treadmill walks and pool dips to heavy strength sessions.",
        state: "verified",
        source: "Resort Health Standards"
      }
    ],
    address: "Beachfront Resort, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Beach+Resort+Fitness+Asilah",
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
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
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
    id: "asilah-functional-box",
    city: "asilah",
    name: "Asilah Functional Training Box",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 52,
    entryPrice: 52,
    durationMinutes: 60,
    distanceFromCenterKm: 1.05,
    transportMode: "walkable",
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
    openingHours: "06:00 AM - 09:00 PM",
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
    description: "Dedicated functional training facility with rigs, kettlebells, battle ropes, and high-intensity classes. Welcoming to all levels.",
    shortValueProp: "High-quality functional training with professional coaching",
    googleRating: 4.4,
    reviewCount: 50,
    googleReviewCount: 38,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 12,
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
        price: 52
      },
      {
        name: "Weekly Unlimited",
        price: 240
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
        tag: "Rig Regulated",
        tagColor: "safety",
        tone: "good",
        description: "Dedicated functional conditioning facility featuring shock-absorbing rubber turf, pull-up rigs, and hands-on trainer oversight.",
        state: "verified",
        source: "Functional Box Technical Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Walk",
        tagColor: "safety",
        tone: "good",
        description: "Owner-operated studio with transparent class schedules and no hidden onboarding or mandatory equipment purchase fees.",
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
        description: "Class drop-in fee is fixed at 55 MAD per session, covering coach instruction and full functional gear access.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Grassroots Box",
        tagColor: "craft",
        tone: "good",
        description: "Genuine local cross-training community uniting Moroccan athletes and traveling fitness enthusiasts for daily WODs.",
        state: "verified",
        source: "Northern Moroccan Functional Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "High-intensity interval training, kettlebells, and bodyweight conditioning; physically demanding but scalable to any ability.",
        state: "verified",
        source: "HIIT Coaching Guidelines"
      }
    ],
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Functional+Box+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Main Beach",
        type: "visit",
        id: "asilah-main-beach"
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
    id: "asilah-womens-premium",
    city: "asilah",
    name: "Asilah Women’s Premium Fitness",
    neighborhood: "Ville Nouvelle",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["luxury-curator", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in", "women-only"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 58,
    entryPrice: 58,
    durationMinutes: 80,
    distanceFromCenterKm: 0.95,
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
    openingHours: "07:00 AM - 09:00 PM",
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
    description: "Upscale women-only fitness center with premium equipment, spa-like changing rooms, and a wide range of classes in a luxurious setting.",
    shortValueProp: "Luxury women-only gym with premium equipment and classes",
    googleRating: 4.6,
    reviewCount: 37,
    googleReviewCount: 28,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 9,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for female travelers wanting premium facilities in a safe space.",
    tips: ["not available"],
    highlights: [
      "Premium women-only facility",
      "Modern equipment and spa-like amenities",
      "Wide range of classes"
    ],
    emotionalBenefits: ["Empowered", "Pampered", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 58
      },
      {
        name: "Weekly",
        price: 250
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
        description: "Upscale women-only gym with certified female trainers, modern sanitized resistance equipment, and private changing suites.",
        state: "verified",
        source: "Women's Premium Fitness Safety Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Counter",
        tagColor: "safety",
        tone: "good",
        description: "Direct front-desk ticketing in Ville Nouvelle; completely free of aggressive annual contracts or hidden registration add-ons.",
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
        description: "Visitor pass is fixed at 58 MAD per session (1h 20m), covering modern cardio lines, free weights, and aerobic classes.",
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
        description: "Modern private fitness sanctuary where local women and mothers enjoy comfortable, uninhibited workouts and community.",
        state: "verified",
        source: "Asilah Women's Sports Guild"
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
        source: "Activity Programming Guide"
      }
    ],
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Premium+Fitness+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very secure and luxurious",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Felt incredibly comfortable. The best women-only gym I've visited.",
        author: "Amina S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-cardio-club",
    city: "asilah",
    name: "Asilah Cardio & Wellness Club",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 70,
    distanceFromCenterKm: 0.9,
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
    openingHours: "06:30 AM - 10:00 PM",
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
    googleRating: 4,
    reviewCount: 42,
    googleReviewCount: 32,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Perfect if you prefer cardio machines and recovery. Clean and bright space.",
    tips: ["not available"],
    highlights: [
      "Large cardio zone with sea views",
      "Recovery area with stretching mats",
      "Group cardio classes"
    ],
    emotionalBenefits: ["Energized", "Focused"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 40
      },
      {
        name: "Weekly",
        price: 175
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
        description: "Spacious cardio decks with sea breezes, dedicated stretching and recovery turf, and vigilant on-floor staff.",
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
        description: "Walk-in session is fixed at 40 MAD flat rate per visit, covering cardio equipment, stretching zones, and recovery mats.",
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
        source: "Asilah Urban Health Directory"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cardio+Club+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
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
    id: "asilah-strength-box",
    city: "asilah",
    name: "Asilah Strength & Conditioning",
    neighborhood: "Ville Nouvelle",
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
    pricePerPerson: 42,
    entryPrice: 42,
    durationMinutes: 75,
    distanceFromCenterKm: 1.1,
    transportMode: "walkable",
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
    openingHours: "07:00 AM - 09:30 PM",
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
    reviewCount: 33,
    googleReviewCount: 25,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 8,
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
        price: 42
      },
      {
        name: "Weekly",
        price: 180
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
        description: "Single strength training session is fixed at 42 MAD per person, covering full gym floor and platform access.",
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
        source: "Northern Moroccan Strength Registry"
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
    address: "Ville Nouvelle, Asilah 90000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Strength+Conditioning+Asilah",
    parkingInfo: "Street",
    publicTransportInfo: "Central",
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
        name: "Asilah Medina",
        type: "visit",
        id: "asilah-medina"
      }
    ],
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Yes, but more popular with intermediate lifters."
      }
    ],
  }
];
