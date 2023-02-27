import React from "react";

import "./alternateImages.scss";

const AlternateImages = ({ alternateImages, inverted = false }) => {
  const handleInvert = (isInverted) => {
    return isInverted
      ? "alternateImages__each inverted"
      : "alternateImages__each";
  };
  return (
    <section className="alternateImages">
      {alternateImages.map(({ key, media, image, title, text }) => (
        <article className={handleInvert(inverted)} key={key}>
          <span className="media">
            {image && <img src={media} alt={media} />}
            {!image && (
              <video key={title} autoPlay muted loop>
                <source src={media} />
              </video>
            )}
          </span>
          <span className="text">
            <h3>{title}</h3>
            <p>{text}</p>
          </span>
        </article>
      ))}
    </section>
  );
};

export default AlternateImages;
