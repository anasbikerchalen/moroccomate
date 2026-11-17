import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { agadirEat } from './eat/agadir.eat';
import { marrakechEat } from './eat/marrakech.eat';
import { casablancaEat } from './eat/casablanca.eat';
import { resolveEatWorries } from '../utils/eatWorriesResolver';
import type { EatListing } from './types';

const TARGET_LISTING_SPECS: Array<{
  id: string;
  city: 'agadir' | 'marrakech' | 'casablanca';
  expectedNamePart: string;
  sitemapSlug: string;
}> = [
  // Screenshot 1: Agadir
  { id: 'e-agadir-1', city: 'agadir', expectedNamePart: 'Pure Passion', sitemapSlug: 'pure-passion-restaurant' },
  { id: 'e-agadir-cafe-mauro', city: 'agadir', expectedNamePart: 'Café Mauro', sitemapSlug: 'cafe-mauro' },
  { id: 'e-agadir-oplaya', city: 'agadir', expectedNamePart: 'Ô Playa', sitemapSlug: 'o-playa' },
  { id: 'e-agadir-6', city: 'agadir', expectedNamePart: 'La Scala', sitemapSlug: 'la-scala-restaurant-agadir' },
  { id: 'e-agadir-2', city: 'agadir', expectedNamePart: 'Les Blancs', sitemapSlug: 'les-blancs-agadir' },
  { id: 'e-agadir-le20', city: 'agadir', expectedNamePart: "Le 20'", sitemapSlug: 'restaurant-le-20' },
  { id: 'e-agadir-8', city: 'agadir', expectedNamePart: "Le Jardin d'Eau", sitemapSlug: 'le-jardin-deau' },
  { id: 'e-agadir-babakoul', city: 'agadir', expectedNamePart: 'Babakoul', sitemapSlug: 'babakoul' },

  // Screenshot 2: Marrakech & Casablanca
  { id: 'e-marrakech-la-mamounia', city: 'marrakech', expectedNamePart: 'Mamounia', sitemapSlug: 'le-marocain-la-mamounia' },
  { id: 'e-marrakech-5', city: 'marrakech', expectedNamePart: 'Nomad', sitemapSlug: 'nomad' },
  { id: 'e-marrakech-comptoir-darna', city: 'marrakech', expectedNamePart: 'Comptoir Darna', sitemapSlug: 'comptoir-darna' },
  { id: 'e-marrakech-6', city: 'marrakech', expectedNamePart: 'Al Fassia', sitemapSlug: 'al-fassia-gueliz' },
  { id: 'e-marrakech-1', city: 'marrakech', expectedNamePart: 'Le Jardin', sitemapSlug: 'le-jardin' },
  { id: 'e-casablanca-3', city: 'casablanca', expectedNamePart: "Rick's Café", sitemapSlug: 'ricks-cafe' },
  { id: 'e-marrakech-4', city: 'marrakech', expectedNamePart: 'Café des Épices', sitemapSlug: 'cafe-des-epices' },
  { id: 'e-marrakech-dar-yacout', city: 'marrakech', expectedNamePart: 'Dar Yacout', sitemapSlug: 'dar-yacout' },
];

const BY_CITY: Record<'agadir' | 'marrakech' | 'casablanca', EatListing[]> = {
  agadir: agadirEat,
  marrakech: marrakechEat,
  casablanca: casablancaEat,
};

test('target IDs are unique across cities (including deduplicated Le 20) and marrakech/casablanca have no duplicate IDs', () => {
  for (const city of ['marrakech', 'casablanca'] as const) {
    const seen = new Set<string>();
    for (const item of BY_CITY[city]) {
      assert.ok(!seen.has(item.id), `Duplicate ID found in ${city}: ${item.id}`);
      seen.add(item.id);
    }
  }

  for (const spec of TARGET_LISTING_SPECS) {
    const count = BY_CITY[spec.city].filter((item) => item.id === spec.id).length;
    assert.equal(count, 1, `Expected 1 copy of target listing ${spec.id} in ${spec.city}, found ${count}`);
  }
});

