import { useContext } from "react";
import { UserContext } from "./ContextProvider";
import LoginForm from "./LoginForm";

const Class30 = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      {user && (
        <div>
          <img src={user.image} alt="" />
          <p>{user.firstName}</p>
          <p>{user.age}</p>
          <p>{user.lastName}</p>
          <p></p>
          <button onClick={() => setUser(undefined)}>Log out</button>
        </div>
      )}
      {!user && <LoginForm />}
    </div>
  );
};

export default Class30;
