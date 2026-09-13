export interface ScamIntel {
  id: string;
  title: string;
  description: string;
  howToExit: string;
  anatomy?: {
    starts: string;
    warning: string;
    risk: string;
  };
  yourMove?: string;
  localPhrase?: {
    phrase: string;
    translation: string;
  };
  behaviorRule?: string;
  category: 
    | 'street'        // Medina touts, fake guides, "closed" scams
    | 'transport'     // Taxi meter scams, bus overcharging, fake baggage fees
    | 'shopping'      // Price inflation, product switching, shipping scams
    | 'food'          // Hidden charges, tourist menus, wrong change, inflated food prices
    | 'restaurant'    // Legacy fallback
    | 'accommodation' // Fake listings, deposit scams, bait-and-switch riads
    | 'digital'       // Fake Wi-Fi, SIM card scams, online tour fraud
    | 'authority'     // Fake police, impersonated guides, "official" schemes
    | 'merchant';    // Merchant / shop scams
  severity: 'low' | 'medium' | 'high';
  cityPriority: Record<string, number>; // 1-10 priority per city
  neighborhood?: string;           // "Jemaa el-Fna perimeter"
  specificLocation?: string;       // "Outside Café de France, south corner"
  operatingHours?: string;         // "Peak: 9:00–11:00 and 15:00–17:00"
  seasonality?: string;            // "Peak Oct-Mar, rare in summer"
  sourceLinks?: string[];          // Original URLs
  socialProofQuotes: Array<{
    text: string;
    source: 'reddit' | 'tripadvisor' | 'facebook' | 'instagram' | 'tiktok' | 'google_review' | string;
    author?: string;
    date?: string;
    sentiment?: 'warning' | 'frustrated' | 'amused' | 'neutral' | string;
    upvotes?: number;
  }>;
  escapePhraseDarija?: string;     // Darija Arabic
  escapePhraseFrench?: string;     // French phrase
  savvyTips?: string[];
}

export interface PlaceIntel {
  placeId: string;                 // Links to listingsRegistry
  placeType: 'eat' | 'sleep' | 'shop' | 'activity' | 'experience';
  placeName: string;               // Display name
  cityId: string;
  neighborhood: string;
  
  // AGGREGATED SCORES (1-10 each)
  safetyScore: number;
  valueForMoneyScore: number;
  touristFriendlinessScore: number;
  scamRiskScore: number;
  happinessScore: number;          // THE KEY SCORE — replaces "confidence" with positive framing
  
  // SOCIAL PROOF
  socialHighlights: Array<{
    text: string;
    source: 'reddit' | 'tripadvisor' | 'facebook' | 'google_review' | 'instagram' | string;
    sentiment: 'positive' | 'negative' | 'warning' | 'tip' | 'neutral' | string;
    dateHarvested?: string;
  }>;
  
  // RED FLAGS (from 1-star reviews)
  redFlags: Array<{
    text: string;
    source: 'reddit' | 'tripadvisor' | 'facebook' | 'google_review' | 'instagram' | string;
    severity: 'minor' | 'major' | 'safety' | 'medium';
  }>;
  
  // LOCAL INTELLIGENCE
  localInsight?: string;           // "Moroccans eat lunch special 12-14h"
  localAlternativeId?: string;     // Better/cheaper local option
  commonComplaints: string[];      // ["Slow service at peak", "Cash only"]
  commonPraise: string[];          // ["Best tagine in medina", "English-speaking staff"]
  savvyTips: string[];             // Place-specific actionable tips
  lastVerifiedDate: string;
  verifiedBy: 'platform' | 'community' | 'ai-research';

  // SHOP-SPECIFIC INTELLIGENCE (optional — only for placeType: 'shop')
  savvyScore?: number;              // 1-100 composite savvy score for this shop
  fairPriceGuidelines?: {
    avgExpatSpend: string;           // "500-800 MAD for leather goods"
    markupAlertThreshold: string;    // "Do not pay above 200% of this benchmark"
    negotiability: 'high' | 'moderate' | 'low' | 'fixed';
  };
  darijaEscapeScripts?: Array<{
    script: string;                  // "La, shukran, bghit nshof bla" (Darija)
    translation: string;             // "No thank you, I just want to look" (English)
    situation: string;               // "When a seller is too pushy"
  }>;
}

export interface NeighborhoodIntel {
  cityId: string;
  neighborhoodName: string;
  vibeTag: string;                 // "Lively and authentic — best for confident explorers"
  vibeEmoji: string;               // "🕌" "🌅" "☕" "🌅"
  safetyAtNight: 'very-safe' | 'safe-with-caution' | 'avoid-after-dark' | 'safe' | string;
  scamDensityLevel: 'none' | 'low' | 'moderate' | 'high' | 'extreme' | 'medium' | string;
  happinessIndex: number;          // Mean of PlaceIntel.happinessScore in this neighborhood
  keyWarnings: string[];           // "ATMs near gate run out of cash weekends"
  bestTimeToVisit: string;         // "Early morning 8-10 AM"
  worstTimeToVisit: string;        // "Friday 12-2:30 PM (prayer + shops closed)"
  communityTips: Array<{
    text: string;
    source: 'reddit' | 'facebook' | 'tripadvisor' | string;
    upvotes?: number;
    sentiment?: string;
  }>;
  savvyTips: string[];             // "Side streets 50m from main souk = 30% less"
  scamIds: string[];
  flaggedPlaceIds: string[];
  recommendedPlaceIds: string[];
  localSecrets: string[];          // "Rooftop behind carpet shop = best sunset view"
}

export interface CitySavvyIndex {
  cityId: string;
  overallSavvyScore: number;
  dataCompleteness: number;        // 0-100% — how thoroughly researched
  communityActivityScore: number;  // 1-10 — how fresh/active intel is
  lastVerified?: string;           // "July 2026"
  topScamCategories: Array<{ category: string; count: number }>;
  savviestNeighborhood: string;    // Highest happinessIndex
  trickiestNeighborhood: string;   // Highest scamDensityLevel
  mustKnowTip: string;             // Highest-upvoted community tip
  localSecret: string;             // Random from neighborhood localSecrets
  neighborhoods: NeighborhoodIntel[];
  scamCount: number;
  placeIntelCount: number;
  savvyTipsTotal: number;
}

export interface LocalsIntel {
  cityId: string;
  localHabits: Array<{
    activity: string;        // "Locals eat lunch at 13:00–14:00, not 12:00"
    why: string;             // "Work day flows around prayer times"
    savvyTip: string;        // "Arrive at 13:00 for freshest food, no wait"
  }>;
  whereLocalsEat: string[];    // Place names or IDs where Moroccans actually eat
  whereLocalsShop: string[];   // Where Moroccans actually buy
  whereLocalsRelax: string[];  // Parks, cafés, hangouts locals prefer
  culturalCalendar: Array<{
    event: string;           // "Cherry Festival in Sefrou"
    month: number;           // 6
    localOnly: boolean;      // true = mostly Moroccans
    savvyTip: string;        // "Go early morning — by noon it's packed"
  }>;
}

export interface SavvyProgress {
  cityId: string;
  checklistCompleted: number;    // % of SavvyChecklist items checked
  badge: 'newbie' | 'aware' | 'savvy' | 'expert' | 'local';
  tipsReadCount: number;
  scamsKnownCount: number;
  neighborhoodsExploredCount: number;
}
