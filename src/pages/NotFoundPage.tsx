import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

/**
 * 404 — "Page not found" for the standalone Finder website.
 * Replaces the old behavior where unknown URLs silently showed the homepage
 * (soft 404, bad for SEO). Tells search engines this page should not be indexed.
 */
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29231F] font-sans relative flex items-center justify-center px-6">
      <Helmet>
        <title>Page Not Found | Morocco Finder</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="This page could not be found on Morocco Finder." />
      </Helmet>

      {/* Background Texture (matches the rest of the site) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-grain.svg')] bg-repeat" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/10 text-[#C9A84C]">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="font-display text-6xl md:text-7xl font-bold text-[#29231F] leading-none">404</p>
          <h1 className="text-xl md:text-2xl font-semibold text-[#29231F]">This page took a wrong turn</h1>
          <p className="text-sm md:text-base text-[#71685F] max-w-sm mx-auto">
            The page you're looking for doesn't exist — but your next favorite Moroccan spot is still waiting.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C9A84C] hover:bg-[#b5953f] text-white font-medium shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
