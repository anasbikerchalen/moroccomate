import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildPlaceSeo,
  buildThingsSeo,
  hasListingMenu,
  hasListingReviews,
  extractReviewSchemaEntries,
} from './seoEngine';

const sampleMenu = {
  currency: 'MAD',
  sections: [
    {
      id: 'mains',
      title: 'Mains',
      items: [{ id: 'dish-1', name: 'Lamb Tagine', price: 140 }],
    },
  ],
};

const sampleReviewsData = {
  sources: [{ source: 'Google Maps', rating: 4.8, reviewCount: 120 }],
  reviews: [
    {
      author: 'Sarah M.',
      text: 'Wonderful atmosphere, tender tagine, and attentive hospitality throughout dinner.',
      postedDate: '2026-09-10',
      source: 'Google Maps',
      rating: 5,
    },
    {
      author: 'Youssef K.',
      text: 'Fresh mint tea and very fair prices for the neighborhood.',
      postedDate: '2026-09-01',
      source: 'Tripadvisor',
      rating: 5,
    },
  ],
};

test('Food listing with NEITHER menu NOR reviews excludes Menu and Reviews from title and description', () => {
  const seo = buildPlaceSeo({
    listing: {
      name: 'Cafe Atlas',
      description: 'Sunny corner cafe in Gueliz.',
      reviewsData: { sources: [], reviews: [] },
      menu: { sections: [] },
    },
    category: 'food',
    cityKey: 'marrakech',
    cityLabel: 'Marrakech',
    slug: 'cafe-atlas',
    lang: 'en',
  });

  assert.equal(hasListingMenu({ menu: { sections: [] } }), false);
  assert.equal(hasListingReviews({ reviewsData: { sources: [], reviews: [] } }), false);
  assert.equal(/menu/i.test(seo.title), false);
  assert.equal(/review/i.test(seo.title), false);
  assert.equal(/menu/i.test(seo.description), false);
  assert.equal(/review/i.test(seo.description), false);
  assert.equal(seo.jsonLd?.review, undefined);
});

test('Food listing with menu ONLY includes Menu but NOT Reviews in title', () => {
  const seo = buildPlaceSeo({
    listing: {
      name: 'Cafe Atlas',
      description: 'Sunny corner cafe in Gueliz.',
      menu: sampleMenu,
      reviewsData: { sources: [], reviews: [] },
    },
    category: 'food',
    cityKey: 'marrakech',
    cityLabel: 'Marrakech',
    slug: 'cafe-atlas',
    lang: 'en',
  });

  assert.equal(/menu/i.test(seo.title), true);
  assert.equal(/review/i.test(seo.title), false);
  assert.equal(seo.jsonLd?.review, undefined);
  assert.ok(seo.jsonLd?.hasMenu);
});

test('Food listing with reviews ONLY includes Reviews but NOT Menu in title', () => {
  const seo = buildPlaceSeo({
    listing: {
      name: 'Cafe Atlas',
      description: 'Sunny corner cafe in Gueliz.',
      reviewsData: sampleReviewsData,
    },
    category: 'food',
    cityKey: 'marrakech',
    cityLabel: 'Marrakech',
    slug: 'cafe-atlas',
    lang: 'en',
  });

  assert.equal(/review/i.test(seo.title), true);
  assert.equal(/menu/i.test(seo.title), false);
  assert.ok(Array.isArray(seo.jsonLd?.review));
  assert.equal(seo.jsonLd?.review.length, 2);
});

test('Food listing with BOTH menu and reviews includes Menu & Reviews and Review JSON-LD', () => {
  const seo = buildPlaceSeo({
    listing: {
      name: 'Cafe Atlas',
      description: 'Sunny corner cafe in Gueliz.',
      menu: sampleMenu,
      reviewsData: sampleReviewsData,
    },
    category: 'food',
    cityKey: 'marrakech',
    cityLabel: 'Marrakech',
    slug: 'cafe-atlas',
    lang: 'en',
  });

  assert.equal(/menu/i.test(seo.title), true);
  assert.equal(/review/i.test(seo.title), true);
  assert.ok(Array.isArray(seo.jsonLd?.review));
  assert.equal(seo.jsonLd?.review[0]['@type'], 'Review');
  assert.equal(seo.jsonLd?.review[0].author.name, 'Sarah M.');
});

test('Sleep, Shopping, and Things listings include Reviews in title ONLY when reviews are populated', () => {
  const stayNoReviews = buildPlaceSeo({
    listing: { name: 'Riad Jasmine', reviewsData: { sources: [], reviews: [] } },
    category: 'sleep',
    cityKey: 'fes',
    cityLabel: 'Fès',
    slug: 'riad-jasmine',
    lang: 'en',
  });
  assert.equal(/review/i.test(stayNoReviews.title), false);

  const stayWithReviews = buildPlaceSeo({
    listing: { name: 'Riad Jasmine', reviewsData: sampleReviewsData },
    category: 'sleep',
    cityKey: 'fes',
    cityLabel: 'Fès',
    slug: 'riad-jasmine',
    lang: 'en',
  });
  assert.equal(/review/i.test(stayWithReviews.title), true);
  assert.ok(Array.isArray(stayWithReviews.jsonLd?.review));

  const shopNoReviews = buildPlaceSeo({
    listing: { name: 'Souk Pottery', reviewsData: { sources: [], reviews: [] } },
    category: 'shopping',
    cityKey: 'fes',
    cityLabel: 'Fès',
    slug: 'souk-pottery',
    lang: 'en',
  });
  assert.equal(/review/i.test(shopNoReviews.title), false);

  const thingNoReviews = buildThingsSeo({
    activity: { name: 'Hammam Ritual', slug: 'hammam-ritual', reviewsData: { sources: [], reviews: [] } },
    cityKey: 'agadir',
    cityLabel: 'Agadir',
    lang: 'en',
  });
  assert.equal(/review/i.test(thingNoReviews.title), false);

  const thingWithReviews = buildThingsSeo({
    activity: { name: 'Hammam Ritual', slug: 'hammam-ritual', reviewsData: sampleReviewsData },
    cityKey: 'agadir',
    cityLabel: 'Agadir',
    lang: 'en',
  });
  assert.equal(/review/i.test(thingWithReviews.title), true);
  assert.equal(extractReviewSchemaEntries({ reviewsData: sampleReviewsData }).length, 2);
});
