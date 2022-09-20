import React, { useReducer, useContext } from 'react'
import AuthContext from './AuthContext'

const initialState = {
    token:''
}

const AuthReducer = (state, action) =>{
    if(action.type === "LOGIN"){
        sessionStorage.setItem('token', JSON.stringify(action.token))
        return{
            ...state,
            token:action.token
        }
    }
    if(action.type === "LOGOUT"){
        sessionStorage.removeItem('token')
        return{
            ...state,
            token:''
        }
    }
}



const AuthProvider = ({children}) => {
    const [stateAuth, dispatchAuth] = useReducer(AuthReducer, initialState)

    const handleToken = (value) =>{
        dispatchAuth({type: "LOGIN", token:value})
    }

    const deleteToken = () =>{
        dispatchAuth({type: "LOGOUT"})
    }

    const authCtx ={
        token: stateAuth.token,
        setToken:handleToken,
        setLogOut:deleteToken
    }

  return (
    <AuthContext.Provider value={authCtx}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthProvider