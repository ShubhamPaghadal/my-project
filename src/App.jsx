import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Layouts from "./Components/Layouts";
import Products from "./Components/Products";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Toggle_item from "./Components/Toggle_item";
import Drop_down from "./Components/Drop_down";
import Wishlist from "./Components/Wishlist";
import { toast } from "react-toastify";

function App() {
  const [add_item, setadd_item] = useState([]);
  const [add_wishlist, setadd_wishlist] = useState([]);
  const [product, setproduct] = useState([]);
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(false);
  const filter_ittems = product.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  // const filter_poducts = product.filter((item) => item.title.toLowerCase().includes( "men's clothing"))
  // console.log('filter_poducts.....',filter_poducts )

  console.log("add_wishlist.......", add_wishlist);

  useEffect(() => {
    setloading(true);
    let product_details = async () => {
      let api = await axios("https://fakestoreapi.com/products");
      setproduct(api.data);
    };
    product_details();
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  console.log("product............", product);

  console.log(add_item);
  console.log("....", add_item);

  const add_cart = (item) => {
    setadd_item([...add_item, item]);
    toast("add cart successfully!");
  };

  const add_wishlist_cart = (item) => {
    setadd_wishlist([...add_wishlist, item]);
    toast("add favorite cart successfully!");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layouts
                add_wishlist={add_wishlist}
                add_item={add_item}
                setquery={setquery}
              />
            }
          >
            <Route path="drop_down/:category" element={<Drop_down />} />

            <Route
              path="/"
              element={
                <Home
                  loading={loading}
                  add_wishlist_cart={add_wishlist_cart}
                  add_cart={add_cart}
                  add_wishlist={add_wishlist}
                  add_item={add_item}
                  product={filter_ittems}
                  setadd_item={setadd_item}
                  setadd_wishlist={setadd_wishlist}
                />
              }
            />

            <Route path="product/:id" element={<Products />} />

            <Route
              path="/toggle"
              element={<Toggle_item add_item={add_item} />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist add_wishlist={add_wishlist} />}
            />
            {/* <Route path='/'  element={<Home/>}  /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
