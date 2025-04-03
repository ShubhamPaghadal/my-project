import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { LiaCartPlusSolid } from "react-icons/lia";
import { HiShoppingBag } from "react-icons/hi2";
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";

function Navbar({add_item, setquery, add_wishlist}) {
  // const [shown_model, setshown_model] = useState(false)
    const {id} = useParams()
    
  return (
   <>
<div className="heade">
    <div className=" max-w-[1440px]  m-[auto] ">
        <div className="main-sec  flex  justify-around items-center mt-[25px]">
           <Link  to='/'>
           <div className="header-logo">
            <HiShoppingBag   className='text-[28px]' />
            </div>
           </Link>
            <nav  className='flex justify-center gap-[58px] hover-underline' >
                         <NavLink
                              to="/"
                              className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 ${
                                  isActive ? "text-orange-700" : "text-gray-700"
                                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                              }
                            >
                              Home
                            </NavLink>
                  
                     
            </nav>
            <div  className='flex  gap-[20px]' > 
            <input className='border-collapse text-center border-b-2 rounded-lg border-black' type="text" placeholder='Search products' onChange={(e) => setquery(e.target.value.toLowerCase())} />
            </div>
         
             <div className='flex gap-[15px]'>
            <div className=''> 
            <Link   to={'/wishlist'} >
              <div className="cart-icon  text-[32px]  relative cursor-pointer  ">
                        <FaRegHeart className='color-green'  onClick={() => setshown_model(true) } />
                    <div  className='absolute  top-[1px] right-[10px] ' >
                    <p className='text-[19px]' >{add_wishlist?.length}</p>
                    </div>
                        </div>
              </Link>
            </div>
              <Link   to={'/toggle'} >
              <div className="cart-icon  text-[30px] relative cursor-pointer  ">
                        <LiaCartPlusSolid className=''  onClick={() => setshown_model(true) } />
                          <img src="" alt="" />
                    <div  className='absolute  top-[-16px] right-[9px] ' >
                    <p className='text-[19px]' >{add_item?.length}</p>
                    </div>
                        </div>
              </Link>
             </div>

        </div>
    </div>
</div>
   </>
  )
}

export default Navbar