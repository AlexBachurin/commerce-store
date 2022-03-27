import React, { useContext, useState } from "react";


const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    return <AuthContext.Provider value={{

    }}>
        {children}
    </AuthContext.Provider>
}

//global hook
const useAuthContext = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useAuthContext };