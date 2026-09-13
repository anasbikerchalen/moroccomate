import { getLegacyNeighborhoods } from './tourismAreas';

export const marrakech: any = { 
  id: 'marrakech', 
  name: 'Marrakech', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('marrakech', false),
  subRegions: ['imlil_toubkal', 'ourika', 'ouzoud', 'oukaimeden'],
  images: { card: '/src/assets/images/cities/cards/marrakech_card_1786472571395.jpg', background: '/src/assets/images/cities/cards/marrakech_card_1786472571395.jpg', hero: '/src/assets/images/cities/cards/marrakech_card_1786472571395.jpg' },
  color: '#e07050', lat: 31.6295, lon: -7.9811 
};
export const fes: any = { 
  id: 'fes', 
  name: 'Fès', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('fes', false),
  subRegions: ['ifrane', 'azrou'],
  images: { card: '/src/assets/images/cities/cards/fes_card_1786472582437.jpg', background: '/src/assets/images/cities/cards/fes_card_1786472582437.jpg', hero: '/src/assets/images/cities/cards/fes_card_1786472582437.jpg' },
  color: '#e07050', lat: 34.0181, lon: -5.0078 
};
export const agadir: any = { 
  id: 'agadir', 
  name: 'Agadir', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('agadir', false),
  subRegions: ['paradise_valley', 'taghazout', 'imsouane', 'taroudant', 'tafraoute', 'tiznit'],
  images: { card: '/src/assets/images/cities/cards/agadir_card_1786472592454.jpg', background: '/src/assets/images/cities/cards/agadir_card_1786472592454.jpg', hero: '/src/assets/images/cities/cards/agadir_card_1786472592454.jpg' },
  color: '#4ade80', lat: 30.4278, lon: -9.5981 
};
export const casablanca: any = { 
  id: 'casablanca', 
  name: 'Casablanca', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('casablanca', false),
  subRegions: ['el_jadida', 'mohammedia'],
  images: { card: '/src/assets/images/cities/cards/casablanca_card_1786472601791.jpg', background: '/src/assets/images/cities/cards/casablanca_card_1786472601791.jpg', hero: '/src/assets/images/cities/cards/casablanca_card_1786472601791.jpg' },
  color: '#94a3b8', lat: 33.5731, lon: -7.5898 
};
export const chefchaouen: any = { 
  id: 'chefchaouen', 
  name: 'Chefchaouen', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('chefchaouen', false),
  images: { card: '/src/assets/images/cities/cards/chefchaouen_card_1786472611571.jpg', background: '/src/assets/images/cities/cards/chefchaouen_card_1786472611571.jpg', hero: '/src/assets/images/cities/cards/chefchaouen_card_1786472611571.jpg' },
  color: '#60a5fa', lat: 35.1688, lon: -5.2636 
};
export const essaouira: any = { 
  id: 'essaouira', 
  name: 'Essaouira', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('essaouira', false),
  images: { card: '/src/assets/images/cities/cards/essaouira_card_1786472621078.jpg', background: '/src/assets/images/cities/cards/essaouira_card_1786472621078.jpg', hero: '/src/assets/images/cities/cards/essaouira_card_1786472621078.jpg' },
  color: '#4ade80', lat: 31.5085, lon: -9.7595 
};
export const tangier: any = { 
  id: 'tangier', 
  name: 'Tangier', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('tangier', false),
  subRegions: ['asilah', 'martil', 'mdiq', 'fnideq', 'cabo_negro', 'marina_smir'],
  images: { card: '/src/assets/images/cities/cards/tangier_card_1786472629356.jpg', background: '/src/assets/images/cities/cards/tangier_card_1786472629356.jpg', hero: '/src/assets/images/cities/cards/tangier_card_1786472629356.jpg' },
  color: '#4ade80', lat: 35.7595, lon: -5.8340 
};
export const merzouga: any = { 
  id: 'merzouga', 
  name: 'Merzouga', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('merzouga', false),
  subRegions: ['mhamid'],
  images: { card: '/src/assets/images/cities/cards/merzouga_card_1786472639139.jpg', background: '/src/assets/images/cities/cards/merzouga_card_1786472639139.jpg', hero: '/src/assets/images/cities/cards/merzouga_card_1786472639139.jpg' },
  color: '#e07050', lat: 31.0833, lon: -4.0000 
};
export const rabat: any = { 
  id: 'rabat', 
  name: 'Rabat', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('rabat', false),
  color: '#C9A84C', lat: 34.0209, lon: -6.8416 
};

