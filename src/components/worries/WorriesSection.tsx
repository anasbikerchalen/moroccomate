import React, { useState } from 'react';
import {
  Receipt,
  Droplets,
  ChefHat,
  Megaphone,
  Clock,
  Sparkles,
  ShieldCheck,
  Moon,
  Camera,
  AlertTriangle,
  Tag as TagIcon,
  Gem,
  Mountain,
  Award,
  RotateCcw,
  ImageOff,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';
import type { WorryBoxData, WorryIconKey, TagColorKey } from '../../data/prototype/worriesPrototype';
import { useAppLanguage } from '../../utils/localeRouting';
import { getPlaceUiCopy, type PlaceUiCopy } from '../../data/placeUiI18n';

/** Map data icon keys → lucide icons */
const WORRY_ICONS: Record<WorryIconKey, LucideIcon> = {
  receipt: Receipt,
  droplets: Droplets,
  chef: ChefHat,
  megaphone: Megaphone,
  clock: Clock,
  sparkles: Sparkles,
  shield: ShieldCheck,
  moon: Moon,
  camera: Camera,
  warning: AlertTriangle,
  tag: TagIcon,
  gem: Gem,
  mountain: Mountain,
  award: Award,
  rotate: RotateCcw,
};

/**
 * Chip topic colors — the chip COLOR depends on WHAT THE TAG IS SAYING
 * (its topic), not on good/bad.
 * Map: water (light blue) · money (gold) · hygiene (mint) · safety (green)
 *      noise (indigo) · food (orange) · craft (purple) · alert (rose)
 */
const TAG_TOPIC_STYLES: Record<TagColorKey, string> = {
  water: 'bg-sky-50 text-sky-800',
  money: 'bg-amber-50 text-amber-800',
  hygiene: 'bg-teal-50 text-teal-800',
  safety: 'bg-emerald-50 text-emerald-800',
  noise: 'bg-indigo-50 text-indigo-800',
  food: 'bg-orange-50 text-orange-800',
  craft: 'bg-purple-50 text-purple-800',
  alert: 'bg-rose-50 text-rose-800',
};

/** Chip look for each tag state — text-only color bubble, no border, no icon */
function TagChip({ box, ui }: { box: WorryBoxData; ui: PlaceUiCopy }) {
  const isPending =
    box.state === 'pending' ||
    !box.tag ||
    box.tag.toLowerCase().includes('not available');

  // PENDING: web research not done yet → gray "(not available yet)" bubble.
  if (isPending) {
    return (
      <span
        className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-semibold italic text-[#8a8273]"
        title={ui.worries.pendingResearchTitle}
      >
        {ui.worries.notAvailableYet}
      </span>
    );
  }

  // VERIFIED: bubble color follows the tag's TOPIC (e.g. water → light blue).
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold ${TAG_TOPIC_STYLES[box.tagColor ?? 'alert']}`}
      title={box.source}
    >
      {box.tag}
    </span>
  );
}

/** One worry box: 1:1 image (or placeholder) + title + description + tag chip */
function WorryCard({ box, ui }: { box: WorryBoxData; ui: PlaceUiCopy }) {
  const Icon = WORRY_ICONS[box.icon] ?? HelpCircle;
  const [imageError, setImageError] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#ece4d5] bg-white shadow-xs transition-all hover:border-[#C9A84C]/70 hover:shadow-sm">
      {/* 1:1 image area — fits the result (good/bad), or clean icon badge for verified icon-only categories */}
      {box.image && !imageError ? (
        <img
          src={box.image}
          alt={`${box.title} — ${box.tag}`}
          className="aspect-square w-full object-cover"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : box.state === 'verified' && !imageError ? (
        <div
          className={`flex aspect-square w-full flex-col items-center justify-center gap-2 border-b ${
            box.tone === 'caution'
              ? 'border-amber-200/70 bg-gradient-to-br from-amber-50/80 via-[#FAF7F2] to-rose-50/60'
              : 'border-[#e6dccb] bg-gradient-to-br from-emerald-50/70 via-[#FAF7F2] to-amber-50/40'
          }`}
        >
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border bg-white shadow-xs ${
              box.tone === 'caution'
                ? 'border-amber-200 text-amber-700'
                : 'border-emerald-200/80 text-[#1F5A3B]'
            }`}
          >
            <Icon className="h-8 w-8" strokeWidth={1.65} />
          </div>
        </div>
      ) : (
        <div className="flex aspect-square w-full flex-col items-center justify-center gap-1.5 border-b border-dashed border-[#e0d6c3] bg-[#FAF7F2] text-[#b3a78f]">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide">
            <ImageOff className="h-3 w-3" />
            {ui.worries.imagePending}
          </span>
        </div>
      )}

      {/* Text content — tag bubble sits UNDER the title, ABOVE the description */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="text-sm font-bold leading-snug text-[#173042]">{box.title}</h3>
        <div>
          <TagChip box={box} ui={ui} />
        </div>
        <p className="text-xs leading-relaxed text-[#66757D]">
          {box.description}
        </p>
      </div>
    </article>
  );
}

export interface WorriesSectionProps {
  worries: WorryBoxData[];
  className?: string;
  title?: string;
  subtitle?: string;
}

/**
 * "Things You're Worried About!" section component.
 * Renders 5 worry boxes (one per traveler worry of the category).
 */
export default function WorriesSection({
  worries,
  className = '',
  title,
  subtitle,
}: WorriesSectionProps) {
  const lang = useAppLanguage();
  const ui = getPlaceUiCopy(lang);
  const resolvedTitle = title || ui.worries.title;
  const resolvedSubtitle = subtitle || ui.worries.subtitleDefault;

  if (!worries || !worries.length) return null;

  // Only show if at least ONE worry has real verified data (not "not available" / "pending")
  const hasRealData = worries.some(
    (w) => w.state === 'verified' || (w.tag && !w.tag.toLowerCase().includes('not available'))
  );
  if (!hasRealData) return null;

  return (
    <section className={className} aria-labelledby="worries-section-title">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FAF3EA] text-[#C85A32]">
          <HelpCircle className="h-4.5 w-4.5" />
        </span>
        <div>
          <h2 id="worries-section-title" className="font-display text-xl font-bold text-[#173042] sm:text-2xl">
            {resolvedTitle}
          </h2>
          <p className="text-xs text-[#66757D]">
            {resolvedSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {worries.map((box) => (
          <WorryCard key={box.id} box={box} ui={ui} />
        ))}
      </div>
    </section>
  );
}
