import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

const Header = ({title}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGreen,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		width: "100%",
		padding: 20,

	},
	headerText: {
		color: colors.blueGray,
		fontSize: 30,
		fontWeight: "700",
		marginTop: 20
	}
});
