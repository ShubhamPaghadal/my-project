import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function Products() {
  const [get_product, setget_product] = useState([])
  const {id} = useParams()
  console.log('id........',id)
  useEffect( () => {
    let product_details = async () => {
      let api =  await axios(`https://fakestoreapi.com/products/${id}`);
      setget_product(api.data)
    }
    product_details()
  }, [])

  console.log('get_product...',get_product)

  return (
    <>
    {/* <div className='max-w-[1440px]  m-[auto]  mt-[151px] '  >
      <div className="w-full m-auto h-[200px]  relative flex-col flex justify-center items-center ">
        <img
          src={get_product.image}
          alt={get_product.imageName}
          className="w-auto h-full object-cover"
        />
         <div>
        <h1 className="text-2xl mx-0 my-2.5">{get_product.title}</h1>
        <p className="text-[1.2rem] text-teal-700 font-[bold]">
          ${get_product.price}
        </p>
        <p className="text-base text-[#666] mb-2.5">{get_product.category}</p>
        <p className="text-[#8d8b8b] mb-2.5 text-sm">{get_product.rating?.count}</p>
        <p className="text-[#8d8b8b] mb-2.5 text-sm">{get_product.rating?.rate}</p>
      </div>
      </div>

 
    </div> */}

<div className='  max-w-[1440px]  m-[auto] flex flex-wrap  justify-center gap-12  mt-[151px] '> 
  
<div  className="  border-b-4  flex-col justify-between
 items-center border border-black w-[calc(26.33%_-_20px)]
  box-border transition-shadow duration-[0.3s] bg-white relative 
  p-5 rounded-2xl border-solid
   hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]
   cursor-pointer
   ">
<div >

      <div className="w-full h-[200px] overflow-hidden relative">
        <img
          src={get_product.image}
          alt={get_product.imageName}
          className="w-auto h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl mx-0 my-2.5">{get_product.title}</h1>
        <p className="text-[1.2rem] text-teal-700 font-[bold]">
          ${get_product.price}
        </p>
        <p className="text-base text-[#666] mb-2.5">{get_product.category}</p>
        <p className="text-[#8d8b8b] mb-2.5 text-sm">{get_product.rating?.rate}</p>
      </div>
      <div className="flex gap-2.5">
      </div>
</div>
   </div>
  </div>

    </>
  )
}

export default Products
