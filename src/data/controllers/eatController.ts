/**
 * =========================================================================
 * EAT CONTROLLER — single source of truth for all restaurants, stalls & cafés
 * =========================================================================
 *
 * Controls every city file in the eat category from ONE place:
 * 1. Master catalog — all cities linked together.
 * 2. Global Tag Rules — structured fields (isVegetarianFriendly, isHalal…)
 *    become real tags automatically, for every city, at read time.
 * 3. Owner's Extra Tags (Global Tag Manager) — add a new tag rule once below
 *    and it applies to all matching restaurants in every city instantly.
 * 4. Audit inspector — find missing tags & health fields across all cities.
 *
 * DATA INTEGRITY: read-time enrichment only — the collected real data is
 * never modified.
 */

import type { TagRule, CategoryAuditResult, TagAuditIssue } from './types';

// ── Master catalog: all eat city files linked together ──
import { agadirEat } from '../../listings/eat/agadir.eat';
import { al_hoceimaEat } from '../../listings/eat/al_hoceima.eat';
import { asilahEat } from '../../listings/eat/asilah.eat';
import { casablancaEat } from '../../listings/eat/casablanca.eat';
import { chefchaouenEat } from '../../listings/eat/chefchaouen.eat';
import { dakhlaEat } from '../../listings/eat/dakhla.eat';
import { el_jadidaEat } from '../../listings/eat/el_jadida.eat';
import { essaouiraEat } from '../../listings/eat/essaouira.eat';
import { fesEat } from '../../listings/eat/fes.eat';
import { ifrane_azrouEat } from '../../listings/eat/ifrane_azrou.eat';
import { marrakechEat } from '../../listings/eat/marrakech.eat';
import { meknesEat } from '../../listings/eat/meknes.eat';
import { merzougaEat } from '../../listings/eat/merzouga.eat';
import { ouarzazateEat } from '../../listings/eat/ouarzazate.eat';
import { rabatEat } from '../../listings/eat/rabat.eat';
import { saidiaEat } from '../../listings/eat/saidia.eat';
import { taghazoutEat } from '../../listings/eat/taghazout.eat';
import { tangierEat } from '../../listings/eat/tangier.eat';
import { tetouan_martilEat } from '../../listings/eat/tetouan_martil.eat';
import { taroudant_tafraouteEat } from '../../listings/eat/taroudant_tafraoute.eat';

export const EAT_MASTER: any[] = [
  ...agadirEat, ...al_hoceimaEat, ...asilahEat, ...casablancaEat,
  ...chefchaouenEat, ...dakhlaEat, ...el_jadidaEat, ...essaouiraEat,
  ...fesEat, ...ifrane_azrouEat, ...marrakechEat, ...meknesEat,
  ...merzougaEat, ...ouarzazateEat, ...rabatEat, ...saidiaEat,
  ...taghazoutEat, ...tangierEat, ...tetouan_martilEat, ...taroudant_tafraouteEat,
];

// ── 1. GLOBAL TAG RULES — defined once, injected everywhere ──
const eatStyleText = (l: any): string =>
  [String(l?.viewType || ''), String(l?.seatingTypes || ''), String(l?.atmosphere || '')].join(' ').toLowerCase();

const hasMealType = (l: any, meal: string): boolean =>
  (l?.mealTypes || []).some((m: any) => String(m).toLowerCase() === meal);

export const EAT_TAG_RULES: TagRule[] = [
  { tag: 'vegetarian', condition: l => !!l?.isVegetarianFriendly },
  { tag: 'halal', condition: l => !!l?.isHalal || l?.halalStatus === 'halal-certified' },
  { tag: 'alcohol', condition: l => !!l?.servesAlcohol || l?.alcoholPolicy === 'serves-alcohol' },
  { tag: 'dry', condition: l => l?.alcoholPolicy === 'dry' },
  { tag: 'breakfast', condition: l => hasMealType(l, 'breakfast') },
  { tag: 'lunch', condition: l => hasMealType(l, 'lunch') },
  { tag: 'dinner', condition: l => hasMealType(l, 'dinner') },
  { tag: 'late-night', condition: l => hasMealType(l, 'latenight') },
  { tag: 'brunch', condition: l => hasMealType(l, 'brunch') },
  { tag: 'rooftop', condition: l => /rooftop/i.test(eatStyleText(l)) },
  { tag: 'terrace', condition: l => /terrace|terrasse/i.test(eatStyleText(l)) },
  { tag: 'street-food', condition: l => (l?.foodStyles || []).some((s: any) => /street/i.test(String(s))) },
  { tag: 'wifi', condition: l => !!l?.wiFi },
  { tag: 'ac', condition: l => !!l?.airConditioning },
  { tag: 'medina', condition: l => !!l?.nearMedina },
  { tag: 'beach', condition: l => !!l?.nearBeach },
  { tag: 'delivery', condition: l => !!l?.hasDelivery },
  { tag: 'parking', condition: l => !!l?.hasParking },
  { tag: 'family', condition: l => (l?.groupTypes || []).some((g: any) => /famil|kids/i.test(String(g))) },
  { tag: 'couple', condition: l => (l?.groupTypes || []).some((g: any) => /couple/i.test(String(g))) },
  { tag: 'wheelchair-accessible', condition: l => !!l?.wheelchairAccessible },
  { tag: 'budget', condition: l => l?.lifestyle === 'lean' },
  { tag: 'fine', condition: l => l?.lifestyle === 'premium' },
  { tag: 'hidden-gem', condition: l => !!l?.isHiddenGem || l?.badge === 'hidden-gem' },
  { tag: 'local-favorite', condition: l => l?.badge === 'local-favorite' },
];

