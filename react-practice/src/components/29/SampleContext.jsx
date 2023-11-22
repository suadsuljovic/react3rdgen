import { createContext, useState } from "react";

export const MyContext = createContext({});

const SimpleContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider
      value={{ test: "test", count: count, setCount: setCount }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContextProvider;
