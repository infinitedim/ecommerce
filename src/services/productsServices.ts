import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsServices = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  reducerPath: "productsServices",
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (body) => ({
        url: "/products",
        method: "GET",
        body,
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } =
  productsServices;

export default productsServices;
