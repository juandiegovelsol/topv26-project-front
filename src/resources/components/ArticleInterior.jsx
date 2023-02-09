import React from "react";
/* import model_s_interior from "../images/Model-S-Interior.jfif"; */
/* import "../styles/ArticleInterior.css"; */

export function ArticleInterior(props) {
  const { h4Text, imageSrc } = props;
  return (
    <section className="modelSInterior">
      <h4>{h4Text}</h4>
      <article>
        <img src={imageSrc} alt="model-s-interior" />
      </article>
    </section>
  );
}
