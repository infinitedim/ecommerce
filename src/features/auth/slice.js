import { createSlice } from "@reduxjs/toolkit";
import { Storage } from "../../utils/storage";

const { SessionStorage, LocalStorage } = Storage;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: SessionStorage.getValue("token") || null,
    uid: null,
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, { payload }) => ({
      ...state,
      ...payload,
    }),

    logout: (state) => {
      state.token = null;
      state.uid = null;
      state.isAuthenticated = false;

      SessionStorage.clearAll();
      LocalStorage.clearAll();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice;
