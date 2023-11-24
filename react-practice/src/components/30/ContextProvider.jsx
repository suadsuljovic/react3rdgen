import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

const ContextProvider = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users/1");
        const responseData = await response.json();

        setUser(responseData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    loginUser();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  if (!user) {
    return <div>not Authorized</div>;
  }

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
