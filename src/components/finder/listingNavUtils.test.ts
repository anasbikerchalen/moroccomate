import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeActiveSectionId,
  filterAvailableNavItems,
  hasVerifiedReviews,
  hasVerifiedWorries,
} from './listingNavUtils';

test('filterAvailableNavItems hides unavailable sections and requires at least 2 sections', () => {
  assert.deepEqual(filterAvailableNavItems([]), []);
  assert.deepEqual(
    filterAvailableNavItems([
      { id: 'about', available: true },
      { id: 'menu', available: false },
      { id: 'reviews', available: false },
    ]),
    []
  );

  const result = filterAvailableNavItems([
    { id: 'worries', available: false },
    { id: 'about', available: true },
    { id: 'menu', available: true },
    { id: 'reviews', available: false },
  ]);
  assert.deepEqual(
    result.map((r) => r.id),
    ['about', 'menu']
  );
});

test('hasVerifiedWorries mirrors WorriesSection verification gate', () => {
  assert.equal(hasVerifiedWorries(null), false);
  assert.equal(hasVerifiedWorries([]), false);
  assert.equal(
    hasVerifiedWorries([
      {
        id: 'w1',
        title: 'Scams',
        icon: 'warning',
        tag: 'not available',
        description: 'not available',
        state: 'pending',
      },
    ]),
    false
  );
  assert.equal(
    hasVerifiedWorries([
      {
        id: 'w1',
        title: 'Scams',
        icon: 'warning',
        tag: 'Official Store',
        description: 'Verified chain store.',
        state: 'verified',
      },
    ]),
    true
  );
});

test('hasVerifiedReviews enforces populated review data gate', () => {
  assert.equal(hasVerifiedReviews(null), false);
  assert.equal(hasVerifiedReviews({ sources: [], reviews: [] }), false);
  assert.equal(
    hasVerifiedReviews({
      sources: [{ source: 'Google Maps', rating: 4.5, reviewCount: 100 }],
      reviews: [],
    }),
    true
  );
});

test('computeActiveSectionId highlights active scrolled section and bottom section', () => {
  const positions = [
    { id: 'worries', top: -240 },
    { id: 'about', top: 90 },
    { id: 'menu', top: 520 },
    { id: 'reviews', top: 1200 },
  ];

  assert.equal(computeActiveSectionId(positions, 140, false), 'about');
  assert.equal(computeActiveSectionId(positions, 60, false), 'worries');
  assert.equal(computeActiveSectionId(positions, 140, true), 'reviews');
  assert.equal(computeActiveSectionId([], 140, false), null);
});
