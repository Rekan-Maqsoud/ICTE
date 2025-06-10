import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'

import React from 'react'


const _layout = () => {
  return (
  <Tabs screenOptions={{
    tabBarShowLabel: false,
    tabBarIconStyle: {
      height: '100%',
      width: '100%',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    tabBarStyle: {
      borderRadius: 20,
      backgroundColor: '#2',
      borderWidth: 1,
      borderColor: '#212121',
      marginHorizontal: 20,
      marginBottom: 10,
      height: 58,

    }
  }} >
      <Tabs.Screen 
      name="index"
      options={{
        headerShown: false, 
        
        tabBarIcon: ({focused}) => (
          <>
          <ImageBackground >
          <Image source={require("@/assets/images/home.png")} 
          style={
            { maxHeight: 30 , maxWidth: 30, margin: 'auto'}
          }/>
          <Text>Home</Text>
          </ImageBackground>
          </>
        ),
      }}
      
      />
      <Tabs.Screen 
      name="chat"
      options={{
        headerShown: false, 
        
        tabBarIcon: ({focused}) => (
          <>
          <ImageBackground >
          <Image source={require("@/assets/images/chat.png")} 
          style={
            { maxHeight: 30 , maxWidth: 30, margin: 'auto'}
          }/>
          <Text>Chat</Text>
          </ImageBackground>
          </>
        ),
      }}
      
      />
      <Tabs.Screen 
      name="lectures"
      options={{
        headerShown: false, 
        
        tabBarIcon: ({focused}) => (
          <>
          <ImageBackground >
          <Image source={require("@/assets/images/leacture.png")} 
          style={
            { maxHeight: 30 , maxWidth: 30, margin: 'auto'}
          }/>
          <Text>Lecture</Text>
          </ImageBackground>
          </>
        ),
      }}
      
      />
      <Tabs.Screen 
      name="profile"
      options={{
        headerShown: false, 
        
        tabBarIcon: ({focused}) => (
          <>
          <ImageBackground >
          <Image source={require("@/assets/images/profile.png")} 
          style={
            { maxHeight: 30 , maxWidth: 30, margin: 'auto'}
          }/>
          <Text>Profile</Text>
          </ImageBackground>
          </>
        ),
      }}
      
      />
    </Tabs>
    
    )
}

export default _layout

const styles = StyleSheet.create({})