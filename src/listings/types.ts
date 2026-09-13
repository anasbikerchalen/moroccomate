import { SportFacilityType, SportExperienceType, SportIntent } from '../types'

export type FocusType = 'sleep' | 'eat' | 'things-to-do' | 'transport' | 'visit' | 'activities' | 'shopping'

export type CityId =
  | 'marrakech' | 'fes' | 'agadir' | 'chefchaouen' | 'essaouira' | 'casablanca' | 'tangier' 
  | 'merzouga' | 'rabat' | 'meknes' | 'mhamid' | 'imlil_toubkal' | 'ourika' | 'ouzoud' 
  | 'todra_dades' | 'ouarzazate' | 'paradise_valley' | 'taghazout' | 'imsouane' | 'dakhla' 
  | 'asilah' | 'saidia' | 'al_hoceima' | 'ifrane_azrou' | 'oukaimeden' | 'el_jadida' 
  | 'tetouan' | 'tetouan_martil' | 'taroudant_tafraoute' | 'skoura_draa' | 'moulay_idriss'
  | 'ifrane' | 'taroudant'

export type LifestyleComfort = 'lean' | 'balanced' | 'premium'

export type GroupType =
  | 'solo' | 'couple' | 'couples' | 'family' | 'families' | 'friends' | 'seniors' | 'kids-friendly' | 'large-groups' | 'business-friendly' | 'business'

export type CrowdLevel = 'bustling' | 'balanced' | 'quiet'

export type SafetySensitivity = 'high' | 'neutral' | 'okay'

export type TransportMode =
  | 'walkable' | 'taxi' | 'transit' | 'mixed'

export type MealType =
  | 'breakfast' | 'lunch' | 'dinner' | 'latenight' | 'flexible' | 'afternoon-tea' | 'brunch' | 'snack'

export type AccommodationType =
  | 'riad' | 'dar' | 'desert-camp' | 'kasbah' | 'hotel' | 'guesthouse' | 'hostel' | 'lodge' | 'resort' | 'apartment' | 'villa'

export type EnergyLevel =
  | 'relaxed'
  | 'moderate'
  | 'active'
  | 'intense'

export interface FrictionProfile {
  walkingFatigue: number     // 1 to 5
  heatExposure: number       // 1 to 5
  touristCrowd: number       // 1 to 5
  noiseLevel: number         // 1 to 5
  scamRisk: number           // 1 to 5
  physicalIntensity: number  // 1 to 5
  kidSuitable: boolean
}

