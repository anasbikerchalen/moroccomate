// City color token system
// Used by: map tinting, dashboard background shift, city cards, compare view
// Does NOT modify any data file

export type CityPalette = {
  primary: string;
  secondary: string;
  tint: string; // right panel background shift when city is selected
  vibe: string; // The atmospheric "hook" for the city
};

export const cityPalettes: Record<string, CityPalette> = {
  marrakech: {
    primary:   "#C0603A",
    secondary: "#D4956A",
    tint:      "#FDF0EB",
    vibe:      "Red Dust & Midnight Tea",
  },
  agadir: {
    primary:   "#3A8FC0",
    secondary: "#F2E8D5",
    tint:      "#EAF4F8",
    vibe:      "Atlantic Breeze & Golden Sands",
  },
  casablanca: {
    primary:   "#6B7F99",
    secondary: "#EFEFEF",
    tint:      "#F2F3F5",
    vibe:      "Art Deco & Ocean Salt",
  },
  fes: {
    primary:   "#C48A2A",
    secondary: "#FAF0DC",
    tint:      "#FDF6E3",
    vibe:      "Labyrinth of Time & Leather",
  },
  tangier: {
    primary:   "#3A9E7E",
    secondary: "#EAF4F1",
    tint:      "#EAF6F2",
    vibe:      "Where Two Seas Meet",
  },
  chefchaouen: {
    primary:   "#1B4F8C",
    secondary: "#F5F2ED",
    tint:      "#EEF4FB",
    vibe:      "The Blue Dream of the Rif",
  },
  essaouira: {
    primary:   "#2A9E9E",
    secondary: "#8B7D6B",
    tint:      "#EAF2F2",
    vibe:      "Wind-Swept Walls & Woodsmoke",
  },
  merzouga: {
    primary:   "#E07050",
    secondary: "#FDF0EB",
    tint:      "#FDF6E3",
    vibe:      "Golden Dunes & Starlit Silence",
  },
  rabat: {
    primary:   "#C9A84C",
    secondary: "#FDF6E3",
    tint:      "#FDF9F0",
    vibe:      "Imperial Elegance & Atlantic Mist",
  },
};

export const getCityTheme = (cityId?: string): CityPalette => {
  const key = (cityId || '').toLowerCase();
  return cityPalettes[key] || cityPalettes.marrakech;
};
