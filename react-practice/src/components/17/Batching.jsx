import { useState } from "react";
import Updates from "./Updates";

const Batching = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  const updateCount2 = () => {
    setCount((oldState) => oldState + 1);
    setCount((oldState) => oldState + 1);
    setCount((oldState) => oldState + 1);
  };

  const updateCount3 = () => {
    setCount((oldState) => oldState + 1); //1
    setCount((oldState) => oldState + 1); //2
    setCount(count + 1); // 1
    setCount((oldState) => oldState + 1); //2
  };

  const updateCount4 = () => {
    setCount((oldState) => oldState + 1);
    setCount(count + 1);
    setCount((oldState) => oldState + 4);
    setCount(count + 1);
    setCount((oldState) => oldState + 2);
    setCount(count + 1);
  };

  const updateCount5 = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };

  console.log("update");

  return (
    <div>
      <p>{count}</p>
      <button onClick={updateCount5}>click</button>
      {count % 2 === 0 ? <Updates test={count} updateTest={setCount} /> : null}
    </div>
  );
};

export default Batching;
