import nodemailer from 'nodemailer';

export interface ContactPayload {
  name: string;
  email: string;
  topic: string;
  message: string;
  lang?: string;
  website?: string; // Honeypot field (must remain empty)
}

export interface ContactResult {
  status: number;
  body: {
    ok: boolean;
    code?: string;
    message?: string;
  };
}

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const rateBuckets = new Map<string, number[]>();

const VALID_LANGS = new Set(['en', 'fr', 'es', 'de', 'ar']);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function stripHeaderControls(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const timestamps = (rateBuckets.get(clientIp) || []).filter(
    (ts) => now - ts < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_MAX_REQUESTS) {
    rateBuckets.set(clientIp, timestamps);
    return false;
  }
  timestamps.push(now);
  rateBuckets.set(clientIp, timestamps);
  if (rateBuckets.size > 1000) {
    for (const [key, list] of rateBuckets.entries()) {
      if (list.every((ts) => now - ts >= RATE_WINDOW_MS)) {
        rateBuckets.delete(key);
      }
    }
  }
  return true;
}

export async function processContactSubmission(
  rawBody: unknown,
  clientIp: string
): Promise<ContactResult> {
  if (!checkRateLimit(clientIp || 'unknown')) {
    return {
      status: 429,
      body: { ok: false, code: 'RATE_LIMITED', message: 'Too many requests. Please try again later.' },
    };
  }

  if (!rawBody || typeof rawBody !== 'object') {
    return {
      status: 400,
      body: { ok: false, code: 'INVALID_BODY', message: 'Invalid request payload.' },
    };
  }

  const data = rawBody as Record<string, unknown>;

  // Honeypot check: silently accept without dispatching mail
  if (typeof data.website === 'string' && data.website.trim().length > 0) {
    return {
      status: 200,
      body: { ok: true },
    };
  }

  const name = stripHeaderControls(typeof data.name === 'string' ? data.name : '');
  const email = stripHeaderControls(typeof data.email === 'string' ? data.email : '');
  const topic = stripHeaderControls(typeof data.topic === 'string' ? data.topic : '');
  const message = (typeof data.message === 'string' ? data.message : '').trim();
  const rawLang = typeof data.lang === 'string' ? data.lang.toLowerCase().trim() : 'en';
  const lang = VALID_LANGS.has(rawLang) ? rawLang : 'en';

  if (name.length < 2 || name.length > 100) {
    return {
      status: 400,
      body: { ok: false, code: 'INVALID_NAME', message: 'Name must be between 2 and 100 characters.' },
    };
  }

  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return {
      status: 400,
      body: { ok: false, code: 'INVALID_EMAIL', message: 'Please provide a valid email address.' },
    };
  }

  if (topic.length < 2 || topic.length > 120) {
    return {
      status: 400,
      body: { ok: false, code: 'INVALID_TOPIC', message: 'Please choose or enter a valid topic.' },
    };
  }

  if (message.length < 10 || message.length > 4000) {
    return {
      status: 400,
      body: { ok: false, code: 'INVALID_MESSAGE', message: 'Message must be between 10 and 4000 characters.' },
    };
  }

  const toEmail = (process.env.CONTACT_TO_EMAIL || '').trim();
  const resendApiKey = (process.env.RESEND_API_KEY || '').trim();
  const smtpHost = (process.env.SMTP_HOST || '').trim();
  const smtpUser = (process.env.SMTP_USER || '').trim();
  const smtpPass = (process.env.SMTP_PASS || '').trim();
  const smtpPort = Number(process.env.SMTP_PORT || '587');

  if (!toEmail || (!resendApiKey && (!smtpHost || !smtpUser || !smtpPass))) {
    return {
      status: 503,
      body: {
        ok: false,
        code: 'MAIL_NOT_CONFIGURED',
        message: 'Contact delivery is not configured yet on the server.',
      },
    };
  }

  const subject = `[Moroccan Mate · ${lang.toUpperCase()}] ${topic} — ${name}`;
  const textBody = [
    `New contact message from Moroccan Mate`,
    `Language: ${lang.toUpperCase()}`,
    `Name: ${name}`,
    `Reply-To: ${email}`,
    `Topic: ${topic}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #29231F; max-width: 600px; line-height: 1.6;">
      <h2 style="margin: 0 0 12px; font-size: 18px; color: #173042;">New Moroccan Mate Contact Message</h2>
      <p style="margin: 0 0 16px; font-size: 13px; color: #71685F;">
        <strong>Name:</strong> ${escapeHtml(name)}<br />
        <strong>Reply-To:</strong> ${escapeHtml(email)}<br />
        <strong>Topic:</strong> ${escapeHtml(topic)}<br />
        <strong>Language:</strong> ${escapeHtml(lang.toUpperCase())}
      </p>
      <div style="padding: 16px; background: #FAF7F2; border: 1px solid #EADBCE; border-radius: 12px; white-space: pre-wrap; font-size: 14px;">${escapeHtml(message)}</div>
    </div>
  `;

  try {
    if (resendApiKey) {
      const fromEmail =
        (process.env.CONTACT_FROM_EMAIL || '').trim() ||
        'Moroccan Mate <onboarding@resend.dev>';

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject,
          text: textBody,
          html: htmlBody,
        }),
      });

      if (!resendRes.ok) {
        console.error('[api/contact] Resend API rejected request:', resendRes.status);
        return {
          status: 502,
          body: { ok: false, code: 'DELIVERY_FAILED', message: 'Unable to send message right now.' },
        };
      }

      return { status: 200, body: { ok: true } };
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number.isFinite(smtpPort) ? smtpPort : 587,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fromAddress = (process.env.CONTACT_FROM_EMAIL || '').trim() || smtpUser;

    await transporter.sendMail({
      from: fromAddress,
      to: toEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return { status: 200, body: { ok: true } };
  } catch (err) {
    console.error('[api/contact] Error sending email:', err instanceof Error ? err.message : 'Unknown');
    return {
      status: 502,
      body: { ok: false, code: 'DELIVERY_FAILED', message: 'Unable to send message right now.' },
    };
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, code: 'METHOD_NOT_ALLOWED' });
  }

  let body: unknown = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, code: 'INVALID_JSON' });
    }
  }

  const forwardedFor = req.headers?.['x-forwarded-for'];
  const clientIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : typeof forwardedFor === 'string'
      ? forwardedFor.split(',')[0].trim()
      : req.socket?.remoteAddress || 'unknown';

  const result = await processContactSubmission(body, clientIp);
  return res.status(result.status).json(result.body);
}
