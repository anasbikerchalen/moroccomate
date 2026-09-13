import type { UserSelections } from '../types'

export const marrakechOverrides = {
  showCallToPrayer: (selections: UserSelections): boolean => {
    const medinalNeighborhoods = ['medina', 'kasbah', 'mellah']
    return (
      !selections.neighborhood ||
      medinalNeighborhoods.includes(selections.neighborhood)
    )
  },

  showJemaaFnaaSuggestion: (selections: UserSelections): boolean => {
    return (
      selections.crowdLevel === 'bustling' &&
      ['dinner', 'latenight'].includes(selections.meal ?? '')
    )
  },

  showNightMedinaSuggestion: (selections: UserSelections): boolean => {
    return (
      selections.crowdLevel === 'bustling' &&
      selections.lifestyle !== 'premium'
    )
  },
}
