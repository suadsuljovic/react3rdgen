import { useContext, useState } from "react";
import { UserContext } from "./ContextProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const loginUser = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/1");
      const responseData = await response.json();

      setUser(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogin = () => {
    if (isEmailValid(email)) {
      loginUser();
    } else {
      alert("Email is not correct");
    }
  };

  return (
    <div>
      <button>Login</button>
      <button>SignUp</button>

      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
export default LoginForm;
