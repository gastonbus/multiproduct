import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { colors } from "./src/theme/colors";
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import Home from "./src/screens/Home";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";

export default function App() {
	return (
		<SafeAreaView>
			{/* <Home /> */}
      {/* <Search /> */}
      <Products category="smartphones"/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
