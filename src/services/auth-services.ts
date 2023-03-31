import { createApi } from "@reduxjs/toolkit/query/react";
import {
  HttpResponse,
  UserLoginRequestBodyTypes,
  UserLoginResponseTypes,
  UserRegisterRequestBodyTypes,
} from "@/interfaces";
import baseQuery from "./base-query";

const authServices = createApi({
  baseQuery,
  reducerPath: "authServices",
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    register: builder.mutation<
      HttpResponse<unknown>,
      UserRegisterRequestBodyTypes
    >({
      query: (body) => ({
        url: "/users/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<
      HttpResponse<UserLoginResponseTypes>,
      UserLoginRequestBodyTypes
    >({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<
      HttpResponse<{ name: string; email: string }>,
      void
    >({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery } =
  authServices;

export default authServices;
