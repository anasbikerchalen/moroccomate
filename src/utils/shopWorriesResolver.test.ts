import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveShopWorries, CANONICAL_SHOP_WORRIES } from './shopWorriesResolver';
import { resolveEatWorries } from './eatWorriesResolver';
import { resolveThingsWorries } from './worriesResolver';
import { adaptToTemplateShop, deriveOpeningHours } from '../engine/shopTemplateAdapter';
import { getPlaceBySlug } from '../listings/placeRoutes';
import { getActivityByCityAndSlug } from '../things-to-do/backend';

test('resolveShopWorries enforces strict no-hallucination gate', () => {
  assert.equal(resolveShopWorries(undefined), null);
  assert.equal(resolveShopWorries([]), null);
  assert.equal(
    resolveShopWorries([
      { id: 'shop-scams', tag: 'not available', description: 'not available', state: 'pending' },
    ]),
    null
  );

  const resolved = resolveShopWorries([
    {
      id: 'shop-scams',
      tag: 'Official Chain',
      tagColor: 'safety',
      tone: 'good',
      description: 'Official mall store with zero touts.',
      state: 'verified',
    },
  ]);

  assert.ok(resolved);
  assert.equal(resolved.length, CANONICAL_SHOP_WORRIES.length);
  assert.equal(resolved[0].state, 'verified');
  assert.equal(resolved[0].tag, 'Official Chain');
  assert.equal(resolved[1].state, 'pending');
});

test('deriveOpeningHours expands grouped day ranges into full 7-day schedules', () => {
  const daily = deriveOpeningHours({
    openingHours: [{ day: 'Mon-Sun', hours: '09:30 - 21:00' }],
  });
  assert.equal(daily.schedule.length, 7);
  assert.ok(daily.schedule.every((d) => !d.is_closed && d.open_time === '09:30' && d.close_time === '21:00'));

  const monSat = deriveOpeningHours({
    openingHours: [{ day: 'Mon-Sat', hours: '10:00 - 13:00, 15:00 - 19:30' }],
    fridayHours: 'Midday closure 13:00 - 15:00',
  });
  assert.equal(monSat.schedule.length, 7);
  assert.equal(monSat.schedule[0].day_of_week, 'monday');
  assert.equal(monSat.schedule[0].is_closed, false);
  assert.equal(monSat.schedule[0].open_time, '10:00');
  assert.equal(monSat.schedule[0].close_time, '19:30');
  assert.equal(monSat.schedule[6].day_of_week, 'sunday');
  assert.equal(monSat.schedule[6].is_closed, true);
  assert.equal(monSat.note, 'Midday closure 13:00–15:00');
});

test('All 9 clicked GSC URLs resolve with verified facts, worries, and menus', () => {
  const shopTargets = [
    { city: 'marrakech', slug: 'decathlon-marrakech-al-mazar', neighborhood: 'Agdal' },
    { city: 'asilah', slug: 'the-spice-salt-garden-asilah', neighborhood: 'Médina Historique' },
    { city: 'ifrane_azrou', slug: 'carrefour-market-azrou', neighborhood: 'Ahadaf' },
    { city: 'chefchaouen', slug: 'bim-chefchaouen', neighborhood: 'Avenue du Maghreb Arabe (Gare Routière)' },
    { city: 'marrakech', slug: 'akbar-delights', neighborhood: 'Medina' },
    { city: 'agadir', slug: 'marina-dagadir-luxury-boutiques', neighborhood: 'Marina' },
  ];

  for (const target of shopTargets) {
    const raw = getPlaceBySlug(target.city, 'shopping', target.slug);
    assert.ok(raw, `Expected shop listing for /place/${target.city}/shopping/${target.slug}`);
    assert.equal(raw.neighborhood, target.neighborhood);
    assert.notEqual(raw.phoneNumber, '+212 661-234567');
    assert.ok(!String(raw.googlePlaceId || '').startsWith('ChIJ'), `${target.slug} should not keep synthetic googlePlaceId`);

    const adapted = adaptToTemplateShop(raw);
    assert.equal(adapted.opening_hours.schedule.length, 7, `${target.slug} should have 7-day opening hours`);
    assert.ok(adapted.worries && adapted.worries.length === 5, `${target.slug} should resolve 5 worries`);
    assert.ok(
      adapted.worries.every((w) => w.state === 'verified'),
      `${target.slug} should have all 5 worries verified`
    );
    assert.equal(adapted.visibility.show_worries, true);
  }

  // Asilah unverified storefront guard
  const asilahShop = getPlaceBySlug('asilah', 'shopping', 'the-spice-salt-garden-asilah');
  assert.equal(asilahShop.isVerified, false);

  // Akbar Delights verified facts
  const akbar = getPlaceBySlug('marrakech', 'shopping', 'akbar-delights');
  assert.equal(akbar.phoneNumber, '+212 671-661307');
  assert.match(akbar.address, /45 Place Bab Fteuh/);
  assert.equal(akbar.establishedYear, 2004);
  assert.ok(akbar.whatTheySell && akbar.whatTheySell.length > 0);
  assert.equal(adaptToTemplateShop(akbar).opening_hours.note, 'Midday closure 13:00–15:00');

  // BIM Chefchaouen verified location
  const bim = getPlaceBySlug('chefchaouen', 'shopping', 'bim-chefchaouen');
  assert.match(bim.address, /Maghreb Arabe/);

  // Eat targets: Kasr Al Assil & Nazka by Buddha-Bar
  const kasr = getPlaceBySlug('rabat', 'food', 'kasr-al-assil');
  assert.ok(kasr);
  assert.match(kasr.ui.exactAddressAndCoordinates.address, /39 Rue Youssef Ibn Tachfine/);
  assert.equal(kasr.ui.openTime, '12:30');
  assert.equal(kasr.ui.closeTime, '22:00');
  assert.notEqual(kasr.ui.website, 'not-available');
  assert.notEqual(kasr.ui.instagram, 'not-available');
  assert.ok(kasr.ui.menu && kasr.ui.menu.sections.length >= 4);
  const kasrWorries = resolveEatWorries(kasr.worries);
  assert.ok(kasrWorries && kasrWorries.every((w) => w.state === 'verified'));

  const nazka = getPlaceBySlug('agadir', 'food', 'nazka-by-buddha-bar');
  assert.ok(nazka);
  assert.equal(nazka.ui.exactAddressAndCoordinates.lat, 30.4101);
  assert.equal(nazka.ui.exactAddressAndCoordinates.lng, -9.5976);
  assert.ok(nazka.ui.menu && nazka.ui.menu.sections.length >= 4);
  const nazkaWorries = resolveEatWorries(nazka.worries);
  assert.ok(nazkaWorries && nazkaWorries.every((w) => w.state === 'verified'));

  // Things target: Eglise Notre-Dame des Cedres
  const church = getActivityByCityAndSlug('ifrane_azrou', 'eglise-notre-dame-des-cedres');
  assert.ok(church);
  assert.equal(church.media?.length ?? 0, 0);
  assert.match(church.schedule_text || '', /Exterior/i);
  assert.ok(church.worries && church.worries.length === 5);
  assert.ok(church.worries.every((w) => w.state === 'verified'));
  const resolvedChurchWorries = resolveThingsWorries(church.worries);
  assert.equal(resolvedChurchWorries.length, 5);
});
