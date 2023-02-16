import React, { useState } from "react";
import "./TeslaArticleStyle.css";

const TeslaArticle = (props) => {
  const { keys, titleText, additionalText, source, button1, button2 } = props;
  const setClassFn = (button) => {
    if (button === "") {
      return "demoDriveButtonHidden";
    } else {
      return "demoDriveButton";
    }
  };
  const setScrollSnapFeature = (index) => {
    if (index % 2 === 1) {
      return "articleWrapper";
    } else {
      return "articleWrapper scrollSnapAlways";
    }
  };
  return (
    <article className={setScrollSnapFeature(keys)} key={keys}>
      <h2 className="articleTitle">{titleText}</h2>
      <p className="h2LowerText">{additionalText}</p>
      <span className="mainBackgroundImageWrapper">
        <img src={source} className="mainBackgroundImage" alt="Article" />
      </span>

      <span className="articleButtons">
        <button className="customOrderButton">{button1}</button>
        <button className={setClassFn(button2)}>{button2}</button>
      </span>
    </article>
  );
};

export default TeslaArticle;
