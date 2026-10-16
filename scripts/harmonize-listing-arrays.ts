/**
 * =========================================================================
 * LISTING ARRAYS & HEADER BIBLE HARMONIZATION SCRIPT
 * =========================================================================
 *
 * 1. Scans all city listing files in:
 *    - src/listings/eat/*.eat.ts
 *    - src/listings/sleep/*.sleep.ts
 *    - src/listings/things/*.things.ts
 *    - src/listings/shop/*.shop.ts
 *
 * 2. Normalizes synonyms in groupTypes and mealTypes:
 *    - 'couples' -> 'couple'
 *    - 'families' -> 'family'
 *    - 'kids-friendly' -> 'family'
 *    - 'business' -> 'business-friendly'
 *    - 'latenight' -> 'late-night'
 *    - Deduplicates arrays so no duplicate values exist.
 *
 * 3. Updates header comment bible blocks to guarantee 100% alignment
 *    with template.*.ts and types.ts.
 *
 * Run: npx tsx scripts/harmonize-listing-arrays.ts
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

const ROOT_DIR = process.cwd();
const LISTINGS_DIR = resolve(ROOT_DIR, 'src/listings');

const GROUP_SYNONYMS: Record<string, string> = {
  couples: 'couple',
  families: 'family',
  'kids-friendly': 'family',
  business: 'business-friendly',
};

const MEAL_SYNONYMS: Record<string, string> = {
  latenight: 'late-night',
};

interface Stats {
  filesProcessed: number;
  filesModified: number;
  groupReplacements: number;
  mealReplacements: number;
}

const stats: Stats = {
  filesProcessed: 0,
  filesModified: 0,
  groupReplacements: 0,
  mealReplacements: 0,
};

function processArrayLiteral(
  arrayStr: string,
  synonyms: Record<string, string>,
  counterKey: 'groupReplacements' | 'mealReplacements'
): string {
  // arrayStr is e.g. "['solo', 'couple', 'kids-friendly']"
  const content = arrayStr.slice(1, -1);
  const rawItems = content.split(',').map((s) => s.trim()).filter(Boolean);
  const quoteChar = content.includes('"') ? '"' : "'";

  const unique = new Set<string>();
  let changed = false;

  for (const raw of rawItems) {
    const unquoted = raw.replace(/^['"]|['"]$/g, '');
    let mapped = unquoted;
    if (synonyms[unquoted]) {
      mapped = synonyms[unquoted];
      stats[counterKey]++;
      changed = true;
    }
    unique.add(mapped);
  }

  // If items changed or duplicates were merged
  const newItems = Array.from(unique);
  if (changed || newItems.length !== rawItems.length) {
    const isMultiLine = arrayStr.includes('\n');
    if (isMultiLine) {
      const indentMatch = arrayStr.match(/\n(\s+)/);
      const itemIndent = indentMatch ? indentMatch[1] : '      ';
      const closeIndent = itemIndent.length >= 2 ? itemIndent.slice(2) : '    ';
      return `[\n${newItems.map((item) => `${itemIndent}${quoteChar}${item}${quoteChar}`).join(',\n')}\n${closeIndent}]`;
    }
    return `[${newItems.map((item) => `${quoteChar}${item}${quoteChar}`).join(', ')}]`;
  }
  return arrayStr;
}

function processFileContent(content: string, category: 'eat' | 'sleep' | 'things' | 'shop'): { newContent: string; modified: boolean } {
  let modified = false;

  // 1. Normalize groupTypes: [...] (supporting "groupTypes" and 'groupTypes')
  let updated = content.replace(/(["']?groupTypes["']?):\s*(\[[^\]]*\])/g, (match, keyPrefix, arrayPart) => {
    const replaced = processArrayLiteral(arrayPart, GROUP_SYNONYMS, 'groupReplacements');
    if (replaced !== arrayPart) {
      modified = true;
      return `${keyPrefix}: ${replaced}`;
    }
    return match;
  });

  // 2. Normalize mealTypes: [...]
  if (category === 'eat') {
    updated = updated.replace(/(["']?mealTypes["']?):\s*(\[[^\]]*\])/g, (match, keyPrefix, arrayPart) => {
      const replaced = processArrayLiteral(arrayPart, MEAL_SYNONYMS, 'mealReplacements');
      if (replaced !== arrayPart) {
        modified = true;
        return `${keyPrefix}: ${replaced}`;
      }
      return match;
    });
  }

  // 3. Harmonize header comment bible
  if (category === 'eat') {
    const oldGroupHeader = /\* - groupTypes:\s*.*(?=\n)/g;
    const newGroupHeader = "* - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors' | 'business-friendly' | 'nature-lover'";
    if (oldGroupHeader.test(updated) && !updated.includes(newGroupHeader)) {
      updated = updated.replace(oldGroupHeader, newGroupHeader);
      modified = true;
    }

    const oldMealHeader = /\* - mealTypes:\s*.*(?=\n)/g;
    const newMealHeader = "* - mealTypes:        'breakfast' | 'lunch' | 'dinner' | 'late-night' | 'snack' | 'brunch' | 'drinks' | 'afternoon-tea' | 'flexible'";
    if (oldMealHeader.test(updated) && !updated.includes(newMealHeader)) {
      updated = updated.replace(oldMealHeader, newMealHeader);
      modified = true;
    }
  } else if (category === 'sleep') {
    const oldGroupHeader = /\* - groupTypes:\s*.*(?=\n)/g;
    const newGroupHeader = "* - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors' | 'business-friendly' | 'nature-lover'";
    if (oldGroupHeader.test(updated) && !updated.includes(newGroupHeader)) {
      updated = updated.replace(oldGroupHeader, newGroupHeader);
      modified = true;
    }
  } else if (category === 'things') {
    const oldGroupHeader = /\* - groupTypes:\s*.*(?=\n)/g;
    const newGroupHeader = "* - groupTypes:       'solo' | 'couple' | 'family' | 'friends' | 'large-groups' | 'seniors' | 'business-friendly' | 'nature-lover'";
    if (oldGroupHeader.test(updated) && !updated.includes(newGroupHeader)) {
      updated = updated.replace(oldGroupHeader, newGroupHeader);
      modified = true;
    }
  }

  return { newContent: updated, modified };
}

function processDirectory(catDir: string, category: 'eat' | 'sleep' | 'things' | 'shop') {
  const fullPath = join(LISTINGS_DIR, catDir);
  const files = readdirSync(fullPath).filter((f) => f.endsWith('.ts'));

  for (const file of files) {
    stats.filesProcessed++;
    const filePath = join(fullPath, file);
    const content = readFileSync(filePath, 'utf8');
    const { newContent, modified } = processFileContent(content, category);

    if (modified) {
      writeFileSync(filePath, newContent, 'utf8');
      stats.filesModified++;
      console.log(`[harmonize] Updated ${catDir}/${file}`);
    }
  }
}

console.log('Starting listing array & header harmonization...');
processDirectory('eat', 'eat');
processDirectory('sleep', 'sleep');
processDirectory('things', 'things');
processDirectory('shop', 'shop');

console.log('==============================================');
console.log(`Harmonization Complete!`);
console.log(`Total files scanned:    ${stats.filesProcessed}`);
console.log(`Files modified:         ${stats.filesModified}`);
console.log(`groupTypes normalized:  ${stats.groupReplacements}`);
console.log(`mealTypes normalized:   ${stats.mealReplacements}`);
console.log('==============================================');
