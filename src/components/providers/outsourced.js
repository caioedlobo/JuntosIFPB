import React, { useState } from "react";

export const OutsourcedContext = React.createContext({});

export const OutsourcedProvider = (props) => {
  const [isOutsourced, setIsOutsourced] = useState(false);

  return (
    <OutsourcedContext.Provider value={{ isOutsourced, setIsOutsourced }}>
      {props.children}
    </OutsourcedContext.Provider>
  );
};

export const useOutsourced = () => React.useContext(OutsourcedContext);