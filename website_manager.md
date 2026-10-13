# Moroccan Mate — Website Manager Manual & Architectural Custodian

> **Identity & Role**:  
> I am the **Website Manager** of **Moroccan Mate**.  
> My role is not to restrict creativity or freeze website evolution with rigid design micro-rules (e.g. banning colors or banners). Instead, my mission is to maintain a **healthy, robust, and factually grounded platform**.  
> I ensure every feature built by AI engineers or human contributors is backed by real data, clean TypeScript contracts, and honest user experiences.

---

## 🏛️ The Three Fundamental Laws of Platform Health

All planning and code modifications across all pages must obey these three inviolable laws:

### Law 1: Full UI-to-Backend Contract Parity
* Every piece of information rendered in the UI (titles, ratings, prices, tags, amenities, schedules, policies) **must have an explicit corresponding property** in the backend data models (`/src/listings/types.ts` and `/src/listings/[category]/[city].[category].ts`).
* The UI must **never fabricate or hardcode fake details** directly in components.
* Titles, names, and identifiers displayed to the user must match the exact data keys provided by the backend controllers (`eatController`, `sleepController`, `thingsController`, `shopController`).

### Law 2: Factual Grounding, Anti-Hallucination & The "No-Color" Convention
* When adding or updating venue, stay, or activity information, always conduct web searches to extract verified real-world facts (Google Maps, official websites, Instagram, local guides).
* **Never hallucinate details** simply because they are missing from search results.
* **The "No-Color" Convention**: If factual information is truly not available online, render that specific UI item in a **neutral "no-color" unpopulated state** (e.g. muted neutral text `text-stone-400 bg-stone-100/40`, or omitting high-contrast pills) rather than making up numbers or badges. This transparently signals to the traveler that the information is currently unconfirmed.

### Law 3: Missing Backend Marker & Automatic Manager Task Logging
* If an engineer or AI introduces a new UI element before the backend data schema is updated:
  1. **Visual Warning Badge**: Render an inline indicator next to the item:  
     `⚠️ (no source in data)`  
     *(Styled as a discrete warning pill: `bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded text-xs font-mono inline-flex items-center gap-1`)*
  2. **Log Task in `tasks_by_manager.md`**: Append a new actionable task in `/tasks_by_manager.md` containing:
     - Target UI component & view
     - Target backend file & interface to extend
     - Recommended web search query to find authentic ground-truth data

---

## 🧭 Page-by-Page & Part-by-Part Architectural Rules

---

## SECTION 1: FOOD (EAT) PAGES

### 1.1 Food Listing & Discovery Page (`EatCuratedView.tsx`, `ResultPage.tsx`)

#### Part 1: Top Navigation & City Context Bar
* **UI / UX & Design Rules**:
  - Sticky or fixed-top header with back button, breadcrumb, and city identifier.
  - Active city must be easily recognizable with correct casing (e.g., "Marrakech", "Fes", "Chefchaouen").
  - Clean separation line (`border-b border-[#ece4d5]`).
* **Backend Source**:
  - Binds to `useParameterStore.city` and `/src/data/cities.ts` (`cityMap[city]`).
* **Health & Parity Rules**:
  - City names must never be hardcoded strings; must match `CityId` union in `/src/listings/types.ts`.

#### Part 2: Culinary Discovery Hero Banner
* **UI / UX & Design Rules**:
  - Centered hero layout with culinary badge (`Utensils` icon, gold badge `bg-[#C9A84C]/10 text-[#C9A84C]`).
  - High-impact display font headline: `"Iconic Dishes of {City}"`.
  - Serif italic subtitle contextualizing the culinary heritage of the chosen Moroccan city.
* **Backend Source**:
  - `FINDER_CURATED_DATA[cityId]` in `/src/data/travel/finderCurated.ts`.
  - Fallback logic: If a city does not yet have curated dish records, show the graceful fallback banner (`EatCuratedView.tsx` lines 20–40) with a button to browse all listings.
