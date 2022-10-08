import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function NavScrollExample({setSelectedFilter,setSearchKeyword}) {
  const [message, setMessage] = useState('');

  const handleChange=(event)=>{
    setSelectedFilter(event);
  }
  const handleChange2 = event => {
    setMessage(event.target.value);
  };

  const handleClick=(event)=>{
    event.preventDefault();
    setSearchKeyword(message);
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Category" id="navbarScrollingDropdown" onSelect={handleChange}>
            <NavDropdown.Item eventKey="No Filter">No Filter</NavDropdown.Item>
              <NavDropdown.Item eventKey="men's clothing">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item eventKey="women's clothing">
                Women's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="jewelery">
               Jewelery
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Size" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">L</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                XL
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
               XXL
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange2}
              value={message}
            />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
          </Form> 
          <Link to="/cart">
          <Button className="ml-5">Go to Cart</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;