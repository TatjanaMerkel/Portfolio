import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";

const Root = () => {
  return (
    <div>
      <strong> Root </strong>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
      </Switch>
    </div>
  );
};

export default Root;
