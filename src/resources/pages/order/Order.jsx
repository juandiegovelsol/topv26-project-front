import React, { useState } from "react";
import { CustomHeader } from "../../components/customHeader";
import { NavBar } from "../../components/navBar";

import { modelS } from "../../data/Order";

import "./order.scss";

const Order = () => {
  const [selector, setSelector] = useState(0);

  return (
    <section className="order">
      <CustomHeader heightt={true}>
        <NavBar />
      </CustomHeader>
      <div className="order__container">
        <aside className="order__images">
          <img src={modelS[selector].img} alt="car" />
        </aside>
        <aside className="order__menu">
          <h3>Model S</h3>
          <p>Est. Delivery: April 2023</p>
          <span className="info">
            <div>
              <h4>
                <span>405</span> mi
              </h4>
              <p>Range {`(EPA est.)`}</p>
            </div>
            <div>
              <h4>
                <span>149</span> mph
              </h4>
              <p>Top Speed</p>
            </div>
            <div>
              <h4>
                <span>3.1</span> Sec
              </h4>
              <p>0-60 mph</p>
            </div>
          </span>
          <span className="model">
            <p>Dual Motor All-Wheel Drive</p>
            <button>
              <p>Model S</p>
              <p>$80.000</p>
            </button>
            <p>Tri-Motor All-Wheel Drive</p>
            <button>
              <p>Model S Plaid</p>
              <p>$90.000</p>
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
                  setSelector(0);
                }}
              >
                <span className="white"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setSelector(1);
                }}
              >
                <span className="black"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setSelector(2);
                }}
              >
                <span className="grey"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setSelector(3);
                }}
              >
                <span className="blue"></span>
              </button>
              <button
                className="button"
                onClick={() => {
                  setSelector(4);
                }}
              >
                <span className="red"></span>
              </button>
            </div>
            <br />
            <p>Pearl white multi coat included</p>
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
