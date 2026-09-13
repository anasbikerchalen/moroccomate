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
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = '/assets/home/backgrounds/homepage_default_image.png', // Default rich preview image
  breadcrumbs,
  schemaType,
  schemaData
}) => {
  const BASE_URL = 'https://moroccofriend.com';
  const siteName = 'MoroccoFriend';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Your honest guide to Morocco — city by city. Feel the vibe first, trust the data second, decide third.';
  const metaDescription = description || defaultDescription;
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const search = typeof window !== 'undefined' ? window.location.search : '';

  const canonicalUrl = canonical || (typeof window !== 'undefined' ? `${BASE_URL}${pathname}` : BASE_URL);
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

  // Helper to construct alternate hreflang URLs
  const getHrefForLang = (lang: string) => {
    const params = new URLSearchParams(search);
    params.set('lng', lang);
    return `${BASE_URL}${pathname}?${params.toString()}`;
  };

  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType || "TravelAgency",
    "name": fullTitle,
    "description": metaDescription,
    "url": url,
    "logo": `${BASE_URL}/ma.svg`,
    ...(schemaData || {
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marrakech",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.7917,
        "longitude": -7.0926
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Morocco",
        "geo": {
          "@type": "GeoShape",
          "box": "21.33 -17.02 35.92 -1.02"
        }
      }
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

      {/* Multilingual Alternate Links (hreflang) */}
      <link rel="alternate" href={getHrefForLang('en')} hrefLang="en" />
      <link rel="alternate" href={getHrefForLang('fr')} hrefLang="fr" />
      <link rel="alternate" href={getHrefForLang('ar')} hrefLang="ar" />
      <link rel="alternate" href={`${BASE_URL}${pathname}`} hrefLang="x-default" />

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

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};
