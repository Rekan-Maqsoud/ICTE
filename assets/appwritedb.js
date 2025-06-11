import { Client, Databases, ID, Storage } from "react-native-appwrite";
const database_id = process.env.EXPO_PUBLIC_DB_ID;
const profile = process.env.EXPO_PUBLIC_DB_PROFILE_ID;
const postRef = process.env.EXPO_PUBLIC_DB_POSTS_ID;
const postStorage = process.env.EXPO_PUBLIC_STORAGE_POSTS;
const clint = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
    .setPlatform('com.rekan.icte')
const database = new Databases(clint);
const storage = new Storage(clint);

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