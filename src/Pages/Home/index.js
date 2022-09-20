import React, { useEffect, useState } from 'react'
import ListProduct from './ListProduct'
import ProductService from '../../Services/ProductService'
import ModalAdd from './ModalAdd';
import { useAuth } from '../../Auth/AuthProvider';

const Home = () => {
  const authCtx = useAuth();
  const [products, setProducts] = useState([]);
  const [isAdd, setAdd] = useState(false) ;

  useEffect(() => {
    ProductService.getAllProduct()
    .then((res) => setProducts(res.data.result))
    .catch((err) => console.log("err",err))
  }, [])

  const handleModalAdd = () =>{
    setAdd(prev => !prev)
  }
  const createNewProduct = () =>{
    setAdd(true);
  }
  const handleLogout =()=>{
    authCtx.setLogOut()
  }

  return (
    <>
    {isAdd && <ModalAdd toggle={handleModalAdd}/> }
      <div className='bg-slate-400 flex flex-row justify-between p-5 shadow-xl'>
        <div className='flex flex-row justify-center items-center space-x-5'>
          <p className='text-md sm:text-2xl'>Product List</p>
          <button 
            className='bg-blue-700 py-1 px-3 sm:py-2 sm:px-5 rounded-lg text-white shadow-lg hover:bg-blue-900'
            onClick={createNewProduct}
          >
            Create New
          </button>
        </div>
        <div>
          <button 
            className='p-2 bg-orange-900 text-white rounded-lg'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className='container mx-auto my-5'>
        <ListProduct products={products}/>
      </div>
    </>
  )
}

export default Home