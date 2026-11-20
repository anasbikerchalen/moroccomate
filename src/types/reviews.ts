/**
 * reviews.ts
 * Unified multi-platform reviews data schema and utilities for MoroccoMate.
 * 
 * Used across all four categories:
 * - Places to Eat (Tripadvisor, Google Maps, Restaurant Guru, TheFork, Wanderlog, Reddit)
 * - Places to Sleep (Tripadvisor, Booking.com, Google Travel, Hotels.com, Expedia)
 * - Things to Do (Tripadvisor, GetYourGuide, Viator, Google Travel, Lonely Planet)
 * - Shopping (Tripadvisor, Google Maps, Trustpilot, Lonely Planet, Reddit)
 */

export type ReviewGender = 'man' | 'woman' | 'other';
export type ReviewSentiment = 'good' | 'bad' | 'neutral';

export type ReviewSource =
  | 'Tripadvisor'
  | 'Google Maps'
  | 'Restaurant Guru'
  | 'TheFork'
  | 'Wanderlog'
  | 'Reddit'
  | 'Booking.com'
  | 'Google Travel'
  | 'Hotels.com'
  | 'Expedia'
  | 'GetYourGuide'
  | 'Viator'
  | 'Lonely Planet'
  | 'Trustpilot';

export interface SingleReview {
  id?: string;
  author: string;
  /**
   * Publisher gender: 'man' | 'woman' | 'other' (inferred if unknown)
   * Rendered as an elegant SVG profile icon, avoiding external photo dependencies.
   */
  gender?: ReviewGender;
  /** Exact verbatim review text */
  text: string;
  /**
   * ISO date posted string (e.g., '2026-09-15' or '2025-11-20').
   * The UI dynamically calculates relative age compared to the current date.
   */
  postedDate: string;
  /** Review origin platform */
  source: ReviewSource;
  /** Rating (typically 1-5, rendered via MoroccoMate camel logo heads) */
  rating?: number;
  /** Sentiment classification: 'good' | 'bad' | 'neutral' */
  sentiment?: ReviewSentiment;
  /** Direct link to the individual review or source page */
  sourceUrl?: string;
  /**
   * Place-specific tags derived from review highlights
   * (e.g., ['Service', 'Tagine', 'Rooftop', 'Sunset View', 'Breakfast'])
   * Documented per place based on traveler consensus.
   */
  tags?: string[];
}

export interface SourceRatingSummary {
  source: ReviewSource;
  rating: number; // e.g. 4.8 or 9.4
  maxRating?: number; // 5 by default, 10 for Booking.com or TheFork
  reviewCount?: number;
  url?: string; // Direct link to verified listing page on this platform
}

export interface PlaceReviewsData {
  /**
   * Summary ratings across platforms (Google, Tripadvisor, Booking, etc.)
   * Used to calculate the overall average camel score and platform badges.
   */
  sources?: SourceRatingSummary[];
  /** Array of individual review quotes and details */
  reviews: SingleReview[];
  /** Optional overall rating override (if not provided, computed from sources) */
  overallRating?: number;
  /** Optional total review count override */
  totalReviewCount?: number;
}

/**
 * Calculates the relative time difference from a posted date string compared to today.
 * e.g. "3 days ago", "2 weeks ago", "4 months ago", "1 year ago"
 */
