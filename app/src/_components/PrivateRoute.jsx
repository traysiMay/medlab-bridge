import React from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticationService } from "@/_services";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = authenticationService.currentUserValue;
      const worched = authenticationService.currentWorchValue;

      if (!currentUser && !worched) {
        return <Redirect to="/login" />;
      }
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);
