import { TOURISTIC_PROFILES } from './touristicHierarchy';

export const cities: any[] = Object.values(TOURISTIC_PROFILES).map((profile) => {
  const id = profile.id || profile.name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  const neighborhoods = [
    ...(profile.touristicNeighborhoods || []),
    ...(profile.midNeighborhoods || []),
    ...(profile.lowNeighborhoods || [])
  ];
  return {
    id,
    name: profile.name,
    tier: profile.tier,
    neighborhoods: neighborhoods.length > 0 ? neighborhoods : ['Centre-Ville'],
    color: profile.tier === 'touristic' ? '#e07050' : profile.tier === 'mid' ? '#4ade80' : '#94a3b8',
    lat: 31.7917,
    lon: -7.0926
  };
});

export const cityMap: Record<string, any> = {};
for (const c of cities) {
  cityMap[c.id] = c;
}