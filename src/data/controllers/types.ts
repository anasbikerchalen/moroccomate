/**
 * =========================================================================
 * CATEGORY CONTROLLERS — shared types
 * =========================================================================
 *
 * The controllers bring all scattered city listing files under full control:
 * one master catalog per category, one place to define global tag rules, and
 * one audit inspector that reports missing tags & health fields.
 *
 * DATA INTEGRITY: enrichment is READ-TIME and NON-MUTATING. The hand-collected
 * real data (ML training source) is never modified — tags are only added in
 * the copies the website reads, so matching and filters never fail.
 */

/** A global tag rule: defined ONCE, injected into every matching place in every city */
export interface TagRule {
  /** The injected tag (kebab-case, matches quiz option tags & filter tags) */
  tag: string;
  /** Condition over the RAW listing's structured fields */
  condition: (listing: any) => boolean;
}

/** One problematic place found by the audit */
export interface TagAuditIssue {
  listingId: string;
  name: string;
  city: string;
  issue: string;
}

/** Full audit report for one category */
export interface CategoryAuditResult {
  category: string;
  totalListings: number;
  citiesCovered: number;
  /** Tags that should be present (structured data says so) but are missing from the RAW tags array */
  missingTags: TagAuditIssue[];
  /** Missing health fields (rating, coordinates, price, description…) */
  missingFields: TagAuditIssue[];
  /** Data quality problems (possibly-closed, wrong-city, hidden…) */
  dataIssues: TagAuditIssue[];
}

export type ControllerCategory = 'sleep' | 'eat' | 'things' | 'shop';