export interface SleepListing {
  id: string
  city: CityId
  name: string
  type: AccommodationType
  neighborhood: string
  address?: string
  description: string
  pricePerNight: number
  lifestyle: LifestyleComfort
  amenities: string[]
  googleRating?: number
  googleReviewCount?: number
  tripadvisorRating?: number
  tripadvisorReviewCount?: number
  bookingRating?: number
  bookingReviewCount?: number
  hotelguruRating?: number
  hotelguruReviewCount?: number
  rating?: number // Legacy support
  reviewCount?: number // Legacy support
  safetyLevel: 1 | 2 | 3 | 4 | 5
  groupTypes: GroupType[]
  hasPool: boolean
  hasBreakfast: boolean
  hasAC: boolean
  hasHeating?: boolean
  hasRooftop: boolean
  hasEnsuite: boolean
  hasRestaurant?: boolean
  hasBar?: boolean
  hasGym?: boolean
  hasElevator?: boolean
  hasLaundryService?: boolean
  hasRoomService?: boolean
  petFriendly?: boolean
  taxesIncluded?: boolean
  freeCancellation?: boolean
  kidsStayFree?: boolean
  nearMedina: boolean
  nearBeach?: boolean
  nearMosque: boolean
  images?: string[]
  tip?: string
  archetypeAffinity?: string[]
  vibeTags?: string[]
  tags?: string[]
  isHiddenGem?: boolean
  // New fields for Stay Detail View
  locationSummary?: string // e.g. "Beachfront", "City Center"
  availabilityText?: string // e.g. "2 rooms left", "Available tonight"
  googleMapsUrl?: string
  paymentMethods?: string[]
  languagesSpoken?: string[]
  customStory?: string
  neighborhoodOverview?: string
  hiddenFeesNotice?: string
  pros?: string[]
  cons?: string[]
  trustScores?: {
    cleanliness: number
    safety: number
    staff: number
    value: number
    comfort: number
    location: number
  }
  logistics?: {
    checkIn: string
    checkOut: string
    luggageStorage: string
    parking: string
    airportTransfer?: string
    contact: string
  }
  roomFeatures?: string[] // e.g. ["soundproof", "workspace", "balcony"]
  roomTypes?: {
    name: string
    view?: string
    price: number
    beds: string
    size: string
    available?: boolean
    urgentText?: string
    image?: string
  }[]
  neighborhoodDistances?: {
    label: string
    distance: string
    time?: string
    icon?: string
  }[]
  cancellationPolicy?: string
  childPolicy?: string
  officialWebsite?: string
  instagramHandle?: string
  virtualTourUrl?: string
  isWheelchairAccessible?: boolean
  accessibilityDetails?: string
  googlePlaceId?: string
  nonCopyrightImage?: string
  faqs?: {
    question: string
    answer: string
  }[]
  reviewHighlights?: {
    solo?: string
    couples?: string
    families?: string
    business?: string
    nomad?: string
  }
}

export interface EatListing {
  servesAlcohol?: boolean;
  id: string
  city: CityId
  name: string
  neighborhood: string
  district?: string
  description: string
  pricePerPerson: number
  lifestyle: LifestyleComfort
  mealTypes: MealType[]
  experienceTypes: string[]
  foodStyles: string[]
  crowdLevel: CrowdLevel
  groupTypes: GroupType[]
  hasEnglishStaff: boolean
  hasFrenchStaff: boolean
  hasDelivery: boolean
  hasParking: boolean
  nearMedina: boolean
  nearBeach: boolean
  nearCenter: boolean
  isVegetarianFriendly: boolean
  isHalal: boolean
  halalStatus?: 'likely-halal-food' | 'halal-certified' | 'unknown'
  verificationStatus?: 'verified' | 'unverified' | 'possibly-closed' | 'wrong-city'
  isTemporarilyHidden?: boolean
  openTime: string
  closeTime: string
  badge: 'hidden-gem' | 'local-favorite' | 'splurge' | 'tourist-trap' | 'local'
  images?: string[]
  rating?: number
  reviewCount?: number
  googleReviewCount?: number
  tripadvisorRating?: number
  tripadvisorReviewCount?: number
  theforkRating?: number
  theforkReviewCount?: number
  restaurantguruRating?: number
  restaurantguruReviewCount?: number
  tip?: string
  archetypeAffinity?: string[]
  vibeTags?: string[]
  tags?: string[]
  isHiddenGem?: boolean
  // New fields
  paymentMethods?: string[]
  reservationMethod?: string[]
  reservationContact?: string
  googleMapsUrl?: string
  bestDishes?: string[]
  alcoholPolicy?: 'serves-alcohol' | 'dry'
  ramadanFriendly?: 'serves-lunch' | 'special-ftour' | 'closed'
  ratingSource?: 'tripadvisor' | 'google' | 'restaurantguru'
  fullMenu?: {
    type: 'image' | 'text'
    content: string // image url or text content
  }
  customStory?: string
  languagesSpoken?: string[]
  pros?: string[]
  cons?: string[]
  googlePlaceId?: string
  nonCopyrightImage?: string
  googleRating?: number
  bestTimeToVisit?: string
  averageWaitMinutes?: number
  seatingTypes?: string[]
  viewType?: string
  wiFi?: boolean
  airConditioning?: boolean
  wheelchairAccessible?: boolean
  website?: string
  instagram?: string
  exactAddressAndCoordinates?: {
    address: string
    lat: number
    lng: number
  }
}

