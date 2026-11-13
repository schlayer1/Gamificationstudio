import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, Firestore } from 'firebase/firestore';
import { PortalUser, TeacherGender } from '../types/user';

// Shared Firebase configuration from Appportal / Terminkalender
export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAr8Q3RslUSuaJbIIGiINGV24nm26jYoLQ",
  authDomain: "terminkalender-7f269.firebaseapp.com",
  projectId: "terminkalender-7f269",
  storageBucket: "terminkalender-7f269.firebasestorage.app",
  messagingSenderId: "919163141331",
  appId: "1:919163141331:web:12c659f5c2946e7c7e2826"
};

// Authoritative teacher/PIN source: Vertretungsstatistik (statistik-91f25)
export const STATISTIK_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCnleowgQT4XoMK5P5b_t1uWYGsWoYxT80",
  authDomain: "statistik-91f25.firebaseapp.com",
  projectId: "statistik-91f25",
  storageBucket: "statistik-91f25.firebasestorage.app",
  messagingSenderId: "277742289737",
  appId: "1:277742289737:web:b87043732524cc283d5098"
};

export const PORTAL_COLLECTION = "hbs_appportal";
export const PORTAL_DATA_DOC = "portal_data";
export const MASTER_ADMIN_PIN = "Year2003?!%";

// Offline fallback seed matching the official Heimbürgeschule Kollegium
export const INITIAL_SEED_TEACHERS: PortalUser[] = [
  { id: "t-allerdt", name: "Allerdt", pin: "6300", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-dengler", name: "Dengler", pin: "8991", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-funk", name: "Funk", pin: "1091", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-graefe", name: "Gräfe", pin: "6169", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-gruchmann", name: "Gruchmann", pin: "4444", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-haase", name: "Haase", pin: "8511", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-halm", name: "Halm", pin: "1350", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-herold", name: "Herold", pin: "2116", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-illessy", name: "Illessy", pin: "2479", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-keim", name: "Keim", pin: "9672", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-keller", name: "Keller", pin: "6079", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-kleinfeld", name: "Kleinfeld", pin: "5901", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-koenig", name: "König", pin: "2699", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-koenitzern", name: "Könitzer N", pin: "2535", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-koentizert", name: "Könitzer T", pin: "7909", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-mange", name: "Mange", pin: "3518", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-meier", name: "Meier", pin: "8652", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-nn", name: "nn", pin: "1266", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-nowak", name: "Nowak", pin: "6652", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-ottma", name: "Ottma", pin: "7710", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-petzold", name: "Petzold", pin: "6244", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-piel", name: "Piel", pin: "8814", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-schirmer", name: "Schirmer", pin: "8386", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-schmidt", name: "Schmidt", pin: "6403", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-schwappach", name: "Schwappach", pin: "7673", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-seifert", name: "Seifert", pin: "3314", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-surowy", name: "Surowy", pin: "9330", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-teubert", name: "Teubert", pin: "5812", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-thum", name: "Thum", pin: "2012", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-vogel", name: "Vogel", pin: "1027", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-voigt", name: "Voigt", pin: "5067", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-wagner", name: "Wagner", pin: "7734", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-weber", name: "Weber", pin: "2540", role: "teacher", active: true, createdAt: Date.now() },
  { id: "t-wesely", name: "Wesely", pin: "7484", role: "teacher", active: true, createdAt: Date.now() }
];

const LOCAL_STORAGE_TEACHERS_KEY = "hbs_gameportal_teachers_cache";
const LOCAL_STORAGE_ACTIVE_USER_KEY = "hbs_gameportal_logged_teacher";

interface StatistikTeacherRaw {
  id?: string;
  name?: string;
  pin?: string;
  gender?: string;
  active?: boolean;
}

const normalizeGender = (val: unknown): TeacherGender => {
  if (val === 'f' || val === 'm' || val === 'd') return val;
  return '';
};

export class TeacherAuthService {
  private db: Firestore | null = null;
  private statistikDb: Firestore | null = null;
  private baseTeachers: PortalUser[] = INITIAL_SEED_TEACHERS;
  private statistikTeachers: StatistikTeacherRaw[] = [];
  private teachers: PortalUser[] = INITIAL_SEED_TEACHERS;
  private listeners: Array<(user: PortalUser | null) => void> = [];

  constructor() {
    this.initFirebase();
    this.loadCachedTeachers();
    this.initRealtimeSync();
  }

