type EstimatePayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  zip?: unknown;
  notes?: unknown;
  website?: unknown;
};

type EstimateRow = {
  name: string;
  phone: string;
  email: string;
  service: string;
  zip: string;
  notes: string;
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function validate(payload: EstimatePayload): string | null {
  const name = asString(payload.name);
  const phone = asString(payload.phone);
  const email = asString(payload.email);
  const service = asString(payload.service);
  const zip = asString(payload.zip);

  if (!name) return 'Please enter your full name.';
  if (phone.replace(/\D/g, '').length < 10) return 'Please enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
  if (!service) return 'Please choose a service type.';
  if (!zip) return 'Please enter your town or zip code.';
  return null;
}

async function appendToSheet(env: Env, row: EstimateRow): Promise<boolean> {
  const webhook = env.ESTIMATE_SHEET_WEBHOOK?.trim();
  if (!webhook) return false;

  const body: Record<string, string> = { ...row };
  if (env.ESTIMATE_SHEET_SECRET) {
    body.secret = env.ESTIMATE_SHEET_SECRET;
  }

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(body),
    redirect: 'follow',
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Sheet webhook HTTP ${response.status}: ${text.slice(0, 200)}`);
  }

  try {
    const data = (await response.json()) as { ok?: boolean; error?: string };
    if (data.ok === false) {
      throw new Error(data.error || 'Sheet webhook returned ok:false');
    }
  } catch (err) {
    // Apps Script sometimes returns empty/non-JSON after redirect; HTTP 200 is enough
    if (err instanceof SyntaxError) return true;
    throw err;
  }

  return true;
}

async function sendEstimateEmail(env: Env, row: EstimateRow): Promise<boolean> {
  if (!env.ESTIMATE_TO || !env.ESTIMATE_FROM_EMAIL) {
    console.error('EMAIL config missing', {
      hasTo: Boolean(env.ESTIMATE_TO),
      hasFrom: Boolean(env.ESTIMATE_FROM_EMAIL),
    });
    return false;
  }

  const subject = `New estimate request — ${row.service} — ${row.name}`;
  const text = [
    'New free estimate request from the website.',
    '',
    `Name: ${row.name}`,
    `Phone: ${row.phone}`,
    `Email: ${row.email}`,
    `Service: ${row.service}`,
    `Location / Zip: ${row.zip}`,
    `Notes: ${row.notes || '(none)'}`,
  ].join('\n');

  const html = `
    <h2>New free estimate request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(row.name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(row.phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(row.email)}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escapeHtml(row.service)}</td></tr>
      <tr><td><strong>Location / Zip</strong></td><td>${escapeHtml(row.zip)}</td></tr>
      <tr><td><strong>Notes</strong></td><td>${escapeHtml(row.notes || '(none)')}</td></tr>
    </table>
  `;

  await env.EMAIL.send({
    to: env.ESTIMATE_TO,
    from: {
      email: env.ESTIMATE_FROM_EMAIL,
      name: env.ESTIMATE_FROM_NAME || 'VSA Infinity',
    },
    replyTo: row.email,
    subject,
    text,
    html,
  });

  return true;
}

async function handleEstimate(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed.' }, 405);
  }

  let payload: EstimatePayload;
  try {
    payload = (await request.json()) as EstimatePayload;
  } catch {
    return json({ ok: false, error: 'Invalid JSON body.' }, 400);
  }

  // Honeypot — bots fill hidden "website" field
  if (asString(payload.website)) {
    return json({ ok: true });
  }

  const error = validate(payload);
  if (error) {
    return json({ ok: false, error }, 400);
  }

  const row: EstimateRow = {
    name: asString(payload.name),
    phone: asString(payload.phone),
    email: asString(payload.email),
    service: asString(payload.service),
    zip: asString(payload.zip),
    notes: asString(payload.notes),
  };

  const sheetConfigured = Boolean(env.ESTIMATE_SHEET_WEBHOOK?.trim());
  let emailOk = false;
  let sheetOk = false;

  try {
    emailOk = await sendEstimateEmail(env, row);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('EMAIL.send failed', message, err);
  }

  if (sheetConfigured) {
    try {
      sheetOk = await appendToSheet(env, row);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('Sheet append failed', message, err);
    }
  }

  if (!emailOk && !sheetOk) {
    return json(
      {
        ok: false,
        error:
          'Unable to send your request right now. Please try again or email us directly.',
      },
      502,
    );
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/estimate') {
      return handleEstimate(request, env);
    }

    if (url.pathname.startsWith('/api/')) {
      return json({ ok: false, error: 'Not found.' }, 404);
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
