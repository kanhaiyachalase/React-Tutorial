//ComponentDid Update
// Component update ha function call zalaki call hoto

import React from "react";

class Profile10 extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      who: null,
    };
  }
  componentDidUpdate() {
    console.warn("didmound up");
  }

  render() {
    return (
      <div>
        <h1>Hello from Profile10</h1>
        <button onClick={() => this.setState({ active: "yes" })}>
          {" "}
          Action
        </button>
      </div>
    );
  }
}

export default Profile10;
