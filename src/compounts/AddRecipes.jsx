import back from "../img/<.png";
import "../css/AddRecipes.css";
import { Link } from "react-router-dom";
const AddRecipes = () => {
  return (
    <>
      <div className="NewRecipes">New recipe</div>
      <div className="FormWarp">
        <div className="AddRecipesForm">
          <div className="BackToHome">
            <Link to="/">
              <img src={back} alt="<" /> <span>Back to home</span>
            </Link>
          </div>
          <div>Add your new recipe</div>
          <form className="RecipesForm">
            <div className="InputFileld">
              <label for="NameOfRecipe">Name of your recipe</label>
              <br />
              <input type="text" id="NameOfRecipe" />
            </div>
            <div className="InputFileld">
              <label for="RecipeImg">Recipe image</label>
              <br />
              <input type="text" />
              <input type="file" id="RecipeImg" hidden="hidden" />
            </div>
            <div className="UploadWarp">
              <label for="RecipeImg">UPLOAD</label>
            </div>
            <div className="FoodType">
              <label>Food type</label>
              <div>
                <input type="radio" name="FoodType" />
                <span>Vegetarian</span>
              </div>
              <div>
                <input type="radio" name="FoodType" />
                <span>Non-Vegetarian</span>
              </div>
            </div>
            <div>
              <label for="Ingredients">Ingredients required</label>
              <br />
              <textarea id="Ingredients" />
            </div>
            <div>
              <label for="Prepare">Steps to prepare</label>
              <br />
              <textarea id="Prepare" />
            </div>
            <div className="AddBtn">
              <button>ADD RECIPE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipes;
