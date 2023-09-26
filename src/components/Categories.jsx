import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

const Categories = () => {

	const categories = useSelector(state => state.homeSlice.allCategories);
	
	return (
		<View style={{flex: 0.85}}>
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
