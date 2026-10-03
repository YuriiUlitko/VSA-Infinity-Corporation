type EstimatePayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  zip?: unknown;
  notes?: unknown;
  website?: unknown;
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

  const name = asString(payload.name);
  const phone = asString(payload.phone);
  const email = asString(payload.email);
  const service = asString(payload.service);
  const zip = asString(payload.zip);
  const notes = asString(payload.notes);

  const subject = `New estimate request — ${service} — ${name}`;
  const text = [
    'New free estimate request from the website.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Location / Zip: ${zip}`,
    `Notes: ${notes || '(none)'}`,
  ].join('\n');

  const html = `
    <h2>New free estimate request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escapeHtml(service)}</td></tr>
      <tr><td><strong>Location / Zip</strong></td><td>${escapeHtml(zip)}</td></tr>
      <tr><td><strong>Notes</strong></td><td>${escapeHtml(notes || '(none)')}</td></tr>
    </table>
  `;

  try {
    if (!env.ESTIMATE_TO || !env.ESTIMATE_FROM_EMAIL) {
      console.error('EMAIL config missing', {
        hasTo: Boolean(env.ESTIMATE_TO),
        hasFrom: Boolean(env.ESTIMATE_FROM_EMAIL),
      });
      return json(
        {
          ok: false,
          error:
            'Unable to send your request right now. Please try again or email us directly.',
        },
        502,
      );
    }

    await env.EMAIL.send({
      to: env.ESTIMATE_TO,
      from: {
        email: env.ESTIMATE_FROM_EMAIL,
        name: env.ESTIMATE_FROM_NAME || 'VSA Infinity',
      },
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('EMAIL.send failed', message, err);
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
