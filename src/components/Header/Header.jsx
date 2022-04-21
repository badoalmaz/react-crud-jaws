import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = ({ handleShow }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={handleShow}>
          Add Product
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
