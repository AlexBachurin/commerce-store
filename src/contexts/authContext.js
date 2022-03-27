import React, { useContext, useState } from "react";
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    //state for user 
    const [user, setUser] = useState(null);
    //state for checking if user is Authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    let navigate = useNavigate();
    ///Sing in functionality
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                if (user) {
                    setIsAuthenticated(true);
                    console.log(user)
                    setUser(user);
                    navigate('/')
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    //logout
    const logout = () => {
        setIsAuthenticated(false)
        auth.signOut();
    }
    return <AuthContext.Provider value={{
        user,
        isAuthenticated,
        signIn,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

//global hook
const useAuthContext = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useAuthContext };