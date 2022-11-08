/* eslint-disable no-console */
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/slice";

const baseUrl = process.env.REACT_APP_API_URL || ""; // Only for testing

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    headers.set("Content-Type", "application/json");

    const { token } = getState().auth;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithLogout = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) console.error(result.error);

  if (result.error?.status === 401) {
    api.dispatch(logout());
    return result;
  }

  return result;
};

export default baseQueryWithLogout;
