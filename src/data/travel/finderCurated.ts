// src/data/travel/finderCurated.ts

export interface CuratedCategoryItem {
  id: string;
  name: string;
  emoji?: string;
  description: string;
  associatedTags?: string[];
  cohort?: 'tourist' | 'local' | 'expat';
  styleName?: string;
  vibeEmoji?: string;
  locationArea?: string;
  duration?: string;
  vibeTag?: string;
}

export type CuratedStay = CuratedCategoryItem;
export type CuratedDish = CuratedCategoryItem;
export type CuratedActivity = CuratedCategoryItem;

export interface CityCuratedProfile {
  dishes: CuratedCategoryItem[];
  stays: CuratedCategoryItem[];
  activities: CuratedCategoryItem[];
  shopping: CuratedCategoryItem[];
}

const defaultStays: CuratedCategoryItem[] = [
  {
    id: 'luxury-resorts',
    cohort: 'tourist',
    name: 'All-Inclusive & Luxury Beach Resorts',
    styleName: 'Resort Relaxation',
    description: 'For effortless relaxation right on the sand or grand pools with full premium hospitality.',
    emoji: '🏨',
    vibeEmoji: '🏨',
    locationArea: 'Prime Resort & Coastal Zones'
  },
  {
    id: 'surf-ecolodges',
    cohort: 'expat',
    name: 'Surf Camps & Eco-Lodges',
    styleName: 'Nomad & Surf Vibe',
    description: 'For the relaxed local coastal vibe, digital nomads, surfers, and sustainable nature retreats.',
    emoji: '🏄',
    vibeEmoji: '🏄',
    locationArea: 'Coastal Outposts & Hills'
  },
  {
    id: 'riads-guesthouses',
    cohort: 'tourist',
    name: 'Boutique Riads & Guesthouses',
    styleName: 'Traditional Courtyard Stay',
    description: 'For authentic Moroccan architecture, central courtyards, plunge pools, and intimate hospitality.',
    emoji: '🕌',
    vibeEmoji: '🕌',
    locationArea: 'Medina Core & Historic Quarters'
  },
  {
    id: 'apartments-rentals',
    cohort: 'expat',
    name: 'Apartments & Holiday Rentals',
    styleName: 'Independent Living',
    description: 'For long stays, families, groups, and self-catering budgets with modern amenities and high-speed Wi-Fi.',
    emoji: '🏢',
    vibeEmoji: '🏢',
    locationArea: 'Modern Districts & Marina'
  },
  {
    id: 'budget-hostels',
    cohort: 'local',
    name: 'Budget Hostels & City Hotels',
    styleName: 'Backpacker Central',
    description: 'For backpackers and travelers wanting to stay near the city center, cafes, and transport links.',
    emoji: '🎒',
    vibeEmoji: '🎒',
    locationArea: 'City Center & Station Vicinity'
  }
];

export const marrakechDishes: CuratedCategoryItem[] = [
  {
    id: 'tanjia-marrakchia',
    name: 'Tanjia Marrakchia',
    emoji: '🏺',
    description: 'The soul of Marrakech: spiced lamb or beef slow-braised for hours inside an earthenware clay urn in the public hammam embers.',
    associatedTags: ['tanjia', 'moroccan', 'lamb', 'traditional']
  },
  {
    id: 'heritage-lamb-tagine',
    name: 'Heritage Tagine with Prunes',
    emoji: '🍲',
    description: 'Slow-simmered tender meat glazed with caramelized prunes, toasted almonds, sesame seeds, and saffron broth.',
    associatedTags: ['tagine', 'moroccan', 'prunes', 'traditional']
  },
  {
    id: 'moroccan-pastilla',
    name: 'Traditional Pastilla',
    emoji: '🥧',
    description: 'Crisp layered warqa pastry filled with tender spiced poultry, crushed almonds, cinnamon, and powdered sugar.',
    associatedTags: ['pastilla', 'moroccan', 'pastry']
  },
  {
    id: 'medina-brochettes',
    name: 'Medina Charcoal Brochettes',
    emoji: '🍢',
    description: 'Freshly minced kefta and spiced lamb skewers grilled over open red embers and tucked into hearth-baked bread.',
    associatedTags: ['grill', 'street-food', 'kefta', 'brochettes']
  },
  {
    id: 'pit-roasted-mechoui',
    name: 'Pit-Roasted Mechoui',
    emoji: '🍖',
    description: 'Melt-in-your-mouth whole lamb roasted in subterranean clay ovens until falling off the bone, seasoned with cumin and coarse salt.',
    associatedTags: ['mechoui', 'lamb', 'traditional', 'roast']
  }
];

