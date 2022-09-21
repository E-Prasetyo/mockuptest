import React, { useEffect, useState } from 'react'
import ListProduct from './ListProduct'
import ProductService from '../../Services/ProductService'
import ModalAdd from './ModalAdd';
import { useAuth } from '../../Auth/AuthProvider';
import { Loading } from '../../Components';

const Home = () => {
  const authCtx = useAuth();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setAdd] = useState(false) ;

  useEffect(() => {
    setIsLoading(true)
    ProductService.getAllProduct()
    .then((res) => 
    { 
      if(res.data.status === 'OK'&& res.data.errors === null){
        setProducts(res.data.result)
        setIsLoading(false)
      }else{
        setIsLoading(false);
      }
    })
    .catch((err) => {
      setIsLoading(false)
      console.log("err",err)
    })
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
    {isLoading && <Loading />}
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
            className='bg-orange-700 py-1 px-3 sm:py-2 sm:px-5 rounded-lg text-white shadow-lg hover:bg-rose-900'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className='container mx-auto my-5'>
      {products.length > 0 && <ListProduct products={products}/>}
      {(products.length === 0 || undefined) && !isLoading && 
        <p className='flex flex-col justify-center items-center h-screen text-2xl font-bold'>
          Ups, Data Not Found
        </p>
      }
      </div>
    </>
  )
}

export default Home