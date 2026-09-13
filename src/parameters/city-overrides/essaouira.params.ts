import type { UserSelections } from '../types'

export const essaouiraOverrides = {
  showHarbourGrillSuggestion: (selections: UserSelections): boolean => {
    return (
      (selections.lifestyle === 'lean' || selections.lifestyle === 'balanced') &&
      ['lunch', 'dinner', 'flexible'].includes(selections.meal ?? '')
    )
  },

  showWindSportSuggestion: (selections: UserSelections): boolean => {
    return (
      selections.experienceCategory === 'nature' ||
      selections.energyLevel === 'active' ||
      selections.energyLevel === 'intense'
    )
  },
}
