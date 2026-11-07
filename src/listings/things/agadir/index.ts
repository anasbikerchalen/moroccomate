/**
 * [AGADIR] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "agadirThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { agadirHeritageThings } from "./heritage.things";
import { agadirNatureThings } from "./nature.things";
import { agadirWellnessThings } from "./wellness.things";
import { agadirSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const agadirThings: ThingToDoListing[] = [
  ...agadirHeritageThings,
  ...agadirNatureThings,
  ...agadirWellnessThings,
  ...agadirSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const AGADIR_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "agadir-oufella-ruins",
  "agadir-souk-el-had",
  "agadir-cable-car",
  "agadir-medina",
  "agadir-jardin-olhao",
  "agadir-argan-palace-hammam",
  "agadir-musee-memoire"
],
  "road-nature": [
  "agadir-oufella-ruins",
  "agadir-cable-car",
  "agadir-crocoparc",
  "agadir-beach-main",
  "agadir-marina",
  "agadir-jardin-olhao",
  "agadir-souss-massa-park",
  "agadir-paradise-valley",
  "agadir-anza-dinosaur-footprints",
  "agadir-port",
  "agadir-taghazout-surf",
  "agadir-golf-soleil",
  "agadir-devils-rock",
  "agadir-tifnit",
  "agadir-oued-souss-camel",
  "agadir-musee-memoire",
  "agadir-vallee-des-oiseaux",
  "agadir-moov-up-fitness"
],
  "road-wellness": [
  "agadir-crocoparc",
  "agadir-medina",
  "agadir-jardin-olhao",
  "agadir-argan-palace-hammam",
  "agadir-musee-memoire",
  "agadir-vallee-des-oiseaux",
  "agadir-elite-club-spa",
  "agadir-moov-up-fitness"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const AGADIR_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: agadirHeritageThings,
  nature: agadirNatureThings,
  wellness: agadirWellnessThings,
  sport: agadirSportThings
};
export const AGADIR_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 6, nature: 13, wellness: 1, sport: 12
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const AGADIR_THINGS_NEIGHBORHOODS: string[] = [
  "Agadir Oufella",
  "Aghroud Bensergaou",
  "Anza",
  "Bensergaou",
  "Chemin des Dunes",
  "Drarga",
  "Haut Founty",
  "Ihchach",
  "Imouzzer Road",
  "Port Industrial Sector",
  "Port Sector",
  "Rue 2 Mars",
  "Secteur Touristique",
  "Sidi R'bat",
  "Taghazout",
  "Talborjt",
  "Tamraght",
  "Tifnit",
  "Tilila"
];
export const AGADIR_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "climbing-adventure",
  "coastal",
  "combat-sports",
  "cultural-tour",
  "day-pass",
  "gym-fitness",
  "historical",
  "instagrammable",
  "morning",
  "mountain",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "surf-kitesurf",
  "swimming-pool",
  "urban",
  "walk-in"
];
