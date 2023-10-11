import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import MapScreen from "../screens/MapScreen";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
	return (
		<Stack.Navigator initialRouteName="profile" screenOptions={{headerShown: false}}>
			<Stack.Screen name="profile" component={Profile} />
			<Stack.Screen name="mapScreen" component={MapScreen} />
		</Stack.Navigator>
	);
};

export default ProfileNav;
