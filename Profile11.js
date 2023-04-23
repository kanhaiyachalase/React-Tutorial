//ComponentWillUnmount

import React from "react";

class Profile11 extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }

  componentWillMount() {
    alert("Hello from my Side");
  }

  render() {
    return (
      <div>
        {/* {
          this.state.toggle?null
          -
      } */}
        <ul>
          <li>Name: kanhaiya</li>
          <li>email: kanha03</li>
          <li>Addre: dsbjdsbj faizpur</li>
        </ul>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          Delete User
        </button>
      </div>
    );
  }
}

export default Profile11;
