import React from "react";

import "./imageFullHeigth.scss";

const ImageFullHeigth = ({
  imgSrc,
  isHalf = false,
  isFullWidth = false,
  children,
}) => {
  const handleWidth = (IsHalf) => {
    return IsHalf
      ? "image-full-heigth half"
      : isFullWidth
      ? "image-full-heigth full-width"
      : "image-full-heigth";
  };

  return (
    <article className={handleWidth(isHalf)}>
      <img src={imgSrc} alt="Full Heigth" />
      {children}
    </article>
  );
};

export default ImageFullHeigth;
