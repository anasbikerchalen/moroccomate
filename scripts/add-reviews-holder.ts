/**
 * =========================================================================
 * ADD MULTI-PLATFORM REVIEWS HOLDER (IDEMPOTENT)
 * =========================================================================
 *
 * Inserts an empty `reviewsData: { sources: [], reviews: [] }` holder into
 * every listing object across all 4 categories (eat, sleep, things, shop)
 * that does not yet have a `reviewsData` property.
 *
 * UI components (`ListingHeroHeader` and `PlaceReviewsSection`) strictly hide
 * multi-platform ratings whenever `sources` and `reviews` are both empty,
 * preventing any hallucinated scores while giving every listing a ready
 * placeholder slot.
 *
 * Run: npx tsx scripts/add-reviews-holder.ts
 */

import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const LISTINGS_DIR = path.join(ROOT_DIR, 'src', 'listings');

const HOLDER_SNIPPET = (indent: string) =>
  `${indent}// Multi-platform reviews holder (hidden on UI until populated)\n${indent}reviewsData: { sources: [], reviews: [] },`;

interface Edit {
  pos: number;
  text: string;
}

interface ScanStats {
  filesScanned: number;
  filesUpdated: number;
  listingsInserted: number;
  listingsAlreadyPopulated: number;
}

/**
 * Skips string literal starting at `i` (' or "). Returns index right after closing quote.
 */
function skipQuotedString(src: string, i: number): number {
  const quote = src[i];
  i++;
  while (i < src.length) {
    if (src[i] === '\\') {
      i += 2;
      continue;
    }
    if (src[i] === quote) {
      return i + 1;
    }
    i++;
  }
  return src.length;
}

/**
 * Skips template literal starting at `i` (`), including `${...}` expressions.
 */
function skipTemplateLiteral(src: string, i: number): number {
  i++; // skip opening `
  while (i < src.length) {
    if (src[i] === '\\') {
      i += 2;
      continue;
    }
    if (src[i] === '`') {
      return i + 1;
    }
    if (src[i] === '$' && src[i + 1] === '{') {
      i += 2;
      let exprDepth = 1;
      while (i < src.length && exprDepth > 0) {
        if (src[i] === "'" || src[i] === '"') {
          i = skipQuotedString(src, i);
          continue;
        }
        if (src[i] === '`') {
          i = skipTemplateLiteral(src, i);
          continue;
        }
        if (src[i] === '/' && src[i + 1] === '/') {
          const nl = src.indexOf('\n', i);
          i = nl === -1 ? src.length : nl + 1;
          continue;
        }
        if (src[i] === '/' && src[i + 1] === '*') {
          const end = src.indexOf('*/', i + 2);
          i = end === -1 ? src.length : end + 2;
          continue;
        }
        if (src[i] === '{') exprDepth++;
        else if (src[i] === '}') exprDepth--;
        i++;
      }
      continue;
    }
    i++;
  }
  return src.length;
}

function isIdentStart(ch: string): boolean {
  return /[A-Za-z_$]/.test(ch);
}

function isIdentPart(ch: string): boolean {
  return /[A-Za-z0-9_$]/.test(ch);
}

/**
 * Processes one TypeScript listing file by finding top-level exported arrays
 * and checking each direct object literal element inside them.
 */
