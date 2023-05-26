import React from "react";

import "./pay-button.scss";

const PayButton = ({ text, handlePayment }) => {
  return (
    <button className="payment-button" onClick={handlePayment}>
      {text}
    </button>
  );
};

export default PayButton;
