import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";


const Products = ({ route }) => {

	const products = useSelector(state => state.homeSlice.allProducts);
	const filteredProductsByCategory = useSelector(state => state.homeSlice.filteredProductsByCategory);

	const {category} = route.params;

	const [searchText, setSearchText] = useState("");

	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		setFilteredProducts(filteredProductsByCategory);

		if (searchText) {
		  setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()) && product.category === category));
		}
	}, [category, searchText]);

	return (
		<SafeAreaView style={styles.productsContainer}>
			<Header title={category.charAt(0).toUpperCase() + category.slice(1)} />
			<Search searchText={searchText} setSearchText={setSearchText} />
			<View style={styles.flatListContainer}>
				<FlatList
					data={filteredProducts}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ProductItem product={item} />}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Products;

const styles = StyleSheet.create({
	productsContainer: {
		flex: 1,
	},
	flatListContainer: {
		flex: 0.8,
	}
});
