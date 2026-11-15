import type { WorryBoxData } from '../../data/prototype/worriesPrototype';
import type { PlaceReviewsData } from '../../types/reviews';
import { hasPopulatedReviewsData } from '../../types/reviews';

export interface ListingNavSection {
  id: string;
  label: string;
  targetId: string;
  fallbackTargetId?: string;
  available?: boolean;
  isSideColumnDesktop?: boolean;
  onBeforeScroll?: () => void;
}

export interface SectionPosition {
  id: string;
  top: number;
}

/**
 * Mirrors WorriesSection's strict no-hallucination gate so a Worries bubble
 * only renders when at least one worry box has real verified data.
 */
export function hasVerifiedWorries(worries?: WorryBoxData[] | null): boolean {
  if (!Array.isArray(worries) || worries.length === 0) return false;
  return worries.some(
    (w) => w.state === 'verified' || Boolean(w.tag && !w.tag.toLowerCase().includes('not available'))
  );
}

/**
 * Mirrors PlaceReviewsSection's strict data gate.
 */
export function hasVerifiedReviews(reviewsData?: PlaceReviewsData | null): boolean {
  return hasPopulatedReviewsData(reviewsData);
}

/**
 * Filters out sections lacking verified data and hides the bar entirely
 * if fewer than 2 sections are available to navigate between.
 */
export function filterAvailableNavItems<T extends { available?: boolean }>(items: T[]): T[] {
  const visible = items.filter((item) => item.available !== false);
  return visible.length >= 2 ? visible : [];
}

/**
 * Deterministic scroll-spy helper: picks the last mounted section whose top
 * has crossed above `threshold`, or the last section when scrolled to page bottom.
 */
export function computeActiveSectionId(
  positions: SectionPosition[],
  threshold: number,
  atPageBottom = false
): string | null {
  if (positions.length === 0) return null;
  if (atPageBottom) {
    return positions[positions.length - 1].id;
  }

  let active = positions[0].id;
  for (const pos of positions) {
    if (pos.top <= threshold) {
      active = pos.id;
    }
  }
  return active;
}
