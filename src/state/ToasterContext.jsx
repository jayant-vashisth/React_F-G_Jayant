import React, { createContext, useState } from "react";

export const ToasterContext = createContext();

export const ToasterProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const hideToast = () => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      setIsErrorVisible(false);
    }, 4000);
  };

  return (
    <ToasterContext.Provider
      value={{
        isErrorVisible,
        setIsErrorVisible,
        isVisible,
        setIsVisible,
        hideToast,
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
};
