import type { UserSelections } from '../types'

export const agadirOverrides = {
  showSeafoodSuggestion: (selections: UserSelections): boolean => {
    return (
      (selections.lifestyle === 'lean' || selections.lifestyle === 'balanced') &&
      ['lunch', 'dinner', 'flexible'].includes(selections.meal ?? '')
    )
  },

  showBeachProminence: (selections: UserSelections): boolean => {
    return (
      selections.experienceCategory === 'nature' ||
      selections.mainInterests?.includes('nature') === true
    )
  },
}
