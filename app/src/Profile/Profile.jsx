import React from "react";
import { Header, HomeContainer } from "@/_styles/basic";
import { authenticationService, toadService } from "@/_services";

// move web3 service here or to its own QR component

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: authenticationService.currentUserValue,
      toads: null
    };
  }

  componentDidMount() {
    toadService.getYours().then(toads => this.setState({ toads }));
  }

  render() {
    const { currentUser, toads } = this.state;
    return (
      <ProfileContainer>
        <Header>Hi {currentUser.raptorname}!</Header>
        {toads && (
          <ul>
            {toads.map(toad => (
              <li key={toad.id}>
                {toad.id} {toad.qrId}
              </li>
            ))}
          </ul>
        )}
      </ProfileContainer>
    );
  }
}

export { Profile };
