import React,{useState} from "react";
import "./style.css";
import {products} from "./products";
import Cart from "./Cart";




export default function App() {

  const [cartItems,setCartItems] = useState([]);

  const Add_to_cart = (product)=>{
      const existIndex = cartItems.findIndex(item=> item.id === product.id);
      if (existIndex !== -1){
          const newCartItems = [...cartItems];
          newCartItems[existIndex].quantity +=1;
          setCartItems(newCartItems);
      }else{
          const newCartItems = [...cartItems,{...product,quantity:1}]
        setCartItems(newCartItems);
      }
   }  
   const handleClick = (product) => {
    const existItem = cartItems.find(item => item.id === product.id);
    if (existItem) {
      const newCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newCartItems);
    }
  }
  return (
    <> 
        <div className='bascket'>
          <Cart cartItems={cartItems} handleClick={handleClick} setCartItems={setCartItems} />
        </div>
        <div className='products'>
          {products.map((product)=>{
            return(
              <div className='product'>
              <img className='img_product' src={product.img_pro}/>
              <div className='context'>
                <h2 className='title'>{product.name}</h2>
                <p className='des'>{product.des}</p>
              </div>
              <button className='btn' onClick={()=>{Add_to_cart(product)}}>Add to cart</button>
            </div>
            )
          })}
        </div>
    </>
  );
}