export const meknes: any = { 
  id: 'meknes', 
  name: 'Meknes', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('meknes', false),
  subRegions: ['moulay_idriss'],
  color: '#e07050', lat: 33.8960, lon: -5.5473 
};
export const mhamid: any = { id: 'mhamid', name: "M'hamid El Ghizlane", neighborhoods: getLegacyNeighborhoods('mhamid', false), color: '#e07050', lat: 29.8333, lon: -5.7333 };
export const imlil_toubkal: any = { id: 'imlil_toubkal', name: 'Imlil & Toubkal', neighborhoods: getLegacyNeighborhoods('imlil_toubkal', false), color: '#60a5fa', lat: 31.1345, lon: -7.9200 };
export const ourika: any = { id: 'ourika', name: 'Ourika Valley', neighborhoods: getLegacyNeighborhoods('ourika', false), color: '#4ade80', lat: 31.3333, lon: -7.8000 };
export const ouzoud: any = { id: 'ouzoud', name: 'Ouzoud', neighborhoods: getLegacyNeighborhoods('ouzoud', false), color: '#4ade80', lat: 32.0133, lon: -6.7183 };
export const todra_dades: any = { id: 'todra_dades', name: 'Todra & Dades', neighborhoods: getLegacyNeighborhoods('todra_dades', false), color: '#e07050', lat: 31.5167, lon: -5.5947 };
export const ouarzazate: any = { 
  id: 'ouarzazate', 
  name: 'Ouarzazate', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('ouarzazate', false),
  subRegions: ['todra_dades', 'skoura_draa'],
  color: '#e07050', lat: 30.9202, lon: -6.9109 
};
export const paradise_valley: any = { id: 'paradise_valley', name: 'Paradise Valley', neighborhoods: getLegacyNeighborhoods('paradise_valley', false), color: '#4ade80', lat: 30.5667, lon: -9.4500 };
export const taghazout: any = { id: 'taghazout', name: 'Taghazout', neighborhoods: getLegacyNeighborhoods('taghazout', false), color: '#4ade80', lat: 30.5400, lon: -9.7000 };
export const imsouane: any = { id: 'imsouane', name: 'Imsouane', neighborhoods: getLegacyNeighborhoods('imsouane', false), color: '#4ade80', lat: 30.8350, lon: -9.8160 };
export const dakhla: any = { 
  id: 'dakhla', 
  name: 'Dakhla', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('dakhla', false),
  color: '#4ade80', lat: 23.6848, lon: -15.9575 
};
export const asilah: any = { id: 'asilah', name: 'Asilah', neighborhoods: getLegacyNeighborhoods('asilah', false), color: '#4ade80', lat: 35.4667, lon: -6.0333 };
export const saidia: any = { id: 'saidia', name: 'Saidia', neighborhoods: getLegacyNeighborhoods('saidid', false), color: '#4ade80', lat: 35.0945, lon: -2.1333 };
export const al_hoceima: any = { 
  id: 'al_hoceima', 
  name: 'Al Hoceima', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('al_hoceima', false),
  color: '#60a5fa', lat: 35.2500, lon: -3.9333 
};
export const ifrane: any = { 
  id: 'ifrane', 
  name: 'Ifrane', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('ifrane', false),
  lat: 33.5333, lon: -5.1000 
};
export const azrou: any = { 
  id: 'azrou', 
  name: 'Azrou', 
  neighborhoods: getLegacyNeighborhoods('azrou', false),
  color: '#60a5fa', lat: 33.4343, lon: -5.2216 
};
export const oukaimeden: any = { id: 'oukaimeden', name: 'Oukaïmeden', neighborhoods: getLegacyNeighborhoods('oukaimeden', false), color: '#60a5fa', lat: 31.2000, lon: -7.8667 };
export const el_jadida: any = { 
  id: 'el_jadida', 
  name: 'El Jadida', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('el_jadida', false),
  subRegions: ['oualidia'],
  color: '#4ade80', lat: 33.2500, lon: -8.5000 
};
export const tetouan: any = { 
  id: 'tetouan', 
  name: 'Tetouan', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('tetouan', false),
  subRegions: ['martil', 'mdiq', 'fnideq'],
  color: '#4ade80', lat: 35.5700, lon: -5.3700 
};
export const martil: any = { id: 'martil', name: 'Martil', neighborhoods: getLegacyNeighborhoods('martil', false), color: '#4ade80', lat: 35.6167, lon: -5.2667 };
export const taroudant: any = { 
  id: 'taroudant', 
  name: 'Taroudant', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('taroudant', false),
  subRegions: ['tafraoute', 'tiznit'],
  color: '#e07050', lat: 30.4700, lon: -8.8700 
};
export const tafraoute: any = { 
  id: 'tafraoute', 
  name: 'Tafraoute', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('tafraoute', false),
  color: '#e07050', lat: 29.7167, lon: -8.9667 
};
export const skoura_draa: any = { id: 'skoura_draa', name: 'Skoura & Draa', neighborhoods: getLegacyNeighborhoods('skoura_draa', false), color: '#e07050', lat: 31.0500, lon: -5.8667 };
export const moulay_idriss: any = { id: 'moulay_idriss', name: 'Moulay Idriss Zerhoun', neighborhoods: getLegacyNeighborhoods('moulay_idriss', false), color: '#e07050', lat: 34.0533, lon: -5.5267 };
export const kenitra: any = { id: 'kenitra', name: 'Kenitra', isPrimary: true, neighborhoods: getLegacyNeighborhoods('kenitra', false), color: '#4ade80', lat: 34.2570, lon: -6.5890 };
export const nador: any = { 
  id: 'nador', 
  name: 'Nador', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('nador', false),
  color: '#4ade80', lat: 35.1688, lon: -2.9333 
};
export const oualidia: any = { 
  id: 'oualidia', 
  name: 'Oualidia', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('oualidia', false),
  color: '#4ade80', lat: 32.7333, lon: -9.0333 
};
export const moulay_bousselham: any = { 
  id: 'moulay_bousselham', 
  name: 'Moulay Bousselham', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('moulay_bousselham', false),
  color: '#4ade80', lat: 34.8333, lon: -6.2000 
};
export const tiznit: any = { 
  id: 'tiznit', 
  name: 'Tiznit', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('tiznit', false),
  subRegions: ['mirleft', 'sidi_ifni'],
  color: '#e07050', lat: 29.7000, lon: -9.7333 
};
export const sidi_ifni: any = { 
  id: 'sidi_ifni', 
  name: 'Sidi Ifni', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('sidi_ifni', false),
  color: '#4ade80', lat: 29.3833, lon: -10.1667 
};
export const mirleft: any = { 
  id: 'mirleft', 
  name: 'Mirleft', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('mirleft', false),
  color: '#4ade80', lat: 29.5833, lon: -10.0333 
};
export const zagora: any = { 
  id: 'zagora', 
  name: 'Zagora', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('zagora', false),
  subRegions: ['mhamid'],
  color: '#e07050', lat: 30.3333, lon: -5.8333 
};
export const bin_el_ouidane: any = { 
  id: 'bin_el_ouidane', 
  name: 'Bin El Ouidane', 
  isPrimary: true,
  neighborhoods: getLegacyNeighborhoods('bin_el_ouidane', false),
  color: '#4ade80', lat: 32.1000, lon: -6.4500 
};
export const mdiq: any = { id: 'mdiq', name: "M'diq", neighborhoods: getLegacyNeighborhoods('mdiq', false), color: '#4ade80', lat: 35.6833, lon: -5.3167 };
export const fnideq: any = { id: 'fnideq', name: 'Fnideq', neighborhoods: getLegacyNeighborhoods('fnideq', false), color: '#4ade80', lat: 35.8500, lon: -5.3500 };
export const kachla: any = { id: 'kachla', name: 'Kachla', neighborhoods: getLegacyNeighborhoods('kachla', false), color: '#4ade80', lat: 35.4667, lon: -5.0833 };
export const larache: any = { id: 'larache', name: 'Larache', neighborhoods: getLegacyNeighborhoods('larache', false), color: '#4ade80', lat: 35.1833, lon: -6.1500 };
export const berkane: any = { id: 'berkane', name: 'Berkane', neighborhoods: getLegacyNeighborhoods('berkane', false), color: '#4ade80', lat: 34.9167, lon: -2.3167 };

