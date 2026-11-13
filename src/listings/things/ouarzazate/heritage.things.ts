/**
 * =========================================================================
 * [OUARZAZATE] THINGS TO DO — HERITAGE & CULTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/ouarzazate/index.ts
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — HERITAGE & CULTURE ══
export const ouarzazateHeritageThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-ait-ben-haddou",
    city: "ouarzazate",
    name: "Aït Ben Haddou",
    neighborhood: "Cinema Studios",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "large-groups"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "photographer"],
    vibeTags: ["iconic", "historical", "scenic"],
    tags: ["cultural-tour", "desert", "instagrammable", "walk-in", "iconic-landmark"],
    badges: ["cultural-icon", "must-see", "historic-landmark"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 30.0,
    transportMode: "mixed",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "steep_exterior_approach"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 4,
      heatExposure: 4,
      touristCrowd: 4,
      noiseLevel: 2,
      scamRisk: 3,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "08:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 1, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "food_stalls", "gift_shop", "parking"],
    restrictions: ["Sturdy walking shoes recommended for unpaved earthen paths and stepped slopes."],
    healthContraindications: ["Steep hill climb and uneven stairs not suitable for visitors with acute mobility limitations."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Morocco's most famous ksar delivers mud-brick architecture, river crossings, and cinematic views.",
    shortValueProp: "Walk the UNESCO earthen citadel featured in Gladiator, Lawrence of Arabia, and Game of Thrones.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg/1280px-Ksar_A%C3%AFt_Benhaddou%2C_Marocco_%28%D8%A3%D9%8A%D8%AA_%D8%A8%D9%86_%D8%AD%D8%AF%D9%88%D8%8C_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%2C_%E2%B4%B0%E2%B5%A2%E2%B5%9C_%E2%B5%83%E2%B4%B0%E2%B4%B7%E2%B4%B7%E2%B5%93%29.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 5796,
    badge: "essential",
    tip: "Go early or stay late to enjoy the ksar outside midday tour-bus peaks.",
    tips: [
      "Cross via the modern pedestrian bridge if river stepping stones are wet or submerged.",
      "Bring small change in MAD if you wish to climb private family towers for elevated views."
    ],
    highlights: [
      "Summit the ancient hilltop agadir (granary) for a panoramic view over the Ounila Valley.",
      "Wander genuine 17th-century adobe alleys where traditional families still reside."
    ],
    emotionalBenefits: [
      "Step directly into cinematic history and authentic southern Moroccan heritage.",
      "Feel the calming natural insulation inside centuries-old rammed-earth chambers."
    ],
    ticketTypes: [
      { name: "Public Ksar Entry", price: 0, currency: "MAD" },
      { name: "Private Kasbah House Entry", price: 20, currency: "MAD", conditions: "Paid directly to resident families" }
    ],
    includedServices: ["Self-guided access to public village pathways and fortified lanes"],
    excludedServices: ["Licensed local guide hire (optional, approx. 100-150 MAD)"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Uneven Steps",
        tagColor: "safety",
        tone: "caution",
        description: "Paths consist of loose soil, stones, and stairs without guardrails; wear gripping shoes.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Touting Alert",
        tagColor: "alert",
        tone: "caution",
        description: "Unofficial guides may demand high prices at the riverbanks; clarify tour rates in advance.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Village",
        tagColor: "money",
        tone: "good",
        description: "Entering the ksar itself is free; small fees apply only to private rooftop family houses.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "UNESCO Site",
        tagColor: "craft",
        tone: "good",
        description: "Authentic pre-Saharan earthen habitat officially recognized as a UNESCO World Heritage landmark.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Moderate Hike",
        tagColor: "alert",
        tone: "caution",
        description: "Reaching the summit granary involves 20 minutes of continuous uphill stepping under sun.",
        state: "verified"
      }
    ],
    address: "Ksar Aït Ben Haddou, Route P1506, Amerzgane 45100, Morocco",
    coordinates: { lat: 31.0470, lng: -7.1318 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=A%C3%AFt+Ben+Haddou%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-atlas-studios",
    city: "ouarzazate",
    name: "Atlas Studios",
    neighborhood: "Cinema Studios",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "culture", "photographer"],
    vibeTags: ["iconic", "artistic", "historical"],
    tags: ["cultural-tour", "instagrammable", "relaxed", "urban", "walk-in"],
    badges: ["cultural-icon", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 80,
    pricePerPerson: 80,
    entryPrice: 80,
    durationMinutes: 90,
    distanceFromCenterKm: 5.0,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 06:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:30" },
      { dayOfWeek: 1, open: "08:30", close: "18:30" },
      { dayOfWeek: 2, open: "08:30", close: "18:30" },
      { dayOfWeek: 3, open: "08:30", close: "18:30" },
      { dayOfWeek: 4, open: "08:30", close: "18:30" },
      { dayOfWeek: 5, open: "08:30", close: "18:30" },
      { dayOfWeek: 6, open: "08:30", close: "18:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["ticket_booth", "restrooms", "gift_shop", "cafe", "parking"],
    restrictions: ["Guided walking tours are mandatory to access active backlot sets."],
    healthContraindications: ["Open desert terrain with high midday sun exposure; carry bottled water."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Huge backlots and reused film sets explain why Ouarzazate became the country's movie capital.",
    shortValueProp: "Tour monumental Egyptian, Roman, and Biblical sets across the world's largest desert film backlot.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Atlas_Film_Studios_Ouarzazate_Morocco.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Cleopatra_Palace_%2817020353334%29.jpg"
    ],
    googleRating: 4.7,
    reviewCount: 4221,
    badge: "popular",
    tip: "A guide adds a lot here because many sets look similar without context.",
    tips: [
      "Opt for the combined ticket to include the Kingdom of Heaven Jerusalem fortress set.",
      "Check at the gate if active film shoots restrict entry to specific backlot sectors."
    ],
    highlights: [
      "Stand before the towering pharaonic statues of the Asterix & Obelix Cleopatra set.",
      "Walk the Tibetan temple sets crafted for Martin Scorsese's Kundun."
    ],
    emotionalBenefits: [
      "Uncover the illusionary magic and craftsmanship behind international desert blockbusters.",
      "Capture whimsical vacation photos amidst full-scale historical movie replicas."
    ],
    ticketTypes: [
      { name: "Atlas Studios Tour", price: 80, currency: "MAD" },
      { name: "Combined Tour (Studios + Kingdom of Heaven)", price: 120, currency: "MAD" }
    ],
    includedServices: ["Guided tour in French or English through backlot standing sets"],
    excludedServices: ["Personal transport to/from Ouarzazate downtown"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Flat Ground",
        tagColor: "safety",
        tone: "good",
        description: "Open gravel tracks and flat desert backlots are simple to navigate on foot.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Official Gate",
        tagColor: "safety",
        tone: "good",
        description: "Tickets are issued at the formal entrance desk with regulated tour departures.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Rates",
        tagColor: "money",
        tone: "good",
        description: "Fixed admission price of 80 MAD includes the required studio guide.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Real Studio",
        tagColor: "craft",
        tone: "good",
        description: "Genuine working film production studio operating in southern Morocco since 1983.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Easy Walk",
        tagColor: "safety",
        tone: "good",
        description: "Leisurely 90-minute flat stroll between sets, though shade is limited outdoors.",
        state: "verified"
      }
    ],
    address: "Km 5, Route de Marrakech (N9), Tamassinte, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9418, lng: -6.9669 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Atlas+Studios%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-taourirt-kasbah",
    city: "ouarzazate",
    name: "Taourirt Kasbah",
    neighborhood: "Kasbah Taourirt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "culture", "history"],
    vibeTags: ["architectural", "historical", "intricate"],
    tags: ["cultural-tour", "instagrammable", "private", "urban", "walk-in", "historical"],
    badges: ["architectural-gem", "historic-landmark", "must-see"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 75,
    distanceFromCenterKm: 1.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 2,
      heatExposure: 1,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 06:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:00" },
      { dayOfWeek: 1, open: "08:30", close: "18:00" },
      { dayOfWeek: 2, open: "08:30", close: "18:00" },
      { dayOfWeek: 3, open: "08:30", close: "18:00" },
      { dayOfWeek: 4, open: "08:30", close: "18:00" },
      { dayOfWeek: 5, open: "08:30", close: "18:00" },
      { dayOfWeek: 6, open: "08:30", close: "18:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "historical_documentation", "shaded_courtyards", "street_parking"],
    restrictions: ["Low ceilings and steep, narrow internal stairwells throughout the upper palace chambers."],
    healthContraindications: ["Not accessible for wheelchair users due to preserved historic earthen thresholds."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An iconic kasbah in the middle of town with layered rooms, towers, and classic southern architecture.",
    shortValueProp: "Step into the 19th-century Glaoui palace decorated with carved stucco and painted cedarwood ceilings.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Kasbah_Taourirt_Ouarzazate_interior_DSCF6759.jpg"
    ],
    googleRating: 4.8,
    reviewCount: 4834,
    badge: "architectural-gem",
    tip: "Visit with the nearby cinema museum to avoid extra backtracking.",
    tips: [
      "Look upward in the restored reception halls to admire intricate painted wooden ceilings.",
      "Hire an accredited local guide at the desk if you wish to understand the Glaoui dynasty history."
    ],
    highlights: [
      "Explore the former private quarters and harem chambers of Pacha Thami El Glaoui.",
      "Admire the geometric clay relief patterns sculpted across the external fortress towers."
    ],
    emotionalBenefits: [
      "Experience the quiet serenity of thick mud walls insulating against city sounds.",
      "Appreciate the masterly craftsmanship of southern Moroccan Berber artisans."
    ],
    ticketTypes: [
      { name: "Palace Admission", price: 20, currency: "MAD" }
    ],
    includedServices: ["Self-guided access throughout the restored state wing of the kasbah"],
    excludedServices: ["Unofficial guide services outside the monument"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Low Doorways",
        tagColor: "safety",
        tone: "caution",
        description: "Stairways are dark and narrow with low lintels; tall visitors must watch their heads.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Touts Outside",
        tagColor: "alert",
        tone: "caution",
        description: "Independent guides linger on the square; insist on official credentials or decline politely.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Nominal Fee",
        tagColor: "money",
        tone: "good",
        description: "Official ticket booth charges a standard 20 MAD entry fee with receipt provided.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Historic Bastion",
        tagColor: "craft",
        tone: "good",
        description: "Carefully restored Glaoui stronghold that anchored trans-Saharan trade through Ouarzazate.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Stair Climbs",
        tagColor: "safety",
        tone: "good",
        description: "Navigating between palace floors requires climbing several short, steep staircases.",
        state: "verified"
      }
    ],
    address: "Avenue Mohammed V, Kasbah Taourirt, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9201, lng: -6.8994 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Taourirt+Kasbah%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-cinema-museum",
    city: "ouarzazate",
    name: "Cinema Museum",
    neighborhood: "Kasbah Taourirt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["nostalgic", "artistic", "historical"],
    tags: ["cultural-tour", "private", "relaxed", "urban", "walk-in"],
    badges: ["educational", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 30,
    pricePerPerson: 30,
    entryPrice: 30,
    durationMinutes: 60,
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
    accessibilityFeatures: ["ground_floor_access", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "10:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "10:00", close: "17:00" },
      { dayOfWeek: 1, open: "10:00", close: "17:00" },
      { dayOfWeek: 2, open: "10:00", close: "17:00" },
      { dayOfWeek: 3, open: "10:00", close: "17:00" },
      { dayOfWeek: 4, open: "10:00", close: "17:00" },
      { dayOfWeek: 5, open: "10:00", close: "17:00" },
      { dayOfWeek: 6, open: "10:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "exhibition_hall", "restrooms", "street_parking"],
    restrictions: ["Visitors should not climb on delicate antique studio equipment or mock props."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "Props, costumes, and old sets give extra context to Ouarzazate's film identity.",
    shortValueProp: "Inspect original vintage cameras, Biblical mockups, and film sets right across from the Kasbah.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Pathe_Projector_Ouarzazate.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Kasbah_Taourirt_Ouarzazate_DSCF6838.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 1528,
    badge: "popular",
    tip: "It is small enough to pair comfortably with Taourirt Kasbah.",
    tips: [
      "Great relaxed indoor stop when afternoon temperatures outdoors reach peak heat.",
      "Explore the former Italian studio production stage located toward the back rooms."
    ],
    highlights: [
      "See vintage 1920s Pathé film projectors and authentic cinematic sound gear.",
      "Pose inside theatrical prison sets, courtrooms, and desert banquet backdrops."
    ],
    emotionalBenefits: [
      "Appreciate the nostalgic golden era of international filmmaking in the Sahara.",
      "Enjoy a quiet, uncrowded cultural walk just across from the lively main boulevard."
    ],
    ticketTypes: [
      { name: "Museum Admission", price: 30, currency: "MAD" }
    ],
    includedServices: ["Self-guided exhibition entry to all galleries and indoor film halls"],
    excludedServices: ["Audio guide or specialized guided tour"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Well Guarded",
        tagColor: "safety",
        tone: "good",
        description: "Enclosed municipal museum space with secure indoor walkways and clear exhibition halls.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Honest Entry",
        tagColor: "safety",
        tone: "good",
        description: "Official ticket window with posted pricing and no pushy upselling.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Affordable",
        tagColor: "money",
        tone: "good",
        description: "Straightforward 30 MAD entry fee offering good value for movie memorabilia enthusiasts.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Real Sets",
        tagColor: "craft",
        tone: "good",
        description: "Houses preserved original movie props, costumes, and camera kits from real film shoots.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Very Easy",
        tagColor: "safety",
        tone: "good",
        description: "Completely flat ground floor walking route with minimal step friction.",
        state: "verified"
      }
    ],
    address: "Avenue Mohammed V (opposite Taourirt Kasbah), Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9208, lng: -6.9015 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cinema+Museum%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-cla-studios-ouarzazate",
    city: "ouarzazate",
    name: "CLA Studios Ouarzazate",
    neighborhood: "Cinema Studios",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["artistic", "iconic", "scenic"],
    tags: ["cultural-tour", "instagrammable", "relaxed", "urban", "walk-in"],
    badges: ["photography-spot", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 50,
    pricePerPerson: 50,
    entryPrice: 50,
    durationMinutes: 75,
    distanceFromCenterKm: 7.0,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: true,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "restrooms", "parking", "gift_shop"],
    restrictions: ["Access to specific soundstages depends on live filming schedules."],
    healthContraindications: ["Outdoor desert sets involve sun exposure; bring water and hats."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A working studio visit for film fans who want more than the standard Atlas set circuit.",
    shortValueProp: "Tour Dino De Laurentiis' studio backlots showcasing the massive Jerusalem citadel and desert fortress.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atlas_Film_Studios_Ouarzazate_Morocco.JPG/1280px-Atlas_Film_Studios_Ouarzazate_Morocco.JPG"
    ],
    googleRating: 4.5,
    reviewCount: 985,
    badge: "hidden-gem",
    tip: "Check availability ahead because access can depend on productions.",
    tips: [
      "Ask your driver to wait outside or agree on a return taxi pickup time.",
      "The massive fortress set in the open desert behind the studios is the main photographic highlight."
    ],
    highlights: [
      "Explore the huge faux-stone castle walls built for Ridley Scott's Kingdom of Heaven.",
      "Inspect authentic prop workshops, shields, medieval armory, and siege weapon replicas."
    ],
    emotionalBenefits: [
      "Touch the actual materials and foam-plaster wizardry that tricks millions on the cinema screen.",
      "Enjoy an unhurried, peaceful film set tour away from larger tourist group buses."
    ],
    ticketTypes: [
      { name: "Studio & Backlot Admission", price: 50, currency: "MAD" }
    ],
    includedServices: ["Guided or self-guided backlot grounds walk with staff access"],
    excludedServices: ["Transportation back to city center"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Secure Backlot",
        tagColor: "safety",
        tone: "good",
        description: "Controlled studio complex with gated access and safe walking pathways between sets.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Ticket",
        tagColor: "safety",
        tone: "good",
        description: "Official entrance booth; no middle-man fees or unofficial guide haggling required.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fair Value",
        tagColor: "money",
        tone: "good",
        description: "Entry is 50 MAD; clear rates for seeing the huge exterior castle sets.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Working Stage",
        tagColor: "craft",
        tone: "good",
        description: "Co-founded by producer Dino De Laurentiis and Cinecittà for high-end international shoots.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Terrain",
        tagColor: "safety",
        tone: "good",
        description: "Level dirt and gravel pathways between hangars and the castle set.",
        state: "verified"
      }
    ],
    address: "Route de Marrakech (N9), Secteur Isfoutalil, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9417, lng: -6.9863 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CLA+Studios+Ouarzazate%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-old-synagogue-and-mellah-walk",
    city: "ouarzazate",
    name: "Old Synagogue & Mellah Walk",
    neighborhood: "Kasbah Taourirt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "moderate",
    archetypeAffinity: ["culture", "nomad", "history"],
    vibeTags: ["historical", "peaceful", "solemn"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "urban", "walk-in"],
    badges: ["hidden-gem", "historic-memorial", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 75,
    distanceFromCenterKm: 1.6,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "cobblestone_paths"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 3,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 06:00 PM (Daily)",
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
    amenities: ["walking_paths", "historical_documentation", "shaded_courtyards"],
    restrictions: ["Modest dress and respectful quiet demeanor requested when entering the former synagogue space."],
    healthContraindications: ["Uneven earthen alleyways with occasional unlit tunnels."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "This small heritage stop reveals Ouarzazate's Jewish history and the texture of the old quarter.",
    shortValueProp: "Stroll the labyrinthine alleys of the old clay Mellah to discover southern Morocco's shared heritage.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 680,
    badge: "hidden-gem",
    tip: "A local guide can enrich the stories behind the quarter.",
    tips: [
      "Prepare a 20 MAD cash tip for the local elder who unlocks the historic synagogue and small craft museum.",
      "Take your time to observe the earthen clay construction that remains home to everyday local families."
    ],
    highlights: [
      "Visit the modest, preserved earthen synagogue and historical community prayer room.",
      "Walk the shaded alleys of the ancient ksar behind the Glaoui palace walls."
    ],
    emotionalBenefits: [
      "Connect with the deeply intertwined Judeo-Berber history of the Draa Valley.",
      "Experience genuine, uncommercialized hospitality in a quiet residential quarter."
    ],
    ticketTypes: [
      { name: "Mellah Walk", price: 0, currency: "MAD" },
      { name: "Synagogue Caretaker Tip (Recommended)", price: 20, currency: "MAD" }
    ],
    includedServices: ["Free self-guided walk through public alleys of Ksar Taourirt"],
    excludedServices: ["Customary tip to the caretaker unlocking the prayer sanctuary"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Peaceful Lane",
        tagColor: "safety",
        tone: "good",
        description: "Quiet residential earthen quarter where local families and children live peacefully.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Informal Tips",
        tagColor: "alert",
        tone: "caution",
        description: "Locals may offer to show you the way; a polite 10–20 MAD tip is appreciated if accepted.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Access",
        tagColor: "money",
        tone: "good",
        description: "Walking the quarter is free; only small voluntary tips apply to historic interior viewings.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Living History",
        tagColor: "craft",
        tone: "good",
        description: "Authentic pre-modern Jewish quarter preserving original rammed-earth architecture.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Narrow Alleys",
        tagColor: "safety",
        tone: "good",
        description: "Gentle flat walking through covered corridors with some uneven earthen steps.",
        state: "verified"
      }
    ],
    address: "Mellah de Taourirt, behind Taourirt Kasbah, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9198, lng: -6.8980 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Old+Synagogue+%26+Mellah+Walk%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-museum-theatre-memory-of-ouarzazate",
    city: "ouarzazate",
    name: "Museum-Theatre Memory of Ouarzazate",
    neighborhood: "Hay Al Mansour",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["culture", "nomad", "art-and-culture"],
    vibeTags: ["historical", "nostalgic", "peaceful"],
    tags: ["cultural-tour", "off-the-beaten-path", "private", "relaxed", "urban", "walk-in"],
    badges: ["hidden-gem", "cultural-immersion", "educational"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 60,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["taxi", "drive"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["ground_floor_access", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 05:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "17:00" },
      { dayOfWeek: 1, open: "09:00", close: "17:00" },
      { dayOfWeek: 2, open: "09:00", close: "17:00" },
      { dayOfWeek: 3, open: "09:00", close: "17:00" },
      { dayOfWeek: 4, open: "09:00", close: "17:00" },
      { dayOfWeek: 5, open: "09:00", close: "17:00" },
      { dayOfWeek: 6, open: "09:00", close: "17:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["ticket_booth", "exhibition_hall", "restrooms", "parking"],
    restrictions: ["Photography of specific private family documents and historical archives requires staff permission."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A smaller cultural stop focused on local heritage, memory, and staged historical displays.",
    shortValueProp: "Discover ethnographic folklore, desert costumes, and 20th-century Ouarzazate historical archives.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 713,
    badge: "hidden-gem",
    tip: "Best for travelers staying longer than one night in the region.",
    tips: [
      "Combine with an excursion eastward toward the palm groves of Skoura and the lake viewpoints.",
      "The curator is often on hand and passionate about explaining regional tribal artifacts."
    ],
    highlights: [
      "Examine antique rural farming tools, camel saddles, and vintage Saharan caravan gear.",
      "View vintage photo archives showcasing Ouarzazate before modern tourism and film sets."
    ],
    emotionalBenefits: [
      "Gain authentic appreciation for traditional oasis survival and Draa Valley life.",
      "Enjoy a quiet, intimate exhibition far away from standard tour bus routes."
    ],
    ticketTypes: [
      { name: "Museum Admission", price: 20, currency: "MAD" }
    ],
    includedServices: ["Self-guided walkthrough of ethnographic galleries and memory exhibits"],
    excludedServices: ["Personal transport arrangements"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Calm Space",
        tagColor: "safety",
        tone: "good",
        description: "Secure, relaxed museum building situated along the eastern thoroughfare.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Direct Ticket",
        tagColor: "safety",
        tone: "good",
        description: "Official small entry price paid directly at the reception desk without touts.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget Rate",
        tagColor: "money",
        tone: "good",
        description: "Inexpensive 20 MAD entry fee that directly supports local cultural preservation.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Memory",
        tagColor: "craft",
        tone: "good",
        description: "Created and run by local cultural advocates preserving southern Moroccan oasis heritage.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Effortless",
        tagColor: "safety",
        tone: "good",
        description: "Compact single-level exhibition requiring minimal physical exertion.",
        state: "verified"
      }
    ],
    address: "Route Nationale N10, Hay Al Mansour / Skoura Axis, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9230, lng: -6.8950 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Museum-Theatre+Memory+of+Ouarzazate%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-taourirt-kasbah-rooftop-tea-stop",
    city: "ouarzazate",
    name: "Taourirt Kasbah Rooftop Tea Stop",
    neighborhood: "Kasbah Taourirt",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "luxury", "relaxation"],
    vibeTags: ["scenic", "cosy", "peaceful"],
    tags: ["authentic", "instagrammable", "private", "sunset", "urban", "walk-in"],
    badges: ["sunset-spot", "panoramic-view", "peaceful-escape"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 30,
    pricePerPerson: 30,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.5,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 2,
      touristCrowd: 2,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 08:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "09:00", close: "20:00" },
      { dayOfWeek: 1, open: "09:00", close: "20:00" },
      { dayOfWeek: 2, open: "09:00", close: "20:00" },
      { dayOfWeek: 3, open: "09:00", close: "20:00" },
      { dayOfWeek: 4, open: "09:00", close: "20:00" },
      { dayOfWeek: 5, open: "09:00", close: "20:00" },
      { dayOfWeek: 6, open: "09:00", close: "20:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "panoramic_viewpoint", "shaded_benches", "restrooms"],
    restrictions: ["Steep access stairs to reach the highest panoramic rooftop levels."],
    healthContraindications: ["Not accessible for travelers unable to climb stairs."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A slower way to enjoy the kasbah quarter with city views and a classic mint-tea pause.",
    shortValueProp: "Savor fresh mint tea and southern pastries from an elevated terrace overlooking the kasbah ramparts.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 248,
    badge: "top-pick",
    tip: "Aim for the last hour before sunset when the light turns soft on the walls.",
    tips: [
      "Pair your tea with local almond gazelle horns or date sweets for an authentic treat.",
      "The late afternoon breeze on the roof offers natural relief after daytime heat."
    ],
    highlights: [
      "Look directly out over the crenelated earthen towers of Kasbah Taourirt at golden hour.",
      "Relax in shaded Berber seating with authentic handwoven cushions and brass tables."
    ],
    emotionalBenefits: [
      "Slow down and absorb the peaceful desert rhythm as the call to prayer echoes.",
      "Unwind comfortably with panoramic vistas over the palm river valley and High Atlas."
    ],
    ticketTypes: [
      { name: "Tea & Moroccan Pastry", price: 30, currency: "MAD" }
    ],
    includedServices: ["Terrace seating with order of mint tea or cold drinks"],
    excludedServices: ["Full sit-down restaurant meals unless ordered à la carte"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Rooftop Rails",
        tagColor: "safety",
        tone: "good",
        description: "Terrace edges have protective masonry parapets; supervise small children closely.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Menu Pricing",
        tagColor: "safety",
        tone: "good",
        description: "Drink and pastry prices are clearly printed on cafe menus before you order.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Menu",
        tagColor: "money",
        tone: "good",
        description: "Standard Moroccan cafe pricing (20–35 MAD for freshly brewed teapots).",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Ritual",
        tagColor: "craft",
        tone: "good",
        description: "Traditional Moroccan tea ritual served fresh with absinthe, spearmint, or local herbs.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Stair Ascent",
        tagColor: "safety",
        tone: "good",
        description: "Requires walking up two flights of earthen and tiled stairs to reach the rooftop.",
        state: "verified"
      }
    ],
    address: "Overlooking Ksar Taourirt, Avenue Mohammed V, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9203, lng: -6.8990 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Taourirt+Kasbah+Rooftop+Tea+Stop%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // ── NEW LISTING 1: ENSEMBLE ARTISANAL DE OUARZAZATE ──────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-ensemble-artisanal",
    city: "ouarzazate",
    name: "Ensemble Artisanal de Ouarzazate",
    neighborhood: "Centre-Ville",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "sensory-seeker"],
    vibeTags: ["artistic", "peaceful", "intricate"],
    tags: ["authentic", "cultural-tour", "market", "shopping", "urban", "walk-in"],
    badges: ["artisan-village", "cultural-immersion", "shopping-hub"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_courtyard", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "08:30 AM - 06:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "18:30" },
      { dayOfWeek: 1, open: "08:30", close: "18:30" },
      { dayOfWeek: 2, open: "08:30", close: "18:30" },
      { dayOfWeek: 3, open: "08:30", close: "18:30" },
      { dayOfWeek: 4, open: "08:30", close: "18:30" },
      { dayOfWeek: 5, open: "08:30", close: "18:30" },
      { dayOfWeek: 6, open: "08:30", close: "18:30" }
    ],
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["artisan_workshops", "restrooms", "shaded_courtyards", "street_parking"],
    restrictions: ["Always ask permission before photographing individual craftswomen at carpet looms."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A government-sponsored crafts complex where local masters demonstrate carpet weaving, pottery, and stone carving with fixed pricing.",
    shortValueProp: "Watch skilled Berber weavers and silversmiths at work in a hassle-free, government-supported artisan guild.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.5,
    reviewCount: 320,
    badge: "hidden-gem",
    tip: "A stress-free place to benchmark genuine Moroccan craft prices before negotiating in local markets.",
    tips: [
      "Visit in the morning to observe carpet weavers hand-knotting Taznakht patterns on vertical looms.",
      "Prices are fixed by official guild boards, meaning zero pressure to haggle."
    ],
    highlights: [
      "Watch local artisans chisel intricate fossils and desert soapstone sculptures by hand.",
      "Discover authentic Taznakht and Ouzguita wool rugs made with natural saffron and indigo dyes."
    ],
    emotionalBenefits: [
      "Shop calmly without the aggressive sales pitches typical of major city souks.",
      "Support independent local craftspeople receiving fair trade compensation directly."
    ],
    ticketTypes: [
      { name: "Free Admission", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free entry to open courtyards and active artisan demonstration workshops"],
    excludedServices: ["Purchased handcrafted items and carpets"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Peaceful Guild",
        tagColor: "safety",
        tone: "good",
        description: "Very secure government craft complex with broad paved courtyards and calm workshops.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Zero Pressure",
        tagColor: "safety",
        tone: "good",
        description: "State-managed center designed specifically to protect travelers from aggressive touts.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Fixed Rates",
        tagColor: "money",
        tone: "good",
        description: "Prices are clearly labeled on products; no haggling or price inflation.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Master Crafters",
        tagColor: "craft",
        tone: "good",
        description: "Authentic regional craftsmanship including genuine Taznakht rugs and carved desert stone.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Step Free",
        tagColor: "safety",
        tone: "good",
        description: "Single-level ground floor complex with complete wheelchair and stroller access.",
        state: "verified"
      }
    ],
    address: "Avenue Mohammed V (opposite Kasbah Taourirt), Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9212, lng: -6.9010 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ensemble+Artisanal+Ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // ── NEW LISTING 2: PLACE AL MOUAHIDINE & SOUK ─────────────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-place-al-mouahidine-souk",
    city: "ouarzazate",
    name: "Place Al Mouahidine & Central Souk",
    neighborhood: "Al Mouahidine",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "bustling",
    energyLevel: "moderate",
    archetypeAffinity: ["first-timer", "sensory-seeker", "culture"],
    vibeTags: ["vibrant", "sensory", "historical"],
    tags: ["authentic", "cultural-tour", "local-life", "market", "shopping", "urban", "walk-in"],
    badges: ["cultural-immersion", "market-experience"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 0.1,
    transportMode: "walkable",
    transportModes: ["walk", "taxi"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["flat_ground", "step_free_access", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    nearMedina: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 2,
      touristCrowd: 3,
      noiseLevel: 3,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "08:00 AM - 11:30 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "23:30" },
      { dayOfWeek: 1, open: "08:00", close: "23:30" },
      { dayOfWeek: 2, open: "08:00", close: "23:30" },
      { dayOfWeek: 3, open: "08:00", close: "23:30" },
      { dayOfWeek: 4, open: "08:00", close: "23:30" },
      { dayOfWeek: 5, open: "08:00", close: "23:30" },
      { dayOfWeek: 6, open: "08:00", close: "23:30" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["cafe", "food_stalls", "perimeter_benches", "fountains", "atm_nearby", "street_parking"],
    restrictions: ["Ask before photographing market stallholders up close."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The civic and cultural heartbeat of Ouarzazate, featuring shaded cafe terraces, spice vendors, and vibrant evening promenades.",
    shortValueProp: "Immerse yourself in authentic everyday southern life across the city's main cultural square and market.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.2,
    reviewCount: 1841,
    badge: "popular",
    tip: "Come in the early evening between 6:00 PM and 9:00 PM when locals gather for the sunset promenade.",
    tips: [
      "Sample local Zagora dates, walnuts, and fresh saffron at the spice and produce stalls around the perimeter.",
      "Sit outside at a terraced cafe on the square for a 15 MAD pot of spiced mint tea."
    ],
    highlights: [
      "Feel the authentic pulse of daily desert life far away from tourist staging areas.",
      "Browse traditional souk passages filled with dried spices, olives, rosewater, and leather babouches."
    ],
    emotionalBenefits: [
      "Experience warm Moroccan hospitality in an open, welcoming public environment.",
      "Relax in an unpretentious pedestrian plaza where generations mingle naturally."
    ],
    ticketTypes: [
      { name: "Public Square Access", price: 0, currency: "MAD" }
    ],
    includedServices: ["Free open public access to the square, gardens, and market alleys"],
    excludedServices: ["Personal cafe refreshments and market purchases"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Very Safe",
        tagColor: "safety",
        tone: "good",
        description: "Open, well-lit civic space heavily frequented by local families late into the evening.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Local Market",
        tagColor: "safety",
        tone: "good",
        description: "Market serves local residents directly; transparent pricing on food and daily goods.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Local Rates",
        tagColor: "money",
        tone: "good",
        description: "Inexpensive cafes and shops charge standard Moroccan domestic rates.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Civic Soul",
        tagColor: "craft",
        tone: "good",
        description: "The genuine social epicenter of Ouarzazate, untainted by commercial tourist theater.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Flat Paving",
        tagColor: "safety",
        tone: "good",
        description: "Broad, flat pedestrian paving suitable for seniors and strollers.",
        state: "verified"
      }
    ],
    address: "Place Al-Mouahidine, Rue Al-Mouahidine, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9195, lng: -6.9142 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Place+Al+Mouahidine%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // ── NEW LISTING 3: KSAR TABOUNT HERITAGE WALK ─────────────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-ksar-tabount-heritage-walk",
    city: "ouarzazate",
    name: "Ksar Tabount Heritage Walk",
    neighborhood: "Tabount",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nomad", "culture", "nature"],
    vibeTags: ["serene", "historical", "scenic"],
    tags: ["authentic", "cultural-tour", "off-the-beaten-path", "walk-in"],
    badges: ["cultural-immersion", "peaceful-escape", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 90,
    distanceFromCenterKm: 2.8,
    transportMode: "taxi",
    transportModes: ["walk", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_walkways", "some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
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
    openingHours: "08:00 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:00", close: "19:00" },
      { dayOfWeek: 1, open: "08:00", close: "19:00" },
      { dayOfWeek: 2, open: "08:00", close: "19:00" },
      { dayOfWeek: 3, open: "08:00", close: "19:00" },
      { dayOfWeek: 4, open: "08:00", close: "19:00" },
      { dayOfWeek: 5, open: "08:00", close: "19:00" },
      { dayOfWeek: 6, open: "08:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["walking_paths", "panoramic_viewpoint", "street_parking"],
    restrictions: ["Respect privacy in agricultural parcels and do not pick dates or fruits without asking."],
    healthContraindications: ["Dirt tracks and irrigation channels can be slippery when wet."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An authentic historic earthen settlement on the southern bank of the Oued Ouarzazate, surrounded by date palms and ancient irrigation.",
    shortValueProp: "Wander a working clay ksar and tranquil palm grove that predates the modern city of Ouarzazate.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.4,
    reviewCount: 380,
    badge: "hidden-gem",
    tip: "Visit on Saturday morning to combine your heritage walk with Tabount's traditional weekly souk.",
    tips: [
      "Wear sturdy walking shoes to follow the dirt trails running alongside traditional seguias (irrigation channels).",
      "Late afternoon yields soft, glowing golden light against the ancient earthen ramparts."
    ],
    highlights: [
      "Explore intact pre-Saharan rammed-earth village architecture still inhabited by local communities.",
      "Walk the shaded date palm groves watered by ancestral mountain river channels."
    ],
    emotionalBenefits: [
      "Escape all commercial tourist noise into deep rural oasis tranquility.",
      "Witness timeless agrarian customs and irrigation traditions dating back centuries."
    ],
    ticketTypes: [
      { name: "Public Ksar Walk", price: 0, currency: "MAD" }
    ],
    includedServices: ["Self-guided access along public oasis footpaths and historic ksar lanes"],
    excludedServices: ["Optional local guide fees"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Tranquil Oasis",
        tagColor: "safety",
        tone: "good",
        description: "Peaceful farming community where visitors are greeted with customary Berber warmth.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "No Touts",
        tagColor: "safety",
        tone: "good",
        description: "Off the standard tourist circuit with virtually no hassle or persistent hawkers.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Zero Cost",
        tagColor: "money",
        tone: "good",
        description: "Completely free open-air heritage walk through public communal agricultural paths.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Living Ksar",
        tagColor: "craft",
        tone: "good",
        description: "Genuine centuries-old oasis settlement maintaining traditional earthen building techniques.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Dirt Footpaths",
        tagColor: "safety",
        tone: "good",
        description: "Flat, unpaved agricultural tracks with occasional step-overs across low irrigation walls.",
        state: "verified"
      }
    ],
    address: "Ksar Tabount, across Pont Oued Ouarzazate, Tabount 45000, Morocco",
    coordinates: { lat: 30.9080, lng: -6.8970 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ksar+Tabount%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // ── NEW LISTING 4: PALAIS DE LA CULTURE MOHAMMED VI ───────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-palais-de-la-culture-mohammed-vi",
    city: "ouarzazate",
    name: "Mohammed VI Palace of Culture",
    neighborhood: "Al Wahda",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "business-friendly"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["art-and-culture", "culture", "educational"],
    vibeTags: ["artistic", "serene", "modern"],
    tags: ["cultural-tour", "urban", "walk-in"],
    badges: ["educational", "cultural-immersion"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 1.8,
    transportMode: "taxi",
    transportModes: ["taxi", "walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "wide_main_corridors", "ground_floor_access"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    nearMedina: false,
    goodForRain: true,
    friction: {
      walkingFatigue: 1,
      heatExposure: 1,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "09:00 AM - 07:00 PM (Mon-Sat)",
    openingHoursStructured: [
      { dayOfWeek: 1, open: "09:00", close: "19:00" },
      { dayOfWeek: 2, open: "09:00", close: "19:00" },
      { dayOfWeek: 3, open: "09:00", close: "19:00" },
      { dayOfWeek: 4, open: "09:00", close: "19:00" },
      { dayOfWeek: 5, open: "09:00", close: "19:00" },
      { dayOfWeek: 6, open: "09:00", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["exhibition_hall", "restrooms", "cafe", "parking"],
    restrictions: ["Quiet conduct expected inside public reading galleries and exhibition spaces."],
    healthContraindications: ["None."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The premier contemporary cultural center of Ouarzazate, hosting rotating Amazigh art exhibitions, theater, and civic cultural events.",
    shortValueProp: "Explore modern regional Amazigh art, photography galleries, and performance spaces in Al Wahda.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kasbah_Taourirt_in_Ouarzazate_2011.jpg"
    ],
    googleRating: 4.6,
    reviewCount: 190,
    badge: "hidden-gem",
    tip: "Check the entrance bulletin for evening Amazigh poetry recitals or independent film screenings.",
    tips: [
      "An inspiring spot to discover the work of young contemporary southern Moroccan painters and photographers.",
      "Air-conditioned and comfortable during hot summer afternoons."
    ],
    highlights: [
      "Browse rotating art galleries featuring local Amazigh painters and sculptors.",
      "Tour the impressive 5,800-square-meter modern civic complex opened to support southern arts."
    ],
    emotionalBenefits: [
      "Witness how traditional Berber identity evolves into modern cultural expression.",
      "Experience a creative civic haven connecting travelers with local artistic youth."
    ],
    ticketTypes: [
      { name: "Public Gallery Admission", price: 0, currency: "MAD" },
      { name: "Special Evening Performance", price: 30, currency: "MAD", conditions: "When ticketed shows are scheduled" }
    ],
    includedServices: ["Admission to public art galleries, reading halls, and exhibition wings"],
    excludedServices: ["Special theater performance tickets"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Modern Facility",
        tagColor: "safety",
        tone: "good",
        description: "Modern, secure municipal institution with staffed reception and clean facilities.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Public Venue",
        tagColor: "safety",
        tone: "good",
        description: "Official public civic complex without commercial soliciting or touts.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Entry",
        tagColor: "money",
        tone: "good",
        description: "General exhibition galleries are free and open to the public.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Living Culture",
        tagColor: "craft",
        tone: "good",
        description: "Created specifically for regional artists to present contemporary southern Moroccan works.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Fully Accessible",
        tagColor: "safety",
        tone: "good",
        description: "Broad corridors, elevators, and ramps offer effortless step-free navigation.",
        state: "verified"
      }
    ],
    address: "Hay Al Wahda (near Mosquée Al Wahda), Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9290, lng: -6.9030 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Palais+de+la+Culture+Ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  },
  // ── NEW LISTING 5: KASBAH TIFOULTOUTE ─────────────────────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "ouarzazate-kasbah-tifoultoute",
    city: "ouarzazate",
    name: "Kasbah Tifoultoute",
    neighborhood: "Tassoumaat",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["history", "culture", "photographer"],
    vibeTags: ["historical", "scenic", "architectural"],
    tags: ["cultural-tour", "historical", "off-the-beaten-path", "sunset", "walk-in"],
    badges: ["historic-landmark", "panoramic-view", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 20,
    pricePerPerson: 20,
    entryPrice: 20,
    durationMinutes: 75,
    distanceFromCenterKm: 8.0,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: true,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps"],
    isPhotographyFriendly: true,
    hasPrivateOption: true,
    hasSunsetView: true,
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
    openingHours: "08:30 AM - 07:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "08:30", close: "19:00" },
      { dayOfWeek: 1, open: "08:30", close: "19:00" },
      { dayOfWeek: 2, open: "08:30", close: "19:00" },
      { dayOfWeek: 3, open: "08:30", close: "19:00" },
      { dayOfWeek: 4, open: "08:30", close: "19:00" },
      { dayOfWeek: 5, open: "08:30", close: "19:00" },
      { dayOfWeek: 6, open: "08:30", close: "19:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "shaded_courtyards", "cafe", "parking"],
    restrictions: ["Watch your footing on unrailed rooftop parapets while photographing views."],
    healthContraindications: ["Requires climbing narrow ancient clay stairwells."],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A commanding 17th-century Glaoui fortress perched on a rocky spur with panoramic views of the river valley, famous for its nesting storks.",
    shortValueProp: "Climb the panoramic battlements of a Glaoui stronghold filmed in Lawrence of Arabia and Jesus of Nazareth.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Morocco%2C_Souss-Massa-Draa_Region%2C_Ouarzazate_Province%2C_Kasbah_Tifoultoute.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kasbah_Ouarzazate.jpg"
    ],
    googleRating: 4.3,
    reviewCount: 460,
    badge: "historic-landmark",
    tip: "Have a mint tea on the upper terrace to enjoy the sweeping view over the Ouarzazate river and palm valley.",
    tips: [
      "Look up at the towers in spring and summer to spot white storks nesting in giant twig nests atop the battlements.",
      "The admission fee is often waived if you purchase mint tea or lunch at the on-site riad restaurant."
    ],
    highlights: [
      "Survey the green ribbon of the Ouarzazate riverbed and snow-dusted High Atlas peaks from the roof.",
      "Examine preserved 300-year-old rammed-earth towers that guarded western caravan access."
    ],
    emotionalBenefits: [
      "Bask in total desert quiet away from tour buses and city traffic.",
      "Feel the romance of ancient trans-Saharan fortress life."
    ],
    ticketTypes: [
      { name: "Fortress Admission", price: 20, currency: "MAD", conditions: "Often waived with restaurant consumption" }
    ],
    includedServices: ["Access to historic fortress courtyards, interior corridors, and upper terrace"],
    excludedServices: ["Taxi fare from central Ouarzazate"],
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "High Terrace",
        tagColor: "safety",
        tone: "caution",
        description: "Rooftop battlements feature low parapets; exercise care when peering over outer edges.",
        state: "verified"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Fair Guardian",
        tagColor: "safety",
        tone: "good",
        description: "Caretakers are friendly and respectful; no aggressive sales or bogus fees.",
        state: "verified"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Modest Fee",
        tagColor: "money",
        tone: "good",
        description: "Nominal 20 MAD entrance fee that often includes or offsets tea on the terrace.",
        state: "verified"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Glaoui Bastion",
        tagColor: "craft",
        tone: "good",
        description: "Historic 17th-century citadel expanded by the Glaoui clan to control western caravan roads.",
        state: "verified"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Stair Climb",
        tagColor: "safety",
        tone: "good",
        description: "Requires navigating several steep historic mud-brick staircases to reach the terrace.",
        state: "verified"
      }
    ],
    address: "Route P1516, Tajda / Tifoultoute, Ouarzazate 45000, Morocco",
    coordinates: { lat: 30.9333, lng: -6.9833 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kasbah+Tifoultoute%2C+ouarzazate%2C+Morocco",
    // Multi-platform reviews holder (hidden on UI until populated)
    reviewsData: { sources: [], reviews: [] },
  }
];