// imate 3 inputa i submit button unutar forme
// kontroliste vrednost inputa preko state
// ...

import { useState } from "react";

const FormObject = () => {
  const [inputs, setInputs] = useState({
    text1: "",
    text2: "",
    text3: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputs.text1}
        onChange={(e) => {
          setInputs({ ...inputs, text1: e.target.value });
        }}
      />
      <input
        type="text"
        value={inputs.text2}
        onChange={(e) =>
          setInputs({
            text1: inputs.text1,
            text2: e.target.value,
            text3: inputs.text3,
          })
        }
      />
      <input
        type="text"
        value={inputs.text3}
        onChange={(e) =>
          setInputs({
            text1: inputs.text1,
            text2: inputs.text2,
            text3: e.target.value,
          })
        }
      />
      <input type="submit" value="Submit me" />
    </form>
  );
};

export default FormObject;
