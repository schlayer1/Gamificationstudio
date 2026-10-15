export interface PortalUser {
  id: string; // e.g. "t-keller"
  name: string; // e.g. "Keller"
  pin: string; // 4-digit PIN e.g. "6079"
  role: 'teacher' | 'admin';
  active: boolean;
  createdAt?: number;
  lastLoginAt?: number;
}
