import type { AppLanguage } from '../../utils/localeRouting';

export type BrowseSegment = 'food' | 'sleep' | 'things-to-do' | 'shopping';

export const CATEGORY_LABELS_I18N: Record<AppLanguage, Record<BrowseSegment, string>> = {
  en: {
    food: 'Food & Restaurants',
    sleep: 'Stays',
    'things-to-do': 'Things To Do',
    shopping: 'Shopping',
  },
  fr: {
    food: 'Restaurants & Gastronomie',
    sleep: 'Hébergements & Riads',
    'things-to-do': 'Choses à Faire',
    shopping: 'Shopping & Artisanat',
  },
  es: {
    food: 'Restaurantes y Gastronomía',
    sleep: 'Alojamientos y Riads',
    'things-to-do': 'Qué Hacer',
    shopping: 'Compras y Artesanía',
  },
  de: {
    food: 'Essen & Restaurants',
    sleep: 'Unterkünfte & Riads',
    'things-to-do': 'Aktivitäten & Sehenswürdigkeiten',
    shopping: 'Shopping & Handwerk',
  },
  ar: {
    food: 'المطاعم والمأكولات',
    sleep: 'الإقامة والرياضات',
    'things-to-do': 'أنشطة وتجارب',
    shopping: 'التسوق والحرف التقليدية',
  },
};

export const HOME_SEO_I18N: Record<
  AppLanguage,
  { title: string; description: string; h1: string; heroSubtitle: string }
> = {
  en: {
    title: 'Moroccan Mate | Morocco Food, Stays & Things to Do',
    description:
      'Pick your city in Morocco, take a quick quiz, and get curated local picks for restaurants, riads, activities, and authentic shopping.',
    h1: 'Moroccan Mate — Eat, Sleep, Things & Shopping',
    heroSubtitle:
      'Discover personalized, authentic recommendations across Morocco. Pick your destination city, answer a short quiz, and explore handpicked places to eat, stays, activities, and local shops.',
  },
  fr: {
    title: 'Moroccan Mate | Manger, Dormir & Activités au Maroc',
    description:
      'Choisissez votre ville au Maroc, répondez au quiz et obtenez des recommandations locales vérifiées : restaurants, riads, activités et shopping.',
    h1: 'Moroccan Mate — Manger, Dormir, Activités & Shopping au Maroc',
    heroSubtitle:
      'Découvrez des recommandations locales authentiques partout au Maroc. Choisissez votre ville, répondez à un court quiz et explorez les meilleurs restaurants, riads, activités et boutiques.',
  },
  es: {
    title: 'Moroccan Mate | Comer, Dormir y Qué Hacer en Marruecos',
    description:
      'Elige tu ciudad en Marruecos, responde un breve test y descubre recomendaciones locales verificadas de restaurantes, riads, actividades y compras.',
    h1: 'Moroccan Mate — Comer, Dormir, Qué Hacer y Comprar en Marruecos',
    heroSubtitle:
      'Descubre recomendaciones locales auténticas en todo Marruecos. Elige tu destino, responde un breve test y explora los mejores restaurantes, riads, actividades y tiendas.',
  },
  de: {
    title: 'Moroccan Mate | Essen, Hotels & Tipps für Marokko',
    description:
      'Wähle deine Stadt in Marokko, mach das kurze Quiz und erhalte geprüfte Geheimtipps für Restaurants, Riads, Aktivitäten und Shopping.',
    h1: 'Moroccan Mate — Essen, Übernachten, Aktivitäten & Shopping in Marokko',
    heroSubtitle:
      'Entdecke authentische Geheimtipps in ganz Marokko. Wähle dein Reiseziel, beantworte ein kurzes Quiz und finde handverlesene Restaurants, Riads, Aktivitäten und Läden.',
  },
  ar: {
    title: 'Moroccan Mate | دليلك للمطاعم والإقامة والأنشطة بالمغرب',
    description:
      'اختر مدينتك في المغرب وأجب عن اختبار قصير للحصول على توصيات محلية موثوقة لأفضل المطاعم والرياضات والأنشطة والتسوق.',
    h1: 'Moroccan Mate — المطاعم والإقامة والأنشطة والتسوق في المغرب',
    heroSubtitle:
      'اكتشف أفضل التوصيات المحلية الأصيلة في مدن المغرب. اختر وجهتك وأجب عن اختبار قصير لاستكشاف المطاعم والرياضات والأنشطة والمتاجر المختارة بعناية.',
  },
};

export const FINDER_SEO_I18N: Record<AppLanguage, { title: string; description: string; h1: string }> = {
  en: {
    title: 'Morocco Finder — Personalized Local Travel Guide',
    description:
      'Choose any city in Morocco and category, answer a short vibe quiz, and unlock curated local picks for food, riads, activities, and shops.',
    h1: 'Morocco Finder',
  },
  fr: {
    title: 'Explorateur Maroc — Recommandations Locales sur Mesure',
    description:
      'Choisissez une ville et une catégorie au Maroc, répondez au quiz et découvrez nos meilleures adresses locales : restaurants, riads et activités.',
    h1: 'Explorateur Maroc',
  },
  es: {
    title: 'Buscador Marruecos — Guía Local Personalizada',
    description:
      'Elige ciudad y categoría en Marruecos, completa el test rápido y descubre los mejores restaurantes, riads, actividades y tiendas locales.',
    h1: 'Buscador de Marruecos',
  },
  de: {
    title: 'Marokko-Finder — Persönliche Geheimtipps vor Ort',
    description:
      'Wähle Stadt und Kategorie in Marokko, mach das kurze Quiz und entdecke handverlesene Restaurants, Riads, Aktivitäten und Läden.',
    h1: 'Marokko-Finder',
  },
  ar: {
    title: 'مستكشف المغرب — توصيات محلية مخصصة لرحلتك',
    description:
      'اختر المدينة والفئة في المغرب وأجب عن أسئلة قصيرة لاكتشاف أفضل المطاعم والرياضات والأنشطة ومتاجر الحرف المحلية.',
    h1: 'مستكشف المغرب',
  },
};

export function getBrowseSeoI18n(cityLabel: string, segment: BrowseSegment, lang: AppLanguage) {
  const catLabel = CATEGORY_LABELS_I18N[lang][segment];
  switch (lang) {
    case 'fr':
      return {
        title: `${catLabel} à ${cityLabel}, Maroc`,
        description: `Découvrez les meilleurs lieux (${catLabel.toLowerCase()}) à ${cityLabel}, Maroc : adresses vérifiées, tarifs en MAD, avis et conseils d'initiés.`,
        h1: `${catLabel} à ${cityLabel}`,
        curatedHeading: `Recommandations sélectionnées à ${cityLabel}`,
      };
    case 'es':
      return {
        title: `${catLabel} en ${cityLabel}, Marruecos`,
        description: `Descubre los mejores sitios de ${catLabel.toLowerCase()} en ${cityLabel}, Marruecos: reseñas verificadas, precios en MAD y consejos locales.`,
        h1: `${catLabel} en ${cityLabel}`,
        curatedHeading: `Recomendaciones seleccionadas en ${cityLabel}`,
      };
    case 'de':
      return {
        title: `${catLabel} in ${cityLabel}, Marokko`,
        description: `Entdecke die besten Tipps für ${catLabel} in ${cityLabel}, Marokko: geprüfte Bewertungen, Preise in MAD und echte Insidertipps.`,
        h1: `${catLabel} in ${cityLabel}`,
        curatedHeading: `Handverlesene Empfehlungen in ${cityLabel}`,
      };
    case 'ar':
      return {
        title: `${catLabel} في ${cityLabel}، المغرب`,
        description: `اكتشف أفضل خيارات ${catLabel} في ${cityLabel} بالمغرب: أماكن موثوقة مع الأسعار بالدرهم، التقييمات ونصائح السكان المحليين.`,
        h1: `${catLabel} في ${cityLabel}`,
        curatedHeading: `توصيات مختارة في ${cityLabel}`,
      };
    default:
      return {
        title: `${catLabel} in ${cityLabel}, Morocco`,
        description: `Explore curated, verified ${catLabel.toLowerCase()} in ${cityLabel}, Morocco—compare real MAD prices, local ratings, photos, and neighborhood tips.`,
        h1: `${catLabel} in ${cityLabel}`,
        curatedHeading: `Curated Recommendations in ${cityLabel}`,
      };
  }
}

interface IntentTranslation {
  label: string;
  seoTitle: (city: string) => string;
  seoDescription: (city: string) => string;
  headerTitle: (city: string) => string;
}

