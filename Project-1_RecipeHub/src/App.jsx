import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CreateRecipe from "./components/CreateRecipe";
import CartItems from "./components/CartItems";

const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className=" h-screen flex flex-col gap-5 bg-slate-300">
      <Navbar />
      <div className="flex justify-center gap-5">
        <CreateRecipe setUsers={setUsers} />
        <div className="grid grid-cols-2 gap-2">
          {users.map((elem) => {
            return <CartItems key={elem.id} users={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
