import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selecOrder } from "../order/orderSlice";
import { CustomHeader } from "../../components/customHeader";
import { NavBar } from "../../components/navBar";

import "./order.scss";

const Order = () => {
  const { orderData } = useSelector(selecOrder);
  const { model, modelplaid } = orderData;
  const [imageSelector, setImageSelector] = useState(0);
  const [modelSelector, setModelSelector] = useState(model);

  return (
    <section className="order">
      <CustomHeader heightt={true}>
        <NavBar />
      </CustomHeader>
      <div className="order__container">
        <aside className="order__images">
          <img src={orderData.images[imageSelector].img} alt="car" />
          <span className="price-resume">
            <p>
              <strong>
                $
                {modelSelector.price +
                  orderData.images[imageSelector].aditional_price}{" "}
                Vehicle Price
              </strong>
            </p>
            <p>{` | `}</p>
            <p>
              $
              {modelSelector.price +
                orderData.images[imageSelector].aditional_price -
                6000}{" "}
              After Potential Savings
            </p>
          </span>
        </aside>
        <aside className="order__menu">
          <h3>{model.title}</h3>
          <p>Est. Delivery: June 2023</p>
          <span className="info">
            <div>
              <h4>
                <span>{modelSelector.range}</span> mi
              </h4>
              <p>Range {`(EPA est.)`}</p>
            </div>
            <div>
              <h4>
                <span>{modelSelector.speed}</span> mph
              </h4>
              <p>Top Speed</p>
            </div>
            <div>
              <h4>
                <span>{modelSelector.time}</span> Sec
              </h4>
              <p>0-60 mph</p>
            </div>
          </span>
          <span className="model">
            <p>Dual Motor All-Wheel Drive</p>
            <button
              onClick={() => {
                setModelSelector(model);
                console.log("Model S", modelSelector);
              }}
            >
              <p>{orderData.model.title}</p>
              <p>${orderData.model.price}</p>
            </button>
            <p>Tri-Motor All-Wheel Drive</p>
            <button
              onClick={() => {
                setModelSelector(modelplaid);
                console.log("Model S plaid", modelSelector);
              }}
            >
              <p>{orderData.modelplaid.title}</p>
              <p>${orderData.modelplaid.price}</p>
            </button>
            <p className="footer">
              All prices are shown without potential incentives or gas savings
              of $6,000. Learn More
            </p>
          </span>
          <span className="paint">
            <h4>Paint</h4>
            <br />
            <div>
              <button
                className="button"
                onClick={() => {
                  setImageSelector(0);
                }}
              >
                <span className="white"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setImageSelector(1);
                }}
              >
                <span className="black"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setImageSelector(2);
                }}
              >
                <span className="grey"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setImageSelector(3);
                }}
              >
                <span className="blue"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setImageSelector(4);
                }}
              >
                <span className="red"></span>
              </button>
            </div>
            <br />
            <p>
              <strong>{orderData.images[imageSelector].title}</strong>{" "}
              {orderData.images[imageSelector].title2}
            </p>
          </span>
          <span className="order">
            <h4>Order your {model.title}</h4>
            <p>Est. delivery: June 2023</p>
            <button>Continue To Payment</button>
          </span>
        </aside>
      </div>
    </section>
  );
};

export default Order;
