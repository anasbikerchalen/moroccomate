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
function TagChip({ box }: { box: WorryBoxData }) {
  const isPending =
    box.state === 'pending' ||
    !box.tag ||
    box.tag.toLowerCase().includes('not available');

  // PENDING: web research not done yet → gray "(not available yet)" bubble.
  if (isPending) {
    return (
      <span
        className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-semibold italic text-[#8a8273]"
        title="Web research not done yet — this answer will only appear after verification."
      >
        (not available yet)
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
function WorryCard({ box }: { box: WorryBoxData }) {
  const Icon = WORRY_ICONS[box.icon] ?? HelpCircle;
  const [imageError, setImageError] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#ece4d5] bg-white shadow-xs transition-all hover:border-[#C9A84C]/70 hover:shadow-sm">
      {/* 1:1 image area — fits the result (good/bad). Placeholder if absent or load error */}
      {box.image && !imageError ? (
        <img
          src={box.image}
          alt={`${box.title} — ${box.tag}`}
          className="aspect-square w-full object-cover"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex aspect-square w-full flex-col items-center justify-center gap-1.5 border-b border-dashed border-[#e0d6c3] bg-[#FAF7F2] text-[#b3a78f]">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide">
            <ImageOff className="h-3 w-3" />
            Image pending
          </span>
        </div>
      )}

      {/* Text content — tag bubble sits UNDER the title, ABOVE the description */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="text-sm font-bold leading-snug text-[#173042]">{box.title}</h3>
        <div>
          <TagChip box={box} />
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
  title = "Things You're Worried About!",
  subtitle = 'Honest answers to what usually worries travelers — checked from the web, never guessed.',
}: WorriesSectionProps) {
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
            {title}
          </h2>
          <p className="text-xs text-[#66757D]">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {worries.map((box) => (
          <WorryCard key={box.id} box={box} />
        ))}
      </div>
    </section>
  );
}
