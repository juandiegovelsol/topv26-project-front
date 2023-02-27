import React, { useState } from "react";

import "./selectorWithImage.scss";

const SelectorWithImage = ({ title, text, footer, option1, option2 }) => {
  const [selector, setSelector] = useState(option1);
  const [opacity1, setOpacity1] = useState("opac");
  const [opacity2, setOpacity2] = useState("");
  return (
    <section className="selector-with-image">
      <article className="selector-with-image__title">
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
      <article className="selector-with-image__image">
        <img src={selector.imgSrc} alt={selector.title} />
      </article>
      <article className="selector-with-image__selectors">
        <span
          className={opacity1}
          onClick={() => {
            setSelector(option1);
            setOpacity1("opac");
            setOpacity2("");
          }}
        >
          <button></button>
          <h4>{option1.title}</h4>
          <p>{option1.text}</p>
          <div className="info">
            {option1.info.map((item, index) => (
              <div className="info__items">
                <h5>{item.first}</h5>
                <p>{item.second}</p>
              </div>
            ))}
          </div>
        </span>
        <span
          className={opacity2}
          onClick={() => {
            setSelector(option2);
            setOpacity1("");
            setOpacity2("opac");
          }}
        >
          <button></button>
          <h4>{option2.title}</h4>
          <p>{option2.text}</p>
          <div className="info">
            {option2.info.map((item, index) => (
              <div className="info__items">
                <h5>{item.first}</h5>
                <p>{item.second}</p>
              </div>
            ))}
          </div>
        </span>
      </article>
      {footer && (
        <article className="selector-with-image__footer">
          <p>{footer}</p>
        </article>
      )}
    </section>
  );
};

export default SelectorWithImage;
