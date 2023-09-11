import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { AntDesign } from '@expo/vector-icons';

const Header = ({title, setSelectedCategory}) => {
	return (
		<View style={styles.container}>
			<View style={{flex: 0.15}}>
				{title === 'Productos' && 
					<Pressable onPress={() => setSelectedCategory(null)}>
						<AntDesign name="caretleft" size={24} color={colors.blueGray} style={styles.backIcon} />
					</Pressable>					
				}
			</View>
			<View style={styles.headerTextContainer}>
				<Text style={styles.headerText}>{title}</Text>
			</View>
			<View style={{flex: 0.15}}></View>
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
	headerTextContainer: {
		flex: 0.7,
		justifyContent: "center",
	},
	headerText: {
		color: colors.blueGray,
		fontSize: 30,
		fontWeight: "700",
		textAlign: "center",
	},
	backIcon: {
		marginLeft: 15,
	}
});
