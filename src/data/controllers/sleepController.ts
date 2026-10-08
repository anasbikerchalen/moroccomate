/**
 * =========================================================================
 * SLEEP CONTROLLER — single source of truth for all stays, riads & hotels
 * =========================================================================
 *
 * Controls every city file in the sleep category from ONE place:
 * 1. Master catalog — all cities linked together.
 * 2. Global Tag Rules — structured fields (hasPool, hasBreakfast…) become
 *    real tags automatically, for every city, at read time.
 * 3. Owner's Extra Tags (Global Tag Manager) — add a new tag rule once below
 *    and it applies to all matching stays in every city instantly.
 * 4. Audit inspector — find missing tags & health fields across all cities.
 *
 * DATA INTEGRITY: read-time enrichment only — the collected real data is
 * never modified.
 */

import type { TagRule, CategoryAuditResult, TagAuditIssue } from './types';

// ── Master catalog: all sleep city files linked together ──
import { agadirSleep } from '../../listings/sleep/agadir.sleep';
import { alHoceimaSleep } from '../../listings/sleep/al_hoceima.sleep';
import { asilahSleep } from '../../listings/sleep/asilah.sleep';
import { casablancaSleep } from '../../listings/sleep/casablanca.sleep';
import { chefchaouenSleep } from '../../listings/sleep/chefchaouen.sleep';
import { dakhlaSleep } from '../../listings/sleep/dakhla.sleep';
import { el_jadidaSleep } from '../../listings/sleep/el_jadida.sleep';
import { essaouiraSleep } from '../../listings/sleep/essaouira.sleep';
import { fesSleep } from '../../listings/sleep/fes.sleep';
import { ifrane_azrouSleep } from '../../listings/sleep/ifrane_azrou.sleep';
import { imlil_toubkalSleep } from '../../listings/sleep/imlil_toubkal.sleep';
import { marrakechSleep } from '../../listings/sleep/marrakech.sleep';
import { meknesSleep } from '../../listings/sleep/meknes.sleep';
import { merzougaSleep } from '../../listings/sleep/merzouga.sleep';
import { mhamidSleep } from '../../listings/sleep/mhamid.sleep';
import { ouarzazateSleep } from '../../listings/sleep/ouarzazate.sleep';
import { ourikaSleep } from '../../listings/sleep/ourika.sleep';
import { ouzoudSleep } from '../../listings/sleep/ouzoud.sleep';
import { rabatSleep } from '../../listings/sleep/rabat.sleep';
import { saidiaSleep } from '../../listings/sleep/saidia.sleep';
import { tangierSleep } from '../../listings/sleep/tangier.sleep';
import { todra_dadesSleep } from '../../listings/sleep/todra_dades.sleep';
import { tetouan_martilSleep } from '../../listings/sleep/tetouan_martil.sleep';
import { taroudant_tafraouteSleep } from '../../listings/sleep/taroudant_tafraoute.sleep';
import { taghazoutSleep } from '../../listings/sleep/taghazout.sleep';

export const SLEEP_MASTER: any[] = [
  ...agadirSleep, ...alHoceimaSleep, ...asilahSleep, ...casablancaSleep,
  ...chefchaouenSleep, ...dakhlaSleep, ...el_jadidaSleep, ...essaouiraSleep,
  ...fesSleep, ...ifrane_azrouSleep, ...imlil_toubkalSleep, ...marrakechSleep,
  ...meknesSleep, ...merzougaSleep, ...mhamidSleep, ...ouarzazateSleep,
  ...ourikaSleep, ...ouzoudSleep, ...rabatSleep, ...saidiaSleep,
  ...tangierSleep, ...todra_dadesSleep, ...tetouan_martilSleep, ...taroudant_tafraouteSleep,
  ...taghazoutSleep,
];

// ── 1. GLOBAL TAG RULES — defined once, injected everywhere ──
const amenitiesText = (l: any): string =>
  [String(l?.amenities || ''), String(l?.roomFeatures || ''), String(l?.locationSummary || '')].join(' ').toLowerCase();

