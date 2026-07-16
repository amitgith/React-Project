import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreateRecipe from "./components/CreateRecipe";
import CartItems from "./components/CartItems";

const App = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  return (
    <div className=" h-screen flex flex-col gap-5 bg-slate-300">
      <Navbar />
      <div className="flex justify-center gap-5">
        <CreateRecipe setUsers={setUsers} users={users} />
        <div className="grid grid-cols-2 gap-2">
          {users.map((elem, index) => {
            return <CartItems key={elem.index} users={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
