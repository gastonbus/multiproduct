import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import { multiproductApi } from "../services/multiproductApi";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: { 
    homeSlice,
    [multiproductApi.reducerPath]: multiproductApi.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(multiproductApi.middleware),
})