const INTENT_TRANSLATIONS: Record<Exclude<AppLanguage, 'en'>, Record<string, IntentTranslation>> = {
  fr: {
    'on-the-beach': {
      label: 'Sur la plage',
      seoTitle: (c) => `Meilleurs hôtels sur la plage à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Découvrez notre sélection d'hôtels en bord de mer et resorts plage privée à ${c}. Avis vérifiés et accès direct plage.`,
      headerTitle: (c) => `Hôtels sur la plage à ${c}`,
    },
    'all-inclusive': {
      label: 'Tout compris',
      seoTitle: (c) => `Meilleurs hôtels tout compris à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Explorez les meilleurs resorts all-inclusive à ${c}. Repas, boissons, activités familiales et détente.`,
      headerTitle: (c) => `Hôtels tout compris à ${c}`,
    },
    waterslides: {
      label: 'Avec toboggans',
      seoTitle: (c) => `Hôtels avec toboggans et parc aquatique à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Resorts familiaux avec toboggans et aquaparc à ${c}. Zones enfants, piscines chauffées et avis vérifiés.`,
      headerTitle: (c) => `Hôtels avec toboggans à ${c}`,
    },
    'heated-pools': {
      label: 'Piscine chauffée',
      seoTitle: (c) => `Hôtels avec piscine chauffée à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Profitez d'une baignade toute l'année dans les meilleurs hôtels avec piscine chauffée à ${c}.`,
      headerTitle: (c) => `Hôtels avec piscine chauffée à ${c}`,
    },
    '5-star': {
      label: 'Luxe 5 étoiles',
      seoTitle: (c) => `Meilleurs hôtels de luxe 5 étoiles à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Les plus beaux hôtels 5 étoiles et riads de prestige à ${c}. Spas, gastronomie et hospitalité marocaine.`,
      headerTitle: (c) => `Hôtels 5 étoiles à ${c}`,
    },
    'private-beach': {
      label: 'Plage privée',
      seoTitle: (c) => `Hôtels avec plage privée à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Détendez-vous sur le sable réservé des meilleurs hôtels avec plage privée à ${c}.`,
      headerTitle: (c) => `Hôtels avec plage privée à ${c}`,
    },
    'kids-club': {
      label: 'Club enfants',
      seoTitle: (c) => `Hôtels famille avec club enfants à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Hôtels familiaux à ${c} avec club enfants encadré, suites familiales et activités dédiées.`,
      headerTitle: (c) => `Hôtels avec club enfants à ${c}`,
    },
    'swim-up-rooms': {
      label: 'Chambres Swim-Up',
      seoTitle: (c) => `Hôtels avec chambres Swim-Up et accès piscine à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Accédez à la piscine directement depuis votre terrasse dans les meilleurs hôtels à ${c}.`,
      headerTitle: (c) => `Hôtels avec chambres Swim-Up à ${c}`,
    },
    nightclubs: {
      label: 'Avec discothèque',
      seoTitle: (c) => `Hôtels avec discothèque et vie nocturne à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Hôtels animés à ${c} avec club sur place, DJ lounge et soirées festives.`,
      headerTitle: (c) => `Hôtels avec discothèque à ${c}`,
    },
    'indoor-pool': {
      label: 'Piscine intérieure',
      seoTitle: (c) => `Hôtels avec piscine intérieure à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Détendez-vous dans les meilleurs hôtels avec piscine intérieure et thalasso à ${c}.`,
      headerTitle: (c) => `Hôtels avec piscine intérieure à ${c}`,
    },
    'private-pool': {
      label: 'Piscine privée',
      seoTitle: (c) => `Hôtels et riads avec piscine privée à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Vivez un séjour intime à ${c} dans des villas et riads avec piscine privative.`,
      headerTitle: (c) => `Hôtels et riads avec piscine privée à ${c}`,
    },
    'golf-course': {
      label: 'Parcours de golf',
      seoTitle: (c) => `Meilleurs hôtels et resorts de golf à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Jouez sur les plus beaux parcours avec les resorts de golf sélectionnés à ${c}.`,
      headerTitle: (c) => `Hôtels avec golf à ${c}`,
    },
    spa: {
      label: 'Spa de luxe',
      seoTitle: (c) => `Meilleurs hôtels spa et hammam à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Ressourcez-vous dans les meilleurs hôtels spa et hammam traditionnel à ${c}.`,
      headerTitle: (c) => `Hôtels avec spa de luxe à ${c}`,
    },
    'airport-shuttle': {
      label: 'Navette aéroport',
      seoTitle: (c) => `Hôtels avec navette aéroport à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Hôtels pratiques à ${c} proposant un transfert ou une navette directe vers l'aéroport.`,
      headerTitle: (c) => `Hôtels avec navette aéroport à ${c}`,
    },
    'ocean-view': {
      label: 'Vue océan',
      seoTitle: (c) => `Hôtels avec vue sur l'océan à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Réveillez-vous face à l'Atlantique dans les meilleurs hôtels vue mer à ${c}.`,
      headerTitle: (c) => `Hôtels avec vue océan à ${c}`,
    },
    'rooftop-bar': {
      label: 'Bar rooftop',
      seoTitle: (c) => `Hôtels avec bar rooftop à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Savourez un verre en hauteur dans les meilleurs hôtels avec bar rooftop à ${c}.`,
      headerTitle: (c) => `Hôtels avec bar rooftop à ${c}`,
    },
    pool: {
      label: 'Avec piscine',
      seoTitle: (c) => `Hôtels avec piscine à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Découvrez les meilleurs hôtels et riads avec piscine à ${c}.`,
      headerTitle: (c) => `Hôtels avec piscine à ${c}`,
    },
    'rooftop-terrace': {
      label: 'Terrasse panoramique',
      seoTitle: (c) => `Hôtels et riads avec terrasse rooftop à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Profitez d'une vue panoramique sur ${c} depuis les plus belles terrasses en rooftop.`,
      headerTitle: (c) => `Hôtels et riads avec rooftop à ${c}`,
    },
    'in-medina': {
      label: 'Dans la médina',
      seoTitle: (c) => `Meilleurs riads et hôtels dans la médina de ${c} | Moroccan Mate`,
      seoDescription: (c) => `Séjournez au cœur de la médina historique de ${c} dans des riads authentiques sélectionnés.`,
      headerTitle: (c) => `Hôtels et riads dans la médina de ${c}`,
    },
    'mountain-view': {
      label: 'Vue montagne',
      seoTitle: (c) => `Hôtels avec vue sur les montagnes à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Admirez les panoramas du Rif ou de l'Atlas depuis les meilleurs hébergements à ${c}.`,
      headerTitle: (c) => `Hôtels avec vue montagne à ${c}`,
    },
    'surf-hotels': {
      label: 'Hôtels & camps surf',
      seoTitle: (c) => `Meilleurs hôtels et surf camps à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Surfez les meilleures vagues de l'Atlantique avec notre sélection de surf camps et hôtels à ${c}.`,
      headerTitle: (c) => `Hôtels et camps de surf à ${c}`,
    },
    'lagoon-view': {
      label: 'Vue lagune',
      seoTitle: (c) => `Hôtels et écolodges vue lagune à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Séjournez face aux eaux turquoise de la lagune à ${c} en bungalows et écolodges.`,
      headerTitle: (c) => `Hôtels vue lagune à ${c}`,
    },
    'kitesurf-hotels': {
      label: 'Hôtels & camps kitesurf',
      seoTitle: (c) => `Meilleurs hôtels et camps de kitesurf à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Spots de vent et hébergements kitesurf avec école certifiée et accès lagune à ${c}.`,
      headerTitle: (c) => `Hôtels et camps de kitesurf à ${c}`,
    },
    'desert-camps': {
      label: 'Camps de luxe désert',
      seoTitle: (c) => `Camps de luxe et glamping dans le désert à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Dormez sous les étoiles du Sahara à ${c} dans des camps de luxe avec tentes privées.`,
      headerTitle: (c) => `Camps de luxe dans le désert à ${c}`,
    },
    'dune-view': {
      label: 'Vue sur les dunes',
      seoTitle: (c) => `Hôtels et camps face aux dunes à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Admirez les dunes dorées du Sahara au réveil à ${c} depuis votre kasbah ou bivouac.`,
      headerTitle: (c) => `Hébergements vue dunes à ${c}`,
    },
    'private-bathroom': {
      label: 'Salle de bain privée',
      seoTitle: (c) => `Camps dans le désert avec salle de bain privée à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Profitez du désert de ${c} avec douche chaude et sanitaires privatifs dans votre tente.`,
      headerTitle: (c) => `Camps désert avec salle de bain privée à ${c}`,
    },
    'camel-ride': {
      label: 'Balade à dromadaire',
      seoTitle: (c) => `Camps désert avec balade à dromadaire à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Vivez une excursion à dromadaire au coucher du soleil directement depuis votre camp à ${c}.`,
      headerTitle: (c) => `Camps et hôtels avec dromadaire à ${c}`,
    },
    'air-conditioning': {
      label: 'Climatisation',
      seoTitle: (c) => `Hôtels et camps avec climatisation à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Restez au frais à ${c} grâce aux tentes de luxe et chambres climatisées.`,
      headerTitle: (c) => `Hébergements climatisés à ${c}`,
    },
    'halal-fine-dining': {
      label: 'Gastronomie Halal',
      seoTitle: (c) => `Meilleurs restaurants gastronomiques halal à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Découvrez les tables gastronomiques et dîners raffinés 100 % halal à ${c} avec menus vérifiés.`,
      headerTitle: (c) => `Restaurants gastronomiques halal à ${c}`,
    },
    steakhouses: {
      label: 'Steakhouses & Grill',
      seoTitle: (c) => `Meilleurs steakhouses et grillades à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Savourez entrecôtes, wagyu et grillades au feu de bois dans les meilleurs steakhouses à ${c}.`,
      headerTitle: (c) => `Steakhouses & Grillades à ${c}`,
    },
    'dinner-shows-romantic': {
      label: 'Dîner spectacle & Romantique',
      seoTitle: (c) => `Dîners romantiques et restaurants spectacle à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Soirées romantiques, musique live et dîners-spectacles d'exception à ${c}.`,
      headerTitle: (c) => `Dîners spectacle & Tables romantiques à ${c}`,
    },
    'breakfast-brunch': {
      label: 'Petit-déjeuner & Brunch',
      seoTitle: (c) => `Meilleurs petits-déjeuners et brunchs à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Commencez la journée avec les meilleurs brunchs, cafés et petits-déjeuners marocains à ${c}.`,
      headerTitle: (c) => `Petits-déjeuners & Brunchs à ${c}`,
    },
    seafood: {
      label: 'Poissons & Fruits de mer',
      seoTitle: (c) => `Meilleurs restaurants de poissons et fruits de mer à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Poissons grillés du jour, plateaux de fruits de mer et tables côtières vérifiées à ${c}.`,
      headerTitle: (c) => `Restaurants de poissons & fruits de mer à ${c}`,
    },
    'rooftop-dining': {
      label: 'Restaurants Rooftop',
      seoTitle: (c) => `Meilleurs restaurants rooftop avec vue à ${c} | Moroccan Mate`,
      seoDescription: (c) => `Dînez en terrasse panoramique ou rooftop au coucher du soleil à ${c}.`,
      headerTitle: (c) => `Restaurants rooftop à ${c}`,
    },
  },
  es: {
    'on-the-beach': {
      label: 'En la playa',
      seoTitle: (c) => `Mejores hoteles en la playa en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Descubre hoteles frente al mar y resorts con acceso directo a la playa en ${c}. Reseñas verificadas.`,
      headerTitle: (c) => `Hoteles en la playa en ${c}`,
    },
    'all-inclusive': {
      label: 'Todo incluido',
      seoTitle: (c) => `Mejores resorts todo incluido en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Encuentra los mejores hoteles todo incluido en ${c} con gastronomía, actividades familiares y relax.`,
      headerTitle: (c) => `Hoteles todo incluido en ${c}`,
    },
    waterslides: {
      label: 'Con toboganes',
      seoTitle: (c) => `Hoteles con toboganes y parque acuático en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Resorts familiares con toboganes y piscinas climatizadas en ${c}. Diversión verificada para niños.`,
      headerTitle: (c) => `Hoteles con toboganes en ${c}`,
    },
    'heated-pools': {
      label: 'Piscina climatizada',
      seoTitle: (c) => `Hoteles con piscina climatizada en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Nada todo el año en los mejores hoteles con piscina climatizada en ${c}.`,
      headerTitle: (c) => `Hoteles con piscina climatizada en ${c}`,
    },
    '5-star': {
      label: 'Lujo 5 estrellas',
      seoTitle: (c) => `Mejores hoteles de lujo 5 estrellas en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Los mejores hoteles 5 estrellas y riads de lujo en ${c}. Spas, alta cocina y hospitalidad marroquí.`,
      headerTitle: (c) => `Hoteles 5 estrellas en ${c}`,
    },
    'private-beach': {
      label: 'Playa privada',
      seoTitle: (c) => `Hoteles con playa privada en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Relájate en la arena tranquila de hoteles exclusivos con playa privada en ${c}.`,
      headerTitle: (c) => `Hoteles con playa privada en ${c}`,
    },
    'kids-club': {
      label: 'Club infantil',
      seoTitle: (c) => `Hoteles familiares con club infantil en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Resorts ideales para familias en ${c} con club infantil supervisado y amplias suites.`,
      headerTitle: (c) => `Hoteles con club infantil en ${c}`,
    },
    'swim-up-rooms': {
      label: 'Habitaciones Swim-Up',
      seoTitle: (c) => `Hoteles con habitaciones Swim-Up en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Sal directo desde tu terraza a la piscina en los mejores hoteles de ${c}.`,
      headerTitle: (c) => `Hoteles con habitaciones Swim-Up en ${c}`,
    },
    nightclubs: {
      label: 'Con discoteca',
      seoTitle: (c) => `Hoteles con discoteca y vida nocturna en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Hoteles animados en ${c} con club nocturno, DJ lounge y entretenimiento nocturno.`,
      headerTitle: (c) => `Hoteles con discoteca en ${c}`,
    },
    'indoor-pool': {
      label: 'Piscina interior',
      seoTitle: (c) => `Hoteles con piscina interior en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Relájate en hoteles con piscina interior y talasoterapia en ${c}.`,
      headerTitle: (c) => `Hoteles con piscina interior en ${c}`,
    },
    'private-pool': {
      label: 'Piscina privada',
      seoTitle: (c) => `Hoteles y riads con piscina privada en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Disfruta de privacidad total en ${c} con villas y riads con piscina privada.`,
      headerTitle: (c) => `Hoteles y riads con piscina privada en ${c}`,
    },
    'golf-course': {
      label: 'Campo de golf',
      seoTitle: (c) => `Mejores resorts y hoteles de golf en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Juega en campos de campeonato en los mejores hoteles de golf de ${c}.`,
      headerTitle: (c) => `Hoteles con campo de golf en ${c}`,
    },
    spa: {
      label: 'Spa de lujo',
      seoTitle: (c) => `Mejores hoteles con spa y hammam en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Recarga energía en los mejores hoteles con spa y hammam tradicional en ${c}.`,
      headerTitle: (c) => `Hoteles con spa de lujo en ${c}`,
    },
    'airport-shuttle': {
      label: 'Traslado al aeropuerto',
      seoTitle: (c) => `Hoteles con traslado al aeropuerto en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Hoteles cómodos en ${c} con servicio de shuttle y traslado directo al aeropuerto.`,
      headerTitle: (c) => `Hoteles con traslado al aeropuerto en ${c}`,
    },
    'ocean-view': {
      label: 'Vista al mar',
      seoTitle: (c) => `Hoteles con vista al mar en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Despierta frente al Atlántico en los mejores hoteles con vista al mar en ${c}.`,
      headerTitle: (c) => `Hoteles con vista al mar en ${c}`,
    },
    'rooftop-bar': {
      label: 'Bar en azotea',
      seoTitle: (c) => `Hoteles con bar en la azotea en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Disfruta cócteles al atardecer en los mejores hoteles con rooftop bar en ${c}.`,
      headerTitle: (c) => `Hoteles con bar en azotea en ${c}`,
    },
    pool: {
      label: 'Con piscina',
      seoTitle: (c) => `Hoteles con piscina en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Explora los hoteles y riads mejor valorados con piscina en ${c}.`,
      headerTitle: (c) => `Hoteles con piscina en ${c}`,
    },
    'rooftop-terrace': {
      label: 'Terraza panorámica',
      seoTitle: (c) => `Hoteles y riads con terraza en la azotea en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Contempla vistas panorámicas de ${c} desde las mejores terrazas en la azotea.`,
      headerTitle: (c) => `Hoteles y riads con terraza en ${c}`,
    },
    'in-medina': {
      label: 'En la medina',
      seoTitle: (c) => `Mejores riads y hoteles en la medina de ${c} | Moroccan Mate`,
      seoDescription: (c) => `Sumérgete en la cultura marroquí alojándote dentro de la medina histórica de ${c}.`,
      headerTitle: (c) => `Hoteles y riads en la medina de ${c}`,
    },
    'mountain-view': {
      label: 'Vista a la montaña',
      seoTitle: (c) => `Hoteles con vista a la montaña en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Despierta frente al Rif o el Atlas en los mejores alojamientos de ${c}.`,
      headerTitle: (c) => `Hoteles con vista a la montaña en ${c}`,
    },
    'surf-hotels': {
      label: 'Hoteles y camps de surf',
      seoTitle: (c) => `Mejores hoteles y surf camps en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Atrapa olas del Atlántico en los mejores hoteles de surf y surf camps de ${c}.`,
      headerTitle: (c) => `Hoteles y camps de surf en ${c}`,
    },
    'lagoon-view': {
      label: 'Vista a la laguna',
      seoTitle: (c) => `Hoteles y ecolodges con vista a la laguna en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Despierta frente a aguas turquesas en bungalows y ecolodges de ${c}.`,
      headerTitle: (c) => `Hoteles con vista a la laguna en ${c}`,
    },
    'kitesurf-hotels': {
      label: 'Hoteles de kitesurf',
      seoTitle: (c) => `Mejores hoteles y camps de kitesurf en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Resorts de kitesurf, escuelas certificadas y acceso a la laguna en ${c}.`,
      headerTitle: (c) => `Hoteles y camps de kitesurf en ${c}`,
    },
    'desert-camps': {
      label: 'Campamentos en el desierto',
      seoTitle: (c) => `Campamentos de lujo en el desierto en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Duerme bajo las estrellas del Sáhara en ${c} en campamentos de lujo con jaimas privadas.`,
      headerTitle: (c) => `Campamentos de lujo en el desierto en ${c}`,
    },
    'dune-view': {
      label: 'Vista a las dunas',
      seoTitle: (c) => `Hoteles y campamentos con vista a las dunas en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Contempla las dunas doradas del Sáhara al amanecer desde tu kasbah o campamento en ${c}.`,
      headerTitle: (c) => `Alojamientos con vista a las dunas en ${c}`,
    },
    'private-bathroom': {
      label: 'Baño privado',
      seoTitle: (c) => `Campamentos en el desierto con baño privado en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Disfruta del glamping en el Sáhara en ${c} con ducha de agua caliente y baño privado.`,
      headerTitle: (c) => `Campamentos en el desierto con baño privado en ${c}`,
    },
    'camel-ride': {
      label: 'Paseo en camello',
      seoTitle: (c) => `Campamentos con paseo en camello en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Vive un paseo en camello al atardecer por las dunas saliendo desde tu campamento en ${c}.`,
      headerTitle: (c) => `Campamentos y hoteles con paseo en camello en ${c}`,
    },
    'air-conditioning': {
      label: 'Aire acondicionado',
      seoTitle: (c) => `Hoteles y campamentos con aire acondicionado en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Mantente fresco en ${c} en jaimas y habitaciones climatizadas.`,
      headerTitle: (c) => `Hoteles y campamentos con aire acondicionado en ${c}`,
    },
    'halal-fine-dining': {
      label: 'Alta cocina Halal',
      seoTitle: (c) => `Mejores restaurantes gourmet halal en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Explora restaurantes de alta cocina 100 % halal y mesas elegantes en ${c}.`,
      headerTitle: (c) => `Restaurantes de alta cocina halal en ${c}`,
    },
    steakhouses: {
      label: 'Asadores y Steakhouses',
      seoTitle: (c) => `Mejores asadores y steakhouses en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Disfruta de cortes premium, wagyu y parrilla a la brasa en los mejores asadores de ${c}.`,
      headerTitle: (c) => `Steakhouses y Asadores en ${c}`,
    },
    'dinner-shows-romantic': {
      label: 'Cena espectáculo y Romántica',
      seoTitle: (c) => `Restaurantes románticos y cenas espectáculo en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Veladas románticas con música en vivo y cenas con espectáculo en ${c}.`,
      headerTitle: (c) => `Cenas espectáculo y Románticas en ${c}`,
    },
    'breakfast-brunch': {
      label: 'Desayuno y Brunch',
      seoTitle: (c) => `Mejores desayunos y brunch en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Empieza el día con los mejores brunch y desayunos marroquíes en ${c}.`,
      headerTitle: (c) => `Desayunos y Brunch en ${c}`,
    },
    seafood: {
      label: 'Pescado y Marisco',
      seoTitle: (c) => `Mejores restaurantes de pescado y marisco en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Pescado fresco del día y marisquerías recomendadas en ${c}.`,
      headerTitle: (c) => `Restaurantes de pescado y marisco en ${c}`,
    },
    'rooftop-dining': {
      label: 'Restaurantes Rooftop',
      seoTitle: (c) => `Mejores restaurantes en azotea y terraza en ${c} | Moroccan Mate`,
      seoDescription: (c) => `Cena con vistas panorámicas al atardecer en los mejores rooftops de ${c}.`,
      headerTitle: (c) => `Restaurantes rooftop en ${c}`,
    },
  },
  de: {
    'on-the-beach': {
      label: 'Direkt am Strand',
      seoTitle: (c) => `Beste Strandhotels in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Entdecke handverlesene Strandhotels und Resorts mit direktem Strandzugang in ${c}.`,
      headerTitle: (c) => `Strandhotels in ${c}`,
    },
    'all-inclusive': {
      label: 'All-Inclusive',
      seoTitle: (c) => `Top All-Inclusive-Resorts in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Finde die besten All-Inclusive-Hotels in ${c} mit Verpflegung, Familienprogramm und Entspannung.`,
      headerTitle: (c) => `All-Inclusive-Hotels in ${c}`,
    },
    waterslides: {
      label: 'Mit Wasserrutschen',
      seoTitle: (c) => `Hotels mit Wasserrutschen & Aquapark in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Familienfreundliche Resorts mit Wasserrutschen und beheizten Pools in ${c}.`,
      headerTitle: (c) => `Hotels mit Wasserrutschen in ${c}`,
    },
    'heated-pools': {
      label: 'Beheizter Pool',
      seoTitle: (c) => `Hotels mit beheiztem Pool in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Badespaß das ganze Jahr über in den besten Hotels mit beheiztem Pool in ${c}.`,
      headerTitle: (c) => `Hotels mit beheiztem Pool in ${c}`,
    },
    '5-star': {
      label: '5-Sterne-Luxus',
      seoTitle: (c) => `Beste 5-Sterne-Luxushotels in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Die schönsten 5-Sterne-Hotels und Luxus-Riads in ${c} mit Spa und marokkanischer Gastfreundschaft.`,
      headerTitle: (c) => `5-Sterne-Luxushotels in ${c}`,
    },
    'private-beach': {
      label: 'Privatstrand',
      seoTitle: (c) => `Hotels mit Privatstrand in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Entspanne an ruhigen Stränden in ausgewählten Hotels mit Privatstrand in ${c}.`,
      headerTitle: (c) => `Hotels mit Privatstrand in ${c}`,
    },
    'kids-club': {
      label: 'Kinderclub',
      seoTitle: (c) => `Familienhotels mit Kinderclub in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Familienresorts in ${c} mit betreutem Kinderclub und geräumigen Familiensuiten.`,
      headerTitle: (c) => `Hotels mit Kinderclub in ${c}`,
    },
    'swim-up-rooms': {
      label: 'Swim-Up-Zimmer',
      seoTitle: (c) => `Hotels mit Swim-Up-Zimmern in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Direkt von der Terrasse in den Pool: Top-Hotels mit Swim-Up-Zimmern in ${c}.`,
      headerTitle: (c) => `Hotels mit Swim-Up-Zimmern in ${c}`,
    },
    nightclubs: {
      label: 'Mit Nachtclub',
      seoTitle: (c) => `Hotels mit Nachtclub & Nightlife in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Lebhafte Resorts und Hotels in ${c} mit hauseigenem Club und Abendprogramm.`,
      headerTitle: (c) => `Hotels mit Nachtclub in ${c}`,
    },
    'indoor-pool': {
      label: 'Innenpool',
      seoTitle: (c) => `Hotels mit Innenpool in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Entspanne im Wellnessbereich der besten Hotels mit Innenpool in ${c}.`,
      headerTitle: (c) => `Hotels mit Innenpool in ${c}`,
    },
    'private-pool': {
      label: 'Privatpool',
      seoTitle: (c) => `Hotels & Riads mit Privatpool in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Genieße maximale Privatsphäre in ${c} in Villen und Riads mit eigenem Pool.`,
      headerTitle: (c) => `Hotels & Riads mit Privatpool in ${c}`,
    },
    'golf-course': {
      label: 'Golfplatz',
      seoTitle: (c) => `Beste Golfhotels & Resorts in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Spiele auf erstklassigen Golfplätzen in ausgewählten Golfresorts in ${c}.`,
      headerTitle: (c) => `Hotels mit Golfplatz in ${c}`,
    },
    spa: {
      label: 'Luxus-Spa',
      seoTitle: (c) => `Beste Spa- & Hammam-Hotels in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Erhole dich in den besten Luxus-Spa- und traditionellen Hammam-Hotels in ${c}.`,
      headerTitle: (c) => `Hotels mit Luxus-Spa in ${c}`,
    },
    'airport-shuttle': {
      label: 'Flughafenshuttle',
      seoTitle: (c) => `Hotels mit Flughafenshuttle in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Komfortable Hotels in ${c} mit direktem Flughafentransfer.`,
      headerTitle: (c) => `Hotels mit Flughafenshuttle in ${c}`,
    },
    'ocean-view': {
      label: 'Meerblick',
      seoTitle: (c) => `Hotels mit Meerblick in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Wache mit Blick auf den Atlantik auf in den schönsten Meerblick-Hotels in ${c}.`,
      headerTitle: (c) => `Hotels mit Meerblick in ${c}`,
    },
    'rooftop-bar': {
      label: 'Rooftop-Bar',
      seoTitle: (c) => `Hotels mit Rooftop-Bar in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Genieße Drinks über den Dächern von ${c} in stilvollen Rooftop-Bars.`,
      headerTitle: (c) => `Hotels mit Rooftop-Bar in ${c}`,
    },
    pool: {
      label: 'Mit Pool',
      seoTitle: (c) => `Hotels mit Pool in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Entdecke top-bewertete Hotels und Riads mit Swimmingpool in ${c}.`,
      headerTitle: (c) => `Hotels mit Pool in ${c}`,
    },
    'rooftop-terrace': {
      label: 'Dachterrasse',
      seoTitle: (c) => `Hotels & Riads mit Dachterrasse in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Genieße den Panoramablick über ${c} von traumhaften Dachterrassen.`,
      headerTitle: (c) => `Hotels & Riads mit Dachterrasse in ${c}`,
    },
    'in-medina': {
      label: 'In der Medina',
      seoTitle: (c) => `Beste Hotels & Riads in der Medina von ${c} | Moroccan Mate`,
      seoDescription: (c) => `Erlebe authentische marokkanische Kultur direkt in der historischen Medina von ${c}.`,
      headerTitle: (c) => `Hotels & Riads in der Medina von ${c}`,
    },
    'mountain-view': {
      label: 'Bergblick',
      seoTitle: (c) => `Hotels mit Bergblick in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Wache mit Blick auf das Rif- oder Atlasgebirge in ${c} auf.`,
      headerTitle: (c) => `Hotels mit Bergblick in ${c}`,
    },
    'surf-hotels': {
      label: 'Surfhotels & -Camps',
      seoTitle: (c) => `Beste Surfhotels & Surfcamps in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Perfekte Atlantikwellen in den besten Surfhotels und Surfcamps in ${c}.`,
      headerTitle: (c) => `Surfhotels & -Camps in ${c}`,
    },
    'lagoon-view': {
      label: 'Lagunenblick',
      seoTitle: (c) => `Hotels & Öko-Lodges mit Lagunenblick in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Bungalows und Öko-Lodges direkt am türkisblauen Wasser der Lagune in ${c}.`,
      headerTitle: (c) => `Hotels mit Lagunenblick in ${c}`,
    },
    'kitesurf-hotels': {
      label: 'Kitesurf-Hotels',
      seoTitle: (c) => `Beste Kitesurf-Hotels & -Camps in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Top-Kitespots, zertifizierte Schulen und Lagunencamps in ${c}.`,
      headerTitle: (c) => `Kitesurf-Hotels & -Camps in ${c}`,
    },
    'desert-camps': {
      label: 'Luxus-Wüstencamps',
      seoTitle: (c) => `Luxus-Wüstencamps & Glamping in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Schlafe unter den Sternen der Sahara in ${c} in exklusiven Wüstencamps.`,
      headerTitle: (c) => `Luxus-Wüstencamps in ${c}`,
    },
    'dune-view': {
      label: 'Dünenblick',
      seoTitle: (c) => `Hotels & Wüstencamps mit Dünenblick in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Goldene Sanddünen direkt vor der Tür in Kasbahs und Camps in ${c}.`,
      headerTitle: (c) => `Unterkünfte mit Dünenblick in ${c}`,
    },
    'private-bathroom': {
      label: 'Eigenes Bad',
      seoTitle: (c) => `Wüstencamps mit eigenem Bad in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Sahara-Glamping mit privatem Bad und heißer Dusche in ${c}.`,
      headerTitle: (c) => `Wüstencamps mit eigenem Bad in ${c}`,
    },
    'camel-ride': {
      label: 'Kamelritt',
      seoTitle: (c) => `Wüstencamps mit Kamelritt in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Erlebe Sonnenuntergangs-Kamelritte durch die Dünen direkt ab deinem Camp in ${c}.`,
      headerTitle: (c) => `Wüstencamps & Hotels mit Kamelritt in ${c}`,
    },
    'air-conditioning': {
      label: 'Klimaanlage',
      seoTitle: (c) => `Hotels & Wüstencamps mit Klimaanlage in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Angenehme Temperaturen in klimatisierten Zelten und Kasbah-Zimmern in ${c}.`,
      headerTitle: (c) => `Unterkünfte mit Klimaanlage in ${c}`,
    },
    'halal-fine-dining': {
      label: 'Halal Fine Dining',
      seoTitle: (c) => `Beste Halal-Fine-Dining-Restaurants in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Entdecke erstklassige 100 % Halal-Restaurants und gehobene Küche in ${c}.`,
      headerTitle: (c) => `Halal Fine Dining Restaurants in ${c}`,
    },
    steakhouses: {
      label: 'Steakhouses & Grill',
      seoTitle: (c) => `Beste Steakhouses & Grillrestaurants in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Genieße Premium-Cuts, Wagyu und Holzkohle-Grills in den besten Steakhouses von ${c}.`,
      headerTitle: (c) => `Steakhouses & Grillrestaurants in ${c}`,
    },
    'dinner-shows-romantic': {
      label: 'Dinner-Show & Romantisch',
      seoTitle: (c) => `Romantische Restaurants & Dinner-Shows in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Unvergessliche Abende mit Live-Musik, Dinner-Show und romantischem Ambiente in ${c}.`,
      headerTitle: (c) => `Dinner-Shows & Romantische Restaurants in ${c}`,
    },
    'breakfast-brunch': {
      label: 'Frühstück & Brunch',
      seoTitle: (c) => `Beste Frühstücks- & Brunch-Spots in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Starte in den Tag mit den beliebtesten Cafés, Brunchs und Frühstücks-Spots in ${c}.`,
      headerTitle: (c) => `Frühstück & Brunch in ${c}`,
    },
    seafood: {
      label: 'Fisch & Meeresfrüchte',
      seoTitle: (c) => `Beste Fisch- & Meeresfrüchte-Restaurants in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Tagesfrischer Fisch und Meeresfrüchte-Platten in den Top-Restaurants von ${c}.`,
      headerTitle: (c) => `Fisch- & Meeresfrüchte-Restaurants in ${c}`,
    },
    'rooftop-dining': {
      label: 'Rooftop-Restaurants',
      seoTitle: (c) => `Beste Rooftop-Restaurants in ${c} | Moroccan Mate`,
      seoDescription: (c) => `Abendessen über den Dächern von ${c} mit Panoramablick zum Sonnenuntergang.`,
      headerTitle: (c) => `Rooftop-Restaurants in ${c}`,
    },
  },
  ar: {
    'on-the-beach': {
      label: 'على الشاطئ',
      seoTitle: (c) => `أفضل الفنادق على الشاطئ في ${c} | Moroccan Mate`,
      seoDescription: (c) => `اكتشف أفضل الفنادق والمنتجعات المطلة مباشرة على الشاطئ في ${c} مع تقييمات موثوقة.`,
      headerTitle: (c) => `فنادق على الشاطئ في ${c}`,
    },
    'all-inclusive': {
      label: 'شامل كلياً',
      seoTitle: (c) => `أفضل المنتجعات الشاملة كلياً في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بإقامة شاملة كلياً في أفضل منتجعات ${c} مع وجبات وأنشطة عائلية متنوعة.`,
      headerTitle: (c) => `فنادق شاملة كلياً في ${c}`,
    },
    waterslides: {
      label: 'بزحاليق مائية',
      seoTitle: (c) => `فنادق مع زحاليق وألعاب مائية في ${c} | Moroccan Mate`,
      seoDescription: (c) => `أفضل المنتجعات العائلية التي تضم ألعاباً وزحاليق مائية ومسابح مدفأة في ${c}.`,
      headerTitle: (c) => `فنادق بألعاب مائية في ${c}`,
    },
    'heated-pools': {
      label: 'مسبح مدفأ',
      seoTitle: (c) => `فنادق بمسبح مدفأ في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بالسباحة طوال العام في أفضل فنادق ${c} المزودة بمسابح مدفأة.`,
      headerTitle: (c) => `فنادق بمسبح مدفأ في ${c}`,
    },
    '5-star': {
      label: 'فخامة 5 نجوم',
      seoTitle: (c) => `أفضل فنادق 5 نجوم الفاخرة في ${c} | Moroccan Mate`,
      seoDescription: (c) => `أرقى فنادق 5 نجوم والرياضات الفاخرة في ${c} مع سبا وضيافة مغربية أصيلة.`,
      headerTitle: (c) => `فنادق 5 نجوم في ${c}`,
    },
    'private-beach': {
      label: 'شاطئ خاص',
      seoTitle: (c) => `فنادق بشاطئ خاص في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استرخِ على رمال هادئة في أفضل الفنادق المزودة بشاطئ خاص في ${c}.`,
      headerTitle: (c) => `فنادق بشاطئ خاص في ${c}`,
    },
    'kids-club': {
      label: 'نادي للأطفال',
      seoTitle: (c) => `فنادق عائلية مع نادي للأطفال في ${c} | Moroccan Mate`,
      seoDescription: (c) => `منتجعات مجربة للعائلات في ${c} تضم أندية أطفال وأجنحة واسعة.`,
      headerTitle: (c) => `فنادق بنادي أطفال في ${c}`,
    },
    'swim-up-rooms': {
      label: 'غرف بدخول مباشر للمسبح',
      seoTitle: (c) => `فنادق بغرف بدخول مباشر للمسبح في ${c} | Moroccan Mate`,
      seoDescription: (c) => `انتقل مباشرة من شرفتك إلى المسبح في أرقى منتجعات ${c}.`,
      headerTitle: (c) => `فنادق بغرف سويم أب في ${c}`,
    },
    nightclubs: {
      label: 'مع ملهى ليلي',
      seoTitle: (c) => `فنادق مع حياة ليلية وملهى في ${c} | Moroccan Mate`,
      seoDescription: (c) => `فنادق ومنتجعات حيوية في ${c} تضم سهرات مسائية وترفيهاً ليلياً.`,
      headerTitle: (c) => `فنادق بسهرات ليلية في ${c}`,
    },
    'indoor-pool': {
      label: 'مسبح داخلي',
      seoTitle: (c) => `فنادق بمسبح داخلي في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استرخِ في أفضل فنادق السبا والمسبح الداخلي في ${c}.`,
      headerTitle: (c) => `فنادق بمسبح داخلي في ${c}`,
    },
    'private-pool': {
      label: 'مسبح خاص',
      seoTitle: (c) => `فنادق ورياضات بمسبح خاص في ${c} | Moroccan Mate`,
      seoDescription: (c) => `اختبر الخصوصية التامة في ${c} مع فلل ورياضات تضم مسبحاً خاصاً.`,
      headerTitle: (c) => `فنادق ورياضات بمسبح خاص في ${c}`,
    },
    'golf-course': {
      label: 'ملعب غولف',
      seoTitle: (c) => `أفضل منتجعات وفنادق الغولف في ${c} | Moroccan Mate`,
      seoDescription: (c) => `العب الغولف في أرقى المنتجعات والملاعب المختارة في ${c}.`,
      headerTitle: (c) => `فنادق بملعب غولف في ${c}`,
    },
    spa: {
      label: 'سبا وحمام فاخر',
      seoTitle: (c) => `أفضل فنادق السبا والحمام التقليدي في ${c} | Moroccan Mate`,
      seoDescription: (c) => `جدد نشاطك في أرقى فنادق السبا والحمام المغربي الفاخر في ${c}.`,
      headerTitle: (c) => `فنادق بسبا فاخر في ${c}`,
    },
    'airport-shuttle': {
      label: 'نقل من المطار',
      seoTitle: (c) => `فنادق مع خدمة النقل من المطار في ${c} | Moroccan Mate`,
      seoDescription: (c) => `فنادق مريحة في ${c} توفر خدمة النقل المباشر من وإلى المطار.`,
      headerTitle: (c) => `فنادق بنقل المطار في ${c}`,
    },
    'ocean-view': {
      label: 'إطلالة على المحيط',
      seoTitle: (c) => `فنادق بإطلالة على البحر والمحيط في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استيقظ على إطلالة رائعة للمحيط الأطلسي في أفضل فنادق ${c}.`,
      headerTitle: (c) => `فنادق بإطلالة بحرية في ${c}`,
    },
    'rooftop-bar': {
      label: 'لاونج على السطح',
      seoTitle: (c) => `فنادق مع روف توب بار في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بإطلالات بانورامية من أجمل التراسات العلوية في ${c}.`,
      headerTitle: (c) => `فنادق مع بار علوي في ${c}`,
    },
    pool: {
      label: 'مع مسبح',
      seoTitle: (c) => `أفضل الفنادق والرياضات مع مسبح في ${c} | Moroccan Mate`,
      seoDescription: (c) => `اكتشف أفضل الفنادق والرياضات المزودة بمسبح في ${c}.`,
      headerTitle: (c) => `فنادق مع مسبح في ${c}`,
    },
    'rooftop-terrace': {
      label: 'تراس علوي',
      seoTitle: (c) => `فنادق ورياضات بتراس علوي في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بمناظر بانورامية خلابة لمدينة ${c} من أجمل التراسات العلوية.`,
      headerTitle: (c) => `فنادق ورياضات بتراس علوي في ${c}`,
    },
    'in-medina': {
      label: 'في المدينة العتيقة',
      seoTitle: (c) => `أفضل الرياضات والفنادق في المدينة العتيقة ${c} | Moroccan Mate`,
      seoDescription: (c) => `عش الأجواء المغربية الأصيلة داخل أسوار المدينة العتيقة في ${c}.`,
      headerTitle: (c) => `فنادق ورياضات في المدينة العتيقة ${c}`,
    },
    'mountain-view': {
      label: 'إطلالة جبلية',
      seoTitle: (c) => `فنادق بإطلالة على الجبال في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بمناظر جبال الريف أو الأطلس الساحرة من أفضل إقامات ${c}.`,
      headerTitle: (c) => `فنادق بإطلالة جبلية في ${c}`,
    },
    'surf-hotels': {
      label: 'فنادق ومخيمات السورف',
      seoTitle: (c) => `أفضل فنادق ومخيمات ركوب الأمواج في ${c} | Moroccan Mate`,
      seoDescription: (c) => `اركب أمواج الأطلسي في أفضل فنادق ومخيمات السورف في ${c}.`,
      headerTitle: (c) => `فنادق ومخيمات السورف في ${c}`,
    },
    'lagoon-view': {
      label: 'إطلالة على البحيرة',
      seoTitle: (c) => `فنادق ونُزل بيئية بإطلالة على البحيرة في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استيقظ أمام المياه الفيروزية للبحيرة في أرقى نُزل ${c}.`,
      headerTitle: (c) => `فنادق بإطلالة على البحيرة في ${c}`,
    },
    'kitesurf-hotels': {
      label: 'فنادق الكايت سورف',
      seoTitle: (c) => `أفضل فنادق ومخيمات الكايت سورف في ${c} | Moroccan Mate`,
      seoDescription: (c) => `مخيمات كايت سورف ومدارس معتمدة مباشرة على البحيرة في ${c}.`,
      headerTitle: (c) => `فنادق ومخيمات الكايت سورف في ${c}`,
    },
    'desert-camps': {
      label: 'مخيمات صحراوية فاخرة',
      seoTitle: (c) => `أفضل المخيمات الصحراوية الفاخرة في ${c} | Moroccan Mate`,
      seoDescription: (c) => `اقضِ ليلة تحت نجوم الصحراء في ${c} داخل مخيمات فاخرة وخيام خاصة.`,
      headerTitle: (c) => `مخيمات صحراوية فاخرة في ${c}`,
    },
    'dune-view': {
      label: 'إطلالة على الكثبان',
      seoTitle: (c) => `فنادق ومخيمات بإطلالة على الكثبان الرملية في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بمنظر الكثبان الرملية الذهبية في ${c} فور استيقاظك.`,
      headerTitle: (c) => `إقامات مطلة على الكثبان في ${c}`,
    },
    'private-bathroom': {
      label: 'حمام خاص',
      seoTitle: (c) => `مخيمات صحراوية بحمام خاص في ${c} | Moroccan Mate`,
      seoDescription: (c) => `تخييم صحراوي فاخر في ${c} مزود بحمام خاص ومياه ساخنة.`,
      headerTitle: (c) => `مخيمات صحراوية بحمام خاص في ${c}`,
    },
    'camel-ride': {
      label: 'جولة بالجمال',
      seoTitle: (c) => `مخيمات صحراوية مع ركوب الجمال في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بجولة على الجمال وقت الغروب عبر الكثبان الرملية انطلاقاً من مخيمك في ${c}.`,
      headerTitle: (c) => `مخيمات وفنادق مع جولات الجمال في ${c}`,
    },
    'air-conditioning': {
      label: 'تكييف هواء',
      seoTitle: (c) => `فنادق ومخيمات مكيفة في ${c} | Moroccan Mate`,
      seoDescription: (c) => `إقامة مريحة ومنعشة في خيام فاخرة وغرف مكيفة في ${c}.`,
      headerTitle: (c) => `فنادق ومخيمات مكيفة في ${c}`,
    },
    'halal-fine-dining': {
      label: 'مطاعم فاخرة حلال',
      seoTitle: (c) => `أفضل المطاعم الفاخرة الحلال في ${c} | Moroccan Mate`,
      seoDescription: (c) => `اكتشف أرقى المطاعم الفاخرة الحلال 100% في ${c} مع قوائم طعام وأسعار موثوقة.`,
      headerTitle: (c) => `مطاعم فاخرة حلال في ${c}`,
    },
    steakhouses: {
      label: 'مطاعم ستيك ومشويات',
      seoTitle: (c) => `أفضل مطاعم الستيك والمشويات في ${c} | Moroccan Mate`,
      seoDescription: (c) => `تذوق أفخر قطع اللحم والواغيو والمشويات في أفضل مطاعم الستيك في ${c}.`,
      headerTitle: (c) => `مطاعم ستيك ومشويات في ${c}`,
    },
    'dinner-shows-romantic': {
      label: 'عشاء رومانسي وعروض حية',
      seoTitle: (c) => `أفضل المطاعم الرومانسية وعروض العشاء الحية في ${c} | Moroccan Mate`,
      seoDescription: (c) => `سهرات عشاء مميزة مع موسيقى حية وأجواء رومانسية في ${c}.`,
      headerTitle: (c) => `مطاعم عشاء رومانسي وعروض حية في ${c}`,
    },
    'breakfast-brunch': {
      label: 'فطور وبرانش',
      seoTitle: (c) => `أفضل أماكن الفطور والبرانش في ${c} | Moroccan Mate`,
      seoDescription: (c) => `ابدأ يومك في أفضل مقاهي ومطاعم الفطور والبرانش في ${c}.`,
      headerTitle: (c) => `أماكن الفطور والبرانش في ${c}`,
    },
    seafood: {
      label: 'مأكولات بحرية',
      seoTitle: (c) => `أفضل مطاعم السمك والمأكولات البحرية في ${c} | Moroccan Mate`,
      seoDescription: (c) => `أطباق الأسماك الطازجة والمأكولات البحرية الموثوقة في ${c}.`,
      headerTitle: (c) => `مطاعم السمك والمأكولات البحرية في ${c}`,
    },
    'rooftop-dining': {
      label: 'مطاعم على السطح',
      seoTitle: (c) => `أفضل مطاعم الروف توب والإطلالة في ${c} | Moroccan Mate`,
      seoDescription: (c) => `استمتع بتناول الطعام على السطح مع إطلالات بانورامية رائعة في ${c}.`,
      headerTitle: (c) => `مطاعم على السطح في ${c}`,
    },
  },
};

