import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { logout } from '@/assets/appwritedb'
import { router } from 'expo-router'

const profile = () => {
  const handleLogout = async( ) => {
    logout();
    // router.replace('/(auth)/signIn')
  }
  return (
    
    <SafeAreaProvider>
      <TouchableOpacity onPress={handleLogout}><Text style={styles.text}>Log Out</Text></TouchableOpacity>
    </SafeAreaProvider>
  )
}

export default profile

const styles = StyleSheet.create({
  text:{
    fontSize: 40,
    fontFamily: "arial",
    fontWeight: "bold",
    color: "#292929",
    textAlign: 'center',
    margin:  'auto',
    textShadowColor: '#888',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  }
})