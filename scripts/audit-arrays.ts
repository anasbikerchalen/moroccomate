/**
 * =========================================================================
 * LISTING DATA ARRAYS & SCHEMA HEALTH AUDITOR
 * =========================================================================
 *
 * Scans all raw collected listings across Eat, Sleep, Things, and Shop for:
 * 1. Fatal array-type violations (e.g. non-array value where array is required)
 * 2. Null, undefined, or empty-string items inside arrays
 * 3. Array elements with malformed structure (missing id/name in object arrays)
 * 4. Coordinate structure validity ({ lat, lng } numeric)
 * 5. String vs Array discrepancies (e.g. "cash" instead of ["cash"])
 *
 * Run: npm run audit:arrays
 */

import { listingsRegistry } from '../src/listings';
import { EAT_ALLOWED_OPTIONS } from '../src/listings/eat/template.eat';
import { SLEEP_ALLOWED_OPTIONS } from '../src/listings/sleep/template.sleep';
import { THINGS_ALLOWED_OPTIONS } from '../src/listings/things/template.things';
import { SHOP_ALLOWED_OPTIONS } from '../src/listings/shop/template.shop';

interface AuditAnomaly {
  key: string;
  category: string;
  city: string;
  id: string;
  name: string;
  field: string;
  severity: 'FATAL' | 'WARNING';
  reason: string;
  valueSnippet: string;
}

const anomalies: AuditAnomaly[] = [];

// Helper to check array integrity
function checkArrayField(
  listing: any,
  key: string,
  field: string,
  opts: {
    required?: boolean;
    itemType?: 'string' | 'object';
    allowedEmpty?: boolean;
    validateItem?: (item: any, index: number) => string | null;
  }
) {
  const val = listing[field];
  const [city, category] = key.split('-');
  const baseInfo = {
    key,
    category: category || 'unknown',
    city: city || listing.city || 'unknown',
    id: listing.id || listing.name || 'unidentified',
    name: listing.name || listing.title || 'Untitled',
    field,
  };

  if (val === undefined || val === null) {
    if (opts.required) {
      anomalies.push({
        ...baseInfo,
        severity: 'FATAL',
        reason: `Required array field "${field}" is ${val === null ? 'null' : 'missing/undefined'}`,
        valueSnippet: String(val),
      });
    }
    return;
  }

  if (!Array.isArray(val)) {
    anomalies.push({
      ...baseInfo,
      severity: 'FATAL',
      reason: `Field "${field}" is not an Array (type is ${typeof val}) — will throw runtime .map() error`,
      valueSnippet: JSON.stringify(val)?.slice(0, 80) || String(val),
    });
    return;
  }

  if (!opts.allowedEmpty && val.length === 0 && opts.required) {
    anomalies.push({
      ...baseInfo,
      severity: 'WARNING',
      reason: `Required array field "${field}" is an empty array []`,
      valueSnippet: '[]',
    });
  }

  // Inspect elements inside the array
  val.forEach((item, index) => {
    if (item === null || item === undefined) {
      anomalies.push({
        ...baseInfo,
        severity: 'FATAL',
        reason: `Array "${field}" contains ${item === null ? 'null' : 'undefined'} at index [${index}]`,
        valueSnippet: `index ${index}: ${item}`,
      });
      return;
    }

    if (opts.itemType === 'string') {
      if (typeof item !== 'string') {
        anomalies.push({
          ...baseInfo,
          severity: 'FATAL',
          reason: `Array "${field}" contains non-string element of type ${typeof item} at index [${index}]`,
          valueSnippet: JSON.stringify(item)?.slice(0, 60),
        });
      } else if (item.trim() === '') {
        anomalies.push({
          ...baseInfo,
          severity: 'WARNING',
          reason: `Array "${field}" contains empty/whitespace-only string at index [${index}]`,
          valueSnippet: `"${item}"`,
        });
      }
    }

    if (opts.validateItem) {
      const itemError = opts.validateItem(item, index);
      if (itemError) {
        anomalies.push({
          ...baseInfo,
          severity: 'FATAL',
          reason: `Array "${field}" item error: ${itemError}`,
          valueSnippet: JSON.stringify(item)?.slice(0, 60),
        });
      }
    }
  });
}

