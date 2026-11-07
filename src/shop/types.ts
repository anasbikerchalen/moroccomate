export type CityId =
  | 'marrakech' | 'fes' | 'agadir' | 'chefchaouen' | 'essaouira' | 'casablanca' | 'tangier' 
  | 'merzouga' | 'rabat' | 'meknes' | 'mhamid' | 'imlil_toubkal' | 'ourika' | 'ouzoud' 
  | 'todra_dades' | 'ouarzazate' | 'paradise_valley' | 'taghazout' | 'imsouane' | 'dakhla' 
  | 'asilah' | 'saidia' | 'al_hoceima' | 'ifrane_azrou' | 'oukaimeden' | 'el_jadida' 
  | 'tetouan' | 'tetouan_martil' | 'taroudant_tafraoute' | 'skoura_draa' | 'moulay_idriss'
  | 'ifrane' | 'taroudant' | 'zagora' | 'oualidia';

export type PricingModel = 'fixed' | 'negotiable' | 'mixed' | 'market_price';

export type ShopType = 
  | 'souk_stall' 
  | 'boutique' 
  | 'cooperative' 
  | 'mall_store' 
  | 'pharmacy' 
  | 'supermarket' 
  | 'designer_atelier' 
  | 'concept_store';

export type AuthenticitySeal = 
  | 'label_artisanat' 
  | 'wfto' 
  | 'zellige_de_fes' 
  | 'anou' 
  | 'maalem_certified';

export type PriceLevel = 'budget' | 'mid-range' | 'premium' | 'luxury';

export type PaymentMethod = 'cash' | 'visa' | 'mastercard' | 'apple_pay' | 'google_pay' | 'amex';

export interface ShopOpeningHours {
  day: string;
  hours: string;
}

export interface ShopCoordinates {
  lat: number;
  lng: number;
}

export interface ShopShippingInfo {
  available: boolean;
  partner?: 'dhl' | 'fedex' | 'la_poste' | 'shop_arranges';
  details?: string;
}

export interface ShopProductPriceEstimate {
  item: string;
  range?: string;
  priceEstimate?: string;
}

export interface ShopReviewItem {
  author: string;
  text: string;
  rating: number;
  type: 'tourist' | 'local';
}

export interface ShopListing {
  id: string;
  city: CityId;
  name: string;
  type: ShopType;
  category: string;
  neighborhood: string;
  description: string;
  googlePlaceId?: string;
  nonCopyrightImage?: string;
  images?: string[];
  googleRating?: number;
  googleReviewCount?: number;
  priceLevel: PriceLevel;
  pricingModel: PricingModel;
  isVerified: boolean;
  isWheelchairAccessible?: boolean;
  hasDelivery?: boolean;
  
  // Geolocation & Navigation
  googleMapsUrl: string;
  address: string;
  landmark?: string;
  navSteps?: string[];
  coordinates?: ShopCoordinates;
  distanceText?: string;
  what3words?: string;
  
  // Evaluation & Practical
  tags: string[];
  authenticitySeals?: AuthenticitySeal[];
  paymentMethods: PaymentMethod[];
  productCategories: string[];
  languagesSpoken: string[];
  
  // Details
  phoneNumber?: string;
  website?: string;
  instagram?: string;
  openingHours: ShopOpeningHours[];
  fridayHours?: string;
  ramadanHours?: string;
  
  shipping?: ShopShippingInfo;
  workshopVisitable?: boolean;
  returnPolicy?: string;
  establishedYear?: number;
  bestTimeToVisit?: string;
  
  // Experience
  atmosphere?: string;
  storeSize?: 'boutique' | 'medium' | 'large' | 'department-store';
  crowdLevel?: 'quiet' | 'moderate' | 'busy';
  
  // Products & Prices
  whatTheySell?: ShopProductPriceEstimate[];
  
  // Trust & Reviews
  reviewSummary?: string;
  recentReviews?: ShopReviewItem[];
  isLocalFavorite?: boolean;
  
  // Local Context
  nearbyLandmarks?: string[];
  
  // Story & Background
  history?: string;
  ownerName?: string;
  ownerBio?: string;
  
  // Legacy / UI Badges
  tip?: string;
  badge?: string;
}

export interface ShopQueryFilters {
  city?: string;
  category?: string;
  type?: ShopType;
  priceLevel?: PriceLevel;
  pricingModel?: PricingModel;
  isVerified?: boolean;
  workshopVisitable?: boolean;
  isLocalFavorite?: boolean;
  search?: string;
  minRating?: number;
}
