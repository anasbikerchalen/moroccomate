# Implementation Plan - SEO Indexing Disparity Fix for Eat, Stay, and Shopping

## Problem Statement
Google Search Console reports **"Discovered – currently not indexed"** for Eat, Stay, and Shopping listing pages (`/place/:city/:category/:slug`), while "Things to Do" listings are heavily indexed.
Root cause analysis shows that while URLs are correctly generated in `sitemap.xml`, the browse pages (e.g., `/finder/:city/food`, `/finder/:city/sleep`, `/finder/:city/shopping`) render listing cards as `div` elements with client-side `onClick` handlers rather than standard crawlable HTML anchor tags (`<Link to="...">` or `<a href="...">`). Consequently, Googlebot cannot discover or traverse internal links to these pages organically during crawling.

---

## Proposed Changes

### 1. `src/components/finder/CategoryListing.tsx`
- Convert listing cards (both shop cards and standard listing cards) from interactive `div` elements with `onClick` into semantic router `<Link>` components (or wrap card bodies in `<Link to={getListingUrl(item)}>`) so Googlebot sees direct, crawlable HTML `<a href="...">` links.
- Ensure all secondary action buttons (`View Details →`) also use `<Link>` components pointing to the clean place URL.

### 2. Verify Additional Listing Renderers
- Audit other listing view components (e.g., `EatCuratedView`, `ThingsCuratedView`, search intent landing pages) to ensure all place links use proper anchor tags.

---

## Verification Plan
1. Run `npm run build` / `compile_applet` to verify zero TypeScript or build errors.
2. Inspect rendered HTML structure of category browse pages to confirm every listing card contains a valid `href="/place/..."` attribute.
