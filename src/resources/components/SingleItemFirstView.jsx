import React from "react";
import "../styles/SingleItemFirstView.css";

export function SigleItemFirstView(props) {
  const { ItemFirstData } = props;
  return (
    <section className="singleItem">
      <h3 className="articleTitle">{ItemFirstData.title}</h3>
      <p className="h2LowerText">{ItemFirstData.lowerText}</p>
      <span className="backgroundImageWrapper">
        <img
          src={ItemFirstData.imageSrc}
          className="mainBackgroundImage"
          alt="Model3"
        />
      </span>
    </section>
  );
}
