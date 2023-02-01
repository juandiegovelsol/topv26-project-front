/* import model_s_image from "./Model-S.jfif"; */
import model_3_image from "./resources/images/model-3.jfif";
import "./App.css";
import { TeslaArticle } from "./TeslaArticle";
import React, { useState } from "react";
const data = [
  {
    articleTitle: "Model 3",
    text: "Leasing starting at $399/mo",
    source: model_3_image,
  },
];

function App() {
  return (
    <div className="App">
      <header className="headerWrapper">
        <section className="headerTextWrapper">
          <span className="headerText">
            Until March 2023, certain new Model 3 and Model Y vehicles qualify
            for a $7,500 federal tax credit for eligible buyers. Learn More
          </span>
        </section>
        <section className="navBarWrapper">
          <article className="teslaText">
            <button className="teslaButton">T E S L A</button>
          </article>
          <article className="productIndex">
            <button className="modelSButton">Model S</button>
            <button className="model3Button">Model 3</button>
            <button className="modelXButton">Model X</button>
            <button className="modelYButton">Model Y</button>
            <button className="solarRoofButton">Solar Roof</button>
            <button className="solarPanelButton">Solar Panel</button>
          </article>
          <article className="optionsIndex">
            <button className="shopButton">Shop</button>
            <button className="accountButton">Account</button>
            <button className="menuButton">Menu</button>
          </article>
        </section>
      </header>
      <main className="mainWrapper">
        {data.map((item, index) => (
          <TeslaArticle
            keys={index}
            titleText={item.articleTitle}
            additionalText={item.text}
            source={item.source}
          />
        ))}
        {/* <section className="articleWrapper">
          <h2 className="articleTitle">Model 3</h2>
          <p className="h2LowerText">Leasing starting at $399/mo</p>
          <article className="mainBackgroundImageWrapper">
            <img
              src={model_3_image}
              className="mainBackgroundImage"
              alt="Model 3"
            />
          </article>

          <article className="articleButtons">
            <button className="customOrderButton">Custom Order</button>
            <button className="demoDriveButton">Demo Drive</button>
          </article>
        </section> */}
      </main>
      <footer className="footerWrapper"></footer>
    </div>
  );
}

export default App;
