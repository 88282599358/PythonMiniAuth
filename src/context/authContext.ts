import { createContext } from "react";

// it is for the giving the boolean value and updating the boolean value 
// we can update the context as well

export const AuthContext = createContext<{ 
    authStatus: boolean,  // give boolean value 
    setAuthStatus: (status: boolean) => void;  // update boolean value
}>({
    // initially no will logged in
    authStatus: false,

    // we accepting the method, and go ahead and provide me a value use this method
    setAuthStatus: () => {},
})


// now we should be provide a provider, like we create useState we can create a simple hook like that
// which give me the info of whether user is login or not

// Provider: is something wrap all these components because otherwise there is a pop drilling and a lot of thing
//so will create Provider, which acts as the wrapping box where I can put my components and anytime my components need
// an info I can directly call this and grab the info

// see useAuth.ts
export const AuthProvider = AuthContext.Provider;

export default AuthContext;