export const cities: any[] = [
  marrakech, fes, agadir, casablanca, chefchaouen, essaouira, tangier, merzouga, rabat,
  meknes, mhamid, imlil_toubkal, ourika, ouzoud, todra_dades, ouarzazate, paradise_valley,
  taghazout, imsouane, dakhla, asilah, saidia, al_hoceima, ifrane, azrou, oukaimeden,
  el_jadida, tetouan, martil, taroudant, tafraoute, skoura_draa, moulay_idriss, kenitra,
  nador, oualidia, moulay_bousselham, tiznit, sidi_ifni, mirleft, zagora, bin_el_ouidane,
  mdiq, fnideq, kachla, larache, berkane
];

export const cityMap: Record<string, any> = {
  marrakech, fes, agadir, casablanca, chefchaouen, essaouira, tangier, merzouga, rabat,
  meknes, mhamid, imlil_toubkal, ourika, ouzoud, todra_dades, ouarzazate, paradise_valley,
  taghazout, imsouane, dakhla, asilah, saidia, al_hoceima, ifrane, azrou, oukaimeden,
  el_jadida, tetouan, martil, taroudant, tafraoute, skoura_draa, moulay_idriss, kenitra,
  nador, oualidia, moulay_bousselham, tiznit, sidi_ifni, mirleft, zagora, bin_el_ouidane,
  mdiq, fnideq, kachla, larache, berkane
};