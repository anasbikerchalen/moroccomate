import type { AppLanguage } from '../../utils/localeRouting';
import type { QuizOption, QuizQuestion } from './questions';

type NonEnLang = Exclude<AppLanguage, 'en'>;

interface OptionTranslation {
  label: string;
  sub?: string;
}

interface QuestionTranslation {
  question: string;
  options: Record<string, OptionTranslation>;
}

type QuestionTranslationMap = Record<string, Record<NonEnLang, QuestionTranslation>>;

const QUIZ_TRANSLATIONS: QuestionTranslationMap = {
  // ═══════════════════════════════════════════════════════════════════
  // BASE QUESTIONS
  // ═══════════════════════════════════════════════════════════════════
  'base-lifestyle': {
    fr: {
      question: 'Quel est votre style de budget pour ce voyage ?',
      options: {
        lean: { label: 'Économique & Local', sub: 'Meilleur rapport qualité-prix, pépites locales, vraies économies' },
        balanced: { label: 'Équilibré & Confort', sub: 'Confort et authenticité, bonnes adresses milieu de gamme' },
        premium: { label: 'Premium & Sans Effort', sub: 'Sélection d’excellence, confort haut de gamme' },
      },
    },
    es: {
      question: '¿Cuál es tu estilo de presupuesto para este viaje?',
      options: {
        lean: { label: 'Económico y Local', sub: 'Mejor relación calidad-precio, joyas locales y ahorro auténtico' },
        balanced: { label: 'Equilibrado y Cómodo', sub: 'Comodidad y autenticidad, opciones de gama media' },
        premium: { label: 'Premium y Sin Esfuerzo', sub: 'Excelencia seleccionada y confort de primer nivel' },
      },
    },
    de: {
      question: 'Welcher Reisestil und welches Budget passen zu dir?',
      options: {
        lean: { label: 'Sparsam & Lokal', sub: 'Bestes Preis-Leistungs-Verhältnis, echte Geheimtipps' },
        balanced: { label: 'Ausgewogen & Komfortabel', sub: 'Komfort trifft Authentizität, solide Mittelklasse' },
        premium: { label: 'Premium & Mühelos', sub: 'Handverlesene Exzellenz, höchster Komfort' },
      },
    },
    ar: {
      question: 'ما هو أسلوب ميزانيتك لهذه الرحلة؟',
      options: {
        lean: { label: 'اقتصادي ومحلي', sub: 'أفضل قيمة مقابل السعر وأماكن محلية أصيلة' },
        balanced: { label: 'متوازن ومريح', sub: 'الراحة والأصالة في الفئة المتوسطة' },
        premium: { label: 'فاخر ومريح تماماً', sub: 'خيارات منتقاة بعناية وأعلى درجات الرفاهية' },
      },
    },
  },
  'base-group': {
    fr: {
      question: 'Avec qui voyagez-vous ?',
      options: {
        solo: { label: 'En solo' },
        couple: { label: 'En couple' },
        family: { label: 'En famille', sub: 'Avec des enfants' },
        friends: { label: 'Entre amis' },
      },
    },
    es: {
      question: '¿Con quién estás explorando?',
      options: {
        solo: { label: 'Solo/a' },
        couple: { label: 'En pareja' },
        family: { label: 'En familia', sub: 'Con niños' },
        friends: { label: 'Con amigos' },
      },
    },
    de: {
      question: 'Mit wem bist du unterwegs?',
      options: {
        solo: { label: 'Alleinreisend' },
        couple: { label: 'Als Paar' },
        family: { label: 'Mit Familie', sub: 'Mit Kindern' },
        friends: { label: 'Mit Freunden' },
      },
    },
    ar: {
      question: 'مع من تستكشف المغرب؟',
      options: {
        solo: { label: 'بمفردي' },
        couple: { label: 'ثنائي' },
        family: { label: 'عائلة', sub: 'مع الأطفال' },
        friends: { label: 'مع الأصدقاء' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // CITIES QUIZ
  // ═══════════════════════════════════════════════════════════════════
  'q1-landscape': {
    fr: {
      question: 'Quel paysage sensoriel vous attire naturellement en premier ?',
      options: {
        'ocean-wind': { label: 'Océan & Vent', sub: 'Horizons infinis et air marin' },
        'ancient-stone': { label: 'Pierre Ancienne & Épices', sub: 'Des siècles d’histoire vivante' },
        'desert-silence': { label: 'Silence du Désert & Sommets', sub: 'Grandeur brute et sauvage' },
      },
    },
    es: {
      question: '¿Qué paisaje sensorial te atrae de forma natural?',
      options: {
        'ocean-wind': { label: 'Océano y Viento', sub: 'Horizontes infinitos y brisa salada' },
        'ancient-stone': { label: 'Piedra Antigua y Especias', sub: 'Siglos de historia viva' },
        'desert-silence': { label: 'Silencio del Desierto y Cumbres', sub: 'Majestuosidad pura y salvaje' },
      },
    },
    de: {
      question: 'Welche Landschaft zieht dich zuerst an?',
      options: {
        'ocean-wind': { label: 'Ozean & Wind', sub: 'Endlose Horizonte und Meeresluft' },
        'ancient-stone': { label: 'Alte Mauern & Gewürze', sub: 'Jahrhunderte lebendiger Geschichte' },
        'desert-silence': { label: 'Wüstenstille & Gipfel', sub: 'Ungezähmte, raue Schönheit' },
      },
    },
    ar: {
      question: 'أي مشهد طبيعي يجذبك أولاً؟',
      options: {
        'ocean-wind': { label: 'المحيط والنسيم', sub: 'آفاق مفتوحة وهواء بحري' },
        'ancient-stone': { label: 'العمارة العتيقة والتوابل', sub: 'قرون من التاريخ الحي' },
        'desert-silence': { label: 'هدوء الصحراء والقمم', sub: 'جمال طبيعي مهيب' },
      },
    },
  },
  'q2-energy': {
    fr: {
      question: 'Comment préférez-vous gérer votre rythme ?',
      options: {
        'slow-active': { label: 'Matin calme, après-midi actif', sub: 'Se reposer puis explorer' },
        'high-immersion': { label: 'Énergique & Immersif', sub: 'Plonger au cœur de l’effervescence' },
        'structured-calm': { label: 'Structuré & Apaisant', sub: 'Rythme paisible et organisé' },
      },
    },
    es: {
      question: '¿Cómo prefieres gestionar tu energía?',
      options: {
        'slow-active': { label: 'Mañana tranquila, tarde activa', sub: 'Descansar primero, explorar después' },
        'high-immersion': { label: 'Intenso e Inmersivo', sub: 'Sumergirse de lleno en el bullicio' },
        'structured-calm': { label: 'Estructurado y Calmado', sub: 'Ritmo tranquilo y planificado' },
      },
    },
    de: {
      question: 'Wie möchtest du deine Tagesenergie einteilen?',
      options: {
        'slow-active': { label: 'Ruhiger Morgen, aktiver Nachmittag', sub: 'Erst entspannen, dann entdecken' },
        'high-immersion': { label: 'Energiegeladen & Intensiv', sub: 'Tief ins bunte Treiben eintauchen' },
        'structured-calm': { label: 'Strukturiert & Ruhig', sub: 'Entspannter, geplanter Rhythmus' },
      },
    },
    ar: {
      question: 'كيف تفضل تنظيم طاقتك خلال اليوم؟',
      options: {
        'slow-active': { label: 'صباح هادئ ومساء نشيط', sub: 'استرخاء أولاً ثم استكشاف' },
        'high-immersion': { label: 'طاقة عالية وانغماس كامل', sub: 'الغوص في قلب الأجواء الحيوية' },
        'structured-calm': { label: 'منظم وهادئ', sub: 'وتيرة مريحة ومخطط لها' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // THINGS TO DO DECISION TREE (thingsQuiz.ts)
  // ═══════════════════════════════════════════════════════════════════
  'things-road': {
    fr: {
      question: 'Qu’est-ce qui vous attire le plus pour ce voyage ?',
      options: {
        'road-heritage': { label: 'Patrimoine & Médinas', sub: 'Monuments, vieilles villes et histoire vivante' },
        'road-nature': { label: 'Nature Sauvage & Aventure', sub: 'Côte, canyons, dunes et grands espaces' },
        'road-wellness': { label: 'Bien-être, Savoir-faire & Calme', sub: 'Hammams, ateliers, jardins et douceur de vivre' },
      },
    },
    es: {
      question: '¿Qué es lo que más te llama en este viaje?',
      options: {
        'road-heritage': { label: 'Patrimonio y Medinas', sub: 'Monumentos, cascos antiguos e historia viva' },
        'road-nature': { label: 'Naturaleza Salvaje y Aventura', sub: 'Costa, cañones, dunas y paisajes abiertos' },
        'road-wellness': { label: 'Bienestar, Artes y Calma', sub: 'Hammams, talleres, jardines y ritmo pausado' },
      },
    },
    de: {
      question: 'Was reizt dich auf dieser Reise am meisten?',
      options: {
        'road-heritage': { label: 'Kulturerbe & Altstädte', sub: 'Monumente, alte Medinas und lebendige Geschichte' },
        'road-nature': { label: 'Wilde Natur & Abenteuer', sub: 'Küste, Schluchten, Dünen und weite Landschaften' },
        'road-wellness': { label: 'Wellness, Handwerk & Ruhe', sub: 'Hammams, Workshops, Gärten und Entschleunigung' },
      },
    },
    ar: {
      question: 'ما الذي يجذبك أكثر في هذه الرحلة؟',
      options: {
        'road-heritage': { label: 'التراث والمدن العتيقة', sub: 'المعالم التاريخية والأزقة القديمة والتراث الحي' },
        'road-nature': { label: 'الطبيعة البرية والمغامرة', sub: 'السواحل والأودية والكثبان والمناظر المفتوحة' },
        'road-wellness': { label: 'الاستجمام والحرف والهدوء', sub: 'الحمامات التقليدية، الورش، الحدائق والسكينة' },
      },
    },
  },
  'a2-atmosphere': {
    fr: {
      question: 'Quel type d’atmosphère recherchez-vous ?',
      options: {
        'quiet-history': { label: 'Histoire Calme & Architecture', sub: 'Remparts, palais, médinas restaurées, ruines et musées paisibles' },
        'souk-pulse': { label: 'L’Énergie Vibrante des Souks', sub: 'Ruelles aux épices, travail du cuir, marchandage et vie de rue' },
      },
    },
    es: {
      question: '¿Qué tipo de ambiente estás buscando?',
      options: {
        'quiet-history': { label: 'Historia Tranquila y Arquitectura', sub: 'Murallas, palacios, medinas restauradas, ruinas y museos tranquilos' },
        'souk-pulse': { label: 'El Pulso Vibrante de los Zocos', sub: 'Callejones de especias, artesanía en cuero, regateo y vida local' },
      },
    },
    de: {
      question: 'Welche Atmosphäre suchst du?',
      options: {
        'quiet-history': { label: 'Ruhige Geschichte & Architektur', sub: 'Stadtmauern, Paläste, restaurierte Medinas, Ruinen und ruhige Museen' },
        'souk-pulse': { label: 'Lebendige Energie der Souks', sub: 'Gewürzgassen, Lederhandwerk, Feilschen und buntes Straßenleben' },
      },
    },
    ar: {
      question: 'ما نوع الأجواء التي تبحث عنها؟',
      options: {
        'quiet-history': { label: 'تاريخ هادئ وعمارة أصيلة', sub: 'الأسوار، القصور، المتاحف الهادئة والمعالم التاريخية' },
        'souk-pulse': { label: 'نبض الأسواق التقليدية الحيوي', sub: 'أزقة التوابل، الجلود، الحرفيين وحياة الشارع' },
      },
    },
  },
  'a3-walking-appetite': {
    fr: {
      question: 'Combien de temps et de marche souhaitez-vous ?',
      options: {
        'quick-highlight': { label: 'Découverte Rapide (1–2 h)', sub: 'Site compact, peu de marches, proche du centre-ville' },
        'halfday-immersion': { label: 'Immersion Demi-Journée (3–4 h)', sub: 'Longue balade dans les labyrinthes de pierre et plusieurs quartiers' },
      },
    },
    es: {
      question: '¿Cuánto tiempo y caminata te apetecen?',
      options: {
        'quick-highlight': { label: 'Visita Rápida (1–2 h)', sub: 'Lugar compacto, pocos escalones, cerca del centro' },
        'halfday-immersion': { label: 'Inmersión de Medio Día (3–4 h)', sub: 'Caminata amplia por laberintos históricos y varios barrios' },
      },
    },
    de: {
      question: 'Wie viel Zeit und Fußweg möchtest du einplanen?',
      options: {
        'quick-highlight': { label: 'Kurzer Besuch (1–2 Std.)', sub: 'Kompakter Ort, wenig Stufen, nah am Zentrum' },
        'halfday-immersion': { label: 'Halbtages-Entdeckung (3–4 Std.)', sub: 'Ausgedehnter Spaziergang durch Altstadtgassen und mehrere Viertel' },
      },
    },
    ar: {
      question: 'كم من الوقت والمشي تفضل؟',
      options: {
        'quick-highlight': { label: 'جولة سريعة (1–2 ساعة)', sub: 'مكان مدمج، خطوات قليلة، قريب من وسط المدينة' },
        'halfday-immersion': { label: 'انغماس لنصف يوم (3–4 ساعات)', sub: 'مشي مطول عبر الأزقة التاريخية وعدة أحياء' },
      },
    },
  },
  'a4-companions': {
    fr: {
      question: 'Avec qui explorez-vous ?',
      options: {
        'solo-explorer': { label: 'Voyageur Solo', sub: 'À mon rythme, en toute liberté' },
        'romantic-couple': { label: 'Romantique / En couple', sub: 'Coins paisibles et vues panoramiques' },
        'family-seniors': { label: 'Famille avec enfants ou seniors', sub: 'Marche facile, confort adapté aux enfants' },
        'friends-group': { label: 'Groupe d’amis', sub: 'Moments partagés et bonne ambiance' },
      },
    },
    es: {
      question: '¿Quién explora contigo?',
      options: {
        'solo-explorer': { label: 'Explorador/a en Solitario', sub: 'A mi propio ritmo y con total libertad' },
        'romantic-couple': { label: 'Romántico / En Pareja', sub: 'Rincones tranquilos y vistas panorámicas' },
        'family-seniors': { label: 'Familia con niños o mayores', sub: 'Recorrido fácil y cómodo para todos' },
        'friends-group': { label: 'Grupo de Amigos', sub: 'Risas compartidas y energía en grupo' },
      },
    },
    de: {
      question: 'Mit wem gehst du auf Entdeckungstour?',
      options: {
        'solo-explorer': { label: 'Allein unterwegs', sub: 'Eigenes Tempo, eigene Entscheidungen' },
        'romantic-couple': { label: 'Romantisch / Zu zweit', sub: 'Ruhige Ecken und Panoramablicke' },
        'family-seniors': { label: 'Familie mit Kindern oder Senioren', sub: 'Leichte Wege, familienfreundlicher Komfort' },
        'friends-group': { label: 'Freundesgruppe', sub: 'Gemeinsamer Spaß und Gruppenenergie' },
      },
    },
    ar: {
      question: 'مع من تستكشف المكان؟',
      options: {
        'solo-explorer': { label: 'مستكشف فردي', sub: 'بوتيرتي الخاصة وبكل حرية' },
        'romantic-couple': { label: 'ثنائي / رومانسي', sub: 'زوايا هادئة وإطلالات بانورامية' },
        'family-seniors': { label: 'عائلة مع أطفال أو كبار سن', sub: 'مشي سهل وراحة مناسبة للعائلة' },
        'friends-group': { label: 'مجموعة أصدقاء', sub: 'أوقات ممتعة وطاقة جماعية' },
      },
    },
  },
  'a5-navigation': {
    fr: {
      question: 'Comment préférez-vous visiter ?',
      options: {
        'independent-wander': { label: 'Balade Libre Indépendante', sub: 'Visite autonome, à mon rythme, billet simple' },
        'storyteller-insider': { label: 'Avec un Guide Conteur Local', sub: 'Un guide agréé pour l’histoire secrète et les lieux cachés' },
      },
    },
    es: {
      question: '¿Cómo prefieres recorrer el lugar?',
      options: {
        'independent-wander': { label: 'Paseo Libre e Independiente', sub: 'Por tu cuenta, a tu ritmo y solo con entrada' },
        'storyteller-insider': { label: 'Con Guía Local Experto', sub: 'Guía oficial para descubrir secretos e historia oculta' },
      },
    },
    de: {
      question: 'Wie möchtest du die Orte erkunden?',
      options: {
        'independent-wander': { label: 'Frei & auf eigene Faust', sub: 'Selbstgeführt im eigenen Tempo, nur Eintritt' },
        'storyteller-insider': { label: 'Mit lokalem Geschichtenerzähler', sub: 'Lizenzierter Guide für geheime Ecken und Hintergrundwissen' },
      },
    },
    ar: {
      question: 'كيف تفضل استكشاف المكان؟',
      options: {
        'independent-wander': { label: 'تجول حر ومستقل', sub: 'بدون مرشد، بوتيرتك الخاصة وتذكرة دخول فقط' },
        'storyteller-insider': { label: 'مع مرشد محلي خبير', sub: 'مرشد مرخص يروي القصص والزوايا الخفية' },
      },
    },
  },
  'b2-terrain': {
    fr: {
      question: 'Quel relief marocain vous appelle ?',
      options: {
        'coastal-waves': { label: 'Vagues & Falaises de l’Atlantique', sub: 'Spots de surf, grottes marines, villages de pêcheurs' },
        'canyon-oasis': { label: 'Canyons, Sources & Palmeraies', sub: 'Gorges rocheuses, bassins naturels, sentiers de l’Atlas' },
        'dunes-wheels': { label: 'Dunes, Quads & Pistes du Désert', sub: 'Caravanes au coucher du soleil, dunes, quad et lagunes' },
      },
    },
    es: {
      question: '¿Qué paisaje marroquí te llama más?',
      options: {
        'coastal-waves': { label: 'Olas y Acantilados Atlánticos', sub: 'Olas para surf, cuevas marinas y pueblos pesqueros' },
        'canyon-oasis': { label: 'Cañones, Manantiales y Oasis', sub: 'Gargantas de roca, pozas de agua dulce y senderos del Atlas' },
        'dunes-wheels': { label: 'Dunas, Quads y Rutas del Desierto', sub: 'Caravanas en camello al atardecer, dunas y fauna' },
      },
    },
    de: {
      question: 'Welches marokkanische Gelände ruft dich?',
      options: {
        'coastal-waves': { label: 'Wellen & Atlantikklippen', sub: 'Surfspots, Meereshöhlen und Fischerdörfer' },
        'canyon-oasis': { label: 'Schluchten, Quellen & Palmenoasen', sub: 'Felscanyons, Naturpools und Atlas-Wanderwege' },
        'dunes-wheels': { label: 'Dünen, Quads & Wüstenpfade', sub: 'Kamelkarawanen bei Sonnenuntergang, Dünen und Quad-Touren' },
      },
    },
    ar: {
      question: 'أي تضاريس مغربية تناديك؟',
      options: {
        'coastal-waves': { label: 'الأمواج ومنحدرات المحيط الأطلسي', sub: 'أمواج ركوب الأمواج، مغارات بحرية وقرى الصيادين' },
        'canyon-oasis': { label: 'الأودية والينابيع وواحات النخيل', sub: 'أودية صخرية، مسابح طبيعية ومسارات الأطلس' },
        'dunes-wheels': { label: 'الكثبان والمركبات ومسارات الصحراء', sub: 'قوافل الجمال عند الغروب، كثبان رملية ودراجات رباعية' },
      },
    },
  },
  'b3-energy-mood': {
    fr: {
      question: 'Quel niveau d’énergie correspond à votre humeur ?',
      options: {
        'scenic-chill': { label: 'Panoramique, Calme & Doux', sub: 'Marche facile, points de vue, arrêts photo, balades au coucher du soleil' },
        'high-action': { label: 'Intense & Sportif', sub: 'Prendre les vagues, grimper dans les gorges, sorties en quad' },
      },
    },
    es: {
      question: '¿Qué nivel de energía encaja contigo?',
      options: {
        'scenic-chill': { label: 'Escénico, Tranquilo y Suave', sub: 'Caminata suave, miradores, fotos y paseos al atardecer' },
        'high-action': { label: 'Acción Intensa y Adrenalina', sub: 'Atrapar olas, escalar cañones o rutas en quad' },
      },
    },
    de: {
      question: 'Welches Aktivitätslevel passt zu deiner Stimmung?',
      options: {
        'scenic-chill': { label: 'Aussichtsreich & Entspannt', sub: 'Leichte Spaziergänge, Aussichtspunkte, Fotostopps' },
        'high-action': { label: 'Actionreich & Sportlich', sub: 'Wellenreiten, Klettern in Schluchten, Quad fahren' },
      },
    },
    ar: {
      question: 'ما مستوى الطاقة الذي يناسب مزاجك؟',
      options: {
        'scenic-chill': { label: 'مناظر خلابة وهدوء مريح', sub: 'مشي خفيف، نقاط مشاهدة وتصوير عند الغروب' },
        'high-action': { label: 'حركة عالية ومغامرة نشطة', sub: 'ركوب الأمواج، تسلق الأودية وقيادة الدراجات الرباعية' },
      },
    },
  },
  'b4-day-commitment': {
    fr: {
      question: 'Combien de temps de votre journée souhaitez-vous consacrer ?',
      options: {
        'half-day-trip': { label: 'Demi-Journée (2–4 h)', sub: 'Aux portes de la ville, retour pour déjeuner ou dîner' },
        'full-day-outpost': { label: 'Excursion Journée Complète (5 h+)', sub: 'Parcs nationaux, vallées profondes, villages côtiers cachés' },
      },
    },
    es: {
      question: '¿Cuánto tiempo del día quieres dedicarle?',
      options: {
        'half-day-trip': { label: 'Excursión de Medio Día (2–4 h)', sub: 'A las afueras de la ciudad, regreso para comer o cenar' },
        'full-day-outpost': { label: 'Expedición de Día Completo (5 h+)', sub: 'Parques nacionales, valles profundos y pueblos costeros' },
      },
    },
    de: {
      question: 'Wie viel Zeit möchtest du investieren?',
      options: {
        'half-day-trip': { label: 'Halbtagesausflug (2–4 Std.)', sub: 'Stadtrand, pünktlich zurück zum Mittag- oder Abendessen' },
        'full-day-outpost': { label: 'Ganztagestour (5+ Std.)', sub: 'Nationalparks, tiefe Täler, versteckte Küstendörfer' },
      },
    },
    ar: {
      question: 'كم من يومك ترغب في تخصيصه؟',
      options: {
        'half-day-trip': { label: 'رحلة نصف يوم (2–4 ساعات)', sub: 'أطراف المدينة والعودة للغداء أو العشاء' },
        'full-day-outpost': { label: 'رحلة يوم كامل (5+ ساعات)', sub: 'منتزهات وطنية، وديان عميقة وقرى ساحلية مخفية' },
      },
    },
  },
  'b5-party': {
    fr: {
      question: 'Qui compose votre groupe ?',
      options: {
        'adventure-solo-friends': { label: 'Solo / Amis en quête d’aventure', sub: 'Sensations accessibles dès le niveau débutant' },
        'couple-scenic-memories': { label: 'Couple en quête de beaux souvenirs', sub: 'Lumière dorée et instants calmes à deux' },
        'family-children': { label: 'Famille avec enfants', sub: 'Activités sûres et douces pour les plus jeunes' },
      },
    },
    es: {
      question: '¿Quién forma parte de tu grupo?',
      options: {
        'adventure-solo-friends': { label: 'Solo / Amigos en busca de aventura', sub: 'Emoción apta para principiantes en grupo' },
        'couple-scenic-memories': { label: 'Pareja buscando recuerdos únicos', sub: 'Vistas doradas al atardecer y momentos tranquilos' },
        'family-children': { label: 'Familia con niños', sub: 'Diversión segura y tranquila para los pequeños' },
      },
    },
    de: {
      question: 'Wer gehört zu deiner Reisegruppe?',
      options: {
        'adventure-solo-friends': { label: 'Allein / Freunde auf Abenteuersuche', sub: 'Anfängerfreundliche Erlebnisse zusammen' },
        'couple-scenic-memories': { label: 'Paar auf der Suche nach schönen Momenten', sub: 'Goldene Stunde und ruhige Zweisamkeit' },
        'family-children': { label: 'Familie mit Kindern', sub: 'Sicherer, sanfter Spaß für die Kleinen' },
      },
    },
    ar: {
      question: 'من يرافقك في هذه المغامرة؟',
      options: {
        'adventure-solo-friends': { label: 'فردي / أصدقاء باحثون عن المغامرة', sub: 'إثارة مناسبة للمبتدئين معاً' },
        'couple-scenic-memories': { label: 'ثنائي يبحث عن ذكريات جميلة', sub: 'إطلالات الغروب ولحظات هادئة' },
        'family-children': { label: 'عائلة مع أطفال', sub: 'أنشطة آمنة وممتعة للصغار' },
      },
    },
  },
  'c2-unwind': {
    fr: {
      question: 'Comment aimeriez-vous vous détendre ?',
      options: {
        'hammam-steam': { label: 'Hammam Traditionnel & Bain de Vapeur', sub: 'Marbre chauffé, gommage au savon noir à l’eucalyptus, massage à l’argan' },
        'artisan-masterclass': { label: 'Ateliers Artisanaux Pratiques', sub: 'Poterie, cuisine de tagine ou maroquinerie avec des maîtres artisans' },
        'botanical-sanctuary': { label: 'Jardins Botaniques & Nature Calme', sub: 'Jardins ombragés, vallées verdoyantes et parcs préservés' },
      },
    },
    es: {
      question: '¿Cómo te gustaría desconectar?',
      options: {
        'hammam-steam': { label: 'Hammam Tradicional y Baño de Vapor', sub: 'Mármol caliente, exfoliación con jabón negro y masaje con argán' },
        'artisan-masterclass': { label: 'Talleres Prácticos de Artesanía', sub: 'Cerámica, cocina de tayín o cuero con maestros artesanos' },
        'botanical-sanctuary': { label: 'Jardines Botánicos y Naturaleza Tranquila', sub: 'Jardines con sombra, parques y reservas naturales' },
      },
    },
    de: {
      question: 'Wie möchtest du am liebsten abschalten?',
      options: {
        'hammam-steam': { label: 'Traditioneller Hammam & Dampfbad', sub: 'Warmer Marmor, Peeling mit schwarzer Seife, Arganöl-Massage' },
        'artisan-masterclass': { label: 'Praxisnahe Kunsthandwerks-Kurse', sub: 'Töpfern, Tajine-Kochen oder Lederkunst mit Meisterhandwerkern' },
        'botanical-sanctuary': { label: 'Botanische Gärten & Ruhige Natur', sub: 'Schattige Gärten, exotische Parks und Schutzgebiete' },
      },
    },
    ar: {
      question: 'كيف تفضل الاسترخاء وتجديد نشاطك؟',
      options: {
        'hammam-steam': { label: 'الحمام المغربي التقليدي والبخار', sub: 'رخام دافئ، صابون بلدي بالأوكالبتوس وتدليك بزيت الأركان' },
        'artisan-masterclass': { label: 'ورش عمل حرفية وتفاعلية', sub: 'صناعة الفخار، طبخ الطاجين أو الجلد مع معلمين حرفيين' },
        'botanical-sanctuary': { label: 'حدائق نباتية وطبيعة هادئة', sub: 'حدائق مظللة ومنتزهات طبيعية هادئة' },
      },
    },
  },
  'c3-tier': {
    fr: {
      question: 'Quel niveau d’expérience préférez-vous ?',
      options: {
        'authentic-local': { label: 'Authentique & Traditionnel (Style Local)', sub: 'Tarifs de quartier, culture authentique, sans superflu' },
        'premium-pampered': { label: 'Sanctuaire Premium & Soins Haut de Gamme', sub: 'Cabines privées, peignoirs moelleux, soins à l’argan bio' },
      },
    },
    es: {
      question: '¿Qué categoría de experiencia prefieres?',
      options: {
        'authentic-local': { label: 'Auténtico y Tradicional (Estilo Local)', sub: 'Precios locales, cultura genuina y sin sobrecostes' },
        'premium-pampered': { label: 'Santuario Premium y Cuidado Exclusivo', sub: 'Cabinas privadas, albornoces suaves y aceites de argán ecológicos' },
      },
    },
    de: {
      question: 'Welches Niveau bevorzugst du?',
      options: {
        'authentic-local': { label: 'Authentisch & Traditionell (Lokal)', sub: 'Nachbarschaftspreise, echte Kultur ohne Luxusaufschlag' },
        'premium-pampered': { label: 'Premium & Verwöhn-Oase', sub: 'Private Kabinen, weiche Bademäntel, Bio-Argan-Behandlungen' },
      },
    },
    ar: {
      question: 'ما مستوى التجربة الذي تفضله؟',
      options: {
        'authentic-local': { label: 'أصيل وتقليدي (طابع محلي)', sub: 'أسعار محلية، ثقافة حقيقية بدون تكلف' },
        'premium-pampered': { label: 'ملاذ فاخر وعناية متكاملة', sub: 'غرف خاصة، أرواب فاخرة وزيوت أركان عضوية' },
      },
    },
  },
  'c4-dedication': {
    fr: {
      question: 'Combien de temps voulez-vous y consacrer ?',
      options: {
        'express-reset': { label: 'Pause Express (1–2 h)', sub: 'Gommage et massage ciblés, ou courte balade dans un jardin' },
        'unrushed-halfday': { label: 'Demi-Journée Détente (3–4 h)', sub: 'Rituel complet multi-étapes avec salon de thé à la menthe' },
      },
    },
    es: {
      question: '¿Cuánto tiempo quieres dedicarle?',
      options: {
        'express-reset': { label: 'Pausa Exprés (1–2 h)', sub: 'Exfoliación y masaje, o un paseo tranquilo por un jardín' },
        'unrushed-halfday': { label: 'Medio Día sin Prisas (3–4 h)', sub: 'Ritual completo paso a paso con salón de té a la menta' },
      },
    },
    de: {
      question: 'Wie viel Zeit möchtest du dir nehmen?',
      options: {
        'express-reset': { label: 'Express-Auszeit (1–2 Std.)', sub: 'Fokussiertes Peeling & Massage oder ein kurzer Gartenspaziergang' },
        'unrushed-halfday': { label: 'Entspannter Halbtag (3–4 Std.)', sub: 'Komplettes Verwöhnritual inklusive Minztee-Lounge' },
      },
    },
    ar: {
      question: 'كم من الوقت تود تخصيصه؟',
      options: {
        'express-reset': { label: 'استراحة سريعة (1–2 ساعة)', sub: 'جلسة تقشير وتدليك مركزة أو نزهة قصيرة في حديقة' },
        'unrushed-halfday': { label: 'نصف يوم بلا استعجال (3–4 ساعات)', sub: 'تجربة متكاملة مع استراحة شاي بالنعناع' },
      },
    },
  },
  'c5-privacy': {
    fr: {
      question: 'Quelle est votre préférence en matière d’intimité ?',
      options: {
        'private-exclusive': { label: 'Retraite Privée & Exclusive', sub: 'Salles de soins privatives, aucun mélange avec d’autres groupes' },
        'social-family-friendly': { label: 'Ouvert, Convivial & Familial', sub: 'Ateliers partagés, jardins ouverts, idéal pour petits groupes' },
      },
    },
    es: {
      question: '¿Cuál es tu preferencia de privacidad?',
      options: {
        'private-exclusive': { label: 'Retiro Privado y Exclusivo', sub: 'Salas de tratamiento privadas, sin compartir grupo' },
        'social-family-friendly': { label: 'Social, Abierto y Familiar', sub: 'Talleres compartidos, jardines abiertos, ideal para grupos' },
      },
    },
    de: {
      question: 'Welche Privatsphäre wünschst du dir?',
      options: {
        'private-exclusive': { label: 'Privat & Exklusiv', sub: 'Private Behandlungsräume ohne fremde Gruppen' },
        'social-family-friendly': { label: 'Offen, Gesellig & Familienfreundlich', sub: 'Gemeinsame Workshops, offene Gärten für kleine Gruppen' },
      },
    },
    ar: {
      question: 'ما تفضيلك بخصوص الخصوصية؟',
      options: {
        'private-exclusive': { label: 'تجربة خاصة وحصرية', sub: 'غرف علاج خاصة دون الاختلاط بمجموعات أخرى' },
        'social-family-friendly': { label: 'مفتوح ومناسب للعائلات والمجموعات', sub: 'ورش مشتركة وحدائق مفتوحة وممتعة للجميع' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // FOOD QUIZ
  // ═══════════════════════════════════════════════════════════════════
  'food-time': {
    fr: {
      question: 'Quand prévoyez-vous de manger ?',
      options: {
        breakfast: { label: 'Matin / Petit-déjeuner' },
        lunch: { label: 'Midi / Déjeuner' },
        dinner: { label: 'Soir / Dîner' },
        flexible: { label: 'À tout moment / Snacks' },
      },
    },
    es: {
      question: '¿Cuándo planeas comer?',
      options: {
        breakfast: { label: 'Mañana / Desayuno' },
        lunch: { label: 'Mediodía / Almuerzo' },
        dinner: { label: 'Noche / Cena' },
        flexible: { label: 'A cualquier hora / Tapas' },
      },
    },
    de: {
      question: 'Wann möchtest du essen gehen?',
      options: {
        breakfast: { label: 'Morgens / Frühstück' },
        lunch: { label: 'Mittags / Mittagessen' },
        dinner: { label: 'Abends / Abendessen' },
        flexible: { label: 'Jederzeit / Snacks' },
      },
    },
    ar: {
      question: 'متى تخطط لتناول الطعام؟',
      options: {
        breakfast: { label: 'الصباح / الفطور' },
        lunch: { label: 'منتصف اليوم / الغداء' },
        dinner: { label: 'المساء / العشاء' },
        flexible: { label: 'في أي وقت / وجبات خفيفة' },
      },
    },
  },
  'food-diet': {
    fr: {
      question: 'Avez-vous des préférences alimentaires ?',
      options: {
        halal: { label: '100 % Halal' },
        vegetarian: { label: 'Options Végétariennes' },
        alcohol: { label: 'Sert de l’Alcool' },
      },
    },
    es: {
      question: '¿Alguna preferencia alimentaria?',
      options: {
        halal: { label: 'Solo Halal' },
        vegetarian: { label: 'Apto para Vegetarianos' },
        alcohol: { label: 'Sirve Alcohol' },
      },
    },
    de: {
      question: 'Besondere Ernährungs- oder Getränkewünsche?',
      options: {
        halal: { label: 'Nur Halal' },
        vegetarian: { label: 'Vegetarierfreundlich' },
        alcohol: { label: 'Ausschank von Alkohol' },
      },
    },
    ar: {
      question: 'هل لديك أي تفضيلات غذائية؟',
      options: {
        halal: { label: 'حلال فقط' },
        vegetarian: { label: 'مناسب للنباتيين' },
        alcohol: { label: 'يقدم مشروبات كحولية' },
      },
    },
  },
  'food-cuisine': {
    fr: {
      question: 'De quelle cuisine avez-vous envie ?',
      options: {
        'moroccan-traditional': { label: 'Marocaine Traditionnelle', sub: 'Tagine, couscous, pastilla, le vrai goût local' },
        international: { label: 'Internationale & Fusion', sub: 'Italien, asiatique, français ou fusion créative' },
        'cafe-pastry': { label: 'Café & Pâtisseries', sub: 'Cafés, boulangeries et douceurs sucrées' },
        seafood: { label: 'Poissons & Fruits de Mer', sub: 'Pêche du jour et saveurs côtières' },
      },
    },
    es: {
      question: '¿Qué tipo de cocina te apetece?',
      options: {
        'moroccan-traditional': { label: 'Marroquí Tradicional', sub: 'Tayín, cuscús, pastela y sabor auténtico' },
        international: { label: 'Internacional y Fusión', sub: 'Italiana, asiática, francesa o fusión creativa' },
        'cafe-pastry': { label: 'Café y Repostería', sub: 'Cafeterías, pastelerías y dulces' },
        seafood: { label: 'Mariscos y Pescado Fresco', sub: 'Pesca del día y platos costeros' },
      },
    },
    de: {
      question: 'Worauf hast du Appetit?',
      options: {
        'moroccan-traditional': { label: 'Traditionell Marokkanisch', sub: 'Tajine, Couscous, Pastilla – echte Landesküche' },
        international: { label: 'International & Fusion', sub: 'Italienisch, asiatisch, französisch oder kreative Fusion' },
        'cafe-pastry': { label: 'Café & Gebäck', sub: 'Kaffeehäuser, Patisserien und süße Leckereien' },
        seafood: { label: 'Frischer Fisch & Meeresfrüchte', sub: 'Tagesfang und Küstenküche' },
      },
    },
    ar: {
      question: 'ما نوع المطبخ الذي تشتهيه؟',
      options: {
        'moroccan-traditional': { label: 'مغربي تقليدي', sub: 'طاجين، كسكس، بسطيلة وأطباق مغربية أصيلة' },
        international: { label: 'عالمي وفيوجن', sub: 'إيطالي، آسيوي، فرنسي أو أطباق مبتكرة' },
        'cafe-pastry': { label: 'مقاهي وحلويات', sub: 'قهوة مختصة، مخبوزات وحلويات' },
        seafood: { label: 'مأكولات بحرية طازجة', sub: 'صيد اليوم وأطباق ساحلية شهية' },
      },
    },
  },
  'food-vibe': {
    fr: {
      question: 'Quelle ambiance recherchez-vous pour votre repas ?',
      options: {
        rooftop: { label: 'Rooftop & Vues Panoramiques' },
        street: { label: 'Street Food Authentique' },
        fine: { label: 'Moderne & Chic' },
        hole: { label: 'Pépite Locale Cachée' },
      },
    },
    es: {
      question: '¿Qué ambiente buscas para comer?',
      options: {
        rooftop: { label: 'Azotea con Vistas' },
        street: { label: 'Comida Callejera Auténtica' },
        fine: { label: 'Moderno y Elegante' },
        hole: { label: 'Joya Local Escondida' },
      },
    },
    de: {
      question: 'Welche Atmosphäre soll das Restaurant haben?',
      options: {
        rooftop: { label: 'Dachterrasse & Aussicht' },
        street: { label: 'Authentisches Street Food' },
        fine: { label: 'Modern & Schick' },
        hole: { label: 'Versteckter Geheimtipp' },
      },
    },
    ar: {
      question: 'ما هي الأجواء التي تفضلها أثناء الطعام؟',
      options: {
        rooftop: { label: 'سطح بإطلالة رائعة' },
        street: { label: 'أكل شارع أصيل' },
        fine: { label: 'عصري وأنيق' },
        hole: { label: 'جوهرة محلية مخفية' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SLEEP / STAY QUIZ
  // ═══════════════════════════════════════════════════════════════════
  'sleep-type': {
    fr: {
      question: 'Où souhaitez-vous vous réveiller ?',
      options: {
        riad: { label: 'Riad Historique', sub: 'Palais traditionnel de la médina' },
        hotel: { label: 'Hôtel Boutique Moderne', sub: 'Confort contemporain' },
        'desert-camp': { label: 'Bivouac dans le Désert', sub: 'Sous les étoiles' },
        kasbah: { label: 'Kasbah Ancienne', sub: 'Architecture fortifiée en pisé' },
      },
    },
    es: {
      question: '¿Dónde te gustaría despertar?',
      options: {
        riad: { label: 'Riad Tradicional', sub: 'Palacio tradicional en la medina' },
        hotel: { label: 'Hotel Boutique Moderno', sub: 'Comodidad contemporánea' },
        'desert-camp': { label: 'Campamento en el Desierto', sub: 'Bajo las estrellas' },
        kasbah: { label: 'Kasbah Antigua', sub: 'Fortaleza histórica del sur' },
      },
    },
    de: {
      question: 'Wo möchtest du morgens aufwachen?',
      options: {
        riad: { label: 'Traditioneller Riad', sub: 'Historischer Innenhofpalast in der Medina' },
        hotel: { label: 'Modernes Boutique-Hotel', sub: 'Zeitgemäßer Komfort' },
        'desert-camp': { label: 'Wüstencamp', sub: 'Unter dem Sternenhimmel' },
        kasbah: { label: 'Alte Kasbah', sub: 'Historische Lehmfestung' },
      },
    },
    ar: {
      question: 'أين تود الاستيقاظ صباحاً؟',
      options: {
        riad: { label: 'رياض تقليدي عريق', sub: 'دار تقليدية في قلب المدينة العتيقة' },
        hotel: { label: 'فندق بوتيك عصري', sub: 'راحة وتصميم معاصر' },
        'desert-camp': { label: 'مخيم صحراوي', sub: 'تحت سماء النجوم' },
        kasbah: { label: 'قصبة تاريخية', sub: 'عمارة تراثية أصيلة' },
      },
    },
  },
  'sleep-location': {
    fr: {
      question: 'Où devrait se situer votre hébergement ?',
      options: {
        'medina-heart': { label: 'Cœur de la Médina', sub: 'Dans les remparts historiques, à deux pas de l’action' },
        'ville-nouvelle': { label: 'Quartier Moderne (Ville Nouvelle)', sub: 'Larges avenues, confort moderne, parking facile' },
        countryside: { label: 'Campagne & Nature', sub: 'Paisible, entouré de palmiers ou de montagnes' },
      },
    },
    es: {
      question: '¿Dónde prefieres alojarte?',
      options: {
        'medina-heart': { label: 'Corazón de la Medina', sub: 'Dentro de las murallas históricas, cerca de todo' },
        'ville-nouvelle': { label: 'Zona Moderna', sub: 'Calles amplias, confort actual y fácil acceso' },
        countryside: { label: 'Campo y Naturaleza', sub: 'Tranquilo, rodeado de palmeras o montañas' },
      },
    },
    de: {
      question: 'In welcher Lage soll deine Unterkunft sein?',
      options: {
        'medina-heart': { label: 'Mitten in der Medina', sub: 'Innerhalb der alten Stadtmauern, nah am Geschehen' },
        'ville-nouvelle': { label: 'Modernes Stadtviertel', sub: 'Breite Straßen, gewohnter Komfort, leichtes Parken' },
        countryside: { label: 'Natur & Umland', sub: 'Ruhig gelegen zwischen Palmen oder Bergen' },
      },
    },
    ar: {
      question: 'أين تفضل موقع إقامتك؟',
      options: {
        'medina-heart': { label: 'قلب المدينة العتيقة', sub: 'داخل الأسوار التاريخية وبالقرب من المعالم والأسواق' },
        'ville-nouvelle': { label: 'الحي العصري الحديث', sub: 'شوارع واسعة، راحة حديثة وسهولة الوصول بالسيارة' },
        countryside: { label: 'الطبيعة والضواحي الهادئة', sub: 'أجواء هادئة وسط النخيل أو الجبال' },
      },
    },
  },
  'sleep-priority': {
    fr: {
      question: 'Quels sont vos critères indispensables ?',
      options: {
        pool: { label: 'Piscine' },
        ac: { label: 'Climatisation' },
        rooftop: { label: 'Terrasse sur le toit' },
        quiet: { label: 'Calme & Tranquillité' },
      },
    },
    es: {
      question: '¿Qué es imprescindible para ti?',
      options: {
        pool: { label: 'Piscina' },
        ac: { label: 'Aire Acondicionado' },
        rooftop: { label: 'Terraza en la Azotea' },
        quiet: { label: 'Paz y Silencio' },
      },
    },
    de: {
      question: 'Was darf auf keinen Fall fehlen?',
      options: {
        pool: { label: 'Swimmingpool' },
        ac: { label: 'Klimaanlage' },
        rooftop: { label: 'Dachterrasse' },
        quiet: { label: 'Ruhe & Entspannung' },
      },
    },
    ar: {
      question: 'ما هي المزايا الأساسية التي لا غنى عنها؟',
      options: {
        pool: { label: 'مسبح' },
        ac: { label: 'تكييف هواء' },
        rooftop: { label: 'تراس على السطح' },
        quiet: { label: 'هدوء وسكينة' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SHOPPING QUIZ
  // ═══════════════════════════════════════════════════════════════════
  'shop-target': {
    fr: {
      question: 'Que recherchez-vous en priorité ?',
      options: {
        souvenirs: { label: 'Souvenirs & Cadeaux' },
        leather: { label: 'Cuir & Textiles' },
        ceramics: { label: 'Céramiques & Déco' },
        spices: { label: 'Épices & Huiles' },
      },
    },
    es: {
      question: '¿Qué estás buscando comprar?',
      options: {
        souvenirs: { label: 'Recuerdos y Regalos' },
        leather: { label: 'Cuero y Textiles' },
        ceramics: { label: 'Cerámica y Decoración' },
        spices: { label: 'Especias y Aceites' },
      },
    },
    de: {
      question: 'Wonach suchst du beim Einkaufen?',
      options: {
        souvenirs: { label: 'Souvenirs & Geschenke' },
        leather: { label: 'Leder & Textilien' },
        ceramics: { label: 'Keramik & Deko' },
        spices: { label: 'Gewürze & Öle' },
      },
    },
    ar: {
      question: 'ما الذي تبحث عنه أثناء التسوق؟',
      options: {
        souvenirs: { label: 'هدايا وتذكارات' },
        leather: { label: 'جلود ومنسوجات' },
        ceramics: { label: 'خزف وديكور' },
        spices: { label: 'توابل وزيوت' },
      },
    },
  },
  'shop-style': {
    fr: {
      question: 'Quel style de shopping appréciez-vous ?',
      options: {
        'live-workshop': { label: 'Voir les artisans travailler', sub: 'Ateliers de création en direct' },
        'fixed-price': { label: 'Prix fixes sans négociation', sub: 'Acheter sereinement sans marchander' },
        'local-favorite': { label: 'Adresses préférées des locaux', sub: 'Là où les habitants font leurs achats' },
      },
    },
    es: {
      question: '¿Qué estilo de compras disfrutas más?',
      options: {
        'live-workshop': { label: 'Ver trabajar a los artesanos', sub: 'Talleres artesanales en vivo' },
        'fixed-price': { label: 'Precios fijos y tranquilos', sub: 'Sin necesidad de regatear' },
        'local-favorite': { label: 'Favoritos locales', sub: 'Donde compran los propios marroquíes' },
      },
    },
    de: {
      question: 'Wie kaufst du am liebsten ein?',
      options: {
        'live-workshop': { label: 'Handwerkern zusehen', sub: 'Lebendige Werkstätten vor Ort' },
        'fixed-price': { label: 'Entspannte Festpreise', sub: 'Ohne Handeln einkaufen' },
        'local-favorite': { label: 'Lieblingsorte der Einheimischen', sub: 'Wo Einheimische wirklich einkaufen' },
      },
    },
    ar: {
      question: 'ما أسلوب التسوق الذي تستمتع به؟',
      options: {
        'live-workshop': { label: 'مشاهدة الحرفيين أثناء العمل', sub: 'ورش حية للصناعة التقليدية' },
        'fixed-price': { label: 'أسعار ثابتة ومريحة', sub: 'بدون الحاجة للمساومة' },
        'local-favorite': { label: 'أماكن مفضلة للسكان المحليين', sub: 'حيث يتسوق أهل المدينة' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // EXPERIENCES QUIZ
  // ═══════════════════════════════════════════════════════════════════
  'exp-type': {
    fr: {
      question: 'Quel genre d’expérience vous fait vibrer ?',
      options: {
        nature: { label: 'Nature Brute' },
        cultural: { label: 'Immersion Culturelle' },
        adrenaline: { label: 'Pure Adrénaline' },
      },
    },
    es: {
      question: '¿Qué tipo de experiencia te emociona más?',
      options: {
        nature: { label: 'Naturaleza Pura' },
        cultural: { label: 'Cultura Profunda' },
        adrenaline: { label: 'Pura Adrenalina' },
      },
    },
    de: {
      question: 'Welche Art von Erlebnis begeistert dich?',
      options: {
        nature: { label: 'Pure Natur' },
        cultural: { label: 'Tiefe Kultur' },
        adrenaline: { label: 'Pures Adrenalin' },
      },
    },
    ar: {
      question: 'أي نوع من التجارب يثير حماسك؟',
      options: {
        nature: { label: 'طبيعة خام' },
        cultural: { label: 'ثقافة عميقة' },
        adrenaline: { label: 'أدرينالين ومغامرة' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // LEGACY THINGS-TO-DO & SUB-CATEGORY QUIZZES
  // ═══════════════════════════════════════════════════════════════════
  setting: {
    fr: {
      question: 'Où souhaitez-vous aller ?',
      options: {
        medina: { label: 'Médina', sub: 'Centres historiques anciens' },
        nature: { label: 'Nature & Campagne', sub: 'Montagnes, oasis et vallées' },
        desert: { label: 'Désert', sub: 'Dunes de sable et plateaux rocheux' },
        coastal: { label: 'Côte & Océan', sub: 'Plages et villes portuaires' },
      },
    },
    es: {
      question: '¿Dónde te gustaría estar?',
      options: {
        medina: { label: 'Medina', sub: 'Cascos antiguos históricos' },
        nature: { label: 'Naturaleza y Campo', sub: 'Montañas, oasis y zonas rurales' },
        desert: { label: 'Desierto', sub: 'Dunas de arena y mesetas rocosas' },
        coastal: { label: 'Costa', sub: 'Playas y ciudades portuarias' },
      },
    },
    de: {
      question: 'Wo möchtest du dich aufhalten?',
      options: {
        medina: { label: 'Medina', sub: 'Historische Altstädte' },
        nature: { label: 'Natur & Land', sub: 'Berge, Oasen und Landschaft' },
        desert: { label: 'Wüste', sub: 'Sanddünen und Steinwüsten' },
        coastal: { label: 'Küste', sub: 'Strände und Hafenstädte' },
      },
    },
    ar: {
      question: 'أين تفضل قضاء وقتك؟',
      options: {
        medina: { label: 'المدينة العتيقة', sub: 'المراكز التاريخية القديمة' },
        nature: { label: 'الطبيعة والريف', sub: 'الجبال والواحات والقرى' },
        desert: { label: 'الصحراء', sub: 'الكثبان الرملية والهضاب الصخرية' },
        coastal: { label: 'الساحل', sub: 'الشواطئ والمدن الساحلية' },
      },
    },
  },
  interests: {
    fr: {
      question: 'Que souhaitez-vous découvrir ?',
      options: {
        culture: { label: 'Histoire & Patrimoine', sub: 'Palais, médinas et cités anciennes' },
        food: { label: 'Gastronomie & Cuisine', sub: 'Marchés, cours de cuisine, dégustations' },
        adventure: { label: 'Aventure & Plein Air', sub: 'Randonnées, surf, excursions désert' },
        slow: { label: 'Hammam & Bien-être', sub: 'Spas, hammams et détente douce' },
      },
    },
    es: {
      question: '¿Qué quieres experimentar?',
      options: {
        culture: { label: 'Historia y Patrimonio', sub: 'Palacios, medinas y ciudades antiguas' },
        food: { label: 'Gastronomía y Cocina', sub: 'Mercados, clases de cocina, degustaciones' },
        adventure: { label: 'Aventura y Aire Libre', sub: 'Senderismo, surf, rutas por el desierto' },
        slow: { label: 'Hammam y Bienestar', sub: 'Spas, hammams y relajación' },
      },
    },
    de: {
      question: 'Was möchtest du erleben?',
      options: {
        culture: { label: 'Geschichte & Erbe', sub: 'Paläste, Medinas und antike Städte' },
        food: { label: 'Essen & Kochen', sub: 'Märkte, Kochkurse, Verkostungen' },
        adventure: { label: 'Abenteuer & Outdoor', sub: 'Trekking, Surfen, Wüstentouren' },
        slow: { label: 'Hammam & Wellness', sub: 'Spas, Hammams und Entspannung' },
      },
    },
    ar: {
      question: 'ماذا تود أن تجرب؟',
      options: {
        culture: { label: 'التاريخ والتراث', sub: 'القصور والمدن العتيقة والآثار' },
        food: { label: 'الطعام والطبخ', sub: 'الأسواق، دروس الطبخ والتذوق' },
        adventure: { label: 'المغامرة والهواء الطلق', sub: 'المشي الجبلي، ركوب الأمواج ورحلات الصحراء' },
        slow: { label: 'الحمام والاستجمام', sub: 'المنتجعات الصحية والحمامات التقليدية' },
      },
    },
  },
  'energy-level': {
    fr: {
      question: 'Quel rythme physique souhaitez-vous ?',
      options: {
        relaxed: { label: 'Zen & Tranquille', sub: 'Effort physique minimal' },
        moderate: { label: 'Régulier & Curieux', sub: 'Exploration modérée' },
        active: { label: 'À Fond l’Énergie', sub: 'Beaucoup de marche et de mouvement' },
      },
    },
    es: {
      question: '¿Qué ritmo físico prefieres para tus días?',
      options: {
        relaxed: { label: 'Zen y Tranquilo', sub: 'Poco esfuerzo físico' },
        moderate: { label: 'Constante y Curioso', sub: 'Exploración estándar' },
        active: { label: 'A Tope de Energía', sub: 'Mucho movimiento y caminata' },
      },
    },
    de: {
      question: 'Wie aktiv sollen deine Tage sein?',
      options: {
        relaxed: { label: 'Zen & Entspannt', sub: 'Wenig körperliche Anstrengung' },
        moderate: { label: 'Ausgeglichen & Neugierig', sub: 'Normales Erkundungstempo' },
        active: { label: 'Volle Energie', sub: 'Viel Bewegung und lange Strecken' },
      },
    },
    ar: {
      question: 'ما مستوى النشاط البدني المناسب لك؟',
      options: {
        relaxed: { label: 'هدوء واسترخاء', sub: 'مجهود بدني قليل' },
        moderate: { label: 'متوازن وفضولي', sub: 'استكشاف معتدل' },
        active: { label: 'نشاط وحركة كاملة', sub: 'الكثير من المشي والحركة' },
      },
    },
  },
  vibe: {
    fr: {
      question: 'Quel style d’expérience vous attire ?',
      options: {
        authentic: { label: 'Local & Authentique', sub: 'Expériences vraies, loin des clichés touristiques' },
        instagrammable: { label: 'Spots Photogéniques', sub: 'Lieux emblématiques et esthétiques' },
        relaxed: { label: 'Facile & Sans Hâte', sub: 'Rythme doux et sans pression' },
        'off-the-beaten-path': { label: 'Trésors Cachés', sub: 'Hors des sentiers battus' },
      },
    },
    es: {
      question: '¿Qué estilo de experiencias te atrae?',
      options: {
        authentic: { label: 'Local y Genuino', sub: 'Experiencias auténticas, nada turísticas' },
        instagrammable: { label: 'Lugares Fotogénicos', sub: 'Sitios icónicos y muy visuales' },
        relaxed: { label: 'Tranquilo y Sin Prisas', sub: 'Ritmo suave y sin agobios' },
        'off-the-beaten-path': { label: 'Joyas Ocultas', sub: 'Lejos de las multitudes' },
      },
    },
    de: {
      question: 'Welche Art von Erlebnissen zieht dich an?',
      options: {
        authentic: { label: 'Lokal & Authentisch', sub: 'Echte, untouristische Erlebnisse' },
        instagrammable: { label: 'Fotogene Orte', sub: 'Visuell beeindruckende Highlights' },
        relaxed: { label: 'Entspannt & Gemütlich', sub: 'Langsames Tempo ohne Druck' },
        'off-the-beaten-path': { label: 'Geheimtipps abseits der Massen', sub: 'Ruhige Ecken fernab vom Trubel' },
      },
    },
    ar: {
      question: 'ما نوع التجارب التي تميل إليها؟',
      options: {
        authentic: { label: 'محلي وأصيل', sub: 'تجارب حقيقية بعيدة عن المظاهر السياحية' },
        instagrammable: { label: 'أماكن مثالية للتصوير', sub: 'معالم خلابة ومميزة بصرياً' },
        relaxed: { label: 'مريح وهادئ', sub: 'وتيرة بطيئة بدون ضغط' },
        'off-the-beaten-path': { label: 'جواهر مخفية', sub: 'بعيداً عن الازدحام المعتاد' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SPORT SUB-QUIZZES
  // ═══════════════════════════════════════════════════════════════════
  'sport-distance': {
    fr: {
      question: 'Quelle distance maximale acceptez-vous ?',
      options: {
        walkable: { label: 'À pied (< 15 min)', sub: 'Depuis votre quartier' },
        'short-drive': { label: 'Court trajet (15–30 min)', sub: 'En taxi ou voiture' },
        anywhere: { label: 'Partout en ville', sub: 'La meilleure option quelle que soit la distance' },
      },
    },
    es: {
      question: '¿Qué distancia máxima prefieres?',
      options: {
        walkable: { label: 'A pie (< 15 min)', sub: 'Caminando desde tu zona' },
        'short-drive': { label: 'Trayecto corto (15–30 min)', sub: 'En taxi o coche' },
        anywhere: { label: 'En cualquier parte de la ciudad', sub: 'La mejor opción sin importar la distancia' },
      },
    },
    de: {
      question: 'Wie weit darf der Trainingsort entfernt sein?',
      options: {
        walkable: { label: 'Zu Fuß (< 15 Min.)', sub: 'Bequem erreichbar' },
        'short-drive': { label: 'Kurze Fahrt (15–30 Min.)', sub: 'Mit Taxi oder Auto' },
        anywhere: { label: 'Überall in der Stadt', sub: 'Die beste Option unabhängig von der Entfernung' },
      },
    },
    ar: {
      question: 'ما المسافة المناسبة لك للوصول؟',
      options: {
        walkable: { label: 'على الأقدام (أقل من 15 دقيقة)', sub: 'قريب من منطقتك' },
        'short-drive': { label: 'مسافة قصيرة بالسيارة (15–30 دقيقة)', sub: 'بالتاكسي أو السيارة' },
        anywhere: { label: 'في أي مكان بالمدينة', sub: 'أفضل خيار بغض النظر عن المسافة' },
      },
    },
  },
  'sport-facility-needs': {
    fr: {
      question: 'Des équipements indispensables pour vous entraîner ?',
      options: {
        'day-pass': { label: 'Pass à la journée disponible', sub: 'Sans abonnement' },
        weights: { label: 'Espace musculation complet', sub: 'Poids libres & machines' },
        'pool-access': { label: 'Piscine', sub: 'Bassin de nage ou détente' },
        ac: { label: 'Salle climatisée', sub: 'Température régulée' },
        classes: { label: 'Cours collectifs', sub: 'Séances encadrées' },
        'women-only': { label: 'Horaires réservés aux femmes', sub: 'Séances dédiées aux femmes' },
      },
    },
    es: {
      question: '¿Qué requisitos son clave en tu centro deportivo?',
      options: {
        'day-pass': { label: 'Pase diario disponible', sub: 'Sin necesidad de suscripción' },
        weights: { label: 'Zona de pesas completa', sub: 'Pesas libres y máquinas' },
        'pool-access': { label: 'Piscina', sub: 'Piscina de nado o ocio' },
        ac: { label: 'Aire acondicionado', sub: 'Espacio climatizado' },
        classes: { label: 'Clases en grupo', sub: 'Sesiones con horario' },
        'women-only': { label: 'Horarios solo para mujeres', sub: 'Sesiones exclusivas para mujeres' },
      },
    },
    de: {
      question: 'Was ist dir beim Trainingsort wichtig?',
      options: {
        'day-pass': { label: 'Tageskarte verfügbar', sub: 'Keine Mitgliedschaft nötig' },
        weights: { label: 'Kompletter Kraftbereich', sub: 'Freihanteln & Geräte' },
        'pool-access': { label: 'Schwimmbad', sub: 'Sport- oder Freizeitbecken' },
        ac: { label: 'Klimatisiert', sub: 'Angenehme Raumtemperatur' },
        classes: { label: 'Gruppenkurse', sub: 'Feste Kurszeiten' },
        'women-only': { label: 'Nur für Frauen (Zeiten)', sub: 'Eigene Trainingszeiten für Frauen' },
      },
    },
    ar: {
      question: 'ما هي المرافق الضرورية في مكان التمرين؟',
      options: {
        'day-pass': { label: 'تذكرة دخول يومية', sub: 'بدون اشتراك شهري' },
        weights: { label: 'قاعة أوزان متكاملة', sub: 'أوزان حرة وأجهزة' },
        'pool-access': { label: 'مسبح', sub: 'مسبح رياضي أو ترفيهي' },
        ac: { label: 'مكيف هواء', sub: 'جو معتدل ومكيف' },
        classes: { label: 'حصص جماعية', sub: 'تمارين مجدولة' },
        'women-only': { label: 'أوقات مخصصة للنساء', sub: 'حصص خاصة بالنساء' },
      },
    },
  },
  'sport-experience-type': {
    fr: {
      question: 'Quel type d’expérience sportive vous tente ?',
      options: {
        'surf-kitesurf': { label: 'Surf & Kitesurf', sub: 'Vagues et vent de l’Atlantique' },
        'hiking-trek': { label: 'Randonnée & Trekking', sub: 'Montagnes de l’Atlas et sentiers' },
        'climbing-adventure': { label: 'Escalade & Via Ferrata', sub: 'Parois rocheuses et aventure' },
        'desert-sport': { label: 'Aventures Désert', sub: 'Méharée, quad, sandboard' },
        'water-sport': { label: 'Sports Nautiques', sub: 'Kayak, jet-ski, bateau' },
        'horse-ride': { label: 'Équitation & Balades à cheval', sub: 'Plages et ranchs' },
      },
    },
    es: {
      question: '¿Qué tipo de experiencia deportiva te emociona?',
      options: {
        'surf-kitesurf': { label: 'Surf y Kitesurf', sub: 'Olas y viento del Atlántico' },
        'hiking-trek': { label: 'Senderismo y Trekking', sub: 'Montañas del Atlas y senderos' },
        'climbing-adventure': { label: 'Escalada y Vía Ferrata', sub: 'Paredes de roca y aventura' },
        'desert-sport': { label: 'Aventuras en el Desierto', sub: 'Camellos, quad, sandboard' },
        'water-sport': { label: 'Deportes Acuáticos', sub: 'Kayak, moto de agua, barco' },
        'horse-ride': { label: 'Rutas a Caballo', sub: 'Paseos por la playa y ranchos' },
      },
    },
    de: {
      question: 'Welche Sport- und Outdoor-Erlebnisse reizen dich?',
      options: {
        'surf-kitesurf': { label: 'Surfen & Kitesurfen', sub: 'Atlantikwellen und Wind' },
        'hiking-trek': { label: 'Wandern & Trekking', sub: 'Atlasgebirge und Bergpfade' },
        'climbing-adventure': { label: 'Klettern & Klettersteig', sub: 'Felswände & Abenteuer' },
        'desert-sport': { label: 'Wüstenabenteuer', sub: 'Kamelritt, Quad, Sandboarding' },
        'water-sport': { label: 'Wassersport', sub: 'Kajak, Jetski, Bootstouren' },
        'horse-ride': { label: 'Reiten & Ausritte', sub: 'Strandritte und Ranches' },
      },
    },
    ar: {
      question: 'أي نوع من التجارب الرياضية يثير اهتمامك؟',
      options: {
        'surf-kitesurf': { label: 'ركوب الأمواج والكيت سورف', sub: 'أمواج ورياح المحيط الأطلسي' },
        'hiking-trek': { label: 'المشي الجبلي والرحلات', sub: 'جبال الأطلس والمسارات الطبيعية' },
        'climbing-adventure': { label: 'التسلق والمغامرات الصخرية', sub: 'تسلق الجبال والمرتفعات' },
        'desert-sport': { label: 'مغامرات الصحراء', sub: 'جمال، دراجات رباعية وتزلج على الرمال' },
        'water-sport': { label: 'رياضات مائية', sub: 'كاياك، جيت سكي وقوارب' },
        'horse-ride': { label: 'ركوب الخيل', sub: 'جولات على الشاطئ والمزارع' },
      },
    },
  },
  'sport-skill-level': {
    fr: {
      question: 'Quel est votre niveau ?',
      options: {
        beginner: { label: 'Débutant', sub: 'Je veux apprendre les bases' },
        intermediate: { label: 'Intermédiaire', sub: 'Je maîtrise déjà les bases' },
        advanced: { label: 'Avancé / Pro', sub: 'Je cherche du défi' },
      },
    },
    es: {
      question: '¿Cuál es tu nivel?',
      options: {
        beginner: { label: 'Principiante', sub: 'Quiero aprender lo básico' },
        intermediate: { label: 'Intermedio', sub: 'Ya conozco los fundamentos' },
        advanced: { label: 'Avanzado / Pro', sub: 'Busco un buen reto' },
      },
    },
    de: {
      question: 'Wie ist dein Erfahrungslevel?',
      options: {
        beginner: { label: 'Anfänger', sub: 'Ich möchte die Grundlagen lernen' },
        intermediate: { label: 'Fortgeschritten', sub: 'Ich beherrsche die Basics' },
        advanced: { label: 'Profi / Erfahren', sub: 'Ich suche die Herausforderung' },
      },
    },
    ar: {
      question: 'ما هو مستواك الرياضي؟',
      options: {
        beginner: { label: 'مبتدئ', sub: 'أرغب في تعلم الأساسيات' },
        intermediate: { label: 'متوسط', sub: 'لدي خبرة في الأساسيات' },
        advanced: { label: 'متقدم / محترف', sub: 'أبحث عن تحدٍ قوي' },
      },
    },
  },
  'sport-duration': {
    fr: {
      question: 'Quelle durée idéale pour l’expérience ?',
      options: {
        'half-day': { label: 'Demi-journée (2–4 h)', sub: 'Aventure rapide' },
        'full-day': { label: 'Journée complète', sub: 'L’activité phare de la journée' },
        'multi-day': { label: 'Expédition sur plusieurs jours', sub: 'Avec nuitée et immersion totale' },
      },
    },
    es: {
      question: '¿Cuánto tiempo debería durar la experiencia?',
      options: {
        'half-day': { label: 'Medio día (2–4 horas)', sub: 'Aventura corta' },
        'full-day': { label: 'Día completo', sub: 'El plan principal del día' },
        'multi-day': { label: 'Expedición de varios días', sub: 'Con noche incluida e inmersión total' },
      },
    },
    de: {
      question: 'Wie lange soll das Erlebnis dauern?',
      options: {
        'half-day': { label: 'Halbtag (2–4 Std.)', sub: 'Kurzes Abenteuer' },
        'full-day': { label: 'Ganzer Tag', sub: 'Das Hauptereignis des Tages' },
        'multi-day': { label: 'Mehrtägige Tour', sub: 'Mit Übernachtung und tiefem Erlebnis' },
      },
    },
    ar: {
      question: 'ما هي المدة المناسبة للتجربة؟',
      options: {
        'half-day': { label: 'نصف يوم (2–4 ساعات)', sub: 'مغامرة سريعة' },
        'full-day': { label: 'يوم كامل', sub: 'النشاط الرئيسي لليوم' },
        'multi-day': { label: 'رحلة لعدة أيام', sub: 'مع المبيت وتجربة عميقة' },
      },
    },
  },
  'sport-setting': {
    fr: {
      question: 'Où doit se dérouler l’aventure ?',
      options: {
        coastal: { label: 'Océan & Côte', sub: 'Houle atlantique et plages' },
        mountain: { label: 'Montagnes & Vallées', sub: 'Haut Atlas et gorges' },
        desert: { label: 'Désert & Dunes', sub: 'Sahara et plateaux rocheux' },
      },
    },
    es: {
      question: '¿Dónde te gustaría vivir la aventura?',
      options: {
        coastal: { label: 'Océano y Costa', sub: 'Olas del Atlántico y playas' },
        mountain: { label: 'Montañas y Valles', sub: 'Alto Atlas y gargantas' },
        desert: { label: 'Desierto y Dunas', sub: 'Sáhara y mesetas rocosas' },
      },
    },
    de: {
      question: 'Wo soll das Abenteuer stattfinden?',
      options: {
        coastal: { label: 'Ozean & Küste', sub: 'Atlantikwellen und Strände' },
        mountain: { label: 'Berge & Täler', sub: 'Hoher Atlas und Schluchten' },
        desert: { label: 'Wüste & Dünen', sub: 'Sahara und Steinplateaus' },
      },
    },
    ar: {
      question: 'أين تفضل أن تجري المغامرة؟',
      options: {
        coastal: { label: 'المحيط والساحل', sub: 'أمواج الأطلسي والشواطئ' },
        mountain: { label: 'الجبال والوديان', sub: 'الأطلس الكبير والمضايق' },
        desert: { label: 'الصحراء والكثبان', sub: 'الصحراء الكبرى والهضاب' },
      },
    },
  },
  'culture-focus': {
    fr: {
      question: 'Qu’est-ce qui vous attire le plus ?',
      options: {
        history: { label: 'Histoire Impériale', sub: 'Palais et dynasties' },
        'art-craft': { label: 'Art & Artisanat', sub: 'Ateliers et galeries' },
        spiritual: { label: 'Sacré & Spirituel', sub: 'Mosquées, sanctuaires, sérénité' },
        architecture: { label: 'Architecture & Design', sub: 'Zellige, stuc sculpté, cèdre' },
      },
    },
    es: {
      question: '¿Qué es lo que más te atrae?',
      options: {
        history: { label: 'Historia Imperial', sub: 'Palacios y dinastías' },
        'art-craft': { label: 'Arte y Artesanía', sub: 'Talleres y galerías' },
        spiritual: { label: 'Sagrado y Espiritual', sub: 'Mezquitas, santuarios y calma' },
        architecture: { label: 'Arquitectura y Diseño', sub: 'Zellige, yeso tallado y cedro' },
      },
    },
    de: {
      question: 'Was fasziniert dich am meisten?',
      options: {
        history: { label: 'Imperiale Geschichte', sub: 'Paläste & Dynastien' },
        'art-craft': { label: 'Kunst & Handwerk', sub: 'Werkstätten & Galerien' },
        spiritual: { label: 'Spirituell & Heilig', sub: 'Moscheen, Schreine & Besinnung' },
        architecture: { label: 'Architektur & Design', sub: 'Zellige, Stuck & Zedernholz' },
      },
    },
    ar: {
      question: 'ما الذي يجذبك أكثر؟',
      options: {
        history: { label: 'التاريخ الإمبراطوري', sub: 'القصور والسلالات الملكية' },
        'art-craft': { label: 'الفنون والحرف', sub: 'الورش والمعارض الفنية' },
        spiritual: { label: 'الروحانية والمعالم الدينية', sub: 'المساجد والزوايا والسكينة' },
        architecture: { label: 'العمارة والتصميم', sub: 'الزليج والجبس والخشب المنقوش' },
      },
    },
  },
  'culture-pace': {
    fr: {
      question: 'Quel est votre rythme d’exploration ?',
      options: {
        'deep-dive': { label: 'Immersion profonde (lent)', sub: 'Prendre des heures sur chaque site' },
        sample: { label: 'Aperçu varié (modéré)', sub: 'Voir beaucoup de lieux sans trop s’attarder' },
        whirlwind: { label: 'Circuit Express', sub: 'Voir les incontournables rapidement' },
      },
    },
    es: {
      question: '¿Cuál es tu ritmo de exploración?',
      options: {
        'deep-dive': { label: 'Inmersión profunda (lento)', sub: 'Dedicar horas a cada lugar' },
        sample: { label: 'Recorrido variado (moderado)', sub: 'Ver muchos sitios brevemente' },
        whirlwind: { label: 'Tour exprés', sub: 'Ver lo imprescindible rápidamente' },
      },
    },
    de: {
      question: 'Wie schnell möchtest du erkunden?',
      options: {
        'deep-dive': { label: 'Tiefgehend (langsam)', sub: 'Stundenlang in jeden Ort eintauchen' },
        sample: { label: 'Abwechslungsreich (mittel)', sub: 'Vieles sehen, kurz verweilen' },
        whirlwind: { label: 'Express-Tour', sub: 'Die Highlights zügig erleben' },
      },
    },
    ar: {
      question: 'ما هي وتيرة الاستكشاف المفضلة لديك؟',
      options: {
        'deep-dive': { label: 'تعمق بطيء', sub: 'قضاء ساعات في كل معلم' },
        sample: { label: 'تنوع معتدل', sub: 'رؤية العديد من الأماكن باختصار' },
        whirlwind: { label: 'جولة سريعة', sub: 'زيارة أبرز المعالم بسرعة' },
      },
    },
  },
  'wellness-type': {
    fr: {
      question: 'Quel type d’expérience bien-être recherchez-vous ?',
      options: {
        hammam: { label: 'Hammam Traditionnel', sub: 'Rituel de bain marocain' },
        'spa-modern': { label: 'Spa Moderne', sub: 'Soins en duo ou privés' },
        'yoga-retreat': { label: 'Yoga & Méditation', sub: 'Cours et retraites' },
        'nature-healing': { label: 'Bien-être Naturel', sub: 'Sources thermales et air pur des montagnes' },
      },
    },
    es: {
      question: '¿Qué tipo de experiencia de bienestar buscas?',
      options: {
        hammam: { label: 'Hammam Tradicional', sub: 'Ritual de baño marroquí' },
        'spa-modern': { label: 'Spa Moderno', sub: 'Sesiones privadas y en grupo' },
        'yoga-retreat': { label: 'Yoga y Meditación', sub: 'Clases y retiros' },
        'nature-healing': { label: 'Naturaleza Curativa', sub: 'Aguas termales y aire de montaña' },
      },
    },
    de: {
      question: 'Welche Art von Wellness-Erlebnis suchst du?',
      options: {
        hammam: { label: 'Traditioneller Hammam', sub: 'Marokkanisches Baderitual' },
        'spa-modern': { label: 'Modernes Spa', sub: 'Einzel- & Gruppenanwendungen' },
        'yoga-retreat': { label: 'Yoga & Meditation', sub: 'Kurse & Retreats' },
        'nature-healing': { label: 'Heilung in der Natur', sub: 'Thermalquellen & Bergluft' },
      },
    },
    ar: {
      question: 'ما نوع تجربة الاستجمام التي تفضلها؟',
      options: {
        hammam: { label: 'حمام مغربي تقليدي', sub: 'طقوس الاستحمام المغربية' },
        'spa-modern': { label: 'سبا عصري', sub: 'جلسات خاصة أو جماعية' },
        'yoga-retreat': { label: 'يوغا وتأمل', sub: 'حصص وخلوات استرخاء' },
        'nature-healing': { label: 'استشفاء بالطبيعة', sub: 'ينابيع حارة وهواء جبلي نقي' },
      },
    },
  },
  'desert-activity': {
    fr: {
      question: 'Quelle expérience du désert vous attire ?',
      options: {
        'camel-trek': { label: 'Méharée & Bivouac', sub: 'Nuit classique dans le Sahara' },
        'off-road': { label: '4x4 & Hors-Piste', sub: 'Aventure motorisée dans le désert' },
        'oasis-nature': { label: 'Oasis & Vallées', sub: 'Palmeraies et gorges' },
        stargazing: { label: 'Ciel Étoilé & Astronomie', sub: 'Les ciels les plus purs d’Afrique' },
      },
    },
    es: {
      question: '¿Qué tipo de experiencia en el desierto prefieres?',
      options: {
        'camel-trek': { label: 'Ruta en Camello y Campamento', sub: 'Noche clásica en el Sáhara' },
        'off-road': { label: '4x4 y Todoterreno', sub: 'Aventura motorizada por el desierto' },
        'oasis-nature': { label: 'Oasis y Valles', sub: 'Palmares y gargantas' },
        stargazing: { label: 'Observación de Estrellas', sub: 'Los cielos más oscuros de África' },
      },
    },
    de: {
      question: 'Welches Wüstenerlebnis reizt dich?',
      options: {
        'camel-trek': { label: 'Kamelritt & Wüstencamp', sub: 'Klassische Sahara-Übernachtung' },
        'off-road': { label: '4x4 & Offroad', sub: 'Motorisierte Wüstentour' },
        'oasis-nature': { label: 'Oasen & Täler', sub: 'Palmenoasen und Schluchten' },
        stargazing: { label: 'Sternenhimmel beobachten', sub: 'Einer der klarsten Nachthimmel Afrikas' },
      },
    },
    ar: {
      question: 'ما نوع التجربة الصحراوية التي تفضلها؟',
      options: {
        'camel-trek': { label: 'جولة جمال ومخيم', sub: 'ليلة صحراوية كلاسيكية' },
        'off-road': { label: 'سيارات دفع رباعي', sub: 'مغامرة عبر المسارات الرملية' },
        'oasis-nature': { label: 'واحات ووديان', sub: 'واحات النخيل والمضايق' },
        stargazing: { label: 'مراقبة النجوم', sub: 'أصفى سماء ليلية في أفريقيا' },
      },
    },
  },
  'photo-style': {
    fr: {
      question: 'Que voulez-vous photographier ?',
      options: {
        'architecture-photo': { label: 'Architecture & Détails', sub: 'Zellige, arches, portes sculptées' },
        'landscape-photo': { label: 'Paysages & Panoramas', sub: 'Montagnes, désert, littoral' },
        'street-life': { label: 'Scènes de Rue & Portraits', sub: 'Marchés, artisans, vie quotidienne' },
        'golden-hour': { label: 'Spots d’Heure Dorée', sub: 'Levers et couchers de soleil' },
      },
    },
    es: {
      question: '¿Qué te gustaría fotografiar?',
      options: {
        'architecture-photo': { label: 'Arquitectura y Detalles', sub: 'Zellige, arcos y puertas' },
        'landscape-photo': { label: 'Paisajes y Panorámicas', sub: 'Montañas, desierto y costa' },
        'street-life': { label: 'Vida Callejera y Gente', sub: 'Mercados, artesanos y vida diaria' },
        'golden-hour': { label: 'Lugares de Hora Dorada', sub: 'Amaneceres y atardeceres' },
      },
    },
    de: {
      question: 'Was möchtest du fotografieren?',
      options: {
        'architecture-photo': { label: 'Architektur & Details', sub: 'Zellige, Bögen und Türen' },
        'landscape-photo': { label: 'Landschaften & Panoramen', sub: 'Berge, Wüste und Küste' },
        'street-life': { label: 'Straßenleben & Menschen', sub: 'Märkte, Handwerker und Alltag' },
        'golden-hour': { label: 'Golden-Hour-Spots', sub: 'Sonnenaufgänge und Sonnenuntergänge' },
      },
    },
    ar: {
      question: 'ما الذي تود تصويره؟',
      options: {
        'architecture-photo': { label: 'العمارة والتفاصيل', sub: 'الزليج والأقواس والأبواب العتيقة' },
        'landscape-photo': { label: 'المناظر البانورامية', sub: 'الجبال والصحراء والسواحل' },
        'street-life': { label: 'حياة الشارع والناس', sub: 'الأسواق والحرفيون والحياة اليومية' },
        'golden-hour': { label: 'نقاط الساعة الذهبية', sub: 'شروق وغروب الشمس' },
      },
    },
  },
  'social-vibe': {
    fr: {
      question: 'Quelle ambiance sociale vous attire ?',
      options: {
        'market-chaos': { label: 'L’Énergie des Souks & Marchés', sub: 'Le pouls vibrant de la médina' },
        'rooftop-drinks': { label: 'Rooftops & Lounges', sub: 'Verres au coucher du soleil avec vue' },
        'live-music': { label: 'Musique Live & Spectacles', sub: 'Gnaoua, groupes locaux, festivals' },
        'cooking-social': { label: 'Cuisine & Repas Partagés', sub: 'Ateliers culinaires et tables conviviales' },
      },
    },
    es: {
      question: '¿Cuál es tu plan social ideal?',
      options: {
        'market-chaos': { label: 'Energía de Zocos y Mercados', sub: 'El pulso vivo de la medina' },
        'rooftop-drinks': { label: 'Azoteas y Lounges', sub: 'Bebidas al atardecer con vistas' },
        'live-music': { label: 'Música en Vivo y Shows', sub: 'Gnawa, bandas locales y festivales' },
        'cooking-social': { label: 'Cocina y Comida Compartida', sub: 'Clases y mesas compartidas' },
      },
    },
    de: {
      question: 'Welche gesellige Stimmung passt zu dir?',
      options: {
        'market-chaos': { label: 'Markt- & Souk-Energie', sub: 'Der lebendige Puls der Medina' },
        'rooftop-drinks': { label: 'Rooftops & Lounges', sub: 'Drinks zum Sonnenuntergang mit Aussicht' },
        'live-music': { label: 'Livemusik & Shows', sub: 'Gnawa, lokale Bands & Festivals' },
        'cooking-social': { label: 'Gemeinsam Kochen & Essen', sub: 'Kochkurse & gesellige Runden' },
      },
    },
    ar: {
      question: 'ما هي الأجواء الاجتماعية التي تفضلها؟',
      options: {
        'market-chaos': { label: 'حيوية الأسواق التقليدية', sub: 'نبض المدينة العتيقة' },
        'rooftop-drinks': { label: 'الأسطح واللاونج', sub: 'مشروبات الغروب مع إطلالة' },
        'live-music': { label: 'موسيقى حية وعروض', sub: 'كناوة، فرق محلية ومهرجانات' },
        'cooking-social': { label: 'الطبخ والمائدة المشتركة', sub: 'وجبات جماعية ودروس طبخ' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PRE-QUIZ MINI-QUIZZES (preQuizShortcuts.ts)
  // ═══════════════════════════════════════════════════════════════════
  'snack-craving': {
    fr: {
      question: 'De quel type de bouchée avez-vous envie ?',
      options: {
        'savory-street': { label: 'Street food salée', sub: 'Bocadillos, brochettes kefta, maakouda, msemmen chaud' },
        'sweet-pastry': { label: 'Pâtisseries marocaines sucrées', sub: 'Cornes de gazelle aux amandes, chebakia au miel, sfenj chauds' },
        'fresh-juice': { label: 'Smoothies & jus frais', sub: 'Avocat zâazâa, jus d’orange fraîchement pressé' },
        'cafe-toast': { label: 'Café & sandwich toasté', sub: 'Panini, croissant, café' },
      },
    },
    es: {
      question: '¿Qué tipo de bocado te apetece?',
      options: {
        'savory-street': { label: 'Comida callejera salada', sub: 'Bocadillos, brochetas de kefta, maakouda, msemmen caliente' },
        'sweet-pastry': { label: 'Dulces marroquíes', sub: 'Cuernos de gacela, chebakia con miel, sfenj recién hechos' },
        'fresh-juice': { label: 'Batidos y zumos naturales', sub: 'Batido zâazâa de aguacate, zumo de naranja recién exprimido' },
        'cafe-toast': { label: 'Café y sándwich tostado', sub: 'Panini, croissant y café' },
      },
    },
    de: {
      question: 'Worauf hast du gerade Appetit?',
      options: {
        'savory-street': { label: 'Herzhaftes Street Food', sub: 'Bocadillos, Kefta-Spieße, Maakouda, warmes Msemmen' },
        'sweet-pastry': { label: 'Süßes marokkanisches Gebäck', sub: 'Gazellenhörner, Honig-Chebakia, warme Sfenj-Krapfen' },
        'fresh-juice': { label: 'Frische Smoothies & Säfte', sub: 'Zâazâa Avocado-Shake, frisch gepresster Orangensaft' },
        'cafe-toast': { label: 'Café & getoastetes Sandwich', sub: 'Panini, Croissant, Kaffee' },
      },
    },
    ar: {
      question: 'أي نوع من الوجبات الخفيفة تشتهي الآن؟',
      options: {
        'savory-street': { label: 'أكل شارع مالح', sub: 'بوكاديوس، أسياخ كفتة، معقودة، مسمن ساخن' },
        'sweet-pastry': { label: 'حلويات مغربية', sub: 'كعب الغزال، شباكية بالعسل، سفنج ساخن' },
        'fresh-juice': { label: 'عصائر طازجة ومشروبات', sub: 'عصير زعزع بالأفوكادو، عصير برتقال طازج' },
        'cafe-toast': { label: 'مقهى وساندويتش ساخن', sub: 'بانيني، كرواسون، قهوة' },
      },
    },
  },
  'snack-style': {
    fr: {
      question: 'Comment voulez-vous le déguster ?',
      options: {
        'grab-and-go': { label: 'À emporter en marchant', sub: 'L’option la plus rapide' },
        'quick-sit': { label: 'S’asseoir 15 minutes', sub: 'Reposer ses pieds avec un thé à la menthe' },
        'late-night': { label: 'En-cas tard le soir', sub: 'Ouvert après minuit' },
      },
    },
    es: {
      question: '¿Cómo prefieres comerlo?',
      options: {
        'grab-and-go': { label: 'Para llevar caminando', sub: 'La opción más rápida' },
        'quick-sit': { label: 'Sentarse 15 minutos', sub: 'Descansar con un té a la menta' },
        'late-night': { label: 'Bocado nocturno', sub: 'Abierto pasada la medianoche' },
      },
    },
    de: {
      question: 'Wie möchtest du essen?',
      options: {
        'grab-and-go': { label: 'Auf die Hand beim Laufen', sub: 'Die schnellste Option' },
        'quick-sit': { label: '15 Minuten hinsetzen', sub: 'Füße ausruhen bei einem Minztee' },
        'late-night': { label: 'Später Snack am Abend', sub: 'Nach Mitternacht geöffnet' },
      },
    },
    ar: {
      question: 'كيف تفضل تناوله؟',
      options: {
        'grab-and-go': { label: 'أخذ سريع أثناء المشي', sub: 'الخيار الأسرع' },
        'quick-sit': { label: 'جلوس سريع لمدة 15 دقيقة', sub: 'راحة مع كوب شاي بالنعناع' },
        'late-night': { label: 'وجبة ليلية متأخرة', sub: 'مفتوح بعد منتصف الليل' },
      },
    },
  },
  'snack-price': {
    fr: {
      question: 'Quelle gamme de prix ?',
      options: {
        'street-budget': { label: 'Prix d’échoppe locale', sub: '10 – 30 MAD / 1 – 3 €' },
        'bakery-cafe': { label: 'Boulangerie / café moderne', sub: '30 – 70 MAD / 3 – 7 €' },
      },
    },
    es: {
      question: '¿Qué rango de precios?',
      options: {
        'street-budget': { label: 'Precios de puesto local', sub: '10 – 30 MAD / 1 – 3 €' },
        'bakery-cafe': { label: 'Panadería / cafetería moderna', sub: '30 – 70 MAD / 3 – 7 €' },
      },
    },
    de: {
      question: 'Welche Preisklasse?',
      options: {
        'street-budget': { label: 'Lokaler Straßenstand', sub: '10 – 30 MAD / 1 – 3 €' },
        'bakery-cafe': { label: 'Moderne Bäckerei / Café', sub: '30 – 70 MAD / 3 – 7 €' },
      },
    },
    ar: {
      question: 'ما هي الفئة السعرية المناسبة؟',
      options: {
        'street-budget': { label: 'أسعار الأكشاك المحلية', sub: '10 – 30 درهم' },
        'bakery-cafe': { label: 'مخبزة / مقهى عصري', sub: '30 – 70 درهم' },
      },
    },
  },
  'cafe-reason': {
    fr: {
      question: 'Quelle est la raison principale de cette pause café ?',
      options: {
        'moroccan-breakfast': { label: 'Petit-déjeuner traditionnel', sub: 'Pain frais, amlou, miel, olives, thé à la menthe' },
        'coffee-pastry': { label: 'Bon café & viennoiseries', sub: 'Expresso, cappuccino, croissants' },
        'work-wifi': { label: 'Coin Wi-Fi calme pour travailler', sub: 'Sièges confortables, prises électriques' },
      },
    },
    es: {
      question: '¿Cuál es el motivo principal de esta visita?',
      options: {
        'moroccan-breakfast': { label: 'Desayuno tradicional', sub: 'Pan fresco, amlou, miel, aceitunas y té a la menta' },
        'coffee-pastry': { label: 'Buen café y bollería francesa', sub: 'Espresso, capuchino, croissants' },
        'work-wifi': { label: 'Lugar tranquilo con Wi-Fi para trabajar', sub: 'Asientos cómodos y enchufes' },
      },
    },
    de: {
      question: 'Was ist der Hauptgrund für den Café-Besuch?',
      options: {
        'moroccan-breakfast': { label: 'Traditionelles Frühstück', sub: 'Frisches Brot, Amlou, Honig, Oliven, Minztee' },
        'coffee-pastry': { label: 'Guter Kaffee & Gebäck', sub: 'Espresso, Cappuccino, Croissants' },
        'work-wifi': { label: 'Ruhiger Laptop- & WLAN-Platz', sub: 'Bequeme Sitzplätze, Steckdosen' },
      },
    },
    ar: {
      question: 'ما هو الغرض الرئيسي من زيارة المقهى؟',
      options: {
        'moroccan-breakfast': { label: 'فطور مغربي تقليدي', sub: 'خبز طازج، أملو، عسل، زيتون وشاي بالنعناع' },
        'coffee-pastry': { label: 'قهوة جيدة ومخبوزات', sub: 'إسبريسو، كابتشينو، كرواسون' },
        'work-wifi': { label: 'مكان هادئ للعمل والواي فاي', sub: 'مقاعد مريحة ومقابس كهربائية' },
      },
    },
  },
  'cafe-atmosphere': {
    fr: {
      question: 'Quelle ambiance souhaitez-vous ?',
      options: {
        'street-terrace': { label: 'Terrasse ensoleillée sur rue', sub: 'Observer la vie locale' },
        'quiet-garden': { label: 'Cour ou jardin paisible', sub: 'Calme, verdoyant, peu bruyant' },
        'rooftop-view': { label: 'Café sur le toit', sub: 'Vue sur la ville' },
      },
    },
    es: {
      question: '¿Qué ambiente buscas?',
      options: {
        'street-terrace': { label: 'Terraza soleada a pie de calle', sub: 'Ver la vida pasar y ambiente local' },
        'quiet-garden': { label: 'Patio o jardín tranquilo', sub: 'Paz, vegetación y poco ruido' },
        'rooftop-view': { label: 'Cafetería en azotea', sub: 'Vistas sobre la ciudad' },
      },
    },
    de: {
      question: 'Welche Atmosphäre möchtest du?',
      options: {
        'street-terrace': { label: 'Sonnige Straßenterrasse', sub: 'Leute beobachten, lokales Treiben' },
        'quiet-garden': { label: 'Ruhiger Innenhof / Garten', sub: 'Friedlich, grün, leise' },
        'rooftop-view': { label: 'Dachterrassen-Café', sub: 'Ausblick über die Stadt' },
      },
    },
    ar: {
      question: 'ما الأجواء التي تفضلها؟',
      options: {
        'street-terrace': { label: 'تراس مشمس على الشارع', sub: 'متابعة حركة المدينة والأجواء المحلية' },
        'quiet-garden': { label: 'فناء أو حديقة هادئة', sub: 'هدوء وخضرة بعيداً عن الضوضاء' },
        'rooftop-view': { label: 'مقهى على السطح', sub: 'إطلالة على المدينة' },
      },
    },
  },
  'cafe-price': {
    fr: {
      question: 'Confort de prix ?',
      options: {
        'popular-local': { label: 'Café local traditionnel', sub: '15 – 30 MAD' },
        'boutique-roastery': { label: 'Café de spécialité / boutique', sub: '35 – 80 MAD' },
      },
    },
    es: {
      question: '¿Presupuesto?',
      options: {
        'popular-local': { label: 'Cafetería local tradicional', sub: '15 – 30 MAD' },
        'boutique-roastery': { label: 'Café de especialidad / boutique', sub: '35 – 80 MAD' },
      },
    },
    de: {
      question: 'Preisniveau?',
      options: {
        'popular-local': { label: 'Traditionelles lokales Café', sub: '15 – 30 MAD' },
        'boutique-roastery': { label: 'Specialty Coffee / Boutique-Café', sub: '35 – 80 MAD' },
      },
    },
    ar: {
      question: 'مستوى السعر المناسب؟',
      options: {
        'popular-local': { label: 'مقهى محلي تقليدي', sub: '15 – 30 درهم' },
        'boutique-roastery': { label: 'قهوة مختصة / مقهى بوتيك', sub: '35 – 80 درهم' },
      },
    },
  },
  'signature-dish': {
    fr: {
      question: 'Quel plat emblématique voulez-vous le plus ?',
      options: {
        'slow-tagine': { label: 'Tagine mijoté en terre cuite', sub: 'Agneau aux pruneaux, poulet au citron confit et olives' },
        'friday-couscous': { label: 'Couscous aux sept légumes', sub: 'Grand classique authentique' },
        'crispy-pastilla': { label: 'Pastilla', sub: 'Feuilleté sucré-salé à la cannelle' },
        'local-tanjia': { label: 'Tanjia Marrakchia', sub: 'Jarre mijotée lentement dans la braise' },
      },
    },
    es: {
      question: '¿Qué plato tradicional te apetece más?',
      options: {
        'slow-tagine': { label: 'Tayín en barro a fuego lento', sub: 'Cordero con ciruelas o pollo con limón y aceitunas' },
        'friday-couscous': { label: 'Cuscús de siete verduras', sub: 'Festín tradicional auténtico' },
        'crispy-pastilla': { label: 'Pastela crujiente', sub: 'Hojaldre dulce y salado con canela' },
        'local-tanjia': { label: 'Tanjia Marrakchia', sub: 'Carne cocida a fuego lento en vasija de barro' },
      },
    },
    de: {
      question: 'Welches traditionelle Gericht möchtest du probieren?',
      options: {
        'slow-tagine': { label: 'Langsam geschmorte Ton-Tajine', sub: 'Lamm mit Pflaumen, Hähnchen mit Salzzitrone & Oliven' },
        'friday-couscous': { label: 'Sieben-Gemüse-Couscous', sub: 'Authentisches Traditionsgericht' },
        'crispy-pastilla': { label: 'Pastilla', sub: 'Knusprige Pastete mit Zimt, süß & herzhaft' },
        'local-tanjia': { label: 'Tanjia Marrakchia', sub: 'Im Tontopf langsam geschmort' },
      },
    },
    ar: {
      question: 'ما الطبق المغربي الشهير الذي ترغب في تذوقه؟',
      options: {
        'slow-tagine': { label: 'طاجين فخاري مطهو على مهل', sub: 'لحم بالبرقوق أو دجاج بالحامض المصير والزيتون' },
        'friday-couscous': { label: 'كسكس بالسبع خضار', sub: 'الطبق التقليدي الأصيل' },
        'crispy-pastilla': { label: 'بسطيلة مقرمشة', sub: 'مزيج المالح والحلو بالقرفة واللوز' },
        'local-tanjia': { label: 'طنجية مراكشية', sub: 'مطهو ببطء في رماد الفرّان التقليدي' },
      },
    },
  },
  'traditional-setting': {
    fr: {
      question: 'Quel cadre préférez-vous ?',
      options: {
        'authentic-riad': { label: 'Patio de Riad aux chandelles', sub: 'Fontaine, musique douce, romantique' },
        'local-popular': { label: 'Adresse animée de quartier', sub: 'Où mangent les familles marocaines, excellents prix' },
        'palace-historic': { label: 'Palais gastronomique historique', sub: 'Zellige somptueux, musiciens, service raffiné' },
      },
    },
    es: {
      question: '¿Qué entorno prefieres?',
      options: {
        'authentic-riad': { label: 'Patio de Riad a la luz de las velas', sub: 'Fuente, música suave y ambiente romántico' },
        'local-popular': { label: 'Favorito animado del barrio', sub: 'Donde comen las familias locales, muy buen precio' },
        'palace-historic': { label: 'Palacio histórico', sub: 'Zellige suntuoso, músicos y servicio de alta cocina' },
      },
    },
    de: {
      question: 'Welches Ambiente bevorzugst du?',
      options: {
        'authentic-riad': { label: 'Kerzenbeleuchteter Riad-Innenhof', sub: 'Brunnen, sanfte Musik, romantisch' },
        'local-popular': { label: 'Lebhaftes Viertel-Lokal', sub: 'Wo einheimische Familien essen, faire Preise' },
        'palace-historic': { label: 'Historischer Speisepalast', sub: 'Prachtvolles Zellige, Musiker, gehobener Service' },
      },
    },
    ar: {
      question: 'ما المكان الذي تفضله؟',
      options: {
        'authentic-riad': { label: 'فناء رياض على ضوء الشموع', sub: 'نافورة وموسيقى هادئة وأجواء رومانسية' },
        'local-popular': { label: 'مطعم شعبي محلي محبوب', sub: 'حيث تأكل العائلات المغربية بأسعار ممتازة' },
        'palace-historic': { label: 'قصر تاريخي فاخر', sub: 'زليج تقليدي وموسيقيون وخدمة راقية' },
      },
    },
  },
  'drinks-policy': {
    fr: {
      question: 'Politique concernant les boissons ?',
      options: {
        'alcohol-ok': { label: 'Sert vins & cocktails', sub: 'Bar complet disponible' },
        'traditional-dry': { label: 'Traditionnel sans alcool', sub: 'Thé à la menthe et jus frais uniquement' },
      },
    },
    es: {
      question: '¿Preferencia de bebidas?',
      options: {
        'alcohol-ok': { label: 'Sirve vino y cócteles', sub: 'Barra completa disponible' },
        'traditional-dry': { label: 'Tradicional sin alcohol', sub: 'Solo té a la menta y zumos naturales' },
      },
    },
    de: {
      question: 'Getränkeauswahl?',
      options: {
        'alcohol-ok': { label: 'Wein & Cocktails verfügbar', sub: 'Vollständige Bar' },
        'traditional-dry': { label: 'Traditionell ohne Alkohol', sub: 'Nur Minztee & frische Säfte' },
      },
    },
    ar: {
      question: 'سياسة المشروبات؟',
      options: {
        'alcohol-ok': { label: 'يقدم مشروبات وكوكتيلات', sub: 'قائمة مشروبات متكاملة' },
        'traditional-dry': { label: 'تقليدي بدون كحول', sub: 'شاي بالنعناع وعصائر طازجة فقط' },
      },
    },
  },
  'rooftop-occasion': {
    fr: {
      question: 'Quelle est l’occasion principale ?',
      options: {
        'romantic-dinner': { label: 'Dîner romantique à deux', sub: 'Aux chandelles, table intime' },
        'sunset-drinks': { label: 'Verres au coucher du soleil & tapas', sub: 'Coussins lounge, photos à l’heure dorée' },
        'dinner-show': { label: 'Dîner avec musique / spectacle', sub: 'Musiciens gnaoua, ambiance orientale' },
      },
    },
    es: {
      question: '¿Cuál es la ocasión principal?',
      options: {
        'romantic-dinner': { label: 'Cena romántica para dos', sub: 'Con velas y mesa íntima' },
        'sunset-drinks': { label: 'Copas al atardecer y tapas', sub: 'Cojines lounge y fotos doradas' },
        'dinner-show': { label: 'Cena con música o espectáculo', sub: 'Músicos gnawa y ambiente oriental' },
      },
    },
    de: {
      question: 'Was ist der Anlass?',
      options: {
        'romantic-dinner': { label: 'Romantisches Dinner zu zweit', sub: 'Kerzenschein, intimer Tisch' },
        'sunset-drinks': { label: 'Sunset-Drinks & Tapas', sub: 'Lounge-Kissen, Golden-Hour-Fotos' },
        'dinner-show': { label: 'Dinner mit Livemusik / Show', sub: 'Gnawa-Musiker, orientalisches Flair' },
      },
    },
    ar: {
      question: 'ما هي المناسبة الرئيسية؟',
      options: {
        'romantic-dinner': { label: 'عشاء رومانسي لشخصين', sub: 'على ضوء الشموع وطاولة هادئة' },
        'sunset-drinks': { label: 'مشروبات الغروب ومقبلات', sub: 'جلسات مريحة وصور الساعة الذهبية' },
        'dinner-show': { label: 'عشاء مع موسيقى وعرض حي', sub: 'موسيقى كناوة وأجواء شرقية' },
      },
    },
  },
  'rooftop-view': {
    fr: {
      question: 'Quel type de vue recherchez-vous ?',
      options: {
        'medina-minarets': { label: 'Toits de la médina & minarets illuminés', sub: 'La ligne d’horizon classique' },
        'mountain-horizon': { label: 'Sommets de l’Atlas ou horizon marin', sub: 'Vue grand angle ouverte' },
      },
    },
    es: {
      question: '¿Qué tipo de vistas buscas?',
      options: {
        'medina-minarets': { label: 'Tejados de la medina y minaretes', sub: 'El horizonte clásico marroquí' },
        'mountain-horizon': { label: 'Montañas del Atlas o el océano', sub: 'Horizonte abierto y amplio' },
      },
    },
    de: {
      question: 'Welchen Ausblick wünschst du dir?',
      options: {
        'medina-minarets': { label: 'Medina-Dächer & beleuchtete Minarette', sub: 'Die klassische Skyline' },
        'mountain-horizon': { label: 'Atlasgebirge oder Ozeanhorizont', sub: 'Weitläufiger Panoramablick' },
      },
    },
    ar: {
      question: 'أي نوع من الإطلالات تبحث عنه؟',
      options: {
        'medina-minarets': { label: 'أسطح المدينة العتيقة والمآذن المضاءة', sub: 'الأفق المغربي الكلاسيكي' },
        'mountain-horizon': { label: 'جبال الأطلس أو أفق المحيط', sub: 'إطلالة مفتوحة وواسعة' },
      },
    },
  },
  'rooftop-budget': {
    fr: {
      question: 'Budget estimé ?',
      options: {
        'moderate-rooftop': { label: 'Rooftop décontracté modéré', sub: '120 – 250 MAD / pers.' },
        'premium-chic': { label: 'Lounge gastronomique haut de gamme', sub: '350+ MAD / pers.' },
      },
    },
    es: {
      question: '¿Presupuesto esperado?',
      options: {
        'moderate-rooftop': { label: 'Azotea casual moderada', sub: '120 – 250 MAD / pers.' },
        'premium-chic': { label: 'Lounge de alta cocina', sub: '350+ MAD / pers.' },
      },
    },
    de: {
      question: 'Budget-Vorstellung?',
      options: {
        'moderate-rooftop': { label: 'Legeres Rooftop (Mittelklasse)', sub: '120 – 250 MAD / Pers.' },
        'premium-chic': { label: 'Gehobene Fine-Dining-Lounge', sub: '350+ MAD / Pers.' },
      },
    },
    ar: {
      question: 'الميزانية المتوقعة؟',
      options: {
        'moderate-rooftop': { label: 'سطح مريح بأسعار متوسطة', sub: '120 – 250 درهم / للشخص' },
        'premium-chic': { label: 'لاونج فاخر وراقٍ', sub: '350+ درهم / للشخص' },
      },
    },
  },
  'access-distance': {
    fr: {
      question: 'À quelle distance de l’accès voiture devez-vous être ?',
      options: {
        'doorstep-car': { label: 'Voiture / taxi jusqu’à la porte', sub: 'Zéro portage de bagages, idéal arrivées tardives' },
        'short-gate-walk': { label: '2–3 min à pied d’une porte / parking', sub: 'Cadre authentique, aide aux bagages proche' },
        'deep-alleys-ok': { label: 'Dans les ruelles piétonnes ça me va', sub: 'Si l’aide aux bagages est prévue' },
      },
    },
    es: {
      question: '¿Qué tan cerca del acceso en coche necesitas estar?',
      options: {
        'doorstep-car': { label: 'Coche / taxi hasta la puerta', sub: 'Sin cargar maletas, ideal para llegadas tarde' },
        'short-gate-walk': { label: 'A 2–3 min a pie de puerta o parking', sub: 'Encanto auténtico con ayuda cerca' },
        'deep-alleys-ok': { label: 'Dentro de callejones peatonales está bien', sub: 'Si organizan ayuda con el equipaje' },
      },
    },
    de: {
      question: 'Wie nah an der Straßen- bzw. Taxizufahrt soll es sein?',
      options: {
        'doorstep-car': { label: 'Auto / Taxi hält direkt vor der Tür', sub: 'Kein Koffertragen, ideal bei später Ankunft' },
        'short-gate-walk': { label: '2–3 Min. zu Fuß ab Stadttor / Parkplatz', sub: 'Authentisch, Gepäckträger in der Nähe' },
        'deep-alleys-ok': { label: 'Tiefer in den Fußgänger-Gassen ist okay', sub: 'Solange Gepäckhilfe organisiert wird' },
      },
    },
    ar: {
      question: 'ما مدى القرب المطلوب من وصول السيارة/التاكسي؟',
      options: {
        'doorstep-car': { label: 'السيارة تصل مباشرة إلى الباب', sub: 'بدون حمل حقائب، مثالي للوصول المتأخر' },
        'short-gate-walk': { label: 'مشي 2–3 دقائق من البوابة أو الموقف', sub: 'أجواء أصيلة مع مساعدة قريبة للحقائب' },
        'deep-alleys-ok': { label: 'داخل الأزقة الهادئة لا بأس', sub: 'مع توفر خدمة نقل الحقائب' },
      },
    },
  },
  'access-style': {
    fr: {
      question: 'Quel style d’hébergement ?',
      options: {
        'accessible-riad': { label: 'Riad boutique près d’une porte principale', sub: 'Cour authentique proche des accès' },
        'modern-hotel': { label: 'Hôtel moderne hors des remparts', sub: 'Ascenseur, larges avenues' },
      },
    },
    es: {
      question: '¿Qué estilo de alojamiento prefieres?',
      options: {
        'accessible-riad': { label: 'Riad boutique junto a puerta principal', sub: 'Patio auténtico de fácil acceso' },
        'modern-hotel': { label: 'Hotel urbano moderno fuera de murallas', sub: 'Ascensor y avenidas amplias' },
      },
    },
    de: {
      question: 'Welcher Unterkunftsstil?',
      options: {
        'accessible-riad': { label: 'Boutique-Riad nahe einem Haupttor', sub: 'Authentischer Innenhof mit kurzem Weg' },
        'modern-hotel': { label: 'Modernes Stadthotel außerhalb der Medina', sub: 'Aufzug und breite Straßen' },
      },
    },
    ar: {
      question: 'ما نمط الإقامة المفضل؟',
      options: {
        'accessible-riad': { label: 'رياض بوتيك قرب باب رئيسي للمدينة', sub: 'فناء تقليدي قريب من المواصلات' },
        'modern-hotel': { label: 'فندق عصري خارج الأسوار', sub: 'مصعد وشوارع واسعة' },
      },
    },
  },
  'access-group': {
    fr: {
      question: 'Qui voyage avec vous ?',
      options: {
        'solo-or-couple': { label: 'Solo ou Couple', sub: 'Voyage léger' },
        'family-kids': { label: 'Famille avec enfants ou seniors', sub: 'Chambres en rez-de-chaussée préférées' },
      },
    },
    es: {
      question: '¿Quién viaja contigo?',
      options: {
        'solo-or-couple': { label: 'Solo o en Pareja', sub: 'Equipaje ligero' },
        'family-kids': { label: 'Familia con niños o mayores', sub: 'Preferible planta baja o sin escalones' },
      },
    },
    de: {
      question: 'Wer reist mit dir?',
      options: {
        'solo-or-couple': { label: 'Allein oder zu zweit', sub: 'Mit leichtem Gepäck' },
        'family-kids': { label: 'Familie mit Kindern oder Senioren', sub: 'Stufenlos / Erdgeschoss bevorzugt' },
      },
    },
    ar: {
      question: 'من يسافر معك؟',
      options: {
        'solo-or-couple': { label: 'بمفردي أو ثنائي', sub: 'سفر خفيف' },
        'family-kids': { label: 'عائلة مع أطفال أو كبار سن', sub: 'تفضيل الطابق الأرضي وسهولة الحركة' },
      },
    },
  },
  'rating-standard': {
    fr: {
      question: 'Quelle exigence de note client attendez-vous ?',
      options: {
        'superb-9plus': { label: 'Exceptionnel uniquement', sub: 'Google 4.8★+ ou Booking 9.2+' },
        'great-value': { label: 'Très bien noté à prix doux', sub: 'Google 4.5★ – 4.7★' },
      },
    },
    es: {
      question: '¿Qué nivel de valoración mínima buscas?',
      options: {
        'superb-9plus': { label: 'Solo sobresaliente', sub: 'Google 4.8★+ o Booking 9.2+' },
        'great-value': { label: 'Alta nota a gran precio', sub: 'Google 4.5★ – 4.7★' },
      },
    },
    de: {
      question: 'Welchen Bewertungsstandard erwartest du?',
      options: {
        'superb-9plus': { label: 'Nur Spitzenbewertungen', sub: 'Google 4,8★+ oder Booking 9,2+' },
        'great-value': { label: 'Top bewertet mit starkem Preis', sub: 'Google 4,5★ – 4,7★' },
      },
    },
    ar: {
      question: 'ما مستوى التقييم المطلوب؟',
      options: {
        'superb-9plus': { label: 'ممتاز واستثنائي فقط', sub: 'تقييم جوجل 4.8★+ أو بوكينج 9.2+' },
        'great-value': { label: 'تقييم عالٍ وسعر ممتاز', sub: 'تقييم جوجل 4.5★ – 4.7★' },
      },
    },
  },
  'rating-comfort': {
    fr: {
      question: 'Quel confort est indispensable ?',
      options: {
        'pool-hammam': { label: 'Piscine & spa sur place', sub: 'Se rafraîchir après la visite' },
        'silent-sleep': { label: 'Chambre garantie calme', sub: 'Double vitrage, à l’écart du bruit' },
        'exceptional-breakfast': { label: 'Petit-déjeuner gourmand sur le toit', sub: 'Le moment fort du matin' },
      },
    },
    es: {
      question: '¿Qué comodidad es innegociable?',
      options: {
        'pool-hammam': { label: 'Piscina y spa propios', sub: 'Refrescarse tras un día intenso' },
        'silent-sleep': { label: 'Habitación silenciosa garantizada', sub: 'Doble acristalamiento, lejos del ruido' },
        'exceptional-breakfast': { label: 'Desayuno gourmet en la azotea', sub: 'El mejor momento de la mañana' },
      },
    },
    de: {
      question: 'Welcher Komfort ist unverzichtbar?',
      options: {
        'pool-hammam': { label: 'Pool & hauseigenes Spa', sub: 'Abkühlung nach einem heißen Tag' },
        'silent-sleep': { label: 'Garantiert ruhiges Zimmer', sub: 'Doppelverglasung, abseits von Trubel' },
        'exceptional-breakfast': { label: 'Gourmet-Frühstück auf der Dachterrasse', sub: 'Das Highlight am Morgen' },
      },
    },
    ar: {
      question: 'ما الميزة الأساسية التي تهمك أكثر؟',
      options: {
        'pool-hammam': { label: 'مسبح وسبا في المكان', sub: 'للاسترخاء بعد يوم حافل' },
        'silent-sleep': { label: 'غرفة هادئة مضمونة', sub: 'عزل صوتي وبعيدة عن الضوضاء' },
        'exceptional-breakfast': { label: 'فطور شهي على السطح', sub: 'بداية صباحية مثالية' },
      },
    },
  },
  'rating-price': {
    fr: {
      question: 'Gamme de prix ?',
      options: {
        'value-gem': { label: 'Pépite économique à milieu de gamme', sub: '400 – 900 MAD / nuit' },
        'boutique-luxury': { label: 'Riad boutique ou palais haut de gamme', sub: '1 200 – 3 000 MAD / nuit' },
      },
    },
    es: {
      question: '¿Rango de precio?',
      options: {
        'value-gem': { label: 'Joya económica / media', sub: '400 – 900 MAD / noche' },
        'boutique-luxury': { label: 'Riad boutique o palacio de lujo', sub: '1.200 – 3.000 MAD / noche' },
      },
    },
    de: {
      question: 'Preiskategorie?',
      options: {
        'value-gem': { label: 'Budget- bis Mittelklasse-Perle', sub: '400 – 900 MAD / Nacht' },
        'boutique-luxury': { label: 'Gehobener Boutique-Riad / Palast', sub: '1.200 – 3.000 MAD / Nacht' },
      },
    },
    ar: {
      question: 'الفئة السعرية؟',
      options: {
        'value-gem': { label: 'إقامة اقتصادية إلى متوسطة مميزة', sub: '400 – 900 درهم / ليلة' },
        'boutique-luxury': { label: 'رياض بوتيك فاخر أو قصر', sub: '1,200 – 3,000 درهم / ليلة' },
      },
    },
  },
  'heritage-highlight': {
    fr: {
      question: 'Quel détail architectural vous attire le plus ?',
      options: {
        'zellij-fountain': { label: 'Patio traditionnel avec fontaine en zellige & orangers', sub: 'Le cœur classique du riad' },
        'panoramic-roof': { label: 'Grande terrasse panoramique sur la médina', sub: 'Petits-déjeuners au lever du soleil' },
        'historic-carvings': { label: 'Cèdre sculpté du XVIIIe siècle & stuc restauré', sub: 'Artisanat d’une autre époque' },
      },
    },
    es: {
      question: '¿Qué detalle arquitectónico buscas más?',
      options: {
        'zellij-fountain': { label: 'Patio tradicional con fuente de zellige y naranjos', sub: 'El corazón clásico del riad' },
        'panoramic-roof': { label: 'Amplia azotea panorámica sobre la medina', sub: 'Desayunos con vistas al amanecer' },
        'historic-carvings': { label: 'Madera de cedro tallada y yesería restaurada', sub: 'Artesanía de otra época' },
      },
    },
    de: {
      question: 'Welches architektonische Highlight begeistert dich?',
      options: {
        'zellij-fountain': { label: 'Traditioneller Innenhof mit Mosaikbrunnen & Orangenbäumen', sub: 'Das klassische Riad-Herz' },
        'panoramic-roof': { label: 'Weite Dachterrasse mit Blick über die Medina', sub: 'Frühstück zum Sonnenaufgang' },
        'historic-carvings': { label: 'Restauriertes Zedernholz & Stuck aus dem 18. Jh.', sub: 'Handwerkskunst vergangener Zeiten' },
      },
    },
    ar: {
      question: 'ما السمة المعمارية التي تجذبك أكثر؟',
      options: {
        'zellij-fountain': { label: 'فناء تقليدي بنافورة زليج وأشجار البرتقال', sub: 'قلب الرياض المغربي الكلاسيكي' },
        'panoramic-roof': { label: 'تراس بانورامي واسع مطل على المدينة', sub: 'فطور مع شروق الشمس' },
        'historic-carvings': { label: 'خشب الأرز المنقوش والجبس التاريخي', sub: 'حرفية فنية عريقة' },
      },
    },
  },
  'heritage-size': {
    fr: {
      question: 'Taille et atmosphère ?',
      options: {
        'intimate-dar': { label: 'Petit & intime', sub: '4 à 6 chambres, accueil personnalisé' },
        'grand-riad': { label: 'Grand riad boutique', sub: '10 à 15 chambres, service hôtelier complet' },
      },
    },
    es: {
      question: '¿Tamaño y ambiente?',
      options: {
        'intimate-dar': { label: 'Pequeño e íntimo', sub: 'Solo 4 a 6 habitaciones, trato cercano' },
        'grand-riad': { label: 'Gran riad boutique', sub: '10 a 15 habitaciones, equipo completo' },
      },
    },
    de: {
      question: 'Größe & Atmosphäre?',
      options: {
        'intimate-dar': { label: 'Klein & intim', sub: 'Nur 4 bis 6 Zimmer, persönliche Betreuung' },
        'grand-riad': { label: 'Großzügiger Boutique-Riad', sub: '10 bis 15 Zimmer, voller Restaurant-Service' },
      },
    },
    ar: {
      question: 'حجم المكان وأجواؤه؟',
      options: {
        'intimate-dar': { label: 'صغير وحميمي', sub: '4 إلى 6 غرف فقط مع اهتمام شخصي' },
        'grand-riad': { label: 'رياض بوتيك كبير', sub: '10 إلى 15 غرفة مع خدمات متكاملة' },
      },
    },
  },
  'heritage-location': {
    fr: {
      question: 'Ambiance du quartier ?',
      options: {
        'medina-center': { label: 'À deux pas des souks & monuments', sub: 'Au cœur de l’animation' },
        'quiet-kasbah': { label: 'Quartier résidentiel calme de la médina', sub: 'Ruelles paisibles, vie locale' },
      },
    },
    es: {
      question: '¿Sensación del entorno?',
      options: {
        'medina-center': { label: 'A pasos de zocos y monumentos', sub: 'En el centro de todo' },
        'quiet-kasbah': { label: 'Barrio residencial tranquilo de la medina', sub: 'Calles calmas y vida local' },
      },
    },
    de: {
      question: 'Welche Lage in der Medina?',
      options: {
        'medina-center': { label: 'Wenige Schritte zu Souks & Sehenswürdigkeiten', sub: 'Mitten im Geschehen' },
        'quiet-kasbah': { label: 'Ruhiges Wohnviertel in der Medina', sub: 'Friedliche Gassen, echtes Alltagsleben' },
      },
    },
    ar: {
      question: 'أجواء الحي المفضلة؟',
      options: {
        'medina-center': { label: 'خطوات من الأسواق والمعالم الرئيسية', sub: 'في قلب الحركة' },
        'quiet-kasbah': { label: 'حي سكني هادئ داخل المدينة العتيقة', sub: 'أزقة هادئة وحياة محلية' },
      },
    },
  },
  'pool-setup': {
    fr: {
      question: 'Quel type de piscine souhaitez-vous ?',
      options: {
        'sunny-outdoor': { label: 'Grande piscine de jardin ensoleillée', sub: 'Transats et espace pour nager' },
        'courtyard-plunge': { label: 'Bassin rafraîchissant dans le patio', sub: 'Pour un plongeon rapide' },
        'heated-pool': { label: 'Piscine chauffée', sub: 'Idéale en hiver et au printemps' },
      },
    },
    es: {
      question: '¿Qué tipo de piscina buscas?',
      options: {
        'sunny-outdoor': { label: 'Gran piscina exterior en jardín', sub: 'Tumbonas y espacio para nadar' },
        'courtyard-plunge': { label: 'Piscina pequeña en patio interior', sub: 'Para un chapuzón refrescante' },
        'heated-pool': { label: 'Piscina climatizada', sub: 'Ideal en invierno y primavera' },
      },
    },
    de: {
      question: 'Welche Art von Pool wünschst du dir?',
      options: {
        'sunny-outdoor': { label: 'Großer sonniger Gartenpool', sub: 'Viel Platz für Liegen und Schwimmen' },
        'courtyard-plunge': { label: 'Tauchbecken im Innenhof', sub: 'Für eine schnelle Abkühlung' },
        'heated-pool': { label: 'Beheizter Pool', sub: 'Ideal für Winter und Frühling' },
      },
    },
    ar: {
      question: 'ما نوع المسبح الذي تريده؟',
      options: {
        'sunny-outdoor': { label: 'مسبح حديقة كبير ومشمس', sub: 'مساحة للاسترخاء والسباحة' },
        'courtyard-plunge': { label: 'مسبح صغير في الفناء الداخلي', sub: 'لانتعاش سريع' },
        'heated-pool': { label: 'مسبح مدفأ', sub: 'مثالي لفصلي الشتاء والربيع' },
      },
    },
  },
  'pool-spa-needs': {
    fr: {
      question: 'Quels équipements spa souhaitez-vous sur place ?',
      options: {
        'full-hammam': { label: 'Hammam traditionnel privé & bain vapeur', sub: 'Le rituel complet' },
        'massage-only': { label: 'Salle de massage à l’huile d’argan bio', sub: 'Relaxation profonde' },
        'pool-only': { label: 'La piscine suffit, pas besoin de spa', sub: 'Rester simple' },
      },
    },
    es: {
      question: '¿Qué servicios de spa necesitas en el alojamiento?',
      options: {
        'full-hammam': { label: 'Hammam tradicional privado y vapor', sub: 'El ritual completo' },
        'massage-only': { label: 'Sala de masaje con aceite de argán', sub: 'Relajación profunda' },
        'pool-only': { label: 'Con la piscina basta, sin spa', sub: 'Algo sencillo' },
      },
    },
    de: {
      question: 'Welche Spa-Ausstattung brauchst du vor Ort?',
      options: {
        'full-hammam': { label: 'Privater traditioneller Hammam & Dampfbad', sub: 'Das komplette Ritual' },
        'massage-only': { label: 'Massageraum mit Bio-Arganöl', sub: 'Tiefe Entspannung' },
        'pool-only': { label: 'Pool reicht, kein Spa nötig', sub: 'Unkompliziert' },
      },
    },
    ar: {
      question: 'ما خدمات السبا التي تحتاجها في المكان؟',
      options: {
        'full-hammam': { label: 'حمام تقليدي خاص وغرفة بخار', sub: 'الطقوس المغربية الكاملة' },
        'massage-only': { label: 'غرفة تدليك بزيت الأركان العضوي', sub: 'استرخاء عميق' },
        'pool-only': { label: 'المسبح يكفي، لا حاجة للسبا', sub: 'خيار بسيط' },
      },
    },
  },
  'pool-location': {
    fr: {
      question: 'Préférence de localisation ?',
      options: {
        'in-the-medina': { label: 'Dans les remparts de la médina', sub: 'À deux pas des souks' },
        'outside-oasis': { label: 'À l’écart dans la verdure / Palmeraie / vallée', sub: 'Ambiance resort spacieuse' },
      },
    },
    es: {
      question: '¿Preferencia de ubicación?',
      options: {
        'in-the-medina': { label: 'Dentro de la medina', sub: 'A pasos de los zocos' },
        'outside-oasis': { label: 'En las afueras verdes / Palmeraie / valle', sub: 'Espacio tipo resort' },
      },
    },
    de: {
      question: 'Lage-Präferenz?',
      options: {
        'in-the-medina': { label: 'Innerhalb der Medina-Mauern', sub: 'Nur Schritte zu den Souks' },
        'outside-oasis': { label: 'Im grünen Umland / Palmeraie / Tal', sub: 'Weitläufiges Resort-Flair' },
      },
    },
    ar: {
      question: 'تفضيل الموقع؟',
      options: {
        'in-the-medina': { label: 'داخل أسوار المدينة العتيقة', sub: 'على بُعد خطوات من الأسواق' },
        'outside-oasis': { label: 'في الضواحي الخضراء / النخيل / الوادي', sub: 'مساحات منتجع واسعة' },
      },
    },
  },
  'hostel-room': {
    fr: {
      question: 'Quel type de chambre recherchez-vous ?',
      options: {
        'shared-dorm': { label: 'Lit en dortoir propre partagé', sub: 'Moins de 200 MAD / nuit' },
        'private-budget': { label: 'Chambre privée économique', sub: 'Chambre privée propre sous 450 MAD' },
      },
    },
    es: {
      question: '¿Qué tipo de habitación buscas?',
      options: {
        'shared-dorm': { label: 'Litera en dormitorio compartido limpio', sub: 'Menos de 200 MAD / noche' },
        'private-budget': { label: 'Habitación privada económica', sub: 'Privada y limpia por menos de 450 MAD' },
      },
    },
    de: {
      question: 'Welche Zimmerart suchst du?',
      options: {
        'shared-dorm': { label: 'Bett im sauberen Schlafsaal', sub: 'Unter 200 MAD / Nacht' },
        'private-budget': { label: 'Günstiges Privatzimmer', sub: 'Sauberes Privatzimmer unter 450 MAD' },
      },
    },
    ar: {
      question: 'ما نوع الغرفة التي تبحث عنها؟',
      options: {
        'shared-dorm': { label: 'سرير في غرفة مشتركة نظيفة', sub: 'أقل من 200 درهم / ليلة' },
        'private-budget': { label: 'غرفة خاصة بسعر اقتصادي', sub: 'غرفة خاصة نظيفة أقل من 450 درهم' },
      },
    },
  },
  'hostel-vibe': {
    fr: {
      question: 'Quelle ambiance correspond à votre voyage ?',
      options: {
        'social-events': { label: 'Actif & convivial', sub: 'Dîners sur le toit, soirées, excursions en groupe' },
        'chill-quiet': { label: 'Calme & détendu', sub: 'Bon sommeil, espace calme, adapté télétravail' },
      },
    },
    es: {
      question: '¿Qué ambiente va con tu viaje?',
      options: {
        'social-events': { label: 'Activo y social', sub: 'Cenas en la azotea, rutas y actividades en grupo' },
        'chill-quiet': { label: 'Tranquilo y relajado', sub: 'Buen descanso, ideal para nómadas digitales' },
      },
    },
    de: {
      question: 'Welche Stimmung passt zu deiner Reise?',
      options: {
        'social-events': { label: 'Aktiv & gesellig', sub: 'Rooftop-Dinner, gemeinsame Touren' },
        'chill-quiet': { label: 'Ruhig & entspannt', sub: 'Guter Schlaf, ruhiger Gemeinschaftsbereich' },
      },
    },
    ar: {
      question: 'ما الأجواء التي تناسب رحلتك؟',
      options: {
        'social-events': { label: 'نشيط واجتماعي', sub: 'عشاء على السطح ورحلات جماعية' },
        'chill-quiet': { label: 'هادئ ومريح', sub: 'نوم مريح ومساحة هادئة للعمل عن بُعد' },
      },
    },
  },
  'hostel-amenity': {
    fr: {
      question: 'Quel équipement est essentiel ?',
      options: {
        'free-breakfast': { label: 'Petit-déjeuner gratuit inclus', sub: 'Bien démarrer la journée' },
        'strong-wifi': { label: 'Wi-Fi rapide et fiable pour travailler', sub: 'Appels vidéo sans coupure' },
        'ac-heating': { label: 'Climatisation dans la chambre', sub: 'Nuits fraîches en été' },
      },
    },
    es: {
      question: '¿Qué servicio es imprescindible?',
      options: {
        'free-breakfast': { label: 'Desayuno gratis incluido', sub: 'Energía para empezar el día' },
        'strong-wifi': { label: 'Wi-Fi rápido y fiable', sub: 'Videollamadas sin cortes' },
        'ac-heating': { label: 'Aire acondicionado en la habitación', sub: 'Noches frescas en verano' },
      },
    },
    de: {
      question: 'Welche Ausstattung ist unverzichtbar?',
      options: {
        'free-breakfast': { label: 'Kostenloses Frühstück inklusive', sub: 'Energie für den Tag' },
        'strong-wifi': { label: 'Starkes, zuverlässiges WLAN', sub: 'Video-Calls ohne Aussetzer' },
        'ac-heating': { label: 'Klimaanlage im Zimmer', sub: 'Kühle Nächte im Sommer' },
      },
    },
    ar: {
      question: 'ما المرفق الأساسي بالنسبة لك؟',
      options: {
        'free-breakfast': { label: 'فطور مجاني مشمول', sub: 'بداية جيدة لليوم' },
        'strong-wifi': { label: 'واي فاي قوي وموثوق للعمل', sub: 'مكالمات فيديو بدون انقطاع' },
        'ac-heating': { label: 'تكييف في الغرفة', sub: 'ليالٍ مريحة في الصيف' },
      },
    },
  },
  'tour-format': {
    fr: {
      question: 'Quel format de visite préférez-vous ?',
      options: {
        'small-group': { label: 'Petit groupe convivial', sub: 'Meilleur équilibre entre prix et ambiance' },
        'private-vip': { label: 'Guide / véhicule 100 % privé', sub: 'Rythme sur mesure, attention dédiée' },
        'ticket-only': { label: 'Billet simple / visite libre', sub: 'Accès sans guide' },
      },
    },
    es: {
      question: '¿Qué formato de tour prefieres?',
      options: {
        'small-group': { label: 'Grupo pequeño agradable', sub: 'Mejor equilibrio entre precio y ambiente' },
        'private-vip': { label: 'Guía y vehículo 100% privados', sub: 'A tu ritmo y atención personalizada' },
        'ticket-only': { label: 'Solo entrada / visita por libre', sub: 'Solo acceso, sin guía' },
      },
    },
    de: {
      question: 'Welches Tour-Format bevorzugst du?',
      options: {
        'small-group': { label: 'Kleine, freundliche Gruppe', sub: 'Beste Balance aus Preis und Geselligkeit' },
        'private-vip': { label: '100% privater Guide / Fahrer', sub: 'Eigenes Tempo, persönliche Betreuung' },
        'ticket-only': { label: 'Nur Ticket / ohne Guide', sub: 'Eintritt auf eigene Faust' },
      },
    },
    ar: {
      question: 'ما نظام الجولة الذي تفضله؟',
      options: {
        'small-group': { label: 'مجموعة صغيرة ودية', sub: 'أفضل توازن بين السعر والأجواء' },
        'private-vip': { label: 'مرشد وسيارة خاصة 100%', sub: 'وتيرة مخصصة واهتمام فردي' },
        'ticket-only': { label: 'تذكرة دخول فقط / تجول حر', sub: 'دخول بدون مرشد' },
      },
    },
  },
  'tour-timing': {
    fr: {
      question: 'Quel est le meilleur moment pour vous ?',
      options: {
        morning: { label: 'Départ le matin', sub: 'Éviter la chaleur et la foule' },
        'sunset-golden': { label: 'Coucher du soleil / Heure dorée', sub: 'Meilleure lumière photo et air plus frais' },
        'full-day': { label: 'Excursion à la journée', sub: 'Immersion complète' },
      },
    },
    es: {
      question: '¿Cuál es el mejor horario para ti?',
      options: {
        morning: { label: 'Salida por la mañana', sub: 'Evitar el calor y las multitudes' },
        'sunset-golden': { label: 'Atardecer / Hora dorada', sub: 'Mejor luz para fotos y aire fresco' },
        'full-day': { label: 'Excursión de día completo', sub: 'Inmersión total' },
      },
    },
    de: {
      question: 'Wann passt es für dich am besten?',
      options: {
        morning: { label: 'Start am Morgen', sub: 'Vor der Hitze und dem großen Andrang' },
        'sunset-golden': { label: 'Sonnenuntergang / Golden Hour', sub: 'Bestes Fotolicht & angenehmere Luft' },
        'full-day': { label: 'Ganztagesausflug', sub: 'Tiefes Eintauchen' },
      },
    },
    ar: {
      question: 'ما هو أفضل وقت يناسبك؟',
      options: {
        morning: { label: 'انطلاق صباحي', sub: 'لتجنب الحرارة والازدحام' },
        'sunset-golden': { label: 'عند الغروب / الساعة الذهبية', sub: 'أفضل إضاءة للتصوير وهواء لطيف' },
        'full-day': { label: 'رحلة ليوم كامل', sub: 'انغماس كامل في التجربة' },
      },
    },
  },
  'tour-energy': {
    fr: {
      question: 'Niveau d’effort physique et confort ?',
      options: {
        'relaxed-easy': { label: 'Facile & détendu', sub: 'Effort physique minimal, pauses à l’ombre' },
        'thrilling-active': { label: 'Sensations & actif', sub: 'Aventure, marche et adrénaline' },
      },
    },
    es: {
      question: '¿Nivel de energía y comodidad?',
      options: {
        'relaxed-easy': { label: 'Fácil y relajado', sub: 'Esfuerzo mínimo y paradas a la sombra' },
        'thrilling-active': { label: 'Emocionante y activo', sub: 'Aventura, movimiento y adrenalina' },
      },
    },
    de: {
      question: 'Körperliche Aktivität & Komfort?',
      options: {
        'relaxed-easy': { label: 'Leicht & entspannt', sub: 'Wenig Anstrengung, schattige Pausen' },
        'thrilling-active': { label: 'Actionreich & aktiv', sub: 'Abenteuer, Bewegung und Adrenalin' },
      },
    },
    ar: {
      question: 'مستوى المجهود والراحة؟',
      options: {
        'relaxed-easy': { label: 'سهل ومريح', sub: 'أقل مجهود بدني مع استراحات مظللة' },
        'thrilling-active': { label: 'مثير ونشيط', sub: 'مغامرة وحركة وأدرينالين' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // PATH-SPECIFIC QUESTIONS (first-timer, adventure, nomad, culture, luxury)
  // ═══════════════════════════════════════════════════════════════════
  'ft-days': {
    fr: {
      question: 'Combien de jours dure votre voyage ?',
      options: {
        '3-5': { label: '3–5 jours', sub: 'La boucle « Magie Express »' },
        '6-9': { label: '6–9 jours', sub: 'Le « Triangle d’Or »' },
        '10+': { label: '10+ jours', sub: 'Le « Grand Circuit » du Maroc' },
      },
    },
    es: {
      question: '¿Cuántos días dura tu viaje?',
      options: {
        '3-5': { label: '3–5 días', sub: 'Circuito "Magia Rápida"' },
        '6-9': { label: '6–9 días', sub: 'El "Triángulo Dorado"' },
        '10+': { label: '10+ días', sub: 'La "Gran Ruta por Marruecos"' },
      },
    },
    de: {
      question: 'Wie viele Tage dauert deine Reise?',
      options: {
        '3-5': { label: '3–5 Tage', sub: 'Die schnelle Magie-Schleife' },
        '6-9': { label: '6–9 Tage', sub: 'Das Goldene Dreieck' },
        '10+': { label: '10+ Tage', sub: 'Die große Marokko-Rundreise' },
      },
    },
    ar: {
      question: 'كم عدد أيام رحلتك؟',
      options: {
        '3-5': { label: '3–5 أيام', sub: 'جولة سريعة مركزة' },
        '6-9': { label: '6–9 أيام', sub: 'المثلث الذهبي' },
        '10+': { label: '10+ أيام', sub: 'الجولة المغربية الكبرى' },
      },
    },
  },
  'ft-excitement': {
    fr: {
      question: 'Qu’est-ce qui vous enthousiasme le plus ?',
      options: {
        cities: { label: 'Villes colorées', sub: 'Médinas et marchés' },
        beaches: { label: 'Plages de l’Atlantique', sub: 'Air marin et détente' },
        desert: { label: 'Désert du Sahara', sub: 'Bivouacs et dromadaires' },
        everything: { label: 'Le mix complet', sub: 'Ne rien manquer' },
      },
    },
    es: {
      question: '¿Qué es lo que más ilusión te hace?',
      options: {
        cities: { label: 'Ciudades llenas de color', sub: 'Medinas y mercados' },
        beaches: { label: 'Playas del Atlántico', sub: 'Brisa marina y descanso' },
        desert: { label: 'Desierto del Sáhara', sub: 'Campamentos y camellos' },
        everything: { label: 'De todo un poco', sub: 'No perderme nada' },
      },
    },
    de: {
      question: 'Worauf freust du dich am meisten?',
      options: {
        cities: { label: 'Farbenfrohe Städte', sub: 'Medinas & Märkte' },
        beaches: { label: 'Atlantikstrände', sub: 'Meeresluft & Entspannung' },
        desert: { label: 'Sahara-Wüste', sub: 'Wüstencamps & Kamele' },
        everything: { label: 'Die komplette Mischung', sub: 'Nichts verpassen' },
      },
    },
    ar: {
      question: 'ما الذي يثير حماسك أكثر؟',
      options: {
        cities: { label: 'مدن نابضة بالألوان', sub: 'المدن العتيقة والأسواق' },
        beaches: { label: 'شواطئ الأطلسي', sub: 'هواء البحر والاسترخاء' },
        desert: { label: 'الصحراء الكبرى', sub: 'تخييم وركوب الجمال' },
        everything: { label: 'المزيج الكامل', sub: 'تجربة كل شيء دون تفويت' },
      },
    },
  },
  'ft-style': {
    fr: {
      question: 'Quel est votre style de voyage préféré ?',
      options: {
        lean: { label: 'Budget / Authentique', sub: 'Pépites locales & économies' },
        balanced: { label: 'Milieu de gamme / Confort', sub: 'Meilleur rapport qualité-prix' },
        premium: { label: 'Premium / Luxe', sub: 'Sélection d’excellence' },
      },
    },
    es: {
      question: '¿Cuál es tu estilo de viaje preferido?',
      options: {
        lean: { label: 'Económico / Auténtico', sub: 'Joyas locales y ahorro' },
        balanced: { label: 'Gama media / Confort', sub: 'Mejor relación calidad-precio' },
        premium: { label: 'Premium / Lujo', sub: 'Excelencia seleccionada' },
      },
    },
    de: {
      question: 'Welchen Reisestil bevorzugst du?',
      options: {
        lean: { label: 'Budget / Authentisch', sub: 'Lokale Tipps & Ersparnis' },
        balanced: { label: 'Mittelklasse / Komfort', sub: 'Bestes Preis-Leistungs-Verhältnis' },
        premium: { label: 'Premium / Luxus', sub: 'Handverlesene Spitzenklasse' },
      },
    },
    ar: {
      question: 'ما هو أسلوب السفر المفضل لديك؟',
      options: {
        lean: { label: 'اقتصادي / أصيل', sub: 'أماكن محلية وتوفير' },
        balanced: { label: 'متوسط / مريح', sub: 'أفضل قيمة مقابل السعر' },
        premium: { label: 'فاخر / راقٍ', sub: 'أعلى درجات التميز' },
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // FOOD & DRINK DECISION TREE (foodQuiz.ts)
  // ═══════════════════════════════════════════════════════════════════
  'food-intent': {
    fr: {
      question: 'De quoi avez-vous envie en ce moment ?',
      options: {
        'branch-eat': { label: 'Manger un repas', sub: 'Tajines, street food, poissons frais ou gastronomie' },
        'branch-coffee': { label: 'Café & Thé', sub: 'Cafés de spécialité, thé à la menthe, pâtisseries et jus frais' },
        'branch-bars': { label: 'Bars & Vie nocturne', sub: 'Rooftops au coucher du soleil, bars à cocktails et musique live' },
      },
    },
    es: {
      question: '¿Qué te apetece ahora mismo?',
      options: {
        'branch-eat': { label: 'Comer una comida', sub: 'Tajines, comida callejera, marisco o alta cocina' },
        'branch-coffee': { label: 'Café y Té', sub: 'Cafés de especialidad, té a la menta, dulces y zumos frescos' },
        'branch-bars': { label: 'Bares y Vida nocturna', sub: 'Rooftops al atardecer, cócteles, vinos y música en vivo' },
      },
    },
    de: {
      question: 'Worauf hast du gerade Lust?',
      options: {
        'branch-eat': { label: 'Etwas essen', sub: 'Tajine, Street Food, frischer Fisch oder Fine Dining' },
        'branch-coffee': { label: 'Kaffee & Tee', sub: 'Cafés, Minztee-Terrassen, Gebäck & frische Säfte' },
        'branch-bars': { label: 'Bars & Nachtleben', sub: 'Sunset-Rooftops, Cocktail-Lounges & Live-Musik' },
      },
    },
    ar: {
      question: 'ما الذي تشتهيه الآن؟',
      options: {
        'branch-eat': { label: 'تناول وجبة', sub: 'طواجن، أكل الشارع، مأكولات بحرية أو مطاعم فاخرة' },
        'branch-coffee': { label: 'قهوة وشاي', sub: 'مقاهي مختصة، شاي بالنعناع، حلويات وعصائر طازجة' },
        'branch-bars': { label: 'بارات وسهرات ليلية', sub: 'روفتوب عند الغروب، كوكتيلات وموسيقى حية' },
      },
    },
  },
  'coffee-drink': {
    fr: {
      question: 'Que souhaitez-vous boire ou déguster ?',
      options: {
        'specialty-coffee': { label: 'Café de spécialité & Espresso', sub: 'Cappuccinos, cafés filtres et lattes glacés' },
        'mint-tea': { label: 'Thé à la menthe traditionnel', sub: 'Thé marocain à la menthe et infusions' },
        'fresh-juice': { label: 'Jus frais & Smoothies', sub: 'Agrumes pressés et smoothies avocat zâazâa' },
        'cafe-pastries': { label: 'Pâtisseries & Douceurs', sub: 'Croissants, cornes de gazelle et desserts' },
      },
    },
    es: {
      question: '¿Qué te gustaría tomar o disfrutar?',
      options: {
        'specialty-coffee': { label: 'Café de especialidad y Espresso', sub: 'Capuchinos, cafés de filtro y lattes fríos' },
        'mint-tea': { label: 'Té a la menta tradicional', sub: 'Té marroquí e infusiones de hierbas' },
        'fresh-juice': { label: 'Zumos frescos y Batidos', sub: 'Naranja recién exprimida y batidos zâazâa' },
        'cafe-pastries': { label: 'Repostería y Dulces', sub: 'Croissants, cuernos de gacela y postres' },
      },
    },
    de: {
      question: 'Was möchtest du trinken oder genießen?',
      options: {
        'specialty-coffee': { label: 'Specialty Coffee & Espresso', sub: 'Cappuccino, Filterkaffee und Iced Latte' },
        'mint-tea': { label: 'Traditioneller Minztee', sub: 'Marokkanischer Minztee und Kräutertees' },
        'fresh-juice': { label: 'Frische Säfte & Smoothies', sub: 'Frisch gepresste Zitrusfrüchte und Avocado-Shakes' },
        'cafe-pastries': { label: 'Gebäck & Süßes', sub: 'Croissants, Gazellenhörner und Desserts' },
      },
    },
    ar: {
      question: 'ماذا تود أن تشرب أو تستمتع به؟',
      options: {
        'specialty-coffee': { label: 'قهوة مختصة وإسبريسو', sub: 'كابتشينو، قهوة مقطرة ولاتيه مثلج' },
        'mint-tea': { label: 'شاي مغربي بالنعناع', sub: 'أتاي تقليدي ومشروبات عشبية' },
        'fresh-juice': { label: 'عصائر طازجة وسموذي', sub: 'عصير برتقال طازج وزعزع بالأفوكادو' },
        'cafe-pastries': { label: 'مخبوزات وحلويات', sub: 'كرواسان، كعب الغزال وحلويات تقليدية' },
      },
    },
  },
  'coffee-setting': {
    fr: {
      question: 'Quel cadre correspond à votre moment ?',
      options: {
        'wifi-work': { label: 'Ordinateur & Wi-Fi calme', sub: 'Wi-Fi fiable et tables paisibles pour travailler' },
        'sunny-terrace': { label: 'Terrasse ensoleillée', sub: 'Observer la ville dans une ambiance animée' },
        'quiet-courtyard': { label: 'Cour ou jardin ombragé', sub: 'Oasis paisible loin du bruit de la rue' },
        'rooftop-cafe': { label: 'Café en rooftop', sub: 'Café ou thé avec vue sur la médina' },
      },
    },
    es: {
      question: '¿Qué ambiente encaja con tu momento?',
      options: {
        'wifi-work': { label: 'Portátil y Wi-Fi tranquilo', sub: 'Buen Wi-Fi y mesas cómodas para trabajar o leer' },
        'sunny-terrace': { label: 'Terraza soleada', sub: 'Ver la vida pasar y ambiente animado' },
        'quiet-courtyard': { label: 'Patio ajardinado con sombra', sub: 'Oasis tranquilo lejos del bullicio' },
        'rooftop-cafe': { label: 'Café en azotea', sub: 'Té o café con vistas a la medina' },
      },
    },
    de: {
      question: 'Welche Café-Atmosphäre passt zu dir?',
      options: {
        'wifi-work': { label: 'Laptop & ruhiges WLAN', sub: 'Zuverlässiges WLAN und ruhige Tische zum Arbeiten' },
        'sunny-terrace': { label: 'Sonnige Straßenterrasse', sub: 'Leute beobachten und lebendiges Flair' },
        'quiet-courtyard': { label: 'Schattiger Innenhof', sub: 'Ruhige Riad-Oase abseits des Trubels' },
        'rooftop-cafe': { label: 'Rooftop-Café', sub: 'Tee oder Kaffee mit Blick über die Medina' },
      },
    },
    ar: {
      question: 'أي أجواء مقهى تناسب لحظتك؟',
      options: {
        'wifi-work': { label: 'عمل وواي فاي هادئ', sub: 'إنترنت موثوق وطاولات مريحة للقراءة أو العمل' },
        'sunny-terrace': { label: 'تراس مشمس على الشارع', sub: 'مشاهدة الحياة اليومية وأجواء حيوية' },
        'quiet-courtyard': { label: 'فناء وحديقة مظللة', sub: 'واحة هادئة بعيداً عن ضجيج الشارع' },
        'rooftop-cafe': { label: 'مقهى على السطح', sub: 'شاي أو قهوة مع إطلالة على المدينة' },
      },
    },
  },
  'coffee-tier': {
    fr: {
      question: 'Quel style de café préférez-vous ?',
      options: {
        'local-cafe': { label: 'Café de quartier local', sub: 'Adresse marocaine classique, 15–35 MAD' },
        'boutique-cafe': { label: 'Torréfacteur & Salon chic', sub: 'Café de spécialité soigné, 40–90 MAD' },
      },
    },
    es: {
      question: '¿Qué estilo de café prefieres?',
      options: {
        'local-cafe': { label: 'Café local de barrio', sub: 'Sitio marroquí clásico, 15–35 MAD' },
        'boutique-cafe': { label: 'Cafetería boutique y de autor', sub: 'Café de especialidad cuidado, 40–90 MAD' },
      },
    },
    de: {
      question: 'Welchen Café-Stil bevorzugst du?',
      options: {
        'local-cafe': { label: 'Lokales Nachbarschafts-Café', sub: 'Klassisch marokkanisch, 15–35 MAD' },
        'boutique-cafe': { label: 'Boutique-Rösterei & Salon', sub: 'Kuratierter Specialty-Spot, 40–90 MAD' },
      },
    },
    ar: {
      question: 'أي نوع مقهى تفضل؟',
      options: {
        'local-cafe': { label: 'مقهى حي تقليدي', sub: 'أسعار محلية مناسبة، 15–35 درهم' },
        'boutique-cafe': { label: 'مقهى بوتيك وقهوة مختصة', sub: 'تصميم عصري وجودة عالية، 40–90 درهم' },
      },
    },
  },
  'bars-type': {
    fr: {
      question: 'Quel type de bar recherchez-vous ce soir ?',
      options: {
        'sunset-rooftop-bar': { label: 'Bar rooftop au coucher du soleil', sub: 'Verres panoramiques à l’heure dorée' },
        'cocktail-wine-lounge': { label: 'Bar à cocktails & à vin', sub: 'Mixologie créative, vins marocains et apéritifs' },
        'live-music-bar': { label: 'Bar musique live & Jazz', sub: 'Jazz acoustique, fusion Gnawa ou DJ sets' },
        'casual-social-bar': { label: 'Bar convivial & décontracté', sub: 'Bières, tables animées et accès facile' },
      },
    },
    es: {
      question: '¿Qué tipo de local nocturno buscas?',
      options: {
        'sunset-rooftop-bar': { label: 'Bar en azotea al atardecer', sub: 'Copas panorámicas en la hora dorada' },
        'cocktail-wine-lounge': { label: 'Lounge de cócteles y vinos', sub: 'Coctelería de autor y vinos marroquíes' },
        'live-music-bar': { label: 'Bar de música en vivo y Jazz', sub: 'Jazz acústico, fusión Gnawa o sesiones DJ' },
        'casual-social-bar': { label: 'Bar informal y social', sub: 'Cervezas relajadas, ambiente vivo y sin reserva' },
      },
    },
    de: {
      question: 'Welche Art von Abend-Spot suchst du?',
      options: {
        'sunset-rooftop-bar': { label: 'Sunset-Rooftop-Bar', sub: 'Panoramablick und Drinks zur goldenen Stunde' },
        'cocktail-wine-lounge': { label: 'Cocktail- & Weinlounge', sub: 'Craft-Cocktails, marokkanische Weine & Aperitifs' },
        'live-music-bar': { label: 'Live-Musik- & Jazzbar', sub: 'Akustik-Jazz, Gnawa-Fusion oder DJ-Sets' },
        'casual-social-bar': { label: 'Lockere Social-Bar', sub: 'Entspannte Drinks, gesellige Tische, unkompliziert' },
      },
    },
    ar: {
      question: 'ما نوع المكان المسائي الذي تبحث عنه؟',
      options: {
        'sunset-rooftop-bar': { label: 'بار روفتوب عند الغروب', sub: 'مشروبات بإطلالة بانورامية وقت الغروب' },
        'cocktail-wine-lounge': { label: 'لاونج كوكتيل ونبيذ', sub: 'كوكتيلات مبتكرة ونبيذ مغربي' },
        'live-music-bar': { label: 'بار موسيقى حية وجاز', sub: 'موسيقى جاز وكناوة أو دي جي' },
        'casual-social-bar': { label: 'بار مريح واجتماعي', sub: 'أجواء بسيطة ومريحة مع الأصدقاء' },
      },
    },
  },
  'bars-vibe': {
    fr: {
      question: 'Quelle ambiance correspond à votre soirée ?',
      options: {
        'intimate-date': { label: 'Intime & Romantique', sub: 'Tables aux chandelles et conversations calmes' },
        'lively-friends': { label: 'Animé & Festif', sub: 'Énergie conviviale, parfait entre amis' },
        'upscale-chic': { label: 'Chic & Élégant', sub: 'Lounge habillé ou bar d’hôtel raffiné' },
      },
    },
    es: {
      question: '¿Qué ambiente encaja con tu noche?',
      options: {
        'intimate-date': { label: 'Íntimo y Romántico', sub: 'Rincones con velas y charla tranquila' },
        'lively-friends': { label: 'Animado y Social', sub: 'Buen ambiente y música, ideal con amigos' },
        'upscale-chic': { label: 'Elegante y Chic', sub: 'Lounge sofisticado o bar de hotel' },
      },
    },
    de: {
      question: 'Welche Stimmung passt zu deinem Abend?',
      options: {
        'intimate-date': { label: 'Intim & Romantisch', sub: 'Kerzenlicht und entspannte Gespräche' },
        'lively-friends': { label: 'Lebhaft & Gesellig', sub: 'Energiegeladene Atmosphäre mit Freunden' },
        'upscale-chic': { label: 'Gehoben & Schick', sub: 'Stilvolle Lounge oder elegante Hotelbar' },
      },
    },
    ar: {
      question: 'ما الأجواء المناسبة لسهرتك؟',
      options: {
        'intimate-date': { label: 'هادئ ورومانسي', sub: 'أجواء دافئة على ضوء الشموع' },
        'lively-friends': { label: 'حيوي واجتماعي', sub: 'أجواء نشطة مثالية مع الأصدقاء' },
        'upscale-chic': { label: 'راقٍ وأنيق', sub: 'لاونج فاخر أو بار فندقي أنيق' },
      },
    },
  },
  'bars-budget': {
    fr: {
      question: 'Quel niveau de budget vous convient ?',
      options: {
        'accessible-bar': { label: 'Accessible & Décontracté', sub: 'Verres simples sans tarifs de luxe' },
        'stylish-mid-bar': { label: 'Milieu de gamme & Stylé', sub: 'Bons cocktails et cadre soigné, budget équilibré' },
        'luxury-palace-bar': { label: 'Palais & Bar d’exception', sub: 'Bars cinq étoiles iconiques et service sur mesure' },
      },
    },
    es: {
      question: '¿Qué nivel de gasto te encaja?',
      options: {
        'accessible-bar': { label: 'Accesible e Informal', sub: 'Copas sencillas sin precios de lujo' },
        'stylish-mid-bar': { label: 'Gama media y con Estilo', sub: 'Buenos cócteles y ambiente cuidado' },
        'luxury-palace-bar': { label: 'Lounge de Palacio y Lujo', sub: 'Bares icónicos de cinco estrellas' },
      },
    },
    de: {
      question: 'Welches Preisniveau passt zu dir?',
      options: {
        'accessible-bar': { label: 'Erschwinglich & Locker', sub: 'Entspannte Drinks ohne Luxusaufschlag' },
        'stylish-mid-bar': { label: 'Mittelklasse & Stilvoll', sub: 'Tolle Cocktails und schönes Ambiente' },
        'luxury-palace-bar': { label: 'Luxus-Palastlounge', sub: 'Legendäre Fünf-Sterne-Bars mit Top-Service' },
      },
    },
    ar: {
      question: 'ما مستوى الميزانية المناسب لك؟',
      options: {
        'accessible-bar': { label: 'مناسب وبسيط', sub: 'مشروبات بأسعار معتدلة بدون تكلف' },
        'stylish-mid-bar': { label: 'متوسط وأنيق', sub: 'كوكتيلات مميزة وأجواء جميلة' },
        'luxury-palace-bar': { label: 'لاونج قصر فاخر', sub: 'بارات خمس نجوم وخدمة استثنائية' },
      },
    },
  },
};

// City Category Pick Labels (PreQuizShortcutBar pills across all cities)
const CITY_PICK_LABEL_TRANSLATIONS: Record<string, Record<NonEnLang, string>> = {
  'Akchour Hikes': { fr: 'Cascades d’Akchour', es: 'Rutas en Akchour', de: 'Akchour-Wanderungen', ar: 'شلالات أقشور' },
  'Ancient Hammams': { fr: 'Hammams anciens', es: 'Hammams antiguos', de: 'Alte Hammams', ar: 'حمامات عتيقة' },
  'Ancient Medersas': { fr: 'Médersas anciennes', es: 'Madrasas antiguas', de: 'Alte Medersen', ar: 'المدارس العتيقة' },
  'Andalusian Riads': { fr: 'Riads andalous', es: 'Riads andalusíes', de: 'Andalusische Riads', ar: 'رياضات أندلسية' },
  'Antique Rugs': { fr: 'Tapis anciens', es: 'Alfombras antiguas', de: 'Antike Teppiche', ar: 'زرابي عتيقة' },
  'Apartments': { fr: 'Appartements', es: 'Apartamentos', de: 'Apartments', ar: 'شقق فندقية' },
  'Argan Co-ops': { fr: 'Coopératives d’argan', es: 'Cooperativas argán', de: 'Argan-Kooperativen', ar: 'تعاونيات الأركان' },
  'Art & Prints': { fr: 'Art & Gravures', es: 'Arte y grabados', de: 'Kunst & Drucke', ar: 'فنون ولوحات' },
  'Art Deco Hotels': { fr: 'Hôtels Art Déco', es: 'Hoteles Art Déco', de: 'Art-Déco-Hotels', ar: 'فنادق آرت ديكو' },
  'Art Deco Walks': { fr: 'Balades Art Déco', es: 'Rutas Art Déco', de: 'Art-Déco-Touren', ar: 'جولات آرت ديكو' },
  'Art Galleries': { fr: 'Galeries d’art', es: 'Galerías de arte', de: 'Kunstgalerien', ar: 'معارض فنية' },
  'Artisan Cafes': { fr: 'Cafés artisanaux', es: 'Cafés artesanales', de: 'Handwerkscafés', ar: 'مقاهٍ تقليدية' },
  'Artisan Guilds': { fr: 'Corporations d’artisans', es: 'Gremios artesanos', de: 'Handwerkszünfte', ar: 'دور الصناع' },
  'Atlantic Seafood': { fr: 'Poissons de l’Atlantique', es: 'Marisco atlántico', de: 'Atlantik-Fisch', ar: 'أسماك الأطلسي' },
  'Atlantic Surf': { fr: 'Surf Atlantique', es: 'Surf atlántico', de: 'Atlantik-Surfen', ar: 'ركوب أمواج الأطلسي' },
  'Beach Lounges': { fr: 'Lounges de plage', es: 'Lounges de playa', de: 'Strand-Lounges', ar: 'لاونجات الشاطئ' },
  'Beach Resorts': { fr: 'Resorts plage', es: 'Resorts de playa', de: 'Strandresorts', ar: 'منتجعات شاطئية' },
  'Beach Sports': { fr: 'Sports de plage', es: 'Deportes playa', de: 'Strandsport', ar: 'رياضات شاطئية' },
  'Bennis Pastries': { fr: 'Pâtisseries Bennis', es: 'Dulces Bennis', de: 'Bennis-Gebäck', ar: 'حلويات بنيس' },
  'Berber Pizza': { fr: 'Pizza berbère', es: 'Pizza bereber', de: 'Berber-Pizza', ar: 'مدفونة أمازيغية' },
  'Berber Rugs': { fr: 'Tapis berbères', es: 'Alfombras bereberes', de: 'Berberteppiche', ar: 'زرابي أمازيغية' },
  'Blue Alleys': { fr: 'Ruelles bleues', es: 'Callejones azules', de: 'Blaue Gassen', ar: 'الأزقة الزرقاء' },
  'Blue Ceramics': { fr: 'Céramiques bleues', es: 'Cerámica azul', de: 'Blaue Keramik', ar: 'خزف أزرق' },
  'Blue Pottery': { fr: 'Poterie bleue', es: 'Alfarería azul', de: 'Blaue Töpferei', ar: 'فخار فاس الأزرق' },
  'Blue Riads': { fr: 'Riads bleus', es: 'Riads azules', de: 'Blaue Riads', ar: 'رياضات زرقاء' },
  'Blue Rooftops': { fr: 'Toits bleus', es: 'Azoteas azules', de: 'Blaue Dächer', ar: 'أسطح زرقاء' },
  'Boutiques': { fr: 'Boutiques', es: 'Boutiques', de: 'Boutiquen', ar: 'بوتيكات' },
  'Brass & Zellij': { fr: 'Laiton & Zellige', es: 'Latón y Zellige', de: 'Messing & Zellige', ar: 'نحاس وزليج' },
  'Cactus Silk': { fr: 'Soie de cactus', es: 'Seda de cactus', de: 'Kaktusseide', ar: 'حرير الصبار' },
  'Cafes & Brunch': { fr: 'Cafés & Brunch', es: 'Cafés y Brunch', de: 'Cafés & Brunch', ar: 'مقاهٍ وفطور' },
  'Café Hafa Walk': { fr: 'Balade Café Hafa', es: 'Paseo Café Hafa', de: 'Café-Hafa-Weg', ar: 'جولة مقهى الحافة' },
  'Camel Treks': { fr: 'Balades à dromadaire', es: 'Rutas en camello', de: 'Kamelritte', ar: 'جولات الجمال' },
  'Camel Wool Rugs': { fr: 'Tapis en laine de dromadaire', es: 'Alfombras de camello', de: 'Kamelhaarteppiche', ar: 'زرابي وبر الجمل' },
  'Cedar Carvings': { fr: 'Bois de cèdre sculpté', es: 'Talla en cedro', de: 'Zedernholz-Schnitzerei', ar: 'خشب الأرز' },
  'Chiseled Brass': { fr: 'Laiton ciselé', es: 'Latón cincelado', de: 'Ziseliertes Messing', ar: 'نحاس منقوش' },
  'Chouara Tannery': { fr: 'Tannerie Chouara', es: 'Curtiduría Chouara', de: 'Chouara-Gerberei', ar: 'مدابغ شوارة' },
  'Coastal Hikes': { fr: 'Randonnées côtières', es: 'Rutas costeras', de: 'Küstenwanderungen', ar: 'مسارات ساحلية' },
  'Coastal Pottery': { fr: 'Poterie côtière', es: 'Cerámica costera', de: 'Küstenkeramik', ar: 'خزف ساحلي' },
  'Colonial Hotels': { fr: 'Hôtels coloniaux', es: 'Hoteles coloniales', de: 'Kolonialhotels', ar: 'فنادق تاريخية' },
  'Concept Stores': { fr: 'Concept Stores', es: 'Concept Stores', de: 'Concept Stores', ar: 'متاجر عصرية' },
  'Corniche Stays': { fr: 'Séjours Corniche', es: 'Estancias Corniche', de: 'Corniche-Unterkünfte', ar: 'إقامات الكورنيش' },
  'Country Bakeries': { fr: 'Boulangeries de campagne', es: 'Panaderías rurales', de: 'Landbäckereien', ar: 'مخابز تقليدية' },
  'Country Retreats': { fr: 'Retraites champêtres', es: 'Retiros rurales', de: 'Land-Retreats', ar: 'منتجعات ريفية' },
  'Courtyard Eats': { fr: 'Tables de patio', es: 'Mesas en patio', de: 'Innenhof-Küche', ar: 'مطاعم الفناء' },
  'Day Hikes': { fr: 'Randonnées', es: 'Excursiones', de: 'Tageswanderungen', ar: 'رحلات مشي' },
  'Desert Camps': { fr: 'Bivouacs désert', es: 'Campamentos desierto', de: 'Wüstencamps', ar: 'مخيمات صحراوية' },
  'Desert Dates': { fr: 'Dattes du désert', es: 'Dátiles del desierto', de: 'Wüstendatteln', ar: 'تمور الصحراء' },
  'Desert Fossils': { fr: 'Fossiles du désert', es: 'Fósiles del desierto', de: 'Wüstenfossilien', ar: 'أحافير الصحراء' },
  'Desert Kasbahs': { fr: 'Kasbahs du désert', es: 'Kasbahs del desierto', de: 'Wüsten-Kasbahs', ar: 'قصبات الصحراء' },
  'Desert Quads': { fr: 'Quads dans le désert', es: 'Quads en el desierto', de: 'Wüsten-Quads', ar: 'دراجات الصحراء' },
  'Dune Dinners': { fr: 'Dîners dans les dunes', es: 'Cenas en las dunas', de: 'Dinner in den Dünen', ar: 'عشاء في الكثبان' },
  'Dune Glamping': { fr: 'Glamping dans les dunes', es: 'Glamping en dunas', de: 'Dünen-Glamping', ar: 'تخييم فاخر' },
  'Dune Horses': { fr: 'Cheval sur les dunes', es: 'Caballos en dunas', de: 'Reiten am Strand', ar: 'خيل على الكثبان' },
  'Family & Parks': { fr: 'Famille & Parcs', es: 'Familia y Parques', de: 'Familie & Parks', ar: 'عائلة ومنتزهات' },
  'Fine Dining': { fr: 'Gastronomie', es: 'Alta cocina', de: 'Fine Dining', ar: 'مطاعم راقية' },
  'Fossil Hunting': { fr: 'Chasse aux fossiles', es: 'Búsqueda de fósiles', de: 'Fossiliensuche', ar: 'استكشاف الأحافير' },
  'Fresh Seafood': { fr: 'Fruits de mer frais', es: 'Marisco fresco', de: 'Frischer Fisch', ar: 'مأكولات بحرية' },
  'Fusion Dining': { fr: 'Cuisine fusion', es: 'Cocina fusión', de: 'Fusion-Küche', ar: 'مطاعم فيوجن' },
  'Gardens & Art': { fr: 'Jardins & Art', es: 'Jardines y Arte', de: 'Gärten & Kunst', ar: 'حدائق وفنون' },
  'Gnawa Music': { fr: 'Musique Gnaoua', es: 'Música Gnawa', de: 'Gnawa-Musik', ar: 'موسيقى كناوة' },
  'Guéliz Cafes': { fr: 'Cafés de Guéliz', es: 'Cafés de Guéliz', de: 'Guéliz-Cafés', ar: 'مقاهي جيليز' },
  'Habous Grills': { fr: 'Grillades Habous', es: 'Parrillas Habous', de: 'Habous-Grills', ar: 'مشويات الحبوس' },
  'Habous Quarter': { fr: 'Quartier des Habous', es: 'Barrio Habous', de: 'Habous-Viertel', ar: 'حي الحبوس' },
  'Habous Souks': { fr: 'Souks des Habous', es: 'Zocos Habous', de: 'Habous-Souks', ar: 'أسواق الحبوس' },
  'Harbor Walks': { fr: 'Balades au port', es: 'Paseos por el puerto', de: 'Hafenspaziergang', ar: 'جولة الميناء' },
  'Hassan II Mosque': { fr: 'Mosquée Hassan II', es: 'Mezquita Hassan II', de: 'Hassan-II.-Moschee', ar: 'مسجد الحسن الثاني' },
  'Herb Workshops': { fr: 'Ateliers d’herbes', es: 'Talleres de hierbas', de: 'Kräuter-Workshops', ar: 'ورش الأعشاب' },
  'Hercules Caves': { fr: 'Grottes d’Hercule', es: 'Cuevas de Hércules', de: 'Herkulesgrotte', ar: 'مغارة هرقل' },
  'Hillside Dars': { fr: 'Dars à flanc de colline', es: 'Dars en la ladera', de: 'Hanglage-Dars', ar: 'دور على التل' },
  'Hilltop Palaces': { fr: 'Palais sur les hauteurs', es: 'Palacios en la colina', de: 'Hügelpaläste', ar: 'قصور التلال' },
  'Historic Palaces': { fr: 'Palais historiques', es: 'Palacios históricos', de: 'Historische Paläste', ar: 'قصور تاريخية' },
  'Historic Sights': { fr: 'Sites historiques', es: 'Lugares históricos', de: 'Historische Orte', ar: 'معالم تاريخية' },
  'Hivernage Chic': { fr: 'Hivernage Chic', es: 'Hivernage Chic', de: 'Schickes Hivernage', ar: 'حي النخيل العصري' },
  'Hostels': { fr: 'Auberges', es: 'Hostales', de: 'Hostels', ar: 'نزل شبابية' },
  'Indigo & Soaps': { fr: 'Indigo & Savons', es: 'Índigo y Jabones', de: 'Indigo & Seifen', ar: 'نيلة وصابون' },
  'Indigo Scarves': { fr: 'Chèches indigo', es: 'Pañuelos índigo', de: 'Indigo-Schals', ar: 'أوشحة النيلة' },
  'Kasbah Fortress': { fr: 'Forteresse Kasbah', es: 'Fortaleza Kasbah', de: 'Kasbah-Festung', ar: 'القصبة الأثرية' },
  'Kasbah Museum': { fr: 'Musée de la Kasbah', es: 'Museo de la Kasbah', de: 'Kasbah-Museum', ar: 'متحف القصبة' },
  'Kasbah Riads': { fr: 'Riads de la Kasbah', es: 'Riads de la Kasbah', de: 'Kasbah-Riads', ar: 'رياضات القصبة' },
  'Kasbah Terraces': { fr: 'Terrasses Kasbah', es: 'Terrazas Kasbah', de: 'Kasbah-Terrassen', ar: 'تراسات القصبة' },
  'Leather Bags': { fr: 'Sacs en cuir', es: 'Bolsos de cuero', de: 'Ledertaschen', ar: 'حقائب جلدية' },
  'Leather Goods': { fr: 'Maroquinerie', es: 'Artículos de cuero', de: 'Lederwaren', ar: 'مصنوعات جلدية' },
  'Literary Cafes': { fr: 'Cafés littéraires', es: 'Cafés literarios', de: 'Literaturcafés', ar: 'مقاهٍ أدبية' },
  'Local Strips': { fr: 'Rues commerçantes', es: 'Calles locales', de: 'Lokale Einkaufsstraßen', ar: 'شوارع التسوق' },
  'Luxury Malls': { fr: 'Centres commerciaux chic', es: 'Centros de lujo', de: 'Luxus-Malls', ar: 'مراكز تسوق فاخرة' },
  'Malabata Resorts': { fr: 'Resorts Malabata', es: 'Resorts Malabata', de: 'Malabata-Resorts', ar: 'منتجعات مالاباطا' },
  'Malls & Fashion': { fr: 'Malls & Mode', es: 'Centros y Moda', de: 'Malls & Mode', ar: 'مولات وأزياء' },
  'Medina Dars': { fr: 'Dars de la médina', es: 'Dars en la medina', de: 'Medina-Dars', ar: 'دور المدينة' },
  'Medina Riads': { fr: 'Riads de la médina', es: 'Riads de la medina', de: 'Medina-Riads', ar: 'رياضات المدينة' },
  'Medina Rooftops': { fr: 'Rooftops médina', es: 'Azoteas medina', de: 'Medina-Rooftops', ar: 'أسطح المدينة' },
  'Medina Seafood': { fr: 'Poissons médina', es: 'Marisco medina', de: 'Medina-Fisch', ar: 'سمك المدينة' },
  'Modern Cafes': { fr: 'Cafés modernes', es: 'Cafés modernos', de: 'Moderne Cafés', ar: 'مقاهٍ عصرية' },
  'Moroccan Classic': { fr: 'Classique marocain', es: 'Clásico marroquí', de: 'Marokkanische Klassiker', ar: 'مطبخ مغربي أصيل' },
  'Mountain Lodges': { fr: 'Lodges de montagne', es: 'Lodges de montaña', de: 'Berg-Lodges', ar: 'نزل جبلية' },
  'Mountain Tagines': { fr: 'Tagines de montagne', es: 'Tayines de montaña', de: 'Berg-Tajines', ar: 'طواجن جبلية' },
  'Nature Lodges': { fr: 'Lodges nature', es: 'Lodges naturales', de: 'Natur-Lodges', ar: 'نزل طبيعية' },
  'Nomad Camps': { fr: 'Camps nomades', es: 'Campamentos nómadas', de: 'Nomadencamps', ar: 'مخيمات الرحل' },
  'Ocean Resorts': { fr: 'Resorts océan', es: 'Resorts océano', de: 'Ozean-Resorts', ar: 'منتجعات المحيط' },
  'Palmeraie Resorts': { fr: 'Resorts Palmeraie', es: 'Resorts Palmeraie', de: 'Palmeraie-Resorts', ar: 'منتجعات النخيل' },
  'Plaza Bistros': { fr: 'Bistrots de place', es: 'Bistrós de plaza', de: 'Platz-Bistros', ar: 'بيسترو الساحة' },
  'Plaza Terraces': { fr: 'Terrasses de place', es: 'Terrazas de plaza', de: 'Platz-Terrassen', ar: 'تراسات الساحة' },
  'Port Grills': { fr: 'Grillades du port', es: 'Parrillas del puerto', de: 'Hafen-Grills', ar: 'مشويات الميناء' },
  'Quad Buggies': { fr: 'Quads & Buggies', es: 'Quads y Buggies', de: 'Quads & Buggys', ar: 'دراجات رباعية' },
  'Rampart Riads': { fr: 'Riads des remparts', es: 'Riads en murallas', de: 'Stadtmauer-Riads', ar: 'رياضات الأسوار' },
  'Riads & Dars': { fr: 'Riads & Dars', es: 'Riads y Dars', de: 'Riads & Dars', ar: 'رياضات ودور' },
  'Rif Straw Hats': { fr: 'Chapeaux du Rif', es: 'Sombreros del Rif', de: 'Rif-Strohhüte', ar: 'قبعات الريف' },
  'Riverside Dars': { fr: 'Dars au bord de l’eau', es: 'Dars junto al río', de: 'Flussufer-Dars', ar: 'دور على النهر' },
  'Rose Apothecary': { fr: 'Herboristerie rose', es: 'Boticario de rosas', de: 'Rosen-Apotheke', ar: 'عطارة الورد' },
  'Royal Dining': { fr: 'Tables royales', es: 'Alta mesa real', de: 'Königliche Küche', ar: 'موائد ملكية' },
  'Royal Fassi': { fr: 'Gastronomie fassie', es: 'Gastronomía de Fez', de: 'Fassi-Küche', ar: 'مطبخ فاسي أصيل' },
  'Royal Spas': { fr: 'Spas royaux', es: 'Spas reales', de: 'Königliche Spas', ar: 'حمامات وسبا فاخرة' },
  'Safari Lodges': { fr: 'Lodges safari', es: 'Lodges safari', de: 'Safari-Lodges', ar: 'نزل سفاري' },
  'Scenic Sunsets': { fr: 'Couchers de soleil', es: 'Atardeceres', de: 'Sonnenuntergänge', ar: 'مناظر الغروب' },
  'Silver Jewelry': { fr: 'Bijoux en argent', es: 'Joyería de plata', de: 'Silberschmuck', ar: 'حلي الفضة' },
  'Skala Ramparts': { fr: 'Remparts de la Skala', es: 'Murallas Skala', de: 'Skala-Bastion', ar: 'سقالة الصويرة' },
  'Souk Crafts': { fr: 'Artisanat des souks', es: 'Artesanía de zocos', de: 'Souk-Handwerk', ar: 'حرف الأسواق' },
  'Souks & Markets': { fr: 'Souks & Marchés', es: 'Zocos y Mercados', de: 'Souks & Märkte', ar: 'أسواق تقليدية' },
  'Spanish Mosque': { fr: 'Mosquée Espagnole', es: 'Mezquita Española', de: 'Spanische Moschee', ar: 'المسجد الإسباني' },
  'Spas & Hammams': { fr: 'Spas & Hammams', es: 'Spas y Hammams', de: 'Spas & Hammams', ar: 'سبا وحمامات' },
  'Specialty Cafes': { fr: 'Cafés de spécialité', es: 'Cafés de especialidad', de: 'Specialty Cafés', ar: 'قهوة مختصة' },
  'Spice Bazaars': { fr: 'Bazars aux épices', es: 'Bazares de especias', de: 'Gewürzbasare', ar: 'أسواق التوابل' },
  'Spice Souks': { fr: 'Souks aux épices', es: 'Zocos de especias', de: 'Gewürz-Souks', ar: 'سوق التوابل' },
  'Spring Cafes': { fr: 'Cafés au bord de l’eau', es: 'Cafés del manantial', de: 'Quellen-Cafés', ar: 'مقاهي النبع' },
  'Stargazing': { fr: 'Observation des étoiles', es: 'Ver las estrellas', de: 'Sternenbeobachtung', ar: 'مراقبة النجوم' },
  'Strait Seafood': { fr: 'Poissons du Détroit', es: 'Marisco del Estrecho', de: 'Fisch der Meerenge', ar: 'أسماك المضيق' },
  'Street Food': { fr: 'Street Food', es: 'Comida callejera', de: 'Street Food', ar: 'أكل الشارع' },
  'Street Grills': { fr: 'Grillades de rue', es: 'Parrillas callejeras', de: 'Straßengrills', ar: 'مشويات الشارع' },
  'Street Stalls': { fr: 'Échoppes de rue', es: 'Puestos callejeros', de: 'Straßenstände', ar: 'أكشاك الشارع' },
  'Sunset Lounges': { fr: 'Lounges Sunset', es: 'Lounges atardecer', de: 'Sunset-Lounges', ar: 'لاونجات الغروب' },
  'Surf Camps': { fr: 'Camps de surf', es: 'Campamentos de surf', de: 'Surfcamps', ar: 'مخيمات السورف' },
  'Surf Resorts': { fr: 'Resorts surf', es: 'Resorts de surf', de: 'Surf-Resorts', ar: 'منتجعات السورف' },
  'Tannery Leather': { fr: 'Cuir des tanneries', es: 'Cuero de curtiduría', de: 'Gerberei-Leder', ar: 'جلود الدباغة' },
  'Tea Ceremonies': { fr: 'Cérémonies du thé', es: 'Ceremonias del té', de: 'Teezeremonien', ar: 'طقوس الشاي' },
  'Tea Salons': { fr: 'Salons de thé', es: 'Salones de té', de: 'Teesalons', ar: 'صالونات الشاي' },
  'Teapots & Spices': { fr: 'Théières & Épices', es: 'Teteras y Especias', de: 'Teekannen & Gewürze', ar: 'أباريق وتوابل' },
  'Thuya Carving': { fr: 'Sculpture sur thuya', es: 'Talla de tuya', de: 'Thujaholz-Kunst', ar: 'نقش خشب العرعار' },
  'Thuya Woodcraft': { fr: 'Artisanat du thuya', es: 'Madera de tuya', de: 'Thujaholz-Handwerk', ar: 'صناعة خشب العرعار' },
  'Transit Hotels': { fr: 'Hôtels de transit', es: 'Hoteles de tránsito', de: 'Transithotels', ar: 'فنادق العبور' },
  'Village Grills': { fr: 'Grillades du village', es: 'Parrillas locales', de: 'Dorf-Grills', ar: 'مشويات القرية' },
  'Water Sports': { fr: 'Sports nautiques', es: 'Deportes acuáticos', de: 'Wassersport', ar: 'رياضات مائية' },
  'Wave Surfing': { fr: 'Surf & Vagues', es: 'Surf de olas', de: 'Wellenreiten', ar: 'ركوب الأمواج' },
  'Wool Blankets': { fr: 'Couvertures en laine', es: 'Mantas de lana', de: 'Wolldecken', ar: 'أغطية صوفية' },
};

export function translateQuizOption(
  questionId: string,
  option: QuizOption,
  lang: AppLanguage
): QuizOption {
  if (lang === 'en') return option;
  const translated = QUIZ_TRANSLATIONS[questionId]?.[lang]?.options?.[option.id];
  if (!translated) return option;
  return {
    ...option,
    label: translated.label || option.label,
    sub: translated.sub !== undefined ? translated.sub : option.sub,
  };
}

export function translateQuizQuestion(
  question: QuizQuestion,
  lang: AppLanguage
): QuizQuestion {
  if (lang === 'en') return question;
  const entry = QUIZ_TRANSLATIONS[question.id]?.[lang];
  if (!entry) return question;
  return {
    ...question,
    question: entry.question || question.question,
    options: question.options.map((opt) => translateQuizOption(question.id, opt, lang)),
  };
}

export function translateQuizOptionLabel(
  questionId: string,
  optionId: string,
  fallback: string,
  lang: AppLanguage
): string {
  if (lang === 'en') return fallback;
  return QUIZ_TRANSLATIONS[questionId]?.[lang]?.options?.[optionId]?.label || fallback;
}

export function translateCityPickLabel(
  englishLabel: string,
  lang: AppLanguage
): string {
  if (lang === 'en') return englishLabel;
  return CITY_PICK_LABEL_TRANSLATIONS[englishLabel]?.[lang] || englishLabel;
}
