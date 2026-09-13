/**
 * 🧮 Morocco Savvy — Calculation Engine Formulas Reference
 * Formulates objective, multi-factorial scores for Places, Neighborhoods, and Cities.
 */

import { PlaceIntel, ScamIntel, NeighborhoodIntel } from '../types/savvy';

// Clamps a value between a min and max
const clamp = (val: number, min: number, max: number): number => {
  return Math.max(min, Math.min(max, val));
};

/**
 * 1. Safety Score (1-10)
 * Baseline: 7.0 (Morocco is generally safe)
 */
export function calculateSafetyScore(params: {
  neighborhoodSafetyAvg: number; // 1-10
  incidentCount: number;
  hasTouristPoliceNearby: boolean;
  isWellLitAtNight: boolean;
  hasNeverHadTheftReports: boolean;
}): number {
  const baseline = 7.0;
  const neighborhoodFactor = params.neighborhoodSafetyAvg * 0.3;
  const incidentFactor = params.incidentCount === 0 ? 3.0 : (10 - params.incidentCount * 0.5) * 0.3;
  const policeFactor = params.hasTouristPoliceNearby ? 1.5 : 0;
  const lightingFactor = params.isWellLitAtNight ? 0.5 : 0;
  const theftFactor = params.hasNeverHadTheftReports ? 1.0 : 0;
  
  return parseFloat(clamp(baseline + neighborhoodFactor + incidentFactor + policeFactor + lightingFactor + theftFactor, 1, 10).toFixed(1));
}

/**
 * 2. Value for Money Score (1-10)
 * CALC: (fairPriceForCategory / actualAvgPriceCharged) * 10
 */
export function calculateValueForMoneyScore(fairPrice: number, actualPrice: number): number {
  const valueScore = (fairPrice / actualPrice) * 10;
  return parseFloat(clamp(valueScore, 1, 10).toFixed(1));
}

/**
 * 3. Tourist Friendliness Score (1-10)
 */
export function calculateTouristFriendlinessScore(params: {
  hasEnglishMenu: boolean;
  hasEnglishSpeakingStaff: boolean;
  acceptsCreditCards: boolean;
  englishReviewsRatio: number; // 0 to 1
  mentionedPositivelyInExpatGroups: boolean;
  noTouristPricingComplaints: boolean;
  accessibleByTaxi: boolean;
  hasWhatsAppContact: boolean;
}): number {
  let score = 5.0;
  if (params.hasEnglishMenu) score += 0.8;
  if (params.hasEnglishSpeakingStaff) score += 1.0;
  if (params.acceptsCreditCards) score += 0.5;
  if (params.englishReviewsRatio > 0.3) score += 0.5;
  if (params.mentionedPositivelyInExpatGroups) score += 0.7;
  if (params.noTouristPricingComplaints) score += 0.5;
  if (params.accessibleByTaxi) score += 0.5;
  if (params.hasWhatsAppContact) score += 0.3;
  
  return parseFloat(clamp(score, 1, 10).toFixed(1));
}

/**
 * 4. Scam Risk Score (0-10)
 */
export function calculateScamRiskScore(params: {
  scamReportsForPlace: number;
  isListedInScamIntelAsVenue: boolean;
  touristPricingComplaints: number;
  isOnKnownScamRoute: boolean;
  hasHiddenChargeComplaints: boolean;
}): number {
  let score = 0;
  score += params.scamReportsForPlace * 2.5;
  if (params.isListedInScamIntelAsVenue) score += 3.0;
  if (params.touristPricingComplaints > 3) score += 1.5;
  if (params.isOnKnownScamRoute) score += 1.0;
  if (params.hasHiddenChargeComplaints) score += 1.0;
  
  return parseFloat(clamp(score, 0, 10).toFixed(1));
}

/**
 * 5. Happiness Score (1-10) — THE KEY SCORE
 */
export function calculateHappinessScore(params: {
  positiveReviewRatio: number; // 0 to 1
  scamRiskScore: number;
  valueForMoneyScore: number;
  touristFriendlinessScore: number;
  hasInstagrammableVibe: boolean;
  hasRepeatVisitorMentions: boolean;
}): number {
  const happiness = (params.positiveReviewRatio * 5) 
                  + ((10 - params.scamRiskScore) * 0.2)
                  + (params.valueForMoneyScore * 0.15)
                  + (params.touristFriendlinessScore * 0.1)
                  + (params.hasInstagrammableVibe ? 0.5 : 0)
                  + (params.hasRepeatVisitorMentions ? 0.5 : 0);
                  
  return parseFloat(clamp(happiness, 1, 10).toFixed(1));
}

/**
 * 6. Neighborhood Scam Density
 */
export function getNeighborhoodScamDensity(scamCount: number): 'none' | 'low' | 'moderate' | 'high' | 'extreme' {
  if (scamCount === 0) return 'none';
  if (scamCount <= 2) return 'low';
  if (scamCount <= 5) return 'moderate';
  if (scamCount <= 9) return 'high';
  return 'extreme';
}

/**
 * 7. City Overall Savvy Score (1-10)
 */
export function calculateCityOverallSavvyScore(params: {
  avgNeighborhoodHappiness: number;
  scamDensityLevelScore: number; // 1-10 scale where 10 is 'none' and 1 is 'extreme'
  avgPlaceValue: number;
  avgPlaceTourist: number;
  dataCompleteness: number; // 0-1
  communityActivityScore: number; // 1-10
}): number {
  const overall = (params.avgNeighborhoodHappiness * 0.25)
                + (params.scamDensityLevelScore * 0.20)
                + (params.avgPlaceValue * 0.15)
                + (params.avgPlaceTourist * 0.15)
                + (params.dataCompleteness * 10 * 0.10)
                + (params.communityActivityScore * 0.15);
                
  return parseFloat(clamp(overall, 1, 10).toFixed(1));
}

/**
 * Helper to get background and text classes for score badge
 */
export function getScoreStyle(score: number): { bg: string; text: string; border: string; label: string } {
  if (score >= 8.0) {
    return {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-200/50 dark:border-emerald-800/30',
      label: 'Smooth Sailing'
    };
  } else if (score >= 5.0) {
    return {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-200/50 dark:border-amber-800/30',
      label: 'Be Savvy'
    };
  } else {
    return {
      bg: 'bg-rose-50 dark:bg-rose-950/30',
      text: 'text-rose-700 dark:text-rose-400',
      border: 'border-rose-200/50 dark:border-rose-800/30',
      label: 'Extra Savvy Needed'
    };
  }
}
