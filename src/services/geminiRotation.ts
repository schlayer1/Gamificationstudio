import { CANDIDATE_FLASH_MODELS } from './geminiConstants';

export interface KeyRotationState {
  keys: string[];
  currentIndex: number;
}

class GeminiRotationService {
  private keys: string[] = [];
  private currentIndex: number = 0;
  private storageKey = 'history_trail_gemini_keys';

  constructor() {
    this.loadKeys();
  }

  /**
   * Lädt optionale persönliche Lehrer-Keys aus localStorage (BYOK).
   * Wenn keine hinterlegt sind, nutzt die App automatisch den sicheren Server-Proxy (/api/gemini).
   */
  public loadKeys(): string[] {
    let localKeys: string[] = [];
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            localKeys = parsed.filter((k: string) => typeof k === 'string' && k.trim().length > 0);
          }
        }
      } catch {}
    }

    this.keys = localKeys.slice(0, 4);
    return this.keys;
  }

  public saveKeys(newKeys: string[]) {
    this.keys = newKeys.filter((k) => k && k.trim().length > 0).slice(0, 4);
    if (typeof window !== 'undefined') {
      if (this.keys.length > 0) {
        localStorage.setItem(this.storageKey, JSON.stringify(this.keys));
      } else {
        localStorage.removeItem(this.storageKey);
      }
    }
    this.currentIndex = 0;
  }

  public getKeys(): string[] {
    return this.keys;
  }

  public getActiveKey(): string {
    if (this.keys.length === 0) return '';
    return this.keys[this.currentIndex % this.keys.length];
  }

  private rotateToNextKey(): string {
    if (this.keys.length <= 1) return this.getActiveKey();
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    return this.getActiveKey();
  }

  /**
   * Ruft Gemini primär über den sicheren Vercel-Proxy (/api/gemini) auf.
   * Unterstützt Text-Prompts sowie multimodale Anhänge (Schulbuchfotos, Arbeitsblätter).
   */
  public async generateContentWithRotation(
    promptOrParts: string | Array<{ text?: string; inlineData?: { mimeType: string; data: string } }>,
    systemInstruction?: string,
    isJsonOutput: boolean = false
  ): Promise<string> {
    const parts = typeof promptOrParts === 'string'
      ? [{ text: promptOrParts }]
      : promptOrParts;

    // 1. Primärer Pfad: Sicherer Serverless-Proxy (/api/gemini)
    const customAttempts = Math.max(1, this.keys.length);
    for (let i = 0; i < customAttempts; i++) {
      const customKey = this.getActiveKey();
      try {
        const proxyResponse = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            apiKey: customKey || 'serverless-proxy',
            parts,
            systemInstruction,
            temperature: 0.3,
            maxOutputTokens: 8192,
            responseMimeType: isJsonOutput ? 'application/json' : undefined,
          }),
        });

        if (proxyResponse.ok) {
          const data = await proxyResponse.json();
          if (data?.text) {
            return data.text;
          }
        }

        if (proxyResponse.status === 404) {
          break; // Statisches Hosting -> Direkt-Fallback nur falls BYOK-Keys vorliegen
        }

        if ((proxyResponse.status === 429 || proxyResponse.status === 503) && this.keys.length > 1) {
          this.rotateToNextKey();
          continue;
        }

        const errJson = await proxyResponse.json().catch(() => ({}));
        throw new Error(errJson?.error || `HTTP ${proxyResponse.status} vom Gemini-Proxy`);
      } catch (err: any) {
        if (i < customAttempts - 1) {
          this.rotateToNextKey();
          continue;
        }
        if (err?.message && !err.message.includes('404')) {
          throw err;
        }
      }
    }

    // 2. Fallback bei 404 nur mit persönlichen BYOK-Keys
    if (this.keys.length === 0) {
      throw new Error(
        'Der Gemini-Server-Proxy (/api/gemini) ist nicht erreichbar und es ist kein persönlicher API-Schlüssel hinterlegt.'
      );
    }

    const candidateModels = CANDIDATE_FLASH_MODELS;
    const maxAttempts = this.keys.length * candidateModels.length;
    let attempts = 0;

    while (attempts < maxAttempts) {
      const activeKey = this.getActiveKey();
      const model = candidateModels[attempts % candidateModels.length];
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(activeKey)}`;

      const bodyPayload: any = {
        contents: [{ role: 'user', parts }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 8192,
        },
      };

      if (systemInstruction) {
        bodyPayload.systemInstruction = { parts: [{ text: systemInstruction }] };
      }

      if (isJsonOutput) {
        bodyPayload.generationConfig.responseMimeType = 'application/json';
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyPayload),
        });

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        }

        if (response.status === 429 || response.status === 503) {
          this.rotateToNextKey();
        }
      } catch {
        this.rotateToNextKey();
      }

      attempts++;
    }

    throw new Error(
      'Alle konfigurierten Gemini-Schlüssel und Modelle haben aktuell ein temporäres Limit erreicht. Bitte kurz warten.'
    );
  }
}

export const geminiRotationService = new GeminiRotationService();
