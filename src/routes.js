import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./components/app";
import Home from "./components/home";
import UploaderForm from "./components/uploader/home";
import UploaderStatus from "./components/uploader/status";

import User from "./utils/user";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route
        name="upload"
        path="/upload"
        component={UploaderForm}
        onEnter={User.routeRequiresAuth.bind(User)}
      />
      <Route
        name="upload-status"
        path="/upload/status/:id"
        component={UploaderStatus}
        onEnter={User.routeRequiresAuth.bind(User)}
      />
      <Route name="map" path="/:map" component={Home}>
        <Route name="latest" path="latest/:image_id" />
        <Route name="user" path="user/:user_id">
          <Route name="image" path=":image_id" />
        </Route>
        <Route name="square" path="square/:square_id">
          <Route name="image" path=":image_id" />
        </Route>
      </Route>
    </Route>
  </Router>
);
