import type {
  WorryBoxData,
  WorryIconKey,
  TagColorKey,
  WorryTone,
  WorryBoxState,
} from '../data/prototype/worriesPrototype';

export interface EatWorryConfig {
  id: string;
  aliases: string[];
  title: string;
  icon: WorryIconKey;
  goodImage: string;
  badImage: string;
  defaultTagColor: TagColorKey;
  globalManifestation: string;
  moroccoManifestation: string;
}

/**
 * The 5 canonical traveler worries for "Eat" (Restaurants & Food in Morocco).
 * Maps each worry to its corresponding good / bad Mimi illustration
 * from the Mimi_images/mimi-eat collection.
 */
export const CANONICAL_EAT_WORRIES: EatWorryConfig[] = [
  {
    id: 'financial-trust',
    aliases: ['financial', 'financial_trust', 'hidden-charges', 'pricing', 'bill'],
    title: 'Financial Trust',
    icon: 'receipt',
    goodImage: '/images/worries/eat/Financial_good.jpg',
    badImage: '/images/worries/eat/Financial_bad.jpg',
    defaultTagColor: 'money',
    globalManifestation: 'Hidden service charges, inflated tourist-zone prices, or menus without prices.',
    moroccoManifestation: 'Bread, olives, or mint tea brought to the table automatically and then added to the final bill.',
  },
  {
    id: 'health-safety',
    aliases: ['health', 'safety', 'physical', 'physical_safety', 'physical-safety', 'food-water-safety', 'hygiene'],
    title: 'Health & Safety',
    icon: 'droplets',
    goodImage: '/images/worries/eat/Physical_good.jpg',
    badImage: '/images/worries/eat/Physical_bad.jpg',
    defaultTagColor: 'water',
    globalManifestation: "Fear of getting traveler's diarrhea, food poisoning, or eating spoiled ingredients.",
    moroccoManifestation: 'Concerns over tap water hidden in ice/juices, unwashed raw salads, or street-side seafood freshness.',
  },
  {
    id: 'culinary-authenticity',
    aliases: ['culinary', 'authenticity', 'culinary_authenticity', 'tourist-trap-food', 'food-quality'],
    title: 'Culinary Authenticity',
    icon: 'chef',
    goodImage: '/images/worries/eat/Culinary_good.jpg',
    badImage: '/images/worries/eat/Culinary_bad.jpg',
    defaultTagColor: 'food',
    globalManifestation: 'Falling into a bland tourist trap that serves microwaved, mass-produced, or uninspired local food.',
    moroccoManifestation: 'Getting dry, unseasoned tagines or bland couscous designed for timid palates in tourist-heavy medinas.',
  },
  {
    id: 'comfort-environment',
    aliases: ['comfort', 'environment', 'comfort_environment', 'pushy-touts', 'touts', 'atmosphere'],
    title: 'Comfort & Atmosphere',
    icon: 'megaphone',
    goodImage: '/images/worries/eat/Comfort_good.jpg',
    badImage: '/images/worries/eat/Comfort_bad.jpg',
    defaultTagColor: 'alert',
    globalManifestation: 'Feeling pressured, scammed, or uncomfortable while trying to choose a place to eat.',
    moroccoManifestation: 'Dealing with aggressive street touts (racoleurs) outside medina restaurants trying to pull you inside.',
  },
  {
    id: 'service-expectations',
    aliases: ['service', 'service_expectations', 'service-pace', 'pace', 'hospitality'],
    title: 'Service Expectations',
    icon: 'clock',
    goodImage: '/images/worries/eat/Service_good.jpg',
    badImage: '/images/worries/eat/Service_bad.jpg',
    defaultTagColor: 'safety',
    globalManifestation: 'Slow service, rude staff, or feeling ignored by the waiters.',
    moroccoManifestation: 'Cultural mismatch where a relaxed, unhurried Moroccan pace is misinterpreted by tourists as neglect.',
  },
];

/**
 * Resolves the 5 Eat traveler worries for a restaurant listing.
 * Strict Rule: Only returns data if verified information is available in code.
 * If raw is missing, empty, or unverified, returns null so the UI remains completely hidden.
 */
export function resolveEatWorries(raw?: any): WorryBoxData[] | null {
  if (!raw) return null;

  // If raw is an array of objects
  const rawArray: any[] = Array.isArray(raw)
    ? raw
    : typeof raw === 'object'
    ? Object.entries(raw).map(([k, v]) => ({ id: k, ...(typeof v === 'object' ? v : { tag: v }) }))
    : [];

  if (rawArray.length === 0) return null;

  // Filter out pending/placeholder entries
  const hasAnyVerified = rawArray.some((item) => {
    if (!item || typeof item !== 'object') return false;
    const tag = String(item.tag || '').toLowerCase();
    const desc = String(item.description || '').toLowerCase();
    return (
      (item.state === 'verified' || tag.length > 0) &&
      !tag.includes('not available') &&
      !tag.includes('pending') &&
      !desc.includes('not available')
    );
  });

  if (!hasAnyVerified) return null;

  // Build the 5 canonical cards
  const result: WorryBoxData[] = CANONICAL_EAT_WORRIES.map((c) => {
    const found = rawArray.find((item: any) => {
      if (!item || typeof item !== 'object') return false;
      const itemId = String(item.id || '').toLowerCase().replace(/^(eat|food)[-_]/, '');
      const itemTitle = String(item.title || '').toLowerCase();
      if (itemId === c.id || c.aliases.includes(itemId)) return true;
      if (itemTitle && c.aliases.some((alias) => itemTitle.includes(alias) || alias.includes(itemTitle))) return true;
      return false;
    });

    const isVerified =
      found &&
      found.tag &&
      !String(found.tag).toLowerCase().includes('not available') &&
      !String(found.tag).toLowerCase().includes('pending');

    const tone: WorryTone = found?.tone === 'caution' ? 'caution' : 'good';
    const image = found?.image || (tone === 'caution' ? c.badImage : c.goodImage);

    if (isVerified) {
      return {
        id: c.id,
        title: found.title || c.title,
        icon: c.icon,
        description: found.description || c.moroccoManifestation,
        tag: found.tag,
        state: 'verified' as WorryBoxState,
        tone,
        tagColor: found.tagColor || (tone === 'good' ? c.defaultTagColor : 'alert'),
        image,
        source: found.source,
      };
    }

    // Default card for unverified slot when other slots have data
    return {
      id: c.id,
      title: c.title,
      icon: c.icon,
      description: c.moroccoManifestation,
      tag: '(not available yet)',
      state: 'pending' as WorryBoxState,
      image: c.goodImage,
    };
  });

  return result;
}
