import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "../features/api/apiSlice";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware().concat(productsApi.middleware),
    ],
    preloadedState,
  });

export const store = setupStore();
export const AppDispatch = ["dispatch"];
