// src/data/plan/itineraries.ts

export interface WizardOption {
  id: string;
  label: string;
  icon: string; // Lucide icon name or emoji
  description?: string;
  weight: Record<string, number>; // Scoring weights for itineraries
}

export interface WizardQuestion {
  id: string;
  question: string;
  subtitle?: string;
  type: 'single' | 'multi' | 'visual-cards';
  options: WizardOption[];
}

export interface ActivityBlock {
  type: 'stay' | 'eat' | 'act' | 'transit';
  title: string;
  description: string;
  duration?: string;
  booking_needed?: boolean;
}

export interface RouteDay {
  day: number;
  city: string;
  nights: number;
  arrival_method?: string;
  morning: ActivityBlock;
  afternoon: ActivityBlock;
  evening: ActivityBlock;
  pro_tip?: string;
}

export interface ItineraryTemplate {
  id: string;
  name: string;
  tagline: string;
  duration: number; // in days
  ideal_for: string[];
  modeKey?: 'photographer' | 'foodie' | 'nomad' | 'adventure' | 'wellness' | 'family' | 'cruise' | 'accessibility';
  modeEmoji?: string;
  difficulty: 'easy' | 'moderate' | 'adventurous';
  budget_range: string;
  travelStyle?: 'relaxed' | 'historical' | 'adventure';
  budgetLevel?: 'budget' | 'mid-range' | 'luxury';
  route: RouteDay[];
  highlights: string[];
  logistics: {
    best_seasons: string[];
    total_driving_hours: number;
    suggested_transport: string[];
  };
}

export const WIZARD_QUESTIONS: WizardQuestion[] = [
  {
    id: 'duration',
    question: 'How many days is your adventure?',
    subtitle: 'Be realistic—rushing ruins the magic',
    type: 'visual-cards',
    options: [
      {
        id: '1-5',
        label: '1-5 Days',
        icon: 'Zap',
        description: 'Quick city immersion',
        weight: { 'marrakech-essaouira-express': 10, 'imperial-cities-classic': 1, 'grand-tour-deluxe': 0 }
      },
      {
        id: '6-10',
        label: '6-10 Days',
        icon: 'Compass',
        description: 'Classic Morocco circuit',
        weight: { 'marrakech-essaouira-express': 2, 'imperial-cities-classic': 10, 'grand-tour-deluxe': 3 }
      },
      {
        id: '10+',
        label: '10+ Days',
        icon: 'Map',
        description: 'The grand tour',
        weight: { 'marrakech-essaouira-express': 0, 'imperial-cities-classic': 2, 'grand-tour-deluxe': 10 }
      }
    ]
  },
  {
    id: 'pace',
    question: "What's your ideal pace?",
    subtitle: 'How you move matters as much as where you go',
    type: 'single',
    options: [
      {
        id: 'relaxed',
        label: 'Relaxed',
        icon: 'Coffee',
        description: 'Fewer cities, focus on immersion',
        weight: { 'marrakech-essaouira-express': 8, 'imperial-cities-classic': 4, 'grand-tour-deluxe': 2 }
      },
      {
        id: 'balanced',
        label: 'Balanced',
        icon: 'Footprints',
        description: 'Mix of exploration and relaxation',
        weight: { 'marrakech-essaouira-express': 4, 'imperial-cities-classic': 8, 'grand-tour-deluxe': 5 }
      },
      {
        id: 'fast',
        label: 'Fast-Paced',
        icon: 'Rocket',
        description: 'See as much as possible',
        weight: { 'marrakech-essaouira-express': 2, 'imperial-cities-classic': 5, 'grand-tour-deluxe': 8 }
      }
    ]
  },
  {
    id: 'vibe',
    question: 'What are you most excited for?',
    subtitle: 'Pick what matches your core interests',
    type: 'single',
    options: [
      {
        id: 'culture',
        label: 'Culture & Souks',
        icon: 'Castle',
        description: 'Maze-like souks, palaces, local arts',
        weight: { 'marrakech-essaouira-express': 4, 'imperial-cities-classic': 10, 'grand-tour-deluxe': 3 }
      },
      {
        id: 'coast',
        label: 'Coastal Vibe',
        icon: 'Waves',
        description: 'Surf, seafood, coastal vibes',
        weight: { 'marrakech-essaouira-express': 10, 'imperial-cities-classic': 1, 'grand-tour-deluxe': 4 }
      },
      {
        id: 'desert',
        label: 'Desert Dunes',
        icon: 'Sunrise',
        description: 'Dunes, camels, star-filled nights',
        weight: { 'marrakech-essaouira-express': 0, 'imperial-cities-classic': 2, 'grand-tour-deluxe': 10 }
      }
    ]
  }
];

