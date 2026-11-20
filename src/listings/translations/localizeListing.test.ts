import test from 'node:test';
import assert from 'node:assert/strict';
import { listingsRegistry } from '../index';
import {
  hasListingTranslations,
  localizeListing,
  LISTING_TRANSLATIONS,
} from './index';
import { resolveEatWorries } from '../../utils/eatWorriesResolver';
import { buildPlaceFaqs } from '../../data/seo/faqEngine';
import { NON_DEFAULT_LANGS } from '../../utils/localeRouting';

test('agadir-eat has complete fr/es/de/ar translations for all 58 listings', () => {
  const listings = listingsRegistry['agadir-eat'] || [];
  assert.equal(listings.length, 58);

  const missing: string[] = [];
  for (const item of listings) {
    const id = String(item.id);
    if (!hasListingTranslations(id)) {
      missing.push(id);
      continue;
    }
    for (const lang of NON_DEFAULT_LANGS) {
      const tr = LISTING_TRANSLATIONS[id]?.[lang];
      assert.ok(tr, `Missing ${lang} entry for ${id}`);
      assert.ok(
        tr.description && tr.description.trim().length > 15,
        `Empty description for ${id} (${lang})`
      );
      assert.ok(
        tr.tip && tr.tip.trim().length > 10,
        `Empty tip for ${id} (${lang})`
      );
      assert.ok(
        Array.isArray(tr.pros) && tr.pros.length > 0,
        `Missing pros for ${id} (${lang})`
      );
      assert.ok(
        Array.isArray(tr.cons) && tr.cons.length > 0,
        `Missing cons for ${id} (${lang})`
      );
    }
  }

  assert.deepEqual(missing, []);
});

test('localizeListing overlays translated fields while preserving images, tones, and English fallback', () => {
  const listings = listingsRegistry['agadir-eat'] || [];
  const amsterdam = listings.find((l) => l.id === 'e-agadir-amsterdam-luxury');
  assert.ok(amsterdam, 'e-agadir-amsterdam-luxury exists');

  // English returns the exact reference untouched
  assert.equal(localizeListing(amsterdam, 'en'), amsterdam);

  // Untranslated ID falls back gracefully to original object
  const fake = { id: 'e-unknown-city-foo', description: 'English copy' };
  assert.equal(localizeListing(fake, 'fr'), fake);

  for (const lang of NON_DEFAULT_LANGS) {
    const localized = localizeListing(amsterdam, lang);
    assert.notEqual(localized.description, amsterdam.description);
    assert.notEqual(localized.tip, amsterdam.tip);
    assert.equal(localized._localizedLang, lang);
    assert.equal(localized.name, amsterdam.name);
    assert.equal(localized.pricePerPerson, amsterdam.pricePerPerson);

    // Worries preserve tone, tagColor, image, icon while translating text
    const origWorries = resolveEatWorries(amsterdam.worries || amsterdam.ui?.worries);
    const locWorries = resolveEatWorries(localized.worries || localized.ui?.worries);
    assert.ok(origWorries && locWorries);
    assert.equal(locWorries.length, origWorries.length);
    for (let i = 0; i < origWorries.length; i++) {
      assert.equal(locWorries[i].id, origWorries[i].id);
      assert.equal(locWorries[i].tone, origWorries[i].tone);
      assert.equal(locWorries[i].tagColor, origWorries[i].tagColor);
      assert.equal(locWorries[i].image, origWorries[i].image);
      assert.notEqual(locWorries[i].description, origWorries[i].description);
    }

    // FAQs render in target language
    const faqs = buildPlaceFaqs({
      listing: localized,
      category: 'food',
      cityLabel: 'Agadir',
      lang,
    });
    assert.ok(faqs.length > 0);
    assert.notEqual(faqs[0].question, amsterdam.faqs?.[0]?.question);
  }
});
