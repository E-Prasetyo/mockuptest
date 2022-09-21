import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Loading, Notification } from '../../Components'
import Auth from '../../Services/AuthService'

const Register = () => {
    const navigate = useNavigate();
    const name = useRef()
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
            name:name.current.value,
            email:email.current.value,
            password:password.current.value
        }
        setIsLoading(true);
        Auth.Register(data).then((res) => {
            if(res.errors === null && res.status === 'OK'){
                setIsSuccess(true)
                setMessage(res.status+", Register Success")
                setIsLoading(false)
                setIsModal(true)
                setTimeout(() => {
                    setIsModal(false)
                    setIsSuccess(false)
                    setMessage('')
                }, 1500);
                name.current.value =""
                email.current.value =""
                password.current.value =""
            }else{
                setMessage("ERROR, " + res.errors.email[0])
                setIsLoading(false)
                setIsModal(true)
                setTimeout(() => {
                    setIsModal(false)
                    setMessage('')
                }, 1500);
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
                <div className="text-4xl font-bold p-2">Register</div>
                <div className='flex flex-row justify-center p-5'>
                    <form className='
                        w-full md:w-96 lg:w-96 p-5 flex flex-col justify-center content-center align-middle gap-5 
                        border-4 border-sky-800 bg-slate-400 rounded-lg drop-shadow-2xl
                        '
                    onSubmit={onSubmit}
                    >
                        <input ref={name} className='p-2' type="text" placeholder='Name' required/>
                        <input ref={email} className='p-2' type="email" placeholder='Email' required/>
                        <input ref={password} className='p-2' type="password" placeholder='Password' required/>
                        <button type='submit' className='bg-blue-800 p-2 text-white '>
                            Register
                        </button>
                    </form>
                </div>
                <div className="text-md p-2">
                    Already have an account? 
                    <Link 
                        to="/Login"
                        className='font-bold text-blue-600 underline pl-2'
                    >
                        Login
                    </Link>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Register