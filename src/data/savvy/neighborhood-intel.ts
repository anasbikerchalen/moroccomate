/**
 * ============================================================================
 * MOROCCO TRAVEL OS - NEIGHBORHOOD INTEL DATABASE (neighborhoodIntelDB)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR ADDING NEW NEIGHBORHOOD INTEL ENTRIES:
 * ------------------------------------------------------
 * When adding new neighborhood insights (e.g., using an external AI assistant),
 * you MUST adhere strictly to the TypeScript interface `NeighborhoodIntel` shown below.
 * Do not hallucinate fields, rename existing ones, or ignore structural validation.
 * 
 * SCHEMA SPECIFICATION:
 * 
 * interface NeighborhoodIntel {
 *   cityId: string;                   // Lowercase city ID matching static lookup (e.g., 'marrakech', 'fes', 'casablanca')
 *   neighborhoodName: string;         // Name of the neighborhood (e.g., 'Medina', 'Gueliz')
 *   vibeTag: string;                  // Short, engaging summary describing the neighborhood's mood/style
 *   vibeEmoji: string;                // A single representative emoji (e.g., '🕌', '☕')
 *   safetyAtNight: 'very-safe' | 'safe' | 'safe-with-caution' | 'caution'; // Local security assessment
 *   scamDensityLevel: 'none' | 'low' | 'medium' | 'high' | 'extreme';    // Frequency of street/shop traps
 *   happinessIndex: number;           // Experience/enjoyment index score (0.0 to 10.0)
 *   keyWarnings: string[];            // Bulleted risk guidelines (e.g., motorbikes, ATM cashouts)
 *   bestTimeToVisit: string;          // Highly optimal time of day/week to explore
 *   worstTimeToVisit: string;         // Suboptimal time to visit due to closures or extreme rush
 *   communityTips: {                  // Curated feedback or community stories from forums
 *     text: string;
 *     source: 'reddit' | 'tripadvisor' | 'facebook' | 'google_review' | 'instagram';
 *     upvotes?: number;
 *   }[];
 *   savvyTips: string[];              // Pro-tips or safety checks specifically for this quarter
 *   scamIds: string[];                // Array of matching ScamIntel IDs active in this neighborhood
 *   flaggedPlaceIds: string[];        // Array of place IDs that visitors should avoid or caution about
 *   recommendedPlaceIds: string[];    // Array of place IDs that offer exceptional and fair experiences
 *   localSecrets: string[];           // Hidden, off-the-beaten-path insights known to residents
 * }
 * 
 * RULES FOR EXTERNAL AI AGENTS:
 * 1. Maintain complete data integrity. Do NOT remove existing items when appending new ones.
 * 2. Ensure the `cityId` maps correctly and identically across other databases.
 * 3. Make sure references in `scamIds`, `flaggedPlaceIds`, and `recommendedPlaceIds` are valid and exist in those databases.
 * 4. Do not include mock values or placeholders like "TBD" or "TODO".
 * ============================================================================
 */

import { NeighborhoodIntel } from '../../types/savvy';

