// src/types/transport.ts

export type JourneyStage = 
  | 'preparing' 
  | 'just-landed' 
  | 'in-morocco' 
  | 'traveling' 
  | 'leaving';

export type TransportMode = 
  | 'petit-taxi' 
  | 'grand-taxi' 
  | 'ride-app' 
  | 'train' 
  | 'bus-ctm' 
  | 'bus-supratours'
  | 'bus-other' 
  | 'rental-car' 
  | 'private-driver'
  | 'walk';

export type HubType = 
  | 'AIRPORT' 
  | 'TRAIN_STATION' 
  | 'BUS_TERMINAL' 
  | 'GRAND_TAXI_RANK' 
  | 'PETIT_TAXI_RANK';

export type OperatorType = 
  | 'ONCF_TRAIN' 
  | 'CTM_BUS' 
  | 'SUPRATOURS_BUS' 
  | 'GRAND_TAXI_SHARED' 
  | 'GRAND_TAXI_PRIVATE';

export interface CityFareSystem {
  id: string;
  cityId: string;
  taxiColor: {
    en: string;
    fr: string;
    ar: string;
    hex: string;
  };
  meterStartDay: number;
  pricePerKmDay: number;
  pricePerMinuteWaitingDay: number;
  minimumFareDay: number;
  nightSurchargePercentage: number; // default 50
  nightStartTime: string; // "20:00"
  nightEndTime: string; // "06:00"
  minimumFareNight: number;
  luggageSurchargePerItem: number; // default 2
  maxPassengersPetitTaxi: number; // default 3
  driverSharingAllowed: boolean;
  sharingPricingRules: {
    en: string;
    fr: string;
    ar: string;
  };
  rideAppsStatus: 'Legal' | 'Tolerated' | 'Illegal/Hostile' | 'Highly Active';
  rideAppsDetails?: {
    supportedApps: string[];
    avgSurchargePercentage?: number;
    safetyRecommendations?: string[];
  };
  trafficMultipliers?: Record<string, number>;
  seatCapacity?: { petit: number; grand: number };
  paymentMethods?: string[];
}

export interface TransitHub {
  id: string;
  cityId: string;
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  type: HubType;
  coordinates: { lat: number; lng: number };
  lastMileComplexity?: 'LOW' | 'MEDIUM' | 'HIGH';
  accessibilityRating?: 1 | 2 | 3 | 4 | 5;
  officialTaxiRankLocation?: { lat: number; lng: number };
  amenities: {
    luggageStorage?: { available: boolean; costMadPerDay?: number; detailsEn?: string };
    simCards?: { available: boolean; providers: string[] };
    atm?: { available: boolean; banks: string[] };
    wifi?: { available: boolean; free: boolean };
  };
  carRentalDetails?: {
    returnZoneCoords: { lat: number; lng: number };
    returnInstructionsEn: string;
  };
  officialAirportDecreeFares?: {
    fixedFares: Array<{
      destinationZoneEn: string;
      fareDay: number;
      fareNight: number;
    }>;
    officialCounterPresent: boolean;
    proTipsEn: string;
  };
  localScamWarnings?: Array<{
    title: string;
    warningEn: string;
  }>;
}

export interface IntercityRoute {
  id: string;
  originHubId: string;
  destinationHubId: string;
  operatorCategory: OperatorType;
  operatorName: string;
  typicalFrequency: string;
  typicalDurationMinutes: number;
  priceMinMad: number;
  priceMaxMad: number;
  tollCostMad?: number;
  onlineBookingAvailable: boolean;
  bookingUrl?: string;
  expertStrategies: {
    grandTaxiSeatBuyout?: {
      allowed: boolean;
      priceMultiplier: number;
      descriptionEn: string;
    };
    luggageWeighingEtiquette?: {
      required: boolean;
      feePerBagMad: number;
      descriptionEn: string;
    };
    tips?: string[];
  };
}

export interface TranslationCard {
  id: string;
  category: 'NEGOTIATION' | 'DIRECTIONS' | 'METER_COMPLAINT' | 'SAFETY' | 'EMERGENCY';
  phraseEn: string;
  phraseFr: string;
  darijaArabic: string;
  darijaTransliteration: string;
  audioFilePath?: string;
  proTipEn?: string;
}

// Deprecated or legacy types kept for compatibility during migration
export interface Airport {
  id: string;
  code: string; // IATA: CMN, RAK, etc
  name: string;
  cityId: string; // links to cities.ts
  checkInTime: {
    domestic: number; // hours
    international: number;
  };
}

export interface TransportOption {
  mode: TransportMode;
  price: { min: number; max: number }; // MAD
  duration: number; // minutes
  comfort: 1 | 2 | 3 | 4 | 5;
  reliability: 1 | 2 | 3 | 4 | 5;
  availability: 'always' | 'limited' | 'book-ahead';
  pros: string[];
  cons: string[];
  tips?: string[];
  bookingUrl?: string;
}

export interface Route {
  id: string;
  from: string; // city ID or location
  to: string;
  distance: number; // km
  options: TransportOption[];
  stageSpecific?: Partial<Record<JourneyStage, {
    recommended: TransportMode;
    urgentTips?: string[];
    timing?: string; // e.g., "Leave 3 hours before flight"
  }>>;
}

export interface LocalTransportInfo {
  cityId: string;
  petitTaxi?: {
    color: string;
    meterStart: number; // MAD
    perKm: number;
    nightSurcharge: number; // percentage (e.g., 50 for 50%)
    capacity: number;
    scamAlerts: string[];
  };
  rideApps?: Array<{
    name: string;
    availability: 'high' | 'medium' | 'low';
    avgPriceVsTaxi: string; // e.g., "+30%"
  }>;
  publicTransport?: {
    tram?: boolean;
    bus?: boolean;
  };
}
