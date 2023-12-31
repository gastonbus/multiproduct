import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigation from "./RootNavigation";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import ProfileNav from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNav = () => {
	return (
		<Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
			<Tab.Screen
				name="rootNavigation"
				component={RootNavigation}
				options={{
					tabBarIcon: ({focused}) => (
						<Ionicons name="home-sharp" size={28} color={focused ? "black" : colors.lightGray} />
					),
				}}
			/>
			<Tab.Screen
				name="profileNav"
				component={ProfileNav}
				options={{
					tabBarIcon: ({focused}) => (
						<Ionicons name="person-sharp" size={28} color={focused ? "black" : colors.lightGray} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNav;

const styles = StyleSheet.create({});
