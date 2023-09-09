import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({title}) => {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});