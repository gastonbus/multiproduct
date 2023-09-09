import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const Search = ({searchText, setSearchText}) => {

	return (
		<View>
			<TextInput
				// style={}
				value={searchText}
				placeholder="Escriba aquí"
				onChangeText={(value) => setSearchText(value)}
			/>
			<Pressable onPress={() => setSearchText("")}>
				<AntDesign name="closecircleo" />
			</Pressable>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({});
