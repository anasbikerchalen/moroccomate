import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface StayFAQSectionProps {
  propertyName: string;
  ownerAnswer: string;
}

export const StayFAQSection: React.FC<StayFAQSectionProps> = ({
  propertyName,
  ownerAnswer,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const question = `Who is the owner of ${propertyName}?`;

  return (
    <section 
      className="mb-10 rounded-2xl border border-[#e8dfcf] bg-[#fdfbf7] p-6 shadow-xs"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      <div className="flex items-center gap-2.5 mb-4 border-b border-[#e8dfcf]/70 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-[#8f6e24]">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold text-[#1c1917]">
            Frequently Asked Questions
          </h2>
          <p className="text-[11px] font-medium text-[#7e6f5e]">
            Essential owner and property information for travelers
          </p>
        </div>
      </div>

      <div 
        className="rounded-xl border border-[#e8dfcf] bg-white transition-all overflow-hidden"
        itemScope 
        itemProp="mainEntity" 
        itemType="https://schema.org/Question"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-4 text-left font-serif text-sm sm:text-base font-semibold text-[#1c1917] hover:text-[#A34E36] transition-colors cursor-pointer"
          aria-expanded={isOpen}
        >
          <span itemProp="name">{question}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-[#7e6f5e] transition-transform duration-200 shrink-0 ml-3",
              isOpen && "rotate-180 text-[#A34E36]"
            )}
          />
        </button>

        {isOpen && (
          <div 
            className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#44382c] leading-relaxed border-t border-[#f4ede2]"
            itemScope 
            itemProp="acceptedAnswer" 
            itemType="https://schema.org/Answer"
          >
            <p itemProp="text">{ownerAnswer}</p>
          </div>
        )}
      </div>
    </section>
  );
};
