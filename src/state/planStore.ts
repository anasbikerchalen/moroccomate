import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CityId, FocusType } from '../listings/types'
import { PlannerCardItem, CatalogAddContext } from '../types/planner'
import { ITINERARY_TEMPLATES } from '../data/plan/itineraries'
import { CITY_RECOMMENDATIONS } from '../data/plan/recommendations'

export type DayTime = 'morning' | 'afternoon' | 'evening';
export type TimeSlotId = 'morning' | 'afternoon' | 'evening' | 'night';
export type PlannerCardType = 'eat' | 'sleep' | 'things' | 'activity' | 'transport' | 'note';

export interface PlannedActivity {
  id: string;
  label: string;
  type: FocusType;
  time: DayTime;
  cost: number;
  note?: string;
  listingId?: string;
  durationMinutes?: number;
  highlighted?: boolean;
  isHidden?: boolean;
}

export type PlanItem = PlannedActivity;

export interface PlannedDay {
  id: string;
  cityId: string;
  activities: PlannedActivity[];
}

export interface MasterPlan {
  id: string;
  name: string;
  date: string;
  cities: string[];
  days: PlannedDay[];
}

interface PlanState {
  // Current working plan
  currentCities: CityId[];
  currentDays: PlannedDay[];
  activeCityId: string | null;
  activeItemId: string | null; // Added
  
  // Compat with old code
  items: PlanItem[];
  
  // Journey Mode
  selectedJourneyMode?: 'first' | 'been' | 'know';
  activeTransformations: string[];
  
  // Journaled plans
  savedPlans: MasterPlan[];
  
  pinnedWords: Record<string, string[]>;
  pinnedSavvy: Record<string, string[]>;
  
  // New Planner Rebuild properties
  daysPerCity: Record<string, number>;
  boardItems: PlannerCardItem[];
  isCatalogOpen: boolean;
  activeCatalogTab: string;
  isPrintPreviewOpen: boolean;
  isOnboardingCompleted: boolean;
  savedTransitRoutes: string[];  // Array of route IDs the user has favorited
  activeTransitRoute: { from: CityId; to: CityId } | null;
  selectedMonth: string;
  tripStartDate: string | null;
  activeAddContext: CatalogAddContext | null;
  vibeQuizMergePending: { newCities: CityId[]; templateId?: string } | null;
  lastModified: number;

  // Actions
  setCities: (cities: CityId[]) => void;
  setDays: (days: PlannedDay[]) => void;
  setActiveCity: (cityId: string | null) => void;
  setActiveItem: (itemId: string | null) => void; // Added
  setJourneyMode: (mode: 'first' | 'been' | 'know' | null) => void;
  pinWord: (cityId: string, wordId: string) => void;
  unpinWord: (cityId: string, wordId: string) => void;
  pinSavvy: (cityId: string, savvyId: string) => void;
  unpinSavvy: (cityId: string, savvyId: string) => void;
  transformPlan: (transformId: string) => void;
  resetTransformations: () => void;
  addCity: (cityId: CityId) => void;
  toggleSavedTransitRoute: (routeId: string) => void;
  isTransitRouteSaved: (routeId: string) => boolean;
  setActiveTransitRoute: (route: { from: CityId; to: CityId } | null) => void;
  addCustomActivity: (cityId: string, time: DayTime, type: FocusType, label: string, cost?: number, note?: string) => void;
  addActivity: (cityId: string, time: DayTime, type: FocusType) => void;
  addItem: (item: PlanItem) => void; // Added
  updateItem: (id: string, updates: Partial<PlanItem>) => void; // Added
  removeItem: (id: string) => void; // Added
  removeActivity: (cityId: string, activityId: string) => void;
  updateActivityDetails: (activityId: string, updates: Partial<PlannedActivity>) => void;
  reorderItems: (items: PlanItem[]) => void; // Added
  saveToJournal: (name: string) => void;
  loadPlan: (id: string) => void;
  loadTemplate: (templateId: string) => void;
  deleteFromJournal: (id: string) => void;
  resetCurrent: () => void;
  reset: () => void; // Added

