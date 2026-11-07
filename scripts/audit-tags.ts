/**
 * =========================================================================
 * TAG & HEALTH INSPECTOR — prints the category tag audit report
 * =========================================================================
 *
 * Run:   npm run audit             (all four categories)
 *        npm run audit -- sleep    (one category: sleep | eat | things | shop)
 *
 * Scans the RAW collected data (never modified) and reports:
 * - Missing tags: "structured data says 'pool' but the tag is missing"
 * - Missing health fields: rating, coordinates, price, description…
 * - Data quality issues: possibly-closed, wrong-city, hidden…
 */

import { auditCategoryTags, type ControllerCategory, type TagAuditIssue } from '../src/data/controllers';

const arg = process.argv[2] as ControllerCategory | undefined;
const validCategories: ControllerCategory[] = ['sleep', 'eat', 'things', 'shop'];
const results = arg && validCategories.includes(arg)
  ? [auditCategoryTags(arg)]
  : validCategories.map(c => auditCategoryTags(c));

// Keep the console report sane — show the first 10 issues per list
const CAP = 10;

const printIssues = (title: string, issues: TagAuditIssue[]) => {
  if (issues.length === 0) {
    console.log(`  [OK] ${title}: none`);
    return;
  }
  console.log(`  [!!] ${title}: ${issues.length}`);
  issues.slice(0, CAP).forEach(i => console.log(`       - [${i.city}] ${i.name} — ${i.issue}`));
  if (issues.length > CAP) console.log(`       ... and ${issues.length - CAP} more`);
};

for (const r of results) {
  console.log('');
  console.log(`=== ${r.category.toUpperCase()} — ${r.totalListings} places across ${r.citiesCovered} cities ===`);
  printIssues('Missing tags (data exists, tag absent)', r.missingTags);
  printIssues('Missing fields', r.missingFields);
  printIssues('Data quality issues', r.dataIssues);
}
console.log('');