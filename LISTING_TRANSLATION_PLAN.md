# Moroccan Mate — Listing Translation Master Plan & Tracker

Translate every curated listing across **French (`fr`)**, **Spanish (`es`)**, **German (`de`)**, and **Arabic (`ar`)** on a city-by-category schedule so we can tackle one clean batch per day without touching the raw English listing files.

---

## Architecture & Workflow

- **Storage pattern:** Sidecar translation files under `src/listings/translations/{eat,sleep,shop,things}/<city>.<category>.{fr,es,de,ar}.ts` keyed by each listing's exact `id`.
- **Overlay engine:** `src/listings/translations/index.ts` merges each registered batch into `LISTING_TRANSLATIONS` and exports:
  - `hasListingTranslations(id)` — returns `true` only once all 4 non-English languages exist, gating `hreflang`, sitemap entries, and static prerendered HTML to prevent untranslated duplicate-content pages.
  - `localizeListing(listing, lang)` — overlays translated copy onto cloned listing fields (while keeping prices, coordinates, icons, worry tones/images, ratings, and brand/place proper names untouched).
- **Daily batch checklist:**
  1. Extract English text fields (`description`, `short_description`, `tip`, `pros`, `cons`, `bestTimeToVisit`, `seasonalHoursNote`, `customStory`, `editorialGuide`, `knowBeforeYouGo`, `faqs`, `worries`, plus `highlights`/`goodToKnow`/`includedItems`/`requirements`/`houseRules`/`ownerAnswer` where applicable) for the target `city-category`.
  2. Author `<city>.<category>.{fr,es,de,ar}.ts` keeping place/brand proper nouns accurate and matching `worries` by `id`.
  3. Register the batch in `src/listings/translations/index.ts`.
  4. Add/extend coverage assertions in `src/listings/translations/localizeListing.test.ts` (`npx --yes tsx --test src/listings/translations/localizeListing.test.ts`), then verify build (`npm run build`).
  5. Mark `[x]` on that row below and record the completion date.

---

## Overall Progress

- **Total listings across 25 cities:** **1,868** (`Eat: 556` · `Sleep: 469` · `Shop: 312` · `Things to Do: 531`)
- **Non-empty city/category batches:** **89**
- **Completed batches:** **1 / 89** (`58 / 1,868` listings — **Agadir · Eat**)

---

## City-by-City Batch Tracker

> Legend: `[x]` Done · `[ ]` Pending · `—` No listings in this city category

| # | City | Eat (556) | Sleep (469) | Shop (312) | Things to Do (531) | Total | Notes |
|---:|---|---|---|---|---|---:|---|
| 1 | **Agadir** (`agadir`) | [x] Eat (58) | [ ] Sleep (20) | [ ] Shop (25) | [ ] Things (32) | 135 | Eat completed (`agadir.eat.{fr,es,de,ar}.ts`) |
| 2 | **Marrakech** (`marrakech`) | [ ] Eat (33) | [ ] Sleep (21) | [ ] Shop (12) | [ ] Things (15) | 81 | High-traffic priority |
| 3 | **Casablanca** (`casablanca`) | [ ] Eat (62) | [ ] Sleep (20) | [ ] Shop (25) | [ ] Things (43) | 150 | Largest single city count |
| 4 | **Fes** (`fes`) | [ ] Eat (25) | [ ] Sleep (20) | [ ] Shop (25) | [ ] Things (25) | 95 | |
| 5 | **Tangier** (`tangier`) | [ ] Eat (26) | [ ] Sleep (20) | [ ] Shop (25) | [ ] Things (25) | 96 | |
| 6 | **Rabat** (`rabat`) | [ ] Eat (26) | [ ] Sleep (20) | [ ] Shop (25) | [ ] Things (25) | 96 | |
| 7 | **Essaouira** (`essaouira`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (24) | [ ] Things (25) | 89 | |
| 8 | **Chefchaouen** (`chefchaouen`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (21) | [ ] Things (43) | 104 | |
| 9 | **Meknes** (`meknes`) | [ ] Eat (34) | [ ] Sleep (20) | [ ] Shop (15) | [ ] Things (26) | 95 | |
| 10 | **Ouarzazate** (`ouarzazate`) | [ ] Eat (33) | [ ] Sleep (20) | [ ] Shop (14) | [ ] Things (25) | 92 | |
| 11 | **Al Hoceima** (`al_hoceima`) | [ ] Eat (30) | [ ] Sleep (20) | [ ] Shop (12) | [ ] Things (42) | 104 | |
| 12 | **Asilah** (`asilah`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (11) | [ ] Things (49) | 100 | |
| 13 | **Dakhla** (`dakhla`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (11) | [ ] Things (33) | 84 | |
| 14 | **El Jadida** (`el_jadida`) | [ ] Eat (24) | [ ] Sleep (20) | [ ] Shop (15) | [ ] Things (23) | 82 | |
| 15 | **Merzouga** (`merzouga`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (10) | [ ] Things (21) | 71 | |
| 16 | **Tetouan & Martil** (`tetouan_martil`) | [ ] Eat (23) | [ ] Sleep (4) | [ ] Shop (10) | [ ] Things (30) | 67 | |
| 17 | **Saidia** (`saidia`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (5) | [ ] Things (20) | 65 | |
| 18 | **Ifrane & Azrou** (`ifrane_azrou`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (14) | [ ] Things (10) | 64 | |
| 19 | **Taroudant & Tafraoute** (`taroudant_tafraoute`) | [ ] Eat (12) | [ ] Sleep (4) | [ ] Shop (10) | [ ] Things (19) | 45 | |
| 20 | **Taghazout** (`taghazout`) | [ ] Eat (20) | [ ] Sleep (20) | [ ] Shop (3) | — | 43 | |
| 21 | **Imlil & Toubkal** (`imlil_toubkal`) | [ ] Eat (2) | [ ] Sleep (20) | — | — | 22 | Small batch — easy to pair |
| 22 | **M'hamid** (`mhamid`) | [ ] Eat (2) | [ ] Sleep (20) | — | — | 22 | Small batch — easy to pair |
| 23 | **Ourika** (`ourika`) | [ ] Eat (2) | [ ] Sleep (20) | — | — | 22 | Small batch — easy to pair |
| 24 | **Ouzoud** (`ouzoud`) | [ ] Eat (2) | [ ] Sleep (20) | — | — | 22 | Small batch — easy to pair |
| 25 | **Todra & Dades** (`todra_dades`) | [ ] Eat (2) | [ ] Sleep (20) | — | — | 22 | Small batch — easy to pair |

---

## Completed Log

- **Agadir — Eat (58 listings · `fr`, `es`, `de`, `ar`)**: Translated & registered in `src/listings/translations/eat/agadir.eat.{fr,es,de,ar}.ts`.
