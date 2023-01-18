import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => {
    return {
      getAllProducts: builder.query({
        query: () => "/products",
      }),
      sortProducts: builder.query({
        query: () => "/products?sort=desc",
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
    };
  },
});

export const {
  useGetAllProductsQuery,
  useSortProductsQuery,
  useGetProductByIdQuery,
} = productsApi;
