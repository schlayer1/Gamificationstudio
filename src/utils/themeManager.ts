export type EraThemeId =
  | 'egypt_gold'          // Altes Ägypten: Sonnengold, Papyrus, Sand
  | 'rome_imperial'       // Antikes Rom: Kaiserliches Karmesinrot/Purpur, Marmor, Lorbeergold
  | 'luther_ink'          // Reformation: Tinten-Kupfer, dunkles Pergament, Eichenbraun
  | 'stoneage_earth'      // Steinzeit: Urzeit-Moosgrün, Felsgrau, Erdpigmente
  | 'greece_aegean'       // Alexander / Antikes Griechenland: Ägäis-Blau, Bronze, Weißer Marmor
  | 'mythology_rune'      // Mythologie / Germanen: Nebelwald-Smaragd, Runengrün, Silber
  | 'franks_charlemagne'  // Frankenreich / Karl der Große: Königsblau, Reichsadler-Gold, Pfalzstein
  | 'revolution_tricolore'// Französische Revolution: Trikolore Blau-Weiß-Rot, Sturm, Republik
  | 'industrial_steam'    // Industrielle Revolution: Rußschwarz, Gusseisen-Kupfer, Dampf & Zahnrad
  | 'weimar_cabaret';     // Weimarer Republik / 1920er: Art-Déco Bernstein, Bauhaus-Rot, Nachtblau

