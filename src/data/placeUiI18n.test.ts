import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PLACE_UI_I18N,
  getPlaceUiCopy,
  localizeCityName,
  localizeCuisineLabel,
  localizeExperienceBadge,
  localizeMealType,
  localizeGroupType,
  localizeSeatingType,
  localizeViewType,
  localizePaymentMethod,
  localizeLanguageSpoken,
  localizeDayName,
} from './placeUiI18n';
import type { AppLanguage } from '../utils/localeRouting';
import { getEatWeeklySchedule, getShopStatus } from '../utils/timeEngine';
import { formatRelativeTime } from '../types/reviews';
import { formatNearbyTravelLabel } from '../engine/proximityEngine';
import { buildPlaceFaqs } from './seo/faqEngine';

const ALL_LANGS: AppLanguage[] = ['en', 'fr', 'es', 'de', 'ar'];

function collectLeafPaths(obj: any, prefix = ''): Array<{ path: string; type: 'string' | 'fn'; value: any }> {
  const out: Array<{ path: string; type: 'string' | 'fn'; value: any }> = [];
  for (const key of Object.keys(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (typeof val === 'string') {
      out.push({ path, type: 'string', value: val });
    } else if (typeof val === 'function') {
      out.push({ path, type: 'fn', value: val });
    } else if (val && typeof val === 'object') {
      out.push(...collectLeafPaths(val, path));
    }
  }
  return out;
}

test('PLACE_UI_I18N has full key parity and non-empty translations across all 5 languages', () => {
  const baseLeaves = collectLeafPaths(PLACE_UI_I18N.en);
  assert.ok(baseLeaves.length > 150);

  for (const lang of ALL_LANGS) {
    const copy = getPlaceUiCopy(lang);
    const leaves = collectLeafPaths(copy);
    assert.deepEqual(
      leaves.map((l) => `${l.path}:${l.type}`).sort(),
      baseLeaves.map((l) => `${l.path}:${l.type}`).sort(),
      `Missing or mismatched keys for locale "${lang}"`
    );

    for (const leaf of leaves) {
      if (leaf.type === 'string') {
        assert.ok(leaf.value.trim().length > 0, `Empty string at ${lang}.${leaf.path}`);
      } else {
        const res = String(leaf.value('Test', 5));
        assert.ok(res.trim().length > 0, `Empty formatter output at ${lang}.${leaf.path}`);
      }
    }
  }
});

test('localizeCityName translates Moroccan cities accurately per locale', () => {
  assert.equal(localizeCityName('agadir', 'Agadir', 'en'), 'Agadir');
  assert.equal(localizeCityName('agadir', 'Agadir', 'fr'), 'Agadir');
  assert.equal(localizeCityName('agadir', 'Agadir', 'ar'), 'أكادير');
  assert.equal(localizeCityName('marrakech', 'Marrakech', 'de'), 'Marrakesch');
  assert.equal(localizeCityName('fes', 'Fes', 'es'), 'Fez');
  assert.equal(localizeCityName('tangier', 'Tangier', 'fr'), 'Tanger');
  assert.equal(localizeCityName('essaouira', 'Essaouira', 'es'), 'Esauira');
  assert.equal(localizeCityName('casablanca', 'Casablanca', 'ar'), 'الدار البيضاء');
});

test('lookup translators return non-English translations for fr/es/de/ar and keep clean English', () => {
  assert.equal(localizeCuisineLabel('Seafood', 'en'), 'Seafood');
  assert.equal(localizeExperienceBadge('fine-dining', 'en'), 'fine dining');
  assert.equal(localizeMealType('Breakfast', 'en'), 'Breakfast');
  assert.equal(localizeGroupType('solo-travelers', 'en'), 'Solo travelers');
  assert.equal(localizeDayName('Monday', 'en'), 'Monday');

  for (const lang of ['fr', 'es', 'de', 'ar'] as const) {
    assert.notEqual(localizeCuisineLabel('Moroccan', lang), 'Moroccan');
    assert.notEqual(localizeExperienceBadge('fine-dining', lang), 'fine dining');
    assert.notEqual(localizeMealType('Breakfast', lang), 'Breakfast');
    assert.notEqual(localizeGroupType('Families', lang), 'Families');
    assert.notEqual(localizeSeatingType('Terrace', lang), 'Terrace');
    assert.notEqual(localizeViewType('Ocean', lang), 'Ocean');
    assert.notEqual(localizePaymentMethod('Cash', lang), 'Cash');
    assert.notEqual(localizeLanguageSpoken('French', lang), 'French');
    assert.notEqual(localizeDayName('Friday', lang), 'Friday');
  }
});

test('timeEngine getShopStatus & getEatWeeklySchedule localize labels per language', () => {
  // 2026-06-15T14:00:00Z is Monday 15:00 in Africa/Casablanca (UTC+1 summer or UTC)
  const testDate = new Date('2026-06-15T14:00:00Z');
  const enStatus = getShopStatus('09:00 - 23:00', undefined, undefined, testDate, 'en');
  const frStatus = getShopStatus('09:00 - 23:00', undefined, undefined, testDate, 'fr');
  const esStatus = getShopStatus('09:00 - 23:00', undefined, undefined, testDate, 'es');
  const deStatus = getShopStatus('09:00 - 23:00', undefined, undefined, testDate, 'de');
  const arStatus = getShopStatus('09:00 - 23:00', undefined, undefined, testDate, 'ar');

  assert.match(enStatus.label, /Open/i);
  assert.match(frStatus.label, /Ouvert/i);
  assert.match(esStatus.label, /Abierto/i);
  assert.match(deStatus.label, /Geöffnet/i);
  assert.match(arStatus.label, /مفتوح/);

  const enSched = getEatWeeklySchedule({ openTime: '10:00', closeTime: '22:00', closedDays: ['Sunday'] }, testDate, 'en');
  const frSched = getEatWeeklySchedule({ openTime: '10:00', closeTime: '22:00', closedDays: ['Sunday'] }, testDate, 'fr');
  const arSched = getEatWeeklySchedule({ openTime: '10:00', closeTime: '22:00', closedDays: ['Sunday'] }, testDate, 'ar');

  assert.equal(enSched.schedule[6].hoursText, 'Closed');
  assert.equal(frSched.schedule[6].hoursText, 'Fermé');
  assert.equal(arSched.schedule[6].hoursText, 'مغلق');
});

test('formatRelativeTime and formatNearbyTravelLabel localize across all 5 languages', () => {
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString();
  assert.match(formatRelativeTime(twoDaysAgo, 'en'), /2 days ago/);
  assert.match(formatRelativeTime(twoDaysAgo, 'fr'), /Il y a 2 jours/);
  assert.match(formatRelativeTime(twoDaysAgo, 'es'), /Hace 2 días/);
  assert.match(formatRelativeTime(twoDaysAgo, 'de'), /Vor 2 Tagen/);
  assert.match(formatRelativeTime(twoDaysAgo, 'ar'), /منذ/);

  const walkSpot = { walking_time_minutes: 8, travel_mode: 'walk' as const, travel_time_minutes: 8 };
  const driveSpot = { walking_time_minutes: 50, travel_mode: 'drive' as const, travel_time_minutes: 15 };
  assert.equal(formatNearbyTravelLabel(walkSpot, 'en'), '8 min walk');
  assert.equal(formatNearbyTravelLabel(walkSpot, 'fr'), '8 min à pied');
  assert.equal(formatNearbyTravelLabel(walkSpot, 'es'), '8 min a pie');
  assert.equal(formatNearbyTravelLabel(walkSpot, 'de'), '8 Min. zu Fuß');
  assert.equal(formatNearbyTravelLabel(walkSpot, 'ar'), '8 د مشياً');
  assert.equal(formatNearbyTravelLabel(driveSpot, 'fr'), '15 min en voiture');
});

test('buildPlaceFaqs generates localized eat FAQs including items 4-6 for fr/es/de/ar', () => {
  const sampleListing = {
    ui: {
      name: 'Amsterdam Luxury',
      openTime: '08:00',
      closeTime: '23:00',
      address: 'Marina Agadir, Agadir',
      neighborhood: 'Marina',
      reservationMethod: ['whatsapp'],
      reservationContact: '+212600000000',
      bestDishes: ['Royal Tajine', 'Seafood Platter'],
    },
    filter: {
      isHalal: true,
      alcoholPolicy: 'dry',
      isVegetarianFriendly: true,
      hasParking: true,
      paymentMethods: ['cash', 'card'],
      pricePerPerson: 25,
    },
    quiz: {
      foodStyles: ['Moroccan', 'Seafood'],
    },
  };

  for (const lang of ALL_LANGS) {
    const faqs = buildPlaceFaqs({
      listing: sampleListing,
      category: 'food',
      cityLabel: localizeCityName('agadir', 'Agadir', lang),
      lang,
    });
    assert.ok(faqs.length >= 6, `Expected >= 6 FAQs for ${lang}, got ${faqs.length}`);
    if (lang !== 'en') {
      // Ensure reservations, cuisine, and location questions (4-6) are not falling back to English
      for (const item of faqs) {
        assert.doesNotMatch(item.question, /^Do I need a reservation|^What type of food|^Where is /);
      }
    }
  }
});
