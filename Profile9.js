//ComponentDidMount

import React from "react";

class Profile9 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    console.warn("constructor");
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Hello from Profile9</h1>
      </div>
    );
  }
}

export default Profile9;
