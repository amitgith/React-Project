import React from "react";

const CartItems = ({ users, deleteRecipe, ind, setUpdateData }) => {
  return (
    <div className="bg-white flex flex-col gap-4 p-3 w-240 h-screen rounded">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Discover Recipes</h1>
        <p className="text-slate-500">
          Top curated recipes for your next meal.
        </p>
      </div>
      <div className="rounded border border-black ">
        <div className="w-100 flex flex-col gap-4">
          <div className="bg-black">
            <img
              className="w-96 object-cover rounded"
              src={users.imageurl}
              alt="Image not found"
            />
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">{users.recipename}</h2>
            <span className="text-yellow-600">
              <span>⭐</span>
              4.5
            </span>
          </div>
          <div>
            <p className="text-slate-500">{users.description}</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p>{users.chefname}</p>
              <p className="text-slate-400 text-sm">{users.mins}</p>
            </div>
            <div>
              <button className="bg-amber-600 p-2 text-white cursor-pointer rounded">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-green-600 p-2 text-white cursor-pointer rounded"
              onClick={() => {
                setUpdateData(users);
              }}
            >
              Update
            </button>
            <button
              className="bg-red-600 p-2 text-white cursor-pointer rounded"
              onClick={() => {
                deleteRecipe(users.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
