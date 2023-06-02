import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selecOrder, setCheckout } from "../order/orderSlice";
import { selecAccount } from "../account/accountSlice";
import { CustomHeader } from "../../components/customHeader";
import { NavBar } from "../../components/navBar";

import "./order.scss";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderData } = useSelector(selecOrder);
  const { model, modelplaid } = orderData || {};
  const { images } = orderData || [];
  const [imageSelector, setImageSelector] = useState({});
  const [modelSelector, setModelSelector] = useState({});

  const { user } = useSelector(selecAccount) || {};

  useEffect(() => {
    if (images === undefined) {
      navigate("/");
    } else {
      setImageSelector(images[0]);
    }
  }, [images]);

  useEffect(() => {
    if (orderData === undefined || orderData === {}) {
      navigate("/");
    } else {
      setModelSelector(model);
    }
  }, [orderData]);

  useEffect(() => {
    console.log(orderData === {});
    if (Object.keys(orderData).length === 0 || orderData === undefined) {
      navigate("/");
    }
  }, []);

  const handleCheckout = () => {
    if (Object.keys(user).length) {
      dispatch(setCheckout({ modelSelector, imageSelector }));
      navigate("/Checkout");
    } else {
      navigate("/Account");
    }
  };

  return (
    <section className="order">
      <CustomHeader heightt={true}>
        <NavBar />
      </CustomHeader>
      {Object.keys(orderData).length && (
        <div className="order__container">
          <aside className="order__images">
            <img src={imageSelector.img} alt="car" />
            <span className="price-resume">
              <p>
                <strong>
                  ${modelSelector.price + imageSelector.aditional_price} Vehicle
                  Price
                </strong>
              </p>
              <p>{` | `}</p>
              <p>
                ${modelSelector.price + imageSelector.aditional_price - 6000}{" "}
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
                }}
              >
                <p>{orderData.model.title}</p>
                <p>${orderData.model.price}</p>
              </button>
              <p>Tri-Motor All-Wheel Drive</p>
              <button
                onClick={() => {
                  setModelSelector(modelplaid);
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
                    setImageSelector(images[0]);
                  }}
                >
                  <span className="white"></span>
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setImageSelector(images[1]);
                  }}
                >
                  <span className="black"></span>
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setImageSelector(images[2]);
                  }}
                >
                  <span className="grey"></span>
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setImageSelector(images[3]);
                  }}
                >
                  <span className="blue"></span>
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setImageSelector(images[4]);
                  }}
                >
                  <span className="red"></span>
                </button>
              </div>
              <br />
              <p>
                <strong>{imageSelector.title}</strong> {imageSelector.title2}
              </p>
            </span>
            <span className="order">
              <h4>Order your {modelSelector.title}</h4>
              <p>Est. delivery: June 2023</p>
              <button onClick={handleCheckout}>Continue To Checkout</button>
            </span>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Order;
