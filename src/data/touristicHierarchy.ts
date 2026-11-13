/**
 * AUTO-GENERATED FROM touristic_organization.md
 * Master City & Neighborhood Tiering Registry
 * Contains strictly the 102 cities and their exact neighborhoods from touristic_organization.md
 */

export type CityTier = 'touristic' | 'mid' | 'low';
export type NeighborhoodTier = 'touristic' | 'mid' | 'low';

export interface CityTouristicProfile {
  id: string;
  name: string;
  num: string;
  region: string;
  tier: CityTier;
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
  neighborhoods: string[];
}

export interface RegionGroup {
  name: string;
  cities: CityTouristicProfile[];
}

export const TOURISTIC_PROFILES: Record<string, CityTouristicProfile> = {
  "Marrakech": {
    "id": "marrakech",
    "num": "1.1",
    "name": "Marrakech",
    "region": "Marrakech-Safi",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Jemaa el-Fna",
      "Mouassine",
      "Mellah",
      "Kasbah",
      "Bab Doukkala",
      "Riad Laarous",
      "Kaat Benahid",
      "Guéliz",
      "Hivernage",
      "Majorelle",
      "Palmeraie"
    ],
    "midNeighborhoods": [
      "Semlalia",
      "Victor Hugo",
      "Targa",
      "Sidi Youssef Ben Ali",
      "Bab Aylen"
    ],
    "lowNeighborhoods": [
      "Daoudiate",
      "Mabrouka",
      "Massira",
      "Hay Hassani",
      "M’hamid",
      "Socoma",
      "Iziki",
      "Azli"
    ],
    "neighborhoods": [
      "Jemaa el-Fna",
      "Mouassine",
      "Mellah",
      "Kasbah",
      "Bab Doukkala",
      "Riad Laarous",
      "Kaat Benahid",
      "Guéliz",
      "Hivernage",
      "Majorelle",
      "Palmeraie",
      "Semlalia",
      "Victor Hugo",
      "Targa",
      "Sidi Youssef Ben Ali",
      "Bab Aylen",
      "Daoudiate",
      "Mabrouka",
      "Massira",
      "Hay Hassani",
      "M’hamid",
      "Socoma",
      "Iziki",
      "Azli"
    ]
  },
  "Essaouira": {
    "id": "essaouira",
    "num": "1.2",
    "name": "Essaouira",
    "region": "Marrakech-Safi",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Mellah",
      "Bab Doukkala",
      "Skala",
      "Borj",
      "Dunes",
      "Diabat"
    ],
    "midNeighborhoods": [
      "Lagune",
      "Ghazoua"
    ],
    "lowNeighborhoods": [
      "Cité Al Mostaqbal"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Mellah",
      "Bab Doukkala",
      "Skala",
      "Borj",
      "Dunes",
      "Diabat",
      "Lagune",
      "Ghazoua",
      "Cité Al Mostaqbal"
    ]
  },
  "Safi": {
    "id": "safi",
    "num": "1.3",
    "name": "Safi",
    "region": "Marrakech-Safi",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Sidi Bouzid",
      "Port de Safi"
    ],
    "midNeighborhoods": [
      "Plateau",
      "Biada"
    ],
    "lowNeighborhoods": [
      "Jrifat",
      "Hay Anas",
      "Kawki",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Sidi Bouzid",
      "Port de Safi",
      "Plateau",
      "Biada",
      "Jrifat",
      "Hay Anas",
      "Kawki",
      "Hay Al Massira"
    ]
  },
  "Tahannaout": {
    "id": "tahannaout",
    "num": "1.4",
    "name": "Tahannaout",
    "region": "Marrakech-Safi",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Douar El Ghezoua"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Douar Bouzguen",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Douar El Ghezoua",
      "Centre-Ville",
      "Douar Bouzguen",
      "Hay Al Massira"
    ]
  },
  "Ben Guerir": {
    "id": "ben_guerir",
    "num": "1.5",
    "name": "Ben Guerir",
    "region": "Marrakech-Safi",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Ville Verte Mohammed VI"
    ],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Wahda",
      "Hay Al Qods",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Ville Verte Mohammed VI",
      "Centre-Ville",
      "Hay Al Wahda",
      "Hay Al Qods",
      "Hay Al Amal"
    ]
  },
  "El Kelâa des Sraghna": {
    "id": "el_kelaa_des_sraghna",
    "num": "1.6",
    "name": "El Kelâa des Sraghna",
    "region": "Marrakech-Safi",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Qods",
      "Hay Al Massira",
      "Bouâm",
      "Hay Al Amal",
      "Hay Al Hanaa"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Qods",
      "Hay Al Massira",
      "Bouâm",
      "Hay Al Amal",
      "Hay Al Hanaa"
    ]
  },
  "Youssoufia": {
    "id": "youssoufia",
    "num": "1.7",
    "name": "Youssoufia",
    "region": "Marrakech-Safi",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay OCP",
      "Hay Al Amal",
      "Hay Al Massira",
      "Hay Al Qods"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay OCP",
      "Hay Al Amal",
      "Hay Al Massira",
      "Hay Al Qods"
    ]
  },
  "Chichaoua": {
    "id": "chichaoua",
    "num": "1.8",
    "name": "Chichaoua",
    "region": "Marrakech-Safi",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda",
      "Hay Al Khair"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda",
      "Hay Al Khair"
    ]
  },
  "Tanger": {
    "id": "tanger",
    "num": "2.1",
    "name": "Tanger",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Grand Socco",
      "Petit Socco",
      "Marshan",
      "Kasbah",
      "Malabata",
      "Achakkar"
    ],
    "midNeighborhoods": [
      "Iberia",
      "Centre-Ville",
      "Tanja Balia",
      "Val Fleuri"
    ],
    "lowNeighborhoods": [
      "Drissia",
      "Souani",
      "Bir Chifa",
      "Hay El Majd",
      "Benkirane",
      "Mghogha",
      "Casabarata",
      "Branès",
      "Mesnana",
      "Boukhalef"
    ],
    "neighborhoods": [
      "Grand Socco",
      "Petit Socco",
      "Marshan",
      "Kasbah",
      "Malabata",
      "Achakkar",
      "Iberia",
      "Centre-Ville",
      "Tanja Balia",
      "Val Fleuri",
      "Drissia",
      "Souani",
      "Bir Chifa",
      "Hay El Majd",
      "Benkirane",
      "Mghogha",
      "Casabarata",
      "Branès",
      "Mesnana",
      "Boukhalef"
    ]
  },
  "Chefchaouen": {
    "id": "chefchaouen",
    "num": "2.2",
    "name": "Chefchaouen",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Outa El Hammam",
      "Souika",
      "El Ayoun",
      "Al Kharrazine",
      "Bab Souq"
    ],
    "midNeighborhoods": [
      "Ain Haouzi"
    ],
    "lowNeighborhoods": [
      "Hassan I"
    ],
    "neighborhoods": [
      "Outa El Hammam",
      "Souika",
      "El Ayoun",
      "Al Kharrazine",
      "Bab Souq",
      "Ain Haouzi",
      "Hassan I"
    ]
  },
  "Tétouan": {
    "id": "tetouan",
    "num": "2.3",
    "name": "Tétouan",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Ensanche",
      "Wilaya"
    ],
    "midNeighborhoods": [
      "Saniat Rmel",
      "Kitane"
    ],
    "lowNeighborhoods": [
      "Touabel",
      "Coelma",
      "M’hannech I & II",
      "Somal",
      "Safir"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Ensanche",
      "Wilaya",
      "Saniat Rmel",
      "Kitane",
      "Touabel",
      "Coelma",
      "M’hannech I & II",
      "Somal",
      "Safir"
    ]
  },
  "Assilah": {
    "id": "assilah",
    "num": "2.4",
    "name": "Assilah",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina Historique"
    ],
    "midNeighborhoods": [
      "Lalla Rahma",
      "Al Bassatine"
    ],
    "lowNeighborhoods": [
      "Zillil",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Médina Historique",
      "Lalla Rahma",
      "Al Bassatine",
      "Zillil",
      "Hay Al Massira"
    ]
  },
  "M’diq": {
    "id": "m_diq",
    "num": "2.5",
    "name": "M’diq",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Port",
      "Plage Miramar",
      "Rincón"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Cité Militaire"
    ],
    "neighborhoods": [
      "Port",
      "Plage Miramar",
      "Rincón",
      "Centre-Ville",
      "Hay Al Amal",
      "Cité Militaire"
    ]
  },
  "Al Hoceïma": {
    "id": "al_hoceima",
    "num": "2.6",
    "name": "Al Hoceïma",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Calabonita",
      "Moroviejo",
      "Tala Youssef"
    ],
    "midNeighborhoods": [
      "Mirador",
      "Port"
    ],
    "lowNeighborhoods": [
      "Bario Brirro",
      "Hay Menzeh",
      "Hay Romman"
    ],
    "neighborhoods": [
      "Calabonita",
      "Moroviejo",
      "Tala Youssef",
      "Mirador",
      "Port",
      "Bario Brirro",
      "Hay Menzeh",
      "Hay Romman"
    ]
  },
  "Martil": {
    "id": "martil",
    "num": "2.7",
    "name": "Martil",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Miramar",
      "Front de Mer"
    ],
    "midNeighborhoods": [
      "Chbar",
      "Oum Kalthoum"
    ],
    "lowNeighborhoods": [
      "Hay Kora",
      "Cité Universitaire"
    ],
    "neighborhoods": [
      "Miramar",
      "Front de Mer",
      "Chbar",
      "Oum Kalthoum",
      "Hay Kora",
      "Cité Universitaire"
    ]
  },
  "Fnideq": {
    "id": "fnideq",
    "num": "2.8",
    "name": "Fnideq",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "mid",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Centre-Ville",
      "Bab Sebta"
    ],
    "lowNeighborhoods": [
      "Hay Al Wahda",
      "Hay El Andalous",
      "Hay Al Matar"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Bab Sebta",
      "Hay Al Wahda",
      "Hay El Andalous",
      "Hay Al Matar"
    ]
  },
  "Larache": {
    "id": "larache",
    "num": "2.9",
    "name": "Larache",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina",
      "Port",
      "Balcon Atlantico"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Al Manar",
      "Hay Salam",
      "Maghreb Al Jadid",
      "Hay Chaâbi",
      "Oulad Hmid"
    ],
    "neighborhoods": [
      "Médina",
      "Port",
      "Balcon Atlantico",
      "Centre-Ville",
      "Al Manar",
      "Hay Salam",
      "Maghreb Al Jadid",
      "Hay Chaâbi",
      "Oulad Hmid"
    ]
  },
  "Ouezzane": {
    "id": "ouezzane",
    "num": "2.10",
    "name": "Ouezzane",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Dar Dmana",
      "Hay Zaouia",
      "Médina Ancienne"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Massira",
      "Bab Fès"
    ],
    "neighborhoods": [
      "Dar Dmana",
      "Hay Zaouia",
      "Médina Ancienne",
      "Hay Al Massira",
      "Bab Fès"
    ]
  },
  "Ksar El Kébir": {
    "id": "ksar_el_kebir",
    "num": "2.11",
    "name": "Ksar El Kébir",
    "region": "Tanger-Tétouan-Al Hoceïma",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Médina Ancienne"
    ],
    "lowNeighborhoods": [
      "Bab El Oued",
      "Hay Al Qods",
      "Oulad Hmid",
      "Hay Salam",
      "Chariâ"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Bab El Oued",
      "Hay Al Qods",
      "Oulad Hmid",
      "Hay Salam",
      "Chariâ"
    ]
  },
  "Fès": {
    "id": "fes",
    "num": "3.1",
    "name": "Fès",
    "region": "Fès-Meknès",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Fès El Bali",
      "R’cif",
      "Batha",
      "Bab Bou Jeloud",
      "Mellah",
      "Fès Jdid",
      "Ville Nouvelle"
    ],
    "midNeighborhoods": [
      "Agdal",
      "Atlas",
      "Champs de Course",
      "Narjiss"
    ],
    "lowNeighborhoods": [
      "Mont Fleuri",
      "Saïss",
      "Bab Ftouh",
      "Sidi Boujida",
      "Zouagha",
      "Bensouda",
      "Ain Kadous",
      "Dhar Mehraz"
    ],
    "neighborhoods": [
      "Fès El Bali",
      "R’cif",
      "Batha",
      "Bab Bou Jeloud",
      "Mellah",
      "Fès Jdid",
      "Ville Nouvelle",
      "Agdal",
      "Atlas",
      "Champs de Course",
      "Narjiss",
      "Mont Fleuri",
      "Saïss",
      "Bab Ftouh",
      "Sidi Boujida",
      "Zouagha",
      "Bensouda",
      "Ain Kadous",
      "Dhar Mehraz"
    ]
  },
  "Meknès": {
    "id": "meknes",
    "num": "3.2",
    "name": "Meknès",
    "region": "Fès-Meknès",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Rouamzine",
      "Agdal",
      "Hamria"
    ],
    "midNeighborhoods": [
      "Belle-Vue",
      "Marjane",
      "Plaisance"
    ],
    "lowNeighborhoods": [
      "Mansour",
      "Bassatine",
      "Sidi Bouzekri",
      "Kamilia",
      "Toulal",
      "Ouislane",
      "Wjeh Arouss"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Rouamzine",
      "Agdal",
      "Hamria",
      "Belle-Vue",
      "Marjane",
      "Plaisance",
      "Mansour",
      "Bassatine",
      "Sidi Bouzekri",
      "Kamilia",
      "Toulal",
      "Ouislane",
      "Wjeh Arouss"
    ]
  },
  "Ifrane": {
    "id": "ifrane",
    "num": "3.3",
    "name": "Ifrane",
    "region": "Fès-Meknès",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Centre-Ville",
      "Michlifen",
      "Ain Vittel"
    ],
    "midNeighborhoods": [
      "Hay Riad",
      "Résidence Royale"
    ],
    "lowNeighborhoods": [
      "Hay Atlas"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Michlifen",
      "Ain Vittel",
      "Hay Riad",
      "Résidence Royale",
      "Hay Atlas"
    ]
  },
  "Azrou": {
    "id": "azrou",
    "num": "3.4",
    "name": "Azrou",
    "region": "Fès-Meknès",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Ahadaf"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Tizi",
      "Hay Al Massira",
      "Tiqnit",
      "Hay Salam"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Ahadaf",
      "Tizi",
      "Hay Al Massira",
      "Tiqnit",
      "Hay Salam"
    ]
  },
  "Moulay Yacoub": {
    "id": "moulay_yacoub",
    "num": "3.5",
    "name": "Moulay Yacoub",
    "region": "Fès-Meknès",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Centre Thermal",
      "Quartier Kasbah"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Centre Thermal",
      "Quartier Kasbah",
      "Hay Al Amal"
    ]
  },
  "Sefrou": {
    "id": "sefrou",
    "num": "3.6",
    "name": "Sefrou",
    "region": "Fès-Meknès",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Cascades"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Habouna",
      "Ben Sfam",
      "Zoubida",
      "Hay Al Qods",
      "Lalla Meryem",
      "Bhalil Road"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Cascades",
      "Habouna",
      "Ben Sfam",
      "Zoubida",
      "Hay Al Qods",
      "Lalla Meryem",
      "Bhalil Road"
    ]
  },
  "Taza": {
    "id": "taza",
    "num": "3.7",
    "name": "Taza",
    "region": "Fès-Meknès",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Taza Haut"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Taza Bas",
      "Al Massira",
      "Biti",
      "Hay Al Qods",
      "Douar Mssila",
      "Hay Al Wifaq"
    ],
    "neighborhoods": [
      "Taza Haut",
      "Taza Bas",
      "Al Massira",
      "Biti",
      "Hay Al Qods",
      "Douar Mssila",
      "Hay Al Wifaq"
    ]
  },
  "El Hajeb": {
    "id": "el_hajeb",
    "num": "3.8",
    "name": "El Hajeb",
    "region": "Fès-Meknès",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Ain Khadem"
    ],
    "lowNeighborhoods": [
      "Centre",
      "Cantina",
      "Hay Al Amal",
      "Hay Chahid"
    ],
    "neighborhoods": [
      "Ain Khadem",
      "Centre",
      "Cantina",
      "Hay Al Amal",
      "Hay Chahid"
    ]
  },
  "Taounate": {
    "id": "taounate",
    "num": "3.9",
    "name": "Taounate",
    "region": "Fès-Meknès",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Wahda",
      "Ras El Karia",
      "Hay Al Massira",
      "Bouhouda Road"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Al Wahda",
      "Ras El Karia",
      "Hay Al Massira",
      "Bouhouda Road"
    ]
  },
  "Missour": {
    "id": "missour",
    "num": "3.10",
    "name": "Missour",
    "region": "Fès-Meknès",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay Salam",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay Salam",
      "Hay Al Wahda"
    ]
  },
  "Agadir": {
    "id": "agadir",
    "num": "4.1",
    "name": "Agadir",
    "region": "Souss-Massa",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Secteur Balnéaire",
      "Marina Agadir",
      "Founty",
      "Secteur Résidentiel",
      "Nouveau Talborjt",
      "Talborjt"
    ],
    "midNeighborhoods": [
      "Charaf",
      "Anza Plage",
      "Bensergao"
    ],
    "lowNeighborhoods": [
      "Dakhla",
      "Salam",
      "Al Houda",
      "Tilila",
      "Hay Mohammadi",
      "Al Wifaq",
      "Tikiouine"
    ],
    "neighborhoods": [
      "Secteur Balnéaire",
      "Marina Agadir",
      "Founty",
      "Secteur Résidentiel",
      "Nouveau Talborjt",
      "Talborjt",
      "Charaf",
      "Anza Plage",
      "Bensergao",
      "Dakhla",
      "Salam",
      "Al Houda",
      "Tilila",
      "Hay Mohammadi",
      "Al Wifaq",
      "Tikiouine"
    ]
  },
  "Taroudant": {
    "id": "taroudant",
    "num": "4.2",
    "name": "Taroudant",
    "region": "Souss-Massa",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina",
      "Bab Zorgan",
      "Bab Targhount"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Lasstah",
      "Ouled Bounouna",
      "Hay Al Mohammadi"
    ],
    "neighborhoods": [
      "Médina",
      "Bab Zorgan",
      "Bab Targhount",
      "Lasstah",
      "Ouled Bounouna",
      "Hay Al Mohammadi"
    ]
  },
  "Tafraout": {
    "id": "tafraout",
    "num": "4.3",
    "name": "Tafraout",
    "region": "Souss-Massa",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Centre-Ville",
      "Ammeln",
      "Aday"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Ammeln",
      "Aday",
      "Hay Al Massira"
    ]
  },
  "Tiznit": {
    "id": "tiznit",
    "num": "4.4",
    "name": "Tiznit",
    "region": "Souss-Massa",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Afrak",
      "Bab Aglou"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Massira",
      "Hay Id Zikri",
      "Hay Al Boustane",
      "Al Widadia"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Afrak",
      "Bab Aglou",
      "Hay Al Massira",
      "Hay Id Zikri",
      "Hay Al Boustane",
      "Al Widadia"
    ]
  },
  "Tata": {
    "id": "tata",
    "num": "4.5",
    "name": "Tata",
    "region": "Souss-Massa",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Agadir Lehna"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Agadir Lehna",
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Inezgane": {
    "id": "inezgane",
    "num": "4.6",
    "name": "Inezgane",
    "region": "Souss-Massa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Grand Marché"
    ],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay El Jorf",
      "Tarrast",
      "Lhassania",
      "Cité Al Amal"
    ],
    "neighborhoods": [
      "Grand Marché",
      "Centre-Ville",
      "Hay El Jorf",
      "Tarrast",
      "Lhassania",
      "Cité Al Amal"
    ]
  },
  "Aït Melloul": {
    "id": "ait_melloul",
    "num": "4.7",
    "name": "Aït Melloul",
    "region": "Souss-Massa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Azrou",
      "Kasbah",
      "Cité Universitaire",
      "Hay Al Amal",
      "Hay Al Houria"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Azrou",
      "Kasbah",
      "Cité Universitaire",
      "Hay Al Amal",
      "Hay Al Houria"
    ]
  },
  "Dcheira El Jihadia": {
    "id": "dcheira_el_jihadia",
    "num": "4.8",
    "name": "Dcheira El Jihadia",
    "region": "Souss-Massa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Lhouda",
      "Hay Al Boustane",
      "Hay Tarik",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Lhouda",
      "Hay Al Boustane",
      "Hay Tarik",
      "Hay Al Massira"
    ]
  },
  "Oulad Teïma": {
    "id": "oulad_teima",
    "num": "4.9",
    "name": "Oulad Teïma",
    "region": "Souss-Massa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Mohammadi",
      "Hay Chahid",
      "Hay Al Nahda"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Mohammadi",
      "Hay Chahid",
      "Hay Al Nahda"
    ]
  },
  "Biougra": {
    "id": "biougra",
    "num": "4.10",
    "name": "Biougra",
    "region": "Souss-Massa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Al Massira",
      "Hay Al Wifaq"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Al Massira",
      "Hay Al Wifaq"
    ]
  },
  "Casablanca": {
    "id": "casablanca",
    "num": "5.1",
    "name": "Casablanca",
    "region": "Casablanca-Settat",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Ain Diab",
      "Anfa Supérieur",
      "Val d'Anfa",
      "Sour Jdid",
      "Ancienne Médina",
      "Centre-Ville",
      "Gauthier",
      "Maârif",
      "Racine"
    ],
    "midNeighborhoods": [
      "Palmier",
      "Les Hôpitaux",
      "Longchamp",
      "California",
      "Sidi Maârouf",
      "Roches Noires",
      "Belvédère",
      "Derb Sultan",
      "Mers Sultan",
      "2 Mars"
    ],
    "lowNeighborhoods": [
      "Ain Chock",
      "Casanearshore",
      "Inara",
      "Mandarona",
      "Aïn Sebaâ",
      "Hay Mohammadi",
      "Sbata",
      "Moulay Rachid",
      "Sidi Othmane",
      "Sidi Bernoussi",
      "Sidi Moumen",
      "Hay Hassani",
      "Oulfa",
      "Lissasfa",
      "Derb Ghallef"
    ],
    "neighborhoods": [
      "Ain Diab",
      "Anfa Supérieur",
      "Val d'Anfa",
      "Sour Jdid",
      "Ancienne Médina",
      "Centre-Ville",
      "Gauthier",
      "Maârif",
      "Racine",
      "Palmier",
      "Les Hôpitaux",
      "Longchamp",
      "California",
      "Sidi Maârouf",
      "Roches Noires",
      "Belvédère",
      "Derb Sultan",
      "Mers Sultan",
      "2 Mars",
      "Ain Chock",
      "Casanearshore",
      "Inara",
      "Mandarona",
      "Aïn Sebaâ",
      "Hay Mohammadi",
      "Sbata",
      "Moulay Rachid",
      "Sidi Othmane",
      "Sidi Bernoussi",
      "Sidi Moumen",
      "Hay Hassani",
      "Oulfa",
      "Lissasfa",
      "Derb Ghallef"
    ]
  },
  "El Jadida": {
    "id": "el_jadida",
    "num": "5.2",
    "name": "El Jadida",
    "region": "Casablanca-Settat",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Cité Portugaise",
      "Mazagan",
      "Sidi Bouzid"
    ],
    "midNeighborhoods": [
      "Plateau",
      "Cité de l'Air"
    ],
    "lowNeighborhoods": [
      "Al Qods",
      "Najmat Al Janoub",
      "Hay Salam"
    ],
    "neighborhoods": [
      "Cité Portugaise",
      "Mazagan",
      "Sidi Bouzid",
      "Plateau",
      "Cité de l'Air",
      "Al Qods",
      "Najmat Al Janoub",
      "Hay Salam"
    ]
  },
  "Mohammédia": {
    "id": "mohammedia",
    "num": "5.3",
    "name": "Mohammédia",
    "region": "Casablanca-Settat",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Quartier du Parc",
      "Miramar",
      "Monica",
      "Kasbah"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "El Alia",
      "Rachidia",
      "Les Crêtes",
      "Yasmina",
      "Hay Al Wafa"
    ],
    "neighborhoods": [
      "Quartier du Parc",
      "Miramar",
      "Monica",
      "Kasbah",
      "El Alia",
      "Rachidia",
      "Les Crêtes",
      "Yasmina",
      "Hay Al Wafa"
    ]
  },
  "Bouznika": {
    "id": "bouznika",
    "num": "5.4",
    "name": "Bouznika",
    "region": "Casablanca-Settat",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Bouznika Plage",
      "Kasbah"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Bouznika Plage",
      "Kasbah",
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal"
    ]
  },
  "Dar Bouazza": {
    "id": "dar_bouazza",
    "num": "5.5",
    "name": "Dar Bouazza",
    "region": "Casablanca-Settat",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Tamaris",
      "Jack Beach",
      "Miramar Plage"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Oulad Ahmed",
      "Dar Koba"
    ],
    "neighborhoods": [
      "Tamaris",
      "Jack Beach",
      "Miramar Plage",
      "Oulad Ahmed",
      "Dar Koba"
    ]
  },
  "Azemmour": {
    "id": "azemmour",
    "num": "5.6",
    "name": "Azemmour",
    "region": "Casablanca-Settat",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Kasbah",
      "Oued Oum Er-Rbia"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Massira",
      "Derb Chbika"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Kasbah",
      "Oued Oum Er-Rbia",
      "Hay Al Massira",
      "Derb Chbika"
    ]
  },
  "Bouskoura": {
    "id": "bouskoura",
    "num": "5.7",
    "name": "Bouskoura",
    "region": "Casablanca-Settat",
    "tier": "mid",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Ville Verte"
    ],
    "lowNeighborhoods": [
      "Bouskoura Centre",
      "Victoria City",
      "Zone Industrielle",
      "Cité Salama"
    ],
    "neighborhoods": [
      "Ville Verte",
      "Bouskoura Centre",
      "Victoria City",
      "Zone Industrielle",
      "Cité Salama"
    ]
  },
  "Settat": {
    "id": "settat",
    "num": "5.8",
    "name": "Settat",
    "region": "Casablanca-Settat",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Salam",
      "Hay El Khair",
      "Mzinda",
      "Hay Al Farah",
      "Complexe Universitaire",
      "Hay Souani"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Salam",
      "Hay El Khair",
      "Mzinda",
      "Hay Al Farah",
      "Complexe Universitaire",
      "Hay Souani"
    ]
  },
  "Berrechid": {
    "id": "berrechid",
    "num": "5.9",
    "name": "Berrechid",
    "region": "Casablanca-Settat",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Al Omrane",
      "Hay Hassani",
      "Hay Riad",
      "Zone Industrielle",
      "Al Bassatine",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Al Omrane",
      "Hay Hassani",
      "Hay Riad",
      "Zone Industrielle",
      "Al Bassatine",
      "Hay Al Massira"
    ]
  },
  "Benslimane": {
    "id": "benslimane",
    "num": "5.10",
    "name": "Benslimane",
    "region": "Casablanca-Settat",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Farah",
      "Hay Al Qods",
      "Hay Lalla Meryem",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Farah",
      "Hay Al Qods",
      "Hay Lalla Meryem",
      "Hay Al Massira"
    ]
  },
  "Sidi Bennour": {
    "id": "sidi_bennour",
    "num": "5.11",
    "name": "Sidi Bennour",
    "region": "Casablanca-Settat",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Qods",
      "Hay Al Amal",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Qods",
      "Hay Al Amal",
      "Hay Al Wahda"
    ]
  },
  "Rabat": {
    "id": "rabat",
    "num": "6.1",
    "name": "Rabat",
    "region": "Rabat-Salé-Kénitra",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Kasbah des Oudaïas",
      "Médina Ancienne",
      "Tour Hassan / Hassan",
      "Centre-Ville",
      "Agdal",
      "Souissi",
      "Touarga"
    ],
    "midNeighborhoods": [
      "Les Orangers",
      "Aviation",
      "Haut Agdal",
      "Hay Riad",
      "Bir Kacem",
      "Dar Essalam"
    ],
    "lowNeighborhoods": [
      "Guich Loudaya",
      "Yacoub El Mansour",
      "Akkari",
      "Hay Al Fath",
      "Diour Jamaa"
    ],
    "neighborhoods": [
      "Kasbah des Oudaïas",
      "Médina Ancienne",
      "Tour Hassan / Hassan",
      "Centre-Ville",
      "Agdal",
      "Souissi",
      "Touarga",
      "Les Orangers",
      "Aviation",
      "Haut Agdal",
      "Hay Riad",
      "Bir Kacem",
      "Dar Essalam",
      "Guich Loudaya",
      "Yacoub El Mansour",
      "Akkari",
      "Hay Al Fath",
      "Diour Jamaa"
    ]
  },
  "Salé": {
    "id": "sale",
    "num": "6.2",
    "name": "Salé",
    "region": "Rabat-Salé-Kénitra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina Ancienne",
      "Marina Bouregreg"
    ],
    "midNeighborhoods": [
      "Bettana",
      "Sala Al Jadida"
    ],
    "lowNeighborhoods": [
      "Sidi Moussa",
      "Rmel",
      "Technopolis",
      "Layayda",
      "Tabriquet",
      "Hay Salam",
      "Hay Rahma",
      "Hay Al Inbiat",
      "Karia"
    ],
    "neighborhoods": [
      "Médina Ancienne",
      "Marina Bouregreg",
      "Bettana",
      "Sala Al Jadida",
      "Sidi Moussa",
      "Rmel",
      "Technopolis",
      "Layayda",
      "Tabriquet",
      "Hay Salam",
      "Hay Rahma",
      "Hay Al Inbiat",
      "Karia"
    ]
  },
  "Témara": {
    "id": "temara",
    "num": "6.3",
    "name": "Témara",
    "region": "Rabat-Salé-Kénitra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Harhoura",
      "Sid El Abed",
      "Val d'Or"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Wifaq",
      "Massira 1 & 2",
      "Al Maghreb Al Arabi",
      "Fouarat",
      "Ennasr",
      "Mansour Dahbi"
    ],
    "neighborhoods": [
      "Harhoura",
      "Sid El Abed",
      "Val d'Or",
      "Wifaq",
      "Massira 1 & 2",
      "Al Maghreb Al Arabi",
      "Fouarat",
      "Ennasr",
      "Mansour Dahbi"
    ]
  },
  "Skhirate": {
    "id": "skhirate",
    "num": "6.4",
    "name": "Skhirate",
    "region": "Rabat-Salé-Kénitra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Skhirate Plage",
      "Kasbah"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Fath",
      "Zone Industrielle"
    ],
    "neighborhoods": [
      "Skhirate Plage",
      "Kasbah",
      "Centre-Ville",
      "Hay Al Fath",
      "Zone Industrielle"
    ]
  },
  "Kénitra": {
    "id": "kenitra",
    "num": "6.5",
    "name": "Kénitra",
    "region": "Rabat-Salé-Kénitra",
    "tier": "mid",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Centre-Ville",
      "Val Fleuri",
      "Maâmora"
    ],
    "lowNeighborhoods": [
      "Bir Rami",
      "Saknia",
      "Ouled Oujih",
      "Pam",
      "Alliance Darna",
      "Fouarat",
      "Cité Universitaire",
      "Maghreb Arabe"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Val Fleuri",
      "Maâmora",
      "Bir Rami",
      "Saknia",
      "Ouled Oujih",
      "Pam",
      "Alliance Darna",
      "Fouarat",
      "Cité Universitaire",
      "Maghreb Arabe"
    ]
  },
  "Sidi Slimane": {
    "id": "sidi_slimane",
    "num": "6.6",
    "name": "Sidi Slimane",
    "region": "Rabat-Salé-Kénitra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Pam",
      "Hay Al Massira",
      "Hay Oulad Ziane",
      "Hay Al Qods"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Pam",
      "Hay Al Massira",
      "Hay Oulad Ziane",
      "Hay Al Qods"
    ]
  },
  "Sidi Kacem": {
    "id": "sidi_kacem",
    "num": "6.7",
    "name": "Sidi Kacem",
    "region": "Rabat-Salé-Kénitra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Zirara",
      "Hay Al Khadra",
      "Sahrij",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Zirara",
      "Hay Al Khadra",
      "Sahrij",
      "Hay Al Massira"
    ]
  },
  "Khémisset": {
    "id": "khemisset",
    "num": "6.8",
    "name": "Khémisset",
    "region": "Rabat-Salé-Kénitra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Essalam",
      "Hay Farah",
      "Hay Yasmine",
      "Hay Tounsi",
      "Hay Sahraoui"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Essalam",
      "Hay Farah",
      "Hay Yasmine",
      "Hay Tounsi",
      "Hay Sahraoui"
    ]
  },
  "Tiflet": {
    "id": "tiflet",
    "num": "6.9",
    "name": "Tiflet",
    "region": "Rabat-Salé-Kénitra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Médina",
      "Hay Salam",
      "Hay Andalus",
      "Hay Al Farah",
      "Al Amal",
      "Zoubida"
    ],
    "neighborhoods": [
      "Médina",
      "Hay Salam",
      "Hay Andalus",
      "Hay Al Farah",
      "Al Amal",
      "Zoubida"
    ]
  },
  "Ouarzazate": {
    "id": "ouarzazate",
    "num": "7.1",
    "name": "Ouarzazate",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Kasbah Taourirt",
      "Centre-Ville",
      "Cinema Studios"
    ],
    "midNeighborhoods": [
      "Tabount",
      "Fedraghou",
      "Al Mouahidine"
    ],
    "lowNeighborhoods": [
      "Hay Al Mansour",
      "Al Wahda",
      "Tassoumaat"
    ],
    "neighborhoods": [
      "Kasbah Taourirt",
      "Centre-Ville",
      "Cinema Studios",
      "Tabount",
      "Fedraghou",
      "Al Mouahidine",
      "Hay Al Mansour",
      "Al Wahda",
      "Tassoumaat"
    ]
  },
  "Tinghir": {
    "id": "tinghir",
    "num": "7.2",
    "name": "Tinghir",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Todgha",
      "Mellah Ancien"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Wifaq",
      "Afanour",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Todgha",
      "Mellah Ancien",
      "Centre-Ville",
      "Hay Al Wifaq",
      "Afanour",
      "Hay Al Massira"
    ]
  },
  "Zagora": {
    "id": "zagora",
    "num": "7.3",
    "name": "Zagora",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Amazraou / Amezrou",
      "Centre-Ville"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Qods",
      "Hay Al Wahda",
      "Zaouit El Baraka"
    ],
    "neighborhoods": [
      "Amazraou / Amezrou",
      "Centre-Ville",
      "Hay Al Qods",
      "Hay Al Wahda",
      "Zaouit El Baraka"
    ]
  },
  "Erfoud": {
    "id": "erfoud",
    "num": "7.4",
    "name": "Erfoud",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Centre-Ville",
      "Hay Salam"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Qods",
      "Hay Al Massira",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Salam",
      "Hay Al Qods",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Rissani": {
    "id": "rissani",
    "num": "7.5",
    "name": "Rissani",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Ksar Souk",
      "Moulay Ali Cherif"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Ksar Souk",
      "Moulay Ali Cherif",
      "Centre-Ville",
      "Hay Al Amal"
    ]
  },
  "Boumalne Dadès": {
    "id": "boumalne_dades",
    "num": "7.6",
    "name": "Boumalne Dadès",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Vallée de Dadès",
      "Aït Boulmane"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Vallée de Dadès",
      "Aït Boulmane",
      "Centre-Ville",
      "Hay Al Massira"
    ]
  },
  "Kelaat M’Gouna": {
    "id": "kelaat_m_gouna",
    "num": "7.7",
    "name": "Kelaat M’Gouna",
    "region": "Drâa-Tafilalet",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Vallée des Roses"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Vallée des Roses",
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Midelt": {
    "id": "midelt",
    "num": "7.8",
    "name": "Midelt",
    "region": "Drâa-Tafilalet",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Berrem",
      "Souk El Qdim"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Tatiouine",
      "Hay Moulay Ali Cherif"
    ],
    "neighborhoods": [
      "Berrem",
      "Souk El Qdim",
      "Centre-Ville",
      "Hay Al Massira",
      "Tatiouine",
      "Hay Moulay Ali Cherif"
    ]
  },
  "Errachidia": {
    "id": "errachidia",
    "num": "7.9",
    "name": "Errachidia",
    "region": "Drâa-Tafilalet",
    "tier": "mid",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "L'Oasis",
      "Centre-Ville"
    ],
    "lowNeighborhoods": [
      "Boutalamine",
      "Ain El Atti",
      "Oulad El Haj",
      "Targa",
      "Hay Al Massira",
      "Hay Moulay Rachid",
      "Hay Al Qods"
    ],
    "neighborhoods": [
      "L'Oasis",
      "Centre-Ville",
      "Boutalamine",
      "Ain El Atti",
      "Oulad El Haj",
      "Targa",
      "Hay Al Massira",
      "Hay Moulay Rachid",
      "Hay Al Qods"
    ]
  },
  "Dakhla": {
    "id": "dakhla",
    "num": "8.1",
    "name": "Dakhla",
    "region": "Dakhla-Oued Ed-Dahab",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Corniche Oued Ed-Dahab",
      "Boulevard Mohammed V",
      "Centre-Ville",
      "Lagoon Kitesurf Strip"
    ],
    "midNeighborhoods": [
      "Port de Dakhla",
      "Al Massira"
    ],
    "lowNeighborhoods": [
      "Hay Oum Tounsi",
      "Al Wahda",
      "Hay Al Qods",
      "Hay El Hassani",
      "Hay Salam",
      "Quartier Industriel",
      "Cité Militaire",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Corniche Oued Ed-Dahab",
      "Boulevard Mohammed V",
      "Centre-Ville",
      "Lagoon Kitesurf Strip",
      "Port de Dakhla",
      "Al Massira",
      "Hay Oum Tounsi",
      "Al Wahda",
      "Hay Al Qods",
      "Hay El Hassani",
      "Hay Salam",
      "Quartier Industriel",
      "Cité Militaire",
      "Hay Al Amal"
    ]
  },
  "Aousserd / Bir Gandouz": {
    "id": "aousserd_bir_gandouz",
    "num": "8.2",
    "name": "Aousserd / Bir Gandouz",
    "region": "Dakhla-Oued Ed-Dahab",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre Administratif",
      "Hay Al Massira",
      "Zone Postale",
      "Cité Frontalière El Guerguarat"
    ],
    "neighborhoods": [
      "Centre Administratif",
      "Hay Al Massira",
      "Zone Postale",
      "Cité Frontalière El Guerguarat"
    ]
  },
  "Béni Mellal": {
    "id": "beni_mellal",
    "num": "9.1",
    "name": "Béni Mellal",
    "region": "Béni Mellal-Khénifra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Kasbah Ain Asserdoun",
      "Atlas Foothills"
    ],
    "midNeighborhoods": [
      "Riad Salam",
      "Centre"
    ],
    "lowNeighborhoods": [
      "Al Qods",
      "Ouled Hamdane",
      "Zaouit Saoumaa",
      "Hay Al Amal",
      "Ghordifa",
      "Oulad Drid",
      "Safaa"
    ],
    "neighborhoods": [
      "Kasbah Ain Asserdoun",
      "Atlas Foothills",
      "Riad Salam",
      "Centre",
      "Al Qods",
      "Ouled Hamdane",
      "Zaouit Saoumaa",
      "Hay Al Amal",
      "Ghordifa",
      "Oulad Drid",
      "Safaa"
    ]
  },
  "Azilal": {
    "id": "azilal",
    "num": "9.2",
    "name": "Azilal",
    "region": "Béni Mellal-Khénifra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Centre-Ville"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Tanout",
      "Tissili",
      "Hay Al Massira",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Tanout",
      "Tissili",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Demnate": {
    "id": "demnate",
    "num": "9.3",
    "name": "Demnate",
    "region": "Béni Mellal-Khénifra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Imi n'Ifri Road",
      "Médina Ancienne"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Aglou"
    ],
    "neighborhoods": [
      "Imi n'Ifri Road",
      "Médina Ancienne",
      "Centre-Ville",
      "Hay Al Massira",
      "Aglou"
    ]
  },
  "Khénifra": {
    "id": "khenifra",
    "num": "9.4",
    "name": "Khénifra",
    "region": "Béni Mellal-Khénifra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Hay Atlas"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Amal",
      "Amalou",
      "Al Massira",
      "Askeur",
      "Hay Oulad Hmad",
      "Pam"
    ],
    "neighborhoods": [
      "Hay Atlas",
      "Centre-Ville",
      "Hay Amal",
      "Amalou",
      "Al Massira",
      "Askeur",
      "Hay Oulad Hmad",
      "Pam"
    ]
  },
  "Kasba Tadla": {
    "id": "kasba_tadla",
    "num": "9.5",
    "name": "Kasba Tadla",
    "region": "Béni Mellal-Khénifra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Kasbah Historique"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal",
      "Hay Salam"
    ],
    "neighborhoods": [
      "Kasbah Historique",
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal",
      "Hay Salam"
    ]
  },
  "Khouribga": {
    "id": "khouribga",
    "num": "9.6",
    "name": "Khouribga",
    "region": "Béni Mellal-Khénifra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Al Qods",
      "Nahda",
      "Al Firdaous",
      "Zitoune",
      "Village OCP",
      "Hay Al Massira",
      "Cité des Oliviers",
      "Hay Al Hanaa"
    ],
    "neighborhoods": [
      "Al Qods",
      "Nahda",
      "Al Firdaous",
      "Zitoune",
      "Village OCP",
      "Hay Al Massira",
      "Cité des Oliviers",
      "Hay Al Hanaa"
    ]
  },
  "Fquih Ben Salah": {
    "id": "fquih_ben_salah",
    "num": "9.7",
    "name": "Fquih Ben Salah",
    "region": "Béni Mellal-Khénifra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Taghadomt",
      "Hay Al Qods",
      "Hay Al Massira",
      "Hay Al Wifaq",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Al Taghadomt",
      "Hay Al Qods",
      "Hay Al Massira",
      "Hay Al Wifaq",
      "Hay Al Amal"
    ]
  },
  "Oued Zem": {
    "id": "oued_zem",
    "num": "9.8",
    "name": "Oued Zem",
    "region": "Béni Mellal-Khénifra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay El Wahda",
      "Hay Al Qods",
      "Hay Al Horria"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay El Wahda",
      "Hay Al Qods",
      "Hay Al Horria"
    ]
  },
  "Saïdia": {
    "id": "saidia",
    "num": "10.1",
    "name": "Saïdia",
    "region": "L'Oriental",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Marina Saïdia",
      "Boulevard Corniche",
      "Plage Municipale"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Médina",
      "Hay Al Ahram"
    ],
    "neighborhoods": [
      "Marina Saïdia",
      "Boulevard Corniche",
      "Plage Municipale",
      "Médina",
      "Hay Al Ahram"
    ]
  },
  "Oujda": {
    "id": "oujda",
    "num": "10.2",
    "name": "Oujda",
    "region": "L'Oriental",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Médina",
      "Bd Mohammed V",
      "Sidi Yahya"
    ],
    "midNeighborhoods": [
      "Centre-Ville",
      "Hay Andalous"
    ],
    "lowNeighborhoods": [
      "Lazaret",
      "Al Qods",
      "Mir Ali",
      "Hay Salam",
      "Hay El Hikma",
      "Village Kolli",
      "Al Bassatine",
      "Hay Al Mouahidine"
    ],
    "neighborhoods": [
      "Médina",
      "Bd Mohammed V",
      "Sidi Yahya",
      "Centre-Ville",
      "Hay Andalous",
      "Lazaret",
      "Al Qods",
      "Mir Ali",
      "Hay Salam",
      "Hay El Hikma",
      "Village Kolli",
      "Al Bassatine",
      "Hay Al Mouahidine"
    ]
  },
  "Figuig": {
    "id": "figuig",
    "num": "10.3",
    "name": "Figuig",
    "region": "L'Oriental",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Ksar Loudaghir",
      "Ksar Zenaga",
      "Ksar Ouled Slimane",
      "Ksar Laabidat",
      "Ksar Hamam"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [],
    "neighborhoods": [
      "Ksar Loudaghir",
      "Ksar Zenaga",
      "Ksar Ouled Slimane",
      "Ksar Laabidat",
      "Ksar Hamam"
    ]
  },
  "Nador": {
    "id": "nador",
    "num": "10.4",
    "name": "Nador",
    "region": "L'Oriental",
    "tier": "mid",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Corniche",
      "Boustane"
    ],
    "lowNeighborhoods": [
      "Al Matar",
      "Ouled Mimoun",
      "Lâari Cheikh",
      "Hay Al Wahda",
      "Taouima",
      "Chaabi",
      "Iheddadene"
    ],
    "neighborhoods": [
      "Corniche",
      "Boustane",
      "Al Matar",
      "Ouled Mimoun",
      "Lâari Cheikh",
      "Hay Al Wahda",
      "Taouima",
      "Chaabi",
      "Iheddadene"
    ]
  },
  "Berkane": {
    "id": "berkane",
    "num": "10.5",
    "name": "Berkane",
    "region": "L'Oriental",
    "tier": "mid",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Centre-Ville"
    ],
    "lowNeighborhoods": [
      "Bayo",
      "Sidi Ali Ben Yakhlef",
      "Tazaghine",
      "Hay Salam",
      "Bouhdila",
      "Hay Al Qods",
      "Al Majd"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Bayo",
      "Sidi Ali Ben Yakhlef",
      "Tazaghine",
      "Hay Salam",
      "Bouhdila",
      "Hay Al Qods",
      "Al Majd"
    ]
  },
  "Taourirt": {
    "id": "taourirt",
    "num": "10.6",
    "name": "Taourirt",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Médina",
      "Hay Nahda",
      "Moulay Ali Cherif",
      "Hay 20 Août",
      "Hay Salam",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Médina",
      "Hay Nahda",
      "Moulay Ali Cherif",
      "Hay 20 Août",
      "Hay Salam",
      "Hay Al Wahda"
    ]
  },
  "Guercif": {
    "id": "guercif",
    "num": "10.7",
    "name": "Guercif",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Oulad Hamoussa",
      "Hay Al Houria",
      "Hay Ghiata",
      "Chobane",
      "Sidi Kacem"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Oulad Hamoussa",
      "Hay Al Houria",
      "Hay Ghiata",
      "Chobane",
      "Sidi Kacem"
    ]
  },
  "Beni Enzar": {
    "id": "beni_enzar",
    "num": "10.8",
    "name": "Beni Enzar",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Zone Portuaire",
      "Abdouna",
      "Ighzar",
      "Boulevard Hassan II",
      "Hay Al Baraka"
    ],
    "neighborhoods": [
      "Zone Portuaire",
      "Abdouna",
      "Ighzar",
      "Boulevard Hassan II",
      "Hay Al Baraka"
    ]
  },
  "Al Aaroui": {
    "id": "al_aaroui",
    "num": "10.9",
    "name": "Al Aaroui",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Salam",
      "Hay Al Massira",
      "Hay Al Matar"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Salam",
      "Hay Al Massira",
      "Hay Al Matar"
    ]
  },
  "Zaio": {
    "id": "zaio",
    "num": "10.10",
    "name": "Zaio",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Qods",
      "Hay Al Amal",
      "Hay Salam",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Hay Al Qods",
      "Hay Al Amal",
      "Hay Salam",
      "Hay Al Massira"
    ]
  },
  "Jerada": {
    "id": "jerada",
    "num": "10.11",
    "name": "Jerada",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Al Amal",
      "Hay Al Massira",
      "Hay OCP",
      "Al Bassatine",
      "Hay An-Nasr"
    ],
    "neighborhoods": [
      "Al Amal",
      "Hay Al Massira",
      "Hay OCP",
      "Al Bassatine",
      "Hay An-Nasr"
    ]
  },
  "Driouch": {
    "id": "driouch",
    "num": "10.12",
    "name": "Driouch",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay Salam",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay Salam",
      "Hay Al Amal"
    ]
  },
  "Bouarfa": {
    "id": "bouarfa",
    "num": "10.13",
    "name": "Bouarfa",
    "region": "L'Oriental",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Salam",
      "Hay Al Massira",
      "Hay Al Wahda",
      "Hay Al Qods"
    ],
    "neighborhoods": [
      "Centre",
      "Hay Salam",
      "Hay Al Massira",
      "Hay Al Wahda",
      "Hay Al Qods"
    ]
  },
  "Sidi Ifni": {
    "id": "sidi_ifni",
    "num": "11.1",
    "name": "Sidi Ifni",
    "region": "Guelmim-Oued Noun",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Centre-Ville",
      "Plage",
      "Barrio Colominas"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Colline des Oiseaux",
      "Hay Id Bella",
      "Hay Al Massira"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Plage",
      "Barrio Colominas",
      "Colline des Oiseaux",
      "Hay Id Bella",
      "Hay Al Massira"
    ]
  },
  "Guelmim": {
    "id": "guelmim",
    "num": "11.2",
    "name": "Guelmim",
    "region": "Guelmim-Oued Noun",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Camel Market / Oum El Achar",
      "Taghadirt"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Al Qods",
      "Al Amal",
      "Bir Anzarane",
      "Hay Al Massira",
      "Tichla",
      "Hay Al Wahda",
      "Hay Al Mouahidine"
    ],
    "neighborhoods": [
      "Camel Market / Oum El Achar",
      "Taghadirt",
      "Al Qods",
      "Al Amal",
      "Bir Anzarane",
      "Hay Al Massira",
      "Tichla",
      "Hay Al Wahda",
      "Hay Al Mouahidine"
    ]
  },
  "El Ouatia": {
    "id": "el_ouatia",
    "num": "11.3",
    "name": "El Ouatia",
    "region": "Guelmim-Oued Noun",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Corniche",
      "Plage",
      "Port de Pêche"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Corniche",
      "Plage",
      "Port de Pêche",
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Al Wahda"
    ]
  },
  "Tan-Tan": {
    "id": "tan_tan",
    "num": "11.4",
    "name": "Tan-Tan",
    "region": "Guelmim-Oued Noun",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Oubaha",
      "Hay Ain Rahma",
      "Hay Al Qods",
      "Hay Bir Anzarane"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Oubaha",
      "Hay Ain Rahma",
      "Hay Al Qods",
      "Hay Bir Anzarane"
    ]
  },
  "Bouizakarne": {
    "id": "bouizakarne",
    "num": "11.5",
    "name": "Bouizakarne",
    "region": "Guelmim-Oued Noun",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal",
      "Hay Al Wahda"
    ]
  },
  "Assa": {
    "id": "assa",
    "num": "11.6",
    "name": "Assa",
    "region": "Guelmim-Oued Noun",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Ksar Assa Historique"
    ],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Al Massira",
      "Hay Al Qods"
    ],
    "neighborhoods": [
      "Ksar Assa Historique",
      "Centre-Ville",
      "Al Massira",
      "Hay Al Qods"
    ]
  },
  "Tarfaya": {
    "id": "tarfaya",
    "num": "12.1",
    "name": "Tarfaya",
    "region": "Laâyoune-Sakia El Hamra",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Casamar",
      "Plage",
      "Port"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ],
    "neighborhoods": [
      "Casamar",
      "Plage",
      "Port",
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Laâyoune": {
    "id": "laayoune",
    "num": "12.2",
    "name": "Laâyoune",
    "region": "Laâyoune-Sakia El Hamra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Place du Méchouar"
    ],
    "lowNeighborhoods": [
      "Al Massira",
      "Hay Moulay Rachid",
      "Hay Al Qods",
      "Al Wahda",
      "Hay El Matar",
      "Dcheira",
      "25 Mars",
      "Colominas",
      "Hay Al Aouda",
      "Hay Al Amal",
      "Cité Al Wifaq",
      "Zone Industrielle"
    ],
    "neighborhoods": [
      "Place du Méchouar",
      "Al Massira",
      "Hay Moulay Rachid",
      "Hay Al Qods",
      "Al Wahda",
      "Hay El Matar",
      "Dcheira",
      "25 Mars",
      "Colominas",
      "Hay Al Aouda",
      "Hay Al Amal",
      "Cité Al Wifaq",
      "Zone Industrielle"
    ]
  },
  "Boujdour": {
    "id": "boujdour",
    "num": "12.3",
    "name": "Boujdour",
    "region": "Laâyoune-Sakia El Hamra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Corniche du Phare"
    ],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Aouda",
      "Hay Al Wahda",
      "Hay Al Massira",
      "Hay Al Amane",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Corniche du Phare",
      "Centre-Ville",
      "Hay Al Aouda",
      "Hay Al Wahda",
      "Hay Al Massira",
      "Hay Al Amane",
      "Hay Al Amal"
    ]
  },
  "Es-Semara": {
    "id": "es_semara",
    "num": "12.4",
    "name": "Es-Semara",
    "region": "Laâyoune-Sakia El Hamra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Wahda",
      "Hay Al Massira",
      "Hay Al Gaâda",
      "Hay Tan-Tan",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Centre-Ville",
      "Hay Al Wahda",
      "Hay Al Massira",
      "Hay Al Gaâda",
      "Hay Tan-Tan",
      "Hay Al Amal"
    ]
  },
  "El Marsa": {
    "id": "el_marsa",
    "num": "12.5",
    "name": "El Marsa",
    "region": "Laâyoune-Sakia El Hamra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Port de Laâyoune",
      "Zone Industrielle",
      "Corniche",
      "Hay Al Wahda",
      "Hay Al Amal"
    ],
    "neighborhoods": [
      "Port de Laâyoune",
      "Zone Industrielle",
      "Corniche",
      "Hay Al Wahda",
      "Hay Al Amal"
    ]
  }
};

