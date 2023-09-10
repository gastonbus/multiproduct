import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, setSelectedCategory}) => {
	return (
		<View style={styles.container}>
			{title === 'Productos' && 
				<Pressable onPress={() => setSelectedCategory(null)}>
					<AntDesign name="caretleft" size={24} color={colors.blueGray} style={styles.backIcon} />
				</Pressable>					
			}
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.lightGreen,
		justifyContent: "flex-start",
		alignItems: "center",
		height: 100,
		width: "100%",
		paddingTop: 20,

	},
	headerText: {
		color: colors.blueGray,
		fontSize: 30,
		fontWeight: "700",
		marginLeft: "25%",
	},
	backIcon: {
		marginLeft: 20,

	}
});
