export type ParameterVisualType =
  | 'card-choice'
  | 'pill-choice'
  | 'toggle-grid'
  | 'energy-dial'
  | 'neighborhood-map'
  | 'distance-slider'
  | 'distance-range'
  | 'budget-result'
  | 'location-gate'
  | 'activity-specific'
  | 'two-column-selector'
  | 'category-groups'
  | 'choice-cards'

export interface ParameterOption {
  id: string
  label: string
  description?: string
  icon?: string
  disabled?: boolean
  column?: 'neighborhood' | 'close-to'
}

export interface ParameterStep {
  id: string
  question: string
  visualType: ParameterVisualType
  options?: ParameterOption[]
  multiSelect?: boolean
  required: boolean
  showIf?: (selections: UserSelections) => boolean
}

export interface UserSelections {
  focus?: string
  pointOfView?: string
  city?: string
  lifestyle?: string
  groupType?: string
  'group-type'?: string
  accommodationType?: string
  'accommodation-type'?: string
  neighborhood?: string
  nearLandmark?: string
  mustHaves?: string[]
  'must-haves'?: string[]
  crowdLevel?: string
  safetyLevel?: string
  transportMode?: string
  'transport-mode'?: string
  languagePreference?: string[]
  'language-preference'?: string[]
  meal?: string
  mealTimeRange?: string
  locationPreference?: string
  experienceTypes?: string[]
  'experience-type'?: string[]
  foodStyles?: string[]
  'food-style'?: string[]
  currentlyInCity?: boolean
  currentNeighborhood?: string
  distanceKm?: number
  mainInterests?: string[]
  interests?: string[]
  timeAvailable?: string
  energyLevel?: string
  'energy-level'?: string
  experienceCategory?: string
  timeOfDay?: string
  explorationMode?: 'self-guided' | 'organized'
  'exploration-mode'?: string
  maxDistance?: number
  eatDecision?: string
  activityDecision?: string
  visitDecision?: string
  'eat-start'?: 'here-now' | 'planning-ahead'
  'sleep-start'?: 'here-now' | 'planning-ahead'
  'todo-start'?: 'here-now' | 'planning-ahead'
  'visit-start'?: 'here-now' | 'planning-ahead'
  'eat-location-intent'?: 'specific-area' | 'wherever'
  'sleep-location-intent'?: 'specific-area' | 'wherever'
  'todo-location-intent'?: 'specific-area' | 'wherever'
  'visit-location-intent'?: 'specific-area' | 'wherever'
  proximityPreference?: 'walking' | 'short-taxi' | 'wherever'
  neighborhoodVibe?: string
  neighborhoodProximity?: string
  budgetMin?: number
  budgetMax?: number
  activityTypes?: string[]
  mustHaveToggles?: string[]
  weatherPreference?: string
  authenticityLevel?: string
  pacePreference?: string
  walkingComfort?: string
  callToPrayerTolerance?: string
  'call-to-prayer'?: string
  isMultiPlace?: boolean
  isMultiActivity?: boolean
  [key: string]: any
}

export interface CalculatedBudget {
  min: number
  max: number
  currency: 'EUR'
  per: string
  label: string
}
