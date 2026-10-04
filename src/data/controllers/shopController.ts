/**
 * =========================================================================
 * SHOP CONTROLLER — single source of truth for all artisan boutiques,
 * cooperatives & souks across all cities
 * =========================================================================
 *
 * Controls the shop category from ONE place:
 * 1. Master catalog — delegated to the canonical shop module backend
 *    (single source of truth — never duplicated).
 * 2. Global Tag Rules — structured fields (pricingModel, isVerified…)
 *    become real tags automatically, for every city, at read time.
 * 3. Owner's Extra Tags (Global Tag Manager) — add a new tag rule once below
 *    and it applies to all matching shops in every city instantly.
 * 4. Audit inspector — find missing tags & health fields across all cities.
 *
 * DATA INTEGRITY: read-time enrichment only — the collected real data is
 * never modified.
 */

import type { TagRule, CategoryAuditResult, TagAuditIssue } from './types';
import { SHOPS_BY_CITY } from '../../shop';

// ── 1. MASTER CATALOG — delegated to the canonical shop module backend ──
export const SHOP_MASTER: any[] = Object.values(SHOPS_BY_CITY).flat();

// ── 2. GLOBAL TAG RULES — defined once, injected everywhere ──
export const SHOP_TAG_RULES: TagRule[] = [
  { tag: 'fixed-price', condition: l => l?.pricingModel === 'fixed' },
  { tag: 'verified', condition: l => !!l?.isVerified },
  { tag: 'wheelchair-accessible', condition: l => !!l?.isWheelchairAccessible },
  { tag: 'delivery', condition: l => !!l?.hasDelivery },
  { tag: 'local-favorite', condition: l => !!l?.isLocalFavorite },
  { tag: 'workshop', condition: l => !!l?.workshopVisitable },
  { tag: 'supermarket', condition: l => l?.type === 'supermarket' },
  { tag: 'cooperative', condition: l => l?.type === 'cooperative' },
  { tag: 'souk', condition: l => l?.type === 'souk_stall' },
  { tag: 'boutique', condition: l => l?.type === 'boutique' },
  { tag: 'hidden-gem', condition: l => !!l?.isHiddenGem },
];

// ── 3. OWNER'S EXTRA TAGS (Global Tag Manager) ──
// Add new tag rules ONCE here — they apply to every matching shop in every
// city instantly, without editing the individual city files.
export const SHOP_EXTRA_TAG_RULES: TagRule[] = [
  // Example of a real working rule (certified fixed-price artisan center):
  { tag: 'no-haggling', condition: l => l?.pricingModel === 'fixed' && (l?.authenticitySeals || []).length > 0 },
];

// ── 4. READ-TIME ENRICHMENT (non-mutating) ──
export function enrichShopTags(listing: any): any {
  if (!listing) return listing;
  const raw = Array.isArray(listing.tags) ? listing.tags : [];
  const derived = [...SHOP_TAG_RULES, ...SHOP_EXTRA_TAG_RULES]
    .filter(rule => { try { return rule.condition(listing); } catch { return false; } })
    .map(rule => rule.tag);
  if (derived.every(t => raw.includes(t))) return listing; // nothing new — keep the original
  return { ...listing, tags: [...new Set([...raw, ...derived])] };
}

// ── 5. PUBLIC GETTERS — enriched, real data preserved ──
export function getAllShopListings(): any[] {
  return SHOP_MASTER.map(enrichShopTags);
}

export function getShopListingsByCity(city?: string): any[] {
  if (!city) return getAllShopListings();
  const normalized = city.toLowerCase().trim().replace(/[\s-]/g, '_');
  return (SHOP_MASTER.filter(l => l?.city === normalized)).map(enrichShopTags);
}

// ── 6. AUDIT INSPECTOR — missing tags & health fields across all cities ──
export function auditShopTags(): CategoryAuditResult {
  const missingTags: TagAuditIssue[] = [];
  const missingFields: TagAuditIssue[] = [];
  const dataIssues: TagAuditIssue[] = [];

  for (const l of SHOP_MASTER) {
    if (!l?.id) continue;
    const city = String(l.city || '');
    const raw = Array.isArray(l.tags) ? l.tags : [];

    // Boolean-derived tag mismatches (checked on the RAW data)
    for (const rule of SHOP_TAG_RULES) {
      let matches = false;
      try { matches = rule.condition(l); } catch { /* ignore */ }
      if (matches && !raw.includes(rule.tag)) {
        missingTags.push({
          listingId: l.id, name: l.name, city,
          issue: `structured data says '${rule.tag}' but the tag is missing from its tags array`
        });
      }
    }

    // Health fields
    const hasRating = (l.googleRating > 0) || (l.rating > 0);
    if (!hasRating) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no rating found' });
    if (!l.coordinates) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no coordinates — GPS closest-branch search cannot find it' });
    if (!l.googleMapsUrl) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no Google Maps link' });
    if (!l.address) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no address' });
    if (!l.description || String(l.description).trim().length < 20) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'description missing or too short' });
    if (!l.neighborhood) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no neighborhood' });
    if (!l.openingHours || l.openingHours.length === 0) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no opening hours' });
  }

  const cities = new Set(SHOP_MASTER.map(l => l?.city).filter(Boolean));
  return { category: 'shop', totalListings: SHOP_MASTER.length, citiesCovered: cities.size, missingTags, missingFields, dataIssues };
}