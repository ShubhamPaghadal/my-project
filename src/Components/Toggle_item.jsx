import React from 'react'
import Cart from './Product_list'


function Toggle_item({add_item, setadd_item}) {
  

  const removecart = (id) => {
    const items_filter = add_item.filter((item) => item !== id)
    setadd_item([...add_item, items_filter])
  }

  const price_mapping = add_item.map((cart_price) => cart_price.price).reduce((acc, pre) => acc + pre , 0)
  console.log('price_mapping.......', price_mapping)


  return (
  <>
  {
  add_item.length <= 0  ? 'Cart is emptty' :  
  <>
   { add_item.map((item) => (
      <div key={item.id}  className="  border-b-4  flex-col justify-between  max-w-[1440px]  m-[auto] flex flex-wrap gap-12  mt-[151px]
      items-center border border-black w-[calc(26.33%_-_20px)]
       box-border transition-shadow duration-[0.3s] bg-white relative 
       p-5 rounded-2xl border-solid
        hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]
        cursor-pointer
        ">
     <div >
     {/* <span
             className="absolute font-medium text-[rgb(163,37,37)] text-[1.2rem] w-[25px] h-[25px] flex justify-center items-center cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease] rounded-[50%] right-0 top-0 hover:text-[rgb(252,6,6)]"
             onClick={() => handleDelete(item.id)}
           >
             X
           </span> */}
           
           <div className="w-full h-[200px] overflow-hidden relative">
           
             <img 
               src={item.image}
               alt={item.imageName}
               className="w-auto h-full object-cover"
             />
             
    
           </div>
           <div>
             <h1 className="text-2xl mx-0 my-2.5">{item.title}</h1>
             <p className="text-[1.2rem] text-teal-700 font-[bold]">
               ${item.price}
             </p>
             <p className="text-base text-[#666] mb-2.5">{item.category}</p>
             <p className="text-[#8d8b8b] mb-2.5 text-sm">{item.rating.rate}</p>
           </div>
           {/* <div className="flex gap-2.5">
             
               
                <button onClick={ () => removecart(item.id) } className=' w-[82px] bg-[yellow] border-2 
                  border-sky-500   rounded-lg ' >remove cart </button>
            
           </div> */}
          
     </div>
     
        </div>
        
        

          
    ))}                                                                                 
    <hr  className='my-[50px]' />                               
     <h1 className='text-center'>Total price:-${price_mapping}</h1>
    </>

  }
  </>
  
)
}

export default Toggle_item
