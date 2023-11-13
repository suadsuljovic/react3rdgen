import { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const responseData = await response.json();

        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    // fetch("https://api.quotable.io/random")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     setData(responseData);
    //   });
  }, []);

  console.log(data);

  return (
    <div>
      <p>Author: {data?.author}</p>
      <p>Quote: {data?.content}</p>
    </div>
  );
};
export default Fetch;
