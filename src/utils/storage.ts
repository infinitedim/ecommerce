import type { LocalStorageTypes } from "@/interfaces";

export const LocalStorage: LocalStorageTypes = {
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);

    if (item !== null) {
      return JSON.parse(item);
    }

    return null;
  },
  set: (key: string, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
