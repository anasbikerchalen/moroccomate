import { create } from 'zustand'
import type { UserSelections } from '../parameters/types'
import type { FocusType } from '../listings/types'

interface ParameterState {
  focus: FocusType | null
  city: string | null
  neighborhood: string | null
  currentStep: number
  selections: UserSelections
  completedSteps: string[]
  showResults: boolean
  setFocus: (focus: FocusType) => void
  setCity: (city: string) => void
  setNeighborhood: (neighborhood: string | null) => void
  updateSelection: (key: keyof UserSelections, value: unknown) => void
  setStep: (step: number) => void
  completeStep: (stepId: string) => void
  setShowResults: (v: boolean) => void
  resetAll: () => void
}

const initialSelections: UserSelections = {}

export const useParameterStore = create<ParameterState>((set) => ({
  focus: null,
  city: null,
  neighborhood: null,
  currentStep: 0,
  selections: initialSelections,
  completedSteps: [],
  showResults: false,

  setFocus: (focus) => set({ focus, currentStep: 0, selections: initialSelections, completedSteps: [], showResults: false }),

  setCity: (city) => 
    set((state) => {
      // Only clear neighborhood if city actually changed
      const shouldClearNeighborhood = state.city !== city;
      return { 
        city, 
        neighborhood: shouldClearNeighborhood ? null : state.neighborhood,
        selections: { ...state.selections, city } 
      };
    }),

  setNeighborhood: (neighborhood) => set({ neighborhood }),

  updateSelection: (key, value) =>
    set((state) => {
      console.log(`[Store] Updating selection: ${key} = ${value}`)
      const newSelections = { ...state.selections, [key]: value }
      
      // Standardized ID Sync: Ensuring hyphenated IDs are synced
      if (key === 'sleep-start' || key === 'eat-start' || key === 'todo-start') {
        newSelections['sleep-start'] = value as any
        newSelections['eat-start'] = value as any
        newSelections['todo-start'] = value as any
      }

      return { selections: newSelections }
    }),

  setStep: (step) => set({ currentStep: step }),

  completeStep: (stepId) =>
    set((state) => ({
      completedSteps: [...state.completedSteps, stepId],
    })),

  setShowResults: (v: boolean) => set({ showResults: v }),

  resetAll: () =>
    set({
      focus: null,
      city: null,
      neighborhood: null,
      currentStep: 0,
      selections: initialSelections,
      completedSteps: [],
      showResults: false,
    }),
}))
