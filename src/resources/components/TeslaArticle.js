import React, { useState } from "react";

export function TeslaArticle(props) {
  const { keys, titleText, additionalText, source, button1, button2 } = props;
  const [buttonClass, setButtonClass] = useState("demoDriveButton");
  if (button2 === "") {
    setButtonClass("demoDriveButtonHidden");
  }
  return (
    <section className="articleWrapper" key={keys}>
      <h2 className="articleTitle">{titleText}</h2>
      <p className="h2LowerText">{additionalText}</p>
      <article className="mainBackgroundImageWrapper">
        <img src={source} className="mainBackgroundImage" alt="Article image" />
      </article>

      <article className="articleButtons">
        <button className="customOrderButton">{button1}</button>
        <button className={buttonClass}>{button2}</button>
      </article>
    </section>
  );
}
