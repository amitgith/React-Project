import React from "react";
import Navbar from "./components/Navbar";
import CreateRecipe from "./components/CreateRecipe";
import CartItems from "./components/CartItems";

const App = () => {
  return (
    <div className="h-screen p-2 flex flex-col gap-5">
      <Navbar />
      <div className="flex justify-center gap-5">
        <CreateRecipe />
        {/* <CartItems /> */}
      </div>
    </div>
  );
};

export default App;
