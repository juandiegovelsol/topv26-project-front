import React from "react";

import { TransparentButton } from "../../transparentButton";

import "./sideInfo.scss";

const SideInfo = ({ preTitle, title, text, button1, button2 }) => {
  return (
    <article className="side-info">
      <span className="side-info__top">
        <p>{preTitle}</p>
        <h3>{title}</h3>
        <p>{text}</p>
      </span>
      <span className="side-info__bottom">
        <TransparentButton text={button1} />
        <TransparentButton text={button2} isGrey={true} />
      </span>
    </article>
  );
};

export default SideInfo;
