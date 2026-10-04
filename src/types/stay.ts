/**
 * Stay Listing Template Data Schema & Type Definitions
 * Designed for Morocco Finder & Modular Booking Platforms.
 * 
 * Divided into 3 architecture tiers:
 * 1. FIXED: Always present on every property (Name, Type, Location)
 * 2. DYNAMIC: Standard layout sections whose elements are populated from reusable libraries
 * 3. CONDITIONAL: Sections that can be toggled on/off per stay
 */

// ==========================================
// 1. FIXED SECTIONS & ENUMS
// ==========================================

export type PropertyType =
  | 'Riad'
  | 'Hotel'
  | 'Guesthouse'
  | 'Dar'
  | 'Kasbah'
  | 'Hostel'
  | 'Apartment'
  | 'Villa'
  | 'Desert Camp'
  | 'Lodge'
  | 'Traditional House'
  | 'Boutique Hotel'
  | 'Resort';

export interface PropertyLocation {
  city: string;
  neighborhood: string;
  exact_address: string;
  latitude: number;
  longitude: number;
  directions_url?: string;
  directions_label?: string; // Default: "Get directions"
}

// ==========================================
// 2. DYNAMIC CONTENT: WALKING DISTANCE & NEARBY
// ==========================================

export type NearbyCategory =
  | 'Landmark'
  | 'Souk / Market'
  | 'Beach'
  | 'Square'
  | 'Restaurant Area'
  | 'Train Station'
  | 'Bus Station'
  | 'Taxi'
  | 'Airport'
  | 'Marina'
  | 'Nature'
  | 'Museum'
  | 'Attraction'
  | 'Activity'
  | 'Village'
  | 'Other';

export interface NearbyPlace {
  id: string;
  name: string;
  category: NearbyCategory;
  walking_time_minutes: number;
  icon?: string; // Optional icon identifier from Icon Library
  latitude?: number;
  longitude?: number;
  relative_angle?: number; // Radial angle in degrees for map graph visualization (0-360)
  relative_distance?: number; // Normalized radial distance (0.3 - 0.95) for the schematic graph
}

// ==========================================
// 3. DYNAMIC CONTENT: TRADITIONAL SPACES & FEATURES
// ==========================================

export type FeatureCategory =
  | 'Traditional Space'
  | 'Architectural'
  | 'Outdoor & Nature'
  | 'Wellness & Relaxation'
  | 'Common Area'
  | 'Dining & Social';

export interface PropertyFeature {
  id: string;
  name: string;
  category: FeatureCategory;
  description: string;
  icon: string; // Identifier matching StayIcon
  highlight_tag?: string;
}

// ==========================================
// 4. DYNAMIC CONTENT: ROOM CONFIGURATION
// ==========================================

export type BedType =
  | 'King'
  | 'Queen'
  | 'Double'
  | 'Single'
  | 'Bunk'
  | 'Twin'
  | 'Sofa Bed';

export interface BedConfig {
  bed_type: BedType;
  quantity: number;
}

export type BathroomType =
  | 'private'
  | 'shared'
  | 'none';

export type ViewType =
  | 'courtyard'
  | 'street'
  | 'city'
  | 'garden'
  | 'mountain'
  | 'sea'
  | 'pool'
  | 'desert'
  | 'no_view';

export interface RoomDetails {
  room_name: string;
  beds: BedConfig[];
  bathroom_type: BathroomType;
  bathroom_label?: string; // e.g., "Private bathroom", "Shared bathroom"
  view_type: ViewType;
  view_label?: string; // e.g., "Courtyard view", "Ocean view"
  max_guests: number;
  room_size_sqm?: number;
}

// ==========================================
// 5. DYNAMIC CONTENT: COMFORT & AMENITIES
// ==========================================

export interface ClimateControlAmenity {
  available: boolean;
  working: boolean;
  has_ac: boolean;
  has_heating: boolean;
  has_extra_blankets: boolean;
  has_fan?: boolean;
  details?: string[];
}

export interface BreakfastAmenity {
  available: boolean;
  included: boolean;
  type: string; // e.g., "Traditional Moroccan breakfast", "Continental", "Berber breakfast"
  start_time?: string; // e.g., "08:00"
  end_time?: string; // e.g., "10:30"
  notes?: string;
}

export interface WifiAmenity {
  available: boolean;
  location: string; // e.g., "Inside rooms and common areas"
  quality: string; // e.g., "Fast Wi-Fi available"
  speed_mbps?: number;
}

export interface ExtraServiceItem {
  id: string;
  name: string;
  available: boolean;
  is_free?: boolean;
  tag?: string; // e.g., "available", "on request"
}

export interface ExtraServicesAmenity {
  services: ExtraServiceItem[];
}

export interface PropertyAmenities {
  climate: ClimateControlAmenity;
  breakfast: BreakfastAmenity;
  wifi: WifiAmenity;
  extra_services: ExtraServicesAmenity;
  custom_amenities?: {
    id: string;
    category: string;
    name: string;
    icon: string;
    description?: string;
  }[];
}

// ==========================================
// 6. POLICIES & PAYMENTS (FIXED STRUCTURE, DYNAMIC VALUES)
// ==========================================

export type LateArrivalsType =
  | '24_hour_front_desk'
  | 'host_available'
  | 'self_check_in'
  | 'not_available'
  | 'on_request';

export type PaymentMethod =
  | 'credit_card'
  | 'cash'
  | 'bank_transfer'
  | 'mobile_payment';

export type Currency = 'MAD' | 'EUR' | 'USD' | 'GBP';

export type CancellationType =
  | 'free_cancellation'
  | 'non_refundable'
  | 'custom';

export interface PropertyPolicies {
  check_in_start: string; // e.g., "15:00"
  check_in_end: string; // e.g., "23:00"
  check_out_time: string; // e.g., "11:00"
  late_arrivals: {
    type: LateArrivalsType;
    primary_text: string; // e.g., "24-hour front desk"
    secondary_text?: string; // e.g., "(host available)"
  };
  payment: {
    methods: PaymentMethod[];
    accepted_cards?: string[]; // e.g., ["Visa", "Mastercard"]
    currencies: Currency[];
    cash_preferred?: boolean;
    notes?: string; // e.g., "Moroccan Dirham (MAD), Cash preferred"
  };
  cancellation: {
    type: CancellationType;
    deadline_hours: number; // e.g., 48
    policy_summary: string; // e.g., "Free cancellation up to 48 hours before arrival."
    penalty_summary?: string; // e.g., "After that, the first night is charged."
  };
}

// ==========================================
// 7. CONDITIONAL SECTION VISIBILITY FLAGS
// ==========================================

export interface SectionVisibilityFlags {
  show_walking_distance?: boolean;
  show_traditional_spaces?: boolean;
  show_room_details?: boolean;
  show_comfort_amenities?: boolean;
  show_breakfast?: boolean;
  show_extra_services?: boolean;
  show_policies?: boolean;
  show_exact_location?: boolean;
}

// ==========================================
// 8. MASTER STAY TEMPLATE INTERFACE
// ==========================================

export interface StayListing {
  id: string;
  name: string;
  type: PropertyType;
  tagline?: string;
  hero_image_url: string;
  hero_image_alt?: string;
  gallery?: string[];
  location: PropertyLocation;
  walking_distance: NearbyPlace[];
  traditional_spaces: PropertyFeature[];
  room_details: RoomDetails;
  amenities: PropertyAmenities;
  policies: PropertyPolicies;
  visibility: SectionVisibilityFlags;
  // Metadata for backend sync
  created_at?: string;
  updated_at?: string;
}
