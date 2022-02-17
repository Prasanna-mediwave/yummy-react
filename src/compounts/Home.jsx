import search from "../img/search.svg";
import "../css/Home.css";
import { Link } from "react-router-dom";
import Card from "../compounts/Card";
const Home = () => {
  return (
    <>
      <div className="headerImg">
        <div>
          <h1>Delicious recipes just click away</h1>
          <form>
            <input type="text" placeholder="seach" />
            <img src={search} alt="search icon" />
          </form>
        </div>
      </div>
      <div className="Recipes-warp">
        <div>Our recipes</div>
        <div>POPULAR RECIPES</div>
        <div>
          <Link to="/AddRecipes">ADD RECIPES</Link>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
