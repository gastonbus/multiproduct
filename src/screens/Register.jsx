import { Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../firebase/firebaseAuth'
import { colors } from '../theme/colors'

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    console.log("Registrando usuario...")
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // console.log(response);
      navigation.navigate("login");
    } catch (error) {
      console.log("Ocurrió un error:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese un email válido'
        onChangeText={(email) => setEmail(email)}
        value={email}
        />
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese una contraseña'
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <TouchableHighlight style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarme</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default Register

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
  registerButton: {
    marginTop: 25,
    width: 100,
    height: 32,
    backgroundColor: colors.darkOrange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: colors.white,
  },

})