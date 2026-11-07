A flat quiz asks someone seeking a relaxing hammam if they want "rugged mountain trails." That feels generic and breaks immersion.

A **decision-tree quiz** changes the conversation entirely: **Question 1 determines the user’s "Road," and Questions 2 to 5 narrow down the exact matching criteria** (energy, timing, companion, and specific activity parameters).

Here is the complete 5-question branching architecture designed specifically for Moroccan travel listings.

---

```
                       [Question 1: The Core Intent]
                      /              |              \
                     /               |               \
          ROAD A: 🕌                 ROAD B: 🏜️              ROAD C: 🌿
    Heritage & Old Towns       Wild Nature & Adventure   Wellness, Living Arts & Calm
```

---

## 🕌 ROAD A: Heritage, Old Towns & Culture
*(User chose A: Monuments & Ancient Heritage)*

### Question A2: What kind of atmosphere are you looking for?
* **A1) Quiet History & Architecture 🏛️**  
  *(Ancient ramparts, palaces, restored medinas, ruins, and quiet museums)*  
  `→ Filters: tags: ['monument', 'historical', 'museum'], crowdLevel: 'quiet' | 'balanced'`
* **A2) The Vibrant Pulse of the Souks 🏺**  
  *(Spice alleys, artisan leathercraft, olive stalls, bargaining, and vibrant street life)*  
  `→ Filters: tags: ['shopping', 'authentic', 'cultural-tour'], crowdLevel: 'bustling'`

### Question A3: What is your time and walking appetite?
* **A) Quick Highlight (1 – 2 Hours) ⏱️**  
  *(Compact site, minimal steps, close to city center)*  
  `→ Filters: durationMinutes: <= 120, energyLevel: 'relaxed'`
* **AB) Half-Day Deep Immersion (3 – 4 Hours) 👟**  
  *(Extensive walking through stone labyrinths and multiple quarters)*  
  `→ Filters: durationMinutes: >= 180, energyLevel: 'active'`

### Question A4: Who is exploring with you?
* **A) Solo Explorer 🎒** `→ Filters: groupTypes: ['solo'], archetypeAffinity: ['nomad', 'culture']`
* **B) Romantic / Couple 🕯️** `→ Filters: groupTypes: ['couple'], vibeTags: ['serene', 'panoramic']`
* **C) Family with Kids or Seniors 👨‍👩‍👧** `→ Filters: groupTypes: ['family', 'seniors'], isKidFriendly: true, friction.walkingFatigue: <= 2`
* **D) Group of Friends 👥** `→ Filters: groupTypes: ['friends']`

### Question A5: How do you prefer to navigate?
* **A) Independent Free-Wandering 🗺️**  
  *(Self-guided, explore at my own pace, walk-in ticket)*  
  `→ Filters: walkInOkay: true, ticketingMode: 'on-site-counter-only' | 'free-no-ticket'`
* **B) Storyteller & Local Insider 🗣️**  
  *(Licensed guide to explain secret history, hidden corners, and handle navigation)*  
  `→ Filters: hasEnglishGuide: true, hasLocalGuide: true`

---

## 🏜️ ROAD B: Wild Nature & Open Landscapes
*(User chose B: Nature & Open Landscapes)*

### Question B2: Which Moroccan terrain calls to you?
* **B1) Waves & Atlantic Coastal Cliffs 🌊**  
  *(Surfing breaks, sea caves, prehistoric footprints, and fishing villages)*  
  `→ Filters: tags: ['coastal', 'surf-kitesurf', 'nature']`
* **B2) Canyons, Mountain Springs & Palm Oases 🌴**  
  *(Rock canyons, freshwater swimming pools, and Atlas foothill trails)*  
  `→ Filters: tags: ['mountain', 'hiking-trek', 'nature']`
* **B3) Dunes, Wheels & Desert Trails 🐪**  
  *(Sunset camel caravans, sand dunes, quad biking, and estuary wildlife)*  
  `→ Filters: tags: ['desert-sport', 'camel-ride', 'off-the-beaten-path']`

### Question B3: What energy level fits your mood?
* **A) Scenic, Chill & Low-Stamina 🌅**  
  *(Gentle walking, scenic viewpoints, photo-stops, sunset camel stroll)*  
  `→ Filters: energyLevel: 'relaxed', fitnessLevel: 'Relaxed'`
* **B) High-Action & Sweaty 🧗**  
  *(Catching waves, scrambling over canyon rocks, quad riding)*  
  `→ Filters: energyLevel: 'active' | 'intense', sportIntent: 'experience'`

### Question B4: How much of your day do you want to commit?
* **A) Half-Day Trip (2 – 4 Hours) ⛅**  
  *(Quick trip just on the outskirts of the city; back in time for lunch/dinner)*  
  `→ Filters: durationMinutes: <= 240, distanceFromCenterKm: <= 20`
