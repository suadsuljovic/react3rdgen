import { useEffect, useState } from "react";

const Timeout = () => {
  const [text, setText] = useState(new Date().toTimeString());

  useEffect(() => {
    const intevalId = setInterval(() => {
      setText(new Date().toLocaleTimeString());
      console.log("sdfsd");
    }, 1000);

    return () => {
      clearInterval(intevalId);
    };
  }, []);

  return <div>{text}</div>;
};
export default Timeout;
