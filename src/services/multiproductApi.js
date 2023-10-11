import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { multiproductBaseUrl } from '../firebase/database'

export const multiproductApi = createApi({
  reducerPath: 'multiproductApi',
  baseQuery: fetchBaseQuery({baseUrl: multiproductBaseUrl}),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getImage: builder.query({
      query: () => "image.json",
    }),
    saveImage: builder.mutation({
      query: (image) => ({
        url: "image.json",
        method: "PUT",
        body: image,
      }),
    }),
  })
})

export const { useGetCategoriesQuery, useGetProductsQuery, useGetImageQuery, useSaveImageMutation } = multiproductApi;