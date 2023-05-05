import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {

  const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
  console.log('autenticacao: ' + isAuthenticated);
        
  if (isAuthenticated ) {
    return children
  }
      
    return <Navigate to="/Login" />
}