export function getSearchIntentTranslation(
  slug: string,
  lang: AppLanguage
): IntentTranslation | null {
  if (lang === 'en') return null;
  return INTENT_TRANSLATIONS[lang]?.[slug] ?? null;
}

export const PRERENDER_UI_I18N: Record<
  AppLanguage,
  {
    home: string;
    viewDetails: string;
    exploreMoreIn: string;
    launchFinder: string;
    whereToEat: string;
    whereToEatDesc: string;
    whereToStay: string;
    whereToStayDesc: string;
    thingsToDo: string;
    thingsToDoDesc: string;
    shopping: string;
    shoppingDesc: string;
    fromPrice: (p: number) => string;
    avgPerson: (p: number) => string;
    freeEntry: string;
    reviewsWord: string;
    addressLabel: string;
    amenitiesHeading: string;
    cuisinesHeading: string;
    bestDishesHeading: string;
    localTipHeading: string;
    faqHeading: string;
    highlightsHeading: string;
    includedHeading: string;
    whatToKnowHeading: string;
    viewMenuBtn: string;
    backToPlaceBtn: string;
    menuHeading: string;
    editorialHeading: string;
    knowBeforeHeading: string;
    nearbyHeading: string;
    seasonalHoursLabel: string;
    foodInCity: (c: string) => string;
    staysInCity: (c: string) => string;
    thingsInCity: (c: string) => string;
    shoppingInCity: (c: string) => string;
  }
