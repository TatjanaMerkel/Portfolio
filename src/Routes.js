import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/About/About";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={About} />
        </Switch>
      </Router>
    );
  }
}