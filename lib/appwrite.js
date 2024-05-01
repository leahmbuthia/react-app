import { Client, Databases } from "react-native-appwrite";
import {
  // Account,
  // Avatars,
  // Client,
  // Databases,
  ID,
  // Query,
  // Storage,
} from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.leah.aora",
  projectId: "6630186900287297dd5a",
  databaseId: "6631fd6e001393d4413c",
  userColectionId: "66320cfd000d41cc5208",
  videoCollectionId: "66320d3400301b156f4d",
  storageId: "6632115f00121db9a8d5",
};
// import {Client} from 'react-native-appwrite';
//init Your react-native SDK

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.endpoint)
  .setPlatform(config.platform);

const account = new Account(client);
const avators = new Avators(Client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatorUrl=avators.getinitials(username)
    await SignIn(email,password)

    const newUser =await databases.createDocument(
      config.databaseId,
      config.userColectionId,
      ID.unique,
      {
accountId:newAccount.$id,
email,
username,
avatar:avatarUrl
      }
      
    )
    return newUser
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function SignIn(email, password){
   try {
      const session = await account.createEmailSession(email,password)
      return session;
      
   } catch (error) {
      throw new Error(error)
      
   }
}
