import type { UserSelections } from './types'

// Map parameter step IDs to the actual state keys in UserSelections
export const mapStepIdToStateKey = (id: string): keyof UserSelections => {
  const map: Record<string, keyof UserSelections> = {
    'point-of-view': 'pointOfView',
    'eat-decision': 'eatDecision',
    'activity-decision': 'activityDecision',
    'group-type': 'groupType',
    'accommodation-type': 'accommodationType',
    'must-have': 'mustHaves',
    'experience-type': 'experienceTypes',
    'food-style': 'foodStyles',
    'main-interests': 'mainInterests',
    'time-available': 'timeAvailable',
    'energy-level': 'energyLevel',
    'experience-category': 'experienceCategory',
    'time-of-day': 'timeOfDay',
    'distance-range': 'maxDistance',
    'current-location': 'currentlyInCity',
    'safety-sensitivity': 'safetyLevel',
    'transport-mode': 'transportMode',
    'language-preference': 'languagePreference',
    'crowd-level': 'crowdLevel',
    'walking-comfort': 'walkingComfort',
    'call-to-prayer': 'callToPrayerTolerance',
    'location-preference': 'locationPreference',
    'exploration-mode': 'explorationMode',
  }
  return map[id] || (id as keyof UserSelections)
}
