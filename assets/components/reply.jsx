import React, { useCallback, useRef, useMemo, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { AuthContext } from "@/app/AuthContext";
import { getReplies } from "../appwritedb";

const Reply = () => {
  const {setRepliesShown , repliesShown, currentPost, setCurrentPost}= useContext(AuthContext);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => [ "75%", "100%"], []);
  const [replies , setReplies] = useState('')
  console.log(replies)
  const HandleReplies = async () => {
    const result = await getReplies(currentPost)
    const resultPro = Object.values(result.documents)
    setReplies(resultPro)
  }
  useEffect(() => {
    HandleReplies()
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
});

export default Reply;