import React from "react";

import "./imageFullHeigth.scss";

const ImageFullHeigth = ({ imgSrc, isHalf = false }) => {
  const handleWidth = (IsHalf) => {
    return IsHalf ? "image-full-heigth half" : "image-full-heigth";
  };

  return (
    <article className={handleWidth(isHalf)}>
      <img src={imgSrc} alt="Full Heigth" />
    </article>
  );
};

export default ImageFullHeigth;
