import React from "react";
import "./SingleItemFirstView.scss";

const SingleItemFirstView = (props) => {
  const { ItemFirstData } = props;
  const setHeigth = (heigth) => {
    return heigth ? "singleItem" : "singleItem halfSize";
  };

  return (
    <section className={setHeigth(ItemFirstData.fullHeigth)}>
      {ItemFirstData.title && (
        <h3 className="articleTitle">{ItemFirstData.title}</h3>
      )}
      {ItemFirstData.lowerText && (
        <p className="h2LowerText">{ItemFirstData.lowerText}</p>
      )}

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
