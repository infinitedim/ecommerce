/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { ProductTypes } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsServices = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  reducerPath: "productsServices",
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductTypes[], void>({
      query: () => "/products",
    }),
    sortAllProducts: builder.query<ProductTypes[], void>({
      query: () => "/products?sort=desc",
    }),
    getProductById: builder.query<ProductTypes, string | undefined>({
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
