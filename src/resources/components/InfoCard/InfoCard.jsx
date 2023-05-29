import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageAsync, selectUserInfo } from "../UserInfo/userInfoSlice";
import "./info-card.scss";

const InfoCard = ({
  item,
  index,
  isForm = false,
  handleSubmit = () => {},
  children,
}) => {
  const dispatch = useDispatch();
  const { imageURL } = useSelector(selectUserInfo);

  const [imgPrev, setImgPrev] = useState(item.image);

  const handleChange = (e) => {
    console.log("Change");
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function load() {
      const { result } = reader;
      setImgPrev(result);
    };
  };

  return (
    <div key={index} className="info-card">
      {isForm && (
        <form className="info-card__form" onSubmit={handleSubmit}>
          <div className="info-card__image">
            <img src={imgPrev} alt="user" />
          </div>
          <div className="info-card__container">
            <div className="info-card__input">
              <label>
                <strong>Name: </strong>
              </label>
              <input
                className="info-card__input-text"
                type="text"
                defaultValue={item.name}
              ></input>
            </div>
            <div className="info-card__input">
              <label>
                <strong>Lastname: </strong>
              </label>
              <input
                className="info-card__input-text"
                type="text"
                defaultValue={item.lastname}
              ></input>
            </div>
            <div className="info-card__input">
              <label>
                <strong>Email: </strong>
              </label>
              <input
                className="info-card__input-text"
                type="text"
                defaultValue={item.email}
              ></input>
            </div>
            <div className="info-card__input">
              <label>
                <strong>Password: </strong>
              </label>
              <input
                className="info-card__input-text"
                type="text"
                defaultValue={""}
              ></input>
            </div>
            <div className="info-card__input">
              <label>
                <strong>Image: </strong>
              </label>
              <input
                className="info-card__input-text"
                type="file"
                size="lg"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="info-card__button-container">
            <button className="info-card__save-button" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
      {!isForm && (
        <>
          <div className="info-card__image">
            <img src={item.image} alt="user" />
          </div>
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
          <div className="info-card__actions">{children}</div>
        </>
      )}
    </div>
  );
};

export default InfoCard;
