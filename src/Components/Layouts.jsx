import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

function Layouts({add_item, setshown_model,setquery, add_wishlist}) {
  console.log(add_item)

  return (
    <div>
       <Navbar add_item={add_item} setshown_model={setshown_model} setquery=
       {setquery} add_wishlist={add_wishlist}/>
       <Outlet/>
    </div>
  )
}

export default Layouts
