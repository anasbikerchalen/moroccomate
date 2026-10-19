/**
 * =========================================================================
 * [CHEFCHAOUEN] THINGS TO DO — SPORT & ACTIVE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/chefchaouen/index.ts
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
export const chefchaouenSportThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-akchour-waterfalls-trek",
    city: "chefchaouen",
    name: "Akchour Waterfalls Trek",
    neighborhood: "Akchour",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad", "photographer"],
    tags: [
      "active",
      "authentic",
      "climbing-adventure",
      "hiking-trek",
      "mountain",
      "nature",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in",
      "water-sport"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 240,
    distanceFromCenterKm: 28,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    openingHours: "Tours depart 08:00 AM - 09:30 AM (Daily, weather permitting)",
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
    description: "A guided half-day trek through the limestone gorges of Akchour in Talassemtane National Park, ending at the spectacular 100-meter Grande Cascade waterfall where icy turquoise pools invite brave swimmers. The trail follows a river through fir and cedar forest with dramatic cliff formations.",
    shortValueProp: "Trek through Rif limestone gorges to a thundering 100-meter turquoise waterfall",
    googleRating: 4.8,
    reviewCount: 4780,
    googleReviewCount: 3240,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 980,
    viatorRating: 4.8,
    viatorReviewCount: 320,
    getyourguideRating: 4.7,
    getyourguideReviewCount: 240,
    tip: "Bring swimwear for the lower pools; the Grande Cascade water is icy even in July, but the smaller God's Bridge pool is more comfortable for swimming.",
    tips: ["not available"],
    highlights: [
      "Half-day guided trek through Talassemtane National Park limestone gorges",
      "Spectacular 100-meter Grande Cascade waterfall with turquoise swimming pools",
      "Dramatic cliff rock formations including the iconic God's Bridge natural arch",
      "Crystal-clear river path shaded by fir, cedar, and Atlas pistachio trees"
    ],
    emotionalBenefits: ["Adventurous", "Energized", "Accomplished"],
    bestTimeToVisit: "Morning (08:00 AM) to avoid afternoon heat and crowds",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best April-June and September-October; avoid heavy winter rains)",
    ticketTypes: [
      {
        name: "Half-Day Guided Trek (group)",
        price: 250
      },
      {
        name: "Private Guided Trek",
        price: 600
      },
      {
        name: "Self-Guided Park Entry",
        price: 20
      }
    ],
    discountsInfo: "Group discounts available for 4 or more; children under 12 half price",
    includedServices: ["Professional mountain guide", "Round-trip transport from Chefchaouen", "Park entrance fee"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Lunch at the riverside café is extra (80-120 MAD); tip the guide 30-50 MAD",
    address: "Akchour Village, Talassemtane National Park, Chefchaouen Province",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Akchour%20Waterfalls%2C%20Talassemtane%20National%20Park%2C%20Morocco",
    parkingInfo: "Free dirt parking at the trailhead village",
    publicTransportInfo: "Grand taxi from Chefchaouen to Akchour (25 MAD/person, 45 minutes); included in most tours",
    dressCode: "Hiking clothes; swimwear under clothes for the pools; sturdy water shoes recommended",
    equipmentNeeded: ["Sturdy hiking shoes", "Swimwear and towel", "Sunscreen and hat", "2L water bottle", "Snacks"],
    fitnessLevel: "Active (3-4 hours of hiking with some rocky sections and modest elevation gain)",
    ageRestrictions: "Ages 8 and up welcome; younger children may struggle on rocky sections",
    safetyNotes: "Never swim in the Grande Cascade pool during or after rain due to flash flood risk; follow guide's advice on current conditions",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Active Nomad",
        quote: "The Grande Cascade took my breath away. The water is freezing but I swam anyway. Best day of my Morocco trip.",
        author: "Liam H. from Dublin",
        rating: 5
      },
      {
        type: "Family Day Out",
        quote: "Our kids (10 and 12) loved scrambling over the rocks. The guide knew every swimming hole and the best photo spots.",
        author: "Sarah M. and family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "God's Bridge Natural Arch",
        type: "visit",
        id: "chefchaouen-gods-bridge"
      },
      {
        name: "Talassemtane National Park Trek",
        type: "visit",
        id: "chefchaouen-talassemtane-trek"
      }
    ],
    storyTitle: "The Cascades of the Rif",
    history: "The Akchour gorges have been a sacred site for the Jbala people for centuries, with local legend holding that the waterfall was created by a Sufi saint who struck the cliff to release water for thirsty villagers. The area was incorporated into Talassemtane National Park in 2004 to protect its unique limestone ecosystem.",
    culturalImportance: "The gorges remain an important seasonal grazing and foraging ground for Jbalan families. Local guides are mostly from Akchour village itself, making tourism a vital economic lifeline for the community.",
    localLegend: "Local guides swear that the largest pool beneath the Grande Cascade is bottomless and connected by underground channels to the Mediterranean Sea.",
    funFact: "The turquoise color of the pools comes from dissolved limestone minerals, similar to the famous Pamukkale terraces in Turkey but in a mountain river setting.",
    officialWebsite: "https://www.talassemtane.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I do this trek without a guide?",
        a: "Yes, the main trail is well-marked, but a guide adds enormous value through local knowledge and ensures safety in case of injury or flash flood."
      },
      {
        q: "Is the water safe to swim in?",
        a: "Yes, the water is clean and pristine, but extremely cold. Avoid the upper Grande Cascade pool after rain due to flash flood risk."
      }
    ],
    contactPhone: "+212 661-223344",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-gods-bridge",
    city: "chefchaouen",
    name: "God's Bridge Natural Arch Trek",
    neighborhood: "Akchour",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "photographer", "nomad"],
    tags: [
      "authentic",
      "climbing-adventure",
      "hiking-trek",
      "instagrammable",
      "mountain",
      "nature",
      "private",
      "walk-in",
      "water-sport"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 150,
    distanceFromCenterKm: 28,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    nearMedina: false,
    goodForRain: false,
    openingHours: "Tours depart 08:30 AM - 10:00 AM (Daily)",
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
    description: "A moderate 90-minute hike along the Akchour river to a dramatic natural limestone arch spanning the gorge, known locally as Pont de Dieu (God's Bridge). The arch frames a deep turquoise pool that is the most popular swimming spot in the Rif Mountains.",
    shortValueProp: "Hike to a natural limestone arch framing the most photogenic turquoise pool in Morocco",
    googleRating: 4.7,
    reviewCount: 3130,
    googleReviewCount: 2150,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 620,
    viatorRating: 4.7,
    viatorReviewCount: 210,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 150,
    tip: "Arrive by 09:00 AM to have the arch and pool to yourself; by noon in peak season, the swimming hole can be crowded with day-trippers.",
    tips: ["not available"],
    highlights: [
      "Dramatic natural limestone arch spanning the Akchour gorge",
      "Deep turquoise swimming pool beneath the arch",
      "Easy riverside trail through shaded forest",
      "Cliff-jumping spots for the adventurous (5-8 meter jumps)"
    ],
    emotionalBenefits: ["Adventurous", "Scenic", "Energized"],
    bestTimeToVisit: "Morning (09:00 AM - 11:00 AM) for solitude and clear water",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best May-October for swimming; spring brings strongest water flow)",
    ticketTypes: [
      {
        name: "Guided Trek (group)",
        price: 150
      },
      {
        name: "Private Trek",
        price: 400
      }
    ],
    discountsInfo: "Children under 12 half price; group rates for 4+",
    includedServices: ["Local guide", "Round-trip transport from Chefchaouen"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Park entry 20 MAD extra; tip guide 20-30 MAD",
    address: "Pont de Dieu, Akchour, Chefchaouen Province",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=God%27s%20Bridge%2C%20Pont%20de%20Dieu%2C%20Akchour%2C%20Morocco",
    parkingInfo: "Free dirt parking at the Akchour trailhead",
    publicTransportInfo: "Grand taxi from Chefchaouen (25 MAD/person, 45 minutes); included in tours",
    dressCode: "Hiking clothes with swimwear underneath; water shoes recommended",
    equipmentNeeded: ["Sturdy hiking shoes", "Swimwear and towel", "Water shoes", "1.5L water", "Snacks"],
    fitnessLevel: "Moderate (90 minutes each way on a riverside trail with some rocky sections)",
    ageRestrictions: "Ages 6 and up welcome",
    safetyNotes: "Check water depth before cliff-jumping; never jump during or after rain. Rocks around the pool are very slippery.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Trip",
        quote: "The natural arch framing the turquoise pool is one of the most iconic shots in Morocco. Best visited early before crowds arrive.",
        author: "Marcus L. from Berlin",
        rating: 5
      },
      {
        type: "Active Nomad",
        quote: "Cliff jumping from the lower ledge was exhilarating. The water is cold but refreshing after the hike.",
        author: "Liam H.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Akchour Waterfalls Trek",
        type: "visit",
        id: "chefchaouen-akchour-waterfalls-trek"
      },
      {
        name: "Talassemtane National Park Trek",
        type: "visit",
        id: "chefchaouen-talassemtane-trek"
      }
    ],
    storyTitle: "The Bridge Built by God",
    history: "The God's Bridge natural arch was carved over millennia by the Akchour river cutting through limestone. Local Jbalan folklore holds that the arch was created by divine hand to allow villagers to cross the gorge during floods.",
    culturalImportance: "The arch is a sacred site for the local Jbala people, who traditionally made wishes while standing on the bridge and throwing a stone into the pool below.",
    localLegend: "Local guides say that wishes made while passing under the arch at sunrise will come true within a year, but only if kept secret.",
    funFact: "The arch is approximately 25 meters wide and 15 meters above the water, with the pool beneath reaching depths of over 8 meters in spring.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I cliff jump from the arch?",
        a: "Yes, from the lower ledges (5-8 meters), but always check water depth first with a local guide. The upper arch is too high and dangerous."
      },
      {
        q: "Is the trail shaded?",
        a: "Mostly yes, the trail follows the river through fir and cedar forest with extensive tree cover."
      }
    ],
    contactPhone: "+212 661-556677",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-talassemtane-trek",
    city: "chefchaouen",
    name: "Talassemtane National Park Full-Day Trek",
    neighborhood: "Talassemtane National Park",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad", "quiet-mystic"],
    tags: [
      "active",
      "authentic",
      "climbing-adventure",
      "hiking-trek",
      "mountain",
      "nature",
      "off-the-beaten-path",
      "private",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 350,
    entryPrice: 350,
    durationMinutes: 480,
    distanceFromCenterKm: 35,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "Tours depart 07:00 AM (Daily, weather permitting)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["intermediate", "advanced"],
    duration: "full-day",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A challenging full-day guided trek through the cedar and fir forests of Talassemtane National Park, Morocco's only true alpine park. The route climbs through Jbalan villages and shepherd pastures to reach the high ridgeline with sweeping views toward the Mediterranean and the Pyrenees on clear days.",
    shortValueProp: "Conquer Morocco's only alpine national park on a full-day rif trek",
    googleRating: 4.8,
    reviewCount: 1415,
    googleReviewCount: 980,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 280,
    viatorRating: 4.7,
    viatorReviewCount: 95,
    getyourguideRating: 4.7,
    getyourguideReviewCount: 60,
    tip: "Book a guide who knows the shepherds' tracks above the marked trails; the high ridgeline sunset views over the Mediterranean are unforgettable and rarely visited by tourists.",
    tips: ["not available"],
    highlights: [
      "Full-day trek through Morocco's only alpine national park",
      "Ancient Atlas cedar and fir forest with rare Barbary macaque habitat",
      "Traditional Jbalan shepherd villages and summer pastures (azibs)",
      "High ridgeline views toward the Mediterranean and southern Spain"
    ],
    emotionalBenefits: ["Accomplished", "Grounded", "Inspired"],
    bestTimeToVisit: "April-June and September-November for clear weather and wildflowers",
    typicalWaitTimeMinutes: 0,
    seasonality: "April-November (Snow blocks high trails in winter)",
    ticketTypes: [
      {
        name: "Group Trek (4-8 people)",
        price: 350
      },
      {
        name: "Private Trek",
        price: 800
      },
      {
        name: "2-Day Trek with overnight at azib",
        price: 1200
      }
    ],
    discountsInfo: "Group rates for 4+; multi-day packages available",
    includedServices: [
      "Professional mountain guide",
      "Round-trip transport from Chefchaouen",
      "Park entrance fee",
      "Picnic lunch"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 50-100 MAD; bring extra cash for village tea and craft purchases",
    address: "Talassemtane National Park, Chefchaouen Province",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Talassemtane%20National%20Park%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free parking at the park entrance villages",
    publicTransportInfo: "Grand taxi from Chefchaouen; included in tour price",
    dressCode: "Layered hiking clothing; sturdy broken-in boots; rain shell in spring and autumn",
    equipmentNeeded: ["Sturdy hiking boots", "Layered clothing", "2-3L water", "Sun protection", "Snacks", "Camera"],
    fitnessLevel: "Active (6-8 hours of hiking, 600-1000m elevation gain, some scrambling)",
    ageRestrictions: "Ages 14 and up; minors must be accompanied",
    safetyNotes: "Weather can change rapidly on the ridgeline; never trek alone. Hire only certified guides registered with the park authority.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Adventure Traveler",
        quote: "The hardest and most rewarding day of hiking in Morocco. Our guide was incredible and the high ridgeline views toward Spain were otherworldly.",
        author: "Lucas P. from Geneva",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Akchour Waterfalls Trek",
        type: "visit",
        id: "chefchaouen-akchour-waterfalls-trek"
      },
      {
        name: "Jebel el Kelaa Summit Climb",
        type: "visit",
        id: "chefchaouen-jebel-kelaa-climb"
      }
    ],
    storyTitle: "The Alpine Park of the Rif",
    history: "Talassemtane National Park was established in 2004 to protect the unique ecosystem of the Rif Mountains, including the largest remaining stand of Atlas fir forest in Morocco. The park covers 64,000 hectares and is home to endangered Barbary macaques, Atlas deer, and over 200 plant species found nowhere else.",
    culturalImportance: "The park is the ancestral territory of the Jbala people, who have practiced transhumant shepherding here for centuries. Many of the trails used by trekkers today are ancient shepherd paths connecting summer pastures (azibs) with winter villages.",
    localLegend: "Jbalan shepherds believe that the oldest Atlas cedar in the park, known as 'Cedar of the Saints,' is inhabited by the spirits of seven Sufi masters who bless the flocks that pass beneath it.",
    funFact: "Talassemtane is the only place in Morocco where the endangered Atlas fir (Abies marocana) grows naturally, with some trees estimated to be over 500 years old.",
    officialWebsite: "https://www.talassemtane.com",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I do this as a beginner hiker?",
        a: "It is challenging but doable for reasonably fit beginners. Be honest about your fitness when booking; routes can be adjusted."
      },
      {
        q: "Are there Barbary macaques?",
        a: "Yes, the park is home to the endangered Barbary macaque. Sightings are common but not guaranteed; never feed or approach them."
      }
    ],
    contactPhone: "+212 661-778899",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-jebel-kelaa-climb",
    city: "chefchaouen",
    name: "Jebel el Kelaa Summit Climb",
    neighborhood: "Talassemtane National Park",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "quiet-mystic"],
    tags: [
      "active",
      "climbing-adventure",
      "hiking-trek",
      "mountain",
      "nature",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 400,
    entryPrice: 400,
    durationMinutes: 420,
    distanceFromCenterKm: 30,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    goodForRain: false,
    openingHours: "Tours depart 05:30 AM - 06:30 AM (Daily, weather permitting)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "climbing-adventure",
    sportIntent: "experience",
    skillLevel: ["intermediate", "advanced"],
    duration: "full-day",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A challenging guided ascent of Jebel el Kelaa (1,935m), one of the highest peaks in the central Rif range. The climb rewards trekkers with 360-degree views of the entire Chefchaouen range, the Mediterranean coast, and on exceptionally clear days, the distant silhouette of the Sierra Nevada in Spain.",
    shortValueProp: "Stand atop one of the highest peaks of the Rif with views to Spain",
    googleRating: 4.7,
    reviewCount: 615,
    googleReviewCount: 420,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 120,
    viatorRating: 4.6,
    viatorReviewCount: 45,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 30,
    tip: "Start the climb at 06:00 AM in summer to reach the summit before midday clouds obscure the view; the Mediterranean is most visible at this hour.",
    tips: ["not available"],
    highlights: [
      "Summit of Jebel el Kelaa (1,935m) with 360-degree Rif views",
      "Rare sight of the Sierra Nevada in Spain on exceptionally clear days",
      "Ancient shepherd trails through cedar and Atlas fir forest",
      "Sighting opportunities for Barbary macaques and golden eagles"
    ],
    emotionalBenefits: ["Accomplished", "Inspired", "Grounded"],
    bestTimeToVisit: "April-June and September-November",
    typicalWaitTimeMinutes: 0,
    seasonality: "April-November (Winter ascents possible only with mountaineering equipment)",
    ticketTypes: [
      {
        name: "Group Climb (2-6)",
        price: 400
      },
      {
        name: "Private Climb",
        price: 900
      }
    ],
    discountsInfo: "Group rates for 4+; multi-peak packages available",
    includedServices: ["Certified mountain guide", "Round-trip transport", "Park entry", "Summit picnic"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 50-100 MAD; bring cash for village tea stops",
    address: "Jebel el Kelaa, Talassemtane National Park, Chefchaouen Province",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jebel%20el%20Kelaa%2C%20Talassemtane%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free parking at the trailhead village",
    publicTransportInfo: "Grand taxi from Chefchaouen; included in tour",
    dressCode: "Layered hiking clothing; sturdy boots; wind shell essential even in summer",
    equipmentNeeded: [
      "Sturdy broken-in hiking boots",
      "Layered clothing",
      "Wind shell",
      "2-3L water",
      "Snacks",
      "Camera"
    ],
    fitnessLevel: "Intense (6-7 hours hiking, 1000m elevation gain, some scrambling on summit ridge)",
    ageRestrictions: "Ages 16 and up; minors must be accompanied by an adult",
    safetyNotes: "Summit ridge has exposure; not suitable for those with vertigo. Weather can change rapidly; turn back if clouds descend.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Adventure Traveler",
        quote: "One of the most rewarding summits in Morocco. Hard work but the 360 views from the top are worth every step.",
        author: "Lucas P. from Geneva",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Talassemtane National Park Trek",
        type: "visit",
        id: "chefchaouen-talassemtane-trek"
      },
      {
        name: "Akchour Waterfalls Trek",
        type: "visit",
        id: "chefchaouen-akchour-waterfalls-trek"
      }
    ],
    storyTitle: "The Sentinel of the Rif",
    history: "Jebel el Kelaa takes its name from the Arabic word for 'fortress' (kalaa), reflecting its strategic position overlooking the Chefchaouen basin. The peak was used as a lookout post by Berber and Andalusian defenders for centuries, and later by Spanish troops during the Protectorate.",
    culturalImportance: "The mountain is considered sacred by local Jbala, who traditionally refrained from climbing it on Fridays out of respect for the spirits believed to inhabit the summit.",
    localLegend: "Local guides swear that on certain nights, the summit glows with a faint blue light, attributed to the spirits of Andalusian refugees who lit signal fires to guide later arrivals from Granada.",
    funFact: "The summit cairn was originally built by Spanish geographers in 1928 as a triangulation point; it has been rebuilt and enlarged by local guides many times since.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need climbing gear?",
        a: "No, the route is a strenuous hike with some light scrambling, but no technical climbing. Hands are used for balance on a few sections near the summit."
      },
      {
        q: "Can I see Spain from the top?",
        a: "On exceptionally clear days (usually after a winter storm), you can see the silhouette of the Sierra Nevada. The Mediterranean is visible most clear days."
      }
    ],
    contactPhone: "+212 661-334455",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-spanish-mosque-hike",
    city: "chefchaouen",
    name: "Spanish Mosque Sunset Photography Hike",
    neighborhood: "Bouzafar Hill",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "romantic", "nomad"],
    tags: [
      "climbing-adventure",
      "hiking-trek",
      "instagrammable",
      "photography",
      "private",
      "sunset",
      "urban",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 150,
    distanceFromCenterKm: 0.7,
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
    goodForRain: false,
    openingHours: "Tours depart 90 minutes before sunset (varies seasonally)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "2-3 hours",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A guided sunset photography walk up Bouzafar Hill to the abandoned Spanish Mosque, timed to capture the iconic golden-to-blue-hour transition over the Blue Pearl. Local photographer guides know the best framing spots along the path and at the mosque itself.",
    shortValueProp: "Capture the perfect sunset shot of the Blue Pearl with a local photographer",
    googleRating: 4.7,
    reviewCount: 555,
    googleReviewCount: 380,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 110,
    viatorRating: 4.6,
    viatorReviewCount: 40,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 25,
    tip: "Bring a tripod and a wide-angle lens for the mosque interior shots; the guide will help you find the best corner of the terrace that avoids the worst of the crowds.",
    tips: ["not available"],
    highlights: [
      "Guided sunset photography walk up Bouzafar Hill",
      "Best vantage points known only to local photographers",
      "Golden-to-blue-hour transition over the entire medina",
      "Expert guidance on composition, exposure, and timing"
    ],
    emotionalBenefits: ["Inspired", "Creative", "Scenic"],
    bestTimeToVisit: "Year-round at sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best in spring and autumn for clear skies)",
    ticketTypes: [
      {
        name: "Group Photography Walk",
        price: 100
      },
      {
        name: "Private Photography Walk",
        price: 250
      }
    ],
    discountsInfo: "Group rates for 4+; includes basic photography instruction",
    includedServices: ["Local photographer guide", "Composition and exposure coaching", "Flashlight for descent"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 20-30 MAD; café refreshments extra",
    address: "Bouzafar Hill, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Spanish%20Mosque%2C%20Bouzafar%20Hill%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Parking at Place el-Majzen; then walk",
    publicTransportInfo: "Walkable from the medina",
    dressCode: "Comfortable walking clothes; light layer for cooler evening temperatures",
    equipmentNeeded: [
      "Camera (smartphone acceptable)",
      "Tripod recommended",
      "Wide-angle lens if available",
      "Flashlight for descent"
    ],
    fitnessLevel: "Moderate (15-20 minute uphill walk on cobbled and dirt path)",
    ageRestrictions: "All ages welcome; suitable for any fitness level",
    safetyNotes: "Path is uneven and unlit after dark; flashlight essential for descent",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Trip",
        quote: "Our guide knew exactly where to stand and when to shoot. I came away with photos I never could have captured alone.",
        author: "Marcus L. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Spanish Mosque Viewpoint",
        type: "visit",
        id: "chefchaouen-spanish-mosque"
      },
      {
        name: "Bouzafar Hill Lookout",
        type: "visit",
        id: "chefchaouen-bouzafar-lookout"
      }
    ],
    storyTitle: "The Photographers' Pilgrimage",
    history: "The sunset photography walk up Bouzafar Hill has become one of Chefchaouen's signature experiences since the mid-2010s, when Instagram-era travelers transformed the abandoned Spanish Mosque into one of Morocco's most photographed sunset spots.",
    culturalImportance: "The walk follows the traditional hillside path used by Jbalan farmers for centuries, now repurposed as a photography route that supports local guides and small cafés along the way.",
    localLegend: "Local photographers joke that the ghost of a 1920s Spanish photojournalist still roams the mosque at sunset, whispering composition advice to those who listen closely.",
    funFact: "On peak spring evenings, the hillside can host over 200 photographers simultaneously, making it one of the highest-density sunset photography locations in Africa.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a professional camera?",
        a: "No, the guide can help with any camera including smartphones. A tripod helps for low-light shots but is not essential."
      },
      {
        q: "What if it rains?",
        a: "Tours are cancelled in heavy rain with full refund or reschedule. Light drizzle can produce dramatic cloud photography."
      }
    ],
    contactPhone: "+212 661-998877",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-mountain-bike-tour",
    city: "chefchaouen",
    name: "Rif Mountains Mountain Bike Tour",
    neighborhood: "Talassemtane National Park",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad"],
    tags: [
      "active",
      "climbing-adventure",
      "hiking-trek",
      "mountain",
      "nature",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 300,
    entryPrice: 300,
    durationMinutes: 180,
    distanceFromCenterKm: 8,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    goodForRain: false,
    openingHours: "Tours depart 08:00 AM and 02:00 PM (Daily, weather permitting)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["intermediate", "advanced"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A half-day guided mountain bike ride along the dirt tracks and shepherd trails of the Rif foothills above Chefchaouen. Suitable for intermediate riders, with a mix of climbs, flowing descents, and panoramic stops overlooking the medina and cedar forests.",
    shortValueProp: "Ride the shepherd trails of the Rif on a half-day mountain bike adventure",
    googleRating: 4.6,
    reviewCount: 358,
    googleReviewCount: 240,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 70,
    viatorRating: 4.6,
    viatorReviewCount: 30,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 18,
    tip: "Choose the morning session in summer; the dirt tracks become dangerously slippery after the rare but heavy Rif thunderstorms.",
    tips: ["not available"],
    highlights: [
      "Half-day guided mountain bike ride in the Rif foothills",
      "Mix of climbs, flowing descents, and panoramic overlooks",
      "Quality hardtail mountain bike and helmet included",
      "Stops at shepherd villages and cedar forest viewpoints"
    ],
    emotionalBenefits: ["Adventurous", "Energized", "Accomplished"],
    bestTimeToVisit: "April-June and September-November",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best in spring and autumn; summer mornings only)",
    ticketTypes: [
      {
        name: "Group Half-Day Tour",
        price: 300
      },
      {
        name: "Private Half-Day Tour",
        price: 600
      },
      {
        name: "Full-Day Tour with lunch",
        price: 550
      }
    ],
    discountsInfo: "Group rates for 4+; multi-day packages available",
    includedServices: [
      "Quality hardtail mountain bike",
      "Helmet and gloves",
      "Professional guide",
      "Water and snacks"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 30-50 MAD; bike damage deposit 500 MAD (refundable)",
    address: "Rif Foothills Trailhead, 8 km south of Chefchaouen",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Talassemtane%20National%20Park%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free parking at the trailhead",
    publicTransportInfo: "Transport from Chefchaouen included in tour price",
    dressCode: "Athletic clothing suitable for cycling; closed-toe shoes mandatory",
    equipmentNeeded: ["Closed-toe athletic shoes", "Moisture-wicking clothing", "Sunscreen", "Small backpack"],
    fitnessLevel: "Active (3 hours of cycling with 400m elevation gain on dirt tracks)",
    ageRestrictions: "Ages 14 and up; minors must be accompanied",
    safetyNotes: "Helmets mandatory; follow guide's instructions on descents. Tour cancelled in rain.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Adventure Traveler",
        quote: "Best morning of my Morocco trip. The descent through the cedar forest was pure flow. Bike quality was excellent.",
        author: "Tom B. from London",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Talassemtane National Park Trek",
        type: "visit",
        id: "chefchaouen-talassemtane-trek"
      },
      {
        name: "Akchour Waterfalls Trek",
        type: "visit",
        id: "chefchaouen-akchour-waterfalls-trek"
      }
    ],
    storyTitle: "The Shepherd Tracks",
    history: "Mountain biking in the Rif is a relatively recent activity, emerging in the early 2010s as local adventure guides began repurposing the network of shepherd trails above Chefchaouen for cycling. The dirt tracks have connected Jbalan villages for centuries.",
    culturalImportance: "The routes pass through working shepherd territory, and riders are encouraged to greet locals and respect livestock crossings. The activity provides supplementary income to Jbalan families who serve as guides and mechanics.",
    localLegend: "Local guides joke that the fastest descents were first ridden by Jbalan messengers in the 1920s, fleeing Spanish patrols on bicycles commandeered from colonial outposts.",
    funFact: "The Rif foothills contain over 200 km of rideable dirt tracks, but only a fraction are mapped; local guides know the rest by heart.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "What type of bike is provided?",
        a: "Quality hardtail mountain bikes with hydraulic disc brakes and front suspension. Full-suspension bikes available for an extra 100 MAD."
      },
      {
        q: "Can beginners join?",
        a: "The route is rated intermediate. Confident beginners can join but should expect some challenging climbs and descents."
      }
    ],
    contactPhone: "+212 661-445566",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-cooking-class",
    city: "chefchaouen",
    name: "Moroccan Cooking Class with Market Visit",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["foodie", "culture", "first-timer"],
    tags: ["authentic", "cooking-class", "cultural-tour", "morning", "private", "urban"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 350,
    entryPrice: 350,
    durationMinutes: 240,
    distanceFromCenterKm: 0.1,
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
    hasWiFi: true,
    nearMedina: true,
    goodForRain: true,
    openingHours: "Morning class 09:00 AM - 01:00 PM; afternoon class 02:00 PM - 06:00 PM",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "half-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A hands-on half-day cooking class inside a traditional riad in the medina, starting with a guided visit to the souk to buy spices, vegetables, and fresh goat cheese. Learn to prepare a complete Moroccan meal including tagine, couscous, and mint tea under the guidance of a local chef.",
    shortValueProp: "Master tagine, couscous, and mint tea in a Blue Pearl riad kitchen",
    googleRating: 4.9,
    reviewCount: 1270,
    googleReviewCount: 880,
    tripadvisorRating: 4.8,
    tripadvisorReviewCount: 240,
    viatorRating: 4.8,
    viatorReviewCount: 90,
    getyourguideRating: 4.8,
    getyourguideReviewCount: 60,
    tip: "Choose the class that includes the souk visit; the chef's guidance through the spice quarter transforms what would be an overwhelming market into an enriching experience.",
    tips: ["not available"],
    highlights: [
      "Guided visit to the souk to buy fresh ingredients and spices",
      "Hands-on preparation of tagine, couscous, and traditional starters",
      "Mint tea ceremony instruction with proper pouring technique",
      "Sit-down meal of your own prepared dishes on a riad terrace"
    ],
    emotionalBenefits: ["Cultural", "Sensory", "Accomplished"],
    bestTimeToVisit: "Morning class for the freshest souk ingredients",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Group Class (4-8 people)",
        price: 350
      },
      {
        name: "Private Class",
        price: 700
      },
      {
        name: "Family Class (kids menu)",
        price: 280
      }
    ],
    discountsInfo: "Children under 12 half price; family package available",
    includedServices: ["All ingredients", "Apron and recipe booklet", "Meal of prepared dishes", "Mint tea and water"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip the chef 30-50 MAD; optional wine pairing available for 100 MAD extra",
    address: "Riad cooking studio, Medina, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plaza%20Uta%20el-Hammam%2C%20Chefchaouen%20Medina%2C%20Morocco",
    parkingInfo: "No vehicle access to medina; parking at Place el-Majzen",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Comfortable casual clothing; closed-toe shoes for kitchen safety",
    equipmentNeeded: ["Camera to document the experience", "Container for leftovers (optional)"],
    fitnessLevel: "Relaxed (Standing and walking in the kitchen for 4 hours)",
    ageRestrictions: "All ages welcome; family classes adjusted for children",
    safetyNotes: "Knives and hot stoves; supervise children at all times. Allergies must be declared in advance.",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Culinary Explorer",
        quote: "The souk visit was worth the price alone. The chef knew every spice seller and we tasted 12 different honeys. The tagine I made was better than any restaurant version.",
        author: "Jean-Pierre from Paris",
        rating: 5
      },
      {
        type: "Family Day Out",
        quote: "Our kids (8 and 11) loved it. The chef was patient and made everything fun. We still cook the couscous recipe at home.",
        author: "Sophie M. and family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Chefchaouen Souk District",
        type: "visit",
        id: "chefchaouen-souk"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Kitchen of the Blue Pearl",
    history: "Moroccan cooking classes in Chefchaouen emerged in the 2000s as a way for local women, many of them master home cooks, to share their culinary heritage with travelers. The tradition draws on Jbalan, Andalusian, and Berber influences that have shaped local cuisine for centuries.",
    culturalImportance: "Cooking classes provide an important economic opportunity for Chefchaouen women, who traditionally managed the domestic kitchen but were excluded from the formal restaurant industry. They preserve recipes that have been passed down orally for generations.",
    localLegend: "Local chefs claim that the secret to a perfect tagine lies not in the recipe but in the cook's intention; angry cooks produce bitter food.",
    funFact: "Chefchaouen is famous throughout Morocco for its fresh goat cheese (jben), which is incorporated into several unique local tagine recipes found nowhere else in the country.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can vegetarians be accommodated?",
        a: "Yes, vegetarian tagine and couscous options are available. Declare dietary requirements when booking."
      },
      {
        q: "Do I need cooking experience?",
        a: "None at all. The chef guides every step, from knife skills to spice blending."
      }
    ],
    contactPhone: "+212 661-112233",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-goat-cheese-farm",
    city: "chefchaouen",
    name: "Jbalan Goat Cheese Farm Visit",
    neighborhood: "Rural Chefchaouen",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["foodie", "culture", "quiet-mystic"],
    tags: [
      "authentic",
      "cultural-tour",
      "morning",
      "mountain",
      "nature",
      "off-the-beaten-path",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 200,
    entryPrice: 200,
    durationMinutes: 180,
    distanceFromCenterKm: 12,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    nearMedina: false,
    goodForRain: true,
    openingHours: "Visits 09:00 AM - 12:00 PM (Daily, by appointment)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "hiking-trek",
    sportIntent: "experience",
    skillLevel: ["beginner"],
    duration: "half-day",
    equipmentIncluded: false,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A morning visit to a traditional Jbalan goat farm in the hills above Chefchaouen, where Berber women produce the famous jben goat cheese using methods unchanged for centuries. Includes hands-on cheese-making demonstration, fresh cheese tasting, and a guided walk through the grazing pastures.",
    shortValueProp: "Meet the Berber women behind Morocco's most famous goat cheese",
    googleRating: 4.8,
    reviewCount: 492,
    googleReviewCount: 340,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 95,
    viatorRating: 4.7,
    viatorReviewCount: 35,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 22,
    tip: "Bring a small cooler bag if you want to purchase cheese to take home; the farm sells jben at half the medina price and ages it differently from commercial producers.",
    tips: ["not available"],
    highlights: [
      "Hands-on demonstration of traditional jben goat cheese making",
      "Tasting of fresh and aged cheeses with mountain honey and olive oil",
      "Guided walk through the grazing pastures with the goat herd",
      "Direct purchase opportunity at farm prices"
    ],
    emotionalBenefits: ["Cultural", "Sensory", "Grounded"],
    bestTimeToVisit: "Spring morning when pastures are green and goats are most active",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring brings fresh herbs that flavor the cheese)",
    ticketTypes: [
      {
        name: "Group Visit",
        price: 200
      },
      {
        name: "Private Visit",
        price: 450
      }
    ],
    discountsInfo: "Children under 12 half price; family rates available",
    includedServices: [
      "Round-trip transport from Chefchaouen",
      "Guided farm tour",
      "Cheese-making demonstration",
      "Tasting"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Optional cheese purchases 30-60 MAD per piece; tip the cheesemaker 20-30 MAD",
    address: "Jbalan Goat Farm, 12 km south of Chefchaouen",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chefchaouen%20Province%2C%20Rural%20Commune%2C%20Morocco",
    parkingInfo: "Free parking at the farm",
    publicTransportInfo: "Transport included in tour price; grand taxi from Chefchaouen alternatively",
    dressCode: "Comfortable casual clothing; closed-toe shoes for the pasture walk",
    equipmentNeeded: ["Comfortable walking shoes", "Camera", "Small cooler bag for purchases"],
    fitnessLevel: "Relaxed (Short walks on flat pastureland)",
    ageRestrictions: "All ages welcome; children love interacting with the goats",
    safetyNotes: "Farm environment with animals; wash hands before tasting. Allergies to dairy must be declared in advance.",
    languages: ["Tarifit", "Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Culinary Explorer",
        quote: "Watching the women shape the cheese by hand in palm-leaf molds was magical. The fresh jben with mountain honey is the best cheese I've ever tasted.",
        author: "Jean-Pierre from Paris",
        rating: 5
      },
      {
        type: "Family Day Out",
        quote: "Our kids loved petting the baby goats and watching the cheese being made. We bought four wheels of cheese to take home.",
        author: "Sophie M. and family",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Chefchaouen Souk District",
        type: "visit",
        id: "chefchaouen-souk"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Cheese of the Jbala",
    history: "Jbalan goat cheese (jben) has been produced in the Rif mountains for over a thousand years, using methods brought by Andalusian refugees in the 15th and 16th centuries. The cheese became one of Chefchaouen's signature products, traded at weekly souks throughout northern Morocco.",
    culturalImportance: "Jben production is exclusively a women's craft in Jbalan culture, providing important economic independence to rural families. The tradition has been passed down from mother to daughter for centuries, with each family guarding its own variations.",
    localLegend: "Local cheesemakers swear that the milk from goats grazing on wild thyme and rosemary produces the most fragrant cheese, and that the herbs can be tasted in the finished product.",
    funFact: "The traditional palm-leaf molds used to shape jben leave a distinctive pattern on the cheese that has been called the 'fingerprint of the Jbala.'",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the cheese safe to eat?",
        a: "Yes, the farm follows traditional hygienic methods and the cheese is consumed fresh the same day it's made. Travelers with sensitive stomachs should consume small quantities first."
      },
      {
        q: "Can I bring cheese home?",
        a: "Yes, but only in a cooler bag and consumed within 2-3 days. Vacuum-sealed aged cheese travels better and lasts up to 2 weeks refrigerated."
      }
    ],
    contactPhone: "+212 661-667788",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-horseback-rif-ride",
    city: "chefchaouen",
    name: "Horseback Ride in the Rif Foothills",
    neighborhood: "Rif Foothills",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "romantic", "nomad"],
    tags: ["authentic", "climbing-adventure", "desert-sport", "mountain", "nature", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 280,
    entryPrice: 280,
    durationMinutes: 120,
    distanceFromCenterKm: 6,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    nearMedina: false,
    goodForRain: false,
    openingHours: "Rides at 09:00 AM, 11:00 AM, 03:00 PM, and sunset (varies seasonally)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "2 hours",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A peaceful guided horseback ride along the shepherd trails and olive groves of the Rif foothills above Chefchaouen, suitable for beginners and experienced riders alike. Mounts are calm Berber-Arab crosses bred for mountain terrain.",
    shortValueProp: "Ride gentle Berber horses through olive groves above the Blue Pearl",
    googleRating: 4.7,
    reviewCount: 266,
    googleReviewCount: 180,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 50,
    viatorRating: 4.6,
    viatorReviewCount: 22,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 14,
    tip: "Book the sunset ride for the most spectacular golden-hour views of the medina from the western ridgeline; bring a camera with a strap for hands-free riding.",
    tips: ["not available"],
    highlights: [
      "2-hour guided horseback ride through Rif foothill olive groves",
      "Calm Berber-Arab cross horses suitable for beginners",
      "Panoramic views of the medina and Spanish Mosque from western ridgeline",
      "Sunset rides available for the most dramatic lighting"
    ],
    emotionalBenefits: ["Serene", "Scenic", "Grounded"],
    bestTimeToVisit: "Sunset ride for golden-hour views of the medina",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best in spring and autumn; summer rides at sunrise or sunset only)",
    ticketTypes: [
      {
        name: "Group Ride (2-4 riders)",
        price: 280
      },
      {
        name: "Private Ride",
        price: 550
      },
      {
        name: "Sunset Ride with tea",
        price: 350
      }
    ],
    discountsInfo: "Children under 12 half price; family rates available",
    includedServices: [
      "Horse and tack rental",
      "Helmet",
      "Professional guide",
      "Round-trip transport from Chefchaouen"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 30-50 MAD; optional tea stop at hillside café 15 MAD",
    address: "Rif Foothills Ranch, 6 km west of Chefchaouen",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chefchaouen%2C%20Rif%20Mountains%2C%20Morocco",
    parkingInfo: "Free parking at the ranch",
    publicTransportInfo: "Transport included in tour price",
    dressCode: "Long pants mandatory; closed-toe shoes with heel recommended",
    equipmentNeeded: ["Long pants", "Closed-toe shoes", "Sunscreen and hat", "Camera with strap"],
    fitnessLevel: "Moderate (2 hours of riding; some walking and trotting)",
    ageRestrictions: "Ages 8 and up; weight limit 90 kg for horse welfare",
    safetyNotes: "Helmets mandatory; follow guide's instructions. Horses are calm but can be startled by sudden movements.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Romantic Couple",
        quote: "The sunset ride was the highlight of our honeymoon. Riding through the olive groves as the medina glowed gold below was unforgettable.",
        author: "Isabella & Marco from Rome",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Bouzafar Hill Lookout",
        type: "visit",
        id: "chefchaouen-bouzafar-lookout"
      },
      {
        name: "Spanish Mosque Viewpoint",
        type: "visit",
        id: "chefchaouen-spanish-mosque"
      }
    ],
    storyTitle: "The Horses of the Jbala",
    history: "The Berber-Arab horse cross is the traditional mount of the Jbala people, bred for endurance and sure-footedness on mountain trails. Horseback riding has been the primary mode of transport in the Rif for centuries until the arrival of motor vehicles in the mid-20th century.",
    culturalImportance: "The horses are bred by Jbalan families who have raised them for generations. Riding tourism provides crucial supplementary income that allows these families to maintain their breeding programs in the face of mechanization.",
    localLegend: "Local handlers claim that the oldest mare at the ranch, named Lalla Aïcha, can find her way back to the stable in complete darkness and zero visibility.",
    funFact: "The Berber-Arab cross is uniquely adapted to steep mountain terrain, with shorter cannons and stronger hooves than purebred Arabians.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need riding experience?",
        a: "No, the horses are calm and the pace is walking with optional trotting for those who want it. Guides lead beginners if needed."
      },
      {
        q: "Is there a weight limit?",
        a: "Yes, 90 kg (200 lbs) for horse welfare. Heavier riders can be accommodated on request with prior notice for a larger horse."
      }
    ],
    contactPhone: "+212 661-224466",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-photography-workshop",
    city: "chefchaouen",
    name: "Blue Medina Photography Workshop",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["photographer", "nomad", "sensory-seeker"],
    tags: ["cultural-tour", "instagrammable", "photography", "private", "sunset", "urban"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 250,
    entryPrice: 250,
    durationMinutes: 240,
    distanceFromCenterKm: 0,
    transportMode: "walkable",
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
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    goodForRain: true,
    openingHours: "Sunrise workshop 06:00 AM - 10:00 AM; sunset workshop 03:00 PM - 07:00 PM",
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
    description: "A half-day guided photography workshop through the blue medina, designed for photographers of all levels. Local professional photographers share their knowledge of the best light, framing, and timing for capturing Chefchaouen's iconic blue alleys, porters, and rooftop views.",
    shortValueProp: "Capture the Blue Pearl like a professional with a local photographer guide",
    googleRating: 4.8,
    reviewCount: 330,
    googleReviewCount: 220,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 60,
    viatorRating: 4.7,
    viatorReviewCount: 25,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 15,
    tip: "Choose the sunrise workshop for the best light and empty alleys; book the private option if you want to focus on specific techniques like portraiture or architectural detail.",
    tips: ["not available"],
    highlights: [
      "Half-day photography workshop with a local professional",
      "Best light, framing, and timing for the iconic blue alleys",
      "Access to private rooftop locations not open to general tourists",
      "Personalized coaching on composition, exposure, and editing"
    ],
    emotionalBenefits: ["Creative", "Inspired", "Accomplished"],
    bestTimeToVisit: "Sunrise workshop for empty alleys and golden light",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Spring and autumn offer the clearest light)",
    ticketTypes: [
      {
        name: "Group Workshop (3-6)",
        price: 250
      },
      {
        name: "Private Workshop",
        price: 600
      }
    ],
    discountsInfo: "Group rates for 4+; multi-day packages available",
    includedServices: [
      "Professional photographer guide",
      "Coaching on technique and composition",
      "Access to private rooftop locations"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 30-50 MAD; optional camera rental 100 MAD",
    address: "Medina, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chefchaouen%20Medina%2C%20Morocco",
    parkingInfo: "No vehicle access to medina; parking at Place el-Majzen",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Comfortable walking clothes; modest dress appreciated by local residents",
    equipmentNeeded: [
      "Camera (DSLR, mirrorless, or smartphone)",
      "Tripod optional",
      "Wide-angle lens recommended",
      "Extra batteries"
    ],
    fitnessLevel: "Moderate (4 hours of walking on steep cobbled lanes)",
    ageRestrictions: "Ages 14 and up",
    safetyNotes: "Watch footing on cobblestones; respect residents' privacy when photographing",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Photography Trip",
        quote: "Our guide knew every hidden corner and the exact minute the light would be perfect. I came away with portfolio-quality shots.",
        author: "Marcus L. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Spanish Mosque Sunset Photography Hike",
        type: "visit",
        id: "chefchaouen-spanish-mosque-hike"
      },
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      }
    ],
    storyTitle: "The Blue Pearl Through the Lens",
    history: "Photography workshops in Chefchaouen emerged in the 2010s as Instagram and travel photography exploded in popularity. Local photographers, many of them self-taught, began offering guided experiences that combined technical instruction with intimate knowledge of the medina's best photo locations.",
    culturalImportance: "The workshops provide economic opportunities for local photographers while promoting respectful photography practices that protect residents' privacy and dignity.",
    localLegend: "Local photographers swear that the best blue hour shots are taken on the third day after a rain, when the walls are still slightly damp and reflect light differently.",
    funFact: "Chefchaouen is one of the most Instagrammed locations in Africa, with over 1.5 million tagged posts, making professional photography guidance increasingly valuable for distinctive shots.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Do I need a professional camera?",
        a: "No, the workshop accommodates any camera including smartphones. Composition and seeing light are the core skills taught."
      },
      {
        q: "Can I photograph locals?",
        a: "Yes, but always ask first. The guide will help with polite requests in Darija and advise on appropriate compensation for portraits."
      }
    ],
    contactPhone: "+212 661-889900",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-4x4-rif-adventure",
    city: "chefchaouen",
    name: "4x4 Rif Mountains Adventure",
    neighborhood: "Rif Mountains",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "quiet",
    energyLevel: "active",
    archetypeAffinity: ["adventure", "nomad", "photographer"],
    tags: [
      "active",
      "climbing-adventure",
      "desert-sport",
      "mountain",
      "nature",
      "off-the-beaten-path",
      "private",
      "sunset",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 500,
    entryPrice: 500,
    durationMinutes: 480,
    distanceFromCenterKm: 50,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    openingHours: "Tours depart 08:00 AM (Daily, weather permitting)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    experienceType: "desert-sport",
    sportIntent: "experience",
    skillLevel: ["beginner", "intermediate"],
    duration: "full-day",
    equipmentIncluded: true,
    instructorAvailable: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A full-day 4x4 adventure through the remote dirt tracks of the central Rif Mountains, visiting hidden waterfalls, Jbalan villages, and panoramic viewpoints inaccessible by regular vehicles. Includes stops at Akchour, God's Bridge, and a traditional lunch in a mountain village.",
    shortValueProp: "Conquer the remote Rif in a 4x4 to hidden villages and waterfalls",
    googleRating: 4.7,
    reviewCount: 630,
    googleReviewCount: 410,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 130,
    viatorRating: 4.6,
    viatorReviewCount: 55,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 35,
    tip: "Sit in the front seat for the best views; the dirt tracks through the cedar forest offer some of the most dramatic mountain scenery in northern Morocco.",
    tips: ["not available"],
    highlights: [
      "Full-day 4x4 adventure through remote Rif mountain tracks",
      "Visits to Akchour waterfalls, God's Bridge, and hidden Jbalan villages",
      "Traditional lunch in a mountain village family home",
      "Panoramic viewpoints inaccessible by regular vehicles"
    ],
    emotionalBenefits: ["Adventurous", "Cultural", "Scenic"],
    bestTimeToVisit: "April-June and September-November",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Best in spring and autumn; some tracks impassable in winter rain)",
    ticketTypes: [
      {
        name: "Shared 4x4 (4-6 passengers)",
        price: 500
      },
      {
        name: "Private 4x4 (1-3 passengers)",
        price: 1200
      }
    ],
    discountsInfo: "Children under 12 half price; group rates available",
    includedServices: ["4x4 vehicle with driver-guide", "Fuel", "Traditional lunch", "All entrance fees"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip driver-guide 50-100 MAD; drinks at lunch extra",
    address: "Rif Mountains, Chefchaouen Province",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Talassemtane%20National%20Park%2C%20Rif%20Mountains%2C%20Morocco",
    parkingInfo: "Departure from Chefchaouen with pickup at accommodation",
    publicTransportInfo: "Pickup included from any Chefchaouen accommodation",
    dressCode: "Comfortable layered clothing; closed-toe shoes for village walks",
    equipmentNeeded: ["Sun protection", "Camera", "Light jacket", "Cash for purchases"],
    fitnessLevel: "Relaxed (Mostly vehicle-based with short walks at viewpoints)",
    ageRestrictions: "All ages welcome; ideal for families and seniors",
    safetyNotes: "Dirt tracks can be rough; inform driver of any back issues. Tours cancelled in heavy rain.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Adventure Traveler",
        quote: "We reached villages that felt completely untouched by tourism. The lunch with a Berber family was the most authentic cultural experience of our trip.",
        author: "Tom B. from London",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Akchour Waterfalls Trek",
        type: "visit",
        id: "chefchaouen-akchour-waterfalls-trek"
      },
      {
        name: "God's Bridge Natural Arch Trek",
        type: "visit",
        id: "chefchaouen-gods-bridge"
      }
    ],
    storyTitle: "The Hidden Rif",
    history: "The 4x4 routes through the central Rif were originally transhumance tracks used by Jbalan shepherds and their flocks. They were widened for vehicles during the Spanish Protectorate era for military access, then expanded in the 2000s for adventure tourism.",
    culturalImportance: "The routes bring visitors to remote Jbalan villages that have little other economic opportunity, supporting family-run lunch stops and craft purchases. The activity helps preserve these communities against rural depopulation.",
    localLegend: "Local drivers swear that a particularly remote village in the central Rif has inhabitants who still speak a dialect descended from 15th-century Andalusian Arabic, untouched by modern standard Arabic.",
    funFact: "Some of the dirt tracks pass through the only stands of Atlas fir forest in Morocco, a relict ecosystem that survived the last ice age in the high Rif microclimate.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the 4x4 ride rough?",
        a: "Some tracks are bumpy but the driver adjusts speed for comfort. Inform the driver of any back issues for a gentler ride."
      },
      {
        q: "Can children join?",
        a: "Yes, the tour is family-friendly. Car seats available on request."
      }
    ],
    contactPhone: "+212 661-557799",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-cedar-forest-trek",
    city: "chefchaouen",
    name: "Atlas Cedar Forest Trek",
    neighborhood: "Talassemtane National Park",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["quiet-mystic", "nomad", "adventure"],
    tags: [
      "climbing-adventure",
      "hiking-trek",
      "mountain",
      "nature",
      "off-the-beaten-path",
      "private",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 200,
    entryPrice: 200,
    durationMinutes: 180,
    distanceFromCenterKm: 32,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    nearMedina: false,
    goodForRain: false,
    openingHours: "Tours depart 08:00 AM and 02:00 PM (Daily)",
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
    description: "A moderate half-day trek through the ancient Atlas cedar and fir forest of Talassemtane National Park, focusing on the ecological and botanical significance of this relict mountain ecosystem. Includes opportunities to spot the endangered Barbary macaque and learn about Jbalan forestry traditions.",
    shortValueProp: "Walk among 500-year-old Atlas cedars in Morocco's only true alpine forest",
    googleRating: 4.6,
    reviewCount: 418,
    googleReviewCount: 290,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 80,
    viatorRating: 4.5,
    viatorReviewCount: 30,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 18,
    tip: "Bring binoculars for Barbary macaque spotting; the guides know which trees the troop favors at different times of day.",
    tips: ["not available"],
    highlights: [
      "Trek through ancient Atlas cedar and fir forest, some trees 500+ years old",
      "Opportunities to spot the endangered Barbary macaque",
      "Botanical and ecological interpretation by certified nature guides",
      "Visit to a traditional Jbalan charcoal burner's camp (azib)"
    ],
    emotionalBenefits: ["Grounded", "Peaceful", "Educational"],
    bestTimeToVisit: "April-June and September-November for active wildlife",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Best in spring and autumn; winter brings snow)",
    ticketTypes: [
      {
        name: "Group Trek (3-8)",
        price: 200
      },
      {
        name: "Private Trek",
        price: 450
      }
    ],
    discountsInfo: "Children under 12 half price; family rates available",
    includedServices: [
      "Nature guide",
      "Round-trip transport from Chefchaouen",
      "Park entrance fee",
      "Binoculars (shared)"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Tip guide 30-50 MAD; tea at the azib optional 10 MAD",
    address: "Talassemtane National Park, Cedar Reserve Zone",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Talassemtane%20National%20Park%2C%20Atlas%20Cedar%20Forest%2C%20Morocco",
    parkingInfo: "Free parking at the park entrance",
    publicTransportInfo: "Transport included from Chefchaouen",
    dressCode: "Layered hiking clothing; sturdy shoes",
    equipmentNeeded: ["Sturdy hiking shoes", "Binoculars (optional)", "Camera", "Water bottle", "Light jacket"],
    fitnessLevel: "Moderate (3 hours of hiking on forest trails, modest elevation gain)",
    ageRestrictions: "Ages 8 and up welcome",
    safetyNotes: "Stay on marked trails to avoid getting lost in dense forest. Never feed or approach Barbary macaques.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Nature Lover",
        quote: "Standing among 500-year-old cedars with Barbary macaques calling in the distance was a once-in-a-lifetime experience. Our guide's botanical knowledge was impressive.",
        author: "Emma L. from Amsterdam",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Talassemtane National Park Trek",
        type: "visit",
        id: "chefchaouen-talassemtane-trek"
      },
      {
        name: "Jebel el Kelaa Summit Climb",
        type: "visit",
        id: "chefchaouen-jebel-kelaa-climb"
      }
    ],
    storyTitle: "The Relict Forest of the Rif",
    history: "The Atlas cedar and fir forest of Talassemtane is a relict ecosystem that survived the last ice age in the high Rif microclimate. It is the only place in Morocco where Atlas fir (Abies marocana) grows naturally, and one of the largest remaining stands of Atlas cedar in the country.",
    culturalImportance: "The forest has been used by Jbalan families for transhumant shepherding and selective charcoal production for centuries. Traditional Jbalan forestry practices, which carefully select individual trees rather than clear-cutting, are credited with preserving the ecosystem.",
    localLegend: "Local guides swear that the largest cedar in the forest, known as 'Cedar of the Saints,' is over 800 years old and inhabited by the spirits of seven Sufi masters who bless the forest and its visitors.",
    funFact: "The Atlas fir (Abies marocana) is one of the rarest conifer species in the world, with fewer than 10,000 mature trees remaining in the wild, all within the Rif Mountains.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Will I definitely see Barbary macaques?",
        a: "Sightings are common but not guaranteed. The guide knows their favorite trees and times of day, but they are wild animals with their own schedules."
      },
      {
        q: "Are the trails muddy?",
        a: "After rain, yes. Bring shoes with good grip and avoid white fabrics."
      }
    ],
    contactPhone: "+212 661-776655",
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-atlas-fitness",
    city: "chefchaouen",
    name: "Atlas Fitness Chefchaouen",
    neighborhood: "New Town (Avenue Hassan II)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad", "modern-nomad"],
    tags: ["active", "day-pass", "gym-fitness", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
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
    isWheelchairAccessible: true,
    accessibilityFeatures: ["not available"],
    isPhotographyFriendly: false,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: true,
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
    hasGroupClasses: false,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A modern, well-equipped neighborhood gym in the new town, popular with locals, expats, and travelers for its comprehensive weight room, cardio zone, and friendly community vibe. Clean facilities and convenient central location make it the go-to for short-stay visitors.",
    shortValueProp: "The premier local gym for travelers and expats in central Chefchaouen",
    googleRating: 4.5,
    reviewCount: 205,
    googleReviewCount: 180,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 25,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Day passes include use of all equipment, showers, and locker rooms. The morning session (08:00-11:00 AM) is the quietest time for solo travelers.",
    tips: ["not available"],
    highlights: [
      "Full free weight section with dumbbells, barbells, and squat racks",
      "Dedicated women-only hours from 10:00 AM to 12:30 PM daily",
      "Air-conditioned cardio zone and functional training turf",
      "Convenient central new-town location walkable from the medina"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Grounded"],
    bestTimeToVisit: "Mid-morning (10:00 AM - 12:00 PM) to avoid the post-work rush",
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
      },
      {
        name: "Monthly Membership",
        price: 450
      }
    ],
    discountsInfo: "Discounts available for monthly or long-term expat plans",
    includedServices: ["Full access to all gym weights and cardio areas", "Use of showers and locker rooms"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD; water bottle 10 MAD if you forget yours",
    address: "Avenue Hassan II, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenue%20Hassan%20II%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Paid street parking along the avenue (5 MAD/hr)",
    publicTransportInfo: "Walkable from anywhere in the new town or medina",
    dressCode: "Athletic workout clothing; clean indoor athletic shoes mandatory",
    equipmentNeeded: ["Clean indoor athletic shoes", "Workout towel", "Water bottle"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up welcome",
    safetyNotes: "Day passes paid in cash or local card; always wipe down equipment after use",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Digital Nomad",
        quote: "Excellent gym with modern equipment, clean spaces, and very affordable weekly pass. Perfect for travelers.",
        author: "Alex R. from Berlin",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
      }
    ],
    faq: [
      {
        q: "Is there a ladies-only section?",
        a: "Yes, dedicated women-only hours from 10:00 AM to 12:30 PM daily, with a private training environment."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-blue-city-yoga",
    city: "chefchaouen",
    name: "Blue City Yoga Studio",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["quiet-mystic", "modern-nomad", "romantic"],
    tags: [
      "climbing-adventure",
      "day-pass",
      "instagrammable",
      "private",
      "relaxed",
      "sunset",
      "urban",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 80,
    entryPrice: 80,
    durationMinutes: 75,
    distanceFromCenterKm: 0.1,
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
    hasPrivateOption: true,
    hasSunsetView: true,
    hasWiFi: true,
    nearMedina: true,
    goodForRain: true,
    openingHours: "07:00 AM - 08:00 PM (Daily)",
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
    description: "A serene rooftop yoga studio inside a traditional riad in the medina, offering daily classes in hatha, vinyasa, and yin yoga. The panoramic terrace overlooks the blue rooftops and Rif peaks, making it one of the most atmospheric yoga spaces in Morocco.",
    shortValueProp: "Practice yoga on a rooftop overlooking the Blue Pearl",
    googleRating: 4.8,
    reviewCount: 325,
    googleReviewCount: 240,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 55,
    viatorRating: 4.5,
    viatorReviewCount: 18,
    getyourguideRating: 4.6,
    getyourguideReviewCount: 12,
    tip: "Book the sunrise class for the most serene experience; the rooftop terrace offers the best dawn views of the medina awakening.",
    tips: ["not available"],
    highlights: [
      "Rooftop terrace studio with panoramic views of the medina and Rif",
      "Daily hatha, vinyasa, and yin yoga classes for all levels",
      "Mats, blocks, and straps provided",
      "Sunrise and sunset classes for the most dramatic lighting"
    ],
    emotionalBenefits: ["Grounded", "Peaceful", "Energized"],
    bestTimeToVisit: "Sunrise class (07:00 AM) for serene atmosphere",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Indoor studio available for rain)",
    ticketTypes: [
      {
        name: "Single Class Drop-in",
        price: 80
      },
      {
        name: "5-Class Pack",
        price: 350
      },
      {
        name: "Private 1-on-1 Session",
        price: 250
      }
    ],
    discountsInfo: "Multi-class packs offer best value for visitors",
    includedServices: ["Yoga mat and props", "Filtered water and tea", "Use of changing area"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD; tip the instructor 20-30 MAD for exceptional guidance",
    address: "Riad rooftop studio, Medina, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chefchaouen%20Medina%2C%20Morocco",
    parkingInfo: "No vehicle access to medina; parking at Place el-Majzen",
    publicTransportInfo: "Walkable from anywhere in the medina",
    dressCode: "Comfortable yoga clothing; layers for cool mornings",
    equipmentNeeded: ["Yoga clothes", "Light layer for cool mornings"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 14 and up welcome",
    safetyNotes: "Rooftop terrace has railings; follow instructor guidance during practice",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Quiet Mystic",
        quote: "Practicing sunrise yoga on a rooftop overlooking the blue medina was the highlight of my Morocco trip. The instructor was wonderful.",
        author: "Emma L. from Amsterdam",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      },
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      }
    ],
    faq: [
      {
        q: "Do I need to bring my own mat?",
        a: "No, mats, blocks, and straps are provided. Bring a personal towel if you prefer."
      },
      {
        q: "Are beginners welcome?",
        a: "Yes, all classes are suitable for beginners with modifications offered for advanced practitioners."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-rif-gym",
    city: "chefchaouen",
    name: "Rif Gym Chefchaouen",
    neighborhood: "New Town (Avenue Mohammed V)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "balanced",
    energyLevel: "active",
    archetypeAffinity: ["nomad"],
    tags: ["active", "day-pass", "gym-fitness", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 35,
    entryPrice: 35,
    durationMinutes: 75,
    distanceFromCenterKm: 0.5,
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
    nearMedina: true,
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
    description: "A popular neighborhood gym favored by local youth, expats, and travelers on a budget. Offers a solid free-weights area, cardio machines, and daily group fitness classes in a friendly, no-frills environment with strong community vibe.",
    shortValueProp: "Affordable, well-equipped local gym with strong community vibe",
    googleRating: 4.3,
    reviewCount: 162,
    googleReviewCount: 140,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 22,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Excellent value for short stays. Ask about weekly passes directly at reception for the best rates.",
    tips: ["not available"],
    highlights: [
      "Large free weights and machine area",
      "Daily group classes including Zumba and strength training",
      "Convenient central location in the new town"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Social"],
    bestTimeToVisit: "Mid-morning or early evening",
    typicalWaitTimeMinutes: 3,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Day Pass",
        price: 35
      },
      {
        name: "Weekly Pass",
        price: 150
      },
      {
        name: "Monthly Membership",
        price: 320
      }
    ],
    discountsInfo: "Weekly passes are the best value for visitors",
    includedServices: ["Full gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Locker rental 5 MAD; bring your own towel",
    address: "Avenue Mohammed V, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenue%20Mohammed%20V%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Street parking available nearby (5 MAD/hr)",
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
        quote: "Super affordable and good enough equipment. Perfect for a week-long stay.",
        author: "Laura M. from Paris",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
      }
    ],
    faq: [
      {
        q: "Do you have day passes?",
        a: "Yes, day passes cost 35 MAD."
      },
      {
        q: "Are there women-only hours?",
        a: "Yes, women-only hours from 10:00 AM to 12:00 PM daily."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-medina-fitness-club",
    city: "chefchaouen",
    name: "Medina Fitness Club",
    neighborhood: "Medina Edge",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "first-timer"],
    tags: ["day-pass", "gym-fitness", "private", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 45,
    entryPrice: 45,
    durationMinutes: 60,
    distanceFromCenterKm: 0.3,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: true,
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
    description: "Friendly neighborhood fitness studio with a focus on group classes and a compact but well-equipped weight area. Popular among women and travelers for its welcoming atmosphere and convenient location just outside the medina walls.",
    shortValueProp: "Cozy studio gym with excellent group classes and personal feel",
    googleRating: 4.3,
    reviewCount: 113,
    googleReviewCount: 95,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 18,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Great for beginners. Many classes are in French but instructors are patient and will translate to English and Spanish.",
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
    discountsInfo: "Multi-class packs offer good value for visitors",
    includedServices: ["Gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "None major",
    address: "Rue Tarik Ibn Ziad, Medina Edge, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rue%20Tarik%20Ibn%20Ziad%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Street parking along Avenue Hassan II",
    publicTransportInfo: "Walkable from anywhere in the medina or new town",
    dressCode: "Comfortable workout clothes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Moderate",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Small and intimate space with good supervision",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Solo Female Traveler",
        quote: "Felt very comfortable here as a woman traveling alone. Classes were fun and the instructor was patient.",
        author: "Emma L. from Amsterdam",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
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
    id: "chefchaouen-atlas-crossfit",
    city: "chefchaouen",
    name: "Atlas CrossFit Chefchaouen",
    neighborhood: "New Town Industrial Zone",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "combat-sports", "day-pass", "gym-fitness", "walk-in"],
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
    description: "A specialized CrossFit and functional training box offering high-intensity group workouts, Olympic lifting, and conditioning classes. Modern facility popular with serious athletes and fitness enthusiasts looking for a challenging workout in the Rif.",
    shortValueProp: "High-intensity CrossFit box with professional coaching and strong community",
    googleRating: 4.7,
    reviewCount: 100,
    googleReviewCount: 85,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 15,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Drop-in classes are very welcoming. Scale options are always offered for all levels, so beginners should not be intimidated.",
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
        price: 700
      }
    ],
    discountsInfo: "First class often free for new visitors",
    includedServices: ["Class participation", "Use of all equipment"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Bring your own water bottle",
    address: "Zone Industrielle, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zone%20Industrielle%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free street parking in front of the box",
    publicTransportInfo: "Petit taxi from center (approx. 15 MAD)",
    dressCode: "Athletic wear suitable for high-intensity training",
    equipmentNeeded: ["Workout clothes", "Indoor training shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Coaches supervise all sessions; excellent safety standards",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Fitness Enthusiast",
        quote: "Great programming and really welcoming coaches. Best CrossFit in northern Morocco.",
        author: "Tom B. from London",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
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
    id: "chefchaouen-municipal-pool",
    city: "chefchaouen",
    name: "Chefchaouen Municipal Pool",
    neighborhood: "New Town Sports Complex",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["family", "nomad"],
    tags: ["day-pass", "swimming-pool", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 90,
    distanceFromCenterKm: 1.2,
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
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "10:00 AM - 07:00 PM (May-October, daily; women-only 10:00 AM - 12:00 PM)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "swimming-pool",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: false,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "The municipal outdoor swimming pool complex in the new town, offering a 25-meter lap pool and a small children's pool. Open from May to October, it is the only public swimming facility in Chefchaouen and a popular spot for locals and travelers seeking respite from summer heat.",
    shortValueProp: "Cool off in Chefchaouen's only public swimming pool",
    googleRating: 4,
    reviewCount: 148,
    googleReviewCount: 120,
    tripadvisorRating: 3.8,
    tripadvisorReviewCount: 28,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Arrive at opening time (10:00 AM) on weekends to secure a lounger; the pool gets busy by noon with local families.",
    tips: ["not available"],
    highlights: [
      "25-meter outdoor lap pool for swimming",
      "Separate children's pool with shallow water",
      "Sun loungers and shaded seating areas",
      "Affordable day-pass pricing for travelers"
    ],
    emotionalBenefits: ["Relaxed", "Energized", "Social"],
    bestTimeToVisit: "Morning (10:00 AM - 12:00 PM) for the quietest swim",
    typicalWaitTimeMinutes: 5,
    seasonality: "May-October (Closed in winter)",
    ticketTypes: [
      {
        name: "Adult Day Pass",
        price: 20
      },
      {
        name: "Child (under 12)",
        price: 10
      },
      {
        name: "Monthly Membership",
        price: 280
      }
    ],
    discountsInfo: "Children under 5 free; family packages available",
    includedServices: ["Pool access", "Sun lounger use", "Changing rooms and showers"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Swim cap mandatory (purchase for 15 MAD if you don't have one); locker rental 5 MAD",
    address: "Complexe Sportif, Avenue des FAR, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Complexe%20Sportif%2C%20Avenue%20des%20FAR%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free parking at the sports complex",
    publicTransportInfo: "Walkable from the new town; petit taxi from medina (10 MAD)",
    dressCode: "Swimwear mandatory; swim cap required",
    equipmentNeeded: ["Swimsuit", "Swim cap", "Towel", "Sunscreen"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Lifeguard on duty at all times; no diving in shallow end",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Family Holiday",
        quote: "A lifesaver on a hot July day. The kids loved it and the prices are very affordable.",
        author: "Sophie M. from France",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
      }
    ],
    faq: [
      {
        q: "Is the pool heated?",
        a: "No, it is an outdoor unheated pool. Water is refreshing in summer heat but chilly in May and October."
      },
      {
        q: "Are there women-only hours?",
        a: "Yes, dedicated women-only hours from 10:00 AM to 12:00 PM daily."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-mandala-yoga-shala",
    city: "chefchaouen",
    name: "Mandala Yoga Shala Chefchaouen",
    neighborhood: "Medina",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["quiet-mystic", "modern-nomad", "luxury-curator"],
    tags: [
      "authentic",
      "climbing-adventure",
      "day-pass",
      "instagrammable",
      "private",
      "relaxed",
      "walk-in"
    ],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 3,
    pricePerPerson: 100,
    entryPrice: 100,
    durationMinutes: 90,
    distanceFromCenterKm: 0.2,
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
    hasPrivateOption: true,
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: true,
    goodForRain: true,
    openingHours: "07:30 AM - 08:00 PM (Daily)",
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
    description: "An intimate boutique yoga shala inside a restored medina house, specializing in small-group classes of ashtanga, restorative, and prenatal yoga. The peaceful courtyard garden setting and limited class sizes create a deeply personal practice atmosphere.",
    shortValueProp: "Boutique yoga in a serene medina courtyard setting",
    googleRating: 4.9,
    reviewCount: 108,
    googleReviewCount: 75,
    tripadvisorRating: 4.7,
    tripadvisorReviewCount: 20,
    viatorRating: 4.6,
    viatorReviewCount: 8,
    getyourguideRating: 4.5,
    getyourguideReviewCount: 5,
    tip: "Book the restorative evening class after a long day of hiking in the Rif; the instructor tailors the practice to relieve hiker-specific tension.",
    tips: ["not available"],
    highlights: [
      "Intimate class sizes limited to 8 students maximum",
      "Specialized ashtanga, restorative, and prenatal yoga",
      "Restored medina house with peaceful courtyard garden",
      "Highly experienced international and local instructors"
    ],
    emotionalBenefits: ["Grounded", "Peaceful", "Reflective"],
    bestTimeToVisit: "Sunrise class (07:30 AM) or evening restorative (06:00 PM)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Courtyard classes weather permitting; indoor studio for rain)",
    ticketTypes: [
      {
        name: "Single Class",
        price: 100
      },
      {
        name: "5-Class Pack",
        price: 450
      },
      {
        name: "Private Session",
        price: 300
      }
    ],
    discountsInfo: "Multi-class packs offer best value; weekly retreat packages available",
    includedServices: ["Yoga mats and all props", "Herbal tea after class", "Use of changing facilities"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD; tip the instructor 20-30 MAD",
    address: "Derb el-Alou, Medina, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Derb%20el-Alou%2C%20Chefchaouen%20Medina%2C%20Morocco",
    parkingInfo: "No vehicle access to medina; parking at Place el-Majzen",
    publicTransportInfo: "Walkable from Plaza Uta el-Hammam in 5 minutes",
    dressCode: "Comfortable yoga clothing",
    equipmentNeeded: ["Yoga clothes", "Light layer for cool mornings"],
    fitnessLevel: "Relaxed",
    ageRestrictions: "Ages 14 and up welcome",
    safetyNotes: "Intimate space with attentive instructors; inform instructor of any injuries before class",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Quiet Mystic",
        quote: "The most peaceful yoga practice of my life. The courtyard setting and small class size made it deeply personal.",
        author: "Claire B. from Lyon",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "The Blue Medina of Chefchaouen",
        type: "visit",
        id: "chefchaouen-medina-blue-streets"
      },
      {
        name: "Plaza Uta el-Hammam",
        type: "visit",
        id: "chefchaouen-plaza-uta-el-hammam"
      }
    ],
    faq: [
      {
        q: "What style of yoga is offered?",
        a: "Daily classes rotate between ashtanga, vinyasa, restorative, and prenatal. Check the schedule online or at reception."
      },
      {
        q: "Can beginners join?",
        a: "Yes, all classes are beginner-friendly with modifications offered. The small class size allows for personal attention."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-body-soul-fitness",
    city: "chefchaouen",
    name: "Body & Soul Fitness Club",
    neighborhood: "New Town (Boulevard Mohammed VI)",
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
    distanceFromCenterKm: 1.8,
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
    description: "A modern full-service fitness club with a strong emphasis on functional training, group classes, and a comfortable women-only area. Known for its friendly staff and good value short-term memberships for travelers.",
    shortValueProp: "Clean modern gym with great women-only section and classes",
    googleRating: 4.4,
    reviewCount: 130,
    googleReviewCount: 110,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 20,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Very good for women travelers. The functional training area is popular and the women-only section is one of the best-equipped in town.",
    tips: ["not available"],
    highlights: [
      "Dedicated women-only training zone with full equipment",
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
    discountsInfo: "Weekly passes popular with visitors",
    includedServices: ["Full gym access", "Group classes"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Towel rental 10 MAD",
    address: "Boulevard Mohammed VI, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boulevard%20Mohammed%20VI%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Street parking",
    publicTransportInfo: "Petit taxi from medina (approx. 12 MAD)",
    dressCode: "Athletic clothing and indoor shoes",
    equipmentNeeded: ["Workout clothes", "Indoor shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Well-lit and secure with staff present",
    languages: ["Arabic (Darija)", "French", "Spanish"],
    visitorQuotes: [
      {
        type: "Female Traveler",
        quote: "Loved the women-only section. Clean and not intimidating.",
        author: "Nadia S. from Madrid",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
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
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-boxing-club",
    city: "chefchaouen",
    name: "Chefchaouen Boxing Club",
    neighborhood: "New Town Sports Complex",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "friends"],
    crowdLevel: "balanced",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "combat-sports", "day-pass", "gym-fitness", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 90,
    distanceFromCenterKm: 1.4,
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
    hasWiFi: false,
    nearMedina: false,
    goodForRain: true,
    openingHours: "05:00 PM - 09:00 PM (Mon-Sat); mornings by appointment",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "combat-sports",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasGroupClasses: true,
    hasFullWeights: true,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A community boxing club offering training for locals and travelers, with a full-size ring, heavy bag area, and conditioning equipment. Known for its authentic Moroccan boxing atmosphere and welcoming coaches who train everyone from beginners to competitive amateurs.",
    shortValueProp: "Authentic Moroccan boxing experience with welcoming community coaches",
    googleRating: 4.5,
    reviewCount: 77,
    googleReviewCount: 65,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 12,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Bring hand wraps if you have them; the club rents gloves but wraps are personal items. Beginners welcome with patient coaching.",
    tips: ["not available"],
    highlights: [
      "Full-size boxing ring and heavy bag area",
      "Conditioning and strength training equipment",
      "Coaches who train beginners to competitive amateurs",
      "Authentic local community boxing atmosphere"
    ],
    emotionalBenefits: ["Energized", "Empowered", "Accomplished"],
    bestTimeToVisit: "Evening sessions (06:00 PM - 08:00 PM) when most active",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Single Session Drop-in",
        price: 50
      },
      {
        name: "Weekly Pass",
        price: 200
      },
      {
        name: "Private Coaching Session",
        price: 150
      }
    ],
    discountsInfo: "Multi-session packages available",
    includedServices: ["Use of ring and bags", "Coaching instruction", "Glove rental (with deposit)"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Hand wraps personal item (purchase for 30 MAD); towel 5 MAD",
    address: "Complexe Sportif, Avenue des FAR, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Complexe%20Sportif%2C%20Avenue%20des%20FAR%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free parking at the sports complex",
    publicTransportInfo: "Walkable from new town; petit taxi from medina (10 MAD)",
    dressCode: "Athletic wear; hand wraps and boxing gloves required",
    equipmentNeeded: ["Workout clothes", "Hand wraps (or purchase)", "Indoor athletic shoes"],
    fitnessLevel: "Active",
    ageRestrictions: "Ages 14 and up; minors need parental consent",
    safetyNotes: "Coaches supervise all sessions; mouthguard required for sparring",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Fitness Enthusiast",
        quote: "Authentic boxing gym with great coaching. The head coach took time with me as a beginner and the local boxers were welcoming.",
        author: "Youssef A. from Lyon",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
      }
    ],
    faq: [
      {
        q: "Can I try boxing without experience?",
        a: "Yes, beginner-friendly sessions are offered daily. Coaches teach fundamentals of stance, footwork, and basic punches."
      },
      {
        q: "Is sparring required?",
        a: "No, sparring is optional and only for those who want it. Most sessions focus on bag work, conditioning, and technique."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-eden-gym-spa",
    city: "chefchaouen",
    name: "Eden Gym & Spa",
    neighborhood: "Haut Chefchaouen (New Town Hills)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "friends", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["luxury-curator", "modern-nomad", "quiet-mystic"],
    tags: ["climbing-adventure", "day-pass", "gym-fitness", "swimming-pool", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 4,
    pricePerPerson: 150,
    entryPrice: 150,
    durationMinutes: 120,
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
    hasSunsetView: false,
    hasWiFi: true,
    nearMedina: false,
    goodForRain: true,
    openingHours: "07:00 AM - 09:00 PM (Daily)",
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
    description: "A premium gym and spa complex perched on the hills above the new town, featuring a full gym, indoor pool, hammam, sauna, and massage studios. Popular with luxury travelers and expats seeking a complete wellness experience with panoramic Rif views.",
    shortValueProp: "Premium gym, pool, and spa complex with panoramic Rif views",
    googleRating: 4.7,
    reviewCount: 253,
    googleReviewCount: 180,
    tripadvisorRating: 4.6,
    tripadvisorReviewCount: 45,
    viatorRating: 4.5,
    viatorReviewCount: 18,
    getyourguideRating: 4.4,
    getyourguideReviewCount: 10,
    tip: "Book the day pass that includes gym, pool, and hammam for the best value; the sunset swim with views over the medina is magical.",
    tips: ["not available"],
    highlights: [
      "State-of-the-art gym equipment and free weights",
      "Indoor heated pool with panoramic Rif mountain views",
      "Traditional hammam, sauna, and massage studios",
      "Daily yoga and Pilates classes on the rooftop terrace"
    ],
    emotionalBenefits: ["Relaxed", "Energized", "Luxurious"],
    bestTimeToVisit: "Morning (08:00-11:00 AM) for the quietest spa experience",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Gym Day Pass",
        price: 80
      },
      {
        name: "Gym + Pool + Hammam Day Pass",
        price: 150
      },
      {
        name: "Full Spa Day (with 60-min massage)",
        price: 450
      },
      {
        name: "Weekly Membership",
        price: 600
      }
    ],
    discountsInfo: "10% discount for hotel guests; spa packages available",
    includedServices: ["Gym access", "Pool and thermal area", "Towel and robe", "Herbal tea"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Massage treatments extra (250-450 MAD); tip therapists 50-100 MAD",
    address: "Haut Chefchaouen, New Town Hills, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Haut%20Chefchaouen%2C%20New%20Town%20Hills%2C%20Morocco",
    parkingInfo: "Free private parking",
    publicTransportInfo: "Petit taxi from medina (approx. 15 MAD)",
    dressCode: "Athletic wear for gym; swimwear for pool; provided robe for spa",
    equipmentNeeded: ["Workout clothes", "Swimsuit", "Indoor shoes"],
    fitnessLevel: "Moderate",
    ageRestrictions: "Ages 16 and up; spa area ages 18 and up",
    safetyNotes: "Lifeguard on duty; professional spa therapists; non-slip surfaces throughout",
    languages: ["Arabic (Darija)", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Luxury Traveler",
        quote: "Best spa experience in northern Morocco. The sunset swim with views over the blue medina was magical.",
        author: "Isabella V. from Madrid",
        rating: 5
      },
      {
        type: "Business Traveler",
        quote: "Perfect after a long day of meetings. The gym is well-equipped and the hammam is excellent.",
        author: "Mehdi K.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Spanish Mosque Viewpoint",
        type: "visit",
        id: "chefchaouen-spanish-mosque"
      }
    ],
    faq: [
      {
        q: "Can I use just the gym?",
        a: "Yes, a gym-only day pass is 80 MAD. The combined gym+pool+hammam pass offers the best value at 150 MAD."
      },
      {
        q: "Do I need to book spa treatments in advance?",
        a: "Recommended, especially for evenings and weekends. Walk-ins accommodated subject to availability."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-running-rif-trails",
    city: "chefchaouen",
    name: "Rif Trail Running Club",
    neighborhood: "Rif Foothills",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "intense",
    archetypeAffinity: ["adventure", "nomad"],
    tags: ["active", "day-pass", "mountain", "nature", "private", "running-outdoor", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 2,
    pricePerPerson: 60,
    entryPrice: 60,
    durationMinutes: 90,
    distanceFromCenterKm: 5,
    transportMode: "taxi",
    transportModes: ["not available"],
    safetyLevel: 4,
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
    hasWiFi: false,
    nearMedina: false,
    goodForRain: false,
    openingHours: "Group runs: Tue/Thu 06:30 PM, Sat 06:30 AM; private runs by appointment",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "running-outdoor",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: false,
    hasGroupClasses: true,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "An organized trail running club that meets three times weekly for guided runs on the shepherd trails and dirt tracks of the Rif foothills above Chefchaouen. Suitable for intermediate to advanced runners; visitors welcome on a drop-in basis.",
    shortValueProp: "Run the shepherd trails of the Rif with a guided trail running group",
    googleRating: 4.7,
    reviewCount: 67,
    googleReviewCount: 55,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 12,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Choose the sunrise run for the most spectacular light and the coolest temperatures; the guides know the best trails for each fitness level.",
    tips: ["not available"],
    highlights: [
      "Guided trail runs on Rif foothill shepherd tracks",
      "Three weekly group runs (Tuesday, Thursday, Saturday sunrise)",
      "Routes for intermediate to advanced runners (5-15 km)",
      "Panoramic views of the medina and Rif peaks"
    ],
    emotionalBenefits: ["Energized", "Accomplished", "Grounded"],
    bestTimeToVisit: "Saturday sunrise run for the best light and temperatures",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round (Summer runs at sunrise only; some trails closed in winter rain)",
    ticketTypes: [
      {
        name: "Single Group Run Drop-in",
        price: 60
      },
      {
        name: "5-Run Pack",
        price: 250
      },
      {
        name: "Private Guided Run",
        price: 200
      }
    ],
    discountsInfo: "Multi-run packs offer best value; first group run free for visitors",
    includedServices: [
      "Guided run",
      "Trail briefing and route selection",
      "Water and electrolytes",
      "Transport to trailhead"
    ],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Trail shoes rental 50 MAD; tip the guide 20-30 MAD",
    address: "Rif Foothills Trailhead, 5 km south of Chefchaouen",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Talassemtane%20National%20Park%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free parking at the trailhead",
    publicTransportInfo: "Transport from Chefchaouen included in run price",
    dressCode: "Trail running clothing; layered for cool mornings",
    equipmentNeeded: [
      "Trail running shoes with grip",
      "Moisture-wicking clothing",
      "Hydration belt or bottle",
      "Hat and sunscreen"
    ],
    fitnessLevel: "Active (Ability to run 5 km continuously on mixed terrain)",
    ageRestrictions: "Ages 16 and up",
    safetyNotes: "Trails include rocky and uneven sections; inform guide of any injuries. Runs cancelled in heavy rain.",
    languages: ["Arabic (Darija)", "Tarifit", "French", "English", "Spanish"],
    visitorQuotes: [
      {
        type: "Adventure Traveler",
        quote: "Trail running above the Blue Pearl at sunrise was the highlight of my trip. The guide matched the pace to my level perfectly.",
        author: "Lucas P. from Geneva",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Bouzafar Hill Lookout",
        type: "visit",
        id: "chefchaouen-bouzafar-lookout"
      },
      {
        name: "Talassemtane National Park Trek",
        type: "visit",
        id: "chefchaouen-talassemtane-trek"
      }
    ],
    faq: [
      {
        q: "What pace do the group runs go?",
        a: "Group runs accommodate paces from 6:00 to 8:30 min/km. Private runs can be tailored to any pace."
      },
      {
        q: "Can beginners join?",
        a: "The shortest group runs (5 km) are suitable for runners who can complete 5 km continuously. Absolute beginners should book a private guided run."
      }
    ],
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "chefchaouen-tislit-mountain-sports",
    city: "chefchaouen",
    name: "Tislit Mountain Sports Center",
    neighborhood: "New Town (Avenue des FAR)",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["family", "nomad", "first-timer"],
    tags: ["climbing-adventure", "day-pass", "team-sports", "urban", "walk-in"],
    badges: ["not available"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 25,
    entryPrice: 25,
    durationMinutes: 90,
    distanceFromCenterKm: 1,
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
    openingHours: "10:00 AM - 09:00 PM (Daily)",
    paymentMethods: ["not available"],
    amenities: ["not available"],
    restrictions: ["not available"],
    healthContraindications: ["not available"],
    facilityType: "team-sports",
    sportIntent: "practical",
    hasDayPass: true,
    hasWomenOnlyHours: true,
    hasGroupClasses: false,
    hasFullWeights: false,
    // ── 3. UI — presentation & social proof —───────────────
    description: "A multi-sport community center offering indoor climbing wall, table tennis, mini-football court, and a small gym area. Popular with local youth and visiting families looking for active indoor options on rainy days.",
    shortValueProp: "Multi-sport indoor center for families and rainy-day active fun",
    googleRating: 4.2,
    reviewCount: 103,
    googleReviewCount: 85,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 18,
    viatorRating: 0,
    viatorReviewCount: 0,
    getyourguideRating: 0,
    getyourguideReviewCount: 0,
    tip: "Book the indoor climbing wall session in advance, especially on rainy days when local families flock here; great introduction to climbing for kids.",
    tips: ["not available"],
    highlights: [
      "Indoor climbing wall with routes for beginners and intermediates",
      "Mini-football court and table tennis tables",
      "Small gym area with cardio and weights",
      "Family-friendly atmosphere with kids programming"
    ],
    emotionalBenefits: ["Energized", "Social", "Accomplished"],
    bestTimeToVisit: "Afternoon (02:00 PM - 05:00 PM) for family-friendly atmosphere",
    typicalWaitTimeMinutes: 5,
    seasonality: "Year-round (Especially popular on rainy days)",
    ticketTypes: [
      {
        name: "Day Pass (all facilities)",
        price: 25
      },
      {
        name: "Climbing Wall Session (90 min)",
        price: 35
      },
      {
        name: "Monthly Membership",
        price: 200
      }
    ],
    discountsInfo: "Children under 12 half price; family packages available",
    includedServices: ["Access to all sports facilities", "Equipment rental (climbing harness, balls, paddles)"],
    excludedServices: ["not available"],
    hiddenCostsInfo: "Climbing shoes rental 15 MAD; locker rental 5 MAD",
    address: "Avenue des FAR, New Town, Chefchaouen 91000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenue%20des%20FAR%2C%20Chefchaouen%2C%20Morocco",
    parkingInfo: "Free street parking nearby",
    publicTransportInfo: "Walkable from new town; petit taxi from medina (10 MAD)",
    dressCode: "Athletic clothing; clean indoor shoes mandatory",
    equipmentNeeded: ["Athletic clothing", "Indoor shoes (climbing shoes optional)"],
    fitnessLevel: "Moderate",
    ageRestrictions: "All ages welcome; climbing wall for ages 6 and up",
    safetyNotes: "Trained staff supervise climbing wall; harnesses and belay devices provided",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Family Holiday",
        quote: "Lifesaver on a rainy day. Our kids loved the climbing wall and we played mini-football for an hour. Great value.",
        author: "Sophie M. from France",
        rating: 4
      }
    ],
    nearbyCombos: [
      {
        name: "Avenue Hassan II Promenade",
        type: "visit",
        id: "chefchaouen-uta-hammam-promenade"
      }
    ],
    faq: [
      {
        q: "Do I need climbing experience?",
        a: "No, staff provide basic instruction and belay supervision. Routes range from easy to intermediate."
      },
      {
        q: "Is the climbing wall suitable for children?",
        a: "Yes, routes are available for ages 6 and up with harnesses and staff supervision."
      }
    ],
  }
];
