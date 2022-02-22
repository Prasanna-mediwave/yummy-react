import { Link } from "react-router-dom";
import "../css/Navbar.css";
import img from "../img/yummy.svg";
const NavBar = () => {
  return (
    <div className="navbarWarp">
      <div className="navbarContainer">
        <div>
          <Link to="/">
            <img src={img} alt="Yummy logo" />
          </Link>
        </div>
        <div>
          <div className="subNavbar">
            <Link to="/">Home</Link>
            <a href="#ghj">Recipe</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
