//How to chenge text

import React from "react";

class Profile5 extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <>
        {this.state.show ? <h1>This Text</h1> : null}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle the text
        </button>
      </>
    );
  }
}
export default Profile5;
