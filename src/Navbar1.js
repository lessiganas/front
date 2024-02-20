

import React, { useContext, useRef, useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img from './image/logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
const Navbar1 = ({ handleSearch }) => {
  
  return (
    <div className='navbar1'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={img} style={{ width: 200,margin:20,height:40 }} alt="logo" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
             <div className='navlink'>
              
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="MEN" id="navbarScrollingDropdown">
              
           
                <NavDropdown.Item  as={Link} to="/MEN/hoodie">Hoodie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/sweatwear">Sweatwear</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/jacket">Jacket</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/blazer">Blazer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/t-shirt">T-shirt</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/polo-shirt">Polo Shirt</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/men/jeans">Jeans</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/cargo">Cargo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/short">Short</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/chinos">Chinos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/trackpants">Trackpants</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/men/joggers">Joggers</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
              
                <NavDropdown.Item as={Link} to="/women/blouse">Blouse</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/t-shirt">T-shirt</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/tank-top">Tank Top</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/sweater">Sweater</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/cardigan">Robe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/blazer">Blazer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/crop-top">Crop Top</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/women/jeans">Jeans</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/leggings">Leggings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/shorts">Shorts</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/culottes">Culottes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/jeggings">Jeggings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women/corpi-pants">Corpi Pants</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Links" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://www.facebook.com">Facebook</NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="https://www.tiktok.com">TikTok</NavDropdown.Item>
              </NavDropdown>
              <div className='login'>
              <NavDropdown title="log/reg" id="navbarScrollingDropdown">
              
           
              <div className='nav-login-cart'>
            <Link to='/login'> <button>login</button></Link>
            <Link to='/register'> <button>register</button></Link>
            <Link to='/cart'> </Link>
           
          </div>
            </NavDropdown>
            </div>
              </div>
            </Nav>
            <NavDropdown.Item as={Link} to="/panier">  <Button variant="outline-primary" className='rounded-circle' style={{ width: "3rem", height: "3rem", position: "relative" }}
> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              
            </div>
            </Button>
            </NavDropdown.Item>
            <Form className="d-flex">
            
          </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default Navbar1;
