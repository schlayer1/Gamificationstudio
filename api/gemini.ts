/**
 * Vercel Serverless Function: /api/gemini
 * Unterstützt Text- und Multimodale (Bilder/Arbeitsblätter) Gemini-Anfragen
 * über das sichere Vercel-Secret GEMINI_API_KEY.
 */

const CANDIDATE_FLASH_MODELS = [
  'gemini-4-hydrogen',
  'gemini-flash-lite-latest',
  'gemini-3.5-flash-lite',
  'gemini-3.8-flash',
  'gemini-3.6-flash',
  'gemini-flash-latest',
];

const REQUEST_TIMEOUT_MS = 55000;

function isOriginAllowed(urlStr: string, requestHost: string): boolean {
  try {
    const parsed = new URL(urlStr);
    const hostname = parsed.hostname.toLowerCase();
    const host = parsed.host.toLowerCase();
    if (requestHost && host === requestHost.toLowerCase()) return true;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
    const extraOrigins = (process.env.ALLOWED_ORIGINS || '')
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    return extraOrigins.includes(parsed.origin.toLowerCase());
  } catch {
    return false;
  }
}

function applyOriginProtection(req: any, res: any): boolean {
  const rawHost = req.headers?.['x-forwarded-host'] || req.headers?.host || '';
  const requestHost = (Array.isArray(rawHost) ? rawHost[0] : String(rawHost)).split(',')[0].trim();
  const rawOrigin = req.headers?.origin;
  const origin = Array.isArray(rawOrigin) ? rawOrigin[0] : (rawOrigin || '');
  const rawReferer = req.headers?.referer;
  const referer = Array.isArray(rawReferer) ? rawReferer[0] : (rawReferer || '');

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Vary', 'Origin');

  if (origin && isOriginAllowed(origin, requestHost)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  if (req.method === 'OPTIONS') {
    if (origin && !isOriginAllowed(origin, requestHost)) {
      res.status(403).json({ error: 'CORS: Herkunft nicht erlaubt.' });
      return false;
    }
    res.status(200).end();
    return false;
  }

  if (origin) {
    if (!isOriginAllowed(origin, requestHost)) {
      res.status(403).json({ error: 'Zugriff verweigert: Unzulässige Herkunft (Origin).' });
      return false;
    }
    return true;
  }

  if (referer && isOriginAllowed(referer, requestHost)) {
    return true;
  }

  res.status(403).json({ error: 'Zugriff verweigert: Fehlender Origin-Header.' });
  return false;
}

export default async function handler(req: any, res: any) {
  if (!applyOriginProtection(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST-Anfragen sind für /api/gemini zulässig.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Ungültiges JSON im Request-Body.' });
      }
    }
    body = body || {};

    const {
      systemPrompt,
      systemInstruction,
      userPrompt,
      parts,
      contents,
      model,
      temperature = 0.3,
      responseMimeType,
      maxOutputTokens = 8192,
    } = body;

    const clientKey =
      typeof body.apiKey === 'string' && body.apiKey.trim() && body.apiKey.trim() !== 'serverless-proxy'
        ? body.apiKey.trim()
        : '';
    const serverKey = (process.env.GEMINI_API_KEY || '').trim();
    const activeKey = clientKey || serverKey;

    if (!activeKey) {
      return res.status(401).json({
        error:
          'Kein Gemini API-Schlüssel konfiguriert. Bitte hinterlege GEMINI_API_KEY in Vercel als Secret.',
      });
    }

    let finalContents: any[] = [];
    if (Array.isArray(contents) && contents.length > 0) {
      finalContents = contents;
    } else if (Array.isArray(parts) && parts.length > 0) {
      finalContents = [{ role: 'user', parts }];
    } else if (userPrompt || systemPrompt) {
      const text = systemPrompt && !systemInstruction ? `${systemPrompt}\n\n${userPrompt || ''}`.trim() : String(userPrompt || '');
      finalContents = [{ role: 'user', parts: [{ text }] }];
    } else {
      return res.status(400).json({ error: 'Prompt-Daten (contents, parts oder userPrompt) erforderlich.' });
    }

    const candidateModels: string[] = [];
    if (typeof model === 'string' && model.trim() && model !== 'auto') {
      candidateModels.push(model.trim());
    }
    for (const m of CANDIDATE_FLASH_MODELS) {
      if (!candidateModels.includes(m)) {
        candidateModels.push(m);
      }
    }

    const resolvedSystemInstruction = systemInstruction || (Array.isArray(parts) || Array.isArray(contents) ? systemPrompt : undefined);
    let lastErrorMessage = '';
    let lastStatusCode = 502;

    for (const currentModel of candidateModels) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(currentModel)}:generateContent?key=${encodeURIComponent(activeKey)}`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      try {
        const generationConfig: Record<string, any> = {
          temperature: typeof temperature === 'number' ? temperature : 0.3,
          maxOutputTokens: typeof maxOutputTokens === 'number' ? Math.min(maxOutputTokens, 8192) : 8192,
        };
        if (responseMimeType === 'application/json') {
          generationConfig.responseMimeType = 'application/json';
        }

        const payload: Record<string, any> = {
          contents: finalContents,
          generationConfig,
        };
        if (typeof resolvedSystemInstruction === 'string' && resolvedSystemInstruction.trim()) {
          payload.systemInstruction = { parts: [{ text: resolvedSystemInstruction }] };
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify(payload),
        });

        clearTimeout(timeoutId);
        const data: any = await response.json().catch(() => null);

        if (response.ok && data) {
          const firstCandidate = data.candidates?.[0];
          const text = firstCandidate?.content?.parts?.[0]?.text;
          if (typeof text === 'string' && text.trim().length > 0) {
            return res.status(200).json({ text, model: currentModel });
          }

          const finishReason = firstCandidate?.finishReason;
          const blockReason = data.promptFeedback?.blockReason;
          if (finishReason && finishReason !== 'STOP') {
            lastErrorMessage = `Modell ${currentModel} beendet mit Status "${finishReason}".`;
          } else if (blockReason) {
            lastErrorMessage = `Prompt wurde durch Sicherheitsfilter geblockt (${blockReason}).`;
          } else {
            lastErrorMessage = `Modell ${currentModel} lieferte eine leere Antwort.`;
          }
          continue;
        }

        const errMsg = data?.error?.message || `HTTP ${response.status}`;
        lastErrorMessage = errMsg;
        lastStatusCode = response.status === 429 || response.status === 503 ? response.status : 502;

        if (
          response.status === 400 &&
          (errMsg.includes('API_KEY_INVALID') || errMsg.includes('key not valid'))
        ) {
          return res.status(400).json({ error: 'Der Gemini API-Schlüssel ist ungültig.' });
        }
      } catch (err: any) {
        clearTimeout(timeoutId);
        lastErrorMessage =
          err?.name === 'AbortError'
            ? `Zeitüberschreitung nach ${REQUEST_TIMEOUT_MS / 1000}s bei Modell ${currentModel}`
            : err?.message || String(err);
      }
    }

    return res.status(lastStatusCode).json({
      error: `Kein Gemini-Modell erreichbar. Letzter Fehler: ${lastErrorMessage}`,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Interner Serverfehler im Gemini-Proxy.' });
  }
}
