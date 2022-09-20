import React, { useRef, useState } from 'react'
import { Modal, Notification } from '../../Components'
import ProductService from '../../Services/ProductService'

const ModalAdd = ({toggle}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [message, setMessage] = useState(false)
    const name = useRef()
    const price = useRef()
    const img = useRef()
    // const [image, setImage] = useState()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const data = {
            name:name.current.value,
            price: price.current.value,
            // imageurl:img.current.value||image
            imageurl:img.current.value
        }
        setIsLoading(true)
        ProductService.createNewProduct(data)
        .then((res) => {
            if(res.data.errors === null && res.data.status === 'OK'){
                setIsLoading(false)
                setMessage(res.data.status+", Add Product Success")
                setIsNotification(true)
                setTimeout(() => {
                    setIsNotification(false)
                    setMessage('')
                    toggle();
                    window.location.reload()
                }, 2000);
            }
            setIsLoading(false)
            console.log(res)
        }).catch((err) => {
            console.log(err)
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

    // const handleInputImage = (e) => {
    //     const reader = new FileReader();
    //     console.log(e.target.files[0].size < 2097152)
    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             setImage(reader.result);
    //         }
    //     };
    //     reader.readAsDataURL(e.target.files[0]);
    // }


  return (
    <>
        {isNotification && <Notification message={message} isSuccess={isNotification} />}
        <Modal title="Create New">
            <form  onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center  px-5 pb-5 space-y-5 border-b-2 border-black">
                    <input 
                        ref={name} 
                        className='w-full p-2 sm:w-96' 
                        type="text" 
                        name="name" 
                        placeholder='Product Name' 
                        disabled={isLoading}
                        required
                    />
                    <input 
                        ref={price} 
                        className='w-full p-2 sm:w-96' 
                        type="number" 
                        name="price" 
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
                        disabled={isLoading}
                        required
                    />
                    {/* <input 
                        className='w-full p-2 sm:w-96' 
                        type="file"
                        accept="image" 
                        name="img" 
                        placeholder='Image Url'
                        onChange={handleInputImage}
                        disabled={isLoading}
                    /> */}
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
                        Create
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

export default ModalAdd