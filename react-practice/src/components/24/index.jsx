import { useState } from "react";
import Timeout from "./Timeout";
import Countdown from "./Countdown";

const Class24 = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && <Timeout />}
      {<Countdown />}
      <button onClick={() => setToggle(!toggle)}>click</button>
    </div>
  );
};
export default Class24;
