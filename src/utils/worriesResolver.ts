import type {
  WorryBoxData,
  WorryIconKey,
  TagColorKey,
  WorryTone,
  WorryBoxState,
} from '../data/prototype/worriesPrototype';

export interface ThingsWorryConfig {
  id: string;
  title: string;
  icon: WorryIconKey;
  goodImage: string;
  badImage: string;
  defaultTagColor: TagColorKey;
  summary: string;
}

/**
 * The 5 canonical traveler worries for "Things to Do" (Activities).
 * Maps each worry to its corresponding good / bad Mimi illustration
 * from the Mimi_images collection.
 *
 * NOTE: the per-listing worry DATA (tag / description / tone / source) now
 * lives INSIDE each listing file (the `worries` field of every listing in
 * src/listings/things/<city>/*.things.ts). This registry only supplies
 * PRESENTATION defaults (title, icon, illustrations) and acts as the
 * fallback when a listing has no inline worries yet.
 */
export const CANONICAL_THINGS_WORRIES: ThingsWorryConfig[] = [
  {
    id: 'activity-safety',
    title: 'Safety',
    icon: 'shield',
    goodImage: '/images/worries/activity_safety_good.jpg',
    badImage: '/images/worries/activity_safety_bad.jpg',
    defaultTagColor: 'safety',
    summary: 'Equipment condition, certified guides, safety protocol',
  },
  {
    id: 'activity-scams',
    title: 'Scams',
    icon: 'warning',
    goodImage: '/images/worries/activity_scam_good.jpg',
    badImage: '/images/worries/activity_scam_bad.jpg',
    defaultTagColor: 'alert',
    summary: 'Licensed provider, promised itinerary, no fake tours',
  },
  {
    id: 'activity-pricing',
    title: 'Pricing',
    icon: 'tag',
    goodImage: '/images/worries/activity_pricing_good.jpg',
    badImage: '/images/worries/activity_pricing_bad.jpg',
    defaultTagColor: 'money',
    summary: 'Clear pricing, transparent extras, no surprise bills',
  },
  {
    id: 'activity-authenticity',
    title: 'Authenticity',
    icon: 'gem',
    goodImage: '/images/worries/acitivity_Authenticity_good.jpg',
    badImage: '/images/worries/acitivity_Authenticity_bad.jpg',
    defaultTagColor: 'craft',
    summary: 'Real Moroccan craft/culture vs staged tourist show',
  },
  {
    id: 'activity-difficulty',
    title: 'Difficulty',
    icon: 'mountain',
    goodImage: '/images/worries/activity_Difficulty_good.jpg',
    badImage: '/images/worries/activity_Difficulty_bad.jpg',
    defaultTagColor: 'safety',
    summary: 'Physical demands, trail difficulty, suitability for all',
  },
];

/**
 * Resolves the 5 Things-To-Do traveler worries for a listing.
 * `raw` is the listing's inline `worries` field (ThingWorryEntry[] — see
 * src/listings/types.ts), coming straight from the listing data file.
 *
 * Rules:
 *  - When info is not gathered yet (placeholder `["not available"]` or undefined),
 *    returns the 5 canonical worries marked with `state: 'pending'`,
 *    tag: '(not available yet)', and description: '(not available yet)'.
 *    The box displays the canonical Mimi illustration so travelers get visual cues.
 *  - When verified data is gathered manually by the owner in the future,
 *    it respects the custom `tag`, `description`, `tone`, `tagColor`,
 *    and switches between `goodImage` and `badImage` accordingly.
 */
export function resolveThingsWorries(raw?: any): WorryBoxData[] {
  // Check if raw data is empty, undefined, or explicitly holding the placeholder string
  const isPlaceholderOnly =
    !raw ||
    (Array.isArray(raw) &&
      (raw.length === 0 ||
        (raw.length === 1 && typeof raw[0] === 'string' && raw[0].toLowerCase().includes('not available')))) ||
    (typeof raw === 'string' && raw.toLowerCase().includes('not available'));

  if (isPlaceholderOnly) {
    return CANONICAL_THINGS_WORRIES.map((c) => ({
      id: c.id,
      title: c.title,
      icon: c.icon,
      description: '(not available yet)',
      tag: '(not available yet)',
      state: 'pending' as WorryBoxState,
      image: c.goodImage,
    }));
  }

  // If raw is an array of objects
  if (Array.isArray(raw)) {
    return CANONICAL_THINGS_WORRIES.map((c) => {
      const found = raw.find((item: any) => {
        if (!item || typeof item !== 'object') return false;
        const normId = (item.id || '').toLowerCase().replace(/^(activity|thing)[-_]/, '');
        const cNorm = c.id.replace(/^activity-/, '');
        return normId === cNorm || (item.title && item.title.toLowerCase() === c.title.toLowerCase());
      });

      if (!found || !found.tag || String(found.tag).toLowerCase().includes('not available')) {
        return {
          id: c.id,
          title: c.title,
          icon: c.icon,
          description: '(not available yet)',
          tag: '(not available yet)',
          state: 'pending' as WorryBoxState,
          image: c.goodImage,
        };
      }

      const tone: WorryTone = found.tone === 'caution' ? 'caution' : 'good';
      const defaultImg = tone === 'caution' ? c.badImage : c.goodImage;

      return {
        id: c.id,
        title: c.title,
        icon: c.icon,
        description: found.description || '(not available yet)',
        tag: found.tag || '(not available yet)',
        state: (found.state || 'verified') as WorryBoxState,
        tone,
        tagColor: found.tagColor || (tone === 'good' ? c.defaultTagColor : 'alert'),
        image: found.image || defaultImg,
        source: found.source,
      };
    });
  }

  // If raw is an object keyed by worry key (e.g. { safety: { tag: "..." } })
  if (typeof raw === 'object') {
    return CANONICAL_THINGS_WORRIES.map((c) => {
      const key = c.id.replace(/^activity-/, '');
      const found = raw[c.id] || raw[key];
      if (!found || !found.tag || String(found.tag).toLowerCase().includes('not available')) {
        return {
          id: c.id,
          title: c.title,
          icon: c.icon,
          description: '(not available yet)',
          tag: '(not available yet)',
          state: 'pending' as WorryBoxState,
          image: c.goodImage,
        };
      }

      const tone: WorryTone = found.tone === 'caution' ? 'caution' : 'good';
      const defaultImg = tone === 'caution' ? c.badImage : c.goodImage;

      return {
        id: c.id,
        title: c.title,
        icon: c.icon,
        description: found.description || '(not available yet)',
        tag: found.tag || '(not available yet)',
        state: (found.state || 'verified') as WorryBoxState,
        tone,
        tagColor: found.tagColor || (tone === 'good' ? c.defaultTagColor : 'alert'),
        image: found.image || defaultImg,
        source: found.source,
      };
    });
  }

  // Fallback
  return CANONICAL_THINGS_WORRIES.map((c) => ({
    id: c.id,
    title: c.title,
    icon: c.icon,
    description: '(not available yet)',
    tag: '(not available yet)',
    state: 'pending' as WorryBoxState,
    image: c.goodImage,
  }));
}
