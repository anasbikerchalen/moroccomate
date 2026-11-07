/**
 * TypeScript Data Models for Morocco Finder Shops
 * Completely data-driven relational architecture matching SQL schema specifications.
 */

// 1. Shop Type Definition
export interface ShopType {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

// 2. Product Category (Reusable Library)
export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  display_order?: number;
}

// 3. Shop Highlight (Reusable Library)
export interface ShopHighlight {
  id: string;
  name: string;
  icon: string;
  description: string;
  display_order?: number;
}

// 4. Nearby Place & Distance (Reusable Library)
export interface ShopNearbyPlace {
  id: string;
  name: string;
  category: 'landmark' | 'square' | 'souk' | 'transport' | 'cafe' | 'restaurant' | 'attraction';
  icon: string;
  latitude: number;
  longitude: number;
  walking_minutes: number;
  display_order: number;
}

// 5. Pricing Structure
export type ShopPricingType = 'fixed' | 'negotiable' | 'mixed';

export interface ShopPricing {
  pricing_type: ShopPricingType;
  title?: string;
  note: string;
}

// 6. Payment Methods & Currency
export interface PaymentMethod {
  id: string;
  name: string;
  icon: 'cash' | 'credit-card' | 'contactless' | 'visa' | 'mastercard';
}

export interface ShopPayment {
  cash_currency: string;
  cards_accepted: boolean;
  methods: PaymentMethod[];
  custom_note?: string;
}

// 7. Opening Hours
export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface ShopOpeningHourDay {
  day_of_week: DayOfWeek;
  day_label: string;
  short_label: string;
  is_closed: boolean;
  open_time: string; // e.g. "09:30"
  close_time: string; // e.g. "19:00"
}

export interface ShopOpeningHours {
  schedule: ShopOpeningHourDay[];
  timezone?: string;
  note?: string;
}

// 8. Languages
export interface Language {
  id: string;
  name: string;
  code?: string;
}

// 9. Shipping Structure
export type ShippingAvailability = 'none' | 'local' | 'international' | 'international_on_request';

export interface ShopShipping {
  available: boolean;
  international: boolean;
  on_request: boolean;
  label: string;
  note?: string;
}

// 10. Shop Media / Photos
export interface ShopMedia {
  id: string;
  file_url: string;
  media_type: 'hero' | 'gallery';
  display_order: number;
  alt_text: string;
}

// 11. Conditional Section Visibility Flags (for CMS / Admin customization)
export interface ShopSectionVisibility {
  show_products?: boolean;
  show_highlights?: boolean;
  show_nearby?: boolean;
  show_pricing?: boolean;
  show_payment?: boolean;
  show_opening_hours?: boolean;
  show_languages?: boolean;
  show_shipping?: boolean;
}

// 12. Main Complete Shop Model
export interface ShopListing {
  id: string;
  name: string;
  slug: string;
  shop_type: ShopType;
  short_description: string;

  // Location
  city: string;
  neighborhood: string;
  address: string;
  latitude: number;
  longitude: number;
  directions_url: string;

  // Media
  media: ShopMedia[];

  // Dynamic Relations
  product_categories: ProductCategory[];
  highlights: ShopHighlight[];
  nearby_places: ShopNearbyPlace[];
  pricing: ShopPricing;
  payment: ShopPayment;
  opening_hours: ShopOpeningHours;
  languages: Language[];
  shipping: ShopShipping;

  // Publishing & CMS
  is_published: boolean;
  created_at: string;
  updated_at: string;
  visibility: ShopSectionVisibility;
}
