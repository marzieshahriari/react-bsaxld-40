import React  from "react";

const img_cart_url ='https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'

export default function Cart(props) {

     const {cartItems,handleClick} = props;

     let total_quantity = 0;
     cartItems.map(item=>{
      total_quantity += item.quantity;
      })


      

  return(
    <div className='cart'>
      <a>
      <img className='img_cart' src={img_cart_url}/>
      <span className='count'>{total_quantity? <i>{total_quantity}</i>:'' }</span>
      </a>
      <div className='selected_products'>
        {cartItems.map(item=>{
          return(
            <div className='selected_product'>
              <div class='content'>
                <img className='cart_pro_img' src={item.img_pro}/> 
                <ul>
                  <li className='title'>{item.name}</li>
                  <li className='des'>{item.des}</li>
                </ul>
              </div>  
              <div>
                <span>{item.quantity}</span>
                <button className='add' onClick={()=>{handleClick(item)}}>add</button>
              </div>  
        </div>
          );
        })}
        
      </div>
    </div>
  );

}