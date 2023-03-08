import React, { useState } from "react";

import "./sideInfoCompare.scss";

const SideInfoCompare = ({
  titleStrong = "",
  title = "",
  button1 = "",
  button2 = "",
  info = [],
}) => {
  const [selector, setSelector] = useState(0);
  return (
    <article className="side-info-compare">
      <h3 className="side-info-compare__title">
        <strong>{titleStrong}</strong> {title}
      </h3>
      <span className="side-info-compare__buttons">
        <button
          onClick={() => {
            setSelector(0);
          }}
        >
          {button1}
        </button>
        <button
          onClick={() => {
            setSelector(1);
          }}
        >
          {button2}
        </button>
      </span>
      <span className="side-info-compare__info">
        {info[selector].map((item, index) => (
          <div className="specifications" key={index}>
            <div></div>
            <p className="p1">{item.p1}</p>
            <p className="p2">{item.p2}</p>
          </div>
        ))}
      </span>
    </article>
  );
};

export default SideInfoCompare;
