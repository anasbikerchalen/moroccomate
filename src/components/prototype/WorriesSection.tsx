/**
 * 🧪 PROTOTYPE — "Things You're Worried About!" section component.
 *
 * Design review prototype (route: /prototype/worries).
 * NOT connected to the real listing pages yet — after the owner approves
 * the final design, this section will be wired into DetailView
 * (Eat / Sleep / Shop) and ActivityTemplateView (Things to Do).
 *
 * Each box shows:
 *   • a 1:1 square image that fits the search result (good/bad outcome)
 *     — while no image is chosen, a placeholder frame is shown
 *   • a short title (2-3 words)
 *   • a small description (2 lines max)
 *   • a variable tag (2 words max) that reflects VERIFIED web-search info
 *     about this specific place. If the research is not done yet, the tag
 *     renders as a gray "(not available yet)" chip — it is never invented.
 *     ⚠️ The verified chip's COLOR depends on WHAT THE TAG IS SAYING
 *     (its topic), not on good/bad — e.g. a tag about water renders light
 *     blue, a tag about money renders gold, a tag about noise renders
 *     indigo. The topic key is chosen per entry in the data file (tagColor).
 *     Chips are borderless color bubbles with text only (no icons), and
 *     sit BETWEEN the title and the description inside each box.
 */
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
 * ⚠️ Chip topic colors — the chip COLOR depends on WHAT THE TAG IS SAYING
 * (its topic), not on good/bad. Example: "Filtered Water" talks about
 * water → light blue chip. The topic key is chosen per entry via `tagColor`
 * in the data file (see the comment rules there).
 * Chips are BUBBLES ONLY: background color, no border, no icons.
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
  // PENDING: web research not done yet → gray "(not available yet)" bubble.
  if (box.state === 'pending') {
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

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#ece4d5] bg-white shadow-xs transition-all hover:border-[#C9A84C]/70 hover:shadow-sm">
      {/* 1:1 image area — fits the result (good/bad). Placeholder while pending. */}
      {box.image ? (
        <img
          src={box.image}
          alt={`${box.title} — ${box.tag}`}
          className="aspect-square w-full object-cover"
          loading="lazy"
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
        {/* No line clamping — the description is always 100% visible and the
            box grows flexibly to fit the text */}
        <p className="text-xs leading-relaxed text-[#66757D]">
          {box.description}
        </p>
      </div>
    </article>
  );
}

/**
 * The full "Things You're Worried About!" section.
 * Renders 5 worry boxes (one per universal traveler worry of the category).
 */
export default function WorriesSection({
  worries,
  className = '',
}: {
  worries: WorryBoxData[];
  className?: string;
}) {
  if (!worries.length) return null;

  return (
    <section className={className} aria-labelledby="worries-section-title">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FAF3EA] text-[#C85A32]">
          <HelpCircle className="h-4.5 w-4.5" />
        </span>
        <div>
          <h2 id="worries-section-title" className="font-display text-xl font-bold text-[#173042] sm:text-2xl">
            Things You're Worried About!
          </h2>
          <p className="text-xs text-[#66757D]">
            Honest answers to what usually worries travelers — checked from the web, never guessed.
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
