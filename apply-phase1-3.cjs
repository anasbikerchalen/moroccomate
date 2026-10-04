const fs = require('fs');
const path = require('path');
const base = 'c:/Users/viet/Downloads/morocco-journey-guide (29)/finder-website/src';

function editFile(relPath, edits) {
  const file = path.join(base, relPath);
  let c = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  for (const [search, replacement] of edits) {
    if (!c.includes(search)) {
      throw new Error('NOT FOUND in ' + relPath + ' :: ' + JSON.stringify(search.slice(0, 100)));
    }
    c = c.replace(search, () => replacement);
  }
  fs.writeFileSync(file, c.replace(/\n/g, '\r\n'), 'utf8');
  console.log('OK ' + relPath);
}

function editFileRegex(relPath, edits) {
  const file = path.join(base, relPath);
  let c = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  for (const [pattern, replacement] of edits) {
    const re = new RegExp(pattern);
    if (!re.test(c)) {
      throw new Error('REGEX NOT FOUND in ' + relPath + ' :: ' + pattern.slice(0, 100));
    }
    c = c.replace(re, () => replacement);
  }
  fs.writeFileSync(file, c.replace(/\n/g, '\r\n'), 'utf8');
  console.log('OK(regex) ' + relPath);
}

editFile('components/finder/ResultPage.tsx', [
  [
`import { getTagForOptionId } from '../../data/explore/questions';`,
`import { getTagForOptionId, getQuizWeightForQuestionId, QUIZ_STOP_WORDS } from '../../data/explore/questions';`
  ],
  [
`  stone: 'bg-stone-100 text-stone-600 border-stone-200'
};`,
`  stone: 'bg-stone-100 text-stone-600 border-stone-200'
};

// Price fields are mixed types across listing categories: shops use string
// priceLevel ('budget' | 'mid-range' | 'premium' | 'luxury') while others use a
// numeric priceMultiplier. Normalize both to a comparable rank so price sorting
// never produces NaN / garbage order.
const priceRank = (v: any): number => {
  if (typeof v === 'number' && isFinite(v)) return v;
  if (typeof v === 'string') {
    const map: Record<string, number> = { 'budget': 1, 'mid-range': 2, 'mid': 2, 'premium': 3, 'luxury': 4 };
    return map[v.trim().toLowerCase()] ?? 2;
  }
  return 2;
};`
  ],
  [
`      if (filters.isNoHassle) {
        totalCriteria++;
        const hasGoodIntel = item.id === 'sh-mar-1' || item.id === 'sh-mar-2';
        if ((item as any).pricingModel === 'fixed' || hasGoodIntel) matchScore++;
      }`,
`      if (filters.isNoHassle) {
        totalCriteria++;
        // Data-driven "low pressure" signal: fixed-price shops never haggle-hassle.
        // Replaces the old hardcoded 2-shop ID list so every city qualifies.
        if ((item as any).pricingModel === 'fixed') matchScore++;
      }`
  ],
  [
`        const answers = Array.isArray(answerValue) ? answerValue : [answerValue];`,
`        const answers = Array.isArray(answerValue) ? answerValue : [answerValue];
        // Weighted scoring tiers (declared on each question in questions.ts):
        // hard = non-negotiable (gains 3, penalizes 2 on a confirmed miss),
        // strong = 2x signal, soft = 1x normal weight (default)
        const weightTier = getQuizWeightForQuestionId(questionId);
        const weightGain = weightTier === 'hard' ? 3 : weightTier === 'strong' ? 2 : 1;
        const missPenalty = weightTier === 'hard' ? -2 : 0;`
  ],
  [
`\n            totalCriteria++;\n`,
`\n            totalCriteria += weightGain;\n`
  ],
  [
`            if (questionId === 'base-lifestyle' || questionId === 'ft-style') {
               const tag = getTagForOptionId(answerId);
               if (item.lifestyle?.includes(tag as any)) matchScore++;
               return;
            }`,
`            if (questionId === 'base-lifestyle' || questionId === 'ft-style') {
               const tag = getTagForOptionId(answerId);
               // Shops store spending style as the structured priceLevel (canonical shop
               // schema), so quiz budget answers now actually personalize shop rankings
               if ((item as any).priceLevel) {
                 const priceMap: Record<string, string[]> = {
                   'lean': ['budget'],
                   'balanced': ['mid-range'],
                   'premium': ['premium', 'luxury']
                 };
                 if (priceMap[tag]?.includes((item as any).priceLevel)) matchScore += weightGain;
                 else matchScore += missPenalty;
               } else if (item.lifestyle) {
                 if ((item.lifestyle as any).includes(tag)) matchScore += weightGain;
                 else matchScore += missPenalty;
               }
               return;
            }`
  ],
  [
`            if (questionId === 'base-group') {
               const tag = getTagForOptionId(answerId);
               if (item.groupTypes?.includes(tag as any)) matchScore++;
               return;
            }`,
`            if (questionId === 'base-group') {
               const tag = getTagForOptionId(answerId);
               if (item.groupTypes?.includes(tag as any)) matchScore += weightGain;
               return;
            }
            if (questionId === 'food-diet') {
               // Dietary needs are non-negotiable: real boolean fields first, text
               // fallback second. Only penalize when the data confirms a miss.
               const dietId = String(answerId).toLowerCase();
               const dietBool: Record<string, string> = { 'halal': 'isHalal', 'vegetarian': 'isVegetarianFriendly', 'alcohol': 'servesAlcohol' };
               const boolKey = dietBool[dietId];
               const dietValue = boolKey ? (item as any)[boolKey] : undefined;
               const dietMatch = dietValue === true
                 || (Array.isArray(item.vibeTags) && item.vibeTags.some((v: string) => v.toLowerCase().includes(dietId)));
               if (dietMatch) matchScore += weightGain;
               else if (dietValue === false) matchScore += missPenalty;
               return;
            }
            if (questionId === 'food-cuisine') {
               const cuisineId = String(answerId).toLowerCase();
               const foodStylesArr = Array.isArray((item as any).foodStyles) ? (item as any).foodStyles.map((s: any) => String(s).toLowerCase()) : [];
               let cuisineMatch = false;
               if (cuisineId === 'moroccan-traditional') {
                 cuisineMatch = foodStylesArr.includes('moroccan') || foodStylesArr.includes('berber');
               } else if (cuisineId === 'international') {
                 cuisineMatch = foodStylesArr.some(s => ['international', 'italian', 'french', 'spanish', 'european', 'asian', 'pizza', 'fusion'].includes(s));
               } else if (cuisineId === 'cafe-pastry') {
                 cuisineMatch = foodStylesArr.some(s => ['cafe', 'bakery', 'patisserie'].includes(s));
               } else if (cuisineId === 'seafood') {
                 cuisineMatch = foodStylesArr.includes('seafood');
               }
               if (cuisineMatch) matchScore += weightGain;
               return;
            }
            if (questionId === 'sleep-location') {
               // Location feel: match against the real location data on stay listings
               const locId = String(answerId).toLowerCase();
               const locSummary = String((item as any).locationSummary || '').toLowerCase();
               const hood = String((item as any).neighborhood || '').toLowerCase();
               const isMedinaPlace = (item as any).nearMedina === true || locSummary.includes('medina') || hood.includes('medina');
               const isNaturePlace = ['countryside', 'nature', 'desert', 'mountain', 'oasis', 'agricultural'].some(k => locSummary.includes(k));
               let locMatch = false;
               if (locId.includes('medina')) locMatch = isMedinaPlace;
               else if (locId === 'countryside' || locId.includes('nature')) locMatch = isNaturePlace;
               else if (locId === 'ville-nouvelle') locMatch = !isMedinaPlace && !isNaturePlace;
               if (locMatch) matchScore += weightGain;
               return;
            }`
  ],
  [
`\n              matchScore++;\n`,
`\n              matchScore += weightGain;\n`
  ],
  [
`              const searchableText = [
                item.name, item.title, item.description, item.type, item.category, (item as any).cuisine,
                ...vibeTags, ...foodStyles, ...experienceTypes, ...mealTypes, ...amenities
              ].filter(Boolean).map((t: any) => t.toString().toLowerCase());`,
`              const searchableText = [
                item.name, item.title, item.description, item.type, item.category, (item as any).cuisine,
                String((item as any).neighborhood || ''), String((item as any).locationSummary || ''),
                ...vibeTags, ...foodStyles, ...experienceTypes, ...mealTypes, ...amenities
              ].filter(Boolean).map((t: any) => t.toString().toLowerCase());`
  ],
  [
`      const matchPercentage = totalCriteria > 0 ? Math.round((matchScore / totalCriteria) * 100) : 100;`,
`      // Clamp so hard-filter penalties can never push the score below 0
      const matchPercentage = totalCriteria > 0
        ? Math.max(0, Math.min(100, Math.round((matchScore / totalCriteria) * 100)))
        : 100;`
  ],
  [
`    } else if (sortBy === 'price_low') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier ?? a.priceLevel ?? 1;
        const pB = b.priceMultiplier ?? b.priceLevel ?? 1;
        return pA - pB;
      });
    } else if (sortBy === 'price_high') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier ?? a.priceLevel ?? 1;
        const pB = b.priceMultiplier ?? b.priceLevel ?? 1;
        return pB - pA;
      });
    }`,
`    } else if (sortBy === 'price_low') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier !== undefined ? priceRank(a.priceMultiplier) : priceRank(a.priceLevel);
        const pB = b.priceMultiplier !== undefined ? priceRank(b.priceMultiplier) : priceRank(b.priceLevel);
        return pA - pB;
      });
    } else if (sortBy === 'price_high') {
      return [...scored].sort((a: any, b: any) => {
        const pA = a.priceMultiplier !== undefined ? priceRank(a.priceMultiplier) : priceRank(a.priceLevel);
        const pB = b.priceMultiplier !== undefined ? priceRank(b.priceMultiplier) : priceRank(b.priceLevel);
        return pB - pA;
      });
    }`
  ]
]);

editFileRegex('components/finder/ResultPage.tsx', [
  [
`const answerParts = answerId\\.toString\\(\\)\\.toLowerCase\\(\\)\\.split\\('-'\\);\\s*const hasMatch = answerParts\\.some\\(\\(part: string\\) =>\\s*searchableText\\.some\\(\\(text: string\\) => text\\.includes\\(part\\)\\)\\s*\\);\\s*if \\(hasMatch\\) matchScore\\+\\+;`,
`const answerParts = answerId.toString().toLowerCase().split('-')
                .filter((part: string) => part.length >= 4 && !QUIZ_STOP_WORDS.has(part));
              const hasMatch = answerParts.length > 0
                ? answerParts.some((part: string) => searchableText.some((text: string) => text.includes(part)))
                : searchableText.some((text: string) => text.includes(answerId.toString().toLowerCase()));
              if (hasMatch) matchScore += weightGain;`
  ]
]);

console.log('RESULTPAGE DONE');