function processFileContent(src: string): {
  updated: string;
  insertedCount: number;
  existingCount: number;
} {
  const edits: Edit[] = [];
  let insertedCount = 0;
  let existingCount = 0;

  let i = 0;
  let globalBrace = 0;
  let globalBracket = 0;
  let globalParen = 0;

  // State for scanning inside an exported array literal: `export ... = [ ... ]`
  let waitingForExportArrayEq = false;
  let waitingForExportArrayOpen = false;
  let inExportArray = false;
  let exportArrayBracketDepth = 0;

  // State for current listing object literal at exportArrayBracketDepth === 1
  let inListingObj = false;
  let objBraceDepth = 0;
  let objBracketDepth = 0;
  let hasReviewsData = false;
  let hasIdOrName = false;
  let expectPropKey = false;
  let propIndent = '    ';
  let lastSignificantCharPos = -1;
  let lastSignificantChar = '';

  const skipWSAndComments = (pos: number): number => {
    while (pos < src.length) {
      const c = src[pos];
      if (c === ' ' || c === '\t' || c === '\r' || c === '\n') {
        pos++;
      } else if (c === '/' && src[pos + 1] === '/') {
        const nl = src.indexOf('\n', pos);
        pos = nl === -1 ? src.length : nl + 1;
      } else if (c === '/' && src[pos + 1] === '*') {
        const end = src.indexOf('*/', pos + 2);
        pos = end === -1 ? src.length : end + 2;
      } else {
        break;
      }
    }
    return pos;
  };

  while (i < src.length) {
    const ch = src[i];

    // Comments
    if (ch === '/' && src[i + 1] === '/') {
      const nl = src.indexOf('\n', i);
      i = nl === -1 ? src.length : nl + 1;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2);
      i = end === -1 ? src.length : end + 2;
      continue;
    }

    // Strings
    if (ch === "'" || ch === '"') {
      const next = skipQuotedString(src, i);
      if (inListingObj) {
        if (objBraceDepth === 1 && objBracketDepth === 0 && expectPropKey) {
          const rawKey = src.slice(i + 1, next - 1);
          const afterKey = skipWSAndComments(next);
          if (src[afterKey] === ':') {
            if (rawKey === 'reviewsData') hasReviewsData = true;
            if (rawKey === 'id' || rawKey === 'name') hasIdOrName = true;
          }
          expectPropKey = false;
        }
        lastSignificantCharPos = next - 1;
        lastSignificantChar = src[next - 1];
      } else if (!inExportArray) {
        waitingForExportArrayEq = false;
        waitingForExportArrayOpen = false;
      }
      i = next;
      continue;
    }
    if (ch === '`') {
      const next = skipTemplateLiteral(src, i);
      if (inListingObj) {
        lastSignificantCharPos = next - 1;
        lastSignificantChar = src[next - 1];
        expectPropKey = false;
      } else if (!inExportArray) {
        waitingForExportArrayEq = false;
        waitingForExportArrayOpen = false;
      }
      i = next;
      continue;
    }

    // Inside a direct listing object element
    if (inListingObj) {
      if (ch === '{') {
        objBraceDepth++;
        lastSignificantCharPos = i;
        lastSignificantChar = '{';
        expectPropKey = false;
        i++;
        continue;
      }
      if (ch === '}') {
        objBraceDepth--;
        if (objBraceDepth === 0) {
          // Finished one listing object
          if (hasIdOrName) {
            if (hasReviewsData) {
              existingCount++;
            } else {
              // Ensure trailing comma on previous property if missing
              if (lastSignificantChar && lastSignificantChar !== ',' && lastSignificantChar !== '{') {
                edits.push({ pos: lastSignificantCharPos + 1, text: ',' });
              }
              // Determine insertion position cleanly before closing `}` line indentation
              const lineStart = src.lastIndexOf('\n', i) + 1;
              const beforeClosingOnLine = src.slice(lineStart, i);
              const insertPos = /^[ \t]*$/.test(beforeClosingOnLine) ? lineStart : i;
              const prefixNewline = insertPos === i ? '\n' : '';
              edits.push({
                pos: insertPos,
                text: `${prefixNewline}${HOLDER_SNIPPET(propIndent)}\n`,
              });
              insertedCount++;
            }
          }
          inListingObj = false;
          i++;
          continue;
        }
        lastSignificantCharPos = i;
        lastSignificantChar = '}';
        i++;
        continue;
      }
      if (ch === '[') {
        objBracketDepth++;
        lastSignificantCharPos = i;
        lastSignificantChar = '[';
        expectPropKey = false;
        i++;
        continue;
      }
      if (ch === ']') {
        objBracketDepth--;
        lastSignificantCharPos = i;
        lastSignificantChar = ']';
        i++;
        continue;
      }
      if (ch === ',' && objBraceDepth === 1 && objBracketDepth === 0) {
        expectPropKey = true;
        lastSignificantCharPos = i;
        lastSignificantChar = ',';
        i++;
        continue;
      }

      if (objBraceDepth === 1 && objBracketDepth === 0 && expectPropKey && isIdentStart(ch)) {
        let end = i + 1;
        while (end < src.length && isIdentPart(src[end])) end++;
        const ident = src.slice(i, end);
        const afterIdent = skipWSAndComments(end);
        if (src[afterIdent] === ':') {
          if (ident === 'reviewsData') hasReviewsData = true;
          if (ident === 'id' || ident === 'name') hasIdOrName = true;
          // Capture indentation of this property line (first property gives clean indent)
          const lineStart = src.lastIndexOf('\n', i) + 1;
          const leading = src.slice(lineStart, i);
          if (/^[ \t]+$/.test(leading) && ident === 'id') {
            propIndent = leading;
          } else if (/^[ \t]+$/.test(leading) && propIndent === '    ') {
            propIndent = leading;
          }
          expectPropKey = false;
        }
        lastSignificantCharPos = end - 1;
        lastSignificantChar = src[end - 1];
        i = end;
        continue;
      }

      if (!/\s/.test(ch)) {
        if (expectPropKey && ch !== ',') {
          // Spread or shorthand inside object
          expectPropKey = false;
        }
        lastSignificantCharPos = i;
        lastSignificantChar = ch;
      }
      i++;
      continue;
    }

    // Inside exported array (outside of any listing object)
    if (inExportArray) {
      if (ch === '[') {
        exportArrayBracketDepth++;
        i++;
        continue;
      }
      if (ch === ']') {
        exportArrayBracketDepth--;
        if (exportArrayBracketDepth === 0) {
          inExportArray = false;
        }
        i++;
        continue;
      }
      if (ch === '{' && exportArrayBracketDepth === 1) {
        inListingObj = true;
        objBraceDepth = 1;
        objBracketDepth = 0;
        hasReviewsData = false;
        hasIdOrName = false;
        expectPropKey = true;
        propIndent = '    ';
        lastSignificantCharPos = i;
        lastSignificantChar = '{';
        i++;
        continue;
      }
      i++;
      continue;
    }

    // Global level: detect `export ... = [`
    if (ch === '{') {
      globalBrace++;
      i++;
      continue;
    }
    if (ch === '}') {
      globalBrace = Math.max(0, globalBrace - 1);
      i++;
      continue;
    }
    if (ch === '(') {
      globalParen++;
      i++;
      continue;
    }
    if (ch === ')') {
      globalParen = Math.max(0, globalParen - 1);
      i++;
      continue;
    }
    if (ch === '[') {
      if (waitingForExportArrayOpen && globalBrace === 0 && globalParen === 0) {
        waitingForExportArrayOpen = false;
        inExportArray = true;
        exportArrayBracketDepth = 1;
        i++;
        continue;
      }
      globalBracket++;
      i++;
      continue;
    }
    if (ch === ']') {
      globalBracket = Math.max(0, globalBracket - 1);
      i++;
      continue;
    }

    if (waitingForExportArrayEq && ch === '=' && src[i + 1] !== '>' && globalBrace === 0 && globalParen === 0 && globalBracket === 0) {
      waitingForExportArrayEq = false;
      waitingForExportArrayOpen = true;
      i++;
      continue;
    }

    if (waitingForExportArrayOpen && !/\s/.test(ch)) {
      // Something other than `[` followed `=`, reset
      waitingForExportArrayOpen = false;
    }

    if (ch === ';') {
      waitingForExportArrayEq = false;
      waitingForExportArrayOpen = false;
      i++;
      continue;
    }

    if (globalBrace === 0 && globalBracket === 0 && globalParen === 0 && isIdentStart(ch)) {
      let end = i + 1;
      while (end < src.length && isIdentPart(src[end])) end++;
      const word = src.slice(i, end);
      if (word === 'export') {
        const afterExport = skipWSAndComments(end);
        const rest = src.slice(afterExport);
        if (/^(const|let|var|default)\b/.test(rest)) {
          waitingForExportArrayEq = true;
        }
      }
      i = end;
      continue;
    }

    i++;
  }

  if (edits.length === 0) {
    return { updated: src, insertedCount: 0, existingCount };
  }

  // Apply edits in reverse offset order
  edits.sort((a, b) => b.pos - a.pos);
  let result = src;
  for (const edit of edits) {
    result = result.slice(0, edit.pos) + edit.text + result.slice(edit.pos);
  }

  return { updated: result, insertedCount, existingCount };
}

