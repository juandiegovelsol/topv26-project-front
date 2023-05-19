import React from "react";
import { TransparentButton } from "../transparentButton";

import "./moreInfo.scss";

const MoreInfo = ({
  moreInfo,
  backgroundBlack = false,
  handleOrder = () => {},
}) => {
  const handleBackground = (black) => {
    return black ? "moreInfo" : "moreInfo white";
  };
  return (
    <section className={handleBackground(backgroundBlack)}>
      <article className="moreInfo__left">
        <p>{moreInfo.text}</p>
        <h3>{moreInfo.title}</h3>
        <span>
          {moreInfo.orderButton && (
            <TransparentButton
              text={"Order Now"}
              link={"/Order"}
              isWhite={backgroundBlack}
              handleOrder={handleOrder}
            />
          )}
          {moreInfo.viewInventoryButton && (
            <TransparentButton
              text={"View Inventory"}
              link={"/notFound"}
              isWhite={false}
              isGrey={true}
            />
          )}
        </span>
      </article>
      <article className="moreInfo__rigth">
        <p>{moreInfo.description}</p>
      </article>
    </section>
  );
};

export default MoreInfo;
