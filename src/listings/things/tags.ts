
export type TagDimension =
  | 'activity-type'
  | 'vibe'
  | 'energy-level'
  | 'scope'
  | 'setting'
  | 'interests'
  | 'price-range'
  | 'meal-type'
  | 'dietary'
  | 'stay-type'
  | 'shopping-target'
  | 'gem-type';

export interface ActivityTag {
  id: string;
  label: string;
  dimension: TagDimension;
  icon?: string;
  description?: string;
}

export const TAG_REGISTRY: Record<string, ActivityTag> = {
  // --- Activity Type ---
  'hiking': { id: 'hiking', label: 'Hiking & Treks', dimension: 'activity-type', icon: '🥾' },
  'water-sports': { id: 'water-sports', label: 'Water Sports', dimension: 'activity-type', icon: '🏄' },
  'cultural-tour': { id: 'cultural-tour', label: 'Cultural Tour', dimension: 'activity-type', icon: '🏛' },
  'culinary': { id: 'culinary', label: 'Food & Cooking', dimension: 'activity-type', icon: '🍲' },
  'desert-adventure': { id: 'desert-adventure', label: 'Desert Adventure', dimension: 'activity-type', icon: '🐪' },
  'wellness': { id: 'wellness', label: 'Wellness & Hammam', dimension: 'activity-type', icon: '🧘' },
  'shopping': { id: 'shopping', label: 'Shopping & Souks', dimension: 'activity-type', icon: '🛍' },
  'workshop': { id: 'workshop', label: 'Artisan Workshop', dimension: 'activity-type', icon: '🎨' },
  'photography': { id: 'photography', label: 'Photography', dimension: 'activity-type', icon: '📸' },
  'adventure-sports': { id: 'adventure-sports', label: 'Adventure Sports', dimension: 'activity-type', icon: '🧗' },

  // --- Sport Facility & Experience Tags ---
  'gym-fitness': { id: 'gym-fitness', label: 'Gym & Fitness', dimension: 'activity-type', icon: '💪' },
  'running-outdoor': { id: 'running-outdoor', label: 'Running & Outdoor', dimension: 'activity-type', icon: '🏃' },
  'swimming-pool': { id: 'swimming-pool', label: 'Swimming Pool', dimension: 'activity-type', icon: '🏊' },
  'yoga-movement': { id: 'yoga-movement', label: 'Yoga & Movement', dimension: 'activity-type', icon: '🧘' },
  'combat-sports': { id: 'combat-sports', label: 'Combat Sports', dimension: 'activity-type', icon: '🥊' },
  'team-sports': { id: 'team-sports', label: 'Team Sports', dimension: 'activity-type', icon: '👥' },
  'surf-kitesurf': { id: 'surf-kitesurf', label: 'Surf & Kitesurf', dimension: 'activity-type', icon: '🏄' },
  'hiking-trek': { id: 'hiking-trek', label: 'Hiking & Trek', dimension: 'activity-type', icon: '🥾' },
  'climbing-adventure': { id: 'climbing-adventure', label: 'Climbing & Adventure', dimension: 'activity-type', icon: '🧗' },
  'desert-sport': { id: 'desert-sport', label: 'Desert Sport', dimension: 'activity-type', icon: '🐪' },
  'water-sport': { id: 'water-sport', label: 'Water Sports', dimension: 'activity-type', icon: '🚤' },
  'horse-ride': { id: 'horse-ride', label: 'Horseback Riding', dimension: 'activity-type', icon: '🐴' },
  'day-pass': { id: 'day-pass', label: 'Day Pass', dimension: 'scope', icon: '🎟️' },
  'women-only': { id: 'women-only', label: 'Women-Only Hours', dimension: 'scope', icon: '👩' },
  'group-classes': { id: 'group-classes', label: 'Group Classes', dimension: 'scope', icon: '👥' },

  // --- Specialty Tags for Mode Filtering & Micro Badges ---
  'photo-spot': { id: 'photo-spot', label: 'Photo Spot', dimension: 'vibe', icon: '📷' },
  'golden-hour': { id: 'golden-hour', label: 'Golden Hour Vantage', dimension: 'vibe', icon: '🌅' },
  'surf': { id: 'surf', label: 'Surf Break', dimension: 'activity-type', icon: '🏄' },
  'trekking': { id: 'trekking', label: 'Trekking & Alpine Trails', dimension: 'activity-type', icon: '🥾' },
  'step-free': { id: 'step-free', label: 'Step-Free & Accessible', dimension: 'scope', icon: '♿' },
  'family-rooms': { id: 'family-rooms', label: 'Family Rooms & Suites', dimension: 'stay-type', icon: '👨‍👩‍👧' },
  'coworking': { id: 'coworking', label: 'Fast Wi-Fi & Workspaces', dimension: 'vibe', icon: '💻' },
  'festival': { id: 'festival', label: 'Festival & Event Venue', dimension: 'vibe', icon: '🎭' },
  'fixed-price': { id: 'fixed-price', label: 'Fixed Price', dimension: 'shopping-target', icon: '🏷️' },
  'cooperative': { id: 'cooperative', label: 'Women Cooperative', dimension: 'shopping-target', icon: '🤝' },
  'artisanal': { id: 'artisanal', label: 'Artisanal Workshop', dimension: 'shopping-target', icon: '🎨' },
  'sunset-view': { id: 'sunset-view', label: 'Sunset & Panoramas', dimension: 'vibe', icon: '🌇' },
  'guide-required': { id: 'guide-required', label: 'Licensed Guide Required', dimension: 'scope', icon: '🪪' },
  'water-level': { id: 'water-level', label: 'Seasonal Water Flow', dimension: 'vibe', icon: '💧' },
  'port-express': { id: 'port-express', label: 'Cruise Port Express', dimension: 'scope', icon: '🚢' },
  'tripod-allowed': { id: 'tripod-allowed', label: 'Tripod Permitted', dimension: 'scope', icon: '🔭' },

  // --- Vibe ---
  'authentic': { id: 'authentic', label: 'Authentic Local', dimension: 'vibe', icon: '🧿' },
  'instagrammable': { id: 'instagrammable', label: 'Instagrammable', dimension: 'vibe', icon: '✨' },
  'off-the-beaten-path': { id: 'off-the-beaten-path', label: 'Hidden Gem', dimension: 'vibe', icon: '🗺️' },
  'romantic': { id: 'romantic', label: 'Romantic', dimension: 'vibe', icon: '🌙' },
  'family-friendly': { id: 'family-friendly', label: 'Family Friendly', dimension: 'vibe', icon: '👨‍👩‍👧' },
  'relaxed': { id: 'relaxed', label: 'Chill & Relaxed', dimension: 'vibe', icon: '😌' },
  'bustling': { id: 'bustling', label: 'Lively & Bustling', dimension: 'vibe', icon: '🎉' },
  'educational': { id: 'educational', label: 'Educational', dimension: 'vibe', icon: '🎓' },

  // --- Energy Level (Intensity) ---
  'relaxed-energy': { id: 'relaxed-energy', label: 'Relaxed', dimension: 'energy-level' },
  'moderate-energy': { id: 'moderate-energy', label: 'Moderate', dimension: 'energy-level' },
  'active-energy': { id: 'active-energy', label: 'Active', dimension: 'energy-level' },
  'intense-energy': { id: 'intense-energy', label: 'Intense', dimension: 'energy-level' },

  // --- Scope ---
  'private': { id: 'private', label: 'Private Group', dimension: 'scope', icon: '🔒' },
  'small-group': { id: 'small-group', label: 'Small Group', dimension: 'scope', icon: '👥' },
  'self-guided': { id: 'self-guided', label: 'Self-Guided', dimension: 'scope', icon: '🧭' },
  'guided': { id: 'guided', label: 'Guided Tour', dimension: 'scope', icon: '🗺️' },

  // --- Setting ---
  'medina': { id: 'medina', label: 'Medina / Old City', dimension: 'setting', icon: '🏘️' },
  'desert': { id: 'desert', label: 'Desert / Dunes', dimension: 'setting', icon: '🏜️' },
  'mountain': { id: 'mountain', label: 'Mountains', dimension: 'setting', icon: '⛰️' },
  'coastal': { id: 'coastal', label: 'Coastal / Beach', dimension: 'setting', icon: '🌊' },
  'urban': { id: 'urban', label: 'Modern City', dimension: 'setting', icon: '🏙️' },
  'nature': { id: 'nature', label: 'Nature / Rural', dimension: 'setting', icon: '🌿' },

  // --- Interests (Archetypes) ---
  'culture': { id: 'culture', label: 'Culture & History', dimension: 'interests', icon: '🏛' },
  'adventure': { id: 'adventure', label: 'Adventure & Sports', dimension: 'interests', icon: '🧗' },
  'food': { id: 'food', label: 'Food & Cooking', dimension: 'interests', icon: '🍲' },
  'social': { id: 'social', label: 'Social & Nightlife', dimension: 'interests', icon: '🎉' },
  'slow': { id: 'slow', label: 'Slow & Wellness', dimension: 'interests', icon: '🧘' },
  'shopping-interest': { id: 'shopping-interest', label: 'Shopping', dimension: 'interests', icon: '🛍' },
  'photography-interest': { id: 'photography-interest', label: 'Photography', dimension: 'interests', icon: '📷' },
  'heritage': { id: 'heritage', label: 'Heritage', dimension: 'interests', icon: '🏺' },
  'wilderness': { id: 'wilderness', label: 'Wilderness', dimension: 'interests', icon: '🏜️' },
  'immersion': { id: 'immersion', label: 'Cultural Immersion', dimension: 'interests', icon: '🎨' },

  // --- Meal Types ---
  'breakfast': { id: 'breakfast', label: 'Breakfast', dimension: 'meal-type', icon: '🍳' },
  'lunch': { id: 'lunch', label: 'Lunch', dimension: 'meal-type', icon: '☀️' },
  'dinner': { id: 'dinner', label: 'Dinner', dimension: 'meal-type', icon: '🌙' },
  'flexible': { id: 'flexible', label: 'Anytime', dimension: 'meal-type', icon: '🥨' },

  // --- Dietary & Policy ---
  'halal': { id: 'halal', label: 'Halal', dimension: 'dietary', icon: '🥩' },
  'vegetarian': { id: 'vegetarian', label: 'Vegetarian', dimension: 'dietary', icon: '🥬' },
  'alcohol': { id: 'alcohol', label: 'Serves Alcohol', dimension: 'dietary', icon: '🍷' },

  // --- Dining Mood ---
  'rooftop': { id: 'rooftop', label: 'Rooftop', dimension: 'vibe', icon: '🌇' },
  'street-food': { id: 'street-food', label: 'Street Food', dimension: 'vibe', icon: '🌮' },
  'fine-dining': { id: 'fine-dining', label: 'Fine Dining', dimension: 'vibe', icon: '✨' },
  'hole-in-wall': { id: 'hole-in-wall', label: 'Hidden Gem', dimension: 'vibe', icon: '🏠' },

  // --- Stay Types ---
  'riad': { id: 'riad', label: 'Heritage Riad', dimension: 'stay-type', icon: '🏺' },
  'hotel': { id: 'hotel', label: 'Modern Hotel', dimension: 'stay-type', icon: '🏨' },
  'desert-camp': { id: 'desert-camp', label: 'Desert Escape', dimension: 'stay-type', icon: '🏜️' },
  'kasbah': { id: 'kasbah', label: 'Ancient Kasbah', dimension: 'stay-type', icon: '🏰' },

  // --- Stay Priorities ---
  'pool': { id: 'pool', label: 'Swimming Pool', dimension: 'vibe', icon: '🏊' },
  'ac': { id: 'ac', label: 'Air Conditioning', dimension: 'vibe', icon: '❄️' },
  'quiet': { id: 'quiet', label: 'Peace & Quiet', dimension: 'vibe', icon: '🤫' },

  // --- Shopping Targets ---
  'souvenirs': { id: 'souvenirs', label: 'Souvenirs', dimension: 'shopping-target', icon: '🎁' },
  'leather': { id: 'leather', label: 'Leather', dimension: 'shopping-target', icon: '👜' },
  'ceramics': { id: 'ceramics', label: 'Ceramics', dimension: 'shopping-target', icon: '🏺' },
  'spices': { id: 'spices', label: 'Spices', dimension: 'shopping-target', icon: '🌶️' },

  // --- Gem Types ---
  'secret': { id: 'secret', label: 'Secret Spot', dimension: 'gem-type', icon: '📸' },
  'local': { id: 'local', label: 'Local Favorite', dimension: 'gem-type', icon: '🇲🇦' },
  'food-gem': { id: 'food-gem', label: 'Food Gem', dimension: 'gem-type', icon: '🍽️' },

  // --- Price Range ---
  'price-free': { id: 'price-free', label: 'Free', dimension: 'price-range' },
  'price-budget': { id: 'price-budget', label: 'Budget (<200 MAD)', dimension: 'price-range' },
  'price-mid': { id: 'price-mid', label: 'Mid-Range (200-600 MAD)', dimension: 'price-range' },
  'price-premium': { id: 'price-premium', label: 'Premium (>600 MAD)', dimension: 'price-range' },
};

export const TAG_GROUPS = Object.values(TAG_REGISTRY).reduce((acc, tag) => {
  if (!acc[tag.dimension]) {
    acc[tag.dimension] = [];
  }
  acc[tag.dimension].push(tag.id);
  return acc;
}, {} as Record<TagDimension, string[]>);