* **Anti-Hallucination Rule**:
  - Do not invent fictitious specialty dishes for uncurated cities; use the fallback message until dishes are verified via web research.

#### Part 3: Iconic Dishes Grid
* **UI / UX & Design Rules**:
  - Responsive cards (1 column mobile, 2 columns tablet, 5 columns desktop).
  - Clean unboxed or subtly bordered white cards (`rounded-[32px] border border-stone-100 p-4`).
  - Warm visual icon tile (`bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D0]`) with subtle radial dot pattern and centered food emoji.
  - Dish name (`font-bold text-stone-950 text-base`) and concise 4-line description.
  - Action button: `"Find Places →"` in dark slate (`bg-stone-900 hover:bg-[#C9A84C] text-white`).
* **Backend Source**:
  - `FINDER_CURATED_DATA[city].dishes[]` -> `{ id, name, emoji, description }`.
  - Clicking "Find Places" triggers filter query matching `EatListing.bestDishes` or `EatListing.vibeTags`.
* **Missing Backend Handling**:
  - If a dish card is added without matching tags in city `.eat.ts` files, add `⚠️ (no source in data)` and log a task in `tasks_by_manager.md` to tag restaurants serving that dish.

#### Part 4: Specialty & Dietary Filter Chip Bar
* **UI / UX & Design Rules**:
  - Horizontal scrollable row of tactile filter chips (`FilterChipBar.tsx`).
  - Active chip states use high-contrast dark pills; inactive chips use soft stone-100 pills.
  - Chips include: Rooftop, Street Food, Halal Certified, Vegetarian, Budget, Fine Dining, Cafes & Tea.
* **Backend Source**:
  - `/src/parameters/eat.params.ts` -> `EAT_FILTER_CONFIG`.
  - Direct mapping to `EatListing.isHalal`, `EatListing.isVegetarianFriendly`, `EatListing.hasRooftop`, `EatListing.lifestyle`, and `EatListing.mealTypes`.

#### Part 5: Culinary Matcher Quiz Promo Card
* **UI / UX & Design Rules**:
  - Rounded container (`bg-stone-50 border border-stone-100 rounded-[32px] p-8`).
  - Sparkles icon + heading: `"Looking for a specific dietary need or vibe?"`.
  - Primary button: `"Take Culinary Quiz"` with compass icon.
* **Backend Source**:
  - Triggers `onSkipToQuiz()` -> mounts `CategoryQuiz` with `category='food'`.

#### Part 6: Food Results Feed & Dining Cards (`ResultPage.tsx`)
* **UI / UX & Design Rules**:
  - Grid or list of dining cards with clean Moroccan visual tone.
  - Image: Verified venue photo or botanical flat image fallback (`botanical_food_flat_1791668271591.jpg`).
  - Top badges: Cuisine pill (Moroccan, Seafood, International), Camel rating (0–5), Google rating with review count.
  - Card Title: Venue name linking to `/place/:city/food/:slug`.
  - Metadata line: Neighborhood · Medina proximity · Price tier (`$` to `$$$`, with ~MAD/person).
  - Real-time opening status: Pulsing green dot `"Open Now"` or neutral stone badge `"Hours Unverified"` (**No-color rule** applied when hours unknown).
* **Backend Source**:
  - `EatListing` interface in `/src/listings/types.ts`.
  - City datasets in `/src/listings/eat/[city].eat.ts` and `eatController.ts`.
  - Real-time status computed via `getShopStatus()` in `/src/utils/timeEngine.ts`.

---

### 1.2 Food Detail Page (`EatDetailView.tsx`, `/place/:city/food/:slug`)

#### Part 1: Full-Bleed Upper Hero Banner & Controls
* **UI / UX & Design Rules**:
  - Slim edge-to-edge image banner (160–210px height).
  - Floating round white action buttons: Bookmark Heart & Share.
  - Organic curved SVG transition wave at the bottom edge blending smoothly into the white content area.
* **Backend Source**:
  - `EatListing.images` or `EatListing.nonCopyrightImage`, with fallback to curated dining photography.
  - Bookmark state handled via `useSavedStore`.

