import React, {useState} from 'react'
import { Button, FormControl, Form, Nav, Navbar, Container  } from 'react-bootstrap';
import Reate from './Reate';

function Header(props) {
  const [data, setdata]=useState("")
  return (
    <div className='header'>
      <Navbar className='nav' bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className='co' href="#">My cima</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className='co' href="#action1" >Home</Nav.Link>
        <Nav.Link className='co' href="#action2">movis</Nav.Link>
          
        
         
         
     
      </Nav>
       {/* <div  className="d-flex">
           <button className='b1'></button>
       </div> */}
       <Reate add={props.add}/>
      <Form className="d-flex">
          
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search" onChange={(e) => props.addch(e.target.value )}
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
