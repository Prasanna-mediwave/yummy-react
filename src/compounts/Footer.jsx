import { Link } from "react-router-dom";
import "../css/Footer.css";
import fb from "../img/fb.png";
import insta from "../img/insta.png";
import twteer from "../img/twteer.png";

const Footer = () => {
  return (
    <div className="FooterWarp">
      <div className="FooterTop">
        <div>
          <Link to="/">Yummy</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Recipes</Link>
        </div>
        <div className="SocialMedia">
          <img src={twteer} alt="twteer" />
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
        </div>
      </div>
      <div className="FooterBottom">©2022 by yummy.</div>
    </div>
  );
};

export default Footer;
