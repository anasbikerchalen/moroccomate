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

editFile('components/finder/CategoryQuiz.tsx', [
  [
`import { QuizQuestion, QuizOption, getTagForOptionId } from '../../data/explore/questions';`,
`import { QuizQuestion, QuizOption, getTagForOptionId, QUIZ_STOP_WORDS } from '../../data/explore/questions';`
  ],
  [
`import { cn } from '../../utils/cn';`,
`import { cn } from '../../utils/cn';
import { useExploreStore } from '../../state/exploreStore';

// Smart skip (lite): premium-only options hidden when the traveler chose "Lean"
const PREMIUM_ONLY_OPTION_TAGS = ['fine-dining'];`
  ],
  [
`  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});`,
`  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const applyQuizAutoFilters = useExploreStore((s) => s.applyQuizAutoFilters);`
  ],
  [
`    return filtered.length;
  }, [listings, answers]);`,
`    return filtered.length;
  }, [listings, answers]);

  // Smart skip (lite): travelers who chose "Lean" never see premium-only options,
  // keeping every quiz step relevant to their budget
  const displayedOptions = useMemo(() => {
    if (!currentQuestion) return [];
    const lifestyle = answers['base-lifestyle'];
    if (lifestyle === 'lean') {
      const filtered = currentQuestion.options.filter(o => !PREMIUM_ONLY_OPTION_TAGS.includes(o.tag || ''));
      if (filtered.length >= 2) return filtered;
    }
    return currentQuestion.options;
  }, [currentQuestion, answers]);`
  ],
  [
`    if (id === 'breakfast' || id.includes('breakfast') || label.includes('breakfast')) return eatQuizBreakfast;`,
`    // Cuisine preference (food-cuisine): reuses existing workspace images
    if (id === 'moroccan-traditional') return eatQuizTraditional;
    if (id === 'international' || id.includes('fusion')) return eatQuizFineDining;
    if (id === 'cafe-pastry') return eatQuizCafesTea;
    if (id === 'seafood') return eatQuizStreetFood;
    if (id === 'breakfast' || id.includes('breakfast') || label.includes('breakfast')) return eatQuizBreakfast;`
  ],
  [
`    if (id === 'riad' || id.includes('riad') || label.includes('riad')) return sleepQuizRiad;`,
`    // Location feel (sleep-location): reuses existing workspace images
    if (id === 'medina-heart') return sleepQuizRiad;
    if (id === 'ville-nouvelle' || id.includes('ville') || id.includes('nouvelle') || id.includes('gueliz')) return sleepQuizHotel;
    if (id === 'countryside') return sleepQuizKasbah;
    if (id === 'riad' || id.includes('riad') || label.includes('riad')) return sleepQuizRiad;`
  ],
  [
`      onComplete(answers);`,
`      applyQuizAutoFilters(answers);
      onComplete(answers);`
  ],
  [
`    onComplete(defaultAnswers);`,
`    applyQuizAutoFilters(defaultAnswers);
    onComplete(defaultAnswers);`
  ],
  [
`            {currentQuestion.options.map((option) => {`,
`            {displayedOptions.map((option) => {`
  ]
]);

editFileRegex('components/finder/CategoryQuiz.tsx', [
  [
`const searchableText = \\[
              item\\.name, item\\.title, item\\.description, item\\.type, item\\.category, \\(item as any\\)\\.cuisine,\n              \\\.\\.\\.vibeTags, \\\.\\.\\.tags, \\\.\\.\\.archetypeAffinity,\n              \\\.\\.\\.foodStyles, \\\.\\.\\.experienceTypes, \\\.\\.\\.mealTypes, \\\.\\.\\.amenities,\n              \\\.\\.\\.\\(Array\\.isArray\\(\\(item as any\\)\\.productCategories\\) \\? \\(item as any\\)\\.productCategories : \\\[\\]\\)\n            \\]\\.filter\\(Boolean\\)\\.map\\(\\(t: any\\) => t\\.toString\\(\\)\\.toLowerCase\\(\\)\\);\\s*\\n\\s*return searchableText\\.some\\(\\(text: string\\) => text\\.includes\\(id\\.toLowerCase\\(\\)\\)\\);`,
`const searchableText = [
              item.name, item.title, item.description, item.type, item.category, (item as any).cuisine,
              String((item as any).neighborhood || ''), String((item as any).locationSummary || ''),
              ...vibeTags, ...tags, ...archetypeAffinity,
              ...foodStyles, ...experienceTypes, ...mealTypes, ...amenities,
              ...(Array.isArray((item as any).productCategories) ? (item as any).productCategories : [])
            ].filter(Boolean).map((t: any) => t.toString().toLowerCase());
            
            // Multi-part answer IDs: match on meaningful parts, skipping stop-words
            // and tiny fragments (e.g. 'off' inside 'coffee') that create false matches
            const parts = id.toLowerCase().split('-').filter(p => p.length >= 4 && !QUIZ_STOP_WORDS.has(p));
            return parts.length > 0
              ? parts.some((part: string) => searchableText.some((text: string) => text.includes(part)))
              : searchableText.some((text: string) => text.includes(id.toLowerCase()));`
  ]
]);

console.log('CATEGORY DONE');
