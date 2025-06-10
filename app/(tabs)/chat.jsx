import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const chat = () => {
  return (
    <SafeAreaProvider>
      <Text style={styles.text}>Group Chats will appear Here !</Text>
    </SafeAreaProvider>
  )
}

export default chat

const styles = StyleSheet.create({
  text:{
    fontSize: 40,
    fontFamily: "arial",
    fontWeight: "bold",
    color: "#292929",
    padding: 20,
    textAlign: 'center',
    margin:  'auto',
  }
})