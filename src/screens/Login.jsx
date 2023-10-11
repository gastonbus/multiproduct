import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../firebase/firebaseAuth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slices/authSlice'
import { colors } from '../theme/colors'

const Login = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Ingresando...");
    try {
      const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
      // console.log(response);
    } catch (error) {
      console.log("Error de login:", error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Email'
        onChangeText={(email) => setEmail(email)}
        value={email}
        />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <TouchableHighlight style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Ingresar</Text>
      </TouchableHighlight>
      <View style={styles.registerOptionContainer}>
        <Text>Aún no tenés una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("register")}>
          <Text style={styles.registerText}>Registrate!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 300,
    height: 45,
    backgroundColor: "white",
    fontSize: 14,
    marginTop: 24,
    padding: 10,
    borderRadius: 15, 
  },
  signInButton: {
    marginTop: 25,
    width: 100,
    height: 32,
    backgroundColor: colors.darkOrange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signInButtonText: {
    color: colors.white,
  },
  registerOptionContainer: {
    flexDirection: "row", 
    marginTop: 10,
  },
  registerText: {
    color: colors.blueGray,
    marginLeft: 5,
  },
})