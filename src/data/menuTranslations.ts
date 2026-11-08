import type { MenuItem } from '../listings/types';

export type MenuLanguage = 'ar' | 'en' | 'es' | 'de';

export interface LanguageOption {
  code: MenuLanguage;
  label: string;
  nativeLabel: string;
}

export const MENU_LANGUAGES: LanguageOption[] = [
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية' },
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'es', label: 'Español', nativeLabel: 'Español' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch' },
];

// Comprehensive translations for dishes across all active restaurant menus
export const DISH_TRANSLATIONS: Record<string, Record<MenuLanguage, string>> = {
  // --- Les Blancs Agadir ---
  'Gambas al Ajillo (Crevettes à l’Ail)': {
    ar: 'كروفيت بالثوم وزيت الزيتون البكر',
    en: 'Garlic Sautéed Prawns in Olive Oil',
    es: 'Gambas al Ajillo con Aceite de Oliva Virgen',
    de: 'Garnelen in Knoblauch-Olivenöl gebraten',
  },
  'Chipirones à la Plancha': {
    ar: 'كالمار صغير مشوي على البلانشا مع الليمون',
    en: 'Seared Baby Squid with Lemon & Parsley',
    es: 'Chipirones a la Plancha con Ajo y Perejil',
    de: 'Gegrillte Mini-Calamari mit Zitrone & Petersilie',
  },
  'Poulpe à la Galicienne (Pulpo a la Gallega)': {
    ar: 'أخطبوط على الطريقة الجاليكية مع البابريكا',
    en: 'Galician-Style Octopus with Paprika & Sea Salt',
    es: 'Pulpo a la Gallega con Pimentón y Patatas',
    de: 'Galizischer Oktopus mit Meersalz & Paprika',
  },
  'Patatas Bravas Traditionnelles': {
    ar: 'بطاطس برافاس مقرمشة مع صلصة حارة والمايونيز',
    en: 'Crispy Patatas Bravas with Spicy Sauce & Aioli',
    es: 'Patatas Bravas Crujientes con Salsa Brava y Alioli',
    de: 'Knusprige Patatas Bravas mit pikanter Sauce & Aioli',
  },
  'Gaspacho Andalou Frais': {
    ar: 'حساء الكاسباتشو الأندلسي البارد المنعش',
    en: 'Chilled Andalusian Tomato Gazpacho',
    es: 'Gazpacho Andaluz Tradicional Fresco',
    de: 'Klassische andalusische Gazpacho gekühlt',
  },
  'Croquettes Maison au Poulet & Fromage': {
    ar: 'كروكيت مقرمش بالجبن والدجاج البلدي',
    en: 'Crispy Artisan Chicken & Cheese Croquettes',
    es: 'Croquetas Caseras de Pollo y Queso',
    de: 'Hausgemachte Hähnchen-Käse-Kroketten',
  },
  'Paella Poissons & Fruits de Mer': {
    ar: 'بايلا فواكه البحر والأسماك الطازجة الممتازة',
    en: 'Seafood & Fresh Coastal Fish Paella',
    es: 'Paella de Pescado y Mariscos Frescos',
    de: 'Meeresfrüchte- und Edelfisch-Paella',
  },
  'Arroz Negro (Riz Noir à l’Encre de Seiche)': {
    ar: 'الأرز الأسود بحبر السيبيا والكالمار مع الأيولي',
    en: 'Black Rice with Squid Ink, Calamari & Aioli',
    es: 'Arroz Negro con Tinta de Calamar y Alioli',
    de: 'Schwarzer Reis mit Tintenfischtinte & Aioli',
  },
  'Paella Valencienne Classique': {
    ar: 'بايلا فالنسيا بالدجاج والخضار والزعفران',
    en: 'Traditional Valencian Chicken & Green Bean Paella',
    es: 'Paella Valenciana Clásica con Pollo y Verduras',
    de: 'Klassische Valencia-Paella mit Huhn & Safran',
  },
  'Fideuà de la Mer aux Fruits de Mer': {
    ar: 'فيديووا البحر بالشعرية الإسبانية وثمار البحر',
    en: 'Mediterranean Seafood Noodle Fideuà with Alioli',
    es: 'Fideuà de Mariscos con Fideos Tostados y Alioli',
    de: 'Katalanische Nudel-Paella mit Meeresfrüchten',
  },
  'Loup de Mer (Bar) à la Sauce à l’Ail': {
    ar: 'سمك الدرعي الطازج بصلصة الثوم والليمون',
    en: 'Pan-Seared Sea Bass Fillet with Garlic-Lemon Glaze',
    es: 'Lubina Fresca a la Plancha con Salsa de Ajo',
    de: 'Frischer Wolfsbarsch mit Knoblauch-Zitronen-Sauce',
  },
  'Lotte Sautée aux Crevettes & Champignons': {
    ar: 'سمك الصول واللوط مع الجمبري وفطر الغابة',
    en: 'Monkfish Medallions with Prawns & Wild Mushrooms',
    es: 'Rape Salteado con Gambas y Setas Silvestres',
    de: 'Seeteufel-Medaillons mit Garnelen & Waldpilzen',
  },
  'Filet de Bœuf Grillé au Poivre Vert': {
    ar: 'فيليه لحم بقري مشوي بصلصة الفلفل الأخضر',
    en: 'Char-Grilled Beef Tenderloin with Green Peppercorn Sauce',
    es: 'Solomillo de Ternera a la Parrilla con Pimienta Verde',
    de: 'Gegrilltes Rinderfilet mit grüner Pfeffersauce',
  },
  'Crème Catalane Caramélisée': {
    ar: 'كريم كاتالانا مكرمل بالقرفة وبرش الليمون',
    en: 'Caramelized Catalan Custard with Citrus & Cinnamon',
    es: 'Crema Catalana Tradicional con Azúcar Quemado',
    de: 'Karamellisierte Crema Catalana mit Zimt & Zitrone',
  },
  'Tarte de Santiago aux Amandes': {
    ar: 'تارت سانتياغو التقليدية باللوز الخالص',
    en: 'Galician Almond Tart of Saint James with Powdered Sugar',
    es: 'Tarta de Santiago Artesanal de Almendras',
    de: 'Galizische Mandeltorte Santiago mit Puderzucker',
  },
  'Fondant au Chocolat Noir Coulant': {
    ar: 'فوندان الشوكولاتة الداكنة الساخن مع آيس كريم فانيليا',
    en: 'Warm Molten Dark Chocolate Fondant with Vanilla Ice Cream',
    es: 'Coulant Caliente de Chocolate Negro con Helado de Vainilla',
    de: 'Warmes Schokoladensoufflé mit flüssigem Kern & Vanilleeis',
  },

  // --- Restaurant Yacht Club Agadir ---
  'Soupe de Poisson Traditionnelle du Port': {
    ar: 'شوربة السمك الطازج مع الخبز المحمص والروي',
    en: 'Port Fishermen Seafood Soup with Toasted Croutons & Rouille',
    es: 'Sopa Tradicional de Pescado del Puerto con Croutons y Rouille',
    de: 'Hafen-Fischsuppe mit gerösteten Croûtons & Rouille',
  },
  'Huîtres Gratinées au Sabayon Marin': {
    ar: 'محار محلي غراتان بالفرن بصلصة السابايون',
    en: 'Oven-Gratinated Local Oysters with Sea Herb Sabayon',
    es: 'Ostras Horneadas Gratinadas con Sabayón Marino',
    de: 'Gratinierte Austern mit maritimem Sabayon aus dem Ofen',
  },
  'Salade du Pêcheur Gadiri': {
    ar: 'سلطة الصياد بالجمبري والكالمار والخل البلسمي',
    en: 'Gadiri Fisherman Salad with Marinated Shrimp & Calamari',
    es: 'Ensalada del Pescador con Gambas Marinadas y Calamares',
    de: 'Fischersalat mit marinierten Garnelen & Tintenfisch',
  },
  'Carpaccio de Poisson Blanc aux Baies Roses': {
    ar: 'كارباتشيو سمك أبيض بزيت الزيتون والليمون وحبوب الفلفل الوردي',
    en: 'White Catch Carpaccio with Pink Peppercorns & Citrus Oil',
    es: 'Carpaccio de Pescado Blanco con Pimienta Rosa y Cítricos',
    de: 'Weißfisch-Carpaccio mit rosa Pfeffer & Zitrus-Olivenöl',
  },
  'Loup de Mer (Bar) Entier Grillé aux Herbes': {
    ar: 'سمك الدرعي الملكي المشوي كاملاً على الفحم بالأعشاب',
    en: 'Whole Grilled Royal Sea Bass with Wild Sea Herbs',
    es: 'Lubina Entera a la Brasa con Hierbas Aromáticas',
    de: 'Ganzer gegrillter Wolfsbarsch mit Kräutern der Provence',
  },
  'Sole Meunière Poêlée au Beurre Blanc': {
    ar: 'سمك الصول بالزبدة والليمون والبقدونس الطازج',
    en: 'Pan-Fried Sole Meunière with Lemon Butter & Parsley',
    es: 'Lenguado a la Meunière con Mantequilla de Limón y Perejil',
    de: 'Seezunge Müllerin-Art mit Zitronenbutter & Petersilie',
  },
  'Choucroute de la Mer aux Poissons Nobles': {
    ar: 'طبق أسماك الميناء المتنوعة مع الجمبري والصلصة البحرية',
    en: 'Seafood Trio Platter with White Wine Sea Broth',
    es: 'Chucrut del Mar con Selección de Pescados Nobles',
    de: 'Edelfisch-Platte mit Meeresfrüchten in Weißweinsud',
  },
  'Friture Panachée du Port de Pêche': {
    ar: 'تشكيلة أسماك مقلية طازجة ومقرمشة من الميناء',
    en: 'Mixed Crispy Fried Catch directly from the Fishing Port',
    es: 'Fritura Variada de Pescaditos del Puerto Pesquero',
    de: 'Gemischte knusprige Meeresfische frisch aus dem Hafen',
  },
  'Gambas Royales Grillées au Gros Sel': {
    ar: 'جمبري ملكي كبير مشوي بالملح البحري والليمون',
    en: 'Charcoal-Grilled Jumbo Royal Prawns with Sea Salt',
    es: 'Gambas Reales a la Plancha con Sal Gorda y Limón',
    de: 'Gegrillte Riesen-Königsgarnelen mit grobem Meersalz',
  },
  'Tiramisù Traditionnel Maison aux Framboises': {
    ar: 'تيراميسو إيطالي أصيل بالتوت والماسكاربوني',
    en: 'Homemade Mascarpone Tiramisù with Wild Raspberries',
    es: 'Tiramisú Casero Tradicional con Frambuesas Frescas',
    de: 'Hausgemachtes Himbeer-Tiramisù mit frischer Mascarpone',
  },
  'Tarte Fine aux Pommes Caramélisées': {
    ar: 'تارت التفاح المقرمش بالكراميل مع آيس كريم الفانيليا',
    en: 'Crispy Warm Apple Tart with Salted Butter Caramel',
    es: 'Tarta Fina de Manzana Caramelizada con Helado',
    de: 'Feine karamellisierte Apfeltarte mit Vanilleeis',
  },
  'Café Gourmand du Port': {
    ar: 'قهوة إسبريسو مع تشكيلة حلويات فرنسية مصغرة',
    en: 'Rich Espresso served with 3 Mini French Pastries',
    es: 'Café Gourmand con Surtido de Petit Fours Caseros',
    de: 'Café Gourmand mit drei feinen französischen Minidesserts',
  },

  // --- Mamma Caterina ---
  'Insalata Caprese alla Burrata': {
    ar: 'سلطة كابريزي بجبن البوراتا الإيطالي والريحان',
    en: 'Fresh Burrata Caprese with Heirloom Tomatoes & Basil',
    es: 'Ensalada Caprese con Burrata Fresca y Albahaca',
    de: 'Caprese-Salat mit cremiger Burrata, Tomaten & Basilikum',
  },
  'Carpaccio di Manzo al Parmigiano': {
    ar: 'كارباتشيو لحم بقري بجبن البارميزان والجرجير وزيت الزيتون',
    en: 'Beef Tenderloin Carpaccio with Aged Parmesan & Arugula',
    es: 'Carpaccio de Ternera con Parmesano Reggiano y Rúcula',
    de: 'Rinder-Carpaccio mit gereiftem Parmesan & Rucola',
  },
  'Focaccia all’Aglio e Rosmarino': {
    ar: 'فوكاتشيا إيطالية مخبوزة بالثوم وإكليل الجبل وزيت الزيتون',
    en: 'Wood-Fired Garlic & Fresh Rosemary Focaccia Bread',
    es: 'Focaccia Artesanal al Horno con Ajo y Romero',
    de: 'Holzofen-Focaccia mit Knoblauch, Rosmarin & Olivenöl',
  },
  'Pizza Frutti di Mare': {
    ar: 'بيتزا فواكه البحر بالجمبري والكالمار وصلصة الطماطم الإيطالية',
    en: 'Seafood Pizza with Squid, Prawns & San Marzano Sauce',
    es: 'Pizza Frutti di Mare con Calamar, Gambas y Ajo',
    de: 'Meeresfrüchte-Pizza mit Calamari, Garnelen & Tomaten',
  },
  'Pizza Quattro Formaggi (4 Fromages)': {
    ar: 'بيتزا الأجبان الأربعة الإيطالية (موزاريلا، جورجونزولا، بارميزان، بروفولوني)',
    en: 'Four Cheese Pizza (Mozzarella, Gorgonzola, Parmesan, Provolone)',
    es: 'Pizza Cuatro Quesos con Masa Madre Fermentada',
    de: 'Vier-Käse-Pizza mit Mozzarella, Gorgonzola & Parmesan',
  },
  'Pizza Quattro Stagioni (4 Saisons)': {
    ar: 'بيتزا الفصول الأربعة مع الفطر والخرشوف والزيتون',
    en: 'Four Seasons Pizza with Mushrooms, Artichokes & Olives',
    es: 'Pizza Cuatro Estaciones con Champiñones y Alcachofas',
    de: 'Vier-Jahreszeiten-Pizza mit Pilzen, Artischocken & Oliven',
  },
  'Pizza Campagnola Vegetariana': {
    ar: 'بيتزا الخضار المشوية بالفرن (كوسى، باذنجان، فلفل حلو)',
    en: 'Vegetarian Wood-Fired Pizza with Grilled Garden Vegetables',
    es: 'Pizza Vegetariana Campagnola con Verduras Asadas',
    de: 'Vegetarische Holzofenpizza mit gegrilltem Marktgemüse',
  },
  'Spaghetti Frutti di Mare alla Marinara': {
    ar: 'سباغيتي فواكه البحر على الطريقة الإيطالية بصلصة الطماطم والثوم',
    en: 'Seafood Spaghetti Marinara with Garlic, White Wine & Herbs',
    es: 'Espaguetis con Frutos del Mar a la Marinera Italiana',
    de: 'Spaghetti Frutti di Mare in pikanter Tomaten-Knoblauchsauce',
  },
  'Tagliatelle Nordica al Salmone Fresco': {
    ar: 'تاغلياتيللي بالصلصة البيضاء وقطع السلمون الطازج',
    en: 'Handmade Tagliatelle with Fresh Salmon & Dill Cream',
    es: 'Tagliatelle Artesanal con Salmón Fresco y Crema de Eneldo',
    de: 'Hausgemachte Tagliatelle mit Lachs in feiner Dillsahne',
  },
  'Spaghetti alla Carbonara Autentica': {
    ar: 'سباغيتي كاربونارا الإيطالية الأصلية بصفار البيض وجبن البكورينو',
    en: 'Traditional Roman Carbonara with Egg Yolks & Pecorino',
    es: 'Spaghetti Carbonara Tradicional con Huevo y Pecorino',
    de: 'Original römische Carbonara mit Eigelb & Pecorino-Käse',
  },
  'Penne alla Norma Catanese': {
    ar: 'بيني بالباذنجان وصلصة الطماطم وجبن الريكوتا والريحان',
    en: 'Sicilian Penne alla Norma with Eggplant, Tomato & Ricotta',
    es: 'Penne alla Norma Siciliana con Berenjena y Ricotta',
    de: 'Sizilianische Penne alla Norma mit Auberginen & Ricotta',
  },
  'Tiramisù Tradizionale della Nonna': {
    ar: 'تيراميسو ماسكاربوني إيطالي تقليدي بالقهوة والكاكاو',
    en: 'Classic Grandma’s Mascarpone Tiramisù with Espresso & Cocoa',
    es: 'Tiramisú Tradicional de la Nonna con Café y Cacao',
    de: 'Traditionelles Mascarpone-Tiramisù nach Omas Hausrezept',
  },
  'Panna Cotta ai Frutti di Bosco': {
    ar: 'بانا كوتا بالفانيليا وصلصة التوت البري المنعشة',
    en: 'Silky Vanilla Bean Panna Cotta with Wild Berry Coulis',
    es: 'Panna Cotta Artesanal de Vainilla con Frutos del Bosque',
    de: 'Cremige Vanille-Panna-Cotta mit Waldbeeren-Spiegel',
  },

  // --- O'Comptoir Marina ---
  'Formule Tamazirt Beldi Traditionnelle': {
    ar: 'فطور تمازيرت البلدي التقليدي مع زيت أركان وأملو والشاي المغربي',
    en: 'Traditional Berber Breakfast with Pure Argan Oil, Amlou & Mint Tea',
    es: 'Desayuno Bereber Tradicional con Aceite de Argán y Amlou',
    de: 'Traditionelles Berber-Frühstück mit reinem Arganöl, Amlou & Minztee',
  },
  'Formule Continental Marina Express': {
    ar: 'فطور كونتيننتال مع الكرواسون الطازج والخبز المحمص وعصير البرتقال',
    en: 'Continental Breakfast with Warm Butter Croissant, Baguette & Fresh Juice',
    es: 'Desayuno Continental con Cruasán de Mantequilla y Zumo Fresco',
    de: 'Kontinentales Frühstück mit Buttercroissant & frischem Orangensaft',
  },
  'Pancakes Moelleux aux Fruits Frais & Miel': {
    ar: 'بان كيك بالفواكه الطازجة والعسل الطبيعي والزبدة',
    en: 'Fluffy Pancakes with Seasonal Sliced Berries & Organic Honey',
    es: 'Tortitas Esponjosas con Frutas de Temporada y Miel Natural',
    de: 'Fluffige Pfannkuchen mit Beeren & Bio-Blütenhonig',
  },
  'Burger Gourmet Marina au Bœuf Frais': {
    ar: 'برغر لحم بقري فاخر مع جبن الشيدر والبطاطس المقرمشة',
    en: 'Artisan Beef Patty Burger with Cheddar & Hand-Cut Fries',
    es: 'Hamburguesa Gourmet de Ternera con Cheddar y Patatas Rústicas',
    de: 'Gourmet-Rindfleischburger mit Cheddar & knusprigen Pommes',
  },
  'Salade César au Poulet Croustillant': {
    ar: 'سلطة سيزر بالدجاج المقرمش والبارميزان والصلصة الخاصة',
    en: 'Crispy Breaded Chicken Caesar Salad with Aged Parmesan',
    es: 'Ensalada César con Pollo Crujiente y Parmesano Rallado',
    de: 'Caesar-Salat mit knusprigem Hähnchen & gereiftem Parmesan',
  },
  'Club Sandwich O’Comptoir & Frites': {
    ar: 'كلوب ساندويتش ثلاثي الطبقات بالدجاج والبيض والخس والمايونيز',
    en: 'Triple-Decker Chicken & Egg Club Sandwich with Seasoned Fries',
    es: 'Sándwich Club de Pollo, Huevo y Tomate con Patatas Fritas',
    de: 'Club-Sandwich mit Huhn, Ei, Salat & hausgemachten Fritten',
  },
  'Tagliatelle au Saumon Frais & Crème d’Aneth': {
    ar: 'معكرونة بالكريمة وقطع السلمون الطازج وشبت الليمون',
    en: 'Creamy Tagliatelle with Seared Fresh Salmon & Lemon Dill',
    es: 'Tagliatelle con Salmón Rosado y Crema Suave de Eneldo',
    de: 'Tagliatelle mit gebratenem Lachs in Zitronen-Dillsauce',
  },
  'Cocktail Signature Zaazaa d’Agadir': {
    ar: 'عصير زعزع السوسي المميز بالأفوكادو والفواكه الجافة والمكسرات',
    en: 'Agadir Signature Zaazaa: Avocado, Layered Nuts, Dried Figs & Cream',
    es: 'Batido Especial Zaazaa de Agadir con Aguacate y Frutos Secos',
    de: 'Agadir-Spezialität Zaazaa-Smoothie mit Avocado & Nüssen',
  },
  'Crêpe Croustillante Nutella & Banane': {
    ar: 'كريب بالشوكولاتة والموز والمكسرات المحمصة',
    en: 'Warm Crêpe smothered in Nutella with Sliced Bananas & Almonds',
    es: 'Crepe Caliente con Nutella, Rodajas de Plátano y Almendras',
    de: 'Warmer Crêpe mit Nutella, Bananenscheiben & gerösteten Mandeln',
  },
  'Jus d’Orange de Taroudant Pressé Minute': {
    ar: 'عصير برتقال طبيعي معصور طازج من حقول تارودانت',
    en: 'Freshly Squeezed Taroudant Sweet Orange Juice',
    es: 'Zumo de Naranja Recién Exprimido de Taroudant',
    de: 'Frisch gepresster Orangensaft aus den Hainen von Taroudant',
  },

  // --- La Madrague ---
  'Carpaccio de Loup de Mer aux Agrumes & Huile d’Argan': {
    ar: 'كارباتشيو سمك الدرعي بالحمضيات وزيت أركان التجميلي النقي',
    en: 'Sea Bass Carpaccio with Wild Citrus & Toasted Argan Oil Drizzle',
    es: 'Carpaccio de Lubina con Cítricos y Aceite de Argán Tostado',
    de: 'Wolfsbarsch-Carpaccio mit Zitrusfrüchten & geröstetem Arganöl',
  },
  'Plateau de Fruits de Mer Royal de la Baie': {
    ar: 'بلاتو فواكه البحر الملكي (محار، كروفيت ملكي، كالمار، سلطعون)',
    en: 'Grand Royal Seafood Tower (Local Oysters, Jumbo Prawns & Crab)',
    es: 'Bandeja Real de Mariscos de la Bahía con Ostras y Gambas',
    de: 'Königliche Meeresfrüchte-Etagere mit Austern & Riesen-Garnelen',
  },
  'Bisque de Homard d’Agadir Flambée au Cognac': {
    ar: 'حساء الكركند (جراد البحر) الفاخر المكرمل والمطهو ببطء',
    en: 'Velvety Lobster Bisque flambéed with Fine Cognac & Tarragon Cream',
    es: 'Bisque de Bogavante de Agadir Flambeado con Coñac',
    de: 'Samtige Hummer-Bisque mit feinem Cognac flambiert',
  },
  'Filet de Saint-Pierre Rôti au Beurre Noisette': {
    ar: 'فيليه سمك السان بيار الملكي بالزبدة والخرشوف والليمون',
    en: 'Pan-Roasted John Dory Fillet in Brown Hazelnut Butter with Artichoke',
    es: 'Filete de San Pedro Asado con Mantequilla Noisette y Alcachofas',
    de: 'Gebratenes Petersfisch-Filet in Nussbutter mit Artischocken',
  },
  'Queue de Lotte Braisée au Safran de Taliouine': {
    ar: 'ذيل سمك اللوت المطهو بالزعفران الحر من تاليوين',
    en: 'Braised Monkfish Tail in Pure Taliouine Saffron Velouté',
    es: 'Cola de Rape Estofada con Azafrán Puro de Taliouine',
    de: 'Geschmorter Seeteufel in edler Taliouine-Safransauce',
  },
  'Filet de Bœuf Rossini au Foie Gras Poêlé': {
    ar: 'تورنيدو روسيني: فيليه لحم البقر مع كبد الأوز وصلصة الترفاس',
    en: 'Tournedos Rossini Beef Fillet with Seared Foie Gras & Truffle Glaze',
    es: 'Solomillo Rossini con Foie Gras a la Plancha y Trufa Negra',
    de: 'Rinderfilet Rossini mit gebratener Foie Gras & Trüffeljus',
  },
  'Soufflé Chaud au Grand Marnier': {
    ar: 'سوفليه فرنسي دافئ بالكراند مارنييه والكراميل',
    en: 'Warm Grand Marnier Soufflé with Vanilla Bean Crème Anglaise',
    es: 'Suflé Caliente de Grand Marnier con Crema Inglesa de Vainilla',
    de: 'Warmes Grand-Marnier-Soufflé mit echter Bourbon-Vanillesauce',
  },
  'Millefeuille Croustillant Vanille Bourbon': {
    ar: 'ميل فوي مقرمش بكريمة الفانيليا البوربون الأصلية',
    en: 'Caramelized Crispy Millefeuille with Bourbon Vanilla Cream',
    es: 'Milhojas Crujiente con Crema Pastelera de Vainilla Bourbon',
    de: 'Knuspriges Blätterteig-Millefeuille mit Bourbon-Vanillecreme',
  },

  // --- Marrakech: Le Jardin ---
  'Salade Marocaine Traditionnelle (Trio Zaalouk, Taktouka, Carottes)': {
    ar: 'سلطة مغربية أصيلة (تريو زعلوك، تكتوكة، جزر متبل بالكمون)',
    en: 'Traditional Moroccan Trio: Zaalouk, Taktouka & Spiced Cumin Carrots',
    es: 'Trilogía Marroquí Tradicional: Zaalouk, Taktouka y Zanahorias al Comino',
    de: 'Marokkanische Vorspeisen-Trilogie: Zaalouk, Taktouka & Möhrensalat',
  },
  'Briouates Croustillantes Farcies (Fromage de Chèvre & Viande Hachée)': {
    ar: 'بريوات مقرمشة بالجبن البلدي واللحم المفروم مع النعناع',
    en: 'Crispy Pastry Triangles filled with Goat Cheese, Spiced Beef & Mint',
    es: 'Briouats Crujientes Rellenos de Queso de Cabra y Ternera Especiada',
    de: 'Knusprige Briouats gefüllt mit Ziegenkäse, Hackfleisch & Minze',
  },
  'Pastilla au Poulet, Amandes & Cannelle': {
    ar: 'بسطيلة الدجاج الفاسية باللوز البلدي والقرفة وماء الزهر',
    en: 'Authentic Fassi Chicken Pastilla with Crushed Almonds & Cinnamon',
    es: 'Pastilla Tradicional de Pollo con Almendras Tostadas y Canela',
    de: 'Klassische Hähnchen-Pastilla mit Mandeln, Zimt & Orangenblüten',
  },
  'Tagine d’Agneau aux Pruneaux & Amandes Grillées': {
    ar: 'طاجين لحم الغنم بالبرقوق المعسل واللوز المحمر والسمسم',
    en: 'Slow-Cooked Lamb Tagine with Caramelized Prunes & Toasted Almonds',
    es: 'Tajín de Cordero con Ciruelas Confitadas y Almendras Doradas',
    de: 'Zarte Lammfleisch-Tajine mit karamellisierten Pflaumen & Mandeln',
  },
  'Tagine de Poulet Fermier au Citron Confit & Olives': {
    ar: 'طاجين الدجاج البلدي بالحامض المصير والزيتون الأحمر والزعفران',
    en: 'Free-Range Chicken Tagine with Preserved Lemon & Purple Olives',
    es: 'Tajín de Pollo de Campo con Limón Confitado y Aceitunas',
    de: 'Hähnchen-Tajine mit eingelegten Zitronen, Oliven & Safran',
  },
  'Tanjia Marrakchia Cuite dans les Cendres (Fourchi)': {
    ar: 'طنجية مراكشية أصيلة مطهوة على رماد الفرنان بالكمون والثوم والزعفران',
    en: 'Heritage Marrakech Tanjia slow-baked overnight in Clay Urn with Cumin',
    es: 'Tanjia Tradicional de Marrakech Cocinada en Cenizas con Comino y Ajo',
    de: 'Echte Marrakesch-Tanjia in der Tonamphore langsam in Asche gegart',
  },
  'Couscous aux Sept Légumes & Bœuf': {
    ar: 'كسكس مغربي بالسبع خضار ولحم البقر الطري والمرق المتبل',
    en: 'Seven Vegetable Couscous with Tender Braised Beef & Spiced Broth',
    es: 'Cuscús Imperial con Siete Verduras y Ternera Estofada',
    de: 'Sieben-Gemüse-Couscous mit zart geschmortem Rindfleisch',
  },
  'Brochettes Mixtes Grillées au Feu de Bois': {
    ar: 'قطبان مشوية مشكلة (كفتة، دجاج، لحم) مع الهريسة المغربية',
    en: 'Charcoal-Grilled Skewer Trio: Spiced Kefta, Tender Beef & Chicken',
    es: 'Brochetas Mixtas al Carbón con Kefta, Pollo y Ternera Especiada',
    de: 'Gemischte Grillspieße vom Holzkohlefeuer mit Kefta & Hähnchen',
  },
  'Pastilla au Lait (Ktefa) aux Amandes & Fleur d’Oranger': {
    ar: 'بسطيلة بالحليب (الجوهرة/الكتيفة) بماء الزهر واللوز المقرمش',
    en: 'Delicate Milk Pastilla (Ktefa) with Almonds & Orange Blossom Essence',
    es: 'Pastilla de Leche (Ktefa) con Hojaldre, Almendras y Flor de Azahar',
    de: 'Feine Milch-Pastilla (Ktefa) mit Mandeln & Orangenblütenwasser',
  },
  'Oranges à la Cannelle & Eau de Fleur d’Oranger': {
    ar: 'برتقال معطر بالقرفة البلدية وماء الزهر المقطر',
    en: 'Chilled Moroccan Sliced Oranges with Cinnamon & Pure Blossom Water',
    es: 'Naranjas de Temporada con Canela Dulce y Agua de Azahar',
    de: 'Gekühlte marokkanische Orangen mit Zimt & Orangenblütenwasser',
  },
  'Cornes de Gazelle Artisanales': {
    ar: 'كعب غزال بلدي باللوز وماء الزهر والمسكة الحرة',
    en: 'Artisan Gazelle Horns with Almond Paste & Moroccan Spices',
    es: 'Cuernos de Gacela Artesanales con Pasta de Almendras',
    de: 'Traditionelle Gazellenhörnchen mit feiner Mandelpaste',
  },

  // --- Amsterdam Luxury Restaurant Agadir ---
  'Burrata': {
    ar: 'جبنة بوراتا الإيطالية الطازجة مع الطماطم الكرزية والريحان',
    en: 'Fresh Italian burrata with cherry tomatoes and basil',
    es: 'Burrata italiana fresca con tomates cherry y albahaca',
    de: 'Frische italienische Burrata mit Kirschtomaten und Basilikum',
  },
  'Tartare Avocat & Crevettes': {
    ar: 'تارتار الأفوكادو والروبيان بصلصة الحمضيات',
    en: 'Avocado & shrimp tartare with citrus vinaigrette',
    es: 'Tartar de aguacate y gambas con vinagreta de cítricos',
    de: 'Avocado-Garnelen-Tatar mit Zitrus-Vinaigrette',
  },
  'Salade de Fruits de Mer': {
    ar: 'سلطة فواكه البحر مع الحبار والروبيان الطازج',
    en: 'Atlantic seafood salad with shrimp, squid, and herbs',
    es: 'Ensalada de mariscos con gambas, calamares y hierbas',
    de: 'Meeresfrüchtesalat mit Garnelen, Tintenfisch und Kräutern',
  },
  'Salade César au Poulet': {
    ar: 'سلطة سيزر الكلاسيكية بالدجاج المشوي وجبن البارميزان',
    en: 'Classic Caesar salad with grilled chicken and parmesan shavings',
    es: 'Ensalada César clásica con pollo a la parrilla y parmesano',
    de: 'Klassischer Caesar-Salat mit gegrilltem Hähnchen und Parmesan',
  },
  'Salade Exotique au Poulet': {
    ar: 'سلطة الدجاج الاستوائية مع الفواكه الطازجة',
    en: 'Exotic chicken salad with tropical fruits and mixed greens',
    es: 'Ensalada exótica de pollo con frutas tropicales y brotes',
    de: 'Exotischer Hähnchensalat mit tropischen Früchten und Blattsalaten',
  },
  'Carpaccio de Bœuf': {
    ar: 'كارباتشيو اللحم البقري المعتق مع زيت الزيتون وجبن البارميزان',
    en: 'Aged beef carpaccio with extra virgin olive oil, rocket, and parmesan',
    es: 'Carpaccio de ternera curada con aceite de oliva, rúcula y parmesano',
    de: 'Rinder-Carpaccio mit nativem Olivenöl, Rucola und Parmesan',
  },
  'Soupe Royale de Fruits de Mer': {
    ar: 'حساء فواكه البحر الملكي الغني بالأسماك والقريدس',
    en: 'Royal seafood soup with Atlantic fish and prawns',
    es: 'Sopa real de mariscos con pescado del Atlántico y gambas',
    de: 'Königliche Meeresfrüchtesuppe mit Atlantikfisch und Garnelen',
  },
  'Soupe de Lentilles': {
    ar: 'شوربة العدس المتبلة بالأعشاب',
    en: 'Spiced velvet lentil soup',
    es: 'Sopa cremosa de lentejas especiadas',
    de: 'Cremige gewürzte Linsensuppe',
  },
  'Soupe de Légumes': {
    ar: 'حساء الخضار الطازجة موسمي',
    en: 'Fresh seasonal vegetable soup',
    es: 'Sopa de verduras frescas de temporada',
    de: 'Frische saisonale Gemüsesuppe',
  },
  'Crevettes Pili-Pili': {
    ar: 'روبيان مطهو في زيت الزيتون الحار مع الثوم والفلفل',
    en: 'Sizzling garlic and chili prawns in virgin olive oil',
    es: 'Gambas al pil-pil chisporroteantes con ajo y guindilla',
    de: 'Brutzelnde Knoblauch-Chili-Garnelen in Olivenöl',
  },
  'Patatje Oorlog (Frites Hollandaises "Guerre")': {
    ar: 'بطاطس مقلية هولندية شهيرة بصلصة الساتيه (الفول السوداني) والمايونيز والبصل المفروم',
    en: 'Traditional Dutch "War Fries" with satay peanut sauce, mayonnaise, and diced raw onions',
    es: 'Patatas holandesas estilo "guerra" con salsa satay de cacahuete, mayonesa y cebolla picada',
    de: 'Holländische "Patatje Oorlog" Pommes mit Erdnuss-Saté-Sauce, Mayonnaise und Zwiebeln',
  },
  'Patatje Speciaal (Frites Hollandaises Spéciales)': {
    ar: 'بطاطس مقلية هولندية بصلصة الكاري كاتشب والمايونيز والبصل الطازج',
    en: 'Traditional Dutch "Special Fries" with curry ketchup, mayonnaise, and chopped onions',
    es: 'Patatas holandesas especiales con kétchup de curry, mayonesa y cebolla',
    de: 'Holländische Spezial-Pommes mit Curry-Ketchup, Mayonnaise und Zwiebeln',
  },
  'Frites à la Truffe & Parmesan': {
    ar: 'بطاطس مقلية بصلصة الكمأة الإيطالية وجبن البارميزان المبشور',
    en: 'Crispy fries drizzled with truffle oil and shaved parmesan',
    es: 'Patatas fritas crujientes con aceite de trufa y parmesano rallado',
    de: 'Knusprige Pommes mit Trüffelöl und gehobeltem Parmesan',
  },
  'Croquettes de Pommes de Terre & Fromage': {
    ar: 'كروكيت البطاطس المحشوة بالجبن الذائب',
    en: 'Golden potato croquettes with a molten cheese center',
    es: 'Croquetas crujientes de patata con corazón de queso fundido',
    de: 'Goldene Kartoffelkroketten mit schmelzendem Käsekern',
  },
  'Filet de Bœuf (200g / 400g)': {
    ar: 'فيليه لحم بقري طري مشوي على الفحم (200غ / 400غ)',
    en: 'Charcoal-grilled tender beef fillet (200g / 400g)',
    es: 'Solomillo de ternera a la parrilla de carbón (200g / 400g)',
    de: 'Zartes Rinderfilet vom Holzkohlegrill (200g / 400g)',
  },
  'Filet de Bœuf 24K Gold (400g)': {
    ar: 'فيليه بقري فاخر (400غ) مغطى بأوراق ذهب عيار 24 قيراط صالحة للأكل',
    en: 'Prime beef fillet (400g) completely draped in edible 24K gold leaf',
    es: 'Solomillo de ternera (400g) bañado en láminas de oro comestible de 24 quilates',
    de: 'Rinderfilet (400g) vollständig umhüllt von essbarem 24-Karat-Blattgold',
  },
  'Entrecôte Grillée (300g)': {
    ar: 'شريحة إنتركوت بقري معتقة ومشوية على الفحم',
    en: 'Charcoal-grilled dry-aged ribeye steak (300g)',
    es: 'Entrecot de ternera madurada a la parrilla (300g)',
    de: 'Am Knochen gereiftes Rib-Eye / Entrecôte-Steak vom Grill (300g)',
  },
  'Côte de Bœuf (1 kg)': {
    ar: 'ضلع بقري تيشربت (1 كغ) معتق على ملح الهيمالايا ومشوي على الحطب',
    en: '1 kg Himalayan salt dry-aged prime bone-in rib of beef',
    es: 'Chuletón de buey con hueso de 1 kg madurado en sal del Himalaya',
    de: '1 kg Rinderkotelett am Knochen, gereift in Himalaya-Salzsteinkammern',
  },
  'Côte de Bœuf 24K Gold (1 kg)': {
    ar: 'ضلع بقري (1 كغ) مغلف بالكامل بأوراق الذهب عيار 24 قيراط',
    en: '1 kg imperial bone-in rib of beef draped in 24K edible gold leaf',
    es: 'Chuletón de 1 kg cubierto completamente con oro comestible de 24 quilates',
    de: '1 kg Rinderkotelett umhüllt mit 24-Karat-Blattgold',
  },
  'Côtelettes d\'Agneau (250g / 500g)': {
    ar: 'ريش لحم الضأن المشوية بالأعشاب البرية',
    en: 'Tender lamb chops seared with wild Mediterranean herbs',
    es: 'Chuletillas de cordero lechal a la brasa con hierbas aromáticas',
    de: 'Zarte Lammkoteletts mit mediterranen Kräutern gegrillt',
  },
  'Spare Ribs de Bœuf Glacés (500g / 1 kg)': {
    ar: 'أضلاع بقرية مطهوة ببطء ومدهونة بصلصة الباربكيو المدخنة والسمسم',
    en: 'Slow-cooked beef short ribs glazed in house BBQ sauce and toasted sesame',
    es: 'Costillas de ternera confitadas y glaseadas con salsa barbacoa y sésamo',
    de: 'Zart gegarte Rinderrippchen, glasiert mit BBQ-Sauce und geröstetem Sesam',
  },
  'Rib Eye Black Angus (250g / 500g)': {
    ar: 'شريحة ريب آي من لحم البلاك أنجوس الأمريكي الفاخر المعتق',
    en: 'Prime grain-fed Black Angus rib eye aged up to 60 days',
    es: 'Ojo de bife Black Angus de grano curado hasta 60 días',
    de: 'Getreidegefüttertes Black Angus Rib-Eye, bis zu 60 Tage gereift',
  },
  'Entrecôte Kobe Beef A5 (250g)': {
    ar: 'لحم بقر كوبي ياباني أصيل معتمد حلال بدرجة رخامية A5',
    en: 'Certified authentic Japanese A5 Wagyu / Kobe beef entrecôte',
    es: 'Entrecot de auténtico buey Wagyu japonés certificado A5 Kobe',
    de: 'Zertifiziertes echtes japanisches A5 Wagyu / Kobe-Rind Entrecôte',
  },
  'Entrecôte Kobe Beef A5 24K Gold (250g)': {
    ar: 'لحم كوبي ياباني A5 مكسو بأوراق الذهب عيار 24 قيراط ومقدم بطقوس الدخان',
    en: 'A5 Kobe beef steak draped in 24K gold leaf, presented with tableside smoke ritual',
    es: 'Entrecot Kobe A5 bañado en oro de 24 quilates con ritual de humo en mesa',
    de: 'A5 Kobe-Steak mit 24K Blattgold und theatralischer Rauchinzenierung am Tisch',
  },
  'Amsterdam Luxe Grill': {
    ar: 'تشكيلة مشويات أمستردام الفاخرة (قطع لحم فاخرة، كفتة، كباب، خضار مشوية)',
    en: 'Amsterdam luxury mixed grill platter with assorted prime meats and sides',
    es: 'Gran parrillada de carnes selectas Amsterdam Luxe con guarniciones',
    de: 'Amsterdam Luxe Gemischte Grillplatte mit erlesenen Fleischsorten und Beilagen',
  },
  'Brochettes Saté de Poulet (Chicken Satay)': {
    ar: 'أسياخ دجاج مشوية بصلصة الفول السوداني الهولندية التقليدية والسمسم',
    en: 'Char-grilled chicken skewers smothered in traditional Dutch peanut satay sauce',
    es: 'Brochetas de pollo a la brasa con salsa satay holandesa de cacahuete',
    de: 'Gegrillte Hähnchenspieße mit traditioneller holländischer Erdnuss-Saté-Sauce',
  },
  'Émincé de Bœuf Crème & Champignons': {
    ar: 'شرائح لحم بقري طرية بكريمة الفطر الطازج',
    en: 'Sautéed beef tenderloin strips in creamy wild mushroom sauce',
    es: 'Tiras de solomillo de ternera salteadas con crema de champiñones',
    de: 'Rindergeschnetzeltes in cremiger Waldpilzsauce',
  },
  'Filet de Poulet & Risotto de Légumes': {
    ar: 'صدر دجاج طري مطهو ببطء يقدم مع ريزوتو الخضار',
    en: 'Slow-cooked tender chicken breast served over creamy vegetable risotto',
    es: 'Pechuga de pollo cocinada a baja temperatura con risotto de verduras',
    de: 'Zart gegarte Hähnchenbrust auf cremigem Gemüserisotto',
  },
  'Boulette Hollandaise Traditionnelle (Gehaktbal)': {
    ar: 'كرة اللحم الهولندية التقليدية المحضرة يدوياً بمرق اللحم الكثيف',
    en: 'Traditional Dutch homemade spiced meatball served in rich pan gravy',
    es: 'Albóndiga tradicional holandesa casera con salsa de carne',
    de: 'Traditionelle hausgemachte holländische Frikadelle in herzhafter Bratensauce',
  },
  'Golden Burger 24K': {
    ar: 'برغر لحم الواغيو الفاخر المزين بغبار وأوراق الذهب عيار 24، جبن الشيدر، وصلصة الكمأة',
    en: 'Artisan brioche burger with premium Wagyu patty, 24K edible gold, melted cheddar & truffle glaze',
    es: 'Hamburguesa de carne Wagyu cubierta de oro de 24 quilates, queso cheddar fundido y trufa',
    de: 'Wagyu-Burger im Brioche-Bun mit essbarem 24K-Gold, gereiftem Cheddar und Trüffelsauce',
  },
  'West Side Burger': {
    ar: 'برغر اللحم البقري المضاعف مع شرائح اللحم المقدد، البصل المكرمل، وصلصة الشواء',
    en: 'Double beef burger with halal bacon, caramelized onions, cheddar, and BBQ sauce',
    es: 'Hamburguesa doble de ternera con panceta halal, cebolla caramelizada y salsa barbacoa',
    de: 'Doppelter Rindfleischburger mit Halal-Bacon, karamellisierten Zwiebeln und BBQ-Sauce',
  },
  'Amsterdam Cheeseburger': {
    ar: 'تشيز برغر كلاسيكي بلحم بقري ممتاز وجبن الشيدر والصلصة المنزلية',
    en: 'Classic Amsterdam prime beef burger with melted cheddar, pickles, and house relish',
    es: 'Hamburguesa clásica Amsterdam con ternera selecta, queso cheddar y salsa casera',
    de: 'Klassischer Amsterdam Cheeseburger mit Rindfleisch, Cheddar und Haussauce',
  },
  'Fish Burger': {
    ar: 'برغر فيليه السمك المقرمش مع الجبن الذائب وصلصة التارتار',
    en: 'Crispy fried white fish fillet burger with cheddar and homemade tartar sauce',
    es: 'Hamburguesa de filete de pescado crujiente con cheddar y salsa tártara',
    de: 'Knuspriger Weißfischfilet-Burger mit Cheddar und hausgemachter Remoulade',
  },
  'Crispy Chicken Burger': {
    ar: 'برغر صدر الدجاج المقرمش بالبانكو مع سلطة الكولسلو والصلصة الخاصة',
    en: 'Panko-crusted crispy chicken breast burger with crunchy coleslaw and spicy mayo',
    es: 'Hamburguesa de pechuga de pollo crujiente al panko con ensalada de col',
    de: 'Knusprig panierter Hähnchenbrust-Burger mit Coleslaw und würziger Mayonnaise',
  },
  'Pizza Fruits de Mer': {
    ar: 'بيتزا فواكه البحر (روبيان، حبار، جبن الموزاريلا، صلصة طماطم سان مارزانو)',
    en: 'Seafood pizza with Atlantic prawns, calamari, mozzarella, and San Marzano sauce',
    es: 'Pizza de mariscos con gambas, calamares, mozzarella y salsa de tomate',
    de: 'Meeresfrüchte-Pizza mit Atlantik-Garnelen, Tintenfisch, Mozzarella und Tomatensauce',
  },
  'Pizza Pepperoni': {
    ar: 'بيتزا بيبروني بقري حار وموزاريلا وأوريغانو',
    en: 'Pepperoni pizza with spicy beef salami, mozzarella, and oregano',
    es: 'Pizza de pepperoni con salami picante de ternera y mozzarella',
    de: 'Pepperoni-Pizza mit scharfer Rindersalami, Mozzarella und Oregano',
  },
  'Pizza Viande Hachée': {
    ar: 'بيتزا اللحم البقري المفروم مع الفلفل المشوي والجبن الذائب',
    en: 'Spiced minced beef pizza with roasted bell peppers and melted mozzarella',
    es: 'Pizza de carne picada sazonada con pimientos asados y mozzarella',
    de: 'Hackfleisch-Pizza mit gewürztem Rinderhack, gegrillter Paprika und Mozzarella',
  },
  'Pizza Margherita': {
    ar: 'بيتزا مارغريتا الكلاسيكية بصلصة الطماطم وجبن الموزاريلا والريحان الطازج',
    en: 'Classic Margherita pizza with San Marzano tomatoes, mozzarella, and fresh basil',
    es: 'Pizza Margarita clásica con salsa de tomate, mozzarella y albahaca fresca',
    de: 'Klassische Pizza Margherita mit Tomatensauce, Mozzarella und frischem Basilikum',
  },
  'Pâtes aux Fruits de Mer': {
    ar: 'معكرونة بفواكه البحر الطازجة في صلصة الطماطم والثوم الخفيفة',
    en: 'Seafood pasta tossed with prawns, calamari, and garlic herb reduction',
    es: 'Pasta con mariscos, gambas y calamares en suave salsa de ajo y hierbas',
    de: 'Meeresfrüchte-Pasta mit Garnelen, Tintenfisch und feiner Knoblauch-Kräutersauce',
  },
  'Lasagne Maison à la Bolognaise': {
    ar: 'لازانيا إيطالية تقليدية باللحم البقري المطهو ببطء وصلصة البشاميل',
    en: 'Traditional oven-baked lasagna with rich beef Bolognese and creamy béchamel',
    es: 'Lasaña tradicional al horno con boloñesa de ternera y bechamel',
    de: 'Hausgemachte Ofenlasagne mit Rinderbolognese und cremiger Béchamelsauce',
  },
  'Gratin de Fruits de Mer': {
    ar: 'غراتان فواكه البحر والقريدس المخبوز بالفرن مع الجبن الذائب',
    en: 'Oven-baked Atlantic seafood gratin under a golden melted cheese crust',
    es: 'Gratén de mariscos al horno con costra de queso dorado',
    de: 'Überbackener Meeresfrüchte-Gratin mit goldener Käsekruste',
  },
  'Poffertjes Amsterdam': {
    ar: 'بانكيك هولندي صغير منتفخ يقدم بالزبدة الفاخرة وسكر البودرة وصلصات المحل المميزة',
    en: 'Amsterdam signature fluffy mini Dutch pancakes with melted farm butter and toppings',
    es: 'Mini tortitas esponjosas holandesas Amsterdam servidas con mantequilla y azúcar glas',
    de: 'Typische Amsterdamer Mini-Pfannkuchen (Poffertjes) mit zerlassener Butter und Puderzucker',
  },
  'Poffertjes Nutella': {
    ar: 'بانكيك هولندي صغير مغطى بشوكولاتة النوتيلا الذائبة',
    en: 'Warm mini Dutch pancakes smothered in rich melted Nutella',
    es: 'Poffertjes holandeses cubiertos de Nutella caliente',
    de: 'Warme holländische Poffertjes mit reichlich Nutella',
  },
  'Poffertjes Spéculoos (Lotus Biscoff)': {
    ar: 'بانكيك هولندي صغير بصلصة وبسكويت اللوتس سبيكولوس',
    en: 'Mini Dutch pancakes drizzled with Lotus Biscoff speculoos cream and crumbs',
    es: 'Poffertjes con crema y galleta Lotus Biscoff especiada',
    de: 'Poffertjes mit flüssiger Lotus-Biscoff-Karamellkekscreme und Keksbröseln',
  },
  'Poffertjes Classique (Beurre & Sucre Glace)': {
    ar: 'البانكيك الهولندي التقليدي بالزبدة الذائبة ورشة سكر البودرة',
    en: 'Classic traditional Dutch poffertjes served with melting butter and icing sugar',
    es: 'Poffertjes tradicionales holandeses con mantequilla fundida y azúcar glas',
    de: 'Traditionelle holländische Poffertjes mit zerlassener Butter und feinem Puderzucker',
  },
  'Chocolat Dubaï 24K Gold': {
    ar: 'لوح شوكولاتة دبي الشهير المحشو بكريمة الفستق والكنافة المقرمشة ومزين بالذهب عيار 24',
    en: 'Viral Dubai chocolate bar filled with pistachio cream and crisp kunafa, finished with 24K gold',
    es: 'Barra de chocolate viral de Dubai rellena de pistacho y knafeh crujiente con oro de 24K',
    de: 'Dubai-Schokolade gefüllt mit Pistaziencreme und knusprigem Kunafa, veredelt mit 24K Gold',
  },
  'Fondant au Chocolat Cœur Coulant': {
    ar: 'كعكة فوندان الشوكولاتة الساخنة ذات القلب الذائب مع آيس كريم الفانيليا',
    en: 'Warm molten chocolate lava cake with a flowing center, served with vanilla ice cream',
    es: 'Coulant de chocolate caliente con centro líquido y helado de vainilla',
    de: 'Warmer Schokoladenkuchen mit flüssigem Kern, serviert mit Vanilleeis',
  },
  'Tiramisu Maison': {
    ar: 'تيراميسو إيطالي منزلي بجبن الماسكاربوني ونكهة القهوة المركزة',
    en: 'Homemade Italian espresso tiramisu layered with whipped mascarpone',
    es: 'Tiramisú casero italiano con café espresso y suave crema de mascarpone',
    de: 'Hausgemachtes italienisches Tiramisu mit Espresso und Mascarpone-Creme',
  },
  'Plateau de Fruits Amsterdam Luxury': {
    ar: 'طبق فواكه موسمية طازجة فاخر للمشاركة بتنسيق استعراضي',
    en: 'Grand luxury platter of fresh carved seasonal and exotic fruits for sharing',
    es: 'Gran bandeja de frutas frescas exóticas y de temporada estilo Amsterdam Luxury',
    de: 'Große Luxus-Platte mit frischen exotischen Saisonfrüchten zum Teilen',
  },
};

/**
 * Returns the best translation for a dish in the requested target language.
 */
export function getDishTranslation(
  dish: MenuItem,
  lang: MenuLanguage
): string {
  // 1. Direct translation stored on the dish item
  if (dish.translations && dish.translations[lang]) {
    return dish.translations[lang]!;
  }

  // 2. Exact match in the comprehensive DISH_TRANSLATIONS dictionary
  const exact = DISH_TRANSLATIONS[dish.name];
  if (exact && exact[lang]) {
    return exact[lang];
  }

  // 3. Fallbacks based on language
  if (lang === 'ar') {
    return dish.localName || dish.name;
  }

  if (lang === 'en') {
    return dish.name;
  }

  if (lang === 'es') {
    // If we have a Spanish match or fallback to dish name
    return dish.name;
  }

  if (lang === 'de') {
    return dish.name;
  }

  return dish.localName || dish.name;
}
