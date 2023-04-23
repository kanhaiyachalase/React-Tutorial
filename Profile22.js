//JWT tocan

import React from "react";

class Profile22 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      login: null,
      token: null,
    };
  }
  login() {
    console.warn("Form Data", this.state);
  }
  87;

  render() {
    return (
      <div>
        <h1>JWT TOKEN FORM</h1>
        <div>
          <input
            type="text"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.login();
            }}
          >
            login
          </button>
        </div>
      </div>
    );
  }
}
export default Profile22;
