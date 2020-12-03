import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";

export class Header extends Component {
 
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Online Shop</Navbar.Brand>
          <Nav className="mr-auto">
            <NavDropdown title="Deine Box" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gemüse-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Obst-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mix-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Rohkost-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Basic-Box</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#vegetable">Gemüse</Nav.Link>
            <Nav.Link href="#fruits">Früchte</Nav.Link>
            <Nav.Link href="#tea">Tee</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-info">Warenkorb</Button>
          </Form>
        </Navbar>
      </header>
    );
  }
}

export default Header;
