import React, { useState } from 'react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'

const Product = ({data}) => {
    const [isDelete, setIsDelete] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedItem, setSelectedItem] = useState();
    
    const toggleDelete = () =>{
        setIsDelete(prev => !prev)
    }

    const toggleEdit = () =>{
        setIsEdit(prev => !prev)
    }

    const handleDelete = (data) =>{
        setIsDelete(true)
        setSelectedItem(data);
    }

    const handleEdit = (data) =>{
        console.log(data.id)
        setIsEdit(true)
        setSelectedItem(data);
    }

  return (
    <>
        {isDelete && <ModalDelete toggle={toggleDelete}  item={selectedItem}/>}
        {isEdit && <ModalEdit toggle={toggleEdit}  item={selectedItem}/>}
        <div className='p-5 sm:p-2'>
            <div className='
                container bg-slate-400 flex flex-col justify-center content-center border border-3
                rounded-lg hover:scale-105
            '>
                
                <div className='container relative p-1'>
                    <img className='w-full h-72 rounded-lg ' src={data?.imageurl} alt="" />
                    <div className='absolute w-28 top-3 right-5 flex flex-row justify-between'>
                        <button 
                            className='bg-blue-600 p-2 rounded-full hover:bg-blue-900 hover:text-white'
                            onClick={handleEdit.bind(null, data)}
                        >
                            <PencilSquareIcon className='h-8' />
                        </button>
                        <button 
                            className='bg-red-600 p-2 rounded-full hover:bg-red-900 hover:text-white'
                            onClick={handleDelete.bind(null, data)}
                        >
                            <TrashIcon className='h-8' />
                        </button>
                    </div>
                </div>
                <div className='container flex flex-col justify-center items-center p-2'>
                    <div className='text-xl font-bold'>
                        {data.name.toUpperCase()}
                    </div>
                    <div>$. {data.price}</div>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default Product