import React, { useMemo } from 'react';
import { ArrowUpRight, MapPin, Star } from 'lucide-react';
import { useLangPath } from '../../utils/localeRouting';
import { resolveBlogPlace } from '../../data/blog/placeResolver';
import { BLOG_UI_I18N } from '../../data/blog/blogUiI18n';
import type { PlaceRef } from '../../data/blog/types';
import { LocalizedLink } from '../ui/LocalizedLink';

interface InlinePlaceCardProps {
  placeRef: PlaceRef;
  note: string;
}

export const InlinePlaceCard: React.FC<InlinePlaceCardProps> = ({ placeRef, note }) => {
  const { lang } = useLangPath();
  const ui = BLOG_UI_I18N[lang];
  const resolved = useMemo(() => resolveBlogPlace(placeRef, lang), [placeRef, lang]);

  return (
    <aside className="my-7 rounded-2xl border border-[#E9D8C8] bg-[#FFFDF9] p-5 sm:p-6 shadow-[0_6px_24px_rgba(80,55,35,0.06)] hover:border-[#C9A84C]/60 hover:shadow-[0_10px_28px_rgba(80,55,35,0.10)] transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-sans text-xs">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C85A32]">
              {resolved.categoryLabel}
            </span>
            <span className="text-[#C9A84C]" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1 text-[#71685F] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" aria-hidden="true" />
              <span>
                {resolved.cityName} · {resolved.neighborhood}
              </span>
            </span>
            {resolved.rating !== null && (
              <span className="inline-flex items-center gap-1 bg-[#FAF3E0] text-[#8A6D1F] border border-[#C9A84C]/30 rounded-full px-2 py-0.5 text-[11px] font-semibold">
                <Star className="w-3 h-3 fill-[#C9A84C] text-[#C9A84C]" aria-hidden="true" />
                <span>{resolved.rating.toFixed(1)}</span>
              </span>
            )}
            {resolved.priceText && (
              <span className="bg-[#FAF3EA] text-[#625950] border border-[#E9D8C8] rounded-full px-2 py-0.5 text-[11px] font-medium">
                {resolved.priceText}
              </span>
            )}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#29231F] leading-snug">
            {resolved.name}
          </h3>

          <p className="font-sans text-sm leading-relaxed text-[#625950] max-w-xl">
            {note}
          </p>
        </div>

        <LocalizedLink
          to={resolved.url}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#C9A84C] hover:bg-[#B89438] text-white font-sans text-xs font-semibold shadow-xs transition-all duration-150 whitespace-nowrap shrink-0 self-start"
        >
          <span>{ui.viewListing}</span>
          <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" aria-hidden="true" />
        </LocalizedLink>
      </div>
    </aside>
  );
};
