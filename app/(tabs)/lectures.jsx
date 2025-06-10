import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const lectures = () => {
  return (
    <View>
      <Text style={styles.text}>Your Lectures Will Appear Here!</Text>
    </View>
  )
}

export default lectures

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