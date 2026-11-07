import type { UserSelections } from '../types'

export const fesOverrides = {
  showCallToPrayer: (selections: UserSelections): boolean => {
    return (
      !selections.neighborhood ||
      selections.neighborhood === 'medina'
    )
  },

  showGuideRecommendation: (selections: UserSelections): boolean => {
    return (
      selections.mainInterests?.includes('culture') === true ||
      selections.lifestyle === 'balanced' ||
      selections.lifestyle === 'lean'
    )
  },
}