export type ActivityListing = ThingToDoListing
export type VisitListing = ThingToDoListing
export interface ThingToDoListing {
  id: string
  city: CityId
  name: string
  neighborhood: string
  description: string
  price: number // Combined entryPrice / pricePerPerson
  pricePerPerson?: number
  entryPrice?: number
  lifestyle: LifestyleComfort[]
  groupTypes: GroupType[]
  crowdLevel: CrowdLevel
  durationMinutes: number
  hasEnglishGuide: boolean
  hasFrenchGuide: boolean
  images?: string[]
  googleRating?: number // Replaces raw rating
  reviewCount?: number
  googleReviewCount?: number
  tripadvisorRating?: number
  tripadvisorReviewCount?: number
  viatorRating?: number
  viatorReviewCount?: number
  getyourguideRating?: number
  getyourguideReviewCount?: number
  googlePlaceId?: string
  nonCopyrightImage?: string
  youtubeVideoId?: string
  googleMapsUrl: string // Added for external linking
  safetyLevel: 1 | 2 | 3 | 4 | 5
  // Visit-specific
  cluster?: string
  bookingRequired?: boolean
  walkInOkay?: boolean
  // Activity-specific
  energyLevel?: EnergyLevel
  timeOfDay?: string[]
  transportMode?: TransportMode
  isKidFriendly?: boolean
  isFemaleFriendly?: boolean
  isWheelchairAccessible?: boolean
  isPhotographyFriendly?: boolean
  hasPrivateOption?: boolean
  hasSunsetView?: boolean
  avoidAnimals?: boolean
  hasIndoorRest?: boolean
  hasWiFi?: boolean
  hasAC?: boolean
  nearMedina?: boolean
  nearBeach?: boolean
  goodForRain?: boolean
  hasLocalGuide?: boolean
  friction?: FrictionProfile
  tip?: string
  badge?: string
  archetypeAffinity?: string[]
  vibeTags?: string[]
  tags?: string[] // Unified kebab-case tags for 7-pillar taxonomy
  isHiddenGem?: boolean

  // A-to-M Level Planning and Storytelling Fields
  shortValueProp?: string           // A6
  distanceFromCenterKm?: number     // A8
  highlights?: string[]             // B4
  emotionalBenefits?: string[]      // C3
  openingHours?: string             // D2
  bestTimeToVisit?: string          // D3
  typicalWaitTimeMinutes?: number   // D5
  seasonality?: string              // D7
  ticketTypes?: { name: string; price: number }[] // E3
  discountsInfo?: string            // E4
  includedServices?: string[]       // E5
  hiddenCostsInfo?: string          // E6
  address?: string                  // F1
  parkingInfo?: string              // F4
  publicTransportInfo?: string      // F5
  dressCode?: string                // H1
  equipmentNeeded?: string[]        // H2
  fitnessLevel?: string             // H3
  ageRestrictions?: string          // H5
  safetyNotes?: string              // H6
  languages?: string[]              // H7
  visitorQuotes?: { quote: string; author: string; type: string; rating: number }[] // I1, C2
  nearbyCombos?: { name: string; type: 'eat' | 'visit' | 'shop' | 'sleep'; id?: string }[] // J1-J3
  storyTitle?: string               // K-level
  history?: string                  // K1
  culturalImportance?: string       // K2
  localLegend?: string              // K3
  funFact?: string                  // K4, K5
  seasonalInfo?: { bestSeason: string; impactText: string; festivalNote?: string } // L-level
  officialWebsite?: string          // M1
  ticketWebsite?: string            // M2
  faq?: { q: string; a: string }[]  // M4
  contactPhone?: string             // M5

