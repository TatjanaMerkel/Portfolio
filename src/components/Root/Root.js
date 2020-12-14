import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Content from "./Content";

const Root = () => {
  return (
    <div>
      <strong> Root </strong>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">App</Link>
      </div>

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Content} path="/products" />
        <Route component={About} path="/about" />
      </Switch>
    </div>
  );
};

export default Root;
