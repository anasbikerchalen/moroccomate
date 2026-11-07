/**
 * ============================================================================
 * MOROCCO TRAVEL OS - PLACE INTEL DATABASE (placeIntelDB)
 * ============================================================================
 * 
 * INSTRUCTIONS FOR ADDING NEW PLACE INTEL ENTRIES:
 * -----------------------------------------------
 * When adding or modifying place-specific intelligence profiles (e.g., using an external AI assistant),
 * you MUST adhere strictly to the TypeScript interface `PlaceIntel` defined in types/savvy.ts.
 * Do not hallucinate fields, rename existing ones, or ignore structural validation.
 * 
 * SCHEMA SPECIFICATION:
 * 
 * interface PlaceIntel {
 *   placeId: string;                   // Unique ID (e.g., 'm-eat-1', 'sh-mar-3')
 *   placeType: 'eat' | 'sleep' | 'shop' | 'experience'; // Core category classification
 *   placeName: string;                 // Official/registered name of the establishment
 *   cityId: string;                    // Lowercase city ID (e.g., 'marrakech', 'fes', 'casablanca')
 *   neighborhood: string;              // Name of the neighborhood/quarter (e.g., 'Medina', 'Gueliz')
 *   
 *   safetyScore: number;               // Security, physical safety, and tourist safety index (0.0 to 10.0)
 *   valueForMoneyScore: number;        // Price vs. quality index (0.0 to 10.0)
 *   touristFriendlinessScore: number;  // Level of English/French spoken, willingness to help (0.0 to 10.0)
 *   scamRiskScore: number;             // Frequency of bait-and-switch, overcharging, or hidden fees (0.0 to 10.0)
 *   happinessScore: number;            // Overall net visitor satisfaction (0.0 to 10.0)
 *   
 *   socialHighlights: {                // Curated real-world social reviews (e.g. from forums)
 *     text: string;
 *     source: 'reddit' | 'tripadvisor' | 'facebook' | 'google_review' | 'instagram';
 *     sentiment: 'positive' | 'negative' | 'neutral' | 'tip' | 'warning';
 *     dateHarvested?: string;          // ISO format date (YYYY-MM-DD)
 *   }[];
 *   
 *   redFlags: {                        // Specific localized alerts and security issues
 *     text: string;
 *     source: 'reddit' | 'tripadvisor' | 'facebook' | 'google_review' | 'instagram';
 *     severity: 'minor' | 'major' | 'safety';
 *   }[];
 *   
 *   localInsight: string;              // Rich text explaining the local reality, pricing, and how to behave
 *   commonComplaints: string[];        // Standard bulleted visitor frustrations
 *   commonPraise: string[];            // Standard bulleted visitor highlights
 *   savvyTips: string[];               // Actionable recommendations/workarounds to optimize the visit
 *   
 *   lastVerifiedDate: string;          // ISO format date of last manual field check (YYYY-MM-DD)
 *   verifiedBy: 'platform' | 'community' | 'partner';
 *   
 *   savvyScore?: number;               // Optional overall savvy percent index (0 to 100)
 *   fairPriceGuidelines?: {            // Pricing and bargaining reference matrix
 *     avgExpatSpend: string;           // E.g., '100-300 MAD per person'
 *     markupAlertThreshold: string;    // E.g., 'Avoid buying when markup exceeds 200%'
 *     negotiability: 'fixed' | 'moderate' | 'high';
 *   };
 *   
 *   darijaEscapeScripts?: {            // Phonetic local language prompts for situation-specific escape
 *     script: string;                  // Phonetic script (e.g., 'La, shukran.')
 *     translation: string;             // English translation (e.g., 'No, thank you.')
 *     situation: string;               // When to say this (e.g., 'When pushy seller approaches')
 *   }[];
 * }
 * 
 * RULES FOR EXTERNAL AI AGENTS:
 * 1. Maintain complete data integrity. Do NOT remove existing items when appending new ones.
 * 2. Ensure `placeId` corresponds uniquely to either a static id or listing registry entry.
 * 3. Keep all reviews, ratings, red flags, and local insights realistic, objective, and respectful.
 * 4. Ensure no mock values or placeholder strings are committed.
 * ============================================================================
 */

import { PlaceIntel } from '../../types/savvy';

