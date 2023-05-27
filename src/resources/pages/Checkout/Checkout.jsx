import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selecOrder } from "../order/orderSlice";
import { selecAccount } from "../account/accountSlice";
import {
  createOrderAsync,
  selectInfoOrder,
  clearCreatedOrder,
} from "../../components/InfoOrder/infoOrderSlice";
import { PayButton } from "../../components/PayButton";

import "./checkout.scss";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { checkout } = useSelector(selecOrder);
  const { modelSelector, imageSelector } = checkout || {};
  const { title, range, speed, time } = modelSelector || "";
  const { price } = modelSelector || 0;
  const { img: carImg, title: color } = imageSelector || "";
  const { aditional_price } = imageSelector || 0;
  const { user } = useSelector(selecAccount);
  const { iduser } = user || 0;
  const { token } = user || "";
  const { createdOrder } = useSelector(selectInfoOrder) || {};
  const [orderData, setOrderData] = useState({});
  const [adress, setAdress] = useState(``);

  useEffect(() => {
    if (Object.keys(user).length && Object.keys(checkout).length) {
      setOrderData({
        name: `${title}`,
        description: `${title} color ${color}`,
        invoice: "0", //modificar factura automatica
        currency: "cop",
        amount: `${price / 10}`,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "en",
        external: "false",
        name_billing: `${user.name} ${user.lastname}`,
        address_billing: ``,
        type_doc_billing: "cc",
        mobilephone_billing: "3050000000",
        number_doc_billing: "100000000",
      });
    } else {
      navigate("/");
    }
  }, [user, checkout]);

  useEffect(() => {
    if (Object.keys(createdOrder).length) {
      const { idorder } = createdOrder || 0;
      setOrderData((prev) => {
        return { ...prev, invoice: `${idorder}` };
      });
    }
  }, [createdOrder]);

  useEffect(() => {
    if (+orderData.invoice) {
      console.log("Order Data", orderData);
      handler.open(orderData);
    }
  }, [orderData]);

  const handlePayment = () => {
    const state = "pending";
    const model = title;
    const user_iduser = iduser;
    dispatch(
      createOrderAsync({ model, color, user_iduser, adress, state, token })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const direction = e.target.elements[0];
    const city = e.target.elements[1];
    setAdress(`${direction}, ${city}`);
    setOrderData((prev) => {
      return { ...prev, address_billing: `${direction}, ${city}` };
    });
  };

  // eslint-disable-next-line
  const handler = ePayco.checkout.configure({
    key: "6a426cb9bd379e191bdf38dcdb805d87",
    test: true,
  });

  return (
    <section className="checkout">
      <div className="checkout__container">
        <aside className="checkout__images">
          <img src={carImg} alt="car" />
          <span className="checkout__price-resume">
            <p>
              <strong>${price + aditional_price} Vehicle Price</strong>
            </p>
            <p>{` | `}</p>
            <p>${price + aditional_price - 6000} After Potential Savings</p>
          </span>
        </aside>
        <aside className="checkout__resume">
          <h2>Checkout</h2>
          <h3>{title}</h3>
          <p>Est. Delivery: June 2023</p>
          <span className="checkout__info">
            <div>
              <h4>
                <span>{range}</span> mi
              </h4>
              <p>Range {`(EPA est.)`}</p>
            </div>
            <div>
              <h4>
                <span>{speed}</span> mph
              </h4>
              <p>Top Speed</p>
            </div>
            <div>
              <h4>
                <span>{time}</span> Sec
              </h4>
              <p>0-60 mph</p>
            </div>
          </span>
          <span className="checkout__paint">
            <h4>Paint</h4>
            <p>{color}</p>
          </span>
          <form className="checkout__adress-form" onSubmit={handleSubmit}>
            <label>Enter Delivery Adress</label>
            {/* <div className="checkout__form-container"> */}
            <input
              className="checkout__form-input"
              type="text"
              defaultValue="Cra 60#12-04"
            ></input>
            <input
              className="checkout__form-input"
              type="text"
              defaultValue="Bogota"
            ></input>
            <button className="checkout__save-button" type="submit">
              Save
            </button>
            {/* </div> */}
          </form>
          <span className="checkout__order">
            <h4>Order your {title}</h4>
            <PayButton
              text="Continue To Payment"
              handlePayment={handlePayment}
            />
          </span>
        </aside>
      </div>
    </section>
  );
};

export default Checkout;
