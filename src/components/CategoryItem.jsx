import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({category}) => {

	const {navigate} = useNavigation();

	return (
		<Pressable
			onPress={() => navigate("products", {category})}
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
