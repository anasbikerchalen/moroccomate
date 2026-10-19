/**
 * =========================================================================
 * [AGADIR] THINGS TO DO — SPORT & ACTIVE
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

// ══ LISTINGS — SPORT & ACTIVE ══
export const agadirSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-taghazout-surf",
    city: "agadir",
    name: "Taghazout Surf Lesson",
    neighborhood: "Taghazout",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: [
      "active",
      "authentic",
      "climbing-adventure",
      "coastal",
      "nature",
      "private",
      "sunset",
      "surf-kitesurf"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20,
    pricePerPerson: 200,
    entryPrice: 200,
    durationMinutes: 180,
    distanceFromCenterKm: 18,
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
    hasWiFi: true,
    nearBeach: true,
    goodForRain: false,
    openingHours: "Lessons run 09:00 AM - 05:00 PM (Subject to tide changes)",
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
    description: "A beginner-friendly surf lesson on the rolling waves of Taghazout Bay, a world-famous surfing destination located just 15 minutes north of Agadir.",
    shortValueProp: "Catch your very first wave in Taghazout, North Africa's legendary surf capital",
    googleRating: 4.8,
    reviewCount: 732,
    googleReviewCount: 337,
    tripadvisorRating: 4.8,
    tripadvisorReviewCount: 190,
    viatorRating: 4.9,
    viatorReviewCount: 120,
    getyourguideRating: 4.8,
    getyourguideReviewCount: 85,
    tip: "Beginners should book their lessons at Panorama Beach, as the sandy bottom and gentle break provide a safer environment to stand up on the board.",
    tips: ["not available"],
    highlights: [
      "Learn surfing fundamentals with a highly certified local Moroccan surf coach",
      "All high-quality gear including board, rashguard, and warm wetsuit provided",
      "Enjoy gentle, shallow sandy beach break waters ideal for first-timers"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Thrilled"],
    bestTimeToVisit: "Morning around 10:00 AM for clean glassy waves and low wind",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best large waves are November to March)",
    ticketTypes: [
      {
        name: "Half-Day Surf Lesson",
        price: 200
      },
      {
        name: "Full-Day Experience",
        price: 350
      }
    ],
    discountsInfo: "Discounts available for groups of 3 or more.",
    includedServices: ["Surfboard and wetsuit rental", "Professional coaching instruction", "Beach transport"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None; all core surf rentals are fully covered",
    address: "Route de Taghazout, Coastal Highway, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Taghazout+Beach",
    parkingInfo: "Dedicated dirt spaces along Taghazout beach (5 MAD)",
    publicTransportInfo: "Easily reached by collective shared taxi or local bus route 32",
    dressCode: "Swimwear under wetsuits; bring loose warm clothes for after",
    equipmentNeeded: ["Swimwear", "Sunscreen (SPF 50+)", "Beach towel", "Water bottle"],
    fitnessLevel: "Active (Requires basic swimming agility and torso strength)",
    ageRestrictions: "Ages 6 and up welcome; kids must be comfortable in water",
    safetyNotes: "Always follow coach instructions; stay alert for nearby boards",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Active Nomad",
        quote: "The coaches are so patient! I managed to stand up on my very first wave. Unforgettable experience.",
        author: "Liam H.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Devil's Rock",
        type: "visit",
        id: "agadir-devils-rock"
      }
    ],
    storyTitle: "The Pioneers of the Atlantic Swell",
    history: "Taghazout was originally a tranquil fishing outpost. In the late 1960s and 1970s, international surfers traveling down Morocco's Atlantic coast discovered its world-class point breaks, transforming the village into North Africa's absolute surfing capital.",
    culturalImportance: "Surfing has become the core lifestyle and economic driver of the village, fostering a unique blend of local Berber maritime culture and international surf-nomad lifestyle.",
    localLegend: "Local elders recount how the spirits of the Atlantic ocean protect the surfers riding the massive waves at Anchor Point.",
    funFact: "The coastline here enjoys over 330 days of sunshine a year, making Taghazout a premium year-round surfing destination.",
    officialWebsite: "https://www.taghazoutsurfschool.com",
    ticketWebsite: "https://www.taghazoutsurfschool.com/book",
    faq: [
      {
        q: "Do I need to know how to swim?",
        a: "Basic swimming ability is required for safety, though lessons are held in shallow waist-deep water."
      }
    ],
    contactPhone: "+212 661-223344",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-city-sport",
    city: "agadir",
    name: "City Sport Agadir",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 90,
    distanceFromCenterKm: 1.2,
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
    goodForRain: true,
    openingHours: "07:00 AM - 10:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "gym-fitness",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A fully equipped modern fitness center in central Agadir. Highly popular among digital nomads, expats, and locals for its comprehensive weight room, cardio zones, and friendly community vibe.",
    shortValueProp: "The premier local gym for travelers and expats in central Agadir.",
    googleRating: 4.5,
    reviewCount: 170,
    googleReviewCount: 150,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 20,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They offer convenient single day passes and weekly membership options with no registration fee.",
    tips: ["not available"],
    highlights: [
      "Full free weight section with dumbbells, barbells, and squat racks",
      "Dedicated women-only hours and high-quality changing rooms",
      "Air-conditioned cardio zone and functional training turf"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Grounded"],
    bestTimeToVisit: "Mid-day (12:00 PM - 3:00 PM) to avoid the post-work rush",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 50
      },
      {
        name: "Weekly Membership",
        price: 200
      }
    ],
    discountsInfo: "Discounts available for monthly or long-term expat plans.",
    includedServices: ["Access to all gym weights and cardio areas", "Use of showers and locker rooms"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Expect to pay 10 MAD if you need to buy a water bottle or rent a towel",
    address: "Rue de Fes, Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Sport+Agadir",
    parkingInfo: "Street parking spaces along Rue de Fes (2 MAD/hr)",
    publicTransportInfo: "Easily reachable on foot from anywhere in Talborjt or central tourist zone.",
    dressCode: "Athletic workout clothing; clean indoor athletic shoes are mandatory",
    equipmentNeeded: ["Clean indoor athletic shoes", "Workout towel", "Water bottle"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up welcome",
    safetyNotes: "Day passes are paid in cash or local card; always wipe down equipment after use.",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Excellent gym! Wide range of equipment, clean spaces, and very affordable weekly pass for travelers.",
        author: "Alex R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Jardin d'Olhão",
        type: "visit",
        id: "agadir-jardin-olhao"
      }
    ],
    storyTitle: "Modern Fitness in Souss",
    history: "City Sport Agadir was established to provide the Souss region with a modern, high-caliber fitness facility, supporting the growing demand of both local fitness enthusiasts and the incoming digital nomad community.",
    culturalImportance: "Represents the modern, health-conscious lifestyle shift in urban Morocco, serving as a social and athletic hub in central Talborjt.",
    localLegend: "Expats tell stories of lifters who found their absolute focus and peak performance while training under the ocean breeze of Agadir.",
    funFact: "The gym features an open panoramic view of Talborjt's quiet street life, letting you train while observing the daily rhythm of the neighborhood.",
    officialWebsite: "https://www.citysportagadir.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there a ladies-only section?",
        a: "Yes, they offer dedicated women-only hours and a safe, private training environment."
      }
    ],
    contactPhone: "+212 528-825500",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-elite-club-spa",
    city: "agadir",
    name: "Elite Club & Spa",
    neighborhood: "Haut Founty",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "modern-nomad"],
    tags: ["active", "day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 3.5,
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
    goodForRain: true,
    openingHours: "06:00 AM - 11:00 PM (Daily)",
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
    description: "A premium 7000 m² modern fitness complex featuring a full gym, cross-training zone, indoor swimming pool, jacuzzi, sauna, and dedicated group class studios. Popular with expats, digital nomads, and locals seeking high-quality equipment and professional coaching.",
    shortValueProp: "Premium gym, pool and spa complex with everything you need for serious training",
    googleRating: 4.7,
    reviewCount: 580,
    googleReviewCount: 420,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 95,
    viatorRating: 4.4,
    viatorReviewCount: 40,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 25,
    tip: "Day passes are available at reception. Book group classes in advance during peak hours (5-8 PM). Women-only hours run 9 AM - 1 PM daily.",
    tips: ["not available"],
    highlights: [
      "State-of-the-art Technogym equipment and large free weights area",
      "Indoor heated swimming pool + jacuzzi and sauna",
      "Multiple daily group classes: Cross Training, RPM, TRX, Zumba"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Focused"],
    bestTimeToVisit: "Morning (07:00-10:00) or mid-afternoon (14:00-17:00)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 60
      },
      {
        name: "Weekly Pass",
        price: 280
      },
      {
        name: "Monthly Membership",
        price: 650
      }
    ],
    discountsInfo: "10% discount for students and long-stay digital nomads with proof.",
    includedServices: ["Full gym access", "Pool, jacuzzi & sauna", "Group class participation"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD or bring your own. Locker key deposit 20 MAD.",
    address: "Haut Founty, Avenue des FAR, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elite+Club+Spa+Agadir",
    parkingInfo: "Large private parking lot (free for members and day-pass holders)",
    publicTransportInfo: "Petit taxi from beach or marina (approx. 15-20 MAD)",
    dressCode: "Clean athletic clothing and indoor sports shoes required",
    equipmentNeeded: ["Workout clothes", "Indoor shoes", "Towel (or rent)"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Professional staff on floor at all times; clean and well-maintained",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Best gym in Agadir by far. Clean, modern equipment and great pool for recovery.",
        author: "Alex R.",
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
    faq: [
      {
        q: "Do you offer day passes?",
        a: "Yes, day passes are available at reception for 60 MAD."
      },
      {
        q: "Are there women-only hours?",
        a: "Yes, dedicated women-only hours daily from 9:00 AM to 1:00 PM."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-club-narjisse",
    city: "agadir",
    name: "Club Narjisse Agadir",
    neighborhood: "Haut Founty",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "family"],
    tags: ["active", "day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 90,
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
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: true,
    openingHours: "06:30 AM - 10:30 PM (Daily)",
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
    description: "Large multi-sport club with separate 500 m² women-only fitness area and 1000 m² mixed gym. Features two swimming pools, mini-football field, sauna, and a wide range of group fitness classes on Technogym equipment.",
    shortValueProp: "Spacious gym with dedicated women’s area, pools and multi-sport facilities",
    googleRating: 4.5,
    reviewCount: 428,
    googleReviewCount: 310,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 70,
    viatorRating: 4.2,
    viatorReviewCount: 30,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 18,
    tip: "The women-only section is excellent and less crowded. Day passes include access to both pools.",
    tips: ["not available"],
    highlights: [
      "Separate 500 m² women-only fitness zone with full equipment",
      "Two swimming pools (indoor + outdoor) and mini-football field",
      "Wide range of group classes: Body Pump, Zumba, Pilates, RPM"
    ],
    emotionalBenefits: ["Energized", "Empowered", "Social"],
    bestTimeToVisit: "Early morning or late afternoon",
    typicalWaitTimeMinutes: 8,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 55
      },
      {
        name: "Weekly Pass",
        price: 250
      },
      {
        name: "Monthly Membership",
        price: 580
      }
    ],
    discountsInfo: "Family packages and couple discounts available.",
    includedServices: ["Gym access", "Pool access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Sauna access included. Towel rental 15 MAD.",
    address: "Haut Founty, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Club+Narjisse+Agadir",
    parkingInfo: "Large dedicated parking area (free)",
    publicTransportInfo: "Accessible by petit taxi or local bus",
    dressCode: "Sportswear and clean indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor sports shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 14 and up (kids club available)",
    safetyNotes: "Well-staffed and secure facility with separate changing areas",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Great for couples and families. My wife loves the women-only section.",
        author: "Mehdi K.",
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
    faq: [
      {
        q: "Is there a women-only section?",
        a: "Yes, a full 500 m² women-only fitness area."
      },
      {
        q: "Can I use the pools with a day pass?",
        a: "Yes, day passes include access to both swimming pools."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-city-club-talborjt",
    city: "agadir",
    name: "City Club Talborjt",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 40,
    entryPrice: 40,
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
    goodForRain: true,
    openingHours: "07:00 AM - 10:00 PM (Daily)",
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
    description: "Popular affordable neighborhood gym favored by locals, expats and digital nomads. Offers a solid free-weights area, cardio machines, and multiple daily group fitness classes in a friendly, no-frills environment.",
    shortValueProp: "Affordable, well-equipped local gym with strong community vibe",
    googleRating: 4.4,
    reviewCount: 369,
    googleReviewCount: 280,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 55,
    viatorRating: 4,
    viatorReviewCount: 22,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 12,
    tip: "Excellent value for short stays. Ask about weekly passes directly at reception.",
    tips: ["not available"],
    highlights: [
      "Large free weights and machine area",
      "Daily group classes including Zumba and strength training",
      "Convenient central location in Talborjt"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Grounded"],
    bestTimeToVisit: "Mid-morning or early evening",
    typicalWaitTimeMinutes: 3,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 40
      },
      {
        name: "Weekly Pass",
        price: 180
      },
      {
        name: "Monthly Membership",
        price: 380
      }
    ],
    discountsInfo: "Weekly passes are the best value for visitors.",
    includedServices: ["Full gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Locker rental 5 MAD. Bring your own towel.",
    address: "Rue de Fes, Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Club+Talborjt+Agadir",
    parkingInfo: "Street parking available nearby",
    publicTransportInfo: "Walkable from most central hotels",
    dressCode: "Clean gym clothes and indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor sports shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Busy but friendly atmosphere; equipment is well maintained",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Super affordable and good enough equipment. Perfect for a week.",
        author: "Laura M.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Jardin d'Olhão",
        type: "visit",
        id: "agadir-jardin-olhao"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes cost 40 MAD."
      },
      {
        q: "Are there women-only hours?",
        a: "Yes, women-only hours from 10:00 AM to 2:00 PM."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-gofit-cross",
    city: "agadir",
    name: "GOFIT CROSS",
    neighborhood: "Tilila",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 70,
    entryPrice: 70,
    durationMinutes: 60,
    distanceFromCenterKm: 5.8,
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
    goodForRain: true,
    openingHours: "06:00 AM - 09:00 PM (Daily)",
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
    description: "Specialized CrossFit and functional training box offering high-intensity group workouts, Olympic lifting, and conditioning classes. Modern facility popular with serious athletes and fitness enthusiasts.",
    shortValueProp: "High-intensity CrossFit box with professional coaching and strong community",
    googleRating: 4.8,
    reviewCount: 211,
    googleReviewCount: 145,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 38,
    viatorRating: 4.5,
    viatorReviewCount: 18,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 10,
    tip: "Drop-in classes are very welcoming. Scale options are always offered for all levels.",
    tips: ["not available"],
    highlights: [
      "Full CrossFit rig with Olympic lifting platforms",
      "Daily WODs and skill classes",
      "Supportive coaching for all fitness levels"
    ],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning classes (07:00 or 08:30)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Class Drop-in",
        price: 70
      },
      {
        name: "Weekly Unlimited",
        price: 320
      },
      {
        name: "Monthly Membership",
        price: 720
      }
    ],
    discountsInfo: "First class often free for new visitors.",
    includedServices: ["Class participation", "Use of all equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Bring your own water bottle.",
    address: "IMM BORJ NAJAH, Tilila, Agadir",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=GOFIT+CROSS+Agadir",
    parkingInfo: "Street parking in front of the building",
    publicTransportInfo: "Petit taxi from center (approx. 25 MAD)",
    dressCode: "Athletic wear suitable for high-intensity training",
    equipmentNeeded: ["Workout clothes", "Indoor training shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Coaches supervise all sessions; excellent safety standards",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Fitness Enthusiast",
        quote: "Great programming and really welcoming coaches. Best CrossFit in Agadir.",
        author: "Tom B.",
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
    faq: [
      {
        q: "Can beginners join?",
        a: "Yes, all classes have scaled options and coaches help everyone."
      },
      {
        q: "Do you offer day passes?",
        a: "Yes, single class drop-ins are available for 70 MAD."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-studio-fitness-talborjt",
    city: "agadir",
    name: "Studio Fitness Talborjt",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "first-timer"],
    tags: ["day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 45,
    entryPrice: 45,
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
    goodForRain: true,
    openingHours: "08:00 AM - 09:00 PM (Daily)",
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
    description: "Friendly neighborhood fitness studio with a focus on group classes and a compact but well-equipped weight area. Popular among women and expats for its welcoming atmosphere and convenient central location.",
    shortValueProp: "Cozy studio gym with excellent group classes and personal feel",
    googleRating: 4.3,
    reviewCount: 230,
    googleReviewCount: 165,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 42,
    viatorRating: 4,
    viatorReviewCount: 15,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 8,
    tip: "Great for beginners. Many classes are in French but instructors are patient and will translate.",
    tips: ["not available"],
    highlights: [
      "Daily Zumba, Pilates, and strength classes",
      "Compact but quality free weights section",
      "Very welcoming for women and first-timers"
    ],
    emotionalBenefits: ["Energized", "Confident", "Social"],
    bestTimeToVisit: "Morning group classes",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 45
      },
      {
        name: "5-Class Pack",
        price: 180
      },
      {
        name: "Monthly Membership",
        price: 350
      }
    ],
    discountsInfo: "Multi-class packs offer good value for visitors.",
    includedServices: ["Gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major.",
    address: "Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Studio+Fitness+Talborjt+Agadir",
    parkingInfo: "Street parking",
    publicTransportInfo: "Very walkable",
    dressCode: "Comfortable workout clothes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Moderate",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Small and intimate space with good supervision",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Solo Female Traveler",
        quote: "Felt very comfortable here as a woman traveling alone. Classes were fun.",
        author: "Emma L.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Grande Mosquée Mohammed V",
        type: "visit",
        id: "agadir-grande-mosquee"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes are 45 MAD."
      },
      {
        q: "Are there women-only hours?",
        a: "Most daytime classes are women-only or mixed with many women attending."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-elide-fitness-club",
    city: "agadir",
    name: "Elide Fitness Club",
    neighborhood: "Drarga",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "combat-sports", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 90,
    distanceFromCenterKm: 7.5,
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
    goodForRain: true,
    openingHours: "07:00 AM - 10:00 PM (Daily)",
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
    description: "Dynamic full-service gym known for its boxing and combat sports area alongside traditional weight training. Features a strong community of locals and athletes with regular group fitness and martial arts sessions.",
    shortValueProp: "Full gym with dedicated boxing area and energetic atmosphere",
    googleRating: 4.5,
    reviewCount: 275,
    googleReviewCount: 195,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 48,
    viatorRating: 4.1,
    viatorReviewCount: 20,
    getyourguideRating: 4,
    getyourguideReviewCount: 12,
    tip: "Boxing classes are excellent. Ask about combining weights + boxing in one visit.",
    tips: ["not available"],
    highlights: [
      "Large boxing ring and heavy bag area",
      "Complete free weights and machines",
      "Regular boxing, kickboxing and fitness classes"
    ],
    emotionalBenefits: ["Energized", "Empowered", "Accomplished"],
    bestTimeToVisit: "Evening (17:00-20:00)",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 50
      },
      {
        name: "Weekly Pass",
        price: 220
      },
      {
        name: "Monthly Membership",
        price: 480
      }
    ],
    discountsInfo: "Discount for combining with personal training.",
    includedServices: ["Gym + boxing area access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Boxing gloves rental available.",
    address: "Drarga Road, Agadir",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elide+Fitness+Club+Agadir",
    parkingInfo: "Private parking available",
    publicTransportInfo: "Petit taxi from center (approx. 30 MAD)",
    dressCode: "Sportswear; boxing gloves recommended for combat area",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Trained instructors in both weights and boxing areas",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Boxing Fan",
        quote: "Loved the boxing classes. Great energy and good coaches.",
        author: "Youssef A.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Crocoparc Agadir",
        type: "visit",
        id: "agadir-crocoparc"
      }
    ],
    faq: [
      {
        q: "Can I try boxing without experience?",
        a: "Yes, beginner-friendly classes are offered daily."
      },
      {
        q: "Do you have day passes?",
        a: "Yes, day passes are 50 MAD."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-moov-up-fitness",
    city: "agadir",
    name: "MOOV'UP Fitness Club",
    neighborhood: "Secteur Touristique",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 80,
    distanceFromCenterKm: 2.8,
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
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: true,
    openingHours: "06:30 AM - 10:00 PM (Daily)",
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
    description: "Modern multi-activity fitness club with excellent group class programming, a solid weight room, and a relaxed vibe. Located close to the beach making it convenient for tourists and hotel guests.",
    shortValueProp: "Well-equipped gym with great classes near the beach",
    googleRating: 4.4,
    reviewCount: 238,
    googleReviewCount: 175,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 35,
    viatorRating: 4.1,
    viatorReviewCount: 18,
    getyourguideRating: 4,
    getyourguideReviewCount: 10,
    tip: "Many hotel guests use day passes here. The beach is only a 10-minute walk away.",
    tips: ["not available"],
    highlights: [
      "Modern cardio and strength equipment",
      "Popular group classes (Zumba, Body Attack, Yoga)",
      "Convenient location near tourist hotels"
    ],
    emotionalBenefits: ["Energized", "Relaxed", "Social"],
    bestTimeToVisit: "Late afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 55
      },
      {
        name: "Weekly Pass",
        price: 240
      },
      {
        name: "Monthly Membership",
        price: 520
      }
    ],
    discountsInfo: "Hotel guest discounts often available.",
    includedServices: ["Full gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel service available.",
    address: "Secteur Touristique, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MOOV+UP+Fitness+Agadir",
    parkingInfo: "Dedicated parking",
    publicTransportInfo: "Easy taxi access from beach area",
    dressCode: "Athletic wear",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Clean facility with attentive staff",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Hotel Guest",
        quote: "Perfect location. I went every morning during my stay.",
        author: "Sarah T.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Agadir Beach",
        type: "visit",
        id: "agadir-beach-main"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes cost 55 MAD."
      },
      {
        q: "Is there a pool?",
        a: "No pool, but excellent gym and class facilities."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-crossfit-universiapolis",
    city: "agadir",
    name: "CrossFit Agadir - Universiapolis",
    neighborhood: "Tilila",
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
    pricePerPerson: 75,
    entryPrice: 75,
    durationMinutes: 60,
    distanceFromCenterKm: 6.2,
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
    goodForRain: true,
    openingHours: "06:30 AM - 08:30 PM (Mon-Sat)",
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
    description: "Official CrossFit affiliate located on the Universiapolis university campus. Offers structured programming, Olympic lifting, gymnastics, and metabolic conditioning in a bright, professional space.",
    shortValueProp: "Official CrossFit box with high-quality coaching on campus",
    googleRating: 4.7,
    reviewCount: 142,
    googleReviewCount: 98,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 25,
    viatorRating: 4.3,
    viatorReviewCount: 12,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 7,
    tip: "University location means it can be quieter during exam periods. Excellent coaching.",
    tips: ["not available"],
    highlights: [
      "Full CrossFit affiliate with competition rigs",
      "Certified coaches with strong programming",
      "Clean and spacious training area"
    ],
    emotionalBenefits: ["Accomplished", "Energized", "Challenged"],
    bestTimeToVisit: "Morning classes",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Class Drop-in",
        price: 75
      },
      {
        name: "3-Day Pass",
        price: 190
      },
      {
        name: "Monthly Membership",
        price: 780
      }
    ],
    discountsInfo: "Student rates available.",
    includedServices: ["Class access", "Equipment use"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None.",
    address: "Universiapolis Campus, Tilila, Agadir",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CrossFit+Agadir+Universiapolis",
    parkingInfo: "Free campus parking",
    publicTransportInfo: "Petit taxi or shared taxi",
    dressCode: "Athletic clothing for high intensity training",
    equipmentNeeded: ["Workout clothes", "Training shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Very high coaching standards and safety focus",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "CrossFit Athlete",
        quote: "One of the best boxes I’ve visited in Morocco. Great community.",
        author: "Lucas P.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Paradise Valley",
        type: "visit",
        id: "agadir-paradise-valley"
      }
    ],
    faq: [
      {
        q: "Do you accept drop-ins?",
        a: "Yes, drop-in classes are welcome for 75 MAD."
      },
      {
        q: "Is it suitable for beginners?",
        a: "Yes, all levels are coached with scalable movements."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-hydro-gym-pool",
    city: "agadir",
    name: "Hydro Gym & Aqua Center",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "seniors", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["quiet-mystic", "family"],
    tags: ["day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 70,
    distanceFromCenterKm: 1.4,
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
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: true,
    openingHours: "08:00 AM - 08:00 PM (Daily)",
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
    description: "Specialized fitness and aquatic center focused on swimming, aqua gym, and water-based training alongside a traditional gym area. Popular with seniors, rehabilitation clients, and those who prefer low-impact training.",
    shortValueProp: "Specialized aquatic fitness center with pool and gym",
    googleRating: 4.2,
    reviewCount: 164,
    googleReviewCount: 120,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 28,
    viatorRating: 3.9,
    viatorReviewCount: 10,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 6,
    tip: "Aqua gym classes are excellent for joints. The indoor pool is heated year-round.",
    tips: ["not available"],
    highlights: [
      "Indoor heated swimming pool for aqua classes",
      "Full gym area with machines and weights",
      "Low-impact training and rehabilitation focus"
    ],
    emotionalBenefits: ["Relaxed", "Energized", "Grounded"],
    bestTimeToVisit: "Morning (aqua classes)",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 45
      },
      {
        name: "Pool + Gym Day Pass",
        price: 45
      },
      {
        name: "Monthly Membership",
        price: 380
      }
    ],
    discountsInfo: "Senior and student discounts available.",
    includedServices: ["Pool access", "Gym access", "Aqua classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Swim cap may be required (available for purchase).",
    address: "Talborjt, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hydro+Gym+Agadir",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable from central Talborjt",
    dressCode: "Swimwear for pool; athletic wear for gym",
    equipmentNeeded: ["Swimsuit", "Towel", "Workout clothes"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Lifeguard on duty at all times in pool area",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Senior Traveler",
        quote: "The aqua classes are fantastic. Gentle on my knees and very social.",
        author: "Fatima B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Musée de la Mémoire",
        type: "visit",
        id: "agadir-musee-memoire"
      }
    ],
    faq: [
      {
        q: "Is the pool heated?",
        a: "Yes, the indoor pool is heated year-round."
      },
      {
        q: "Do you have day passes?",
        a: "Yes, 45 MAD for full access to pool and gym."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "agadir-viva-fitness",
    city: "agadir",
    name: "Viva Fitness Agadir",
    neighborhood: "Ihchach",
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
    durationMinutes: 75,
    distanceFromCenterKm: 2.9,
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
    goodForRain: true,
    openingHours: "07:00 AM - 10:00 PM (Daily)",
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
    description: "Clean, modern neighborhood gym with a strong emphasis on functional training, group classes, and a comfortable women-only area. Known for its friendly staff and good value short-term memberships.",
    shortValueProp: "Clean modern gym with great women-only section and classes",
    googleRating: 4.3,
    reviewCount: 194,
    googleReviewCount: 140,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 32,
    viatorRating: 4,
    viatorReviewCount: 14,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 8,
    tip: "Very good for women travelers. The functional training area is popular.",
    tips: ["not available"],
    highlights: [
      "Dedicated women-only training zone",
      "Functional training area and full weights",
      "Daily group classes including yoga and HIIT"
    ],
    emotionalBenefits: ["Energized", "Empowered", "Social"],
    bestTimeToVisit: "Morning or early evening",
    typicalWaitTimeMinutes: 4,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 48
      },
      {
        name: "Weekly Pass",
        price: 210
      },
      {
        name: "Monthly Membership",
        price: 420
      }
    ],
    discountsInfo: "Weekly passes popular with visitors.",
    includedServices: ["Full gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD.",
    address: "Ihchach, Agadir 80000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Viva+Fitness+Agadir",
    parkingInfo: "Street parking",
    publicTransportInfo: "Petit taxi from beach (approx. 15 MAD)",
    dressCode: "Athletic clothing and indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Well-lit and secure with staff present",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Loved the women-only section. Clean and not intimidating.",
        author: "Nadia S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Traditional Hammam at Argan Palace",
        type: "visit",
        id: "agadir-argan-palace-hammam"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes are 48 MAD."
      },
      {
        q: "Are there women-only hours?",
        a: "Yes, full women-only section available all day."
      }
    ],
  }
];
