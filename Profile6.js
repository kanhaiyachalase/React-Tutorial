// Event Handling
// Class component eventhandling
//This keyword yachyasathi vaparala ki to object ahe tyacha

import Recat from "react";

class Profile5 extends Recat.Component {
  testFun() {
    alert("Hello from 6");
  }

  render() {
    return (
      <div>
        <h1>Profile6</h1>
        <button onClick={() => this.testFun()}> Profile6</button>
      </div>
    );
  }
}

export default Profile5;
