import { createContext } from 'react'


const AuthContext = createContext({
    token:'',
    setToken:(token) => {},
    setLogOut:() => {}
})

export default AuthContext