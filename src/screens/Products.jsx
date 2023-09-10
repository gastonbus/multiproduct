import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../theme/colors";


const Products = ({ category, setSelectedCategory }) => {
	const [searchText, setSearchText] = useState("");

	const [filteredProductsByCategory, setFilteredProducts] = useState([]);

	useEffect(() => {
		setFilteredProducts(
			products.filter((product) => product.category === category)
		);

		if (searchText) {
		  setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase())));
		}
	}, [category, searchText]);

	return (
		<View style={styles.productsContainer}>
			<Header title="Productos" setSelectedCategory={setSelectedCategory}/>
			<Search searchText={searchText} setSearchText={setSearchText} />
			<View style={styles.flatListContainer}>
				<FlatList
					data={filteredProducts}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ProductItem product={item} />}
				/>
			</View>
		</View>
	);
};

export default Products;

const styles = StyleSheet.create({
	productsContainer: {
		flex: 1,
	},
	flatListContainer: {
		flex: 1,
	}
});
