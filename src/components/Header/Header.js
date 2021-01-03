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
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      categories: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/categories/");
    const categories = await res.json();
    this.setState({ categories: categories });
  }

  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Online Shop
          </Navbar.Brand>

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

            <NavDropdown title="Produkte">
              {this.state.categories.map((category, index) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/products?category=${category.id}`}
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/admin/add-category">
              Add Category
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/list-categories">
              List Categories
            </Nav.Link>

            <Nav.Link as={Link} to="/admin/add-product">
              Add Product
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/list-products">
              List Products
            </Nav.Link>
          </Nav>

          <Form inline>
            <Link to="/shopping-cart">
              <Button variant="outline-info">Warenkorb ({localStorage.length})</Button>
            </Link>
          </Form>
        </Navbar>

        <div></div>
      </header>
    );
  }
}

export default Header;
