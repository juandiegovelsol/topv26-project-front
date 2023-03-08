import React from "react";
import { TransparentButton } from "../../transparentButton";

import "./sideTitleWithButtons.scss";

const SideTitleWithButtons = () => {
  return (
    <article className="side-title">
      <h3>Model S</h3>
      <span>
        <TransparentButton text={"Order Now"} link={""} isWhite={false} />
        <TransparentButton
          text={"View Inventory"}
          link={""}
          isWhite={false}
          isGrey={true}
        />
      </span>
    </article>
  );
};

export default SideTitleWithButtons;