#### Part 2: Place Title & Clean Breadcrumb Bar
* **UI / UX & Design Rules**:
  - Place name in large serif display font (`text-3xl sm:text-5xl font-bold text-[#173042]`).
  - Single-line responsive metadata sub-line:
    `[MapPin] City · Neighborhood  ·  [Utensils] Primary Cuisine  ·  [PriceTier] (~Price MAD/person)`.
* **Backend Source**:
  - `name`, `city`, `neighborhood`, `foodStyles[0]`, `pricePerPerson`.

#### Part 3: Ratings Block & Dining Feature Badges
* **UI / UX & Design Rules**:
  - Split two-column card structure.
  - Left column ratings card (`bg-[#FAF7F2] border border-[#EAE2D5] rounded-2xl`):
    - Moroccan Mate Camel Rating (`CamelRating.tsx`) with verified review count.
    - Google Rating badge (amber star) + TripAdvisor badge (emerald star).
  - Operational badges row: "Open Now ({openTime} – {closeTime})", "Halal Certified", "Vegetarian Friendly", "Medina Courtyard", "Hidden Gem", "Delivery Available".
  - "Served For" meal types row: Breakfast, Lunch, Dinner, Late Night, Afternoon Tea.
* **Backend Source**:
  - `googleRating`, `googleReviewCount`, `tripadvisorRating`, `averageRating`, `totalReviews`.
  - `isHalal`, `isVegetarianFriendly`, `nearMedina`, `badge`, `hasDelivery`, `mealTypes`.

#### Part 4: Quick Action, Direct Reservation & Contact Hub
* **UI / UX & Design Rules**:
  - Primary CTA: `"Get directions"` button in deep forest green (`bg-[#234E35]`).
  - Direct Phone Action: `"Call {number}"` + `"Copy"` button.
  - WhatsApp Action: Direct WhatsApp message button with green accent (`bg-[#25D366]/10 text-[#128C7E]`).
  - Official Channels strip:
    - Website button with external link icon.
    - Instagram button: **If Instagram is present**, render rose-gradient button. **If Instagram is absent**, render neutral uncolored grayscale container with text `"No Instagram"` (**No-color rule**).
* **Backend Source**:
  - `googleMapsUrl`, `reservationContact`, `reservationMethod`, `website`, `instagram`.

#### Part 5: Local Insider Tip Callout
* **UI / UX & Design Rules**:
  - Warm sand container with amber left accent border (`border-l-4 border-l-[#C9A84C] bg-[#FAF7F2]`).
  - Lightbulb icon + `"Local Insider Tip"` uppercase gold header.
  - Authentic expert quote rendered in italic serif font.
* **Backend Source**:
  - `EatListing.tip`.
* **Anti-Hallucination Rule**:
  - Only render this card if `item.tip` exists in the backend data. Never display generic filler quotes.

#### Part 6: Soul Card ("Is It Right For You?")
* **UI / UX & Design Rules**:
  - Two-column card without photos (`bg-[#FAF7F2] border border-[#EDE4D5] rounded-3xl p-6 sm:p-8`).
  - Left column:
    - Headline: `"Is it right for you?"`.
    - `"Best for"` badges: Couples, Friends, Families, Solo travelers.
    - 4 Aspect scores (Food, Atmosphere, Service, Value) rendered with camel rating meters and fractional scores (e.g. 4.8/5).
  - Right column:
    - `"The good"` (pros with green checkmark circles).
    - `"The not so good"` (cons with red x-circles) for honest travel advice.
* **Backend Source**:
  - `EatListing.groupTypes`, `EatListing.pros`, `EatListing.cons`.
  - Aspect scores derived deterministically via `averageRating`, `lifestyle`, and `hasEnglishStaff`.

#### Part 7: Recommended Plates & Menu Highlights
* **UI / UX & Design Rules**:
  - Grid of signature dish cards with verified badge and tagine/cutlery icon.
  - "View full menu" button launching the itemized modal.
  - Average meal cost card (~MAD per person) and Beverage policy card (Licensed vs Dry Dining).
