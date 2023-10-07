import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/theme/fonts";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainNav from "./src/navigation/MainNav";


export default function App() {
	const [fontsLoaded] = useFonts(fonts);

	if (!fontsLoaded) {
		return;
	}

	return (
		<Provider store={store}>
			<View style={styles.mainContainer}>
				<MainNav />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});
