import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";


const Home = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<Header title={"Categorias"} />
			<Categories />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
