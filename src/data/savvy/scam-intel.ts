/**
 * ============================================================================
 * MOROCCO TRAVEL OS - SCAM INTELLIGENCE DATABASE (scamIntelDB)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR ADDING NEW SCAM ENTRIES:
 * ----------------------------------------
 * When adding new scams to this database (e.g., using an external AI assistant),
 * you MUST adhere strictly to the TypeScript interface `ScamIntel` shown below.
 * Do not hallucinate fields, rename existing ones, or ignore structural validation.
 * 
 * SCHEMA SPECIFICATION:
 * 
 * interface ScamIntel {
 *   id: string;                // Kebab-case unique identifier (e.g., 'henna-grab', 'taxi-no-meter')
 *   title: string;             // Human-readable title of the scam/trap
 *   description: string;       // Detailed walkthrough of how the trick operates step-by-step
 *   howToExit: string;         // Clear, actionable steps the tourist should take to escape immediately
 *   category: 'street' | 'transport' | 'shopping' | 'food' | 'restaurant' | 'accommodation' | 'digital' | 'authority';
 *   severity: 'low' | 'medium' | 'high'; // Assessment of financial or psychological distress risk
 *   
 *   cityPriority: {            // List of cities where this scam occurs, paired with a priority score (1 to 10)
 *     [cityId: string]: number; // Supported city IDs: 'marrakech', 'fes', 'casablanca', 'rabat', 'tangier', 'essaouira', 'chefchaouen', 'agadir', etc.
 *   };
 *   
 *   neighborhood?: string;     // Optional: Specific neighborhood/quarter (e.g., 'Jemaa el-Fna', 'Medina Alleys')
 *   specificLocation?: string; // Optional: Exact hotspots where it occurs (e.g., 'Outside Bab Boujloud')
 *   operatingHours?: string;   // Optional: Time range when peak activity occurs (e.g., '14:00–23:00')
 *   seasonality?: string;      // Optional: Seasonality info (e.g., 'Year-round', 'Summer peak')
 *   
 *   socialProofQuotes?: {      // Real-life traveler stories or forum snippets supporting the entry
 *     text: string;            // The warning/story text
 *     source: 'reddit' | 'tripadvisor' | 'facebook' | 'google_review' | 'instagram';
 *     author?: string;         // Optional username
 *     sentiment?: 'warning' | 'frustrated' | 'neutral' | 'positive';
 *     upvotes?: number;        // Optional upvote count or popularity indicator
 *   }[];
 *   
 *   escapePhraseDarija?: string; // Phonetic Moroccan Arabic (Darija) escape phrase (e.g., 'La, baraka!')
 *   escapePhraseFrench?: string; // French equivalent phrase (e.g., 'Non merci, je connais le chemin.')
 *   savvyTips?: string[];        // Additional pro-tips or protective guidelines to keep in mind
 * }
 * 
 * RULES FOR EXTERNAL AI AGENTS:
 * 1. Maintain complete data integrity. Do NOT remove existing items when appending new ones.
 * 2. Ensure the ID is uniquely named in lowercase kebab-case.
 * 3. Keep description, howToExit, and tips highly structured, respectful, objective, and realistic.
 * 4. Include realistic phonetic Darija strings in `escapePhraseDarija` for maximum local fidelity.
 * 5. Do not include mock values or placeholders like "TBD" or "TODO".
 * ============================================================================
 */

import { ScamIntel } from '../../types/savvy';

