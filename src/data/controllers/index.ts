/**
 * =========================================================================
 * CATEGORY CONTROLLERS — barrel & combined runner
 * =========================================================================
 *
 * Single entry point for the data control layer:
 * - auditCategoryTags(category) — one category audit report
 * - auditAllCategories() — all four categories at once
 * - enrichListingTags(listing) — read-time tag enrichment dispatcher used by
 *   the central listings registry, so the search system & quiz instantly
 *   benefit from every global tag rule.
 */

export * from './types';
export * from './sleepController';
export * from './eatController';
export * from './thingsController';
export * from './shopController';

import type { CategoryAuditResult, ControllerCategory } from './types';
import { auditSleepTags } from './sleepController';
import { auditEatTags } from './eatController';
import { auditThingsTags } from './thingsController';
import { auditShopTags } from './shopController';
import { enrichSleepTags } from './sleepController';
import { enrichEatTags } from './eatController';
import { enrichThingsTags } from './thingsController';
import { enrichShopTags } from './shopController';

/** Audit one category: 'sleep' | 'eat' | 'things' | 'shop' */
export function auditCategoryTags(category: ControllerCategory): CategoryAuditResult {
  switch (category) {
    case 'sleep': return auditSleepTags();
    case 'eat': return auditEatTags();
    case 'things': return auditThingsTags();
    case 'shop': return auditShopTags();
  }
}

/** Audit all four categories at once */
export function auditAllCategories(): CategoryAuditResult[] {
  return (['sleep', 'eat', 'things', 'shop'] as ControllerCategory[]).map(auditCategoryTags);
}

/**
 * Read-time enrichment dispatcher — detects the listing's category from its
 * own structured shape and applies that category's global tag rules.
 * Non-mutating: returns the original listing when nothing new applies.
 */
export function enrichListingTags(listing: any): any {
  if (!listing) return listing;
  if (listing.pricePerNight !== undefined) return enrichSleepTags(listing);
  if (listing.mealTypes !== undefined || listing.pricePerPerson !== undefined) return enrichEatTags(listing);
  if (listing.durationMinutes !== undefined || listing.energyLevel !== undefined) return enrichThingsTags(listing);
  if (listing.productCategories !== undefined) return enrichShopTags(listing);
  return listing;
}