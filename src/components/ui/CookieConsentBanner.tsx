import React, { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { LocalizedLink } from './LocalizedLink';
import { useLangPath } from '../../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../../data/trustPagesI18n';
import { maybeLoadAdsenseScript, useConsentStore } from '../../state/consentStore';

export const CookieConsentBanner: React.FC = () => {
  const { lang } = useLangPath();
  const copy = TRUST_PAGES_I18N[lang].cookie;

  const status = useConsentStore((s) => s.status);
  const analytics = useConsentStore((s) => s.analytics);
  const advertising = useConsentStore((s) => s.advertising);
  const preferencesOpen = useConsentStore((s) => s.preferencesOpen);
  const acceptAll = useConsentStore((s) => s.acceptAll);
  const rejectNonEssential = useConsentStore((s) => s.rejectNonEssential);
  const savePreferences = useConsentStore((s) => s.savePreferences);
  const openPreferences = useConsentStore((s) => s.openPreferences);
  const closePreferences = useConsentStore((s) => s.closePreferences);

  const [draftAnalytics, setDraftAnalytics] = useState(analytics);
  const [draftAds, setDraftAds] = useState(advertising);

  useEffect(() => {
    setDraftAnalytics(analytics);
    setDraftAds(advertising);
  }, [analytics, advertising, preferencesOpen]);

  useEffect(() => {
    maybeLoadAdsenseScript();
  }, [status, advertising]);

  const showBanner = status === 'unset' && !preferencesOpen;

  return (
    <>
      {showBanner && (
        <aside
          role="region"
          aria-label={copy.bannerTitle}
          className="fixed bottom-0 inset-x-0 z-50 px-3 pb-3 sm:px-6 sm:pb-4 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-[1160px] mx-auto rounded-2xl border border-[#EADBCE] bg-[#FFFDF9]/98 backdrop-blur-md shadow-[0_12px_36px_rgba(41,35,31,0.14)] px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
            <div className="min-w-0 flex-1">
              <p className="font-sans text-xs font-semibold text-[#29231F] leading-snug">
                {copy.bannerTitle}
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-[#625950] leading-snug mt-0.5 line-clamp-2">
                {copy.bannerBody}{' '}
                <LocalizedLink
                  to="/privacy"
                  className="text-[#C85A32] font-medium underline underline-offset-2 hover:text-[#9E4222]"
                >
                  {copy.privacyLink}
                </LocalizedLink>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                type="button"
                onClick={openPreferences}
                className="px-3 py-2 text-xs font-medium text-[#625950] hover:text-[#29231F] underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
              >
                {copy.customize}
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-3.5 py-2 rounded-lg border border-[#EADBCE] bg-white hover:bg-[#FAF7F2] text-xs font-semibold text-[#29231F] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {copy.essentialOnly}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg bg-[#29231F] hover:bg-[#C85A32] text-xs font-semibold text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {copy.acceptAll}
              </button>
            </div>
          </div>
        </aside>
      )}

      {preferencesOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#29231F]/45 backdrop-blur-xs p-0 sm:p-4"
        >
          <div className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] shadow-[0_24px_60px_rgba(41,35,31,0.2)] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#EADBCE] flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C85A32] shrink-0" aria-hidden="true" />
                <div>
                  <h2
                    id="cookie-modal-title"
                    className="font-display text-lg font-semibold text-[#29231F]"
                  >
                    {copy.modalTitle}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={closePreferences}
                aria-label={copy.cancel}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#71685F] hover:text-[#29231F] hover:bg-[#FAF7F2] transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
              <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#625950]">
                {copy.modalSubtitle}
              </p>

              {/* Essential */}
              <div className="p-4 rounded-xl border border-[#EADBCE] bg-[#FAF7F2] flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-[#29231F]">
                    {copy.necessaryTitle}
                  </h3>
                  <p className="font-sans text-xs text-[#625950] mt-1 leading-relaxed">
                    {copy.necessaryDesc}
                  </p>
                </div>
                <span className="font-sans text-[11px] font-semibold text-[#234E35] whitespace-nowrap shrink-0 pt-0.5">
                  {copy.alwaysActive}
                </span>
              </div>

              {/* Analytics Toggle */}
              <label className="p-4 rounded-xl border border-[#EADBCE] bg-white flex items-start justify-between gap-4 cursor-pointer hover:border-[#C9A84C]/60 transition-colors">
                <div>
                  <span className="font-sans text-sm font-semibold text-[#29231F] block">
                    {copy.analyticsTitle}
                  </span>
                  <span className="font-sans text-xs text-[#625950] mt-1 leading-relaxed block">
                    {copy.analyticsDesc}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={draftAnalytics}
                  onChange={(e) => setDraftAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#C85A32] rounded cursor-pointer shrink-0"
                />
              </label>

              {/* Advertising Toggle */}
              <label className="p-4 rounded-xl border border-[#EADBCE] bg-white flex items-start justify-between gap-4 cursor-pointer hover:border-[#C9A84C]/60 transition-colors">
                <div>
                  <span className="font-sans text-sm font-semibold text-[#29231F] block">
                    {copy.advertisingTitle}
                  </span>
                  <span className="font-sans text-xs text-[#625950] mt-1 leading-relaxed block">
                    {copy.advertisingDesc}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={draftAds}
                  onChange={(e) => setDraftAds(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#C85A32] rounded cursor-pointer shrink-0"
                />
              </label>
            </div>

            <div className="px-5 py-4 border-t border-[#EADBCE] bg-[#FAF7F2] flex flex-wrap items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-3.5 py-2 rounded-lg border border-[#EADBCE] bg-white hover:bg-[#FAF7F2] text-xs font-semibold text-[#29231F] transition-colors cursor-pointer"
              >
                {copy.essentialOnly}
              </button>
              <button
                type="button"
                onClick={() =>
                  savePreferences({ analytics: draftAnalytics, advertising: draftAds })
                }
                className="px-4 py-2 rounded-lg bg-[#29231F] hover:bg-[#C85A32] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copy.saveChoices}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
