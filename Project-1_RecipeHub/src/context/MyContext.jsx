import { createContext, useState } from "react";

export const MyReceipe = createContext();

export const MyContextProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [updateData, setUpdateData] = useState(null);
  return (
    <MyReceipe.Provider value={{ users, setUsers, updateData, setUpdateData }}>
      {children}
    </MyReceipe.Provider>
  );
};
