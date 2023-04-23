//Class component is also called Stateful
//In functional component state are not use
// in class component constructor we can make

import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.warn("Hello from DidMount");
  }

  render() {
    return <h1>Hello from Class Component</h1>;
  }
}
export default Profile;
