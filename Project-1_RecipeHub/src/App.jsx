import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import CreateRecipe from "./components/CreateRecipe";
import CartItems from "./components/CartItems";
import { MyReceipe } from "./context/MyContext";

const App = () => {
  let { users, setUsers, updateData, setUpdateData } = useContext(MyReceipe);

  const deleteRecipe = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };
  return (
    <div className=" h-screen flex flex-col gap-5 bg-slate-300">
      <Navbar />
      <div className="flex justify-center gap-5">
        <CreateRecipe
          // setUsers={setUsers}
          // users={users}
          // updateData={updateData}
        />
        <div className="grid grid-cols-2 gap-2">
          {users.map((elem) => {
            return (
              <CartItems
                key={elem.id}
                users={elem}
                deleteRecipe={deleteRecipe}
                // setUpdateData={setUpdateData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
