import React from "react";
import { useNavigate } from "react-router-dom";

import "./transparentButton.scss";

const TransparentButton = ({
  text,
  link = "/",
  isWhite = false,
  isGrey = false,
  handleOrder = () => {},
}) => {
  const navigate = useNavigate();
  const handleColor = (white, grey) => {
    if (grey) {
      return "orderButton grey";
    } else {
      return white ? "orderButton white" : "orderButton";
    }
  };

  return (
    /* must modify onclick callback */
    <button className={handleColor(isWhite, isGrey)} onClick={handleOrder}>
      {text}
    </button>
  );
};

export default TransparentButton;
