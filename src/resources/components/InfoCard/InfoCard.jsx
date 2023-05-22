import React from "react";

import "./info-card.scss";

const InfoCard = ({ item, index }) => {
  return (
    <div key={index} className="info-card">
      <span>
        <strong>Name: </strong>
        {item.name}
      </span>
      <span>
        <strong>Lastname: </strong>
        {item.lastname}
      </span>
      <span>
        <strong>Email: </strong>
        {item.email}
      </span>
      <span>
        <strong>Role: </strong>
        {item.role}
      </span>
    </div>
  );
};

export default InfoCard;
