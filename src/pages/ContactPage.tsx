import React, { useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { LocalizedLink } from '../components/ui/LocalizedLink';
import { TrustPageLayout } from '../components/layout/TrustPageLayout';
import { useLangPath } from '../utils/localeRouting';
import { TRUST_PAGES_I18N } from '../data/trustPagesI18n';
import { buildTrustPageSeo } from '../data/seo/seoEngine';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactPage() {
  const { lang } = useLangPath();
  const copy = TRUST_PAGES_I18N[lang].contact;
  const seo = useMemo(() => buildTrustPageSeo('contact', lang), [lang]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(copy.form.topics[0] || 'Other');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // Hidden honeypot

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const sidebarExtra = (
    <div className="rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-5 space-y-4">
      <h2 className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#C85A32] pb-3 border-b border-[#EADBCE]/70">
        {copy.sidebarTitle}
      </h2>
      <dl className="space-y-4">
        {copy.sidebarPoints.map((pt, idx) => (
          <div key={idx}>
            <dt className="font-sans text-xs font-semibold text-[#29231F]">{pt.label}</dt>
            <dd className="mt-1 font-sans text-xs leading-relaxed text-[#625950]">
              {pt.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMsg(copy.form.errorRequired);
      return;
    }
    if (!EMAIL_REGEX.test(cleanEmail)) {
      setErrorMsg(copy.form.errorEmail);
      return;
    }
    if (cleanMessage.length < 10) {
      setErrorMsg(copy.form.errorMessageShort);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          topic,
          message: cleanMessage,
          lang,
          website,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        if (data?.code === 'MAIL_NOT_CONFIGURED') {
          setErrorMsg(copy.form.errorNotConfigured);
        } else if (res.status === 429 || data?.code === 'RATE_LIMITED') {
          setErrorMsg(copy.form.errorRateLimit);
        } else {
          setErrorMsg(copy.form.errorGeneric);
        }
        return;
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setWebsite('');
    } catch {
      setErrorMsg(copy.form.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        image={seo.image}
        schemaType={seo.schemaType}
        schemaData={seo.schemaData}
        breadcrumbs={seo.breadcrumbs}
      />

      <TrustPageLayout
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
        metaLine={copy.metaLine}
        sidebarExtra={sidebarExtra}
      >
        {submitted ? (
          <div className="rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#234E35] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#29231F]">
                  {copy.form.successTitle}
                </h2>
                <p className="mt-2 font-sans text-sm sm:text-base leading-relaxed text-[#625950] max-w-xl">
                  {copy.form.successBody}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMsg(null);
                  }}
                  className="mt-5 px-4 py-2.5 rounded-lg border border-[#EADBCE] bg-white hover:bg-[#FAF7F2] text-xs font-semibold text-[#29231F] transition-colors cursor-pointer"
                >
                  {copy.form.sendAnother}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-[#EADBCE] bg-[#FFFDF9] p-6 sm:p-8 space-y-5"
          >
            {errorMsg && (
              <div
                role="alert"
                className="rounded-xl border border-[#C85A32]/35 bg-[#FDF1EC] px-4 py-3 flex items-start gap-2.5 text-xs sm:text-sm text-[#9E4222]"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Honeypot anti-spam field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-sans text-xs font-semibold text-[#29231F] mb-1.5"
                >
                  {copy.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={copy.form.namePlaceholder}
                  className="w-full rounded-xl border border-[#EADBCE] bg-white px-3.5 py-2.5 text-sm text-[#29231F] placeholder:text-[#A89F91] focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-sans text-xs font-semibold text-[#29231F] mb-1.5"
                >
                  {copy.form.emailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={copy.form.emailPlaceholder}
                  className="w-full rounded-xl border border-[#EADBCE] bg-white px-3.5 py-2.5 text-sm text-[#29231F] placeholder:text-[#A89F91] focus:outline-none focus:border-[#C85A32]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-topic"
                className="block font-sans text-xs font-semibold text-[#29231F] mb-1.5"
              >
                {copy.form.topicLabel}
              </label>
              <select
                id="contact-topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-xl border border-[#EADBCE] bg-white px-3.5 py-2.5 text-sm text-[#29231F] focus:outline-none focus:border-[#C85A32]"
              >
                {copy.form.topics.map((tOpt) => (
                  <option key={tOpt} value={tOpt}>
                    {tOpt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-sans text-xs font-semibold text-[#29231F] mb-1.5"
              >
                {copy.form.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                maxLength={4000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={copy.form.messagePlaceholder}
                className="w-full rounded-xl border border-[#EADBCE] bg-white px-3.5 py-2.5 text-sm text-[#29231F] placeholder:text-[#A89F91] focus:outline-none focus:border-[#C85A32] resize-y"
              />
            </div>

            <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-sans text-xs text-[#71685F] leading-relaxed">
                {copy.privacyNotice}{' '}
                <LocalizedLink
                  to="/privacy"
                  className="text-[#C85A32] underline underline-offset-4 hover:text-[#9E4222]"
                >
                  {copy.privacyLinkLabel}
                </LocalizedLink>
                .
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#29231F] hover:bg-[#C85A32] disabled:opacity-60 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{submitting ? copy.form.submittingLabel : copy.form.submitLabel}</span>
              </button>
            </div>
          </form>
        )}
      </TrustPageLayout>
    </>
  );
}
