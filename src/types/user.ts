export type TeacherGender = 'f' | 'm' | 'd' | '';

export interface PortalUser {
  id: string; // e.g. "t-keller"
  name: string; // e.g. "Keller"
  gender?: TeacherGender; // 'f' = Frau, 'm' = Herr, 'd' = Divers, '' = Keine Angabe
  sourceTeacherId?: string;
  pin: string; // 4-digit PIN e.g. "6079"
  role: 'teacher' | 'admin';
  active: boolean;
  createdAt?: number;
  lastLoginAt?: number;
}

export function formatTeacherName(
  teacher?: { name?: string | null; gender?: TeacherGender | string | null } | null
): string {
  const rawName = (teacher?.name || '').trim();
  if (!rawName) return '';
  const lower = rawName.toLowerCase();
  if (
    lower.startsWith('frau ') ||
    lower.startsWith('herr ') ||
    lower.startsWith('fr. ') ||
    lower.startsWith('hr. ') ||
    lower === 'gast' ||
    lower === 'nn' ||
    lower.includes('schulleitung')
  ) {
    return rawName;
  }
  if (teacher?.gender === 'f') return `Frau ${rawName}`;
  if (teacher?.gender === 'm') return `Herr ${rawName}`;
  return rawName;
}
