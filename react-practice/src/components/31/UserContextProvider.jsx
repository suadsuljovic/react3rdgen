//napraviti user context koji ima pocetnu vredonst za objekat
// dodati usercontext.provider unutar ove komponente
// obati njime decu ove komponente
// napraviti user state koji saljete preko contexta

import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://dummyjson.com/auth/users/1", {
          method: "GET" /* or POST/PUT/PATCH/DELETE */,
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.message === "Invalid/Expired Token!") {
          throw new Error();
        }

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, []);

  if (!user) {
    return <div>not authorized</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
