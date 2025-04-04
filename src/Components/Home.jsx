import { useState } from "react";
import Cart from "./Product_list";
// import { Spin } from 'antd';
import { Alert, Flex, Spin } from "antd";
// import { Audio } from 'react-loader-spinner'
// const sort_category = ["electronics","jewelery","men's clothing","women's clothing"]
// console.log('sort_category',sort_category)

function Home({ add_cart, add_item, add_wishlist_cart, product, loading }) {
  const contentStyle = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;

  const [sort_items, setort_items] = useState("");
  const [selectedCategory, setselectedCategory] = useState(null);

  const remove_cart = (id) => {
    const remove_from_cart = add_item.filter((item) => item.id !== id);
    setadd_item([...add_item, remove_from_cart]);
  };
  const categories = Array.from(new Set(product.map((res) => res.category)));
  console.log("categories.........", categories);

  const categoryOption = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const filterProducts = selectedCategory
    ? product.filter((product) => product.category === selectedCategory.value)
    : product;

  return (
    <div className="max-w-[1440px] m-auto">
      {/* <div className='mt-[151px] '>
             <select
             option={categoryOption}
             placeholder='select a category'
             onChange={(selectOption) => setselectedCategory(selectOption)}
             value={selectedCategory}
             ></select>
        </div> */}

      {loading ? (
        <div className="flex justify-center ">
          {/* <Spin  className='mt-[22%]' /> */}
          <div className="mt-[22%]">
            <Flex gap="middle" vertical>
              <Flex gap="middle">
                <Spin tip="Loading" size="large">
                  {content}
                </Spin>
              </Flex>
            </Flex>
          </div>
          {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> */}
        </div>
      ) : (
        <div className=" ">
          <div className="mt-[120px] mb-[32px]  flex justify-end mr-[135px]">
            <select
              onChange={(e) =>
                setselectedCategory(
                  categoryOption.find(
                    (option) => option.value === e.target.value
                  )
                )
              }
              value={selectedCategory?.value || ""}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categoryOption.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap  justify-center gap-12  mt-[15px]s">
            {filterProducts <= 0 ? (
              <h1>Product is not found</h1>
            ) : (
              filterProducts.map((item) => (
                <Cart
                  key={item.id}
                  item={item}
                  add_cart={add_cart}
                  add_wishlist_cart={add_wishlist_cart}
                  add_item={add_item}
                  remove_cart={remove_cart}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
