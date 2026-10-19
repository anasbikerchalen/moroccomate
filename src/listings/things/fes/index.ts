/**
 * [FES] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "fesThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { fesHeritageThings } from "./heritage.things";
import { fesNatureThings } from "./nature.things";
import { fesWellnessThings } from "./wellness.things";
import { fesSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const fesThings: ThingToDoListing[] = [
  ...fesHeritageThings,
  ...fesNatureThings,
  ...fesWellnessThings,
  ...fesSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const FES_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "fes-chouara-tannery",
  "fes-al-attarine-madrasa",
  "fes-bou-inania-madrasa",
  "fes-bab-bou-jeloud",
  "fes-royal-palace",
  "fes-marinid-tombs",
  "fes-ibn-danan-synagogue",
  "fes-nejjarine-museum",
  "fes-zaouia-moulay-idriss",
  "fes-al-qarawiyyin",
  "fes-cafe-clock",
  "fes-hammam-mernissi",
  "fes-place-seffarine",
  "fes-rainbow-street",
  "fes-borj-nord",
  "fes-jewish-cemetery",
  "fes-ruined-garden",
  "fes-palais-el-glaoui"
],
  "road-nature": [
  "fes-jnan-sbil",
  "fes-marinid-tombs",
  "fes-ibn-danan-synagogue",
  "fes-rainbow-street",
  "fes-borj-nord",
  "fes-jewish-cemetery",
  "fes-ruined-garden",
  "fes-palais-el-glaoui"
],
  "road-wellness": [
  "fes-chouara-tannery",
  "fes-jnan-sbil",
  "fes-nejjarine-museum",
  "fes-art-naji",
  "fes-cafe-clock",
  "fes-hammam-mernissi",
  "fes-place-seffarine",
  "fes-ruined-garden"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const FES_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: fesHeritageThings,
  nature: fesNatureThings,
  wellness: fesWellnessThings,
  sport: fesSportThings
};
export const FES_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 16, nature: 0, wellness: 4, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const FES_THINGS_NEIGHBORHOODS: string[] = [
  "Ain Nokbi",
  "El Ouragli (Northern Hills)",
  "Fes el-Bali (Medina)",
  "Fes el-Bali (Ziat)",
  "Fes el-Jdid",
  "Mellah (Jewish Quarter)"
];
export const FES_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "authentic",
  "cultural-tour",
  "culture",
  "golden-hour",
  "guide-required",
  "instagrammable",
  "medina",
  "nature",
  "off-the-beaten-path",
  "photo-spot",
  "private",
  "relaxed",
  "relaxed-energy",
  "self-guided",
  "shopping",
  "step-free",
  "sunset",
  "tripod-allowed",
  "walk-in",
  "wellness",
  "workshop"
];
