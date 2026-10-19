/**
 * [OUARZAZATE] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "ouarzazateThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { ouarzazateHeritageThings } from "./heritage.things";
import { ouarzazateNatureThings } from "./nature.things";
import { ouarzazateWellnessThings } from "./wellness.things";
import { ouarzazateSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const ouarzazateThings: ThingToDoListing[] = [
  ...ouarzazateHeritageThings,
  ...ouarzazateNatureThings,
  ...ouarzazateWellnessThings,
  ...ouarzazateSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const OUARZAZATE_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "ouarzazate-a-t-ben-haddou",
  "ouarzazate-taourirt-kasbah",
  "ouarzazate-cinema-museum",
  "ouarzazate-kasbah-of-tifoultoute",
  "ouarzazate-old-synagogue-and-mellah-walk",
  "ouarzazate-kasbah-amridil",
  "ouarzazate-skoura-palm-grove-bike-loop",
  "ouarzazate-mansour-eddahbi-reservoir-viewpoint",
  "ouarzazate-telouet-kasbah-day-trip",
  "ouarzazate-ounila-valley-scenic-drive",
  "ouarzazate-museum-theatre-memory-of-ouarzazate",
  "ouarzazate-taourirt-kasbah-rooftop-tea-stop"
],
  "road-nature": [
  "ouarzazate-a-t-ben-haddou",
  "ouarzazate-atlas-studios",
  "ouarzazate-fint-oasis",
  "ouarzazate-kasbah-of-tifoultoute",
  "ouarzazate-cla-studios-ouarzazate",
  "ouarzazate-old-synagogue-and-mellah-walk",
  "ouarzazate-kasbah-amridil",
  "ouarzazate-skoura-palm-grove-bike-loop",
  "ouarzazate-mansour-eddahbi-reservoir-viewpoint",
  "ouarzazate-noor-ouarzazate-solar-complex-viewpoint",
  "ouarzazate-telouet-kasbah-day-trip",
  "ouarzazate-ounila-valley-scenic-drive",
  "ouarzazate-draa-valley-to-agdz",
  "ouarzazate-tizi-ntichka-panoramic-drive",
  "ouarzazate-kart-aventure-desert-circuit",
  "ouarzazate-museum-theatre-memory-of-ouarzazate",
  "ouarzazate-saharan-dinner-and-stargazing-camp"
],
  "road-wellness": []
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const OUARZAZATE_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: ouarzazateHeritageThings,
  nature: ouarzazateNatureThings,
  wellness: ouarzazateWellnessThings,
  sport: ouarzazateSportThings
};
export const OUARZAZATE_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 8, nature: 12, wellness: 0, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const OUARZAZATE_THINGS_NEIGHBORHOODS: string[] = [
  "Agdz Road",
  "Aït Ben Haddou",
  "City Center",
  "Dam Road",
  "Desert Fringe",
  "Fint Valley",
  "High Atlas Route",
  "Mellah",
  "Noor Zone",
  "Ounila Valley",
  "Outskirts",
  "Skoura Oasis",
  "Skoura Road",
  "South Outskirts",
  "Telouet",
  "Tifoultoute",
  "West Ouarzazate"
];
export const OUARZAZATE_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "climbing-adventure",
  "cultural-tour",
  "desert",
  "instagrammable",
  "mountain",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "sunset",
  "urban",
  "walk-in"
];
