//This is props
// props in functional component

import React from "react";

function Profile2(props) {
  return <div>{<h1>Hello from props{props.text.name}</h1>}</div>;
}
export default Profile2;