function checkCoordinates(listing: any, key: string) {
  const coords = listing.coordinates;
  if (!coords) return;
  const [city, category] = key.split('-');
  const baseInfo = {
    key,
    category: category || 'unknown',
    city: city || listing.city || 'unknown',
    id: listing.id || listing.name || 'unidentified',
    name: listing.name || listing.title || 'Untitled',
    field: 'coordinates',
  };

  if (typeof coords !== 'object') {
    anomalies.push({
      ...baseInfo,
      severity: 'FATAL',
      reason: `coordinates is not an object (type: ${typeof coords})`,
      valueSnippet: String(coords),
    });
    return;
  }

  if (typeof coords.lat !== 'number' || isNaN(coords.lat)) {
    anomalies.push({
      ...baseInfo,
      severity: 'FATAL',
      reason: `coordinates.lat is missing or not a valid number (${coords.lat})`,
      valueSnippet: JSON.stringify(coords),
    });
  }

  if (typeof coords.lng !== 'number' || isNaN(coords.lng)) {
    anomalies.push({
      ...baseInfo,
      severity: 'FATAL',
      reason: `coordinates.lng is missing or not a valid number (${coords.lng})`,
      valueSnippet: JSON.stringify(coords),
    });
  }
}

// -------------------------------------------------------------
// EXECUTE AUDIT
// -------------------------------------------------------------
let totalListingsScanned = 0;
const countsByCategory: Record<string, number> = { eat: 0, sleep: 0, things: 0, shop: 0 };

for (const [regKey, rawList] of Object.entries(listingsRegistry)) {
  const [cityName, category] = regKey.split('-');
  if (!Array.isArray(rawList)) {
    console.error(`FATAL: Registry entry ${regKey} is not an array!`);
    continue;
  }

  for (const item of rawList) {
    if (!item) continue;
    totalListingsScanned++;
    if (countsByCategory[category] !== undefined) {
      countsByCategory[category]++;
    }

    checkCoordinates(item, regKey);

    if (category === 'things') {
      checkArrayField(item, regKey, 'images', { itemType: 'string' });
      checkArrayField(item, regKey, 'tags', { required: true, itemType: 'string' });
      checkArrayField(item, regKey, 'vibeTags', { itemType: 'string' });
      checkArrayField(item, regKey, 'groupTypes', { itemType: 'string' });
      checkArrayField(item, regKey, 'archetypeAffinity', { itemType: 'string' });
      checkArrayField(item, regKey, 'languages', { itemType: 'string' });
      checkArrayField(item, regKey, 'equipmentNeeded', { itemType: 'string' });
    } else if (category === 'shop') {
      checkArrayField(item, regKey, 'tags', { itemType: 'string' });
      checkArrayField(item, regKey, 'paymentMethods', { itemType: 'string' });
      checkArrayField(item, regKey, 'productCategories', { itemType: 'string' });
      checkArrayField(item, regKey, 'languagesSpoken', { itemType: 'string' });
      checkArrayField(item, regKey, 'navSteps', { itemType: 'string' });
      checkArrayField(item, regKey, 'authenticitySeals', { itemType: 'string' });
      checkArrayField(item, regKey, 'openingHours', {
        itemType: 'object',
        validateItem: (hour, i) => {
          if (!hour || typeof hour !== 'object') return `Item at index ${i} is not an object`;
          if (!hour.day || typeof hour.day !== 'string') return `Item at index ${i} missing valid "day" string`;
          if (!hour.hours || typeof hour.hours !== 'string') return `Item at index ${i} missing valid "hours" string`;
          return null;
        },
      });
      checkArrayField(item, regKey, 'whatTheySell', {
        itemType: 'object',
        validateItem: (w, i) => {
          if (!w || typeof w !== 'object') return `Item at index ${i} is not an object`;
          if (!w.item || typeof w.item !== 'string') return `Item at index ${i} missing valid "item" string`;
          return null;
        },
      });
    } else if (category === 'sleep') {
      checkArrayField(item, regKey, 'images', { itemType: 'string' });
      checkArrayField(item, regKey, 'groupTypes', { itemType: 'string' });
      checkArrayField(item, regKey, 'tags', { itemType: 'string' });
      checkArrayField(item, regKey, 'vibeTags', { itemType: 'string' });
      checkArrayField(item, regKey, 'archetypeAffinity', { itemType: 'string' });
      checkArrayField(item, regKey, 'amenities', { itemType: 'string' });
      checkArrayField(item, regKey, 'roomFeatures', { itemType: 'string' });
      checkArrayField(item, regKey, 'paymentMethods', { itemType: 'string' });
      checkArrayField(item, regKey, 'languagesSpoken', { itemType: 'string' });
      checkArrayField(item, regKey, 'pros', { itemType: 'string' });
      checkArrayField(item, regKey, 'cons', { itemType: 'string' });
      checkArrayField(item, regKey, 'roomTypes', {
        itemType: 'object',
        validateItem: (room, i) => {
          if (!room || typeof room !== 'object') return `Room at index ${i} is not an object`;
          if (!room.name || typeof room.name !== 'string') return `Room at index ${i} missing valid "name" string`;
          return null;
        },
      });
    } else if (category === 'eat') {
      checkArrayField(item, regKey, 'images', { itemType: 'string' });
      checkArrayField(item, regKey, 'groupTypes', { itemType: 'string' });
      checkArrayField(item, regKey, 'mealTypes', { itemType: 'string' });
      checkArrayField(item, regKey, 'experienceTypes', { itemType: 'string' });
      checkArrayField(item, regKey, 'foodStyles', { itemType: 'string' });
      checkArrayField(item, regKey, 'bestDishes', { itemType: 'string' });
      checkArrayField(item, regKey, 'tags', { itemType: 'string' });
      checkArrayField(item, regKey, 'vibeTags', { itemType: 'string' });
      checkArrayField(item, regKey, 'paymentMethods', { itemType: 'string' });
      checkArrayField(item, regKey, 'reservationMethod', { itemType: 'string' });
      checkArrayField(item, regKey, 'closedDays', { itemType: 'string' });
      checkArrayField(item, regKey, 'seatingTypes', { itemType: 'string' });
      checkArrayField(item, regKey, 'pros', { itemType: 'string' });
      checkArrayField(item, regKey, 'cons', { itemType: 'string' });
    }
  }
}

