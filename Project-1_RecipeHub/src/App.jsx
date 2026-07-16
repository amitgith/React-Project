import React from "react";
import Navbar from "./components/Navbar";
import CreateRecipe from "./components/CreateRecipe";
import CartItems from "./components/CartItems";

const App = () => {
  return (
    <div className="h-screen p-2 w-full flex flex-col gap-5 bg-slate-300">
      <Navbar />
      <div className="flex justify-center gap-5">
        {/* <CreateRecipe /> */}
        <CartItems />
      </div>
    </div>
  );
};

export default App;
