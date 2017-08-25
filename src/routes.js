import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./components/app";
import Home from "./components/home";
import UserPage from "./components/user_page";
import ImageryEdit from "./components/imagery_edit";
import UploaderForm from "./components/uploader/home";
import UploaderStatus from "./components/uploader/status";

import User from "./utils/user";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route
        name="account"
        path="/account"
        component={UserPage}
        onEnter={User.routeRequiresAuth.bind(User)}
      />
      <Route name="user" path="/user/:id" component={UserPage} />
      <Route
        name="imagery"
        path="/imagery/:id/edit"
        component={ImageryEdit}
        onEnter={User.routeRequiresAuth.bind(User)}
      />
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
        <Route name="results" path=":square" component={Home}>
          <Route name="item" path=":item_id" component={Home} />
        </Route>
      </Route>
    </Route>
  </Router>
);
