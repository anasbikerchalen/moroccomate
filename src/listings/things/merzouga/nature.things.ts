/**
 * =========================================================================
 * [MERZOUGA] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/merzouga/index.ts
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

// ══ LISTINGS — NATURE & ADVENTURE ══
export const merzougaNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-camel-trek",
    city: "merzouga",
    name: "Camel Trekking to Sunset in Erg Chebbi",
    neighborhood: "Erg Chebbi Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "adventure"],
    tags: ["authentic", "climbing-adventure", "desert", "instagrammable", "nature", "private", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 30,
    durationMinutes: 120,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Embark on a traditional camel caravan across the rolling golden dunes of Erg Chebbi, arriving at a scenic viewpoint just in time to watch the sun sink below the desert horizon.",
    images: [
      "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35",
      "https://images.unsplash.com/photo-1489493887462-402b72644d79"
    ],
    googleRating: 4.9,
    reviewCount: 1450,
    tip: "Wear long pants to prevent saddle chafing, and secure your camera in a sealable bag to protect it from fine desert dust.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Tethered Caravan",
        tagColor: "safety",
        tone: "good",
        description: "Camels walk in a single-file caravan led on foot by an experienced camelier; sturdy padded saddles with front handles are provided.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Vetted Itinerary",
        tagColor: "safety",
        tone: "good",
        description: "Book through established riads or licensed desert guides; ensure sunset dune stops and luggage handling are included in writing.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Rate",
        tagColor: "money",
        tone: "good",
        description: "Standard sunset rides cost 150–250 MAD (~€15–€25) per person; a 20–50 MAD tip for the camel handler is customary.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Nomadic Tradition",
        tagColor: "craft",
        tone: "good",
        description: "Genuine centuries-old mode of desert transport across Erg Chebbi, maintained by local Amazigh (Berber) handlers.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Hip Strain",
        tagColor: "alert",
        tone: "caution",
        description: "Low aerobic effort, but mounting, dismounting, and the wide rhythmic saddle sway can strain knees, hips, and lower back muscles.",
        state: "verified"
      }
    ],
    address: "Erg Chebbi Dunes Edge, Merzouga 52402",
    coordinates: {
      lat: 31.096088,
      lng: -4.010846
    },
    googleMapsUrl: "https://maps.google.com/?q=31.096088,-4.010846",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-quad-adventure",
    city: "merzouga",
    name: "Quad Biking & ATV Dune Adventure",
    neighborhood: "Merzouga Desert",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "desert", "instagrammable", "nature", "private", "sunset"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 45,
    durationMinutes: 120,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
    walkInOkay: false,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: false,
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
    description: "Experience a thrilling adrenaline rush as you navigate the steep sand crests and deep slip faces of Erg Chebbi on a high-power quad bike.",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
    ],
    googleRating: 4.9,
    reviewCount: 680,
    tip: "Book your ride for late afternoon to catch the soft \"golden hour\" lighting on the dunes while avoiding the daytime heat.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Protective Gear",
        tagColor: "alert",
        tone: "caution",
        description: "Helmets and goggles are mandatory, and rides follow an escort guide; rollover risks exist on steep dune crests if driven too fast.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Licensed Base",
        tagColor: "safety",
        tone: "good",
        description: "Book at reputable ATV centers with established vehicle garages; inspect brake and tire conditions before signing waivers.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Hourly Rate",
        tagColor: "money",
        tone: "good",
        description: "Clear rates range from 400–600 MAD (~€40–€60) per hour for a single quad, including fuel, safety gear, and guide accompaniment.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Modern Adrenaline",
        tagColor: "craft",
        tone: "caution",
        description: "Modern motorized recreational sport designed for speed and dune thrills rather than traditional Saharan cultural immersion.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Arm Fatigue",
        tagColor: "alert",
        tone: "caution",
        description: "Requires solid upper-body control, throttle grip endurance, and active balance to steer through shifting, soft desert sands.",
        state: "verified"
      }
    ],
    address: "Route de Taouz, Base Dunes, Merzouga 52402",
    coordinates: {
      lat: 31.100112,
      lng: -4.001907
    },
    googleMapsUrl: "https://maps.google.com/?q=31.100112,-4.001907",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-glamping",
    city: "merzouga",
    name: "Overnight Glamping in a Sahara Desert Camp",
    neighborhood: "Erg Chebbi Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury", "first-timer"],
    tags: ["authentic", "desert", "instagrammable", "nature", "private", "relaxed", "wellness"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 120,
    durationMinutes: 1440,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Spend an unforgettable Saharan night inside a fully equipped luxury tent featuring a private bathroom, hot water, gourmet dining, and live Berber music around a campfire.",
    images: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    googleRating: 4.9,
    reviewCount: 350,
    tip: "Even in the height of summer, desert temperatures drop significantly after sunset—be sure to pack a thick fleece jacket.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Fully Guarded",
        tagColor: "safety",
        tone: "good",
        description: "Camps feature round-the-clock on-site staff, enclosed heavy-canvas tents, private en-suite flush bathrooms, and hot running water.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Verified Tier",
        tagColor: "alert",
        tone: "caution",
        description: "Service levels vary widely between basic bivouacs and true luxury camps; inspect verified traveler photos to ensure private facilities match claims.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "All Inclusive",
        tagColor: "money",
        tone: "good",
        description: "Established luxury camps cost 800–2,500 MAD (~€80–€250) per tent per night, covering dinner, breakfast, campfire music, and 4x4 transfers.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Berber Hospitality",
        tagColor: "craft",
        tone: "good",
        description: "Traditional wool/camel-hair tent aesthetics blended with modern comforts, featuring genuine live drumming and singing around the night fire.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        tagColor: "safety",
        tone: "good",
        description: "Zero hiking required as 4x4 vehicles transport travelers and baggage straight to camp; suitable for all age groups and physical abilities.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Erg+Chebbi+Dunes,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-dayet-srji",
    city: "merzouga",
    name: "Birdwatching at Dayet Srji Salt Lake",
    neighborhood: "Dayet Srji",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "culture"],
    tags: ["desert", "morning", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 60,
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
    description: "Wander along the shores of this seasonal saltwater lake to spot pink flamingos, desert warblers, and grazing camels backdropped by golden dunes.",
    images: [
      "https://images.unsplash.com/photo-1518002171953-a080ee81be25",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    ],
    googleRating: 4.5,
    reviewCount: 180,
    tip: "Ask locals about water levels before heading out, as this seasonal lake frequently runs dry between June and September.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Boggy Mud",
        tagColor: "alert",
        tone: "caution",
        description: "Silt along the shoreline can be soft and marshy; stay on firm sandy ground to avoid getting shoes or vehicles stuck.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Open Access",
        tagColor: "safety",
        tone: "good",
        description: "Natural public wetlands with zero admission checkpoints or official entry fees; ignore anyone attempting to sell access tickets.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Entry",
        tagColor: "money",
        tone: "good",
        description: "100% free to explore on your own; optional local bird guides or 4x4 transfers charge modest, negotiable fees.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Seasonal Wetland",
        tagColor: "craft",
        tone: "good",
        description: "Genuine desert wetland stopover for migratory greater flamingos, shelducks, and desert larks; note the lake is completely dry in hot summer months.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Flat Walking",
        tagColor: "safety",
        tone: "good",
        description: "Completely flat terrain along sandy shores; bring water and brimmed hats as there is no shade or natural cover.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Dayet+Srji,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-mifis-mines",
    city: "merzouga",
    name: "Exploring the French-era Mines of Mifis",
    neighborhood: "Mifis",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "culture"],
    tags: ["authentic", "cultural-tour", "desert", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 90,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Venture off-road to explore the hand-dug, French-era lead and kohl (eyeliner) mines sitting on a rugged, dark volcanic plateau overlooking the sand dunes.",
    images: [
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
      "https://images.unsplash.com/photo-1605281317010-fe5fed93740e"
    ],
    googleRating: 4.3,
    reviewCount: 85,
    tip: "Climb to the edge of the plateau for an eye-catching contrast between the black volcanic stone desert (hamada) and the golden sands of Erg Chebbi.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Unsecured Shafts",
        tagColor: "alert",
        tone: "caution",
        description: "Deep vertical mine shafts and open trench edges have no railings; maintain a safe distance from deteriorating ledge rims.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Informal Sellers",
        tagColor: "alert",
        tone: "caution",
        description: "The site is unticketed, but independent mineral vendors approach visitors selling local quartz, galena, or barite specimens at negotiable prices.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Entry",
        tagColor: "money",
        tone: "good",
        description: "No state admission fee or gate; offering a 20–50 MAD gratuity is polite if an on-site local miner shows you around the pits.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Colonial Relic",
        tagColor: "craft",
        tone: "good",
        description: "Real 1950s French colonial lead and kohl extraction works, left in an unvarnished state surrounded by abandoned miner quarters.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Stony Terrain",
        tagColor: "alert",
        tone: "caution",
        description: "Involves driving rough off-road pistes followed by walking over loose gravel, scree, and rubble on an exposed plateau.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Mifis,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-sandboarding",
    city: "merzouga",
    name: "Sandboarding on Erg Chebbi Dunes",
    neighborhood: "Erg Chebbi Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "first-timer"],
    tags: ["active", "climbing-adventure", "desert", "instagrammable", "nature", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 10,
    durationMinutes: 60,
    transportMode: "walkable",
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Grab a modified snowboard and experience the thrill of carving down the steep, soft slopes of some of Morocco's tallest sand dunes.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
    ],
    googleRating: 4.8,
    reviewCount: 210,
    tip: "Rub candle wax on the bottom of your board to make the surface slick, which prevents the sand from sticking and increases your speed.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Soft Landing",
        tagColor: "safety",
        tone: "good",
        description: "Soft desert sand cushions falls, but fast descents can cause tumbling; wear sunglasses and a scarf to shield eyes and mouth from blowing sand.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Gear Check",
        tagColor: "alert",
        tone: "caution",
        description: "Desert camps and street rental shops frequently provide worn snowboards with missing straps; verify base wax and binding straps before hiking up.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Camp Included",
        tagColor: "money",
        tone: "good",
        description: "Most overnight camps supply boards free of charge; independent rental from Merzouga shops costs 50–100 MAD (~€5–€10) per board.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Modern Sport",
        tagColor: "craft",
        tone: "good",
        description: "Modern recreational sand sport adapted from snowboarding for Saharan tourists rather than an indigenous heritage activity.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Exhausting Climb",
        tagColor: "alert",
        tone: "caution",
        description: "Riding down takes seconds with zero effort, but trudging back up 50-meter sand dunes in sinking sand is cardiovascularly exhausting.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Erg+Chebbi+Dunes,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-nomad-family",
    city: "merzouga",
    name: "Visiting a Traditional Nomad Family",
    neighborhood: "Merzouga Outskirts",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad"],
    tags: ["authentic", "cultural-tour", "desert", "off-the-beaten-path", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 15,
    durationMinutes: 90,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Travel deep into the arid plains of the stone desert to sit down inside a hand-woven wool tent, drinking tea and conversing with traditional nomadic pastoralists.",
    images: [
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    ],
    googleRating: 4.8,
    reviewCount: 190,
    tip: "Rather than tipping cash directly, offer a practical gift such as loose tea, sugar cones, or writing notebooks for the children.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Very Safe",
        tagColor: "safety",
        tone: "good",
        description: "Hospitable family settlements across the flat desert hamada; follow your guide's lead and ask permission before photographing family members.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Vetted Guide",
        tagColor: "alert",
        tone: "caution",
        description: "Some mass-tour routes stop at pseudo-nomad tents set up purely for tips; ensure your guide takes you to genuine pastoralist families.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Modest Gratuity",
        tagColor: "money",
        tone: "good",
        description: "While mint tea is offered freely out of hospitality, visitors should leave a respectful tip of 50–100 MAD or purchase handmade woven crafts.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Pastoral Life",
        tagColor: "craft",
        tone: "good",
        description: "Real semi-nomadic Amazigh families residing in woven camel-hair tents (*khaimas*), grazing goats and camels in the arid plains.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Accessible",
        tagColor: "safety",
        tone: "good",
        description: "Reached by 4x4 directly to the camp with minimal flat walking; seating is on ground rugs inside low-clearance tents.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Merzouga+Outskirts,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-madfouna",
    city: "merzouga",
    name: "Authentic Madfouna (Berber Pizza)",
    neighborhood: "Merzouga Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "first-timer"],
    tags: ["authentic", "desert", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 8,
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
    description: "Enjoy a serving of Madfouna, a local culinary staple consisting of fresh dough stuffed with spiced minced beef, hard-boiled eggs, almonds, and onions, baked in a clay oven.",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    ],
    googleRating: 4.7,
    reviewCount: 160,
    tip: "Madfouna is exceptionally rich and hearty; one standard-sized pie is easily enough to share among two to three people.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Freshly Baked",
        tagColor: "safety",
        tone: "good",
        description: "Baked to order in intensely hot earthen ovens (*ferran*); hygienic, thoroughly cooked, and served steaming hot.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Bake-To-Order",
        tagColor: "safety",
        tone: "good",
        description: "Avoid tourist cafes serving pre-cooked reheated wedges; visit dedicated local bakeries in Rissani or Merzouga where butcher-fresh fillings are prepared on the spot.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Per Kilo",
        tagColor: "money",
        tone: "good",
        description: "Transparently priced by pie size and meat weight, averaging 60–120 MAD (~€6–€12) for a large stuffed bread feeding 2 to 4 people.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Regional Specialty",
        tagColor: "craft",
        tone: "good",
        description: "Quintessential Tafilalet culinary tradition: stuffed round flatbread packed with spiced beef, suet, boiled eggs, almonds, and desert herbs.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        tagColor: "safety",
        tone: "good",
        description: "Traditional sit-down dining requiring zero physical exertion, other than waiting 30–45 minutes for fresh oven baking.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Merzouga+Center,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-stargazing",
    city: "merzouga",
    name: "Guided Stargazing & Desert Astronomy",
    neighborhood: "Erg Chebbi Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["luxury", "nomad"],
    tags: ["desert", "instagrammable", "nature", "off-the-beaten-path", "private", "relaxed", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 25,
    durationMinutes: 90,
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
    description: "Tap into the zero-light-pollution skies of the Sahara alongside a local astronomer to view clear deep-space nebulae, planets, and constellations.",
    images: [
      "https://images.unsplash.com/photo-1464802686167-b939a6910659",
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0"
    ],
    googleRating: 4.9,
    reviewCount: 130,
    tip: "Download a sky-mapping app beforehand to help you match Saharan constellations with your camera's night exposure frames.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Dark Surroundings",
        tagColor: "safety",
        tone: "good",
        description: "Desert dunes are pitch black at night and temperatures drop sharply; carry a red-beam headlamp and bring warm jacket layers.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Confirmed Gear",
        tagColor: "alert",
        tone: "caution",
        description: "Confirm whether your package includes a high-powered computerized telescope and trained astronomy guide or just simple naked-eye campfire viewing.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Transparent Fee",
        tagColor: "money",
        tone: "good",
        description: "Casual naked-eye sky viewing is free at any desert camp; specialized telescope observation sessions cost 250–500 MAD (~€25–€50) per person.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Pristine Skies",
        tagColor: "craft",
        tone: "good",
        description: "Certified Bortle Class 1–2 ultra-dark desert sky offering brilliant, unpolluted views of the Milky Way, meteor showers, and constellations.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Stationary",
        tagColor: "safety",
        tone: "good",
        description: "Minimal physical effort sitting or standing near the camp perimeter; suitable for everyone, provided warm clothing is worn against night chills.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Erg+Chebbi+Dunes,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-sand-bath",
    city: "merzouga",
    name: "Sahara Sand Bath Therapy (Psammotherapy)",
    neighborhood: "Merzouga Dunes",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["adventure", "culture"],
    tags: ["authentic", "desert", "off-the-beaten-path", "relaxed", "walk-in", "wellness"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20,
    durationMinutes: 30,
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
    hasSunsetView: false,
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Participate in a unique thermal treatment where you are safely buried up to your neck in warm desert sands, a therapy believed to ease muscular pain and joint stiffness.",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597"
    ],
    googleRating: 4.7,
    reviewCount: 75,
    tip: "This traditional treatment is only available during the hot summer months of July and August; keep hydrated and limit your sand burial to a maximum of 15 minutes.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Medical Pre-check",
        tagColor: "alert",
        tone: "caution",
        description: "Practiced during peak summer midday heat (~45°C); strictly unadvised for anyone with heart conditions, hypertension, or asthma due to intense thermal strain.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Trained Hosts",
        tagColor: "safety",
        tone: "good",
        description: "Book solely through established village auberges whose practitioners monitor vital hydration and strictly enforce safe immersion durations (10–15 min max).",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Session",
        tagColor: "money",
        tone: "good",
        description: "Standard sessions cost 200–350 MAD (~€20–€35), covering sand excavation, sun umbrella shading, constant water service, and post-bath herbal tea recovery.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Ancestral Cure",
        tagColor: "craft",
        tone: "good",
        description: "Ancient Amazigh therapeutic tradition utilizing the mineral-rich, solar-heated sands of Erg Chebbi to alleviate joint pain and rheumatism.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Heavy Strain",
        tagColor: "alert",
        tone: "caution",
        description: "Physically strenuous cardiovascular endurance test from extreme heat exposure and the heavy weight of sand pressing on the torso.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Merzouga+Dunes,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-safari",
    city: "merzouga",
    name: "4x4 Off-Road Desert Safari",
    neighborhood: "Merzouga Desert",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "desert", "instagrammable", "nature", "private"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 55,
    durationMinutes: 180,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Blaze a trail along old Paris-Dakar rally tracks, crossing vast rock plateaus (hamada) and high sandy passes on a guided off-road safari.",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601"
    ],
    googleRating: 4.9,
    reviewCount: 512,
    tip: "Request your driver to stop by the dry riverbeds to hunt for wild, ancient fossilized seashells resting directly on top of the desert dirt.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Licensed Chauffeur",
        tagColor: "safety",
        tone: "good",
        description: "Driven by experienced desert professionals in maintained 4WD vehicles stocked with spare tires, tow straps, and compressor pumps.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Set Circuit",
        tagColor: "safety",
        tone: "good",
        description: "Agree on the complete circuit stops (dunes, M'Fis mines, nomad tents, Khamlia) beforehand to prevent drivers from skipping planned points.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Vehicle Rate",
        tagColor: "money",
        tone: "good",
        description: "Clearly priced by private vehicle (up to 4–6 passengers), typically 600–900 MAD (~€60–€90) for a comprehensive half-day tour.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Rally Trails",
        tagColor: "craft",
        tone: "good",
        description: "Traverses authentic historic Paris-Dakar rally tracks, ancient fossil fields, and untouched black stone desert around Erg Chebbi.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Bumpy Ride",
        tagColor: "alert",
        tone: "caution",
        description: "Sitting inside the vehicle requires no stamina, but prolonged jarring over desert washboards and dune crests can provoke motion sickness.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Merzouga+Desert,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-horse-riding",
    city: "merzouga",
    name: "Sunset Horseback Riding in the Sahara",
    neighborhood: "Hassi Labied",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "luxury"],
    tags: [
      "active",
      "climbing-adventure",
      "desert",
      "instagrammable",
      "nature",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 35,
    durationMinutes: 90,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Ride a sleek, well-trained Arabian horse through the silent, undulating dunes of Erg Chebbi as the evening sun bathes the Sahara in gold.",
    images: [
      "https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3",
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a"
    ],
    googleRating: 4.9,
    reviewCount: 85,
    tip: "Communicate your riding experience to the guides in advance; Saharan horses are highly spirited and reactive to subtle leg cues.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Trained Horses",
        tagColor: "safety",
        tone: "good",
        description: "Well-conditioned Barb and Arab-Barb horses paired to rider experience levels; guided by mounted local equestrian handlers with basic helmets.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Vetted Stables",
        tagColor: "safety",
        tone: "good",
        description: "Book through specialized local stables (such as Merzouga Horse Riding) to ensure properly sheltered mounts and punctual sunset departures.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Hourly Rate",
        tagColor: "money",
        tone: "good",
        description: "Transparent hourly pricing, typically running 300–400 MAD (~€30–€40) per person for a 1-hour sunset ride into the sand dunes.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Equine Heritage",
        tagColor: "craft",
        tone: "good",
        description: "Celebrates Morocco's deep equestrian culture, riding traditional desert horses through quiet perimeter sands away from motor noise.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Core Balance",
        tagColor: "alert",
        tone: "caution",
        description: "Requires active leg grip, posture balance, and core engagement, especially when horses climb or descend shifting dune slopes.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Hassi+Labied,+Merzouga,+Morocco",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "merzouga-chez-artistes",
    city: "merzouga",
    name: "Tea and Art at Galerie Chez les Artistes",
    neighborhood: "Khamlia",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "culture"],
    tags: ["authentic", "desert", "off-the-beaten-path", "relaxed", "shopping", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    durationMinutes: 45,
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
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Sit back in a decorated courtyard art café run by a French-Moroccan couple, displaying vivid canvas paintings depicting local desert life and nomadic stories.",
    images: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
    ],
    googleRating: 4.9,
    reviewCount: 43,
    tip: "Order a glass of their signature spiced herbal tea and find a shady corner to chat with the local artists about the folklore behind their artwork.",
    tips: ["not available"],
    excludedServices: ["not available"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Very Safe",
        tagColor: "safety",
        tone: "good",
        description: "Cozy, secure artist workshop and home gallery located in peaceful Ksar Khamlia with warm family hospitality.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Pressure Free",
        tagColor: "safety",
        tone: "good",
        description: "Operated independently by the resident painter couple Johanna and Lahcen Mahmoudi; no tout commissions or aggressive sales pitches.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Complimentary Tea",
        tagColor: "money",
        tone: "good",
        description: "Welcoming mint tea and gallery viewing are completely free; original canvas paintings and sculptures carry clear artist-direct prices.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Original Art",
        tagColor: "craft",
        tone: "good",
        description: "Genuine cultural space exhibiting original contemporary paintings, calligraphy, and handcrafted desert wood sculptures made on-site.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        tagColor: "safety",
        tone: "good",
        description: "Level walk inside the village with seated indoor salon viewing; completely accessible to travelers of all physical conditions.",
        state: "verified"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=Khamlia,+Merzouga,+Morocco",
  }
];
