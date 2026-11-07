import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SavedListing {
  id: string;
  type: string;
  name: string;
  city: string;
  category?: string;
  image?: string;
}

interface SavedState {
  bookmarks: SavedListing[];
  toggleBookmark: (listing: SavedListing) => void;
  addBookmark: (listing: SavedListing) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

export const useSavedStore = create<SavedState>()(
  persist(
    (set, get) => ({
      bookmarks: [],

      toggleBookmark: (listing) => set((state) => {
        const isAlreadySaved = state.bookmarks.find(b => b.id === listing.id);
        if (isAlreadySaved) {
          return { bookmarks: state.bookmarks.filter(b => b.id !== listing.id) };
        }
        return { bookmarks: [...state.bookmarks, listing] };
      }),

      addBookmark: (listing) => set((state) => {
        const isAlreadySaved = state.bookmarks.find(b => b.id === listing.id);
        if (isAlreadySaved) return state;
        return { bookmarks: [...state.bookmarks, listing] };
      }),

      removeBookmark: (id) => set((state) => ({
        bookmarks: state.bookmarks.filter(b => b.id !== id)
      })),

      isBookmarked: (id) => !!get().bookmarks.find(b => b.id === id),
    }),
    { name: 'morocco-saved-storage' }
  )
);
