import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserMode, JourneyType } from '../types';
import { TravelModeKey } from '../types/modes';

export type TravelView = 'journey-type' | 'landing' | 'traveler-type' | 'category-display' | 'category' | 'question' | 'result' | 'checklist' | 'flow' | 'result-hub';

interface ProfileState {
  // UI Preferences
  darkMode: boolean;
  language: string; // UI Translation language
  travelMode: TravelModeKey | null; // Persona travel style mode
  
  // Navigation (Travel Essentials Flow)
  view: TravelView;
  history: TravelView[];
  activeCategoryId: string | null;

  // Identity & Context
  mode: UserMode;
  journeyType: JourneyType | null;
  urgency: string | null;
  travelerType: string | null;
  
  // Data / Progress
  answers: Record<string, any>;
  completedTasks: string[];

  // Planner 2.0 Personalization Profile
  plannerProfile: {
    group?: 'solo' | 'couple' | 'family' | 'friends' | 'business';
    pace?: 'slow' | 'balanced' | 'fast';
    budget?: 'budget' | 'midrange' | 'luxury';
    vibe?: 'culture' | 'food' | 'nature' | 'adventure' | 'arts';
    duration?: 'weekend' | 'week' | 'twoweeks' | 'month';
  } | null;

  // Actions
  setDarkMode: (darkMode: boolean) => void;
  setLanguage: (language: string) => void;
  setTravelMode: (travelMode: TravelModeKey | null) => void;
  setMode: (mode: UserMode) => void;
  setJourneyType: (type: JourneyType | null) => void;
  setPlannerProfile: (profile: {
    group?: 'solo' | 'couple' | 'family' | 'friends' | 'business';
    pace?: 'slow' | 'balanced' | 'fast';
    budget?: 'budget' | 'midrange' | 'luxury';
    vibe?: 'culture' | 'food' | 'nature' | 'adventure' | 'arts';
    duration?: 'weekend' | 'week' | 'twoweeks' | 'month';
  } | null) => void;
  
  // Travel Flow Actions
  setView: (view: TravelView) => void;
  pushView: (view: TravelView) => void;
  popView: () => void;
  setUrgency: (urgency: string | null) => void;
  setTravelerType: (type: string | null) => void;
  setAnswer: (id: string, answer: any) => void;
  toggleTask: (taskId: string) => void;
  setActiveCategory: (categoryId: string | null) => void;
  reset: () => void;
}

/**
 * CORE STATE: Profile Store
 * Job: Single source of truth for User Identity, Mode, and Journey Progress.
 * Warning: Replaces deprecated userStore and travelStore.
 */
export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      // Defaults
      darkMode: false,
      language: 'en',
      travelMode: null,
      view: 'journey-type',
      history: [],
      activeCategoryId: null,
      mode: 'tourist',
      journeyType: null,
      urgency: null,
      travelerType: null,
      answers: {},
      completedTasks: [],
      plannerProfile: null,

      // UI Actions
      setDarkMode: (darkMode) => set({ darkMode }),
      setLanguage: (language) => set({ language }),
      setTravelMode: (travelMode) => set({ travelMode }),
      setMode: (mode) => set({ mode }),
      setJourneyType: (journeyType) => set({ journeyType }),
      setPlannerProfile: (plannerProfile) => set({ plannerProfile }),

      // Travel Actions
      setView: (view) => set({ view }),
      pushView: (view) => set((state) => ({
        history: [...state.history, state.view],
        view
      })),
      popView: () => set((state) => {
        if (state.history.length === 0) return {};
        const newHistory = [...state.history];
        const prevView = newHistory.pop()!;
        return {
          view: prevView,
          history: newHistory
        };
      }),
      setUrgency: (urgency) => set({ urgency }),
      setTravelerType: (travelerType) => set({ travelerType }),
      setAnswer: (id, answer) => set((state) => ({
        answers: { ...state.answers, [id]: answer }
      })),
      toggleTask: (taskId) => set((state) => ({
        completedTasks: state.completedTasks.includes(taskId)
          ? state.completedTasks.filter(id => id !== taskId)
          : [...state.completedTasks, taskId]
      })),
      setActiveCategory: (activeCategoryId) => set({ activeCategoryId }),

      reset: () => set({
        view: 'journey-type',
        history: [],
        activeCategoryId: null,
        journeyType: null,
        urgency: null,
        travelerType: null,
        answers: {},
        completedTasks: [],
        plannerProfile: null
      }),
    }),
    {
      name: 'morocco-profile-storage',
    }
  )
);
