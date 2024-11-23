"use client";

import React, { createContext } from "react";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  const [selectedSubCat, setSelectedSubCat] = React.useState(null);
  const [selectedDua, setSelectedDua] = React.useState(null);

  React.useEffect(() => {}, []);

  const values = {
    selectedCategory,
    setSelectedCategory,
    selectedSubCat,
    setSelectedSubCat,
    selectedDua,
    setSelectedDua,
  };
  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
