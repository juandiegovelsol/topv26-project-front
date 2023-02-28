import React from "react";

import "./imageFullHeigth.scss";

const ImageFullHeigth = ({ imgSrc }) => {
  return (
    <article className="image-full-heigth">
      <img src={imgSrc} alt="Full Heigth" />
    </article>
  );
};

export default ImageFullHeigth;
