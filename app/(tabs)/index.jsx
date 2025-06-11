import { FlatList , View , Image } from 'react-native'
import React, {  useCallback, useEffect, useState } from 'react'
import {  SafeAreaView } from 'react-native-safe-area-context'
import Post from '@/assets/components/post'
import { getPosts} from '@/assets/appwritedb'
import { useFocusEffect } from '@react-navigation/native'

const home = () => {
  const [post , setPost] = useState(null);
  const [refreshing, setRefreshing] = useState(false)
  const fetchPosts = async () => {
  const posts = await getPosts()
    setPost(posts)
  }
  useFocusEffect(useCallback(() => {fetchPosts()}, []))
  const onRefresh = async () => {
    setRefreshing(true)
    await fetchPosts()
    setRefreshing(false)
  }
  return (
    <SafeAreaView>
      <FlatList 
      data={post || []}
      keyExtractor={item => item.$id}
      renderItem={({item}) => (<Post {...item}/>)}
      refreshing={refreshing}
       onRefresh={onRefresh}
      />
    </SafeAreaView>
  )
}

export default home