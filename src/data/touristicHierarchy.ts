/**
 * AUTO-GENERATED FROM touristic_organization.md
 * Master City & Neighborhood Tiering Registry
 */

export type CityTier = 'touristic' | 'mid' | 'low';
export type NeighborhoodTier = 'touristic' | 'mid' | 'low';

export interface CityTouristicProfile {
  name: string;
  tier: CityTier;
  touristicNeighborhoods: string[];
  midNeighborhoods: string[];
  lowNeighborhoods: string[];
}

export const TOURISTIC_PROFILES: Record<string, CityTouristicProfile> = {
  "Marrakech": {
    "id": "marrakech",
    "name": "Marrakech",
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
    ]
  },
  "Essaouira": {
    "id": "essaouira",
    "name": "Essaouira",
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
    ]
  },
  "Safi": {
    "id": "safi",
    "name": "Safi",
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
    ]
  },
  "Tahannaout": {
    "id": "tahannaout",
    "name": "Tahannaout",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Douar El Ghezoua"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Douar Bouzguen",
      "Hay Al Massira"
    ]
  },
  "Ben Guerir": {
    "id": "ben_guerir",
    "name": "Ben Guerir",
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
    ]
  },
  "El Kelâa des Sraghna": {
    "id": "el_kelaa_des_sraghna",
    "name": "El Kelâa des Sraghna",
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
    ]
  },
  "Youssoufia": {
    "id": "youssoufia",
    "name": "Youssoufia",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay OCP",
      "Hay Al Amal",
      "Hay Al Massira",
      "Hay Al Qods"
    ]
  },
  "Chichaoua": {
    "id": "chichaoua",
    "name": "Chichaoua",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda",
      "Hay Al Khair"
    ]
  },
  "Tanger": {
    "id": "tanger",
    "name": "Tanger",
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
    ]
  },
  "Chefchaouen": {
    "id": "chefchaouen",
    "name": "Chefchaouen",
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
    ]
  },
  "Tétouan": {
    "id": "tetouan",
    "name": "Tétouan",
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
    ]
  },
  "Assilah": {
    "id": "assilah",
    "name": "Assilah",
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
    ]
  },
  "M’diq": {
    "id": "m_diq",
    "name": "M’diq",
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
    ]
  },
  "Al Hoceïma": {
    "id": "al_hoceima",
    "name": "Al Hoceïma",
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
    ]
  },
  "Martil": {
    "id": "martil",
    "name": "Martil",
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
    ]
  },
  "Fnideq": {
    "id": "fnideq",
    "name": "Fnideq",
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
    ]
  },
  "Larache": {
    "id": "larache",
    "name": "Larache",
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
    ]
  },
  "Ouezzane": {
    "id": "ouezzane",
    "name": "Ouezzane",
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
    ]
  },
  "Ksar El Kébir": {
    "id": "ksar_el_kebir",
    "name": "Ksar El Kébir",
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
    ]
  },
  "Fès": {
    "id": "fes",
    "name": "Fès",
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
    ]
  },
  "Meknès": {
    "id": "meknes",
    "name": "Meknès",
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
    ]
  },
  "Ifrane": {
    "id": "ifrane",
    "name": "Ifrane",
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
    ]
  },
  "Azrou": {
    "id": "azrou",
    "name": "Azrou",
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
    ]
  },
  "Moulay Yacoub": {
    "id": "moulay_yacoub",
    "name": "Moulay Yacoub",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Centre Thermal",
      "Quartier Kasbah"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Amal"
    ]
  },
  "Sefrou": {
    "id": "sefrou",
    "name": "Sefrou",
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
    ]
  },
  "Taza": {
    "id": "taza",
    "name": "Taza",
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
    ]
  },
  "El Hajeb": {
    "id": "el_hajeb",
    "name": "El Hajeb",
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
    ]
  },
  "Taounate": {
    "id": "taounate",
    "name": "Taounate",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Wahda",
      "Ras El Karia",
      "Hay Al Massira",
      "Bouhouda Road"
    ]
  },
  "Missour": {
    "id": "missour",
    "name": "Missour",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay Salam",
      "Hay Al Wahda"
    ]
  },
  "Agadir": {
    "id": "agadir",
    "name": "Agadir",
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
    ]
  },
  "Taroudant": {
    "id": "taroudant",
    "name": "Taroudant",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Médina (Derb Jdid",
      "Kasbah)",
      "Bab Zorgan",
      "Bab Targhount"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Lasstah",
      "Ouled Bounouna",
      "Hay Al Mohammadi"
    ]
  },
  "Tafraout": {
    "id": "tafraout",
    "name": "Tafraout",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Centre-Ville",
      "Ammeln",
      "Aday"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Massira"
    ]
  },
  "Tiznit": {
    "id": "tiznit",
    "name": "Tiznit",
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
    ]
  },
  "Tata": {
    "id": "tata",
    "name": "Tata",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Agadir Lehna"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Inezgane": {
    "id": "inezgane",
    "name": "Inezgane",
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
    ]
  },
  "Aït Melloul": {
    "id": "ait_melloul",
    "name": "Aït Melloul",
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
    ]
  },
  "Dcheira El Jihadia": {
    "id": "dcheira_el_jihadia",
    "name": "Dcheira El Jihadia",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Lhouda",
      "Hay Al Boustane",
      "Hay Tarik",
      "Hay Al Massira"
    ]
  },
  "Oulad Teïma": {
    "id": "oulad_teima",
    "name": "Oulad Teïma",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Mohammadi",
      "Hay Chahid",
      "Hay Al Nahda"
    ]
  },
  "Biougra": {
    "id": "biougra",
    "name": "Biougra",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal",
      "Hay Al Massira",
      "Hay Al Wifaq"
    ]
  },
  "Casablanca": {
    "id": "casablanca",
    "name": "Casablanca",
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
    ]
  },
  "El Jadida": {
    "id": "el_jadida",
    "name": "El Jadida",
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
    ]
  },
  "Mohammédia": {
    "id": "mohammedia",
    "name": "Mohammédia",
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
    ]
  },
  "Bouznika": {
    "id": "bouznika",
    "name": "Bouznika",
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
    ]
  },
  "Dar Bouazza": {
    "id": "dar_bouazza",
    "name": "Dar Bouazza",
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
    ]
  },
  "Azemmour": {
    "id": "azemmour",
    "name": "Azemmour",
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
    ]
  },
  "Bouskoura": {
    "id": "bouskoura",
    "name": "Bouskoura",
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
    ]
  },
  "Settat": {
    "id": "settat",
    "name": "Settat",
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
    ]
  },
  "Berrechid": {
    "id": "berrechid",
    "name": "Berrechid",
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
    ]
  },
  "Benslimane": {
    "id": "benslimane",
    "name": "Benslimane",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Farah",
      "Hay Al Qods",
      "Hay Lalla Meryem",
      "Hay Al Massira"
    ]
  },
  "Sidi Bennour": {
    "id": "sidi_bennour",
    "name": "Sidi Bennour",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Qods",
      "Hay Al Amal",
      "Hay Al Wahda"
    ]
  },
  "Rabat": {
    "id": "rabat",
    "name": "Rabat",
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
    ]
  },
  "Salé": {
    "id": "sale",
    "name": "Salé",
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
    ]
  },
  "Témara": {
    "id": "temara",
    "name": "Témara",
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
    ]
  },
  "Skhirate": {
    "id": "skhirate",
    "name": "Skhirate",
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
    ]
  },
  "Kénitra": {
    "id": "kenitra",
    "name": "Kénitra",
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
    ]
  },
  "Sidi Slimane": {
    "id": "sidi_slimane",
    "name": "Sidi Slimane",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Pam",
      "Hay Al Massira",
      "Hay Oulad Ziane",
      "Hay Al Qods"
    ]
  },
  "Sidi Kacem": {
    "id": "sidi_kacem",
    "name": "Sidi Kacem",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Zirara",
      "Hay Al Khadra",
      "Sahrij",
      "Hay Al Massira"
    ]
  },
  "Khémisset": {
    "id": "khemisset",
    "name": "Khémisset",
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
    ]
  },
  "Tiflet": {
    "id": "tiflet",
    "name": "Tiflet",
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
    ]
  },
  "Ouarzazate": {
    "id": "ouarzazate",
    "name": "Ouarzazate",
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
    ]
  },
  "Tinghir": {
    "id": "tinghir",
    "name": "Tinghir",
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
    ]
  },
  "Zagora": {
    "id": "zagora",
    "name": "Zagora",
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
    ]
  },
  "Erfoud": {
    "id": "erfoud",
    "name": "Erfoud",
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
    ]
  },
  "Rissani": {
    "id": "rissani",
    "name": "Rissani",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Ksar Souk",
      "Moulay Ali Cherif"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Amal"
    ]
  },
  "Boumalne Dadès": {
    "id": "boumalne_dades",
    "name": "Boumalne Dadès",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Vallée de Dadès",
      "Aït Boulmane"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira"
    ]
  },
  "Kelaat M’Gouna": {
    "id": "kelaat_m_gouna",
    "name": "Kelaat M’Gouna",
    "tier": "touristic",
    "touristicNeighborhoods": [
      "Vallée des Roses"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Wahda"
    ]
  },
  "Midelt": {
    "id": "midelt",
    "name": "Midelt",
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
    ]
  },
  "Errachidia": {
    "id": "errachidia",
    "name": "Errachidia",
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
    ]
  },
  "Dakhla": {
    "id": "dakhla",
    "name": "Dakhla",
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
    ]
  },
  "Aousserd / Bir Gandouz": {
    "id": "aousserd_bir_gandouz",
    "name": "Aousserd / Bir Gandouz",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre Administratif",
      "Hay Al Massira",
      "Zone Postale",
      "Cité Frontalière El Guerguarat"
    ]
  },
  "Béni Mellal": {
    "id": "beni_mellal",
    "name": "Béni Mellal",
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
    ]
  },
  "Azilal": {
    "id": "azilal",
    "name": "Azilal",
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
    ]
  },
  "Demnate": {
    "id": "demnate",
    "name": "Demnate",
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
    ]
  },
  "Khénifra": {
    "id": "khenifra",
    "name": "Khénifra",
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
    ]
  },
  "Kasba Tadla": {
    "id": "kasba_tadla",
    "name": "Kasba Tadla",
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
    ]
  },
  "Khouribga": {
    "id": "khouribga",
    "name": "Khouribga",
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
    ]
  },
  "Fquih Ben Salah": {
    "id": "fquih_ben_salah",
    "name": "Fquih Ben Salah",
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
    ]
  },
  "Oued Zem": {
    "id": "oued_zem",
    "name": "Oued Zem",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay El Wahda",
      "Hay Al Qods",
      "Hay Al Horria"
    ]
  },
  "Saïdia": {
    "id": "saidia",
    "name": "Saïdia",
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
    ]
  },
  "Oujda": {
    "id": "oujda",
    "name": "Oujda",
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
    ]
  },
  "Figuig": {
    "id": "figuig",
    "name": "Figuig",
    "tier": "mid",
    "touristicNeighborhoods": [
      "Ksar Loudaghir",
      "Ksar Zenaga",
      "Ksar Ouled Slimane",
      "Ksar Laabidat",
      "Ksar Hamam"
    ],
    "midNeighborhoods": [],
    "lowNeighborhoods": []
  },
  "Nador": {
    "id": "nador",
    "name": "Nador",
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
    ]
  },
  "Berkane": {
    "id": "berkane",
    "name": "Berkane",
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
    ]
  },
  "Taourirt": {
    "id": "taourirt",
    "name": "Taourirt",
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
    ]
  },
  "Guercif": {
    "id": "guercif",
    "name": "Guercif",
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
    ]
  },
  "Beni Enzar": {
    "id": "beni_enzar",
    "name": "Beni Enzar",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Zone Portuaire",
      "Abdouna",
      "Ighzar",
      "Boulevard Hassan II",
      "Hay Al Baraka"
    ]
  },
  "Al Aaroui": {
    "id": "al_aaroui",
    "name": "Al Aaroui",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Salam",
      "Hay Al Massira",
      "Hay Al Matar"
    ]
  },
  "Zaio": {
    "id": "zaio",
    "name": "Zaio",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Hay Al Qods",
      "Hay Al Amal",
      "Hay Salam",
      "Hay Al Massira"
    ]
  },
  "Jerada": {
    "id": "jerada",
    "name": "Jerada",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Al Amal",
      "Hay Al Massira",
      "Hay OCP",
      "Al Bassatine",
      "Hay An-Nasr"
    ]
  },
  "Driouch": {
    "id": "driouch",
    "name": "Driouch",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Al Massira",
      "Hay Salam",
      "Hay Al Amal"
    ]
  },
  "Bouarfa": {
    "id": "bouarfa",
    "name": "Bouarfa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre",
      "Hay Salam",
      "Hay Al Massira",
      "Hay Al Wahda",
      "Hay Al Qods"
    ]
  },
  "Sidi Ifni": {
    "id": "sidi_ifni",
    "name": "Sidi Ifni",
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
    ]
  },
  "Guelmim": {
    "id": "guelmim",
    "name": "Guelmim",
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
    ]
  },
  "El Ouatia": {
    "id": "el_ouatia",
    "name": "El Ouatia",
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
    ]
  },
  "Tan-Tan": {
    "id": "tan_tan",
    "name": "Tan-Tan",
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
    ]
  },
  "Bouizakarne": {
    "id": "bouizakarne",
    "name": "Bouizakarne",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Hay Al Massira",
      "Hay Al Amal",
      "Hay Al Wahda"
    ]
  },
  "Assa": {
    "id": "assa",
    "name": "Assa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [
      "Ksar Assa Historique"
    ],
    "lowNeighborhoods": [
      "Centre-Ville",
      "Al Massira",
      "Hay Al Qods"
    ]
  },
  "Tarfaya": {
    "id": "tarfaya",
    "name": "Tarfaya",
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
    ]
  },
  "Laâyoune": {
    "id": "laayoune",
    "name": "Laâyoune",
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
    ]
  },
  "Boujdour": {
    "id": "boujdour",
    "name": "Boujdour",
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
    ]
  },
  "Es-Semara": {
    "id": "es_semara",
    "name": "Es-Semara",
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
    ]
  },
  "El Marsa": {
    "id": "el_marsa",
    "name": "El Marsa",
    "tier": "low",
    "touristicNeighborhoods": [],
    "midNeighborhoods": [],
    "lowNeighborhoods": [
      "Port de Laâyoune",
      "Zone Industrielle",
      "Corniche",
      "Hay Al Wahda",
      "Hay Al Amal"
    ]
  }
};

