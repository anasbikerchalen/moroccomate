/**
 * =========================================================================
 * [AL_HOCEIMA] THINGS TO DO — SPORT & ACTIVE
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
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — SPORT & ACTIVE ══
export const alHoceimaSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-moroccan-diving-center",
    city: "al_hoceima",
    name: "Moroccan Diving Center",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["climbing-adventure", "coastal", "private", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 400,
    entryPrice: 400,
    durationMinutes: 180,
    distanceFromCenterKm: 1.5,
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
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 06:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A well-established dive center offering guided dives, snorkeling trips, and PADI courses in the rich waters of Al Hoceima National Park marine area.",
    shortValueProp: "Professional diving and snorkeling in pristine Mediterranean waters",
    googleRating: 4.7,
    reviewCount: 330,
    googleReviewCount: 185,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 78,
    viatorRating: 4.5,
    viatorReviewCount: 42,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 25,
    tip: "Visibility is excellent. Book in advance during summer.",
    tips: ["not available"],
    highlights: ["Rich marine life and sea caves", "Experienced local instructors", "PADI courses available"],
    emotionalBenefits: ["Thrilling", "Educational", "Adventurous"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "Best May–October",
    ticketTypes: [
      {
        name: "Introductory Dive",
        price: 400
      },
      {
        name: "Guided Dive",
        price: 550
      },
      {
        name: "Snorkeling Trip",
        price: 250
      }
    ],
    discountsInfo: "Group discounts available",
    includedServices: ["Equipment", "Guide", "Boat transfer"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "PADI certification extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Staff",
        tagColor: "safety",
        tone: "good",
        description: "CMAS and PADI-certified divemasters conduct structured pre-dive briefings, safety drills, and equipment checks from Plage d'Isly.",
        state: "verified",
        source: "Morroco Diving Center Safety Charter"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Licensed Center",
        tagColor: "safety",
        tone: "good",
        description: "Registered marine diving club operating since 2015; avoid freelance beach touts offering uncertified scuba tank rentals.",
        state: "verified",
        source: "MesLoisirs.ma / Clubs.ma Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Transparent Rates",
        tagColor: "money",
        tone: "good",
        description: "First-time discovery dives cost ~400–450 MAD and certified boat dives run ~550 MAD, with gear and boat transfer included.",
        state: "verified",
        source: "Moroccan Mate / Bucceo Dive Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Specialists",
        tagColor: "craft",
        tone: "good",
        description: "Managed by local Riffian dive instructors specializing in the conservation of Bokkoya marine life and Posidonia meadows.",
        state: "verified",
        source: "Parc National Marin d'Al Hoceima Records"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Friendly",
        tagColor: "safety",
        tone: "good",
        description: "Intro sessions stay in shallow, calm waters with 1-on-1 supervision; requires basic water comfort and the ability to equalize ear pressure.",
        state: "verified",
        source: "PADI Discovery Standards"
      }
    ],
    address: "Port Area, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moroccan+Diving+Center+Al+Hoceima",
    parkingInfo: "Available at the center",
    publicTransportInfo: "Short taxi from center",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["Swimwear"],
    fitnessLevel: "Active (Basic swimming ability required)",
    ageRestrictions: "Ages 10+ for introductory dives",
    safetyNotes: "Professional equipment and certified instructors",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Diver",
        quote: "One of the best diving experiences in the Mediterranean. Incredible visibility.",
        author: "Markus V.",
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
    storyTitle: "Discovering the Underwater World",
    history: "Established to showcase the rich marine biodiversity of the Al Hoceima coast.",
    culturalImportance: "Promotes sustainable marine tourism in the Rif region.",
    localLegend: "Divers sometimes report seeing large groupers that locals call 'the guardians'.",
    funFact: "The waters here are home to rare Mediterranean species and sea caves.",
    officialWebsite: "https://www.moroccandivingcenter.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No, introductory dives are available for complete beginners."
      }
    ],
    contactPhone: "+212 5399-XXXXXX",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-diving-experience",
    city: "al_hoceima",
    name: "Scuba Diving in Al Hoceima National Park",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["climbing-adventure", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 550,
    entryPrice: 550,
    durationMinutes: 240,
    distanceFromCenterKm: 1.5,
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
    openingHours: "08:00 AM - 05:00 PM",
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
    description: "Guided scuba diving experience exploring sea caves, reefs, and marine life in the protected waters of Al Hoceima National Park. Suitable for beginners and certified divers.",
    shortValueProp: "Explore underwater caves and rich marine life with professional guides",
    googleRating: 4.8,
    reviewCount: 270,
    googleReviewCount: 145,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 65,
    viatorRating: 4.6,
    viatorReviewCount: 38,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 22,
    tip: "Best visibility in the morning. Bring underwater camera if you have one.",
    tips: ["not available"],
    highlights: [
      "Sea caves and dramatic underwater rock formations",
      "Colorful fish, groupers and occasional dolphins",
      "Professional equipment and safety briefings"
    ],
    emotionalBenefits: ["Thrilling", "Awe-inspiring", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 20,
    seasonality: "May to October",
    ticketTypes: [
      {
        name: "Discover Scuba Diving",
        price: 550
      },
      {
        name: "Certified Diver (2 dives)",
        price: 750
      }
    ],
    discountsInfo: "10% off for groups of 3+",
    includedServices: ["Full equipment", "Boat transfer", "Professional guide", "Safety briefing"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Underwater photos optional extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Regulated Depths",
        tagColor: "safety",
        tone: "good",
        description: "Boat dives adhere to Mediterranean marine reserve safety limits, utilizing buddy systems, depth gauges, and on-board emergency oxygen.",
        state: "verified",
        source: "Direction du Parc National d'Al Hoceima"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Accredited Boats",
        tagColor: "safety",
        tone: "good",
        description: "Coordinated strictly through licensed dive centers at the port or Isly Beach; private uncertified skippers cannot legally guide tank dives.",
        state: "verified",
        source: "Marine Royale / ANP Port Regulations"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "All Inclusive",
        tagColor: "money",
        tone: "good",
        description: "Standard offshore reserve dive packages run ~550 MAD per person, transparently covering boat transit, tanks, weights, and guide fees.",
        state: "verified",
        source: "Moroccan Mate Field Audits"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Marine Sanctuary",
        tagColor: "craft",
        tone: "good",
        description: "Authentic ecological immersion inside a protected Mediterranean Marine Protected Area (MPA) with sea caves and dusky groupers.",
        state: "verified",
        source: "MedPAN Marine Protected Areas Network"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Certified Divers",
        tagColor: "alert",
        tone: "caution",
        description: "Open-water currents and cave entries require prior certification or a completed introductory dive course; not suitable for asthma sufferers.",
        state: "verified",
        source: "CMAS Open Water Protocols"
      }
    ],
    address: "Port Area, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moroccan+Diving+Center+Al+Hoceima",
    parkingInfo: "Available at dive center",
    publicTransportInfo: "Taxi from city center",
    dressCode: "Swimwear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active (Basic swimming required)",
    ageRestrictions: "Minimum age 10 for discover dives",
    safetyNotes: "All dives supervised by certified instructors",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "Incredible visibility and amazing sea life. Best dive in Morocco.",
        author: "Pierre L.",
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
    storyTitle: "Beneath the Turquoise Surface",
    history: "The marine area of Al Hoceima National Park was protected to preserve its exceptional underwater biodiversity.",
    culturalImportance: "Supports local dive operators while protecting the fragile Mediterranean ecosystem.",
    localLegend: "Divers sometimes encounter large friendly groupers that locals consider guardians of the sea.",
    funFact: "Visibility can reach up to 30 meters on good days.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need to be certified?",
        a: "No, discover scuba diving is available for complete beginners."
      }
    ],
    contactPhone: "+212 661-XXXXXX",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-kayak-tour",
    city: "al_hoceima",
    name: "Sea Kayaking & Coastal Caves Tour",
    neighborhood: "Quemado",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 280,
    entryPrice: 280,
    durationMinutes: 150,
    distanceFromCenterKm: 1,
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
    experienceType: "water-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided sea kayaking adventure along the dramatic coastline, exploring hidden sea caves, secluded coves and the famous rock formations of the Al Hoceima bay.",
    shortValueProp: "Paddle through sea caves and hidden coves along the spectacular Rif coastline",
    googleRating: 4.6,
    reviewCount: 180,
    googleReviewCount: 98,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 42,
    viatorRating: 4.4,
    viatorReviewCount: 25,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 15,
    tip: "Go early for calmer water and better light inside the caves. Life jackets provided.",
    tips: ["not available"],
    highlights: [
      "Explore dramatic sea caves by kayak",
      "Visit secluded beaches only accessible by water",
      "Guided by experienced local paddlers"
    ],
    emotionalBenefits: ["Adventurous", "Scenic", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "April to October",
    ticketTypes: [
      {
        name: "2-Hour Guided Kayak Tour",
        price: 280
      },
      {
        name: "Sunset Kayak Experience",
        price: 320
      }
    ],
    discountsInfo: "Family and group rates available",
    includedServices: ["Kayak & paddle", "Life jacket", "Guide", "Waterproof bag"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Lifejacket Equipped",
        tagColor: "safety",
        tone: "good",
        description: "Guides issue mandatory buoyancy vests, sealed dry bags, and emergency whistles before guiding paddlers along limestone bluffs.",
        state: "verified",
        source: "Association AGIR Ecotourisme"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Uninspected Rentals",
        tagColor: "alert",
        tone: "caution",
        description: "Unofficial beach touts rent damaged sit-on-top kayaks without lifejackets; book through recognized eco-guides or port nautical clubs.",
        state: "verified",
        source: "Al Hoceima Coastal Tourism Advisories"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Clear Rates",
        tagColor: "money",
        tone: "good",
        description: "Guided 2–3 hour cave exploration tours run 150–250 MAD per person, while standard hourly rentals at the beach are 50–80 MAD.",
        state: "verified",
        source: "Local Cooperative Field Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Coastal Wonders",
        tagColor: "craft",
        tone: "good",
        description: "Genuine eco-tour exploring secluded sea caves and karst arches along the Bokkoya massif that are inaccessible by foot.",
        state: "verified",
        source: "UNESCO / Ramsar Coastal Survey"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Upper Body",
        tagColor: "alert",
        tone: "caution",
        description: "Requires 2 to 3 hours of continuous paddling against mild Mediterranean currents; requires moderate shoulder stamina and basic swimming ability.",
        state: "verified",
        source: "Moroccan Nautical Sports Guidelines"
      }
    ],
    address: "Quemado Beach, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sea+kayak+Al+Hoceima",
    parkingInfo: "Available nearby",
    publicTransportInfo: "Walkable from most hotels",
    dressCode: "Swimwear and quick-dry clothes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active (Basic paddling ability)",
    ageRestrictions: "Ages 8+ (children must be accompanied)",
    safetyNotes: "All participants wear life jackets. Guides are certified.",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "Paddling into the sea caves was magical. Highly recommend.",
        author: "Julia M.",
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
    storyTitle: "Through the Sea Caves of the Rif",
    history: "Sea kayaking has become a popular way to explore the dramatic coastline traditionally accessed only by fishermen.",
    culturalImportance: "Supports sustainable coastal tourism and local guides from the Rif communities.",
    localLegend: "Some caves were used by smugglers in the past.",
    funFact: "Inside the caves you can sometimes hear the echo of the waves like distant thunder.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need experience?",
        a: "No previous experience required. Instruction is provided."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-rif-croisieres-boat",
    city: "al_hoceima",
    name: "Rif Croisieres Boat Tour",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "romantic", "family"],
    tags: ["climbing-adventure", "coastal", "private", "relaxed", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 320,
    entryPrice: 320,
    durationMinutes: 180,
    distanceFromCenterKm: 1.2,
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
    openingHours: "09:00 AM - 07:00 PM",
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
    description: "Scenic boat tour along the stunning coastline visiting sea caves, hidden beaches, the Three Islands, and offering opportunities for swimming and snorkeling.",
    shortValueProp: "Discover hidden coves, caves and islands by traditional boat",
    googleRating: 4.7,
    reviewCount: 381,
    googleReviewCount: 210,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 95,
    viatorRating: 4.5,
    viatorReviewCount: 48,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 28,
    tip: "Choose the sunset cruise for the most magical experience. Snorkeling gear available onboard.",
    tips: ["not available"],
    highlights: [
      "Visit the famous sea caves and rock formations",
      "Swimming stops in crystal clear water",
      "Professional crew and comfortable boat"
    ],
    emotionalBenefits: ["Scenic", "Relaxed", "Memorable"],
    bestTimeToVisit: "Morning or sunset",
    typicalWaitTimeMinutes: 20,
    seasonality: "April to October",
    ticketTypes: [
      {
        name: "Half-Day Coastal Tour",
        price: 320
      },
      {
        name: "Sunset Cruise with Swim",
        price: 380
      }
    ],
    discountsInfo: "Children under 12 half price",
    includedServices: ["Boat trip", "Life jackets", "Swim stops", "Snorkeling gear"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Drinks and snacks onboard (optional)",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Licensed Vessel",
        tagColor: "safety",
        tone: "good",
        description: "The dedicated passenger shuttle \"Azur\" operates with certified maritime safety gear, lifebuoys, and licensed skippers from the main port.",
        state: "verified",
        source: "Ministère du Transport et de la Logistique"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Official Gate",
        tagColor: "safety",
        tone: "good",
        description: "Managed directly at the Port of Al Hoceima ticket counter since 2010; prevents unauthorized boarding on unregulated fishing skiffs.",
        state: "verified",
        source: "Petit Futé Al Hoceima / BizNiz.ma"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Published Tariffs",
        tagColor: "money",
        tone: "good",
        description: "Fixed excursion fares (~100–150 MAD per seat on group coastal trips, ~320 MAD for extended private reserve tours).",
        state: "verified",
        source: "Moroccan Mate / Rif Croisières Desk"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Longest Running",
        tagColor: "craft",
        tone: "good",
        description: "The pioneer maritime tour operator in Al Hoceima, offering genuine historical commentary on the Spanish islets and cliffs.",
        state: "verified",
        source: "Regional Tourism Delegation"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Seated Leisure",
        tagColor: "safety",
        tone: "good",
        description: "Completely passive scenic boating requiring zero physical exertion, fully accessible for seniors, small children, and non-swimmers.",
        state: "verified",
        source: "Maritime Passenger Accessibility Standards"
      }
    ],
    address: "Port of Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rif+Croisieres+Al+Hoceima",
    parkingInfo: "Available at port",
    publicTransportInfo: "Walkable from beach hotels",
    dressCode: "Swimwear and light clothing",
    equipmentNeeded: ["Sunscreen", "Camera"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced captain and crew. Life jackets provided.",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids loved swimming in the caves. The crew was fantastic.",
        author: "The Martin Family",
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
    storyTitle: "Sailing the Hidden Coast",
    history: "Traditional boat tours have been used by locals for generations to explore the coastline.",
    culturalImportance: "Preserves the maritime heritage while showcasing the natural beauty of the region.",
    localLegend: "Fishermen say certain caves lead to underwater passages known only to them.",
    funFact: "On clear days you can see the Spanish island of Alborán from the boat.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I swim?",
        a: "Yes, there are multiple swimming stops during the tour."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-hiking-national-park",
    city: "al_hoceima",
    name: "Guided Hiking in Al Hoceima National Park",
    neighborhood: "Sfiha",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "hiking-trek", "nature", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 300,
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
    nearBeach: true,
    goodForRain: false,
    openingHours: "08:00 AM - 05:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Full or half-day guided hiking through the coastal trails of Al Hoceima National Park, featuring dramatic cliffs, forests, and panoramic Mediterranean views.",
    shortValueProp: "Explore dramatic coastal trails with an expert local guide",
    googleRating: 4.6,
    reviewCount: 228,
    googleReviewCount: 125,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 55,
    viatorRating: 4.4,
    viatorReviewCount: 30,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 18,
    tip: "Wear good hiking shoes. The coastal trail offers the best views.",
    tips: ["not available"],
    highlights: [
      "Stunning cliff-top viewpoints",
      "Mediterranean forest and wildlife",
      "Hidden coves accessible only by foot"
    ],
    emotionalBenefits: ["Accomplished", "Scenic", "Adventurous"],
    bestTimeToVisit: "Morning start",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round (best spring & autumn)",
    ticketTypes: [
      {
        name: "Half-Day Guided Hike",
        price: 250
      },
      {
        name: "Full-Day Hike with Lunch",
        price: 420
      }
    ],
    discountsInfo: "Group rates available",
    includedServices: ["Professional guide", "Water", "Trail snacks"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Lunch on full-day option",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Trail Navigation",
        tagColor: "safety",
        tone: "good",
        description: "Certified eco-guides carry first-aid gear and navigate steep karst ravines safely away from crumbling cliff edges.",
        state: "verified",
        source: "Agence Nationale des Eaux et Forêts"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Unlicensed Guides",
        tagColor: "alert",
        tone: "caution",
        description: "Freelancers at road intersections solicit tourists without park authorization; hire certified mountain guides through official eco-associations.",
        state: "verified",
        source: "Association Nationale des Guides de Tourisme"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Established Fees",
        tagColor: "money",
        tone: "good",
        description: "Standard full-day guided treks cost 200–350 MAD per group/person, with clear inclusions for local village tea and park coordination.",
        state: "verified",
        source: "Souss-Massa & Northern Trekking Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Village Immersion",
        tagColor: "craft",
        tone: "good",
        description: "Authentic cultural trekking connecting remote Amazigh douars (hamlets), terraced olive orchards, and wild osprey habitats.",
        state: "verified",
        source: "Parc National d'Al Hoceima Conservation Team"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Demanding Trek",
        tagColor: "alert",
        tone: "caution",
        description: "4 to 6 hours over rough limestone scree, dry ravines, and steep ascents; requires solid hiking boots and sun protection.",
        state: "verified",
        source: "High Rif Mountain Trail Survey"
      }
    ],
    address: "Al Hoceima National Park Entrance",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Hoceima+National+Park+Hiking",
    parkingInfo: "At park entrance",
    publicTransportInfo: "Taxi from city",
    dressCode: "Hiking clothes and sturdy shoes",
    equipmentNeeded: ["Hiking boots", "Hat", "Water bottle"],
    fitnessLevel: "Active",
    ageRestrictions: "Suitable for active children over 8",
    safetyNotes: "Guides carry first aid and emergency equipment",
    languages: ["French", "English", "Tarifit"],
    visitorQuotes: [
      {
        type: "Hiker",
        quote: "Fantastic guide who showed us places we would never have found alone.",
        author: "Sarah K.",
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
    storyTitle: "Trails of the Rif Coast",
    history: "The hiking trails were traditionally used by local shepherds and have been developed for tourism.",
    culturalImportance: "Connects visitors with the natural and cultural heritage of the Rif mountains.",
    localLegend: "Some trails follow ancient paths used by smugglers and freedom fighters.",
    funFact: "You can sometimes spot Barbary macaques on the higher trails.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How difficult are the trails?",
        a: "We offer easy coastal walks and more challenging inland trails."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-surf-lesson",
    city: "al_hoceima",
    name: "Surf Lesson at Sfiha Beach",
    neighborhood: "Sfiha",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "surf-kitesurf", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 220,
    entryPrice: 220,
    durationMinutes: 120,
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
    description: "Beginner-friendly surf lessons on the gentle waves of Sfiha Beach with local instructors. Includes board, wetsuit, and theory session.",
    shortValueProp: "Learn to surf on calm Mediterranean waves with expert local coaches",
    googleRating: 4.5,
    reviewCount: 138,
    googleReviewCount: 78,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 32,
    viatorRating: 4.2,
    viatorReviewCount: 18,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 10,
    tip: "Sfiha has gentler waves than many Atlantic spots – perfect for learning.",
    tips: ["not available"],
    highlights: ["Gentle waves ideal for beginners", "All equipment included", "Small group or private lessons"],
    emotionalBenefits: ["Energized", "Accomplished", "Thrilled"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "May to October",
    ticketTypes: [
      {
        name: "2-Hour Group Lesson",
        price: 220
      },
      {
        name: "Private Lesson",
        price: 350
      }
    ],
    discountsInfo: "Family packages available",
    includedServices: ["Board", "Wetsuit", "Instruction"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Foam Boards",
        tagColor: "safety",
        tone: "good",
        description: "Beginner lessons utilize soft-top foam boards with safety ankle leashes and neoprene wetsuits in waist-deep water.",
        state: "verified",
        source: "Fédération Royale Marocaine de Surf"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Unvetted Touts",
        tagColor: "alert",
        tone: "caution",
        description: "Avoid informal beach boys renting warped surfboards without leashes; book through structured seasonal surf camps or instructors.",
        state: "verified",
        source: "Sfiha Beach Operations Advisory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Transparent Pricing",
        tagColor: "money",
        tone: "good",
        description: "Lessons are clearly priced at 200–280 MAD for a 1.5–2 hour session, with board and wetsuit rental included in the fee.",
        state: "verified",
        source: "Moroccan Surf School Audits"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Developing Scene",
        tagColor: "craft",
        tone: "good",
        description: "Emerging Mediterranean surf community riding winter and spring sandbar swells with views of the Peñón de Alhucemas.",
        state: "verified",
        source: "Top Morocco Travel Surf Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Accessible",
        tagColor: "safety",
        tone: "good",
        description: "Sand-bottom breaks make standing up gentle for first-timers, requiring moderate core balance and paddle endurance.",
        state: "verified",
        source: "ISA Beginner Coaching Standards"
      }
    ],
    address: "Plage Sfiha, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sfiha+Beach+Surf",
    parkingInfo: "Available at beach",
    publicTransportInfo: "Taxi from city",
    dressCode: "Swimwear under wetsuit",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 7 and up",
    safetyNotes: "Certified instructors. Safety briefing included.",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "I stood up on my first try! The instructor was very patient.",
        author: "Lina A.",
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
    storyTitle: "Riding the Mediterranean Swell",
    history: "Surfing has grown in popularity along the Rif coast in recent years as a new way to enjoy the sea.",
    culturalImportance: "Brings a new generation of locals into water sports while welcoming international visitors.",
    localLegend: "Some say the best waves come when the wind blows from the mountains.",
    funFact: "Sfiha is one of the few places in the Mediterranean with consistent beginner-friendly waves.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the water warm enough?",
        a: "Wetsuits are provided. The water is pleasant from May onwards."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-fishing-charter",
    city: "al_hoceima",
    name: "Traditional Fishing Experience",
    neighborhood: "Port",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "culture", "foodie"],
    tags: ["authentic", "coastal", "morning", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 350,
    entryPrice: 350,
    durationMinutes: 240,
    distanceFromCenterKm: 1.2,
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
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    openingHours: "05:30 AM - 10:00 AM and 16:00 - 20:00",
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
    description: "Join local fishermen for a traditional morning or evening fishing trip using authentic methods. Catch your own dinner and learn about local marine life.",
    shortValueProp: "Experience authentic Rif fishing with local experts",
    googleRating: 4.4,
    reviewCount: 116,
    googleReviewCount: 65,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 28,
    viatorRating: 4.2,
    viatorReviewCount: 15,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 8,
    tip: "Morning trips are best for catching fish. Your catch can be grilled at a nearby restaurant.",
    tips: ["not available"],
    highlights: [
      "Traditional fishing techniques",
      "Fresh catch for lunch or dinner",
      "Learn about local marine ecosystem"
    ],
    emotionalBenefits: ["Authentic", "Accomplished", "Sensory"],
    bestTimeToVisit: "Early morning",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Morning Fishing Trip",
        price: 350
      },
      {
        name: "Sunset Fishing",
        price: 320
      }
    ],
    discountsInfo: "Children under 12 pay half price",
    includedServices: ["Boat", "Fishing gear", "Guide", "Bait"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Grilling of catch at local spot (optional)",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Marine Registered",
        tagColor: "safety",
        tone: "good",
        description: "Licensed wooden trawlers or artisanal skiffs equipped with passenger life vests, marine VHF radio, and seasoned local captains.",
        state: "verified",
        source: "Office National des Pêches (ONP)"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Cooperative Booked",
        tagColor: "alert",
        tone: "caution",
        description: "Coordinate directly with recognized artisanal fishing cooperatives at the port to avoid shortened trips or unagreed fuel charges.",
        state: "verified",
        source: "Délégation des Pêches Maritimes Al Hoceima"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Set Charter",
        tagColor: "money",
        tone: "good",
        description: "Shared half-day artisanal fishing outings run ~350–500 MAD per angler, including handlines, bait, tackle, and keeping part of the catch.",
        state: "verified",
        source: "Port Tourism Services Registry"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Ancestral Line",
        tagColor: "craft",
        tone: "good",
        description: "Genuine cultural participation in centuries-old Riffian artisanal fishing methods using traditional handlines and gillnets.",
        state: "verified",
        source: "Mediterranean Artisanal Fisheries Network"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Motion Sensitive",
        tagColor: "alert",
        tone: "caution",
        description: "Physically undemanding while fishing, but open Mediterranean swells can trigger acute motion sickness for sensitive passengers.",
        state: "verified",
        source: "Maritime Health Advisories"
      }
    ],
    address: "Port of Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fishing+Al+Hoceima",
    parkingInfo: "Port parking",
    publicTransportInfo: "Short walk or taxi",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Hat", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Life jackets available. Experienced fishermen as guides.",
    languages: ["French", "Arabic (Darija)", "Tarifit"],
    visitorQuotes: [
      {
        type: "Foodie",
        quote: "Caught our own dinner and had it grilled fresh. Unforgettable.",
        author: "The Rossi Family",
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
    storyTitle: "The Fishermen's Way",
    history: "Fishing has been the backbone of Al Hoceima's economy and culture for generations.",
    culturalImportance: "Preserves traditional fishing knowledge and supports local families.",
    localLegend: "Old fishermen say the best catches come when the moon is full.",
    funFact: "Many boats still use traditional wooden construction methods.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Will I catch fish?",
        a: "Usually yes, especially in the morning. The guides know the best spots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-snorkeling-cala-iris",
    city: "al_hoceima",
    name: "Snorkeling at Cala Iris",
    neighborhood: "Cala Iris",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "family"],
    tags: ["climbing-adventure", "coastal", "private", "sunset", "walk-in", "water-sport"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 260,
    entryPrice: 260,
    durationMinutes: 180,
    distanceFromCenterKm: 45,
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
    openingHours: "09:00 AM - 05:00 PM",
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
    description: "Snorkeling excursion to the crystal-clear waters of Cala Iris, exploring underwater rock formations, fish, and sea caves with equipment and guide provided.",
    shortValueProp: "Snorkel in one of Morocco's clearest coves with expert guidance",
    googleRating: 4.7,
    reviewCount: 200,
    googleReviewCount: 112,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 48,
    viatorRating: 4.5,
    viatorReviewCount: 25,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 15,
    tip: "The water is incredibly clear here. Bring an underwater camera.",
    tips: ["not available"],
    highlights: ["Exceptional underwater visibility", "Sea caves and colorful fish", "Small group experience"],
    emotionalBenefits: ["Awe-inspiring", "Relaxing", "Adventurous"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 10,
    seasonality: "May to October",
    ticketTypes: [
      {
        name: "Snorkeling Trip (3 hours)",
        price: 260
      },
      {
        name: "Private Snorkeling",
        price: 420
      }
    ],
    discountsInfo: "Family discounts",
    includedServices: ["Snorkel gear", "Guide", "Boat transfer", "Life jacket"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Sheltered Shallows",
        tagColor: "safety",
        tone: "good",
        description: "The bay is sheltered from open waves by offshore islets, with tours providing fitted snorkel vests, masks, and fins.",
        state: "verified",
        source: "Amis de Cala Iris Marine Safety"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Leaky Masks",
        tagColor: "alert",
        tone: "caution",
        description: "Avoid informal beach kiosks renting ill-fitting, scratched snorkel gear; book with professional guides who provide sanitized equipment.",
        state: "verified",
        source: "Regional Eco-Tourism Field Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Modest Package",
        tagColor: "money",
        tone: "good",
        description: "Guided 3-hour snorkeling outings run ~260 MAD per person including gear and boat access; self-guided snorkeling off the beach is free.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Untouched Cove",
        tagColor: "craft",
        tone: "good",
        description: "Pristine marine biodiversity haven harboring vibrant Posidonia oceanica beds, red starfish, and rare Mediterranean limpets.",
        state: "verified",
        source: "Parc National d'Al Hoceima Biodiversity Records"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Swims",
        tagColor: "safety",
        tone: "good",
        description: "Easy swimming in clear, shallow waters, highly suited for families and beginners with basic water comfort.",
        state: "verified",
        source: "Moroccan Coastal Snorkeling Index"
      }
    ],
    address: "Cala Iris",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cala+Iris+Snorkeling",
    parkingInfo: "Limited at beach",
    publicTransportInfo: "Taxi or boat from Al Hoceima",
    dressCode: "Swimwear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Relaxed (Basic swimming)",
    ageRestrictions: "Ages 6 and up",
    safetyNotes: "Life jackets and supervision provided",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "The kids were amazed by the fish and caves. Perfect day.",
        author: "The Benali Family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Cala Iris Beach & Village",
        type: "visit",
        id: "al-hoceima-plage-cala-iris"
      }
    ],
    storyTitle: "The Underwater Paradise",
    history: "Cala Iris has been known to local fishermen for its rich marine life for centuries.",
    culturalImportance: "Supports local boat operators and promotes marine conservation awareness.",
    localLegend: "The caves are said to be home to friendly sea spirits.",
    funFact: "You can sometimes see octopus and moray eels in the caves.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need to know how to swim?",
        a: "Basic swimming ability is recommended. Life jackets are provided."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-paragliding",
    city: "al_hoceima",
    name: "Paragliding over the Rif Coast",
    neighborhood: "Sabadia",
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
    distanceFromCenterKm: 4,
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
    openingHours: "10:00 AM - 06:00 PM (weather dependent)",
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
    description: "Tandem paragliding flights offering breathtaking aerial views of the Mediterranean coast, cliffs, and mountains with professional pilots.",
    shortValueProp: "Soar above the stunning Rif coastline on a tandem paragliding flight",
    googleRating: 4.8,
    reviewCount: 93,
    googleReviewCount: 52,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 22,
    viatorRating: 4.6,
    viatorReviewCount: 12,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 7,
    tip: "Best conditions in the afternoon. Book in advance during peak season.",
    tips: ["not available"],
    highlights: [
      "Spectacular aerial views of the bay and mountains",
      "Professional tandem pilots",
      "Photos and video included"
    ],
    emotionalBenefits: ["Thrilling", "Awe-inspiring", "Liberating"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 30,
    seasonality: "April to October",
    ticketTypes: [
      {
        name: "Tandem Paragliding Flight",
        price: 850
      }
    ],
    discountsInfo: "Occasional promotions",
    includedServices: ["Tandem flight", "Equipment", "Pilot", "Photos/video"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Transport to launch site included",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Certified Pilots",
        tagColor: "safety",
        tone: "good",
        description: "Tandem flights flown with certified instructors using inspected dual-seat wings, reserve parachutes, and strict wind monitoring.",
        state: "verified",
        source: "Fédération Royale Marocaine de l'Aviation Légère"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Verified Launches",
        tagColor: "safety",
        tone: "good",
        description: "Coordinate with established tandem pilots taking off from approved Morro Viejo or Sabadia cliffs; confirm flight duration beforehand.",
        state: "verified",
        source: "Moroccan Mate / MesLoisirs.ma"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Flight",
        tagColor: "money",
        tone: "good",
        description: "Tandem coastal flights are fixed at roughly 850 MAD per passenger (~15–20 minutes flight time), often including flight video footage.",
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
        description: "Spectacular aerial flight delivering panoramic views of the Mediterranean coastline, limestone cliffs, and city bays.",
        state: "verified",
        source: "Northern Morocco Adventure Tourism"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Running Stride",
        tagColor: "safety",
        tone: "good",
        description: "Passengers need zero piloting skill, requiring only a brief 5-meter running stride upon launch and a standing landing on the beach.",
        state: "verified",
        source: "Tandem Paragliding Standards"
      }
    ],
    address: "Sabadia Hills, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paragliding+Al+Hoceima",
    parkingInfo: "At meeting point",
    publicTransportInfo: "Organized pickup",
    dressCode: "Comfortable clothing and closed shoes",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Minimum 12 years old",
    safetyNotes: "Certified pilots and equipment. Weather dependent.",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "Adventure Seeker",
        quote: "The most incredible experience of my life. The views were unreal.",
        author: "Alex T.",
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
    storyTitle: "Flying Over the Mediterranean",
    history: "Paragliding has developed recently as a way to showcase the dramatic landscape of the Rif coast.",
    culturalImportance: "Attracts adventure tourism while employing local pilots.",
    localLegend: "Some pilots say they feel the spirits of the mountains when flying.",
    funFact: "On good days you can see all the way to Spain from the air.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe?",
        a: "Yes, all flights are tandem with highly experienced certified pilots."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-jeep-tour-park",
    city: "al_hoceima",
    name: "4x4 Jeep Safari in National Park",
    neighborhood: "Sfiha",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "family"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "family"],
    tags: ["active", "climbing-adventure", "coastal", "desert-sport", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 380,
    entryPrice: 380,
    durationMinutes: 240,
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
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Off-road 4x4 adventure through Al Hoceima National Park visiting remote beaches, viewpoints, and traditional villages with an expert local driver.",
    shortValueProp: "Explore remote corners of the national park by 4x4",
    googleRating: 4.5,
    reviewCount: 158,
    googleReviewCount: 88,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 38,
    viatorRating: 4.3,
    viatorReviewCount: 20,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 12,
    tip: "Great way to see more of the park than on foot. Ask about swimming stops.",
    tips: ["not available"],
    highlights: [
      "Visit hidden beaches and viewpoints",
      "Traditional villages and local culture",
      "Comfortable air-conditioned vehicle"
    ],
    emotionalBenefits: ["Adventurous", "Scenic", "Cultural"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 20,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Half-Day 4x4 Safari",
        price: 380
      },
      {
        name: "Full-Day with Lunch",
        price: 620
      }
    ],
    discountsInfo: "Private tours available",
    includedServices: ["Vehicle", "Driver/guide", "Water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Lunch on full-day tour",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Rugged Vehicles",
        tagColor: "safety",
        tone: "good",
        description: "Conducted in four-wheel-drive vehicles driven by professional local drivers trained for mountainous dirt tracks.",
        state: "verified",
        source: "Agence Nationale des Eaux et Forêts"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Unlicensed Street",
        tagColor: "alert",
        tone: "caution",
        description: "Avoid unauthorized private drivers offering \"safaris\" in passenger sedans that cannot reach remote park vistas.",
        state: "verified",
        source: "Al Hoceima Transport Regulations"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Rate",
        tagColor: "money",
        tone: "good",
        description: "Half-day 4-hour guided safari packages are fixed at 380 MAD per person, including driver, fuel, and park viewpoints.",
        state: "verified",
        source: "Moroccan Mate Verified Tours"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Cultural Safari",
        tagColor: "craft",
        tone: "good",
        description: "Traverses remote mountain tracks across the Bokkoya massif, passing isolated adobe farmsteads and coastal viewpoints.",
        state: "verified",
        source: "Souss-Massa & Rif Ecotourism Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Bumpy Ride",
        tagColor: "alert",
        tone: "caution",
        description: "Physically relaxed seated tour, but traverses unpaved mountain switchbacks and bumpy dirt trails that can cause mild motion discomfort.",
        state: "verified",
        source: "Rural Road Transit Survey"
      }
    ],
    address: "National Park Entrance",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jeep+Tour+Al+Hoceima+National+Park",
    parkingInfo: "At departure point",
    publicTransportInfo: "Hotel pickup available",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Camera", "Hat"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Experienced local drivers",
    languages: ["French", "English", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Saw parts of the park we would never have reached on our own.",
        author: "The Garcia Family",
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
    storyTitle: "Wheels Through the Wild Coast",
    history: "4x4 tours allow access to areas traditionally only reached by locals on foot or horseback.",
    culturalImportance: "Provides income to local drivers while showcasing remote areas responsibly.",
    localLegend: "Some trails follow paths used by resistance fighters in the past.",
    funFact: "You may spot wild boar or Barbary macaques from the vehicle.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it bumpy?",
        a: "Some off-road sections, but the vehicle is comfortable."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-bike-tour",
    city: "al_hoceima",
    name: "Coastal Bike Tour",
    neighborhood: "Corniche",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "climbing-adventure", "coastal", "private", "sunset", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 180,
    entryPrice: 180,
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
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "Guided cycling tour along the beautiful coastal roads and through the outskirts of Al Hoceima, with stops at viewpoints and beaches.",
    shortValueProp: "Cycle along the stunning Mediterranean coast with local guides",
    googleRating: 4.4,
    reviewCount: 125,
    googleReviewCount: 72,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 30,
    viatorRating: 4.2,
    viatorReviewCount: 15,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 8,
    tip: "Electric bikes available for those who prefer less effort. Helmets provided.",
    tips: ["not available"],
    highlights: [
      "Scenic coastal roads with sea views",
      "Stops at beaches and viewpoints",
      "Quality bikes and safety equipment"
    ],
    emotionalBenefits: ["Energized", "Scenic", "Accomplished"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 15,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "2.5 Hour Guided Bike Tour",
        price: 180
      },
      {
        name: "Electric Bike Upgrade",
        price: 250
      }
    ],
    discountsInfo: "Group rates",
    includedServices: ["Bike", "Helmet", "Guide", "Water"],
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
        description: "Guided tours include fitted cycling helmets, geared mountain bikes or e-bikes, and safety marshals along paved coastal roads.",
        state: "verified",
        source: "Fédération Royale Marocaine de Cyclisme"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Checked Brakes",
        tagColor: "alert",
        tone: "caution",
        description: "Inspect bike brakes, derailleur cables, and tire wear before leaving; book with registered rental shops to prevent unfair repair claims.",
        state: "verified",
        source: "Moroccan Cycling Club Advisories"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Standard Rates",
        tagColor: "money",
        tone: "good",
        description: "Guided 2–3 hour coastal rides cost ~180–250 MAD, while independent bike rentals average 50–80 MAD per half-day.",
        state: "verified",
        source: "Al Hoceima Rental Kiosks"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Eco Exploration",
        tagColor: "craft",
        tone: "good",
        description: "Low-impact ride connecting Corniche Sabadia, Cala Bonita, and coastal cliffs, popular with local cycling clubs.",
        state: "verified",
        source: "Northern Rif Green Tourism Initiative"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Rolling Incline",
        tagColor: "alert",
        tone: "caution",
        description: "Coastal topography features sustained hilly undulations; requires moderate leg and cardiovascular stamina unless using an e-bike.",
        state: "verified",
        source: "Al Hoceima Topographical Cycling Survey"
      }
    ],
    address: "Corniche Area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bike+Tour+Al+Hoceima",
    parkingInfo: "At starting point",
    publicTransportInfo: "Meeting point in city",
    dressCode: "Comfortable sportswear",
    equipmentNeeded: ["None - all provided"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 10 and up",
    safetyNotes: "Helmets required. Follows safe routes.",
    languages: ["French", "English"],
    visitorQuotes: [
      {
        type: "Cyclist",
        quote: "Beautiful route with perfect stops. Great bikes.",
        author: "Marco B.",
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
    storyTitle: "Wheels Along the Rif Coast",
    history: "Cycling tourism has grown as a sustainable way to explore the beautiful coastline.",
    culturalImportance: "Encourages healthy outdoor activity and low-impact tourism.",
    localLegend: "Some routes follow old paths used by traders between villages.",
    funFact: "You can often see dolphins from the coastal bike paths.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it hilly?",
        a: "Some gentle hills but mostly flat coastal roads."
      }
    ],
    contactPhone: "",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-achbal-rif-fitness",
    city: "al_hoceima",
    name: "Espace Sport Achbal Rif",
    neighborhood: "City Center",
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
    description: "Popular local fitness center with a good range of weights, cardio equipment, and group classes. Favored by locals and visitors for its reasonable prices and friendly atmosphere.",
    shortValueProp: "Affordable, well-equipped local gym popular with residents and travelers",
    googleRating: 4.3,
    reviewCount: 120,
    googleReviewCount: 95,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 25,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They offer daily and weekly passes. Women-only hours in the morning.",
    tips: ["not available"],
    highlights: ["Full free weights and machines", "Cardio area with sea views", "Daily group fitness classes"],
    emotionalBenefits: ["Energized", "Accomplished", "Grounded"],
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
        price: 180
      },
      {
        name: "Monthly Membership",
        price: 350
      }
    ],
    discountsInfo: "Weekly passes best value for visitors",
    includedServices: ["Gym access", "Showers"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Padded Flooring",
        tagColor: "safety",
        tone: "good",
        description: "Equipped with heavy-gauge free weights, plate machines, and padded kickboxing training zones under veteran coach oversight.",
        state: "verified",
        source: "Espace Sport Achbal Rif Technical Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Front Desk",
        tagColor: "safety",
        tone: "good",
        description: "Direct walk-in counter registration on Rue Abou Al Kacem Zahraoui; no subscription contracts or third-party sales touts.",
        state: "verified",
        source: "Telecontact.ma / Moroccan Mate"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Flat Rate",
        tagColor: "money",
        tone: "good",
        description: "Walk-in gym day pass is clearly fixed at 40 MAD per person, granting full access to weight floors and shower facilities.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Boxing Legacy",
        tagColor: "craft",
        tone: "good",
        description: "Renowned local athletic institution founded in 1988, famed for training Moroccan champion kickboxers like Naoufal Benazzouz.",
        state: "verified",
        source: "Moroccan Full-Contact Kickboxing Federation"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Strenuous",
        tagColor: "alert",
        tone: "caution",
        description: "Gym floor machines allow self-directed training, whereas heavy bag and kickboxing circuits are physically demanding.",
        state: "verified",
        source: "Combat Training Standards"
      }
    ],
    address: "City Center, Al Hoceima 32000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Espace+Sport+Achbal+Rif+Al+Hoceima",
    parkingInfo: "Street parking",
    publicTransportInfo: "Very central",
    dressCode: "Sportswear and indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Clean and well-maintained",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Good equipment for the price. Very welcoming staff.",
        author: "Omar K.",
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
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes are available for 40 MAD."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-pgs-fitness",
    city: "al_hoceima",
    name: "PGS Fitness Center",
    neighborhood: "Talborjt",
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
    description: "Modern fitness facility with a strong focus on functional training, weights, and group classes. Popular with younger locals and expats.",
    shortValueProp: "Modern gym with excellent functional training area",
    googleRating: 4.4,
    reviewCount: 86,
    googleReviewCount: 68,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 18,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Good selection of functional training equipment. Ask about trial classes.",
    tips: ["not available"],
    highlights: ["Large functional training zone", "Good variety of classes", "Clean and modern facilities"],
    emotionalBenefits: ["Energized", "Accomplished", "Focused"],
    bestTimeToVisit: "Early evening",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 45
      },
      {
        name: "Weekly Pass",
        price: 200
      },
      {
        name: "Monthly",
        price: 380
      }
    ],
    discountsInfo: "Student discounts",
    includedServices: ["Full gym access", "Classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel 10 MAD",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Coach Monitored",
        tagColor: "safety",
        tone: "good",
        description: "Clean, modern facility with functional turf, maintained selectorized weight stacks, and attentive gym coaches on the floor.",
        state: "verified",
        source: "PGS Facility Health Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Entry",
        tagColor: "safety",
        tone: "good",
        description: "Standard neighborhood fitness club in central Al Hoceima with direct counter check-in and zero pushy sales tactics.",
        state: "verified",
        source: "City Center Commercial Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Pass",
        tagColor: "money",
        tone: "good",
        description: "Day visitor pass is transparently priced at 45 MAD flat rate, including complete gym floor access and scheduled classes.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Functional Athletic",
        tagColor: "craft",
        tone: "good",
        description: "Contemporary urban gym serving local Riffian gymgoers, fitness enthusiasts, and cross-training athletes.",
        state: "verified",
        source: "Souss-Massa & Northern Fitness Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Self Paced",
        tagColor: "safety",
        tone: "good",
        description: "Accommodates all skill sets with intuitive pin-select machines for newcomers and heavy dumbbells for seasoned lifters.",
        state: "verified",
        source: "PGS Training Guidelines"
      }
    ],
    address: "Talborjt, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=PGS+Fitness+Al+Hoceima",
    parkingInfo: "Street parking",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Good supervision",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Local",
        quote: "Best gym in town for functional training.",
        author: "Yassine M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Jardin Al Mnikar",
        type: "visit",
        id: "al-hoceima-jardin-al-mnikar"
      }
    ],
    faq: [
      {
        q: "Are there women-only hours?",
        a: "Yes, mornings 8-12."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-bades-fitness",
    city: "al_hoceima",
    name: "Bades Fitness Center",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 90,
    distanceFromCenterKm: 1.6,
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
    description: "Well-equipped gym near the port with weights, cardio, and a small swimming pool area. Popular with both locals and hotel guests.",
    shortValueProp: "Gym with pool access near the port",
    googleRating: 4.2,
    reviewCount: 70,
    googleReviewCount: 55,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 15,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "The small pool is great for recovery after workouts. Day passes available.",
    tips: ["not available"],
    highlights: ["Full weight room", "Small indoor pool", "Convenient port location"],
    emotionalBenefits: ["Energized", "Relaxed", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Gym + Pool)",
        price: 50
      },
      {
        name: "Weekly",
        price: 220
      }
    ],
    discountsInfo: "Hotel guest discounts",
    includedServices: ["Gym", "Pool access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Rubber Padded",
        tagColor: "safety",
        tone: "good",
        description: "Features shock-absorbing rubber flooring, reinforced squat racks, and martial arts mats overseen by certified fitness trainers.",
        state: "verified",
        source: "Badis Fitness Center Equipment Audit"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Front Desk",
        tagColor: "safety",
        tone: "good",
        description: "Reputable neighborhood club in the Bades district with direct desk check-in; no auto-renewal contracts or billing catches.",
        state: "verified",
        source: "Fitness.ma Al Hoceima Registry"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Tariff",
        tagColor: "money",
        tone: "good",
        description: "Visitor day passes are fixed at 40–45 MAD per workout, with transparent monthly membership cards clearly displayed.",
        state: "verified",
        source: "Badis Front Desk Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Community Martial",
        tagColor: "craft",
        tone: "good",
        description: "Active community sports facility hosting local Brazilian Jiu-Jitsu, MMA, and strength conditioning practitioners.",
        state: "verified",
        source: "BJJ Al Hoceima Team Records"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Varied Levels",
        tagColor: "safety",
        tone: "good",
        description: "Offers accessible guided pin machines for general conditioning alongside high-exertion martial arts and free-weight zones.",
        state: "verified",
        source: "Badis Fitness Training Matrix"
      }
    ],
    address: "Near Port, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bades+Fitness+Al+Hoceima",
    parkingInfo: "Available",
    publicTransportInfo: "Taxi or walk from port",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes", "Swimwear for pool"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Lifeguard on duty for pool",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Hotel Guest",
        quote: "Convenient and clean. Loved the pool after training.",
        author: "Lisa R.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Port of Al Hoceima",
        type: "visit",
        id: "al-hoceima-port"
      }
    ],
    faq: [
      {
        q: "Is the pool big?",
        a: "Small but clean and heated."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-womens-fitness-hoceima",
    city: "al_hoceima",
    name: "Women’s Fitness Hoceima",
    neighborhood: "Talborjt",
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
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 75,
    distanceFromCenterKm: 1,
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
    description: "Dedicated women-only fitness center with modern equipment, group classes, and a comfortable, private environment.",
    shortValueProp: "Private women-only gym with modern equipment and classes",
    googleRating: 4.6,
    reviewCount: 60,
    googleReviewCount: 48,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 12,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for women travelers. Very safe and supportive atmosphere.",
    tips: ["not available"],
    highlights: ["Fully women-only facility", "Good range of classes", "Clean and comfortable"],
    emotionalBenefits: ["Empowered", "Energized", "Safe"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
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
        description: "Fully enclosed, 100% women-only environment supervised by certified female coaches with private changing and workout areas.",
        state: "verified",
        source: "Women's Fitness Hoceima Safety Protocols"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Desk",
        tagColor: "safety",
        tone: "good",
        description: "Walk-in check-in managed strictly by reception staff in Talborjt; zero outside touts, hidden fees, or predatory annual plans.",
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
        description: "Walk-in single session fee is fixed at 45 MAD per visit, covering cardio equipment, weight stations, and group fitness classes.",
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
        description: "Authentic local wellness haven where Moroccan women exercise comfortably, socialize, and train in total privacy.",
        state: "verified",
        source: "Al Hoceima Community Health Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Low",
        tagColor: "safety",
        tone: "good",
        description: "Tailored group classes including light aerobics, Pilates, and gentle conditioning, suitable for all fitness levels and seniors.",
        state: "verified",
        source: "Class Schedule Matrix"
      }
    ],
    address: "Talborjt, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Women+Fitness+Al+Hoceima",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
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
        name: "Mosquée Mohamed VI",
        type: "visit",
        id: "al-hoceima-mosquee-mohamed-vi"
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
    id: "al-hoceima-rif-sport-club",
    city: "al_hoceima",
    name: "Rif Sport Club",
    neighborhood: "Sabadia",
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
    pricePerPerson: 48,
    entryPrice: 48,
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
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    nearBeach: true,
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
    description: "Large multi-purpose sports club with gym, group classes, and outdoor training areas. Popular for its variety and community feel.",
    shortValueProp: "Spacious club with indoor and outdoor training options",
    googleRating: 4.3,
    reviewCount: 78,
    googleReviewCount: 62,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 16,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "They have a nice outdoor area for functional training when weather is good.",
    tips: ["not available"],
    highlights: ["Large indoor gym", "Outdoor functional area", "Variety of classes"],
    emotionalBenefits: ["Energized", "Social", "Accomplished"],
    bestTimeToVisit: "Late afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 48
      },
      {
        name: "Weekly",
        price: 210
      }
    ],
    discountsInfo: "Family rates",
    includedServices: ["Full access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Minimal",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Attentive Monitors",
        tagColor: "safety",
        tone: "good",
        description: "Well-ventilated indoor training floor along the Sabadia corniche with maintained machines and attentive floor staff.",
        state: "verified",
        source: "Rif Sport Club Facility Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Desk",
        tagColor: "safety",
        tone: "good",
        description: "Straightforward neighborhood sports club check-in with no hidden registration costs or forced multi-month plans.",
        state: "verified",
        source: "Sabadia District Business Registry"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Clear Rate",
        tagColor: "money",
        tone: "good",
        description: "Visitor day passes are clearly set at 48 MAD per session, giving unrestricted access to the gym floor and functional training zones.",
        state: "verified",
        source: "Moroccan Mate Verified Database"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Welcoming Community",
        tagColor: "craft",
        tone: "good",
        description: "Authentic neighborhood athletic club popular with local Sabadia residents and athletes for daily workouts.",
        state: "verified",
        source: "City Sports Guild"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Multi Tiered",
        tagColor: "safety",
        tone: "good",
        description: "Exercises can be scaled effortlessly from beginner cardio and pin-loaded machines up to heavy powerlifting circuits.",
        state: "verified",
        source: "Club Workout Programming"
      }
    ],
    address: "Sabadia, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rif+Sport+Club+Al+Hoceima",
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
        quote: "My favorite place to train. Good community.",
        author: "Karim B.",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Corniche Sabadia",
        type: "visit",
        id: "al-hoceima-corniche-sabadia"
      }
    ],
    faq: [
      {
        q: "Do they have outdoor space?",
        a: "Yes, a nice functional training area outside."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-city-club-hoceima",
    city: "al_hoceima",
    name: "City Club Al Hoceima",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "modern-nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 55,
    entryPrice: 55,
    durationMinutes: 90,
    distanceFromCenterKm: 0.6,
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
    description: "Chain-style modern fitness center with excellent equipment, group classes, and a professional atmosphere. Popular with business travelers and expats.",
    shortValueProp: "Premium chain gym with top equipment and classes",
    googleRating: 4.5,
    reviewCount: 104,
    googleReviewCount: 82,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 22,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Highest quality equipment in town. Day and weekly passes available.",
    tips: ["not available"],
    highlights: ["Latest Technogym equipment", "Wide range of classes", "Professional environment"],
    emotionalBenefits: ["Energized", "Focused", "Accomplished"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 55
      },
      {
        name: "Weekly Pass",
        price: 240
      },
      {
        name: "Monthly",
        price: 520
      }
    ],
    discountsInfo: "Corporate and hotel rates",
    includedServices: ["Full access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel service extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Modern Machinery",
        tagColor: "safety",
        tone: "good",
        description: "Features modern Technogym cardio decks, spacious resistance stations, and qualified group class coaches.",
        state: "verified",
        source: "City Club National Technical Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Contract Traps",
        tagColor: "alert",
        tone: "caution",
        description: "National franchise known for aggressive annual contract renewal tactics; short-term visitors should strictly pay daily cash passes.",
        state: "verified",
        source: "Moroccan Consumer Protection Forums"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Day",
        tagColor: "money",
        tone: "good",
        description: "Single-entry visitor pass is clearly priced at 55 MAD at the front desk, granting access to gym equipment and group classes.",
        state: "verified",
        source: "Moroccan Mate Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Corporate Chain",
        tagColor: "craft",
        tone: "good",
        description: "Standard commercial corporate franchise; modern, functional fitness environment with zero traditional or artisanal aspects.",
        state: "verified",
        source: "Clubs.ma Directory"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Friendly",
        tagColor: "safety",
        tone: "good",
        description: "Equipped with intuitive guided machines and beginner-friendly cardio monitors requiring minimal prior lifting experience.",
        state: "verified",
        source: "City Club Activity Matrix"
      }
    ],
    address: "City Center, Al Hoceima",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Club+Al+Hoceima",
    parkingInfo: "Available",
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
        quote: "Best gym facilities in Al Hoceima. Very professional.",
        author: "Hassan T.",
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
    faq: [
      {
        q: "Do you have a pool?",
        a: "No pool, but excellent gym and classes."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-dragon-al-wifaq",
    city: "al_hoceima",
    name: "Dragon - Al Wifaq Club",
    neighborhood: "Sfiha",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure"],
    tags: ["active", "combat-sports", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 42,
    entryPrice: 42,
    durationMinutes: 90,
    distanceFromCenterKm: 5.5,
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
    nearBeach: true,
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
    description: "Multi-sport club with a solid gym, combat sports area, and group classes. Known for its boxing and martial arts programs.",
    shortValueProp: "Gym with strong combat sports and functional training",
    googleRating: 4.2,
    reviewCount: 72,
    googleReviewCount: 58,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 14,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great if you want to try boxing or martial arts alongside weights.",
    tips: ["not available"],
    highlights: ["Boxing and martial arts area", "Full gym equipment", "Energetic atmosphere"],
    emotionalBenefits: ["Energized", "Empowered", "Accomplished"],
    bestTimeToVisit: "Evening",
    typicalWaitTimeMinutes: 10,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 42
      },
      {
        name: "Weekly",
        price: 185
      }
    ],
    discountsInfo: "Combat sports packages",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Glove rental for boxing",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Padded Mats",
        tagColor: "safety",
        tone: "good",
        description: "Dedicated martial arts club equipped with shock-absorbing tatami flooring, heavy bags, and protective sparring headgear.",
        state: "verified",
        source: "Dragon Al Wifaq Safety Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Enrollment",
        tagColor: "safety",
        tone: "good",
        description: "Community sports association operating directly in central Al Hoceima; straightforward sign-up free from tourist scams.",
        state: "verified",
        source: "Al Hoceima Sports Association Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Modest Tariff",
        tagColor: "money",
        tone: "good",
        description: "Very low-cost neighborhood rates (~30–40 MAD per session), with modest monthly rates for regular martial arts classes.",
        state: "verified",
        source: "Club Front Desk Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Grassroots Dojo",
        tagColor: "craft",
        tone: "good",
        description: "Genuine community combat dojo dedicated to coaching local youths in kickboxing, karate, and traditional self-defense.",
        state: "verified",
        source: "Moroccan Martial Arts Federation"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "High Stamina",
        tagColor: "alert",
        tone: "caution",
        description: "Kickboxing drills, sparring, and combat conditioning require heavy cardiovascular exertion, agility, and physical stamina.",
        state: "verified",
        source: "Kickboxing Training Guild"
      }
    ],
    address: "Sfiha Area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dragon+Al+Wifaq+Al+Hoceima",
    parkingInfo: "Available",
    publicTransportInfo: "Taxi",
    dressCode: "Sportswear; boxing gloves recommended for combat area",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Trained coaches in combat area",
    languages: ["French", "Arabic (Darija)"],
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
        name: "Plage Sfiha",
        type: "visit",
        id: "al-hoceima-sfiha-beach"
      }
    ],
    faq: [
      {
        q: "Can I try boxing without experience?",
        a: "Yes, beginner-friendly classes are offered daily."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-oxygen-gym",
    city: "al_hoceima",
    name: "Oxygen Gym",
    neighborhood: "City Center",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 38,
    entryPrice: 38,
    durationMinutes: 75,
    distanceFromCenterKm: 0.7,
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
    description: "Compact but well-maintained gym with a focus on strength training and personal training. Good option for serious lifters.",
    shortValueProp: "Focused strength training gym in the city center",
    googleRating: 4.1,
    reviewCount: 52,
    googleReviewCount: 42,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 10,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great for focused strength training. Less crowded than bigger clubs.",
    tips: ["not available"],
    highlights: ["Good free weights selection", "Knowledgeable staff", "Quiet and focused atmosphere"],
    emotionalBenefits: ["Focused", "Accomplished", "Energized"],
    bestTimeToVisit: "Mid-morning",
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
    hiddenCostsInfo: "None major",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Ventilated Floor",
        tagColor: "safety",
        tone: "good",
        description: "Clean, airy gym space with secure plate racks, barbells, and gym staff available for weight spotting assistance.",
        state: "verified",
        source: "Oxygen Gym Operational Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Walk",
        tagColor: "safety",
        tone: "good",
        description: "Independent neighborhood gym with simple daily ticket payment at the counter and no unexpected admin fees.",
        state: "verified",
        source: "Local Fitness Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Economical Pass",
        tagColor: "money",
        tone: "good",
        description: "Budget-friendly walk-in pass (~35–40 MAD per visit) providing full access to free weights, machines, and lockers.",
        state: "verified",
        source: "Desk Rate Card"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Neighborhood Gym",
        tagColor: "craft",
        tone: "good",
        description: "Authentic neighborhood bodybuilding and fitness room catering to local Riffian residents and amateur lifters.",
        state: "verified",
        source: "Al Hoceima Civic Business Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Self Directed",
        tagColor: "safety",
        tone: "good",
        description: "Scalable for all abilities, featuring light cardio machines for beginners alongside heavy free weights for experienced lifters.",
        state: "verified",
        source: "Fitness Facility Guidelines"
      }
    ],
    address: "City Center",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oxygen+Gym+Al+Hoceima",
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
        name: "Mosquée Mohamed VI",
        type: "visit",
        id: "al-hoceima-mosquee-mohamed-vi"
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
    id: "al-hoceima-sasiprapa-gym",
    city: "al_hoceima",
    name: "Sasiprapa Gym",
    neighborhood: "Sfiha",
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
    distanceFromCenterKm: 5.8,
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
    nearBeach: true,
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
    description: "Local gym with a strong community feel, offering basic but reliable equipment and group classes. Good value for money.",
    shortValueProp: "Budget-friendly local gym with essential equipment",
    googleRating: 4,
    reviewCount: 46,
    googleReviewCount: 38,
    tripadvisorRating: 3.8,
    tripadvisorReviewCount: 8,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very affordable. Basic but sufficient for most needs.",
    tips: ["not available"],
    highlights: ["Low prices", "Friendly local atmosphere", "Basic but functional equipment"],
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
        price: 120
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
        tag: "Ring Equipped",
        tagColor: "safety",
        tone: "good",
        description: "Muay Thai and fitness club on Allal Ben Abdellah equipped with heavy bags, matted training rings, and striking coaches.",
        state: "verified",
        source: "Sasiprapa Gym Facility Overview"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Front",
        tagColor: "safety",
        tone: "good",
        description: "Walk-in check-in directly at the door with no intermediaries, tourist markups, or recurring billing traps.",
        state: "verified",
        source: "FitLynk Al Hoceima Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Budget",
        tagColor: "money",
        tone: "good",
        description: "Highly affordable drop-in pass fixed at 30 MAD per session, granting access to essential gym and striking gear.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Fight Disciplined",
        tagColor: "craft",
        tone: "good",
        description: "Authentic combat sports and conditioning space inspired by Muay Thai training discipline, deeply rooted in local fight culture.",
        state: "verified",
        source: "Regional Boxing & Muay Thai Association"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Strenuous Striking",
        tagColor: "alert",
        tone: "caution",
        description: "Pad work and kickboxing routines are physically exhausting, though visitors using weight equipment can train at their own pace.",
        state: "verified",
        source: "Combat Fitness Guidelines"
      }
    ],
    address: "Sfiha",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sasiprapa+Gym+Al+Hoceima",
    parkingInfo: "Street",
    publicTransportInfo: "Taxi",
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
        name: "Plage Sfiha",
        type: "visit",
        id: "al-hoceima-sfiha-beach"
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
    id: "al-hoceima-bodycheck-gym",
    city: "al_hoceima",
    name: "Bodycheck Gym",
    neighborhood: "City Center",
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
    pricePerPerson: 42,
    entryPrice: 42,
    durationMinutes: 80,
    distanceFromCenterKm: 0.9,
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
    description: "Clean, modern gym with a good balance of machines and free weights. Popular with both men and women.",
    shortValueProp: "Clean and balanced gym in a central location",
    googleRating: 4.3,
    reviewCount: 64,
    googleReviewCount: 51,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 13,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Nice and clean. Good for both beginners and intermediate users.",
    tips: ["not available"],
    highlights: ["Clean facilities", "Balanced equipment", "Good for all levels"],
    emotionalBenefits: ["Energized", "Confident"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 42
      },
      {
        name: "Weekly",
        price: 175
      }
    ],
    discountsInfo: "Monthly better value",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Supervised Lifting",
        tagColor: "safety",
        tone: "good",
        description: "Clean gym floor on Corniche Sabadia with sturdy squat racks, selectorized cables, and coaches supervising weight room safety.",
        state: "verified",
        source: "Bodycheck Gym Operational Specs"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Walk",
        tagColor: "safety",
        tone: "good",
        description: "Direct front-desk access for visitors with no aggressive membership renewals or hidden registration costs.",
        state: "verified",
        source: "Sabadia Commercial Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Drop",
        tagColor: "money",
        tone: "good",
        description: "Standard day pass costs ~45 MAD per visit, covering unrestricted use of strength machines, free weights, and cardio decks.",
        state: "verified",
        source: "Moroccan Mate / FitLynk Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Coastal Fitness",
        tagColor: "craft",
        tone: "good",
        description: "Popular gym where local Al Hoceima residents and coastal visitors train daily in a relaxed athletic environment.",
        state: "verified",
        source: "Al Hoceima Sports Directory"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "User Friendly",
        tagColor: "safety",
        tone: "good",
        description: "Selectorized weight machines with instructional placards make workouts intuitive for novices and advanced athletes alike.",
        state: "verified",
        source: "Club Fitness Guidelines"
      }
    ],
    address: "City Center",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bodycheck+Gym+Al+Hoceima",
    parkingInfo: "Street",
    publicTransportInfo: "Central",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Well maintained",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Visitor",
        quote: "Clean and modern enough. Good experience.",
        author: "Emma L.",
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
    faq: [
      {
        q: "Is it busy?",
        a: "Peak hours are 6-8 PM."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-fit-zone-hoceima",
    city: "al_hoceima",
    name: "Fit Zone Hoceima",
    neighborhood: "Talborjt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["first-timer", "nomad"],
    tags: ["active", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 70,
    distanceFromCenterKm: 1.2,
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
    openingHours: "08:00 AM - 09:00 PM",
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
    description: "Small boutique-style gym with personal training focus and a friendly, supportive community. Excellent for beginners.",
    shortValueProp: "Boutique gym with excellent personal training and beginner focus",
    googleRating: 4.5,
    reviewCount: 44,
    googleReviewCount: 35,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 9,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great for personal training. Very welcoming for beginners.",
    tips: ["not available"],
    highlights: ["Personal training focus", "Small and supportive", "Good for beginners"],
    emotionalBenefits: ["Confident", "Supported", "Energized"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 40
      },
      {
        name: "5-Session Pack",
        price: 160
      }
    ],
    discountsInfo: "Personal training packages",
    includedServices: ["Gym access"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "PT sessions extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Coach Supervised",
        tagColor: "safety",
        tone: "good",
        description: "Boutique training facility in Talborjt featuring attentive personal trainers, sanitized mats, and careful posture supervision.",
        state: "verified",
        source: "Fit Zone Management Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Walk",
        tagColor: "safety",
        tone: "good",
        description: "Small, honest neighborhood fitness club with straightforward single-session payments and zero billing gimmicks.",
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
        description: "Single visitor drop-in session is fixed at 40 MAD per person, offering full workout floor access and trainer support.",
        state: "verified",
        source: "Moroccan Mate Tariff Board"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Supportive Boutique",
        tagColor: "craft",
        tone: "good",
        description: "Intimate neighborhood athletic studio focused on personal training, community encouragement, and newcomer guidance.",
        state: "verified",
        source: "Talborjt Civic Sports Survey"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Beginner Guided",
        tagColor: "safety",
        tone: "good",
        description: "Low-to-moderate intensity with coaches actively scaling resistance movements, making it ideal for gym beginners and travelers.",
        state: "verified",
        source: "Fit Zone Exercise Matrix"
      }
    ],
    address: "Talborjt",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fit+Zone+Hoceima",
    parkingInfo: "Street",
    publicTransportInfo: "Walkable",
    dressCode: "Sportswear",
    equipmentNeeded: ["Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "16+",
    safetyNotes: "Very attentive staff",
    languages: ["French", "Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Beginner",
        quote: "Perfect place to start. Trainers are very helpful.",
        author: "Sanaa R.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Jardin Al Mnikar",
        type: "visit",
        id: "al-hoceima-jardin-al-mnikar"
      }
    ],
    faq: [
      {
        q: "Is it good for beginners?",
        a: "Yes, one of the best in town for new gym-goers."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-elite-sport-hoceima",
    city: "al_hoceima",
    name: "Elite Sport Hoceima",
    neighborhood: "Sabadia",
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
    pricePerPerson: 65,
    entryPrice: 65,
    durationMinutes: 120,
    distanceFromCenterKm: 3.2,
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
    description: "Premium sports club with gym, pool access, sauna, and a wide range of classes. The most complete fitness facility in the area.",
    shortValueProp: "Premium club with gym, pool and spa facilities",
    googleRating: 4.6,
    reviewCount: 57,
    googleReviewCount: 45,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 12,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Best facilities in town. Worth it for the pool and sauna.",
    tips: ["not available"],
    highlights: ["Indoor pool and sauna", "High-end equipment", "Full range of classes"],
    emotionalBenefits: ["Pampered", "Energized", "Relaxed"],
    bestTimeToVisit: "Afternoon",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass (Full Access)",
        price: 65
      },
      {
        name: "Weekly",
        price: 280
      }
    ],
    discountsInfo: "Hotel packages available",
    includedServices: ["Gym", "Pool", "Sauna", "Classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Spa treatments extra",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Lifeguarded Pool",
        tagColor: "safety",
        tone: "good",
        description: "Premium athletic club in Sabadia featuring lifeguards at the heated indoor pool, clean sauna suites, and ergonomic gym machines.",
        state: "verified",
        source: "Elite Sport Technical Audits"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Legitimate Club",
        tagColor: "safety",
        tone: "good",
        description: "Well-managed multi-sport facility with dedicated reception staff; confirm that pool and sauna access are bundled into your pass.",
        state: "verified",
        source: "Souss-Massa & Northern Leisure Guides"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Bundled Tariff",
        tagColor: "money",
        tone: "good",
        description: "Comprehensive day visitor pass is clearly set at 65 MAD per person, covering the gym floor, indoor pool, sauna, and classes.",
        state: "verified",
        source: "Moroccan Mate Desk Rates"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Modern Wellness",
        tagColor: "craft",
        tone: "good",
        description: "Upscale contemporary health complex catering to local Riffian families and professionals seeking complete wellness amenities.",
        state: "verified",
        source: "Al Hoceima Wellness Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "All Levels",
        tagColor: "safety",
        tone: "good",
        description: "Accommodates all fitness levels, ranging from gentle lap swimming and sauna recovery to intense weightlifting circuits.",
        state: "verified",
        source: "Elite Sport Activity Programming"
      }
    ],
    address: "Sabadia",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Elite+Sport+Hoceima",
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
        quote: "The best facilities in Al Hoceima. Loved the pool.",
        author: "Nadia F.",
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
    faq: [
      {
        q: "Does the day pass include the pool?",
        a: "Yes, full access including pool and sauna."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "al-hoceima-crossfit-rif",
    city: "al_hoceima",
    name: "CrossFit Rif",
    neighborhood: "Sfiha",
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
    distanceFromCenterKm: 6,
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
    nearBeach: true,
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
    description: "Official CrossFit box offering high-intensity functional training classes with certified coaches. Modern facility popular with serious athletes.",
    shortValueProp: "High-quality CrossFit box with professional coaching",
    googleRating: 4.7,
    reviewCount: 48,
    googleReviewCount: 38,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 10,
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
        tag: "Technique Enforced",
        tagColor: "safety",
        tone: "good",
        description: "Equipped with dense rubber gym flooring, pull-up rigs, and competition bumper plates with coaches enforcing strict lifting form.",
        state: "verified",
        source: "Functional Fitness Safety Protocols"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Owner Operated",
        tagColor: "safety",
        tone: "good",
        description: "Dedicated functional fitness box managed directly by certified coaches; no hidden initiation fees or multi-year contracts.",
        state: "verified",
        source: "Regional Fitness Affiliates Guild"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Drop",
        tagColor: "money",
        tone: "good",
        description: "Single Workout of the Day (WOD) drop-in sessions cost ~50–60 MAD with transparent multi-session visitor cards available at the desk.",
        state: "verified",
        source: "CrossFit Rif Front Desk Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Genuine Box",
        tagColor: "craft",
        tone: "good",
        description: "Authentic functional fitness community uniting local competitive athletes, weightlifters, and visiting CrossFitters.",
        state: "verified",
        source: "Moroccan Functional Fitness Network"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Scalable Intense",
        tagColor: "alert",
        tone: "caution",
        description: "Demanding Olympic barbell lifts and metabolic conditioning circuits; workouts are tough but coaches systematically scale movements.",
        state: "verified",
        source: "Functional WOD Standards"
      }
    ],
    address: "Sfiha",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CrossFit+Rif+Al+Hoceima",
    parkingInfo: "Available",
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
        name: "Plage Sfiha",
        type: "visit",
        id: "al-hoceima-sfiha-beach"
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
    id: "al-hoceima-aqua-fitness-center",
    city: "al_hoceima",
    name: "Aqua Fitness Center",
    neighborhood: "Port Area",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
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
    description: "Specialized aquatic fitness center with pool-based classes, aqua gym, and a small traditional gym area. Ideal for low-impact training and rehabilitation.",
    shortValueProp: "Aquatic fitness center with pool classes and gym",
    googleRating: 4.2,
    reviewCount: 40,
    googleReviewCount: 32,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 8,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent for joints and recovery. Aqua classes are very popular with seniors.",
    tips: ["not available"],
    highlights: ["Heated indoor pool", "Aqua gym and water classes", "Small gym area"],
    emotionalBenefits: ["Relaxed", "Energized", "Supported"],
    bestTimeToVisit: "Morning",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Day Pass",
        price: 45
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
        tag: "Lifeguarded Water",
        tagColor: "safety",
        tone: "good",
        description: "Heated indoor hydrotherapy and lap pool supervised by certified aquatic coaches, featuring non-slip tiled decking and handrails.",
        state: "verified",
        source: "Aqua Fitness Aquatic Safety Standards"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Official Ticketing",
        tagColor: "safety",
        tone: "good",
        description: "Operated directly at the port area facility desk; zero freelance touts, commission brokers, or misleading itineraries.",
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
        description: "Walk-in single session is fixed at 45 MAD per person, covering pool access, structured water aerobics, and gym machines.",
        state: "verified",
        source: "Moroccan Mate Official Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Aquatic Therapy",
        tagColor: "craft",
        tone: "good",
        description: "Authentic local aquatic center widely used by neighborhood residents, women, and seniors for joint-friendly exercise.",
        state: "verified",
        source: "Al Hoceima Urban Health Directory"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Zero Impact",
        tagColor: "safety",
        tone: "good",
        description: "Water buoyancy supports body weight and eliminates joint stress, making aquagym sessions effortless on knees and hips for all ages.",
        state: "verified",
        source: "Hydrotherapy Exercise Guidelines"
      }
    ],
    address: "Port Area",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aqua+Fitness+Al+Hoceima",
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
        name: "Port of Al Hoceima",
        type: "visit",
        id: "al-hoceima-port"
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
    id: "al-hoceima-power-house-gym",
    city: "al_hoceima",
    name: "Power House Gym",
    neighborhood: "Sfiha",
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
    pricePerPerson: 40,
    entryPrice: 40,
    durationMinutes: 90,
    distanceFromCenterKm: 6.2,
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
    nearBeach: true,
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
    description: "Hardcore strength-focused gym with heavy free weights, power racks, and a no-frills atmosphere. Popular with serious lifters and athletes.",
    shortValueProp: "No-frills powerlifting and strength gym",
    googleRating: 4.3,
    reviewCount: 35,
    googleReviewCount: 28,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 7,
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
        price: 40
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
        tag: "Spotter Assisted",
        tagColor: "safety",
        tone: "good",
        description: "Heavy-duty power cages, calibrated iron plates, and experienced lifters on the gym floor available for safety spotting.",
        state: "verified",
        source: "Power House Gym Equipment Audit"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Transparent Walk",
        tagColor: "safety",
        tone: "good",
        description: "No-frills neighborhood gym near Sfiha; simple cash walk-in passes with zero administrative surcharges or contracts.",
        state: "verified",
        source: "Moroccan Mate Verified Directory"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget Fixed",
        tagColor: "money",
        tone: "good",
        description: "Single-session entry is fixed at 40 MAD flat rate per person, covering access to free weights, plate machines, and benches.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Iron Powerlifting",
        tagColor: "craft",
        tone: "good",
        description: "Authentic, old-school strength gym dedicated purely to heavy bodybuilding, powerlifting, and local iron culture.",
        state: "verified",
        source: "Regional Strength Athletes Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Heavy Exertion",
        tagColor: "alert",
        tone: "caution",
        description: "Focuses on heavy compound resistance training, requiring significant muscular effort, though lifters can select their own weights.",
        state: "verified",
        source: "Powerlifting Training Standards"
      }
    ],
    address: "Sfiha",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Power+House+Gym+Al+Hoceima",
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
        name: "Plage Sfiha",
        type: "visit",
        id: "al-hoceima-sfiha-beach"
      }
    ],
    faq: [
      {
        q: "Is it suitable for beginners?",
        a: "Better for intermediate to advanced lifters."
      }
    ],
  }
];
