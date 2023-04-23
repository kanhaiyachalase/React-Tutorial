//Api Call

import React from "react";

class Profile19 extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2").then((resp) => {
      resp.json().then((result) => {
        // console.warn(result.data);
        this.setState({ user: result.data });
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Fetch API</h1>
        {this.state.user
          ? this.state.user.map((item, i) => (
              <div>
                <p>
                  {i}-----{item.first_name} {item.last_name}
                </p>
                {item.email}
              </div>
            ))
          : null}
      </div>
    );
  }
}
export default Profile19;
