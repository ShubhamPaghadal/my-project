import React from "react";
import { Link } from "react-router-dom";

function Cart({ product, handleDelete, addToCart, addedCarts, DeleteToCart }) {
  const isAddedToCart = addedCarts.some(
    (item) => item.id === parseInt(product.id)
  );
  return (
    <div className="lex flex-col justify-between items-center border border-slate-200 w-[calc(33.33%_-_20px)] box-border transition-shadow duration-[0.3s] bg-white relative p-5 rounded-[5px] border-solid hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
      <span
        className="absolute font-medium text-[rgb(163,37,37)] text-[1.2rem] w-[25px] h-[25px] flex justify-center items-center cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] rounded-[50%] right-0 top-0 hover:text-[rgb(252,6,6)]"
        onClick={() => handleDelete(product.id)}
      >
        X
      </span>
      <div className="w-full h-[200px] overflow-hidden relative">
        <img
          src={product.productImg}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl mx-0 my-2.5">{product.productName}</h1>
        <p className="text-[1.2rem] text-teal-700 font-[bold]">
          ${product.productPrice}
        </p>
        <p className="text-base text-[#666] mb-2.5">{product.category}</p>
        <p className="text-[#8d8b8b] mb-2.5 text-sm">{product.description}</p>
      </div>
      <div className="flex gap-2.5">
        {/ Conditionally render button based on whether the product is already in the cart /}
        {isAddedToCart ? (
          <button
            onClick={() => DeleteToCart(product.id)}
            className="bg-[#bb1c1c] hover:bg-[#a12020] text-[white] cursor-pointer transition-[background-color] duration-[0.3s] px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[#0d5f5a];
"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-teal-700 text-[white] cursor-pointer transition-[background-color] duration-[0.3s] px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[#0d5f5a];
"
          >
            Add to Cart
          </button>
        )}
        <Link to={`add-new/${product.id}`}>
          <button
            className="bg-teal-700 text-[white] cursor-pointer transition-[background-color] duration-[0.3s] px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[#0d5f5a];
"
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
