import React from "react";
import "./SingleItemFirstView.scss";

const SingleItemFirstView = (props) => {
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
};

export default SingleItemFirstView;