export const TOURISTIC_REGIONS: RegionGroup[] = [
  {
    "name": "Marrakech-Safi",
    "cities": [
      {
        "id": "marrakech",
        "num": "1.1",
        "name": "Marrakech",
        "region": "Marrakech-Safi",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Jemaa el-Fna",
          "Mouassine",
          "Mellah",
          "Kasbah",
          "Bab Doukkala",
          "Riad Laarous",
          "Kaat Benahid",
          "Guéliz",
          "Hivernage",
          "Majorelle",
          "Palmeraie"
        ],
        "midNeighborhoods": [
          "Semlalia",
          "Victor Hugo",
          "Targa",
          "Sidi Youssef Ben Ali",
          "Bab Aylen"
        ],
        "lowNeighborhoods": [
          "Daoudiate",
          "Mabrouka",
          "Massira",
          "Hay Hassani",
          "M’hamid",
          "Socoma",
          "Iziki",
          "Azli"
        ],
        "neighborhoods": [
          "Jemaa el-Fna",
          "Mouassine",
          "Mellah",
          "Kasbah",
          "Bab Doukkala",
          "Riad Laarous",
          "Kaat Benahid",
          "Guéliz",
          "Hivernage",
          "Majorelle",
          "Palmeraie",
          "Semlalia",
          "Victor Hugo",
          "Targa",
          "Sidi Youssef Ben Ali",
          "Bab Aylen",
          "Daoudiate",
          "Mabrouka",
          "Massira",
          "Hay Hassani",
          "M’hamid",
          "Socoma",
          "Iziki",
          "Azli"
        ]
      },
      {
        "id": "essaouira",
        "num": "1.2",
        "name": "Essaouira",
        "region": "Marrakech-Safi",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Mellah",
          "Bab Doukkala",
          "Skala",
          "Borj",
          "Dunes",
          "Diabat"
        ],
        "midNeighborhoods": [
          "Lagune",
          "Ghazoua"
        ],
        "lowNeighborhoods": [
          "Cité Al Mostaqbal"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Mellah",
          "Bab Doukkala",
          "Skala",
          "Borj",
          "Dunes",
          "Diabat",
          "Lagune",
          "Ghazoua",
          "Cité Al Mostaqbal"
        ]
      },
      {
        "id": "safi",
        "num": "1.3",
        "name": "Safi",
        "region": "Marrakech-Safi",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Sidi Bouzid",
          "Port de Safi"
        ],
        "midNeighborhoods": [
          "Plateau",
          "Biada"
        ],
        "lowNeighborhoods": [
          "Jrifat",
          "Hay Anas",
          "Kawki",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Sidi Bouzid",
          "Port de Safi",
          "Plateau",
          "Biada",
          "Jrifat",
          "Hay Anas",
          "Kawki",
          "Hay Al Massira"
        ]
      },
      {
        "id": "tahannaout",
        "num": "1.4",
        "name": "Tahannaout",
        "region": "Marrakech-Safi",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Douar El Ghezoua"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Douar Bouzguen",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Douar El Ghezoua",
          "Centre-Ville",
          "Douar Bouzguen",
          "Hay Al Massira"
        ]
      },
      {
        "id": "ben_guerir",
        "num": "1.5",
        "name": "Ben Guerir",
        "region": "Marrakech-Safi",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Ville Verte Mohammed VI"
        ],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Wahda",
          "Hay Al Qods",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Ville Verte Mohammed VI",
          "Centre-Ville",
          "Hay Al Wahda",
          "Hay Al Qods",
          "Hay Al Amal"
        ]
      },
      {
        "id": "el_kelaa_des_sraghna",
        "num": "1.6",
        "name": "El Kelâa des Sraghna",
        "region": "Marrakech-Safi",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Qods",
          "Hay Al Massira",
          "Bouâm",
          "Hay Al Amal",
          "Hay Al Hanaa"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Qods",
          "Hay Al Massira",
          "Bouâm",
          "Hay Al Amal",
          "Hay Al Hanaa"
        ]
      },
      {
        "id": "youssoufia",
        "num": "1.7",
        "name": "Youssoufia",
        "region": "Marrakech-Safi",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay OCP",
          "Hay Al Amal",
          "Hay Al Massira",
          "Hay Al Qods"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay OCP",
          "Hay Al Amal",
          "Hay Al Massira",
          "Hay Al Qods"
        ]
      },
      {
        "id": "chichaoua",
        "num": "1.8",
        "name": "Chichaoua",
        "region": "Marrakech-Safi",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda",
          "Hay Al Khair"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda",
          "Hay Al Khair"
        ]
      }
    ]
  },
  {
    "name": "Tanger-Tétouan-Al Hoceïma",
    "cities": [
      {
        "id": "tanger",
        "num": "2.1",
        "name": "Tanger",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Grand Socco",
          "Petit Socco",
          "Marshan",
          "Kasbah",
          "Malabata",
          "Achakkar"
        ],
        "midNeighborhoods": [
          "Iberia",
          "Centre-Ville",
          "Tanja Balia",
          "Val Fleuri"
        ],
        "lowNeighborhoods": [
          "Drissia",
          "Souani",
          "Bir Chifa",
          "Hay El Majd",
          "Benkirane",
          "Mghogha",
          "Casabarata",
          "Branès",
          "Mesnana",
          "Boukhalef"
        ],
        "neighborhoods": [
          "Grand Socco",
          "Petit Socco",
          "Marshan",
          "Kasbah",
          "Malabata",
          "Achakkar",
          "Iberia",
          "Centre-Ville",
          "Tanja Balia",
          "Val Fleuri",
          "Drissia",
          "Souani",
          "Bir Chifa",
          "Hay El Majd",
          "Benkirane",
          "Mghogha",
          "Casabarata",
          "Branès",
          "Mesnana",
          "Boukhalef"
        ]
      },
      {
        "id": "chefchaouen",
        "num": "2.2",
        "name": "Chefchaouen",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Outa El Hammam",
          "Souika",
          "El Ayoun",
          "Al Kharrazine",
          "Bab Souq"
        ],
        "midNeighborhoods": [
          "Ain Haouzi"
        ],
        "lowNeighborhoods": [
          "Hassan I"
        ],
        "neighborhoods": [
          "Outa El Hammam",
          "Souika",
          "El Ayoun",
          "Al Kharrazine",
          "Bab Souq",
          "Ain Haouzi",
          "Hassan I"
        ]
      },
      {
        "id": "tetouan",
        "num": "2.3",
        "name": "Tétouan",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Ensanche",
          "Wilaya"
        ],
        "midNeighborhoods": [
          "Saniat Rmel",
          "Kitane"
        ],
        "lowNeighborhoods": [
          "Touabel",
          "Coelma",
          "M’hannech I & II",
          "Somal",
          "Safir"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Ensanche",
          "Wilaya",
          "Saniat Rmel",
          "Kitane",
          "Touabel",
          "Coelma",
          "M’hannech I & II",
          "Somal",
          "Safir"
        ]
      },
      {
        "id": "assilah",
        "num": "2.4",
        "name": "Assilah",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Médina Historique"
        ],
        "midNeighborhoods": [
          "Lalla Rahma",
          "Al Bassatine"
        ],
        "lowNeighborhoods": [
          "Zillil",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Médina Historique",
          "Lalla Rahma",
          "Al Bassatine",
          "Zillil",
          "Hay Al Massira"
        ]
      },
      {
        "id": "m_diq",
        "num": "2.5",
        "name": "M’diq",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Port",
          "Plage Miramar",
          "Rincón"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Amal",
          "Cité Militaire"
        ],
        "neighborhoods": [
          "Port",
          "Plage Miramar",
          "Rincón",
          "Centre-Ville",
          "Hay Al Amal",
          "Cité Militaire"
        ]
      },
      {
        "id": "al_hoceima",
        "num": "2.6",
        "name": "Al Hoceïma",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Calabonita",
          "Moroviejo",
          "Tala Youssef"
        ],
        "midNeighborhoods": [
          "Mirador",
          "Port"
        ],
        "lowNeighborhoods": [
          "Bario Brirro",
          "Hay Menzeh",
          "Hay Romman"
        ],
        "neighborhoods": [
          "Calabonita",
          "Moroviejo",
          "Tala Youssef",
          "Mirador",
          "Port",
          "Bario Brirro",
          "Hay Menzeh",
          "Hay Romman"
        ]
      },
      {
        "id": "martil",
        "num": "2.7",
        "name": "Martil",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Miramar",
          "Front de Mer"
        ],
        "midNeighborhoods": [
          "Chbar",
          "Oum Kalthoum"
        ],
        "lowNeighborhoods": [
          "Hay Kora",
          "Cité Universitaire"
        ],
        "neighborhoods": [
          "Miramar",
          "Front de Mer",
          "Chbar",
          "Oum Kalthoum",
          "Hay Kora",
          "Cité Universitaire"
        ]
      },
      {
        "id": "fnideq",
        "num": "2.8",
        "name": "Fnideq",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "mid",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Centre-Ville",
          "Bab Sebta"
        ],
        "lowNeighborhoods": [
          "Hay Al Wahda",
          "Hay El Andalous",
          "Hay Al Matar"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Bab Sebta",
          "Hay Al Wahda",
          "Hay El Andalous",
          "Hay Al Matar"
        ]
      },
      {
        "id": "larache",
        "num": "2.9",
        "name": "Larache",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina",
          "Port",
          "Balcon Atlantico"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Al Manar",
          "Hay Salam",
          "Maghreb Al Jadid",
          "Hay Chaâbi",
          "Oulad Hmid"
        ],
        "neighborhoods": [
          "Médina",
          "Port",
          "Balcon Atlantico",
          "Centre-Ville",
          "Al Manar",
          "Hay Salam",
          "Maghreb Al Jadid",
          "Hay Chaâbi",
          "Oulad Hmid"
        ]
      },
      {
        "id": "ouezzane",
        "num": "2.10",
        "name": "Ouezzane",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Dar Dmana",
          "Hay Zaouia",
          "Médina Ancienne"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Massira",
          "Bab Fès"
        ],
        "neighborhoods": [
          "Dar Dmana",
          "Hay Zaouia",
          "Médina Ancienne",
          "Hay Al Massira",
          "Bab Fès"
        ]
      },
      {
        "id": "ksar_el_kebir",
        "num": "2.11",
        "name": "Ksar El Kébir",
        "region": "Tanger-Tétouan-Al Hoceïma",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Médina Ancienne"
        ],
        "lowNeighborhoods": [
          "Bab El Oued",
          "Hay Al Qods",
          "Oulad Hmid",
          "Hay Salam",
          "Chariâ"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Bab El Oued",
          "Hay Al Qods",
          "Oulad Hmid",
          "Hay Salam",
          "Chariâ"
        ]
      }
    ]
  },
  {
    "name": "Fès-Meknès",
    "cities": [
      {
        "id": "fes",
        "num": "3.1",
        "name": "Fès",
        "region": "Fès-Meknès",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Fès El Bali",
          "R’cif",
          "Batha",
          "Bab Bou Jeloud",
          "Mellah",
          "Fès Jdid",
          "Ville Nouvelle"
        ],
        "midNeighborhoods": [
          "Agdal",
          "Atlas",
          "Champs de Course",
          "Narjiss"
        ],
        "lowNeighborhoods": [
          "Mont Fleuri",
          "Saïss",
          "Bab Ftouh",
          "Sidi Boujida",
          "Zouagha",
          "Bensouda",
          "Ain Kadous",
          "Dhar Mehraz"
        ],
        "neighborhoods": [
          "Fès El Bali",
          "R’cif",
          "Batha",
          "Bab Bou Jeloud",
          "Mellah",
          "Fès Jdid",
          "Ville Nouvelle",
          "Agdal",
          "Atlas",
          "Champs de Course",
          "Narjiss",
          "Mont Fleuri",
          "Saïss",
          "Bab Ftouh",
          "Sidi Boujida",
          "Zouagha",
          "Bensouda",
          "Ain Kadous",
          "Dhar Mehraz"
        ]
      },
      {
        "id": "meknes",
        "num": "3.2",
        "name": "Meknès",
        "region": "Fès-Meknès",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Rouamzine",
          "Agdal",
          "Hamria"
        ],
        "midNeighborhoods": [
          "Belle-Vue",
          "Marjane",
          "Plaisance"
        ],
        "lowNeighborhoods": [
          "Mansour",
          "Bassatine",
          "Sidi Bouzekri",
          "Kamilia",
          "Toulal",
          "Ouislane",
          "Wjeh Arouss"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Rouamzine",
          "Agdal",
          "Hamria",
          "Belle-Vue",
          "Marjane",
          "Plaisance",
          "Mansour",
          "Bassatine",
          "Sidi Bouzekri",
          "Kamilia",
          "Toulal",
          "Ouislane",
          "Wjeh Arouss"
        ]
      },
      {
        "id": "ifrane",
        "num": "3.3",
        "name": "Ifrane",
        "region": "Fès-Meknès",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Centre-Ville",
          "Michlifen",
          "Ain Vittel"
        ],
        "midNeighborhoods": [
          "Hay Riad",
          "Résidence Royale"
        ],
        "lowNeighborhoods": [
          "Hay Atlas"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Michlifen",
          "Ain Vittel",
          "Hay Riad",
          "Résidence Royale",
          "Hay Atlas"
        ]
      },
      {
        "id": "azrou",
        "num": "3.4",
        "name": "Azrou",
        "region": "Fès-Meknès",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Ahadaf"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Tizi",
          "Hay Al Massira",
          "Tiqnit",
          "Hay Salam"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Ahadaf",
          "Tizi",
          "Hay Al Massira",
          "Tiqnit",
          "Hay Salam"
        ]
      },
      {
        "id": "moulay_yacoub",
        "num": "3.5",
        "name": "Moulay Yacoub",
        "region": "Fès-Meknès",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Centre Thermal",
          "Quartier Kasbah"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Centre Thermal",
          "Quartier Kasbah",
          "Hay Al Amal"
        ]
      },
      {
        "id": "sefrou",
        "num": "3.6",
        "name": "Sefrou",
        "region": "Fès-Meknès",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Cascades"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Habouna",
          "Ben Sfam",
          "Zoubida",
          "Hay Al Qods",
          "Lalla Meryem",
          "Bhalil Road"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Cascades",
          "Habouna",
          "Ben Sfam",
          "Zoubida",
          "Hay Al Qods",
          "Lalla Meryem",
          "Bhalil Road"
        ]
      },
      {
        "id": "taza",
        "num": "3.7",
        "name": "Taza",
        "region": "Fès-Meknès",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Taza Haut"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Taza Bas",
          "Al Massira",
          "Biti",
          "Hay Al Qods",
          "Douar Mssila",
          "Hay Al Wifaq"
        ],
        "neighborhoods": [
          "Taza Haut",
          "Taza Bas",
          "Al Massira",
          "Biti",
          "Hay Al Qods",
          "Douar Mssila",
          "Hay Al Wifaq"
        ]
      },
      {
        "id": "el_hajeb",
        "num": "3.8",
        "name": "El Hajeb",
        "region": "Fès-Meknès",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Ain Khadem"
        ],
        "lowNeighborhoods": [
          "Centre",
          "Cantina",
          "Hay Al Amal",
          "Hay Chahid"
        ],
        "neighborhoods": [
          "Ain Khadem",
          "Centre",
          "Cantina",
          "Hay Al Amal",
          "Hay Chahid"
        ]
      },
      {
        "id": "taounate",
        "num": "3.9",
        "name": "Taounate",
        "region": "Fès-Meknès",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Al Wahda",
          "Ras El Karia",
          "Hay Al Massira",
          "Bouhouda Road"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Al Wahda",
          "Ras El Karia",
          "Hay Al Massira",
          "Bouhouda Road"
        ]
      },
      {
        "id": "missour",
        "num": "3.10",
        "name": "Missour",
        "region": "Fès-Meknès",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Al Massira",
          "Hay Salam",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Al Massira",
          "Hay Salam",
          "Hay Al Wahda"
        ]
      }
    ]
  },
  {
    "name": "Souss-Massa",
    "cities": [
      {
        "id": "agadir",
        "num": "4.1",
        "name": "Agadir",
        "region": "Souss-Massa",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Secteur Balnéaire",
          "Marina Agadir",
          "Founty",
          "Secteur Résidentiel",
          "Nouveau Talborjt",
          "Talborjt"
        ],
        "midNeighborhoods": [
          "Charaf",
          "Anza Plage",
          "Bensergao"
        ],
        "lowNeighborhoods": [
          "Dakhla",
          "Salam",
          "Al Houda",
          "Tilila",
          "Hay Mohammadi",
          "Al Wifaq",
          "Tikiouine"
        ],
        "neighborhoods": [
          "Secteur Balnéaire",
          "Marina Agadir",
          "Founty",
          "Secteur Résidentiel",
          "Nouveau Talborjt",
          "Talborjt",
          "Charaf",
          "Anza Plage",
          "Bensergao",
          "Dakhla",
          "Salam",
          "Al Houda",
          "Tilila",
          "Hay Mohammadi",
          "Al Wifaq",
          "Tikiouine"
        ]
      },
      {
        "id": "taroudant",
        "num": "4.2",
        "name": "Taroudant",
        "region": "Souss-Massa",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Médina",
          "Bab Zorgan",
          "Bab Targhount"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Lasstah",
          "Ouled Bounouna",
          "Hay Al Mohammadi"
        ],
        "neighborhoods": [
          "Médina",
          "Bab Zorgan",
          "Bab Targhount",
          "Lasstah",
          "Ouled Bounouna",
          "Hay Al Mohammadi"
        ]
      },
      {
        "id": "tafraout",
        "num": "4.3",
        "name": "Tafraout",
        "region": "Souss-Massa",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Centre-Ville",
          "Ammeln",
          "Aday"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Ammeln",
          "Aday",
          "Hay Al Massira"
        ]
      },
      {
        "id": "tiznit",
        "num": "4.4",
        "name": "Tiznit",
        "region": "Souss-Massa",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Afrak",
          "Bab Aglou"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Massira",
          "Hay Id Zikri",
          "Hay Al Boustane",
          "Al Widadia"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Afrak",
          "Bab Aglou",
          "Hay Al Massira",
          "Hay Id Zikri",
          "Hay Al Boustane",
          "Al Widadia"
        ]
      },
      {
        "id": "tata",
        "num": "4.5",
        "name": "Tata",
        "region": "Souss-Massa",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Agadir Lehna"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Agadir Lehna",
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "inezgane",
        "num": "4.6",
        "name": "Inezgane",
        "region": "Souss-Massa",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Grand Marché"
        ],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay El Jorf",
          "Tarrast",
          "Lhassania",
          "Cité Al Amal"
        ],
        "neighborhoods": [
          "Grand Marché",
          "Centre-Ville",
          "Hay El Jorf",
          "Tarrast",
          "Lhassania",
          "Cité Al Amal"
        ]
      },
      {
        "id": "ait_melloul",
        "num": "4.7",
        "name": "Aït Melloul",
        "region": "Souss-Massa",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Azrou",
          "Kasbah",
          "Cité Universitaire",
          "Hay Al Amal",
          "Hay Al Houria"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Azrou",
          "Kasbah",
          "Cité Universitaire",
          "Hay Al Amal",
          "Hay Al Houria"
        ]
      },
      {
        "id": "dcheira_el_jihadia",
        "num": "4.8",
        "name": "Dcheira El Jihadia",
        "region": "Souss-Massa",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Lhouda",
          "Hay Al Boustane",
          "Hay Tarik",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Lhouda",
          "Hay Al Boustane",
          "Hay Tarik",
          "Hay Al Massira"
        ]
      },
      {
        "id": "oulad_teima",
        "num": "4.9",
        "name": "Oulad Teïma",
        "region": "Souss-Massa",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Amal",
          "Hay Mohammadi",
          "Hay Chahid",
          "Hay Al Nahda"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Amal",
          "Hay Mohammadi",
          "Hay Chahid",
          "Hay Al Nahda"
        ]
      },
      {
        "id": "biougra",
        "num": "4.10",
        "name": "Biougra",
        "region": "Souss-Massa",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Amal",
          "Hay Al Massira",
          "Hay Al Wifaq"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Amal",
          "Hay Al Massira",
          "Hay Al Wifaq"
        ]
      }
    ]
  },
  {
    "name": "Casablanca-Settat",
    "cities": [
      {
        "id": "casablanca",
        "num": "5.1",
        "name": "Casablanca",
        "region": "Casablanca-Settat",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Ain Diab",
          "Anfa Supérieur",
          "Val d'Anfa",
          "Sour Jdid",
          "Ancienne Médina",
          "Centre-Ville",
          "Gauthier",
          "Maârif",
          "Racine"
        ],
        "midNeighborhoods": [
          "Palmier",
          "Les Hôpitaux",
          "Longchamp",
          "California",
          "Sidi Maârouf",
          "Roches Noires",
          "Belvédère",
          "Derb Sultan",
          "Mers Sultan",
          "2 Mars"
        ],
        "lowNeighborhoods": [
          "Ain Chock",
          "Casanearshore",
          "Inara",
          "Mandarona",
          "Aïn Sebaâ",
          "Hay Mohammadi",
          "Sbata",
          "Moulay Rachid",
          "Sidi Othmane",
          "Sidi Bernoussi",
          "Sidi Moumen",
          "Hay Hassani",
          "Oulfa",
          "Lissasfa",
          "Derb Ghallef"
        ],
        "neighborhoods": [
          "Ain Diab",
          "Anfa Supérieur",
          "Val d'Anfa",
          "Sour Jdid",
          "Ancienne Médina",
          "Centre-Ville",
          "Gauthier",
          "Maârif",
          "Racine",
          "Palmier",
          "Les Hôpitaux",
          "Longchamp",
          "California",
          "Sidi Maârouf",
          "Roches Noires",
          "Belvédère",
          "Derb Sultan",
          "Mers Sultan",
          "2 Mars",
          "Ain Chock",
          "Casanearshore",
          "Inara",
          "Mandarona",
          "Aïn Sebaâ",
          "Hay Mohammadi",
          "Sbata",
          "Moulay Rachid",
          "Sidi Othmane",
          "Sidi Bernoussi",
          "Sidi Moumen",
          "Hay Hassani",
          "Oulfa",
          "Lissasfa",
          "Derb Ghallef"
        ]
      },
      {
        "id": "el_jadida",
        "num": "5.2",
        "name": "El Jadida",
        "region": "Casablanca-Settat",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Cité Portugaise",
          "Mazagan",
          "Sidi Bouzid"
        ],
        "midNeighborhoods": [
          "Plateau",
          "Cité de l'Air"
        ],
        "lowNeighborhoods": [
          "Al Qods",
          "Najmat Al Janoub",
          "Hay Salam"
        ],
        "neighborhoods": [
          "Cité Portugaise",
          "Mazagan",
          "Sidi Bouzid",
          "Plateau",
          "Cité de l'Air",
          "Al Qods",
          "Najmat Al Janoub",
          "Hay Salam"
        ]
      },
      {
        "id": "mohammedia",
        "num": "5.3",
        "name": "Mohammédia",
        "region": "Casablanca-Settat",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Quartier du Parc",
          "Miramar",
          "Monica",
          "Kasbah"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "El Alia",
          "Rachidia",
          "Les Crêtes",
          "Yasmina",
          "Hay Al Wafa"
        ],
        "neighborhoods": [
          "Quartier du Parc",
          "Miramar",
          "Monica",
          "Kasbah",
          "El Alia",
          "Rachidia",
          "Les Crêtes",
          "Yasmina",
          "Hay Al Wafa"
        ]
      },
      {
        "id": "bouznika",
        "num": "5.4",
        "name": "Bouznika",
        "region": "Casablanca-Settat",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Bouznika Plage",
          "Kasbah"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Bouznika Plage",
          "Kasbah",
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Amal"
        ]
      },
      {
        "id": "dar_bouazza",
        "num": "5.5",
        "name": "Dar Bouazza",
        "region": "Casablanca-Settat",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Tamaris",
          "Jack Beach",
          "Miramar Plage"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Oulad Ahmed",
          "Dar Koba"
        ],
        "neighborhoods": [
          "Tamaris",
          "Jack Beach",
          "Miramar Plage",
          "Oulad Ahmed",
          "Dar Koba"
        ]
      },
      {
        "id": "azemmour",
        "num": "5.6",
        "name": "Azemmour",
        "region": "Casablanca-Settat",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Kasbah",
          "Oued Oum Er-Rbia"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Massira",
          "Derb Chbika"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Kasbah",
          "Oued Oum Er-Rbia",
          "Hay Al Massira",
          "Derb Chbika"
        ]
      },
      {
        "id": "bouskoura",
        "num": "5.7",
        "name": "Bouskoura",
        "region": "Casablanca-Settat",
        "tier": "mid",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Ville Verte"
        ],
        "lowNeighborhoods": [
          "Bouskoura Centre",
          "Victoria City",
          "Zone Industrielle",
          "Cité Salama"
        ],
        "neighborhoods": [
          "Ville Verte",
          "Bouskoura Centre",
          "Victoria City",
          "Zone Industrielle",
          "Cité Salama"
        ]
      },
      {
        "id": "settat",
        "num": "5.8",
        "name": "Settat",
        "region": "Casablanca-Settat",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Salam",
          "Hay El Khair",
          "Mzinda",
          "Hay Al Farah",
          "Complexe Universitaire",
          "Hay Souani"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Salam",
          "Hay El Khair",
          "Mzinda",
          "Hay Al Farah",
          "Complexe Universitaire",
          "Hay Souani"
        ]
      },
      {
        "id": "berrechid",
        "num": "5.9",
        "name": "Berrechid",
        "region": "Casablanca-Settat",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Al Omrane",
          "Hay Hassani",
          "Hay Riad",
          "Zone Industrielle",
          "Al Bassatine",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Al Omrane",
          "Hay Hassani",
          "Hay Riad",
          "Zone Industrielle",
          "Al Bassatine",
          "Hay Al Massira"
        ]
      },
      {
        "id": "benslimane",
        "num": "5.10",
        "name": "Benslimane",
        "region": "Casablanca-Settat",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Farah",
          "Hay Al Qods",
          "Hay Lalla Meryem",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Farah",
          "Hay Al Qods",
          "Hay Lalla Meryem",
          "Hay Al Massira"
        ]
      },
      {
        "id": "sidi_bennour",
        "num": "5.11",
        "name": "Sidi Bennour",
        "region": "Casablanca-Settat",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Qods",
          "Hay Al Amal",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Qods",
          "Hay Al Amal",
          "Hay Al Wahda"
        ]
      }
    ]
  },
  {
    "name": "Rabat-Salé-Kénitra",
    "cities": [
      {
        "id": "rabat",
        "num": "6.1",
        "name": "Rabat",
        "region": "Rabat-Salé-Kénitra",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Kasbah des Oudaïas",
          "Médina Ancienne",
          "Tour Hassan / Hassan",
          "Centre-Ville",
          "Agdal",
          "Souissi",
          "Touarga"
        ],
        "midNeighborhoods": [
          "Les Orangers",
          "Aviation",
          "Haut Agdal",
          "Hay Riad",
          "Bir Kacem",
          "Dar Essalam"
        ],
        "lowNeighborhoods": [
          "Guich Loudaya",
          "Yacoub El Mansour",
          "Akkari",
          "Hay Al Fath",
          "Diour Jamaa"
        ],
        "neighborhoods": [
          "Kasbah des Oudaïas",
          "Médina Ancienne",
          "Tour Hassan / Hassan",
          "Centre-Ville",
          "Agdal",
          "Souissi",
          "Touarga",
          "Les Orangers",
          "Aviation",
          "Haut Agdal",
          "Hay Riad",
          "Bir Kacem",
          "Dar Essalam",
          "Guich Loudaya",
          "Yacoub El Mansour",
          "Akkari",
          "Hay Al Fath",
          "Diour Jamaa"
        ]
      },
      {
        "id": "sale",
        "num": "6.2",
        "name": "Salé",
        "region": "Rabat-Salé-Kénitra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina Ancienne",
          "Marina Bouregreg"
        ],
        "midNeighborhoods": [
          "Bettana",
          "Sala Al Jadida"
        ],
        "lowNeighborhoods": [
          "Sidi Moussa",
          "Rmel",
          "Technopolis",
          "Layayda",
          "Tabriquet",
          "Hay Salam",
          "Hay Rahma",
          "Hay Al Inbiat",
          "Karia"
        ],
        "neighborhoods": [
          "Médina Ancienne",
          "Marina Bouregreg",
          "Bettana",
          "Sala Al Jadida",
          "Sidi Moussa",
          "Rmel",
          "Technopolis",
          "Layayda",
          "Tabriquet",
          "Hay Salam",
          "Hay Rahma",
          "Hay Al Inbiat",
          "Karia"
        ]
      },
      {
        "id": "temara",
        "num": "6.3",
        "name": "Témara",
        "region": "Rabat-Salé-Kénitra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Harhoura",
          "Sid El Abed",
          "Val d'Or"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Wifaq",
          "Massira 1 & 2",
          "Al Maghreb Al Arabi",
          "Fouarat",
          "Ennasr",
          "Mansour Dahbi"
        ],
        "neighborhoods": [
          "Harhoura",
          "Sid El Abed",
          "Val d'Or",
          "Wifaq",
          "Massira 1 & 2",
          "Al Maghreb Al Arabi",
          "Fouarat",
          "Ennasr",
          "Mansour Dahbi"
        ]
      },
      {
        "id": "skhirate",
        "num": "6.4",
        "name": "Skhirate",
        "region": "Rabat-Salé-Kénitra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Skhirate Plage",
          "Kasbah"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Fath",
          "Zone Industrielle"
        ],
        "neighborhoods": [
          "Skhirate Plage",
          "Kasbah",
          "Centre-Ville",
          "Hay Al Fath",
          "Zone Industrielle"
        ]
      },
      {
        "id": "kenitra",
        "num": "6.5",
        "name": "Kénitra",
        "region": "Rabat-Salé-Kénitra",
        "tier": "mid",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Centre-Ville",
          "Val Fleuri",
          "Maâmora"
        ],
        "lowNeighborhoods": [
          "Bir Rami",
          "Saknia",
          "Ouled Oujih",
          "Pam",
          "Alliance Darna",
          "Fouarat",
          "Cité Universitaire",
          "Maghreb Arabe"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Val Fleuri",
          "Maâmora",
          "Bir Rami",
          "Saknia",
          "Ouled Oujih",
          "Pam",
          "Alliance Darna",
          "Fouarat",
          "Cité Universitaire",
          "Maghreb Arabe"
        ]
      },
      {
        "id": "sidi_slimane",
        "num": "6.6",
        "name": "Sidi Slimane",
        "region": "Rabat-Salé-Kénitra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Pam",
          "Hay Al Massira",
          "Hay Oulad Ziane",
          "Hay Al Qods"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Pam",
          "Hay Al Massira",
          "Hay Oulad Ziane",
          "Hay Al Qods"
        ]
      },
      {
        "id": "sidi_kacem",
        "num": "6.7",
        "name": "Sidi Kacem",
        "region": "Rabat-Salé-Kénitra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Zirara",
          "Hay Al Khadra",
          "Sahrij",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Zirara",
          "Hay Al Khadra",
          "Sahrij",
          "Hay Al Massira"
        ]
      },
      {
        "id": "khemisset",
        "num": "6.8",
        "name": "Khémisset",
        "region": "Rabat-Salé-Kénitra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Essalam",
          "Hay Farah",
          "Hay Yasmine",
          "Hay Tounsi",
          "Hay Sahraoui"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Essalam",
          "Hay Farah",
          "Hay Yasmine",
          "Hay Tounsi",
          "Hay Sahraoui"
        ]
      },
      {
        "id": "tiflet",
        "num": "6.9",
        "name": "Tiflet",
        "region": "Rabat-Salé-Kénitra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Médina",
          "Hay Salam",
          "Hay Andalus",
          "Hay Al Farah",
          "Al Amal",
          "Zoubida"
        ],
        "neighborhoods": [
          "Médina",
          "Hay Salam",
          "Hay Andalus",
          "Hay Al Farah",
          "Al Amal",
          "Zoubida"
        ]
      }
    ]
  },
  {
    "name": "Drâa-Tafilalet",
    "cities": [
      {
        "id": "ouarzazate",
        "num": "7.1",
        "name": "Ouarzazate",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Kasbah Taourirt",
          "Centre-Ville",
          "Cinema Studios"
        ],
        "midNeighborhoods": [
          "Tabount",
          "Fedraghou",
          "Al Mouahidine"
        ],
        "lowNeighborhoods": [
          "Hay Al Mansour",
          "Al Wahda",
          "Tassoumaat"
        ],
        "neighborhoods": [
          "Kasbah Taourirt",
          "Centre-Ville",
          "Cinema Studios",
          "Tabount",
          "Fedraghou",
          "Al Mouahidine",
          "Hay Al Mansour",
          "Al Wahda",
          "Tassoumaat"
        ]
      },
      {
        "id": "tinghir",
        "num": "7.2",
        "name": "Tinghir",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Todgha",
          "Mellah Ancien"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Wifaq",
          "Afanour",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Todgha",
          "Mellah Ancien",
          "Centre-Ville",
          "Hay Al Wifaq",
          "Afanour",
          "Hay Al Massira"
        ]
      },
      {
        "id": "zagora",
        "num": "7.3",
        "name": "Zagora",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Amazraou / Amezrou",
          "Centre-Ville"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Qods",
          "Hay Al Wahda",
          "Zaouit El Baraka"
        ],
        "neighborhoods": [
          "Amazraou / Amezrou",
          "Centre-Ville",
          "Hay Al Qods",
          "Hay Al Wahda",
          "Zaouit El Baraka"
        ]
      },
      {
        "id": "erfoud",
        "num": "7.4",
        "name": "Erfoud",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Centre-Ville",
          "Hay Salam"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Qods",
          "Hay Al Massira",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Salam",
          "Hay Al Qods",
          "Hay Al Massira",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "rissani",
        "num": "7.5",
        "name": "Rissani",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Ksar Souk",
          "Moulay Ali Cherif"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Ksar Souk",
          "Moulay Ali Cherif",
          "Centre-Ville",
          "Hay Al Amal"
        ]
      },
      {
        "id": "boumalne_dades",
        "num": "7.6",
        "name": "Boumalne Dadès",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Vallée de Dadès",
          "Aït Boulmane"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Vallée de Dadès",
          "Aït Boulmane",
          "Centre-Ville",
          "Hay Al Massira"
        ]
      },
      {
        "id": "kelaat_m_gouna",
        "num": "7.7",
        "name": "Kelaat M’Gouna",
        "region": "Drâa-Tafilalet",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Vallée des Roses"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Vallée des Roses",
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "midelt",
        "num": "7.8",
        "name": "Midelt",
        "region": "Drâa-Tafilalet",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Berrem",
          "Souk El Qdim"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Tatiouine",
          "Hay Moulay Ali Cherif"
        ],
        "neighborhoods": [
          "Berrem",
          "Souk El Qdim",
          "Centre-Ville",
          "Hay Al Massira",
          "Tatiouine",
          "Hay Moulay Ali Cherif"
        ]
      },
      {
        "id": "errachidia",
        "num": "7.9",
        "name": "Errachidia",
        "region": "Drâa-Tafilalet",
        "tier": "mid",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "L'Oasis",
          "Centre-Ville"
        ],
        "lowNeighborhoods": [
          "Boutalamine",
          "Ain El Atti",
          "Oulad El Haj",
          "Targa",
          "Hay Al Massira",
          "Hay Moulay Rachid",
          "Hay Al Qods"
        ],
        "neighborhoods": [
          "L'Oasis",
          "Centre-Ville",
          "Boutalamine",
          "Ain El Atti",
          "Oulad El Haj",
          "Targa",
          "Hay Al Massira",
          "Hay Moulay Rachid",
          "Hay Al Qods"
        ]
      }
    ]
  },
  {
    "name": "Dakhla-Oued Ed-Dahab",
    "cities": [
      {
        "id": "dakhla",
        "num": "8.1",
        "name": "Dakhla",
        "region": "Dakhla-Oued Ed-Dahab",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Corniche Oued Ed-Dahab",
          "Boulevard Mohammed V",
          "Centre-Ville",
          "Lagoon Kitesurf Strip"
        ],
        "midNeighborhoods": [
          "Port de Dakhla",
          "Al Massira"
        ],
        "lowNeighborhoods": [
          "Hay Oum Tounsi",
          "Al Wahda",
          "Hay Al Qods",
          "Hay El Hassani",
          "Hay Salam",
          "Quartier Industriel",
          "Cité Militaire",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Corniche Oued Ed-Dahab",
          "Boulevard Mohammed V",
          "Centre-Ville",
          "Lagoon Kitesurf Strip",
          "Port de Dakhla",
          "Al Massira",
          "Hay Oum Tounsi",
          "Al Wahda",
          "Hay Al Qods",
          "Hay El Hassani",
          "Hay Salam",
          "Quartier Industriel",
          "Cité Militaire",
          "Hay Al Amal"
        ]
      },
      {
        "id": "aousserd_bir_gandouz",
        "num": "8.2",
        "name": "Aousserd / Bir Gandouz",
        "region": "Dakhla-Oued Ed-Dahab",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre Administratif",
          "Hay Al Massira",
          "Zone Postale",
          "Cité Frontalière El Guerguarat"
        ],
        "neighborhoods": [
          "Centre Administratif",
          "Hay Al Massira",
          "Zone Postale",
          "Cité Frontalière El Guerguarat"
        ]
      }
    ]
  },
  {
    "name": "Béni Mellal-Khénifra",
    "cities": [
      {
        "id": "beni_mellal",
        "num": "9.1",
        "name": "Béni Mellal",
        "region": "Béni Mellal-Khénifra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Kasbah Ain Asserdoun",
          "Atlas Foothills"
        ],
        "midNeighborhoods": [
          "Riad Salam",
          "Centre"
        ],
        "lowNeighborhoods": [
          "Al Qods",
          "Ouled Hamdane",
          "Zaouit Saoumaa",
          "Hay Al Amal",
          "Ghordifa",
          "Oulad Drid",
          "Safaa"
        ],
        "neighborhoods": [
          "Kasbah Ain Asserdoun",
          "Atlas Foothills",
          "Riad Salam",
          "Centre",
          "Al Qods",
          "Ouled Hamdane",
          "Zaouit Saoumaa",
          "Hay Al Amal",
          "Ghordifa",
          "Oulad Drid",
          "Safaa"
        ]
      },
      {
        "id": "azilal",
        "num": "9.2",
        "name": "Azilal",
        "region": "Béni Mellal-Khénifra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Centre-Ville"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Tanout",
          "Tissili",
          "Hay Al Massira",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Tanout",
          "Tissili",
          "Hay Al Massira",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "demnate",
        "num": "9.3",
        "name": "Demnate",
        "region": "Béni Mellal-Khénifra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Imi n'Ifri Road",
          "Médina Ancienne"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Aglou"
        ],
        "neighborhoods": [
          "Imi n'Ifri Road",
          "Médina Ancienne",
          "Centre-Ville",
          "Hay Al Massira",
          "Aglou"
        ]
      },
      {
        "id": "khenifra",
        "num": "9.4",
        "name": "Khénifra",
        "region": "Béni Mellal-Khénifra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Hay Atlas"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Amal",
          "Amalou",
          "Al Massira",
          "Askeur",
          "Hay Oulad Hmad",
          "Pam"
        ],
        "neighborhoods": [
          "Hay Atlas",
          "Centre-Ville",
          "Hay Amal",
          "Amalou",
          "Al Massira",
          "Askeur",
          "Hay Oulad Hmad",
          "Pam"
        ]
      },
      {
        "id": "kasba_tadla",
        "num": "9.5",
        "name": "Kasba Tadla",
        "region": "Béni Mellal-Khénifra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Kasbah Historique"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Amal",
          "Hay Salam"
        ],
        "neighborhoods": [
          "Kasbah Historique",
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Amal",
          "Hay Salam"
        ]
      },
      {
        "id": "khouribga",
        "num": "9.6",
        "name": "Khouribga",
        "region": "Béni Mellal-Khénifra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Al Qods",
          "Nahda",
          "Al Firdaous",
          "Zitoune",
          "Village OCP",
          "Hay Al Massira",
          "Cité des Oliviers",
          "Hay Al Hanaa"
        ],
        "neighborhoods": [
          "Al Qods",
          "Nahda",
          "Al Firdaous",
          "Zitoune",
          "Village OCP",
          "Hay Al Massira",
          "Cité des Oliviers",
          "Hay Al Hanaa"
        ]
      },
      {
        "id": "fquih_ben_salah",
        "num": "9.7",
        "name": "Fquih Ben Salah",
        "region": "Béni Mellal-Khénifra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Al Taghadomt",
          "Hay Al Qods",
          "Hay Al Massira",
          "Hay Al Wifaq",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Al Taghadomt",
          "Hay Al Qods",
          "Hay Al Massira",
          "Hay Al Wifaq",
          "Hay Al Amal"
        ]
      },
      {
        "id": "oued_zem",
        "num": "9.8",
        "name": "Oued Zem",
        "region": "Béni Mellal-Khénifra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Al Massira",
          "Hay El Wahda",
          "Hay Al Qods",
          "Hay Al Horria"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Al Massira",
          "Hay El Wahda",
          "Hay Al Qods",
          "Hay Al Horria"
        ]
      }
    ]
  },
  {
    "name": "L'Oriental",
    "cities": [
      {
        "id": "saidia",
        "num": "10.1",
        "name": "Saïdia",
        "region": "L'Oriental",
        "tier": "touristic",
        "touristicNeighborhoods": [
          "Marina Saïdia",
          "Boulevard Corniche",
          "Plage Municipale"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Médina",
          "Hay Al Ahram"
        ],
        "neighborhoods": [
          "Marina Saïdia",
          "Boulevard Corniche",
          "Plage Municipale",
          "Médina",
          "Hay Al Ahram"
        ]
      },
      {
        "id": "oujda",
        "num": "10.2",
        "name": "Oujda",
        "region": "L'Oriental",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Médina",
          "Bd Mohammed V",
          "Sidi Yahya"
        ],
        "midNeighborhoods": [
          "Centre-Ville",
          "Hay Andalous"
        ],
        "lowNeighborhoods": [
          "Lazaret",
          "Al Qods",
          "Mir Ali",
          "Hay Salam",
          "Hay El Hikma",
          "Village Kolli",
          "Al Bassatine",
          "Hay Al Mouahidine"
        ],
        "neighborhoods": [
          "Médina",
          "Bd Mohammed V",
          "Sidi Yahya",
          "Centre-Ville",
          "Hay Andalous",
          "Lazaret",
          "Al Qods",
          "Mir Ali",
          "Hay Salam",
          "Hay El Hikma",
          "Village Kolli",
          "Al Bassatine",
          "Hay Al Mouahidine"
        ]
      },
      {
        "id": "figuig",
        "num": "10.3",
        "name": "Figuig",
        "region": "L'Oriental",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Ksar Loudaghir",
          "Ksar Zenaga",
          "Ksar Ouled Slimane",
          "Ksar Laabidat",
          "Ksar Hamam"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [],
        "neighborhoods": [
          "Ksar Loudaghir",
          "Ksar Zenaga",
          "Ksar Ouled Slimane",
          "Ksar Laabidat",
          "Ksar Hamam"
        ]
      },
      {
        "id": "nador",
        "num": "10.4",
        "name": "Nador",
        "region": "L'Oriental",
        "tier": "mid",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Corniche",
          "Boustane"
        ],
        "lowNeighborhoods": [
          "Al Matar",
          "Ouled Mimoun",
          "Lâari Cheikh",
          "Hay Al Wahda",
          "Taouima",
          "Chaabi",
          "Iheddadene"
        ],
        "neighborhoods": [
          "Corniche",
          "Boustane",
          "Al Matar",
          "Ouled Mimoun",
          "Lâari Cheikh",
          "Hay Al Wahda",
          "Taouima",
          "Chaabi",
          "Iheddadene"
        ]
      },
      {
        "id": "berkane",
        "num": "10.5",
        "name": "Berkane",
        "region": "L'Oriental",
        "tier": "mid",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Centre-Ville"
        ],
        "lowNeighborhoods": [
          "Bayo",
          "Sidi Ali Ben Yakhlef",
          "Tazaghine",
          "Hay Salam",
          "Bouhdila",
          "Hay Al Qods",
          "Al Majd"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Bayo",
          "Sidi Ali Ben Yakhlef",
          "Tazaghine",
          "Hay Salam",
          "Bouhdila",
          "Hay Al Qods",
          "Al Majd"
        ]
      },
      {
        "id": "taourirt",
        "num": "10.6",
        "name": "Taourirt",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Médina",
          "Hay Nahda",
          "Moulay Ali Cherif",
          "Hay 20 Août",
          "Hay Salam",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Médina",
          "Hay Nahda",
          "Moulay Ali Cherif",
          "Hay 20 Août",
          "Hay Salam",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "guercif",
        "num": "10.7",
        "name": "Guercif",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Oulad Hamoussa",
          "Hay Al Houria",
          "Hay Ghiata",
          "Chobane",
          "Sidi Kacem"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Oulad Hamoussa",
          "Hay Al Houria",
          "Hay Ghiata",
          "Chobane",
          "Sidi Kacem"
        ]
      },
      {
        "id": "beni_enzar",
        "num": "10.8",
        "name": "Beni Enzar",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Zone Portuaire",
          "Abdouna",
          "Ighzar",
          "Boulevard Hassan II",
          "Hay Al Baraka"
        ],
        "neighborhoods": [
          "Zone Portuaire",
          "Abdouna",
          "Ighzar",
          "Boulevard Hassan II",
          "Hay Al Baraka"
        ]
      },
      {
        "id": "al_aaroui",
        "num": "10.9",
        "name": "Al Aaroui",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Salam",
          "Hay Al Massira",
          "Hay Al Matar"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Salam",
          "Hay Al Massira",
          "Hay Al Matar"
        ]
      },
      {
        "id": "zaio",
        "num": "10.10",
        "name": "Zaio",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Hay Al Qods",
          "Hay Al Amal",
          "Hay Salam",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Hay Al Qods",
          "Hay Al Amal",
          "Hay Salam",
          "Hay Al Massira"
        ]
      },
      {
        "id": "jerada",
        "num": "10.11",
        "name": "Jerada",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Al Amal",
          "Hay Al Massira",
          "Hay OCP",
          "Al Bassatine",
          "Hay An-Nasr"
        ],
        "neighborhoods": [
          "Al Amal",
          "Hay Al Massira",
          "Hay OCP",
          "Al Bassatine",
          "Hay An-Nasr"
        ]
      },
      {
        "id": "driouch",
        "num": "10.12",
        "name": "Driouch",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Al Massira",
          "Hay Salam",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Al Massira",
          "Hay Salam",
          "Hay Al Amal"
        ]
      },
      {
        "id": "bouarfa",
        "num": "10.13",
        "name": "Bouarfa",
        "region": "L'Oriental",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre",
          "Hay Salam",
          "Hay Al Massira",
          "Hay Al Wahda",
          "Hay Al Qods"
        ],
        "neighborhoods": [
          "Centre",
          "Hay Salam",
          "Hay Al Massira",
          "Hay Al Wahda",
          "Hay Al Qods"
        ]
      }
    ]
  },
  {
    "name": "Guelmim-Oued Noun",
    "cities": [
      {
        "id": "sidi_ifni",
        "num": "11.1",
        "name": "Sidi Ifni",
        "region": "Guelmim-Oued Noun",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Centre-Ville",
          "Plage",
          "Barrio Colominas"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Colline des Oiseaux",
          "Hay Id Bella",
          "Hay Al Massira"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Plage",
          "Barrio Colominas",
          "Colline des Oiseaux",
          "Hay Id Bella",
          "Hay Al Massira"
        ]
      },
      {
        "id": "guelmim",
        "num": "11.2",
        "name": "Guelmim",
        "region": "Guelmim-Oued Noun",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Camel Market / Oum El Achar",
          "Taghadirt"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Al Qods",
          "Al Amal",
          "Bir Anzarane",
          "Hay Al Massira",
          "Tichla",
          "Hay Al Wahda",
          "Hay Al Mouahidine"
        ],
        "neighborhoods": [
          "Camel Market / Oum El Achar",
          "Taghadirt",
          "Al Qods",
          "Al Amal",
          "Bir Anzarane",
          "Hay Al Massira",
          "Tichla",
          "Hay Al Wahda",
          "Hay Al Mouahidine"
        ]
      },
      {
        "id": "el_ouatia",
        "num": "11.3",
        "name": "El Ouatia",
        "region": "Guelmim-Oued Noun",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Corniche",
          "Plage",
          "Port de Pêche"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Amal",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Corniche",
          "Plage",
          "Port de Pêche",
          "Centre-Ville",
          "Hay Al Amal",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "tan_tan",
        "num": "11.4",
        "name": "Tan-Tan",
        "region": "Guelmim-Oued Noun",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Oubaha",
          "Hay Ain Rahma",
          "Hay Al Qods",
          "Hay Bir Anzarane"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Oubaha",
          "Hay Ain Rahma",
          "Hay Al Qods",
          "Hay Bir Anzarane"
        ]
      },
      {
        "id": "bouizakarne",
        "num": "11.5",
        "name": "Bouizakarne",
        "region": "Guelmim-Oued Noun",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Amal",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Amal",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "assa",
        "num": "11.6",
        "name": "Assa",
        "region": "Guelmim-Oued Noun",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Ksar Assa Historique"
        ],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Al Massira",
          "Hay Al Qods"
        ],
        "neighborhoods": [
          "Ksar Assa Historique",
          "Centre-Ville",
          "Al Massira",
          "Hay Al Qods"
        ]
      }
    ]
  },
  {
    "name": "Laâyoune-Sakia El Hamra",
    "cities": [
      {
        "id": "tarfaya",
        "num": "12.1",
        "name": "Tarfaya",
        "region": "Laâyoune-Sakia El Hamra",
        "tier": "mid",
        "touristicNeighborhoods": [
          "Casamar",
          "Plage",
          "Port"
        ],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda"
        ],
        "neighborhoods": [
          "Casamar",
          "Plage",
          "Port",
          "Centre-Ville",
          "Hay Al Massira",
          "Hay Al Wahda"
        ]
      },
      {
        "id": "laayoune",
        "num": "12.2",
        "name": "Laâyoune",
        "region": "Laâyoune-Sakia El Hamra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Place du Méchouar"
        ],
        "lowNeighborhoods": [
          "Al Massira",
          "Hay Moulay Rachid",
          "Hay Al Qods",
          "Al Wahda",
          "Hay El Matar",
          "Dcheira",
          "25 Mars",
          "Colominas",
          "Hay Al Aouda",
          "Hay Al Amal",
          "Cité Al Wifaq",
          "Zone Industrielle"
        ],
        "neighborhoods": [
          "Place du Méchouar",
          "Al Massira",
          "Hay Moulay Rachid",
          "Hay Al Qods",
          "Al Wahda",
          "Hay El Matar",
          "Dcheira",
          "25 Mars",
          "Colominas",
          "Hay Al Aouda",
          "Hay Al Amal",
          "Cité Al Wifaq",
          "Zone Industrielle"
        ]
      },
      {
        "id": "boujdour",
        "num": "12.3",
        "name": "Boujdour",
        "region": "Laâyoune-Sakia El Hamra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [
          "Corniche du Phare"
        ],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Aouda",
          "Hay Al Wahda",
          "Hay Al Massira",
          "Hay Al Amane",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Corniche du Phare",
          "Centre-Ville",
          "Hay Al Aouda",
          "Hay Al Wahda",
          "Hay Al Massira",
          "Hay Al Amane",
          "Hay Al Amal"
        ]
      },
      {
        "id": "es_semara",
        "num": "12.4",
        "name": "Es-Semara",
        "region": "Laâyoune-Sakia El Hamra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Centre-Ville",
          "Hay Al Wahda",
          "Hay Al Massira",
          "Hay Al Gaâda",
          "Hay Tan-Tan",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Centre-Ville",
          "Hay Al Wahda",
          "Hay Al Massira",
          "Hay Al Gaâda",
          "Hay Tan-Tan",
          "Hay Al Amal"
        ]
      },
      {
        "id": "el_marsa",
        "num": "12.5",
        "name": "El Marsa",
        "region": "Laâyoune-Sakia El Hamra",
        "tier": "low",
        "touristicNeighborhoods": [],
        "midNeighborhoods": [],
        "lowNeighborhoods": [
          "Port de Laâyoune",
          "Zone Industrielle",
          "Corniche",
          "Hay Al Wahda",
          "Hay Al Amal"
        ],
        "neighborhoods": [
          "Port de Laâyoune",
          "Zone Industrielle",
          "Corniche",
          "Hay Al Wahda",
          "Hay Al Amal"
        ]
      }
    ]
  }
];

