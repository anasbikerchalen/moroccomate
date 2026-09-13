export type SocialThoughtCategory = 
  | 'budget_hack' 
  | 'scam_warning' 
  | 'transport_tip' 
  | 'safety_alert' 
  | 'general_advice' 
  | 'place_recommendation';

export type SocialSourcePlatform = 'reddit' | 'facebook' | 'tripadvisor' | 'twitter' | 'instagram' | 'forum' | 'blog' | 'google_review' | 'tiktok' | string;

export interface SocialThought {
  id: string;
  cityId: string; // e.g. 'marrakech', 'fez', 'tangier', 'all'
  category: SocialThoughtCategory;
  scamCategory?: string; // e.g. 'taxi', 'medina_guides', 'shopping', 'menus', 'henna'
  sourcePlatform: SocialSourcePlatform;
  authorOrThread: string;
  dateAdded: string; // e.g. '2024-03'
  title: string;
  quoteOrContent: string;
  summaryTakeaway: string;
  upvotesOrReactions?: number;
  verifiedLocalOrTraveler?: 'verified_local' | 'frequent_traveler' | 'first_time_visitor';
  originalUrl?: string;
  tags: string[];
}

export interface SocialThoughtFilter {
  cityId?: string;
  category?: SocialThoughtCategory;
  scamCategory?: string;
  sourcePlatform?: SocialSourcePlatform;
  searchQuery?: string;
}
