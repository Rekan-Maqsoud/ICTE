import { StyleSheet, Text , View , TouchableOpacity , Image, TextInput, ScrollView} from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker'
import { newPost, uploadedURL } from '@/assets/appwritedb'
import { useRouter } from 'expo-router'
import { AuthContext } from '../AuthContext'

const createPost = () => {
  const {setLoading , name} = useContext(AuthContext)
  const [text , setText] = useState('');
  const [selectedImage , setSelectedImage] = useState('');
  const router = useRouter();
  
  const pickImage = async() => {
    
    const {states} =  await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (states !== 'granted'){
    //   Alert.alert('Permission Required',
    //     'Sorry, we need camera roll permissions to make this work!',
    //     [{ text: 'OK' }])
    //     return;
    // }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if(!result.canceled){
      setSelectedImage(result.assets[0])
    }
  }

  const post = async () => {
    setLoading(true)
    let url = '';
  if (selectedImage) 
    url = await uploadedURL(selectedImage);
    await newPost(name,text,url)
    setLoading(false)
    setText(null);
    setSelectedImage(null);
    
    router.replace('/')
    
  }
  return (
    
      <ScrollView>
      <View style={style.container}>
      <View style={{flexDirection: 'row', }}>
              <Image source={14} style={style.pfpStyle}/> 
              <Text style={style.nameStyle}>{name}</Text>
              <TouchableOpacity style={style.options}>
                  <Text style={{fontSize: 20,fontWeight: 'bold'}}>...</Text>
              </TouchableOpacity>
      </View>
      <View style={{flexWrap: 'wrap', minHeight: 20}}>
        <TextInput 
        style={style.input}
        placeholder="Type here..."
        value={text}
        multiline={true}
        onChangeText={setText}
        maxLength={300}
      />
      </View>
      <View style={{marginTop: 70,}}>
      {!selectedImage ? 
      <TouchableOpacity style={style.addImage}onPress={pickImage}><Text style={{fontSize: 16,fontWeight: 'bold'}}>Add Image</Text></TouchableOpacity> :
      <View style={{position: 'relative', backgroundColor: 'rgba(149, 255, 255, 0.05)'}}>
        <Image style={style.postImageStyle} source={{uri: selectedImage.uri}}/>
        <TouchableOpacity style={style.cancelImage} onPress={() => setSelectedImage(null)}>
          <Image style={{height:20,width:20}}source={require('@/assets/images/x.png')} />
        </TouchableOpacity>
        
      </View>
      }
      <TouchableOpacity onPress={post} style={style.postButton}>
          <Text style={{fontSize: 16,fontWeight: 'bold'}}>Post Now</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    
  )
}

export default createPost

const style = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    resizeMode: 'contain'
  },
  pfpStyle: {
        height: 40,
        width: 40,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    nameStyle: {
      color: 'rgba(31,31,31,0.7)',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#414141',
    },
    options:{
        position: 'absolute',
        right: 10,
        top: -8,
    },
    input:{
      color: 'rgba(31,31,31,0.7)',
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth: '90%',
      padding:10 ,
      margin: 10,
      
    },
    postImageStyle:{
        resizeMode: 'contain',
        marginButtom: 10,
        maxHeight: 480,
        minHeight: 480,
        minWidth: '95%',
        margin: 10,
        marginBottom: 50,

    },
    cancelImage: {
      top: 20,
      right: 15,
      position: 'absolute'
    },
    addImage:{
      position: 'absolute',
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: 'rgba(0, 177, 186, 0.39)',
      borderRadius: 12,
      left: 10,
      bottom: 15,
    },
    postButton:{
      position: 'absolute',
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: 'rgba(84, 186, 0, 0.39)',
      borderRadius: 12,
      right: 10,
      bottom: 15,
    }
})