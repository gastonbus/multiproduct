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
import { useState } from "react";

export default function App() {

	const [selectedCategory, setSelectedCategory] = useState(null);

	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return null;
	}
	
	return (
		<SafeAreaView style={styles.mainContainer}>
			{
				selectedCategory === null ?
				<Home setSelectedCategory={setSelectedCategory} />
				:
				<Products category={selectedCategory} setSelectedCategory={setSelectedCategory}/>
			}
      {/* <Search /> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	}
});
