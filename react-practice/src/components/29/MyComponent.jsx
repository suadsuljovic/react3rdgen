import { useContext } from "react";
import { MyContext } from "./SampleContext";

const MyComponent = () => {
  const { test } = useContext(MyContext);

  return <div>{test}</div>;
};
export default MyComponent;
