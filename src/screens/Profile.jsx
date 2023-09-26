import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const Profile = () => {
	return (
		<View style={styles.container}>
			<Header title="Mi perfil" />
			<View style={styles.infoContainer}>
				<Image
					style={styles.image}
					source={{
						uri: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png",
					}}
				/>
				<View style={styles.buttonsContainer}>
					<Pressable onPress={() => console.log("Tomar foto")}>
						<FontAwesome name="camera" size={36} color={colors.darkGray} />
						{/* <Text>Tomar foto</Text> */}
					</Pressable>
					<Pressable onPress={() => console.log("Seleccionar foto")}>
						<FontAwesome name="picture-o" size={36} color={colors.darkGray} />
						{/* <Text>Seleccionar foto</Text> */}
					</Pressable>
					<Pressable onPress={() => console.log("Seleccionar ubicación")}>
						<Ionicons name="location" size={36} color={colors.darkGray} />
						{/* <Text>Abrir ubicación</Text> */}
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		alignItems: "center",
		flex: 0.8,
		marginTop: 15,
	},
	image: {
		height: 200,
		width: 200,
	},
	buttonsContainer: {
		width: "80%",
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
