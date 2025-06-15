import { AuthContext } from '@/app/AuthContext';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { deletePost } from '../appwritedb';
import { useRouter } from 'expo-router';
import { Menu, Provider } from 'react-native-paper';

const Post = ({$id, userId, username  , postImage, postParagraph , imageId}) => {
  const {CurrentUser, setLoading} = useContext(AuthContext);
    const [menuVisible, setMenuVisible] = useState(false);

  const router = useRouter()
  const pfp = 'https://fra.cloud.appwrite.io/v1/storage/buckets/6846be5400304cffc4b4/files/684da7c800163fdc3999/view?project=6846aab500310c73bd23&mode=admin';
  
  const [showFull, setShowFull] = useState(false)
  const [textShown, setTextShown] = useState(false)

  const onTextLayout = React.useCallback(e => {
    setTextShown(e.nativeEvent.lines.length > 3)
  }, [])
  const handleDeletePost = async() => {
    setLoading(true)
    if (CurrentUser.$id === userId){
      await deletePost($id, imageId || null)
    }
    setLoading(false)
    router.reload()


  }

  return (
    <Provider>
    <View style={style.postCard}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: pfp}} style={style.pfpStyle}/> 
        <Text style={style.username}>{username}</Text>
        <Menu
        
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TouchableOpacity style={style.options} onPress={() => setMenuVisible(true)}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>...</Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => { setMenuVisible(false); /* Not Interested logic */ }} title="Not Interested" />
          {CurrentUser?.$id === userId && (
            <Menu.Item onPress={() => { setMenuVisible(false); handleDeletePost(); }} title="Delete Post" />
          )}
          <Menu.Item onPress={() => { setMenuVisible(false); /* Share logic */ }} title="Share" />
          <Menu.Item onPress={() => { setMenuVisible(false); /* Save logic */ }} title="Save" />
        </Menu>
      </View>
      <View>

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
    </Provider>
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
        position: 'relative',
        right: -10,
        top: -5,
    }
})