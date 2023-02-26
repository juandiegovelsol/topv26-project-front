import React from "react";
import { TransparentButton } from "../transparentButton";

import "./moreInfo.scss";

const MoreInfo = ({ moreInfo, backgroundBlack = false }) => {
  const handleBackground = (black) => {
    return black ? "moreInfo" : "moreInfo white";
  };
  /* const { moreInfo } = props; */
  return (
    <section className={handleBackground(backgroundBlack)}>
      <article className="moreInfo__left">
        <p>{moreInfo.text}</p>
        <h3>{moreInfo.title}</h3>
        <span>
          {moreInfo.orderButton && (
            <TransparentButton
              text={"Order Now"}
              link={""}
              isWhite={backgroundBlack}
            />
          )}
          {moreInfo.viewInventoryButton && (
            <TransparentButton
              text={"View Inventory"}
              link={""}
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