export const agadirDishes: CuratedCategoryItem[] = [
  {
    id: 'grilled-atlantic-sardines',
    name: 'Grilled Atlantic Sardines',
    emoji: '🐟',
    description: 'Fresh morning ocean catch seasoned simply with coarse sea salt, cumin, and fresh lemon, grilled over glowing charcoal.',
    associatedTags: ['sardines', 'seafood', 'grill', 'atlantic']
  },
  {
    id: 'souss-seafood-tagine',
    name: 'Souss Seafood Tagine',
    emoji: '🦐',
    description: 'White Atlantic fish, calamari, and prawns slow-cooked with tomatoes, sweet bell peppers, and fragrant garlic chermoula.',
    associatedTags: ['seafood', 'tagine', 'fish', 'prawns']
  },
  {
    id: 'amlou-argan-breakfast',
    name: 'Souss Amlou & Argan Plate',
    emoji: '🥣',
    description: 'Rich stone-ground toasted almond dip whipped with pure culinary argan oil and wild wildflower honey, served with warm bread.',
    associatedTags: ['amlou', 'argan', 'breakfast', 'berber']
  },
  {
    id: 'calamari-fresh-catch',
    name: 'Crisp Calamari & Squid',
    emoji: '🦑',
    description: 'Tender ocean squid rings delicately fried or pan-seared with garlic parsley butter and spicy harissa.',
    associatedTags: ['calamari', 'seafood', 'squid']
  },
  {
    id: 'berber-vegetable-tagine',
    name: 'Berber Souss Tagine',
    emoji: '🥦',
    description: 'Pyramid of crisp seasonal valley vegetables stewed with saffron, ginger, and extra virgin olive oil over charcoal brazier.',
    associatedTags: ['tagine', 'berber', 'vegetarian', 'vegetables']
  }
];

export const fesDishes: CuratedCategoryItem[] = [
  {
    id: 'fassi-pigeon-pastilla',
    name: 'Fassi Pigeon & Chicken Pastilla',
    emoji: '🥧',
    description: 'The crowning glory of imperial Fes: wafer-thin pastry encasing spiced poultry, eggs, and cinnamon-scented almonds.',
    associatedTags: ['pastilla', 'fassi', 'moroccan']
  },
  {
    id: 'khlii-with-eggs',
    name: 'Khlii with Fried Farm Eggs',
    emoji: '🍳',
    description: 'Imperial preserved sun-dried beef strips fried in their own aromatic cumin-spiced tallow with fresh runny eggs.',
    associatedTags: ['khlii', 'breakfast', 'traditional']
  },
  {
    id: 'fassi-lamb-prunes',
    name: 'Imperial Lamb Tagine',
    emoji: '🍲',
    description: 'Centuries-old royal recipe of lamb shank glazed with caramelized quinces, figs, or prunes and toasted sesame.',
    associatedTags: ['tagine', 'lamb', 'fassi', 'traditional']
  },
  {
    id: 'fassi-harira-chebakia',
    name: 'Heritage Fassi Harira',
    emoji: '🥣',
    description: 'Silky tomato, lentil, and chickpea broth fragrant with fresh celery, cilantro, and ginger, paired with honey chebakia.',
    associatedTags: ['harira', 'soup', 'chebakia']
  },
  {
    id: 'seffa-medfouna',
    name: 'Seffa Medfouna',
    emoji: '🍝',
    description: 'Steamed delicate vermicelli lightly dusted with cinnamon and sugar, concealing a succulent spiced chicken stew beneath.',
    associatedTags: ['seffa', 'chicken', 'traditional']
  }
];

