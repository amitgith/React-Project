import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-around items-center p-3 text-white rounded border border-black sticky top-0">
      <div className="font-bold text-2xl text-amber-600">RecipeHub</div>
      <div className="border border-white">
        <input
          className="w-100 rounded-2xl p-2 border border-slate-500 text-slate-500 outline-0"
          type="text"
          placeholder="Search recipes.."
        />
      </div>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer text-black">Cart</span>
        <span className="cursor-pointer text-black">Profile</span>
      </div>
    </div>
  );
};

export default Navbar;
