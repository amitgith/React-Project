import React from "react";

const CreateRecipe = () => {
  return (
    <div>
      <div>
        <h2>Add New Recipe</h2>
        <p>Share your delicious receipe with everyone.</p>
      </div>
      <div>
        <div>
          <label>Recipe Name</label>
          <input type="text" placeholder="Recipe Name" />
        </div>
        <div>
          <label>Chef Name</label>
          <input type="text" placeholder="Chef Name" />
        </div>
        <div>
          <div>
            <label>Price</label>
            <input type="number" placeholder="Price" />
          </div>
          <div>
            <label>Prep Time</label>
            <input type="text" placeholder="30 mins" />
          </div>
        </div>
        <div>
          <label>Label</label>
          <input type="url" placeholder="Paste image URL" />
        </div>
        <div>
          <label>Description</label>
          <textarea placeholder="Description"></textarea>
        </div>
        <div>
          <button>Create Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
