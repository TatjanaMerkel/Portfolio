import { Route, Switch, useLocation } from "react-router-dom";

import AddCategory from "../AddCategory";
import AddProduct from "../AddProduct";
import CategoryList from "../CategoryList";
import CheckoutStepper from "../CheckoutStepper/CheckoutStepper";
import EditCategory from "../EditCategory";
import EditProduct from "../EditProduct";
import Header from "../../components/Header/Header";
import Login from "../Login/Login";
import OnlineShop from "../OnlineShop";
import ProductList from "../ProductList";
import Products from "../Products";
import React from "react";
import Thanks from "../Thanks";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Root = () => {
  const query = useQuery();
  
  return (
    <div style={{minHeight: '90vh'}}>
      <Header />

      <Switch>
        <Route component={OnlineShop} exact path="/" />
        <Route path="/products"><Products category={query.get("category")}/></Route>
        <Route component={CheckoutStepper} path="/shopping-cart" />
        <Route component={Thanks} path="/thanks" />

        <Route component={Login} path="/admin/login" />

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
