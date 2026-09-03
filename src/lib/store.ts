import { useCallback, useEffect, useState } from "react";
import {
  companyData,
  enquiriesData,
  galleryData,
  homepageData,
  leadershipData,
  projectsData,
  servicesData,
  settingsData,
  testimonialsData,
  type Company,
  type Enquiry,
  type GalleryItem,
  type Homepage,
  type Leadership,
  type Project,
  type Service,
  type Settings,
  type Testimonial,
} from "@/data/mockData";

export type StoreShape = {
  company: Company;
  homepage: Homepage;
  services: Service[];
  projects: Project[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  leadership: Leadership;
  enquiries: Enquiry[];
  settings: Settings;
};

const KEY = "prospera-arcon-data-v1";
const EVENT = "prospera-store-change";

export function defaultStore(): StoreShape {
  return JSON.parse(
    JSON.stringify({
      company: companyData,
      homepage: homepageData,
      services: servicesData,
      projects: projectsData,
      gallery: galleryData,
      testimonials: testimonialsData,
      leadership: leadershipData,
      enquiries: enquiriesData,
      settings: settingsData,
    }),
  ) as StoreShape;
}

export function getStore(): StoreShape {
  if (typeof window === "undefined") return defaultStore();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultStore();
    return { ...defaultStore(), ...(JSON.parse(raw) as Partial<StoreShape>) } as StoreShape;
  } catch {
    return defaultStore();
  }
}

export function saveStore(next: StoreShape) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function updateStore<K extends keyof StoreShape>(key: K, value: StoreShape[K]) {
  const next = { ...getStore(), [key]: value };
  saveStore(next);
}

export function resetStore() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function newId(prefix: string) {
  return `${prefix}${Date.now().toString(36)}${Math.floor(Math.random() * 1000)}`;
}

/** Reactive read of the whole store; hydration-safe (starts from defaults). */
export function useStore(): StoreShape {
  const [state, setState] = useState<StoreShape>(() => defaultStore());

  useEffect(() => {
    const sync = () => setState(getStore());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return state;
}

/** Reactive slice + setter that persists. */
export function useStoreSlice<K extends keyof StoreShape>(key: K) {
  const store = useStore();
  const set = useCallback(
    (value: StoreShape[K]) => updateStore(key, value),
    [key],
  );
  return [store[key], set] as const;
}

export function addEnquiry(entry: Omit<Enquiry, "id" | "status" | "createdAt">) {
  const store = getStore();
  const enquiry: Enquiry = {
    ...entry,
    id: newId("e"),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  saveStore({ ...store, enquiries: [enquiry, ...store.enquiries] });
  return enquiry;
}
