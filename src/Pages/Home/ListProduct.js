import React from 'react'
import Product from './Product'

const Products = ({products}) => {

    const product = products?.map((item) => {
        return(
            <Product key={item.id} data={item} />
        )
    })
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3'>
      {product}
    </div>
  )
}

export default Products