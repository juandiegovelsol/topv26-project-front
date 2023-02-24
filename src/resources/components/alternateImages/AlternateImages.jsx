import React from "react";

import "./alternateImages.scss";

const AlternateImages = ({ alternateImages }) => {
  return (
    <section className="alternateImages">
      {alternateImages.map(({ key, media, image, oriented, title, text }) => (
        <article className="alternateImages__each" key={key}>
          <span>
            {image && <img src={media} alt={media} />}
            {!image && (
              <video key={title} autoplay="true" muted loop>
                <source src={media} />
              </video>
            )}
          </span>
        </article>
      ))}
    </section>
  );
};

export default AlternateImages;
