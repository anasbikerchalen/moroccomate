export interface MoroccanDishGlossaryEntry {
  term: string;
  moroccanName: string; // Arabic script
  category: 'dish' | 'pastry' | 'bread' | 'drink' | 'condiment';
  pronunciation?: string;
  summary: string;
  flavorProfile: string;
  historicalContext: string;
}

export const MOROCCAN_CULINARY_GLOSSARY: Record<string, MoroccanDishGlossaryEntry> = {
  tanjia: {
    term: 'Tanjia Marrakchia',
    moroccanName: 'طنجية مراكشية',
    category: 'dish',
    pronunciation: 'tahn-JEE-ah',
    summary: 'The iconic communal bachelor dish of Marrakech, slow-braised in a terracotta amphora pot.',
    flavorProfile: 'Rich, meltingly tender meat infused with preserved lemon, garlic, cumin, and ras el hanout.',
    historicalContext: 'Traditionally assembled by the city’s craftsmen on their day off and buried deep in the hot wood ashes (ferratchi) beneath neighborhood hammams for 6 to 8 hours.'
  },
  pastilla: {
    term: 'Pastilla (Bastilla)',
    moroccanName: 'بسطيلة',
    category: 'dish',
    pronunciation: 'pahs-TEE-lah',
    summary: 'Masterpiece of Fes culinary heritage — crisp paper-thin warqa pastry with savory and sweet fillings.',
    flavorProfile: 'Tender chicken or squab layered with spiced scrambled eggs, roasted almonds, orange blossom water, cinnamon, and powdered sugar.',
    historicalContext: 'Rooted in Andalusian heritage brought to Fes during the 15th century, representing the zenith of Moroccan royal banquet cooking.'
  },
  tagine: {
    term: 'Tagine',
    moroccanName: 'طاجين',
    category: 'dish',
    pronunciation: 'tah-ZHEEN',
    summary: 'Both the iconic conical earthenware pot and the slow-simmered savory dish cooked inside it.',
    flavorProfile: 'Juicy, caramelized sauce seasoned with ginger, turmeric, saffron, preserved lemons, or dried fruits like prunes and apricots.',
    historicalContext: 'An ancient Berber cooking technique developed for slow cooking over charcoal embers with minimal water in arid climates.'
  },
  zaalouk: {
    term: 'Zaalouk',
    moroccanName: 'زعلوك',
    category: 'condiment',
    pronunciation: 'zah-LOOK',
    summary: 'Warm or chilled cooked salad made of fire-roasted eggplants and crushed tomatoes.',
    flavorProfile: 'Smoky, garlicky, laced with cumin, sweet paprika, and rich extra virgin olive oil.',
    historicalContext: 'A cornerstone cooked salad (kemia) found on every Moroccan family table, scooped with crusty khobz bread.'
  },
  taktouka: {
    term: 'Taktouka',
    moroccanName: 'تكتوكة',
    category: 'condiment',
    pronunciation: 'tahk-TOO-kah',
    summary: 'Vibrant cooked salad of fire-charred bell peppers, juicy ripe tomatoes, garlic, and fresh herbs.',
    flavorProfile: 'Mildly sweet, deeply savory, and slightly tangy from sun-ripened Moroccan tomatoes.',
    historicalContext: 'Traditional warm mezze popular across imperial cities, showcasing Moroccan market-fresh produce.'
  },
  rfissa: {
    term: 'Rfissa',
    moroccanName: 'رفيسة',
    category: 'dish',
    pronunciation: 'r-FEE-sah',
    summary: 'Comfort food feast of shredded steamed trid flatbread soaked in an aromatic fenugreek chicken broth.',
    flavorProfile: 'Earthy, peppery, deeply comforting with tender onions, lentils, and warming fenugreek seeds.',
    historicalContext: 'Traditionally served to celebrate new mothers and family milestones as a nourishing restorative meal.'
  },
  harira: {
    term: 'Harira Soup',
    moroccanName: 'حريرة',
    category: 'dish',
    pronunciation: 'hah-REE-rah',
    summary: 'Rich velvety soup made from pureed tomatoes, tender lentils, chickpeas, and fresh coriander.',
    flavorProfile: 'Zesty, warming, fragrant with celery, ginger, cinnamon, and a squeeze of fresh lemon juice.',
    historicalContext: 'The sacred soup that breaks the fast (ftour) every evening during Ramadan across all Moroccan homes.'
  },
  briouates: {
    term: 'Briouates',
    moroccanName: 'بريوات',
    category: 'pastry',
    pronunciation: 'bree-WAHT',
    summary: 'Crispy fried or baked phyllo pastry parcels folded into neat triangles or cigars.',
    flavorProfile: 'Savory versions feature spiced minced lamb, goat cheese, or herbs; sweet versions feature pure almond paste and orange blossom honey.',
    historicalContext: 'A royal Moroccan festive staple served at weddings and celebrations with fresh mint tea.'
  },
  couscous: {
    term: 'Seven Vegetable Couscous',
    moroccanName: 'كسكس سبع خضار',
    category: 'dish',
    pronunciation: 'KOOS-koos',
    summary: 'Triple-steamed semolina grains topped with melting vegetables, chickpeas, and braised meat or caramelized onions (tfaya).',
    flavorProfile: 'Fluffy, buttery grains perfumed with saffron-hued bouillon, pumpkin, turnip, zucchini, and carrots.',
    historicalContext: 'Inscribed on UNESCO Intangible Cultural Heritage list; traditionally shared every Friday after congregational prayers.'
  },
  khobz: {
    term: 'Khobz (Moroccan Round Bread)',
    moroccanName: 'خبز الدار',
    category: 'bread',
    pronunciation: 'kh-OH-bz',
    summary: 'Dense, crusty round artisan bread baked fresh twice daily in communal neighborhood ovens (ferran).',
    flavorProfile: 'Wholesome, slightly chewy, and the indispensable universal utensil for scooping tagines and mezze.',
    historicalContext: 'Bread in Morocco is deeply revered and never wasted — it is the heartbeat of everyday Moroccan life.'
  }
};

/**
 * Detects if a dish name contains any known Moroccan glossary term
 */
export function findGlossaryEntryForDish(dishName: string): MoroccanDishGlossaryEntry | null {
  const lower = dishName.toLowerCase();
  for (const [key, entry] of Object.entries(MOROCCAN_CULINARY_GLOSSARY)) {
    if (lower.includes(key)) {
      return entry;
    }
  }
  return null;
}
