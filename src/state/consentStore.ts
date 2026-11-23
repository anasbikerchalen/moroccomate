import { create } from 'zustand';

export const CONSENT_STORAGE_KEY = 'mm_cookie_consent_v1';

export type ConsentStatus = 'unset' | 'accepted' | 'rejected' | 'custom';

export interface ConsentPreferences {
  status: ConsentStatus;
  analytics: boolean;
  advertising: boolean;
  updatedAt: string | null;
}

interface ConsentStoreState extends ConsentPreferences {
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: { analytics: boolean; advertising: boolean }) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

function readStoredConsent(): ConsentPreferences {
  if (typeof window === 'undefined') {
    return { status: 'unset', analytics: false, advertising: false, updatedAt: null };
  }
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return { status: 'unset', analytics: false, advertising: false, updatedAt: null };
    }
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      (parsed.status === 'accepted' || parsed.status === 'rejected' || parsed.status === 'custom')
    ) {
      return {
        status: parsed.status,
        analytics: Boolean(parsed.analytics),
        advertising: Boolean(parsed.advertising),
        updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : null,
      };
    }
  } catch {
    // Ignore malformed storage
  }
  return { status: 'unset', analytics: false, advertising: false, updatedAt: null };
}

function syncGtagConsent(analytics: boolean, advertising: boolean) {
  if (typeof window === 'undefined') return;
  const gtagFn = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtagFn === 'function') {
    gtagFn('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: advertising ? 'granted' : 'denied',
      ad_user_data: advertising ? 'granted' : 'denied',
      ad_personalization: advertising ? 'granted' : 'denied',
    });
  }
  maybeLoadAdsenseScript();
}

export function maybeLoadAdsenseScript() {
  if (typeof document === 'undefined') return;
  const existing = document.querySelector(
    'script[data-mm-adsense="true"], script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
  );
  if (existing) return;

  const clientId = (import.meta.env.VITE_ADSENSE_CLIENT_ID || '').trim();
  if (!clientId || !/^ca-pub-\d{10,20}$/.test(clientId)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(clientId)}`;
  script.crossOrigin = 'anonymous';
  script.setAttribute('data-mm-adsense', 'true');
  document.head.appendChild(script);
}

function persistConsent(prefs: ConsentPreferences) {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore storage quota errors
    }
  }
  syncGtagConsent(prefs.analytics, prefs.advertising);
}

const initial = readStoredConsent();

export const useConsentStore = create<ConsentStoreState>((set) => ({
  ...initial,
  preferencesOpen: false,

  acceptAll: () => {
    const next: ConsentPreferences = {
      status: 'accepted',
      analytics: true,
      advertising: true,
      updatedAt: new Date().toISOString(),
    };
    persistConsent(next);
    set({ ...next, preferencesOpen: false });
  },

  rejectNonEssential: () => {
    const next: ConsentPreferences = {
      status: 'rejected',
      analytics: false,
      advertising: false,
      updatedAt: new Date().toISOString(),
    };
    persistConsent(next);
    set({ ...next, preferencesOpen: false });
  },

  savePreferences: ({ analytics, advertising }) => {
    const next: ConsentPreferences = {
      status: 'custom',
      analytics: Boolean(analytics),
      advertising: Boolean(advertising),
      updatedAt: new Date().toISOString(),
    };
    persistConsent(next);
    set({ ...next, preferencesOpen: false });
  },

  openPreferences: () => set({ preferencesOpen: true }),
  closePreferences: () => set({ preferencesOpen: false }),
}));
