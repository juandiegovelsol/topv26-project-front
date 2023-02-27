import React, { useState } from "react";

import { Video } from "../videoCarrousel/Video";

import "./selectorWithImage.scss";

const SelectorWithImage = ({
  title,
  text,
  footer = "",
  options,
  isWhite = true,
}) => {
  const [selector, setSelector] = useState(0);
  const handleOpacity = (selected, index) => {
    if (selected === index) {
      return "opac";
    } else {
      return "";
    }
  };
  const handleBackgroundColor = (isWhite) => {
    return isWhite ? "selector-with-image white" : "selector-with-image";
  };
  return (
    <section className={handleBackgroundColor(isWhite)}>
      <article className="selector-with-image__title">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </article>
      <article className="selector-with-image__image">
        {options[selector].isImage && (
          <img src={options[selector].imgSrc} alt={options[selector].title} />
        )}
        {!options[selector].isImage && (
          <video key={options[selector].key} autoPlay muted loop>
            <source src={options[selector].imgSrc} type="video/mp4" />
          </video>
        )}
      </article>

      <article className="selector-with-image__selectors">
        {options.map((item, index) => (
          <span
            onClick={() => {
              setSelector(index);
            }}
            className={handleOpacity(selector, index)}
            key={item.key}
          >
            <button></button>
            <h4>{item.title}</h4>
            {item.text && <p>{item.text}</p>}
            {item.info && (
              <div className="info">
                {item.info.map((element, index) => (
                  <div className="info__items" key={index}>
                    <h5>{element.first}</h5>
                    <p>{element.second}</p>
                  </div>
                ))}
              </div>
            )}
          </span>
        ))}
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
