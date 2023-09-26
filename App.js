import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/theme/fonts";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./src/navigation/TabNav";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return;
	}

	return (
		<Provider store={store}>
			<NavigationContainer style={styles.mainContainer}>
				{/* <RootNavigation /> */}
				<TabNav />
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});
