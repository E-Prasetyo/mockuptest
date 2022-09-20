import React, { useRef, useState } from 'react'
import { Modal, Notification } from '../../Components'
import ProductService from '../../Services/ProductService'

const ModalEdit = ({toggle, item}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState()
    const name = useRef()
    const price = useRef()
    const img = useRef()

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        const data = {
            name:name.current.value,
            price: price.current.value,
            imageurl:img.current.value
        }
        setIsLoading(true)
        ProductService.editProduct(data, item.id)
        .then((res) => {
            console.log("ss",res)
            if(res.data.errors === null && res.data.status === 'OK'){
                setIsLoading(false)
                setMessage(res.data.status+", Add Product Success")
                setIsNotification(true)
                setIsSuccess(true)
                setTimeout(() => {
                    setIsNotification(false)
                    setIsLoading(false)
                    setMessage('')
                    // toggle();
                    // window.location.reload()
                }, 2000);
            }
            setIsLoading(false)
            console.log(res)
        }).catch((err) => {
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
    {isNotification && <Notification message={message} isSuccess={isSuccess}/>}
    <Modal title="Edit Product">
       <form  onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center  px-5 pb-5 space-y-5 border-b-2 border-black">
                    <input 
                        ref={name} 
                        className='w-full p-2 sm:w-96' 
                        type="text" 
                        name="name" 
                        defaultValue={item.name}
                        placeholder='Product Name' 
                        disabled={isLoading}
                        required
                    />
                    <input 
                        ref={price} 
                        className='w-full p-2 sm:w-96' 
                        type="number" 
                        name="price"
                        defaultValue={item.price} 
                        placeholder='Price (Dollar USD)'
                        disabled={isLoading}
                        required
                    />
                    <input 
                        ref={img} 
                        className='w-full p-2 sm:w-96' 
                        type="text" 
                        name="img" 
                        placeholder='Image Url'
                        defaultValue={item.imageurl}
                        disabled={isLoading}
                        required
                    />
                </div>
                <div className='flex justify-end space-x-10 p-5 '>
                    <button 
                        className='text-blue-800 font-bold'
                        onClick={toggle}
                        disabled={isLoading}
                    >
                        Back
                    </button>
                    <button 
                        className='font-bold bg-emerald-800 py-2 px-5 text-white rounded-lg'
                        type='submit'
                        disabled={isLoading}
                    >
                        Update
                    </button>
                </div>
            </form>
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

export default ModalEdit