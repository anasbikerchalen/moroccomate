import type { AppLanguage } from '../utils/localeRouting';

export interface TrustSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TrustPageCopy {
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  subtitle: string;
  metaLine: string;
  sections: TrustSection[];
}

export interface AboutPageCopy extends TrustPageCopy {
  principlesHeading: string;
  principles: Array<{ title: string; body: string }>;
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ContactPageCopy {
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  subtitle: string;
  metaLine: string;
  sidebarTitle: string;
  sidebarPoints: Array<{ label: string; detail: string }>;
  privacyNotice: string;
  privacyLinkLabel: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    topicLabel: string;
    topics: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errorRequired: string;
    errorEmail: string;
    errorMessageShort: string;
    errorNotConfigured: string;
    errorRateLimit: string;
    errorGeneric: string;
  };
}

export interface CookieConsentCopy {
  bannerTitle: string;
  bannerBody: string;
  privacyLink: string;
  acceptAll: string;
  essentialOnly: string;
  customize: string;
  modalTitle: string;
  modalSubtitle: string;
  necessaryTitle: string;
  necessaryDesc: string;
  alwaysActive: string;
  analyticsTitle: string;
  analyticsDesc: string;
  advertisingTitle: string;
  advertisingDesc: string;
  saveChoices: string;
  cancel: string;
}

export interface FooterTrustCopy {
  about: string;
  contact: string;
  privacy: string;
  terms: string;
  cookieSettings: string;
  tocHeading: string;
  manageCookiesCta: string;
}

export interface TrustPagesBundle {
  footer: FooterTrustCopy;
  cookie: CookieConsentCopy;
  about: AboutPageCopy;
  contact: ContactPageCopy;
  privacy: TrustPageCopy;
  terms: TrustPageCopy;
}

