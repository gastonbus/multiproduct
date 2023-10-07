import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../firebase/firebaseAuth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slices/authSlice'

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

      console.log(response);
    } catch (error) {
      console.log("Error de login:", error)
    }
  }

  return (
    <SafeAreaView>
      <TextInput
        placeholder='Email'
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        placeholder='Password'
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <TouchableHighlight onPress={handleLogin}>
        <Text>Sign in</Text>
      </TouchableHighlight>
      <View>
        <Text>Aún no tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("register")}>
          <Text>Registrate!</Text>
        </Pressable>
      </View>
    </SafeAreaView>

  )
}

export default Login

const styles = StyleSheet.create({})