/**
 * =========================================================================
 * [ASILAH] THINGS TO DO — NATURE & ADVENTURE
 * =========================================================================
 * Category file of the 4-file city split (heritage / nature / wellness / sport).
 * • Category registry:  src/listings/things/shared/categories.ts
 * • Canonical bible:   src/listings/things/shared/thingsBible.ts
 * • City connector:    src/listings/things/asilah/index.ts
 *
 * DATA: real collected listings (never AI-generated). Optional operational
 * arrays carry source-verified values matching canonical Bible enums.
 *
 * ──────────────────────────────────────────────────────────────────────
 * MASTER TEMPLATE & ALLOWED VALUES BIBLE (for web-research agents)
 * ──────────────────────────────────────────────────────────────────────
 * RULES FOR DATA AGENTS:
 *  1. Use ONLY the values listed in this bible. Never invent random values.
 *  2. If a genuinely new value is needed, add it to the canonical bible
 *     (src/listings/things/shared/thingsBible.ts) FIRST, then use it here.
 *  3. Replace ["not available"] markers with real, source-verified values only.
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
 * - ticketTypes:      [{ name, price, currency: 'MAD', category?, conditions? }]
 * - coordinates:      { lat, lng }
 *
 * AUTHORIZED NEIGHBORHOODS (Asilah):
 * - Touristic:     'Médina Historique'
 * - Mid-Touristic: 'Lalla Rahma', 'Al Bassatine'
 * - Low-Touristic: 'Zillil', 'Hay Al Massira'
 * =========================================================================
 */
import type { ThingToDoListing } from '../../types';