export function formatRelativeTime(
  dateString: string,
  lang: 'en' | 'fr' | 'es' | 'de' | 'ar' = 'en'
): string {
  const labels = {
    en: {
      recently: 'Recently',
      justNow: 'Just now',
      minsAgo: (m: number) => `${m} mins ago`,
      hoursAgo: (h: number) => `${h} ${h === 1 ? 'hour' : 'hours'} ago`,
      yesterday: 'Yesterday',
      daysAgo: (d: number) => `${d} days ago`,
      weeksAgo: (w: number) => `${w} ${w === 1 ? 'week' : 'weeks'} ago`,
      monthsAgo: (m: number) => `${m} ${m === 1 ? 'month' : 'months'} ago`,
      yearsAgo: (y: number) => `${y} ${y === 1 ? 'year' : 'years'} ago`,
    },
    fr: {
      recently: 'Récemment',
      justNow: 'À l’instant',
      minsAgo: (m: number) => `Il y a ${m} min`,
      hoursAgo: (h: number) => `Il y a ${h} ${h === 1 ? 'heure' : 'heures'}`,
      yesterday: 'Hier',
      daysAgo: (d: number) => `Il y a ${d} jours`,
      weeksAgo: (w: number) => `Il y a ${w} ${w === 1 ? 'semaine' : 'semaines'}`,
      monthsAgo: (m: number) => `Il y a ${m} mois`,
      yearsAgo: (y: number) => `Il y a ${y} ${y === 1 ? 'an' : 'ans'}`,
    },
    es: {
      recently: 'Recientemente',
      justNow: 'Ahora mismo',
      minsAgo: (m: number) => `Hace ${m} min`,
      hoursAgo: (h: number) => `Hace ${h} ${h === 1 ? 'hora' : 'horas'}`,
      yesterday: 'Ayer',
      daysAgo: (d: number) => `Hace ${d} días`,
      weeksAgo: (w: number) => `Hace ${w} ${w === 1 ? 'semana' : 'semanas'}`,
      monthsAgo: (m: number) => `Hace ${m} ${m === 1 ? 'mes' : 'meses'}`,
      yearsAgo: (y: number) => `Hace ${y} ${y === 1 ? 'año' : 'años'}`,
    },
    de: {
      recently: 'Kürzlich',
      justNow: 'Gerade eben',
      minsAgo: (m: number) => `Vor ${m} Min.`,
      hoursAgo: (h: number) => `Vor ${h} ${h === 1 ? 'Stunde' : 'Stunden'}`,
      yesterday: 'Gestern',
      daysAgo: (d: number) => `Vor ${d} Tagen`,
      weeksAgo: (w: number) => `Vor ${w} ${w === 1 ? 'Woche' : 'Wochen'}`,
      monthsAgo: (m: number) => `Vor ${m} ${m === 1 ? 'Monat' : 'Monaten'}`,
      yearsAgo: (y: number) => `Vor ${y} ${y === 1 ? 'Jahr' : 'Jahren'}`,
    },
    ar: {
      recently: 'مؤخراً',
      justNow: 'الآن',
      minsAgo: (m: number) => `منذ ${m} د`,
      hoursAgo: (h: number) => `منذ ${h} ساعات`,
      yesterday: 'أمس',
      daysAgo: (d: number) => `منذ ${d} أيام`,
      weeksAgo: (w: number) => `منذ ${w} أسابيع`,
      monthsAgo: (m: number) => `منذ ${m} أشهر`,
      yearsAgo: (y: number) => `منذ ${y} سنوات`,
    },
  }[lang] || {
    recently: 'Recently',
    justNow: 'Just now',
    minsAgo: (m: number) => `${m} mins ago`,
    hoursAgo: (h: number) => `${h} ${h === 1 ? 'hour' : 'hours'} ago`,
    yesterday: 'Yesterday',
    daysAgo: (d: number) => `${d} days ago`,
    weeksAgo: (w: number) => `${w} ${w === 1 ? 'week' : 'weeks'} ago`,
    monthsAgo: (m: number) => `${m} ${m === 1 ? 'month' : 'months'} ago`,
    yearsAgo: (y: number) => `${y} ${y === 1 ? 'year' : 'years'} ago`,
  };

  if (!dateString) return labels.recently;
  const parsed = new Date(dateString);
  if (isNaN(parsed.getTime())) return labels.recently;

  const now = new Date();
  const diffMs = now.getTime() - parsed.getTime();
  if (diffMs < 0) return labels.justNow;

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays === 0) {
    if (diffHours === 0) {
      if (diffMinutes <= 1) return labels.justNow;
      return labels.minsAgo(diffMinutes);
    }
    return labels.hoursAgo(diffHours);
  }

  if (diffDays === 1) return labels.yesterday;
  if (diffDays < 7) return labels.daysAgo(diffDays);

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) return labels.weeksAgo(diffWeeks);

  const diffMonths = Math.floor(diffDays / 30.4375);
  if (diffMonths < 12) return labels.monthsAgo(diffMonths);

  const diffYears = Math.floor(diffDays / 365.25);
  return labels.yearsAgo(diffYears);
}

/**
 * Normalizes platform ratings to a 5-point scale and computes the weighted average.
 */
export function computePlaceReviewScore(data?: PlaceReviewsData): {
  averageRating: number;
  totalCount: number;
} {
  if (!data) return { averageRating: 4.8, totalCount: 0 };
  if (data.overallRating && data.totalReviewCount) {
    return { averageRating: data.overallRating, totalCount: data.totalReviewCount };
  }

  const sources = data.sources || [];
  if (sources.length > 0) {
    let totalScoreSum = 0;
    let totalWeights = 0;
    let totalCount = 0;

    for (const s of sources) {
      const max = s.maxRating || 5;
      const normalizedScore = (s.rating / max) * 5;
      const count = s.reviewCount || 50;
      totalScoreSum += normalizedScore * count;
      totalWeights += count;
      totalCount += count;
    }

    if (totalWeights > 0) {
      const avg = Math.round((totalScoreSum / totalWeights) * 10) / 10;
      return {
        averageRating: Math.min(5, Math.max(1, avg)),
        totalCount: data.totalReviewCount || totalCount
      };
    }
  }

  // Fallback to average of individual reviews
  const reviews = data.reviews || [];
  if (reviews.length > 0) {
    const rated = reviews.filter(r => typeof r.rating === 'number');
    if (rated.length > 0) {
      const sum = rated.reduce((acc, r) => acc + (r.rating || 5), 0);
      const avg = Math.round((sum / rated.length) * 10) / 10;
      return { averageRating: avg, totalCount: reviews.length };
    }
  }

  return { averageRating: 4.8, totalCount: data.reviews?.length || 0 };
}

/**
 * Returns true only when real multi-platform sources or individual reviews exist.
 * Used to strictly hide both the upper ratings bar and bottom reviews section
 * until researched review data is present for a listing.
 */
export function hasPopulatedReviewsData(data?: PlaceReviewsData | null): boolean {
  if (!data) return false;
  const hasSources = Array.isArray(data.sources) && data.sources.length > 0;
  const hasReviews = Array.isArray(data.reviews) && data.reviews.length > 0;
  return hasSources || hasReviews;
}

