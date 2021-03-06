import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { history } from "@/_helpers";
import { authenticationService, uiService } from "@/_services";

import { PrivateRoute } from "@/_components";

import { Frontpage } from "@/Frontpage";
import { ChapterOne } from "@/ChapterOne";
import { Initiation } from "@/Initiation";
import { Login } from "@/Login";

import { Nav } from "@/Nav";
import { Register } from "@/Register";
import { RSVP } from "@/RSVP";
import { Info } from "@/Info";
import { Home } from "@/Home";
import { ChapterTwo } from "@/ChapterTwo";
import Modal from "../_components/Modal";
import { ModalStyle } from "../_styles/basic";

const ZApp = ({ showModal, showNav, currentUser, logout }) => {
  return (
    <div>
      {showNav && <Nav currentUser={currentUser} logout={logout} />}
      {showModal && (
        <Modal
          onClick={() => {
            uiService.hideModal();
          }}
        ></Modal>
      )}
      <div>
        <PrivateRoute exact path="/init" component={Initiation} />
        <Route path="/home" component={Home} />
        {/* <Route path={["/ch1/:stato", "/ch1"]} component={ChapterOne} /> */}
        <Route path={["/ch2/"]} component={ChapterTwo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path={["/rsvp/:hollaback", "/rsvp"]} component={RSVP} />
        <Route path="/info" component={Info} />
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      nda: false,
      showModal: false
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
    authenticationService.nda.subscribe(x => this.setState({ nda: x }));
    uiService.currentModal.subscribe(x => this.setState({ showModal: x }));
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    // worched not necessary unless I do another event?
    const { currentUser, nda, showModal } = this.state;
    // const showNav = currentUser || worched ? true : false;
    const showNav = true;
    const url = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route
              component={() => (
                <ZApp
                  currentUser={currentUser}
                  nda={nda}
                  showModal={showModal}
                  history={history}
                  logout={this.logout}
                  showNav={showNav}
                  url={url}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export { App };
