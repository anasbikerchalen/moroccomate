import type { UserSelections } from '../types'

export const chefchaouenOverrides = {
  showPhotographySuggestion: (selections: UserSelections): boolean => {
    return (
      selections.mustHaveToggles?.includes('photography') === true ||
      selections.experienceCategory === 'slow'
    )
  },

  showHikingProminence: (selections: UserSelections): boolean => {
    return (
      (selections.energyLevel === 'active' || selections.energyLevel === 'intense') &&
      selections.mainInterests?.includes('nature') === true
    )
  },
}
