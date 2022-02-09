import React from "react";
import "../css/Header.css";
import search from "../img/search.svg";
const Header = () => {
  return (
    <div className="headerImg">
      <div>Delicious recipes just click away</div>
      <div>
        <input type="text" placeholder="seach" />
        <span>
          <img src={search} alt="search icon" />
        </span>
      </div>
    </div>
  );
};

export default Header;
