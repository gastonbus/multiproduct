import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Search from "../components/Search";

const Home = ({setSelectedCategory}) => {
	return (
		<View>
			<Header title={"Categorias"} setSelectedCategory={setSelectedCategory}/>
			<Categories setSelectedCategory={setSelectedCategory} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
