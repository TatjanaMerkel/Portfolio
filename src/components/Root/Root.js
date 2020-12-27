import React from "react";
import { Route, Switch } from "react-router-dom";

import Content from "../Content";
import AddProduct from "../AddProduct";
import ProductList from "../ProductList";
import EditProduct from "../EditProduct";

import Header from "../../components/Header/Header";
import OnlineShop from "../OnlineShop";
import AddCategory from "../AddCategory";

const Root = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route component={OnlineShop} exact path="/" />
        <Route component={Content} path="/products" />
        <Route component={AddCategory} path="/admin/add-category" />
        <Route component={AddProduct} path="/admin/add-product" />
        <Route component={ProductList} path="/admin/list-products" />
        <Route component={EditProduct} path="/admin/edit-product/:id" />
      </Switch>
    </div>
  );
};

export default Root;
