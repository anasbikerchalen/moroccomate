export interface City {
  id: string;
  name: string;
  slug: string;
  // Add other fields as needed
}

export interface Neighborhood {
  id: string;
  name: string;
  safety: 'safe' | 'avoid';
  // Add other fields as needed
}
