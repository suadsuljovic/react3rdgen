import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <p>{user.eyeColor}</p>
      <button
        onClick={() => {
          setUser(undefined);
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
