# Programmatic SEO & "People Also Search For" SOP

> **Core Objective:** When a user searches Google for high-intent keywords like `[city] hotels on the beach` or `[city] hotels with heated pool`, they land directly on a pre-filtered Result Page (`/finder/[city]/sleep/[slug]` or parameter-driven URL) that already has those exact filters applied, complete with tailored SEO meta titles, real listings, and a "People Also Search For" clickable tag bar.

---

## 📋 Standard Operating Procedure (SOP) When Given a City (e.g., "do Fes")

Whenever a city is requested, follow these strict phases in order:

### Phase 1: Keyword Analysis & Deduplication
1. **Clean & Filter**:
   - Discard non-relevant or out-of-context terms (e.g. `casablanca hotel nyc`).
   - Group identical/overlapping intents into single canonical slugs:
     - `hotels with waterslides`, `with slides`, `with water park` → `water-park`
     - `hotels with pool`, `with swimming pool` → `pool`
     - `hotels with heated pools` → `heated-pool`
     - `hotels on the beach`, `with private beach` → `beachfront`
     - `hotels all inclusive`, `5 star all inclusive` → `all-inclusive`
     - `hotels 5 star`, `5-star`, `luxury` → `luxury-5-star`
     - `with airport shuttle` → `airport-shuttle`
     - `with swim up rooms` → `swim-up-rooms`
     - `with kids club`, `with kids` → `family-kids`
2. **Assign URL Slug & Target Meta Data**:
   - Format: `[city]-hotels-[feature-slug]` (e.g., `/finder/agadir/sleep/beachfront` or `/finder/agadir/sleep?feature=beachfront`)
   - Target Title: e.g., *"Best Hotels with Heated Pools in Agadir | Moroccan Mate"*
   - Target Description: *"Discover curated hotels in Agadir with heated pools, verified guest reviews, and local safety intel."*

---

### Phase 2: Listing Codebase Audit & Tagging
1. **Inspect City Listings**:
   - Open `/src/listings/sleep/[city].sleep.ts`.
   - Check if the listings in that city actually have the required properties/tags in their `amenities`, `tags`, or `vibeTags` arrays (e.g., `'heated-pool'`, `'beachfront'`, `'all-inclusive'`, `'kids-club'`, `'airport-shuttle'`).
2. **Enrich Listings Accurately**:
   - If listings lack the specific attribute but in real life have it, add the tag to `amenities` / `tags`.
   - If no listings currently exist in the database with that feature, maintain a honest fallback or note it so empty pages aren't returned.

---

### Phase 3: URL Route & Pre-Filter Engine
1. **Enable URL Recognition**:
   - Ensure the routing system and `useExploreStore` / `ResultPage` can read the URL slug or query parameter (e.g. `?feature=heated-pool` or `/sleep/beachfront`).
   - Automatically activate the corresponding filter/vibe tag in `useExploreStore` so the result page renders the filtered listings instantly with zero extra clicks.
2. **SEO Header & Head Tags**:
   - Pass dynamic `<SEO>` tags for the active pre-filter so Google indexes the exact search query with high CTR snippet titles.
3. **Preserve Quiz & Customization**:
   - Keep the "Customize with Quiz" or "All Filters" button active at the top so visitors can fine-tune if desired.

---

### Phase 4: "People Also Search For" Tag Bar on Result Page
1. **Curate Top City Tags**:
   - Under the results header, render a "People Also Search For" horizontal strip with the city's top validated keywords (e.g. `🏖️ Beachfront`, `🏊 Heated Pool`, `💦 Water Park`, `👑 5-Star Luxury`, `🚐 Airport Shuttle`).
2. **One-Click Filtering / Linking**:
   - Clicking a tag switches the active filter immediately and updates the URL, creating an internal link mesh that Google crawls and ranks.

---

## 🏙️ City Keywords & Intent Mappings

NOTE: for each city im gonna provide (top, or keywords that start with terms like (with...)). read them, filter repeated things, see if filters we have on result page contain those tags, if yes, we create a url, if not, we should first add those tags to each listing codebase.


## Agadir city:
 - top keywords:
agadir hotels on the beach
agadir hotels all inclusive
agadir hotels with waterslides
agadir hotels 5 star
agadir hotels with heated pools
 - With - keywords:
agadir hotels with waterslides
agadir hotels with heated pools
agadir hotels with swim up rooms
agadir hotels with slides
agadir hotels with water park
agadir hotels with private beach
agadir hotels with kids club
agadir hotels with indoor pool
agadir hotels with pool
agadir hotels with nightclubs

## Marrakech city:
-TOP:
marrakech hotels with pool
marrakech hotels with water park
marrakech hotels all inclusive
marrakech hotels luxury
marrakech hotels with heated pools
marrakech hotels 5-star
marrakech hotels 5 star all inclusive
marrakech hotels with water slides
marrakech hotels with swim up rooms