export const neighborhoodIntelDB: NeighborhoodIntel[] = [
  {
    cityId: 'marrakech',
    neighborhoodName: 'Medina',
    vibeTag: 'Lively, labyrinthine, and historical — best for confident explorers',
    vibeEmoji: '🕌',
    safetyAtNight: 'safe-with-caution',
    scamDensityLevel: 'high',
    happinessIndex: 8.5,
    keyWarnings: [
      'Alleys can become dark, empty, and disorienting after 21:00.',
      'ATMs near main gates (like Bab Doukkala) frequently run out of cash on weekend afternoons.',
      'Watch out for fast-moving motorbikes in narrow lanes.'
    ],
    bestTimeToVisit: 'Early morning 08:30–10:30 (quiet streets, fresh-baked flatbreads, and cool temperatures)',
    worstTimeToVisit: 'Friday 12:00–14:30 (most shops close for communal Friday prayers)',
    communityTips: [
      {
        text: 'If you want to buy souk items, walk past the first three rows of shops near the squares. The deeper you go, the prices drop by nearly half.',
        source: 'reddit',
        upvotes: 145
      },
      {
        text: 'Do not follow kids offering directions. Use offline maps or ask a settled shopkeeper inside their store.',
        source: 'tripadvisor',
        upvotes: 98
      }
    ],
    savvyTips: [
      'Always keep your phone in your pocket while walking narrow curves so you are fully aware of any oncoming scooters.',
      'Walk on the right-hand side of alleys to let local carts and riders bypass you safely.'
    ],
    scamIds: ['fake-guide-closed-way', 'henna-grab', 'animal-handlers-photo', 'helpful-luggage-porter', 'carpet-tea-pressure'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['m-eat-1', 'e-marrakech-cafe-des-epices'],
    localSecrets: [
      'The terrace of Maison de la Photographie has one of the highest and cheapest views of the Atlas mountains paired with excellent traditional lunch.',
      'The public community bakeries (Ferran) will bake raw dough for 2-3 MAD — buy fresh dough from a street vendor and ask them to bake it.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Gueliz',
    vibeTag: 'Modern, cosmopolitan, and stylish — great cafe culture and shopping',
    vibeEmoji: '☕',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Aggressive club promoters around Boulevard Mohamed V at night.',
      'Metered street parking must be paid via municipal machines (look for blue curbs).'
    ],
    bestTimeToVisit: 'Late afternoon 16:00–19:00 for trendy shopping and open-air terrace coffees',
    worstTimeToVisit: 'Midday 13:00–15:00 (heavy traffic and hot concrete with minimal shade)',
    communityTips: [
      {
        text: 'Taxis in Gueliz are far better at using the meter than inside the Medina. Stand near Plaza De Gueliz and flag one down.',
        source: 'facebook',
        upvotes: 67
      }
    ],
    savvyTips: [
      'Visit Cafe Les Négociants for a classic local espresso and people-watching experience that is 90% local Moroccans.',
      'Most boutique design shops in Gueliz have strictly fixed prices, which is a great relief if you are tired of haggling.'
    ],
    scamIds: ['taxi-no-meter'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['m-sleep-1'],
    localSecrets: [
      'Behind the central market (Marché Central) are hidden fish stalls where they will grill fresh local oysters and sardines for a third of restaurant prices.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Hivernage',
    vibeTag: 'Upscale, serene, and luxurious — premier resort hotels and high-end dining',
    vibeEmoji: '🍸',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Petit Taxis stationed directly outside luxury hotels routinely demand inflated flat rates; walk 50m to Boulevard Mohamed VI to flag metered cabs.',
      'Nightclub crowds around late-night venues can become noisy after midnight.'
    ],
    bestTimeToVisit: '18:00–22:00 for fine dining, terrace cocktails, and evening strolls along wide palm-lined avenues',
    worstTimeToVisit: '13:00–15:00 (quiet with high sun exposure on wide avenues)',
    communityTips: [
      {
        text: 'Hivernage feels like a completely different world from the Medina. Wide sidewalks, private security guards everywhere, and very peaceful at night.',
        source: 'tripadvisor',
        upvotes: 89
      }
    ],
    savvyTips: [
      'Use Careem or inDrive apps for night rides out of Hivernage clubs to guarantee transparent fixed fares without haggling.',
      'Enjoy free public walks around Cyber Park (Arsat Moulay Abdeslam) near Hivernage for high-speed free Wi-Fi in shaded botanical gardens.'
    ],
    scamIds: ['taxi-no-meter'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The quiet gardens surrounding the Royal Theatre (Théâtre Royal) host serene evening walks with illuminated fountains.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Kasbah',
    vibeTag: 'Historic, relaxed, and authentic — royal palace perimeter with charming street food',
    vibeEmoji: '🏰',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.7,
    keyWarnings: [
      'Alleys around the Saadian Tombs get crowded with tour groups between 10:00 and 13:00.',
      'Narrow passages near Bab Agnaou can be dark after 22:00; stick to lit main streets.'
    ],
    bestTimeToVisit: 'Late afternoon 16:00–18:30 for Bab Agnaou photography and rooftop tea',
    worstTimeToVisit: 'Midday 11:00–13:00 during peak tour bus unloadings',
    communityTips: [
      {
        text: 'Kasbah is much calmer than central Jemaa el-Fnaa. The street food around Bab Agnaou is cleaner and frequented by local families.',
        source: 'reddit',
        upvotes: 112
      }
    ],
    savvyTips: [
      'Enter the Saadian Tombs right at 08:30 opening to admire the intricate twelve-pillar chamber without standing in line.',
      'Kasbah has excellent Petit Taxi access right at Bab Agnaou gate.'
    ],
    scamIds: ['fake-guide-closed-way'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Try fresh Tanjia cooked underground in wood-fired oven ashes at the small street stalls near Bab Agnaou for an authentic Marrakech delicacy.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Mellah',
    vibeTag: 'Rich heritage, artisan spice markets, and historic Jewish quarter atmosphere',
    vibeEmoji: '✡️',
    safetyAtNight: 'safe-with-caution',
    scamDensityLevel: 'medium',
    happinessIndex: 8.3,
    keyWarnings: [
      'Spice vendors around Place du Mellah can use aggressive sales pitches for saffron and argan products; check prices at multiple stalls before buying.',
      'Market lanes close around 20:00, making side alleys dark and quiet after dark.'
    ],
    bestTimeToVisit: '09:30–12:00 for spice market shopping and visiting the Lazama Synagogue',
    worstTimeToVisit: 'Saturdays (Jewish Sabbath closures) and late nights after 21:00',
    communityTips: [
      {
        text: 'The Mellah spice market (Place Ferblantiers) is fantastic for artisan crafts and herbs, but always haggle politely.',
        source: 'facebook',
        upvotes: 74
      }
    ],
    savvyTips: [
      'Place des Ferblantiers (Metalworkers Square) is surrounded by excellent rooftop cafes with views over the storks nesting on the El Badi Palace walls.',
      'Inspect saffron threads by placing them in warm water; genuine saffron turns water yellow, not red.'
    ],
    scamIds: ['carpet-tea-pressure'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the historic Miara Jewish Cemetery for a serene, humbling walk through centuries of preserved whitewashed tombs.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Palmeraie',
    vibeTag: 'Tranquil oasis, luxury resorts, palm groves, and outdoor adventure activities',
    vibeEmoji: '🌴',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.6,
    keyWarnings: [
      'Quad biking and camel ride operators at street corners overcharge; book directly through vetted suppliers or hotels.',
      'Public transport is scarce; rely on hotel shuttles or pre-arranged taxis.'
    ],
    bestTimeToVisit: 'Late afternoon 16:30–18:30 for sunset camel rides and palm grove strolls',
    worstTimeToVisit: 'Midday 12:00–15:00 due to intense sun and lack of shade along unpaved tracks',
    communityTips: [
      {
        text: 'Palmeraie is extremely safe because of hotel security, but you definitely need taxi apps or pre-arranged rides to get back to Gueliz or Medina.',
        source: 'tripadvisor',
        upvotes: 93
      }
    ],
    savvyTips: [
      'Inspect quad bikes and helmets before starting any desert trail activity.',
      'Pre-arrange return transport with your driver before heading deep into resort grounds.'
    ],
    scamIds: ['animal-handlers-photo'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the Nikki Beach or Palais Rhoul gardens for a tranquil pool day surrounded by thousands of ancient palm trees.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Agdal',
    vibeTag: 'Spacious, modern shopping centers, broad gardens, and quiet residential complexes',
    vibeEmoji: '🛍️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.4,
    keyWarnings: [
      'Heavy traffic along Route de l’Ourika during evening weekend shopping hours.',
      'Historical Agdal Gardens are open only on specific days (Thursdays and Sundays).'
    ],
    bestTimeToVisit: '16:00–20:00 for shopping at Al Mazar mall or strolls near the Agdal Basin',
    worstTimeToVisit: 'Midday heat (limited shaded walkways along main avenues)',
    communityTips: [
      {
        text: 'Agdal is great if you want fixed-price supermarket shopping (Carrefour at Al Mazar) or modern cinemas away from Medina hustle.',
        source: 'google_review',
        upvotes: 45
      }
    ],
    savvyTips: [
      'Al Mazar Mall offers clean public restrooms, air conditioning, and fixed-price Moroccan crafts.',
      'Grand Taxis to Ourika Valley pick up near the southern Agdal perimeter.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The massive water reservoir at Agdal Gardens offers a peaceful historic engineering view with the High Atlas mountains reflecting in the water.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Sidi Ghanem',
    vibeTag: 'Trendy industrial creative zone, artisan design studios, galleries, and gourmet cafes',
    vibeEmoji: '🎨',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.9,
    keyWarnings: [
      'Most design showrooms close early (around 18:30) and stay closed on Sundays.',
      'Industrial streetscape with minimal foot traffic after 19:00.'
    ],
    bestTimeToVisit: '10:00–16:00 for gallery visits, boutique shopping, and organic lunches',
    worstTimeToVisit: 'Sundays (nearly all design studios and cafes are closed)',
    communityTips: [
      {
        text: 'Sidi Ghanem is Marrakech’s best-kept secret for interior design lovers. Fixed prices, incredible craftsmanship, and zero street pressure.',
        source: 'instagram',
        upvotes: 128
      }
    ],
    savvyTips: [
      'Take a Petit Taxi directly to Sidi Ghanem main avenue and explore the side grid street by street.',
      'Many artisan workshops allow you to customize leather goods, candles, and ceramics for export.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Lunch at Le Studio or Cafe L’Usine for high-end French-Moroccan bistro cuisine surrounded by local artists and designers.'
    ]
  },
  {
    cityId: 'marrakech',
    neighborhoodName: 'Jemaa el-Fnaa',
    vibeTag: 'Iconic, bustling UNESCO square filled with street food, musicians, and performers',
    vibeEmoji: '🎪',
    safetyAtNight: 'safe-with-caution',
    scamDensityLevel: 'high',
    happinessIndex: 8.8,
    keyWarnings: [
      'Beware of uninvited snake handlers or monkey owners placing animals on your shoulders then demanding 200+ MAD for photos.',
      'Henna artists may grab your hand and start drawing without permission; keep hands in pockets when walking close to henna circles.',
      'Keep wallets and phones secured in front bags in dense food stall crowds.'
    ],
    bestTimeToVisit: '17:30–21:00 when the sun sets and the food stalls light up with smoke and live storytellers',
    worstTimeToVisit: '13:00–15:00 (scorching heat on open pavement with minimal activity)',
    communityTips: [
      {
        text: 'Eat at food stalls with long lines of local Moroccans (stalls #1, #14, or #31 are famous). Always double check the price list on the menu board.',
        source: 'reddit',
        upvotes: 310
      }
    ],
    savvyTips: [
      'Head up to rooftop cafes like Le Grand Balcon du Café de France 30 minutes before sunset for the iconic elevated photo over the square.',
      'If someone offers a photo or direction, agree on 0 or a nominal 5 MAD before taking out your phone.'
    ],
    scamIds: ['henna-grab', 'animal-handlers-photo', 'restaurant-menu-pricing-surprise'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the quiet spice square (Place des Épices) just 3 minutes north of Jemaa el-Fnaa for a much calmer atmosphere and woven baskets.'
    ]
  },
  {
    cityId: 'fes',
    neighborhoodName: 'Fes el-Bali (Old Medina)',
    vibeTag: 'Stunningly ancient, fully pedestrianized, and raw — the worlds largest car-free zone',
    vibeEmoji: '📦',
    safetyAtNight: 'safe-with-caution',
    scamDensityLevel: 'extreme',
    happinessIndex: 8.2,
    keyWarnings: [
      'Very easy to lose cell signal deep in the stone alleys.',
      'Fake guides are highly coordinated around Bab Boujloud gate.'
    ],
    bestTimeToVisit: 'Morning 09:00–12:00 when the food souks are vibrant and smell of fresh mint',
    worstTimeToVisit: 'Late night after 21:00 (alleys empty completely and look like a maze of shuttered doors)',
    communityTips: [
      {
        text: 'The main paths are called Tala’a Kebira and Tala’a Sghira. If you go downhill, you are going deeper into the Medina. If you go uphill, you are heading back to the gates.',
        source: 'reddit',
        upvotes: 210
      }
    ],
    savvyTips: [
      'Hire an official, licensed tour guide (with a metal badge) from your hotel/riad or the tourist office on day one to learn the layout safely.',
      'If you feel overwhelmed, step into a courtyard cafe to regroup. The sound insulation inside riads is incredible.'
    ],
    scamIds: ['fake-guide-closed-way', 'tannery-entrance-scam', 'pottery-demo-fee', 'carpet-tea-pressure'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['f-sleep-1'],
    localSecrets: [
      'The garden of Jnan Sbil is located just outside the medina gate and is a beautiful, free, and quiet park filled with fountains and flowers.'
    ]
  },
  {
    cityId: 'fes',
    neighborhoodName: 'Batha',
    vibeTag: 'Strategic medina entrance, museum quarter, and convenient transport hub',
    vibeEmoji: '🏛️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Mind the Petit Taxi queue near Batha Post Office during afternoon rush hours.',
      'A few unofficial luggage porters near taxi ranks; agree on a tip (10-20 MAD) beforehand.'
    ],
    bestTimeToVisit: '10:00–18:00 for visiting Dar Batha Museum gardens and easy riad check-ins',
    worstTimeToVisit: '08:00–09:00 during school/work commute traffic near the main roundabouts',
    communityTips: [
      {
        text: 'Batha is the easiest place to get dropped off by taxi when coming to Fes el-Bali. Highly recommended area to stay for first-time visitors.',
        source: 'tripadvisor',
        upvotes: 75
      }
    ],
    savvyTips: [
      'Use Batha Square as your reference orientation landmark when navigating back to your riad in the western medina.'
    ],
    scamIds: ['overpriced-luggage-porter'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Café Clock in Batha serves famous camel burgers and offers traditional storytelling nights.'
    ]
  },
  {
    cityId: 'fes',
    neighborhoodName: 'Ville Nouvelle (Fes New City)',
    vibeTag: 'Modern French colonial avenues, palm-lined boulevards, cafes, and metered taxis',
    vibeEmoji: '🏙️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.9,
    keyWarnings: [
      'Metered red Petit Taxis are standard here; ensure the meter (compteur) is turned on.',
      'Restaurants and bank ATMs are spread along Avenue Hassan II.'
    ],
    bestTimeToVisit: '17:00–22:00 for evening boulevard strolls, ice cream shops, and sidewalk cafes',
    worstTimeToVisit: '13:00–15:00 mid-day sun on unshaded sidewalk avenues',
    communityTips: [
      {
        text: 'Ville Nouvelle feels like a calm European town. Very safe to walk around at night and get dinner or coffee on Avenue Hassan II.',
        source: 'reddit',
        upvotes: 62
      }
    ],
    savvyTips: [
      'If you need reliable ATM cash withdrawals or pharmacy supplies, Ville Nouvelle is the best spot in Fes.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Avenue Hassan II central fountain promenade lights up in the evening with family crowds.'
    ]
  },
  {
    cityId: 'fes',
    neighborhoodName: 'Fes Jdid & Mellah',
    vibeTag: 'Historic Royal Palace gates, Jewish Quarter balconies, and spice market streets',
    vibeEmoji: '👑',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.4,
    keyWarnings: [
      'Royal Palace Seven Golden Gates are heavily guarded; do not photograph military sentries.',
      'Mellah market streets can get tight and crowded during midday.'
    ],
    bestTimeToVisit: '09:30–12:30 for visiting the Ibn Danan Synagogue and the Royal Palace gates',
    worstTimeToVisit: 'After 19:00 when Jewish Quarter shops close down',
    communityTips: [
      {
        text: 'The brass doors of the Royal Palace are breathtaking. The Mellah offers distinct wooden-balcony architecture not found in Fes el-Bali.',
        source: 'google_review',
        upvotes: 81
      }
    ],
    savvyTips: [
      'Combine your visit to Fes Jdid with a walk through nearby Jnan Sbil park for a peaceful morning trip.'
    ],
    scamIds: ['fake-guide-closed-way'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Ibn Danan Synagogue offers incredible panoramic views over the Jewish Cemetery from its rooftop terrace.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Gauthier / Maarif',
    vibeTag: 'Trendy, safe, and commercial — filled with design shops, restaurants, and apartments',
    vibeEmoji: '🏙️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.9,
    keyWarnings: [
      'Be mindful of pocketpickers in crowded shopping avenues near Twin Center.',
      'Traffic is extremely heavy during commuter rush hours.'
    ],
    bestTimeToVisit: '18:00–21:00 for dining and strolls',
    worstTimeToVisit: '08:00–09:30 (morning gridlock)',
    communityTips: [
      {
        text: 'Skip the expensive international chains here. The local Moroccan-French bistros in Gauthier offer some of the best culinary values in the country.',
        source: 'facebook',
        upvotes: 54
      }
    ],
    savvyTips: [
      'Use Careem or Roby apps to book taxis here — it ensures metered fares and hassle-free pickups.',
      'Excellent neighborhood for digital nomads with fast fiber optic Wi-Fi cafes.'
    ],
    scamIds: ['parking-guardian-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['c-eat-1'],
    localSecrets: [
      'Visit Villa des Arts for free contemporary Moroccan art exhibitions in a quiet, beautifully preserved Art Deco building.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'The Corniche (Ain Diab)',
    vibeTag: 'Vibrant coastal promenade, beach clubs, and lively nightlife facing the Atlantic',
    vibeEmoji: '🌅',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.5,
    keyWarnings: [
      'Nightclubs and beach bars can get rowdy on weekend nights.',
      'Unmetered taxis often wait outside clubs and hotels trying to charge flat rates.'
    ],
    bestTimeToVisit: '17:00–19:30 for ocean sunsets and evening walks along the boardwalk',
    worstTimeToVisit: 'Late night weekends if looking for a quiet experience',
    communityTips: [
      {
        text: 'Ain Diab is perfect for a morning jog or sunset stroll. Lots of cafes facing the ocean where you can just relax.',
        source: 'reddit',
        upvotes: 85
      }
    ],
    savvyTips: [
      'Walk to the Hassan II Mosque from the Corniche — it is a long but beautiful coastal walk.',
      'Use ride-hailing apps like inDrive or Careem to leave the area at night to avoid taxi haggling.'
    ],
    scamIds: ['taxi-no-meter'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Surf schools operate at the far end of Ain Diab where the reef breaks offer consistent waves year-round.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Habous Quarter (New Medina)',
    vibeTag: 'Organized traditional markets, beautiful Moorish architecture, and peaceful souks',
    vibeEmoji: '🏺',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.7,
    keyWarnings: [
      'Many shops close on Fridays or during midday prayer times.',
      'Fewer dining options available in the evening compared to modern districts.'
    ],
    bestTimeToVisit: '10:00–14:00 for shopping traditional crafts and tasting Moroccan pastries',
    worstTimeToVisit: 'Friday afternoons (many stalls are closed)',
    communityTips: [
      {
        text: 'The Habous is much cleaner and less chaotic than the Old Medina. Great place to buy leather goods and carpets without intense pressure.',
        source: 'tripadvisor',
        upvotes: 112
      }
    ],
    savvyTips: [
      'Visit Patisserie Bennis for some of the best traditional Moroccan sweets in the country (get the almond horns).',
      'Perfect place to buy authentic souvenirs without the extreme haggling found in Marrakech.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The Mahkama du Pacha is a stunning government building here; sometimes you can slip in for free if you ask the guards politely.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Sidi Belyout / Centre Ville',
    vibeTag: 'Historic Art Deco core, bustling urban center, and French colonial architecture',
    vibeEmoji: '🏢',
    safetyAtNight: 'safe-with-caution',
    scamDensityLevel: 'medium',
    happinessIndex: 8.1,
    keyWarnings: [
      'Streets can be extremely crowded and chaotic with traffic during the day.',
      'Be cautious of petty theft in busy transit areas like Casa Port station and Mohammed V Square.'
    ],
    bestTimeToVisit: '09:00–12:00 to admire the Art Deco architecture before the afternoon rush',
    worstTimeToVisit: 'After dark, when the business district empties out and feels desolate',
    communityTips: [
      {
        text: 'Look up! The architecture in the city center is an amazing mix of Moorish and Art Deco styles, but the street level is very busy.',
        source: 'google_review',
        upvotes: 65
      }
    ],
    savvyTips: [
      'Mohammed V Square is the heart of the city; great for photos with its monumental fountain.',
      'Keep valuables secure when navigating the crowded Marché Central.'
    ],
    scamIds: ['fake-guide-closed-way'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Inside the Marché Central, you can buy fresh seafood and take it to the small restaurants on the edge to have it grilled for a small fee.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Old Medina (Casablanca)',
    vibeTag: 'Historic 19th-century walled market — authentic local shopping and historical gates',
    vibeEmoji: '🏰',
    safetyAtNight: 'caution',
    scamDensityLevel: 'high',
    happinessIndex: 7.2,
    keyWarnings: [
      'Alleys are narrow, dark, and unlit after dark; pickpocketing risk increases significantly.',
      'Unsolicited street guides near Bab Marrakech gate may offer misleading directions.'
    ],
    bestTimeToVisit: '10:00–16:00 for daytime market shopping with local crowds',
    worstTimeToVisit: 'After sunset (19:30 onwards) when market stalls close and alleys empty out',
    communityTips: [
      {
        text: 'Visit the Old Medina during the day for genuine local leather and spice stalls, but leave before dark and use ride-hailing apps or taxis.',
        source: 'tripadvisor',
        upvotes: 88
      }
    ],
    savvyTips: [
      'Keep your backpack or bag in front of you when walking through crowded market corridors near Bab Marrakech.',
      'Stick to main thoroughly traveled avenues leading between Bab Marrakech and Sqala fort.'
    ],
    scamIds: ['fake-guide-closed-way', 'unregulated-parking-guard-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'La Sqala restaurant built inside the 18th-century Portuguese bastion offers peaceful garden dining right on the edge of the Old Medina.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Anfa & Anfa Supérieur',
    vibeTag: 'Affluent, calm, and prestigious — diplomatic residences, villas, and ocean viewpoints',
    vibeEmoji: '🏡',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Strictly residential and upscale; few late-night convenience stores, so arrange transport in advance.',
      'High security around diplomatic compounds; avoid photographing embassy gates.'
    ],
    bestTimeToVisit: '15:00–18:00 for peaceful scenic drives and elevated views over Casablanca',
    worstTimeToVisit: 'Late night if looking for walking street markets (mostly private residences)',
    communityTips: [
      {
        text: 'Anfa is exceptionally quiet and safe. Beautiful residential streets with lush palm trees and private villa security.',
        source: 'reddit',
        upvotes: 42
      }
    ],
    savvyTips: [
      'Use Careem or inDrive for hassle-free pickups to and from hotel spots in Anfa.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Anfa Park built on the former airport runway offers a modern green urban space with walking tracks and kid playgrounds.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Bourgogne',
    vibeTag: 'Lively, residential, and foodie-friendly — popular with young professionals and local bistros',
    vibeEmoji: '🥐',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.7,
    keyWarnings: [
      'Street parking can be tight; always look for official municipal parking guardians in orange vests.',
      'Heavy evening traffic on Boulevard Bourgogne during dinner hours.'
    ],
    bestTimeToVisit: '12:00–15:00 for bistro lunches or 19:00–22:00 for evening dining',
    worstTimeToVisit: '08:00–09:00 morning rush hour traffic',
    communityTips: [
      {
        text: 'Bourgogne is full of great French-Moroccan bakeries and neighborhood cafes. Very safe for walking between restaurants.',
        source: 'google_review',
        upvotes: 51
      }
    ],
    savvyTips: [
      'Great area for budget-friendly boutique stay apartments within walking distance of both Gauthier and the Hassan II Mosque.'
    ],
    scamIds: ['unregulated-parking-guard-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Local artisan patisseries on Rue Ain El Aouda serve incredible fresh morning croissants at local prices.'
    ]
  },
  {
    cityId: 'casablanca',
    neighborhoodName: 'Derb Sultan',
    vibeTag: 'Authentic traditional wholesale market — vibrant local commerce and spice markets',
    vibeEmoji: '📦',
    safetyAtNight: 'caution',
    scamDensityLevel: 'medium',
    happinessIndex: 7.5,
    keyWarnings: [
      'Dense crowd corridors require vigilant bag and phone security during day peak hours.',
      'Avoid unlit back corridors after dark when wholesale stalls shut down.'
    ],
    bestTimeToVisit: '09:30–13:00 for authentic non-touristic shopping and traditional bakeries',
    worstTimeToVisit: 'Late evenings (stalls close and area becomes desolate)',
    communityTips: [
      {
        text: 'Derb Sultan is where real Casablancais shop for spices, textiles, and household goods at wholesale prices.',
        source: 'facebook',
        upvotes: 39
      }
    ],
    savvyTips: [
      'Carry cash dirhams in small denominations as market stallholders rarely take credit cards.'
    ],
    scamIds: ['fake-dirham-change-scam'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Pâtisserie Bennis Habous is right nearby; buy fresh traditional pastries right out of the wood-fired brick oven.'
    ]
  },
  {
    cityId: 'tangier',
    neighborhoodName: 'Kasbah & Medina',
    vibeTag: 'Bohemian, artistic, and historic hilltop overlooks — panoramic Straits of Gibraltar views',
    vibeEmoji: '🎨',
    safetyAtNight: 'safe',
    scamDensityLevel: 'medium',
    happinessIndex: 8.7,
    keyWarnings: [
      'Steep cobbled staircases can be slippery when damp.',
      'Port touts near the ferry terminal approach with inflated tour rates.'
    ],
    bestTimeToVisit: 'Late afternoon 16:30–19:30 to watch the sunset over the Atlantic from Bab Bhar viewpoint',
    worstTimeToVisit: 'Midday heat on steep uphill walks',
    communityTips: [
      {
        text: 'Café Hafa outside the Kasbah has been open since 1921. Sit on the terraced cliff, order a 10 MAD mint tea, and stare right across at Spain.',
        source: 'reddit',
        upvotes: 122
      }
    ],
    savvyTips: [
      'Use the Careem app or insist on petit taxi meter ("compteur") when riding up from the train station.',
      'Boutique cafes in the Kasbah offer peaceful Wi-Fi workspaces.'
    ],
    scamIds: ['fake-guide-closed-way', 'taxi-no-meter', 'parking-guardian-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['t-eat-1'],
    localSecrets: [
      'The Petit Socco square in the heart of the medina is ideal for people-watching at traditional cafes like Café Central.'
    ]
  },
  {
    cityId: 'tangier',
    neighborhoodName: 'Corniche, Malabata & Marina',
    vibeTag: 'Vibrant oceanfront promenade, modern marina bay, family beach walks, and seaside dining',
    vibeEmoji: '🌅',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Mind speed of beachside traffic when crossing Avenue Mohammed VI.',
      'Exercise basic vigilance with personal items on sandy beach areas during crowded summer weekends.'
    ],
    bestTimeToVisit: '18:00–22:00 for lively evening waterfront walks, gelato, and Marina Bay dining',
    worstTimeToVisit: '13:00–15:00 intense summer midday heat along unshaded promenade stretches',
    communityTips: [
      {
        text: 'The Corniche and Tanja Marina Bay are exceptionally safe, well-lit, and heavily patrolled by tourist police. Great for night strolls with kids.',
        source: 'tripadvisor',
        upvotes: 94
      }
    ],
    savvyTips: [
      'Take the high-speed Al Boraq train to Tangier Ville Station — the Corniche and Marina are right across the boulevard.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Tanja Marina Bay features modern rooftop lounge bars with direct views of yachts and the Tangier skyline.'
    ]
  },
  {
    cityId: 'tangier',
    neighborhoodName: 'Iberia & Place de France',
    vibeTag: 'Historic French & Spanish diplomatic quarter — Art Deco cafes, consulates, and palm plazas',
    vibeEmoji: '🏛️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.0,
    keyWarnings: [
      'Busy pedestrian crossings around Place de France; watch for turning Petit Taxis.',
      'High diplomatic security around consulate buildings; avoid photographing gated entrances.'
    ],
    bestTimeToVisit: '09:00–12:00 for morning coffee at Gran Café de Paris or afternoon pastry at Café de Paris',
    worstTimeToVisit: '18:00 rush hour traffic around the Place de France roundabout',
    communityTips: [
      {
        text: 'Iberia and Place de France are very clean, European-feeling, and completely safe day and night. Sitting outside Gran Café de Paris is a Tangier ritual.',
        source: 'google_review',
        upvotes: 78
      }
    ],
    savvyTips: [
      'An easy 5-minute walk connects Place de France directly to the Grand Socco entrance of the Medina.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The terrace garden behind St. Andrew’s Church in Iberia is a hidden oasis with historic Moorish-Christian architectural fusion.'
    ]
  },
  {
    cityId: 'tangier',
    neighborhoodName: 'Cap Spartel & Hercules Caves',
    vibeTag: 'Dramatic Atlantic coast, iconic lighthouse, mythic caves, and sunset ocean viewpoints',
    vibeEmoji: '🌊',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.3,
    keyWarnings: [
      'Keep children close to railings near steep coastal cliffs and ocean view platforms.',
      'Unofficial camel ride operators near Hercules Caves beach — agree on price before mounting.'
    ],
    bestTimeToVisit: '16:00–19:30 to see the exact meeting point of Atlantic and Mediterranean waters at sunset',
    worstTimeToVisit: 'After sunset when coastal park roads become dark and public transport drops off',
    communityTips: [
      {
        text: 'Cap Spartel lighthouse and Caves of Hercules are breathtaking. Very safe tourist sites with official parking wardens and tourist police.',
        source: 'reddit',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Arrange a round-trip Grand Taxi or private driver from Tangier city center so you have guaranteed return transport after sunset.'
    ],
    scamIds: ['unregulated-parking-guard-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The botanical trail inside nearby Perdicaris Park (Rmilat Forest) leads to a secret cliffside gazebo overlooking the Strait.'
    ]
  },
  {
    cityId: 'chefchaouen',
    neighborhoodName: 'Outa el-Hammam & Blue Medina',
    vibeTag: 'Serene, indigo-washed, mountain-framed — photographer and hiker paradise',
    vibeEmoji: '🔷',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.1,
    keyWarnings: [
      'Watch your step on narrow painted stairs.',
      'Touts outside the town gates offering cannabis tours should be politely declined.'
    ],
    bestTimeToVisit: 'Early morning 07:30–09:30 before day-trip tour buses arrive from Tangier',
    worstTimeToVisit: 'Midday 12:00–15:00 when tour crowds peak in main plazas',
    communityTips: [
      {
        text: 'Hike 20 minutes up to the Spanish Mosque (Mosquée Bouzafar) at sunset for the most breathtaking view of the entire blue valley.',
        source: 'tripadvisor',
        upvotes: 180
      }
    ],
    savvyTips: [
      'Petit taxis in Chefchaouen have a fixed flat rate of 7–10 MAD anywhere in town.',
      'Fresh goat cheese (Jben) from local Rif farmers in the morning market is delicious with fresh bread.'
    ],
    scamIds: ['blue-city-photo-trap', 'carpet-tea-pressure'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['ch-sleep-1'],
    localSecrets: [
      'Ras el-Maa waterfall at the edge of the medina is where locals wash rugs and cool off in spring mountain streams.'
    ]
  },
  {
    cityId: 'essaouira',
    neighborhoodName: 'Medina & Skala Ramparts',
    vibeTag: 'Breezy, artistic, coastal fortress — fresh seafood, Atlantic winds, and Gnawa music',
    vibeEmoji: '🌊',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.0,
    keyWarnings: [
      'Strong trade winds (Alizés) can blow sand hard in summer afternoons.',
      'Beware of unpriced seafood stalls near the port.'
    ],
    bestTimeToVisit: '10:00–13:00 to visit the fishing harbor and watch wooden boat builders',
    worstTimeToVisit: 'Late afternoon on the open beach during high wind hours',
    communityTips: [
      {
        text: 'Essaouira medina is wide, flat, and grid-like. It is completely laid-back compared to Marrakech and super safe for solo travelers.',
        source: 'reddit',
        upvotes: 135
      }
    ],
    savvyTips: [
      'Always ask for the exact per-kilo price written down before choosing seafood at port grills.',
      'Excellent spot for buying high-quality argan oil directly from verified cooperatives.'
    ],
    scamIds: ['restaurant-bill-pad', 'argan-oil-mix', 'parking-guardian-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: ['e-eat-1'],
    localSecrets: [
      'The Ramparts (Skala de la Ville) where Game of Thrones was filmed charge only 50 MAD for entry and provide epic ocean views.'
    ]
  },
  {
    cityId: 'agadir',
    neighborhoodName: 'Marina & Beach Promenade',
    vibeTag: 'Modern resort-style, sunny, wide promenade — palm trees, marina dining, ocean breeze',
    vibeEmoji: '🏖️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'medium',
    happinessIndex: 8.4,
    keyWarnings: [
      'Beach phototouts with falcons, horses, or jet-skis demand inflated fees.',
      'Tourist restaurants on the front strip add high service charges.'
    ],
    bestTimeToVisit: 'Sunset 17:30–20:00 for a long seaside walk',
    worstTimeToVisit: 'Midday 12:00–15:00 when sun intensity is highest',
    communityTips: [
      {
        text: 'Head to Souk El Had in the Talborjt district for authentic local shopping, fresh fruits, and spice stalls away from the resort strip.',
        source: 'facebook',
        upvotes: 88
      }
    ],
    savvyTips: [
      'Agadir petit taxis are red, metered, and very cheap for traveling between Talborjt, Souk El Had, and the Marina.',
      'The Agadir Cable Car (Téléphérique) up to Kasbah Agadir Oufella provides panoramic city views.'
    ],
    scamIds: ['beach-photographer-animal-scam', 'fake-tour-guides-historical-sites-scam', 'parking-guardian-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Talborjt neighborhood has authentic Moroccan diners serving tagines and fresh orange juice for a fraction of beach promenade prices.'
    ]
  },
  {
    cityId: 'agadir',
    neighborhoodName: 'Founty (Hotel & Villa Precinct)',
    vibeTag: 'Luxury oceanfront resort zone, manicured palm avenues, private hotel security',
    vibeEmoji: '🏨',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.1,
    keyWarnings: [
      'Strictly hotel and luxury residential zone; few street markets or small local grocers.',
      'Always use red metered petit taxis when heading into town.'
    ],
    bestTimeToVisit: 'Morning 08:00–11:00 for oceanfront jogging and resort breakfast',
    worstTimeToVisit: 'Midday summer heat in unshaded boulevard areas',
    communityTips: [
      {
        text: 'Founty is the quietest and safest hotel district in Agadir, perfect for families and peaceful beach resorts.',
        source: 'tripadvisor',
        upvotes: 72
      }
    ],
    savvyTips: [
      'Direct beach boulevard connection lets you walk safely all the way to Agadir Marina.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Resort hotel gardens in Founty host quiet sunset ocean-view tea terraces open to non-guests.'
    ]
  },
  {
    cityId: 'agadir',
    neighborhoodName: 'Talborjt (Nouveau Talborjt)',
    vibeTag: 'Authentic city core, tree-lined pedestrian plazas, lively local cafes, street markets',
    vibeEmoji: '☕',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.9,
    keyWarnings: [
      'Bustling evening traffic around Place Al Amal; cross at marked zebra crossings.',
      'Shops close during Friday afternoon prayer hours.'
    ],
    bestTimeToVisit: '17:00–21:00 for lively evening cafe culture and authentic local dining',
    worstTimeToVisit: 'Early morning before shop doors open',
    communityTips: [
      {
        text: 'Talborjt is the soul of Agadir. Local bakeries and grilled fish spots here offer 5-star taste at local prices.',
        source: 'reddit',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Visit Mohammed V Mosque plaza for afternoon shade and artisan pastry shops.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Local pastry shops along Avenue Moulay Abdellah bake hot cornes de gazelle and amlou-filled crepes.'
    ]
  },
  {
    cityId: 'agadir',
    neighborhoodName: 'Agadir Oufella',
    vibeTag: 'Historic 16th-century Kasbah ruins, cliffside cable car, sweeping ocean bay views',
    vibeEmoji: '🚡',
    safetyAtNight: 'safe',
    scamDensityLevel: 'medium',
    happinessIndex: 9.0,
    keyWarnings: [
      'Beware of unofficial guides at the hilltop offering unwanted historical tours.',
      'Mind windy cliff edges along the Kasbah perimeter ramparts.'
    ],
    bestTimeToVisit: '17:00–19:30 for sunset views across the entire bay of Agadir',
    worstTimeToVisit: 'Heavy fog mornings when ocean mist obstructs the panorama',
    communityTips: [
      {
        text: 'The new Agadir Cable Car ride up to Oufella Kasbah is smooth, modern, and offers incredible photo views.',
        source: 'google_review',
        upvotes: 120
      }
    ],
    savvyTips: [
      'Take the cable car (Téléphérique) from Dania Land base station for an easy 7-minute ride.'
    ],
    scamIds: ['fake-tour-guides-historical-sites-scam'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Illuminated Arabic inscription "God, Homeland, King" on the cliff face lights up dramatically at night.'
    ]
  },
  {
    cityId: 'agadir',
    neighborhoodName: 'Souk El Had & Charaf',
    vibeTag: 'Massive 6,000-stall walled market, spice pyramids, leathercraft, argan oil hub',
    vibeEmoji: '🛒',
    safetyAtNight: 'safe',
    scamDensityLevel: 'medium',
    happinessIndex: 8.6,
    keyWarnings: [
      'Souk El Had is closed on Mondays for weekly cleaning.',
      'Keep wallets and phones inside zipped cross-body bags in crowded aisles (Gates 6 & 9).'
    ],
    bestTimeToVisit: '10:00–13:00 for fresh spices, argan oil, and leather shopping',
    worstTimeToVisit: 'Mondays (fully closed) or 16:00–18:00 weekend crowd rushes',
    communityTips: [
      {
        text: 'Souk El Had is the largest market in the Souss region. Pure culinary argan oil and Amlou spread are sold at authentic prices.',
        source: 'tripadvisor',
        upvotes: 105
      }
    ],
    savvyTips: [
      'Enter via Gate 6 or 9 for artisan crafts and certified argan cooperatives.'
    ],
    scamIds: ['unregulated-parking-guard-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Cooperative shops inside Gate 8 sell pure Souss-Massa culinary argan oil pressed right in front of you.'
    ]
  },
  {
    cityId: 'agadir',
    neighborhoodName: 'Aourir / Banana Village & Imi Ouaddar',
    vibeTag: 'Coastal banana plantations, surf camps, seafood tagines, family waterparks',
    vibeEmoji: '🍌',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Highway N1 traffic through Aourir can be busy; use marked pedestrian crossings.',
      'Check sea conditions before swimming at non-lifeguarded beaches.'
    ],
    bestTimeToVisit: '12:00–16:00 for roadside grilled lamb tagines and fresh banana smoothies',
    worstTimeToVisit: 'Late evening after roadside stalls close',
    communityTips: [
      {
        text: 'Aourir is famous throughout Morocco for its sweet local bananas and roadside tagine cafes.',
        source: 'reddit',
        upvotes: 62
      }
    ],
    savvyTips: [
      'Aourir is the direct gateway road leading inland to the natural pools of Paradise Valley.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Wednesday weekly market (Souk Aourir) offers fresh mountain honey, almonds, and organic produce.'
    ]
  },
  {
    cityId: 'taghazout',
    neighborhoodName: 'Anchor Point & Village Beachfront',
    vibeTag: 'Surf Mecca, digital nomad hub, relaxed coastal village — sunsets and Atlantic waves',
    vibeEmoji: '🏄‍♂️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.2,
    keyWarnings: [
      'Inspect surfboards and wetsuits thoroughly for pre-existing dings before renting.',
      'Check sea tide tables before swimming near rocky point breaks.'
    ],
    bestTimeToVisit: 'October to April for world-class surf swells and sunlit rooftop working hours',
    worstTimeToVisit: 'Low season midday heat',
    communityTips: [
      {
        text: 'Taghazout is one of the most welcoming surf hubs in North Africa. Rooftop cafes with high-speed fiber internet are everywhere.',
        source: 'reddit',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Shared grand taxis connect Taghazout to Agadir center in 25 minutes for 10–15 MAD per seat.',
      'Local seafood barbecues on the beach every evening offer fresh catches of the day.'
    ],
    scamIds: ['taghazout-surf-equipment-damage-claim'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Panoramas Beach on low tide is ideal for beginners, while Anchor Point offers world-renowned right-hand point breaks.'
    ]
  },
  {
    cityId: 'taghazout',
    neighborhoodName: 'Taghazout Bay',
    vibeTag: 'Luxury eco-resort enclave, championship golf course, beach clubs, family retreats',
    vibeEmoji: '🌴',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Eco-resort precinct is spread out; golf cart shuttles or taxis are helpful for hotel hops.',
      'Always reserve beach club cabanas in advance during high season.'
    ],
    bestTimeToVisit: '10:00–18:00 for oceanfront infinity pools, surf academy lessons, and golf',
    worstTimeToVisit: 'Heavy swell days if you are seeking calm swimming water',
    communityTips: [
      {
        text: 'Taghazout Bay is the luxury side of Taghazout. World-class hotels, immaculate beach promenades, and 18-hole golf views.',
        source: 'tripadvisor',
        upvotes: 88
      }
    ],
    savvyTips: [
      'The Tazegzout Golf Course clubhouse terrace offers 180-degree panoramic cliff views over the Atlantic Ocean.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The eco-promenade connecting Fairmont and Hyatt Place is illuminated at night and perfect for peaceful oceanfront walks.'
    ]
  },
  {
    cityId: 'taghazout',
    neighborhoodName: 'Village Center (Taghazout)',
    vibeTag: 'Boho surf alleys, rooftop cafes, sunset yoga, smoothie bowls, fishing boats on the sand',
    vibeEmoji: '🧘‍♀️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.1,
    keyWarnings: [
      'Narrow village alleys have stone steps; wear comfortable shoes.',
      'Use bottled water for drinking as village plumbing infrastructure is basic.'
    ],
    bestTimeToVisit: '16:30–20:00 for rooftop sunset golden hour, mint tea, and fresh fish tagines',
    worstTimeToVisit: 'Midday heat when beach crowds disperse',
    communityTips: [
      {
        text: 'Taghazout village center has an incredible nomad energy. Everyone is friendly, relaxed, and focused on surfing and wellness.',
        source: 'reddit',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Rooftop cafes along Rue Hash Point serve organic acai bowls, avocado toasts, and Moroccan mint tea.'
    ],
    scamIds: ['taghazout-surf-equipment-damage-claim'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Local fishermen bring fresh sea bass and sardines directly onto the beach slipway every morning around 09:30.'
    ]
  },
  {
    cityId: 'taghazout',
    neighborhoodName: 'Tamraght',
    vibeTag: 'Peaceful hillside surf village, Banana Beach, Imourane rock, relaxed nomad hostels',
    vibeEmoji: '🍌',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.9,
    keyWarnings: [
      'The main road between Tamraght and Taghazout is poorly lit at night; use grand taxis or rides.',
      'Riptides at Devil’s Rock can be strong during spring high tides.'
    ],
    bestTimeToVisit: '09:00–16:00 for surfing at Banana Beach and relaxing at local surf cafes',
    worstTimeToVisit: 'Late night walking along the unlit coastal highway',
    communityTips: [
      {
        text: 'Tamraght is quieter than Taghazout village, with a genuine hillside community feel and great rooftop views.',
        source: 'google_review',
        upvotes: 75
      }
    ],
    savvyTips: [
      'Imourane Rock (Devil’s Rock) is a famous sunset spot and local surfing hub in Tamraght.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The weekly Wednesday market in nearby Aourir sells fresh mountain almonds, olive oil, and organic honey.'
    ]
  },
  {
    cityId: 'dakhla',
    neighborhoodName: 'Dakhla Lagoon',
    vibeTag: 'Desert meets Atlantic ocean, world-class kitesurfing, flamingos, serene sand dunes',
    vibeEmoji: '🪁',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'Strong wind conditions mean UV rays are deceptively intense; apply high SPF sunscreen.',
      'Book airport transfers via your eco-lodge or grand taxis rather than unmetered private cars.'
    ],
    bestTimeToVisit: 'April to October for peak kitesurfing winds and flamingo sightings',
    worstTimeToVisit: 'Windless winter calm days if you are coming specifically to kite',
    communityTips: [
      {
        text: 'Dakhla is pure magic. White dune rising out of the turquoise lagoon is a scene straight from a dream.',
        source: 'instagram',
        upvotes: 142
      }
    ],
    savvyTips: [
      'Visit the Oyster Farms (Parc à Huîtres) along the lagoon for ocean-fresh oysters harvested daily for 5–8 MAD each.',
      'Town center taxis cost 5 MAD fixed rate anywhere inside Dakhla urban limits.'
    ],
    scamIds: ['dakhla-lagoon-shuttle-markup'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Dune Blanche (White Dune) at low tide forms a natural lagoon amphitheater surrounded by white sand.'
    ]
  },
  {
    cityId: 'merzouga',
    neighborhoodName: 'Erg Chebbi Dunes',
    vibeTag: 'Saharan majesty, endless golden dunes, starry night skies, Gnawa desert music',
    vibeEmoji: '🐪',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'medium',
    happinessIndex: 9.3,
    keyWarnings: [
      'Avoid budget $30/day street tours that take you to low-quality fringe camps.',
      'Desert temperatures drop dramatically at night during winter months (November–February).'
    ],
    bestTimeToVisit: 'Late afternoon sunset camel trek into the dunes (17:00–19:30)',
    worstTimeToVisit: 'Midday summer temperatures exceeding 42°C (11:00–16:00)',
    communityTips: [
      {
        text: 'Book directly with luxury or traditional Berber desert camps in Merzouga to ensure comfortable private tents with hot showers and dune views.',
        source: 'tripadvisor',
        upvotes: 165
      }
    ],
    savvyTips: [
      'Khamlia village near Merzouga is famous for spiritual Gnawa music performances by desert musicians.',
      'Bring a portable power bank and headlight for stargazing walks on the high dunes.'
    ],
    scamIds: ['desert-tour-surcharges'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Erg Chebbi dunes reach up to 150 meters high; climbing the peak dune for sunrise offers 360-degree views stretching toward the Algerian horizon.'
    ]
  },
  {
    cityId: 'merzouga',
    neighborhoodName: 'Merzouga Village Center',
    vibeTag: 'Desert gateway, traditional mudbrick auberges, quad bike rentals, camel caravans',
    vibeEmoji: '🏜️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.1,
    keyWarnings: [
      'Verify desert tour inclusions (private tent vs shared, camel vs 4x4, water provided) before booking.',
      'Always carry extra bottled water for desert excursions.'
    ],
    bestTimeToVisit: '16:00–20:00 for booking desert trips and enjoying sunset mint tea at village auberges',
    worstTimeToVisit: 'Midday summer heat',
    communityTips: [
      {
        text: 'Merzouga village is very quiet and safe. Locals are exceptionally hospitable and treat visitors like family.',
        source: 'tripadvisor',
        upvotes: 88
      }
    ],
    savvyTips: [
      'Local desert guides offer quad and buggy tours with full safety equipment and dune instruction.'
    ],
    scamIds: ['unregistered-street-guide-tour-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Auberges in Merzouga village offer day pass pool access facing the dunes for relaxing before afternoon camel treks.'
    ]
  },
  {
    cityId: 'merzouga',
    neighborhoodName: 'Hassilabied',
    vibeTag: 'Tranquil oasis village, lush date palm groves, ancient khattara irrigation, direct dune access',
    vibeEmoji: '🌴',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.2,
    keyWarnings: [
      'Mind walking in unlit palm grove paths at night; bring a flashlight.',
      'Respect local agricultural palm gardens.'
    ],
    bestTimeToVisit: '09:00–12:00 for walking through the shaded palm oasis gardens and seeing ancient khattara irrigation canals',
    worstTimeToVisit: 'Peak midday heat in mid-summer',
    communityTips: [
      {
        text: 'Hassilabied is much quieter than central Merzouga with beautiful palm gardens right at the base of the orange dunes.',
        source: 'google_review',
        upvotes: 72
      }
    ],
    savvyTips: [
      'Hassilabied palm oasis is an impressive example of community-managed desert agriculture.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The traditional pottery and carpet weaving cooperative in Hassilabied demonstrates authentic Saharan crafts.'
    ]
  },
  {
    cityId: 'merzouga',
    neighborhoodName: 'Khamlia (Gnawa Village)',
    vibeTag: 'Gnawa musical heritage, spiritual iron castanets (qraqeb), mint tea hospitality, Saharan warmth',
    vibeEmoji: '🪘',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'Tipping Gnawa musicians after their performance is customary and supports the local community.',
      'Village roads are unpaved sand; drive carefully.'
    ],
    bestTimeToVisit: '10:30–13:00 and 16:00–18:30 for listening to live Gnawa music at Association Les Pigeons du Sable',
    worstTimeToVisit: 'Midday heat',
    communityTips: [
      {
        text: 'Visiting Khamlia to hear Gnawa music is one of the most moving cultural experiences in Morocco. The warmth of the musicians is incredible.',
        source: 'reddit',
        upvotes: 120
      }
    ],
    savvyTips: [
      'Khamlia musicians play castanets (qraqeb) and guembri lute in hypnotic spiritual rhythms passed down through centuries.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Local teahouses in Khamlia serve homemade Berber Medfouna (stuffed desert flatbread) upon advance request.'
    ]
  },
  {
    cityId: 'merzouga',
    neighborhoodName: 'Rissani (Sijilmassa & Souk)',
    vibeTag: 'Ancient caravan crossroads, date palm market, donkey parking souk, historic Moulay Ali Cherif mausoleum',
    vibeEmoji: '🥙',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Rissani market gets very crowded on market days (Tuesday, Thursday, Sunday); guard personal belongings.',
      'Bargain politely for dates and spices in the main covered market.'
    ],
    bestTimeToVisit: '09:00–13:00 on market days (Tue, Thu, Sun) to experience the famous date souk and donkey market',
    worstTimeToVisit: 'Non-market days when the main souk thins out',
    communityTips: [
      {
        text: 'Rissani is a true taste of old Morocco. The Medfouna (Berber pizza) at local bakeries near the market is mouthwatering.',
        source: 'tripadvisor',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Visit the Mausoleum of Moulay Ali Cherif, founder of the Alaouite dynasty, for stunning Zellige tilework.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Rissani produces over 100 varieties of dates; Majhool dates from the Tafilalet oasis are world-famous.'
    ]
  },
  {
    cityId: 'merzouga',
    neighborhoodName: 'Taouz & Prehistoric Rock Art',
    vibeTag: 'Southern desert frontier, prehistoric petroglyphs, kohl mineral mines, wild black desert reg',
    vibeEmoji: '🪨',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.7,
    keyWarnings: [
      'Taouz is near the desert frontier; hire an experienced local 4x4 guide with desert navigation experience.',
      'Carry abundant drinking water and desert sun gear.'
    ],
    bestTimeToVisit: '08:30–12:00 for exploring ancient rock carvings and mineral sites with a local driver',
    worstTimeToVisit: 'Unguided exploration or late night driving',
    communityTips: [
      {
        text: 'Taouz offers a wild, untouched desert landscape with prehistoric animal carvings etched into black rock outcrops.',
        source: 'google_review',
        upvotes: 60
      }
    ],
    savvyTips: [
      'Petroglyphs near Taouz date back thousands of years and depict ancient African fauna including ostriches and cattle.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Old French colonial Kohl mines in the mountains near Taouz produce natural mineral eye makeup rock.'
    ]
  },
  {
    cityId: 'rabat',
    neighborhoodName: 'Kasbah des Oudaias & Agdal',
    vibeTag: 'Capital elegance, Andalusian gardens, cliffside cafes, coastal tranquility',
    vibeEmoji: '🏛️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.0,
    keyWarnings: [
      'Petit taxis strictly use meters in Rabat; insist on the meter.',
      'Respect diplomatic and government building zones where photography is restricted.'
    ],
    bestTimeToVisit: '15:00–18:00 to stroll through Andalusian Gardens and drink mint tea at Café Maure overlooking the Bou Regreg river',
    worstTimeToVisit: 'Official holiday closures',
    communityTips: [
      {
        text: 'Rabat is incredibly relaxed, clean, and modern. The tramway system links Rabat and Salé smoothly for 6 MAD per ticket.',
        source: 'reddit',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Visit Hassan Tower and the Mausoleum of Mohammed V for world-class Moroccan architecture with free admission.',
      'The modern tramway is fast, air-conditioned, and effortless for navigating between train stations and sights.'
    ],
    scamIds: ['taxi-no-meter', 'parking-guardian-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Café Maure inside the Oudaias Kasbah offers traditional almond pastries and mint tea with panoramic river views.'
    ]
  },
  {
    cityId: 'rabat',
    neighborhoodName: 'Hassan District & Chellah',
    vibeTag: 'Iconic imperial monuments, mausoleum gardens, royal guards, and tramway boulevards',
    vibeEmoji: '👑',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'Royal guard patrols are strict around the Mausoleum; dress respectfully.',
      'Chellah necropolis entry closes at dusk.'
    ],
    bestTimeToVisit: '09:00–12:00 for visiting Hassan Tower and Mausoleum before afternoon crowds',
    worstTimeToVisit: '13:00–15:00 midday heat in unshaded monument plazas',
    communityTips: [
      {
        text: 'The Hassan district is exceptionally safe, spotless, and easy to navigate via the Rabat Tramway.',
        source: 'tripadvisor',
        upvotes: 82
      }
    ],
    savvyTips: [
      'Take the Tramway Line 1 directly to Tour Hassan station for seamless access to the monuments.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The restored Chellah gardens house ancient Roman ruins and Marinid tombs surrounded by nesting storks.'
    ]
  },
  {
    cityId: 'rabat',
    neighborhoodName: 'Rabat Medina',
    vibeTag: 'Calm traditional souks, artisan leather and carpet avenues, hassle-free market strolls',
    vibeEmoji: '🏺',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Rue Souika shops close around 20:00, after which medina avenues become quiet.',
      'Watch for bicycles and handcarts on Rue des Consuls during daytime market hours.'
    ],
    bestTimeToVisit: '10:00–16:00 for relaxed leather, carpet, and spice shopping on Rue des Consuls',
    worstTimeToVisit: 'After 21:00 when market stalls lock up and streets empty out',
    communityTips: [
      {
        text: 'Rabat Medina is the most relaxed medina in Morocco. Vendors let you browse peacefully without sales pressure.',
        source: 'reddit',
        upvotes: 104
      }
    ],
    savvyTips: [
      'Rue des Consuls is famous for authentic Rabat woven carpets and leather craft workshops.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Moorish Andalusian teahouses near Bab El Had serve fresh mint tea and homemade ghriba cookies at local prices.'
    ]
  },
  {
    cityId: 'rabat',
    neighborhoodName: 'Souissi (Les Ambassadeurs)',
    vibeTag: 'Ultra-exclusive diplomatic zone, embassy villas, quiet pine avenues, private security',
    vibeEmoji: '🌲',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.5,
    keyWarnings: [
      'Strictly residential and diplomatic; carry ID as private security patrols are active.',
      'Few walking cafes — arrange taxi or ride-hailing app transport for moving around.'
    ],
    bestTimeToVisit: '10:00–16:00 for visiting Villa des Arts or diplomatic cultural exhibitions',
    worstTimeToVisit: 'Late night walking (exclusively quiet residential villa streets)',
    communityTips: [
      {
        text: 'Souissi is the quietest and safest neighborhood in Rabat. Home to diplomatic missions and luxury residences.',
        source: 'facebook',
        upvotes: 45
      }
    ],
    savvyTips: [
      'Use Careem or inDrive for guaranteed pickups in Souissi.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The botanical grounds around Villa des Arts host contemporary Moroccan art retrospectives in a peaceful Art Deco setting.'
    ]
  },
  {
    cityId: 'rabat',
    neighborhoodName: 'Océan & L’Océan Lighthouse',
    vibeTag: 'Coastal Atlantic breeze, neighborhood fish markets, oceanfront strolls',
    vibeEmoji: '⚓',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.3,
    keyWarnings: [
      'Avoid walking along isolated unlit rocky ocean paths late after dark.',
      'Mind ocean wave spray along the sea wall during high winter tides.'
    ],
    bestTimeToVisit: '11:00–15:00 for fresh coastal grilled fish lunches near the local market',
    worstTimeToVisit: 'Late night on deserted beach rocks',
    communityTips: [
      {
        text: 'L’Océan is a great local neighborhood for budget seafood diners and ocean air walks along the corniche road.',
        source: 'google_review',
        upvotes: 60
      }
    ],
    savvyTips: [
      'Walk from L’Océan along the coastal road toward the Kasbah des Oudaias for sweeping ocean vistas.'
    ],
    scamIds: ['unregulated-parking-guard-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Small neighborhood fish fryers near Marché Océan cook fresh daily catches at unbeatable local prices.'
    ]
  },
  // --- TANGIER NEIGHBORHOODS ---
  {
    cityId: 'tangier',
    neighborhoodName: 'Kasbah & Old Medina',
    vibeTag: 'Bohemian cliffside heritage, winding alleys, historic cafes, ocean vistas',
    vibeEmoji: '🏰',
    safetyAtNight: 'safe-with-caution',
    scamDensityLevel: 'medium',
    happinessIndex: 8.8,
    keyWarnings: [
      'Alleys around Petit Socco can get crowded with touts and carpet sellers.',
      'Watch your step on steep stone stairways during damp ocean mist.'
    ],
    bestTimeToVisit: '16:00–19:00 for golden hour walks from Kasbah Museum down through Petit Socco',
    worstTimeToVisit: 'Late Friday mornings during main mosque prayer closures',
    communityTips: [
      {
        text: 'The Tangier Kasbah is incredibly atmospheric. Stick to main staircases and ignore persistent carpet shop invites if you are not buying.',
        source: 'reddit',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Visit the Kasbah Museum of Mediterranean Cultures inside the former Sultan\'s Palace (Dar el-Makhzen).',
      'Walk out to the Bab Haha gate for panoramic views over the Strait of Gibraltar.'
    ],
    scamIds: ['tangier-kasbah-persuasive-carpet-hostage'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Café Hafa on the cliffside has served mint tea to William Burroughs, The Rolling Stones, and local poets since 1921.'
    ]
  },
  {
    cityId: 'tangier',
    neighborhoodName: 'Marshan & Iberia',
    vibeTag: 'Leafy diplomatic quarter, colonial villas, tranquil parks, residential charm',
    vibeEmoji: '🌿',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Fewer taxis patrol interior residential streets late at night; use main avenues.'
    ],
    bestTimeToVisit: 'Morning or late afternoon for a peaceful stroll past Forbes Museum and Marshan Palace',
    worstTimeToVisit: 'Midday peak sun when park benches offer little shade',
    communityTips: [
      {
        text: 'Marshan is where Tangier locals go to escape the medina hustle. The Phoenician Tombs cut into the cliff rocks are free to visit and offer stunning sea views.',
        source: 'tripadvisor',
        upvotes: 85
      }
    ],
    savvyTips: [
      'Sit on the stone ledge at the Phoenician Tombs (Nécropole Phénicienne) at sunset to watch ships entering the Atlantic.',
      'Enjoy fresh avocado juices and pastries at local cafes along Marshan plateau.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Café Marshan serves some of the best mint tea and sweet chebakia in a completely non-touristy neighborhood setting.'
    ]
  },

  // --- CHEFCHAOUEN NEIGHBORHOODS ---
  {
    cityId: 'chefchaouen',
    neighborhoodName: 'Outa El Hammam & Lower Medina',
    vibeTag: 'Vibrant heart of the Blue Pearl, outdoor cafes, Kasbah fortress, market bustle',
    vibeEmoji: '💙',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'medium',
    happinessIndex: 8.9,
    keyWarnings: [
      'Persistent street touts offering hashish or mountain treks along main alleyways.',
      'Restaurants on the main square often charge higher prices; check menus carefully.'
    ],
    bestTimeToVisit: '08:00–10:00 for quiet photography before day-trip tour buses arrive',
    worstTimeToVisit: '12:00–15:00 when day-trippers fill the narrow blue lanes',
    communityTips: [
      {
        text: 'Chefchaouen is extremely peaceful and safe. Outa El Hammam square is great for people watching over mint tea.',
        source: 'reddit',
        upvotes: 140
      }
    ],
    savvyTips: [
      'Tour the 15th-century Kasbah fortress in the square for 60 MAD to climb the tower for panoramic blue roof views.',
      'Firmly ignore solicitations for illegal substances in the alleys.'
    ],
    scamIds: ['chefchaouen-kif-solicitation-and-extortion'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Woven wool blankets and goat cheese (Jben) are authentic Chefchaouen specialties sold at local women\'s cooperatives.'
    ]
  },
  {
    cityId: 'chefchaouen',
    neighborhoodName: 'Ras El Ma & Upper Medina',
    vibeTag: 'Mountain spring freshwater, rushing waterfalls, hill trails, serene residential blue',
    vibeEmoji: '💦',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.2,
    keyWarnings: [
      'Watch out for slippery stone steps near the washing pools at Ras El Ma spring.'
    ],
    bestTimeToVisit: '17:00–19:30 to hike up from Ras El Ma to the Spanish Mosque for sunset',
    worstTimeToVisit: 'Dark night hours on unlit mountain trail sections',
    communityTips: [
      {
        text: 'Ras El Ma is where local women wash rugs in spring water. The 20-minute hike up to the Spanish Mosque from here is the best view in Morocco.',
        source: 'tripadvisor',
        upvotes: 125
      }
    ],
    savvyTips: [
      'Bring a bottle of water for the gentle 20-minute uphill hike to the Spanish Mosque.',
      'Ignore self-proclaimed toll collectors along the public trail.'
    ],
    scamIds: ['chefchaouen-spanish-mosque-private-viewpoint-fee'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Freshly squeezed orange juice stands near Ras El Ma bridge use cold mountain river water to chill the fruit naturally.'
    ]
  },

  {
    cityId: 'chefchaouen',
    neighborhoodName: 'Akchour Waterfalls & God’s Bridge',
    vibeTag: 'Spectacular Rif mountain canyon, turquoise pools, natural rock arch, hiking paradise',
    vibeEmoji: '⛰️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.4,
    keyWarnings: [
      'Trail rocks near the riverbed can be slick; wear proper hiking shoes with good grip.',
      'Always start your hike back before 17:00 to avoid navigating river canyon paths in the dark.'
    ],
    bestTimeToVisit: '09:00–15:00 for optimal daylight hiking to the Grand Cascade and God’s Bridge (Pont de Dieu)',
    worstTimeToVisit: 'After 17:00 or during heavy rainstorms when canyon water levels rise',
    communityTips: [
      {
        text: 'Akchour is one of the most stunning natural hikes in North Africa. The water in the river pools is crystal clear.',
        source: 'tripadvisor',
        upvotes: 115
      }
    ],
    savvyTips: [
      'Take a shared Grand Taxi from Chefchaouen taxi station directly to Akchour trailhead (approx. 25-30 MAD per seat).'
    ],
    scamIds: ['unregulated-parking-guard-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Small rustic riverside tagine stands along the trail cook beef and prune tagines directly over wood fires.'
    ]
  },
  {
    cityId: 'chefchaouen',
    neighborhoodName: 'Talassemtane National Park',
    vibeTag: 'Expansive fir forest reserve, dramatic mountain peaks, pristine biodiversity',
    vibeEmoji: '🌲',
    safetyAtNight: 'caution',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Cell phone coverage is spotty inside deep forest valleys; download offline maps.',
      'Hiring a licensed mountain guide is recommended for multi-hour treks.'
    ],
    bestTimeToVisit: '08:30–16:00 for guided day treks through rare Moroccan fir trees (Abies marocana)',
    worstTimeToVisit: 'Overnight without proper camping equipment or authorized mountain guides',
    communityTips: [
      {
        text: 'Talassemtane is a UNESCO biosphere reserve with incredible mountain air and cedar forests.',
        source: 'reddit',
        upvotes: 70
      }
    ],
    savvyTips: [
      'Book authorized mountain guides through the Chefchaouen Association of Eco-Tourism.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Traditional Berber guesthouses in the high village of Bab Taza offer homestyle tagines made with wild mountain herbs.'
    ]
  },
  {
    cityId: 'chefchaouen',
    neighborhoodName: 'Derdara',
    vibeTag: 'Mountain highway junction, local agricultural market, grilled meat, and goat cheese hub',
    vibeEmoji: '🥩',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.5,
    keyWarnings: [
      'Busy road junction; cross carefully near taxi stops.',
      'Limited tourist lodgings — mostly a transport and culinary pitstop.'
    ],
    bestTimeToVisit: '12:00–15:00 for roadside wood-fired grilled kefta and fresh goat cheese',
    worstTimeToVisit: 'Late night when highway diners close',
    communityTips: [
      {
        text: 'Derdara is famous among locals for the freshest mountain goat cheese (Jben) sold right along the highway.',
        source: 'google_review',
        upvotes: 48
      }
    ],
    savvyTips: [
      'Great stop for a quick lunch when traveling between Chefchaouen, Tetouan, and Al Hoceima.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Roadside artisan dairies serve fresh whey drink (Lben) alongside hot wood-oven bread.'
    ]
  },

  // --- ESSAOUIRA NEIGHBORHOODS ---
  {
    cityId: 'essaouira',
    neighborhoodName: 'Medina & Ramparts (Skala)',
    vibeTag: 'Atlantic ocean breeze, whitewashed stone ramparts, thuya woodcraft, coastal chill',
    vibeEmoji: '🌊',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.3,
    keyWarnings: [
      'Strong Alizés trade winds (especially in summer) can blow dust and sand; carry a light jacket.',
      'Watch out for sea spray on the Skala de la Ville cannon bastions.'
    ],
    bestTimeToVisit: '16:00–19:00 for walking the ramparts and watching seagulls against sunset',
    worstTimeToVisit: 'Extreme windy afternoons if unequipped for coastal gusts',
    communityTips: [
      {
        text: 'Essaouira is the most relaxed medina in Morocco. Sellers are friendly and never pushy compared to Marrakech.',
        source: 'reddit',
        upvotes: 180
      }
    ],
    savvyTips: [
      'Visit the Skala de la Kasbah where Game of Thrones was filmed for 50 MAD.',
      'Explore thuya wood artisan workshops tucked into the rampart vaults.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Traditional Gnaawa music sanctuaries (Zawiyas) host intimate evening acoustic lila sessions during festival seasons.'
    ]
  },
  {
    cityId: 'essaouira',
    neighborhoodName: 'Port Area & Ramparts (Port de Pêche)',
    vibeTag: 'Bustling blue fishing harbor, fresh sardine grills, stone fortress gates, seabird vistas',
    vibeEmoji: '⚓',
    safetyAtNight: 'safe',
    scamDensityLevel: 'medium',
    happinessIndex: 9.0,
    keyWarnings: [
      'Port docks can be slippery near fish gutting tables; wear sturdy closed shoes.',
      'Agree on fish grill prices per kilo before sitting at open-air harbor food stalls.'
    ],
    bestTimeToVisit: '10:30–14:00 to see wooden fishing boats unload daily catches and taste outdoor grilled fish',
    worstTimeToVisit: 'Late evening when harbor dock markets close',
    communityTips: [
      {
        text: 'The blue boats in Essaouira port are an iconic Moroccan photo spot. You can watch traditional wooden shipwrights at work.',
        source: 'tripadvisor',
        upvotes: 125
      }
    ],
    savvyTips: [
      'Walk up to Bab El-Bahr (Sea Gate) for panoramic views of the Mogador Islands.'
    ],
    scamIds: ['overpriced-port-fish-stall-menu-switch'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Grill stalls at the port entrance cook fresh sea bream and sardines over charcoal for local prices.'
    ]
  },
  {
    cityId: 'essaouira',
    neighborhoodName: 'Mellah (Historic Jewish Quarter)',
    vibeTag: 'Historic Jewish heritage, carved star-of-David doorways, restored synagogues, quiet alleys',
    vibeEmoji: '✡️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.7,
    keyWarnings: [
      'Avoid unlit ruinous lanes along Rue Mellah late at night.',
      'Watch out for ongoing masonry restoration scaffolding.'
    ],
    bestTimeToVisit: '10:00–15:00 for visiting the restored Simon Attias Synagogue and Jewish Cultural Center',
    worstTimeToVisit: 'Late night when residential alleys are unlit',
    communityTips: [
      {
        text: 'The Mellah of Essaouira is undergoing beautiful preservation. The Simon Attias synagogue is a tranquil treasure.',
        source: 'google_review',
        upvotes: 68
      }
    ],
    savvyTips: [
      'Look up at historic doorways to spot traditional Hebrew inscriptions and Star of David stone carvings.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Haim Pinto Synagogue hosts historic pilgrimage archives documenting centuries of Jewish-Moroccan co-existence.'
    ]
  },
  {
    cityId: 'essaouira',
    neighborhoodName: 'Beachfront & Corniche (Plage d’Essaouira)',
    vibeTag: 'Broad Atlantic sands, windsurfing, kitesurfing, camel beach rides, sunset palm promenade',
    vibeEmoji: '🏖️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.1,
    keyWarnings: [
      'Strong undertow currents can occur on windy days; swim near designated lifeguard towers.',
      'Agree on camel ride prices before mounting on the beach.'
    ],
    bestTimeToVisit: '14:00–19:30 for windsurfing, beach walks, and oceanfront sunset cafe drinks',
    worstTimeToVisit: 'Midday when Alizés trade winds reach peak velocity',
    communityTips: [
      {
        text: 'Essaouira beach promenade is clean, spacious, and safe for night walks. The view of the castle ruins in the sea at sunset is unreal.',
        source: 'reddit',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Beachside surf schools offer beginner-friendly windsurfing and kitesurfing rentals.'
    ],
    scamIds: ['unregulated-beach-horse-camel-ride-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Beachside cabana cafes near Borj El Barod serve hot spiced mint tea with local almond sables.'
    ]
  },
  {
    cityId: 'essaouira',
    neighborhoodName: 'Diabat & Borj El Berod',
    vibeTag: 'Boho village, Jimi Hendrix music lore, Dar Sultan sand castle ruins, horseback dune rides',
    vibeEmoji: '🎸',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.9,
    keyWarnings: [
      'Sand dunes near Borj El Berod require sturdy shoes for walking.',
      'Use official quad biking companies with helmet safety gear.'
    ],
    bestTimeToVisit: '15:00–19:00 for horseback riding along the river estuary and visiting the Jimi Hendrix cafe',
    worstTimeToVisit: 'Late night after village teahouses close',
    communityTips: [
      {
        text: 'Diabat is a calm bohemian retreat 5 minutes south of Essaouira. Riding horses through the dunes at sunset is unforgettable.',
        source: 'tripadvisor',
        upvotes: 82
      }
    ],
    savvyTips: [
      'Visit the half-buried Dar Sultan ruins in the sand dunes that inspired 1960s rock legends.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Café Jimi Hendrix in Diabat plays vintage 1960s vinyl records and serves homestyle Berber tagines.'
    ]
  },
  {
    cityId: 'essaouira',
    neighborhoodName: 'Ghazoua',
    vibeTag: 'Quiet inland argan village, eco-lodges, yoga retreats, peaceful residential haven',
    vibeEmoji: '🌿',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.8,
    keyWarnings: [
      'Located 8km south of the medina; petit taxis or personal cars are required.',
      'Limited street lighting in rural villa lanes.'
    ],
    bestTimeToVisit: '10:00–16:00 for visiting organic argan oil cooperatives and eco-lodge gardens',
    worstTimeToVisit: 'Late night walking without private transportation',
    communityTips: [
      {
        text: 'Ghazoua is where expats and long-term travelers stay for quiet green surroundings away from city wind.',
        source: 'facebook',
        upvotes: 55
      }
    ],
    savvyTips: [
      'Argan oil women’s cooperatives in Ghazoua demonstrate hand-pressing culinary argan oil.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Organic farm stands along the N1 route sell fresh argan honey and amlou spread.'
    ]
  },

  // --- DAKHLA NEIGHBORHOODS ---
  {
    cityId: 'dakhla',
    neighborhoodName: 'Dakhla Lagoon (PK25 & Dune Blanche)',
    vibeTag: 'World-class kitesurfing, turquoise lagoon waters, desert dunes meeting ocean, eco-resort bliss',
    vibeEmoji: '🪁',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'UV radiation is intense due to water reflection; wear SPF 50+ and a hat.',
      'Strong offshore wind conditions require staying within resort safety boat visual zones.'
    ],
    bestTimeToVisit: '11:00–17:00 during peak wind hours for kiteboarding and lagoon excursions',
    worstTimeToVisit: 'Windless winter days if expecting high-speed kitesurfing',
    communityTips: [
      {
        text: 'PK25 lagoon is absolute paradise for kitesurfers. Flat butter-smooth water and consistent wind 300 days a year.',
        source: 'reddit',
        upvotes: 135
      }
    ],
    savvyTips: [
      'Pre-arrange airport transfers with your resort to avoid inflated unmetered taxi fares.',
      'Take a 4x4 trip to Dune Blanche at high tide when the white sand dune is encircled by water.'
    ],
    scamIds: ['dakhla-airport-lagoon-taxi-monopoly-markup'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Oyster farms along the lagoon edge serve freshly harvested oysters for 5 MAD each with lemon slices.'
    ]
  },
  {
    cityId: 'dakhla',
    neighborhoodName: 'Pointe du Dragon & Dragon Island',
    vibeTag: 'Dragon-shaped island in Dakhla Bay, low-tide sandbar walks, pink flamingos, serene boat trips',
    vibeEmoji: '🐉',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Mind tide schedules when walking the sandbar; water rises quickly at high tide.',
      'Wear water shoes to protect feet from sharp shell fragments.'
    ],
    bestTimeToVisit: '09:00–13:00 at low tide for boat excursions and walking across the exposed sand bar',
    worstTimeToVisit: 'High tide without a scheduled boat charter',
    communityTips: [
      {
        text: 'Dragon Island looks like a sleeping dragon in the bay. Walking out on the sand spit at low tide feels like another planet.',
        source: 'tripadvisor',
        upvotes: 98
      }
    ],
    savvyTips: [
      'Catamaran and zodiac boat tours run daily from PK25 resorts to Dragon Island.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Migratory pink flamingos nest in the shallow warm waters on the island’s sheltered eastern shore during winter.'
    ]
  },
  {
    cityId: 'dakhla',
    neighborhoodName: 'Foum El Bouir Beach (Oum Labouir)',
    vibeTag: 'Atlantic ocean wave surfing, oceanfront cafes, sunset vistas, coastal sea breeze',
    vibeEmoji: '🏄‍♀️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.1,
    keyWarnings: [
      'Atlantic wave currents can be strong; surfing is recommended for intermediate-to-advanced surfers.',
      'Limited street lighting on ocean roads after sunset.'
    ],
    bestTimeToVisit: '13:00–18:00 for ocean wave surfing, beach walks, and fresh grilled fish at beach clubs',
    worstTimeToVisit: 'Late night when beach cafes close',
    communityTips: [
      {
        text: 'Foum El Bouir is the main ocean wave spot near Dakhla town. Great right-hand point break when swells roll in.',
        source: 'google_review',
        upvotes: 84
      }
    ],
    savvyTips: [
      'Westpoint resort and surrounding beach clubs offer board rentals and surf lessons directly on the beach.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Cliffside beach cafes serve hot spiced tea and fresh calamari right overlooking the surf break.'
    ]
  },
  {
    cityId: 'dakhla',
    neighborhoodName: 'Lassarga (Pointe de Lassarga)',
    vibeTag: 'Wild southern cape, ocean meets lagoon, eco-lodges, pristine sand dunes, world-class waves',
    vibeEmoji: '🌅',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.2,
    keyWarnings: [
      'Pointe de Lassarga is remote; arrange 4x4 or eco-lodge transport in advance.',
      'Respect local artisanal fishing zones.'
    ],
    bestTimeToVisit: '10:00–18:00 for experiencing both flat water and wave surfing in one spot',
    worstTimeToVisit: 'Late night without booked accommodation',
    communityTips: [
      {
        text: 'Lassarga is magical because you have the Atlantic ocean on one side and the calm lagoon on the other side of a narrow sand strip.',
        source: 'reddit',
        upvotes: 112
      }
    ],
    savvyTips: [
      'Ocean Vagabond Lassarga offers wooden eco-bungalows with direct views of the point break.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'At low tide, natural sea tide pools form warm saltwater swimming baths along the cape.'
    ]
  },
  {
    cityId: 'dakhla',
    neighborhoodName: 'Imlili Desert Site & White Dune',
    vibeTag: 'Sahara desert pools with fish, pure white sand dunes, 4x4 adventure, desert oasis',
    vibeEmoji: '🏜️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Desert sun exposure is intense; carry ample water, sunscreen, and head coverings.',
      'Travel with licensed 4x4 drivers; off-road desert tracks require experienced navigation.'
    ],
    bestTimeToVisit: '08:30–12:30 for morning 4x4 desert safari before peak afternoon heat',
    worstTimeToVisit: 'Midday unshaded desert heat in mid-summer',
    communityTips: [
      {
        text: 'The saltwater pools in Imlili have tiny fish that nibble your feet like a natural spa treatment in the middle of the desert!',
        source: 'tripadvisor',
        upvotes: 105
      }
    ],
    savvyTips: [
      'Authorized 4x4 excursion guides combine Imlili desert pools, Dune Blanche, and oyster farm lunches in one day trip.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Freshwater desert wells at Imlili are surrounded by green flora that attract migratory Saharan birds.'
    ]
  },
  {
    cityId: 'dakhla',
    neighborhoodName: 'City Center & Town Waterfront (Centre Ville)',
    vibeTag: 'Sahrawi tea culture, Souk Lmessira, waterfront promenade, fresh seafood, peaceful town life',
    vibeEmoji: '🍵',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.9,
    keyWarnings: [
      'Check fish prices per kilo at harbor restaurants before ordering.',
      'Dakhla city center is relaxed; respect conservative Sahrawi dress norms in markets.'
    ],
    bestTimeToVisit: '17:00–21:30 for evening promenade strolls, Sahrawi mint tea, and fresh seafood dinners',
    worstTimeToVisit: 'Early afternoon during siesta hour when shops close',
    communityTips: [
      {
        text: 'Dakhla city center is extremely safe and peaceful. The evening tea plazas on Place Hassan II are wonderful for people watching.',
        source: 'facebook',
        upvotes: 76
      }
    ],
    savvyTips: [
      'Souk Lmessira sells authentic Sahrawi melhfa fabrics, camel milk caramel, and local spices.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Local seafood restaurants near the port serve grilled octopus and royal lobster at a fraction of resort prices.'
    ]
  },

  // --- MEKNES NEIGHBORHOODS ---
  {
    cityId: 'meknes',
    neighborhoodName: 'Place El-Hedim & Imperial City',
    vibeTag: 'Grand Ismailian architecture, monumental Bab Mansour gate, bustling night plaza, authentic souks',
    vibeEmoji: '🏛️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'medium',
    happinessIndex: 8.6,
    keyWarnings: [
      'Watch personal belongings in Place El-Hedim when evening crowds gather for street performers.',
      'Politely decline unofficial guide offers at the entrances to the covered souk.'
    ],
    bestTimeToVisit: 'Late afternoon and evening (17:00–21:00) when Place El-Hedim comes alive with music and street life',
    worstTimeToVisit: 'Midday summer sun on unshaded stone plazas',
    communityTips: [
      {
        text: 'Meknes is much calmer than nearby Fes. Place El Hedim in the evening has a great local atmosphere with food stalls and storytellers.',
        source: 'tripadvisor',
        upvotes: 104
      }
    ],
    savvyTips: [
      'Enjoy mint tea on a rooftop cafe overlooking Bab Mansour and Place El-Hedim at sunset.',
      'Meknes medina covered food markets sell exceptional local olives, spices, and wild honeys at local prices.'
    ],
    scamIds: ['fake-guide-closed-way'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Mausoleum of Moulay Ismail features exquisite zellige tilework and peaceful marble courtyards with free admission.'
    ]
  },
  {
    cityId: 'meknes',
    neighborhoodName: 'Hamria (Ville Nouvelle)',
    vibeTag: 'Tree-lined French colonial avenues, lively European-style cafes, train station hub, safe night walks',
    vibeEmoji: '☕',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.9,
    keyWarnings: [
      'Petit taxis always use meters here; ensure the driver flips the meter at departure.',
      'Main banks and ATMs are clustered along Avenue Allal Ben Abdellah.'
    ],
    bestTimeToVisit: 'Morning coffee or late evening promenade along Avenue FAR and Avenue Allal Ben Abdellah',
    worstTimeToVisit: 'Late Sunday afternoon when some retail shops close',
    communityTips: [
      {
        text: 'Hamria is modern, super safe, and full of pleasant sidewalk cafes. Very easy to walk around at night after arriving by train.',
        source: 'reddit',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Hamria is the best neighborhood for modern dining, bakeries, fast Wi-Fi cafes, and comfortable evening strolls.',
      'Petit Taxis between Hamria and Place El-Hedim cost around 7–10 MAD on the meter.'
    ],
    scamIds: ['taxi-no-meter'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the Mercado Municipal (covered market) in Hamria for fresh fruits, local cheeses, and quick grilled sandwiches.'
    ]
  },
  {
    cityId: 'meknes',
    neighborhoodName: 'Heri es-Souani & Sahrij Swani',
    vibeTag: 'Colossal 17th-century royal granaries, monumental stone arches, vast peaceful water basin',
    vibeEmoji: '🏰',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Check official opening hours for Heri es-Souani as entry closes around 17:00.',
      'Bring water as there are limited shops inside the royal granary complex.'
    ],
    bestTimeToVisit: '09:00–12:00 to explore the cool interior stone vaults or 16:30 for sunset walks around Agdal Basin',
    worstTimeToVisit: 'During midday heat when walking around the unshaded Agdal Lake',
    communityTips: [
      {
        text: 'Heri es-Souani royal granaries are breathtakingly huge and cool inside even on hot days. Surrounding Agdal basin is lovely for walks.',
        source: 'google_review',
        upvotes: 88
      }
    ],
    savvyTips: [
      'Official entry ticket to Heri es-Souani is approx. 70 MAD per person.',
      'Walk along the perimeter of Sahrij Swani (Agdal Basin) where local families gather in the late afternoon.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The massive cypress trees and thick stone walls keep the interior of Heri es-Souani naturally cool (20°C) year-round.'
    ]
  },
  {
    cityId: 'meknes',
    neighborhoodName: 'Volubilis & Moulay Idriss Zerhoun',
    vibeTag: 'UNESCO Roman mosaics, ancient triumphal arch, holy whitewashed mountain town, serene olive groves',
    vibeEmoji: '🏺',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.5,
    keyWarnings: [
      'Volubilis site has minimal shade; bring a hat, sunscreen, and plenty of water.',
      'Hire official licensed guides at the Volubilis entrance ticket booth to avoid self-appointed touts outside.'
    ],
    bestTimeToVisit: 'Early morning 08:30–11:00 or late afternoon 16:00–18:30 when golden sunlight illuminates Roman mosaics',
    worstTimeToVisit: 'Midday 12:00–15:00 during summer due to intense heat on open ruins',
    communityTips: [
      {
        text: 'Volubilis is incredible! Intact Roman floor mosaics in situ. Shared Grand Taxis from Meknes (Institute / El Djedid) cost 15-20 MAD.',
        source: 'tripadvisor',
        upvotes: 132
      }
    ],
    savvyTips: [
      'Take a shared Grand Taxi from Meknes terminal to Moulay Idriss, then a 5-minute local taxi to Volubilis gate.',
      'Combine Volubilis with lunch in Moulay Idriss Zerhoun overlooking the holy hillside and surrounding valley.'
    ],
    scamIds: ['meknes-volubilis-unofficial-guide-trap'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Look for the perfectly preserved Decumanus Maximus and Basilica floor mosaics depicting the 12 Labors of Hercules.'
    ]
  },

  // --- AL HOCEIMA NEIGHBORHOODS ---
  {
    cityId: 'al_hoceima',
    neighborhoodName: 'Place Mohammed VI & Quemado Bay',
    vibeTag: 'Mediterranean coastal cliffs, turquoise coves, Rif mountain backdrop, seafood gastronomy',
    vibeEmoji: '🏖️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.9,
    keyWarnings: [
      'Summer traffic near Quemado beach parking can be tight; park near Place Mohammed VI.',
      'Some cliffside stairs down to beaches are steep; wear proper footwear.'
    ],
    bestTimeToVisit: '09:00–13:00 for morning beach swimming at Quemado Cove followed by grilled fish lunch',
    worstTimeToVisit: 'Peak August weekend crowds when beach space is limited',
    communityTips: [
      {
        text: 'Al Hoceima has some of the clearest turquoise sea water in the Mediterranean. Quemado beach is surrounded by green cliffs.',
        source: 'google_review',
        upvotes: 82
      }
    ],
    savvyTips: [
      'Eat fresh Mediterranean sardines and sea bass at harbor fish stalls near the port.',
      'Agree on beach sunbed or parasol rental rates before settling at Quemado Beach.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Morro Viejo viewpoint overlooking Quemado Bay offers breathtaking sunsets over Mediterranean waters.'
    ]
  },
  {
    cityId: 'al_hoceima',
    neighborhoodName: 'Cala Bonita & Miramar',
    vibeTag: 'Sheltered golden cove, pine-fringed hills, family beach park, tranquil waters',
    vibeEmoji: '🌊',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Guardian parking attendants collect 5–10 MAD fee at the beach parking entry.',
      'Shallow cove waters make it ideal for children, but keep an eye on summer crowds.'
    ],
    bestTimeToVisit: '10:00–14:00 for calm swimming and family beach picnics',
    worstTimeToVisit: 'Late Sunday afternoons in peak summer',
    communityTips: [
      {
        text: 'Cala Bonita is my favorite beach in Al Hoceima. Sheltered from wind with soft golden sand and clean pine trees right behind the beach.',
        source: 'tripadvisor',
        upvotes: 74
      }
    ],
    savvyTips: [
      'Cala Bonita has official lifeguard posts during summer months.',
      'Small beach cafes nearby offer fresh juices and mint tea at local prices.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The eucalyptus and pine tree grove behind Miramar boulevard provides cool shaded picnic tables overlooking the bay.'
    ]
  },
  {
    cityId: 'al_hoceima',
    neighborhoodName: 'Sfiha Beach & Ajdir Coast',
    vibeTag: 'Expansive sandy shoreline, view of Peñón de Alhucemas islet, peaceful coastal promenade',
    vibeEmoji: '🏰',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.8,
    keyWarnings: [
      'Sfiha beach is broad and open; bring sunscreen and hat for shade.',
      'Spanish fortress islet (Peñón de Alhucemas) is a military area — do not attempt to swim or boat up to its walls.'
    ],
    bestTimeToVisit: '11:00–17:00 for long beach walks and panoramic photos of Peñón de Alhucemas',
    worstTimeToVisit: 'Windy summer afternoons',
    communityTips: [
      {
        text: 'Sfiha beach is huge with shallow warm water. Looking directly at the Spanish fortress island right offshore is really fascinating.',
        source: 'google_review',
        upvotes: 68
      }
    ],
    savvyTips: [
      'Located 8km south of Al Hoceima center near Ajdir; easily reached by Grand Taxi or private car.',
      'Traditional beach shacks sell fresh grilled fish and tagines with generous portions.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Ajdir historical town center nearby was the headquarters of the Rif Republic in the 1920s.'
    ]
  },
  {
    cityId: 'al_hoceima',
    neighborhoodName: 'Torres de Alcalá & Badis',
    vibeTag: '16th-century watchtowers, authentic fishing village, dramatic pebble coves, historical charm',
    vibeEmoji: '🛡️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.0,
    keyWarnings: [
      'Carry cash dirhams as there are no ATMs in Torres de Alcalá village.',
      'Village lanes are quiet at night; bring a small pocket torch if walking after dark.'
    ],
    bestTimeToVisit: '09:30–15:00 for visiting the Portuguese watchtowers and fresh fish lunch',
    worstTimeToVisit: 'Late night without pre-booked village accommodation',
    communityTips: [
      {
        text: 'Torres de Alcalá is a serene hidden jewel in the western National Park. Five ancient towers guarding a clear pebble bay.',
        source: 'tripadvisor',
        upvotes: 62
      }
    ],
    savvyTips: [
      'Local fishermen will prepare fresh catch of the day directly over charcoal grills at beachside shacks.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Hike up the stone hill track to the Portuguese watchtowers for sweeping views across the Alboran Sea coastline.'
    ]
  },
  {
    cityId: 'al_hoceima',
    neighborhoodName: 'Al Hoceima National Park (Cala Iris & Bades)',
    vibeTag: 'Pristine marine eco-reserve, limestone sea cliffs, wild isolated coves, hiking sanctuary',
    vibeEmoji: '🌲',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Carry adequate water, hiking boots, and mobile battery banks for deep park excursions.',
      'Use official eco-guides for multi-day wilderness treks through park gorges.'
    ],
    bestTimeToVisit: '08:30–16:00 for coastal hiking, bird watching, and boat excursions to secret coves',
    worstTimeToVisit: 'Unguided night treks in remote cliff zones',
    communityTips: [
      {
        text: 'Al Hoceima National Park is one of Morocco’s best kept nature secrets. Dramatic limestone cliffs plunging straight into deep blue waters.',
        source: 'reddit',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Cala Iris cove has a small wooden fishing pier and protected swimming lagoon surrounded by pine slopes.',
      'Look for rare osprey sea eagles nesting in the sea cliffs.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Snorkeling around the limestone islets of Cala Iris reveals crystal clear underwater flora and Mediterranean marine life.'
    ]
  },

  // --- IFRANE & AZROU NEIGHBORHOODS ---
  {
    cityId: 'ifrane_azrou',
    neighborhoodName: 'Downtown Ifrane (Centre Ville & Lion Park)',
    vibeTag: 'Alpine chalet architecture, pristine European tree-lined avenues, Al Akhawayn University energy, crisp mountain air',
    vibeEmoji: '🏔️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.6,
    keyWarnings: [
      'Winter mountain roads can get icy; check weather before high-elevation mountain drives.',
      'Winter temperatures drop below freezing; pack proper cold-weather layers.'
    ],
    bestTimeToVisit: '10:00–16:00 for daytime garden strolls and cosy café hot chocolate',
    worstTimeToVisit: 'Heavy unplowed blizzard hours during January',
    communityTips: [
      {
        text: 'Ifrane is without question the cleanest and safest town in Morocco. Beautiful red-roof chalets, peaceful parks, and zero street pressure.',
        source: 'tripadvisor',
        upvotes: 145
      }
    ],
    savvyTips: [
      'Photograph the iconic Lion of Ifrane stone sculpture carved in the central park.',
      'Enjoy French-Moroccan pastries and mint tea around the central chalet square.'
    ],
    scamIds: ['ifrane-winter-fake-chalet-rental-scam'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The quiet pine woodland paths behind Al Akhawayn University offer lovely morning birdwatching and autumn golden leaf foliage.'
    ]
  },
  {
    cityId: 'ifrane_azrou',
    neighborhoodName: 'Michlifen Resort & Ski Area',
    vibeTag: 'Luxury Alpine ski chalets, cedar forest slopes, 5-star mountain sanctuary, winter sports',
    vibeEmoji: '🎿',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'Ski gear and snow equipment rentals at the base slopes should have rates negotiated clearly upfront.',
      'Check snow depth reports before heading up for skiing between December and February.'
    ],
    bestTimeToVisit: '09:00–14:00 for optimal snow conditions and panoramic mountain sunlight',
    worstTimeToVisit: 'Late winter afternoon when shadow freezes the slope trails',
    communityTips: [
      {
        text: 'Michlifen is a winter wonderland when it snows. Very high security, upscale facilities, and spectacular views across Middle Atlas cedar peaks.',
        source: 'google_review',
        upvotes: 88
      }
    ],
    savvyTips: [
      'Even in summer, Michlifen is 10°C cooler than the lowlands, making it a perfect retreat from Fes heat.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The crater rim overlook above the main Michlifen ski station offers a panoramic view stretching all the way towards the High Atlas on clear days.'
    ]
  },
  {
    cityId: 'ifrane_azrou',
    neighborhoodName: 'Ain Vittel & Spring Sanctuaries',
    vibeTag: 'Natural mountain water spring, shaded maple and pine forest paths, serene family picnics, pony rides',
    vibeEmoji: '💧',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.0,
    keyWarnings: [
      'Agree on pony or horseback trail ride rates before mounting (typical fair price: 30-50 MAD for short loop).',
      'Weekend afternoons can bring local family picnic crowds during spring.'
    ],
    bestTimeToVisit: '10:00–14:00 for peaceful shaded forest walks along the babbling brook',
    worstTimeToVisit: 'Late rainy afternoons when riverside soil becomes muddy',
    communityTips: [
      {
        text: 'Ain Vittel is an enchanting nature walk just 3km from Ifrane center. The sound of running mountain spring water and tall maple trees is so relaxing.',
        source: 'tripadvisor',
        upvotes: 79
      }
    ],
    savvyTips: [
      'Bring a reusable bottle to fill up with naturally cold, pure mountain spring water at the source.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Follow the forest trail beyond the main picnic clearing to reach the upper waterfalls (Cascade des Vierges) with far fewer people.'
    ]
  },
  {
    cityId: 'ifrane_azrou',
    neighborhoodName: 'Dayet Aoua (Lake Aoua Reserve)',
    vibeTag: 'Tranquil natural lake, oak and cedar wetlands, horse trekking, migratory bird sanctuary',
    vibeEmoji: '🦢',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Water levels fluctuate seasonally depending on winter snowpack and rainfall.',
      'Unsupervised swimming is not recommended due to cold mountain water.'
    ],
    bestTimeToVisit: '09:00–13:00 for calm lake reflections and birdwatching',
    worstTimeToVisit: 'Windy dusk hours',
    communityTips: [
      {
        text: 'Dayet Aoua is surrounded by huge cedar trees. Perfect spot for renting a pedal boat or riding horses around the perimeter road.',
        source: 'reddit',
        upvotes: 92
      }
    ],
    savvyTips: [
      'Pedal boat rentals on the lake generally run 30–50 MAD for 30 minutes of leisurely paddling.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The forested south shore has small rustic tea vendors preparing mint tea on open wood embers under ancient cedar boughs.'
    ]
  },
  {
    cityId: 'ifrane_azrou',
    neighborhoodName: 'Azrou Town & Cèdre Gouraud Forest',
    vibeTag: 'Authentic Berber mountain market, ancient cedar giants, wild Barbary macaque troops, artisanal woodwork',
    vibeEmoji: '🐒',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.2,
    keyWarnings: [
      'Do NOT directly feed wild Barbary macaques or hold food in open hands — they are wild and may snatch bags or sunglasses.',
      'Ignore roadside peanut sellers trying to charge inflated prices for monkey snacks.'
    ],
    bestTimeToVisit: 'Tuesday morning for the bustling authentic Azrou Berber Souk, or midday for cedar forest walks',
    worstTimeToVisit: 'Sundown in the forest when wildlife retreats deep into the canopy',
    communityTips: [
      {
        text: 'Azrou has a much more traditional Berber soul compared to Ifrane. The cedar forest on the way to Azrou is filled with wild monkeys living peacefully among 800-year-old trees.',
        source: 'tripadvisor',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Visit the Cooperative Artisanale in Azrou for hand-carved cedar wood crafts and authentic Middle Atlas Berber rugs at fair fixed prices.',
      'Observe Barbary macaques from a respectful 3–5 meter distance without attempting to touch them.'
    ],
    scamIds: ['ifrane-azrou-monkey-feeding-photo-fee-trap'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The massive 800-year-old Cèdre Gouraud monument tree marks the starting point for stunning backcountry trails through the Middle Atlas cedar reserve.'
    ]
  },
  {
    cityId: 'ifrane_azrou',
    neighborhoodName: 'Ben Smim Village',
    vibeTag: 'Peaceful mountain springs, historic French sanatorium hillside, traditional agro-pastoral life, rural trails',
    vibeEmoji: '🌾',
    safetyAtNight: 'safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.9,
    keyWarnings: [
      'Very quiet rural village; carry cash as there are no banking or ATM facilities.',
      'Respect private agricultural orchards and livestock pastures.'
    ],
    bestTimeToVisit: '10:00–15:00 for countryside walking and visiting the historic mountain plateau',
    worstTimeToVisit: 'Late evening after bus and taxi services stop',
    communityTips: [
      {
        text: 'Ben Smim is super peaceful and off the tourist track. Surrounded by apple orchards, natural spring bottling facilities, and panoramic mountain views.',
        source: 'google_review',
        upvotes: 54
      }
    ],
    savvyTips: [
      'Take the scenic country road between Azrou and Ben Smim for views of rolling Atlas foothills and wildflowers in spring.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Local cooperative producers in Ben Smim sell pure mountain honey (lavender and thyme) harvested from Middle Atlas slopes.'
    ]
  },

  // --- TETOUAN & MARTIL NEIGHBORHOODS ---
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Tetouan UNESCO Medina',
    vibeTag: 'UNESCO Andalusian medina, whitewashed alleyways, active artisan guilds, authentic local life',
    vibeEmoji: '🏛️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Decline unofficial guides near Bab El Okla or Bab Tout claiming tanneries or alleys are closed.',
      'Shops close early after sunset (around 19:30); stick to main lighted thoroughfares at night.'
    ],
    bestTimeToVisit: '09:30–13:00 for exploring active artisan workshops (leather, zellige, marquetry wood, and weavers)',
    worstTimeToVisit: 'Friday midday and Sunday afternoon when many traditional workshops are closed',
    communityTips: [
      {
        text: 'Tetouan Medina is one of the most untouched and authentic in Morocco. You will see real craftspeople working without any pushy sales pressure.',
        source: 'tripadvisor',
        upvotes: 112
      }
    ],
    savvyTips: [
      'Visit the Royal Artisan School (École des Arts et Métiers) at Bab El Okla to watch master artisans train students in authentic zellige and plasterwork.',
      'Explore the Mellah (historic Jewish quarter) with its distinctive ironwork balconies and jewelry shops.'
    ],
    scamIds: ['tetouan-medina-bab-el-okla-faux-guide'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Walk up to the Kasbah atop Jbel Dersa in late afternoon for a panoramic view over the entire white medina, the Rif mountains, and the Martil valley.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Ensanche (Spanish Colonial Quarter)',
    vibeTag: '1930s Spanish colonial architecture, broad pedestrian boulevards, churrerías, lively evening paseos',
    vibeEmoji: '☕',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'High pedestrian foot traffic around Place Moulay El Mehdi (Plaza Primo) during evening hours.',
      'Petty taxi drivers may try to negotiate off-meter for short city trips; insist on the meter (compteur).'
    ],
    bestTimeToVisit: '17:00–21:00 for the traditional evening "Paseo", fresh hot churros with chocolate, and outdoor cafe terrace seating',
    worstTimeToVisit: 'Early morning before cafes and shops open around 09:00',
    communityTips: [
      {
        text: 'The Ensanche feels like stepping into southern Spain in the 1930s. Wide pedestrian boulevards, art deco facades, and friendly family cafes.',
        source: 'google_review',
        upvotes: 95
      }
    ],
    savvyTips: [
      'Order fresh "churros con chocolate" or "café con leche" at the historic cafes lining Avenue Mohammed V.',
      'The Modern Art Center (Centre d’Art Moderne) inside the old 1918 Spanish railway station features top contemporary Moroccan and Andalusian art.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the historic Spanish-era bakeries (Pastelería Ideal) for almond pasteles and traditional Tetouani pastries.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Martil Beach & Corniche',
    vibeTag: 'Vibrant Mediterranean beach town, lively summer corniche, fresh sardine grills, student & family vibe',
    vibeEmoji: '🏖️',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.7,
    keyWarnings: [
      'Summer beach parking guardians ("Gilet Jaunes") may ask for 20–30 MAD; official municipal rate is 3–5 MAD.',
      'Agree on umbrella and chair rental prices before setting up on the sand.'
    ],
    bestTimeToVisit: '10:00–14:00 for swimming in calm Mediterranean waters, or 18:00–23:00 for the lively corniche breeze and street food',
    worstTimeToVisit: 'Midday heat on unshaded beach sections in late July without umbrellas',
    communityTips: [
      {
        text: 'Martil has a wide sandy beach and great energy. The corniche comes alive at night with ice cream shops, grilled corn vendors, and families walking along the sea.',
        source: 'reddit',
        upvotes: 84
      }
    ],
    savvyTips: [
      'Shared grand taxis (blue cabs) between Tetouan center and Martil cost only 6–8 MAD per seat at the official taxi rank.',
      'Eat fresh fried fish and sardines at the local family restaurants along Avenue Miramar.'
    ],
    scamIds: ['martil-summer-beach-umbrella-parking-overcharge', 'tamuda-bay-grand-taxi-private-rate-trap'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The northern end of Martil beach near Cabo Negro headland is significantly quieter and cleaner for swimming than the central pier.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Cabo Negro (Resort & Golf)',
    vibeTag: 'Upscale Mediterranean pine cape, 18-hole golf greens, horseback riding on sand dunes, luxury beach villas',
    vibeEmoji: '⛳',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Higher price point for dining and beach clubs compared to Tetouan or Martil center.',
      'Requires private car or grand taxi as local bus transit is infrequent.'
    ],
    bestTimeToVisit: '09:00–13:00 for morning golf and beach club relaxation, or sunset horse riding along the sand dunes',
    worstTimeToVisit: 'Winter weekdays when some seasonal beach clubs and restaurants are closed',
    communityTips: [
      {
        text: 'Cabo Negro is the jewel of Tamuda Bay. Clean golden sand, pine trees meeting the sea, and excellent security everywhere.',
        source: 'tripadvisor',
        upvotes: 91
      }
    ],
    savvyTips: [
      'Book horseback rides through established stables at the Cabo Negro Royal Equestrian Club for fair fixed rates.',
      'The Cabo Negro golf course offers stunning Mediterranean sea views from almost every hole.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The cliffside trails around the Cabo Negro lighthouse offer dramatic rocky coves and snorkeling in crystal-clear water.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'M\'diq Corniche & Port de Pêche',
    vibeTag: 'Royal Mediterranean yacht harbor, fresh fishing port, scenic corniche promenade, seaside fish restaurants',
    vibeEmoji: '⛵',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.0,
    keyWarnings: [
      'Very popular with domestic holidaymakers in August; traffic along the coastal road can be slow on Sunday evenings.',
      'Verify fresh fish pricing by weight (per kilo) at seaside restaurants before grilling.'
    ],
    bestTimeToVisit: '12:00–15:00 for fresh port seafood lunches, or 18:00–21:00 for sunset strolls along the royal marina pier',
    worstTimeToVisit: 'Stormy winter days with high Mediterranean swell',
    communityTips: [
      {
        text: 'M\'diq (Rincón) has the best fresh grilled seafood in northern Morocco. The marina is clean, well-lit, and very safe for families.',
        source: 'google_review',
        upvotes: 104
      }
    ],
    savvyTips: [
      'Head to the Port de Pêche fish market at 13:00 when daily catch arrives; local restaurants grill your selection fresh with Moroccan salads and fries.',
      'Grand taxi from Tetouan to M\'diq is only 8–10 MAD per seat.'
    ],
    scamIds: ['tamuda-bay-grand-taxi-private-rate-trap'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Walk to the outer breakwater of M\'diq port for views of traditional wooden trawlers and fishing nets being mended by hand.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Marina Smir (Luxury Riviera)',
    vibeTag: 'International luxury marina, yacht berths, high-end Mediterranean gastronomy, watersports and private beach clubs',
    vibeEmoji: '🛥️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'Premium pricing across all waterfront restaurants and cafes.',
      'Inspect jet-ski and boat rental equipment contracts before departure.'
    ],
    bestTimeToVisit: '11:00–17:00 for watersports, boat charters, and beach club pools, or evening for upscale dining',
    worstTimeToVisit: 'Off-season weekdays (November–March) when many seasonal yacht boutiques are shut',
    communityTips: [
      {
        text: 'Marina Smir is spotless, upscale, and peaceful. Great yacht atmosphere with top-tier security and fine Mediterranean dining.',
        source: 'tripadvisor',
        upvotes: 82
      }
    ],
    savvyTips: [
      'Marina Smir has dedicated gated private parking with professional 24/7 security attendants.',
      'Water sports centers offer licensed jet-ski, wakeboarding, and scuba diving sessions in Tamuda Bay.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Charter a small coastal catamaran or motorboat at Marina Smir for a half-day cruise along the dramatic Rif mountain coastline to secluded coves.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Kabila Beach Area',
    vibeTag: 'Private canal marina, quiet residential luxury villas, pristine golden sands, exclusive summer retreat',
    vibeEmoji: '🏖️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.2,
    keyWarnings: [
      'Gated residential access; visitor beach access is via public rights-of-way.',
      'Limited public commercial services outside private resort complexes.'
    ],
    bestTimeToVisit: '10:00–16:00 for tranquil swimming and private beach relaxation away from city crowds',
    worstTimeToVisit: 'Windy afternoons',
    communityTips: [
      {
        text: 'Kabila is one of the cleanest and most private beaches in Morocco. Beautiful white Andalusian architecture right along tranquil seawater canals.',
        source: 'google_review',
        upvotes: 67
      }
    ],
    savvyTips: [
      'Enjoy calm paddle boarding or kayaking in the sheltered seawater canal systems inside Kabila Marina.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The beach south of Kabila towards Restinga has extensive sand dunes and calm Mediterranean swimming.'
    ]
  },
  {
    cityId: 'tetouan_martil',
    neighborhoodName: 'Fnideq (Border Souks & Coast)',
    vibeTag: 'Bustling commercial border hub, import bazaars, Mediterranean sea promenade, vibrant shopping energy',
    vibeEmoji: '🛍️',
    safetyAtNight: 'moderate',
    scamDensityLevel: 'medium',
    happinessIndex: 8.3,
    keyWarnings: [
      'Keep wallets and handbags secured in crowded shopping markets (Souk El Massira).',
      'Do not agree to transport packages across border zones for strangers.'
    ],
    bestTimeToVisit: '10:00–14:00 for shopping in the covered import markets and bazaar stalls',
    worstTimeToVisit: 'Late night around border transport hubs when foot traffic diminishes',
    communityTips: [
      {
        text: 'Fnideq is a lively shopping town next to Ceuta. Great bargains on kitchenware, textiles, and Spanish goods in the souks.',
        source: 'reddit',
        upvotes: 59
      }
    ],
    savvyTips: [
      'Bargaining is expected in Fnideq bazaars; compare prices at two or three stalls before making large purchases.',
      'Grand taxis connect Fnideq directly to Tetouan (approx 12–15 MAD per seat) and M\'diq (approx 6–8 MAD).'
    ],
    scamIds: ['tamuda-bay-grand-taxi-private-rate-trap'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The newly developed coastal corniche in Fnideq offers views across the Strait of Gibraltar and Mount Hacho in Ceuta.'
    ]
  },

  // --- EL JADIDA NEIGHBORHOODS ---
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Cité Portugaise',
    vibeTag: 'Manueline Portuguese fortifications, subterranean stone cistern, ocean rampart walls, historic maritime vibe',
    vibeEmoji: '🏰',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Check opening hours for the Portuguese Cistern (Cisterne Portugaise); buy tickets only at the official municipal booth.',
      'Rampart walkways and back-alleys are unlit after dark; explore during daylight and sunset.'
    ],
    bestTimeToVisit: '10:00–16:30 to visit the subterranean cistern and walk the elevated stone rampart bastions',
    worstTimeToVisit: 'Late night hours when fortress artisan shops and cafes close',
    communityTips: [
      {
        text: 'The Portuguese Cistern in El Jadida is mesmerising with light reflecting off water under gothic arches (Orson Welles filmed Othello here). The fortress is peaceful and easy to explore.',
        source: 'reddit',
        upvotes: 118
      }
    ],
    savvyTips: [
      'Buy official admission tickets (70 MAD) directly at the municipal entry counter on Rue Mohammed Ahbach.',
      'Walk along the bastions of St. Sebastian and Angel for panoramic views over the Atlantic fishing harbor.'
    ],
    scamIds: ['el-jadida-portuguese-cistern-door-tout'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The sea-facing ramparts provide unobstructed sunset views over Atlantic waves crashing against 16th-century Portuguese stone walls.'
    ]
  },
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Médina',
    vibeTag: 'Traditional Moroccan commercial alleys, spice vendors, daily fresh produce, authentic Doukkala life',
    vibeEmoji: '🧺',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.4,
    keyWarnings: [
      'Keep personal items secure in crowded morning grocery and textile alleys.',
      'Most market stalls close around 20:00.'
    ],
    bestTimeToVisit: '09:00–12:30 for morning market energy, fresh mint tea, and traditional bakery treats',
    worstTimeToVisit: 'Friday midday during communal prayers',
    communityTips: [
      {
        text: 'El Jadida’s medina is much more relaxed and authentic than Marrakech or Casablanca. Real local prices and friendly merchants.',
        source: 'tripadvisor',
        upvotes: 79
      }
    ],
    savvyTips: [
      'Taste fresh Doukkala figs, pomegranates, and melons in season at the central fruit souks.',
      'Small neighborhood bakeries produce fresh traditional round crusty bread (khobz) all morning.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The spice and dried fruit merchants along Rue Zerktouni offer fresh Moroccan saffron, cumin, and local floral waters at local market rates.'
    ]
  },
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Corniche',
    vibeTag: 'Broad coastal esplanade, family-friendly sandy beach, palm-lined avenues, seaside cafes and ice cream parlors',
    vibeEmoji: '🌴',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.8,
    keyWarnings: [
      'Petty taxi drivers may attempt to negotiate fixed fares during peak summer; ask for the meter (compteur).',
      'High foot traffic and crowds on warm summer evenings along Avenue de Suez.'
    ],
    bestTimeToVisit: '17:00–22:00 for the breezy seaside promenade, family amusement rides, and open-air cafe terraces',
    worstTimeToVisit: 'Windy winter mornings with ocean spray',
    communityTips: [
      {
        text: 'The Corniche in El Jadida is clean, wide, and lively at night. Police presence is consistent, and it feels very safe for families and solo travelers.',
        source: 'google_review',
        upvotes: 94
      }
    ],
    savvyTips: [
      'Stop for fresh mint tea or Italian gelato at the seafront cafes near Parc Mohammed V.',
      'The city beach right along the corniche has calm shallow water suitable for relaxed swimming in summer.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The municipal park (Parc Hassan II / Mohammed V) adjacent to the corniche offers peaceful shaded benches under century-old araucaria pines.'
    ]
  },
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Sidi Bouzid',
    vibeTag: 'Famous Blue Flag beach resort, world-class surfing waves, cliffside seafood dining, upscale coastal villas',
    vibeEmoji: '🏄‍♂️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.2,
    keyWarnings: [
      'Strong Atlantic swell and undertow during winter and high surf; swim strictly in monitored lifeguard zones.',
      'Summer parking attendants may ask for 20 MAD; standard municipal fee is 3–5 MAD.'
    ],
    bestTimeToVisit: '11:00–16:00 for golden beach lounging and surfing, followed by sunset seafood dining overlooking the bay',
    worstTimeToVisit: 'Stormy Atlantic high tide days if attempting to swim near rocks',
    communityTips: [
      {
        text: 'Sidi Bouzid has one of the best beaches on Morocco’s Atlantic coast. The cliffside restaurants (like Le Chiringuito) serve incredible grilled fish with ocean views.',
        source: 'reddit',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Grand taxis connect El Jadida center to Sidi Bouzid in 10 minutes for approx 6–8 MAD per shared seat.',
      'Try the local sea urchins (oursins) and fresh oysters when in season at cliffside stalls.'
    ],
    scamIds: ['sidi-bouzid-summer-parking-overcharge'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Walk up to the Sidi Bouzid cliff viewpoint at sunset for sweeping panoramas across the entire Atlantic crescent bay.'
    ]
  },
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Haouzia',
    vibeTag: 'Pristine 14 km coastal pine dunes, 5-star Mazagan Beach & Golf luxury, equestrian tracks, tranquil ocean retreats',
    vibeEmoji: '⛳',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.1,
    keyWarnings: [
      'Vast, uncrowded beach areas have fewer lifeguards; exercise caution with Atlantic rip currents.',
      'Higher price point within luxury resort dining and golf club amenities.'
    ],
    bestTimeToVisit: '09:00–17:00 for championship Gary Player golf, horseback riding along the beach, and luxury spa treatments',
    worstTimeToVisit: 'Off-season windy days without beach shelter',
    communityTips: [
      {
        text: 'Haouzia Beach is endless and peaceful. You can walk for miles along soft golden sand backed by coastal pine forests with complete tranquility.',
        source: 'tripadvisor',
        upvotes: 85
      }
    ],
    savvyTips: [
      'Mazagan Beach Resort has 24/7 security, international fine dining, and professional surf/watersport instructors.',
      'Explore the coastal eucalyptus forest trails for quiet jogging or horseback rides.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Look out for the mysterious shipwreck (the Korean cargo ship stranded in the 1980s) visible along Haouzia beach at low tide.'
    ]
  },
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Azemmour',
    vibeTag: 'Historic riverside medina, colorful street art murals, ancient mudbrick ramparts, calm artisan pottery hub',
    vibeEmoji: '🎨',
    safetyAtNight: 'safe',
    scamDensityLevel: 'low',
    happinessIndex: 8.5,
    keyWarnings: [
      'Quiet town with minimal evening street lighting; plan exploration during daylight hours.',
      'Respect local privacy when photographing residential doors and painted murals.'
    ],
    bestTimeToVisit: '10:00–15:00 to admire the open-air street art murals and take a traditional wooden boat ride on the Oum Er-Rbia River',
    worstTimeToVisit: 'Late evening after 19:30 when medina alleys become deserted',
    communityTips: [
      {
        text: 'Azemmour is a hidden artistic gem 15 minutes north of El Jadida. The street murals painted on whitewashed walls make for incredible walking photography.',
        source: 'google_review',
        upvotes: 76
      }
    ],
    savvyTips: [
      'Hire a local boatman along the Oum Er-Rbia riverbank for a 30-minute peaceful cruise under the fortress ramparts (approx 30–50 MAD).',
      'Grand taxi from El Jadida to Azemmour costs approx 7–10 MAD per seat.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the local female embroidery and pottery workshops near Bab El Oued for authentic Doukkala handicrafts.'
    ]
  },
  {
    cityId: 'el_jadida',
    neighborhoodName: 'Port d\'El Jadida',
    vibeTag: 'Bustling Atlantic fishing port, morning fish auctions, fresh sardine grills, traditional wooden trawlers',
    vibeEmoji: '🐟',
    safetyAtNight: 'moderate',
    scamDensityLevel: 'medium',
    happinessIndex: 8.2,
    keyWarnings: [
      'Confirm the full fish price including grilling, salad, and bread before grilling.',
      'Wet and slippery floor near the boat landing docks; wear appropriate shoes.'
    ],
    bestTimeToVisit: '11:30–14:30 when fishing trawlers return with the morning catch and grill stalls are firing',
    worstTimeToVisit: 'Late at night after port operations and fish shacks have shuttered',
    communityTips: [
      {
        text: 'The port fish stalls offer the freshest grilled sardines, calamari, and sole right next to the fishing boats. Agree on the total price first and enjoy!',
        source: 'tripadvisor',
        upvotes: 91
      }
    ],
    savvyTips: [
      'Watch the active seafood auction inside the port hall before heading to the open-air grill stands.',
      'Always confirm fish weight on the scale to avoid bill inflation.'
    ],
    scamIds: ['el-jadida-port-fish-grill-weight-trap'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The viewpoint near the Port Lighthouse (Phare de Sidi Bouafi) offers sweeping views across the Atlantic harbor and the Cité Portugaise bastion walls.'
    ]
  },

  // --- IMSOUANE NEIGHBORHOODS ---
  {
    cityId: 'imsouane',
    neighborhoodName: 'Magic Bay & Port Headland',
    vibeTag: 'Endless pointbreak waves, laid-back surf culture, fresh harbor fish grills, ocean sunset rituals',
    vibeEmoji: '🏄‍♂️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.3,
    keyWarnings: [
      'Inspect surfboard rentals thoroughly for pre-existing dings before taking them out.',
      'Be cautious of sea urchins on rocky entry points during low tide.'
    ],
    bestTimeToVisit: '08:00–12:00 for longboard riding in Magic Bay and noon harbor fish arrival',
    worstTimeToVisit: 'Extreme low tide if inexperienced with shallow reef sections',
    communityTips: [
      {
        text: 'Imsouane Magic Bay has one of the longest waves in Africa. Ride a wave for nearly 800 meters straight to the beach!',
        source: 'reddit',
        upvotes: 175
      }
    ],
    savvyTips: [
      'Take photos of both sides of rental surfboards before paying.',
      'Buy fresh fish directly at the port at 12:00 and have local port shacks grill it for you.'
    ],
    scamIds: ['imsouane-dinged-surfboard-repair-claim'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'The headland above Cathedral Point offers front-row sunset seats over Atlantic swells with acoustic jam sessions.'
    ]
  },

  // --- OUARZAZATE NEIGHBORHOODS ---
  {
    cityId: 'ouarzazate',
    neighborhoodName: 'Aït Benhaddou',
    vibeTag: 'Ancient UNESCO earthen ksar, dramatic film backdrops, quiet desert riverbed sunsets',
    vibeEmoji: '🏛️',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'low',
    happinessIndex: 9.2,
    keyWarnings: [
      'Ignore self-proclaimed ticket sellers along the riverbed bridge; entry across the footbridge to the old ksar is free.',
      'Wear sturdy shoes for steep earthen steps inside the ksar.'
    ],
    bestTimeToVisit: 'Sunrise or late afternoon (16:30–18:30) for golden light, calm photography, and star gazing',
    worstTimeToVisit: 'Midday 11:30–14:30 when tour buses from Marrakech overcrowd the main bridge',
    communityTips: [
      {
        text: 'Crossing the footbridge into Ait Benhaddou is completely free. You only pay if you enter a private Kasbah house museum inside.',
        source: 'tripadvisor',
        upvotes: 142
      }
    ],
    savvyTips: [
      'Cross via the modern footbridge rather than paying local boys for stepping stone guides during dry season.',
      'Stay overnight in the village across the river for peaceful sunset and starlit views of the illuminated ksar.'
    ],
    scamIds: ['fake-guide-closed-way'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Climb to the ancient granary (Agadir) atop the ksar hill for a 360-degree panorama of the Ounila river valley and Atlas peaks.'
    ]
  },
  {
    cityId: 'ouarzazate',
    neighborhoodName: 'Centre Ville',
    vibeTag: 'Wide palm-lined boulevards, relaxed movie town center, peaceful cafes along Avenue Mohammed V',
    vibeEmoji: '🎬',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 8.7,
    keyWarnings: [
      'Petit taxis inside Ouarzazate operate on flat local rates (~10 MAD); confirm before setting off.',
      'Cinema studio tours have fixed official entrance fees at the main gates.'
    ],
    bestTimeToVisit: 'Evening 18:00–21:00 for a relaxed promenade and outdoor dining along Avenue Mohammed V',
    worstTimeToVisit: 'Early afternoon during extreme summer heat',
    communityTips: [
      {
        text: 'Ouarzazate is one of the calmest and safest towns in Morocco. Very little street hassle compared to Marrakech or Fes.',
        source: 'reddit',
        upvotes: 118
      }
    ],
    savvyTips: [
      'Use Petit Taxis for quick trips between Centre Ville, Kasbah Taourirt, and the CLA/Atlas Film Studios.',
      'Enjoy dinner on outdoor terrace restaurants facing the main boulevard.'
    ],
    scamIds: ['taxi-no-meter'],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit the Artisan Center opposite Kasbah Taourirt for fixed-price, high-quality Berber rugs and pottery created by local craft cooperatives.'
    ]
  },
  {
    cityId: 'ouarzazate',
    neighborhoodName: 'Fint Oasis',
    vibeTag: 'Lush hidden palm grove, tranquil river valley, authentic Amazigh village hospitality',
    vibeEmoji: '🌴',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.4,
    keyWarnings: [
      'The access road involves a rough dirt track; hire a local driver or Grand Taxi if driving a small city car.',
      'Carry cash dirhams as there are no ATMs or card machines in the oasis.'
    ],
    bestTimeToVisit: 'Morning 09:00–12:00 or stay overnight in a traditional riverbed guesthouse',
    worstTimeToVisit: 'Late night arrival without prior guesthouse reservation due to unlit mountain tracks',
    communityTips: [
      {
        text: 'Fint Oasis feels like stepping back in time. Super friendly locals, fresh mint tea, and absolute peace just 20 minutes from Ouarzazate.',
        source: 'google_review',
        upvotes: 89
      }
    ],
    savvyTips: [
      'Arrange a round-trip Grand Taxi driver from Ouarzazate center or stay overnight at a local family lodge.',
      'Accept tea invitations from local guesthouse hosts — hospitality here is genuine and peaceful.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Walk along the irrigation channels (khattara) beneath the date palms at sunset when the cliff walls glow deep amber.'
    ]
  },
  {
    cityId: 'ouarzazate',
    neighborhoodName: 'Skoura Palmeraie',
    vibeTag: 'Verdant oasis of 1000 kasbahs, olive orchards, peaceful eco-lodges, historic mudbrick architecture',
    vibeEmoji: '🏰',
    safetyAtNight: 'very-safe',
    scamDensityLevel: 'none',
    happinessIndex: 9.3,
    keyWarnings: [
      'Internal tracks inside the palm grove can be maze-like; use GPS or ask local guesthouse staff for bicycle routes.',
      'Carry a small flashlight for evening walks back to your lodge as dirt paths have no streetlights.'
    ],
    bestTimeToVisit: 'Late morning for Kasbah Amerhidil museum tour or late afternoon cycling through palm groves',
    worstTimeToVisit: 'Midday sun during July–August peak heat',
    communityTips: [
      {
        text: 'Kasbah Amerhidil in Skoura is the exact kasbah printed on the old 50 Dirham note! The family guide tour is informative and well worth 20 MAD.',
        source: 'tripadvisor',
        upvotes: 110
      }
    ],
    savvyTips: [
      'Rent a bicycle from your guesthouse to explore the dirt trails connecting ancient kasbahs in the shade of palm trees.',
      'Official entry to Kasbah Amerhidil is 20-30 MAD per person with optional local guide tips.'
    ],
    scamIds: [],
    flaggedPlaceIds: [],
    recommendedPlaceIds: [],
    localSecrets: [
      'Visit Kasbah Amerhidil in late afternoon to see the sun illuminate the restored earthen towers and ancient olive presses.'
    ]
  }
];