* **Backend Source**:
  - `EatListing.bestDishes[]`, `EatListing.fullMenu`, `EatListing.alcoholPolicy`, `EatListing.pricePerPerson`.

#### Part 8: Logistics & Operational Details
* **UI / UX & Design Rules**:
  - Clean two-column card with icon list.
  - Rows: Exact Address, Parking Access, Typical Wait Time (mins), Best Time to Visit, Seating Styles (indoor, terrace, courtyard), View Setting.
* **Backend Source**:
  - `address`, `hasParking`, `averageWaitMinutes`, `bestTimeToVisit`, `seatingTypes`, `viewType`.

#### Part 9: Amenities, Atmosphere & Staff Comforts
* **UI / UX & Design Rules**:
  - Feature badges: Wi-Fi, Air Conditioning, Wheelchair Accessible, English-speaking staff, French-speaking staff, Ramadan Friendly.
* **Backend Source**:
  - `wiFi`, `airConditioning`, `wheelchairAccessible`, `hasEnglishStaff`, `hasFrenchStaff`, `ramadanFriendly`.

---

## SECTION 2: SLEEP (STAYS) PAGES

### 2.1 Sleep Listing & Discovery Page (`SleepCuratedView.tsx`, `ResultPage.tsx`)

#### Part 1: Stays Header & Location Selector
* **UI / UX & Design Rules**:
  - Clean header with location selector: Medina Heart vs Ville Nouvelle vs Palmeraie/Countryside.
  - Comfort level selector: Lean (Hostel/Dar), Balanced (Boutique Riad), Premium (Luxury Palace).
* **Backend Source**:
  - `SleepListing.locationSummary`, `SleepListing.lifestyle` (`'lean' | 'balanced' | 'premium'`).

#### Part 2: Accommodation Type Fast Filter
* **UI / UX & Design Rules**:
  - Pill selectors: Riad, Dar, Kasbah, Desert Camp, Hotel, Hostel, Resort.
* **Backend Source**:
  - `SleepListing.type` (`AccommodationType` in `/src/listings/types.ts`).

#### Part 3: Stay Amenity Filter Chips
* **UI / UX & Design Rules**:
  - Fast toggles: Swimming Pool, AC/Heating, Free Breakfast Included, Rooftop Terrace, Medina Walking Distance.
* **Backend Source**:
  - `hasPool`, `hasAC`, `hasBreakfast`, `hasRooftop`, `nearMedina`.

#### Part 4: Stay Result Cards (`ResultPage.tsx`)
* **UI / UX & Design Rules**:
  - Card photo with subtle gradient overlay, price per night in Moroccan Dirhams (MAD), Camel rating, Medina walking distance badge, and host badge.
* **Backend Source**:
  - `SleepListing` in `/src/listings/sleep/*.sleep.ts` and `sleepController.ts`.

---

### 2.2 Stay Detail Page (`StayDetailView.tsx`, `/place/:city/sleep/:slug`)

#### Part 1: Stay Header Section (`StayHeader.tsx`)
* **UI / UX & Design Rules**:
  - Image gallery carousel, stay name, accommodation type pill, neighborhood, star rating, base price per night in MAD, and booking action button.
* **Backend Source**:
  - `StayDetailData` adapted via `stayAdapter.ts` from `SleepListing`.

#### Part 2: Host & Heritage Story
* **UI / UX & Design Rules**:
  - Heritage context, owner identity, history of the riad or kasbah.
* **Backend Source**:
  - `getStayOwnerAnswer()` in `stayAdapter.ts` and `SleepListing.description`.

#### Part 3: Traditional Moroccan Spaces (`TraditionalSpacesSection.tsx`)
* **UI / UX & Design Rules**:
  - Architectural callouts: Central Courtyard, Mosaic Fountain, Rooftop Solarium, Bhou Alcove, Traditional Hammam.
* **Backend Source**:
  - `SleepListing.amenities` and `hasRooftop`, `hasPool`.

