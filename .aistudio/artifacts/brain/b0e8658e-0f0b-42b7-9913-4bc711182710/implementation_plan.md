# Master Template "Bible" & City Listing Reference Architecture

## Summary
This plan establishes a canonical "Source of Truth" (the Bible) for all listing data arrays and options across all four categories: **Food (Eat)**, **Accommodations (Sleep)**, **Activities (Things To Do)**, and **Artisan Crafts (Shop)**. It provides dedicated, version-controlled template code files that catalog every permissible value and array option, coupled with standardized, structured header reference blocks embedded at the top of city listing files so external AI crawlers immediately understand the schema and all available options.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> External AIs that conduct web searches need to know not only what existing listings contain, but the **complete universe of permissible options** (e.g. knowing that `lifestyle` can be `['lean', 'balanced', 'premium']` even if a specific city only currently has `balanced` venues). The template serves as the canonical contract.

- **Confirmed Decision 1**: Standardized structured headers containing all permissible options and a copy-paste blank sample embedded at the top of city listing files.
- **Confirmed Decision 2**: Dedicated master code files (`template.eat.ts`, `template.sleep.ts`, `template.things.ts`, `template.shop.ts`) acting as the permanent "Bible" of all options and arrays.
- **Confirmed Decision 3**: Complete documentation of required fields, optional arrays, allowed enum strings, and realistic sample listings.

---

## 1. Overview & Core Concept

### Why Dedicated Template Files + File Headers?
When an external AI (or human data editor) is given a city listing file (such as `marrakech.eat.ts` or `chefchaouen.things.ts`):
1. **The "Missing Option" Problem**: If an external AI only looks at the existing listings in a file, it will never know that options like `mealTypes: ['late-night', 'brunch']` or `paymentMethods: ['apple_pay']` exist unless they are explicitly declared in a master template at the top of the file.
2. **The "Single Source of Truth" (Bible)**: By having dedicated code files (`src/listings/eat/template.eat.ts`, `src/listings/sleep/template.sleep.ts`, etc.), any new array or option is added **first** to the template file before being rolled out to city files.
3. **External AI Readability**: When you upload a city listing file to an external AI, the header comment at the top serves as an immediate prompt primer, explaining the exact schema, allowed values, and providing a blank template to fill.

---

## 2. Master Template Specification by Category

### A. Food & Dining (`src/listings/eat/template.eat.ts`)
* **Allowed Options Dictionary (`EAT_ALLOWED_OPTIONS`)**:
  - `lifestyle`: `['lean', 'balanced', 'premium']`
  - `groupTypes`: `['solo', 'couple', 'family', 'friends', 'large-groups', 'seniors']`
  - `mealTypes`: `['breakfast', 'lunch', 'dinner', 'late-night', 'snack', 'brunch', 'drinks']`
  - `experienceTypes`: `['street-food', 'fine-dining', 'casual', 'cafes-tea', 'hidden-gem', 'rooftop', 'traditional', 'market-stall']`
  - `foodStyles`: `['Moroccan', 'Seafood', 'Berber', 'Tagine & Couscous', 'French-Moroccan', 'Italian', 'Mediterranean', 'Middle Eastern', 'Cafe & Pastry', 'Grill & BBQ', 'Vegetarian/Vegan', 'International']`
  - `paymentMethods`: `['cash', 'credit_card', 'visa', 'mastercard', 'apple_pay', 'google_pay']`
  - `reservationMethod`: `['whatsapp', 'phone', 'website', 'walk-in', 'email']`
  - `closedDays`: `['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']`
  - `seatingTypes`: `['indoor', 'outdoor', 'rooftop', 'terrace', 'courtyard', 'street-side']`
  - `alcoholPolicy`: `['licensed', 'dry', 'bring-your-own']`
  - `crowdLevel`: `['quiet', 'moderate', 'bustling']`
  - `safetyLevel`: `1 | 2 | 3 | 4 | 5`

### B. Stays & Accommodations (`src/listings/sleep/template.sleep.ts`)
* **Allowed Options Dictionary (`SLEEP_ALLOWED_OPTIONS`)**:
  - `type`: `['riad', 'dar', 'hotel', 'kasbah', 'desert-camp', 'guesthouse', 'hostel', 'resort', 'apartment', 'villa', 'lodge']`
  - `lifestyle`: `['lean', 'balanced', 'premium']`
  - `locationFeel`: `['medina-heart', 'ville-nouvelle', 'countryside']`
  - `groupTypes`: `['solo', 'couple', 'family', 'friends', 'large-groups', 'seniors']`
  - `safetyLevel`: `1 | 2 | 3 | 4 | 5`
  - `paymentMethods`: `['cash', 'credit_card', 'visa', 'mastercard', 'apple_pay', 'bank_transfer']`
  - `amenities`: `['pool', 'breakfast', 'ac', 'heating', 'wifi', 'rooftop', 'ensuite', 'restaurant', 'bar', 'gym', 'elevator', 'laundry', 'room-service', 'pet-friendly']`
  - `roomFeatures`: `['soundproof', 'workspace', 'balcony', 'fireplace', 'courtyard-view', 'mountain-view']`

