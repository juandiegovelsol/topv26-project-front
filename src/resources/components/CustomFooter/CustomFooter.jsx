import React from "react";

import "./customFooter.scss";

const CustomFooter = ({ isBlack = false }) => {
  return (
    <footer className={`custom-footer ${isBlack && "black"}`}>
      <button>Tesla 2023</button>
      <button>Privacy & Legal</button>
      <button>Vehicle Recalls</button>
      <button>Contact</button>
      <button>Carreers</button>
      <button>News</button>
      <button>Engage</button>
      <button>Locations</button>
    </footer>
  );
};

export default CustomFooter;
