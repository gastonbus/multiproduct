import { Button, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { products } from "../data/products";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";

const ProductDetails = ({route}) => {

  const { product } = route.params;

	// const product = products.find((elem) => elem.id === id);

	const productRatingRounded = Math.floor(product.rating);

	const filledStars = [];
	const outlinedStars = [];

	for (let i = 0; i < productRatingRounded; i++) {
		filledStars.push(
			<AntDesign key={i} name="star" size={24} color={colors.lightOrange} />
		);
	}

	for (let i = 0; i < 5 - productRatingRounded; i++) {
		outlinedStars.push(
			<AntDesign key={i} name="staro" size={24} color={colors.lightOrange} />
		);
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header title="Detalle" />
			<View style={styles.productImageContainer}>
				<Image
					style={styles.productImage}
					source={{ uri: products[0].images[0] }}
				/>
			</View>
			<View style={styles.productDetailsContainer}>
				<Text style={styles.productBrand}>{product.brand}</Text>
				<Text style={styles.productTitle}>{product.title}</Text>
				<Text style={styles.productDescription}>{product.description}</Text>
				<View style={styles.priceContainer}>
					<Text style={styles.productPriceWithDicount}>
						U$S{" "}
						{(product.price * (1 - product.discountPercentage / 100)).toFixed(
							2
						)}
					</Text>
					<Text style={styles.productPrice}>
						U$S {product.price.toFixed(2)}
					</Text>
				</View>
				<Text style={styles.productDiscount}>
					{product.discountPercentage}% OFF
				</Text>
				<Text style={styles.productStock}>
					Disponibles: {product.stock} un.
				</Text>
				<View style={styles.ratingContainer}>
					<View style={styles.ratingStarsContainer}>
						{filledStars}
						{outlinedStars}
					</View>
					<Text style={styles.productRating}>{product.rating}</Text>
				</View>
				<Button
					onPress={() => console.log('Comprar', product.title)}
					title="Comprar"
					color={colors.darkGreen}
				/>
			</View>
		</SafeAreaView>
	);
};

export default ProductDetails;

const styles = StyleSheet.create({
	productImageContainer: {
		flex: 0.3,
		alignItems: "center",
		padding: 20,
	},
	productImage: {
		width: 200,
		height: 200,
		borderRadius: 20,
	},
	productDetailsContainer: {
		flex: 0.7,
		alignItems: "center",
		padding: 20,
		justifyContent: "flex-start",
	},
	productBrand: {
		fontFamily: "GlutenBold",
		fontSize: 24,
	},
	productTitle: {
		fontFamily: "GlutenBold",
		fontSize: 36,
	},
	productDescription: {
		fontFamily: "GlutenRegular",
		fontSize: 18,
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	productPriceWithDicount: {
		fontFamily: "GlutenRegular",
		fontSize: 36,
	},
	productDiscount: {
		fontFamily: "GlutenRegular",
		fontSize: 20,
		color: colors.lightGreen,
	},
	productPrice: {
		color: colors.red,
		textDecorationLine: "line-through",
		fontSize: 18,
		fontFamily: "GlutenLight",
		marginLeft: 15,
	},
	productStock: {
		color: colors.darkGreen,
		fontSize: 18,
		fontFamily: "GlutenLight",
	},
	ratingContainer: {
		alignItems: "center",
		padding: 15,
	},
	ratingStarsContainer: {
		flexDirection: "row",
		marginTop: 5,
	},
	productRating: {
		fontSize: 22,
		fontFamily: "GlutenLight",
		marginLeft: 15,
		color: colors.lightOrange,
	},
});
