import React from "react";

import "./car-card.scss";

const CarCard = ({
  item,
  index,
  handleAdd = () => {},
  handleSubstract = () => {},
}) => {
  return (
    <div key={index} className="car-card">
      <span>
        <strong>Model: </strong>
        {item.model}
      </span>
      <span>
        <strong>Color: </strong>
        {item.color}
      </span>
      <span>
        <strong>Price: </strong>
        {`$${item.price}`}
      </span>
      <span>
        <strong>Quantity: </strong>
        <button className="car-card__quantity-button" onClick={handleSubstract}>
          -
        </button>
        {item.quantity}
        <button className="car-card__quantity-button" onClick={handleAdd}>
          +
        </button>
      </span>
    </div>
  );
};

export default CarCard;
