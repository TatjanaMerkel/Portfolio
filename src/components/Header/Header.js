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

import { Link, Route, Switch } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Online Shop</Navbar.Brand>

          <Nav className="mr-auto">

            <NavDropdown title="Deine Box" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gemüse-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Obst-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mix-Box</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Rohkost-Box
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Basic-Box</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/products">Gemüse</Nav.Link>
            <Nav.Link as={Link} to="/products">Obst</Nav.Link>
            <Nav.Link as={Link} to="/products">Tee</Nav.Link>

            <Nav.Link as={Link} to="/admin/add-product">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/admin/list-products">List Products</Nav.Link>
          </Nav>
          
          <Form inline>
            <Button variant="outline-info">Warenkorb</Button>
          </Form>
        </Navbar>

        <div></div>
      </header>
    );
  }
}

export default Header;
