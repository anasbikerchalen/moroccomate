import { CityId } from '../listings/types';
export type { CityId };

export type TravelStyle = 'budget' | 'mid-range' | 'luxury';
export type UserType = 'solo' | 'couple' | 'family' | 'nomad' | 'group';
export type BudgetCategory =
  | 'food'
  | 'accommodation'
  | 'transport'
  | 'attractions'
  | 'nightlife'
  | 'shopping'
  | 'coworking'
  | 'healthcare'
  | 'visa'
  | 'money-saving';
export type BudgetScoreTier = '$' | '$$' | '$$$';

export interface BudgetPlannerInput {
  totalBudget: number; // in MAD
  tripDays: number;
  cities: CityId[];
  travelStyle: TravelStyle;
  userType: UserType;
  interests: string[];
}

export interface TransportOption {
  mode: string;
  price: number;
  travelTimeMinutes: number;
  notes?: string;
}

export interface NeighborhoodRec {
  cityId: CityId;
  neighborhood: string;
  budgetScore: BudgetScoreTier;
  avgCost: number;
}

export interface BudgetPlanOutput {
  recommendedItinerary: ItineraryDay[];
  budgetAllocation: BudgetAllocation;
  estimatedTotalCost: number;
  cheapestTransportOptions: TransportOption[];
  recommendedNeighborhoods: NeighborhoodRec[];
  relatedGuideIds: string[];
  hacksAndTips: string[];
}

export interface ItineraryDay {
  day: number;
  cityId: CityId;
  activities: string[];
  estimatedCost: number;
}

export interface BudgetAllocation {
  accommodation: number; // percentage
  food: number;
  transport: number;
  activities: number;
}

export interface TripCostBreakdown {
  days: number;
  cities: CityId[];
  travelStyle: TravelStyle;
  accommodation: { daily: number; total: number };
  food: { daily: number; total: number };
  transport: { daily: number; total: number };
  activities: { daily: number; total: number };
  grandTotal: number;
  currency: 'MAD';
}

export interface DailyEstimate {
  cityId: CityId;
  travelStyle: TravelStyle;
  accommodation: number;
  food: number;
  transport: number;
  activities: number;
  touristTaxPerNight?: number; // e.g. 15-30 MAD/night Taxe de Séjour
  total: number;
  currency: 'MAD';
  lastUpdated?: string; // e.g. "2026-03"
}

export interface CityPriceAverages {
  cityId: CityId;
  avgAccommodationPerNight: { budget: number; midRange: number; luxury: number };
  avgMealCost: { budget: number; midRange: number; luxury: number };
  avgTransportDaily: number;
  avgActivityCost: number;
}

export interface RouteCostComparison {
  from: CityId;
  to: CityId;
  mode: string; // 'bus_ctm' | 'bus_supratours' | 'train' | 'grand_taxi' | 'rental_car'
  pricePerPerson: number;
  travelTimeMinutes: number;
  comfort: number; // 1-10
  notes: string;
}

export interface CostOfLivingProfile {
  cityId: CityId;
  lastUpdated?: string; // e.g. "2026-03"
  monthlyBudget: { budget: number; midRange: number; luxury: number };
  rentByArea?: {
    centralExpatOneBed?: number; // e.g., Gueliz / Gauthier / Marshan
    medinaOneBed?: number;        // e.g., Old City / Riad zone
    outerSuburbsOneBed?: number;  // e.g., Local residential zone
  };
  rent: { studio: number; oneBed: number; shared: number };
  food: { localMeal: number; midRangeRestaurant: number; groceriesWeekly: number; cappuccino?: number };
  utilities: { electricity: number; electricitySummerAC?: number; water: number; internet: number };
  coworking: { dailyPass: number; monthlyPass: number };
  nomadEssentials?: {
    simCardData10GB?: number;  // e.g., 100 MAD for Maroc Telecom / Orange
    gymMonthly?: number;        // e.g., 350-500 MAD
    coworkingDaily?: number;
    coworkingMonthly?: number;
  };
  practicalTips?: string[];
}

export interface NeighborhoodCostProfile {
  cityId: CityId;
  neighborhood: string;
  avgHotelPerNight: number;
  avgAirbnbPerNight: number;
  longTermRentMonthly: number;
  avgMealCost: number;
  avgCafeCost: number;
  transportCostDaily: number;
  budgetScore: BudgetScoreTier;
}

export interface CityBudgetComparison {
  cityA: CityBudgetSnapshot;
  cityB: CityBudgetSnapshot;
}

export interface CityBudgetSnapshot {
  cityId: CityId;
  dailyTouristBudget: { budget: number; midRange: number; luxury: number };
  monthlyCostOfLiving: number;
  avgAccommodation: number;
  avgFood: number;
  avgTransport: number;
  avgActivity: number;
  budgetScore: BudgetScoreTier;
}

export interface NeighborhoodComparison {
  neighborhoodA: NeighborhoodCostProfile;
  neighborhoodB: NeighborhoodCostProfile;
}

export interface RouteComparison {
  from: CityId;
  to: CityId;
  options: RouteCostComparison[];
}

export interface BudgetGuide {
  id: string;
  type: 'general' | 'hack';
  title: string;
  slug: string;
  city?: CityId;
  neighborhood?: string;
  userTypes?: UserType[];
  travelStyles?: TravelStyle[];
  category: BudgetCategory;
  summary: string;
  content: string; // LEAVE EMPTY — owner fills later
  relatedGuideIds: string[];
  relatedBlogPostUrl?: string;
}

export interface BudgetGuideFilter {
  city?: CityId;
  neighborhood?: string;
  userType?: UserType;
  travelStyle?: TravelStyle;
  category?: BudgetCategory;
  type?: 'general' | 'hack';
}

export interface SocialHack {
  id: string;
  title: string;
  summary: string;
  exactText?: string;
  username: string;
  sourceName: string; // e.g. 'Reddit' | 'Tripadvisor' | 'Facebook'
  sourceUrl?: string;
  datePosted: string;
  status2026?: string;
  city: CityId;
  neighborhood?: string;
  category: BudgetCategory;
}

