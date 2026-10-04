# Morocco Finder — Shop Module (Template & Backend)

This folder (`src/shop/`) packages the **Shop Template**, **Data Specification**, and **Backend Service Engine** together in one self-contained directory.

---

## 📂 Folder Structure

```text
src/shop/
├── index.ts        # Primary barrel exports for the entire module
├── types.ts        # TypeScript interfaces (ShopListing, ShopType, AuthenticitySeal, etc.)
├── template.ts     # Official data specification, empty template, sample template & validator
├── backend.ts      # Backend data service, registry, queries, spatial search, and REST API handler
└── README.md       # Documentation and usage guide
```

---

## 🚀 Key Features

### 1. The Shop Template (`template.ts`)
- **Field-by-Field Specification**: Guidelines for all 47 data fields (ID format, Medina navigation, What3Words, authenticity seals, price estimates, etc.).
- **`EMPTY_SHOP_TEMPLATE`**: Clean blank template ready to copy and populate.
- **`SAMPLE_SHOP_TEMPLATE`**: Master craftsman reference listing (`Dar Al Maalem Artisans`).
- **`createShopTemplate(city, name)`**: Helper to initialize a template pre-filled with the target city.
- **`validateShopListing(data)`**: Validates candidate entries against required schema fields.

### 2. The Backend Data Service (`backend.ts`)
- **Central Shop Registry**: Aggregates all 22 Moroccan cities (`SHOPS_BY_CITY`).
- **Query & Filter Functions**:
  - `getAllShops()`: Get all listings across Morocco.
  - `getShopsByCity(city)`: Get listings for a specific city.
  - `getShopById(id)`: Find a shop by unique ID.
  - `searchShops(filters)`: Multi-criteria filtering (search term, category, price level, ratings, local favorite, etc.).
  - `getShopsNearby(lat, lng, radiusKm)`: Haversine distance-based search.
  - `getShopCities()`: Available cities with shop counts.
  - `getShopCategories()`: Comprehensive list of unique categories and products.
- **Validation & Creation**: `createOrValidateShop(input)`
- **REST API Handler**: `handleShopApiRequest(method, path, query, body)` for mounting to Express (`/api/shops/*`).

---

## 💻 Usage Examples

### Using the Template in Code or AI Crawlers
```typescript
import { createShopTemplate, validateShopListing } from './shop';

// Generate a blank template for Asilah
const newShop = createShopTemplate('asilah', 'Boutique Al Medina');

// Validate data before committing
const result = validateShopListing(newShop);
if (!result.valid) {
  console.error('Validation errors:', result.errors);
}
```

### Querying the Backend Service
```typescript
import { getShopsByCity, searchShops, getShopsNearby } from './shop';

// Get all shops in Marrakech
const marrakechListings = getShopsByCity('marrakech');

// Search for certified artisan cooperatives
const results = searchShops({
  city: 'marrakech',
  type: 'cooperative',
  minRating: 4.5,
  search: 'leather'
});

// Find shops within 2km of user GPS
const nearby = getShopsNearby(31.6295, -7.9811, 2);
```

### Connecting to Express Backend
```typescript
import { handleShopApiRequest } from './shop';

// In server.ts:
app.all('/api/shops*', (req, res) => {
  const pathname = req.path.replace(/^\/api\/shops/, '') || '/';
  const response = handleShopApiRequest(req.method, pathname, req.query as any, req.body);
  res.status(response.status).json(response.body);
});
```
