import React from 'react'
import {  StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const chat = () => {
  return (
    <SafeAreaView>
    <Text style={styles.text}>Group Chats will appear Here !</Text>
    </SafeAreaView>
  )
}

export default chat

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