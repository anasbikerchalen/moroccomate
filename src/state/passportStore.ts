import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ListingPlayCategory = 'food' | 'sleep' | 'shopping' | 'things';

export interface PassportPlaceEntry {
  key: string; // `${category}:${city}:${slug}`
  id: string;
  slug: string;
  city: string;
  cityLabel: string;
  category: ListingPlayCategory;
  name: string;
  neighborhood?: string;
  rating?: number;
  url: string;
  visitedAt: number;
  stamped: boolean;
  stampedAt?: number;
}

interface PassportState {
  entries: Record<string, PassportPlaceEntry>;
  soundEnabled: boolean;
  lastUnlockedKey: string | null;
  recordVisit: (place: Omit<PassportPlaceEntry, 'key' | 'visitedAt' | 'stamped'>) => {
    key: string;
    isFirstVisit: boolean;
  };
  unlockStamp: (
    place: Omit<PassportPlaceEntry, 'key' | 'visitedAt' | 'stamped'>
  ) => {
    key: string;
    newlyStamped: boolean;
  };
  toggleSound: () => void;
  clearLastUnlocked: () => void;
  clearPassport: () => void;
}

export function buildPassportKey(
  category: ListingPlayCategory,
  city: string,
  slug: string
): string {
  return `${category}:${city.toLowerCase()}:${slug.toLowerCase()}`;
}

export const usePassportStore = create<PassportState>()(
  persist(
    (set, get) => ({
      entries: {},
      soundEnabled: true,
      lastUnlockedKey: null,

      recordVisit: (place) => {
        const key = buildPassportKey(place.category, place.city, place.slug);
        const existing = get().entries[key];
        const isFirstVisit = !existing;

        set((state) => ({
          entries: {
            ...state.entries,
            [key]: {
              ...place,
              key,
              visitedAt: existing?.visitedAt || Date.now(),
              stamped: existing?.stamped || false,
              stampedAt: existing?.stampedAt,
            },
          },
        }));

        return { key, isFirstVisit };
      },

      unlockStamp: (place) => {
        const key = buildPassportKey(place.category, place.city, place.slug);
        const existing = get().entries[key];
        const newlyStamped = !existing?.stamped;

        if (!newlyStamped) {
          return { key, newlyStamped: false };
        }

        const now = Date.now();
        set((state) => ({
          lastUnlockedKey: key,
          entries: {
            ...state.entries,
            [key]: {
              ...place,
              key,
              visitedAt: existing?.visitedAt || now,
              stamped: true,
              stampedAt: now,
            },
          },
        }));

        return { key, newlyStamped: true };
      },

      toggleSound: () =>
        set((state) => ({
          soundEnabled: !state.soundEnabled,
        })),

      clearLastUnlocked: () => set({ lastUnlockedKey: null }),

      clearPassport: () => set({ entries: {}, lastUnlockedKey: null }),
    }),
    {
      name: 'morocco-passport-storage',
      partialize: (state) => ({
        entries: state.entries,
        soundEnabled: state.soundEnabled,
      }),
    }
  )
);
