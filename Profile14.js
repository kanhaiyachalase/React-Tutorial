//Form Hnadling

import React from "react";

class Profile14 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null,
    };
  }

  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <div>
        <h1>Form is</h1>
        <input type="text" name="user" onChange={(e) => { this.setState({ user: e.target.value }); }}></input>
        <br />
        <br />
        <input
          type="password" name="password" onChange={(e) => {this.setState({ password: e.target.value });}}
        ></input>
        <br />
        <br />
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default Profile14;
