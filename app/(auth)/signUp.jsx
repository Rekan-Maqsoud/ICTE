import { logIn } from '@/assets/appwritedb'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthContext } from '../AuthContext'

const signUp = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  
  const handleLogIn = async () => {
      const result = await logIn(email,password);
      if(result.user)
        setLoggedIn(true);
  }
  return (
    <SafeAreaView >

      <View style={styles.container}>
        <Text style={styles.formLabel}>Create a New Account</Text>

      <Text style={styles.label}>Email </Text>
      <TextInput 
      style={styles.inputFields }
      placeholder='Email ...' 
      onChangeText={(text) => setEmail(text)}

      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput 
      style={styles.inputFields }
      placeholder='Password ...' 
      onChangeText={(text) => setPassword(text)}
      secureTextEntry
      />

      <TouchableOpacity onPress={handleLogIn} 
      style={styles.loginButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default signUp

const styles = StyleSheet.create({
  formLabel:{
    padding: 10,
    marginVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(31,31,31,0.8)'
  },
  label:{
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container:{
    margin: 20,
    marginVertical: 80,
    height: 600,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputFields:{
    fontSize: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.29)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(1, 1, 1, 0.47)',
    margin: 5,
    height: 65,
    width: '90%'
  },buttonText:{
    fontSize: 18,
    fontWeight: 'semibold',

  },
  loginButton:{
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(99, 208, 255, 0.62)',
    borderRadius: 10,
  },
})