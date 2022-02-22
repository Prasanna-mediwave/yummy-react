import React from "react";
import "../css/Card.css";
import Img1 from "../img/new.jpg";
import Nv from "../img/nv.png";

const Card = () => {
  const cardInfo = [
    {
      image: Img1,
      altImg: "grill chicken",
      title: "grill chicken",
      content: "hfgdkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
      foodtype: Nv,
      altType: "non-veg",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="cardWarp" key={index} id="ghj">
        <div>
          <div className="cardImg">
            <img src={card.image} alt={card.altImg} />
          </div>
          <div className="cardHeaderWarp">
            <div className="cardHeader">
              <div>{card.title}</div>
              <div>
                <img src={card.foodtype} alt={card.altType} />
              </div>
            </div>
            <div>
              <div>{card.content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{cardInfo.map(renderCard)}</div>;
};

export default Card;
