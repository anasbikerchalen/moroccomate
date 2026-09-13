export type TravelPersona = 'Solo' | 'Couple' | 'Family' | 'Student' | 'Digital Nomad' | 'Adventure';

export type UniversalSection = 
  | 'Connectivity' 
  | 'Money' 
  | 'Health & Hygiene' 
  | 'Culture & Etiquette' 
  | 'Practical Essentials' 
  | 'Packing' 
  | 'Safety & Emergency';

export interface GuideSection {
  heading?: string;
  body?: string;
  bullets?: string[];
}

export interface GuideDetail {
  id: string;
  title: string;
  heroImage: string;
  sections: GuideSection[];
}

export interface UniversalSectionContent {
  section: UniversalSection;
  title: string;
  subtitle: string;
  icon: string;
  image: string; // The full background image for the carousel
  guideId?: string; // Links to the detailed guide
}

export interface PersonalizedEssential {
  title: string;
  subtitle: string;
  icon: string; 
  image: string; // The cutout image overlay for the card
  bgColor: string; // Tailwind background color class (e.g. 'bg-red-50')
  progressColor: string; // Tailwind color class for bottom progress bar
  guideId?: string; // Links to the detailed guide
}

export interface PersonaEssentialsData {
  persona: TravelPersona;
  // The priority array determines the order of the 7 universal sections in the carousel
  priorityOrder: UniversalSection[];
  // Mapping of each universal section to its specific content for this persona
  universal: Record<UniversalSection, UniversalSectionContent>;
  // The exact 5 personalized essentials to show in the cards
  topEssentials: PersonalizedEssential[];
}