export const SLEEP_TAG_RULES: TagRule[] = [
  { tag: 'pool', condition: l => !!l?.hasPool },
  { tag: 'breakfast', condition: l => !!l?.hasBreakfast },
  { tag: 'ac', condition: l => !!l?.hasAC },
  { tag: 'heating', condition: l => !!l?.hasHeating },
  { tag: 'rooftop', condition: l => !!l?.hasRooftop },
  { tag: 'ensuite', condition: l => !!l?.hasEnsuite },
  { tag: 'hammam', condition: l => amenitiesText(l).includes('hammam') },
  { tag: 'spa', condition: l => amenitiesText(l).includes('spa') },
  { tag: 'wifi', condition: l => /wi-?fi/i.test(amenitiesText(l)) },
  { tag: 'quiet', condition: l => l?.crowdLevel === 'quiet' || /soundproof|quiet/i.test(amenitiesText(l)) },
  { tag: 'riad', condition: l => l?.type === 'riad' || l?.type === 'dar' },
  { tag: 'hotel', condition: l => l?.type === 'hotel' },
  { tag: 'hostel', condition: l => l?.type === 'hostel' },
  { tag: 'family', condition: l => (l?.groupTypes || []).some((g: any) => /famil|kids/i.test(String(g))) },
  { tag: 'couple', condition: l => (l?.groupTypes || []).some((g: any) => /couple/i.test(String(g))) },
  { tag: 'wheelchair-accessible', condition: l => !!l?.isWheelchairAccessible },
  { tag: 'medina', condition: l => !!l?.nearMedina },
  { tag: 'beach', condition: l => !!l?.nearBeach },
  { tag: 'parking', condition: l => !!l?.hasParking || /parking/i.test(amenitiesText(l)) },
  { tag: 'elevator', condition: l => !!l?.hasElevator },
  { tag: 'restaurant', condition: l => !!l?.hasRestaurant },
  { tag: 'bar', condition: l => !!l?.hasBar },
  { tag: 'gym', condition: l => !!l?.hasGym },
  { tag: 'hidden-gem', condition: l => !!l?.isHiddenGem },
];

// ── 2. OWNER'S EXTRA TAGS (Global Tag Manager) ──
// Add new tag rules ONCE here — they apply to every matching stay in every
// city instantly, without editing the 24 individual city files.
export const SLEEP_EXTRA_TAG_RULES: TagRule[] = [
  // Example of a real working rule:
  { tag: 'family-favorite', condition: l => !!l?.kidsStayFree || ((l?.groupTypes || []).some((g: any) => /famil/i.test(String(g))) && !!l?.hasPool) },
];

// ── 3. READ-TIME ENRICHMENT (non-mutating) ──
export function enrichSleepTags(listing: any): any {
  if (!listing) return listing;
  const raw = Array.isArray(listing.tags) ? listing.tags : [];
  const derived = [...SLEEP_TAG_RULES, ...SLEEP_EXTRA_TAG_RULES]
    .filter(rule => { try { return rule.condition(listing); } catch { return false; } })
    .map(rule => rule.tag);
  if (derived.every(t => raw.includes(t))) return listing; // nothing new — keep the original
  return { ...listing, tags: [...new Set([...raw, ...derived])] };
}

// ── 4. PUBLIC GETTERS — enriched, real data preserved ──
export function getAllSleepListings(): any[] {
  return SLEEP_MASTER.map(enrichSleepTags);
}

export function getSleepListingsByCity(city?: string): any[] {
  if (!city) return getAllSleepListings();
  const normalized = city.toLowerCase().trim().replace(/[\s-]/g, '_');
  return SLEEP_MASTER.filter(l => l?.city === normalized).map(enrichSleepTags);
}

// ── 5. AUDIT INSPECTOR — missing tags & health fields across all cities ──
export function auditSleepTags(): CategoryAuditResult {
  const missingTags: TagAuditIssue[] = [];
  const missingFields: TagAuditIssue[] = [];
  const dataIssues: TagAuditIssue[] = [];

  for (const l of SLEEP_MASTER) {
    if (!l?.id) continue;
    const raw = Array.isArray(l.tags) ? l.tags : [];

    // Boolean-derived tag mismatches (checked on the RAW data)
    for (const rule of SLEEP_TAG_RULES) {
      let matches = false;
      try { matches = rule.condition(l); } catch { /* ignore */ }
      if (matches && !raw.includes(rule.tag)) {
        missingTags.push({
          listingId: l.id, name: l.name, city: String(l.city || ''),
          issue: `structured data says '${rule.tag}' but the tag is missing from its tags array`
        });
      }
    }

    // Health fields
    const hasRating = (l.googleRating > 0) || (l.rating > 0) || (l.bookingRating > 0) || (l.tripadvisorRating > 0);
    if (!hasRating) missingFields.push({ listingId: l.id, name: l.name, city: String(l.city || ''), issue: 'no rating found' });
    if (!l.coordinates) missingFields.push({ listingId: l.id, name: l.name, city: String(l.city || ''), issue: 'no coordinates — distance & proximity features fall back' });
    if (!l.pricePerNight || l.pricePerNight <= 0) missingFields.push({ listingId: l.id, name: l.name, city: String(l.city || ''), issue: 'no price per night' });
    if (!l.description || String(l.description).trim().length < 20) missingFields.push({ listingId: l.id, name: l.name, city: String(l.city || ''), issue: 'description missing or too short' });
    if (!l.neighborhood) missingFields.push({ listingId: l.id, name: l.name, city: String(l.city || ''), issue: 'no neighborhood' });
  }

  const cities = new Set(SLEEP_MASTER.map(l => l?.city).filter(Boolean));
  return { category: 'sleep', totalListings: SLEEP_MASTER.length, citiesCovered: cities.size, missingTags, missingFields, dataIssues };
}