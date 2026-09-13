import { CityId } from '../listings/types';

export type PlannerCardType = 
  | 'sleep' 
  | 'eat' 
  | 'things' 
  | 'shop' 
  | 'transport' 
  | 'phrase' 
  | 'safety'
  | 'activity'
  | 'note';

export type TimeSlotId = 'morning' | 'afternoon' | 'evening' | 'night';

export interface PlannerCardItem {
  id: string;                 // Unique UUID generated when item is added to board
  sourceId: string;           // Original database item ID (e.g., sleep listing ID, phrase ID)
  type: PlannerCardType;      // Category of the card
  cityId: CityId;             // Target city this item belongs to
  title: string;              // Name of listing or header of phrase/safety tip
  subtitle?: string;          // E.g., "Riad · from $80/night" or "Local Favorite"
  icon: string;               // Emoji or Lucide icon string identifier
  dayIndex: number;           // 0-indexed day within that city (e.g., Day 0, Day 1)
  order: number;              // Position index within that column for reordering
  timeSlot?: TimeSlotId;      // Target time section (morning, afternoon, evening, night)
  startTime?: string;         // E.g., "09:30 AM"
  endTime?: string;           // E.g., "11:30 AM"
  duration?: string;          // E.g., "2 hours"
  rawDetails: any;            // Store entire original record for modal views and print layout
}

export type BoardCardItem = PlannerCardItem;

export interface CatalogAddContext {
  cityId: CityId;
  dayIndex: number;
  timeSlot: TimeSlotId;
  category?: PlannerCardType;
}

export interface BoardColumn {
  id: string;                 // Unique column ID, e.g., "marrakech-day-0"
  cityId: CityId;
  dayIndex: number;           // Which day of the city (0, 1, 2...)
  globalDayNumber: number;    // Absolute day of the whole trip (Day 1, Day 2...)
}