// -------------------------------------------------------------
// REPORT RESULTS
// -------------------------------------------------------------
console.log('=============================================================');
console.log('   MOROCCAN MATE - LISTING DATA ARRAY INTEGRITY AUDIT REPORT');
console.log('=============================================================');
console.log(`Total listings scanned: ${totalListingsScanned}`);
console.log(`  - Food (Eat):       ${countsByCategory.eat}`);
console.log(`  - Stays (Sleep):    ${countsByCategory.sleep}`);
console.log(`  - Things To Do:     ${countsByCategory.things}`);
console.log(`  - Shopping (Shop):  ${countsByCategory.shop}`);
console.log('-------------------------------------------------------------');

const fatals = anomalies.filter(a => a.severity === 'FATAL');
const warnings = anomalies.filter(a => a.severity === 'WARNING');

if (fatals.length === 0) {
  console.log('✅ ZERO FATAL ARRAY MISMATCHES FOUND across all 1,500+ listings!');
} else {
  console.log(`❌ FOUND ${fatals.length} FATAL ARRAY ANOMALIES (risk of runtime crash):`);
  fatals.slice(0, 20).forEach(f => {
    console.log(`   [FATAL] [${f.category.toUpperCase()}:${f.city}] ${f.name} -> ${f.field}: ${f.reason} (value: ${f.valueSnippet})`);
  });
  if (fatals.length > 20) {
    console.log(`   ... and ${fatals.length - 20} more fatal anomalies.`);
  }
}

console.log('-------------------------------------------------------------');
if (warnings.length === 0) {
  console.log('✅ ZERO WARNING ANOMALIES FOUND.');
} else {
  console.log(`⚠️  FOUND ${warnings.length} MINOR ANOMALIES (empty strings / empty arrays):`);
  warnings.slice(0, 15).forEach(w => {
    console.log(`   [WARN] [${w.category.toUpperCase()}:${w.city}] ${w.name} -> ${w.field}: ${w.reason}`);
  });
  if (warnings.length > 15) {
    console.log(`   ... and ${warnings.length - 15} more warnings.`);
  }
}
console.log('=============================================================\n');

if (fatals.length > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
