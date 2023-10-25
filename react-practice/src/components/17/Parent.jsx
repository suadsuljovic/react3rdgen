import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [test, setTest] = useState(0);
  return (
    <div>
      <p style={{ color: test % 5 === 0 ? "green" : "black" }}>parent</p>
      <p>{test}</p>
      <button onClick={() => setTest(test + 1)}>click</button>
      <Child state={test} updateState={setTest} />
    </div>
  );
};
export default Parent;
