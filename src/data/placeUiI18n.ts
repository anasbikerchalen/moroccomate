import type { AppLanguage } from '../utils/localeRouting';

export interface PlaceUiCopy {
  hero: {
    morocco: string;
    cuisineLabel: (cuisine: string) => string;
    foodChipLabel: (cuisine: string) => string;
    weeklySchedule: string;
    openNow: string;
    closed: string;
    today: string;
    clickScheduleTitle: string;
    reviewsWord: string;
    topRated: string;
    showLess: string;
    plusMore: (count: number) => string;
    servedFor: string;
    getDirections: string;
    bookTable: string;
    bookTableTitle: string;
    reserveWhatsApp: string;
    reserveWhatsAppTitle: string;
    callToBook: string;
    callTargetTitle: (target: string) => string;
    walkInOnly: string;
    call: string;
    copy: string;
    copied: string;
    phoneCopiedTitle: string;
    copyPhoneTitle: (phone: string) => string;
    whatsapp: string;
    messageWhatsAppTitle: string;
    saveFavorites: string;
    savedFavorites: string;
    share: string;
    shareListingTitle: string;
    linkCopiedTitle: string;
    website: string;
    visitWebsiteTitle: string;
    searchOnlineTitle: string;
    instagram: string;
    openInstagramTitle: string;
    restaurantFallback: string;
    viewSourceReviews: (source: string) => string;
    moroccanMateRating: string;
    storefrontBannerAlt: (name: string) => string;
  };
  features: {
    halalAlcohol: string;
    halalAlcoholTip: string;
    halalDry: string;
    halalDryTip: string;
    vegFriendly: string;
    vegFriendlyTip: string;
    freeWifi: string;
    ac: string;
    medinaCourtyard: string;
    medinaCourtyardTip: string;
    hiddenGem: string;
    hiddenGemTip: string;
    delivery: string;
    deliveryTip: string;
    stepFree: string;
  };
  nav: {
    worries: string;
    about: string;
    menu: string;
    hoursMap: string;
    faq: string;
    reviews: string;
  };
  worries: {
    title: string;
    subtitleEat: string;
    subtitleDefault: string;
    notAvailableYet: string;
    pendingResearchTitle: string;
    imagePending: string;
  };
  insiderTip: {
    title: string;
    camelAlt: string;
  };
  soul: {
    title: string;
    bestFor: string;
    idealFit: string;
    bestForFallback: string;
    aspectRatings: string;
    fivePointScale: string;
    food: string;
    atmosphere: string;
    service: string;
    value: string;
    theGood: string;
    verifiedProfileFacts: string;
    theNotSoGood: string;
  };
  about: {
    title: string;
    knowBeforeYouGo: string;
  };
  menu: {
    verifiedMenuPrices: string;
    highlyRecommendedCount: (count: number) => string;
    highlyRecommendedFilterTitle: string;
    menuAndPricesTitle: (name: string) => string;
    menuIntroPrefix: (count: number) => string;
    recommendedCue: string;
    menuIntroMiddle: string;
    menuIntroSuffix: string;
    filterDishesPlaceholder: string;
    clearFilter: string;
    fullMenu: string;
    fullMenuTitle: string;
    booklet: string;
    bookletTitle: string;
    imagesCount: (count: number) => string;
    imagesTitle: string;
    langLabel: string;
    displayDishInLang: (langLabel: string) => string;
    all: string;
    recommendedShort: (count: number) => string;
    vegShort: string;
    allSections: (count: number) => string;
    expandAll: string;
    collapseAll: string;
    printedMenuPages: (name: string, count: number) => string;
    tapPageCard: string;
    pricesInMad: string;
    pageOf: (page: number, total: number) => string;
    pageShort: (page: number) => string;
    zoom: string;
    zoomPageAria: (label: string) => string;
    itemCount: (count: number) => string;
    showMoreParts: (parts: number, dishes: number) => string;
    showLess: string;
    noDishesFound: string;
    resetFilters: string;
    originalMenuCardPhotos: (count: number) => string;
    openFullGallery: string;
    menuPageFallback: (page: number) => string;
    digitalMenuPending: string;
    pendingVerificationDesc: string;
    photosOnGoogleMaps: string;
    reservations: string;
    closeImageViewer: string;
    previousMenuPage: string;
    nextMenuPage: string;
    indexLabel: string;
    highlyRecommendedBadge: string;
    spicy: string;
    whatIsThis: string;
    details: string;
    less: string;
    recommendedBadge: string;
    recommendedTitle: string;
    learnAboutTerm: (term: string) => string;
  };
  logistics: {
    title: string;
    address: string;
    parkingAccess: string;
    privateParking: string;
    streetParking: string;
    typicalWaitTime: string;
    minsSuffix: (mins: number) => string;
    bestTimeToVisit: string;
    seatingStyles: string;
    viewSetting: string;
    nearbyLandmarks: string;
    walkingDistance: string;
    walkDriveTimes: string;
    realGpsProximity: string;
    minWalk: (mins: number) => string;
    minDrive: (mins: number) => string;
    minWalkShort: (mins: number) => string;
    minDriveShort: (mins: number) => string;
    interactiveRadiusGraph: string;
    northLetter: string;
    perPersonSuffix: string;
    avgPersonApprox: (mad: number) => string;
    menuDishesLabel: string;
    operationalTitle: string;
    averageMealCost: string;
    beveragePolicy: string;
    servesAlcohol: string;
    dryDining: string;
    serviceHours: string;
    ramadanService: string;
    ramadanFtour: string;
    ramadanLunch: string;
    ramadanEvening: string;
    languagesSpoken: string;
    wifiAccess: string;
    complimentary: string;
    none: string;
    airConditioning: string;
    equippedAc: string;
    naturalBreeze: string;
    accessibility: string;
    wheelchairAccessible: string;
    stepAccess: string;
    acceptedPayments: string;
    phoneBooking: string;
    noListingSelected: string;
    goBack: string;
  };
  faq: {
    headingForPlace: (name: string) => string;
    eatSubtitle: string;
    defaultSubtitle: string;
    expandAll: (count: number) => string;
    collapseAll: string;
  };
  reviews: {
    headingForPlace: (name: string) => string;
    headingGeneric: string;
    filterFromSource: (source: string) => string;
    totalPrefix: string;
    reviewsWord: string;
    ratingBreakdown: string;
    featuredReviews: (count: number) => string;
    mostMentionedTopics: string;
    clearTopic: string;
    all: (count: number) => string;
    good: (count: number) => string;
    bad: (count: number) => string;
    reset: string;
    pauseFlow: string;
    resumeFlow: string;
    pauseFlowTitle: string;
    resumeFlowTitle: string;
    scrollUp: string;
    scrollDown: string;
    noReviewsMatch: string;
    showAllReviews: string;
    seeAllReviewsOn: (source: string) => string;
    expandText: string;
    showLess: string;
    source: string;
    womanReviewer: string;
    manReviewer: string;
    viewOriginalReview: (source: string) => string;
  };
  peers: {
    kicker: string;
    heading: (city: string) => string;
  };
  menuModal: {
    menuTitle: (name: string) => string;
    officialSelection: string;
    verifiedDinerPhotos: string;
    verifiedDinerPhotosDesc: string;
    seePhotosOnMaps: string;
  };
  play: {
    passport: string;
    openPassportAria: string;
    travelerPassport: string;
    placesStamped: (count: number) => string;
    collectStamps: string;
    openLabel: string;
    previous: string;
    nextGem: string;
    ofTotal: (current: number, total: number) => string;
    swipeOrAlt: string;
    quickPeekAria: (name: string) => string;
    medinaCompass: string;
    whereNextIn: (city: string) => string;
    compassDesc: string;
    spinCompass: string;
    spinCompassAria: (city: string) => string;
    tabAll: string;
    tabFood: string;
    tabSleep: string;
    tabThings: string;
    tabShopping: string;
    quickPeekBtn: string;
    goThere: string;
    highlights: string;
    insiderTip: string;
    saved: string;
    save: string;
    nextSpin: string;
    openFullGuide: string;
    stamped: string;
    closeQuickPeek: string;
    openMapsTitle: string;
    peekStay: (city: string) => string;
    peekActivity: (city: string) => string;
    peekShop: (city: string) => string;
    catFood: string;
    catSleep: string;
    catShopping: string;
    catThings: string;
    reasonHiddenGem: string;
    reasonLocalFavorite: string;
    reasonSpecialTreat: string;
    reasonVerifiedPick: string;
    reasonTopRated: string;
    reasonCityDiscovery: string;
  };
}

