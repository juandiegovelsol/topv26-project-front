import React from "react";

import "./alternateImages.scss";

const AlternateImages = ({ alternateImages }) => {
  return (
    <section className="alternateImages">
      {alternateImages.map(({ key, media, image, title, text }) => (
        <article className="alternateImages__each" key={key}>
          <span className="media">
            {image && <img src={media} alt={media} />}
            {!image && (
              <video key={title} autoplay="true" muted loop>
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
