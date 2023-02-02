import React, { useState } from "react";

export function TeslaArticle(props) {
  const { keys, titleText, additionalText, source } = props;
  return (
    <section className="articleWrapper" key={keys}>
      <h2 className="articleTitle">{titleText}</h2>
      <p className="h2LowerText">{additionalText}</p>
      <article className="mainBackgroundImageWrapper">
        <img src={source} className="mainBackgroundImage" alt="Article image" />
      </article>

      <article className="articleButtons">
        <button className="customOrderButton">Custom Order</button>
        <button className="demoDriveButton">Demo Drive</button>
      </article>
    </section>
  );
}