export interface EraThemeConfig {
  id: EraThemeId;
  name: string;
  bodyBgClass: string;
  primaryColor: string; // Tailwind color name like 'amber' | 'rose' | 'orange' | 'emerald' | 'cyan' | 'green' | 'blue' | 'indigo' | 'zinc' | 'yellow'
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
  defaultBannerUrl: string; // Thematic default hero artwork for each historical era
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
    defaultBannerUrl: '/assets/nile_banner.jpg',
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
    defaultBannerUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
  },
  luther_ink: {
    id: 'luther_ink',
    name: 'Buchdruck & Pergament (Reformation & Mittelalter)',
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
    defaultBannerUrl: 'https://images.unsplash.com/photo-1548625361-16a9a08e6f1c?auto=format&fit=crop&w=1200&q=80',
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
    defaultBannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
  },
  greece_aegean: {
    id: 'greece_aegean',
    name: 'Ägäis-Blau & Bronze (Griechenland & Alexander)',
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
    destinationLabel: 'Ziel: Akropolis & Weltreich',
    defaultBannerUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80',
  },
  mythology_rune: {
    id: 'mythology_rune',
    name: 'Nebelwald & Runen (Mythologie & Limes)',
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
    defaultBannerUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  },
  franks_charlemagne: {
    id: 'franks_charlemagne',
    name: 'Königsblau & Kaisergold (Frankenreich & Karl)',
    bodyBgClass: 'bg-[#0c101c]',
    primaryColor: 'blue',
    badgeBg: 'bg-blue-950/80',
    badgeBorder: 'border-blue-700/70',
    badgeText: 'text-blue-300',
    accentGlow: 'blue-400',
    borderHero: 'border-blue-600/70',
    cardBg: 'bg-gradient-to-br from-[#12192e] to-[#090e1a]',
    cardBorder: 'border-[#2d4375]',
    primaryButton: 'bg-gradient-to-r from-blue-700 to-amber-600 hover:from-blue-600 hover:to-amber-500 text-stone-100',
    titleGradient: 'from-blue-200 via-amber-300 to-yellow-400',
    icon: '⚜️',
    vehicleIcon: '🐴',
    destinationLabel: 'Ziel: Kaiserpfalz Aachen',
    defaultBannerUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
  },
  revolution_tricolore: {
    id: 'revolution_tricolore',
    name: 'Trikolore & Barrikaden (Französische Revolution)',
    bodyBgClass: 'bg-[#180e12]',
    primaryColor: 'red',
    badgeBg: 'bg-red-950/80',
    badgeBorder: 'border-red-700/70',
    badgeText: 'text-red-300',
    accentGlow: 'red-400',
    borderHero: 'border-red-600/70',
    cardBg: 'bg-gradient-to-br from-[#29131a] to-[#14080d]',
    cardBorder: 'border-[#7d283c]',
    primaryButton: 'bg-gradient-to-r from-blue-700 via-stone-200 to-red-600 hover:from-blue-600 hover:to-red-500 text-stone-950 font-black',
    titleGradient: 'from-sky-300 via-stone-100 to-red-400',
    icon: '🇫🇷',
    vehicleIcon: '🚩',
    destinationLabel: 'Ziel: Freiheit & Republik',
    defaultBannerUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
  },
  industrial_steam: {
    id: 'industrial_steam',
    name: 'Ruß & Dampfmaschine (Industrielle Revolution)',
    bodyBgClass: 'bg-[#121214]',
    primaryColor: 'zinc',
    badgeBg: 'bg-zinc-900/90',
    badgeBorder: 'border-amber-700/60',
    badgeText: 'text-amber-400',
    accentGlow: 'amber-500',
    borderHero: 'border-zinc-700/80',
    cardBg: 'bg-gradient-to-br from-[#202026] to-[#121216]',
    cardBorder: 'border-[#52525e]',
    primaryButton: 'bg-gradient-to-r from-amber-700 to-stone-700 hover:from-amber-600 hover:to-stone-600 text-amber-100',
    titleGradient: 'from-amber-200 via-stone-300 to-orange-400',
    icon: '⚙️',
    vehicleIcon: '🚂',
    destinationLabel: 'Ziel: Fortschritt & Soziale Rechte',
    defaultBannerUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=80',
  },
  weimar_cabaret: {
    id: 'weimar_cabaret',
    name: 'Goldene Zwanziger & Bauhaus (Weimarer Republik)',
    bodyBgClass: 'bg-[#141018]',
    primaryColor: 'purple',
    badgeBg: 'bg-purple-950/80',
    badgeBorder: 'border-yellow-600/70',
    badgeText: 'text-yellow-300',
    accentGlow: 'yellow-400',
    borderHero: 'border-yellow-600/70',
    cardBg: 'bg-gradient-to-br from-[#22172d] to-[#120c1a]',
    cardBorder: 'border-[#674488]',
    primaryButton: 'bg-gradient-to-r from-yellow-600 to-purple-800 hover:from-yellow-500 hover:to-purple-700 text-stone-950 font-bold',
    titleGradient: 'from-yellow-200 via-amber-300 to-purple-400',
    icon: '🎭',
    vehicleIcon: '📻',
    destinationLabel: 'Ziel: Demokratie & Bauhaus Weimar',
    defaultBannerUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
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

  if (lower.includes('weimar') || lower.includes('goldene zwanziger') || lower.includes('bauhaus') || lower.includes('1920')) {
    return ERA_THEMES.weimar_cabaret;
  }

  if (lower.includes('industrie') || lower.includes('dampf') || lower.includes('arbeiter') || lower.includes('schlot') || lower.includes('fabrik')) {
    return ERA_THEMES.industrial_steam;
  }

  if (lower.includes('revolution') || lower.includes('napoleon') || lower.includes('bastille') || lower.includes('frankreich') || lower.includes('menschenrechte')) {
    return ERA_THEMES.revolution_tricolore;
  }

  if (lower.includes('frank') || lower.includes('karl der große') || lower.includes('chlodwig') || lower.includes('aachen') || lower.includes('pfalz')) {
    return ERA_THEMES.franks_charlemagne;
  }

  if (lower.includes('alexander') || lower.includes('griechen') || lower.includes('persien') || lower.includes('hellas') || lower.includes('athen') || lower.includes('polis')) {
    return ERA_THEMES.greece_aegean;
  }

  if (lower.includes('luther') || lower.includes('reformation') || lower.includes('wittenberg') || lower.includes('bauernkrieg') || lower.includes('mittelalter') || lower.includes('ritter') || lower.includes('burg')) {
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
