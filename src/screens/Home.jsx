import { StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { useGetCategoriesQuery } from "../services/multiproductApi";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {

	const datosFirebase = useGetCategoriesQuery();

	// console.log(JSON.stringify(datosFirebase.data, null, " "));

	return (
		<SafeAreaView style={{flex: 1}}>
			<Header title={"Categorias"} />
			<Categories />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
