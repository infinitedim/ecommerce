import { createSlice } from "@reduxjs/toolkit";
import { Storage } from "../../utils/storage";

const { SessionStorage, LocalStorage } = Storage;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    logout: (state) => {
      state.isAuthenticated = false;

      SessionStorage.clearAll();
      LocalStorage.clearAll();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice;
