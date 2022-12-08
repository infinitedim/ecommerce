import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: `${baseUrl}${url}`,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: () => ({ url: "/products", method: "get" }),
      }),
      getProductById: builder.query({
        query: (id) => ({ url: `/products/${id}`, method: "get" }),
      }),
    };
  },
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
