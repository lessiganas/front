import React from 'react'
import { Link } from 'react-router-dom';
import jdidi from '../image/8.png'
import jdidi1 from '../image/6.png'
import jdidi2 from '../image/1.png'
import jdidi3 from '../image/7.png'
import jdidi4 from '../image/3.png'
import jdidi5 from '../image/4.png'
import { useDispatch } from 'react-redux';
import { addpanier } from '../redux/PanierSlice';
const product1 = [
  { id: 1, name: 'Product 1', price: 99.99, image: jdidi },
  { id: 2, name: 'Product 2', price: 99.99, image: jdidi1 },
  { id: 3, name: 'Product 3', price: 99.99, image: jdidi2 },
  { id: 4, name: 'Product 3', price: 99.99, image: jdidi3 },
  { id: 5, name: 'Product 1', price: 99.99, image: jdidi },
  { id: 6, name: 'Product 2', price: 99.99, image: jdidi1 },
  { id: 7, name: 'Product 3', price: 99.99, image: jdidi2 },
  { id: 8, name: 'Product 3', price: 99.99, image: jdidi3 },
  // Add more products as needed
];
const Cargo = () => {
  const dispatch=useDispatch()
  return (
    <div className='apps' >
      <h1 className='pr'>polo shirt</h1>
<div className="product-grid">
  
{product1.map(product => (
        <div key={product.id} className='gallery'>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addpanier(product))}>Add to Cart</button>
        </div>
      ))}
         
          {/* More Product Cards */}
        </div>
    </div>
  )
}

export default Cargo