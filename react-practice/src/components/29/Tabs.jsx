import { createContext, useState } from "react";

export const TabsContext = createContext({});

const Tabs = (props) => {
  const [active, setActive] = useState(0);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div style={{ display: "flex" }}>{props.children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