export const PLACE_UI_I18N: Record<AppLanguage, PlaceUiCopy> = {
  en: {
    hero: {
      morocco: 'Morocco',
      cuisineLabel: (cuisine) => `${cuisine} Cuisine`,
      foodChipLabel: (cuisine) => `${cuisine} Food`,
      weeklySchedule: 'Weekly Schedule',
      openNow: 'Open Now',
      closed: 'Closed',
      today: 'Today',
      clickScheduleTitle: 'Click to view weekly schedule',
      reviewsWord: 'reviews',
      topRated: 'Top Rated',
      showLess: 'Show less',
      plusMore: (n) => `+${n} more`,
      servedFor: 'Served For',
      getDirections: 'Get Directions',
      bookTable: 'Book a Table',
      bookTableTitle: 'Book a table online',
      reserveWhatsApp: 'Reserve via WhatsApp',
      reserveWhatsAppTitle: 'Reserve via WhatsApp',
      callToBook: 'Call to Book',
      callTargetTitle: (t) => `Call ${t}`,
      walkInOnly: 'Walk-in Only',
      call: 'Call',
      copy: 'Copy',
      copied: 'Copied',
      phoneCopiedTitle: 'Phone number copied',
      copyPhoneTitle: (p) => `Copy ${p}`,
      whatsapp: 'WhatsApp',
      messageWhatsAppTitle: 'Message on WhatsApp',
      saveFavorites: 'Save to Favorites',
      savedFavorites: 'Saved in Favorites',
      share: 'Share',
      shareListingTitle: 'Share listing',
      linkCopiedTitle: 'Link copied!',
      website: 'Website',
      visitWebsiteTitle: 'Visit official website',
      searchOnlineTitle: 'Search online',
      instagram: 'Instagram',
      openInstagramTitle: 'Open Instagram',
      restaurantFallback: 'Restaurant',
      viewSourceReviews: (s) => `View ${s} reviews`,
      moroccanMateRating: 'Moroccan Mate Camel Rating',
      storefrontBannerAlt: (n) => `${n} storefront banner`,
    },
    features: {
      halalAlcohol: 'Halal Food · Serves Alcohol',
      halalAlcoholTip:
        'All meat dishes and ingredients are 100% Halal. The venue holds a liquor license and serves alcoholic beverages.',
      halalDry: 'Halal Certified (Dry)',
      halalDryTip: 'Strictly Halal certified kitchen in a 100% alcohol-free, pork-free venue.',
      vegFriendly: 'Vegetarian Friendly',
      vegFriendlyTip:
        'Offers verified vegetarian tajines, couscous, fresh salads, and plant-based Moroccan specialties.',
      freeWifi: 'Free Wi-Fi',
      ac: 'Air Conditioning',
      medinaCourtyard: 'Medina Courtyard',
      medinaCourtyardTip:
        'Located inside the historical Medina pedestrian quarter with an authentic open-air courtyard.',
      hiddenGem: 'Hidden Gem',
      hiddenGemTip: 'Authentic local gem cherished by locals and tucked away from tourist crowds.',
      delivery: 'Delivery Available',
      deliveryTip: 'Local delivery available to your riad or hotel via Glovo or direct dispatch.',
      stepFree: 'Step-Free Access',
    },
    nav: {
      worries: 'Worries',
      about: 'About',
      menu: 'Menu',
      hoursMap: 'Hours & Map',
      faq: 'FAQ',
      reviews: 'Reviews',
    },
    worries: {
      title: "Things You're Worried About!",
      subtitleEat: 'Honest answers to what usually worries diners — checked and verified, never guessed.',
      subtitleDefault: 'Honest answers to what usually worries travelers — checked from the web, never guessed.',
      notAvailableYet: '(not available yet)',
      pendingResearchTitle: 'Web research not done yet — this answer will only appear after verification.',
      imagePending: 'Image pending',
    },
    insiderTip: {
      title: 'Local Insider Tip',
      camelAlt: 'Moroccan Mate camel pointing to Local Insider Tip',
    },
    soul: {
      title: 'Is it right for you?',
      bestFor: 'Best For',
      idealFit: 'Ideal Fit',
      bestForFallback: 'Recommended for all Moroccan culinary explorers.',
      aspectRatings: 'Aspect Ratings',
      fivePointScale: '5-Point Scale',
      food: 'Food',
      atmosphere: 'Atmosphere',
      service: 'Service',
      value: 'Value',
      theGood: 'The good',
      verifiedProfileFacts: 'Verified Profile Facts',
      theNotSoGood: 'The not so good',
    },
    about: {
      title: 'About the Experience',
      knowBeforeYouGo: 'Know Before You Go',
    },
    menu: {
      verifiedMenuPrices: 'Verified Menu & Prices',
      highlyRecommendedCount: (c) => `★ ${c} Highly Recommended`,
      highlyRecommendedFilterTitle: 'Filter by Highly Recommended Plates',
      menuAndPricesTitle: (n) => `${n} Menu & Prices`,
      menuIntroPrefix: (c) => `All ${c} dishes listed inline with verified Moroccan Dirham (MAD) prices. Signature favorites are marked `,
      recommendedCue: '★ Recommended',
      menuIntroMiddle: '. Tap ',
      menuIntroSuffix: ' to build your tasting list.',
      filterDishesPlaceholder: 'Filter dishes...',
      clearFilter: 'Clear filter',
      fullMenu: 'Full Menu',
      fullMenuTitle: 'Full expandable menu list view',
      booklet: 'Booklet',
      bookletTitle: 'Classical printed menu booklet view',
      imagesCount: (c) => `Images (${c})`,
      imagesTitle: 'Original photographed menu pages',
      langLabel: 'Lang:',
      displayDishInLang: (l) => `Display dish descriptions in ${l}`,
      all: 'All',
      recommendedShort: (c) => `★ Recommended${c > 0 ? ` (${c})` : ''}`,
      vegShort: '🌱 Veg',
      allSections: (c) => `All Sections (${c})`,
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
      printedMenuPages: (n, c) => `${n} Printed Menu Pages (${c})`,
      tapPageCard: 'Tap any page card to inspect dish prices at full resolution.',
      pricesInMad: 'Prices in MAD (Dh)',
      pageOf: (p, t) => `Page ${p} / ${t}`,
      pageShort: (p) => `Page ${p}`,
      zoom: 'Zoom',
      zoomPageAria: (l) => `Zoom ${l}`,
      itemCount: (c) => `${c} ${c === 1 ? 'item' : 'items'}`,
      showMoreParts: (parts, dishes) =>
        `Show More (${parts} more ${parts === 1 ? 'part' : 'parts'} · ${dishes} dishes)`,
      showLess: 'Show Less',
      noDishesFound: 'No dishes found matching your current filter.',
      resetFilters: 'Reset filters',
      originalMenuCardPhotos: (c) => `Original Menu Card Photos (${c})`,
      openFullGallery: 'Open Full Gallery →',
      menuPageFallback: (p) => `Menu page ${p}`,
      digitalMenuPending: 'Digital Menu Pending Verification',
      pendingVerificationDesc:
        'We confirm live prices before publishing. View diner photos of the printed menu on Google Maps.',
      photosOnGoogleMaps: 'Photos on Google Maps',
      reservations: 'Reservations',
      closeImageViewer: 'Close image viewer',
      previousMenuPage: 'Previous menu page',
      nextMenuPage: 'Next menu page',
      indexLabel: 'Index:',
      highlyRecommendedBadge: '★ Highly Recommended',
      spicy: 'Spicy',
      whatIsThis: 'What is this?',
      details: 'Details',
      less: 'Less',
      recommendedBadge: '★ Recommended',
      recommendedTitle: "Chef's Highly Recommended Plate",
      learnAboutTerm: (t) => `Learn about ${t}`,
    },
    logistics: {
      title: 'Logistics & Getting There',
      address: 'Address',
      parkingAccess: 'Parking Access',
      privateParking: 'Private parking nearby',
      streetParking: 'Street parking / Walking in',
      typicalWaitTime: 'Typical Wait Time',
      minsSuffix: (m) => `${m} mins`,
      bestTimeToVisit: 'Best Time to Visit',
      seatingStyles: 'Seating Styles',
      viewSetting: 'View Setting',
      nearbyLandmarks: 'Nearby Landmarks & Access',
      walkingDistance: 'Walking Distance to Landmarks',
      walkDriveTimes: 'Walk & Drive Times',
      realGpsProximity: 'Real GPS Proximity',
      minWalk: (m) => `${m} min walk`,
      minDrive: (m) => `${m} min drive`,
      minWalkShort: (m) => `${m}m walk`,
      minDriveShort: (m) => `${m}m drive`,
      interactiveRadiusGraph: 'Interactive radius graph',
      northLetter: 'N',
      perPersonSuffix: '/ person',
      avgPersonApprox: (mad) => `~${mad} MAD / person`,
      menuDishesLabel: 'Menu dishes:',
      operationalTitle: 'Operational Details',
      averageMealCost: 'Average Meal Cost',
      beveragePolicy: 'Beverage Policy',
      servesAlcohol: 'Licensed (Serves Alcohol)',
      dryDining: 'Dry Dining (Alcohol-free venue)',
      serviceHours: 'Service Hours',
      ramadanService: 'Ramadan Service',
      ramadanFtour: 'Opens for Ftour buffet',
      ramadanLunch: 'Serves lunch to visitors',
      ramadanEvening: 'Evening service only',
      languagesSpoken: 'Languages Spoken',
      wifiAccess: 'Wi-Fi Access',
      complimentary: 'Complimentary',
      none: 'None',
      airConditioning: 'Air Conditioning',
      equippedAc: 'Equipped with AC',
      naturalBreeze: 'Natural courtyard breeze',
      accessibility: 'Accessibility',
      wheelchairAccessible: 'Wheelchair accessible',
      stepAccess: 'Step-access entrance',
      acceptedPayments: 'Accepted Payments',
      phoneBooking: 'Phone / Booking',
      noListingSelected: 'No listing selected.',
      goBack: 'Go Back',
    },
    faq: {
      headingForPlace: (name) => `Frequently Asked Questions about ${name}`,
      eatSubtitle: 'Verified answers on prices in MAD, halal & beverage policy, reservations, and hours',
      defaultSubtitle: 'Quick answers verified from house policies, menu pricing, and local logistics',
      expandAll: (c) => `Expand all (${c})`,
      collapseAll: 'Collapse all',
    },
    reviews: {
      headingForPlace: (name) => `${name} Reviews`,
      headingGeneric: 'Reviews',
      filterFromSource: (s) => `Filter reviews from ${s}`,
      totalPrefix: 'Total ·',
      reviewsWord: 'reviews',
      ratingBreakdown: 'Rating Breakdown',
      featuredReviews: (c) => `${c} featured reviews`,
      mostMentionedTopics: 'Most Mentioned Topics',
      clearTopic: 'Clear topic',
      all: (c) => `All (${c})`,
      good: (c) => `Good (${c})`,
      bad: (c) => `Bad (${c})`,
      reset: 'Reset',
      pauseFlow: 'Pause flow',
      resumeFlow: 'Resume flow',
      pauseFlowTitle: 'Pause flowing reviews',
      resumeFlowTitle: 'Resume flowing reviews',
      scrollUp: 'Scroll up',
      scrollDown: 'Scroll down',
      noReviewsMatch: 'No reviews match the selected filters.',
      showAllReviews: 'Show all reviews',
      seeAllReviewsOn: (s) => `See all reviews on ${s}`,
      expandText: 'Expand text',
      showLess: 'Show less',
      source: 'Source',
      womanReviewer: 'Woman reviewer',
      manReviewer: 'Man reviewer',
      viewOriginalReview: (s) => `View original review on ${s}`,
    },
    peers: {
      kicker: 'Similar Atmosphere & Taste',
      heading: (c) => `Recommended Restaurants in ${c}`,
    },
    menuModal: {
      menuTitle: (n) => `${n} Menu`,
      officialSelection: 'Official selection',
      verifiedDinerPhotos: 'Verified Diner Photos & Menus',
      verifiedDinerPhotosDesc:
        'Full photographed menus and daily rotating specials are verified directly by diners on Google Maps.',
      seePhotosOnMaps: 'See photos and menu on Maps',
    },
    play: {
      passport: 'Passport',
      openPassportAria: 'Open Moroccan Mate Passport',
      travelerPassport: 'Traveler Passport',
      placesStamped: (c) => `${c} ${c === 1 ? 'place' : 'places'} stamped across Morocco`,
      collectStamps: 'Collect zellige stamps as you explore',
      openLabel: 'Open',
      previous: 'Previous',
      nextGem: 'Next Gem',
      ofTotal: (i, t) => `${i} of ${t}`,
      swipeOrAlt: 'Swipe or Alt + ← / →',
      quickPeekAria: (n) => `Quick peek ${n}`,
      medinaCompass: 'Medina Compass',
      whereNextIn: (c) => `Where next in ${c}?`,
      compassDesc: 'Spin the brass dial to surface an unvisited spot nearby—eat, stay, shop, or explore.',
      spinCompass: 'Spin Compass',
      spinCompassAria: (c) => `Spin compass to discover another spot in ${c}`,
      tabAll: 'Surprise Me',
      tabFood: 'Eat',
      tabSleep: 'Stay',
      tabThings: 'Do',
      tabShopping: 'Shop',
      quickPeekBtn: 'Quick Peek',
      goThere: 'Go There',
      highlights: 'Highlights',
      insiderTip: 'Insider Tip',
      saved: 'Saved',
      save: 'Save',
      nextSpin: 'Next Spin',
      openFullGuide: 'Open Full Guide',
      stamped: 'Stamped',
      closeQuickPeek: 'Close quick peek',
      openMapsTitle: 'Open on Google Maps',
      peekStay: (c) => `Peek a stay in ${c}`,
      peekActivity: (c) => `Peek an activity in ${c}`,
      peekShop: (c) => `Peek a shop in ${c}`,
      catFood: 'Eat & Drink',
      catSleep: 'Where to Stay',
      catShopping: 'Artisan Shopping',
      catThings: 'Things to Do',
      reasonHiddenGem: 'Hidden Gem',
      reasonLocalFavorite: 'Local Favorite',
      reasonSpecialTreat: 'Special Treat',
      reasonVerifiedPick: 'Verified Pick',
      reasonTopRated: 'Top Rated',
      reasonCityDiscovery: 'City Discovery',
    },
  },
  fr: {
    hero: {
      morocco: 'Maroc',
      cuisineLabel: (cuisine) => `Cuisine ${cuisine}`,
      foodChipLabel: (cuisine) => `Cuisine ${cuisine}`,
      weeklySchedule: 'Horaires de la semaine',
      openNow: 'Ouvert',
      closed: 'Fermé',
      today: "Aujourd'hui",
      clickScheduleTitle: 'Cliquer pour voir les horaires de la semaine',
      reviewsWord: 'avis',
      topRated: 'Mieux noté',
      showLess: 'Voir moins',
      plusMore: (n) => `+${n} de plus`,
      servedFor: 'Servi pour',
      getDirections: 'Itinéraire',
      bookTable: 'Réserver une table',
      bookTableTitle: 'Réserver une table en ligne',
      reserveWhatsApp: 'Réserver via WhatsApp',
      reserveWhatsAppTitle: 'Réserver via WhatsApp',
      callToBook: 'Appeler pour réserver',
      callTargetTitle: (t) => `Appeler ${t}`,
      walkInOnly: 'Sans réservation',
      call: 'Appeler',
      copy: 'Copier',
      copied: 'Copié',
      phoneCopiedTitle: 'Numéro copié',
      copyPhoneTitle: (p) => `Copier ${p}`,
      whatsapp: 'WhatsApp',
      messageWhatsAppTitle: 'Envoyer un message sur WhatsApp',
      saveFavorites: 'Enregistrer',
      savedFavorites: 'Enregistré',
      share: 'Partager',
      shareListingTitle: 'Partager ce lieu',
      linkCopiedTitle: 'Lien copié !',
      website: 'Site web',
      visitWebsiteTitle: 'Visiter le site officiel',
      searchOnlineTitle: 'Rechercher en ligne',
      instagram: 'Instagram',
      openInstagramTitle: 'Ouvrir Instagram',
      restaurantFallback: 'Restaurant',
      viewSourceReviews: (s) => `Voir les avis ${s}`,
      moroccanMateRating: 'Note Moroccan Mate',
      storefrontBannerAlt: (n) => `Façade de ${n}`,
    },
    features: {
      halalAlcohol: 'Cuisine Halal · Sert de l’alcool',
      halalAlcoholTip:
        'Toutes les viandes et ingrédients sont 100 % Halal. L’établissement possède une licence et sert des boissons alcoolisées.',
      halalDry: 'Certifié Halal (Sans alcool)',
      halalDryTip: 'Cuisine strictement certifiée Halal dans un cadre 100 % sans alcool ni porc.',
      vegFriendly: 'Options végétariennes',
      vegFriendlyTip:
        'Propose des tajines végétariens, couscous, salades fraîches et spécialités marocaines végétales vérifiées.',
      freeWifi: 'Wi-Fi gratuit',
      ac: 'Climatisation',
      medinaCourtyard: 'Patio dans la Médina',
      medinaCourtyardTip:
        'Situé au cœur du quartier piéton historique de la Médina avec un patio authentique à ciel ouvert.',
      hiddenGem: 'Pépite cachée',
      hiddenGemTip: 'Adresse locale authentique prisée des habitants et à l’écart des foules touristiques.',
      delivery: 'Livraison disponible',
      deliveryTip: 'Livraison locale disponible jusqu’à votre riad ou hôtel via Glovo ou service direct.',
      stepFree: 'Accès de plain-pied',
    },
    nav: {
      worries: 'Questions clés',
      about: 'À propos',
      menu: 'Menu',
      hoursMap: 'Horaires & Carte',
      faq: 'FAQ',
      reviews: 'Avis',
    },
    worries: {
      title: 'Ce que vous voulez savoir avant d’y aller !',
      subtitleEat: 'Des réponses honnêtes aux questions fréquentes des clients — vérifiées, jamais devinées.',
      subtitleDefault: 'Des réponses honnêtes aux inquiétudes courantes des voyageurs — vérifiées sur place.',
      notAvailableYet: '(pas encore disponible)',
      pendingResearchTitle: 'Vérification en cours — cette réponse n’apparaît qu’après confirmation.',
      imagePending: 'Image en attente',
    },
    insiderTip: {
      title: 'Conseil d’initié local',
      camelAlt: 'Chameau Moroccan Mate indiquant le conseil d’initié',
    },
    soul: {
      title: 'Est-ce fait pour vous ?',
      bestFor: 'Idéal pour',
      idealFit: 'Profil idéal',
      bestForFallback: 'Recommandé pour tous les amateurs de cuisine marocaine.',
      aspectRatings: 'Notes détaillées',
      fivePointScale: 'Sur 5 points',
      food: 'Cuisine',
      atmosphere: 'Ambiance',
      service: 'Service',
      value: 'Qualité/Prix',
      theGood: 'Les points forts',
      verifiedProfileFacts: 'Faits vérifiés',
      theNotSoGood: 'À savoir',
    },
    about: {
      title: 'À propos de l’expérience',
      knowBeforeYouGo: 'Bon à savoir avant d’y aller',
    },
    menu: {
      verifiedMenuPrices: 'Menu & Prix Vérifiés',
      highlyRecommendedCount: (c) => `★ ${c} Coups de cœur`,
      highlyRecommendedFilterTitle: 'Filtrer les plats vivement recommandés',
      menuAndPricesTitle: (n) => `Menu & Tarifs — ${n}`,
      menuIntroPrefix: (c) => `Les ${c} plats sont listés avec leurs prix vérifiés en Dirhams (MAD). Les spécialités signatures sont marquées `,
      recommendedCue: '★ Recommandé',
      menuIntroMiddle: '. Appuyez sur ',
      menuIntroSuffix: ' pour composer votre sélection.',
      filterDishesPlaceholder: 'Rechercher un plat...',
      clearFilter: 'Effacer le filtre',
      fullMenu: 'Menu complet',
      fullMenuTitle: 'Affichage complet du menu en liste',
      booklet: 'Livret',
      bookletTitle: 'Affichage classique en livret de menu',
      imagesCount: (c) => `Images (${c})`,
      imagesTitle: 'Pages photographiées du menu original',
      langLabel: 'Langue :',
      displayDishInLang: (l) => `Afficher les plats en ${l}`,
      all: 'Tout',
      recommendedShort: (c) => `★ Recommandés${c > 0 ? ` (${c})` : ''}`,
      vegShort: '🌱 Végé',
      allSections: (c) => `Toutes les sections (${c})`,
      expandAll: 'Tout déplier',
      collapseAll: 'Tout replier',
      printedMenuPages: (n, c) => `Pages du menu de ${n} (${c})`,
      tapPageCard: 'Appuyez sur une page pour consulter les prix en haute résolution.',
      pricesInMad: 'Prix en MAD (Dh)',
      pageOf: (p, t) => `Page ${p} / ${t}`,
      pageShort: (p) => `Page ${p}`,
      zoom: 'Zoomer',
      zoomPageAria: (l) => `Zoomer ${l}`,
      itemCount: (c) => `${c} ${c === 1 ? 'plat' : 'plats'}`,
      showMoreParts: (parts, dishes) =>
        `Voir plus (${parts} ${parts === 1 ? 'autre section' : 'autres sections'} · ${dishes} plats)`,
      showLess: 'Voir moins',
      noDishesFound: 'Aucun plat ne correspond à votre filtre.',
      resetFilters: 'Réinitialiser les filtres',
      originalMenuCardPhotos: (c) => `Photos originales de la carte (${c})`,
      openFullGallery: 'Ouvrir la galerie →',
      menuPageFallback: (p) => `Page du menu ${p}`,
      digitalMenuPending: 'Menu numérique en cours de vérification',
      pendingVerificationDesc:
        'Nous vérifions les prix réels avant publication. Consultez les photos du menu sur Google Maps.',
      photosOnGoogleMaps: 'Photos sur Google Maps',
      reservations: 'Réservations',
      closeImageViewer: 'Fermer l’aperçu',
      previousMenuPage: 'Page précédente',
      nextMenuPage: 'Page suivante',
      indexLabel: 'Index :',
      highlyRecommendedBadge: '★ Très recommandé',
      spicy: 'Épicé',
      whatIsThis: 'C’est quoi ?',
      details: 'Détails',
      less: 'Moins',
      recommendedBadge: '★ Recommandé',
      recommendedTitle: 'Plat vivement recommandé par le chef',
      learnAboutTerm: (t) => `En savoir plus sur ${t}`,
    },
    logistics: {
      title: 'Accès & Logistique',
      address: 'Adresse',
      parkingAccess: 'Stationnement',
      privateParking: 'Parking privé à proximité',
      streetParking: 'Stationnement dans la rue / Accès piéton',
      typicalWaitTime: 'Attente habituelle',
      minsSuffix: (m) => `${m} min`,
      bestTimeToVisit: 'Meilleur moment',
      seatingStyles: 'Types de places',
      viewSetting: 'Cadre & Vue',
      nearbyLandmarks: 'Lieux & Accès à proximité',
      walkingDistance: 'Distance à pied des lieux clés',
      walkDriveTimes: 'Temps à pied & en voiture',
      realGpsProximity: 'Proximité GPS réelle',
      minWalk: (m) => `${m} min à pied`,
      minDrive: (m) => `${m} min en voiture`,
      minWalkShort: (m) => `${m} min à pied`,
      minDriveShort: (m) => `${m} min en voiture`,
      interactiveRadiusGraph: 'Carte de proximité interactive',
      northLetter: 'N',
      perPersonSuffix: '/ pers.',
      avgPersonApprox: (mad) => `~${mad} MAD / pers.`,
      menuDishesLabel: 'Plats à la carte :',
      operationalTitle: 'Informations pratiques',
      averageMealCost: 'Budget moyen par repas',
      beveragePolicy: 'Boissons & Alcool',
      servesAlcohol: 'Avec licence (sert de l’alcool)',
      dryDining: 'Sans alcool (établissement sobre)',
      serviceHours: 'Heures d’ouverture',
      ramadanService: 'Service pendant le Ramadan',
      ramadanFtour: 'Ouvert pour le buffet de Ftour',
      ramadanLunch: 'Sert le déjeuner aux visiteurs',
      ramadanEvening: 'Service en soirée uniquement',
      languagesSpoken: 'Langues parlées',
      wifiAccess: 'Accès Wi-Fi',
      complimentary: 'Gratuit',
      none: 'Non disponible',
      airConditioning: 'Climatisation',
      equippedAc: 'Équipé de la climatisation',
      naturalBreeze: 'Ventilation naturelle / patio',
      accessibility: 'Accessibilité',
      wheelchairAccessible: 'Accessible en fauteuil roulant',
      stepAccess: 'Entrée avec marches',
      acceptedPayments: 'Paiements acceptés',
      phoneBooking: 'Téléphone / Réservation',
      noListingSelected: 'Aucun lieu sélectionné.',
      goBack: 'Retour',
    },
    faq: {
      headingForPlace: (name) => `Questions fréquentes sur ${name}`,
      eatSubtitle: 'Réponses vérifiées sur les prix en MAD, la politique halal, les réservations et les horaires',
      defaultSubtitle: 'Réponses rapides vérifiées sur les tarifs, politiques et infos pratiques',
      expandAll: (c) => `Tout afficher (${c})`,
      collapseAll: 'Tout masquer',
    },
    reviews: {
      headingForPlace: (name) => `Avis sur ${name}`,
      headingGeneric: 'Avis',
      filterFromSource: (s) => `Filtrer les avis de ${s}`,
      totalPrefix: 'Total ·',
      reviewsWord: 'avis',
      ratingBreakdown: 'Répartition des notes',
      featuredReviews: (c) => `${c} avis sélectionnés`,
      mostMentionedTopics: 'Sujets les plus mentionnés',
      clearTopic: 'Effacer le filtre',
      all: (c) => `Tous (${c})`,
      good: (c) => `Positifs (${c})`,
      bad: (c) => `Critiques (${c})`,
      reset: 'Réinitialiser',
      pauseFlow: 'Mettre en pause',
      resumeFlow: 'Reprendre le défilement',
      pauseFlowTitle: 'Mettre en pause le fil d’avis',
      resumeFlowTitle: 'Reprendre le fil d’avis',
      scrollUp: 'Monter',
      scrollDown: 'Descendre',
      noReviewsMatch: 'Aucun avis ne correspond aux filtres choisis.',
      showAllReviews: 'Afficher tous les avis',
      seeAllReviewsOn: (s) => `Voir tous les avis sur ${s}`,
      expandText: 'Lire la suite',
      showLess: 'Réduire',
      source: 'Source',
      womanReviewer: 'Avis d’une cliente',
      manReviewer: 'Avis d’un client',
      viewOriginalReview: (s) => `Voir l’avis original sur ${s}`,
    },
    peers: {
      kicker: 'Ambiance & Cuisine Similaires',
      heading: (c) => `Restaurants recommandés à ${c}`,
    },
    menuModal: {
      menuTitle: (n) => `Menu de ${n}`,
      officialSelection: 'Sélection officielle',
      verifiedDinerPhotos: 'Photos & Menus vérifiés',
      verifiedDinerPhotosDesc:
        'Les menus complets photographiés et plats du jour sont vérifiés directement par les clients sur Google Maps.',
      seePhotosOnMaps: 'Voir photos et menu sur Maps',
    },
    play: {
      passport: 'Passeport',
      openPassportAria: 'Ouvrir le passeport Moroccan Mate',
      travelerPassport: 'Passeport Voyageur',
      placesStamped: (c) => `${c} ${c === 1 ? 'lieu tamponné' : 'lieux tamponnés'} au Maroc`,
      collectStamps: 'Collectionnez les tampons zellige au fil de votre visite',
      openLabel: 'Ouvrir',
      previous: 'Précédent',
      nextGem: 'Suivant',
      ofTotal: (i, t) => `${i} sur ${t}`,
      swipeOrAlt: 'Glisser ou Alt + ← / →',
      quickPeekAria: (n) => `Aperçu rapide de ${n}`,
      medinaCompass: 'Boussole Médina',
      whereNextIn: (c) => `Où aller ensuite à ${c} ?`,
      compassDesc: 'Faites tourner la boussole pour découvrir un autre lieu tout près : manger, dormir ou explorer.',
      spinCompass: 'Lancer la boussole',
      spinCompassAria: (c) => `Tourner la boussole pour découvrir un lieu à ${c}`,
      tabAll: 'Surprenez-moi',
      tabFood: 'Manger',
      tabSleep: 'Dormir',
      tabThings: 'Activités',
      tabShopping: 'Shopping',
      quickPeekBtn: 'Aperçu rapide',
      goThere: 'Y aller',
      highlights: 'Points forts',
      insiderTip: 'Conseil d’initié',
      saved: 'Enregistré',
      save: 'Enregistrer',
      nextSpin: 'Autre choix',
      openFullGuide: 'Voir le guide complet',
      stamped: 'Tamponné',
      closeQuickPeek: 'Fermer l’aperçu',
      openMapsTitle: 'Ouvrir dans Google Maps',
      peekStay: (c) => `Aperçu d’un hébergement à ${c}`,
      peekActivity: (c) => `Aperçu d’une activité à ${c}`,
      peekShop: (c) => `Aperçu d’une boutique à ${c}`,
      catFood: 'Manger & Boire',
      catSleep: 'Où dormir',
      catShopping: 'Artisanat & Shopping',
      catThings: 'Choses à faire',
      reasonHiddenGem: 'Pépite cachée',
      reasonLocalFavorite: 'Favori local',
      reasonSpecialTreat: 'Adresse d’exception',
      reasonVerifiedPick: 'Sélection vérifiée',
      reasonTopRated: 'Très bien noté',
      reasonCityDiscovery: 'Découverte locale',
    },
  },
  es: {
    hero: {
      morocco: 'Marruecos',
      cuisineLabel: (cuisine) => `Cocina ${cuisine}`,
      foodChipLabel: (cuisine) => `Cocina ${cuisine}`,
      weeklySchedule: 'Horario semanal',
      openNow: 'Abierto ahora',
      closed: 'Cerrado',
      today: 'Hoy',
      clickScheduleTitle: 'Pulsa para ver el horario semanal',
      reviewsWord: 'reseñas',
      topRated: 'Mejor valorado',
      showLess: 'Ver menos',
      plusMore: (n) => `+${n} más`,
      servedFor: 'Ideal para',
      getDirections: 'Cómo llegar',
      bookTable: 'Reservar mesa',
      bookTableTitle: 'Reservar mesa online',
      reserveWhatsApp: 'Reservar por WhatsApp',
      reserveWhatsAppTitle: 'Reservar por WhatsApp',
      callToBook: 'Llamar para reservar',
      callTargetTitle: (t) => `Llamar a ${t}`,
      walkInOnly: 'Sin reserva previa',
      call: 'Llamar',
      copy: 'Copiar',
      copied: 'Copiado',
      phoneCopiedTitle: 'Teléfono copiado',
      copyPhoneTitle: (p) => `Copiar ${p}`,
      whatsapp: 'WhatsApp',
      messageWhatsAppTitle: 'Enviar mensaje por WhatsApp',
      saveFavorites: 'Guardar en favoritos',
      savedFavorites: 'Guardado en favoritos',
      share: 'Compartir',
      shareListingTitle: 'Compartir lugar',
      linkCopiedTitle: '¡Enlace copiado!',
      website: 'Sitio web',
      visitWebsiteTitle: 'Visitar web oficial',
      searchOnlineTitle: 'Buscar en Google',
      instagram: 'Instagram',
      openInstagramTitle: 'Abrir Instagram',
      restaurantFallback: 'Restaurante',
      viewSourceReviews: (s) => `Ver reseñas de ${s}`,
      moroccanMateRating: 'Puntuación Moroccan Mate',
      storefrontBannerAlt: (n) => `Fachada de ${n}`,
    },
    features: {
      halalAlcohol: 'Comida Halal · Sirve alcohol',
      halalAlcoholTip:
        'Todas las carnes e ingredientes son 100 % Halal. El local cuenta con licencia y sirve bebidas alcohólicas.',
      halalDry: 'Certificado Halal (Sin alcohol)',
      halalDryTip: 'Cocina estrictamente Halal en un establecimiento 100 % libre de alcohol y cerdo.',
      vegFriendly: 'Apto para vegetarianos',
      vegFriendlyTip:
        'Ofrece tayines vegetarianos, cuscús, ensaladas frescas y especialidades marroquíes vegetales verificadas.',
      freeWifi: 'Wi-Fi gratis',
      ac: 'Aire acondicionado',
      medinaCourtyard: 'Patio en la Medina',
      medinaCourtyardTip:
        'Ubicado dentro del casco histórico peatonal de la Medina con auténtico patio al aire libre.',
      hiddenGem: 'Joya oculta',
      hiddenGemTip: 'Auténtico rincón local querido por los residentes y alejado de las multitudes turísticas.',
      delivery: 'Entrega a domicilio',
      deliveryTip: 'Envío disponible hasta tu riad u hotel mediante Glovo o reparto propio.',
      stepFree: 'Acceso sin escalones',
    },
    nav: {
      worries: 'Dudas clave',
      about: 'Sobre el lugar',
      menu: 'Menú',
      hoursMap: 'Horarios y Mapa',
      faq: 'FAQ',
      reviews: 'Reseñas',
    },
    worries: {
      title: '¡Lo que te preocupa antes de ir!',
      subtitleEat: 'Respuestas honestas a lo que suele preocupar a los comensales — verificado, nunca improvisado.',
      subtitleDefault: 'Respuestas honestas a las dudas más frecuentes — comprobadas y verificadas.',
      notAvailableYet: '(aún no disponible)',
      pendingResearchTitle: 'Verificación pendiente — la respuesta solo aparece tras confirmarla.',
      imagePending: 'Imagen pendiente',
    },
    insiderTip: {
      title: 'Consejo local de experto',
      camelAlt: 'Camello de Moroccan Mate señalando el consejo local',
    },
    soul: {
      title: '¿Es adecuado para ti?',
      bestFor: 'Ideal para',
      idealFit: 'Encaje perfecto',
      bestForFallback: 'Recomendado para cualquier amante de la gastronomía marroquí.',
      aspectRatings: 'Valoración por aspectos',
      fivePointScale: 'Escala de 5 puntos',
      food: 'Comida',
      atmosphere: 'Ambiente',
      service: 'Servicio',
      value: 'Calidad/Precio',
      theGood: 'Lo mejor',
      verifiedProfileFacts: 'Datos verificados',
      theNotSoGood: 'A tener en cuenta',
    },
    about: {
      title: 'Sobre la experiencia',
      knowBeforeYouGo: 'Qué saber antes de ir',
    },
    menu: {
      verifiedMenuPrices: 'Menú y Precios Verificados',
      highlyRecommendedCount: (c) => `★ ${c} Muy recomendados`,
      highlyRecommendedFilterTitle: 'Filtrar platos muy recomendados',
      menuAndPricesTitle: (n) => `Menú y Precios de ${n}`,
      menuIntroPrefix: (c) => `Los ${c} platos listados con precios verificados en dírhams (MAD). Los favoritos están marcados `,
      recommendedCue: '★ Recomendado',
      menuIntroMiddle: '. Pulsa ',
      menuIntroSuffix: ' para armar tu lista de degustación.',
      filterDishesPlaceholder: 'Buscar platos...',
      clearFilter: 'Limpiar filtro',
      fullMenu: 'Menú completo',
      fullMenuTitle: 'Vista de lista completa del menú',
      booklet: 'Libreto',
      bookletTitle: 'Vista clásica de carta impresa',
      imagesCount: (c) => `Imágenes (${c})`,
      imagesTitle: 'Páginas fotografiadas del menú original',
      langLabel: 'Idioma:',
      displayDishInLang: (l) => `Ver platos en ${l}`,
      all: 'Todos',
      recommendedShort: (c) => `★ Recomendados${c > 0 ? ` (${c})` : ''}`,
      vegShort: '🌱 Veg',
      allSections: (c) => `Todas las secciones (${c})`,
      expandAll: 'Expandir todo',
      collapseAll: 'Contraer todo',
      printedMenuPages: (n, c) => `Páginas del menú de ${n} (${c})`,
      tapPageCard: 'Toca cualquier página para ver los precios en alta resolución.',
      pricesInMad: 'Precios en MAD (Dh)',
      pageOf: (p, t) => `Página ${p} / ${t}`,
      pageShort: (p) => `Página ${p}`,
      zoom: 'Ampliar',
      zoomPageAria: (l) => `Ampliar ${l}`,
      itemCount: (c) => `${c} ${c === 1 ? 'plato' : 'platos'}`,
      showMoreParts: (parts, dishes) =>
        `Ver más (${parts} ${parts === 1 ? 'sección más' : 'secciones más'} · ${dishes} platos)`,
      showLess: 'Ver menos',
      noDishesFound: 'No se encontraron platos con ese filtro.',
      resetFilters: 'Restablecer filtros',
      originalMenuCardPhotos: (c) => `Fotos originales de la carta (${c})`,
      openFullGallery: 'Abrir galería →',
      menuPageFallback: (p) => `Página del menú ${p}`,
      digitalMenuPending: 'Menú digital en verificación',
      pendingVerificationDesc:
        'Confirmamos precios reales antes de publicar. Mira fotos de comensales del menú en Google Maps.',
      photosOnGoogleMaps: 'Fotos en Google Maps',
      reservations: 'Reservas',
      closeImageViewer: 'Cerrar visor',
      previousMenuPage: 'Página anterior',
      nextMenuPage: 'Página siguiente',
      indexLabel: 'Índice:',
      highlyRecommendedBadge: '★ Muy recomendado',
      spicy: 'Picante',
      whatIsThis: '¿Qué es?',
      details: 'Detalles',
      less: 'Menos',
      recommendedBadge: '★ Recomendado',
      recommendedTitle: 'Plato muy recomendado por el chef',
      learnAboutTerm: (t) => `Saber más sobre ${t}`,
    },
    logistics: {
      title: 'Logística y Cómo Llegar',
      address: 'Dirección',
      parkingAccess: 'Aparcamiento',
      privateParking: 'Parking privado cercano',
      streetParking: 'En la calle / Acceso a pie',
      typicalWaitTime: 'Tiempo de espera habitual',
      minsSuffix: (m) => `${m} min`,
      bestTimeToVisit: 'Mejor momento para ir',
      seatingStyles: 'Zonas y asientos',
      viewSetting: 'Vistas y entorno',
      nearbyLandmarks: 'Lugares y accesos cercanos',
      walkingDistance: 'Distancia a pie a puntos clave',
      walkDriveTimes: 'Tiempo a pie y en coche',
      realGpsProximity: 'Proximidad GPS real',
      minWalk: (m) => `${m} min a pie`,
      minDrive: (m) => `${m} min en coche`,
      minWalkShort: (m) => `${m}m a pie`,
      minDriveShort: (m) => `${m}m coche`,
      interactiveRadiusGraph: 'Mapa de radio interactivo',
      northLetter: 'N',
      perPersonSuffix: '/ pers.',
      avgPersonApprox: (mad) => `~${mad} MAD / pers.`,
      menuDishesLabel: 'Platos en carta:',
      operationalTitle: 'Detalles operativos',
      averageMealCost: 'Costo medio por comida',
      beveragePolicy: 'Política de bebidas',
      servesAlcohol: 'Con licencia (sirve alcohol)',
      dryDining: 'Sin alcohol (local sin bebidas alcohólicas)',
      serviceHours: 'Horario de servicio',
      ramadanService: 'Servicio en Ramadán',
      ramadanFtour: 'Abre para el buffet de Ftour',
      ramadanLunch: 'Sirve almuerzos a visitantes',
      ramadanEvening: 'Solo servicio nocturno',
      languagesSpoken: 'Idiomas hablados',
      wifiAccess: 'Acceso Wi-Fi',
      complimentary: 'Gratuito',
      none: 'No disponible',
      airConditioning: 'Aire acondicionado',
      equippedAc: 'Con aire acondicionado',
      naturalBreeze: 'Brisa natural en patio',
      accessibility: 'Accesibilidad',
      wheelchairAccessible: 'Accesible en silla de ruedas',
      stepAccess: 'Entrada con escalones',
      acceptedPayments: 'Pagos aceptados',
      phoneBooking: 'Teléfono / Reservas',
      noListingSelected: 'Ningún lugar seleccionado.',
      goBack: 'Volver',
    },
    faq: {
      headingForPlace: (name) => `Preguntas frecuentes sobre ${name}`,
      eatSubtitle: 'Respuestas verificadas sobre precios en MAD, política halal, reservas y horarios',
      defaultSubtitle: 'Respuestas rápidas verificadas sobre tarifas, normas y logística local',
      expandAll: (c) => `Expandir todo (${c})`,
      collapseAll: 'Contraer todo',
    },
    reviews: {
      headingForPlace: (name) => `Reseñas de ${name}`,
      headingGeneric: 'Reseñas',
      filterFromSource: (s) => `Filtrar reseñas de ${s}`,
      totalPrefix: 'Total ·',
      reviewsWord: 'reseñas',
      ratingBreakdown: 'Desglose de notas',
      featuredReviews: (c) => `${c} reseñas destacadas`,
      mostMentionedTopics: 'Temas más mencionados',
      clearTopic: 'Quitar tema',
      all: (c) => `Todas (${c})`,
      good: (c) => `Buenas (${c})`,
      bad: (c) => `Críticas (${c})`,
      reset: 'Restablecer',
      pauseFlow: 'Pausar flujo',
      resumeFlow: 'Reanudar flujo',
      pauseFlowTitle: 'Pausar desplazamiento de reseñas',
      resumeFlowTitle: 'Reanudar desplazamiento de reseñas',
      scrollUp: 'Subir',
      scrollDown: 'Bajar',
      noReviewsMatch: 'Ninguna reseña coincide con los filtros.',
      showAllReviews: 'Mostrar todas las reseñas',
      seeAllReviewsOn: (s) => `Ver todas las reseñas en ${s}`,
      expandText: 'Leer completo',
      showLess: 'Ver menos',
      source: 'Fuente',
      womanReviewer: 'Reseña de mujer',
      manReviewer: 'Reseña de hombre',
      viewOriginalReview: (s) => `Ver reseña original en ${s}`,
    },
    peers: {
      kicker: 'Ambiente y Cocina Similares',
      heading: (c) => `Restaurantes recomendados en ${c}`,
    },
    menuModal: {
      menuTitle: (n) => `Menú de ${n}`,
      officialSelection: 'Selección oficial',
      verifiedDinerPhotos: 'Fotos y menús verificados',
      verifiedDinerPhotosDesc:
        'Las cartas completas fotografiadas y sugerencias diarias son verificadas directamente en Google Maps.',
      seePhotosOnMaps: 'Ver fotos y carta en Maps',
    },
    play: {
      passport: 'Pasaporte',
      openPassportAria: 'Abrir Pasaporte Moroccan Mate',
      travelerPassport: 'Pasaporte de Viajero',
      placesStamped: (c) => `${c} ${c === 1 ? 'lugar sellado' : 'lugares sellados'} en Marruecos`,
      collectStamps: 'Colecciona sellos zellige mientras exploras',
      openLabel: 'Abrir',
      previous: 'Anterior',
      nextGem: 'Siguiente',
      ofTotal: (i, t) => `${i} de ${t}`,
      swipeOrAlt: 'Desliza o Alt + ← / →',
      quickPeekAria: (n) => `Vista rápida de ${n}`,
      medinaCompass: 'Brújula Medina',
      whereNextIn: (c) => `¿Dónde ir ahora en ${c}?`,
      compassDesc: 'Gira la brújula para descubrir otro rincón cercano: comer, dormir o explorar.',
      spinCompass: 'Girar brújula',
      spinCompassAria: (c) => `Girar la brújula para descubrir otro lugar en ${c}`,
      tabAll: 'Sorpréndeme',
      tabFood: 'Comer',
      tabSleep: 'Dormir',
      tabThings: 'Hacer',
      tabShopping: 'Compras',
      quickPeekBtn: 'Vista rápida',
      goThere: 'Ir allí',
      highlights: 'Destacados',
      insiderTip: 'Consejo local',
      saved: 'Guardado',
      save: 'Guardar',
      nextSpin: 'Otro giro',
      openFullGuide: 'Abrir guía completa',
      stamped: 'Sellado',
      closeQuickPeek: 'Cerrar vista rápida',
      openMapsTitle: 'Abrir en Google Maps',
      peekStay: (c) => `Explorar alojamiento en ${c}`,
      peekActivity: (c) => `Explorar actividad en ${c}`,
      peekShop: (c) => `Explorar tienda en ${c}`,
      catFood: 'Comer y Beber',
      catSleep: 'Dónde dormir',
      catShopping: 'Compras artesanales',
      catThings: 'Qué hacer',
      reasonHiddenGem: 'Joya oculta',
      reasonLocalFavorite: 'Favorito local',
      reasonSpecialTreat: 'Capricho especial',
      reasonVerifiedPick: 'Selección verificada',
      reasonTopRated: 'Mejor valorado',
      reasonCityDiscovery: 'Descubrimiento local',
    },
  },
  de: {
    hero: {
      morocco: 'Marokko',
      cuisineLabel: (cuisine) => `${cuisine}-Küche`,
      foodChipLabel: (cuisine) => `${cuisine}-Küche`,
      weeklySchedule: 'Wochenöffnungszeiten',
      openNow: 'Jetzt geöffnet',
      closed: 'Geschlossen',
      today: 'Heute',
      clickScheduleTitle: 'Klicken für Wochenöffnungszeiten',
      reviewsWord: 'Bewertungen',
      topRated: 'Top bewertet',
      showLess: 'Weniger zeigen',
      plusMore: (n) => `+${n} mehr`,
      servedFor: 'Geeignet für',
      getDirections: 'Route planen',
      bookTable: 'Tisch reservieren',
      bookTableTitle: 'Tisch online reservieren',
      reserveWhatsApp: 'Per WhatsApp reservieren',
      reserveWhatsAppTitle: 'Per WhatsApp reservieren',
      callToBook: 'Anrufen & reservieren',
      callTargetTitle: (t) => `${t} anrufen`,
      walkInOnly: 'Ohne Reservierung',
      call: 'Anrufen',
      copy: 'Kopieren',
      copied: 'Kopiert',
      phoneCopiedTitle: 'Nummer kopiert',
      copyPhoneTitle: (p) => `${p} kopieren`,
      whatsapp: 'WhatsApp',
      messageWhatsAppTitle: 'Per WhatsApp schreiben',
      saveFavorites: 'Speichern',
      savedFavorites: 'Gespeichert',
      share: 'Teilen',
      shareListingTitle: 'Eintrag teilen',
      linkCopiedTitle: 'Link kopiert!',
      website: 'Website',
      visitWebsiteTitle: 'Offizielle Website besuchen',
      searchOnlineTitle: 'Online suchen',
      instagram: 'Instagram',
      openInstagramTitle: 'Instagram öffnen',
      restaurantFallback: 'Restaurant',
      viewSourceReviews: (s) => `${s}-Bewertungen ansehen`,
      moroccanMateRating: 'Moroccan-Mate-Bewertung',
      storefrontBannerAlt: (n) => `${n} Eingangsschild`,
    },
    features: {
      halalAlcohol: 'Halal-Küche · Alkohol serviert',
      halalAlcoholTip:
        'Alle Fleischgerichte und Zutaten sind 100 % Halal. Das Lokal besitzt eine Alkohollizenz.',
      halalDry: 'Halal-zertifiziert (Alkoholfrei)',
      halalDryTip: 'Streng Halal-zertifizierte Küche in einem 100 % alkohol- und schweinefleischfreien Lokal.',
      vegFriendly: 'Vegetarierfreundlich',
      vegFriendlyTip:
        'Bietet geprüfte vegetarische Tajines, Couscous, frische Salate und pflanzliche marokkanische Gerichte.',
      freeWifi: 'Gratis WLAN',
      ac: 'Klimaanlage',
      medinaCourtyard: 'Medina-Innenhof',
      medinaCourtyardTip:
        'Gelegen im historischen Fußgängerviertel der Medina mit authentischem offenem Innenhof.',
      hiddenGem: 'Geheimtipp',
      hiddenGemTip: 'Authentischer Geheimtipp der Einheimischen abseits der Touristenmassen.',
      delivery: 'Lieferservice',
      deliveryTip: 'Lokale Lieferung ins Riad oder Hotel über Glovo oder eigenen Kurier verfügbar.',
      stepFree: 'Stufenloser Zugang',
    },
    nav: {
      worries: 'Wichtige Fragen',
      about: 'Über das Lokal',
      menu: 'Speisekarte',
      hoursMap: 'Zeiten & Karte',
      faq: 'FAQ',
      reviews: 'Bewertungen',
    },
    worries: {
      title: 'Was Reisende vor dem Besuch wissen wollen!',
      subtitleEat: 'Ehrliche Antworten auf typische Fragen von Gästen — geprüft und verifiziert, nie geraten.',
      subtitleDefault: 'Ehrliche Antworten auf häufige Bedenken von Reisenden — vor Ort verifiziert.',
      notAvailableYet: '(noch nicht verfügbar)',
      pendingResearchTitle: 'Recherche läuft — diese Antwort erscheint erst nach Verifizierung.',
      imagePending: 'Bild folgt',
    },
    insiderTip: {
      title: 'Lokaler Insidertipp',
      camelAlt: 'Moroccan-Mate-Kamel zeigt auf den lokalen Insidertipp',
    },
    soul: {
      title: 'Passt es zu dir?',
      bestFor: 'Ideal für',
      idealFit: 'Beste Wahl',
      bestForFallback: 'Empfohlen für alle Liebhaber der marokkanischen Küche.',
      aspectRatings: 'Detailbewertungen',
      fivePointScale: '5-Punkte-Skala',
      food: 'Essen',
      atmosphere: 'Ambiente',
      service: 'Service',
      value: 'Preis-Leistung',
      theGood: 'Stärken',
      verifiedProfileFacts: 'Geprüfte Fakten',
      theNotSoGood: 'Zu beachten',
    },
    about: {
      title: 'Über das Erlebnis',
      knowBeforeYouGo: 'Gut zu wissen vor dem Besuch',
    },
    menu: {
      verifiedMenuPrices: 'Geprüfte Speisekarte & Preise',
      highlyRecommendedCount: (c) => `★ ${c} Empfehlungen`,
      highlyRecommendedFilterTitle: 'Nach besonders empfohlenen Gerichten filtern',
      menuAndPricesTitle: (n) => `${n} Speisekarte & Preise`,
      menuIntroPrefix: (c) => `Alle ${c} Gerichte mit geprüften Preisen in Dirham (MAD). Haus-Favoriten sind mit `,
      recommendedCue: '★ Empfohlen',
      menuIntroMiddle: ' markiert. Tippe auf ',
      menuIntroSuffix: ' für deine Merkliste.',
      filterDishesPlaceholder: 'Gerichte suchen...',
      clearFilter: 'Filter löschen',
      fullMenu: 'Vollansicht',
      fullMenuTitle: 'Komplette ausklappbare Speisekartenliste',
      booklet: 'Menüheft',
      bookletTitle: 'Klassische gedruckte Menüheft-Ansicht',
      imagesCount: (c) => `Fotos (${c})`,
      imagesTitle: 'Fotografierte Seiten der Original-Speisekarte',
      langLabel: 'Sprache:',
      displayDishInLang: (l) => `Gerichte auf ${l} anzeigen`,
      all: 'Alle',
      recommendedShort: (c) => `★ Empfohlen${c > 0 ? ` (${c})` : ''}`,
      vegShort: '🌱 Veg',
      allSections: (c) => `Alle Kategorien (${c})`,
      expandAll: 'Alle öffnen',
      collapseAll: 'Alle schließen',
      printedMenuPages: (n, c) => `Gedruckte Speisekarten-Seiten von ${n} (${c})`,
      tapPageCard: 'Tippe auf eine Seite, um Preise in voller Auflösung zu prüfen.',
      pricesInMad: 'Preise in MAD (Dh)',
      pageOf: (p, t) => `Seite ${p} / ${t}`,
      pageShort: (p) => `Seite ${p}`,
      zoom: 'Vergrößern',
      zoomPageAria: (l) => `${l} vergrößern`,
      itemCount: (c) => `${c} ${c === 1 ? 'Gericht' : 'Gerichte'}`,
      showMoreParts: (parts, dishes) =>
        `Mehr anzeigen (+${parts} ${parts === 1 ? 'Abschnitt' : 'Abschnitte'} · ${dishes} Gerichte)`,
      showLess: 'Weniger anzeigen',
      noDishesFound: 'Keine passenden Gerichte gefunden.',
      resetFilters: 'Filter zurücksetzen',
      originalMenuCardPhotos: (c) => `Originalfotos der Speisekarte (${c})`,
      openFullGallery: 'Galerie öffnen →',
      menuPageFallback: (p) => `Menüseite ${p}`,
      digitalMenuPending: 'Digitale Karte in Prüfung',
      pendingVerificationDesc:
        'Wir prüfen Live-Preise vor der Veröffentlichung. Fotos der Karte gibt es auf Google Maps.',
      photosOnGoogleMaps: 'Fotos auf Google Maps',
      reservations: 'Reservierungen',
      closeImageViewer: 'Bildansicht schließen',
      previousMenuPage: 'Vorherige Seite',
      nextMenuPage: 'Nächste Seite',
      indexLabel: 'Index:',
      highlyRecommendedBadge: '★ Sehr empfohlen',
      spicy: 'Scharf',
      whatIsThis: 'Was ist das?',
      details: 'Details',
      less: 'Weniger',
      recommendedBadge: '★ Empfohlen',
      recommendedTitle: 'Vom Küchenchef empfohlenes Gericht',
      learnAboutTerm: (t) => `Mehr über ${t} erfahren`,
    },
    logistics: {
      title: 'Anfahrt & Logistik',
      address: 'Adresse',
      parkingAccess: 'Parken',
      privateParking: 'Privater Parkplatz in der Nähe',
      streetParking: 'Straßenparkplätze / Zu Fuß',
      typicalWaitTime: 'Übliche Wartezeit',
      minsSuffix: (m) => `${m} Min.`,
      bestTimeToVisit: 'Beste Besuchszeit',
      seatingStyles: 'Sitzbereiche',
      viewSetting: 'Ausblick & Lage',
      nearbyLandmarks: 'Sehenswürdigkeiten & Anfahrt',
      walkingDistance: 'Fußweg zu Sehenswürdigkeiten',
      walkDriveTimes: 'Geh- & Fahrzeiten',
      realGpsProximity: 'Echte GPS-Entfernung',
      minWalk: (m) => `${m} Min. zu Fuß`,
      minDrive: (m) => `${m} Min. Fahrt`,
      minWalkShort: (m) => `${m}m Fuß`,
      minDriveShort: (m) => `${m}m Fahrt`,
      interactiveRadiusGraph: 'Interaktive Umgebungskarte',
      northLetter: 'N',
      perPersonSuffix: '/ Person',
      avgPersonApprox: (mad) => `~${mad} MAD / Person`,
      menuDishesLabel: 'Speisen auf der Karte:',
      operationalTitle: 'Praktische Details',
      averageMealCost: 'Durchschnittspreis pro Mahlzeit',
      beveragePolicy: 'Getränke & Alkohol',
      servesAlcohol: 'Lizenziert (serviert Alkohol)',
      dryDining: 'Alkoholfrei (ohne Alkohol)',
      serviceHours: 'Servicezeiten',
      ramadanService: 'Ramadan-Service',
      ramadanFtour: 'Öffnet für Ftour-Buffet',
      ramadanLunch: 'Mittagsservice für Besucher',
      ramadanEvening: 'Nur Abendservice',
      languagesSpoken: 'Gesprochene Sprachen',
      wifiAccess: 'WLAN',
      complimentary: 'Kostenlos',
      none: 'Nicht verfügbar',
      airConditioning: 'Klimaanlage',
      equippedAc: 'Mit Klimaanlage',
      naturalBreeze: 'Natürliche Belüftung / Innenhof',
      accessibility: 'Barrierefreiheit',
      wheelchairAccessible: 'Rollstuhlgerecht',
      stepAccess: 'Eingang mit Stufen',
      acceptedPayments: 'Zahlungsmittel',
      phoneBooking: 'Telefon / Reservierung',
      noListingSelected: 'Kein Eintrag ausgewählt.',
      goBack: 'Zurück',
    },
    faq: {
      headingForPlace: (name) => `Häufige Fragen zu ${name}`,
      eatSubtitle: 'Geprüfte Antworten zu Preisen in MAD, Halal & Getränken, Reservierung und Zeiten',
      defaultSubtitle: 'Schnelle Antworten aus Hausregeln, Speisekarte und lokaler Logistik',
      expandAll: (c) => `Alle öffnen (${c})`,
      collapseAll: 'Alle schließen',
    },
    reviews: {
      headingForPlace: (name) => `Bewertungen zu ${name}`,
      headingGeneric: 'Bewertungen',
      filterFromSource: (s) => `Bewertungen von ${s} filtern`,
      totalPrefix: 'Gesamt ·',
      reviewsWord: 'Bewertungen',
      ratingBreakdown: 'Bewertungsverteilung',
      featuredReviews: (c) => `${c} ausgewählte Bewertungen`,
      mostMentionedTopics: 'Meistgenannte Themen',
      clearTopic: 'Thema zurücksetzen',
      all: (c) => `Alle (${c})`,
      good: (c) => `Positiv (${c})`,
      bad: (c) => `Kritisch (${c})`,
      reset: 'Zurücksetzen',
      pauseFlow: 'Fluss pausieren',
      resumeFlow: 'Fluss fortsetzen',
      pauseFlowTitle: 'Laufende Bewertungen pausieren',
      resumeFlowTitle: 'Laufende Bewertungen fortsetzen',
      scrollUp: 'Nach oben',
      scrollDown: 'Nach unten',
      noReviewsMatch: 'Keine Bewertungen passen zu diesem Filter.',
      showAllReviews: 'Alle Bewertungen zeigen',
      seeAllReviewsOn: (s) => `Alle Bewertungen auf ${s} ansehen`,
      expandText: 'Mehr lesen',
      showLess: 'Weniger zeigen',
      source: 'Quelle',
      womanReviewer: 'Rezensentin',
      manReviewer: 'Rezensent',
      viewOriginalReview: (s) => `Originalbewertung auf ${s} öffnen`,
    },
    peers: {
      kicker: 'Ähnliche Atmosphäre & Küche',
      heading: (c) => `Empfohlene Restaurants in ${c}`,
    },
    menuModal: {
      menuTitle: (n) => `${n} Speisekarte`,
      officialSelection: 'Offizielle Auswahl',
      verifiedDinerPhotos: 'Geprüfte Gästefotos & Karten',
      verifiedDinerPhotosDesc:
        'Vollständige fotografierte Speisekarten und Tagesgerichte werden direkt auf Google Maps bestätigt.',
      seePhotosOnMaps: 'Fotos & Karte auf Maps öffnen',
    },
    play: {
      passport: 'Reisepass',
      openPassportAria: 'Moroccan-Mate-Reisepass öffnen',
      travelerPassport: 'Reise-Passport',
      placesStamped: (c) => `${c} ${c === 1 ? 'Ort' : 'Orte'} in Marokko abgestempelt`,
      collectStamps: 'Sammle beim Entdecken Zellige-Stempel',
      openLabel: 'Öffnen',
      previous: 'Vorheriger',
      nextGem: 'Nächster Tipp',
      ofTotal: (i, t) => `${i} von ${t}`,
      swipeOrAlt: 'Wischen oder Alt + ← / →',
      quickPeekAria: (n) => `Kurzansicht von ${n}`,
      medinaCompass: 'Medina-Kompass',
      whereNextIn: (c) => `Wohin als Nächstes in ${c}?`,
      compassDesc: 'Drehe den Kompass für einen neuen Tipp in der Nähe — Essen, Übernachten oder Shoppen.',
      spinCompass: 'Kompass drehen',
      spinCompassAria: (c) => `Kompass für einen neuen Tipp in ${c} drehen`,
      tabAll: 'Überrasch mich',
      tabFood: 'Essen',
      tabSleep: 'Übernachten',
      tabThings: 'Aktivitäten',
      tabShopping: 'Shopping',
      quickPeekBtn: 'Kurzansicht',
      goThere: 'Entdecken',
      highlights: 'Highlights',
      insiderTip: 'Insidertipp',
      saved: 'Gespeichert',
      save: 'Speichern',
      nextSpin: 'Nächster Dreh',
      openFullGuide: 'Vollständigen Guide öffnen',
      stamped: 'Abgestempelt',
      closeQuickPeek: 'Kurzansicht schließen',
      openMapsTitle: 'In Google Maps öffnen',
      peekStay: (c) => `Unterkunft in ${c} ansehen`,
      peekActivity: (c) => `Aktivität in ${c} ansehen`,
      peekShop: (c) => `Laden in ${c} ansehen`,
      catFood: 'Essen & Trinken',
      catSleep: 'Unterkünfte',
      catShopping: 'Handwerk & Shopping',
      catThings: 'Aktivitäten',
      reasonHiddenGem: 'Geheimtipp',
      reasonLocalFavorite: 'Lokaler Favorit',
      reasonSpecialTreat: 'Besonderes Erlebnis',
      reasonVerifiedPick: 'Geprüfte Wahl',
      reasonTopRated: 'Top bewertet',
      reasonCityDiscovery: 'Stadt-Entdeckung',
    },
  },
  ar: {
    hero: {
      morocco: 'المغرب',
      cuisineLabel: (cuisine) =>
        cuisine === 'مأكولات بحرية' || cuisine === 'أكل الشارع' || cuisine === 'وجبات سريعة'
          ? cuisine
          : `مطبخ ${cuisine}`,
      foodChipLabel: (cuisine) =>
        cuisine === 'مأكولات بحرية' || cuisine === 'أكل الشارع' || cuisine === 'وجبات سريعة'
          ? cuisine
          : `مطبخ ${cuisine}`,
      weeklySchedule: 'أوقات العمل الأسبوعية',
      openNow: 'مفتوح الآن',
      closed: 'مغلق',
      today: 'اليوم',
      clickScheduleTitle: 'اضغط لعرض جدول الأسبوع',
      reviewsWord: 'تقييم',
      topRated: 'الأعلى تقييماً',
      showLess: 'عرض أقل',
      plusMore: (n) => `+${n} المزيد`,
      servedFor: 'مناسب لـ',
      getDirections: 'الاتجاهات',
      bookTable: 'حجز طاولة',
      bookTableTitle: 'حجز طاولة عبر الإنترنت',
      reserveWhatsApp: 'الحجز عبر واتساب',
      reserveWhatsAppTitle: 'الحجز عبر واتساب',
      callToBook: 'اتصل للحجز',
      callTargetTitle: (t) => `اتصل بـ ${t}`,
      walkInOnly: 'بدون حجز مسبق',
      call: 'اتصال',
      copy: 'نسخ',
      copied: 'تم النسخ',
      phoneCopiedTitle: 'تم نسخ رقم الهاتف',
      copyPhoneTitle: (p) => `نسخ ${p}`,
      whatsapp: 'واتساب',
      messageWhatsAppTitle: 'مراسلة عبر واتساب',
      saveFavorites: 'حفظ في المفضلة',
      savedFavorites: 'محفوظ في المفضلة',
      share: 'مشاركة',
      shareListingTitle: 'مشاركة المكان',
      linkCopiedTitle: 'تم نسخ الرابط!',
      website: 'الموقع',
      visitWebsiteTitle: 'زيارة الموقع الرسمي',
      searchOnlineTitle: 'بحث عبر الإنترنت',
      instagram: 'إنستغرام',
      openInstagramTitle: 'فتح إنستغرام',
      restaurantFallback: 'مطعم',
      viewSourceReviews: (s) => `عرض تقييمات ${s}`,
      moroccanMateRating: 'تقييم Moroccan Mate',
      storefrontBannerAlt: (n) => `واجهة ${n}`,
    },
    features: {
      halalAlcohol: 'طعام حلال · يقدم مشروبات كحولية',
      halalAlcoholTip: 'جميع اللحوم والمكونات حلال 100٪، مع ترخيص لتقديم المشروبات الكحولية.',
      halalDry: 'حلال معتمد (خالي من الكحول)',
      halalDryTip: 'مطبخ حلال بالكامل في مكان خالٍ تماماً من الكحول ولحم الخنزير.',
      vegFriendly: 'مناسب للنباتيين',
      vegFriendlyTip: 'يوفر طواجن نباتية وكسكس وسلطات طازجة وخيارات نباتية موثوقة.',
      freeWifi: 'واي فاي مجاني',
      ac: 'تكييف هواء',
      medinaCourtyard: 'فناء بالمدينة العتيقة',
      medinaCourtyardTip: 'يقع داخل أزقة المدينة العتيقة للمشاة مع فناء مغربي أصيل.',
      hiddenGem: 'جوهرة خفية',
      hiddenGemTip: 'مكان محلي أصيل يفضله السكان المحليون بعيداً عن الازدحام السياحي.',
      delivery: 'خدمة التوصيل متاحة',
      deliveryTip: 'توصيل محلي متاح إلى مقر إقامتك أو الفندق عبر التطبيقات أو مباشرة.',
      stepFree: 'مدخل بدون درجات',
    },
    nav: {
      worries: 'تساؤلات مهمة',
      about: 'حول المكان',
      menu: 'القائمة',
      hoursMap: 'الأوقات والخريطة',
      faq: 'الأسئلة الشائعة',
      reviews: 'التقييمات',
    },
    worries: {
      title: 'أبرز التساؤلات قبل زيارتك!',
      subtitleEat: 'إجابات صريحة حول ما يشغل بال الزوار في المطاعم — موثقة ومجربة وليست مجرد تخمين.',
      subtitleDefault: 'إجابات صريحة لأبرز تساؤلات المسافرين — مؤكدة وموثقة من الواقع.',
      notAvailableYet: '(غير متاح حالياً)',
      pendingResearchTitle: 'التحقق قيد الإعداد — ستظهر الإجابة بعد التوثيق.',
      imagePending: 'الصورة قريباً',
    },
    insiderTip: {
      title: 'نصيحة محلية خالصة',
      camelAlt: 'شعار الجمل يشير إلى النصيحة المحلية',
    },
    soul: {
      title: 'هل يناسبك هذا المكان؟',
      bestFor: 'مناسب أكثر لـ',
      idealFit: 'الاختيار الأمثل',
      bestForFallback: 'مناسب لجميع عشاق المذاق المغربي الأصيل.',
      aspectRatings: 'تقييم التفاصيل',
      fivePointScale: 'من 5 نقاط',
      food: 'الطعام',
      atmosphere: 'الأجواء',
      service: 'الخدمة',
      value: 'القيمة مقابل السعر',
      theGood: 'نقاط القوة',
      verifiedProfileFacts: 'معلومات موثقة',
      theNotSoGood: 'نقاط تستحق الانتباه',
    },
    about: {
      title: 'حول التجربة',
      knowBeforeYouGo: 'معلومات مفيدة قبل الزيارة',
    },
    menu: {
      verifiedMenuPrices: 'القائمة والأسعار الموثقة',
      highlyRecommendedCount: (c) => `★ ${c} أطباق موصى بها بشدة`,
      highlyRecommendedFilterTitle: 'تصفية الأطباق الموصى بها بشدة',
      menuAndPricesTitle: (n) => `قائمة وأسعار ${n}`,
      menuIntroPrefix: (c) => `جميع الأطباق (${c}) معروضة بالأسعار المؤكدة بالدرهم المغربي. الأطباق المميزة تحمل علامة `,
      recommendedCue: '★ موصى به',
      menuIntroMiddle: '. اضغط على ',
      menuIntroSuffix: ' لإضافة الطبق إلى قائمتك.',
      filterDishesPlaceholder: 'ابحث في الأطباق...',
      clearFilter: 'مسح البحث',
      fullMenu: 'القائمة الكاملة',
      fullMenuTitle: 'عرض القائمة كاملة بالتفصيل',
      booklet: 'الكتيب',
      bookletTitle: 'عرض القائمة على شكل كتيب كلاسيكي',
      imagesCount: (c) => `الصور (${c})`,
      imagesTitle: 'صور صفحات القائمة الأصلية',
      langLabel: 'اللغة:',
      displayDishInLang: (l) => `عرض وصف الأطباق باللغة: ${l}`,
      all: 'الكل',
      recommendedShort: (c) => `★ الموصى بها${c > 0 ? ` (${c})` : ''}`,
      vegShort: '🌱 نباتي',
      allSections: (c) => `جميع الأقسام (${c})`,
      expandAll: 'فتح الكل',
      collapseAll: 'طي الكل',
      printedMenuPages: (n, c) => `صفحات قائمة ${n} المصورة (${c})`,
      tapPageCard: 'اضغط على أي صفحة لمعاينة الأطباق والأسعار بدقة عالية.',
      pricesInMad: 'الأسعار بالدرهم (DH)',
      pageOf: (p, t) => `صفحة ${p} / ${t}`,
      pageShort: (p) => `صفحة ${p}`,
      zoom: 'تكبير',
      zoomPageAria: (l) => `تكبير ${l}`,
      itemCount: (c) => `${c} ${c === 1 ? 'طبق' : 'أطباق'}`,
      showMoreParts: (parts, dishes) => `عرض المزيد (+${parts} أقسام · ${dishes} طبقاً)`,
      showLess: 'عرض أقل',
      noDishesFound: 'لا توجد أطباق تطابق بحثك الحالي.',
      resetFilters: 'إعادة ضبط الفلاتر',
      originalMenuCardPhotos: (c) => `صور بطاقة القائمة الأصلية (${c})`,
      openFullGallery: 'عرض المعرض الكامل ←',
      menuPageFallback: (p) => `صفحة القائمة ${p}`,
      digitalMenuPending: 'القائمة الرقمية قيد التوثيق',
      pendingVerificationDesc:
        'نتحقق من الأسعار الفعلية قبل النشر. يمكنك الاطلاع على صور الزوار للقائمة على خرائط جوجل.',
      photosOnGoogleMaps: 'الصور على خرائط جوجل',
      reservations: 'الحجوزات',
      closeImageViewer: 'إغلاق العارض',
      previousMenuPage: 'الصفحة السابقة',
      nextMenuPage: 'الصفحة التالية',
      indexLabel: 'الفهرس:',
      highlyRecommendedBadge: '★ موصى به بشدة',
      spicy: 'حار',
      whatIsThis: 'ما هذا الطبق؟',
      details: 'التفاصيل',
      less: 'أقل',
      recommendedBadge: '★ موصى به',
      recommendedTitle: 'طبق مميز يوصي به الشيف',
      learnAboutTerm: (t) => `تعرّف على ${t}`,
    },
    logistics: {
      title: 'الموقع والوصول واللوجستيات',
      address: 'العنوان',
      parkingAccess: 'موقف السيارات',
      privateParking: 'موقف خاص قريب',
      streetParking: 'ركن في الشارع / وصول مشياً',
      typicalWaitTime: 'مدة الانتظار المعتادة',
      minsSuffix: (m) => `${m} دقيقة`,
      bestTimeToVisit: 'أفضل وقت للزيارة',
      seatingStyles: 'أماكن الجلوس',
      viewSetting: 'الإطلالة والمحيط',
      nearbyLandmarks: 'المعالم القريبة والوصول',
      walkingDistance: 'المسافة مشياً للمعالم القريبة',
      walkDriveTimes: 'أوقات المشي والقيادة',
      realGpsProximity: 'مسافات GPS حقيقية',
      minWalk: (m) => `${m} د مشياً`,
      minDrive: (m) => `${m} د بالسيارة`,
      minWalkShort: (m) => `${m}د مشياً`,
      minDriveShort: (m) => `${m}د سيارة`,
      interactiveRadiusGraph: 'خريطة المسافات التفاعلية',
      northLetter: 'ش',
      perPersonSuffix: '/ شخص',
      avgPersonApprox: (mad) => `~${mad} درهم / شخص`,
      menuDishesLabel: 'أسعار الأطباق:',
      operationalTitle: 'تفاصيل التشغيل والخدمة',
      averageMealCost: 'متوسط تكلفة الوجبة',
      beveragePolicy: 'سياسة المشروبات',
      servesAlcohol: 'مرخص (يقدم مشروبات كحولية)',
      dryDining: 'خالي من الكحول',
      serviceHours: 'ساعات الخدمة',
      ramadanService: 'الخدمة في رمضان',
      ramadanFtour: 'يفتح لبوفيه الإفطار',
      ramadanLunch: 'يقدم الغداء للزوار',
      ramadanEvening: 'خدمة مسائية فقط',
      languagesSpoken: 'اللغات المتداولة',
      wifiAccess: 'الواي فاي',
      complimentary: 'مجاني',
      none: 'غير متوفر',
      airConditioning: 'التكييف',
      equippedAc: 'مجهز بمكيف هواء',
      naturalBreeze: 'تهوية طبيعية / فناء مفتوح',
      accessibility: 'سهولة الوصول',
      wheelchairAccessible: 'مناسب للكراسي المتحركة',
      stepAccess: 'مدخل بدرجات',
      acceptedPayments: 'طرق الدفع المقبولة',
      phoneBooking: 'الهاتف / الحجز',
      noListingSelected: 'لم يتم اختيار أي مكان.',
      goBack: 'رجوع',
    },
    faq: {
      headingForPlace: (name) => `الأسئلة الشائعة حول ${name}`,
      eatSubtitle: 'إجابات موثقة حول الأسعار بالدرهم، الحلال والمشروبات، الحجز وأوقات العمل',
      defaultSubtitle: 'إجابات سريعة موثقة حول السياسات والأسعار والتفاصيل المحلية',
      expandAll: (c) => `عرض الكل (${c})`,
      collapseAll: 'طي الكل',
    },
    reviews: {
      headingForPlace: (name) => `تقييمات ${name}`,
      headingGeneric: 'التقييمات',
      filterFromSource: (s) => `تصفية تقييمات ${s}`,
      totalPrefix: 'الإجمالي ·',
      reviewsWord: 'تقييم',
      ratingBreakdown: 'توزيع التقييمات',
      featuredReviews: (c) => `${c} تقييمات مختارة`,
      mostMentionedTopics: 'أكثر المواضيع ذكراً',
      clearTopic: 'إلغاء التصفية',
      all: (c) => `الكل (${c})`,
      good: (c) => `إيجابي (${c})`,
      bad: (c) => `انتقادات (${c})`,
      reset: 'إعادة ضبط',
      pauseFlow: 'إيقاف التمرير',
      resumeFlow: 'استئناف التمرير',
      pauseFlowTitle: 'إيقاف تدفق التقييمات مؤقتاً',
      resumeFlowTitle: 'استئناف تدفق التقييمات',
      scrollUp: 'تمرير للأعلى',
      scrollDown: 'تمرير للأسفل',
      noReviewsMatch: 'لا توجد تقييمات تطابق الفلاتر المحددة.',
      showAllReviews: 'عرض جميع التقييمات',
      seeAllReviewsOn: (s) => `عرض كل التقييمات على ${s}`,
      expandText: 'قراءة المزيد',
      showLess: 'عرض أقل',
      source: 'المصدر',
      womanReviewer: 'تقييم زائرة',
      manReviewer: 'تقييم زائر',
      viewOriginalReview: (s) => `عرض التقييم الأصلي على ${s}`,
    },
    peers: {
      kicker: 'أجواء ومذاق مشابه',
      heading: (c) => `مطاعم مقترحة في ${c}`,
    },
    menuModal: {
      menuTitle: (n) => `قائمة ${n}`,
      officialSelection: 'الاختيار الرسمي',
      verifiedDinerPhotos: 'صور وقوائم موثقة من الزوار',
      verifiedDinerPhotosDesc: 'القوائم المصورة الكاملة والأطباق اليومية موثقة مباشرة على خرائط جوجل.',
      seePhotosOnMaps: 'مشاهدة الصور والقائمة على الخرائط',
    },
    play: {
      passport: 'جواز السفر',
      openPassportAria: 'فتح جواز سفر Moroccan Mate',
      travelerPassport: 'جواز سفر المسافر',
      placesStamped: (c) => `${c} ${c === 1 ? 'مكان مختوم' : 'أماكن مختومة'} في المغرب`,
      collectStamps: 'اجمع أختام الزليج أثناء استكشافك',
      openLabel: 'فتح',
      previous: 'السابق',
      nextGem: 'التالي',
      ofTotal: (i, t) => `${i} من ${t}`,
      swipeOrAlt: 'اسحب أو Alt + ← / →',
      quickPeekAria: (n) => `معاينة سريعة لـ ${n}`,
      medinaCompass: 'بوصلة المدينة',
      whereNextIn: (c) => `إلى أين بعد ذلك في ${c}؟`,
      compassDesc: 'أدر البوصلة لاكتشاف مكان قريب لم تزره بعد — مطعم، إقامة، أو تسوق.',
      spinCompass: 'أدر البوصلة',
      spinCompassAria: (c) => `أدر البوصلة لاكتشاف مكان جديد في ${c}`,
      tabAll: 'فاجئني',
      tabFood: 'مطاعم',
      tabSleep: 'إقامة',
      tabThings: 'أنشطة',
      tabShopping: 'تسوق',
      quickPeekBtn: 'نظرة سريعة',
      goThere: 'اذهب إلى هناك',
      highlights: 'أبرز المزايا',
      insiderTip: 'نصيحة محلية',
      saved: 'محفوظ',
      save: 'حفظ',
      nextSpin: 'دورة أخرى',
      openFullGuide: 'فتح الدليل الكامل',
      stamped: 'مختوم',
      closeQuickPeek: 'إغلاق المعاينة',
      openMapsTitle: 'فتح في خرائط جوجل',
      peekStay: (c) => `معاينة إقامة في ${c}`,
      peekActivity: (c) => `معاينة نشاط في ${c}`,
      peekShop: (c) => `معاينة متجر في ${c}`,
      catFood: 'الأكل والمطاعم',
      catSleep: 'أماكن الإقامة',
      catShopping: 'الحرف والتسوق',
      catThings: 'أنشطة وتجارب',
      reasonHiddenGem: 'جوهرة خفية',
      reasonLocalFavorite: 'مفضل محلياً',
      reasonSpecialTreat: 'تجربة فاخرة',
      reasonVerifiedPick: 'اختيار موثق',
      reasonTopRated: 'الأعلى تقييماً',
      reasonCityDiscovery: 'اكتشاف محلي',
    },
  },
};

