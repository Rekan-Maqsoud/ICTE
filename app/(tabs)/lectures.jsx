import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const lectures = () => {
  return (
    <SafeAreaProvider>
      <Text style={styles.text}>Your Lectures Will Appear Here!</Text>
    </SafeAreaProvider>
  )
}

export default lectures

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