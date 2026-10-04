/**
 * =========================================================================
 * THINGS CONTROLLER — single source of truth for all activities, monuments
 * & tours across all cities
 * =========================================================================
 *
 * Controls every city file in the things category from ONE place:
 * 1. Master catalog — all cities linked together.
 * 2. Global Tag Rules — structured fields (hasPrivateOption, hasSunsetView…)
 *    become real tags automatically, for every city, at read time.
 * 3. Owner's Extra Tags (Global Tag Manager) — add a new tag rule once below
 *    and it applies to all matching activities in every city instantly.
 * 4. Audit inspector — find missing tags & health fields across all cities.
 *
 * DATA INTEGRITY: read-time enrichment only — the collected real data is
 * never modified.
 */

import type { TagRule, CategoryAuditResult, TagAuditIssue } from './types';

// ── Master catalog: all things city files linked together ──
import { agadirThings } from '../../listings/things/agadir.things';
import { al_hoceimaThings } from '../../listings/things/al_hoceima.things';
import { asilahThings } from '../../listings/things/asilah.things';
import { casablancaThings } from '../../listings/things/casablanca.things';
import { chefchaouenThings } from '../../listings/things/chefchaouen.things';
import { dakhlaThings } from '../../listings/things/dakhla.things';
import { el_jadidaThings } from '../../listings/things/el_jadida.things';
import { essaouiraThings } from '../../listings/things/essaouira.things';
import { fesThings } from '../../listings/things/fes.things';
import { ifrane_azrouThings } from '../../listings/things/ifrane_azrou.things';
import { marrakechThings } from '../../listings/things/marrakech.things';
import { meknesThings } from '../../listings/things/meknes.things';
import { merzougaThings } from '../../listings/things/merzouga.things';
import { ouarzazateThings } from '../../listings/things/ouarzazate.things';
import { rabatThings } from '../../listings/things/rabat.things';
import { saidiaThings } from '../../listings/things/saidia.things';
import { tangierThings } from '../../listings/things/tangier.things';
import { tetouan_martilThings } from '../../listings/things/tetouan_martil.things';
import { taroudant_tafraouteThings } from '../../listings/things/taroudant_tafraoute.things';

export const THINGS_MASTER: any[] = [
  ...agadirThings, ...al_hoceimaThings, ...asilahThings, ...casablancaThings,
  ...chefchaouenThings, ...dakhlaThings, ...el_jadidaThings, ...essaouiraThings,
  ...fesThings, ...ifrane_azrouThings, ...marrakechThings, ...meknesThings,
  ...merzougaThings, ...ouarzazateThings, ...rabatThings, ...saidiaThings,
  ...tangierThings, ...tetouan_martilThings, ...taroudant_tafraouteThings,
];

// ── 1. GLOBAL TAG RULES — defined once, injected everywhere ──
export const THINGS_TAG_RULES: TagRule[] = [
  { tag: 'private', condition: l => !!l?.hasPrivateOption },
  { tag: 'sunset', condition: l => !!l?.hasSunsetView },
  { tag: 'relaxed', condition: l => l?.energyLevel === 'relaxed' },
  { tag: 'active', condition: l => l?.energyLevel === 'active' || l?.energyLevel === 'intense' },
  { tag: 'family', condition: l => !!l?.isKidFriendly },
  { tag: 'wheelchair-accessible', condition: l => !!l?.isWheelchairAccessible },
  { tag: 'wifi', condition: l => !!l?.hasWiFi },
  { tag: 'ac', condition: l => !!l?.hasAC },
  { tag: 'medina', condition: l => !!l?.nearMedina },
  { tag: 'beach', condition: l => !!l?.nearBeach },
  { tag: 'walk-in', condition: l => !!l?.walkInOkay },
  { tag: 'booking-required', condition: l => !!l?.bookingRequired },
  { tag: 'photography', condition: l => !!l?.isPhotographyFriendly },
  { tag: 'rainy-day-ok', condition: l => !!l?.goodForRain },
  { tag: 'english-guide', condition: l => !!l?.hasEnglishGuide },
  { tag: 'french-guide', condition: l => !!l?.hasFrenchGuide },
  { tag: 'hidden-gem', condition: l => !!l?.isHiddenGem },
];

// ── 2. OWNER'S EXTRA TAGS (Global Tag Manager) ──
// Add new tag rules ONCE here — they apply to every matching activity in
// every city instantly, without editing the 19 individual city files.
export const THINGS_EXTRA_TAG_RULES: TagRule[] = [
  // Example of a real working rule (long immersion = full-day or 2h+ visit):
  { tag: 'full-day', condition: l => (Number(l?.durationMinutes) || 0) >= 240 },
];

// ── 3. READ-TIME ENRICHMENT (non-mutating) ──
export function enrichThingsTags(listing: any): any {
  if (!listing) return listing;
  const raw = Array.isArray(listing.tags) ? listing.tags : [];
  const derived = [...THINGS_TAG_RULES, ...THINGS_EXTRA_TAG_RULES]
    .filter(rule => { try { return rule.condition(listing); } catch { return false; } })
    .map(rule => rule.tag);
  if (derived.every(t => raw.includes(t))) return listing; // nothing new — keep the original
  return { ...listing, tags: [...new Set([...raw, ...derived])] };
}

// ── 4. PUBLIC GETTERS — enriched, real data preserved ──
export function getAllThingsListings(): any[] {
  return THINGS_MASTER.map(enrichThingsTags);
}

export function getThingsListingsByCity(city?: string): any[] {
  if (!city) return getAllThingsListings();
  const normalized = city.toLowerCase().trim().replace(/[\s-]/g, '_');
  return THINGS_MASTER.filter(l => l?.city === normalized).map(enrichThingsTags);
}

// ── 5. AUDIT INSPECTOR — missing tags & health fields across all cities ──
export function auditThingsTags(): CategoryAuditResult {
  const missingTags: TagAuditIssue[] = [];
  const missingFields: TagAuditIssue[] = [];
  const dataIssues: TagAuditIssue[] = [];

  for (const l of THINGS_MASTER) {
    if (!l?.id) continue;
    const city = String(l.city || '');
    const raw = Array.isArray(l.tags) ? l.tags : [];

    // Boolean-derived tag mismatches (checked on the RAW data)
    for (const rule of THINGS_TAG_RULES) {
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
    const hasRating = (l.googleRating > 0) || (l.rating > 0) || (l.tripadvisorRating > 0);
    if (!hasRating) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no rating found' });
    if (!l.googleMapsUrl) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no Google Maps link' });
    if (!l.price || l.price < 0) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no ticket price' });
    if (!l.description || String(l.description).trim().length < 20) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'description missing or too short' });
    if (!l.neighborhood) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no neighborhood' });
    if (!l.durationMinutes || l.durationMinutes <= 0) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no duration' });
  }

  const cities = new Set(THINGS_MASTER.map(l => l?.city).filter(Boolean));
  return { category: 'things', totalListings: THINGS_MASTER.length, citiesCovered: cities.size, missingTags, missingFields, dataIssues };
}