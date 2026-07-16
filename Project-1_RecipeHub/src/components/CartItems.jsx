import React from "react";

const CartItems = () => {
  return (
    <div className="bg-white flex flex-col gap-4 p-3 w-240 h-screen rounded">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Discover Recipes</h1>
        <p className="text-slate-500">
          Top curated recipes for your next meal.
        </p>
      </div>
      <div className="w-100 rounded border border-black">
        <div className="w-100 flex flex-col gap-4">
          <div className="bg-black">
            <img
              className="w-96 object-cover rounded"
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image not found"
            />
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">Recipe Name</h2>
            <span className="text-yellow-600">
              <span>⭐</span>Rating
            </span>
          </div>
          <div>
            <p className="text-slate-500">Description</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p>chefName</p>
              <p className="text-slate-400 text-sm">PrepTime</p>
            </div>
            <div>
              <button className="bg-amber-600 p-2 text-white cursor-pointer rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
