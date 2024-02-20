import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './image/logo.png'
const Navbarr = () => {
  return (
    <div className='navbar1'>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
    <img src={img} style={{width:100,}}></img>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="MEN" id="navbarScrollingDropdown">

            <p className='pr'>TOP</p>


              <NavDropdown.Item href="#action3">hoodie</NavDropdown.Item>
              <NavDropdown.Item href="#action4">sweatwear              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">jacket              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">blazer             </NavDropdown.Item>
              <NavDropdown.Item href="#action4">t-shirt              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">polo shirt              </NavDropdown.Item>
              <NavDropdown.Divider />
              <p className='pr'>BOTTOM</p>

              <NavDropdown.Item href="#action5">jeans              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">cargo              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">short              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">chinos              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">trackpants              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">joggers              </NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
            <p className='pr'>TOP</p>
              <NavDropdown.Item href="#action3">blouse</NavDropdown.Item>
              <NavDropdown.Item href="#action4">t-shirt              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">tank top              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">sweater             </NavDropdown.Item>
              <NavDropdown.Item href="#action4">cardigan            </NavDropdown.Item>
              <NavDropdown.Item href="#action4">blazer              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">crop top              </NavDropdown.Item>
              <NavDropdown.Divider />
              <p className='pr'>BOTTOM</p>
              <NavDropdown.Item href="#action5">jeans              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">leggings              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">shorts              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">culottes              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">jeggings              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">corpi pants              </NavDropdown.Item>

            </NavDropdown>
          
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action4">instagram              </NavDropdown.Item>
              <NavDropdown.Divider />
              
              <NavDropdown.Item href="#action5">tiktok              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="top-site">
      <div className="background-img">
        {/* You can adjust the image path and other properties as needed */}
        <img src="https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg" alt="Background" />
      </div>
      <div className="content">
        {/* Your content goes here */}
        
      </div>
    </div>
    </div>
  )
}

export default Navbarr