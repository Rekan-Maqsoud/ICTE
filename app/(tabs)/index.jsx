import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Post from '@/assets/components/post'

const home = () => {
  const posts =[{id:1 ,
    username: 'Rekan M Koye',
    pfp: require('@/assets/images/pfp.jpg'),
    postParagraph: 'Welcome to my application!'},
    {id:2 ,
    username: 'Danar Marizan',
    pfp: require('@/assets/images/pfp.jpg'),
    postParagraph: 'This workout plan is Amazing',
    postImage: require('@/assets/images/vertical.jpg')},
    {id:3 ,
    username: 'Blnd Dyar',
    pfp: require('@/assets/images/pfp.jpg'),
    postParagraph: 'This is Home Icon if you didnt knew already.',
    postImage: require('@/assets/images/home.png')},
    {id:4 ,
    username: 'Baxtawar kaify',
    pfp: require('@/assets/images/pfp.jpg'),
    postParagraph: 'hhhhh',
  postImage: require('@/assets/images/Hori.jpg')}
  
  
  ]
    
  return (
    <SafeAreaProvider>
      <Text style={styles.text}>Welcome To ICTE Community!</Text>
      <>
      <FlatList 
      data={posts}
      keyExtractor={item => item.id}
      renderItem={
        ({item}) => (
        <>
         <Post {...item}/>
         </>
      )}
      numColumns={1}
      
      />
      </>
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