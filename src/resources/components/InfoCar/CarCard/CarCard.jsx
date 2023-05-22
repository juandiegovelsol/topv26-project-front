import React from "react";

import "./car-card.scss";

const CarCard = ({ item, index }) => {
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
        {item.quantity}
      </span>
    </div>
  );
};

export default CarCard;
