// napravite 4 paragrafa sa nekim textom
// napravite state u kome cete da snimite koji je paragraf aktivan
// ako je paragraf aktivan onda je pozadina druge boje
// state bi najbolje bilo da bude neki text ili broj.
// Tako da znate koji broj ili text prestavlja koji paragraf
// kad kliknete na neki paragraf on postane aktivan
// dupli klik deseletkuje aktivni paragraf

import { useState } from "react";
const Active = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <p
        style={{ background: active === 1 ? "red" : "white" }}
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else setActive(1);
        }}
      >
        red
      </p>
      <p
        style={{ background: active === 2 ? "red" : "white" }}
        onClick={() => {
          if (active === 2) {
            setActive(0);
          } else setActive(2);
        }}
      >
        green
      </p>
      <p
        style={{ background: active === 3 ? "red" : "white" }}
        onClick={() => {
          if (active === 3) {
            setActive(0);
          } else setActive(3);
        }}
      >
        blue
      </p>
      <p
        style={{ background: active === 4 ? "red" : "white" }}
        onClick={() => {
          if (active === 4) {
            setActive(0);
          } else setActive(4);
        }}
      >
        violet
      </p>
    </div>
  );
};
export default Active;