  private initFirebase() {
    try {
      const app = getApps().length === 0 ? initializeApp(DEFAULT_FIREBASE_CONFIG) : getApp();
      this.db = getFirestore(app);
    } catch (err) {
      console.warn("Firebase Init-Warnung in TeacherAuthService (Offline-Fallback):", err);
    }
    try {
      const existingStatistik = getApps().find((a) => a.name === 'hbs-statistik-source');
      const statistikApp = existingStatistik || initializeApp(STATISTIK_FIREBASE_CONFIG, 'hbs-statistik-source');
      this.statistikDb = getFirestore(statistikApp);
    } catch (err) {
      console.warn("Statistik-Firebase Init-Warnung in TeacherAuthService:", err);
    }
  }

  private loadCachedTeachers() {
    if (typeof window === 'undefined') return;
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_TEACHERS_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.baseTeachers = parsed;
          this.teachers = parsed;
        }
      }
    } catch (e) {
      console.warn("Fehler beim Laden der gecachten Lehrerdaten:", e);
    }
  }

  private saveCachedTeachers(teachers: PortalUser[]) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(LOCAL_STORAGE_TEACHERS_KEY, JSON.stringify(teachers));
    } catch (e) {
      console.warn("Fehler beim Speichern der gecachten Lehrerdaten:", e);
    }
  }

  private mergeAndRefreshTeachers() {
    const merged = this.baseTeachers.map((u) => ({ ...u }));

    this.statistikTeachers.forEach((st) => {
      const rawName = (st?.name || '').trim();
      if (!rawName || rawName.toLowerCase().includes('schulleitung')) return;

      const stId = st.id ? String(st.id).trim() : '';
      const cleanLower = rawName.toLowerCase();
      const idx = merged.findIndex(
        (u) =>
          (stId && (u.sourceTeacherId === stId || u.id === `t-${stId}` || u.id === stId)) ||
          u.name.trim().toLowerCase() === cleanLower
      );

      const rawPin = st.pin !== undefined && st.pin !== null ? String(st.pin).trim() : '';
      const validPin = /^\d{4,}$/.test(rawPin) ? rawPin : '';
      const hasGenderField = st.gender !== undefined && st.gender !== null;
      const incomingGender = normalizeGender(st.gender);
      const incomingActive = st.active !== false;

      if (idx >= 0) {
        const target = merged[idx];
        if (validPin) target.pin = validPin;
        if (hasGenderField) target.gender = incomingGender;
        target.name = rawName;
        target.active = incomingActive;
        if (stId) target.sourceTeacherId = stId;
      } else if (validPin) {
        merged.push({
          id: stId ? `t-${stId}` : `t-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          sourceTeacherId: stId || undefined,
          name: rawName,
          gender: incomingGender,
          pin: validPin,
          role: 'teacher',
          active: incomingActive,
          createdAt: Date.now()
        });
      }
    });

    this.teachers = merged;
    this.saveCachedTeachers(merged);

    const current = this.getCurrentTeacher();
    if (current && current.id !== 'master-admin' && current.id !== 't-gastlehrer') {
      const updated = merged.find(
        (u: PortalUser) =>
          u.id === current.id ||
          (current.sourceTeacherId && u.sourceTeacherId === current.sourceTeacherId) ||
          u.name.trim().toLowerCase() === current.name.trim().toLowerCase()
      );
      if (updated) {
        const refreshed: PortalUser = {
          ...updated,
          role: current.role === 'admin' ? 'admin' : updated.role,
          lastLoginAt: current.lastLoginAt
        };
        localStorage.setItem(LOCAL_STORAGE_ACTIVE_USER_KEY, JSON.stringify(refreshed));
        this.notifyListeners(refreshed);
      }
    }
  }

  private async fetchStatistikViaRest() {
    try {
      const res = await fetch(
        'https://firestore.googleapis.com/v1/projects/statistik-91f25/databases/(default)/documents/schools/HBS'
      );
      if (!res.ok) return;
      const docJson = await res.json();
      const values = docJson?.fields?.teachers?.arrayValue?.values;
      if (!Array.isArray(values)) return;
      this.statistikTeachers = values.map((v: any) => {
        const f = v?.mapValue?.fields || {};
        return {
          id: f.id?.stringValue ?? '',
          name: f.name?.stringValue ?? '',
          pin: f.pin?.stringValue ?? '',
          gender: f.gender?.stringValue ?? '',
          active: f.active?.booleanValue !== undefined ? Boolean(f.active.booleanValue) : true
        };
      });
      this.mergeAndRefreshTeachers();
    } catch (err) {
      console.warn("Statistik REST fallback error in Gameportal:", err);
    }
  }

  private initRealtimeSync() {
    if (this.db) {
      try {
        const portalDocRef = doc(this.db, PORTAL_COLLECTION, PORTAL_DATA_DOC);
        // Realtime listener from central appportal doc
        onSnapshot(portalDocRef, (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            if (Array.isArray(data?.users) && data.users.length > 0) {
              this.baseTeachers = data.users;
              this.mergeAndRefreshTeachers();
            }
          }
        }, (err) => {
          console.warn("Firestore onSnapshot error in Gameportal:", err);
        });
      } catch (err) {
        console.warn("Firestore sync init error:", err);
      }
    }

    if (this.statistikDb) {
      try {
        const statistikDocRef = doc(this.statistikDb, "schools", "HBS");
        onSnapshot(statistikDocRef, (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            if (Array.isArray(data?.teachers)) {
              this.statistikTeachers = data.teachers;
              this.mergeAndRefreshTeachers();
            }
          }
        }, (err) => {
          console.warn("Statistik onSnapshot error in Gameportal:", err);
          this.fetchStatistikViaRest();
        });
      } catch (err) {
        console.warn("Statistik sync init error in Gameportal:", err);
        this.fetchStatistikViaRest();
      }
    } else {
      this.fetchStatistikViaRest();
    }
  }

  public getAllTeachers(): PortalUser[] {
    return this.teachers;
  }

  public getCurrentTeacher(): PortalUser | null {
    if (typeof window === 'undefined') return null;
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_ACTIVE_USER_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Fehler beim Lesen des eingeloggten Lehrers:", e);
    }
    return null;
  }

  public loginWithPin(enteredPin: string): { success: boolean; user?: PortalUser; error?: string } {
    const cleanPin = enteredPin.trim();
    if (!cleanPin) {
      return { success: false, error: 'Bitte gib deinen 4-stelligen PIN ein.' };
    }

    // 1. Schulleitung / Master-Admin-PIN Check
    if (cleanPin === MASTER_ADMIN_PIN) {
      const adminUser: PortalUser = {
        id: 'master-admin',
        name: 'Schulleitung / Admin',
        pin: MASTER_ADMIN_PIN,
        role: 'admin',
        active: true,
        createdAt: Date.now(),
        lastLoginAt: Date.now()
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_ACTIVE_USER_KEY, JSON.stringify(adminUser));
      }
      this.notifyListeners(adminUser);
      return { success: true, user: adminUser };
    }

    // 2. Suche in den Lehrkräften nach dem eindeutigen PIN
    const teacher = this.teachers.find((t) => t.pin === cleanPin && t.active !== false);
    if (teacher) {
      const loggedUser: PortalUser = {
        ...teacher,
        lastLoginAt: Date.now()
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_ACTIVE_USER_KEY, JSON.stringify(loggedUser));
      }
      this.notifyListeners(loggedUser);
      return { success: true, user: loggedUser };
    }

    // 3. Fallback für Schul-Test-PIN 1234
    if (cleanPin === '1234') {
      const fallbackUser: PortalUser = {
        id: 't-gastlehrer',
        name: 'Gast-Lehrkraft',
        pin: '1234',
        role: 'teacher',
        active: true,
        createdAt: Date.now(),
        lastLoginAt: Date.now()
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_ACTIVE_USER_KEY, JSON.stringify(fallbackUser));
      }
      this.notifyListeners(fallbackUser);
      return { success: true, user: fallbackUser };
    }

    return {
      success: false,
      error: 'Ungültiger PIN. Bitte überprüfe deinen 4-stelligen Lehrer-PIN.'
    };
  }

  public logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOCAL_STORAGE_ACTIVE_USER_KEY);
    }
    this.notifyListeners(null);
  }

  public onAuthChange(callback: (user: PortalUser | null) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  private notifyListeners(user: PortalUser | null) {
    this.listeners.forEach((cb) => {
      try {
        cb(user);
      } catch (e) {
        console.error("Auth listener callback error:", e);
      }
    });
  }
}

export const teacherAuthService = new TeacherAuthService();
