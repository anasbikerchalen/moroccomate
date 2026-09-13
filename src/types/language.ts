// src/types/language.ts

export type LanguageCode = 'darija' | 'french' | 'arabic' | 'berber';

export type PhraseCategory = 
  | 'greetings'
  | 'transport'
  | 'food'
  | 'shopping'
  | 'accommodation'
  | 'emergency'
  | 'numbers'
  | 'directions'
  | 'social'
  | 'bargaining';

export interface Phrase {
  id: string;
  category: PhraseCategory;
  english: string;
  translations: {
    darija?: {
      text: string;
      pronunciation: string;
    };
    french?: {
      text: string;
      pronunciation?: string;
    };
    arabic?: {
      text: string;
      pronunciation: string;
    };
    berber?: {
      text: string;
      pronunciation: string;
    };
  };
  context?: string; // When to use this phrase
  alternatives?: string[]; // Other ways to say it in English
  audioUrl?: string; // Optional audio pronunciation
}

export interface PhraseCollection {
  category: PhraseCategory;
  name: string;
  icon: string;
  description: string;
  phrases: Phrase[];
  tips?: string[];
}

export interface SituationGuide {
  id: string;
  situation: string;
  icon: string;
  description: string;
  essentialPhrases: string[]; // phrase IDs
  commonScenarios: Array<{
    scenario: string;
    phrases: string[]; // phrase IDs
  }>;
  culturalTips?: string[];
}

export type DodaCategory = 
  | 'medina_etiquette'
  | 'greetings'
  | 'bargaining'
  | 'transport'
  | 'real_estate_hacks'
  | 'dining'
  | 'emergency'
  | 'general';

export interface DodaDictionaryEntry {
  id: string;
  term: string;
  arabizi: string;
  arabicScript: string;
  phonetic: string;
  englishTranslation: string;
  frenchTranslation: string;
  spanishTranslation: string;
  literalMeaning?: string;
  grammaticalNotes?: string;
  culturalContext?: string;
  category: DodaCategory;
  dialectVariants?: {
    northern?: string;
    marrakech?: string;
    casablanca?: string;
    southern?: string;
  };
  tags: string[];
}