> = {
  en: {
    home: 'Home',
    viewDetails: 'View place details',
    exploreMoreIn: 'Explore more in',
    launchFinder: 'Launch Finder',
    whereToEat: 'Where to Eat',
    whereToEatDesc: 'Authentic Moroccan cuisines, rooftop dining, and street food gems.',
    whereToStay: 'Where to Stay',
    whereToStayDesc: 'Charming riads, boutique hotels, kasbahs, and desert camps.',
    thingsToDo: 'Things to Do',
    thingsToDoDesc: 'Guided tours, mountain treks, desert safaris, and hammams.',
    shopping: 'Shopping',
    shoppingDesc: 'Artisan cooperatives, spices, carpets, ceramics, and souvenirs.',
    fromPrice: (p) => `From ${p} MAD/night`,
    avgPerson: (p) => `Avg ${p} MAD/person`,
    freeEntry: 'Free Entry',
    reviewsWord: 'reviews',
    addressLabel: 'Address',
    amenitiesHeading: 'Amenities & Features',
    cuisinesHeading: 'Cuisine & Vibe',
    bestDishesHeading: 'Signature Dishes & Specialties',
    localTipHeading: 'Local Insider Tip',
    faqHeading: 'Frequently Asked Questions',
    highlightsHeading: 'Highlights & Why Visit',
    includedHeading: 'What is Included',
    whatToKnowHeading: 'What to Know / Bring',
    viewMenuBtn: 'View Verified Menu & Prices',
    backToPlaceBtn: 'Back to Venue Overview',
    menuHeading: 'Full Menu & Prices (MAD)',
    editorialHeading: 'About the Experience',
    knowBeforeHeading: 'Know Before You Go',
    nearbyHeading: 'Nearby Landmarks & Access',
    seasonalHoursLabel: 'Hours & Schedule',
    foodInCity: (c) => `Food in ${c}`,
    staysInCity: (c) => `Stays in ${c}`,
    thingsInCity: (c) => `Things to Do in ${c}`,
    shoppingInCity: (c) => `Shopping in ${c}`,
  },
  fr: {
    home: 'Accueil',
    viewDetails: 'Voir la fiche',
    exploreMoreIn: 'Explorer plus à',
    launchFinder: "Lancer l'explorateur",
    whereToEat: 'Où Manger',
    whereToEatDesc: 'Cuisine marocaine authentique, rooftops et pépites street-food.',
    whereToStay: 'Où Dormir',
    whereToStayDesc: 'Riads de charme, hôtels boutique, kasbahs et camps dans le désert.',
    thingsToDo: 'Choses à Faire',
    thingsToDoDesc: 'Visites guidées, randonnées, désert et hammams traditionnels.',
    shopping: 'Shopping',
    shoppingDesc: 'Coopératives artisanales, épices, tapis, céramiques et souvenirs.',
    fromPrice: (p) => `Dès ${p} MAD/nuit`,
    avgPerson: (p) => `Env. ${p} MAD/pers.`,
    freeEntry: 'Entrée gratuite',
    reviewsWord: 'avis',
    addressLabel: 'Adresse',
    amenitiesHeading: 'Équipements & Services',
    cuisinesHeading: 'Cuisine & Ambiance',
    bestDishesHeading: 'Plats signatures & Spécialités',
    localTipHeading: 'Conseil local',
    faqHeading: 'Questions fréquentes',
    highlightsHeading: 'Points forts de la visite',
    includedHeading: 'Ce qui est inclus',
    whatToKnowHeading: 'À savoir / À prévoir',
    viewMenuBtn: 'Voir le menu et les prix vérifiés',
    backToPlaceBtn: 'Retour à la fiche du lieu',
    menuHeading: 'Carte complète & Prix (MAD)',
    editorialHeading: "À propos de l'expérience",
    knowBeforeHeading: 'Bon à savoir avant de venir',
    nearbyHeading: 'Lieux à proximité & Accès',
    seasonalHoursLabel: 'Horaires',
    foodInCity: (c) => `Restaurants à ${c}`,
    staysInCity: (c) => `Hébergements à ${c}`,
    thingsInCity: (c) => `Activités à ${c}`,
    shoppingInCity: (c) => `Shopping à ${c}`,
  },
  es: {
    home: 'Inicio',
    viewDetails: 'Ver detalles',
    exploreMoreIn: 'Explorar más en',
    launchFinder: 'Abrir buscador',
    whereToEat: 'Dónde Comer',
    whereToEatDesc: 'Cocina marroquí auténtica, terrazas y joyas de comida callejera.',
    whereToStay: 'Dónde Dormir',
    whereToStayDesc: 'Riads con encanto, hoteles boutique, kasbahs y campamentos en el desierto.',
    thingsToDo: 'Qué Hacer',
    thingsToDoDesc: 'Tours guiados, rutas de montaña, safaris al desierto y hammams.',
    shopping: 'Compras',
    shoppingDesc: 'Cooperativas artesanales, especias, alfombras, cerámica y recuerdos.',
    fromPrice: (p) => `Desde ${p} MAD/noche`,
    avgPerson: (p) => `Media ${p} MAD/pers.`,
    freeEntry: 'Entrada gratuita',
    reviewsWord: 'reseñas',
    addressLabel: 'Dirección',
    amenitiesHeading: 'Servicios y Comodidades',
    cuisinesHeading: 'Cocina y Ambiente',
    bestDishesHeading: 'Platos estrella y Especialidades',
    localTipHeading: 'Consejo local',
    faqHeading: 'Preguntas frecuentes',
    highlightsHeading: 'Lo más destacado',
    includedHeading: 'Qué incluye',
    whatToKnowHeading: 'Qué llevar / Información útil',
    viewMenuBtn: 'Ver carta y precios verificados',
    backToPlaceBtn: 'Volver a la ficha del lugar',
    menuHeading: 'Carta completa y Precios (MAD)',
    editorialHeading: 'Sobre la experiencia',
    knowBeforeHeading: 'Información útil antes de ir',
    nearbyHeading: 'Lugares cercanos y Accesos',
    seasonalHoursLabel: 'Horario',
    foodInCity: (c) => `Restaurantes en ${c}`,
    staysInCity: (c) => `Alojamientos en ${c}`,
    thingsInCity: (c) => `Qué hacer en ${c}`,
    shoppingInCity: (c) => `Compras en ${c}`,
  },
  de: {
    home: 'Startseite',
    viewDetails: 'Details ansehen',
    exploreMoreIn: 'Mehr entdecken in',
    launchFinder: 'Finder starten',
    whereToEat: 'Essen & Trinken',
    whereToEatDesc: 'Authentische marokkanische Küche, Dachterrassen und Streetfood-Tipps.',
    whereToStay: 'Übernachten',
    whereToStayDesc: 'Charmante Riads, Boutique-Hotels, Kasbahs und Wüstencamps.',
    thingsToDo: 'Aktivitäten',
    thingsToDoDesc: 'Geführte Touren, Bergwanderungen, Wüstensafaris und Hammams.',
    shopping: 'Shopping',
    shoppingDesc: 'Kunsthandwerk-Kooperativen, Gewürze, Teppiche, Keramik und Souvenirs.',
    fromPrice: (p) => `Ab ${p} MAD/Nacht`,
    avgPerson: (p) => `Ca. ${p} MAD/Person`,
    freeEntry: 'Eintritt frei',
    reviewsWord: 'Bewertungen',
    addressLabel: 'Adresse',
    amenitiesHeading: 'Ausstattung & Merkmale',
    cuisinesHeading: 'Küche & Atmosphäre',
    bestDishesHeading: 'Empfehlungen & Spezialitäten',
    localTipHeading: 'Geheimtipp vor Ort',
    faqHeading: 'Häufig gestellte Fragen',
    highlightsHeading: 'Highlights & Besonderheiten',
    includedHeading: 'Inklusive Leistungen',
    whatToKnowHeading: 'Wichtige Hinweise',
    viewMenuBtn: 'Verifizierte Speisekarte & Preise ansehen',
    backToPlaceBtn: 'Zurück zur Übersicht',
    menuHeading: 'Speisekarte & Preise (MAD)',
    editorialHeading: 'Über das Erlebnis',
    knowBeforeHeading: 'Wissenswertes vor dem Besuch',
    nearbyHeading: 'Sehenswürdigkeiten & Anfahrt',
    seasonalHoursLabel: 'Öffnungszeiten',
    foodInCity: (c) => `Essen in ${c}`,
    staysInCity: (c) => `Unterkünfte in ${c}`,
    thingsInCity: (c) => `Aktivitäten in ${c}`,
    shoppingInCity: (c) => `Shopping in ${c}`,
  },
  ar: {
    home: 'الرئيسية',
    viewDetails: 'عرض التفاصيل',
    exploreMoreIn: 'استكشف المزيد في',
    launchFinder: 'افتح المستكشف',
    whereToEat: 'أماكن الأكل',
    whereToEatDesc: 'مطبخ مغربي أصيل، مطاعم بأسطح بانورامية وأكلات شعبية.',
    whereToStay: 'أماكن الإقامة',
    whereToStayDesc: 'رياضات ساحرة، فنادق بوتيك، قصبات ومخيمات صحراوية.',
    thingsToDo: 'أنشطة وتجارب',
    thingsToDoDesc: 'جولات سياحية، رحلات جبلية، سفاري الصحراء وحمامات تقليدية.',
    shopping: 'التسوق',
    shoppingDesc: 'تعاونيات تقليدية، توابل، زرابي، خزف وهدايا تذكارية.',
    fromPrice: (p) => `ابتداءً من ${p} درهم/ليلة`,
    avgPerson: (p) => `متوسط ${p} درهم/شخص`,
    freeEntry: 'دخول مجاني',
    reviewsWord: 'تقييم',
    addressLabel: 'العنوان',
    amenitiesHeading: 'المرافق والمميزات',
    cuisinesHeading: 'المطبخ والأجواء',
    bestDishesHeading: 'أشهر الأطباق المختارة',
    localTipHeading: 'نصيحة محلية',
    faqHeading: 'الأسئلة الشائعة',
    highlightsHeading: 'أبرز المميزات',
    includedHeading: 'ما يشمله العرض',
    whatToKnowHeading: 'معلومات مهمة للزيارة',
    viewMenuBtn: 'عرض القائمة والأسعار الموثقة',
    backToPlaceBtn: 'العودة إلى صفحة المكان',
    menuHeading: 'قائمة الطعام والأسعار (درهم)',
    editorialHeading: 'نبذة عن التجربة',
    knowBeforeHeading: 'نصائح مهمة قبل الزيارة',
    nearbyHeading: 'المعالم القريبة والوصول',
    seasonalHoursLabel: 'ساعات العمل',
    foodInCity: (c) => `مطاعم ${c}`,
    staysInCity: (c) => `إقامات ${c}`,
    thingsInCity: (c) => `أنشطة في ${c}`,
    shoppingInCity: (c) => `تسوق في ${c}`,
  },
};
