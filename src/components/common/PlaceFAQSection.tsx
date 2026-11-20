import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { FaqEntry } from '../../data/seo/faqEngine';
import { useAppLanguage } from '../../utils/localeRouting';
import { getPlaceUiCopy } from '../../data/placeUiI18n';

interface PlaceFAQSectionProps {
  faqs: FaqEntry[];
  placeName: string;
  subtitle?: string;
  className?: string;
  defaultOpenIndex?: number | null;
}

export const PlaceFAQSection: React.FC<PlaceFAQSectionProps> = ({
  faqs,
  placeName,
  subtitle,
  className,
  defaultOpenIndex = 0,
}) => {
  const lang = useAppLanguage();
  const ui = getPlaceUiCopy(lang);
  const resolvedSubtitle = subtitle || ui.faq.defaultSubtitle;
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    if (defaultOpenIndex !== null && defaultOpenIndex >= 0 && faqs.length > defaultOpenIndex) {
      initial.add(defaultOpenIndex);
    }
    return initial;
  });

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const allExpanded = openIndices.size === faqs.length;
  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndices(new Set());
    } else {
      setOpenIndices(new Set(faqs.map((_, i) => i)));
    }
  };

  return (
    <section
      aria-labelledby="place-faq-heading"
      className={cn(
        'rounded-3xl border border-[#E8DFCF] bg-[#FDFBF7] p-6 sm:p-8 shadow-xs',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#EDE4D5]">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-[#8A6D1F]">
            <HelpCircle className="h-4.5 w-4.5" />
          </div>
          <div>
            <h2
              id="place-faq-heading"
              className="font-serif text-xl sm:text-2xl font-bold text-[#142333] tracking-tight"
            >
              {ui.faq.headingForPlace(placeName)}
            </h2>
            <p className="text-xs text-[#6B5D4D] mt-0.5">{resolvedSubtitle}</p>
          </div>
        </div>

        {faqs.length > 1 && (
          <button
            type="button"
            onClick={toggleAll}
            className="self-start sm:self-center text-xs font-semibold text-[#8A6D1F] hover:text-[#142333] px-3 py-1.5 rounded-lg border border-[#E5DCCE] bg-white hover:bg-[#FAF7F2] transition-colors cursor-pointer shrink-0 tabular-nums"
          >
            {allExpanded ? ui.faq.collapseAll : ui.faq.expandAll(faqs.length)}
          </button>
        )}
      </div>

      <div className="divide-y divide-[#EDE4D5] rounded-2xl border border-[#E8DFCF] bg-white overflow-hidden">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.has(idx);
          const panelId = `place-faq-panel-${idx}`;
          const btnId = `place-faq-btn-${idx}`;

          return (
            <div key={`${faq.question}-${idx}`} className="transition-colors">
              <h3>
                <button
                  id={btnId}
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif text-sm sm:text-base font-semibold text-[#1C1917] hover:text-[#A34E36] hover:bg-[#FAF8F4] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 text-[#7E6F5E] transition-transform duration-200 shrink-0',
                      isOpen && 'rotate-180 text-[#A34E36]'
                    )}
                  />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                hidden={!isOpen}
                className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#44382C] leading-relaxed border-t border-[#F4EDE2] bg-[#FFFDF9]"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlaceFAQSection;
