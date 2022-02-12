import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, Navigate } from 'react-router-dom';
const RequireAuth = ({ children, redirectTo }) => {
    const { isAuthenticated, user } = useAuth0();
    const isUser = isAuthenticated && user;
    return isUser ? children : <Navigate to={redirectTo} />

}

export default RequireAuth