/**
 * City-Specific Category Quick Picks Data Architecture
 * 
 * Replaces exact place quick picks with 5 curated category filters per vertical
 * (Stay, Eats, Things to Do, Shopping) for Moroccan cities.
 * 
 * All labels are ultra-short (1-2 words) so all 5 pills fit in a single row
 * without horizontal clipping or hiding off-screen.
 */

export interface CityCategoryPick {
  id: string;
  label: string;
  subtitle: string;
  icon: string;
  badgeColor: 'terracotta' | 'gold' | 'amber' | 'emerald' | 'navy' | 'rose' | 'cyan';
  /** Tags or keywords matched against listings */
  filterVibes: string[];
  /** Optional quiz answer keys to set */
  filterAnswers?: Record<string, any>;
  /** Optional subcategory for things to do */
  subCategory?: string;
  /** Optional SEO search intent slug */
  searchIntentSlug?: string;
}

export type CategoryKey = 'sleep' | 'stay' | 'eat' | 'food' | 'things' | 'things-to-do' | 'shop' | 'shopping';

export interface CityCategoriesMap {
  stay: CityCategoryPick[];
  eat: CityCategoryPick[];
  things: CityCategoryPick[];
  shop: CityCategoryPick[];
}

/**
 * Normalizes category keys to canonical 'stay' | 'eat' | 'things' | 'shop'
 */
export const normalizeCategory = (category?: string | null): 'stay' | 'eat' | 'things' | 'shop' => {
  if (!category) return 'stay';
  const c = category.toLowerCase();
  if (c === 'sleep' || c === 'stay' || c === 'stays') return 'stay';
  if (c === 'food' || c === 'eat' || c === 'eats') return 'eat';
  if (c === 'things' || c === 'things-to-do' || c === 'activities' || c === 'visit') return 'things';
  if (c === 'shop' || c === 'shopping') return 'shop';
  return 'stay';
};

