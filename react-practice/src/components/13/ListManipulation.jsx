import { useState } from "react";

const ListManipulation = () => {
  const [list, setList] = useState([1, 2]);

  return (
    <div>
      <button onClick={() => setList([...list, "p"])}>Add</button>
      <button
        onClick={() => {
          const newState = [...list];

          newState.pop();

          setList(newState);
        }}
      >
        Remove
      </button>

      {list.map((value, index) => {
        return (
          <p onClick={() => console.log("click")} key={index}>
            {value}
          </p>
        );
      })}
    </div>
  );
};

export default ListManipulation;