export const ITINERARY_TEMPLATES: ItineraryTemplate[] = [
  {
    id: 'photographer-expedition',
    name: 'Golden Hour & Blue Medina Photo Expedition',
    tagline: 'Chasing optical light from Chefchaouen blue alleys to Sahara Milky Way dunes',
    duration: 5,
    modeKey: 'photographer',
    modeEmoji: '📷',
    ideal_for: ['photographers', 'creatives', 'golden-hour-seekers'],
    difficulty: 'moderate',
    budget_range: '$600-1200',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Dawn photography in empty blue-washed Chefchaouen alleys',
      'Golden hour angles over Chouara Tannery terraces in Fes',
      'Sahara desert Milky Way night astrophotography & dune shadows',
      'Ait Benhaddou ancient earthen Kasbah sunset silhouette'
    ],
    logistics: {
      best_seasons: ['Sep-Nov', 'Mar-May'],
      total_driving_hours: 12,
      suggested_transport: ['private driver', '4x4 for equipment']
    },
    route: [
      {
        day: 1,
        city: 'chefchaouen',
        nights: 2,
        morning: {
          type: 'act',
          title: '07:00 Blue Alley First Light Session',
          description: 'Capture empty cobalt archways and feline portraits before day trippers arrive',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Kasbah Courtyard & Textiles Focus',
          description: 'Detail shots of woven Rif carpets and mosaic fountains',
          duration: '2 hours'
        },
        evening: {
          type: 'act',
          title: 'Spanish Mosque Golden Hour Vantage',
          description: 'Panoramic sunset view looking down over the entire glowing blue valley',
          duration: '2 hours'
        },
        pro_tip: 'Bring 35mm or 50mm prime lenses for low-light narrow medina alleyways.'
      },
      {
        day: 2,
        city: 'chefchaouen',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Ras El Maa Waterfall Reflections',
          description: 'Long-exposure water shots and local women washing wool in traditional garments',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Riad Rooftop Framing',
          description: 'Shoot blue rooftops framed by green Rif mountain peaks'
        },
        evening: {
          type: 'eat',
          title: 'Plaza Uta el-Hammam Sunset Dining',
          description: 'Low-light ambient photography of plaza lamp lights'
        }
      },
      {
        day: 3,
        city: 'fes',
        nights: 1,
        arrival_method: 'Scenic mountain drive (3.5 hours)',
        morning: {
          type: 'transit',
          title: 'Drive through Rif Foothills',
          description: 'Photo stops at olive groves and mountain overlooks',
          duration: '3.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Chouara Tannery High Vantage',
          description: 'Overlooking the ancient dye vats during peak afternoon sunlight',
          duration: '2.5 hours'
        },
        evening: {
          type: 'act',
          title: 'Bab Bou Jeloud Blue Gate Twilight',
          description: 'Blue hour lighting of the intricate zellige mosaic entry gate'
        },
        pro_tip: 'A telephoto 70-200mm lens allows stunning candid portraits without invading personal space.'
      },
      {
        day: 4,
        city: 'merzouga',
        nights: 1,
        arrival_method: '4x4 Desert Transfer',
        morning: {
          type: 'transit',
          title: 'Middle Atlas & Ziz Valley Oasis',
          description: 'Dramatic landscape shots of palm canyons and cedar forests',
          duration: '6 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Erg Chebbi Sunset Dune Shadows',
          description: 'Low-angle golden sunlight casting razor-sharp ridge shadows across orange dunes',
          duration: '3 hours'
        },
        evening: {
          type: 'act',
          title: 'Sahara Astrophotography Bivouac',
          description: 'Zero light pollution Milky Way core photography over desert luxury camp',
          duration: '4 hours'
        }
      },
      {
        day: 5,
        city: 'merzouga',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Desert Sunrise Ridge Walk',
          description: 'Pastel pink dawn light rising over Algerian border horizon',
          duration: '2 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Departure or Continued Circuit',
          description: 'Pack up gear and head to Ouarzazate or Marrakech',
          duration: '4 hours'
        },
        evening: {
          type: 'act',
          title: 'Photo Backup & Review',
          description: 'Organize cards and review RAW captures'
        }
      }
    ]
  },
  {
    id: 'foodie-safari',
    name: 'Imperial Spice & Culinary Souks Safari',
    tagline: 'Savoring authentic tagines, pastilla masterclasses & port grill seafood',
    duration: 6,
    modeKey: 'foodie',
    modeEmoji: '🥘',
    ideal_for: ['foodies', 'culinary-lovers', 'market-explorers'],
    difficulty: 'easy',
    budget_range: '$500-1100',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Street food tasting crawl through Marrakech Rahba Kedima spice market',
      'Private hands-on Mechoui roasted lamb and pigeon pastilla cooking class',
      'Fes ancient bakeries and communal wood-fired oven (Ferran) visits',
      'Oceanfront fish selector grills directly at Essaouira harbor'
    ],
    logistics: {
      best_seasons: ['Year-round'],
      total_driving_hours: 8,
      suggested_transport: ['CTM bus', 'train', 'taxi']
    },
    route: [
      {
        day: 1,
        city: 'marrakech',
        nights: 2,
        morning: {
          type: 'act',
          title: 'Rahba Kedima Spice Souk Orientation',
          description: 'Taste ras el hanout blends, saffron threads, and wild orange blossom water',
          duration: '2.5 hours'
        },
        afternoon: {
          type: 'eat',
          title: 'Mechoui Alley Slow-Roasted Feast',
          description: 'Clay-pit roasted lamb shoulder rubbed with cumin and sea salt',
          duration: '1.5 hours'
        },
        evening: {
          type: 'eat',
          title: 'Jemaa el-Fnaa Food Stall Crawl',
          description: 'Harira soup, briwats, spicy lamb sausages, and fresh grilled sardines',
          duration: '3 hours'
        },
        pro_tip: 'Look for busy stalls with long local queues at Jemaa el-Fnaa for peak freshness.'
      },
      {
        day: 2,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Organic Farm & Tagine Masterclass',
          description: 'Pick fresh mint & coriander at an organic farm before slow-cooking tagines',
          duration: '4 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'eat',
          title: 'Artisanal Gazelle Horn Pastry Tasting',
          description: 'Almond meal, cardamom, and cinnamon pastries at historic Medina patisseries'
        },
        evening: {
          type: 'eat',
          title: 'Rooftop Fine Moroccan Fusion',
          description: 'Modern interpretations of couscous tfaya with caramelized onions and raisins',
          booking_needed: true
        }
      },
      {
        day: 3,
        city: 'fes',
        nights: 2,
        arrival_method: 'Train / Express Drive',
        morning: {
          type: 'transit',
          title: 'Transit to Fes',
          description: 'Relax on the scenic journey northward to the culinary capital',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Fes Medina Communal Oven Walk',
          description: 'Follow locals bringing dough to 500-year-old wood-fired neighborhood ovens',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Royale Pastilla Tasting Experience',
          description: 'Flaky filo pastry stuffed with shredded poultry, toasted almonds, and cinnamon'
        }
      },
      {
        day: 4,
        city: 'fes',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Olive & Souk Produce Discovery',
          description: 'Sample 12 varieties of cured olives, wild capers, and smen (aged clarified butter)',
          duration: '3 hours'
        },
        afternoon: {
          type: 'eat',
          title: 'Souk el-Atarine Spice Tasting',
          description: 'Learn ancient spice preservation techniques used by royal Fassi families'
        },
        evening: {
          type: 'eat',
          title: 'Palatial Riad Tasting Menu',
          description: '7-course traditional salad feast with cooked eggplant zaalouk and taktouka'
        }
      },
      {
        day: 5,
        city: 'essaouira',
        nights: 1,
        arrival_method: 'Coastal Express',
        morning: {
          type: 'transit',
          title: 'Journey to the Atlantic Coast',
          description: 'Drive past argan oil cooperatives to the breezy harbor town',
          duration: '3.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Essaouira Port Fish Auction & Grills',
          description: 'Handpick red snapper, calamari, and king prawns right off the wooden trawlers',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Sunset Seafood Tagine',
          description: 'Spiced fish tagine with preserved lemons and green olives at the water edge'
        }
      },
      {
        day: 6,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'eat',
          title: 'Argan Oil & Honey Crepe Breakfast',
          description: 'Fresh baghrir (thousand-hole pancakes) drenched in Amlou (argan, honey & almond dip)',
          duration: '1.5 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Return to Marrakech or Airport',
          description: 'Final spice shopping before departure',
          duration: '3 hours'
        },
        evening: {
          type: 'act',
          title: 'Departure',
          description: 'Pack spice jars safely in checked luggage'
        }
      }
    ]
  },
  {
    id: 'nomad-circuit',
    name: 'Coworking & Medina Coast Nomad Circuit',
    tagline: 'High-speed fiber Wi-Fi, oceanfront sunsets & digital nomad community',
    duration: 8,
    modeKey: 'nomad',
    modeEmoji: '💻',
    ideal_for: ['digital-nomads', 'remote-workers', 'extended-stay'],
    difficulty: 'easy',
    budget_range: '$700-1400',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Top-rated coworking cafes with 100+ Mbps fiber Wi-Fi and ergonomic seating',
      'Sunset surf & co-working community networking in Taghazout bay',
      'Peaceful riad laptop workspaces with fiber backup connections',
      'SIM card / 5G backup & 90-day visa extension logistics guidance'
    ],
    logistics: {
      best_seasons: ['Year-round'],
      total_driving_hours: 6,
      suggested_transport: ['CTM bus', 'shared grand taxi']
    },
    route: [
      {
        day: 1,
        city: 'taghazout',
        nights: 3,
        morning: {
          type: 'transit',
          title: 'Arrive Taghazout Hub',
          description: 'Check into coliving space or ocean view apartment with dedicated Wi-Fi',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Focus Sprint at Sundesk Coworking',
          description: 'Setup desk on the oceanfront terrace with 120 Mbps fiber connection',
          duration: '4 hours'
        },
        evening: {
          type: 'eat',
          title: 'Nomad Sunset Meetup',
          description: 'Networking dinner with international remote workers at Anchor Point'
        },
        pro_tip: 'Buy INWI or Maroc Telecom 5G e-SIM as a seamless backup hotspot for calls.'
      },
      {
        day: 2,
        city: 'taghazout',
        nights: 0,
        morning: {
          type: 'act',
          title: '07:30 Morning Surf / Yoga before Work',
          description: 'Catch clean Atlantic morning waves at Panorama Beach',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Deep Work Session & Coffee',
          description: 'High-focus work block with specialty espresso',
          duration: '5 hours'
        },
        evening: {
          type: 'eat',
          title: 'Aourir Banana Village Dinner',
          description: 'Tagine in the nearby palm oasis village'
        }
      },
      {
        day: 3,
        city: 'taghazout',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Client Video Call Block',
          description: 'Quiet booth reservation in coliving space',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Paradise Valley Afternoon Break',
          description: 'Dip in natural limestone rock pools 30 mins inland in Tamraght valley',
          duration: '3 hours'
        },
        evening: {
          type: 'eat',
          title: 'Rooftop BBQ & Sunset Beats',
          description: 'Community dinner overlooking the bay'
        }
      },
      {
        day: 4,
        city: 'essaouira',
        nights: 3,
        arrival_method: 'Coastal CTM bus (2.5 hours)',
        morning: {
          type: 'transit',
          title: 'Transit to Essaouira',
          description: 'Enjoy the ocean scenic highway northward',
          duration: '2.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Check-in Nomad Riad Workspace',
          description: 'Verify 80+ Mbps Wi-Fi in quiet interior courtyard',
          duration: '3 hours'
        },
        evening: {
          type: 'eat',
          title: 'Ramparts Sunset Craft Beer & Tapas',
          description: 'Relaxed evening at Taros rooftop bar'
        }
      },
      {
        day: 5,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Work Sprint at Le Studio Coworking',
          description: 'Ergonomic chairs, power strips and quiet call booths',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Medina Stroll & Thuya Wood Souks',
          description: 'Take a break walking through laidback car-free medina alleys',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Fresh Atlantic Harbor Grill Dinner',
          description: 'Grilled fish dinner with fellow remote creators'
        }
      },
      {
        day: 6,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Kitesurf / Wing Foil Afternoon Lesson',
          description: 'Take advantage of Essaouira famous trade winds',
          duration: '2.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Laptop Work Session at Oceanfront Cafe',
          description: 'Work with sea breeze views',
          duration: '4 hours'
        },
        evening: {
          type: 'eat',
          title: 'Live Gnaoua Music Jam',
          description: 'Acoustic evening at local tea house'
        }
      },
      {
        day: 7,
        city: 'marrakech',
        nights: 2,
        arrival_method: 'Private or Bus transfer',
        morning: {
          type: 'transit',
          title: 'Transfer to Marrakech',
          description: '3 hours highway ride into the red city',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Work from L\'Blida Coworking Space',
          description: 'Chic medina workspace with high speed fiber',
          duration: '4 hours'
        },
        evening: {
          type: 'eat',
          title: 'Gueliz Modern Bistro Dinner',
          description: 'Explore Ville Nouvelle modern restaurants'
        }
      },
      {
        day: 8,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Final Work Sprint & Passport Check',
          description: 'Wrap up remote projects before airport departure',
          duration: '3 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Departure or Ongoing Stay',
          description: 'Airport transfer'
        },
        evening: {
          type: 'act',
          title: 'End of Circuit',
          description: 'Extended stays can renew visa at 90 days'
        }
      }
    ]
  },
  {
    id: 'adventure-alpine-desert',
    name: 'High Atlas Alpine & Sahara Dunes Expedition',
    tagline: 'Summiting High Atlas passes, gorge climbing & sandboarding big dunes',
    duration: 7,
    modeKey: 'adventure',
    modeEmoji: '🥾',
    ideal_for: ['adventurers', 'trekkers', 'hikers', 'outdoor-enthusiasts'],
    difficulty: 'adventurous',
    budget_range: '$650-1300',
    travelStyle: 'adventure',
    budgetLevel: 'mid-range',
    highlights: [
      'High Atlas mountain trekking through Berber terraced stone villages in Imlil valley',
      'Panoramic 2,260m Tizi n\'Tichka mountain pass crossing in 4x4',
      'Sheer 300m rock face gorge walk at Todra Gorge',
      'Sandboarding Erg Chebbi dunes and overnight bivouac deep in desert'
    ],
    logistics: {
      best_seasons: ['Sep-May (avoid mid-summer heat)'],
      total_driving_hours: 18,
      suggested_transport: ['4x4 Vehicle', 'Licensed mountain guide']
    },
    route: [
      {
        day: 1,
        city: 'imlil_toubkal',
        nights: 2,
        morning: {
          type: 'transit',
          title: 'Marrakech to Imlil Valley Base',
          description: 'Ascend into the High Atlas mountain foothills (1,740m)',
          duration: '1.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Aroumd Village Altitude Warm-Up Trek',
          description: 'Hike along walnut trees and stone irrigation channels to mountain guesthouse',
          duration: '3.5 hours'
        },
        evening: {
          type: 'eat',
          title: 'Hearty Berber Mountain Tagine',
          description: 'Warm lamb stew with dry figs and walnut cake around open hearth'
        },
        pro_tip: 'Sturdy ankle-support hiking boots are mandatory for loose slate trails.'
      },
      {
        day: 2,
        city: 'imlil_toubkal',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Tizi Mzik Pass Alpine Trek (2,489m)',
          description: 'Guided steep ascent rewarding trekkers with views of Mount Toubkal summit (4,167m)',
          duration: '5 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'eat',
          title: 'Picnic Lunch at Mountain Saddle',
          description: 'Fresh bread, canned sardines, goat cheese and sweet mint tea at altitude',
          duration: '1.5 hours'
        },
        evening: {
          type: 'act',
          title: 'Rest & Sauna in Alpine Lodge',
          description: 'Soothe tired legs overlooking the valley'
        }
      },
      {
        day: 3,
        city: 'ouarzazate',
        nights: 1,
        arrival_method: 'Mountain Pass Drive',
        morning: {
          type: 'transit',
          title: 'Cross Tizi n\'Tichka Pass (2,260m)',
          description: 'Hairpin bends and dramatic cliffside views crossing the High Atlas spine',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Ait Benhaddou Ksar Exploration',
          description: 'Scramble up mud-brick towers of UNESCO-listed fortress city',
          duration: '2.5 hours'
        },
        evening: {
          type: 'eat',
          title: 'Ouarzazate Kasbah Dinner',
          description: 'Dine inside converted earth fortress'
        }
      },
      {
        day: 4,
        city: 'todra_dades',
        nights: 1,
        morning: {
          type: 'transit',
          title: 'Drive through Valley of the Roses',
          description: 'Pass red rock formations and rose distilleries',
          duration: '2.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Todra Gorge Sheer Wall Walk',
          description: 'Walk through 300m vertical limestone canyon walls carved by glacier streams',
          duration: '2 hours'
        },
        evening: {
          type: 'stay',
          title: 'Canyon View Guesthouse Stay',
          description: 'Sleep surrounded by towering red cliffs'
        }
      },
      {
        day: 5,
        city: 'merzouga',
        nights: 2,
        arrival_method: 'Desert Highway 4x4',
        morning: {
          type: 'transit',
          title: 'Journey to the Erg Chebbi Dunes',
          description: 'Watch green palm valleys transform into vast golden sand dunes',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Sandboarding High Dunes',
          description: 'Hike to top of 150m dune and sandboard down the steep faces',
          duration: '2 hours'
        },
        evening: {
          type: 'act',
          title: 'Sunset Camel Trek to Bivouac Camp',
          description: 'Ride into the deep dunes as the sky turns violent orange and purple',
          booking_needed: true
        }
      },
      {
        day: 6,
        city: 'merzouga',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Sahara Sunrise Run & Breakfast',
          description: 'Hike dune crests at dawn, return to camp for fresh coffee',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Quad Bike Desert Circuit',
          description: 'Adrenaline 4x4 or quad ride across gravel hamada plains',
          duration: '2.5 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Nomad Campfire Drums & Stargazing',
          description: 'Traditional Gnawa drumming under the Sahara night sky'
        }
      },
      {
        day: 7,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'transit',
          title: 'Return Journey across High Atlas',
          description: 'Scenic return transport back to Marrakech',
          duration: '8 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Arrive Marrakech',
          description: 'Unpack gear and relax after an epic adventure'
        },
        evening: {
          type: 'eat',
          title: 'Celebratory Victory Dinner',
          description: 'Toast to the High Atlas and Sahara summit expedition'
        }
      }
    ]
  },
  {
    id: 'family-wonders',
    name: 'Moroccan Wonders Family Odyssey',
    tagline: 'Safe camel rides, movie studio magic, calm beaches & family riad suites',
    duration: 6,
    modeKey: 'family',
    modeEmoji: '👨‍👩‍👧',
    ideal_for: ['families', 'kids', 'parents', 'first-time-families'],
    difficulty: 'easy',
    budget_range: '$700-1500',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Kid-friendly gentle camel rides along Palmeraie or Essaouira beach',
      'Atlas Film Studios tour in Ouarzazate featuring Gladiator & Star Wars props',
      'Calm shallow waters and pedestrian ramparts in Essaouira',
      'Spacious family riad suites with courtyard plunge pools'
    ],
    logistics: {
      best_seasons: ['Oct-May'],
      total_driving_hours: 10,
      suggested_transport: ['Private van with child seats']
    },
    route: [
      {
        day: 1,
        city: 'marrakech',
        nights: 2,
        morning: {
          type: 'act',
          title: 'Smooth Riad Check-in & Courtyard Pool',
          description: 'Kids cool off in private plunge pool after flight',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Majorelle Garden Colorful Walk',
          description: 'Easy paved pathways, giant cacti, and shade gardens suitable for strollers',
          duration: '2 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Rooftop Family Dinner',
          description: 'Kid-friendly mild chicken lemon tagine and fresh orange juice',
          booking_needed: true
        },
        pro_tip: 'Ask riads for ground-floor family suites to avoid narrow step staircases.'
      },
      {
        day: 2,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Palmeraie Gentle Camel Ride',
          description: 'Safe guided camel rides through palm groves with kid safety helmets',
          duration: '2 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'act',
          title: 'Anima Andre Heller Magical Sculptures',
          description: 'Whimsical garden filled with colorful hidden art pieces kids love exploring',
          duration: '2.5 hours'
        },
        evening: {
          type: 'eat',
          title: 'Jemaa el-Fnaa Storytellers & Juices',
          description: 'Watch jugglers from a safe rooftop terrace while sipping fresh juice'
        }
      },
      {
        day: 3,
        city: 'ouarzazate',
        nights: 2,
        arrival_method: 'Comfort Van via High Atlas',
        morning: {
          type: 'transit',
          title: 'Scenic Family Van Drive',
          description: 'Frequent scenic stops for snacks and photo ops crossing mountains',
          duration: '3.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Atlas Film Studio Tour',
          description: 'Explore real movie sets from Aladdin, Gladiator and Cleopatra',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Kasbah Family Dinner',
          description: 'Mild couscous and fresh fruit platter'
        }
      },
      {
        day: 4,
        city: 'ouarzazate',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Fint Oasis Palm Stream Stroll',
          description: 'Walk through shallow freshwater streams under date palms',
          duration: '2.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Pottery Workshop for Kids',
          description: 'Hands-on clay molding class led by local Berber artisans',
          duration: '2 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Poolside Family BBQ',
          description: 'Relaxed hotel poolside evening'
        }
      },
      {
        day: 5,
        city: 'essaouira',
        nights: 1,
        arrival_method: 'Coastal Highway Drive',
        morning: {
          type: 'transit',
          title: 'Drive to Coastal Essaouira',
          description: 'Pass argan trees where kids can spot goats climbing branches!',
          duration: '3.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Essaouira Ramparts & Game of Thrones Fort',
          description: 'Run along wide stone cannons overlook with zero car traffic',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Port Grill Fish & Chips / Grilled Sole',
          description: 'Fresh non-spiced grilled fish family dinner'
        }
      },
      {
        day: 6,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Shallow Waters Beach Stroll & Sandcastles',
          description: 'Wide sandy beach perfect for soccer and running',
          duration: '2 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Return Transfer to Airport',
          description: 'Head home with unforgettable family memories',
          duration: '3 hours'
        },
        evening: {
          type: 'act',
          title: 'Departure',
          description: 'Safe flight back home'
        }
      }
    ]
  },
  {
    id: 'wellness-sanctuary',
    name: 'Sanctuary Spa & Coastal Hammam Escape',
    tagline: 'Organic eucalyptus black soap, herbal argan treatments & serene riad gardens',
    duration: 5,
    modeKey: 'wellness',
    modeEmoji: '🧘',
    ideal_for: ['wellness', 'spa-seekers', 'relaxation', 'couples'],
    difficulty: 'easy',
    budget_range: '$800-1800',
    travelStyle: 'relaxed',
    budgetLevel: 'luxury',
    highlights: [
      'Authentic steam hammam ritual with savron noir black soap and kessa glove scrub',
      'Organic argan oil body massage infused with Atlas cedarwood & verbena',
      'Yoga at dawn overlooking serene coastal ocean waves',
      'Detox herbal infusions & fresh pomegranate mint teas'
    ],
    logistics: {
      best_seasons: ['Year-round'],
      total_driving_hours: 6,
      suggested_transport: ['Private luxury chauffeur']
    },
    route: [
      {
        day: 1,
        city: 'marrakech',
        nights: 3,
        morning: {
          type: 'act',
          title: 'Arrive Luxury Sanctuary Riad',
          description: 'Welcome rosewater refresh and herbal mint infusion',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Royal Hammam & Black Soap Scrub Ritual',
          description: 'Warm marble room steam, eucalyptus black soap, and full-body kessa exfoliation',
          duration: '2.5 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Organic Courtyard Dining',
          description: 'Light vegetable couscous with saffron broth and almond milk pudding'
        },
        pro_tip: 'Drink plenty of mineral water before and after hammam sessions to stay hydrated.'
      },
      {
        day: 2,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Rooftop Dawn Meditation & Yoga',
          description: 'Gentle stretching as the morning call to prayer echoes over red roofs',
          duration: '1.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Argan & Atlas Cedarwood Deep Tissue Massage',
          description: 'Warm organic argan oil massage targeting neck and spinal tension',
          duration: '2 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Farm-to-Table Dinner at Le Jardin',
          description: 'Dine under lush banana leaves and fountain waters',
          booking_needed: true
        }
      },
      {
        day: 3,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Secret Garden Botanical Walk',
          description: 'Quiet stroll through restored Islamic hydraulic gardens in the Medina',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Herbal Remedies & Botanical Masterclass',
          description: 'Learn ancient medicinal uses of nigella seeds, orange blossom, and rose',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Detox Soups & Grilled Vegetables',
          description: 'Light evening meal at quiet rooftop sanctuary'
        }
      },
      {
        day: 4,
        city: 'essaouira',
        nights: 1,
        arrival_method: 'Luxury Chauffeur',
        morning: {
          type: 'transit',
          title: 'Transfer to Atlantic Coast Spa Riad',
          description: 'Scenic drive with sea breeze arrival',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Ocean View Thalassotherapy / Sea Salt Scrub',
          description: 'Ocean sea salt scrub enriched with seaweed and citrus oils',
          duration: '2 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Seaside Sunset Grill',
          description: 'Fresh wild-caught sea bass cooked with herbs'
        }
      },
      {
        day: 5,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Ocean Beach Mindful Walk',
          description: 'Barefoot sand walk listening to Atlantic waves',
          duration: '1.5 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Transfer to Airport',
          description: 'Leave refreshed, rejuvenated, and glowing',
          duration: '3 hours'
        },
        evening: {
          type: 'act',
          title: 'Departure',
          description: 'Return home feeling completely restored'
        }
      }
    ]
  },
  {
    id: 'cruise-express',
    name: 'Tangier & Casablanca Shore Express Circuit',
    tagline: 'Guaranteed timely port return, Hassan II Mosque & Atlantic Kasbah vistas',
    duration: 2,
    modeKey: 'cruise',
    modeEmoji: '🚢',
    ideal_for: ['cruise-passengers', 'shore-excursion', 'express-tourists'],
    difficulty: 'easy',
    budget_range: '$200-400',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Port terminal direct greeting with guaranteed back-to-ship buffer time',
      'Hassan II Mosque oceanfront tour (Casablanca Port Express)',
      'Kasbah of the Udayas & Hercules Caves (Tangier Ville Port Express)',
      'Fixed-price curated souvenir stops with zero high-pressure haggling'
    ],
    logistics: {
      best_seasons: ['Year-round'],
      total_driving_hours: 3,
      suggested_transport: ['Port Express Shuttle', 'Private Van']
    },
    route: [
      {
        day: 1,
        city: 'tangier',
        nights: 1,
        morning: {
          type: 'act',
          title: 'Tangier Ville Port Direct Pickup (08:30)',
          description: 'Driver greets at ship gangway; 15 min drive to Cap Spartel lighthouse',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Hercules Caves & Kasbah Viewpoint',
          description: 'Africa map shape cave window + tea at Cafe Hafa overlooking Strait of Gibraltar',
          duration: '3 hours'
        },
        evening: {
          type: 'eat',
          title: 'Medina Seafood Lunch & Express Port Return (16:00)',
          description: 'Guaranteed return to ship 2 hours prior to all-aboard',
          duration: '2 hours'
        },
        pro_tip: 'Tangier Ville port terminal is right next to the Medina, making walking very easy.'
      },
      {
        day: 2,
        city: 'casablanca',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Casablanca Port Terminal Pickup (08:30)',
          description: 'Express 10-minute transfer directly to Hassan II Mosque grand plaza',
          duration: '2.5 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'act',
          title: 'Habous Quarter & Art Deco Boulevard',
          description: 'Fixed-price pastry shopping at Bennis Habous bakery + olive souk',
          duration: '2.5 hours'
        },
        evening: {
          type: 'transit',
          title: 'Prompt Ship Dropoff (15:30)',
          description: 'Safely back at cruise berth with ample time before departure'
        }
      }
    ]
  },
  {
    id: 'accessible-barrier-free',
    name: 'Step-Free Imperial & Coastal Accessible Trail',
    tagline: 'Ramped historical entries, accessible transport & flat medina promenades',
    duration: 5,
    modeKey: 'accessibility',
    modeEmoji: '♿',
    ideal_for: ['wheelchair-users', 'limited-mobility', 'accessible-travelers'],
    difficulty: 'easy',
    budget_range: '$600-1400',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Verified step-free entry routes to Hassan II Mosque, Chellah & Majorelle',
      'Accessible wheelchair-adapted van transfers with ramp / lift',
      'Ground-floor accessible riad suites with wide roll-in showers & grab bars',
      'Paved flat promenades in Rabat & Essaouira with zero cobblestones'
    ],
    logistics: {
      best_seasons: ['Oct-May'],
      total_driving_hours: 6,
      suggested_transport: ['Wheelchair-accessible van with ramp']
    },
    route: [
      {
        day: 1,
        city: 'rabat',
        nights: 2,
        morning: {
          type: 'act',
          title: 'Arrive Rabat & Step-Free Hotel Check-in',
          description: 'Check into accessible room with wide doorway and roll-in shower',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Hassan Tower Plaza & Royal Mausoleum',
          description: 'Smooth marble paved plaza with wide accessible ramps throughout',
          duration: '2.5 hours'
        },
        evening: {
          type: 'eat',
          title: 'Ville Nouvelle Accessible Dining',
          description: 'Flat street access restaurant in modern Agdal district'
        },
        pro_tip: 'Rabat has the smoothest paved sidewalks and accessible tram system in Morocco.'
      },
      {
        day: 2,
        city: 'rabat',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Chellah Ancient Garden Trail',
          description: 'Paved golf-cart path or wide gently sloping ramp down to Roman ruin gardens',
          duration: '2.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Mohammed VI Contemporary Art Museum',
          description: 'Fully accessible elevators, wide galleries, and barrier-free restrooms',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Bouregreg Marina Promenade Dinner',
          description: 'Flat paved waterfront dining looking across to Salé fort'
        }
      },
      {
        day: 3,
        city: 'casablanca',
        nights: 1,
        arrival_method: 'Accessible Express Van / Train',
        morning: {
          type: 'transit',
          title: 'Smooth Transfer to Casablanca',
          description: '45-minute ride on accessible Al Boraq high speed train or van',
          duration: '1 hour'
        },
        afternoon: {
          type: 'act',
          title: 'Hassan II Mosque Fully Accessible Guided Tour',
          description: 'Elevator access down to ablution halls, step-free main prayer hall ramps',
          duration: '2 hours',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'La Corniche Oceanfront Dinner',
          description: 'Paved ocean promenade dining with easy dropoff'
        }
      },
      {
        day: 4,
        city: 'essaouira',
        nights: 1,
        arrival_method: 'Accessible Van Drive',
        morning: {
          type: 'transit',
          title: 'Coastal Drive to Essaouira',
          description: 'Comfortable transfer with accessible rest stops along highway',
          duration: '3.5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Essaouira Ramparts & Skala Flat Promenade',
          description: 'Flat stone rampart promenade with wide smooth paths and sea views',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Accessible Port Grill Dining',
          description: 'Street-level table seating with fresh grilled catch'
        }
      },
      {
        day: 5,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Paved Medina Main Street Shopping',
          description: 'Wide flat pedestrian thoroughfares with level shop entrances',
          duration: '2 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Return Transfer to Airport',
          description: 'Assistive boarding and airport transfer'
        },
        evening: {
          type: 'act',
          title: 'Departure',
          description: 'Safe departure home'
        }
      }
    ]
  },
  {
    id: 'marrakech-essaouira-express',
    name: 'The Marrakech-Essaouira Express',
    tagline: 'Medina magic meets Atlantic breeze',
    duration: 4,
    ideal_for: ['weekend', 'couple', 'first-timers'],
    difficulty: 'easy',
    budget_range: '$400-800',
    travelStyle: 'relaxed',
    budgetLevel: 'mid-range',
    highlights: [
      'Jemaa el-Fnaa night market',
      'Bahia Palace & secret gardens',
      'Coastal escape in Essaouira',
      'Fresh seafood at the port'
    ],
    logistics: {
      best_seasons: ['Sep-Nov', 'Mar-May'],
      total_driving_hours: 6,
      suggested_transport: ['CTM bus', 'private transfer', 'rental car']
    },
    route: [
      {
        day: 1,
        city: 'marrakech',
        nights: 2,
        morning: {
          type: 'act',
          title: 'Arrive & Orient',
          description: 'Airport → Riad check-in, light stroll in Medina',
          duration: '3 hours'
        },
        afternoon: {
          type: 'eat',
          title: 'Rooftop Lunch',
          description: 'Nomad or Café des Épices with Medina views',
          booking_needed: true
        },
        evening: {
          type: 'act',
          title: 'Jemaa el-Fnaa Immersion',
          description: 'Food stalls, storytellers, snake charmers—pure chaos',
          duration: '2-3 hours'
        },
        pro_tip: 'Save serious shopping for day 2—just explore tonight'
      },
      {
        day: 2,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Palace Circuit',
          description: 'Bahia Palace (8am) → El Badi Ruins → Saadian Tombs',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Majorelle Garden + YSL Museum',
          description: 'Cool off in the blue garden, browse fashion history',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Farewell Dinner',
          description: 'Splurge at Le Jardin or Dar Yacout',
          booking_needed: true
        },
        pro_tip: 'Book Majorelle tickets online—lines get brutal after 10am'
      },
      {
        day: 3,
        city: 'essaouira',
        nights: 1,
        arrival_method: 'CTM bus (3hrs) or private transfer',
        morning: {
          type: 'transit',
          title: 'Coastal Drive',
          description: 'Depart Marrakech 9am → arrive Essaouira 12pm',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Medina Wander + Ramparts',
          description: 'Walk the old Portuguese walls, blue boat harbor',
          duration: '2-3 hours'
        },
        evening: {
          type: 'eat',
          title: 'Fresh Catch at the Port',
          description: 'Pick your fish, grilled on the spot'
        },
        pro_tip: 'Wind picks up in afternoon—bring a light jacket year-round'
      },
      {
        day: 4,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Beach Morning',
          description: 'Surf lesson or horseback ride on the sand',
          booking_needed: true
        },
        afternoon: {
          type: 'transit',
          title: 'Return to Marrakech',
          description: 'Bus or transfer back, evening flight home',
          duration: '3 hours'
        },
        evening: {
          type: 'transit',
          title: 'Departure',
          description: 'Head to airport or extend Marrakech stay',
          duration: '1 hour'
        }
      }
    ]
  },
  {
    id: 'imperial-cities-classic',
    name: 'The Imperial Cities Classic',
    tagline: 'Four royal capitals, one unforgettable week',
    duration: 7,
    ideal_for: ['week', 'balanced', 'culture', 'first-timers'],
    difficulty: 'moderate',
    budget_range: '$2000-4000',
    travelStyle: 'adventure',
    budgetLevel: 'luxury',
    highlights: [
      'Fes medina—largest car-free zone on Earth',
      'Blue pearl of Chefchaouen',
      'Roman ruins of Volubilis',
      'Marrakech finale'
    ],
    logistics: {
      best_seasons: ['Year-round (avoid Jul-Aug heat)'],
      total_driving_hours: 14,
      suggested_transport: ['rental car', 'private driver', 'trains + taxis']
    },
    route: [
      {
        day: 1,
        city: 'casablanca',
        nights: 1,
        morning: {
          type: 'act',
          title: 'Arrive Casablanca',
          description: 'Airport → hotel, rest after flight',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Hassan II Mosque',
          description: 'Guided tour of the oceanfront masterpiece',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Corniche Dinner',
          description: 'Seafood along the Atlantic promenade'
        },
        pro_tip: 'Casa is a business city—see the mosque and move on'
      },
      {
        day: 2,
        city: 'rabat',
        nights: 1,
        arrival_method: 'Train (1hr) or drive',
        morning: {
          type: 'transit',
          title: 'Casa → Rabat',
          description: 'Quick train ride to the capital',
          duration: '1 hour'
        },
        afternoon: {
          type: 'act',
          title: 'Capital Highlights',
          description: 'Kasbah of the Udayas, Hassan Tower, Royal Palace',
          duration: '4 hours'
        },
        evening: {
          type: 'eat',
          title: 'Ville Nouvelle Dining',
          description: 'Modern Moroccan fusion in Agdal district'
        }
      },
      {
        day: 3,
        city: 'chefchaouen',
        nights: 1,
        arrival_method: 'Drive (4hrs via scenic route)',
        morning: {
          type: 'transit',
          title: 'Drive to the Blue Pearl',
          description: 'Rif Mountains scenery, arrive by lunch',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Blue Medina Wander',
          description: 'Get lost in the blue-washed alleys—every corner is Instagram gold',
          duration: '3 hours'
        },
        evening: {
          type: 'eat',
          title: 'Rooftop Dinner',
          description: 'Mountain views, tagine, mint tea'
        },
        pro_tip: 'Early morning (7-8am) = empty streets, best photos'
      },
      {
        day: 4,
        city: 'fes',
        nights: 2,
        arrival_method: 'Drive (4hrs) via Volubilis',
        morning: {
          type: 'act',
          title: 'Volubilis Roman Ruins',
          description: 'Stop at ancient mosaics en route to Fes',
          duration: '2 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Arrive Fes',
          description: 'Check into medina riad, orientation walk',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Traditional Feast',
          description: 'Pastilla, tagine, Fassi specialties',
          booking_needed: true
        }
      },
      {
        day: 5,
        city: 'fes',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Fes Medina Deep Dive',
          description: 'Hire a local guide—you WILL get lost. Tanneries, Al Quaraouiyine, artisan workshops',
          duration: '5 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'act',
          title: 'Rooftop Recovery',
          description: 'Sensory overload break—rest at riad, process the chaos',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Street Food Tour',
          description: 'Briwat, harira, mechoui—taste the real Fes'
        },
        pro_tip: 'Fes is intense—allow downtime or you will burn out'
      },
      {
        day: 6,
        city: 'marrakech',
        nights: 1,
        arrival_method: 'Train (7hrs) or flight (1hr)',
        morning: {
          type: 'transit',
          title: 'Fes → Marrakech',
          description: 'Train through Middle Atlas or short flight',
          duration: '6-7 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Arrive & Chill',
          description: 'Riad check-in, hammam spa treatment',
          booking_needed: true
        },
        evening: {
          type: 'act',
          title: 'Jemaa el-Fnaa at Night',
          description: 'The mother of all markets—sensory overload part 2',
          duration: '2 hours'
        }
      },
      {
        day: 7,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Majorelle Garden + Souks',
          description: 'Early garden visit → shopping in the souks',
          duration: '4 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'eat',
          title: 'Farewell Lunch',
          description: 'Le Jardin or Nomad—reflect on the journey',
          booking_needed: true
        },
        evening: {
          type: 'transit',
          title: 'Departure',
          description: 'Airport transfer, evening flight',
          duration: '1 hour'
        },
        pro_tip: 'Leave buffer time—Marrakech traffic can be chaotic'
      }
    ]
  },
  {
    id: 'grand-tour-deluxe',
    name: 'The Grand Morocco Odyssey',
    tagline: 'From Atlantic waves to Sahara dunes—the complete experience',
    duration: 14,
    ideal_for: ['extended', 'immersive', 'adventure', 'all vibes'],
    difficulty: 'adventurous',
    budget_range: '$2000-4000',
    travelStyle: 'adventure',
    budgetLevel: 'luxury',
    highlights: [
      'Sleep under stars in Sahara',
      'Hike Atlas mountain villages',
      'Surf the Atlantic coast',
      'All 4 Imperial Cities',
      'Dades Valley & Todra Gorge'
    ],
    logistics: {
      best_seasons: ['Sep-Oct', 'Apr-May'],
      total_driving_hours: 35,
      suggested_transport: ['rental 4x4', 'private driver']
    },
    route: [
      {
        day: 1,
        city: 'casablanca',
        nights: 1,
        morning: {
          type: 'act',
          title: 'Arrive Casablanca',
          description: 'Airport → hotel check-in',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Hassan II Mosque',
          description: 'Guided tour',
          booking_needed: true
        },
        evening: {
          type: 'eat',
          title: 'Corniche Dinner',
          description: 'Seafood dinner'
        }
      },
      {
        day: 2,
        city: 'chefchaouen',
        nights: 1,
        morning: {
          type: 'transit',
          title: 'Casablanca → Chefchaouen',
          description: 'Scenic drive to the Blue Pearl',
          duration: '5 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Blue Medina Explore',
          description: 'Wander blue streets'
        },
        evening: {
          type: 'eat',
          title: 'Tagine in Medina',
          description: 'Local northern Moroccan dinner'
        }
      },
      {
        day: 3,
        city: 'fes',
        nights: 2,
        morning: {
          type: 'transit',
          title: 'Drive via Volubilis',
          description: 'Stop at Volubilis Roman ruins en route',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Check-in Fes Riad',
          description: 'Rest and orient in Fes'
        },
        evening: {
          type: 'eat',
          title: 'Traditional Fassi Dinner',
          description: 'Pastilla and local tagines'
        }
      },
      {
        day: 4,
        city: 'fes',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Medina Guided Tour',
          description: 'Explore tanneries, universities, and schools',
          duration: '5 hours',
          booking_needed: true
        },
        afternoon: {
          type: 'act',
          title: 'Rooftop Break',
          description: 'Relax with mint tea',
          duration: '2 hours'
        },
        evening: {
          type: 'eat',
          title: 'Street Food Crawl',
          description: 'Taste specialized local foods'
        }
      },
      {
        day: 5,
        city: 'merzouga',
        nights: 2,
        morning: {
          type: 'transit',
          title: 'Fes to Sahara Drive',
          description: 'Pass through Cedar Forests, watch out for monkeys',
          duration: '7 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'Enter Merzouga',
          description: 'Arrive at the edge of the Erg Chebbi dunes'
        },
        evening: {
          type: 'eat',
          title: 'Desert Dinner',
          description: 'Sleep at a desert hotel or camp'
        }
      },
      {
        day: 6,
        city: 'merzouga',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Sunrise on Dunes',
          description: 'Spectacular desert sunrise walk',
          duration: '2 hours'
        },
        afternoon: {
          type: 'act',
          title: '4x4 Desert Exploration',
          description: 'Visit nomad camps and Gnawa musicians',
          duration: '3 hours'
        },
        evening: {
          type: 'act',
          title: 'Camel Trek & Glamping',
          description: 'Ride camels into luxury sunset camp, sleep under stars',
          booking_needed: true
        }
      },
      {
        day: 7,
        city: 'ouarzazate',
        nights: 1,
        morning: {
          type: 'act',
          title: 'Trek back to Merzouga',
          description: 'Early sunrise ride back, shower and breakfast'
        },
        afternoon: {
          type: 'transit',
          title: 'Drive through Gorges',
          description: 'Scenic journey through Todra and Dades Gorge',
          duration: '5 hours'
        },
        evening: {
          type: 'stay',
          title: 'Kasbah Stay in Ouarzazate',
          description: 'Sleep in a converted fortress'
        }
      },
      {
        day: 8,
        city: 'marrakech',
        nights: 3,
        morning: {
          type: 'act',
          title: 'Ait Benhaddou Visit',
          description: 'Explore the famous ancient mud-brick city (Ksar)',
          duration: '2 hours'
        },
        afternoon: {
          type: 'transit',
          title: 'High Atlas Pass',
          description: 'Cross the Tizi n\'Tichka pass to Marrakech',
          duration: '4 hours'
        },
        evening: {
          type: 'act',
          title: 'Marrakech Night Market',
          description: 'Walk around Jemaa el-Fnaa'
        }
      },
      {
        day: 9,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Sights Tour',
          description: 'Bahia Palace, Ben Youssef Madrasa',
          duration: '4 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Souks Adventure',
          description: 'Wander and shop in the dense souks'
        },
        evening: {
          type: 'eat',
          title: 'Splurge dinner',
          description: 'Modern Moroccan food at Nomad',
          booking_needed: true
        }
      },
      {
        day: 10,
        city: 'essaouira',
        nights: 2,
        morning: {
          type: 'transit',
          title: 'Marrakech to Coast',
          description: 'Drive westward to coastal Essaouira',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Ramparts & Fishing Port',
          description: 'Explore seaside fortifications and blue boats'
        },
        evening: {
          type: 'eat',
          title: 'Grilled Sea Feast',
          description: 'Seafood chosen from port grills'
        }
      },
      {
        day: 11,
        city: 'essaouira',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Beach and Surf',
          description: 'Wind surfing, beach stroll, or quad bike'
        },
        afternoon: {
          type: 'act',
          title: 'Medina Shopping',
          description: 'Laid back shopping for thuya wood, spices'
        },
        evening: {
          type: 'eat',
          title: 'Sunset dinner',
          description: 'Oceanfront rooftop dining'
        }
      },
      {
        day: 12,
        city: 'marrakech',
        nights: 1,
        morning: {
          type: 'transit',
          title: 'Return to Marrakech',
          description: 'Drive back to Marrakech',
          duration: '3 hours'
        },
        afternoon: {
          type: 'act',
          title: 'Hammam Experience',
          description: 'Traditional steam bath and scrub down'
        },
        evening: {
          type: 'eat',
          title: 'Final Feast',
          description: 'Celebrate last night in a gorgeous Riad'
        }
      },
      {
        day: 13,
        city: 'marrakech',
        nights: 0,
        morning: {
          type: 'act',
          title: 'Last minute gifts',
          description: 'Argan oil, leather, babouche runs'
        },
        afternoon: {
          type: 'act',
          title: 'Majorelle Gardens',
          description: 'Final quiet garden stroll'
        },
        evening: {
          type: 'transit',
          title: 'Airport Dropoff',
          description: 'Return home'
        }
      }
    ]
  }
];
