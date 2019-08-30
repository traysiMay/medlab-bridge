import React, { Fragment } from "react";
import { HashRouter, Router, Route, Switch } from "react-router-dom";

import { history } from "@/_helpers";
import { authenticationService, web3Service } from "@/_services";

import { PrivateRoute } from "@/_components";

import { Frontpage } from "@/Frontpage";
import { Home } from "@/Home";
import { Initiation } from "@/Initiation";
import { Login } from "@/Login";

import { Nav } from "@/Nav";
import { Register } from "@/Register";
import { RSVP } from "@/RSVP";

const ZApp = ({ showNav, currentUser, history, logout }) => {
  return (
    <div>
      {showNav && (
        <Nav currentUser={currentUser} history={history} logout={logout} />
      )}
      <div>
        <PrivateRoute exact path="/init" component={Initiation} />
        <Route path={["/home/:stato", "/home"]} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path={["/rsvp/:hollaback", "/rsvp"]} component={RSVP} />
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      worched: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
    authenticationService.worched.subscribe(x => this.setState({ worched: x }));
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser, worched } = this.state;
    const showNav = currentUser || worched ? true : false;
    const p = history.location.pathname;
    return (
      <HashRouter basename="/" history={history}>
        <div>
          {" "}
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route
              component={() => (
                <ZApp
                  currentUser={currentUser}
                  history={history}
                  logout={this.logout}
                  showNav={showNav}
                />
              )}
            />
          </Switch>
          {/* {showNav && (
            <Nav
              currentUser={currentUser}
              history={history}
              logout={this.logout}
            />
          )}
          <div>
            <PrivateRoute exact path="/init" component={Initiation} />
            <Route path={["/home/:stato", "/home"]} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path={["/rsvp/:hollaback", "/rsvp"]} component={RSVP} />
          </div> */}
        </div>
      </HashRouter>
    );
  }
}

export { App };
