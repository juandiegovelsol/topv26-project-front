import model_3_image from "./resources/images/model-3.jfif";
import model_y_image from "./resources/images/model-y.jfif";
import model_s_image from "./resources/images/model-s.jfif";
import model_x_image from "./resources/images/model-x.jfif";
import solar_panels_image from "./resources/images/solar-panels.jfif";
import solar_roof_image from "./resources/images/solar-roof.webp";
import accessories_image from "./resources/images/accessories.jfif";
import "./App.css";
import { TeslaArticle } from "./TeslaArticle";
import React, { useState } from "react";
const data = [
  {
    articleTitle: "Model 3",
    text: "Leasing starting at $399/mo",
    source: model_3_image,
  },
  {
    articleTitle: "Model Y",
    text: "",
    source: model_y_image,
  },
  {
    articleTitle: "Model S",
    text: "",
    source: model_s_image,
  },
  {
    articleTitle: "Model X",
    text: "",
    source: model_x_image,
  },
  {
    articleTitle: "Solar Panels",
    text: "Lowest Cost Solar Panels in America",
    source: solar_panels_image,
  },
  {
    articleTitle: "Solar Roof",
    text: "Produce Clean Energy From Your Roof",
    source: solar_roof_image,
  },
  {
    articleTitle: "Accessories",
    text: "",
    source: accessories_image,
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
        {data.map((item, index) => {
          return (
            <TeslaArticle
              keys={index}
              titleText={item.articleTitle}
              additionalText={item.text}
              source={item.source}
            />
          );
        })}
      </main>
      <footer className="footerWrapper"></footer>
    </div>
  );
}

export default App;
