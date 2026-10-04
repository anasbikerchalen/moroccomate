# Morocco Finder — Things To Do Module (Template & Backend)

This folder (`src/things-to-do/`) packages the **Activity Template**, **Data Specification**, and **Backend Service Engine** together in one self-contained directory — following the exact same architecture as the Shop module (`src/shop/`).

---

## 📂 Folder Structure

```text
src/things-to-do/
├── index.ts        # Primary barrel exports for the entire module
├── types.ts        # TypeScript interfaces + reusable libraries (Activity Types, Meeting options, Fitness levels)
├── template.ts     # Official data specification, empty template, sample template & validator
├── backend.ts      # Backend data service, registry, real-data adapter, queries, spatial search, REST API handler
└── README.md       # Documentation and usage guide
```

---

## 🚀 Key Features

### 1. The Activity Template (`template.ts`)
- **Field-by-Field Specification**: Guidelines for all 36 data fields (activity types, experiences, pricing units, capacity, suitability, schedule slots, booking, cancellation, nearby places, media, etc.).
- **`EMPTY_ACTIVITY_TEMPLATE`**: Clean blank template ready to copy and populate.
- **`SAMPLE_ACTIVITY_TEMPLATE`**: Reference listing (Traditional Moroccan Cooking Class).
- **`createActivityTemplate(city, name)`**: Helper to initialize a template pre-filled with the target city.
- **`validateActivityListing(data)`**: Validates candidate entries against required schema fields.

### 2. The Backend Data Service (`backend.ts`)
- **Central Activity Registry**: Aggregates all real collected city Things listings (`ACTIVITIES_BY_CITY`) — the real data in `src/listings/things/` stays untouched.
- **Real-Data Adapter**: `toActivityListing()` maps the collected fields into the canonical schema; sections with no real data stay empty (the UI hides them).
- **Deterministic Classification**: `inferActivityClassification()` maps collected tags/name onto the Activity Type library with keyword matching — no AI, no hallucination.
- **Query & Filter Functions**:
  - `getAllActivities()`: Get all listings across Morocco (canonical schema).
  - `getActivitiesByCity(city)`: Get listings for a specific city.
  - `getActivityById(id)`: Find an activity by unique ID.
  - `getActivityByCityAndSlug(city, slug)`: Find by city + slug (route resolution).
  - `searchActivities(filters)`: Multi-criteria filtering (search, category, type, ratings, duration, children, booking...).
  - `getActivitiesNearby(lat, lng, radiusKm)`: Haversine distance-based search.
  - `getActivityCities()`: Available cities with activity counts.
  - `getActivityCategories()`: Unique category list.
- **Display Formatters**: `formatDuration()` (180 → "3 hours"), `formatPrice()` ("From 350 MAD / person"), `formatGroupLabel()` ("Up to 8 people").
- **Validation & Creation**: `createOrValidateActivity(input)`
- **REST API Handler**: `handleActivityApiRequest(method, path, query, body)` for mounting to Express (`/api/activities/*`).

### 3. Reusable Libraries (`types.ts`)
- **`ACTIVITY_TYPE_LIBRARY`**: 34 activity types across 6 category groups (Culture, Food, Nature, Adventure/Sport, Wellness, Beach/Water) — matching the national tourism office areas.
- **`MEETING_OPTIONS`**: Meeting point, Hotel pickup, Airport pickup, Pickup available, Self-arrival, Multiple pickup points.
- **`FITNESS_LEVELS`**: Easy, Moderate, Challenging.

---

## 💻 Usage Examples

### Using the Template in Code or AI Crawlers
```typescript
import { createActivityTemplate, validateActivityListing } from './things-to-do';

// Generate a blank template for Essaouira
const newActivity = createActivityTemplate('essaouira', 'Sunset Surf Lesson');

// Validate data before committing
const result = validateActivityListing(newActivity);
if (!result.valid) {
  console.error('Validation errors:', result.errors);
}
```

### Querying the Backend Service
```typescript
import { getActivitiesByCity, searchActivities, getActivitiesNearby, getActivityByCityAndSlug } from './things-to-do';

// Get all activities in Marrakech
const marrakechListings = getActivitiesByCity('marrakech');

// Resolve an activity from a route like /things/marrakech/jardin-majorelle
const activity = getActivityByCityAndSlug('marrakech', 'jardin-majorelle');

// Search for cooking classes
const results = searchActivities({
  city: 'marrakech',
  search: 'cooking',
  minRating: 4.5
});

// Find activities within 2km of user GPS
const nearby = getActivitiesNearby(31.6295, -7.9811, 2);
```

### Connecting to Express Backend
```typescript
import { handleActivityApiRequest } from './things-to-do';

// In server.ts:
app.all('/api/activities*', (req, res) => {
  const pathname = req.path.replace(/^\/api\/activities/, '') || '/';
  const response = handleActivityApiRequest(req.method, pathname, req.query as any, req.body);
  res.status(response.status).json(response.body);
});
```
