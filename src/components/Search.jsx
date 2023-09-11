import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const Search = ({searchText, setSearchText}) => {

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.searchInput}
				value={searchText}
				placeholder="Escriba aquí"
				onChangeText={(value) => setSearchText(value)}
			/>
			<Pressable style={styles.clearIcon} onPress={() => setSearchText("")}>
				<AntDesign name="closecircleo" size={25} color={colors.lightGreen}/>
			</Pressable>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 0.05,
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
		paddingBottom: 15,
		paddingTop: 15,
	},
	searchInput: {
		width: "70%",
		borderWidth: 1,
		borderColor: colors.lightGreen,
		height: 40,
		padding: 10
	},
	clearIcon: {
		marginLeft: 15,

	}
});