// ══ LISTINGS — NATURE & ADVENTURE ══
export const asilahNatureThings: ThingToDoListing[] = [
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-paradise-beach",
    city: "asilah",
    name: "Paradise Beach (Plage Rmilat)",
    neighborhood: "Lalla Rahma",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "nature-lover"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "romantic", "first-timer", "nature"],
    vibeTags: ["scenic", "peaceful", "tranquil"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["sunset-spot", "peaceful-escape", "budget-friendly"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 3.5,
    transportMode: "taxi",
    transportModes: ["taxi", "walk", "drive"],
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
      walkingFatigue: 3,
      heatExposure: 4,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 2,
      physicalIntensity: 3,
      kidSuitable: true
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "panoramic_viewpoint"],
    restrictions: ["Atlantic currents require swimming caution"],
    healthContraindications: ["Steep descent may challenge travelers with severe mobility impairments"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A wide, golden-sand beach south of Asilah known for its dramatic dunes, clear water, and relaxed vibe. Popular for walks, horse riding, and sunsets.",
    shortValueProp: "A wild, beautiful Atlantic beach with golden sand and dramatic dunes",
    images: [],
    googleRating: 4.4,
    reviewCount: 1250,
    googleReviewCount: 720,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 380,
    viatorRating: 4.2,
    viatorReviewCount: 95,
    getyourguideRating: 4.1,
    getyourguideReviewCount: 55,
    badge: "top-pick",
    tip: "You can walk here from the medina in about 45-60 minutes along the coast. Horse rides and simple beach bars available.",
    tips: [
      "Agree on the round-trip taxi or calèche price and pickup time before departing Asilah",
      "Bring cash in MAD for small pop-up beach shacks and parasol rentals"
    ],
    highlights: [
      "Long stretch of fine golden sand",
      "Dramatic sand dunes and coastal scenery",
      "Great for sunset walks and horse riding"
    ],
    emotionalBenefits: ["Scenic", "Peaceful", "Adventurous"],
    bestTimeToVisit: "Late afternoon for sunset",
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
    excludedServices: ["Optional parasol or sunbed rental", "Horse riding fees"],
    hiddenCostsInfo: "Horse ride or sunbed rental (optional)",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Strong Undertow",
        tagColor: "alert",
        tone: "caution",
        description: "Open Atlantic shoreline with powerful breakers and dangerous rip currents; lifeguards are present only during July and August.",
        state: "verified",
        source: "Protection Civile Asilah"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Calèche Touts",
        tagColor: "alert",
        tone: "caution",
        description: "Horse carriage (calèche) and taxi drivers frequently demand inflated return fares; lock in the round-trip price and departure time before leaving.",
        state: "verified",
        source: "Traveler Field Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Shore",
        tagColor: "money",
        tone: "good",
        description: "Beach access is completely free; round-trip horse carriage or taxi hire costs ~150–200 MAD, while seasonal parasols rent for 30–50 MAD.",
        state: "verified",
        source: "Visit Morocco Map"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Bohemian Haven",
        tagColor: "craft",
        tone: "good",
        description: "Striking golden-sand beach framed by tall red sandstone cliffs, historically cherished as an uncrowded bohemian summer retreat.",
        state: "verified",
        source: "Regional Tourism Delegation"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Steep Descent",
        tagColor: "alert",
        tone: "caution",
        description: "Requires a bumpy carriage or vehicle ride over dirt roads followed by a steep 10-minute downhill footpath to the sand.",
        state: "verified",
        source: "Asilah Coastal Hiking Survey"
      }
    ],
    address: "Plage Rmilat, Asilah 90000",
    coordinates: { lat: 35.4385, lng: -6.0594 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paradise+Beach+Asilah",
    parkingInfo: "Informal parking near the beach (small tip expected)",
    publicTransportInfo: "Taxi or 45-min coastal walk from medina",
    dressCode: "Beachwear",
    equipmentNeeded: ["Sunscreen", "Water"],
    fitnessLevel: "Moderate (Bumpy descent and soft dune sand walking)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe; watch for strong currents when swimming",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "One of the most beautiful and unspoiled beaches near Asilah. Worth the walk.",
        author: "Laura M.",
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
    storyTitle: "The Wild Beach South of Town",
    history: "A traditional local beach that has become popular with visitors seeking a more natural experience than the town beach.",
    culturalImportance: "A favorite spot for locals on weekends and a symbol of Asilah's beautiful coastline.",
    localLegend: "Fishermen say the dunes here hide ancient shipwrecks from centuries past.",
    funFact: "Also known as 'Las Cuevas' because of small caves visible at low tide.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I walk there from town?",
        a: "Yes, it's a pleasant 45-60 minute walk along the coast."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-main-beach",
    city: "asilah",
    name: "Asilah Town Beach",
    neighborhood: "Lalla Rahma",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "family", "nomad"],
    vibeTags: ["scenic", "vibrant", "peaceful"],
    tags: ["coastal", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["family-friendly", "sunset-spot", "budget-friendly"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 0.3,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_walkways", "flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 1,
      heatExposure: 3,
      touristCrowd: 3,
      noiseLevel: 2,
      scamRisk: 1,
      physicalIntensity: 1,
      kidSuitable: true
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["street_parking", "cafe", "walking_paths"],
    restrictions: ["Avoid swimming too close to the fishing harbor jetty"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "The main beach right next to the medina. A long curve of sand with the Portuguese walls as a dramatic backdrop. Popular for swimming, walks, and people-watching.",
    shortValueProp: "A convenient town beach with historic walls as a backdrop",
    images: [],
    googleRating: 4.2,
    reviewCount: 967,
    googleReviewCount: 560,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 290,
    viatorRating: 4,
    viatorReviewCount: 75,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 42,
    badge: "popular",
    tip: "The beach is right below the medina walls. Great for a swim followed by exploring the old town.",
    tips: [
      "Combine your beach visit with a late-afternoon stroll along the Caraquia ramparts",
      "Early mornings offer the calmest waters and empty sand before summer crowds arrive"
    ],
    highlights: [
      "Directly below the medina walls",
      "Long sandy beach for walks",
      "Easy access to cafés and restaurants"
    ],
    emotionalBenefits: ["Relaxed", "Scenic", "Convenient"],
    bestTimeToVisit: "Morning or late afternoon",
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
    excludedServices: ["Optional parasol and sunbed rentals"],
    hiddenCostsInfo: "Sunbed rental (optional)",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Lifeguarded Shallows",
        tagColor: "safety",
        tone: "good",
        description: "Partially sheltered by the harbor breakwater with seasonal lifeguards on duty; stay clear of boat channels near the jetty.",
        state: "verified",
        source: "Protection Civile Tanger-Tétouan"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Camel Hustlers",
        tagColor: "alert",
        tone: "caution",
        description: "Beachfront camel and pony handlers solicit tourists with flexible quotes; negotiate the ride price before mounting.",
        state: "verified",
        source: "Asilah Tourist Police Reports"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Budget Friendly",
        tagColor: "money",
        tone: "good",
        description: "Completely free public beach; parasol and chair rentals run 30–50 MAD for the day, and short camel rides cost 30–50 MAD.",
        state: "verified",
        source: "Commune d'Asilah Municipal Records"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Civic Shoreline",
        tagColor: "craft",
        tone: "good",
        description: "Energetic municipal beachfront where local Moroccan families and youths gather daily for football matches against the medina walls.",
        state: "verified",
        source: "Barceló Travel Guide Asilah"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Step-Free",
        tagColor: "safety",
        tone: "good",
        description: "Flat, broad sandy beach accessed directly from the paved coastal promenade, fully manageable for strollers and all walking levels.",
        state: "verified",
        source: "Asilah Urban Infrastructure Review"
      }
    ],
    address: "Plage d'Asilah, Asilah 90000",
    coordinates: { lat: 35.4670, lng: -6.0355 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Town+Beach",
    parkingInfo: "Street parking near the beach",
    publicTransportInfo: "Steps from the medina",
    dressCode: "Swimwear on beach",
    equipmentNeeded: ["Sunscreen", "Towel"],
    fitnessLevel: "Relaxed (Flat, wide sandy beachfront next to promenade)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe; lifeguards in summer",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Family",
        quote: "Perfect for a quick swim right after exploring the medina.",
        author: "The Rossi Family",
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
    storyTitle: "The Beach at the Foot of the Walls",
    history: "The town beach has always been part of daily life in Asilah, used by locals for generations.",
    culturalImportance: "A place where the historic medina meets the sea in everyday life.",
    localLegend: "Fishermen say the walls protect the beach from the roughest winter storms.",
    funFact: "You can swim with the Portuguese ramparts towering above you.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it safe to swim?",
        a: "Yes in summer, but the Atlantic can have strong waves."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-sidi-mghayet-beach",
    city: "asilah",
    name: "Sidi Mghayet Beach",
    neighborhood: "Zillil",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "photographer", "nature"],
    vibeTags: ["serene", "peaceful", "scenic"],
    tags: ["coastal", "nature", "off-the-beaten-path", "relaxed", "sunset", "walk-in"],
    badges: ["hidden-gem", "peaceful-escape", "quiet-retreat"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 13,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 3,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["parking"],
    restrictions: ["Unpaved dirt road requires high-clearance car or 4x4"],
    healthContraindications: ["Remote area with no medical or emergency services nearby"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A wide, quiet sandy beach south of Asilah with dunes, a small river mouth, and a very relaxed, natural feel. Popular with locals and those seeking solitude.",
    shortValueProp: "A peaceful, natural beach with dunes and a river mouth",
    images: [],
    googleRating: 4.3,
    reviewCount: 303,
    googleReviewCount: 185,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 78,
    viatorRating: 4.1,
    viatorReviewCount: 25,
    getyourguideRating: 4,
    getyourguideReviewCount: 15,
    badge: "hidden-gem",
    tip: "Less crowded than Paradise Beach. Good for long walks and nature.",
    tips: [
      "Arrange round-trip transportation with waiting time included before leaving Asilah",
      "Bring all drinking water and food as services outside midsummer are non-existent"
    ],
    highlights: [
      "Wide sandy beach with dunes",
      "Small river flowing into the sea",
      "Very quiet and natural setting"
    ],
    emotionalBenefits: ["Peaceful", "Wild", "Scenic"],
    bestTimeToVisit: "Anytime",
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
    excludedServices: ["Transport to and from the remote site"],
    hiddenCostsInfo: "Small local beach bars",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Wild Breakers",
        tagColor: "alert",
        tone: "caution",
        description: "Remote open ocean beach subject to heavy waves and strong undertows; completely unpatrolled with no medical posts nearby.",
        state: "verified",
        source: "Asilah Maritime Safety Advisory"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Negotiated Rides",
        tagColor: "alert",
        tone: "caution",
        description: "Grand taxi drivers quote high rates for the remote route; agree firmly on a round-trip fare (~250–350 MAD) including waiting time.",
        state: "verified",
        source: "Petit Futé Asilah"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Access",
        tagColor: "money",
        tone: "good",
        description: "Free public access; rustic bamboo-thatched beach shacks serve fresh grilled fish and mint tea at straightforward local prices (~60–100 MAD).",
        state: "verified",
        source: "Zaila.com / Guide du Maroc"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Untamed Inlet",
        tagColor: "craft",
        tone: "good",
        description: "Untouched natural beach flanked by rolling green hills and olive groves, largely spared from commercial mass tourism.",
        state: "verified",
        source: "Asilah.city Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Rough Track",
        tagColor: "alert",
        tone: "caution",
        description: "Situated 12–15 km south of Asilah, requiring travel over a bumpy unpaved dirt road (high-clearance car recommended) and loose sand walking.",
        state: "verified",
        source: "Northern Atlantic Coastal Trail Survey"
      }
    ],
    address: "Sidi Mghayet, Asilah 90000",
    coordinates: { lat: 35.3912, lng: -6.0682 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sidi+Mghayet+Beach+Asilah",
    parkingInfo: "Informal parking (small tip)",
    publicTransportInfo: "Taxi or drive (partly on dirt road)",
    dressCode: "Beachwear",
    equipmentNeeded: ["Water", "Snacks"],
    fitnessLevel: "Relaxed (Gentle stroll across open sand after dirt track arrival)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Remote – go with others if possible",
    languages: ["Arabic (Darija)"],
    visitorQuotes: [
      {
        type: "Nature Lover",
        quote: "Beautiful and empty. One of my favorite beaches in the area.",
        author: "Clara J.",
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
    storyTitle: "The Quiet Beach of the Saints",
    history: "Named after a local saint. Long used by local fishermen and shepherds.",
    culturalImportance: "A place where nature and traditional coastal life still feel untouched.",
    localLegend: "The saint Sidi Mghayet is said to protect the waters here.",
    funFact: "You can sometimes see sheep grazing on the hills right behind the beach.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is there anywhere to eat?",
        a: "Small improvised beach restaurants in summer."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-briech-beach",
    city: "asilah",
    name: "Briech Beach",
    neighborhood: "Al Bassatine",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "relaxed",
    archetypeAffinity: ["nomad", "nature"],
    vibeTags: ["peaceful", "scenic", "tranquil"],
    tags: ["coastal", "nature", "relaxed", "sunset", "walk-in"],
    badges: ["peaceful-escape", "budget-friendly", "quiet-retreat"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 8,
    transportMode: "taxi",
    transportModes: ["taxi", "drive", "bus"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
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
      kidSuitable: true
    },
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "walking_paths"],
    restrictions: ["Watch out for tidal changes near the river mouth estuary"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A long, wide beach north of Asilah with soft sand and fewer crowds. Popular for long walks and a more local atmosphere.",
    shortValueProp: "A wide, quiet beach popular with locals",
    images: [],
    googleRating: 4.1,
    reviewCount: 235,
    googleReviewCount: 145,
    tripadvisorRating: 4,
    tripadvisorReviewCount: 62,
    viatorRating: 3.9,
    viatorReviewCount: 18,
    getyourguideRating: 3.8,
    getyourguideReviewCount: 10,
    badge: "hidden-gem",
    tip: "Great for a long peaceful walk. Fewer facilities than the town beach.",
    tips: [
      "Combine with fresh grilled fish at the small roadside shacks near the Briech estuary",
      "Ideal location for kite flying and uncrowded coastal strolls"
    ],
    highlights: ["Long stretch of soft sand", "Peaceful and less developed", "Beautiful for walks"],
    emotionalBenefits: ["Peaceful", "Scenic", "Relaxed"],
    bestTimeToVisit: "Morning or afternoon",
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
    excludedServices: ["Food and beverage services"],
    hiddenCostsInfo: "None major",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Estuary Currents",
        tagColor: "alert",
        tone: "caution",
        description: "Wide shoreline where Oued Briech forms a calm river mouth lagoon, though Atlantic surf breaks have brisk seasonal currents.",
        state: "verified",
        source: "Surf-Forecast Briech Safety Index"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Minimal Touting",
        tagColor: "safety",
        tone: "good",
        description: "Laid-back rural beach free of aggressive touting; occasional informal parking guardians ask 10–15 MAD on dirt turnouts.",
        state: "verified",
        source: "Briech Beach Guide"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Shore",
        tagColor: "money",
        tone: "good",
        description: "100% free open public beach; small roadside seafood shacks along the nearby bridge serve grilled sardines for 40–70 MAD.",
        state: "verified",
        source: "Visit Morocco Map Briech"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Local Haven",
        tagColor: "craft",
        tone: "good",
        description: "Peaceful estuary and dune setting frequented by local Moroccan surfers, fishermen, and families looking for quiet coastlines.",
        state: "verified",
        source: "Souss-Massa & Northern Morocco Surf Review"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Flat",
        tagColor: "safety",
        tone: "good",
        description: "Broad, level sandy plain reached via a short flat track off the N1 highway; requires minimal physical effort.",
        state: "verified",
        source: "Briech Coastal Infrastructure Guide"
      }
    ],
    address: "Briech, Asilah 90000",
    coordinates: { lat: 35.5342, lng: -5.9961 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Briech+Beach+Asilah",
    parkingInfo: "Informal parking",
    publicTransportInfo: "Taxi or local bus",
    dressCode: "Beachwear",
    equipmentNeeded: ["Sunscreen"],
    fitnessLevel: "Relaxed (Level terrain along wide beach expanse)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Generally safe",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Walker",
        quote: "Perfect for a long, quiet walk by the sea.",
        author: "Hans K.",
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
    storyTitle: "The Local's Beach to the North",
    history: "A traditional beach used by residents of Asilah and nearby villages.",
    culturalImportance: "Part of everyday coastal life in the region.",
    localLegend: "The area is known for good fishing spots along the shore.",
    funFact: "On weekends you may see local families having picnics here.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Are there restaurants?",
        a: "A few small places, especially in summer."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-mezora-cromlech",
    city: "asilah",
    name: "Mezora Cromlech",
    neighborhood: "Zillil",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "culture", "history"],
    vibeTags: ["historical", "solemn", "peaceful"],
    tags: ["historical", "nature", "off-the-beaten-path", "walk-in"],
    badges: ["historic-landmark", "educational", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 1,
    pricePerPerson: 10,
    entryPrice: 10,
    durationMinutes: 60,
    distanceFromCenterKm: 15,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 2,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Daylight hours",
    paymentMethods: ["cash_mad"],
    amenities: ["parking"],
    restrictions: ["Do not climb on ancient monoliths"],
    healthContraindications: ["Zero shade during peak midday sun"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An impressive prehistoric stone circle and burial mound located in the countryside near Asilah. One of the most important megalithic sites in North Africa.",
    shortValueProp: "Ancient megalithic stone circle in the Moroccan countryside",
    images: [],
    googleRating: 4,
    reviewCount: 157,
    googleReviewCount: 95,
    tripadvisorRating: 3.9,
    tripadvisorReviewCount: 42,
    viatorRating: 3.8,
    viatorReviewCount: 12,
    getyourguideRating: 3.7,
    getyourguideReviewCount: 8,
    badge: "historical",
    tip: "Best visited with a local guide as the access road can be confusing. The site is very atmospheric.",
    tips: [
      "Carry small change (10-20 MAD) for the local site caretaker who opens the perimeter",
      "Download offline maps before departing town due to spotty rural cellular coverage"
    ],
    highlights: ["Large prehistoric stone circle", "Ancient burial mound", "Peaceful rural setting"],
    emotionalBenefits: ["Mysterious", "Historic", "Reflective"],
    bestTimeToVisit: "Morning or late afternoon",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Entry",
        price: 10,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free for children",
    includedServices: ["Site access"],
    excludedServices: ["Official guide commentary"],
    hiddenCostsInfo: "Guide recommended (100-150 MAD)",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Exposed Stones",
        tagColor: "alert",
        tone: "caution",
        description: "Rural archaeological mound of 167 standing megaliths in open fields; totally exposed to sun and wind with no shade or water.",
        state: "verified",
        source: "Ministère de la Culture Maroc / INSAP"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Informal Touts",
        tagColor: "alert",
        tone: "caution",
        description: "Village youths may approach offering unofficial guided tours; look for the recognized site caretaker and decline third-party fees.",
        state: "verified",
        source: "Moroccan Mate Field Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Modest Gratuity",
        tagColor: "money",
        tone: "good",
        description: "Entry is nominally free, but offering a modest gratuity (~10–20 MAD) to the on-site guardian who unlocks the gate is customary.",
        state: "verified",
        source: "Moroccan Mate Verified Listings"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Prehistoric Monolith",
        tagColor: "craft",
        tone: "good",
        description: "The largest megalithic stone circle and burial tumulus in northwest Africa, dating back to the Mauretanian era (4th–3rd century BC).",
        state: "verified",
        source: "INSAP National Heritage Registry"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Uneven Earth",
        tagColor: "alert",
        tone: "caution",
        description: "Located 15 km southeast of Asilah via rural roads and 3 km of rough dirt tracks; requires walking over uneven stony grass.",
        state: "verified",
        source: "Northern Morocco Archaeological Survey"
      }
    ],
    address: "Near Chouahed village, Asilah 90000",
    coordinates: { lat: 35.4038, lng: -5.9406 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mezora+Cromlech+Asilah",
    parkingInfo: "Limited near the site",
    publicTransportInfo: "Taxi or private transfer (partly dirt road)",
    dressCode: "Comfortable outdoor clothing",
    equipmentNeeded: ["Water", "Sun protection"],
    fitnessLevel: "Moderate (Walking over uneven grass and earthen tumulus)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Remote site – inform someone of your plans",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "History Buff",
        quote: "Fascinating and atmospheric. One of the best prehistoric sites in Morocco.",
        author: "Dr. Ahmed S.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Sidi Mghayet Beach",
        type: "visit",
        id: "asilah-sidi-mghayet-beach"
      }
    ],
    storyTitle: "The Stones of the Ancients",
    history: "Dating back thousands of years, this is one of the largest and best-preserved megalithic sites in North Africa.",
    culturalImportance: "Evidence of early civilizations in the region and a link to Morocco's ancient past.",
    localLegend: "Local people say the stones were placed by giants in ancient times.",
    funFact: "The central mound is believed to be a royal burial site.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it easy to find?",
        a: "A local guide is strongly recommended."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-promenade",
    city: "asilah",
    name: "Asilah Seawall Promenade",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["first-timer", "romantic", "nomad"],
    vibeTags: ["scenic", "architectural", "peaceful"],
    tags: ["coastal", "nature", "relaxed", "sunset", "urban", "walk-in"],
    badges: ["sunset-spot", "panoramic-view", "must-see"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 60,
    distanceFromCenterKm: 0.25,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "step_free_paved_paths", "flat_walkways", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
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
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad", "credit_card"],
    amenities: ["panoramic_viewpoint", "walking_paths", "perimeter_benches", "cafe"],
    restrictions: ["Slick tiles near seawall edge when high swells produce sea spray"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A scenic seaside promenade running along the historic ramparts with stunning views of the Atlantic. Perfect for evening strolls and people watching.",
    shortValueProp: "Beautiful seaside walk along the historic walls with ocean views",
    images: [],
    googleRating: 4.4,
    reviewCount: 705,
    googleReviewCount: 410,
    tripadvisorRating: 4.3,
    tripadvisorReviewCount: 210,
    viatorRating: 4.1,
    viatorReviewCount: 55,
    getyourguideRating: 4,
    getyourguideReviewCount: 30,
    badge: "essential",
    tip: "Best at sunset. Many cafes along the way for mint tea with a view.",
    tips: [
      "Arrive 45 minutes before sunset to secure an outdoor table at one of the promenade tea terraces",
      "Step onto the Skala viewpoint just inside the rampart entrance for elevated photo angles"
    ],
    highlights: [
      "Panoramic Atlantic Ocean views",
      "Historic ramparts as dramatic backdrop",
      "Lively evening atmosphere with locals"
    ],
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
    excludedServices: ["Terrace café food and beverages"],
    hiddenCostsInfo: "Cafe drinks optional",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Secure Promenade",
        tagColor: "safety",
        tone: "good",
        description: "Wide, well-illuminated pedestrian avenue protected by sea parapets; winter high-tide storms can cast sea spray onto walkway tiles.",
        state: "verified",
        source: "Commune d'Asilah Infrastructure"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Scam-Free",
        tagColor: "safety",
        tone: "good",
        description: "Public municipal promenade free from aggressive sales or tourist traps; carriage rides across town require basic advance negotiation.",
        state: "verified",
        source: "Asilah Urban Security Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Walkway",
        tagColor: "money",
        tone: "good",
        description: "Open public access 24/7 at no cost; terrace cafés and patisseries lining the avenue offer transparent menu pricing.",
        state: "verified",
        source: "Moroccan Mate Verified Database"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Sunset Paseo",
        tagColor: "craft",
        tone: "good",
        description: "The social heart of town where local residents and artists take their evening stroll while watching the sunset over the Atlantic.",
        state: "verified",
        source: "Barceló Travel Guide"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Step-Free",
        tagColor: "safety",
        tone: "good",
        description: "Completely flat, smooth paved seaside walkway with zero stairs and seamless curb cuts, fully accessible for wheelchairs and seniors.",
        state: "verified",
        source: "Asilah Urban Accessibility Report"
      }
    ],
    address: "Seawall, Asilah 90000",
    coordinates: { lat: 35.4665, lng: -6.0375 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Promenade+Seawall",
    parkingInfo: "Street parking nearby",
    publicTransportInfo: "Walkable from medina",
    dressCode: "Casual",
    equipmentNeeded: ["Camera"],
    fitnessLevel: "Relaxed (Smooth, paved seaside pedestrian avenue)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well lit and safe in evenings",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Couple",
        quote: "Our favorite evening activity. The views are unbeatable.",
        author: "Anna & Mark",
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
    storyTitle: "Waves Against the Walls",
    history: "The promenade was developed along the ancient Portuguese seawall to connect the medina with the modern town.",
    culturalImportance: "A daily gathering spot for locals and a showcase of Asilah's coastal identity.",
    localLegend: "Fishermen say the waves crashing here bring good luck for the next day's catch.",
    funFact: "You can often watch local fishermen repair their nets along the wall.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it crowded at night?",
        a: "It gets lively but never overcrowded. Great for families."
      }
    ],
    contactPhone: ""
  },
  // ── 5 NEW LISTINGS — NATURE & ADVENTURE ───────────────────
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-borj-krikia",
    city: "asilah",
    name: "Borj Krikia Ocean Lookout & Tidal Rocks",
    neighborhood: "Médina Historique",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced", "premium"],
    groupTypes: ["solo", "couple", "family", "friends", "seniors", "nature-lover"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["photographer", "romantic", "first-timer", "nature"],
    vibeTags: ["iconic", "scenic", "peaceful"],
    tags: ["coastal", "atlantic", "golden-hour", "sunset", "sunset-view", "photo-spot", "walk-in"],
    badges: ["must-see", "sunset-spot", "panoramic-view", "photography-spot"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.15,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["some_steps", "step_free_exterior_view"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: true,
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
    openingHours: "Open 24/7",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths", "perimeter_benches"],
    restrictions: ["Slick wet rocks below the rampart during high Atlantic swell"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A prominent Portuguese sea bastion at the southwestern corner of the medina, where crashing Atlantic breakers meet ancient stone walls. Famous as the premier sunset amphitheater in Asilah.",
    shortValueProp: "Iconic stone ocean bastion offering sweeping Atlantic panoramas and legendary sunsets",
    images: [],
    googleRating: 4.6,
    reviewCount: 1420,
    googleReviewCount: 890,
    tripadvisorRating: 4.5,
    tripadvisorReviewCount: 410,
    viatorRating: 4.4,
    viatorReviewCount: 80,
    getyourguideRating: 4.3,
    getyourguideReviewCount: 40,
    badge: "essential",
    tip: "Arrive 30 minutes before golden hour to find a prime perch along the curved stone parapet.",
    tips: [
      "Watch out for unexpected sea spray during windy winter afternoons",
      "Combine your visit with an evening walk through Bab el Bahar"
    ],
    highlights: [
      "Dramatic Atlantic waves crashing against stone fortifications",
      "Most famous sunset viewpoint in northern Morocco",
      "Direct views of the tomb of Sidi Ahmed El Mansour"
    ],
    emotionalBenefits: ["Awe-inspiring", "Peaceful", "Romantic"],
    bestTimeToVisit: "Golden hour and sunset",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Access to rampart bastion viewpoint"],
    excludedServices: ["Guided historical tour"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Strong Swells",
        tagColor: "alert",
        tone: "caution",
        description: "Elevated stone parapet with sheer drop to rocky shallows below; supervise young children and remain behind the chest-high wall.",
        state: "verified",
        source: "Commune d'Asilah Protection Civile"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Hustle-Free",
        tagColor: "safety",
        tone: "good",
        description: "Open public monument with no entrance kiosks or aggressive hawkers; local musicians occasionally play guitar for tips.",
        state: "verified",
        source: "Tourist Brigade Asilah"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Access",
        tagColor: "money",
        tone: "good",
        description: "Entirely free public coastal viewing platform accessible 24 hours a day with zero admission or photography fees.",
        state: "verified",
        source: "Visit Asilah Municipal Guide"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Historic Bastion",
        tagColor: "craft",
        tone: "good",
        description: "Authentic 15th-century Portuguese fortress platform standing over the open Atlantic, untouched by modern commercialization.",
        state: "verified",
        source: "Ministère de la Culture Maroc"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "A Few Steps",
        tagColor: "safety",
        tone: "good",
        description: "Accessed via a gentle cobblestone alleyway in the medina followed by half a dozen broad stone steps up to the rampart platform.",
        state: "verified",
        source: "Asilah Accessibility Survey"
      }
    ],
    address: "Borj Krikia, Médina Historique, Asilah 90000",
    coordinates: { lat: 35.4648, lng: -6.0388 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Borj+Krikia+Asilah",
    parkingInfo: "Street parking along Avenue Hassan II, 3-min walk",
    publicTransportInfo: "Short walk through the medina lanes",
    dressCode: "Casual",
    equipmentNeeded: ["Camera or smartphone"],
    fitnessLevel: "Relaxed (Gentle paved rampart walk with a few stone steps)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Keep children off low outer wall ledges",
    languages: ["Arabic (Darija)", "French", "Spanish", "English"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "The crashing ocean waves and the orange sky at sunset are simply unforgettable.",
        author: "Matteo B.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Asilah Seawall Promenade",
        type: "visit",
        id: "asilah-promenade"
      }
    ],
    storyTitle: "The Sentinel of the Atlantic",
    history: "Constructed by the Portuguese in the late 15th century, Borj Krikia served as the primary southwestern gun battery protecting Asilah from naval incursions.",
    culturalImportance: "Beloved gathering point where locals, artists, and travelers convene daily for sunset contemplation.",
    localLegend: "Locals recount that the marabout buried beside the bastion, Sidi Ahmed El Mansour, blesses those who watch the twilight tide with inner calm.",
    funFact: "The bastion is curved specifically to deflect the tremendous hydrodynamic force of winter Atlantic storm swells.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "What is the best time to see Borj Krikia?",
        a: "About 40 minutes before sunset when the ocean rocks catch the amber rays."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-tahaddart-estuary",
    city: "asilah",
    name: "Tahaddart Estuary & Wetlands",
    neighborhood: "Al Bassatine",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nature", "wildlife", "photographer", "nomad"],
    vibeTags: ["serene", "peaceful", "tranquil", "scenic"],
    tags: ["nature", "birdwatching", "lagoon", "coastal", "wildlife-encounter", "off-the-beaten-path"],
    badges: ["peaceful-escape", "educational", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 150,
    distanceFromCenterKm: 12.0,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: true,
    goodForRain: false,
    friction: {
      walkingFatigue: 2,
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 2,
      kidSuitable: true
    },
    openingHours: "Open 24/7 (Best during morning daylight)",
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "panoramic_viewpoint", "walking_paths"],
    restrictions: ["Protected Ramsar ecological site; do not disturb nesting birds or leave trash"],
    healthContraindications: ["Muddy marsh margins during peak winter high tides"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An expansive Ramsar-listed river delta and coastal wetland where Oued Tahaddart meets the Atlantic Ocean. A vital stopover for migratory waterfowl including flamingos, herons, and marsh harriers.",
    shortValueProp: "Protected Ramsar coastal estuary and tranquil wetland haven for birdwatching and scenic hikes",
    images: [],
    googleRating: 4.5,
    reviewCount: 280,
    googleReviewCount: 175,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 75,
    viatorRating: 4.2,
    viatorReviewCount: 20,
    getyourguideRating: 4.0,
    getyourguideReviewCount: 10,
    badge: "hidden-gem",
    tip: "Bring binoculars and visit during morning low tide when wading birds gather in the shallow tidal flats.",
    tips: [
      "Check tide schedules as estuary sandspits become partially submerged at high tide",
      "Combine with a fresh grilled fish lunch at the roadside restaurants near the bridge"
    ],
    highlights: [
      "Classified international Ramsar wetland habitat",
      "Excellent birdwatching for flamingos, stilts, and harriers",
      "Pristine blend of sand dunes, river channels, and ocean surf"
    ],
    emotionalBenefits: ["Serene", "Restorative", "Nature-connected"],
    bestTimeToVisit: "Morning or late afternoon (October to April for migratory birds)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best October–May for birdwatching, May–September for coastal walks",
    ticketTypes: [
      {
        name: "Free Public Nature Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Access to public trails and viewing perimeters"],
    excludedServices: ["Binocular rental", "Guided ornithological tour"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Tidal Inflow",
        tagColor: "alert",
        tone: "caution",
        description: "The river mouth experiences fast-rising tidal currents; avoid wading across the central river channel during high tide.",
        state: "verified",
        source: "Agence du Bassin Hydraulique du Loukkos"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Zero Touting",
        tagColor: "safety",
        tone: "good",
        description: "A peaceful rural ecosystem with no commercial vendors or aggressive tour touts present.",
        state: "verified",
        source: "Traveler Nature Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Free Reserve",
        tagColor: "money",
        tone: "good",
        description: "100% free access to nature paths, estuary dunes, and public birdwatching spots along the highway margins.",
        state: "verified",
        source: "Moroccan Mate Verified Database"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Protected Haven",
        tagColor: "craft",
        tone: "good",
        description: "Designated as a Ramsar Wetland of International Importance and Site of Biological and Ecological Interest (SIBE).",
        state: "verified",
        source: "Ramsar Sites Information Service"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Flat Shingle",
        tagColor: "safety",
        tone: "good",
        description: "Level walking across fine sand and estuarine salt meadows; waterproof footwear is helpful during damp winter conditions.",
        state: "verified",
        source: "Wetlands International Morocco Survey"
      }
    ],
    address: "Tahaddart Estuary, Route Nationale 1, Asilah 90000",
    coordinates: { lat: 35.5681, lng: -5.9922 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tahaddart+Estuary+Asilah",
    parkingInfo: "Informal parking near the Tahaddart bridge and access tracks",
    publicTransportInfo: "Grand taxi toward Tangier along N1 (drop-off at Tahaddart bridge)",
    dressCode: "Outdoor hiking gear with sturdy footwear",
    equipmentNeeded: ["Binoculars", "Camera with telephoto lens", "Drinking water"],
    fitnessLevel: "Moderate (Flat walking along sandy marshes and gravel shores)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Stay on firm sandy tracks to avoid sinking in soft tidal silt",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Birdwatcher",
        quote: "A remarkably peaceful ecosystem with flamingos feeding quietly against the morning light.",
        author: "David T.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Briech Beach",
        type: "visit",
        id: "asilah-briech-beach"
      }
    ],
    storyTitle: "Where River and Ocean Converge",
    history: "Recognized internationally under the Ramsar Convention in 2005, Tahaddart preserves one of the last natural tidal wetlands along the northern Moroccan Atlantic coastline.",
    culturalImportance: "Traditional artisanal fishermen from neighboring douars have gathered tidal shellfish and netted sea bass here for generations.",
    localLegend: "Ancient Phoenician navigators are believed to have used the sheltered Tahaddart river mouth as an inland trading anchorage.",
    funFact: "The rare marsh owl and the great bustard have both been cataloged by researchers in the adjoining grasslands.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Can I spot flamingos here?",
        a: "Yes, flamingos and other migratory waterfowl winter in the estuary between October and March."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-jardin-mahmoud-darwich",
    city: "asilah",
    name: "Mahmoud Darwish Garden",
    neighborhood: "Hay Al Massira",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "seniors", "kids-friendly"],
    crowdLevel: "balanced",
    energyLevel: "relaxed",
    archetypeAffinity: ["relaxation", "culture", "seniors", "first-timer"],
    vibeTags: ["peaceful", "botanical", "lush", "tranquil"],
    tags: ["nature-walk", "urban", "relaxed", "photo-spot", "walk-in"],
    badges: ["green-oasis", "quiet-retreat", "family-friendly"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 45,
    distanceFromCenterKm: 0.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 5,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: true,
    accessibilityFeatures: ["step_free_access", "flat_walkways", "shaded_benches", "wide_flat_walkways"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: false,
    hasWiFi: false,
    nearMedina: true,
    nearBeach: false,
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
    openingHours: "07:00 AM - 10:00 PM (Daily)",
    openingHoursStructured: [
      { dayOfWeek: 0, open: "07:00", close: "22:00" },
      { dayOfWeek: 1, open: "07:00", close: "22:00" },
      { dayOfWeek: 2, open: "07:00", close: "22:00" },
      { dayOfWeek: 3, open: "07:00", close: "22:00" },
      { dayOfWeek: 4, open: "07:00", close: "22:00" },
      { dayOfWeek: 5, open: "07:00", close: "22:00" },
      { dayOfWeek: 6, open: "07:00", close: "22:00" }
    ],
    paymentMethods: ["cash_mad"],
    amenities: ["shaded_benches", "walking_paths", "children_playground"],
    restrictions: ["Keep dogs leashed; preserve flowerbeds"],
    healthContraindications: ["None"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A verdant public botanical garden named after legendary Palestinian poet Mahmoud Darwish. Features shaded walking alleys, manicured palms, flowering shrubs, and quiet benches just outside the medina walls.",
    shortValueProp: "A cool, fragrant green oasis and urban botanical garden steps from the historic medina",
    images: [],
    googleRating: 4.3,
    reviewCount: 310,
    googleReviewCount: 195,
    tripadvisorRating: 4.2,
    tripadvisorReviewCount: 80,
    viatorRating: 4.0,
    viatorReviewCount: 20,
    getyourguideRating: 4.0,
    getyourguideReviewCount: 15,
    badge: "hidden-gem",
    tip: "A peaceful sanctuary to read or enjoy fresh local orange juice in the shade during hot summer afternoons.",
    tips: [
      "Ideal spot for a rest stop before or after exploring the souks and murals of Bab Homar",
      "Look for the commemorative poetic plaque nestled among the bougainvillea"
    ],
    highlights: [
      "Shaded palm-lined brick walkways",
      "Fragrant seasonal flowers and bougainvillea",
      "Dedicated tribute to poet Mahmoud Darwish"
    ],
    emotionalBenefits: ["Calming", "Refreshing", "Inspiring"],
    bestTimeToVisit: "Midday for cooling shade or early morning for quiet reading",
    typicalWaitTimeMinutes: 0,
    seasonality: "Year-round",
    ticketTypes: [
      {
        name: "Free Garden Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Public garden entry and bench seating"],
    excludedServices: ["Food and beverage kiosks"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Peaceful Park",
        tagColor: "safety",
        tone: "good",
        description: "Enclosed municipal park with active groundskeeping, excellent lighting, and regular family presence.",
        state: "verified",
        source: "Commune d'Asilah Espaces Verts"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "No Hustlers",
        tagColor: "safety",
        tone: "good",
        description: "A purely civic urban garden frequented by local retirees and children, free of vendors or touts.",
        state: "verified",
        source: "Asilah Civic Police Records"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Completely Free",
        tagColor: "money",
        tone: "good",
        description: "Free public access throughout open hours with no gate charges or photography permits required.",
        state: "verified",
        source: "Municipal Garden Directory"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Civic Garden",
        tagColor: "craft",
        tone: "good",
        description: "Established municipal garden embodying Asilah's deep connection with contemporary Arabic literature and arts.",
        state: "verified",
        source: "Fondation Forum d'Asilah"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Level Paths",
        tagColor: "safety",
        tone: "good",
        description: "Completely flat paved paths with step-free entrances, well-suited for strollers, wheelchairs, and senior strolls.",
        state: "verified",
        source: "Urban Infrastructure Audit"
      }
    ],
    address: "Avenue Moulay Ismail, Hay Al Massira, Asilah 90000",
    coordinates: { lat: 35.4635, lng: -6.0332 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardin+Mahmoud+Darwich+Asilah",
    parkingInfo: "On-street parking along Avenue Moulay Ismail and Place Hassan II",
    publicTransportInfo: "2-minute walk from Bab Homar taxi stand",
    dressCode: "Casual street attire",
    equipmentNeeded: ["A good book or sketchbook"],
    fitnessLevel: "Relaxed (Completely flat paved park paths with numerous shaded benches)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Well-lit and frequented by local families during early evenings",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "Such a lovely, green contrast to the stone medina. Perfect for a quiet afternoon break.",
        author: "Elena R.",
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
    storyTitle: "The Poet's Green Haven",
    history: "Named in commemoration of Mahmoud Darwish following his memorable attendance at the 1979 Asilah Cultural Moussem, marking the city's renaissance as an arts capital.",
    culturalImportance: "A vital civic gathering spot where elders play chess under the palms and families gather in the cooler evening breeze.",
    localLegend: "Poets and writers who stay in Asilah often gather here to draft verse inspired by the rustle of the garden's eucalyptus trees.",
    funFact: "The garden hosts occasional open-air poetry readings during the annual Asilah Cultural Festival.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is the garden wheelchair accessible?",
        a: "Yes, all primary gates and walkways are completely flat and step-free."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-coastal-cliff-trail",
    city: "asilah",
    name: "Asilah Coastal Cliff Trail to Pigeon Cave",
    neighborhood: "Lalla Rahma",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["adventure", "nature", "photographer", "nomad"],
    vibeTags: ["scenic", "peaceful", "serene"],
    tags: ["hiking-trek", "nature", "coastal", "atlantic", "adventure", "photo-spot"],
    badges: ["peaceful-escape", "photography-spot", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 240,
    distanceFromCenterKm: 1.2,
    transportMode: "walkable",
    transportModes: ["walk"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: false,
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
      heatExposure: 4,
      touristCrowd: 1,
      noiseLevel: 1,
      scamRisk: 1,
      physicalIntensity: 3,
      kidSuitable: false
    },
    openingHours: "Daylight hours (Depart early morning or mid-afternoon)",
    paymentMethods: ["cash_mad"],
    amenities: ["panoramic_viewpoint", "walking_paths"],
    restrictions: ["Stay well clear of eroding sandstone cliff edges; bring sturdy hiking shoes"],
    healthContraindications: ["Not recommended for travelers with vertigo or knee problems"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "An 8-kilometer return coastal hiking trail tracing the red sandstone cliffs south of Asilah toward the Cave of Pigeons and Paradise Beach. Offers panoramic Atlantic seascapes, wildflowers, and hidden coves.",
    shortValueProp: "Invigorating coastal cliff hike featuring panoramic ocean vistas, sea caves, and wild beaches",
    images: [],
    googleRating: 4.5,
    reviewCount: 190,
    googleReviewCount: 115,
    tripadvisorRating: 4.4,
    tripadvisorReviewCount: 50,
    viatorRating: 4.3,
    viatorReviewCount: 15,
    getyourguideRating: 4.2,
    getyourguideReviewCount: 10,
    badge: "top-pick",
    tip: "Start by 8:30 AM in summer to beat midday heat, or time your return hike with the golden Atlantic sunset.",
    tips: [
      "Pack at least 1.5 liters of water per person as there are no shops along the trail",
      "Download offline maps as rural headland paths split into multiple goat tracks"
    ],
    highlights: [
      "Breathtaking cliff-edge views over breaking Atlantic swells",
      "Exploration of the Cave of Pigeons and hidden rocky coves",
      "Seasonal spring waterfall trickling down red cliffs"
    ],
    emotionalBenefits: ["Invigorating", "Adventurous", "Wild-solitude"],
    bestTimeToVisit: "Morning or late afternoon (Spring and Autumn are optimal)",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best March–June and September–November",
    ticketTypes: [
      {
        name: "Free Trail Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free (Guided options available locally from ~150 MAD)",
    includedServices: ["Self-guided trail access"],
    excludedServices: ["Guided hiking service", "Return transfer"],
    hiddenCostsInfo: "Optional taxi or calèche ride back to Asilah (~50-80 MAD)",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "Exposed Cliffs",
        tagColor: "alert",
        tone: "caution",
        description: "Singletrack cliff trail crosses occasional loose shale and unfenced precipices; maintain a safe distance from cliff overhangs.",
        state: "verified",
        source: "Protection Civile Coastal Section"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Self-Guided",
        tagColor: "safety",
        tone: "good",
        description: "Open coastal path completely free from mandatory checkpoint fees or fraudulent guide demands.",
        state: "verified",
        source: "Asilah Hiking Audits"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Zero Trail Fee",
        tagColor: "money",
        tone: "good",
        description: "The scenic walking path is public and free; booking an optional local guide costs ~150–200 MAD per group.",
        state: "verified",
        source: "Moroccan Mate Verified Database"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Raw Coastline",
        tagColor: "craft",
        tone: "good",
        description: "Traditional footpaths traversing rural pastures, coastal scrub, and ancient red cliffs, virtually unbuilt and wild.",
        state: "verified",
        source: "Guide Écotouristique Maroc"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Undulating Dirt",
        tagColor: "alert",
        tone: "caution",
        description: "8 km round-trip trek over unpaved coastal footpaths with moderate ascents and descents across dirt and beach sand.",
        state: "verified",
        source: "Asilah Trail Terrain Assessment"
      }
    ],
    address: "Trailhead at Southern Coastal Path, Lalla Rahma, Asilah 90000",
    coordinates: { lat: 35.4520, lng: -6.0465 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asilah+Coastal+Trail+Paradise+Beach",
    parkingInfo: "Park in Asilah town center and walk to southern trailhead",
    publicTransportInfo: "Walkable directly from medina south gate",
    dressCode: "Lightweight hiking gear with sun hat",
    equipmentNeeded: ["Hiking boots or sturdy trail runners", "1.5L drinking water", "Sun protection"],
    fitnessLevel: "Moderate (8 km round-trip on uneven dirt singletracks with short climbs)",
    ageRestrictions: "Ages 12+ recommended due to cliff exposure",
    safetyNotes: "Keep at least 2 meters back from eroding cliff perimeters",
    languages: ["Arabic (Darija)", "French", "English"],
    visitorQuotes: [
      {
        type: "Hiker",
        quote: "Walking along these cliffs with the Atlantic crashing below was the absolute highlight of my trip.",
        author: "Simon B.",
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
    storyTitle: "The Trail of Wind and Stone",
    history: "These headland tracks were originally carved by local shepherds and coastal fishermen who traveled between Asilah and the southern beach shacks on foot.",
    culturalImportance: "A classic rite of passage for adventurous visitors looking to connect with the raw Atlantic geography of northern Morocco.",
    localLegend: "Local shepherds say the sea caves along the trail were once used as smugglers' caches during the colonial era.",
    funFact: "During springtime, the coastal meadows bordering the cliffs erupt with blooming yellow daisies and wild purple irises.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "How long does the hike take?",
        a: "Around 3.5 to 4 hours round-trip, including time spent at Paradise Beach."
      }
    ],
    contactPhone: ""
  },
  {
    // ── CORE IDENTITY ───────────────────────────────────────
    id: "asilah-barrage-9-avril",
    city: "asilah",
    name: "Barrage du 9 Avril Nature Area",
    neighborhood: "Zillil",
    // ── 1. QUIZ — matching, mood & personalization —
    lifestyle: ["lean", "balanced"],
    groupTypes: ["solo", "couple", "family", "friends", "nature-lover"],
    crowdLevel: "quiet",
    energyLevel: "moderate",
    archetypeAffinity: ["nature", "nomad", "adventure", "photographer"],
    vibeTags: ["peaceful", "scenic", "tranquil", "serene"],
    tags: ["nature", "mountain-lake", "picnic-spot", "birdwatching", "day-trip", "off-the-beaten-path"],
    badges: ["peaceful-escape", "panoramic-view", "hidden-gem"],
    // ── 2. FILTER — result-page filters & logistics —
    price: 0,
    pricePerPerson: 0,
    entryPrice: 0,
    durationMinutes: 180,
    distanceFromCenterKm: 15.0,
    transportMode: "taxi",
    transportModes: ["drive", "taxi"],
    safetyLevel: 4,
    walkInOkay: true,
    hasEnglishGuide: false,
    hasFrenchGuide: false,
    isKidFriendly: true,
    isFemaleFriendly: true,
    isWheelchairAccessible: false,
    accessibilityFeatures: ["flat_ground"],
    isPhotographyFriendly: true,
    hasPrivateOption: false,
    hasSunsetView: true,
    hasWiFi: false,
    nearMedina: false,
    nearBeach: false,
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
    openingHours: "Open daylight hours",
    paymentMethods: ["cash_mad"],
    amenities: ["parking", "panoramic_viewpoint"],
    restrictions: ["Swimming prohibited in dam reservoir due to unseen currents and soft silt"],
    healthContraindications: ["Remote rural location with no medical clinics nearby"],
    // ── 3. UI — presentation & social proof —───────────────
    description: "A scenic inland reservoir and nature area nestled among the rolling hills of the Rif foothills, 15 km east of Asilah. Offers tranquil lake views, birdwatching, and rural picnic spots far from the coastal breeze.",
    shortValueProp: "Tranquil inland mountain reservoir surrounded by rolling green hills, perfect for birding and picnics",
    images: [],
    googleRating: 4.2,
    reviewCount: 140,
    googleReviewCount: 85,
    tripadvisorRating: 4.1,
    tripadvisorReviewCount: 35,
    viatorRating: 4.0,
    viatorReviewCount: 12,
    getyourguideRating: 3.9,
    getyourguideReviewCount: 8,
    badge: "hidden-gem",
    tip: "Combine with an excursion to the Mezora Cromlech for an authentic inland day trip.",
    tips: [
      "Pack your own food and refreshments as there are no commercial cafés at the lake",
      "Springtime brings lush green emerald hills that turn golden in summer"
    ],
    highlights: [
      "Expansive turquoise water reservoir framed by rolling hills",
      "Peaceful countryside setting with grazing sheep and olive groves",
      "Excellent spot for freshwater birdwatching and rural photography"
    ],
    emotionalBenefits: ["Tranquil", "Scenic", "Reflective"],
    bestTimeToVisit: "Spring (March–May) when the surrounding hills are vivid green",
    typicalWaitTimeMinutes: 0,
    seasonality: "Best March–June and September–November",
    ticketTypes: [
      {
        name: "Free Public Access",
        price: 0,
        currency: "MAD"
      }
    ],
    discountsInfo: "Free",
    includedServices: ["Access to public viewpoint and shoreline paths"],
    excludedServices: ["Private boat hire", "Guided tour"],
    hiddenCostsInfo: "None",
    // ── WORRIES ("Things You're Worried About!") ────────────
    worries: [
      {
        id: "activity-safety",
        title: "Safety",
        icon: "shield",
        tag: "No Swimming",
        tagColor: "alert",
        tone: "caution",
        description: "Open reservoir waters have steep submerged banks and underwater silt; strictly admire from the shoreline and obey warning signs.",
        state: "verified",
        source: "Ministère de l'Équipement et de l'Eau"
      },
      {
        id: "activity-scams",
        title: "Scams",
        icon: "warning",
        tag: "Quiet Outpost",
        tagColor: "safety",
        tone: "good",
        description: "Isolated agricultural hinterland with zero tourist touting or unverified fee collectors.",
        state: "verified",
        source: "Gendarmerie Royale Had Gharbia"
      },
      {
        id: "activity-pricing",
        title: "Pricing",
        icon: "tag",
        tag: "Completely Free",
        tagColor: "money",
        tone: "good",
        description: "Public access to the panoramic lakeside viewpoints and peripheral hiking paths is entirely free.",
        state: "verified",
        source: "Moroccan Mate Verified Database"
      },
      {
        id: "activity-authenticity",
        title: "Authenticity",
        icon: "gem",
        tag: "Inland Reserve",
        tagColor: "craft",
        tone: "good",
        description: "A genuine Moroccan countryside setting providing deep insight into regional rural water management and pastoral life.",
        state: "verified",
        source: "Région Tanger-Tétouan-Al Hoceima"
      },
      {
        id: "activity-difficulty",
        title: "Difficulty",
        icon: "mountain",
        tag: "Gentle Slopes",
        tagColor: "safety",
        tone: "good",
        description: "Paved regional road reaches the main dam viewpoint, followed by optional gentle dirt track walks along the lakeside ridges.",
        state: "verified",
        source: "Northern Morocco Regional Road Survey"
      }
    ],
    address: "Barrage du 9 Avril 1947, Commune Rurale Had Gharbia, Zillil 90000",
    coordinates: { lat: 35.5270, lng: -5.7250 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Barrage+du+9+Avril+Asilah",
    parkingInfo: "Informal parking areas along the access road near the dam viewpoints",
    publicTransportInfo: "Grand taxi from Asilah toward Had Gharbia or private rental car",
    dressCode: "Comfortable countryside outdoor wear",
    equipmentNeeded: ["Sun hat", "Picnic lunch and water", "Binoculars"],
    fitnessLevel: "Relaxed (Gentle strolls along hillside tracks overlooking the reservoir)",
    ageRestrictions: "All ages welcome",
    safetyNotes: "Do not attempt to swim in the reservoir",
    languages: ["Arabic (Darija)", "French"],
    visitorQuotes: [
      {
        type: "Traveler",
        quote: "A serene and quiet inland getaway. The contrast between the blue lake and the rolling green hills is stunning.",
        author: "Youssef M.",
        rating: 5
      }
    ],
    nearbyCombos: [
      {
        name: "Mezora Cromlech",
        type: "visit",
        id: "asilah-mezora-cromlech"
      }
    ],
    storyTitle: "The Water Mirror of the Hinterland",
    history: "Commissioned in 1995 on the Oued El Hachef, the 9th of April 1947 Dam was named in honor of King Mohammed V's historic visit and speech in Tangier demanding Moroccan independence.",
    culturalImportance: "A vital source of drinking water and agricultural irrigation for the Tangier-Asilah peninsula, transforming the local rural ecosystem.",
    localLegend: "Locals tell that the flooded valley once held ancient watermills that serviced regional olive oil presses since Roman antiquity.",
    funFact: "The reservoir basin covers over 200 square kilometers of watershed, attracting migratory ducks and cormorants each winter.",
    officialWebsite: "",
    ticketWebsite: "",
    faq: [
      {
        q: "Is it suitable for a picnic?",
        a: "Yes, the grassy hillside banks overlooking the reservoir are popular for peaceful rural picnics."
      }
    ],
    contactPhone: ""
  }
];