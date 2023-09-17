import { SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/theme/fonts";
import Home from "./src/screens/Home";
import Products from "./src/screens/Products";
import ProductDetails from "./src/screens/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigation from "./src/navigation/RouteNavigation";

export default function App() {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return;
	}

	return (
		<NavigationContainer style={styles.mainContainer}>
			<RouteNavigation />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});
