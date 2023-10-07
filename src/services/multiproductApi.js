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
    })
  })
})

export const { useGetCategoriesQuery, useGetProductsQuery } = multiproductApi;