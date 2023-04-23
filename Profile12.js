// Hocks
// Hocks are only use in functional component
// Hocks madhe apan ek variable gheto useState navacha
//apan ek const variable ghetala ani don value ghetalya count and setcounter ani tyala usestate chi value 0 anhe pan apan apalya pramane kahi pan gheu sakto

import React, { useState } from "react";

function Profile12() {
  const [count, setcounter] = useState(0);
  return (
    <div>
      <h1>Hello from profile12 {count}</h1>
      <button
        onClick={() => {
          setcounter(count + 1);
        }}
      >
        Hello from the hooks
      </button>
    </div>
  );
}

export default Profile12;
