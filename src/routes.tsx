import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "./error";
import Login from "./login";
import Repos from "./repos";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/repos" component={Repos} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
