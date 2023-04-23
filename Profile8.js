//Life cycle
// First call constructor then render then componentDidMount , ComponentDidupdate, ComponentDidUnmount

// Theire are Three Phases
// 1) Mounting 2) Updating 3) unmounting

// it Only use class component

import React from "react";

class Profile8 extends React.Component {
  constructor() {
    super();
    console.warn("constuctor");
  }

  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>Hello from Profile8</h1>
      </div>
    );
  }
}

export default Profile8;
