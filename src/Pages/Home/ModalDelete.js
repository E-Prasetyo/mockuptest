import React, { useState } from 'react'
import { Modal, Notification } from '../../Components'
import ProductService from '../../Services/ProductService'

const ModalDelete = ({toggle, item}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState(false)
    
    const handleDelete = () =>{
        setIsLoading(true);
        ProductService.deleteProduct(item.id)
        .then((res) => {
            if(res.data.errors === null && res.data.status === 'OK'){
                setIsLoading(false)
                setMessage(res.data.status+", Add Product Success")
                setIsNotification(true)
                setIsSuccess(true)
                setTimeout(() => {
                    setIsNotification(false)
                    setMessage('')
                    toggle();
                    setIsLoading(false)
                    window.location.reload()
                }, 2000);
            }
        })
        .catch((err) => {
            console.log("err",err)
            setIsLoading(false)
            setMessage(err.message)
            setIsNotification(true)
                setTimeout(() => {
                    setIsNotification(false)
                    setMessage('')
                    // toggle();
                }, 2000);
        })
    }

  return (
    <>
    {isNotification && <Notification message={message} isSuccess={isSuccess} />}
    <Modal title="Confirmation">
        <div className='px-10 border-b-2 border-black pb-10'>
            <div className='flex flex-col justify-center items-center text-2xl'>
                <div>Are You Sure Want To Delete</div>
                <div>{item.name}</div>
            </div>
            
        </div>
        <div className='flex justify-end space-x-10 p-5 '>
            <button 
                className='
                    w-36 bg-blue-800 font-bold py-2 px-5 text-white rounded-lg
                    hover:bg-cyan-900 hover:text-black
                '
                onClick={toggle}
                disabled={isLoading}
            >
                No
            </button>
            <button 
                className='
                    w-36 font-bold bg-red-800 py-2 px-5 text-white rounded-lg
                    hover:bg-rose-500 hover:text-black
                '
                onClick={handleDelete}
                disabled={isLoading}
            >
                Yes, delete it
            </button>
        </div>
        {isLoading &&
            <div className="flex justify-center items-center">
                <div className="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                    <span className='px-2'>Loading...</span>
            </div>
        }
    </Modal>
            
    </>
  )
}

export default ModalDelete