-WITH:
marrakech hotels with pool
marrakech hotels with water park
marrakech hotels with heated pools
marrakech hotels with water slides
marrakech hotels with swim up rooms
marrakech hotels with private pool
marrakech hotels with spa
marrakech hotels with swimming pool
marrakech hotels with golf course
marrakech hotels with kids

## casablanca city:
-TOP:
casablanca hotels with airport shuttle
casablanca hotels morocco
casablanca hotels 5-star
casablanca hotels
casablanca hotels near airport
casablanca hotels luxury
casablanca hotels cheap
casablanca hotels best

-WITH:
casablanca hotels with airport shuttle
casablanca hotels with pool
casablanca hotels with ocean view
casablanca hotels with spa
casablanca hotels with rooftop bar

## Fes (Fès) city:
-TOP:
fes hotels with pool
fes riads with pool
fes hotels 5 star
fes hotels luxury
fes hotels with rooftop terrace
fes hotels in medina
fes hotels with spa
fes hotels all inclusive

-WITH:
fes hotels with pool
fes hotels with heated pool
fes hotels with swimming pool
fes hotels with spa / hammam
fes hotels with rooftop view
fes hotels with airport shuttle
fes hotels with parking
fes hotels with kids / family rooms

## Essaouira city:
-TOP:
essaouira hotels on the beach
essaouira hotels with pool
essaouira hotels with heated pool
essaouira hotels with sea view
essaouira hotels luxury
essaouira hotels 5 star
essaouira riads with pool
essaouira hotels all inclusive

-WITH:
essaouira hotels on the beach
essaouira hotels with private beach
essaouira hotels with heated pool
essaouira hotels with swimming pool
essaouira hotels with ocean view
essaouira hotels with rooftop terrace
essaouira hotels with spa
essaouira hotels with kids / family rooms

## Tangier city:
-TOP:
tangier hotels on the beach
tangier hotels with sea view
tangier hotels with pool
tangier hotels 5 star
tangier hotels luxury
tangier hotels with rooftop pool
tangier hotels all inclusive
tangier hotels with water park

-WITH:
tangier hotels with pool
tangier hotels with sea view
tangier hotels with private beach
tangier hotels with waterslides / water park
tangier hotels with heated pool
tangier hotels with spa
tangier hotels with indoor pool
tangier hotels with airport shuttle

## Chefchaouen city:
-TOP:
chefchaouen hotels with pool
chefchaouen hotels with mountain view
chefchaouen riads with rooftop terrace
chefchaouen hotels luxury
chefchaouen hotels cheap
chefchaouen hotels in medina

-WITH:
chefchaouen hotels with pool
chefchaouen hotels with swimming pool
chefchaouen hotels with mountain view
chefchaouen hotels with rooftop terrace
chefchaouen hotels with balcony
chefchaouen hotels with breakfast included
chefchaouen hotels with family rooms

## Taghazout city:
-TOP:
taghazout hotels on the beach
taghazout hotels with pool
taghazout hotels with ocean view
taghazout hotels all inclusive
taghazout surf hotels
taghazout hotels 5 star
taghazout hotels with spa

-WITH:
taghazout hotels on the beach
taghazout hotels with private beach
taghazout hotels with pool
taghazout hotels with heated pool
taghazout hotels with ocean view
taghazout hotels with yoga studio
taghazout hotels with spa
taghazout hotels with swim up rooms

## Dakhla city:
-TOP:
dakhla hotels on the beach
dakhla hotels all inclusive
dakhla hotels with pool
dakhla luxury desert camps
dakhla kitesurf hotels
dakhla hotels 5 star

-WITH:
dakhla hotels on the beach
dakhla hotels with lagoon view
dakhla hotels with pool
dakhla hotels with private beach
dakhla hotels with airport shuttle
dakhla hotels with spa

## Merzouga city:
-TOP:
merzouga desert camps with pool
merzouga luxury desert camps
merzouga hotels with pool
merzouga desert camps with private bathroom
merzouga hotels with air conditioning
merzouga desert camps all inclusive

-WITH:
merzouga desert camps with pool
merzouga desert camps with private bathroom / shower
merzouga desert camps with air conditioning
merzouga hotels with swimming pool
merzouga hotels with dune view
merzouga desert camps with camel ride

## Rabat city:
-TOP:
rabat hotels with pool
rabat hotels 5-star
rabat hotels luxury
rabat hotels with ocean view
rabat hotels in medina
rabat hotels with airport shuttle

-WITH:
rabat hotels with pool
rabat hotels with swimming pool
rabat hotels with ocean view
rabat hotels with spa
rabat hotels with rooftop
rabat hotels with airport shuttle
rabat hotels with parking

## Ouarzazate city:
-TOP:
ouarzazate hotels with pool
ouarzazate kasbah hotels
ouarzazate hotels luxury
ouarzazate hotels 5 star
ouarzazate hotels with desert view

-WITH:
ouarzazate hotels with pool
ouarzazate hotels with swimming pool
ouarzazate hotels with kasbah architecture
ouarzazate hotels with mountain / desert view
ouarzazate hotels with spa
ouarzazate hotels with family rooms