// ─────────────────────────────────────────────────────────────
// 📍 AGADIR
// ─────────────────────────────────────────────────────────────
const AGADIR_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'agadir-stay-luxury-beach-resorts',
      label: 'Beach Resorts',
      subtitle: 'For effortless relaxation right on the sand',
      icon: 'resort',
      badgeColor: 'amber',
      filterVibes: ['all-inclusive', 'beachfront', 'resort', 'luxury', 'private-beach', 'pool'],
      filterAnswers: { 'base-lifestyle': 'premium', 'sleep-vibe': 'pool' },
      searchIntentSlug: 'all-inclusive'
    },
    {
      id: 'agadir-stay-surf-camps-eco-lodges',
      label: 'Surf Camps',
      subtitle: 'For the Taghazout vibe, digital nomads, and surfers',
      icon: 'surf',
      badgeColor: 'cyan',
      filterVibes: ['surf', 'eco-lodge', 'hostel', 'ocean-view', 'nomad', 'beach'],
      filterAnswers: { 'base-lifestyle': 'balanced', 'sleep-vibe': 'adventure' },
      searchIntentSlug: 'on-the-beach'
    },
    {
      id: 'agadir-stay-boutique-riads-guesthouses',
      label: 'Riads & Dars',
      subtitle: 'For authentic Moroccan architecture and intimate stays',
      icon: 'riad',
      badgeColor: 'terracotta',
      filterVibes: ['riad', 'boutique', 'courtyard', 'traditional', 'authentic', 'guesthouse'],
      filterAnswers: { 'sleep-type': 'riad', 'sleep-vibe': 'culture' },
      searchIntentSlug: 'in-medina'
    },
    {
      id: 'agadir-stay-apartments-holiday-rentals',
      label: 'Apartments',
      subtitle: 'For long stays, groups, and self-catering budgets',
      icon: 'apartment',
      badgeColor: 'emerald',
      filterVibes: ['apartment', 'rental', 'kitchen', 'family', 'group', 'marina'],
      filterAnswers: { 'base-group': 'group', 'base-lifestyle': 'balanced' }
    },
    {
      id: 'agadir-stay-budget-hostels-city-hotels',
      label: 'Hostels',
      subtitle: 'For backpackers and travelers wanting to stay near the city center',
      icon: 'hostel',
      badgeColor: 'navy',
      filterVibes: ['budget', 'hostel', 'city-center', 'downtown', 'affordable'],
      filterAnswers: { 'base-lifestyle': 'lean', 'sleep-vibe': 'budget' }
    }
  ],
  eat: [
    {
      id: 'agadir-eat-fresh-seafood-marina',
      label: 'Fresh Seafood',
      subtitle: 'For upscale harbor views and the catch of the day',
      icon: 'seafood',
      badgeColor: 'navy',
      filterVibes: ['seafood', 'marina', 'fish', 'ocean-view', 'harbor', 'grilled-fish'],
      filterAnswers: { 'food-cuisine': 'seafood', 'food-vibe': 'rooftop' }
    },
    {
      id: 'agadir-eat-traditional-moroccan',
      label: 'Moroccan Classic',
      subtitle: 'For authentic tagines, couscous, and local mint tea spots',
      icon: 'traditional',
      badgeColor: 'terracotta',
      filterVibes: ['moroccan', 'tagine', 'couscous', 'traditional', 'authentic', 'mint tea'],
      filterAnswers: { 'food-cuisine': 'moroccan-traditional', 'food-vibe': 'traditional' }
    },
    {
      id: 'agadir-eat-street-food-local-markets',
      label: 'Street Food',
      subtitle: 'For gritty, ultra-local port stalls and cheap eats',
      icon: 'street food',
      badgeColor: 'gold',
      filterVibes: ['street-food', 'port', 'market', 'cheap-eats', 'local', 'fried-fish'],
      filterAnswers: { 'food-vibe': 'street-food', 'base-lifestyle': 'lean' }
    },
    {
      id: 'agadir-eat-international-cafes-brunch',
      label: 'Cafes & Brunch',
      subtitle: 'For western-style coffee, breakfast, and modern bistros',
      icon: 'cafe',
      badgeColor: 'rose',
      filterVibes: ['cafe', 'brunch', 'coffee', 'breakfast', 'bistro', 'pastry', 'pancake'],
      filterAnswers: { 'food-cuisine': 'cafe-pastry', 'food-vibe': 'cafe' }
    },
    {
      id: 'agadir-eat-beachfront-promenades-lounges',
      label: 'Beach Lounges',
      subtitle: 'For dinner with a view, sunset drinks, and live music',
      icon: 'lounge',
      badgeColor: 'amber',
      filterVibes: ['beachfront', 'promenade', 'lounge', 'sunset', 'drinks', 'live-music', 'cocktails'],
      filterAnswers: { 'food-vibe': 'drinks', 'food-vibe-secondary': 'scenic' }
    }
  ],
  things: [
    {
      id: 'agadir-things-historic-sightseeing-landmarks',
      label: 'Historic Sights',
      subtitle: 'For the Kasbah, cable car, and cultural tours',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['kasbah', 'cable-car', 'landmark', 'sightseeing', 'culture', 'heritage'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'agadir-things-water-sports-surfing',
      label: 'Water Sports',
      subtitle: 'For jet skiing, boat trips, and catching waves in Taghazout',
      icon: 'surf',
      badgeColor: 'cyan',
      filterVibes: ['water-sports', 'surf', 'jet-ski', 'boat-trip', 'kitesurf', 'waves'],
      subCategory: 'sport',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'agadir-things-day-trips-mountain-hikes',
      label: 'Day Hikes',
      subtitle: 'For Paradise Valley, desert excursions, and nature',
      icon: 'hike',
      badgeColor: 'emerald',
      filterVibes: ['hiking', 'day-trip', 'paradise-valley', 'nature', 'mountains', 'excursion'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'agadir-things-relaxation-wellness',
      label: 'Spas & Hammams',
      subtitle: 'For traditional Moroccan hammams, spas, and beach walks',
      icon: 'wellness',
      badgeColor: 'rose',
      filterVibes: ['wellness', 'hammam', 'spa', 'massage', 'relax', 'beach-walk'],
      subCategory: 'wellness',
      filterAnswers: { 'interests': 'slow' }
    },
    {
      id: 'agadir-things-family-wildlife-attractions',
      label: 'Family & Parks',
      subtitle: 'For parks, gardens, and kid-friendly excursions',
      icon: 'family',
      badgeColor: 'amber',
      filterVibes: ['family', 'wildlife', 'crocoparc', 'park', 'kids', 'garden'],
      filterAnswers: { 'base-group': 'family' }
    }
  ],
  shop: [
    {
      id: 'agadir-shop-traditional-markets-souks',
      label: 'Souks & Markets',
      subtitle: 'For haggling, spices, textiles, and handmade crafts',
      icon: 'souk',
      badgeColor: 'terracotta',
      filterVibes: ['souk', 'souk-el-had', 'market', 'spices', 'textiles', 'handicrafts'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'agadir-shop-argan-oil-cooperatives',
      label: 'Argan Co-ops',
      subtitle: 'For certified cosmetic and culinary products from local women',
      icon: 'argan',
      badgeColor: 'gold',
      filterVibes: ['argan', 'cooperative', 'cosmetics', 'argan-oil', 'organic', 'culinary'],
      filterAnswers: { 'shop-target': 'spices' }
    },
    {
      id: 'agadir-shop-modern-malls-fashion',
      label: 'Malls & Fashion',
      subtitle: 'For fixed prices, global clothing lines, and supermarkets',
      icon: 'mall',
      badgeColor: 'navy',
      filterVibes: ['mall', 'fashion', 'fixed-price', 'clothing', 'modern', 'marina-shopping'],
      filterAnswers: { 'pricingModel': 'fixed' }
    },
    {
      id: 'agadir-shop-artisanal-boutiques-galleries',
      label: 'Boutiques',
      subtitle: 'For curated home decor, high-end kaftans, and silver jewelry',
      icon: 'boutique',
      badgeColor: 'rose',
      filterVibes: ['boutique', 'decor', 'jewelry', 'silver', 'gallery', 'curated'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'agadir-shop-local-neighborhood-shopping',
      label: 'Local Strips',
      subtitle: 'For daily essentials, pharmacies, and low-key shopping strips',
      icon: 'store',
      badgeColor: 'cyan',
      filterVibes: ['neighborhood', 'pharmacy', 'essentials', 'grocery', 'convenience']
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 MARRAKECH
// ─────────────────────────────────────────────────────────────
const MARRAKECH_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'marrakech-stay-luxury-medina-riads',
      label: 'Medina Riads',
      subtitle: 'For secluded courtyards, fountain pools, and regal suites',
      icon: 'riad',
      badgeColor: 'terracotta',
      filterVibes: ['riad', 'palace', 'luxury', 'courtyard', 'pool', 'medina'],
      filterAnswers: { 'sleep-type': 'riad', 'base-lifestyle': 'premium' }
    },
    {
      id: 'marrakech-stay-palmeraie-oasis-resorts',
      label: 'Palmeraie Resorts',
      subtitle: 'For sprawling palm gardens, private villas, and Olympic pools',
      icon: 'resort',
      badgeColor: 'emerald',
      filterVibes: ['resort', 'palmeraie', 'villa', 'golf', 'gardens', 'heated-pool'],
      filterAnswers: { 'sleep-type': 'hotel', 'base-lifestyle': 'premium' }
    },
    {
      id: 'marrakech-stay-hivernage-chic-hotels',
      label: 'Hivernage Chic',
      subtitle: 'For modern luxury, nightlife proximity, and cocktail terraces',
      icon: 'hotel',
      badgeColor: 'navy',
      filterVibes: ['hivernage', 'boutique', 'hotel', 'cocktails', 'modern'],
      filterAnswers: { 'sleep-vibe': 'quiet' }
    },
    {
      id: 'marrakech-stay-agafay-desert-glamping',
      label: 'Desert Camps',
      subtitle: 'For stone desert sunsets, stargazing domes, and infinity dunes',
      icon: 'desert',
      badgeColor: 'gold',
      filterVibes: ['desert', 'camp', 'glamping', 'agafay', 'dunes', 'stargazing'],
      filterAnswers: { 'sleep-type': 'desert', 'sleep-vibe': 'adventure' }
    },
    {
      id: 'marrakech-stay-social-hostels-budget-dars',
      label: 'Hostels',
      subtitle: 'For backpackers, rooftop social hours, and budget travelers',
      icon: 'hostel',
      badgeColor: 'cyan',
      filterVibes: ['hostel', 'budget', 'social', 'rooftop', 'medina', 'dar'],
      filterAnswers: { 'base-lifestyle': 'lean', 'sleep-vibe': 'budget' }
    }
  ],
  eat: [
    {
      id: 'marrakech-eat-royal-gastronomy',
      label: 'Royal Dining',
      subtitle: 'For candlelit riad dining, slow-cooked lamb, and heritage recipes',
      icon: 'traditional',
      badgeColor: 'amber',
      filterVibes: ['fine-dining', 'palace', 'gourmet', 'mechoui', 'lamb', 'pastilla'],
      filterAnswers: { 'food-vibe': 'fine-dining', 'base-lifestyle': 'premium' }
    },
    {
      id: 'marrakech-eat-medina-rooftops',
      label: 'Medina Rooftops',
      subtitle: 'For panoramic minaret views, mint tea, and modern Moroccan',
      icon: 'lounge',
      badgeColor: 'terracotta',
      filterVibes: ['rooftop', 'terrace', 'sunset', 'views', 'mint-tea', 'medina'],
      filterAnswers: { 'food-vibe': 'rooftop' }
    },
    {
      id: 'marrakech-eat-jemaa-elfnaa-street-food',
      label: 'Street Food',
      subtitle: 'For sizzling skewers, sheep head, snails, and fried fish',
      icon: 'street food',
      badgeColor: 'gold',
      filterVibes: ['street-food', 'jemaa-el-fnaa', 'grill', 'skewers', 'night-market'],
      filterAnswers: { 'food-vibe': 'street-food', 'base-lifestyle': 'lean' }
    },
    {
      id: 'marrakech-eat-gueliz-cosmopolitan-cafes',
      label: 'Guéliz Cafes',
      subtitle: 'For French patisseries, artisan espresso, and trendy brunch',
      icon: 'cafe',
      badgeColor: 'rose',
      filterVibes: ['cafe', 'gueliz', 'bistro', 'brunch', 'espresso', 'french'],
      filterAnswers: { 'food-cuisine': 'cafe-pastry' }
    },
    {
      id: 'marrakech-eat-courtyard-garden-dining',
      label: 'Courtyard Eats',
      subtitle: 'For peaceful lunches under orange trees and fountains',
      icon: 'cafe',
      badgeColor: 'emerald',
      filterVibes: ['garden', 'courtyard', 'lunch', 'quiet', 'fountain', 'salad'],
      filterAnswers: { 'food-vibe': 'hidden-gem' }
    }
  ],
  things: [
    {
      id: 'marrakech-things-imperial-palaces',
      label: 'Historic Palaces',
      subtitle: 'For Bahia Palace, Saadian Tombs, and Ben Youssef Medersa',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['palace', 'heritage', 'bahia', 'medersa', 'monument', 'history'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'marrakech-things-souk-explorations',
      label: 'Souk Crafts',
      subtitle: 'For dyers souk, copper smiths, and labyrinth craft alleys',
      icon: 'souk',
      badgeColor: 'gold',
      filterVibes: ['souk', 'artisan', 'craft', 'tannery', 'copper', 'dyers'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'marrakech-things-agafay-desert-adventures',
      label: 'Desert Quads',
      subtitle: 'For stone dunes, buggy racing, camel rides, and starry campfires',
      icon: 'desert',
      badgeColor: 'amber',
      filterVibes: ['desert', 'agafay', 'quad', 'buggy', 'camel', 'stargazing'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'marrakech-things-majorelle-gardens',
      label: 'Gardens & Art',
      subtitle: 'For Yves Saint Laurent garden, Le Jardin Secret, and cactus parks',
      icon: 'historic',
      badgeColor: 'navy',
      filterVibes: ['majorelle', 'garden', 'ysl', 'nature', 'botanical', 'flowers'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'marrakech-things-royal-hammams-spas',
      label: 'Royal Spas',
      subtitle: 'For eucalyptus scrubs, black soap rituals, and argan massage',
      icon: 'wellness',
      badgeColor: 'rose',
      filterVibes: ['hammam', 'spa', 'massage', 'wellness', 'bathhouse', 'argan'],
      subCategory: 'wellness',
      filterAnswers: { 'interests': 'slow' }
    }
  ],
  shop: [
    {
      id: 'marrakech-shop-ancient-souks-spices',
      label: 'Spice Souks',
      subtitle: 'For Rahba Kedima, saffron, ras el hanout, and apothecary',
      icon: 'argan',
      badgeColor: 'amber',
      filterVibes: ['spices', 'souk', 'rahba-kedima', 'herbalist', 'saffron'],
      filterAnswers: { 'shop-target': 'spices' }
    },
    {
      id: 'marrakech-shop-berber-carpets',
      label: 'Berber Rugs',
      subtitle: 'For tribal Beni Ourain wool rugs, vintage flatweaves, and kilims',
      icon: 'souk',
      badgeColor: 'terracotta',
      filterVibes: ['carpet', 'rug', 'berber', 'beni-ourain', 'kilim', 'weaving'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'marrakech-shop-leather-babouches',
      label: 'Leather Goods',
      subtitle: 'For leather tanneries, artisan weekend bags, and soft slippers',
      icon: 'boutique',
      badgeColor: 'gold',
      filterVibes: ['leather', 'babouche', 'slippers', 'tannery', 'bags', 'poufs'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'marrakech-shop-gueliz-concept-stores',
      label: 'Concept Stores',
      subtitle: 'For contemporary Moroccan fashion, designer homeware, and ceramics',
      icon: 'boutique',
      badgeColor: 'navy',
      filterVibes: ['concept-store', 'gueliz', 'designer', 'fashion', 'homeware', 'fixed-price'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'marrakech-shop-brass-lanterns-zellij',
      label: 'Brass & Zellij',
      subtitle: 'For intricate shadows, carved cedar chests, and mosaic tables',
      icon: 'historic',
      badgeColor: 'rose',
      filterVibes: ['brass', 'lantern', 'cedar', 'zellij', 'woodwork', 'lamps'],
      filterAnswers: { 'shop-target': 'ceramics' }
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 FES
// ─────────────────────────────────────────────────────────────
const FES_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'fes-stay-historic-andalusian-riads',
      label: 'Andalusian Riads',
      subtitle: 'For intricate centuries-old zellij courtyards and carved plaster',
      icon: 'riad',
      badgeColor: 'terracotta',
      filterVibes: ['riad', 'andalusian', 'zellij', 'historic', 'courtyard', 'palace'],
      filterAnswers: { 'sleep-type': 'riad', 'sleep-vibe': 'culture' }
    },
    {
      id: 'fes-stay-medina-edge-guesthouses',
      label: 'Medina Dars',
      subtitle: 'For easy taxi luggage drop-offs and quiet medina views',
      icon: 'riad',
      badgeColor: 'navy',
      filterVibes: ['dar', 'guesthouse', 'accessible', 'bab-boujeloud', 'quiet'],
      filterAnswers: { 'sleep-vibe': 'quiet' }
    },
    {
      id: 'fes-stay-luxury-hilltop-palaces',
      label: 'Hilltop Palaces',
      subtitle: 'For panoramic vistas over Fes el-Bali, gardens, and infinity pools',
      icon: 'historic',
      badgeColor: 'gold',
      filterVibes: ['luxury', 'palace', 'hilltop', 'panoramic', 'pool', 'spa'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'fes-stay-mountain-foothill-lodges',
      label: 'Mountain Lodges',
      subtitle: 'For cedar forest fresh air and olive orchard garden retreats',
      icon: 'hike',
      badgeColor: 'emerald',
      filterVibes: ['eco-lodge', 'atlas', 'nature', 'garden', 'retreat', 'ifrane'],
      filterAnswers: { 'sleep-type': 'countryside' }
    },
    {
      id: 'fes-stay-heritage-backpackers-dars',
      label: 'Hostels',
      subtitle: 'For budget travelers exploring the 9,000 alleys of the medina',
      icon: 'hostel',
      badgeColor: 'cyan',
      filterVibes: ['hostel', 'budget', 'backpacker', 'medina', 'rooftop'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  eat: [
    {
      id: 'fes-eat-fassi-gastronomy-pastilla',
      label: 'Royal Fassi',
      subtitle: 'For original pigeon pastilla, sweet tagines, and imperial banquets',
      icon: 'traditional',
      badgeColor: 'amber',
      filterVibes: ['pastilla', 'fassi', 'fine-dining', 'traditional', 'royal', 'banquet'],
      filterAnswers: { 'food-cuisine': 'moroccan-traditional', 'food-vibe': 'traditional' }
    },
    {
      id: 'fes-eat-medina-rooftop-terraces',
      label: 'Medina Rooftops',
      subtitle: 'For sunsets over Fes el-Bali minarets and fresh orange salads',
      icon: 'lounge',
      badgeColor: 'terracotta',
      filterVibes: ['rooftop', 'views', 'sunset', 'minaret', 'terrace', 'medina'],
      filterAnswers: { 'food-vibe': 'rooftop' }
    },
    {
      id: 'fes-eat-blue-gate-street-stalls',
      label: 'Street Grills',
      subtitle: 'For steaming harira soup, fresh msemmen, and lively people watching',
      icon: 'street food',
      badgeColor: 'navy',
      filterVibes: ['street-food', 'harira', 'msemmen', 'bab-boujeloud', 'skewers'],
      filterAnswers: { 'food-vibe': 'street-food' }
    },
    {
      id: 'fes-eat-traditional-mint-tea-salons',
      label: 'Tea Salons',
      subtitle: 'For almond pastries, scented infusions, and courtyard rest',
      icon: 'cafe',
      badgeColor: 'emerald',
      filterVibes: ['tea', 'mint-tea', 'pastry', 'corne-de-gazelle', 'salon', 'cafe'],
      filterAnswers: { 'food-cuisine': 'cafe-pastry' }
    },
    {
      id: 'fes-eat-ville-nouvelle-brasseries',
      label: 'Modern Cafes',
      subtitle: 'For relaxed modern lunches, French baguettes, and espresso',
      icon: 'cafe',
      badgeColor: 'rose',
      filterVibes: ['ville-nouvelle', 'brasserie', 'cafe', 'french', 'bistro']
    }
  ],
  things: [
    {
      id: 'fes-things-medina-and-medersas',
      label: 'Ancient Medersas',
      subtitle: 'For Al-Qarawiyyin, Bou Inania, and medieval stone alleys',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['medina', 'medersa', 'qarawiyyin', 'history', 'bou-inania'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'fes-things-chouara-tannery',
      label: 'Chouara Tannery',
      subtitle: 'For the thousand-year-old stone dye pits and leather artisans',
      icon: 'historic',
      badgeColor: 'gold',
      filterVibes: ['tannery', 'chouara', 'leather', 'dye-pits', 'viewpoint'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'fes-things-blue-pottery-zellij-workshops',
      label: 'Blue Pottery',
      subtitle: 'For master ceramists, hand-cut mosaic tiles, and clay kilns',
      icon: 'boutique',
      badgeColor: 'navy',
      filterVibes: ['pottery', 'ceramics', 'zellij', 'workshop', 'cobalt-blue'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'fes-things-merenid-tombs-sunset',
      label: 'Scenic Sunsets',
      subtitle: 'For golden hour sunset vistas overlooking the whole valley',
      icon: 'lounge',
      badgeColor: 'amber',
      filterVibes: ['merenid-tombs', 'sunset', 'viewpoint', 'panorama', 'hiking'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'fes-things-ancient-medina-hammams',
      label: 'Ancient Hammams',
      subtitle: 'For historic vaulted stone bathhouses and deep exfoliation',
      icon: 'wellness',
      badgeColor: 'rose',
      filterVibes: ['hammam', 'bathhouse', 'spa', 'scrub', 'wellness'],
      subCategory: 'wellness',
      filterAnswers: { 'interests': 'slow' }
    }
  ],
  shop: [
    {
      id: 'fes-shop-cobalt-blue-ceramics',
      label: 'Blue Ceramics',
      subtitle: 'For world-famous hand-painted Fes plates, tagines, and bowls',
      icon: 'boutique',
      badgeColor: 'navy',
      filterVibes: ['ceramics', 'pottery', 'blue-pottery', 'tagine', 'plates'],
      filterAnswers: { 'shop-target': 'ceramics' }
    },
    {
      id: 'fes-shop-tannery-leather-craft',
      label: 'Tannery Leather',
      subtitle: 'For genuine leather jackets, weekend duffels, and poufs',
      icon: 'boutique',
      badgeColor: 'amber',
      filterVibes: ['leather', 'tannery', 'poufs', 'bags', 'jackets'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'fes-shop-chiseled-brass-copper',
      label: 'Chiseled Brass',
      subtitle: 'For Seffarine square copper smiths, tea trays, and lamps',
      icon: 'historic',
      badgeColor: 'gold',
      filterVibes: ['brass', 'copper', 'seffarine', 'trays', 'metalwork', 'lamps'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'fes-shop-sabra-cactus-silk',
      label: 'Cactus Silk',
      subtitle: 'For woven agave silk scarves, embroidered cushions, and throws',
      icon: 'souk',
      badgeColor: 'emerald',
      filterVibes: ['sabra', 'silk', 'cactus-silk', 'weaving', 'textiles', 'scarves'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'fes-shop-medina-scent-apothecaries',
      label: 'Rose Apothecary',
      subtitle: 'For pure orange blossom water, wild rose oil, and amber crystals',
      icon: 'argan',
      badgeColor: 'rose',
      filterVibes: ['apothecary', 'orange-blossom', 'rose-water', 'amber', 'musk', 'spices'],
      filterAnswers: { 'shop-target': 'spices' }
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 CASABLANCA
// ─────────────────────────────────────────────────────────────
const CASABLANCA_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'casa-stay-ain-diab-oceanfront-resorts',
      label: 'Ocean Resorts',
      subtitle: 'For Atlantic panoramas, beach clubs, and seaside pools',
      icon: 'resort',
      badgeColor: 'navy',
      filterVibes: ['oceanfront', 'ain-diab', 'resort', 'beach-club', 'pool', 'luxury'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'casa-stay-art-deco-business-hotels',
      label: 'Art Deco Hotels',
      subtitle: 'For architectural heritage, central commerce, and transit ease',
      icon: 'hotel',
      badgeColor: 'gold',
      filterVibes: ['downtown', 'business', 'art-deco', 'central', 'hotel'],
      filterAnswers: { 'sleep-type': 'hotel' }
    },
    {
      id: 'casa-stay-corniche-boutique-guesthouses',
      label: 'Corniche Stays',
      subtitle: 'For Atlantic sea breezes, sunsets, and dining walkability',
      icon: 'lounge',
      badgeColor: 'amber',
      filterVibes: ['corniche', 'boutique', 'seaside', 'ocean-view'],
      filterAnswers: { 'sleep-vibe': 'rooftop' }
    },
    {
      id: 'casa-stay-serviced-apartments',
      label: 'Apartments',
      subtitle: 'For extended stays, business travelers, and self-catering budgets',
      icon: 'apartment',
      badgeColor: 'emerald',
      filterVibes: ['apartment', 'serviced', 'executive', 'kitchen', 'gauthier']
    },
    {
      id: 'casa-stay-budget-transit-hotels',
      label: 'Transit Hotels',
      subtitle: 'For Casa-Port/Voyageurs rail access and airport connections',
      icon: 'hostel',
      badgeColor: 'cyan',
      filterVibes: ['budget', 'transit', 'casa-port', 'station', 'affordable'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  eat: [
    {
      id: 'casa-eat-atlantic-seafood',
      label: 'Atlantic Seafood',
      subtitle: 'For grilled sea bass, oysters, and seafood platters with ocean vistas',
      icon: 'seafood',
      badgeColor: 'navy',
      filterVibes: ['seafood', 'fish', 'oysters', 'ocean-view', 'corniche', 'port'],
      filterAnswers: { 'food-cuisine': 'seafood' }
    },
    {
      id: 'casa-eat-gauthier-specialty-cafes',
      label: 'Specialty Cafes',
      subtitle: 'For third-wave espresso, artisan brunch, and French pastries',
      icon: 'cafe',
      badgeColor: 'amber',
      filterVibes: ['cafe', 'gauthier', 'racine', 'brunch', 'specialty-coffee', 'pastry'],
      filterAnswers: { 'food-cuisine': 'cafe-pastry' }
    },
    {
      id: 'casa-eat-habous-neighborhood-grills',
      label: 'Habous Grills',
      subtitle: 'For charcoal-grilled meats, tender lamb tagines, and Bennis pastries',
      icon: 'traditional',
      badgeColor: 'terracotta',
      filterVibes: ['habous', 'grill', 'tagine', 'traditional', 'charcoal', 'lamb'],
      filterAnswers: { 'food-cuisine': 'moroccan-traditional' }
    },
    {
      id: 'casa-eat-high-end-french-fusion',
      label: 'Fine Dining',
      subtitle: 'For upscale white-tablecloth dinners and international wine pairings',
      icon: 'traditional',
      badgeColor: 'rose',
      filterVibes: ['fine-dining', 'french', 'fusion', 'wine', 'upscale'],
      filterAnswers: { 'food-vibe': 'fine-dining', 'base-lifestyle': 'premium' }
    },
    {
      id: 'casa-eat-corniche-sunset-lounges',
      label: 'Sunset Lounges',
      subtitle: 'For beachfront cocktails, tapas, and Atlantic twilight breezes',
      icon: 'lounge',
      badgeColor: 'cyan',
      filterVibes: ['corniche', 'lounge', 'sunset', 'cocktails', 'tapas', 'music'],
      filterAnswers: { 'food-vibe': 'drinks' }
    }
  ],
  things: [
    {
      id: 'casa-things-hassan-ii-mosque',
      label: 'Hassan II Mosque',
      subtitle: 'For the iconic oceanfront minaret, hand-carved marble, and arches',
      icon: 'historic',
      badgeColor: 'navy',
      filterVibes: ['hassan-ii', 'mosque', 'landmark', 'ocean', 'architecture'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'casa-things-habous-quarter',
      label: 'Habous Quarter',
      subtitle: 'For neo-Moorish arches, olive souks, and tranquil stone arcades',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['habous', 'new-medina', 'palace', 'heritage', 'arcades'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'casa-things-art-deco-architecture-walk',
      label: 'Art Deco Walks',
      subtitle: 'For 1930s architectural treasures, clock tower, and historic plazas',
      icon: 'historic',
      badgeColor: 'gold',
      filterVibes: ['art-deco', 'colonial', 'walking-tour', 'architecture', 'downtown'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'casa-things-ain-diab-surfing',
      label: 'Atlantic Surf',
      subtitle: 'For coastal surfing sessions, beach runs, and ocean boardwalks',
      icon: 'surf',
      badgeColor: 'cyan',
      filterVibes: ['surf', 'boardwalk', 'running', 'ocean', 'promenade'],
      subCategory: 'sport',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'casa-things-modern-art-galleries',
      label: 'Art Galleries',
      subtitle: 'For contemporary Moroccan exhibitions, sculptures, and cultural talks',
      icon: 'boutique',
      badgeColor: 'rose',
      filterVibes: ['villa-des-arts', 'art', 'gallery', 'contemporary', 'culture'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    }
  ],
  shop: [
    {
      id: 'casa-shop-habous-traditional-souk',
      label: 'Habous Souks',
      subtitle: 'For authentic brassware, leather slippers, and olive markets',
      icon: 'souk',
      badgeColor: 'terracotta',
      filterVibes: ['habous', 'souk', 'brassware', 'babouche', 'olive-market'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'casa-shop-morocco-mall-luxury',
      label: 'Luxury Malls',
      subtitle: 'For Africa’s premier shopping center, luxury brands, and aquariums',
      icon: 'mall',
      badgeColor: 'gold',
      filterVibes: ['mall', 'morocco-mall', 'luxury', 'fashion', 'fixed-price'],
      filterAnswers: { 'pricingModel': 'fixed', 'base-lifestyle': 'premium' }
    },
    {
      id: 'casa-shop-patisserie-bennis-habous',
      label: 'Bennis Pastries',
      subtitle: 'For legendary almond cornes de gazelle and traditional pastries',
      icon: 'cafe',
      badgeColor: 'amber',
      filterVibes: ['pastry', 'bennis', 'habous', 'sweets', 'almonds', 'bakery'],
      filterAnswers: { 'shop-target': 'spices' }
    },
    {
      id: 'casa-shop-gauthier-designer-concept-stores',
      label: 'Concept Stores',
      subtitle: 'For contemporary Moroccan fashion labels, home decor, and design',
      icon: 'boutique',
      badgeColor: 'navy',
      filterVibes: ['concept-store', 'gauthier', 'designer', 'fashion', 'homeware'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'casa-shop-derb-ghallef-electronics',
      label: 'Local Strips',
      subtitle: 'For daily essentials, gadgets, pharmacies, and neighborhood convenience',
      icon: 'store',
      badgeColor: 'cyan',
      filterVibes: ['electronics', 'essentials', 'pharmacy', 'convenience', 'market']
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 TANGIER
// ─────────────────────────────────────────────────────────────
const TANGIER_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'tangier-stay-clifftop-kasbah-riads',
      label: 'Kasbah Riads',
      subtitle: 'For Strait of Gibraltar views, whitewashed alleys, and bohemian charm',
      icon: 'riad',
      badgeColor: 'navy',
      filterVibes: ['kasbah', 'riad', 'strait-view', 'whitewash', 'boutique', 'bohemian'],
      filterAnswers: { 'sleep-type': 'riad', 'sleep-vibe': 'culture' }
    },
    {
      id: 'tangier-stay-malabata-bay-resorts',
      label: 'Malabata Resorts',
      subtitle: 'For Mediterranean beaches, sweeping bay vistas, and resort pools',
      icon: 'resort',
      badgeColor: 'amber',
      filterVibes: ['malabata', 'resort', 'bay', 'luxury', 'beach', 'pool'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'tangier-stay-ville-nouvelle-colonial',
      label: 'Colonial Hotels',
      subtitle: 'For Boulevard Pasteur proximity and Grand Socco walks',
      icon: 'hotel',
      badgeColor: 'terracotta',
      filterVibes: ['ville-nouvelle', 'colonial', 'grand-socco', 'central', 'hotel'],
      filterAnswers: { 'sleep-type': 'hotel' }
    },
    {
      id: 'tangier-stay-cap-spartel-nature-lodges',
      label: 'Nature Lodges',
      subtitle: 'For Atlantic pine forests, lighthouse sunsets, and tranquil escapes',
      icon: 'hike',
      badgeColor: 'emerald',
      filterVibes: ['cap-spartel', 'nature', 'lodge', 'forest', 'lighthouse', 'quiet'],
      filterAnswers: { 'sleep-type': 'countryside' }
    },
    {
      id: 'tangier-stay-bohemian-medina-hostels',
      label: 'Hostels',
      subtitle: 'For artists, writers, backpackers, and lively sunset roof decks',
      icon: 'hostel',
      badgeColor: 'cyan',
      filterVibes: ['hostel', 'dar', 'medina', 'bohemian', 'rooftop', 'budget'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  eat: [
    {
      id: 'tangier-eat-strait-seafood',
      label: 'Strait Seafood',
      subtitle: 'For port-side grilled sole, garlic prawns, and catch of the day',
      icon: 'seafood',
      badgeColor: 'navy',
      filterVibes: ['seafood', 'port', 'fish', 'prawns', 'strait', 'grilled-fish'],
      filterAnswers: { 'food-cuisine': 'seafood' }
    },
    {
      id: 'tangier-eat-grand-socco-literary-cafes',
      label: 'Literary Cafes',
      subtitle: 'For legendary Café Hafa mint tea, beat poet history, and sea vistas',
      icon: 'cafe',
      badgeColor: 'amber',
      filterVibes: ['cafe-hafa', 'grand-socco', 'tea', 'cafe', 'views', 'bohemian'],
      filterAnswers: { 'food-vibe': 'cafe' }
    },
    {
      id: 'tangier-eat-kasbah-spanish-moroccan-fusion',
      label: 'Fusion Dining',
      subtitle: 'For romantic candlelit tagines and Andalusian-Moroccan specialties',
      icon: 'traditional',
      badgeColor: 'terracotta',
      filterVibes: ['kasbah', 'fusion', 'spanish', 'andalusian', 'moroccan', 'romantic'],
      filterAnswers: { 'food-vibe': 'fine-dining' }
    },
    {
      id: 'tangier-eat-petit-socco-street-eats',
      label: 'Street Stalls',
      subtitle: 'For street-side bocadillos, harira, and vibrant plaza life',
      icon: 'street food',
      badgeColor: 'gold',
      filterVibes: ['petit-socco', 'street-food', 'bocadillo', 'cheap-eats', 'plaza'],
      filterAnswers: { 'food-vibe': 'street-food', 'base-lifestyle': 'lean' }
    },
    {
      id: 'tangier-eat-waterfront-corniche-lounges',
      label: 'Sunset Lounges',
      subtitle: 'For modern harbor lounges, tapas, and cool Mediterranean evening drinks',
      icon: 'lounge',
      badgeColor: 'rose',
      filterVibes: ['corniche', 'lounge', 'sunset', 'drinks', 'tapas', 'harbor'],
      filterAnswers: { 'food-vibe': 'drinks' }
    }
  ],
  things: [
    {
      id: 'tangier-things-kasbah-museum',
      label: 'Kasbah Museum',
      subtitle: 'For Sultan’s palace, Bab el-Bahr sea lookout, and winding lanes',
      icon: 'historic',
      badgeColor: 'navy',
      filterVibes: ['kasbah', 'medina', 'palace', 'bab-el-bahr', 'history'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'tangier-things-cap-spartel-hercules-caves',
      label: 'Hercules Caves',
      subtitle: 'For where Atlantic meets Mediterranean and mythic sea caverns',
      icon: 'hike',
      badgeColor: 'cyan',
      filterVibes: ['hercules-caves', 'cap-spartel', 'lighthouse', 'caves', 'excursion'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'tangier-things-cafe-hafa-bohemian-walk',
      label: 'Café Hafa Walk',
      subtitle: 'For stepped cliff terraces, Beat Generation history, and coastal views',
      icon: 'cafe',
      badgeColor: 'gold',
      filterVibes: ['cafe-hafa', 'beat-generation', 'bohemian', 'cliffs', 'viewpoint'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'tangier-things-achakar-beach-watersports',
      label: 'Beach Sports',
      subtitle: 'For kitesurfing, windsurfing, and sandy Atlantic beach walks',
      icon: 'surf',
      badgeColor: 'emerald',
      filterVibes: ['watersports', 'kitesurf', 'surf', 'beach', 'achakar'],
      subCategory: 'sport',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'tangier-things-perdicaris-park-hikes',
      label: 'Coastal Hikes',
      subtitle: 'For botanical walking paths, shaded picnic spots, and sea cliffs',
      icon: 'hike',
      badgeColor: 'rose',
      filterVibes: ['perdicaris', 'park', 'forest', 'hiking', 'nature', 'cliffs'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'slow' }
    }
  ],
  shop: [
    {
      id: 'tangier-shop-rue-liberte-boutiques',
      label: 'Concept Stores',
      subtitle: 'For chic Moroccan homewares, linen kaftans, and curated gifts',
      icon: 'boutique',
      badgeColor: 'rose',
      filterVibes: ['concept-store', 'rue-de-la-liberte', 'designer', 'linens', 'boutique'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'tangier-shop-kasbah-antiques-rugs',
      label: 'Antique Rugs',
      subtitle: 'For Berber silver cuffs, ancient carved doors, and woven textiles',
      icon: 'souk',
      badgeColor: 'amber',
      filterVibes: ['antique', 'kasbah', 'rugs', 'silver', 'vintage', 'textiles'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'tangier-shop-fondouk-artisan-guilds',
      label: 'Artisan Guilds',
      subtitle: 'For handloom weavers, woven market baskets, and leather slippers',
      icon: 'boutique',
      badgeColor: 'terracotta',
      filterVibes: ['fondouk', 'artisan', 'weaving', 'baskets', 'babouche'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'tangier-shop-medina-spices-perfumes',
      label: 'Spice Bazaars',
      subtitle: 'For northern mountain herbs, cedar essence, and natural soaps',
      icon: 'argan',
      badgeColor: 'gold',
      filterVibes: ['spices', 'herbs', 'perfume', 'cedar', 'soaps', 'bazaar'],
      filterAnswers: { 'shop-target': 'spices' }
    },
    {
      id: 'tangier-shop-boulevard-pasteur-bookshops',
      label: 'Art & Prints',
      subtitle: 'For vintage Tangier lithographs, books, and postcards',
      icon: 'historic',
      badgeColor: 'navy',
      filterVibes: ['books', 'prints', 'pasteur', 'lithographs', 'art', 'stationery']
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 CHEFCHAOUEN
// ─────────────────────────────────────────────────────────────
const CHEFCHAOUEN_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'chaouen-stay-blue-medina-riads',
      label: 'Blue Riads',
      subtitle: 'For azure alley courtyards and rooftop mountain horizons',
      icon: 'riad',
      badgeColor: 'cyan',
      filterVibes: ['blue-pearl', 'riad', 'azure', 'medina', 'panoramic', 'rooftop'],
      filterAnswers: { 'sleep-type': 'riad', 'sleep-vibe': 'culture' }
    },
    {
      id: 'chaouen-stay-spanish-mosque-hillside',
      label: 'Hillside Dars',
      subtitle: 'For walking distance to golden hour sunrise and sunset lookouts',
      icon: 'riad',
      badgeColor: 'amber',
      filterVibes: ['hillside', 'spanish-mosque', 'view', 'sunset', 'guesthouse'],
      filterAnswers: { 'sleep-vibe': 'rooftop' }
    },
    {
      id: 'chaouen-stay-ras-el-maa-dars',
      label: 'Riverside Dars',
      subtitle: 'For mountain spring sounds and shaded garden courtyards',
      icon: 'riad',
      badgeColor: 'emerald',
      filterVibes: ['ras-el-maa', 'river', 'spring', 'dar', 'quiet', 'nature'],
      filterAnswers: { 'sleep-vibe': 'quiet' }
    },
    {
      id: 'chaouen-stay-rif-mountain-eco-lodges',
      label: 'Mountain Lodges',
      subtitle: 'For Talassemtane national park nature trails and organic food',
      icon: 'hike',
      badgeColor: 'terracotta',
      filterVibes: ['eco-lodge', 'mountain', 'talassemtane', 'hiking', 'nature'],
      filterAnswers: { 'sleep-type': 'countryside' }
    },
    {
      id: 'chaouen-stay-cozy-backpacker-hostels',
      label: 'Hostels',
      subtitle: 'For hikers, backpackers, and social rooftop tea gatherings',
      icon: 'hostel',
      badgeColor: 'navy',
      filterVibes: ['hostel', 'backpacker', 'budget', 'trekker', 'social'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  eat: [
    {
      id: 'chaouen-eat-mountain-tagines-goat-cheese',
      label: 'Mountain Tagines',
      subtitle: 'For fresh goat cheese, olive oil, figs, and tender mountain lamb',
      icon: 'traditional',
      badgeColor: 'gold',
      filterVibes: ['goat-cheese', 'jben', 'mountain', 'tagine', 'olive-oil', 'traditional'],
      filterAnswers: { 'food-cuisine': 'moroccan-traditional' }
    },
    {
      id: 'chaouen-eat-uta-el-hammam-terraces',
      label: 'Plaza Terraces',
      subtitle: 'For bustling square dining, mint tea, and kasbah views',
      icon: 'cafe',
      badgeColor: 'terracotta',
      filterVibes: ['uta-el-hammam', 'plaza', 'terrace', 'mint-tea', 'kasbah', 'people-watching'],
      filterAnswers: { 'food-vibe': 'traditional' }
    },
    {
      id: 'chaouen-eat-hidden-blue-alley-cafes',
      label: 'Blue Rooftops',
      subtitle: 'For photogenic breakfast terraces and fresh pomegranate juices',
      icon: 'lounge',
      badgeColor: 'cyan',
      filterVibes: ['rooftop', 'blue-alley', 'juice', 'breakfast', 'pomegranate', 'photogenic'],
      filterAnswers: { 'food-vibe': 'rooftop' }
    },
    {
      id: 'chaouen-eat-ras-el-maa-spring-cafes',
      label: 'Spring Cafes',
      subtitle: 'For sipping tea with your feet in cool mountain water',
      icon: 'cafe',
      badgeColor: 'emerald',
      filterVibes: ['ras-el-maa', 'riverside', 'spring', 'tea', 'relax'],
      filterAnswers: { 'food-vibe': 'cafe' }
    },
    {
      id: 'chaouen-eat-traditional-rif-bakeries',
      label: 'Country Bakeries',
      subtitle: 'For warm country bread, honey pastries, and cheap local bites',
      icon: 'street food',
      badgeColor: 'rose',
      filterVibes: ['bakery', 'bread', 'pastry', 'honey', 'street-food'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  things: [
    {
      id: 'chaouen-things-blue-alleys-walk',
      label: 'Blue Alleys',
      subtitle: 'For iconic azure arches, colorful flower pots, and stone steps',
      icon: 'historic',
      badgeColor: 'cyan',
      filterVibes: ['blue-alleys', 'photography', 'arches', 'flower-pots', 'walk'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'chaouen-things-spanish-mosque-sunset',
      label: 'Spanish Mosque',
      subtitle: 'For panoramic golden hour views overlooking the entire blue city',
      icon: 'historic',
      badgeColor: 'amber',
      filterVibes: ['spanish-mosque', 'sunset', 'hike', 'viewpoint', 'panorama'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'chaouen-things-akchour-waterfalls-hike',
      label: 'Akchour Hikes',
      subtitle: 'For turquoise swimming pools and dramatic limestone mountain arches',
      icon: 'hike',
      badgeColor: 'emerald',
      filterVibes: ['akchour', 'waterfall', 'gods-bridge', 'hiking', 'swimming', 'canyon'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'chaouen-things-kasbah-fortress-museum',
      label: 'Kasbah Fortress',
      subtitle: 'For medieval gardens, tower lookouts, and regional Rif artifacts',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['kasbah', 'fortress', 'museum', 'history', 'gardens'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'chaouen-things-mountain-herb-workshops',
      label: 'Herb Workshops',
      subtitle: 'For distilling wild lavender, rosemary oils, and natural soaps',
      icon: 'argan',
      badgeColor: 'rose',
      filterVibes: ['herbs', 'soap', 'lavender', 'workshop', 'essential-oils'],
      subCategory: 'wellness',
      filterAnswers: { 'interests': 'slow' }
    }
  ],
  shop: [
    {
      id: 'chaouen-shop-rif-woven-blankets',
      label: 'Wool Blankets',
      subtitle: 'For traditional handwoven striped blankets and mountain textiles',
      icon: 'souk',
      badgeColor: 'terracotta',
      filterVibes: ['blankets', 'wool', 'striped', 'weaving', 'textiles', 'rif'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'chaouen-shop-mountain-leather-bags',
      label: 'Leather Bags',
      subtitle: 'For soft mountain-tanned leather bags and travel accessories',
      icon: 'boutique',
      badgeColor: 'amber',
      filterVibes: ['leather', 'backpack', 'satchel', 'tanned', 'bags'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'chaouen-shop-natural-pigments-soaps',
      label: 'Indigo & Soaps',
      subtitle: 'For blue indigo powders, clay soaps, and lavender bath bars',
      icon: 'argan',
      badgeColor: 'cyan',
      filterVibes: ['indigo', 'soap', 'pigments', 'lavender', 'cosmetics'],
      filterAnswers: { 'shop-target': 'spices' }
    },
    {
      id: 'chaouen-shop-hand-carved-cedar',
      label: 'Cedar Carvings',
      subtitle: 'For spice mortars, kitchen bowls, and scented jewelry boxes',
      icon: 'historic',
      badgeColor: 'gold',
      filterVibes: ['wood', 'cedar', 'olive-wood', 'carving', 'bowls'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'chaouen-shop-straw-sun-hats',
      label: 'Rif Straw Hats',
      subtitle: 'For colorful Rif straw hats, market baskets, and woven fans',
      icon: 'boutique',
      badgeColor: 'rose',
      filterVibes: ['straw-hat', 'pom-pom', 'baskets', 'woven', 'sun-hat'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 ESSAOUIRA
// ─────────────────────────────────────────────────────────────
const ESSAOUIRA_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'essaouira-stay-ramparts-riads',
      label: 'Rampart Riads',
      subtitle: 'For crashing wave sounds, sea breezes, and sunset rooftop views',
      icon: 'riad',
      badgeColor: 'navy',
      filterVibes: ['ramparts', 'oceanfront', 'riad', 'waves', 'rooftop', 'sea-view'],
      filterAnswers: { 'sleep-type': 'riad', 'sleep-vibe': 'culture' }
    },
    {
      id: 'essaouira-stay-beachfront-surf-resorts',
      label: 'Surf Resorts',
      subtitle: 'For direct kite & surf access, heated pools, and beach clubs',
      icon: 'surf',
      badgeColor: 'cyan',
      filterVibes: ['beachfront', 'surf', 'kitesurf', 'heated-pool', 'resort'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'essaouira-stay-medina-heart-dars',
      label: 'Medina Dars',
      subtitle: 'For quiet whitewashed courtyards steps from artisan alleys',
      icon: 'riad',
      badgeColor: 'terracotta',
      filterVibes: ['dar', 'medina', 'whitewash', 'quiet', 'courtyard'],
      filterAnswers: { 'sleep-vibe': 'quiet' }
    },
    {
      id: 'essaouira-stay-argan-countryside-lodges',
      label: 'Country Retreats',
      subtitle: 'For tranquil olive groves, swimming pools, and farm-to-table stays',
      icon: 'hike',
      badgeColor: 'emerald',
      filterVibes: ['eco-lodge', 'argan', 'countryside', 'retreat', 'pool', 'garden'],
      filterAnswers: { 'sleep-type': 'countryside' }
    },
    {
      id: 'essaouira-stay-surfer-nomad-hostels',
      label: 'Hostels',
      subtitle: 'For communal kitchens, board lockers, and coworking desks',
      icon: 'hostel',
      badgeColor: 'gold',
      filterVibes: ['hostel', 'surfer', 'nomad', 'budget', 'social'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  eat: [
    {
      id: 'essaouira-eat-port-fish-grills',
      label: 'Port Grills',
      subtitle: 'For picking fresh sardines, calamari, and sole right at the docks',
      icon: 'seafood',
      badgeColor: 'navy',
      filterVibes: ['port', 'fish', 'sardines', 'calamari', 'grilled-fish', 'seafood'],
      filterAnswers: { 'food-cuisine': 'seafood', 'food-vibe': 'street-food' }
    },
    {
      id: 'essaouira-eat-medina-rooftop-seafood',
      label: 'Medina Seafood',
      subtitle: 'For spiced fish tagines, pastilla, and sheltered ocean views',
      icon: 'traditional',
      badgeColor: 'terracotta',
      filterVibes: ['rooftop', 'seafood', 'fish-tagine', 'medina', 'views', 'pastilla'],
      filterAnswers: { 'food-vibe': 'rooftop' }
    },
    {
      id: 'essaouira-eat-bohemian-cafes-bakeries',
      label: 'Artisan Cafes',
      subtitle: 'For organic breakfasts, French croissants, and specialty teas',
      icon: 'cafe',
      badgeColor: 'amber',
      filterVibes: ['cafe', 'bakery', 'croissant', 'organic', 'breakfast', 'tea'],
      filterAnswers: { 'food-cuisine': 'cafe-pastry' }
    },
    {
      id: 'essaouira-eat-windward-beach-clubs',
      label: 'Beach Lounges',
      subtitle: 'For oceanfront cocktails, tapas, and live acoustic sunset music',
      icon: 'lounge',
      badgeColor: 'rose',
      filterVibes: ['beach-club', 'sunset', 'cocktails', 'live-music', 'tapas'],
      filterAnswers: { 'food-vibe': 'drinks' }
    },
    {
      id: 'essaouira-eat-moulay-hassan-bistros',
      label: 'Plaza Bistros',
      subtitle: 'For afternoon gelato, mint tea, and street performer energy',
      icon: 'cafe',
      badgeColor: 'gold',
      filterVibes: ['plaza', 'gelato', 'tea', 'bistro', 'people-watching']
    }
  ],
  things: [
    {
      id: 'essaouira-things-skala-ramparts-walk',
      label: 'Skala Ramparts',
      subtitle: 'For historic bronze cannons, crashing Atlantic waves, and stone ramparts',
      icon: 'historic',
      badgeColor: 'navy',
      filterVibes: ['skala', 'ramparts', 'cannons', 'citadel', 'ocean', 'history'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'essaouira-things-kitesurfing-wave-riding',
      label: 'Wave Surfing',
      subtitle: 'For world-class wind, wave riding, and certified surf schools',
      icon: 'surf',
      badgeColor: 'cyan',
      filterVibes: ['kitesurf', 'wingfoil', 'surf', 'watersports', 'wind', 'waves'],
      subCategory: 'sport',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'essaouira-things-thuya-wood-workshops',
      label: 'Thuya Carving',
      subtitle: 'For watching master craftsmen carve fragrant burled cedarwood',
      icon: 'historic',
      badgeColor: 'amber',
      filterVibes: ['thuya', 'woodwork', 'artisan', 'carving', 'marquetry', 'workshop'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'essaouira-things-fishing-harbor-spectacle',
      label: 'Harbor Walks',
      subtitle: 'For returning wooden boats, net menders, and vibrant sea life',
      icon: 'seafood',
      badgeColor: 'gold',
      filterVibes: ['harbor', 'fishing', 'trawlers', 'photography', 'boats'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'essaouira-things-sidi-kaouki-dune-horses',
      label: 'Dune Horses',
      subtitle: 'For galloping along deserted wild sands and coastal dunes',
      icon: 'hike',
      badgeColor: 'rose',
      filterVibes: ['horseback', 'sidi-kaouki', 'beach-ride', 'dunes', 'horses'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    }
  ],
  shop: [
    {
      id: 'essaouira-shop-inlaid-thuya-wood',
      label: 'Thuya Woodcraft',
      subtitle: 'For polished jewelry boxes, chessboards, and mother-of-pearl inlay',
      icon: 'historic',
      badgeColor: 'amber',
      filterVibes: ['thuya', 'boxes', 'chess', 'inlay', 'woodcraft'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'essaouira-shop-womens-argan-cooperatives',
      label: 'Argan Co-ops',
      subtitle: 'For certified culinary amlou spread and cosmetic argan oils',
      icon: 'argan',
      badgeColor: 'gold',
      filterVibes: ['argan', 'amlou', 'cooperative', 'cosmetics', 'organic'],
      filterAnswers: { 'shop-target': 'spices' }
    },
    {
      id: 'essaouira-shop-maritime-ceramics',
      label: 'Coastal Pottery',
      subtitle: 'For hand-painted coastal pottery, olive dishes, and serving bowls',
      icon: 'boutique',
      badgeColor: 'cyan',
      filterVibes: ['ceramics', 'pottery', 'blue-white', 'bowls', 'dishes'],
      filterAnswers: { 'shop-target': 'ceramics' }
    },
    {
      id: 'essaouira-shop-naive-art-galleries',
      label: 'Art Galleries',
      subtitle: 'For vibrant Essaouira surrealist canvases, sculptures, and art',
      icon: 'boutique',
      badgeColor: 'rose',
      filterVibes: ['art', 'gallery', 'naive-art', 'paintings', 'sculptures'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'essaouira-shop-spice-tea-bazaars',
      label: 'Teapots & Spices',
      subtitle: 'For engraved brass teapots, colorful glasses, and fresh spices',
      icon: 'souk',
      badgeColor: 'terracotta',
      filterVibes: ['spices', 'teapot', 'tea-glasses', 'brassware', 'souk'],
      filterAnswers: { 'shop-target': 'spices' }
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 MERZOUGA
// ─────────────────────────────────────────────────────────────
const MERZOUGA_PICKS: CityCategoriesMap = {
  stay: [
    {
      id: 'merzouga-stay-luxury-dune-glamping',
      label: 'Dune Glamping',
      subtitle: 'For en-suite canvas tents, private heating/AC, and starry campfires',
      icon: 'desert',
      badgeColor: 'amber',
      filterVibes: ['glamping', 'luxury-camp', 'en-suite', 'dunes', 'ac', 'stargazing'],
      filterAnswers: { 'sleep-type': 'desert', 'base-lifestyle': 'premium' }
    },
    {
      id: 'merzouga-stay-traditional-kasbahs',
      label: 'Desert Kasbahs',
      subtitle: 'For thick earthen walls, desert swimming pools, and dune views',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['kasbah', 'mudbrick', 'pool', 'dune-view', 'traditional'],
      filterAnswers: { 'sleep-type': 'hotel', 'sleep-vibe': 'pool' }
    },
    {
      id: 'merzouga-stay-nomad-midrange-camps',
      label: 'Nomad Camps',
      subtitle: 'For authentic Berber hospitality, drum circles, and camel treks',
      icon: 'desert',
      badgeColor: 'gold',
      filterVibes: ['nomad-camp', 'berber', 'drums', 'camel-trek', 'desert'],
      filterAnswers: { 'sleep-type': 'desert', 'base-lifestyle': 'balanced' }
    },
    {
      id: 'merzouga-stay-offroad-adventure-lodges',
      label: 'Safari Lodges',
      subtitle: 'For off-road rally travelers, buggy parking, and expedition gear',
      icon: 'hike',
      badgeColor: 'cyan',
      filterVibes: ['4x4', 'rally', 'expedition', 'lodge', 'adventure'],
      filterAnswers: { 'sleep-vibe': 'adventure' }
    },
    {
      id: 'merzouga-stay-backpacker-desert-hostels',
      label: 'Hostels',
      subtitle: 'For budget desert excursions and village center access',
      icon: 'hostel',
      badgeColor: 'navy',
      filterVibes: ['hostel', 'budget', 'backpacker', 'village', 'dorm'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  eat: [
    {
      id: 'merzouga-eat-berber-pizza-madfouna',
      label: 'Berber Pizza',
      subtitle: 'For stuffed desert bread with minced meat, eggs, and almonds',
      icon: 'traditional',
      badgeColor: 'terracotta',
      filterVibes: ['madfouna', 'berber-pizza', 'traditional', 'stuffed-bread'],
      filterAnswers: { 'food-cuisine': 'moroccan-traditional' }
    },
    {
      id: 'merzouga-eat-campfire-sand-dinners',
      label: 'Dune Dinners',
      subtitle: 'For candlelit sand dining, slow-cooked clay tagines, and mint tea',
      icon: 'lounge',
      badgeColor: 'amber',
      filterVibes: ['campfire', 'candlelit', 'dunes', 'tagine', 'desert-dinner'],
      filterAnswers: { 'food-vibe': 'traditional' }
    },
    {
      id: 'merzouga-eat-kasbah-poolside-terraces',
      label: 'Kasbah Terraces',
      subtitle: 'For refreshing salads, cold drinks, and panoramic desert dunes',
      icon: 'cafe',
      badgeColor: 'cyan',
      filterVibes: ['kasbah', 'poolside', 'cold-drinks', 'salad', 'terrace'],
      filterAnswers: { 'food-vibe': 'rooftop' }
    },
    {
      id: 'merzouga-eat-desert-tea-ceremonies',
      label: 'Tea Ceremonies',
      subtitle: 'For frothy Saharan tea poured high with local nomadic stories',
      icon: 'cafe',
      badgeColor: 'gold',
      filterVibes: ['mint-tea', 'tea-ceremony', 'nomad', 'saharan-tea'],
      filterAnswers: { 'food-vibe': 'cafe' }
    },
    {
      id: 'merzouga-eat-roadside-camel-skewers',
      label: 'Village Grills',
      subtitle: 'For tender camel skewers, hearty lentils, and local bread',
      icon: 'street food',
      badgeColor: 'rose',
      filterVibes: ['camel-meat', 'skewers', 'grill', 'village', 'cheap-eats'],
      filterAnswers: { 'base-lifestyle': 'lean' }
    }
  ],
  things: [
    {
      id: 'merzouga-things-sunrise-camel-trek',
      label: 'Camel Treks',
      subtitle: 'For iconic caravans crossing towering golden Erg Chebbi dunes',
      icon: 'desert',
      badgeColor: 'amber',
      filterVibes: ['camel-trek', 'sunrise', 'sunset', 'erg-chebbi', 'dunes'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'merzouga-things-quad-buggy-dunes',
      label: 'Quad Buggies',
      subtitle: 'For exhilarating sand cresting, rally tracks, and adrenaline',
      icon: 'hike',
      badgeColor: 'gold',
      filterVibes: ['quad', 'buggy', '4x4', 'dune-bashing', 'adrenaline'],
      subCategory: 'sport',
      filterAnswers: { 'interests': 'adventure' }
    },
    {
      id: 'merzouga-things-khamlia-gnawa-music',
      label: 'Gnawa Music',
      subtitle: 'For hypnotic spiritual desert drumming and ancestral chants',
      icon: 'historic',
      badgeColor: 'terracotta',
      filterVibes: ['gnawa', 'khamlia', 'music', 'drums', 'culture', 'spiritual'],
      subCategory: 'culture',
      filterAnswers: { 'interests': 'culture' }
    },
    {
      id: 'merzouga-things-stargazing-milky-way',
      label: 'Stargazing',
      subtitle: 'For zero-light pollution views of the glowing Milky Way',
      icon: 'wellness',
      badgeColor: 'navy',
      filterVibes: ['stargazing', 'milky-way', 'astrophotography', 'night-sky', 'stars'],
      subCategory: 'photography',
      filterAnswers: { 'interests': 'photography-interest' }
    },
    {
      id: 'merzouga-things-fossil-hunting-nomad-oasis',
      label: 'Fossil Hunting',
      subtitle: 'For ancient ammonite beds, desert palms, and authentic nomadic tea',
      icon: 'historic',
      badgeColor: 'emerald',
      filterVibes: ['fossils', 'oasis', 'nomad', 'ammonite', 'desert-roses'],
      subCategory: 'desert-nature',
      filterAnswers: { 'interests': 'slow' }
    }
  ],
  shop: [
    {
      id: 'merzouga-shop-tuareg-indigo-scarves',
      label: 'Indigo Scarves',
      subtitle: 'For authentic blue Tuareg desert turbans and cheche wraps',
      icon: 'souk',
      badgeColor: 'navy',
      filterVibes: ['indigo', 'turban', 'cheche', 'tuareg', 'scarf'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'merzouga-shop-fossils-minerals',
      label: 'Desert Fossils',
      subtitle: 'For polished orthoceras stones, gypsum desert roses, and geodes',
      icon: 'boutique',
      badgeColor: 'amber',
      filterVibes: ['fossils', 'minerals', 'desert-rose', 'orthoceras', 'geodes'],
      filterAnswers: { 'shop-target': 'souvenirs' }
    },
    {
      id: 'merzouga-shop-camel-hair-rugs',
      label: 'Camel Wool Rugs',
      subtitle: 'For heavy nomad kilims, camel hair carpets, and tent cushions',
      icon: 'souk',
      badgeColor: 'terracotta',
      filterVibes: ['camel-hair', 'kilim', 'carpets', 'rugs', 'cushions'],
      filterAnswers: { 'shop-target': 'leather' }
    },
    {
      id: 'merzouga-shop-tuareg-silver-talismans',
      label: 'Silver Jewelry',
      subtitle: 'For Southern Cross pendants, engraved rings, and silver cuffs',
      icon: 'boutique',
      badgeColor: 'gold',
      filterVibes: ['silver', 'tuareg', 'cross', 'jewelry', 'rings', 'talismans'],
      filterAnswers: { 'base-lifestyle': 'premium' }
    },
    {
      id: 'merzouga-shop-saharan-dates-spices',
      label: 'Desert Dates',
      subtitle: 'For sweet desert dates, wild cumin seeds, and herbal infusions',
      icon: 'argan',
      badgeColor: 'emerald',
      filterVibes: ['dates', 'medjool', 'cumin', 'herbal-tea', 'spices'],
      filterAnswers: { 'shop-target': 'spices' }
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 📍 ADAPTIVE REGIONAL FALLBACK ENGINE
// ─────────────────────────────────────────────────────────────
const REGISTRY: Record<string, CityCategoriesMap> = {
  agadir: AGADIR_PICKS,
  marrakech: MARRAKECH_PICKS,
  fes: FES_PICKS,
  casablanca: CASABLANCA_PICKS,
  tangier: TANGIER_PICKS,
  chefchaouen: CHEFCHAOUEN_PICKS,
  essaouira: ESSAOUIRA_PICKS,
  merzouga: MERZOUGA_PICKS,
};

/**
 * Retrieves the 5 curated category filters for any city and vertical.
 * Fallbacks safely to destination-archetype presets for secondary towns.
 */
export function getCityCategoryPicks(cityId: string = 'agadir', rawCategory?: string | null): CityCategoryPick[] {
  const normCity = (cityId || 'agadir').toLowerCase();
  const catKey = normalizeCategory(rawCategory);

  // 1. Direct city match
  if (REGISTRY[normCity]?.[catKey]) {
    return REGISTRY[normCity][catKey];
  }

  // 2. Coastal / Beach archetype (Taghazout, Imsouane, Asilah, Saidia, Al Hoceima, Dakhla)
  if (['taghazout', 'imsouane', 'asilah', 'saidia', 'al_hoceima', 'dakhla', 'el_jadida', 'oualidia'].includes(normCity)) {
    return REGISTRY['agadir']?.[catKey] || AGADIR_PICKS[catKey];
  }

  // 3. Desert / Oasis archetype (Ouarzazate, Zagora, Mhamid, Todra Dades, Tinghir)
  if (['ouarzazate', 'zagora', 'mhamid', 'todra_dades', 'tinghir'].includes(normCity)) {
    return REGISTRY['merzouga']?.[catKey] || MERZOUGA_PICKS[catKey];
  }

  // 4. Imperial / Mountain Heritage archetype (Rabat, Meknes, Ifrane, Azrou, Taroudant)
  if (['rabat', 'meknes', 'taroudant'].includes(normCity)) {
    return REGISTRY['marrakech']?.[catKey] || MARRAKECH_PICKS[catKey];
  }

  if (['ifrane', 'azrou', 'ifrane_azrou', 'imlil_toubkal', 'ourika', 'ouzoud', 'oukaimeden'].includes(normCity)) {
    return REGISTRY['chefchaouen']?.[catKey] || CHEFCHAOUEN_PICKS[catKey];
  }

  // 5. Ultimate Fallback: Agadir
  return AGADIR_PICKS[catKey] || AGADIR_PICKS.stay;
}
