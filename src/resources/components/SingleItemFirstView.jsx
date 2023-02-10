import React from "react";
import "../styles/SingleItemFirstView.css";
/* import model_3_image from "../images/model-3.jfif"; */

export function SigleItemFirstView(props) {
  const { ItemFirstData } = props;
  const info = ItemFirstData.info;
  const showOrHide = (ActualClass, content) => {
    if (content === "") {
      return `${ActualClass} hidden`;
    } else {
      return ActualClass;
    }
  };
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
      <article className="articleInfo">
        {info.map((item) => {
          return (
            <span className="articleInfoSpan">
              <p className={showOrHide("articleInfoP1", item.p1)}>{item.p1}</p>
              <p className={showOrHide("articleInfoP2", item.p2)}>{item.p2}</p>
              <button className={showOrHide("articleInfoButton", item.button)}>
                {item.button}
              </button>
            </span>
          );
        })}
      </article>
    </section>
  );
}
