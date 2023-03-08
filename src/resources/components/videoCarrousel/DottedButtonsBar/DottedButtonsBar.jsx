import React from "react";

import "./dottedButtonsBar.scss";

const DottedButtonsBar = ({ videoArticles, setSelector }) => {
  return (
    <article className="dottedVideoNavBar">
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