export const CITY_TO_LISTING_KEY_MAP: Record<string, string> = {
  "tanger": "tangier",
  "assilah": "asilah",
  "tetouan": "tetouan_martil",
  "martil": "tetouan_martil",
  "m_diq": "tetouan_martil",
  "fnideq": "tetouan_martil",
  "taroudant": "taroudant_tafraoute",
  "tafraout": "taroudant_tafraoute",
  "ifrane": "ifrane_azrou",
  "azrou": "ifrane_azrou",
  "marrakech": "marrakech",
  "essaouira": "essaouira",
  "safi": "safi",
  "chefchaouen": "chefchaouen",
  "al_hoceima": "al_hoceima",
  "fes": "fes",
  "meknes": "meknes",
  "agadir": "agadir",
  "casablanca": "casablanca",
  "el_jadida": "el_jadida",
  "rabat": "rabat",
  "ouarzazate": "ouarzazate",
  "dakhla": "dakhla",
  "saidia": "saidia",
  "tiznit": "agadir"
};

export const WEBSITE_CITY_TO_PROFILE_KEY: Record<string, string> = {
  marrakech: 'Marrakech',
  fes: 'Fès',
  agadir: 'Agadir',
  chefchaouen: 'Chefchaouen',
  essaouira: 'Essaouira',
  casablanca: 'Casablanca',
  tangier: 'Tanger',
  tanger: 'Tanger',
  rabat: 'Rabat',
  meknes: 'Meknès',
  meknès: 'Meknès',
  ouarzazate: 'Ouarzazate',
  dakhla: 'Dakhla',
  al_hoceima: 'Al Hoceïma',
  assilah: 'Assilah',
  asilah: 'Assilah',
  el_jadida: 'El Jadida',
  saidia: 'Saïdia',
  saïdia: 'Saïdia',
  tetouan: 'Tétouan',
  tetouan_martil: 'Tétouan',
  martil: 'Martil',
  taroudant: 'Taroudant',
  taroudant_tafraoute: 'Taroudant',
  tafraout: 'Tafraout',
  ifrane: 'Ifrane',
  ifrane_azrou: 'Ifrane',
  azrou: 'Azrou',
  zagora: 'Zagora',
  safi: 'Safi',
  tiznit: 'Tiznit'
};

/** Get the profile for a given website cityId */
export function getCityProfile(cityId: string): CityTouristicProfile | null {
  const norm = String(cityId || '').toLowerCase().trim();
  const profileKey = WEBSITE_CITY_TO_PROFILE_KEY[norm];
  if (profileKey && TOURISTIC_PROFILES[profileKey]) {
    return TOURISTIC_PROFILES[profileKey];
  }
  const byId = Object.values(TOURISTIC_PROFILES).find((p) => p.id === norm);
  return byId || null;
}

/** Check if a city is Touristic or Mid-Touristic */
export function isCityTouristicOrMid(cityId: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true;
  return profile.tier === 'touristic' || profile.tier === 'mid';
}

/** Get the tier for a given website cityId */
export function getCityTier(cityId: string): CityTier | null {
  const profile = getCityProfile(cityId);
  return profile ? profile.tier : null;
}

/** Check if a neighborhood is allowed (Touristic or Mid-Touristic, NEVER Low) */
export function isNeighborhoodAllowed(cityId: string, neighborhoodName: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true;
  const n = neighborhoodName.toLowerCase().trim();
  const isLow = profile.lowNeighborhoods.some((item) => item.toLowerCase().trim() === n);
  if (isLow) return false;
  return true;
}
