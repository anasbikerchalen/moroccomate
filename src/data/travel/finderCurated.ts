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

const defaultEats: CuratedCategoryItem[] = [
  {
    id: 'seafood-dining',
    name: 'Fresh Seafood & Marina Dining',
    emoji: '🦐',
    description: 'For upscale harbor views, fresh catch of the day, grilled fish, and sophisticated coastal plates.',
    associatedTags: ['Seafood', 'Marina', 'Upscale']
  },
  {
    id: 'traditional-moroccan',
    name: 'Traditional Moroccan Cuisine',
    emoji: '🍲',
    description: 'For authentic tagines, slow-cooked lamb, couscous feasts, and local mint tea spots.',
    associatedTags: ['Traditional', 'Moroccan', 'Tagine']
  },
  {
    id: 'street-food',
    name: 'Street Food & Local Markets',
    emoji: '🍢',
    description: 'For gritty, ultra-local stalls, grilled skewers, fresh sfenj doughnuts, and cheap eats.',
    associatedTags: ['Street Food', 'Market', 'Budget']
  },
  {
    id: 'cafes-brunch',
    name: 'International Cafes & Brunch',
    emoji: '☕',
    description: 'For western-style specialty coffee, breakfast bowls, pastries, and modern bistros.',
    associatedTags: ['Café', 'Brunch', 'Coffee']
  },
  {
    id: 'promenades-lounges',
    name: 'Beachfront Promenades & Lounges',
    emoji: '🌅',
    description: 'For dinner with panoramic sunset views, evening drinks, and relaxed lounge music.',
    associatedTags: ['Rooftop', 'Lounge', 'Views']
  }
];

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
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  fes: {
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  casablanca: {
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  agadir: {
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  tangier: {
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  chefchaouen: {
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  essaouira: {
    dishes: defaultEats,
    stays: defaultStays,
    activities: defaultActivities,
    shopping: defaultShopping,
  },
  rabat: {
    dishes: defaultEats,
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
