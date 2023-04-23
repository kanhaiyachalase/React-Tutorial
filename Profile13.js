// //Hocks is replacement of = componentDidMount
//                             ComponentDidUpdate
//                             componentwillUnmounted
//UseEffect ashyasathi vaparta ki apan functional componet madhe pan life cycle use karu shakata
// Apalyala functional component madhe hocks use karnyasathi useeffect and usestate vaparavi lagate
//useseffect fakt ek function ast baki kahi nahi khali count

import Recat, { useEffect, useState } from "react";

function Profile13() {
  const [count, setcount] = useState(1);
  useEffect(() => {
    console.warn(count);
  }, [count === 5]);
  return (
    <div>
      <h1> Hello from the Profile13....... {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default Profile13;
