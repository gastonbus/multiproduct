import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { products } from "../../data/products";

const homeSlice = createSlice({
	name: "home",
	initialState: {
		allCategories: categories,
		allProducts: products,
		selectedCategory: "",
		filteredProductsByCategory: [],
		selectedProduct: {},
	},
	reducers: {
		setCategory: (state, action) => {
			state.selectedCategory = action.payload;
			state.filteredProductsByCategory = state.allProducts.filter(
				(product) => product.category === state.selectedCategory
			);
		},
		setProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
	},
});

export const { setCategory, setProduct } = homeSlice.actions;

export default homeSlice.reducer;
