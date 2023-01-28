/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsServices = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  reducerPath: "productsServices",
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    sortAllProducts: builder.query({
      query: () => "/products?sort=desc",
    }),
    getProductById: builder.query({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useSortAllProductsQuery,
  useGetProductByIdQuery,
} = productsServices;

export default productsServices;