  // New mutators
  setCatalogOpen: (isOpen: boolean) => void;
  setCatalogTab: (tab: string) => void;
  setPrintPreviewOpen: (isOpen: boolean) => void;
  setOnboardingCompleted: (completed: boolean) => void;
  removeCity: (cityId: CityId) => void;
  updateCityDays: (cityId: CityId, days: number) => void;
  reorderCities: (startIndex: number, endIndex: number) => void;
  addCardToBoard: (item: Omit<PlannerCardItem, 'id' | 'order'>) => void;
  removeCardFromBoard: (cardId: string) => void;
  moveCard: (cardId: string, targetColumnId: string, targetOrder: number, targetTimeSlot?: TimeSlotId) => void;
  setTripStartDate: (dateStr: string | null) => void;
  setActiveAddContext: (ctx: CatalogAddContext | null) => void;
  setVibeQuizMergePending: (pending: { newCities: CityId[]; templateId?: string } | null) => void;
  clearPlan: () => void;
}

const initialDays: PlannedDay[] = [
  {
    id: 'day-marrakech',
    cityId: 'marrakech',
    activities: [
      { id: '1', label: 'Riad Stay', type: 'sleep', time: 'morning', cost: 120 },
      { id: '2', label: 'Traditional Dinner', type: 'eat', time: 'evening', cost: 35 },
    ]
  },
  {
    id: 'day-essaouira',
    cityId: 'essaouira',
    activities: [
      { id: '4', label: 'Coastal Activity', type: 'things-to-do', time: 'afternoon', cost: 40 },
    ]
  }
];

