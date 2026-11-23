import type { AppLanguage } from '../../utils/localeRouting';
import type { BlogDesk } from './types';

export interface BlogUiStrings {
  publicationTitle: string;
  publicationSubtitle: string;
  editionLabel: string;
  issuePrefix: string;
  minReadSuffix: string;
  allDesks: string;
  allCities: string;
  desks: Record<BlogDesk, string>;
  navDiscover: string;
  navBlog: string;
  navNearMe: string;
  leadDispatchLabel: string;
  secondaryFeaturesLabel: string;
  archiveLedgerLabel: string;
  readDispatch: string;
  allDispatchesCta: string;
  backToDispatches: string;
  viewListing: string;
  chaptersHeading: string;
  mentionedHeading: string;
  exploreCityHeading: string;
  exploreCategories: {
    food: string;
    sleep: string;
    'things-to-do': string;
    shopping: string;
  };
  previousDispatch: string;
  nextDispatch: string;
  relatedDispatches: string;
  emptyTitle: string;
  emptyBody: string;
  resetFilters: string;
  notFoundTitle: string;
  notFoundBody: string;
  placesReferencedCount: string;
  homePreviewKicker: string;
  homePreviewTitle: string;
  homePreviewSubtitle: string;
  figurePrefix: string;
  noteCautionLabel: string;
  noteFieldLabel: string;
}

