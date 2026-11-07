/**
 * [EL_JADIDA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "el_jadidaThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { elJadidaHeritageThings } from "./heritage.things";
import { elJadidaNatureThings } from "./nature.things";
import { elJadidaWellnessThings } from "./wellness.things";
import { elJadidaSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const el_jadidaThings: ThingToDoListing[] = [
  ...elJadidaHeritageThings,
  ...elJadidaNatureThings,
  ...elJadidaWellnessThings,
  ...elJadidaSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const EL_JADIDA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "el-jadida-cit-portugaise-of-mazagan",
  "el-jadida-mazagan-ramparts-walk",
  "el-jadida-parc-hassan-ii",
  "el-jadida-portuguese-city-mosque-exterior",
  "el-jadida-resistance-and-liberation-memory-space",
  "el-jadida-azemmour-medina-day-trip"
],
  "road-nature": [
  "el-jadida-mazagan-ramparts-walk",
  "el-jadida-porte-de-la-mer",
  "el-jadida-el-jadida-beach",
  "el-jadida-sidi-bouzid-beach",
  "el-jadida-haouzia-beach-and-shipwreck-view",
  "el-jadida-el-jadida-port",
  "el-jadida-parc-hassan-ii",
  "el-jadida-communal-bread-oven-visit",
  "el-jadida-resistance-and-liberation-memory-space",
  "el-jadida-mazagan-resort-promenade",
  "el-jadida-mazagan-golf-club",
  "el-jadida-sidi-abed-beach",
  "el-jadida-sidi-bouafi-lighthouse-viewpoint",
  "el-jadida-seafood-sunset-on-the-corniche"
],
  "road-wellness": ["el-jadida-el-jadida-beach"]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const EL_JADIDA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: elJadidaHeritageThings,
  nature: elJadidaNatureThings,
  wellness: elJadidaWellnessThings,
  sport: elJadidaSportThings
};
export const EL_JADIDA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 9, nature: 11, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const EL_JADIDA_THINGS_NEIGHBORHOODS: string[] = [
  "Azemmour",
  "City Center",
  "Corniche",
  "Deauville Plage",
  "Haouzia",
  "Harbour",
  "Mazagan Resort",
  "Old Portuguese City",
  "Sidi Abed",
  "Sidi Bouafi",
  "Sidi Bouzid",
  "Ville Nouvelle"
];
export const EL_JADIDA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "climbing-adventure",
  "coastal",
  "cultural-tour",
  "instagrammable",
  "medina",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "sunset",
  "urban",
  "walk-in"
];
