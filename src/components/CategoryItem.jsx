import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/homeSlice";

const CategoryItem = ({category}) => {

	const dispatch = useDispatch();

	const navigation = useNavigation();

	const onPressItem = () => {
		dispatch(setCategory(category));
		navigation.navigate("products", {category});
	}

	return (
		<Pressable
			onPress={() => onPressItem()}
		>
			<View style={styles.categoryContainer}>
				<Text style={styles.categoryText}>{category}</Text>
			</View>
		</Pressable>
	);
};

export default CategoryItem;

const styles = StyleSheet.create({
	categoryContainer: {
		backgroundColor: colors.blueGray,
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		alignItems: "center",
		padding: 10,
		borderRadius: 25,
	},
	categoryText: {
		color: colors.lightOrange,
		fontSize: 22,
		fontWeight: "600",
	},
});