export function getPlaceUiCopy(lang: AppLanguage): PlaceUiCopy {
  return PLACE_UI_I18N[lang] || PLACE_UI_I18N.en;
}

const CITY_NAME_MAP: Record<AppLanguage, Record<string, string>> = {
  en: {},
  fr: {
    marrakech: 'Marrakech',
    fes: 'Fès',
    meknes: 'Meknès',
    tanger: 'Tanger',
    tangier: 'Tanger',
    tetouan: 'Tétouan',
    agadir: 'Agadir',
    casablanca: 'Casablanca',
    rabat: 'Rabat',
    essaouira: 'Essaouira',
    chefchaouen: 'Chefchaouen',
    ouarzazate: 'Ouarzazate',
    dakhla: 'Dakhla',
    laayoune: 'Laâyoune',
    layoune: 'Laâyoune',
    nador: 'Nador',
    oujda: 'Oujda',
    saidia: 'Saïdia',
    ifrane: 'Ifrane',
    taroudant: 'Taroudant',
    tiznit: 'Tiznit',
    zagora: 'Zagora',
    erfoud: 'Erfoud',
    tinghir: 'Tinghir',
    el_jadida: 'El Jadida',
    kenitra: 'Kénitra',
    sale: 'Salé',
  },
  es: {
    marrakech: 'Marrakech',
    fes: 'Fez',
    meknes: 'Mequinez',
    tanger: 'Tánger',
    tangier: 'Tánger',
    tetouan: 'Tetuán',
    agadir: 'Agadir',
    casablanca: 'Casablanca',
    rabat: 'Rabat',
    essaouira: 'Esauira',
    chefchaouen: 'Chauen',
    ouarzazate: 'Uarzazat',
    dakhla: 'Dajla',
    laayoune: 'El Aaiún',
    layoune: 'El Aaiún',
    nador: 'Nador',
    oujda: 'Uchda',
    saidia: 'Saidia',
    ifrane: 'Ifrán',
    taroudant: 'Tarudant',
    tiznit: 'Tiznit',
    zagora: 'Zagora',
    erfoud: 'Erfud',
    tinghir: 'Tinerhir',
    el_jadida: 'El Yadida',
    kenitra: 'Kenitra',
    sale: 'Salé',
  },
  de: {
    marrakech: 'Marrakesch',
    fes: 'Fès',
    meknes: 'Meknès',
    tanger: 'Tanger',
    tangier: 'Tanger',
    tetouan: 'Tétouan',
    agadir: 'Agadir',
    casablanca: 'Casablanca',
    rabat: 'Rabat',
    essaouira: 'Essaouira',
    chefchaouen: 'Chefchaouen',
    ouarzazate: 'Ouarzazate',
    dakhla: 'Dakhla',
    laayoune: 'Laâyoune',
    layoune: 'Laâyoune',
    nador: 'Nador',
    oujda: 'Oujda',
    saidia: 'Saïdia',
    ifrane: 'Ifrane',
    taroudant: 'Taroudant',
    tiznit: 'Tiznit',
    zagora: 'Zagora',
    erfoud: 'Erfoud',
    tinghir: 'Tinghir',
    el_jadida: 'El Jadida',
    kenitra: 'Kénitra',
    sale: 'Salé',
  },
  ar: {
    marrakech: 'مراكش',
    fes: 'فاس',
    meknes: 'مكناس',
    tanger: 'طنجة',
    tangier: 'طنجة',
    tetouan: 'تطوان',
    agadir: 'أكادير',
    casablanca: 'الدار البيضاء',
    rabat: 'الرباط',
    essaouira: 'الصويرة',
    chefchaouen: 'شفشاون',
    ouarzazate: 'ورزازات',
    dakhla: 'الداخلة',
    laayoune: 'العيون',
    layoune: 'العيون',
    nador: 'الناظور',
    oujda: 'وجدة',
    saidia: 'السعيدية',
    ifrane: 'إفران',
    taroudant: 'تارودانت',
    tiznit: 'تيزنيت',
    zagora: 'زاكورة',
    erfoud: 'أرفود',
    tinghir: 'تنغير',
    el_jadida: 'الجديدة',
    kenitra: 'القنيطرة',
    sale: 'سلا',
    safi: 'آسفي',
    al_hoceima: 'الحسيمة',
    assilah: 'أصيلة',
    larache: 'العرائش',
    martil: 'مرتيل',
    mohammedia: 'المحمدية',
    beni_mellal: 'بني ملال',
    sidi_ifni: 'سيدي إفني',
    guelmim: 'كلميم',
    tafraout: 'تافراوت',
    azrou: 'أزرو',
    temara: 'تمارة',
    m_diq: 'المضيق',
  },
};

