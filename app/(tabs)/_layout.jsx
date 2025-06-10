import {  StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';

import React from 'react';
import Icon from '@/assets/components/icon';

const _layout = () => {
  return (
   <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', 
          borderRadius: 20,
          marginHorizontal: 30,
          marginBottom: 10,
          height: 55,
          maxWidth: 600,
        },
        tabBarIconStyle: {
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        },
      }}
    >
      <Tabs.Screen 
      name="index"
      options={{
        headerShown: false, 
        
        tabBarIcon: ({focused}) => (
          <Icon name={'Home'} 
          imagePath={focused ? require('@/assets/images/HomeColor.png') : require('@/assets/images/Home.png') }/>),
      }}
      
      />
      <Tabs.Screen 
      name="chat"
      options={{
      headerShown: false, 
        tabBarIcon: ({focused}) => (
          <Icon name={'Chat'} imagePath={focused ? require('@/assets/images/ChatColor.png') : require('@/assets/images/Chat.png')}/>
        ),
      }}
      
      />
      <Tabs.Screen 
      name="createPost"
      options={{
        headerShown: false, 
        
        tabBarIcon: ({focused}) => (
          <Icon name={'Post'} 
          imagePath={focused ? require('@/assets/images/plusColor.png') : require('@/assets/images/plus.png') }/>),
      }}
      
      />
      <Tabs.Screen 
      name="lectures"
      options={{
      headerShown: false, 
      tabBarIcon: ({focused}) => (<Icon name={'Lecture'} imagePath={focused ? require('@/assets/images/LectureColor.png') : require('@/assets/images/Lecture.png')}/> ),
      }}
      />
      <Tabs.Screen 
      name="profile"
      options={{
      headerShown: false, 
      tabBarIcon: ({focused}) => (
        <Icon name={'Profile'} imagePath={focused ? require('@/assets/images/ProfileColor.png') : require('@/assets/images/Profile.png')} /> ),
      }}
      />
    </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})