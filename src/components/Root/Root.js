import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "../About";
import Home from "../Home";
import Content from "../Content";
import AddProduct from "../AddProduct";
import ProductList from "../ProductList";
import EditProduct from "../EditProduct";

import Header from "../../components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">App</Link>
        <Link to="/admin/add-product">Add Product</Link>
        <Link to="/admin/list-products">List Products</Link>
      </div>

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Content} path="/products" />
        <Route component={About} path="/about" />
        <Route component={AddProduct} path="/admin/add-product" />
        <Route component={ProductList} path="/admin/list-products" />
        <Route component={EditProduct} path="/admin/edit-product/:id" />
      </Switch>
    </div>
  );
};

export default Root;
