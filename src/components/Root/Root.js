import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Content from "./Content";
import AddProduct from "./AddProduct";

const Root = () => {
  return (
    <div>
      <strong> Root </strong>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">App</Link>
        <Link to="/add-product">Add Product</Link>
      </div>

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Content} path="/products" />
        <Route component={About} path="/about" />
        <Route component={AddProduct} path="/add-product" />
      </Switch>
    </div>
  );
};

export default Root;