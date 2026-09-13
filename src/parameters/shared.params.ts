import type { ParameterStep } from './types'

export const groupTypeStep: ParameterStep = {
  id: 'group-type',
  question: 'Who are you travelling with?',
  visualType: 'card-choice',
  required: true,
  options: [
    { id: 'solo', label: 'Solo', icon: '👤' },
    { id: 'couple', label: 'Couple', icon: '👫' },
    { id: 'family', label: 'Family with kids', icon: '👨‍👩‍👧' },
    { id: 'friends', label: 'Friends group', icon: '👥' },
    { id: 'seniors', label: 'Senior travelers', icon: '🧓' },
  ],
}

export const crowdLevelStep: ParameterStep = {
  id: 'crowd-level',
  question: 'What kind of atmosphere do you prefer?',
  visualType: 'pill-choice',
  required: false,
  options: [
    { id: 'bustling', label: 'Bustling and lively' },
    { id: 'balanced', label: 'Balanced' },
    { id: 'quiet', label: 'Quiet hidden gems' },
  ],
}

export const safetySensitivityStep: ParameterStep = {
  id: 'safety-sensitivity',
  question: 'How cautious do you want us to be?',
  visualType: 'pill-choice',
  required: false,
  options: [
    { id: 'high', label: 'High — warn me about everything' },
    { id: 'neutral', label: 'Neutral — standard awareness' },
    { id: 'okay', label: "It's okay — I'm experienced" },
  ],
}

export const transportModeStep: ParameterStep = {
  id: 'transport-mode',
  question: 'How do you want to get around?',
  visualType: 'pill-choice',
  required: false,
  options: [
    { id: 'walkable', label: '🚶 Walkable only' },
    { id: 'taxi', label: '🚕 Taxi or car' },
    { id: 'transit', label: '🚌 Public transit' },
    { id: 'mixed', label: '🔀 Mixed' },
  ],
}

export const languagePreferenceStep: ParameterStep = {
  id: 'language-preference',
  question: 'Which languages do you need?',
  visualType: 'toggle-grid',
  multiSelect: true,
  required: false,
  options: [
    { id: 'english', label: 'English' },
    { id: 'french', label: 'French' },
    { id: 'spanish', label: 'Spanish' },
    { id: 'arabic', label: 'Arabic' },
    { id: 'none', label: 'No preference' },
  ],
}

export const ratingStep: ParameterStep = {
  id: 'rating',
  question: 'Minimum average rating?',
  visualType: 'pill-choice',
  required: false,
  options: [
    { id: '4.5', label: '4.5+ ⭐ Very Best' },
    { id: '4.0', label: '4.0+ ⭐ Good' },
    { id: '3.5', label: '3.5+ ⭐ Decent' },
    { id: 'any', label: 'Any rating' },
  ],
}

export const budgetStep: ParameterStep = {
  id: 'budgetMax',
  question: 'What is your maximum budget?',
  visualType: 'budget-result',
  required: false,
}

export const currentLocationStep: ParameterStep = {
  id: 'current-location',
  question: 'Are you already in the city?',
  visualType: 'location-gate',
  required: false,
  options: [
    { id: 'yes', label: 'Yes — I am here now' },
    { id: 'no', label: 'No — planning ahead' },
  ],
}

export const sharedParams = {
  groupType: groupTypeStep,
  crowdLevel: crowdLevelStep,
  safetySensitivity: safetySensitivityStep,
  transportMode: transportModeStep,
  languagePreference: languagePreferenceStep,
  rating: ratingStep,
  currentLocationGate: currentLocationStep,
}
