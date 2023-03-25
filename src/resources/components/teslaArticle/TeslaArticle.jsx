import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeslaArticleStyle.scss";

const TeslaArticle = (props) => {
  const navigate = useNavigate();
  const {
    keys,
    titleText,
    additionalText,
    source,
    button1,
    button2,
    link1 = "/Order",
    link2 = "/notFound",
  } = props;
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
  const redirect = (route) => {
    navigate(`${route}`);
  };
  return (
    <article className={setScrollSnapFeature(keys)} key={keys}>
      <h2 className="articleTitle">{titleText}</h2>
      <p className="h2LowerText">{additionalText}</p>
      <span className="mainBackgroundImageWrapper">
        <img src={source} className="mainBackgroundImage" alt="Article" />
      </span>

      <span className="articleButtons">
        <button
          className="customOrderButton"
          onClick={() => {
            redirect(link1);
          }}
        >
          {button1}
        </button>
        <button
          className={setClassFn(button2)}
          onClick={() => {
            redirect(link2);
          }}
        >
          {button2}
        </button>
      </span>
    </article>
  );
};

export default TeslaArticle;
