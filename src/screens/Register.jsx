import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../firebase/firebaseAuth'

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    console.log("Registrando usuario...")
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      console.log(response);
      navigation.navigate("login");
    } catch (error) {
      console.log("Ocurrió un error:", error);
    }
  }

  return (
    <SafeAreaView>
      <TextInput
        placeholder='Ingrese un email válido'
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        placeholder='Ingrese una contraseña'
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <TouchableHighlight onPress={handleRegister}>
        <Text>Registrarme</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})