import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MenuItem } from '../listings/types';
import type { MenuLanguage } from '../data/menuTranslations';

export interface SelectedDishItem {
  dish: MenuItem;
  quantity: number;
}

export type CurrencyCode = 'MAD' | 'EUR' | 'USD';

// Approximate live benchmark rates (1 EUR ~ 10.8 MAD, 1 USD ~ 10.0 MAD)
export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  MAD: 1,
  EUR: 0.092, // 1 MAD = 0.092 EUR (~10.87 MAD/EUR)
  USD: 0.10,  // 1 MAD = 0.10 USD (~10 MAD/USD)
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  MAD: 'DH',
  EUR: '€',
  USD: '$',
};

export function formatPrice(priceInMAD: number, currency: CurrencyCode): string {
  if (currency === 'MAD') {
    return `${Math.round(priceInMAD)} DH`;
  }
  const converted = priceInMAD * EXCHANGE_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  return currency === 'EUR' ? `${converted.toFixed(1)} ${symbol}` : `${symbol}${converted.toFixed(1)}`;
}

interface TastingState {
  placeId: string | null;
  placeName: string | null;
  city: string | null;
  selectedDishes: Record<string, SelectedDishItem>; // key: dish.id
  currency: CurrencyCode;
  menuLanguage: MenuLanguage;

  // Actions
  setCurrency: (currency: CurrencyCode) => void;
  setMenuLanguage: (lang: MenuLanguage) => void;
  initPlaceSession: (placeId: string, placeName: string, city: string) => void;
  toggleDish: (dish: MenuItem, placeId: string, placeName: string, city: string) => void;
  incrementDish: (dish: MenuItem, placeId: string, placeName: string, city: string) => void;
  decrementDish: (dishId: string) => void;
  removeDish: (dishId: string) => void;
  clearDishes: () => void;
  isDishSelected: (dishId: string) => boolean;
  getDishQuantity: (dishId: string) => number;
  getTotalItemsCount: () => number;
  getTotalPriceMAD: () => number;
}

export const useTastingStore = create<TastingState>()(
  persist(
    (set, get) => ({
      placeId: null,
      placeName: null,
      city: null,
      selectedDishes: {},
      currency: 'MAD',
      menuLanguage: 'ar',

      setCurrency: (currency) => set({ currency }),
      setMenuLanguage: (menuLanguage) => set({ menuLanguage }),

      initPlaceSession: (placeId, placeName, city) => {
        const state = get();
        // If switching to a different restaurant, only reset if current is empty or user confirms
        if (state.placeId && state.placeId !== placeId && Object.keys(state.selectedDishes).length === 0) {
          set({ placeId, placeName, city, selectedDishes: {} });
        } else if (!state.placeId) {
          set({ placeId, placeName, city });
        }
      },

      toggleDish: (dish, placeId, placeName, city) => {
        const state = get();
        // If adding for a new place, reset selection to this place
        const isDifferentPlace = state.placeId && state.placeId !== placeId;
        const currentDishes = isDifferentPlace ? {} : { ...state.selectedDishes };

        if (currentDishes[dish.id]) {
          delete currentDishes[dish.id];
        } else {
          currentDishes[dish.id] = { dish, quantity: 1 };
        }

        set({
          placeId,
          placeName,
          city,
          selectedDishes: currentDishes,
        });
      },

      incrementDish: (dish, placeId, placeName, city) => {
        const state = get();
        const isDifferentPlace = state.placeId && state.placeId !== placeId;
        const currentDishes = isDifferentPlace ? {} : { ...state.selectedDishes };
        const existing = currentDishes[dish.id];

        if (existing) {
          currentDishes[dish.id] = { ...existing, quantity: existing.quantity + 1 };
        } else {
          currentDishes[dish.id] = { dish, quantity: 1 };
        }

        set({
          placeId,
          placeName,
          city,
          selectedDishes: currentDishes,
        });
      },

      decrementDish: (dishId) => {
        const state = get();
        const currentDishes = { ...state.selectedDishes };
        const existing = currentDishes[dishId];
        if (!existing) return;

        if (existing.quantity > 1) {
          currentDishes[dishId] = { ...existing, quantity: existing.quantity - 1 };
        } else {
          delete currentDishes[dishId];
        }

        set({ selectedDishes: currentDishes });
      },

      removeDish: (dishId) => {
        const state = get();
        const currentDishes = { ...state.selectedDishes };
        delete currentDishes[dishId];
        set({ selectedDishes: currentDishes });
      },

      clearDishes: () => set({ selectedDishes: {} }),

      isDishSelected: (dishId) => {
        return Boolean(get().selectedDishes[dishId]);
      },

      getDishQuantity: (dishId) => {
        return get().selectedDishes[dishId]?.quantity || 0;
      },

      getTotalItemsCount: () => {
        return Object.values(get().selectedDishes).reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPriceMAD: () => {
        return Object.values(get().selectedDishes).reduce(
          (sum, item) => sum + item.dish.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'morocco-tasting-order-storage',
    }
  )
);
