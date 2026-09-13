# Morocco Finder — Standalone Website

A standalone, Finder-only travel website: the visitor picks a Moroccan city and what they're looking for (Food, Stays, Things to Do, or Shopping), answers a short quiz, and gets personalized place recommendations with Savvy trust ratings.

This project is **completely independent** — it shares no code with the bigger Morocco Travel OS website and can be deployed on its own.

## 🚀 Run it

```bash
npm install
npm run dev      # development server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 🗺️ The flow

```
Homepage (/)            → pick a city + a category
   ↓                        (gentle signs guide the visitor)
Quiz (/finder/:city/:category?start=quiz)
   ↓
Personalized results    → listings with Savvy ratings, filters, sorting
   ↓
"Back to Home" → homepage
```

## 📁 Structure

```
src/
├── pages/HomePage.tsx        # Homepage: city + categories + signs
├── components/finder/        # All Finder screens (quiz, results, details, filters)
├── components/savvy/         # Savvy score badges & place profiles
├── components/ui/            # SEO tags, error boundary
├── state/                    # Stores: what the user picked (city, quiz, favorites)
├── listings/                 # REAL place data (Eat, Sleep, Things, Shopping)
├── data/                     # Cities, quiz questions, Savvy ratings, tourism areas
├── engine/                   # Savvy score engine
├── parameters/               # Quiz parameter definitions
├── types/                    # Shared types
├── utils/                    # Image resolver, time engine, city colors
├── locales/                  # English, French, Arabic
├── assets/images/            # Finder + quiz illustrations
└── i18n.ts                   # Language setup
```

## 📌 Important notes

- **Real data only** — all places, ratings, and reviews come from the structured local files in `src/listings/` and `src/data/`. No generative AI is used to create or fetch places. This data is collected for future machine-learning models — keep it structured.
- **Data sync** — this website is a standalone copy. If places, quiz data, Savvy ratings, or images are updated in the bigger Morocco Travel OS website, the same files must be copied here. See `FINDER_WEBSITE_STANDALONE.md` in the parent workspace for the full file list and sync process.
