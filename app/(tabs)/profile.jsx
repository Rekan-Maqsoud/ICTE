import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { logout } from '@/assets/appwritedb'
import { useRouter } from 'expo-router'
import { AuthContext } from '../AuthContext'

const profile = () => {
  const {setLoggedIn , setCurrentUser, setLoading} = useContext(AuthContext);
  const router = useRouter();
  const handleLogout = async( ) => {
    setLoading(true);
    await logout();
    await setLoggedIn(false);
    setCurrentUser('')
    setLoading(false);
    router.replace('/(auth)/signIn')
    
  }
  return (
    
      <TouchableOpacity onPress={handleLogout}><Text style={styles.text}>Log Out</Text></TouchableOpacity>
    
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