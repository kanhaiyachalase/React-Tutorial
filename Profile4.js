//State
// state ha ek class cha internal and private object asato
//It is object and it work like variable
import React from "react";

class Profile4 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "kana",
      email: "kschalse",
      count: 0,
    };
  }
  updateState() {
    this.setState({
      name: "kanhaiya",
      email: "kschalase03@.co",
      count: +6,
    });
  }

  render() {
    return (
      <>
        <h1>Hello State {this.state.name}</h1>
        <h1>Email {this.state.email}</h1>
        <h1>Count {this.state.count}</h1>;
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          Up dateName
        </button>
      </>
    );
  }
}
export default Profile4;
