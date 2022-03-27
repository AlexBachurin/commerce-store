import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react';
import { useAuthContext } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';
const RequireAuth = ({ children, redirectTo }) => {
    const { isAuthenticated, user } = useAuthContext();
    const isUser = isAuthenticated && user;
    return isUser ? children : <Navigate to={redirectTo} />

}

export default RequireAuth