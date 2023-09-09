import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";

const Categories = () => {
	return (
		<View>
			<FlatList
				data={categories}
				keyExtractor={(item) => item}
				renderItem={({item}) => <CategoryItem category={item} />}
			/>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});