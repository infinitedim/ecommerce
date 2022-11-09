/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
const SessionStorage = {
  getValue(key) {
    try {
      const item = window.sessionStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  },
  setValue(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
  clearAll() {
    window.sessionStorage.clear();
  },
};

const LocalStorage = {
  getValue(key) {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  },
  setValue(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
  clearAll() {
    window.localStorage.clear();
  },
};

export const Storage = {
  SessionStorage,
  LocalStorage,
};
