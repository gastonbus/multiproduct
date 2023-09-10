import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { colors } from "./src/theme/colors";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Home from "./src/screens/Home";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";
import { useFonts } from "expo-font";
import { fonts } from "./src/theme/fonts";

export default function App() {

	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}
	
	return (
		<SafeAreaView style={styles.mainContainer}>
			{/* <Home /> */}
      {/* <Search /> */}
      <Products category="tops"/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	}
});
