import back from "../img/<.png";
import "../css/AddRecipes.css";
import { useState } from "react";
import Card from "./Card";

const AddRecipes = () => {
  const [recipes, setRecipes] = useState({
    title: "",
    image: "",
    foodtype: "",
    req: "",
    step: "",
  });
  const handleInputTitle = (e) => {
    setRecipes({ ...recipes, title: e.target.value });
  };
  const handleInputImg = (e) => {
    setRecipes({ ...recipes, image: e.target.value });
  };
  const handleInputFoodtype = (e) => {
    setRecipes({ ...recipes, foodtype: e.target.value });
  };
  const handleInputReq = (e) => {
    setRecipes({ ...recipes, req: e.target.value });
  };
  const handleInputStep = (e) => {
    setRecipes({ ...recipes, step: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipes);
  };
  <Card
    title={recipes.title}
    image={recipes.image}
    foodtype={recipes.foodtype}
    req={recipes.req}
  />;
  return (
    <>
      <div className="NewRecipes">New recipe</div>
      <div className="FormWarp">
        <div className="AddRecipesForm">
          <div className="BackToHome">
            <a href="/">
              <img src={back} alt="<" /> <span>Back to home</span>
            </a>
          </div>
          <div>Add your new recipe</div>
          <form className="RecipesForm">
            <div className="InputFileld">
              <label for="NameOfRecipe">Name of your recipe</label>
              <br />
              <input
                onChange={handleInputTitle}
                type="text"
                id="NameOfRecipe"
                value={recipes.title}
              />
            </div>
            <div className="InputFileld">
              <label for="RecipeImg">Recipe image</label>
              <br />
              <input type="text" />
              <input
                type="file"
                id="RecipeImg"
                hidden="hidden"
                value={recipes.image}
                onChange={handleInputImg}
              />
            </div>
            <div className="UploadWarp">
              <label for="RecipeImg">UPLOAD</label>
            </div>
            <div className="FoodType">
              <label>Food type</label>
              <div>
                <input
                  type="radio"
                  name="FoodType"
                  value="Vegetarian"
                  onChange={handleInputFoodtype}
                />
                <span>Vegetarian</span>
              </div>
              <div>
                <input
                  onChange={handleInputFoodtype}
                  type="radio"
                  name="FoodType"
                  value="Non-Vegetarian"
                />
                <span>Non-Vegetarian</span>
              </div>
            </div>
            <div>
              <label for="Ingredients">Ingredients required</label>
              <br />
              <textarea
                id="Ingredients"
                value={recipes.req}
                onChange={handleInputReq}
              />
            </div>
            <div>
              <label for="Prepare">Steps to prepare</label>
              <br />
              <textarea
                id="Prepare"
                value={recipes.step}
                onChange={handleInputStep}
              />
            </div>
            <div className="AddBtn">
              <button onClick={handleSubmit}>ADD RECIPE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipes;