  // Sport-specific fields (optional, only for sport listings)
  facilityType?: SportFacilityType;
  experienceType?: SportExperienceType;
  sportIntent?: SportIntent;
  hasDayPass?: boolean;
  hasWomenOnlyHours?: boolean;
  hasGroupClasses?: boolean;
  hasFullWeights?: boolean;
  distanceFromUser?: number;
  skillLevel?: ('beginner' | 'intermediate' | 'advanced')[];
  duration?: string;
  equipmentIncluded?: boolean;
  instructorAvailable?: boolean;
}

export type PricingModel = 'fixed' | 'negotiable' | 'mixed' | 'market_price'
export type ShopType = 'souk_stall' | 'boutique' | 'cooperative' | 'mall_store' | 'pharmacy' | 'supermarket' | 'designer_atelier' | 'concept_store'
export type AuthenticitySeal = 'label_artisanat' | 'wfto' | 'zellige_de_fes' | 'anou' | 'maalem_certified'

export interface ShopListing {
  id: string
  city: CityId
  name: string
  type: ShopType
  category: string
  neighborhood: string
  description: string
  googlePlaceId?: string;   // Google Place ID — used to fetch photos from Google Places API
  nonCopyrightImage?: string; // Copyright-free / Wikimedia / CC photo URL
  images?: string[];         // DEPRECATED — keep as optional for transition, remove later
  googleRating?: number
  googleReviewCount?: number
  priceLevel: 'budget' | 'mid-range' | 'premium' | 'luxury'
  pricingModel: PricingModel
  isVerified: boolean
  isWheelchairAccessible?: boolean
  hasDelivery?: boolean
  
  // P0 & Navigation
  googleMapsUrl: string
  address: string
  landmark?: string // Landmarks for medina navigation
  
  /**
   * Turn-by-turn walking directions for medina navigation.
   * GPS doesn't work in medina alleys — these text steps are critical.
   * Example: ["Walk toward Koutoubia Mosque", "Turn right at blue fountain", "3rd green door on left"]
   */
  navSteps?: string[];

  /**
   * Geographic coordinates for distance calculation from user's GPS.
   */
  coordinates?: {
    lat: number;
    lng: number;
  };

  /**
   * Pre-computed display distance from a key landmark or city center.
   * Shows in the hero: "8 min walk · 450m from Koutoubia"
   * The actual real-time distance will be computed via GPS, but this
   * gives a "typical" reference for list/map views before GPS lock.
   */
  distanceText?: string;

  what3words?: string
  
  // P1 - Evaluation
  tags: string[]
  authenticitySeals?: AuthenticitySeal[]
  paymentMethods: ('cash' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay' | 'amex')[]
  productCategories: string[]
  languagesSpoken: string[]
  
  // P2 - Details
  phoneNumber?: string
  website?: string
  instagram?: string
  openingHours: { day: string; hours: string }[]
  fridayHours?: string // Specific for prayer pause
  ramadanHours?: string
  
  shipping?: {
    available: boolean
    partner?: 'dhl' | 'fedex' | 'la_poste' | 'shop_arranges'
    details?: string
  }
  
  workshopVisitable?: boolean
  returnPolicy?: string
  establishedYear?: number
  bestTimeToVisit?: string
  
  // Experience
  atmosphere?: string
  storeSize?: 'boutique' | 'medium' | 'large' | 'department-store'
  crowdLevel?: 'quiet' | 'moderate' | 'busy'
  
  // Products & Prices
  whatTheySell?: { item: string; range?: string; priceEstimate?: string }[]
  
  // Trust & Reviews
  reviewSummary?: string
  recentReviews?: { author: string; text: string; rating: number; type: 'tourist' | 'local' }[]
  isLocalFavorite?: boolean
  
  // Local Context
  nearbyLandmarks?: string[]
  
  // Story
  history?: string
  ownerName?: string
  ownerBio?: string
  
  // Legacy / Shared
  tip?: string
  badge?: string
}

export interface SmartSuggestion {
  id: string
  city: CityId
  focus: FocusType
  triggerConditions: Record<string, unknown>
  title: string
  description: string
  badge: string
}

