import { useState } from "react";
import SimpleComponent from "./SimpleComponent";
import Find from "./Find";
import List from "./List";

const Class35 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <SimpleComponent />
      <Find />
      <List
        data={[{ title: "Prvi" }, { title: "Drugi" }, { title: "Treci" }]}
      />
    </div>
  );
};
export default Class35;
