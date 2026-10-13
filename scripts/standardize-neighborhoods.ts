import fs from 'fs';
import path from 'path';

// 1. Build city -> official neighborhoods dictionary from touristic_organization.md
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const orgPath = path.resolve(__dirname, '../touristic_organization.md');
const orgContent = fs.readFileSync(orgPath, 'utf8');
const cityToNeighborhoods: Record<string, string[]> = {};
let currentCity: string | null = null;

for (const line of orgContent.split('\n')) {
  const cityMatch = line.match(/^\*\s+\*\*\d+\.\d+\s+([^*]+)\*\*/);
  if (cityMatch) {
    currentCity = cityMatch[1].trim();
    if (!cityToNeighborhoods[currentCity]) cityToNeighborhoods[currentCity] = [];
    continue;
  }
  const neighMatch = line.match(/^\s+\*\s+\*\*\d+\.\d+\.\d+\s+[^:]+:\*\*\s*(.*)/);
  if (neighMatch && currentCity) {
    const rawList = neighMatch[1].split(',').map((s: string) => s.replace(/\([^)]*\)/g, '').trim()).filter(Boolean);
    cityToNeighborhoods[currentCity].push(...rawList);
  }
}

const cityIdToName: Record<string, string> = {
  marrakech: 'Marrakech',
  fes: 'Fès',
  agadir: 'Agadir',
  casablanca: 'Casablanca',
  chefchaouen: 'Chefchaouen',
  essaouira: 'Essaouira',
  tangier: 'Tanger',
  rabat: 'Rabat',
  meknes: 'Meknès',
  dakhla: 'Dakhla',
  ouarzazate: 'Ouarzazate',
  taghazout: 'Taghazout',
  al_hoceima: 'Al Hoceïma',
  asilah: 'Assilah',
  el_jadida: 'El Jadida',
  saidia: 'Saïdia',
  tetouan: 'Tétouan',
  tetouan_martil: 'Tétouan',
  taroudant: 'Taroudant',
  taroudant_tafraoute: 'Taroudant',
  ifrane: 'Ifrane',
  ifrane_azrou: 'Ifrane',
  zagora: 'Zagora',
  oualidia: 'Oualidia'
};

function normalizeStr(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

const listingsDir = path.resolve(__dirname, '../src/listings');
const files: string[] = [];

function walk(dir: string) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (f.endsWith('.ts') && !['types.ts', 'index.ts', 'utils.ts', 'placeRoutes.ts'].includes(f)) {
      files.push(full);
    }
  }
}
walk(listingsDir);

let totalReplacements = 0;
let filesModified = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  const baseName = path.basename(file).split('.')[0];
  const officialCityName = cityIdToName[baseName];
  if (!officialCityName || !cityToNeighborhoods[officialCityName]) continue;

  const validNeighborhoods = cityToNeighborhoods[officialCityName];

  content = content.replace(/neighborhood:\s*['"]([^'"]+)['"]/g, (match, currentNeigh) => {
    if (validNeighborhoods.includes(currentNeigh)) return match;

    const normCurrent = normalizeStr(currentNeigh);

    for (const valid of validNeighborhoods) {
      if (normalizeStr(valid) === normCurrent) {
        totalReplacements++;
        return `neighborhood: '${valid}'`;
      }
    }

    if (normCurrent.includes('medina') || normCurrent.includes('oldmedina')) {
      const medinaOption = validNeighborhoods.find(v => normalizeStr(v).includes('medina'));
      if (medinaOption) {
        totalReplacements++;
        return `neighborhood: '${medinaOption}'`;
      }
    }
    if (normCurrent.includes('gueliz')) {
      const guelizOption = validNeighborhoods.find(v => normalizeStr(v).includes('gueliz'));
      if (guelizOption) {
        totalReplacements++;
        return `neighborhood: '${guelizOption}'`;
      }
    }
    if (normCurrent.includes('hivernage')) {
      const hivOption = validNeighborhoods.find(v => normalizeStr(v).includes('hivernage'));
      if (hivOption) {
        totalReplacements++;
        return `neighborhood: '${hivOption}'`;
      }
    }
    if (normCurrent.includes('jemaa')) {
      const jemaaOption = validNeighborhoods.find(v => normalizeStr(v).includes('jemaa'));
      if (jemaaOption) {
        totalReplacements++;
        return `neighborhood: '${jemaaOption}'`;
      }
    }

    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    filesModified++;
  }
}

console.log(`Standardization complete: ${filesModified} files modified, ${totalReplacements} neighborhoods aligned.`);
