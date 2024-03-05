import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

// till in typescript we use [any] if there is any type we don't know
// now will define type for the for the app

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

//  Client is responsible for the talking with the appwrite
const appwriteClient = new Client();

// we said client to talk to appwrite
// but don't know how, because don't know URL, don't know project Id
// setEndpoint(conf.appwriteUrl):- endpoint (url) come for config.ts
// setProject(conf.appwriteProjectId):- endpoint (id) for client
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

// now we are talking about client
export const account = new Account(appwriteClient);

// this class is for best practice because if create class then we can use method like login, logout, all these things in one place
// now when you have to use these methods just call them
// it is easy because they all are at singular place

export class AppwriteService {
  // create a new record of user in the appwrite
  // instead of account.create of appwrite we are using CreateUserAccount
  // because we have write the types for it
  // we have email, password, name type in CreateUserAccount

  async createUserAccount({ email, password, name }: CreateUserAccount) {
    //  now instead of any we can use specific type here
    try {
      // now for creating this account the Account(appwriteClient) method is responsible
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // we have to create login method
        return this.login({ email, password });
      } else {
        // if user account is not present return userAccount
        return userAccount;
      }
    } catch (error: any) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error: any) {
      throw error;
    }
  }

  // it is event, it will happens in the future as well
  // so this will return user itself
  // we have create getCurrentUser() method, here it will just checking that we are login or logged in

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);  // if data is there it will return true
    } catch (error) {}

    return false;
  }

  async getCurrentUser() {
    try {
        return account.get()
    } catch (error) {
        console.log("getCurrentUser error: " + error)
    }
    return null
  }

  async logout() {
    try {
        // it will delete the current session 
        return await account.deleteSession("current")
    } catch (error) {
        console.log("logout error: " + error)
    }
  }
}



const appwriteService = new AppwriteService()

export default appwriteService