import React from "react";
import { useNavigate } from "react-router-dom";

import "./NavBar.scss";

const NavBar = (props) => {
  const { colorWhitee = false, setMenuCoverClasss } = props;
  /* console.log(props); */
  const navigate = useNavigate();
  const setWhite = (colorWhite) => {
    if (colorWhite) {
      return "white";
    } else {
      return "";
    }
  };

  return (
    <section className="navBarWrapper">
      <article className="teslaText">
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/");
          }}
        >
          T E S L A
        </button>
      </article>
      <article className="productIndex">
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/ModelS");
          }}
        >
          Model S
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/Model3");
          }}
        >
          Model 3
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/ModelX");
          }}
        >
          Model X
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/ModelY");
          }}
        >
          Model Y
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/SolarRoof");
          }}
        >
          Solar Roof
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/SolarPanel");
          }}
        >
          Solar Panel
        </button>
      </article>
      <article className="optionsIndex">
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/Shop");
          }}
        >
          Shop
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => {
            navigate("/Account");
          }}
        >
          Account
        </button>
        <button
          className={setWhite(colorWhitee)}
          onClick={() => setMenuCoverClasss("menuCoverPage")}
        >
          Menu
        </button>
      </article>
    </section>
  );
};

export default NavBar;
