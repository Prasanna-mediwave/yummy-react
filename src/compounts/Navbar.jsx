import React from "react";
import "../css/Navbar.css";
import img from "../img/yummy.svg";
const NavBar = () => {
  return (
    <div className="navbarWarp">
      <div className="navbarContainer">
        <div>
          <img src={img} alt="Yummy logo" />
        </div>
        <div>
          <div className="subNavbar">
            <a href="/">Home</a>
            <a href="/">Recipes</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
