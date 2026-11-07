export interface ConcernQuery {
  id: string;
  question: string;
  answer: string;
  category: 'transit' | 'sights' | 'stays' | 'food' | 'climate' | 'safety' | 'culture';
  cities: string[]; // ['agadir', 'essaouira', 'marrakech', 'general']
  tags: string[];
  tips?: string[];
  links?: { label: string; url: string }[];
}

export const concernsDB: ConcernQuery[] = [
  // TRANSIT & INTERCITY CONNECTIONS
  {
    id: "agadir-airport-arrival",
    question: "Agadir Airport (AGA): Arrivals, departures, food, and airport transfers",
    answer: "Agadir Al Massira Airport (AGA) is located 25 km southeast of the city center. There is no train line. Public transit is limited: you must take Local Bus 37 to Inezgane (approx. 5 MAD) and then another local bus or shared taxi to Agadir center. Private transfers and taxis are much faster. Food inside the departures lounge is heavily marked up (expect European prices for coffee and snacks); buy water or eat before arriving if possible.",
    category: "transit",
    cities: ["agadir"],
    tags: ["airport", "arrival", "departure", "transfer", "food"],
    tips: [
      "Standard flat rate for a grand taxi from the airport to Agadir center is 220 MAD (day or night). Confirm this with the driver before stepping in.",
      "Cash is king: do not use airport exchange counters as they give poor rates. Use the ATMs inside the arrivals terminal to withdraw small amounts of Dirhams.",
      "Check with your hotel if they offer a free or cheaper shuttle service before hiring a private cab."
    ],
    links: [{ label: "Moving Between Worlds (Transport Hub)", url: "/transport" }]
  },
  {
    id: "marrakech-airport-transfer",
    question: "Marrakech Airport (RAK): Transfers, Menara lounges, and flat rates",
    answer: "Marrakech Menara Airport (RAK) is incredibly close to the city center (only 6 km). The easiest budget transport is the L19 Express Bus, which runs every 20 minutes directly to Jemaa El Fna, Gueliz, and the train station for a flat 30 MAD roundtrip ticket. Local Petit Taxis have official city-mandated flat rates of 70 MAD (day) to 120 MAD (night) for a private ride to the Medina, but airport drivers will aggressively demand 200-300 MAD. The Pearl Lounge offers comfortable seating, snacks, and showers, accessible via Priority Pass or a paid walk-in fee.",
    category: "transit",
    cities: ["marrakech"],
    tags: ["airport", "transfer", "taxi", "bus", "lounge"],
    tips: [
      "If airport taxi drivers refuse the 70-120 MAD rate, walk 5 minutes outside the main airport gate to the main road and flag down a passing Petit Taxi with a working meter ('compteur').",
      "Keep your physical boarding pass handy; Marrakech airport has multiple security layers where stamps and checks are manual.",
      "Always arrive at least 3 hours before your departure flight. RAK is notorious for long, manual immigration lines even for e-gate holders."
    ],
    links: [{ label: "Transport Guide & Fare Engine", url: "/transport" }]
  },
  {
    id: "essaouira-airport-mogador",
    question: "Essaouira Airport (ESU): Mogador arrivals, flights, and transfers",
    answer: "Essaouira Mogador Airport (ESU) is a small, quiet airport located 16 km southeast of Essaouira medina. It handles select budget flights (Ryanair, EasyJet) from the UK and Europe. There are no direct public buses connecting the airport to the city. Grand Taxis wait outside arrivals and have a regulated flat fare of 150 MAD to the medina. The entire arrival process is rapid compared to Marrakech, taking less than 30 minutes from landing to leaving.",
    category: "transit",
    cities: ["essaouira"],
    tags: ["airport", "transfer", "flight", "taxi"],
    tips: [
      "Agree on the 150 MAD grand taxi fare before boarding; it is a regulated price but a driver might try to ask for more from first-timers.",
      "For return flights, because ESU is very small, arriving 2 hours in advance is perfectly sufficient as lines are short."
    ],
    links: [{ label: "Check Intercity Routes", url: "/transport" }]
  },
  {
    id: "car-rentals-driving-morocco",
    question: "Car Rental and Driving: Safety, parking guardians, and highway tips",
    answer: "Renting a car is the absolute best way to explore the coast (Agadir, Essaouira, Taghazout) and the southern valleys (Ouarzazate, Todra). Major rental agencies operate from Casablanca, Marrakech, and Agadir airports, while local suppliers (often cheaper and requiring lower deposits) are widely available. Driving is on the right. Highways (autoroutes) are excellent toll-roads. However, driving inside old medinas is completely impossible (strictly pedestrian), and navigating narrow city lanes is highly stressful.",
    category: "transit",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["car rental", "driving", "parking", "rules"],
    tips: [
      "Never park on street curbs painted solid yellow and red (it means no parking).",
      "Look for parking guardians wearing yellow reflective vests. They manage public parking spots. Pay them 5-10 MAD for day use and 20-30 MAD for overnight parking.",
      "Keep cash on hand for highway toll booths. Credit cards are only accepted at select automated lanes.",
      "Observe speed limits strictly; radar speed traps are highly common on approaches to towns and junctions. Fines are 150-300 MAD payable on the spot."
    ],
    links: [{ label: "Intercity Distance Guide", url: "/transport" }]
  },
  {
    id: "uber-equivalents-taxis",
    question: "Uber in Morocco: Taxi apps, Roby Taxi, InDrive, and Petit Taxis",
    answer: "There is no standard Uber or Lyft in Morocco due to local taxi union regulations. However, digital ride-hailing is growing: Roby Taxi is an app that lets you hail official licensed taxis at metered rates plus a small booking fee. InDrive (popular in Marrakech, Casablanca, and Agadir) allows you to negotiate and agree on fares directly with drivers before they pick you up. Alternatively, you can easily hail a local Petit Taxi from the street.",
    category: "transit",
    cities: ["agadir", "marrakech", "general"],
    tags: ["uber", "taxi", "roby", "indrive", "compteur"],
    tips: [
      "Petit Taxis are color-coded: Red in Marrakech, Ochre/Beige in Agadir, Blue in Essaouira, Red/White in Casablanca.",
      "Always insist on the meter ('compteur' in French). Say: 'Compteur, s'il vous plaît' (cohm-tur sil-voo-play). If they refuse, politely step out and hail another.",
      "Petit Taxis are shared; a driver might stop to pick up other passengers going in the same direction. Each passenger pays their own metered fare.",
      "Between 8:00 PM and midnight, a legal 50% night surcharge is added to the metered fare."
    ],
    links: [{ label: "Use Fair Price Checker", url: "/savvy" }]
  },
  {
    id: "intercity-bus-supratours",
    question: "Intercity Bus Stations: CTM vs. Supratours schedules and luggage",
    answer: "Morocco has two premium, highly reliable national bus networks: CTM and Supratours. Supratours is owned by the national railway (ONCF), so their routes align perfectly with train arrivals in Marrakech and Fes. CTM has dedicated clean terminals in all major cities. They use modern, air-conditioned buses and are extremely safe. Tickets can be booked online or at the station. Luggage must be weighed, labeled, and paid for separately at the baggage counter (approx. 5-10 MAD per bag).",
    category: "transit",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["bus", "supratours", "ctm", "luggage", "train"],
    tips: [
      "In Marrakech, the Supratours terminal is conveniently located right next to the main train station (Gare de Marrakech).",
      "For popular routes like Marrakech to Essaouira or Marrakech to Agadir, book your tickets 1-2 days in advance, especially during peak seasons.",
      "Do not rely on local 'gare routière' (local public bus stations) unless you are comfortable with chaotic shouting, older buses, and aggressive luggage touts."
    ],
    links: [{ label: "Check Intercity Bus Schedules", url: "/transport" }]
  },

  // SIGHTS, ACTIVITIES & DAY TRIPS
  {
    id: "agadir-cable-car-kasbah",
    question: "Agadir Cable Car & Kasbah Oufella ruins: Prices, tickets, and sunset tips",
    answer: "The Agadir Cable Car (Téléphérique) is a modern attraction connecting the Tildi bridge area to the ancient Kasbah Oufella ruins. It is the only cable car in Morocco, offering breathtaking 360-degree views of the marina, beach, and ocean. The ride takes about 6 minutes. At the top, you can explore the historic 16th-century Kasbah Oufella, which was partially destroyed in the 1960 earthquake and recently restored with scenic wooden walkways.",
    category: "sights",
    cities: ["agadir"],
    tags: ["cable car", "kasbah", "oufella", "sunset", "tickets"],
    tips: [
      "Adult return tickets are approximately 80 MAD on weekdays and 120 MAD on weekends. VIP glass-bottom cabins are also available.",
      "The best time to go is 1 hour before sunset to capture the golden hour over the Atlantic coast.",
      "At the top, avoid unsolicited 'guides' who try to walk with you and demand payment; the walkways are self-explanatory and fully signed."
    ]
  },
  {
    id: "crocopark-agadir",
    question: "Agadir Crocodile Park (Crocopark): Tickets, family fun, and location",
    answer: "Crocopark is a highly-rated biological and botanical reserve located in Drarga, a short 15-minute taxi drive from Agadir center. It hosts over 300 Nile Crocodiles in beautifully landscaped gardens featuring giant water lilies, cacti, and waterfalls. The park is exceptionally clean, safe, and educational, making it the perfect half-day excursion for families and nature enthusiasts.",
    category: "sights",
    cities: ["agadir"],
    tags: ["crocodile", "crocopark", "family", "kids", "tickets"],
    tips: [
      "Entrance tickets are approximately 80 MAD for adults and 50 MAD for children. No advanced reservation is needed.",
      "Take a shared grand taxi or a budget local bus from Agadir's main avenue to Drarga, or hire a private petit taxi (negotiate a roundtrip fare with waiting time for around 150-200 MAD)."
    ],
    links: [{ label: "Browse Agadir Things To Do", url: "/finder/things-to-do?city=agadir" }]
  },
  {
    id: "essaouira-game-of-thrones-john-wick",
    question: "Game of Thrones & John Wick 3 Filming Locations in Essaouira",
    answer: "Essaouira is a legendary cinematic hub. In Game of Thrones Season 3, Essaouira served as the red-walled city of 'Astapor' on Slaver's Bay, where Daenerys Targaryen acquires her Army of the Unsullied. Key filming locations include the Skala de la Ville (the scenic stone ramparts lined with historic bronze cannons) and the old harbor. In John Wick: Chapter 3 – Parabellum, the ancient streets of Essaouira's medina and the coastal fortifications were used for the iconic scenes where John meets Sofia (Halle Berry) and navigates the desert underworld.",
    category: "sights",
    cities: ["essaouira"],
    tags: ["cinema", "game of thrones", "john wick", "ramparts", "skala"],
    tips: [
      "You can visit all of these locations completely for free! The Skala de la Ville is open during daylight hours and provides magnificent sea spray photos.",
      "Diabat village (just outside Essaouira) was also a famous 1970s hippy hangout visited by Jimi Hendrix. The ruins of the Dar Sultan palace (covered in sand dunes) is a great short hike from the beach."
    ]
  },
  {
    id: "marrakech-gardens-majorelle-ysl",
    question: "Jardin Majorelle & YSL Museum: Pre-booking tickets and Bacha Coffee",
    answer: "The Jardin Majorelle, famously restored by fashion designer Yves Saint Laurent, is Marrakech's most famous botanical garden, featuring stunning cobalt-blue Cubist villas. The adjoining YSL Museum showcases his iconic couture work. Because of immense global popularity, **YOU CANNOT BUY TICKETS AT THE GATE**. You must book your timed entry ticket online via the official website at least 2-3 days in advance.",
    category: "sights",
    cities: ["marrakech"],
    tags: ["gardens", "majorelle", "ysl", "bacha", "tickets"],
    tips: [
      "Buy the combined ticket (Jardin Majorelle + YSL Museum + Museum of Berber Arts) for the best value (approx. 300 MAD).",
      "For Dar El Bacha / Bacha Coffee: This legendary ornate coffee room inside the Dar El Bacha palace does not accept reservations for single visitors. Go at 8:45 AM (before opening) to put your name on the list. Waiting times easily exceed 2 hours during mid-day, but you can explore the palace museum while waiting.",
      "If you miss out on Majorelle tickets, visit 'Le Jardin Secret' inside the medina instead—it is a stunning, quiet Islamic paradise garden with no advanced booking stress."
    ],
    links: [{ label: "Marrakech Things To Do", url: "/finder/things-to-do?city=marrakech" }]
  },
  {
    id: "sahara-desert-tours",
    question: "Sahara Desert Excursions: Merzouga vs. M'hamid, camel rides, and dunes",
    answer: "A desert trip to the Sahara is a bucket-list experience. The two main dune systems are Erg Chebbi near Merzouga (massive, high golden dunes with luxurious permanent desert camps) and Erg Chigaga near M'hamid (wilder, remote, accessible only by 4x4, deep desert feel). A tour from Marrakech to Merzouga is approximately 560 km and takes a minimum of 3 days (2 nights). **Avoid 2-day/1-night quick tours**, as you will spend 18+ hours sitting in a minibus with almost no time in the dunes.",
    category: "sights",
    cities: ["marrakech", "merzouga", "mhamid", "general"],
    tags: ["desert", "camel", "merzouga", "safari", "camp"],
    tips: [
      "A typical 3-day itinerary stops at Ait Benhaddou (Unesco Kasbah) on day 1, Dades Gorges on night 1, and reaches Merzouga dunes on afternoon 2 for a sunset camel ride into a Berber tent camp.",
      "Bring warm clothing even in spring or autumn: desert temperatures drop drastically at night, sometimes close to freezing.",
      "Check if your desert camp has private en-suite bathrooms and running water; budget camps often share communal facilities."
    ],
    links: [{ label: "View Saved Itineraries", url: "/planner" }]
  },

  // STAYS & HOUSING
  {
    id: "riad-vs-allinclusive",
    question: "Riad vs. All-Inclusive Resorts: Boutique stays vs. beachfront ease",
    answer: "A 'Riad' is a traditional Moroccan home built around an inward-facing garden courtyard, ensuring privacy and cooling breeze. Staying in a Riad (especially in Marrakech, Fes, or Essaouira) offers unmatched cultural immersion, personalized homemade breakfasts, and peaceful courtyards away from bustling streets. In contrast, Agadir is famous for massive all-inclusive beachfront resorts (Riu, Iberostar, Allegro) that offer standard western amenities, pools, and private beach access. Choose Riads for authentic character and central medina access; choose resorts for relaxing beach vacations.",
    category: "stays",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["riad", "hotel", "resort", "all-inclusive", "pool"],
    tips: [
      "Many luxury hotels and resorts in Marrakech (like Kenzi Club Agdal, Oberoi, or Ryads Parc) offer a 'Pool Day Pass' (approx. 250-500 MAD) which allows outside guests to use their luxurious pools, sun loungers, and often includes a buffet lunch.",
      "When booking a Riad, check if they have a rooftop terrace ('terrasse')—this is where traditional mint tea is served at sunset.",
      "Because Riads are in pedestrian-only medinas, always arrange an arrival luggage cart ('kossa') or hotel escort to guide you from the nearest taxi drop-off point to avoid getting lost."
    ],
    links: [{ label: "Sleep Curated Selector", url: "/finder/sleep" }]
  },

  // FOOD, SHOPPING & LOCAL GOODS
  {
    id: "argan-oil-cooperatives",
    question: "Authentic Argan Oil: Spotting pure oil, prices, and fake cooperatives",
    answer: "Argan oil is Morocco's 'liquid gold', hand-extracted from argan nuts native to southwest Morocco (around Agadir and Essaouira). Pure cosmetic argan oil has a very faint, pleasant nutty smell and absorbs quickly without leaving a greasy sheen. Culinary argan oil is made from toasted nuts, has a deep golden color and delicious nutty taste. Beware of cheap argan oil sold in clear plastic bottles in busy souks: it is almost always adulterated with cheap vegetable or sunflower oil.",
    category: "food",
    cities: ["agadir", "essaouira", "general"],
    tags: ["argan", "shopping", "cooperative", "cosmetics"],
    tips: [
      "Avoid tourist-shuttle 'argan museums' along highways; they are highly marked-up commission traps for tour buses.",
      "Look for officially certified women's cooperatives registered with the government (EFAS, UCFA). Pure, authentic argan oil should cost no less than 200-300 MAD ($20-$30) for a high-quality 250ml bottle.",
      "Culinary argan oil is perfect for dipping bread or making Amlou (a delicious Moroccan spread made of argan oil, almonds, and honey)."
    ],
    links: [{ label: "View Curated Shop Finder", url: "/finder/shop" }]
  },
  {
    id: "essaouira-fish-market-dining",
    question: "Essaouira Fish Market: How to order, blue boats, and grilling tips",
    answer: "The port of Essaouira is packed with iconic bright-blue wooden fishing boats returning with fresh daily catches. For an authentic culinary adventure, skip standard restaurants and go directly to the open-air fish stalls near the port entrance or inside the fish market. You can hand-select fresh sardines, sea bass, red mullet, prawns, lobster, and calamari. The vendor will weigh them, charge you a flat rate per kilo, and have them grilled fresh over hot charcoal on the spot.",
    category: "food",
    cities: ["essaouira"],
    tags: ["seafood", "fish market", "port", "grill"],
    tips: [
      "A full, generous seafood lunch for two (with bread, salad, and soft drinks) should cost between 100 to 200 MAD depending on seafood choices (lobster and prawns cost more).",
      "Always agree on the final price per item or weight before they put the fish on the grill to avoid 'surprise' tourist bill markups."
    ],
    links: [{ label: "Browse Essaouira Restaurants", url: "/finder/food?city=essaouira" }]
  },
  {
    id: "morocco-alcohol-nightlife",
    question: "Alcohol in Morocco: Licensed venues, supermarket buying, and lounges",
    answer: "While Morocco is a Muslim country and many locals do not drink, alcohol is widely available and legal in licensed premises. You can purchase wine, beer (try local brands Casablanca, Flag Spéciale, or Stork), and spirits at designated liquor rooms inside larger supermarkets (Carrefour, Marjane, Aswak Assalam) or at licensed bars, hotel lounges, and nightclubs. Note that supermarkets close their alcohol sections during major religious holidays (like Ramadan).",
    category: "food",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["alcohol", "wine", "nightlife", "supermarket", "carrefour"],
    tips: [
      "Never consume alcohol in public spaces or on public streets; it is highly illegal and socially offensive.",
      "In Essaouira, many boutique riads and select seaside rooftop cafes serve excellent local wines (such as Val d'Argan from the local Essaouira vineyard).",
      "Marrakech's Gueliz district is the modern epicentre of nightlife, packed with elegant cocktail lounges, sports bars, and world-class nightclubs."
    ]
  },
  {
    id: "souk-shopping-bargaining",
    question: "Souk Shopping & Bargaining: Carpets, thuya wood, and custom perfume",
    answer: "Shopping in Moroccan souks is an art form. You will find hand-woven wool rugs, intricate brass lamps, leather slippers (babouches), pure musk/amber traditional perfumes, and hand-tailored kaftans. There are no fixed prices in traditional souks. Shop owners expect you to bargain, and haggling is a friendly, social interaction.",
    category: "food",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["shopping", "bargaining", "souks", "carpets", "perfume"],
    tips: [
      "Never show excessive excitement for an item. Ask for the price of 2 or 3 items first to throw off the vendor's calculation.",
      "Start your counter-offer at 1/3 of their initial price, then slowly negotiate up. A reasonable deal is usually settled around 40-50% of their initial offer.",
      "If you cannot agree, politely say 'La, Shukran' (No, thank you) and walk away. Touts will often call you back with a final lower price.",
      "For authentic Thuya wood carving (made from rare fragrant roots), Essaouira is the national hub. For custom-blended amber, jasmine, and musk perfumes, Marrakech's old spice square (Rahba Kedima) is unmatched."
    ],
    links: [{ label: "Explore Souk Maps & Shopping Guides", url: "/finder/shop" }]
  },

  // CLIMATE, WEATHER & PACKING
  {
    id: "essaouira-wind-weather-packing",
    question: "Essaouira Wind (The Alizé): Kitesurfing seasons and clothing layering",
    answer: "Essaouira is famous for the 'Alizé'—strong coastal trade winds that blow consistently, particularly from April to September. While this makes it a global paradise for kitesurfing and windsurfing, it means the beach can be sand-blasted and cold for standard sunbathing. Even during hot summer months, the temperature rarely exceeds 25°C, and ocean waters are crisp (average 18°C).",
    category: "climate",
    cities: ["essaouira"],
    tags: ["wind", "kitesurf", "weather", "packing", "layering"],
    tips: [
      "Kitesurfing peak season is from June to August, when winds are strongest. Excellent kitesurfing schools line the main bay.",
      "Packing essential: **Always pack a high-quality windbreaker or light jacket, and a scarf** to protect against the wind and flying sand.",
      "Dress in layers: the sun is strong during the day, but as soon as the wind picks up or night falls, the temperature drops rapidly."
    ]
  },
  {
    id: "modesty-vs-beachwear",
    question: "Modesty vs. Beachwear: Dress codes in old Medinas, cities, and beaches",
    answer: "Morocco is a conservative, highly respectful culture. Modesty is deeply valued. While bikinis, shorts, and tank tops are perfectly acceptable inside private hotel resorts, beach clubs, or swimming pools, wearing them in public town centers, busy souks, or traditional medinas is considered offensive and will attract unwanted attention (stares, catcalls).",
    category: "climate",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["clothing", "etiquette", "modesty", "culture", "women"],
    tips: [
      "Golden rule: Keep your shoulders and knees covered when walking through cities, medinas, and rural villages (applicable to both men and women).",
      "Linen or loose cotton trousers, maxi dresses, and t-shirts are excellent choices for staying cool while maintaining cultural respect.",
      "Carry a light shawl or scarf in your bag; it is incredibly useful for covering shoulders when visiting mosques (where allowed) or protecting against the desert sun."
    ]
  },
  {
    id: "weather-monthly-sea-temps",
    question: "Moroccan Weather: UV indices, summer desert heat, and Atlantic sea temperatures",
    answer: "Morocco's climate varies immensely by region. Agadir enjoys mild, sunny weather year-round (warm winters, cool summers). Marrakech and the inland plains have scorching desert summers (frequently exceeding 45°C/113°F) and cool, pleasant winters. The Atlantic Ocean (Agadir, Essaouira) remains chilly year-round due to Canary Currents, averaging 16°C in winter and peaking at only 21°C in August.",
    category: "climate",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["weather", "temperature", "uv index", "summer", "ocean"],
    tips: [
      "In summer (June to August), the UV Index regularly reaches a hazardous 11+. High-SPF sunscreen, wide-brimmed hats, and sunglasses are mandatory.",
      "Best months for a combined sightseeing and desert trip are March to May (Spring) and September to November (Autumn) when temperatures are beautifully balanced."
    ]
  },

  // SAFETY, SCAMS & CULTURE
  {
    id: "is-morocco-safe-night",
    question: "Is Morocco Safe? Solos, couples, night safety, and tourist police",
    answer: "Morocco is one of the safest countries in Africa for travelers. Violent street crime is exceptionally rare due to stringent laws and a dedicated national 'Brigade Touristique' (Tourist Police) who patrolled tourist areas in civilian clothes. Frictions are almost entirely commercial: inflated prices, persistent street touts, and minor pocket-picking in extremely crowded souks. Walking at night is safe in well-lit areas, but avoid dark, empty medina alleyways late at night.",
    category: "safety",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["safety", "solo travel", "night", "police", "crime"],
    tips: [
      "Avoid poorly-lit, narrow alleyways late at night. Stick to main thoroughfares and take a taxi if returning to your Riad after midnight.",
      "Solo female travelers may experience persistent verbal catcalling. The best response is to wear sunglasses, walk purposefully, and completely ignore the remarks. Do not engage or look angry; simply walk by as if they are invisible.",
      "In any emergency, look for Tourist Police booths located near major medina gates."
    ],
    links: [{ label: "Verify City Safety Scores", url: "/safety" }]
  },
  {
    id: "common-medina-scams",
    question: "Medina Scams: Henna women, closed roads, and unsolicited guides",
    answer: "While Moroccans are incredibly welcoming, tourist hotspots have a few classic, predictable commercial scams. Knowing them beforehand completely disarms them:",
    category: "safety",
    cities: ["marrakech", "general"],
    tags: ["scams", "henna", "medina", "guides", "tannery"],
    tips: [
      "**The Henna Grab**: In Jemaa El Fna, henna women will grab your hand, start drawing a rapid design, and then demand 200+ MAD. Keep your hands close or in pockets, and say a firm 'No' immediately if approached.",
      "**'This Way is Closed'**: A young man will tell you that the street, market, or mosque is closed today (e.g. for Ramadan, Friday prayers, or a festival) and offer to show you a 'special' alternative view (which always leads to a high-pressure carpet shop or tanneries). Ignore them. Keep walking; your map is correct.",
      "**The Unsolicited Guide**: A local will walk with you and chat in a friendly way, guiding you through the medina. Even if they say 'no money, I just want to practice my English', they will demand a tip (50-100 MAD) when you arrive. Politely say: 'No thank you, I have a map. La, Shukran'."
    ],
    links: [{ label: "Detailed Scam Prevention Guide", url: "/safety" }]
  },
  {
    id: "currency-exchange-tipping",
    question: "Money & Currency: Tipping culture (Baksheesh), cash ATMs, and exchange",
    answer: "Morocco runs on the Moroccan Dirham (MAD). It is a closed currency, meaning you cannot easily buy it outside Morocco. Cash is highly preferred for small shops, cafes, street stalls, and taxis. High-end hotels, major supermarkets, and restaurants accept international credit cards, but cards carry transaction fees. Tipping, known locally as 'Baksheesh', is deeply integrated into daily transactions as a sign of respect and appreciation.",
    category: "safety",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["currency", "money", "atm", "tipping", "cash"],
    tips: [
      "Tipping standards: Round up the bill in casual cafes (e.g. leave 2-5 MAD). Leave 10% in sit-down restaurants. Give parking guardians 5-10 MAD.",
      "Always carry coins and small notes (10, 20, 50 MAD). Taxi drivers and small vendors rarely have change for 200 MAD notes.",
      "Use official bank ATMs (like BMCE, Attijariwafa, or Al Barid Bank) to withdraw Dirhams; avoid independent non-bank airport ATMs that charge high conversion markups."
    ],
    links: [{ label: "Financial Preparation Setup", url: "/travel-essentials" }]
  },
  {
    id: "local-etiquette-cats",
    question: "Local Etiquette: Ramadan rules, photography etiquette, and Medina cats",
    answer: "Morocco has beautiful local traditions. Photography: Always ask permission before taking a photo of a local person or their shop stall. Many will request a small tip (5-10 MAD) for posing (especially water sellers and street performers). Ramadan: During the holy month of fasting, do not eat, drink, or smoke in public streets during daylight hours out of respect. Cats: Essaouira and Marrakech medinas are world-famous for thousands of community-cared cats. Locals feed, clean, and co-exist with them harmoniously.",
    category: "culture",
    cities: ["agadir", "essaouira", "marrakech", "general"],
    tags: ["ramadan", "photography", "cats", "etiquette", "religion"],
    tips: [
      "To ask for a photo, say: 'Momkin soura?' (May I take a picture?). If they decline, respect their choice and put the camera away.",
      "Do not feed stray cats cheap spiced human food; buy a small packet of cat dry food from local grocery stalls (Hanout) for 5 MAD to feed them safely.",
      "Say 'La, Shukran' (No, thank you) with a warm smile and a hand placed over your heart—this is the most polite, universally respected way to decline any offer or vendor."
    ],
    links: [{ label: "Essential Language Phrasebook", url: "/language" }]
  },

  // EXPANDED REGIONAL TRANSIT & ARRIVAL FAQS
  {
    id: "tangier-airport-port-transfers",
    question: "Tangier Airport (TNG) & Tanger Ville Port: Transfers, taxis, and ferry terminal tips",
    answer: "Tangier Ibn Battouta Airport (TNG) is 12 km southwest of the city center. There are no direct public buses or train lines serving TNG. Grand Taxis wait outside arrivals with official regulated rates posted on a board (~100-150 MAD daytime, ~150-200 MAD night/after 20:00 to central Tangier or the Medina). Tanger Ville Port Ferry Terminal, on the other hand, is located directly adjacent to the city center at the foot of the Medina. From the ferry terminal, you can walk straight into the Medina or take a blue Petit Taxi for 15-20 MAD.",
    category: "transit",
    cities: ["tangier"],
    tags: ["airport", "port", "ferry", "taxi", "transfer"],
    tips: [
      "At TNG airport, point to the official taxi rate board outside arrivals if a driver demands more than the posted rate.",
      "At Tanger Ville Port, ignore touts inside/outside the security gate offering private tours; walk straight to the taxi rank or main street.",
      "Blue Petit Taxis inside Tangier city must use the meter ('compteur'); insist on it before closing the door."
    ],
    links: [{ label: "Transport Guide & Route Engine", url: "/transport" }]
  },
  {
    id: "rabat-airport-tramway",
    question: "Rabat Airport (RBA) Transfers & Tramway Network Rules",
    answer: "Rabat-Salé Airport (RBA) is located 8 km northeast of Rabat in Salé. The cheapest transfer is the official AE Airport Express Shuttle Bus (25 MAD), which departs outside arrivals synchronized with flight landings and runs directly to Rabat Ville Train Station (approx. 20-30 mins). Grand Taxis charge a flat rate of ~150 MAD. Once in the city, the Rabat-Salé Tramway is clean, modern, and cheap (6 MAD per single ticket). It features two lines (Line 1 & Line 2) connecting key landmarks in Rabat and Salé across the Bou Regreg river.",
    category: "transit",
    cities: ["rabat"],
    tags: ["airport", "tramway", "bus", "transfer", "taxi"],
    tips: [
      "Buy tramway tickets (6 MAD) at platform kiosks before boarding; validate your ticket at the yellow machine inside the tram car immediately.",
      "The AE Shuttle Bus driver accepts cash in MAD; if you have no cash, ATMs are available inside RBA arrivals.",
      "Rabat Petit Taxis are bright blue and religiously use meters without hassle."
    ],
    links: [{ label: "View Transport Map", url: "/transport" }]
  },
  {
    id: "chefchaouen-ctm-vs-grand-taxi",
    question: "Getting to Chefchaouen from Fes or Tangier: CTM Bus vs. Grand Taxi",
    answer: "Chefchaouen has no airport or train station, so you must travel by road. CTM and Supratours intercity buses are the most comfortable and reliable choice (~75–90 MAD per seat, ~3.5 to 4 hours from Fes or Tangier). Pre-booking CTM tickets on their official app 1-2 days ahead is strongly recommended during high season as seats sell out fast. Alternatively, shared Grand Taxis depart continuously from Fes Gare Routière or Tangier Grand Taxi station (~70-80 MAD per seat, 6 passengers per car, ~3 hours). You can also hire a private Grand Taxi charter (~400-500 MAD for the full car) for direct hotel-to-hotel travel.",
    category: "transit",
    cities: ["chefchaouen", "fes", "tangier"],
    tags: ["bus", "ctm", "grand taxi", "intercity", "transfer"],
    tips: [
      "Pre-book CTM tickets online via the CTM app during spring/autumn peak tourist months.",
      "If taking a shared Grand Taxi, buying 2 seats for yourself gives extra elbow room on winding mountain roads.",
      "The Chefchaouen bus station is at the bottom of the hill; take a blue Petit Taxi (10-15 MAD) up to Plaza Outa El Hammam with luggage."
    ],
    links: [{ label: "Intercity Transport Details", url: "/transport" }]
  },
  {
    id: "dakhla-airport-lagoon-transfers",
    question: "Dakhla Airport (VIL) & Lagoon Shuttle Logistics (PK25 & Lassarga)",
    answer: "Dakhla Airport (VIL) is located right inside Dakhla town, just 2 km from the local market. However, most kitesurfers stay at lagoon eco-resorts located 25-30 km north (PK25 / PK28) or south (Lassarga). There are no public city buses running to the kitesurf lagoons. Most lagoon resorts include complimentary or paid airport shuttle transfers (approx. 150-200 MAD per vehicle each way) when you book your stay. If booking independently, negotiate a Grand Taxi from Dakhla town or airport for 150-200 MAD to the lagoon.",
    category: "transit",
    cities: ["dakhla"],
    tags: ["airport", "lagoon", "transfer", "kitesurf", "shuttle"],
    tips: [
      "Confirm airport shuttle pickup details with your lagoon resort at least 24 hours before your flight lands.",
      "If staying in Dakhla town, Petit Taxis around town cost a flat 5 MAD per ride.",
      "Excursions to Dune Blanche or Dragon Island require a 4x4 vehicle with a driver (~500-700 MAD half day)."
    ],
    links: [{ label: "Check Dakhla Travel Details", url: "/transport" }]
  },
  {
    id: "merzouga-desert-transport",
    question: "How to Reach Merzouga & Erg Chebbi Desert: Supratours, Taxis, or Rental Car",
    answer: "Reaching the Erg Chebbi dunes in Merzouga from Marrakech or Fes requires planning. Supratours operates a direct overnight intercity bus from Marrakech directly to Merzouga village (~240 MAD, approx. 12 hours), dropping off right at desert staging posts. From Fes, CTM and Supratours buses run to Rissani or Erfoud, where local Grand Taxis connect to Merzouga (approx. 20-30 MAD per seat). If renting a car, the paved roads (N9, N10, N13) all the way to Merzouga village are excellent and 2WD accessible—you do NOT need a 4x4 until you enter the actual sand dunes.",
    category: "transit",
    cities: ["merzouga", "marrakech", "fes"],
    tags: ["desert", "bus", "supratours", "road trip", "sahara"],
    tips: [
      "Book the Supratours Marrakech-Merzouga direct bus 2-3 days in advance as it is the only direct public route.",
      "Avoid driving past sunset on desert highways due to unlit vehicles and stray livestock.",
      "Gas stations are frequent along the N13 (Rissani, Erfoud, Merzouga), but top up full before long desert stretches."
    ],
    links: [{ label: "Desert Route Planner", url: "/transport" }]
  },
  {
    id: "ouarzazate-studios-ait-benhaddou-logistics",
    question: "Ouarzazate Film Studios & Aït Benhaddou Day Trip Logistics",
    answer: "Ouarzazate is the Hollywood of Morocco. Atlas Film Studios and CLA Studios are located 5 km northwest of the city center along the N9 highway; a local Petit Taxi from Ouarzazate center costs 15-20 MAD (metered) and admission is ~80 MAD. To reach the UNESCO Ksar of Aït Benhaddou (30 km northwest), take a shared Grand Taxi from Ouarzazate station to Tabounte/Aït Benhaddou (~10-15 MAD per seat), or hire a private Grand Taxi for ~150-200 MAD roundtrip with 2 hours wait time included. Access across the pedestrian bridge into Aït Benhaddou is 100% free.",
    category: "transit",
    cities: ["ouarzazate"],
    tags: ["film studio", "ait benhaddou", "day trip", "taxi", "kasbah"],
    tips: [
      "Ignore fake ticket vendors near the Aït Benhaddou river bridge; public entry to the ksar is completely free.",
      "Hire a private Grand Taxi driver in Ouarzazate for a combined day trip (Aït Benhaddou + Atlas Studios + Fint Oasis) for ~350-450 MAD total.",
      "Best light for photographing Atlas Studios and Aït Benhaddou is early morning or late afternoon."
    ],
    links: [{ label: "Ouarzazate City Guide", url: "/transport" }]
  }
];
