import { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = () => {};

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
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};
export default SimpleForm;
