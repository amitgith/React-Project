import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black w-full flex justify-around items-center p-2 text-white rounded">
      <div className="font-bold text-2xl">RecipeHub</div>
      <div className="border border-white">
        <input
          className="w-80 rounded p-2"
          type="text"
          placeholder="Search recipes.."
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">Cart</span>
        <span className="cursor-pointer">Profile</span>
      </div>
    </div>
  );
};

export default Navbar;
