import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Post from '@/assets/components/post'

const home = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
      <Text style={styles.text}>Welcome To ICTE Community!</Text>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default home

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