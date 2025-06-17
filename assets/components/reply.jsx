import React, { useCallback, useRef, useMemo, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text,Image, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { AuthContext } from "@/app/AuthContext";
import { getReplies } from "../appwritedb";
import { TextInput } from "react-native-gesture-handler";

const Reply = () => {
  const {setRepliesShown , repliesShown, currentPost, setCurrentPost}= useContext(AuthContext);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => [ "75%", "100%"], []);
  const [replies , setReplies] = useState('')
  const [newaReply, setNewReply] = useState('')
  
  const handleReplies = async () => {
    const result = await getReplies(currentPost)
    const resultPro = Object.values(result.documents)
    setReplies(resultPro)
  }
  const handleReply = async ()=>{

  }
  useEffect(() => {
    handleReplies()
    if(repliesShown)
    sheetRef.current?.snapToIndex(2);
  }, [repliesShown]);

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={{color: 'black'}}>{item.Reply}</Text>
      </View>
    ),
    []
  );
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={true}
        enablePanDownToClose
        onClose={() => {setRepliesShown(false)
          setCurrentPost('')
        }}
      >
        <BottomSheetFlatList
          data={replies}
          keyExtractor={item => item.userId}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />

        <View style={styles.replyContainer}>

        <TextInput 
        style={styles.replyInput}
        placeholder="Write an Answer "
        onChangeText={(text) => setNewReply(text)}
        multiline={true}
        />

        <TouchableOpacity onPress={handleReply} style={styles.handleReply} >
          <Image style={{height: 20,width:20}}
          source={require('@/assets/images/send.png')} />
        </TouchableOpacity>

        </View>

      </BottomSheet>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%'
    
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#f3f3f3",
  },
  replyContainer:{
    flexDirection: 'row',
    height: 80,
    width: '100%',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, 
    marginVertical: 30,
    borderRadius: 15,
    borderWidth: 0.3,
    
  },
  handleReply:{
    flex: 1,
    margin: 20,
  },
  replyInput:{
    flex: 5,
    width: '100%',
    height: 60,
    marginHorizontal: 40,
  }
});

export default Reply;