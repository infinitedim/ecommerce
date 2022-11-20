import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import AppSlice from "./app.slice";

const rootReducer = combineReducers({
  // ... other reducers
  app: AppSlice.reducer,
  auth: authSlice.reducer,
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      // ... other middleware
    ],
    preloadedState,
  });

export const store = setupStore();
export const AppDispatch = ["dispatch"];
