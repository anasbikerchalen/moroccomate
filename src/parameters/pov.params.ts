export interface POVOption {
  id: string
  label: string
  description: string
}

export const povOptions: Record<string, POVOption[]> = {
  sleep: [
    { id: 'safety', label: '🛡 Safety & Security', description: 'I want to feel safe and secure. Show me the safest areas and places.' },
    { id: 'value', label: '💰 Best Value', description: 'I want the best experience for my money. No overpaying.' },
    { id: 'location', label: '📍 Perfect Location', description: 'I want to be in the right spot. Close to what matters.' },
    { id: 'comfort', label: '🛁 Maximum Comfort', description: 'I want the most comfortable stay. Amenities matter.' },
  ],
  eat: [
    { id: 'safety', label: '🛡 Safety & Cleanliness', description: 'Clean places, trusted staff, no stomach risks.' },
    { id: 'value', label: '💰 Best Value', description: 'Great food that does not break the bank.' },
    { id: 'location', label: '📍 Perfect Location', description: 'Close to where I am or where I am going.' },
    { id: 'quality', label: '🍽 Food Quality', description: 'Authentic flavors, best-rated spots, real experiences.' },
  ],
  'things-to-do': [
    { id: 'safety', label: '🛡 Safety First', description: 'Trusted areas and operators, low risk.' },
    { id: 'experience', label: '🔥 Best Experience', description: 'The most memorable things to see and do.' },
    { id: 'value', label: '💰 Best Value', description: 'Top quality for the price.' },
    { id: 'accessibility', label: '♿️ Easy Access', description: 'Easy to reach, low physical effort, accessible spots.' },
  ],
}

// POV chains define PRIMARY questions only. No budget-result.
// Everything NOT in the chain goes to MoreFilters on results page.
export const povChains: Record<string, Record<string, string[]>> = {
  sleep: {
    safety:   ['group-type', 'neighborhood', 'call-to-prayer'],
    value:    ['accommodation-type', 'lifestyle'],
    location: ['group-type', 'current-location', 'neighborhood', 'transport-mode'],
    comfort:  ['accommodation-type', 'lifestyle', 'must-have'],
  },
  eat: {
    safety:   ['eat-decision', 'crowd-level', 'safety-sensitivity', 'language-preference'],
    value:    ['eat-decision', 'lifestyle', 'meal'],
    location: ['eat-decision', 'current-location', 'location-preference', 'transport-mode'],
    quality:  ['eat-decision', 'meal', 'experience-type', 'food-style', 'group-type'],
  },
  'things-to-do': {
    safety:        ['safety-sensitivity', 'group-type', 'energy-level'],
    experience:    ['interests', 'exploration-mode', 'energy-level', 'must-have'],
    value:         ['lifestyle', 'time-available', 'group-type'],
    accessibility: ['group-type', 'transport-mode', 'energy-level'],
  },
}

export function getPOVChain(
  focus: string,
  pov: string | undefined
): string[] | null {
  if (!pov || !focus) return null
  return povChains[focus]?.[pov] ?? null
}

export function getPOVLabel(focus: string, pov: string | undefined): string {
  if (!pov || !focus) return 'Discovery Path'
  const options = povOptions[focus]
  const found = options?.find(o => o.id === pov)
  if (!found) return 'Discovery Path'
  return found.label.replace(/^[^\s]+\s/, '').trim()
}