#### Part 4: Room Details & Layout (`RoomDetailsSection.tsx`)
* **UI / UX & Design Rules**:
  - Suite options, ensuite private bathroom status, heating/AC specs, bedding configurations.
* **Backend Source**:
  - `SleepListing.hasEnsuite`, `SleepListing.hasAC`, `SleepListing.hasHeating`.

#### Part 5: Walking Distance & Medina Accessibility (`WalkingDistanceSection.tsx`, `WalkingDistanceMap.tsx`)
* **UI / UX & Design Rules**:
  - Walking time in minutes to nearest car/taxi drop-off, Medina gates, and landmarks.
* **Backend Source**:
  - `SleepListing.nearMedina`, `SleepListing.address`, `proximityEngine.ts`.

#### Part 6: Policies & Practicalities (`PoliciesSection.tsx`)
* **UI / UX & Design Rules**:
  - Check-in/check-out hours, cancellation terms, taxes included status, pet friendly, kid friendly.
* **Backend Source**:
  - `taxesIncluded`, `freeCancellation`, `kidsStayFree`, `petFriendly`.

---

## SECTION 3: THINGS TO DO (ACTIVITIES) PAGES

### 3.1 Things to Do Listing Page (`ThingsListingPage.tsx`)

#### Part 1: Dual-Path Category Selector (`SportDualPath.tsx`)
* **UI / UX & Design Rules**:
  - Visual selector split: Cultural & Heritage Experiences vs Outdoor & Desert Adventures.
* **Backend Source**:
  - `SportExperienceType`, `SportIntent`, and `TAG_REGISTRY` in `/src/listings/things/tags.ts`.

#### Part 2: Energy & Intensity Filter
* **UI / UX & Design Rules**:
  - Pill filters: Relaxed (strolls, tea ceremonies), Moderate (medina tours), Active (hikes, quad biking), Intense (summit climbs).
* **Backend Source**:
  - `ActivityListing.energyLevel` (`'relaxed' | 'moderate' | 'active' | 'intense'`).

#### Part 3: Duration & Time Commitment Chips
* **UI / UX & Design Rules**:
  - 1–2 hours, Half-day, Full-day, Multi-day excursions.
* **Backend Source**:
  - `ActivityListing.duration` in `/src/things-to-do/types.ts`.

#### Part 4: Activity Listing Cards (`ActivityCard.tsx`)
* **UI / UX & Design Rules**:
  - Card visual, duration badge, difficulty badge, group suitability (Solo, Couple, Family), and starting price in MAD.
* **Backend Source**:
  - `thingsController.ts` and `/src/listings/things/*.things.ts`.

---

### 3.2 Activity Detail Page (`ActivityTemplateView.tsx`, `/things/:city/:slug`)

#### Part 1: Activity Header (`ActivityHeader.tsx`)
* **UI / UX & Design Rules**:
  - Title, subtitle, hero photography, duration badge, guide languages, rating, starting price.
* **Backend Source**:
  - `ActivityDetailData` from `src/things-to-do/types.ts`.

#### Part 2: Highlights & Itinerary Schedule (`ActivityHighlightsSection.tsx`, `ActivityScheduleCard.tsx`)
* **UI / UX & Design Rules**:
  - Key sights bullet points and hour-by-hour timeline schedule.
* **Backend Source**:
  - `ActivityListing.highlights`, `ActivityListing.schedule`.

#### Part 3: What's Included vs Excluded (`ActivityIncludedSection.tsx`, `ActivityExcludedSection.tsx`)
* **UI / UX & Design Rules**:
  - Green checkmarks for included items; muted cross icons for excluded costs.
* **Backend Source**:
  - `ActivityListing.included`, `ActivityListing.excluded`.
* **Anti-Hallucination Rule**:
  - Never fabricate included amenities. If unverified, display only confirmed perks.

#### Part 4: What to Bring (`ActivityWhatToBringSection.tsx`)
* **UI / UX & Design Rules**:
  - Recommended clothing, walking shoes, sun protection, cash for tips.
