/**
 * [MERZOUGA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "merzougaThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { merzougaHeritageThings } from "./heritage.things";
import { merzougaNatureThings } from "./nature.things";
import { merzougaWellnessThings } from "./wellness.things";
import { merzougaSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const merzougaThings: ThingToDoListing[] = [
  ...merzougaHeritageThings,
  ...merzougaNatureThings,
  ...merzougaWellnessThings,
  ...merzougaSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const MERZOUGA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
    "merzouga-gnawa-music",
    "merzouga-taouz-petroglyphs",
    "merzouga-mfis-mines",
    "merzouga-hassi-labied-oasis",
    "merzouga-auto-museum",
    "merzouga-ksar-heritage"
  ],
  "road-nature": [
    "merzouga-camel-trek",
    "merzouga-gnawa-music",
    "merzouga-quad-adventure",
    "merzouga-glamping",
    "merzouga-dayet-srji",
    "merzouga-mfis-mines",
    "merzouga-sandboarding",
    "merzouga-auto-museum",
    "merzouga-hassi-labied-oasis",
    "merzouga-nomad-family",
    "merzouga-madfouna",
    "merzouga-stargazing",
    "merzouga-sand-bath",
    "merzouga-hammam",
    "merzouga-safari",
    "merzouga-horse-riding",
    "merzouga-chez-artistes"
  ],
  "road-wellness": [
    "merzouga-gnawa-music",
    "merzouga-glamping",
    "merzouga-hassi-labied-oasis",
    "merzouga-cooking-class",
    "merzouga-sand-bath",
    "merzouga-hammam"
  ]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const MERZOUGA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: merzougaHeritageThings,
  nature: merzougaNatureThings,
  wellness: merzougaWellnessThings,
  sport: merzougaSportThings
};
export const MERZOUGA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 3, nature: 15, wellness: 2, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const MERZOUGA_THINGS_NEIGHBORHOODS: string[] = [
  "Dayet Srji",
  "Erfoud Outskirts",
  "Erg Chebbi Dunes",
  "Hassi Labied",
  "Khamlia",
  "Khamlia Village",
  "Merzouga Center",
  "Merzouga Desert",
  "Merzouga Dunes",
  "Merzouga Outskirts",
  "Mifis",
  "R702 Outskirts",
  "Rissani"
];
export const MERZOUGA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "climbing-adventure",
  "cultural-tour",
  "desert",
  "instagrammable",
  "morning",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "walk-in",
  "wellness",
  "workshop"
];
