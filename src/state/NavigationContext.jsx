import React, { createContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(true);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
