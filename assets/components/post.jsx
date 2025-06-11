import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Post = ({ username  , postImage, postParagraph}) => {
  const pfp = 14;
  console.log(postImage)
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
        <Text style={style.postText}> {postParagraph} </Text>
        {postImage  &&
        (<Image style={style.postImageStyle} 
          source={{ uri: postImage}} />)
        }
      </View>
    </View>
  )
}

export default Post

const style = StyleSheet.create ({
    pfpStyle: {
        maxHeight: 40,
        maxWidth: 40,
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
        maxHeight: 490,
        resizeMode: 'contain'
    },
    postText: {
        padding:10,
        color: '#212121',
    },
    
    postImageStyle:{
        resizeMode: 'contain',
        marginBottom: 10,
        maxHeight: 380,
        height: '100%',
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