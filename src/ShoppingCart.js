

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from './redux/PanierSlice';

const ShoppingCart = ({  }) => {
  const dispatch=useDispatch()
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );
  const placeOrder = () => {
    // Handle placing the order here
    console.log("Order placed!");
  };
  const {panierdata}=useSelector(state=>state.panier)
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {panierdata.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          <div className='product-grid'>
          {panierdata.map((item) => (
            <li key={item.id}>
             <div className="gallery">
              
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <button onClick={() =>  dispatch(updateQuantity({id:item.id, num: -1}))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(updateQuantity({id:item.id, num: 1}))}>+</button>
                </div>
                
                <button className='bc' onClick={() =>dispatch( removeFromCart(item.id)) } >Remove</button>
                
                <button onClick={placeOrder}>Place Order</button>
              </div>
              
            </li>
            
          ))}
          
          </div>
        </ul>
      )}
    </div>
  );
};
export default ShoppingCart;