export function localizeCityName(
  cityKey: string,
  fallbackName: string,
  lang: AppLanguage
): string {
  const key = String(cityKey || '').toLowerCase().trim();
  return CITY_NAME_MAP[lang]?.[key] || fallbackName;
}

type LangMap = Record<Exclude<AppLanguage, 'en'>, string>;

const CUISINE_TRANSLATIONS: Record<string, LangMap> = {
  moroccan: { fr: 'Marocaine', es: 'Marroquí', de: 'Marokkanisch', ar: 'مغربي' },
  international: { fr: 'Internationale', es: 'Internacional', de: 'International', ar: 'عالمي' },
  seafood: { fr: 'Poissons & Fruits de mer', es: 'Pescado y Marisco', de: 'Fisch & Meeresfrüchte', ar: 'مأكولات بحرية' },
  mediterranean: { fr: 'Méditerranéenne', es: 'Mediterránea', de: 'Mediterran', ar: 'متوسطي' },
  french: { fr: 'Française', es: 'Francesa', de: 'Französisch', ar: 'فرنسي' },
  italian: { fr: 'Italienne', es: 'Italiana', de: 'Italienisch', ar: 'إيطالي' },
  asian: { fr: 'Asiatique', es: 'Asiática', de: 'Asiatisch', ar: 'آسيوي' },
  sushi: { fr: 'Sushi & Japonais', es: 'Sushi y Japonesa', de: 'Sushi & Japanisch', ar: 'سوشي وياباني' },
  japanese: { fr: 'Japonaise', es: 'Japonesa', de: 'Japanisch', ar: 'ياباني' },
  steakhouse: { fr: 'Steakhouse & Grill', es: 'Asador y Carnes', de: 'Steakhouse & Grill', ar: 'ستيك ومشويات' },
  grill: { fr: 'Grillades', es: 'Parrilla', de: 'Grill', ar: 'مشويات' },
  cafe: { fr: 'Café', es: 'Cafetería', de: 'Café', ar: 'كافيه' },
  bakery: { fr: 'Boulangerie & Pâtisserie', es: 'Panadería y Pastelería', de: 'Bäckerei & Konditorei', ar: 'مخبز وحلويات' },
  patisserie: { fr: 'Pâtisserie', es: 'Pastelería', de: 'Patisserie', ar: 'حلويات' },
  brunch: { fr: 'Brunch', es: 'Brunch', de: 'Brunch', ar: 'برنش' },
  'street food': { fr: 'Street Food', es: 'Comida callejera', de: 'Streetfood', ar: 'أكل الشارع' },
  'street-food': { fr: 'Street Food', es: 'Comida callejera', de: 'Streetfood', ar: 'أكل الشارع' },
  vegetarian: { fr: 'Végétarienne', es: 'Vegetariana', de: 'Vegetarisch', ar: 'نباتي' },
  healthy: { fr: 'Healthy', es: 'Saludable', de: 'Gesund', ar: 'صحي' },
  'fast food': { fr: 'Restauration rapide', es: 'Comida rápida', de: 'Fast Food', ar: 'وجبات سريعة' },
  fusion: { fr: 'Fusion', es: 'Fusión', de: 'Fusion', ar: 'فيوجن' },
  tapas: { fr: 'Tapas', es: 'Tapas', de: 'Tapas', ar: 'تاباس' },
  spanish: { fr: 'Espagnole', es: 'Española', de: 'Spanisch', ar: 'إسباني' },
  indian: { fr: 'Indienne', es: 'India', de: 'Indisch', ar: 'هندي' },
  lebanese: { fr: 'Libanaise', es: 'Libanesa', de: 'Libanesisch', ar: 'لبناني' },
  'middle eastern': { fr: 'Moyen-Orient', es: 'Oriente Medio', de: 'Nahöstlich', ar: 'شرقي' },
  pizza: { fr: 'Pizzeria', es: 'Pizzería', de: 'Pizza', ar: 'بيتزا' },
  burger: { fr: 'Burgers', es: 'Hamburguesas', de: 'Burger', ar: 'برغر' },
  burgers: { fr: 'Burgers', es: 'Hamburguesas', de: 'Burger', ar: 'برغر' },
  dessert: { fr: 'Desserts', es: 'Postres', de: 'Desserts', ar: 'حلويات' },
  traditional: { fr: 'Traditionnelle', es: 'Tradicional', de: 'Traditionell', ar: 'تقليدي' },
  contemporary: { fr: 'Contemporaine', es: 'Contemporánea', de: 'Modern', ar: 'عصري' },
  european: { fr: 'Européenne', es: 'Europea', de: 'Europäisch', ar: 'أوروبي' },
  dutch: { fr: 'Hollandaise', es: 'Holandesa', de: 'Niederländisch', ar: 'هولندي' },
  amazigh: { fr: 'Amazighe', es: 'Amazigh', de: 'Amazigh', ar: 'أمازيغي' },
  berber: { fr: 'Berbère', es: 'Bereber', de: 'Berberisch', ar: 'أمازيغي' },
};

