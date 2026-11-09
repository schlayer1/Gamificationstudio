import { GameDefinition, PillarConfig } from '../types/game';

// Regex matching any standard or extended emoji
const EMOJI_REGEX = /([\p{Emoji_Presentation}\p{Extended_Pictographic}])/u;
const TRAILING_OR_LEADING_EMOJIS_REGEX = /^[\s\p{Emoji_Presentation}\p{Extended_Pictographic}]+|[\s\p{Emoji_Presentation}\p{Extended_Pictographic}]+$/gu;

/**
 * Strips any emoji from the beginning or end of a label so it remains clean readable prose.
 */
export function getCleanLabel(label: string): string {
  if (!label) return '';
  return label.replace(TRAILING_OR_LEADING_EMOJIS_REGEX, '').trim();
}

/**
 * Extracts the first emoji from text or returns fallback
 */
export function extractEmoji(text?: string, fallback = '⚡'): string {
  if (!text) return fallback;
  const match = text.match(EMOJI_REGEX);
  return match ? match[1] : fallback;
}

export interface PillarDisplay {
  icon: string;
  label: string;
  fullLabel: string;
}

/**
 * Resolves the display icon and clean label for a pillar.
 * Guarantees that the icon is ALWAYS a valid, single emoji.
 */
export function getPillarDisplay(
  pillar?: PillarConfig,
  defaultFallback: { icon: string; label: string } = { icon: '⚡', label: 'Säule' }
): PillarDisplay {
  if (!pillar) {
    return {
      icon: defaultFallback.icon,
      label: defaultFallback.label,
      fullLabel: `${defaultFallback.icon} ${defaultFallback.label}`
    };
  }

  // 1. Determine icon: explicit icon field, or emoji inside label, or default
  let icon = pillar.icon && pillar.icon.trim() ? pillar.icon.trim() : '';
  if (!icon && pillar.label) {
    const matched = pillar.label.match(EMOJI_REGEX);
    if (matched) icon = matched[1];
  }
  if (!icon) icon = defaultFallback.icon;

  // 2. Clean label
  let cleanLabel = getCleanLabel(pillar.label);
  if (!cleanLabel) cleanLabel = defaultFallback.label;

  return {
    icon,
    label: cleanLabel,
    fullLabel: `${icon} ${cleanLabel}`
  };
}

export interface SkillDisplay {
  icon: string;
  label: string;
  shortLabel: string;
}

/**
 * Resolves the display icon and clean label for skills 1, 2, 3.
 * Guarantees that skill icons ALWAYS match across the header, choice pills, and ending screens.
 */
export function getSkillDisplay(
  game: GameDefinition | null | undefined,
  index: 1 | 2 | 3
): SkillDisplay {
  const key = `skill${index}` as const;
  const rawName = game?.skillNames?.[key] || (index === 1 ? 'Stärke & Weisheit' : index === 2 ? 'Politik & Diplomatie' : 'Militär & Führung');

  // 1. Check explicit skillIcons
  let icon = game?.skillIcons?.[key]?.trim() || '';

  // 2. Extract from rawName if it contains emoji
  if (!icon) {
    const match = rawName.match(EMOJI_REGEX);
    if (match) icon = match[1];
  }

  // 3. Smart contextual fallback by keyword
  if (!icon) {
    const lower = rawName.toLowerCase();
    if (lower.includes('jagd') || lower.includes('natur') || lower.includes('schütze') || lower.includes('bogen')) icon = '🏹';
    else if (lower.includes('werkzeug') || lower.includes('handwerk') || lower.includes('bau') || lower.includes('technik')) icon = '🛠️';
    else if (lower.includes('gemeinschaft') || lower.includes('sippe') || lower.includes('zusammenhalt') || lower.includes('volk') || lower.includes('kamerad')) icon = '👥';
    else if (lower.includes('krieg') || lower.includes('militär') || lower.includes('kampf') || lower.includes('front') || lower.includes('heer') || lower.includes('waffe') || lower.includes('feldherr')) icon = '⚔️';
    else if (lower.includes('politik') || lower.includes('rhetorik') || lower.includes('senat') || lower.includes('rede') || lower.includes('debatte')) icon = '🗣️';
    else if (lower.includes('weisheit') || lower.includes('philosophie') || lower.includes('schrift') || lower.includes('brief') || lower.includes('gesetz') || lower.includes('chronik') || lower.includes('wissen')) icon = '📜';
    else if (lower.includes('gott') || lower.includes('auserwählt') || lower.includes('glaube') || lower.includes('tempel') || lower.includes('sakral')) icon = '🌟';
    else if (lower.includes('seefahrt') || lower.includes('schiff') || lower.includes('flotte') || lower.includes('meer') || lower.includes('kahn')) icon = '⛵';
    else if (lower.includes('priester') || lower.includes('orakel') || lower.includes('vision') || lower.includes('kult')) icon = '🔮';
    else if (lower.includes('landwirtschaft') || lower.includes('acker') || lower.includes('ernte') || lower.includes('korn')) icon = '🌱';
    else if (lower.includes('sanitär') || lower.includes('heilung') || lower.includes('arznei') || lower.includes('rettung')) icon = '🩹';
    else if (lower.includes('orden') || lower.includes('ehre') || lower.includes('titel') || lower.includes('triumph')) icon = '🎖️';
    else {
      icon = index === 1 ? '🌟' : index === 2 ? '🗣️' : '⚔️';
    }
  }

  const cleanLabel = getCleanLabel(rawName);

  return {
    icon,
    label: cleanLabel,
    shortLabel: cleanLabel.split(' ')[0] || cleanLabel
  };
}

/**
 * Resolves special resource display name and emoji
 */
export function getSpecialResourceDisplay(game: GameDefinition | null | undefined): { name: string; emoji: string } {
  const name = game?.specialResourceName || 'Erfahrungspunkte (EP)';
  const emoji = game?.specialResourceEmoji || '🧠';
  return {
    name: getCleanLabel(name),
    emoji: emoji.trim() || '🧠'
  };
}
