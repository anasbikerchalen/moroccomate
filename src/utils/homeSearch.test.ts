import test from 'node:test';
import assert from 'node:assert/strict';
import {
  RECOMMENDED_CITY_IDS,
  normalizeSearchText,
  orderTouristicCitiesByRecommendedId,
  searchHomeCatalog,
} from './homeSearch';

test('orderTouristicCitiesByRecommendedId preserves Fes despite grave accent', () => {
  const sample = [
    { id: 'tetouan', name: 'Tétouan' },
    { id: 'fes', name: 'Fès' },
    { id: 'marrakech', name: 'Marrakech' },
    { id: 'tanger', name: 'Tanger' },
    { id: 'agadir', name: 'Agadir' },
    { id: 'essaouira', name: 'Essaouira' },
    { id: 'chefchaouen', name: 'Chefchaouen' },
    { id: 'casablanca', name: 'Casablanca' },
  ];

  const ordered = orderTouristicCitiesByRecommendedId(sample);
  assert.deepEqual(
    ordered.slice(0, 7).map((c) => c.id),
    [...RECOMMENDED_CITY_IDS]
  );
  assert.equal(ordered[1].name, 'Fès');
});

test('normalizeSearchText folds accents and whitespace cleanly', () => {
  assert.equal(normalizeSearchText('  Fès  '), 'fes');
  assert.equal(normalizeSearchText('Café des Épices'), 'cafe des epices');
});

test('searchHomeCatalog finds verified places, activities, cities, and guides', () => {
  assert.deepEqual(searchHomeCatalog('   '), []);

  const restaurantHits = searchHomeCatalog('Al Fassia');
  assert.ok(restaurantHits.length > 0);
  assert.equal(restaurantHits[0].kind, 'food');
  assert.ok(restaurantHits[0].url.includes('/place/marrakech/food/al-fassia'));

  const thingHits = searchHomeCatalog('Bahia Palace');
  assert.ok(thingHits.some((r) => r.kind === 'things' && r.url === '/things/marrakech/bahia-palace'));

  const accentCityHits = searchHomeCatalog('fes');
  assert.ok(accentCityHits.some((r) => r.kind === 'city' && r.cityId === 'fes'));

  const guideHits = searchHomeCatalog('heated pool');
  assert.ok(guideHits.some((r) => r.kind === 'guide' && r.url.includes('heated-pools')));
});