export const essaouiraDishes: CuratedCategoryItem[] = [
  {
    id: 'port-grilled-fish',
    name: 'Port-Side Grilled Fish Feast',
    emoji: '🐟',
    description: 'Selection of fresh sea bream, red mullet, and sardines straight off the wooden blue fishing skiffs and onto the charcoal grill.',
    associatedTags: ['seafood', 'fish', 'grill', 'port']
  },
  {
    id: 'sardine-kowari-tagine',
    name: 'Sardine Kowari Tagine',
    emoji: '🍲',
    description: 'Hand-minced fresh sardine balls infused with coriander, cumin, and garlic, simmered in a spiced tomato sauce.',
    associatedTags: ['sardines', 'tagine', 'seafood']
  },
  {
    id: 'essaouira-seafood-pastilla',
    name: 'Atlantic Seafood Pastilla',
    emoji: '🥟',
    description: 'Crispy pastry parcels packed with Atlantic prawns, tender white fish, vermicelli, and mild chili chermoula.',
    associatedTags: ['pastilla', 'seafood', 'prawns']
  },
  {
    id: 'chermoula-fish-tagine',
    name: 'Chermoula Ocean Fish Tagine',
    emoji: '🍅',
    description: 'Fresh local white fish baked with sweet tomatoes, bell peppers, carrots, and preserved Moroccan lemons.',
    associatedTags: ['tagine', 'fish', 'seafood']
  },
  {
    id: 'argan-goat-cheese-salad',
    name: 'Local Goat Cheese & Argan Salad',
    emoji: '🥗',
    description: 'Fresh creamy goat cheese from the nearby Argan hills paired with local salad greens and cold-pressed argan oil.',
    associatedTags: ['argan', 'cheese', 'salad', 'vegetarian']
  }
];

export const casablancaDishes: CuratedCategoryItem[] = [
  {
    id: 'corniche-fresh-seafood',
    name: 'Corniche Seafood & Oysters',
    emoji: '🦪',
    description: 'Platters of Atlantic oysters, grilled king prawns, and fresh sole overlooking the ocean promenade.',
    associatedTags: ['seafood', 'oysters', 'prawns', 'fish']
  },
  {
    id: 'royal-seven-vegetable-couscous',
    name: 'Royal Moroccan Couscous',
    emoji: '🍲',
    description: 'Fluffy hand-rolled semolina steamed over fragrant broth, crowned with sweet pumpkin, zucchini, turnips, and tender beef.',
    associatedTags: ['couscous', 'moroccan', 'vegetables', 'beef']
  },
  {
    id: 'coastal-fish-tagine',
    name: 'Coastal Fish Tagine',
    emoji: '🐟',
    description: 'Tender white fish fillet stewed with tomatoes, red bell peppers, and purple olives in zesty chermoula.',
    associatedTags: ['fish', 'tagine', 'seafood']
  },
  {
    id: 'street-kefta-merguez',
    name: 'Charcoal Kefta & Merguez',
    emoji: '🥖',
    description: 'Sizzling spicy lamb sausages and minced kefta patties grilled street-side and served in crusty baguettes.',
    associatedTags: ['street-food', 'kefta', 'grill']
  },
  {
    id: 'traditional-harira-dates',
    name: 'Evening Harira & Dates',
    emoji: '🥣',
    description: 'Rich, warming tomato, chickpea, and coriander soup accompanied by sweet Majhoul dates and sesame pastries.',
    associatedTags: ['harira', 'soup', 'dates']
  }
];

export const tangierDishes: CuratedCategoryItem[] = [
  {
    id: 'strait-seafood-paella',
    name: 'Strait Seafood & Fish Paella',
    emoji: '🥘',
    description: 'Mediterranean-influenced rice pan loaded with fresh Gibraltar Strait prawns, calamari, mussels, and saffron.',
    associatedTags: ['seafood', 'rice', 'paella', 'fish']
  },
  {
    id: 'tangier-calentita',
    name: 'Tangier Calentita',
    emoji: '🥧',
    description: 'Historic Sephardic-Tangier baked chickpea flour tart, served warm and golden with a dusting of roasted cumin and black pepper.',
    associatedTags: ['calentita', 'street-food', 'chickpea']
  },
  {
    id: 'charcoal-swordfish',
    name: 'Grilled Swordfish & Prawns',
    emoji: '🗡️',
    description: 'Meaty swordfish steaks marinated in garlic and lemon, charred to perfection over glowing lump charcoal.',
    associatedTags: ['swordfish', 'seafood', 'grill']
  },
  {
    id: 'historic-tea-churros',
    name: 'Historic Cafe Mint Tea & Churros',
    emoji: '☕',
    description: 'Freshly infused northern mint tea served with golden crispy sugar-dusted churros or sfenj.',
    associatedTags: ['cafe', 'tea', 'churros', 'breakfast']
  },
  {
    id: 'northern-lamb-tagine',
    name: 'Northern Herb Lamb Tagine',
    emoji: '🍲',
    description: 'Slow-braised lamb with sweet tender baby peas, wild artichoke hearts, and aromatic mountain herbs.',
    associatedTags: ['tagine', 'lamb', 'moroccan']
  }
];

