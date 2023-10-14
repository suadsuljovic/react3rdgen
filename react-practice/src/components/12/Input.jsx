import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <p>
        {new Intl.NumberFormat("de", {
          style: "currency",
          currency: "USD",
        }).format(value)}
      </p>
    </div>
  );
};
export default Input;