* **Backend Source**:
  - `ActivityListing.whatToBring[]`.

#### Part 5: Meeting Point & Departure Map (`ActivityMeetingPointBanner.tsx`)
* **UI / UX & Design Rules**:
  - Exact meeting location, landmark instructions, Google Maps directions link.
* **Backend Source**:
  - `ActivityListing.meetingPoint`, `ActivityListing.coordinates`.

#### Part 6: Cancellation & Booking Terms (`ActivityCancellationCard.tsx`, `ActivityBookingCard.tsx`)
* **UI / UX & Design Rules**:
  - Cancellation notice (e.g. 24h free cancellation), instant booking status, payment methods.
* **Backend Source**:
  - `ActivityListing.freeCancellation`, `ActivityListing.paymentMethods`.

---

## SECTION 4: SHOPPING (ARTISAN SOUKS) PAGES

### 4.1 Shopping Listing Page (`ShoppingCategoryPage.tsx`)

#### Part 1: Craft Specialty Category Showcase
* **UI / UX & Design Rules**:
  - Category headers with craft visuals: Ceramics, Leather & Babouches, Handwoven Rugs, Spices & Argan, Brass Lanterns.
* **Backend Source**:
  - `ShopListing.craftCategory`, `/src/listings/shop/*.shop.ts`.

#### Part 2: Shopping Mode Toggle
* **UI / UX & Design Rules**:
  - Fixed-Price Cooperative (transparent prices) vs Traditional Medina Souk (bartering expected).
* **Backend Source**:
  - `ShopListing.pricingStyle` (`'fixed' | 'negotiable'`).

#### Part 3: Shop Result Cards
* **UI / UX & Design Rules**:
  - Card photo, price level badge (`budget`, `mid-range`, `premium`, `luxury`), international shipping badge, card payment badge.
* **Backend Source**:
  - `shopController.ts` and `src/shop/types.ts`.

---

### 4.2 Shop Detail Page (`ShopTemplateView.tsx`, `/place/:city/shopping/:slug`)

#### Part 1: Shop Header (`ShopHeader.tsx`)
* **UI / UX & Design Rules**:
  - Store name, specialty craft pill, neighborhood, artisan provenance, camel rating.
* **Backend Source**:
  - `ShopDetailData` adapted via `shopTemplateAdapter.ts`.

#### Part 2: Craftsmanship & Products (`ShopProductsSection.tsx`, `ShopHighlightsSection.tsx`)
* **UI / UX & Design Rules**:
  - Handmade certifications, materials used, artisan workshop demonstration access.
* **Backend Source**:
  - `ShopListing.products`, `ShopListing.materials`.

#### Part 3: Pricing & Bartering Guide (`ShopPricingCard.tsx`)
* **UI / UX & Design Rules**:
  - Fixed-price vs Negotiable index, typical fair-price benchmark advice.
* **Backend Source**:
  - `ShopListing.pricingStyle`, `ShopListing.barteringDifficulty`.

#### Part 4: Payment Methods & Currencies (`ShopPaymentCard.tsx`)
* **UI / UX & Design Rules**:
  - Credit cards accepted (Visa, Mastercard) vs Cash only in Dirhams.
* **Backend Source**:
  - `ShopListing.paymentMethods`.

#### Part 5: Worldwide Shipping Banner (`ShopShippingBanner.tsx`)
* **UI / UX & Design Rules**:
  - DHL/FedEx crating and shipping availability for heavy ceramics and rugs.
* **Backend Source**:
  - `ShopListing.hasShipping`, `ShopListing.shippingDetails`.

#### Part 6: Opening Hours & Friday Prayers (`ShopOpeningHoursCard.tsx`)
* **UI / UX & Design Rules**:
  - Normal hours, Friday prayer breaks, Ramadan schedules.
* **Backend Source**:
  - `ShopListing.openingHours`, `ShopListing.fridayHours`, `ShopListing.ramadanHours`.

