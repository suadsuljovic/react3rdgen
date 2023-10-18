import { useState } from "react";

const Acordion = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <p
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else setActive(1);
        }}
      >
        Acordion item 1
      </p>
      {active === 1 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit
          facere magni laudantium doloremque animi ad incidunt eum dolor
          similique repudiandae, exercitationem provident ullam dolore
          praesentium enim beatae est labore.
        </p>
      )}
      <p
        onClick={() => {
          if (active === 2) {
            setActive(0);
          } else setActive(2);
        }}
      >
        Acoridon item 2
      </p>
      {active === 2 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit
          facere magni laudantium doloremque animi ad incidunt eum dolor
          similique repudiandae, exercitationem provident ullam dolore
          praesentium enim beatae est labore.
        </p>
      )}
    </div>
  );
};
export default Acordion;
