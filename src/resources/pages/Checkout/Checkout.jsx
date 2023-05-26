import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selecOrder } from "../order/orderSlice";
import { selecAccount } from "../account/accountSlice";
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
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    if (Object.keys(user).length && Object.keys(checkout).length) {
      setOrderData({
        name: `${title}`,
        description: `${title} color ${color}`,
        invoice: "909103",
        currency: "cop",
        amount: `${price / 10}`,
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "en",
        external: "false",
        name_billing: `${user.name} ${user.lastname}`,
        address_billing: `${user.name}`,
        type_doc_billing: "cc",
        mobilephone_billing: "3050000000",
        number_doc_billing: "100000000",
      });
    } else {
      navigate("/");
    }
  }, [user, checkout]);

  const handlePayment = () => {
    handler.open(orderData);
    //dispatch create order with pending
  };

  // eslint-disable-next-line
  const handler = ePayco.checkout.configure({
    key: "6a426cb9bd379e191bdf38dcdb805d87",
    test: true,
  });

  /* const data = {
    name: `${modelSelector.model}`,
    description: `${modelSelector.model} color ${imageSelector.color}`,
    invoice: "909101",
    currency: "cop",
    amount: "10000",
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",
    external: "false",
    name_billing: `${user.name} ${user.lastname}`,
    address_billing: `${user.name}`,
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",
  }; */

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
