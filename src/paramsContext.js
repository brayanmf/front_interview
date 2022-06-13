import React, { createContext, useContext, useState } from "react";
import { mockData } from "./mock/data";
const paramsContext = createContext();
export const ParamsProvider = ({ children, value = {} }) => {
  const [user, setUser] = useState({});
  const [effect, setEffect] = useState(false);
  const [dataService, setDataService] = useState(mockData);
  const [dataToEdit, setDataToEdit] = useState(null);

  const objectParams = {
    user,
    setUser,
    effect,
    setEffect,
    dataService,
    setDataService,
    dataToEdit,
    setDataToEdit,
  };
  return (
    <paramsContext.Provider value={objectParams}>
      {children}
    </paramsContext.Provider>
  );
};

export const useStateParams = () => {
  const context = useContext(paramsContext);

  if (context === undefined) {
    throw new Error("useStateParams must be used within a ParamsProvider");
  }
  return context;
};