function collectListingFiles(dir: string, suffix: string, out: string[] = []): string[] {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectListingFiles(full, suffix, out);
    } else if (
      entry.isFile() &&
      entry.name.endsWith(suffix) &&
      !entry.name.startsWith('template.') &&
      entry.name !== 'index.ts'
    ) {
      out.push(full);
    }
  }
  return out;
}

function runCategory(category: 'eat' | 'sleep' | 'shop' | 'things', suffix: string): ScanStats {
  const dir = path.join(LISTINGS_DIR, category);
  const files = collectListingFiles(dir, suffix).sort();
  const stats: ScanStats = {
    filesScanned: files.length,
    filesUpdated: 0,
    listingsInserted: 0,
    listingsAlreadyPopulated: 0,
  };

  for (const filePath of files) {
    const original = fs.readFileSync(filePath, 'utf-8');
    const { updated, insertedCount, existingCount } = processFileContent(original);
    stats.listingsInserted += insertedCount;
    stats.listingsAlreadyPopulated += existingCount;

    if (insertedCount > 0 && updated !== original) {
      fs.writeFileSync(filePath, updated, 'utf-8');
      stats.filesUpdated++;
      const rel = path.relative(ROOT_DIR, filePath);
      console.log(`  [UPDATED] ${rel}: +${insertedCount} reviewsData holders (${existingCount} already had reviewsData)`);
    }
  }

  return stats;
}

console.log('Scaffolding reviewsData holders across all 4 categories...\n');

const categories: Array<{ name: 'eat' | 'sleep' | 'shop' | 'things'; suffix: string }> = [
  { name: 'eat', suffix: '.eat.ts' },
  { name: 'sleep', suffix: '.sleep.ts' },
  { name: 'shop', suffix: '.shop.ts' },
  { name: 'things', suffix: '.things.ts' },
];

let grandFiles = 0;
let grandUpdated = 0;
let grandInserted = 0;
let grandExisting = 0;

for (const cat of categories) {
  console.log(`Category: ${cat.name.toUpperCase()}`);
  const s = runCategory(cat.name, cat.suffix);
  console.log(
    `  Summary -> scanned: ${s.filesScanned} files, updated: ${s.filesUpdated} files, inserted: ${s.listingsInserted}, existing: ${s.listingsAlreadyPopulated}\n`
  );
  grandFiles += s.filesScanned;
  grandUpdated += s.filesUpdated;
  grandInserted += s.listingsInserted;
  grandExisting += s.listingsAlreadyPopulated;
}

console.log(
  `DONE! Total across all categories: ${grandFiles} files scanned, ${grandUpdated} files updated, ${grandInserted} reviewsData holders added, ${grandExisting} already present.`
);
