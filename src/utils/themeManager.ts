export type EraThemeId =
  | 'egypt_gold'     // Altes Ägypten: Sonnengold, Papyrus, Sand
  | 'rome_imperial'  // Antikes Rom: Kaiserliches Karmesinrot/Purpur, Marmor, Lorbeergold
  | 'luther_ink'     // Reformation: Tinten-Kupfer, dunkles Pergament, Eichenbraun
  | 'stoneage_earth' // Steinzeit: Urzeit-Moosgrün, Felsgrau, Erdpigmente
  | 'greece_aegean'  // Alexander: Ägäis-Blau, Bronze, Weißer Marmor
  | 'mythology_rune';// Mythologie / Germanen: Nebelwald-Smaragd, Runengrün, Silber

export interface EraThemeConfig {
  id: EraThemeId;
  name: string;
  bodyBgClass: string;
  primaryColor: string; // Tailwind color name like 'amber' | 'rose' | 'orange' | 'emerald' | 'cyan' | 'green'
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  accentGlow: string;
  borderHero: string;
  cardBg: string;
  cardBorder: string;
  primaryButton: string;
  titleGradient: string;
  icon: string;
  vehicleIcon: string; // Thematic expedition icon (e.g. ⛵ Nilbarke, 🛒 Planwagen/Karren, 🐎 Streitwagen)
  destinationLabel: string; // Thematic finish label (e.g. 'Ziel: Krönung', 'Ziel: Wartburg')
}

