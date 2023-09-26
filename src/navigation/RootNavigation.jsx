import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
			<Stack.Screen name="home" component={Home} />
			<Stack.Screen name="products" component={Products} />
			<Stack.Screen name="productDetails" component={ProductDetails} />
		</Stack.Navigator>
	);
};

export default RootNavigation;