export const chefchaouenDishes: CuratedCategoryItem[] = [
  {
    id: 'jbel-goat-cheese-honey',
    name: 'Rif Goat Cheese & Wild Honey',
    emoji: '🧀',
    description: 'Fresh soft goat cheese crafted in the Rif mountains, drizzled with fragrant local mountain thyme honey.',
    associatedTags: ['cheese', 'honey', 'breakfast', 'berber']
  },
  {
    id: 'mountain-bissara',
    name: 'Steaming Mountain Bissara',
    emoji: '🥣',
    description: 'Velvety dried fava bean soup served piping hot in an earthen bowl, swirled with green olive oil, cumin, and paprika.',
    associatedTags: ['bissara', 'soup', 'vegetarian', 'traditional']
  },
  {
    id: 'rif-mountain-goat-tagine',
    name: 'Rif Mountain Goat Tagine',
    emoji: '🍲',
    description: 'Slow-stewed mountain goat with wild hillside oregano, garlic, and golden baby potatoes in clay.',
    associatedTags: ['tagine', 'goat', 'traditional']
  },
  {
    id: 'kefta-farm-eggs-tagine',
    name: 'Kefta & Poached Farm Eggs',
    emoji: '🍳',
    description: 'Spiced minced lamb meatballs simmered in fresh tomato-garlic sauce with farm eggs gently poached on top.',
    associatedTags: ['kefta', 'tagine', 'eggs']
  },
  {
    id: 'hearth-village-bread',
    name: 'Wood-Fired Bread & Green Olives',
    emoji: '🥖',
    description: 'Crusty round semolina bread pulled hot from village community ovens, served with cured mountain olives and olive oil.',
    associatedTags: ['bread', 'olives', 'breakfast']
  }
];

export const rabatDishes: CuratedCategoryItem[] = [
  {
    id: 'bouregreg-fish-tagine',
    name: 'Bouregreg Sea Bass Tagine',
    emoji: '🐟',
    description: 'Fresh Atlantic sea bass seasoned with zesty chermoula, layered over sliced potatoes, sweet bell peppers, and preserved lemon.',
    associatedTags: ['fish', 'tagine', 'seafood']
  },
  {
    id: 'rabat-couscous-tfaya',
    name: 'Rabat Couscous with Sweet Tfaya',
    emoji: '🍲',
    description: 'Traditional Friday dish with tender braised lamb crowned with golden caramelized onions, sweet raisins, and cinnamon.',
    associatedTags: ['couscous', 'tfaya', 'lamb', 'traditional']
  },
  {
    id: 'cornes-de-gazelle',
    name: 'Authentic Cornes de Gazelle',
    emoji: '🥐',
    description: 'Refined Rabati pastry stuffed with pure almond paste, ground cinnamon, and perfumed with orange blossom water.',
    associatedTags: ['pastry', 'almond', 'sweets']
  },
  {
    id: 'capital-harira',
    name: 'Royal Capital Harira',
    emoji: '🥣',
    description: 'Rich velvety soup of tomatoes, lentils, and chickpeas infused with fresh herbs and served with honey chebakia.',
    associatedTags: ['harira', 'soup', 'chebakia']
  },
  {
    id: 'beef-artichoke-tagine',
    name: 'Beef & Artichoke Heart Tagine',
    emoji: '🍲',
    description: 'Tender beef shank gently simmered with baby peas, wild artichoke hearts, and sun-pickled lemons.',
    associatedTags: ['tagine', 'beef', 'artichoke']
  }
];

const defaultEats = marrakechDishes;

