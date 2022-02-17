import React from "react";
import "../css/Card.css";

const Card = ({ title, image, foodtype, req }) => {
  const cardInfo = [
    {
      image: image,
      altImg: "grill chicken",
      title: title,
      content: req,
      foodtype: foodtype,
      altType: "non-veg",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="cardWarp" key={index}>
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
