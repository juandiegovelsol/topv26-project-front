import React from "react";

import "./dottedButtonsBar.scss";

const DottedButtonsBar = ({ videoArticles, setSelector, isWhite = false }) => {
  return (
    <article className={`dottedVideoNavBar ${isWhite && "white"}`}>
      {videoArticles.map(({ key }) => (
        <button
          key={key}
          onClick={() => {
            setSelector(key);
          }}
        ></button>
      ))}
    </article>
  );
};

export default DottedButtonsBar;
