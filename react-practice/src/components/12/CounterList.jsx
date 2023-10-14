import { useState } from "react";

const CounterList = () => {
  const [list, setList] = useState(["text 1", "text 2"]);

  return (
    <div>
      <button
        onClick={() => {
          setList([...list, `text ${list.length + 1}`]);
        }}
      >
        add paragraph
      </button>

      {list.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};

export default CounterList;
