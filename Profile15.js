//Form validation
//Refer codestep by step tutorial 19
import React from "react";

class Profile15 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      nameError: "",
      passwordError: "",
    };
  }
  valid() {
    if (!this.state.name.includes("#") && this.state.password.length < 5) {
      this.setState({
        nameError: "Invalid name",
        passwordError: "password is incorrect",
      });
    } else if (!this.state.name.includes("#")) {
      this.setState({
        nameError: "Invalid name",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "password is incorrect",
      });
    } else {
      return true;
    }
  }
  submit() {
    this.setState({
      nameError: " ",
      passwordError: " ",
    });
    if (this.valid()) {
      alert("submit");
    }
  }
  render() {
    return (
      <div>
        <h1>Form validation</h1>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>
        <p style={{ color: "red" }}>{this.state.nameError}</p>
        <br />

        <input
          type="password"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        ></input>
        <p style={{ color: "red" }}>{this.state.passwordError}</p>
        <br />
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default Profile15;
