/**
 * [DAKHLA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "dakhlaThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { dakhlaHeritageThings } from "./heritage.things";
import { dakhlaNatureThings } from "./nature.things";
import { dakhlaWellnessThings } from "./wellness.things";
import { dakhlaSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const dakhlaThings: ThingToDoListing[] = [
  ...dakhlaHeritageThings,
  ...dakhlaNatureThings,
  ...dakhlaWellnessThings,
  ...dakhlaSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const DAKHLA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": ["dakhla-lighthouse", "dakhla-old-town-cathedral"],
  "road-nature": [
  "dakhla-lagoon",
  "dakhla-white-dune",
  "dakhla-dragon-island",
  "dakhla-foum-el-bouir",
  "dakhla-portorico-beach",
  "dakhla-puertito-beach",
  "dakhla-pk25-kitesurf-spot",
  "dakhla-asmaa-hot-spring",
  "dakhla-sebkha-imlili",
  "dakhla-dakhla-attitude",
  "dakhla-ocean-vagabond",
  "dakhla-kbc-dakhla",
  "dakhla-ranch-des-dunes",
  "dakhla-quad-and-events",
  "dakhla-lassarga-beach",
  "dakhla-lighthouse",
  "dakhla-lagoon-flamingos",
  "dakhla-kitesurf-safari",
  "dakhla-camp-kitesurf",
  "dakhla-ocean-vagabond-surf",
  "dakhla-ride-adventures-quad",
  "dakhla-white-dune-4x4",
  "dakhla-imlili-oasis-tour"
],
  "road-wellness": ["dakhla-asmaa-hot-spring", "dakhla-ocean-vagabond"]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const DAKHLA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: dakhlaHeritageThings,
  nature: dakhlaNatureThings,
  wellness: dakhlaWellnessThings,
  sport: dakhlaSportThings
};
export const DAKHLA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 5, nature: 14, wellness: 0, sport: 11
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const DAKHLA_THINGS_NEIGHBORHOODS: string[] = [
  "Atlantic Side",
  "Cap de Dakhla",
  "City / Dune Access Zone",
  "City Center",
  "City Waterfront",
  "Desert Route",
  "Dune Zone",
  "Imlili Desert",
  "Lagoon",
  "Lagoon Camp Zone",
  "Lagoon Peninsula",
  "Lagoon Road",
  "Lagoon South",
  "Lagoon Sports Zone",
  "Lassarga",
  "Medina",
  "Oued Chiaf",
  "Outer Coast",
  "PK25 Lagoon",
  "PK28",
  "PK28 Lagoon",
  "Port District",
  "South Desert Zone",
  "South of Dakhla",
  "Southern Coast",
  "Southern Desert"
];
export const DAKHLA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "adventure",
  "atlantic",
  "authentic",
  "boat-tour",
  "camp",
  "climbing-adventure",
  "coastal",
  "cultural-tour",
  "day-pass",
  "day-trip",
  "desert",
  "desert-sport",
  "first-timer",
  "foodie",
  "gym-fitness",
  "hiking-trek",
  "historical",
  "horse-riding",
  "instagrammable",
  "kitesurf",
  "lagoon",
  "local-life",
  "market",
  "morning",
  "nature",
  "off-the-beaten-path",
  "photography",
  "premium",
  "private",
  "quad-bike",
  "relaxed",
  "sunset",
  "surf-culture",
  "surf-kitesurf",
  "urban",
  "walk",
  "walk-in",
  "water-sport",
  "waterfront",
  "wellness",
  "wingfoil",
  "working-port"
];
