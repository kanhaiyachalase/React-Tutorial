//Listing with map function
//Map is itteritable function like for loop

import React from "react";
import "./Profile1.css";

class Profile16 extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "kanhaiya", phone: "47895442", email: "kschalase03@gmail.com" },
        { name: "sham", phone: "4547885442", email: "okwkolase03@gmail.com" },
        { name: "prasad", phone: "17995442", email: "mskkalase03@gmail.com" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2> kanhaiya chalase List</h2>
        {this.state.list.map((item) => (
          <div>
            Name:<span>{item.name}</span>
            <br />
            Phone:<span>{item.phone}</span>
            <br />
            email:<span>{item.email}</span>
          </div>
        ))}
      </div>
    );
  }
}
export default Profile16;