export const ERA_THEMES: Record<EraThemeId, EraThemeConfig> = {
  egypt_gold: {
    id: 'egypt_gold',
    name: 'Wüstengold & Papyrus (Ägypten)',
    bodyBgClass: 'bg-[#120d09]',
    primaryColor: 'amber',
    badgeBg: 'bg-amber-950/80',
    badgeBorder: 'border-amber-600/70',
    badgeText: 'text-amber-300',
    accentGlow: 'amber-400',
    borderHero: 'border-amber-600/70',
    cardBg: 'bg-gradient-to-br from-[#2a1f17] to-[#1c140e]',
    cardBorder: 'border-[#785226]',
    primaryButton: 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950',
    titleGradient: 'from-amber-200 via-amber-400 to-yellow-500',
    icon: '🏛️',
    vehicleIcon: '⛵',
    destinationLabel: 'Ziel: Gizeh & Krönung',
  },
  rome_imperial: {
    id: 'rome_imperial',
    name: 'Kaiserpurpur & Marmor (Rom)',
    bodyBgClass: 'bg-[#140b0f]',
    primaryColor: 'rose',
    badgeBg: 'bg-rose-950/80',
    badgeBorder: 'border-rose-600/70',
    badgeText: 'text-rose-300',
    accentGlow: 'rose-400',
    borderHero: 'border-rose-600/70',
    cardBg: 'bg-gradient-to-br from-[#27141b] to-[#180d12]',
    cardBorder: 'border-[#7f2643]',
    primaryButton: 'bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-rose-50',
    titleGradient: 'from-rose-200 via-rose-400 to-amber-300',
    icon: '🦅',
    vehicleIcon: '🐎',
    destinationLabel: 'Ziel: Triumph & Kapitol',
  },
  luther_ink: {
    id: 'luther_ink',
    name: 'Buchdruck & Pergament (Reformation)',
    bodyBgClass: 'bg-[#140e0a]',
    primaryColor: 'orange',
    badgeBg: 'bg-orange-950/80',
    badgeBorder: 'border-orange-700/70',
    badgeText: 'text-orange-300',
    accentGlow: 'orange-400',
    borderHero: 'border-orange-700/70',
    cardBg: 'bg-gradient-to-br from-[#251810] to-[#18100a]',
    cardBorder: 'border-[#6c3e1e]',
    primaryButton: 'bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-600 hover:to-amber-600 text-amber-100',
    titleGradient: 'from-orange-200 via-amber-300 to-yellow-500',
    icon: '📜',
    vehicleIcon: '🛒',
    destinationLabel: 'Ziel: Wartburg & Bibel',
  },
  stoneage_earth: {
    id: 'stoneage_earth',
    name: 'Fels & Moos (Steinzeit)',
    bodyBgClass: 'bg-[#0d130e]',
    primaryColor: 'emerald',
    badgeBg: 'bg-emerald-950/80',
    badgeBorder: 'border-emerald-700/70',
    badgeText: 'text-emerald-300',
    accentGlow: 'emerald-400',
    borderHero: 'border-emerald-700/70',
    cardBg: 'bg-gradient-to-br from-[#132016] to-[#0c150e]',
    cardBorder: 'border-[#2d5635]',
    primaryButton: 'bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-emerald-100',
    titleGradient: 'from-emerald-200 via-green-400 to-amber-300',
    icon: '🪨',
    vehicleIcon: '👣',
    destinationLabel: 'Ziel: Erste Siedlung',
  },
  greece_aegean: {
    id: 'greece_aegean',
    name: 'Ägäis-Blau & Bronze (Alexander)',
    bodyBgClass: 'bg-[#0a1218]',
    primaryColor: 'cyan',
    badgeBg: 'bg-cyan-950/80',
    badgeBorder: 'border-cyan-700/70',
    badgeText: 'text-cyan-300',
    accentGlow: 'cyan-400',
    borderHero: 'border-cyan-700/70',
    cardBg: 'bg-gradient-to-br from-[#101e28] to-[#0a131a]',
    cardBorder: 'border-[#23536d]',
    primaryButton: 'bg-gradient-to-r from-cyan-700 to-sky-600 hover:from-cyan-600 hover:to-sky-500 text-cyan-50',
    titleGradient: 'from-cyan-200 via-sky-300 to-amber-300',
    icon: '⚡',
    vehicleIcon: '🏇',
    destinationLabel: 'Ziel: Alexander-Reich',
  },
  mythology_rune: {
    id: 'mythology_rune',
    name: 'Nebelwald & Runen (Mythologie)',
    bodyBgClass: 'bg-[#0d1413]',
    primaryColor: 'teal',
    badgeBg: 'bg-teal-950/80',
    badgeBorder: 'border-teal-700/70',
    badgeText: 'text-teal-300',
    accentGlow: 'teal-400',
    borderHero: 'border-teal-700/70',
    cardBg: 'bg-gradient-to-br from-[#122220] to-[#0a1514]',
    cardBorder: 'border-[#255650]',
    primaryButton: 'bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-600 hover:to-emerald-500 text-teal-100',
    titleGradient: 'from-teal-200 via-emerald-300 to-yellow-300',
    icon: '🌲',
    vehicleIcon: '⚔️',
    destinationLabel: 'Ziel: Heiliger Hain / Walhall',
  },
};

/**
 * Resolves the matching EraThemeId based on era string, title or archetype
 */
export function detectEraTheme(eraOrTitle?: string, archetype?: string): EraThemeConfig {
  if (!eraOrTitle) return ERA_THEMES.egypt_gold;
  const lower = eraOrTitle.toLowerCase();

  if (lower.includes('rom') || lower.includes('caesar') || lower.includes('augustus') || lower.includes('limes') || lower.includes('senat')) {
    if (lower.includes('german') || lower.includes('mytholog')) {
      return ERA_THEMES.mythology_rune;
    }
    return ERA_THEMES.rome_imperial;
  }

  if (lower.includes('alexander') || lower.includes('griechen') || lower.includes('persien') || lower.includes('hellas')) {
    return ERA_THEMES.greece_aegean;
  }

  if (lower.includes('luther') || lower.includes('reformation') || lower.includes('wittenberg') || lower.includes('bauernkrieg') || lower.includes('mittelalter')) {
    return ERA_THEMES.luther_ink;
  }

  if (lower.includes('steinzeit') || lower.includes('neolith') || lower.includes('jäger') || lower.includes('mammut') || lower.includes('sesshaft')) {
    return ERA_THEMES.stoneage_earth;
  }

  if (lower.includes('mytholog') || archetype === 'mythology_duel') {
    return ERA_THEMES.mythology_rune;
  }

  // Default: Ägypten Gold
  return ERA_THEMES.egypt_gold;
}