const EXPERIENCE_BADGE_TRANSLATIONS: Record<string, LangMap> = {
  'fine dining': { fr: 'Gastronomique', es: 'Alta cocina', de: 'Fine Dining', ar: 'مطعم راقٍ' },
  'fine-dining': { fr: 'Gastronomique', es: 'Alta cocina', de: 'Fine Dining', ar: 'مطعم راقٍ' },
  casual: { fr: 'Décontracté', es: 'Informal', de: 'Zwanglos', ar: 'أجواء مريحة' },
  'casual dining': { fr: 'Restauration décontractée', es: 'Restaurante informal', de: 'Legeres Restaurant', ar: 'مطعم عائلي مريح' },
  'street-food': { fr: 'Street Food', es: 'Comida callejera', de: 'Streetfood', ar: 'مأكولات الشارع' },
  'street food': { fr: 'Street Food', es: 'Comida callejera', de: 'Streetfood', ar: 'مأكولات الشارع' },
  cafe: { fr: 'Café & Salon de thé', es: 'Cafetería', de: 'Café', ar: 'مقهى' },
  bakery: { fr: 'Boulangerie & Pâtisserie', es: 'Panadería', de: 'Bäckerei', ar: 'مخبز' },
  rooftop: { fr: 'Rooftop & Terrasse', es: 'Azotea / Rooftop', de: 'Rooftop', ar: 'سطح بإطلالة' },
  'beach club': { fr: 'Beach Club', es: 'Club de playa', de: 'Beach Club', ar: 'نادي شاطئي' },
  'beach-club': { fr: 'Beach Club', es: 'Club de playa', de: 'Beach Club', ar: 'نادي شاطئي' },
  lounge: { fr: 'Lounge', es: 'Lounge', de: 'Lounge', ar: 'لاونج' },
  'family-friendly': { fr: 'Familial', es: 'Familiar', de: 'Familienfreundlich', ar: 'مناسب للعائلات' },
  traditional: { fr: 'Cuisine Traditionnelle', es: 'Tradicional', de: 'Traditionell', ar: 'مطبخ تقليدي' },
  bistro: { fr: 'Bistrot', es: 'Bistró', de: 'Bistro', ar: 'بيسترو' },
  brasserie: { fr: 'Brasserie', es: 'Brasserie', de: 'Brasserie', ar: 'براسيري' },
  romantic: { fr: 'Romantique', es: 'Romántico', de: 'Romantisch', ar: 'رومانسي' },
  restaurant: { fr: 'Restaurant', es: 'Restaurante', de: 'Restaurant', ar: 'مطعم' },
  scenic: { fr: 'Cadre Panoramique', es: 'Con Vistas', de: 'Panoramablick', ar: 'إطلالة ساحرة' },
  historic: { fr: 'Cadre Historique', es: 'Histórico', de: 'Historisch', ar: 'طابع تاريخي' },
  modern: { fr: 'Moderne & Branché', es: 'Moderno', de: 'Modern', ar: 'عصري' },
  seafood: { fr: 'Poissons & Fruits de mer', es: 'Marisquería', de: 'Fischrestaurant', ar: 'مأكولات بحرية' },
  authentic: { fr: 'Authentique', es: 'Auténtico', de: 'Authentisch', ar: 'تجربة أصيلة' },
  'local-eats': { fr: 'Cuisine Locale', es: 'Cocina Local', de: 'Lokale Küche', ar: 'أكل محلي أصيل' },
  'quick-bite': { fr: 'Sur le pouce', es: 'Bocado rápido', de: 'Schneller Imbiss', ar: 'وجبة سريعة' },
};

