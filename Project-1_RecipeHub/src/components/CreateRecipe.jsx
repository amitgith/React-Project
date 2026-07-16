import React from "react";
import { useForm } from "react-hook-form";
const CreateRecipe = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log("errors is", errors);

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" bg-white p-5 rounded flex flex-col gap-5 ">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl">Add New Recipe</h2>
        <p className="text-slate-400">
          Share your delicious receipe with everyone.
        </p>
      </div>
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <label>Recipe Name</label>
          <input
            {...register("recipename", {
              required: "Recipe Name is required",
            })}
            className="border border-slate-400 rounded p-2"
            type="text"
            placeholder="Recipe Name"
          />
          {errors.recipename && (
            <p className="text-red-600">{errors.recipename.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label>Chef Name</label>
          <input
            {...register("chefname", {
              required: "Chef Name is required",
            })}
            className="border border-slate-400 rounded p-2"
            type="text"
            placeholder="Chef Name"
          />
          {errors.chefname && (
            <p className="text-red-600">{errors.chefname.message}</p>
          )}
        </div>
        <div className="flex items-center gap-7">
          <div className="flex flex-col gap-3">
            <label>Price</label>
            <input
              {...register("price", {
                required: "Price is required",
              })}
              className="border border-slate-400 rounded p-2"
              type="number"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-600">{errors.price.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label>Prep Time</label>
            <input
              {...register("mins", {
                required: "Minutes is required",
              })}
              className="border border-slate-400 rounded p-2"
              type="text"
              placeholder="30 mins"
            />
            {errors.mins && (
              <p className="text-red-600">{errors.mins.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label>Image URL</label>
          <input
            {...register("imageurl", {
              required: "Image URL is required",
            })}
            className="border border-slate-400 rounded p-2"
            type="url"
            placeholder="Paste image URL"
          />
          {errors.imageurl && (
            <p className="text-red-600">{errors.imageurl.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label>Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            cols={53}
            rows={3}
            className="border border-slate-400 p-2 rounded"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <button className="bg-amber-600 p-2 rounded text-white cursor-pointer font-bold">
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
  text - white;
};

export default CreateRecipe;
