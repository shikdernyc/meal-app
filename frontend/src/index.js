import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

import ErrorPage from "views/ErrorPage/ErrorPage";

// layouts
import Demo from "layouts/Demo";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/demo" component={Demo} />
      <Route path="/error/404" component={ErrorPage} />
      <Redirect to="/error/404" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
