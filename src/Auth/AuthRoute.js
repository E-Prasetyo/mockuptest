import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({children}) => {
    const token = sessionStorage.getItem('token') || false;

  return (
    <>
        {token ? <Outlet /> : <Navigate to="/login" replace/>}
    </>
  )
}

export default AuthRoute