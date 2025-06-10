import { Client, Databases, Query } from "react-native-appwrite"
const database_id = process.env.EXPO_PUBLIC_DB_ID;
const profile = process.env.EXPO_PUBLIC_DB_PROFILE_ID;
const clint = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)

const database = new Databases(clint);
export const profileUpdate = async (username) => {
    const result = await database.listDocuments(database_id,profile,[Query.equal('username',username)])
    console.log(result)
}