export const WEBSITE_CITY_TO_PROFILE_KEY: Record<string, string> = {
  marrakech: 'Marrakech',
  fes: 'Fès',
  agadir: 'Agadir',
  chefchaouen: 'Chefchaouen',
  essaouira: 'Essaouira',
  casablanca: 'Casablanca',
  tangier: 'Tanger',
  rabat: 'Rabat',
  meknes: 'Meknès',
  ouarzazate: 'Ouarzazate',
  taghazout: 'Taghazout',
  dakhla: 'Dakhla',
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
  oualidia: 'Oualidia',
  merzouga: 'Merzouga',
  mhamid: 'M’hamid',
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
  return null;
}

/** Check if a city is Touristic or Mid-Touristic (exclude Low) */
export function isCityTouristicOrMid(cityId: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true; // keep if undefined to prevent breaking
  return profile.tier === 'touristic' || profile.tier === 'mid';
}

/** Check if a neighborhood is allowed (Touristic or Mid-Touristic, NEVER Low) */
export function isNeighborhoodAllowed(cityId: string, neighborhoodName: string): boolean {
  const profile = getCityProfile(cityId);
  if (!profile) return true;
  const n = neighborhoodName.toLowerCase().trim();
  const isLow = profile.lowNeighborhoods.some(item => item.toLowerCase().trim() === n);
  if (isLow) return false;
  return true;
}
