import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Content from "../Content";
import AddProduct from "../AddProduct";
import ProductList from "../ProductList";
import EditProduct from "../EditProduct";

import Header from "../../components/Header/Header";
import OnlineShop from "../OnlineShop";
import AddCategory from "../AddCategory";
import CategoryList from "../CategoryList";
import EditCategory from "../EditCategory";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Root = () => {
  const query = useQuery();
  
  return (
    <div>
      <Header />

      <Switch>
        <Route component={OnlineShop} exact path="/" />
        <Route path="/products"><Content name={query.get("category")}/></Route>

        <Route component={AddCategory} path="/admin/add-category" />
        <Route component={CategoryList} path="/admin/list-categories" />
        <Route component={EditCategory} path="/admin/edit-category/:id" />

        <Route component={AddProduct} path="/admin/add-product" />
        <Route component={ProductList} path="/admin/list-products" />
        <Route component={EditProduct} path="/admin/edit-product/:id" />
      </Switch>
    </div>
  );
};

export default Root;
