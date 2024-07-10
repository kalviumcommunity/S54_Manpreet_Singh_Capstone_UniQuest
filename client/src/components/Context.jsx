import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
    // here
    const [login, setLogin] = useState();

  return (
    <AppContext.Provider
      value={{
        login,
        setLogin
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;