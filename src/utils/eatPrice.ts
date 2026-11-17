import type { EatMenu } from '../listings/types';

export interface EatPriceMetrics {
  /** Raw internal scale (e.g. 6..65), preserved for quiz/sorting */
  rawScale: number;
  /** Typical per-person lower bound in MAD (rounded cleanly) */
  minPersonMad: number;
  /** Typical per-person upper bound in MAD (rounded cleanly) */
  maxPersonMad: number;
  /** Typical per-person midpoint in MAD (rounded cleanly) */
  avgPersonMad: number;
  /** Formatted typical per-person range, e.g. "230–460 MAD" */
  perPersonRangeText: string;
  /** Formatted typical average, e.g. "~340 MAD / person" */
  avgPersonText: string;
  /** Actual lowest priced dish from verified menu, if present */
  menuMinMad: number | null;
  /** Actual highest priced dish from verified menu, if present */
  menuMaxMad: number | null;
  /** Menu item price range text, e.g. "60–1,500 MAD" */
  menuRangeText: string | null;
}

function roundNiceMad(value: number): number {
  if (!Number.isFinite(value) || value <= 0) return 0;
  if (value <= 40) return Math.round(value / 5) * 5;
  return Math.round(value / 10) * 10;
}

export function extractMenuMinMax(menu?: EatMenu | null): { min: number; max: number } | null {
  if (!menu || !Array.isArray(menu.sections)) return null;
  let min = Infinity;
  let max = 0;
  for (const sec of menu.sections) {
    if (!Array.isArray(sec.items)) continue;
    for (const item of sec.items) {
      const p = Number(item?.price);
      if (Number.isFinite(p) && p > 0) {
        if (p < min) min = p;
        if (p > max) max = p;
      }
    }
  }
  if (!Number.isFinite(min) || max <= 0) return null;
  return { min: Math.round(min), max: Math.round(max) };
}

/**
 * Computes realistic, user-facing Moroccan Dirham (MAD) meal pricing from
 * an EatListing's internal `pricePerPerson` scale (1..150, where ×6..×12 gives MAD)
 * and structured menu prices when available.
 */
export function getEatPriceMetrics(listing: any): EatPriceMetrics {
  const rawScale = Number(listing?.filter?.pricePerPerson ?? listing?.pricePerPerson ?? 0);
  const menu: EatMenu | undefined = listing?.ui?.menu || listing?.menu;
  const menuRange = extractMenuMinMax(menu);

  let minPersonMad = 0;
  let maxPersonMad = 0;
  let avgPersonMad = 0;

  if (Number.isFinite(rawScale) && rawScale > 0) {
    minPersonMad = roundNiceMad(rawScale * 6);
    maxPersonMad = roundNiceMad(rawScale * 12);
    avgPersonMad = roundNiceMad(rawScale * 9);
  } else if (menuRange) {
    minPersonMad = roundNiceMad(menuRange.min);
    maxPersonMad = roundNiceMad(Math.min(menuRange.max, menuRange.min * 4));
    avgPersonMad = roundNiceMad((minPersonMad + maxPersonMad) / 2);
  }

  const perPersonRangeText =
    minPersonMad > 0 && maxPersonMad > 0
      ? minPersonMad === maxPersonMad
        ? `~${avgPersonMad} MAD`
        : `${minPersonMad}–${maxPersonMad} MAD`
      : '';

  const avgPersonText = avgPersonMad > 0 ? `~${avgPersonMad} MAD / person` : '';
  const menuRangeText = menuRange
    ? `${menuRange.min.toLocaleString('en-US')}–${menuRange.max.toLocaleString('en-US')} MAD`
    : null;

  return {
    rawScale,
    minPersonMad,
    maxPersonMad,
    avgPersonMad,
    perPersonRangeText,
    avgPersonText,
    menuMinMad: menuRange?.min ?? null,
    menuMaxMad: menuRange?.max ?? null,
    menuRangeText,
  };
}
