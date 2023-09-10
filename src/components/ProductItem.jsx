import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const ProductItem = ({ product }) => {
	return (
		<View style={styles.container}>
			<View style={styles.productImageContainer}>
				<Image style={styles.productImage} source={{ uri: product.images[0] }} />
			</View>
			<View style={styles.descriptionContainer}>
				<Text style={styles.productTitle} numberOfLines={1} ellipsizeMode="tail">{product.title}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.productPriceWithDicount}>U$S	{(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</Text>
					<Text style={styles.productDiscount}>{product.discountPercentage}% OFF</Text>
				</View>
					<Text style={styles.productPrice}>U$S {product.price.toFixed(2)}</Text>
			</View>
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 15,
		marginTop: 15,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
		padding: 10,
		// backgroundColor: colors.lightOrange,
	},
	productImageContainer: {

	},
	productImage: {
		width: 80,
		height: 80,
	},
	descriptionContainer: {

		marginLeft: 10,
	},
	productTitle: {
		maxWidth: "100%",
		fontSize: 20,
		fontWeight: "bold",
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	productPriceWithDicount: {
		fontSize: 20,
		fontWeight: "600",
	},
	productDiscount: {
		fontSize: 18,
		color: colors.lightGreen,
		fontWeight: "600",
		marginLeft: 15,
	},
	productPrice: {
		color: colors.red,
		textDecorationLine: "line-through",
		fontSize: 12,
	},
});
