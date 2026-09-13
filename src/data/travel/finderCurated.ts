// src/data/travel/finderCurated.ts

export interface CuratedDish {
  id: string;
  name: string;
  emoji: string;
  description: string;
  image: string;
  associatedTags: string[]; // Maps to EatListing foodStyles or tags
}

export interface CuratedStay {
  id: string;
  cohort: 'tourist' | 'local' | 'expat';
  name: string;
  styleName: string; // e.g., "Boutique Riad Stay", "Modern Apartment"
  description: string;
  vibeEmoji: string;
  locationArea: string; // e.g., "Medina (Bab Doukkala)", "Gueliz"
}

export interface CuratedActivity {
  id: string;
  name: string;
  emoji: string;
  description: string;
  duration: string;
  vibeTag: string;
}

export interface CityCuratedProfile {
  dishes: CuratedDish[];
  stays: CuratedStay[];
  activities: CuratedActivity[];
}

export const FINDER_CURATED_DATA: Record<string, CityCuratedProfile> = {
  marrakech: {
    dishes: [
      {
        id: 'tanjia',
        name: 'Tanjia Marrakchia',
        emoji: '🏺',
        description: 'Slow-cooked lamb with garlic, cumin, saffron, and preserved lemons, baked in a clay pot underground.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Meat']
      },
      {
        id: 'msemmen',
        name: 'Msemmen & Harira',
        emoji: '🥞',
        description: 'Flaky square pan-fried flatbread paired with rich tomato, lentil, and chickpea soup.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Café', 'Breakfast']
      },
      {
        id: 'pastilla',
        name: 'Pigeon/Chicken Pastilla',
        emoji: '🥮',
        description: 'An extraordinary sweet and savory pie featuring layers of thin pastry, spiced chicken or pigeon, and toasted almonds, dusted with sugar and cinnamon.',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Poultry']
      },
      {
        id: 'seven-veg',
        name: 'Couscous Seven Vegetables',
        emoji: '🍲',
        description: 'The definitive Friday staple: steaming semolina crowned with sweet pumpkin, cabbage, carrots, zucchini, turnips, caramelized onions, and tender meat.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Couscous']
      },
      {
        id: 'briouats',
        name: 'Mint Tea & Sweet Briouat',
        emoji: '☕',
        description: 'Freshly brewed gunpowder green tea with mint, paired with almond-paste stuffed, honey-dipped triangular pastry parcels.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Café', 'Dessert']
      }
    ],
    stays: [
      {
        id: 'riad-medina',
        cohort: 'tourist',
        name: 'Boutique Riad Stay',
        styleName: 'Historic Courtyard Houses',
        description: 'Tranquil inward-facing riads inside the ancient walled city, featuring orange trees, tiled courtyards, and refreshing plunge pools.',
        vibeEmoji: '🕌',
        locationArea: 'Medina (Bab Doukkala / Kennaria / Mouassine)'
      },
      {
        id: 'gueliz-expat',
        cohort: 'expat',
        name: 'Modern High-Rise Apartment',
        styleName: 'Chic European Style Living',
        description: 'Sleek condos with fast fiber optic internet, modern amenities, rooftop pools, and walkability to modern cafes, bars, and galleries.',
        vibeEmoji: '☕',
        locationArea: 'Gueliz / Hivernage'
      },
      {
        id: 'derb-guesthouse',
        cohort: 'local',
        name: 'Cozy Neighborhood Dar',
        styleName: 'Traditional Family Guesthouses',
        description: 'Budget-friendly authentic rooms deep within resident-first alleyways, providing high cultural immersion and standard Moroccan hospitality.',
        vibeEmoji: '🤝',
        locationArea: 'Sidi Mimoun / Mellah'
      }
    ],
    activities: [
      {
        id: 'jemaa-sunset',
        name: 'Rooftop Mint Tea at Jemaa El-Fna',
        emoji: '☕',
        description: 'Watch the chaotic main square transform at golden hour as street performers, musicians, and food stalls set up below.',
        duration: '1-2 hours',
        vibeTag: 'Culture & Views'
      },
      {
        id: 'souks-explore',
        name: 'Explore the Secret Souks',
        emoji: '🏺',
        description: 'Weave through the bustling labyrinth of artisan quarters, smelling spices, seeing leather dye-works, and watching metalworkers.',
        duration: '2-3 hours',
        vibeTag: 'Shopping & Exploration'
      },
      {
        id: 'majorelle-garden',
        name: 'Jardin Majorelle & YSL Museum',
        emoji: '🌵',
        description: 'Stroll through the enchanting electric-blue villa gardens designed by Jacques Majorelle, surrounded by exotic cacti and towering palms.',
        duration: '2 hours',
        vibeTag: 'Art & Nature'
      },
      {
        id: 'bahia-palace',
        name: 'Bahia Palace Walking Tour',
        emoji: '🏰',
        description: 'Admire the 19th-century palace architecture, boasting pristine zellij tiling, painted cedarwood ceilings, and sunny marble courtyards.',
        duration: '1-2 hours',
        vibeTag: 'History & Architecture'
      },
      {
        id: 'hammam-spa',
        name: 'Traditional Hammam & Massage',
        emoji: '🛁',
        description: 'Experience a authentic Moroccan bath ritual with black soap (savon noir), exfoliating kessa glove scrub, and warm water dousings.',
        duration: '2 hours',
        vibeTag: 'Relaxation & Wellness'
      }
    ]
  },
  fes: {
    dishes: [
      {
        id: 'fassi-pastilla',
        name: 'Fassi Pigeon Pastilla',
        emoji: '🥮',
        description: 'The absolute masterwork of Fes cuisine: layers of ultra-thin warka pastry, heavily spiced slow-cooked pigeon, sweet toasted almonds, and saffron sauce.',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Pigeon']
      },
      {
        id: 'couscous-tfaya',
        name: 'Couscous with Tfaya',
        emoji: '🍲',
        description: 'Sweet and savory masterpiece: delicate semolina topped with slow-braised meat, sweet caramelized onions, dark raisins, and chickpeas.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Couscous']
      },
      {
        id: 'khlea',
        name: 'Khlea & Fried Eggs',
        emoji: '🍳',
        description: 'Traditional Fassi cured beef, preserved in herbs and fat, then fried with fresh eggs in a clay tajine. Savory breakfast fuel!',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Breakfast', 'Meat']
      },
      {
        id: 'tagine-prunes',
        name: 'Lamb Tagine with Prunes',
        emoji: '🥩',
        description: 'Tender lamb slow-cooked in a broth of ginger, saffron, and cinnamon, crowned with sweet honey-glazed prunes and toasted sesame seeds.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Meat']
      },
      {
        id: 'harira-soup',
        name: 'Fassi Harira with Dates',
        emoji: '🥣',
        description: 'Hearty velvet soup of tomatoes, lentils, chickpeas, and fresh coriander, served with sweet medjool dates and honey chebakia cookies.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Soup']
      }
    ],
    stays: [
      {
        id: 'authentic-riad-fes',
        cohort: 'tourist',
        name: 'Palatial Fassi Riad',
        styleName: 'Ornate Medina Palaces',
        description: 'Immerse in historic residences showcasing towering mosaic columns, antique cedar doors, and expansive panoramic views of the Fes Medina.',
        vibeEmoji: '🕌',
        locationArea: 'Fes el-Bali (Ziat / Batha)'
      },
      {
        id: 'ville-nouvelle-modern',
        cohort: 'expat',
        name: 'Ville Nouvelle Apartment',
        styleName: 'Contemporary Urban Living',
        description: 'Spacious modern flats located in the French-designed quarter, featuring modern kitchens, garages, and easy walking access to supermarkets and train links.',
        vibeEmoji: '🏢',
        locationArea: 'Ville Nouvelle'
      },
      {
        id: 'dar-el-jdid',
        cohort: 'local',
        name: 'Cozy Medina Dar',
        styleName: 'Local Guesthouse Residences',
        description: 'Affordable, simple rooms managed by local families, offering delicious home-cooked meals and authentic hospitality near the markets.',
        vibeEmoji: '🤝',
        locationArea: 'Fes el-Jdid / Bab Boujloud'
      }
    ],
    activities: [
      {
        id: 'bab-boujloud',
        name: 'Walk Through the Blue Gate',
        emoji: '🚪',
        description: 'Pass through Bab Boujloud, the iconic entrance to the ancient medina, showcasing spectacular blue tiling on one side and green on the other.',
        duration: '1 hour',
        vibeTag: 'Landmark'
      },
      {
        id: 'chouara-tannery',
        name: 'Panoramic Chouara Tannery Tour',
        emoji: '🎨',
        description: 'Witness the centuries-old leather dyeing process from a balcony, holding a sprig of fresh mint to offset the pungent, organic aroma.',
        duration: '1-2 hours',
        vibeTag: 'Craft & Heritage'
      },
      {
        id: 'al-qarawiyyin',
        name: 'Explore Al-Qarawiyyin Exterior & Mosque',
        emoji: '📚',
        description: 'Admire the architectural majesty of the oldest continually operating university in the world, founded in 859 AD by Fatima al-Fihri.',
        duration: '1 hour',
        vibeTag: 'History & Education'
      },
      {
        id: 'fassi-pottery',
        name: 'Fassi Pottery & Zellij Workshop',
        emoji: '🏺',
        description: 'See master craftsmen shape clay from local quarries and hand-carve tiny mosaic tiles for elaborate zellij designs.',
        duration: '2 hours',
        vibeTag: 'Craft & Heritage'
      },
      {
        id: 'meri-sunset',
        name: 'Sunset over Marinid Tombs',
        emoji: '🌅',
        description: 'Hike or ride up to the ancient ruins on the northern hill for a spectacular sunset panorama of the sprawling Medina landscape.',
        duration: '1-2 hours',
        vibeTag: 'Scenic Views'
      }
    ]
  },
  casablanca: {
    dishes: [
      {
        id: 'seafood-pastilla',
        name: 'Seafood Pastilla',
        emoji: '🦐',
        description: 'Casablanca specialty filled with fresh spiced shrimp, calamari, white fish, and vermicelli noodles, wrapped in crisp pastry.',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Seafood']
      },
      {
        id: 'rfissa',
        name: 'Rfissa with Chicken & Lentils',
        emoji: '🍗',
        description: 'A deeply savory comfort dish of shredded trid pastry drenched in a rich saffron chicken broth, seasoned with fenugreek and cooked lentils.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Chicken']
      },
      {
        id: 'fish-tagine-casa',
        name: 'Coastal Fish Tagine',
        emoji: '🐟',
        description: 'Fresh local fish of the day simmered with spiced charmoula sauce, bell peppers, tomatoes, and salted green olives.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Seafood']
      },
      {
        id: 'sfenj',
        name: 'Sfenj Doughnuts & Espresso',
        emoji: '🍩',
        description: 'Hot, crispy-on-the-outside, chewy-on-the-inside Moroccan doughnuts, fried to order and enjoyed with a shot of strong café noir.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Café', 'Breakfast']
      },
      {
        id: 'friday-couscous',
        name: 'Imperial Beef Couscous',
        emoji: '🍲',
        description: 'Rich semolina topped with premium beef cuts, caramelized onions, cabbage, squash, and sweet seasonal carrots.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Meat']
      }
    ],
    stays: [
      {
        id: 'art-deco-casa',
        cohort: 'tourist',
        name: 'Art Deco Boutique Hotel',
        styleName: '1930s European Splendor',
        description: 'Charming properties reflecting Casablancas unique colonial era, boasting curved architecture, geometric tilework, and high ceilings.',
        vibeEmoji: '🏛️',
        locationArea: 'Gauthier / Mers Sultan'
      },
      {
        id: 'ain-diab-beachfront',
        cohort: 'expat',
        name: 'Corniche Beachfront Residence',
        styleName: 'Seaside High-End Flats',
        description: 'Premium modern oceanview apartments located directly along the beach club strip, with gyms, private security, and great balcony sea views.',
        vibeEmoji: '🌊',
        locationArea: 'Ain Diab'
      },
      {
        id: 'habous-family-stay',
        cohort: 'local',
        name: 'Authentic Habous Townhouse',
        styleName: 'Neo-Medina Residential Homes',
        description: 'Quiet, residential living in Casablancas cleanest architectural neighborhood, designed with classic arches, stone doorways, and proximity to bakeries.',
        vibeEmoji: '🕌',
        locationArea: 'Habous Quarter'
      }
    ],
    activities: [
      {
        id: 'hassan-ii-mosque',
        name: 'Hassan II Mosque Interior Tour',
        emoji: '🕌',
        description: 'Visit the architectural crown of Casablanca, one of the world\'s largest mosques, built over the ocean with a retractable roof and a 210-meter minaret.',
        duration: '2 hours',
        vibeTag: 'Landmark & Architecture'
      },
      {
        id: 'corniche-walk',
        name: 'Ain Diab Corniche Sunset Walk',
        emoji: '🌅',
        description: 'Stroll along the elegant Atlantic promenade alongside local runners, families, and beachgoers under towering palm trees.',
        duration: '1-2 hours',
        vibeTag: 'Leisure & Views'
      },
      {
        id: 'habous-pastries',
        name: 'Pastries at Pâtisserie Bennis Habous',
        emoji: '🥮',
        description: 'Savor traditional gazelle horns and almond briouat at this legendary bakery, nestled deep inside the peaceful neo-medina arcades.',
        duration: '1 hour',
        vibeTag: 'Food & Culture'
      },
      {
        id: 'art-deco-safari',
        name: 'Casablanca Art Deco Safari',
        emoji: '🏛️',
        description: 'Walk through downtown Casablanca to discover grand facades blending classic French colonial designs with local Moroccan zellij highlights.',
        duration: '2-3 hours',
        vibeTag: 'History & Architecture'
      },
      {
        id: 'rick-cafe',
        name: 'Cocktails at Ricks Café',
        emoji: '🍸',
        description: 'Have a drink or dinner in a restored riad designed to match Humphrey Bogart\'s iconic cabaret club from the classic 1942 Hollywood movie.',
        duration: '2 hours',
        vibeTag: 'Cinema & Nightlife'
      }
    ]
  },
  agadir: {
    dishes: [
      {
        id: 'souss-fish',
        name: 'Souss Fish Tagine with Argan Oil',
        emoji: '🐟',
        description: 'Fresh Atlantic white fish cooked in unrefined culinary argan oil, seasoned with ginger, cumin, saffron, bell peppers, and fresh coriander.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Seafood']
      },
      {
        id: 'grilled-sardines',
        name: 'Agadir Grilled Sardines',
        emoji: '🐟',
        description: 'Plump, sea-fresh sardines coated in sea salt and grilled over smoking charcoal, served with fresh lemon slices and a tomato-onion salad.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Seafood', 'Street Food']
      },
      {
        id: 'amlou-msemmen',
        name: 'Amlou & Fresh Bread',
        emoji: '🍯',
        description: 'The "Moroccan Nutella": a smooth, rich spread crafted from toasted almonds, honey, and culinary argan oil, slathered on warm bread.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Breakfast', 'Café']
      },
      {
        id: 'tagine-berbere',
        name: 'Berber Vegetable Tagine',
        emoji: '🥕',
        description: 'Traditional Souss cone-shaped arrangement of seasonal carrots, green beans, peas, potatoes, and sweet onions, spiced with turmeric and ginger.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Vegetarian', 'Traditional']
      },
      {
        id: 'couscous-souss',
        name: 'Souss Corn Couscous',
        emoji: '🍲',
        description: 'Traditional Berbere couscous crafted with cracked corn semolina (Belboula) instead of wheat, cooked with fresh vegetables and tender beef.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Couscous', 'Traditional']
      }
    ],
    stays: [
      {
        id: 'beachfront-agadir',
        cohort: 'tourist',
        name: 'Agadir Beachfront Resort',
        styleName: 'All-Inclusive Coastline Spas',
        description: 'Sun-drenched luxury resorts situated directly along Agadirs sandy beachfront crescent, with massive outdoor pools and beach activities.',
        vibeEmoji: '🌴',
        locationArea: 'Beachfront Zone'
      },
      {
        id: 'marina-yacht-stay',
        cohort: 'expat',
        name: 'Marina Yacht Apartment',
        styleName: 'Modern Marina Residences',
        description: 'Upscale modern condos with premium views of the sailboats, high-security gatekeeping, immediate access to waterfront retail, cafes, and restaurants.',
        vibeEmoji: '⛵',
        locationArea: 'Agadir Marina'
      },
      {
        id: 'talborjt-local',
        cohort: 'local',
        name: 'Charming Talborjt Apartment',
        styleName: 'Historic Local Neighborhood Flats',
        description: 'Comfortable, budget-friendly residential flats in Talborjt, the cultural heart of rebuilding post-earthquake Agadir, close to markets and garden plazas.',
        vibeEmoji: '🏘️',
        locationArea: 'Talborjt Quarter'
      }
    ],
    activities: [
      {
        id: 'agadir-oufella',
        name: 'Sunset over Agadir Oufella Ruins',
        emoji: '🌅',
        description: 'Take a cable car or taxi to the historic hilltop fortress ruins for a jaw-dropping view of the entire Agadir crescent bay at sunset.',
        duration: '2 hours',
        vibeTag: 'Landmark & Scenic Views'
      },
      {
        id: 'taghazout-surf',
        name: 'Surf Day-Trip to Taghazout Bay',
        emoji: '🏄',
        description: 'Catch world-class Atlantic waves at Anchor Point or enjoy a relaxed beginner lesson on the sandy beachfronts of this iconic fishing town.',
        duration: '4-6 hours',
        vibeTag: 'Surfing & Active'
      },
      {
        id: 'souk-el-had',
        name: 'Shopping at Souk El Had',
        emoji: '👜',
        description: 'Explore the largest urban souk in North Africa, boasting over 6,000 stalls packed with argan oil, spices, leather items, and clay tagines.',
        duration: '2-3 hours',
        vibeTag: 'Shopping & Exploration'
      },
      {
        id: 'paradise-valley-hike',
        name: 'Paradise Valley Rock Pools Hike',
        emoji: '🌴',
        description: 'Hike through palm-lined rock gorges in the High Atlas foothills to discover turquoise pools, natural slides, and cliff-jumping spots.',
        duration: '4-5 hours',
        vibeTag: 'Nature & Adventure'
      },
      {
        id: 'crocoparc',
        name: 'Stroll in Crocoparc Botanic Gardens',
        emoji: '🐊',
        description: 'Walk through exotic botanical collections housing over 300 Nile crocodiles, playful tortoises, and giant water lilies.',
        duration: '2 hours',
        vibeTag: 'Nature & Family'
      }
    ]
  },
  tangier: {
    dishes: [
      {
        id: 'kaliente',
        name: 'Kaliente Chickpea Bake',
        emoji: '🥧',
        description: 'Tangerian legendary cheap street eat: a golden-brown, soft chickpea flour flan baked in massive circular metal trays, sprinkled with salt, cumin, and hot chili powder.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Street Food', 'Snack']
      },
      {
        id: 'sea-bream',
        name: 'Tangier Sea Bream Tagine',
        emoji: '🐟',
        description: 'Freshly caught Atlantic sea bream slow-cooked in a robust Tangerian charmoula, with sweet bell peppers, potato medallions, and lemon.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Seafood', 'Traditional']
      },
      {
        id: 'tortilla-espanola',
        name: 'Spanish-style Tortilla',
        emoji: '🍳',
        description: 'Thick, Spanish-inspired omelette with layers of slow-cooked potatoes and sweet onions, reflecting Tangier\'s deep European links.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Spanish', 'Café', 'Breakfast']
      },
      {
        id: 'seafood-paella',
        name: 'Northern Seafood Paella',
        emoji: '🥘',
        description: 'Heavily seasoned rice loaded with fresh northern shrimp, calamari, mussels, and saffron, showing Tangiers cross-strait cultural blending.',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Spanish', 'Seafood']
      },
      {
        id: 'hafa-tea',
        name: 'Mint Tea with Pine Nuts',
        emoji: '☕',
        description: 'Gunpowder mint tea served hot and finished with sweet toasted pine nuts floating gracefully on top.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Café', 'Drinks']
      }
    ],
    stays: [
      {
        id: 'kasbah-riad-tangier',
        cohort: 'tourist',
        name: 'Kasbah Historic Riad',
        styleName: 'Cliffside Fortress Dars',
        description: 'Charming stone-wall homes nestled near the high fortress walls, offering stunning rooftop panoramas overlooking the Strait of Gibraltar.',
        vibeEmoji: '🏰',
        locationArea: 'Kasbah Quarter'
      },
      {
        id: 'boulevard-flat',
        cohort: 'expat',
        name: 'Boulevard Sea-View Studio',
        styleName: 'Contemporary Bay Front Living',
        description: 'Modern beach road high-rises with floor-to-ceiling windows, high-speed internet, and sweeping views of the Spanish coast across the waters.',
        vibeEmoji: '🌅',
        locationArea: 'Boulevard / Malabata'
      },
      {
        id: 'iberia-residential',
        cohort: 'local',
        name: 'Cozy Iberia Apartment',
        styleName: 'Traditional Family Flats',
        description: 'Quiet, residential living in the elegant Iberia district, surrounded by leafy parks, local French bakeries, and quiet avenues.',
        vibeEmoji: '🌳',
        locationArea: 'Iberia / Marshan'
      }
    ],
    activities: [
      {
        id: 'cafe-hafa',
        name: 'Mint Tea at Café Hafa',
        emoji: '☕',
        description: 'Drink hot tea on terraced stone seating overlooking the sea, sitting where Jimi Hendrix, the Rolling Stones, and legendary beat writers sat.',
        duration: '1-2 hours',
        vibeTag: 'Historic Cafe'
      },
      {
        id: 'hercules-caves',
        name: 'Visit Caves of Hercules & Cape Spartel',
        emoji: '🌊',
        description: 'Explore the mythical caves where Hercules allegedly rested, showing an opening shaped like the map of Africa, and visit the lighthouse where the Mediterranean meets the Atlantic.',
        duration: '2-3 hours',
        vibeTag: 'Nature & Landmark'
      },
      {
        id: 'kasbah-wander',
        name: 'Stroll the Kasbah & Medina Alleys',
        emoji: '🏘️',
        description: 'Weave past sky-blue and white houses, discover hidden design galleries, and visit the Kasbah Museum in the old Sultan\'s palace.',
        duration: '2 hours',
        vibeTag: 'History & Culture'
      },
      {
        id: 'grand-socco',
        name: 'Grand Socco People Watching',
        emoji: '⛲',
        description: 'Relax with a coffee in the bustling main plaza, watching the city life flow between the old Medina and French-era downtown.',
        duration: '1-2 hours',
        vibeTag: 'Leisure & Culture'
      },
      {
        id: 'perdicaris',
        name: 'Hike in Perdicaris Forest Park',
        emoji: '🌲',
        description: 'Stroll through pine, eucalyptus, and mimosa forests along the coastal cliffs, capturing gorgeous ocean views.',
        duration: '2 hours',
        vibeTag: 'Nature & Leisure'
      }
    ]
  },
  chefchaouen: {
    dishes: [
      {
        id: 'jben-salad',
        name: 'Chefchaouen Goat Cheese (Jben)',
        emoji: '🧀',
        description: 'Fresh local goat cheese crafted in the surrounding Rif mountains, drizzled with virgin olive oil and served with wild mountain honey.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Breakfast']
      },
      {
        id: 'goat-tagine',
        name: 'Rif Goat Meat Tagine with Prunes',
        emoji: '🥩',
        description: 'Tender mountain goat meat simmered in wild Rif herbs, golden honey, roasted almonds, and sweet prunes.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Meat']
      },
      {
        id: 'bissel-soup',
        name: 'Bissel (Fava Bean Soup)',
        emoji: '🥣',
        description: 'Thick, nourishing winter soup of mashed fava beans (similar to Bissara), cooked with garlic, cumin, and cold-pressed olive oil.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Soup', 'Traditional']
      },
      {
        id: 'wild-herb-omelette',
        name: 'Rif Mountain Omelette',
        emoji: '🍳',
        description: 'Fresh country eggs fried in olive oil with wild thyme, mint, and local oregano, served steaming hot in a clay pan.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Breakfast']
      },
      {
        id: 'wildflower-tea',
        name: 'Rif Wildflower Infusion',
        emoji: '☕',
        description: 'Fresh mountain spring water brewed with mint, sage, pennyroyal, and wild verbena herbs harvested in the surrounding valleys.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Drinks']
      }
    ],
    stays: [
      {
        id: 'blue-dar-chaouen',
        cohort: 'tourist',
        name: 'Blue Medina Dar',
        styleName: 'Iconic Cobalt Blue Homes',
        description: 'Enchanting cozy guest houses with walls entirely washed in brilliant shades of blue, decorated with colorful handwoven Rif wool rugs.',
        vibeEmoji: '💙',
        locationArea: 'Medina Core'
      },
      {
        id: 'chaouen-ecolodge',
        cohort: 'expat',
        name: 'Mountain View Ecolodge',
        styleName: 'Serene Rif Hillside Retreats',
        description: 'Relaxed lodges located just above the town, providing clean mountain air, sweeping views, solar power, organic vegetable gardens, and trail access.',
        vibeEmoji: '🌲',
        locationArea: 'Rif Mountain Slopes'
      },
      {
        id: 'outa-hammam-local',
        cohort: 'local',
        name: 'Outa el-Hammam Guesthouse',
        styleName: 'Town Plaza Family Stays',
        description: 'Simple, cozy rooms managed by old mountain families, nestled near the bustling central plaza with instant access to the bakeries.',
        vibeEmoji: '🏘',
        locationArea: 'Plaza Outa el-Hammam'
      }
    ],
    activities: [
      {
        id: 'blue-lanes',
        name: 'Wander the Cobalt Blue Alleys',
        emoji: '💙',
        description: 'Lose yourself in the world-famous winding blue streetscapes, capturing beautiful photographs of cascading flower pots and blue archways.',
        duration: '2-3 hours',
        vibeTag: 'Exploration & Photography'
      },
      {
        id: 'spanish-mosque',
        name: 'Hike to the Spanish Mosque',
        emoji: '🌅',
        description: 'Take a pleasant trail out of the east gate, climbing up to the isolated Spanish-built mosque on a hill for a breathtaking valley view at sunset.',
        duration: '2 hours',
        vibeTag: 'Scenic Views & Hiking'
      },
      {
        id: 'ras-el-maa',
        name: 'Stroll Ras El Maa Waterfall',
        emoji: '💧',
        description: 'See mountain springs gush from the hillsides where local women gather to wash hand-knotted Rif blankets in the cool running waters.',
        duration: '1 hour',
        vibeTag: 'Nature & Culture'
      },
      {
        id: 'kasbah-fortress',
        name: 'Explore the Kasbah Gardens & Jail',
        emoji: '🏰',
        description: 'Visit the small 15th-century fortress in the central plaza, housing an exotic garden, historical weapons, and the old stone dungeon cells.',
        duration: '1-2 hours',
        vibeTag: 'History & Architecture'
      },
      {
        id: 'rif-national-park',
        name: 'Hike in Talassemtane National Park',
        emoji: '🌲',
        description: 'Guided day-hike through rare Moroccan fir tree forests to discover God\'s Bridge, a massive natural stone arch spanning a river gorge.',
        duration: '5-6 hours',
        vibeTag: 'Adventure & Hiking'
      }
    ]
  },
  essaouira: {
    dishes: [
      {
        id: 'grilled-fish-port',
        name: 'Essaouira Fresh Port Sardines',
        emoji: '🐟',
        description: 'Walk into the blue port stalls, pick fresh sardines or red sea bream, and watch them grill it instantly over open wood coals.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Seafood', 'Street Food']
      },
      {
        id: 'conger-tagine',
        name: 'Conger Eel Tagine',
        emoji: '🐟',
        description: 'Windward specialty: meaty local conger eel stewed with sweet onions, raisins, tomatoes, and a savory charmoula sauce.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Seafood']
      },
      {
        id: 'argan-tagine',
        name: 'Goat Tagine with Argan Oil',
        emoji: '🥩',
        description: 'Slow-cooked local goat meat simmered in rich, nutty argan oil with roasted almonds, prunes, and toasted sesame.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Meat']
      },
      {
        id: 'maakouda-souiri',
        name: 'Maakouda Potato Fritters',
        emoji: '🥔',
        description: 'Crispy fried spiced potato cakes, served with hot harissa dipping sauce or stuffed inside fresh round khobz bread.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Street Food', 'Snack']
      },
      {
        id: 'amlou-pancakes',
        name: 'Beghrir with Amlou & Honey',
        emoji: '🥞',
        description: 'Spongy, thousand-hole Moroccan pancakes drizzled with warm amber honey and nutty argan-oil amlou.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Breakfast']
      }
    ],
    stays: [
      {
        id: 'windy-medina-riad',
        cohort: 'tourist',
        name: 'Windy Medina Riad',
        styleName: 'Whitewashed Seaside Riad',
        description: 'Enchanting guest houses styled with cool limestone walls, blue shuttered windows, and breezy rooftops filled with the sound of crashing waves.',
        vibeEmoji: '🌊',
        locationArea: 'Medina (Ahl Agadir / Kasbah)'
      },
      {
        id: 'beachfront-surf-lodge',
        cohort: 'expat',
        name: 'Beachfront Windsurf Lodge',
        styleName: 'Chic Atlantic Surf Lofts',
        description: 'Contemporary apartments with ocean balconies, storage spaces for windsurf/kitesurf gear, high-speed Wi-Fi, and steps to the shoreline.',
        vibeEmoji: '🏄',
        locationArea: 'Essaouira Beachfront'
      },
      {
        id: 'kaouki-eco-villa',
        cohort: 'local',
        name: 'Sidi Kaouki Eco-Villa',
        styleName: 'Rustic Beachside Dars',
        description: 'Relaxed stone cottages situated in the nearby surfing outpost of Sidi Kaouki, offering simple solar power, fireplace lounges, and star gazing.',
        vibeEmoji: '🏡',
        locationArea: 'Sidi Kaouki Beach'
      }
    ],
    activities: [
      {
        id: 'port-fish-market',
        name: 'Essaouira Port Fish Auction',
        emoji: '⚓',
        description: 'Wander past dozens of iconic blue wooden boats to witness the shouting, fast-paced live fish market action surrounded by swooping seagulls.',
        duration: '1-2 hours',
        vibeTag: 'Maritime Heritage'
      },
      {
        id: 'ramparts-walk',
        name: 'Walk the Medina Ramparts',
        emoji: '🏰',
        description: 'Stroll the massive stone fortress walls (Scala de la Ville) where bronze Dutch cannons sit, catching cinematic sprays of Atlantic waves.',
        duration: '1 hour',
        vibeTag: 'Scenic Views'
      },
      {
        id: 'windsurf-kitesurf',
        name: 'Windsurfing or Kitesurfing Session',
        emoji: '🏄',
        description: 'Experience why Essaouira is the "Wind City of Africa" with a windy lesson or gear rental inside the protected bay.',
        duration: '2-3 hours',
        vibeTag: 'Water Sports'
      },
      {
        id: 'thuya-wood',
        name: 'Discover Thuya Wood Workshops',
        emoji: '🪵',
        description: 'Visit underground stone vaults to watch master woodturners shape fragrant, dark-grained local Thuya roots into elaborate inlaid chests.',
        duration: '1 hour',
        vibeTag: 'Crafts'
      },
      {
        id: 'gnawa-music',
        name: 'Enjoy Live Gnawa Music',
        emoji: '🪘',
        description: 'Relax in a cozy candlelit Medina cafe, listening to the spiritual, rhythmic plucks of the guembri and clatter of metallic qraqeb castanets.',
        duration: '2 hours',
        vibeTag: 'Music & Culture'
      }
    ]
  },
  rabat: {
    dishes: [
      {
        id: 'rabat-lamb',
        name: 'Rabat Lamb Tagine with Sweet Quince',
        emoji: '🥩',
        description: 'Classic Rabat specialty: slow-cooked lamb in a delicate cinnamon and saffron broth, topped with sweet glazed quince (safarjal) and almonds.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Meat']
      },
      {
        id: 'couscous-tfaya-rabat',
        name: 'Royal Couscous with caramelized Tfaya',
        emoji: '🍲',
        description: 'Fine semolina loaded with three meats (beef, lamb, chicken) and finished with a rich mound of sweet onions, raisins, and cinnamon.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Traditional', 'Couscous']
      },
      {
        id: 'gazelle-horns',
        name: 'Mint Tea & Kaab el-Ghazal',
        emoji: '☕',
        description: 'Freshly folded orange-blossom pastry horns filled with pure almond paste, served alongside a glass of hot, pouring mint tea.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Café', 'Dessert']
      },
      {
        id: 'bouregreg-seafood',
        name: 'Marina Baked Sole',
        emoji: '🐟',
        description: 'Ocean-fresh sole baked with white wine, local garlic, and sea salt, reflecting the fresh catch of Rabats rivermouth marina.',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Seafood']
      },
      {
        id: 'harira-chebakia',
        name: 'Rabat Harira & Sesame Chebakia',
        emoji: '🥣',
        description: 'Deeply spiced tomato soup paired with golden-fried flower-shaped honey cookies coated in toasted sesame.',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
        associatedTags: ['Moroccan', 'Soup', 'Snack']
      }
    ],
    stays: [
      {
        id: 'rabat-medina-stay',
        cohort: 'tourist',
        name: 'Quiet Medina Dar',
        styleName: 'Peaceful Andalusian Riad',
        description: 'Elegant, quiet guest houses inside Rabats coastal medina, featuring calm whitewashed walls and fragrant jasmine-draped courtyards.',
        vibeEmoji: '🕌',
        locationArea: 'Medina (Rue des Consuls)'
      },
      {
        id: 'agdal-modern-flat',
        cohort: 'expat',
        name: 'Sleek Agdal Apartment',
        styleName: 'Trendy Diplomatic Living',
        description: 'Modern, high-security flats in Agdal, surrounded by chic coffee shops, French bookstores, international schools, and the tramway network.',
        vibeEmoji: '☕',
        locationArea: 'Agdal Quarter'
      },
      {
        id: 'marina-waterfront-stay',
        cohort: 'local',
        name: 'Marina Waterfront Condo',
        styleName: 'Scenic Bouregreg Flats',
        description: 'New waterfront apartments overlooking the river, offering pedestrian promenades, running paths, and spectacular views of the old Udayas fortress.',
        vibeEmoji: '⛵',
        locationArea: 'Rabat/Salé Marina'
      }
    ],
    activities: [
      {
        id: 'udayas-kasbah',
        name: 'Explore Kasbah of the Udayas',
        emoji: '🏘️',
        description: 'Wander through this 12th-century fortress of blue and white stone walls, ending with a view of the Atlantic at the ancient Café Maure.',
        duration: '2 hours',
        vibeTag: 'History & Scenic Views'
      },
      {
        id: 'hassan-tower',
        name: 'Visit Hassan Tower & Royal Mausoleum',
        emoji: '🕌',
        description: 'See the red sandstone minaret of an uncompleted 12th-century mosque, and the majestic white-stone royal tomb guarded by riders on horses.',
        duration: '1-2 hours',
        vibeTag: 'Historic Landmarks'
      },
      {
        id: 'chellah-ruins',
        name: 'Wander the Chellah Necropolis',
        emoji: '🌿',
        description: 'Explore overgrown Roman ruins and medieval Islamic fortresses where dozens of giant white storks build massive nests on crumbling minarets.',
        duration: '2 hours',
        vibeTag: 'History & Nature'
      },
      {
        id: 'bouregreg-boat',
        name: 'Traditional Boat Ride across Bouregreg',
        emoji: '⛵',
        description: 'Ride a small wooden rowing boat across the river, transitioning from the Rabat waterfront over to the ancient Salé side.',
        duration: '1 hour',
        vibeTag: 'Views & Leisure'
      },
      {
        id: 'agdal-cafe-crawl',
        name: 'Chic Agdal Coffee Stroll',
        emoji: '☕',
        description: 'Join local university students and diplomats in the leafy avenues of Agdal, tasting premium pastries and French-style lattes.',
        duration: '1-2 hours',
        vibeTag: 'Urban & Leisure'
      }
    ]
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