// ── 2. OWNER'S EXTRA TAGS (Global Tag Manager) ──
// Add new tag rules ONCE here — they apply to every matching restaurant in
// every city instantly, without editing the 20 individual city files.
export const EAT_EXTRA_TAG_RULES: TagRule[] = [
  // Example of a real working rule:
  { tag: 'ramadan-friendly', condition: l => l?.ramadanFriendly === 'serves-lunch' || l?.ramadanFriendly === 'special-ftour' },
];

// ── 3. READ-TIME ENRICHMENT (non-mutating) ──
export function enrichEatTags(listing: any): any {
  if (!listing) return listing;
  const raw = Array.isArray(listing.tags) ? listing.tags : [];
  const derived = [...EAT_TAG_RULES, ...EAT_EXTRA_TAG_RULES]
    .filter(rule => { try { return rule.condition(listing); } catch { return false; } })
    .map(rule => rule.tag);
  if (derived.every(t => raw.includes(t))) return listing; // nothing new — keep the original
  return { ...listing, tags: [...new Set([...raw, ...derived])] };
}

// ── 4. PUBLIC GETTERS — enriched, real data preserved ──
export function getAllEatListings(): any[] {
  return EAT_MASTER.map(enrichEatTags);
}

export function getEatListingsByCity(city?: string): any[] {
  if (!city) return getAllEatListings();
  const normalized = city.toLowerCase().trim().replace(/[\s-]/g, '_');
  return EAT_MASTER.filter(l => l?.city === normalized).map(enrichEatTags);
}

// ── 5. AUDIT INSPECTOR — missing tags & health fields across all cities ──
export function auditEatTags(): CategoryAuditResult {
  const missingTags: TagAuditIssue[] = [];
  const missingFields: TagAuditIssue[] = [];
  const dataIssues: TagAuditIssue[] = [];

  for (const l of EAT_MASTER) {
    if (!l?.id) continue;
    const city = String(l.city || '');
    const raw = Array.isArray(l.tags) ? l.tags : [];

    // Boolean-derived tag mismatches (checked on the RAW data)
    for (const rule of EAT_TAG_RULES) {
      let matches = false;
      try { matches = rule.condition(l); } catch { /* ignore */ }
      if (matches && !raw.includes(rule.tag)) {
        missingTags.push({
          listingId: l.id, name: l.name, city,
          issue: `structured data says '${rule.tag}' but the tag is missing from its tags array`
        });
      }
    }

    // Data quality problems
    if (l.verificationStatus === 'possibly-closed') dataIssues.push({ listingId: l.id, name: l.name, city, issue: 'possibly closed — verify it still exists' });
    if (l.verificationStatus === 'wrong-city') dataIssues.push({ listingId: l.id, name: l.name, city, issue: 'marked wrong-city — fix or remove' });
    if (l.isTemporarilyHidden === true) dataIssues.push({ listingId: l.id, name: l.name, city, issue: 'temporarily hidden' });

    // Health fields
    const hasRating = (l.rating > 0) || (l.googleRating > 0) || (l.tripadvisorRating > 0) || (l.theforkRating > 0) || (l.restaurantguruRating > 0);
    if (!hasRating) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no rating found' });
    if (!l.exactAddressAndCoordinates) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no exact address & coordinates — distance features fall back' });
    if (!l.pricePerPerson || l.pricePerPerson <= 0) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no price per person' });
    if (!l.description || String(l.description).trim().length < 20) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'description missing or too short' });
    if (!l.neighborhood) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no neighborhood' });
    if (!l.googleMapsUrl) missingFields.push({ listingId: l.id, name: l.name, city, issue: 'no Google Maps link' });
    if (l.halalStatus === 'unknown') missingFields.push({ listingId: l.id, name: l.name, city, issue: 'halal status unknown' });
  }

  const cities = new Set(EAT_MASTER.map(l => l?.city).filter(Boolean));
  return { category: 'eat', totalListings: EAT_MASTER.length, citiesCovered: cities.size, missingTags, missingFields, dataIssues };
}