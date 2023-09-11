import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../data/categories";
import CategoryItem from "./CategoryItem";

const Categories = ({setSelectedCategory}) => {
	return (
		<View style={{flex: 0.85}}>
			<FlatList
				data={categories}
				keyExtractor={(item) => item}
				renderItem={({item}) => <CategoryItem category={item} setSelectedCategory={setSelectedCategory} />}
			/>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({});