export const TRUST_PAGES_I18N: Record<AppLanguage, TrustPagesBundle> = {
  en: {
    footer: {
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookieSettings: 'Cookie Settings',
      tocHeading: 'On this page',
      manageCookiesCta: 'Update Cookie Preferences',
    },
    cookie: {
      bannerTitle: 'Cookies & Privacy Choices',
      bannerBody:
        'Moroccan Mate uses essential storage for your saved places and language, plus optional analytics and advertising cookies.',
      privacyLink: 'Privacy Policy',
      acceptAll: 'Accept All',
      essentialOnly: 'Essential Only',
      customize: 'Customize',
      modalTitle: 'Cookie & Consent Preferences',
      modalSubtitle:
        'Choose which optional cookies Moroccan Mate may use. You can revisit these choices anytime from the footer.',
      necessaryTitle: 'Essential Storage',
      necessaryDesc:
        'Required for language routing, saved places, and remembering your consent choice. Cannot be disabled.',
      alwaysActive: 'Always active',
      analyticsTitle: 'Analytics (Google Analytics)',
      analyticsDesc:
        'Helps us understand which city guides and articles travelers find most helpful without identifying you directly.',
      advertisingTitle: 'Advertising (Google AdSense)',
      advertisingDesc:
        'Allows Google and advertising partners to measure ad performance and show relevant travel ads when enabled.',
      saveChoices: 'Save Preferences',
      cancel: 'Cancel',
    },
    about: {
      seoTitle: 'About Moroccan Mate — Independent Creator Travel Guide',
      seoDescription:
        'Learn how Moroccan Mate is independently researched and written to help travelers navigate 31 Moroccan destinations with honest pricing and local insight.',
      kicker: 'Independent Publication',
      title: 'About Moroccan Mate',
      subtitle:
        'A solo-created editorial guide built to give travelers honest, practical context across 31 Moroccan cities—before they book, order, or step into the medina.',
      metaLine: 'Independent solo creator · 31 Moroccan hubs · Updated 2026',
      principlesHeading: 'How this guide is put together',
      principles: [
        {
          title: 'Honest Worries & Real Context',
          body: 'Travel brochures rarely mention aggressive touts, unclear taxi fares, or seasonal closures. Every listing highlights practical traveler concerns alongside what makes a spot special.',
        },
        {
          title: 'Independent Curation',
          body: 'Moroccan Mate is created and maintained independently as a personal editorial project. Places are never ranked higher in exchange for undisclosed payments.',
        },
        {
          title: 'Transparent Pricing Signals',
          body: 'Menus, riad price tiers, and activity fees are documented in Moroccan Dirhams (MAD) so you can budget realistically across cities and neighborhoods.',
        },
      ],
      sections: [
        {
          id: 'story',
          title: 'Why Moroccan Mate Exists',
          paragraphs: [
            'Planning a trip across Morocco often means sifting through contradictory forum threads, generic top-ten lists, and outdated opening hours. Moroccan Mate was created as a single, calm workspace where you can pick a city, filter by your travel style, and compare verified restaurants, riads, artisan shops, and activities side by side.',
            'Rather than overwhelming you with thousands of unvetted pins, the project focuses on curated picks across Morocco’s imperial cities, Atlantic surf towns, Atlas valleys, and Sahara gateways—published in English, French, Spanish, German, and Arabic.',
          ],
        },
        {
          id: 'editorial',
          title: 'Editorial Standards & Verification',
          paragraphs: [
            'Each guide and place profile is researched using real-world venue details, public traveler feedback, menu pricing, neighborhood proximity, and local cultural etiquette.',
            'Because restaurants change menus, riads renovate, and seasonal hours shift (especially during Ramadan or winter), we continuously review listings and welcome direct corrections from travelers and local hosts through our contact form.',
          ],
        },
        {
          id: 'support',
          title: 'How the Site Is Supported',
          paragraphs: [
            'Moroccan Mate is free to use without paywalls or mandatory accounts. To cover hosting, research, and ongoing translations across five languages, the site may display clearly labeled advertising (such as Google AdSense) and occasional clearly disclosed referral links.',
            'Advertising never influences our editorial verdicts, local worry warnings, or city quiz recommendations.',
          ],
        },
      ],
      ctaTitle: 'Spot something outdated or want to say hello?',
      ctaBody:
        'Local tips, price updates, and reader feedback keep this independent guide sharp for everyone.',
      ctaPrimary: 'Send a Message',
      ctaSecondary: 'Explore the Blog',
    },
    contact: {
      seoTitle: 'Contact Moroccan Mate — Corrections, Tips & Inquiries',
      seoDescription:
        'Send a message to Moroccan Mate to report outdated place hours or prices, suggest a local spot in Morocco, or ask a privacy question.',
      kicker: 'Get in Touch',
      title: 'Contact Moroccan Mate',
      subtitle:
        'Found changed opening hours, a closed venue, or a neighborhood spot worth featuring? Use this private form to reach the creator directly.',
      metaLine: 'Direct creator inbox · Replies usually within 2–3 business days',
      sidebarTitle: 'What you can write about',
      sidebarPoints: [
        {
          label: 'Listing Corrections',
          detail: 'Report closed venues, updated MAD prices, phone numbers, or seasonal hours.',
        },
        {
          label: 'Local Recommendations',
          detail: 'Share an authentic café, riad, cooperative, or trail across any Moroccan city.',
        },
        {
          label: 'Privacy & Legal Requests',
          detail: 'Ask about your data preferences, cookie choices, or content attribution.',
        },
      ],
      privacyNotice:
        'Your name, email address, and message are used strictly to reply to your inquiry. Review our',
      privacyLinkLabel: 'Privacy Policy',
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'e.g. Nadia Benali',
        emailLabel: 'Your Email (for our reply)',
        emailPlaceholder: 'you@example.com',
        topicLabel: 'Topic',
        topics: [
          'Report outdated listing info',
          'Suggest a local place',
          'Travel guide question',
          'Privacy or legal inquiry',
          'Other',
        ],
        messageLabel: 'Message',
        messagePlaceholder: 'Share the city, place name, or details you would like us to check...',
        submitLabel: 'Send Message',
        submittingLabel: 'Sending...',
        successTitle: 'Message received',
        successBody:
          'Thank you for writing to Moroccan Mate. Your note has been delivered privately and will be reviewed shortly.',
        sendAnother: 'Send another message',
        errorRequired: 'Please complete all required fields before sending.',
        errorEmail: 'Please enter a valid email address so we can reply.',
        errorMessageShort: 'Please write at least 10 characters in your message.',
        errorNotConfigured:
          'The mail relay is currently finishing setup on this server. Please check back shortly.',
        errorRateLimit: 'Too many messages sent in a short time. Please wait a few minutes and try again.',
        errorGeneric: 'Unable to send your message right now. Please try again in a moment.',
      },
    },
    privacy: {
      seoTitle: 'Privacy Policy — Moroccan Mate',
      seoDescription:
        'Read how Moroccan Mate handles local browser storage, Google Analytics, Google AdSense advertising cookies, contact form data, and GDPR/CCPA rights.',
      kicker: 'Legal & Privacy',
      title: 'Privacy Policy',
      subtitle:
        'A plain-language explanation of what information Moroccan Mate stores, how analytics and advertising cookies work, and how you control your data.',
      metaLine: 'Effective date · November 23, 2026 · Independent solo publication',
      sections: [
        {
          id: 'overview',
          title: '1. Who Operates This Website',
          paragraphs: [
            'Moroccan Mate (moroccanmate.com) is an independent travel guide and discovery platform created and operated as a solo creator project. We respect your privacy and collect only the minimal data required to keep the website reliable, measure readership, and support free access through advertising.',
          ],
        },
        {
          id: 'storage',
          title: '2. Local Browser Storage & Preferences',
          paragraphs: [
            'To remember your saved places ("Favorites"), chosen display language (EN, FR, ES, DE, AR), tasting notes, and cookie consent choice without forcing you to create an account, Moroccan Mate stores lightweight preference entries directly inside your browser’s localStorage and sessionStorage.',
            'This browser-local data stays on your device and can be cleared anytime through your browser settings.',
          ],
        },
        {
          id: 'analytics',
          title: '3. Google Analytics (Measurement)',
          paragraphs: [
            'With your consent where required, Moroccan Mate uses Google Analytics (measurement ID G-VRGKPQYHYC) to understand aggregate traffic patterns—such as which city guides or blog articles are most read and whether pages load quickly.',
            'Google Analytics uses cookies and similar identifiers to measure visits. When you select "Essential Only" in our cookie preferences, analytics storage remains disabled via Google Consent Mode v2.',
          ],
        },
        {
          id: 'adsense',
          title: '4. Google AdSense & Third-Party Advertising Cookies',
          paragraphs: [
            'Moroccan Mate may partner with Google AdSense and certified third-party ad vendors to display advertisements that keep this travel guide free.',
          ],
          bullets: [
            'Third-party vendors, including Google, use cookies to serve ads based on a visitor’s prior visits to Moroccan Mate or other websites.',
            'Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visits to this site and/or other sites on the Internet.',
            'Users in the European Economic Area (EEA), the United Kingdom, and other regulated regions are asked for explicit consent before personalized advertising cookies are set. Non-personalized ads or zero ad cookies are respected according to your choice.',
            'You may opt out of personalized advertising anytime by visiting Google Ads Settings (adssettings.google.com) or by visiting www.aboutads.info/choices.',
          ],
        },
        {
          id: 'contact-data',
          title: '5. Contact Form Submissions',
          paragraphs: [
            'When you send a message through our Contact page, we process the name, email address, topic, and message you submit solely to read your feedback and reply to you. Messages are transmitted securely through our server email relay and are never sold, rented, or added to marketing mailing lists.',
          ],
        },
        {
          id: 'rights',
          title: '6. Your Rights (GDPR & CCPA)',
          paragraphs: [
            'Depending on where you live (including the EEA, UK, and California), you have the right to withdraw consent, request access to personal correspondence you sent us, or ask us to delete your contact message history.',
            'You can update or withdraw cookie consent at any time using the "Cookie Settings" button in the footer or below. For any privacy request, please reach out through our Contact page.',
          ],
        },
      ],
    },
    terms: {
      seoTitle: 'Terms of Use & Disclaimer — Moroccan Mate',
      seoDescription:
        'Terms of use, travel information disclaimer, external link policy, and intellectual property guidelines for Moroccan Mate.',
      kicker: 'Legal & Guidelines',
      title: 'Terms of Use',
      subtitle:
        'Guidelines for using Moroccan Mate’s city guides, local listings, pricing notes, and editorial articles.',
      metaLine: 'Effective date · November 23, 2026 · moroccanmate.com',
      sections: [
        {
          id: 'acceptance',
          title: '1. Acceptance of Terms',
          paragraphs: [
            'By accessing or browsing Moroccan Mate, you agree to these Terms of Use. If you do not agree with any part of these terms, please discontinue using the website.',
          ],
        },
        {
          id: 'travel-disclaimer',
          title: '2. Travel, Pricing & Safety Disclaimer',
          paragraphs: [
            'Moroccan Mate provides independent editorial guides, approximate price ranges in Moroccan Dirhams (MAD), opening schedules, neighborhood insights, and traveler caution notes for informational purposes only.',
            'Hospitality businesses, transport routes, seasonal opening hours (including holidays and Ramadan schedules), and local prices change frequently. Always confirm reservation terms, entry fees, dietary requirements, and safety conditions directly with the venue or official local operator before booking or traveling.',
          ],
        },
        {
          id: 'external-links',
          title: '3. External Websites & Third-Party Services',
          paragraphs: [
            'Listings and articles may link to external venue websites, map services, booking platforms, or advertisements served by third-party networks such as Google AdSense. Moroccan Mate does not control and is not responsible for the content, availability, or privacy practices of external websites.',
          ],
        },
        {
          id: 'ip',
          title: '4. Intellectual Property',
          paragraphs: [
            'All original editorial writing, curated guides, interface design, custom illustrations, and structured compilations on Moroccan Mate are owned by Moroccan Mate unless otherwise noted. You may share links and brief excerpts with clear attribution, but automated scraping, bulk republishing, or commercial redistribution without prior written permission is prohibited.',
          ],
        },
        {
          id: 'acceptable-use',
          title: '5. Acceptable Use',
          paragraphs: [
            'You agree not to misuse the contact form for spam, automated submissions, abusive content, or attempts to probe or disrupt server endpoints.',
          ],
        },
        {
          id: 'changes',
          title: '6. Updates to These Terms',
          paragraphs: [
            'These Terms of Use may be updated periodically to reflect new features or legal requirements. Continued use of Moroccan Mate after changes are posted constitutes acceptance of the updated terms. Questions may be sent through our Contact page.',
          ],
        },
      ],
    },
  },

  fr: {
    footer: {
      about: 'À propos',
      contact: 'Contact',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      cookieSettings: 'Cookies',
      tocHeading: 'Sur cette page',
      manageCookiesCta: 'Gérer mes préférences de cookies',
    },
    cookie: {
      bannerTitle: 'Cookies et confidentialité',
      bannerBody:
        'Moroccan Mate utilise un stockage essentiel pour vos favoris et votre langue, ainsi que des cookies facultatifs d’analyse et de publicité.',
      privacyLink: 'Politique de confidentialité',
      acceptAll: 'Tout accepter',
      essentialOnly: 'Essentiels uniquement',
      customize: 'Personnaliser',
      modalTitle: 'Préférences de consentement',
      modalSubtitle:
        'Choisissez les cookies facultatifs autorisés. Vous pouvez modifier ce choix à tout moment depuis le pied de page.',
      necessaryTitle: 'Stockage essentiel',
      necessaryDesc:
        'Nécessaire pour la langue du site, vos lieux enregistrés et la mémorisation de votre choix de cookies.',
      alwaysActive: 'Toujours actif',
      analyticsTitle: 'Mesure d’audience (Google Analytics)',
      analyticsDesc:
        'Nous aide à comprendre quels guides de villes sont les plus utiles, sans vous identifier personnellement.',
      advertisingTitle: 'Publicité (Google AdSense)',
      advertisingDesc:
        'Permet à Google et à ses partenaires de mesurer l’affichage et de proposer des annonces pertinentes si vous y consentez.',
      saveChoices: 'Enregistrer',
      cancel: 'Annuler',
    },
    about: {
      seoTitle: 'À propos de Moroccan Mate — Guide indépendant du Maroc',
      seoDescription:
        'Découvrez comment Moroccan Mate est conçu de manière indépendante pour aider les voyageurs à explorer 31 destinations au Maroc.',
      kicker: 'Publication indépendante',
      title: 'À propos de Moroccan Mate',
      subtitle:
        'Un guide éditorial indépendant créé par un créateur passionné pour offrir des repères honnêtes dans 31 villes et régions du Maroc.',
      metaLine: 'Projet indépendant · 31 destinations marocaines · Mis à jour en 2026',
      principlesHeading: 'Notre approche éditoriale',
      principles: [
        {
          title: 'Conseils pratiques et réalistes',
          body: 'Chaque fiche signale les points de vigilance concrets (tarifs peu clairs, rabatteurs, horaires saisonniers) en plus des atouts du lieu.',
        },
        {
          title: 'Sélection indépendante',
          body: 'Moroccan Mate est géré en toute indépendance. Aucun établissement ne peut payer pour obtenir un meilleur classement.',
        },
        {
          title: 'Repères de prix en Dirhams (MAD)',
          body: 'Les fourchettes de prix des repas, riads et activités sont indiquées en MAD pour préparer votre budget sans surprise.',
        },
      ],
      sections: [
        {
          id: 'story',
          title: 'Pourquoi Moroccan Mate existe',
          paragraphs: [
            'Préparer un voyage au Maroc oblige souvent à trier des avis contradictoires et des listes génériques. Moroccan Mate rassemble en un seul endroit des sélections vérifiées dans 31 destinations—des médinas impériales à la côte atlantique et aux oasis du Sahara—disponibles en 5 langues.',
          ],
        },
        {
          id: 'editorial',
          title: 'Vérification et mises à jour',
          paragraphs: [
            'Les fiches s’appuient sur des informations locales vérifiées, des cartes de menus, les retours voyageurs et la géographie des quartiers. Les horaires et tarifs pouvant évoluer localement, les lecteurs peuvent signaler toute mise à jour via le formulaire de contact.',
          ],
        },
        {
          id: 'support',
          title: 'Financement du site',
          paragraphs: [
            'L’accès au guide est entièrement gratuit. Pour financer l’hébergement et la traduction en cinq langues, le site peut afficher des annonces publicitaires clairement identifiées (Google AdSense), sans jamais influencer les recommandations éditoriales.',
          ],
        },
      ],
      ctaTitle: 'Une correction à signaler ou une question ?',
      ctaBody:
        'Vos retours de terrain aident à garder ce guide fiable pour tous les voyageurs.',
      ctaPrimary: 'Envoyer un message',
      ctaSecondary: 'Lire le blog',
    },
    contact: {
      seoTitle: 'Contact — Moroccan Mate',
      seoDescription:
        'Contactez Moroccan Mate via notre formulaire privé pour signaler une mise à jour, proposer une adresse locale ou poser une question.',
      kicker: 'Nous écrire',
      title: 'Contacter Moroccan Mate',
      subtitle:
        'Horaires modifiés, adresse fermée ou pépite locale à partager ? Envoyez votre message via ce formulaire sécurisé.',
      metaLine: 'Boîte de réception privée · Réponse sous 2 à 3 jours ouvrés',
      sidebarTitle: 'Sujets fréquents',
      sidebarPoints: [
        {
          label: 'Mise à jour d’une fiche',
          detail: 'Signaler un tarif modifié, un changement d’horaires ou une fermeture.',
        },
        {
          label: 'Suggérer un lieu',
          detail: 'Partager un café, un riad, une coopérative ou une activité authentique.',
        },
        {
          label: 'Confidentialité & droits',
          detail: 'Questions sur vos données, cookies ou droits d’auteur.',
        },
      ],
      privacyNotice:
        'Votre nom, adresse e-mail et message servent uniquement à vous répondre. Consultez notre',
      privacyLinkLabel: 'Politique de confidentialité',
      form: {
        nameLabel: 'Votre nom',
        namePlaceholder: 'Ex. Karim El Amrani',
        emailLabel: 'Votre e-mail (pour la réponse)',
        emailPlaceholder: 'vous@exemple.com',
        topicLabel: 'Sujet',
        topics: [
          'Signaler une information obsolète',
          'Suggérer une adresse locale',
          'Question sur un guide',
          'Demande de confidentialité',
          'Autre',
        ],
        messageLabel: 'Message',
        messagePlaceholder: 'Indiquez la ville, le lieu et les précisions utiles...',
        submitLabel: 'Envoyer le message',
        submittingLabel: 'Envoi en cours...',
        successTitle: 'Message envoyé',
        successBody:
          'Merci pour votre message. Il a bien été transmis au créateur du site.',
        sendAnother: 'Envoyer un autre message',
        errorRequired: 'Veuillez remplir tous les champs obligatoires.',
        errorEmail: 'Veuillez saisir une adresse e-mail valide.',
        errorMessageShort: 'Votre message doit contenir au moins 10 caractères.',
        errorNotConfigured:
          'Le relais e-mail est en cours de configuration sur le serveur. Merci de réessayer plus tard.',
        errorRateLimit: 'Trop de messages envoyés récemment. Veuillez patienter quelques minutes.',
        errorGeneric: 'Impossible d’envoyer le message pour le moment. Veuillez réessayer.',
      },
    },
    privacy: {
      seoTitle: 'Politique de confidentialité — Moroccan Mate',
      seoDescription:
        'Découvrez comment Moroccan Mate utilise le stockage local, Google Analytics, Google AdSense et protège vos données personnelles (RGPD).',
      kicker: 'Mentions & Confidentialité',
      title: 'Politique de confidentialité',
      subtitle:
        'Explication claire des données techniques utilisées, de Google Analytics, de Google AdSense et de vos droits RGPD.',
      metaLine: 'Date d’effet · 23 novembre 2026 · Publication indépendante',
      sections: [
        {
          id: 'overview',
          title: '1. Éditeur du site',
          paragraphs: [
            'Moroccan Mate (moroccanmate.com) est un guide de voyage indépendant géré par un créateur individuel. Nous limitons la collecte de données au strict nécessaire pour faire fonctionner le site et financer sa gratuité.',
          ],
        },
        {
          id: 'storage',
          title: '2. Stockage local du navigateur',
          paragraphs: [
            'Vos lieux favoris, votre langue préférée et vos choix de consentement aux cookies sont enregistrés localement sur votre appareil via localStorage et sessionStorage, sans création de compte.',
          ],
        },
        {
          id: 'analytics',
          title: '3. Google Analytics',
          paragraphs: [
            'Avec votre consentement, Moroccan Mate utilise Google Analytics (G-VRGKPQYHYC) pour mesurer la fréquentation globale des pages. Si vous refusez les cookies non essentiels, la mesure analytique reste désactivée via Google Consent Mode v2.',
          ],
        },
        {
          id: 'adsense',
          title: '4. Google AdSense et cookies publicitaires',
          paragraphs: [
            'Moroccan Mate peut utiliser Google AdSense pour afficher des annonces publicitaires.',
          ],
          bullets: [
            'Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site ou sur d’autres sites.',
            'Dans l’Espace économique européen (EEE) et au Royaume-Uni, aucun cookie publicitaire personnalisé n’est activé sans votre accord explicite.',
            'Vous pouvez désactiver la publicité personnalisée à tout moment via adssettings.google.com ou www.aboutads.info/choices.',
          ],
        },
        {
          id: 'contact-data',
          title: '5. Formulaire de contact',
          paragraphs: [
            'Les informations envoyées via la page Contact (nom, e-mail, sujet et message) ne servent qu’à traiter votre demande et ne sont jamais vendues ni partagées à des fins commerciales.',
          ],
        },
        {
          id: 'rights',
          title: '6. Vos droits (RGPD / CCPA)',
          paragraphs: [
            'Vous disposez d’un droit d’accès, de rectification, de suppression et de retrait du consentement. Vous pouvez modifier vos choix à tout moment via le bouton « Cookies » en pied de page ou nous écrire via la page Contact.',
          ],
        },
      ],
    },
    terms: {
      seoTitle: 'Conditions d’utilisation — Moroccan Mate',
      seoDescription:
        'Conditions d’utilisation, clause de non-responsabilité voyage et propriété intellectuelle de Moroccan Mate.',
      kicker: 'Informations légales',
      title: 'Conditions d’utilisation',
      subtitle:
        'Règles d’utilisation des guides, tarifs indicatifs et contenus éditoriaux de Moroccan Mate.',
      metaLine: 'Date d’effet · 23 novembre 2026 · moroccanmate.com',
      sections: [
        {
          id: 'acceptance',
          title: '1. Acceptation des conditions',
          paragraphs: [
            'En naviguant sur Moroccan Mate, vous acceptez les présentes conditions d’utilisation.',
          ],
        },
        {
          id: 'travel-disclaimer',
          title: '2. Exactitude des informations et tarifs',
          paragraphs: [
            'Les informations publiées (prix en MAD, horaires, itinéraires, conseils pratiques) sont fournies à titre purement informatif. Les horaires (notamment pendant le Ramadan ou les jours fériés) et tarifs évoluant localement, vérifiez toujours les conditions directement auprès de l’établissement concerné.',
          ],
        },
        {
          id: 'external-links',
          title: '3. Liens externes et publicités',
          paragraphs: [
            'Le site contient des liens vers des sites tiers (cartes, réservations, annonces Google AdSense). Moroccan Mate n’est pas responsable du contenu ni des politiques de ces sites externes.',
          ],
        },
        {
          id: 'ip',
          title: '4. Propriété intellectuelle',
          paragraphs: [
            'Les textes éditoriaux, guides, compilations et éléments graphiques originaux appartiennent à Moroccan Mate. Toute copie automatisée ou republication commerciale sans autorisation est interdite.',
          ],
        },
        {
          id: 'acceptable-use',
          title: '5. Usage loyal',
          paragraphs: [
            'Il est interdit d’utiliser le formulaire de contact pour envoyer du spam ou perturber le fonctionnement technique du site.',
          ],
        },
        {
          id: 'changes',
          title: '6. Modifications',
          paragraphs: [
            'Ces conditions peuvent être mises à jour à tout moment. Pour toute question, utilisez notre page Contact.',
          ],
        },
      ],
    },
  },

  es: {
    footer: {
      about: 'Acerca de',
      contact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookieSettings: 'Cookies',
      tocHeading: 'En esta página',
      manageCookiesCta: 'Actualizar preferencias de cookies',
    },
    cookie: {
      bannerTitle: 'Cookies y privacidad',
      bannerBody:
        'Moroccan Mate utiliza almacenamiento esencial para tus favoritos e idioma, además de cookies opcionales de análisis y publicidad.',
      privacyLink: 'Política de privacidad',
      acceptAll: 'Aceptar todo',
      essentialOnly: 'Solo esenciales',
      customize: 'Personalizar',
      modalTitle: 'Preferencias de consentimiento',
      modalSubtitle:
        'Elige qué cookies opcionales permites. Puedes cambiar esta configuración en cualquier momento desde el pie de página.',
      necessaryTitle: 'Almacenamiento esencial',
      necessaryDesc:
        'Necesario para recordar tu idioma, lugares guardados y preferencia de consentimiento.',
      alwaysActive: 'Siempre activo',
      analyticsTitle: 'Analítica (Google Analytics)',
      analyticsDesc:
        'Nos ayuda a entender qué guías y artículos resultan más útiles sin identificarte directamente.',
      advertisingTitle: 'Publicidad (Google AdSense)',
      advertisingDesc:
        'Permite a Google y sus socios medir el rendimiento publicitario y mostrar anuncios relevantes si das tu consentimiento.',
      saveChoices: 'Guardar preferencias',
      cancel: 'Cancelar',
    },
    about: {
      seoTitle: 'Sobre Moroccan Mate — Guía independiente de Marruecos',
      seoDescription:
        'Conoce cómo se investiga y edita Moroccan Mate para ofrecer guías honestas sobre 31 destinos de Marruecos.',
      kicker: 'Publicación independiente',
      title: 'Sobre Moroccan Mate',
      subtitle:
        'Una guía editorial independiente creada como proyecto personal para ofrecer contexto honesto y práctico en 31 destinos de Marruecos.',
      metaLine: 'Creador independiente · 31 destinos en Marruecos · Actualizado 2026',
      principlesHeading: 'Cómo elaboramos la guía',
      principles: [
        {
          title: 'Consejos reales y sin adornos',
          body: 'Señalamos dudas frecuentes del viajero (precios poco claros, horarios estacionales o zonas concurridas) junto a lo mejor de cada lugar.',
        },
        {
          title: 'Curación independiente',
          body: 'Ningún restaurante, riad o tienda paga por aparecer mejor posicionado en nuestras recomendaciones.',
        },
        {
          title: 'Precios claros en Dirhams (MAD)',
          body: 'Incluimos referencias reales de precios para planificar tu presupuesto con tranquilidad.',
        },
      ],
      sections: [
        {
          id: 'story',
          title: 'Por qué existe Moroccan Mate',
          paragraphs: [
            'Planificar un viaje por Marruecos suele implicar leer consejos contradictorios y horarios desactualizados. Moroccan Mate reúne en un solo espacio guías seleccionadas en 31 ciudades y regiones, disponibles en cinco idiomas.',
          ],
        },
        {
          id: 'editorial',
          title: 'Criterio editorial y actualizaciones',
          paragraphs: [
            'Revisamos continuamente menús, barrios, reseñas verificadas y etiquetas locales. Si detectas algún cambio, puedes avisarnos directamente mediante el formulario de contacto.',
          ],
        },
        {
          id: 'support',
          title: 'Cómo se mantiene el proyecto',
          paragraphs: [
            'Moroccan Mate es gratuito y sin muros de pago. Para cubrir el alojamiento y el mantenimiento editorial en cinco idiomas, el sitio puede mostrar anuncios claramente identificados mediante Google AdSense.',
          ],
        },
      ],
      ctaTitle: '¿Quieres sugerir un lugar o corregir un dato?',
      ctaBody:
        'Tus comentarios ayudan a mantener la guía al día para futuros viajeros.',
      ctaPrimary: 'Enviar mensaje',
      ctaSecondary: 'Explorar el blog',
    },
    contact: {
      seoTitle: 'Contacto — Moroccan Mate',
      seoDescription:
        'Envía un mensaje privado a Moroccan Mate para reportar cambios de horario o precio, sugerir lugares o consultar sobre privacidad.',
      kicker: 'Escríbenos',
      title: 'Contactar con Moroccan Mate',
      subtitle:
        '¿Cambiaron los horarios de un lugar o conoces una recomendación local imperdible? Usa este formulario privado.',
      metaLine: 'Bandeja directa del creador · Respuesta habitual en 2–3 días',
      sidebarTitle: 'Motivos de consulta',
      sidebarPoints: [
        {
          label: 'Correcciones',
          detail: 'Avisar sobre cierres, precios en MAD o cambios de horario.',
        },
        {
          label: 'Sugerencias locales',
          detail: 'Proponer cafeterías, riads, cooperativas o rutas auténticas.',
        },
        {
          label: 'Privacidad y legal',
          detail: 'Consultas sobre cookies, datos enviados o derechos de autor.',
        },
      ],
      privacyNotice:
        'Tu nombre, correo y mensaje se usan únicamente para responderte. Consulta nuestra',
      privacyLinkLabel: 'Política de privacidad',
      form: {
        nameLabel: 'Tu nombre',
        namePlaceholder: 'Ej. Lucía Morales',
        emailLabel: 'Tu correo (para responderte)',
        emailPlaceholder: 'tu@ejemplo.com',
        topicLabel: 'Asunto',
        topics: [
          'Reportar información desactualizada',
          'Sugerir un lugar local',
          'Duda sobre la guía de viaje',
          'Consulta de privacidad o legal',
          'Otro',
        ],
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Indica la ciudad, el nombre del lugar y los detalles...',
        submitLabel: 'Enviar mensaje',
        submittingLabel: 'Enviando...',
        successTitle: 'Mensaje enviado',
        successBody:
          'Gracias por escribir a Moroccan Mate. Tu mensaje se ha entregado de forma privada.',
        sendAnother: 'Enviar otro mensaje',
        errorRequired: 'Por favor completa todos los campos obligatorios.',
        errorEmail: 'Introduce una dirección de correo válida.',
        errorMessageShort: 'Escribe al menos 10 caracteres en tu mensaje.',
        errorNotConfigured:
          'El servicio de correo del servidor está terminando su configuración. Inténtalo más tarde.',
        errorRateLimit: 'Demasiados mensajes enviados en poco tiempo. Espera unos minutos.',
        errorGeneric: 'No se pudo enviar el mensaje en este momento. Inténtalo de nuevo.',
      },
    },
    privacy: {
      seoTitle: 'Política de privacidad — Moroccan Mate',
      seoDescription:
        'Información sobre almacenamiento local, Google Analytics, cookies publicitarias de Google AdSense y derechos RGPD/CCPA en Moroccan Mate.',
      kicker: 'Legal y Privacidad',
      title: 'Política de privacidad',
      subtitle:
        'Explicación clara sobre el almacenamiento en tu navegador, Google Analytics, Google AdSense y tus derechos.',
      metaLine: 'Fecha de vigencia · 23 de noviembre de 2026 · Publicación independiente',
      sections: [
        {
          id: 'overview',
          title: '1. Responsable del sitio',
          paragraphs: [
            'Moroccan Mate (moroccanmate.com) es un proyecto editorial independiente operado por un creador individual. Recopilamos únicamente los datos mínimos necesarios para el funcionamiento del sitio.',
          ],
        },
        {
          id: 'storage',
          title: '2. Almacenamiento local del navegador',
          paragraphs: [
            'Tus lugares guardados, idioma seleccionado y preferencias de cookies se almacenan localmente en tu navegador (localStorage / sessionStorage) sin necesidad de crear una cuenta.',
          ],
        },
        {
          id: 'analytics',
          title: '3. Google Analytics',
          paragraphs: [
            'Con tu consentimiento cuando corresponde, utilizamos Google Analytics (G-VRGKPQYHYC) para medir visitas agregadas. Si eliges "Solo esenciales", las cookies analíticas permanecen desactivadas mediante Google Consent Mode v2.',
          ],
        },
        {
          id: 'adsense',
          title: '4. Google AdSense y cookies publicitarias',
          paragraphs: [
            'Moroccan Mate puede mostrar anuncios mediante Google AdSense para mantener el acceso gratuito.',
          ],
          bullets: [
            'Proveedores terceros, incluido Google, utilizan cookies para mostrar anuncios basados en visitas anteriores a este u otros sitios web.',
            'En el EEE y el Reino Unido solicitamos tu consentimiento previo antes de activar cookies publicitarias personalizadas.',
            'Puedes desactivar la publicidad personalizada en adssettings.google.com o en www.aboutads.info/choices.',
          ],
        },
        {
          id: 'contact-data',
          title: '5. Datos del formulario de contacto',
          paragraphs: [
            'Los datos enviados en la página de Contacto se utilizan exclusivamente para responder a tu mensaje y nunca se venden ni comparten con terceros con fines comerciales.',
          ],
        },
        {
          id: 'rights',
          title: '6. Tus derechos (RGPD y CCPA)',
          paragraphs: [
            'Puedes retirar tu consentimiento o solicitar la eliminación de tu correspondencia en cualquier momento usando el enlace de Cookies en el pie de página o la página de Contacto.',
          ],
        },
      ],
    },
    terms: {
      seoTitle: 'Términos de uso — Moroccan Mate',
      seoDescription:
        'Condiciones de uso, exención de responsabilidad de viaje y propiedad intelectual de Moroccan Mate.',
      kicker: 'Aviso Legal',
      title: 'Términos de uso',
      subtitle:
        'Condiciones generales para consultar las guías, precios orientativos y artículos de Moroccan Mate.',
      metaLine: 'Fecha de vigencia · 23 de noviembre de 2026 · moroccanmate.com',
      sections: [
        {
          id: 'acceptance',
          title: '1. Aceptación de los términos',
          paragraphs: [
            'Al utilizar Moroccan Mate aceptas estos Términos de uso.',
          ],
        },
        {
          id: 'travel-disclaimer',
          title: '2. Aviso sobre precios y horarios',
          paragraphs: [
            'Las tarifas en MAD, horarios (incluidos festivos y Ramadán) y consejos locales son orientativos. Confirma siempre las condiciones directamente con cada establecimiento antes de viajar.',
          ],
        },
        {
          id: 'external-links',
          title: '3. Enlaces externos',
          paragraphs: [
            'Los enlaces a sitios oficiales, mapas, reservas o anuncios de Google AdSense pertenecen a terceros fuera de nuestro control.',
          ],
        },
        {
          id: 'ip',
          title: '4. Propiedad intelectual',
          paragraphs: [
            'Los textos, guías y compilaciones originales pertenecen a Moroccan Mate. No está permitida la extracción automatizada ni la republicación comercial sin permiso.',
          ],
        },
        {
          id: 'acceptable-use',
          title: '5. Uso aceptable',
          paragraphs: [
            'Queda prohibido el uso del formulario de contacto para envío de spam o pruebas automatizadas contra el servidor.',
          ],
        },
        {
          id: 'changes',
          title: '6. Cambios en los términos',
          paragraphs: [
            'Podemos actualizar estos términos cuando sea necesario. Si tienes dudas, escríbenos desde la página de Contacto.',
          ],
        },
      ],
    },
  },

  de: {
    footer: {
      about: 'Über uns',
      contact: 'Kontakt',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      cookieSettings: 'Cookie-Einstellungen',
      tocHeading: 'Auf dieser Seite',
      manageCookiesCta: 'Cookie-Einstellungen ändern',
    },
    cookie: {
      bannerTitle: 'Cookies & Datenschutz',
      bannerBody:
        'Moroccan Mate nutzt notwendigen Speicher für Merkliste und Sprache sowie optionale Analyse- und Werbe-Cookies.',
      privacyLink: 'Datenschutzerklärung',
      acceptAll: 'Alle akzeptieren',
      essentialOnly: 'Nur notwendige',
      customize: 'Anpassen',
      modalTitle: 'Cookie- & Einwilligungs-Einstellungen',
      modalSubtitle:
        'Wählen Sie aus, welche optionalen Cookies erlaubt sind. Sie können Ihre Wahl jederzeit im Footer ändern.',
      necessaryTitle: 'Notwendiger Speicher',
      necessaryDesc:
        'Erforderlich für Spracheinstellungen, gespeicherte Orte und das Merken Ihrer Cookie-Entscheidung.',
      alwaysActive: 'Immer aktiv',
      analyticsTitle: 'Analyse (Google Analytics)',
      analyticsDesc:
        'Hilft uns zu verstehen, welche Stadtführer hilfreich sind, ohne Sie direkt zu identifizieren.',
      advertisingTitle: 'Werbung (Google AdSense)',
      advertisingDesc:
        'Ermöglicht Google und Partnern, Anzeigen zu messen und bei Einwilligung passende Reiseanzeigen einzublenden.',
      saveChoices: 'Auswahl speichern',
      cancel: 'Abbrechen',
    },
    about: {
      seoTitle: 'Über Moroccan Mate — Unabhängiger Marokko-Reiseführer',
      seoDescription:
        'Erfahren Sie, wie Moroccan Mate als unabhängiges Solo-Projekt ehrliche Reiseguides für 31 marokkanische Ziele erstellt.',
      kicker: 'Unabhängige Publikation',
      title: 'Über Moroccan Mate',
      subtitle:
        'Ein unabhängiger Reiseführer eines einzelnen Erstellers mit praktischem Kontext, ehrlichen Preisen und lokalen Tipps für 31 Reiseziele in Marokko.',
      metaLine: 'Unabhängiges Projekt · 31 Reiseziele · Stand 2026',
      principlesHeading: 'Unsere Redaktionsprinzipien',
      principles: [
        {
          title: 'Ehrliche Hinweise statt Hochglanz',
          body: 'Wir nennen typische Stolperfallen wie unklare Taxipreise oder saisonale Öffnungszeiten genauso klar wie die Highlights.',
        },
        {
          title: 'Unabhängige Auswahl',
          body: 'Kein Lokal, Riad oder Geschäft kann sich eine bessere Platzierung erkaufen.',
        },
        {
          title: 'Transparente Preise in MAD',
          body: 'Richtwerte in marokkanischen Dirham helfen bei einer realistischen Reiseplanung.',
        },
      ],
      sections: [
        {
          id: 'story',
          title: 'Warum es Moroccan Mate gibt',
          paragraphs: [
            'Bei der Marokko-Planung stößt man oft auf widersprüchliche Forenbeiträge. Moroccan Mate bündelt geprüfte Empfehlungen für 31 Städte und Regionen in fünf Sprachen an einem ruhigen Ort.',
          ],
        },
        {
          id: 'editorial',
          title: 'Prüfung & Aktualisierungen',
          paragraphs: [
            'Öffnungszeiten, Speisekarten und Preise ändern sich vor Ort – besonders rund um den Ramadan. Über unser Kontaktformular können Reisende und Gastgeber jederzeit Korrekturen melden.',
          ],
        },
        {
          id: 'support',
          title: 'Finanzierung der Website',
          paragraphs: [
            'Der Guide ist kostenlos nutzbar. Zur Deckung von Hosting und Übersetzungen kann die Website klar gekennzeichnete Werbung (Google AdSense) einblenden, ohne Einfluss auf redaktionelle Empfehlungen.',
          ],
        },
      ],
      ctaTitle: 'Etwas Veraltetes entdeckt oder eine Frage?',
      ctaBody:
        'Hinweise von Reisenden halten diesen unabhängigen Guide aktuell.',
      ctaPrimary: 'Nachricht senden',
      ctaSecondary: 'Blog entdecken',
    },
    contact: {
      seoTitle: 'Kontakt — Moroccan Mate',
      seoDescription:
        'Senden Sie Moroccan Mate eine private Nachricht zu Korrekturen, lokalen Tipps oder Datenschutzfragen.',
      kicker: 'Kontakt aufnehmen',
      title: 'Moroccan Mate kontaktieren',
      subtitle:
        'Geänderte Öffnungszeiten, geschlossener Ort oder ein Geheimtipp? Nutzen Sie dieses private Kontaktformular.',
      metaLine: 'Direktes Postfach · Antwort in der Regel innerhalb von 2–3 Werktagen',
      sidebarTitle: 'Wobei wir helfen können',
      sidebarPoints: [
        {
          label: 'Korrekturen melden',
          detail: 'Aktualisierte MAD-Preise, Öffnungszeiten oder geschlossene Betriebe.',
        },
        {
          label: 'Orte vorschlagen',
          detail: 'Authentische Cafés, Riads, Kooperativen oder Touren in Marokko.',
        },
        {
          label: 'Datenschutz & Rechtliches',
          detail: 'Fragen zu Cookies, gesendeten Nachrichten oder Urheberrecht.',
        },
      ],
      privacyNotice:
        'Name, E-Mail-Adresse und Nachricht werden ausschließlich zur Beantwortung verwendet. Siehe unsere',
      privacyLinkLabel: 'Datenschutzerklärung',
      form: {
        nameLabel: 'Ihr Name',
        namePlaceholder: 'z. B. Lukas Weber',
        emailLabel: 'Ihre E-Mail (für die Antwort)',
        emailPlaceholder: 'sie@beispiel.de',
        topicLabel: 'Thema',
        topics: [
          'Veralteten Eintrag melden',
          'Lokalen Ort vorschlagen',
          'Frage zum Reiseführer',
          'Datenschutz- oder Rechtsanfrage',
          'Sonstiges',
        ],
        messageLabel: 'Nachricht',
        messagePlaceholder: 'Nennen Sie Stadt, Ort und die gewünschten Details...',
        submitLabel: 'Nachricht senden',
        submittingLabel: 'Wird gesendet...',
        successTitle: 'Nachricht gesendet',
        successBody:
          'Vielen Dank für Ihre Nachricht. Sie wurde privat übermittelt und wird zeitnah geprüft.',
        sendAnother: 'Weitere Nachricht senden',
        errorRequired: 'Bitte füllen Sie alle Pflichtfelder aus.',
        errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        errorMessageShort: 'Bitte schreiben Sie mindestens 10 Zeichen.',
        errorNotConfigured:
          'Der Mail-Dienst auf dem Server wird gerade eingerichtet. Bitte versuchen Sie es später erneut.',
        errorRateLimit: 'Zu viele Anfragen in kurzer Zeit. Bitte warten Sie einige Minuten.',
        errorGeneric: 'Nachricht konnte derzeit nicht gesendet werden. Bitte versuchen Sie es erneut.',
      },
    },
    privacy: {
      seoTitle: 'Datenschutzerklärung — Moroccan Mate',
      seoDescription:
        'Informationen zu lokalem Speicher, Google Analytics, Google AdSense Cookies, Kontaktformular und DSGVO-Rechten bei Moroccan Mate.',
      kicker: 'Rechtliches & Datenschutz',
      title: 'Datenschutzerklärung',
      subtitle:
        'Transparente Übersicht über lokale Browser-Speicherung, Google Analytics, Google AdSense und Ihre Rechte nach der DSGVO.',
      metaLine: 'Gültig ab · 23. November 2026 · Unabhängiges Einzelprojekt',
      sections: [
        {
          id: 'overview',
          title: '1. Verantwortlicher',
          paragraphs: [
            'Moroccan Mate (moroccanmate.com) ist ein unabhängiger Reise-Guide, der als persönliches Einzelprojekt betrieben wird.',
          ],
        },
        {
          id: 'storage',
          title: '2. Lokaler Browser-Speicher',
          paragraphs: [
            'Gespeicherte Favoriten, Sprachwahl und Ihre Cookie-Einwilligung werden ohne Benutzerkonto lokal in Ihrem Browser (localStorage / sessionStorage) gespeichert.',
          ],
        },
        {
          id: 'analytics',
          title: '3. Google Analytics',
          paragraphs: [
            'Sofern Sie einwilligen, nutzt Moroccan Mate Google Analytics (G-VRGKPQYHYC) zur statistischen Auswertung. Bei Wahl von „Nur notwendige“ bleibt die Analyse über Google Consent Mode v2 deaktiviert.',
          ],
        },
        {
          id: 'adsense',
          title: '4. Google AdSense & Werbe-Cookies',
          paragraphs: [
            'Moroccan Mate kann Google AdSense einsetzen, um das Angebot kostenlos bereitzustellen.',
          ],
          bullets: [
            'Drittanbieter einschließlich Google verwenden Cookies, um Anzeigen auf Basis früherer Besuche auf dieser oder anderen Websites auszuspielen.',
            'Im EWR und Vereinigten Königreich werden personalisierte Werbe-Cookies nur nach ausdrücklicher Einwilligung gesetzt.',
            'Personalisierte Werbung können Sie jederzeit unter adssettings.google.com oder www.aboutads.info/choices deaktivieren.',
          ],
        },
        {
          id: 'contact-data',
          title: '5. Kontaktformular-Daten',
          paragraphs: [
            'Übermittelte Kontaktdaten werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt und nicht verkauft oder für Newsletter verwendet.',
          ],
        },
        {
          id: 'rights',
          title: '6. Ihre Rechte (DSGVO / CCPA)',
          paragraphs: [
            'Sie haben das Recht auf Auskunft, Löschung und Widerruf Ihrer Einwilligung. Nutzen Sie dazu jederzeit „Cookie-Einstellungen“ im Footer oder unsere Kontaktseite.',
          ],
        },
      ],
    },
    terms: {
      seoTitle: 'Nutzungsbedingungen — Moroccan Mate',
      seoDescription:
        'Nutzungsbedingungen, Haftungsausschluss für Reiseinformationen und Urheberrechtshinweise von Moroccan Mate.',
      kicker: 'Rechtliche Hinweise',
      title: 'Nutzungsbedingungen',
      subtitle:
        'Rahmenbedingungen für die Nutzung der Stadtführer, Preisangaben und Artikel auf Moroccan Mate.',
      metaLine: 'Gültig ab · 23. November 2026 · moroccanmate.com',
      sections: [
        {
          id: 'acceptance',
          title: '1. Geltungsbereich',
          paragraphs: [
            'Mit dem Besuch von Moroccan Mate erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.',
          ],
        },
        {
          id: 'travel-disclaimer',
          title: '2. Haftungsausschluss für Preise & Öffnungszeiten',
          paragraphs: [
            'Alle Angaben zu Preisen in MAD, Öffnungszeiten (einschließlich Ramadan und Feiertagen) sowie Sicherheitshinweisen dienen der Orientierung. Bitte prüfen Sie aktuelle Konditionen vor Ort direkt beim Anbieter.',
          ],
        },
        {
          id: 'external-links',
          title: '3. Externe Links',
          paragraphs: [
            'Verlinkte Websites, Kartendienste oder Werbeanzeigen Dritter liegen außerhalb unseres Verantwortungsbereichs.',
          ],
        },
        {
          id: 'ip',
          title: '4. Urheberrecht',
          paragraphs: [
            'Originaltexte, Guides und Zusammenstellungen unterliegen dem Urheberrecht von Moroccan Mate. Automatisiertes Auslesen oder kommerzielle Weiterverwendung ohne Zustimmung ist untersagt.',
          ],
        },
        {
          id: 'acceptable-use',
          title: '5. Zulässige Nutzung',
          paragraphs: [
            'Missbrauch des Kontaktformulars für Spam oder automatisierte Angriffe ist untersagt.',
          ],
        },
        {
          id: 'changes',
          title: '6. Änderungen',
          paragraphs: [
            'Diese Bedingungen können bei Bedarf aktualisiert werden. Fragen richten Sie bitte über die Kontaktseite an uns.',
          ],
        },
      ],
    },
  },

  ar: {
    footer: {
      about: 'من نحن',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      cookieSettings: 'إعدادات الكوكيز',
      tocHeading: 'في هذه الصفحة',
      manageCookiesCta: 'تحديث تفضيلات ملفات الارتباط',
    },
    cookie: {
      bannerTitle: 'ملفات الارتباط والخصوصية',
      bannerBody:
        'يستخدم Moroccan Mate التخزين الأساسي لحفظ مفضلتك واللغة، بالإضافة إلى ملفات اختيارية للتحليلات والإعلانات.',
      privacyLink: 'سياسة الخصوصية',
      acceptAll: 'قبول الكل',
      essentialOnly: 'الأساسية فقط',
      customize: 'تخصيص',
      modalTitle: 'تفضيلات ملفات الارتباط',
      modalSubtitle:
        'اختر الملفات الاختيارية المسموح بها. يمكنك تعديل اختيارك في أي وقت من أسفل الصفحة.',
      necessaryTitle: 'التخزين الأساسي',
      necessaryDesc:
        'ضروري لحفظ اللغة المختارة والأماكن المحفوظة وتذكر قرار الموافقة.',
      alwaysActive: 'مفعّل دائماً',
      analyticsTitle: 'التحليلات (Google Analytics)',
      analyticsDesc:
        'يساعدنا على معرفة الأدلة والمقالات الأكثر فائدة للزوار دون تحديد هويتك شخصياً.',
      advertisingTitle: 'الإعلانات (Google AdSense)',
      advertisingDesc:
        'يتيح لشركة Google وشركائها قياس أداء الإعلانات وعرض إعلانات سفر مناسبة عند موافقتك.',
      saveChoices: 'حفظ التفضيلات',
      cancel: 'إلغاء',
    },
    about: {
      seoTitle: 'عن Moroccan Mate — دليل سفر مستقل في المغرب',
      seoDescription:
        'تعرّف على قصة Moroccan Mate وكيف نُعد أدلة السفر والأسعار والنصائح المحلية عبر 31 وجهة مغربية.',
      kicker: 'مشروع مستقل',
      title: 'عن Moroccan Mate',
      subtitle:
        'دليل سفر مستقل يقدمه صانع محتوى فردي لمنح المسافرين صورة صادقة وعملية عبر 31 مدينة ووجهة في المغرب.',
      metaLine: 'مشروع فردي مستقل · 31 وجهة مغربية · محدّث 2026',
      principlesHeading: 'منهجية إعداد الدليل',
      principles: [
        {
          title: 'شفافية حول ما يقلق المسافر',
          body: 'نوضح النقاط العملية التي يغفلها الترويج السياحي مثل وضوح الأسعار، ساعات الإغلاق الموسمية، ونصائح التعامل المحلي.',
        },
        {
          title: 'اختيارات مستقلة',
          body: 'لا يُمنح أي مطعم أو رياض أو متجر ترتيباً أفضل مقابل دفع مالي غير معلن.',
        },
        {
          title: 'مؤشرات أسعار بالدرهم المغربي',
          body: 'توثيق الأسعار التقديرية بالدرهم لمساعدتك على التخطيط الواقعي لميزانيتك.',
        },
      ],
      sections: [
        {
          id: 'story',
          title: 'لماذا أنشأنا Moroccan Mate',
          paragraphs: [
            'التخطيط لرحلة في المغرب غالباً ما يفرض البحث بين نصائح متناقضة ومعلومات قديمة. يجمع Moroccan Mate في مكان واحد ترشيحات منتقاة عبر 31 مدينة ومنطقة في المغرب بخمس لغات.',
          ],
        },
        {
          id: 'editorial',
          title: 'المراجعة والتحديث المستمر',
          paragraphs: [
            'تُراجع البيانات استناداً إلى القوائم والأسعار الفعلية وملاحظات الزوار وخصوصية كل حي. وبما أن الأوقات تتغير محلياً (خاصة في رمضان والمواسم)، نرحب بأي تصحيح عبر صفحة الاتصال.',
          ],
        },
        {
          id: 'support',
          title: 'تمويل واستمرارية الموقع',
          paragraphs: [
            'الموقع مجاني بالكامل دون اشتراكات. ولتغطية تكاليف الاستضافة والترجمة بخمس لغات، قد يعرض الموقع إعلانات واضحة عبر Google AdSense دون أي تأثير على حيادية التوصيات.',
          ],
        },
      ],
      ctaTitle: 'هل لاحظت معلومة تحتاج تحديثاً؟',
      ctaBody:
        'ملاحظات المسافرين تساعدنا على إبقاء الدليل دقيقاً ومفيداً للجميع.',
      ctaPrimary: 'أرسل رسالة',
      ctaSecondary: 'تصفح المدونة',
    },
    contact: {
      seoTitle: 'اتصل بنا — Moroccan Mate',
      seoDescription:
        'تواصل مع Moroccan Mate عبر النموذج الخاص لتحديث بيانات الأماكن أو اقتراح وجهة محلية أو للاستفسارات.',
      kicker: 'تواصل معنا',
      title: 'تواصل مع Moroccan Mate',
      subtitle:
        'هل تغيرت ساعات عمل مكان ما أو لديك توصية محلية مميزة؟ أرسل رسالتك عبر هذا النموذج الخاص.',
      metaLine: 'صندوق رسائل خاص · الرد عادة خلال يومين إلى ثلاثة أيام عمل',
      sidebarTitle: 'كيف يمكننا مساعدتك',
      sidebarPoints: [
        {
          label: 'تحديث بيانات الأماكن',
          detail: 'الإبلاغ عن إغلاق مكان أو تغيّر الأسعار بالدرهم أو المواعيد.',
        },
        {
          label: 'اقتراح مكان محلي',
          detail: 'مشاركة مقهى، رياض، تعاونية حرفية أو نشاط مميز في أي مدينة مغربية.',
        },
        {
          label: 'استفسارات الخصوصية',
          detail: 'أسئلة حول ملفات الارتباط أو بيانات التواصل أو حقوق النشر.',
        },
      ],
      privacyNotice:
        'يُستخدم اسمك وبريدك ورسالتك فقط للرد على استفسارك. راجع',
      privacyLinkLabel: 'سياسة الخصوصية',
      form: {
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'مثال: سلمى العلمي',
        emailLabel: 'بريدك الإلكتروني (للرد عليك)',
        emailPlaceholder: 'you@example.com',
        topicLabel: 'الموضوع',
        topics: [
          'الإبلاغ عن معلومة قديمة',
          'اقتراح مكان محلي',
          'سؤال حول دليل السفر',
          'استفسار عن الخصوصية أو الشروط',
          'موضوع آخر',
        ],
        messageLabel: 'الرسالة',
        messagePlaceholder: 'اكتب اسم المدينة والمكان والتفاصيل التي تود مشاركتها...',
        submitLabel: 'إرسال الرسالة',
        submittingLabel: 'جارٍ الإرسال...',
        successTitle: 'تم استلام رسالتك',
        successBody:
          'شكراً لتواصلك مع Moroccan Mate. تم إرسال رسالتك بشكل خاص وسنراجعها قريباً.',
        sendAnother: 'إرسال رسالة أخرى',
        errorRequired: 'يرجى تعبئة جميع الحقول المطلوبة.',
        errorEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
        errorMessageShort: 'يرجى كتابة 10 أحرف على الأقل في نص الرسالة.',
        errorNotConfigured:
          'خدمة إرسال البريد قيد الإعداد النهائي على الخادم. يرجى المحاولة لاحقاً.',
        errorRateLimit: 'تم إرسال رسائل كثيرة خلال وقت قصير. يرجى الانتظار بضع دقائق.',
        errorGeneric: 'تعذّر إرسال الرسالة حالياً. يرجى المحاولة مرة أخرى.',
      },
    },
    privacy: {
      seoTitle: 'سياسة الخصوصية — Moroccan Mate',
      seoDescription:
        'توضح هذه الصفحة كيفية تعامل Moroccan Mate مع التخزين المحلي وGoogle Analytics وإعلانات Google AdSense وحقوق المستخدمين.',
      kicker: 'الخصوصية والقانون',
      title: 'سياسة الخصوصية',
      subtitle:
        'شرح واضح لكيفية عمل التخزين المحلي، إحصائيات Google Analytics، وإعلانات Google AdSense وحقوقك.',
      metaLine: 'تاريخ السريان · 23 نوفمبر 2026 · مشروع فردي مستقل',
      sections: [
        {
          id: 'overview',
          title: '1. الجهة المشغّلة للموقع',
          paragraphs: [
            'موقع Moroccan Mate (moroccanmate.com) هو دليل سفر مستقل يُدار كمشروع شخصي فردي. نحترم خصوصيتك ونقتصر على الحد الأدنى من البيانات اللازمة لتشغيل الموقع.',
          ],
        },
        {
          id: 'storage',
          title: '2. التخزين المحلي في المتصفح',
          paragraphs: [
            'لحفظ الأماكن المفضلة واللغة المختارة وتفضيلات ملفات الارتباط دون الحاجة لتسجيل حساب، يخزن الموقع بيانات خفيفة محلياً في متصفحك (localStorage وsessionStorage).',
          ],
        },
        {
          id: 'analytics',
          title: '3. إحصائيات Google Analytics',
          paragraphs: [
            'بموافقتك عند اللزوم، نستخدم Google Analytics (المعرّف G-VRGKPQYHYC) لقياس الزيارات بشكل إجمالي. وعند اختيار "الأساسية فقط"، تبقى ملفات التحليل معطّلة عبر Google Consent Mode v2.',
          ],
        },
        {
          id: 'adsense',
          title: '4. إعلانات Google AdSense وملفات الطرف الثالث',
          paragraphs: [
            'قد يعرض Moroccan Mate إعلانات عبر Google AdSense لدعم استمرارية الدليل مجاناً.',
          ],
          bullets: [
            'تستخدم الجهات الخارجية، بما في ذلك Google، ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لهذا الموقع أو مواقع أخرى.',
            'في المنطقة الاقتصادية الأوروبية والمملكة المتحدة، لا يتم تفعيل الإعلانات المخصصة إلا بعد موافقتك الصريحة.',
            'يمكنك إيقاف الإعلانات المخصصة في أي وقت عبر adssettings.google.com أو www.aboutads.info/choices.',
          ],
        },
        {
          id: 'contact-data',
          title: '5. بيانات نموذج الاتصال',
          paragraphs: [
            'تُستخدم البيانات المرسلة عبر صفحة الاتصال للرد على رسالتك فقط، ولا تُباع أو تُشارك لأي أغراض تسويقية.',
          ],
        },
        {
          id: 'rights',
          title: '6. حقوقك (GDPR وCCPA)',
          paragraphs: [
            'يحق لك تعديل موافقتك في أي وقت عبر زر "إعدادات الكوكيز" في أسفل الصفحة، أو مراسلتنا عبر صفحة الاتصال لطلب حذف مراسلاتك.',
          ],
        },
      ],
    },
    terms: {
      seoTitle: 'شروط الاستخدام — Moroccan Mate',
      seoDescription:
        'شروط استخدام دليل Moroccan Mate وإخلاء المسؤولية عن الأسعار والمواعيد والروابط الخارجية.',
      kicker: 'إشعار قانوني',
      title: 'شروط الاستخدام',
      subtitle:
        'الضوابط العامة لاستخدام أدلة المدن والمعلومات السياحية والمقالات على Moroccan Mate.',
      metaLine: 'تاريخ السريان · 23 نوفمبر 2026 · moroccanmate.com',
      sections: [
        {
          id: 'acceptance',
          title: '1. الموافقة على الشروط',
          paragraphs: [
            'باستخدامك موقع Moroccan Mate فإنك توافق على شروط الاستخدام هذه.',
          ],
        },
        {
          id: 'travel-disclaimer',
          title: '2. إخلاء المسؤولية عن الأسعار والمواعيد',
          paragraphs: [
            'الأسعار التقديرية بالدرهم وساعات العمل (بما في ذلك أوقات رمضان والأعياد) ونصائح السفر مقدمة لأغراض إرشادية فقط. يُرجى التحقق دائماً من التفاصيل مباشرة مع الجهة المعنية قبل السفر أو الحجز.',
          ],
        },
        {
          id: 'external-links',
          title: '3. الروابط الخارجية والإعلانات',
          paragraphs: [
            'قد يحتوي الموقع على روابط لخرائط أو مواقع حجز أو إعلانات Google AdSense. لا يتحمل Moroccan Mate مسؤولية محتوى أو سياسات المواقع الخارجية.',
          ],
        },
        {
          id: 'ip',
          title: '4. حقوق الملكية الفكرية',
          paragraphs: [
            'جميع النصوص التحريرية والأدلة الأصلية محفوظة لصالح Moroccan Mate. يُمنع النسخ الآلي أو إعادة النشر التجاري دون إذن مسبق.',
          ],
        },
        {
          id: 'acceptable-use',
          title: '5. الاستخدام المقبول',
          paragraphs: [
            'يُحظر إساءة استخدام نموذج الاتصال لإرسال رسائل مزعجة أو محاولة تعطيل الخادم.',
          ],
        },
        {
          id: 'changes',
          title: '6. تحديث الشروط',
          paragraphs: [
            'قد يتم تحديث هذه الشروط عند الحاجة. لأي استفسار يرجى مراسلتنا عبر صفحة الاتصال.',
          ],
        },
      ],
    },
  },
};
