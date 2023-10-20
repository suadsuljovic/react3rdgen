import { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    const newError = { name: "", surname: "", email: "", password: "" };

    if (data.name.length <= 4) {
      newError.name = "Name must be longer then 4 characters!";
    }

    if (data.surname.length <= 4) {
      newError.surname = "Name must be longer then 4 characters!";
    }

    if (!isEmailValid(data.email)) {
      newError.email = "Email must be in email format";
    }

    if (
      data.password.length <= 8 ||
      data.password.toLowerCase() === data.password
    ) {
      newError.password =
        "Password must be longer then 8 chars and have at least one uppercase char";
    }

    if (
      newError.name ||
      newError.surname ||
      newError.email ||
      newError.password
    ) {
      setError(newError);
    } else {
      //submit this to a function
      console.log(data);
      setError(newError);
    }
  };

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        {error.name && <p style={{ margin: 0, color: "red" }}>{error.name}</p>}
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          name="surname"
          value={data.surname}
          onChange={(e) => {
            setData({ ...data, surname: e.target.value });
          }}
        />
        {error.surname && (
          <p style={{ margin: 0, color: "red" }}>{error.surname}</p>
        )}
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        {error.email && (
          <p style={{ margin: 0, color: "red" }}>{error.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        {error.password && (
          <p style={{ margin: 0, color: "red" }}>{error.password}</p>
        )}
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};
export default SimpleForm;