const MEAL_TYPE_TRANSLATIONS: Record<string, LangMap> = {
  breakfast: { fr: 'Petit-déjeuner', es: 'Desayuno', de: 'Frühstück', ar: 'فطور' },
  brunch: { fr: 'Brunch', es: 'Brunch', de: 'Brunch', ar: 'برنش' },
  lunch: { fr: 'Déjeuner', es: 'Almuerzo', de: 'Mittagessen', ar: 'غداء' },
  dinner: { fr: 'Dîner', es: 'Cena', de: 'Abendessen', ar: 'عشاء' },
  snacks: { fr: 'Collations', es: 'Merienda', de: 'Snacks', ar: 'وجبات خفيفة' },
  snack: { fr: 'Pause gourmande', es: 'Tentempié', de: 'Snack', ar: 'وجبة خفيفة' },
  drinks: { fr: 'Boissons', es: 'Bebidas', de: 'Getränke', ar: 'مشروبات' },
  coffee: { fr: 'Café & Thé', es: 'Café y Té', de: 'Kaffee & Tee', ar: 'قهوة وشاي' },
  dessert: { fr: 'Desserts', es: 'Postres', de: 'Desserts', ar: 'حلويات' },
  'late-night': { fr: 'Fin de soirée', es: 'Nocturno', de: 'Spätabends', ar: 'سهرة متأخرة' },
  'late night': { fr: 'Fin de soirée', es: 'Nocturno', de: 'Spätabends', ar: 'سهرة متأخرة' },
  tea: { fr: 'Salon de thé', es: 'Té', de: 'Tee', ar: 'شاي' },
};

