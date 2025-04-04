import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";

function Cart({ item, add_cart, add_item, add_wishlist_cart, remove_cart }) {
  const isAddcart = add_item.find((items) => items.id === item.id);
  console.log(" isAddcart", isAddcart);

  return (
    <div
      className="flex flex-col justify-between items-center border border-black w-[300px] h-[450px] 
    box-border transition-shadow duration-[0.3s] bg-white relative 
    p-5 rounded-2xl border-solid hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] shadow-2xl"
    >
      <div className="relative w-full h-[200px] overflow-hidden">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={item.imageName}
            className="w-[78%] h-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between items-start mt-2.5 flex-grow">
        <h1 className="text-2xl mx-0 my-2.5 text-center">{item.title}</h1>
        <div className="">
          <p className="text-[1.2rem] text-teal-700 font-bold">${item.price}</p>
          <p className="text-base text-[#666] mb-2.5">{item.category}</p>
          <p className="text-[#8d8b8b] mb-2.5 text-sm">{item.rating.rate}</p>
        </div>
      </div>
      <div className="flex gap-2.5 mt-auto">
        <button
          onClick={() => add_cart(item)}
          className="w-[100px] bg-[yellow] border-2 border-sky-500 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Cart ;