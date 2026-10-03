import { CANDIDATE_FLASH_MODELS, DEFAULT_SCHOOL_GEMINI_KEY } from './geminiConstants';

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

  // Load configured keys from localStorage
  public loadKeys(): string[] {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.keys = parsed.filter((k: string) => k && k.trim().length > 0);
          }
        }
      } catch {}
    }

    // If no custom keys, ensure school default key fallback
    if (this.keys.length === 0 && DEFAULT_SCHOOL_GEMINI_KEY) {
      this.keys = [DEFAULT_SCHOOL_GEMINI_KEY];
    }
    return this.keys;
  }

  // Save up to 4 teacher keys
  public saveKeys(newKeys: string[]) {
    this.keys = newKeys.filter((k) => k && k.trim().length > 0).slice(0, 4);
    if (this.keys.length === 0 && DEFAULT_SCHOOL_GEMINI_KEY) {
      this.keys = [DEFAULT_SCHOOL_GEMINI_KEY];
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(this.keys));
    }
    this.currentIndex = 0;
  }

  public getKeys(): string[] {
    return this.keys;
  }

  public getActiveKey(): string {
    if (this.keys.length === 0) return DEFAULT_SCHOOL_GEMINI_KEY;
    return this.keys[this.currentIndex % this.keys.length];
  }

  private rotateToNextKey(): string {
    if (this.keys.length <= 1) return this.getActiveKey();
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    return this.getActiveKey();
  }

  /**
   * Robust multi-key and multi-model cascade generation
   * Supports both pure text prompts and multimodal image attachments (textbook photos, worksheets)
   * Automatically catches 429 Rate Limits and 503 Overloads, switches to next key & model
   */
  public async generateContentWithRotation(
    promptOrParts: string | Array<{ text?: string; inlineData?: { mimeType: string; data: string } }>,
    systemInstruction?: string,
    isJsonOutput: boolean = false
  ): Promise<string> {
    const candidateModels = CANDIDATE_FLASH_MODELS;
    const maxAttempts = Math.max(1, this.keys.length) * candidateModels.length;
    let attempts = 0;

    const parts = typeof promptOrParts === 'string'
      ? [{ text: promptOrParts }]
      : promptOrParts;

    while (attempts < maxAttempts) {
      const activeKey = this.getActiveKey();
      const model = candidateModels[attempts % candidateModels.length];
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${activeKey}`;

      const bodyPayload: any = {
        contents: [{ role: 'user', parts }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 8192,
        },
      };

      if (systemInstruction) {
        bodyPayload.systemInstruction = {
          parts: [{ text: systemInstruction }],
        };
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
          if (text) {
            return text;
          }
        }

        // Handle Rate Limit (429) or Server Overload (503) -> Rotate Key!
        if (response.status === 429 || response.status === 503) {
          console.warn(`Key / Model rate limited (${response.status}) on ${model}. Rotating key...`);
          this.rotateToNextKey();
        }
      } catch (err) {
        console.warn(`Network/API error with model ${model}, trying next...`, err);
        this.rotateToNextKey();
      }

      attempts++;
    }

    throw new Error(
      "Alle konfigurierten Gemini-Schlüssel und Modelle haben aktuell ein temporäres Limit erreicht. Bitte kurz warten oder einen weiteren API-Key im Studio hinterlegen."
    );
  }
}

export const geminiRotationService = new GeminiRotationService();
