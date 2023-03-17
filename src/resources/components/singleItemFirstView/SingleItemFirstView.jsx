import React from "react";
import "./SingleItemFirstView.scss";

const SingleItemFirstView = ({ ItemFirstData, children }) => {
  const setHeigth = (heigth) => {
    return heigth ? "singleItem" : "singleItem halfSize";
  };

  const img = ItemFirstData.imageSrc || "";
  const vid = ItemFirstData.videoSrc || "";
  /* const title = ItemFirstData.moreInfo.title || ""; */
  /* console.log("Title", title, "Image...", img, "Video...", vid); */
  return (
    <section className={setHeigth(ItemFirstData.fullHeigth)}>
      {ItemFirstData.title && (
        <h3 className="articleTitle">{ItemFirstData.title}</h3>
      )}
      {ItemFirstData.lowerText && (
        <p className="h2LowerText">{ItemFirstData.lowerText}</p>
      )}

      <span className="backgroundImageWrapper">
        {img && <img src={img} className="mainBackgroundImage" alt="Model3" />}
        {vid && (
          <video autoPlay muted loop>
            <source src={vid} type="video/mp4" />
          </video>
        )}
      </span>
      {children}
    </section>
  );
};

export default SingleItemFirstView;
