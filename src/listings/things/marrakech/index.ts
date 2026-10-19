/**
 * [MARRAKECH] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "marrakechThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { marrakechHeritageThings } from "./heritage.things";
import { marrakechNatureThings } from "./nature.things";
import { marrakechWellnessThings } from "./wellness.things";
import { marrakechSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const marrakechThings: ThingToDoListing[] = [
  ...marrakechHeritageThings,
  ...marrakechNatureThings,
  ...marrakechWellnessThings,
  ...marrakechSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const MARRAKECH_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "marrakech-bahia-palace",
  "marrakech-ben-youssef-madrasa",
  "marrakech-jemaa-el-fnaa",
  "marrakech-saadian-tombs",
  "marrakech-koutoubia-mosque",
  "marrakech-el-badi-palace",
  "marrakech-le-jardin-secret",
  "marrakech-maison-de-la-photographie",
  "marrakech-dar-si-said-museum",
  "marrakech-cyber-parc",
  "marrakech-souk-semmarine"
],
  "road-nature": [
  "marrakech-jardin-majorelle",
  "marrakech-saadian-tombs",
  "marrakech-koutoubia-mosque",
  "marrakech-el-badi-palace",
  "marrakech-le-jardin-secret",
  "marrakech-maison-de-la-photographie",
  "marrakech-dar-si-said-museum",
  "marrakech-cyber-parc"
],
  "road-wellness": [
  "marrakech-jardin-majorelle",
  "marrakech-koutoubia-mosque",
  "marrakech-le-jardin-secret",
  "marrakech-cyber-parc",
  "marrakech-souk-semmarine"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const MARRAKECH_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: marrakechHeritageThings,
  nature: marrakechNatureThings,
  wellness: marrakechWellnessThings,
  sport: marrakechSportThings
};
export const MARRAKECH_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 9, nature: 1, wellness: 2, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const MARRAKECH_THINGS_NEIGHBORHOODS: string[] = ["Guéliz", "Kaat Benahid", "Kasbah", "Medina", "Mellah", "Mouassine", "Riad Zitoun Jdid"];
export const MARRAKECH_THINGS_TAG_INVENTORY: string[] = [
  "active",
  "architectural",
  "artistic",
  "authentic",
  "botanical",
  "chaotic",
  "cosy",
  "cultural-tour",
  "elegant",
  "energetic",
  "festival",
  "geometric",
  "golden-hour",
  "historical",
  "iconic",
  "instagrammable",
  "intricate",
  "lush",
  "medina",
  "morning",
  "nature",
  "nostalgic",
  "off-the-beaten-path",
  "ornate",
  "peaceful",
  "photo-spot",
  "private",
  "regal",
  "relaxed",
  "scenic",
  "sensory",
  "serene",
  "shopping",
  "solemn",
  "spiritual",
  "step-free",
  "street-food",
  "sunset",
  "sunset-view",
  "tranquil",
  "tripod-allowed",
  "vibrant",
  "walk-in",
  "wellness",
  "workshop"
];