const defaultActivities: CuratedCategoryItem[] = [
  {
    id: 'historic-sightseeing',
    name: 'Historic Sightseeing & Landmarks',
    emoji: '🏰',
    description: 'For ancient kasbahs, medina gates, cable cars, and cultural walking tours.',
    duration: '2-3 hours',
    vibeTag: 'History & Landmarks'
  },
  {
    id: 'water-sports',
    name: 'Water Sports & Surfing',
    emoji: '🏄',
    description: 'For jet skiing, boat trips, windsurfing, and catching Atlantic waves.',
    duration: '2-4 hours',
    vibeTag: 'Water Sports & Action'
  },
  {
    id: 'day-trips',
    name: 'Day Trips & Mountain Hikes',
    emoji: '⛰️',
    description: 'For scenic valley excursions, desert trips, waterfall hikes, and nature reserves.',
    duration: 'Full Day',
    vibeTag: 'Nature & Adventure'
  },
  {
    id: 'wellness-relaxation',
    name: 'Relaxation & Wellness',
    emoji: '🛁',
    description: 'For traditional Moroccan steam hammams, luxury spas, and peaceful beach walks.',
    duration: '2 hours',
    vibeTag: 'Wellness & Relaxation'
  },
  {
    id: 'family-wildlife',
    name: 'Family & Wildlife Attractions',
    emoji: '🌳',
    description: 'For botanical gardens, wildlife parks, interactive museums, and kid-friendly outings.',
    duration: '2-3 hours',
    vibeTag: 'Family & Parks'
  }
];

const defaultShopping: CuratedCategoryItem[] = [
  {
    id: 'traditional-souks',
    name: 'Traditional Markets & Souks',
    emoji: '👜',
    description: 'For haggling, spices, lanterns, textiles, leather goods, and handmade local crafts.',
    duration: '2-3 hours',
    vibeTag: 'Souks & Crafts'
  },
  {
    id: 'argan-cooperatives',
    name: 'Authentic Argan Oil Cooperatives',
    emoji: '🧴',
    description: 'For certified cosmetic and culinary argan oil products produced by local women cooperatives.',
    duration: '1 hour',
    vibeTag: 'Argan & Wellness'
  },
  {
    id: 'modern-malls',
    name: 'Modern Malls & Fashion Brands',
    emoji: '🏬',
    description: 'For fixed prices, global clothing lines, contemporary concept stores, and supermarkets.',
    duration: '2 hours',
    vibeTag: 'Modern Retail'
  },
  {
    id: 'artisanal-boutiques',
    name: 'Artisanal Boutiques & Galleries',
    emoji: '🏺',
    description: 'For curated home decor, high-end kaftans, silver jewelry, and designer pottery.',
    duration: '1-2 hours',
    vibeTag: 'Boutiques & Art'
  },
  {
    id: 'neighborhood-shopping',
    name: 'Local Neighborhood Shopping',
    emoji: '🛒',
    description: 'For daily essentials, local bakeries, spice merchants, and low-key shopping strips.',
    duration: '1 hour',
    vibeTag: 'Local Essentials'
  }
];

export const FINDER_CURATED_DATA: Record<string, CityCuratedProfile> = {
  marrakech: {
    dishes: marrakechDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  fes: {
    dishes: fesDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  casablanca: {
    dishes: casablancaDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  agadir: {
    dishes: agadirDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  tangier: {
    dishes: tangierDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  chefchaouen: {
    dishes: chefchaouenDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  essaouira: {
    dishes: essaouiraDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  rabat: {
    dishes: rabatDishes,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  }
};

export const SHOPPING_CATEGORIES = [
  { id: 'food-beverage', title: 'Food & Beverages', desc: 'Groceries, snacks, local specialties, coffee, tea, sweets, fresh produce', icon: '🍲' },
  { id: 'fashion-accessories', title: 'Fashion & Accessories', desc: 'Clothing, shoes, bags, jewelry, watches, sunglasses, traditional wear', icon: '👜' },
  { id: 'health-beauty', title: 'Health & Beauty', desc: 'Skincare, cosmetics, perfume, toiletries, pharmacy items, wellness products', icon: '🧴' },
  { id: 'electronics-gadgets', title: 'Electronics & Gadgets', desc: 'Phones, accessories, chargers, headphones, smart devices, cameras', icon: '🔌' },
  { id: 'home-lifestyle', title: 'Home & Lifestyle', desc: 'Furniture, home décor, kitchenware, bedding, storage, small appliances', icon: '🏺' },
  { id: 'gifts-local', title: 'Gifts & Local Products', desc: 'Souvenirs, handicrafts, artisan goods, local foods, regional specialties', icon: '🎁' }
] as const;
