import React from "react";

const CreateRecipe = () => {
  return (
    <div className=" bg-white p-5 rounded flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl">Add New Recipe</h2>
        <p className="text-slate-400">
          Share your delicious receipe with everyone.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label>Recipe Name</label>
          <input
            className="border border-slate-400 rounded p-2"
            type="text"
            placeholder="Recipe Name"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Chef Name</label>
          <input
            className="border border-slate-400 rounded p-2"
            type="text"
            placeholder="Chef Name"
          />
        </div>
        <div className="flex items-center gap-7">
          <div className="flex flex-col gap-3">
            <label>Price</label>
            <input
              className="border border-slate-400 rounded p-2"
              type="number"
              placeholder="Price"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Prep Time</label>
            <input
              className="border border-slate-400 rounded p-2"
              type="text"
              placeholder="30 mins"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label>Image URL</label>
          <input
            className="border border-slate-400 rounded p-2"
            type="url"
            placeholder="Paste image URL"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Description</label>
          <textarea
            cols={53}
            rows={3}
            className="border border-slate-400 p-2 rounded"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <button className="bg-amber-600 p-2 rounded text-white cursor-pointer font-bold">
            Create Recipe
          </button>
        </div>
      </div>
    </div>
  );
  text - white;
};

export default CreateRecipe;
