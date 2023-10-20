import { useState } from "react";

const NestedObject = () => {
  const [complex, setComplex] = useState({
    name: "",
    address: { street: "", number: "" },
  });

  console.log(complex);
  return (
    <div>
      <input
        type="text"
        value={complex.name}
        onChange={(e) => setComplex({ ...complex, name: e.target.value })}
      />
      <input
        type="text"
        name=""
        value={complex.address.street}
        onChange={(e) =>
          setComplex({
            ...complex,
            address: { ...complex.address, street: e.target.value },
          })
        }
      />
      <input
        type="text"
        name=""
        value={complex.address.number}
        onChange={(e) =>
          setComplex({
            ...complex,
            address: { ...complex.address, number: e.target.value },
          })
        }
      />
    </div>
  );
};

export default NestedObject;
