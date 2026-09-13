import { ArchetypeId } from '../../types';

export interface ArchetypeMetadata {
  name: string;
  description: string;
  emotionalCore: string;
  craves: string;
  headlines: Record<string, string>;
  visualRoute?: Array<{ city: string; icon: string; desc: string; }>;
  rituals: Record<string, {
    morning: { title: string; activity: string };
    afternoon: { title: string; activity: string };
    evening: { title: string; activity: string };
  }>;
}

export const ARCHETYPE_METADATA: Record<ArchetypeId, ArchetypeMetadata> = {
  'modern-nomad': {
    name: 'The Modern Nomad',
    description: 'Inspiration meets productivity',
    emotionalCore: 'Inspiration meets productivity',
    craves: 'Co-working riads, third-wave coffee, sunset rooftop sessions, creative hubs',
    headlines: {
      'essaouira': 'The Bohemian Refuge Where Atlantic Winds Rewrite Your Rhythm',
      'marrakech': 'The Red City Pulse: Where Ancient Soul Fuels Modern Creativity',
      'tangier': 'The Intercontinental Muse: Where Literati Ghosts Meet Startup Energy',
      'agadir': 'The Atlantic Flow: Modern Comfort Meets Endless Horizon',
      'casablanca': 'The White City Hustle: Art Deco Dreams and Economic Drive',
      'fes': 'The Intellectual Labyrinth: Ancient Wisdom for Modern Minds'
    },
    rituals: {
      'essaouira': {
        morning: { title: 'Your First Breath Here', activity: 'Sunrise surf at Sidi Kaouki, then mint tea at Taros Café\'s terrace overlooking the medina' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'Browse Cooperative Tamounte (women\'s argan collective), then laptop session at Beach & Friends with ocean views' },
        evening: { title: 'How the Day Dissolves', activity: 'Sunset at Skala de la Ville, dinner at Umia (grilled catch of the day), nightcap at Toro Seafood Bar\'s rooftop' }
      },
      'marrakech': {
        morning: { title: 'Your First Breath Here', activity: 'Early espresso at Bacha Coffee, then a quiet walk through the Secret Garden before the heat sets in' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'Co-working session at L\'Atelier 44 in Gueliz, followed by a visit to the YSL Museum for design inspiration' },
        evening: { title: 'How the Day Dissolves', activity: 'Rooftop cocktails at El Fenn watching the Koutoubia glow, followed by dinner at Plus 61' }
      }
    }
  },
  'history-weaver': {
    name: 'The History Weaver',
    description: 'Walking through living memory',
    emotionalCore: 'Walking through living memory',
    craves: 'Medina workshops, traditional hammams, elder-led tours, centuries-old recipes',
    headlines: {
      'fes': 'The Living Labyrinth Where Every Stone Whispers a Thousand-Year Story',
      'marrakech': 'The Imperial Heart: A Journey Through Saadian Splendor and Almoravid Roots',
      'meknes': 'The Silent Guardian of the Ismaili Dream',
      'rabat': 'The Andalusian Echo: Where Modern Monarchy Meets Almohad Might'
    },
    rituals: {
      'fes': {
        morning: { title: 'Your First Breath Here', activity: 'Dawn call to prayer echoing across the valley, then a guided walk through the 9,000 alleys of the Medina' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'Visit the Al-Attarine Madrasa to study Merenid geometry, then a workshop with a master zellige artisan' },
        evening: { title: 'How the Day Dissolves', activity: 'Traditional Fassi dinner in a restored 14th-century palace, followed by mint tea and storytelling' }
      }
    },
    visualRoute: [
      { city: 'Marrakech', icon: '🏛️', desc: 'The Imperial Heart' },
      { city: 'Atlas Mountains', icon: '⛰️', desc: 'Berber Villages' },
      { city: 'Sahara Desert', icon: '🏜️', desc: 'Dunes & Silence' },
      { city: 'Essaouira', icon: '🌊', desc: 'Atlantic Breeze' }
    ]
  },
  'sensory-seeker': {
    name: 'The Sensory Seeker',
    description: 'A feast for all senses',
    emotionalCore: 'A feast for all senses',
    craves: 'Spice souks, leather tanneries, rooftop tea ceremonies, textile ateliers',
    headlines: {
      'marrakech': 'The Crimson Symphony of Scent, Sound, and Sacred Geometry',
      'fes': 'The Textural Odyssey: From Indigo Vats to Cedar Carvings',
      'chefchaouen': 'The Blue Dream: An Immersion in Cerulean and Mountain Air'
    },
    rituals: {
      'marrakech': {
        morning: { title: 'Your First Breath Here', activity: 'The smell of fresh khobz and roasting coffee in the spice square as the market wakes' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'A deep dive into the tanneries followed by a traditional hammam scrub with eucalyptus beldi soap' },
        evening: { title: 'How the Day Dissolves', activity: 'The smoke and spectacle of Jemaa el-Fnaa night stalls, tasting snails, sheep\'s head, and spiced tea' }
      }
    }
  },
  'quiet-mystic': {
    name: 'The Quiet Mystic',
    description: 'Silence as a destination',
    emotionalCore: 'Silence as a destination',
    craves: 'Desert stillness, mountain monasteries, minimalist riads, dawn meditation spots',
    headlines: {
      'merzouga': 'The Golden Silence Where the Wind Writes Poetry on the Dunes',
      'chefchaouen': 'The Azure Sanctuary: Mountain Peaks and Meditative Alleys',
      'skoura': 'The Oasis of Infinite Palms and Crumbling Kasbahs'
    },
    rituals: {
      'merzouga': {
        morning: { title: 'Your First Breath Here', activity: 'Dawn meditation on the crest of Erg Chebbi, watching the sand turn from grey to gold' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'A slow camel trek into the deep desert, listening to the rhythmic crunch of sand' },
        evening: { title: 'How the Day Dissolves', activity: 'Stargazing by the campfire with Gnawa musicians, then the absolute silence of a desert night' }
      }
    }
  },
  'social-collector': {
    name: 'The Social Collector',
    description: 'Stories over stamps',
    emotionalCore: 'Stories over stamps',
    craves: 'Local family dinners, surf communities, artisan collaborations, night markets',
    headlines: {
      'tangier': 'The Crossroads of Conversations: Where Every Café Has a Legend',
      'marrakech': 'The Red City Social: From Communal Ovens to Contemporary Art Openings',
      'taghazout': 'The Surf Tribe Spirit: Sunset Drums and Shared Plates'
    },
    rituals: {
      'tangier': {
        morning: { title: 'Your First Breath Here', activity: 'Breakfast at Café de Paris, eavesdropping on four languages while watching the port' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'A visit to the American Legation followed by tea with the Librairie des Colonnes staff' },
        evening: { title: 'How the Day Dissolves', activity: 'Dinner at a local family-run "table d\'hôte" followed by live music at Cinema Rif' }
      }
    }
  },
  'luxury-curator': {
    name: 'The Luxury Curator',
    description: 'Exquisite by design',
    emotionalCore: 'Exquisite by design',
    craves: 'Private darbs, sommelier-led dinners, architectural stays, bespoke experiences',
    headlines: {
      'marrakech': 'The Palace Walk: A Curated Journey Through High-Craft and Haute Cuisine',
      'casablanca': 'The Modernist Manor: Private Collections and Oceanfront Elegance',
      'fes': 'The Merenid Splendor: Private Access to the Soul of Morocco'
    },
    rituals: {
      'marrakech': {
        morning: { title: 'Your First Breath Here', activity: 'Private sunrise balloon flight over the Atlas, followed by breakfast in the Agafay stone desert' },
        afternoon: { title: 'When You Hit Your Stride', activity: 'Bespoke shopping tour with a personal stylist, accessing private showrooms of master jewelers' },
        evening: { title: 'How the Day Dissolves', activity: 'Tasting menu at La Mamounia followed by a nightcap in the Churchill Bar' }
      }
    }
  }
};
