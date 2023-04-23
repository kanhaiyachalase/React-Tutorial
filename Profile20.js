//Use refs

import React from "react";

class Profile20 extends React.Component {
  constructor() {
    super();
    this.useRef = React.createRef();
  }
  editVal() {
    console.warn(this.useRef);
  }
  render() {
    return (
      <div>
        <h1>Ref React</h1>
        <input ref={this.useRef} type="text" name="user"></input>
        <br />

        <button onClick={() => this.editVal()}>Click Me</button>
      </div>
    );
  }
}
export default Profile20;
