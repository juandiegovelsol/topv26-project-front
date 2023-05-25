import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOrderAsync,
  selectInfoOrder,
  openHandlerUpdate,
  closeHandlerUpdate,
  cancelOrderAsync,
  clearCanceledOrder,
} from "../infoOrderSlice";
import "./order-card.scss";

const OrderCard = ({
  item,
  index,
  iduser = 0,
  token = "",
  role = "costumer",
}) => {
  const dispatch = useDispatch();
  const { handlerUpdate } = useSelector(selectInfoOrder);

  const handleSubmit = (item, index) => (e) => {
    e.preventDefault();
    const state = e.target.elements[0].value;
    const { idorder } = item;
    dispatch(updateOrderAsync({ iduser, idorder, token, state }));
    dispatch(closeHandlerUpdate(index));
  };

  if (role === "admin") {
    return (
      <div key={index} className="order-card">
        <span className="order-card__info">
          <strong>Order Id: </strong>
          {!handlerUpdate[index] && (
            <>
              {` ${item.idorder}, Status: ${item.state}`}
              <button
                className="order-card__action-button"
                onClick={() => {
                  dispatch(openHandlerUpdate(index));
                }}
              >
                Edit
              </button>
            </>
          )}
          {handlerUpdate[index] && (
            <form
              className="order-card__form"
              onSubmit={handleSubmit(item, index)}
            >
              <label>{` ${item.idorder}, Status:`}</label>
              <select className="order-card__state-selector">
                <option value={"pending"}>Pending</option>
                <option value={"approved"}>Approved</option>
                <option value={"sent"}>Sent</option>
                <option value={"delivered"}>Delivered</option>
                <option value={"canceled"}>Canceled</option>
              </select>
              <button className="order-card__action-button" type="submit">
                Save
              </button>
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
  } else {
    return (
      <div key={index} className="order-card">
        <span className="order-card__info">
          <strong>Order Id: </strong>
          {` ${item.idorder}, Status: ${item.state}`}
          {item.state === "pending" && (
            <button
              className="order-card__action-button"
              onClick={() => {
                const { idorder } = item;
                dispatch(cancelOrderAsync({ idorder, token }));
              }}
            >
              Cancel
            </button>
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
  }
};

export default OrderCard;
