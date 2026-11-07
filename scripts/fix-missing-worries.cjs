/**
 * fix-missing-worries.cjs
 * Adds the worries placeholder field to all ThingToDoListing objects
 * that are missing it. Inserts before `address:` when found, otherwise
 * inserts before `googleMapsUrl:` as a safe fallback.
 *
 * Run: node finder-website/scripts/fix-missing-worries.cjs
 */

const fs = require('fs');
const path = require('path');

const THINGS_DIR = path.join(__dirname, '..', 'src', 'listings', 'things');

const WORRIES_COMMENT = `    // ── WORRIES ("Things You're Worried About!") ────────────────────────────
    // Pending placeholder — replace with verified real data when ready.
    // Each worry: { type, title, headline, description, tips?, reassurance }
    worries: ["not available"],`;

let totalFilesUpdated = 0;
let totalInsertions = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if worries already present in this file
  if (content.includes('worries:')) {
    console.log(`  ✓ SKIP (already has worries): ${path.basename(filePath)}`);
    return;
  }

  let insertions = 0;

  // Strategy 1: Insert before `address:` lines
  // Matches: any whitespace + 'address:' that is NOT already preceded by worries comment
  const addressPattern = /(\r?\n)(\s+)(address:\s*"[^"]*")/g;
  let newContent = content.replace(addressPattern, (match, nl, indent, addressLine) => {
    insertions++;
    return `${nl}${WORRIES_COMMENT}\n${indent}${addressLine}`;
  });

  // Strategy 2: If no `address:` found insertions, try inserting before `googleMapsUrl:`
  if (insertions === 0) {
    const mapsPattern = /(\r?\n)(\s+)(googleMapsUrl:\s*"[^"]*")/g;
    newContent = content.replace(mapsPattern, (match, nl, indent, mapsLine) => {
      insertions++;
      return `${nl}${WORRIES_COMMENT}\n${indent}${mapsLine}`;
    });
  }

  if (insertions === 0) {
    console.log(`  ⚠ WARN: Could not find insertion point in ${path.basename(filePath)}`);
    return;
  }

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`  ✅ UPDATED: ${path.basename(filePath)} (${insertions} listings)`);
  totalFilesUpdated++;
  totalInsertions += insertions;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.things.ts')) {
      processFile(fullPath);
    }
  }
}

console.log('🔍 Scanning for listing files missing the worries field...\n');
walkDir(THINGS_DIR);
console.log(`\n✅ Done! Updated ${totalFilesUpdated} files with ${totalInsertions} worries insertions.`);
