import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
	return (
		<View>
			<Text>{product.title}</Text>
			<Text>U$S{product.price}</Text>
			<Image height={50} width={50} source={{ uri: product.images[0] }} />
		</View>
	);
};

export default ProductItem;

const styles = StyleSheet.create({});
