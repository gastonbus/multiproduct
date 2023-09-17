import {
	Pressable,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
	const { height, width } = useWindowDimensions();

	const navigation = useNavigation();

	return (
		<View style={height < 350 ? styles.containerMin : styles.container}>
			<View style={{ flex: 0.15 }}>
				{title !== "Categorias" && (
					<Pressable onPress={() => navigation.goBack()}>
						<AntDesign
							name="caretleft"
							size={24}
							color={colors.blueGray}
							style={styles.backIcon}
						/>
					</Pressable>
				)}
			</View>
			<View style={styles.headerTextContainer}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
			<View style={{ flex: 0.15 }}></View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 0.15,
		backgroundColor: colors.lightGreen,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		paddingTop: 20,
	},
	containerMin: {
		flexDirection: "row",
		flex: 0.1,
		backgroundColor: colors.lightGreen,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		paddingTop: 20,
	},
	headerTextContainer: {
		flex: 0.7,
		justifyContent: "center",
	},
	headerText: {
		color: colors.blueGray,
		fontSize: 40,
		textAlign: "center",
		fontFamily: "ShareTechRegular",
	},
	backIcon: {
		marginLeft: 15,
	},
});
