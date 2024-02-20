import React, { useState } from 'react';
import jdidi from './image/8.png'
import jdidi1 from './image/6.png'
import jdidi2 from './image/1.png'
import jdidi3 from './image/7.png'
import jdidi4 from './image/3.png'
import jdidi5 from './image/4.png'
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addpanier } from './redux/PanierSlice';


const products = [
  { id: 1, name: 'Product 1', price: 99.99, image: jdidi },
  { id: 2, name: 'Product 2', price: 99.99, image: jdidi1 },
  { id: 3, name: 'Product 3', price: 99.99, image: jdidi2 },
  { id: 4, name: 'Product 3', price: 99.99, image: jdidi3 },
  // Add more products as needed
];
const product = [
  { id: 5, name: 'Product W', price: 99.99, image: jdidi },
  { id: 6, name: 'Product W', price: 99.99, image: jdidi1 },
  { id: 7, name: 'Product W', price: 99.99, image: jdidi2 },
  { id: 8, name: 'Product W', price: 99.99, image: jdidi3 },
  // Add more products as needed
];
const product1 = [
  { id: 9, name: 'Product 1', price: 99.99, image: jdidi },
  { id: 10, name: 'Product 2', price: 99.99, image: jdidi1 },
  { id: 11, name: 'Product 3', price: 99.99, image: jdidi2 },
  { id: 12, name: 'Product 3', price: 99.99, image: jdidi3 },
  { id: 13, name: 'Product 1', price: 99.99, image: jdidi },
  { id: 14, name: 'Product 2', price: 99.99, image: jdidi1 },
  { id: 15, name: 'Product 3', price: 99.99, image: jdidi2 },
  { id: 16, name: 'Product 3', price: 99.99, image: jdidi3 },
  // Add more products as needed
];

const Product = () => {
const dispatch=useDispatch()

 
  return (
    
    <div className='content'  >
      <div className='title'>OWER MAN'S OFFERS</div>
<div>
      <div class="gallery1" >
  <a target="_blank" href="img_5terre.jpg">
  </a>
  <img src={jdidi}></img>
  <h2>Product Name</h2>
            <p style={{fontSize:50}}>$99.99</p>
           
</div>

<div class="gallery1">
  <a target="_blank" href="img_forest.jpg">
  </a>
  <img src={jdidi1}></img>

  <h2>Product Name</h2>
  <p style={{fontSize:50}}>$99.99</p>
</div>
</div>
  <div className='title'>OWER MAN'S OFFERS</div>
<div>

<div className='products'>
{products.map(product => (
        <div key={product.id} className='gallery'>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addpanier(product))}>Add to Cart</button>
        </div>
      ))}
</div>




</div>

<div className='title'>OWER WOMAN OFFERS</div>


<div>
{product.map(product => (
        <div key={product.id} className='gallery'>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addpanier(product))}>Add to Cart</button>
        </div>
      ))}

</div>
 

<div className='title'>TOP SELLER</div>

<div style={{marginLeft:85}}>
    
{product1.map(product => (
        <div key={product.id} className='gallery'>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addpanier(product))}>Add to Cart</button>
        </div>
      ))}

</div>


      </div>


  )

}


export default Product