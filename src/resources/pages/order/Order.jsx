import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selecOrder } from "../order/orderSlice";
import { CustomHeader } from "../../components/customHeader";
import { NavBar } from "../../components/navBar";

import { modelS } from "../../data/Order";

import "./order.scss";

const Order = () => {
  const { title } = useSelector(selecOrder);
  const { models, modelsplaid } = modelS;
  const [imageSelector, setImageSelector] = useState(0);
  const [modelSelector, setModelSelector] = useState(models);

  return (
    <section className="order">
      <CustomHeader heightt={true}>
        <NavBar />
      </CustomHeader>
      <div className="order__container">
        <aside className="order__images">
          <img src={modelS.images[imageSelector].img} alt="car" />
          <span className="price-resume">
            <p>
              <strong>
                $
                {modelSelector.price +
                  modelS.images[imageSelector].aditional_price}{" "}
                Vehicle Price
              </strong>
            </p>
            <p>{` | `}</p>
            <p>
              $
              {modelSelector.price +
                modelS.images[imageSelector].aditional_price -
                6000}{" "}
              After Potential Savings
            </p>
          </span>
        </aside>
        <aside className="order__menu">
          <h3>{title}</h3>
          <p>Est. Delivery: April 2023</p>
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
                setModelSelector(models);
                console.log("Model S", modelSelector);
              }}
            >
              <p>{modelS.models.title}</p>
              <p>${modelS.models.price}</p>
            </button>
            <p>Tri-Motor All-Wheel Drive</p>
            <button
              onClick={() => {
                setModelSelector(modelsplaid);
                console.log("Model S plaid", modelSelector);
              }}
            >
              <p>{modelS.modelsplaid.title}</p>
              <p>${modelS.modelsplaid.price}</p>
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
            <p>{modelS.images[imageSelector].title}</p>
          </span>
          <span className="order">
            <h4>Order your Model S</h4>
            <p>Est. delivery: April 2023</p>
            <button>Continue To Payment</button>
          </span>
        </aside>
      </div>
    </section>
  );
};

export default Order;
