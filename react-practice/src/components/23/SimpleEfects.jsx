import { useEffect, useState } from "react";

const SimpleEffects = () => {
  const [state, setState] = useState("nest");
  const [state2, setState2] = useState("nesto2");

  useEffect(() => {
    console.log("render");
  });

  useEffect(() => {
    console.log("render2");
  }, []);

  useEffect(() => {
    console.log("render3", state);
  }, [state]);

  return (
    <div>
      {state}
      {state2}

      <button onClick={() => setState("novo")}>click</button>
      <button onClick={() => setState2("novo")}>click2</button>
    </div>
  );
};

export default SimpleEffects;
