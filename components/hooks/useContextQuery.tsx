import React, { useState, createContext } from 'https://esm.sh/react';

export const QueryContext = createContext<any>(null);

export const ContextQuery = ({children}) => {
  const [queryNumber, setQueryNumber] = useState(0);

  return (
    <QueryContext.Provider
      value={{ queryNumber, setQueryNumber }}
  >{children}</QueryContext.Provider>
  );
};

export default ContextQuery;