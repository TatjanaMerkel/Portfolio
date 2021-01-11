import "./Header.css";

import {
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

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

  logout() {
    localStorage.removeItem('token');
  }

  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Online Shop
          </Navbar.Brand>

          <Nav className="mr-auto">

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

            {localStorage.getItem("token") && (
              <>
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
              </>
            )}
          </Nav>

          <Form inline>
            <Link to="/shopping-cart">
              <Button variant="outline-info">
                Warenkorb ({localStorage.length})
              </Button>
            </Link>
          </Form>

          <div class="ml-2">
            {localStorage.getItem("token") ? (
              <Button
                onClick={() => this.logout()}
                variant="outline-info"
              >
                Logout
              </Button>
            ) : (
              <Link to="/admin/login">
                <Button variant="outline-info">Login</Button>
              </Link>
            )}
          </div>
        </Navbar>

        <div></div>
      </header>
    );
  }
}

export default Header;
