import React from "react";
import { TransparentButton } from "../../transparentButton";

import "./sideTitleWithButtons.scss";

const SideTitleWithButtons = ({ title = "Model S", text = "" }) => {
  return (
    <article className="side-title">
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      <span>
        <TransparentButton text={"Order Now"} link={"/Order"} isWhite={false} />
        <TransparentButton
          text={"View Inventory"}
          link={"/notFound"}
          isWhite={false}
          isGrey={true}
        />
      </span>
    </article>
  );
};

export default SideTitleWithButtons;
