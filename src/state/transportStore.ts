// src/state/transportStore.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { JourneyStage } from '../types/transport';

interface TransportState {
  // User's current journey context
  journeyStage: JourneyStage | null;
  
  // Current route planning
  route: {
    from: string | null;
    to: string | null;
  };
  
  // Saved routes for user's trip
  savedRoutes: Array<{
    id: string;
    from: string;
    to: string;
    journeyStage: JourneyStage;
    recommendedMode: string;
    estimatedCost: { min: number; max: number };
    savedAt: Date;
  }>;
  
  // Actions
  setJourneyStage: (stage: JourneyStage | null) => void;
  setRoute: (from: string | null, to: string | null) => void;
  clearRoute: () => void;
  saveRouteToTrip: (route: {
    from: string;
    to: string;
    journeyStage: JourneyStage;
    recommendedMode: string;
    estimatedCost: { min: number; max: number };
  }) => void;
  removeRouteFromTrip: (id: string) => void;
  clearSavedRoutes: () => void;
  reset: () => void;
}

const initialState = {
  journeyStage: null,
  route: {
    from: null,
    to: null
  },
  savedRoutes: []
};

export const useTransportStore = create<TransportState>()(
  persist(
    (set) => ({
      ...initialState,
      
      setJourneyStage: (stage) => set({ journeyStage: stage }),
      
      setRoute: (from, to) => set({ 
        route: { from, to } 
      }),
      
      clearRoute: () => set({ 
        route: { from: null, to: null } 
      }),
      
      saveRouteToTrip: (route) => set((state) => ({
        savedRoutes: [
          ...state.savedRoutes,
          {
            id: crypto.randomUUID(),
            ...route,
            savedAt: new Date()
          }
        ]
      })),
      
      removeRouteFromTrip: (id) => set((state) => ({
        savedRoutes: state.savedRoutes.filter(r => r.id !== id)
      })),
      
      clearSavedRoutes: () => set({ savedRoutes: [] }),
      
      reset: () => set(initialState)
    }),
    {
      name: 'transport-storage',
      storage: createJSONStorage(() => localStorage),
      // Persist journey stage, route, and savedRoutes
      partialize: (state) => ({
        journeyStage: state.journeyStage,
        route: state.route,
        savedRoutes: state.savedRoutes
      })
    }
  )
);