#### Part 7: Languages Spoken (`ShopLanguagesCard.tsx`)
* **UI / UX & Design Rules**:
  - Languages spoken by shopkeepers: Arabic, French, English, Berber.
* **Backend Source**:
  - `ShopListing.languages`.

---

## SECTION 5: QUIZZES & DISCOVERY ENGINES

#### Part 1: City & Archetype Discovery Quiz (`ExplorePage.tsx`)
* **UI / UX & Design Rules**:
  - Step-by-step interactive card chooser, animated option selection, progress counter.
* **Backend Source**:
  - `/src/data/explore/questions.ts`, `archetypes.ts`.
* **Health Rule**:
  - Option IDs must map 1:1 to listing attributes (e.g. `hasPool`, `nearMedina`).

#### Part 2: Category Quizzes (Eat, Sleep, Things, Shop in `CategoryQuiz.tsx`)
* **UI / UX & Design Rules**:
  - Category-specific lifestyle, vibe, and priority questions.
* **Backend Source**:
  - Option values must correspond to listing fields in `src/listings/types.ts`.

---

## SECTION 6: RESULT PAGES & FILTER ENGINE (`ResultPage.tsx`)

#### Part 1: Search Intent & "People Also Search For" Bar (`PeopleSearchForBar.tsx`)
* **UI / UX & Design Rules**:
  - Intent chips based on popular travel queries (e.g. "Riad with Pool", "Rooftop Dining").
* **Backend Source**:
  - `/src/data/seo/searchIntents.ts`.

#### Part 2: Filter Panel Modal (`FilterPanel.tsx`)
* **UI / UX & Design Rules**:
  - Sliding drawer or modal with price sliders, distance toggles, and feature checkboxes.
* **Backend Source**:
  - `/src/state/exploreStore.ts`, `/src/state/parameterStore.ts`.

#### Part 3: Proximity & Sorting Math
* **UI / UX & Design Rules**:
  - Sort by: Best Match, Highest Rated, Price (Low to High), Medina Walking Distance.
* **Backend Source**:
  - `haversineM()` in `proximityEngine.ts` and `priceRank()`.

---

## SECTION 7: SAVVY LOCAL INTEL & SAFETY RADAR (`src/data/savvy/`)

#### Part 1: Neighborhood Safety Scorecards (`neighborhood-intel.ts`)
* **UI / UX & Design Rules**:
  - Objective safety index (1–5) and evening walkability notes without sensationalism.
* **Backend Source**:
  - `NEIGHBORHOOD_INTEL` in `/src/data/savvy/neighborhood-intel.ts`.

#### Part 2: Scam Radar & Tourist Warnings (`scam-intel.ts`)
* **UI / UX & Design Rules**:
  - Discrete alert callouts with practical avoidance tips (e.g., tannery guides, unofficial parking attendants).
* **Backend Source**:
  - `SCAM_INTEL` in `/src/data/savvy/scam-intel.ts`.

#### Part 3: Moroccan Mate Camel Rating (`CamelRating.tsx`, `savvyScoreEngine.ts`)
* **UI / UX & Design Rules**:
  - Distinctive 5-point camel rating icons computed from multi-source reviews and authenticity metrics.
* **Backend Source**:
  - `SavvyScoreEngine` in `/src/engine/savvyScoreEngine.ts`.

---

## 🛠️ The Website Manager Workflow for AI Agents

Whenever you are given a task:

```
Step 1: Check Section & Part Rules in website_manager.md
        ↓
Step 2: Inspect Backend Schemas & Existing Data
        ↓
Step 3: If New UI Element Needed:
        ├─ Does backend property exist?
        │   ├─ YES → Bind directly & test.
        │   └─ NO  → Render "⚠️ (no source in data)"
        │            AND add task in tasks_by_manager.md
        ↓
Step 4: Conduct Web Search for Authentic Moroccan Data
        ├─ Found facts → Update backend listing file.
        └─ Not on web  → Render neutral "no-color" state.
        ↓
Step 5: Verify Build & Parity (Zero Errors)
```
