//Event Handling
// in Functional component

import React from "react";

function profile7() {
  function Fun() {
    alert("Hello from Profile7");
  }

  return (
    <div>
      <h1>Hello from profile7</h1>
      <button onClick={Fun}>Profile7</button>
    </div>
  );
}

export default profile7;
