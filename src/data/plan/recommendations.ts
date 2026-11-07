// src/data/plan/recommendations.ts

export interface Recommendation {
  id: string;
  name: string;
  category: 'stay' | 'eat' | 'act';
  rating: number;
  price_level: '$' | '$$' | '$$$';
  why_suggested: string;
  pro_tip?: string;
  booking_link?: string;
}

export const CITY_RECOMMENDATIONS: Record<string, Recommendation[]> = {
  marrakech: [
    {
      id: 'riad-yasmine',
      name: 'Riad Yasmine',
      category: 'stay',
      rating: 4.8,
      price_level: '$$',
      why_suggested: 'Beautiful traditional riad with iconic green and white tiled courtyard pool, spectacular hospitality.',
      pro_tip: 'Request a room on the second floor for easy rooftop terrace access.',
      booking_link: 'https://www.booking.com'
    },
    {
      id: 'royal-mansour',
      name: 'Royal Mansour',
      category: 'stay',
      rating: 5.0,
      price_level: '$$$',
      why_suggested: 'The ultimate luxury experience—private riads, Michelin-star level dining, absolute privacy, and security.',
      pro_tip: 'Enjoy afternoon tea in the main palace lobby even if you are not staying overnight.',
      booking_link: 'https://www.royalmansour.com'
    },
    {
      id: 'nomad-marrakech',
      name: 'Nomad',
      category: 'eat',
      rating: 4.7,
      price_level: '$$',
      why_suggested: 'Superb rooftop with views of Spice Square, modern twist on classic Moroccan dishes.',
      pro_tip: 'Book ahead of time online and specifically ask for a top level terrace seat for sunset.',
      booking_link: 'https://nomadmarrakech.com'
    },
    {
      id: 'jemaa-stalls',
      name: 'Jemaa el-Fnaa Food Stalls',
      category: 'eat',
      rating: 4.2,
      price_level: '$',
      why_suggested: 'Authentic street food, buzzing open-air market grills, local musicians, and performers.',
      pro_tip: 'Stall #14 (famous for fried fish) and Stall #32 (harira soup and snails) are major highlights.'
    },
    {
      id: 'bahia-palace',
      name: 'Bahia Palace',
      category: 'act',
      rating: 4.7,
      price_level: '$',
      why_suggested: 'Gorgeous late 19th-century palace showcasing intricate marquetry, plasterwork, and zellij tiles.',
      pro_tip: 'Arrive at 8:00 AM sharp to explore the main courtyard in quiet solitude before tour buses arrive.'
    },
    {
      id: 'hammam-de-la-rose',
      name: 'Hammam de la Rose',
      category: 'act',
      rating: 4.6,
      price_level: '$$',
      why_suggested: 'Clean, tourist-friendly, traditional Moroccan steam bath with full body exfoliating scrub and argan oil massage.',
      pro_tip: 'Perfect way to reset and relax after a long day of navigating dusty souks.'
    }
  ],
  fes: [
    {
      id: 'palais-amani',
      name: 'Palais Amani',
      category: 'stay',
      rating: 4.9,
      price_level: '$$$',
      why_suggested: 'Exceptional restored palace inside the medina with high citrus-garden courtyards, premium spa, and cooking school.',
      pro_tip: 'Participate in their rooftop bakery masterclass to learn to bake traditional Moroccan breads.',
      booking_link: 'https://www.palaisamani.com'
    },
    {
      id: 'cafe-clock-fes',
      name: 'Café Clock Fes',
      category: 'eat',
      rating: 4.4,
      price_level: '$',
      why_suggested: 'Vibrant cultural hub. Famous for its camel burgers, milkshakes, storytelling events, and calligraphy lessons.',
      pro_tip: 'Climb all the way to the top deck for panoramic Medina views and sunset call to prayer.'
    },
    {
      id: 'chouara-tannery',
      name: 'Chouara Tannery',
      category: 'act',
      rating: 4.5,
      price_level: '$',
      why_suggested: 'Iconic stone vessels filled with dye and liquids used to treat hides. Traditional techniques active since medieval times.',
      pro_tip: 'Take the sprig of mint offered at the entrance—it helps neutralize the intense scent from the pits!'
    }
  ],
  chefchaouen: [
    {
      id: 'lina-ryad-spa',
      name: 'Lina Ryad & Spa',
      category: 'stay',
      rating: 4.8,
      price_level: '$$',
      why_suggested: 'In the heart of the blue medina, featuring a beautiful indoor heated pool, traditional hammam, and mountain-view terrace.',
      pro_tip: 'Enjoy traditional mint tea on the roof at dusk as the mountains turn gold.'
    },
    {
      id: 'aladdin-restaurant',
      name: 'Aladdin Restaurant',
      category: 'eat',
      rating: 4.5,
      price_level: '$',
      why_suggested: 'Perched high in Chefchaouen with multi-level seating, serving wonderful lemon chicken tagines and couscous.',
      pro_tip: 'Sit by the window or on the upper roof for a direct view of the main Outa el-Hammam square.'
    },
    {
      id: 'akchour-waterfalls',
      name: 'Akchour Waterfalls',
      category: 'act',
      rating: 4.7,
      price_level: '$',
      why_suggested: 'Stunning hike through Rif mountains leading to deep green pools and the Bridge of God natural rock arch.',
      pro_tip: 'Wear sturdy hiking shoes as paths get slippery, and hire a local grand taxi from town to take you there.'
    }
  ],
  essaouira: [
    {
      id: 'riad-mimouna',
      name: 'Riad Mimouna',
      category: 'stay',
      rating: 4.6,
      price_level: '$$',
      why_suggested: 'Stunning oceanfront riad built directly into the historic sea-wall cliffs, listen to the crashing waves from bed.',
      pro_tip: 'Book a sea-view room to watch the Atlantic sunset from your window.'
    },
    {
      id: 'port-fish-grills',
      name: 'Port-Side Fish Grills',
      category: 'eat',
      rating: 4.3,
      price_level: '$',
      why_suggested: 'Direct ocean-to-table. Select your fresh seafood from local fisherman stalls and watch it get grilled immediately.',
      pro_tip: 'Always agree on the final price before they start grilling to avoid heavy surcharges.'
    },
    {
      id: 'rampart-walk',
      name: 'Essaouira Ramparts Walk',
      category: 'act',
      rating: 4.8,
      price_level: '$',
      why_suggested: 'Walk the historic Portuguese brass cannons, dramatic stone ramparts, and view the blue harbor (Free entry).',
      pro_tip: 'Sunset is the ultimate photogenic hour here; bring a windbreaker jacket.'
    }
  ],
  merzouga: [
    {
      id: 'desert-luxury-camp',
      name: 'Desert Luxury Camp',
      category: 'stay',
      rating: 4.8,
      price_level: '$$$',
      why_suggested: 'Premium glamping experience tucked inside the towering Erg Chebbi dunes. Private en-suite tents with real hot showers.',
      pro_tip: 'Participate in the fireside drumming and acoustic desert music sessions after dinner.'
    },
    {
      id: 'camel-trek-sunset',
      name: 'Sunset Camel Trekking',
      category: 'act',
      rating: 4.9,
      price_level: '$$',
      why_suggested: 'Ride a caravan of camels into the heart of the Sahara desert as dunes change from yellow to deep red.',
      pro_tip: 'Pack a small backpack with warm layers, as the Sahara desert temperature drops sharply after dusk.'
    }
  ]
};
