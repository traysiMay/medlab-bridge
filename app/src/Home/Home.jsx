import React from 'react'

import { userService, authenticationService, toadService } from '@/_services'

// move web3 service here or to its own QR component

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: authenticationService.currentUserValue,
      toads: null,
    }
  }

  componentDidMount() {
    // toadService.getYours().then(toads => this.setState({ toads }));
  }

  render() {
    const { currentUser, toads } = this.state
    return (
      <div>
        {' '}
        <h1>Hi {currentUser.raptorname}!</h1>
        {toads && (
          <ul>
            {toads.map(toad => (
              <li key={toad.id}>
                {toad.id} {toad.qrId}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export { Home }
