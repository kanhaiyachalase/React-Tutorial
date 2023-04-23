//Custome Hocks
// The name of custom Hook starts with "use" which can call other Hooks. A custom Hook is just like a regular function, and the word "use" in the beginning tells that this function follows the rules of Hooks. Building custom Hooks allows you to extract component logic into reusable functions.

import React, { useState, useEffect } from "react";

function Profile23() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = count + "hits kar de Bhai";
  });
  return (
    <div>
      <h1>Cu Hocks {count}</h1>
      <button onClick={() => setcount(count + 1)}> Please Click ME</button>
    </div>
  );
}
export default Profile23;