* **B) Full-Day Outpost Expedition (5+ Hours) 🚐**  
  *(Venture far into national parks, deep valleys, or hidden coastal villages)*  
  `→ Filters: durationMinutes: >= 300`

### Question B5: Who is in your travel party?
* **A) Solo / Friends (Seeking Adventure) 🎒**  
  `→ Filters: groupTypes: ['solo', 'friends'], skillLevel: ['beginner', 'intermediate']`
* **B) Couple (Seeking Scenic Memories) 🕯️**  
  `→ Filters: groupTypes: ['couple'], hasSunsetView: true`
* **C) Family with Children 👨‍👩‍👧**  
  `→ Filters: isKidFriendly: true, friction.physicalIntensity: <= 2`

---

## 🌿 ROAD C: Wellness, Living Arts & Calm
*(User chose C: Moroccan Arts & Wellness Rituals)*

### Question C2: How would you like to unwind?
* **C1) The Traditional Hammam & Steam Bath 🧖‍♀️**  
  *(Heated marble, black eucalyptus soap scrub, and pure argan oil massage)*  
  `→ Filters: tags: ['hammam', 'wellness']`
* **C2) Hands-On Artisan Masterclasses 🏺**  
  *(Pottery throwing, tagine cooking classes, or leathercraft with master artisans)*  
  `→ Filters: tags: ['cooking-class', 'cultural-tour', 'authentic']`
* **C3) Botanical Sanctuaries & Quiet Living Nature 🦩**  
  *(Shaded gardens, exotic aviary valleys, crocodile conservation parks)*  
  `→ Filters: tags: ['garden', 'nature', 'botanical'], crowdLevel: 'quiet'`

### Question C3: What tier of experience do you prefer?
* **A) Authentic & Traditional (Local Style) 🪙**  
  *(Authentic neighborhood prices, genuine local culture, no luxury markup)*  
  `→ Filters: lifestyle: ['lean', 'balanced'], price: <= 2`
* **B) Premium & Pampered Sanctuary ✨**  
  *(Private cabins, plush bathrobes, organic argan infusions, peaceful elegance)*  
  `→ Filters: lifestyle: ['premium'], hasPrivateOption: true, price: >= 3`

### Question C4: How much time do you want to dedicate?
* **A) An Express Reset (1 – 2 Hours) ⏱️**  
  *(A focused scrub & massage, or a quick garden stroll)*  
  `→ Filters: durationMinutes: <= 120`
* **B) An Unrushed Half-Day (3 – 4 Hours) 🍵**  
  *(Full multi-step body ritual with mint tea lounge or extended cooking workshop)*  
  `→ Filters: durationMinutes: >= 180`

### Question C5: What is your privacy preference?
* **A) Private & Exclusive (Couples / Solo Retreat) 🔒**  
  *(Private treatment rooms, quiet environment, no group mixing)*  
  `→ Filters: hasPrivateOption: true`
* **B) Social, Open & Family-Friendly 👨‍👩‍👧**  
  *(Shared workshops, open gardens, fun for families or small groups)*  
  `→ Filters: isKidFriendly: true, groupTypes: ['family', 'friends']`

---

## How This Connects to Your Data Engine

Instead of generic tags, every answer directly eliminates irrelevant data in your database query:

| User Route Example | Matched Listing |
| :--- | :--- |
| **Q1 (B: Nature)** → **B2 (B2: Canyon/Oasis)** → **B3 (B: High-Action)** → **B4 (A: Half-day)** | ➔ **Paradise Valley Canyon Swim** (`agadir-paradise-valley`) |
| **Q1 (C: Wellness)** → **C2 (C1: Hammam)** → **C3 (B: Premium)** → **C5 (A: Private)** | ➔ **Argan Palace Hammam & Massage** (`agadir-argan-palace-hammam`) |
| **Q1 (A: Heritage)** → **A2 (A1: History/Ruins)** → **A3 (A: 1-2 Hours)** → **A4 (B: Couple)** | ➔ **Agadir Oufella Sunset Ruins** (`agadir-oufella-ruins`) |
| **Q1 (A: Heritage)** → **A2 (A2: Souks/Vibrant)** → **A3 (B: Half-day)** → **A5 (A: Independent)** | ➔ **Souk El Had Explorer** (`agadir-souk-el-had`) |

### Key Benefits of This Tree:
1. **Never exceeds 5 questions:** The user stays engaged and completes it in under 45 seconds.
2. **Context-aware:** A wellness seeker is never asked about hiking fitness; an outdoor adventurer is never asked about spa privacy.
3. **Pinpoint Recommendations:** By Question 5, you have narrowed the catalog down to the top 2–4 listings with a 95%+ affinity match.