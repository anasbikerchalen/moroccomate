export type TravelModeKey = 
  | 'explorer'
  | 'adventure'
  | 'wellness'
  | 'family'
  | 'foodie'
  | 'nomad'
  | 'photographer'
  | 'spirit';

export interface TravelModeConfig {
  key: TravelModeKey;
  label: string;
  icon: string;
  color: string;
  bgTint: string;
  darkBgTint: string;
  description: string;
  mergedPersonas: string[];
  priorityTools: string[]; // Tool IDs: e.g. 'transport', 'finder', 'savvy', 'planner', 'essentials', 'budget', 'language'
  autoFilterTags: string[];
}

export const TRAVEL_MODES: TravelModeConfig[] = [
  {
    key: 'explorer',
    label: 'Explorer',
    icon: '🧭',
    color: '#C9704C', // Terracotta
    bgTint: 'rgba(201, 112, 76, 0.08)',
    darkBgTint: 'rgba(201, 112, 76, 0.18)',
    description: 'City-break, Cultural Heritage, Historical sights & Medina discoveries',
    mergedPersonas: ['City-break', 'Cultural Heritage', 'Historical'],
    priorityTools: ['finder', 'planner', 'savvy', 'language'],
    autoFilterTags: ['cultural', 'historical', 'medina', 'must-see']
  },
  {
    key: 'adventure',
    label: 'Adventure',
    icon: '⛰️',
    color: '#4C7A5C', // Forest
    bgTint: 'rgba(76, 122, 92, 0.08)',
    darkBgTint: 'rgba(76, 122, 92, 0.18)',
    description: 'Mountain Hikers, Desert Explorers, Road Trippers & Surfers',
    mergedPersonas: ['Mountain Hikers', 'Desert Explorers', 'Road Trippers', 'Adventure', 'Surfers'],
    priorityTools: ['transport', 'planner', 'finder', 'savvy'],
    autoFilterTags: ['trekking', 'desert', 'surf', 'outdoor']
  },
  {
    key: 'wellness',
    label: 'Wellness',
    icon: '🌿',
    color: '#7A9C8A', // Sage
    bgTint: 'rgba(122, 156, 138, 0.08)',
    darkBgTint: 'rgba(122, 156, 138, 0.18)',
    description: 'Wellness retreats, Couples & Honeymooners, Hammams & Spas',
    mergedPersonas: ['Wellness', 'Couples & Honeymooners', 'Hammam Lovers'],
    priorityTools: ['finder', 'budget', 'planner', 'savvy'],
    autoFilterTags: ['wellness', 'hammam', 'relax', 'spa']
  },
  {
    key: 'family',
    label: 'Family',
    icon: '👨‍👩‍👧',
    color: '#4C7CA8', // Warm Blue
    bgTint: 'rgba(76, 124, 168, 0.08)',
    darkBgTint: 'rgba(76, 124, 168, 0.18)',
    description: 'Family-friendly activities, Step-free accessible travel & logistics',
    mergedPersonas: ['Family Travelers', 'Accessible Travelers'],
    priorityTools: ['transport', 'finder', 'budget', 'essentials'],
    autoFilterTags: ['family-friendly', 'step-free', 'kid-friendly']
  },
  {
    key: 'foodie',
    label: 'Foodie',
    icon: '🍴',
    color: '#C9A44C', // Amber
    bgTint: 'rgba(201, 164, 76, 0.08)',
    darkBgTint: 'rgba(201, 164, 76, 0.18)',
    description: 'Culinary tours, Street food markets, Artisanal souks & bargaining',
    mergedPersonas: ['Food Travelers', 'Shopping Travelers', 'Souk Enthusiasts'],
    priorityTools: ['finder', 'language', 'budget', 'savvy'],
    autoFilterTags: ['street-food', 'local-cuisine', 'souk', 'bargaining']
  },
  {
    key: 'nomad',
    label: 'Nomad',
    icon: '💻',
    color: '#5C6D8A', // Slate
    bgTint: 'rgba(92, 109, 138, 0.08)',
    darkBgTint: 'rgba(92, 109, 138, 0.18)',
    description: 'Digital Nomads, Long-stay remote workers, Coworking & Visa info',
    mergedPersonas: ['Digital Nomads', 'Business Travelers', 'Long-Stay Remote Workers'],
    priorityTools: ['essentials', 'transport', 'budget', 'savvy'],
    autoFilterTags: ['coworking', 'fast-wifi', 'long-stay', 'cafe']
  },
  {
    key: 'photographer',
    label: 'Photographer',
    icon: '📷',
    color: '#7C5C8A', // Violet
    bgTint: 'rgba(124, 92, 138, 0.08)',
    darkBgTint: 'rgba(124, 92, 138, 0.18)',
    description: 'Golden hour viewpoints, Architecture, Astrophotography & Festivals',
    mergedPersonas: ['Photography', 'Nature', 'Festival Seekers'],
    priorityTools: ['finder', 'planner', 'savvy'],
    autoFilterTags: ['photo-spot', 'golden-hour', 'scenic', 'viewpoint']
  },
  {
    key: 'spirit',
    label: 'Spirit',
    icon: '🕌',
    color: '#B8A882', // Sand
    bgTint: 'rgba(184, 168, 130, 0.08)',
    darkBgTint: 'rgba(184, 168, 130, 0.18)',
    description: 'Sacred architecture, Sacred music, Beach relaxation & Port express',
    mergedPersonas: ['Religious Travelers', 'Beach Vacationers', 'Cruise Travelers'],
    priorityTools: ['finder', 'language', 'savvy', 'transport'],
    autoFilterTags: ['sacred', 'historical', 'coastal', 'port-express']
  }
];

export function getTravelModeConfig(key: TravelModeKey | null): TravelModeConfig | null {
  if (!key) return null;
  return TRAVEL_MODES.find(m => m.key === key) || null;
}
