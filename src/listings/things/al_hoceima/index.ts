/**
 * [AL_HOCEIMA] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "al_hoceimaThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { alHoceimaHeritageThings } from "./heritage.things";
import { alHoceimaNatureThings } from "./nature.things";
import { alHoceimaWellnessThings } from "./wellness.things";
import { alHoceimaSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const al_hoceimaThings: ThingToDoListing[] = [
  ...alHoceimaHeritageThings,
  ...alHoceimaNatureThings,
  ...alHoceimaWellnessThings,
  ...alHoceimaSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const AL_HOCEIMA_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": ["al-hoceima-mosquee-mohamed-vi", "al-hoceima-ajdir-village"],
  "road-nature": [
  "al-hoceima-quemado-beach",
  "al-hoceima-cala-bonita",
  "al-hoceima-national-park",
  "al-hoceima-port",
  "al-hoceima-sfiha-beach",
  "al-hoceima-corniche-sabadia",
  "al-hoceima-jardin-al-mnikar",
  "al-hoceima-tala-youssef-beach",
  "al-hoceima-corniche-morro-viejo",
  "al-hoceima-plage-matadero",
  "al-hoceima-boujibar-national-park",
  "al-hoceima-ajdir-village",
  "al-hoceima-plage-cala-iris",
  "al-hoceima-moroccan-diving-center",
  "al-hoceima-diving-experience",
  "al-hoceima-kayak-tour",
  "al-hoceima-rif-croisieres-boat",
  "al-hoceima-hiking-national-park",
  "al-hoceima-surf-lesson",
  "al-hoceima-fishing-charter",
  "al-hoceima-snorkeling-cala-iris",
  "al-hoceima-paragliding",
  "al-hoceima-jeep-tour-park",
  "al-hoceima-bike-tour"
],
  "road-wellness": ["al-hoceima-jardin-al-mnikar"]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const AL_HOCEIMA_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: alHoceimaHeritageThings,
  nature: alHoceimaNatureThings,
  wellness: alHoceimaWellnessThings,
  sport: alHoceimaSportThings
};
export const AL_HOCEIMA_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 3, nature: 11, wellness: 0, sport: 26
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const AL_HOCEIMA_THINGS_NEIGHBORHOODS: string[] = [
  "Ajdir",
  "Boujibar",
  "Cala Iris",
  "Calabonita",
  "City Center",
  "Corniche",
  "Matadero",
  "Morro Viejo",
  "Port",
  "Port Area",
  "Quemado",
  "Sabadia",
  "Sfiha",
  "Tala Youssef",
  "Talborjt"
];
export const AL_HOCEIMA_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "architectural",
  "authentic",
  "climbing-adventure",
  "coastal",
  "combat-sports",
  "cultural-tour",
  "day-pass",
  "desert-sport",
  "gym-fitness",
  "hiking-trek",
  "instagrammable",
  "morning",
  "nature",
  "off-the-beaten-path",
  "private",
  "relaxed",
  "sunset",
  "surf-kitesurf",
  "swimming-pool",
  "urban",
  "walk-in",
  "water-sport",
  "women-only"
];
