// imate 3 inputa i submit button unutar forme
// kontroliste vrednost inputa preko state
// ...

import { useState } from "react";

const Form = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />
      <input
        type="text"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
      <input
        type="text"
        value={text3}
        onChange={(e) => setText3(e.target.value)}
      />
      <input type="submit" value="Submit me" />
    </form>
  );
};

export default Form;