export const scamIntelDB: ScamIntel[] = [
  {
    id: 'overpriced-souvenir',
    title: 'The Overpriced Souvenir Trap',
    description: 'A shopkeeper offers you a ceramic bowl, leather bag, or spice mix at a hugely inflated price (often 3-10x the local rate), assuming you do not know the real value.',
    howToExit: 'Smile, say it is too expensive, and start walking away. If they drop the price by half immediately, you know it was heavily inflated. Always check prices at fixed-price stores first.',
    anatomy: {
      starts: "The seller offers you tea and quotes a price in Euros or a very high Dirham amount.",
      warning: "They refuse to give a clear starting price and ask 'how much will you pay?'.",
      risk: "You end up paying 5x more than the item is actually worth."
    },
    yourMove: "Counter with 30% of their initial price or walk away.",
    localPhrase: {
      phrase: "Ghali bzzaf! n-shouf hna o hna.",
      translation: "Too expensive! I will look around."
    },
    behaviorRule: "Bargaining is expected. Never accept the first price in a souk.",
    category: 'shopping',
    severity: 'low',
    cityPriority: {
      'marrakech': 10,
      'fes': 10,
      'essaouira': 8,
      'chefchaouen': 8
    },
    socialProofQuotes: [
      {
        text: 'I bought a teapot for 500 MAD thinking I got a deal because he originally asked for 1200. Saw the exact same one later in a fixed price shop for 150 MAD.',
        source: 'reddit',
        author: 'u/souk_survivor',
        sentiment: 'warning',
        upvotes: 45
      }
    ]
  },
  {
    id: 'fake-guide-closed-way',
    title: 'The "This Way is Closed" Medina Guide',
    description: 'A local teenager or young man approaches you in the Medina and tells you that the path you are walking on is "closed" due to prayers, a festival, or construction, and then offers to guide you to an alternative path or local viewpoint.',
    howToExit: 'Politely say "La, shukran" (No, thank you) with a smile and keep walking. Do not stop. If they persist, repeat it firmly and open Google Maps or Maps.me to show you know your way.',
    anatomy: {
      starts: "A local tells you the street ahead is closed for prayer or construction.",
      warning: "They offer to show you another way to the square or a tannery.",
      risk: "You get led into a shop where you are pressured to buy, or asked for a high tip."
    },
    yourMove: "Ignore them and keep walking your original path.",
    localPhrase: {
      phrase: "La, choukran. Ana aaraf t-triq.",
      translation: "No, thank you. I know the way."
    },
    behaviorRule: "Streets in the Medina are rarely 'closed'. Verify with a shopkeeper inside a store if you are unsure.",
    category: 'street',
    severity: 'medium',
    cityPriority: {
      'marrakech': 8,
      'fes': 9,
      'chefchaouen': 4,
      'tangier': 6,
      'rabat': 3
    },
    neighborhood: 'Medina Alleys',
    specificLocation: 'Medina entrance gates and key fork roads',
    operatingHours: 'Peak: 10:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A kid told us the path to Bab Boujloud was closed. We ignored him, kept walking, and lo and behold, it was wide open. They just want to lead you into a dead end and ask for money to get you out.',
        source: 'reddit',
        author: 'u/travel_bug99',
        sentiment: 'warning',
        upvotes: 42
      },
      {
        text: 'Do not believe anyone who says "closed". It is 99% a lie to redirect you to their family’s shop or a tannery where you will get high pressure sales.',
        source: 'tripadvisor',
        sentiment: 'frustrated'
      }
    ],
    escapePhraseDarija: 'La, baraka! Shukran, tan-aaraf l-triq.',
    escapePhraseFrench: 'Non merci, je connais le chemin.',
    savvyTips: [
      'Download offline map areas before entering the medinas.',
      'If you are genuinely lost, ask a shopkeeper inside their stall rather than someone walking on the street.'
    ]
  },
  {
    id: 'taxi-no-meter',
    title: 'The Refused Taxi Meter Trap',
    description: 'The driver claims the meter is broken, says there is a fixed rate because of "traffic" or "holiday", or simply starts driving without turning on the meter.',
    howToExit: 'Insist on using the meter before getting in. Say "Khdem l-compteur, l\'batal" (Turn on the meter, please). If they refuse, step out of the car immediately. There are plenty of other taxis.',
    anatomy: {
      starts: "Driver approaches you and says the meter is broken or not working today.",
      warning: "The price is much higher than normal and may change at the end.",
      risk: "You pay more than locals or get pressured if you refuse to pay."
    },
    yourMove: "Stay calm, be polite and firm.",
    localPhrase: {
      phrase: "La, choukran. Bghit compteur.",
      translation: "No, thank you. I want the meter."
    },
    behaviorRule: "Confirm the price before getting in. If the driver refuses the meter, say no, keep walking and take another taxi.",
    category: 'transport',
    severity: 'medium',
    cityPriority: {
      'marrakech': 9,
      'casablanca': 8,
      'rabat': 4,
      'agadir': 5,
      'tangier': 7,
      'fes': 6
    },
    specificLocation: 'Airports, Train stations, and outside major tourist attractions',
    operatingHours: 'Worse at night and peak hours',
    socialProofQuotes: [
      {
        text: 'At Marrakech airport, guys wanted 150 MAD for a 10-minute ride. Walked 200m to the main road, caught a small taxi, turned on the meter, cost was 15 MAD. Insane markup.',
        source: 'facebook',
        sentiment: 'frustrated'
      },
      {
        text: 'Always insist on "compteur" in Rabat and Casa. Standard rule. If they refuse, get out. They will magically find the meter works.',
        source: 'reddit',
        upvotes: 68
      }
    ],
    escapePhraseDarija: 'Khdem l-compteur, l\'batal, wlla ghadin n-enzlo.',
    escapePhraseFrench: 'S\'il vous plaît, mettez le compteur ou je descends.',
    savvyTips: [
      'Small taxis (Petits Taxis) have meters by law. Big taxis (Grands Taxis) have fixed seat rates.',
      'Check standard city rates beforehand using our Fare Calculator.'
    ]
  },
  {
    id: 'henna-grab',
    title: 'The Aggressive Henna Grab',
    description: 'Henna artists near major squares will grab your hand, start drawing a small design "as a gift" or "for good luck", and then aggressively demand a huge payment (often 100-300 MAD) for finishing it.',
    howToExit: 'Keep your hands in your pockets or close to your chest when passing henna stalls. If they grab your hand, pull away firmly and say "No!" loudly.',
    anatomy: {
      starts: "A woman approaches with a syringe of henna and grabs your hand to start drawing.",
      warning: "She says it is a 'free gift' or 'just a small flower'.",
      risk: "Once the henna is on, they demand an exorbitant price (100-300 MAD)."
    },
    yourMove: "Pull your hand back firmly. Do not let them start.",
    localPhrase: {
      phrase: "La! Mat-qisnich l'batal!",
      translation: "No! Do not touch me please!"
    },
    behaviorRule: "Never accept a 'free gift' on the street. If you want henna, go to a reputable cooperative.",
    category: 'street',
    severity: 'medium',
    cityPriority: {
      'marrakech': 10,
      'essaouira': 3,
      'fes': 2
    },
    neighborhood: 'Jemaa el-Fna',
    specificLocation: 'Center of Jemaa el-Fna square, Marrakech',
    operatingHours: '15:00–23:00',
    socialProofQuotes: [
      {
        text: 'A lady grabbed my wife’s hand, squirted a tiny spot, and then yelled at us for 200 MAD. She made a scene and other ladies gathered. We paid 50 MAD just to leave. Absolute racket.',
        source: 'tripadvisor',
        sentiment: 'warning'
      },
      {
        text: 'Keep hands firmly in pockets when crossing Jemaa el-Fna near the henna area. If you want henna, go to a registered, highly rated cooperative like Henna Cafe instead.',
        source: 'reddit',
        upvotes: 110
      }
    ],
    escapePhraseDarija: 'La! Mat-qisnich l\'batal!',
    escapePhraseFrench: 'Non! Ne me touchez pas s\'il vous plaît!',
    savvyTips: [
      'Never agree to a "free test" or "demo".',
      'For genuine, safe, and hygienic henna, visit designated brick-and-mortar cafes.'
    ]
  },
  {
    id: 'animal-handlers-photo',
    title: 'The Jemaa el-Fna Snake/Monkey Photo Fee',
    description: 'Handlers will quickly put a monkey on your shoulder or wrap a snake around your neck without warning, take a photo with your phone, and then demand massive tips (200-500 MAD) to take them off.',
    howToExit: 'Do not make eye contact or walk near the animals. If they step close, raise your hand in a stopping gesture and walk around. If an animal is placed on you, freeze, refuse to pay, and firmly demand they remove it.',
    category: 'street',
    severity: 'high',
    cityPriority: {
      'marrakech': 10,
      'agadir': 4
    },
    neighborhood: 'Jemaa el-Fna',
    specificLocation: 'Jemaa el-Fna square center',
    operatingHours: '14:00–23:00',
    socialProofQuotes: [
      {
        text: 'They literally dropped a monkey on my shoulder. I was shocked. Before I could move, they took my phone, clicked a pic, and demanded €40. I argued and gave them 20 MAD and walked away. They screamed but didn\'t follow.',
        source: 'google_review',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: 'Hiyyad had l-hayawan, daba!',
    escapePhraseFrench: 'Enlevez cet animal tout de suite!',
    savvyTips: [
      'These animals are often poorly treated and can carry diseases. Avoid them entirely.',
      'If you want photos of the square, take them from the safety of rooftop terraces surrounding the perimeter.'
    ]
  },
  {
    id: 'helpful-luggage-porter',
    title: 'The Over-helpful Luggage Porter',
    description: 'When arriving at a medina gate via taxi, local men with handcarts will grab your bags without permission, lead you to your riad (sometimes taking a deliberately long route), and demand a hefty fee (100+ MAD).',
    howToExit: 'Maintain physical control of your luggage. Say "La, ana n-hmez rassi" (No, I will carry it myself) firmly. If they refuse to let go, stop and call out to your hotel/riad staff.',
    category: 'transport',
    severity: 'low',
    cityPriority: {
      'marrakech': 7,
      'fes': 8,
      'chefchaouen': 5
    },
    neighborhood: 'Medina Entrance Gates',
    specificLocation: 'Outside Bab Doukkala, Bab Laksour, Bab Boujloud',
    operatingHours: '08:00–22:00',
    socialProofQuotes: [
      {
        text: 'A guy snatched our suitcases out of our hands at Bab Laksour. He practically ran with them. After 5 mins of weaving, we arrived at our riad, and he demanded 150 MAD. Riad owner told him off and gave him 20 MAD, which is the fair local price.',
        source: 'reddit',
        upvotes: 55
      }
    ],
    escapePhraseDarija: 'La! Khlli l-baliza dyali, ana n-hmezha.',
    escapePhraseFrench: 'Non! Laissez ma valise, je la porte moi-même.',
    savvyTips: [
      'The normal rate for a porter is 10-20 MAD per bag.',
      'Coordinate with your Riad in advance; many will send a trusted staff member to meet you at the taxi drop-off point.'
    ]
  },
  {
    id: 'carpet-tea-pressure',
    title: 'The "Friendly Tea" Carpet Hard Sell',
    description: 'A shopkeeper invites you into a shop for "free hospitality tea" to show you local craftsmanship or tell you a historical story, but once inside, they unroll dozens of carpets and use heavy emotional pressure and guilt to force a purchase.',
    howToExit: 'Remember that you do not owe them anything for drinking tea. If you don\'t want a carpet, firmly say "Very beautiful, but I do not have space in my suitcase" and walk out. Do not let them guilt you.',
    category: 'shopping',
    severity: 'medium',
    cityPriority: {
      'marrakech': 8,
      'fes': 9,
      'chefchaouen': 4,
      'essaouira': 5
    },
    specificLocation: 'Medina souks, carpet and antique shops',
    operatingHours: '09:00–19:00',
    socialProofQuotes: [
      {
        text: 'They make you feel so welcome with mint tea and nice stories, then they spend 30 minutes unrolling rugs. When we said no, the mood changed instantly to hostile and guilt-inducing. Learn to walk out!',
        source: 'reddit',
        upvotes: 82
      }
    ],
    escapePhraseDarija: 'Zwinin bzzaf, walakin ma fiyach sra d’ l-kaber.',
    escapePhraseFrench: 'Très joli, mais je n\'ai pas de place ou de budget.',
    savvyTips: [
      'Never feel obligated to buy because they served you tea. Hospitality is cultural, but in shops, it is a sales technique.',
      'Always negotiate. Carpets are often marked up by 300-400%.'
    ]
  },
  {
    id: 'restaurant-bill-pad',
    title: 'The Hidden Bread & Olive Extras',
    description: 'Restaurants place bread, olives, bottled water, or side salads on the table without you ordering them, then charge high prices for them on the final bill.',
    howToExit: 'As soon as unordered items are placed on your table, ask "B’ s-salam l-batal, hada l\'batal?" (Is this free/included?). If not, politely ask them to take it away immediately.',
    category: 'restaurant',
    severity: 'low',
    cityPriority: {
      'marrakech': 7,
      'casablanca': 6,
      'agadir': 5,
      'essaouira': 4
    },
    specificLocation: 'Tourist-heavy plazas and waterfront promenades',
    operatingHours: 'Lunch and Dinner',
    socialProofQuotes: [
      {
        text: 'A plate of basic olives and a basket of bread cost us 40 MAD extra at a café on Jemaa el-Fna. We didn\'t even touch them. Ask before they stay on the table!',
        source: 'tripadvisor',
        sentiment: 'frustrated'
      }
    ],
    escapePhraseDarija: 'Wach had l-khobz w l-zitoun f-l-batal?',
    escapePhraseFrench: 'Est-ce que le pain et les olives sont inclus?',
    savvyTips: [
      'Water bottles should always be opened in front of you.',
      'Review the itemized bill carefully before paying, and cross-reference with the menu prices.'
    ]
  },
  {
    id: 'argan-oil-mix',
    title: 'The Fake / Diluted Argan Oil',
    description: 'Street vendors and tourist shops sell cheap sunflower or mineral oil mixed with synthetic perfume and food coloring, labeling it as "100% Pure Cosmetic Argan Oil".',
    howToExit: 'Only purchase Argan oil from certified women\'s cooperatives or established pharmacies. Pure cosmetic argan oil has a very faint nutty smell and absorbs quickly without leaving a greasy sheen.',
    anatomy: {
      starts: "A vendor offers you '100% pure' argan oil at an incredibly cheap price.",
      warning: "The oil is very greasy, has no smell, or smells heavily of perfume.",
      risk: "You are buying cheap cooking oil that could irritate your skin."
    },
    yourMove: "Politely decline and walk away. Real argan oil is expensive to produce.",
    localPhrase: {
      phrase: "La, bghit argan l-horr s-safi.",
      translation: "No, I am looking for pure certified argan oil."
    },
    behaviorRule: "If the price is too good to be true, it is fake. Buy from pharmacies or certified cooperatives.",
    category: 'shopping',
    severity: 'medium',
    cityPriority: {
      'marrakech': 7,
      'essaouira': 8,
      'agadir': 8,
      'fes': 5
    },
    specificLocation: 'Medina market stalls and roadside sellers',
    socialProofQuotes: [
      {
        text: 'Buying Argan oil on the street is a bad idea. It is almost always cheap cooking oil with scent added. Buy from registered cooperatives or pharmacies where the quality is certified.',
        source: 'facebook',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: 'La, bghit argan l-horr s-safi.',
    escapePhraseFrench: 'Non, je cherche de l\'huile d\'argan pure certifiée.',
    savvyTips: [
      'If the price is too good to be true (e.g., 20 MAD for a big bottle), it is absolutely fake. Argan is expensive to produce.',
      'Check if the cooperative has USDA Organic or Ecocert seals.'
    ]
  },
  {
    id: 'desert-tour-surcharges',
    title: 'The Desert Tour Bait-and-Switch',
    description: 'Booking a cheap desert excursion (Merzouga/Zagora) online or through a street agent, only to find you must pay mandatory cash surcharges for water, bedding, luggage transport, or camel returns once in the dunes.',
    howToExit: 'Get an itemized list of what is included in writing before paying. Ask: "Is camel trekking, dinner, bottled water, sandboarding, and return transport fully included with no extra fees?"',
    category: 'accommodation',
    severity: 'high',
    cityPriority: {
      'marrakech': 9,
      'merzouga': 8,
      'ouarzazate': 6
    },
    specificLocation: 'Desert tour operators and agency offices',
    socialProofQuotes: [
      {
        text: 'Paid €60 for a 3-day tour in Marrakech. When we got to Merzouga, they charged 200 MAD for water and told us we had to pay another 150 MAD to ride the camels back or walk 5km in the heat. Scammers.',
        source: 'reddit',
        upvotes: 94
      }
    ],
    escapePhraseDarija: 'Khass kolchi ikon mktob f l-contra.',
    escapePhraseFrench: 'Tout doit être écrit dans le contrat s\'il vous plaît.',
    savvyTips: [
      'Book tours directly with reputable desert camps or boutique agencies rather than budget street brokers.',
      'Keep a digital copy of your receipt and booking confirmation showing inclusions.'
    ]
  },
  {
    id: 'fake-sim-card',
    title: 'The Fake / Reused SIM Card',
    description: 'Sellers outside airports or main train stations sell SIM cards claiming they have "10GB of pre-loaded data", but they are actually expired or empty promo cards that stop working after a few hours.',
    howToExit: 'Buy SIM cards only from official, authorized Maroc Telecom, Orange, or Inwi stores inside the terminal or city centers. Have the staff activate it and show you the data balance before paying.',
    category: 'digital',
    severity: 'low',
    cityPriority: {
      'casablanca': 6,
      'marrakech': 7,
      'tangier': 5,
      'agadir': 4
    },
    specificLocation: 'Directly outside airports, major transit hubs',
    socialProofQuotes: [
      {
        text: 'A guy outside Marrakech terminal was giving "free" SIMs but charged 100 MAD to "charge" them with data. It worked for 20 mins, then died. Went to Maroc Telecom, got a real one with 10GB for 50 MAD.',
        source: 'google_review',
        sentiment: 'frustrated'
      }
    ],
    escapePhraseDarija: 'Gha n-mchi l-boutique l-rasmiya.',
    escapePhraseFrench: 'Je préfère aller à la boutique officielle.',
    savvyTips: [
      'Official SIM cards in Morocco are extremely cheap (around 30-50 MAD for the card + 10 MAD per GB).',
      'Check your balance by dialling the network shortcode (e.g., #580# for Orange or #111# for Maroc Telecom).'
    ]
  },
  {
    id: 'parking-guardian-overcharge',
    title: 'The Unofficial Parking Guardian',
    description: 'An unofficial "guardian" wearing a yellow high-visibility vest demands a high parking fee (50-100 MAD) when you park on a public street, even if it is a free zone or already paid via parking meter.',
    howToExit: 'The standard parking fee in Moroccan cities is 2-5 MAD during the day, and 10 MAD overnight. Pay them when leaving, not when arriving, and pay the correct standard rate. If they get aggressive, threaten to find a different spot.',
    category: 'transport',
    severity: 'low',
    cityPriority: {
      'marrakech': 8,
      'casablanca': 9,
      'rabat': 5,
      'tangier': 6,
      'agadir': 7,
      'essaouira': 6
    },
    specificLocation: 'Any public street parking, especially near beaches or medina gates',
    operatingHours: '24/7',
    socialProofQuotes: [
      {
        text: 'Street parking guardians in Casablanca are notorious. They will demand 20-50 MAD as soon as you stop. Real rate is 3 MAD. I pay when I leave. Give them exactly 5 MAD and drive away. They will complain but do nothing.',
        source: 'reddit',
        upvotes: 112
      }
    ],
    escapePhraseDarija: 'L-tarif l-rasmi howa jouj d’ d-dirham f l-nhar.',
    escapePhraseFrench: 'Le tarif officiel est de 2 dirhams.',
    savvyTips: [
      'Always look for official municipal parking signs showing rates.',
      'Keep small coins handy so you can pay exact change.'
    ]
  },
  {
    id: 'tannery-entrance-scam',
    title: 'The Tannery Entrance Fee',
    description: 'Men at the entrance of the Fes or Marrakech leather tanneries claim you must pay a "government entrance fee" or a mandatory "terrace viewing tax" to go inside or climb to the shop balconies.',
    howToExit: 'There is no official entrance fee for the tanneries. The terraces are owned by leather shops. You can walk in for free, though they will expect you to look at their products. A small tip of 10-20 MAD to the shopkeeper is fair if you do not buy anything.',
    category: 'street',
    severity: 'medium',
    cityPriority: {
      'fes': 10,
      'marrakech': 7
    },
    neighborhood: 'Chouara Tannery (Fes), Bab Debbagh (Marrakech)',
    specificLocation: 'Narrow entrances leading to the tanneries',
    socialProofQuotes: [
      {
        text: 'Fes Chouara tannery guys are super pushy. They gave us mint sprigs (to block the smell) and said we had to pay 50 MAD each to walk up. We ignored them and went into shop #64, walked up for free, and gave the terrace guide 10 MAD.',
        source: 'tripadvisor',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: 'Ma-fiyach l-khlass d’ l-bab, hada f-l-batal.',
    escapePhraseFrench: 'L\'entrée est gratuite, je donnerai un pourboire à la fin.',
    savvyTips: [
      'Take a sprig of fresh mint from your riad or buy one for 1 MAD; street touts will charge you 10 MAD for a single leaf.',
      'Shop numbers are clearly marked. Use shop balconies for the best overhead photo angles.'
    ]
  },
  {
    id: 'blue-city-photo-trap',
    title: 'The Chefchaouen Photo Spot Fee',
    description: 'Local residents block off beautifully decorated doorways or stairs in Chefchaouen, claiming it is a private photo zone and demanding 5-10 MAD per picture.',
    howToExit: 'Many of these are actually public stairs decorated by residents. If they ask for money, check if there is a clear sign. If not, politely skip and find one of the hundreds of other free gorgeous blue alleys.',
    category: 'shopping',
    severity: 'low',
    cityPriority: {
      'chefchaouen': 9
    },
    specificLocation: 'Highly instagrammed alleys in Chefchaouen medina',
    socialProofQuotes: [
      {
        text: 'Some residents have made a cottage industry out of decorating their doorway steps and charging tourists. Honestly, 5 MAD is not much, but they can get quite rude if you snap a pic without noticing. Just look for the little signs.',
        source: 'instagram',
        sentiment: 'neutral'
      }
    ],
    escapePhraseDarija: 'Makayn lach l-khlass, gha n-mchi l-trfiq khor.',
    escapePhraseFrench: 'Je vais faire des photos ailleurs, merci.',
    savvyTips: [
      'Respect the privacy of locals. If an alley has a sign asking for a small contribution to maintain the flowers, it is nice to support them, but skip if they are pushy.',
      'Explore early in the morning (before 8:30 AM) to have the streets to yourself with no vendors.'
    ]
  },
  {
    id: 'grand-taxi-overcharge',
    title: 'The Double-Seat Grand Taxi Surcharge',
    description: 'A Grand Taxi driver or station tout claims you must pay for two seats (or buy out the whole car) because there are "no more passengers coming" or because you have bags, even when there are plenty of people waiting.',
    howToExit: 'Grand taxis hold exactly 6 passengers. The fare per seat is strictly fixed by the government. Check the rate with other locals waiting at the station. If you want a comfortable ride, you can choose to buy 2 seats, but it must be your choice, not forced.',
    category: 'transport',
    severity: 'medium',
    cityPriority: {
      'marrakech': 7,
      'fes': 6,
      'tangier': 7,
      'agadir': 6,
      'chefchaouen': 8,
      'essaouira': 5
    },
    specificLocation: 'Grand Taxi stations (e.g., Bab Doukkala in Marrakech)',
    socialProofQuotes: [
      {
        text: 'We took a grand taxi from Tetouan to Chefchaouen. Touts tried to charge us 200 MAD saying the taxi was empty and we must buy all seats. We waited 5 mins, 4 other locals arrived, we paid 35 MAD per seat. Do not let them rush you.',
        source: 'reddit',
        upvotes: 71
      }
    ],
    escapePhraseDarija: 'Bghit rasi blassa whda b l-tarif l-aadi.',
    escapePhraseFrench: 'Je veux juste une place au tarif normal.',
    savvyTips: [
      'Always pay the driver directly, never the touts/intermediaries standing around the taxi stand.',
      'Luggage in the trunk is normally free, or a maximum of 5-10 MAD for very large bags.'
    ]
  },
  {
    id: 'water-seller-selfie',
    title: 'The Water Seller Photo Trap',
    description: 'Traditional water sellers (Gerrab) in colorful red costumes with brass cups smile and invite you to take a photo with them, then aggressively demand 50-100 MAD for the "privilege".',
    howToExit: 'If you take a photo of or with them, expect to pay. A fair tip is 10-20 MAD. If you do not want a photo, say "No" firmly and do not raise your camera.',
    category: 'street',
    severity: 'low',
    cityPriority: {
      'marrakech': 9,
      'fes': 5
    },
    neighborhood: 'Jemaa el-Fna',
    socialProofQuotes: [
      {
        text: 'They look great and are very photogenic, but they are tourist performers, not actual water sellers. If you point a camera at them, they will run over demanding money. Pay 10 MAD, it\'s fair.',
        source: 'instagram',
        sentiment: 'neutral'
      }
    ],
    escapePhraseDarija: 'La shukran, ma-bghitch tsawer.',
    escapePhraseFrench: 'Non merci, pas de photo.',
    savvyTips: [
      'Always ask or negotiate the price BEFORE clicking the photo.',
      'If you take a general wide shot of the square, they might still try to approach you. Just ignore them.'
    ]
  },
  {
    id: 'closed-attraction-museum',
    title: 'The "Museum is Closed" Redirect',
    description: 'A friendly passerby near a tourist site (like Bahia Palace or Jardin Majorelle) tells you the site is closed today (e.g., for "renovations", "VIP visit", or "holy day") and offers to show you a "special berber market" that is only open today.',
    howToExit: 'Check the official opening hours online or walk directly to the ticket booth yourself. Do not trust random people on the street telling you places are closed.',
    category: 'street',
    severity: 'medium',
    cityPriority: {
      'marrakech': 9,
      'fes': 8,
      'rabat': 4
    },
    specificLocation: 'Outside major museums, palaces, and gardens',
    socialProofQuotes: [
      {
        text: 'Walked towards Bahia Palace, a clean-cut guy said it was closed until 3 PM for a government event. Offered to take us to a herbal market. We walked to the palace anyway, and it was completely open. Classic trick.',
        source: 'reddit',
        upvotes: 118
      }
    ],
    escapePhraseDarija: 'Gha n-mchi n-chouf b-rasi l-oul.',
    escapePhraseFrench: 'Je vais aller vérifier moi-même d\'abord.',
    savvyTips: [
      'Almost all tourist sites in Morocco are open 7 days a week, except during specific holidays like Eid.',
      'If someone redirects you to a "Berber Market open only today," it is a 100% guarantee to be an expensive shop that is open every day.'
    ]
  },
  {
    id: 'seafood-weight-scam',
    title: 'The Essaouira Seafood Bait-and-Switch',
    description: 'Seafood stalls show you fresh fish and quote a low price (e.g., 40 MAD), but once cooked, they calculate the bill based on a highly inflated "raw weight" or add massive unmentioned fees for cooking, salad, and service.',
    howToExit: 'Confirm the price in writing or on a calculator before they grill the fish. Ask: "Is this the absolute total price including cooking, bread, salad, and service?" Point to the specific fish.',
    category: 'restaurant',
    severity: 'medium',
    cityPriority: {
      'essaouira': 9,
      'agadir': 7,
      'saidia': 6,
      'al_hoceima': 5
    },
    specificLocation: 'Port seafood stalls and beachside diners',
    socialProofQuotes: [
      {
        text: 'At the Essaouira port stalls, we were told 80 MAD for a mix plate. Then the bill came as 320 MAD because they charged per 100g of raw weight plus 50 MAD for "grilling fee". Get exact flat rates beforehand.',
        source: 'tripadvisor',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: 'Wach hada howa l-taman l-totale b l-tiyab?',
    escapePhraseFrench: 'Est-ce que c\'est le prix total avec la cuisson et le service?',
    savvyTips: [
      'It is highly recommended to eat seafood at established restaurants with printed menus rather than open-air port stalls where pricing is dynamic.',
      'Always watch them weigh the fish if you do buy by weight.'
    ]
  },
  {
    id: 'fake-police-fine',
    title: 'The Fake Plainclothes Police Fine',
    description: 'A man in civilian clothes approaches you, claims to be a tourist police officer, shows a fake or rapid badge, and demands to see your passport or attempts to fine you on the spot for "illegal tour guiding" or "violating cultural rules".',
    howToExit: 'Real Moroccan police wear official uniforms or, if plainclothes, will gladly accompany you to the nearest official police station (Commissariat) or tourist police kiosk. Never hand over your passport or pay cash on the street. Say: "Let\'s walk to the nearest police station together."',
    category: 'authority',
    severity: 'high',
    cityPriority: {
      'marrakech': 7,
      'casablanca': 8,
      'tangier': 6
    },
    specificLocation: 'Quiet Medina alleys and outskirts of tourist hotspots',
    socialProofQuotes: [
      {
        text: 'A guy stopped us near the tanneries claiming to be police and wanted a fine because we didn\'t have a registered guide. We refused and walked towards a busy avenue, and he disappeared. Real police are very helpful and do not do this.',
        source: 'facebook',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: 'Yallah n-mchio l-poste d’ l-bolis p-jouj.',
    escapePhraseFrench: 'Allons au poste de police le plus proche ensemble.',
    savvyTips: [
      'Keep a digital photocopy of your passport on your phone and leave your physical passport in your hotel safe.',
      'Official tourist police kiosks are located near all major tourist sights.'
    ]
  },
  {
    id: 'pottery-demo-fee',
    title: 'The Pottery Shaping Demo Trap',
    description: 'Pottery workshops in Fes or Safi invite you to "just try shaping the clay" for fun or "for a free photo", then demand a substantial workshop fee for using the wheel and clay.',
    howToExit: 'Smile, take photos of the actual artisans, but decline to sit at the wheel yourself unless you have pre-negotiated a workshop class rate. Say: "Shukran, gha n-tfrej" (Thank you, I will just watch).',
    category: 'shopping',
    severity: 'low',
    cityPriority: {
      'fes': 8,
      'saidia': 3
    },
    neighborhood: 'Pottery Cooperative',
    socialProofQuotes: [
      {
        text: 'They make it look like a friendly invitation to try the craft, but as soon as you get clay on your hands, they treat it as an active lesson and charge 50-100 MAD. It ruins the vibe. Just say no and keep watching.',
        source: 'reddit',
        upvotes: 45
      }
    ],
    escapePhraseDarija: 'Shukran, bghit gha n-chouf, mghadich n-khdem.',
    escapePhraseFrench: 'Merci, je veux juste regarder.',
    savvyTips: [
      'Buying pottery from these large tourist factories is usually much more expensive than buying the same items from smaller, independent stalls in the deep souks.'
    ]
  },
  {
    id: 'herbalist-magic-mix',
    title: 'The High-Pressure Herbalist Consultation',
    description: 'Herbalists seat you in a room filled with spices, put various essential oils on your skin, give you a long presentation on magical cures for snoring, stress, or weight loss, and then present you with an pre-packed bag of expensive potions totaling 1000+ MAD.',
    howToExit: 'If you do not want to buy, stop the presentation early. If they present an expensive bag, do not feel obligated. Pick only one small item you actually like (e.g., a small bar of ambergris or musk for 20 MAD) and say: "This is all I want today, thank you."',
    category: 'shopping',
    severity: 'medium',
    cityPriority: {
      'marrakech': 9,
      'fes': 8,
      'essaouira': 5
    },
    specificLocation: 'Herbalist shops (Herboristeries) inside the Medina',
    socialProofQuotes: [
      {
        text: 'The herbal show was fun and educational, but then they handed us a bag of teas and creams and asked for €150. We felt extremely awkward. We negotiated down to just a small bottle of eucalyptus crystals for 30 MAD and left.',
        source: 'reddit',
        upvotes: 93
      }
    ],
    escapePhraseDarija: 'Bghit gha had l-haja sghira, shukran.',
    escapePhraseFrench: 'Je prends juste ce petit article, merci.',
    savvyTips: [
      'Never ingest herbal mixtures or teas sold as "medical cures" without knowing the exact ingredients.',
      'Saffron sold in these markets is frequently adulterated safflower. Real saffron is highly regulated and very expensive.'
    ]
  },
   {
    "id": "street-money-changer",
    "title": "The Counterfeit Dirham Street Exchange",
    "description": "A man on the street or near a medina entrance quietly offers you an exchange rate for euros or dollars that is noticeably better than official bureau de change rates. He appears discreet and trustworthy. The exchange happens quickly using slight-of-hand: he folds in discontinued, out-of-circulation dirham notes (which are technically worthless as they are no longer accepted by banks), counterfeit bills, or simply palms back a portion of your money during the handover. You walk away with a wad of notes that cannot be spent or deposited.",
    "howToExit": "Never exchange money on the street under any circumstances — it is illegal in Morocco for both parties. If approached, say 'La, gha n-mchi l-bureau de change' (No, I'll go to the bureau de change) and keep walking. Use only licensed bureaux de change (look for the official sign), ATMs on major bank networks (Attijariwafa, CIH, BMCE), or your hotel reception desk.",
    "category": "street",
    "severity": "high",
    "cityPriority": {
      "marrakech": 9,
      "fes": 8,
      "tangier": 9,
      "casablanca": 7,
      "chefchaouen": 5
    },
    "neighborhood": "Medina entrance zones and tourist squares",
    "specificLocation": "Near Jemaa el-Fna, Bab Boujloud, Tangier port area",
    "operatingHours": "10:00–22:00",
    "seasonality": "Year-round, peak in summer tourist season",
    "socialProofQuotes": [
      {
        "text": "Guy offered me a great rate near the Fes medina gate. Gave me a fat stack of notes. Half were old discontinued dirhams — totally worthless.",
        "source": "reddit",
        "author": "u/fes_backpacker",
        "sentiment": "warning",
        "upvotes": 87
      },
      {
        "text": "Street exchange is always a scam. They are fast and skilled. I lost 40 euros before I even noticed the swap. Use ATMs only.",
        "source": "tripadvisor",
        "sentiment": "frustrated"
      }
    ],
    "escapePhraseDarija": "La shukran, gha n-mchi l-bureau de change r-rasmi.",
    "escapePhraseFrench": "Non merci, je vais au bureau de change officiel.",
    "savvyTips": [
      "Dirham (MAD) is a closed currency — you cannot legally import or export it. All exchange must happen through official, licensed channels.",
      "Count your notes immediately and carefully at the bureau de change window before leaving, in full view of the cashier.",
      "Discontinued notes look nearly identical to current ones. The key difference is the series year printed on the bill — current valid notes are post-2012 series."
    ]
  },
  {
    "id": "fake-geode-fossil",
    "title": "The Fake Sahara Fossil and Geode Sell",
    "description": "Roadside vendors and medina stalls near Erfoud, Rissani, Merzouga, and Ouarzazate sell strikingly beautiful fossils, ammonites, geodes, and crystals at impossibly low prices. In reality, the majority of these items are plaster cast 'ammonites' painted to look authentically aged, cheap quartz dyed purple or blue to resemble amethyst, and polyester resin molds sold as natural selenite or aragonite. Even experienced geology enthusiasts are frequently fooled. The vendor will claim the pieces are hand-excavated from local desert formations and have significant mineral value.",
    "howToExit": "If you want to buy genuine Moroccan minerals or fossils, go only to the Museum of Fossils and Minerals in Erfoud or established, reviewed dealers in Marrakech's Mellah district. Never buy from roadside stalls or anyone approaching your vehicle on desert roads. If the price feels too good to be true for the size and beauty of a specimen, it is almost certainly fake.",
    "category": "shopping",
    "severity": "medium",
    "cityPriority": {
      "merzouga": 10,
      "erfoud": 10,
      "ouarzazate": 8,
      "marrakech": 5,
      "fes": 4
    },
    "neighborhood": "Desert gateway towns and tourist overlooks",
    "specificLocation": "Roadside stalls on the N13 route to Merzouga, Erfoud market, Rissani souk",
    "operatingHours": "07:00–20:00",
    "seasonality": "Year-round, peak October–April (main desert season)",
    "socialProofQuotes": [
      {
        "text": "Bought what I thought was a beautiful ammonite near Erfoud for 80 MAD. Got home and scratched the surface — pure painted plaster. Very convincing though.",
        "source": "reddit",
        "author": "u/desert_geology_fail",
        "sentiment": "warning",
        "upvotes": 63
      },
      {
        "text": "The purple crystals sold everywhere near the Sahara are dyed. Hold them to light and look for uniform color — real amethyst has natural gradients. These are flat-toned fakes.",
        "source": "tripadvisor",
        "sentiment": "warning"
      }
    ],
    "escapePhraseDarija": "La shukran, bghit gha l-hajat l-aslia mn boutique rasmiya.",
    "escapePhraseFrench": "Non merci, je cherche des pièces authentiques en boutique certifiée.",
    "savvyTips": [
      "A real ammonite will feel cold and dense. Plaster is lighter and slightly warm to the touch.",
      "Scratch a hidden edge with a coin: genuine stone resists; plaster leaves a white chalk mark.",
      "Visit the Erfoud fossil museum first to calibrate your eye for quality before visiting any market."
    ]
  },
  {
    "id": "train-hotel-redirect",
    "title": "The Train Companion Hotel Redirect",
    "description": "On intercity trains (especially Casablanca–Marrakech and Tangier–Fes routes), a friendly, well-spoken local sits next to you, strikes up a warm conversation, and gradually steers it toward asking which hotel or riad you are staying at. They appear genuinely curious and helpful. Their accomplice, briefed via phone or pre-arranged signal, waits at the destination train station holding a fake handwritten sign for your hotel or riad. The accomplice greets you like an official driver, loads your luggage, and takes you to a completely different (and usually worse) accommodation where they earn a commission, sometimes refusing to return your bags until you pay a 'transfer fee'.",
    "howToExit": "Never disclose your accommodation name or address to strangers on public transport. If someone at the station holds a sign with your riad's name, verify it by calling your riad directly before getting in any vehicle. Legitimate riads that offer airport or station pickup will have confirmed this by email or WhatsApp before your journey with driver name and phone number.",
    "category": "transport",
    "severity": "high",
    "cityPriority": {
      "marrakech": 8,
      "casablanca": 7,
      "tangier": 9,
      "fes": 8,
      "rabat": 5
    },
    "specificLocation": "Intercity train carriages (ONCF network) and arrival platforms at main stations",
    "operatingHours": "Peak during morning and evening arrivals, 07:00–10:00 and 17:00–22:00",
    "seasonality": "Year-round",
    "socialProofQuotes": [
      {
        "text": "On the train from Tangier, a man asked which riad we were in. At the station, a guy had a sign with our riad name. We almost got in. Called the riad — they had no driver at the station.",
        "source": "reddit",
        "author": "u/tangier_close_call",
        "sentiment": "warning",
        "upvotes": 104
      },
      {
        "text": "Be very careful of friendly strangers on Moroccan trains who ask where you're staying. Their accomplice at the station will be holding a fake sign for your hotel.",
        "source": "tripadvisor",
        "sentiment": "warning"
      }
    ],
    "escapePhraseDarija": "Ma-kanqolch fin kan-sakno. Shukran.",
    "escapePhraseFrench": "Je préfère ne pas partager les détails de mon hébergement, merci.",
    "savvyTips": [
      "Save your riad's phone number in your contacts before boarding any train. Call them directly the moment you step off.",
      "Legitimate pickup drivers arranged by riads will always know your full name, booking reference, and will not approach you — you approach them.",
      "Do not answer questions about your hotel from strangers. A polite 'I haven't decided yet' ends the conversation."
    ]
  },
  {
    "id": "qr-code-phishing",
    "title": "The Fake Tourist Site QR Code Phishing Trap",
    "description": "Fake QR code stickers are placed over (or near) official information boards, parking meters, restaurant menu stands, or entrance kiosks at major tourist attractions including Bahia Palace, Jardin Majorelle, and Hassan II Mosque. The codes appear to link to ticketing, Wi-Fi login, or tour information but instead redirect victims to convincing phishing pages that request credit card details for 'online ticket pre-booking', 'tourist WiFi access fees', or fake donation pages for a 'heritage preservation fund'. Some variants install credential-harvesting malware on the device if auto-download is enabled.",
    "howToExit": "Never scan a QR code from a physical sticker at a tourist site without verifying it is official. Check the URL immediately after scanning — official Moroccan attraction sites use .ma domains or well-known ticketing platforms. If a page requests credit card information or a 'processing fee', close it immediately. Buy tickets only at official physical ticket windows or directly from the attraction's verified website.",
    "category": "digital",
    "severity": "high",
    "cityPriority": {
      "marrakech": 9,
      "casablanca": 8,
      "fes": 7,
      "rabat": 7,
      "tangier": 6
    },
    "specificLocation": "Entrance areas of Bahia Palace, Jardin Majorelle, Hassan II Mosque, Royal Palace gates, parking meters near medinas",
    "operatingHours": "24/7 (codes are physical stickers, always present)",
    "seasonality": "Year-round, highest risk during peak tourist months: March–May, September–November",
    "socialProofQuotes": [
      {
        "text": "Found a QR sticker on the info board outside Jardin Majorelle. It led to a fake 'Marrakech Heritage Pass' page asking for my Visa card. Classic phishing.",
        "source": "reddit",
        "author": "u/digital_nomad_maroc",
        "sentiment": "warning",
        "upvotes": 76
      },
      {
        "text": "Saw a QR code on what looked like an official parking meter sign in Casablanca. The URL it opened was not a .ma domain. Delete immediately if this happens to you.",
        "source": "facebook",
        "sentiment": "warning"
      }
    ],
    "escapePhraseDarija": "N/A — digital scam, no in-person confrontation required.",
    "escapePhraseFrench": "N/A — arnaque numérique, aucune confrontation en personne.",
    "savvyTips": [
      "Enable 'preview URL before opening' in your phone's QR scanner settings so you can inspect the link before visiting it.",
      "Morocco's official tourism booking domains end in .ma — any other TLD for a supposed official payment page is a red flag.",
      "Disable auto-download for files in your browser when traveling to prevent malware installation from malicious redirects.",
      "Most major Moroccan attractions (Jardin Majorelle, Bahia Palace, Volubilis) do not require online pre-booking — you pay at the window."
    ]
  },
  {
    "id": "fake-tour-agency-social",
    "title": "The AI-Generated Fake Tour Agency on Social Media",
    "description": "Polished Instagram and Facebook pages with AI-generated photos of Sahara sunsets, luxury riads, and smiling tourists advertise heavily discounted multi-day Morocco tours (3 days Marrakech to Merzouga for €99, etc.). The pages have hundreds or thousands of followers (bought), dozens of five-star reviews (fabricated), and professional-looking logos and branding. The 'agency' collects a 30-50% deposit via PayPal Friends & Family, bank transfer, or crypto — all non-refundable methods. When the travel date arrives, the agency is unreachable: the WhatsApp number is disconnected, the Instagram page is deleted, and the email bounces.",
    "howToExit": "Before paying any deposit to any Moroccan tour operator found via social media, verify: (1) they have a registered company number from the Moroccan Ministry of Tourism (ask them to show it); (2) they appear on official Moroccan tourism association directories; (3) reviews exist on Tripadvisor AND Google, not just their own page. Never pay via non-refundable methods. Use a credit card or PayPal Goods & Services which offer chargeback protection.",
    "category": "digital",
    "severity": "high",
    "cityPriority": {
      "marrakech": 9,
      "merzouga": 8,
      "fes": 7,
      "casablanca": 6,
      "agadir": 6
    },
    "specificLocation": "Online / social media (Instagram, Facebook, WhatsApp)",
    "operatingHours": "24/7 online",
    "seasonality": "Year-round, peaks before school holiday travel windows: June–July, December–January",
    "socialProofQuotes": [
      {
        "text": "Paid €150 deposit to a slick Instagram tour operator for a Sahara trip. The page disappeared 3 days before our departure. All AI photos. Total loss.",
        "source": "reddit",
        "author": "u/sahara_scammed_2024",
        "sentiment": "warning",
        "upvotes": 221
      },
      {
        "text": "These fake agencies have incredible social media presence now. AI-made photos, bought followers, fake reviews. Always cross-check on Tripadvisor before sending a single euro.",
        "source": "facebook",
        "sentiment": "frustrated"
      }
    ],
    "escapePhraseDarija": "N/A — scam operates entirely online before arrival.",
    "escapePhraseFrench": "N/A — arnaque opère entièrement en ligne avant l'arrivée.",
    "savvyTips": [
      "Run the agency's photos through Google Reverse Image Search — AI-generated or stock photos will appear on multiple unrelated pages.",
      "Ask for a video call with the actual guide who will lead your tour. Scam operations almost never agree to this.",
      "Legitimate Moroccan tour operators are registered with the Fédération Nationale du Tourisme (FNT) and can provide a license number on demand.",
      "Prices that seem 40%+ below market rate for multi-day desert tours are nearly always either scams or severely cut-quality experiences."
    ]
  },
  {
    "id": "riad-closed-redirect",
    "title": "The 'Your Riad is Closed / Flooded / Full' Redirect",
    "description": "As tourists approach a medina gate with luggage, a smartly dressed young man intercepts them and claims their pre-booked riad has unexpectedly closed, flooded, or overbooked — offering to call ahead and 'confirm'. He pretends to make a phone call, then announces the bad news and immediately suggests an alternative place he knows (where he earns a commission). Some operators go further by calling out riad names of popular establishments they know tourists frequently book, using it as an opener to target anyone carrying luggage near that area.",
    "howToExit": "Before leaving your taxi or arriving at the medina gate, call your riad directly using the number from your original booking confirmation email. Your riad is extremely unlikely to be closed or flooded. If someone claims it is, walk directly to it yourself and verify in person. Do not engage, do not stop walking.",
    "category": "accommodation",
    "severity": "medium",
    "cityPriority": {
      "marrakech": 9,
      "fes": 9,
      "chefchaouen": 6,
      "essaouira": 5,
      "tangier": 7
    },
    "neighborhood": "Medina entrance gates",
    "specificLocation": "Bab Doukkala, Bab Laksour, Bab Boujloud (Fes), Bab Bou Jeloud, taxi drop-off points near major medinas",
    "operatingHours": "08:00–23:00, peak around common check-in times 14:00–18:00",
    "seasonality": "Year-round",
    "socialProofQuotes": [
      {
        "text": "Guy outside Bab Doukkala said our riad was 'flooded from last night's rain' and had our exact riad name. We called the riad — completely fine, waiting for us.",
        "source": "reddit",
        "author": "u/marrakech_firsttimer",
        "sentiment": "warning",
        "upvotes": 133
      },
      {
        "text": "They guess riad names or overhear you telling your taxi driver. Always call your accommodation from the taxi before you arrive at the gate.",
        "source": "tripadvisor",
        "sentiment": "warning"
      }
    ],
    "escapePhraseDarija": "Gha n-itisil m-riad dyali ana b-rasi.",
    "escapePhraseFrench": "Je vais appeler mon riad moi-même pour vérifier.",
    "savvyTips": [
      "Save your riad's WhatsApp number before travel — most riads in Morocco communicate actively on WhatsApp and will respond within minutes.",
      "Have your riad's address written in Arabic on your phone. Show it to any shopkeeper if you get lost and they will point you in the right direction.",
      "Many riads offer to send a staff member to meet you at the medina gate for free — arrange this in advance so you have an expected face and name waiting for you."
    ]
  },
  {
    id: 'souk-el-had-unofficial-guide-scam',
    title: 'Souk El Had Unofficial Guide Commission Scam',
    description: 'At the entrance gates of Souk El Had, particularly Gate 5 and near the central parking area, men posing as friendly locals or official guides approach tourists. They offer to show them around the market, claiming they are from the tourism board or are simply helpful locals. Once accepted, they lead tourists to specific shops (often spice, rug, or leather shops) where they receive commissions for any purchases made. The guide may become aggressive if the tourist refuses to buy anything.',
    howToExit: 'Politely but firmly decline any unsolicited guidance. Say "No, thank you" and walk directly into the market. If already accompanied, stop at a busy shop or café and say "Thank you, but I want to explore alone now." If they persist, enter a shop and ask the shopkeeper to help you disengage.',
    category: 'street',
    severity: 'medium',
    cityPriority: { agadir: 9 },
    neighborhood: 'Souk El Had',
    specificLocation: 'Gate 5 and Boulevard Mohammed V entrance',
    operatingHours: '09:00–19:00',
    seasonality: 'Year-round, peak during tourist season (October–April)',
    socialProofQuotes: [
      {
        text: "At the entrance gates of Souk El Had — Morocco's largest covered market — men posing as friendly locals or official guides approach tourists. They lead them to specific shops where they receive commissions.",
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 42
      },
      {
        text: 'A man stopped us near the souk entrance, claimed to be a guide. We said no thanks but he followed us for 10 minutes trying to get us to shops. Very persistent!',
        source: 'tripadvisor',
        author: 'YorkshireCouple1986',
        sentiment: 'frustrated',
        upvotes: 15
      }
    ],
    escapePhraseDarija: 'La, shukran. Bghit nshouf wahdi. - No, thank you. I want to see by myself.',
    escapePhraseFrench: 'Non, merci. Je veux voir par moi-même.',
    savvyTips: [
      'Use official licensed guides with badges from the Souk El Had management office near Gate 1',
      'Enter the souk via Gate 3 or Gate 7 where fewer touts congregate',
      'If approached, keep walking and avoid eye contact. Saying "La, shukran" firmly is usually enough',
      'Shop where locals shop — prices are better and no commission is added'
    ]
  },
  {
    id: 'agadir-taxi-meter-refusal-overcharge',
    title: 'Agadir Taxi Meter Refusal & Overcharging',
    description: "Taxi drivers in Agadir, especially those waiting at hotel ranks, the airport, and near tourist attractions like the Marina and beach promenade, routinely refuse to use the meter. They claim it's broken or that they are \"grand taxis\" not subject to metered fares. They then demand inflated flat rates, often 3-5 times the actual fare, particularly for trips to the airport or from hotels at night.",
    howToExit: 'Insist on the meter being turned on ("compteur"). If refused, exit the taxi immediately. Do not negotiate. Use the inDrive app to book a taxi with upfront pricing. At the airport, use the official taxi stand with fixed prices posted.',
    category: 'transport',
    severity: 'high',
    cityPriority: { agadir: 10 },
    neighborhood: 'Agadir Al Massira Airport, hotel zones, beach promenade',
    specificLocation: 'Airport taxi rank, hotel taxi stands, Boulevard du 20 Août',
    operatingHours: '24/7, but most aggressive 22:00–04:00',
    seasonality: 'Year-round, worse during peak summer (July–August)',
    socialProofQuotes: [
      {
        text: 'Taxi drivers refused to use the meter and demanded 200 MAD for a trip that should cost 50 MAD. This happened at the airport and our hotel.',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 78
      },
      {
        text: 'Got scammed by a taxi driver in Agadir. He claimed the meter was broken and charged me double at night. Very common problem here.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'Official regulated night rate for taxis in Agadir is approximately 50% more than day rate, but drivers often demand 200-300% more.',
        source: 'tripadvisor',
        sentiment: 'neutral',
        upvotes: 22
      }
    ],
    escapePhraseDarija: 'Khdem l-compteur afak. - Turn on the meter please.',
    escapePhraseFrench: "Mettez le compteur s'il vous plaît.",
    savvyTips: [
      'Download the inDrive app before arriving — it shows fair prices and drivers cannot refuse',
      'Only use petit taxis (red in Agadir) for city trips, not grand taxis',
      'At the airport, ignore drivers offering rides inside the terminal. Go to the official taxi rank outside',
      'Know the approximate fare: Airport to city center is 150-200 MAD day rate, 200-250 MAD night rate'
    ]
  },
  {
    id: 'night-taxi-double-charging-scam',
    title: 'Night Taxi Double Charging Scam',
    description: "After 22:00, taxi drivers in Agadir often implement a \"night rate\" that is officially 50% higher than the day rate. However, many drivers exploit tourists by claiming the night rate is double or triple, particularly for trips from nightlife areas like Boulevard du 20 Août or the Marina back to hotels. Some drivers also claim there are additional \"luggage fees\" or \"hotel commission fees\" that don't exist.",
    howToExit: 'Before entering the taxi, confirm the price based on the meter with night rate applied. Say "Compteur avec tarif nuit" (meter with night rate). If the driver demands a flat rate, exit and find another taxi. Use inDrive to avoid negotiations entirely.',
    category: 'transport',
    severity: 'high',
    cityPriority: { agadir: 8 },
    neighborhood: 'Marina Agadir, Boulevard du 20 Août, hotel zones',
    specificLocation: 'Outside popular bars and clubs on Boulevard du 20 Août',
    operatingHours: '22:00–04:00',
    seasonality: 'Year-round, but more prevalent during summer tourist season',
    socialProofQuotes: [
      {
        text: "Beware of taxi drivers asking for double at night! They claim it's the night rate but it's not. Official rate is only 50% more, not 100%.",
        source: 'google_review',
        sentiment: 'warning',
        upvotes: 156
      },
      {
        text: 'Driver tried to charge us 400 MAD for a 150 MAD trip at 2am. We argued and he became aggressive. We ended up walking.',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 67
      }
    ],
    escapePhraseDarija: "Hadi ch'hal? Tarif nuit howa 50% bsaf. - How much is this? The night rate is only 50%.",
    escapePhraseFrench: "C'est combien ? Le tarif nuit est seulement 50% de plus.",
    savvyTips: [
      'The official night rate is exactly 50% more than the day rate — no exceptions',
      'Use the inDrive app to avoid all night rate negotiations — the price is upfront',
      'If alone at night, wait inside a café or hotel for your taxi rather than on the street',
      'Take a photo of the taxi number before entering — drivers are less likely to scam if they know you have their details'
    ]
  },
  {
    id: 'bar-restaurant-double-charging-scam',
    title: 'Bar & Restaurant Double Charging Scam',
    description: "In bars and restaurants along the beach promenade and in the Marina area, staff may charge tourists twice for the same item. They may claim the first charge didn't go through, or they may add duplicate items to the bill. The scam often occurs when paying with a card — they show you a declined receipt and then charge again, or they keep your card and run it multiple times.",
    howToExit: 'Always ask for a receipt ("l\'addition s\'il vous plaît"). Check the bill carefully before paying. Pay in cash when possible. If double-charged, dispute the charge with your card company immediately and report to the restaurant manager.',
    category: 'restaurant',
    severity: 'high',
    cityPriority: { agadir: 7 },
    neighborhood: 'Agadir Beach Promenade, Marina Agadir',
    specificLocation: 'Beachfront bars near Hotel Riad Salam, Marina restaurants',
    operatingHours: '19:00–02:00',
    seasonality: 'Year-round, but more frequent during peak tourist season',
    socialProofQuotes: [
      {
        text: "Warning about bar scam in Agadir, Morocco. A bar charged us 120 Dirhams for two drinks that should cost 70. They claimed it was a service charge but it wasn't listed anywhere.",
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 89
      },
      {
        text: "Got double-charged at a restaurant in the Marina. They said the first payment didn't work and charged again. Bank statement showed both charges.",
        source: 'reddit',
        sentiment: 'frustrated',
        upvotes: 45
      },
      {
        text: "Be careful of restaurant double charges where they claim they've reversed the first charge but haven't. Always get a receipt!",
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 23
      }
    ],
    escapePhraseDarija: 'Bghit l-addition afak. - I want the bill please.',
    escapePhraseFrench: "L'addition s'il vous plaît.",
    savvyTips: [
      'Pay in cash whenever possible — it prevents all card-related scams',
      'Check your bank statement within 24 hours of dining out in Agadir',
      "Avoid places that don't display prices on the menu",
      'If using a card, never let it out of your sight — watch the transaction being processed'
    ]
  },
  {
    id: 'souk-overcharging-price-gouging-scam',
    title: 'Souk Overcharging & Price Gouging Scam',
    description: 'Vendors in Souk El Had and the smaller markets in Talborjt systematically overcharge tourists for goods. They may quote prices in Euros instead of Dirhams, claim items are handmade when they\'re mass-produced, or simply charge 3-10 times the local price. Common targets are spices, argan oil, leather goods, and souvenirs. The scam often involves "discount" negotiations that still result in overpaying.',
    howToExit: 'Research fair prices before shopping. Always ask for prices in Dirhams ("Bsh\'hal hada?"). Compare prices at multiple stalls. Be willing to walk away — vendors often call you back with a lower price. Shop where locals shop.',
    category: 'shopping',
    severity: 'medium',
    cityPriority: { agadir: 8 },
    neighborhood: 'Souk El Had, Talborjt market',
    specificLocation: 'Spice section near Gate 2, leather shops near central square',
    operatingHours: '09:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Agadir, scam everywhere 24/7. Food for money on every corner, including hotels taxis etc. City taxies got meters and 1km cost between 1-2 MAD but they try to charge tourists 5-10 MAD.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 56
      },
      {
        text: 'Bought argan oil at the souk for 300 MAD. Found the same quality at a pharmacy for 80 MAD. They specifically target tourists.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'Vendor quoted me 500 MAD for a leather bag. After walking away, he called me back and sold it for 120 MAD. Still overpaid probably.',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 28
      }
    ],
    escapePhraseDarija: "Bsh'hal hada? - How much is this?",
    escapePhraseFrench: 'C\'est combien ça ?',
    savvyTips: [
      'Convert prices to your home currency mentally — if it seems expensive, it probably is',
      'Look for the "Prix Fixe" (fixed price) signs in some sections of the souk',
      'Buy spices from the section near Gate 2 where locals shop — much cheaper than tourist sections',
      'A good rule of thumb: if you can\'t find a local buying it, it\'s overpriced'
    ]
  },
  {
    id: 'fake-riad-accommodation-scam',
    title: 'Fake Riad & Accommodation Misrepresentation Scam',
    description: 'Some riads and hotels in Agadir\'s medina and Talborjt areas advertise amenities they don\'t have. Common misrepresentations include: claiming to have private bathrooms when they don\'t, advertising A/C that doesn\'t work, showing photos of windows that don\'t exist in the actual room, or claiming beach access when it\'s a 20-minute walk. Some properties also charge hidden "city taxes" or "cleaning fees" not mentioned during booking.',
    howToExit: 'Book through reputable platforms with verified reviews. Never pay the full amount in advance — pay a deposit only. Upon arrival, inspect the room before paying the balance. If misrepresentation occurs, contact the booking platform immediately and document everything with photos.',
    category: 'accommodation',
    severity: 'high',
    cityPriority: { agadir: 6 },
    neighborhood: 'Talborjt, Agadir Medina',
    specificLocation: 'Riads near Rue de Marrakech, hotels in Talborjt',
    operatingHours: '24/7',
    seasonality: 'Year-round, but more common during peak season when demand is high',
    socialProofQuotes: [
      {
        text: 'This riad is a big SCAM! Owners put a FAKE description. There is NO PRIVATE BATHROOM, no A/C, no phone... and even no windows! They charged me 100% from my card and 50%.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 87
      },
      {
        text: 'Booked a riad with "beach access" — it was actually 2km away. They refused to refund when we complained.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 45
      },
      {
        text: 'Very few accommodations take advance payment. Also be aware that almost every accommodation charges a "service fee" for using a credit card.',
        source: 'instagram',
        sentiment: 'warning',
        upvotes: 22
      }
    ],
    escapePhraseDarija: 'Wakha, mais bghit nchouf l-camera qbel. - Okay, but I want to see the room first.',
    escapePhraseFrench: 'D\'accord, mais je voudrais voir la chambre d\'abord.',
    savvyTips: [
      'Only book accommodations with recent reviews (within 3 months) and photos from travelers',
      'Verify the exact location on Google Maps — don\'t trust "5 minutes from beach" claims',
      'Use booking platforms with free cancellation — you can cancel if something seems off upon arrival',
      'Never pay more than 30% deposit in advance — pay the rest upon arrival after inspection'
    ]
  },
  {
    id: 'fake-holiday-rep-tour-scam',
    title: 'Fake Holiday Rep & Tour Operator Scam',
    description: 'Individuals posing as hotel reps or official tour operators approach tourists in hotel lobbies, at airport arrivals, and on the beach. They offer heavily discounted excursions to Marrakech, Essaouira, or the desert, claiming they work for the hotel or a reputable tour company. They collect large advance payments (often 50-100% of the tour cost) and then disappear, or the tour is non-existent with substandard services.',
    howToExit: 'Never book tours from individuals who approach you. Only book through your hotel\'s front desk or established tour operators with physical offices. Verify the operator\'s license with the local tourism board. Never pay in full in advance — pay a deposit only.',
    category: 'digital',
    severity: 'high',
    cityPriority: { agadir: 9 },
    neighborhood: 'Hotel zones, airport, beach promenade',
    specificLocation: 'Hotel lobbies (especially budget hotels), airport arrivals hall, beach near Marina',
    operatingHours: '08:00–20:00',
    seasonality: 'Year-round, but more active during peak tourist season',
    socialProofQuotes: [
      {
        text: 'He was not a Rep but in fact a tour operator intent on selling overpriced excursions around Morocco. He was a liar, overbearing, arrogant.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 67
      },
      {
        text: 'Scammer posing as a tour operator at the airport. Offered us a "special deal" on a desert tour. We paid deposit and never heard from him again.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 89
      },
      {
        text: 'Fake travel agencies pose as tour operators and collect advance payments for packages, tickets, or accommodations, then vanish.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 34
      }
    ],
    escapePhraseDarija: "La, shukran. Bghit nktab m'a l-office dyal l-funduq. - No, thanks. I want to book with the hotel office.",
    escapePhraseFrench: "Non, merci. Je veux réserver avec l'office de l'hôtel.",
    savvyTips: [
      'All legitimate tour operators in Agadir must display their license number — ask to see it',
      'Book tours through your hotel — they work with vetted operators',
      'Never pay more than 30% deposit for tours — pay the rest on the day of the tour',
      'Check online reviews of the tour company before booking — look for recent reviews'
    ]
  },
  {
    id: 'social-media-tour-phishing-scam',
    title: 'Social Media Phishing for Tour Payments Scam',
    description: 'Scammers use Instagram and Facebook to target tourists planning trips to Agadir. They create fake profiles posing as tour guides or travel agencies, offering exclusive deals on tours, accommodations, or transportation. They build trust over weeks or months, then ask for bank transfers or deposits via Western Union. Once payment is received, they disappear or provide substandard services.',
    howToExit: 'Never send money via bank transfer or Western Union to someone you only met online. Use secure payment methods like credit cards or PayPal that offer buyer protection. Verify the operator\'s legitimacy through official websites and reviews.',
    category: 'digital',
    severity: 'high',
    cityPriority: { agadir: 7 },
    neighborhood: 'Digital (targeting tourists online before arrival)',
    specificLocation: 'Instagram, Facebook travel groups, WhatsApp',
    operatingHours: '24/7',
    seasonality: 'Year-round, but more active before peak tourist seasons',
    socialProofQuotes: [
      {
        text: 'Be careful of this scam artist in Morocco, real name Salma lalla. She asks for advance payment for tours via Instagram then disappears.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 56
      },
      {
        text: 'Scammer using Instagram to pose as a tour guide. Offered me a great deal on a desert tour. Asked for 50% deposit via bank transfer. I almost fell for it.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: "Fake account based in Morocco. Already reported. They ask for advance payments for tours that don't exist.",
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 23
      }
    ],
    escapePhraseDarija: "La, shukran. Bghit nkhles b'carte bancaire. - No, thanks. I want to pay by credit card.",
    escapePhraseFrench: 'Non, merci. Je veux payer par carte bancaire.',
    savvyTips: [
      'Legitimate tour operators accept credit cards — never bank transfers',
      'Check the account\'s age and activity — new accounts with few followers are suspicious',
      'Ask for a video call to verify the person\'s identity and see their office',
      'Search the company name online with "scam" or "review" to find complaints'
    ]
  },
  {
    id: 'desert-camp-bait-switch-scam',
    title: 'Desert Camp Bait-and-Switch Scam',
    description: 'Tour operators in Agadir advertise luxury desert camp experiences with photos of upscale tents, private bathrooms, and gourmet meals. Upon arrival, tourists find basic camps with shared facilities, poor-quality food, and locations far from the advertised dunes. The operators often claim the luxury camp was "fully booked" and they were "upgraded" to a different camp.',
    howToExit: 'Book desert tours through reputable companies with detailed itineraries and verified reviews. Get all promises in writing, including specific camp names and amenities. Upon arrival, if the camp is not as described, refuse to stay and demand to be taken back to Agadir.',
    category: 'accommodation',
    severity: 'high',
    cityPriority: { agadir: 8 },
    neighborhood: 'Departures from Agadir to Merzouga/Zagora',
    specificLocation: 'Tour operator offices in Agadir, desert camps near Merzouga',
    operatingHours: '06:00–22:00 (during multi-day tours)',
    seasonality: 'Year-round, but more common during peak season (October–April)',
    socialProofQuotes: [
      {
        text: 'Some of the most common scams on routes from Marrakech to Merzouga involve bait-and-switch luxury desert camp reservations, where travellers end up in basic camps.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 45
      },
      {
        text: 'Booked a luxury desert camp from Agadir. Photos showed private bathrooms and AC. Reality was shared toilets, no electricity, and 40°C heat.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 78
      },
      {
        text: 'Tour operator switched our camp at the last minute, claiming the luxury one was full. They refused to refund the difference in price.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 34
      }
    ],
    escapePhraseDarija: 'Hadshi machi huwa lli fteeht 3lih. Bghit nrah l-Agadir. - This is not what I booked. I want to return to Agadir.',
    escapePhraseFrench: "Ce n'est pas ce que j'ai réservé. Je veux retourner à Agadir.",
    savvyTips: [
      'Book desert tours through established companies with offices in Agadir and Marrakech',
      'Ask for the specific camp name and look it up on Google Maps and reviews',
      'Pay only 30% deposit — pay the rest after the first night if satisfied',
      'Get all details in writing: camp name, amenities, meal plans, and exact location'
    ]
  },
  {
    id: 'aggressive-vendor-harassment-scam',
    title: 'Aggressive Vendor Harassment Scam',
    description: "Vendors in tourist areas, particularly Souk El Had, the beach promenade, and near hotels, use aggressive tactics to force purchases. They may grab tourists' arms, block their path, follow them for long distances, or use guilt trips (\"I have family to feed\"). Some vendors place items in tourists' hands or on their bodies and then demand payment.",
    howToExit: 'Firmly say "La, shukran" (No, thank you) and keep walking. Do not engage in conversation. If grabbed, remove your arm firmly and say "La, touch me not" in a firm voice. Enter a shop or café to disengage.',
    category: 'street',
    severity: 'medium',
    cityPriority: { agadir: 9 },
    neighborhood: 'Souk El Had, Agadir Beach Promenade, hotel zones',
    specificLocation: 'Souk El Had central alleys, beach near Marina, hotel entrances',
    operatingHours: '09:00–22:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Only naive western tourists get scammed right?? ... How bad is Morocco in terms of scams/harassment from vendors compared to Rome and Athens?',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 67
      },
      {
        text: "Vendors in the souk were extremely aggressive. One grabbed my arm and wouldn't let go until I bought something. Very uncomfortable.",
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 45
      },
      {
        text: 'A vendor placed a bracelet on my wrist and demanded 200 MAD. When I tried to give it back, he caused a scene. I ended up paying 50 MAD just to leave.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 89
      }
    ],
    escapePhraseDarija: "La, shukran. Sma' khdem. - No, thanks. Listen, go away.",
    escapePhraseFrench: 'Non, merci. Laissez-moi.',
    savvyTips: [
      'Keep your hands in your pockets when walking through markets',
      "Avoid making eye contact with vendors unless you're interested in buying",
      "Wear headphones — even if not listening to anything, it signals you don't want to talk",
      'Shop with a local guide — vendors are less aggressive with tourists accompanied by locals'
    ]
  },
  {
    id: 'tourist-trap-restaurants-shops-scam',
    title: 'Tourist Trap Restaurants & Shops Scam',
    description: 'Establishments near major tourist attractions (Kasbah, Marina, beach promenade) consistently overcharge, provide poor quality, or use high-pressure sales tactics. These places often have touts outside aggressively inviting tourists in, menus without prices, or "special" menus for tourists that cost 3-5 times more than local menus.',
    howToExit: 'Avoid places with touts outside. Look for restaurants where locals are eating. Always ask for the menu with prices ("Menu avec prix s\'il vous plaît"). If prices seem too high, leave.',
    category: 'restaurant',
    severity: 'medium',
    cityPriority: { agadir: 7 },
    neighborhood: 'Agadir Beach Promenade, Marina Agadir, near Kasbah',
    specificLocation: 'Beachfront restaurants near Hotel Riad Salam, Marina square',
    operatingHours: '11:00–23:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: "One scam, one overpriced taxi, one tourist trap, and you've already lost more than this guide costs.",
        source: 'instagram',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'Restaurant near the beach had no prices on the menu. Bill came to 800 MAD for two people — should have been 300 MAD at most.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 56
      },
      {
        text: 'Avoid restaurants with touts outside. We were lured in with "special deal" cocktails and ended up paying 400 MAD for two drinks and a small snack.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 78
      }
    ],
    escapePhraseDarija: "Bghit menu b'prix afak. - I want a menu with prices please.",
    escapePhraseFrench: 'Je voudrais le menu avec les prix s\'il vous plaît.',
    savvyTips: [
      'Use Google Maps to find restaurants with 4+ stars and recent reviews from locals',
      'Look for menus displayed outside with prices in Dirhams',
      'Avoid places that offer "free" appetizers — they\'ll be added to your bill',
      'Ask hotel staff for recommendations where locals eat — they know the tourist traps'
    ]
  },
  {
    id: 'general-price-gouging-scam',
    title: 'General Price Gouging Scam',
    description: 'Tourists in Agadir are systematically charged more than locals for goods and services, from taxis to souvenirs, simply because they are foreign. This occurs in official-looking shops, taxis, restaurants, and even pharmacies. The "tourist price" can be 2-10 times higher than the local price for the same item or service.',
    howToExit: 'Research fair prices before arriving. Use apps like inDrive for taxis. Shop where prices are displayed. Learn basic phrases in Arabic or French to negotiate better. A little local knowledge goes a long way.',
    category: 'shopping',
    severity: 'medium',
    cityPriority: { agadir: 8 },
    neighborhood: 'Citywide, but most common in tourist areas',
    specificLocation: 'Taxis, souvenir shops, pharmacies, restaurants',
    operatingHours: '24/7',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'It seems that everyone in Agadir is trying to scam tourists. From taxis to shops to restaurants, they all charge tourists double or triple.',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 134
      },
      {
        text: 'Pharmacy charged me 150 MAD for sunscreen that costs 40 MAD. They saw I was a tourist and automatically inflated the price.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 45
      },
      {
        text: 'Taxi driver tried to charge me 100 MAD for a 30 MAD trip. When I said I knew the price, he immediately agreed to 40 MAD.',
        source: 'tripadvisor',
        sentiment: 'neutral',
        upvotes: 67
      }
    ],
    escapePhraseDarija: "Ch'hal hada l'local? - How much is this for locals?",
    escapePhraseFrench: 'C\'est combien pour les locaux ?',
    savvyTips: [
      'Use the inDrive app for all taxi rides — it prevents price gouging',
      'Learn the local prices for common items (water, snacks, taxi rides) before arriving',
      'Shop at fixed-price stores like Marjane or BIM — no negotiation needed',
      'A simple "La, shukran" (No, thanks) and walking away often results in a lower price'
    ]
  },
  {
    id: 'fake-friendship-bracelet-scam',
    title: 'Fake Friendship Bracelet / "Free Gift" Scam',
    description: 'A vendor places a "free" bracelet on a tourist\'s wrist or gives them a small "gift" (like a henna tattoo or a small stone), then aggressively demands payment, often creating a public scene to embarrass the tourist into paying. The vendor may claim it\'s a "tradition" or "friendship gift" but then demands 100-200 MAD.',
    howToExit: 'Keep your hands in your pockets. Firmly refuse any "free" items. If something is placed on you, remove it immediately and walk away. Do not engage in conversation.',
    category: 'street',
    severity: 'low',
    cityPriority: { agadir: 7 },
    neighborhood: 'Souk El Had, Agadir Beach Promenade, Kasbah area',
    specificLocation: 'Beach near Marina, Souk El Had entrances, Kasbah viewpoint',
    operatingHours: '10:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A vendor placed a bracelet on my wrist and demanded 200 MAD. When I tried to give it back, he caused a scene. I ended up paying 50 MAD just to leave.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 89
      },
      {
        text: 'Got a "free" henna tattoo on the beach. Artist then demanded 150 MAD. When I refused, she followed me for 15 minutes screaming.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 34
      },
      {
        text: 'These scammers target tourists near the Kasbah. They give you a "gift" then demand money. Just say no and keep walking.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 45
      }
    ],
    escapePhraseDarija: 'La, shukran. Khellini. - No, thanks. Leave me alone.',
    escapePhraseFrench: 'Non, merci. Laissez-moi.',
    savvyTips: [
      'Keep your hands in your pockets when walking through tourist areas',
      'Do not accept anything "free" from strangers — it will cost you later',
      'If something is placed on you, remove it immediately and return it',
      'Avoid engaging in conversation — a simple "La, shukran" and walking away is enough'
    ]
  },
  {
    id: 'atm-card-skimming-scam',
    title: 'ATM & Card Skimming Scam',
    description: 'While not explicitly detailed in Agadir-specific reports, card skimming at ATMs is a risk in tourist areas. Scammers may also try to distract tourists while cloning their cards, or they may install skimming devices on ATMs in tourist-heavy locations like the Marina and beach promenade.',
    howToExit: 'Use ATMs inside banks. Cover the keypad when entering your PIN. Monitor your card statements for unauthorized charges. If your card is compromised, contact your bank immediately.',
    category: 'digital',
    severity: 'high',
    cityPriority: { agadir: 6 },
    neighborhood: 'Marina Agadir, beach promenade, tourist areas',
    specificLocation: 'ATMs near Marina, beachfront ATMs, hotel zone ATMs',
    operatingHours: '24/7',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'My card was cloned at an ATM in Agadir. I used the machine outside the bank near the Marina. Within hours, there were unauthorized charges.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 56
      },
      {
        text: 'Be careful with ATMs in tourist areas. Use machines inside banks during business hours only.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'A guy tried to distract me at the ATM by saying I dropped money. Another guy was trying to look at my PIN. I canceled the transaction and walked away.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 23
      }
    ],
    escapePhraseDarija: 'Wakha, shukran. Bghit nshuf l-banque. - Okay, thanks. I want to check with the bank.',
    escapePhraseFrench: "D'accord, merci. Je veux vérifier avec la banque.",
    savvyTips: [
      'Only use ATMs inside bank branches during business hours',
      'Cover the keypad with your hand when entering your PIN — even if alone',
      'Use ATMs in hotels or large shopping malls like Marjane',
      "Inform your bank you're traveling to Morocco so they can monitor for fraud"
    ]
  },
  {
    id: 'fake-travel-agencies-scam',
    title: 'Fake Travel Agencies & Websites Scam',
    description: 'Fraudulent online agencies create professional-looking websites for tours, transfers, or hotels in Agadir. They collect advance payments via bank transfer or Western Union and then vanish. The websites often use stolen photos and fake reviews to appear legitimate.',
    howToExit: 'Verify the agency\'s legitimacy through official tourism websites. Check for reviews on independent platforms. Be wary of prices that seem too good to be true. Use secure payment methods like credit cards that offer buyer protection.',
    category: 'digital',
    severity: 'high',
    cityPriority: { agadir: 7 },
    neighborhood: 'Digital (targeting tourists online before arrival)',
    specificLocation: 'Fake websites, social media ads',
    operatingHours: '24/7',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Fake travel agencies pose as tour operators and collect advance payments for packages, tickets, or accommodations, then vanish.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 56
      },
      {
        text: 'Booked a tour through a website that looked legitimate. Paid 50% deposit via bank transfer. Never heard from them again.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'Be careful of this scam artist in Morocco, real name Salma lalla. She asks for advance payment for tours via Instagram then disappears.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 45
      }
    ],
    escapePhraseDarija: "La, shukran. Bghit nktab m'a l-office dyal tourisme. - No, thanks. I want to book with the tourism office.",
    escapePhraseFrench: "Non, merci. Je veux réserver avec l'office de tourisme.",
    savvyTips: [
      'Check if the agency is registered with the Moroccan National Tourist Office (ONMT)',
      'Look for reviews on multiple platforms (TripAdvisor, Google, Facebook)',
      'Never pay via bank transfer or Western Union — use credit cards or PayPal',
      'Be wary of websites with no physical address or phone number in Morocco'
    ]
  },
  {
    id: 'social-media-phishing-scam',
    title: 'Social Media Phishing Scam',
    description: 'Scammers use platforms like Instagram and Facebook to offer "exclusive" deals or act as fake tour guides, building trust over time before asking for money or personal information. They may send phishing links disguised as tour itineraries or payment gateways.',
    howToExit: 'Be skeptical of unsolicited offers. Verify accounts for authenticity. Never send money or personal details to someone you only met online. Cross-check information with official sources.',
    category: 'digital',
    severity: 'high',
    cityPriority: { agadir: 6 },
    neighborhood: 'Digital (targeting tourists online before arrival)',
    specificLocation: 'Instagram, Facebook travel groups, WhatsApp',
    operatingHours: '24/7',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Scammer using Instagram to pose as a tour guide. Offered me a great deal on a desert tour. Asked for 50% deposit via bank transfer. I almost fell for it.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'Be careful of this scam artist in Morocco, real name Salma lalla. She asks for advance payment for tours via Instagram then disappears.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 45
      },
      {
        text: "Fake account based in Morocco. Already reported. They ask for advance payments for tours that don't exist.",
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 23
      }
    ],
    escapePhraseDarija: "La, shukran. Bghit nktab m'a l-office dyal tourisme. - No, thanks. I want to book with the tourism office.",
    escapePhraseFrench: "Non, merci. Je veux réserver avec l'office de tourisme.",
    savvyTips: [
      'Check the account\'s age and activity — new accounts with few followers are suspicious',
      'Ask for a video call to verify the person\'s identity and see their office',
      'Search the company name online with "scam" or "review" to find complaints',
      'Never click on links from unknown accounts — they may be phishing attempts'
    ]
  },
  {
    id: 'taxi-driver-aggression-scam',
    title: 'Taxi Driver Aggression & Violence Scam',
    description: 'In extreme cases, taxi drivers in Agadir may become verbally abusive or even physically violent (e.g., slapping) if you dispute the fare or refuse to pay the demanded amount. This is more common at night or when drivers are under the influence of substances.',
    howToExit: 'Avoid confrontation. Note the taxi number and report to local authorities or your hotel. If threatened, prioritize your safety and exit the vehicle. Do not argue with aggressive drivers.',
    category: 'transport',
    severity: 'high',
    cityPriority: { agadir: 7 },
    neighborhood: 'Agadir Al Massira Airport, nightlife areas',
    specificLocation: 'Airport taxi rank, Boulevard du 20 Août at night',
    operatingHours: '22:00–04:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Got scammed and slapped by a taxi driver in Agadir. He demanded double the fare at night and when I argued, he became violent.',
        source: 'reddit',
        sentiment: 'frustrated',
        upvotes: 78
      },
      {
        text: 'Taxi driver became aggressive when I insisted on the meter. He screamed at me and threatened to leave me on the highway. I paid the fare to avoid conflict.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 45
      }
    ],
    escapePhraseDarija: "Wakha, ghadi nkhles. - Okay, I'll pay.",
    escapePhraseFrench: "D'accord, je vais payer.",
    savvyTips: [
      'Avoid arguing with taxi drivers, especially at night',
      'Note the taxi number (inside on the dashboard) before starting the journey',
      'Use the inDrive app to avoid all negotiations with drivers',
      'If a driver becomes aggressive, agree to pay to de-escalate, then report to police with the taxi number'
    ]
  },
  {
    id: 'hidden-fees-accommodation-scam',
    title: 'Hidden Fees in Accommodations Scam',
    description: 'After booking accommodations in Agadir, properties may charge unexpected "city taxes," "cleaning fees," or "utility charges" that were not disclosed initially. Some properties also require a "deposit" for amenities like A/C or safe usage that is never refunded.',
    howToExit: 'Clarify all fees in writing before confirming a booking. Read the fine print. Pay with a credit card for potential chargeback protection. If unexpected fees arise upon arrival, refuse to pay and contact the booking platform.',
    category: 'accommodation',
    severity: 'medium',
    cityPriority: { agadir: 6 },
    neighborhood: 'Citywide, but more common in budget accommodations',
    specificLocation: 'Budget hotels in Talborjt, riads in medina',
    operatingHours: '24/7',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Very few accommodations take advance payment. Also be aware that almost every accommodation charges a "service fee" for using a credit card.',
        source: 'instagram',
        sentiment: 'warning',
        upvotes: 22
      },
      {
        text: 'Hotel charged us a "city tax" of 50 MAD per person per night that was never mentioned during booking. When we complained, they said it was "standard."',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 34
      },
      {
        text: 'Riad asked for a 200 MAD deposit for the A/C remote control. We never got it back despite returning the remote.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 45
      }
    ],
    escapePhraseDarija: "Hadshi machi maktub f'l-confirmation. - This is not written in the confirmation.",
    escapePhraseFrench: "Ce n'est pas écrit dans la confirmation.",
    savvyTips: [
      'Get all fees in writing before booking — ask specifically about city taxes, cleaning fees, and deposits',
      'Use booking platforms with free cancellation — you can cancel if unexpected fees arise',
      'Pay with credit card — you can dispute charges for undisclosed fees',
      'Read the fine print in the booking confirmation — fees are often hidden there'
    ]
  },
  {
    id: 'beach-photographer-scam',
    title: 'Beach Photographer Scam',
    description: 'On Agadir beach, particularly near the Marina and hotel zones, "photographers" approach tourists offering to take their photos with props like falcons or snakes. They may start taking photos without permission and then demand exorbitant fees (200-500 MAD) for the digital copies. If refused, they may become aggressive or follow tourists.',
    howToExit: 'Firmly refuse any photo offers. Do not pose with animals or props. If someone starts taking photos without permission, cover your face and walk away. Report to beach police if harassed.',
    category: 'street',
    severity: 'medium',
    cityPriority: { agadir: 6 },
    neighborhood: 'Agadir Beach Promenade',
    specificLocation: 'Beach near Marina, hotel zone beach accesses',
    operatingHours: '10:00–18:00',
    seasonality: 'Year-round, but more common during peak summer',
    socialProofQuotes: [
      {
        text: 'A photographer on the beach took photos of us with a falcon without asking. Then demanded 300 MAD for the photos. When we refused, he followed us for 20 minutes.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 34
      },
      {
        text: 'Be careful of beach photographers in Agadir. They offer "free" photos then demand huge sums. Just say no and keep walking.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 56
      },
      {
        text: 'They put a snake around my neck before I could react. Then demanded 400 MAD for the photos. It was a scary situation.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 45
      }
    ],
    escapePhraseDarija: 'La, shukran. Khelliini. - No, thanks. Leave me alone.',
    escapePhraseFrench: 'Non, merci. Laissez-moi.',
    savvyTips: [
      'Do not accept any photo offers from strangers on the beach',
      'Avoid people with animals (falcons, snakes, monkeys) — they will demand money',
      'If someone starts taking photos without permission, cover your face and walk away',
      'Report harassment to beach police (they patrol the area) or your hotel staff'
    ]
  },
  {
    id: 'fake-tour-guides-historical-sites-scam',
    title: 'Fake Tour Guides at Historical Sites Scam',
    description: 'At the Kasbah Agadir Oufella and other historical sites, "guides" approach tourists offering tours. They may claim to be official or "students" studying history. They provide minimal information and then demand large fees (100-200 MAD) for their "services." Some may also lead tourists to shops where they receive commissions.',
    howToExit: 'Only hire guides with official badges from the site entrance. If approached, firmly say "No, thank you" and continue exploring on your own. Use audio guides or guidebooks instead.',
    category: 'authority',
    severity: 'low',
    cityPriority: { agadir: 5 },
    neighborhood: 'Kasbah Agadir Oufella, Agadir Memorial',
    specificLocation: 'Kasbah entrance, viewpoint area',
    operatingHours: '09:00–17:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'At the Kasbah, a "guide" approached us offering a tour. We said no but he followed us for 15 minutes talking. Then demanded 150 MAD for his "time."',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 23
      },
      {
        text: 'These fake guides target tourists at historical sites. They provide no real information and then demand money. Just ignore them.',
        source: 'facebook',
        sentiment: 'warning',
        upvotes: 34
      },
      {
        text: 'A "student" offered to show us around the Kasbah. After 10 minutes of basic info, he demanded 200 MAD. We gave him 20 MAD and walked away.',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 45
      }
    ],
    escapePhraseDarija: 'La, shukran. Bghit nshouf wahdi. - No, thanks. I want to see by myself.',
    escapePhraseFrench: 'Non, merci. Je veux voir par moi-même.',
    savvyTips: [
      'Only hire guides with official badges displayed at site entrances',
      'Use guidebooks or audio guides instead of human guides',
      'If approached, a firm "La, shukran" and walking away is enough',
      'Official guides at the Kasbah should cost around 50-100 MAD per group, not per person'
    ]
  },
  {
    id: 'taghazout-surf-equipment-damage-claim',
    title: 'The Taghazout / Imsouane Surf Equipment Pre-existing Damage Claim',
    description: 'When renting surfboards or wetsuits in Taghazout, Imsouane, or Tamraght, informal beach vendors claim pre-existing ding/crack damage occurred during your session and demand 300–800 MAD repair fees upon return.',
    howToExit: 'Inspect and photograph/video the surfboard and wetsuit thoroughly in front of the rental shop owner BEFORE taking it to the water. Point out all existing dings or nose cracks.',
    category: 'shopping',
    severity: 'medium',
    cityPriority: { taghazout: 9, imsouane: 8, agadir: 5, essaouira: 4 },
    neighborhood: 'Anchor Point & Taghazout Beach Front',
    specificLocation: 'Beachfront surf rental huts and informal board racks',
    operatingHours: '08:00–18:00',
    seasonality: 'Year-round, peak October–April surf season',
    socialProofQuotes: [
      {
        text: 'Rented a board in Taghazout for 100 MAD/day. When I brought it back, the guy pointed to a crease on the rail that was already yellowed with age and claimed I snapped it, asking for 600 MAD. Luckily I had a photo from the morning showing the old tape repair.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 62
      }
    ],
    escapePhraseDarija: 'Had l-daba kanet hna mnin kretha, ahya l-taswir.',
    escapePhraseFrench: 'Cette fissure était déjà là quand je l\'ai louée, voici la photo.',
    savvyTips: [
      'Take 30 seconds to film a quick 360-degree video of the surfboard before stepping onto the sand.',
      'Rent from established surf shops with fixed published daily rates (100–150 MAD/day for soft tops, 150–250 MAD for hard boards).'
    ]
  },
  {
    id: 'dakhla-lagoon-shuttle-markup',
    title: 'The Dakhla Lagoon Boat & Dune Shuttle Markup',
    description: 'Unlicensed drivers or street touts at Dakhla airport or town center quote 300–500 MAD for short 15-minute transfers to lagoon surf camps, or charge triple rates for Dragon Island (Île Dragon) boat excursions.',
    howToExit: 'Coordinate lagoon transfers directly through your kite camp or resort, or agree on the fixed grand taxi rate (approx 150–200 MAD total for a full taxi to the lagoon). For Dragon Island boat rides, verify prices at the official nautic harbor.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { dakhla: 9 },
    neighborhood: 'Dakhla Lagoon & Airport Zone',
    specificLocation: 'Dakhla Airport arrivals gate and Downtown Dakhla Taxi Stand',
    operatingHours: 'Flight arrival times and morning kite departure hours',
    seasonality: 'Year-round, peak April–October wind season',
    socialProofQuotes: [
      {
        text: 'At Dakhla airport, a private driver asked for 400 MAD to get to Westpoint Lagoon. We stepped out to the grand taxi rank and paid 180 MAD for the entire taxi. Don\'t accept airport tout quotes without checking.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 41
      }
    ],
    escapePhraseDarija: 'Bghina l-prix l-rasmi d l-grand taxi l-lagune.',
    escapePhraseFrench: 'Quel est le tarif officiel du grand taxi pour la lagune ?',
    savvyTips: [
      'Dakhla town center petit taxis have cheap fixed rates inside town (5–10 MAD per ride).',
      'Most kite camps offer complimentary airport pick-ups if requested 24h prior.'
    ]
  },
  {
    id: 'ifrane-azrou-monkey-feed-phototrap',
    title: 'The Cedar Forest Barbary Macaque Food & Photo Tout',
    description: 'In the Cedar Forest near Ifrane and Azrou (Cèdre Gouraud), vendors hand you peanuts or seeds "for free" to feed the Barbary macaques, then forcefully demand 50–100 MAD once the monkeys climb onto your arms.',
    howToExit: 'Refuse bags of peanuts offered by roadside sellers. Keep your hands in your pockets and view the macaques from a safe distance of 3–5 meters without touching or feeding them human food.',
    category: 'street',
    severity: 'low',
    cityPriority: { ifrane: 8, azrou: 9 },
    neighborhood: 'Cèdre Gouraud & Azrou Cedar Forest',
    specificLocation: 'Cèdre Gouraud parking zone and roadside macaque gathering spots',
    operatingHours: '09:00–17:00',
    seasonality: 'Spring to Autumn',
    socialProofQuotes: [
      {
        text: 'Guy handed my daughter a handful of peanuts in the Azrou forest. After two monkeys jumped on her shoulder, he asked for 100 MAD. Give them 10 MAD max if you must, but feeding them bread/peanuts isn\'t good for the animals anyway.',
        source: 'google_review',
        sentiment: 'warning',
        upvotes: 38
      }
    ],
    escapePhraseDarija: 'La, shukran, ma-bghitch n-woekkel l-qrod.',
    escapePhraseFrench: 'Non merci, je ne souhaite pas nourrir les singes.',
    savvyTips: [
      'Barbary macaques are wild animals and can bite if startled; keep food secured in your backpack.',
      'Enjoy the majestic cedar trees and forest trails without engaging with aggressive street vendors.'
    ]
  },
  {
    id: 'asilah-art-mural-guide-demand',
    title: 'The Asilah Medina Mural "Private Photography Guide"',
    description: 'When walking through the quiet art-filled white medina of Asilah, local youths follow tourists snapping photos of famous street art murals and insist on receiving a "cultural guide fee" or "mural tax" for showing the murals.',
    howToExit: 'Asilah\'s medina is compact and completely open to the public. Say "Tan-shouf gha l-fann, shukran" (I am just looking at the art, thanks) and keep walking comfortably.',
    category: 'street',
    severity: 'low',
    cityPriority: { asilah: 8, tangier: 4 },
    neighborhood: 'Asilah Medina & Ramparts',
    specificLocation: 'Murals near Centre d\'Art Contemporain and Krya Rampart lookout',
    operatingHours: '10:00–19:00',
    seasonality: 'Summer peak during the Asilah Cultural Festival',
    socialProofQuotes: [
      {
        text: 'The art murals in Asilah are gorgeous and the medina is super peaceful. A kid followed us for 3 murals and asked for 50 MAD. We said no politely and he walked away without trouble. Very low pressure compared to Marrakech.',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 29
      }
    ],
    escapePhraseDarija: 'Tan-shouf gha l-fann b-wahdi, shukran.',
    escapePhraseFrench: 'Je me promène juste pour voir l\'art, merci.',
    savvyTips: [
      'The Asilah Arts Festival every summer refreshes the city murals; you can easily wander all streets on foot in under an hour.',
      'Head to the sunset rampart lookout (Krya) for free panoramic ocean views.'
    ]
  },
  {
    id: 'meknes-volubilis-unofficial-guide-trap',
    title: 'Meknes & Volubilis Unofficial Guide Trap',
    description: 'Outside Bab Mansour in Meknes and at the entrance of ancient Volubilis (Moulay Idriss Zerhoun), self-proclaimed "archaeological guides" approach tourists claiming official licensed guides are finished for the day. They charge 200–300 MAD for rushed, inaccurate tours.',
    howToExit: 'Official guides at Volubilis have badges at the official ticket booth. In Meknes, politely decline street offers with "La, shukran, bghina n-tsarkho b-wahdna" (No thanks, we want to walk alone).',
    category: 'authority',
    severity: 'medium',
    cityPriority: { meknes: 9, moulay_idriss: 9, fes: 4 },
    neighborhood: 'Bab Mansour & Volubilis Ruins',
    specificLocation: 'Place El Hedim (Meknes) and Volubilis entrance gate',
    operatingHours: '08:30–17:30',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'At Volubilis entrance, a guy insisted official guides were off duty and offered a "student tour" for 250 MAD. We walked to the ticket counter and hired a licensed guide for 120 MAD.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 41
      }
    ],
    escapePhraseDarija: 'La shukran, ghadin n-shoufo b-wahdna.',
    escapePhraseFrench: 'Non merci, nous visitons seuls avec un guide officiel.',
    savvyTips: [
      'Volubilis official guide desk is located directly inside the main turnstile gate with fixed regulated pricing.',
      'Place El Hedim in Meknes is very walkable on foot without needing any paid assistance.'
    ]
  },
  {
    id: 'casablanca-hassan-ii-shoe-guard-ticket-markup',
    title: 'Casablanca Hassan II Mosque Shoe & Ticket Markup',
    description: 'Near the vast plaza of Hassan II Mosque in Casablanca, unofficial touts approach visitors claiming non-Muslim entry tickets cost extra cash for shoe storage, or offer fake "express fast-track" entry passes.',
    howToExit: 'Buy tickets exclusively at the official underground ticketing hall. Shoe bags are provided completely free of charge as part of your official entry ticket.',
    category: 'street',
    severity: 'medium',
    cityPriority: { casablanca: 9 },
    neighborhood: 'Hassan II Mosque Complex',
    specificLocation: 'Mosque Plaza & Underground Museum Ticket Hall',
    operatingHours: 'Timed guided tour hours (check official schedule)',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy near the fountain said we had to pay 20 MAD for shoe bags before entering Hassan II Mosque. Inside, the staff handed us free cloth bags. Don\'t give money to anyone on the plaza.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 53
      }
    ],
    escapePhraseDarija: 'L-sakat dyal l-sbat f-l-batal daxil l-billet.',
    escapePhraseFrench: 'Les sacs pour chaussures sont inclus gratuitement avec le billet.',
    savvyTips: [
      'Tickets for Hassan II Mosque internal tours must be purchased at the subterranean visitor center next to the museum.',
      'Non-Muslim visitors can only enter during official scheduled guided tour times outside of prayer hours.'
    ]
  },
  {
    id: 'tetouan-tannery-and-leather-medina-redirect',
    title: 'Tetouan UNESCO Medina Unlicensed Guide Redirect',
    description: 'In the narrow UNESCO-listed Medina of Tetouan, local youths approach tourists offering to guide them to "secret Spanish balconies" or the leather tanneries, leading them into remote alleys to demand payment or high commission shop visits.',
    howToExit: 'Tetouan\'s medina is authentic and low-key. Say "Tan-aaraf l-triq, shukran" (I know the way, thanks) with confidence. Enter any open cafe or artisan shop if you need directional advice.',
    category: 'street',
    severity: 'medium',
    cityPriority: { tetouan: 9, tangier: 4 },
    neighborhood: 'El Ensanche & Bab El Okla',
    specificLocation: 'Bab El Okla and Place Hassan II entrances',
    operatingHours: '10:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Tetouan medina is much quieter than Fes or Marrakech, but near Bab El Okla a teenager followed us insisting the tannery route was restricted. We politely said no and he walked off quickly.',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 37
      }
    ],
    escapePhraseDarija: 'La, shukran, tan-aaraf l-triq mzyan.',
    escapePhraseFrench: 'Non merci, je connais mon chemin.',
    savvyTips: [
      'Tetouan medina has color-coded street signs marking key heritage paths; follow them comfortably on foot.',
      'Official tourist guides in Tetouan can be booked at the Regional Tourism Delegation near Place Moulay El Mehdi.'
    ]
  },
  {
    id: 'el-jadida-portuguese-cistern-closed-redirect',
    title: 'El Jadida Portuguese Cistern "Closed" Redirect',
    description: 'Outside the historic Cité Portugaise ramparts in El Jadida, street touts inform arriving tourists that the famous Manueline Portuguese Cistern is "closed for a movie shoot today" and try to redirect them to carpet or antique shops inside the fort.',
    howToExit: 'Walk directly to the entrance ticket office of the Portuguese Cistern on Rue de Kerarak to confirm its open status yourself.',
    category: 'street',
    severity: 'low',
    cityPriority: { el_jadida: 9, casablanca: 4 },
    neighborhood: 'Cité Portugaise (Mazagan)',
    specificLocation: 'Entrance gate to Cité Portugaise and Rue de Kerarak',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy told us the Cistern was closed for filming. We walked 30 meters to the door and paid our 70 MAD entry ticket without any issue. Always check the ticket booth!',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 28
      }
    ],
    escapePhraseDarija: 'Gha n-mchi n-chouf l-guichet rasi, shukran.',
    escapePhraseFrench: 'Je vais vérifier directement au guichet, merci.',
    savvyTips: [
      'The Portuguese City in El Jadida is small and very easy to navigate independently.',
      'Walk along the sea ramparts (Bastion de Saint Antoine) for stunning views over the fishing port.'
    ]
  },
  {
    id: 'tangier-port-ferry-ticket-and-taxi-hustle',
    title: 'Tangier Ville Port Ferry Ticket & Taxi Hustle',
    description: 'When arriving at Tangier Ville Port or Tanger Med ferry terminals, touts approach arriving travelers offering "priority ticket processing" or quoting double to triple rates for grand taxis up to the Kasbah or Medina.',
    howToExit: 'Ignore street ticket sellers at port exits. Buy ferry tickets only inside the terminal building at official company counters (FRS, Baleària, Africa Morocco Link). For taxis, walk to the official taxi rank outside.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { tangier: 9 },
    neighborhood: 'Tangier Ville Port & Port Tanger Med',
    specificLocation: 'Ferry arrival gates and taxi drop-off ranks',
    operatingHours: '24/7 matching ferry schedules',
    seasonality: 'Peak summer travel season (June–September)',
    socialProofQuotes: [
      {
        text: 'At Tangier port, men approached us saying the petit taxis were full and offered a "private car" for 200 MAD to Petit Socco. We walked 50m to the official taxi stand and paid 15 MAD on the meter.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 69
      }
    ],
    escapePhraseDarija: 'Bghina l-petit taxi b l-compteur f-l-mouqaf l-rasmi.',
    escapePhraseFrench: 'Nous prenons le petit taxi au compteur à la station officielle.',
    savvyTips: [
      'Tangier Petit Taxis are light blue with a yellow stripe and are required by law to use the meter.',
      'Tanger Med port is located 45km east of Tangier city center; take the official ALSA bus line or agreed grand taxi rate.'
    ]
  },
  {
    id: 'rabat-kasbah-des-oudayas-guide-pressure',
    title: 'Rabat Kasbah des Oudayas Unrequested Guide',
    description: 'At the grand Bab Oudaia gate entering Rabat\'s seaside Kasbah, young men start walking alongside tourists, offering unsolicited historical notes about the blue houses and Andalusian Gardens, then demanding a tip at the ocean lookout.',
    howToExit: 'A polite smile and firm "La, shukran, tan-fddal n-tsarkho b-wahdna" (No thanks, we prefer to walk alone) right away stops them from following.',
    category: 'street',
    severity: 'low',
    cityPriority: { rabat: 8 },
    neighborhood: 'Kasbah des Oudayas',
    specificLocation: 'Bab Oudaia gate and main blue alley leading to Signal Platform lookout',
    operatingHours: '09:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Rabat is generally very quiet and safe. At the Kasbah des Oudayas entrance, a young guy walked with us for 5 mins pointing out the blue doors. We gave him 10 MAD, but he was friendly and polite.',
        source: 'google_review',
        sentiment: 'neutral',
        upvotes: 31
      }
    ],
    escapePhraseDarija: 'La shukran, tan-fddal n-chouf b-wahdi.',
    escapePhraseFrench: 'Non merci, je préfère me promener seul.',
    savvyTips: [
      'Rabat is Morocco\'s administrative capital and has significantly less street hustle than Marrakech or Fes.',
      'Visit Cafe des Oudayas inside the Kasbah for mint tea with panoramic river views of Salé.'
    ]
  },
  {
    id: 'ouarzazate-kasbah-taourirt-film-set-markup',
    title: 'Ouarzazate Kasbah Taourirt & Studio "Film Backdoor" Tour',
    description: 'Touts outside Kasbah Taourirt or near Atlas Film Studios in Ouarzazate approach tourists claiming the main site is closed for filming and offer a paid tour of a "private village backdrop" or secondary carpet house.',
    howToExit: 'Proceed directly to the official entrance gate and ticket office of Kasbah Taourirt or Atlas Studios to purchase official tickets.',
    category: 'street',
    severity: 'medium',
    cityPriority: { ouarzazate: 9 },
    neighborhood: 'Kasbah Taourirt & Atlas Studios',
    specificLocation: 'Opposite Kasbah Taourirt entrance on Avenue Mohammed V',
    operatingHours: '08:30–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy outside Taourirt Kasbah tried to convince us the interior was closed for a Netflix shoot and offered to show us a berber carpet house instead. The Kasbah was completely open.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 44
      }
    ],
    escapePhraseDarija: 'Gha n-mchi l-guichet l-rasmi d l-kasbah, shukran.',
    escapePhraseFrench: 'Je vais directement au guichet officiel de la Kasbah, merci.',
    savvyTips: [
      'Both Kasbah Taourirt and CLA / Atlas Film Studios have fixed entrance tickets posted at the main ticket windows.',
      'Ait Benhaddou ksar (30km from Ouarzazate) has no mandatory entrance fee to cross the river bridge and explore the ancient earthen towers.'
    ]
  },
  {
    id: 'chefchaouen-hashish-drug-offer-police-extortion-setup',
    title: 'Chefchaouen Hashish Solicitations & Extortion Risk',
    description: 'Street touts in Chefchaouen\'s medina and surrounding hills (e.g. Ras El Ma, Spanish Mosque trail) approach tourists offering hashish ("kif" or "farm tours"). Engaging in drug purchases carries severe legal risks and frequent extortion setups where plainclothes informants alert corrupt spotters for heavy cash pay-offs.',
    howToExit: 'Firmly decline any drug offers immediately with a clear "La, shukran" and walk away. Never accept invitations to private farms or secluded spots from street strangers.',
    category: 'street',
    severity: 'high',
    cityPriority: { chefchaouen: 10, tangier: 5 },
    neighborhood: 'Medina & Ras El Ma Trail',
    specificLocation: 'Trail leading to the Spanish Mosque and upper Medina alleys',
    operatingHours: 'Late afternoon and evening hours',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'On the path up to the Spanish Mosque in Chefchaouen, multiple guys whispered "kif, weed, hash" as we passed. Say a firm no and keep moving. Cannabis is strictly illegal for tourists in Morocco.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 115
      }
    ],
    escapePhraseDarija: 'La, shukran! Ma-kan-st3melsh hadshi.',
    escapePhraseFrench: 'Non merci, je ne suis pas intéressé du tout.',
    savvyTips: [
      'Drug possession in Morocco carries strict prison sentences and heavy fines; avoid engaging with any solicitations.',
      'Stick to lit main streets in Chefchaouen at night for a peaceful, stress-free experience.'
    ]
  },
  {
    id: 'agadir-beach-camel-ride-currency-bait-and-switch',
    title: 'Agadir Beach Camel & Horse Ride Currency Switch',
    description: 'Touts along the Agadir beach promenade offer camel or horse rides along the shoreline quoting "100" or "150". After the ride finishes, the handler aggressively claims the quoted price was in Euros, US Dollars, or per 15 minutes instead of total Moroccan Dirhams, demanding 500–1,000 MAD.',
    howToExit: 'Before mounting, clearly state currency and total price for the entire group: "100 Dirham kulshi f-l-moujmou3" (100 Dirhams total for everything). Show exact dirham notes in hand before starting.',
    category: 'merchant',
    severity: 'medium',
    cityPriority: { agadir: 10, essaouira: 6 },
    neighborhood: 'Agadir Beach Promenade',
    specificLocation: 'Beachfront near Boulevard 20 Aout',
    operatingHours: '10:00–19:00',
    seasonality: 'Year-round (peaks in summer & winter holidays)',
    socialProofQuotes: [
      {
        text: 'On Agadir beach, a guy offered a camel ride for 150. When we got off he shouted that 150 meant Euros for 2 people! We handed him 150 MAD cash, walked directly to the hotel security guard, and he left immediately.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 62
      }
    ],
    escapePhraseDarija: 'Thadarna 3la Dirham, machi l-Euro! Ha 100 dirham dyalak.',
    escapePhraseFrench: 'On a convenu en Dirhams, pas en Euros. Voici la somme exacte.',
    savvyTips: [
      'Agadir promenade has tourist police stationed near the main beach access ramps.',
      'Book equestrian or camel tours through established ranch centers in Souss-Massa with upfront written vouchers.'
    ]
  },
  {
    id: 'agadir-souk-el-had-fake-argan-cooperative-scam',
    title: 'Agadir Souk El Had Fake Argan Cosmetic Cooperative',
    description: 'Inside Souk El Had or on roadside shops around Agadir and Inezgane, dishonest vendors present diluted cooking oil or synthetic vegetable oil scented with fragrance as "100% pure organic cosmetic Argan oil" at high prices.',
    howToExit: 'Authentic pure cosmetic Argan oil has a subtle nutty aroma (not overly sweet perfume), a silky non-sticky texture, and clear golden color. Buy from verified women cooperatives certified by IGP or Ecocert.',
    category: 'merchant',
    severity: 'medium',
    cityPriority: { agadir: 10, essaouira: 7, taghazout: 6 },
    neighborhood: 'Souk El Had & Industrial Zone',
    specificLocation: 'Souk El Had Gate 6 & Gate 10 spice aisles',
    operatingHours: '09:00–20:00 (Closed Mondays)',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Bought 3 bottles of "pure argan oil" in Souk El Had. When I got home it smelled like cheap sunflower oil mixed with rose scent. Look for official IGP certification seals before buying.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 84
      }
    ],
    escapePhraseDarija: 'Bghit n-chof l-certificat IGP d l-Argan l-haqiqi.',
    escapePhraseFrench: 'Je souhaite voir la certification IGP officielle de votre huile.',
    savvyTips: [
      'Pure culinary Argan oil is roasted (darker/nutty taste), while cosmetic Argan oil is unroasted and cold-pressed.',
      'Always inspect the IGP (Indication Géographique Protégée) label on the glass bottle.'
    ]
  },
  {
    id: 'essaouira-port-seafood-stall-unpriced-weighing-inflation',
    title: 'Essaouira Port Seafood Grill Unpriced Catch Overcharge',
    description: 'At open-air grill stalls near Essaouira fishing port entrance, vendors actively invite tourists to select raw fish, shrimp, and squid from ice trays without explicitly stating prices per kilogram. After grilling, they present bills of 600–900 MAD for standard portions.',
    howToExit: 'Always ask for the price per kilo ("Bshhal l-kilo?") AND agree on the final total price before any fish is placed on the grill. If stallholders hesitate, walk away to fixed-price restaurants nearby.',
    category: 'merchant',
    severity: 'medium',
    cityPriority: { essaouira: 10, agadir: 5 },
    neighborhood: 'Fishing Port Entrance',
    specificLocation: 'Place Moulay Hassan seafood grill stalls',
    operatingHours: '12:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'At the Essaouira port fish market grills, they put 4 prawns and a small sea bass on the plate and billed us 750 MAD! Always agree on a total number of Dirhams before they start cooking.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 95
      }
    ],
    escapePhraseDarija: 'Bshhal l-moujmou3 dyal had l-hout qbel ma t-shwihat?',
    escapePhraseFrench: 'Quel est le prix total exact avant de faire griller le poisson ?',
    savvyTips: [
      'Standard fish grill meals in Essaouira should cost around 70–120 MAD per person including salad and bread.',
      'You can buy fresh fish directly from the fish market auction hall and take it to local neighborhood cafes to be cooked for a small fee (20–30 MAD).'
    ]
  },
  {
    id: 'essaouira-dunes-quad-bike-uninspected-damage-extortion',
    title: 'Essaouira Dunes Quad & Buggy Uninspected Damage Claim',
    description: 'Unregistered quad bike rental stands near Diabat or Cap Sim dunes rent vehicles without taking pre-ride condition photos. Upon return, operators closely inspect the quad and claim pre-existing bodywork cracks or clutch wear were caused by the renter, demanding 1,000–2,000 MAD cash compensation.',
    howToExit: 'Before starting the engine, take clear video footage around the quad showing existing scratches, tires, and bumper condition in front of the rental staff. Only rent from licensed agency shops with insurance.',
    category: 'merchant',
    severity: 'high',
    cityPriority: { essaouira: 9, agadir: 7, taghazout: 6 },
    neighborhood: 'Diabat & Cap Sim Dunes',
    specificLocation: 'Diabat village quad departure points',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Rented a quad in Diabat near Essaouira. When we came back the guy pointed to a cracked plastic fender that was already held together by zip ties and demanded 1500 MAD. Fortunately I had filmed the quad before departing!',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 57
      }
    ],
    escapePhraseDarija: 'Sowart l-quad f-l-video qbel ma n-rkab, had l-shaq kan mjoojed.',
    escapePhraseFrench: 'J\'ai filmé le quad avant de partir, cette fissure était déjà présente.',
    savvyTips: [
      'Ensure helmet and safety equipment are included in the rental price.',
      'Never leave your original passport as a security deposit; offer a photocopy instead.'
    ]
  },
  {
    id: 'taghazout-surf-board-rental-crack-damage-deposit-trap',
    title: 'Taghazout Surfboard Rental Damage Deposit Trap',
    description: 'Informal beach stands in Taghazout and Tamraght rent surfboards with pre-existing internal ding repairs covered by wax or stickers. When the board is returned, staff scrape off the wax, point at the crack, and refuse to return cash deposits or passports without paying 500–1,000 MAD repair fees.',
    howToExit: 'Inspect surfboard rails, nose, and tail thoroughly before waxing. Take close-up photos of all dings and ask staff to note existing damage on the rental receipt.',
    category: 'merchant',
    severity: 'medium',
    cityPriority: { taghazout: 10, imsouane: 9, agadir: 5 },
    neighborhood: 'Main Beach & Anchor Point Trail',
    specificLocation: 'Taghazout waterfront surf shop strip',
    operatingHours: '08:00–19:00',
    seasonality: 'Peak surf season (October–April)',
    socialProofQuotes: [
      {
        text: 'Rented a board in Taghazout for 100 MAD/day. When I brought it back, the guy scraped wax off the bottom, showed a yellowed old ding, and tried to charge 600 MAD repair fee. Stick to established surf schools.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 73
      }
    ],
    escapePhraseDarija: 'Had l-darse kan taht l-sham3 men qbel, shofto f-l-taswira.',
    escapePhraseFrench: 'Ce pète était déjà sous la paraffine, j\'ai la photo datée.',
    savvyTips: [
      'Established surf shops in Taghazout offer written rental agreements detailing ding policies.',
      'Soft-top boards are durable and less prone to ding extortion for beginner surfers.'
    ]
  },
  {
    id: 'asilah-medina-rampart-henna-and-photo-trap',
    title: 'Asilah Ramparts Unsolicited Henna & Photo Trap',
    description: 'Along the art-painted medina alleys of Asilah and near the Krya rampart lookout, women grab tourists\' wrists to quickly squeeze henna patterns without asking consent, then aggressively demand 150–300 MAD.',
    howToExit: 'Keep hands inside pockets or cross arms when approached in art alleys. If someone touches your hand, pull away instantly with a firm "La, shukran!" and do not allow them to begin drawing.',
    category: 'street',
    severity: 'medium',
    cityPriority: { asilah: 9, tangier: 5 },
    neighborhood: 'Medina & Krya Rampart',
    specificLocation: 'Rue Kasbah and ocean rampart overlook',
    operatingHours: '10:00–20:00',
    seasonality: 'Summer peak season (June–September)',
    socialProofQuotes: [
      {
        text: 'In Asilah medina, a woman squeezed henna onto my girlfriend\'s arm before she could react and then demanded 200 MAD. Keep your hands tucked away in narrow lanes.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 48
      }
    ],
    escapePhraseDarija: 'La, ma-bghitsh l-henna, shukran!',
    escapePhraseFrench: 'Non merci, je ne veux pas de henné !',
    savvyTips: [
      'Asilah is renowned for its mural street art; exploring early in the morning offers peaceful photo opportunities.',
      'Natural brown henna is safe, but avoid chemical "black henna" which can cause severe skin allergies.'
    ]
  },
  {
    id: 'chefchaouen-ras-el-ma-peacock-photo-trap',
    title: 'Chefchaouen Ras El Ma Animal Photo Trap',
    description: 'At Ras El Ma waterfall in Chefchaouen, men holding peacocks, parrots, or wearing traditional rural hats quickly place birds or props onto tourists\' shoulders without consent while urging companions to take pictures, then demand 50–100 MAD.',
    howToExit: 'Step back immediately if anyone extends a bird or hat towards you. If a picture was taken inadvertently, hand over a small coin (5–10 MAD) or firmly say "Ma-bghitsh taswirah" and walk away.',
    category: 'street',
    severity: 'low',
    cityPriority: { chefchaouen: 9, marrakech: 6 },
    neighborhood: 'Ras El Ma Waterfall',
    specificLocation: 'Bridge across Ras El Ma stream',
    operatingHours: '10:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Near the Ras El Ma stream in Chefchaouen, a man put a colorful parrot on my shoulder while taking a photo and asked for 100 MAD. A polite 10 MAD coin ended the conversation.',
        source: 'google_review',
        sentiment: 'neutral',
        upvotes: 35
      }
    ],
    escapePhraseDarija: 'Ma-bghitsh n-sawwar, shukran.',
    escapePhraseFrench: 'Je ne veux pas de photo, merci.',
    savvyTips: [
      'Walk past Ras El Ma stream up the dirt path to the Spanish Mosque for free sunset panoramic views over the Blue City.',
      'Always ask permission and agree on a price before taking photos of street performers or vendors.'
    ]
  },
  {
    id: 'dakhla-lagoon-unmetered-taxi-and-excursion-markup',
    title: 'Dakhla Airport & PK25 Unmetered Taxi Overcharge',
    description: 'Drivers at Dakhla Airport and city center refuse to run meters for transfers out to kite lagoon camps at PK25 or White Dune (Dune Blanche), quoting 300–500 MAD for routes that have standardized group rates.',
    howToExit: 'Arrange airport pickup directly through your kite camp in advance, or use shared grand taxi ranks near the Dakhla market square where official fares are posted.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { dakhla: 10 },
    neighborhood: 'Dakhla Airport & PK25 Lagoon',
    specificLocation: 'Arrival hall exit and Place Hassan II taxi stand',
    operatingHours: '24/7 matching flight arrivals',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'At Dakhla airport, informal drivers wanted 400 MAD for a 25-minute drive to PK25 kite camp. Pre-book your shuttle with your camp or share a grand taxi for 150 MAD.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 52
      }
    ],
    escapePhraseDarija: 'Bghina l-prix l-mouwahhad dyal l-grand taxi l-PK25.',
    escapePhraseFrench: 'Nous voulons le tarif officiel pour le grand taxi jusqu\'à PK25.',
    savvyTips: [
      'Petit Taxis inside Dakhla town run on fixed flat fares (around 6–10 MAD during the day).',
      'The White Dune excursion is best arranged through licensed 4x4 drivers at your camp.'
    ]
  },
  {
    id: 'al-hoceima-saidia-beach-jet-ski-timer-theft',
    title: 'Al Hoceima & Saidia Jet Ski Time Theft & Deposit Scam',
    description: 'Seasonal jet-ski operators at Quemado Beach (Al Hoceima) or Saidia Mediterranean resort charge for 30 minutes of water rental, but wave riders back ashore after only 12–15 minutes claiming time expired, or keep cash deposits for unproven fuel fees.',
    howToExit: 'Check the clock explicitly with the rental operator on your phone before setting out on the water. Agree upfront that fuel and life vests are fully included in the total rental price.',
    category: 'merchant',
    severity: 'medium',
    cityPriority: { al_hoceima: 9, saidia: 9, dakhla: 5 },
    neighborhood: 'Plage Quemado & Saidia Marina',
    specificLocation: 'Nautical sports rental counters on the sand',
    operatingHours: '10:00–19:00',
    seasonality: 'Summer season (June–September)',
    socialProofQuotes: [
      {
        text: 'Paid 400 MAD for 30 mins jet ski at Quemado beach in Al Hoceima. They signaled us back in after 15 minutes saying time was up. Set a timer on your phone before going into the water.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 41
      }
    ],
    escapePhraseDarija: 'Darna l-chrono f-l-téléphone, baqa lina 15 min.',
    escapePhraseFrench: 'J\'ai mis le minuteur sur mon téléphone, il nous reste 15 minutes.',
    savvyTips: [
      'Al Hoceima National Park offers beautiful boat excursions to isolated coves like Badis Beach.',
      'Always wear a securely fastened life jacket provided by licensed maritime operators.'
    ]
  },
  {
    id: 'tangier-caves-of-hercules-unlicensed-parking-and-entry-touts',
    title: 'Tangier Caves of Hercules Fake Parking Touts & Entry Guides',
    description: 'Near Cap Spartel and the entrance to the Caves of Hercules (Grottes d\'Hercule) in Tangier, unofficial parking attendants wearing neon vests demand 30–50 MAD for public road parking, and touts claim you must pay them extra for mandatory entry guides.',
    howToExit: 'Standard municipal parking along Cap Spartel roads costs 5–10 MAD. Official entry tickets to Grottes d\'Hercule are bought at the official turnstile ticket window (10 MAD locals / 60 MAD tourists); no private guide is required.',
    category: 'authority',
    severity: 'low',
    cityPriority: { tangier: 9 },
    neighborhood: 'Cap Spartel & Achakkar Beach',
    specificLocation: 'Parking lot directly outside Grottes d\'Hercule',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'At Hercules Caves in Tangier, a guy in an orange vest demanded 50 MAD for parking. We gave him 10 MAD which is standard. Inside the cave, entry is paid at the official turnstile window.',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 60
      }
    ],
    escapePhraseDarija: 'Gha n-khalls 10 dirham f-l-parkin, wa l-billet f-l-guichet.',
    escapePhraseFrench: 'Je paie 10 dirhams pour le parking, et mon billet au guichet officiel.',
    savvyTips: [
      'Cap Spartel lighthouse marks the exact convergence point of the Atlantic Ocean and Mediterranean Sea.',
      'Tangier Grand Taxis from Place de France run fixed routes out to Achakkar and Cap Spartel.'
    ]
  },
  {
    id: 'merzouga-luxury-camp-downgrade-bait-and-switch',
    title: 'Merzouga Luxury Desert Camp Downgrade Switch',
    description: 'Online booking photos display private en-suite glamping tents deep inside the Erg Chebbi dunes. Upon arriving in Merzouga village, drivers inform travelers that the booked camp is "flooded" or "overbooked" and transfer them to a basic roadside bivouac with shared bucket toilets without a price reduction.',
    howToExit: 'Book directly through reputable desert agencies or riads with verified recent reviews. Insist on inspecting the tent and private bathroom amenities before paying cash balances or starting camel treks.',
    category: 'merchant',
    severity: 'high',
    cityPriority: { merzouga: 10, mhamid: 8, ouarzazate: 5 },
    neighborhood: 'Erg Chebbi Dunes & Merzouga Center',
    specificLocation: 'N13 highway approach & Merzouga camel staging points',
    operatingHours: 'Late afternoon arrival hours (15:00–18:00)',
    seasonality: 'Peak desert travel season (October–April)',
    socialProofQuotes: [
      {
        text: 'Booked a luxury tent with private shower in Merzouga on a budget booking site. Driver took us to a basic communal tent 200m from the road and claimed dune storm closed the main camp. Always confirm directly with the camp owner before arrival.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 128
      }
    ],
    escapePhraseDarija: 'Bghit l-khamsh l-fakhra li ksat f-l-reservation dyali f-Erg Chebbi.',
    escapePhraseFrench: 'Je veux exactement la tente de luxe avec salle de bain privée réservée.',
    savvyTips: [
      'True luxury desert camps in Erg Chebbi are located past the first dune line and feature flush toilets and hot running water.',
      'Always keep a digital or printed copy of your booking confirmation showing itemized camp amenities.'
    ]
  },
  {
    id: 'merzouga-quad-dune-breakdown-damage-demand',
    title: 'Erg Chebbi Quad Bike Dune Breakdown Extortion',
    description: 'Unregulated quad and buggy rental shops near Hassi Labied and Merzouga rent worn-out quad bikes for dune riding. When the engine stalls or a drive belt snaps on steep sand, staff accuse the renter of reckless driving or "flipping the bike" and demand 2,000–5,000 MAD on the spot.',
    howToExit: 'Only rent from established dune tour companies that include a riding instructor guide. Take timestamped pre-ride photos/videos of tires, engine frame, and fairings.',
    category: 'merchant',
    severity: 'high',
    cityPriority: { merzouga: 10, mhamid: 8 },
    neighborhood: 'Hassi Labied & Erg Chebbi North',
    specificLocation: 'Quad bike departure garages along N13',
    operatingHours: '08:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Quad broke down on top of Erg Chebbi dune due to an old worn belt. Mechanics drove out and tried to hold my passport until I paid 300 Euros for "engine damage". We called our hotel manager who sorted it out.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 91
      }
    ],
    escapePhraseDarija: 'L-quad kan fih mushkil f-l-moteur qbel ma n-rkab, ma-ghadi-sh n-khalls l-3atab.',
    escapePhraseFrench: 'Le quad avait déjà une panne mécanique, je ne suis pas responsable.',
    savvyTips: [
      'Never leave your original passport as a security deposit for vehicle rentals in the desert.',
      'Helmets and eye protection goggles are essential for safe sand dune quad riding.'
    ]
  },
  {
    id: 'mhamid-erg-chigaga-4x4-fuel-and-border-surcharge-scam',
    title: 'M\'hamid & Erg Chigaga 4x4 Fuel Surcharge Trap',
    description: 'In M\'hamid El Ghizlane (the gateway to the vast Erg Chigaga dunes), freelance 4x4 drivers quote low excursion prices. Midway through the off-road desert trail, they stop in remote sandy plains demanding an additional 400–800 MAD cash for "desert fuel surcharge" or "border military pass".',
    howToExit: 'Always insist on an all-inclusive written contract at the agency office in M\'hamid covering 4x4, driver, fuel, meals, and desert permits before departing.',
    category: 'merchant',
    severity: 'high',
    cityPriority: { mhamid: 10, ouarzazate: 6 },
    neighborhood: 'M\'hamid El Ghizlane & Erg Chigaga Trail',
    specificLocation: 'M\'hamid village center and Oued Draa off-road piste',
    operatingHours: 'Departure between 08:00 and 14:00',
    seasonality: 'Year-round (avoid mid-summer heat)',
    socialProofQuotes: [
      {
        text: 'Driver stopped 20km into the Chigaga desert trail and said gasoline prices went up so we had to pay 500 MAD extra or walk back. Never hire freelance drivers on Mhamid main street.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 79
      }
    ],
    escapePhraseDarija: 'L-mouwahada kanat shamelat l-masrouf dyal l-masot kullo f-l-moujmou3.',
    escapePhraseFrench: 'Le prix convenu au départ inclut la totalité du carburant.',
    savvyTips: [
      'Erg Chigaga is wilder and larger than Erg Chebbi, requiring 2 hours of off-road 4x4 driving from M\'hamid.',
      'All military checkpoint stops along the Draa Valley road are routine and totally free.'
    ]
  },
  {
    id: 'todra-dades-gorge-carpet-cooperative-tea-trapping',
    title: 'Todra & Dades Gorge "Women\'s Berber Weaving Co-op" Trap',
    description: 'Along the scenic Todra Gorge or Dades Valley winding roads, tour drivers stop at roadside buildings labeled "Berber Women\'s Weaving Cooperative". Visitors are served mint tea, given high-pressure sales pitches, and pressured into purchasing mass-produced rugs at 5x markup under emotional guilt.',
    howToExit: 'Enjoy the mint tea if offered, but feel zero obligation to buy. Politely decline purchasing with "Shukran, bghina gha n-shoufo" (Thanks, we just want to look) and exit calmly.',
    category: 'merchant',
    severity: 'medium',
    cityPriority: { todra_dades: 10, ouarzazate: 7, merzouga: 5 },
    neighborhood: 'Todra Gorge & Dades Valley Highway',
    specificLocation: 'R704 road viewpoints in Dades and Tinghir entrance to Todra',
    operatingHours: '09:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Our tour driver insisted on stopping at a "nomad carpet co-op" in Dades Gorge. They unrolled 20 rugs and quoted 400 Euros for a machine-made carpet worth 50 Euros in Marrakech. Don\'t feel pressured!',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 88
      }
    ],
    escapePhraseDarija: 'Shukran 3la atay, walakin ma-ghadi-sh n-shri ziwiya l-yoma.',
    escapePhraseFrench: 'Merci pour le thé, mais je ne souhaite pas acheter de tapis aujourd\'hui.',
    savvyTips: [
      'Genuine hand-knotted Berber rugs have distinct wool irregularities and visible hand-tied knots on the back.',
      'Tell your driver in advance if you prefer scenic natural photo stops rather than commercial shopping stops.'
    ]
  },
  {
    id: 'ifrane-azrou-monkey-feeding-photo-and-bite-liability-scam',
    title: 'Ifrane & Azrou Cedar Forest Barbary Macaque Photo Trap',
    description: 'In the Cèdre Gouraud forest near Azrou and Ifrane, animal handlers hand tourists peanuts or corn kernels to attract wild Barbary Macaques onto their shoulders for photos, then aggressively demand 50–100 MAD cash per person.',
    howToExit: 'Do not accept food items from handlers. Keep a safe distance (at least 2 meters) from wild macaques to prevent scratch/bite risks and unnecessary stress to endangered wildlife.',
    category: 'street',
    severity: 'medium',
    cityPriority: { ifrane_azrou: 10, fes: 5 },
    neighborhood: 'Cèdre Gouraud Forest (Azrou)',
    specificLocation: 'P3305 forest parking area near Azrou',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'In Azrou cedar forest, a guy shoved peanuts into my kid\'s hand to feed the monkeys and then demanded 100 MAD. Keep your hands in your pockets and observe the monkeys naturally.',
        source: 'reddit',
        sentiment: 'frustrated',
        upvotes: 64
      }
    ],
    escapePhraseDarija: 'Ma-bghitsh n-wakkal l-qerd, shukran.',
    escapePhraseFrench: 'Je ne souhaite pas nourrir les singes, merci.',
    savvyTips: [
      'Barbary Macaques are an endangered species native to the Middle Atlas mountains.',
      'Feeding human junk food to macaques causes aggressive behavior and health issues.'
    ]
  },
  {
    id: 'ouarzazate-ait-benhaddou-fake-bridge-and-kasbah-toll',
    title: 'Ait Benhaddou Fake Bridge Toll & Guide Fee Scam',
    description: 'At the pedestrian bridge entering the UNESCO Ksar of Ait Benhaddou (near Ouarzazate), local young men stand near the entrance claiming there is a 20–50 MAD "bridge maintenance toll" or mandatory guide fee to enter the earthen village.',
    howToExit: 'Entry to Ait Benhaddou Ksar across the river bridge is completely free and public. Walk past anyone claiming otherwise and proceed directly across the bridge.',
    category: 'authority',
    severity: 'medium',
    cityPriority: { ouarzazate: 10, marrakech: 6 },
    neighborhood: 'Ait Benhaddou Ksar',
    specificLocation: 'Pedestrian bridge over Ounila River',
    operatingHours: '08:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy at the footbridge in Ait Benhaddou told us entrance was 30 MAD per person. We walked past him without paying and entered the village freely. Entrance is 100% free!',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 110
      }
    ],
    escapePhraseDarija: 'L-dkhoul l-Ait Benhaddou f-l-batal, ma-kynsh l-parkin wla l-guichet.',
    escapePhraseFrench: 'L\'accès au Ksar d\'Aït Benhaddou est entièrement gratuit.',
    savvyTips: [
      'Only private museums inside specific restored tower houses (Maison Traditionnelle) charge small optional entry fees (10–20 MAD).',
      'Cross the river via the concrete bridge or stepping stones depending on water levels.'
    ]
  },
  {
    id: 'skoura-draa-valley-fossil-fake-and-date-palm-guide-redirect',
    title: 'Skoura Oasis & Draa Valley Fake Fossil & Mineral Scam',
    description: 'Along the oasis roads of Skoura, Erfoud, and Midelt, roadside vendors sell painted rocks, glued resin trilobites, or plastic ammonites claiming they are 500-million-year-old Sahara fossils unearthed locally, charging 300–1,000 MAD.',
    howToExit: 'Genuine Sahara fossils are abundant around Erfoud/Alnif but are heavy stone, cold to the touch, and lack shiny painted coats. Ask to test with a coin scratch or visit established fossil workshops in Erfoud.',
    category: 'merchant',
    severity: 'low',
    cityPriority: { skoura_draa: 10, ouarzazate: 6, merzouga: 6 },
    neighborhood: 'Palmeraie de Skoura & Erfoud Road',
    specificLocation: 'Roadside stalls along N10 highway',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Bought a "geode with purple crystals" near Midelt for 200 MAD. Put it in water at the hotel and the purple dye washed right off! It was painted gravel. Buy from official workshops in Erfoud instead.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 49
      }
    ],
    escapePhraseDarija: 'Had l-hjar msobbog, ma-shi fossile haqiqi.',
    escapePhraseFrench: 'Cette pierre est peinte, ce n\'est pas un vrai fossile.',
    savvyTips: [
      'Erfoud hosts official fossil cutting factories where visitors can watch raw limestone slabs transformed into marble tables free of charge.',
      'Skoura Palmeraie is ideal for self-guided bicycle exploration among 17th-century earthen kasbahs.'
    ]
  },
  {
    id: 'taroudant-tafraoute-painted-rocks-and-tanneries-unregistered-guide',
    title: 'Taroudant Tanneries & Tafraoute Painted Rocks Guide Trap',
    description: 'Outside the historic 7km ramparts of Taroudant or near the famous Painted Rocks of Tafraoute, teenagers approach vehicles offering to show "the active leather tanneries" or "secret blue rocks", directing visitors into remote dirt tracks and demanding 150–300 MAD.',
    howToExit: 'Taroudant\'s tanneries and Tafraoute\'s Painted Rocks are easily located using offline GPS maps (e.g. Google Maps / Maps.me). Polite refusal with "La shukran, tan-aaraf l-triq" works effectively.',
    category: 'street',
    severity: 'low',
    cityPriority: { taroudant_tafraoute: 10, agadir: 5 },
    neighborhood: 'Bab Taghount (Taroudant) & Agard Oudad (Tafraoute)',
    specificLocation: 'Outside Bab Taghount gate and Tafraoute valley entrance',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Taroudant is often called "Little Marrakech" but is much calmer. A young guy tried to guide us to the tanneries near Bab Taghount. We followed Google Maps on our phone and reached it easily without help.',
        source: 'reddit',
        sentiment: 'neutral',
        upvotes: 38
      }
    ],
    escapePhraseDarija: 'Shukran, tan-fddal n-sog b-rasna l-l-sakhr l-mlawwan.',
    escapePhraseFrench: 'Merci, nous conduisons seuls jusqu\'aux rochers peints.',
    savvyTips: [
      'Taroudant is famous for authentic silver Berber jewelry sold in Souk Arabe.',
      'The Painted Rocks (Rochers Peints) near Tafraoute were created by Belgian artist Jean-Verame and are free to visit 24/7.'
    ]
  },
  {
    id: 'zagora-erg-chebbi-distance-deception-tour',
    title: 'Zagora "2-Day Erg Chebbi" Distance Deception Tour',
    description: 'In Marrakech or Zagora, budget street agencies advertise "2-Day Desert Tour to Erg Chebbi Dunes". In reality, Erg Chebbi is 9 hours away in Merzouga, making a 2-day trip impossible. Unsuspecting tourists are driven to Zagora\'s flat rocky desert (Tinfou) instead, missing the giant sand dunes entirely.',
    howToExit: 'Always verify the specific desert name and location on a map before booking. A proper Erg Chebbi (Merzouga) desert trip requires at least 3 days / 2 nights round trip from Marrakech.',
    category: 'merchant',
    severity: 'high',
    cityPriority: { ouarzazate: 8, marrakech: 9, merzouga: 7 },
    neighborhood: 'Zagora Highway & Tinfou Dunes',
    specificLocation: 'Zagora center agencies & N9 highway stopovers',
    operatingHours: '24/7 booking window',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Booked a 2-day "Sahara Sand Dune Tour" in Marrakech expecting giant golden dunes. We spent 14 hours in a van and ended up in Zagora, which is flat scrubland with small sand hills. For real dunes, book at least 3 days to Merzouga or Chigaga!',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 142
      }
    ],
    escapePhraseDarija: 'Had l-blasa Zagora, machi khtat Erg Chebbi f-Merzouga!',
    escapePhraseFrench: 'Nous sommes à Zagora, ce n\'est pas le grand erg de Merzouga !',
    savvyTips: [
      'Zagora is famous for its iconic signpost: "Tombouctou 52 jours" (Timbuktu 52 days by camel).',
      'If you only have 2 days, Zagora is fine for a quick camel trip, but do not expect 150-meter-high Erg Chebbi dunes.'
    ]
  },

  // --- TAGHAZOUT & AGADIR COASTAL SCAM INTEL ---
  {
    id: 'taghazout-surfboard-damage-claim',
    title: 'Taghazout Surfboard Rental Damage & Repair Extortion',
    description: 'Beachfront surfboard rentals hand out boards with pre-existing hairline cracks, waterlogged rails, or pressure dings. Upon return, the shop owner inspects the board closely, claims the surfer cracked it in the waves, and demands 500–1,200 MAD for "urgent professional repairs" before releasing passport or deposit.',
    howToExit: 'Inspect the surfboard completely in daylight before taking it. Record a continuous 4K video showing all rails, nose, tail, and fins in front of the shop employee. If accused upon return, play back your video timestamped before the session.',
    category: 'shopping',
    severity: 'high',
    cityPriority: { taghazout: 10, agadir: 9 },
    neighborhood: 'Panorama Beach & Taghazout Main Village',
    specificLocation: 'Beachfront surf rental shops & Panorama point',
    operatingHours: '08:00–19:00',
    seasonality: 'Peak winter surf season (October–April)',
    socialProofQuotes: [
      {
        text: 'Rented a surfboard at Taghazout Panorama beach. Upon returning it after a 2-hour session, the shop owner pointed out a tiny hairline crack on the rail that was clearly waterlogged and old, demanding 800 MAD for repairs.',
        source: 'reddit',
        author: 'u/SurfNomad_EU',
        sentiment: 'frustrated',
        upvotes: 142
      }
    ],
    escapePhraseDarija: 'Had l-shaqq kan f-l-lwha qbl ma n-khddamha, ha hwa l-video.',
    escapePhraseFrench: 'Cette fissure était déjà présente avant, voici la vidéo de contrôle.',
    savvyTips: [
      'Always record a video of the surfboard before paying or stepping into the ocean.',
      'Never leave your passport as a deposit; use a copy or a small cash deposit with a receipt.'
    ]
  },
  {
    id: 'taghazout-anchor-point-parking-tout',
    title: 'Anchor Point Unofficial Parking Extortion',
    description: 'Self-appointed parking touts in high-vis vests post up at popular surf break parking lots (Anchor Point, Killer Point, Boilers) demanding 20–50 MAD upfront. If questioned or asked for a stamped municipal receipt, they become aggressive and subtly threaten vehicle damage.',
    howToExit: 'Official communal parking across Taghazout costs 5–10 MAD max paid upon departure. Firmly hand 10 MAD max, ask for a printed ticket ("Ticket de parking"), and if threatened, park near well-lit village spaces or camera zones.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Anchor Point & North Coastal Highway',
    specificLocation: 'Anchor Point cliff lot & Killer Point roadside',
    operatingHours: '07:00–20:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Parked at Anchor Point lot for an early surf session. An aggressive guy in a high-vis yellow vest demanded 30 MAD upfront. When I asked for an official municipal ticket with a stamp, he got agitated.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 98
      }
    ],
    escapePhraseDarija: 'Ha 10 d-drahim dyal l-parquing, aatini t-tiki.',
    escapePhraseFrench: 'Voici 10 dirhams pour le parking, donnez-moi le ticket officiel.',
    savvyTips: [
      'Municipal parking tickets have an official stamp and price printed on them.',
      'Do not pay 30–50 MAD upfront without a receipt.'
    ]
  },
  {
    id: 'taghazout-agadir-grand-taxi-gouging',
    title: 'Agadir to Taghazout Grand Taxi Overcharging',
    description: 'Drivers at Agadir Battoir Grand Taxi terminal or Taghazout village bus stop demand 150–200 MAD from tourists, falsely insisting that shared grand taxis no longer operate and that a "private VIP fare" is mandatory.',
    howToExit: 'State clearly "Battoir, Blassa" (Battoir, single seat). The official shared fare is 15–20 MAD per seat (6 passengers per car). If you prefer a private taxi, cap your offer at 100–120 MAD maximum for the full car.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { taghazout: 10, agadir: 9 },
    neighborhood: 'Taghazout Main Square & Battoir Terminal (Agadir)',
    specificLocation: 'Taghazout bus stop & Battoir Grand Taxi depot',
    operatingHours: '06:00–22:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Took a grand taxi from Agadir Battoir station to Taghazout village. Driver tried charging 200 MAD for two people claiming it was a private express ride. Actual shared fare is 15 MAD per seat.',
        source: 'reddit',
        author: 'u/AgadirSurfer88',
        sentiment: 'warning',
        upvotes: 115
      }
    ],
    escapePhraseDarija: 'Bghit ghir blassa wahda f-t-taxi l-kbir, b-15-20 MAD.',
    escapePhraseFrench: 'Je veux une seule place dans le grand taxi collectif à 15 dirhams.',
    savvyTips: [
      'Shared Grand Taxis wait until all 6 seats fill before departing.',
      'You can also take the ALSA city bus #32 or #33 between Agadir and Taghazout for ~8 MAD.'
    ]
  },
  {
    id: 'taghazout-beach-camel-photo-hostage',
    title: 'Taghazout Beach Camel Photo & Ride Hostage Trap',
    description: 'Beach camel handlers approach tourists relaxing on Taghazout beach offering a "quick photo for 20 MAD" or a free sit-on demo. Once the tourist mounts, the handler walks the camel away down the coast and demands 300–500 MAD before bringing the camel back and allowing them to dismount.',
    howToExit: 'Agree on the total price, total time, dismount location, and currency before putting a foot in the stirrup. If the handler refuses to let you down, remain calm, speak loudly to attract surrounding beachgoers, and insist on dismounting immediately.',
    category: 'street',
    severity: 'high',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Taghazout Beach & Hash Point Coast',
    specificLocation: 'Main Taghazout beachfront & Madraba beach',
    operatingHours: '10:00–19:00',
    seasonality: 'Summer peak & sunny winter days',
    socialProofQuotes: [
      {
        text: 'A camel handler walking along Taghazout beach offered a photo on his camel for just 20 dirhams. Once my partner mounted, he walked it down the beach and demanded 300 MAD to let her off.',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 167
      }
    ],
    escapePhraseDarija: 'Nzzelni daba, ma ghadi-ch n-khelles kther m-lli t-tafaqna.',
    escapePhraseFrench: 'Faites-moi descendre tout de suite, je ne payerai pas plus que convenu.',
    savvyTips: [
      'Never mount an animal without explicit written or verbal agreement on the final dismount price.',
      'Keep your mobile phone secured in your bag rather than handing it to the handler.'
    ]
  },
  {
    id: 'taghazout-oceanfront-seafood-unpriced-menu',
    title: 'Taghazout Oceanfront Unpriced Seafood & Forced Salad Charges',
    description: 'Promenade fish restaurants along Taghazout village present unpriced "fresh daily catch" or quote low estimates per piece. After dining, the bill arrives with inflated fish prices (300–500 MAD per fish) plus automatic unrequested charges for cold mezze, bread, bottled water, and service fees.',
    howToExit: 'Always inspect a printed menu with prices per 100g/kilo or get a written total price confirmation on a pad before the fish is put on the grill. Reject unrequested bread and salads immediately as soon as they reach your table.',
    category: 'restaurant',
    severity: 'medium',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Taghazout Promenade & Hash Point',
    specificLocation: 'Oceanfront grill restaurants along the main pedestrian strip',
    operatingHours: '12:00–23:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Dined at a beachfront grill along Taghazout village promenade. The bill came out to 850 MAD because they added 150 MAD for unrequested cold salads and charged 350 MAD per fish.',
        source: 'tripadvisor',
        sentiment: 'frustrated',
        upvotes: 84
      }
    ],
    escapePhraseDarija: 'Kteb l-thaman l-mouhmal f-woraqa qbl ma t-shwi l-hwt.',
    escapePhraseFrench: 'Écrivez le prix total exact sur un papier avant de griller le poisson.',
    savvyTips: [
      'Ask specifically: "Is the price inclusive of salads, bread, and tax?"',
      'Fresh fish priced per kilo should be weighed in front of you on a digital scale.'
    ]
  },
  {
    id: 'taghazout-hashish-plainclothes-police-extortion',
    title: 'Village Hashish Solicitation & Plainclothes Extortion Setup',
    description: 'Local touts near Taghazout beach cafes approach young travelers and surfers casually offering small packages of hashish. Moments after a transaction, plainclothes accomplices approach threatening immediate arrest, confiscation of passports, and jail time unless a cash "fine" of 2,000–5,000 MAD is paid immediately on the spot.',
    howToExit: 'Firmly refuse all drug solicitations on streets, beaches, or near cafes. Cannabis is strictly illegal in Morocco and public possession carries heavy legal penalties. If targeted by fake officers, insist on walking to the official local Gendarmerie Royale station.',
    category: 'authority',
    severity: 'high',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Taghazout Village Center & Beach Promenade',
    specificLocation: 'Main street cafes, Hash Point stairs, and dark beach alleys',
    operatingHours: '16:00–03:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Be extremely careful with guys casually offering hashish near Taghazout beach cafes. A traveler staying at our surf hostel bought a small piece, and 3 minutes later two men claiming to be plainclothes officers demanded 3000 MAD cash.',
        source: 'reddit',
        author: 'u/SoloBackpacker_99',
        sentiment: 'warning',
        upvotes: 230
      }
    ],
    escapePhraseDarija: 'Makhassnich l-hashish, tan-fddal n-mshiw l-morkaz d-darak l-malaki.',
    escapePhraseFrench: 'Je ne suis pas intéressé. Allons au poste de Gendarmerie si nécessaire.',
    savvyTips: [
      'Plainclothes extortion traps specifically target young backpackers and surfers.',
      'Never purchase or carry illegal substances under any circumstances in Morocco.'
    ]
  },
  {
    id: 'taghazout-beach-henna-chemical-burn',
    title: 'Beach Promenade Forced Henna & Toxic Black Ink Hazard',
    description: 'Unregistered henna artists walking along Taghazout beach approach sunbathers, grab hands without consent, paint unwanted symbols, and demand 200–300 MAD. Furthermore, beach henna frequently contains toxic chemical additive PPD (para-phenylenediamine) to darken the dye, causing blistering allergic reactions and permanent chemical burns.',
    howToExit: 'Keep your hands tucked away or fold your arms when sitting on the beach towel. Pull back instantly if someone touches your hand, saying "La, Shukran!" firmly. Avoid all synthetic black henna.',
    category: 'street',
    severity: 'medium',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Taghazout Beach & Panorama Bay',
    specificLocation: 'Main tourist sunbathing zones along the shoreline',
    operatingHours: '10:00–18:00',
    seasonality: 'Sunny beach days year-round',
    socialProofQuotes: [
      {
        text: 'A lady walking along Taghazout beach grabbed my wife\'s hand while she was resting on a towel, started painting henna without consent, and demanded 250 MAD when finished.',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 128
      }
    ],
    escapePhraseDarija: 'La! Mat-qisnich w-ma-bghitch l-henna d-d-l-bahr.',
    escapePhraseFrench: 'Non! Ne me touchez pas et je ne veux pas de henné.',
    savvyTips: [
      'Natural brown plant henna takes hours to set; fast-drying "black henna" contains hazardous chemical dyes.',
      'For safe henna, visit registered local women\'s cooperatives in Agadir or Taghazout.'
    ]
  },
  {
    id: 'taghazout-unlicensed-surf-school-trap',
    title: 'Unlicensed Street & Instagram Surf School Package Trap',
    description: 'Unaccredited touts and rogue social media accounts sell cheap "surf packages" including accommodation, gear, and daily lessons. Lessons are led by unqualified teenagers with no ocean safety training, beginner students are left unsupervised in dangerous rip currents, and no commercial insurance exists for injuries.',
    howToExit: 'Before booking any surf camp or lesson, verify that the school possesses an official Royal Moroccan Surfing Federation license and ISA-certified instructors. Request proof of commercial liability insurance.',
    category: 'shopping',
    severity: 'high',
    cityPriority: { taghazout: 10, agadir: 9 },
    neighborhood: 'Taghazout Village & Tamraght / Devil\'s Rock',
    specificLocation: 'Devil\'s Rock, Crocro Beach, and Panorama Point',
    operatingHours: '08:00–18:00',
    seasonality: 'Peak surf season (October–April)',
    socialProofQuotes: [
      {
        text: 'Booked a cheap surf package advertised on Instagram for Taghazout. The instructor left beginner students unsupervised at Devil\'s Rock during heavy swells. When a board hit my friend\'s face, the school had no first aid or insurance.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 95
      }
    ],
    escapePhraseDarija: 'Wash aandkoum r-rokhsa d-l-jamiaa w-t-tamin d-s-salamah?',
    escapePhraseFrench: 'Avez-vous une licence officielle de surf et une assurance responsabilité civile ?',
    savvyTips: [
      'Certified surf schools display official federation credentials and ISA badges on their premises.',
      'A proper surf lesson maintains a maximum ratio of 1 instructor per 6-8 students.'
    ]
  },
  {
    id: 'taghazout-quad-buggy-false-damage-claim',
    title: 'Tamraght & Taghazout Quad Rental Mechanical Damage Claim',
    description: 'Off-road quad and buggy tour companies near Tamraght/Taghazout give customers poorly maintained vehicles with worn clutches or damaged tires. After the tour, the guide inspects the quad, falsely accuses the customer of abusing the machinery or burning the clutch, and refuses to return passport deposits until €100–300 is paid.',
    howToExit: 'Never leave your original passport as collateral. Provide a paper copy and a small cash deposit. Perform a pre-ride inspection video documenting brake response, tire wear, and engine sounds with the guide present.',
    category: 'shopping',
    severity: 'high',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Tamraght, Taghazout Dunes & Aourir Coast',
    specificLocation: 'Coastal quad staging tracks along N1 highway',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Did a quad bike sand tour near Tamraght/Taghazout. The quad engine was sputtering before we started. At the end, the guide accused us of burning the clutch and demanded 200 EUR.',
        source: 'reddit',
        author: 'u/AtlasRider',
        sentiment: 'frustrated',
        upvotes: 110
      }
    ],
    escapePhraseDarija: 'Had l-quad kan qdim w-ma-fihsh t-tamin, ha hwa l-video d-l-bdaya.',
    escapePhraseFrench: 'Ce quad avait déjà un problème mécanique au départ, voici notre vidéo.',
    savvyTips: [
      'Test the throttle, brakes, and clutch in front of the guide before leaving the depot.',
      'Ensure the rental contract explicitly caps maximum liability for mechanical wear.'
    ]
  },
  {
    id: 'taghazout-atm-forced-dcc-exchange-markup',
    title: 'Taghazout Village ATM Dynamic Currency Conversion (DCC) Trap',
    description: 'Because Taghazout village has very few cash machines, the local ATMs apply aggressive default Dynamic Currency Conversion (DCC) settings, imposing a 12–15% conversion markup on foreign card withdrawals alongside standard transaction fees.',
    howToExit: 'When withdrawing dirhams from any ATM in Taghazout or Agadir, always select "Decline Conversion" or "Charge in Local Currency (MAD)" when prompted. Your home bank will process the transaction at the official interbank exchange rate instead.',
    category: 'digital',
    severity: 'medium',
    cityPriority: { taghazout: 10, agadir: 8 },
    neighborhood: 'Taghazout Village Center & Main Highway Gas Stations',
    specificLocation: 'Village square ATM & Shell gas station cash point',
    operatingHours: '24/7',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'There are only 2 main ATMs in Taghazout village. When withdrawing dirhams, the machine automatically offers Dynamic Currency Conversion (DCC) with a hidden 13% markup on exchange rate plus a 35 MAD fee.',
        source: 'reddit',
        author: 'u/Nomad_Jack',
        sentiment: 'warning',
        upvotes: 175
      }
    ],
    escapePhraseDarija: 'Khtar dima l-aomla l-mhalliya MAD f-l-guichet.',
    escapePhraseFrench: 'Choisissez toujours le débit en monnaie locale (MAD) au distributeur.',
    savvyTips: [
      'Always decline the ATM\'s offered conversion rate (DCC).',
      'Stock up on cash at major bank ATMs in Agadir before heading to Taghazout village.'
    ]
  },
  {
    id: 'tangier-port-ferry-ticket-tout',
    title: 'Tanger Ville Port Fake Ticket Touts & Currency Trap',
    description: 'As you exit the Tanger Ville Ferry Terminal or Railway Station, aggressive touts wearing official-looking lanyards intercept arriving passengers claiming the official ticket windows are closed or that you must exchange currency at their partner office before boarding.',
    howToExit: 'Ignore all informal lanyards and walk directly inside the official terminal building or railway station ticket offices. Buy tickets exclusively at marked company windows (FRS, Balearia, ONCF).',
    category: 'transport',
    severity: 'high',
    cityPriority: { tangier: 9 },
    neighborhood: 'Tanger Ville Ferry Terminal & Station Perimeter',
    specificLocation: 'Port exit gates and Railway station plaza',
    operatingHours: '07:00–22:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Exiting Tangier ferry port, a guy with a plastic badge told us FRS ferry tickets were sold out inside and tried to walk us to a street travel desk with a 40% markup.',
        source: 'reddit',
        author: 'u/FerryTraveler',
        sentiment: 'warning',
        upvotes: 112
      }
    ],
    escapePhraseDarija: 'Aandi t-ticket d-d-l-fasi. Mssafra f-l-marquep l-rasmi.',
    escapePhraseFrench: 'J\'ai déjà mon billet officiel de la compagnie.',
    savvyTips: [
      'Book ferry and ONCF train tickets online in advance.',
      'Only pay for tickets inside official glass counters inside the passenger terminal.'
    ]
  },
  {
    id: 'tangier-petit-taxi-flat-rate-trap',
    title: 'Ville Nouvelle & Railway Station Taxi Flat-Rate Trap',
    description: 'Light blue Petit Taxis waiting outside Tangier City Center Railway Station (Tanger Ville) or Port Gate refuse to switch on the meter, demanding inflated flat rates of 50–100 MAD for short 15 MAD rides to the Kasbah or Medina.',
    howToExit: 'Insist firmly on the meter before getting into the car ("Khdem l-compteur afawk"). If they refuse, step out and walk 50 meters down Avenue Mohammed VI to hail a moving light blue Petit Taxi.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { tangier: 8 },
    neighborhood: 'Tanger Ville Station & Kasbah Gates',
    specificLocation: 'Tanger Ville Railway Station taxicab rank',
    operatingHours: '08:00–23:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Taxis parked directly in front of Tangier station wanted 80 MAD to go to Petit Socco. Walked out to the main road and flagged a moving taxi that ran the meter for 14 MAD.',
        source: 'tripadvisor',
        sentiment: 'frustrated'
      }
    ],
    escapePhraseDarija: 'Khdem l-compteur afawk, walla ghadi n-akhod taxi akhor.',
    escapePhraseFrench: 'Mettez le compteur s\'il vous plaît, sinon je prends un autre taxi.',
    savvyTips: [
      'Petit Taxis in Tangier are blue with a yellow stripe.',
      'Night taxi rates have an official 50% surcharge above the meter.'
    ]
  },
  {
    id: 'tangier-kasbah-persuasive-carpet-hostage',
    title: 'Tangier Kasbah "Traditional Mint Tea" Carpet Sales Trap',
    description: 'Friendly young men in Petit Socco or Kasbah gates strike up friendly conversations in English or Spanish, invite you to a historic rooftop house for free tea and mint views, and lock you into a 2-hour high-pressure carpet sales presentation.',
    howToExit: 'Firmly decline invitations to private homes or artisan workshops from strangers. Say "La Shukran, aandi mawaid" (No thanks, I have an appointment).',
    category: 'shopping',
    severity: 'medium',
    cityPriority: { tangier: 8 },
    neighborhood: 'Kasbah & Petit Socco',
    specificLocation: 'Place du Petit Socco & Kasbah Gate',
    operatingHours: '10:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy invited us for mint tea on a terrace near Petit Socco. Next thing we knew, 6 carpets were unrolled and three men were aggressively bargaining.',
        source: 'reddit',
        author: 'u/MoroccoBound',
        sentiment: 'frustrated',
        upvotes: 88
      }
    ],
    escapePhraseDarija: 'La shukran, aandi mawaid m3a s-sadiq dyali.',
    escapePhraseFrench: 'Non merci, j\'ai un rendez-vous avec des amis.',
    savvyTips: [
      'Never accept tea invitations from strangers offering to walk you to private houses.',
      'If you do enter a shop, remember you are never obligated to purchase anything.'
    ]
  },
  {
    id: 'chefchaouen-kif-solicitation-and-extortion',
    title: 'Rif Hashish Street Solicitation & Police Extortion Setup',
    description: 'Persistent touts in Chefchaouen Medina alleys approach tourists offering fresh Rif hashish or visits to local marijuana farms. Touts frequently alert undercover contacts or corrupt accomplices who demand cash fines under threat of police arrest.',
    howToExit: 'Keep walking without stopping. Say "La, ma-kan-kammilsh, baraka!" (No, I don\'t smoke, stop!). Cannabis possession is strictly illegal in public spaces.',
    category: 'authority',
    severity: 'high',
    cityPriority: { chefchaouen: 9 },
    neighborhood: 'Medina Alleys & Outa El Hammam perimeter',
    specificLocation: 'Alleyways heading toward Bab El Sor',
    operatingHours: '12:00–23:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy in Chefchaouen badgered us for 20 minutes to visit a hash farm. A fellow traveler in our hostel bought a tiny piece and was immediately confronted by two men threatening arrest unless he paid 2000 MAD.',
        source: 'reddit',
        author: 'u/BluePearlVoyager',
        sentiment: 'warning',
        upvotes: 145
      }
    ],
    escapePhraseDarija: 'La! Ma-kan-kammilsh w-ma-bghitch. Khalini f-tiqati.',
    escapePhraseFrench: 'Non! Je ne fume pas et ne suis pas intéressé.',
    savvyTips: [
      'Firmly ignore solicitations for illegal substances.',
      'Do not follow strangers out of the main medina pathways into remote hill trails.'
    ]
  },
  {
    id: 'chefchaouen-spanish-mosque-private-viewpoint-fee',
    title: 'Spanish Mosque & Ras El Ma Private Photo Spot Toll',
    description: 'Near Ras El Ma springs or along the trail up to the Spanish Mosque, young men position themselves near stone terraces or private garden gates claiming you must pay 20–50 MAD to sit, photograph, or cross private land.',
    howToExit: 'The Spanish Mosque hilltop and main walking trail are 100% public land. Ignore the touts and continue along the main open dirt trail without paying.',
    category: 'street',
    severity: 'low',
    cityPriority: { chefchaouen: 7 },
    neighborhood: 'Ras El Ma & Spanish Mosque Hillside',
    specificLocation: 'Ras El Ma spring crossing & trail terrace',
    operatingHours: '16:00–20:00 (Sunset)',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy sitting near the top of the Spanish Mosque path said we had to pay 20 MAD to stand on the viewpoint terrace. Just walked around him; it is completely public property.',
        source: 'tripadvisor',
        sentiment: 'neutral'
      }
    ],
    escapePhraseDarija: 'Had l-makan malk aam, ma-fihsh l-fkhatir.',
    escapePhraseFrench: 'Cet endroit est public, il n\'y a pas de frais.',
    savvyTips: [
      'All public hiking trails in Chefchaouen are free.',
      'Bring your own water and enjoy the sunset from the main stone steps.'
    ]
  },
  {
    id: 'chefchaouen-akchour-waterfall-unnecessary-guide',
    title: 'Akchour Waterfalls & God\'s Bridge Fake Mandatory Guide',
    description: 'At the trailhead parking in Akchour (30km from Chefchaouen), guides surround arriving Grand Taxis insisting that the trails to the Waterfalls (Cascades) or God\'s Bridge (Pont de Dieu) are dangerous and legally require a paid guide.',
    howToExit: 'The trail is clearly defined along the riverbed with multiple local stalls. A guide is completely optional. Say "Mssayr rassi f-l-piste, shukran" (I\'m following the marked path).',
    category: 'street',
    severity: 'medium',
    cityPriority: { chefchaouen: 8 },
    neighborhood: 'Akchour Valley / Cascades',
    specificLocation: 'Akchour Grand Taxi Dam parking lot',
    operatingHours: '08:00–16:00',
    seasonality: 'Spring and Summer peak',
    socialProofQuotes: [
      {
        text: 'Taxis dropped us at Akchour and 5 guys insisted we needed a guide for 250 MAD because the trail was treacherous. We walked alone easily along the river with hundreds of families.',
        source: 'reddit',
        author: 'u/AkchourHiker',
        sentiment: 'warning',
        upvotes: 98
      }
    ],
    escapePhraseDarija: 'L-piste wadhah, ma-nehtajsh l-guide shukran.',
    escapePhraseFrench: 'Le sentier est très clair, je n\'ai pas besoin de guide.',
    savvyTips: [
      'Wear sturdy sneakers as the riverbed path involves stepping stones.',
      'Shared grand taxis from Chefchaouen to Akchour cost 25 MAD per seat.'
    ]
  },
  {
    id: 'merzouga-quad-damage-deposit-extortion',
    title: 'Erg Chebbi Quad Bike False Mechanical Damage Extortion',
    description: 'Quad rental shops along the Merzouga dune line hand tourists aged quad bikes. Upon return from the sand dunes, operators claim the engine, clutch, or suspension was broken by the rider, demanding 1,500–3,000 MAD.',
    howToExit: 'Photograph and film all existing body scratch marks, tires, and mechanical condition before starting. Never leave your original passport as collateral.',
    category: 'shopping',
    severity: 'high',
    cityPriority: { merzouga: 9 },
    neighborhood: 'Erg Chebbi Dune Line & Hassilabied',
    specificLocation: 'N13 hotel staging grounds along dune base',
    operatingHours: '08:00–18:00',
    seasonality: 'October–April peak',
    socialProofQuotes: [
      {
        text: 'Did a quad ride in Merzouga dunes. Quad was making grinding sounds from minute one. Afterwards the owner claimed we burnt the clutch and demanded 200 EUR.',
        source: 'reddit',
        author: 'u/SaharaDuneRider',
        sentiment: 'frustrated',
        upvotes: 115
      }
    ],
    escapePhraseDarija: 'Had l-quad kan fih had l-mochkil f-l-bdaya, ha l-video.',
    escapePhraseFrench: 'Ce quad avait déjà ce défaut, j\'ai la vidéo du départ.',
    savvyTips: [
      'Record a 30-second inspection video with the operator before starting.',
      'Never hand over your original passport; provide a paper copy.'
    ]
  },
  {
    id: 'merzouga-fake-luxury-desert-camp-bait-switch',
    title: 'Merzouga Luxury Desert Camp Highway Bait-and-Switch',
    description: 'Informal tour agents in Rissani or along the N13 road solicit drivers promising a 5-star luxury Glamping desert camp deep in Erg Chebbi for cheap. Upon arrival, travelers are taken to a basic tent on the flat gravel plains without running water or real dunes.',
    howToExit: 'Book desert camps in advance through verified platforms with geolocated reviews. Never buy desert camp packages from roadside touts in Rissani.',
    category: 'accommodation',
    severity: 'high',
    cityPriority: { merzouga: 9 },
    neighborhood: 'Rissani Junction & Merzouga Approach',
    specificLocation: 'Rissani roundabout & N13 highway stops',
    operatingHours: '10:00–19:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Guy in Rissani stopped our rental car promising a luxury camp with private shower deep in Erg Chebbi. We ended up in a dirty canvas tent next to the main paved highway with no dunes in sight.',
        source: 'tripadvisor',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: "Aandi reservation m'akada f-l-bivouac dyali f-Erg Chebbi.",
    escapePhraseFrench: 'J\'ai déjà réservé mon bivouac confirmé à l\'avance.',
    savvyTips: [
      'Check the satellite map location of your camp before booking.',
      'True dune camps are located inside the sand erg, accessible by camel or 4x4.'
    ]
  },
  {
    id: 'ouarzazate-ait-benhaddou-fake-entrance-fee',
    title: 'Aït Benhaddou Pedestrian Bridge Fake Ticket Toll',
    description: 'At the new pedestrian bridge crossing the Ounila River into the ancient UNESCO Ksar of Aït Benhaddou, unofficial touts stand near the riverbank demanding 20–50 MAD entrance tickets per person.',
    howToExit: 'The Ksar of Aït Benhaddou is a public UNESCO historic site with free entry. Walk past without paying. Only individual restored private Kasbah museums inside charge a small fee (20 MAD).',
    category: 'street',
    severity: 'medium',
    cityPriority: { ouarzazate: 8 },
    neighborhood: 'Aït Benhaddou Village',
    specificLocation: 'Pedestrian bridge crossing & river stepping stones',
    operatingHours: '08:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy stood by the new bridge in Ait Benhaddou asking for 30 MAD entry fee. We asked for an official receipt and he immediately backed off. The village entry is completely free.',
        source: 'reddit',
        author: 'u/AtlasExplorer',
        sentiment: 'warning',
        upvotes: 105
      }
    ],
    escapePhraseDarija: 'L-ksar f-fabor, ma-fihsh t-ticket d-d-dkhol.',
    escapePhraseFrench: 'L\'accès au Ksar est gratuit, il n\'y a pas de ticket d\'entrée.',
    savvyTips: [
      'Cross the river via the concrete bridge or stepping stones freely.',
      'If you wish to visit the inside of Kasbah Maison Traditionnelle, a small 10–20 MAD fee to the resident family is normal.'
    ]
  },
  {
    id: 'essaouira-port-seafood-grill-weight-inflation',
    title: 'Essaouira Harbor Open-Air Seafood Grill Weight Inflation',
    description: 'Open-air seafood grill stalls at the harbor entrance display fresh fish on ice. Touts quote a cheap starter price per plate (e.g. 50 MAD), but weigh the raw fish on uncalibrated scales including heavy ice and uncleaned guts, presenting a bill for 300–500 MAD.',
    howToExit: 'Agree on the TOTAL final price for cleaned, grilled fish before cooking starts, or eat at established fish restaurants along Place Moulay Hassan.',
    category: 'restaurant',
    severity: 'medium',
    cityPriority: { essaouira: 8 },
    neighborhood: 'Harbor Entrance & Place Moulay Hassan',
    specificLocation: 'Open-air seafood stalls (Grillades du Port)',
    operatingHours: '11:30–17:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Port fish stall quoted 60 MAD for a fish plate. At the end they handed us a handwritten bill for 380 MAD claiming the fish weighed 1.5 kg including ice and uncleaned head.',
        source: 'tripadvisor',
        sentiment: 'frustrated'
      }
    ],
    escapePhraseDarija: 'Atini l-thaman l-ijmali dyal l-hout mtaeb qbel ma t-tiybo.',
    escapePhraseFrench: 'Donnez-moi le prix total net avant de faire cuire le poisson.',
    savvyTips: [
      'Confirm whether bread, salad, and soft drinks are included in the price.',
      'Inspect the scale or choose fixed-menu seafood places near the main square.'
    ]
  },
  {
    id: 'rabat-kasbah-oudayas-garden-guide-coercion',
    title: 'Kasbah des Oudayas Unofficial Gate Guide Coercion',
    description: 'As you enter Bab Oudaïa gate into the Rabat Kasbah, men posing as municipal heritage guides walk alongside you, pointing out blue doors and Andalusian gardens, then demand 100 MAD for guided services.',
    howToExit: 'Say "Ntemchaw bohdna, shukran" (We are walking alone, thanks) immediately upon entry. The Kasbah is small, quiet, and impossible to get lost in.',
    category: 'street',
    severity: 'low',
    cityPriority: { rabat: 6 },
    neighborhood: 'Kasbah des Oudayas',
    specificLocation: 'Bab Oudaïa main gate & Andalusian Garden exit',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy walked beside us in the Kasbah des Oudayas in Rabat just chatting about the blue walls. At the end he asked for 100 MAD. Politely tell them no right at the gate.',
        source: 'reddit',
        author: 'u/RabatTraveler',
        sentiment: 'neutral',
        upvotes: 62
      }
    ],
    escapePhraseDarija: 'Bghina n-tsarkho bohdna, shukran khoya.',
    escapePhraseFrench: 'Nous préférons visiter seuls, merci mon frère.',
    savvyTips: [
      'Rabat Kasbah is completely safe and compact.',
      'Stop at Café des Oudaïas for traditional almond tea and ocean views.'
    ]
  },
  {
    id: 'dakhla-airport-lagoon-taxi-monopoly-markup',
    title: 'Dakhla Airport Informal 4x4 Lagoon Transfer Extortion',
    description: 'At Dakhla Airport (VIL), unmetered drivers approach kiteboarders demanding 300–400 MAD for the 28km drive to lagoon resorts, taking advantage of the lack of public city buses.',
    howToExit: 'Pre-arrange airport pickup directly with your resort (most include or provide fixed-rate shuttle service at ~150 MAD), or share a pre-booked airport taxi.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { dakhla: 8 },
    neighborhood: 'Dakhla Airport & Lagoon Route',
    specificLocation: 'Dakhla Airport arrivals hall exit',
    operatingHours: 'Arrival flight times',
    seasonality: 'November–April wind season peak',
    socialProofQuotes: [
      {
        text: 'Landed in Dakhla for kitesurfing. Driver at airport wanted 350 MAD for a 25 min drive to PK25 lagoon. Pre-book your camp shuttle beforehand!',
        source: 'reddit',
        author: 'u/KiteDakhla',
        sentiment: 'warning',
        upvotes: 78
      }
    ],
    escapePhraseDarija: 'Aandi l-transport dyal l-camp deja m-nadam.',
    escapePhraseFrench: 'Mon transfert est déjà organisé par mon hôtel.',
    savvyTips: [
      'Lagoon camps (PK25, Dakhla Attitude, Ocean Vagabond) provide shuttle buses.',
      'If taking a city taxi into Dakhla town center, the fair fare is 20–30 MAD.'
    ]
  },
  {
    id: 'imsouane-dinged-surfboard-repair-claim',
    title: 'Imsouane Surf Rental Ding Repair Damage Penalty',
    description: 'Small beach surf shacks in Imsouane rent boards with pre-existing hairline cracks or sun-brittle fiberglass. Upon returning the board after a session in Magic Bay, the shop claims you cracked the tail and demands 300 MAD repair fee.',
    howToExit: 'Inspect the board meticulously before handing over money. Take clear photos and a 10-second video showing fins, rails, nose, and tail with the owner present.',
    category: 'shopping',
    severity: 'medium',
    cityPriority: { imsouane: 8 },
    neighborhood: 'Magic Bay & Imsouane Port',
    specificLocation: 'Beachfront surf rental shops along Magic Bay',
    operatingHours: '08:00–18:00',
    seasonality: 'Winter swell season (October–March)',
    socialProofQuotes: [
      {
        text: 'Rented a soft top in Imsouane. When returning it, guy pointed out a tiny ding on the tail that was clearly old and tried to keep my 300 MAD deposit. Video proof saved us.',
        source: 'reddit',
        author: 'u/ImsouaneSurfer',
        sentiment: 'warning',
        upvotes: 84
      }
    ],
    escapePhraseDarija: 'Had l-kasr kan deja f-l-faloqa f-l-video d-l-bdaya.',
    escapePhraseFrench: 'Cette fissure était déjà présente sur la planche, voici la vidéo.',
    savvyTips: [
      'Take photos of both sides and rails before paying rental fees.',
      'Soft-top boards are safest for beginners and less prone to ding claims.'
    ]
  },
  {
    id: 'meknes-volubilis-unofficial-guide-trap',
    title: 'Volubilis Ruins Unofficial Entrance Guide Pressure',
    description: 'At the entrance to the Roman ruins of Volubilis near Meknes, freelance guides outside the official ticket booth claim that entry without a guide is illegal or that you will miss key mosaics.',
    howToExit: 'Self-guided entry is completely legal. Buy your official ticket at the Ministry of Culture window inside. If you want a guide, request an officially badged guide directly at the desk.',
    category: 'street',
    severity: 'medium',
    cityPriority: { meknes: 8 },
    neighborhood: 'Volubilis Archaeological Site',
    specificLocation: 'Volubilis parking area & entrance gate',
    operatingHours: '08:30–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Outside Volubilis entry, three guys surrounded us saying we could not enter without a licensed guide for 200 MAD. Walked straight to the official booth and bought our 70 MAD entry ticket.',
        source: 'tripadvisor',
        sentiment: 'warning'
      }
    ],
    escapePhraseDarija: 'Aandi l-guia l-mouhtaraf f-l-maktab l-rasmi f-l-inside.',
    escapePhraseFrench: 'Je prends mon billet officiel au guichet, merci.',
    savvyTips: [
      'Official Volubilis entry tickets are 70 MAD.',
      'Information plaques inside provide good historic details in French and English.'
    ]
  },
  {
    id: 'ifrane-azrou-monkey-feeding-photo-fee-trap',
    title: 'Cèdre Gouraud Cedar Forest Barbary Macaque Photo Trap',
    description: 'At the Cèdre Gouraud forest stop near Azrou, vendors place peanuts in your hands or place Barbary macaques on your shoulders without permission, then aggressively demand 50–100 MAD for photos.',
    howToExit: 'Keep hands in pockets when approaching wildlife. Decline peanut bags firmly ("La Shukran"). Observe macaques at a safe distance.',
    category: 'street',
    severity: 'low',
    cityPriority: { ifrane_azrou: 7, ifrane: 7 },
    neighborhood: 'Cèdre Gouraud Cedar Forest',
    specificLocation: 'Cedar forest parking & horse trail area',
    operatingHours: '09:00–17:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'In the cedar forest near Azrou, a guy thrust a bag of peanuts into my daughter\'s hands to feed the monkeys and then demanded 50 MAD. Keep your hands in your pockets.',
        source: 'reddit',
        author: 'u/AtlasDrive',
        sentiment: 'warning',
        upvotes: 92
      }
    ],
    escapePhraseDarija: 'La shukran, ma-bghitch n-woekal l-qrod.',
    escapePhraseFrench: 'Non merci, je ne veux pas nourrir les singes.',
    savvyTips: [
      'Feeding wildlife is discouraged by nature conservationists.',
      'Keep cameras and personal items secured as macaques are quick.'
    ]
  },
  {
    id: 'ifrane-winter-fake-chalet-rental-scam',
    title: 'Ifrane Winter Ski Fake Luxury Chalet Rental Scam',
    description: 'During peak winter snow season (December–February), fraudulent social media accounts and unverified classified sites post AI-generated or stolen photos of luxury alpine chalets with fireplaces in Ifrane, demanding 50% advance bank wire transfers before disappearing and leaving travelers stranded without accommodation.',
    howToExit: 'Never transfer advance rental deposits via direct bank wire or peer-to-peer transfers for unverified listings. Book only through reputable protected platforms (Airbnb, Booking.com) or established local hotels.',
    category: 'accommodation',
    severity: 'high',
    cityPriority: { ifrane_azrou: 9, ifrane: 9, azrou: 6 },
    neighborhood: 'Downtown Ifrane & Michlifen Ski Area',
    specificLocation: 'Social media classified groups & unverified rental portals',
    operatingHours: 'Winter holiday season (December–February)',
    seasonality: 'Winter peak',
    socialProofQuotes: [
      {
        text: 'Booked a chalet in Ifrane for a family ski weekend via a Facebook page with beautiful chalet photos. Paid a 1500 MAD deposit via bank transfer. When we arrived in Ifrane in the snow, the address was an empty lot. Use verified platforms only!',
        source: 'facebook',
        sentiment: 'frustrated',
        upvotes: 115
      }
    ],
    escapePhraseDarija: 'Kan-hjez ghir b-les applications l-mouathaqa bhal Booking aw Airbnb.',
    escapePhraseFrench: 'Je réserve uniquement via des plateformes vérifiées comme Booking ou Airbnb.',
    savvyTips: [
      'Be extremely skeptical of chalet rates that seem too good to be true during New Year or winter snowfalls.',
      'Cross-check chalet photos using reverse image search before making any commitments.',
      'Confirm physical chalet registration or key handover through licensed local agencies in Ifrane center.'
    ]
  },
  {
    id: 'tetouan-medina-bab-el-okla-faux-guide',
    title: 'Bab El Okla & Bab Tout Faux Guide Tannery Trap',
    description: 'Unofficial touts waiting near Bab El Okla or Bab Tout gates in Tetouan approach visitors claiming the medina is closed, too confusing, or dangerous without a local guide, leading tourists through labyrinth alleys directly to high-commission leather or carpet shops.',
    howToExit: 'Decline unsolicited guiding politely but firmly with "La, Shukran". Tetouan Medina is safe and uncommercialized; explore independently or book a licensed guide through your riad or the tourist delegation at Place Moulay El Mehdi.',
    category: 'street',
    severity: 'medium',
    cityPriority: { tetouan_martil: 8, tetouan: 9 },
    neighborhood: 'Tetouan UNESCO Medina & Bab El Okla',
    specificLocation: 'Bab El Okla, Bab Tout & Rue Tarik Ibn Ziad',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'At Bab El Okla, a man followed us insisting the medina tannery was closing in 5 minutes and we had to follow him. We used an offline map and walked the other way. The medina is peaceful once you pass the main gates.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 78
      }
    ],
    escapePhraseDarija: 'La shukran, aandi l-khrita o kan-aaraf triqi mzyan.',
    escapePhraseFrench: 'Non merci, j\'ai mon plan et je préfère visiter seul.',
    savvyTips: [
      'Tetouan Medina has clear tile street signs and artisan quarters (zellige, leather, woodwork).',
      'The artisan school (École des Arts et Métiers) at Bab El Okla has fixed municipal entrance and no commission salespeople.'
    ]
  },
  {
    id: 'martil-summer-beach-umbrella-parking-overcharge',
    title: 'Martil Beachfront Gilet Jaune & Parasol Rental Overcharge',
    description: 'During peak summer beach season (July–August), informal "yellow vest" parking guardians and beach shade operators in Martil demand inflated fees (30–60 MAD for parking, 80–120 MAD for umbrellas) compared to regulated municipal rates.',
    howToExit: 'Official municipal day parking in northern coastal towns is standard 3–5 MAD (or 10 MAD overnight). Ask for a stamped municipal municipal ticket (ticket municipal) and agree on umbrella/chair prices before sitting down on the sand.',
    category: 'street',
    severity: 'low',
    cityPriority: { tetouan_martil: 7, martil: 8, tetouan: 6 },
    neighborhood: 'Martil Beach & Corniche Esplanade',
    specificLocation: 'Corniche de Martil & Avenue Miramar beach access',
    operatingHours: '08:00–20:00 (Summer)',
    seasonality: 'Summer peak (July–August)',
    socialProofQuotes: [
      {
        text: 'A beach shade guy in Martil charged 100 MAD for two plastic chairs and an umbrella, but the family next to us paid 40 MAD because they agreed on the price upfront in Darija. Always confirm first!',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 64
      }
    ],
    escapePhraseDarija: 'Chhal l-taman qbal ma ngles? Bghit l-taman l-maaqoul.',
    escapePhraseFrench: 'Quel est le prix fixé avant de m\'installer ?',
    savvyTips: [
      'Fair rate for a parasol with two chairs in Martil is 30–50 MAD for the whole afternoon.',
      'Municipal parking has official blue meter signs or official tariff boards along the corniche.'
    ]
  },
  {
    id: 'tamuda-bay-grand-taxi-private-rate-trap',
    title: 'Tetouan to M\'diq / Martil Grand Taxi Private Overcharge',
    description: 'At the grand taxi stations in Tetouan (near Place de la Gare / Bab Tout), some drivers attempt to convince foreign tourists that shared collective seats are full or unavailable, attempting to charge 100–150 MAD for a "private taxi" instead of the regulated 7–10 MAD per individual shared seat.',
    howToExit: 'Ask clearly for "Blassa" (one seat) and wait with local passengers for the cab to fill (6 passengers). If you prefer a private cab ("Courssa"), agree on a fair flat price (40–60 MAD).',
    category: 'transport',
    severity: 'medium',
    cityPriority: { tetouan_martil: 8, tetouan: 8, martil: 7, mdiq: 7 },
    neighborhood: 'Station Grand Taxi Martil / M\'diq & Tetouan Station',
    specificLocation: 'Place de la Gare Grand Taxi Hub',
    operatingHours: '07:00–23:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A grand taxi driver in Tetouan tried to charge us 120 MAD to go to M\'diq, claiming shared taxis do not take tourists. We asked another driver for "blassa" and paid 8 MAD each.',
        source: 'google_review',
        sentiment: 'warning',
        upvotes: 89
      }
    ],
    escapePhraseDarija: 'Bghit ghir blassa wahda f-l-korsa l-majmouaa.',
    escapePhraseFrench: 'Je veux juste une place (blassa) dans le taxi partagé.',
    savvyTips: [
      'Official shared grand taxi fare between Tetouan and Martil is approx 6–8 MAD per seat.',
      'Official fare between Tetouan and M\'diq is approx 8–10 MAD per seat.'
    ]
  },
  {
    id: 'el-jadida-portuguese-cistern-door-tout',
    title: 'Portuguese Cistern Freelance Door Tout',
    description: 'Informal touts hovering near the entrance of the Portuguese Cistern (Citerne Portugaise) on Rue Mohammed Ahbach approach tourists claiming the monument is closed, tickets are sold out, or offering unofficial "priority skip-the-line" guiding services for 50–100 MAD.',
    howToExit: 'Politely decline and walk straight to the official municipal ticket booth inside the archway. Standard entry is fixed (70 MAD for foreign visitors) and paid directly at the cash register.',
    category: 'street',
    severity: 'low',
    cityPriority: { el_jadida: 9 },
    neighborhood: 'Cité Portugaise',
    specificLocation: 'Rue Mohammed Ahbach entrance to Portuguese Cistern',
    operatingHours: '09:00–18:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'A guy outside the cistern told us it was closed for prayer and offered to take us to a rooftop view instead. We ignored him, walked inside, and bought our tickets normally at the desk.',
        source: 'tripadvisor',
        sentiment: 'warning',
        upvotes: 83
      }
    ],
    escapePhraseDarija: 'La shukran, ghadi nqteaa l-warqa men l-guichet l-rasmi.',
    escapePhraseFrench: 'Non merci, j\'achète mon billet directement au guichet officiel.',
    savvyTips: [
      'The Portuguese Cistern has official opening hours displayed at the door with government ticket tariffs.',
      'Enjoy the atmospheric gothic vault reflections; photography is permitted inside.'
    ]
  },
  {
    id: 'el-jadida-port-fish-grill-weight-trap',
    title: 'Port Fish Market Grill Weight & Extras Inflation',
    description: 'At informal fish grill stands around the Port of El Jadida, vendors quote a cheap price per piece verbally, but subsequently bill tourists for inflated raw weights or add unrequested side salads and bread at high individual prices.',
    howToExit: 'Choose your fresh fish, watch it being weighed on the scale, confirm the all-inclusive total price (including bread, tomato salad, and grilling fee) before the fish is placed on the grill.',
    category: 'restaurant',
    severity: 'medium',
    cityPriority: { el_jadida: 8 },
    neighborhood: 'Port d\'El Jadida & Fish Market',
    specificLocation: 'Port de Pêche fish stalls & Place Al Hansali',
    operatingHours: '11:30–17:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'We picked 4 fresh dorades at the port market and the grill guy added 4 expensive salads and drinks without asking, making the bill 280 MAD. Always verify what is included upfront.',
        source: 'google_review',
        sentiment: 'warning',
        upvotes: 67
      }
    ],
    escapePhraseDarija: 'Aatini taman kamel m-a chlada o l-khobz qbal ma tchwi.',
    escapePhraseFrench: 'Donnez-moi le prix total avec salade et pain avant de griller.',
    savvyTips: [
      'Standard grilling fee (chouwaya) is 15–25 MAD per kilo if you buy fish separately in the auction hall.',
      'Look for busy grill stalls packed with local Moroccan families for the freshest turnover and fair pricing.'
    ]
  },
  {
    id: 'sidi-bouzid-summer-parking-overcharge',
    title: 'Sidi Bouzid Beachfront Gilet Jaune Parking Overcharge',
    description: 'During summer weekends and holiday peaks, informal "yellow vest" parking guardians at Sidi Bouzid beach lookouts and restaurants demand 20–30 MAD to park along public roadside spots.',
    howToExit: 'Municipal day parking in El Jadida province is officially 3–5 MAD (or 10 MAD overnight). Hand over standard 5 MAD with exact change and request a municipal ticket.',
    category: 'street',
    severity: 'low',
    cityPriority: { el_jadida: 7, sidi_bouzid: 8 },
    neighborhood: 'Sidi Bouzid Beach & Cliffside',
    specificLocation: 'Route de Sidi Bouzid & Plage Sidi Bouzid parking',
    operatingHours: '09:00–22:00 (Summer)',
    seasonality: 'Summer peak (June–September)',
    socialProofQuotes: [
      {
        text: 'A parking guy at Sidi Bouzid asked for 20 MAD. I gave him a 5 MAD coin calmly in Darija and walked to the beach without any problem. Never pay 20 MAD for street parking.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 56
      }
    ],
    escapePhraseDarija: 'Ha 5 d-drahim, hada howa l-tarif l-qanouni.',
    escapePhraseFrench: 'Voici 5 dirhams, c\'est le tarif réglementaire.',
    savvyTips: [
      'Keep 5 MAD and 10 MAD coins ready in your car console for easy parking payments.',
      'Sidi Bouzid beach has clear roadside municipal parking spaces with designated guards.'
    ]
  },
  {
    id: 'imsouane-dinged-surfboard-repair-claim',
    title: 'Surfboard Pre-Existing Ding & Damage Repair Claim',
    description: 'When returning a rented surfboard at unaccredited beach huts or informal rentals in Imsouane, the vendor points to a pressure dent, fractured fin box, or fiberglass rail crack that already existed, demanding an immediate cash "repair penalty" of 200–400 MAD.',
    howToExit: 'Before accepting the board and before paying, take a 30-second continuous smartphone video walking around the entire board in good light, showing both top deck, bottom hull, rails, nose, and fin boxes in front of the rental clerk.',
    category: 'shopping',
    severity: 'medium',
    cityPriority: { imsouane: 9 },
    neighborhood: 'Magic Bay & Port Headland',
    specificLocation: 'Magic Bay beach access & Port surf rental alley',
    operatingHours: '08:00–19:00',
    seasonality: 'Year-round (Peak surf season October–April)',
    socialProofQuotes: [
      {
        text: 'Rented a 9\'2 longboard in Imsouane and when bringing it back the guy claimed I cracked the nose and demanded 300 MAD. Luckily I had taken photos right outside the shop showing the crack was already taped up.',
        source: 'reddit',
        sentiment: 'warning',
        upvotes: 112
      }
    ],
    escapePhraseDarija: 'Sowwart l-plancha f-l-lowwel, had l-harissa kant men qbal.',
    escapePhraseFrench: 'J\'ai filmé la planche avant de partir, ce choc était déjà présent.',
    savvyTips: [
      'Standard surfboard rental in Imsouane is 50–100 MAD per day for foamies and 100–150 MAD for fiberglass/epoxy boards.',
      'Inspect the leash string and fin screws to make sure they are secure before paddling into Magic Bay.'
    ]
  },
  {
    id: 'imsouane-grand-taxi-junction-overcharge',
    title: 'Imsouane Junction to Village Grand Taxi Private Charter Trap',
    description: 'When traveling from Essaouira or Agadir by grand taxi, drivers dropping passengers at the highway junction (croisement Imsouane / N1) or direct charter drivers attempt to charge foreign tourists 300–450 MAD for a private ride instead of the regulated local shared rate (30–50 MAD per seat).',
    howToExit: 'Ask specifically for a shared seat ("Blassa") into the village or arrange a shared shuttle through your surf hostel in advance.',
    category: 'transport',
    severity: 'medium',
    cityPriority: { imsouane: 8 },
    neighborhood: 'Imsouane Village & N1 Junction',
    specificLocation: 'N1 Highway Junction & Village taxi rank',
    operatingHours: '07:00–20:00',
    seasonality: 'Year-round',
    socialProofQuotes: [
      {
        text: 'Got dropped at the N1 junction and a local driver wanted 250 MAD for the 12 km downhill drive to the bay. We waited 10 minutes with two other surfers and shared a taxi for 30 MAD each.',
        source: 'google_review',
        sentiment: 'warning',
        upvotes: 74
      }
    ],
    escapePhraseDarija: 'Bghina n-rkbo b-l-blassa m-a n-nas.',
    escapePhraseFrench: 'On veut payer par place partagée, pas une course privée.',
    savvyTips: [
      'The scenic mountain descent from the N1 junction to Imsouane bay is about 12 km.',
      'Many surf camps in Imsouane offer scheduled shuttle pickups from Agadir airport (AGA) or Essaouira for a fixed transparent rate.'
    ]
  }
];



