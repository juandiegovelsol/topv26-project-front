import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selecOrder } from "../order/orderSlice";
import { selecAccount } from "../account/accountSlice";
import { PayButton } from "../../components/PayButton";

import "./checkout.scss";

const Checkout = () => {
  const { checkout } = useSelector(selecOrder);
  const { modelSelector, imageSelector } = checkout || {};
  const { user } = useSelector(selecAccount);

  const handlePayment = () => {
    handler.open(data);
  };

  const handler = ePayco.checkout.configure({
    key: "6a426cb9bd379e191bdf38dcdb805d87",
    test: true,
  });

  const data = {
    name: `${modelSelector.model}`,
    description: "Vehicle",
    invoice: "909101",
    currency: "cop",
    amount: `${modelSelector.price}`,
    tax_base: `${modelSelector.price}`,
    tax: `${modelSelector.price * 0.19}`,
    country: "co",
    lang: "en",

    //Onpage="false" - Standard="true"
    external: "false",

    //Atributos cliente
    name_billing: `${user.name} ${user.lastname}`,
    address_billing: `${user.name}`,
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",
  };

  return (
    <section className="checkout">
      <div className="checkout__container">
        <aside className="checkout__images">
          <img src={imageSelector.img} alt="car" />
          <span className="checkout__price-resume">
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
        <aside className="checkout__resume">
          <h2>Checkout</h2>
          <h3>{modelSelector.title}</h3>
          <p>Est. Delivery: June 2023</p>
          <span className="checkout__info">
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
          <span className="checkout__paint">
            <h4>Paint</h4>
            <p>{imageSelector.title}</p>
          </span>
          <span className="checkout__order">
            <h4>Order your {modelSelector.title}</h4>
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
