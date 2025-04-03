import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa6";


function Cart({item,  add_cart, add_item, add_wishlist_cart, remove_cart}) {
  const isAddcart = add_item.find((items) =>  items.id === item.id)
   console.log(' isAddcart',  isAddcart)



  return (

<div  className="  border-b-4  flex-col justify-between
 items-center border border-black w-[calc(26.33%_-_20px)]
  box-border transition-shadow duration-[0.3s] bg-white relative 
  p-5 rounded-2xl border-solid
   hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]
   cursor-pointer
   ">
<div >
<span
        className="absolute font-medium text-[rgb(163,37,37)] text-[1.2rem] w-[25px] h-[25px] flex justify-center items-center cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] rounded-[50%] right-0 top-0 hover:text-[rgb(252,6,6)]"
        
      >
         <button onClick={ () => add_wishlist_cart(item) }>   <FaRegHeart/></button>
  
      </span>

      
      
      <div className="w-full h-[200px] overflow-hidden relative">
        <Link  to={`/product/${item.id}`}>
        <img 
          src={item.image}
          alt={item.imageName}
          className="w-auto h-full object-cover"
        />


        </Link>
      </div>
      <div>
        <h1 className="text-2xl mx-0 my-2.5">{item.title}</h1>
        <p className="text-[1.2rem] text-teal-700 font-[bold]">
          ${item.price}
        </p>
        <p className="text-base text-[#666] mb-2.5">{item.category}</p>
        <p className="text-[#8d8b8b] mb-2.5 text-sm">{item.rating.rate}</p>
      </div>
      <div className="flex gap-2.5">
        {/* {
          !isAddcart ?
           <button onClick={ () => add_cart(item) } className=' w-[82px] bg-[yellow] border-2 
             border-sky-500   rounded-lg ' >add to cart</button>
             :
          <button onClick={ () => remove_cart(item.id) } className=' w-[82px] bg-[yellow] border-2  
           border-sky-500  rounded-lg ' >Remove cart</button>
         

        } */}
           <button onClick={ () => add_cart(item) }   className={` w-[100px] bg-[yellow] border-2 
             border-sky-500   rounded-lg `}  >add to cart</button>
      </div>
</div>
   </div>
  )
}

export default Cart
