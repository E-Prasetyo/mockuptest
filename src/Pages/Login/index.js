import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Auth/AuthProvider'
import { Loading, Notification } from '../../Components'
import Auth from '../../Services/AuthService'

const Login = () => {
    const authCtx = useAuth();
    const navigate = useNavigate();
    const email = useRef()
    const password = useRef()
    const [isLoading, setIsLoading] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const sessionToken = sessionStorage.getItem('token');
        if(sessionToken){
          navigate("/")
        }
    }, [navigate])
    

    const onSubmit = (evt) =>{ 
        evt.preventDefault()
        const data ={
            email:email.current.value,
            password:password.current.value
        }
        setIsLoading(true);
        Auth.Login(data).then((res) => {
            if(res.errors === null && res.status === 'OK'){
                authCtx.setToken(res.result.access_token)
                setIsSuccess(true)
                setMessage(res.status+", Login Success")
                setIsLoading(false)
                setIsModal(true)
                setTimeout(() => {
                    setIsModal(false)
                    setIsSuccess(false)
                    setMessage('')
                    navigate("/")
                }, 1500);
                email.current.value =""
                password.current.value =""
            }else{
                setMessage(res.message+", " + res.errors.user_authentication[0])
                setIsLoading(false)
                setIsModal(true)
                setTimeout(() => {
                    setIsModal(false)
                    setMessage('')
                }, 1500);
                console.log("failed", res.message)
                setIsLoading(false)
            }
        }).catch((err) => console.error(err))
    }


  return (
    <>
        {isLoading && <Loading /> }
        {isModal && <Notification message={message} isSuccess={isSuccess}/> }
        <div className="h-screen bg-slate-300 flex flex-col justify-center content-center">
            <div className='container h-fit mx-auto flex flex-col justify-center text-center'>
                <div className="text-4xl font-bold p-2">LOGIN</div>
                <div className='flex flex-row justify-center p-5'>
                    <form className='
                        w-full md:w-96 lg:w-96 p-5 flex flex-col justify-center content-center align-middle gap-5 
                        border-4 border-sky-800 bg-slate-400 rounded-lg drop-shadow-2xl
                        '
                    onSubmit={onSubmit}
                    >
                        <input ref={email} className='p-2' type="email" placeholder='Email' required/>
                        <input ref={password} className='p-2' type="password" placeholder='Password' required/>
                        <button type='submit' className='bg-blue-800 p-2 text-white '>
                            Login
                        </button>
                    </form>
                </div>
                <div className="text-md p-2">
                    Don't have an account? 
                    <Link 
                        to="/register"
                        className='font-bold text-blue-600 underline pl-2'
                    >
                        Register
                    </Link>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Login