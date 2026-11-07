export type UserMode = 'tourist' | 'digital-nomad' | 'expat' | 'local';

export type JourneyType = 'preparing' | 'landed' | 'in-morocco' | 'traveling' | 'leaving' | 'already-in';

export type ArchetypeId = 
  | 'modern-nomad'
  | 'history-weaver'
  | 'sensory-seeker'
  | 'quiet-mystic'
  | 'social-collector'
  | 'luxury-curator';

export type ExploreCategory = 'cities' | 'things-to-do' | 'food' | 'shopping' | 'experiences' | 'photos' | 'sleep';

export type ThingsToDoSubCategory = 
  | 'culture' 
  | 'sport' 
  | 'wellness' 
  | 'desert-nature' 
  | 'photography' 
  | 'social';

export type SportIntent = 'practical' | 'experience';

export type SportFacilityType = 
  | 'gym-fitness' 
  | 'running-outdoor' 
  | 'swimming-pool' 
  | 'yoga-movement' 
  | 'combat-sports' 
  | 'team-sports';

export type SportExperienceType = 
  | 'surf-kitesurf' 
  | 'hiking-trek' 
  | 'climbing-adventure' 
  | 'desert-sport' 
  | 'water-sport';

export type SafetyTier = 'low' | 'neutral' | 'high';

/** Sleep / Eat / Visit — user can select multiple for filtered results */
export type FocusArea = 'sleep' | 'eat' | 'visit';

export type BudgetComfort = 'shoestring' | 'balanced' | 'comfortable';

/**
 * Captured after Apply Seal — drives filtering & personalized copy.
 */
export interface UserPreferences {
  /** Tourist: €/day target; Expat: €/month total (housing-heavy mental model) */
  primaryBudget: string;
  comfortTier: BudgetComfort;
  /** Tourist: nights; expat: months horizon (strings keep flexible input) */
  horizon: string;
  safety: SafetyTier;
  /** Which story sections to render (multi-select) */
  focusAreas: FocusArea[];
}

export interface Neighborhood {
  name: string;
  price_nightly?: number; // For tourists
  price_monthly?: number; // For expats
  vibe: string;
  safety: 'green' | 'yellow' | 'red';
  best_for?: string[];
}

import { Cuisine, Vibe, BookingStatus, Dietary } from './tags';

export interface Attraction {
  name: string;
  cost: string;
  tip: string;
  duration?: string; // e.g. "45-60 mins"
  booking?: BookingStatus;
  cluster?: string; // e.g. "Medina Cluster"
}

export interface Restaurant {
  name: string;
  range: string;
  tag: 'local' | 'local_favorite' | 'hidden_gem' | 'tourist_trap' | 'splurge';
  cuisine?: Cuisine[];
  vibe?: Vibe[];
  dietary?: Dietary[];
  area?: string;
}

export interface CityData {
  id: string;
  name: string;
  color: string; // For the map
  tourist_budget: {
    sleep: number;
    eat: number;
    visit: number;
  };
  expat_budget: {
    rent: number;
    food: number;
    life: number;
  };
  neighborhoods: Neighborhood[];
  attractions: Attraction[];
  restaurants: Restaurant[];
}