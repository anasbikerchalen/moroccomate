import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  schemaType?: string;
  schemaData?: Record<string, any>;
  faq?: { question: string; answer: string }[];
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = '/assets/home/backgrounds/homepage_default_image.jpg', // Default rich preview image (ships locally in public/)
  breadcrumbs,
  schemaType,
  schemaData,
  faq
}) => {
  const BASE_URL = 'https://moroccanmate.com';
  const siteName = 'Moroccan Mate';
  const fullTitle = title 
    ? (title.toLowerCase().includes(siteName.toLowerCase()) ? title : `${title} | ${siteName}`) 
    : `${siteName} | Eat, Sleep, Things & Shopping in Morocco`;
  const defaultDescription = 'Your honest guide to Morocco — city by city. Feel the vibe first, trust the data second, decide third.';
  const metaDescription = description || defaultDescription;
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const canonicalUrl = canonical
    ? (canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`)
    : (typeof window !== 'undefined' ? `${BASE_URL}${pathname}` : BASE_URL);
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  // Helper to construct alternate hreflang URLs

  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType || "WebSite",
    "name": schemaType ? fullTitle : siteName,
    ...(schemaType ? {} : { "alternateName": ["MoroccanMate"] }),
    "description": metaDescription,
    "url": canonicalUrl,
    "logo": `${BASE_URL}/favicon.svg`,
    ...(schemaData || {
      "inLanguage": ["en", "fr", "ar"]
    })
  };


  const breadcrumbJsonLd = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": b.item.startsWith('http') ? b.item : `${BASE_URL}${b.item}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Multilingual Alternate Links (hreflang) — removed: language switches in place,
          so there are no separate per-language pages for crawlers to index */}

      {/* Geographic Metadata Tags */}
      <meta name="geo.region" content="MA" />
      <meta name="geo.position" content="31.7917;-7.0926" />
      <meta name="ICBM" content="31.7917, -7.0926" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(baseJsonLd)}
      </script>

      {breadcrumbJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}

      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};