export const usePlanStore = create<PlanState>()(persist((set, get) => ({
  currentCities: ['marrakech', 'essaouira'],
  currentDays: initialDays,
  activeCityId: null,
  activeItemId: null,
  items: [],
  savedPlans: [],
  activeTransformations: [],
  pinnedWords: {},
  pinnedSavvy: {},
  daysPerCity: { marrakech: 2, essaouira: 2 },
  boardItems: [],
  isCatalogOpen: false,
  activeCatalogTab: 'cities',
  isPrintPreviewOpen: false,
  isOnboardingCompleted: false,
  savedTransitRoutes: [],
  activeTransitRoute: null,
  selectedMonth: '',
  tripStartDate: null,
  activeAddContext: null,
  vibeQuizMergePending: null,
  lastModified: Date.now(),

  setCities: (cities: CityId[]) => set({ currentCities: cities }),
  setDays: (days) => set({ currentDays: days }),
  setActiveCity: (cityId) => set({ activeCityId: cityId }),
  setActiveItem: (itemId) => set({ activeItemId: itemId }),
  setJourneyMode: (mode) => set({ selectedJourneyMode: mode || undefined }),
  pinWord: (cityId, wordId) => set((state) => {
    const list = state.pinnedWords[cityId] || [];
    if (list.includes(wordId)) return {};
    return {
      pinnedWords: {
        ...state.pinnedWords,
        [cityId]: [...list, wordId]
      }
    };
  }),
  unpinWord: (cityId, wordId) => set((state) => {
    const list = state.pinnedWords[cityId] || [];
    return {
      pinnedWords: {
        ...state.pinnedWords,
        [cityId]: list.filter(id => id !== wordId)
      }
    };
  }),
  pinSavvy: (cityId, savvyId) => set((state) => {
    const list = state.pinnedSavvy[cityId] || [];
    if (list.includes(savvyId)) return {};
    return {
      pinnedSavvy: {
        ...state.pinnedSavvy,
        [cityId]: [...list, savvyId]
      }
    };
  }),
  unpinSavvy: (cityId, savvyId) => set((state) => {
    const list = state.pinnedSavvy[cityId] || [];
    return {
      pinnedSavvy: {
        ...state.pinnedSavvy,
        [cityId]: list.filter(id => id !== savvyId)
      }
    };
  }),

  transformPlan: (transformId) => set((state) => {
    const isAlreadyActive = state.activeTransformations.includes(transformId);
    const newActiveTransforms = isAlreadyActive 
      ? state.activeTransformations.filter(id => id !== transformId)
      : [...state.activeTransformations, transformId];

    // Reset visibility and highlights first, and remove transient companion-added items
    let newDays = state.currentDays.map(day => ({
      ...day,
      activities: day.activities
        .filter(act => !act.id.startsWith('local-') && !act.id.startsWith('craft-') && !act.id.startsWith('stuck-rec-'))
        .map(act => ({ ...act, isHidden: false, highlighted: false } as PlannedActivity))
    }));

    // Apply active transformations
    newActiveTransforms.forEach(tid => {
      if (tid === 'breathe') {
        newDays = newDays.map(day => ({
          ...day,
          activities: day.activities.map((act, i) => ({ ...act, isHidden: i >= 2 || act.isHidden } as PlannedActivity))
        }));
      }
      if (tid === 'regret') {
        newDays = newDays.map(day => ({
          ...day,
          activities: day.activities.map((act, i) => ({ ...act, highlighted: i < 2 || act.highlighted }))
        }));
      }
      if (tid === 'alive') {
        newDays = newDays.map(day => ({
          ...day,
          activities: day.activities.map(act => ({ ...act, highlighted: act.time === 'evening' || act.highlighted }))
        }));
      }
      if (tid === 'local') {
        newDays = newDays.map(day => {
          const cityRecs = CITY_RECOMMENDATIONS[day.cityId] || [];
          const localRec = cityRecs.find(r => r.price_level === '$' || r.category === 'eat') || cityRecs[0];
          
          const newActivities = day.activities.map((act): PlannedActivity => {
            if (act.time === 'morning') {
              return { ...act, isHidden: true };
            }
            return act;
          });

          if (localRec) {
            newActivities.push({
              id: `local-${day.cityId}-${Math.random().toString(36).substring(2, 6)}`,
              label: `${localRec.name}: ${localRec.why_suggested} (Local spot)`,
              type: localRec.category === 'stay' ? 'sleep' : (localRec.category === 'eat' ? 'eat' : 'things-to-do'),
              time: 'morning',
              cost: localRec.price_level === '$$$' ? 150 : (localRec.price_level === '$$' ? 80 : 30),
              highlighted: true,
              isHidden: false
            } as PlannedActivity);
          }
          return { ...day, activities: newActivities };
        });
      }
      if (tid === 'skip') {
        const touristKeywords = ['jamaa', 'jemaa', 'majorelle', 'bahia', 'tannery', 'chouara', 'camel', 'tourist'];
        newDays = newDays.map(day => ({
          ...day,
          activities: day.activities.map((act): PlannedActivity => {
            const isTouristTrap = touristKeywords.some(kw => act.label.toLowerCase().includes(kw));
            return { ...act, isHidden: isTouristTrap || act.isHidden };
          })
        }));
      }
      if (tid === 'sunday') {
        newDays = newDays.map(day => {
          return {
            ...day,
            activities: day.activities.map((act, i) => ({
              ...act,
              highlighted: i === 0 || act.highlighted,
              label: i === 0 && !act.label.includes('(Sunday Favorites)') ? `${act.label} (Sunday Favorites 🌟)` : act.label
            }))
          };
        });
      }
      if (tid === 'makers') {
        newDays = newDays.map(day => {
          const craftSpots = [
            { label: 'Complexe Artisanal Fes', cityId: 'fes', desc: 'Watch master zellij potters and copper-smiths.' },
            { label: 'Ensemble Artisanal Marrakech', cityId: 'marrakech', desc: 'Government-backed weavers and leatherworkers.' },
            { label: 'Thuya Wood Workshops Essaouira', cityId: 'essaouira', desc: 'Inlaid woodwork master artisans.' }
          ];
          const spot = craftSpots.find(s => s.cityId === day.cityId);
          
          const newActs = day.activities.map((act): PlannedActivity => {
            const isCraft = ['artisanal', 'craft', 'wood', 'cooperative', 'souk'].some(k => act.label.toLowerCase().includes(k));
            return { ...act, highlighted: isCraft || act.highlighted };
          });

          if (spot) {
            newActs.push({
              id: `craft-${day.cityId}-${Math.random().toString(36).substring(2, 6)}`,
              label: `${spot.label}: ${spot.desc} 🛠️`,
              type: 'shopping',
              time: 'afternoon',
              cost: 0,
              highlighted: true,
              isHidden: false
            } as PlannedActivity);
          }
          return { ...day, activities: newActs };
        });
      }
      if (tid === 'stuck') {
        newDays = newDays.map(day => {
          const recs = CITY_RECOMMENDATIONS[day.cityId] || [];
          if (recs.length > 0) {
            const randomRec = recs[Math.floor(Math.random() * recs.length)];
            return {
              ...day,
              activities: [
                ...day.activities,
                {
                  id: `stuck-rec-${day.cityId}-${Math.random().toString(36).substring(2, 6)}`,
                  label: `🎲 Surprise: ${randomRec.name} (${randomRec.why_suggested})`,
                  type: randomRec.category === 'stay' ? 'sleep' : (randomRec.category === 'eat' ? 'eat' : 'things-to-do'),
                  time: 'afternoon',
                  cost: 0,
                  highlighted: true
                }
              ]
            };
          }
          return day;
        });
      }
    });

    return { 
      currentDays: newDays,
      activeTransformations: newActiveTransforms 
    };
  }),

  resetTransformations: () => set((state) => ({
    activeTransformations: [],
    currentDays: state.currentDays.map(day => ({
      ...day,
      activities: day.activities
        .filter(act => !act.id.startsWith('local-') && !act.id.startsWith('craft-') && !act.id.startsWith('stuck-rec-'))
        .map(act => ({ ...act, isHidden: false, highlighted: false } as PlannedActivity))
    }))
  })),

  addCity: (cityId) => set((state) => {
    if (state.currentCities.includes(cityId)) return {};
    
    const newDays = [...state.currentDays];
    if (!newDays.find(d => d.cityId === cityId)) {
      newDays.push({ id: `day-${cityId}`, cityId, activities: [] });
    }

    return {
      currentCities: [...state.currentCities, cityId],
      daysPerCity: { ...state.daysPerCity, [cityId]: 1 },
      currentDays: newDays
    };
  }),

  addCustomActivity: (cityId: string, time: DayTime, type: FocusType, label: string, cost?: number, note?: string) => {
    const state = get();
    if (!state.currentCities.includes(cityId as CityId)) {
      state.addCity(cityId as CityId);
    }
    set((state) => {
      const newDays = state.currentDays.map(day => {
        if (day.cityId === cityId) {
          return {
            ...day,
            activities: [...day.activities, {
              id: Math.random().toString(36).substr(2, 9),
              label,
              type,
              time,
              cost: cost || 0,
              note: note || ''
            }]
          };
        }
        return day;
      });
      return { currentDays: newDays };
    });
  },

  addActivity: (cityId, time, type) => set((state) => {
    const labelMap: Record<FocusType, string> = {
      sleep: 'New Stay',
      eat: 'New Dining',
      'things-to-do': 'New Discovery',
      'transport': 'New Transport',
      'visit': 'New Visit',
      'activities': 'New Activity',
      'shopping': 'New Shopping'
    };

    const newDays = state.currentDays.map(day => {
      if (day.cityId === cityId) {
        return {
          ...day,
          activities: [...day.activities, {
            id: Math.random().toString(36).substr(2, 9),
            label: labelMap[type],
            type,
            time,
            cost: 0
          }]
        };
      }
      return day;
    });
    return { currentDays: newDays };
  }),

  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  updateItem: (id, updates) => set((state) => ({
    items: state.items.map(i => i.id === id ? { ...i, ...updates } : i)
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(i => i.id !== id),
    currentDays: state.currentDays.map(d => ({
        ...d,
        activities: d.activities.filter(a => a.id !== id)
    }))
  })),

  removeActivity: (cityId, activityId) => set((state) => {
    const newDays = state.currentDays.map(day => {
      if (day.cityId === cityId) {
        return { ...day, activities: day.activities.filter(a => a.id !== activityId) };
      }
      return day;
    });
    return { currentDays: newDays };
  }),

  updateActivityDetails: (activityId, updates) => set((state) => {
    const newDays = state.currentDays.map(day => ({
      ...day,
      activities: day.activities.map(act => 
        act.id === activityId ? { ...act, ...updates } : act
      )
    }));
    return { currentDays: newDays };
  }),

  reorderItems: (items) => set({ items }),

  saveToJournal: (name) => set((state) => {
    const newPlan: MasterPlan = {
      id: `plan-${Date.now()}`,
      name: name || `Moroccan Adventure ${state.savedPlans.length + 1}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      cities: [...state.currentCities],
      days: [...state.currentDays]
    };
    return { savedPlans: [newPlan, ...state.savedPlans] };
  }),

  loadPlan: (id) => set((state) => {
    const plan = state.savedPlans.find(p => p.id === id);
    if (!plan) return state;
    return {
      currentCities: [...plan.cities] as CityId[],
      currentDays: [...plan.days]
    };
  }),

  loadTemplate: (templateId: string) => set(() => {
    const template = ITINERARY_TEMPLATES.find(t => t.id === templateId);
    if (!template) return {};

    const citiesList: CityId[] = [];
    const daysList: PlannedDay[] = [];
    const daysPerCityMap: Record<string, number> = {};
    const boardItemsList: PlannerCardItem[] = [];

    // Track day count per city in route order
    const cityDayCounter: Record<string, number> = {};

    template.route.forEach((routeDay) => {
      const cityId = routeDay.city.toLowerCase() as CityId;
      if (!citiesList.includes(cityId)) {
        citiesList.push(cityId);
      }

      cityDayCounter[cityId] = (cityDayCounter[cityId] || 0) + 1;
      daysPerCityMap[cityId] = Math.max(daysPerCityMap[cityId] || 0, cityDayCounter[cityId]);

      const dayIdxInCity = cityDayCounter[cityId] - 1;

      let existingDay = daysList.find((d) => d.cityId === cityId);
      if (!existingDay) {
        existingDay = { id: `day-${cityId}`, cityId, activities: [] };
        daysList.push(existingDay);
      }

      const mapType = (t: string): FocusType => {
        if (t === 'stay') return 'sleep';
        if (t === 'eat') return 'eat';
        return 'things-to-do';
      };

      const mapCardType = (t: string): PlannerCardType => {
        if (t === 'stay') return 'sleep';
        if (t === 'eat') return 'eat';
        if (t === 'transit') return 'transport';
        return 'things';
      };

      let cardOrder = 0;

      if (routeDay.morning) {
        const id = `act-${routeDay.day}-m-${Math.random().toString(36).substr(2, 5)}`;
        existingDay.activities.push({
          id,
          label: `${routeDay.morning.title}: ${routeDay.morning.description}`,
          type: mapType(routeDay.morning.type),
          time: 'morning',
          cost: 0,
        });

        boardItemsList.push({
          id: `card-${id}`,
          sourceId: id,
          type: mapCardType(routeDay.morning.type),
          cityId,
          title: routeDay.morning.title,
          subtitle: routeDay.morning.description,
          icon: routeDay.morning.type === 'stay' ? '🏨' : (routeDay.morning.type === 'eat' ? '🍽️' : (routeDay.morning.type === 'transit' ? '🚗' : '🌅')),
          dayIndex: dayIdxInCity,
          order: cardOrder++,
          rawDetails: routeDay.morning
        });
      }

      if (routeDay.afternoon) {
        const id = `act-${routeDay.day}-a-${Math.random().toString(36).substr(2, 5)}`;
        existingDay.activities.push({
          id,
          label: `${routeDay.afternoon.title}: ${routeDay.afternoon.description}`,
          type: mapType(routeDay.afternoon.type),
          time: 'afternoon',
          cost: 0,
        });

        boardItemsList.push({
          id: `card-${id}`,
          sourceId: id,
          type: mapCardType(routeDay.afternoon.type),
          cityId,
          title: routeDay.afternoon.title,
          subtitle: routeDay.afternoon.description,
          icon: routeDay.afternoon.type === 'stay' ? '🏨' : (routeDay.afternoon.type === 'eat' ? '🍽️' : (routeDay.afternoon.type === 'transit' ? '🚗' : '☀️')),
          dayIndex: dayIdxInCity,
          order: cardOrder++,
          rawDetails: routeDay.afternoon
        });
      }

      if (routeDay.evening) {
        const id = `act-${routeDay.day}-e-${Math.random().toString(36).substr(2, 5)}`;
        existingDay.activities.push({
          id,
          label: `${routeDay.evening.title}: ${routeDay.evening.description}`,
          type: mapType(routeDay.evening.type),
          time: 'evening',
          cost: 0,
        });

        boardItemsList.push({
          id: `card-${id}`,
          sourceId: id,
          type: mapCardType(routeDay.evening.type),
          cityId,
          title: routeDay.evening.title,
          subtitle: routeDay.evening.description,
          icon: routeDay.evening.type === 'stay' ? '🏨' : (routeDay.evening.type === 'eat' ? '🍽️' : (routeDay.evening.type === 'transit' ? '🚗' : '🌙')),
          dayIndex: dayIdxInCity,
          order: cardOrder++,
          rawDetails: routeDay.evening
        });
      }
    });

    return {
      currentCities: citiesList,
      currentDays: daysList,
      daysPerCity: daysPerCityMap,
      boardItems: boardItemsList,
      selectedJourneyMode: 'first',
      isOnboardingCompleted: true
    };
  }),

  deleteFromJournal: (id) => set((state) => ({
    savedPlans: state.savedPlans.filter(p => p.id !== id)
  })),

  resetCurrent: () => set({ 
    currentCities: [], 
    currentDays: [],
    items: []
  }),

  reset: () => set({ 
    currentCities: [], 
    currentDays: [],
    items: [],
    activeCityId: null,
    activeItemId: null,
    activeTransformations: [],
    savedTransitRoutes: [],
    activeTransitRoute: null
  }),

  // New mutators
  setCatalogOpen: (isOpen) => set({ isCatalogOpen: isOpen }),
  setCatalogTab: (tab) => set({ activeCatalogTab: tab }),
  setPrintPreviewOpen: (isOpen) => set({ isPrintPreviewOpen: isOpen }),
  setOnboardingCompleted: (completed) => set({ isOnboardingCompleted: completed }),

  toggleSavedTransitRoute: (routeId) => set((state) => {
    const exists = state.savedTransitRoutes.includes(routeId);
    return {
      savedTransitRoutes: exists
        ? state.savedTransitRoutes.filter(id => id !== routeId)
        : [...state.savedTransitRoutes, routeId]
    };
  }),

  isTransitRouteSaved: (routeId) => {
    return get().savedTransitRoutes.includes(routeId);
  },

  setActiveTransitRoute: (route) => set({ activeTransitRoute: route }),

  removeCity: (cityId) => set((state) => {
    const nextDays = { ...state.daysPerCity };
    delete nextDays[cityId];
    return {
      currentCities: state.currentCities.filter(c => c !== cityId),
      daysPerCity: nextDays,
      boardItems: state.boardItems.filter(item => item.cityId !== cityId)
    };
  }),

  updateCityDays: (cityId, days) => set((state) => {
    const updatedDays = { ...state.daysPerCity, [cityId]: Math.max(1, days) };
    const maxDayIdx = Math.max(0, days - 1);
    const updatedItems = state.boardItems.map(item => {
      if (item.cityId === cityId && item.dayIndex > maxDayIdx) {
        return { ...item, dayIndex: maxDayIdx };
      }
      return item;
    });
    return {
      daysPerCity: updatedDays,
      boardItems: updatedItems
    };
  }),

  reorderCities: (startIndex, endIndex) => set((state) => {
    const result = [...state.currentCities];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return { currentCities: result };
  }),

  addCardToBoard: (item) => set((state) => {
    const id = `item-${Math.random().toString(36).substring(2, 9)}`;
    let timeSlot = item.timeSlot;
    if (!timeSlot) {
      if (item.type === 'sleep') timeSlot = 'night';
      else if (item.type === 'eat') timeSlot = 'evening';
      else if (item.type === 'things') timeSlot = 'afternoon';
      else timeSlot = 'morning';
    }
    const columnSlotItems = state.boardItems.filter(
      i => i.cityId === item.cityId && i.dayIndex === item.dayIndex && (i.timeSlot || 'morning') === timeSlot
    );
    const order = columnSlotItems.length;

    const newItem: PlannerCardItem = {
      ...item,
      id,
      order,
      timeSlot
    };

    return {
      boardItems: [...state.boardItems, newItem]
    };
  }),

  removeCardFromBoard: (cardId) => set((state) => {
    const cardToRemove = state.boardItems.find(i => i.id === cardId);
    if (!cardToRemove) return {};

    const remainingItems = state.boardItems.filter(i => i.id !== cardId);
    const updatedItems = remainingItems.map(item => {
      if (item.cityId === cardToRemove.cityId && item.dayIndex === cardToRemove.dayIndex) {
        const columnItemsBefore = remainingItems
          .filter(i => i.cityId === cardToRemove.cityId && i.dayIndex === cardToRemove.dayIndex)
          .sort((a, b) => a.order - b.order);
        const newOrder = columnItemsBefore.findIndex(i => i.id === item.id);
        return { ...item, order: newOrder >= 0 ? newOrder : item.order };
      }
      return item;
    });

    return {
      boardItems: updatedItems
    };
  }),

  moveCard: (cardId, targetColumnId, targetOrder, targetTimeSlot) => set((state) => {
    const match = targetColumnId.match(/^([a-z0-9_]+)-day-(\d+)$/i);
    if (!match) return {};
    const targetCityId = match[1] as CityId;
    const targetDayIndex = parseInt(match[2], 10);

    const itemToMove = state.boardItems.find(i => i.id === cardId);
    if (!itemToMove) return {};

    const newTimeSlot = targetTimeSlot || itemToMove.timeSlot || 'morning';
    const sameColumn = itemToMove.cityId === targetCityId && itemToMove.dayIndex === targetDayIndex;

    let otherItems = state.boardItems.filter(i => i.id !== cardId);

    const targetColItems = otherItems
      .filter(i => i.cityId === targetCityId && i.dayIndex === targetDayIndex)
      .sort((a, b) => a.order - b.order);

    targetColItems.splice(targetOrder, 0, { 
      ...itemToMove, 
      cityId: targetCityId, 
      dayIndex: targetDayIndex,
      timeSlot: newTimeSlot
    });

    const updatedTargetColItems = targetColItems.map((item, idx) => ({
      ...item,
      order: idx
    }));

    let updatedSourceColItems: PlannerCardItem[] = [];
    if (!sameColumn) {
      const sourceColItems = otherItems
        .filter(i => i.cityId === itemToMove.cityId && i.dayIndex === itemToMove.dayIndex)
        .sort((a, b) => a.order - b.order);
      updatedSourceColItems = sourceColItems.map((item, idx) => ({
        ...item,
        order: idx
      }));
    }

    const unaffectedItems = otherItems.filter(i => 
      !(i.cityId === targetCityId && i.dayIndex === targetDayIndex) &&
      !(i.cityId === itemToMove.cityId && i.dayIndex === itemToMove.dayIndex)
    );

    return {
      boardItems: [
        ...unaffectedItems,
        ...updatedTargetColItems,
        ...updatedSourceColItems
      ]
    };
  }),

  clearPlan: () => set({
    currentCities: [],
    daysPerCity: {},
    boardItems: [],
    currentDays: []
  }),

  setTripStartDate: (dateStr) => set({ tripStartDate: dateStr }),
  setActiveAddContext: (ctx) => set({ activeAddContext: ctx, isCatalogOpen: ctx ? true : get().isCatalogOpen }),
  setVibeQuizMergePending: (pending) => set({ vibeQuizMergePending: pending }),

  setSelectedMonth: (month: string) => set({ selectedMonth: month }),
}), {
  name: 'morocco-plan-storage',
  partialize: (state) => ({
    currentCities: state.currentCities,
    currentDays: state.currentDays,
    selectedJourneyMode: state.selectedJourneyMode,
    savedPlans: state.savedPlans,
    pinnedWords: state.pinnedWords,
    pinnedSavvy: state.pinnedSavvy,
    daysPerCity: state.daysPerCity,
    boardItems: state.boardItems,
    isCatalogOpen: state.isCatalogOpen,
    activeCatalogTab: state.activeCatalogTab,
    isPrintPreviewOpen: state.isPrintPreviewOpen,
    isOnboardingCompleted: state.isOnboardingCompleted,
    savedTransitRoutes: state.savedTransitRoutes,
    activeTransitRoute: state.activeTransitRoute,
    selectedMonth: state.selectedMonth,
    tripStartDate: state.tripStartDate,
  }),
}))
