import React from "react";
import { useDispatch } from "react-redux";
import { updateOrderAsync } from "../infoOrderSlice";
import "./order-card.scss";

const OrderCard = ({
  item,
  index,
  isForm = false,
  iduser = 0,
  token = "",
  setIsForm = () => {},
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (item) => (e) => {
    e.preventDefault();
    const state = e.target.elements[0].value;
    const { idorder } = item;
    dispatch(updateOrderAsync({ iduser, idorder, token, state }));
    setIsForm(false);
  };

  return (
    <div key={index} className="order-card">
      <span className="order-card__info">
        <strong>Order Id: </strong>
        {!isForm && (
          <>
            {` ${item.idorder}, Status: ${item.state}`}
            <button onClick={() => setIsForm(true)}>Edit</button>
          </>
        )}
        {isForm && (
          <form className="order-card__form" onSubmit={handleSubmit(item)}>
            <label>{` ${item.idorder}, Status:`}</label>
            <select className="order-card__state-selector">
              <option value={"pending"}>Pending</option>
              <option value={"approved"}>Approved</option>
              <option value={"sent"}>Sent</option>
              <option value={"delivered"}>Delivered</option>
              <option value={"canceled"}>Canceled</option>
            </select>
            <button type="submit">Save</button>
          </form>
        )}
      </span>
      <span className="order-card__info">
        <strong>Buyer: </strong>
        {`${item.user.name} ${item.user.lastname}, email: ${item.user.email}`}
      </span>
      <span className="order-card__info">
        <strong>Delivery adress: </strong>
        {item.adress}
      </span>
      <span className="order-card__info">
        <strong>Vehicle: </strong>
        {`${item.car.model} - ${item.car.color}, Price: $${item.car.price}`}
      </span>
    </div>
  );
};

export default OrderCard;