export const BLOG_UI_I18N: Record<AppLanguage, BlogUiStrings> = {
  en: {
    publicationTitle: 'Moroccan Mate Blog',
    publicationSubtitle: 'Honest local travel guides, food stories, and medina tips linked directly to verified places across Morocco.',
    editionLabel: 'Morocco Travel Guides',
    issuePrefix: 'Guide',
    minReadSuffix: 'min read',
    allDesks: 'All Topics',
    allCities: 'All Cities',
    desks: {
      food: 'Food & Tea',
      stays: 'Riads & Stays',
      craft: 'Craft & Souks',
      routes: 'Routes & Tips',
      etiquette: 'Etiquette',
    },
    navDiscover: 'Home',
    navBlog: 'Blog',
    navNearMe: 'Near Me',
    leadDispatchLabel: 'Featured Guide',
    secondaryFeaturesLabel: 'Popular Articles',
    archiveLedgerLabel: 'More Guides',
    readDispatch: 'Read article',
    allDispatchesCta: 'View all articles',
    backToDispatches: 'Back to Blog',
    viewListing: 'View Place',
    chaptersHeading: 'In This Guide',
    mentionedHeading: 'Places Mentioned',
    exploreCityHeading: 'Explore City Finder',
    exploreCategories: {
      food: 'Food & Cafés',
      sleep: 'Riads & Stays',
      'things-to-do': 'Things To Do',
      shopping: 'Craft & Souks',
    },
    previousDispatch: 'Previous Article',
    nextDispatch: 'Next Article',
    relatedDispatches: 'More from the Blog',
    emptyTitle: 'No articles match this filter.',
    emptyBody: 'Reset your filters to view all Moroccan Mate travel guides.',
    resetFilters: 'Reset Filters',
    notFoundTitle: 'Article not found',
    notFoundBody: 'This article may have been moved or removed. Browse all guides on the blog.',
    placesReferencedCount: 'verified places linked',
    homePreviewKicker: 'From the Blog',
    homePreviewTitle: 'Local Stories & Travel Guides',
    homePreviewSubtitle: 'Practical guides from Marrakech courtyards, Fès kilns, and coastal towns—with every restaurant, riad, and workshop linked directly.',
    figurePrefix: 'Photo',
    noteCautionLabel: 'Good to Know',
    noteFieldLabel: 'Quick Reference',
  },
  fr: {
    publicationTitle: 'Blog Moroccan Mate',
    publicationSubtitle: 'Guides de voyage locaux, récits culinaires et conseils pratiques reliés directement aux adresses vérifiées au Maroc.',
    editionLabel: 'Guides de Voyage Maroc',
    issuePrefix: 'Guide',
    minReadSuffix: 'min de lecture',
    allDesks: 'Tous les thèmes',
    allCities: 'Toutes les villes',
    desks: {
      food: 'Table & Thé',
      stays: 'Riads & Séjours',
      craft: 'Artisanat & Souks',
      routes: 'Itinéraires',
      etiquette: 'Savoir-vivre',
    },
    navDiscover: 'Accueil',
    navBlog: 'Blog',
    navNearMe: 'À proximité',
    leadDispatchLabel: 'À la Une',
    secondaryFeaturesLabel: 'Articles populaires',
    archiveLedgerLabel: 'Tous les articles',
    readDispatch: 'Lire l’article',
    allDispatchesCta: 'Voir tout le blog',
    backToDispatches: 'Retour au blog',
    viewListing: 'Voir le lieu',
    chaptersHeading: 'Dans ce guide',
    mentionedHeading: 'Lieux cités',
    exploreCityHeading: 'Explorer la ville',
    exploreCategories: {
      food: 'Restaurants & Cafés',
      sleep: 'Riads & Hôtels',
      'things-to-do': 'Choses à Faire',
      shopping: 'Artisanat & Souks',
    },
    previousDispatch: 'Article précédent',
    nextDispatch: 'Article suivant',
    relatedDispatches: 'Plus d’articles du blog',
    emptyTitle: 'Aucun article ne correspond à ce filtre.',
    emptyBody: 'Réinitialisez les filtres pour afficher tous les articles du blog.',
    resetFilters: 'Réinitialiser',
    notFoundTitle: 'Article introuvable',
    notFoundBody: 'Cet article n’existe pas ou a été déplacé. Retrouvez tous nos guides sur le blog.',
    placesReferencedCount: 'adresses vérifiées',
    homePreviewKicker: 'Sur le Blog',
    homePreviewTitle: 'Guides & Conseils Locaux',
    homePreviewSubtitle: 'Récits de cours marrakchies, fours de Fès et villes côtières, avec chaque restaurant, riad et atelier relié en direct.',
    figurePrefix: 'Photo',
    noteCautionLabel: 'Conseil pratique',
    noteFieldLabel: 'Repères pratiques',
  },
  es: {
    publicationTitle: 'Blog de Moroccan Mate',
    publicationSubtitle: 'Guías locales honestas, crónicas gastronómicas y consejos de viaje conectados a lugares verificados en Marruecos.',
    editionLabel: 'Guías de Viaje Marruecos',
    issuePrefix: 'Guía',
    minReadSuffix: 'min de lectura',
    allDesks: 'Todos los temas',
    allCities: 'Todas las ciudades',
    desks: {
      food: 'Mesa y Té',
      stays: 'Riads y Estancias',
      craft: 'Artesanía y Zocos',
      routes: 'Rutas y Consejos',
      etiquette: 'Etiqueta Local',
    },
    navDiscover: 'Inicio',
    navBlog: 'Blog',
    navNearMe: 'Cerca de mí',
    leadDispatchLabel: 'Artículo Destacado',
    secondaryFeaturesLabel: 'Artículos Populares',
    archiveLedgerLabel: 'Más Artículos',
    readDispatch: 'Leer artículo',
    allDispatchesCta: 'Ver todo el blog',
    backToDispatches: 'Volver al blog',
    viewListing: 'Ver lugar',
    chaptersHeading: 'En esta guía',
    mentionedHeading: 'Lugares mencionados',
    exploreCityHeading: 'Explorar ciudad',
    exploreCategories: {
      food: 'Comida y Cafés',
      sleep: 'Riads y Hoteles',
      'things-to-do': 'Qué Hacer',
      shopping: 'Compras y Zocos',
    },
    previousDispatch: 'Artículo anterior',
    nextDispatch: 'Siguiente artículo',
    relatedDispatches: 'Más en el blog',
    emptyTitle: 'No hay artículos para esta selección.',
    emptyBody: 'Restablece los filtros para volver a ver todas las guías.',
    resetFilters: 'Restablecer filtros',
    notFoundTitle: 'Artículo no encontrado',
    notFoundBody: 'Este artículo no está disponible. Explora todas las guías en el blog.',
    placesReferencedCount: 'lugares verificados',
    homePreviewKicker: 'Desde el Blog',
    homePreviewTitle: 'Guías e Historias Locales',
    homePreviewSubtitle: 'Guías prácticas desde patios de Marrakech, alfares de Fez y ciudades atlánticas con cada dirección enlazada.',
    figurePrefix: 'Foto',
    noteCautionLabel: 'Aviso práctico',
    noteFieldLabel: 'Referencia rápida',
  },
  de: {
    publicationTitle: 'Moroccan Mate Blog',
    publicationSubtitle: 'Ehrliche Reiseguides, kulinarische Tipps und Vor-Ort-Wissen – direkt verknüpft mit geprüften Adressen in Marokko.',
    editionLabel: 'Marokko Reiseguides',
    issuePrefix: 'Guide',
    minReadSuffix: 'Min. Lesezeit',
    allDesks: 'Alle Themen',
    allCities: 'Alle Städte',
    desks: {
      food: 'Küche & Tee',
      stays: 'Riads & Hotels',
      craft: 'Handwerk & Souks',
      routes: 'Routen & Tipps',
      etiquette: 'Etikette',
    },
    navDiscover: 'Startseite',
    navBlog: 'Blog',
    navNearMe: 'In der Nähe',
    leadDispatchLabel: 'Empfohlener Beitrag',
    secondaryFeaturesLabel: 'Beliebte Artikel',
    archiveLedgerLabel: 'Weitere Artikel',
    readDispatch: 'Artikel lesen',
    allDispatchesCta: 'Alle Artikel ansehen',
    backToDispatches: 'Zurück zum Blog',
    viewListing: 'Ort ansehen',
    chaptersHeading: 'In diesem Guide',
    mentionedHeading: 'Erwähnte Orte',
    exploreCityHeading: 'Stadt-Finder öffnen',
    exploreCategories: {
      food: 'Essen & Cafés',
      sleep: 'Riads & Unterkünfte',
      'things-to-do': 'Aktivitäten',
      shopping: 'Handwerk & Souks',
    },
    previousDispatch: 'Vorheriger Artikel',
    nextDispatch: 'Nächster Artikel',
    relatedDispatches: 'Mehr aus dem Blog',
    emptyTitle: 'Keine Artikel für diese Auswahl gefunden.',
    emptyBody: 'Filter zurücksetzen, um alle Blog-Beiträge anzuzeigen.',
    resetFilters: 'Filter zurücksetzen',
    notFoundTitle: 'Artikel nicht gefunden',
    notFoundBody: 'Dieser Beitrag wurde möglicherweise verschoben. Alle aktuellen Artikel findest du im Blog.',
    placesReferencedCount: 'geprüfte Orte verlinkt',
    homePreviewKicker: 'Aus dem Blog',
    homePreviewTitle: 'Lokale Guides & Geschichten',
    homePreviewSubtitle: 'Praktische Berichte aus Marrakesch, Fès und von der Atlantikküste – direkt mit jedem Restaurant, Riad und Atelier verlinkt.',
    figurePrefix: 'Foto',
    noteCautionLabel: 'Gut zu wissen',
    noteFieldLabel: 'Kurzübersicht',
  },
  ar: {
    publicationTitle: 'مدونة Moroccan Mate',
    publicationSubtitle: 'أدلة سفر محلية صادقة، مقالات طهي، ونصائح ميدانية مرتبطة مباشرة بأماكن موثوقة في المغرب.',
    editionLabel: 'أدلة السفر في المغرب',
    issuePrefix: 'دليل',
    minReadSuffix: 'دقائق للقراءة',
    allDesks: 'كل المواضيع',
    allCities: 'كل المدن',
    desks: {
      food: 'المطبخ والشاي',
      stays: 'الرياضات والإقامة',
      craft: 'الحرف والأسواق',
      routes: 'المسارات والنصائح',
      etiquette: 'آداب السفر',
    },
    navDiscover: 'الرئيسية',
    navBlog: 'المدونة',
    navNearMe: 'بالقرب مني',
    leadDispatchLabel: 'مقال مختار',
    secondaryFeaturesLabel: 'مقالات شائعة',
    archiveLedgerLabel: 'المزيد من المقالات',
    readDispatch: 'اقرأ المقال',
    allDispatchesCta: 'تصفح كل المقالات',
    backToDispatches: 'العودة إلى المدونة',
    viewListing: 'عرض المكان',
    chaptersHeading: 'محتويات الدليل',
    mentionedHeading: 'أماكن مذكورة',
    exploreCityHeading: 'استكشف المدينة',
    exploreCategories: {
      food: 'المطاعم والمقاهي',
      sleep: 'الرياضات والفنادق',
      'things-to-do': 'أنشطة وتجارب',
      shopping: 'الحرف والأسواق',
    },
    previousDispatch: 'المقال السابق',
    nextDispatch: 'المقال التالي',
    relatedDispatches: 'المزيد من المدونة',
    emptyTitle: 'لا توجد مقالات مطابقة لهذا التصفية.',
    emptyBody: 'أعد ضبط المرشحات لعرض جميع مقالات المدونة.',
    resetFilters: 'إعادة ضبط',
    notFoundTitle: 'المقال غير موجود',
    notFoundBody: 'قد يكون هذا المقال قد نُقل أو أُزيل. تصفح بقية المقالات في المدونة.',
    placesReferencedCount: 'أماكن موثوقة مرتبطة',
    homePreviewKicker: 'من المدونة',
    homePreviewTitle: 'قصص وأدلة محلية في المغرب',
    homePreviewSubtitle: 'أدلة عملية من رياضات مراكش وأفران فاس ومدن الساحل، مع روابط مباشرة لكل مطعم ورياض وورشة حرفية.',
    figurePrefix: 'صورة',
    noteCautionLabel: 'معلومة مهمة',
    noteFieldLabel: 'ملخص سريع',
  },
};