const GROUP_TYPE_TRANSLATIONS: Record<string, LangMap> = {
  couples: { fr: 'Couples', es: 'Parejas', de: 'Paare', ar: 'الأزواج' },
  couple: { fr: 'Couples', es: 'Parejas', de: 'Paare', ar: 'الأزواج' },
  friends: { fr: 'Amis', es: 'Amigos', de: 'Freunde', ar: 'الأصدقاء' },
  families: { fr: 'Familles', es: 'Familias', de: 'Familien', ar: 'العائلات' },
  family: { fr: 'Familles', es: 'Familias', de: 'Familien', ar: 'العائلات' },
  solo: { fr: 'Voyageurs solo', es: 'Viajeros solos', de: 'Alleinreisende', ar: 'المسافرون بمفردهم' },
  'solo travelers': { fr: 'Voyageurs solo', es: 'Viajeros solos', de: 'Alleinreisende', ar: 'المسافرون بمفردهم' },
  'solo-travelers': { fr: 'Voyageurs solo', es: 'Viajeros solos', de: 'Alleinreisende', ar: 'المسافرون بمفردهم' },
  groups: { fr: 'Groupes', es: 'Grupos', de: 'Gruppen', ar: 'المجموعات' },
  business: { fr: 'Repas d’affaires', es: 'Negocios', de: 'Geschäftsessen', ar: 'لقاءات العمل' },
  foodies: { fr: 'Gourmets', es: 'Amantes gastronómicos', de: 'Feinschmecker', ar: 'عشاق الطعام' },
  luxury: { fr: 'Clientèle luxe', es: 'Lujo', de: 'Luxusreisende', ar: 'باحثون عن الفخامة' },
  budget: { fr: 'Petits budgets', es: 'Presupuesto ajustado', de: 'Preisbewusste', ar: 'ميزانية اقتصادية' },
};

