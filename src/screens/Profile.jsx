import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import * as ImagePicker from 'expo-image-picker';
import { useGetImageQuery, useSaveImageMutation } from "../services/multiproductApi";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';

const Profile = () => {

	const [saveImage, result] = useSaveImageMutation();

	const {data, refetch} = useGetImageQuery();

	// console.log(data);

	const navigation = useNavigation();

	const [location, setLocation] = useState(null);

	const defaultImage = "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png";

	const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
			base64: true,
    });

    if (!result.canceled) {
			await saveImage({
				image: `data:image/jpeg;base64,${result.assets[0].base64}`,
			});
			refetch();
    }
  };

	const pickCameraPhoto = async () => {
    let reqPermResult = await ImagePicker.requestCameraPermissionsAsync();

    if (reqPermResult.granted === false) {
      alert("Es necesario que permitas el acceso a la cámara.");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });

      if (!result.canceled) {
        await saveImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        refetch();
      }
    }
  };

	const openAlert = () => {
		return Alert.alert('Permiso denegado', 'No has permitido acceso a la ubicación.', [
			// {
			// 	text: 'Ok',
			// 	onPress: () => console.log('Cancel Pressed'),
			// 	style: 'cancel',
			// },
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		]);

	}

	const getLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== 'granted') {
			console.log("El acceso a la ubicación fue denegado.");
			openAlert();
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
		setLocation(location);
    navigation.navigate("mapScreen", {location});
	}
	// console.log(location);
	return (
		<View style={styles.container}>
			<Header title="Mi perfil" />
			<View style={styles.infoContainer}>
				<Image
					style={styles.image}
					source={{
						uri: data ? data.image : defaultImage,
					}}
				/>
				<View style={styles.buttonsContainer}>
					<Pressable onPress={() => pickCameraPhoto()}>
						<FontAwesome name="camera" size={36} color={colors.darkGray} />
						{/* <Text>Tomar foto</Text> */}
					</Pressable>
					<Pressable onPress={() => pickImage()}>
						<FontAwesome name="picture-o" size={36} color={colors.darkGray} />
						{/* <Text>Seleccionar foto</Text> */}
					</Pressable>
					<Pressable onPress={() => getLocation()}>
						<Ionicons name="location" size={36} color={colors.darkGray} />
						{/* <Text>Abrir ubicación</Text> */}
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		alignItems: "center",
		flex: 0.8,
		marginTop: 15,
	},
	image: {
		height: 200,
		width: 200,
		borderRadius: 100
	},
	buttonsContainer: {
		width: "80%",
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
