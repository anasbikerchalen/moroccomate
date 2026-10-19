/**
 * [RABAT] THINGS TO DO — CITY INDEX
 * Connects the 4 real-data category files of this city and exposes the
 * city-level arrays in clearly separated sections:
 *   SECTION 1 — LISTINGS ARRAYS  (the classic "rabatThings" export, unchanged)
 *   SECTION 2 — QUIZ ARRAYS     (decision-tree roads → real listing ids)
 *   SECTION 3 — UI ARRAYS        (category browsing helpers)
 *   SECTION 4 — FILTER ARRAYS    (real neighborhoods & tag inventory)
 */
import type { ThingToDoListing } from '../../types';

import { rabatHeritageThings } from "./heritage.things";
import { rabatNatureThings } from "./nature.things";
import { rabatWellnessThings } from "./wellness.things";
import { rabatSportThings } from "./sport.things";

// ══ SECTION 1 — LISTINGS ARRAYS (all real listings of this city) ══
export const rabatThings: ThingToDoListing[] = [
  ...rabatHeritageThings,
  ...rabatNatureThings,
  ...rabatWellnessThings,
  ...rabatSportThings
];

// ══ SECTION 2 — QUIZ ARRAYS (decision-tree roads → real listing ids) ══
// Computed with the REAL road matcher (src/data/explore/thingsQuiz.ts).
export const RABAT_ROAD_LISTING_IDS: Record<string, string[]> = {
  "road-heritage": [
  "rabat-kasbah-des-oudaias",
  "rabat-chellah",
  "rabat-rabat-medina-and-rue-des-consuls",
  "rabat-mohammed-vi-museum-of-modern-and-contemporary-art",
  "rabat-museum-of-history-and-civilisations",
  "rabat-rabat-beach",
  "rabat-bouregreg-marina-walk",
  "rabat-grand-theatre-de-rabat-exterior-walk",
  "rabat-royal-palace-esplanade"
],
  "road-nature": [
  "rabat-kasbah-des-oudaias",
  "rabat-andalusian-gardens",
  "rabat-chellah",
  "rabat-rabat-beach",
  "rabat-bouregreg-marina-walk",
  "rabat-jardin-dessais-botaniques",
  "rabat-les-jardins-exotiques-de-bouknadel",
  "rabat-rabat-zoo",
  "rabat-bouregreg-boat-crossing"
],
  "road-wellness": [
  "rabat-andalusian-gardens",
  "rabat-chellah",
  "rabat-bouregreg-marina-walk",
  "rabat-jardin-dessais-botaniques",
  "rabat-les-jardins-exotiques-de-bouknadel"
]
};

// ══ SECTION 3 — UI ARRAYS (category browsing helpers) ══
export const RABAT_THINGS_BY_CATEGORY: Record<string, ThingToDoListing[]> = {
  heritage: rabatHeritageThings,
  nature: rabatNatureThings,
  wellness: rabatWellnessThings,
  sport: rabatSportThings
};
export const RABAT_THINGS_CATEGORY_COUNTS: Record<string, number> = {
  heritage: 13, nature: 6, wellness: 1, sport: 0
};

// ══ SECTION 4 — FILTER ARRAYS (real neighborhoods & tag inventory) ══
export const RABAT_THINGS_NEIGHBORHOODS: string[] = [
  "Avenue de la Victoire",
  "Bouknadel",
  "Bouregreg River",
  "Bouregreg Waterfront",
  "Chellah",
  "City Center",
  "Hassan District",
  "Hay Riad",
  "Kasbah des Oudaias",
  "Marina Bouregreg",
  "Mechouar",
  "Medina",
  "Oceanfront",
  "Temara-Rabat",
  "Tour Hassan",
  "Ville Nouvelle"
];
export const RABAT_THINGS_TAG_INVENTORY: string[] = [
  "authentic",
  "coastal",
  "cultural-tour",
  "instagrammable",
  "medina",
  "morning",
  "nature",
  "private",
  "relaxed",
  "shopping",
  "sunset",
  "urban",
  "walk-in"
];
