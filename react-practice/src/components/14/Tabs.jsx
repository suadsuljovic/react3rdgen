import { useState } from "react";

const Tabs = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p onClick={() => setActive(1)}>Tab 1</p>
        <p onClick={() => setActive(2)}>Tab 2</p>
        <p onClick={() => setActive(3)}>Tab 3</p>
      </div>
      {active === 1 && <p>This is first tab content</p>}
      {active === 2 && <p>This is second tab content</p>}
      {active === 3 && <p>This is third tab content</p>}
    </div>
  );
};

export default Tabs;
