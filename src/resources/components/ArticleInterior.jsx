import React from "react";
import "../styles/ArticleInterior.css";

export function ArticleInterior(props) {
  const { h4Text, imgSrc } = props;
  return (
    <section className="modelInterior">
      <article className="modelInteriorTitle">
        <h4>{h4Text}</h4>
      </article>
      <article className="modelInteriorImgWrapper">
        <img src={imgSrc} alt="model-interior" />
      </article>
    </section>
  );
}