const SEATING_TYPE_TRANSLATIONS: Record<string, LangMap> = {
  indoor: { fr: 'Intérieur', es: 'Interior', de: 'Innenbereich', ar: 'داخلي' },
  outdoor: { fr: 'Extérieur', es: 'Exterior', de: 'Außenbereich', ar: 'خارجي' },
  terrace: { fr: 'Terrasse', es: 'Terraza', de: 'Terrasse', ar: 'تراس' },
  rooftop: { fr: 'Rooftop', es: 'Azotea', de: 'Dachterrasse', ar: 'سطح' },
  garden: { fr: 'Jardin', es: 'Jardín', de: 'Garten', ar: 'حديقة' },
  courtyard: { fr: 'Patio', es: 'Patio', de: 'Innenhof', ar: 'فناء' },
  patio: { fr: 'Patio', es: 'Patio', de: 'Patio', ar: 'فناء' },
  beachfront: { fr: 'Front de mer', es: 'Frente al mar', de: 'Direkt am Strand', ar: 'على الشاطئ' },
  poolside: { fr: 'Bord de piscine', es: 'Junto a la piscina', de: 'Am Pool', ar: 'بجانب المسبح' },
  lounge: { fr: 'Lounge', es: 'Lounge', de: 'Lounge', ar: 'لاونج' },
  bar: { fr: 'Comptoir / Bar', es: 'Barra', de: 'Bar', ar: 'بار' },
  balcony: { fr: 'Balcon', es: 'Balcón', de: 'Balkon', ar: 'شرفة' },
};

const VIEW_TYPE_TRANSLATIONS: Record<string, LangMap> = {
  ocean: { fr: 'Vue océan', es: 'Vista al océano', de: 'Meerblick', ar: 'إطلالة على المحيط' },
  sea: { fr: 'Vue mer', es: 'Vista al mar', de: 'Meerblick', ar: 'إطلالة على البحر' },
  beach: { fr: 'Plage', es: 'Playa', de: 'Strandblick', ar: 'إطلالة على الشاطئ' },
  garden: { fr: 'Jardin', es: 'Jardín', de: 'Gartenblick', ar: 'حديقة' },
  street: { fr: 'Rue animée', es: 'Calle', de: 'Straßenblick', ar: 'شارع' },
  city: { fr: 'Vue ville', es: 'Vista a la ciudad', de: 'Stadtblick', ar: 'إطلالة على المدينة' },
  medina: { fr: 'Médina', es: 'Medina', de: 'Medina', ar: 'المدينة العتيقة' },
  panoramic: { fr: 'Panoramique', es: 'Panorámica', de: 'Panoramablick', ar: 'بانورامية' },
  pool: { fr: 'Piscine', es: 'Piscina', de: 'Poolblick', ar: 'المسبح' },
  mountain: { fr: 'Montagne', es: 'Montaña', de: 'Bergblick', ar: 'الجبال' },
  marina: { fr: 'Marina', es: 'Puerto deportivo', de: 'Marina', ar: 'المارينا' },
  courtyard: { fr: 'Patio intérieur', es: 'Patio interior', de: 'Innenhof', ar: 'فناء داخلي' },
  rooftop: { fr: 'Toits / Rooftop', es: 'Azotea', de: 'Dachterrasse', ar: 'فوق الأسطح' },
  interior: { fr: 'Cadre intérieur', es: 'Interior', de: 'Innenbereich', ar: 'تصميم داخلي' },
};

const PAYMENT_TRANSLATIONS: Record<string, LangMap> = {
  cash: { fr: 'Espèces', es: 'Efectivo', de: 'Bargeld', ar: 'نقداً' },
  'cash-only': { fr: 'Espèces uniquement', es: 'Solo efectivo', de: 'Nur Barzahlung', ar: 'نقداً فقط' },
  'cash only': { fr: 'Espèces uniquement', es: 'Solo efectivo', de: 'Nur Barzahlung', ar: 'نقداً فقط' },
  card: { fr: 'Carte bancaire', es: 'Tarjeta', de: 'Kartenzahlung', ar: 'بطاقة بنكية' },
  cards: { fr: 'Cartes bancaires', es: 'Tarjetas', de: 'Karten', ar: 'بطاقات بنكية' },
  'credit card': { fr: 'Carte bancaire', es: 'Tarjeta de crédito', de: 'Kreditkarte', ar: 'بطاقة ائتمان' },
  'credit cards': { fr: 'Cartes bancaires', es: 'Tarjetas de crédito', de: 'Kreditkarten', ar: 'بطاقات ائتمان' },
  'credit-card': { fr: 'Carte bancaire', es: 'Tarjeta de crédito', de: 'Kreditkarte', ar: 'بطاقة ائتمان' },
  cmi: { fr: 'CMI / Carte marocaine', es: 'CMI', de: 'CMI', ar: 'بطاقة CMI' },
  contactless: { fr: 'Sans contact', es: 'Sin contacto', de: 'Kontaktlos', ar: 'الدفع اللاتلامسي' },
  'apple pay': { fr: 'Apple Pay', es: 'Apple Pay', de: 'Apple Pay', ar: 'Apple Pay' },
};

const SPOKEN_LANG_TRANSLATIONS: Record<string, LangMap> = {
  english: { fr: 'Anglais', es: 'Inglés', de: 'Englisch', ar: 'الإنجليزية' },
  french: { fr: 'Français', es: 'Francés', de: 'Französisch', ar: 'الفرنسية' },
  arabic: { fr: 'Arabe', es: 'Árabe', de: 'Arabisch', ar: 'العربية' },
  spanish: { fr: 'Espagnol', es: 'Español', de: 'Spanisch', ar: 'الإسبانية' },
  german: { fr: 'Allemand', es: 'Alemán', de: 'Deutsch', ar: 'الألمانية' },
  berber: { fr: 'Amazigh (Berbère)', es: 'Bereber', de: 'Berberisch', ar: 'الأمازيغية' },
  amazigh: { fr: 'Amazigh', es: 'Amazigh', de: 'Amazigh', ar: 'الأمازيغية' },
  dutch: { fr: 'Néerlandais', es: 'Neerlandés', de: 'Niederländisch', ar: 'الهولندية' },
  italian: { fr: 'Italien', es: 'Italiano', de: 'Italienisch', ar: 'الإيطالية' },
  darija: { fr: 'Darija marocaine', es: 'Dariya marroquí', de: 'Marokkanisches Arabisch', ar: 'الدارجة المغربية' },
};

const DAY_NAME_TRANSLATIONS: Record<string, LangMap> = {
  monday: { fr: 'Lundi', es: 'Lunes', de: 'Montag', ar: 'الاثنين' },
  tuesday: { fr: 'Mardi', es: 'Martes', de: 'Dienstag', ar: 'الثلاثاء' },
  wednesday: { fr: 'Mercredi', es: 'Miércoles', de: 'Mittwoch', ar: 'الأربعاء' },
  thursday: { fr: 'Jeudi', es: 'Jueves', de: 'Donnerstag', ar: 'الخميس' },
  friday: { fr: 'Vendredi', es: 'Viernes', de: 'Freitag', ar: 'الجمعة' },
  saturday: { fr: 'Samedi', es: 'Sábado', de: 'Samstag', ar: 'السبت' },
  sunday: { fr: 'Dimanche', es: 'Domingo', de: 'Sonntag', ar: 'الأحد' },
};

function translateByTable(value: string, table: Record<string, LangMap>, lang: AppLanguage): string {
  const cleaned = String(value || '').trim();
  if (!cleaned) return '';
  if (lang === 'en') return cleaned.replace(/-/g, ' ');
  const key = cleaned.toLowerCase();
  const normKey = key.replace(/-/g, ' ');
  const hit = table[key] || table[normKey];
  if (hit && hit[lang]) return hit[lang];
  return cleaned.replace(/-/g, ' ');
}

export function localizeCuisineLabel(cuisine: string, lang: AppLanguage): string {
  return translateByTable(cuisine, CUISINE_TRANSLATIONS, lang);
}

export function localizeExperienceBadge(badge: string, lang: AppLanguage): string {
  return translateByTable(badge, EXPERIENCE_BADGE_TRANSLATIONS, lang);
}

export function localizeMealType(meal: string, lang: AppLanguage): string {
  return translateByTable(meal, MEAL_TYPE_TRANSLATIONS, lang);
}

export function localizeGroupType(group: string, lang: AppLanguage): string {
  if (lang === 'en') {
    const clean = String(group || '').replace(/-/g, ' ').trim();
    return clean ? clean.charAt(0).toUpperCase() + clean.slice(1) : '';
  }
  return translateByTable(group, GROUP_TYPE_TRANSLATIONS, lang);
}

export function localizeSeatingType(seating: string, lang: AppLanguage): string {
  return translateByTable(seating, SEATING_TYPE_TRANSLATIONS, lang);
}

export function localizeViewType(view: string, lang: AppLanguage): string {
  return translateByTable(view, VIEW_TYPE_TRANSLATIONS, lang);
}

export function localizePaymentMethod(method: string, lang: AppLanguage): string {
  return translateByTable(method, PAYMENT_TRANSLATIONS, lang);
}

export function localizeLanguageSpoken(langName: string, lang: AppLanguage): string {
  return translateByTable(langName, SPOKEN_LANG_TRANSLATIONS, lang);
}

export function localizeDayName(dayName: string, lang: AppLanguage): string {
  if (lang === 'en') return dayName;
  const hit = DAY_NAME_TRANSLATIONS[String(dayName || '').toLowerCase().trim()];
  return (hit && hit[lang]) || dayName;
}
