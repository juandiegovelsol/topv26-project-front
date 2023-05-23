import React from "react";

import "./order-card.scss";

const OrderCard = ({ item, index }) => {
  return (
    <div key={index} className="order-card">
      <span>
        <strong>Order Id: </strong>
        {`${item.idorder}, Status: ${item.state}`}
      </span>
      <span>
        <strong>Buyer: </strong>
        {`${item.user.name} ${item.user.lastname}, email: ${item.user.email}`}
      </span>
      <span>
        <strong>Delivery adress: </strong>
        {item.adress}
      </span>
      <span>
        <strong>Vehicle: </strong>
        {`${item.car.model} - ${item.car.color}, Price: $${item.car.price}`}
      </span>
    </div>
  );
};

export default OrderCard;