### C. Activities & Things To Do (`src/listings/things/template.things.ts`)
* **Allowed Options Dictionary (`THINGS_ALLOWED_OPTIONS`)**:
  - `lifestyle`: `['lean', 'balanced', 'premium']`
  - `groupTypes`: `['solo', 'couple', 'family', 'friends', 'large-groups', 'seniors']`
  - `crowdLevel`: `['quiet', 'moderate', 'bustling']`
  - `energyLevel`: `['easy', 'moderate', 'high']`
  - `transportMode`: `['walk', 'taxi', 'bus', 'car', '4x4']`
  - `safetyLevel`: `1 | 2 | 3 | 4 | 5`
  - `fitnessLevel`: `['relaxed', 'moderate', 'active', 'intense']`
  - `archetypeAffinity`: `['first-timer', 'culture', 'adventure', 'relaxed', 'foodie', 'budget', 'luxury']`
  - `vibeTags`: `['artistic', 'botanical', 'iconic', 'vibrant', 'historic', 'panoramic', 'serene', 'authentic']`
  - Standard activity tags (from `src/listings/things/tags.ts`)

### D. Shopping & Artisans (`src/listings/shop/template.shop.ts`)
* **Allowed Options Dictionary (`SHOP_ALLOWED_OPTIONS`)**:
  - `type`: `['souk_stall', 'boutique', 'cooperative', 'mall_store', 'pharmacy', 'supermarket', 'designer_atelier', 'concept_store']`
  - `priceLevel`: `['budget', 'mid-range', 'premium', 'luxury']`
  - `pricingModel`: `['fixed', 'negotiable', 'mixed', 'market_price']`
  - `authenticitySeals`: `['label_artisanat', 'wfto', 'zellige_de_fes', 'anou', 'maalem_certified']`
  - `paymentMethods`: `['cash', 'visa', 'mastercard', 'apple_pay', 'google_pay', 'amex']`
  - `productCategories`: `['Berber Rugs & Carpets', 'Leather Goods & Babouches', 'Ceramics & Pottery', 'Spices & Apothecary', 'Argan Oil & Cosmetics', 'Jewelry & Silver', 'Brass & Metal Lanterns', 'Woodwork & Thuya Wood', 'Textiles & Caftans', 'Artisan Crafts']`
  - `languagesSpoken`: `['Arabic', 'French', 'English', 'Spanish', 'German', 'Berber / Tamazight']`

---

## 3. Architecture & Data Flow

```
┌──────────────────────────────────────────────────────────────┐
│                  CANONICAL MASTER TEMPLATES                  │
│       src/listings/{eat,sleep,things,shop}/template.*.ts     │
│   - Complete option dictionaries (The Bible)                 │
│   - EMPTY_[CATEGORY]_TEMPLATE                                │
│   - SAMPLE_[CATEGORY]_ENTRY                                  │
└──────────────────────────────┬───────────────────────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
┌──────────────────────────────┐    ┌───────────────────────────┐
│     City Listing Files       │    │  Automated Health Auditor │
│ src/listings/[cat]/[city].ts │    │  scripts/audit-arrays.ts  │
│ - Standardized header block  │    │  Validates all arrays     │
│ - All allowed values shown   │    │  against the Master Bible │
│ - AI-ready blank sample      │    └───────────────────────────┘
└──────────────────────────────┘
```

---

## 4. Phased Execution Roadmap

### Task 1: Create the 4 Master Template "Bible" Code Files
- Create `src/listings/eat/template.eat.ts` with complete type definitions, `EAT_ALLOWED_OPTIONS`, `EMPTY_EAT_TEMPLATE`, and a full sample entry.
- Create `src/listings/sleep/template.sleep.ts` with complete type definitions, `SLEEP_ALLOWED_OPTIONS`, `EMPTY_SLEEP_TEMPLATE`, and a full sample entry.
- Create `src/listings/things/template.things.ts` with complete type definitions, `THINGS_ALLOWED_OPTIONS`, `EMPTY_THINGS_TEMPLATE`, and a full sample entry.
- Harmonize `src/listings/shop/template.shop.ts` (and link `src/shop/template.ts`) with `SHOP_ALLOWED_OPTIONS`, `EMPTY_SHOP_TEMPLATE`, and full sample entry.

### Task 2: Standardize the Header Reference in City Listing Files
- Create standard header comment generator / templates containing:
  1. The Field Specification (Required vs Optional)
  2. The Complete Options Bible (Allowed values for each array and enum)
  3. The Copy-Paste Blank Template
- Roll out the standardized header to city files across categories so that any file uploaded to an external AI is immediately self-contained and self-guiding.

### Task 3: Connect Master Templates to the Array Integrity Auditor
- Update `scripts/audit-arrays.ts` to import the canonical allowed options from the 4 master template files.
- Ensure the auditor reports any unrecognized array strings or malformed options that don't match the Bible.

### Task 4: Compilation & Verification
- Run `npm run audit:arrays` to verify that all current listings comply with the master template schemas.
- Run `npm run lint` and `npm run build` to confirm zero compilation errors.
