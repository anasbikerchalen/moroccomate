/**
 * 🧪 PROTOTYPE PAGE — design review for the "Things You're Worried About!"
 * section (route: /prototype/worries).
 *
 * TEMPORARY: this page exists only so the owner can review and refine the
 * section design before it is implemented on the real listing pages.
 * Easy to remove: delete this file + the /prototype/worries route in App.tsx.
 *
 * Everything here uses prototype sample data — no real listing is touched.
 */
import { Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical, UtensilsCrossed, BedDouble, Compass, ShoppingBag } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import WorriesSection from '../components/prototype/WorriesSection';
import {
  SAMPLE_EAT_WORRIES,
  SAMPLE_SLEEP_WORRIES,
  SAMPLE_THINGS_WORRIES,
  SAMPLE_SHOP_WORRIES,
} from '../data/prototype/worriesPrototype';

const CATEGORY_BLOCKS = [
  {
    key: 'eat',
    label: 'Eat (Food)',
    sampleName: 'Sample Eat Place — prototype preview',
    icon: UtensilsCrossed,
    worries: SAMPLE_EAT_WORRIES,
  },
  {
    key: 'sleep',
    label: 'Sleep (Stays)',
    sampleName: 'Sample Stay Place — prototype preview',
    icon: BedDouble,
    worries: SAMPLE_SLEEP_WORRIES,
  },
  {
    key: 'things',
    label: 'Things to Do (Activities)',
    sampleName: 'Sample Activity — prototype preview',
    icon: Compass,
    worries: SAMPLE_THINGS_WORRIES,
  },
  {
    key: 'shop',
    label: 'Shopping',
    sampleName: 'Sample Shop — prototype preview',
    icon: ShoppingBag,
    worries: SAMPLE_SHOP_WORRIES,
  },
];

export default function WorriesPrototypePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      <SEO title="Prototype — Worries Section" />

      {/* Prototype header */}
      <header className="sticky top-0 z-40 border-b border-[#ece4d5] bg-[#FAF9F5]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#66757D] transition-colors hover:text-[#173042]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/50 bg-[#FAF3EA] px-3 py-1 text-xs font-bold text-[#8a6d1f]">
            <FlaskConical className="h-3.5 w-3.5" />
            PROTOTYPE — design review
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-[#173042] sm:text-3xl">
            "Things You're Worried About!" — section prototype
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#66757D]">
            This is how the new worries section will look on every listing page, for all 4
            categories (5 boxes each). Review the design and send your edits — nothing is
            connected to the real listing pages yet.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
              <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-1 italic text-[#8a8273]">
                Gray bubble = web research not done yet → shows "(not available yet)"
              </span>
              <span className="text-[#b3a78f]">
                Verified bubble color = what the tag is talking about:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold">
              <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-sky-800">
                Water → light blue
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-amber-800">
                Money → gold
              </span>
              <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-teal-800">
                Hygiene → mint
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-800">
                Safety → green
              </span>
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-indigo-800">
                Noise → indigo
              </span>
              <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-orange-800">
                Food → orange
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-purple-800">
                Craft → purple
              </span>
              <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-rose-800">
                Alert → rose
              </span>
            </div>
            <p className="text-[11px] italic text-[#b3a78f]">
              Bubbles are color-only pills: no border, no icons — just the tag text. The box
              image and the tag wording carry the good/bad outcome.
            </p>
          </div>
        </div>

        {/* One section preview per category */}
        <div className="space-y-10">
          {CATEGORY_BLOCKS.map(({ key, label, sampleName, icon: CatIcon, worries }) => (
            <div key={key}>
              <div className="mb-3 flex items-center gap-2 border-b border-[#ece4d5] pb-2">
                <CatIcon className="h-4 w-4 text-[#C9A84C]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#66757D]">
                  {label}
                </span>
                <span className="ml-auto text-[11px] italic text-[#b3a78f]">{sampleName}</span>
              </div>
              <WorriesSection worries={worries} />
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-[#ece4d5] pt-4 text-[11px] leading-relaxed text-[#b3a78f]">
          Reminder: the colored chips above are mock examples for design review only — one per
          topic color so you can judge the full palette. In the real implementation, every
          description and tag is filled one place at a time, only after web-search verification.
          Unverified worries stay "(not available yet)" — nothing is ever invented. The chip
          color is chosen from what the verified tag talks about (e.g. water → light blue),
          never randomly.
        </p>
      </main>
    </div>
  );
}
