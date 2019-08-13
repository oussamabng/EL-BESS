
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/elbess.scss?v=1.0.0";


import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import ContactPage from "views/examples/ContactPage.jsx";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/welcome" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/Contact-page"
        render={props => <ContactPage {...props} />}
      />
    <Redirect from="/" to="/welcome" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