test('all 16 target restaurants exist with verified info, coordinates, structured menus, and 5 resolved worries', () => {
  for (const spec of TARGET_LISTING_SPECS) {
    const list = BY_CITY[spec.city];
    const matches = list.filter((l) => l.id === spec.id);
    assert.equal(matches.length, 1, `Expected exactly 1 entry for ${spec.id}, found ${matches.length}`);

    const listing = matches[0];
    const name = listing.ui?.name || listing.name || '';
    assert.ok(
      name.includes(spec.expectedNamePart),
      `Expected name of ${spec.id} to contain "${spec.expectedNamePart}", got "${name}"`
    );

    const status = listing.filter?.verificationStatus ?? listing.verificationStatus;
    assert.equal(status, 'verified', `${spec.id} must have verificationStatus='verified'`);

    const pricePerPerson = listing.filter?.pricePerPerson ?? listing.pricePerPerson ?? 0;
    assert.ok(
      pricePerPerson > 0 && pricePerPerson <= 150,
      `${spec.id} pricePerPerson (${pricePerPerson}) should be between 1 and 150 (UI multiplies by 6–12 for MAD)`
    );

    const coords = listing.ui?.exactAddressAndCoordinates || listing.exactAddressAndCoordinates;
    assert.ok(coords && coords.address.length > 10, `${spec.id} missing exactAddressAndCoordinates.address`);
    assert.ok(
      typeof coords.lat === 'number' && coords.lat > 27 && coords.lat < 36,
      `${spec.id} latitude out of Morocco bounds: ${coords?.lat}`
    );
    assert.ok(
      typeof coords.lng === 'number' && coords.lng > -13 && coords.lng < -1,
      `${spec.id} longitude out of Morocco bounds: ${coords?.lng}`
    );

    const menu = listing.ui?.menu || listing.menu;
    assert.ok(menu && Array.isArray(menu.sections) && menu.sections.length >= 2, `${spec.id} missing structured menu sections`);
    for (const section of menu.sections) {
      assert.ok(section.items.length >= 1, `${spec.id} section ${section.id} must have at least 1 item`);
      for (const item of section.items) {
        assert.ok(item.name.trim().length > 0, `${spec.id} menu item ${item.id} has empty name`);
        assert.ok(typeof item.price === 'number' && item.price > 0, `${spec.id} menu item ${item.id} must have positive MAD price`);
      }
    }

    const resolvedWorries = resolveEatWorries(listing.worries);
    assert.ok(resolvedWorries && resolvedWorries.length === 5, `${spec.id} must resolve 5 verified worries`);
    for (const worry of resolvedWorries) {
      assert.notEqual(worry.state, 'pending', `${spec.id} worry ${worry.id} cannot be pending`);
      assert.ok(
        worry.tag.trim().length > 0 && !worry.tag.toLowerCase().includes('not available'),
        `${spec.id} worry ${worry.id} has invalid tag: ${worry.tag}`
      );
      assert.ok(
        worry.description.trim().length > 15 && !worry.description.toLowerCase().includes('not available'),
        `${spec.id} worry ${worry.id} has invalid description`
      );
    }
  }
});

test('public/sitemap.xml includes all 16 target restaurant place and menu URLs without duplicates', () => {
  const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');
  const xml = readFileSync(sitemapPath, 'utf8');
  const locMatches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const counts = new Map<string, number>();
  for (const loc of locMatches) {
    counts.set(loc, (counts.get(loc) ?? 0) + 1);
  }

  for (const [loc, count] of counts.entries()) {
    assert.equal(count, 1, `Duplicate <loc> found in public/sitemap.xml: ${loc} (${count} times)`);
  }

  for (const spec of TARGET_LISTING_SPECS) {
    const placeLoc = `https://www.moroccanmate.com/place/${spec.city}/food/${spec.sitemapSlug}`;
    const menuLoc = `${placeLoc}/menu`;
    assert.equal(counts.get(placeLoc), 1, `Missing place URL in sitemap.xml: ${placeLoc}`);
    assert.equal(counts.get(menuLoc), 1, `Missing menu URL in sitemap.xml: ${menuLoc}`);
  }

  assert.equal(
    counts.get('https://www.moroccanmate.com/place/agadir/food/restaurant-le-20-2'),
    undefined,
    'Deduplicated restaurant-le-20-2 slug must not appear in sitemap.xml'
  );
});