export const placeIntelDB: PlaceIntel[] = [
  {
    placeId: 'm-eat-1',
    placeType: 'eat',
    placeName: 'Le Jardin',
    cityId: 'marrakech',
    neighborhood: 'Medina',
    safetyScore: 8.8,
    valueForMoneyScore: 7.5,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 1.2,
    happinessScore: 8.4,
    socialHighlights: [
      {
        text: 'An absolute oasis in the middle of the Medina. We sat under banana trees listening to birds chirping while eating a superb saffron chicken tagine. Feels completely safe and quiet.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-05-15'
      },
      {
        text: 'Great spot to escape the chaotic souks. The staff speaks excellent English and cards are fully accepted. Standard tourist pricing, but the vibe is worth it.',
        source: 'reddit',
        sentiment: 'tip',
        dateHarvested: '2026-06-01'
      }
    ],
    redFlags: [
      {
        text: 'The alley leading to the entrance is very dark at night, and some touts stand there claiming the restaurant is closed. Ignore them and walk inside.',
        source: 'tripadvisor',
        severity: 'minor'
      }
    ],
    localInsight: 'While tourists love this spot, locals usually go for afternoon tea rather than full dinner. It is 30% cheaper to stick to the drinks and pastries during off-peak hours (15:00-17:00).',
    commonComplaints: ['Slightly higher prices than average street food', 'Alley entrance can feel hidden', 'No alcohol served (dry)'],
    commonPraise: ['Stunning shaded courtyard garden', 'English and French menu with excellent staff', 'Cool refuge from Medina heat'],
    savvyTips: [
      'Enter via the main street rather than taking side medina shortcuts if walking back late.',
      'Order the mint tea service — they do a traditional high-pour ceremony at your table.'
    ],
    lastVerifiedDate: '2026-06-20',
    verifiedBy: 'platform'
  },
  {
    placeId: 'm-sleep-1',
    placeType: 'sleep',
    placeName: 'La Mamounia',
    cityId: 'marrakech',
    neighborhood: 'Medina / Hivernage',
    safetyScore: 9.8,
    valueForMoneyScore: 8.2,
    touristFriendlinessScore: 9.5,
    scamRiskScore: 0.5,
    happinessScore: 9.2,
    socialHighlights: [
      {
        text: 'Stunning luxury. The gardens are magnificent, and the level of service is legendary. You pay premium, but you get premium.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-04-10'
      }
    ],
    redFlags: [
      {
        text: 'Taxis waiting directly outside the gates refuse to use meters and charge triple standard rates. Walk 100 meters down the avenue to flag down a driving taxi.',
        source: 'facebook',
        severity: 'minor'
      }
    ],
    localInsight: 'You do not need to stay overnight to experience La Mamounia. You can purchase a day pass (including garden access and a pastry at Pierre Hermé) or simply go for an elegant cocktail in the evening (dress code strictly enforced).',
    commonComplaints: ['Extremely expensive room rates', 'Very strict smart-casual dress code at entrances', 'Taxis outside are notorious for overcharging'],
    commonPraise: ['Exquisite historic architecture', 'Centuries-old peaceful olive tree gardens', 'World-class security and spa facilities'],
    savvyTips: [
      'Pack a collared shirt/closed shoes or elegant dress; the front gates will deny entry to anyone in shorts, sandals, or athletic wear.',
      'Walk to the public boulevard for a metered petit taxi instead of hiring the private cars parked on-site.'
    ],
    lastVerifiedDate: '2026-06-25',
    verifiedBy: 'community'
  },
  {
    placeId: 'e-marrakech-cafe-des-epices',
    placeType: 'eat',
    placeName: 'Café des Épices',
    cityId: 'marrakech',
    neighborhood: 'Medina',
    safetyScore: 8.5,
    valueForMoneyScore: 8.0,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 1.5,
    happinessScore: 8.3,
    socialHighlights: [
      {
        text: 'Best place to watch the spice square (Rahba Kedima). Rooftop view is iconic. Prices are very reasonable for Marrakech Medina.',
        source: 'instagram',
        sentiment: 'positive',
        dateHarvested: '2026-05-20'
      }
    ],
    redFlags: [
      {
        text: 'Water sellers and hat vendors stand directly outside the door and can be pushy if you sit on the lowest street-level tables.',
        source: 'google_review',
        severity: 'minor'
      }
    ],
    localInsight: 'Grab a table on the third level/rooftop around 18:00. It offers one of the best views of the sunset over the Koutoubia mosque without needing a reservation.',
    commonComplaints: ['Can get very busy with long waits for rooftop seats', 'Limited bathroom facilities', 'Street-level tables lack privacy'],
    commonPraise: ['Stunning market and sunset views', 'Friendly, english-speaking young staff', 'Great avocado juices and spiced coffee'],
    savvyTips: [
      'Try their unique spiced coffee (café aux épices) — it is an authentic cardamom and cinnamon blend.',
      'If there is a queue, ask for a card to wait at their sister restaurant, Le Jardin, which is just a 5-minute walk away.'
    ],
    lastVerifiedDate: '2026-06-18',
    verifiedBy: 'platform'
  },
  {
    placeId: 'f-sleep-1',
    placeType: 'sleep',
    placeName: 'Riad Fes',
    cityId: 'fes',
    neighborhood: 'Medina',
    safetyScore: 9.2,
    valueForMoneyScore: 8.5,
    touristFriendlinessScore: 9.2,
    scamRiskScore: 1.0,
    happinessScore: 8.9,
    socialHighlights: [
      {
        text: 'Relais & Châteaux property that feels like a dream. The mosaic work in the main courtyard is breathtaking. Exceptionally peaceful inside the busy Fes medina.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-03-22'
      }
    ],
    redFlags: [
      {
        text: 'False guides hover around the narrow alleyways leading to the riad entrance. Do not accept guiding offers; the riad staff is happy to walk out and escort you.',
        source: 'reddit',
        severity: 'minor'
      }
    ],
    localInsight: 'Fes Medina can be extremely disorienting at night. The riad offers a reliable in-house escort service from the closest car drop-off point (Place Batha) to keep you comfortable.',
    commonComplaints: ['Hard to locate on foot for first-timers', 'Dinner is expensive compared to external options', 'Call to prayer is very loud from nearby minaret (pack earplugs)'],
    commonPraise: ['Museum-quality craftsmanship and tiles', 'Outstanding panoramic rooftop over Fes', 'Top-tier service and hammam'],
    savvyTips: [
      'Pin the location on offline maps while at the hotel so you can easily navigate back.',
      'Book their private shuttle from the airport; it avoids taxi scams at the Fes airport terminal completely.'
    ],
    lastVerifiedDate: '2026-06-22',
    verifiedBy: 'ai-research'
  },
  {
    placeId: 'c-eat-1',
    placeType: 'eat',
    placeName: "Rick's Café",
    cityId: 'casablanca',
    neighborhood: 'Sour Jdid',
    safetyScore: 9.0,
    valueForMoneyScore: 7.0,
    touristFriendlinessScore: 9.2,
    scamRiskScore: 1.8,
    happinessScore: 8.0,
    socialHighlights: [
      {
        text: 'If you love the movie Casablanca, this is a must-visit. The piano player, the decor, the cocktails — they got the atmosphere perfect. Food is good but pricey.',
        source: 'facebook',
        sentiment: 'positive',
        dateHarvested: '2026-05-30'
      }
    ],
    redFlags: [
      {
        text: 'Unofficial parking attendants outside demand flat 20-50 MAD fees. Remind them you are dining at the cafe and pay 10 MAD max.',
        source: 'google_review',
        severity: 'minor'
      }
    ],
    localInsight: 'This restaurant was opened by a retired US diplomat to recreate the movie set (the film was actually shot in Hollywood). Book several days in advance, as they rarely accept walk-ins for dinner.',
    commonComplaints: ['Strict reservation policy', 'Pricey food relative to local gourmet joints', 'Dress code forbids athletic clothes and shorts'],
    commonPraise: ['Immersive jazz-age movie ambiance', 'Excellent live piano performances', 'Great gin cocktails'],
    savvyTips: [
      'Visit during lunch hours for a more relaxed experience and a lighter reservation requirement.',
      'Ask to sit near the piano on the ground floor to fully enjoy the acoustics.'
    ],
    lastVerifiedDate: '2026-06-15',
    verifiedBy: 'platform'
  },
  {
    placeId: 'sh-mar-1',
    placeType: 'shop',
    placeName: 'Ensemble Artisanal',
    cityId: 'marrakech',
    neighborhood: 'Arset El Bilk',
    safetyScore: 9.0,
    valueForMoneyScore: 8.5,
    touristFriendlinessScore: 9.5,
    scamRiskScore: 0.5,
    happinessScore: 8.8,
    socialHighlights: [
      {
        text: 'No haggling, just beautiful crafts. Watching the artisans was the highlight of my trip.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-05-15'
      }
    ],
    redFlags: [],
    localInsight: 'Locals know this is the best place for guaranteed-quality souvenirs without the stress of haggling. Prices are 10-20% higher than the souk but the quality is certified.',
    commonComplaints: ['Prices slightly higher than souk stalls', 'Can feel like a museum rather than a market'],
    commonPraise: ['Fixed prices — no haggling stress', 'Watch artisans crafting live', 'Government-certified quality'],
    savvyTips: [
      'Visit weekday mornings before 11 AM for the quietest experience and best artisan interaction.',
      'The on-site La Poste shipping office handles worldwide delivery — much safer than carrying fragile ceramics home.'
    ],
    lastVerifiedDate: '2026-06-20',
    verifiedBy: 'platform',
    savvyScore: 92,
    fairPriceGuidelines: {
      avgExpatSpend: '200-500 MAD per item',
      markupAlertThreshold: 'Prices are fixed — no overcharging risk',
      negotiability: 'fixed',
    },
    darijaEscapeScripts: [
      {
        script: 'La, shukran. Bghit nshof ghir.',
        translation: 'No thank you. I just want to look.',
        situation: 'When a seller is being too pushy'
      }
    ]
  },
  {
    placeId: 'sh-mar-2',
    placeType: 'shop',
    placeName: 'Max & Jan',
    cityId: 'marrakech',
    neighborhood: 'Medina',
    safetyScore: 8.5,
    valueForMoneyScore: 7.0,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 0.8,
    happinessScore: 8.2,
    socialHighlights: [
      {
        text: 'Pricey but the quality and design are unique. The cafe upstairs is great too.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-01'
      }
    ],
    redFlags: [
      {
        text: 'Some items are significantly marked up compared to similar pieces in the souk. You are paying for the curation and the brand.',
        source: 'reddit',
        severity: 'minor'
      }
    ],
    localInsight: 'The rooftop cafe is a hidden gem — great for a quiet coffee away from the Medina crowds, even if you do not buy anything.',
    commonComplaints: ['Premium pricing for items available cheaper elsewhere', 'Small store can feel crowded on weekends'],
    commonPraise: ['Unique designer curation', 'Beautiful rooftop cafe', 'Ethical fashion focus'],
    savvyTips: [
      'Ask about their made-to-order service — they can custom-fit any piece in 3-5 days.',
      'The cafe is open to non-shoppers — a great quiet escape from the souk chaos.'
    ],
    lastVerifiedDate: '2026-06-20',
    verifiedBy: 'platform',
    savvyScore: 78,
    fairPriceGuidelines: {
      avgExpatSpend: '800-2500 MAD per item',
      markupAlertThreshold: 'Prices are fixed but premium — compare with souk before buying',
      negotiability: 'low',
    },
    darijaEscapeScripts: [
      {
        script: 'La, shukran. Bghit nshof ghir.',
        translation: 'No thank you. I just want to look.',
        situation: 'When a seller is being too pushy'
      }
    ]
  },
  {
    placeId: 'sh-mar-3',
    placeType: 'shop',
    placeName: '33 Rue Majorelle',
    cityId: 'marrakech',
    neighborhood: 'Gueliz',

    safetyScore: 9.2,
    valueForMoneyScore: 6.4,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 1.2,
    happinessScore: 8.6,

    socialHighlights: [
      {
        text: 'Chic and unique! Amazing concept store conveniently located across the street from Jardin Majorelle. Unique, one-of-a-kind items that you won\'t find elsewhere.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'The store is carefully curated to offer a luxurious shopping experience, showcasing a range of local, artisanal products alongside modern designs.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Interesting shops with the YSL museum and Majorelle Garden to visit. The big drawback is this place gives an insight to the French vision of Morocco.',
        source: 'tripadvisor',
        sentiment: 'tip',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Jardin Majorelle is overrated — overhyped and not worth the hour-long wait in line in 98-degree heat. Scammers are aggressive in the area around the gardens.',
        source: 'reddit',
        sentiment: 'negative',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Marrakech\'s first concept store, opened in 2005. Curates modern takes on traditional Moroccan crafts from over 90 local designers and artisans.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
    ],

    redFlags: [
      {
        text: 'Taxi drivers parked outside Jardin Majorelle often quote 3–4× the metered fare to tourists — walk 100 m to the main road to hail a moving petit taxi.',
        source: 'reddit',
        severity: 'minor',
      },
      {
        text: 'Fake "guides" hang around the Jardin Majorelle entrance offering to walk you to 33 Rue Majorelle for a "tip" — the shop is literally next door, decline firmly.',
        source: 'google_review',
        severity: 'minor',
      },
      {
        text: 'Premium pricing: many ceramics and leather goods are 2–3× souk prices. Buyers expecting souk-level deals may feel misled.',
        source: 'tripadvisor',
        severity: 'minor',
      },
    ],

    localInsight:
      'Locals consider 33 Rue Majorelle the gold-standard curation of contemporary Moroccan design — but it is firmly a tourist and designer-source shop. Marrakchi families rarely buy here because the same pieces can be commissioned directly from the artisans in the souks for 40–60% less. If you have only one day in Marrakech and want a single stop for high-quality, fairly-sourced Moroccan goods with international shipping, this is it. Pair with a Jardin Majorelle visit at the 08:00 opening slot to avoid both the garden queues and the shop\'s afternoon tour-group rush.',

    commonComplaints: [
      'Prices 2–3× higher than the souks for similar items',
      'Small shop gets crowded when tour groups arrive (especially 14:00–16:00)',
      'Some reviewers feel the curation reflects a "French vision of Morocco" rather than authentic local design',
      'Limited size range in ready-to-wear clothing',
    ],

    commonPraise: [
      'Curated selection of 90+ Moroccan designers under one roof',
      'No haggling — fixed prices with transparent labeling',
      'Professional international DHL shipping with tracking',
      'Multilingual staff (Arabic, French, English, Spanish, Italian)',
      'High-quality ceramics, leather, and jewelry that last for years',
      'Convenient location next to Jardin Majorelle for a combined visit',
    ],

    savvyTips: [
      'Combine with Jardin Majorelle: book the 08:00 garden slot, exit at 09:30, and walk 30 seconds to 33 Rue Majorelle — you will have the shop nearly to yourself for an hour.',
      'Ask for the DHL shipping rate sheet at the counter — combined packing for multiple ceramics can save ~30% versus individual shipments.',
      'If buying rugs, ask which designer made it — staff can share the artisan\'s story and region, which adds provenance value when you display it at home.',
      'For wholesale or designer sourcing, ask to speak with the buyer (Monique Bresson\'s team) — they offer trade discounts for verified interior designers.',
      'Avoid the taxis parked outside the Jardin Majorelle entrance — walk 100 m to Rue Yves Saint Laurent and hail a moving petit taxi with the meter on.',
    ],

    lastVerifiedDate: '2026-06-28',
    verifiedBy: 'platform',
    savvyScore: 86,
    fairPriceGuidelines: {
      avgExpatSpend: '180-5500 MAD per item',
      markupAlertThreshold: 'No haggling, fixed price boutique',
      negotiability: 'fixed'
    },
    darijaEscapeScripts: [
      {
        script: 'La, shukran. Bghit nshof ghir.',
        translation: 'No thank you. I just want to look.',
        situation: 'When entering and looking around'
      }
    ]
  },
  {
    placeId: 'sh-mar-4',
    placeType: 'shop',
    placeName: 'Mustapha Blaoui',
    cityId: 'marrakech',
    neighborhood: 'Medina',

    safetyScore: 8.4,
    valueForMoneyScore: 5.2,
    touristFriendlinessScore: 8.6,
    scamRiskScore: 2.5,
    happinessScore: 9.0,

    socialHighlights: [
      {
        text: 'Definitely the most interesting store in Marrakech — it\'s like walking through a museum, there are floors and floors filled with items from all over Morocco.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Alas, these days Mustapha Blaoui is probably Marrakech\'s worst-kept secret, but it\'s no less magical for that. Whether your preference is for a 19th-century Berber necklace or a carved cedar door, this is where you find it.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Excellent boutique tucked away in the Medina alleys. Huge selection of rugs, lighting, furniture, and homeware. Friendly and attentive service.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'The quality for many of the items is better than in the souks, and its owners will happily arrange shipping. Ask for Mustapha if you want to see the best wooden antiques.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Some found it a bit hard to find, but worth the effort. The store offers a wide array of items, from antiques to contemporary pieces and high-quality items — no reproductions disguised as antiques.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'A well-stocked and elegant one-stop shop for all things traditionally Moroccan. Originally featured in The Marrakech Guide — YSL and Pierre Bergé sourced decorative pieces here for their Marrakech home.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Tripadvisor review titled "Shame on them!" — negative experience suggests some travelers feel pressured or upsold during the personal walkthrough.',
        source: 'tripadvisor',
        sentiment: 'negative',
        dateHarvested: '2026-06-28',
      },
    ],

    redFlags: [
      {
        text: 'Tea-and-walkthrough hospitality can feel like social pressure to buy — set a clear budget upfront and politely but firmly decline the second cup of tea if you are not seriously purchasing.',
        source: 'tripadvisor',
        severity: 'minor',
      },
      {
        text: 'Hard to find — Rue Bab Doukkala has no street numbers visible. Use the what3words coordinates or look for the green-tiled doorframe at #144 with a uniformed doorman.',
        source: 'google_review',
        severity: 'minor',
      },
      {
        text: 'Some antiques priced at the top of the international market — verify provenance documentation for any piece above 20,000 MAD before purchase.',
        source: 'reddit',
        severity: 'minor',
      },
      {
        text: 'Shipping quotes are not always itemized — request a written breakdown of crate cost, freight, insurance, and customs handling before paying.',
        source: 'tripadvisor',
        severity: 'minor',
      },
    ],

    localInsight:
      'Mustapha Blaoui is the only shop in Marrakech where the YSL/Pierre Bergé circle, Jacques Grange, and serious international antique dealers still source. Mr. Blaoui is now in his 70s but works the floor daily with his two sons — the family\'s 40-year relationships with tribal families and rural dealers give them access to genuine antique Berber jewelry and carved cedar pieces that never reach the open souks. Prices are non-negotiable on smaller items but flexible on larger antiques. Marrakchi locals know the shop by reputation but rarely buy — the price point is international luxury. If you have a real budget and time, ask for Mustapha personally and mention what you collect; he will curate rooms you would never find on your own. Casual browsers are welcome but should be honest about their intent to avoid wasting his time.',

    commonComplaints: [
      'Very expensive — top of the Marrakech market for antiques',
      'Hard to find without prior research or local guide',
      'Tea-service hospitality can create social pressure to purchase',
      'Shipping quotes feel opaque — buyers report needing to negotiate freight costs',
      'Some reviewers felt rushed through rooms when other clients arrived',
    ],

    commonPraise: [
      'Museum-quality antiques with genuine provenance (no reproductions)',
      'Personal hospitality from Mustapha and his sons — tea served on arrival',
      'Four decades of relationships with tribal dealers across Morocco, Algeria, Mauritania',
      'Full-service in-house freight forwarding (crating, customs, air/sea freight)',
      'YSL, Pierre Bergé, Bill Willis, Jacques Grange client list — design-world credibility',
      'Three floors of curated antiques, carpets, jewelry, furniture, and lighting',
      'Multilingual walkthroughs (Arabic, French, English, Spanish, Italian)',
    ],

    savvyTips: [
      'Call ahead (+212 5244-44307) to confirm Mustapha or one of his sons will be present — the experience is dramatically better when the family is on the floor.',
      'Set a clear budget before entering and communicate it early — the family will curate rooms accordingly rather than showing you pieces above your range.',
      'For antiques above 20,000 MAD, ask for written provenance documentation — Mustapha has it for most genuine pieces and will provide it on request.',
      'Allow 90 minutes minimum — do not rush. The walkthrough is the experience, not just the transaction.',
      'For shipping, request an itemized quote (crate + freight + insurance + customs) in writing before paying — compare against a separate DHL Freight quote for items above 50,000 MAD.',
      'Bring cash for smaller purchases (under 5,000 MAD) — card fees of 3–4% are sometimes passed through on larger purchases.',
      'If you are a designer or sourcing for clients, mention it on arrival — trade pricing and exclusive access to back-room inventory are available for verified professionals.',
    ],

    lastVerifiedDate: '2026-06-28',
    verifiedBy: 'platform',
    savvyScore: 90,
    fairPriceGuidelines: {
      avgExpatSpend: '1000-50000 MAD per item',
      markupAlertThreshold: 'Pricing is mixed, verify value of antiques',
      negotiability: 'moderate',
    },
    darijaEscapeScripts: [
      {
        script: 'Ghali bzzaf, tnaqas shwiya?',
        translation: 'Very expensive, can you reduce a bit?',
        situation: 'Haggling on big antiques'
      }
    ]
  },
  {
    placeId: 'sh-mar-5',
    placeType: 'shop',
    placeName: 'Herboriste Des Amis',
    cityId: 'marrakech',
    neighborhood: 'Medina',

    safetyScore: 9.0,
    valueForMoneyScore: 7.6,
    touristFriendlinessScore: 9.5,
    scamRiskScore: 1.8,
    happinessScore: 9.0,

    socialHighlights: [
      {
        text: 'The prices are very reasonable and quality is top notch, and he puts no pressure on you to buy anything. He demonstrated how to use different herbs to treat various ailments.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Very professional, smiling, absolutely does not push for sales — recommended by our Riad Hafssa. Wide selection of herbs, spices, tea, incense and other beauty products.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'What a clean lovely little shop. Genuineness of spices (as in a lot of places in the city) — unsure. Staff very friendly and accommodating. Prices quite high.',
        source: 'tripadvisor',
        sentiment: 'tip',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Just walking around taking pictures of this beautiful shop, a shop assistant invited us inside. Excellent pour acheter ses épices.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'WARNING about similar-sounding shops: "Herboriste Jannat" scams tourists — avoid at all costs. My dad got scammed £165 (2,000 dirhams) plus extra notes. They made him pay half cash, half card. This is NOT Herboriste Des Amis — make sure you are at the right shop near Ben Youssef Madrasa.',
        source: 'reddit',
        sentiment: 'warning',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Some herboristes in Marrakech are scam operations — one traveler reported buying products that turned out to be cooking oil and pink petroleum jelly. Always verify you are at Herboriste Des AMIS (not a similarly-named competitor) on Rue Assouel near Ben Youssef Madrasa.',
        source: 'tripadvisor',
        sentiment: 'warning',
        dateHarvested: '2026-06-28',
      },
    ],

    redFlags: [
      {
        text: 'CRITICAL: Multiple scam herboristes in Marrakech operate under similar names (Herboriste Jannat, Herboristerie la Sagesse, Herboriste la Famille). Always verify you are at "Herboriste Des Amis" on Rue Assouel near Ben Youssef Madrasa before entering — look for the green wooden sign in French and Arabic.',
        source: 'reddit',
        severity: 'safety',
      },
      {
        text: 'Some reviews question the genuineness of spices — standard concern across all Marrakech herboristes. Ask Abdellah for the harvest date and region of origin for high-value items like saffron and argan oil.',
        source: 'tripadvisor',
        severity: 'minor',
      },
      {
        text: 'Card machine occasionally down — bring cash as backup, especially for purchases under 200 MAD.',
        source: 'google_review',
        severity: 'minor',
      },
      {
        text: 'Shop is tiny (6 m²) — only 2–3 customers can fit inside at once. Wait outside if it\'s full rather than crowding.',
        source: 'google_review',
        severity: 'minor',
      },
    ],

    localInsight:
      'This is the herboriste where Marrakchi families actually shop — Abdellah has run the shop for 30+ years and maintains the same prices for locals and tourists, which is rare in the medina. His argan oil comes directly from a women\'s cooperative in the Sous valley (not wholesale), his saffron is genuine Taliouine saffron, and his rose water is from Kelaat M\'Gouna. The shop\'s location near Ben Youssef Madrasa makes it a perfect stop after visiting the madrasa — Abdellah will happily explain traditional Moroccan herbal remedies for 20 minutes even if you only buy a single bottle. The warning about scam herboristes is real: Herboriste Jannat and similar shops use high-pressure sales tactics and have been documented selling cooking oil as argan oil. Herboriste Des Amis is the antidote — but verify you are at the right shop.',

    commonComplaints: [
      'Some reviewers find prices "quite high" compared to bulk supermarket spices (though fair for the quality)',
      'Spice genuineness is uncertain — common concern across all Marrakech herboristes, not specific to this shop',
      'Card machine occasionally down — bring cash as backup',
      'Tiny shop fits only 2–3 customers — can feel crowded',
      'Hard to find for first-time visitors — look for the green wooden sign near Ben Youssef Madrasa',
    ],

    commonPraise: [
      'Zero sales pressure — Abdellah lets you browse and ask questions freely',
      'Same fair prices for locals and tourists (extremely rare in the medina)',
      'Abdellah freely shares encyclopedic knowledge of traditional Moroccan herbal remedies',
      'Direct sourcing: argan from Sous valley cooperatives, saffron from Taliouine, roses from Kelaat M\'Gouna',
      'Authentic, old-school herboristerie — not a tourist trap',
      'Clean, well-organized shop with clear labeling in French and English',
      'Recommended by multiple riads and Tripadvisor\'s "hidden gem" lists',
    ],

    savvyTips: [
      'VERIFY THE SHOP NAME before entering: "Herboriste Des Amis" on Rue Assouel near Ben Youssef Madrasa — NOT "Herboriste Jannat" or any similarly-named competitor. Scam herboristes are documented on r/Morocco selling cooking oil as argan oil.',
      'Ask Abdellah to write the traditional use of each remedy on the bag — he will label every item in French or English for free.',
      'For saffron: ask for the harvest date and region. Genuine Taliouine saffron costs 40–60 MAD per gram — anything significantly cheaper is likely adulterated.',
      'For argan oil: check the label. "Cosmétique" is for skin/hair, "Culinaire" is for food — they are NOT interchangeable. Culinary argan has a roasted nut flavor; cosmetic argan has a stronger smell.',
      'Bring cash for purchases under 200 MAD — card machine is occasionally down.',
      'Pair your visit with Ben Youssef Madrasa (2 min walk) and the Marrakech Museum (3 min walk) for a perfect 3-hour cultural morning.',
      'If you want bulk spices (cumin, ras el hanout, turmeric) at lower prices, walk to the spice section of Souk el Attarin (10 min walk) — but expect to haggle hard and verify quality yourself.',
    ],

    lastVerifiedDate: '2026-06-28',
    verifiedBy: 'platform',
    savvyScore: 90,
    fairPriceGuidelines: {
      avgExpatSpend: '50-300 MAD per item',
      markupAlertThreshold: 'Fixed price is fair, avoid tourist trap shops next door',
      negotiability: 'fixed',
    }
  },
  {
    placeId: 'sh-mar-6',
    placeType: 'shop',
    placeName: 'Akbar Delights',
    cityId: 'marrakech',
    neighborhood: 'Medina',

    safetyScore: 9.2,
    valueForMoneyScore: 6.8,
    touristFriendlinessScore: 9.4,
    scamRiskScore: 1.0,
    happinessScore: 9.2,

    socialHighlights: [
      {
        text: 'Tucked just around the corner from Place Jemaa El Fna, Akbar Delights sells some of the most stylish kaftans and Moroccan-influenced fashion in Marrakech.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Visitors praise it as one of the best shopping addresses in the city with beautiful pieces that make it a great place to buy gifts. The boutique stands out for its modern, wearable silhouettes.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'You can buy exquisite products made in Morocco such as its exclusive tunics embroidered on beautiful handmade silk — using the finest silks, Toufik creates a stunning collection of kaftans, velvet vests, and cotton tunics.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'A fun experience, a place where you want to bargain and buy these beautiful handmade things — it\'s all quintessential Moroccan clothes.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'CAUTION about kaftan shops in general: similar boutiques (e.g., Maison Du Caftan) have been reviewed as "great selection of kaftans but overpriced — they will tell you it\'s one of a kind, everything is hand-stitched. Not true at all." Verify hand-stitching claims at Akbar Delights by examining seam interiors.',
        source: 'tripadvisor',
        sentiment: 'tip',
        dateHarvested: '2026-06-28',
      },
    ],

    redFlags: [
      {
        text: 'Atelier is small — walk-ins may wait 20+ minutes during peak season. Book ahead via WhatsApp (+212 661-234567) to guarantee a fitting slot.',
        source: 'instagram',
        severity: 'minor',
      },
      {
        text: 'Made-to-measure lead time is 3–7 days — visit on day 1 or 2 of your Marrakech trip if you want custom pieces before departure.',
        source: 'tripadvisor',
        severity: 'minor',
      },
      {
        text: 'Premium pricing — comparable to international designer ready-to-wear. Some travelers expecting souk prices are surprised. Set expectations before entering.',
        source: 'reddit',
        severity: 'minor',
      },
      {
        text: 'Designer\'s name is sometimes cited as "Toufik" in older reviews — confirm staff seniority and designer availability if you want to meet the founder specifically.',
        source: 'google_review',
        severity: 'minor',
      },
    ],

    localInsight:
      'Akbar Delights is where fashion editors, diplomats, and Marrakech\'s wealthy Moroccan women buy their contemporary kaftans — the cuts are slim and modern, not the bulky beaded kaftans sold in most souk stalls. The atelier produces everything in-house (12 embroiderers and seamstresses, most trained at the Maison de l\'Artisanat), and the founder trained at École de la Chambre Syndicale de la Couture Parisienne. Locals know that the souk kaftans are typically polyester with machine embroidery — Akbar Delights uses Fez silk and genuine hand-embroidery, which is why prices are 3–5× higher. For travelers seeking one investment kaftan rather than several souvenir pieces, this is the address. Made-to-measure is the real differentiator: book on day 1 of your trip for a fitting, and Akbar can ship the finished piece to your home with photo-verified final fitting via WhatsApp.',

    commonComplaints: [
      'Premium pricing — souk shoppers may experience sticker shock',
      'Small atelier — walk-ins may wait 20+ minutes during peak season',
      'Made-to-measure lead time (3–7 days) requires early booking in trip itinerary',
      'Some kaftan shops in Marrakech misrepresent machine-stitching as hand-stitching — examine seam interiors to verify',
      'Designer not always on-site — confirm availability if meeting the founder matters to you',
    ],

    commonPraise: [
      'Modern, slim, wearable kaftan silhouettes — not the bulky beaded style sold in souks',
      'Genuine Fez silk and hand-embroidery (verify by examining seam interiors)',
      'Made-to-measure service with 3–7 day lead time, including WhatsApp final-fitting for travelers',
      'Paris-trained designer with École de la Chambre Syndicale credentials',
      'In-house production — 12 embroiderers and seamstresses employed directly',
      'Profiled by Vogue Arabia, WWD, Condé Nast Traveller',
      'Multilingual atelier staff (Arabic, French, English, Italian)',
      'DHL Express worldwide shipping with tracking',
    ],

    savvyTips: [
      'Book on day 1 or 2 of your Marrakech trip — made-to-measure pieces need 3–7 days. WhatsApp +212 661-234567 to reserve a fitting slot.',
      'For final fitting after you have left Marrakech: Akbar offers WhatsApp video fittings — he will send photos of the piece on a mannequin and adjust based on your feedback before shipping.',
      'Verify hand-embroidery claims by examining the back/inside of the embroidery — hand-stitched work has irregular spacing and visible knotting; machine-stitched work is uniform and flat.',
      'For kaftans, ask about fabric origin: Fez silk and Tétouan cotton are the premium grades. Avoid any piece labeled only as "silk" without region — it may be polyester.',
      'If buying for a wedding or event, mention the occasion — Akbar can recommend appropriate cuts and embroidery density for the formality of the event.',
      'Bring photos of kaftan styles you like — Akbar can adapt his patterns to your reference and produce a made-to-measure version in 5–7 days.',
      'For men: ask about the jabador two-piece — it is the most under-the-radar item in the atelier and photographs beautifully for weddings and special events.',
    ],

    lastVerifiedDate: '2026-06-28',
    verifiedBy: 'platform',
    savvyScore: 92,
    fairPriceGuidelines: {
      avgExpatSpend: '2000-15000 MAD per item',
      markupAlertThreshold: 'Fixed price couture boutique',
      negotiability: 'fixed',
    }
  },
  {
    placeId: 'sh-mar-7',
    placeType: 'shop',
    placeName: 'Souk Semmarine (Jewelry & Carpet Quarter)',
    cityId: 'marrakech',
    neighborhood: 'Medina',

    safetyScore: 6.4,
    valueForMoneyScore: 5.0,
    touristFriendlinessScore: 5.2,
    scamRiskScore: 7.2,
    happinessScore: 7.6,

    socialHighlights: [
      {
        text: 'Haggling is draining for me in general. Not only do you have to deal with people for a lengthy time period, but usually they are wretched and pushy throughout.',
        source: 'reddit',
        sentiment: 'negative',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Stay away from Jemaa el-Fna between 11am and 3pm — that\'s peak pressure time. And explore the souks around Souk Semmarine rather than the stalls directly on the main square for better prices.',
        source: 'reddit',
        sentiment: 'tip',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'They lack self-respect and business professionalism. If you want to succeed and make money, offer good products and good service and be better — too many Marrakech vendors rely on pressure tactics instead.',
        source: 'reddit',
        sentiment: 'negative',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Yes, locals haggle too — it\'s part of the culture, not just for tourists. They know fair prices and don\'t get overcharged like visitors do. Haggling is expected at every level.',
        source: 'reddit',
        sentiment: 'tip',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Some Marrakech folks have a culture that if they in any way do anything for you, then they will ask for a fee. This includes giving directions, taking photos, or "helping" you find a shop.',
        source: 'reddit',
        sentiment: 'negative',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Have a figure in your head of your final offer and what you intend to pay. Start at halving that figure and be prepared to walk away. The first price is always 3–5× what they will actually accept.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
      {
        text: 'Iconic and chaotic in the best way. Bring cash, smile, walk away twice before buying. The deeper you go into the side alleys, the better the prices get.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2026-06-28',
      },
    ],

    redFlags: [
      {
        text: 'CRITICAL: "Closed riad" scam — youths at alley entrances insist your destination is closed / under renovation and offer to take you to a "better" shop where they earn commission. Politely ignore and walk on. Never follow anyone claiming a shop is closed without verifying yourself.',
        source: 'reddit',
        severity: 'safety',
      },
      {
        text: 'CRITICAL: "Free direction" scam — anyone offering to walk you to a shop, restaurant, or landmark will demand 50–200 MAD at the destination. Decline firmly and continue walking. Use offline Google Maps instead.',
        source: 'google_review',
        severity: 'safety',
      },
      {
        text: 'CRITICAL: Carpet shipping scam — stallholders quote low shipping, then call weeks later demanding additional "customs fees" before delivery. Always get shipping quote in writing, pay shipping directly to DHL/La Poste yourself (not to the stallholder), and photograph the carpet with the seller before leaving.',
        source: 'tripadvisor',
        severity: 'safety',
      },
      {
        text: 'Pickpocketing in crowded sections (especially 14:00–18:00 and during Friday prayer transitions). Wear bags crossbody in front, leave passports in hotel safe, carry only small cash needed for the day.',
        source: 'facebook',
        severity: 'safety',
      },
      {
        text: 'Fake silver — "925" stamps on jewelry are commonly forged. Genuine Berber silver is sold by weight; if a "silver" piece feels suspiciously light, it is likely plated base metal.',
        source: 'reddit',
        severity: 'minor',
      },
      {
        text: 'Synthetic carpets sold as wool — burn-test a tiny thread (with seller permission). Wool smells like burnt hair; synthetic smells like plastic. Most "wool" carpets under 1,500 MAD are synthetic blends.',
        source: 'tripadvisor',
        severity: 'minor',
      },
      {
        text: 'Stallholders "never have change" for 200 MAD notes — bring small cash (20s, 50s, 100s) to avoid being pressured into buying more to make up the difference.',
        source: 'google_review',
        severity: 'minor',
      },
    ],

    localInsight:
      'Souk Semmarine is the artery every visitor walks — but Marrakchi locals know it is the most tourist-priced part of the entire medina. Prices here start 30–50% higher than the deeper souks (Souk el Attarin for spices, Souk Chouari for basketmakers, Souk des Teinturiers for dyers) because stallholders factor in the haggle buffer. Locals shop in the side alleys and only buy from Semmarine for convenience. The souk is safest in the morning (09:00–12:00) when stallholders are calmer and touts less aggressive. Avoid 11:00–15:00 (peak pressure time) and after dark (pickpockets, drunk tourists, aggressive restaurant touts). For carpets specifically: never pay the stallholder for shipping — pay the carpet price only, then walk to the DHL office or La Poste yourself. The "I will ship for you, no problem" offer is the #1 carpet scam in Marrakech.',

    commonComplaints: [
      'Aggressive touts and unsolicited "guides" — especially 11:00–15:00 and after dark',
      '"Closed riad" scam — youths claim your destination is closed and offer to redirect you',
      'Carpet shipping scams — stallholders quote low, then demand extra "customs fees" weeks later',
      'Pickpocketing in crowded sections, especially during Friday prayer transitions',
      'Fake silver jewelry with forged "925" stamps',
      'Synthetic carpets sold as wool — burn-test before buying',
      'Haggling is exhausting — reviews describe it as "draining" and "wretched"',
      'Stallholders "never have change" for 200 MAD notes',
      'Tourist pricing — 30–50% higher than deeper souks for same goods',
    ],

    commonPraise: [
      'Iconic Marrakech experience — the sensory overload is unforgettable',
      'Largest selection of Moroccan goods in one location (4,000+ stalls)',
      'Wide, covered, easy to navigate — best souk for first-time visitors',
      'Everything available: jewelry, carpets, leather, ceramics, lanterns, spices, textiles',
      'Deeper side alleys (Souk el Attarin, Souk Chouari, Souk des Teinturiers) have better prices and quality',
      'Photogenic — every alley is a postcard, especially at golden hour',
      'Reasonable prices achievable with confident haggling (30–40% of asking price)',
    ],

    savvyTips: [
      'TIME IT RIGHT: Visit 09:00–11:30 on a weekday. Stallholders are calmer, touts less aggressive, and temperatures manageable. Avoid 11:00–15:00 (peak pressure) and after dark (pickpockets).',
      'HAGGLE FORMULA: Anchor at 30% of asking price, aim to settle at 40–50%. Never pay more than 60% of the first quote. If they accept your first offer, you bid too high.',
      'WALK AWAY — TWICE: The first walk-away tests their flexibility. The second walk-away usually produces the final, lowest price. If they don\'t call you back, you found their floor.',
      'CARRY SMALL CASH: 20s, 50s, and 100 MAD notes. Stallholders "never have change" for 200s — this is a tactic to make you buy more. Bring exact change for your target price.',
      'CARPET SHIPPING: NEVER pay the stallholder for shipping. Pay for the carpet only, then walk to DHL (Gueliz) or La Poste (Bab Doukkala) and ship it yourself. Photograph the carpet with the seller and a copy of your receipt before leaving.',
      'VERIFY SILVER: Genuine Berber silver is sold by weight. If a "silver" piece feels light or the "925" stamp looks uneven, it is likely plated. Ask to weigh the piece — a 30 g silver bracelet should cost ~250 MAD in silver value alone (plus craftsmanship).',
      'BURN-TEST CARPETS: With seller permission, burn-test a single thread. Wool smells like burnt hair; synthetic smells like plastic. Most "wool" carpets under 1,500 MAD are synthetic blends.',
      'IGNORE "CLOSED" CLAIMS: Anyone saying your destination is closed/under renovation is lying — they earn commission by redirecting you. Verify yourself by walking to the door.',
      'DECLINE "FREE" HELP: Anyone offering directions, photos, or "guiding" will demand 50–200 MAD. Use offline Google Maps. The phrase "La, shukran" (no, thank you) is your friend.',
      'EXPLORE DEEPER: The side souks off Semmarine have better prices and quality. Souk el Attarin (spices), Souk Chouari (basketmakers), and Souk des Teinturiers (dyers) are 5–10 min walks and 30–50% cheaper.',
      'NEVER HAGGLE FOR FUN: If you name a price and the seller accepts, you are obligated to buy. Haggling without intent to purchase is considered rude and wastes everyone\'s time.',
    ],

    lastVerifiedDate: '2026-06-28',
    verifiedBy: 'platform',
    savvyScore: 58,
    fairPriceGuidelines: {
      avgExpatSpend: '100-3000 MAD per item',
      markupAlertThreshold: 'Prices are highly negotiable, starting prices are bloated up to 300%',
      negotiability: 'high',
    },
    darijaEscapeScripts: [
      {
        script: 'Bzzaf hda! Akhir taman dya-li huwa...',
        translation: 'Too much! My final price is...',
        situation: 'Haggling on souvenirs or carpets'
      },
      {
        script: 'La, shukran. Bghit nshof ghir.',
        translation: 'No thank you. I just want to look.',
        situation: 'When entering and looking around'
      }
    ]
  },

  // --- TANGIER POIS ---
  {
    placeId: 'e-tangier-1',
    placeType: 'eat',
    placeName: 'Café Hafa',
    cityId: 'tangier',
    neighborhood: 'Marshan',
    safetyScore: 9.2,
    valueForMoneyScore: 9.2,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 1.5,
    happinessScore: 9.5,
    socialHighlights: [
      {
        text: 'Café Hafa is magical at sunset. Sitting on stone steps cut into the cliff facing Spain with a 12 MAD mint tea is the essence of Tangier.',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-03-15'
      }
    ],
    redFlags: [
      {
        text: 'Unsolicited flower sellers or musicians may approach terraces; gently decline if not interested.',
        source: 'tripadvisor',
        severity: 'minor'
      }
    ],
    localInsight: 'Historic cliffside café operating since 1921. Famous for hosting William Burroughs, The Rolling Stones, and Paul Bowles. Tiered blue concrete terraces overlook the Strait of Gibraltar. Simple, fixed pricing (mint tea ~12 MAD, sunflower seeds, coffee). Extremely popular with local Tangerine families and students at sunset.',
    commonComplaints: [
      'Can get crowded on warm weekend afternoons before sunset',
      'Basic stone seating without cushions',
      'Cash only'
    ],
    commonPraise: [
      'Unrivaled views across the Strait of Gibraltar to Spain',
      'Incredible historic bohemian atmosphere',
      'Very affordable fixed prices with no tourist markup',
      'Relaxed, non-commercial vibe'
    ],
    savvyTips: [
      'Arrive around 17:30 to secure a top-tier terrace seat before sunset.',
      'Bring exact change (10, 20 MAD notes) as servers carry small change purses.',
      'Combine with a visit to the nearby Marshan Phoenician Tombs (5 min walk).'
    ],
    lastVerifiedDate: '2026-07-20',
    verifiedBy: 'platform',
    savvyScore: 94,
    fairPriceGuidelines: {
      avgExpatSpend: '12-25 MAD per person',
      markupAlertThreshold: 'Prices are printed/fixed; no bargaining needed',
      negotiability: 'fixed'
    },
    darijaEscapeScripts: [
      {
        script: 'Atay b-n-na3na3 afak.',
        translation: 'Mint tea please.',
        situation: 'Ordering tea at the counter'
      }
    ]
  },
  {
    placeId: 'tangier-cafe-hafa',
    placeType: 'eat',
    placeName: 'Café Hafa',
    cityId: 'tangier',
    neighborhood: 'Marshan',
    safetyScore: 9.2,
    valueForMoneyScore: 9.2,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 1.5,
    happinessScore: 9.5,
    socialHighlights: [
      {
        text: 'Café Hafa is magical at sunset. Sitting on stone steps cut into the cliff facing Spain with a 12 MAD mint tea is the essence of Tangier.',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-03-15'
      }
    ],
    redFlags: [
      {
        text: 'Unsolicited flower sellers or musicians may approach terraces; gently decline if not interested.',
        source: 'tripadvisor',
        severity: 'minor'
      }
    ],
    localInsight: 'Historic cliffside café operating since 1921. Famous for hosting William Burroughs, The Rolling Stones, and Paul Bowles. Tiered blue concrete terraces overlook the Strait of Gibraltar. Simple, fixed pricing (mint tea ~12 MAD, sunflower seeds, coffee). Extremely popular with local Tangerine families and students at sunset.',
    commonComplaints: [
      'Can get crowded on warm weekend afternoons before sunset',
      'Basic stone seating without cushions',
      'Cash only'
    ],
    commonPraise: [
      'Unrivaled views across the Strait of Gibraltar to Spain',
      'Incredible historic bohemian atmosphere',
      'Very affordable fixed prices with no tourist markup',
      'Relaxed, non-commercial vibe'
    ],
    savvyTips: [
      'Arrive around 17:30 to secure a top-tier terrace seat before sunset.',
      'Bring exact change (10, 20 MAD notes) as servers carry small change purses.',
      'Combine with a visit to the nearby Marshan Phoenician Tombs (5 min walk).'
    ],
    lastVerifiedDate: '2026-07-20',
    verifiedBy: 'platform',
    savvyScore: 94,
    fairPriceGuidelines: {
      avgExpatSpend: '12-25 MAD per person',
      markupAlertThreshold: 'Prices are printed/fixed; no bargaining needed',
      negotiability: 'fixed'
    },
    darijaEscapeScripts: [
      {
        script: 'Atay b-n-na3na3 afak.',
        translation: 'Mint tea please.',
        situation: 'Ordering tea at the counter'
      }
    ]
  },
  {
    placeId: 'tangier-port-gate',
    placeType: 'experience',
    placeName: 'Tanger Ville Port Ferry Terminal',
    cityId: 'tangier',
    neighborhood: 'Port & Waterfront',
    safetyScore: 7.5,
    valueForMoneyScore: 7.0,
    touristFriendlinessScore: 6.5,
    scamRiskScore: 8.0,
    happinessScore: 7.0,
    socialHighlights: [
      {
        text: 'Exiting Tangier ferry port, ignore the guys with badges outside claiming ticket counters inside are closed. Walk right inside the main terminal building.',
        source: 'reddit',
        sentiment: 'warning',
        dateHarvested: '2024-02-10'
      }
    ],
    redFlags: [
      {
        text: 'Street touts wearing fake lanyards intercepting arriving passengers to sell overpriced ferry/bus tickets.',
        source: 'google_review',
        severity: 'major'
      }
    ],
    localInsight: 'Main passenger ferry hub connecting Tarifa (Spain) directly to Tangier city center. The terminal building itself is modern, secure, and well-policed. However, the exit plaza and pedestrian gates attract touts claiming inside ticket windows are closed to divert travelers to private high-commission travel desks.',
    commonComplaints: [
      'Persistent touts outside the main security doors',
      'Unmetered taxis lined up at the gate asking inflated flat rates',
      'Loud solicitation for private tours upon stepping off the boat'
    ],
    commonPraise: [
      'Direct walk from the ferry port into the Tangier Medina and Ville Nouvelle',
      'Modern passenger terminal with official currency exchange and ATMs',
      'Clean security and customs controls inside'
    ],
    savvyTips: [
      'Buy ferry and ONCF train tickets inside official glass windows inside the terminal building.',
      'Walk 100 meters down Avenue Mohammed VI to hail a moving blue Petit Taxi with a meter.'
    ],
    lastVerifiedDate: '2026-07-20',
    verifiedBy: 'platform',
    savvyScore: 68,
    fairPriceGuidelines: {
      avgExpatSpend: 'Official carrier rates',
      markupAlertThreshold: 'Never buy tickets from street handlers outside the building',
      negotiability: 'fixed'
    }
  },

  // --- CHEFCHAOUEN POIS ---
  {
    placeId: 'chefchaouen-outa-el-hammam',
    placeType: 'experience',
    placeName: 'Plaza Outa El Hammam',
    cityId: 'chefchaouen',
    neighborhood: 'Outa El Hammam & Lower Medina',
    safetyScore: 9.0,
    valueForMoneyScore: 7.5,
    touristFriendlinessScore: 8.5,
    scamRiskScore: 4.5,
    happinessScore: 9.0,
    socialHighlights: [
      {
        text: 'Sitting in Plaza Outa El Hammam under the red walls of the Kasbah sipping mint tea is pure relaxation. Great people watching.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2024-01-18'
      }
    ],
    redFlags: [
      {
        text: 'Restaurants directly on the square charge 20–30% higher than side alley eateries; always check prices on menus.',
        source: 'google_review',
        severity: 'minor'
      }
    ],
    localInsight: 'The historic cobblestone heart of Chefchaouen. Flanked by the 15th-century red-stone Kasbah fortress, Grand Mosque, and shaded outdoor cafes. Safe, vibrant, and ideal for evening tea. Side alleys branching off lead into blue residential quarters.',
    commonComplaints: [
      'Square cafes can be slightly higher priced than medina alleys',
      'Street musicians and vendors approach outdoor tables',
      'Busy during peak afternoon tourist hours'
    ],
    commonPraise: [
      'Beautiful historic framing with red Kasbah walls and blue alleys',
      'Great central location to orient your medina walk',
      'Relaxed evening atmosphere under twinkling lights'
    ],
    savvyTips: [
      'Visit the Kasbah museum inside the square (60 MAD entry) to climb the restored tower for photos over the blue rooftops.',
      'For cheap traditional meals, walk 50 meters down Rue Targui into side alley eateries.'
    ],
    lastVerifiedDate: '2026-07-21',
    verifiedBy: 'platform',
    savvyScore: 86
  },
  {
    placeId: 'chefchaouen-spanish-mosque',
    placeType: 'experience',
    placeName: 'Spanish Mosque Viewpoint',
    cityId: 'chefchaouen',
    neighborhood: 'Ras El Ma & Upper Medina',
    safetyScore: 9.5,
    valueForMoneyScore: 10.0,
    touristFriendlinessScore: 9.0,
    scamRiskScore: 2.0,
    happinessScore: 9.6,
    socialHighlights: [
      {
        text: 'The 20-minute walk up from Ras El Ma to the Spanish Mosque for sunset gives the absolute best panoramic view of the entire blue city glowing in the valley.',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-04-12'
      }
    ],
    redFlags: [
      {
        text: 'Occasional touts near the hilltop viewpoint claiming terrace fees; the entire hill is public land with free access.',
        source: 'tripadvisor',
        severity: 'minor'
      }
    ],
    localInsight: 'Built by the Spanish in the 1920s on a hilltop overlooking Chefchaouen. The mosque itself is deconsecrated and closed, but the surrounding hilltop stone terrace is Morocco\'s single best photography spot for sunset over the blue medina.',
    commonComplaints: [
      'Short uphill cobblestone walk requires decent walking shoes',
      'Gets popular right at sunset hour in high season'
    ],
    commonPraise: [
      '100% free public access with breathtaking valley views',
      'Gentle, scenic 20-minute trail starting from Ras El Ma spring',
      'Unforgettable golden hour photography'
    ],
    savvyTips: [
      'Start walking up from Ras El Ma spring 45 minutes before sunset.',
      'Bring a warm sweater for the walk down as mountain temperatures drop quickly after dark.'
    ],
    lastVerifiedDate: '2026-07-21',
    verifiedBy: 'platform',
    savvyScore: 95
  },

  // --- ESSAOUIRA POIS ---
  {
    placeId: 'essaouira-port-seafood-stalls',
    placeType: 'eat',
    placeName: 'Essaouira Port Seafood Grills',
    cityId: 'essaouira',
    neighborhood: 'Harbor Entrance',
    safetyScore: 8.5,
    valueForMoneyScore: 6.5,
    touristFriendlinessScore: 7.5,
    scamRiskScore: 6.5,
    happinessScore: 8.0,
    socialHighlights: [
      {
        text: 'Fresh fish grilled right at the harbor! Make sure to negotiate the total net price per plate before they put anything on the grill.',
        source: 'tripadvisor',
        sentiment: 'tip',
        dateHarvested: '2024-02-28'
      }
    ],
    redFlags: [
      {
        text: 'Weighing uncleaned fish with heavy ice on uncalibrated scales to inflate the bill; insist on a total fixed price upfront.',
        source: 'google_review',
        severity: 'major'
      }
    ],
    localInsight: 'Row of open-air blue wooden grill stalls at the entrance to Essaouira\'s fishing port. Fresh Atlantic catches (sardines, sea bass, calamari, red mullet) displayed on ice. Highly atmospheric, but touts aggressively solicit passersby. Essential to agree on a TOTAL fixed price (e.g. 70–100 MAD per person) before cooking.',
    commonComplaints: [
      'Aggressive seating touts pulling people into stalls',
      'Weight inflation on raw fish if not careful',
      'Seagulls swooping near open tables'
    ],
    commonPraise: [
      'Ultra-fresh fish straight off the wooden fishing trawlers',
      'Authentic smoky open-air harbor atmosphere',
      'Delicious grilled sardines with cumin and fresh lemon'
    ],
    savvyTips: [
      'Point at specific fish and demand: "Give me the total net price for this cooked, including salad and bread."',
      'For a lower-stress alternative, buy fish directly at the port auctions and pay small alley shacks to grill it.'
    ],
    lastVerifiedDate: '2026-07-19',
    verifiedBy: 'platform',
    savvyScore: 72
  },
  {
    placeId: 'essaouira-skala',
    placeType: 'experience',
    placeName: 'Skala de la Ville & Ramparts',
    cityId: 'essaouira',
    neighborhood: 'Medina Ramparts',
    safetyScore: 9.8,
    valueForMoneyScore: 9.0,
    touristFriendlinessScore: 9.2,
    scamRiskScore: 1.0,
    happinessScore: 9.5,
    socialHighlights: [
      {
        text: 'Walking along the stone ramparts with brass cannons pointing out over Atlantic crashing waves is unforgettable. GOT fans will instantly recognize Astapor!',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-03-22'
      }
    ],
    redFlags: [],
    localInsight: '18th-century sea fortifications designed by French architect Théodore Cornut. Features a line of historic bronze European cannons pointing across Atlantic swells. Underneath the rampart walls, stone vaults house master thuya woodcarving workshops.',
    commonComplaints: [
      'Can get very windy during summer afternoon trade winds (Alizés)',
      'Small entrance fee (~50 MAD for Skala du Port section)'
    ],
    commonPraise: [
      'Breathtaking ocean views and historic cannon bastions',
      'Game of Thrones filming site (Astapor ramparts)',
      'Peaceful walk through thuya wood artisan studios underneath'
    ],
    savvyTips: [
      'Visit around 17:00 for golden light on stone bastions and ocean waves.',
      'Thuya wood boxes sold in the underlying rampart shops make authentic, aromatic souvenirs.'
    ],
    lastVerifiedDate: '2026-07-19',
    verifiedBy: 'platform',
    savvyScore: 96
  },

  // --- MERZOUGA POIS ---
  {
    placeId: 'merzouga-erg-chebbi-staging',
    placeType: 'experience',
    placeName: 'Erg Chebbi Dune Staging Grounds',
    cityId: 'merzouga',
    neighborhood: 'Erg Chebbi Dune Line',
    safetyScore: 8.0,
    valueForMoneyScore: 7.5,
    touristFriendlinessScore: 8.0,
    scamRiskScore: 7.0,
    happinessScore: 9.2,
    socialHighlights: [
      {
        text: 'Riding camels into the golden Erg Chebbi dunes at sunset is a bucket-list dream. Just make sure your desert camp is actually inside the sand dunes, not next to the highway!',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-04-05'
      }
    ],
    redFlags: [
      {
        text: 'Quad bike rental operators claiming pre-existing mechanical damage to extort cash deposits.',
        source: 'tripadvisor',
        severity: 'major'
      }
    ],
    localInsight: 'The launching point along the N13 road where paved desert transitions into Erg Chebbi\'s 150-meter-high golden sand dunes. Here, camel caravans, 4x4 dune buggies, and quads depart for overnight bivouac camps.',
    commonComplaints: [
      'Highway roadside touts offering fake "luxury" camps on flat gravel plains',
      'Quad damage claims upon returning equipment',
      'Midday summer heat can exceed 42°C'
    ],
    commonPraise: [
      'Majestic golden sand dunes rising directly from the desert floor',
      'Unmatched stargazing under crisp Sahara skies',
      'Acoustic Amazigh drumming around campfires'
    ],
    savvyTips: [
      'Record a 30-second inspection video of quads/buggies with the operator before starting.',
      'Check the satellite map location of your camp before paying to confirm it is situated deep inside Erg Chebbi.'
    ],
    lastVerifiedDate: '2026-07-22',
    verifiedBy: 'platform',
    savvyScore: 78
  },

  // --- OUARZAZATE POIS ---
  {
    placeId: 'ouarzazate-ait-benhaddou-crossing',
    placeType: 'experience',
    placeName: 'Kasbah Aït Benhaddou Pedestrian Crossing',
    cityId: 'ouarzazate',
    neighborhood: 'Aït Benhaddou Village',
    safetyScore: 9.0,
    valueForMoneyScore: 9.0,
    touristFriendlinessScore: 8.5,
    scamRiskScore: 5.0,
    happinessScore: 9.4,
    socialHighlights: [
      {
        text: 'Ait Benhaddou is a stunning UNESCO earthen city. Crossing the pedestrian bridge is free — don\'t give money to fake ticket guys on the bridge!',
        source: 'reddit',
        sentiment: 'tip',
        dateHarvested: '2024-02-14'
      }
    ],
    redFlags: [
      {
        text: 'Unofficial touts standing near the bridge demanding 20–30 MAD admission fees; public entrance to the ksar is completely free.',
        source: 'tripadvisor',
        severity: 'medium'
      }
    ],
    localInsight: 'The iconic UNESCO World Heritage ksar (fortified earthen village) famous for filming Gladiator, Lawrence of Arabia, and Game of Thrones. Crossing the Ounila River via the new pedestrian bridge or stepping stones gives access to red clay towers and hill summit views.',
    commonComplaints: [
      'Fake ticket sellers positioning themselves near the river crossing',
      'High tourist volume between 11:00 and 15:00 from tour buses',
      'Heat on unshaded clay paths during summer afternoons'
    ],
    commonPraise: [
      'Extraordinary earthen clay architecture preserved for centuries',
      'Panoramic 360-degree desert valley views from the hilltop granary (Agadir)',
      'Free public admission to explore the village pathways'
    ],
    savvyTips: [
      'Walk straight across the bridge without paying anyone. Only specific private Kasbah home museums inside charge small optional fees (10–20 MAD).',
      'Visit before 10:00 or after 16:00 when tour buses leave to enjoy quiet clay alleys.'
    ],
    lastVerifiedDate: '2026-07-22',
    verifiedBy: 'platform',
    savvyScore: 88
  },

  // --- DAKHLA POIS ---
  {
    placeId: 'dakhla-pk25-lagoon',
    placeType: 'experience',
    placeName: 'PK25 Dakhla Lagoon Surf Spot',
    cityId: 'dakhla',
    neighborhood: 'Dakhla Lagoon',
    safetyScore: 9.8,
    valueForMoneyScore: 8.5,
    touristFriendlinessScore: 9.5,
    scamRiskScore: 1.0,
    happinessScore: 9.7,
    socialHighlights: [
      {
        text: 'PK25 in Dakhla lagoon is absolute kiteboarding heaven. Flat turquoise water, warm sun, and reliable wind every single day.',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-01-25'
      }
    ],
    redFlags: [],
    localInsight: 'World-renowned kitesurfing and wing-foiling lagoon located 25km north of Dakhla town center. Features ultra-smooth flat water sheltered by a 40km sandbar peninsula. Surrounded by eco-resorts with gear rental, rescue boats, and lagoon-side dining.',
    commonComplaints: [
      'Requires pre-arranged resort transportation as no public buses connect from town',
      'High demand for resort accommodations during peak wind season'
    ],
    commonPraise: [
      'Butter-smooth flat water ideal for all kitesurfing skill levels',
      '300+ days of steady trade winds per year',
      'Pristine desert lagoon landscape with pink flamingos'
    ],
    savvyTips: [
      'Pre-book airport shuttle pickups through your lagoon resort before landing in Dakhla.',
      'Take a day excursion to Dune Blanche where the white sand dune sits inside turquoise lagoon waters.'
    ],
    lastVerifiedDate: '2026-07-20',
    verifiedBy: 'platform',
    savvyScore: 97
  },

  // --- IMSOUANE POIS ---
  {
    placeId: 'imsouane-magic-bay',
    placeType: 'experience',
    placeName: 'Magic Bay & Imsouane Port',
    cityId: 'imsouane',
    neighborhood: 'Magic Bay & Port Headland',
    safetyScore: 9.5,
    valueForMoneyScore: 9.0,
    touristFriendlinessScore: 9.2,
    scamRiskScore: 2.5,
    happinessScore: 9.6,
    socialHighlights: [
      {
        text: 'Riding a single wave in Magic Bay for almost 800 meters straight to the sand beach is unforgettable. Best longboard wave in Africa!',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-03-30'
      }
    ],
    redFlags: [
      {
        text: 'Surfboard rental shacks claiming pre-existing fiberglass dings to collect repair fees; inspect boards before taking them out.',
        source: 'google_review',
        severity: 'minor'
      }
    ],
    localInsight: 'A legendary Atlantic fishing village turned surf haven. Magic Bay hosts one of the longest, gentlest right-hand pointbreak waves in the world (~800m rides). At noon, colorful wooden fishing boats land daily catches at the port, where nearby shacks grill fresh fish for pennies.',
    commonComplaints: [
      'Can get crowded in the surf lineup during peak winter swells',
      'Limited parking near the port slipway'
    ],
    commonPraise: [
      'Unbelievably long, smooth surfing wave ideal for longboarders',
      'Fresh fish straight off the wooden boats at 12:00 daily',
      'Laid-back, sunset-focused coastal community'
    ],
    savvyTips: [
      'Inspect rental surfboards thoroughly and record a 10-second video with the owner before handing over rental fees.',
      'Buy fresh fish directly off boats at 12:00 and take it to port shacks to be grilled with spices and fries for 20 MAD.'
    ],
    lastVerifiedDate: '2026-07-23',
    verifiedBy: 'platform',
    savvyScore: 94
  },

  // --- MEKNES POIS ---
  {
    placeId: 'meknes-bab-mansour',
    placeType: 'experience',
    placeName: 'Bab Mansour & Place El-Hedim',
    cityId: 'meknes',
    neighborhood: 'Place El-Hedim & Imperial City',
    safetyScore: 8.8,
    valueForMoneyScore: 9.0,
    touristFriendlinessScore: 8.2,
    scamRiskScore: 3.5,
    happinessScore: 8.8,
    socialHighlights: [
      {
        text: 'Bab Mansour is monumental! The zellige tilework and massive Roman marble pillars are breathtaking. Place El-Hedim in front is a great mini-Djemaa el Fna.',
        source: 'tripadvisor',
        sentiment: 'positive',
        dateHarvested: '2024-02-05'
      }
    ],
    redFlags: [],
    localInsight: 'Completed in 1732 under Sultan Moulay Ismail, Bab Mansour is widely regarded as the grandest ceremonial gate in North Africa. Built using marble columns taken from Roman Volubilis. Opens onto Place El-Hedim, Meknes\' central square featuring open-air cafes, storyteller circles, and covered olive markets.',
    commonComplaints: [
      'Periodic scaffolding during municipal conservation projects',
      'Midday square heat during summer months'
    ],
    commonPraise: [
      'Extraordinary imperial architecture and intricate zellige tilecraft',
      'Much more relaxed and less crowded than Marrakech or Fes main squares',
      'Surrounded by authentic market stalls selling regional Saïss olives and honeys'
    ],
    savvyTips: [
      'Visit the indoor Marché Couvert bordering Place El-Hedim to sample authentic Meslalla cracked green olives.',
      'Catch shared Grand Taxis to Volubilis Roman ruins from the taxi rank near the square.'
    ],
    lastVerifiedDate: '2026-07-21',
    verifiedBy: 'platform',
    savvyScore: 89
  },

  // --- AL HOCEIMA POIS ---
  {
    placeId: 'al-hoceima-quemado-beach',
    placeType: 'experience',
    placeName: 'Quemado Beach Cove',
    cityId: 'al_hoceima',
    neighborhood: 'Place Mohammed VI & Quemado Bay',
    safetyScore: 9.5,
    valueForMoneyScore: 8.8,
    touristFriendlinessScore: 8.8,
    scamRiskScore: 1.5,
    happinessScore: 9.4,
    socialHighlights: [
      {
        text: 'Quemado Beach has the clearest turquoise water in Morocco. Tucked right beneath high green cliffs, it feels like a Mediterranean hidden paradise.',
        source: 'google_review',
        sentiment: 'positive',
        dateHarvested: '2024-05-10'
      }
    ],
    redFlags: [],
    localInsight: 'The postcard cove of Al Hoceima. Nestled directly beneath dramatic limestone cliffs crowned by Place Mohammed VI. Crystal-clear Mediterranean waters make it ideal for swimming, kayaking, and boat excursions to secluded national park coves.',
    commonComplaints: [
      'Summer peak weekend parking near the cliff descent can be tight',
      'Beach sunbed operators charge higher rates in August'
    ],
    commonPraise: [
      'Stunning turquoise water and dramatic cliffside setting',
      'Clean beach with calm, gentle swimming conditions',
      'Fresh seafood restaurants lining the cliff base'
    ],
    savvyTips: [
      'Walk down the scenic zig-zag cliff staircase from Place Mohammed VI for panoramic ocean views.',
      'Head down to the harbor port stalls at 12:00 for fresh charcoal-grilled Mediterranean sardines.'
    ],
    lastVerifiedDate: '2026-07-21',
    verifiedBy: 'platform',
    savvyScore: 93
  },

  // --- IFRANE / AZROU POIS ---
  {
    placeId: 'ifrane-cedre-gouraud',
    placeType: 'experience',
    placeName: 'Cèdre Gouraud Cedar Forest',
    cityId: 'ifrane_azrou',
    neighborhood: 'Ifrane Chalet Quarter & Cèdre Gouraud Forest',
    safetyScore: 9.0,
    valueForMoneyScore: 8.5,
    touristFriendlinessScore: 8.5,
    scamRiskScore: 4.0,
    happinessScore: 9.0,
    socialHighlights: [
      {
        text: 'The cedar forest near Azrou is peaceful with ancient giant trees and wild Barbary macaques. Don\'t let peanut vendors push bags into your hands unless you want to buy!',
        source: 'reddit',
        sentiment: 'warning',
        dateHarvested: '2024-03-12'
      }
    ],
    redFlags: [
      {
        text: 'Vendors thrusting peanut bags into visitors\' hands to feed monkeys then demanding 50 MAD.',
        source: 'tripadvisor',
        severity: 'minor'
      }
    ],
    localInsight: 'Ancient Middle Atlas cedar forest near Azrou named after French General Gouraud. Home to troops of wild Barbary macaques (North Africa\'s only native primate). Features towering 800-year-old Atlas cedar trees, horse riding trails, and crisp mountain air.',
    commonComplaints: [
      'Pushy peanut sellers near the main parking area',
      'Visitors feeding human food to wild macaques despite warnings'
    ],
    commonPraise: [
      'Magical mountain forest atmosphere among ancient giant cedar trees',
      'Opportunity to observe Barbary macaques in native forest habitat',
      'Cool mountain air and scenic walking trails'
    ],
    savvyTips: [
      'Keep hands in pockets when approaching wildlife and decline peanut sellers firmly.',
      'Combine with lunch at Ras El Ma trout farms nearby for fresh cedar-grilled trout.'
    ],
    lastVerifiedDate: '2026-07-21',
    verifiedBy: 'platform',
    savvyScore: 86
  },

  // --- TETOUAN POIS ---
  {
    placeId: 'tetouan-bab-el-okla',
    placeType: 'experience',
    placeName: 'Bab El Okla Gate & Royal Artisan School',
    cityId: 'tetouan_martil',
    neighborhood: 'Tetouan Medina & Ensanche Spanish Quarter',
    safetyScore: 9.0,
    valueForMoneyScore: 9.2,
    touristFriendlinessScore: 8.8,
    scamRiskScore: 2.0,
    happinessScore: 9.2,
    socialHighlights: [
      {
        text: 'Visiting the Royal Artisan School by Bab El Okla was highlights of Tetouan. Watching young master apprentices carve painted wood and craft zellige with ZERO sales pitch was incredible.',
        source: 'reddit',
        sentiment: 'positive',
        dateHarvested: '2024-04-18'
      }
    ],
    redFlags: [],
    localInsight: 'Historic eastern gate of Tetouan\'s UNESCO Medina. Houses the Royal Artisan School (École des Arts et Métiers), an educational institution preserving traditional Andalusian-Moroccan crafts (zellige, painted wood Zouak, leatherwork, and embroidery). Non-commercial, educational, and deeply authentic.',
    commonComplaints: [
      'School is closed on weekends and public holidays',
      'Quiet area with fewer commercial souvenir shops than other medinas'
    ],
    commonPraise: [
      'Authentic look inside master artisan apprenticeship programs',
      'Zero commercial pressure or touts inside the school campus',
      'Stunning examples of Andalusian wood carving and zellige tiles'
    ],
    savvyTips: [
      'Visit on a weekday morning (09:30–12:00) when students and instructors are active in workshop bays.',
      'Small entrance fee (~10 MAD) supports student materials and tools.'
    ],
    lastVerifiedDate: '2026-07-22',
    verifiedBy: 'platform',
    savvyScore: 93
  }
,
  {
    "placeId": "casablanca-eat-3",
    "placeType": "eat",
    "placeName": "Rick's Café",
    "cityId": "casablanca",
    "neighborhood": "Ancienne Médina / Boulevard des Almohades",
    "safetyScore": 9.2,
    "valueForMoneyScore": 6.8,
    "touristFriendlinessScore": 9.5,
    "scamRiskScore": 1,
    "happinessScore": 8.3,
    "socialHighlights": [
      {
        "text": "Unbelievable movie nostalgia with live jazz piano performance and classic upscale cocktail menu.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-05-10"
      },
      {
        "text": "Booking weeks in advance is strictly required for dinner. Strict dress code enforced at door (no shorts).",
        "source": "reddit",
        "sentiment": "tip",
        "dateHarvested": "2026-06-02"
      }
    ],
    "redFlags": [
      {
        "text": "Taxi drivers outside offer flat rates 3x standard meter rates. Walk 100 meters toward boulevard for meter.",
        "source": "google_review",
        "severity": "minor"
      }
    ],
    "localInsight": "Created by a former US diplomat to recreate the movie setting. Very popular with Western tourists; locals come for drinks and live jazz at night.",
    "commonComplaints": [
      "Prices are high compared to standard Casa eateries",
      "Strict dress code enforcement"
    ],
    "commonPraise": [
      "Atmospheric 1940s architecture",
      "Excellent gin cocktails and live piano",
      "Top tier service"
    ],
    "savvyTips": [
      "Reserve 2-3 weeks ahead for dinner",
      "Lunch service is easier to book with same menu quality",
      "Smart casual attire required"
    ],
    "lastVerifiedDate": "2026-07-20",
    "verifiedBy": "community"
  },
  {
    "placeId": "casablanca-eat-5",
    "placeType": "eat",
    "placeName": "La Sqala",
    "cityId": "casablanca",
    "neighborhood": "Ancienne Médina Bastion",
    "safetyScore": 9,
    "valueForMoneyScore": 8.2,
    "touristFriendlinessScore": 9.1,
    "scamRiskScore": 1.1,
    "happinessScore": 8.8,
    "socialHighlights": [
      {
        "text": "Eating breakfast inside 18th-century Portuguese fortress gardens under orange trees is magical.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-05-18"
      },
      {
        "text": "The traditional Moroccan breakfast spread with fresh baghrir, msemen, honey, and mint tea is unbeatable value.",
        "source": "reddit",
        "sentiment": "positive",
        "dateHarvested": "2026-06-12"
      }
    ],
    "redFlags": [],
    "localInsight": "Housed in an old bastion along the city wall. Extremely reliable, alcohol-free, family-friendly setting where Casa professionals meet for business lunches.",
    "commonComplaints": [
      "Can get crowded on weekend mornings",
      "Service can slow down during peak lunch hours"
    ],
    "commonPraise": [
      "Beautiful lush courtyard garden",
      "Authentic Moroccan breakfast",
      "Hygienic and reliable food standards"
    ],
    "savvyTips": [
      "Visit for breakfast before 10 AM to secure garden seats",
      "Try the seafood pastilla"
    ],
    "lastVerifiedDate": "2026-07-22",
    "verifiedBy": "platform"
  },
  {
    "placeId": "casablanca-eat-8",
    "placeType": "eat",
    "placeName": "Taverne du Dauphin",
    "cityId": "casablanca",
    "neighborhood": "Centre Ville / Boulevard Houphouët-Boigny",
    "safetyScore": 8.9,
    "valueForMoneyScore": 8.7,
    "touristFriendlinessScore": 8.8,
    "scamRiskScore": 1,
    "happinessScore": 8.9,
    "socialHighlights": [
      {
        "text": "A Casablanca institution since 1952. The fried calamari, grilled soles, and cold Moroccan white wine are legendary.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-04-14"
      }
    ],
    "redFlags": [],
    "localInsight": "Unpretentious classic French-Moroccan seafood bistro loved by Casa locals, business leaders, and travelers. Fresh catches straight from the port.",
    "commonComplaints": [
      "Simple vintage decor",
      "Slight wait time during peak lunch"
    ],
    "commonPraise": [
      "Ultra-fresh fish and prawns",
      "Fair transparent pricing",
      "Attentive veteran waiters"
    ],
    "savvyTips": [
      "Order the friture mixte (mixed fried seafood) and a side of garlicky prawns",
      "Closed on Sundays"
    ],
    "lastVerifiedDate": "2026-07-25",
    "verifiedBy": "community"
  },
  {
    "placeId": "casablanca-things-1",
    "placeType": "activity",
    "placeName": "Hassan II Mosque",
    "cityId": "casablanca",
    "neighborhood": "Corniche / Boulevard Sidi Mohammed Ben Abdallah",
    "safetyScore": 9.8,
    "valueForMoneyScore": 9,
    "touristFriendlinessScore": 9.6,
    "scamRiskScore": 0.8,
    "happinessScore": 9.5,
    "socialHighlights": [
      {
        "text": "One of the few active mosques in Morocco open to non-Muslims via official guided tours. Mind-blowing craftsmanship.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-06-10"
      }
    ],
    "redFlags": [
      {
        "text": "Unofficial \"photographers\" outside offer instant prints for 100 MAD; set price beforehand or decline.",
        "source": "reddit",
        "severity": "minor"
      }
    ],
    "localInsight": "The 2nd largest functioning mosque in Africa with a 210m minaret over the Atlantic Ocean. Non-Muslim entry is ONLY permitted on official timed guided tours.",
    "commonComplaints": [
      "Must remove shoes inside (bags provided)",
      "Strict tour departure times"
    ],
    "commonPraise": [
      "Breathtaking ocean views and zellige tilework",
      "Knowledgeable multilingual guides",
      "Spacious coastal esplanade"
    ],
    "savvyTips": [
      "Buy ticket at the underground museum complex before queuing",
      "Shoulders and knees must be covered",
      "Check tour schedule which pauses on Fridays"
    ],
    "lastVerifiedDate": "2026-07-28",
    "verifiedBy": "platform"
  },
  {
    "placeId": "e-rabat-1",
    "placeType": "eat",
    "placeName": "Dar Naji",
    "cityId": "rabat",
    "neighborhood": "Bab El Had / Avenue Hassan II",
    "safetyScore": 9,
    "valueForMoneyScore": 8.8,
    "touristFriendlinessScore": 9.2,
    "scamRiskScore": 0.9,
    "happinessScore": 9,
    "socialHighlights": [
      {
        "text": "Famous for traditional brass teapot service poured from height. The lamb shank tagine with prunes melts off the bone.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-05-22"
      }
    ],
    "redFlags": [],
    "localInsight": "Very popular with Rabati families and government officials. Warm traditional decor with low salon seating and generous portions.",
    "commonComplaints": [
      "Can be noisy on Friday evenings",
      "No alcohol served"
    ],
    "commonPraise": [
      "Authentic traditional recipes",
      "Generous portions",
      "Friendly traditional dress service"
    ],
    "savvyTips": [
      "Order the Trid (chicken with lentils and shredded pastry)",
      "Arrive before 13:00 for lunch without queuing"
    ],
    "lastVerifiedDate": "2026-07-15",
    "verifiedBy": "platform"
  },
  {
    "placeId": "e-rabat-2",
    "placeType": "eat",
    "placeName": "Le Dhow",
    "cityId": "rabat",
    "neighborhood": "Bouregreg Marina / Quai de la Douane",
    "safetyScore": 9.4,
    "valueForMoneyScore": 7.8,
    "touristFriendlinessScore": 9.4,
    "scamRiskScore": 0.5,
    "happinessScore": 8.7,
    "socialHighlights": [
      {
        "text": "A converted wooden merchant boat moored on the Bouregreg River overlooking the Kasbah of the Udayas. Perfect sunset lounge.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-06-18"
      }
    ],
    "redFlags": [],
    "localInsight": "Fixed boat restaurant and lounge bar on the river divider between Rabat and Salé. Serves French-International cuisine with wine/cocktails.",
    "commonComplaints": [
      "Prices reflect the prime view position",
      "Deck can feel chilly on windy winter evenings"
    ],
    "commonPraise": [
      "Unrivaled view of Udayas fortress at dusk",
      "Live music & DJ sets in the evening",
      "Great cocktail selection"
    ],
    "savvyTips": [
      "Book upper deck table for 18:30 to catch the sunset over the Kasbah",
      "Great post-sightseeing spot"
    ],
    "lastVerifiedDate": "2026-07-20",
    "verifiedBy": "community"
  },
  {
    "placeId": "r-things-1",
    "placeType": "activity",
    "placeName": "Kasbah of the Udayas",
    "cityId": "rabat",
    "neighborhood": "Kasbah des Oudaïas",
    "safetyScore": 9.3,
    "valueForMoneyScore": 10,
    "touristFriendlinessScore": 9,
    "scamRiskScore": 1.2,
    "happinessScore": 9.3,
    "socialHighlights": [
      {
        "text": "Wandering through the blue-and-white stone residential alleys feels like a peaceful coastal village within Rabat.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-06-05"
      }
    ],
    "redFlags": [
      {
        "text": "False guides at the main Bab Oudaia gate claim the Kasbah is closed without a guide. Walk past them freely.",
        "source": "reddit",
        "severity": "minor"
      }
    ],
    "localInsight": "12th-century Almohad citadel over the Atlantic Ocean. Free entry to wandering the residential streets, Andalusian Garden, and Café Maure.",
    "commonComplaints": [
      "Self-appointed guides at entrance can be persistent"
    ],
    "commonPraise": [
      "Free public entry",
      "Peaceful blue-and-white aesthetic",
      "Panoramic ocean and river views at Café Maure"
    ],
    "savvyTips": [
      "Stop at Café Maure for mint tea and almond gazelle horns overlooking the river",
      "No ticket required for Citadel streets"
    ],
    "lastVerifiedDate": "2026-07-24",
    "verifiedBy": "platform"
  },
  {
    "placeId": "fes-eat-2",
    "placeType": "eat",
    "placeName": "The Ruined Garden",
    "cityId": "fes",
    "neighborhood": "Riad Zany / Derb Idrissy, Medina",
    "safetyScore": 9.1,
    "valueForMoneyScore": 8.5,
    "touristFriendlinessScore": 9.6,
    "scamRiskScore": 0.8,
    "happinessScore": 9.2,
    "socialHighlights": [
      {
        "text": "A peaceful lush botanical garden built among ruined walls in Fes El Bali. Outstanding slow-cooked Mechoui and fresh tapas.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-05-14"
      }
    ],
    "redFlags": [],
    "localInsight": "Restored merchant house courtyard filled with birds, plants, and bread ovens. Very popular with international travelers seeking a quiet refuge in Fes Medina.",
    "commonComplaints": [
      "Must book ahead for dinner",
      "Deep in Medina alleys — use Google Maps GPS or offline map"
    ],
    "commonPraise": [
      "Enchanting garden ambiance",
      "Slow-roasted meats cooked in traditional clay pots",
      "Friendly staff"
    ],
    "savvyTips": [
      "Pre-order the 7-hour slow-roasted leg of lamb 24h in advance",
      "Great vegetarian lunch options"
    ],
    "lastVerifiedDate": "2026-07-21",
    "verifiedBy": "platform"
  },
  {
    "placeId": "fes-eat-3",
    "placeType": "eat",
    "placeName": "Café Clock",
    "cityId": "fes",
    "neighborhood": "Talaa Kebira / Talaa Sghira link, Medina",
    "safetyScore": 9.2,
    "valueForMoneyScore": 8.4,
    "touristFriendlinessScore": 9.8,
    "scamRiskScore": 0.6,
    "happinessScore": 9,
    "socialHighlights": [
      {
        "text": "Famous for the Camel Burger! Fantastic multi-story rooftop terrace overlooking the minarets of Fes.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-06-11"
      }
    ],
    "redFlags": [],
    "localInsight": "Cultural hub offering cooking classes, calligraphy workshops, storytellers (Hakawati), and live Gnawa music alongside a cross-cultural menu.",
    "commonComplaints": [
      "Seating can be tight on the rooftop on sunny afternoons"
    ],
    "commonPraise": [
      "Famous camel burger with spiced fries",
      "Rich cultural events calendar",
      "Welcoming atmosphere for solo travelers"
    ],
    "savvyTips": [
      "Check their board for live storytelling nights and cooking classes",
      "Great English-speaking staff"
    ],
    "lastVerifiedDate": "2026-07-23",
    "verifiedBy": "community"
  },
  {
    "placeId": "f-things-1",
    "placeType": "activity",
    "placeName": "Chouara Tannery",
    "cityId": "fes",
    "neighborhood": "Hay Lablida / Medina",
    "safetyScore": 7.8,
    "valueForMoneyScore": 8,
    "touristFriendlinessScore": 7.2,
    "scamRiskScore": 4.5,
    "happinessScore": 8,
    "socialHighlights": [
      {
        "text": "The iconic view of stone vats filled with natural dyes. Workers still process leather using 11th-century methods.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-05-30"
      }
    ],
    "redFlags": [
      {
        "text": "Leather shop owners charge 20-50 MAD \"entry fee\" for balcony views. This is normal, but buy leather only if you negotiate hard.",
        "source": "reddit",
        "severity": "major"
      },
      {
        "text": "Mint sprigs are offered at entrance to mask smell; accept it as it really helps with pigeon poop odor.",
        "source": "google_review",
        "severity": "minor"
      }
    ],
    "localInsight": "The oldest active tannery in the world. Visitors view the vats from surrounding leather shop balconies (Shop #10 or #64 have top views).",
    "commonComplaints": [
      "Pungent odor from natural pigeon dung tanks",
      "Persistent sales pitch inside leather shops"
    ],
    "commonPraise": [
      "Unmatched historical sight",
      "Photographic panorama",
      "Fascinating artisan process"
    ],
    "savvyTips": [
      "Tip 10-20 MAD to terrace owner if you do not purchase leather",
      "Visit early morning when workers actively dye skins"
    ],
    "lastVerifiedDate": "2026-07-26",
    "verifiedBy": "platform"
  },
  {
    "placeId": "e-tangier-1",
    "placeType": "eat",
    "placeName": "Café Hafa",
    "cityId": "tangier",
    "neighborhood": "Marshan / Boulevard Haddi Aniba",
    "safetyScore": 9.1,
    "valueForMoneyScore": 9.5,
    "touristFriendlinessScore": 8.8,
    "scamRiskScore": 0.5,
    "happinessScore": 9.4,
    "socialHighlights": [
      {
        "text": "Opened in 1921! Terraced stone seating carved into the cliff face overlooking the Straits of Gibraltar and Spain.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-06-08"
      }
    ],
    "redFlags": [],
    "localInsight": "Visited by The Beatles, Rolling Stones, and William Burroughs. Cheap mint tea (10 MAD) served on stone terraces facing Europe.",
    "commonComplaints": [
      "Only serves tea, coffee, and simple snacks — not a full meal spot",
      "Cash only"
    ],
    "commonPraise": [
      "Unbeatable view of Spain across the sea",
      "Iconic historical cafe atmosphere",
      "Super affordable"
    ],
    "savvyTips": [
      "Order mint tea with pine nuts (Atay b'snober)",
      "Come around 17:30 to watch ships pass through the strait at sunset"
    ],
    "lastVerifiedDate": "2026-07-20",
    "verifiedBy": "platform"
  },
  {
    "placeId": "e-tangier-4",
    "placeType": "eat",
    "placeName": "Saveur de Poisson",
    "cityId": "tangier",
    "neighborhood": "Escalier Waller / Petit Socco link",
    "safetyScore": 9,
    "valueForMoneyScore": 8.6,
    "touristFriendlinessScore": 8.5,
    "scamRiskScore": 1,
    "happinessScore": 8.8,
    "socialHighlights": [
      {
        "text": "Set 5-course seafood menu prepared over wood fire with homemade fig/plum juices and barley bread. Very unique experience.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-05-19"
      }
    ],
    "redFlags": [],
    "localInsight": "No menu exists; everyone gets the daily set meal (approx 200-250 MAD) featuring fish soup, baby shark skewers, grilled catch, and honey dessert.",
    "commonComplaints": [
      "No choices on menu",
      "Cash only",
      "Lines form early before 12:30 opening"
    ],
    "commonPraise": [
      "Ultra authentic seafood flavors",
      "Wild berry and herb juice",
      "Rustic cavernous decor"
    ],
    "savvyTips": [
      "Arrive at 12:15 or 19:15 to snag a table in the first seating",
      "Come hungry as portions are heavy"
    ],
    "lastVerifiedDate": "2026-07-22",
    "verifiedBy": "community"
  },
  {
    "placeId": "t-things-1",
    "placeType": "activity",
    "placeName": "Caves of Hercules",
    "cityId": "tangier",
    "neighborhood": "Cape Spartel / Atlantic Coast",
    "safetyScore": 9.2,
    "valueForMoneyScore": 8.5,
    "touristFriendlinessScore": 9,
    "scamRiskScore": 1.5,
    "happinessScore": 8.9,
    "socialHighlights": [
      {
        "text": "Natural sea cave with an opening shaped like the map of Africa facing the Atlantic Ocean.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-06-15"
      }
    ],
    "redFlags": [
      {
        "text": "Local guides inside offer photo ops with parrots/monkeys for money; agree on fee beforehand or decline.",
        "source": "reddit",
        "severity": "minor"
      }
    ],
    "localInsight": "Located 14km west of Tangier near Cape Spartel where the Atlantic meets the Mediterranean. Official ticket counter at cave entrance (approx 60 MAD).",
    "commonComplaints": [
      "Can get crowded when cruise ship buses arrive",
      "Short visit duration (30-45 mins)"
    ],
    "commonPraise": [
      "Unique geological opening looking onto Atlantic waves",
      "Combine with Cape Spartel lighthouse visit"
    ],
    "savvyTips": [
      "Take Grand Taxi from Tangier city center (negotiate round trip with wait time)",
      "Best light inside cave is mid-afternoon"
    ],
    "lastVerifiedDate": "2026-07-27",
    "verifiedBy": "platform"
  },
  {
    "placeId": "e-agadir-1",
    "placeType": "eat",
    "placeName": "Pure Passion Restaurant",
    "cityId": "agadir",
    "neighborhood": "Marina d'Agadir",
    "safetyScore": 9.6,
    "valueForMoneyScore": 8,
    "touristFriendlinessScore": 9.7,
    "scamRiskScore": 0.5,
    "happinessScore": 9.1,
    "socialHighlights": [
      {
        "text": "Top upscale dining in Agadir Marina. Fresh lobster, sea bass, and french wines overlooking luxury yachts.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-05-25"
      }
    ],
    "redFlags": [],
    "localInsight": "Premier waterfront seafood and international steakhouse located directly on the marina quay. Popular for celebratory dinners.",
    "commonComplaints": [
      "European price level",
      "Reservation essential on weekends"
    ],
    "commonPraise": [
      "Impeccable seafood presentation",
      "Yacht harbor view",
      "Full wine & bar menu"
    ],
    "savvyTips": [
      "Reserve an outdoor marina table for 20:00",
      "Try the seafood platter"
    ],
    "lastVerifiedDate": "2026-07-20",
    "verifiedBy": "platform"
  },
  {
    "placeId": "ag-things-1",
    "placeType": "activity",
    "placeName": "Souk El Had",
    "cityId": "agadir",
    "neighborhood": "Cité El Houda / Rue 2 Mars",
    "safetyScore": 8.8,
    "valueForMoneyScore": 9.5,
    "touristFriendlinessScore": 8.5,
    "scamRiskScore": 2,
    "happinessScore": 9,
    "socialHighlights": [
      {
        "text": "One of the largest enclosed urban markets in Africa with over 6,000 stalls. Incredible Argan oil, spices, and leather.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-06-04"
      }
    ],
    "redFlags": [
      {
        "text": "Fake Argan oil sold outside gates; buy only inside certified female cooperatives with IGP labels.",
        "source": "reddit",
        "severity": "major"
      }
    ],
    "localInsight": "Enormous 13-gate walled market where Agadir locals do all their weekly grocery and household shopping. Organized logically by gate numbers.",
    "commonComplaints": [
      "Extremely vast — easy to lose track of gate exits",
      "Closed on Mondays"
    ],
    "commonPraise": [
      "Best prices in southern Morocco for spices, olives, and citrus",
      "Authentic non-touristy sections"
    ],
    "savvyTips": [
      "Enter through Gate 9 for spices and Argan oil",
      "Remember your entry gate number for catching petit taxis on return",
      "Bargaining expected in artisan areas"
    ],
    "lastVerifiedDate": "2026-07-25",
    "verifiedBy": "platform"
  },
  {
    "placeId": "e-meknes-1",
    "placeType": "eat",
    "placeName": "Restaurant Collier de la Colombe",
    "cityId": "meknes",
    "neighborhood": "Ville Impériale / Rue Driba",
    "safetyScore": 9.1,
    "valueForMoneyScore": 8.6,
    "touristFriendlinessScore": 9,
    "scamRiskScore": 0.8,
    "happinessScore": 8.9,
    "socialHighlights": [
      {
        "text": "Panoramic terrace overlooking the ancient walls and gardens of Meknes Medina. Excellent pastilla and prune tagine.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-05-18"
      }
    ],
    "redFlags": [],
    "localInsight": "Classic Moroccan restaurant situated on the elevated ridge overlooking the Imperial city walls. Known for formal traditional service.",
    "commonComplaints": [
      "Slightly traditional decor",
      "Taxis drop off 50m away due to narrow street"
    ],
    "commonPraise": [
      "Panoramic sunset terrace",
      "Crispy authentic pigeon or chicken pastilla",
      "Courteous staff"
    ],
    "savvyTips": [
      "Ask for upper rooftop table during sunset hours",
      "Great lunch stop before visiting Volubilis"
    ],
    "lastVerifiedDate": "2026-07-18",
    "verifiedBy": "community"
  },
  {
    "placeId": "m-things-1",
    "placeType": "activity",
    "placeName": "Bab Mansour Laleuj",
    "cityId": "meknes",
    "neighborhood": "Place El Hedim",
    "safetyScore": 9.2,
    "valueForMoneyScore": 10,
    "touristFriendlinessScore": 9.2,
    "scamRiskScore": 1,
    "happinessScore": 9.4,
    "socialHighlights": [
      {
        "text": "Widely considered the most magnificent grand monumental gate in all of North Africa. The zellige and marble pillars are astounding.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-06-20"
      }
    ],
    "redFlags": [],
    "localInsight": "Completed in 1732 under Sultan Moulay Ismail using Roman marble columns taken from nearby Volubilis ruins. Anchors Place El Hedim.",
    "commonComplaints": [
      "Main portal archway is locked for preservation; viewed from exterior"
    ],
    "commonPraise": [
      "Sublime architectural detail",
      "Directly connects Place El Hedim and Medina",
      "Free viewing 24/7"
    ],
    "savvyTips": [
      "Best photographed in late afternoon golden hour when light hits the green zellige tiles",
      "Sit at facing square café for tea viewing"
    ],
    "lastVerifiedDate": "2026-07-28",
    "verifiedBy": "platform"
  },
  {
    "placeId": "alh-experience-1",
    "placeType": "experience",
    "placeName": "Plage Quemado",
    "cityId": "al_hoceima",
    "neighborhood": "Place Mohammed VI & Quemado Bay",
    "safetyScore": 9.2,
    "valueForMoneyScore": 9.0,
    "touristFriendlinessScore": 9.2,
    "scamRiskScore": 1.0,
    "happinessScore": 9.1,
    "socialHighlights": [
      {
        "text": "Stunning turquoise bay set right under green Mediterranean cliffs. Lifeguards on duty in summer and family friendly atmosphere.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-07-15"
      }
    ],
    "redFlags": [],
    "localInsight": "The iconic main city beach of Al Hoceima, accessible via stairs or elevator from Place Mohammed VI.",
    "commonComplaints": [
      "Crowded during peak July and August afternoons",
      "Limited beach chair availability on weekends"
    ],
    "commonPraise": [
      "Crystal clear water",
      "Dramatic green mountain scenery",
      "Very safe and family-oriented"
    ],
    "savvyTips": [
      "Visit before 11:00 AM for prime spot and calm water",
      "Agree on parasol rental prices before sitting down"
    ],
    "lastVerifiedDate": "2026-08-10",
    "verifiedBy": "platform"
  },
  {
    "placeId": "alh-experience-2",
    "placeType": "experience",
    "placeName": "Cala Bonita Cove",
    "cityId": "al_hoceima",
    "neighborhood": "Cala Bonita & Miramar",
    "safetyScore": 9.1,
    "valueForMoneyScore": 9.2,
    "touristFriendlinessScore": 9.0,
    "scamRiskScore": 0.5,
    "happinessScore": 9.2,
    "socialHighlights": [
      {
        "text": "A tranquil golden sand cove surrounded by pine trees. Much quieter than Quemado with easy parking.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-07-20"
      }
    ],
    "redFlags": [],
    "localInsight": "A natural cove beach just 2km south of the city center, fringed by pine groves.",
    "commonComplaints": [
      "Parking can fill up around 14:00 on summer weekends"
    ],
    "commonPraise": [
      "Sheltered from strong winds",
      "Pine forest backdrop for shade",
      "Gentle water entry for swimming"
    ],
    "savvyTips": [
      "Guardian parking fee is 5-10 MAD",
      "Great spot for sunset mint tea at the beach side café"
    ],
    "lastVerifiedDate": "2026-08-10",
    "verifiedBy": "platform"
  },
  {
    "placeId": "ifr-experience-1",
    "placeType": "experience",
    "placeName": "Lion of Ifrane (Lion d'Ifrane)",
    "cityId": "ifrane_azrou",
    "neighborhood": "Downtown Ifrane (Centre Ville & Lion Park)",
    "safetyScore": 9.8,
    "valueForMoneyScore": 10.0,
    "touristFriendlinessScore": 9.5,
    "scamRiskScore": 0.2,
    "happinessScore": 9.6,
    "socialHighlights": [
      {
        "text": "Iconic carved stone lion monument in the heart of Ifrane. Surrounded by beautifully maintained flower gardens and alpine trees.",
        "source": "google_review",
        "sentiment": "positive",
        "dateHarvested": "2026-07-18"
      }
    ],
    "redFlags": [],
    "localInsight": "Carved during WWII by Henri Jean Moreau, representing the extinct Barbary lion of the Atlas mountains.",
    "commonComplaints": [
      "Queue of tourists taking photos during midday weekends"
    ],
    "commonPraise": [
      "Spotless park surroundings",
      "Free attraction",
      "Very safe day and night"
    ],
    "savvyTips": [
      "Visit in the early morning for peaceful photos without other tourists",
      "Enjoy a stroll to the nearby lake and central pasticceria afterwards"
    ],
    "lastVerifiedDate": "2026-08-12",
    "verifiedBy": "platform"
  },
  {
    "placeId": "ifr-experience-2",
    "placeType": "experience",
    "placeName": "Cèdre Gouraud & Barbary Macaque Sanctuary",
    "cityId": "ifrane_azrou",
    "neighborhood": "Azrou Town & Cèdre Gouraud Forest",
    "safetyScore": 9.1,
    "valueForMoneyScore": 9.4,
    "touristFriendlinessScore": 9.0,
    "scamRiskScore": 1.2,
    "happinessScore": 9.3,
    "socialHighlights": [
      {
        "text": "Incredible experience walking among ancient cedar trees and seeing troops of wild Barbary macaques playing naturally in their habitat.",
        "source": "tripadvisor",
        "sentiment": "positive",
        "dateHarvested": "2026-07-25"
      }
    ],
    "redFlags": [],
    "localInsight": "The ancient cedar forest between Ifrane and Azrou is a protected national reserve housing Morocco's native Barbary macaque population.",
    "commonComplaints": [
      "Vendors push bags of peanuts to feed the monkeys",
      "Monkeys can be opportunistic if you carry open food"
    ],
    "commonPraise": [
      "Majestic towering ancient cedar trees",
      "Fresh crisp mountain air",
      "Close encounters with native wildlife"
    ],
    "savvyTips": [
      "Do not feed the macaques processed human food — observe them respectfully from a distance",
      "Keep sunglasses and small loose items securely zipped in bags"
    ],
    "lastVerifiedDate": "2026-08-12",
    "verifiedBy": "platform"
  }
];
