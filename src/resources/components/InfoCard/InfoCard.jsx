import React from "react";

import "./info-card.scss";

const InfoCard = ({
  item,
  index,
  isForm = false,
  handleSubmit = () => {},
  children,
}) => {
  return (
    <div key={index} className="info-card">
      {isForm && (
        <form className="info-card__info" onSubmit={handleSubmit}>
          <div className="info-card__input">
            <label>
              <strong>Name: </strong>
            </label>
            <input type="text" defaultValue={item.name}></input>
          </div>
          <div className="info-card__input">
            <label>
              <strong>Lastname: </strong>
            </label>
            <input type="text" defaultValue={item.lastname}></input>
          </div>
          <div className="info-card__input">
            <label>
              <strong>Email: </strong>
            </label>
            <input type="text" defaultValue={item.email}></input>
          </div>
          <div className="info-card__input">
            <label>
              <strong>Password: </strong>
            </label>
            <input type="text" defaultValue={""}></input>
          </div>
          <button type="submit">Save</button>
        </form>
      )}
      {!isForm && (
        <div className="info-card__info">
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
      )}
      <div className="info-card__actions">{children}</div>
    </div>
  );
};

export default InfoCard;
