
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import WorkPage from "views/examples/WorkPage.js";
import PortPage from "views/examples/PortPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import AboutPage from "views/examples/AboutPage.js";
import ContactPage from "views/examples/ContactPage";
import ServicePage from "views/examples/ServicePage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/work-page"
        render={(props) => <WorkPage {...props} />}
      />
      <Route
        path="/port-page"
        render={(props) => <PortPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/about-page"
        render={(props) => <AboutPage {...props} />}
      />
      <Route
        path="/service-page"
        render={(props) => <ServicePage {...props} />}
      />
      <Route
        path="/contact-page"
        render={(props) => <ContactPage {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
