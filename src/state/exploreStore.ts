import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ExploreCategory, ArchetypeId, ThingsToDoSubCategory, SportIntent, SportFacilityType, SportExperienceType } from '../types';

export type ExploreView = 'hub' | 'decision' | 'quiz' | 'results' | 'listing' | 'detail' | 'gallery' | 'subcategory' | 'sport-path' | 'curated-eat' | 'curated-sleep' | 'curated-things' | 'shopping-categories' | 'free-scroll';

export interface FilterState {
  search: string;
  types: string[];
  cities: string[];
  priceRange: [number, number];
  rating: number;
  sortBy: 'popular' | 'rating' | 'price' | 'distance';
  hasPool?: boolean;
  hasAC?: boolean;
  vibes: string[];
  neighborhoods: string[];
  isVegetarian?: boolean;
  isHalal?: boolean;
  isWheelchairAccessible?: boolean;
  servesAlcohol?: boolean;
  isKidFriendly?: boolean;
  isVerified?: boolean;
  isFixedPrice?: boolean;
  isNoHassle?: boolean;
}

export interface ContextData {
  userLocation?: { city: string; area?: string; coordinates?: [number, number] };
  userRoute?: { from: string; to: string; via: string; distance: number; duration: string };
  departure?: { date: string; time: string; airport: string; timeRemaining: number };
}

interface ExploreState {
  view: ExploreView;
  history: ExploreView[];
  activeCategory: ExploreCategory | null;
  activeSubCategory: ThingsToDoSubCategory | null;
  sportIntent: SportIntent | null;
  sportFacilityType: SportFacilityType | null;
  sportExperienceType: SportExperienceType | null;
  activeItemId: string | null;
  omitGoogleImage: boolean;
  quizAnswers: Record<string, any>;
  archetype: ArchetypeId | null;
  secondaryArchetype: ArchetypeId | null;
  filters: FilterState;
  context: ContextData;
  exploredCategories: string[];
  matchmakerTree: {
    activeCategoryId: string | null;
    activeSubcategoryId: string | null;
    refineIndex: number | null;
  };
  setView: (view: ExploreView) => void;
  pushView: (view: ExploreView) => void;
  popView: () => void;
  setActiveCategory: (category: ExploreCategory | null) => void;
  setActiveSubCategory: (sub: ThingsToDoSubCategory | null) => void;
  setSportIntent: (intent: SportIntent | null) => void;
  setSportFacilityType: (type: SportFacilityType | null) => void;
  setSportExperienceType: (type: SportExperienceType | null) => void;
  setActiveItem: (itemId: string | null) => void;
  setOmitGoogleImage: (omit: boolean) => void;
  setQuizAnswer: (questionId: string, answer: any) => void;
  setArchetype: (archetype: ArchetypeId | null) => void;
  setFilter: (key: keyof FilterState, value: any) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
  setContext: (context: Partial<ContextData>) => void;
  addExploredCategory: (categoryId: string) => void;
  setMatchmakerTree: (updates: Partial<ExploreState['matchmakerTree']>) => void;
  resetExplore: () => void;
}

const initialFilters: FilterState = {
  search: '',
  types: [],
  cities: [],
  priceRange: [0, 1000],
  rating: 0,
  sortBy: 'popular',
  vibes: [],
  neighborhoods: [],
  isVegetarian: false,
  isHalal: false,
  isWheelchairAccessible: false,
  servesAlcohol: false,
  isKidFriendly: false
};

const initialMatchmakerTree = {
  activeCategoryId: null,
  activeSubcategoryId: null,
  refineIndex: null
};

export const useExploreStore = create<ExploreState>()(
  persist(
    (set) => ({
      view: 'hub',
      history: [],
      activeCategory: null,
      activeSubCategory: null,
      sportIntent: null,
      sportFacilityType: null,
      sportExperienceType: null,
      activeItemId: null,
      omitGoogleImage: false,
      quizAnswers: {},
      archetype: null,
      secondaryArchetype: null,
      filters: initialFilters,
      context: {},
      exploredCategories: [],
      matchmakerTree: initialMatchmakerTree,

      setView: (view) => set({ view }),
      pushView: (view) => set((state) => ({ history: [...state.history, state.view], view })),
      popView: () => set((state) => {
        if (state.history.length === 0) return {};
        const newHistory = [...state.history];
        const prevView = newHistory.pop()!;
        const updates: Partial<ExploreState> = { view: prevView, history: newHistory };
        if (prevView === 'hub') {
          updates.activeCategory = null;
          updates.activeSubCategory = null;
          updates.sportIntent = null;
          updates.sportFacilityType = null;
          updates.sportExperienceType = null;
          updates.activeItemId = null;
          updates.matchmakerTree = initialMatchmakerTree;
        } else if (prevView === 'subcategory') {
          updates.activeSubCategory = null;
          updates.sportIntent = null;
          updates.sportFacilityType = null;
          updates.sportExperienceType = null;
        } else if (prevView === 'listing' || prevView === 'results' || prevView === 'decision') {
          updates.activeItemId = null;
        }
        return updates;
      }),
      setActiveCategory: (activeCategory) => set({ 
        activeCategory, 
        activeItemId: null, 
        quizAnswers: {}, 
        activeSubCategory: null,
        sportIntent: null,
        sportFacilityType: null,
        sportExperienceType: null
      }),
      setActiveSubCategory: (activeSubCategory) => set({ activeSubCategory }),
      setSportIntent: (sportIntent) => set({ sportIntent }),
      setSportFacilityType: (sportFacilityType) => set({ sportFacilityType }),
      setSportExperienceType: (sportExperienceType) => set({ sportExperienceType }),
      setActiveItem: (activeItemId) => set({ activeItemId }),
      setOmitGoogleImage: (omitGoogleImage) => set({ omitGoogleImage }),
      setQuizAnswer: (questionId, answer) => set((state) => ({ quizAnswers: { ...state.quizAnswers, [questionId]: answer } })),
      setArchetype: (archetype) => set({ archetype }),
      setFilter: (key, value) => set((state) => ({ filters: { ...state.filters, [key]: value } })),
      setFilters: (newFilters) => set((state) => ({ filters: { ...state.filters, ...newFilters } })),
      resetFilters: () => set({ filters: initialFilters }),
      setContext: (context) => set((state) => ({ context: { ...state.context, ...context } })),
      addExploredCategory: (categoryId: string) => set((state) => ({
        exploredCategories: state.exploredCategories.includes(categoryId) ? state.exploredCategories : [...state.exploredCategories, categoryId]
      })),
      setMatchmakerTree: (updates) => set((state) => ({ matchmakerTree: { ...state.matchmakerTree, ...updates } })),
      resetExplore: () => set({
        view: 'hub',
        history: [],
        activeCategory: null,
        activeSubCategory: null,
        sportIntent: null,
        sportFacilityType: null,
        sportExperienceType: null,
        activeItemId: null,
        omitGoogleImage: false,
        quizAnswers: {},
        archetype: null,
        secondaryArchetype: null,
        filters: initialFilters,
        matchmakerTree: initialMatchmakerTree
      }),
    }),
    {
      name: 'morocco-explore-storage',
      partialize: (state) => ({
        context: state.context,
        quizAnswers: state.quizAnswers,
        archetype: state.archetype,
        secondaryArchetype: state.secondaryArchetype,
        exploredCategories: state.exploredCategories,
        matchmakerTree: state.matchmakerTree,
        activeSubCategory: state.activeSubCategory,
        sportIntent: state.sportIntent,
        sportFacilityType: state.sportFacilityType,
        sportExperienceType: state.sportExperienceType
      })
    }
  )
);
