import React, { createContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const hideToast = () => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  return (
    <ActiveContext.Provider
      value={{ active, setActive, isVisible, setIsVisible, hideToast }}
    >
      {children}
    </ActiveContext.Provider>
  );
};
