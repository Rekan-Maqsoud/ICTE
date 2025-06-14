import { use } from "react";
import { Alert, Platform } from "react-native";
import { Account, Client, Databases, ID, Storage } from "react-native-appwrite";
const database_id = process.env.EXPO_PUBLIC_DB_ID;
const profile = process.env.EXPO_PUBLIC_DB_PROFILE_ID;
const postRef = process.env.EXPO_PUBLIC_DB_POSTS_ID;
const postStorage = process.env.EXPO_PUBLIC_STORAGE_POSTS;
const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)

if(Platform.OS == 'android')
    client.setPlatform('com.rekan.icte')
else if (Platform.OS == 'ios')
    client.setPlatform('com.rekan.icte')

const database = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

export const createNewAccount = async(email,password, name) =>{
    await account.create(ID.unique(),email,password,name);
    await database.createDocument(database_id,profile,ID.unique(),{
        name: name,
        email: email,
        password: password,
    })
}
export const logIn = async(email , password) => {
    try {
    const response = await account.createEmailPasswordSession(email , password)
    const userID = await account.get();
    return {user: userID, state: response}
    }catch(error){
    Alert.alert(`${error}`);}
}
export const logout = async ()=>{
    try{
    await account.deleteSession('current')
        }catch(error){
    Alert.alert(`${error}`);}
}
export const CheckLoginStates = async( ) => {
    try{
    const response = await account.getSession('current');
    if(response){
    const userID = await account.get();
    return userID
    }}
    catch(error){
        return false;
    }
 
}

export const getPosts = async () => {
    const {documents , total} = await database.listDocuments(database_id, postRef)
    if(documents)
        return documents;
}
export const uploadedURL = async (asset) => {
    const response = await storage.createFile(
        postStorage, ID.unique(),await nativeImageAsset(asset)
    )
    const fileUrl = storage.getFileView(
    postStorage, 
    response.$id
    );
    return fileUrl;
}
 const nativeImageAsset = async(asset) => {
    try{
    const url = new URL(asset.uri)
    return {
        name: url.pathname.split("/").pop(),
        size: asset.fileSize,
        type: asset.mimeType,
        uri: url.href,
    }
    }catch(error){
        console.error(error)
    }
}
export const newPost = async(username, text,image ) => {
    const post =  await database.createDocument(
        database_id,postRef,ID.unique(),{
            username: username,
            postParagraph: text,
            postImage: image,
        }
    )
}