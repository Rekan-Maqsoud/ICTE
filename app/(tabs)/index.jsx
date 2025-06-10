import { FlatList } from 'react-native'
import React from 'react'
import {  SafeAreaView } from 'react-native-safe-area-context'
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
    postImage: require('@/assets/images/Home.png')},
    {id:4 ,
    username: 'Baxtawar kaify',
    pfp: require('@/assets/images/pfp.jpg'),
    postParagraph: 'hhhhh',
  postImage: require('@/assets/images/Hori.jpg')}
  ]
  return (
    <SafeAreaView>
      <FlatList 
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (<Post {...item}/>)}
      />
    </SafeAreaView>
  )
}

export default home