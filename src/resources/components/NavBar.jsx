import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NavBarStyle.css";

export function NavBar(props) {
  const { setMenuCoverClasss } = props;
  const navigate = useNavigate();

  return (
    <section className="navBarWrapper">
      <article className="teslaText">
        <button
          className="teslaButton"
          onClick={() => {
            navigate("/");
          }}
        >
          T E S L A
        </button>
      </article>
      <article className="productIndex">
        <button
          className="modelSButton"
          onClick={() => {
            navigate("/ModelS");
          }}
        >
          Model S
        </button>
        <button
          className="model3Button"
          onClick={() => {
            navigate("/Model3");
          }}
        >
          Model 3
        </button>
        <button
          className="modelXButton"
          onClick={() => {
            navigate("/ModelX");
          }}
        >
          Model X
        </button>
        <button
          className="modelYButton"
          onClick={() => {
            navigate("/ModelY");
          }}
        >
          Model Y
        </button>
        <button
          className="solarRoofButton"
          onClick={() => {
            navigate("/SolarRoof");
          }}
        >
          Solar Roof
        </button>
        <button
          className="solarPanelButton"
          onClick={() => {
            navigate("/SolarPanel");
          }}
        >
          Solar Panel
        </button>
      </article>
      <article className="optionsIndex">
        <button
          className="shopButton"
          onClick={() => {
            navigate("/Shop");
          }}
        >
          Shop
        </button>
        <button
          className="accountButton"
          onClick={() => {
            navigate("/Account");
          }}
        >
          Account
        </button>
        <button
          className="menuButton"
          onClick={() => setMenuCoverClasss("menuCoverPage")}
        >
          Menu
        </button>
      </article>
    </section>
  );
}
