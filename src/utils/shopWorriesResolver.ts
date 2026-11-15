import type {
  WorryBoxData,
  WorryIconKey,
  TagColorKey,
  WorryTone,
  WorryBoxState,
} from '../data/prototype/worriesPrototype';

export interface ShopWorryConfig {
  id: string;
  aliases: string[];
  title: string;
  icon: WorryIconKey;
  defaultTagColor: TagColorKey;
  moroccoManifestation: string;
}

/**
 * The 5 canonical traveler worries for "Shopping" in Morocco.
 */
export const CANONICAL_SHOP_WORRIES: ShopWorryConfig[] = [
  {
    id: 'shop-scams',
    aliases: ['scam', 'scams', 'trust', 'tout', 'touts', 'fakes', 'shop_scams'],
    title: 'Scams',
    icon: 'warning',
    defaultTagColor: 'alert',
    moroccoManifestation: 'Pressure from street touts, commission guides, or misleading seller claims.',
  },
  {
    id: 'shop-pricing',
    aliases: ['pricing', 'price', 'prices', 'bargaining', 'haggling', 'fixed-price', 'shop_pricing'],
    title: 'Pricing',
    icon: 'tag',
    defaultTagColor: 'money',
    moroccoManifestation: 'Unclear asking prices, tourist markups, or pressure during bargaining.',
  },
  {
    id: 'shop-quality',
    aliases: ['quality', 'materials', 'durability', 'craftsmanship', 'shop_quality'],
    title: 'Quality',
    icon: 'award',
    defaultTagColor: 'craft',
    moroccoManifestation: 'Concerns about material durability, stitching, freshness, or product finishing.',
  },
  {
    id: 'shop-authenticity',
    aliases: ['authenticity', 'authentic', 'handmade', 'genuine', 'origin', 'shop_authenticity'],
    title: 'Authenticity',
    icon: 'gem',
    defaultTagColor: 'craft',
    moroccoManifestation: 'Distinguishing genuine Moroccan craftsmanship or authentic brands from mass imports.',
  },
  {
    id: 'shop-returns',
    aliases: ['returns', 'return', 'refund', 'refunds', 'exchange', 'receipt', 'shop_returns'],
    title: 'Returns',
    icon: 'rotate',
    defaultTagColor: 'money',
    moroccoManifestation: 'Return, exchange, and refund policies if sizing or condition issues arise after purchase.',
  },
];

/**
 * Resolves the 5 Shopping traveler worries for a shop listing.
 * Strict Rule: Only returns data if at least one verified worry exists.
 * If raw is missing, empty, or purely pending/placeholder, returns null so the UI stays hidden.
 */
export function resolveShopWorries(raw?: any): WorryBoxData[] | null {
  if (!raw) return null;

  const rawArray: any[] = Array.isArray(raw)
    ? raw
    : typeof raw === 'object'
    ? Object.entries(raw).map(([k, v]) => ({
        id: k,
        ...(typeof v === 'object' && v !== null ? v : { tag: v }),
      }))
    : [];

  if (rawArray.length === 0) return null;

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

  return CANONICAL_SHOP_WORRIES.map((c) => {
    const found = rawArray.find((item: any) => {
      if (!item || typeof item !== 'object') return false;
      const itemId = String(item.id || '').toLowerCase().replace(/^(shop|shopping)[-_]/, 'shop-');
      const shortId = itemId.replace(/^shop-/, '');
      const itemTitle = String(item.title || '').toLowerCase();
      if (itemId === c.id || c.aliases.includes(itemId) || c.aliases.includes(shortId)) return true;
      if (itemTitle && c.aliases.some((alias) => itemTitle.includes(alias) || alias.includes(itemTitle))) return true;
      return false;
    });

    const isVerified =
      found &&
      found.tag &&
      !String(found.tag).toLowerCase().includes('not available') &&
      !String(found.tag).toLowerCase().includes('pending');

    const tone: WorryTone = found?.tone === 'caution' ? 'caution' : 'good';

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
        image: found.image || undefined,
        source: found.source,
      };
    }

    return {
      id: c.id,
      title: c.title,
      icon: c.icon,
      description: c.moroccoManifestation,
      tag: '(not available yet)',
      state: 'pending' as WorryBoxState,
    };
  });
}
