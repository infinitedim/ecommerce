import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { userSlice } from "./appSlice";

const rootReducer = combineReducers({
  // ... other reducers
  user: userSlice.reducer,
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
