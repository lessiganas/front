import React from 'react'
import image from './image/logo1.png'
const Footer = () => {
  return (
    <div>
<div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <h3>BLACK-DIAMOND</h3>
             
              <div class="app-logo">
                <img src="https://assets.technologynetworks.com/production/dynamic/images/content/343031/scientsists-make-diamonds-at-room-temperature-in-minutes-343031-960x540.jpg?cb=10986282" alt="" />
               
              </div>
            </div>
      
            <div class="footer-col-2">
              <img src={image}  />
              <p>
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
      
            <div class="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
               <a href='coupons'><li>Coupons</li></a> 
                <a href='blog post'><li>Blog Post</li></a>
               <a href='Return Policy'> <li>Return Policy</li></a>
               <a href='Join Affiliate'> <li>Join Affiliate</li></a>
              </ul>
            </div>
      
            <div class="footer-col-4">
              <h3>Follow us</h3>
              <ul>
              <a href='facebook'>  <li>Facebook</li></a>
              <a href='twitter'>   <li>Twitter</li></a>
              <a href='instagram'>  <li>Instagram</li></a>
              <a href='youtube'> <li>YouTube</li></a>
              </ul>
            </div>
          </div>
          <hr />
          
        </div>
      </div>
      
    </div>
  )
}

export default Footer