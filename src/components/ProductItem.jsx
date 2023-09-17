import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ product }) => {

	const {navigate} = useNavigation();

	return (
		<Pressable onPress={() => navigate("productDetails", {product})}>
			<View style={styles.container}>
				<View style={styles.productImageContainer}>
					<Image
						style={styles.productImage}
						source={{ uri: product.images[0] }}
					/>
				</View>
				<View style={styles.descriptionContainer}>
					<Text style={styles.productTitle}>{product.title}</Text>
					<View style={styles.priceContainer}>
						<Text style={styles.productPriceWithDicount}>
							U$S{" "}
							{(product.price * (1 - product.discountPercentage / 100)).toFixed(
								2
							)}
						</Text>
						<Text style={styles.productDiscount}>
							{product.discountPercentage}% OFF
						</Text>
					</View>
					<Text style={styles.productPrice}>
						U$S {product.price.toFixed(2)}
					</Text>
				</View>
			</View>
		</Pressable>
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
	productImageContainer: {},
	productImage: {
		width: 80,
		height: 80,
	},
	descriptionContainer: {
		width: "100%",
		marginLeft: 10,
	},
	productTitle: {
		fontFamily: "GlutenBold",
		maxWidth: "75%",
		fontSize: 20,
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	productPriceWithDicount: {
		fontFamily: "GlutenRegular",
		fontSize: 20,
		fontWeight: "600",
	},
	productDiscount: {
		fontSize: 18,
		color: colors.lightGreen,
		fontWeight: "600",
		marginLeft: 15,
		fontFamily: "GlutenLight",
	},
	productPrice: {
		color: colors.red,
		textDecorationLine: "line-through",
		fontSize: 12,
		fontFamily: "GlutenLight",
	},
});
