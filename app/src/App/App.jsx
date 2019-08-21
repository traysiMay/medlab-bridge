import React from "react";
import { HashRouter, Router, Route } from "react-router-dom";

import { history } from "@/_helpers";
import { authenticationService, web3Service } from "@/_services";

import { PrivateRoute } from "@/_components";

import { Home } from "@/Home";
import { Nav } from "@/Nav";
import { Profile } from "@/Profile";
import { Login } from "@/Login";
import { Register } from "@/Register";
import { RSVP } from "@/RSVP";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <HashRouter basename="/" history={history}>
        <div>
          {currentUser && <Nav logout={this.logout} />}
          <div>
            <PrivateRoute exact path="/" component={Profile} />
            <Route path={["/home/:stato", "/home"]} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path={["/rsvp/:hollaback", "/rsvp"]} component={RSVP} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export { App };
