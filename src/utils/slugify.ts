/**
 * Convert a string to a URL-friendly slug.
 * Accent-safe: "Café des Épices" -> "cafe-des-epices" (kept readable for
 * humans and search engines instead of the old "caf-des-pices").
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')                    // Split accented letters: é -> e + ́
    .replace(/[\u0300-\u036f]/g, '')     // Strip the accent marks
    .toLowerCase()
    .trim()
    .replace(/['’`]/g, '')               // Drop apostrophes: "McDonald's" -> "mcdonalds"
    .replace(/[^a-z0-9_]+/g, '-')        // Replace remaining non-url chars with -
    .replace(/-+/g, '-')                 // Collapse multiple -
    .replace(/^-+/, '')                  // Trim - from start
    .replace(/-+$/, '');                 // Trim - from end
}
