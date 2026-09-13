import type { UserSelections } from '../types'

export const tangierOverrides = {
  showDayTripRouting: (selections: UserSelections): boolean => {
    return (
      selections.timeAvailable === '1-2h' ||
      selections.timeAvailable === 'half-day'
    )
  },

  showSpanishFusionSuggestion: (selections: UserSelections): boolean => {
    return (
      selections.foodStyles?.includes('international') === true ||
      selections.experienceTypes?.includes('mix') === true ||
      selections.experienceTypes?.includes('familiar') === true
    )
  },
}
