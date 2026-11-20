import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stamp, BookOpen, X } from 'lucide-react';
import { useAppLanguage, type AppLanguage } from '../../utils/localeRouting';

interface StampToastProps {
  visible: boolean;
  placeName: string;
  cityLabel: string;
  cityStampCount: number;
  onOpenPassport: () => void;
  onDismiss: () => void;
}

const STAMP_TOAST_COPY: Record<
  AppLanguage,
  {
    unlocked: (city: string, count: number) => string;
    added: (name: string) => string;
    view: string;
    dismissAria: string;
  }
> = {
  en: {
    unlocked: (city, c) => `${city} Stamp Unlocked · #${c}`,
    added: (n) => `${n} added to your Passport`,
    view: 'View',
    dismissAria: 'Dismiss stamp notice',
  },
  fr: {
    unlocked: (city, c) => `Tampon ${city} débloqué · #${c}`,
    added: (n) => `${n} ajouté à votre passeport`,
    view: 'Voir',
    dismissAria: 'Fermer la notification',
  },
  es: {
    unlocked: (city, c) => `Sello de ${city} desbloqueado · #${c}`,
    added: (n) => `${n} añadido a tu pasaporte`,
    view: 'Ver',
    dismissAria: 'Cerrar aviso de sello',
  },
  de: {
    unlocked: (city, c) => `${city}-Stempel freigeschaltet · #${c}`,
    added: (n) => `${n} zu deinem Reisepass hinzugefügt`,
    view: 'Ansehen',
    dismissAria: 'Stempel-Hinweis schließen',
  },
  ar: {
    unlocked: (city, c) => `تم فتح ختم ${city} · #${c}`,
    added: (n) => `تمت إضافة ${n} إلى جواز سفرك`,
    view: 'عرض',
    dismissAria: 'إغلاق الإشعار',
  },
};

export const StampToast: React.FC<StampToastProps> = ({
  visible,
  placeName,
  cityLabel,
  cityStampCount,
  onOpenPassport,
  onDismiss,
}) => {
  const lang = useAppLanguage();
  const copy = STAMP_TOAST_COPY[lang] || STAMP_TOAST_COPY.en;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] sm:max-w-sm rounded-2xl bg-[#173042] text-white border border-[#C9A84C]/50 shadow-xl px-4 py-3 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#C9A84C] flex items-center justify-center shrink-0 shadow-xs">
            <Stamp className="w-5 h-5 text-white" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#F5D782]">
              {copy.unlocked(cityLabel, cityStampCount)}
            </p>
            <p className="text-xs font-medium text-stone-100 truncate">
              {copy.added(placeName)}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenPassport}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-xs font-bold text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{copy.view}</span>
          </button>

          <button
            type="button"
            onClick={onDismiss}
            aria-label={copy.dismissAria}
            className="p-1 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StampToast;
