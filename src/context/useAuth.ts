import { useContext } from "react";
import AuthContext from "./authContext";

// this is our custom hook
// useAuth is my custom hook
// it will provide data which is in the AuthContext
const useAuth = () => {
    const data = useContext(AuthContext)
    return data;
}


export default useAuth;

/**
 * AuthContext is a context object that provides authentication-related information to its descendants.
AuthProvider is an exported provider component to wrap parts of the application where you want to make the authentication context available.
useAuth is a custom hook that uses useContext to access the authentication context and returns the context data.
 */