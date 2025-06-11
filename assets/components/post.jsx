import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Post = ({ username  , postImage, postParagraph}) => {
  const pfp = 14;
  
  const [showFull, setShowFull] = useState(false)
  const [textShown, setTextShown] = useState(false)

  const onTextLayout = React.useCallback(e => {
    setTextShown(e.nativeEvent.lines.length > 3)
  }, [])

  return (
    <View style={style.postCard}>
      <View style={{flexDirection: 'row'}}>
        <Image source={pfp} style={style.pfpStyle}/> 
        <Text style={style.username}>{username}</Text>
        <TouchableOpacity style={style.options}>
            <Text style={{fontSize: 20,fontWeight: 'bold'}}>...</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={style.postText}
        numberOfLines={showFull ? undefined : 3}
        onTextLayout={onTextLayout}
        > {postParagraph} </Text>

        { textShown && !showFull && 
        (<TouchableOpacity onPress={() => setShowFull(true)}>
          <Text style={style.seeOptions}>see more</Text>
        </TouchableOpacity>)}

        { textShown && showFull && 
        (<TouchableOpacity onPress={() => setShowFull(false)}>
          <Text style={style.seeOptions}>see less</Text>
        </TouchableOpacity>)}

        {postImage  &&
        (<Image style={style.postImageStyle} 
          source={{ uri: postImage}} />)}

      </View>
    </View>
  )
}

export default Post

const style = StyleSheet.create ({
    pfpStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    postCard:{
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 8,
        borderRadius: 15,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    postText: {
        padding:10,
        fontSize: 16,
        color: '#313131',
    },
    seeOptions:{
      margin: 10,
      color: '#313199'
    },
    
    postImageStyle:{
        resizeMode: 'center',
        marginBottom: 10,
        height:400,
        width: '100%',
    },username: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#414141',
    },
    options:{
        position: 'absolute',
        right: 10,
        top: -8,
    }
})