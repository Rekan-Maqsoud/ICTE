import { View, Text, StyleSheet, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Post = () => {
  return (
    <View style={style.postCard}>
      <View style={{flex:1 ,flexDirection: 'row'}}>
        <Image source={require("@/assets/images/home.png")} style={style.pfp}/> 
        <Text style={style.username}>user name</Text>
        <TouchableOpacity style={style.options}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>...</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <Text style={style.postText}> Post Paragraph </Text>
        <Image style={style.postImage}source={require("@/assets/images/home.png")}/>
      </View>
    </View>
  )
}

export default Post

const style = StyleSheet.create ({
    pfp: {
        maxHeight: 40,
        maxWidth: 40,
        marginHorizontal: 10,
    },
    postCard:{
        maxWidth: '95%',
        maxHeight: '60%',
        height: 680,
        width: 400,
        marginHorizontal: 10,
        marginVertical: 15,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        // shadowColor: '#000',
        // shadowOffset: {width: 0,height: 2},
        // shadowOpacity: 0.3,
        // shadowRadius: 3.84,
        elevation: 5,
    },
    postText: {
        padding:10,
        color: '#212121',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#414141',
    },
    postImage:{
        flex: 1,
        height: 380,
        width: 380,
    },
    options:{
        position: 'absolute',
        right: 10,
    }
})