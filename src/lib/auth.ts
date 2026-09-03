// Demo-only frontend authentication. NOT production-grade auth.
import { useEffect, useState } from "react";

const KEY = "prospera-admin-session";
const EVENT = "prospera-auth-change";

export const DEMO_EMAIL = "admin@prosperaarcon.com";
export const DEMO_PASSWORD = "Admin@123";

export function login(email: string, password: string): boolean {
  if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return false;
  }
  sessionStorage.setItem(KEY, JSON.stringify({ email: DEMO_EMAIL, at: Date.now() }));
  window.dispatchEvent(new CustomEvent(EVENT));
  return true;
}

export function logout() {
  sessionStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(sessionStorage.getItem(KEY));
}

/** null = still checking (SSR / first paint) */
export function useAuth(): boolean | null {
  const [authed, setAuthed] = useState<boolean | null>(null);
  useEffect(() => {
    const sync = () => setAuthed(isAuthenticated());
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);
  return authed;
}
